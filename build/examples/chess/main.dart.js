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
a[c]=function(){a[c]=function(){H.mb(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.j3(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iH:function iH(a){this.a=a},
kS:function(){return new P.cj("No element")},
kT:function(){return new P.cj("Too few elements")},
a0:function a0(a){this.a=a},
ez:function ez(){},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f8:function f8(a,b,c){this.a=a
this.b=b
this.$ti=c},
f9:function f9(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(){},
dH:function dH(){},
dG:function dG(){},
bV:function(a){var u,t
u=H.Q(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lV:function(a){return v.types[H.a_(a)]},
m_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$ib3},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.h(H.at(a))
return u},
lh:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eO(u)
t=u[0]
s=u[1]
return new H.fw(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cg:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
le:function(a,b){var u,t
if(typeof a!=="string")H.o(H.at(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.Q(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
ld:function(a){var u,t
if(typeof a!=="string")H.o(H.at(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.iv(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bJ:function(a){return H.l5(a)+H.j1(H.bv(a),0,null)},
l5:function(a){var u,t,s,r,q,p,o,n,m
u=J.P(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.F||!!u.$ibM){p=C.v(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bV(r.length>1&&C.j.aQ(r,0)===36?C.j.c1(r,1):r)},
jG:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lg:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.at(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.bv(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.at(r))}return H.jG(u)},
jH:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.at(s))
if(s<0)throw H.h(H.at(s))
if(s>65535)return H.lg(a)}return H.jG(a)},
lf:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bv(u,10))>>>0,56320|u&1023)}throw H.h(P.aB(a,0,1114111,null,null))},
bI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lc:function(a){var u=H.bI(a).getFullYear()+0
return u},
la:function(a){var u=H.bI(a).getMonth()+1
return u},
l6:function(a){var u=H.bI(a).getDate()+0
return u},
l7:function(a){var u=H.bI(a).getHours()+0
return u},
l9:function(a){var u=H.bI(a).getMinutes()+0
return u},
lb:function(a){var u=H.bI(a).getSeconds()+0
return u},
l8:function(a){var u=H.bI(a).getMilliseconds()+0
return u},
f:function(a){throw H.h(H.at(a))},
e:function(a,b){if(a==null)J.b0(a)
throw H.h(H.bu(a,b))},
bu:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
u=H.a_(J.b0(a))
if(!(b<0)){if(typeof u!=="number")return H.f(u)
t=b>=u}else t=!0
if(t)return P.c8(b,a,"index",null,u)
return P.fv(b,"index",null)},
lP:function(a,b,c){if(a>c)return new P.bK(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bK(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
at:function(a){return new P.aN(!0,a,null,null)},
lL:function(a){if(typeof a!=="number")throw H.h(H.at(a))
return a},
h:function(a){var u
if(a==null)a=new P.cd()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.km})
u.name=""}else u.toString=H.km
return u},
km:function(){return J.au(this.dartException)},
o:function(a){throw H.h(a)},
A:function(a){throw H.h(P.c1(a))},
aX:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.h2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jP:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jA:function(a,b){return new H.fl(a,b==null?null:b.method)},
iI:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eS(a,t,u?null:b.receiver)},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.iu(a)
if(a==null)return
if(a instanceof H.c5)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.bv(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iI(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jA(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kp()
p=$.kq()
o=$.kr()
n=$.ks()
m=$.kv()
l=$.kw()
k=$.ku()
$.kt()
j=$.ky()
i=$.kx()
h=q.ah(t)
if(h!=null)return u.$1(H.iI(H.Q(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.iI(H.Q(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jA(H.Q(t),h))}}return u.$1(new H.he(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dv()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aN(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dv()
return a},
bw:function(a){var u
if(a instanceof H.c5)return a.b
if(a==null)return new H.dZ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dZ(a)},
lT:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a_(0,a[t],a[s])}return b},
lZ:function(a,b,c,d,e,f){H.i(a,"$iiE")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.n("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lZ)
a.$identity=u
return u},
kL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.P(d).$ia){u.$reflectionInfo=d
s=H.lh(u).r}else s=d
r=e?Object.create(new H.fO().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aO
if(typeof p!=="number")return p.n()
$.aO=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jm(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lV,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jk:H.ix
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jm(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kI:function(a,b,c,d){var u=H.ix
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jm:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kK(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kI(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bY
if(q==null){q=H.el("self")
$.bY=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.bY
if(q==null){q=H.el("self")
$.bY=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
kJ:function(a,b,c,d){var u,t
u=H.ix
t=H.jk
switch(b?-1:a){case 0:throw H.h(H.lj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kK:function(a,b){var u,t,s,r,q,p,o,n
u=$.bY
if(u==null){u=H.el("self")
$.bY=u}t=$.jj
if(t==null){t=H.el("receiver")
$.jj=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kJ(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()},
j3:function(a,b,c,d,e,f,g){return H.kL(a,b,H.a_(c),d,!!e,!!f,g)},
ix:function(a){return a.a},
jk:function(a){return a.c},
el:function(a){var u,t,s,r,q
u=new H.bX("self","target","receiver","name")
t=J.eO(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aL(a,"String"))},
mQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aL(a,"double"))},
m5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aL(a,"num"))},
ka:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aL(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aL(a,"int"))},
j9:function(a,b){throw H.h(H.aL(a,H.bV(H.Q(b).substring(2))))},
m7:function(a,b){throw H.h(H.kH(a,H.bV(H.Q(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.j9(a,b)},
d:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.m7(a,b)},
mS:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.P(a)[b])return a
H.j9(a,b)},
iq:function(a){if(a==null)return a
if(!!J.P(a).$ia)return a
throw H.h(H.aL(a,"List<dynamic>"))},
m0:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ia)return a
if(u[b])return a
H.j9(a,b)},
kb:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
e4:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kb(J.P(a))
if(u==null)return!1
return H.k_(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.iZ)return a
$.iZ=!0
try{if(H.e4(a,b))return a
u=H.is(b)
t=H.aL(a,u)
throw H.h(t)}finally{$.iZ=!1}},
bT:function(a,b){if(a!=null&&!H.j2(a,b))H.o(H.aL(a,H.is(b)))
return a},
aL:function(a,b){return new H.h4("TypeError: "+P.eC(a)+": type '"+H.k5(a)+"' is not a subtype of type '"+b+"'")},
kH:function(a,b){return new H.em("CastError: "+P.eC(a)+": type '"+H.k5(a)+"' is not a subtype of type '"+b+"'")},
k5:function(a){var u,t
u=J.P(a)
if(!!u.$ic_){t=H.kb(u)
if(t!=null)return H.is(t)
return"Closure"}return H.bJ(a)},
mb:function(a){throw H.h(new P.er(H.Q(a)))},
lj:function(a){return new H.fF(a)},
ke:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bv:function(a){if(a==null)return
return a.$ti},
mR:function(a,b,c){return H.bU(a["$a"+H.j(c)],H.bv(b))},
e7:function(a,b,c,d){var u
H.Q(c)
H.a_(d)
u=H.bU(a["$a"+H.j(c)],H.bv(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u
H.Q(b)
H.a_(c)
u=H.bU(a["$a"+H.j(b)],H.bv(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a_(b)
u=H.bv(a)
return u==null?null:u[b]},
is:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.c(b,"$ia",[P.t],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bV(a[0].name)+H.j1(a,1,b)
if(typeof a=="function")return H.bV(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.lB(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.t]
H.c(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.j.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.C)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lS(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.Q(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
j1:function(a,b,c){var u,t,s,r,q,p
H.c(c,"$ia",[P.t],"$aa")
if(a==null)return""
u=new P.bq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
bU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ba:function(a,b,c,d){var u,t
H.Q(b)
H.iq(c)
H.Q(d)
if(a==null)return!1
u=H.bv(a)
t=J.P(a)
if(t[b]==null)return!1
return H.k8(H.bU(t[d],u),null,c,null)},
c:function(a,b,c,d){H.Q(b)
H.iq(c)
H.Q(d)
if(a==null)return a
if(H.ba(a,b,c,d))return a
throw H.h(H.aL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bV(b.substring(2))+H.j1(c,0,null),v.mangledGlobalNames)))},
k8:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
mO:function(a,b,c){return a.apply(b,H.bU(J.P(b)["$a"+H.j(c)],H.bv(b)))},
kh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="C"||a.name==="z"||a===-1||a===-2||H.kh(u)}return!1},
j2:function(a,b){var u,t
if(a==null)return b==null||b.name==="C"||b.name==="z"||b===-1||b===-2||H.kh(b)
if(b==null||b===-1||b.name==="C"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.j2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.e4(a,b)}u=J.P(a).constructor
t=H.bv(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.j2(a,b))throw H.h(H.aL(a,H.is(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="C"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="C"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.k_(a,b,c,d)
if('func' in a)return c.name==="iE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aE("type" in a?a.type:null,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"aq" in t.prototype))return!1
r=t.prototype["$a"+"aq"]
q=H.bU(r,u?a.slice(1):null)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.k8(H.bU(m,u),b,p,d)},
k_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.m4(h,b,g,d)},
m4:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aE(c[r],d,a[r],b))return!1}return!0},
mP:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
m1:function(a){var u,t,s,r,q,p
u=H.Q($.kg.$1(a))
t=$.ij[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ip[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.Q($.k7.$2(a,u))
if(u!=null){t=$.ij[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ip[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ir(s)
$.ij[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ip[u]=s
return s}if(q==="-"){p=H.ir(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kj(a,s)
if(q==="*")throw H.h(P.jQ(u))
if(v.leafTags[u]===true){p=H.ir(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kj(a,s)},
kj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j7(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ir:function(a){return J.j7(a,!1,null,!!a.$ib3)},
m3:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ir(u)
else return J.j7(u,c,null,null)},
lX:function(){if(!0===$.j5)return
$.j5=!0
H.lY()},
lY:function(){var u,t,s,r,q,p,o,n
$.ij=Object.create(null)
$.ip=Object.create(null)
H.lW()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kk.$1(q)
if(p!=null){o=H.m3(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lW:function(){var u,t,s,r,q,p,o
u=C.K()
u=H.bQ(C.H,H.bQ(C.M,H.bQ(C.u,H.bQ(C.u,H.bQ(C.L,H.bQ(C.I,H.bQ(C.J(C.v),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kg=new H.il(q)
$.k7=new H.im(p)
$.kk=new H.io(o)},
bQ:function(a,b){return a(b)||b},
ju:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(P.iC("Illegal RegExp pattern ("+String(r)+")",a,null))},
ma:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kl:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fw:function fw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
h2:function h2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fl:function fl(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
iu:function iu(a){this.a=a},
dZ:function dZ(a){this.a=a
this.b=null},
c_:function c_(){},
fS:function fS(){},
fO:function fO(){},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(a){this.a=a},
em:function em(a){this.a=a},
fF:function fF(a){this.a=a},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eR:function eR(a){this.a=a},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f1:function f1(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
eQ:function eQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dW:function dW(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cG:function(a){return a},
cF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bu(b,a))},
lA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.lP(a,b,c))
return b},
dj:function dj(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
dk:function dk(){},
fk:function fk(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
lS:function(a){return J.js(a?Object.keys(a):[],null)},
m6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
e6:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.j5==null){H.lX()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.jQ("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jb()]
if(q!=null)return q
q=H.m1(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.jb(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
kU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.iw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aB(a,0,4294967295,"length",null))
return J.js(new Array(a),b)},
js:function(a,b){return J.eO(H.b(a,[b]))},
eO:function(a){H.iq(a)
a.fixed$length=Array
return a},
jt:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kV:function(a,b){var u,t
for(u=a.length;b<u;){t=C.j.aQ(a,b)
if(t!==32&&t!==13&&!J.jt(t))break;++b}return b},
kW:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.j.b8(a,u)
if(t!==32&&t!==13&&!J.jt(t))break}return b},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d3.prototype
return J.d2.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.d4.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.C)return a
return J.e6(a)},
lU:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.C)return a
return J.e6(a)},
ik:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.C)return a
return J.e6(a)},
kc:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.C)return a
return J.e6(a)},
kd:function(a){if(typeof a=="number")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bM.prototype
return a},
j4:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bM.prototype
return a},
e5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.C)return a
return J.e6(a)},
e9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lU(a).n(a,b)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).v(a,b)},
jd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.kd(a).b0(a,b)},
je:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kd(a).W(a,b)},
M:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ik(a).j(a,b)},
kD:function(a,b,c,d){return J.e5(a).fB(a,b,c,d)},
jf:function(a,b){return J.e5(a).Z(a,b)},
jg:function(a,b){return J.kc(a).af(a,b)},
bx:function(a){return J.P(a).gF(a)},
ea:function(a){return J.kc(a).gP(a)},
b0:function(a){return J.ik(a).gp(a)},
jh:function(a,b){return J.j4(a).jQ(a,b)},
ji:function(a,b,c){return J.j4(a).bj(a,b,c)},
au:function(a){return J.P(a).i(a)},
iv:function(a){return J.j4(a).eJ(a)},
a4:function a4(){},
eP:function eP(){},
d4:function d4(){},
d5:function d5(){},
fq:function fq(){},
bM:function bM(){},
b2:function b2(){},
aG:function aG(a){this.$ti=a},
iG:function iG(a){this.$ti=a},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bH:function bH(){},
d3:function d3(){},
d2:function d2(){},
bn:function bn(){}},P={
ls:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lI()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bR(new P.hz(u),1)).observe(t,{childList:true})
return new P.hy(u,t,s)}else if(self.setImmediate!=null)return P.lJ()
return P.lK()},
lt:function(a){self.scheduleImmediate(H.bR(new P.hA(H.l(a,{func:1,ret:-1})),0))},
lu:function(a){self.setImmediate(H.bR(new P.hB(H.l(a,{func:1,ret:-1})),0))},
lv:function(a){P.iT(C.n,H.l(a,{func:1,ret:-1}))},
iT:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.d.a2(a.a,1000)
return P.lx(u<0?0:u,b)},
jO:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aV]})
u=C.d.a2(a.a,1000)
return P.ly(u<0?0:u,b)},
lx:function(a,b){var u=new P.e0(!0)
u.fv(a,b)
return u},
ly:function(a,b){var u=new P.e0(!1)
u.fw(a,b)
return u},
an:function(a){return new P.dN(new P.e_(new P.a6(0,$.H,[a]),[a]),!1,[a])},
am:function(a,b){H.l(a,{func:1,ret:-1,args:[P.v,,]})
H.i(b,"$idN")
a.$2(0,null)
b.b=!0
return b.a.a},
ab:function(a,b){P.lz(a,H.l(b,{func:1,ret:-1,args:[P.v,,]}))},
al:function(a,b){H.i(b,"$iiB").az(0,a)},
ak:function(a,b){H.i(b,"$iiB").aX(H.ah(a),H.bw(a))},
lz:function(a,b){var u,t,s,r
H.l(b,{func:1,ret:-1,args:[P.v,,]})
u=new P.i8(b)
t=new P.i9(b)
s=J.P(a)
if(!!s.$ia6)a.cs(u,t,null)
else if(!!s.$iaq)a.bW(u,t,null)
else{r=new P.a6(0,$.H,[null])
H.x(a,null)
r.a=4
r.c=a
r.cs(u,null,null)}},
ao:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.H.eD(new P.ig(u),P.z,P.v,null)},
jV:function(a,b){var u,t,s
b.a=1
try{a.bW(new P.hL(b),new P.hM(b),null)}catch(s){u=H.ah(s)
t=H.bw(s)
P.ja(new P.hN(b,u,t))}},
hK:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$ia6")
if(u>=4){t=b.br()
b.a=a.a
b.c=a.c
P.bN(b,t)}else{t=H.i(b.c,"$ib_")
b.a=2
b.c=a
a.dA(t)}},
bN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.i(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.ic(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bN(u.a,b)}t=u.a
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
if(k){H.i(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.ic(null,null,t,p,o)
return}j=$.H
if(j!=l)$.H=l
else j=null
t=b.c
if(t===8)new P.hS(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hR(s,b,m).$0()}else if((t&2)!==0)new P.hQ(u,s,b).$0()
if(j!=null)$.H=j
t=s.b
if(!!J.P(t).$iaq){if(t.a>=4){i=H.i(o.c,"$ib_")
o.c=null
b=o.bs(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.hK(t,o)
return}}h=b.b
i=H.i(h.c,"$ib_")
h.c=null
b=h.bs(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.i(p,"$iae")
h.a=8
h.c=p}u.a=h
t=h}},
lE:function(a,b){if(H.e4(a,{func:1,args:[P.C,P.Y]}))return b.eD(a,null,P.C,P.Y)
if(H.e4(a,{func:1,args:[P.C]}))return H.l(a,{func:1,ret:null,args:[P.C]})
throw H.h(P.iw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lD:function(){var u,t
for(;u=$.bO,u!=null;){$.cI=null
t=u.b
$.bO=t
if(t==null)$.cH=null
u.a.$0()}},
lH:function(){$.j_=!0
try{P.lD()}finally{$.cI=null
$.j_=!1
if($.bO!=null)$.jc().$1(P.k9())}},
k2:function(a){var u=new P.dO(H.l(a,{func:1,ret:-1}))
if($.bO==null){$.cH=u
$.bO=u
if(!$.j_)$.jc().$1(P.k9())}else{$.cH.b=u
$.cH=u}},
lG:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bO
if(u==null){P.k2(a)
$.cI=$.cH
return}t=new P.dO(a)
s=$.cI
if(s==null){t.b=u
$.cI=t
$.bO=t}else{t.b=s.b
s.b=t
$.cI=t
if(t.b==null)$.cH=t}},
ja:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.H
if(C.k===t){P.bP(null,null,C.k,a)
return}t.toString
P.bP(null,null,t,H.l(t.cz(a),u))},
mk:function(a,b){return new P.i3(H.c(a,"$ick",[b],"$ack"),[b])},
iS:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.H
if(t===C.k){t.toString
return P.iT(a,b)}return P.iT(a,H.l(t.cz(b),u))},
lq:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aV]}
H.l(b,u)
t=$.H
if(t===C.k){t.toString
return P.jO(a,b)}s=t.dO(b,P.aV)
$.H.toString
return P.jO(a,H.l(s,u))},
ic:function(a,b,c,d,e){var u={}
u.a=d
P.lG(new P.id(u,e))},
k0:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.H
if(t===c)return d.$0()
$.H=c
u=t
try{t=d.$0()
return t}finally{$.H=u}},
k1:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.H
if(t===c)return d.$1(e)
$.H=c
u=t
try{t=d.$1(e)
return t}finally{$.H=u}},
lF:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.H
if(t===c)return d.$2(e,f)
$.H=c
u=t
try{t=d.$2(e,f)
return t}finally{$.H=u}},
bP:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cz(d):c.jl(d,-1)
P.k2(d)},
hz:function hz(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null
this.c=0},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hw:function hw(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ig:function ig(a){this.a=a},
dP:function dP(){},
hx:function hx(a,b){this.a=a
this.$ti=b},
e_:function e_(a,b){this.a=a
this.$ti=b},
b_:function b_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a6:function a6(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hH:function hH(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hT:function hT(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a
this.b=null},
ck:function ck(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(a,b){this.a=a
this.b=b},
cl:function cl(){},
fP:function fP(){},
i3:function i3(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
aV:function aV(){},
ae:function ae(a,b){this.a=a
this.b=b},
i7:function i7(){},
id:function id(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function(a,b,c){H.iq(a)
return H.c(H.lT(a,new H.aH([b,c])),"$ijw",[b,c],"$ajw")},
kZ:function(a,b,c,d){return new P.hW([d])},
jY:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
jX:function(a,b,c){var u=new P.hX(a,b,[c])
u.c=a.e
return u},
kR:function(a,b,c){var u,t
if(P.j0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
t=$.cM()
C.a.h(t,a)
try{P.lC(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.jM(b,H.m0(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
iF:function(a,b,c){var u,t,s
if(P.j0(a))return b+"..."+c
u=new P.bq(b)
t=$.cM()
C.a.h(t,a)
try{s=u
s.a=P.jM(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j0:function(a){var u,t
for(u=0;t=$.cM(),u<t.length;++u)if(a===t[u])return!0
return!1},
lC:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.c(b,"$ia",[P.t],"$aa")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.j(u.gJ())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gJ();++s
if(!u.B()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ();++s
for(;u.B();o=n,n=m){m=u.gJ();++s
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
jx:function(a){var u,t
u={}
if(P.j0(a))return"{...}"
t=new P.bq("")
try{C.a.h($.cM(),a)
t.a+="{"
u.a=!0
a.a7(0,new P.f6(u,t))
t.a+="}"}finally{u=$.cM()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hW:function hW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cA:function cA(a){this.a=a
this.c=this.b=null},
hX:function hX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f3:function f3(){},
R:function R(){},
f5:function f5(){},
f6:function f6(a,b){this.a=a
this.b=b},
f7:function f7(){},
i2:function i2(){},
dV:function dV(){},
c0:function c0(){},
cU:function cU(){},
eA:function eA(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
i6:function i6(a){this.b=this.a=0
this.c=a},
j6:function(a,b,c){var u=H.le(a,c)
if(u!=null)return u
throw H.h(P.iC(a,null,null))},
lR:function(a,b){var u=H.ld(a)
if(u!=null)return u
throw H.h(P.iC("Invalid double",a,null))},
kP:function(a){if(a instanceof H.c_)return a.i(0)
return"Instance of '"+H.bJ(a)+"'"},
l_:function(a,b,c,d){var u,t
H.x(b,d)
u=J.kU(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a_(u,t,b)
return H.c(u,"$ia",[d],"$aa")},
l0:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gP(a);s.B();)C.a.h(t,H.x(s.gJ(),c))
if(b)return t
return H.c(J.eO(t),"$ia",u,"$aa")},
iR:function(a,b,c){var u,t
u=P.v
H.c(a,"$ik",[u],"$ak")
if(a.constructor===Array){H.c(a,"$iaG",[u],"$aaG")
t=a.length
c=P.iN(b,c,t,null,null,null)
return H.jH(b>0||c<t?C.a.f3(a,b,c):a)}return P.ln(a,b,c)},
ln:function(a,b,c){var u,t,s
H.c(a,"$ik",[P.v],"$ak")
u=J.ea(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.aB(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gJ())
return H.jH(s)},
iO:function(a,b,c){return new H.eQ(a,H.ju(a,!1,!0,!1))},
jM:function(a,b,c){var u=J.ea(b)
if(!u.B())return a
if(c.length===0){do a+=H.j(u.gJ())
while(u.B())}else{a+=H.j(u.gJ())
for(;u.B();)a=a+c+H.j(u.gJ())}return a},
jZ:function(a,b,c,d){var u,t,s,r,q,p
H.c(a,"$ia",[P.v],"$aa")
if(c===C.q){u=$.kC().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.jx(H.x(b,H.ap(c,"c0",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lf(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kM:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cW:function(a){if(a>=10)return""+a
return"0"+a},
jp:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kP(a)},
kF:function(a){return new P.aN(!1,null,null,a)},
iw:function(a,b,c){return new P.aN(!0,a,b,c)},
fv:function(a,b,c){return new P.bK(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
iN:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.aB(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.aB(b,a,c,"end",f))
return b}return c},
c8:function(a,b,c,d,e){var u=H.a_(e==null?J.b0(b):e)
return new P.eN(b,u,!0,a,c,"Index out of range")},
aj:function(a){return new P.hf(a)},
jQ:function(a){return new P.hd(a)},
iQ:function(a){return new P.cj(a)},
c1:function(a){return new P.ep(a)},
n:function(a){return new P.dS(a)},
iC:function(a,b,c){return new P.eI(a,b,c)},
e8:function(a){H.m6(a)},
Z:function Z(){},
aw:function aw(a,b){this.a=a
this.b=b},
y:function y(){},
b1:function b1(a){this.a=a},
et:function et(){},
eu:function eu(){},
bi:function bi(){},
cd:function cd(){},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eN:function eN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hf:function hf(a){this.a=a},
hd:function hd(a){this.a=a},
cj:function cj(a){this.a=a},
ep:function ep(a){this.a=a},
fm:function fm(){},
dv:function dv(){},
er:function er(a){this.a=a},
dS:function dS(a){this.a=a},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
v:function v(){},
k:function k(){},
ay:function ay(){},
a:function a(){},
U:function U(){},
z:function z(){},
ac:function ac(){},
C:function C(){},
da:function da(){},
Y:function Y(){},
t:function t(){},
bq:function bq(a){this.a=a},
lO:function(a){var u,t
u=J.P(a)
if(!!u.$ibj){t=u.gdZ(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.e3(a.data,a.height,a.width)},
lN:function(a){if(a instanceof P.e3)return{data:a.a,height:a.b,width:a.c}
return a},
lM:function(a,b){var u={}
a.a7(0,new P.ih(u))
return u},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
eE:function eE(a,b){this.a=a
this.b=b},
eF:function eF(){},
eG:function eG(){},
hV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hY:function hY(){},
aC:function aC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
p:function p(){},
cP:function cP(){},
d_:function d_(){},
dn:function dn(){},
bL:function bL(){},
dq:function dq(){},
dw:function dw(){},
dF:function dF(){}},W={
kE:function(a){var u=document.createElement("a")
return u},
iy:function(a,b){var u=document.createElement("canvas")
return u},
kO:function(a){H.i(a,"$ibE")
return"wheel"},
jq:function(a,b,c){return W.kQ(a,null,null,b,null,null,null,c).aj(new W.eK(),P.t)},
kQ:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=W.aP
t=new P.a6(0,$.H,[u])
s=new P.hx(t,[u])
r=new XMLHttpRequest()
C.E.kc(r,"GET",a,!0)
u=W.aU
q={func:1,ret:-1,args:[u]}
W.V(r,"load",H.l(new W.eL(r,s),q),!1,u)
W.V(r,"error",H.l(s.gdV(),q),!1,u)
r.send()
return t},
jr:function(a,b,c){var u=document.createElement("img")
u.src=b
return u},
hU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jW:function(a,b,c,d){var u,t
u=W.hU(W.hU(W.hU(W.hU(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d,e){var u=W.k6(new W.hG(c),W.m)
u=new W.hF(a,b,u,!1,[e])
u.iO()
return u},
k6:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.H
if(u===C.k)return a
return u.dO(a,b)},
q:function q(){},
ec:function ec(){},
ed:function ed(){},
cO:function cO(){},
bz:function bz(){},
bA:function bA(){},
bg:function bg(){},
c2:function c2(){},
eq:function eq(){},
c3:function c3(){},
c4:function c4(){},
es:function es(){},
cX:function cX(){},
hD:function hD(a,b){this.a=a
this.b=b},
a1:function a1(){},
m:function m(){},
bE:function bE(){},
eH:function eH(){},
bG:function bG(){},
d0:function d0(){},
aP:function aP(){},
eK:function eK(){},
eL:function eL(a,b){this.a=a
this.b=b},
d1:function d1(){},
bj:function bj(){},
c7:function c7(){},
aQ:function aQ(){},
cb:function cb(){},
a5:function a5(){},
hC:function hC(a){this.a=a},
J:function J(){},
cc:function cc(){},
aU:function aU(){},
fG:function fG(){},
aW:function aW(){},
aK:function aK(){},
h1:function h1(){},
bs:function bs(){},
hr:function hr(){},
aZ:function aZ(){},
cz:function cz(){},
dR:function dR(){},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hG:function hG(a){this.a=a},
aF:function aF(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
dX:function dX(){},
dY:function dY(){},
e1:function e1(){},
e2:function e2(){}},O={
iz:function(a){var u=new O.N([a])
u.bk(a)
return u},
N:function N(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ca:function ca(){this.b=this.a=null},
kf:function(a){var u=C.j.jV(a,"/")
if(u<=0)return a
return C.j.bj(a,0,u)},
k4:function(a){var u,t,s
u=P.iO("([^\\s]+)",!0,!1)
$.k3=u
t=u.jM(a)
if(t==null)return H.b([],[P.t])
u=t.b
if(1>=u.length)return H.e(u,1)
s=u[1]
return H.b([s,C.j.eJ(C.j.c1(a,s.length))],[P.t])},
ie:function(a){var u,t,s
u=H.b([],[P.t])
t=P.iO("([^\\s]+)",!0,!1)
$.k3=t
t=new H.hu(t,a,0)
for(;t.B();){s=t.d.b
if(1>=s.length)return H.e(s,1)
C.a.h(u,s[1])}return u},
b9:function(a){var u,t,s,r
u=O.ie(a)
t=H.b([],[P.y])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,P.lR(u[r],null))}return t},
df:function(a,b,c){return O.l3(a,b,!1)},
l3:function(a,b,c){var u=0,t=P.an([P.U,P.t,O.ar]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$df=P.ao(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.kf(a)
k=new O.ia(b)
k.scf(new H.aH([P.t,O.ar]))
k.c=null
n=k
u=7
return P.ab(W.jq(a,null,null),$async$df)
case 7:m=e
u=8
return P.ab(n.aq(m,o,!1),$async$df)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.ah(h)
P.e8(a+": "+H.j(l))
j=P.n(a+": "+H.j(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.al(s,t)
case 2:return P.ak(q,t)}})
return P.am($async$df,t)},
aA:function(a,b,c,d,e){return O.l4(a,b,c,d,!1)},
l4:function(a,b,c,d,e){var u=0,t=P.an(E.K),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g
var $async$aA=P.ao(function(f,a0){if(f===1){q=a0
u=r}while(true)switch(u){case 0:r=4
o=O.kf(a)
k=new O.ib(b)
k.sih(H.b([],[O.cJ]))
k.siE(H.b([],[V.S]))
k.shl(H.b([],[V.F]))
k.scf(new H.aH([P.t,O.ar]))
k.f=d
k.r=""
j=O.az()
i=j.r
i.st(0,new V.u(0.35,0.35,0.35))
i=j.x
i.st(0,new V.u(0.65,0.65,0.65))
k.x=j
k.y=null
k.z=null
k.Q=E.ax(null,!0,null,"",null,null)
k.bw()
n=k
u=7
return P.ab(W.jq(a,null,null),$async$aA)
case 7:m=a0
u=8
return P.ab(n.aq(m,o,!1),$async$aA)
case 8:j=n.gjK()
s=j
u=1
break
r=2
u=6
break
case 4:r=3
g=q
l=H.ah(g)
P.e8(a+": "+H.j(l))
j=P.n(a+": "+H.j(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.al(s,t)
case 2:return P.ak(q,t)}})
return P.am($async$aA,t)},
ia:function ia(a){this.a=a
this.c=this.b=null},
cJ:function cJ(a){this.a=a
this.b=null},
ib:function ib(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
az:function(){var u,t,s
u=new O.ar()
u.sfH(O.iz(V.a7))
u.e.b1(u.ghq(),u.ghs())
t=new O.aS(u,"emission")
t.c=C.c
t.f=new V.u(0,0,0)
u.f=t
t=new O.aS(u,"ambient")
t.c=C.c
t.f=new V.u(0,0,0)
u.r=t
t=new O.aS(u,"diffuse")
t.c=C.c
t.f=new V.u(0,0,0)
u.x=t
t=new O.aS(u,"invDiffuse")
t.c=C.c
t.f=new V.u(0,0,0)
u.y=t
t=new O.fe(u,"specular")
t.c=C.c
t.f=new V.u(0,0,0)
t.ch=100
u.z=t
t=new O.fb(u,"bump")
t.c=C.c
u.Q=t
u.ch=null
t=new O.aS(u,"reflect")
t.c=C.c
t.f=new V.u(0,0,0)
u.cx=t
t=new O.fd(u,"refract")
t.c=C.c
t.f=new V.u(0,0,0)
t.ch=1
u.cy=t
t=new O.fa(u,"alpha")
t.c=C.c
t.f=1
u.db=t
t=new D.d7()
t.bk(D.X)
t.sfo(H.b([],[D.bC]))
t.sfp(H.b([],[D.dm]))
t.sfq(H.b([],[D.du]))
t.sfs(H.b([],[D.dy]))
t.sft(H.b([],[D.dz]))
t.sfu(H.b([],[D.dA]))
t.Q=null
t.ch=null
t.d0(t.gho(),t.ghY(),t.gi1())
u.dx=t
s=t.Q
if(s==null){s=D.I()
t.Q=s
t=s}else t=s
t.h(0,u.gir())
t=u.dx
s=t.ch
if(s==null){s=D.I()
t.ch=s
t=s}else t=s
t.h(0,u.gat())
u.dy=null
return u},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c9:function c9(){},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fd:function fd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fe:function fe(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ds:function ds(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
br:function br(){}},E={
ax:function(a,b,c,d,e,f){var u=new E.K()
u.ac(a,!0,c,d,e,f)
return u},
li:function(a,b){var u=new E.fx(a,b)
u.fh(a,b)
return u},
lo:function(a,b,c,d,e){var u,t,s,r
u=J.P(a)
if(!!u.$ibz)return E.jN(a,!0,!0,!0,!1)
t=W.iy(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdS(a).h(0,t)
r=E.jN(t,!0,!0,!0,!1)
r.a=a
return r},
jN:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dB()
t=P.kY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.t,null)
s=C.m.c_(a,"webgl",t)
s=H.i(s==null?C.m.c_(a,"experimental-webgl",t):s,"$ibL")
if(s==null)H.o(P.n("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.li(s,a)
r=new T.fU(s)
r.b=H.a_((s&&C.b).d_(s,3379))
r.c=H.a_(C.b.d_(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dI(a)
q=new X.eT()
q.c=new X.aI(!1,!1,!1)
q.sii(P.kZ(null,null,null,P.v))
r.b=q
q=new X.fg(r)
q.f=0
q.r=V.b8()
q.x=V.b8()
q.Q=1
q.ch=1
r.c=q
q=new X.f4(r)
q.r=0
q.x=V.b8()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.h0(r)
q.e=0
q.f=V.b8()
q.r=V.b8()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfV(H.b([],[[P.cl,P.C]]))
q=r.z
p=document
o=W.a5
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.V(p,"contextmenu",H.l(r.ghA(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.V(a,"focus",H.l(r.ghG(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.V(a,"blur",H.l(r.ghu(),l),!1,m))
q=r.z
k=W.aQ
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.V(p,"keyup",H.l(r.ghK(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.V(p,"keydown",H.l(r.ghI(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.V(a,"mousedown",H.l(r.ghO(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.V(a,"mouseup",H.l(r.ghS(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.V(a,"mousemove",H.l(r.ghQ(),n),!1,o))
k=r.z
j=W.aZ;(k&&C.a).h(k,W.V(a,H.Q(W.kO(a)),H.l(r.ghU(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.V(p,"mousemove",H.l(r.ghC(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.V(p,"mouseup",H.l(r.ghE(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.V(p,"pointerlockchange",H.l(r.ghW(),l),!1,m))
m=r.z
l=W.aK
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.V(a,"touchstart",H.l(r.gib(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.V(a,"touchend",H.l(r.gi7(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.V(a,"touchmove",H.l(r.gi9(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aw(Date.now(),!1)
u.cy=0
u.dC()
return u},
ef:function ef(){},
K:function K(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
dB:function dB(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a}},Z={
iX:function(a,b,c){var u
H.c(c,"$ia",[P.v],"$aa")
u=a.createBuffer()
C.b.ay(a,b,u)
C.b.dQ(a,b,new Int16Array(H.cG(c)),35044)
C.b.ay(a,b,null)
return new Z.dL(b,u)},
aD:function(a){return new Z.aY(a)},
dL:function dL(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dM:function dM(a){this.a=a},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a}},D={
I:function(){var u=new D.bD()
u.sad(null)
u.sbo(null)
u.c=null
u.d=0
return u},
en:function en(){},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
eD:function eD(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
bl:function bl(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bm:function bm(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
B:function B(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
jo:function(a,b){var u=new D.bC()
u.c=new V.u(1,1,1)
u.a=V.lr()
u.st(0,a)
return u},
bC:function bC(){var _=this
_.d=_.c=_.b=_.a=null},
X:function X(){},
d7:function d7(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dm:function dm(){},
du:function du(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){}},X={cR:function cR(a,b){this.a=a
this.b=b},d6:function d6(a,b){this.a=a
this.b=b},eT:function eT(){var _=this
_.d=_.c=_.b=_.a=null},d9:function d9(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},f4:function f4(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fg:function fg(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fr:function fr(){},dD:function dD(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h0:function h0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dI:function dI(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iD:function(a,b,c,d,e,f,g){var u,t
u=new X.eJ()
t=new V.av(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jK
if(t==null){t=V.jJ(0,0,1,1)
$.jK=t}u.r=t
return u},
jD:function(a,b,c,d,e){var u,t,s
u=new X.dl()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gfz())
s=new D.B("mover",t,u.b,u,[U.af])
s.b=!0
u.au(s)}s=u.c
if(!(Math.abs(s-b)<$.G().a)){u.c=b
s=new D.B("fov",s,b,u,[P.y])
s.b=!0
u.au(s)}s=u.d
if(!(Math.abs(s-d)<$.G().a)){u.d=d
s=new D.B("near",s,d,u,[P.y])
s.b=!0
u.au(s)}s=u.e
if(!(Math.abs(s-a)<$.G().a)){u.e=a
s=new D.B("far",s,a,u,[P.y])
s.b=!0
u.au(s)}return u},
by:function by(){},
eJ:function eJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eM:function eM(){this.b=this.a=null},
dl:function dl(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cm:function cm(){}},V={
iA:function(a){var u,t,s
H.c(a,"$ia",[P.y],"$aa")
u=a.length
if(0>=u)return H.e(a,0)
t=a[0]
if(1>=u)return H.e(a,1)
s=a[1]
if(2>=u)return H.e(a,2)
u=a[2]
if(typeof t!=="number")return t.W()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.W()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.W()
if(u<0)u=0
else if(u>1)u=1
return new V.u(t,s,u)},
mc:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.eZ(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.j.ai("null",c)
return C.j.ai(C.i.eI(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
bS:function(a,b,c){var u,t,s,r,q,p
H.c(a,"$ia",[P.y],"$aa")
u=H.b([],[P.t])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.L(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.a_(u,p,C.j.ai(u[p],s))}return u},
j8:function(a,b){return C.i.ky(Math.pow(b,C.G.cM(Math.log(H.lL(a))/Math.log(b))))},
bo:function(){var u=$.jz
if(u==null){u=V.b5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jz=u}return u},
b5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
de:function(a,b,c){return V.b5(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
iL:function(a,b,c,d){return V.b5(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jy:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b5(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
iK:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b5(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
iJ:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.D(c)))
t=b.b9(u)
s=t.w(0,Math.sqrt(t.D(t)))
r=u.b9(s)
q=new V.F(a.a,a.b,a.c)
p=s.L(0).D(q)
o=r.L(0).D(q)
n=u.L(0).D(q)
return V.b5(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.jF
if(u==null){u=new V.S(0,0)
$.jF=u}return u},
iM:function(){var u=$.cf
if(u==null){u=new V.a3(0,0,0)
$.cf=u}return u},
jJ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dp(a,b,c,d)},
dK:function(){var u=$.jU
if(u==null){u=new V.F(0,0,0)
$.jU=u}return u},
iV:function(){var u=$.jT
if(u==null){u=new V.F(0,1,0)
$.jT=u}return u},
lr:function(){var u=$.hi
if(u==null){u=new V.F(0,0,1)
$.hi=u}return u},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
dd:function dd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a7:function a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
a8:function(a){var u=new V.fH()
u.fj(a)
return u},
eb:function eb(){},
b4:function b4(){},
db:function db(){},
b6:function b6(){this.a=null},
fH:function fH(){this.a=null},
ci:function ci(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b){this.a=a
this.b=b
this.c=null},
h_:function h_(){this.c=this.b=this.a=null},
cr:function cr(a){this.b=a
this.a=this.c=null},
m8:function(a){P.lq(C.C,new V.it(a))},
lk:function(a,b){var u=new V.fL()
u.fk(a,!0)
return u},
it:function it(a){this.a=a},
fL:function fL(){this.b=this.a=null},
fN:function fN(a){this.a=a},
fM:function fM(a){this.a=a}},U={
jn:function(){var u=new U.eo()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
bh:function(a){var u=new U.cT()
u.sN(a)
return u},
eo:function eo(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
c6:function c6(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
dJ:function dJ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cS:function cS(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},cV:function cV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cY:function cY(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},as:function as(){}},A={
l1:function(a,b){var u,t
u=a.am
t=new A.dc(b,u)
t.d6(b,u)
t.fd(a,b)
return t},
iU:function(a,b,c,d,e){var u=new A.h5(a,b,c,e)
u.f=d
u.siS(P.l_(d,0,!1,P.v))
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a){this.a=a},
dc:function dc(a,b){var _=this
_.bC=_.e3=_.bB=_.am=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ej=_.cG=_.ei=_.bP=_.eh=_.eg=_.bO=_.bN=_.ef=_.ee=_.bM=_.bL=_.bK=_.ed=_.ec=_.bJ=_.eb=_.ea=_.bI=_.e9=_.e8=_.bH=_.bG=_.e7=_.e6=_.bF=_.bE=_.e5=_.e4=_.bD=null
_.cL=_.en=_.cK=_.em=_.cJ=_.el=_.cI=_.ek=_.cH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fc:function fc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bB=b5},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cu:function cu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cx:function cx(a,b,c,d,e,f,g,h,i,j){var _=this
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
cv:function cv(a,b,c,d,e,f,g,h,i,j){var _=this
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
cy:function cy(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ch:function ch(){},
bB:function bB(a,b){this.a=a
this.b=b},
dt:function dt(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dE:function dE(){},
hb:function hb(a){this.a=a},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lQ:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
e=new F.ii()
if(f<3)return
u=F.iP()
t=-6.283185307179586/f
s=H.b([],[F.aa])
r=u.a
q=new V.F(0,0,1)
q=q.w(0,Math.sqrt(q.D(q)))
C.a.h(s,r.ji(new V.aJ(a,-1,-1,-1),new V.av(1,1,1,1),new V.a3(0,0,d),new V.F(0,0,1),new V.S(0.5,0.5),q))
for(p=0;p<=f;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=e.$1(p/f)
r=u.a
if(typeof l!=="number")return H.f(l)
q=new V.F(n,m,1).w(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.iW(new V.aJ(a,-1,-1,-1),null,new V.av(k,i,j,1),new V.a3(n*l,m*l,d),new V.F(0,0,1),new V.S(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.h(0,h)
C.a.h(s,h)}u.d.ct(s)
return u},
kX:function(a,b){var u,t
u=new F.aR()
t=a.a
if(t==null)H.o(P.n("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.n("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
iP:function(){var u,t
u=new F.dr()
t=new F.hj(u)
t.b=!1
t.siT(H.b([],[F.aa]))
u.a=t
t=new F.fK(u)
t.scj(H.b([],[F.b7]))
u.b=t
t=new F.fJ(u)
t.sh6(H.b([],[F.aR]))
u.c=t
t=new F.fI(u)
t.sfX(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
iW:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aa()
t=new F.ho(u)
t.scj(H.b([],[F.b7]))
u.b=t
t=new F.hn(u)
s=[F.aR]
t.sh7(H.b([],s))
t.sh8(H.b([],s))
u.c=t
t=new F.hk(u)
s=[F.a2]
t.sfY(H.b([],s))
t.sfZ(H.b([],s))
t.sh_(H.b([],s))
u.d=t
h=$.kz()
u.e=0
t=$.aM()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bd().a)!==0?e:null
u.x=(s&$.bc().a)!==0?b:null
u.y=(s&$.be().a)!==0?f:null
u.z=(s&$.bf().a)!==0?g:null
u.Q=(s&$.kA().a)!==0?c:null
u.ch=(s&$.bW().a)!==0?i:0
u.cx=(s&$.bb().a)!==0?a:null
return u},
ii:function ii(){},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aR:function aR(){this.b=this.a=null},
b7:function b7(){this.a=null},
dr:function dr(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fI:function fI(a){this.a=a
this.b=null},
fJ:function fJ(a){this.a=a
this.b=null},
fK:function fK(a){this.a=a
this.b=null},
aa:function aa(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a){this.a=a},
hp:function hp(a){this.a=a},
hj:function hj(a){this.a=a
this.c=this.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a
this.c=this.b=null},
ho:function ho(a){this.a=a
this.b=null}},T={cn:function cn(){},dx:function dx(){},fT:function fT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},co:function co(){var _=this
_.e=_.d=_.c=_.b=_.a=null},fU:function fU(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fW:function fW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},fV:function fV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
eh:function(a,b,c,d,e,f,g){var u=new L.eg(d,e,f,g,b,c)
u.ac(null,!0,null,"",null,null)
u.aO(b,c,d,e,f,g)
u.f8(a,b,c,d,e,f,g)
return u},
kG:function(a){var u=new L.ek()
u.ac(null,!0,null,"",null,null)
u.f9(a)
return u},
ew:function(a,b,c,d,e,f){var u=new L.ev(b)
u.ac(null,!0,null,"",null,null)
u.fa(a,b,c,d,e,f)
return u},
jv:function(a,b,c,d,e,f,g){var u=new L.eU(d,e,f,g,b,c)
u.ac(null,!0,null,"",null,null)
u.aO(b,c,d,e,f,g)
u.fb(a,b,c,d,e,f,g)
return u},
eY:function(a,b,c,d,e,f,g){var u=new L.eX(d,e,f,g,b,c)
u.ac(null,!0,null,"",null,null)
u.aO(b,c,d,e,f,g)
u.fc(a,b,c,d,e,f,g)
return u},
ki:function(){var u,t,s
u=V.lk("3Dart Chess",!0)
t=[P.t]
u.aV(H.b(["This example is in development and may still have a few issues and glitches."],t))
s=W.iy(null,null)
s.className="pageLargeCanvas"
s.id="targetCanvas"
C.l.Z(u.a,s)
u.dK(1,"About")
u.aV(H.b(["Just started (WIP). Currently you can rotate the camera but game piece selection ","and movement have not been implemented yet. Click and drag with mouse to see the board from ","different angles."],t))
u.aV(H.b(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],t))
u.aV(H.b(["\xab[Back to Examples List|../../]"],t))
u.dK(1,"Help wanted")
u.aV(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],t))
u.aV(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],t))
P.iS(C.n,L.m2())},
m9:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u=C.D.eT(document,"targetCanvas")
if(u==null)H.o(P.n("Failed to find an element with the identifier, targetCanvas."))
t=E.lo(u,!0,!0,!0,!1)
s=t.r
r=new U.dJ()
q=U.jn()
q.scZ(0,!0)
q.scR(6.283185307179586)
q.scS(0)
q.sao(0,0)
q.ses(100)
q.sV(0)
q.sdY(0.5)
r.b=q
p=r.gbn()
q.gq().h(0,p)
q=U.jn()
q.scZ(0,!0)
q.scR(6.283185307179586)
q.scS(0)
q.sao(0,0)
q.ses(100)
q.sV(0)
q.sdY(0.5)
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
o=new X.aI(!1,!1,!1)
n=r.d
r.d=o
q=new D.B("modifiers",n,o,r,[X.aI])
q.b=!0
r.S(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.B("invertX",q,!1,r,[P.Z])
q.b=!0
r.S(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.B("invertY",q,!1,r,[P.Z])
q.b=!0
r.S(q)}r.jk(s)
r.b.scS(-1.5707963267948966)
r.b.scR(0)
r.b.scZ(0,!1)
s=U.af
r=H.b([r,U.bh(V.iL(1.75,1.75,1.75,1)),U.bh(V.de(0,0,15))],[s])
q=new U.c6()
q.bk(s)
q.b1(q.ghm(),q.gi_())
q.aU(0,r)
q.e=null
q.f=V.bo()
q.r=0
m=X.jD(2000,1.0471975511965976,q,0.1,null)
l=X.iD(!0,!0,!1,null,2000,null,0)
if(l.b){l.b=!1
s=new D.B("clearColor",!0,!1,l,[P.Z])
s.b=!0
l.au(s)}k=L.kG(t)
s=k.id.a
j=new M.cV()
j.sb7(null)
j.sbe(0,null)
j.sa1(null)
r=E.ax(null,!0,null,"",null,null)
i=F.iP()
q=i.a
p=new V.F(-1,-1,1)
p=p.w(0,Math.sqrt(p.D(p)))
h=q.bz(new V.aJ(1,2,4,6),new V.av(1,0,0,1),new V.a3(-1,-1,0),new V.S(0,1),p,null)
q=i.a
p=new V.F(1,-1,1)
p=p.w(0,Math.sqrt(p.D(p)))
g=q.bz(new V.aJ(0,3,4,6),new V.av(0,0,1,1),new V.a3(1,-1,0),new V.S(1,1),p,null)
q=i.a
p=new V.F(1,1,1)
p=p.w(0,Math.sqrt(p.D(p)))
f=q.bz(new V.aJ(0,2,5,6),new V.av(0,1,0,1),new V.a3(1,1,0),new V.S(1,0),p,null)
q=i.a
p=V.b8()
e=new V.F(-1,1,1)
e=e.w(0,Math.sqrt(e.D(e)))
d=q.bz(new V.aJ(0,2,4,7),new V.av(1,1,0,1),new V.a3(-1,1,0),p,e,null)
i.d.ct(H.b([h,g,f,d],[F.aa]))
i.aW()
r.sab(0,i)
j.d=r
j.e=null
r=new O.ds()
r.b=1.0471975511965976
r.d=new V.u(1,1,1)
if(null!=s){n=r.c
r.c=s
s.gq().h(0,r.gat())
s=new D.B("boxTexture",n,r.c,r,[T.co])
s.b=!0
r.I(s)}j.sa1(r)
j.sbe(0,l)
j.sb7(m)
c=new M.cY()
c.sfL(0,O.iz(E.K))
c.d.b1(c.ghw(),c.ghy())
c.e=null
c.f=null
c.r=null
c.x=null
b=X.iD(!0,!0,!1,null,2000,null,0)
c.sb7(null)
c.sbe(0,b)
c.sbe(0,l)
c.sb7(m)
c.d.h(0,k)
s=M.as
r=H.b([j,c],[s])
q=new M.cS()
q.bk(s)
q.e=!1
q.f=null
q.b1(q.gi3(),q.gi5())
q.aU(0,r)
s=t.d
if(s!==q){if(s!=null)s.gq().O(0,t.gd8())
t.d=q
q.gq().h(0,t.gd8())
t.d9()}V.m8(t)},
l2:function(a){var u=new L.ff()
u.fe(a)
return u},
jC:function(a,b,c,d,e,f,g){var u=new L.fn(d,e,f,g,b,c)
u.ac(null,!0,null,"",null,null)
u.aO(b,c,d,e,f,g)
u.ff(a,b,c,d,e,f,g)
return u},
jI:function(a,b,c,d,e,f,g){var u=new L.fs(d,e,f,g,b,c)
u.ac(null,!0,null,"",null,null)
u.aO(b,c,d,e,f,g)
u.fg(a,b,c,d,e,f,g)
return u},
fC:function(a,b,c,d,e,f,g){var u=new L.fB(d,e,f,g,b,c)
u.ac(null,!0,null,"",null,null)
u.aO(b,c,d,e,f,g)
u.fi(a,b,c,d,e,f,g)
return u},
lp:function(a,b,c,d,e){var u=new L.cp(d,e,b,c)
u.ac(null,!0,null,"",null,null)
u.fl(a,b,c,d,e)
return u},
eg:function eg(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
ej:function ej(){},
ek:function ek(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.id=_.go=_.fy=null},
ev:function ev(a){var _=this
_.fy=a
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){},
eU:function eU(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
eW:function eW(){},
eX:function eX(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
f_:function f_(){},
ff:function ff(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
fp:function fp(){},
ce:function ce(){},
fs:function fs(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
fu:function fu(){},
fB:function fB(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
fE:function fE(){},
cp:function cp(a,b,c,d){var _=this
_.fy=a
_.go=b
_.id=null
_.k1=c
_.k2=d
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.k3=null},
fZ:function fZ(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iH.prototype={}
J.a4.prototype={
v:function(a,b){return a===b},
gF:function(a){return H.cg(a)},
i:function(a){return"Instance of '"+H.bJ(a)+"'"}}
J.eP.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iZ:1}
J.d4.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$iz:1}
J.d5.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fq.prototype={}
J.bM.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.ko()]
if(u==null)return this.f5(a)
return"JavaScript function for "+H.j(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iiE:1}
J.aG.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.o(P.aj("add"))
a.push(b)},
O:function(a,b){var u
if(!!a.fixed$length)H.o(P.aj("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
aU:function(a,b){var u,t
H.c(b,"$ik",[H.r(a,0)],"$ak")
if(!!a.fixed$length)H.o(P.aj("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
a7:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.c1(a))}},
C:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a_(u,t,H.j(a[t]))
return u.join(b)},
jU:function(a){return this.C(a,"")},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
f3:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aB(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gcP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.kS())},
f0:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.c(d,"$ik",[u],"$ak")
if(!!a.immutable$list)H.o(P.aj("setRange"))
P.iN(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.c(d,"$ia",[u],"$aa")
u=J.ik(d)
if(e+t>u.gp(d))throw H.h(H.kT())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bi:function(a,b,c,d){return this.f0(a,b,c,d,0)},
aY:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.iF(a,"[","]")},
gP:function(a){return new J.ad(a,a.length,0,[H.r(a,0)])},
gF:function(a){return H.cg(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.o(P.aj("set length"))
if(b<0)throw H.h(P.aB(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.bu(a,b))
return a[b]},
a_:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.o(P.aj("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bu(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.c(b,"$ia",u,"$aa")
t=C.d.n(a.length,b.gp(b))
u=H.b([],u)
this.sp(u,t)
this.bi(u,0,a.length,a)
this.bi(u,a.length,t,b)
return u},
$ik:1,
$ia:1}
J.iG.prototype={}
J.ad.prototype={
gJ:function(){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.A(u))
s=this.c
if(s>=t){this.sdc(null)
return!1}this.sdc(u[s]);++this.c
return!0},
sdc:function(a){this.d=H.x(a,H.r(this,0))},
$iay:1}
J.bH.prototype={
cD:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gbR(b)
if(this.gbR(a)===u)return 0
if(this.gbR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbR:function(a){return a===0?1/a<0:a<0},
ky:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.aj(""+a+".toInt()"))},
cM:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.aj(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aj(""+a+".round()"))},
jq:function(a,b,c){if(C.d.cD(b,c)>0)throw H.h(H.at(b))
if(this.cD(a,b)<0)return b
if(this.cD(a,c)>0)return c
return a},
eI:function(a,b){var u
if(b>20)throw H.h(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbR(a))return"-"+u
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
n:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a+b},
eZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.aj("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bv:function(a,b){var u
if(a>0)u=this.iy(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iy:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a<b},
b0:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a>=b},
$iy:1,
$iac:1}
J.d3.prototype={$iv:1}
J.d2.prototype={}
J.bn.prototype={
b8:function(a,b){if(b<0)throw H.h(H.bu(a,b))
if(b>=a.length)H.o(H.bu(a,b))
return a.charCodeAt(b)},
aQ:function(a,b){if(b>=a.length)throw H.h(H.bu(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.h(P.iw(b,null,null))
return a+b},
bj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.fv(b,null,null))
if(b>c)throw H.h(P.fv(b,null,null))
if(c>a.length)throw H.h(P.fv(c,null,null))
return a.substring(b,c)},
c1:function(a,b){return this.bj(a,b,null)},
eJ:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.aQ(u,0)===133){s=J.kV(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.b8(u,r)===133?J.kW(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kd:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.k(c,u)+a},
ai:function(a,b){return this.kd(a,b," ")},
jR:function(a,b,c){var u
if(c>a.length)throw H.h(P.aB(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
jQ:function(a,b){return this.jR(a,b,0)},
jW:function(a,b,c){var u
c=a.length
u=b.length
if(c+u>c)c-=u
return a.lastIndexOf(b,c)},
jV:function(a,b){return this.jW(a,b,null)},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gp:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.h(H.bu(a,b))
return a[b]},
$ijB:1,
$it:1}
H.a0.prototype={
gp:function(a){return this.a.length},
j:function(a,b){return C.j.b8(this.a,b)},
$adH:function(){return[P.v]},
$aR:function(){return[P.v]},
$ak:function(){return[P.v]},
$aa:function(){return[P.v]}}
H.ez.prototype={}
H.d8.prototype={
gJ:function(){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.ik(u)
s=t.gp(u)
if(this.b!==s)throw H.h(P.c1(u))
r=this.c
if(r>=s){this.sb4(null)
return!1}this.sb4(t.af(u,r));++this.c
return!0},
sb4:function(a){this.d=H.x(a,H.r(this,0))},
$iay:1}
H.f8.prototype={
gP:function(a){return new H.f9(J.ea(this.a),this.b,this.$ti)},
gp:function(a){return J.b0(this.a)},
af:function(a,b){return this.b.$1(J.jg(this.a,b))},
$ak:function(a,b){return[b]}}
H.f9.prototype={
B:function(){var u=this.b
if(u.B()){this.sb4(this.c.$1(u.gJ()))
return!0}this.sb4(null)
return!1},
gJ:function(){return this.a},
sb4:function(a){this.a=H.x(a,H.r(this,1))},
$aay:function(a,b){return[b]}}
H.hs.prototype={
gP:function(a){return new H.ht(J.ea(this.a),this.b,this.$ti)}}
H.ht.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}}
H.bF.prototype={}
H.dH.prototype={}
H.dG.prototype={}
H.fw.prototype={}
H.h2.prototype={
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
H.fl.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eS.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.he.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.c5.prototype={}
H.iu.prototype={
$1:function(a){if(!!J.P(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.dZ.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iY:1}
H.c_.prototype={
i:function(a){return"Closure '"+H.bJ(this).trim()+"'"},
$iiE:1,
gkG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fS.prototype={}
H.fO.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bV(u)+"'"}}
H.bX.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var u,t
u=this.c
if(u==null)t=H.cg(this.a)
else t=typeof u!=="object"?J.bx(u):H.cg(u)
return(t^H.cg(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bJ(u)+"'")}}
H.h4.prototype={
i:function(a){return this.a}}
H.em.prototype={
i:function(a){return this.a}}
H.fF.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aH.prototype={
gp:function(a){return this.a},
dX:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dk(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dk(t,a)}else return this.jS(a)},
jS:function(a){var u=this.d
if(u==null)return!1
return this.cN(this.cb(u,J.bx(a)&0x3ffffff),a)>=0},
aU:function(a,b){H.c(b,"$iU",this.$ti,"$aU").a7(0,new H.eR(this))},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.jT(b)},
jT:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cb(u,J.bx(a)&0x3ffffff)
s=this.cN(t,a)
if(s<0)return
return t[s].b},
a_:function(a,b,c){var u,t,s,r,q,p
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cg()
this.b=u}this.de(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cg()
this.c=t}this.de(t,b,c)}else{s=this.d
if(s==null){s=this.cg()
this.d=s}r=J.bx(b)&0x3ffffff
q=this.cb(s,r)
if(q==null)this.cq(s,r,[this.ci(b,c)])
else{p=this.cN(q,b)
if(p>=0)q[p].b=c
else q.push(this.ci(b,c))}}},
a7:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.c1(this))
u=u.c}},
de:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bm(a,b)
if(u==null)this.cq(a,b,this.ci(b,c))
else u.b=c},
ci:function(a,b){var u,t
u=new H.f0(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.jx(this)},
bm:function(a,b){return a[b]},
cb:function(a,b){return a[b]},
cq:function(a,b,c){a[b]=c},
fR:function(a,b){delete a[b]},
dk:function(a,b){return this.bm(a,b)!=null},
cg:function(){var u=Object.create(null)
this.cq(u,"<non-identifier-key>",u)
this.fR(u,"<non-identifier-key>")
return u},
$ijw:1}
H.eR.prototype={
$2:function(a,b){var u=this.a
u.a_(0,H.x(a,H.r(u,0)),H.x(b,H.r(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.z,args:[H.r(u,0),H.r(u,1)]}}}
H.f0.prototype={}
H.f1.prototype={
gp:function(a){return this.a.a},
gP:function(a){var u,t
u=this.a
t=new H.f2(u,u.r,this.$ti)
t.c=u.e
return t}}
H.f2.prototype={
gJ:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.c1(u))
else{u=this.c
if(u==null){this.sdd(null)
return!1}else{this.sdd(u.a)
this.c=this.c.c
return!0}}},
sdd:function(a){this.d=H.x(a,H.r(this,0))},
$iay:1}
H.il.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.im.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.io.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:40}
H.eQ.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
ghk:function(){var u=this.c
if(u!=null)return u
u=this.b
u=H.ju(this.a,u.multiline,!u.ignoreCase,!0)
this.c=u
return u},
jM:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.dW(this,u)},
fW:function(a,b){var u,t
u=this.ghk()
u.lastIndex=b
t=u.exec(a)
if(t==null)return
return new H.dW(this,t)},
$ijB:1}
H.dW.prototype={
j:function(a,b){return C.a.j(this.b,b)},
$ida:1}
H.hu.prototype={
gJ:function(){return this.d},
B:function(){var u,t,s,r
u=this.b
if(u==null)return!1
t=this.c
if(t<=u.length){s=this.a.fW(u,t)
if(s!=null){this.d=s
u=s.b
t=u.index
r=t+u[0].length
this.c=t===r?r+1:r
return!0}}this.d=null
this.b=null
return!1},
$iay:1,
$aay:function(){return[P.da]}}
H.dj.prototype={$imw:1}
H.dg.prototype={
gp:function(a){return a.length},
$ib3:1,
$ab3:function(){}}
H.dh.prototype={
j:function(a,b){H.cF(b,a,a.length)
return a[b]},
$abF:function(){return[P.y]},
$aR:function(){return[P.y]},
$ik:1,
$ak:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.di.prototype={
$abF:function(){return[P.v]},
$aR:function(){return[P.v]},
$ik:1,
$ak:function(){return[P.v]},
$ia:1,
$aa:function(){return[P.v]}}
H.fh.prototype={
j:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.fi.prototype={
j:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.fj.prototype={
j:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.dk.prototype={
gp:function(a){return a.length},
j:function(a,b){H.cF(b,a,a.length)
return a[b]},
$imx:1}
H.fk.prototype={
gp:function(a){return a.length},
j:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
P.hz.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:16}
P.hy.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.hA.prototype={
$0:function(){this.a.$0()},
$S:1}
P.hB.prototype={
$0:function(){this.a.$0()},
$S:1}
P.e0.prototype={
fv:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bR(new P.i5(this,b),0),a)
else throw H.h(P.aj("`setTimeout()` not found."))},
fw:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bR(new P.i4(this,a,Date.now(),b),0),a)
else throw H.h(P.aj("Periodic timer."))},
$iaV:1}
P.i5.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.i4.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.f7(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.dN.prototype={
az:function(a,b){var u
H.bT(b,{futureOr:1,type:H.r(this,0)})
if(this.b)this.a.az(0,b)
else if(H.ba(b,"$iaq",this.$ti,"$aaq")){u=this.a
b.bW(u.gjv(u),u.gdV(),-1)}else P.ja(new P.hw(this,b))},
aX:function(a,b){if(this.b)this.a.aX(a,b)
else P.ja(new P.hv(this,a,b))},
$iiB:1}
P.hw.prototype={
$0:function(){this.a.a.az(0,this.b)},
$S:1}
P.hv.prototype={
$0:function(){this.a.a.aX(this.b,this.c)},
$S:1}
P.i8.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:36}
P.i9.prototype={
$2:function(a,b){this.a.$2(1,new H.c5(a,H.i(b,"$iY")))},
$S:38}
P.ig.prototype={
$2:function(a,b){this.a(H.a_(a),b)},
$S:35}
P.dP.prototype={
aX:function(a,b){H.i(b,"$iY")
if(a==null)a=new P.cd()
if(this.a.a!==0)throw H.h(P.iQ("Future already completed"))
$.H.toString
this.aE(a,b)},
dW:function(a){return this.aX(a,null)},
$iiB:1}
P.hx.prototype={
az:function(a,b){var u
H.bT(b,{futureOr:1,type:H.r(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.iQ("Future already completed"))
u.fC(b)},
aE:function(a,b){this.a.fD(a,b)}}
P.e_.prototype={
az:function(a,b){var u
H.bT(b,{futureOr:1,type:H.r(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.iQ("Future already completed"))
u.c7(b)},
jw:function(a){return this.az(a,null)},
aE:function(a,b){this.a.aE(a,b)}}
P.b_.prototype={
k_:function(a){if(this.c!==6)return!0
return this.b.b.cW(H.l(this.d,{func:1,ret:P.Z,args:[P.C]}),a.a,P.Z,P.C)},
jP:function(a){var u,t,s,r
u=this.e
t=P.C
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.e4(u,{func:1,args:[P.C,P.Y]}))return H.bT(r.ku(u,a.a,a.b,null,t,P.Y),s)
else return H.bT(r.cW(H.l(u,{func:1,args:[P.C]}),a.a,null,t),s)}}
P.a6.prototype={
bW:function(a,b,c){var u,t
u=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.H
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lE(b,t)}return this.cs(a,b,c)},
aj:function(a,b){return this.bW(a,null,b)},
cs:function(a,b,c){var u,t,s
u=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.a6(0,$.H,[c])
s=b==null?1:3
this.df(new P.b_(t,s,a,b,[u,c]))
return t},
df:function(a){var u,t
u=this.a
if(u<=1){a.a=H.i(this.c,"$ib_")
this.c=a}else{if(u===2){t=H.i(this.c,"$ia6")
u=t.a
if(u<4){t.df(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.bP(null,null,u,H.l(new P.hH(this,a),{func:1,ret:-1}))}},
dA:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.i(this.c,"$ib_")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.i(this.c,"$ia6")
t=p.a
if(t<4){p.dA(a)
return}this.a=t
this.c=p.c}u.a=this.bs(a)
t=this.b
t.toString
P.bP(null,null,t,H.l(new P.hP(u,this),{func:1,ret:-1}))}},
br:function(){var u=H.i(this.c,"$ib_")
this.c=null
return this.bs(u)},
bs:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c7:function(a){var u,t,s
u=H.r(this,0)
H.bT(a,{futureOr:1,type:u})
t=this.$ti
if(H.ba(a,"$iaq",t,"$aaq"))if(H.ba(a,"$ia6",t,null))P.hK(a,this)
else P.jV(a,this)
else{s=this.br()
H.x(a,u)
this.a=4
this.c=a
P.bN(this,s)}},
aE:function(a,b){var u
H.i(b,"$iY")
u=this.br()
this.a=8
this.c=new P.ae(a,b)
P.bN(this,u)},
fC:function(a){var u
H.bT(a,{futureOr:1,type:H.r(this,0)})
if(H.ba(a,"$iaq",this.$ti,"$aaq")){this.fK(a)
return}this.a=1
u=this.b
u.toString
P.bP(null,null,u,H.l(new P.hJ(this,a),{func:1,ret:-1}))},
fK:function(a){var u=this.$ti
H.c(a,"$iaq",u,"$aaq")
if(H.ba(a,"$ia6",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.bP(null,null,u,H.l(new P.hO(this,a),{func:1,ret:-1}))}else P.hK(a,this)
return}P.jV(a,this)},
fD:function(a,b){var u
this.a=1
u=this.b
u.toString
P.bP(null,null,u,H.l(new P.hI(this,a,b),{func:1,ret:-1}))},
$iaq:1}
P.hH.prototype={
$0:function(){P.bN(this.a,this.b)},
$S:1}
P.hP.prototype={
$0:function(){P.bN(this.b,this.a.a)},
$S:1}
P.hL.prototype={
$1:function(a){var u=this.a
u.a=0
u.c7(a)},
$S:16}
P.hM.prototype={
$2:function(a,b){H.i(b,"$iY")
this.a.aE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.hN.prototype={
$0:function(){this.a.aE(this.b,this.c)},
$S:1}
P.hJ.prototype={
$0:function(){var u,t,s
u=this.a
t=H.x(this.b,H.r(u,0))
s=u.br()
u.a=4
u.c=t
P.bN(u,s)},
$S:1}
P.hO.prototype={
$0:function(){P.hK(this.b,this.a)},
$S:1}
P.hI.prototype={
$0:function(){this.a.aE(this.b,this.c)},
$S:1}
P.hS.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eG(H.l(r.d,{func:1}),null)}catch(q){t=H.ah(q)
s=H.bw(q)
if(this.d){r=H.i(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.i(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.P(u).$iaq){if(u instanceof P.a6&&u.a>=4){if(u.a===8){r=this.b
r.b=H.i(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.aj(new P.hT(o),null)
r.a=!1}},
$S:3}
P.hT.prototype={
$1:function(a){return this.a},
$S:30}
P.hR.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cW(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ah(o)
t=H.bw(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.hQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.i(this.a.a.c,"$iae")
r=this.c
if(r.k_(u)&&r.e!=null){q=this.b
q.b=r.jP(u)
q.a=!1}}catch(p){t=H.ah(p)
s=H.bw(p)
r=H.i(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.dO.prototype={}
P.ck.prototype={
gp:function(a){var u,t,s,r
u={}
t=new P.a6(0,$.H,[P.v])
u.a=0
s=H.r(this,0)
r=H.l(new P.fQ(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.fR(u,t),{func:1,ret:-1})
W.V(this.a,this.b,r,!1,s)
return t}}
P.fQ.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.r(this.b,0)]}}}
P.fR.prototype={
$0:function(){this.b.c7(this.a.a)},
$S:1}
P.cl.prototype={}
P.fP.prototype={}
P.i3.prototype={}
P.aV.prototype={}
P.ae.prototype={
i:function(a){return H.j(this.a)},
$ibi:1}
P.i7.prototype={$imK:1}
P.id.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cd()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:1}
P.hZ.prototype={
kv:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.H){a.$0()
return}P.k0(null,null,this,a,-1)}catch(s){u=H.ah(s)
t=H.bw(s)
P.ic(null,null,this,u,H.i(t,"$iY"))}},
kw:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.k===$.H){a.$1(b)
return}P.k1(null,null,this,a,b,-1,c)}catch(s){u=H.ah(s)
t=H.bw(s)
P.ic(null,null,this,u,H.i(t,"$iY"))}},
jl:function(a,b){return new P.i0(this,H.l(a,{func:1,ret:b}),b)},
cz:function(a){return new P.i_(this,H.l(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.i1(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
eG:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.k)return a.$0()
return P.k0(null,null,this,a,b)},
cW:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.H===C.k)return a.$1(b)
return P.k1(null,null,this,a,b,c,d)},
ku:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.H===C.k)return a.$2(b,c)
return P.lF(null,null,this,a,b,c,d,e,f)},
eD:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}}
P.i0.prototype={
$0:function(){return this.a.eG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.i_.prototype={
$0:function(){return this.a.kv(this.b)},
$S:3}
P.i1.prototype={
$1:function(a){var u=this.c
return this.a.kw(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hW.prototype={
gP:function(a){return P.jX(this,this.r,H.r(this,0))},
gp:function(a){return this.a},
h:function(a,b){var u
H.x(b,H.r(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.jY()
this.c=u}return this.fN(u,b)}else return this.fM(b)},
fM:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.jY()
this.d=u}t=this.di(a)
s=u[t]
if(s==null)u[t]=[this.c6(a)]
else{if(this.dr(s,a)>=0)return!1
s.push(this.c6(a))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.io(this.c,b)
else return this.im(b)},
im:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.h1(u,a)
s=this.dr(t,a)
if(s<0)return!1
this.dI(t.splice(s,1)[0])
return!0},
fN:function(a,b){H.x(b,H.r(this,0))
if(H.i(a[b],"$icA")!=null)return!1
a[b]=this.c6(b)
return!0},
io:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$icA")
if(u==null)return!1
this.dI(u)
delete a[b]
return!0},
ds:function(){this.r=1073741823&this.r+1},
c6:function(a){var u,t
u=new P.cA(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.ds()
return u},
dI:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.ds()},
di:function(a){return J.bx(a)&1073741823},
h1:function(a,b){return a[this.di(b)]},
dr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cA.prototype={}
P.hX.prototype={
gJ:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.c1(u))
else{u=this.c
if(u==null){this.sdh(null)
return!1}else{this.sdh(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdh:function(a){this.d=H.x(a,H.r(this,0))},
$iay:1}
P.f3.prototype={$ik:1,$ia:1}
P.R.prototype={
gP:function(a){return new H.d8(a,this.gp(a),0,[H.e7(this,a,"R",0)])},
af:function(a,b){return this.j(a,b)},
kA:function(a,b){var u,t
u=H.b([],[H.e7(this,a,"R",0)])
C.a.sp(u,this.gp(a))
for(t=0;t<this.gp(a);++t)C.a.a_(u,t,this.j(a,t))
return u},
kz:function(a){return this.kA(a,!0)},
n:function(a,b){var u,t
u=[H.e7(this,a,"R",0)]
H.c(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sp(t,C.d.n(this.gp(a),b.gp(b)))
C.a.bi(t,0,this.gp(a),a)
C.a.bi(t,this.gp(a),t.length,b)
return t},
i:function(a){return P.iF(a,"[","]")}}
P.f5.prototype={}
P.f6.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:13}
P.f7.prototype={
gp:function(a){return this.a},
i:function(a){return P.jx(this)},
$iU:1}
P.i2.prototype={
i:function(a){return P.iF(this,"{","}")},
af:function(a,b){var u,t,s
if(b<0)H.o(P.aB(b,0,null,"index",null))
for(u=P.jX(this,this.r,H.r(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.c8(b,this,"index",null,t))},
$ik:1,
$ijL:1}
P.dV.prototype={}
P.c0.prototype={}
P.cU.prototype={}
P.eA.prototype={
$ac0:function(){return[P.t,[P.a,P.v]]}}
P.hg.prototype={}
P.hh.prototype={
jy:function(a,b,c){var u,t,s
c=P.iN(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.i6(t)
if(s.h0(a,b,c)!==c)s.dJ(C.j.b8(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lA(0,s.b,t.length)))},
jx:function(a){return this.jy(a,0,null)},
$acU:function(){return[P.t,[P.a,P.v]]}}
P.i6.prototype={
dJ:function(a,b){var u,t,s,r,q
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
h0:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.b8(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aQ(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dJ(r,C.j.aQ(a,p)))s=p}else if(r<=2047){q=this.b
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
P.Z.prototype={}
P.aw.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.d.bv(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kM(H.lc(this))
t=P.cW(H.la(this))
s=P.cW(H.l6(this))
r=P.cW(H.l7(this))
q=P.cW(H.l9(this))
p=P.cW(H.lb(this))
o=P.kN(H.l8(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.y.prototype={}
P.b1.prototype={
n:function(a,b){return new P.b1(C.d.n(this.a,b.gdq()))},
W:function(a,b){return C.d.W(this.a,b.gdq())},
b0:function(a,b){return C.d.b0(this.a,b.gdq())},
v:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eu()
t=this.a
if(t<0)return"-"+new P.b1(0-t).i(0)
s=u.$1(C.d.a2(t,6e7)%60)
r=u.$1(C.d.a2(t,1e6)%60)
q=new P.et().$1(t%1e6)
return""+C.d.a2(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.et.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.eu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bi.prototype={}
P.cd.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gc9:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc9()+t+s
if(!this.a)return r
q=this.gc8()
p=P.eC(this.b)
return r+q+": "+p}}
P.bK.prototype={
gc9:function(){return"RangeError"},
gc8:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.eN.prototype={
gc9:function(){return"RangeError"},
gc8:function(){var u,t
u=H.a_(this.b)
if(typeof u!=="number")return u.W()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gp:function(a){return this.f}}
P.hf.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hd.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ep.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eC(u)+"."}}
P.fm.prototype={
i:function(a){return"Out of Memory"},
$ibi:1}
P.dv.prototype={
i:function(a){return"Stack Overflow"},
$ibi:1}
P.er.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dS.prototype={
i:function(a){return"Exception: "+this.a}}
P.eI.prototype={
i:function(a){var u,t,s,r
u=this.a
t=u!=null&&""!==u?"FormatException: "+H.j(u):"FormatException"
s=this.b
if(typeof s==="string"){r=s.length>78?C.j.bj(s,0,75)+"...":s
return t+"\n"+r}else return t}}
P.v.prototype={}
P.k.prototype={
gp:function(a){var u,t
u=this.gP(this)
for(t=0;u.B();)++t
return t},
af:function(a,b){var u,t,s
if(b<0)H.o(P.aB(b,0,null,"index",null))
for(u=this.gP(this),t=0;u.B();){s=u.gJ()
if(b===t)return s;++t}throw H.h(P.c8(b,this,"index",null,t))},
i:function(a){return P.kR(this,"(",")")}}
P.ay.prototype={}
P.a.prototype={$ik:1}
P.U.prototype={}
P.z.prototype={
gF:function(a){return P.C.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.C.prototype={constructor:P.C,$iC:1,
v:function(a,b){return this===b},
gF:function(a){return H.cg(this)},
i:function(a){return"Instance of '"+H.bJ(this)+"'"},
toString:function(){return this.i(this)}}
P.da.prototype={}
P.Y.prototype={}
P.t.prototype={$ijB:1}
P.bq.prototype={
gp:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.ec.prototype={
i:function(a){return String(a)}}
W.ed.prototype={
i:function(a){return String(a)}}
W.cO.prototype={}
W.bz.prototype={
c_:function(a,b,c){if(c!=null)return this.h2(a,b,P.lM(c,null))
return this.h3(a,b)},
eS:function(a,b){return this.c_(a,b,null)},
h2:function(a,b,c){return a.getContext(b,c)},
h3:function(a,b){return a.getContext(b)},
$ibz:1,
$ijl:1}
W.bA.prototype={
h4:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jI:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibA:1}
W.bg.prototype={
gp:function(a){return a.length}}
W.c2.prototype={
gp:function(a){return a.length}}
W.eq.prototype={}
W.c3.prototype={$ic3:1}
W.c4.prototype={
eT:function(a,b){return a.getElementById(b)}}
W.es.prototype={
i:function(a){return String(a)}}
W.cX.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.ba(b,"$iaC",[P.ac],"$aaC"))return!1
u=J.e5(b)
return a.left===u.gbS(b)&&a.top===u.gbX(b)&&a.width===u.gbZ(b)&&a.height===u.gbQ(b)},
gF:function(a){return W.jW(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(a.width),C.i.gF(a.height))},
gdP:function(a){return a.bottom},
gbQ:function(a){return a.height},
gbS:function(a){return a.left},
gbV:function(a){return a.right},
gbX:function(a){return a.top},
gbZ:function(a){return a.width},
$iaC:1,
$aaC:function(){return[P.ac]}}
W.hD.prototype={
gp:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.i(u[b],"$ia1")},
h:function(a,b){J.jf(this.a,b)
return b},
gP:function(a){var u=this.kz(this)
return new J.ad(u,u.length,0,[H.r(u,0)])},
$aR:function(){return[W.a1]},
$ak:function(){return[W.a1]},
$aa:function(){return[W.a1]}}
W.a1.prototype={
gdS:function(a){return new W.hD(a,a.children)},
gdU:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.W()
if(s<0)s=-s*0
if(typeof r!=="number")return r.W()
if(r<0)r=-r*0
return new P.aC(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$ia1:1}
W.m.prototype={$im:1}
W.bE.prototype={
fB:function(a,b,c,d){return a.addEventListener(b,H.bR(H.l(c,{func:1,args:[W.m]}),1),!1)},
$ibE:1}
W.eH.prototype={
gp:function(a){return a.length}}
W.bG.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c8(b,a,null,null,null))
return a[b]},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ib3:1,
$ab3:function(){return[W.J]},
$aR:function(){return[W.J]},
$ik:1,
$ak:function(){return[W.J]},
$ia:1,
$aa:function(){return[W.J]},
$ibG:1,
$aaF:function(){return[W.J]}}
W.d0.prototype={}
W.aP.prototype={
kN:function(a,b,c,d,e,f){return a.open(b,c)},
kc:function(a,b,c,d){return a.open(b,c,d)},
$iaP:1}
W.eK.prototype={
$1:function(a){return H.i(a,"$iaP").responseText},
$S:28}
W.eL.prototype={
$1:function(a){var u,t,s,r,q
H.i(a,"$iaU")
u=this.a
t=u.status
if(typeof t!=="number")return t.b0()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.az(0,u)
else q.dW(a)},
$S:27}
W.d1.prototype={}
W.bj.prototype={$ibj:1,
gdZ:function(a){return a.data}}
W.c7.prototype={$ic7:1,$ijl:1}
W.aQ.prototype={$iaQ:1}
W.cb.prototype={}
W.a5.prototype={$ia5:1}
W.hC.prototype={
gP:function(a){var u=this.a.childNodes
return new W.cZ(u,u.length,-1,[H.e7(C.O,u,"aF",0)])},
gp:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aR:function(){return[W.J]},
$ak:function(){return[W.J]},
$aa:function(){return[W.J]}}
W.J.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.f4(a):u},
Z:function(a,b){return a.appendChild(b)},
$iJ:1}
W.cc.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c8(b,a,null,null,null))
return a[b]},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ib3:1,
$ab3:function(){return[W.J]},
$aR:function(){return[W.J]},
$ik:1,
$ak:function(){return[W.J]},
$ia:1,
$aa:function(){return[W.J]},
$aaF:function(){return[W.J]}}
W.aU.prototype={$iaU:1}
W.fG.prototype={
gp:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aK.prototype={$iaK:1}
W.h1.prototype={
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c8(b,a,null,null,null))
return a[b]},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ib3:1,
$ab3:function(){return[W.aW]},
$aR:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ia:1,
$aa:function(){return[W.aW]},
$aaF:function(){return[W.aW]}}
W.bs.prototype={}
W.hr.prototype={$ijl:1}
W.aZ.prototype={
gjE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aj("deltaY is not supported"))},
gjD:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aj("deltaX is not supported"))},
$iaZ:1}
W.cz.prototype={
iq:function(a,b){return a.requestAnimationFrame(H.bR(H.l(b,{func:1,ret:-1,args:[P.ac]}),1))},
fU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dR.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.ba(b,"$iaC",[P.ac],"$aaC"))return!1
u=J.e5(b)
return a.left===u.gbS(b)&&a.top===u.gbX(b)&&a.width===u.gbZ(b)&&a.height===u.gbQ(b)},
gF:function(a){return W.jW(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(a.width),C.i.gF(a.height))},
gbQ:function(a){return a.height},
gbZ:function(a){return a.width}}
W.hE.prototype={}
W.iY.prototype={}
W.hF.prototype={
iO:function(){var u,t
u=this.d
t=u!=null
if(t&&this.a<=0){H.l(u,{func:1,args:[W.m]})
if(t)J.kD(this.b,this.c,u,!1)}}}
W.hG.prototype={
$1:function(a){return this.a.$1(H.i(a,"$im"))},
$S:26}
W.aF.prototype={
gP:function(a){return new W.cZ(a,this.gp(a),-1,[H.e7(this,a,"aF",0)])}}
W.cZ.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdn(J.M(this.a,u))
this.c=u
return!0}this.sdn(null)
this.c=t
return!1},
gJ:function(){return this.d},
sdn:function(a){this.d=H.x(a,H.r(this,0))},
$iay:1}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e1.prototype={}
W.e2.prototype={}
P.e3.prototype={$ibj:1,
gdZ:function(a){return this.a}}
P.ih.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.eE.prototype={
gcc:function(){var u,t,s
u=this.b
t=H.ap(u,"R",0)
s=W.a1
return new H.f8(new H.hs(u,H.l(new P.eF(),{func:1,ret:P.Z,args:[t]}),[t]),H.l(new P.eG(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jf(this.b.a,b)},
gp:function(a){return J.b0(this.gcc().a)},
j:function(a,b){var u=this.gcc()
return u.b.$1(J.jg(u.a,b))},
gP:function(a){var u=P.l0(this.gcc(),!1,W.a1)
return new J.ad(u,u.length,0,[H.r(u,0)])},
$aR:function(){return[W.a1]},
$ak:function(){return[W.a1]},
$aa:function(){return[W.a1]}}
P.eF.prototype={
$1:function(a){return!!J.P(H.i(a,"$iJ")).$ia1},
$S:23}
P.eG.prototype={
$1:function(a){return H.d(H.i(a,"$iJ"),"$ia1")},
$S:43}
P.hY.prototype={
gbV:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
gdP:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.ba(b,"$iaC",[P.ac],"$aaC")){u=this.a
t=J.e5(b)
if(u==t.gbS(b)){s=this.b
if(s==t.gbX(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gbV(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.gdP(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t,s,r,q
u=this.a
t=J.bx(u)
s=this.b
r=J.bx(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.d.gF(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.d.gF(H.x(s+this.d,q))
return P.lw(P.hV(P.hV(P.hV(P.hV(0,t),r),u),q))}}
P.aC.prototype={
gbS:function(a){return this.a},
gbX:function(a){return this.b},
gbZ:function(a){return this.c},
gbQ:function(a){return this.d}}
P.p.prototype={
gdS:function(a){return new P.eE(a,new W.hC(a))}}
P.cP.prototype={$icP:1}
P.d_.prototype={$id_:1}
P.dn.prototype={$idn:1}
P.bL.prototype={
by:function(a,b){return a.activeTexture(b)},
dN:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
jm:function(a,b,c){return a.bindFramebuffer(b,c)},
a3:function(a,b,c){return a.bindTexture(b,c)},
jn:function(a,b,c){return a.blendFunc(b,c)},
dQ:function(a,b,c,d){return a.bufferData(b,c,d)},
jr:function(a,b){return a.clear(b)},
js:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jt:function(a,b){return a.clearDepth(b)},
ju:function(a,b){return a.compileShader(b)},
jz:function(a,b){return a.createShader(b)},
jB:function(a,b){return a.deleteProgram(b)},
jC:function(a,b){return a.deleteShader(b)},
jF:function(a,b){return a.depthFunc(b)},
jG:function(a,b){return a.disable(b)},
e0:function(a,b){return a.disableVertexAttribArray(b)},
jH:function(a,b,c,d,e){return a.drawElements(b,c,H.a_(d),H.a_(e))},
cF:function(a,b){return a.enable(b)},
e2:function(a,b){return a.enableVertexAttribArray(b)},
eO:function(a,b){return a.generateMipmap(b)},
eP:function(a,b,c){return a.getActiveAttrib(b,c)},
eQ:function(a,b,c){return a.getActiveUniform(b,c)},
eR:function(a,b,c){return a.getAttribLocation(b,c)},
d_:function(a,b){return a.getParameter(b)},
eU:function(a,b){return a.getProgramInfoLog(b)},
c0:function(a,b,c){return a.getProgramParameter(b,c)},
eV:function(a,b){return a.getShaderInfoLog(b)},
eW:function(a,b,c){return a.getShaderParameter(b,c)},
eX:function(a,b,c){return a.getUniformLocation(b,c)},
jX:function(a,b){return a.linkProgram(b)},
eC:function(a,b,c){return a.pixelStorei(b,c)},
f2:function(a,b,c){return a.shaderSource(b,c)},
kx:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.P(g)
if(!!u.$ibj)t=!0
else t=!1
if(t){this.iC(a,b,c,d,e,f,P.lN(g))
return}if(!!u.$ic7)u=!0
else u=!1
if(u){this.iD(a,b,c,d,e,f,g)
return}throw H.h(P.kF("Incorrect number or type of arguments"))},
eH:function(a,b,c,d,e,f,g){return this.kx(a,b,c,d,e,f,g,null,null,null)},
iC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d){return a.texParameteri(b,c,d)},
G:function(a,b,c){return a.uniform1f(b,c)},
H:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cY:function(a,b){return a.useProgram(b)},
kD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kF:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibL:1}
P.dq.prototype={$idq:1}
P.dw.prototype={$idw:1}
P.dF.prototype={$idF:1}
O.N.prototype={
bk:function(a){this.sh9(H.b([],[a]))
this.sdw(null)
this.sdt(null)
this.sdz(null)},
d0:function(a,b,c){var u=H.ap(this,"N",0)
H.l(b,{func:1,ret:P.Z,args:[[P.k,u]]})
u={func:1,ret:-1,args:[P.v,[P.k,u]]}
H.l(a,u)
H.l(c,u)
this.sdw(b)
this.sdt(a)
this.sdz(c)},
b1:function(a,b){return this.d0(a,null,b)},
aJ:function(a){var u
H.c(a,"$ik",[H.ap(this,"N",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d7:function(a,b){var u
H.c(b,"$ik",[H.ap(this,"N",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gp:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ad(u,u.length,0,[H.r(u,0)])},
af:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ap(this,"N",0)
H.x(b,u)
u=[u]
if(this.aJ(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d7(s,H.b([b],u))}},
aU:function(a,b){var u,t
H.c(b,"$ik",[H.ap(this,"N",0)],"$ak")
if(this.aJ(b)){u=this.a
t=u.length
C.a.aU(u,b)
this.d7(t,b)}},
j:function(a,b){var u=this.a
if(b>=u.length)return H.e(u,b)
return u[b]},
sh9:function(a){this.a=H.c(a,"$ia",[H.ap(this,"N",0)],"$aa")},
sdw:function(a){this.b=H.l(a,{func:1,ret:P.Z,args:[[P.k,H.ap(this,"N",0)]]})},
sdt:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.v,[P.k,H.ap(this,"N",0)]]})},
sdz:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.v,[P.k,H.ap(this,"N",0)]]})},
$ik:1}
O.ca.prototype={
gp:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
fm:function(a){var u=this.b
if(u!=null)u.E(a)},
aP:function(){return this.fm(null)},
gN:function(){var u=this.a
if(u.length>0)return C.a.gcP(u)
else return V.bo()},
bU:function(a){var u=this.a
if(a==null)C.a.h(u,V.bo())
else C.a.h(u,a)
this.aP()},
aN:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
scd:function(a){this.a=H.c(a,"$ia",[V.a7],"$aa")}}
E.ef.prototype={}
E.K.prototype={
ac:function(a,b,c,d,e,f){this.a=d
this.b=!0
this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.sfn(0,O.iz(E.K))
this.y.b1(this.gk0(),this.gk7())
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
this.sab(0,e)
this.sa1(f)
this.sbT(c)},
dg:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();){t=u.d
if(t.f==null)t.dg()}},
sab:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().O(0,this.gey())
t=this.c
if(t!=null)t.gq().h(0,this.gey())
s=new D.B("shape",u,this.c,this,[F.dr])
s.b=!0
this.a8(s)}},
sa1:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gq().O(0,this.geA())
t=this.f
this.f=a
if(a!=null)a.gq().h(0,this.geA())
this.dg()
s=new D.B("technique",t,this.f,this,[O.br])
s.b=!0
this.a8(s)}},
sbT:function(a){var u,t
if(!J.W(this.r,a)){u=this.r
if(u!=null)u.gq().O(0,this.gew())
if(a!=null)a.gq().h(0,this.gew())
this.r=a
t=new D.B("mover",u,a,this,[U.af])
t.b=!0
this.a8(t)}},
aD:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.W(t,this.x)){s=this.x
this.x=t
r=new D.B("matrix",s,t,this,[V.a7])
r.b=!0
this.a8(r)}u=this.f
if(u!=null)u.aD(a)
for(u=this.y.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();)u.d.aD(a)},
a9:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gN())
else C.a.h(u.a,t.k(0,u.gN()))
u.aP()
a.cV(this.f)
u=a.dy
s=(u&&C.a).gcP(u)
if(s!=null&&this.d!=null)s.eE(a,this)
for(u=this.y.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();)u.d.a9(a)
a.cU()
a.dx.aN()},
gq:function(){var u=this.z
if(u==null){u=D.I()
this.z=u}return u},
a8:function(a){var u=this.z
if(u!=null)u.E(a)},
a4:function(){return this.a8(null)},
ez:function(a){H.i(a,"$iw")
this.e=null
this.a8(a)},
ka:function(){return this.ez(null)},
eB:function(a){this.a8(H.i(a,"$iw"))},
kb:function(){return this.eB(null)},
ex:function(a){this.a8(H.i(a,"$iw"))},
k9:function(){return this.ex(null)},
ev:function(a){this.a8(H.i(a,"$iw"))},
k6:function(){return this.ev(null)},
k5:function(a,b){var u,t,s,r,q,p,o
H.c(b,"$ik",[E.K],"$ak")
for(u=b.length,t=this.geu(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bD()
o.sad(null)
o.sbo(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sad(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
k8:function(a,b){var u,t
H.c(b,"$ik",[E.K],"$ak")
for(u=b.gP(b),t=this.geu();u.B();)u.gJ().gq().O(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfn:function(a,b){this.y=H.c(b,"$iN",[E.K],"$aN")},
$iaT:1}
E.fx.prototype={
fh:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aw(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ca()
t=[V.a7]
u.scd(H.b([],t))
u.b=null
u.gq().h(0,new E.fy(this))
this.cy=u
u=new O.ca()
u.scd(H.b([],t))
u.b=null
u.gq().h(0,new E.fz(this))
this.db=u
u=new O.ca()
u.scd(H.b([],t))
u.b=null
u.gq().h(0,new E.fA(this))
this.dx=u
this.siB(H.b([],[O.br]))
u=this.dy;(u&&C.a).h(u,null)
this.six(new H.aH([P.t,A.ch]))},
gkp:function(){var u=this.z
if(u==null){u=this.cy.gN().k(0,this.db.gN())
this.z=u}return u},
cV:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcP(u):a;(u&&C.a).h(u,t)},
cU:function(){var u=this.dy
if(u.length>1)u.pop()},
dM:function(a){var u=a.b
if(u.length===0)throw H.h(P.n("May not cache a shader with no name."))
if(this.fr.dX(u))throw H.h(P.n('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a_(0,u,a)},
siB:function(a){this.dy=H.c(a,"$ia",[O.br],"$aa")},
six:function(a){this.fr=H.c(a,"$iU",[P.t,A.ch],"$aU")}}
E.fy.prototype={
$1:function(a){var u
H.i(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:12}
E.fz.prototype={
$1:function(a){var u
H.i(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:12}
E.fA.prototype={
$1:function(a){var u
H.i(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:12}
E.dB.prototype={
da:function(a){H.i(a,"$iw")
this.eF()},
d9:function(){return this.da(null)},
gjO:function(){var u,t,s
u=Date.now()
t=C.d.a2(P.jp(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aw(u,!1)
return s/t},
dC:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.f(u)
s=C.i.cM(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.k()
r=C.i.cM(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.iS(C.n,this.gks())}},
eF:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.fX(this),{func:1,ret:-1,args:[P.ac]})
C.z.fU(u)
C.z.iq(u,W.k6(t,P.ac))}},
kr:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dC()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.jp(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sp(r.a,0)
r.aP()
r=s.db
C.a.sp(r.a,0)
r.aP()
r=s.dx
C.a.sp(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sp(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a9(this.e)}}catch(q){u=H.ah(q)
t=H.bw(q)
P.e8("Error: "+H.j(u))
P.e8("Stack: "+H.j(t))
throw H.h(u)}}}
E.fX.prototype={
$1:function(a){var u
H.m5(a)
u=this.a
if(u.ch){u.ch=!1
u.kr()}},
$S:24}
Z.dL.prototype={$imd:1}
Z.cQ.prototype={
T:function(a){var u,t,s
try{t=a.a
C.b.e2(t,this.e)
C.b.kD(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ah(s)
t=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.dM.prototype={$ime:1}
Z.bZ.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
T:function(a){var u,t
u=this.a
C.b.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].T(a)},
as:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e0(s,u[t].e)
C.b.ay(s,this.a.a,null)},
a9:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ay(t,p,r.b)
C.b.jH(t,q.a,q.b,5123,0)
C.b.ay(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.t]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.au(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(t,", ")+"\nAttrs:   "+C.a.C(p,", ")},
sh5:function(a){this.b=H.c(a,"$ia",[Z.bk],"$aa")},
$iml:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bJ(this.c)+"'")+"]"}}
Z.aY.prototype={
gd2:function(a){var u,t
u=this.a
t=(u&$.aM().a)!==0?3:0
if((u&$.bd().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=4
if((u&$.bW().a)!==0)++t
return(u&$.bb().a)!==0?t+4:t},
jj:function(a){var u,t,s
u=$.aM()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0)if(s===a)return u
return $.kB()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.t])
t=this.a
if((t&$.aM().a)!==0)C.a.h(u,"Pos")
if((t&$.bd().a)!==0)C.a.h(u,"Norm")
if((t&$.bc().a)!==0)C.a.h(u,"Binm")
if((t&$.be().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bf().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cK().a)!==0)C.a.h(u,"Clr3")
if((t&$.cL().a)!==0)C.a.h(u,"Clr4")
if((t&$.bW().a)!==0)C.a.h(u,"Weight")
if((t&$.bb().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.en.prototype={}
D.bD.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.l(b,u)
if(this.a==null)this.sad(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.aY(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
return t},
E:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.w(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a7(t,new D.eD(u))
return!0},
e1:function(){return this.E(null)},
kt:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.E(t)}}},
b_:function(){return this.kt(!0,!1)},
sad:function(a){this.a=H.c(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbo:function(a){this.b=H.c(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
D.eD.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.w.prototype={}
D.bl.prototype={}
D.bm.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
O.ia.prototype={
aq:function(a,b,c){var u=0,t=P.an(null),s=this
var $async$aq=P.ao(function(d,e){if(d===1)return P.ak(e,t)
while(true)switch(u){case 0:u=2
return P.ab(s.ap(H.b(a.split("\n"),[P.t]),b,!1),$async$aq)
case 2:return P.al(null,t)}})
return P.am($async$aq,t)},
ap:function(a,b,c){H.c(a,"$ia",[P.t],"$aa")
return this.kn(a,b,!1)},
kn:function(a,b,c){var u=0,t=P.an(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ap=P.ao(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.je(o,a.length)){u=4
break}s=6
u=9
return P.ab(p.a0(C.a.j(a,o),b,!1),$async$ap)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ah(k)
l=P.n("Line "+H.j(J.e9(o,1))+": "+H.j(n))
throw H.h(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.e9(o,1)
u=2
break
case 4:return P.al(null,t)
case 1:return P.ak(r,t)}})
return P.am($async$ap,t)},
a0:function(a,b,c){return this.kl(a,b,!1)},
kl:function(a,b,c){var u=0,t=P.an(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$a0=P.ao(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.jh(a,"#")
if(J.jd(n,0))a=J.ji(a,0,n)
a=J.iv(a)
if(J.b0(a)<=0){u=1
break}m=O.k4(a)
if(J.b0(m)<1){u=1
break}case 7:switch(J.M(m,0)){case"newmtl":u=9
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
case 9:k=J.M(m,1)
j=O.az()
o.c=j
o.b.a_(0,k,j)
u=1
break
case 10:i=O.b9(J.M(m,1))
o.c.r.st(0,V.iA(i))
u=1
break
case 11:i=O.b9(J.M(m,1))
o.c.x.st(0,V.iA(i))
u=1
break
case 12:i=O.b9(J.M(m,1))
o.c.z.st(0,V.iA(i))
u=1
break
case 13:i=O.b9(J.M(m,1))
k=i.length
if(k!==1)H.o(P.n("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.e(i,0)
u=1
break}j.sa6(i[0])
u=1
break
case 14:i=O.b9(J.M(m,1))
k=i.length
if(k!==1)H.o(P.n("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}j.seM(0,i[0])
u=1
break
case 15:i=O.b9(J.M(m,1))
k=i.length
if(k!==1)H.o(P.n("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.f(k)
u=1
break}j.seM(0,1-k)
u=1
break
case 16:u=23
return P.ab(o.cl(J.M(m,1),b),$async$a0)
case 23:u=1
break
case 17:u=24
return P.ab(o.cm(J.M(m,1),b),$async$a0)
case 24:u=1
break
case 18:u=25
return P.ab(o.cn(J.M(m,1),b),$async$a0)
case 25:u=1
break
case 19:u=26
return P.ab(o.ck(J.M(m,1),b),$async$a0)
case 26:u=1
break
case 20:u=27
return P.ab(o.bp(J.M(m,1),b),$async$a0)
case 27:u=1
break
case 21:u=28
return P.ab(o.bp(J.M(m,1),b),$async$a0)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.ah(g)
k=P.n('Line: "'+H.j(a)+'": '+H.j(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.al(s,t)
case 2:return P.ak(q,t)}})
return P.am($async$a0,t)},
cl:function(a,b){var u=0,t=P.an(null),s=this,r
var $async$cl=P.ao(function(c,d){if(c===1)return P.ak(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sa5(s.a.an(r))
return P.al(null,t)}})
return P.am($async$cl,t)},
cm:function(a,b){var u=0,t=P.an(null),s=this,r
var $async$cm=P.ao(function(c,d){if(c===1)return P.ak(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sa5(s.a.an(r))
return P.al(null,t)}})
return P.am($async$cm,t)},
cn:function(a,b){var u=0,t=P.an(null),s=this,r
var $async$cn=P.ao(function(c,d){if(c===1)return P.ak(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sa5(s.a.an(r))
return P.al(null,t)}})
return P.am($async$cn,t)},
ck:function(a,b){var u=0,t=P.an(null),s=this,r
var $async$ck=P.ao(function(c,d){if(c===1)return P.ak(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sa5(s.a.an(r))
return P.al(null,t)}})
return P.am($async$ck,t)},
bp:function(a,b){var u=0,t=P.an(null),s=this,r
var $async$bp=P.ao(function(c,d){if(c===1)return P.ak(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sa5(s.a.an(r))
return P.al(null,t)}})
return P.am($async$bp,t)},
scf:function(a){this.b=H.c(a,"$iU",[P.t,O.ar],"$aU")}}
O.cJ.prototype={
skE:function(a){this.b=H.c(a,"$ia",[F.aa],"$aa")}}
O.ib.prototype={
gjK:function(){var u,t,s
u=this.Q
t=u.y.a
s=t.length
if(s===1){if(0>=s)return H.e(t,0)
return t[0]}return u},
aq:function(a,b,c){var u=0,t=P.an(null),s=this
var $async$aq=P.ao(function(d,e){if(d===1)return P.ak(e,t)
while(true)switch(u){case 0:u=2
return P.ab(s.ap(H.b(a.split("\n"),[P.t]),b,!1),$async$aq)
case 2:return P.al(null,t)}})
return P.am($async$aq,t)},
ap:function(a,b,c){H.c(a,"$ia",[P.t],"$aa")
return this.ko(a,b,!1)},
ko:function(a,b,c){var u=0,t=P.an(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ap=P.ao(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.je(o,a.length)){u=4
break}s=6
u=9
return P.ab(p.a0(C.a.j(a,o),b,!1),$async$ap)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ah(k)
l=P.n("Line "+H.j(J.e9(o,1))+": "+H.j(n))
throw H.h(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.e9(o,1)
u=2
break
case 4:return P.al(null,t)
case 1:return P.ak(r,t)}})
return P.am($async$ap,t)},
a0:function(a,b,c){return this.km(a,b,!1)},
km:function(a,b,c){var u=0,t=P.an(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a0=P.ao(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.jh(a,"#")
if(J.jd(n,0))a=J.ji(a,0,n)
a=J.iv(a)
if(J.b0(a)<=0){u=1
break}m=O.k4(a)
if(J.b0(m)<1){u=1
break}case 7:switch(J.M(m,0)){case"v":u=9
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
case 9:k=O.b9(J.M(m,1))
j=k.length
if(j<3)H.o(P.n("Positions must have at least 3 numbers."))
if(j>4)H.o(P.n("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.e(k,3)
u=1
break}i=k[3]
h=$.G()
h.toString
if(typeof i!=="number"){s=i.m()
u=1
break}if(!(Math.abs(i-1)<h.a))H.o(P.n("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.cJ(new V.a3(g[0],g[1],g[2]))
g.skE(H.b([],[F.aa]))
C.a.h(i,g)
u=1
break
case 10:k=O.b9(J.M(m,1))
j=k.length
if(j<2)H.o(P.n("Textures must have at least 2 numbers."))
if(j>3)H.o(P.n("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.e(k,2)
u=1
break}i=k[2]
h=$.G()
h.toString
if(typeof i!=="number"){s=i.m()
u=1
break}if(!(Math.abs(i-0)<h.a))H.o(P.n("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.S(h[0],h[1]))
u=1
break
case 11:k=O.b9(J.M(m,1))
j=k.length
if(j!==3)H.o(P.n("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}C.a.h(i,new V.F(h,g,k[2]))
u=1
break
case 12:o.il(J.M(m,1))
u=1
break
case 13:o.ik(J.M(m,1))
u=1
break
case 14:o.ij(J.M(m,1))
u=1
break
case 15:u=20
return P.ab(o.bq(J.M(m,1),b,!1),$async$a0)
case 20:u=1
break
case 16:j=J.M(m,1)
o.x=H.i(o.e.j(0,j),"$iar")
o.bw()
u=1
break
case 17:o.r=H.Q(J.M(m,1))
o.bw()
u=1
break
case 18:o.r=H.Q(J.M(m,1))
o.bw()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.ah(e)
j=P.n('Line: "'+H.j(a)+'": '+H.j(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.al(s,t)
case 2:return P.ak(q,t)}})
return P.am($async$a0,t)},
bw:function(){var u,t,s
if(this.z==null||this.y.a.c.length!==0){u=F.iP()
this.y=u
u=E.ax(null,!0,null,"",u,null)
this.z=u
this.Q.y.h(0,u)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.sp(u[s].b,0)}this.z.sa1(this.x)
this.z.a=this.r},
c4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=a.split("/")
t=u.length
if(0>=t)return H.e(u,0)
s=P.j6(u[0],null,null)
r=this.b.length
if(typeof s!=="number")return s.W()
if(s<-r||s>r||s===0)throw H.h(P.n("The position index, "+s+", was out of range [-"+r+".."+r+"] or 0."))
if(s<0)s=r+s+1;--s
if(t>1){q=u[1]
if(q!=null&&q.length>0){p=P.j6(q,null,null)
o=this.c
r=o.length
if(typeof p!=="number")return p.W()
if(p<-r||p>r||p===0)throw H.h(P.n("The texture index, "+p+", was out of range [-"+r+".."+r+"] or 0."))
if(p<0)p=r+p+1
n=p-1
if(n<0||n>=r)return H.e(o,n)
m=o[n]}else m=null}else m=null
if(t>2){q=u[2]
if(q!=null&&q.length>0){l=P.j6(q,null,null)
t=this.d
r=t.length
if(typeof l!=="number")return l.W()
if(l<-r||l>r||l===0)throw H.h(P.n("The normal index, "+l+", was out of range [-"+r+".."+r+"] or 0."))
if(l<0)l=r+l+1
o=l-1
if(o<0||o>=r)return H.e(t,o)
k=t[o]}else k=null}else k=null
t=this.b
if(s<0||s>=t.length)return H.e(t,s)
j=t[s]
for(t=j.b,o=t.length,i=0;i<t.length;t.length===o||(0,H.A)(t),++i){h=t[i]
if(J.W(h.y,m)&&J.W(h.r,k))return h}h=F.iW(null,null,null,null,null,null,null,null,0)
t=j.a
if(!J.W(h.f,t)){h.f=t
t=h.a
if(t!=null)t.a4()}if(!J.W(h.y,m)){h.y=m
t=h.a
if(t!=null)t.a4()}k=k==null?null:k.w(0,Math.sqrt(k.D(k)))
if(!J.W(h.r,k)){h.r=k
t=h.a
if(t!=null)t.a4()}this.y.a.h(0,h)
C.a.h(j.b,h)
return h},
il:function(a){var u,t,s,r
u=O.ie(a)
t=H.b([],[F.aa])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.c4(u[r]))}this.y.b.jh(t)},
ik:function(a){var u,t,s,r
u=O.ie(a)
t=H.b([],[F.aa])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.c4(u[r]))}this.y.c.jg(t)},
ij:function(a){var u,t,s,r
u=O.ie(a)
t=H.b([],[F.aa])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.c4(u[r]))}this.y.d.ct(t)},
bq:function(a,b,c){var u=0,t=P.an(null),s=this,r
var $async$bq=P.ao(function(d,e){if(d===1)return P.ak(e,t)
while(true)switch(u){case 0:u=2
return P.ab(O.df(b+"/"+a,s.a,!1),$async$bq)
case 2:r=e
s.e.aU(0,r)
return P.al(null,t)}})
return P.am($async$bq,t)},
sih:function(a){this.b=H.c(a,"$ia",[O.cJ],"$aa")},
siE:function(a){this.c=H.c(a,"$ia",[V.S],"$aa")},
shl:function(a){this.d=H.c(a,"$ia",[V.F],"$aa")},
scf:function(a){this.e=H.c(a,"$iU",[P.t,O.ar],"$aU")}}
X.cR.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.d6.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.eT.prototype={
ki:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ke:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sii:function(a){this.d=H.c(a,"$ijL",[P.v],"$ajL")}}
X.d9.prototype={}
X.f4.prototype={
b5:function(a,b){var u,t,s,r,q,p,o,n,m
u=new P.aw(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.k()
q=b.b
p=this.ch
if(typeof q!=="number")return q.k()
o=t.a
if(typeof o!=="number")return o.n()
t=t.b
if(typeof t!=="number")return t.n()
n=new V.S(o+s*r,t+q*p)
p=this.a.gbA()
m=new X.bp(a,V.b8(),this.x,this.y,this.z,p,n,u,this)
m.b=!0
this.z=u
this.x=n
return m},
cT:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f_()
if(typeof u!=="number")return u.eN()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b5(a,b))
return!0},
kj:function(a){return!1},
hN:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aw(Date.now(),!1)
t=this.f
s=new X.d9(c,a,this.a.gbA(),b,u,this)
s.b=!0
t.E(s)
this.y=u
this.x=V.b8()}}
X.aI.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aI))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bp.prototype={}
X.fg.prototype={
ca:function(a,b,c){var u,t,s
u=new P.aw(Date.now(),!1)
t=this.a.gbA()
s=new X.bp(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cT:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.ca(a,b,!0))
return!0},
bc:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f_()
if(typeof u!=="number")return u.eN()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.E(this.ca(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.ca(a,b,!1))
return!0},
kk:function(a,b){return!1}}
X.fr.prototype={}
X.dD.prototype={}
X.h0.prototype={
b5:function(a,b){var u,t,s,r
H.c(a,"$ia",[V.S],"$aa")
u=new P.aw(Date.now(),!1)
t=a.length>0?a[0]:V.b8()
s=this.a.gbA()
r=new X.dD(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kh:function(a){var u
H.c(a,"$ia",[V.S],"$aa")
u=this.b
if(u==null)return!1
u.E(this.b5(a,!0))
return!0},
kf:function(a){var u
H.c(a,"$ia",[V.S],"$aa")
u=this.c
if(u==null)return!1
u.E(this.b5(a,!0))
return!0},
kg:function(a){var u
H.c(a,"$ia",[V.S],"$aa")
u=this.d
if(u==null)return!1
u.E(this.b5(a,!1))
return!0}}
X.dI.prototype={
gbA:function(){var u=this.a
return V.jJ(0,0,C.m.gdU(u).c,C.m.gdU(u).d)},
dl:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d6(u,new X.aI(t,a.altKey,a.shiftKey))},
aT:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aI(t,a.altKey,a.shiftKey)},
cr:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aI(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.m()
q=u.top
if(typeof s!=="number")return s.m()
return new V.S(t-r,s-q)},
b6:function(a){return new V.T(a.movementX,a.movementY)},
co:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.S])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.i.ar(p.pageX)
C.i.ar(p.pageY)
n=u.left
C.i.ar(p.pageX)
C.a.h(t,new V.S(o-n,C.i.ar(p.pageY)-u.top))}return t},
aF:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.aI(t,a.altKey,a.shiftKey))},
ce:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.m()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.m()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hH:function(a){this.f=!0},
hv:function(a){this.f=!1},
hB:function(a){H.i(a,"$ia5")
if(this.f&&this.ce(a))a.preventDefault()},
hL:function(a){var u
H.i(a,"$iaQ")
if(!this.f)return
u=this.dl(a)
this.b.ki(u)},
hJ:function(a){var u
H.i(a,"$iaQ")
if(!this.f)return
u=this.dl(a)
this.b.ke(u)},
hP:function(a){var u,t,s,r
H.i(a,"$ia5")
u=this.a
u.focus()
this.f=!0
this.aT(a)
if(this.x){t=this.aF(a)
s=this.b6(a)
if(this.d.cT(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aF(a)
r=this.aK(a)
if(this.c.cT(t,r))a.preventDefault()},
hT:function(a){var u,t,s
H.i(a,"$ia5")
this.aT(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bc(u,s))a.preventDefault()},
hF:function(a){var u,t,s
H.i(a,"$ia5")
if(!this.ce(a)){this.aT(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bc(u,s))a.preventDefault()}},
hR:function(a){var u,t,s
H.i(a,"$ia5")
this.aT(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bb(u,s))a.preventDefault()},
hD:function(a){var u,t,s
H.i(a,"$ia5")
if(!this.ce(a)){this.aT(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bb(u,s))a.preventDefault()}},
hV:function(a){var u,t
H.i(a,"$iaZ")
this.aT(a)
u=new V.T((a&&C.y).gjD(a),C.y.gjE(a)).w(0,180)
if(this.x){if(this.d.kj(u))a.preventDefault()
return}if(this.r)return
t=this.aK(a)
if(this.c.kk(u,t))a.preventDefault()},
hX:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aF(this.y)
s=this.aK(this.y)
this.d.hN(t,s,u)}},
ic:function(a){var u
H.i(a,"$iaK")
this.a.focus()
this.f=!0
this.cr(a)
u=this.co(a)
if(this.e.kh(u))a.preventDefault()},
i8:function(a){var u
H.i(a,"$iaK")
this.cr(a)
u=this.co(a)
if(this.e.kf(u))a.preventDefault()},
ia:function(a){var u
H.i(a,"$iaK")
this.cr(a)
u=this.co(a)
if(this.e.kg(u))a.preventDefault()},
sfV:function(a){this.z=H.c(a,"$ia",[[P.cl,P.C]],"$aa")}}
D.bC.prototype={
gq:function(){var u=this.d
if(u==null){u=D.I()
this.d=u}return u},
bl:function(a){var u
H.i(a,"$iw")
u=this.d
if(u!=null)u.E(a)},
st:function(a,b){var u,t
if(b==null)b=new V.u(1,1,1)
if(!this.c.v(0,b)){u=this.c
this.c=b
t=new D.B("color",u,b,this,[V.u])
t.b=!0
this.bl(t)}},
$iX:1,
$iaT:1}
D.X.prototype={$iaT:1}
D.d7.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.I()
this.Q=u}return u},
bl:function(a){var u=this.Q
if(u!=null)u.E(a)},
dv:function(a){var u
H.i(a,"$iw")
u=this.ch
if(u!=null)u.E(a)},
hM:function(){return this.dv(null)},
hZ:function(a){var u,t,s
H.c(a,"$ik",[D.X],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fO(s))return!1}return!0},
hp:function(a,b){var u,t,s,r,q,p,o,n
u=D.X
H.c(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gdu(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.i(b[p],"$iX")
if(o instanceof D.bC)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bD()
n.sad(null)
n.sbo(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bl(a,b,this,[u])
u.b=!0
this.bl(u)},
i2:function(a,b){var u,t,s,r
u=D.X
H.c(b,"$ik",[u],"$ak")
for(t=b.gP(b),s=this.gdu();t.B();){r=t.gJ()
C.a.O(this.e,r)
r.gq().O(0,s)}u=new D.bm(a,b,this,[u])
u.b=!0
this.bl(u)},
fO:function(a){var u=C.a.aY(this.e,a)
return u},
sfo:function(a){this.e=H.c(a,"$ia",[D.bC],"$aa")},
sfp:function(a){this.f=H.c(a,"$ia",[D.dm],"$aa")},
sfq:function(a){this.r=H.c(a,"$ia",[D.du],"$aa")},
sfs:function(a){this.x=H.c(a,"$ia",[D.dy],"$aa")},
sft:function(a){this.y=H.c(a,"$ia",[D.dz],"$aa")},
sfu:function(a){this.z=H.c(a,"$ia",[D.dA],"$aa")},
$ak:function(){return[D.X]},
$aN:function(){return[D.X]}}
D.dm.prototype={$iX:1,$iaT:1}
D.du.prototype={$iX:1,$iaT:1}
D.dy.prototype={$iX:1,$iaT:1}
D.dz.prototype={$iX:1,$iaT:1}
D.dA.prototype={$iX:1,$iaT:1}
V.u.prototype={
n:function(a,b){var u,t,s
u=C.i.n(this.a,b.gkq())
t=C.i.n(this.b,b.geY())
s=C.i.n(this.c,b.gjo())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.u(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.av.prototype={
n:function(a,b){var u,t,s,r
u=C.i.n(this.a,b.gkq())
t=C.i.n(this.b,b.geY())
s=C.i.n(this.c,b.gjo())
r=C.i.n(this.d,b.gkH(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.av(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}
V.eB.prototype={}
V.dd.prototype={
aa:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return u},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dd))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.y]
t=V.bS(H.b([this.a,this.d,this.r],u),3,0)
s=V.bS(H.b([this.b,this.e,this.x],u),3,0)
r=V.bS(H.b([this.c,this.f,this.y],u),3,0)
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
V.a7.prototype={
aa:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return u},
cO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=this.e
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=u*t-s*r
p=this.r
if(typeof p!=="number")return H.f(p)
o=this.c
if(typeof o!=="number")return o.k()
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.k()
e=this.z
d=this.cx
if(typeof e!=="number")return e.k()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.k()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.G().a)return V.bo()
a8=1/a7
a9=-r
b0=-d
return V.b5((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
k:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b2.e
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b2.y
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
o=this.d
n=b2.cx
m=b2.b
if(typeof m!=="number")return H.f(m)
l=b2.f
if(typeof l!=="number")return H.f(l)
k=b2.z
if(typeof k!=="number")return H.f(k)
j=b2.cy
i=b2.c
if(typeof i!=="number")return H.f(i)
h=b2.r
if(typeof h!=="number")return H.f(h)
g=b2.Q
if(typeof g!=="number")return H.f(g)
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
if(typeof a!=="number")return a.k()
a0=this.f
if(typeof a0!=="number")return a0.k()
a1=this.r
if(typeof a1!=="number")return a1.k()
a2=this.x
a3=this.y
if(typeof a3!=="number")return a3.k()
a4=this.z
if(typeof a4!=="number")return a4.k()
a5=this.Q
if(typeof a5!=="number")return a5.k()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b5(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
o=this.e
if(typeof o!=="number")return o.k()
n=this.f
if(typeof n!=="number")return n.k()
m=this.r
if(typeof m!=="number")return m.k()
l=this.y
if(typeof l!=="number")return l.k()
k=this.z
if(typeof k!=="number")return k.k()
j=this.Q
if(typeof j!=="number")return j.k()
return new V.F(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
o=this.e
if(typeof o!=="number")return o.k()
n=this.f
if(typeof n!=="number")return n.k()
m=this.r
if(typeof m!=="number")return m.k()
l=this.y
if(typeof l!=="number")return l.k()
k=this.z
if(typeof k!=="number")return k.k()
j=this.Q
if(typeof j!=="number")return j.k()
return new V.a3(u*t+s*r+q*p+this.d,o*t+n*r+m*p+this.x,l*t+k*r+j*p+this.ch)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.K()},
eo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.y]
t=V.bS(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bS(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bS(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bS(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
K:function(){return this.eo("",3,0)},
A:function(a){return this.eo(a,3,0)}}
V.S.prototype={
n:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return new V.S(u+t,s+r)},
m:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.f(r)
return new V.S(u-t,s-r)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.a3.prototype={
n:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.a3(u+t,s+r,q+p)},
m:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.f(p)
return new V.a3(u-t,s-r,q-p)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.aJ.prototype={
n:function(a,b){return new V.aJ(C.d.n(this.a,b.gkR(b)),C.d.n(this.b,b.gkS(b)),C.d.n(this.c,b.gkT(b)),C.d.n(this.d,b.gkQ()))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}
V.dp.prototype={
gaB:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dp))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}
V.T.prototype={
cQ:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gkK(b)
if(typeof u!=="number")return u.n()
t=C.i.n(u,t)
u=this.b
s=b.gkL(b)
if(typeof u!=="number")return u.n()
return new V.T(t,C.i.n(u,s))},
k:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.k()
t=this.b
if(typeof t!=="number")return t.k()
return new V.T(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.jR
if(u==null){u=new V.T(0,0)
$.jR=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.T(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.F.prototype={
cQ:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r,q,p
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
return u*t+s*r+q*p},
b9:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=a.a
if(typeof q!=="number")return H.f(q)
p=this.a
if(typeof p!=="number")return p.k()
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.F(u+t,s+r,q+p)},
L:function(a){var u,t,s
u=this.a
if(typeof u!=="number")return u.L()
t=this.b
if(typeof t!=="number")return t.L()
s=this.c
if(typeof s!=="number")return s.L()
return new V.F(-u,-t,-s)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.G().a)return V.dK()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.F(u/b,t/b,s/b)},
eq:function(){var u,t
u=this.a
t=$.G()
t.toString
if(typeof u!=="number")return H.f(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.f(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.f(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.eo.prototype={
c5:function(a){var u,t,s
u=this.a
t=this.c
s=this.b
if(u)return V.mc(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gq:function(){var u=this.y
if(u==null){u=D.I()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.E(a)},
scZ:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.B("wrap",u,b,this,[P.Z])
u.b=!0
this.S(u)}},
scR:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c5(t)}u=new D.B("maximumLocation",u,this.b,this,[P.y])
u.b=!0
this.S(u)}},
scS:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c5(t)}u=new D.B("minimumLocation",u,this.c,this,[P.y])
u.b=!0
this.S(u)}},
sao:function(a,b){var u
b=this.c5(b)
u=this.d
if(!(Math.abs(u-b)<$.G().a)){this.d=b
u=new D.B("location",u,b,this,[P.y])
u.b=!0
this.S(u)}},
ses:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.B("maximumVelocity",u,a,this,[P.y])
u.b=!0
this.S(u)}},
sV:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.B("velocity",u,a,this,[P.y])
u.b=!0
this.S(u)}},
sdY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.B("dampening",u,a,this,[P.y])
u.b=!0
this.S(u)}},
aD:function(a){var u,t,s,r,q
u=this.f
t=$.G().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sao(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.G().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sV(s)}}}
U.cT.prototype={
gq:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
sN:function(a){var u,t,s
if(a==null)a=V.bo()
if(!J.W(this.a,a)){u=this.a
this.a=a
t=new D.B("matrix",u,a,this,[V.a7])
t.b=!0
s=this.b
if(s!=null)s.E(t)}},
bY:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.c6.prototype={
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
S:function(a){var u
H.i(a,"$iw")
u=this.e
if(u!=null)u.E(a)},
aw:function(){return this.S(null)},
hn:function(a,b){var u,t,s,r,q,p,o,n
u=U.af
H.c(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gbn(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.l(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.S(u)},
i0:function(a,b){var u,t,s
u=U.af
H.c(b,"$ik",[u],"$ak")
for(t=b.gP(b),s=this.gbn();t.B();)t.gJ().gq().O(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.S(u)},
bY:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.W()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ad(u,u.length,0,[H.r(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.bY(a,b)
if(r!=null)s=s==null?r:r.k(0,s)}}this.f=s==null?V.bo():s
u=this.e
if(u!=null)u.b_()}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c6))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.af]},
$aN:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.dJ.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.I()
this.fx=u}return u},
S:function(a){var u
H.i(a,"$iw")
u=this.fx
if(u!=null)u.E(a)},
aw:function(){return this.S(null)},
jk:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.I()
u.b=t
u=t}else u=t
u.h(0,this.ghe())
u=this.a.c
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.ghg())
u=this.a.c
t=u.c
if(t==null){t=D.I()
u.c=t
u=t}else u=t
u.h(0,this.ghi())
u=this.a.d
t=u.f
if(t==null){t=D.I()
u.f=t
u=t}else u=t
u.h(0,this.gha())
u=this.a.d
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.ghc())
u=this.a.e
t=u.b
if(t==null){t=D.I()
u.b=t
u=t}else u=t
u.h(0,this.giL())
u=this.a.e
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.giJ())
u=this.a.e
t=u.c
if(t==null){t=D.I()
u.c=t
u=t}else u=t
u.h(0,this.giH())
return!0},
av:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.T(u,t)},
hf:function(a){a=H.d(H.i(a,"$iw"),"$ibp")
if(!J.W(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hh:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iw"),"$ibp")
if(!this.cx)return
if(this.ch){u=a.d.m(0,a.y)
u=new V.T(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.f(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.m(0,a.y)
u=this.av(new V.T(t.a,t.b).k(0,2).w(0,u.gaB()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.f(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.f(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=this.av(new V.T(s.a,s.b).k(0,2).w(0,u.gaB()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.f(p)
o=this.cy
if(typeof o!=="number")return H.f(o)
s.sao(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.f(q)
s=this.db
if(typeof s!=="number")return H.f(s)
o.sao(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.m(0,a.z)
this.dx=this.av(new V.T(t.a,t.b).k(0,2).w(0,u.gaB()))}this.aw()},
hj:function(a){var u,t,s
H.i(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.f(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.f(u)
s.sV(-t*10*u)
this.aw()}},
hb:function(a){if(H.d(H.i(a,"$iw"),"$id9").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hd:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iw"),"$ibp")
if(!J.W(this.d,a.x.b))return
u=a.c
t=a.d
s=t.m(0,a.y)
r=this.av(new V.T(s.a,s.b).k(0,2).w(0,u.gaB()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.f(p)
o=this.cy
if(typeof o!=="number")return H.f(o)
s.sao(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.f(q)
s=this.db
if(typeof s!=="number")return H.f(s)
o.sao(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.m(0,a.z)
this.dx=this.av(new V.T(t.a,t.b).k(0,2).w(0,u.gaB()))
this.aw()},
iM:function(a){H.i(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iK:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iw"),"$idD")
if(!this.cx)return
if(this.ch){u=a.d.m(0,a.y)
u=new V.T(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.f(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.m(0,a.y)
u=this.av(new V.T(t.a,t.b).k(0,2).w(0,u.gaB()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.f(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.f(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=this.av(new V.T(s.a,s.b).k(0,2).w(0,u.gaB()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.f(p)
o=this.cy
if(typeof o!=="number")return H.f(o)
s.sao(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.f(q)
s=this.db
if(typeof s!=="number")return H.f(s)
o.sao(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.m(0,a.z)
this.dx=this.av(new V.T(t.a,t.b).k(0,2).w(0,u.gaB()))}this.aw()},
iI:function(a){var u,t,s
H.i(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.f(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.f(u)
s.sV(-t*10*u)
this.aw()}},
bY:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.W()
if(u<t){this.dy=t
s=a.y
this.c.aD(s)
this.b.aD(s)
this.fr=V.jy(this.b.d).k(0,V.iK(this.c.d))}return this.fr},
$iaf:1}
M.cS.prototype={
gq:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
U:function(a){var u
H.i(a,"$iw")
u=this.f
if(u!=null)u.E(a)},
b2:function(){return this.U(null)},
i4:function(a,b){var u,t,s,r,q,p,o,n
u=M.as
H.c(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gX(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.l(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.U(u)},
i6:function(a,b){var u,t,s
u=M.as
H.c(b,"$ik",[u],"$ak")
for(t=b.gP(b),s=this.gX();t.B();)t.gJ().gq().O(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.U(u)},
a9:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();){t=u.d
if(t!=null)t.a9(a)}this.e=!1},
$ak:function(){return[M.as]},
$aN:function(){return[M.as]},
$ias:1}
M.cV.prototype={
gq:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
U:function(a){var u
H.i(a,"$iw")
u=this.f
if(u!=null)u.E(a)},
b2:function(){return this.U(null)},
sb7:function(a){var u,t
if(a==null)a=new X.eM()
u=this.a
if(u!==a){if(u!=null)u.gq().O(0,this.gX())
t=this.a
this.a=a
a.gq().h(0,this.gX())
u=new D.B("camera",t,this.a,this,[X.by])
u.b=!0
this.U(u)}},
sbe:function(a,b){var u,t
if(b==null)b=X.iD(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().O(0,this.gX())
t=this.b
this.b=b
b.gq().h(0,this.gX())
u=new D.B("target",t,this.b,this,[X.cm])
u.b=!0
this.U(u)}},
sa1:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().O(0,this.gX())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gX())
u=new D.B("technique",t,this.c,this,[O.br])
u.b=!0
this.U(u)}},
a9:function(a){a.cV(this.c)
this.b.T(a)
this.a.T(a)
this.d.aD(a)
this.d.a9(a)
this.a.as(a)
this.b.toString
a.cU()},
$ias:1}
M.cY.prototype={
U:function(a){var u
H.i(a,"$iw")
u=this.x
if(u!=null)u.E(a)},
b2:function(){return this.U(null)},
hx:function(a,b){var u,t,s,r,q,p,o,n
u=E.K
H.c(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gX(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bD()
n.sad(null)
n.sbo(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.U(u)},
hz:function(a,b){var u,t,s
u=E.K
H.c(b,"$ik",[u],"$ak")
for(t=b.gP(b),s=this.gX();t.B();)t.gJ().gq().O(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.U(u)},
sb7:function(a){var u,t
if(a==null)a=X.jD(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().O(0,this.gX())
t=this.a
this.a=a
a.gq().h(0,this.gX())
u=new D.B("camera",t,this.a,this,[X.by])
u.b=!0
this.U(u)}},
sbe:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().O(0,this.gX())
t=this.b
this.b=b
b.gq().h(0,this.gX())
u=new D.B("target",t,this.b,this,[X.cm])
u.b=!0
this.U(u)}},
gq:function(){var u=this.x
if(u==null){u=D.I()
this.x=u}return u},
a9:function(a){var u
a.cV(this.c)
this.b.T(a)
this.a.T(a)
for(u=this.d.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();)u.d.aD(a)
for(u=this.d.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();)u.d.a9(a)
this.a.toString
a.cy.aN()
a.db.aN()
this.b.toString
a.cU()},
sfL:function(a,b){this.d=H.c(b,"$iN",[E.K],"$aN")},
$ias:1}
M.as.prototype={}
A.cN.prototype={}
A.ee.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jJ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.e2(r.a,r.c)}},
e_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.e0(r.a,r.c)}}}
A.dc.prototype={
fd:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bq("")
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
a6.iV(u)
a6.j1(u)
a6.iW(u)
a6.j9(u)
a6.ja(u)
a6.j3(u)
a6.je(u)
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
u=new P.bq("")
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
q.iZ(u)
q.iU(u)
q.iX(u)
q.j_(u)
q.j7(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.j5(u)
q.j6(u)}q.j2(u)
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
k=H.b([],[P.t])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iY(u)
q.j4(u)
q.j8(u)
q.jb(u)
q.jc(u)
q.jd(u)
q.j0(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.t])
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
this.ep(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.d(this.y.l(0,"invViewMat"),"$iai")
if(t)this.dy=H.d(this.y.l(0,"objMat"),"$iai")
if(r)this.fr=H.d(this.y.l(0,"viewObjMat"),"$iai")
this.fy=H.d(this.y.l(0,"projViewObjMat"),"$iai")
if(a6.x2)this.k1=H.d(this.y.l(0,"txt2DMat"),"$ict")
if(a6.y1)this.k2=H.d(this.y.l(0,"txtCubeMat"),"$iai")
if(a6.y2)this.k3=H.d(this.y.l(0,"colorMat"),"$iai")
this.sfG(H.b([],[A.ai]))
t=a6.aA
if(t>0){this.k4=H.i(this.y.l(0,"bendMatCount"),"$iE")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.o(P.n("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.d(g,"$iai"))}}t=a6.a
if(t!==C.c){this.r2=H.d(this.y.l(0,"emissionClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.rx=H.d(this.y.l(0,"emissionTxt"),"$iag")
this.x1=H.d(this.y.l(0,"nullEmissionTxt"),"$iE")
break
case C.f:this.ry=H.d(this.y.l(0,"emissionTxt"),"$ia9")
this.x1=H.d(this.y.l(0,"nullEmissionTxt"),"$iE")
break}}t=a6.b
if(t!==C.c){this.x2=H.d(this.y.l(0,"ambientClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.y1=H.d(this.y.l(0,"ambientTxt"),"$iag")
this.aA=H.d(this.y.l(0,"nullAmbientTxt"),"$iE")
break
case C.f:this.y2=H.d(this.y.l(0,"ambientTxt"),"$ia9")
this.aA=H.d(this.y.l(0,"nullAmbientTxt"),"$iE")
break}}t=a6.c
if(t!==C.c){this.am=H.d(this.y.l(0,"diffuseClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.bB=H.d(this.y.l(0,"diffuseTxt"),"$iag")
this.bC=H.d(this.y.l(0,"nullDiffuseTxt"),"$iE")
break
case C.f:this.e3=H.d(this.y.l(0,"diffuseTxt"),"$ia9")
this.bC=H.d(this.y.l(0,"nullDiffuseTxt"),"$iE")
break}}t=a6.d
if(t!==C.c){this.bD=H.d(this.y.l(0,"invDiffuseClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.e4=H.d(this.y.l(0,"invDiffuseTxt"),"$iag")
this.bE=H.d(this.y.l(0,"nullInvDiffuseTxt"),"$iE")
break
case C.f:this.e5=H.d(this.y.l(0,"invDiffuseTxt"),"$ia9")
this.bE=H.d(this.y.l(0,"nullInvDiffuseTxt"),"$iE")
break}}t=a6.e
if(t!==C.c){this.bH=H.d(this.y.l(0,"shininess"),"$iO")
this.bF=H.d(this.y.l(0,"specularClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.e6=H.d(this.y.l(0,"specularTxt"),"$iag")
this.bG=H.d(this.y.l(0,"nullSpecularTxt"),"$iE")
break
case C.f:this.e7=H.d(this.y.l(0,"specularTxt"),"$ia9")
this.bG=H.d(this.y.l(0,"nullSpecularTxt"),"$iE")
break}}switch(a6.f){case C.c:break
case C.h:break
case C.e:this.e8=H.d(this.y.l(0,"bumpTxt"),"$iag")
this.bI=H.d(this.y.l(0,"nullBumpTxt"),"$iE")
break
case C.f:this.e9=H.d(this.y.l(0,"bumpTxt"),"$ia9")
this.bI=H.d(this.y.l(0,"nullBumpTxt"),"$iE")
break}if(a6.dy){this.ea=H.d(this.y.l(0,"envSampler"),"$ia9")
this.eb=H.d(this.y.l(0,"nullEnvTxt"),"$iE")
t=a6.r
if(t!==C.c){this.bJ=H.d(this.y.l(0,"reflectClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.ec=H.d(this.y.l(0,"reflectTxt"),"$iag")
this.bK=H.d(this.y.l(0,"nullReflectTxt"),"$iE")
break
case C.f:this.ed=H.d(this.y.l(0,"reflectTxt"),"$ia9")
this.bK=H.d(this.y.l(0,"nullReflectTxt"),"$iE")
break}}t=a6.x
if(t!==C.c){this.bL=H.d(this.y.l(0,"refraction"),"$iO")
this.bM=H.d(this.y.l(0,"refractClr"),"$iD")
switch(t){case C.c:break
case C.h:break
case C.e:this.ee=H.d(this.y.l(0,"refractTxt"),"$iag")
this.bN=H.d(this.y.l(0,"nullRefractTxt"),"$iE")
break
case C.f:this.ef=H.d(this.y.l(0,"refractTxt"),"$ia9")
this.bN=H.d(this.y.l(0,"nullRefractTxt"),"$iE")
break}}}t=a6.y
if(t!==C.c){this.bO=H.d(this.y.l(0,"alpha"),"$iO")
switch(t){case C.c:break
case C.h:break
case C.e:this.eg=H.d(this.y.l(0,"alphaTxt"),"$iag")
this.bP=H.d(this.y.l(0,"nullAlphaTxt"),"$iE")
break
case C.f:this.eh=H.d(this.y.l(0,"alphaTxt"),"$ia9")
this.bP=H.d(this.y.l(0,"nullAlphaTxt"),"$iE")
break}}this.sfS(H.b([],[A.cs]))
this.sig(H.b([],[A.cu]))
this.siz(H.b([],[A.cv]))
this.siP(H.b([],[A.cw]))
this.siQ(H.b([],[A.cx]))
this.siR(H.b([],[A.cy]))
if(a6.k2){t=a6.z
if(t>0){this.ei=H.i(this.y.l(0,"dirLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iD")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iD")
s=this.cG;(s&&C.a).h(s,new A.cs(h,g,f))}}t=a6.Q
if(t>0){this.ej=H.i(this.y.l(0,"pntLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iD")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iD")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iD")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iO")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iO")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iO")
s=this.cH;(s&&C.a).h(s,new A.cu(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ek=H.i(this.y.l(0,"spotLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iD")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iD")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iD")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iD")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iO")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iO")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iO")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iO")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iO")
s=this.cI;(s&&C.a).h(s,new A.cv(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.el=H.i(this.y.l(0,"txtDirLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iD")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iD")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iD")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iD")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iD")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iE")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iag")
s=this.cJ;(s&&C.a).h(s,new A.cw(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.em=H.i(this.y.l(0,"txtPntLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iD")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iD")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$ict")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iD")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iE")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iO")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iO")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iO")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$ia9")
s=this.cK;(s&&C.a).h(s,new A.cx(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.en=H.i(this.y.l(0,"txtSpotLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iD")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iD")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iD")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iD")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iD")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iE")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iD")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iO")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iO")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a2,"$iO")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a3,"$iO")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a4,"$iO")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.o(P.n("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a5,"$iag")
s=this.cL;(s&&C.a).h(s,new A.cy(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
al:function(a,b,c){if(c==null||!c.d)C.b.H(b.a,b.d,1)
else{a.f1(c)
C.b.H(b.a,b.d,0)}},
ae:function(a,b,c){if(c==null||c.d<6)C.b.H(b.a,b.d,1)
else{a.d1(c)
C.b.H(b.a,b.d,0)}},
sfG:function(a){this.r1=H.c(a,"$ia",[A.ai],"$aa")},
sfS:function(a){this.cG=H.c(a,"$ia",[A.cs],"$aa")},
sig:function(a){this.cH=H.c(a,"$ia",[A.cu],"$aa")},
siz:function(a){this.cI=H.c(a,"$ia",[A.cv],"$aa")},
siP:function(a){this.cJ=H.c(a,"$ia",[A.cw],"$aa")},
siQ:function(a){this.cK=H.c(a,"$ia",[A.cx],"$aa")},
siR:function(a){this.cL=H.c(a,"$ia",[A.cy],"$aa")}}
A.fc.prototype={
iV:function(a){var u,t,s
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
j1:function(a){var u
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
iW:function(a){var u
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
j9:function(a){var u,t
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
ja:function(a){var u,t
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
j3:function(a){var u
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
je:function(a){var u
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
aG:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.c1(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iZ:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aG(a,u,"emission")
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
iU:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aG(a,u,"ambient")
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
iX:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aG(a,u,"diffuse")
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
j_:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aG(a,u,"invDiffuse")
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
j7:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aG(a,u,"specular")
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
j2:function(a){var u,t
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
j5:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aG(a,u,"reflect")
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
j6:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aG(a,u,"refract")
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
iY:function(a){var u,t
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
j4:function(a){var u,t
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
j8:function(a){var u,t
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
jb:function(a){var u,t,s
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
jc:function(a){var u,t,s
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
jd:function(a){var u,t,s
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
j0:function(a){var u
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
A.cs.prototype={}
A.cw.prototype={}
A.cu.prototype={}
A.cx.prototype={}
A.cv.prototype={}
A.cy.prototype={}
A.ch.prototype={
d6:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ep:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dm(a,35633)
this.f=this.dm(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dN(u,t,this.e)
C.b.dN(u,this.r,this.f)
C.b.jX(u,this.r)
if(!H.ka(C.b.c0(u,this.r,35714))){s=C.b.eU(u,this.r)
C.b.jB(u,this.r)
H.o(P.n("Failed to link shader: "+H.j(s)))}this.iu()
this.iw()},
T:function(a){C.b.cY(a.a,this.r)
this.x.jJ()},
dm:function(a,b){var u,t,s
u=this.a
t=C.b.jz(u,b)
C.b.f2(u,t,a)
C.b.ju(u,t)
if(!H.ka(C.b.eW(u,t,35713))){s=C.b.eV(u,t)
C.b.jC(u,t)
throw H.h(P.n("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
iu:function(){var u,t,s,r,q,p
u=H.b([],[A.cN])
t=this.a
s=H.a_(C.b.c0(t,this.r,35721))
if(typeof s!=="number")return H.f(s)
r=0
for(;r<s;++r){q=C.b.eP(t,this.r,r)
p=C.b.eR(t,this.r,q.name)
C.a.h(u,new A.cN(t,q.name,p))}this.x=new A.ee(u)},
iw:function(){var u,t,s,r,q,p
u=H.b([],[A.dE])
t=this.a
s=H.a_(C.b.c0(t,this.r,35718))
if(typeof s!=="number")return H.f(s)
r=0
for(;r<s;++r){q=C.b.eQ(t,this.r,r)
p=C.b.eX(t,this.r,q.name)
C.a.h(u,this.jA(q.type,q.size,q.name,p))}this.y=new A.hb(u)},
aR:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.E(u,t,b,c)
else return A.iU(u,t,b,a,c)},
fP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.iU(u,t,b,a,c)},
fQ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a9(u,t,b,c)
else return A.iU(u,t,b,a,c)},
bx:function(a,b){return new P.dS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jA:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.O(this.a,this.r,c,d)
case 35664:return new A.h6(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.h9(this.a,this.r,c,d)
case 35667:return new A.h7(this.a,this.r,c,d)
case 35668:return new A.h8(this.a,this.r,c,d)
case 35669:return new A.ha(this.a,this.r,c,d)
case 35674:return new A.hc(this.a,this.r,c,d)
case 35675:return new A.ct(this.a,this.r,c,d)
case 35676:return new A.ai(this.a,this.r,c,d)
case 35678:return this.fP(b,c,d)
case 35680:return this.fQ(b,c,d)
case 35670:throw H.h(this.bx("BOOL",c))
case 35671:throw H.h(this.bx("BOOL_VEC2",c))
case 35672:throw H.h(this.bx("BOOL_VEC3",c))
case 35673:throw H.h(this.bx("BOOL_VEC4",c))
default:throw H.h(P.n("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bB.prototype={
i:function(a){return this.b}}
A.dt.prototype={}
A.dE.prototype={}
A.hb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
jN:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
K:function(){return this.jN("\n")}}
A.E.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.h7.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.h8.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ha.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.h5.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
siS:function(a){this.e=H.c(a,"$ia",[P.v],"$aa")}}
A.O.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.h6.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.h9.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hc.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.ct.prototype={
ak:function(a){var u=new Float32Array(H.cG(H.c(a,"$ia",[P.y],"$aa")))
C.b.eK(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ai.prototype={
ak:function(a){var u=new Float32Array(H.cG(H.c(a,"$ia",[P.y],"$aa")))
C.b.eL(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ag.prototype={
f1:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.H(t,s,0)
else C.b.H(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.a9.prototype={
d1:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.H(t,s,0)
else C.b.H(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.ii.prototype={
$1:function(a){return 1},
$S:37}
F.a2.prototype={
fF:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dK()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eq())return
return q.w(0,Math.sqrt(q.D(q)))},
fJ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.m(0,t)
u=new V.F(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.D(u)))
u=r.m(0,t)
u=new V.F(u.a,u.b,u.c)
u=q.b9(u.w(0,Math.sqrt(u.D(u))))
return u.w(0,Math.sqrt(u.D(u)))},
cC:function(){if(this.d!=null)return!0
var u=this.fF()
if(u==null){u=this.fJ()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
fE:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dK()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eq())return
return q.w(0,Math.sqrt(q.D(q)))},
fI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
i=u-t
if(Math.abs(i-0)<$.G().a){u=m.m(0,p)
u=new V.F(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
u=j.a
k=k.a
if(typeof u!=="number")return u.m()
if(typeof k!=="number")return H.f(k)
if(u-k<0)h=h.L(0)}else{t=l.b
if(typeof t!=="number")return H.f(t)
g=(u-t)/i
t=m.m(0,p)
u=t.a
if(typeof u!=="number")return u.k()
r=t.b
if(typeof r!=="number")return r.k()
t=t.c
if(typeof t!=="number")return t.k()
q=p.a
if(typeof q!=="number")return H.f(q)
o=p.b
if(typeof o!=="number")return H.f(o)
n=p.c
if(typeof n!=="number")return H.f(n)
n=new V.a3(u*g+q,r*g+o,t*g+n).m(0,s)
n=new V.F(n.a,n.b,n.c)
h=n.w(0,Math.sqrt(n.D(n)))
j=j.a
k=k.a
if(typeof j!=="number")return j.m()
if(typeof k!=="number")return H.f(k)
l=l.a
if(typeof l!=="number")return H.f(l)
if((j-k)*g+k-l<0)h=h.L(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.D(u)))
u=f.b9(h)
u=u.w(0,Math.sqrt(u.D(u))).b9(f)
h=u.w(0,Math.sqrt(u.D(u)))}return h},
cA:function(){if(this.e!=null)return!0
var u=this.fE()
if(u==null){u=this.fI()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.ai(J.au(u.e),0)+", "+C.j.ai(J.au(this.b.e),0)+", "+C.j.ai(J.au(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
K:function(){return this.A("")}}
F.aR.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.ai(J.au(u.e),0)+", "+C.j.ai(J.au(this.b.e),0)},
K:function(){return this.A("")}}
F.b7.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ai(J.au(u.e),0)},
K:function(){return this.A("")}}
F.dr.prototype={
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
aW:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aW()||!1
if(!this.a.aW())t=!1
u=this.e
if(u!=null)u.b_()
return t},
dR:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aM()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bd().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.cK().a)!==0)++r
if((s&$.cL().a)!==0)++r
if((s&$.bW().a)!==0)++r
if((s&$.bb().a)!==0)++r
q=a1.gd2(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.y
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cQ])
for(m=0,l=0;l<r;++l){k=a1.jj(l)
j=k.gd2(k)
C.a.a_(n,l,new Z.cQ(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].jY(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a_(o,g,h[f]);++g}}m+=j}H.c(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ay(t,34962,e)
C.b.dQ(t,34962,new Float32Array(H.cG(o)),35044)
C.b.ay(t,34962,null)
d=new Z.bZ(new Z.dL(34962,e),n,a1)
d.sh5(H.b([],[Z.bk]))
if(this.b.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.aL()
C.a.h(c,b.e)}a=Z.iX(t,34963,H.c(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(0,c.length,a))}if(this.c.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.aL()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.aL()
C.a.h(c,b.e)}a=Z.iX(t,34963,H.c(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){s=P.v
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.aL()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.aL()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.aL()
C.a.h(c,b.e)}a=Z.iX(t,34963,H.c(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.t])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.C(u,"\n")},
a8:function(a){var u=this.e
if(u!=null)u.E(a)},
a4:function(){return this.a8(null)},
$imj:1}
F.fI.prototype={
ct:function(a){var u,t,s,r,q,p,o,n,m
H.c(a,"$ia",[F.aa],"$aa")
u=H.b([],[F.a2])
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
n=new F.a2()
m=s.a
if(m==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.o(P.n("May not create a face with vertices attached to different shapes."))
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
gp:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cC())s=!1
return s},
cB:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cA())s=!1
return s},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
return C.a.C(u,"\n")},
K:function(){return this.A("")},
sfX:function(a){this.b=H.c(a,"$ia",[F.a2],"$aa")}}
F.fJ.prototype={
jg:function(a){var u,t,s,r,q,p
H.c(a,"$ia",[F.aa],"$aa")
u=H.b([],[F.aR])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.e(a,q)
q=a[q]
if(r>=p)return H.e(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.kX(q,p))}return u},
gp:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
u=H.b([],[P.t])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].A(a+(""+s+". ")))}return C.a.C(u,"\n")},
K:function(){return this.A("")},
sh6:function(a){this.b=H.c(a,"$ia",[F.aR],"$aa")}}
F.fK.prototype={
jh:function(a){var u,t,s,r,q,p
H.c(a,"$ia",[F.aa],"$aa")
u=H.b([],[F.b7])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.e(a,r)
q=a[r]
s.a.h(0,q)
p=new F.b7()
if(q.a==null)H.o(P.n("May not create a point with a vertex which is not attached to a shape."))
p.a=q
C.a.h(q.b.b,p)
C.a.h(p.a.a.b.b,p)
q=p.a.a.e
if(q!=null)q.E(null)
C.a.h(u,p)}return u},
gp:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
return C.a.C(u,"\n")},
K:function(){return this.A("")},
scj:function(a){this.b=H.c(a,"$ia",[F.b7],"$aa")}}
F.aa.prototype={
jY:function(a){var u,t
if(a.v(0,$.aM())){u=this.f
t=[P.y]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.bd())){u=this.r
t=[P.y]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.bc())){u=this.x
t=[P.y]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.be())){u=this.y
t=[P.y]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.bf())){u=this.z
t=[P.y]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cK())){u=this.Q
t=[P.y]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cL())){u=this.Q
t=[P.y]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.bW()))return H.b([this.ch],[P.y])
else if(a.v(0,$.bb())){u=this.cx
t=[P.y]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.y])},
cC:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dK()
this.d.a7(0,new F.hq(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.b_()}return!0},
cA:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dK()
this.d.a7(0,new F.hp(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.b_()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t,s
u=H.b([],[P.t])
C.a.h(u,C.j.ai(J.au(this.e),0))
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
C.a.h(u,V.L(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.C(u,", ")
return a+"{"+s+"}"},
K:function(){return this.A("")}}
F.hq.prototype={
$1:function(a){var u,t
H.i(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:7}
F.hp.prototype={
$1:function(a){var u,t
H.i(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:7}
F.hj.prototype={
aL:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.n("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
dL:function(a,b,c,d,e,f,g,h,i){var u=F.iW(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bz:function(a,b,c,d,e,f){return this.dL(a,null,b,c,null,d,e,f,0)},
ji:function(a,b,c,d,e,f){return this.dL(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
j:function(a,b){var u=this.c
if(b>=u.length)return H.e(u,b)
return u[b]},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cC()
return!0},
cB:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cA()
return!0},
jp:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
this.aL()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
return C.a.C(u,"\n")},
K:function(){return this.A("")},
siT:function(a){this.c=H.c(a,"$ia",[F.aa],"$aa")}}
F.hk.prototype={
gp:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t
u=this.b.length
if(b.W(0,u))return C.a.j(this.b,b)
b=b.m(0,u)
t=this.c.length
if(b.W(0,t))return C.a.j(this.c,b)
b=b.m(0,t)
return C.a.j(this.d,b)},
a7:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a2]})
C.a.a7(this.b,b)
C.a.a7(this.c,new F.hl(this,b))
C.a.a7(this.d,new F.hm(this,b))},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
return C.a.C(u,"\n")},
K:function(){return this.A("")},
sfY:function(a){this.b=H.c(a,"$ia",[F.a2],"$aa")},
sfZ:function(a){this.c=H.c(a,"$ia",[F.a2],"$aa")},
sh_:function(a){this.d=H.c(a,"$ia",[F.a2],"$aa")}}
F.hl.prototype={
$1:function(a){H.i(a,"$ia2")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:7}
F.hm.prototype={
$1:function(a){var u
H.i(a,"$ia2")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:7}
F.hn.prototype={
gp:function(a){return this.b.length+this.c.length},
j:function(a,b){var u=this.b.length
if(b.b0(0,u))return C.a.j(this.c,b.m(0,u))
else return C.a.j(this.b,b)},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
return C.a.C(u,"\n")},
K:function(){return this.A("")},
sh7:function(a){this.b=H.c(a,"$ia",[F.aR],"$aa")},
sh8:function(a){this.c=H.c(a,"$ia",[F.aR],"$aa")}}
F.ho.prototype={
gp:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].A(a))
return C.a.C(u,"\n")},
K:function(){return this.A("")},
scj:function(a){this.b=H.c(a,"$ia",[F.b7],"$aa")}}
O.ar.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.I()
this.dy=u}return u},
I:function(a){var u
H.i(a,"$iw")
u=this.dy
if(u!=null)u.E(a)},
b3:function(){return this.I(null)},
dB:function(a){H.i(a,"$iw")
this.a=null
this.I(a)},
is:function(){return this.dB(null)},
hr:function(a,b){var u=V.a7
u=new D.bl(a,H.c(b,"$ik",[u],"$ak"),this,[u])
u.b=!0
this.I(u)},
ht:function(a,b){var u=V.a7
u=new D.bm(a,H.c(b,"$ik",[u],"$ak"),this,[u])
u.b=!0
this.I(u)},
sag:function(a){var u,t
u=this.ch
if(u!=a){if(u!=null)u.gq().O(0,this.gat())
t=this.ch
this.ch=a
if(a!=null)a.gq().h(0,this.gat())
u=new D.B("environment",t,this.ch,this,[T.co])
u.b=!0
this.I(u)}},
dj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.d.a2(u.e.length+3,4)*4
s=C.d.a2(u.f.length+3,4)*4
r=C.d.a2(u.r.length+3,4)*4
q=C.d.a2(u.x.length+3,4)*4
p=C.d.a2(u.y.length+3,4)*4
o=C.d.a2(u.z.length+3,4)*4
n=C.d.a2(this.e.a.length+3,4)*4
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
a7=$.aM()
if(a0){b=$.bd()
a7=new Z.aY(a7.a|b.a)}if(a1){b=$.bc()
a7=new Z.aY(a7.a|b.a)}if(a2){b=$.be()
a7=new Z.aY(a7.a|b.a)}if(a3){b=$.bf()
a7=new Z.aY(a7.a|b.a)}if(a5){b=$.bb()
a7=new Z.aY(a7.a|b.a)}return new A.fc(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
R:function(a,b){H.c(a,"$ia",[T.cn],"$aa")
if(b!=null)if(!C.a.aY(a,b)){b.sba(0,a.length)
C.a.h(a,b)}},
aD:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ad(u,u.length,0,[H.r(u,0)]);u.B();){t=u.d
t.toString
s=$.hi
if(s==null){s=new V.F(0,0,1)
$.hi=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cX(s)}}},
eE:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dj()
t=H.i(a2.fr.j(0,u.am),"$idc")
if(t==null){t=A.l1(u,a2.a)
a2.dM(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bB
u=a3.e
if(!(u instanceof Z.bZ)){a3.e=null
u=null}if(u==null||!u.d.v(0,r)){u=s.r1
if(u)a3.d.aW()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cB()
p.a.cB()
p=p.e
if(p!=null)p.b_()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jp()
o=o.e
if(o!=null)o.b_()}m=a3.d.dR(new Z.dM(a2.a),r)
m.aM($.aM()).e=this.a.Q.c
if(u)m.aM($.bd()).e=this.a.cx.c
if(q)m.aM($.bc()).e=this.a.ch.c
if(s.rx)m.aM($.be()).e=this.a.cy.c
if(p)m.aM($.bf()).e=this.a.db.c
if(s.x1)m.aM($.bb()).e=this.a.dx.c
a3.e=m}u=T.cn
l=H.b([],[u])
this.a.T(a2)
if(s.fx){q=this.a
p=a2.dx.gN()
q=q.dy
q.toString
q.ak(p.aa(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.gN().k(0,a2.dx.gN())
a2.cx=p}q=q.fr
q.toString
q.ak(p.aa(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gkp().k(0,a2.dx.gN())
a2.ch=p}q=q.fy
q.toString
q.ak(p.aa(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ak(C.o.aa(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ak(C.o.aa(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ak(C.o.aa(p,!0))}if(s.aA>0){k=this.e.a.length
q=this.a.k4
C.b.H(q.a,q.d,k)
for(q=[P.y],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.i(o,"$ia7")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.cG(H.c(o.aa(0,!0),"$ia",q,"$aa")))
C.b.eL(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.h:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.e:this.R(l,this.f.d)
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
case C.f:this.R(l,this.f.e)
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
case C.e:this.R(l,this.r.d)
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
case C.f:this.R(l,this.r.e)
q=this.a
p=this.r.e
q.ae(q.y2,q.aA,p)
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
case C.e:this.R(l,this.x.d)
q=this.a
p=this.x.d
q.al(q.bB,q.bC,p)
p=this.a
q=this.x.f
p=p.am
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.f:this.R(l,this.x.e)
q=this.a
p=this.x.e
q.ae(q.e3,q.bC,p)
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
q=q.bD
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.e:this.R(l,this.y.d)
q=this.a
p=this.y.d
q.al(q.e4,q.bE,p)
p=this.a
q=this.y.f
p=p.bD
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.f:this.R(l,this.y.e)
q=this.a
p=this.y.e
q.ae(q.e5,q.bE,p)
p=this.a
q=this.y.f
p=p.bD
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.h:q=this.a
p=this.z.f
q=q.bF
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bH
C.b.G(p.a,p.d,n)
break
case C.e:this.R(l,this.z.d)
q=this.a
p=this.z.d
q.al(q.e6,q.bG,p)
p=this.a
q=this.z.f
p=p.bF
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bH
C.b.G(q.a,q.d,n)
break
case C.f:this.R(l,this.z.e)
q=this.a
p=this.z.e
q.ae(q.e7,q.bG,p)
p=this.a
q=this.z.f
p=p.bF
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bH
C.b.G(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.ei
C.b.H(q.a,q.d,k)
h=a2.db.gN()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cG
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.cX(e.a)
n=o.a
if(typeof n!=="number")return n.k()
c=o.b
if(typeof c!=="number")return c.k()
b=o.c
if(typeof b!=="number")return b.k()
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.u(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.u(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.ej
C.b.H(q.a,q.d,k)
h=a2.db.gN()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cH
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbd(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bh(e.gbd(e))
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcu()
n=d.e
C.b.G(n.a,n.d,o)
o=e.gcv()
n=d.f
C.b.G(n.a,n.d,o)
o=e.gcw()
n=d.r
C.b.G(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ek
C.b.H(q.a,q.d,k)
h=a2.db.gN()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cI
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbd(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcE(e).kM()
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bh(e.gbd(e))
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkJ()
n=d.f
C.b.G(n.a,n.d,o)
o=e.gkI()
n=d.r
C.b.G(n.a,n.d,o)
o=e.gcu()
n=d.x
C.b.G(n.a,n.d,o)
o=e.gcv()
n=d.y
C.b.G(n.a,n.d,o)
o=e.gcw()
n=d.z
C.b.G(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.el
C.b.H(q.a,q.d,k)
h=a2.db.gN()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.cJ
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbf()
H.c(l,"$ia",o,"$aa")
if(!C.a.aY(l,n)){n.sba(0,l.length)
C.a.h(l,n)}n=e.gcE(e)
c=d.d
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gkC()
c=d.b
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gbV(e)
c=d.c
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=h.cX(e.gcE(e))
c=n.a
if(typeof c!=="number")return c.k()
b=n.b
if(typeof b!=="number")return b.k()
a=n.c
if(typeof a!=="number")return a.k()
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.u(b.a,b.d,c,n,a)
a=e.gt(e)
n=d.f
C.b.u(n.a,n.d,a.a,a.b,a.c)
a=e.gbf()
n=a.ger(a)
if(!n){n=d.x
C.b.H(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.H(b,n,0)
else C.b.H(b,n,a.a)
n=d.x
C.b.H(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.em
C.b.H(q.a,q.d,k)
h=a2.db.gN()
for(q=this.dx.y,p=q.length,o=[P.y],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.cK
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbf()
H.c(l,"$ia",n,"$aa")
if(!C.a.aY(l,c)){c.sba(0,l.length)
C.a.h(l,c)}a0=h.k(0,e.gN())
c=e.gN()
b=$.cf
if(b==null){b=new V.a3(0,0,0)
$.cf=b}b=c.bh(b)
c=d.b
C.b.u(c.a,c.d,b.a,b.b,b.c)
c=$.cf
if(c==null){c=new V.a3(0,0,0)
$.cf=c}c=a0.bh(c)
b=d.c
C.b.u(b.a,b.d,c.a,c.b,c.c)
c=a0.cO()
b=d.d
i=new Float32Array(H.cG(H.c(new V.dd(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).aa(0,!0),"$ia",o,"$aa")))
C.b.eK(b.a,b.d,!1,i)
b=e.gt(e)
c=d.e
C.b.u(c.a,c.d,b.a,b.b,b.c)
b=e.gbf()
c=b.ger(b)
if(!c){c=d.r
C.b.H(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.H(a1,c,0)
else C.b.H(a1,c,b.a)
c=d.r
C.b.H(c.a,c.d,0)}c=e.gcu()
b=d.x
C.b.G(b.a,b.d,c)
c=e.gcv()
b=d.y
C.b.G(b.a,b.d,c)
c=e.gcw()
b=d.z
C.b.G(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.en
C.b.H(q.a,q.d,k)
h=a2.db.gN()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cL
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbf()
H.c(l,"$ia",u,"$aa")
if(!C.a.aY(l,o)){o.sba(0,l.length)
C.a.h(l,o)}o=e.gbd(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcE(e)
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkC()
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbV(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bh(e.gbd(e))
n=d.f
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbf()
n=o.ger(o)
if(!n){o=d.x
C.b.H(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.H(b,n,0)
else C.b.H(b,n,o.a)
o=d.x
C.b.H(o.a,o.d,0)}o=e.gt(e)
n=d.y
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkO()
n=d.z
C.b.G(n.a,n.d,o)
o=e.gkP()
n=d.Q
C.b.G(n.a,n.d,o)
o=e.gcu()
n=d.ch
C.b.G(n.a,n.d,o)
o=e.gcv()
n=d.cx
C.b.G(n.a,n.d,o)
o=e.gcw()
n=d.cy
C.b.G(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.h:break
case C.e:this.R(l,this.Q.d)
u=this.a
q=this.Q.d
u.al(u.e8,u.bI,q)
break
case C.f:this.R(l,this.Q.e)
u=this.a
q=this.Q.e
u.ae(u.e9,u.bI,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gN().cO()
a2.Q=q}u=u.id
u.toString
u.ak(q.aa(0,!0))}if(s.dy){this.R(l,this.ch)
u=this.a
q=this.ch
u.ae(u.ea,u.eb,q)
switch(s.r){case C.c:break
case C.h:u=this.a
q=this.cx.f
u=u.bJ
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
break
case C.e:this.R(l,this.cx.d)
u=this.a
q=this.cx.d
u.al(u.ec,u.bK,q)
q=this.a
u=this.cx.f
q=q.bJ
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break
case C.f:this.R(l,this.cx.e)
u=this.a
q=this.cx.e
u.ae(u.ed,u.bK,q)
q=this.a
u=this.cx.f
q=q.bJ
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.h:u=this.a
q=this.cy.f
u=u.bM
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bL
C.b.G(q.a,q.d,o)
break
case C.e:this.R(l,this.cy.d)
u=this.a
q=this.cy.d
u.al(u.ee,u.bN,q)
q=this.a
u=this.cy.f
q=q.bM
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bL
C.b.G(u.a,u.d,o)
break
case C.f:this.R(l,this.cy.e)
u=this.a
q=this.cy.e
u.ae(u.ef,u.bN,q)
q=this.a
u=this.cy.f
q=q.bM
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bL
C.b.G(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.h:u=this.a
p=this.db.f
u=u.bO
C.b.G(u.a,u.d,p)
break
case C.e:this.R(l,this.db.d)
u=this.a
p=this.db.d
u.al(u.eg,u.bP,p)
p=this.a
u=this.db.f
p=p.bO
C.b.G(p.a,p.d,u)
break
case C.f:this.R(l,this.db.e)
u=this.a
p=this.db.e
u.ae(u.eh,u.bP,p)
p=this.a
u=this.db.f
p=p.bO
C.b.G(p.a,p.d,u)
break}u=a2.a
C.b.cF(u,3042)
C.b.jn(u,770,771)}for(j=0;j<l.length;++j)l[j].T(a2)
u=a3.e
u.T(a2)
u.a9(a2)
u.as(a2)
if(q)C.b.jG(a2.a,3042)
for(j=0;j<l.length;++j)l[j].as(a2)
u=this.a
u.toString
C.b.cY(a2.a,null)
u.x.e_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dj().am},
sfH:function(a){this.e=H.c(a,"$iN",[V.a7],"$aN")}}
O.fa.prototype={
bt:function(a){var u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.B(this.b,u,a,this,[P.y])
u.b=!0
this.a.I(u)}},
aI:function(){this.d4()
this.bt(1)},
ax:function(){this.c2()
this.bt(1)},
seM:function(a,b){var u
if(b==null)b=1
if(b<=0)this.dT(0)
else if(this.c===C.c){this.c=C.h
this.c2()
this.bt(1)
u=this.a
u.a=null
u.I(null)}this.bt(b)}}
O.c9.prototype={
I:function(a){this.a.I(H.i(a,"$iw"))},
b3:function(){return this.I(null)},
aI:function(){},
ax:function(){},
dF:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gq().O(0,this.gat())
t=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gat())
u=new D.B(this.b+".texture2D",t,this.d,this,[T.dx])
u.b=!0
this.a.I(u)}},
dG:function(a){},
dT:function(a){var u
if(this.c!==C.c){this.c=C.c
u=this.a
u.a=null
u.I(null)}this.aI()
this.dF(null)
this.dG(null)
this.a.I(null)},
sa5:function(a){var u=this.c
if(u!==C.e){if(u===C.c)this.ax()
this.c=C.e
this.dG(null)
u=this.a
u.a=null
u.I(null)}this.dF(a)}}
O.fb.prototype={}
O.aS.prototype={
cp:function(a){var u,t
if(!J.W(this.f,a)){u=this.f
this.f=a
t=new D.B(this.b+".color",u,a,this,[V.u])
t.b=!0
this.a.I(t)}},
aI:function(){this.d4()
this.cp(new V.u(0,0,0))},
ax:function(){this.c2()
this.cp(new V.u(1,1,1))},
st:function(a,b){var u
if(this.c===C.c){this.c=C.h
this.ax()
u=this.a
u.a=null
u.I(null)}this.cp(b)}}
O.fd.prototype={
dE:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.B(this.b+".refraction",u,a,this,[P.y])
u.b=!0
this.a.I(u)}},
aI:function(){this.d5()
this.dE(1)},
ax:function(){this.c3()
this.dE(1)}}
O.fe.prototype={
bu:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.B(this.b+".shininess",u,a,this,[P.y])
u.b=!0
this.a.I(u)}},
aI:function(){this.d5()
this.bu(100)},
ax:function(){this.c3()
this.bu(100)},
sa6:function(a){var u
if(a==null)a=100
if(a<=0)this.dT(0)
else if(this.c===C.c){this.c=C.h
this.c3()
this.bu(100)
u=this.a
u.a=null
u.I(null)}this.bu(a)}}
O.ds.prototype={
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
I:function(a){var u
H.i(a,"$iw")
u=this.e
if(u!=null)u.E(a)},
b3:function(){return this.I(null)},
eE:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.i(a.fr.j(0,"Skybox"),"$idt")
if(u==null){t=a.a
u=new A.dt(t,"Skybox")
u.d6(t,"Skybox")
u.ep($.lm,$.ll)
u.z=u.x.j(0,"posAttr")
u.Q=H.d(u.y.j(0,"fov"),"$iO")
u.ch=H.d(u.y.j(0,"ratio"),"$iO")
u.cx=H.d(u.y.j(0,"boxClr"),"$iD")
u.cy=H.d(u.y.j(0,"boxTxt"),"$ia9")
u.db=H.d(u.y.j(0,"viewMat"),"$iai")
a.dM(u)}this.a=u}if(b.e==null){t=b.d.dR(new Z.dM(a.a),$.aM())
t.aM($.aM()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.T(a)}t=a.d
s=a.c
r=this.a
r.T(a)
q=this.b
p=r.Q
C.b.G(p.a,p.d,q)
q=r.ch
C.b.G(q.a,q.d,t/s)
s=this.c
r.cy.d1(s)
s=this.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db.gN().cO()
r=r.db
r.toString
r.ak(s.aa(0,!0))
t=b.e
if(t instanceof Z.bZ){t.T(a)
t.a9(a)
t.as(a)}else b.e=null
t=this.a
t.toString
C.b.cY(a.a,null)
t.x.e_()
t=this.c
if(t!=null)t.as(a)}}
O.br.prototype={}
T.cn.prototype={}
T.dx.prototype={}
T.fT.prototype={
sba:function(a,b){this.a=b
return b},
gq:function(){var u=this.y
if(u==null){u=D.I()
this.y=u}return u},
T:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.by(u,33984+this.a)
C.b.a3(u,3553,this.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.by(u,33984+this.a)
C.b.a3(u,3553,null)}}}
T.co.prototype={
sba:function(a,b){this.a=b
return b},
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
T:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.by(u,33984+this.a)
C.b.a3(u,34067,this.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.by(u,33984+this.a)
C.b.a3(u,34067,null)}}}
T.fU.prototype={
jZ:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a3(u,3553,t)
C.b.aC(u,3553,10242,33071)
C.b.aC(u,3553,10243,33071)
C.b.aC(u,3553,10241,9729)
C.b.aC(u,3553,10240,9729)
C.b.a3(u,3553,null);++this.d
s=W.jr(null,a,null)
r=new T.fT()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.V(s,"load",H.l(new T.fW(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
an:function(a){return this.jZ(a,!1,!1,!1,!1)},
aS:function(a,b,c,d,e,f){var u,t
u=W.jr(null,c,null);++this.d
t=W.m
W.V(u,"load",H.l(new T.fV(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
dD:function(a,b,c){var u,t,s,r
b=V.j8(b,2)
u=V.j8(a.width,2)
t=V.j8(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iy(null,null)
s.width=u
s.height=t
r=H.i(C.m.eS(s,"2d"),"$ibA")
r.imageSmoothingEnabled=!1;(r&&C.t).jI(r,a,0,0,s.width,s.height)
return P.lO(C.t.h4(r,0,0,s.width,s.height))}}}
T.fW.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.dD(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a3(t,3553,this.e)
C.b.eC(t,37440,this.f?1:0)
C.b.eH(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eO(t,3553)
C.b.a3(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.e1()}++s.e},
$S:8}
T.fV.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.dD(this.b,u.c,this.c)
s=u.a
C.b.a3(s,34067,this.d)
C.b.eC(s,37440,this.e?1:0)
C.b.eH(s,this.f,0,6408,6408,5121,t)
C.b.a3(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.e1()}++u.e},
$S:8}
V.eb.prototype={
aZ:function(a){return!0},
i:function(a){return"all"},
$ib4:1}
V.b4.prototype={}
V.db.prototype={
aZ:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aZ(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saH:function(a){this.a=H.c(a,"$ia",[V.b4],"$aa")},
$ib4:1}
V.b6.prototype={
aZ:function(a){return!this.f6(a)},
i:function(a){return"!["+this.d3(0)+"]"}}
V.fH.prototype={
fj:function(a){var u,t
if(a.a.length<=0)throw H.h(P.n("May not create a SetMatcher with zero characters."))
u=new H.aH([P.v,P.Z])
for(t=new H.d8(a,a.gp(a),0,[H.ap(a,"R",0)]);t.B();)u.a_(0,t.d,!0)
this.sit(u)},
aZ:function(a){return this.a.dX(a)},
i:function(a){var u=this.a
return P.iR(new H.f1(u,[H.r(u,0)]),0,null)},
sit:function(a){this.a=H.c(a,"$iU",[P.v,P.Z],"$aU")},
$ib4:1}
V.ci.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cr(this.a.M(0,b))
r.saH(H.b([],[V.b4]))
r.c=!1
C.a.h(this.c,r)
return r},
jL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aZ(a))return r}return},
i:function(a){return this.b},
siN:function(a){this.c=H.c(a,"$ia",[V.cr],"$aa")}}
V.dC.prototype={
i:function(a){var u,t
u=H.kl(this.b,"\n","\\n")
t=H.kl(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cq.prototype={
i:function(a){return this.b},
sip:function(a){var u=P.t
this.c=H.c(a,"$iU",[u,u],"$aU")}}
V.h_.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.ci(this,b)
u.siN(H.b([],[V.cr]))
u.d=null
this.a.a_(0,b,u)}return u},
bg:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cq(this,a)
t=P.t
u.sip(new H.aH([t,t]))
this.b.a_(0,a,u)}return u},
kB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dC])
t=this.c
s=[P.v]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aQ(a,o)
m=t.jL(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.iR(r,0,null)
throw H.h(P.n("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.iR(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dC(j==null?k.b:j,l,o)}++o}}},
siA:function(a){this.a=H.c(a,"$iU",[P.t,V.ci],"$aU")},
siG:function(a){this.b=H.c(a,"$iU",[P.t,V.cq],"$aU")}}
V.cr.prototype={
i:function(a){return this.b.b+": "+this.d3(0)}}
X.by.prototype={$iaT:1}
X.eJ.prototype={
gq:function(){var u=this.x
if(u==null){u=D.I()
this.x=u}return u},
au:function(a){var u=this.x
if(u!=null)u.E(a)},
T:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.jm(u,36160,null)
C.b.cF(u,2884)
C.b.cF(u,2929)
C.b.jF(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.f(t)
p=C.i.ar(q*t)
q=r.b
if(typeof s!=="number")return H.f(s)
o=C.i.ar(q*s)
q=C.i.ar(r.c*t)
a.c=q
r=C.i.ar(r.d*s)
a.d=r
C.b.kF(u,p,o,q,r)
C.b.jt(u,this.c)
if(this.b){r=this.a
C.b.js(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.jr(u,n)}}
X.eM.prototype={
gq:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
T:function(a){var u
a.cy.bU(V.bo())
u=V.bo()
a.db.bU(u)},
as:function(a){a.cy.aN()
a.db.aN()},
$iaT:1,
$iby:1}
X.dl.prototype={
gq:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
au:function(a){var u
H.i(a,"$iw")
u=this.f
if(u!=null)u.E(a)},
fA:function(){return this.au(null)},
T:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.b5(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bU(n)
u=$.jE
if(u==null){u=V.iM()
t=V.iV()
s=$.jS
if(s==null){s=new V.F(0,0,-1)
$.jS=s}s=V.iJ(u,t,s)
$.jE=s
m=s}else m=u
u=this.b
if(u!=null){l=u.bY(a,this)
if(l!=null)m=l.k(0,m)}a.db.bU(m)},
as:function(a){a.cy.aN()
a.db.aN()},
$iaT:1,
$iby:1}
X.cm.prototype={}
V.it.prototype={
$1:function(a){H.i(a,"$iaV")
P.e8(C.i.eI(this.a.gjO(),2)+" fps")},
$S:41}
V.fL.prototype={
fk:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.r).Z(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.r.Z(t,r)
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
o=W.m
W.V(u,"scroll",H.l(new V.fN(s),{func:1,ret:-1,args:[o]}),!1,o)},
jf:function(a,b,c){var u,t,s,r
a=H.a_(C.d.jq(a,0,4))
if(c.length===0)c=P.jZ(C.w,b,C.q,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.kE(null)
r.href="#"+c
r.textContent=b
C.l.Z(u,r)
C.l.Z(this.a,u)},
dK:function(a,b){return this.jf(a,b,"")},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.c(a,"$ia",[P.t],"$aa")
this.iv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kB(C.a.jU(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.ma(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
C.l.Z(t,l)}else{k=P.jZ(C.w,n,C.q,!1)
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
iv:function(){var u,t,s,r
if(this.b!=null)return
u=new V.h_()
t=P.t
u.siA(new H.aH([t,V.ci]))
u.siG(new H.aH([t,V.cq]))
u.c=null
u.c=u.M(0,"Start")
t=u.M(0,"Start").C(0,"Bold")
s=V.a8(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Bold").C(0,"Bold")
s=new V.b6()
r=[V.b4]
s.saH(H.b([],r))
C.a.h(t.a,s)
t=V.a8(new H.a0("*"))
C.a.h(s.a,t)
t=u.M(0,"Bold").C(0,"BoldEnd")
s=V.a8(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Start").C(0,"Italic")
s=V.a8(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Italic").C(0,"Italic")
s=new V.b6()
s.saH(H.b([],r))
C.a.h(t.a,s)
t=V.a8(new H.a0("_"))
C.a.h(s.a,t)
t=u.M(0,"Italic").C(0,"ItalicEnd")
s=V.a8(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Start").C(0,"Code")
s=V.a8(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Code").C(0,"Code")
s=new V.b6()
s.saH(H.b([],r))
C.a.h(t.a,s)
t=V.a8(new H.a0("`"))
C.a.h(s.a,t)
t=u.M(0,"Code").C(0,"CodeEnd")
s=V.a8(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Start").C(0,"LinkHead")
s=V.a8(new H.a0("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"LinkHead").C(0,"LinkTail")
s=V.a8(new H.a0("|"))
C.a.h(t.a,s)
s=u.M(0,"LinkHead").C(0,"LinkEnd")
t=V.a8(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,"LinkHead").C(0,"LinkHead")
t=new V.b6()
t.saH(H.b([],r))
C.a.h(s.a,t)
s=V.a8(new H.a0("|]"))
C.a.h(t.a,s)
s=u.M(0,"LinkTail").C(0,"LinkEnd")
t=V.a8(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,"LinkTail").C(0,"LinkTail")
t=new V.b6()
t.saH(H.b([],r))
C.a.h(s.a,t)
s=V.a8(new H.a0("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,"Start").C(0,"Other").a,new V.eb())
s=u.M(0,"Other").C(0,"Other")
t=new V.b6()
t.saH(H.b([],r))
C.a.h(s.a,t)
s=V.a8(new H.a0("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.bg("Bold")
s=u.M(0,"ItalicEnd")
s.d=s.a.bg("Italic")
s=u.M(0,"CodeEnd")
s.d=s.a.bg("Code")
s=u.M(0,"LinkEnd")
s.d=s.a.bg("Link")
s=u.M(0,"Other")
s.d=s.a.bg("Other")
this.b=u}}
V.fN.prototype={
$1:function(a){P.iS(C.n,new V.fM(this.a))},
$S:8}
V.fM.prototype={
$0:function(){var u,t,s
u=C.i.ar(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:1}
L.eg.prototype={
f8:function(a,b,c,d,e,f,g){var u
if($.ei==null){$.ei=E.ax(null,!0,null,"bishop shape",null,null)
O.aA("./resources/bishop.obj",a.f,null,null,!1).aj(new L.ej(),null)}u=this.k4?"white":"black"
this.a=u+(" bishop "+this.go)
this.y.h(0,$.ei)}}
L.ej.prototype={
$1:function(a){H.i(a,"$iK")
$.ei.sab(0,a.c)},
$S:2}
L.ek.prototype={
f9:function(a){var u,t,s,r,q,p,o,n,m
this.sie(H.b([],[L.ce]))
this.siF(H.b([],[L.cp]))
this.id=L.l2(a)
this.a="board"
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=L.lp(a,this,(u+t)%2===0,u,t)
r=this.go;(r&&C.a).h(r,s)
r=this.y
q=H.r(r,0)
H.x(s,q)
p=[q]
if(r.aJ(H.b([s],p))){o=r.a
n=o.length
C.a.h(o,s)
q=H.c(H.b([s],p),"$ik",[q],"$ak")
r=r.c
if(r!=null)r.$2(n,q)}}for(u=1;u<=8;++u){r=L.jC(a,this,!0,2,u,0,0.7)
q=this.fy;(q&&C.a).h(q,r)
q=this.y
p=H.r(q,0)
H.x(r,p)
o=[p]
if(q.aJ(H.b([r],o))){m=q.a
n=m.length
C.a.h(m,r)
p=H.c(H.b([r],o),"$ik",[p],"$ak")
r=q.c
if(r!=null)r.$2(n,p)}r=L.jC(a,this,!1,7,u,0,0.7)
q=this.fy;(q&&C.a).h(q,r)
q=this.y
p=H.r(q,0)
H.x(r,p)
o=[p]
if(q.aJ(H.b([r],o))){m=q.a
n=m.length
C.a.h(m,r)
p=H.c(H.b([r],o),"$ik",[p],"$ak")
r=q.c
if(r!=null)r.$2(n,p)}}this.Y(L.fC(a,this,!0,1,1,0,0.7))
this.Y(L.fC(a,this,!0,1,8,0,0.7))
this.Y(L.fC(a,this,!1,8,1,0,0.7))
this.Y(L.fC(a,this,!1,8,8,0,0.7))
this.Y(L.eY(a,this,!0,1,2,0,0.7))
this.Y(L.eY(a,this,!0,1,7,3.141592653589793,0.7))
this.Y(L.eY(a,this,!1,8,2,0,0.7))
this.Y(L.eY(a,this,!1,8,7,3.141592653589793,0.7))
this.Y(L.eh(a,this,!0,1,3,-1.5707963267948966,0.8))
this.Y(L.eh(a,this,!0,1,6,1.5707963267948966,0.8))
this.Y(L.eh(a,this,!1,8,3,-1.5707963267948966,0.8))
this.Y(L.eh(a,this,!1,8,6,1.5707963267948966,0.8))
this.Y(L.jI(a,this,!0,1,4,0,1))
this.Y(L.jv(a,this,!0,1,5,1.5707963267948966,0.9))
this.Y(L.jI(a,this,!1,8,4,0,1))
this.Y(L.jv(a,this,!1,8,5,1.5707963267948966,0.9))
this.y.h(0,L.ew(a,this,0,0,0,0))
this.y.h(0,L.ew(a,this,8,0,1.5707963267948966,1))
this.y.h(0,L.ew(a,this,8,8,3.141592653589793,2))
this.y.h(0,L.ew(a,this,0,8,4.71238898038469,3))
r=this.y
q=F.lQ(-1,!1,!1,0,null,30)
p=this.id.Q
r.h(0,E.ax(null,!0,U.bh(V.de(0,-0.5,0).k(0,V.jy(-1.5707963267948966)).k(0,V.iL(12,12,12,1))),"",q,p))},
Y:function(a){var u=this.fy;(u&&C.a).h(u,a)
this.y.h(0,a)},
sie:function(a){this.fy=H.c(a,"$ia",[L.ce],"$aa")},
siF:function(a){this.go=H.c(a,"$ia",[L.cp],"$aa")}}
L.ev.prototype={
fa:function(a,b,c,d,e,f){var u
if($.ex==null){$.ex=E.ax(null,!0,null,"edge shape",null,null)
O.aA("./resources/edge.obj",a.f,null,null,!1).aj(new L.ey(),null)}this.sbT(U.bh(V.de(c-4,0,d-4).k(0,V.iK(e))))
this.a="edge"
this.y.h(0,$.ex)
u=this.fy.id.z
if(f>=u.length)return H.e(u,f)
this.sa1(u[f])}}
L.ey.prototype={
$1:function(a){H.i(a,"$iK")
$.ex.sab(0,a.c)},
$S:2}
L.eU.prototype={
fb:function(a,b,c,d,e,f,g){var u
if($.eV==null){$.eV=E.ax(null,!0,null,"king shape",null,null)
O.aA("./resources/king.obj",a.f,null,null,!1).aj(new L.eW(),null)}u=this.k4?"white":"black"
this.a=u+(" king "+this.go)
this.y.h(0,$.eV)}}
L.eW.prototype={
$1:function(a){H.i(a,"$iK")
$.eV.sab(0,a.c)},
$S:2}
L.eX.prototype={
fc:function(a,b,c,d,e,f,g){var u
if($.eZ==null){$.eZ=E.ax(null,!0,null,"knight shape",null,null)
O.aA("./resources/knight.obj",a.f,null,null,!1).aj(new L.f_(),null)}u=this.k4?"white":"black"
this.a=u+(" knight "+this.go)
this.y.h(0,$.eZ)}}
L.f_.prototype={
$1:function(a){H.i(a,"$iK")
$.eZ.sab(0,a.c)},
$S:2}
L.ff.prototype={
fe:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.f
t=u.a
s=t.createTexture()
C.b.a3(t,34067,s)
C.b.aC(t,34067,10242,10497)
C.b.aC(t,34067,10243,10497)
C.b.aC(t,34067,10241,9729)
C.b.aC(t,34067,10240,9729)
C.b.a3(t,34067,null)
r=new T.co()
r.a=0
r.b=s
r.c=!1
r.d=0
u.aS(r,s,"resources/posx.png",34069,!1,!1)
u.aS(r,s,"resources/negx.png",34070,!1,!1)
u.aS(r,s,"resources/posy.png",34071,!1,!1)
u.aS(r,s,"resources/negy.png",34072,!1,!1)
u.aS(r,s,"resources/posz.png",34073,!1,!1)
u.aS(r,s,"resources/negz.png",34074,!1,!1)
this.a=r
q=D.jo(null,null)
q.st(0,new V.u(1,0.9,0.8))
q.b=U.bh(V.iJ(V.iM(),V.iV(),new V.F(0,-1,-0.25)))
p=D.jo(null,null)
p.st(0,new V.u(0,0.1,0.3))
p.b=U.bh(V.iJ(V.iM(),V.iV(),new V.F(0,1,0.25)))
o=new V.u(0.15,0.15,0.15)
u=O.az()
t=u.x
t.st(0,new V.u(0.6,0.6,0.6))
t=u.r
t.st(0,new V.u(0.4,0.4,0.4))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(60)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.b=u
u=O.az()
t=u.x
t.st(0,new V.u(0.2,0.2,0.2))
t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(60)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.c=u
u=O.az()
t=u.x
t.st(0,new V.u(0.6,0,0))
t=u.r
t.st(0,new V.u(0.8,0,0))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(100)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.d=u
u=O.az()
t=u.x
t.st(0,new V.u(0.2,0,0))
t=u.r
t.st(0,new V.u(0.6,0,0))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(100)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.e=u
n=new V.u(0.075,0.075,0.075)
u=O.az()
t=u.x
t.st(0,new V.u(0.6,0.6,0.6))
t=u.r
t.st(0,new V.u(0.4,0.4,0.4))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(60)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.f=u
u=O.az()
t=u.x
t.st(0,new V.u(0.2,0.2,0.2))
t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(60)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.r=u
u=O.az()
t=u.x
t.st(0,new V.u(0.6,0,0))
t=u.r
t.st(0,new V.u(0.8,0,0))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(100)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.x=u
u=O.az()
t=u.x
t.st(0,new V.u(0.2,0,0))
t=u.r
t.st(0,new V.u(0.6,0,0))
u.z.st(0,new V.u(1,1,1))
u.z.sa6(100)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.y=u
this.sfT(H.b([],[O.ar]))
for(m=0;m<4;++m){l=a.f.an("resources/edge"+m+".png")
u=this.z
t=O.az()
k=t.x
k.st(0,new V.u(0.6,0.6,0.6))
t.x.sa5(l)
k=t.r
k.st(0,new V.u(0.4,0.4,0.4))
t.r.sa5(l)
t.z.st(0,new V.u(1,1,1))
t.z.sa6(80)
t.sag(this.a)
k=t.cx
k.st(0,new V.u(0.1,0.1,0.1))
k=t.dx
k.toString
j=H.ap(k,"N",0)
H.x(q,j)
i=[j]
if(k.aJ(H.b([q],i))){h=k.a
g=h.length
C.a.h(h,q)
j=H.c(H.b([q],i),"$ik",[j],"$ak")
k=k.c
if(k!=null)k.$2(g,j)}k=t.dx
k.toString
j=H.ap(k,"N",0)
H.x(p,j)
i=[j]
if(k.aJ(H.b([p],i))){h=k.a
g=h.length
C.a.h(h,p)
j=H.c(H.b([p],i),"$ik",[j],"$ak")
k=k.c
if(k!=null)k.$2(g,j)}(u&&C.a).h(u,t)}f=a.f.an("resources/tableColor.png")
e=a.f.an("resources/tableSpec.png")
u=O.az()
t=u.x
t.st(0,new V.u(0.6,0.6,0.6))
u.x.sa5(f)
t=u.r
t.st(0,new V.u(0.4,0.4,0.4))
u.r.sa5(f)
u.z.st(0,new V.u(1,1,1))
u.z.sa6(80)
u.z.sa5(e)
u.sag(this.a)
u.cx.sa5(e)
u.Q.sa5(a.f.an("resources/tableNormal.png"))
u.dx.h(0,q)
u.dx.h(0,p)
this.Q=u},
sfT:function(a){this.z=H.c(a,"$ia",[O.ar],"$aa")}}
L.fn.prototype={
ff:function(a,b,c,d,e,f,g){var u
if($.fo==null){$.fo=E.ax(null,!0,null,"pawn shape",null,null)
O.aA("./resources/pawn.obj",a.f,null,null,!1).aj(new L.fp(),null)}u=this.k4?"white":"black"
this.a=u+(" pawn "+this.go)
this.y.h(0,$.fo)}}
L.fp.prototype={
$1:function(a){H.i(a,"$iK")
$.fo.sab(0,a.c)},
$S:2}
L.ce.prototype={
aO:function(a,b,c,d,e,f){var u,t
u=U.bh(null)
this.k2=u
this.sbT(u)
this.r1=!1
this.r2=!1
this.rx=!1
u=this.k1
this.k2.sN(V.de(this.fy-4.5,0,this.go-4.5).k(0,V.iK(this.id)).k(0,V.iL(u,u,u,1)))
if(this.k4){u=this.rx
t=this.k3.id
if(u)this.sa1(t.d)
else this.sa1(t.b)}else{u=this.rx
t=this.k3.id
if(u)this.sa1(t.e)
else this.sa1(t.c)}}}
L.fs.prototype={
fg:function(a,b,c,d,e,f,g){var u
if($.ft==null){$.ft=E.ax(null,!0,null,"queen shape",null,null)
O.aA("./resources/queen.obj",a.f,null,null,!1).aj(new L.fu(),null)}u=this.k4?"white":"black"
this.a=u+(" queen "+this.go)
this.y.h(0,$.ft)}}
L.fu.prototype={
$1:function(a){H.i(a,"$iK")
$.ft.sab(0,a.c)},
$S:2}
L.fB.prototype={
fi:function(a,b,c,d,e,f,g){var u
if($.fD==null){$.fD=E.ax(null,!0,null,"rook shape",null,null)
O.aA("./resources/rook.obj",a.f,null,null,!1).aj(new L.fE(),null)}u=this.k4?"white":"black"
this.a=u+(" rook "+this.go)
this.y.h(0,$.fD)}}
L.fE.prototype={
$1:function(a){H.i(a,"$iK")
$.fD.sab(0,a.c)},
$S:2}
L.cp.prototype={
fl:function(a,b,c,d,e){var u,t,s,r
if($.fY==null){$.fY=E.ax(null,!0,null,"tile shape",null,null)
O.aA("./resources/tile.obj",a.f,null,null,!1).aj(new L.fZ(),null)}u=this.fy
t=this.go
this.sbT(U.bh(V.de(u-4.5,0,t-4.5)))
this.k3=!1
s=this.k2
r=s?"white":"black"
this.a=r+(" tile "+u+" "+t)
this.y.h(0,$.fY)
if(s){u=this.k3
t=this.k1.id
if(u)this.sa1(t.x)
else this.sa1(t.f)}else{u=this.k3
t=this.k1.id
if(u)this.sa1(t.y)
else this.sa1(t.r)}}}
L.fZ.prototype={
$1:function(a){H.i(a,"$iK")
$.fY.sab(0,a.c)},
$S:2};(function aliases(){var u=J.a4.prototype
u.f4=u.i
u=J.d5.prototype
u.f5=u.i
u=O.c9.prototype
u.d4=u.aI
u.c2=u.ax
u=O.aS.prototype
u.d5=u.aI
u.c3=u.ax
u=V.db.prototype
u.f6=u.aZ
u.d3=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lI","lt",10)
u(P,"lJ","lu",10)
u(P,"lK","lv",10)
t(P,"k9","lH",3)
s(P.dP.prototype,"gdV",0,1,null,["$2","$1"],["aX","dW"],34,0)
s(P.e_.prototype,"gjv",1,0,null,["$1","$0"],["az","jw"],33,0)
var n
s(n=E.K.prototype,"gey",0,0,null,["$1","$0"],["ez","ka"],0,0)
s(n,"geA",0,0,null,["$1","$0"],["eB","kb"],0,0)
s(n,"gew",0,0,null,["$1","$0"],["ex","k9"],0,0)
s(n,"geu",0,0,null,["$1","$0"],["ev","k6"],0,0)
r(n,"gk0","k5",6)
r(n,"gk7","k8",6)
s(n=E.dB.prototype,"gd8",0,0,null,["$1","$0"],["da","d9"],0,0)
q(n,"gks","eF",3)
p(n=X.dI.prototype,"ghG","hH",11)
p(n,"ghu","hv",11)
p(n,"ghA","hB",5)
p(n,"ghK","hL",21)
p(n,"ghI","hJ",21)
p(n,"ghO","hP",5)
p(n,"ghS","hT",5)
p(n,"ghE","hF",5)
p(n,"ghQ","hR",5)
p(n,"ghC","hD",5)
p(n,"ghU","hV",29)
p(n,"ghW","hX",11)
p(n,"gib","ic",9)
p(n,"gi7","i8",9)
p(n,"gi9","ia",9)
s(n=D.d7.prototype,"gdu",0,0,null,["$1","$0"],["dv","hM"],0,0)
p(n,"ghY","hZ",31)
r(n,"gho","hp",19)
r(n,"gi1","i2",19)
o(V.T.prototype,"gp","cQ",18)
o(V.F.prototype,"gp","cQ",18)
s(n=U.c6.prototype,"gbn",0,0,null,["$1","$0"],["S","aw"],0,0)
r(n,"ghm","hn",17)
r(n,"gi_","i0",17)
s(n=U.dJ.prototype,"gbn",0,0,null,["$1","$0"],["S","aw"],0,0)
p(n,"ghe","hf",4)
p(n,"ghg","hh",4)
p(n,"ghi","hj",4)
p(n,"gha","hb",4)
p(n,"ghc","hd",4)
p(n,"giL","iM",4)
p(n,"giJ","iK",4)
p(n,"giH","iI",4)
s(n=M.cS.prototype,"gX",0,0,null,["$1","$0"],["U","b2"],0,0)
r(n,"gi3","i4",22)
r(n,"gi5","i6",22)
s(M.cV.prototype,"gX",0,0,null,["$1","$0"],["U","b2"],0,0)
s(n=M.cY.prototype,"gX",0,0,null,["$1","$0"],["U","b2"],0,0)
r(n,"ghw","hx",6)
r(n,"ghy","hz",6)
s(n=O.ar.prototype,"gat",0,0,null,["$1","$0"],["I","b3"],0,0)
s(n,"gir",0,0,null,["$1","$0"],["dB","is"],0,0)
r(n,"ghq","hr",20)
r(n,"ghs","ht",20)
s(O.c9.prototype,"gat",0,0,null,["$1","$0"],["I","b3"],0,0)
s(O.ds.prototype,"gat",0,0,null,["$1","$0"],["I","b3"],0,0)
s(X.dl.prototype,"gfz",0,0,null,["$1","$0"],["au","fA"],0,0)
t(L,"m2","m9",3)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.C,null)
s(P.C,[H.iH,J.a4,J.ad,P.dV,P.k,H.d8,P.ay,H.bF,H.dH,H.fw,H.h2,P.bi,H.c5,H.c_,H.dZ,P.f7,H.f0,H.f2,H.eQ,H.dW,H.hu,P.e0,P.dN,P.dP,P.b_,P.a6,P.dO,P.ck,P.cl,P.fP,P.i3,P.aV,P.ae,P.i7,P.i2,P.cA,P.hX,P.R,P.c0,P.i6,P.Z,P.aw,P.ac,P.b1,P.fm,P.dv,P.dS,P.eI,P.a,P.U,P.z,P.da,P.Y,P.t,P.bq,W.eq,W.aF,W.cZ,P.e3,P.hY,O.N,O.ca,E.ef,E.K,E.fx,E.dB,Z.dL,Z.dM,Z.bZ,Z.bk,Z.aY,D.en,D.bD,D.w,O.ia,O.cJ,O.ib,X.cR,X.d6,X.eT,X.f4,X.aI,X.fg,X.h0,X.dI,D.bC,D.X,D.dm,D.du,D.dy,D.dz,D.dA,V.u,V.av,V.eB,V.dd,V.a7,V.S,V.a3,V.aJ,V.dp,V.T,V.F,U.dJ,M.cV,M.cY,M.as,A.cN,A.ee,A.fc,A.cs,A.cw,A.cu,A.cx,A.cv,A.cy,A.bB,A.dE,A.hb,F.a2,F.aR,F.b7,F.dr,F.fI,F.fJ,F.fK,F.aa,F.hj,F.hk,F.hn,F.ho,O.br,O.c9,T.fU,V.eb,V.b4,V.db,V.fH,V.ci,V.dC,V.cq,V.h_,X.by,X.cm,X.eM,X.dl,V.fL,L.ff])
s(J.a4,[J.eP,J.d4,J.d5,J.aG,J.bH,J.bn,H.dj,W.bE,W.bA,W.dQ,W.es,W.cX,W.m,W.dT,W.bj,W.dX,W.aW,W.e1,P.cP,P.d_,P.dn,P.bL,P.dq,P.dw,P.dF])
s(J.d5,[J.fq,J.bM,J.b2])
t(J.iG,J.aG)
s(J.bH,[J.d3,J.d2])
t(P.f3,P.dV)
s(P.f3,[H.dG,W.hD,W.hC,P.eE])
t(H.a0,H.dG)
s(P.k,[H.ez,H.f8,H.hs])
s(P.ay,[H.f9,H.ht])
s(P.bi,[H.fl,H.eS,H.he,H.h4,H.em,H.fF,P.cd,P.aN,P.hf,P.hd,P.cj,P.ep,P.er])
s(H.c_,[H.iu,H.fS,H.eR,H.il,H.im,H.io,P.hz,P.hy,P.hA,P.hB,P.i5,P.i4,P.hw,P.hv,P.i8,P.i9,P.ig,P.hH,P.hP,P.hL,P.hM,P.hN,P.hJ,P.hO,P.hI,P.hS,P.hT,P.hR,P.hQ,P.fQ,P.fR,P.id,P.i0,P.i_,P.i1,P.f6,P.et,P.eu,W.eK,W.eL,W.hG,P.ih,P.eF,P.eG,E.fy,E.fz,E.fA,E.fX,D.eD,F.ii,F.hq,F.hp,F.hl,F.hm,T.fW,T.fV,V.it,V.fN,V.fM,L.ej,L.ey,L.eW,L.f_,L.fp,L.fu,L.fE,L.fZ])
s(H.fS,[H.fO,H.bX])
t(P.f5,P.f7)
t(H.aH,P.f5)
t(H.f1,H.ez)
t(H.dg,H.dj)
s(H.dg,[H.cB,H.cD])
t(H.cC,H.cB)
t(H.dh,H.cC)
t(H.cE,H.cD)
t(H.di,H.cE)
s(H.di,[H.fh,H.fi,H.fj,H.dk,H.fk])
s(P.dP,[P.hx,P.e_])
t(P.hZ,P.i7)
t(P.hW,P.i2)
t(P.cU,P.fP)
t(P.eA,P.c0)
t(P.hg,P.eA)
t(P.hh,P.cU)
s(P.ac,[P.y,P.v])
s(P.aN,[P.bK,P.eN])
s(W.bE,[W.J,W.d1,W.cz])
s(W.J,[W.a1,W.bg,W.c4])
s(W.a1,[W.q,P.p])
s(W.q,[W.ec,W.ed,W.cO,W.bz,W.c3,W.eH,W.c7,W.cb,W.fG])
t(W.c2,W.dQ)
t(W.dU,W.dT)
t(W.bG,W.dU)
t(W.d0,W.c4)
t(W.aP,W.d1)
s(W.m,[W.bs,W.aU])
s(W.bs,[W.aQ,W.a5,W.aK])
t(W.dY,W.dX)
t(W.cc,W.dY)
t(W.e2,W.e1)
t(W.h1,W.e2)
t(W.hr,W.cb)
t(W.aZ,W.a5)
t(W.dR,W.cX)
t(W.hE,P.ck)
t(W.iY,W.hE)
t(W.hF,P.cl)
t(P.aC,P.hY)
s(E.ef,[Z.cQ,A.ch,T.cn])
s(D.w,[D.bl,D.bm,D.B,X.fr])
s(X.fr,[X.d9,X.bp,X.dD])
s(O.N,[D.d7,U.c6,M.cS])
s(D.en,[U.eo,U.af])
t(U.cT,U.af)
s(A.ch,[A.dc,A.dt])
s(A.dE,[A.E,A.h7,A.h8,A.ha,A.h5,A.O,A.h6,A.D,A.h9,A.hc,A.ct,A.ai,A.ag,A.a9])
s(O.br,[O.ar,O.ds])
s(O.c9,[O.fa,O.fb,O.aS])
s(O.aS,[O.fd,O.fe])
s(T.cn,[T.dx,T.co])
t(T.fT,T.dx)
s(V.db,[V.b6,V.cr])
t(X.eJ,X.cm)
s(E.K,[L.ce,L.ek,L.ev,L.cp])
s(L.ce,[L.eg,L.eU,L.eX,L.fn,L.fs,L.fB])
u(H.dG,H.dH)
u(H.cB,P.R)
u(H.cC,H.bF)
u(H.cD,P.R)
u(H.cE,H.bF)
u(P.dV,P.R)
u(W.dQ,W.eq)
u(W.dT,P.R)
u(W.dU,W.aF)
u(W.dX,P.R)
u(W.dY,W.aF)
u(W.e1,P.R)
u(W.e2,W.aF)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.cO.prototype
C.m=W.bz.prototype
C.t=W.bA.prototype
C.l=W.c3.prototype
C.D=W.d0.prototype
C.E=W.aP.prototype
C.F=J.a4.prototype
C.a=J.aG.prototype
C.G=J.d2.prototype
C.d=J.d3.prototype
C.o=J.d4.prototype
C.i=J.bH.prototype
C.j=J.bn.prototype
C.N=J.b2.prototype
C.O=W.cc.prototype
C.x=J.fq.prototype
C.b=P.bL.prototype
C.p=J.bM.prototype
C.y=W.aZ.prototype
C.z=W.cz.prototype
C.A=new P.fm()
C.B=new P.hh()
C.k=new P.hZ()
C.c=new A.bB(0,"ColorSourceType.None")
C.h=new A.bB(1,"ColorSourceType.Solid")
C.e=new A.bB(2,"ColorSourceType.Texture2D")
C.f=new A.bB(3,"ColorSourceType.TextureCube")
C.n=new P.b1(0)
C.C=new P.b1(5e6)
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
C.w=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.q=new P.hg(!1)})();(function staticFields(){$.aO=0
$.bY=null
$.jj=null
$.iZ=!1
$.kg=null
$.k7=null
$.kk=null
$.ij=null
$.ip=null
$.j5=null
$.bO=null
$.cH=null
$.cI=null
$.j_=!1
$.H=C.k
$.k3=null
$.jz=null
$.jF=null
$.cf=null
$.jK=null
$.jR=null
$.jU=null
$.jT=null
$.hi=null
$.jS=null
$.lm="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ll="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.jE=null
$.ei=null
$.ex=null
$.eV=null
$.eZ=null
$.fo=null
$.ft=null
$.fD=null
$.fY=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mh","ko",function(){return H.ke("_$dart_dartClosure")})
u($,"mi","jb",function(){return H.ke("_$dart_js")})
u($,"mm","kp",function(){return H.aX(H.h3({
toString:function(){return"$receiver$"}}))})
u($,"mn","kq",function(){return H.aX(H.h3({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mo","kr",function(){return H.aX(H.h3(null))})
u($,"mp","ks",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ms","kv",function(){return H.aX(H.h3(void 0))})
u($,"mt","kw",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mr","ku",function(){return H.aX(H.jP(null))})
u($,"mq","kt",function(){return H.aX(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mv","ky",function(){return H.aX(H.jP(void 0))})
u($,"mu","kx",function(){return H.aX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mL","jc",function(){return P.ls()})
u($,"mN","cM",function(){return[]})
u($,"mM","kC",function(){return P.iO("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mE","kB",function(){return Z.aD(0)})
u($,"my","kz",function(){return Z.aD(511)})
u($,"mG","aM",function(){return Z.aD(1)})
u($,"mF","bd",function(){return Z.aD(2)})
u($,"mA","bc",function(){return Z.aD(4)})
u($,"mH","be",function(){return Z.aD(8)})
u($,"mI","bf",function(){return Z.aD(16)})
u($,"mB","cK",function(){return Z.aD(32)})
u($,"mC","cL",function(){return Z.aD(64)})
u($,"mD","kA",function(){return Z.aD(96)})
u($,"mJ","bW",function(){return Z.aD(128)})
u($,"mz","bb",function(){return Z.aD(256)})
u($,"mg","kn",function(){return new V.eB(1e-9)})
u($,"mf","G",function(){return $.kn()})})()
var v={mangledGlobalNames:{v:"int",y:"double",ac:"num",t:"String",Z:"bool",z:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.z},{func:1,ret:P.z,args:[E.K]},{func:1,ret:-1},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.v,[P.k,E.K]]},{func:1,ret:P.z,args:[F.a2]},{func:1,ret:P.z,args:[W.m]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.z,args:[D.w]},{func:1,ret:P.z,args:[,,]},{func:1,args:[,]},{func:1,ret:P.t,args:[P.v]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[P.v,[P.k,U.af]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.v,[P.k,D.X]]},{func:1,ret:-1,args:[P.v,[P.k,V.a7]]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:-1,args:[P.v,[P.k,M.as]]},{func:1,ret:P.Z,args:[W.J]},{func:1,ret:P.z,args:[P.ac]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,args:[W.m]},{func:1,ret:P.z,args:[W.aU]},{func:1,ret:P.t,args:[W.aP]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:[P.a6,,],args:[,]},{func:1,ret:P.Z,args:[[P.k,D.X]]},{func:1,ret:P.z,args:[,],opt:[P.Y]},{func:1,ret:-1,opt:[P.C]},{func:1,ret:-1,args:[P.C],opt:[P.Y]},{func:1,ret:P.z,args:[P.v,,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.y,args:[P.y]},{func:1,ret:P.z,args:[,P.Y]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,args:[P.t]},{func:1,ret:P.z,args:[P.aV]},{func:1,args:[,P.t]},{func:1,ret:W.a1,args:[W.J]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a4,MediaError:J.a4,Navigator:J.a4,NavigatorConcurrentHardware:J.a4,NavigatorUserMediaError:J.a4,OverconstrainedError:J.a4,PositionError:J.a4,WebGLActiveInfo:J.a4,WebGLRenderbuffer:J.a4,WebGL2RenderingContext:J.a4,SQLError:J.a4,ArrayBufferView:H.dj,Float32Array:H.dh,Int16Array:H.fh,Int32Array:H.fi,Uint32Array:H.fj,Uint8ClampedArray:H.dk,CanvasPixelArray:H.dk,Uint8Array:H.fk,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,HTMLAnchorElement:W.ec,HTMLAreaElement:W.ed,HTMLBodyElement:W.cO,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.bA,CDATASection:W.bg,CharacterData:W.bg,Comment:W.bg,ProcessingInstruction:W.bg,Text:W.bg,CSSStyleDeclaration:W.c2,MSStyleCSSProperties:W.c2,CSS2Properties:W.c2,HTMLDivElement:W.c3,XMLDocument:W.c4,Document:W.c4,DOMException:W.es,DOMRectReadOnly:W.cX,Element:W.a1,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bE,HTMLFormElement:W.eH,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.d0,XMLHttpRequest:W.aP,XMLHttpRequestEventTarget:W.d1,ImageData:W.bj,HTMLImageElement:W.c7,KeyboardEvent:W.aQ,HTMLAudioElement:W.cb,HTMLMediaElement:W.cb,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,NodeList:W.cc,RadioNodeList:W.cc,ProgressEvent:W.aU,ResourceProgressEvent:W.aU,HTMLSelectElement:W.fG,Touch:W.aW,TouchEvent:W.aK,TouchList:W.h1,CompositionEvent:W.bs,FocusEvent:W.bs,TextEvent:W.bs,UIEvent:W.bs,HTMLVideoElement:W.hr,WheelEvent:W.aZ,Window:W.cz,DOMWindow:W.cz,ClientRect:W.dR,DOMRect:W.dR,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,WebGLBuffer:P.cP,WebGLFramebuffer:P.d_,WebGLProgram:P.dn,WebGLRenderingContext:P.bL,WebGLShader:P.dq,WebGLTexture:P.dw,WebGLUniformLocation:P.dF})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.ki,[])
else L.ki([])})})()
//# sourceMappingURL=main.dart.js.map
