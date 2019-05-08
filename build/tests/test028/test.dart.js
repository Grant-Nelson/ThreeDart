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
a[c]=function(){a[c]=function(){H.m4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iE:function iE(a){this.a=a},
iC:function(){return new P.cs("No element")},
kN:function(){return new P.cs("Too many elements")},
q:function q(a){this.a=a},
eK:function eK(){},
bF:function bF(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fe:function fe(a,b,c){this.a=a
this.b=b
this.$ti=c},
ff:function ff(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fg:function fg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
e0:function e0(){},
e_:function e_(){},
bY:function(a){var u,t
u=H.K(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lM:function(a){return v.types[H.a2(a)]},
lT:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iaD},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.al(a)
if(typeof u!=="string")throw H.i(H.bT(a))
return u},
l6:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.f3(u)
t=u[0]
s=u[1]
return new H.fB(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cm:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bI:function(a){return H.kY(a)+H.iS(H.bt(a),0,null)},
kY:function(a){var u,t,s,r,q,p,o,n,m
u=J.U(a)
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
return H.bY(r.length>1&&C.j.aR(r,0)===36?C.j.bp(r,1):r)},
jw:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
l5:function(a){var u,t,s,r
u=H.b([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.bT(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bw(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.bT(r))}return H.jw(u)},
jx:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bT(s))
if(s<0)throw H.i(H.bT(s))
if(s>65535)return H.l5(a)}return H.jw(a)},
iG:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bw(u,10))>>>0,56320|u&1023)}throw H.i(P.ax(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l4:function(a){var u=H.bH(a).getFullYear()+0
return u},
l2:function(a){var u=H.bH(a).getMonth()+1
return u},
kZ:function(a){var u=H.bH(a).getDate()+0
return u},
l_:function(a){var u=H.bH(a).getHours()+0
return u},
l1:function(a){var u=H.bH(a).getMinutes()+0
return u},
l3:function(a){var u=H.bH(a).getSeconds()+0
return u},
l0:function(a){var u=H.bH(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.bT(a))},
j:function(a,b){if(a==null)J.bv(a)
throw H.i(H.cT(a,b))},
cT:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.a2(J.bv(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.bD(b,a,"index",null,u)
return P.fz(b,"index",null)},
lJ:function(a,b,c){if(a>c)return new P.bJ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bJ(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
bT:function(a){return new P.aC(!0,a,null,null)},
lF:function(a){if(typeof a!=="number")throw H.i(H.bT(a))
return a},
i:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k9})
u.name=""}else u.toString=H.k9
return u},
k9:function(){return J.al(this.dartException)},
p:function(a){throw H.i(a)},
z:function(a){throw H.i(P.bb(a))},
aT:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.h4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jH:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jq:function(a,b){return new H.fu(a,b==null?null:b.method)},
iF:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.f6(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.iq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bw(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iF(H.h(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jq(H.h(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kc()
p=$.kd()
o=$.ke()
n=$.kf()
m=$.ki()
l=$.kj()
k=$.kh()
$.kg()
j=$.kl()
i=$.kk()
h=q.ap(t)
if(h!=null)return u.$1(H.iF(H.K(t),h))
else{h=p.ap(t)
if(h!=null){h.method="call"
return u.$1(H.iF(H.K(t),h))}else{h=o.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=m.ap(t)
if(h==null){h=l.ap(t)
if(h==null){h=k.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=j.ap(t)
if(h==null){h=i.ap(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jq(H.K(t),h))}}return u.$1(new H.he(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dL()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dL()
return a},
bW:function(a){var u
if(a==null)return new H.ej(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ej(a)},
lL:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a_(0,a[t],a[s])}return b},
lS:function(a,b,c,d,e,f){H.d(a,"$ibg")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.o("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var u
H.a2(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lS)
a.$identity=u
return u},
kC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.U(d).$ia){u.$reflectionInfo=d
s=H.l6(u).r}else s=d
r=e?Object.create(new H.fQ().constructor.prototype):Object.create(new H.c1(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aJ
if(typeof p!=="number")return p.I()
$.aJ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jd(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lM,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jb:H.iu
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jd(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kz:function(a,b,c,d){var u=H.iu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jd:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kz(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.I()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c2
if(q==null){q=H.ex("self")
$.c2=q}return new Function(r+H.h(q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.I()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.c2
if(q==null){q=H.ex("self")
$.c2=q}return new Function(r+H.h(q)+"."+H.h(u)+"("+o+");}")()},
kA:function(a,b,c,d){var u,t
u=H.iu
t=H.jb
switch(b?-1:a){case 0:throw H.i(H.l9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kB:function(a,b){var u,t,s,r,q,p,o,n
u=$.c2
if(u==null){u=H.ex("self")
$.c2=u}t=$.ja
if(t==null){t=H.ex("receiver")
$.ja=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kA(r,!p,s,b)
if(r===1){u="return function(){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+");"
t=$.aJ
if(typeof t!=="number")return t.I()
$.aJ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+", "+n+");"
t=$.aJ
if(typeof t!=="number")return t.I()
$.aJ=t+1
return new Function(u+t+"}")()},
iV:function(a,b,c,d,e,f,g){return H.kC(a,b,H.a2(c),d,!!e,!!f,g)},
iu:function(a){return a.a},
jb:function(a){return a.c},
ex:function(a){var u,t,s,r,q
u=new H.c1("self","target","receiver","name")
t=J.f3(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aG(a,"String"))},
mM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aG(a,"double"))},
lY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aG(a,"num"))},
iT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aG(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aG(a,"int"))},
k7:function(a,b){throw H.i(H.aG(a,H.bY(H.K(b).substring(2))))},
m_:function(a,b){throw H.i(H.ky(a,H.bY(H.K(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.k7(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.m_(a,b)},
ik:function(a){if(a==null)return a
if(!!J.U(a).$ia)return a
throw H.i(H.aG(a,"List<dynamic>"))},
lU:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ia)return a
if(u[b])return a
H.k7(a,b)},
k1:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
er:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.k1(J.U(a))
if(u==null)return!1
return H.jT(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.iP)return a
$.iP=!0
try{if(H.er(a,b))return a
u=H.io(b)
t=H.aG(a,u)
throw H.i(t)}finally{$.iP=!1}},
iW:function(a,b){if(a!=null&&!H.iU(a,b))H.p(H.aG(a,H.io(b)))
return a},
aG:function(a,b){return new H.h6("TypeError: "+P.eP(a)+": type '"+H.jX(a)+"' is not a subtype of type '"+b+"'")},
ky:function(a,b){return new H.ey("CastError: "+P.eP(a)+": type '"+H.jX(a)+"' is not a subtype of type '"+b+"'")},
jX:function(a){var u,t
u=J.U(a)
if(!!u.$ic3){t=H.k1(u)
if(t!=null)return H.io(t)
return"Closure"}return H.bI(a)},
m4:function(a){throw H.i(new P.eE(H.K(a)))},
l9:function(a){return new H.fG(a)},
k2:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bt:function(a){if(a==null)return
return a.$ti},
mN:function(a,b,c){return H.bX(a["$a"+H.h(c)],H.bt(b))},
ie:function(a,b,c,d){var u
H.K(c)
H.a2(d)
u=H.bX(a["$a"+H.h(c)],H.bt(b))
return u==null?null:u[d]},
a6:function(a,b,c){var u
H.K(b)
H.a2(c)
u=H.bX(a["$a"+H.h(b)],H.bt(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.a2(b)
u=H.bt(a)
return u==null?null:u[b]},
io:function(a){return H.bs(a,null)},
bs:function(a,b){var u,t
H.e(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bY(a[0].name)+H.iS(a,1,b)
if(typeof a=="function")return H.bY(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.h(b[t])}if('func' in a)return H.lv(a,b)
if('futureOr' in a)return"FutureOr<"+H.bs("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lv:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.m]
H.e(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.j(b,m)
o=C.j.I(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bs(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bs(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bs(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bs(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lK(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.K(u[g])
i=i+h+H.bs(d[c],b)+(" "+H.h(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iS:function(a,b,c){var u,t,s,r,q,p
H.e(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.b2("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bs(p,c)}return"<"+u.i(0)+">"},
bX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cS:function(a,b,c,d){var u,t
H.K(b)
H.ik(c)
H.K(d)
if(a==null)return!1
u=H.bt(a)
t=J.U(a)
if(t[b]==null)return!1
return H.k_(H.bX(t[d],u),null,c,null)},
e:function(a,b,c,d){H.K(b)
H.ik(c)
H.K(d)
if(a==null)return a
if(H.cS(a,b,c,d))return a
throw H.i(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bY(b.substring(2))+H.iS(c,0,null),v.mangledGlobalNames)))},
k_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
mK:function(a,b,c){return a.apply(b,H.bX(J.U(b)["$a"+H.h(c)],H.bt(b)))},
k4:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="H"||a===-1||a===-2||H.k4(u)}return!1},
iU:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="H"||b===-1||b===-2||H.k4(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.er(a,b)}u=J.U(a).constructor
t=H.bt(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.iU(a,b))throw H.i(H.aG(a,H.io(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.jT(a,b,c,d)
if('func' in a)return c.name==="bg"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cb" in t.prototype))return!1
r=t.prototype["$a"+"cb"]
q=H.bX(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.k_(H.bX(m,u),b,p,d)},
jT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aB(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aB(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aB(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aB(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lX(h,b,g,d)},
lX:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
mL:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
lV:function(a){var u,t,s,r,q,p
u=H.K($.k3.$1(a))
t=$.ic[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ij[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.K($.jZ.$2(a,u))
if(u!=null){t=$.ic[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ij[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.im(s)
$.ic[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ij[u]=s
return s}if(q==="-"){p=H.im(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.k6(a,s)
if(q==="*")throw H.i(P.jI(u))
if(v.leafTags[u]===true){p=H.im(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.k6(a,s)},
k6:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j0(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
im:function(a){return J.j0(a,!1,null,!!a.$iaD)},
lW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.im(u)
else return J.j0(u,c,null,null)},
lQ:function(){if(!0===$.j_)return
$.j_=!0
H.lR()},
lR:function(){var u,t,s,r,q,p,o,n
$.ic=Object.create(null)
$.ij=Object.create(null)
H.lP()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k8.$1(q)
if(p!=null){o=H.lW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lP:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bS(C.P,H.bS(C.U,H.bS(C.A,H.bS(C.A,H.bS(C.T,H.bS(C.Q,H.bS(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.k3=new H.ig(q)
$.jZ=new H.ih(p)
$.k8=new H.ii(o)},
bS:function(a,b){return a(b)||b},
kP:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.eW("Illegal RegExp pattern ("+String(r)+")",a,null))},
m2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
j2:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fB:function fB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fu:function fu(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
iq:function iq(a){this.a=a},
ej:function ej(a){this.a=a
this.b=null},
c3:function c3(){},
fW:function fW(){},
fQ:function fQ(){},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a){this.a=a},
ey:function ey(a){this.a=a},
fG:function fG(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
f5:function f5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bQ:function(a){return a},
cP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.cT(b,a))},
lu:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.lJ(a,b,c))
return b},
dx:function dx(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
dy:function dy(){},
fr:function fr(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
lK:function(a){return J.jj(a?Object.keys(a):[],null)},
lZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
id:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.j_==null){H.lQ()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.jI("Return interceptor for "+H.h(t(a,u))))}r=a.constructor
q=r==null?null:r[$.j3()]
if(q!=null)return q
q=H.lV(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.j3(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
kO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.it(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.ax(a,0,4294967295,"length",null))
return J.jj(new Array(a),b)},
jj:function(a,b){return J.f3(H.b(a,[b]))},
f3:function(a){H.ik(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.bE.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.f4.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
iX:function(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
iY:function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
iZ:function(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cF.prototype
return a},
ak:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).u(a,b)},
kr:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lT(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iX(a).j(a,b)},
ks:function(a,b,c,d){return J.ak(a).fB(a,b,c,d)},
es:function(a,b){return J.ak(a).ie(a,b)},
j6:function(a,b){return J.ak(a).D(a,b)},
ir:function(a,b){return J.iY(a).ai(a,b)},
kt:function(a){return J.ak(a).gjm(a)},
bu:function(a){return J.U(a).gK(a)},
c_:function(a){return J.iY(a).gR(a)},
bv:function(a){return J.iX(a).gp(a)},
ku:function(a){return J.ak(a).gkp(a)},
is:function(a,b){return J.ak(a).b2(a,b)},
j7:function(a){return J.iY(a).kh(a)},
kv:function(a,b,c){return J.iZ(a).bq(a,b,c)},
kw:function(a){return J.iZ(a).kv(a)},
al:function(a){return J.U(a).i(a)},
a8:function a8(){},
f4:function f4(){},
dh:function dh(){},
dj:function dj(){},
fw:function fw(){},
cF:function cF(){},
bl:function bl(){},
aL:function aL(a){this.$ti=a},
iD:function iD(a){this.$ti=a},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
di:function di(){},
dg:function dg(){},
df:function df(){},
bE:function bE(){}},P={
lj:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lC()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bU(new P.hv(u),1)).observe(t,{childList:true})
return new P.hu(u,t,s)}else if(self.setImmediate!=null)return P.lD()
return P.lE()},
lk:function(a){self.scheduleImmediate(H.bU(new P.hw(H.k(a,{func:1,ret:-1})),0))},
ll:function(a){self.setImmediate(H.bU(new P.hx(H.k(a,{func:1,ret:-1})),0))},
lm:function(a){P.iK(C.q,H.k(a,{func:1,ret:-1}))},
iK:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.h.a4(a.a,1000)
return P.ls(u<0?0:u,b)},
jG:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aR]})
u=C.h.a4(a.a,1000)
return P.lt(u<0?0:u,b)},
ls:function(a,b){var u=new P.ek(!0)
u.ft(a,b)
return u},
lt:function(a,b){var u=new P.ek(!1)
u.fu(a,b)
return u},
ln:function(a,b){var u,t,s
b.a=1
try{a.eF(new P.hF(b),new P.hG(b),null)}catch(s){u=H.au(s)
t=H.bW(s)
P.m0(new P.hH(b,u,t))}},
jO:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaA")
if(u>=4){t=b.cp()
b.a=a.a
b.c=a.c
P.cJ(b,t)}else{t=H.d(b.c,"$iaV")
b.a=2
b.c=a
a.dC(t)}},
cJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iab")
t=t.b
p=q.a
o=q.b
t.toString
P.i8(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cJ(u.a,b)}t=u.a
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
if(k){H.d(m,"$iab")
t=t.b
p=m.a
o=m.b
t.toString
P.i8(null,null,t,p,o)
return}j=$.T
if(j!=l)$.T=l
else j=null
t=b.c
if(t===8)new P.hL(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hK(s,b,m).$0()}else if((t&2)!==0)new P.hJ(u,s,b).$0()
if(j!=null)$.T=j
t=s.b
if(!!J.U(t).$icb){if(t.a>=4){i=H.d(o.c,"$iaV")
o.c=null
b=o.bv(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jO(t,o)
return}}h=b.b
i=H.d(h.c,"$iaV")
h.c=null
b=h.bv(i)
t=s.a
p=s.b
if(!t){H.A(p,H.v(h,0))
h.a=4
h.c=p}else{H.d(p,"$iab")
h.a=8
h.c=p}u.a=h
t=h}},
ly:function(a,b){if(H.er(a,{func:1,args:[P.L,P.aj]}))return H.k(a,{func:1,ret:null,args:[P.L,P.aj]})
if(H.er(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.i(P.it(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lx:function(){var u,t
for(;u=$.bR,u!=null;){$.cR=null
t=u.b
$.bR=t
if(t==null)$.cQ=null
u.a.$0()}},
lB:function(){$.iQ=!0
try{P.lx()}finally{$.cR=null
$.iQ=!1
if($.bR!=null)$.j4().$1(P.k0())}},
jW:function(a){var u=new P.e7(H.k(a,{func:1,ret:-1}))
if($.bR==null){$.cQ=u
$.bR=u
if(!$.iQ)$.j4().$1(P.k0())}else{$.cQ.b=u
$.cQ=u}},
lA:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bR
if(u==null){P.jW(a)
$.cR=$.cQ
return}t=new P.e7(a)
s=$.cR
if(s==null){t.b=u
$.cR=t
$.bR=t}else{t.b=s.b
s.b=t
$.cR=t
if(t.b==null)$.cQ=t}},
m0:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.T
if(C.l===t){P.ia(null,null,C.l,a)
return}t.toString
P.ia(null,null,t,H.k(t.cw(a),u))},
jF:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.T
if(t===C.l){t.toString
return P.iK(a,b)}return P.iK(a,H.k(t.cw(b),u))},
lh:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aR]}
H.k(b,u)
t=$.T
if(t===C.l){t.toString
return P.jG(a,b)}s=t.dO(b,P.aR)
$.T.toString
return P.jG(a,H.k(s,u))},
i8:function(a,b,c,d,e){var u={}
u.a=d
P.lA(new P.i9(u,e))},
jU:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
jV:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
lz:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
ia:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cw(d):c.jn(d,-1)
P.jW(d)},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
ek:function ek(a){this.a=a
this.b=null
this.c=0},
i2:function i2(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hE:function hE(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a){this.a=a},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a){this.a=a
this.b=null},
fR:function fR(){},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
ct:function ct(){},
fS:function fS(){},
aR:function aR(){},
ab:function ab(a,b){this.a=a
this.b=b},
i5:function i5(){},
i9:function i9(a,b){this.a=a
this.b=b},
hR:function hR(){},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function(a,b,c){H.ik(a)
return H.e(H.lL(a,new H.aM([b,c])),"$ijk",[b,c],"$ajk")},
kR:function(a,b){return new H.aM([a,b])},
dn:function(a,b,c,d){return new P.hP([d])},
iO:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lr:function(a,b,c){var u=new P.ed(a,b,[c])
u.c=a.e
return u},
kM:function(a,b,c){var u,t
if(P.iR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.cX()
C.a.h(t,a)
try{P.lw(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.jB(b,H.lU(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
iB:function(a,b,c){var u,t,s
if(P.iR(a))return b+"..."+c
u=new P.b2(b)
t=$.cX()
C.a.h(t,a)
try{s=u
s.a=P.jB(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iR:function(a){var u,t
for(u=0;t=$.cX(),u<t.length;++u)if(a===t[u])return!0
return!1},
lw:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.e(b,"$ia",[P.m],"$aa")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.h(u.gH())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.j(b,-1)
q=b.pop()
if(0>=b.length)return H.j(b,-1)
p=b.pop()}else{o=u.gH();++s
if(!u.w()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.j(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH();++s
for(;u.w();o=n,n=m){m=u.gH();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jl:function(a,b){var u,t,s
u=P.dn(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)u.h(0,H.A(a[s],b))
return u},
jm:function(a){var u,t
u={}
if(P.iR(a))return"{...}"
t=new P.b2("")
try{C.a.h($.cX(),a)
t.a+="{"
u.a=!0
a.ab(0,new P.fd(u,t))
t.a+="}"}finally{u=$.cX()
if(0>=u.length)return H.j(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hP:function hP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bP:function bP(a){this.a=a
this.c=this.b=null},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fa:function fa(){},
W:function W(){},
fc:function fc(){},
fd:function fd(a,b){this.a=a
this.b=b},
bG:function bG(){},
hW:function hW(){},
ee:function ee(){},
c4:function c4(){},
c6:function c6(){},
eM:function eM(){},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f_:function f_(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(){},
i3:function i3(a){this.b=this.a=0
this.c=a},
kJ:function(a){if(a instanceof H.c3)return a.i(0)
return"Instance of '"+H.bI(a)+"'"},
kT:function(a,b,c,d){var u,t
H.A(b,d)
u=J.kO(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a_(u,t,b)
return H.e(u,"$ia",[d],"$aa")},
kU:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gR(a);s.w();)C.a.h(t,H.A(s.gH(),c))
if(b)return t
return H.e(J.f3(t),"$ia",u,"$aa")},
iJ:function(a,b,c){var u,t
u=P.y
H.e(a,"$if",[u],"$af")
if(a.constructor===Array){H.e(a,"$iaL",[u],"$aaL")
t=a.length
c=P.jy(b,c,t,null,null,null)
return H.jx(b>0||c<t?C.a.f3(a,b,c):a)}return P.ld(a,b,c)},
ld:function(a,b,c){var u,t,s
H.e(a,"$if",[P.y],"$af")
u=J.c_(a)
for(t=0;t<b;++t)if(!u.w())throw H.i(P.ax(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gH())
return H.jx(s)},
l7:function(a,b,c){return new H.f5(a,H.kP(a,!1,!0,!1))},
jB:function(a,b,c){var u=J.c_(b)
if(!u.w())return a
if(c.length===0){do a+=H.h(u.gH())
while(u.w())}else{a+=H.h(u.gH())
for(;u.w();)a=a+c+H.h(u.gH())}return a},
jS:function(a,b,c,d){var u,t,s,r,q,p
H.e(a,"$ia",[P.y],"$aa")
if(c===C.x){u=$.kq().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.jr(H.A(b,H.a6(c,"c4",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iG(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kD:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d4:function(a){if(a>=10)return""+a
return"0"+a},
jf:function(a,b,c,d,e,f){return new P.bd(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kJ(a)},
kx:function(a){return new P.aC(!1,null,null,a)},
it:function(a,b,c){return new P.aC(!0,a,b,c)},
fz:function(a,b,c){return new P.bJ(null,null,!0,a,b,"Value not in range")},
ax:function(a,b,c,d,e){return new P.bJ(b,c,!0,a,d,"Invalid value")},
jy:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.ax(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.ax(b,a,c,"end",f))
return b}return c},
bD:function(a,b,c,d,e){var u=H.a2(e==null?J.bv(b):e)
return new P.f2(b,u,!0,a,c,"Index out of range")},
as:function(a){return new P.hf(a)},
jI:function(a){return new P.hd(a)},
jA:function(a){return new P.cs(a)},
bb:function(a){return new P.eC(a)},
o:function(a){return new P.ea(a)},
j1:function(a){H.lZ(a)},
I:function I(){},
ah:function ah(a,b){this.a=a
this.b=b},
x:function x(){},
bd:function bd(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
be:function be(){},
dA:function dA(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f2:function f2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hf:function hf(a){this.a=a},
hd:function hd(a){this.a=a},
cs:function cs(a){this.a=a},
eC:function eC(a){this.a=a},
fv:function fv(){},
dL:function dL(){},
eE:function eE(a){this.a=a},
ea:function ea(a){this.a=a},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(){},
y:function y(){},
f:function f(){},
aK:function aK(){},
a:function a(){},
H:function H(){},
aa:function aa(){},
L:function L(){},
aj:function aj(){},
m:function m(){},
b2:function b2(a){this.a=a},
lI:function(a){var u,t
u=J.U(a)
if(!!u.$ibh){t=u.gdX(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.en(a.data,a.height,a.width)},
lH:function(a){if(a instanceof P.en)return{data:a.a,height:a.b,width:a.c}
return a},
lG:function(a,b){var u={}
a.ab(0,new P.ib(u))
return u},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
eT:function eT(){},
eU:function eU(){},
hO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hQ:function hQ(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cp:function cp(){},
n:function n(){},
d_:function d_(){},
da:function da(){},
dD:function dD(){},
dF:function dF(){},
bL:function bL(){},
dG:function dG(){},
dO:function dO(){},
dZ:function dZ(){}},W={
j8:function(a){var u=document.createElement("a")
return u},
iv:function(a,b){var u=document.createElement("canvas")
return u},
kH:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).ao(u,a,b,c)
t.toString
u=W.B
u=new H.cG(new W.ae(t),H.k(new W.eL(),{func:1,ret:P.I,args:[u]}),[u])
return H.d(u.gaP(u),"$iN")},
kI:function(a){H.d(a,"$ibA")
return"wheel"},
c9:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ku(a)
if(typeof t==="string")u=a.tagName}catch(s){H.au(s)}return u},
hN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a,b,c,d){var u,t
u=W.hN(W.hN(W.hN(W.hN(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.jY(new W.hD(c),W.l)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.l]})
if(t)J.ks(a,b,u,!1)}return new W.hC(a,b,u,!1,[e])},
jP:function(a){var u,t
u=W.j8(null)
t=window.location
u=new W.br(new W.hV(u,t))
u.fh(a)
return u},
lo:function(a,b,c,d){H.d(a,"$iN")
H.K(b)
H.K(c)
H.d(d,"$ibr")
return!0},
lp:function(a,b,c,d){var u,t,s
H.d(a,"$iN")
H.K(b)
H.K(c)
u=H.d(d,"$ibr").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jR:function(){var u,t,s,r,q
u=P.m
t=P.jl(C.t,u)
s=H.v(C.t,0)
r=H.k(new W.i0(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.i_(t,P.dn(null,null,null,u),P.dn(null,null,null,u),P.dn(null,null,null,u),null)
t.fs(null,new H.fg(C.t,r,[s,u]),q,null)
return t},
jY:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.l)return a
return u.dO(a,b)},
u:function u(){},
cY:function cY(){},
et:function et(){},
c0:function c0(){},
b8:function b8(){},
bx:function bx(){},
by:function by(){},
b9:function b9(){},
c7:function c7(){},
eD:function eD(){},
av:function av(){},
c8:function c8(){},
eH:function eH(){},
d6:function d6(){},
d7:function d7(){},
hz:function hz(a,b){this.a=a
this.b=b},
N:function N(){},
eL:function eL(){},
l:function l(){},
bA:function bA(){},
eV:function eV(){},
dd:function dd(){},
bC:function bC(){},
de:function de(){},
bh:function bh(){},
cd:function cd(){},
aN:function aN(){},
dp:function dp(){},
ci:function ci(){},
a5:function a5(){},
ae:function ae(a){this.a=a},
B:function B(){},
ck:function ck(){},
dE:function dE(){},
fH:function fH(){},
bM:function bM(){},
dM:function dM(){},
dN:function dN(){},
fV:function fV(){},
cv:function cv(){},
aS:function aS(){},
aF:function aF(){},
h3:function h3(){},
bp:function bp(){},
hs:function hs(){},
aU:function aU(){},
cH:function cH(){},
cI:function cI(){},
e9:function e9(){},
ef:function ef(){},
hy:function hy(){},
hA:function hA(a){this.a=a},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hC:function hC(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hD:function hD(a){this.a=a},
br:function br(a){this.a=a},
am:function am(){},
dz:function dz(a){this.a=a},
ft:function ft(a){this.a=a},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(){},
hX:function hX(){},
hY:function hY(){},
i_:function i_(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i0:function i0(){},
hZ:function hZ(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ap:function ap(){},
hV:function hV(a,b){this.a=a
this.b=b},
eo:function eo(a){this.a=a},
i4:function i4(a){this.a=a},
e8:function e8(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
ep:function ep(){},
eq:function eq(){}},O={
eA:function(a){var u=new O.R([a])
u.bs(a)
return u},
R:function R(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ch:function ch(){this.b=this.a=null},
jD:function(a,b,c,d,e){var u,t,s,r,q
u=new O.aE()
t=u.a
u.a=e
e.gm().h(0,u.ga1())
s=new D.w("texture",t,u.a,u,[T.bN])
s.b=!0
u.q(s)
r=V.bm()
if(!J.Q(u.b,r)){t=u.b
u.b=r
s=new D.w("colorMatrix",t,r,u,[V.Y])
s.b=!0
u.q(s)}q=V.iH()
if(!J.Q(u.c,q)){t=u.c
u.c=q
s=new D.w("source",t,q,u,[V.bK])
s.b=!0
u.q(s)}if(!J.Q(u.d,b)){t=u.d
u.d=b
s=new D.w("destination",t,b,u,[V.bK])
s.b=!0
u.q(s)}if(u.e!==!1){u.e=!1
s=new D.w("flip",!0,!1,u,[P.I])
s.b=!0
u.q(s)}u.f=null
return u},
eG:function eG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fh:function fh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cf:function cf(){},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aO:function aO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fk:function fk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(){},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aE:function aE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
eN:function(a,b,c,d,e,f){var u=new E.ac()
u.a=d
u.b=!0
u.sfg(0,O.eA(E.ac))
u.y.aO(u.gjX(),u.gk_())
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
u.sd4(0,e)
u.ses(c)
return u},
l8:function(a,b){var u=new E.fC(a,b)
u.fb(a,b)
return u},
lg:function(a,b,c,d,e){var u,t,s,r
u=J.U(a)
if(!!u.$ibx)return E.jE(a,!0,!0,!0,!1)
t=W.iv(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdR(a).h(0,t)
r=E.jE(t,!0,!0,!0,!1)
r.a=a
return r},
jE:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dU()
t=P.kS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.o.bY(a,"webgl",t)
s=H.d(s==null?C.o.bY(a,"experimental-webgl",t):s,"$ibL")
if(s==null)H.p(P.o("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.l8(s,a)
r=new T.fY(s)
r.b=H.a2((s&&C.b).bZ(s,3379))
r.c=H.a2(C.b.bZ(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e1(a)
q=new X.f7()
q.c=new X.ao(!1,!1,!1)
q.sia(P.dn(null,null,null,P.y))
r.b=q
q=new X.fn(r)
q.f=0
q.r=V.b0()
q.x=V.b0()
q.Q=1
q.ch=1
r.c=q
q=new X.fb(r)
q.r=0
q.x=V.b0()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.h2(r)
q.e=0
q.f=V.b0()
q.r=V.b0()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfU(H.b([],[[P.ct,P.L]]))
q=r.z
p=document
o=W.a5
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.k(r.ghs(),n),!1,o))
q=r.z
m=W.l
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.k(r.ghC(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.k(r.ghm(),l),!1,m))
q=r.z
k=W.aN
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.k(r.ghG(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.k(r.ghE(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.k(r.ghK(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.k(r.ghO(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.k(r.ghM(),n),!1,o))
k=r.z
j=W.aU;(k&&C.a).h(k,W.a4(a,H.K(W.kI(a)),H.k(r.ghQ(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.k(r.ghu(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.k(r.ghw(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.k(r.ghS(),l),!1,m))
m=r.z
l=W.aF
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.k(r.gi7(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.k(r.gi3(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.k(r.gi5(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ah(Date.now(),!1)
u.cy=0
u.dE()
return u},
ew:function ew(){},
ac:function ac(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a}},Z={
iM:function(a,b,c){var u
H.e(c,"$ia",[P.y],"$aa")
u=a.createBuffer()
C.b.aw(a,b,u)
C.b.dQ(a,b,new Int16Array(H.bQ(c)),35044)
C.b.aw(a,b,null)
return new Z.e6(b,u)},
az:function(a){return new Z.aH(a)},
e6:function e6(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bq:function bq(a){this.a=a},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a){this.a=a}},D={
C:function(){var u=new D.bf()
u.sad(null)
u.saV(null)
u.c=null
u.d=0
return u},
ez:function ez(){},
bf:function bf(){var _=this
_.d=_.c=_.b=_.a=null},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
t:function t(a){this.a=a
this.b=null},
bj:function bj(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bk:function bk(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
w:function w(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
je:function(a,b){var u,t,s
u=new D.bc()
u.c=new V.V(1,1,1)
u.a=V.li()
t=u.b
u.b=b
b.gm().h(0,u.gfj())
s=new D.w("mover",t,u.b,u,[U.a3])
s.b=!0
u.aB(s)
if(!u.c.u(0,a)){t=u.c
u.c=a
s=new D.w("color",t,a,u,[V.V])
s.b=!0
u.aB(s)}return u},
bc:function bc(){var _=this
_.d=_.c=_.b=_.a=null},
X:function X(){},
dl:function dl(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dC:function dC(){},
dK:function dK(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){}},X={d1:function d1(a,b){this.a=a
this.b=b},dk:function dk(a,b){this.a=a
this.b=b},f7:function f7(){var _=this
_.d=_.c=_.b=_.a=null},dq:function dq(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fb:function fb(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b_:function b_(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fn:function fn(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cj:function cj(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fy:function fy(){},dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h2:function h2(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e1:function e1(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j9:function(a,b,c,d,e,f){var u=new X.ev()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.jC(0,null)
u.cx=new V.ag(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.iH()
u.saN(0,a)
u.saG(0,b)
return u},
iA:function(a,b,c,d,e,f,g){var u,t
u=new X.eX()
t=new V.ag(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.iH()
u.r=t
return u},
js:function(a,b,c,d,e){var u,t,s
u=new X.dB()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gm().h(0,u.gfv())
s=new D.w("mover",t,u.b,u,[U.a3])
s.b=!0
u.am(s)}s=u.c
if(!(Math.abs(s-b)<$.G().a)){u.c=b
s=new D.w("fov",s,b,u,[P.x])
s.b=!0
u.am(s)}s=u.d
if(!(Math.abs(s-d)<$.G().a)){u.d=d
s=new D.w("near",s,d,u,[P.x])
s.b=!0
u.am(s)}s=u.e
if(!(Math.abs(s-a)<$.G().a)){u.e=a
s=new D.w("far",s,a,u,[P.x])
s.b=!0
u.am(s)}return u},
ev:function ev(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bw:function bw(){},
eX:function eX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f1:function f1(){this.b=this.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){}},V={
m5:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.eW(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.j.aq("null",c)
return C.j.aq(C.i.eG(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
bV:function(a,b,c){var u,t,s,r,q,p
H.e(a,"$ia",[P.x],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.a_(u,p,C.j.aq(u[p],s))}return u},
cU:function(a,b){return C.i.ks(Math.pow(b,C.O.cN(Math.log(H.lF(a))/Math.log(b))))},
bm:function(){var u=$.fm
if(u==null){u=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fm=u}return u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.Y(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kX:function(a,b,c){return V.aP(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kW:function(a,b,c,d){return V.aP(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jp:function(a,b,c,d){d=V.jN()
return V.jo(V.jv(),d,new V.M(a,b,c))},
jo:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.B(0,Math.sqrt(c.G(c)))
t=b.be(u)
s=t.B(0,Math.sqrt(t.G(t)))
r=u.be(s)
q=new V.M(a.a,a.b,a.c)
p=s.T(0).G(q)
o=r.T(0).G(q)
n=u.T(0).G(q)
return V.aP(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b0:function(){var u=$.ju
if(u==null){u=new V.a1(0,0)
$.ju=u}return u},
jv:function(){var u=$.cl
if(u==null){u=new V.ad(0,0,0)
$.cl=u}return u},
iH:function(){var u=$.co
if(u==null){u=V.cn(0,0,1,1)
$.co=u}return u},
cn:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bK(a,b,c,d)},
e5:function(){var u=$.jM
if(u==null){u=new V.M(0,0,0)
$.jM=u}return u},
jN:function(){var u=$.jL
if(u==null){u=new V.M(0,1,0)
$.jL=u}return u},
li:function(){var u=$.hi
if(u==null){u=new V.M(0,0,1)
$.hi=u}return u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a){this.a=a},
cg:function cg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
Y:function Y(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
S:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.o("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aR(a,0)
t=C.j.aR(b,0)
s=new V.fA()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fI()
u.fc(a)
return u},
h1:function(){var u,t
u=new V.h0()
t=P.m
u.siC(new H.aM([t,V.cr]))
u.siH(new H.aM([t,V.cx]))
u.c=null
return u},
aW:function aW(){},
an:function an(){},
dr:function dr(){},
ai:function ai(){this.a=null},
fA:function fA(){this.b=this.a=null},
fI:function fI(){this.a=null},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b){this.a=a
this.b=b
this.c=null},
h0:function h0(){this.c=this.b=this.a=null},
cy:function cy(a){this.b=a
this.a=this.c=null},
m1:function(a){P.lh(C.K,new V.ip(a))},
la:function(a,b){var u=new V.fM()
u.fd(a,!0)
return u},
ba:function ba(){},
ip:function ip(a){this.a=a},
eF:function eF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eY:function eY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eZ:function eZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(){this.b=this.a=null},
fO:function fO(a){this.a=a},
fN:function fN(a){this.a=a},
fP:function fP(a){this.a=a}},U={
iw:function(){var u=new U.eB()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ix:function(a){var u=new U.c5()
u.sW(a)
return u},
eB:function eB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c5:function c5(){this.b=this.a=null},
cc:function cc(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
e2:function e2(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
iy:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=new M.d3()
u.saZ(a)
u.saM(0,b)
u.saz(c)
t=E.eN(null,!0,null,"",null,null)
s=F.iI()
r=s.a
q=new V.M(-1,-1,1)
q=q.B(0,Math.sqrt(q.G(q)))
p=r.by(new V.b1(1,2,4,6),new V.ag(1,0,0,1),new V.ad(-1,-1,0),new V.a1(0,1),q,null)
r=s.a
q=new V.M(1,-1,1)
q=q.B(0,Math.sqrt(q.G(q)))
o=r.by(new V.b1(0,3,4,6),new V.ag(0,0,1,1),new V.ad(1,-1,0),new V.a1(1,1),q,null)
r=s.a
q=new V.M(1,1,1)
q=q.B(0,Math.sqrt(q.G(q)))
n=r.by(new V.b1(0,2,5,6),new V.ag(0,1,0,1),new V.ad(1,1,0),new V.a1(1,0),q,null)
r=s.a
q=V.b0()
m=new V.M(-1,1,1)
m=m.B(0,Math.sqrt(m.G(m)))
l=r.by(new V.b1(0,2,4,7),new V.ag(1,1,0,1),new V.ad(-1,1,0),q,m,null)
s.d.jg(H.b([p,o,n,l],[F.at]))
s.aF()
t.sd4(0,s)
u.d=t
u.e=null
return u},
ji:function(a,b,c,d,e){var u=new M.d8()
u.sfI(0,O.eA(E.ac))
u.d.aO(u.gho(),u.ghq())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.iA(!0,!0,!1,c,2000,null,0)
u.saZ(a)
u.saM(0,d)
u.saz(e)
return u},
d2:function d2(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
d3:function d3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aq:function aq(){}},A={
kV:function(a,b){var u,t
u=a.ar
t=new A.dt(b,u)
t.b4(b,u)
t.fa(a,b)
return t},
lf:function(a){var u,t
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+"\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
t+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+"   return clrAccum;\n"
t+"   return clrAccum;\n}\n"
t+"   return clrAccum;\n}\n\n"
t+"   return clrAccum;\n}\n\nvoid main()\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
t+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return t.charCodeAt(0)==0?t:t},
le:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.dQ(b,u)
t.b4(b,u)
t.fe(a,b)
return t},
iL:function(a,b,c,d,e){var u=new A.h7(a,b,c,e)
u.f=d
u.siT(P.kT(d,0,!1,P.y))
return u},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
d5:function d5(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dc:function dc(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dt:function dt(a,b){var _=this
_.bB=_.e1=_.bA=_.ar=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eh=_.cH=_.eg=_.bO=_.ef=_.ee=_.bN=_.bM=_.ed=_.ec=_.bL=_.bK=_.bJ=_.eb=_.ea=_.bI=_.e9=_.e8=_.bH=_.e7=_.e6=_.bG=_.bF=_.e5=_.e4=_.bE=_.bD=_.e3=_.e2=_.bC=null
_.cM=_.el=_.cL=_.ek=_.cK=_.ej=_.cJ=_.ei=_.cI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fj:function fj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ay=b3
_.ar=b4
_.bA=b5},
cz:function cz(a,b,c){this.a=a
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
bz:function bz(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dQ:function dQ(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dX:function dX(){},
hb:function hb(a){this.a=a},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
i7:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cO:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.M(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.M(o+a3,n+a1,m+a2)
u.b=l
k=new V.M(o-a3,n-a1,m-a2)
u.c=k
j=new V.M(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.i7(t)
f=F.i7(u.b)
e=F.m3(d,a0,new F.i6(u,F.i7(u.c),F.i7(u.d),f,g,c),b)
if(e!=null)a.jW(e)},
m3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.at,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.iI()
t=H.b([],[F.at])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hj(null,null,new V.ag(p,0,0,1),null,null,new V.a1(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hj(null,null,new V.ag(j,i,h,1),null,null,new V.a1(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cD(d))}}u.d.jh(a+1,b+1,t)
return u},
ca:function(a,b,c){var u,t
u=new F.a0()
t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.ac()
return u},
kQ:function(a,b){var u,t
u=new F.aZ()
t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ac()
return u},
iI:function(){var u,t
u=new F.dH()
t=new F.hk(u)
t.b=!1
t.siU(H.b([],[F.at]))
u.a=t
t=new F.fL(u)
t.scn(H.b([],[F.bn]))
u.b=t
t=new F.fK(u)
t.sh4(H.b([],[F.aZ]))
u.c=t
t=new F.fJ(u)
t.sfV(H.b([],[F.a0]))
u.d=t
u.e=null
return u},
hj:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.at()
t=new F.hp(u)
t.scn(H.b([],[F.bn]))
u.b=t
t=new F.ho(u)
s=[F.aZ]
t.sh5(H.b([],s))
t.sh6(H.b([],s))
u.c=t
t=new F.hl(u)
s=[F.a0]
t.sfW(H.b([],s))
t.sfX(H.b([],s))
t.sfY(H.b([],s))
u.d=t
h=$.km()
u.e=0
t=$.a7()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b6().a)!==0?e:null
u.x=(s&$.b5().a)!==0?b:null
u.y=(s&$.aI().a)!==0?f:null
u.z=(s&$.b7().a)!==0?g:null
u.Q=(s&$.kn().a)!==0?c:null
u.ch=(s&$.bZ().a)!==0?i:0
u.cx=(s&$.b4().a)!==0?a:null
return u},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a0:function a0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aZ:function aZ(){this.b=this.a=null},
bn:function bn(){this.a=null},
dH:function dH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(a){this.a=a
this.b=null},
fK:function fK(a){this.a=a
this.b=null},
fL:function fL(a){this.a=a
this.b=null},
at:function at(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){this.a=a},
hq:function hq(a){this.a=a},
hk:function hk(a){this.a=a
this.c=this.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a
this.c=this.b=null},
hp:function hp(a){this.a=a
this.b=null}},T={
jC:function(a,b){var u=new T.fX()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
b3:function b3(){},
bN:function bN(){},
fX:function fX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cw:function cw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
fZ:function fZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
k5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=V.la("Test 028",!0)
t=W.iv(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.D(u.a,t)
s=[P.m]
u.dK(H.b(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],s))
u.dK(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.eR(document,"testCanvas")
if(r==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
q=E.lg(r,!0,!0,!0,!1)
p=new U.cc()
p.bs(U.a3)
p.aO(p.ghe(),p.ghW())
p.e=null
p.f=V.bm()
p.r=0
s=q.r
o=new U.e3()
n=U.iw()
n.sd0(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.sak(0,0)
n.scT(100)
n.sX(0)
n.scE(0.5)
o.b=n
m=o.gaU()
n.gm().h(0,m)
n=U.iw()
n.sd0(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.sak(0,0)
n.scT(100)
n.sX(0)
n.scE(0.5)
o.c=n
n.gm().h(0,m)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
l=new X.ao(!1,!1,!1)
k=o.d
o.d=l
n=[X.ao]
m=new D.w("modifiers",k,l,o,n)
m.b=!0
o.P(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.w("invertX",m,!1,o,[P.I])
m.b=!0
o.P(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.w("invertY",m,!1,o,[P.I])
m.b=!0
o.P(m)}o.bb(s)
p.h(0,o)
s=q.r
o=new U.e2()
m=U.iw()
m.sd0(0,!0)
m.scS(6.283185307179586)
m.scU(0)
m.sak(0,0)
m.scT(100)
m.sX(0)
m.scE(0.2)
o.b=m
m.gm().h(0,o.gaU())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
l=new X.ao(!0,!1,!1)
k=o.c
o.c=l
m=new D.w("modifiers",k,l,o,n)
m.b=!0
o.P(m)
o.bb(s)
p.h(0,o)
s=q.r
o=new U.e4()
o.c=0.01
o.d=0
o.e=0
l=new X.ao(!1,!1,!1)
o.b=l
n=new D.w("modifiers",null,l,o,n)
n.b=!0
o.P(n)
o.bb(s)
p.h(0,o)
p.h(0,U.ix(V.kX(0,0,5)))
j=X.js(2000,1.0471975511965976,p,0.1,null)
i=F.iI()
F.cO(i,null,null,1,1,1,0,0,1)
F.cO(i,null,null,1,1,0,1,0,3)
F.cO(i,null,null,1,1,0,0,1,2)
F.cO(i,null,null,1,1,-1,0,0,0)
F.cO(i,null,null,1,1,0,-1,0,0)
F.cO(i,null,null,1,1,0,0,-1,3)
i.aF()
h=E.eN(null,!0,null,"",i,null)
g=E.eN(null,!0,null,"",null,null)
for(f=-1.6;f<=1.7;f+=0.8)for(e=-1.6;e<=1.7;e+=0.8)for(d=-1.6;d<=1.7;d+=0.8){c=new V.Y(1,0,0,f,0,1,0,e,0,0,1,d,0,0,0,1).v(0,new V.Y(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
b=E.eN(null,!0,null,"",null,null)
s=new U.c5()
s.sW(c)
b.ses(s)
s=b.y
o=H.v(s,0)
H.A(h,o)
n=[o]
if(s.bu(H.b([h],n))){m=s.a
a=m.length
C.a.h(m,h)
o=H.e(H.b([h],n),"$if",[o],"$af")
s=s.c
if(s!=null)s.$2(a,o)}s=g.y
o=H.v(s,0)
H.A(b,o)
n=[o]
if(s.bu(H.b([b],n))){m=s.a
a=m.length
C.a.h(m,b)
o=H.e(H.b([b],n),"$if",[o],"$af")
s=s.c
if(s!=null)s.$2(a,o)}}a0=q.f.eo("../resources/diceColor")
a1=new O.ds()
a1.sfF(O.eA(V.Y))
a1.e.aO(a1.ghi(),a1.ghk())
s=new O.aO(a1,"emission")
s.c=C.c
s.f=new V.V(0,0,0)
a1.f=s
s=new O.aO(a1,"ambient")
s.c=C.c
s.f=new V.V(0,0,0)
a1.r=s
s=new O.aO(a1,"diffuse")
s.c=C.c
s.f=new V.V(0,0,0)
a1.x=s
s=new O.aO(a1,"invDiffuse")
s.c=C.c
s.f=new V.V(0,0,0)
a1.y=s
s=new O.fl(a1,"specular")
s.c=C.c
s.f=new V.V(0,0,0)
s.ch=100
a1.z=s
s=new O.fi(a1,"bump")
s.c=C.c
a1.Q=s
a1.ch=null
s=new O.aO(a1,"reflect")
s.c=C.c
s.f=new V.V(0,0,0)
a1.cx=s
s=new O.fk(a1,"refract")
s.c=C.c
s.f=new V.V(0,0,0)
s.ch=1
a1.cy=s
s=new O.fh(a1,"alpha")
s.c=C.c
s.f=1
a1.db=s
s=new D.dl()
s.bs(D.X)
s.sfR(H.b([],[D.bc]))
s.si9(H.b([],[D.dC]))
s.siz(H.b([],[D.dK]))
s.siP(H.b([],[D.dR]))
s.siQ(H.b([],[D.dS]))
s.siR(H.b([],[D.dT]))
s.Q=null
s.ch=null
s.d2(s.ghg(),s.ghU(),s.ghY())
a1.dx=s
o=s.Q
if(o==null){o=D.C()
s.Q=o
s=o}else s=o
s.h(0,a1.gij())
s=a1.dx
o=s.ch
if(o==null){o=D.C()
s.ch=o
s=o}else s=o
s.h(0,a1.ga1())
a1.dy=null
s=a1.dx
o=U.ix(V.jp(-1,-1,-1,null))
s.h(0,D.je(new V.V(1,0.9,0.9),o))
s=a1.dx
o=U.ix(V.jp(1,1,2,null))
s.h(0,D.je(new V.V(0.2,0.2,0.35),o))
s=a1.r
s.sax(0,new V.V(0.2,0.2,0.2))
a1.r.sbn(a0)
s=a1.x
s.sax(0,new V.V(0.8,0.8,0.8))
a1.x.sbn(a0)
s=a1.z
s.sax(0,new V.V(0.7,0.7,0.7))
s=a1.z
if(s.c===C.c){s.c=C.f
s.c2()
s.cq(100)
o=s.a
o.a=null
o.q(null)}s.cq(10)
a1.Q.sbn(q.f.eo("../resources/diceBumpMap"))
a2=X.j9(800,600,!0,1,1,!0)
if(a2.cy){a2.cy=!1
s=new D.w("clearColor",!0,!1,a2,[P.I])
s.b=!0
a2.am(s)}s=q.f.jU("../resources/maskonaive",".jpg")
a3=M.iy(null,null,null)
o=new O.dI()
o.b=1.0471975511965976
o.d=new V.V(1,1,1)
k=o.c
o.c=s
s.gm().h(0,o.ga1())
s=new D.w("boxTexture",k,o.c,o,[T.cw])
s.b=!0
o.q(s)
a3.saz(o)
a3.saZ(j)
a3.saM(0,a2)
a4=M.ji(null,null,null,null,null)
a4.saZ(j)
a4.saM(0,a2)
a4.saz(a1)
a4.d.h(0,g)
a5=X.j9(400,300,!0,0.5,0.5,!0)
a6=M.ji(null,null,null,null,null)
a6.saZ(j)
a6.saM(0,a5)
s=new O.eG()
s.d=1
s.e=10
a7=new V.V(1,1,1)
s.b=a7
o=[V.V]
n=new D.w("objectColor",null,a7,s,o)
n.b=!0
s.q(n)
a7=new V.V(0,0,0)
if(!J.Q(s.c,a7)){k=s.c
s.c=a7
o=new D.w("fogColor",k,a7,s,o)
o.b=!0
s.q(o)}o=s.d
if(!(Math.abs(o-3.5)<$.G().a)){s.d=3.5
o=new D.w("fogStart",o,3.5,s,[P.x])
o.b=!0
s.q(o)}o=s.e
if(!(Math.abs(o-5.5)<$.G().a)){s.e=5.5
o=new D.w("fogStop",o,5.5,s,[P.x])
o.b=!0
s.q(o)}a6.saz(s)
a6.d.h(0,g)
s=a2.ch
o=a5.ch
a8=new O.db()
a8.e=0
a8.f=4
a8.r=0.001
n=$.jn
if(n==null){n=new V.cg(1,0,0,0,1,0,0,0,1)
$.jn=n
c=n}else c=n
a8.b=c
n=new D.w("textureMatrix",null,null,a8,[P.L])
n.b=!0
a8.q(n)
n=a8.c
if(n!==s){if(n!=null)n.gm().S(0,a8.ga1())
k=a8.c
a8.c=s
s.gm().h(0,a8.ga1())
s=new D.w("colorTexture",k,a8.c,a8,[T.bN])
s.b=!0
a8.q(s)}s=a8.d
if(s!==o){if(s!=null)s.gm().S(0,a8.ga1())
k=a8.d
a8.d=o
o.gm().h(0,a8.ga1())
s=new D.w("depthTexture",k,a8.d,a8,[T.bN])
s.b=!0
a8.q(s)}s=a8.e
if(!(Math.abs(s-0)<$.G().a)){a8.e=0
s=new D.w("highOffset",s,0,a8,[P.x])
s.b=!0
a8.q(s)}s=a8.f
if(!(Math.abs(s-3)<$.G().a)){a8.f=3
s=new D.w("lowOffset",s,3,a8,[P.x])
s.b=!0
a8.q(s)}s=a8.r
if(!(Math.abs(s-0.001)<$.G().a)){a8.r=0.001
s=new D.w("depthLimit",s,0.001,a8,[P.x])
s.b=!0
a8.q(s)}a9=M.iy(null,null,null)
a9.saz(a8)
b0=new O.dP()
a7=new V.ag(0,0,0,0)
b0.a=a7
s=new D.w("backColor",null,a7,b0,[V.ag])
s.b=!0
b0.q(s)
b0.b=null
b0.sfT(O.eA(O.aE))
b0.c.aO(b0.ghy(),b0.ghA())
b0.d=0
b0.e=null
s=b0.c
o=a5.ch
s.h(0,O.jD(null,V.cn(0,0.8,0.2,0.2),!1,null,o))
o=b0.c
s=a2.ch
o.h(0,O.jD(null,V.cn(0,0.6,0.2,0.2),!1,null,s))
b1=M.iy(null,null,null)
b1.saM(0,X.iA(!1,!0,!1,null,2000,null,0))
b1.saz(b0)
s=M.aq
o=H.b([a3,a4,a6,a9,b1],[s])
n=new M.d2()
n.bs(s)
n.e=!1
n.f=null
n.aO(n.gi_(),n.gi1())
n.ah(0,o)
s=q.d
if(s!==n){if(s!=null)s.gm().S(0,q.gd9())
q.d=n
n.gm().h(0,q.gd9())
q.da()}s=q.z
if(s==null){s=D.C()
q.z=s}o={func:1,ret:-1,args:[D.t]}
n=H.k(new N.il(u,a8),o)
if(s.b==null)s.saV(H.b([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.m1(q)},
il:function il(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iE.prototype={}
J.a8.prototype={
u:function(a,b){return a===b},
gK:function(a){return H.cm(a)},
i:function(a){return"Instance of '"+H.bI(a)+"'"}}
J.f4.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iI:1}
J.dh.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$iH:1}
J.dj.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.fw.prototype={}
J.cF.prototype={}
J.bl.prototype={
i:function(a){var u=a[$.kb()]
if(u==null)return this.f6(a)
return"JavaScript function for "+H.h(J.al(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibg:1}
J.aL.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.p(P.as("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.p(P.as("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
ah:function(a,b){var u,t
H.e(b,"$if",[H.v(a,0)],"$af")
if(!!a.fixed$length)H.p(P.as("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
ab:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bb(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a_(u,t,H.h(a[t]))
return u.join(b)},
jR:function(a){return this.l(a,"")},
jJ:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.I,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.i(P.bb(a))}throw H.i(H.iC())},
jI:function(a,b){return this.jJ(a,b,null)},
ai:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
f3:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.ax(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.ax(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.v(a,0)])
return H.b(a.slice(b,c),[H.v(a,0)])},
gbP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.iC())},
dL:function(a,b){var u,t
H.k(b,{func:1,ret:P.I,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.i(P.bb(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.iB(a,"[","]")},
gR:function(a){return new J.af(a,a.length,0,[H.v(a,0)])},
gK:function(a){return H.cm(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.p(P.as("set length"))
if(b<0)throw H.i(P.ax(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.p(P.as("indexed set"))
if(b>=a.length||b<0)throw H.i(H.cT(a,b))
a[b]=c},
$if:1,
$ia:1}
J.iD.prototype={}
J.af.prototype={
gH:function(){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.z(u))
s=this.c
if(s>=t){this.sdr(null)
return!1}this.sdr(u[s]);++this.c
return!0},
sdr:function(a){this.d=H.A(a,H.v(this,0))},
$iaK:1}
J.di.prototype={
ks:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.as(""+a+".toInt()"))},
cN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.as(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.as(""+a+".round()"))},
eG:function(a,b){var u,t
if(b>20)throw H.i(P.ax(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
eW:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dG(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dG(a,b)},
dG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.as("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
bw:function(a,b){var u
if(a>0)u=this.iy(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iy:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iaa:1}
J.dg.prototype={$iy:1}
J.df.prototype={}
J.bE.prototype={
cC:function(a,b){if(b<0)throw H.i(H.cT(a,b))
if(b>=a.length)H.p(H.cT(a,b))
return a.charCodeAt(b)},
aR:function(a,b){if(b>=a.length)throw H.i(H.cT(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.i(P.it(b,null,null))
return a+b},
f2:function(a,b,c){var u
if(c>a.length)throw H.i(P.ax(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
c0:function(a,b){return this.f2(a,b,0)},
bq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.fz(b,null,null))
if(b>c)throw H.i(P.fz(b,null,null))
if(c>a.length)throw H.i(P.fz(c,null,null))
return a.substring(b,c)},
bp:function(a,b){return this.bq(a,b,null)},
kv:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
k7:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aq:function(a,b){return this.k7(a,b," ")},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gp:function(a){return a.length},
$ijr:1,
$im:1}
H.q.prototype={
gp:function(a){return this.a.length},
j:function(a,b){return C.j.cC(this.a,b)},
$ae0:function(){return[P.y]},
$aW:function(){return[P.y]},
$af:function(){return[P.y]},
$aa:function(){return[P.y]}}
H.eK.prototype={}
H.bF.prototype={
gR:function(a){return new H.ce(this,this.gp(this),0,[H.a6(this,"bF",0)])},
bX:function(a,b){return this.f5(0,H.k(b,{func:1,ret:P.I,args:[H.a6(this,"bF",0)]}))}}
H.ce.prototype={
gH:function(){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.iX(u)
s=t.gp(u)
if(this.b!==s)throw H.i(P.bb(u))
r=this.c
if(r>=s){this.sb6(null)
return!1}this.sb6(t.ai(u,r));++this.c
return!0},
sb6:function(a){this.d=H.A(a,H.v(this,0))},
$iaK:1}
H.fe.prototype={
gR:function(a){return new H.ff(J.c_(this.a),this.b,this.$ti)},
gp:function(a){return J.bv(this.a)},
ai:function(a,b){return this.b.$1(J.ir(this.a,b))},
$af:function(a,b){return[b]}}
H.ff.prototype={
w:function(){var u=this.b
if(u.w()){this.sb6(this.c.$1(u.gH()))
return!0}this.sb6(null)
return!1},
gH:function(){return this.a},
sb6:function(a){this.a=H.A(a,H.v(this,1))},
$aaK:function(a,b){return[b]}}
H.fg.prototype={
gp:function(a){return J.bv(this.a)},
ai:function(a,b){return this.b.$1(J.ir(this.a,b))},
$abF:function(a,b){return[b]},
$af:function(a,b){return[b]}}
H.cG.prototype={
gR:function(a){return new H.ht(J.c_(this.a),this.b,this.$ti)}}
H.ht.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gH()))return!0
return!1},
gH:function(){return this.a.gH()}}
H.bB.prototype={}
H.e0.prototype={}
H.e_.prototype={}
H.fB.prototype={}
H.h4.prototype={
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
H.fu.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f6.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.h(this.a)+")"}}
H.he.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iq.prototype={
$1:function(a){if(!!J.U(a).$ibe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:13}
H.ej.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaj:1}
H.c3.prototype={
i:function(a){return"Closure '"+H.bI(this).trim()+"'"},
$ibg:1,
gky:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fW.prototype={}
H.fQ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bY(u)+"'"}}
H.c1.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c1))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gK:function(a){var u,t
u=this.c
if(u==null)t=H.cm(this.a)
else t=typeof u!=="object"?J.bu(u):H.cm(u)
return(t^H.cm(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bI(u)+"'")}}
H.h6.prototype={
i:function(a){return this.a}}
H.ey.prototype={
i:function(a){return this.a}}
H.fG.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.aM.prototype={
gp:function(a){return this.a},
gaH:function(){return new H.dm(this,[H.v(this,0)])},
dW:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dm(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dm(t,a)}else return this.jP(a)},
jP:function(a){var u=this.d
if(u==null)return!1
return this.cO(this.c9(u,J.bu(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bt(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bt(r,b)
s=t==null?null:t.b
return s}else return this.jQ(b)},
jQ:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c9(u,J.bu(a)&0x3ffffff)
s=this.cO(t,a)
if(s<0)return
return t[s].b},
a_:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cl()
this.b=u}this.dd(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cl()
this.c=t}this.dd(t,b,c)}else{s=this.d
if(s==null){s=this.cl()
this.d=s}r=J.bu(b)&0x3ffffff
q=this.c9(s,r)
if(q==null)this.cr(s,r,[this.c3(b,c)])
else{p=this.cO(q,b)
if(p>=0)q[p].b=c
else q.push(this.c3(b,c))}}},
ab:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.bb(this))
u=u.c}},
dd:function(a,b,c){var u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
u=this.bt(a,b)
if(u==null)this.cr(a,b,this.c3(b,c))
else u.b=c},
fz:function(){this.r=this.r+1&67108863},
c3:function(a,b){var u,t
u=new H.f8(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fz()
return u},
cO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.jm(this)},
bt:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cr:function(a,b,c){a[b]=c},
fO:function(a,b){delete a[b]},
dm:function(a,b){return this.bt(a,b)!=null},
cl:function(){var u=Object.create(null)
this.cr(u,"<non-identifier-key>",u)
this.fO(u,"<non-identifier-key>")
return u},
$ijk:1}
H.f8.prototype={}
H.dm.prototype={
gp:function(a){return this.a.a},
gR:function(a){var u,t
u=this.a
t=new H.f9(u,u.r,this.$ti)
t.c=u.e
return t}}
H.f9.prototype={
gH:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.bb(u))
else{u=this.c
if(u==null){this.sde(null)
return!1}else{this.sde(u.a)
this.c=this.c.c
return!0}}},
sde:function(a){this.d=H.A(a,H.v(this,0))},
$iaK:1}
H.ig.prototype={
$1:function(a){return this.a(a)},
$S:13}
H.ih.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.ii.prototype={
$1:function(a){return this.a(H.K(a))},
$S:34}
H.f5.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijr:1}
H.dx.prototype={$imp:1}
H.du.prototype={
gp:function(a){return a.length},
$iaD:1,
$aaD:function(){}}
H.dv.prototype={
j:function(a,b){H.cP(b,a,a.length)
return a[b]},
$abB:function(){return[P.x]},
$aW:function(){return[P.x]},
$if:1,
$af:function(){return[P.x]},
$ia:1,
$aa:function(){return[P.x]}}
H.dw.prototype={
$abB:function(){return[P.y]},
$aW:function(){return[P.y]},
$if:1,
$af:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.fo.prototype={
j:function(a,b){H.cP(b,a,a.length)
return a[b]}}
H.fp.prototype={
j:function(a,b){H.cP(b,a,a.length)
return a[b]}}
H.fq.prototype={
j:function(a,b){H.cP(b,a,a.length)
return a[b]}}
H.dy.prototype={
gp:function(a){return a.length},
j:function(a,b){H.cP(b,a,a.length)
return a[b]},
$imq:1}
H.fr.prototype={
gp:function(a){return a.length},
j:function(a,b){H.cP(b,a,a.length)
return a[b]}}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
P.hv.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:15}
P.hu.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.hw.prototype={
$0:function(){this.a.$0()},
$S:2}
P.hx.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ek.prototype={
ft:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bU(new P.i2(this,b),0),a)
else throw H.i(P.as("`setTimeout()` not found."))},
fu:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bU(new P.i1(this,a,Date.now(),b),0),a)
else throw H.i(P.as("Periodic timer."))},
$iaR:1}
P.i2.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.i1.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.f9(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aV.prototype={
jV:function(a){if(this.c!==6)return!0
return this.b.b.cY(H.k(this.d,{func:1,ret:P.I,args:[P.L]}),a.a,P.I,P.L)},
jO:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.er(u,{func:1,args:[P.L,P.aj]}))return H.iW(r.km(u,a.a,a.b,null,t,P.aj),s)
else return H.iW(r.cY(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aA.prototype={
eF:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.T
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.ly(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.T,[c])
r=b==null?1:3
this.dg(new P.aV(s,r,a,b,[u,c]))
return s},
kr:function(a,b){return this.eF(a,null,b)},
dg:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaV")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaA")
u=t.a
if(u<4){t.dg(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.ia(null,null,u,H.k(new P.hE(this,a),{func:1,ret:-1}))}},
dC:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaV")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaA")
t=p.a
if(t<4){p.dC(a)
return}this.a=t
this.c=p.c}u.a=this.bv(a)
t=this.b
t.toString
P.ia(null,null,t,H.k(new P.hI(u,this),{func:1,ret:-1}))}},
cp:function(){var u=H.d(this.c,"$iaV")
this.c=null
return this.bv(u)},
bv:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
di:function(a){var u,t,s
u=H.v(this,0)
H.iW(a,{futureOr:1,type:u})
t=this.$ti
if(H.cS(a,"$icb",t,"$acb"))if(H.cS(a,"$iaA",t,null))P.jO(a,this)
else P.ln(a,this)
else{s=this.cp()
H.A(a,u)
this.a=4
this.c=a
P.cJ(this,s)}},
dj:function(a,b){var u
H.d(b,"$iaj")
u=this.cp()
this.a=8
this.c=new P.ab(a,b)
P.cJ(this,u)},
$icb:1}
P.hE.prototype={
$0:function(){P.cJ(this.a,this.b)},
$S:2}
P.hI.prototype={
$0:function(){P.cJ(this.b,this.a.a)},
$S:2}
P.hF.prototype={
$1:function(a){var u=this.a
u.a=0
u.di(a)},
$S:15}
P.hG.prototype={
$2:function(a,b){H.d(b,"$iaj")
this.a.dj(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.hH.prototype={
$0:function(){this.a.dj(this.b,this.c)},
$S:2}
P.hL.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eD(H.k(r.d,{func:1}),null)}catch(q){t=H.au(q)
s=H.bW(q)
if(this.d){r=H.d(this.a.a.c,"$iab").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iab")
else p.b=new P.ab(t,s)
p.a=!0
return}if(!!J.U(u).$icb){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iab")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kr(new P.hM(o),null)
r.a=!1}},
$S:3}
P.hM.prototype={
$1:function(a){return this.a},
$S:36}
P.hK.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.A(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cY(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.bW(o)
s=this.a
s.b=new P.ab(u,t)
s.a=!0}},
$S:3}
P.hJ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iab")
r=this.c
if(r.jV(u)&&r.e!=null){q=this.b
q.b=r.jO(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.bW(p)
r=H.d(this.a.a.c,"$iab")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ab(t,s)
n.a=!0}},
$S:3}
P.e7.prototype={}
P.fR.prototype={
gp:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.T,[P.y])
u.a=0
s=H.v(this,0)
r=H.k(new P.fT(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.fU(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.fT.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.v(this.b,0)]}}}
P.fU.prototype={
$0:function(){this.b.di(this.a.a)},
$S:2}
P.ct.prototype={}
P.fS.prototype={}
P.aR.prototype={}
P.ab.prototype={
i:function(a){return H.h(this.a)},
$ibe:1}
P.i5.prototype={$imE:1}
P.i9.prototype={
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
$S:2}
P.hR.prototype={
kn:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.T){a.$0()
return}P.jU(null,null,this,a,-1)}catch(s){u=H.au(s)
t=H.bW(s)
P.i8(null,null,this,u,H.d(t,"$iaj"))}},
ko:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.T){a.$1(b)
return}P.jV(null,null,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.bW(s)
P.i8(null,null,this,u,H.d(t,"$iaj"))}},
jn:function(a,b){return new P.hT(this,H.k(a,{func:1,ret:b}),b)},
cw:function(a){return new P.hS(this,H.k(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.hU(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eD:function(a,b){H.k(a,{func:1,ret:b})
if($.T===C.l)return a.$0()
return P.jU(null,null,this,a,b)},
cY:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.T===C.l)return a.$1(b)
return P.jV(null,null,this,a,b,c,d)},
km:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.T===C.l)return a.$2(b,c)
return P.lz(null,null,this,a,b,c,d,e,f)}}
P.hT.prototype={
$0:function(){return this.a.eD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hS.prototype={
$0:function(){return this.a.kn(this.b)},
$S:3}
P.hU.prototype={
$1:function(a){var u=this.c
return this.a.ko(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hP.prototype={
gR:function(a){var u=new P.ed(this,this.r,this.$ti)
u.c=this.e
return u},
gp:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibP")!=null}else{t=this.fK(b)
return t}},
fK:function(a){var u=this.d
if(u==null)return!1
return this.c7(this.ds(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iO()
this.b=u}return this.df(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iO()
this.c=t}return this.df(t,b)}else return this.fA(b)},
fA:function(a){var u,t,s
H.A(a,H.v(this,0))
u=this.d
if(u==null){u=P.iO()
this.d=u}t=this.dk(a)
s=u[t]
if(s==null)u[t]=[this.cm(a)]
else{if(this.c7(s,a)>=0)return!1
s.push(this.cm(a))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ig(this.c,b)
else return this.ib(b)},
ib:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.ds(u,a)
s=this.c7(t,a)
if(s<0)return!1
this.dH(t.splice(s,1)[0])
return!0},
df:function(a,b){H.A(b,H.v(this,0))
if(H.d(a[b],"$ibP")!=null)return!1
a[b]=this.cm(b)
return!0},
ig:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibP")
if(u==null)return!1
this.dH(u)
delete a[b]
return!0},
du:function(){this.r=1073741823&this.r+1},
cm:function(a){var u,t
u=new P.bP(H.A(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.du()
return u},
dH:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.du()},
dk:function(a){return J.bu(a)&1073741823},
ds:function(a,b){return a[this.dk(b)]},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.bP.prototype={}
P.ed.prototype={
gH:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.bb(u))
else{u=this.c
if(u==null){this.sdh(null)
return!1}else{this.sdh(H.A(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdh:function(a){this.d=H.A(a,H.v(this,0))},
$iaK:1}
P.fa.prototype={$if:1,$ia:1}
P.W.prototype={
gR:function(a){return new H.ce(a,this.gp(a),0,[H.ie(this,a,"W",0)])},
ai:function(a,b){return this.j(a,b)},
ku:function(a,b){var u,t
u=H.b([],[H.ie(this,a,"W",0)])
C.a.sp(u,this.gp(a))
for(t=0;t<this.gp(a);++t)C.a.a_(u,t,this.j(a,t))
return u},
kt:function(a){return this.ku(a,!0)},
i:function(a){return P.iB(a,"[","]")}}
P.fc.prototype={}
P.fd.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.h(a)
u.a=t+": "
u.a+=H.h(b)},
$S:17}
P.bG.prototype={
ab:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.a6(this,"bG",0),H.a6(this,"bG",1)]})
for(u=J.c_(this.gaH());u.w();){t=u.gH()
b.$2(t,this.j(0,t))}},
gp:function(a){return J.bv(this.gaH())},
i:function(a){return P.jm(this)},
$iaw:1}
P.hW.prototype={
ah:function(a,b){var u
for(u=J.c_(H.e(b,"$if",this.$ti,"$af"));u.w();)this.h(0,u.gH())},
i:function(a){return P.iB(this,"{","}")},
ai:function(a,b){var u,t,s
if(b<0)H.p(P.ax(b,0,null,"index",null))
for(u=P.lr(this,this.r,H.v(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.i(P.bD(b,this,"index",null,t))},
$if:1,
$ijz:1}
P.ee.prototype={}
P.c4.prototype={}
P.c6.prototype={}
P.eM.prototype={
$ac4:function(){return[P.m,[P.a,P.y]]}}
P.f0.prototype={
i:function(a){return this.a}}
P.f_.prototype={
fL:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.j(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.b2("")
if(r>b)q.a+=C.j.bq(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kv(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac6:function(){return[P.m,P.m]}}
P.hg.prototype={}
P.hh.prototype={
js:function(a,b,c){var u,t,s
c=P.jy(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.i3(t)
if(s.fZ(a,b,c)!==c)s.dI(C.j.cC(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lu(0,s.b,t.length)))},
jr:function(a){return this.js(a,0,null)},
$ac6:function(){return[P.m,[P.a,P.y]]}}
P.i3.prototype={
dI:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.j(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.j(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.j(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.j(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.j(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.j(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.j(u,t)
u[t]=128|a&63
return!1}},
fZ:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cC(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aR(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dI(r,C.j.aR(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.j(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.j(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.j(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.j(u,q)
u[q]=128|r&63}}return s}}
P.I.prototype={}
P.ah.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.h.bw(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kD(H.l4(this))
t=P.d4(H.l2(this))
s=P.d4(H.kZ(this))
r=P.d4(H.l_(this))
q=P.d4(H.l1(this))
p=P.d4(H.l3(this))
o=P.kE(H.l0(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.x.prototype={}
P.bd.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bd&&this.a===b.a},
gK:function(a){return C.h.gK(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eJ()
t=this.a
if(t<0)return"-"+new P.bd(0-t).i(0)
s=u.$1(C.h.a4(t,6e7)%60)
r=u.$1(C.h.a4(t,1e6)%60)
q=new P.eI().$1(t%1e6)
return""+C.h.a4(t,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.eI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.eJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.be.prototype={}
P.dA.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc6()+t+s
if(!this.a)return r
q=this.gc5()
p=P.eP(this.b)
return r+q+": "+p}}
P.bJ.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.h(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.h(u)
else if(s>u)t=": Not in range "+H.h(u)+".."+H.h(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.h(u)}return t}}
P.f2.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t
u=H.a2(this.b)
if(typeof u!=="number")return u.b3()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gp:function(a){return this.f}}
P.hf.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hd.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cs.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eC.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eP(u)+"."}}
P.fv.prototype={
i:function(a){return"Out of Memory"},
$ibe:1}
P.dL.prototype={
i:function(a){return"Stack Overflow"},
$ibe:1}
P.eE.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.eW.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.bq(s,0,75)+"...":s
return t+"\n"+r}}
P.bg.prototype={}
P.y.prototype={}
P.f.prototype={
bX:function(a,b){var u=H.a6(this,"f",0)
return new H.cG(this,H.k(b,{func:1,ret:P.I,args:[u]}),[u])},
gp:function(a){var u,t
u=this.gR(this)
for(t=0;u.w();)++t
return t},
gaP:function(a){var u,t
u=this.gR(this)
if(!u.w())throw H.i(H.iC())
t=u.gH()
if(u.w())throw H.i(H.kN())
return t},
ai:function(a,b){var u,t,s
if(b<0)H.p(P.ax(b,0,null,"index",null))
for(u=this.gR(this),t=0;u.w();){s=u.gH()
if(b===t)return s;++t}throw H.i(P.bD(b,this,"index",null,t))},
i:function(a){return P.kM(this,"(",")")}}
P.aK.prototype={}
P.a.prototype={$if:1}
P.H.prototype={
gK:function(a){return P.L.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
u:function(a,b){return this===b},
gK:function(a){return H.cm(this)},
i:function(a){return"Instance of '"+H.bI(this)+"'"},
toString:function(){return this.i(this)}}
P.aj.prototype={}
P.m.prototype={$ijr:1}
P.b2.prototype={
gp:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.cY.prototype={
i:function(a){return String(a)},
$icY:1}
W.et.prototype={
i:function(a){return String(a)}}
W.c0.prototype={$ic0:1}
W.b8.prototype={$ib8:1}
W.bx.prototype={
bY:function(a,b,c){if(c!=null)return this.h0(a,b,P.lG(c,null))
return this.h1(a,b)},
eQ:function(a,b){return this.bY(a,b,null)},
h0:function(a,b,c){return a.getContext(b,c)},
h1:function(a,b){return a.getContext(b)},
$ibx:1,
$ijc:1}
W.by.prototype={
h2:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jF:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iby:1}
W.b9.prototype={
gp:function(a){return a.length}}
W.c7.prototype={
gp:function(a){return a.length}}
W.eD.prototype={}
W.av.prototype={$iav:1}
W.c8.prototype={
jj:function(a,b){return a.adoptNode(b)},
eR:function(a,b){return a.getElementById(b)}}
W.eH.prototype={
i:function(a){return String(a)}}
W.d6.prototype={
jw:function(a,b){return a.createHTMLDocument(b)}}
W.d7.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cS(b,"$iay",[P.aa],"$aay"))return!1
u=J.ak(b)
return a.left===u.gbQ(b)&&a.top===u.gbU(b)&&a.width===u.gaN(b)&&a.height===u.gaG(b)},
gK:function(a){return W.jQ(C.i.gK(a.left),C.i.gK(a.top),C.i.gK(a.width),C.i.gK(a.height))},
gdP:function(a){return a.bottom},
gaG:function(a){return a.height},
gbQ:function(a){return a.left},
gbT:function(a){return a.right},
gbU:function(a){return a.top},
gaN:function(a){return a.width},
$iay:1,
$aay:function(){return[P.aa]}}
W.hz.prototype={
gp:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.d(u[b],"$iN")},
h:function(a,b){J.j6(this.a,b)
return b},
gR:function(a){var u=this.kt(this)
return new J.af(u,u.length,0,[H.v(u,0)])},
$aW:function(){return[W.N]},
$af:function(){return[W.N]},
$aa:function(){return[W.N]}}
W.N.prototype={
gjm:function(a){return new W.hA(a)},
gdR:function(a){return new W.hz(a,a.children)},
gdV:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.b3()
if(s<0)s=-s*0
if(typeof r!=="number")return r.b3()
if(r<0)r=-r*0
return new P.ay(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jh
if(u==null){u=H.b([],[W.ap])
t=new W.dz(u)
C.a.h(u,W.jP(null))
C.a.h(u,W.jR())
$.jh=t
d=t}else d=u
u=$.jg
if(u==null){u=new W.eo(d)
$.jg=u
c=u}else{u.a=d
c=u}}if($.aY==null){u=document
t=u.implementation
t=(t&&C.J).jw(t,"")
$.aY=t
$.iz=t.createRange()
t=$.aY
t.toString
t=t.createElement("base")
H.d(t,"$ic0")
t.href=u.baseURI
u=$.aY.head;(u&&C.L).D(u,t)}u=$.aY
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ib8")}u=$.aY
if(!!this.$ib8)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aY.body;(u&&C.n).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.X,a.tagName)){u=$.iz;(u&&C.E).eY(u,s)
u=$.iz
r=(u&&C.E).ju(u,b)}else{s.innerHTML=b
r=$.aY.createDocumentFragment()
for(u=J.ak(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.aY.body
if(s==null?u!=null:s!==u)J.j7(s)
c.d1(r)
C.z.jj(document,r)
return r},
jv:function(a,b,c){return this.ao(a,b,c,null)},
f_:function(a,b,c,d){a.textContent=null
this.D(a,this.ao(a,b,c,d))},
eZ:function(a,b){return this.f_(a,b,null,null)},
b2:function(a,b){return a.getAttribute(b)},
ic:function(a,b){return a.removeAttribute(b)},
$iN:1,
gkp:function(a){return a.tagName}}
W.eL.prototype={
$1:function(a){return!!J.U(H.d(a,"$iB")).$iN},
$S:27}
W.l.prototype={$il:1}
W.bA.prototype={
fB:function(a,b,c,d){return a.addEventListener(b,H.bU(H.k(c,{func:1,args:[W.l]}),1),!1)},
$ibA:1}
W.eV.prototype={
gp:function(a){return a.length}}
W.dd.prototype={}
W.bC.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bD(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaD:1,
$aaD:function(){return[W.B]},
$aW:function(){return[W.B]},
$if:1,
$af:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$ibC:1,
$aam:function(){return[W.B]}}
W.de.prototype={}
W.bh.prototype={$ibh:1,
gdX:function(a){return a.data}}
W.cd.prototype={$icd:1,$ijc:1}
W.aN.prototype={$iaN:1}
W.dp.prototype={
i:function(a){return String(a)},
$idp:1}
W.ci.prototype={}
W.a5.prototype={$ia5:1}
W.ae.prototype={
gaP:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.i(P.jA("No elements"))
if(t>1)throw H.i(P.jA("More than one element"))
return u.firstChild},
ah:function(a,b){var u,t,s,r,q
H.e(b,"$if",[W.B],"$af")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ak(t),q=0;q<s;++q)r.D(t,u.firstChild)
return},
gR:function(a){var u=this.a.childNodes
return new W.d9(u,u.length,-1,[H.ie(C.Z,u,"am",0)])},
gp:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$aW:function(){return[W.B]},
$af:function(){return[W.B]},
$aa:function(){return[W.B]}}
W.B.prototype={
kh:function(a){var u=a.parentNode
if(u!=null)J.es(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.f4(a):u},
D:function(a,b){return a.appendChild(b)},
ie:function(a,b){return a.removeChild(b)},
$iB:1}
W.ck.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bD(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaD:1,
$aaD:function(){return[W.B]},
$aW:function(){return[W.B]},
$if:1,
$af:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aam:function(){return[W.B]}}
W.dE.prototype={
ju:function(a,b){return a.createContextualFragment(b)},
eY:function(a,b){return a.selectNodeContents(b)}}
W.fH.prototype={
gp:function(a){return a.length}}
W.bM.prototype={}
W.dM.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=W.kH("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ae(t).ah(0,new W.ae(u))
return t}}
W.dN.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.ae(u)
s=u.gaP(u)
s.toString
u=new W.ae(s)
r=u.gaP(u)
t.toString
r.toString
new W.ae(t).ah(0,new W.ae(r))
return t}}
W.fV.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.ae(u)
s=u.gaP(u)
t.toString
s.toString
new W.ae(t).ah(0,new W.ae(s))
return t}}
W.cv.prototype={$icv:1}
W.aS.prototype={$iaS:1}
W.aF.prototype={$iaF:1}
W.h3.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bD(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaD:1,
$aaD:function(){return[W.aS]},
$aW:function(){return[W.aS]},
$if:1,
$af:function(){return[W.aS]},
$ia:1,
$aa:function(){return[W.aS]},
$aam:function(){return[W.aS]}}
W.bp.prototype={}
W.hs.prototype={$ijc:1}
W.aU.prototype={
gjC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.as("deltaY is not supported"))},
gjB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.as("deltaX is not supported"))},
$iaU:1}
W.cH.prototype={
ii:function(a,b){return a.requestAnimationFrame(H.bU(H.k(b,{func:1,ret:-1,args:[P.aa]}),1))},
fS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cI.prototype={$icI:1}
W.e9.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cS(b,"$iay",[P.aa],"$aay"))return!1
u=J.ak(b)
return a.left===u.gbQ(b)&&a.top===u.gbU(b)&&a.width===u.gaN(b)&&a.height===u.gaG(b)},
gK:function(a){return W.jQ(C.i.gK(a.left),C.i.gK(a.top),C.i.gK(a.width),C.i.gK(a.height))},
gaG:function(a){return a.height},
gaN:function(a){return a.width}}
W.ef.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bD(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iaD:1,
$aaD:function(){return[W.B]},
$aW:function(){return[W.B]},
$if:1,
$af:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aam:function(){return[W.B]}}
W.hy.prototype={
ab:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=this.gaH(),t=u.length,s=this.a,r=J.ak(s),q=0;q<u.length;u.length===t||(0,H.z)(u),++q){p=u[q]
b.$2(p,r.b2(s,p))}},
gaH:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.m])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.j(u,r)
q=H.d(u[r],"$icI")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abG:function(){return[P.m,P.m]},
$aaw:function(){return[P.m,P.m]}}
W.hA.prototype={
j:function(a,b){return J.is(this.a,H.K(b))},
gp:function(a){return this.gaH().length}}
W.hB.prototype={}
W.iN.prototype={}
W.hC.prototype={}
W.hD.prototype={
$1:function(a){return this.a.$1(H.d(a,"$il"))},
$S:28}
W.br.prototype={
fh:function(a){var u,t
u=$.j5()
if(u.a===0){for(t=0;t<262;++t)u.a_(0,C.W[t],W.lN())
for(t=0;t<12;++t)u.a_(0,C.u[t],W.lO())}},
aY:function(a){return $.kp().V(0,W.c9(a))},
av:function(a,b,c){var u,t,s
u=W.c9(a)
t=$.j5()
s=t.j(0,H.h(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.iT(s.$4(a,b,c,this))},
$iap:1}
W.am.prototype={
gR:function(a){return new W.d9(a,this.gp(a),-1,[H.ie(this,a,"am",0)])}}
W.dz.prototype={
aY:function(a){return C.a.dL(this.a,new W.ft(a))},
av:function(a,b,c){return C.a.dL(this.a,new W.fs(a,b,c))},
$iap:1}
W.ft.prototype={
$1:function(a){return H.d(a,"$iap").aY(this.a)},
$S:12}
W.fs.prototype={
$1:function(a){return H.d(a,"$iap").av(this.a,this.b,this.c)},
$S:12}
W.ei.prototype={
fs:function(a,b,c,d){var u,t,s
this.a.ah(0,c)
u=b.bX(0,new W.hX())
t=b.bX(0,new W.hY())
this.b.ah(0,u)
s=this.c
s.ah(0,C.Y)
s.ah(0,t)},
aY:function(a){return this.a.V(0,W.c9(a))},
av:function(a,b,c){var u,t
u=W.c9(a)
t=this.c
if(t.V(0,H.h(u)+"::"+b))return this.d.jk(c)
else if(t.V(0,"*::"+b))return this.d.jk(c)
else{t=this.b
if(t.V(0,H.h(u)+"::"+b))return!0
else if(t.V(0,"*::"+b))return!0
else if(t.V(0,H.h(u)+"::*"))return!0
else if(t.V(0,"*::*"))return!0}return!1},
$iap:1}
W.hX.prototype={
$1:function(a){return!C.a.V(C.u,H.K(a))},
$S:11}
W.hY.prototype={
$1:function(a){return C.a.V(C.u,H.K(a))},
$S:11}
W.i_.prototype={
av:function(a,b,c){if(this.f8(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.is(a,"template")==="")return this.e.V(0,b)
return!1}}
W.i0.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.K(a))},
$S:29}
W.hZ.prototype={
aY:function(a){var u=J.U(a)
if(!!u.$icp)return!1
u=!!u.$in
if(u&&W.c9(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.j.c0(b,"on"))return!1
return this.aY(a)},
$iap:1}
W.d9.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdt(J.kr(this.a,u))
this.c=u
return!0}this.sdt(null)
this.c=t
return!1},
gH:function(){return this.d},
sdt:function(a){this.d=H.A(a,H.v(this,0))},
$iaK:1}
W.ap.prototype={}
W.hV.prototype={$imr:1}
W.eo.prototype={
d1:function(a){new W.i4(this).$2(a,null)},
b9:function(a,b){if(b==null)J.j7(a)
else J.es(b,a)},
io:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kt(a)
s=J.is(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.au(o)}q="element unprintable"
try{q=J.al(a)}catch(o){H.au(o)}try{p=W.c9(a)
this.im(H.d(a,"$iN"),b,u,q,p,H.d(t,"$iaw"),H.K(s))}catch(o){if(H.au(o) instanceof P.aC)throw o
else{this.b9(a,b)
window
n="Removing corrupted element "+H.h(q)
if(typeof console!="undefined")window.console.warn(n)}}},
im:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b9(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aY(a)){this.b9(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b9(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaH()
t=H.b(u.slice(0),[H.v(u,0)])
for(s=f.gaH().length-1,u=f.a,r=J.ak(u);s>=0;--s){if(s>=t.length)return H.j(t,s)
q=t[s]
if(!this.a.av(a,J.kw(q),r.b2(u,q))){window
p="Removing disallowed attribute <"+H.h(e)+" "+q+'="'+H.h(r.b2(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b2(u,q)
r.ic(u,q)}}if(!!J.U(a).$icv)this.d1(a.content)},
$imc:1}
W.i4.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.io(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b9(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.au(r)
q=H.d(u,"$iB")
if(s){p=q.parentNode
if(p!=null)J.es(p,q)}else J.es(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iB")}},
$S:30}
W.e8.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.em.prototype={}
W.ep.prototype={}
W.eq.prototype={}
P.en.prototype={$ibh:1,
gdX:function(a){return this.a}}
P.ib.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.eS.prototype={
gca:function(){var u,t,s
u=this.b
t=H.a6(u,"W",0)
s=W.N
return new H.fe(new H.cG(u,H.k(new P.eT(),{func:1,ret:P.I,args:[t]}),[t]),H.k(new P.eU(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.j6(this.b.a,b)},
gp:function(a){return J.bv(this.gca().a)},
j:function(a,b){var u=this.gca()
return u.b.$1(J.ir(u.a,b))},
gR:function(a){var u=P.kU(this.gca(),!1,W.N)
return new J.af(u,u.length,0,[H.v(u,0)])},
$aW:function(){return[W.N]},
$af:function(){return[W.N]},
$aa:function(){return[W.N]}}
P.eT.prototype={
$1:function(a){return!!J.U(H.d(a,"$iB")).$iN},
$S:27}
P.eU.prototype={
$1:function(a){return H.c(H.d(a,"$iB"),"$iN")},
$S:31}
P.hQ.prototype={
gbT:function(a){var u=this.a
if(typeof u!=="number")return u.I()
return H.A(u+this.c,H.v(this,0))},
gdP:function(a){var u=this.b
if(typeof u!=="number")return u.I()
return H.A(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cS(b,"$iay",[P.aa],"$aay")){u=this.a
t=J.ak(b)
if(u==t.gbQ(b)){s=this.b
if(s==t.gbU(b)){if(typeof u!=="number")return u.I()
r=H.v(this,0)
if(H.A(u+this.c,r)===t.gbT(b)){if(typeof s!=="number")return s.I()
u=H.A(s+this.d,r)===t.gdP(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t,s,r,q
u=this.a
t=J.bu(u)
s=this.b
r=J.bu(s)
if(typeof u!=="number")return u.I()
q=H.v(this,0)
u=C.h.gK(H.A(u+this.c,q))
if(typeof s!=="number")return s.I()
q=C.h.gK(H.A(s+this.d,q))
return P.lq(P.hO(P.hO(P.hO(P.hO(0,t),r),u),q))}}
P.ay.prototype={
gbQ:function(a){return this.a},
gbU:function(a){return this.b},
gaN:function(a){return this.c},
gaG:function(a){return this.d}}
P.cp.prototype={$icp:1}
P.n.prototype={
gdR:function(a){return new P.eS(a,new W.ae(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ap])
C.a.h(u,W.jP(null))
C.a.h(u,W.jR())
C.a.h(u,new W.hZ())
c=new W.eo(new W.dz(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jv(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ae(r)
p=u.gaP(u)
for(u=J.ak(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$in:1}
P.d_.prototype={$id_:1}
P.da.prototype={$ida:1}
P.dD.prototype={$idD:1}
P.dF.prototype={$idF:1}
P.bL.prototype={
aX:function(a,b){return a.activeTexture(b)},
dM:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
bc:function(a,b,c){return a.bindFramebuffer(b,c)},
dN:function(a,b,c){return a.bindRenderbuffer(b,c)},
a5:function(a,b,c){return a.bindTexture(b,c)},
jo:function(a,b,c){return a.blendFunc(b,c)},
dQ:function(a,b,c,d){return a.bufferData(b,c,d)},
dS:function(a,b){return a.clear(b)},
dT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dU:function(a,b){return a.clearDepth(b)},
jq:function(a,b){return a.compileShader(b)},
jx:function(a,b){return a.createShader(b)},
jz:function(a,b){return a.deleteProgram(b)},
jA:function(a,b){return a.deleteShader(b)},
dY:function(a,b){return a.depthFunc(b)},
jD:function(a,b){return a.disable(b)},
dZ:function(a,b){return a.disableVertexAttribArray(b)},
jE:function(a,b,c,d,e){return a.drawElements(b,c,H.a2(d),H.a2(e))},
bg:function(a,b){return a.enable(b)},
e0:function(a,b){return a.enableVertexAttribArray(b)},
jM:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
jN:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eM:function(a,b,c){return a.getActiveAttrib(b,c)},
eN:function(a,b,c){return a.getActiveUniform(b,c)},
eO:function(a,b,c){return a.getAttribLocation(b,c)},
bZ:function(a,b){return a.getParameter(b)},
eS:function(a,b){return a.getProgramInfoLog(b)},
c_:function(a,b,c){return a.getProgramParameter(b,c)},
eT:function(a,b){return a.getShaderInfoLog(b)},
eU:function(a,b,c){return a.getShaderParameter(b,c)},
eV:function(a,b,c){return a.getUniformLocation(b,c)},
jS:function(a,b){return a.linkProgram(b)},
kf:function(a,b,c){return a.pixelStorei(b,c)},
kj:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
f1:function(a,b,c){return a.shaderSource(b,c)},
eE:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.iE(a,b,c,d,e,f,g,h,i,j)
return}t=J.U(g)
if(!!t.$ibh&&h==null&&u&&!0){this.iF(a,b,c,d,e,f,P.lH(g))
return}if(!!t.$icd&&h==null&&u&&!0){this.iG(a,b,c,d,e,f,g)
return}throw H.i(P.kx("Incorrect number or type of arguments"))},
kq:function(a,b,c,d,e,f,g){return this.eE(a,b,c,d,e,f,g,null,null,null)},
iE:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
iF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d){return a.texParameteri(b,c,d)},
E:function(a,b,c){return a.uniform1f(b,c)},
F:function(a,b,c){return a.uniform1i(b,c)},
bV:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
kw:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eI:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
b1:function(a,b){return a.useProgram(b)},
kx:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
eK:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibL:1}
P.dG.prototype={$idG:1}
P.dO.prototype={$idO:1}
P.dZ.prototype={$idZ:1}
O.R.prototype={
bs:function(a){this.sh7(H.b([],[a]))
this.sdA(null)
this.sdv(null)
this.sdB(null)},
d2:function(a,b,c){var u=H.a6(this,"R",0)
H.k(b,{func:1,ret:P.I,args:[[P.f,u]]})
u={func:1,ret:-1,args:[P.y,[P.f,u]]}
H.k(a,u)
H.k(c,u)
this.sdA(b)
this.sdv(a)
this.sdB(c)},
aO:function(a,b){return this.d2(a,null,b)},
bu:function(a){var u
H.e(a,"$if",[H.a6(this,"R",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d8:function(a,b){var u
H.e(b,"$if",[H.a6(this,"R",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gp:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.af(u,u.length,0,[H.v(u,0)])},
ai:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a6(this,"R",0)
H.A(b,u)
u=[u]
if(this.bu(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d8(s,H.b([b],u))}},
ah:function(a,b){var u,t
H.e(b,"$if",[H.a6(this,"R",0)],"$af")
if(this.bu(b)){u=this.a
t=u.length
C.a.ah(u,b)
this.d8(t,b)}},
sh7:function(a){this.a=H.e(a,"$ia",[H.a6(this,"R",0)],"$aa")},
sdA:function(a){this.b=H.k(a,{func:1,ret:P.I,args:[[P.f,H.a6(this,"R",0)]]})},
sdv:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.y,[P.f,H.a6(this,"R",0)]]})},
sdB:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.y,[P.f,H.a6(this,"R",0)]]})},
$if:1}
O.ch.prototype={
gp:function(a){return this.a.length},
gm:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
ff:function(a){var u=this.b
if(u!=null)u.A(a)},
aQ:function(){return this.ff(null)},
gW:function(){var u=this.a
if(u.length>0)return C.a.gbP(u)
else return V.bm()},
bS:function(a){var u=this.a
if(a==null)C.a.h(u,V.bm())
else C.a.h(u,a)
this.aQ()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aQ()}},
scc:function(a){this.a=H.e(a,"$ia",[V.Y],"$aa")}}
E.ew.prototype={}
E.ac.prototype={
sd4:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gm().S(0,this.gey())
t=this.c
if(t!=null)t.gm().h(0,this.gey())
s=new D.w("shape",u,this.c,this,[F.dH])
s.b=!0
this.as(s)}},
ses:function(a){var u,t
if(!J.Q(this.r,a)){u=this.r
if(u!=null)u.gm().S(0,this.gew())
if(a!=null)a.gm().h(0,this.gew())
this.r=a
t=new D.w("mover",u,a,this,[U.a3])
t.b=!0
this.as(t)}},
a8:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.Q(t,this.x)){s=this.x
this.x=t
r=new D.w("matrix",s,t,this,[V.Y])
r.b=!0
this.as(r)}for(u=this.y.a,u=new J.af(u,u.length,0,[H.v(u,0)]);u.w();)u.d.a8(a)},
a6:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gW())
else C.a.h(u.a,t.v(0,u.gW()))
u.aQ()
a.cX(this.f)
u=a.dy
s=(u&&C.a).gbP(u)
if(s!=null&&this.d!=null)s.bl(a,this)
for(u=this.y.a,u=new J.af(u,u.length,0,[H.v(u,0)]);u.w();)u.d.a6(a)
a.cW()
a.dx.aJ()},
gm:function(){var u=this.z
if(u==null){u=D.C()
this.z=u}return u},
as:function(a){var u=this.z
if(u!=null)u.A(a)},
ac:function(){return this.as(null)},
ez:function(a){H.d(a,"$it")
this.e=null
this.as(a)},
k6:function(){return this.ez(null)},
ex:function(a){this.as(H.d(a,"$it"))},
k5:function(){return this.ex(null)},
ev:function(a){this.as(H.d(a,"$it"))},
jZ:function(){return this.ev(null)},
jY:function(a,b){var u,t,s,r,q,p,o
H.e(b,"$if",[E.ac],"$af")
for(u=b.length,t=this.geu(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bf()
o.sad(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sad(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ac()},
k0:function(a,b){var u,t
H.e(b,"$if",[E.ac],"$af")
for(u=b.gR(b),t=this.geu();u.w();)u.gH().gm().S(0,t)
this.ac()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfg:function(a,b){this.y=H.e(b,"$iR",[E.ac],"$aR")},
$iaQ:1}
E.fC.prototype={
fb:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ah(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ch()
t=[V.Y]
u.scc(H.b([],t))
u.b=null
u.gm().h(0,new E.fD(this))
this.cy=u
u=new O.ch()
u.scc(H.b([],t))
u.b=null
u.gm().h(0,new E.fE(this))
this.db=u
u=new O.ch()
u.scc(H.b([],t))
u.b=null
u.gm().h(0,new E.fF(this))
this.dx=u
this.siD(H.b([],[O.bo]))
u=this.dy;(u&&C.a).h(u,null)
this.six(new H.aM([P.m,A.cq]))},
gkg:function(){var u=this.z
if(u==null){u=this.cy.gW().v(0,this.db.gW())
this.z=u}return u},
geB:function(){var u=this.ch
if(u==null){u=this.gkg().v(0,this.dx.gW())
this.ch=u}return u},
geJ:function(){var u=this.cx
if(u==null){u=this.db.gW().v(0,this.dx.gW())
this.cx=u}return u},
cX:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbP(u):a;(u&&C.a).h(u,t)},
cW:function(){var u=this.dy
if(u.length>1)u.pop()},
ba:function(a){var u=a.b
if(u.length===0)throw H.i(P.o("May not cache a shader with no name."))
if(this.fr.dW(u))throw H.i(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a_(0,u,a)},
siD:function(a){this.dy=H.e(a,"$ia",[O.bo],"$aa")},
six:function(a){this.fr=H.e(a,"$iaw",[P.m,A.cq],"$aaw")}}
E.fD.prototype={
$1:function(a){var u
H.d(a,"$it")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.fE.prototype={
$1:function(a){var u
H.d(a,"$it")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.fF.prototype={
$1:function(a){var u
H.d(a,"$it")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dU.prototype={
dc:function(a){H.d(a,"$it")
this.eC()},
da:function(){return this.dc(null)},
gjL:function(){var u,t,s
u=Date.now()
t=C.h.a4(P.jf(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ah(u,!1)
return s/t},
dE:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.F(u)
s=C.i.cN(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.i.cN(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jF(C.q,this.gkk())}},
eC:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.h_(this),{func:1,ret:-1,args:[P.aa]})
C.G.fS(u)
C.G.ii(u,W.jY(t,P.aa))}},
ki:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dE()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ah(r,!1)
s.y=P.jf(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sp(r.a,0)
r.aQ()
r=s.db
C.a.sp(r.a,0)
r.aQ()
r=s.dx
C.a.sp(r.a,0)
r.aQ()
r=s.dy;(r&&C.a).sp(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a6(this.e)}s=this.z
if(s!=null)s.A(null)}catch(q){u=H.au(q)
t=H.bW(q)
P.j1("Error: "+H.h(u))
P.j1("Stack: "+H.h(t))
throw H.i(u)}}}
E.h_.prototype={
$1:function(a){var u
H.lY(a)
u=this.a
if(u.ch){u.ch=!1
u.ki()}},
$S:42}
Z.e6.prototype={$im6:1}
Z.d0.prototype={
J:function(a){var u,t,s
try{t=a.a
C.b.e0(t,this.e)
C.b.kx(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.au(s)
t=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}}
Z.bq.prototype={$im7:1}
Z.aX.prototype={
aj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
J:function(a){var u,t
u=this.a
C.b.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].J(a)},
a7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dZ(s,u[t].e)
C.b.aw(s,this.a.a,null)},
a6:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.j(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aw(t,p,r.b)
C.b.jE(t,q.a,q.b,5123,0)
C.b.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.al(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sh3:function(a){this.b=H.e(a,"$ia",[Z.bi],"$aa")},
$ime:1}
Z.bi.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bI(this.c)+"'")+"]"}}
Z.aH.prototype={
gd5:function(a){var u,t
u=this.a
t=(u&$.a7().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.aI().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cV().a)!==0)t+=3
if((u&$.cW().a)!==0)t+=4
if((u&$.bZ().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
jl:function(a){var u,t,s
u=$.a7()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aI()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b4()
if((t&u.a)!==0)if(s===a)return u
return $.ko()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.a7().a)!==0)C.a.h(u,"Pos")
if((t&$.b6().a)!==0)C.a.h(u,"Norm")
if((t&$.b5().a)!==0)C.a.h(u,"Binm")
if((t&$.aI().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b7().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cV().a)!==0)C.a.h(u,"Clr3")
if((t&$.cW().a)!==0)C.a.h(u,"Clr4")
if((t&$.bZ().a)!==0)C.a.h(u,"Weight")
if((t&$.b4().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.ez.prototype={}
D.bf.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.t]}
H.k(b,u)
if(this.a==null)this.sad(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.t]})
u=this.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.b
t=(u&&C.a).S(u,b)||t}return t},
A:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.t(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.ab(t,new D.eQ(u))
t=this.b
if(t!=null)C.a.ab(t,new D.eR(u))
u=this.b
if(u!=null)C.a.sp(u,0)
return!0},
cG:function(){return this.A(null)},
kl:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.A(t)}}},
aL:function(){return this.kl(!0,!1)},
sad:function(a){this.a=H.e(a,"$ia",[{func:1,ret:-1,args:[D.t]}],"$aa")},
saV:function(a){this.b=H.e(a,"$ia",[{func:1,ret:-1,args:[D.t]}],"$aa")}}
D.eQ.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.t]})
u=this.a.a
u.b
a.$1(u)},
$S:14}
D.eR.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.t]})
u=this.a.a
u.b
a.$1(u)},
$S:14}
D.t.prototype={}
D.bj.prototype={}
D.bk.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.d1.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.dk.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.f7.prototype={
kc:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
k8:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sia:function(a){this.d=H.e(a,"$ijz",[P.y],"$ajz")}}
X.dq.prototype={}
X.fb.prototype={
b7:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ah(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a1(t.a+s*r,t.b+q*p)
p=this.a.gb_()
n=new X.b_(a,V.b0(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cV:function(a,b){this.r=a.a
return!1},
bj:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eX()
if(typeof u!=="number")return u.eL()
this.r=(u&~t)>>>0
return!1},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.b7(a,b))
return!0},
kd:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb_()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cj(new V.O(q*p,o*n),t,s,new P.ah(r,!1),this)
r.b=!0
u.A(r)
return!0},
hJ:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ah(Date.now(),!1)
t=this.f
s=new X.dq(c,a,this.a.gb_(),b,u,this)
s.b=!0
t.A(s)
this.y=u
this.x=V.b0()}}
X.ao.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ao))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b_.prototype={}
X.fn.prototype={
c8:function(a,b,c){var u,t,s
u=new P.ah(Date.now(),!1)
t=this.a.gb_()
s=new X.b_(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.c8(a,b,!0))
return!0},
bj:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eX()
if(typeof u!=="number")return u.eL()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.A(this.c8(a,b,!0))
return!0},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.c8(a,b,!1))
return!0},
ke:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb_()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cj(new V.O(r*q,p*o),t,b,new P.ah(s,!1),this)
s.b=!0
u.A(s)
return!0},
ge_:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
gbW:function(){var u=this.c
if(u==null){u=D.C()
this.c=u}return u},
ger:function(){var u=this.d
if(u==null){u=D.C()
this.d=u}return u}}
X.cj.prototype={}
X.fy.prototype={}
X.dW.prototype={}
X.h2.prototype={
b7:function(a,b){var u,t,s,r
H.e(a,"$ia",[V.a1],"$aa")
u=new P.ah(Date.now(),!1)
t=a.length>0?a[0]:V.b0()
s=this.a.gb_()
r=new X.dW(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kb:function(a){var u
H.e(a,"$ia",[V.a1],"$aa")
u=this.b
if(u==null)return!1
u.A(this.b7(a,!0))
return!0},
k9:function(a){var u
H.e(a,"$ia",[V.a1],"$aa")
u=this.c
if(u==null)return!1
u.A(this.b7(a,!0))
return!0},
ka:function(a){var u
H.e(a,"$ia",[V.a1],"$aa")
u=this.d
if(u==null)return!1
u.A(this.b7(a,!1))
return!0}}
X.e1.prototype={
gb_:function(){var u=this.a
return V.cn(0,0,C.o.gdV(u).c,C.o.gdV(u).d)},
dn:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dk(u,new X.ao(t,a.altKey,a.shiftKey))},
aW:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ao(t,a.altKey,a.shiftKey)},
cs:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ao(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.L()
q=u.top
if(typeof s!=="number")return s.L()
return new V.a1(t-r,s-q)},
b8:function(a){return new V.O(a.movementX,a.movementY)},
co:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a1])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.i.a0(p.pageX)
C.i.a0(p.pageY)
n=u.left
C.i.a0(p.pageX)
C.a.h(t,new V.a1(o-n,C.i.a0(p.pageY)-u.top))}return t},
aC:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.ao(t,a.altKey,a.shiftKey))},
cd:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.L()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.L()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hD:function(a){this.f=!0},
hn:function(a){this.f=!1},
ht:function(a){H.d(a,"$ia5")
if(this.f&&this.cd(a))a.preventDefault()},
hH:function(a){var u
H.d(a,"$iaN")
if(!this.f)return
u=this.dn(a)
this.b.kc(u)},
hF:function(a){var u
H.d(a,"$iaN")
if(!this.f)return
u=this.dn(a)
this.b.k8(u)},
hL:function(a){var u,t,s,r
H.d(a,"$ia5")
u=this.a
u.focus()
this.f=!0
this.aW(a)
if(this.x){t=this.aC(a)
s=this.b8(a)
if(this.d.cV(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aC(a)
r=this.aE(a)
if(this.c.cV(t,r))a.preventDefault()},
hP:function(a){var u,t,s
H.d(a,"$ia5")
this.aW(a)
u=this.aC(a)
if(this.x){t=this.b8(a)
if(this.d.bj(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bj(u,s))a.preventDefault()},
hx:function(a){var u,t,s
H.d(a,"$ia5")
if(!this.cd(a)){this.aW(a)
u=this.aC(a)
if(this.x){t=this.b8(a)
if(this.d.bj(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bj(u,s))a.preventDefault()}},
hN:function(a){var u,t,s
H.d(a,"$ia5")
this.aW(a)
u=this.aC(a)
if(this.x){t=this.b8(a)
if(this.d.bi(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bi(u,s))a.preventDefault()},
hv:function(a){var u,t,s
H.d(a,"$ia5")
if(!this.cd(a)){this.aW(a)
u=this.aC(a)
if(this.x){t=this.b8(a)
if(this.d.bi(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bi(u,s))a.preventDefault()}},
hR:function(a){var u,t
H.d(a,"$iaU")
this.aW(a)
u=new V.O((a&&C.F).gjB(a),C.F.gjC(a)).B(0,180)
if(this.x){if(this.d.kd(u))a.preventDefault()
return}if(this.r)return
t=this.aE(a)
if(this.c.ke(u,t))a.preventDefault()},
hT:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aC(this.y)
s=this.aE(this.y)
this.d.hJ(t,s,u)}},
i8:function(a){var u
H.d(a,"$iaF")
this.a.focus()
this.f=!0
this.cs(a)
u=this.co(a)
if(this.e.kb(u))a.preventDefault()},
i4:function(a){var u
H.d(a,"$iaF")
this.cs(a)
u=this.co(a)
if(this.e.k9(u))a.preventDefault()},
i6:function(a){var u
H.d(a,"$iaF")
this.cs(a)
u=this.co(a)
if(this.e.ka(u))a.preventDefault()},
sfU:function(a){this.z=H.e(a,"$ia",[[P.ct,P.L]],"$aa")}}
D.bc.prototype={
gm:function(){var u=this.d
if(u==null){u=D.C()
this.d=u}return u},
aB:function(a){var u
H.d(a,"$it")
u=this.d
if(u!=null)u.A(a)},
fk:function(){return this.aB(null)},
$iX:1,
$iaQ:1}
D.X.prototype={$iaQ:1}
D.dl.prototype={
gm:function(){var u=this.Q
if(u==null){u=D.C()
this.Q=u}return u},
aB:function(a){var u=this.Q
if(u!=null)u.A(a)},
dz:function(a){var u
H.d(a,"$it")
u=this.ch
if(u!=null)u.A(a)},
hI:function(){return this.dz(null)},
hV:function(a){var u,t,s
H.e(a,"$if",[D.X],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fi(s))return!1}return!0},
hh:function(a,b){var u,t,s,r,q,p,o,n
u=D.X
H.e(b,"$if",[u],"$af")
for(t=b.length,s=this.gdw(),r={func:1,ret:-1,args:[D.t]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.d(b[p],"$iX")
if(o instanceof D.bc)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bf()
n.sad(null)
n.saV(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bj(a,b,this,[u])
u.b=!0
this.aB(u)},
hZ:function(a,b){var u,t,s,r
u=D.X
H.e(b,"$if",[u],"$af")
for(t=b.gR(b),s=this.gdw();t.w();){r=t.gH()
C.a.S(this.e,r)
r.gm().S(0,s)}u=new D.bk(a,b,this,[u])
u.b=!0
this.aB(u)},
fi:function(a){var u=C.a.V(this.e,a)
return u},
sfR:function(a){this.e=H.e(a,"$ia",[D.bc],"$aa")},
si9:function(a){this.f=H.e(a,"$ia",[D.dC],"$aa")},
siz:function(a){this.r=H.e(a,"$ia",[D.dK],"$aa")},
siP:function(a){this.x=H.e(a,"$ia",[D.dR],"$aa")},
siQ:function(a){this.y=H.e(a,"$ia",[D.dS],"$aa")},
siR:function(a){this.z=H.e(a,"$ia",[D.dT],"$aa")},
$af:function(){return[D.X]},
$aR:function(){return[D.X]}}
D.dC.prototype={$iX:1,$iaQ:1}
D.dK.prototype={$iX:1,$iaQ:1}
D.dR.prototype={$iX:1,$iaQ:1}
D.dS.prototype={$iX:1,$iaQ:1}
D.dT.prototype={$iX:1,$iaQ:1}
V.V.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.ag.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.eO.prototype={}
V.cg.prototype={
a2:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cg))return!1
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
u=[P.x]
t=V.bV(H.b([this.a,this.d,this.r],u),3,0)
s=V.bV(H.b([this.b,this.e,this.x],u),3,0)
r=V.bV(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.j(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.j(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.j(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.j(t,1)
n=" "+t[1]+", "
if(1>=p)return H.j(s,1)
n=n+s[1]+", "
if(1>=o)return H.j(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.j(t,2)
u=" "+t[2]+", "
if(2>=p)return H.j(s,2)
u=u+s[2]+", "
if(2>=o)return H.j(r,2)
return n+(u+r[2]+"]")}}
V.Y.prototype={
a2:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return u},
cP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.G().a)return V.bm()
a8=1/a7
a9=-r
b0=-d
return V.aP((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aP(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cZ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.M(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bo:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ad(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
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
i:function(a){return this.N()},
em:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.x]
t=V.bV(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bV(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bV(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bV(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.j(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.j(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.j(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.j(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.j(t,1)
l=l+t[1]+", "
if(1>=o)return H.j(s,1)
l=l+s[1]+", "
if(1>=n)return H.j(r,1)
l=l+r[1]+", "
if(1>=m)return H.j(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.j(t,2)
p=p+t[2]+", "
if(2>=o)return H.j(s,2)
p=p+s[2]+", "
if(2>=n)return H.j(r,2)
p=p+r[2]+", "
if(2>=m)return H.j(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.j(t,3)
l=l+t[3]+", "
if(3>=o)return H.j(s,3)
l=l+s[3]+", "
if(3>=n)return H.j(r,3)
l=l+r[3]+", "
if(3>=m)return H.j(q,3)
return p+(l+q[3]+"]")},
N:function(){return this.em("",3,0)},
C:function(a){return this.em(a,3,0)}}
V.a1.prototype={
L:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.ad.prototype={
L:function(a,b){return new V.ad(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.b1.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.bK.prototype={
gal:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.O.prototype={
cQ:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.O(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.jJ
if(u==null){u=new V.O(0,0)
$.jJ=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.O(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.M.prototype={
cQ:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cR:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
be:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
I:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.M(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.G().a)return V.e5()
return new V.M(this.a/b,this.b/b,this.c/b)},
en:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.eB.prototype={
c4:function(a){var u=V.m5(a,this.c,this.b)
return u},
gm:function(){var u=this.y
if(u==null){u=D.C()
this.y=u}return u},
P:function(a){var u=this.y
if(u!=null)u.A(a)},
sd0:function(a,b){},
scS:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c4(t)}u=new D.w("maximumLocation",u,this.b,this,[P.x])
u.b=!0
this.P(u)}},
scU:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c4(t)}u=new D.w("minimumLocation",u,this.c,this,[P.x])
u.b=!0
this.P(u)}},
sak:function(a,b){var u
b=this.c4(b)
u=this.d
if(!(Math.abs(u-b)<$.G().a)){this.d=b
u=new D.w("location",u,b,this,[P.x])
u.b=!0
this.P(u)}},
scT:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.w("maximumVelocity",u,a,this,[P.x])
u.b=!0
this.P(u)}},
sX:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.w("velocity",u,a,this,[P.x])
u.b=!0
this.P(u)}},
scE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.w("dampening",u,a,this,[P.x])
u.b=!0
this.P(u)}},
a8:function(a){var u,t,s,r,q
u=this.f
t=$.G().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sak(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.G().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sX(s)}}}
U.c5.prototype={
gm:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
sW:function(a){var u,t,s
if(!J.Q(this.a,a)){u=this.a
this.a=a
t=new D.w("matrix",u,a,this,[V.Y])
t.b=!0
s=this.b
if(s!=null)s.A(t)}},
b0:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cc.prototype={
gm:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
P:function(a){var u
H.d(a,"$it")
u=this.e
if(u!=null)u.A(a)},
af:function(){return this.P(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n
u=U.a3
H.e(b,"$if",[u],"$af")
for(t=b.length,s=this.gaU(),r={func:1,ret:-1,args:[D.t]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.k(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bj(a,b,this,[u])
u.b=!0
this.P(u)},
hX:function(a,b){var u,t,s
u=U.a3
H.e(b,"$if",[u],"$af")
for(t=b.gR(b),s=this.gaU();t.w();)t.gH().gm().S(0,s)
u=new D.bk(a,b,this,[u])
u.b=!0
this.P(u)},
b0:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.b3()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.af(u,u.length,0,[H.v(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.b0(a,b)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bm():s
u=this.e
if(u!=null)u.aL()}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.j(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.j(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.a3]},
$aR:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.e2.prototype={
gm:function(){var u=this.cy
if(u==null){u=D.C()
this.cy=u}return u},
P:function(a){var u
H.d(a,"$it")
u=this.cy
if(u!=null)u.A(a)},
af:function(){return this.P(null)},
bb:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge_().h(0,this.gce())
this.a.c.ger().h(0,this.gcg())
this.a.c.gbW().h(0,this.gcj())
return!0},
cf:function(a){H.d(a,"$it")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$it"),"$ib_")
if(!this.y)return
if(this.x){u=a.d.L(0,a.y)
u=new V.O(u.a,u.b)
u=u.G(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.L(0,a.y)
u=new V.O(t.a,t.b).v(0,2).B(0,u.gal())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.O(s.a,s.b).v(0,2).B(0,u.gal())
s=this.b
q=r.a
if(typeof q!=="number")return q.T()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
this.b.sX(0)
t=t.L(0,a.z)
this.Q=new V.O(t.a,t.b).v(0,2).B(0,u.gal())}this.af()},
ck:function(a){var u,t,s
H.d(a,"$it")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.G(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.F(s)
u.sX(t*10*s)
this.af()}},
b0:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.b3()
if(u<t){this.ch=t
s=a.y
this.b.a8(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aP(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia3:1}
U.e3.prototype={
gm:function(){var u=this.fx
if(u==null){u=D.C()
this.fx=u}return u},
P:function(a){var u
H.d(a,"$it")
u=this.fx
if(u!=null)u.A(a)},
af:function(){return this.P(null)},
bb:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ge_().h(0,this.gce())
this.a.c.ger().h(0,this.gcg())
this.a.c.gbW().h(0,this.gcj())
u=this.a.d
t=u.f
if(t==null){t=D.C()
u.f=t
u=t}else u=t
u.h(0,this.gh8())
u=this.a.d
t=u.d
if(t==null){t=D.C()
u.d=t
u=t}else u=t
u.h(0,this.gha())
u=this.a.e
t=u.b
if(t==null){t=D.C()
u.b=t
u=t}else u=t
u.h(0,this.giM())
u=this.a.e
t=u.d
if(t==null){t=D.C()
u.d=t
u=t}else u=t
u.h(0,this.giK())
u=this.a.e
t=u.c
if(t==null){t=D.C()
u.c=t
u=t}else u=t
u.h(0,this.giI())
return!0},
at:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.O(u,t)},
cf:function(a){a=H.c(H.d(a,"$it"),"$ib_")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$it"),"$ib_")
if(!this.cx)return
if(this.ch){u=a.d.L(0,a.y)
u=new V.O(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.L(0,a.y)
u=this.at(new V.O(t.a,t.b).v(0,2).B(0,u.gal()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=this.at(new V.O(s.a,s.b).v(0,2).B(0,u.gal()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sak(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.L(0,a.z)
this.dx=this.at(new V.O(t.a,t.b).v(0,2).B(0,u.gal()))}this.af()},
ck:function(a){var u,t,s
H.d(a,"$it")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sX(-t*10*u)
this.af()}},
h9:function(a){if(H.c(H.d(a,"$it"),"$idq").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hb:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$it"),"$ib_")
if(!J.Q(this.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=this.at(new V.O(s.a,s.b).v(0,2).B(0,u.gal()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sak(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.L(0,a.z)
this.dx=this.at(new V.O(t.a,t.b).v(0,2).B(0,u.gal()))
this.af()},
iN:function(a){H.d(a,"$it")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iL:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$it"),"$idW")
if(!this.cx)return
if(this.ch){u=a.d.L(0,a.y)
u=new V.O(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.L(0,a.y)
u=this.at(new V.O(t.a,t.b).v(0,2).B(0,u.gal()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=this.at(new V.O(s.a,s.b).v(0,2).B(0,u.gal()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sak(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.L(0,a.z)
this.dx=this.at(new V.O(t.a,t.b).v(0,2).B(0,u.gal()))}this.af()},
iJ:function(a){var u,t,s
H.d(a,"$it")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sX(-t*10*u)
this.af()}},
b0:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.b3()
if(u<t){this.dy=t
s=a.y
this.c.a8(s)
this.b.a8(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aP(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aP(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia3:1}
U.e4.prototype={
gm:function(){var u=this.r
if(u==null){u=D.C()
this.r=u}return u},
P:function(a){var u=this.r
if(u!=null)u.A(a)},
bb:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.C()
u.e=t
u=t}else u=t
t=this.ghc()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.C()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hd:function(a){var u,t,s,r
H.d(a,"$it")
if(!J.Q(this.b,this.a.b.c))return
H.c(a,"$icj")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.w("zoom",u,r,this,[P.x])
u.b=!0
this.P(u)}},
b0:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.kW(s,s,s,1)}return this.f},
$ia3:1}
M.d2.prototype={
gm:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
Z:function(a){var u
H.d(a,"$it")
u=this.f
if(u!=null)u.A(a)},
b5:function(){return this.Z(null)},
i0:function(a,b){var u,t,s,r,q,p,o,n
u=M.aq
H.e(b,"$if",[u],"$af")
for(t=b.length,s=this.gY(),r={func:1,ret:-1,args:[D.t]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.k(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bj(a,b,this,[u])
u.b=!0
this.Z(u)},
i2:function(a,b){var u,t,s
u=M.aq
H.e(b,"$if",[u],"$af")
for(t=b.gR(b),s=this.gY();t.w();)t.gH().gm().S(0,s)
u=new D.bk(a,b,this,[u])
u.b=!0
this.Z(u)},
a6:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.af(u,u.length,0,[H.v(u,0)]);u.w();){t=u.d
if(t!=null)t.a6(a)}this.e=!1},
$af:function(){return[M.aq]},
$aR:function(){return[M.aq]},
$iaq:1}
M.d3.prototype={
gm:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
Z:function(a){var u
H.d(a,"$it")
u=this.f
if(u!=null)u.A(a)},
b5:function(){return this.Z(null)},
saZ:function(a){var u,t
if(a==null)a=new X.f1()
u=this.a
if(u!==a){if(u!=null)u.gm().S(0,this.gY())
t=this.a
this.a=a
a.gm().h(0,this.gY())
u=new D.w("camera",t,this.a,this,[X.bw])
u.b=!0
this.Z(u)}},
saM:function(a,b){var u,t
if(b==null)b=X.iA(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().S(0,this.gY())
t=this.b
this.b=b
b.gm().h(0,this.gY())
u=new D.w("target",t,this.b,this,[X.cu])
u.b=!0
this.Z(u)}},
saz:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().S(0,this.gY())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gY())
u=new D.w("technique",t,this.c,this,[O.bo])
u.b=!0
this.Z(u)}},
a6:function(a){var u
a.cX(this.c)
this.b.J(a)
this.a.J(a)
u=this.c
if(u!=null)u.a8(a)
this.d.a8(a)
this.d.a6(a)
this.a.a7(a)
this.b.a7(a)
a.cW()},
$iaq:1}
M.d8.prototype={
Z:function(a){var u
H.d(a,"$it")
u=this.x
if(u!=null)u.A(a)},
b5:function(){return this.Z(null)},
hp:function(a,b){var u,t,s,r,q,p,o,n
u=E.ac
H.e(b,"$if",[u],"$af")
for(t=b.length,s=this.gY(),r={func:1,ret:-1,args:[D.t]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bf()
n.sad(null)
n.saV(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bj(a,b,this,[u])
u.b=!0
this.Z(u)},
hr:function(a,b){var u,t,s
u=E.ac
H.e(b,"$if",[u],"$af")
for(t=b.gR(b),s=this.gY();t.w();)t.gH().gm().S(0,s)
u=new D.bk(a,b,this,[u])
u.b=!0
this.Z(u)},
saZ:function(a){var u,t
if(a==null)a=X.js(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gm().S(0,this.gY())
t=this.a
this.a=a
a.gm().h(0,this.gY())
u=new D.w("camera",t,this.a,this,[X.bw])
u.b=!0
this.Z(u)}},
saM:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gm().S(0,this.gY())
t=this.b
this.b=b
b.gm().h(0,this.gY())
u=new D.w("target",t,this.b,this,[X.cu])
u.b=!0
this.Z(u)}},
saz:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().S(0,this.gY())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gY())
u=new D.w("technique",t,this.c,this,[O.bo])
u.b=!0
this.Z(u)}},
gm:function(){var u=this.x
if(u==null){u=D.C()
this.x=u}return u},
a6:function(a){var u
a.cX(this.c)
this.b.J(a)
this.a.J(a)
u=this.c
if(u!=null)u.a8(a)
for(u=this.d.a,u=new J.af(u,u.length,0,[H.v(u,0)]);u.w();)u.d.a8(a)
for(u=this.d.a,u=new J.af(u,u.length,0,[H.v(u,0)]);u.w();)u.d.a6(a)
this.a.toString
a.cy.aJ()
a.db.aJ()
this.b.a7(a)
a.cW()},
sfI:function(a,b){this.d=H.e(b,"$iR",[E.ac],"$aR")},
$iaq:1}
M.aq.prototype={}
A.cZ.prototype={}
A.eu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.e0(r.a,r.c)}},
bf:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.dZ(r.a,r.c)}}}
A.d5.prototype={}
A.dc.prototype={
ag:function(a,b,c){if(c==null||!c.d)C.b.F(b.a,b.d,1)
else{a.f0(c)
C.b.F(b.a,b.d,0)}}}
A.dt.prototype={
fa:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.b2("")
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
a6.iW(u)
a6.j2(u)
a6.iX(u)
a6.ja(u)
a6.jb(u)
a6.j4(u)
a6.jf(u)
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
u=new P.b2("")
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
q.j_(u)
q.iV(u)
q.iY(u)
q.j0(u)
q.j8(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.j6(u)
q.j7(u)}q.j3(u)
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
k=H.b([],[P.m])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iZ(u)
q.j5(u)
q.j9(u)
q.jc(u)
q.jd(u)
q.je(u)
q.j1(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.m])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.bh(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.n(0,"invViewMat"),"$iZ")
if(t)this.dy=H.c(this.y.n(0,"objMat"),"$iZ")
if(r)this.fr=H.c(this.y.n(0,"viewObjMat"),"$iZ")
this.fy=H.c(this.y.n(0,"projViewObjMat"),"$iZ")
if(a6.x2)this.k1=H.c(this.y.n(0,"txt2DMat"),"$ibO")
if(a6.y1)this.k2=H.c(this.y.n(0,"txtCubeMat"),"$iZ")
if(a6.y2)this.k3=H.c(this.y.n(0,"colorMat"),"$iZ")
this.sfE(H.b([],[A.Z]))
t=a6.ay
if(t>0){this.k4=H.d(this.y.n(0,"bendMatCount"),"$iD")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.p(P.o("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iZ"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.n(0,"emissionClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.c(this.y.n(0,"emissionTxt"),"$ia_")
this.x1=H.c(this.y.n(0,"nullEmissionTxt"),"$iD")
break
case C.d:this.ry=H.c(this.y.n(0,"emissionTxt"),"$ia9")
this.x1=H.c(this.y.n(0,"nullEmissionTxt"),"$iD")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.n(0,"ambientClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.c(this.y.n(0,"ambientTxt"),"$ia_")
this.ay=H.c(this.y.n(0,"nullAmbientTxt"),"$iD")
break
case C.d:this.y2=H.c(this.y.n(0,"ambientTxt"),"$ia9")
this.ay=H.c(this.y.n(0,"nullAmbientTxt"),"$iD")
break}}t=a6.c
if(t!==C.c){this.ar=H.c(this.y.n(0,"diffuseClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.bA=H.c(this.y.n(0,"diffuseTxt"),"$ia_")
this.bB=H.c(this.y.n(0,"nullDiffuseTxt"),"$iD")
break
case C.d:this.e1=H.c(this.y.n(0,"diffuseTxt"),"$ia9")
this.bB=H.c(this.y.n(0,"nullDiffuseTxt"),"$iD")
break}}t=a6.d
if(t!==C.c){this.bC=H.c(this.y.n(0,"invDiffuseClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.e2=H.c(this.y.n(0,"invDiffuseTxt"),"$ia_")
this.bD=H.c(this.y.n(0,"nullInvDiffuseTxt"),"$iD")
break
case C.d:this.e3=H.c(this.y.n(0,"invDiffuseTxt"),"$ia9")
this.bD=H.c(this.y.n(0,"nullInvDiffuseTxt"),"$iD")
break}}t=a6.e
if(t!==C.c){this.bG=H.c(this.y.n(0,"shininess"),"$iJ")
this.bE=H.c(this.y.n(0,"specularClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.e4=H.c(this.y.n(0,"specularTxt"),"$ia_")
this.bF=H.c(this.y.n(0,"nullSpecularTxt"),"$iD")
break
case C.d:this.e5=H.c(this.y.n(0,"specularTxt"),"$ia9")
this.bF=H.c(this.y.n(0,"nullSpecularTxt"),"$iD")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.e:this.e6=H.c(this.y.n(0,"bumpTxt"),"$ia_")
this.bH=H.c(this.y.n(0,"nullBumpTxt"),"$iD")
break
case C.d:this.e7=H.c(this.y.n(0,"bumpTxt"),"$ia9")
this.bH=H.c(this.y.n(0,"nullBumpTxt"),"$iD")
break}if(a6.dy){this.e8=H.c(this.y.n(0,"envSampler"),"$ia9")
this.e9=H.c(this.y.n(0,"nullEnvTxt"),"$iD")
t=a6.r
if(t!==C.c){this.bI=H.c(this.y.n(0,"reflectClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.ea=H.c(this.y.n(0,"reflectTxt"),"$ia_")
this.bJ=H.c(this.y.n(0,"nullReflectTxt"),"$iD")
break
case C.d:this.eb=H.c(this.y.n(0,"reflectTxt"),"$ia9")
this.bJ=H.c(this.y.n(0,"nullReflectTxt"),"$iD")
break}}t=a6.x
if(t!==C.c){this.bK=H.c(this.y.n(0,"refraction"),"$iJ")
this.bL=H.c(this.y.n(0,"refractClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.e:this.ec=H.c(this.y.n(0,"refractTxt"),"$ia_")
this.bM=H.c(this.y.n(0,"nullRefractTxt"),"$iD")
break
case C.d:this.ed=H.c(this.y.n(0,"refractTxt"),"$ia9")
this.bM=H.c(this.y.n(0,"nullRefractTxt"),"$iD")
break}}}t=a6.y
if(t!==C.c){this.bN=H.c(this.y.n(0,"alpha"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.ee=H.c(this.y.n(0,"alphaTxt"),"$ia_")
this.bO=H.c(this.y.n(0,"nullAlphaTxt"),"$iD")
break
case C.d:this.ef=H.c(this.y.n(0,"alphaTxt"),"$ia9")
this.bO=H.c(this.y.n(0,"nullAlphaTxt"),"$iD")
break}}this.sfl(H.b([],[A.cz]))
this.sfm(H.b([],[A.cA]))
this.sfn(H.b([],[A.cB]))
this.sfo(H.b([],[A.cC]))
this.sfp(H.b([],[A.cD]))
this.sfq(H.b([],[A.cE]))
if(a6.k2){t=a6.z
if(t>0){this.eg=H.d(this.y.n(0,"dirLightCount"),"$iD")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iE")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iE")
s=this.cH;(s&&C.a).h(s,new A.cz(h,g,f))}}t=a6.Q
if(t>0){this.eh=H.d(this.y.n(0,"pntLightCount"),"$iD")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iE")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iE")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iE")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iJ")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iJ")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iJ")
s=this.cI;(s&&C.a).h(s,new A.cA(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ei=H.d(this.y.n(0,"spotLightCount"),"$iD")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iE")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iE")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iE")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iE")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iJ")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iJ")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iJ")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iJ")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iJ")
s=this.cJ;(s&&C.a).h(s,new A.cB(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ej=H.d(this.y.n(0,"txtDirLightCount"),"$iD")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iE")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iE")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iE")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iE")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iE")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iD")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$ia_")
s=this.cK;(s&&C.a).h(s,new A.cC(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ek=H.d(this.y.n(0,"txtPntLightCount"),"$iD")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iE")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iE")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ibO")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iE")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iD")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iJ")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iJ")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iJ")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$ia9")
s=this.cL;(s&&C.a).h(s,new A.cD(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.el=H.d(this.y.n(0,"txtSpotLightCount"),"$iD")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iE")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iE")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iE")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iE")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iE")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iD")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iE")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iJ")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iJ")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iJ")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iJ")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iJ")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$ia_")
s=this.cM;(s&&C.a).h(s,new A.cE(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ag:function(a,b,c){C.b.F(b.a,b.d,1)},
an:function(a,b,c){if(c==null||c.d<6)C.b.F(b.a,b.d,1)
else{a.d3(c)
C.b.F(b.a,b.d,0)}},
sfE:function(a){this.r1=H.e(a,"$ia",[A.Z],"$aa")},
sfl:function(a){this.cH=H.e(a,"$ia",[A.cz],"$aa")},
sfm:function(a){this.cI=H.e(a,"$ia",[A.cA],"$aa")},
sfn:function(a){this.cJ=H.e(a,"$ia",[A.cB],"$aa")},
sfo:function(a){this.cK=H.e(a,"$ia",[A.cC],"$aa")},
sfp:function(a){this.cL=H.e(a,"$ia",[A.cD],"$aa")},
sfq:function(a){this.cM=H.e(a,"$ia",[A.cE],"$aa")}}
A.fj.prototype={
iW:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ay+"];\n"
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
j2:function(a){var u
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
iX:function(a){var u
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
ja:function(a){var u,t
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
jb:function(a){var u,t
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
j4:function(a){var u
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
jf:function(a){var u
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
aD:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.j(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.bp(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j_:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aD(a,u,"emission")
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
iV:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aD(a,u,"ambient")
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
iY:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aD(a,u,"diffuse")
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
j0:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aD(a,u,"invDiffuse")
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
j8:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aD(a,u,"specular")
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
j3:function(a){var u,t
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
j6:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aD(a,u,"reflect")
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
j7:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aD(a,u,"refract")
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
iZ:function(a){var u,t
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
j5:function(a){var u,t
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
j9:function(a){var u,t
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
jc:function(a){var u,t,s
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
jd:function(a){var u,t,s
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
je:function(a){var u,t,s
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
j1:function(a){var u
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
i:function(a){return this.ar}}
A.cz.prototype={}
A.cC.prototype={}
A.cA.prototype={}
A.cD.prototype={}
A.cB.prototype={}
A.cE.prototype={}
A.cq.prototype={
b4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bh:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dq(a,35633)
this.f=this.dq(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dM(u,t,this.e)
C.b.dM(u,this.r,this.f)
C.b.jS(u,this.r)
if(!H.iT(C.b.c_(u,this.r,35714))){s=C.b.eS(u,this.r)
C.b.jz(u,this.r)
H.p(P.o("Failed to link shader: "+H.h(s)))}this.iu()
this.iw()},
J:function(a){C.b.b1(a.a,this.r)
this.x.jG()},
dq:function(a,b){var u,t,s
u=this.a
t=C.b.jx(u,b)
C.b.f1(u,t,a)
C.b.jq(u,t)
if(!H.iT(C.b.eU(u,t,35713))){s=C.b.eT(u,t)
C.b.jA(u,t)
throw H.i(P.o("Error compiling shader '"+H.h(t)+"': "+H.h(s)))}return t},
iu:function(){var u,t,s,r,q,p
u=H.b([],[A.cZ])
t=this.a
s=H.a2(C.b.c_(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.eM(t,this.r,r)
p=C.b.eO(t,this.r,q.name)
C.a.h(u,new A.cZ(t,q.name,p))}this.x=new A.eu(u)},
iw:function(){var u,t,s,r,q,p
u=H.b([],[A.dX])
t=this.a
s=H.a2(C.b.c_(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.eN(t,this.r,r)
p=C.b.eV(t,this.r,q.name)
C.a.h(u,this.jy(q.type,q.size,q.name,p))}this.y=new A.hb(u)},
aS:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.D(u,t,b,c)
else return A.iL(u,t,b,a,c)},
fM:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a_(u,t,b,c)
else return A.iL(u,t,b,a,c)},
fN:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a9(u,t,b,c)
else return A.iL(u,t,b,a,c)},
bx:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
jy:function(a,b,c,d){switch(a){case 5120:return this.aS(b,c,d)
case 5121:return this.aS(b,c,d)
case 5122:return this.aS(b,c,d)
case 5123:return this.aS(b,c,d)
case 5124:return this.aS(b,c,d)
case 5125:return this.aS(b,c,d)
case 5126:return new A.J(this.a,this.r,c,d)
case 35664:return new A.ar(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.dY(this.a,this.r,c,d)
case 35667:return new A.h8(this.a,this.r,c,d)
case 35668:return new A.h9(this.a,this.r,c,d)
case 35669:return new A.ha(this.a,this.r,c,d)
case 35674:return new A.hc(this.a,this.r,c,d)
case 35675:return new A.bO(this.a,this.r,c,d)
case 35676:return new A.Z(this.a,this.r,c,d)
case 35678:return this.fM(b,c,d)
case 35680:return this.fN(b,c,d)
case 35670:throw H.i(this.bx("BOOL",c))
case 35671:throw H.i(this.bx("BOOL_VEC2",c))
case 35672:throw H.i(this.bx("BOOL_VEC3",c))
case 35673:throw H.i(this.bx("BOOL_VEC4",c))
default:throw H.i(P.o("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.bz.prototype={
i:function(a){return this.b}}
A.dJ.prototype={}
A.dQ.prototype={
fe:function(a,b){var u,t,s,r,q
this.bh("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.lf(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.c(this.y.n(0,"txtCount"),"$iD")
this.ch=H.c(this.y.n(0,"backClr"),"$idY")
this.siS(H.b([],[A.a_]))
this.sfJ(H.b([],[A.Z]))
u=[A.ar]
this.siA(H.b([],u))
this.siB(H.b([],u))
this.sfP(H.b([],u))
this.sfQ(H.b([],u))
this.sh_(H.b([],[A.D]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$ia_"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iZ"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iar"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iar"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iar"))
u=this.fr
s=this.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iar"))
u=this.fx
s=this.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iD"))}},
siS:function(a){this.cx=H.e(a,"$ia",[A.a_],"$aa")},
sfJ:function(a){this.cy=H.e(a,"$ia",[A.Z],"$aa")},
siA:function(a){this.db=H.e(a,"$ia",[A.ar],"$aa")},
siB:function(a){this.dx=H.e(a,"$ia",[A.ar],"$aa")},
sfP:function(a){this.dy=H.e(a,"$ia",[A.ar],"$aa")},
sfQ:function(a){this.fr=H.e(a,"$ia",[A.ar],"$aa")},
sh_:function(a){this.fx=H.e(a,"$ia",[A.D],"$aa")}}
A.dX.prototype={}
A.hb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
jK:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
N:function(){return this.jK("\n")}}
A.D.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.h8.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.h9.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.ha.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.h7.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
siT:function(a){this.e=H.e(a,"$ia",[P.y],"$aa")}}
A.J.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.ar.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.dY.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hc.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.bO.prototype={
a9:function(a){var u=new Float32Array(H.bQ(H.e(a,"$ia",[P.x],"$aa")))
C.b.eI(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.Z.prototype={
a9:function(a){var u=new Float32Array(H.bQ(H.e(a,"$ia",[P.x],"$aa")))
C.b.d_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.a_.prototype={
f0:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.F(t,s,0)
else C.b.F(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.a9.prototype={
d3:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.F(t,s,0)
else C.b.F(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.i6.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cR(u.b,b).cR(u.d.cR(u.c,b),c)
u=new V.ad(t.a,t.b,t.c)
if(!J.Q(a.f,u)){a.f=u
u=a.a
if(u!=null)u.ac()}a.sbn(t.B(0,Math.sqrt(t.G(t))))
u=1-b
s=1-c
s=new V.b1(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.Q(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.ac()}},
$S:38}
F.a0.prototype={
fD:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.e5()
if(t!=null)q=q.I(0,t)
if(s!=null)q=q.I(0,s)
if(r!=null)q=q.I(0,r)
if(q.en())return
return q.B(0,Math.sqrt(q.G(q)))},
fH:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.L(0,t)
u=new V.M(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.G(u)))
u=r.L(0,t)
u=new V.M(u.a,u.b,u.c)
u=q.be(u.B(0,Math.sqrt(u.G(u))))
return u.B(0,Math.sqrt(u.G(u)))},
cB:function(){if(this.d!=null)return!0
var u=this.fD()
if(u==null){u=this.fH()
if(u==null)return!1}this.d=u
this.a.a.ac()
return!0},
fC:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.e5()
if(t!=null)q=q.I(0,t)
if(s!=null)q=q.I(0,s)
if(r!=null)q=q.I(0,r)
if(q.en())return
return q.B(0,Math.sqrt(q.G(q)))},
fG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.G().a){u=m.L(0,p)
u=new V.M(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.G(u)))
if(j.a-k.a<0)h=h.T(0)}else{g=(u-l.b)/i
u=m.L(0,p)
u=new V.ad(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).L(0,s)
u=new V.M(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.G(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.T(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.G(u)))
u=f.be(h)
u=u.B(0,Math.sqrt(u.G(u))).be(f)
h=u.B(0,Math.sqrt(u.G(u)))}return h},
cz:function(){if(this.e!=null)return!0
var u=this.fC()
if(u==null){u=this.fG()
if(u==null)return!1}this.e=u
this.a.a.ac()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.aq(J.al(u.e),0)+", "+C.j.aq(J.al(this.b.e),0)+", "+C.j.aq(J.al(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
N:function(){return this.C("")}}
F.aZ.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.aq(J.al(u.e),0)+", "+C.j.aq(J.al(this.b.e),0)},
N:function(){return this.C("")}}
F.bn.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aq(J.al(u.e),0)},
N:function(){return this.C("")}}
F.dH.prototype={
gm:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
jW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a3()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.jt())}this.a.a3()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a3()
n=n.e
if(typeof n!=="number")return n.I()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bn()
if(m.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.A(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a3()
n=n.e
if(typeof n!=="number")return n.I()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a3()
o=o.e
if(typeof o!=="number")return o.I()
o+=t
n=n.c
if(o>=n.length)return H.j(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.kQ(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a3()
n=n.e
if(typeof n!=="number")return n.I()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a3()
o=o.e
if(typeof o!=="number")return o.I()
o+=t
n=n.c
if(o>=n.length)return H.j(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a3()
n=n.e
if(typeof n!=="number")return n.I()
n+=t
o=o.c
if(n>=o.length)return H.j(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.ca(k,j,h)}u=this.e
if(u!=null)u.aL()},
aF:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aF()||!1
if(!this.a.aF())t=!1
u=this.e
if(u!=null)u.aL()
return t},
bd:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.a7()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b6().a)!==0)++r
if((s&$.b5().a)!==0)++r
if((s&$.aI().a)!==0)++r
if((s&$.b7().a)!==0)++r
if((s&$.cV().a)!==0)++r
if((s&$.cW().a)!==0)++r
if((s&$.bZ().a)!==0)++r
if((s&$.b4().a)!==0)++r
q=a1.gd5(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.x
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d0])
for(m=0,l=0;l<r;++l){k=a1.jl(l)
j=k.gd5(k)
C.a.a_(n,l,new Z.d0(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.j(t,i)
h=t[i].jT(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a_(o,g,h[f]);++g}}m+=j}H.e(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aw(t,34962,e)
C.b.dQ(t,34962,new Float32Array(H.bQ(o)),35044)
C.b.aw(t,34962,null)
d=new Z.aX(new Z.e6(34962,e),n,a1)
d.sh3(H.b([],[Z.bi]))
if(this.b.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a3()
C.a.h(c,b.e)}a=Z.iM(t,34963,H.e(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bi(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a3()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.a3()
C.a.h(c,b.e)}a=Z.iM(t,34963,H.e(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bi(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a3()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.a3()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].c
b.a.a.a3()
C.a.h(c,b.e)}a=Z.iM(t,34963,H.e(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bi(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.l(u,"\n")},
as:function(a){var u=this.e
if(u!=null)u.A(a)},
ac:function(){return this.as(null)},
$imd:1}
F.fJ.prototype={
jg:function(a){var u,t,s,r,q,p
H.e(a,"$ia",[F.at],"$aa")
u=H.b([],[F.a0])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ca(t,q,p))}return u},
jh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.e(c,"$ia",[F.at],"$aa")
u=H.b([],[F.a0])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.j(c,r)
l=c[r];++r
if(r>=m)return H.j(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.j(c,j)
i=c[j]
if(s<0||s>=m)return H.j(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.ca(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ca(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ca(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ca(k,h,l))}o=!o}q=!q}return u},
gp:function(a){return this.b.length},
aF:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cB())s=!1
return s},
cA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cz())s=!1
return s},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
N:function(){return this.C("")},
sfV:function(a){this.b=H.e(a,"$ia",[F.a0],"$aa")}}
F.fK.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.b([],[P.m])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.j(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.l(u,"\n")},
N:function(){return this.C("")},
sh4:function(a){this.b=H.e(a,"$ia",[F.aZ],"$aa")}}
F.fL.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
N:function(){return this.C("")},
scn:function(a){this.b=H.e(a,"$ia",[F.bn],"$aa")}}
F.at.prototype={
cD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hj(this.cx,s,p,u,t,r,q,a,o)},
jt:function(){return this.cD(null)},
sbn:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.ac()}},
jT:function(a){var u,t
if(a.u(0,$.a7())){u=this.f
t=[P.x]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b6())){u=this.r
t=[P.x]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b5())){u=this.x
t=[P.x]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aI())){u=this.y
t=[P.x]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.b7())){u=this.z
t=[P.x]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cV())){u=this.Q
t=[P.x]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cW())){u=this.Q
t=[P.x]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bZ()))return H.b([this.ch],[P.x])
else if(a.u(0,$.b4())){u=this.cx
t=[P.x]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.x])},
cB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.e5()
this.d.ab(0,new F.hr(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.ac()
u=this.a.e
if(u!=null)u.aL()}return!0},
cz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.e5()
this.d.ab(0,new F.hq(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.ac()
u=this.a.e
if(u!=null)u.aL()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.j.aq(J.al(this.e),0))
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
N:function(){return this.C("")}}
F.hr.prototype={
$1:function(a){var u,t
H.d(a,"$ia0")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:5}
F.hq.prototype={
$1:function(a){var u,t
H.d(a,"$ia0")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:5}
F.hk.prototype={
a3:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.o("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.ac()
return!0},
ji:function(a,b,c,d,e,f,g,h,i){var u=F.hj(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
by:function(a,b,c,d,e,f){return this.ji(a,null,b,c,null,d,e,f,0)},
gp:function(a){return this.c.length},
aF:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cB()
return!0},
cA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cz()
return!0},
jp:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
this.a3()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
N:function(){return this.C("")},
siU:function(a){this.c=H.e(a,"$ia",[F.at],"$aa")}}
F.hl.prototype={
gp:function(a){return this.b.length+this.c.length+this.d.length},
ab:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a0]})
C.a.ab(this.b,b)
C.a.ab(this.c,new F.hm(this,b))
C.a.ab(this.d,new F.hn(this,b))},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
N:function(){return this.C("")},
sfW:function(a){this.b=H.e(a,"$ia",[F.a0],"$aa")},
sfX:function(a){this.c=H.e(a,"$ia",[F.a0],"$aa")},
sfY:function(a){this.d=H.e(a,"$ia",[F.a0],"$aa")}}
F.hm.prototype={
$1:function(a){H.d(a,"$ia0")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:5}
F.hn.prototype={
$1:function(a){var u
H.d(a,"$ia0")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:5}
F.ho.prototype={
gp:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
N:function(){return this.C("")},
sh5:function(a){this.b=H.e(a,"$ia",[F.aZ],"$aa")},
sh6:function(a){this.c=H.e(a,"$ia",[F.aZ],"$aa")}}
F.hp.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
N:function(){return this.C("")},
scn:function(a){this.b=H.e(a,"$ia",[F.bn],"$aa")}}
O.eG.prototype={
gm:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
q:function(a){var u=this.f
if(u!=null)u.A(a)},
a8:function(a){},
bl:function(a,b){var u,t,s,r,q,p
u=this.a
if(u==null){t=H.d(a.fr.j(0,"Depth"),"$id5")
if(t==null){u=a.a
t=new A.d5(u,"Depth")
t.b4(u,"Depth")
t.bh($.kG,$.kF)
t.z=t.x.j(0,"posAttr")
t.Q=H.c(t.y.j(0,"objClr"),"$iE")
t.ch=H.c(t.y.j(0,"fogClr"),"$iE")
t.cx=H.c(t.y.j(0,"fogStart"),"$iJ")
t.cy=H.c(t.y.j(0,"fogStop"),"$iJ")
t.db=H.c(t.y.j(0,"viewObjMat"),"$iZ")
t.dx=H.c(t.y.j(0,"projMat"),"$iZ")
a.ba(t)}this.a=t
u=t}s=b.e
if(!(s instanceof Z.aX)){b.e=null
s=null}if(s==null){u=b.d.bd(new Z.bq(a.a),$.a7())
s=u.aj($.a7())
r=this.a
s.e=r.z.c
b.e=u
u=r}u.J(a)
s=this.b
r=u.Q
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=this.c
p=u.ch
p.toString
q=s.a
r=s.b
s=s.c
C.b.t(p.a,p.d,q,r,s)
s=this.d
r=u.cx
C.b.E(r.a,r.d,s)
s=this.e
r=u.cy
C.b.E(r.a,r.d,s)
s=a.cy.gW()
r=u.dx
r.toString
r.a9(s.a2(0,!0))
s=a.geJ()
u=u.db
u.toString
u.a9(s.a2(0,!0))
s=b.e
s.J(a)
s.a6(a)
s.a7(a)
s=this.a
s.toString
C.b.b1(a.a,null)
s.x.bf()}}
O.db.prototype={
gm:function(){var u=this.x
if(u==null){u=D.C()
this.x=u}return u},
q:function(a){var u
H.d(a,"$it")
u=this.x
if(u!=null)u.A(a)},
aa:function(){return this.q(null)},
a8:function(a){},
U:function(a,b){H.e(a,"$ia",[T.b3],"$aa")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
bl:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.j(0,"GaussianBlur"),"$idc")
if(u==null){t=a.a
u=new A.dc(t,"GaussianBlur")
u.b4(t,"GaussianBlur")
u.bh($.kL,$.kK)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txtAttr")
u.ch=H.c(u.y.j(0,"projViewObjMat"),"$iZ")
u.cx=H.c(u.y.j(0,"txt2DMat"),"$ibO")
u.cy=H.c(u.y.j(0,"colorTxt"),"$ia_")
u.db=H.c(u.y.j(0,"depthTxt"),"$ia_")
u.dx=H.c(u.y.j(0,"nullColorTxt"),"$iD")
u.dy=H.c(u.y.j(0,"nullDepthTxt"),"$iD")
u.fr=H.c(u.y.j(0,"width"),"$iJ")
u.fx=H.c(u.y.j(0,"height"),"$iJ")
u.fy=H.c(u.y.j(0,"highOffset"),"$iJ")
u.go=H.c(u.y.j(0,"lowOffset"),"$iJ")
u.id=H.c(u.y.j(0,"depthLimit"),"$iJ")
a.ba(u)}this.a=u}if(b.e==null){t=b.d
s=$.a7()
r=$.aI()
r=t.bd(new Z.bq(a.a),new Z.aH(s.a|r.a))
r.aj($.a7()).e=this.a.z.c
r.aj($.aI()).e=this.a.Q.c
b.e=r}q=H.b([],[T.b3])
this.U(q,this.c)
this.U(q,this.d)
for(p=0;p<q.length;++p)q[p].J(a)
t=this.a
t.J(a)
s=this.c
t.ag(t.cy,t.dx,s)
s=this.d
t.ag(t.db,t.dy,s)
s=this.b
r=t.cx
r.toString
r.a9(s.a2(0,!0))
s=a.geB()
r=t.ch
r.toString
r.a9(s.a2(0,!0))
s=a.c
r=t.fr
C.b.E(r.a,r.d,s)
s=a.d
r=t.fx
C.b.E(r.a,r.d,s)
s=this.e
r=t.fy
C.b.E(r.a,r.d,s)
s=this.f
r=t.go
C.b.E(r.a,r.d,s)
s=this.r
t=t.id
C.b.E(t.a,t.d,s)
t=b.e
if(t instanceof Z.aX){t.J(a)
t.a6(a)
t.a7(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.b1(s,null)
t.x.bf()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.aX(s,33984+t.a)
C.b.a5(s,3553,null)}}}}
O.ds.prototype={
gm:function(){var u=this.dy
if(u==null){u=D.C()
this.dy=u}return u},
q:function(a){var u
H.d(a,"$it")
u=this.dy
if(u!=null)u.A(a)},
aa:function(){return this.q(null)},
dD:function(a){H.d(a,"$it")
this.a=null
this.q(a)},
ik:function(){return this.dD(null)},
hj:function(a,b){var u=V.Y
u=new D.bj(a,H.e(b,"$if",[u],"$af"),this,[u])
u.b=!0
this.q(u)},
hl:function(a,b){var u=V.Y
u=new D.bk(a,H.e(b,"$if",[u],"$af"),this,[u])
u.b=!0
this.q(u)},
dl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a4(u.e.length+3,4)*4
s=C.h.a4(u.f.length+3,4)*4
r=C.h.a4(u.r.length+3,4)*4
q=C.h.a4(u.x.length+3,4)*4
p=C.h.a4(u.y.length+3,4)*4
o=C.h.a4(u.z.length+3,4)*4
n=C.h.a4(this.e.a.length+3,4)*4
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
a7=$.a7()
if(a0){b=$.b6()
a7=new Z.aH(a7.a|b.a)}if(a1){b=$.b5()
a7=new Z.aH(a7.a|b.a)}if(a2){b=$.aI()
a7=new Z.aH(a7.a|b.a)}if(a3){b=$.b7()
a7=new Z.aH(a7.a|b.a)}if(a5){b=$.b4()
a7=new Z.aH(a7.a|b.a)}return new A.fj(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
U:function(a,b){H.e(a,"$ia",[T.b3],"$aa")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
a8:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.af(u,u.length,0,[H.v(u,0)]);u.w();){t=u.d
t.toString
s=$.hi
if(s==null){s=new V.M(0,0,1)
$.hi=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cZ(s)}}},
bl:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dl()
t=H.d(a2.fr.j(0,u.ar),"$idt")
if(t==null){t=A.kV(u,a2.a)
a2.ba(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bA
u=a3.e
if(!(u instanceof Z.aX)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.aF()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cA()
p.a.cA()
p=p.e
if(p!=null)p.aL()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jp()
o=o.e
if(o!=null)o.aL()}m=a3.d.bd(new Z.bq(a2.a),r)
m.aj($.a7()).e=this.a.Q.c
if(u)m.aj($.b6()).e=this.a.cx.c
if(q)m.aj($.b5()).e=this.a.ch.c
if(s.rx)m.aj($.aI()).e=this.a.cy.c
if(p)m.aj($.b7()).e=this.a.db.c
if(s.x1)m.aj($.b4()).e=this.a.dx.c
a3.e=m}u=T.b3
l=H.b([],[u])
this.a.J(a2)
if(s.fx){q=this.a
p=a2.dx.gW()
q=q.dy
q.toString
q.a9(p.a2(0,!0))}if(s.fy){q=this.a
p=a2.geJ()
q=q.fr
q.toString
q.a9(p.a2(0,!0))}q=this.a
p=a2.geB()
q=q.fy
q.toString
q.a9(p.a2(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.a9(C.r.a2(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.a9(C.r.a2(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.a9(C.r.a2(p,!0))}if(s.ay>0){k=this.e.a.length
q=this.a.k4
C.b.F(q.a,q.d,k)
for(q=[P.x],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.j(o,j)
o=o[j]
p.toString
H.d(o,"$iY")
p=p.r1
if(j>=p.length)return H.j(p,j)
p=p[j]
i=new Float32Array(H.bQ(H.e(o.a2(0,!0),"$ia",q,"$aa")))
C.b.d_(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.U(l,this.f.d)
q=this.a
p=this.f.d
q.ag(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.U(l,this.f.e)
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
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.U(l,this.r.d)
q=this.a
p=this.r.d
q.ag(q.y1,q.ay,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.U(l,this.r.e)
q=this.a
p=this.r.e
q.an(q.y2,q.ay,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.ar
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.U(l,this.x.d)
q=this.a
p=this.x.d
q.ag(q.bA,q.bB,p)
p=this.a
q=this.x.f
p=p.ar
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.U(l,this.x.e)
q=this.a
p=this.x.e
q.an(q.e1,q.bB,p)
p=this.a
q=this.x.f
p=p.ar
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bC
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.U(l,this.y.d)
q=this.a
p=this.y.d
q.ag(q.e2,q.bD,p)
p=this.a
q=this.y.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.U(l,this.y.e)
q=this.a
p=this.y.e
q.an(q.e3,q.bD,p)
p=this.a
q=this.y.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bE
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bG
C.b.E(p.a,p.d,n)
break
case C.e:this.U(l,this.z.d)
q=this.a
p=this.z.d
q.ag(q.e4,q.bF,p)
p=this.a
q=this.z.f
p=p.bE
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bG
C.b.E(q.a,q.d,n)
break
case C.d:this.U(l,this.z.e)
q=this.a
p=this.z.e
q.an(q.e5,q.bF,p)
p=this.a
q=this.z.f
p=p.bE
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bG
C.b.E(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eg
C.b.F(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cH
if(g>=o.length)return H.j(o,g)
d=o[g]
o=h.cZ(e.a)
n=o.a
c=o.b
b=o.c
b=o.B(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eh
C.b.F(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cI
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gbk(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.bo(e.gbk(e))
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gax(e)
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gct()
n=d.e
C.b.E(n.a,n.d,o)
o=e.gcu()
n=d.f
C.b.E(n.a,n.d,o)
o=e.gcv()
n=d.r
C.b.E(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ei
C.b.F(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cJ
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gbk(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcF(e).kB()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.bo(e.gbk(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gax(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gkA()
n=d.f
C.b.E(n.a,n.d,o)
o=e.gkz()
n=d.r
C.b.E(n.a,n.d,o)
o=e.gct()
n=d.x
C.b.E(n.a,n.d,o)
o=e.gcu()
n=d.y
C.b.E(n.a,n.d,o)
o=e.gcv()
n=d.z
C.b.E(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ej
C.b.F(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
n=this.a.cK
if(g>=n.length)return H.j(n,g)
d=n[g]
n=e.gbm()
H.e(l,"$ia",o,"$aa")
if(!C.a.V(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcF(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbW()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbT(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.cZ(e.gcF(e))
c=n.a
b=n.b
a=n.c
a=n.B(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gax(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gbm()
n=a.geq(a)
if(!n){n=d.x
C.b.F(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.F(b,n,0)
else C.b.F(b,n,a.a)
n=d.x
C.b.F(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ek
C.b.F(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.y,p=q.length,o=[P.x],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
c=this.a.cL
if(g>=c.length)return H.j(c,g)
d=c[g]
c=e.gbm()
H.e(l,"$ia",n,"$aa")
if(!C.a.V(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.v(0,e.gW())
c=e.gW()
b=$.cl
if(b==null){b=new V.ad(0,0,0)
$.cl=b}b=c.bo(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.cl
if(c==null){c=new V.ad(0,0,0)
$.cl=c}c=a0.bo(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.cP()
b=d.d
i=new Float32Array(H.bQ(H.e(new V.cg(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a2(0,!0),"$ia",o,"$aa")))
C.b.eI(b.a,b.d,!1,i)
b=e.gax(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbm()
c=b.geq(b)
if(!c){c=d.r
C.b.F(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.F(a1,c,0)
else C.b.F(a1,c,b.a)
c=d.r
C.b.F(c.a,c.d,0)}c=e.gct()
b=d.x
C.b.E(b.a,b.d,c)
c=e.gcu()
b=d.y
C.b.E(b.a,b.d,c)
c=e.gcv()
b=d.z
C.b.E(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.el
C.b.F(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cM
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gbm()
H.e(l,"$ia",u,"$aa")
if(!C.a.V(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbk(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcF(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbW()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbT(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.bo(e.gbk(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbm()
n=o.geq(o)
if(!n){o=d.x
C.b.F(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.F(b,n,0)
else C.b.F(b,n,o.a)
o=d.x
C.b.F(o.a,o.d,0)}o=e.gax(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gkC()
n=d.z
C.b.E(n.a,n.d,o)
o=e.gkD()
n=d.Q
C.b.E(n.a,n.d,o)
o=e.gct()
n=d.ch
C.b.E(n.a,n.d,o)
o=e.gcu()
n=d.cx
C.b.E(n.a,n.d,o)
o=e.gcv()
n=d.cy
C.b.E(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.e:this.U(l,this.Q.d)
u=this.a
q=this.Q.d
u.ag(u.e6,u.bH,q)
break
case C.d:this.U(l,this.Q.e)
u=this.a
q=this.Q.e
u.an(u.e7,u.bH,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gW().cP()
a2.Q=q}u=u.id
u.toString
u.a9(q.a2(0,!0))}if(s.dy){this.U(l,this.ch)
u=this.a
q=this.ch
u.an(u.e8,u.e9,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bI
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.e:this.U(l,this.cx.d)
u=this.a
q=this.cx.d
u.ag(u.ea,u.bJ,q)
q=this.a
u=this.cx.f
q=q.bI
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.d:this.U(l,this.cx.e)
u=this.a
q=this.cx.e
u.an(u.eb,u.bJ,q)
q=this.a
u=this.cx.f
q=q.bI
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bL
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bK
C.b.E(q.a,q.d,o)
break
case C.e:this.U(l,this.cy.d)
u=this.a
q=this.cy.d
u.ag(u.ec,u.bM,q)
q=this.a
u=this.cy.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bK
C.b.E(u.a,u.d,o)
break
case C.d:this.U(l,this.cy.e)
u=this.a
q=this.cy.e
u.an(u.ed,u.bM,q)
q=this.a
u=this.cy.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bK
C.b.E(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bN
C.b.E(u.a,u.d,p)
break
case C.e:this.U(l,this.db.d)
u=this.a
p=this.db.d
u.ag(u.ee,u.bO,p)
p=this.a
u=this.db.f
p=p.bN
C.b.E(p.a,p.d,u)
break
case C.d:this.U(l,this.db.e)
u=this.a
p=this.db.e
u.an(u.ef,u.bO,p)
p=this.a
u=this.db.f
p=p.bN
C.b.E(p.a,p.d,u)
break}u=a2.a
C.b.bg(u,3042)
C.b.jo(u,770,771)}for(j=0;j<l.length;++j)l[j].J(a2)
u=a3.e
u.J(a2)
u.a6(a2)
u.a7(a2)
if(q)C.b.jD(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.aX(u,33984+q.a)
C.b.a5(u,34067,null)}}q=this.a
q.toString
C.b.b1(u,null)
q.x.bf()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dl().ar},
sfF:function(a){this.e=H.e(a,"$iR",[V.Y],"$aR")}}
O.fh.prototype={
iq:function(a){var u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.w(this.b,u,a,this,[P.x])
u.b=!0
this.a.q(u)}},
au:function(){this.d7()
this.iq(1)}}
O.cf.prototype={
q:function(a){this.a.q(H.d(a,"$it"))},
aa:function(){return this.q(null)},
au:function(){},
is:function(a){},
it:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gm().S(0,this.ga1())
t=this.e
this.e=a
if(a!=null)a.gm().h(0,this.ga1())
u=new D.w(this.b+".textureCube",t,this.e,this,[T.cw])
u.b=!0
this.a.q(u)}},
sbn:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.au()
this.c=C.d
this.is(null)
u=this.a
u.a=null
u.q(null)}this.it(a)}}
O.fi.prototype={}
O.aO.prototype={
dF:function(a){var u,t
if(!J.Q(this.f,a)){u=this.f
this.f=a
t=new D.w(this.b+".color",u,a,this,[V.V])
t.b=!0
this.a.q(t)}},
au:function(){this.d7()
this.dF(new V.V(1,1,1))},
sax:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.au()
u=this.a
u.a=null
u.q(null)}this.dF(b)}}
O.fk.prototype={
ir:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.w(this.b+".refraction",u,a,this,[P.x])
u.b=!0
this.a.q(u)}},
au:function(){this.c2()
this.ir(1)}}
O.fl.prototype={
cq:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.w(this.b+".shininess",u,a,this,[P.x])
u.b=!0
this.a.q(u)}},
au:function(){this.c2()
this.cq(100)}}
O.dI.prototype={
gm:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
q:function(a){var u
H.d(a,"$it")
u=this.e
if(u!=null)u.A(a)},
aa:function(){return this.q(null)},
a8:function(a){},
bl:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.j(0,"Skybox"),"$idJ")
if(u==null){t=a.a
u=new A.dJ(t,"Skybox")
u.b4(t,"Skybox")
u.bh($.lc,$.lb)
u.z=u.x.j(0,"posAttr")
u.Q=H.c(u.y.j(0,"fov"),"$iJ")
u.ch=H.c(u.y.j(0,"ratio"),"$iJ")
u.cx=H.c(u.y.j(0,"boxClr"),"$iE")
u.cy=H.c(u.y.j(0,"boxTxt"),"$ia9")
u.db=H.c(u.y.j(0,"viewMat"),"$iZ")
a.ba(u)}this.a=u}if(b.e==null){t=b.d.bd(new Z.bq(a.a),$.a7())
t.aj($.a7()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.J(a)}t=a.d
s=a.c
r=this.a
r.J(a)
q=this.b
p=r.Q
C.b.E(p.a,p.d,q)
q=r.ch
C.b.E(q.a,q.d,t/s)
s=this.c
r.cy.d3(s)
s=this.d
t=r.cx
C.b.t(t.a,t.d,s.a,s.b,s.c)
s=a.db.gW().cP()
r=r.db
r.toString
r.a9(s.a2(0,!0))
t=b.e
if(t instanceof Z.aX){t.J(a)
t.a6(a)
t.a7(a)}else b.e=null
t=this.a
t.toString
C.b.b1(a.a,null)
t.x.bf()
t=this.c
if(t!=null)t.a7(a)}}
O.bo.prototype={}
O.dP.prototype={
gm:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
q:function(a){var u
H.d(a,"$it")
u=this.e
if(u!=null)u.A(a)},
aa:function(){return this.q(null)},
hz:function(a,b){var u,t,s,r,q,p,o
H.e(b,"$if",[O.aE],"$af")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bf()
o.sad(null)
o.saV(null)
o.c=null
o.d=0
p.f=o}H.k(t,s)
if(o.a==null)o.sad(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
hB:function(a,b){var u,t
H.e(b,"$if",[O.aE],"$af")
for(u=b.gR(b),t=this.ga1();u.w();)u.gH().gm().S(0,t)
this.aa()},
a8:function(a){},
bl:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.h.a4(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.d(a.fr.j(0,t),"$idQ")
if(s==null){s=A.le(u,a.a)
a.ba(s)}this.b=s
t=s}if(b.e==null){t=b.d.bd(new Z.bq(a.a),$.a7())
r=t.aj($.a7())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.J(a)
t=T.b3
p=H.b([],[t])
for(r=[P.x],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.e(p,"$ia",t,"$aa")
if(q!=null)if(!C.a.V(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.j(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.F(j,q,0)
else C.b.F(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.j(q,o)
q=q[o]
if(l==null){l=$.fm
if(l==null){l=new V.Y(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fm=l}}i=new Float32Array(H.bQ(H.e(l.a2(0,!0),"$ia",r,"$aa")))
C.b.d_(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.co
if(l==null){l=V.cn(0,0,1,1)
$.co=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.j(l,o)
l=l[o]
C.b.bV(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.j(q,o)
q=q[o]
C.b.bV(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.co
if(l==null){l=V.cn(0,0,1,1)
$.co=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.j(l,o)
l=l[o]
C.b.bV(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.j(q,o)
q=q[o]
C.b.bV(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.j(q,o)
q=q[o]
l=l?1:0
C.b.F(q.a,q.d,l);++o}}t=this.b.Q
C.b.F(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.kw(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].J(a)
t=b.e
if(t instanceof Z.aX){t.J(a)
t.a6(a)
t.a7(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.b1(r,null)
t.x.bf()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.aX(r,33984+t.a)
C.b.a5(r,3553,null)}}},
sfT:function(a){this.c=H.e(a,"$iR",[O.aE],"$aR")}}
O.aE.prototype={
gm:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
q:function(a){var u
H.d(a,"$it")
u=this.f
if(u!=null)u.A(a)},
aa:function(){return this.q(null)}}
T.b3.prototype={}
T.bN.prototype={}
T.fX.prototype={
gm:function(){var u=this.y
if(u==null){u=D.C()
this.y=u}return u},
J:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.aX(u,33984+this.a)
C.b.a5(u,3553,this.b)}}}
T.cw.prototype={
gm:function(){var u=this.e
if(u==null){u=D.C()
this.e=u}return u},
J:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.aX(u,33984+this.a)
C.b.a5(u,34067,this.b)}},
a7:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.aX(u,33984+this.a)
C.b.a5(u,34067,null)}}}
T.fY.prototype={
ep:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.a5(o,34067,n)
C.b.aA(o,34067,10242,10497)
C.b.aA(o,34067,10243,10497)
C.b.aA(o,34067,10241,9729)
C.b.aA(o,34067,10240,9729)
C.b.a5(o,34067,null)
m=new T.cw()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aT(m,n,u,34069,!1,!1)
this.aT(m,n,r,34070,!1,!1)
this.aT(m,n,t,34071,!1,!1)
this.aT(m,n,q,34072,!1,!1)
this.aT(m,n,s,34073,!1,!1)
this.aT(m,n,p,34074,!1,!1)
return m},
eo:function(a){return this.ep(a,".png",!1,"")},
jU:function(a,b){return this.ep(a,b,!1,"")},
aT:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.l
W.a4(u,"load",H.k(new T.fZ(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
il:function(a,b,c){var u,t,s,r
b=V.cU(b,2)
u=V.cU(a.width,2)
t=V.cU(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iv(null,null)
s.width=u
s.height=t
r=H.d(C.o.eQ(s,"2d"),"$iby")
r.imageSmoothingEnabled=!1;(r&&C.y).jF(r,a,0,0,s.width,s.height)
return P.lI(C.y.h2(r,0,0,s.width,s.height))}}}
T.fZ.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.il(this.b,u.c,this.c)
s=u.a
C.b.a5(s,34067,this.d)
C.b.kf(s,37440,this.e?1:0)
C.b.kq(s,this.f,0,6408,6408,5121,t)
C.b.a5(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cG()}++u.e},
$S:26}
V.aW.prototype={
aI:function(a){return!0},
i:function(a){return"all"},
$ian:1}
V.an.prototype={}
V.dr.prototype={
aI:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aI(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.e(a,"$ia",[V.an],"$aa")},
$ian:1}
V.ai.prototype={
aI:function(a){return!this.f7(a)},
i:function(a){return"!["+this.d6(0)+"]"}}
V.fA.prototype={
aI:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.iG(this.a)
t=H.iG(this.b)
return u+".."+t},
$ian:1}
V.fI.prototype={
fc:function(a){var u,t
if(a.a.length<=0)throw H.i(P.o("May not create a SetMatcher with zero characters."))
u=new H.aM([P.y,P.I])
for(t=new H.ce(a,a.gp(a),0,[H.a6(a,"W",0)]);t.w();)u.a_(0,t.d,!0)
this.sip(u)},
aI:function(a){return this.a.dW(a)},
i:function(a){var u=this.a
return P.iJ(new H.dm(u,[H.v(u,0)]),0,null)},
sip:function(a){this.a=H.e(a,"$iaw",[P.y,P.I],"$aaw")},
$ian:1}
V.cr.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cy(this.a.k(0,b))
r.sae(H.b([],[V.an]))
r.c=!1
C.a.h(this.c,r)
return r},
jH:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aI(a))return r}return},
i:function(a){return this.b},
siO:function(a){this.c=H.e(a,"$ia",[V.cy],"$aa")}}
V.dV.prototype={
i:function(a){var u,t
u=H.j2(this.b,"\n","\\n")
t=H.j2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cx.prototype={
aK:function(a,b,c){var u,t,s
H.e(c,"$ia",[P.m],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.z)(c),++t){s=c[t]
this.c.a_(0,s,b)}},
i:function(a){return this.b},
sih:function(a){var u=P.m
this.c=H.e(a,"$iaw",[u,u],"$aaw")}}
V.h0.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cr(this,b)
u.siO(H.b([],[V.cy]))
u.d=null
this.a.a_(0,b,u)}return u},
O:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cx(this,a)
t=P.m
u.sih(new H.aM([t,t]))
this.b.a_(0,a,u)}return u},
eH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dV])
t=this.c
s=[P.y]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aR(a,o)
m=t.jH(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.iJ(r,0,null)
throw H.i(P.o("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.iJ(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dV(j==null?k.b:j,l,o)}++o}}},
siC:function(a){this.a=H.e(a,"$iaw",[P.m,V.cr],"$aaw")},
siH:function(a){this.b=H.e(a,"$iaw",[P.m,V.cx],"$aaw")}}
V.cy.prototype={
i:function(a){return this.b.b+": "+this.d6(0)}}
X.ev.prototype={
gm:function(){var u=this.fr
if(u==null){u=D.C()
this.fr=u}return u},
am:function(a){var u=this.fr
if(u!=null)u.A(a)},
saN:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.w("width",u,b,this,[P.y])
u.b=!0
this.am(u)}},
saG:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.w("height",u,b,this,[P.y])
u.b=!0
this.am(u)}},
J:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.v()
this.saN(0,C.i.a0(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.v()
this.saG(0,C.i.a0(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.a2(C.b.bZ(u,3379))
p=V.cU(s,2)
o=V.cU(r,2)
q=V.cU(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.a5(u,3553,n)
C.b.aA(u,3553,10242,33071)
C.b.aA(u,3553,10243,33071)
C.b.aA(u,3553,10241,9729)
C.b.aA(u,3553,10240,9729)
C.b.eE(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.a5(u,3553,null)
m=T.jC(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cG()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cG()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.a5(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dN(u,36161,t)
C.b.kj(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.bc(u,36160,t)
C.b.jN(u,36160,36064,3553,this.z,0)
C.b.jM(u,36160,36096,36161,this.Q)
C.b.a5(u,3553,null)
C.b.dN(u,36161,null)
C.b.bc(u,36160,null)}u=a.a
C.b.bc(u,36160,this.y)
C.b.bg(u,2884)
C.b.bg(u,2929)
C.b.dY(u,513)
t=this.dy
s=t.c
a.c=C.i.a0(s*this.a)
r=t.d
a.d=C.i.a0(r*this.b)
l=t.a
k=this.c
j=C.i.a0(l*k)
t=t.b
l=this.d
C.b.eK(u,j,C.i.a0(t*l),C.i.a0(s*k),C.i.a0(r*l))
C.b.dU(u,this.db)
if(this.cy){t=this.cx
C.b.dT(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.dS(u,i)},
a7:function(a){C.b.bc(a.a,36160,null)}}
X.bw.prototype={$iaQ:1}
X.eX.prototype={
gm:function(){var u=this.x
if(u==null){u=D.C()
this.x=u}return u},
J:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.bc(u,36160,null)
C.b.bg(u,2884)
C.b.bg(u,2929)
C.b.dY(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.F(t)
p=C.i.a0(q*t)
q=r.b
if(typeof s!=="number")return H.F(s)
o=C.i.a0(q*s)
q=C.i.a0(r.c*t)
a.c=q
r=C.i.a0(r.d*s)
a.d=r
C.b.eK(u,p,o,q,r)
C.b.dU(u,this.c)
if(this.b){r=this.a
C.b.dT(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.dS(u,n)},
a7:function(a){}}
X.f1.prototype={
gm:function(){var u=this.b
if(u==null){u=D.C()
this.b=u}return u},
J:function(a){var u
a.cy.bS(V.bm())
u=V.bm()
a.db.bS(u)},
a7:function(a){a.cy.aJ()
a.db.aJ()},
$iaQ:1,
$ibw:1}
X.dB.prototype={
gm:function(){var u=this.f
if(u==null){u=D.C()
this.f=u}return u},
am:function(a){var u
H.d(a,"$it")
u=this.f
if(u!=null)u.A(a)},
fw:function(){return this.am(null)},
J:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aP(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bS(n)
u=$.jt
if(u==null){u=V.jv()
t=V.jN()
s=$.jK
if(s==null){s=new V.M(0,0,-1)
$.jK=s}s=V.jo(u,t,s)
$.jt=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b0(a,this)
if(l!=null)m=l.v(0,m)}a.db.bS(m)},
a7:function(a){a.cy.aJ()
a.db.aJ()},
$iaQ:1,
$ibw:1}
X.cu.prototype={}
V.ba.prototype={
br:function(a){this.b=new P.f_(C.M)
this.c=null
this.scb(H.b([],[[P.a,W.av]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.av]))
t=a.split("\n")
for(u=t.length,s=[W.av],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.K(p)
n=this.b.fL(p,0,p.length)
m=n==null?p:n
C.k.eZ(o,H.j2(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbP(this.d),o)}},
eA:function(a){var u,t,s,r
H.e(a,"$ia",[P.m],"$aa")
this.scb(H.b([],[[P.a,W.av]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bz()
this.c=t}for(t=t.eH(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)this.bR(t[r])},
scb:function(a){this.d=H.e(a,"$ia",[[P.a,W.av]],"$aa")}}
V.ip.prototype={
$1:function(a){H.d(a,"$iaR")
P.j1(C.i.eG(this.a.gjL(),2)+" fps")},
$S:40}
V.eF.prototype={
bR:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break
case"Type":this.M(a.b,"#B11")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bz:function(){var u,t,s,r
u=V.h1()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.r(new H.q("_"))
C.a.h(t.a,s)
s=V.S("a","z")
C.a.h(t.a,s)
s=V.S("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.r(new H.q("_"))
C.a.h(s.a,t)
t=V.S("0","9")
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.r(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"OpenDoubleStr")
t=V.r(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.r(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.r(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.r(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aW())
s=u.k(0,"Start").l(0,"OpenSingleStr")
t=V.r(new H.q("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.r(new H.q("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.r(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.r(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aW())
s=u.k(0,"Start").l(0,"Slash")
t=V.r(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.r(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").l(0,"EndComment")
t=V.r(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ai()
r=[V.an]
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"MLComment")
s=V.r(new H.q("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").l(0,"MLCStar")
t=V.r(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"MLComment")
s=new V.ai()
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"EndComment")
s=V.r(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Whitespace")
t=V.r(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").l(0,"Whitespace")
s=V.r(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.O("Num")
s=u.k(0,"Float")
s.d=s.a.O("Num")
s=u.k(0,"Sym")
s.d=s.a.O("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.O("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.O("String")
s=u.k(0,"EndComment")
s.d=s.a.O("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.O("Whitespace")
s=u.k(0,"Id")
t=s.a.O("Id")
s.d=t
s=[P.m]
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eY.prototype={
bR:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Preprocess":this.M(a.b,"#737")
break
case"Reserved":this.M(a.b,"#119")
break
case"Symbol":this.M(a.b,"#611")
break
case"Type":this.M(a.b,"#171")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bz:function(){var u,t,s,r
u=V.h1()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.r(new H.q("_"))
C.a.h(t.a,s)
s=V.S("a","z")
C.a.h(t.a,s)
s=V.S("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.r(new H.q("_"))
C.a.h(s.a,t)
t=V.S("0","9")
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.r(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Slash")
t=V.r(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.r(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.aW())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.r(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ai()
r=[V.an]
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.r(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.ai()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.q("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"EndPreprocess")
t=V.r(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Whitespace")
s=V.r(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").l(0,"Whitespace")
t=V.r(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.O("Num")
t=u.k(0,"Float")
t.d=t.a.O("Num")
t=u.k(0,"Sym")
t.d=t.a.O("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.O("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.O("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.O("Whitespace")
t=u.k(0,"Id")
s=t.a.O("Id")
t.d=s
t=[P.m]
s.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eZ.prototype={
bR:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
this.M("=","#111")
break
case"Id":this.M(a.b,"#111")
break
case"Other":this.M(a.b,"#111")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break}},
bz:function(){var u,t,s
u=V.h1()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.r(new H.q("_"))
C.a.h(t.a,s)
s=V.S("a","z")
C.a.h(t.a,s)
s=V.S("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.r(new H.q("_"))
C.a.h(s.a,t)
t=V.S("0","9")
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").l(0,"Attr")
s=V.r(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Sym")
s=V.r(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").l(0,"Sym")
t=V.r(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"OpenStr")
s=V.r(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").l(0,"CloseStr")
t=V.r(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").l(0,"EscStr")
s=V.r(new H.q("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").l(0,"OpenStr")
t=V.r(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.aW())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.aW())
t=u.k(0,"Other").l(0,"Other")
s=new V.ai()
s.sae(H.b([],[V.an]))
C.a.h(t.a,s)
t=V.r(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.O("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.O("String")
t=u.k(0,"Id")
s=t.a.O("Id")
t.d=s
s.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
s=u.k(0,"Attr")
s.d=s.a.O("Attr")
s=u.k(0,"Other")
s.d=s.a.O("Other")
return u}}
V.fx.prototype={
eA:function(a){H.e(a,"$ia",[P.m],"$aa")
this.scb(H.b([],[[P.a,W.av]]))
this.M(C.a.l(a,"\n"),"#111")},
bR:function(a){},
bz:function(){return}}
V.fM.prototype={
fd:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).D(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.D(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.D(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.D(q,p)}o=u.createElement("div")
this.a=o
C.k.D(q,o)
this.b=null
o=W.l
W.a4(u,"scroll",H.k(new V.fO(s),{func:1,ret:-1,args:[o]}),!1,o)},
dK:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.e(a,"$ia",[P.m],"$aa")
this.iv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eH(C.a.jR(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.D(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.D(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.D(t,o)
break
case"Link":n=p.b
if(H.m2(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.j(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
C.k.D(t,l)}else{k=P.jS(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.D(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.D(t,o)
break}}C.k.D(this.a,t)},
eP:function(a){var u,t,s,r
u=new V.eF("dart")
u.br("dart")
t=new V.eY("glsl")
t.br("glsl")
s=new V.eZ("html")
s.br("html")
r=C.a.jI(H.b([u,t,s],[V.ba]),new V.fP(a))
if(r!=null)return r
u=new V.fx("plain")
u.br("plain")
return u},
dJ:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a7,"$ia",[P.m],"$aa")
u=H.b([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.iZ(r).c0(r,"+")){C.a.a_(a7,s,C.j.bp(r,1))
C.a.h(u,1)
t=!0}else if(C.j.c0(r,"-")){C.a.a_(a7,s,C.j.bp(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eP(a5)
q.eA(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.jS(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.j8(null)
i.href="#"+m
i.textContent=a4
C.k.D(j,i)
C.v.D(k,j)
C.m.D(l,k)
C.p.D(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.j(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.z)(r),++a0)C.v.D(a,r[a0])
C.m.D(e,d)
C.m.D(e,c)
C.m.D(e,a)
C.p.D(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.z)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gR(r);a3.w();)C.v.D(c,a3.gH())
C.m.D(e,d)
C.m.D(e,c)
C.p.D(n,e)}},
iv:function(){var u,t,s,r
if(this.b!=null)return
u=V.h1()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.r(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.ai()
r=[V.an]
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").l(0,"BoldEnd")
s=V.r(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Italic")
s=V.r(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").l(0,"Italic")
s=new V.ai()
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").l(0,"ItalicEnd")
s=V.r(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Code")
s=V.r(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").l(0,"Code")
s=new V.ai()
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").l(0,"CodeEnd")
s=V.r(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"LinkHead")
s=V.r(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").l(0,"LinkTail")
s=V.r(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").l(0,"LinkEnd")
t=V.r(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").l(0,"LinkHead")
t=new V.ai()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.r(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.ai()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.aW())
s=u.k(0,"Other").l(0,"Other")
t=new V.ai()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.O("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.O("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.O("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.O("Link")
s=u.k(0,"Other")
s.d=s.a.O("Other")
this.b=u}}
V.fO.prototype={
$1:function(a){P.jF(C.q,new V.fN(this.a))},
$S:26}
V.fN.prototype={
$0:function(){var u,t,s
u=C.i.a0(document.documentElement.scrollTop)
t=this.a.style
s=H.h(-0.01*u)+"px"
t.top=s},
$S:2}
V.fP.prototype={
$1:function(a){return H.d(a,"$iba").a===this.a},
$S:41}
N.il.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$it")
u=this.a
t=this.b
s=t.a
r=[P.m]
u.dJ("Vertex Shader for blur","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dJ("Fragment Shader for blur","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a8.prototype
u.f4=u.i
u=J.dj.prototype
u.f6=u.i
u=P.f.prototype
u.f5=u.bX
u=W.N.prototype
u.c1=u.ao
u=W.ei.prototype
u.f8=u.av
u=O.cf.prototype
u.d7=u.au
u=O.aO.prototype
u.c2=u.au
u=V.dr.prototype
u.f7=u.aI
u.d6=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lC","lk",8)
u(P,"lD","ll",8)
u(P,"lE","lm",8)
t(P,"k0","lB",3)
s(W,"lN",4,null,["$4"],["lo"],18,0)
s(W,"lO",4,null,["$4"],["lp"],18,0)
var m
r(m=E.ac.prototype,"gey",0,0,null,["$1","$0"],["ez","k6"],0,0)
r(m,"gew",0,0,null,["$1","$0"],["ex","k5"],0,0)
r(m,"geu",0,0,null,["$1","$0"],["ev","jZ"],0,0)
q(m,"gjX","jY",6)
q(m,"gk_","k0",6)
r(m=E.dU.prototype,"gd9",0,0,null,["$1","$0"],["dc","da"],0,0)
p(m,"gkk","eC",3)
o(m=X.e1.prototype,"ghC","hD",9)
o(m,"ghm","hn",9)
o(m,"ghs","ht",4)
o(m,"ghG","hH",16)
o(m,"ghE","hF",16)
o(m,"ghK","hL",4)
o(m,"ghO","hP",4)
o(m,"ghw","hx",4)
o(m,"ghM","hN",4)
o(m,"ghu","hv",4)
o(m,"ghQ","hR",37)
o(m,"ghS","hT",9)
o(m,"gi7","i8",10)
o(m,"gi3","i4",10)
o(m,"gi5","i6",10)
r(D.bc.prototype,"gfj",0,0,null,["$1","$0"],["aB","fk"],0,0)
r(m=D.dl.prototype,"gdw",0,0,null,["$1","$0"],["dz","hI"],0,0)
o(m,"ghU","hV",39)
q(m,"ghg","hh",19)
q(m,"ghY","hZ",19)
n(V.O.prototype,"gp","cQ",20)
n(V.M.prototype,"gp","cQ",20)
r(m=U.cc.prototype,"gaU",0,0,null,["$1","$0"],["P","af"],0,0)
q(m,"ghe","hf",21)
q(m,"ghW","hX",21)
r(m=U.e2.prototype,"gaU",0,0,null,["$1","$0"],["P","af"],0,0)
o(m,"gce","cf",1)
o(m,"gcg","ci",1)
o(m,"gcj","ck",1)
r(m=U.e3.prototype,"gaU",0,0,null,["$1","$0"],["P","af"],0,0)
o(m,"gce","cf",1)
o(m,"gcg","ci",1)
o(m,"gcj","ck",1)
o(m,"gh8","h9",1)
o(m,"gha","hb",1)
o(m,"giM","iN",1)
o(m,"giK","iL",1)
o(m,"giI","iJ",1)
o(U.e4.prototype,"ghc","hd",1)
r(m=M.d2.prototype,"gY",0,0,null,["$1","$0"],["Z","b5"],0,0)
q(m,"gi_","i0",23)
q(m,"gi1","i2",23)
r(M.d3.prototype,"gY",0,0,null,["$1","$0"],["Z","b5"],0,0)
r(m=M.d8.prototype,"gY",0,0,null,["$1","$0"],["Z","b5"],0,0)
q(m,"gho","hp",6)
q(m,"ghq","hr",6)
r(O.db.prototype,"ga1",0,0,null,["$1","$0"],["q","aa"],0,0)
r(m=O.ds.prototype,"ga1",0,0,null,["$1","$0"],["q","aa"],0,0)
r(m,"gij",0,0,null,["$1","$0"],["dD","ik"],0,0)
q(m,"ghi","hj",24)
q(m,"ghk","hl",24)
r(O.cf.prototype,"ga1",0,0,null,["$1","$0"],["q","aa"],0,0)
r(O.dI.prototype,"ga1",0,0,null,["$1","$0"],["q","aa"],0,0)
r(m=O.dP.prototype,"ga1",0,0,null,["$1","$0"],["q","aa"],0,0)
q(m,"ghy","hz",25)
q(m,"ghA","hB",25)
r(O.aE.prototype,"ga1",0,0,null,["$1","$0"],["q","aa"],0,0)
r(X.dB.prototype,"gfv",0,0,null,["$1","$0"],["am","fw"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.iE,J.a8,J.af,P.ee,P.f,H.ce,P.aK,H.bB,H.e0,H.fB,H.h4,P.be,H.c3,H.ej,P.bG,H.f8,H.f9,H.f5,P.ek,P.aV,P.aA,P.e7,P.fR,P.ct,P.fS,P.aR,P.ab,P.i5,P.hW,P.bP,P.ed,P.W,P.c4,P.f0,P.i3,P.I,P.ah,P.aa,P.bd,P.fv,P.dL,P.ea,P.eW,P.bg,P.a,P.H,P.aj,P.m,P.b2,W.eD,W.br,W.am,W.dz,W.ei,W.hZ,W.d9,W.ap,W.hV,W.eo,P.en,P.hQ,O.R,O.ch,E.ew,E.ac,E.fC,E.dU,Z.e6,Z.bq,Z.aX,Z.bi,Z.aH,D.ez,D.bf,D.t,X.d1,X.dk,X.f7,X.fb,X.ao,X.fn,X.h2,X.e1,D.bc,D.X,D.dC,D.dK,D.dR,D.dS,D.dT,V.V,V.ag,V.eO,V.cg,V.Y,V.a1,V.ad,V.b1,V.bK,V.O,V.M,U.e2,U.e3,U.e4,M.d3,M.d8,M.aq,A.cZ,A.eu,A.fj,A.cz,A.cC,A.cA,A.cD,A.cB,A.cE,A.bz,A.dX,A.hb,F.a0,F.aZ,F.bn,F.dH,F.fJ,F.fK,F.fL,F.at,F.hk,F.hl,F.ho,F.hp,O.bo,O.cf,O.aE,T.fY,V.aW,V.an,V.dr,V.fA,V.fI,V.cr,V.dV,V.cx,V.h0,X.cu,X.bw,X.f1,X.dB,V.ba,V.fM])
s(J.a8,[J.f4,J.dh,J.dj,J.aL,J.di,J.bE,H.dx,W.bA,W.by,W.e8,W.eH,W.d6,W.d7,W.l,W.eb,W.bh,W.dp,W.eg,W.dE,W.aS,W.el,W.ep,P.d_,P.da,P.dD,P.dF,P.bL,P.dG,P.dO,P.dZ])
s(J.dj,[J.fw,J.cF,J.bl])
t(J.iD,J.aL)
s(J.di,[J.dg,J.df])
t(P.fa,P.ee)
s(P.fa,[H.e_,W.hz,W.ae,P.eS])
t(H.q,H.e_)
s(P.f,[H.eK,H.fe,H.cG])
s(H.eK,[H.bF,H.dm])
s(P.aK,[H.ff,H.ht])
t(H.fg,H.bF)
s(P.be,[H.fu,H.f6,H.he,H.h6,H.ey,H.fG,P.dA,P.aC,P.hf,P.hd,P.cs,P.eC,P.eE])
s(H.c3,[H.iq,H.fW,H.ig,H.ih,H.ii,P.hv,P.hu,P.hw,P.hx,P.i2,P.i1,P.hE,P.hI,P.hF,P.hG,P.hH,P.hL,P.hM,P.hK,P.hJ,P.fT,P.fU,P.i9,P.hT,P.hS,P.hU,P.fd,P.eI,P.eJ,W.eL,W.hD,W.ft,W.fs,W.hX,W.hY,W.i0,W.i4,P.ib,P.eT,P.eU,E.fD,E.fE,E.fF,E.h_,D.eQ,D.eR,F.i6,F.hr,F.hq,F.hm,F.hn,T.fZ,V.ip,V.fO,V.fN,V.fP,N.il])
s(H.fW,[H.fQ,H.c1])
t(P.fc,P.bG)
s(P.fc,[H.aM,W.hy])
t(H.du,H.dx)
s(H.du,[H.cK,H.cM])
t(H.cL,H.cK)
t(H.dv,H.cL)
t(H.cN,H.cM)
t(H.dw,H.cN)
s(H.dw,[H.fo,H.fp,H.fq,H.dy,H.fr])
t(P.hR,P.i5)
t(P.hP,P.hW)
t(P.c6,P.fS)
t(P.eM,P.c4)
s(P.c6,[P.f_,P.hh])
t(P.hg,P.eM)
s(P.aa,[P.x,P.y])
s(P.aC,[P.bJ,P.f2])
s(W.bA,[W.B,W.cH])
s(W.B,[W.N,W.b9,W.c8,W.cI])
s(W.N,[W.u,P.n])
s(W.u,[W.cY,W.et,W.c0,W.b8,W.bx,W.av,W.eV,W.dd,W.cd,W.ci,W.fH,W.bM,W.dM,W.dN,W.fV,W.cv])
t(W.c7,W.e8)
t(W.ec,W.eb)
t(W.bC,W.ec)
t(W.de,W.c8)
t(W.bp,W.l)
s(W.bp,[W.aN,W.a5,W.aF])
t(W.eh,W.eg)
t(W.ck,W.eh)
t(W.em,W.el)
t(W.h3,W.em)
t(W.hs,W.ci)
t(W.aU,W.a5)
t(W.e9,W.d7)
t(W.eq,W.ep)
t(W.ef,W.eq)
t(W.hA,W.hy)
t(W.hB,P.fR)
t(W.iN,W.hB)
t(W.hC,P.ct)
t(W.i_,W.ei)
t(P.ay,P.hQ)
t(P.cp,P.n)
s(E.ew,[Z.d0,A.cq,T.b3])
s(D.t,[D.bj,D.bk,D.w,X.fy])
s(X.fy,[X.dq,X.b_,X.cj,X.dW])
s(O.R,[D.dl,U.cc,M.d2])
s(D.ez,[U.eB,U.a3])
t(U.c5,U.a3)
s(A.cq,[A.d5,A.dc,A.dt,A.dJ,A.dQ])
s(A.dX,[A.D,A.h8,A.h9,A.ha,A.h7,A.J,A.ar,A.E,A.dY,A.hc,A.bO,A.Z,A.a_,A.a9])
s(O.bo,[O.eG,O.db,O.ds,O.dI,O.dP])
s(O.cf,[O.fh,O.fi,O.aO])
s(O.aO,[O.fk,O.fl])
s(T.b3,[T.bN,T.cw])
t(T.fX,T.bN)
s(V.dr,[V.ai,V.cy])
s(X.cu,[X.ev,X.eX])
s(V.ba,[V.eF,V.eY,V.eZ,V.fx])
u(H.e_,H.e0)
u(H.cK,P.W)
u(H.cL,H.bB)
u(H.cM,P.W)
u(H.cN,H.bB)
u(P.ee,P.W)
u(W.e8,W.eD)
u(W.eb,P.W)
u(W.ec,W.am)
u(W.eg,P.W)
u(W.eh,W.am)
u(W.el,P.W)
u(W.em,W.am)
u(W.ep,P.W)
u(W.eq,W.am)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b8.prototype
C.o=W.bx.prototype
C.y=W.by.prototype
C.k=W.av.prototype
C.J=W.d6.prototype
C.L=W.dd.prototype
C.z=W.de.prototype
C.N=J.a8.prototype
C.a=J.aL.prototype
C.O=J.df.prototype
C.h=J.dg.prototype
C.r=J.dh.prototype
C.i=J.di.prototype
C.j=J.bE.prototype
C.V=J.bl.prototype
C.Z=W.ck.prototype
C.D=J.fw.prototype
C.E=W.dE.prototype
C.b=P.bL.prototype
C.v=W.bM.prototype
C.p=W.dM.prototype
C.m=W.dN.prototype
C.w=J.cF.prototype
C.F=W.aU.prototype
C.G=W.cH.prototype
C.H=new P.fv()
C.I=new P.hh()
C.l=new P.hR()
C.c=new A.bz(0,"ColorSourceType.None")
C.f=new A.bz(1,"ColorSourceType.Solid")
C.e=new A.bz(2,"ColorSourceType.Texture2D")
C.d=new A.bz(3,"ColorSourceType.TextureCube")
C.q=new P.bd(0)
C.K=new P.bd(5e6)
C.M=new P.f0("element",!0,!1,!1,!1)
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
C.W=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.X=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.Y=H.b(u([]),[P.m])
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.hg(!1)})();(function staticFields(){$.aJ=0
$.c2=null
$.ja=null
$.iP=!1
$.k3=null
$.jZ=null
$.k8=null
$.ic=null
$.ij=null
$.j_=null
$.bR=null
$.cQ=null
$.cR=null
$.iQ=!1
$.T=C.l
$.aY=null
$.iz=null
$.jh=null
$.jg=null
$.jn=null
$.fm=null
$.ju=null
$.cl=null
$.co=null
$.jJ=null
$.jM=null
$.jL=null
$.hi=null
$.jK=null
$.kG="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.kF="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.kL="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.kK="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.lc="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.lb="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.jt=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ma","kb",function(){return H.k2("_$dart_dartClosure")})
u($,"mb","j3",function(){return H.k2("_$dart_js")})
u($,"mf","kc",function(){return H.aT(H.h5({
toString:function(){return"$receiver$"}}))})
u($,"mg","kd",function(){return H.aT(H.h5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mh","ke",function(){return H.aT(H.h5(null))})
u($,"mi","kf",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ml","ki",function(){return H.aT(H.h5(void 0))})
u($,"mm","kj",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mk","kh",function(){return H.aT(H.jH(null))})
u($,"mj","kg",function(){return H.aT(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mo","kl",function(){return H.aT(H.jH(void 0))})
u($,"mn","kk",function(){return H.aT(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mF","j4",function(){return P.lj()})
u($,"mJ","cX",function(){return[]})
u($,"mI","kq",function(){return P.l7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mG","kp",function(){return P.jl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"mH","j5",function(){return P.kR(P.m,P.bg)})
u($,"my","ko",function(){return Z.az(0)})
u($,"ms","km",function(){return Z.az(511)})
u($,"mA","a7",function(){return Z.az(1)})
u($,"mz","b6",function(){return Z.az(2)})
u($,"mu","b5",function(){return Z.az(4)})
u($,"mB","aI",function(){return Z.az(8)})
u($,"mC","b7",function(){return Z.az(16)})
u($,"mv","cV",function(){return Z.az(32)})
u($,"mw","cW",function(){return Z.az(64)})
u($,"mx","kn",function(){return Z.az(96)})
u($,"mD","bZ",function(){return Z.az(128)})
u($,"mt","b4",function(){return Z.az(256)})
u($,"m9","ka",function(){return new V.eO(1e-9)})
u($,"m8","G",function(){return $.ka()})})()
var v={mangledGlobalNames:{y:"int",x:"double",aa:"num",m:"String",I:"bool",H:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:P.H,args:[F.a0]},{func:1,ret:-1,args:[P.y,[P.f,E.ac]]},{func:1,ret:P.H,args:[D.t]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.I,args:[P.m]},{func:1,ret:P.I,args:[W.ap]},{func:1,args:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.I,args:[W.N,P.m,P.m,W.br]},{func:1,ret:-1,args:[P.y,[P.f,D.X]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.y,[P.f,U.a3]]},{func:1,ret:P.m,args:[P.y]},{func:1,ret:-1,args:[P.y,[P.f,M.aq]]},{func:1,ret:-1,args:[P.y,[P.f,V.Y]]},{func:1,ret:-1,args:[P.y,[P.f,O.aE]]},{func:1,ret:P.H,args:[W.l]},{func:1,ret:P.I,args:[W.B]},{func:1,args:[W.l]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:W.N,args:[W.B]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.H,args:[,],opt:[P.aj]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.H,args:[F.at,P.x,P.x]},{func:1,ret:P.I,args:[[P.f,D.X]]},{func:1,ret:P.H,args:[P.aR]},{func:1,ret:P.I,args:[V.ba]},{func:1,ret:P.H,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a8,MediaError:J.a8,Navigator:J.a8,NavigatorConcurrentHardware:J.a8,NavigatorUserMediaError:J.a8,OverconstrainedError:J.a8,PositionError:J.a8,WebGLActiveInfo:J.a8,WebGL2RenderingContext:J.a8,SQLError:J.a8,ArrayBufferView:H.dx,Float32Array:H.dv,Int16Array:H.fo,Int32Array:H.fp,Uint32Array:H.fq,Uint8ClampedArray:H.dy,CanvasPixelArray:H.dy,Uint8Array:H.fr,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,HTMLAnchorElement:W.cY,HTMLAreaElement:W.et,HTMLBaseElement:W.c0,HTMLBodyElement:W.b8,HTMLCanvasElement:W.bx,CanvasRenderingContext2D:W.by,CDATASection:W.b9,CharacterData:W.b9,Comment:W.b9,ProcessingInstruction:W.b9,Text:W.b9,CSSStyleDeclaration:W.c7,MSStyleCSSProperties:W.c7,CSS2Properties:W.c7,HTMLDivElement:W.av,XMLDocument:W.c8,Document:W.c8,DOMException:W.eH,DOMImplementation:W.d6,DOMRectReadOnly:W.d7,Element:W.N,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,EventTarget:W.bA,HTMLFormElement:W.eV,HTMLHeadElement:W.dd,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.de,ImageData:W.bh,HTMLImageElement:W.cd,KeyboardEvent:W.aN,Location:W.dp,HTMLAudioElement:W.ci,HTMLMediaElement:W.ci,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,DocumentFragment:W.B,ShadowRoot:W.B,DocumentType:W.B,Node:W.B,NodeList:W.ck,RadioNodeList:W.ck,Range:W.dE,HTMLSelectElement:W.fH,HTMLTableCellElement:W.bM,HTMLTableDataCellElement:W.bM,HTMLTableHeaderCellElement:W.bM,HTMLTableElement:W.dM,HTMLTableRowElement:W.dN,HTMLTableSectionElement:W.fV,HTMLTemplateElement:W.cv,Touch:W.aS,TouchEvent:W.aF,TouchList:W.h3,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,HTMLVideoElement:W.hs,WheelEvent:W.aU,Window:W.cH,DOMWindow:W.cH,Attr:W.cI,ClientRect:W.e9,DOMRect:W.e9,NamedNodeMap:W.ef,MozNamedAttrMap:W.ef,SVGScriptElement:P.cp,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,WebGLBuffer:P.d_,WebGLFramebuffer:P.da,WebGLProgram:P.dD,WebGLRenderbuffer:P.dF,WebGLRenderingContext:P.bL,WebGLShader:P.dG,WebGLTexture:P.dO,WebGLUniformLocation:P.dZ})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.k5,[])
else N.k5([])})})()
//# sourceMappingURL=test.dart.js.map
