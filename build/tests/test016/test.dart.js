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
a[c]=function(){a[c]=function(){H.nl(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kk(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k4:function k4(a){this.a=a},
k2:function(){return new P.cD("No element")},
m8:function(){return new P.cD("Too many elements")},
q:function q(a){this.a=a},
fF:function fF(){},
bT:function bT(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hc:function hc(a,b,c){this.a=a
this.b=b
this.$ti=c},
hd:function hd(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
he:function he(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
iU:function iU(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
ec:function ec(){},
eb:function eb(){},
c8:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
n2:function(a){return v.types[H.a8(a)]},
n9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a_(a).$iF},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.i(H.c3(a))
return u},
mp:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h0(u)
t=u[0]
s=u[1]
return new H.hK(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bW:function(a){return H.mg(a)+H.kh(H.bH(a),0,null)},
mg:function(a){var u,t,s,r,q,p,o,n,m
u=J.a_(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icR){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c8(r.length>1&&C.i.aM(r,0)===36?C.i.bf(r,1):r)},
kV:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mo:function(a){var u,t,s,r
u=H.c([],[P.C])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.c3(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bl(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.c3(r))}return H.kV(u)},
kW:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.c3(s))
if(s<0)throw H.i(H.c3(s))
if(s>65535)return H.mo(a)}return H.kV(a)},
k6:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bl(u,10))>>>0,56320|u&1023)}throw H.i(P.aA(a,0,1114111,null,null))},
bV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mn:function(a){var u=H.bV(a).getFullYear()+0
return u},
ml:function(a){var u=H.bV(a).getMonth()+1
return u},
mh:function(a){var u=H.bV(a).getDate()+0
return u},
mi:function(a){var u=H.bV(a).getHours()+0
return u},
mk:function(a){var u=H.bV(a).getMinutes()+0
return u},
mm:function(a){var u=H.bV(a).getSeconds()+0
return u},
mj:function(a){var u=H.bV(a).getMilliseconds()+0
return u},
G:function(a){throw H.i(H.c3(a))},
k:function(a,b){if(a==null)J.bJ(a)
throw H.i(H.d8(a,b))},
d8:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
u=H.a8(J.bJ(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.hI(b,"index",null)},
n_:function(a,b,c){if(a>c)return new P.bX(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bX(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
c3:function(a){return new P.aE(!0,a,null,null)},
mW:function(a){if(typeof a!=="number")throw H.i(H.c3(a))
return a},
i:function(a){var u
if(a==null)a=new P.dP()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ly})
u.name=""}else u.toString=H.ly
return u},
ly:function(){return J.ar(this.dartException)},
t:function(a){throw H.i(a)},
A:function(a){throw H.i(P.br(a))},
b4:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
is:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l5:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kP:function(a,b){return new H.hz(a,b==null?null:b.method)},
k5:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.h3(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bl(s,16)&8191)===10)switch(r){case 438:return u.$1(H.k5(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kP(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lB()
p=$.lC()
o=$.lD()
n=$.lE()
m=$.lH()
l=$.lI()
k=$.lG()
$.lF()
j=$.lK()
i=$.lJ()
h=q.ag(t)
if(h!=null)return u.$1(H.k5(H.H(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.k5(H.H(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kP(H.H(t),h))}}return u.$1(new H.iD(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e_()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aE(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e_()
return a},
c6:function(a){var u
if(a==null)return new H.eS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eS(a)},
n1:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
n8:function(a,b,c,d,e,f){H.j(a,"$ibv")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.r("Unsupported number of arguments for wrapped closure"))},
c4:function(a,b){var u
H.a8(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n8)
a.$identity=u
return u},
m1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a_(d).$ib){u.$reflectionInfo=d
s=H.mp(u).r}else s=d
r=e?Object.create(new H.i3().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.G()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kD(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.n2,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kB:H.jW
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kD(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lZ:function(a,b,c,d){var u=H.jW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kD:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m0(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lZ(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.G()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
if(q==null){q=H.fo("self")
$.cd=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.G()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
if(q==null){q=H.fo("self")
$.cd=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
m_:function(a,b,c,d){var u,t
u=H.jW
t=H.kB
switch(b?-1:a){case 0:throw H.i(H.ms("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m0:function(a,b){var u,t,s,r,q,p,o,n
u=$.cd
if(u==null){u=H.fo("self")
$.cd=u}t=$.kA
if(t==null){t=H.fo("receiver")
$.kA=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.m_(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aL
if(typeof t!=="number")return t.G()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.G()
$.aL=t+1
return new Function(u+t+"}")()},
kk:function(a,b,c,d,e,f,g){return H.m1(a,b,H.a8(c),d,!!e,!!f,g)},
jW:function(a){return a.a},
kB:function(a){return a.c},
fo:function(a){var u,t,s,r,q
u=new H.cc("self","target","receiver","name")
t=J.h0(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
o2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
ne:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
ki:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
lw:function(a,b){throw H.i(H.aJ(a,H.c8(H.H(b).substring(2))))},
ng:function(a,b){throw H.i(H.lY(a,H.c8(H.H(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a_(a)[b])return a
H.lw(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a_(a)[b]
else u=!0
if(u)return a
H.ng(a,b)},
kp:function(a){if(a==null)return a
if(!!J.a_(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
na:function(a,b){var u
if(a==null)return a
u=J.a_(a)
if(!!u.$ib)return a
if(u[b])return a
H.lw(a,b)},
lq:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
fe:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lq(J.a_(a))
if(u==null)return!1
return H.lh(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ke)return a
$.ke=!0
try{if(H.fe(a,b))return a
u=H.jQ(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.ke=!1}},
kl:function(a,b){if(a!=null&&!H.kj(a,b))H.t(H.aJ(a,H.jQ(b)))
return a},
aJ:function(a,b){return new H.it("TypeError: "+P.fJ(a)+": type '"+H.ll(a)+"' is not a subtype of type '"+b+"'")},
lY:function(a,b){return new H.fp("CastError: "+P.fJ(a)+": type '"+H.ll(a)+"' is not a subtype of type '"+b+"'")},
ll:function(a){var u,t
u=J.a_(a)
if(!!u.$icf){t=H.lq(u)
if(t!=null)return H.jQ(t)
return"Closure"}return H.bW(a)},
nl:function(a){throw H.i(new P.fx(H.H(a)))},
ms:function(a){return new H.hR(a)},
lr:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bH:function(a){if(a==null)return
return a.$ti},
o3:function(a,b,c){return H.c7(a["$a"+H.l(c)],H.bH(b))},
d9:function(a,b,c,d){var u
H.H(c)
H.a8(d)
u=H.c7(a["$a"+H.l(c)],H.bH(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u
H.H(b)
H.a8(c)
u=H.c7(a["$a"+H.l(b)],H.bH(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.a8(b)
u=H.bH(a)
return u==null?null:u[b]},
jQ:function(a){return H.bG(a,null)},
bG:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.kh(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.l(b[t])}if('func' in a)return H.mM(a,b)
if('futureOr' in a)return"FutureOr<"+H.bG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.i.G(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bG(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bG(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bG(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bG(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.n0(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bG(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kh:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bg("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bG(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d7:function(a,b,c,d){var u,t
H.H(b)
H.kp(c)
H.H(d)
if(a==null)return!1
u=H.bH(a)
t=J.a_(a)
if(t[b]==null)return!1
return H.lo(H.c7(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.kp(c)
H.H(d)
if(a==null)return a
if(H.d7(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.kh(c,0,null),v.mangledGlobalNames)))},
lo:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
o0:function(a,b,c){return a.apply(b,H.c7(J.a_(b)["$a"+H.l(c)],H.bH(b)))},
lt:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="L"||a===-1||a===-2||H.lt(u)}return!1},
kj:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="L"||b===-1||b===-2||H.lt(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fe(a,b)}u=J.a_(a).constructor
t=H.bH(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kj(a,b))throw H.i(H.aJ(a,H.jQ(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.lh(a,b,c,d)
if('func' in a)return c.name==="bv"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aD("type" in a?a.type:null,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cn" in t.prototype))return!1
r=t.prototype["$a"+"cn"]
q=H.c7(r,u?a.slice(1):null)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lo(H.c7(m,u),b,p,d)},
lh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nd(h,b,g,d)},
nd:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aD(c[r],d,a[r],b))return!1}return!0},
o1:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nb:function(a){var u,t,s,r,q,p
u=H.H($.ls.$1(a))
t=$.jH[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jN[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.ln.$2(a,u))
if(u!=null){t=$.jH[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jN[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jP(s)
$.jH[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jN[u]=s
return s}if(q==="-"){p=H.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lv(a,s)
if(q==="*")throw H.i(P.l6(u))
if(v.leafTags[u]===true){p=H.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lv(a,s)},
lv:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kq(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jP:function(a){return J.kq(a,!1,null,!!a.$iF)},
nc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jP(u)
else return J.kq(u,c,null,null)},
n6:function(){if(!0===$.ko)return
$.ko=!0
H.n7()},
n7:function(){var u,t,s,r,q,p,o,n
$.jH=Object.create(null)
$.jN=Object.create(null)
H.n5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lx.$1(q)
if(p!=null){o=H.nc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n5:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.c2(C.P,H.c2(C.U,H.c2(C.A,H.c2(C.A,H.c2(C.T,H.c2(C.Q,H.c2(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.ls=new H.jK(q)
$.ln=new H.jL(p)
$.lx=new H.jM(o)},
c2:function(a,b){return a(b)||b},
ma:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fS("Illegal RegExp pattern ("+String(r)+")",a,null))},
nj:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kt:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hK:function hK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ir:function ir(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hz:function hz(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
jS:function jS(a){this.a=a},
eS:function eS(a){this.a=a
this.b=null},
cf:function cf(){},
ic:function ic(){},
i3:function i3(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a){this.a=a},
fp:function fp(a){this.a=a},
hR:function hR(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h6:function h6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b){this.a=a
this.$ti=b},
h7:function h7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d4:function(a){return a},
bF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.d8(b,a))},
mL:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.n_(a,b,c))
return b},
cw:function cw(){},
dL:function dL(){},
cv:function cv(){},
dM:function dM(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
dN:function dN(){},
hw:function hw(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
n0:function(a){return J.kJ(a?Object.keys(a):[],null)},
nf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jJ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ko==null){H.n6()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.l6("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ku()]
if(q!=null)return q
q=H.nb(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.ku(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
m9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aA(a,0,4294967295,"length",null))
return J.kJ(new Array(a),b)},
kJ:function(a,b){return J.h0(H.c(a,[b]))},
h0:function(a){H.kp(a)
a.fixed$length=Array
return a},
a_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dx.prototype
return J.dw.prototype}if(typeof a=="string")return J.bS.prototype
if(a==null)return J.dy.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jJ(a)},
km:function(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jJ(a)},
jI:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jJ(a)},
kn:function(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.cR.prototype
return a},
aq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jJ(a)},
a6:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).t(a,b)},
lQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.km(a).j(a,b)},
ff:function(a,b){return J.aq(a).hT(a,b)},
lR:function(a,b,c,d){return J.aq(a).iS(a,b,c,d)},
kx:function(a,b){return J.aq(a).B(a,b)},
jT:function(a,b){return J.jI(a).E(a,b)},
lS:function(a,b){return J.jI(a).P(a,b)},
lT:function(a){return J.aq(a).giZ(a)},
bI:function(a){return J.a_(a).gH(a)},
ca:function(a){return J.jI(a).gR(a)},
bJ:function(a){return J.km(a).gm(a)},
lU:function(a){return J.aq(a).gk0(a)},
jU:function(a,b){return J.aq(a).aW(a,b)},
ky:function(a){return J.jI(a).jU(a)},
lV:function(a,b,c){return J.kn(a).bg(a,b,c)},
lW:function(a){return J.kn(a).kb(a)},
ar:function(a){return J.a_(a).i(a)},
a:function a(){},
h1:function h1(){},
dy:function dy(){},
dA:function dA(){},
hD:function hD(){},
cR:function cR(){},
bA:function bA(){},
aR:function aR(a){this.$ti=a},
k3:function k3(a){this.$ti=a},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dz:function dz(){},
dx:function dx(){},
dw:function dw(){},
bS:function bS(){}},P={
mA:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mT()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c4(new P.iW(u),1)).observe(t,{childList:true})
return new P.iV(u,t,s)}else if(self.setImmediate!=null)return P.mU()
return P.mV()},
mB:function(a){self.scheduleImmediate(H.c4(new P.iX(H.n(a,{func:1,ret:-1})),0))},
mC:function(a){self.setImmediate(H.c4(new P.iY(H.n(a,{func:1,ret:-1})),0))},
mD:function(a){P.k9(C.q,H.n(a,{func:1,ret:-1}))},
k9:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a3(a.a,1000)
return P.mJ(u<0?0:u,b)},
l4:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b2]})
u=C.h.a3(a.a,1000)
return P.mK(u<0?0:u,b)},
mJ:function(a,b){var u=new P.eY(!0)
u.fe(a,b)
return u},
mK:function(a,b){var u=new P.eY(!1)
u.ff(a,b)
return u},
mE:function(a,b){var u,t,s
b.a=1
try{a.eu(new P.j6(b),new P.j7(b),null)}catch(s){u=H.ay(s)
t=H.c6(s)
P.nh(new P.j8(b,u,t))}},
lc:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaC")
if(u>=4){t=b.cd()
b.a=a.a
b.c=a.c
P.cV(b,t)}else{t=H.j(b.c,"$ib7")
b.a=2
b.c=a
a.dv(t)}},
cV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.j(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.jD(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cV(u.a,b)}t=u.a
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
if(k){H.j(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.jD(null,null,t,p,o)
return}j=$.Z
if(j!=l)$.Z=l
else j=null
t=b.c
if(t===8)new P.jc(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jb(s,b,m).$0()}else if((t&2)!==0)new P.ja(u,s,b).$0()
if(j!=null)$.Z=j
t=s.b
if(!!J.a_(t).$icn){if(t.a>=4){i=H.j(o.c,"$ib7")
o.c=null
b=o.bk(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lc(t,o)
return}}h=b.b
i=H.j(h.c,"$ib7")
h.c=null
b=h.bk(i)
t=s.a
p=s.b
if(!t){H.E(p,H.y(h,0))
h.a=4
h.c=p}else{H.j(p,"$iae")
h.a=8
h.c=p}u.a=h
t=h}},
mP:function(a,b){if(H.fe(a,{func:1,args:[P.R,P.ao]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ao]})
if(H.fe(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.i(P.jV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mO:function(){var u,t
for(;u=$.c1,u!=null;){$.d6=null
t=u.b
$.c1=t
if(t==null)$.d5=null
u.a.$0()}},
mS:function(){$.kf=!0
try{P.mO()}finally{$.d6=null
$.kf=!1
if($.c1!=null)$.kv().$1(P.lp())}},
lk:function(a){var u=new P.ek(H.n(a,{func:1,ret:-1}))
if($.c1==null){$.d5=u
$.c1=u
if(!$.kf)$.kv().$1(P.lp())}else{$.d5.b=u
$.d5=u}},
mR:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c1
if(u==null){P.lk(a)
$.d6=$.d5
return}t=new P.ek(a)
s=$.d6
if(s==null){t.b=u
$.d6=t
$.c1=t}else{t.b=s.b
s.b=t
$.d6=t
if(t.b==null)$.d5=t}},
nh:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.Z
if(C.l===t){P.jF(null,null,C.l,a)
return}t.toString
P.jF(null,null,t,H.n(t.cm(a),u))},
l3:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.k9(a,b)}return P.k9(a,H.n(t.cm(b),u))},
my:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b2]}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.l4(a,b)}s=t.dJ(b,P.b2)
$.Z.toString
return P.l4(a,H.n(s,u))},
jD:function(a,b,c,d,e){var u={}
u.a=d
P.mR(new P.jE(u,e))},
li:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
lj:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
mQ:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jF:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cm(d):c.j_(d,-1)
P.lk(d)},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null
this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b,c,d,e){var _=this
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
j5:function j5(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a
this.b=null},
i6:function i6(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
cE:function cE(){},
i7:function i7(){},
b2:function b2(){},
ae:function ae(a,b){this.a=a
this.b=b},
jA:function jA(){},
jE:function jE(a,b){this.a=a
this.b=b},
jj:function jj(){},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function(a,b){return new H.aS([a,b])},
mc:function(a){return H.n1(a,new H.aS([null,null]))},
dE:function(a,b,c,d){return new P.jh([d])},
kd:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mI:function(a,b,c){var u=new P.ez(a,b,[c])
u.c=a.e
return u},
m7:function(a,b,c){var u,t
if(P.kg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
t=$.dc()
C.a.h(t,a)
try{P.mN(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.l1(b,H.na(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
k1:function(a,b,c){var u,t,s
if(P.kg(a))return b+"..."+c
u=new P.bg(b)
t=$.dc()
C.a.h(t,a)
try{s=u
s.a=P.l1(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kg:function(a){var u,t
for(u=0;t=$.dc(),u<t.length;++u)if(a===t[u])return!0
return!1},
mN:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.l(u.gF(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.u();o=n,n=m){m=u.gF(u);++s
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
kL:function(a,b){var u,t,s
u=P.dE(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.E(a[s],b))
return u},
kM:function(a){var u,t
u={}
if(P.kg(a))return"{...}"
t=new P.bg("")
try{C.a.h($.dc(),a)
t.a+="{"
u.a=!0
J.lS(a,new P.hb(u,t))
t.a+="}"}finally{u=$.dc()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jh:function jh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c0:function c0(a){this.a=a
this.c=this.b=null},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h8:function h8(){},
v:function v(){},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
a9:function a9(){},
jo:function jo(){},
eA:function eA(){},
cg:function cg(){},
ch:function ch(){},
fH:function fH(){},
fY:function fY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fX:function fX(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(){},
jy:function jy(a){this.b=this.a=0
this.c=a},
m6:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.bW(a)+"'"},
md:function(a,b,c,d){var u,t
H.E(b,d)
u=J.m9(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
me:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gR(a);s.u();)C.a.h(t,H.E(s.gF(s),c))
if(b)return t
return H.m(J.h0(t),"$ib",u,"$ab")},
k8:function(a,b,c){var u,t
u=P.C
H.m(a,"$id",[u],"$ad")
if(a.constructor===Array){H.m(a,"$iaR",[u],"$aaR")
t=a.length
c=P.kX(b,c,t,null,null,null)
return H.kW(b>0||c<t?C.a.eR(a,b,c):a)}return P.mw(a,b,c)},
mw:function(a,b,c){var u,t,s
H.m(a,"$id",[P.C],"$ad")
u=J.ca(a)
for(t=0;t<b;++t)if(!u.u())throw H.i(P.aA(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gF(u))
return H.kW(s)},
mq:function(a,b,c){return new H.h2(a,H.ma(a,!1,!0,!1))},
l1:function(a,b,c){var u=J.ca(b)
if(!u.u())return a
if(c.length===0){do a+=H.l(u.gF(u))
while(u.u())}else{a+=H.l(u.gF(u))
for(;u.u();)a=a+c+H.l(u.gF(u))}return a},
lg:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.C],"$ab")
if(c===C.x){u=$.lP().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.j7(H.E(b,H.aj(c,"cg",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k6(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
m2:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dm:function(a){if(a>=10)return""+a
return"0"+a},
kF:function(a,b,c,d,e,f){return new P.bt(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m6(a)},
lX:function(a){return new P.aE(!1,null,null,a)},
jV:function(a,b,c){return new P.aE(!0,a,b,c)},
hI:function(a,b,c){return new P.bX(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
kX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.aA(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.aA(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.a8(e==null?J.bJ(b):e)
return new P.h_(b,u,!0,a,c,"Index out of range")},
aw:function(a){return new P.iE(a)},
l6:function(a){return new P.iC(a)},
l0:function(a){return new P.cD(a)},
br:function(a){return new P.fs(a)},
r:function(a){return new P.es(a)},
ks:function(a){H.nf(a)},
N:function N(){},
al:function al(a,b){this.a=a
this.b=b},
z:function z(){},
bt:function bt(a){this.a=a},
fD:function fD(){},
fE:function fE(){},
bu:function bu(){},
dP:function dP(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h_:function h_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iE:function iE(a){this.a=a},
iC:function iC(a){this.a=a},
cD:function cD(a){this.a=a},
fs:function fs(a){this.a=a},
hC:function hC(){},
e_:function e_(){},
fx:function fx(a){this.a=a},
es:function es(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(){},
C:function C(){},
d:function d(){},
aQ:function aQ(){},
b:function b(){},
P:function P(){},
L:function L(){},
a2:function a2(){},
R:function R(){},
ao:function ao(){},
f:function f(){},
bg:function bg(a){this.a=a},
mZ:function(a){var u,t
u=J.a_(a)
if(!!u.$ibw){t=u.gdR(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f2(a.data,a.height,a.width)},
mY:function(a){if(a instanceof P.f2)return{data:a.a,height:a.b,width:a.c}
return a},
bi:function(a){var u,t,s,r,q
if(a==null)return
u=P.kK(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.H(t[r])
u.Y(0,q,a[q])}return u},
mX:function(a,b){var u={}
a.P(0,new P.jG(u))
return u},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a){this.a=a},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(){},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ji:function ji(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
h5:function h5(){},
bd:function bd(){},
hA:function hA(){},
hH:function hH(){},
cA:function cA(){},
ia:function ia(){},
p:function p(){},
bh:function bh(){},
iq:function iq(){},
ex:function ex(){},
ey:function ey(){},
eI:function eI(){},
eJ:function eJ(){},
eU:function eU(){},
eV:function eV(){},
f0:function f0(){},
f1:function f1(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(a){this.a=a},
fm:function fm(){},
bK:function bK(){},
hB:function hB(){},
el:function el(){},
dg:function dg(){},
dt:function dt(){},
dS:function dS(){},
bY:function bY(){},
dV:function dV(){},
e2:function e2(){},
ea:function ea(){},
i2:function i2(){},
eQ:function eQ(){},
eR:function eR(){}},W={
kz:function(a){var u=document.createElement("a")
return u},
jX:function(a,b){var u=document.createElement("canvas")
return u},
m4:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).af(u,a,b,c)
t.toString
u=W.D
u=new H.cS(new W.ai(t),H.n(new W.fG(),{func:1,ret:P.N,args:[u]}),[u])
return H.j(u.gaJ(u),"$iT")},
m5:function(a){H.j(a,"$ie")
return"wheel"},
cl:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lU(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ay(s)}return u},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
le:function(a,b,c,d){var u,t
u=W.jf(W.jf(W.jf(W.jf(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.lm(new W.j4(c),W.o)
if(u!=null&&!0)J.lR(a,b,u,!1)
return new W.j3(a,b,u,!1,[e])},
ld:function(a){var u,t
u=W.kz(null)
t=window.location
u=new W.bE(new W.jn(u,t))
u.f3(a)
return u},
mF:function(a,b,c,d){H.j(a,"$iT")
H.H(b)
H.H(c)
H.j(d,"$ibE")
return!0},
mG:function(a,b,c,d){var u,t,s
H.j(a,"$iT")
H.H(b)
H.H(c)
u=H.j(d,"$ibE").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lf:function(){var u,t,s,r,q
u=P.f
t=P.kL(C.t,u)
s=H.y(C.t,0)
r=H.n(new W.jv(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.ju(t,P.dE(null,null,null,u),P.dE(null,null,null,u),P.dE(null,null,null,u),null)
t.fd(null,new H.he(C.t,r,[s,u]),q,null)
return t},
lm:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.l)return a
return u.dJ(a,b)},
w:function w(){},
fg:function fg(){},
dd:function dd(){},
fh:function fh(){},
cb:function cb(){},
df:function df(){},
bo:function bo(){},
bM:function bM(){},
bN:function bN(){},
bp:function bp(){},
ci:function ci(){},
ft:function ft(){},
S:function S(){},
cj:function cj(){},
fu:function fu(){},
aM:function aM(){},
aN:function aN(){},
fv:function fv(){},
fw:function fw(){},
fz:function fz(){},
az:function az(){},
ck:function ck(){},
fA:function fA(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
fB:function fB(){},
fC:function fC(){},
j_:function j_(a,b){this.a=a
this.b=b},
T:function T(){},
fG:function fG(){},
o:function o(){},
e:function e(){},
aO:function aO(){},
fM:function fM(){},
fN:function fN(){},
fR:function fR(){},
aP:function aP(){},
du:function du(){},
fW:function fW(){},
bR:function bR(){},
dv:function dv(){},
bw:function bw(){},
cp:function cp(){},
aT:function aT(){},
dF:function dF(){},
ct:function ct(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(a){this.a=a},
hn:function hn(){},
ho:function ho(a){this.a=a},
aW:function aW(){},
hp:function hp(){},
aa:function aa(){},
ai:function ai(a){this.a=a},
D:function D(){},
cx:function cx(){},
aY:function aY(){},
hF:function hF(){},
dT:function dT(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hS:function hS(){},
aZ:function aZ(){},
i0:function i0(){},
b_:function b_(){},
i1:function i1(){},
b0:function b0(){},
i4:function i4(){},
i5:function i5(a){this.a=a},
aG:function aG(){},
bZ:function bZ(){},
e0:function e0(){},
e1:function e1(){},
ib:function ib(){},
cG:function cG(){},
b1:function b1(){},
aH:function aH(){},
id:function id(){},
ie:function ie(){},
ij:function ij(){},
b3:function b3(){},
aI:function aI(){},
io:function io(){},
ip:function ip(){},
bD:function bD(){},
iF:function iF(){},
iS:function iS(){},
iT:function iT(){},
b6:function b6(){},
cT:function cT(){},
cU:function cU(){},
j0:function j0(){},
en:function en(){},
je:function je(){},
eF:function eF(){},
jr:function jr(){},
js:function js(){},
iZ:function iZ(){},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j3:function j3(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j4:function j4(a){this.a=a},
bE:function bE(a){this.a=a},
B:function B(){},
dO:function dO(a){this.a=a},
hy:function hy(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(){},
jp:function jp(){},
jq:function jq(){},
ju:function ju(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(){},
jt:function jt(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(){},
jn:function jn(a,b){this.a=a
this.b=b},
f3:function f3(a){this.a=a},
jz:function jz(a){this.a=a},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
d_:function d_(){},
d0:function d0(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
d1:function d1(){},
d2:function d2(){},
eZ:function eZ(){},
f_:function f_(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){}},O={
jY:function(a){var u=new O.a0([a])
u.bi(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
dI:function dI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(){},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hi:function hi(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hj:function hj(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dX:function dX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bC:function bC(){}},E={
kI:function(a,b,c,d,e,f){var u=new E.af()
u.a=d
u.b=!0
u.sf2(0,O.jY(E.af))
u.y.aY(u.gjE(),u.gjH())
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
u.sbP(0,e)
return u},
mr:function(a,b){var u=new E.hL(a,b)
u.eZ(a,b)
return u},
mx:function(a,b,c,d,e){var u,t,s,r
u=J.a_(a)
if(!!u.$ibM)return E.l2(a,!0,!0,!0,!1)
t=W.jX(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdN(a).h(0,t)
r=E.l2(t,!0,!0,!0,!1)
r.a=a
return r},
l2:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e6()
t=H.j(C.p.cT(a,"webgl2",P.mc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibY")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mr(t,a)
s=new T.ig(t)
s.b=H.a8((t&&C.b).cU(t,3379))
s.c=H.a8(C.b.cU(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ed(a)
r=new X.h4()
r.c=new X.at(!1,!1,!1)
r.shQ(P.dE(null,null,null,P.C))
s.b=r
r=new X.hq(s)
r.f=0
r.r=V.be()
r.x=V.be()
r.Q=1
r.ch=1
s.c=r
r=new X.h9(s)
r.r=0
r.x=V.be()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.im(s)
r.e=0
r.f=V.be()
r.r=V.be()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfB(H.c([],[[P.cE,P.R]]))
r=s.z
q=document
p=W.aa
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a7(q,"contextmenu",H.n(s.ghb(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a7(a,"focus",H.n(s.ghh(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a7(a,"blur",H.n(s.gh5(),m),!1,n))
r=s.z
l=W.aT
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a7(q,"keyup",H.n(s.ghl(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a7(q,"keydown",H.n(s.ghj(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousedown",H.n(s.ghp(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mouseup",H.n(s.ght(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousemove",H.n(s.ghr(),o),!1,p))
l=s.z
k=W.b6;(l&&C.a).h(l,W.a7(a,H.H(W.m5(a)),H.n(s.ghv(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a7(q,"mousemove",H.n(s.ghd(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a7(q,"mouseup",H.n(s.ghf(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a7(q,"pointerlockchange",H.n(s.ghx(),m),!1,n))
n=s.z
m=W.aI
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a7(a,"touchstart",H.n(s.ghN(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchend",H.n(s.ghJ(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchmove",H.n(s.ghL(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.al(Date.now(),!1)
u.cy=0
u.dz()
return u},
fn:function fn(){},
af:function af(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a}},Z={
kb:function(a,b,c){var u
H.m(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
C.b.as(a,b,u)
C.b.dL(a,b,new Int16Array(H.d4(c)),35044)
C.b.as(a,b,null)
return new Z.ei(b,u)},
aB:function(a){return new Z.b5(a)},
ei:function ei(a,b){this.a=a
this.b=b},
dh:function dh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ej:function ej(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a}},D={
K:function(){var u=new D.bP()
u.sad(null)
u.sb2(null)
u.c=null
u.d=0
return u},
fq:function fq(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
fK:function fK(a){this.a=a},
fL:function fL(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
by:function by(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bz:function bz(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
I:function I(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dC:function dC(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dR:function dR(){},
dZ:function dZ(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){}},X={di:function di(a,b){this.a=a
this.b=b},dB:function dB(a,b){this.a=a
this.b=b},h4:function h4(){var _=this
_.d=_.c=_.b=_.a=null},dG:function dG(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},h9:function h9(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bc:function bc(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hq:function hq(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cu:function cu(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hG:function hG(){},e8:function e8(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},im:function im(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ed:function ed(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k0:function(a,b,c,d,e,f,g){var u,t
u=new X.fT()
t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kZ
if(t==null){t=V.kY(0,0,1,1)
$.kZ=t}u.r=t
return u},
kR:function(a,b,c,d,e){var u,t,s
u=new X.dQ()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gp().h(0,u.gfg())
s=new D.I("mover",t,u.b,u,[U.ab])
s.b=!0
u.ao(s)}s=u.c
if(!(Math.abs(s-b)<$.O().a)){u.c=b
s=new D.I("fov",s,b,u,[P.z])
s.b=!0
u.ao(s)}s=u.d
if(!(Math.abs(s-d)<$.O().a)){u.d=d
s=new D.I("near",s,d,u,[P.z])
s.b=!0
u.ao(s)}s=u.e
if(!(Math.abs(s-a)<$.O().a)){u.e=a
s=new D.I("far",s,a,u,[P.z])
s.b=!0
u.ao(s)}return u},
bL:function bL(){},
fT:function fT(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){this.b=this.a=null},
dQ:function dQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){},
lu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.mt("Test 016",!0)
t=W.jX(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.f]
u.dF(H.c(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],s))
u.dF(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.eF(document,"testCanvas")
if(r==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.mx(r,!0,!0,!0,!1)
p=X.k0(!0,!0,!1,null,2000,null,0)
p.sdO(0,!1)
o=E.kI(null,!0,null,"",null,null)
n=F.k7()
F.d3(n,null,null,1,1,1,0,0,1)
F.d3(n,null,null,1,1,0,1,0,3)
F.d3(n,null,null,1,1,0,0,1,2)
F.d3(n,null,null,1,1,-1,0,0,0)
F.d3(n,null,null,1,1,0,-1,0,0)
F.d3(n,null,null,1,1,0,0,-1,3)
n.aA()
o.sbP(0,n)
m=q.f.jB("../resources/maskonaive",".jpg")
l=q.f.cI("../resources/diceColor")
k=new O.dI()
k.sfn(O.jY(V.am))
k.e.aY(k.gh1(),k.gh3())
s=new O.aU(k,"emission")
s.c=C.c
s.f=new V.a1(0,0,0)
k.f=s
s=new O.aU(k,"ambient")
s.c=C.c
s.f=new V.a1(0,0,0)
k.r=s
s=new O.aU(k,"diffuse")
s.c=C.c
s.f=new V.a1(0,0,0)
k.x=s
s=new O.aU(k,"invDiffuse")
s.c=C.c
s.f=new V.a1(0,0,0)
k.y=s
s=new O.hj(k,"specular")
s.c=C.c
s.f=new V.a1(0,0,0)
s.ch=100
k.z=s
s=new O.hg(k,"bump")
s.c=C.c
k.Q=s
k.ch=null
s=new O.aU(k,"reflect")
s.c=C.c
s.f=new V.a1(0,0,0)
k.cx=s
s=new O.hi(k,"refract")
s.c=C.c
s.f=new V.a1(0,0,0)
s.ch=1
k.cy=s
s=new O.hf(k,"alpha")
s.c=C.c
s.f=1
k.db=s
s=new D.dC()
s.bi(D.a3)
s.sfz(H.c([],[D.bs]))
s.shP(H.c([],[D.dR]))
s.sib(H.c([],[D.dZ]))
s.sir(H.c([],[D.e3]))
s.sis(H.c([],[D.e4]))
s.sit(H.c([],[D.e5]))
s.Q=null
s.ch=null
s.cW(s.gh_(),s.ghz(),s.ghD())
k.dx=s
j=s.Q
if(j==null){j=D.K()
s.Q=j
s=j}else s=j
s.h(0,k.ghX())
s=k.dx
j=s.ch
if(j==null){j=D.K()
s.ch=j
s=j}else s=j
j=k.gaP()
s.h(0,j)
k.dy=null
s=k.dx
i=V.lb()
h=U.kE(V.kN(V.kU(),i,new V.Q(1,-1,-3)))
g=new V.a1(1,1,1)
f=new D.bs()
f.c=new V.a1(1,1,1)
f.a=V.mz()
e=f.b
f.b=h
h.gp().h(0,f.gf5())
h=new D.I("mover",e,f.b,f,[U.ab])
h.b=!0
f.av(h)
if(!f.c.t(0,g)){e=f.c
f.c=g
h=new D.I("color",e,g,f,[V.a1])
h.b=!0
f.av(h)}s.h(0,f)
s=k.r
s.sak(0,new V.a1(0.2,0.2,0.2))
s=k.x
s.sak(0,new V.a1(0.7,0.7,0.7))
s=k.z
s.sak(0,new V.a1(0.7,0.7,0.7))
k.r.saU(l)
k.x.saU(l)
k.z.saU(q.f.cI("../resources/diceSpecular"))
s=k.z
if(s.c===C.c){s.c=C.f
s.bS()
s.ce(100)
h=s.a
h.a=null
h.T(null)}s.ce(10)
k.Q.saU(q.f.cI("../resources/diceBumpMap"))
s=k.ch
if(s!==m){if(s!=null)s.gp().U(0,j)
e=k.ch
k.ch=m
m.gp().h(0,j)
s=new D.I("environment",e,k.ch,k,[T.c_])
s.b=!0
k.T(s)}s=k.cx
s.sak(0,new V.a1(0.3,0.3,0.3))
d=new U.co()
d.bi(U.ab)
d.aY(d.gfY(),d.ghB())
d.e=null
d.f=V.bU()
d.r=0
s=q.r
j=new U.ef()
h=U.jZ()
h.scS(0,!0)
h.scJ(6.283185307179586)
h.scL(0)
h.sa9(0,0)
h.scK(100)
h.sV(0)
h.scs(0.5)
j.b=h
f=j.gaL()
h.gp().h(0,f)
h=U.jZ()
h.scS(0,!0)
h.scJ(6.283185307179586)
h.scL(0)
h.sa9(0,0)
h.scK(100)
h.sV(0)
h.scs(0.5)
j.c=h
h.gp().h(0,f)
j.d=null
j.e=!1
j.f=!1
j.r=!1
j.x=2.5
j.y=2.5
j.z=2
j.Q=4
j.cx=!1
j.ch=!1
j.cy=0
j.db=0
j.dx=null
j.dy=0
j.fr=null
j.fx=null
c=new X.at(!1,!1,!1)
e=j.d
j.d=c
h=[X.at]
f=new D.I("modifiers",e,c,j,h)
f.b=!0
j.N(f)
f=j.f
if(f!==!1){j.f=!1
f=new D.I("invertX",f,!1,j,[P.N])
f.b=!0
j.N(f)}f=j.r
if(f!==!1){j.r=!1
f=new D.I("invertY",f,!1,j,[P.N])
f.b=!0
j.N(f)}j.b5(s)
d.h(0,j)
s=q.r
j=new U.ee()
f=U.jZ()
f.scS(0,!0)
f.scJ(6.283185307179586)
f.scL(0)
f.sa9(0,0)
f.scK(100)
f.sV(0)
f.scs(0.2)
j.b=f
f.gp().h(0,j.gaL())
j.c=null
j.d=!1
j.e=2.5
j.f=2
j.r=4
j.y=!1
j.x=!1
j.z=0
j.Q=null
j.ch=0
j.cx=null
j.cy=null
c=new X.at(!0,!1,!1)
e=j.c
j.c=c
f=new D.I("modifiers",e,c,j,h)
f.b=!0
j.N(f)
j.b5(s)
d.h(0,j)
s=q.r
j=new U.eg()
j.c=0.01
j.d=0
j.e=0
c=new X.at(!1,!1,!1)
j.b=c
h=new D.I("modifiers",null,c,j,h)
h.b=!0
j.N(h)
j.b5(s)
d.h(0,j)
d.h(0,U.kE(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
b=X.kR(2000,1.0471975511965976,d,0.1,null)
a=new M.dl()
a.sb6(null)
a.sbb(0,null)
a.sbc(null)
s=E.kI(null,!0,null,"",null,null)
n=F.k7()
j=n.a
h=new V.Q(-1,-1,1)
h=h.v(0,Math.sqrt(h.D(h)))
a0=j.bn(new V.bf(1,2,4,6),new V.aF(1,0,0,1),new V.ag(-1,-1,0),new V.a5(0,1),h,null)
j=n.a
h=new V.Q(1,-1,1)
h=h.v(0,Math.sqrt(h.D(h)))
a1=j.bn(new V.bf(0,3,4,6),new V.aF(0,0,1,1),new V.ag(1,-1,0),new V.a5(1,1),h,null)
j=n.a
h=new V.Q(1,1,1)
h=h.v(0,Math.sqrt(h.D(h)))
a2=j.bn(new V.bf(0,2,5,6),new V.aF(0,1,0,1),new V.ag(1,1,0),new V.a5(1,0),h,null)
j=n.a
h=V.be()
f=new V.Q(-1,1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a3=j.bn(new V.bf(0,2,4,7),new V.aF(1,1,0,1),new V.ag(-1,1,0),h,f,null)
n.d.iT(H.c([a0,a1,a2,a3],[F.ax]))
n.aA()
s.sbP(0,n)
a.d=s
a.e=null
s=new O.dX()
s.b=1.0471975511965976
s.d=new V.a1(1,1,1)
e=s.c
s.c=m
m.gp().h(0,s.gaP())
j=new D.I("boxTexture",e,s.c,s,[T.c_])
j.b=!0
s.T(j)
a.sbc(s)
a.sbb(0,p)
a.sb6(b)
a4=new M.dr()
a4.sfq(0,O.jY(E.af))
a4.d.aY(a4.gh7(),a4.gh9())
a4.e=null
a4.f=null
a4.r=null
a4.x=null
a5=X.k0(!0,!0,!1,null,2000,null,0)
a4.sb6(null)
a4.sbb(0,a5)
a4.sbc(null)
a4.sb6(b)
a4.sbc(k)
a4.sbb(0,p)
a4.d.h(0,o)
a4.b.sdO(0,!1)
s=M.av
j=H.c([a,a4],[s])
h=new M.dj()
h.bi(s)
h.e=!1
h.f=null
h.aY(h.ghF(),h.ghH())
h.a7(0,j)
s=q.d
if(s!==h){if(s!=null)s.gp().U(0,q.gd2())
q.d=h
h.gp().h(0,q.gd2())
q.d3()}s=q.z
if(s==null){s=D.K()
q.z=s}j={func:1,ret:-1,args:[D.x]}
h=H.n(new X.jO(u,k),j)
if(s.b==null)s.sb2(H.c([],[j]))
s=s.b;(s&&C.a).h(s,h)
V.ni(q)},
jO:function jO(a,b){this.a=a
this.b=b}},V={
nm:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.eK(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.i.ah("null",c)
return C.i.ah(C.j.ev(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.Y(u,p,C.i.ah(u[p],s))}return u},
kr:function(a,b){return C.j.k8(Math.pow(b,C.O.cD(Math.log(H.mW(a))/Math.log(b))))},
bU:function(){var u=$.kO
if(u==null){u=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kO=u}return u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kN:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.v(0,Math.sqrt(c.D(c)))
t=b.b7(u)
s=t.v(0,Math.sqrt(t.D(t)))
r=u.b7(s)
q=new V.Q(a.a,a.b,a.c)
p=s.S(0).D(q)
o=r.S(0).D(q)
n=u.S(0).D(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
be:function(){var u=$.kT
if(u==null){u=new V.a5(0,0)
$.kT=u}return u},
kU:function(){var u=$.cy
if(u==null){u=new V.ag(0,0,0)
$.cy=u}return u},
kY:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)},
eh:function(){var u=$.la
if(u==null){u=new V.Q(0,0,0)
$.la=u}return u},
lb:function(){var u=$.l9
if(u==null){u=new V.Q(0,1,0)
$.l9=u}return u},
mz:function(){var u=$.iI
if(u==null){u=new V.Q(0,0,1)
$.iI=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a){this.a=a},
dK:function dK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aM(a,0)
t=C.i.aM(b,0)
s=new V.hJ()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hT()
u.f_(a)
return u},
il:function(){var u,t
u=new V.ik()
t=P.f
u.sic(new H.aS([t,V.cC]))
u.sii(new H.aS([t,V.cI]))
u.c=null
return u},
b8:function b8(){},
as:function as(){},
dH:function dH(){},
an:function an(){this.a=null},
hJ:function hJ(){this.b=this.a=null},
hT:function hT(){this.a=null},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b){this.a=a
this.b=b
this.c=null},
ik:function ik(){this.c=this.b=this.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null},
ni:function(a){P.my(C.K,new V.jR(a))},
mt:function(a,b){var u=new V.hX()
u.f0(a,!0)
return u},
bq:function bq(){},
jR:function jR(a){this.a=a},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fU:function fU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fV:function fV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hE:function hE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hX:function hX(){this.b=this.a=null},
hZ:function hZ(a){this.a=a},
hY:function hY(a){this.a=a},
i_:function i_(a){this.a=a}},U={
jZ:function(){var u=new U.fr()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kE:function(a){var u=new U.dk()
u.a=a
return u},
fr:function fr(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){this.b=this.a=null},
co:function co(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
ee:function ee(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ef:function ef(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dj:function dj(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dl:function dl(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dr:function dr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},av:function av(){}},A={
mf:function(a,b){var u,t
u=a.al
t=new A.dJ(b,u)
t.d0(b,u)
t.eY(a,b)
return t},
ka:function(a,b,c,d,e){var u=new A.iu(a,b,c,e)
u.f=d
u.siu(P.md(d,0,!1,P.C))
return u},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a){this.a=a},
dJ:function dJ(a,b){var _=this
_.bq=_.dW=_.bp=_.al=_.at=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eb=_.cv=_.ea=_.bD=_.e9=_.e8=_.bC=_.bB=_.e7=_.e6=_.bA=_.bz=_.by=_.e5=_.e4=_.bx=_.e3=_.e2=_.bw=_.e1=_.e0=_.bv=_.bu=_.e_=_.dZ=_.bt=_.bs=_.dY=_.dX=_.br=null
_.cC=_.ef=_.cB=_.ee=_.cA=_.ed=_.cz=_.ec=_.cw=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hh:function hh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.at=b3
_.al=b4
_.bp=b5},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cM:function cM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cP:function cP(a,b,c,d,e,f,g,h,i,j){var _=this
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
cN:function cN(a,b,c,d,e,f,g,h,i,j){var _=this
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
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cB:function cB(){},
bO:function bO(a,b){this.a=a
this.b=b},
dY:function dY(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e9:function e9(){},
iA:function iA(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jC:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d3:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.Q(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.Q(o+a3,n+a1,m+a2)
u.b=l
k=new V.Q(o-a3,n-a1,m-a2)
u.c=k
j=new V.Q(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jC(t)
f=F.jC(u.b)
e=F.nk(d,a0,new F.jB(u,F.jC(u.c),F.jC(u.d),f,g,c),b)
if(e!=null)a.jD(e)},
nk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ax,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.k7()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iJ(null,null,new V.aF(p,0,0,1),null,null,new V.a5(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cr(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iJ(null,null,new V.aF(j,i,h,1),null,null,new V.a5(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.iU(a+1,b+1,t)
return u},
cm:function(a,b,c){var u,t
u=new F.a4()
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
mb:function(a,b){var u,t
u=new F.bb()
t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
k7:function(){var u,t
u=new F.dW()
t=new F.iK(u)
t.b=!1
t.siv(H.c([],[F.ax]))
u.a=t
t=new F.hW(u)
t.scb(H.c([],[F.bB]))
u.b=t
t=new F.hV(u)
t.sfN(H.c([],[F.bb]))
u.c=t
t=new F.hU(u)
t.sfC(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
iJ:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ax()
t=new F.iP(u)
t.scb(H.c([],[F.bB]))
u.b=t
t=new F.iO(u)
s=[F.bb]
t.sfO(H.c([],s))
t.sfP(H.c([],s))
u.c=t
t=new F.iL(u)
s=[F.a4]
t.sfD(H.c([],s))
t.sfE(H.c([],s))
t.sfF(H.c([],s))
u.d=t
h=$.lL()
u.e=0
t=$.aK()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bl().a)!==0?e:null
u.x=(s&$.bk().a)!==0?b:null
u.y=(s&$.bm().a)!==0?f:null
u.z=(s&$.bn().a)!==0?g:null
u.Q=(s&$.lM().a)!==0?c:null
u.ch=(s&$.c9().a)!==0?i:0
u.cx=(s&$.bj().a)!==0?a:null
return u},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bb:function bb(){this.b=this.a=null},
bB:function bB(){this.a=null},
dW:function dW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iR:function iR(a){this.a=a},
iQ:function iQ(a){this.a=a},
iK:function iK(a){this.a=a
this.c=this.b=null},
iL:function iL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a
this.c=this.b=null},
iP:function iP(a){this.a=a
this.b=null}},T={cH:function cH(){},c_:function c_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ig:function ig(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ih:function ih(a,b,c,d,e,f,g){var _=this
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
H.k4.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.cz(a)},
i:function(a){return"Instance of '"+H.bW(a)+"'"}}
J.h1.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iN:1}
J.dy.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iL:1}
J.dA.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hD.prototype={}
J.cR.prototype={}
J.bA.prototype={
i:function(a){var u=a[$.lA()]
if(u==null)return this.eU(a)
return"JavaScript function for "+H.l(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibv:1}
J.aR.prototype={
h:function(a,b){H.E(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.aw("add"))
a.push(b)},
U:function(a,b){var u
if(!!a.fixed$length)H.t(P.aw("remove"))
for(u=0;u<a.length;++u)if(J.a6(a[u],b)){a.splice(u,1)
return!0}return!1},
a7:function(a,b){var u,t
H.m(b,"$id",[H.y(a,0)],"$ad")
if(!!a.fixed$length)H.t(P.aw("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.br(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.l(a[t]))
return u.join(b)},
jy:function(a){return this.l(a,"")},
jr:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.N,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.i(P.br(a))}throw H.i(H.k2())},
jq:function(a,b){return this.jr(a,b,null)},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eR:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aA(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aA(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.k2())},
dH:function(a,b){var u,t
H.n(b,{func:1,ret:P.N,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.i(P.br(a))}return!1},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a6(a[u],b))return!0
return!1},
i:function(a){return P.k1(a,"[","]")},
gR:function(a){return new J.ak(a,a.length,0,[H.y(a,0)])},
gH:function(a){return H.cz(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.aw("set length"))
if(b<0)throw H.i(P.aA(b,0,null,"newLength",null))
a.length=b},
Y:function(a,b,c){H.E(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.aw("indexed set"))
if(b>=a.length||b<0)throw H.i(H.d8(a,b))
a[b]=c},
$id:1,
$ib:1}
J.k3.prototype={}
J.ak.prototype={
gF:function(a){return this.d},
u:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.A(u))
s=this.c
if(s>=t){this.sdj(null)
return!1}this.sdj(u[s]);++this.c
return!0},
sdj:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
J.dz.prototype={
k8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.aw(""+a+".toInt()"))},
cD:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aw(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aw(""+a+".round()"))},
ev:function(a,b){var u,t
if(b>20)throw H.i(P.aA(b,0,20,"fractionDigits",null))
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
eK:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aw("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bl:function(a,b){var u
if(a>0)u=this.ia(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ia:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia2:1}
J.dx.prototype={$iC:1}
J.dw.prototype={}
J.bS.prototype={
cq:function(a,b){if(b<0)throw H.i(H.d8(a,b))
if(b>=a.length)H.t(H.d8(a,b))
return a.charCodeAt(b)},
aM:function(a,b){if(b>=a.length)throw H.i(H.d8(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.i(P.jV(b,null,null))
return a+b},
eQ:function(a,b,c){var u
if(c>a.length)throw H.i(P.aA(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bQ:function(a,b){return this.eQ(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hI(b,null,null))
if(b>c)throw H.i(P.hI(b,null,null))
if(c>a.length)throw H.i(P.hI(c,null,null))
return a.substring(b,c)},
bf:function(a,b){return this.bg(a,b,null)},
kb:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jK:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
ah:function(a,b){return this.jK(a,b," ")},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikQ:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.cq(this.a,b)},
$aec:function(){return[P.C]},
$av:function(){return[P.C]},
$ad:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.fF.prototype={}
H.bT.prototype={
gR:function(a){return new H.cq(this,this.gm(this),0,[H.aj(this,"bT",0)])},
bN:function(a,b){return this.eT(0,H.n(b,{func:1,ret:P.N,args:[H.aj(this,"bT",0)]}))}}
H.cq.prototype={
gF:function(a){return this.d},
u:function(){var u,t,s,r
u=this.a
t=J.km(u)
s=t.gm(u)
if(this.b!==s)throw H.i(P.br(u))
r=this.c
if(r>=s){this.sb_(null)
return!1}this.sb_(t.E(u,r));++this.c
return!0},
sb_:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
H.hc.prototype={
gR:function(a){return new H.hd(J.ca(this.a),this.b,this.$ti)},
gm:function(a){return J.bJ(this.a)},
E:function(a,b){return this.b.$1(J.jT(this.a,b))},
$ad:function(a,b){return[b]}}
H.hd.prototype={
u:function(){var u=this.b
if(u.u()){this.sb_(this.c.$1(u.gF(u)))
return!0}this.sb_(null)
return!1},
gF:function(a){return this.a},
sb_:function(a){this.a=H.E(a,H.y(this,1))},
$aaQ:function(a,b){return[b]}}
H.he.prototype={
gm:function(a){return J.bJ(this.a)},
E:function(a,b){return this.b.$1(J.jT(this.a,b))},
$abT:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cS.prototype={
gR:function(a){return new H.iU(J.ca(this.a),this.b,this.$ti)}}
H.iU.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bQ.prototype={}
H.ec.prototype={}
H.eb.prototype={}
H.hK.prototype={}
H.ir.prototype={
ag:function(a){var u,t,s
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
H.hz.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h3.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iD.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jS.prototype={
$1:function(a){if(!!J.a_(a).$ibu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eS.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iao:1}
H.cf.prototype={
i:function(a){return"Closure '"+H.bW(this).trim()+"'"},
$ibv:1,
gke:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ic.prototype={}
H.i3.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.cc.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var u,t
u=this.c
if(u==null)t=H.cz(this.a)
else t=typeof u!=="object"?J.bI(u):H.cz(u)
return(t^H.cz(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bW(u)+"'")}}
H.it.prototype={
i:function(a){return this.a}}
H.fp.prototype={
i:function(a){return this.a}}
H.hR.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aS.prototype={
gm:function(a){return this.a},
ga8:function(a){return new H.dD(this,[H.y(this,0)])},
dQ:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dg(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dg(t,b)}else return this.jw(b)},
jw:function(a){var u=this.d
if(u==null)return!1
return this.cE(this.bZ(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bj(r,b)
s=t==null?null:t.b
return s}else return this.jx(b)},
jx:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bZ(u,J.bI(a)&0x3ffffff)
s=this.cE(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c9()
this.b=u}this.d6(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c9()
this.c=t}this.d6(t,b,c)}else{s=this.d
if(s==null){s=this.c9()
this.d=s}r=J.bI(b)&0x3ffffff
q=this.bZ(s,r)
if(q==null)this.cf(s,r,[this.ca(b,c)])
else{p=this.cE(q,b)
if(p>=0)q[p].b=c
else q.push(this.ca(b,c))}}},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.br(this))
u=u.c}},
d6:function(a,b,c){var u
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
u=this.bj(a,b)
if(u==null)this.cf(a,b,this.ca(b,c))
else u.b=c},
fV:function(){this.r=this.r+1&67108863},
ca:function(a,b){var u,t
u=new H.h6(H.E(a,H.y(this,0)),H.E(b,H.y(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fV()
return u},
cE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a6(a[t].a,b))return t
return-1},
i:function(a){return P.kM(this)},
bj:function(a,b){return a[b]},
bZ:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
fw:function(a,b){delete a[b]},
dg:function(a,b){return this.bj(a,b)!=null},
c9:function(){var u=Object.create(null)
this.cf(u,"<non-identifier-key>",u)
this.fw(u,"<non-identifier-key>")
return u}}
H.h6.prototype={}
H.dD.prototype={
gm:function(a){return this.a.a},
gR:function(a){var u,t
u=this.a
t=new H.h7(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h7.prototype={
gF:function(a){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.br(u))
else{u=this.c
if(u==null){this.sd5(null)
return!1}else{this.sd5(u.a)
this.c=this.c.c
return!0}}},
sd5:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
H.jK.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jL.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jM.prototype={
$1:function(a){return this.a(H.H(a))},
$S:35}
H.h2.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikQ:1}
H.cw.prototype={$inG:1}
H.dL.prototype={
gm:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cv.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$abQ:function(){return[P.z]},
$av:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dM.prototype={
$abQ:function(){return[P.C]},
$av:function(){return[P.C]},
$id:1,
$ad:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.hr.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hs.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.ht.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hu.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hv.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.dN.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$inH:1}
H.hw.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
P.iW.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.iV.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iX.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iY.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eY.prototype={
fe:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c4(new P.jx(this,b),0),a)
else throw H.i(P.aw("`setTimeout()` not found."))},
ff:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c4(new P.jw(this,a,Date.now(),b),0),a)
else throw H.i(P.aw("Periodic timer."))},
$ib2:1}
P.jx.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jw.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eX(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b7.prototype={
jC:function(a){if(this.c!==6)return!0
return this.b.b.cP(H.n(this.d,{func:1,ret:P.N,args:[P.R]}),a.a,P.N,P.R)},
ju:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.y(this,1)}
r=this.b.b
if(H.fe(u,{func:1,args:[P.R,P.ao]}))return H.kl(r.jY(u,a.a,a.b,null,t,P.ao),s)
else return H.kl(r.cP(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aC.prototype={
eu:function(a,b,c){var u,t,s,r
u=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Z
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mP(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aC(0,$.Z,[c])
r=b==null?1:3
this.d7(new P.b7(s,r,a,b,[u,c]))
return s},
k7:function(a,b){return this.eu(a,null,b)},
d7:function(a){var u,t
u=this.a
if(u<=1){a.a=H.j(this.c,"$ib7")
this.c=a}else{if(u===2){t=H.j(this.c,"$iaC")
u=t.a
if(u<4){t.d7(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jF(null,null,u,H.n(new P.j5(this,a),{func:1,ret:-1}))}},
dv:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.j(this.c,"$ib7")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.j(this.c,"$iaC")
t=p.a
if(t<4){p.dv(a)
return}this.a=t
this.c=p.c}u.a=this.bk(a)
t=this.b
t.toString
P.jF(null,null,t,H.n(new P.j9(u,this),{func:1,ret:-1}))}},
cd:function(){var u=H.j(this.c,"$ib7")
this.c=null
return this.bk(u)},
bk:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dc:function(a){var u,t,s
u=H.y(this,0)
H.kl(a,{futureOr:1,type:u})
t=this.$ti
if(H.d7(a,"$icn",t,"$acn"))if(H.d7(a,"$iaC",t,null))P.lc(a,this)
else P.mE(a,this)
else{s=this.cd()
H.E(a,u)
this.a=4
this.c=a
P.cV(this,s)}},
dd:function(a,b){var u
H.j(b,"$iao")
u=this.cd()
this.a=8
this.c=new P.ae(a,b)
P.cV(this,u)},
$icn:1}
P.j5.prototype={
$0:function(){P.cV(this.a,this.b)},
$S:2}
P.j9.prototype={
$0:function(){P.cV(this.b,this.a.a)},
$S:2}
P.j6.prototype={
$1:function(a){var u=this.a
u.a=0
u.dc(a)},
$S:12}
P.j7.prototype={
$2:function(a,b){H.j(b,"$iao")
this.a.dd(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.j8.prototype={
$0:function(){this.a.dd(this.b,this.c)},
$S:2}
P.jc.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.es(H.n(r.d,{func:1}),null)}catch(q){t=H.ay(q)
s=H.c6(q)
if(this.d){r=H.j(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.j(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.a_(u).$icn){if(u instanceof P.aC&&u.a>=4){if(u.a===8){r=this.b
r.b=H.j(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k7(new P.jd(o),null)
r.a=!1}},
$S:3}
P.jd.prototype={
$1:function(a){return this.a},
$S:31}
P.jb.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.y(s,0)
q=H.E(this.c,r)
p=H.y(s,1)
this.a.b=s.b.b.cP(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.c6(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.ja.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.j(this.a.a.c,"$iae")
r=this.c
if(r.jC(u)&&r.e!=null){q=this.b
q.b=r.ju(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.c6(p)
r=H.j(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.ek.prototype={}
P.i6.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aC(0,$.Z,[P.C])
u.a=0
s=H.y(this,0)
r=H.n(new P.i8(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.i9(u,t),{func:1,ret:-1})
W.a7(this.a,this.b,r,!1,s)
return t}}
P.i8.prototype={
$1:function(a){H.E(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.y(this.b,0)]}}}
P.i9.prototype={
$0:function(){this.b.dc(this.a.a)},
$S:2}
P.cE.prototype={}
P.i7.prototype={}
P.b2.prototype={}
P.ae.prototype={
i:function(a){return H.l(this.a)},
$ibu:1}
P.jA.prototype={$inV:1}
P.jE.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dP()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jj.prototype={
jZ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.Z){a.$0()
return}P.li(null,null,this,a,-1)}catch(s){u=H.ay(s)
t=H.c6(s)
P.jD(null,null,this,u,H.j(t,"$iao"))}},
k_:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.l===$.Z){a.$1(b)
return}P.lj(null,null,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.c6(s)
P.jD(null,null,this,u,H.j(t,"$iao"))}},
j_:function(a,b){return new P.jl(this,H.n(a,{func:1,ret:b}),b)},
cm:function(a){return new P.jk(this,H.n(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.jm(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
es:function(a,b){H.n(a,{func:1,ret:b})
if($.Z===C.l)return a.$0()
return P.li(null,null,this,a,b)},
cP:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.Z===C.l)return a.$1(b)
return P.lj(null,null,this,a,b,c,d)},
jY:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.Z===C.l)return a.$2(b,c)
return P.mQ(null,null,this,a,b,c,d,e,f)}}
P.jl.prototype={
$0:function(){return this.a.es(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jk.prototype={
$0:function(){return this.a.jZ(this.b)},
$S:3}
P.jm.prototype={
$1:function(a){var u=this.c
return this.a.k_(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jh.prototype={
gR:function(a){var u=new P.ez(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$ic0")!=null}else{t=this.fs(b)
return t}},
fs:function(a){var u=this.d
if(u==null)return!1
return this.bX(this.dk(u,a),a)>=0},
h:function(a,b){var u,t
H.E(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kd()
this.b=u}return this.d8(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kd()
this.c=t}return this.d8(t,b)}else return this.fi(0,b)},
fi:function(a,b){var u,t,s
H.E(b,H.y(this,0))
u=this.d
if(u==null){u=P.kd()
this.d=u}t=this.de(b)
s=u[t]
if(s==null)u[t]=[this.bU(b)]
else{if(this.bX(s,b)>=0)return!1
s.push(this.bU(b))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hU(this.c,b)
else return this.hR(0,b)},
hR:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dk(u,b)
s=this.bX(t,b)
if(s<0)return!1
this.dC(t.splice(s,1)[0])
return!0},
d8:function(a,b){H.E(b,H.y(this,0))
if(H.j(a[b],"$ic0")!=null)return!1
a[b]=this.bU(b)
return!0},
hU:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$ic0")
if(u==null)return!1
this.dC(u)
delete a[b]
return!0},
da:function(){this.r=1073741823&this.r+1},
bU:function(a){var u,t
u=new P.c0(H.E(a,H.y(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.da()
return u},
dC:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.da()},
de:function(a){return J.bI(a)&1073741823},
dk:function(a,b){return a[this.de(b)]},
bX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a6(a[t].a,b))return t
return-1}}
P.c0.prototype={}
P.ez.prototype={
gF:function(a){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.br(u))
else{u=this.c
if(u==null){this.sd9(null)
return!1}else{this.sd9(H.E(u.a,H.y(this,0)))
this.c=this.c.b
return!0}}},
sd9:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
P.h8.prototype={$id:1,$ib:1}
P.v.prototype={
gR:function(a){return new H.cq(a,this.gm(a),0,[H.d9(this,a,"v",0)])},
E:function(a,b){return this.j(a,b)},
ka:function(a,b){var u,t
u=H.c([],[H.d9(this,a,"v",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.Y(u,t,this.j(a,t))
return u},
k9:function(a){return this.ka(a,!0)},
i:function(a){return P.k1(a,"[","]")}}
P.ha.prototype={}
P.hb.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:13}
P.a9.prototype={
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.d9(this,a,"a9",0),H.d9(this,a,"a9",1)]})
for(u=J.ca(this.ga8(a));u.u();){t=u.gF(u)
b.$2(t,this.j(a,t))}},
gm:function(a){return J.bJ(this.ga8(a))},
i:function(a){return P.kM(a)},
$iP:1}
P.jo.prototype={
a7:function(a,b){var u
for(u=J.ca(H.m(b,"$id",this.$ti,"$ad"));u.u();)this.h(0,u.gF(u))},
i:function(a){return P.k1(this,"{","}")},
E:function(a,b){var u,t,s
if(b<0)H.t(P.aA(b,0,null,"index",null))
for(u=P.mI(this,this.r,H.y(this,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.W(b,this,"index",null,t))},
$id:1,
$il_:1}
P.eA.prototype={}
P.cg.prototype={}
P.ch.prototype={}
P.fH.prototype={
$acg:function(){return[P.f,[P.b,P.C]]}}
P.fY.prototype={
i:function(a){return this.a}}
P.fX.prototype={
ft:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bg("")
if(r>b)q.a+=C.i.bg(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lV(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ach:function(){return[P.f,P.f]}}
P.iG.prototype={}
P.iH.prototype={
j8:function(a,b,c){var u,t,s
c=P.kX(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jy(t)
if(s.fG(a,b,c)!==c)s.dD(C.i.cq(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mL(0,s.b,t.length)))},
j7:function(a){return this.j8(a,0,null)},
$ach:function(){return[P.f,[P.b,P.C]]}}
P.jy.prototype={
dD:function(a,b){var u,t,s,r,q
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
fG:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.cq(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.aM(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dD(r,C.i.aM(a,p)))s=p}else if(r<=2047){q=this.b
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
P.N.prototype={}
P.al.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.al&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.h.bl(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.m2(H.mn(this))
t=P.dm(H.ml(this))
s=P.dm(H.mh(this))
r=P.dm(H.mi(this))
q=P.dm(H.mk(this))
p=P.dm(H.mm(this))
o=P.m3(H.mj(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.bt.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a},
gH:function(a){return C.h.gH(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fE()
t=this.a
if(t<0)return"-"+new P.bt(0-t).i(0)
s=u.$1(C.h.a3(t,6e7)%60)
r=u.$1(C.h.a3(t,1e6)%60)
q=new P.fD().$1(t%1e6)
return""+C.h.a3(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bu.prototype={}
P.dP.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbV:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbW()+t+s
if(!this.a)return r
q=this.gbV()
p=P.fJ(this.b)
return r+q+": "+p}}
P.bX.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.h_.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t
u=H.a8(this.b)
if(typeof u!=="number")return u.aX()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gm:function(a){return this.f}}
P.iE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iC.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cD.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fs.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fJ(u)+"."}}
P.hC.prototype={
i:function(a){return"Out of Memory"},
$ibu:1}
P.e_.prototype={
i:function(a){return"Stack Overflow"},
$ibu:1}
P.fx.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.es.prototype={
i:function(a){return"Exception: "+this.a}}
P.fS.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.bg(s,0,75)+"...":s
return t+"\n"+r}}
P.bv.prototype={}
P.C.prototype={}
P.d.prototype={
bN:function(a,b){var u=H.aj(this,"d",0)
return new H.cS(this,H.n(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gR(this)
for(t=0;u.u();)++t
return t},
gaJ:function(a){var u,t
u=this.gR(this)
if(!u.u())throw H.i(H.k2())
t=u.gF(u)
if(u.u())throw H.i(H.m8())
return t},
E:function(a,b){var u,t,s
if(b<0)H.t(P.aA(b,0,null,"index",null))
for(u=this.gR(this),t=0;u.u();){s=u.gF(u)
if(b===t)return s;++t}throw H.i(P.W(b,this,"index",null,t))},
i:function(a){return P.m7(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$id:1}
P.P.prototype={}
P.L.prototype={
gH:function(a){return P.R.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a2.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
t:function(a,b){return this===b},
gH:function(a){return H.cz(this)},
i:function(a){return"Instance of '"+H.bW(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.f.prototype={$ikQ:1}
P.bg.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.fg.prototype={
gm:function(a){return a.length}}
W.dd.prototype={
i:function(a){return String(a)},
$idd:1}
W.fh.prototype={
i:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.df.prototype={}
W.bo.prototype={$ibo:1}
W.bM.prototype={
cT:function(a,b,c){if(c!=null)return this.fH(a,b,P.mX(c,null))
return this.fI(a,b)},
eE:function(a,b){return this.cT(a,b,null)},
fH:function(a,b,c){return a.getContext(b,c)},
fI:function(a,b){return a.getContext(b)},
$ibM:1,
$ikC:1}
W.bN.prototype={
fJ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jm:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibN:1}
W.bp.prototype={
gm:function(a){return a.length}}
W.ci.prototype={$ici:1}
W.ft.prototype={
gm:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cj.prototype={
gm:function(a){return a.length}}
W.fu.prototype={}
W.aM.prototype={}
W.aN.prototype={}
W.fv.prototype={
gm:function(a){return a.length}}
W.fw.prototype={
gm:function(a){return a.length}}
W.fz.prototype={
gm:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.ck.prototype={
iW:function(a,b){return a.adoptNode(b)},
eF:function(a,b){return a.getElementById(b)}}
W.fA.prototype={
i:function(a){return String(a)}}
W.dn.prototype={
jc:function(a,b){return a.createHTMLDocument(b)}}
W.dp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ac,P.a2]]},
$av:function(){return[[P.ac,P.a2]]},
$id:1,
$ad:function(){return[[P.ac,P.a2]]},
$ib:1,
$ab:function(){return[[P.ac,P.a2]]},
$aB:function(){return[[P.ac,P.a2]]}}
W.dq.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaI(a))+" x "+H.l(this.gaC(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.d7(b,"$iac",[P.a2],"$aac"))return!1
u=J.aq(b)
return a.left===u.gbF(b)&&a.top===u.gbL(b)&&this.gaI(a)===u.gaI(b)&&this.gaC(a)===u.gaC(b)},
gH:function(a){return W.le(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(this.gaI(a)),C.j.gH(this.gaC(a)))},
gdK:function(a){return a.bottom},
gaC:function(a){return a.height},
gbF:function(a){return a.left},
gbJ:function(a){return a.right},
gbL:function(a){return a.top},
gaI:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a2]}}
W.fB.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.f]},
$av:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aB:function(){return[P.f]}}
W.fC.prototype={
gm:function(a){return a.length}}
W.j_.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.j(u[b],"$iT")},
h:function(a,b){J.kx(this.a,b)
return b},
gR:function(a){var u=this.k9(this)
return new J.ak(u,u.length,0,[H.y(u,0)])},
$av:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
giZ:function(a){return new W.j1(a)},
gdN:function(a){return new W.j_(a,a.children)},
gdP:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aX()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aX()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a2])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kH
if(u==null){u=H.c([],[W.au])
t=new W.dO(u)
C.a.h(u,W.ld(null))
C.a.h(u,W.lf())
$.kH=t
d=t}else d=u
u=$.kG
if(u==null){u=new W.f3(d)
$.kG=u
c=u}else{u.a=d
c=u}}if($.b9==null){u=document
t=u.implementation
t=(t&&C.J).jc(t,"")
$.b9=t
$.k_=t.createRange()
t=$.b9
t.toString
t=t.createElement("base")
H.j(t,"$icb")
t.href=u.baseURI
u=$.b9.head;(u&&C.L).B(u,t)}u=$.b9
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.j(t,"$ibo")}u=$.b9
if(!!this.$ibo)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b9.body;(u&&C.n).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.X,a.tagName)){u=$.k_;(u&&C.E).eM(u,s)
u=$.k_
r=(u&&C.E).ja(u,b)}else{s.innerHTML=b
r=$.b9.createDocumentFragment()
for(u=J.aq(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.b9.body
if(s==null?u!=null:s!==u)J.ky(s)
c.cV(r)
C.z.iW(document,r)
return r},
jb:function(a,b,c){return this.af(a,b,c,null)},
eO:function(a,b,c,d){a.textContent=null
this.B(a,this.af(a,b,c,d))},
eN:function(a,b){return this.eO(a,b,null,null)},
aW:function(a,b){return a.getAttribute(b)},
hS:function(a,b){return a.removeAttribute(b)},
$iT:1,
gk0:function(a){return a.tagName}}
W.fG.prototype={
$1:function(a){return!!J.a_(H.j(a,"$iD")).$iT},
$S:15}
W.o.prototype={$io:1}
W.e.prototype={
iS:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fj(a,b,c,!1)},
fj:function(a,b,c,d){return a.addEventListener(b,H.c4(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ie:1}
W.aO.prototype={$iaO:1}
W.fM.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aO]},
$av:function(){return[W.aO]},
$id:1,
$ad:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.fN.prototype={
gm:function(a){return a.length}}
W.fR.prototype={
gm:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.du.prototype={}
W.fW.prototype={
gm:function(a){return a.length}}
W.bR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ibR:1,
$aB:function(){return[W.D]}}
W.dv.prototype={}
W.bw.prototype={$ibw:1,
gdR:function(a){return a.data}}
W.cp.prototype={$icp:1,$ikC:1}
W.aT.prototype={$iaT:1}
W.dF.prototype={
i:function(a){return String(a)},
$idF:1}
W.ct.prototype={}
W.hk.prototype={
gm:function(a){return a.length}}
W.hl.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.f])
this.P(a,new W.hm(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
W.hm.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hn.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.f])
this.P(a,new W.ho(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
W.ho.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aW.prototype={$iaW:1}
W.hp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$av:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aB:function(){return[W.aW]}}
W.aa.prototype={$iaa:1}
W.ai.prototype={
gaJ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.i(P.l0("No elements"))
if(t>1)throw H.i(P.l0("More than one element"))
return u.firstChild},
a7:function(a,b){var u,t,s,r,q
H.m(b,"$id",[W.D],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.aq(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
gR:function(a){var u=this.a.childNodes
return new W.ds(u,u.length,-1,[H.d9(C.Z,u,"B",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$av:function(){return[W.D]},
$ad:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
jU:function(a){var u=a.parentNode
if(u!=null)J.ff(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eS(a):u},
B:function(a,b){return a.appendChild(b)},
hT:function(a,b){return a.removeChild(b)},
$iD:1}
W.cx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aB:function(){return[W.D]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$av:function(){return[W.aY]},
$id:1,
$ad:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.dT.prototype={
ja:function(a,b){return a.createContextualFragment(b)},
eM:function(a,b){return a.selectNodeContents(b)}}
W.hP.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.f])
this.P(a,new W.hQ(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hS.prototype={
gm:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.i0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$av:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$av:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.b0.prototype={$ib0:1,
gm:function(a){return a.length}}
W.i4.prototype={
j:function(a,b){return this.dl(a,H.H(b))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.fM(a,u)
if(t==null)return
b.$2(t,this.dl(a,t))}},
ga8:function(a){var u=H.c([],[P.f])
this.P(a,new W.i5(u))
return u},
gm:function(a){return a.length},
dl:function(a,b){return a.getItem(b)},
fM:function(a,b){return a.key(b)},
$aa9:function(){return[P.f,P.f]},
$iP:1,
$aP:function(){return[P.f,P.f]}}
W.i5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aG.prototype={$iaG:1}
W.bZ.prototype={}
W.e0.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bR(a,b,c,d)
u=W.m4("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a7(0,new W.ai(u))
return t}}
W.e1.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bR(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaJ(u)
s.toString
u=new W.ai(s)
r=u.gaJ(u)
t.toString
r.toString
new W.ai(t).a7(0,new W.ai(r))
return t}}
W.ib.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bR(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaJ(u)
t.toString
s.toString
new W.ai(t).a7(0,new W.ai(s))
return t}}
W.cG.prototype={$icG:1}
W.b1.prototype={$ib1:1}
W.aH.prototype={$iaH:1}
W.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$av:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aB:function(){return[W.aH]}}
W.ie.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$av:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.ij.prototype={
gm:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.aI.prototype={$iaI:1}
W.io.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b3]},
$av:function(){return[W.b3]},
$id:1,
$ad:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aB:function(){return[W.b3]}}
W.ip.prototype={
gm:function(a){return a.length}}
W.bD.prototype={}
W.iF.prototype={
i:function(a){return String(a)}}
W.iS.prototype={$ikC:1}
W.iT.prototype={
gm:function(a){return a.length}}
W.b6.prototype={
gji:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aw("deltaY is not supported"))},
gjh:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aw("deltaX is not supported"))},
$ib6:1}
W.cT.prototype={
hW:function(a,b){return a.requestAnimationFrame(H.c4(H.n(b,{func:1,ret:-1,args:[P.a2]}),1))},
fA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cU.prototype={$icU:1}
W.j0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.S]},
$av:function(){return[W.S]},
$id:1,
$ad:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aB:function(){return[W.S]}}
W.en.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.d7(b,"$iac",[P.a2],"$aac"))return!1
u=J.aq(b)
return a.left===u.gbF(b)&&a.top===u.gbL(b)&&a.width===u.gaI(b)&&a.height===u.gaC(b)},
gH:function(a){return W.le(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(a.width),C.j.gH(a.height))},
gaC:function(a){return a.height},
gaI:function(a){return a.width}}
W.je.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$av:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.eF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aB:function(){return[W.D]}}
W.jr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b0]},
$av:function(){return[W.b0]},
$id:1,
$ad:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aB:function(){return[W.b0]}}
W.js.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aG]},
$av:function(){return[W.aG]},
$id:1,
$ad:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aB:function(){return[W.aG]}}
W.iZ.prototype={
P:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga8(this),t=u.length,s=this.a,r=J.aq(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.aW(s,p))}},
ga8:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.j(u[r],"$icU")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa9:function(){return[P.f,P.f]},
$aP:function(){return[P.f,P.f]}}
W.j1.prototype={
j:function(a,b){return J.jU(this.a,H.H(b))},
gm:function(a){return this.ga8(this).length}}
W.j2.prototype={}
W.kc.prototype={}
W.j3.prototype={}
W.j4.prototype={
$1:function(a){return this.a.$1(H.j(a,"$io"))},
$S:28}
W.bE.prototype={
f3:function(a){var u,t
u=$.kw()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.n3())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.n4())}},
aR:function(a){return $.lO().W(0,W.cl(a))},
ar:function(a,b,c){var u,t,s
u=W.cl(a)
t=$.kw()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.ki(s.$4(a,b,c,this))},
$iau:1}
W.B.prototype={
gR:function(a){return new W.ds(a,this.gm(a),-1,[H.d9(this,a,"B",0)])}}
W.dO.prototype={
aR:function(a){return C.a.dH(this.a,new W.hy(a))},
ar:function(a,b,c){return C.a.dH(this.a,new W.hx(a,b,c))},
$iau:1}
W.hy.prototype={
$1:function(a){return H.j(a,"$iau").aR(this.a)},
$S:17}
W.hx.prototype={
$1:function(a){return H.j(a,"$iau").ar(this.a,this.b,this.c)},
$S:17}
W.eN.prototype={
fd:function(a,b,c,d){var u,t,s
this.a.a7(0,c)
u=b.bN(0,new W.jp())
t=b.bN(0,new W.jq())
this.b.a7(0,u)
s=this.c
s.a7(0,C.Y)
s.a7(0,t)},
aR:function(a){return this.a.W(0,W.cl(a))},
ar:function(a,b,c){var u,t
u=W.cl(a)
t=this.c
if(t.W(0,H.l(u)+"::"+b))return this.d.iX(c)
else if(t.W(0,"*::"+b))return this.d.iX(c)
else{t=this.b
if(t.W(0,H.l(u)+"::"+b))return!0
else if(t.W(0,"*::"+b))return!0
else if(t.W(0,H.l(u)+"::*"))return!0
else if(t.W(0,"*::*"))return!0}return!1},
$iau:1}
W.jp.prototype={
$1:function(a){return!C.a.W(C.u,H.H(a))},
$S:18}
W.jq.prototype={
$1:function(a){return C.a.W(C.u,H.H(a))},
$S:18}
W.ju.prototype={
ar:function(a,b,c){if(this.eW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jU(a,"template")==="")return this.e.W(0,b)
return!1}}
W.jv.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:39}
W.jt.prototype={
aR:function(a){var u=J.a_(a)
if(!!u.$icA)return!1
u=!!u.$ip
if(u&&W.cl(a)==="foreignObject")return!1
if(u)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.i.bQ(b,"on"))return!1
return this.aR(a)},
$iau:1}
W.ds.prototype={
u:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdm(J.lQ(this.a,u))
this.c=u
return!0}this.sdm(null)
this.c=t
return!1},
gF:function(a){return this.d},
sdm:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
W.au.prototype={}
W.jn.prototype={$inI:1}
W.f3.prototype={
cV:function(a){new W.jz(this).$2(a,null)},
b4:function(a,b){if(b==null)J.ky(a)
else J.ff(b,a)},
i0:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lT(a)
s=J.jU(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ay(o)}q="element unprintable"
try{q=J.ar(a)}catch(o){H.ay(o)}try{p=W.cl(a)
this.i_(H.j(a,"$iT"),b,u,q,p,H.j(t,"$iP"),H.H(s))}catch(o){if(H.ay(o) instanceof P.aE)throw o
else{this.b4(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
i_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aR(a)){this.b4(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ar(a,"is",g)){this.b4(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga8(f).length-1,u=f.a,r=J.aq(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.ar(a,J.lW(q),r.aW(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.aW(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aW(u,q)
r.hS(u,q)}}if(!!J.a_(a).$icG)this.cV(a.content)},
$int:1}
W.jz.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.i0(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b4(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ay(r)
q=H.j(u,"$iD")
if(s){p=q.parentNode
if(p!=null)J.ff(p,q)}else J.ff(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$iD")}},
$S:42}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
P.f2.prototype={$ibw:1,
gdR:function(a){return this.a}}
P.jG.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fO.prototype={
gc_:function(){var u,t,s
u=this.b
t=H.aj(u,"v",0)
s=W.T
return new H.hc(new H.cS(u,H.n(new P.fP(),{func:1,ret:P.N,args:[t]}),[t]),H.n(new P.fQ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kx(this.b.a,b)},
gm:function(a){return J.bJ(this.gc_().a)},
j:function(a,b){var u=this.gc_()
return u.b.$1(J.jT(u.a,b))},
gR:function(a){var u=P.me(this.gc_(),!1,W.T)
return new J.ak(u,u.length,0,[H.y(u,0)])},
$av:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fP.prototype={
$1:function(a){return!!J.a_(H.j(a,"$iD")).$iT},
$S:15}
P.fQ.prototype={
$1:function(a){return H.h(H.j(a,"$iD"),"$iT")},
$S:29}
P.ji.prototype={
gbJ:function(a){var u=this.a
if(typeof u!=="number")return u.G()
return H.E(u+this.c,H.y(this,0))},
gdK:function(a){var u=this.b
if(typeof u!=="number")return u.G()
return H.E(u+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d7(b,"$iac",[P.a2],"$aac")){u=this.a
t=J.aq(b)
if(u==t.gbF(b)){s=this.b
if(s==t.gbL(b)){if(typeof u!=="number")return u.G()
r=H.y(this,0)
if(H.E(u+this.c,r)===t.gbJ(b)){if(typeof s!=="number")return s.G()
u=H.E(s+this.d,r)===t.gdK(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t,s,r,q
u=this.a
t=J.bI(u)
s=this.b
r=J.bI(s)
if(typeof u!=="number")return u.G()
q=H.y(this,0)
u=C.h.gH(H.E(u+this.c,q))
if(typeof s!=="number")return s.G()
q=C.h.gH(H.E(s+this.d,q))
return P.mH(P.jg(P.jg(P.jg(P.jg(0,t),r),u),q))}}
P.ac.prototype={
gbF:function(a){return this.a},
gbL:function(a){return this.b},
gaI:function(a){return this.c},
gaC:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.h5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.au(a,b)},
E:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.ba]},
$id:1,
$ad:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aB:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.hA.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.au(a,b)},
E:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.bd]},
$id:1,
$ad:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aB:function(){return[P.bd]}}
P.hH.prototype={
gm:function(a){return a.length}}
P.cA.prototype={$icA:1}
P.ia.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.au(a,b)},
E:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aB:function(){return[P.f]}}
P.p.prototype={
gdN:function(a){return new P.fO(a,new W.ai(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.au])
C.a.h(u,W.ld(null))
C.a.h(u,W.lf())
C.a.h(u,new W.jt())
c=new W.f3(new W.dO(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jb(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ai(r)
p=u.gaJ(u)
for(u=J.aq(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$ip:1}
P.bh.prototype={$ibh:1}
P.iq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.au(a,b)},
E:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.bh]},
$id:1,
$ad:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aB:function(){return[P.bh]}}
P.ex.prototype={}
P.ey.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.fj.prototype={
gm:function(a){return a.length}}
P.fk.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.f])
this.P(a,new P.fl(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
P.fl.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fm.prototype={
gm:function(a){return a.length}}
P.bK.prototype={}
P.hB.prototype={
gm:function(a){return a.length}}
P.el.prototype={}
P.dg.prototype={$idg:1}
P.dt.prototype={$idt:1}
P.dS.prototype={$idS:1}
P.bY.prototype={
ci:function(a,b){return a.activeTexture(b)},
dI:function(a,b,c){return a.attachShader(b,c)},
as:function(a,b,c){return a.bindBuffer(b,c)},
j0:function(a,b,c){return a.bindFramebuffer(b,c)},
az:function(a,b,c){return a.bindTexture(b,c)},
j1:function(a,b,c){return a.blendFunc(b,c)},
dL:function(a,b,c,d){return a.bufferData(b,c,d)},
j3:function(a,b){return a.clear(b)},
j4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j5:function(a,b){return a.clearDepth(b)},
j6:function(a,b){return a.compileShader(b)},
jd:function(a,b){return a.createShader(b)},
jf:function(a,b){return a.deleteProgram(b)},
jg:function(a,b){return a.deleteShader(b)},
jj:function(a,b){return a.depthFunc(b)},
jk:function(a,b){return a.disable(b)},
dT:function(a,b){return a.disableVertexAttribArray(b)},
jl:function(a,b,c,d,e){return a.drawElements(b,c,H.a8(d),H.a8(e))},
cu:function(a,b){return a.enable(b)},
dV:function(a,b){return a.enableVertexAttribArray(b)},
eA:function(a,b,c){return a.getActiveAttrib(b,c)},
eB:function(a,b,c){return a.getActiveUniform(b,c)},
eC:function(a,b,c){return a.getAttribLocation(b,c)},
cU:function(a,b){return a.getParameter(b)},
eG:function(a,b){return a.getProgramInfoLog(b)},
bO:function(a,b,c){return a.getProgramParameter(b,c)},
eH:function(a,b){return a.getShaderInfoLog(b)},
eI:function(a,b,c){return a.getShaderParameter(b,c)},
eJ:function(a,b,c){return a.getUniformLocation(b,c)},
jz:function(a,b){return a.linkProgram(b)},
jS:function(a,b,c){return a.pixelStorei(b,c)},
eP:function(a,b,c){return a.shaderSource(b,c)},
k6:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.a_(g)
if(!!u.$ibw)t=!0
else t=!1
if(t){this.ig(a,b,c,d,e,f,P.mY(g))
return}if(!!u.$icp)u=!0
else u=!1
if(u){this.ih(a,b,c,d,e,f,g)
return}throw H.i(P.lX("Incorrect number or type of arguments"))},
k5:function(a,b,c,d,e,f,g){return this.k6(a,b,c,d,e,f,g,null,null,null)},
ig:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ih:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bK:function(a,b,c,d){return a.texParameteri(b,c,d)},
I:function(a,b,c){return a.uniform1f(b,c)},
O:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ex:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ey:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cR:function(a,b){return a.useProgram(b)},
kc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kd:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibY:1}
P.dV.prototype={$idV:1}
P.e2.prototype={$ie2:1}
P.ea.prototype={$iea:1}
P.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return P.bi(this.fL(a,b))},
E:function(a,b){return this.j(a,b)},
fL:function(a,b){return a.item(b)},
$av:function(){return[[P.P,,,]]},
$id:1,
$ad:function(){return[[P.P,,,]]},
$ib:1,
$ab:function(){return[[P.P,,,]]},
$aB:function(){return[[P.P,,,]]}}
P.eQ.prototype={}
P.eR.prototype={}
O.a0.prototype={
bi:function(a){this.sfQ(H.c([],[a]))
this.sdt(null)
this.sdn(null)
this.sdu(null)},
cW:function(a,b,c){var u=H.aj(this,"a0",0)
H.n(b,{func:1,ret:P.N,args:[[P.d,u]]})
u={func:1,ret:-1,args:[P.C,[P.d,u]]}
H.n(a,u)
H.n(c,u)
this.sdt(b)
this.sdn(a)
this.sdu(c)},
aY:function(a,b){return this.cW(a,null,b)},
ds:function(a){var u
H.m(a,"$id",[H.aj(this,"a0",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d1:function(a,b){var u
H.m(b,"$id",[H.aj(this,"a0",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ak(u,u.length,0,[H.y(u,0)])},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aj(this,"a0",0)
H.E(b,u)
u=[u]
if(this.ds(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d1(s,H.c([b],u))}},
a7:function(a,b){var u,t
H.m(b,"$id",[H.aj(this,"a0",0)],"$ad")
if(this.ds(b)){u=this.a
t=u.length
C.a.a7(u,b)
this.d1(t,b)}},
sfQ:function(a){this.a=H.m(a,"$ib",[H.aj(this,"a0",0)],"$ab")},
sdt:function(a){this.b=H.n(a,{func:1,ret:P.N,args:[[P.d,H.aj(this,"a0",0)]]})},
sdn:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.C,[P.d,H.aj(this,"a0",0)]]})},
sdu:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.C,[P.d,H.aj(this,"a0",0)]]})},
$id:1}
O.cs.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
f1:function(a){var u=this.b
if(u!=null)u.C(a)},
aK:function(){return this.f1(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gbE(u)
else return V.bU()},
bI:function(a){var u=this.a
if(a==null)C.a.h(u,V.bU())
else C.a.h(u,a)
this.aK()},
aE:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sc1:function(a){this.a=H.m(a,"$ib",[V.am],"$ab")}}
E.fn.prototype={}
E.af.prototype={
sbP:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gp().U(0,this.gen())
t=this.c
if(t!=null)t.gp().h(0,this.gen())
s=new D.I("shape",u,this.c,this,[F.dW])
s.b=!0
this.aT(s)}},
an:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.an(0,b)},
ab:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga1(u))
u.aK()
a.cO(this.f)
u=a.dy
t=(u&&C.a).gbE(u)
if(t!=null&&this.d!=null)t.eq(a,this)
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.ab(a)
a.cN()
a.dx.aE()},
gp:function(){var u=this.z
if(u==null){u=D.K()
this.z=u}return u},
aT:function(a){var u=this.z
if(u!=null)u.C(a)},
a4:function(){return this.aT(null)},
eo:function(a){H.j(a,"$ix")
this.e=null
this.aT(a)},
jJ:function(){return this.eo(null)},
em:function(a){this.aT(H.j(a,"$ix"))},
jG:function(){return this.em(null)},
jF:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$id",[E.af],"$ad")
for(u=b.length,t=this.gel(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sad(null)
o.sb2(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
jI:function(a,b){var u,t
H.m(b,"$id",[E.af],"$ad")
for(u=b.gR(b),t=this.gel();u.u();)u.gF(u).gp().U(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf2:function(a,b){this.y=H.m(b,"$ia0",[E.af],"$aa0")},
$iaX:1}
E.hL.prototype={
eZ:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.al(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cs()
t=[V.am]
u.sc1(H.c([],t))
u.b=null
u.gp().h(0,new E.hM(this))
this.cy=u
u=new O.cs()
u.sc1(H.c([],t))
u.b=null
u.gp().h(0,new E.hN(this))
this.db=u
u=new O.cs()
u.sc1(H.c([],t))
u.b=null
u.gp().h(0,new E.hO(this))
this.dx=u
this.sie(H.c([],[O.bC]))
u=this.dy;(u&&C.a).h(u,null)
this.si9(new H.aS([P.f,A.cB]))},
gjT:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.A(0,t.ga1(t))
this.z=t
u=t}return u},
cO:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbE(u):a;(u&&C.a).h(u,t)},
cN:function(){var u=this.dy
if(u.length>1)u.pop()},
dG:function(a){var u=a.b
if(u.length===0)throw H.i(P.r("May not cache a shader with no name."))
if(this.fr.dQ(0,u))throw H.i(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Y(0,u,a)},
sie:function(a){this.dy=H.m(a,"$ib",[O.bC],"$ab")},
si9:function(a){this.fr=H.m(a,"$iP",[P.f,A.cB],"$aP")}}
E.hM.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.hN.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.hO.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.e6.prototype={
d4:function(a){H.j(a,"$ix")
this.er()},
d3:function(){return this.d4(null)},
gjt:function(){var u,t,s
u=Date.now()
t=C.h.a3(P.kF(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.al(u,!1)
return s/t},
dz:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.G(u)
s=C.j.cD(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.j.cD(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.l3(C.q,this.gjW())}},
er:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ii(this),{func:1,ret:-1,args:[P.a2]})
C.G.fA(u)
C.G.hW(u,W.lm(t,P.a2))}},
jV:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dz()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.al(r,!1)
s.y=P.kF(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aK()
r=s.db
C.a.sm(r.a,0)
r.aK()
r=s.dx
C.a.sm(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ab(this.e)}s=this.z
if(s!=null)s.C(null)}catch(q){u=H.ay(q)
t=H.c6(q)
P.ks("Error: "+H.l(u))
P.ks("Stack: "+H.l(t))
throw H.i(u)}}}
E.ii.prototype={
$1:function(a){var u
H.ne(a)
u=this.a
if(u.ch){u.ch=!1
u.jV()}},
$S:34}
Z.ei.prototype={$inn:1}
Z.dh.prototype={
a0:function(a){var u,t,s
try{t=a.a
C.b.dV(t,this.e)
C.b.kc(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.ej.prototype={$ino:1}
Z.ce.prototype={
aB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t
u=this.a
C.b.as(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a0(a)},
aH:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dT(s,u[t].e)
C.b.as(s,this.a.a,null)},
ab:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.as(t,p,r.b)
C.b.jl(t,q.a,q.b,5123,0)
C.b.as(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ar(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sfK:function(a){this.b=H.m(a,"$ib",[Z.bx],"$ab")},
$inv:1}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bW(this.c)+"'")+"]"}}
Z.b5.prototype={
gcY:function(a){var u,t
u=this.a
t=(u&$.aK().a)!==0?3:0
if((u&$.bl().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=2
if((u&$.bn().a)!==0)t+=3
if((u&$.da().a)!==0)t+=3
if((u&$.db().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
iY:function(a){var u,t,s
u=$.aK()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.da()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.db()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0)if(s===a)return u
return $.lN()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.f])
t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.bl().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.bm().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bn().a)!==0)C.a.h(u,"TxtCube")
if((t&$.da().a)!==0)C.a.h(u,"Clr3")
if((t&$.db().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fq.prototype={}
D.bP.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.n(b,u)
if(this.a==null)this.sad(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.a
t=(u&&C.a).U(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.b
t=(u&&C.a).U(u,b)||t}return t},
C:function(a){var u,t,s,r
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
return!0}if(!s)C.a.P(t,new D.fK(u))
t=this.b
if(t!=null)C.a.P(t,new D.fL(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
jn:function(){return this.C(null)},
jX:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
aG:function(a){return this.jX(a,!0,!1)},
sad:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
sb2:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fK.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fL.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.x.prototype={}
D.by.prototype={}
D.bz.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.di.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dB.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.h4.prototype={
jP:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jL:function(a){this.c=a.b
this.d.U(0,a.a)
return!1},
shQ:function(a){this.d=H.m(a,"$il_",[P.C],"$al_")}}
X.dG.prototype={}
X.h9.prototype={
b0:function(a,b){var u,t,s,r,q,p,o,n
u=new P.al(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.a5(t.a+s*r,t.b+q*p)
p=this.a.gaS()
n=new X.bc(a,V.be(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cM:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eL()
if(typeof u!=="number")return u.ez()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.b0(a,b))
return!0},
jQ:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaS()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.cu(new V.U(q*p,o*n),t,s,new P.al(r,!1),this)
r.b=!0
u.C(r)
return!0},
ho:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.al(Date.now(),!1)
t=this.f
s=new X.dG(c,a,this.a.gaS(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.be()}}
X.at.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.at))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bc.prototype={}
X.hq.prototype={
bY:function(a,b,c){var u,t,s
u=new P.al(Date.now(),!1)
t=this.a.gaS()
s=new X.bc(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bY(a,b,!0))
return!0},
b9:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eL()
if(typeof u!=="number")return u.ez()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bY(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bY(a,b,!1))
return!0},
jR:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaS()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.cu(new V.U(r*q,p*o),t,b,new P.al(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdU:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
gbM:function(){var u=this.c
if(u==null){u=D.K()
this.c=u}return u},
gek:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u}}
X.cu.prototype={}
X.hG.prototype={}
X.e8.prototype={}
X.im.prototype={
b0:function(a,b){var u,t,s,r
H.m(a,"$ib",[V.a5],"$ab")
u=new P.al(Date.now(),!1)
t=a.length>0?a[0]:V.be()
s=this.a.gaS()
r=new X.e8(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jO:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.C(this.b0(a,!0))
return!0},
jM:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.C(this.b0(a,!0))
return!0},
jN:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.C(this.b0(a,!1))
return!0}}
X.ed.prototype={
gaS:function(){var u=this.a
return V.kY(0,0,C.p.gdP(u).c,C.p.gdP(u).d)},
dh:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dB(u,new X.at(t,a.altKey,a.shiftKey))},
aQ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
cg:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.J()
q=u.top
if(typeof s!=="number")return s.J()
return new V.a5(t-r,s-q)},
b3:function(a){return new V.U(a.movementX,a.movementY)},
cc:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a5])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.j.am(p.pageX)
C.j.am(p.pageY)
n=u.left
C.j.am(p.pageX)
C.a.h(t,new V.a5(o-n,C.j.am(p.pageY)-u.top))}return t},
aw:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.di(u,new X.at(t,a.altKey,a.shiftKey))},
c2:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.J()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.J()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hi:function(a){this.f=!0},
h6:function(a){this.f=!1},
hc:function(a){H.j(a,"$iaa")
if(this.f&&this.c2(a))a.preventDefault()},
hm:function(a){var u
H.j(a,"$iaT")
if(!this.f)return
u=this.dh(a)
this.b.jP(u)},
hk:function(a){var u
H.j(a,"$iaT")
if(!this.f)return
u=this.dh(a)
this.b.jL(u)},
hq:function(a){var u,t,s,r
H.j(a,"$iaa")
u=this.a
u.focus()
this.f=!0
this.aQ(a)
if(this.x){t=this.aw(a)
s=this.b3(a)
if(this.d.cM(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aw(a)
r=this.ay(a)
if(this.c.cM(t,r))a.preventDefault()},
hu:function(a){var u,t,s
H.j(a,"$iaa")
this.aQ(a)
u=this.aw(a)
if(this.x){t=this.b3(a)
if(this.d.b9(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b9(u,s))a.preventDefault()},
hg:function(a){var u,t,s
H.j(a,"$iaa")
if(!this.c2(a)){this.aQ(a)
u=this.aw(a)
if(this.x){t=this.b3(a)
if(this.d.b9(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b9(u,s))a.preventDefault()}},
hs:function(a){var u,t,s
H.j(a,"$iaa")
this.aQ(a)
u=this.aw(a)
if(this.x){t=this.b3(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b8(u,s))a.preventDefault()},
he:function(a){var u,t,s
H.j(a,"$iaa")
if(!this.c2(a)){this.aQ(a)
u=this.aw(a)
if(this.x){t=this.b3(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.ay(a)
if(this.c.b8(u,s))a.preventDefault()}},
hw:function(a){var u,t
H.j(a,"$ib6")
this.aQ(a)
u=new V.U((a&&C.F).gjh(a),C.F.gji(a)).v(0,180)
if(this.x){if(this.d.jQ(u))a.preventDefault()
return}if(this.r)return
t=this.ay(a)
if(this.c.jR(u,t))a.preventDefault()},
hy:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aw(this.y)
s=this.ay(this.y)
this.d.ho(t,s,u)}},
hO:function(a){var u
H.j(a,"$iaI")
this.a.focus()
this.f=!0
this.cg(a)
u=this.cc(a)
if(this.e.jO(u))a.preventDefault()},
hK:function(a){var u
H.j(a,"$iaI")
this.cg(a)
u=this.cc(a)
if(this.e.jM(u))a.preventDefault()},
hM:function(a){var u
H.j(a,"$iaI")
this.cg(a)
u=this.cc(a)
if(this.e.jN(u))a.preventDefault()},
sfB:function(a){this.z=H.m(a,"$ib",[[P.cE,P.R]],"$ab")}}
D.bs.prototype={
gp:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u},
av:function(a){var u
H.j(a,"$ix")
u=this.d
if(u!=null)u.C(a)},
f6:function(){return this.av(null)},
$ia3:1,
$iaX:1}
D.a3.prototype={$iaX:1}
D.dC.prototype={
gp:function(){var u=this.Q
if(u==null){u=D.K()
this.Q=u}return u},
av:function(a){var u=this.Q
if(u!=null)u.C(a)},
dr:function(a){var u
H.j(a,"$ix")
u=this.ch
if(u!=null)u.C(a)},
hn:function(){return this.dr(null)},
hA:function(a){var u,t,s
H.m(a,"$id",[D.a3],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.f4(s))return!1}return!0},
h0:function(a,b){var u,t,s,r,q,p,o,n
u=D.a3
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gdq(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.j(b[p],"$ia3")
if(o instanceof D.bs)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bP()
n.sad(null)
n.sb2(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.by(a,b,this,[u])
u.b=!0
this.av(u)},
hE:function(a,b){var u,t,s,r
u=D.a3
H.m(b,"$id",[u],"$ad")
for(t=b.gR(b),s=this.gdq();t.u();){r=t.gF(t)
C.a.U(this.e,r)
r.gp().U(0,s)}u=new D.bz(a,b,this,[u])
u.b=!0
this.av(u)},
f4:function(a){var u=C.a.W(this.e,a)
return u},
sfz:function(a){this.e=H.m(a,"$ib",[D.bs],"$ab")},
shP:function(a){this.f=H.m(a,"$ib",[D.dR],"$ab")},
sib:function(a){this.r=H.m(a,"$ib",[D.dZ],"$ab")},
sir:function(a){this.x=H.m(a,"$ib",[D.e3],"$ab")},
sis:function(a){this.y=H.m(a,"$ib",[D.e4],"$ab")},
sit:function(a){this.z=H.m(a,"$ib",[D.e5],"$ab")},
$ad:function(){return[D.a3]},
$aa0:function(){return[D.a3]}}
D.dR.prototype={$ia3:1,$iaX:1}
D.dZ.prototype={$ia3:1,$iaX:1}
D.e3.prototype={$ia3:1,$iaX:1}
D.e4.prototype={$ia3:1,$iaX:1}
D.e5.prototype={$ia3:1,$iaX:1}
V.a1.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.aF.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.fI.prototype={}
V.dK.prototype={
ac:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
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
u=[P.z]
t=V.c5(H.c([this.a,this.d,this.r],u),3,0)
s=V.c5(H.c([this.b,this.e,this.x],u),3,0)
r=V.c5(H.c([this.c,this.f,this.y],u),3,0)
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
V.am.prototype={
ac:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
cF:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.O().a)return V.bU()
a8=1/a7
a9=-r
b0=-d
return V.aV((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
A:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aV(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cQ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Q(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
be:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ag(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
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
i:function(a){return this.L()},
eg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.c5(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c5(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c5(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c5(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
L:function(){return this.eg("",3,0)},
w:function(a){return this.eg(a,3,0)}}
V.a5.prototype={
J:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.ag.prototype={
J:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.bf.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.dU.prototype={
gaa:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.U.prototype={
cG:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.U(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.l7
if(u==null){u=new V.U(0,0)
$.l7=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.U(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.Q.prototype={
cG:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cH:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b7:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.Q(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.O().a)return V.eh()
return new V.Q(this.a/b,this.b/b,this.c/b)},
ei:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fr.prototype={
bT:function(a){var u=V.nm(a,this.c,this.b)
return u},
gp:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u},
N:function(a){var u=this.y
if(u!=null)u.C(a)},
scS:function(a,b){},
scJ:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.O().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bT(t)}u=new D.I("maximumLocation",u,this.b,this,[P.z])
u.b=!0
this.N(u)}},
scL:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bT(t)}u=new D.I("minimumLocation",u,this.c,this,[P.z])
u.b=!0
this.N(u)}},
sa9:function(a,b){var u
b=this.bT(b)
u=this.d
if(!(Math.abs(u-b)<$.O().a)){this.d=b
u=new D.I("location",u,b,this,[P.z])
u.b=!0
this.N(u)}},
scK:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.O().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.I("maximumVelocity",u,a,this,[P.z])
u.b=!0
this.N(u)}},
sV:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.I("velocity",u,a,this,[P.z])
u.b=!0
this.N(u)}},
scs:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.I("dampening",u,a,this,[P.z])
u.b=!0
this.N(u)}},
an:function(a,b){var u,t,s,r,q
u=this.f
t=$.O().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa9(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.O().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sV(s)}}}
U.dk.prototype={
gp:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
aV:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
return J.a6(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.co.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
N:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.C(a)},
a5:function(){return this.N(null)},
fZ:function(a,b){var u,t,s,r,q,p,o,n
u=U.ab
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaL(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gp()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.N(u)},
hC:function(a,b){var u,t,s
u=U.ab
H.m(b,"$id",[u],"$ad")
for(t=b.gR(b),s=this.gaL();t.u();)t.gF(t).gp().U(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.N(u)},
aV:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ak(u,u.length,0,[H.y(u,0)]),s=null;u.u();){t=u.d
if(t!=null){r=t.aV(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.bU():s
u=this.e
if(u!=null)u.aG(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.a6(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ab]},
$aa0:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.ee.prototype={
gp:function(){var u=this.cy
if(u==null){u=D.K()
this.cy=u}return u},
N:function(a){var u
H.j(a,"$ix")
u=this.cy
if(u!=null)u.C(a)},
a5:function(){return this.N(null)},
b5:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdU().h(0,this.gc3())
this.a.c.gek().h(0,this.gc5())
this.a.c.gbM().h(0,this.gc7())
return!0},
c4:function(a){H.j(a,"$ix")
if(!J.a6(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c6:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$ix"),"$ibc")
if(!this.y)return
if(this.x){u=a.d.J(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.J(0,a.y)
u=new V.U(t.a,t.b).A(0,2).v(0,u.gaa())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.U(s.a,s.b).A(0,2).v(0,u.gaa())
s=this.b
q=r.a
if(typeof q!=="number")return q.S()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa9(0,-q*p+o)
this.b.sV(0)
t=t.J(0,a.z)
this.Q=new V.U(t.a,t.b).A(0,2).v(0,u.gaa())}this.a5()},
c8:function(a){var u,t,s
H.j(a,"$ix")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sV(t*10*s)
this.a5()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.ch=t
s=b.y
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aV(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iab:1}
U.ef.prototype={
gp:function(){var u=this.fx
if(u==null){u=D.K()
this.fx=u}return u},
N:function(a){var u
H.j(a,"$ix")
u=this.fx
if(u!=null)u.C(a)},
a5:function(){return this.N(null)},
b5:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdU().h(0,this.gc3())
this.a.c.gek().h(0,this.gc5())
this.a.c.gbM().h(0,this.gc7())
u=this.a.d
t=u.f
if(t==null){t=D.K()
u.f=t
u=t}else u=t
u.h(0,this.gfR())
u=this.a.d
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gfT())
u=this.a.e
t=u.b
if(t==null){t=D.K()
u.b=t
u=t}else u=t
u.h(0,this.gio())
u=this.a.e
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gil())
u=this.a.e
t=u.c
if(t==null){t=D.K()
u.c=t
u=t}else u=t
u.h(0,this.gij())
return!0},
ap:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.U(u,t)},
c4:function(a){a=H.h(H.j(a,"$ix"),"$ibc")
if(!J.a6(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c6:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$ix"),"$ibc")
if(!this.cx)return
if(this.ch){u=a.d.J(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.J(0,a.y)
u=this.ap(new V.U(t.a,t.b).A(0,2).v(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=this.ap(new V.U(s.a,s.b).A(0,2).v(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa9(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.J(0,a.z)
this.dx=this.ap(new V.U(t.a,t.b).A(0,2).v(0,u.gaa()))}this.a5()},
c8:function(a){var u,t,s
H.j(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sV(-t*10*u)
this.a5()}},
fS:function(a){if(H.h(H.j(a,"$ix"),"$idG").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fU:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$ix"),"$ibc")
if(!J.a6(this.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=this.ap(new V.U(s.a,s.b).A(0,2).v(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa9(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.J(0,a.z)
this.dx=this.ap(new V.U(t.a,t.b).A(0,2).v(0,u.gaa()))
this.a5()},
ip:function(a){H.j(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
im:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$ix"),"$ie8")
if(!this.cx)return
if(this.ch){u=a.d.J(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.J(0,a.y)
u=this.ap(new V.U(t.a,t.b).A(0,2).v(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=this.ap(new V.U(s.a,s.b).A(0,2).v(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa9(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.J(0,a.z)
this.dx=this.ap(new V.U(t.a,t.b).A(0,2).v(0,u.gaa()))}this.a5()},
ik:function(a){var u,t,s
H.j(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sV(-t*10*u)
this.a5()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.dy=t
s=b.y
this.c.an(0,s)
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aV(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.aV(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iab:1}
U.eg.prototype={
gp:function(){var u=this.r
if(u==null){u=D.K()
this.r=u}return u},
N:function(a){var u=this.r
if(u!=null)u.C(a)},
b5:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.K()
u.e=t
u=t}else u=t
t=this.gfW()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.K()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fX:function(a){var u,t,s,r
H.j(a,"$ix")
if(!J.a6(this.b,this.a.b.c))return
H.h(a,"$icu")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.I("zoom",u,r,this,[P.z])
u.b=!0
this.N(u)}},
aV:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aV(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iab:1}
M.dj.prototype={
gp:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
a_:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.C(a)},
aZ:function(){return this.a_(null)},
hG:function(a,b){var u,t,s,r,q,p,o,n
u=M.av
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gp()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.a_(u)},
hI:function(a,b){var u,t,s
u=M.av
H.m(b,"$id",[u],"$ad")
for(t=b.gR(b),s=this.gZ();t.u();)t.gF(t).gp().U(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.a_(u)},
ab:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();){t=u.d
if(t!=null)t.ab(a)}this.e=!1},
$ad:function(){return[M.av]},
$aa0:function(){return[M.av]},
$iav:1}
M.dl.prototype={
gp:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
a_:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.C(a)},
aZ:function(){return this.a_(null)},
sb6:function(a){var u,t
if(a==null)a=new X.fZ()
u=this.a
if(u!==a){if(u!=null)u.gp().U(0,this.gZ())
t=this.a
this.a=a
a.gp().h(0,this.gZ())
u=new D.I("camera",t,this.a,this,[X.bL])
u.b=!0
this.a_(u)}},
sbb:function(a,b){var u,t
if(b==null)b=X.k0(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gp().U(0,this.gZ())
t=this.b
this.b=b
b.gp().h(0,this.gZ())
u=new D.I("target",t,this.b,this,[X.cF])
u.b=!0
this.a_(u)}},
sbc:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gp().U(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gZ())
u=new D.I("technique",t,this.c,this,[O.bC])
u.b=!0
this.a_(u)}},
ab:function(a){a.cO(this.c)
this.b.a0(a)
this.a.a0(a)
this.d.an(0,a)
this.d.ab(a)
this.a.aH(a)
this.b.toString
a.cN()},
$iav:1}
M.dr.prototype={
a_:function(a){var u
H.j(a,"$ix")
u=this.x
if(u!=null)u.C(a)},
aZ:function(){return this.a_(null)},
h8:function(a,b){var u,t,s,r,q,p,o,n
u=E.af
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bP()
n.sad(null)
n.sb2(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.a_(u)},
ha:function(a,b){var u,t,s
u=E.af
H.m(b,"$id",[u],"$ad")
for(t=b.gR(b),s=this.gZ();t.u();)t.gF(t).gp().U(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.a_(u)},
sb6:function(a){var u,t
if(a==null)a=X.kR(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gp().U(0,this.gZ())
t=this.a
this.a=a
a.gp().h(0,this.gZ())
u=new D.I("camera",t,this.a,this,[X.bL])
u.b=!0
this.a_(u)}},
sbb:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gp().U(0,this.gZ())
t=this.b
this.b=b
b.gp().h(0,this.gZ())
u=new D.I("target",t,this.b,this,[X.cF])
u.b=!0
this.a_(u)}},
sbc:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gp().U(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gZ())
u=new D.I("technique",t,this.c,this,[O.bC])
u.b=!0
this.a_(u)}},
gp:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
ab:function(a){var u
a.cO(this.c)
this.b.a0(a)
this.a.a0(a)
u=this.c
if(u!=null)u.an(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.an(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.ab(a)
this.a.toString
a.cy.aE()
a.db.aE()
this.b.toString
a.cN()},
sfq:function(a,b){this.d=H.m(b,"$ia0",[E.af],"$aa0")},
$iav:1}
M.av.prototype={}
A.de.prototype={}
A.fi.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jo:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dV(r.a,r.c)}},
dS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dT(r.a,r.c)}}}
A.dJ.prototype={
eY:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bg("")
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
a6.ix(u)
a6.iE(u)
a6.iy(u)
a6.iM(u)
a6.iN(u)
a6.iG(u)
a6.iR(u)
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
u=new P.bg("")
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
q.iB(u)
q.iw(u)
q.iz(u)
q.iC(u)
q.iK(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iI(u)
q.iJ(u)}q.iF(u)
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
k=H.c([],[P.f])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iA(u)
q.iH(u)
q.iL(u)
q.iO(u)
q.iP(u)
q.iQ(u)
q.iD(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.f])
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
this.eh(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$iap")
if(t)this.dy=H.h(this.y.n(0,"objMat"),"$iap")
if(r)this.fr=H.h(this.y.n(0,"viewObjMat"),"$iap")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$iap")
if(a6.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$icL")
if(a6.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$iap")
if(a6.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$iap")
this.sfm(H.c([],[A.ap]))
t=a6.at
if(t>0){this.k4=H.j(this.y.n(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.h(g,"$iap"))}}t=a6.a
if(t!==C.c){this.r2=H.h(this.y.n(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.h(this.y.n(0,"emissionTxt"),"$iah")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iM")
break
case C.d:this.ry=H.h(this.y.n(0,"emissionTxt"),"$iad")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iM")
break}}t=a6.b
if(t!==C.c){this.x2=H.h(this.y.n(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.h(this.y.n(0,"ambientTxt"),"$iah")
this.at=H.h(this.y.n(0,"nullAmbientTxt"),"$iM")
break
case C.d:this.y2=H.h(this.y.n(0,"ambientTxt"),"$iad")
this.at=H.h(this.y.n(0,"nullAmbientTxt"),"$iM")
break}}t=a6.c
if(t!==C.c){this.al=H.h(this.y.n(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.bp=H.h(this.y.n(0,"diffuseTxt"),"$iah")
this.bq=H.h(this.y.n(0,"nullDiffuseTxt"),"$iM")
break
case C.d:this.dW=H.h(this.y.n(0,"diffuseTxt"),"$iad")
this.bq=H.h(this.y.n(0,"nullDiffuseTxt"),"$iM")
break}}t=a6.d
if(t!==C.c){this.br=H.h(this.y.n(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.dX=H.h(this.y.n(0,"invDiffuseTxt"),"$iah")
this.bs=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iM")
break
case C.d:this.dY=H.h(this.y.n(0,"invDiffuseTxt"),"$iad")
this.bs=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iM")
break}}t=a6.e
if(t!==C.c){this.bv=H.h(this.y.n(0,"shininess"),"$iY")
this.bt=H.h(this.y.n(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.dZ=H.h(this.y.n(0,"specularTxt"),"$iah")
this.bu=H.h(this.y.n(0,"nullSpecularTxt"),"$iM")
break
case C.d:this.e_=H.h(this.y.n(0,"specularTxt"),"$iad")
this.bu=H.h(this.y.n(0,"nullSpecularTxt"),"$iM")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.e:this.e0=H.h(this.y.n(0,"bumpTxt"),"$iah")
this.bw=H.h(this.y.n(0,"nullBumpTxt"),"$iM")
break
case C.d:this.e1=H.h(this.y.n(0,"bumpTxt"),"$iad")
this.bw=H.h(this.y.n(0,"nullBumpTxt"),"$iM")
break}if(a6.dy){this.e2=H.h(this.y.n(0,"envSampler"),"$iad")
this.e3=H.h(this.y.n(0,"nullEnvTxt"),"$iM")
t=a6.r
if(t!==C.c){this.bx=H.h(this.y.n(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.e4=H.h(this.y.n(0,"reflectTxt"),"$iah")
this.by=H.h(this.y.n(0,"nullReflectTxt"),"$iM")
break
case C.d:this.e5=H.h(this.y.n(0,"reflectTxt"),"$iad")
this.by=H.h(this.y.n(0,"nullReflectTxt"),"$iM")
break}}t=a6.x
if(t!==C.c){this.bz=H.h(this.y.n(0,"refraction"),"$iY")
this.bA=H.h(this.y.n(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.e6=H.h(this.y.n(0,"refractTxt"),"$iah")
this.bB=H.h(this.y.n(0,"nullRefractTxt"),"$iM")
break
case C.d:this.e7=H.h(this.y.n(0,"refractTxt"),"$iad")
this.bB=H.h(this.y.n(0,"nullRefractTxt"),"$iM")
break}}}t=a6.y
if(t!==C.c){this.bC=H.h(this.y.n(0,"alpha"),"$iY")
switch(t){case C.c:break
case C.f:break
case C.e:this.e8=H.h(this.y.n(0,"alphaTxt"),"$iah")
this.bD=H.h(this.y.n(0,"nullAlphaTxt"),"$iM")
break
case C.d:this.e9=H.h(this.y.n(0,"alphaTxt"),"$iad")
this.bD=H.h(this.y.n(0,"nullAlphaTxt"),"$iM")
break}}this.sf7(H.c([],[A.cK]))
this.sf8(H.c([],[A.cM]))
this.sf9(H.c([],[A.cN]))
this.sfa(H.c([],[A.cO]))
this.sfb(H.c([],[A.cP]))
this.sfc(H.c([],[A.cQ]))
if(a6.k2){t=a6.z
if(t>0){this.ea=H.j(this.y.n(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iJ")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iJ")
s=this.cv;(s&&C.a).h(s,new A.cK(h,g,f))}}t=a6.Q
if(t>0){this.eb=H.j(this.y.n(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iJ")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iJ")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iJ")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iY")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iY")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iY")
s=this.cw;(s&&C.a).h(s,new A.cM(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ec=H.j(this.y.n(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iJ")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iJ")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iJ")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iJ")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iY")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iY")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iY")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iY")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iY")
s=this.cz;(s&&C.a).h(s,new A.cN(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ed=H.j(this.y.n(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iJ")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iJ")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iJ")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iJ")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iJ")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iM")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iah")
s=this.cA;(s&&C.a).h(s,new A.cO(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ee=H.j(this.y.n(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iJ")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iJ")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$icL")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iJ")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iM")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iY")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iY")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iY")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iad")
s=this.cB;(s&&C.a).h(s,new A.cP(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ef=H.j(this.y.n(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iJ")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iJ")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iM")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iJ")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iY")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iY")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a2,"$iY")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a3,"$iY")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a4,"$iY")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a5,"$iah")
s=this.cC;(s&&C.a).h(s,new A.cQ(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aj:function(a,b,c){C.b.O(b.a,b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)C.b.O(b.a,b.d,1)
else{a.cX(c)
C.b.O(b.a,b.d,0)}},
sfm:function(a){this.r1=H.m(a,"$ib",[A.ap],"$ab")},
sf7:function(a){this.cv=H.m(a,"$ib",[A.cK],"$ab")},
sf8:function(a){this.cw=H.m(a,"$ib",[A.cM],"$ab")},
sf9:function(a){this.cz=H.m(a,"$ib",[A.cN],"$ab")},
sfa:function(a){this.cA=H.m(a,"$ib",[A.cO],"$ab")},
sfb:function(a){this.cB=H.m(a,"$ib",[A.cP],"$ab")},
sfc:function(a){this.cC=H.m(a,"$ib",[A.cQ],"$ab")}}
A.hh.prototype={
ix:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.at+"];\n"
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
iE:function(a){var u
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
iy:function(a){var u
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
iM:function(a){var u,t
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
iN:function(a){var u,t
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
iG:function(a){var u
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
iR:function(a){var u
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
if(0>=c.length)return H.k(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.bf(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iB:function(a){var u,t
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
iw:function(a){var u,t
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
iz:function(a){var u,t
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
iC:function(a){var u,t
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
iK:function(a){var u,t
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
iF:function(a){var u,t
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
iI:function(a){var u,t
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
iJ:function(a){var u,t
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
iA:function(a){var u,t
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
iH:function(a){var u,t
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
iL:function(a){var u,t
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
iO:function(a){var u,t,s
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
iP:function(a){var u,t,s
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
iQ:function(a){var u,t,s
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
iD:function(a){var u
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
i:function(a){return this.al}}
A.cK.prototype={}
A.cO.prototype={}
A.cM.prototype={}
A.cP.prototype={}
A.cN.prototype={}
A.cQ.prototype={}
A.cB.prototype={
d0:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eh:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.di(b,35633)
this.f=this.di(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dI(u,t,this.e)
C.b.dI(u,this.r,this.f)
C.b.jz(u,this.r)
if(!H.ki(C.b.bO(u,this.r,35714))){s=C.b.eG(u,this.r)
C.b.jf(u,this.r)
H.t(P.r("Failed to link shader: "+H.l(s)))}this.i6()
this.i8()},
a0:function(a){C.b.cR(a.a,this.r)
this.x.jo()},
di:function(a,b){var u,t,s
u=this.a
t=C.b.jd(u,b)
C.b.eP(u,t,a)
C.b.j6(u,t)
if(!H.ki(C.b.eI(u,t,35713))){s=C.b.eH(u,t)
C.b.jg(u,t)
throw H.i(P.r("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
i6:function(){var u,t,s,r,q,p
u=H.c([],[A.de])
t=this.a
s=H.a8(C.b.bO(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eA(t,this.r,r)
p=C.b.eC(t,this.r,q.name)
C.a.h(u,new A.de(t,q.name,p))}this.x=new A.fi(u)},
i8:function(){var u,t,s,r,q,p
u=H.c([],[A.e9])
t=this.a
s=H.a8(C.b.bO(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eB(t,this.r,r)
p=C.b.eJ(t,this.r,q.name)
C.a.h(u,this.je(q.type,q.size,q.name,p))}this.y=new A.iA(u)},
aN:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.M(u,t,b,c)
else return A.ka(u,t,b,a,c)},
fu:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.ka(u,t,b,a,c)},
fv:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ad(u,t,b,c)
else return A.ka(u,t,b,a,c)},
bm:function(a,b){return new P.es(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
je:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.iv(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.iy(this.a,this.r,c,d)
case 35667:return new A.iw(this.a,this.r,c,d)
case 35668:return new A.ix(this.a,this.r,c,d)
case 35669:return new A.iz(this.a,this.r,c,d)
case 35674:return new A.iB(this.a,this.r,c,d)
case 35675:return new A.cL(this.a,this.r,c,d)
case 35676:return new A.ap(this.a,this.r,c,d)
case 35678:return this.fu(b,c,d)
case 35680:return this.fv(b,c,d)
case 35670:throw H.i(this.bm("BOOL",c))
case 35671:throw H.i(this.bm("BOOL_VEC2",c))
case 35672:throw H.i(this.bm("BOOL_VEC3",c))
case 35673:throw H.i(this.bm("BOOL_VEC4",c))
default:throw H.i(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bO.prototype={
i:function(a){return this.b}}
A.dY.prototype={}
A.e9.prototype={}
A.iA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
js:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
L:function(){return this.js("\n")}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siu:function(a){this.e=H.m(a,"$ib",[P.C],"$ab")}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cL.prototype={
ai:function(a){var u=new Float32Array(H.d4(H.m(a,"$ib",[P.z],"$ab")))
C.b.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ap.prototype={
ai:function(a){var u=new Float32Array(H.d4(H.m(a,"$ib",[P.z],"$ab")))
C.b.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ad.prototype={
cX:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.O(t,s,0)
else C.b.O(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jB.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cH(u.b,b).cH(u.d.cH(u.c,b),c)
u=new V.ag(t.a,t.b,t.c)
if(!J.a6(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a4()}a.saU(t.v(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
s=new V.bf(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a6(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a4()}},
$S:36}
F.a4.prototype={
fl:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.eh()
if(t!=null)q=q.G(0,t)
if(s!=null)q=q.G(0,s)
if(r!=null)q=q.G(0,r)
if(q.ei())return
return q.v(0,Math.sqrt(q.D(q)))},
fp:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.J(0,t)
u=new V.Q(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.D(u)))
u=r.J(0,t)
u=new V.Q(u.a,u.b,u.c)
u=q.b7(u.v(0,Math.sqrt(u.D(u))))
return u.v(0,Math.sqrt(u.D(u)))},
cp:function(){if(this.d!=null)return!0
var u=this.fl()
if(u==null){u=this.fp()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
fk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.eh()
if(t!=null)q=q.G(0,t)
if(s!=null)q=q.G(0,s)
if(r!=null)q=q.G(0,r)
if(q.ei())return
return q.v(0,Math.sqrt(q.D(q)))},
fo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.O().a){u=m.J(0,p)
u=new V.Q(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.S(0)}else{g=(u-l.b)/i
u=m.J(0,p)
u=new V.ag(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).J(0,s)
u=new V.Q(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.S(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.D(u)))
u=f.b7(h)
u=u.v(0,Math.sqrt(u.D(u))).b7(f)
h=u.v(0,Math.sqrt(u.D(u)))}return h},
cn:function(){if(this.e!=null)return!0
var u=this.fk()
if(u==null){u=this.fo()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.i.ah(J.ar(u.e),0)+", "+C.i.ah(J.ar(this.b.e),0)+", "+C.i.ah(J.ar(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
L:function(){return this.w("")}}
F.bb.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.ah(J.ar(u.e),0)+", "+C.i.ah(J.ar(this.b.e),0)},
L:function(){return this.w("")}}
F.bB.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.ah(J.ar(u.e),0)},
L:function(){return this.w("")}}
F.dW.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
jD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a2()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.j9())}this.a.a2()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a2()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bB()
if(m.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.C(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a2()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.G()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mb(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a2()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.G()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a2()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cm(k,j,h)}u=this.e
if(u!=null)u.aG(0)},
aA:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aA()||!1
if(!this.a.aA())t=!1
u=this.e
if(u!=null)u.aG(0)
return t},
dM:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aK()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bl().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.da().a)!==0)++r
if((s&$.db().a)!==0)++r
if((s&$.c9().a)!==0)++r
if((s&$.bj().a)!==0)++r
q=a1.gcY(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.dh])
for(m=0,l=0;l<r;++l){k=a1.iY(l)
j=k.gcY(k)
C.a.Y(n,l,new Z.dh(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].jA(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.as(t,34962,e)
C.b.dL(t,34962,new Float32Array(H.d4(o)),35044)
C.b.as(t,34962,null)
d=new Z.ce(new Z.ei(34962,e),n,a1)
d.sfK(H.c([],[Z.bx]))
if(this.b.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a2()
C.a.h(c,b.e)}a=Z.kb(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(0,c.length,a))}if(this.c.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a2()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.a2()
C.a.h(c,b.e)}a=Z.kb(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(1,c.length,a))}if(this.d.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a2()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.a2()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.a2()
C.a.h(c,b.e)}a=Z.kb(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.w("   "))}return C.a.l(u,"\n")},
aT:function(a){var u=this.e
if(u!=null)u.C(a)},
a4:function(){return this.aT(null)},
$inu:1}
F.hU.prototype={
iT:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cm(t,q,p))}return u},
iU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
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
C.a.h(u,F.cm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cm(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cp())s=!1
return s},
co:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cn())s=!1
return s},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
L:function(){return this.w("")},
sfC:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hV.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].w(a+(""+s+". ")))}return C.a.l(u,"\n")},
L:function(){return this.w("")},
sfN:function(a){this.b=H.m(a,"$ib",[F.bb],"$ab")}}
F.hW.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
L:function(){return this.w("")},
scb:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
F.ax.prototype={
cr:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iJ(this.cx,s,p,u,t,r,q,a,o)},
j9:function(){return this.cr(null)},
saU:function(a){var u
if(!J.a6(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
jA:function(a){var u,t
if(a.t(0,$.aK())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bl())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bk())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bm())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bn())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.da())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.db())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c9()))return H.c([this.ch],[P.z])
else if(a.t(0,$.bj())){u=this.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
cp:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.eh()
this.d.P(0,new F.iR(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.aG(0)}return!0},
cn:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.eh()
this.d.P(0,new F.iQ(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.aG(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u,t,s
u=H.c([],[P.f])
C.a.h(u,C.i.ah(J.ar(this.e),0))
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
C.a.h(u,V.V(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
L:function(){return this.w("")}}
F.iR.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.G(0,u)}},
$S:8}
F.iQ.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.G(0,u)}},
$S:8}
F.iK.prototype={
a2:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
iV:function(a,b,c,d,e,f,g,h,i){var u=F.iJ(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bn:function(a,b,c,d,e,f){return this.iV(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cp()
return!0},
co:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cn()
return!0},
j2:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a6(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
this.a2()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
L:function(){return this.w("")},
siv:function(a){this.c=H.m(a,"$ib",[F.ax],"$ab")}}
F.iL.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a4]})
C.a.P(this.b,b)
C.a.P(this.c,new F.iM(this,b))
C.a.P(this.d,new F.iN(this,b))},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
L:function(){return this.w("")},
sfD:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
sfE:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
sfF:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iM.prototype={
$1:function(a){H.j(a,"$ia4")
if(!J.a6(a.a,this.a))this.b.$1(a)},
$S:8}
F.iN.prototype={
$1:function(a){var u
H.j(a,"$ia4")
u=this.a
if(!J.a6(a.a,u)&&!J.a6(a.b,u))this.b.$1(a)},
$S:8}
F.iO.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
L:function(){return this.w("")},
sfO:function(a){this.b=H.m(a,"$ib",[F.bb],"$ab")},
sfP:function(a){this.c=H.m(a,"$ib",[F.bb],"$ab")}}
F.iP.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
L:function(){return this.w("")},
scb:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
O.dI.prototype={
gp:function(){var u=this.dy
if(u==null){u=D.K()
this.dy=u}return u},
T:function(a){var u
H.j(a,"$ix")
u=this.dy
if(u!=null)u.C(a)},
b1:function(){return this.T(null)},
dw:function(a){H.j(a,"$ix")
this.a=null
this.T(a)},
hY:function(){return this.dw(null)},
h2:function(a,b){var u=V.am
u=new D.by(a,H.m(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.T(u)},
h4:function(a,b){var u=V.am
u=new D.bz(a,H.m(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.T(u)},
df:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a3(u.e.length+3,4)*4
s=C.h.a3(u.f.length+3,4)*4
r=C.h.a3(u.r.length+3,4)*4
q=C.h.a3(u.x.length+3,4)*4
p=C.h.a3(u.y.length+3,4)*4
o=C.h.a3(u.z.length+3,4)*4
n=C.h.a3(this.e.a.length+3,4)*4
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
a7=$.aK()
if(a0){b=$.bl()
a7=new Z.b5(a7.a|b.a)}if(a1){b=$.bk()
a7=new Z.b5(a7.a|b.a)}if(a2){b=$.bm()
a7=new Z.b5(a7.a|b.a)}if(a3){b=$.bn()
a7=new Z.b5(a7.a|b.a)}if(a5){b=$.bj()
a7=new Z.b5(a7.a|b.a)}return new A.hh(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
X:function(a,b){H.m(a,"$ib",[T.cH],"$ab")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.iI
if(s==null){s=new V.Q(0,0,1)
$.iI=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cQ(s)}}},
eq:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.df()
t=H.j(a2.fr.j(0,u.al),"$idJ")
if(t==null){t=A.mf(u,a2.a)
a2.dG(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bp
u=a3.e
if(!(u instanceof Z.ce)){a3.e=null
u=null}if(u==null||!u.d.t(0,r)){u=s.r1
if(u)a3.d.aA()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.co()
p.a.co()
p=p.e
if(p!=null)p.aG(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.j2()
o=o.e
if(o!=null)o.aG(0)}m=a3.d.dM(new Z.ej(a2.a),r)
m.aB($.aK()).e=this.a.Q.c
if(u)m.aB($.bl()).e=this.a.cx.c
if(q)m.aB($.bk()).e=this.a.ch.c
if(s.rx)m.aB($.bm()).e=this.a.cy.c
if(p)m.aB($.bn()).e=this.a.db.c
if(s.x1)m.aB($.bj()).e=this.a.dx.c
a3.e=m}u=T.cH
l=H.c([],[u])
this.a.a0(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga1(p)
q=q.dy
q.toString
q.ai(p.ac(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga1(p)
o=a2.dx
o=p.A(0,o.ga1(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ai(p.ac(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjT()
o=a2.dx
o=p.A(0,o.ga1(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ai(p.ac(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ai(C.r.ac(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ai(C.r.ac(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ai(C.r.ac(p,!0))}if(s.at>0){k=this.e.a.length
q=this.a.k4
C.b.O(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.k(o,j)
o=o[j]
p.toString
H.j(o,"$iam")
p=p.r1
if(j>=p.length)return H.k(p,j)
p=p[j]
i=new Float32Array(H.d4(H.m(o.ac(0,!0),"$ib",q,"$ab")))
C.b.ey(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.X(l,this.f.d)
q=this.a
p=this.f.d
q.aj(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.X(l,this.f.e)
q=this.a
p=this.f.e
q.ae(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.X(l,this.r.d)
q=this.a
p=this.r.d
q.aj(q.y1,q.at,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.X(l,this.r.e)
q=this.a
p=this.r.e
q.ae(q.y2,q.at,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.al
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.X(l,this.x.d)
q=this.a
p=this.x.d
q.aj(q.bp,q.bq,p)
p=this.a
q=this.x.f
p=p.al
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.X(l,this.x.e)
q=this.a
p=this.x.e
q.ae(q.dW,q.bq,p)
p=this.a
q=this.x.f
p=p.al
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.br
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.X(l,this.y.d)
q=this.a
p=this.y.d
q.aj(q.dX,q.bs,p)
p=this.a
q=this.y.f
p=p.br
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.X(l,this.y.e)
q=this.a
p=this.y.e
q.ae(q.dY,q.bs,p)
p=this.a
q=this.y.f
p=p.br
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bt
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bv
C.b.I(p.a,p.d,n)
break
case C.e:this.X(l,this.z.d)
q=this.a
p=this.z.d
q.aj(q.dZ,q.bu,p)
p=this.a
q=this.z.f
p=p.bt
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bv
C.b.I(q.a,q.d,n)
break
case C.d:this.X(l,this.z.e)
q=this.a
p=this.z.e
q.ae(q.e_,q.bu,p)
p=this.a
q=this.z.f
p=p.bt
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bv
C.b.I(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.ea
C.b.O(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cv
if(g>=o.length)return H.k(o,g)
d=o[g]
o=h.cQ(e.a)
n=o.a
c=o.b
b=o.c
b=o.v(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.q(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.q(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eb
C.b.O(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cw
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gba(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.be(e.gba(e))
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gak(e)
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gcj()
n=d.e
C.b.I(n.a,n.d,o)
o=e.gck()
n=d.f
C.b.I(n.a,n.d,o)
o=e.gcl()
n=d.r
C.b.I(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ec
C.b.O(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cz
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gba(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gct(e).kh()
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.be(e.gba(e))
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gak(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gkg()
n=d.f
C.b.I(n.a,n.d,o)
o=e.gkf()
n=d.r
C.b.I(n.a,n.d,o)
o=e.gcj()
n=d.x
C.b.I(n.a,n.d,o)
o=e.gck()
n=d.y
C.b.I(n.a,n.d,o)
o=e.gcl()
n=d.z
C.b.I(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ed
C.b.O(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.cA
if(g>=n.length)return H.k(n,g)
d=n[g]
n=e.gbd()
H.m(l,"$ib",o,"$ab")
if(!C.a.W(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gct(e)
c=d.d
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbM()
c=d.b
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbJ(e)
c=d.c
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=h.cQ(e.gct(e))
c=n.a
b=n.b
a=n.c
a=n.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.q(b.a,b.d,c,n,a)
a=e.gak(e)
n=d.f
C.b.q(n.a,n.d,a.a,a.b,a.c)
a=e.gbd()
n=a.gbG(a)
if(!n){n=d.x
C.b.O(n.a,n.d,1)}else{n=d.r
c=a.gbG(a)
b=n.a
n=n.d
if(!c)C.b.O(b,n,0)
else C.b.O(b,n,a.gjv(a))
n=d.x
C.b.O(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ee
C.b.O(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.y,p=q.length,o=[P.z],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.cB
if(g>=c.length)return H.k(c,g)
d=c[g]
c=e.gbd()
H.m(l,"$ib",n,"$ab")
if(!C.a.W(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.A(0,e.ga1(e))
c=e.ga1(e)
b=$.cy
if(b==null){b=new V.ag(0,0,0)
$.cy=b}b=c.be(b)
c=d.b
C.b.q(c.a,c.d,b.a,b.b,b.c)
c=$.cy
if(c==null){c=new V.ag(0,0,0)
$.cy=c}c=a0.be(c)
b=d.c
C.b.q(b.a,b.d,c.a,c.b,c.c)
c=a0.cF(0)
b=d.d
i=new Float32Array(H.d4(H.m(new V.dK(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ac(0,!0),"$ib",o,"$ab")))
C.b.ex(b.a,b.d,!1,i)
b=e.gak(e)
c=d.e
C.b.q(c.a,c.d,b.a,b.b,b.c)
b=e.gbd()
c=b.gbG(b)
if(!c){c=d.r
C.b.O(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.O(a1,c,0)
else C.b.O(a1,c,b.a)
c=d.r
C.b.O(c.a,c.d,0)}c=e.gcj()
b=d.x
C.b.I(b.a,b.d,c)
c=e.gck()
b=d.y
C.b.I(b.a,b.d,c)
c=e.gcl()
b=d.z
C.b.I(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ef
C.b.O(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gbd()
H.m(l,"$ib",u,"$ab")
if(!C.a.W(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gba(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gct(e)
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbM()
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbJ(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.be(e.gba(e))
n=d.f
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbd()
n=o.gbG(o)
if(!n){o=d.x
C.b.O(o.a,o.d,1)}else{n=d.r
c=o.gbG(o)
b=n.a
n=n.d
if(!c)C.b.O(b,n,0)
else C.b.O(b,n,o.gjv(o))
o=d.x
C.b.O(o.a,o.d,0)}o=e.gak(e)
n=d.y
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gki()
n=d.z
C.b.I(n.a,n.d,o)
o=e.gkj()
n=d.Q
C.b.I(n.a,n.d,o)
o=e.gcj()
n=d.ch
C.b.I(n.a,n.d,o)
o=e.gck()
n=d.cx
C.b.I(n.a,n.d,o)
o=e.gcl()
n=d.cy
C.b.I(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.e:this.X(l,this.Q.d)
u=this.a
q=this.Q.d
u.aj(u.e0,u.bw,q)
break
case C.d:this.X(l,this.Q.e)
u=this.a
q=this.Q.e
u.ae(u.e1,u.bw,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga1(q).cF(0)
a2.Q=q}u=u.id
u.toString
u.ai(q.ac(0,!0))}if(s.dy){this.X(l,this.ch)
u=this.a
q=this.ch
u.ae(u.e2,u.e3,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bx
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
break
case C.e:this.X(l,this.cx.d)
u=this.a
q=this.cx.d
u.aj(u.e4,u.by,q)
q=this.a
u=this.cx.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break
case C.d:this.X(l,this.cx.e)
u=this.a
q=this.cx.e
u.ae(u.e5,u.by,q)
q=this.a
u=this.cx.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bA
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bz
C.b.I(q.a,q.d,o)
break
case C.e:this.X(l,this.cy.d)
u=this.a
q=this.cy.d
u.aj(u.e6,u.bB,q)
q=this.a
u=this.cy.f
q=q.bA
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bz
C.b.I(u.a,u.d,o)
break
case C.d:this.X(l,this.cy.e)
u=this.a
q=this.cy.e
u.ae(u.e7,u.bB,q)
q=this.a
u=this.cy.f
q=q.bA
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bz
C.b.I(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bC
C.b.I(u.a,u.d,p)
break
case C.e:this.X(l,this.db.d)
u=this.a
p=this.db.d
u.aj(u.e8,u.bD,p)
p=this.a
u=this.db.f
p=p.bC
C.b.I(p.a,p.d,u)
break
case C.d:this.X(l,this.db.e)
u=this.a
p=this.db.e
u.ae(u.e9,u.bD,p)
p=this.a
u=this.db.f
p=p.bC
C.b.I(p.a,p.d,u)
break}u=a2.a
C.b.cu(u,3042)
C.b.j1(u,770,771)}for(j=0;j<l.length;++j)l[j].a0(a2)
u=a3.e
u.a0(a2)
u.ab(a2)
u.aH(a2)
if(q)C.b.jk(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.ci(u,33984+q.a)
C.b.az(u,34067,null)}}q=this.a
q.toString
C.b.cR(u,null)
q.x.dS()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.df().al},
sfn:function(a){this.e=H.m(a,"$ia0",[V.am],"$aa0")}}
O.hf.prototype={
i2:function(a){var u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.I(this.b,u,a,this,[P.z])
u.b=!0
this.a.T(u)}},
aq:function(){this.d_()
this.i2(1)}}
O.cr.prototype={
T:function(a){this.a.T(H.j(a,"$ix"))},
b1:function(){return this.T(null)},
aq:function(){},
i4:function(a){},
i5:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gp().U(0,this.gaP())
t=this.e
this.e=a
if(a!=null)a.gp().h(0,this.gaP())
u=new D.I(this.b+".textureCube",t,this.e,this,[T.c_])
u.b=!0
this.a.T(u)}},
saU:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.aq()
this.c=C.d
this.i4(null)
u=this.a
u.a=null
u.T(null)}this.i5(a)}}
O.hg.prototype={}
O.aU.prototype={
dA:function(a){var u,t
if(!J.a6(this.f,a)){u=this.f
this.f=a
t=new D.I(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.T(t)}},
aq:function(){this.d_()
this.dA(new V.a1(1,1,1))},
sak:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.aq()
u=this.a
u.a=null
u.T(null)}this.dA(b)}}
O.hi.prototype={
i3:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.I(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.T(u)}},
aq:function(){this.bS()
this.i3(1)}}
O.hj.prototype={
ce:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.I(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.T(u)}},
aq:function(){this.bS()
this.ce(100)}}
O.dX.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
T:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.C(a)},
b1:function(){return this.T(null)},
eq:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.j(a.fr.j(0,"Skybox"),"$idY")
if(u==null){t=a.a
u=new A.dY(t,"Skybox")
u.d0(t,"Skybox")
u.eh(0,$.mv,$.mu)
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"fov"),"$iY")
u.ch=H.h(u.y.j(0,"ratio"),"$iY")
u.cx=H.h(u.y.j(0,"boxClr"),"$iJ")
u.cy=H.h(u.y.j(0,"boxTxt"),"$iad")
u.db=H.h(u.y.j(0,"viewMat"),"$iap")
a.dG(u)}this.a=u}if(b.e==null){t=b.d.dM(new Z.ej(a.a),$.aK())
t.aB($.aK()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a0(a)}t=a.d
s=a.c
r=this.a
r.a0(a)
q=this.b
p=r.Q
C.b.I(p.a,p.d,q)
q=r.ch
C.b.I(q.a,q.d,t/s)
s=this.c
r.cy.cX(s)
s=this.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga1(s).cF(0)
r=r.db
r.toString
r.ai(s.ac(0,!0))
t=b.e
if(t instanceof Z.ce){t.a0(a)
t.ab(a)
t.aH(a)}else b.e=null
t=this.a
t.toString
C.b.cR(a.a,null)
t.x.dS()
t=this.c
if(t!=null)t.aH(a)}}
O.bC.prototype={}
T.cH.prototype={}
T.c_.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
a0:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.ci(u,33984+this.a)
C.b.az(u,34067,this.b)}},
aH:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.ci(u,33984+this.a)
C.b.az(u,34067,null)}}}
T.ig.prototype={
ej:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.az(o,34067,n)
C.b.bK(o,34067,10242,10497)
C.b.bK(o,34067,10243,10497)
C.b.bK(o,34067,10241,9729)
C.b.bK(o,34067,10240,9729)
C.b.az(o,34067,null)
m=new T.c_()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aO(m,n,u,34069,!1,!1)
this.aO(m,n,r,34070,!1,!1)
this.aO(m,n,t,34071,!1,!1)
this.aO(m,n,q,34072,!1,!1)
this.aO(m,n,s,34073,!1,!1)
this.aO(m,n,p,34074,!1,!1)
return m},
jB:function(a,b){return this.ej(a,b,!1,"")},
cI:function(a){return this.ej(a,".png",!1,"")},
aO:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.o
W.a7(u,"load",H.n(new T.ih(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
hZ:function(a,b,c){var u,t,s,r
b=V.kr(b,2)
u=V.kr(a.width,2)
t=V.kr(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jX(null,null)
s.width=u
s.height=t
r=H.j(C.p.eE(s,"2d"),"$ibN")
r.imageSmoothingEnabled=!1;(r&&C.y).jm(r,a,0,0,s.width,s.height)
return P.mZ(C.y.fJ(r,0,0,s.width,s.height))}}}
T.ih.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.hZ(this.b,u.c,this.c)
s=u.a
C.b.az(s,34067,this.d)
C.b.jS(s,37440,this.e?1:0)
C.b.k5(s,this.f,0,6408,6408,5121,t)
C.b.az(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.jn()}++u.e},
$S:27}
V.b8.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"},
$ias:1}
V.as.prototype={}
V.dH.prototype={
aD:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aD(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.m(a,"$ib",[V.as],"$ab")},
$ias:1}
V.an.prototype={
aD:function(a,b){return!this.eV(0,b)},
i:function(a){return"!["+this.cZ(0)+"]"}}
V.hJ.prototype={
aD:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.k6(this.a)
t=H.k6(this.b)
return u+".."+t},
$ias:1}
V.hT.prototype={
f_:function(a){var u,t
if(a.a.length<=0)throw H.i(P.r("May not create a SetMatcher with zero characters."))
u=new H.aS([P.C,P.N])
for(t=new H.cq(a,a.gm(a),0,[H.aj(a,"v",0)]);t.u();)u.Y(0,t.d,!0)
this.si1(u)},
aD:function(a,b){return this.a.dQ(0,b)},
i:function(a){var u=this.a
return P.k8(new H.dD(u,[H.y(u,0)]),0,null)},
si1:function(a){this.a=H.m(a,"$iP",[P.C,P.N],"$aP")},
$ias:1}
V.cC.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cJ(this.a.k(0,b))
r.sa6(H.c([],[V.as]))
r.c=!1
C.a.h(this.c,r)
return r},
jp:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aD(0,a))return r}return},
i:function(a){return this.b},
siq:function(a){this.c=H.m(a,"$ib",[V.cJ],"$ab")}}
V.e7.prototype={
i:function(a){var u,t
u=H.kt(this.b,"\n","\\n")
t=H.kt(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cI.prototype={
aF:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
shV:function(a){var u=P.f
this.c=H.m(a,"$iP",[u,u],"$aP")}}
V.ik.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cC(this,b)
u.siq(H.c([],[V.cJ]))
u.d=null
this.a.Y(0,b,u)}return u},
M:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cI(this,a)
t=P.f
u.shV(new H.aS([t,t]))
this.b.Y(0,a,u)}return u},
ew:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e7])
t=this.c
s=[P.C]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.aM(a,o)
m=t.jp(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.k8(r,0,null)
throw H.i(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.k8(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e7(j==null?k.b:j,l,o)}++o}}},
sic:function(a){this.a=H.m(a,"$iP",[P.f,V.cC],"$aP")},
sii:function(a){this.b=H.m(a,"$iP",[P.f,V.cI],"$aP")}}
V.cJ.prototype={
i:function(a){return this.b.b+": "+this.cZ(0)}}
X.bL.prototype={$iaX:1}
X.fT.prototype={
gp:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
ao:function(a){var u=this.x
if(u!=null)u.C(a)},
sdO:function(a,b){var u
if(this.b){this.b=!1
u=new D.I("clearColor",!0,!1,this,[P.N])
u.b=!0
this.ao(u)}},
a0:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.j0(u,36160,null)
C.b.cu(u,2884)
C.b.cu(u,2929)
C.b.jj(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.G(t)
p=C.j.am(q*t)
q=r.b
if(typeof s!=="number")return H.G(s)
o=C.j.am(q*s)
q=C.j.am(r.c*t)
a.c=q
r=C.j.am(r.d*s)
a.d=r
C.b.kd(u,p,o,q,r)
C.b.j5(u,this.c)
if(this.b){r=this.a
C.b.j4(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.j3(u,n)}}
X.fZ.prototype={
gp:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
a0:function(a){var u
a.cy.bI(V.bU())
u=V.bU()
a.db.bI(u)},
aH:function(a){a.cy.aE()
a.db.aE()},
$iaX:1,
$ibL:1}
X.dQ.prototype={
gp:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
ao:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.C(a)},
fh:function(){return this.ao(null)},
a0:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aV(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bI(n)
u=$.kS
if(u==null){u=V.kU()
t=V.lb()
s=$.l8
if(s==null){s=new V.Q(0,0,-1)
$.l8=s}s=V.kN(u,t,s)
$.kS=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aV(0,a,this)
if(l!=null)m=l.A(0,m)}a.db.bI(m)},
aH:function(a){a.cy.aE()
a.db.aE()},
$iaX:1,
$ibL:1}
X.cF.prototype={}
V.bq.prototype={
bh:function(a){this.b=new P.fX(C.M)
this.c=null
this.sc0(H.c([],[[P.b,W.az]]))},
K:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.az]))
t=a.split("\n")
for(u=t.length,s=[W.az],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.ft(p,0,p.length)
m=n==null?p:n
C.k.eN(o,H.kt(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbE(this.d),o)}},
ep:function(a,b){var u,t,s,r
H.m(b,"$ib",[P.f],"$ab")
this.sc0(H.c([],[[P.b,W.az]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.bo()
this.c=t}for(t=t.ew(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bH(t[r])},
sc0:function(a){this.d=H.m(a,"$ib",[[P.b,W.az]],"$ab")}}
V.jR.prototype={
$1:function(a){H.j(a,"$ib2")
P.ks(C.j.ev(this.a.gjt(),2)+" fps")},
$S:40}
V.fy.prototype={
bH:function(a){switch(a.a){case"Class":this.K(a.b,"#551")
break
case"Comment":this.K(a.b,"#777")
break
case"Id":this.K(a.b,"#111")
break
case"Num":this.K(a.b,"#191")
break
case"Reserved":this.K(a.b,"#119")
break
case"String":this.K(a.b,"#171")
break
case"Symbol":this.K(a.b,"#616")
break
case"Type":this.K(a.b,"#B11")
break
case"Whitespace":this.K(a.b,"#111")
break}},
bo:function(){var u,t,s,r
u=V.il()
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
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b8())
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
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b8())
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
s=new V.an()
r=[V.as]
s.sa6(H.c([],r))
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
s=new V.an()
s.sa6(H.c([],r))
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
s.d=s.a.M("Num")
s=u.k(0,"Float")
s.d=s.a.M("Num")
s=u.k(0,"Sym")
s.d=s.a.M("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.M("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.M("String")
s=u.k(0,"EndComment")
s.d=s.a.M("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.M("Whitespace")
s=u.k(0,"Id")
t=s.a.M("Id")
s.d=t
s=[P.f]
t.aF(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aF(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aF(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fU.prototype={
bH:function(a){switch(a.a){case"Builtin":this.K(a.b,"#411")
break
case"Comment":this.K(a.b,"#777")
break
case"Id":this.K(a.b,"#111")
break
case"Num":this.K(a.b,"#191")
break
case"Preprocess":this.K(a.b,"#737")
break
case"Reserved":this.K(a.b,"#119")
break
case"Symbol":this.K(a.b,"#611")
break
case"Type":this.K(a.b,"#171")
break
case"Whitespace":this.K(a.b,"#111")
break}},
bo:function(){var u,t,s,r
u=V.il()
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
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.b8())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.an()
r=[V.as]
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.an()
t.sa6(H.c([],r))
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
t.d=t.a.M("Num")
t=u.k(0,"Float")
t.d=t.a.M("Num")
t=u.k(0,"Sym")
t.d=t.a.M("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.M("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.M("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.M("Whitespace")
t=u.k(0,"Id")
s=t.a.M("Id")
t.d=s
t=[P.f]
s.aF(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aF(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aF(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fV.prototype={
bH:function(a){switch(a.a){case"Attr":this.K(a.b,"#911")
this.K("=","#111")
break
case"Id":this.K(a.b,"#111")
break
case"Other":this.K(a.b,"#111")
break
case"Reserved":this.K(a.b,"#119")
break
case"String":this.K(a.b,"#171")
break
case"Symbol":this.K(a.b,"#616")
break}},
bo:function(){var u,t,s
u=V.il()
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
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.b8())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b8())
t=u.k(0,"Other").l(0,"Other")
s=new V.an()
s.sa6(H.c([],[V.as]))
C.a.h(t.a,s)
t=V.u(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.M("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.M("String")
t=u.k(0,"Id")
s=t.a.M("Id")
t.d=s
s.aF(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.M("Attr")
s=u.k(0,"Other")
s.d=s.a.M("Other")
return u}}
V.hE.prototype={
ep:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sc0(H.c([],[[P.b,W.az]]))
this.K(C.a.l(b,"\n"),"#111")},
bH:function(a){},
bo:function(){return}}
V.hX.prototype={
f0:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).B(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.B(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.B(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.B(q,p)}o=u.createElement("div")
this.a=o
C.k.B(q,o)
this.b=null
o=W.o
W.a7(u,"scroll",H.n(new V.hZ(s),{func:1,ret:-1,args:[o]}),!1,o)},
dF:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.i7()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ew(C.a.jy(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.B(t,o)
break
case"Link":n=p.b
if(H.nj(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.B(t,l)}else{k=P.lg(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
eD:function(a){var u,t,s,r
u=new V.fy("dart")
u.bh("dart")
t=new V.fU("glsl")
t.bh("glsl")
s=new V.fV("html")
s.bh("html")
r=C.a.jq(H.c([u,t,s],[V.bq]),new V.i_(a))
if(r!=null)return r
u=new V.hE("plain")
u.bh("plain")
return u},
dE:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.f],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kn(r).bQ(r,"+")){C.a.Y(a7,s,C.i.bf(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bQ(r,"-")){C.a.Y(a7,s,C.i.bf(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eD(a5)
q.ep(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.lg(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kz(null)
i.href="#"+m
i.textContent=a4
C.k.B(j,i)
C.v.B(k,j)
C.m.B(l,k)
C.o.B(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.v.B(a,r[a0])
C.m.B(e,d)
C.m.B(e,c)
C.m.B(e,a)
C.o.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gR(r);a3.u();)C.v.B(c,a3.gF(a3))
C.m.B(e,d)
C.m.B(e,c)
C.o.B(n,e)}},
i7:function(){var u,t,s,r
if(this.b!=null)return
u=V.il()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.an()
r=[V.as]
s.sa6(H.c([],r))
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
s=new V.an()
s.sa6(H.c([],r))
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
s=new V.an()
s.sa6(H.c([],r))
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
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b8())
s=u.k(0,"Other").l(0,"Other")
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.M("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.M("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.M("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.M("Link")
s=u.k(0,"Other")
s.d=s.a.M("Other")
this.b=u}}
V.hZ.prototype={
$1:function(a){P.l3(C.q,new V.hY(this.a))},
$S:27}
V.hY.prototype={
$0:function(){var u,t,s
u=C.j.am(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.i_.prototype={
$1:function(a){return H.j(a,"$ibq").a===this.a},
$S:41}
X.jO.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dE("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dE("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.eS=u.i
u=J.dA.prototype
u.eU=u.i
u=P.d.prototype
u.eT=u.bN
u=W.T.prototype
u.bR=u.af
u=W.eN.prototype
u.eW=u.ar
u=O.cr.prototype
u.d_=u.aq
u=O.aU.prototype
u.bS=u.aq
u=V.dH.prototype
u.eV=u.aD
u.cZ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mT","mB",9)
u(P,"mU","mC",9)
u(P,"mV","mD",9)
t(P,"lp","mS",3)
s(W,"n3",4,null,["$4"],["mF"],21,0)
s(W,"n4",4,null,["$4"],["mG"],21,0)
var m
r(m=E.af.prototype,"gen",0,0,null,["$1","$0"],["eo","jJ"],0,0)
r(m,"gel",0,0,null,["$1","$0"],["em","jG"],0,0)
q(m,"gjE","jF",5)
q(m,"gjH","jI",5)
r(m=E.e6.prototype,"gd2",0,0,null,["$1","$0"],["d4","d3"],0,0)
p(m,"gjW","er",3)
o(m=X.ed.prototype,"ghh","hi",10)
o(m,"gh5","h6",10)
o(m,"ghb","hc",4)
o(m,"ghl","hm",20)
o(m,"ghj","hk",20)
o(m,"ghp","hq",4)
o(m,"ght","hu",4)
o(m,"ghf","hg",4)
o(m,"ghr","hs",4)
o(m,"ghd","he",4)
o(m,"ghv","hw",43)
o(m,"ghx","hy",10)
o(m,"ghN","hO",11)
o(m,"ghJ","hK",11)
o(m,"ghL","hM",11)
r(D.bs.prototype,"gf5",0,0,null,["$1","$0"],["av","f6"],0,0)
r(m=D.dC.prototype,"gdq",0,0,null,["$1","$0"],["dr","hn"],0,0)
o(m,"ghz","hA",30)
q(m,"gh_","h0",22)
q(m,"ghD","hE",22)
n(V.U.prototype,"gm","cG",23)
n(V.Q.prototype,"gm","cG",23)
r(m=U.co.prototype,"gaL",0,0,null,["$1","$0"],["N","a5"],0,0)
q(m,"gfY","fZ",24)
q(m,"ghB","hC",24)
r(m=U.ee.prototype,"gaL",0,0,null,["$1","$0"],["N","a5"],0,0)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gc7","c8",1)
r(m=U.ef.prototype,"gaL",0,0,null,["$1","$0"],["N","a5"],0,0)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gc7","c8",1)
o(m,"gfR","fS",1)
o(m,"gfT","fU",1)
o(m,"gio","ip",1)
o(m,"gil","im",1)
o(m,"gij","ik",1)
o(U.eg.prototype,"gfW","fX",1)
r(m=M.dj.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"ghF","hG",25)
q(m,"ghH","hI",25)
r(M.dl.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
r(m=M.dr.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"gh7","h8",5)
q(m,"gh9","ha",5)
r(m=O.dI.prototype,"gaP",0,0,null,["$1","$0"],["T","b1"],0,0)
r(m,"ghX",0,0,null,["$1","$0"],["dw","hY"],0,0)
q(m,"gh1","h2",26)
q(m,"gh3","h4",26)
r(O.cr.prototype,"gaP",0,0,null,["$1","$0"],["T","b1"],0,0)
r(O.dX.prototype,"gaP",0,0,null,["$1","$0"],["T","b1"],0,0)
r(X.dQ.prototype,"gfg",0,0,null,["$1","$0"],["ao","fh"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.k4,J.a,J.ak,P.eA,P.d,H.cq,P.aQ,H.bQ,H.ec,H.hK,H.ir,P.bu,H.cf,H.eS,P.a9,H.h6,H.h7,H.h2,P.eY,P.b7,P.aC,P.ek,P.i6,P.cE,P.i7,P.b2,P.ae,P.jA,P.jo,P.c0,P.ez,P.v,P.cg,P.fY,P.jy,P.N,P.al,P.a2,P.bt,P.hC,P.e_,P.es,P.fS,P.bv,P.b,P.P,P.L,P.ao,P.f,P.bg,W.fu,W.bE,W.B,W.dO,W.eN,W.jt,W.ds,W.au,W.jn,W.f3,P.f2,P.ji,O.a0,O.cs,E.fn,E.af,E.hL,E.e6,Z.ei,Z.ej,Z.ce,Z.bx,Z.b5,D.fq,D.bP,D.x,X.di,X.dB,X.h4,X.h9,X.at,X.hq,X.im,X.ed,D.bs,D.a3,D.dR,D.dZ,D.e3,D.e4,D.e5,V.a1,V.aF,V.fI,V.dK,V.am,V.a5,V.ag,V.bf,V.dU,V.U,V.Q,U.ee,U.ef,U.eg,M.dl,M.dr,M.av,A.de,A.fi,A.hh,A.cK,A.cO,A.cM,A.cP,A.cN,A.cQ,A.bO,A.e9,A.iA,F.a4,F.bb,F.bB,F.dW,F.hU,F.hV,F.hW,F.ax,F.iK,F.iL,F.iO,F.iP,O.bC,O.cr,T.ig,V.b8,V.as,V.dH,V.hJ,V.hT,V.cC,V.e7,V.cI,V.ik,X.bL,X.cF,X.fZ,X.dQ,V.bq,V.hX])
s(J.a,[J.h1,J.dy,J.dA,J.aR,J.dz,J.bS,H.cw,W.e,W.fg,W.df,W.bN,W.aM,W.aN,W.S,W.em,W.fz,W.fA,W.dn,W.eo,W.dq,W.eq,W.fC,W.o,W.et,W.aP,W.fW,W.ev,W.bw,W.dF,W.hk,W.eB,W.eC,W.aW,W.eD,W.eG,W.aY,W.eK,W.dT,W.eM,W.b_,W.eO,W.b0,W.eT,W.aG,W.eW,W.ij,W.b3,W.eZ,W.ip,W.iF,W.f4,W.f6,W.f8,W.fa,W.fc,P.ba,P.ex,P.bd,P.eI,P.hH,P.eU,P.bh,P.f0,P.fj,P.el,P.dg,P.dt,P.dS,P.bY,P.dV,P.e2,P.ea,P.eQ])
s(J.dA,[J.hD,J.cR,J.bA])
t(J.k3,J.aR)
s(J.dz,[J.dx,J.dw])
t(P.h8,P.eA)
s(P.h8,[H.eb,W.j_,W.ai,P.fO])
t(H.q,H.eb)
s(P.d,[H.fF,H.hc,H.cS])
s(H.fF,[H.bT,H.dD])
s(P.aQ,[H.hd,H.iU])
t(H.he,H.bT)
s(P.bu,[H.hz,H.h3,H.iD,H.it,H.fp,H.hR,P.dP,P.aE,P.iE,P.iC,P.cD,P.fs,P.fx])
s(H.cf,[H.jS,H.ic,H.jK,H.jL,H.jM,P.iW,P.iV,P.iX,P.iY,P.jx,P.jw,P.j5,P.j9,P.j6,P.j7,P.j8,P.jc,P.jd,P.jb,P.ja,P.i8,P.i9,P.jE,P.jl,P.jk,P.jm,P.hb,P.fD,P.fE,W.fG,W.hm,W.ho,W.hQ,W.i5,W.j4,W.hy,W.hx,W.jp,W.jq,W.jv,W.jz,P.jG,P.fP,P.fQ,P.fl,E.hM,E.hN,E.hO,E.ii,D.fK,D.fL,F.jB,F.iR,F.iQ,F.iM,F.iN,T.ih,V.jR,V.hZ,V.hY,V.i_,X.jO])
s(H.ic,[H.i3,H.cc])
t(P.ha,P.a9)
s(P.ha,[H.aS,W.iZ])
t(H.dL,H.cw)
s(H.dL,[H.cW,H.cY])
t(H.cX,H.cW)
t(H.cv,H.cX)
t(H.cZ,H.cY)
t(H.dM,H.cZ)
s(H.dM,[H.hr,H.hs,H.ht,H.hu,H.hv,H.dN,H.hw])
t(P.jj,P.jA)
t(P.jh,P.jo)
t(P.ch,P.i7)
t(P.fH,P.cg)
s(P.ch,[P.fX,P.iH])
t(P.iG,P.fH)
s(P.a2,[P.z,P.C])
s(P.aE,[P.bX,P.h_])
s(W.e,[W.D,W.fN,W.aZ,W.d_,W.b1,W.aH,W.d1,W.iT,W.cT,P.fm,P.bK])
s(W.D,[W.T,W.bp,W.ck,W.cU])
s(W.T,[W.w,P.p])
s(W.w,[W.dd,W.fh,W.cb,W.bo,W.bM,W.az,W.fR,W.du,W.cp,W.ct,W.hS,W.bZ,W.e0,W.e1,W.ib,W.cG])
s(W.aM,[W.ci,W.fv,W.fw])
t(W.ft,W.aN)
t(W.cj,W.em)
t(W.ep,W.eo)
t(W.dp,W.ep)
t(W.er,W.eq)
t(W.fB,W.er)
t(W.aO,W.df)
t(W.eu,W.et)
t(W.fM,W.eu)
t(W.ew,W.ev)
t(W.bR,W.ew)
t(W.dv,W.ck)
t(W.bD,W.o)
s(W.bD,[W.aT,W.aa,W.aI])
t(W.hl,W.eB)
t(W.hn,W.eC)
t(W.eE,W.eD)
t(W.hp,W.eE)
t(W.eH,W.eG)
t(W.cx,W.eH)
t(W.eL,W.eK)
t(W.hF,W.eL)
t(W.hP,W.eM)
t(W.d0,W.d_)
t(W.i0,W.d0)
t(W.eP,W.eO)
t(W.i1,W.eP)
t(W.i4,W.eT)
t(W.eX,W.eW)
t(W.id,W.eX)
t(W.d2,W.d1)
t(W.ie,W.d2)
t(W.f_,W.eZ)
t(W.io,W.f_)
t(W.iS,W.ct)
t(W.b6,W.aa)
t(W.f5,W.f4)
t(W.j0,W.f5)
t(W.en,W.dq)
t(W.f7,W.f6)
t(W.je,W.f7)
t(W.f9,W.f8)
t(W.eF,W.f9)
t(W.fb,W.fa)
t(W.jr,W.fb)
t(W.fd,W.fc)
t(W.js,W.fd)
t(W.j1,W.iZ)
t(W.j2,P.i6)
t(W.kc,W.j2)
t(W.j3,P.cE)
t(W.ju,W.eN)
t(P.ac,P.ji)
t(P.ey,P.ex)
t(P.h5,P.ey)
t(P.eJ,P.eI)
t(P.hA,P.eJ)
t(P.cA,P.p)
t(P.eV,P.eU)
t(P.ia,P.eV)
t(P.f1,P.f0)
t(P.iq,P.f1)
t(P.fk,P.el)
t(P.hB,P.bK)
t(P.eR,P.eQ)
t(P.i2,P.eR)
s(E.fn,[Z.dh,A.cB,T.cH])
s(D.x,[D.by,D.bz,D.I,X.hG])
s(X.hG,[X.dG,X.bc,X.cu,X.e8])
s(O.a0,[D.dC,U.co,M.dj])
s(D.fq,[U.fr,U.ab])
t(U.dk,U.ab)
s(A.cB,[A.dJ,A.dY])
s(A.e9,[A.M,A.iw,A.ix,A.iz,A.iu,A.Y,A.iv,A.J,A.iy,A.iB,A.cL,A.ap,A.ah,A.ad])
s(O.bC,[O.dI,O.dX])
s(O.cr,[O.hf,O.hg,O.aU])
s(O.aU,[O.hi,O.hj])
t(T.c_,T.cH)
s(V.dH,[V.an,V.cJ])
t(X.fT,X.cF)
s(V.bq,[V.fy,V.fU,V.fV,V.hE])
u(H.eb,H.ec)
u(H.cW,P.v)
u(H.cX,H.bQ)
u(H.cY,P.v)
u(H.cZ,H.bQ)
u(P.eA,P.v)
u(W.em,W.fu)
u(W.eo,P.v)
u(W.ep,W.B)
u(W.eq,P.v)
u(W.er,W.B)
u(W.et,P.v)
u(W.eu,W.B)
u(W.ev,P.v)
u(W.ew,W.B)
u(W.eB,P.a9)
u(W.eC,P.a9)
u(W.eD,P.v)
u(W.eE,W.B)
u(W.eG,P.v)
u(W.eH,W.B)
u(W.eK,P.v)
u(W.eL,W.B)
u(W.eM,P.a9)
u(W.d_,P.v)
u(W.d0,W.B)
u(W.eO,P.v)
u(W.eP,W.B)
u(W.eT,P.a9)
u(W.eW,P.v)
u(W.eX,W.B)
u(W.d1,P.v)
u(W.d2,W.B)
u(W.eZ,P.v)
u(W.f_,W.B)
u(W.f4,P.v)
u(W.f5,W.B)
u(W.f6,P.v)
u(W.f7,W.B)
u(W.f8,P.v)
u(W.f9,W.B)
u(W.fa,P.v)
u(W.fb,W.B)
u(W.fc,P.v)
u(W.fd,W.B)
u(P.ex,P.v)
u(P.ey,W.B)
u(P.eI,P.v)
u(P.eJ,W.B)
u(P.eU,P.v)
u(P.eV,W.B)
u(P.f0,P.v)
u(P.f1,W.B)
u(P.el,P.a9)
u(P.eQ,P.v)
u(P.eR,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bo.prototype
C.p=W.bM.prototype
C.y=W.bN.prototype
C.k=W.az.prototype
C.J=W.dn.prototype
C.L=W.du.prototype
C.z=W.dv.prototype
C.N=J.a.prototype
C.a=J.aR.prototype
C.O=J.dw.prototype
C.h=J.dx.prototype
C.r=J.dy.prototype
C.j=J.dz.prototype
C.i=J.bS.prototype
C.V=J.bA.prototype
C.Z=W.cx.prototype
C.D=J.hD.prototype
C.E=W.dT.prototype
C.b=P.bY.prototype
C.v=W.bZ.prototype
C.o=W.e0.prototype
C.m=W.e1.prototype
C.w=J.cR.prototype
C.F=W.b6.prototype
C.G=W.cT.prototype
C.H=new P.hC()
C.I=new P.iH()
C.l=new P.jj()
C.c=new A.bO(0,"ColorSourceType.None")
C.f=new A.bO(1,"ColorSourceType.Solid")
C.e=new A.bO(2,"ColorSourceType.Texture2D")
C.d=new A.bO(3,"ColorSourceType.TextureCube")
C.q=new P.bt(0)
C.K=new P.bt(5e6)
C.M=new P.fY("element",!0,!1,!1,!1)
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
C.x=new P.iG(!1)})();(function staticFields(){$.aL=0
$.cd=null
$.kA=null
$.ke=!1
$.ls=null
$.ln=null
$.lx=null
$.jH=null
$.jN=null
$.ko=null
$.c1=null
$.d5=null
$.d6=null
$.kf=!1
$.Z=C.l
$.b9=null
$.k_=null
$.kH=null
$.kG=null
$.kO=null
$.kT=null
$.cy=null
$.kZ=null
$.l7=null
$.la=null
$.l9=null
$.iI=null
$.l8=null
$.mv="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mu="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kS=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nr","lA",function(){return H.lr("_$dart_dartClosure")})
u($,"ns","ku",function(){return H.lr("_$dart_js")})
u($,"nw","lB",function(){return H.b4(H.is({
toString:function(){return"$receiver$"}}))})
u($,"nx","lC",function(){return H.b4(H.is({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ny","lD",function(){return H.b4(H.is(null))})
u($,"nz","lE",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nC","lH",function(){return H.b4(H.is(void 0))})
u($,"nD","lI",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nB","lG",function(){return H.b4(H.l5(null))})
u($,"nA","lF",function(){return H.b4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nF","lK",function(){return H.b4(H.l5(void 0))})
u($,"nE","lJ",function(){return H.b4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nW","kv",function(){return P.mA()})
u($,"o_","dc",function(){return[]})
u($,"nZ","lP",function(){return P.mq("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nX","lO",function(){return P.kL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nY","kw",function(){return P.kK(P.f,P.bv)})
u($,"nP","lN",function(){return Z.aB(0)})
u($,"nJ","lL",function(){return Z.aB(511)})
u($,"nR","aK",function(){return Z.aB(1)})
u($,"nQ","bl",function(){return Z.aB(2)})
u($,"nL","bk",function(){return Z.aB(4)})
u($,"nS","bm",function(){return Z.aB(8)})
u($,"nT","bn",function(){return Z.aB(16)})
u($,"nM","da",function(){return Z.aB(32)})
u($,"nN","db",function(){return Z.aB(64)})
u($,"nO","lM",function(){return Z.aB(96)})
u($,"nU","c9",function(){return Z.aB(128)})
u($,"nK","bj",function(){return Z.aB(256)})
u($,"nq","lz",function(){return new V.fI(1e-9)})
u($,"np","O",function(){return $.lz()})})()
var v={mangledGlobalNames:{C:"int",z:"double",a2:"num",f:"String",N:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.C,[P.d,E.af]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.L,args:[D.x]},{func:1,ret:P.L,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.f,args:[P.C]},{func:1,ret:P.N,args:[W.D]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.au]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.N,args:[W.T,P.f,P.f,W.bE]},{func:1,ret:-1,args:[P.C,[P.d,D.a3]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.C,[P.d,U.ab]]},{func:1,ret:-1,args:[P.C,[P.d,M.av]]},{func:1,ret:-1,args:[P.C,[P.d,V.am]]},{func:1,ret:P.L,args:[W.o]},{func:1,args:[W.o]},{func:1,ret:W.T,args:[W.D]},{func:1,ret:P.N,args:[[P.d,D.a3]]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.ao]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.L,args:[P.a2]},{func:1,args:[P.f]},{func:1,ret:P.L,args:[F.ax,P.z,P.z]},{func:1,args:[,P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.L,args:[P.b2]},{func:1,ret:P.N,args:[V.bq]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:-1,args:[W.b6]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cw,ArrayBufferView:H.cw,Float32Array:H.cv,Float64Array:H.cv,Int16Array:H.hr,Int32Array:H.hs,Int8Array:H.ht,Uint16Array:H.hu,Uint32Array:H.hv,Uint8ClampedArray:H.dN,CanvasPixelArray:H.dN,Uint8Array:H.hw,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fg,HTMLAnchorElement:W.dd,HTMLAreaElement:W.fh,HTMLBaseElement:W.cb,Blob:W.df,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bM,CanvasRenderingContext2D:W.bN,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.ci,CSSUnitValue:W.ci,CSSPerspective:W.ft,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aM,CSSKeywordValue:W.aM,CSSPositionValue:W.aM,CSSResourceValue:W.aM,CSSURLImageValue:W.aM,CSSStyleValue:W.aM,CSSMatrixComponent:W.aN,CSSRotation:W.aN,CSSScale:W.aN,CSSSkew:W.aN,CSSTranslation:W.aN,CSSTransformComponent:W.aN,CSSTransformValue:W.fv,CSSUnparsedValue:W.fw,DataTransferItemList:W.fz,HTMLDivElement:W.az,XMLDocument:W.ck,Document:W.ck,DOMException:W.fA,DOMImplementation:W.dn,ClientRectList:W.dp,DOMRectList:W.dp,DOMRectReadOnly:W.dq,DOMStringList:W.fB,DOMTokenList:W.fC,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aO,FileList:W.fM,FileWriter:W.fN,HTMLFormElement:W.fR,Gamepad:W.aP,HTMLHeadElement:W.du,History:W.fW,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,HTMLDocument:W.dv,ImageData:W.bw,HTMLImageElement:W.cp,KeyboardEvent:W.aT,Location:W.dF,HTMLAudioElement:W.ct,HTMLMediaElement:W.ct,MediaList:W.hk,MIDIInputMap:W.hl,MIDIOutputMap:W.hn,MimeType:W.aW,MimeTypeArray:W.hp,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,DocumentFragment:W.D,ShadowRoot:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cx,RadioNodeList:W.cx,Plugin:W.aY,PluginArray:W.hF,Range:W.dT,RTCStatsReport:W.hP,HTMLSelectElement:W.hS,SourceBuffer:W.aZ,SourceBufferList:W.i0,SpeechGrammar:W.b_,SpeechGrammarList:W.i1,SpeechRecognitionResult:W.b0,Storage:W.i4,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.bZ,HTMLTableDataCellElement:W.bZ,HTMLTableHeaderCellElement:W.bZ,HTMLTableElement:W.e0,HTMLTableRowElement:W.e1,HTMLTableSectionElement:W.ib,HTMLTemplateElement:W.cG,TextTrack:W.b1,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.id,TextTrackList:W.ie,TimeRanges:W.ij,Touch:W.b3,TouchEvent:W.aI,TouchList:W.io,TrackDefaultList:W.ip,CompositionEvent:W.bD,FocusEvent:W.bD,TextEvent:W.bD,UIEvent:W.bD,URL:W.iF,HTMLVideoElement:W.iS,VideoTrackList:W.iT,WheelEvent:W.b6,Window:W.cT,DOMWindow:W.cT,Attr:W.cU,CSSRuleList:W.j0,ClientRect:W.en,DOMRect:W.en,GamepadList:W.je,NamedNodeMap:W.eF,MozNamedAttrMap:W.eF,SpeechRecognitionResultList:W.jr,StyleSheetList:W.js,SVGLength:P.ba,SVGLengthList:P.h5,SVGNumber:P.bd,SVGNumberList:P.hA,SVGPointList:P.hH,SVGScriptElement:P.cA,SVGStringList:P.ia,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bh,SVGTransformList:P.iq,AudioBuffer:P.fj,AudioParamMap:P.fk,AudioTrackList:P.fm,AudioContext:P.bK,webkitAudioContext:P.bK,BaseAudioContext:P.bK,OfflineAudioContext:P.hB,WebGLBuffer:P.dg,WebGLFramebuffer:P.dt,WebGLProgram:P.dS,WebGL2RenderingContext:P.bY,WebGLShader:P.dV,WebGLTexture:P.e2,WebGLUniformLocation:P.ea,SQLResultSetRowList:P.i2})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lu,[])
else X.lu([])})})()
//# sourceMappingURL=test.dart.js.map
