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
a[c]=function(){a[c]=function(){H.nM(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jK(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jr:function jr(a){this.a=a},
iY:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
f4:function(){return new P.bO("No element")},
m0:function(){return new P.bO("Too many elements")},
m_:function(){return new P.bO("Too few elements")},
t:function t(a){this.a=a},
eM:function eM(){},
bG:function bG(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fk:function fk(a,b,c){this.a=a
this.b=b
this.$ti=c},
fl:function fl(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fm:function fm(a,b,c){this.a=a
this.b=b
this.$ti=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.$ti=c},
hR:function hR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
cA:function cA(){},
dX:function dX(){},
lR:function(){throw H.c(P.W("Cannot modify unmodifiable Map"))},
c0:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nt:function(a){return v.types[H.ab(a)]},
nA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iaF},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.c(H.am(a))
return u},
mp:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.f5(u)
t=u[0]
s=u[1]
return new H.fJ(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ck:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mm:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.E(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
bK:function(a){return H.md(a)+H.jH(H.bt(a),0,null)},
md:function(a){var u,t,s,r,q,p,o,n,m
u=J.N(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibq){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.c.H(r,0)===36?C.c.ao(r,1):r)},
me:function(){if(!!self.location)return self.location.href
return},
kl:function(a){var u,t,s,r,q
H.er(a)
u=J.aB(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mn:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.am(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aP(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.am(r))}return H.kl(u)},
km:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.am(s))
if(s<0)throw H.c(H.am(s))
if(s>65535)return H.mn(a)}return H.kl(a)},
mo:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bL:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aP(u,10))>>>0,56320|u&1023)}}throw H.c(P.a6(a,0,1114111,null,null))},
bJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ml:function(a){var u=H.bJ(a).getFullYear()+0
return u},
mj:function(a){var u=H.bJ(a).getMonth()+1
return u},
mf:function(a){var u=H.bJ(a).getDate()+0
return u},
mg:function(a){var u=H.bJ(a).getHours()+0
return u},
mi:function(a){var u=H.bJ(a).getMinutes()+0
return u},
mk:function(a){var u=H.bJ(a).getSeconds()+0
return u},
mh:function(a){var u=H.bJ(a).getMilliseconds()+0
return u},
C:function(a){throw H.c(H.am(a))},
d:function(a,b){if(a==null)J.aB(a)
throw H.c(H.bW(a,b))},
bW:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.ab(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.bD(b,a,"index",null,u)
return P.dE(b,"index",null)},
nm:function(a,b,c){if(a>c)return new P.bM(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bM(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
am:function(a){return new P.aC(!0,a,null,null)},
nh:function(a){if(typeof a!=="number")throw H.c(H.am(a))
return a},
c:function(a){var u
if(a==null)a=new P.dz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ld})
u.name=""}else u.toString=H.ld
return u},
ld:function(){return J.an(this.dartException)},
p:function(a){throw H.c(a)},
y:function(a){throw H.c(P.aY(a))},
aT:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
he:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kv:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kh:function(a,b){return new H.fB(a,b==null?null:b.method)},
js:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.f8(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aP(s,16)&8191)===10)switch(r){case 438:return u.$1(H.js(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kh(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lh()
p=$.li()
o=$.lj()
n=$.lk()
m=$.ln()
l=$.lo()
k=$.lm()
$.ll()
j=$.lq()
i=$.lp()
h=q.ac(t)
if(h!=null)return u.$1(H.js(H.E(t),h))
else{h=p.ac(t)
if(h!=null){h.method="call"
return u.$1(H.js(H.E(t),h))}else{h=o.ac(t)
if(h==null){h=n.ac(t)
if(h==null){h=m.ac(t)
if(h==null){h=l.ac(t)
if(h==null){h=k.ac(t)
if(h==null){h=n.ac(t)
if(h==null){h=j.ac(t)
if(h==null){h=i.ac(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kh(H.E(t),h))}}return u.$1(new H.hr(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dJ()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dJ()
return a},
bZ:function(a){var u
if(a==null)return new H.ee(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ee(a)},
np:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nz:function(a,b,c,d,e,f){H.e(a,"$ibi")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bV:function(a,b){var u
H.ab(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nz)
a.$identity=u
return u},
lQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.N(d).$ia){u.$reflectionInfo=d
s=H.mp(u).r}else s=d
r=e?Object.create(new H.fZ().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.n()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k5(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nt,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k3:H.jk
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k5(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lN:function(a,b,c,d){var u=H.jk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k5:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lN(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.ez("self")
$.c4=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.ez("self")
$.c4=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
lO:function(a,b,c,d){var u,t
u=H.jk
t=H.k3
switch(b?-1:a){case 0:throw H.c(H.mt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lP:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.ez("self")
$.c4=u}t=$.k2
if(t==null){t=H.ez("receiver")
$.k2=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lO(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()},
jK:function(a,b,c,d,e,f,g){return H.lQ(a,b,H.ab(c),d,!!e,!!f,g)},
jk:function(a){return a.a},
k3:function(a){return a.c},
ez:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.f5(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aK(a,"String"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"double"))},
nF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"num"))},
jI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aK(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aK(a,"int"))},
lb:function(a,b){throw H.c(H.aK(a,H.c0(H.E(b).substring(2))))},
nH:function(a,b){throw H.c(H.lM(a,H.c0(H.E(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.lb(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.nH(a,b)},
er:function(a){if(a==null)return a
if(!!J.N(a).$ia)return a
throw H.c(H.aK(a,"List<dynamic>"))},
l8:function(a,b){var u
if(a==null)return a
u=J.N(a)
if(!!u.$ia)return a
if(u[b])return a
H.lb(a,b)},
l4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
eo:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l4(J.N(a))
if(u==null)return!1
return H.kS(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jE)return a
$.jE=!0
try{if(H.eo(a,b))return a
u=H.jb(b)
t=H.aK(a,u)
throw H.c(t)}finally{$.jE=!1}},
jM:function(a,b){if(a!=null&&!H.jJ(a,b))H.p(H.aK(a,H.jb(b)))
return a},
aK:function(a,b){return new H.hf("TypeError: "+P.eQ(a)+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")},
lM:function(a,b){return new H.eA("CastError: "+P.eQ(a)+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")},
kX:function(a){var u,t
u=J.N(a)
if(!!u.$ic5){t=H.l4(u)
if(t!=null)return H.jb(t)
return"Closure"}return H.bK(a)},
nM:function(a){throw H.c(new P.eH(H.E(a)))},
mt:function(a){return new H.fO(a)},
l5:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bt:function(a){if(a==null)return
return a.$ti},
ox:function(a,b,c){return H.c_(a["$a"+H.i(c)],H.bt(b))},
cR:function(a,b,c,d){var u
H.E(c)
H.ab(d)
u=H.c_(a["$a"+H.i(c)],H.bt(b))
return u==null?null:u[d]},
aa:function(a,b,c){var u
H.E(b)
H.ab(c)
u=H.c_(a["$a"+H.i(b)],H.bt(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ab(b)
u=H.bt(a)
return u==null?null:u[b]},
jb:function(a){return H.bs(a,null)},
bs:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jH(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.n6(a,b)
if('futureOr' in a)return"FutureOr<"+H.bs("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.d(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.I)o+=" extends "+H.bs(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bs(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bs(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bs(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.no(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bs(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jH:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bs(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cP:function(a,b,c,d){var u,t
H.E(b)
H.er(c)
H.E(d)
if(a==null)return!1
u=H.bt(a)
t=J.N(a)
if(t[b]==null)return!1
return H.l_(H.c_(t[d],u),null,c,null)},
h:function(a,b,c,d){H.E(b)
H.er(c)
H.E(d)
if(a==null)return a
if(H.cP(a,b,c,d))return a
throw H.c(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jH(c,0,null),v.mangledGlobalNames)))},
l_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
ov:function(a,b,c){return a.apply(b,H.c_(J.N(b)["$a"+H.i(c)],H.bt(b)))},
l7:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="D"||a===-1||a===-2||H.l7(u)}return!1},
jJ:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="D"||b===-1||b===-2||H.l7(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eo(a,b)}u=J.N(a).constructor
t=H.bt(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jJ(a,b))throw H.c(H.aK(a,H.jb(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.kS(a,b,c,d)
if('func' in a)return c.name==="bi"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"ca" in t.prototype))return!1
r=t.prototype["$a"+"ca"]
q=H.c_(r,u?a.slice(1):null)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l_(H.c_(m,u),b,p,d)},
kS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nE(h,b,g,d)},
nE:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aA(c[r],d,a[r],b))return!1}return!0},
ow:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
nC:function(a){var u,t,s,r,q,p
u=H.E($.l6.$1(a))
t=$.iX[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j1[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.kZ.$2(a,u))
if(u!=null){t=$.iX[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j1[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ja(s)
$.iX[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j1[u]=s
return s}if(q==="-"){p=H.ja(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.la(a,s)
if(q==="*")throw H.c(P.hq(u))
if(v.leafTags[u]===true){p=H.ja(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.la(a,s)},
la:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jP(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ja:function(a){return J.jP(a,!1,null,!!a.$iaF)},
nD:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ja(u)
else return J.jP(u,c,null,null)},
nx:function(){if(!0===$.jO)return
$.jO=!0
H.ny()},
ny:function(){var u,t,s,r,q,p,o,n
$.iX=Object.create(null)
$.j1=Object.create(null)
H.nw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lc.$1(q)
if(p!=null){o=H.nD(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nw:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.bU(C.a0,H.bU(C.a5,H.bU(C.E,H.bU(C.E,H.bU(C.a4,H.bU(C.a1,H.bU(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l6=new H.iZ(q)
$.kZ=new H.j_(p)
$.lc=new H.j0(o)},
bU:function(a,b){return a(b)||b},
m2:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a0("Illegal RegExp pattern ("+String(r)+")",a,null))},
nL:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jS:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eE:function eE(){},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fJ:function fJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hd:function hd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fB:function fB(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
jg:function jg(a){this.a=a},
ee:function ee(a){this.a=a
this.b=null},
c5:function c5(){},
h4:function h4(){},
fZ:function fZ(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a){this.a=a},
eA:function eA(a){this.a=a},
fO:function fO(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fc:function fc(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bS:function(a){return a},
mb:function(a){return new Int8Array(a)},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bW(b,a))},
n4:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nm(a,b,c))
return b},
bI:function bI(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
dx:function dx(){},
ch:function ch(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
no:function(a){return J.kb(a?Object.keys(a):[],null)},
nG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ep:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jO==null){H.nx()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hq("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jU()]
if(q!=null)return q
q=H.nC(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.jU(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
m1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.kb(new Array(a),b)},
kb:function(a,b){return J.f5(H.b(a,[b]))},
f5:function(a){H.er(a)
a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.df.prototype
return J.de.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.dg.prototype
if(typeof a=="boolean")return J.f6.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.I)return a
return J.ep(a)},
nq:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.I)return a
return J.ep(a)},
bY:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.I)return a
return J.ep(a)},
jN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.I)return a
return J.ep(a)},
nr:function(a){if(typeof a=="number")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bq.prototype
return a},
ns:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bq.prototype
return a},
cQ:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bq.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.I)return a
return J.ep(a)},
lz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nq(a).n(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).v(a,b)},
jX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ns(a).F(a,b)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nr(a).t(a,b)},
lB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bY(a).k(a,b)},
lC:function(a,b,c,d){return J.a5(a).fQ(a,b,c,d)},
lD:function(a,b){return J.cQ(a).H(a,b)},
es:function(a,b){return J.a5(a).ir(a,b)},
jh:function(a,b,c){return J.a5(a).iv(a,b,c)},
jY:function(a,b){return J.a5(a).D(a,b)},
lE:function(a,b){return J.cQ(a).Z(a,b)},
et:function(a,b){return J.jN(a).a7(a,b)},
lF:function(a,b,c,d){return J.a5(a).k8(a,b,c,d)},
lG:function(a){return J.a5(a).gjz(a)},
jZ:function(a){return J.a5(a).gcs(a)},
cV:function(a){return J.N(a).gJ(a)},
bu:function(a){return J.jN(a).gS(a)},
aB:function(a){return J.bY(a).gm(a)},
lH:function(a){return J.a5(a).gkV(a)},
ji:function(a,b){return J.a5(a).aV(a,b)},
k_:function(a){return J.jN(a).kK(a)},
lI:function(a,b){return J.a5(a).kP(a,b)},
lJ:function(a,b,c){return J.a5(a).fb(a,b,c)},
lK:function(a,b,c){return J.cQ(a).u(a,b,c)},
lL:function(a){return J.cQ(a).l1(a)},
an:function(a){return J.N(a).i(a)},
a7:function a7(){},
f6:function f6(){},
dg:function dg(){},
dh:function dh(){},
fD:function fD(){},
bq:function bq(){},
b1:function b1(){},
aE:function aE(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bk:function bk(){},
df:function df(){},
de:function de(){},
b0:function b0(){}},P={
mH:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bV(new P.hT(u),1)).observe(t,{childList:true})
return new P.hS(u,t,s)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
mI:function(a){self.scheduleImmediate(H.bV(new P.hU(H.k(a,{func:1,ret:-1})),0))},
mJ:function(a){self.setImmediate(H.bV(new P.hV(H.k(a,{func:1,ret:-1})),0))},
mK:function(a){P.jv(C.y,H.k(a,{func:1,ret:-1}))},
jv:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a5(a.a,1000)
return P.mQ(u<0?0:u,b)},
ku:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aS]})
u=C.f.a5(a.a,1000)
return P.mR(u<0?0:u,b)},
mQ:function(a,b){var u=new P.ef(!0)
u.fL(a,b)
return u},
mR:function(a,b){var u=new P.ef(!1)
u.fM(a,b)
return u},
mL:function(a,b){var u,t,s
b.a=1
try{a.eQ(new P.i3(b),new P.i4(b),null)}catch(s){u=H.ac(s)
t=H.bZ(s)
P.nI(new P.i5(b,u,t))}},
kH:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaz")
if(u>=4){t=b.c9()
b.a=a.a
b.c=a.c
P.cF(b,t)}else{t=H.e(b.c,"$iaW")
b.a=2
b.c=a
a.dA(t)}},
cF:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iag")
t=t.b
p=q.a
o=q.b
t.toString
P.iO(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.e(m,"$iag")
t=t.b
p=m.a
o=m.b
t.toString
P.iO(null,null,t,p,o)
return}j=$.U
if(j!=l)$.U=l
else j=null
t=b.c
if(t===8)new P.i9(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.i8(s,b,m).$0()}else if((t&2)!==0)new P.i7(u,s,b).$0()
if(j!=null)$.U=j
t=s.b
if(!!J.N(t).$ica){if(t.a>=4){i=H.e(o.c,"$iaW")
o.c=null
b=o.bl(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kH(t,o)
return}}h=b.b
i=H.e(h.c,"$iaW")
h.c=null
b=h.bl(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.e(p,"$iag")
h.a=8
h.c=p}u.a=h
t=h}},
n9:function(a,b){if(H.eo(a,{func:1,args:[P.I,P.ap]}))return H.k(a,{func:1,ret:null,args:[P.I,P.ap]})
if(H.eo(a,{func:1,args:[P.I]}))return H.k(a,{func:1,ret:null,args:[P.I]})
throw H.c(P.jj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n8:function(){var u,t
for(;u=$.bT,u!=null;){$.cO=null
t=u.b
$.bT=t
if(t==null)$.cN=null
u.a.$0()}},
nd:function(){$.jF=!0
try{P.n8()}finally{$.cO=null
$.jF=!1
if($.bT!=null)$.jV().$1(P.l0())}},
kW:function(a){var u=new P.e2(H.k(a,{func:1,ret:-1}))
if($.bT==null){$.cN=u
$.bT=u
if(!$.jF)$.jV().$1(P.l0())}else{$.cN.b=u
$.cN=u}},
nc:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bT
if(u==null){P.kW(a)
$.cO=$.cN
return}t=new P.e2(a)
s=$.cO
if(s==null){t.b=u
$.cO=t
$.bT=t}else{t.b=s.b
s.b=t
$.cO=t
if(t.b==null)$.cN=t}},
nI:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.U
if(C.l===t){P.iQ(null,null,C.l,a)
return}t.toString
P.iQ(null,null,t,H.k(t.cn(a),u))},
kt:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.U
if(t===C.l){t.toString
return P.jv(a,b)}return P.jv(a,H.k(t.cn(b),u))},
mx:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aS]}
H.k(b,u)
t=$.U
if(t===C.l){t.toString
return P.ku(a,b)}s=t.dQ(b,P.aS)
$.U.toString
return P.ku(a,H.k(s,u))},
iO:function(a,b,c,d,e){var u={}
u.a=d
P.nc(new P.iP(u,e))},
kT:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
kU:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
na:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
iQ:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cn(d):c.jA(d,-1)
P.kW(d)},
hT:function hT(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
ef:function ef(a){this.a=a
this.b=null
this.c=0},
ix:function ix(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(a,b,c,d,e){var _=this
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
i2:function i2(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
h_:function h_(){},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
co:function co(){},
h0:function h0(){},
aS:function aS(){},
ag:function ag(a,b){this.a=a
this.b=b},
iH:function iH(){},
iP:function iP(a,b){this.a=a
this.b=b},
ig:function ig(){},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b){this.a=a
this.b=b},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function(a,b,c,d,e){return new H.aG([d,e])},
m5:function(a,b,c){H.er(a)
return H.h(H.np(a,new H.aG([b,c])),"$ikc",[b,c],"$akc")},
kd:function(a,b){return new H.aG([a,b])},
dl:function(a,b,c,d){return new P.id([d])},
jB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mP:function(a,b,c){var u=new P.e8(a,b,[c])
u.c=a.e
return u},
lZ:function(a,b,c){var u,t
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.cU()
C.a.h(t,a)
try{P.n7(a,u)}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}t=P.kr(b,H.l8(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
jp:function(a,b,c){var u,t,s
if(P.jG(a))return b+"..."+c
u=new P.ae(b)
t=$.cU()
C.a.h(t,a)
try{s=u
s.a=P.kr(s.a,a,", ")}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jG:function(a){var u,t
for(u=0;t=$.cU(),u<t.length;++u)if(a===t[u])return!0
return!1},
n7:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.i(u.gK())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gK();++s
if(!u.E()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK();++s
for(;u.E();o=n,n=m){m=u.gK();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
m6:function(a,b,c){var u=P.m4(null,null,null,b,c)
a.X(0,new P.fe(u,b,c))
return u},
ke:function(a,b){var u,t,s
u=P.dl(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)u.h(0,H.x(a[s],b))
return u},
jt:function(a){var u,t
u={}
if(P.jG(a))return"{...}"
t=new P.ae("")
try{C.a.h($.cU(),a)
t.a+="{"
u.a=!0
a.X(0,new P.fi(u,t))
t.a+="}"}finally{u=$.cU()
if(0>=u.length)return H.d(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
id:function id(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bQ:function bQ(a){this.a=a
this.c=this.b=null},
e8:function e8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(){},
R:function R(){},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
bH:function bH(){},
iy:function iy(){},
fj:function fj(){},
dY:function dY(a,b){this.a=a
this.$ti=b},
il:function il(){},
e9:function e9(){},
ej:function ej(){},
mB:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mC(!1,b,c,d)
return},
mC:function(a,b,c,d){var u,t,s
u=$.lr()
if(u==null)return
t=0===c
if(t&&!0)return P.jy(u,b)
s=b.length
d=P.b5(c,d,s,null,null,null)
if(t&&d===s)return P.jy(u,b)
return P.jy(u,b.subarray(c,d))},
jy:function(a,b){if(P.mE(b))return
return P.mF(a,b)},
mF:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ac(t)}return},
mE:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mD:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ac(t)}return},
nb:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bY(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bN()
if((s&127)!==s)return t-b}return c-b},
k1:function(a,b,c,d,e,f){if(C.f.be(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
ew:function ew(a){this.a=a},
ex:function ex(a){this.a=a},
bx:function bx(){},
bg:function bg(){},
eO:function eO(){},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(a){this.a=a},
hy:function hy(a){this.a=a},
hA:function hA(){},
iF:function iF(a){this.b=this.a=0
this.c=a},
hz:function hz(a){this.a=a},
iD:function iD(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mm(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
lW:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bK(a)+"'"},
m7:function(a,b,c,d){var u,t
H.x(b,d)
u=J.m1(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
m8:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gS(a);s.E();)C.a.h(t,H.x(s.gK(),c))
if(b)return t
return H.h(J.f5(t),"$ia",u,"$aa")},
dK:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaE",[u],"$aaE")
t=a.length
c=P.b5(b,c,t,null,null,null)
return H.km(b>0||c<t?C.a.fg(a,b,c):a)}if(!!J.N(a).$ich)return H.mo(a,b,P.b5(b,c,a.length,null,null,null))
return P.mv(a,b,c)},
mv:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a6(b,0,J.aB(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a6(c,b,J.aB(a),null,null))
t=J.bu(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.a6(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gK())
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.a6(c,b,s,null,null))
r.push(t.gK())}return H.km(r)},
mr:function(a,b,c){return new H.f7(a,H.m2(a,!1,!0,!1))},
kr:function(a,b,c){var u=J.bu(b)
if(!u.E())return a
if(c.length===0){do a+=H.i(u.gK())
while(u.E())}else{a+=H.i(u.gK())
for(;u.E();)a=a+c+H.i(u.gK())}return a},
kx:function(){var u=H.me()
if(u!=null)return P.mA(u,0,null)
throw H.c(P.W("'Uri.base' is not supported"))},
ek:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lx().b
if(typeof b!=="string")H.p(H.am(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.aa(c,"bx",0))
t=c.gk7().ct(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bL(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lS:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d4:function(a){if(a>=10)return""+a
return"0"+a},
k7:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lW(a)},
cX:function(a){return new P.aC(!1,null,null,a)},
jj:function(a,b,c){return new P.aC(!0,a,b,c)},
dE:function(a,b,c){return new P.bM(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.bM(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c,d,e,f){if(typeof a!=="number")return H.C(a)
if(0>a||a>c)throw H.c(P.a6(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a6(b,a,c,"end",f))
return b}return c},
bD:function(a,b,c,d,e){var u=H.ab(e==null?J.aB(b):e)
return new P.f3(b,u,!0,a,c,"Index out of range")},
W:function(a){return new P.hs(a)},
hq:function(a){return new P.hp(a)},
kq:function(a){return new P.bO(a)},
aY:function(a){return new P.eD(a)},
u:function(a){return new P.e5(a)},
a0:function(a,b,c){return new P.eY(a,b,c)},
m9:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jR:function(a){H.nG(a)},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.kw(b>0||c<c?C.c.u(a,b,c):a,5,null).geV()
else if(t===32)return P.kw(C.c.u(a,u,c),0,null).geV()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.l])
C.a.q(r,0,0)
s=b-1
C.a.q(r,1,s)
C.a.q(r,2,s)
C.a.q(r,7,s)
C.a.q(r,3,b)
C.a.q(r,4,b)
C.a.q(r,5,c)
C.a.q(r,6,c)
if(P.kV(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.la()
if(q>=b)if(P.kV(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Y()
if(typeof m!=="number")return H.C(m)
if(l<m)m=l
if(typeof n!=="number")return n.Y()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Y()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Y()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.a8(a,"..",n)))i=m>n+2&&C.c.a8(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a8(a,"file",b)){if(p<=b){if(!C.c.a8(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aU(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a8(a,"http",b)){if(s&&o+3===n&&C.c.a8(a,"80",o+1))if(b===0&&!0){a=C.c.aU(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.a8(a,"https",b)){if(s&&o+4===n&&C.c.a8(a,"443",o+1))if(b===0&&!0){a=C.c.aU(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.c.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.ip(a,q,p,o,n,m,l,j)}return P.mS(a,b,c,q,p,o,n,m,l,j)},
kz:function(a,b){var u=P.f
return C.a.kd(H.b(a.split("&"),[u]),P.kd(u,u),new P.hx(b),[P.F,P.f,P.f])},
mz:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hu(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Z(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eq(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.f8()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.d(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eq(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.f8()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.d(t,p)
t[p]=n
return t},
ky:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hv(a)
t=new P.hw(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Z(a,r)
if(n===58){if(r===b){++r
if(C.c.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mz(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.f.aP(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
mS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mZ(a,b,d)
else{if(d===b)P.cK(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n_(a,u,e-1):""
s=P.mW(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.mY(P.eq(C.c.u(a,r,g),new P.iz(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mX(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.jC(a,h+1,i,null):null
return new P.bR(j,t,s,q,p,o,i<c?P.mV(a,i+1,c):null)},
kL:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cK:function(a,b,c){throw H.c(P.a0(c,a,b))},
mY:function(a,b){if(a!=null&&a===P.kL(b))return
return a},
mW:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.Z(a,u)!==93)P.cK(a,b,"Missing end `]` to match `[` in host")
P.ky(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.c.Z(a,t)===58){P.ky(a,b,c)
return"["+a+"]"}return P.n1(a,b,c)},
n1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Z(a,u)
if(q===37){p=P.kR(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ae("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ae("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cK(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kM(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mZ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kO(C.c.H(a,b)))P.cK(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cK(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.mT(t?a.toLowerCase():a)},
mT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n_:function(a,b,c){return P.cL(a,b,c,C.a9,!1)},
mX:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cL(a,b,c,C.L,!0):C.r.le(d,new P.iA(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a4(r,"/"))r="/"+r
return P.n0(r,e,f)},
n0:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a4(a,"/"))return P.n2(a,!u||c)
return P.n3(a)},
jC:function(a,b,c,d){var u,t
u={}
H.h(d,"$iF",[P.f,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.cX("Both query and queryParameters specified"))
return P.cL(a,b,c,C.u,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.X(0,new P.iB(new P.iC(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mV:function(a,b,c){return P.cL(a,b,c,C.u,!0)},
kR:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Z(a,b+1)
s=C.c.Z(a,u)
r=H.iY(t)
q=H.iY(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aP(p,4)
if(u>=8)return H.d(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bL(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
kM:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.iK(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.dK(t,0,null)},
cL:function(a,b,c,d,e){var u=P.kQ(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.c.u(a,b,c):u},
kQ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.c.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kR(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cK(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kM(q)}}if(r==null)r=new P.ae("")
r.a+=C.c.u(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kP:function(a){if(C.c.a4(a,"."))return!0
return C.c.eq(a,"/.")!==-1},
n3:function(a){var u,t,s,r,q,p,o
if(!P.kP(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
n2:function(a,b){var u,t,s,r,q,p
if(!P.kP(a))return!b?P.kN(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.q(u,0,P.kN(u[0]))}return C.a.l(u,"/")},
kN:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kO(J.lD(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.ao(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.d(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mU:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cX("Invalid URL encoding"))}}return u},
jD:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.t(C.c.u(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.c.H(a,t)
if(s>127)throw H.c(P.cX("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.cX("Truncated URI"))
C.a.h(q,P.mU(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.hz(!1).ct(q)},
kO:function(a){var u=a|32
return 97<=u&&u<=122},
kw:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a0("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a0("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.a8(a,"base64",o+1))throw H.c(P.a0("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.ks(a,n,t)
else{m=P.kQ(a,n,t,C.u,!0)
if(m!=null)a=C.c.aU(a,n,t,m)}return new P.ht(a,u,c)},
n5:function(){var u,t,s,r,q
u=P.m9(22,new P.iL(),!0,P.J)
t=new P.iK(u)
s=new P.iM()
r=new P.iN()
q=H.e(t.$2(0,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iJ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iJ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iJ"),"]",5)
q=H.e(t.$2(9,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iJ"),"az",21)
q=H.e(t.$2(21,245),"$iJ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kV:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.ly()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
K:function K(){},
ar:function ar(a,b){this.a=a
this.b=b},
q:function q(){},
aM:function aM(a){this.a=a},
eK:function eK(){},
eL:function eL(){},
bh:function bh(){},
dz:function dz(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f3:function f3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hs:function hs(a){this.a=a},
hp:function hp(a){this.a=a},
bO:function bO(a){this.a=a},
eD:function eD(a){this.a=a},
fC:function fC(){},
dJ:function dJ(){},
eH:function eH(a){this.a=a},
e5:function e5(a){this.a=a},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(){},
l:function l(){},
n:function n(){},
aN:function aN(){},
a:function a(){},
F:function F(){},
D:function D(){},
af:function af(){},
I:function I(){},
ap:function ap(){},
f:function f(){},
ae:function ae(a){this.a=a},
hx:function hx(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(){},
iK:function iK(a){this.a=a},
iM:function iM(){},
iN:function iN(){},
ip:function ip(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hY:function hY(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nk:function(a){var u,t
u=J.N(a)
if(!!u.$ib_){t=u.gdV(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ei(a.data,a.height,a.width)},
nj:function(a){if(a instanceof P.ei)return{data:a.a,height:a.b,width:a.c}
return a},
ni:function(a,b){var u={}
a.X(0,new P.iR(u))
return u},
iq:function iq(){},
is:function is(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a){this.a=a},
ir:function ir(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(){},
eW:function eW(){},
ic:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ie:function ie(){},
ax:function ax(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cl:function cl(){},
o:function o(){},
J:function J(){},
cZ:function cZ(){},
da:function da(){},
dC:function dC(){},
bN:function bN(){},
dG:function dG(){},
dO:function dO(){},
dW:function dW(){}},W={
k0:function(a){var u=document.createElement("a")
return u},
jl:function(a,b){var u=document.createElement("canvas")
return u},
lU:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ab(u,a,b,c)
t.toString
u=W.A
u=new H.cC(new W.al(t),H.k(new W.eN(),{func:1,ret:P.K,args:[u]}),[u])
return H.e(u.gaJ(u),"$iM")},
lV:function(a){H.e(a,"$ibA")
return"wheel"},
c8:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lH(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ac(s)}return u},
lY:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$icd")
try{u.type=a}catch(s){H.ac(s)}return u},
ib:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a,b,c,d){var u,t
u=W.ib(W.ib(W.ib(W.ib(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.kY(new W.i1(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lC(a,b,u,!1)}return new W.i0(a,b,u,!1,[e])},
kI:function(a){var u,t
u=W.k0(null)
t=window.location
u=new W.br(new W.ik(u,t))
u.fz(a)
return u},
mM:function(a,b,c,d){H.e(a,"$iM")
H.E(b)
H.E(c)
H.e(d,"$ibr")
return!0},
mN:function(a,b,c,d){var u,t,s
H.e(a,"$iM")
H.E(b)
H.E(c)
u=H.e(d,"$ibr").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kK:function(){var u,t,s,r,q
u=P.f
t=P.ke(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.iv(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iu(t,P.dl(null,null,null,u),P.dl(null,null,null,u),P.dl(null,null,null,u),null)
t.fI(null,new H.fm(C.A,r,[s,u]),q,null)
return t},
kY:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.U
if(u===C.l)return a
return u.dQ(a,b)},
w:function w(){},
cW:function cW(){},
eu:function eu(){},
c2:function c2(){},
bd:function bd(){},
bv:function bv(){},
bw:function bw(){},
be:function be(){},
c6:function c6(){},
eG:function eG(){},
aw:function aw(){},
c7:function c7(){},
eJ:function eJ(){},
d6:function d6(){},
d7:function d7(){},
hX:function hX(a,b){this.a=a
this.b=b},
M:function M(){},
eN:function eN(){},
m:function m(){},
bA:function bA(){},
eX:function eX(){},
db:function db(){},
dc:function dc(){},
bC:function bC(){},
dd:function dd(){},
b_:function b_(){},
cc:function cc(){},
cd:function cd(){},
aO:function aO(){},
dj:function dj(){},
dm:function dm(){},
cg:function cg(){},
a8:function a8(){},
al:function al(a){this.a=a},
A:function A(){},
ci:function ci(){},
dD:function dD(){},
fP:function fP(){},
aR:function aR(){},
dL:function dL(){},
dM:function dM(){},
h3:function h3(){},
cp:function cp(){},
aI:function aI(){},
aJ:function aJ(){},
hc:function hc(){},
bp:function bp(){},
hP:function hP(){},
aV:function aV(){},
cD:function cD(){},
cE:function cE(){},
e4:function e4(){},
ea:function ea(){},
hW:function hW(){},
hZ:function hZ(a){this.a=a},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i0:function i0(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i1:function i1(a){this.a=a},
br:function br(a){this.a=a},
as:function as(){},
dy:function dy(a){this.a=a},
fz:function fz(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(){},
im:function im(){},
io:function io(){},
iu:function iu(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iv:function iv(){},
it:function it(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(){},
ik:function ik(a,b){this.a=a
this.b=b},
el:function el(a){this.a=a},
iG:function iG(a){this.a=a},
e3:function e3(){},
e6:function e6(){},
e7:function e7(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
eh:function eh(){},
em:function em(){},
en:function en(){}},O={
jm:function(a){var u=new O.a_([a])
u.bU(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cf:function cf(){this.b=this.a=null},
dq:function dq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dr:function dr(){},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fr:function fr(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fs:function fs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bP:function bP(){}},E={
ka:function(a,b,c,d,e,f){var u=new E.ah()
u.a=d
u.b=!0
u.sfw(0,O.jm(E.ah))
u.y.bf(u.gkt(),u.gkw())
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
u.saf(0,e)
u.sb6(c)
return u},
ms:function(a,b){var u=new E.fK(a,b)
u.fp(a,b)
return u},
mw:function(a,b,c,d,e){var u,t,s,r
u=J.N(a)
if(!!u.$ibv)return E.ks(a,!0,!0,!0,!1)
t=W.jl(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcs(a).h(0,t)
r=E.ks(t,!0,!0,!0,!1)
r.a=a
return r},
ks:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dS()
t=P.m5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.bO(a,"webgl",t)
s=H.e(s==null?C.q.bO(a,"experimental-webgl",t):s,"$ibN")
if(s==null)H.p(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.ms(s,a)
r=new T.h6(s)
r.b=H.ab((s&&C.b).cY(s,3379))
r.c=H.ab(C.b.cY(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dZ(a)
q=new X.f9()
q.c=new X.aH(!1,!1,!1)
q.sim(P.dl(null,null,null,P.l))
r.b=q
q=new X.ft(r)
q.f=0
q.r=V.bn()
q.x=V.bn()
q.Q=1
q.ch=1
r.c=q
q=new X.fg(r)
q.r=0
q.x=V.bn()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hb(r)
q.e=0
q.f=V.bn()
q.r=V.bn()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sh5(H.b([],[[P.co,P.I]]))
q=r.z
p=document
o=W.a8
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.k(r.ghJ(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.k(r.ghP(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.k(r.ghC(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.k(r.ghT(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.k(r.ghR(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.k(r.ghX(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.k(r.gi0(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.k(r.ghZ(),n),!1,o))
k=r.z
j=W.aV;(k&&C.a).h(k,W.a4(a,H.E(W.lV(a)),H.k(r.gi2(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.k(r.ghL(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.k(r.ghN(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.k(r.gi4(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.k(r.gij(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.k(r.gie(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.k(r.gih(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ar(Date.now(),!1)
u.cy=0
u.dC()
return u},
ey:function ey(){},
ah:function ah(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fL:function fL(a){this.a=a},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a){this.a=a}},Z={
jz:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.b.av(a,b,u)
C.b.dS(a,b,new Int16Array(H.bS(c)),35044)
C.b.av(a,b,null)
return new Z.e1(b,u)},
ay:function(a){return new Z.aU(a)},
e1:function e1(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hQ:function hQ(a){this.a=a},
d0:function d0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a){this.a=a}},D={
S:function(){var u=new D.bz()
u.sag(null)
u.saY(null)
u.c=null
u.d=0
return u},
eB:function eB(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bE:function bE(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bF:function bF(a,b,c,d){var _=this
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
_.$ti=e},
d5:function d5(){},
a1:function a1(){},
dk:function dk(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dB:function dB(){},
dI:function dI(){},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){},
dR:function dR(){}},X={d1:function d1(a,b){this.a=a
this.b=b},di:function di(a,b){this.a=a
this.b=b},f9:function f9(){var _=this
_.d=_.c=_.b=_.a=null},dn:function dn(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ft:function ft(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fF:function fF(){},dU:function dU(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hb:function hb(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dZ:function dZ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lX:function(a,b,c,d,e,f,g){var u,t
u=new X.eZ()
t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ko
if(t==null){t=V.kn(0,0,1,1)
$.ko=t}u.r=t
return u},
d2:function d2(){},
eZ:function eZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){}},V={
nN:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.be(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.c.ad("null",c)
return C.c.ad(C.e.eR(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.q],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.q(u,p,C.c.ad(u[p],s))}return u},
jQ:function(a,b){return C.e.kZ(Math.pow(b,C.a_.cF(Math.log(H.nh(a))/Math.log(b))))},
dt:function(){var u=$.kg
if(u==null){u=V.b3(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kg=u}return u},
b3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kf:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b3(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bn:function(){var u=$.kk
if(u==null){u=new V.a3(0,0)
$.kk=u}return u},
mc:function(){var u=$.cj
if(u==null){u=new V.Z(0,0,0)
$.cj=u}return u},
kn:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)},
cB:function(){var u=$.kE
if(u==null){u=new V.B(0,0,0)
$.kE=u}return u},
mG:function(){var u=$.hB
if(u==null){u=new V.B(-1,0,0)
$.hB=u}return u},
kF:function(){var u=$.hC
if(u==null){u=new V.B(0,1,0)
$.hC=u}return u},
kG:function(){var u=$.hD
if(u==null){u=new V.B(0,0,1)
$.hD=u}return u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
ds:function ds(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
T:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.fI()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fQ()
u.fq(a)
return u},
ha:function(){var u,t
u=new V.h9()
t=P.f
u.siM(new H.aG([t,V.cn]))
u.siQ(new H.aG([t,V.cr]))
u.c=null
return u},
aX:function aX(){},
at:function at(){},
dp:function dp(){},
ao:function ao(){this.a=null},
fI:function fI(){this.b=this.a=null},
fQ:function fQ(){this.a=null},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
h9:function h9(){this.c=this.b=this.a=null},
cs:function cs(a){this.b=a
this.a=this.c=null},
nJ:function(a){P.mx(C.V,new V.jc(a))},
mu:function(a,b){var u=new V.fU()
u.ft(a,!0)
return u},
bf:function bf(){},
jc:function jc(a){this.a=a},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f_:function f_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f0:function f0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fE:function fE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a,b){this.a=a
this.b=b
this.c=null},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(){this.b=this.a=null},
fW:function fW(a){this.a=a},
fV:function fV(a){this.a=a},
fX:function fX(a){this.a=a}},U={
k6:function(){var u=new U.eC()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jn:function(a){var u=new U.d3()
u.a=a
return u},
kA:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.e_()
t=U.k6()
t.seY(0,!0)
t.sew(6.283185307179586)
t.sey(0)
t.sa3(0,0)
t.sex(100)
t.sa1(0)
t.sdU(0.5)
u.b=t
s=u.gbi()
t.gC().h(0,s)
t=U.k6()
t.seY(0,!0)
t.sew(6.283185307179586)
t.sey(0)
t.sa3(0,0)
t.sex(100)
t.sa1(0)
t.sdU(0.5)
u.c=t
t.gC().h(0,s)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
r=new X.aH(b,!1,!1)
q=u.d
u.d=r
t=new D.P("modifiers",q,r,u,[X.aH])
t.b=!0
u.a_(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.P("invertX",t,!1,u,[P.K])
t.b=!0
u.a_(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.P("invertY",t,!1,u,[P.K])
t.b=!0
u.a_(t)}u.jy(c)
return u},
eC:function eC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){this.b=this.a=null},
cb:function cb(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e_:function e_(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d8:function d8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
l9:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.mu("Test 023",!0)
t=W.jl(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.D(u.a,t)
s=[P.f]
u.dM(H.b(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],s))
u.jo(H.b(["shapes"],s))
u.dM(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.cX(s,"testCanvas")
if(r==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.mw(r,!0,!0,!0,!1)
p=U.kA(!1,!1,q.r,!1,!1,!1,null,!1)
o=U.kA(!1,!0,q.r,!1,!1,!1,null,!1)
n=new V.Y(0.6,0.9,1)
m=q.f.ko("../resources/Test.png",!0)
l=new D.bo()
l.e=new V.Y(1,1,1)
l.a=V.kG()
l.b=V.kF()
l.c=V.mG()
k=l.d
l.d=o
o.gC().h(0,l.gc6())
j=new D.P("mover",k,l.d,l,[U.ad])
j.b=!0
l.as(j)
if(!l.e.v(0,n)){k=l.e
l.e=n
j=new D.P("color",k,n,l,[V.Y])
j.b=!0
l.as(j)}j=l.f
if(j!==m){if(j!=null)j.gC().M(0,l.gc6())
k=l.f
l.f=m
m.gC().h(0,l.gc6())
m=new D.P("texture",k,l.f,l,[T.dP])
m.b=!0
l.as(m)}i=new O.dq()
i.sfU(O.jm(V.ai))
i.e.bf(i.ghy(),i.ghA())
m=new O.aP(i,"emission")
m.c=C.d
m.f=new V.Y(0,0,0)
i.f=m
m=new O.aP(i,"ambient")
m.c=C.d
m.f=new V.Y(0,0,0)
i.r=m
m=new O.aP(i,"diffuse")
m.c=C.d
m.f=new V.Y(0,0,0)
i.x=m
m=new O.aP(i,"invDiffuse")
m.c=C.d
m.f=new V.Y(0,0,0)
i.y=m
m=new O.fs(i,"specular")
m.c=C.d
m.f=new V.Y(0,0,0)
m.ch=100
i.z=m
m=new O.fp(i,"bump")
m.c=C.d
i.Q=m
i.ch=null
m=new O.aP(i,"reflect")
m.c=C.d
m.f=new V.Y(0,0,0)
i.cx=m
m=new O.fr(i,"refract")
m.c=C.d
m.f=new V.Y(0,0,0)
m.ch=1
i.cy=m
m=new O.fo(i,"alpha")
m.c=C.d
m.f=1
i.db=m
m=new D.dk()
m.bU(D.a1)
m.sh2(H.b([],[D.d5]))
m.sil(H.b([],[D.dB]))
m.siL(H.b([],[D.dI]))
m.siY(H.b([],[D.bo]))
m.siZ(H.b([],[D.dQ]))
m.sj_(H.b([],[D.dR]))
m.Q=null
m.ch=null
m.d_(m.ghw(),m.gi7(),m.gib())
i.dx=m
j=m.Q
if(j==null){j=D.S()
m.Q=j
m=j}else m=j
m.h(0,i.giy())
m=i.dx
j=m.ch
if(j==null){j=D.S()
m.ch=j
m=j}else m=j
m.h(0,i.gfJ())
i.dy=null
i.dx.h(0,l)
i.f.sai(0,new V.Y(0,0,0))
m=i.r
m.sai(0,new V.Y(0,0,0))
m=i.x
m.sai(0,new V.Y(0.7,0.7,0.7))
m=i.z
m.sai(0,new V.Y(0.3,0.3,0.3))
m=i.z
if(m.c===C.d){m.c=C.j
m.bT()
m.cc(100)
j=m.a
j.a=null
j.a9(null)}m.cc(100)
h=E.ka(null,!0,null,"",null,null)
h.saf(0,F.le(30,1,15,0.5))
g=E.ka(null,!0,null,"",null,null)
g.sb6(U.jn(V.b3(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
m=F.jL(1,null,null,1)
m.cE()
g.saf(0,m)
f=new U.cb()
f.bU(U.ad)
f.bf(f.ghu(),f.gi9())
f.e=null
f.f=V.dt()
f.r=0
f.h(0,p)
f.h(0,U.jn(V.kf(3.141592653589793)))
f.h(0,U.jn(V.b3(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=new M.d8()
m.sfX(0,O.jm(E.ah))
m.d.bf(m.ghF(),m.ghH())
m.e=null
m.f=null
m.r=null
m.x=null
e=X.lX(!0,!0,!1,null,2000,null,0)
d=new X.dA()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb6(null)
j=d.c
if(!(Math.abs(j-1.0471975511965976)<$.L().a)){d.c=1.0471975511965976
j=new D.P("fov",j,1.0471975511965976,d,[P.q])
j.b=!0
d.aL(j)}j=d.d
if(!(Math.abs(j-0.1)<$.L().a)){d.d=0.1
j=new D.P("near",j,0.1,d,[P.q])
j.b=!0
d.aL(j)}j=d.e
if(!(Math.abs(j-2000)<$.L().a)){d.e=2000
j=new D.P("far",j,2000,d,[P.q])
j.b=!0
d.aL(j)}j=m.a
if(j!==d){if(j!=null)j.gC().M(0,m.gaq())
k=m.a
m.a=d
d.gC().h(0,m.gaq())
j=new D.P("camera",k,m.a,m,[X.d2])
j.b=!0
m.aB(j)}j=m.b
if(j!==e){if(j!=null)j.gC().M(0,m.gaq())
k=m.b
m.b=e
e.gC().h(0,m.gaq())
j=new D.P("target",k,m.b,m,[X.dN])
j.b=!0
m.aB(j)}m.seO(null)
m.seO(i)
m.d.h(0,h)
m.d.h(0,g)
m.a.sb6(f)
j=q.d
if(j!==m){if(j!=null)j.gC().M(0,q.gd2())
q.d=m
m.gC().h(0,q.gd2())
q.d3()}m=new V.fG("shapes",!0)
s=C.z.cX(s,"shapes")
m.c=s
if(s==null)H.p("Failed to find shapes for RadioGroup")
m.b0(0,"Cube",new M.j3(h))
m.b0(0,"Cylinder",new M.j4(h))
m.b0(0,"Cone",new M.j5(h))
m.b0(0,"Sphere",new M.j6(h))
m.dK(0,"Toroid",new M.j7(h),!0)
m.b0(0,"Knot",new M.j8(h))
s=q.z
if(s==null){s=D.S()
q.z=s}m={func:1,ret:-1,args:[D.z]}
j=H.k(new M.j9(u,i),m)
if(s.b==null)s.saY(H.b([],[m]))
s=s.b;(s&&C.a).h(s,j)
V.nJ(q)},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a,b){this.a=a
this.b=b}},A={
ma:function(a,b){var u,t
u=a.aj
t=new A.fn(b,u)
t.fs(b,u)
t.fo(a,b)
return t},
jw:function(a,b,c,d,e){var u=new A.hh(a,b,c,e)
u.f=d
u.sj0(P.m7(d,0,!1,P.l))
return u},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){this.a=a},
fn:function fn(a,b){var _=this
_.br=_.dZ=_.bq=_.aj=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ee=_.cw=_.ed=_.bE=_.ec=_.eb=_.bD=_.bC=_.ea=_.e9=_.bB=_.bA=_.bz=_.e8=_.e7=_.by=_.e6=_.e5=_.bx=_.e4=_.e3=_.bw=_.bv=_.e2=_.e1=_.bu=_.bt=_.e0=_.e_=_.bs=null
_.cD=_.ei=_.cC=_.eh=_.cB=_.eg=_.cA=_.ef=_.cz=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fq:function fq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ax=b3
_.aj=b4
_.bq=b5},
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
by:function by(a,b){this.a=a
this.b=b},
dV:function dV(){},
hn:function hn(a){this.a=a},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jL:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
u=F.ju()
F.cM(u,b,c,d,a,1,0,0,1)
F.cM(u,b,c,d,a,0,1,0,3)
F.cM(u,b,c,d,a,0,0,1,2)
F.cM(u,b,c,d,a,-1,0,0,0)
F.cM(u,b,c,d,a,0,-1,0,0)
F.cM(u,b,c,d,a,0,0,-1,3)
u.aw()
return u},
iJ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cM:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.B(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.B(o+a3,n+a1,m+a2)
u.b=l
k=new V.B(o-a3,n-a1,m-a2)
u.c=k
j=new V.B(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iJ(t)
f=F.iJ(u.b)
e=F.jT(d,a0,new F.iI(u,F.iJ(u.c),F.iJ(u.d),f,g,c),b)
if(e!=null)a.b5(e)},
l3:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.q,args:[P.q]})
if(a0<3)return
u=F.ju()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a9])
q=u.a
p=new V.B(0,0,t)
p=p.A(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jr(new V.aQ(a,-1,-1,-1),new V.aD(1,1,1,1),new V.Z(0,0,d),new V.B(0,0,t),new V.a3(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.C(k)
j=new V.B(m,l,t).A(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e0(new V.aQ(a,-1,-1,-1),null,new V.aD(i,g,h,1),new V.Z(m*k,l*k,d),new V.B(0,0,t),new V.a3(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jp(r)
return u},
l1:function(a,b,c,d,e,f){return F.nl(!0,c,d,new F.iS(a,f),e)},
nl:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.jT(c,e,new F.iU(d),null)
if(u==null)return
u.aw()
u.ci()
if(b)u.b5(F.l3(3,!1,!1,1,new F.iV(d),e))
u.b5(F.l3(1,!0,!1,-1,new F.iW(d),e))
return u},
nK:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.jd()
t=F.jL(a,null,new F.je(u,c),d)
t.ci()
return t},
le:function(a,b,c,d){return F.l2(c,a,d,b,new F.jf())},
nB:function(a,b,c,d,e,f){return F.l2(d,a,e,b,new F.j2(f,c))},
l2:function(a,b,c,d,e){var u=F.jT(a,b,new F.iT(H.k(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(u==null)return
u.aw()
u.ci()
return u},
jT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.ju()
t=H.b([],[F.a9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e0(null,null,new V.aD(p,0,0,1),null,null,new V.a3(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cu(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.e0(null,null,new V.aD(j,i,h,1),null,null,new V.a3(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cu(d))}}u.d.jq(a+1,b+1,t)
return u},
c9:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.u("May not create a face with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
u.iF(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
m3:function(a,b){var u,t
u=new F.b2()
t=a.a
if(t==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.u("May not create a line with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
ju:function(){var u,t
u=new F.dH()
t=new F.hE(u)
t.b=!1
t.sj1(H.b([],[F.a9]))
u.a=t
t=new F.fT(u)
t.sc7(H.b([],[F.bm]))
u.b=t
t=new F.fS(u)
t.shg(H.b([],[F.b2]))
u.c=t
t=new F.fR(u)
t.sh6(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
e0:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a9()
t=new F.hM(u)
t.sc7(H.b([],[F.bm]))
u.b=t
t=new F.hI(u)
s=[F.b2]
t.shh(H.b([],s))
t.shi(H.b([],s))
u.c=t
t=new F.hF(u)
s=[F.a2]
t.sh7(H.b([],s))
t.sh8(H.b([],s))
t.sh9(H.b([],s))
u.d=t
h=$.ls()
u.e=0
t=$.ba()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b9().a)!==0?e:null
u.x=(s&$.b8().a)!==0?b:null
u.y=(s&$.bb().a)!==0?f:null
u.z=(s&$.bc().a)!==0?g:null
u.Q=(s&$.lt().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.b7().a)!==0?a:null
return u},
iI:function iI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iS:function iS(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
jd:function jd(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(){},
j2:function j2(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eT:function eT(){},
fY:function fY(){},
b2:function b2(){this.b=this.a=null},
fa:function fa(){},
hg:function hg(){},
bm:function bm(){this.a=null},
dH:function dH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(a){this.a=a
this.b=null},
fS:function fS(a){this.a=a
this.b=null},
fT:function fT(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a},
hN:function hN(a){this.a=a},
hE:function hE(a){this.a=a
this.c=this.b=null},
hF:function hF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a
this.c=this.b=null},
hK:function hK(){},
hJ:function hJ(){},
hL:function hL(){},
fA:function fA(){},
hM:function hM(a){this.a=a
this.b=null}},T={cq:function cq(){},dP:function dP(){},h5:function h5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},h6:function h6(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},h7:function h7(a,b,c,d,e,f,g){var _=this
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
H.jr.prototype={}
J.a7.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.ck(a)},
i:function(a){return"Instance of '"+H.bK(a)+"'"}}
J.f6.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iK:1}
J.dg.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iD:1}
J.dh.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.fD.prototype={}
J.bq.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.lg()]
if(u==null)return this.fj(a)
return"JavaScript function for "+H.i(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibi:1}
J.aE.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.p(P.W("add"))
a.push(b)},
kL:function(a,b){var u
if(!!a.fixed$length)H.p(P.W("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dE(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.p(P.W("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aY(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.i(a[t]))
return u.join(b)},
kl:function(a){return this.l(a,"")},
kd:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aY(a))}return t},
kc:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.K,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aY(a))}throw H.c(H.f4())},
kb:function(a,b){return this.kc(a,b,null)},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
fg:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a6(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a6(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gka:function(a){if(a.length>0)return a[0]
throw H.c(H.f4())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f4())},
fe:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.p(P.W("setRange"))
P.b5(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bY(d)
if(e+t>u.gm(d))throw H.c(H.m_())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bg:function(a,b,c,d){return this.fe(a,b,c,d,0)},
dN:function(a,b){var u,t
H.k(b,{func:1,ret:P.K,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aY(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.jp(a,"[","]")},
gS:function(a){return new J.aq(a,a.length,0,[H.r(a,0)])},
gJ:function(a){return H.ck(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.W("set length"))
if(b<0)throw H.c(P.a6(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bW(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.p(P.W("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bW(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bg(u,0,a.length,a)
this.bg(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.jq.prototype={}
J.aq.prototype={
gK:function(){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.y(u))
s=this.c
if(s>=t){this.sdj(null)
return!1}this.sdj(u[s]);++this.c
return!0},
sdj:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
J.bk.prototype={
kZ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.W(""+a+".toInt()"))},
cF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.W(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.W(""+a+".round()"))},
eR:function(a,b){var u,t
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.W("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.F("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.am(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.am(b))
return a-b},
F:function(a,b){if(typeof b!=="number")throw H.c(H.am(b))
return a*b},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fn:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.W("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var u
if(a>0)u=this.dE(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iK:function(a,b){if(b<0)throw H.c(H.am(b))
return this.dE(a,b)},
dE:function(a,b){return b>31?0:a>>>b},
$iq:1,
$iaf:1}
J.df.prototype={$il:1}
J.de.prototype={}
J.b0.prototype={
Z:function(a,b){if(b<0)throw H.c(H.bW(a,b))
if(b>=a.length)H.p(H.bW(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bW(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jj(b,null,null))
return a+b},
aU:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.am(b))
c=P.b5(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a8:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.am(c))
if(typeof c!=="number")return c.Y()
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.a8(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.am(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.dE(b,null,null))
if(b>c)throw H.c(P.dE(b,null,null))
if(c>a.length)throw H.c(P.dE(c,null,null))
return a.substring(b,c)},
ao:function(a,b){return this.u(a,b,null)},
l1:function(a){return a.toLowerCase()},
F:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kA:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.F(c,u)+a},
ad:function(a,b){return this.kA(a,b," ")},
er:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eq:function(a,b){return this.er(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$iki:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.Z(this.a,b)},
$acA:function(){return[P.l]},
$aR:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eM.prototype={}
H.bG.prototype={
gS:function(a){return new H.ce(this,this.gm(this),0,[H.aa(this,"bG",0)])},
bL:function(a,b){return this.fi(0,H.k(b,{func:1,ret:P.K,args:[H.aa(this,"bG",0)]}))}}
H.ce.prototype={
gK:function(){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.bY(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aY(u))
r=this.c
if(r>=s){this.saW(null)
return!1}this.saW(t.a7(u,r));++this.c
return!0},
saW:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.fk.prototype={
gS:function(a){return new H.fl(J.bu(this.a),this.b,this.$ti)},
gm:function(a){return J.aB(this.a)},
a7:function(a,b){return this.b.$1(J.et(this.a,b))},
$an:function(a,b){return[b]}}
H.fl.prototype={
E:function(){var u=this.b
if(u.E()){this.saW(this.c.$1(u.gK()))
return!0}this.saW(null)
return!1},
gK:function(){return this.a},
saW:function(a){this.a=H.x(a,H.r(this,1))},
$aaN:function(a,b){return[b]}}
H.fm.prototype={
gm:function(a){return J.aB(this.a)},
a7:function(a,b){return this.b.$1(J.et(this.a,b))},
$abG:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cC.prototype={
gS:function(a){return new H.hR(J.bu(this.a),this.b,this.$ti)}}
H.hR.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gK()))return!0
return!1},
gK:function(){return this.a.gK()}}
H.bB.prototype={}
H.cA.prototype={
q:function(a,b,c){H.x(c,H.aa(this,"cA",0))
throw H.c(P.W("Cannot modify an unmodifiable list"))}}
H.dX.prototype={}
H.eE.prototype={
i:function(a){return P.jt(this)},
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.lR()},
$iF:1}
H.eF.prototype={
gm:function(a){return this.a},
bo:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bo(b))return
return this.dk(b)},
dk:function(a){return this.b[H.E(a)]},
X:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dk(q),u))}}}
H.fJ.prototype={}
H.hd.prototype={
ac:function(a){var u,t,s
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
H.fB.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f8.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.hr.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jg.prototype={
$1:function(a){if(!!J.N(a).$ibh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.ee.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iap:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bK(this).trim()+"'"},
$ibi:1,
gl9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h4.prototype={}
H.fZ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c3.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.ck(this.a)
else t=typeof u!=="object"?J.cV(u):H.ck(u)
return(t^H.ck(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bK(u)+"'")}}
H.hf.prototype={
i:function(a){return this.a}}
H.eA.prototype={
i:function(a){return this.a}}
H.fO.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aG.prototype={
gm:function(a){return this.a},
gkk:function(a){return this.a===0},
gay:function(){return new H.fc(this,[H.r(this,0)])},
bo:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dg(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dg(t,a)}else return this.kh(a)},
kh:function(a){var u=this.d
if(u==null)return!1
return this.cI(this.c0(u,this.cH(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bj(r,b)
s=t==null?null:t.b
return s}else return this.ki(b)},
ki:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c0(u,this.cH(a))
s=this.cI(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c4()
this.b=u}this.d6(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c4()
this.c=t}this.d6(t,b,c)}else this.kj(b,c)},
kj:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.c4()
this.d=u}t=this.cH(a)
s=this.c0(u,t)
if(s==null)this.cd(u,t,[this.bV(a,b)])
else{r=this.cI(s,a)
if(r>=0)s[r].b=b
else s.push(this.bV(a,b))}},
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aY(this))
u=u.c}},
d6:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bj(a,b)
if(u==null)this.cd(a,b,this.bV(b,c))
else u.b=c},
fO:function(){this.r=this.r+1&67108863},
bV:function(a,b){var u,t
u=new H.fb(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fO()
return u},
cH:function(a){return J.cV(a)&0x3ffffff},
cI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.jt(this)},
bj:function(a,b){return a[b]},
c0:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
h1:function(a,b){delete a[b]},
dg:function(a,b){return this.bj(a,b)!=null},
c4:function(){var u=Object.create(null)
this.cd(u,"<non-identifier-key>",u)
this.h1(u,"<non-identifier-key>")
return u},
$ikc:1}
H.fb.prototype={}
H.fc.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.fd(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fd.prototype={
gK:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aY(u))
else{u=this.c
if(u==null){this.sd7(null)
return!1}else{this.sd7(u.a)
this.c=this.c.c
return!0}}},
sd7:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.j_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.j0.prototype={
$1:function(a){return this.a(H.E(a))},
$S:49}
H.f7.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iki:1,
$imq:1}
H.bI.prototype={$ibI:1,$imy:1}
H.du.prototype={
gm:function(a){return a.length},
$iaF:1,
$aaF:function(){}}
H.dv.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nn(c)
H.b6(b,a,a.length)
a[b]=c},
$abB:function(){return[P.q]},
$aR:function(){return[P.q]},
$in:1,
$an:function(){return[P.q]},
$ia:1,
$aa:function(){return[P.q]}}
H.dw.prototype={
q:function(a,b,c){H.ab(c)
H.b6(b,a,a.length)
a[b]=c},
$abB:function(){return[P.l]},
$aR:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fu.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fv.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fw.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fx.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dx.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
$io8:1}
H.ch.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
$ich:1,
$iJ:1}
H.cG.prototype={}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
P.hT.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:27}
P.hS.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.hU.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hV.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ef.prototype={
fL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bV(new P.ix(this,b),0),a)
else throw H.c(P.W("`setTimeout()` not found."))},
fM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bV(new P.iw(this,a,Date.now(),b),0),a)
else throw H.c(P.W("Periodic timer."))},
$iaS:1}
P.ix.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iw.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fn(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aW.prototype={
kq:function(a){if(this.c!==6)return!0
return this.b.b.cU(H.k(this.d,{func:1,ret:P.K,args:[P.I]}),a.a,P.K,P.I)},
kg:function(a){var u,t,s,r
u=this.e
t=P.I
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.eo(u,{func:1,args:[P.I,P.ap]}))return H.jM(r.kS(u,a.a,a.b,null,t,P.ap),s)
else return H.jM(r.cU(H.k(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.az.prototype={
eQ:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.U
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n9(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.az(0,$.U,[c])
r=b==null?1:3
this.d9(new P.aW(s,r,a,b,[u,c]))
return s},
kY:function(a,b){return this.eQ(a,null,b)},
d9:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaW")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaz")
u=t.a
if(u<4){t.d9(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iQ(null,null,u,H.k(new P.i2(this,a),{func:1,ret:-1}))}},
dA:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaW")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaz")
t=p.a
if(t<4){p.dA(a)
return}this.a=t
this.c=p.c}u.a=this.bl(a)
t=this.b
t.toString
P.iQ(null,null,t,H.k(new P.i6(u,this),{func:1,ret:-1}))}},
c9:function(){var u=H.e(this.c,"$iaW")
this.c=null
return this.bl(u)},
bl:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dc:function(a){var u,t,s
u=H.r(this,0)
H.jM(a,{futureOr:1,type:u})
t=this.$ti
if(H.cP(a,"$ica",t,"$aca"))if(H.cP(a,"$iaz",t,null))P.kH(a,this)
else P.mL(a,this)
else{s=this.c9()
H.x(a,u)
this.a=4
this.c=a
P.cF(this,s)}},
dd:function(a,b){var u
H.e(b,"$iap")
u=this.c9()
this.a=8
this.c=new P.ag(a,b)
P.cF(this,u)},
$ica:1}
P.i2.prototype={
$0:function(){P.cF(this.a,this.b)},
$S:0}
P.i6.prototype={
$0:function(){P.cF(this.b,this.a.a)},
$S:0}
P.i3.prototype={
$1:function(a){var u=this.a
u.a=0
u.dc(a)},
$S:27}
P.i4.prototype={
$2:function(a,b){H.e(b,"$iap")
this.a.dd(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.i5.prototype={
$0:function(){this.a.dd(this.b,this.c)},
$S:0}
P.i9.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eN(H.k(r.d,{func:1}),null)}catch(q){t=H.ac(q)
s=H.bZ(q)
if(this.d){r=H.e(this.a.a.c,"$iag").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iag")
else p.b=new P.ag(t,s)
p.a=!0
return}if(!!J.N(u).$ica){if(u instanceof P.az&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iag")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kY(new P.ia(o),null)
r.a=!1}},
$S:3}
P.ia.prototype={
$1:function(a){return this.a},
$S:46}
P.i8.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cU(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ac(o)
t=H.bZ(o)
s=this.a
s.b=new P.ag(u,t)
s.a=!0}},
$S:3}
P.i7.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iag")
r=this.c
if(r.kq(u)&&r.e!=null){q=this.b
q.b=r.kg(u)
q.a=!1}}catch(p){t=H.ac(p)
s=H.bZ(p)
r=H.e(this.a.a.c,"$iag")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ag(t,s)
n.a=!0}},
$S:3}
P.e2.prototype={}
P.h_.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.az(0,$.U,[P.l])
u.a=0
s=H.r(this,0)
r=H.k(new P.h1(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.h2(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.h1.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.r(this.b,0)]}}}
P.h2.prototype={
$0:function(){this.b.dc(this.a.a)},
$S:0}
P.co.prototype={}
P.h0.prototype={}
P.aS.prototype={}
P.ag.prototype={
i:function(a){return H.i(this.a)},
$ibh:1}
P.iH.prototype={$ion:1}
P.iP.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dz()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.ig.prototype={
kT:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.U){a.$0()
return}P.kT(null,null,this,a,-1)}catch(s){u=H.ac(s)
t=H.bZ(s)
P.iO(null,null,this,u,H.e(t,"$iap"))}},
kU:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.U){a.$1(b)
return}P.kU(null,null,this,a,b,-1,c)}catch(s){u=H.ac(s)
t=H.bZ(s)
P.iO(null,null,this,u,H.e(t,"$iap"))}},
jA:function(a,b){return new P.ii(this,H.k(a,{func:1,ret:b}),b)},
cn:function(a){return new P.ih(this,H.k(a,{func:1,ret:-1}))},
dQ:function(a,b){return new P.ij(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eN:function(a,b){H.k(a,{func:1,ret:b})
if($.U===C.l)return a.$0()
return P.kT(null,null,this,a,b)},
cU:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.U===C.l)return a.$1(b)
return P.kU(null,null,this,a,b,c,d)},
kS:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.U===C.l)return a.$2(b,c)
return P.na(null,null,this,a,b,c,d,e,f)}}
P.ii.prototype={
$0:function(){return this.a.eN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ih.prototype={
$0:function(){return this.a.kT(this.b)},
$S:3}
P.ij.prototype={
$1:function(a){var u=this.c
return this.a.kU(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.id.prototype={
gS:function(a){var u=new P.e8(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ibQ")!=null}else{t=this.fY(b)
return t}},
fY:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.dl(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jB()
this.b=u}return this.d8(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jB()
this.c=t}return this.d8(t,b)}else return this.fP(b)},
fP:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.jB()
this.d=u}t=this.de(a)
s=u[t]
if(s==null)u[t]=[this.c5(a)]
else{if(this.bZ(s,a)>=0)return!1
s.push(this.c5(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.is(this.c,b)
else return this.ip(b)},
ip:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dl(u,a)
s=this.bZ(t,a)
if(s<0)return!1
this.dG(t.splice(s,1)[0])
return!0},
d8:function(a,b){H.x(b,H.r(this,0))
if(H.e(a[b],"$ibQ")!=null)return!1
a[b]=this.c5(b)
return!0},
is:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ibQ")
if(u==null)return!1
this.dG(u)
delete a[b]
return!0},
ds:function(){this.r=1073741823&this.r+1},
c5:function(a){var u,t
u=new P.bQ(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.ds()
return u},
dG:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.ds()},
de:function(a){return J.cV(a)&1073741823},
dl:function(a,b){return a[this.de(b)]},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.bQ.prototype={}
P.e8.prototype={
gK:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aY(u))
else{u=this.c
if(u==null){this.sda(null)
return!1}else{this.sda(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sda:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
P.fe.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:7}
P.ff.prototype={$in:1,$ia:1}
P.R.prototype={
gS:function(a){return new H.ce(a,this.gm(a),0,[H.cR(this,a,"R",0)])},
a7:function(a,b){return this.k(a,b)},
l0:function(a,b){var u,t
u=H.b([],[H.cR(this,a,"R",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
l_:function(a){return this.l0(a,!0)},
n:function(a,b){var u,t
u=[H.cR(this,a,"R",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bg(t,0,this.gm(a),a)
C.a.bg(t,this.gm(a),t.length,b)
return t},
k8:function(a,b,c,d){var u
H.x(d,H.cR(this,a,"R",0))
P.b5(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jp(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:7}
P.bH.prototype={
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.aa(this,"bH",0),H.aa(this,"bH",1)]})
for(u=J.bu(this.gay());u.E();){t=u.gK()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aB(this.gay())},
i:function(a){return P.jt(this)},
$iF:1}
P.iy.prototype={
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.W("Cannot modify unmodifiable map"))}}
P.fj.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
X:function(a,b){this.a.X(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.an(this.a)},
$iF:1}
P.dY.prototype={}
P.il.prototype={
at:function(a,b){var u
for(u=J.bu(H.h(b,"$in",this.$ti,"$an"));u.E();)this.h(0,u.gK())},
i:function(a){return P.jp(this,"{","}")},
a7:function(a,b){var u,t,s
if(b<0)H.p(P.a6(b,0,null,"index",null))
for(u=P.mP(this,this.r,H.r(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
$in:1,
$ikp:1}
P.e9.prototype={}
P.ej.prototype={}
P.ew.prototype={
ks:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b5(b,c,a.length,null,null,null)
u=$.lv()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.H(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iY(C.c.H(a,n))
j=H.iY(C.c.H(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ae("")
g=r.a+=C.c.u(a,s,t)
r.a=g+H.bL(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.u(a,s,c)
f=g.length
if(q>=0)P.k1(a,p,c,q,o,f)
else{e=C.f.be(f-1,4)+1
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aU(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.k1(a,p,c,q,o,d)
else{e=C.f.be(d,4)
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aU(a,c,c,e===2?"==":"=")}return a},
$abx:function(){return[[P.a,P.l],P.f]}}
P.ex.prototype={
$abg:function(){return[[P.a,P.l],P.f]}}
P.bx.prototype={}
P.bg.prototype={}
P.eO.prototype={
$abx:function(){return[P.f,[P.a,P.l]]}}
P.f2.prototype={
i:function(a){return this.a}}
P.f1.prototype={
fZ:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.ae("")
if(r>b)q.a+=C.c.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lK(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abg:function(){return[P.f,P.f]}}
P.hy.prototype={
gk7:function(){return C.T}}
P.hA.prototype={
b1:function(a,b,c){var u,t,s
c=P.b5(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iF(t)
if(s.ha(a,b,c)!==c)s.dI(J.lE(a,c-1),0)
return new Uint8Array(t.subarray(0,H.n4(0,s.b,t.length)))},
ct:function(a){return this.b1(a,0,null)},
$abg:function(){return[P.f,[P.a,P.l]]}}
P.iF.prototype={
dI:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.d(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.d(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.d(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.d(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.d(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.d(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.d(u,t)
u[t]=128|a&63
return!1}},
ha:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dI(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.hz.prototype={
b1:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mB(!1,a,b,c)
if(u!=null)return u
c=P.b5(b,c,J.aB(a),null,null,null)
t=new P.ae("")
s=new P.iD(!1,t)
s.b1(a,b,c)
if(s.e>0){H.p(P.a0("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bL(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
ct:function(a){return this.b1(a,0,null)},
$abg:function(){return[[P.a,P.l],P.f]}}
P.iD.prototype={
b1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iE(this,b,c,a)
$label0$0:for(q=J.bY(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bN()
if((n&192)!==128){m=P.a0("Bad UTF-8 encoding 0x"+C.f.ba(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.d(C.H,m)
if(u<=C.H[m]){m=P.a0("Overlong encoding of 0x"+C.f.ba(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a0("Character outside valid Unicode range: 0x"+C.f.ba(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bL(u)
this.c=!1}for(m=o<c;m;){l=P.nb(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Y()
if(n<0){i=P.a0("Negative UTF-8 code unit: -0x"+C.f.ba(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a0("Bad UTF-8 encoding 0x"+C.f.ba(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iE.prototype={
$2:function(a,b){this.a.b.a+=P.dK(this.d,a,b)},
$S:45}
P.K.prototype={}
P.ar.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ar&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aP(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lS(H.ml(this))
t=P.d4(H.mj(this))
s=P.d4(H.mf(this))
r=P.d4(H.mg(this))
q=P.d4(H.mi(this))
p=P.d4(H.mk(this))
o=P.lT(H.mh(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.aM.prototype={
n:function(a,b){return new P.aM(C.f.n(this.a,b.gh3()))},
t:function(a,b){return new P.aM(C.f.t(this.a,b.gh3()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eL()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.f.a5(t,6e7)%60)
r=u.$1(C.f.a5(t,1e6)%60)
q=new P.eK().$1(t%1e6)
return""+C.f.a5(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.eK.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.eL.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bh.prototype={}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbY()+t+s
if(!this.a)return r
q=this.gbX()
p=P.eQ(this.b)
return r+q+": "+p}}
P.bM.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.f3.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t
u=H.ab(this.b)
if(typeof u!=="number")return u.Y()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gm:function(a){return this.f}}
P.hs.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hp.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eD.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eQ(u)+"."}}
P.fC.prototype={
i:function(a){return"Out of Memory"},
$ibh:1}
P.dJ.prototype={
i:function(a){return"Stack Overflow"},
$ibh:1}
P.eH.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e5.prototype={
i:function(a){return"Exception: "+this.a}}
P.eY.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.Z(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.u(r,i,j)
return t+h+f+g+"\n"+C.c.F(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.bi.prototype={}
P.l.prototype={}
P.n.prototype={
bL:function(a,b){var u=H.aa(this,"n",0)
return new H.cC(this,H.k(b,{func:1,ret:P.K,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gS(this)
for(t=0;u.E();)++t
return t},
gaJ:function(a){var u,t
u=this.gS(this)
if(!u.E())throw H.c(H.f4())
t=u.gK()
if(u.E())throw H.c(H.m0())
return t},
a7:function(a,b){var u,t,s
if(b<0)H.p(P.a6(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.E();){s=u.gK()
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
i:function(a){return P.lZ(this,"(",")")}}
P.aN.prototype={}
P.a.prototype={$in:1}
P.F.prototype={}
P.D.prototype={
gJ:function(a){return P.I.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.af.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
v:function(a,b){return this===b},
gJ:function(a){return H.ck(this)},
i:function(a){return"Instance of '"+H.bK(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.f.prototype={$iki:1}
P.ae.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inX:1}
P.hx.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iF",[u,u],"$aF")
H.E(b)
t=J.cQ(b).eq(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jD(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.ao(b,t+1)
u=this.a
a.q(0,P.jD(s,0,s.length,u,!0),P.jD(r,0,r.length,u,!0))}return a},
$S:43}
P.hu.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hv.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hw.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eq(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bR.prototype={
geX:function(){return this.b},
gcG:function(a){var u=this.c
if(u==null)return""
if(C.c.a4(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbH:function(a){var u=this.d
if(u==null)return P.kL(this.a)
return u},
gcN:function(){var u=this.f
return u==null?"":u},
gel:function(){var u=this.r
return u==null?"":u},
cS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iF",[P.f,null],"$aF")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a4(d,"/"))d="/"+d
g=P.jC(g,0,0,h)
return new P.bR(i,j,c,f,d,g,this.r)},
eL:function(a,b){return this.cS(a,null,null,null,null,null,null,b,null,null)},
gcO:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.sio(new P.dY(P.kz(u==null?"":u,C.m),[t,t]))}return this.Q},
gem:function(){return this.c!=null},
gep:function(){return this.f!=null},
gen:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.i(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.i(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.i(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$ijx)if(this.a==b.gbR())if(this.c!=null===b.gem())if(this.b==b.geX())if(this.gcG(this)==b.gcG(b))if(this.gbH(this)==b.gbH(b))if(this.e===b.geH(b)){u=this.f
t=u==null
if(!t===b.gep()){if(t)u=""
if(u===b.gcN()){u=this.r
t=u==null
if(!t===b.gen()){if(t)u=""
u=u===b.gel()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
if(u==null){u=C.c.gJ(this.i(0))
this.z=u}return u},
sio:function(a){var u=P.f
this.Q=H.h(a,"$iF",[u,u],"$aF")},
$ijx:1,
gbR:function(){return this.a},
geH:function(a){return this.e}}
P.iz.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a0("Invalid port",this.a,u+1))},
$S:39}
P.iA.prototype={
$1:function(a){return P.ek(C.aa,a,C.m,!1)},
$S:14}
P.iC.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.ek(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.ek(C.w,b,C.m,!0))}},
$S:37}
P.iB.prototype={
$2:function(a,b){var u,t
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(u=J.bu(H.l8(b,"$in")),t=this.a;u.E();)t.$2(a,H.E(u.gK()))},
$S:35}
P.ht.prototype={
geV:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
u=u[0]+1
s=C.c.er(t,"?",u)
r=t.length
if(s>=0){q=P.cL(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.hY(this,"data",null,null,null,P.cL(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iL.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.iK.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lF(u,0,96,b)
return u},
$S:33}
P.iM.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.iN.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.ip.prototype={
gem:function(){return this.c>0},
geo:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
gep:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
gen:function(){return this.r<this.a.length},
gdq:function(){return this.b===4&&C.c.a4(this.a,"http")},
gdr:function(){return this.b===5&&C.c.a4(this.a,"https")},
gbR:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdq()){this.x="http"
u="http"}else if(this.gdr()){this.x="https"
u="https"}else if(u===4&&C.c.a4(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a4(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
geX:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcG:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbH:function(a){var u
if(this.geo()){u=this.d
if(typeof u!=="number")return u.n()
return P.eq(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdq())return 80
if(this.gdr())return 443
return 0},
geH:function(a){return C.c.u(this.a,this.e,this.f)},
gcN:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.c.u(this.a,u+1,t):""},
gel:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ao(t,u+1):""},
gcO:function(){var u=this.f
if(typeof u!=="number")return u.Y()
if(u>=this.r)return C.ab
u=P.f
return new P.dY(P.kz(this.gcN(),C.m),[u,u])},
cS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iF",[P.f,null],"$aF")
i=this.gbR()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.geo()?this.gbH(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a4(d,"/"))d="/"+d
g=P.jC(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ao(t,s+1)
return new P.bR(i,j,c,f,d,g,b)},
eL:function(a,b){return this.cS(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ijx&&this.a===b.i(0)},
i:function(a){return this.a},
$ijx:1}
P.hY.prototype={}
W.w.prototype={}
W.cW.prototype={
i:function(a){return String(a)},
$icW:1}
W.eu.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.bd.prototype={$ibd:1}
W.bv.prototype={
bO:function(a,b,c){if(c!=null)return this.hb(a,b,P.ni(c,null))
return this.hc(a,b)},
f3:function(a,b){return this.bO(a,b,null)},
hb:function(a,b,c){return a.getContext(b,c)},
hc:function(a,b){return a.getContext(b)},
$ibv:1,
$ik4:1}
W.bw.prototype={
hd:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jZ:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibw:1}
W.be.prototype={
gm:function(a){return a.length}}
W.c6.prototype={
gm:function(a){return a.length}}
W.eG.prototype={}
W.aw.prototype={$iaw:1}
W.c7.prototype={
ju:function(a,b){return a.adoptNode(b)},
cX:function(a,b){return a.getElementById(b)}}
W.eJ.prototype={
i:function(a){return String(a)}}
W.d6.prototype={
jO:function(a,b){return a.createHTMLDocument(b)}}
W.d7.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cP(b,"$iax",[P.af],"$aax"))return!1
u=J.a5(b)
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&a.width===u.gbM(b)&&a.height===u.gbF(b)},
gJ:function(a){return W.kJ(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gdR:function(a){return a.bottom},
gbF:function(a){return a.height},
gbG:function(a){return a.left},
gcT:function(a){return a.right},
gbK:function(a){return a.top},
gbM:function(a){return a.width},
$iax:1,
$aax:function(){return[P.af]}}
W.hX.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.e(u[b],"$iM")},
q:function(a,b,c){var u
H.e(c,"$iM")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
J.jh(this.a,c,u[b])},
h:function(a,b){J.jY(this.a,b)
return b},
gS:function(a){var u=this.l_(this)
return new J.aq(u,u.length,0,[H.r(u,0)])},
$aR:function(){return[W.M]},
$an:function(){return[W.M]},
$aa:function(){return[W.M]}}
W.M.prototype={
gjz:function(a){return new W.hZ(a)},
gcs:function(a){return new W.hX(a,a.children)},
gdT:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.ax(u,t,s,r,[P.af])},
i:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k9
if(u==null){u=H.b([],[W.au])
t=new W.dy(u)
C.a.h(u,W.kI(null))
C.a.h(u,W.kK())
$.k9=t
d=t}else d=u
u=$.k8
if(u==null){u=new W.el(d)
$.k8=u
c=u}else{u.a=d
c=u}}if($.aZ==null){u=document
t=u.implementation
t=(t&&C.U).jO(t,"")
$.aZ=t
$.jo=t.createRange()
t=$.aZ
t.toString
t=t.createElement("base")
H.e(t,"$ic2")
t.href=u.baseURI
u=$.aZ.head;(u&&C.W).D(u,t)}u=$.aZ
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibd")}u=$.aZ
if(!!this.$ibd)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aZ.body;(u&&C.p).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.a8,a.tagName)){u=$.jo;(u&&C.N).fa(u,s)
u=$.jo
r=(u&&C.N).jM(u,b)}else{s.innerHTML=b
r=$.aZ.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.aZ.body
if(s==null?u!=null:s!==u)J.k_(s)
c.cZ(r)
C.z.ju(document,r)
return r},
jN:function(a,b,c){return this.ab(a,b,c,null)},
fd:function(a,b,c,d){a.textContent=null
this.D(a,this.ab(a,b,c,d))},
fc:function(a,b){return this.fd(a,b,null,null)},
aV:function(a,b){return a.getAttribute(b)},
iq:function(a,b){return a.removeAttribute(b)},
fb:function(a,b,c){return a.setAttribute(b,c)},
$iM:1,
gkV:function(a){return a.tagName}}
W.eN.prototype={
$1:function(a){return!!J.N(H.e(a,"$iA")).$iM},
$S:22}
W.m.prototype={$im:1}
W.bA.prototype={
fQ:function(a,b,c,d){return a.addEventListener(b,H.bV(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibA:1}
W.eX.prototype={
gm:function(a){return a.length}}
W.db.prototype={}
W.dc.prototype={
iw:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bC.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.W("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aR:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$ibC:1,
$aas:function(){return[W.A]}}
W.dd.prototype={}
W.b_.prototype={$ib_:1,
gdV:function(a){return a.data}}
W.cc.prototype={$icc:1,$ik4:1}
W.cd.prototype={$icd:1}
W.aO.prototype={$iaO:1}
W.dj.prototype={}
W.dm.prototype={
i:function(a){return String(a)},
$idm:1}
W.cg.prototype={}
W.a8.prototype={$ia8:1}
W.al.prototype={
gaJ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kq("No elements"))
if(t>1)throw H.c(P.kq("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.A],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.D(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.e(c,"$iA")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
J.jh(u,c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d9(u,u.length,-1,[H.cR(C.ac,u,"as",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aR:function(){return[W.A]},
$an:function(){return[W.A]},
$aa:function(){return[W.A]}}
W.A.prototype={
kK:function(a){var u=a.parentNode
if(u!=null)J.es(u,a)},
kP:function(a,b){var u,t
try{u=a.parentNode
J.jh(u,b,a)}catch(t){H.ac(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fh(a):u},
D:function(a,b){return a.appendChild(H.e(b,"$iA"))},
ir:function(a,b){return a.removeChild(b)},
iv:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.ci.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.W("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aR:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$aas:function(){return[W.A]}}
W.dD.prototype={
jM:function(a,b){return a.createContextualFragment(b)},
fa:function(a,b){return a.selectNodeContents(b)}}
W.fP.prototype={
gm:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.dL.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=W.lU("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.al(t).at(0,new W.al(u))
return t},
hf:function(a,b){return a.insertRow(b)}}
W.dM.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaJ(u)
s.toString
u=new W.al(s)
r=u.gaJ(u)
t.toString
r.toString
new W.al(t).at(0,new W.al(r))
return t},
dn:function(a,b){return a.insertCell(b)}}
W.h3.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaJ(u)
t.toString
s.toString
new W.al(t).at(0,new W.al(s))
return t}}
W.cp.prototype={$icp:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.hc.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.W("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.aI]},
$aR:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]},
$ia:1,
$aa:function(){return[W.aI]},
$aas:function(){return[W.aI]}}
W.bp.prototype={}
W.hP.prototype={$ik4:1}
W.aV.prototype={
gjU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.W("deltaY is not supported"))},
gjT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.W("deltaX is not supported"))},
$iaV:1}
W.cD.prototype={
ix:function(a,b){return a.requestAnimationFrame(H.bV(H.k(b,{func:1,ret:-1,args:[P.af]}),1))},
h4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cE.prototype={$icE:1}
W.e4.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cP(b,"$iax",[P.af],"$aax"))return!1
u=J.a5(b)
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&a.width===u.gbM(b)&&a.height===u.gbF(b)},
gJ:function(a){return W.kJ(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gbF:function(a){return a.height},
gbM:function(a){return a.width}}
W.ea.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.W("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aR:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$aas:function(){return[W.A]}}
W.hW.prototype={
X:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gay(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.y)(u),++q){p=u[q]
b.$2(p,r.aV(s,p))}},
gay:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.d(u,r)
q=H.e(u[r],"$icE")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abH:function(){return[P.f,P.f]},
$aF:function(){return[P.f,P.f]}}
W.hZ.prototype={
k:function(a,b){return J.ji(this.a,H.E(b))},
q:function(a,b,c){J.lJ(this.a,b,c)},
gm:function(a){return this.gay().length}}
W.i_.prototype={}
W.jA.prototype={}
W.i0.prototype={}
W.i1.prototype={
$1:function(a){return this.a.$1(H.e(a,"$im"))},
$S:32}
W.br.prototype={
fz:function(a){var u,t
u=$.jW()
if(u.gkk(u)){for(t=0;t<262;++t)u.q(0,C.a7[t],W.nu())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nv())}},
aQ:function(a){return $.lw().V(0,W.c8(a))},
au:function(a,b,c){var u,t,s
u=W.c8(a)
t=$.jW()
s=t.k(0,H.i(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jI(s.$4(a,b,c,this))},
$iau:1}
W.as.prototype={
gS:function(a){return new W.d9(a,this.gm(a),-1,[H.cR(this,a,"as",0)])}}
W.dy.prototype={
aQ:function(a){return C.a.dN(this.a,new W.fz(a))},
au:function(a,b,c){return C.a.dN(this.a,new W.fy(a,b,c))},
$iau:1}
W.fz.prototype={
$1:function(a){return H.e(a,"$iau").aQ(this.a)},
$S:24}
W.fy.prototype={
$1:function(a){return H.e(a,"$iau").au(this.a,this.b,this.c)},
$S:24}
W.ed.prototype={
fI:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bL(0,new W.im())
t=b.bL(0,new W.io())
this.b.at(0,u)
s=this.c
s.at(0,C.I)
s.at(0,t)},
aQ:function(a){return this.a.V(0,W.c8(a))},
au:function(a,b,c){var u,t
u=W.c8(a)
t=this.c
if(t.V(0,H.i(u)+"::"+b))return this.d.jv(c)
else if(t.V(0,"*::"+b))return this.d.jv(c)
else{t=this.b
if(t.V(0,H.i(u)+"::"+b))return!0
else if(t.V(0,"*::"+b))return!0
else if(t.V(0,H.i(u)+"::*"))return!0
else if(t.V(0,"*::*"))return!0}return!1},
$iau:1}
W.im.prototype={
$1:function(a){return!C.a.V(C.B,H.E(a))},
$S:25}
W.io.prototype={
$1:function(a){return C.a.V(C.B,H.E(a))},
$S:25}
W.iu.prototype={
au:function(a,b,c){if(this.fm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.V(0,b)
return!1}}
W.iv.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.E(a))},
$S:14}
W.it.prototype={
aQ:function(a){var u=J.N(a)
if(!!u.$icl)return!1
u=!!u.$io
if(u&&W.c8(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.c.a4(b,"on"))return!1
return this.aQ(a)},
$iau:1}
W.d9.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdm(J.lB(this.a,u))
this.c=u
return!0}this.sdm(null)
this.c=t
return!1},
gK:function(){return this.d},
sdm:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
W.au.prototype={}
W.ik.prototype={$io9:1}
W.el.prototype={
cZ:function(a){new W.iG(this).$2(a,null)},
b_:function(a,b){if(b==null)J.k_(a)
else J.es(b,a)},
iC:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lG(a)
s=J.ji(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ac(o)}q="element unprintable"
try{q=J.an(a)}catch(o){H.ac(o)}try{p=W.c8(a)
this.iB(H.e(a,"$iM"),b,u,q,p,H.e(t,"$iF"),H.E(s))}catch(o){if(H.ac(o) instanceof P.aC)throw o
else{this.b_(a,b)
window
n="Removing corrupted element "+H.i(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iB:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aQ(a)){this.b_(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.b_(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gay()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gay().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.d(t,s)
q=t[s]
if(!this.a.au(a,J.lL(q),r.aV(u,q))){window
p="Removing disallowed attribute <"+H.i(e)+" "+q+'="'+H.i(r.aV(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aV(u,q)
r.iq(u,q)}}if(!!J.N(a).$icp)this.cZ(a.content)},
$inU:1}
W.iG.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iC(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b_(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ac(r)
q=H.e(u,"$iA")
if(s){p=q.parentNode
if(p!=null)J.es(p,q)}else J.es(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iA")}},
$S:44}
W.e3.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.em.prototype={}
W.en.prototype={}
P.iq.prototype={
ej:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cW:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.N(a)
if(!!t.$iar)return new Date(a.a)
if(!!t.$imq)throw H.c(P.hq("structured clone of RegExp"))
if(!!t.$ib_)return a
if(!!t.$ibI)return a
if(!!t.$iF){s=this.ej(a)
t=this.b
if(s>=t.length)return H.d(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.X(0,new P.is(u,this))
return u.a}if(!!t.$ia){s=this.ej(a)
u=this.b
if(s>=u.length)return H.d(u,s)
r=u[s]
if(r!=null)return r
return this.jL(a,s)}throw H.c(P.hq("structured clone of other type"))},
jL:function(a,b){var u,t,s,r
u=J.bY(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.cW(u.k(a,r)))
return s}}
P.is.prototype={
$2:function(a,b){this.a.a[a]=this.b.cW(b)},
$S:7}
P.ei.prototype={$ib_:1,
gdV:function(a){return this.a}}
P.iR.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.ir.prototype={}
P.eU.prototype={
gbk:function(){var u,t,s
u=this.b
t=H.aa(u,"R",0)
s=W.M
return new H.fk(new H.cC(u,H.k(new P.eV(),{func:1,ret:P.K,args:[t]}),[t]),H.k(new P.eW(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.e(c,"$iM")
u=this.gbk()
J.lI(u.b.$1(J.et(u.a,b)),c)},
h:function(a,b){J.jY(this.b.a,b)},
gm:function(a){return J.aB(this.gbk().a)},
k:function(a,b){var u=this.gbk()
return u.b.$1(J.et(u.a,b))},
gS:function(a){var u=P.m8(this.gbk(),!1,W.M)
return new J.aq(u,u.length,0,[H.r(u,0)])},
$aR:function(){return[W.M]},
$an:function(){return[W.M]},
$aa:function(){return[W.M]}}
P.eV.prototype={
$1:function(a){return!!J.N(H.e(a,"$iA")).$iM},
$S:22}
P.eW.prototype={
$1:function(a){return H.j(H.e(a,"$iA"),"$iM")},
$S:53}
P.ie.prototype={
gcT:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
gdR:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cP(b,"$iax",[P.af],"$aax")){u=this.a
t=J.a5(b)
if(u==t.gbG(b)){s=this.b
if(s==t.gbK(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gcT(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.gdR(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.cV(u)
s=this.b
r=J.cV(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gJ(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gJ(H.x(s+this.d,q))
return P.mO(P.ic(P.ic(P.ic(P.ic(0,t),r),u),q))}}
P.ax.prototype={
gbG:function(a){return this.a},
gbK:function(a){return this.b},
gbM:function(a){return this.c},
gbF:function(a){return this.d}}
P.cl.prototype={$icl:1}
P.o.prototype={
gcs:function(a){return new P.eU(a,new W.al(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.au])
C.a.h(u,W.kI(null))
C.a.h(u,W.kK())
C.a.h(u,new W.it())
c=new W.el(new W.dy(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jN(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.al(r)
p=u.gaJ(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$io:1}
P.J.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]},
$imy:1}
P.cZ.prototype={$icZ:1}
P.da.prototype={$ida:1}
P.dC.prototype={$idC:1}
P.bN.prototype={
dJ:function(a,b){return a.activeTexture(b)},
dO:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jB:function(a,b,c){return a.bindFramebuffer(b,c)},
aR:function(a,b,c){return a.bindTexture(b,c)},
jC:function(a,b,c){return a.blendFunc(b,c)},
dS:function(a,b,c,d){return a.bufferData(b,c,d)},
jF:function(a,b){return a.clear(b)},
jG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jH:function(a,b){return a.clearDepth(b)},
jJ:function(a,b){return a.compileShader(b)},
jP:function(a,b){return a.createShader(b)},
jR:function(a,b){return a.deleteProgram(b)},
jS:function(a,b){return a.deleteShader(b)},
jV:function(a,b){return a.depthFunc(b)},
jW:function(a,b){return a.disable(b)},
dX:function(a,b){return a.disableVertexAttribArray(b)},
jY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cv:function(a,b){return a.enable(b)},
dY:function(a,b){return a.enableVertexAttribArray(b)},
eZ:function(a,b){return a.generateMipmap(b)},
f_:function(a,b,c){return a.getActiveAttrib(b,c)},
f0:function(a,b,c){return a.getActiveUniform(b,c)},
f1:function(a,b,c){return a.getAttribLocation(b,c)},
cY:function(a,b){return a.getParameter(b)},
f4:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
f5:function(a,b){return a.getShaderInfoLog(b)},
f6:function(a,b,c){return a.getShaderParameter(b,c)},
f7:function(a,b,c){return a.getUniformLocation(b,c)},
km:function(a,b){return a.linkProgram(b)},
kI:function(a,b,c){return a.pixelStorei(b,c)},
ff:function(a,b,c){return a.shaderSource(b,c)},
kX:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.N(g)
if(!!u.$ib_)t=!0
else t=!1
if(t){this.iO(a,b,c,d,e,f,P.nj(g))
return}if(!!u.$icc)u=!0
else u=!1
if(u){this.iP(a,b,c,d,e,f,g)
return}throw H.c(P.cX("Incorrect number or type of arguments"))},
kW:function(a,b,c,d,e,f,g){return this.kX(a,b,c,d,e,f,g,null,null,null)},
iO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eW:function(a,b){return a.useProgram(b)},
l3:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibN:1}
P.dG.prototype={$idG:1}
P.dO.prototype={$idO:1}
P.dW.prototype={$idW:1}
O.a_.prototype={
bU:function(a){this.shj(H.b([],[a]))
this.sdw(null)
this.sdt(null)
this.sdz(null)},
d_:function(a,b,c){var u=H.aa(this,"a_",0)
H.k(b,{func:1,ret:P.K,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdw(b)
this.sdt(a)
this.sdz(c)},
bf:function(a,b){return this.d_(a,null,b)},
i6:function(a){var u
H.h(a,"$in",[H.aa(this,"a_",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fu:function(a,b){var u
H.h(b,"$in",[H.aa(this,"a_",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.aq(u,u.length,0,[H.r(u,0)])},
a7:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aa(this,"a_",0)
H.x(b,u)
u=[u]
if(this.i6(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fu(s,H.b([b],u))}},
shj:function(a){this.a=H.h(a,"$ia",[H.aa(this,"a_",0)],"$aa")},
sdw:function(a){this.b=H.k(a,{func:1,ret:P.K,args:[[P.n,H.aa(this,"a_",0)]]})},
sdt:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.aa(this,"a_",0)]]})},
sdz:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.aa(this,"a_",0)]]})},
$in:1}
O.cf.prototype={
gm:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
fv:function(a){var u=this.b
if(u!=null)u.L(a)},
aK:function(){return this.fv(null)},
ga0:function(){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dt()},
eJ:function(a){var u=this.a
if(a==null)C.a.h(u,V.dt())
else C.a.h(u,a)
this.aK()},
cM:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sc2:function(a){this.a=H.h(a,"$ia",[V.ai],"$aa")}}
E.ey.prototype={}
E.ah.prototype={
saf:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().M(0,this.geE())
t=this.c
if(t!=null)t.gC().h(0,this.geE())
s=new D.P("shape",u,this.c,this,[F.dH])
s.b=!0
this.ak(s)}},
sb6:function(a){var u,t
if(!J.O(this.r,a)){u=this.r
if(u!=null)u.gC().M(0,this.geC())
if(a!=null)a.gC().h(0,this.geC())
this.r=a
t=new D.P("mover",u,a,this,[U.ad])
t.b=!0
this.ak(t)}},
aI:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.O(t,this.x)){s=this.x
this.x=t
r=new D.P("matrix",s,t,this,[V.ai])
r.b=!0
this.ak(r)}for(u=this.y.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aI(a)},
aT:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga0())
else C.a.h(u.a,t.F(0,u.ga0()))
u.aK()
a.eK(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kO(a,this)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aT(a)
a.eI()
a.dx.cM()},
gC:function(){var u=this.z
if(u==null){u=D.S()
this.z=u}return u},
ak:function(a){var u=this.z
if(u!=null)u.L(a)},
a2:function(){return this.ak(null)},
eF:function(a){H.e(a,"$iz")
this.e=null
this.ak(a)},
kz:function(){return this.eF(null)},
eD:function(a){this.ak(H.e(a,"$iz"))},
ky:function(){return this.eD(null)},
eB:function(a){this.ak(H.e(a,"$iz"))},
kv:function(){return this.eB(null)},
ku:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ah],"$an")
for(u=b.length,t=this.geA(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.sag(null)
o.saY(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sag(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
kx:function(a,b){var u,t
H.h(b,"$in",[E.ah],"$an")
for(u=b.gS(b),t=this.geA();u.E();)u.gK().gC().M(0,t)
this.a2()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfw:function(a,b){this.y=H.h(b,"$ia_",[E.ah],"$aa_")},
$ib4:1}
E.fK.prototype={
fp:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ar(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cf()
t=[V.ai]
u.sc2(H.b([],t))
u.b=null
u.gC().h(0,new E.fL(this))
this.cy=u
u=new O.cf()
u.sc2(H.b([],t))
u.b=null
u.gC().h(0,new E.fM(this))
this.db=u
u=new O.cf()
u.sc2(H.b([],t))
u.b=null
u.gC().h(0,new E.fN(this))
this.dx=u
this.siN(H.b([],[O.bP]))
u=this.dy;(u&&C.a).h(u,null)
this.siJ(new H.aG([P.f,A.cm]))},
gkJ:function(){var u=this.z
if(u==null){u=this.cy.ga0().F(0,this.db.ga0())
this.z=u}return u},
eK:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eI:function(){var u=this.dy
if(u.length>1)u.pop()},
siN:function(a){this.dy=H.h(a,"$ia",[O.bP],"$aa")},
siJ:function(a){this.fr=H.h(a,"$iF",[P.f,A.cm],"$aF")}}
E.fL.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fM.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fN.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dS.prototype={
d4:function(a){H.e(a,"$iz")
this.eM()},
d3:function(){return this.d4(null)},
gkf:function(){var u,t,s
u=Date.now()
t=C.f.a5(P.k7(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ar(u,!1)
return s/t},
dC:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.F()
if(typeof u!=="number")return H.C(u)
s=C.e.cF(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.F()
r=C.e.cF(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kt(C.y,this.gkQ())}},
eM:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.h8(this),{func:1,ret:-1,args:[P.af]})
C.P.h4(u)
C.P.ix(u,W.kY(t,P.af))}},
kN:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dC()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ar(r,!1)
s.y=P.k7(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.aT(this.e)}s=this.z
if(s!=null)s.L(null)}catch(q){u=H.ac(q)
t=H.bZ(q)
P.jR("Error: "+H.i(u))
P.jR("Stack: "+H.i(t))
throw H.c(u)}}}
E.h8.prototype={
$1:function(a){var u
H.nF(a)
u=this.a
if(u.ch){u.ch=!1
u.kN()}},
$S:31}
Z.e1.prototype={$inO:1}
Z.d_.prototype={
cm:function(a){var u,t,s
try{t=a.a
C.b.dY(t,this.e)
C.b.l3(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ac(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.hQ.prototype={$inP:1}
Z.d0.prototype={
aS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cm:function(a){var u,t
u=this.a
C.b.av(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cm(a)},
l2:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dX(s,u[t].e)
C.b.av(s,this.a.a,null)},
aT:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
p=r.a
C.b.av(t,p,r.b)
C.b.jY(t,q.a,q.b,5123,0)
C.b.av(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.an(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
she:function(a){this.b=H.h(a,"$ia",[Z.bj],"$aa")},
$inY:1}
Z.bj.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bK(this.c)+"'")+"]"}}
Z.aU.prototype={
gd0:function(a){var u,t
u=this.a
t=(u&$.ba().a)!==0?3:0
if((u&$.b9().a)!==0)t+=3
if((u&$.b8().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=2
if((u&$.bc().a)!==0)t+=3
if((u&$.cS().a)!==0)t+=3
if((u&$.cT().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.b7().a)!==0?t+4:t},
jx:function(a){var u,t,s
u=$.ba()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cT()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0)if(s===a)return u
return $.lu()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aU))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.ba().a)!==0)C.a.h(u,"Pos")
if((t&$.b9().a)!==0)C.a.h(u,"Norm")
if((t&$.b8().a)!==0)C.a.h(u,"Binm")
if((t&$.bb().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bc().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cS().a)!==0)C.a.h(u,"Clr3")
if((t&$.cT().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.b7().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eB.prototype={}
D.bz.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.k(b,u)
if(this.a==null)this.sag(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.b
t=(u&&C.a).M(u,b)||t}return t},
L:function(a){var u,t,s,r
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
return!0}if(!s)C.a.X(t,new D.eR(u))
t=this.b
if(t!=null)C.a.X(t,new D.eS(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
k5:function(){return this.L(null)},
kR:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.L(t)}}},
al:function(){return this.kR(!0,!1)},
sag:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.z]}],"$aa")},
saY:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.z]}],"$aa")}}
D.eR.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eS.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.z.prototype={}
D.bE.prototype={}
D.bF.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.d1.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.di.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.f9.prototype={
kF:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kB:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
sim:function(a){this.d=H.h(a,"$ikp",[P.l],"$akp")}}
X.dn.prototype={}
X.fg.prototype={
aX:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ar(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.F()
q=b.b
p=this.ch
if(typeof q!=="number")return q.F()
o=new V.a3(t.a+s*r,t.b+q*p)
p=this.a.gbn()
n=new X.bl(a,V.bn(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cL:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f9()
if(typeof u!=="number")return u.bN()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.aX(a,b))
return!0},
kG:function(a){return!1},
hW:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ar(Date.now(),!1)
t=this.f
s=new X.dn(c,a,this.a.gbn(),b,u,this)
s.b=!0
t.L(s)
this.y=u
this.x=V.bn()}}
X.aH.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bl.prototype={}
X.ft.prototype={
c_:function(a,b,c){var u,t,s
u=new P.ar(Date.now(),!1)
t=this.a.gbn()
s=new X.bl(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cL:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.c_(a,b,!0))
return!0},
b8:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f9()
if(typeof u!=="number")return u.bN()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.L(this.c_(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.c_(a,b,!1))
return!0},
kH:function(a,b){return!1}}
X.fF.prototype={}
X.dU.prototype={}
X.hb.prototype={
aX:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a3],"$aa")
u=new P.ar(Date.now(),!1)
t=a.length>0?a[0]:V.bn()
s=this.a.gbn()
r=new X.dU(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kE:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.b
if(u==null)return!1
u.L(this.aX(a,!0))
return!0},
kC:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.c
if(u==null)return!1
u.L(this.aX(a,!0))
return!0},
kD:function(a){var u
H.h(a,"$ia",[V.a3],"$aa")
u=this.d
if(u==null)return!1
u.L(this.aX(a,!1))
return!0}}
X.dZ.prototype={
gbn:function(){var u=this.a
return V.kn(0,0,C.q.gdT(u).c,C.q.gdT(u).d)},
dh:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.di(u,new X.aH(t,a.altKey,a.shiftKey))},
aO:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aH(t,a.altKey,a.shiftKey)},
ce:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aH(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a3(t-r,s-q)},
aZ:function(a){return new V.X(a.movementX,a.movementY)},
c8:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a3])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.e.am(p.pageX)
C.e.am(p.pageY)
n=u.left
C.e.am(p.pageX)
C.a.h(t,new V.a3(o-n,C.e.am(p.pageY)-u.top))}return t},
aC:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.aH(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.t()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hQ:function(a){this.f=!0},
hD:function(a){this.f=!1},
hK:function(a){H.e(a,"$ia8")
if(this.f&&this.c3(a))a.preventDefault()},
hU:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.dh(a)
this.b.kF(u)},
hS:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.dh(a)
this.b.kB(u)},
hY:function(a){var u,t,s,r
H.e(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aO(a)
if(this.x){t=this.aC(a)
s=this.aZ(a)
if(this.d.cL(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aC(a)
r=this.aE(a)
if(this.c.cL(t,r))a.preventDefault()},
i1:function(a){var u,t,s
H.e(a,"$ia8")
this.aO(a)
u=this.aC(a)
if(this.x){t=this.aZ(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.b8(u,s))a.preventDefault()},
hO:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.c3(a)){this.aO(a)
u=this.aC(a)
if(this.x){t=this.aZ(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.b8(u,s))a.preventDefault()}},
i_:function(a){var u,t,s
H.e(a,"$ia8")
this.aO(a)
u=this.aC(a)
if(this.x){t=this.aZ(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.b7(u,s))a.preventDefault()},
hM:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.c3(a)){this.aO(a)
u=this.aC(a)
if(this.x){t=this.aZ(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.b7(u,s))a.preventDefault()}},
i3:function(a){var u,t
H.e(a,"$iaV")
this.aO(a)
u=new V.X((a&&C.O).gjT(a),C.O.gjU(a)).A(0,180)
if(this.x){if(this.d.kG(u))a.preventDefault()
return}if(this.r)return
t=this.aE(a)
if(this.c.kH(u,t))a.preventDefault()},
i5:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aC(this.y)
s=this.aE(this.y)
this.d.hW(t,s,u)}},
ik:function(a){var u
H.e(a,"$iaJ")
this.a.focus()
this.f=!0
this.ce(a)
u=this.c8(a)
if(this.e.kE(u))a.preventDefault()},
ig:function(a){var u
H.e(a,"$iaJ")
this.ce(a)
u=this.c8(a)
if(this.e.kC(u))a.preventDefault()},
ii:function(a){var u
H.e(a,"$iaJ")
this.ce(a)
u=this.c8(a)
if(this.e.kD(u))a.preventDefault()},
sh5:function(a){this.z=H.h(a,"$ia",[[P.co,P.I]],"$aa")}}
D.d5.prototype={$ia1:1,$ib4:1}
D.a1.prototype={$ib4:1}
D.dk.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.S()
this.Q=u}return u},
as:function(a){var u=this.Q
if(u!=null)u.L(a)},
dv:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.L(a)},
hV:function(){return this.dv(null)},
i8:function(a){var u,t,s
H.h(a,"$in",[D.a1],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.fA(s))return!1}return!0},
hx:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdu(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.e(b[p],"$ia1")
if(o instanceof D.bo)C.a.h(this.x,o)
n=o.r
if(n==null){n=new D.bz()
n.sag(null)
n.saY(null)
n.c=null
n.d=0
o.r=n}H.k(s,r)
if(n.a==null)n.sag(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bE(a,b,this,[u])
u.b=!0
this.as(u)},
ic:function(a,b){var u,t,s,r
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.gS(b),s=this.gdu();t.E();){r=t.gK()
C.a.M(this.e,r)
r.gC().M(0,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.as(u)},
fA:function(a){var u=C.a.V(this.x,a)
return u},
sh2:function(a){this.e=H.h(a,"$ia",[D.d5],"$aa")},
sil:function(a){this.f=H.h(a,"$ia",[D.dB],"$aa")},
siL:function(a){this.r=H.h(a,"$ia",[D.dI],"$aa")},
siY:function(a){this.x=H.h(a,"$ia",[D.bo],"$aa")},
siZ:function(a){this.y=H.h(a,"$ia",[D.dQ],"$aa")},
sj_:function(a){this.z=H.h(a,"$ia",[D.dR],"$aa")},
$an:function(){return[D.a1]},
$aa_:function(){return[D.a1]}}
D.dB.prototype={$ia1:1,$ib4:1}
D.dI.prototype={$ia1:1,$ib4:1}
D.bo.prototype={
gC:function(){var u=this.r
if(u==null){u=D.S()
this.r=u}return u},
as:function(a){var u
H.e(a,"$iz")
u=this.r
if(u!=null)u.L(a)},
hE:function(){return this.as(null)},
$ia1:1,
$ib4:1}
D.dQ.prototype={$ia1:1,$ib4:1}
D.dR.prototype={$ia1:1,$ib4:1}
V.Y.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gcP())
t=C.e.n(this.b,b.gbQ())
s=C.e.n(this.c,b.gco())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcP())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gco())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aD.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gcP())
t=C.e.n(this.b,b.gbQ())
s=C.e.n(this.c,b.gco())
r=C.e.n(this.d,b.gjw(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aD(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcP())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gco())
r=C.e.t(this.d,b.gjw(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aD(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.eP.prototype={}
V.ds.prototype={
ae:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ds))return!1
u=b.a
t=$.L().a
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
u=[P.q]
t=V.bX(H.b([this.a,this.d,this.r],u),3,0)
s=V.bX(H.b([this.b,this.e,this.x],u),3,0)
r=V.bX(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.d(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.d(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.d(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.d(t,1)
n=" "+t[1]+", "
if(1>=p)return H.d(s,1)
n=n+s[1]+", "
if(1>=o)return H.d(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.d(t,2)
u=" "+t[2]+", "
if(2>=p)return H.d(s,2)
u=u+s[2]+", "
if(2>=o)return H.d(r,2)
return n+(u+r[2]+"]")}}
V.ai.prototype={
ae:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return u},
es:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.L().a)return V.dt()
a8=1/a7
a9=-r
b0=-d
return V.b3((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
F:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b3(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bc:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.B(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bb:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Z(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.L().a
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
i:function(a){return this.O()},
ek:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.bX(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bX(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bX(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bX(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.d(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.d(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.d(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.d(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.d(t,1)
l=l+t[1]+", "
if(1>=o)return H.d(s,1)
l=l+s[1]+", "
if(1>=n)return H.d(r,1)
l=l+r[1]+", "
if(1>=m)return H.d(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.d(t,2)
p=p+t[2]+", "
if(2>=o)return H.d(s,2)
p=p+s[2]+", "
if(2>=n)return H.d(r,2)
p=p+r[2]+", "
if(2>=m)return H.d(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.d(t,3)
l=l+t[3]+", "
if(3>=o)return H.d(s,3)
l=l+s[3]+", "
if(3>=n)return H.d(r,3)
l=l+r[3]+", "
if(3>=m)return H.d(q,3)
return p+(l+q[3]+"]")},
O:function(){return this.ek("",3,0)},
G:function(a){return this.ek(a,3,0)}}
V.a3.prototype={
n:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.Z.prototype={
n:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
F:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aQ.prototype={
n:function(a,b){return new V.aQ(C.e.n(this.a,b.gl6(b)),C.e.n(this.b,b.gl7(b)),C.e.n(this.c,b.gl8(b)),C.e.n(this.d,b.gl5()))},
t:function(a,b){return new V.aQ(C.e.t(this.a,b.gl6(b)),C.e.t(this.b,b.gl7(b)),C.e.t(this.c,b.gl8(b)),C.e.t(this.d,b.gl5()))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.dF.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.X.prototype={
cJ:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.F()
if(typeof r!=="number")return H.C(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gk_(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gk0(b)
if(typeof u!=="number")return u.n()
return new V.X(t,C.e.n(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gk_(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gk0(b)
if(typeof u!=="number")return u.t()
return new V.X(t,C.e.t(u,s))},
F:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.F()
t=this.b
if(typeof t!=="number")return t.F()
return new V.X(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.kB
if(u==null){u=new V.X(0,0)
$.kB=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.X(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.B.prototype={
cJ:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cK:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aF:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.B(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.B(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.L().a)return V.cB()
return new V.B(this.a/b,this.b/b,this.c/b)},
eu:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.eC.prototype={
bW:function(a){var u=V.nN(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u},
a_:function(a){var u=this.y
if(u!=null)u.L(a)},
seY:function(a,b){},
sew:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.L().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bW(t)}u=new D.P("maximumLocation",u,this.b,this,[P.q])
u.b=!0
this.a_(u)}},
sey:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bW(t)}u=new D.P("minimumLocation",u,this.c,this,[P.q])
u.b=!0
this.a_(u)}},
sa3:function(a,b){var u
b=this.bW(b)
u=this.d
if(!(Math.abs(u-b)<$.L().a)){this.d=b
u=new D.P("location",u,b,this,[P.q])
u.b=!0
this.a_(u)}},
sex:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.L().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.P("maximumVelocity",u,a,this,[P.q])
u.b=!0
this.a_(u)}},
sa1:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.L().a)){this.f=a
u=new D.P("velocity",u,a,this,[P.q])
u.b=!0
this.a_(u)}},
sdU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.P("dampening",u,a,this,[P.q])
u.b=!0
this.a_(u)}},
aI:function(a){var u,t,s,r,q
u=this.f
t=$.L().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.L().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa1(s)}}}
U.d3.prototype={
gC:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
bd:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cb.prototype={
gC:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
a_:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.L(a)},
ap:function(){return this.a_(null)},
hv:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gbi(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.k(s,r)
if(n.a==null)n.sag(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.a_(u)},
ia:function(a,b){var u,t,s
u=U.ad
H.h(b,"$in",[u],"$an")
for(t=b.gS(b),s=this.gbi();t.E();)t.gK().gC().M(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.a_(u)},
bd:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aq(u,u.length,0,[H.r(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.bd(a,b)
if(r!=null)s=s==null?r:r.F(0,s)}}this.f=s==null?V.dt():s
u=this.e
if(u!=null)u.al()}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cb))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.ad]},
$aa_:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e_.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.S()
this.fx=u}return u},
a_:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.L(a)},
ap:function(){return this.a_(null)},
jy:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.S()
u.b=t
u=t}else u=t
u.h(0,this.gho())
u=this.a.c
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.ghq())
u=this.a.c
t=u.c
if(t==null){t=D.S()
u.c=t
u=t}else u=t
u.h(0,this.ghs())
u=this.a.d
t=u.f
if(t==null){t=D.S()
u.f=t
u=t}else u=t
u.h(0,this.ghk())
u=this.a.d
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.ghm())
u=this.a.e
t=u.b
if(t==null){t=D.S()
u.b=t
u=t}else u=t
u.h(0,this.giV())
u=this.a.e
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.giT())
u=this.a.e
t=u.c
if(t==null){t=D.S()
u.c=t
u=t}else u=t
u.h(0,this.giR())
return!0},
ar:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.X(u,t)},
hp:function(a){a=H.j(H.e(a,"$iz"),"$ibl")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hr:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibl")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.ar(new V.X(t.a,t.b).F(0,2).A(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sa1(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.ar(new V.X(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.t(0,a.z)
this.dx=this.ar(new V.X(t.a,t.b).F(0,2).A(0,u.gaA()))}this.ap()},
ht:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sa1(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sa1(-t*10*u)
this.ap()}},
hl:function(a){if(H.j(H.e(a,"$iz"),"$idn").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hn:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibl")
if(!J.O(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.ar(new V.X(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.t(0,a.z)
this.dx=this.ar(new V.X(t.a,t.b).F(0,2).A(0,u.gaA()))
this.ap()},
iW:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iU:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$idU")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.ar(new V.X(t.a,t.b).F(0,2).A(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sa1(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.ar(new V.X(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.t(0,a.z)
this.dx=this.ar(new V.X(t.a,t.b).F(0,2).A(0,u.gaA()))}this.ap()},
iS:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sa1(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sa1(-t*10*u)
this.ap()}},
bd:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.dy=t
s=a.y
this.c.aI(s)
this.b.aI(s)
u=V.kf(this.b.d)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.F(0,V.b3(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iad:1}
M.d8.prototype={
aB:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.L(a)},
fB:function(){return this.aB(null)},
hG:function(a,b){var u,t,s,r,q,p,o,n
u=E.ah
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaq(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.sag(null)
n.saY(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sag(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.aB(u)},
hI:function(a,b){var u,t,s
u=E.ah
H.h(b,"$in",[u],"$an")
for(t=b.gS(b),s=this.gaq();t.E();)t.gK().gC().M(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.aB(u)},
seO:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().M(0,this.gaq())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gaq())
u=new D.P("technique",t,this.c,this,[O.bP])
u.b=!0
this.aB(u)}},
gC:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u},
aT:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eK(this.c)
u=this.b
u.toString
t=a1.a
C.b.jB(t,36160,null)
C.b.cv(t,2884)
C.b.cv(t,2929)
C.b.jV(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.C(s)
o=C.e.am(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.e.am(p*r)
p=C.e.am(q.c*s)
a1.c=p
q=C.e.am(q.d*r)
a1.d=q
C.b.l4(t,o,n,p,q)
C.b.jH(t,u.c)
u=u.a
C.b.jG(t,u.a,u.b,u.c,u.d)
C.b.jF(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b3(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.eJ(i)
t=$.kj
if(t==null){t=V.mc()
q=V.kF()
p=$.kC
if(p==null){p=new V.B(0,0,-1)
$.kC=p}h=p.A(0,Math.sqrt(p.I(p)))
q=q.aF(h)
g=q.A(0,Math.sqrt(q.I(q)))
f=h.aF(g)
e=new V.B(t.a,t.b,t.c)
d=g.T(0).I(e)
c=f.T(0).I(e)
b=h.T(0).I(e)
t=V.b3(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kj=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.bd(a1,u)
if(a0!=null)a=a0.F(0,a)}a1.db.eJ(a)
u=this.c
if(u!=null)u.aI(a1)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aI(a1)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aT(a1)
this.a.toString
a1.cy.cM()
a1.db.cM()
this.b.toString
a1.eI()},
sfX:function(a,b){this.d=H.h(b,"$ia_",[E.ah],"$aa_")},
$inV:1}
A.cY.prototype={}
A.ev.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dY(r.a,r.c)}},
jX:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dX(r.a,r.c)}}}
A.fn.prototype={
fo:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.ae("")
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
a7.j3(u)
a7.ja(u)
a7.j4(u)
a7.ji(u)
a7.jj(u)
a7.jc(u)
a7.jn(u)
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
u=new P.ae("")
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
s.j7(u)
s.j2(u)
s.j5(u)
s.j8(u)
s.jg(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.je(u)
s.jf(u)}s.jb(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.f])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.j6(u)
s.jd(u)
s.jh(u)
s.jk(u)
s.jl(u)
s.jm(u)
s.j9(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.f])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.d)u.a+="   setDiffuseColor();\n"
if(s.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.d)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.d)C.a.h(j,"emission()")
if(s.r!==C.d)C.a.h(j,"reflect(refl)")
if(s.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.l(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.di(n,35633)
this.f=this.di(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dO(s,q,this.e)
C.b.dO(s,this.r,this.f)
C.b.km(s,this.r)
if(!H.jI(C.b.bP(s,this.r,35714))){h=C.b.f4(s,this.r)
C.b.jR(s,this.r)
H.p(P.u("Failed to link shader: "+H.i(h)))}this.iG()
this.iI()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$iav")
if(t)this.dy=H.j(this.y.p(0,"objMat"),"$iav")
if(r)this.fr=H.j(this.y.p(0,"viewObjMat"),"$iav")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$iav")
if(a7.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$icu")
if(a7.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$iav")
if(a7.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$iav")
this.sfT(H.b([],[A.av]))
t=a7.ax
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iH")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.p(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(f,"$iav"))}}t=a7.a
if(t!==C.d){this.r2=H.j(this.y.p(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.j(this.y.p(0,"emissionTxt"),"$iaj")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iH")
break
case C.i:this.ry=H.j(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iH")
break}}t=a7.b
if(t!==C.d){this.x2=H.j(this.y.p(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.j(this.y.p(0,"ambientTxt"),"$iaj")
this.ax=H.j(this.y.p(0,"nullAmbientTxt"),"$iH")
break
case C.i:this.y2=H.j(this.y.p(0,"ambientTxt"),"$iak")
this.ax=H.j(this.y.p(0,"nullAmbientTxt"),"$iH")
break}}t=a7.c
if(t!==C.d){this.aj=H.j(this.y.p(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.bq=H.j(this.y.p(0,"diffuseTxt"),"$iaj")
this.br=H.j(this.y.p(0,"nullDiffuseTxt"),"$iH")
break
case C.i:this.dZ=H.j(this.y.p(0,"diffuseTxt"),"$iak")
this.br=H.j(this.y.p(0,"nullDiffuseTxt"),"$iH")
break}}t=a7.d
if(t!==C.d){this.bs=H.j(this.y.p(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e_=H.j(this.y.p(0,"invDiffuseTxt"),"$iaj")
this.bt=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iH")
break
case C.i:this.e0=H.j(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bt=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iH")
break}}t=a7.e
if(t!==C.d){this.bw=H.j(this.y.p(0,"shininess"),"$iV")
this.bu=H.j(this.y.p(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e1=H.j(this.y.p(0,"specularTxt"),"$iaj")
this.bv=H.j(this.y.p(0,"nullSpecularTxt"),"$iH")
break
case C.i:this.e2=H.j(this.y.p(0,"specularTxt"),"$iak")
this.bv=H.j(this.y.p(0,"nullSpecularTxt"),"$iH")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e3=H.j(this.y.p(0,"bumpTxt"),"$iaj")
this.bx=H.j(this.y.p(0,"nullBumpTxt"),"$iH")
break
case C.i:this.e4=H.j(this.y.p(0,"bumpTxt"),"$iak")
this.bx=H.j(this.y.p(0,"nullBumpTxt"),"$iH")
break}if(a7.dy){this.e5=H.j(this.y.p(0,"envSampler"),"$iak")
this.e6=H.j(this.y.p(0,"nullEnvTxt"),"$iH")
t=a7.r
if(t!==C.d){this.by=H.j(this.y.p(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e7=H.j(this.y.p(0,"reflectTxt"),"$iaj")
this.bz=H.j(this.y.p(0,"nullReflectTxt"),"$iH")
break
case C.i:this.e8=H.j(this.y.p(0,"reflectTxt"),"$iak")
this.bz=H.j(this.y.p(0,"nullReflectTxt"),"$iH")
break}}t=a7.x
if(t!==C.d){this.bA=H.j(this.y.p(0,"refraction"),"$iV")
this.bB=H.j(this.y.p(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e9=H.j(this.y.p(0,"refractTxt"),"$iaj")
this.bC=H.j(this.y.p(0,"nullRefractTxt"),"$iH")
break
case C.i:this.ea=H.j(this.y.p(0,"refractTxt"),"$iak")
this.bC=H.j(this.y.p(0,"nullRefractTxt"),"$iH")
break}}}t=a7.y
if(t!==C.d){this.bD=H.j(this.y.p(0,"alpha"),"$iV")
switch(t){case C.d:break
case C.j:break
case C.h:this.eb=H.j(this.y.p(0,"alphaTxt"),"$iaj")
this.bE=H.j(this.y.p(0,"nullAlphaTxt"),"$iH")
break
case C.i:this.ec=H.j(this.y.p(0,"alphaTxt"),"$iak")
this.bE=H.j(this.y.p(0,"nullAlphaTxt"),"$iH")
break}}this.sfC(H.b([],[A.ct]))
this.sfD(H.b([],[A.cv]))
this.sfE(H.b([],[A.cw]))
this.sfF(H.b([],[A.cx]))
this.sfG(H.b([],[A.cy]))
this.sfH(H.b([],[A.cz]))
if(a7.k2){t=a7.z
if(t>0){this.ed=H.e(this.y.p(0,"dirLightCount"),"$iH")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.cw;(s&&C.a).h(s,new A.ct(g,f,e))}}t=a7.Q
if(t>0){this.ee=H.e(this.y.p(0,"pntLightCount"),"$iH")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iV")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iV")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iV")
s=this.cz;(s&&C.a).h(s,new A.cv(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ef=H.e(this.y.p(0,"spotLightCount"),"$iH")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iV")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iV")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iV")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iV")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iV")
s=this.cA;(s&&C.a).h(s,new A.cw(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eg=H.e(this.y.p(0,"txtDirLightCount"),"$iH")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iG")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iH")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iaj")
s=this.cB;(s&&C.a).h(s,new A.cx(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eh=H.e(this.y.p(0,"txtPntLightCount"),"$iH")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$icu")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iH")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iV")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iV")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iV")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iak")
s=this.cC;(s&&C.a).h(s,new A.cy(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.ei=H.e(this.y.p(0,"txtSpotLightCount"),"$iH")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iG")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iH")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iG")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iV")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iV")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iV")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iV")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iV")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a6,"$iaj")
s=this.cD;(s&&C.a).h(s,new A.cz(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ah:function(a,b,c){C.b.U(b.a,b.d,1)},
aa:function(a,b,c){C.b.U(b.a,b.d,1)},
sfT:function(a){this.r1=H.h(a,"$ia",[A.av],"$aa")},
sfC:function(a){this.cw=H.h(a,"$ia",[A.ct],"$aa")},
sfD:function(a){this.cz=H.h(a,"$ia",[A.cv],"$aa")},
sfE:function(a){this.cA=H.h(a,"$ia",[A.cw],"$aa")},
sfF:function(a){this.cB=H.h(a,"$ia",[A.cx],"$aa")},
sfG:function(a){this.cC=H.h(a,"$ia",[A.cy],"$aa")},
sfH:function(a){this.cD=H.h(a,"$ia",[A.cz],"$aa")}}
A.fq.prototype={
j3:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
ja:function(a){var u
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
j4:function(a){var u
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
ji:function(a){var u,t
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
jj:function(a){var u,t
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
jc:function(a){var u
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
jn:function(a){var u
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
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.d(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ao(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j7:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aD(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
j2:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aD(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
j5:function(a){var u,t
u=this.c
if(u===C.d)return
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
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
j8:function(a){var u,t
u=this.d
if(u===C.d)return
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
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jg:function(a){var u,t
u=this.e
if(u===C.d)return
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
switch(u){case C.d:u=t
break
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jb:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
je:function(a){var u,t
u=this.r
if(u===C.d)return
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
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jf:function(a){var u,t
u=this.x
if(u===C.d)return
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
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
j6:function(a){var u,t
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
jd:function(a){var u,t
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
jh:function(a){var u,t
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
jk:function(a){var u,t,s
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
jl:function(a){var u,t,s
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
jm:function(a){var u,t,s
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
j9:function(a){var u
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
A.ct.prototype={}
A.cx.prototype={}
A.cv.prototype={}
A.cy.prototype={}
A.cw.prototype={}
A.cz.prototype={}
A.cm.prototype={
fs:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
di:function(a,b){var u,t,s
u=this.a
t=C.b.jP(u,b)
C.b.ff(u,t,a)
C.b.jJ(u,t)
if(!H.jI(C.b.f6(u,t,35713))){s=C.b.f5(u,t)
C.b.jS(u,t)
throw H.c(P.u("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
iG:function(){var u,t,s,r,q,p
u=H.b([],[A.cY])
t=this.a
s=H.ab(C.b.bP(t,this.r,35721))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.f_(t,this.r,r)
p=C.b.f1(t,this.r,q.name)
C.a.h(u,new A.cY(t,q.name,p))}this.x=new A.ev(u)},
iI:function(){var u,t,s,r,q,p
u=H.b([],[A.dV])
t=this.a
s=H.ab(C.b.bP(t,this.r,35718))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.f0(t,this.r,r)
p=C.b.f7(t,this.r,q.name)
C.a.h(u,this.jQ(q.type,q.size,q.name,p))}this.y=new A.hn(u)},
aM:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.H(u,t,b,c)
else return A.jw(u,t,b,a,c)},
h_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aj(u,t,b,c)
else return A.jw(u,t,b,a,c)},
h0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jw(u,t,b,a,c)},
bm:function(a,b){return new P.e5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jQ:function(a,b,c,d){switch(a){case 5120:return this.aM(b,c,d)
case 5121:return this.aM(b,c,d)
case 5122:return this.aM(b,c,d)
case 5123:return this.aM(b,c,d)
case 5124:return this.aM(b,c,d)
case 5125:return this.aM(b,c,d)
case 5126:return new A.V(this.a,this.r,c,d)
case 35664:return new A.hi(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.hl(this.a,this.r,c,d)
case 35667:return new A.hj(this.a,this.r,c,d)
case 35668:return new A.hk(this.a,this.r,c,d)
case 35669:return new A.hm(this.a,this.r,c,d)
case 35674:return new A.ho(this.a,this.r,c,d)
case 35675:return new A.cu(this.a,this.r,c,d)
case 35676:return new A.av(this.a,this.r,c,d)
case 35678:return this.h_(b,c,d)
case 35680:return this.h0(b,c,d)
case 35670:throw H.c(this.bm("BOOL",c))
case 35671:throw H.c(this.bm("BOOL_VEC2",c))
case 35672:throw H.c(this.bm("BOOL_VEC3",c))
case 35673:throw H.c(this.bm("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.by.prototype={
i:function(a){return this.b}}
A.dV.prototype={}
A.hn.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
ke:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.ke("\n")}}
A.H.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hj.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hk.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hm.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hh.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sj0:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hi.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.hl.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.ho.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cu.prototype={
an:function(a){var u=new Float32Array(H.bS(H.h(a,"$ia",[P.q],"$aa")))
C.b.eT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.av.prototype={
an:function(a){var u=new Float32Array(H.bS(H.h(a,"$ia",[P.q],"$aa")))
C.b.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.aj.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.iI.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cK(u.b,b).cK(u.d.cK(u.c,b),c)
a.sa3(0,new V.Z(t.a,t.b,t.c))
a.seP(t.A(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdP(new V.aQ(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.iS.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:30}
F.iU.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.C(q)
t=-t*q
p=s*q
a.sa3(0,new V.Z(t,p,r))
p=new V.B(t,p,r)
a.seP(p.A(0,Math.sqrt(p.I(p))))
a.sdP(new V.aQ(1-c,2+c,-1,-1))},
$S:8}
F.iV.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.iW.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.jd.prototype={
$2:function(a,b){return 0},
$S:30}
F.je.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.C(u)
t=a.f
s=new V.B(t.a,t.b,t.c)
u=s.A(0,Math.sqrt(s.I(s))).F(0,this.b+u)
a.sa3(0,new V.Z(u.a,u.b,u.c))},
$S:8}
F.jf.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:28}
F.j2.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:28}
F.iT.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jX(t.$1(u),s)
s=J.lA(J.jX(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.B(s.a,s.b,s.c)
q=s.A(0,Math.sqrt(s.I(s)))
t=$.kD
if(t==null){t=new V.B(1,0,0)
$.kD=t
p=t}else p=t
t=q.aF(!J.O(q,p)?V.kG():p)
o=t.A(0,Math.sqrt(t.I(t)))
t=o.aF(q)
p=t.A(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.F(0,t*s)
s=o.F(0,m*s)
a.sa3(0,J.lz(r,new V.Z(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a2.prototype={
b2:function(){if(!this.gb3()){C.a.M(this.a.a.d.b,this)
this.a.a.a2()}this.ca()
this.cb()
this.it()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
iF:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
it:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
fS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cB()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eu())return
return q.A(0,Math.sqrt(q.I(q)))},
fW:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.B(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.B(u.a,u.b,u.c)
u=q.aF(u.A(0,Math.sqrt(u.I(u))))
return u.A(0,Math.sqrt(u.I(u)))},
cr:function(){if(this.d!=null)return!0
var u=this.fS()
if(u==null){u=this.fW()
if(u==null)return!1}this.d=u
this.a.a.a2()
return!0},
fR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cB()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eu())return
return q.A(0,Math.sqrt(q.I(q)))},
fV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.L().a){u=m.t(0,p)
u=new V.B(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.T(0)}else{g=(u-l.b)/i
u=m.t(0,p).F(0,g).n(0,p).t(0,s)
u=new V.B(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.T(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.I(u)))
u=f.aF(h)
u=u.A(0,Math.sqrt(u.I(u))).aF(f)
h=u.A(0,Math.sqrt(u.I(u)))}return h},
cp:function(){if(this.e!=null)return!0
var u=this.fR()
if(u==null){u=this.fV()
if(u==null)return!1}this.e=u
this.a.a.a2()
return!0},
gjI:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t
if(this.gb3())return a+"disposed"
u=a+C.c.ad(J.an(this.a.e),0)+", "+C.c.ad(J.an(this.b.e),0)+", "+C.c.ad(J.an(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.eT.prototype={}
F.fY.prototype={
b4:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b2.prototype={
b2:function(){if(!this.gb3()){C.a.M(this.a.a.c.b,this)
this.a.a.a2()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb3())return a+"disposed"
return a+C.c.ad(J.an(this.a.e),0)+", "+C.c.ad(J.an(this.b.e),0)},
O:function(){return this.G("")}}
F.fa.prototype={}
F.hg.prototype={
b4:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
return u==t.e}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
return u==t.e}else return!1}}}
F.bm.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ad(J.an(u.e),0)},
O:function(){return this.G("")}}
F.dH.prototype={
gC:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.B()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){q=u[r]
this.a.h(0,q.jK())}this.a.B()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bm()
if(m.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.L(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.m3(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c9(k,j,h)}u=this.e
if(u!=null)u.al()},
aw:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aw()||!1
if(!this.a.aw())t=!1
u=this.e
if(u!=null)u.al()
return t},
kr:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.a9];t.length!==0;){s=C.a.gka(t)
C.a.kL(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.y)(t),++p){o=t[p]
if(o!=null&&a.b4(0,s,o)){C.a.h(r,o)
C.a.M(t,o)}}if(r.length>1)b.b5(r)}}this.a.B()
this.c.cQ()
this.d.cQ()
this.b.kM()
this.c.cR(new F.hg())
this.d.cR(new F.fY())
u=this.e
if(u!=null)u.al()},
jt:function(a){this.kr(new F.hJ(),new F.fA())},
ci:function(){return this.jt(null)},
cE:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cE()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.d(u,t)
s=u[t]
u=s.r
if(u!=null)s.sez(new V.B(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.B(r,q,u).A(0,Math.sqrt(r*r+q*q+u*u))
if(!J.O(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.L(null)}}}}u=this.e
if(u!=null)u.al()},
jD:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.ba()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b9().a)!==0)++r
if((s&$.b8().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.cS().a)!==0)++r
if((s&$.cT().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.b7().a)!==0)++r
q=a1.gd0(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d_])
for(m=0,l=0;l<r;++l){k=a1.jx(l)
j=k.gd0(k)
C.a.q(n,l,new Z.d_(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.d(t,i)
h=t[i].kn(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.av(t,34962,e)
C.b.dS(t,34962,new Float32Array(H.bS(o)),35044)
C.b.av(t,34962,null)
d=new Z.d0(new Z.e1(34962,e),n,a1)
d.she(H.b([],[Z.bj]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)}a=Z.jz(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bj(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)}a=Z.jz(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bj(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].c
b.a.a.B()
C.a.h(c,b.e)}a=Z.jz(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bj(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
ak:function(a){var u=this.e
if(u!=null)u.L(a)},
a2:function(){return this.ak(null)},
$inW:1}
F.fR.prototype={
jp:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a9],"$aa")
u=H.b([],[F.a2])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.c9(s,p,o))}}return u},
jq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a9],"$aa")
u=H.b([],[F.a2])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.c9(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c9(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c9(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c9(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
cR:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.b4(0,p,n)){p.b2()
break}}}}},
cQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gjI(s)
if(t)s.b2()}},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cr())s=!1
return s},
cq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cp())s=!1
return s},
cE:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.B(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.B(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.L(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sh6:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")}}
F.fS.prototype={
gm:function(a){return this.b.length},
cR:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.b4(0,p,n)){p.b2()
break}}}}},
cQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.d(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
O:function(){return this.G("")},
shg:function(a){this.b=H.h(a,"$ia",[F.b2],"$aa")}}
F.fT.prototype={
gm:function(a){return this.b.length},
kM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.L(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sc7:function(a){this.b=H.h(a,"$ia",[F.bm],"$aa")}}
F.a9.prototype={
cu:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.e0(this.cx,s,p,u,t,r,q,a,o)},
jK:function(){return this.cu(null)},
sa3:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sez:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.I(a)))
if(!J.O(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a2()}},
seP:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdP:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
kn:function(a){var u,t
if(a.v(0,$.ba())){u=this.f
t=[P.q]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b9())){u=this.r
t=[P.q]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b8())){u=this.x
t=[P.q]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.bb())){u=this.y
t=[P.q]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.bc())){u=this.z
t=[P.q]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cS())){u=this.Q
t=[P.q]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cT())){u=this.Q
t=[P.q]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c1()))return H.b([this.ch],[P.q])
else if(a.v(0,$.b7())){u=this.cx
t=[P.q]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.q])},
cr:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cB()
this.d.X(0,new F.hO(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.al()}return!0},
cp:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cB()
this.d.X(0,new F.hN(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.al()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.ad(J.an(this.e),0))
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
s=C.a.l(u,", ")
return a+"{"+s+"}"},
O:function(){return this.G("")}}
F.hO.prototype={
$1:function(a){var u,t
H.e(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hN.prototype={
$1:function(a){var u,t
H.e(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hE.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a2()
return!0},
js:function(a,b,c,d,e,f,g,h,i){var u=F.e0(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jr:function(a,b,c,d,e,f){return this.js(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cr()
return!0},
cq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cp()
return!0},
jE:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.B()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sj1:function(a){this.c=H.h(a,"$ia",[F.a9],"$aa")}}
F.hF.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.d(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.d(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
X:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.X(this.b,b)
C.a.X(this.c,new F.hG(this,b))
C.a.X(this.d,new F.hH(this,b))},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sh7:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")},
sh8:function(a){this.c=H.h(a,"$ia",[F.a2],"$aa")},
sh9:function(a){this.d=H.h(a,"$ia",[F.a2],"$aa")}}
F.hG.prototype={
$1:function(a){H.e(a,"$ia2")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:6}
F.hH.prototype={
$1:function(a){var u
H.e(a,"$ia2")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:6}
F.hI.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.d(u,s)
return u[s]}else{if(b<0)return H.d(u,b)
return u[b]}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
shh:function(a){this.b=H.h(a,"$ia",[F.b2],"$aa")},
shi:function(a){this.c=H.h(a,"$ia",[F.b2],"$aa")}}
F.hK.prototype={}
F.hJ.prototype={
b4:function(a,b,c){return J.O(b.f,c.f)}}
F.hL.prototype={}
F.fA.prototype={
b5:function(a){var u,t,s,r
H.h(a,"$ia",[F.a9],"$aa")
u=V.cB()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.B(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)a[s].sez(u)
return}}
F.hM.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sc7:function(a){this.b=H.h(a,"$ia",[F.bm],"$aa")}}
O.dq.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.S()
this.dy=u}return u},
a9:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.L(a)},
fK:function(){return this.a9(null)},
dB:function(a){H.e(a,"$iz")
this.a=null
this.a9(a)},
iz:function(){return this.dB(null)},
hz:function(a,b){var u=V.ai
u=new D.bE(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a9(u)},
hB:function(a,b){var u=V.ai
u=new D.bF(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a9(u)},
df:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a5(u.e.length+3,4)*4
s=C.f.a5(u.f.length+3,4)*4
r=C.f.a5(u.r.length+3,4)*4
q=C.f.a5(u.x.length+3,4)*4
p=C.f.a5(u.y.length+3,4)*4
o=C.f.a5(u.z.length+3,4)*4
n=C.f.a5(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.ba()
if(a0){b=$.b9()
a7=new Z.aU(a7.a|b.a)}if(a1){b=$.b8()
a7=new Z.aU(a7.a|b.a)}if(a2){b=$.bb()
a7=new Z.aU(a7.a|b.a)}if(a3){b=$.bc()
a7=new Z.aU(a7.a|b.a)}if(a5){b=$.b7()
a7=new Z.aU(a7.a|b.a)}return new A.fq(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.h(a,"$ia",[T.cq],"$aa")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
aI:function(a){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aq(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
t.toString
s=$.hD
if(s==null){s=new V.B(0,0,1)
$.hD=s}t.a=s
s=$.hC
if(s==null){s=new V.B(0,1,0)
$.hC=s}t.b=s
s=$.hB
if(s==null){s=new V.B(-1,0,0)
$.hB=s}t.c=s
s=t.d
if(s!=null){r=s.bd(a,t)
if(r!=null){s=r.bc(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(q*q+p*p+o*o))
o=r.bc(t.b)
p=o.a
q=o.b
s=o.c
t.b=o.A(0,Math.sqrt(p*p+q*q+s*s))
s=r.bc(t.c)
q=s.a
p=s.b
o=s.c
t.c=s.A(0,Math.sqrt(q*q+p*p+o*o))}}}},
kO:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.df()
t=a4.fr.k(0,u.aj)
if(t==null){t=A.ma(u,a4.a)
s=t.b
if(s.length===0)H.p(P.u("May not cache a shader with no name."))
if(a4.fr.bo(s))H.p(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bq
u=a5.e
if(!(u instanceof Z.d0)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.aw()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cq()
o.a.cq()
o=o.e
if(o!=null)o.al()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jE()
n=n.e
if(n!=null)n.al()}l=a5.d.jD(new Z.hQ(a4.a),q)
l.aS($.ba()).e=this.a.Q.c
if(u)l.aS($.b9()).e=this.a.cx.c
if(p)l.aS($.b8()).e=this.a.ch.c
if(r.rx)l.aS($.bb()).e=this.a.cy.c
if(o)l.aS($.bc()).e=this.a.db.c
if(r.x1)l.aS($.b7()).e=this.a.dx.c
a5.e=l}u=T.cq
k=H.b([],[u])
p=this.a
o=a4.a
C.b.eW(o,p.r)
p.x.k6()
if(r.fx){p=this.a
n=a4.dx.ga0()
p=p.dy
p.toString
p.an(n.ae(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga0().F(0,a4.dx.ga0())
a4.cx=n}p=p.fr
p.toString
p.an(n.ae(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkJ().F(0,a4.dx.ga0())
a4.ch=n}p=p.fy
p.toString
p.an(n.ae(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.an(C.r.ae(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.an(C.r.ae(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.an(C.r.ae(n,!0))}if(r.ax>0){j=this.e.a.length
p=this.a.k4
C.b.U(p.a,p.d,j)
for(p=[P.q],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.d(m,i)
m=m[i]
n.toString
H.e(m,"$iai")
n=n.r1
if(i>=n.length)return H.d(n,i)
n=n[i]
h=new Float32Array(H.bS(H.h(m.ae(0,!0),"$ia",p,"$aa")))
C.b.eU(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.f.d)
p=this.a
n=this.f.d
p.ah(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.f.e)
p=this.a
n=this.f.e
p.aa(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.r.d)
p=this.a
n=this.r.d
p.ah(p.y1,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.r.e)
p=this.a
n=this.r.e
p.aa(p.y2,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.aj
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.x.d)
p=this.a
n=this.x.d
p.ah(p.bq,p.br,n)
n=this.a
p=this.x.f
n=n.aj
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.x.e)
p=this.a
n=this.x.e
p.aa(p.dZ,p.br,n)
n=this.a
p=this.x.f
n=n.aj
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bs
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.y.d)
p=this.a
n=this.y.d
p.ah(p.e_,p.bt,n)
n=this.a
p=this.y.f
n=n.bs
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.y.e)
p=this.a
n=this.y.e
p.aa(p.e0,p.bt,n)
n=this.a
p=this.y.f
n=n.bs
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bu
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bw
C.b.R(n.a,n.d,g)
break
case C.h:this.W(k,this.z.d)
p=this.a
n=this.z.d
p.ah(p.e1,p.bv,n)
n=this.a
p=this.z.f
n=n.bu
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bw
C.b.R(p.a,p.d,g)
break
case C.i:this.W(k,this.z.e)
p=this.a
n=this.z.e
p.aa(p.e2,p.bv,n)
n=this.a
p=this.z.f
n=n.bu
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bw
C.b.R(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ed
C.b.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cw
if(e>=m.length)return H.d(m,e)
b=m[e]
m=f.bc(c.gdW(c))
g=m.a
a=m.b
a0=m.c
a0=m.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.gai(c)
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ee
C.b.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cz
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gb9(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bb(c.gb9(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gai(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcj()
g=b.e
C.b.R(g.a,g.d,m)
m=c.gck()
g=b.f
C.b.R(g.a,g.d,m)
m=c.gcl()
g=b.r
C.b.R(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ef
C.b.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cA
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gb9(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdW(c).lf()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bb(c.gb9(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gai(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glc()
g=b.f
C.b.R(g.a,g.d,m)
m=c.glb()
g=b.r
C.b.R(g.a,g.d,m)
m=c.gcj()
g=b.x
C.b.R(g.a,g.d,m)
m=c.gck()
g=b.y
C.b.R(g.a,g.d,m)
m=c.gcl()
g=b.z
C.b.R(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eg
C.b.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
g=this.a.cB
if(e>=g.length)return H.d(g,e)
b=g[e]
g=c.f
H.h(k,"$ia",m,"$aa")
if(g!=null)if(!C.a.V(k,g)){g.a=k.length
C.a.h(k,g)}g=c.a
a=b.d
a0=g.a
a1=g.b
g=g.c
C.b.w(a.a,a.d,a0,a1,g)
g=c.b
a1=b.b
a0=g.a
a=g.b
g=g.c
C.b.w(a1.a,a1.d,a0,a,g)
g=c.c
a=b.c
a0=g.a
a1=g.b
g=g.c
C.b.w(a.a,a.d,a0,a1,g)
g=f.bc(c.a)
a1=g.a
a0=g.b
a=g.c
a=g.A(0,Math.sqrt(a1*a1+a0*a0+a*a))
a0=b.e
a1=a.a
g=a.b
a=a.c
C.b.w(a0.a,a0.d,a1,g,a)
a=c.e
g=b.f
C.b.w(g.a,g.d,a.a,a.b,a.c)
a=c.f
g=a!=null
if(!g||!a.d){g=b.x
C.b.U(g.a,g.d,1)}else{a0=b.r
g=!g||!a.d
a1=a0.a
a0=a0.d
if(g)C.b.U(a1,a0,0)
else C.b.U(a1,a0,a.a)
g=b.x
C.b.U(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eh
C.b.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.y,n=p.length,m=[P.q],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
a=this.a.cC
if(e>=a.length)return H.d(a,e)
b=a[e]
a=c.gcV()
H.h(k,"$ia",g,"$aa")
if(!C.a.V(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.F(0,c.ga0())
a=c.ga0()
a0=$.cj
if(a0==null){a0=new V.Z(0,0,0)
$.cj=a0}a0=a.bb(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cj
if(a==null){a=new V.Z(0,0,0)
$.cj=a}a=a2.bb(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.es()
a0=b.d
h=new Float32Array(H.bS(H.h(new V.ds(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ae(0,!0),"$ia",m,"$aa")))
C.b.eT(a0.a,a0.d,!1,h)
a0=c.gai(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gcV()
a=a0.gev(a0)
if(!a){a=b.r
C.b.U(a.a,a.d,1)}else{a=b.f
a1=a0.gev(a0)
a3=a.a
a=a.d
if(!a1)C.b.U(a3,a,0)
else C.b.U(a3,a,a0.gld(a0))
a=b.r
C.b.U(a.a,a.d,0)}a=c.gcj()
a0=b.x
C.b.R(a0.a,a0.d,a)
a=c.gck()
a0=b.y
C.b.R(a0.a,a0.d,a)
a=c.gcl()
a0=b.z
C.b.R(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.ei
C.b.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cD
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gcV()
H.h(k,"$ia",u,"$aa")
if(!C.a.V(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gb9(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdW(c)
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gli()
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcT(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bb(c.gb9(c))
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcV()
g=m.gev(m)
if(!g){m=b.x
C.b.U(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.U(a0,g,0)
else C.b.U(a0,g,m.a)
m=b.x
C.b.U(m.a,m.d,0)}m=c.gai(c)
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glg()
g=b.z
C.b.R(g.a,g.d,m)
m=c.glh()
g=b.Q
C.b.R(g.a,g.d,m)
m=c.gcj()
g=b.ch
C.b.R(g.a,g.d,m)
m=c.gck()
g=b.cx
C.b.R(g.a,g.d,m)
m=c.gcl()
g=b.cy
C.b.R(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.W(k,this.Q.d)
u=this.a
p=this.Q.d
u.ah(u.e3,u.bx,p)
break
case C.i:this.W(k,this.Q.e)
u=this.a
p=this.Q.e
u.aa(u.e4,u.bx,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga0().es()
a4.Q=p}u=u.id
u.toString
u.an(p.ae(0,!0))}if(r.dy){this.W(k,this.ch)
u=this.a
p=this.ch
u.aa(u.e5,u.e6,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.by
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.W(k,this.cx.d)
u=this.a
p=this.cx.d
u.ah(u.e7,u.bz,p)
p=this.a
u=this.cx.f
p=p.by
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.W(k,this.cx.e)
u=this.a
p=this.cx.e
u.aa(u.e8,u.bz,p)
p=this.a
u=this.cx.f
p=p.by
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bB
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bA
C.b.R(p.a,p.d,m)
break
case C.h:this.W(k,this.cy.d)
u=this.a
p=this.cy.d
u.ah(u.e9,u.bC,p)
p=this.a
u=this.cy.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bA
C.b.R(u.a,u.d,m)
break
case C.i:this.W(k,this.cy.e)
u=this.a
p=this.cy.e
u.aa(u.ea,u.bC,p)
p=this.a
u=this.cy.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bA
C.b.R(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bD
C.b.R(u.a,u.d,n)
break
case C.h:this.W(k,this.db.d)
u=this.a
n=this.db.d
u.ah(u.eb,u.bE,n)
n=this.a
u=this.db.f
n=n.bD
C.b.R(n.a,n.d,u)
break
case C.i:this.W(k,this.db.e)
u=this.a
n=this.db.e
u.aa(u.ec,u.bE,n)
n=this.a
u=this.db.f
n=n.bD
C.b.R(n.a,n.d,u)
break}C.b.cv(o,3042)
C.b.jC(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dJ(o,33984+u.a)
C.b.aR(o,3553,u.b)}}u=a5.e
u.cm(a4)
u.aT(a4)
u.l2(a4)
if(p)C.b.jW(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dJ(o,33984+u.a)
C.b.aR(o,3553,null)}}u=this.a
u.toString
C.b.eW(o,null)
u.x.jX()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.df().aj},
sfU:function(a){this.e=H.h(a,"$ia_",[V.ai],"$aa_")}}
O.fo.prototype={}
O.dr.prototype={
aN:function(){}}
O.fp.prototype={}
O.aP.prototype={
dD:function(a){var u,t
if(!J.O(this.f,a)){u=this.f
this.f=a
t=new D.P(this.b+".color",u,a,this,[V.Y])
t.b=!0
this.a.a9(t)}},
aN:function(){this.fl()
this.dD(new V.Y(1,1,1))},
sai:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aN()
u=this.a
u.a=null
u.a9(null)}this.dD(b)}}
O.fr.prototype={
iE:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.L().a)){this.ch=a
u=new D.P(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.a9(u)}},
aN:function(){this.bT()
this.iE(1)}}
O.fs.prototype={
cc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.L().a)){this.ch=a
u=new D.P(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.a9(u)}},
aN:function(){this.bT()
this.cc(100)}}
O.bP.prototype={}
T.cq.prototype={}
T.dP.prototype={}
T.h5.prototype={
gC:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u}}
T.h6.prototype={
kp:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aR(u,3553,t)
C.b.bJ(u,3553,10242,10497)
C.b.bJ(u,3553,10243,10497)
C.b.bJ(u,3553,10241,9729)
C.b.bJ(u,3553,10240,9729)
C.b.aR(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.h5()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.a4(s,"load",H.k(new T.h7(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
ko:function(a,b){return this.kp(a,!1,!1,!1,b)},
iA:function(a,b,c){var u,t,s,r
b=V.jQ(b,2)
u=V.jQ(a.width,2)
t=V.jQ(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jl(null,null)
s.width=u
s.height=t
r=H.e(C.q.f3(s,"2d"),"$ibw")
r.imageSmoothingEnabled=!1;(r&&C.D).jZ(r,a,0,0,s.width,s.height)
return P.nk(C.D.hd(r,0,0,s.width,s.height))}}}
T.h7.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iA(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aR(t,3553,this.e)
C.b.kI(t,37440,this.f?1:0)
C.b.kW(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eZ(t,3553)
C.b.aR(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.k5()}++s.e},
$S:11}
V.aX.prototype={
aG:function(a){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dp.prototype={
aG:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aG(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.h(a,"$ia",[V.at],"$aa")},
$iat:1}
V.ao.prototype={
aG:function(a){return!this.fk(a)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.fI.prototype={
aG:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bL(this.a)
t=H.bL(this.b)
return u+".."+t},
$iat:1}
V.fQ.prototype={
fq:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aG([P.l,P.K])
for(t=new H.ce(a,a.gm(a),0,[H.aa(a,"R",0)]);t.E();)u.q(0,t.d,!0)
this.siD(u)},
aG:function(a){return this.a.bo(a)},
i:function(a){return P.dK(this.a.gay(),0,null)},
siD:function(a){this.a=H.h(a,"$iF",[P.l,P.K],"$aF")},
$iat:1}
V.cn.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cs(this.a.j(0,b))
r.sa6(H.b([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
k9:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aG(a))return r}return},
i:function(a){return this.b},
siX:function(a){this.c=H.h(a,"$ia",[V.cs],"$aa")}}
V.dT.prototype={
i:function(a){var u,t
u=H.jS(this.b,"\n","\\n")
t=H.jS(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cr.prototype={
aH:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.y)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siu:function(a){var u=P.f
this.c=H.h(a,"$iF",[u,u],"$aF")}}
V.h9.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cn(this,b)
u.siX(H.b([],[V.cs]))
u.d=null
this.a.q(0,b,u)}return u},
P:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cr(this,a)
t=P.f
u.siu(new H.aG([t,t]))
this.b.q(0,a,u)}return u},
eS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dT])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.k9(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dK(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dK(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dT(j==null?k.b:j,l,o)}++o}}},
siM:function(a){this.a=H.h(a,"$iF",[P.f,V.cn],"$aF")},
siQ:function(a){this.b=H.h(a,"$iF",[P.f,V.cr],"$aF")}}
V.cs.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.d2.prototype={$ib4:1}
X.eZ.prototype={
gC:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u}}
X.dA.prototype={
gC:function(){var u=this.f
if(u==null){u=D.S()
this.f=u}return u},
aL:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.L(a)},
fN:function(){return this.aL(null)},
sb6:function(a){var u,t
if(!J.O(this.b,a)){u=this.b
if(u!=null)u.gC().M(0,this.gd5())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gd5())
u=new D.P("mover",t,this.b,this,[U.ad])
u.b=!0
this.aL(u)}},
$ib4:1,
$id2:1}
X.dN.prototype={}
V.bf.prototype={
bh:function(a){this.b=new P.f1(C.Y)
this.c=null
this.sc1(H.b([],[[P.a,W.aw]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aw]))
t=a.split("\n")
for(u=t.length,s=[W.aw],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.fZ(p,0,p.length)
m=n==null?p:n
C.k.fc(o,H.jS(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eG:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.sc1(H.b([],[[P.a,W.aw]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bp()
this.c=t}for(t=t.eS(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)this.bI(t[r])},
sc1:function(a){this.d=H.h(a,"$ia",[[P.a,W.aw]],"$aa")}}
V.jc.prototype={
$1:function(a){H.e(a,"$iaS")
P.jR(C.e.eR(this.a.gkf(),2)+" fps")},
$S:50}
V.eI.prototype={
bI:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bp:function(){var u,t,s,r
u=V.ha()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aX())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.v(new H.t("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aX())
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ao()
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.P("Num")
s=u.j(0,"Float")
s.d=s.a.P("Num")
s=u.j(0,"Sym")
s.d=s.a.P("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.P("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.P("String")
s=u.j(0,"EndComment")
s.d=s.a.P("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.P("Whitespace")
s=u.j(0,"Id")
t=s.a.P("Id")
s.d=t
s=[P.f]
t.aH(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aH(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aH(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f_.prototype={
bI:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bp:function(){var u,t,s,r
u=V.ha()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aX())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.P("Num")
t=u.j(0,"Float")
t.d=t.a.P("Num")
t=u.j(0,"Sym")
t.d=t.a.P("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.P("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.P("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.P("Whitespace")
t=u.j(0,"Id")
s=t.a.P("Id")
t.d=s
t=[P.f]
s.aH(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aH(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aH(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.f0.prototype={
bI:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bp:function(){var u,t,s
u=V.ha()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.v(new H.t("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.v(new H.t("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.v(new H.t("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.v(new H.t("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aX())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aX())
t=u.j(0,"Other").l(0,"Other")
s=new V.ao()
s.sa6(H.b([],[V.at]))
C.a.h(t.a,s)
t=V.v(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.P("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.P("String")
t=u.j(0,"Id")
s=t.a.P("Id")
t.d=s
s.aH(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.P("Attr")
s=u.j(0,"Other")
s.d=s.a.P("Other")
return u}}
V.fE.prototype={
eG:function(a){H.h(a,"$ia",[P.f],"$aa")
this.sc1(H.b([],[[P.a,W.aw]]))
this.N(C.a.l(a,"\n"),"#111")},
bI:function(a){},
bp:function(){return}}
V.fG.prototype={
dK:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.kx().gcO().k(0,H.i(u))
if(t==null)if(d){c.$0()
this.dH(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.jZ(this.c).h(0,q)
o=W.lY("radio")
o.checked=s
o.name=u
u=W.m
W.a4(o,"change",H.k(new V.fH(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.D(q,o)
n=r.createElement("span")
n.textContent=b
C.G.D(q,n)
J.jZ(this.c).h(0,r.createElement("br"))},
b0:function(a,b,c){return this.dK(a,b,c,!1)},
dH:function(a){var u,t,s,r,q
u=P.kx()
t=P.f
s=P.m6(u.gcO(),t,t)
s.q(0,this.a,a)
r=u.eL(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iw(t,new P.ir([],[]).cW(""),"",q)}}
V.fH.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dH(this.d)}},
$S:11}
V.fU.prototype={
ft:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).D(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.D(t,r)
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
o=W.m
W.a4(u,"scroll",H.k(new V.fW(s),{func:1,ret:-1,args:[o]}),!1,o)},
dM:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iH()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eS(C.a.kl(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.nL(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.D(t,l)}else{k=P.ek(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.k.D(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.D(t,o)
break}}C.k.D(this.a,t)},
f2:function(a){var u,t,s,r
u=new V.eI("dart")
u.bh("dart")
t=new V.f_("glsl")
t.bh("glsl")
s=new V.f0("html")
s.bh("html")
r=C.a.kb(H.b([u,t,s],[V.bf]),new V.fX(a))
if(r!=null)return r
u=new V.fE("plain")
u.bh("plain")
return u},
dL:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cQ(r).a4(r,"+")){C.a.q(a7,s,C.c.ao(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a4(r,"-")){C.a.q(a7,s,C.c.ao(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f2(a5)
q.eG(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.ek(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.k0(null)
i.href="#"+H.i(m)
i.textContent=a4
C.k.D(j,i)
C.x.D(k,j)
C.n.D(l,k)
C.o.D(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.y)(r),++a0)C.x.D(a,r[a0])
C.n.D(e,d)
C.n.D(e,c)
C.n.D(e,a)
C.o.D(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.y)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.E();)C.x.D(c,a3.gK())
C.n.D(e,d)
C.n.D(e,c)
C.o.D(n,e)}},
jo:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.D(this.a,t)
r=C.o.hf(t,-1)
s=H.e((r&&C.n).dn(r,-1),"$iaR").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.n.dn(r,-1),"$iaR")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).D(o,p)}},
iH:function(){var u,t,s,r
if(this.b!=null)return
u=V.ha()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ao()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ao()
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ao()
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aX())
s=u.j(0,"Other").l(0,"Other")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.P("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.P("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.P("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.P("Link")
s=u.j(0,"Other")
s.d=s.a.P("Other")
this.b=u}}
V.fW.prototype={
$1:function(a){P.kt(C.y,new V.fV(this.a))},
$S:11}
V.fV.prototype={
$0:function(){var u,t,s
u=C.e.am(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.fX.prototype={
$1:function(a){return H.e(a,"$ibf").a===this.a},
$S:51}
M.j3.prototype={
$0:function(){this.a.saf(0,F.jL(1,null,null,1))},
$S:0}
M.j4.prototype={
$0:function(){this.a.saf(0,F.l1(1,!0,!0,1,40,1))},
$S:0}
M.j5.prototype={
$0:function(){this.a.saf(0,F.l1(1,!0,!1,1,40,0))},
$S:0}
M.j6.prototype={
$0:function(){this.a.saf(0,F.nK(6,null,1,6))},
$S:0}
M.j7.prototype={
$0:function(){this.a.saf(0,F.le(30,1,15,0.5))},
$S:0}
M.j8.prototype={
$0:function(){this.a.saf(0,F.nB(120,1,2,12,0.3,3))},
$S:0}
M.j9.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dL("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dL("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a7.prototype
u.fh=u.i
u=J.dh.prototype
u.fj=u.i
u=P.n.prototype
u.fi=u.bL
u=W.M.prototype
u.bS=u.ab
u=W.ed.prototype
u.fm=u.au
u=O.dr.prototype
u.fl=u.aN
u=O.aP.prototype
u.bT=u.aN
u=V.dp.prototype
u.fk=u.aG
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ne","mI",10)
u(P,"nf","mJ",10)
u(P,"ng","mK",10)
t(P,"l0","nd",3)
s(W,"nu",4,null,["$4"],["mM"],19,0)
s(W,"nv",4,null,["$4"],["mN"],19,0)
var m
r(m=E.ah.prototype,"geE",0,0,null,["$1","$0"],["eF","kz"],1,0)
r(m,"geC",0,0,null,["$1","$0"],["eD","ky"],1,0)
r(m,"geA",0,0,null,["$1","$0"],["eB","kv"],1,0)
q(m,"gkt","ku",5)
q(m,"gkw","kx",5)
r(m=E.dS.prototype,"gd2",0,0,null,["$1","$0"],["d4","d3"],1,0)
p(m,"gkQ","eM",3)
o(m=X.dZ.prototype,"ghP","hQ",13)
o(m,"ghC","hD",13)
o(m,"ghJ","hK",4)
o(m,"ghT","hU",26)
o(m,"ghR","hS",26)
o(m,"ghX","hY",4)
o(m,"gi0","i1",4)
o(m,"ghN","hO",4)
o(m,"ghZ","i_",4)
o(m,"ghL","hM",4)
o(m,"gi2","i3",36)
o(m,"gi4","i5",13)
o(m,"gij","ik",12)
o(m,"gie","ig",12)
o(m,"gih","ii",12)
r(m=D.dk.prototype,"gdu",0,0,null,["$1","$0"],["dv","hV"],1,0)
o(m,"gi7","i8",38)
q(m,"ghw","hx",16)
q(m,"gib","ic",16)
r(D.bo.prototype,"gc6",0,0,null,["$1","$0"],["as","hE"],1,0)
n(V.X.prototype,"gm","cJ",15)
n(V.B.prototype,"gm","cJ",15)
r(m=U.cb.prototype,"gbi",0,0,null,["$1","$0"],["a_","ap"],1,0)
q(m,"ghu","hv",29)
q(m,"gi9","ia",29)
r(m=U.e_.prototype,"gbi",0,0,null,["$1","$0"],["a_","ap"],1,0)
o(m,"gho","hp",2)
o(m,"ghq","hr",2)
o(m,"ghs","ht",2)
o(m,"ghk","hl",2)
o(m,"ghm","hn",2)
o(m,"giV","iW",2)
o(m,"giT","iU",2)
o(m,"giR","iS",2)
r(m=M.d8.prototype,"gaq",0,0,null,["$1","$0"],["aB","fB"],1,0)
q(m,"ghF","hG",5)
q(m,"ghH","hI",5)
r(m=O.dq.prototype,"gfJ",0,0,null,["$1","$0"],["a9","fK"],1,0)
r(m,"giy",0,0,null,["$1","$0"],["dB","iz"],1,0)
q(m,"ghy","hz",18)
q(m,"ghA","hB",18)
r(X.dA.prototype,"gd5",0,0,null,["$1","$0"],["aL","fN"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.jr,J.a7,J.aq,P.e9,P.n,H.ce,P.aN,H.bB,H.cA,H.eE,H.fJ,H.hd,P.bh,H.c5,H.ee,P.bH,H.fb,H.fd,H.f7,P.ef,P.aW,P.az,P.e2,P.h_,P.co,P.h0,P.aS,P.ag,P.iH,P.il,P.bQ,P.e8,P.R,P.iy,P.fj,P.bx,P.f2,P.iF,P.iD,P.K,P.ar,P.af,P.aM,P.fC,P.dJ,P.e5,P.eY,P.bi,P.a,P.F,P.D,P.ap,P.f,P.ae,P.bR,P.ht,P.ip,W.eG,W.br,W.as,W.dy,W.ed,W.it,W.d9,W.au,W.ik,W.el,P.iq,P.ei,P.ie,P.J,O.a_,O.cf,E.ey,E.ah,E.fK,E.dS,Z.e1,Z.hQ,Z.d0,Z.bj,Z.aU,D.eB,D.bz,D.z,X.d1,X.di,X.f9,X.fg,X.aH,X.ft,X.hb,X.dZ,D.d5,D.a1,D.dB,D.dI,D.bo,D.dQ,D.dR,V.Y,V.aD,V.eP,V.ds,V.ai,V.a3,V.Z,V.aQ,V.dF,V.X,V.B,U.e_,M.d8,A.cY,A.ev,A.fq,A.ct,A.cx,A.cv,A.cy,A.cw,A.cz,A.by,A.dV,A.hn,F.a2,F.eT,F.b2,F.fa,F.bm,F.dH,F.fR,F.fS,F.fT,F.a9,F.hE,F.hF,F.hI,F.hK,F.hL,F.hM,O.bP,O.dr,T.h6,V.aX,V.at,V.dp,V.fI,V.fQ,V.cn,V.dT,V.cr,V.h9,X.d2,X.dN,X.dA,V.bf,V.fG,V.fU])
s(J.a7,[J.f6,J.dg,J.dh,J.aE,J.bk,J.b0,H.bI,W.bA,W.bw,W.e3,W.eJ,W.d6,W.d7,W.m,W.dc,W.e6,W.b_,W.dm,W.eb,W.dD,W.aI,W.eg,W.em,P.cZ,P.da,P.dC,P.bN,P.dG,P.dO,P.dW])
s(J.dh,[J.fD,J.bq,J.b1])
t(J.jq,J.aE)
s(J.bk,[J.df,J.de])
t(P.ff,P.e9)
s(P.ff,[H.dX,W.hX,W.al,P.eU])
t(H.t,H.dX)
s(P.n,[H.eM,H.fk,H.cC])
s(H.eM,[H.bG,H.fc])
s(P.aN,[H.fl,H.hR])
t(H.fm,H.bG)
t(H.eF,H.eE)
s(P.bh,[H.fB,H.f8,H.hr,H.hf,H.eA,H.fO,P.dz,P.aC,P.hs,P.hp,P.bO,P.eD,P.eH])
s(H.c5,[H.jg,H.h4,H.iZ,H.j_,H.j0,P.hT,P.hS,P.hU,P.hV,P.ix,P.iw,P.i2,P.i6,P.i3,P.i4,P.i5,P.i9,P.ia,P.i8,P.i7,P.h1,P.h2,P.iP,P.ii,P.ih,P.ij,P.fe,P.fi,P.iE,P.eK,P.eL,P.hx,P.hu,P.hv,P.hw,P.iz,P.iA,P.iC,P.iB,P.iL,P.iK,P.iM,P.iN,W.eN,W.i1,W.fz,W.fy,W.im,W.io,W.iv,W.iG,P.is,P.iR,P.eV,P.eW,E.fL,E.fM,E.fN,E.h8,D.eR,D.eS,F.iI,F.iS,F.iU,F.iV,F.iW,F.jd,F.je,F.jf,F.j2,F.iT,F.hO,F.hN,F.hG,F.hH,T.h7,V.jc,V.fH,V.fW,V.fV,V.fX,M.j3,M.j4,M.j5,M.j6,M.j7,M.j8,M.j9])
s(H.h4,[H.fZ,H.c3])
t(P.fh,P.bH)
s(P.fh,[H.aG,W.hW])
t(H.du,H.bI)
s(H.du,[H.cG,H.cI])
t(H.cH,H.cG)
t(H.dv,H.cH)
t(H.cJ,H.cI)
t(H.dw,H.cJ)
s(H.dw,[H.fu,H.fv,H.fw,H.fx,H.dx,H.ch])
t(P.ig,P.iH)
t(P.id,P.il)
t(P.ej,P.fj)
t(P.dY,P.ej)
s(P.bx,[P.ew,P.eO])
t(P.bg,P.h0)
s(P.bg,[P.ex,P.f1,P.hA,P.hz])
t(P.hy,P.eO)
s(P.af,[P.q,P.l])
s(P.aC,[P.bM,P.f3])
t(P.hY,P.bR)
s(W.bA,[W.A,W.cD])
s(W.A,[W.M,W.be,W.c7,W.cE])
s(W.M,[W.w,P.o])
s(W.w,[W.cW,W.eu,W.c2,W.bd,W.bv,W.aw,W.eX,W.db,W.cc,W.cd,W.dj,W.cg,W.fP,W.aR,W.dL,W.dM,W.h3,W.cp])
t(W.c6,W.e3)
t(W.e7,W.e6)
t(W.bC,W.e7)
t(W.dd,W.c7)
t(W.bp,W.m)
s(W.bp,[W.aO,W.a8,W.aJ])
t(W.ec,W.eb)
t(W.ci,W.ec)
t(W.eh,W.eg)
t(W.hc,W.eh)
t(W.hP,W.cg)
t(W.aV,W.a8)
t(W.e4,W.d7)
t(W.en,W.em)
t(W.ea,W.en)
t(W.hZ,W.hW)
t(W.i_,P.h_)
t(W.jA,W.i_)
t(W.i0,P.co)
t(W.iu,W.ed)
t(P.ir,P.iq)
t(P.ax,P.ie)
t(P.cl,P.o)
s(E.ey,[Z.d_,A.cm,T.cq])
s(D.z,[D.bE,D.bF,D.P,X.fF])
s(X.fF,[X.dn,X.bl,X.dU])
s(O.a_,[D.dk,U.cb])
s(D.eB,[U.eC,U.ad])
t(U.d3,U.ad)
t(A.fn,A.cm)
s(A.dV,[A.H,A.hj,A.hk,A.hm,A.hh,A.V,A.hi,A.G,A.hl,A.ho,A.cu,A.av,A.aj,A.ak])
t(F.fY,F.eT)
t(F.hg,F.fa)
t(F.hJ,F.hK)
t(F.fA,F.hL)
t(O.dq,O.bP)
s(O.dr,[O.fo,O.fp,O.aP])
s(O.aP,[O.fr,O.fs])
t(T.dP,T.cq)
t(T.h5,T.dP)
s(V.dp,[V.ao,V.cs])
t(X.eZ,X.dN)
s(V.bf,[V.eI,V.f_,V.f0,V.fE])
u(H.dX,H.cA)
u(H.cG,P.R)
u(H.cH,H.bB)
u(H.cI,P.R)
u(H.cJ,H.bB)
u(P.e9,P.R)
u(P.ej,P.iy)
u(W.e3,W.eG)
u(W.e6,P.R)
u(W.e7,W.as)
u(W.eb,P.R)
u(W.ec,W.as)
u(W.eg,P.R)
u(W.eh,W.as)
u(W.em,P.R)
u(W.en,W.as)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bd.prototype
C.q=W.bv.prototype
C.D=W.bw.prototype
C.k=W.aw.prototype
C.U=W.d6.prototype
C.W=W.db.prototype
C.X=W.dc.prototype
C.z=W.dd.prototype
C.Z=J.a7.prototype
C.a=J.aE.prototype
C.a_=J.de.prototype
C.f=J.df.prototype
C.r=J.dg.prototype
C.e=J.bk.prototype
C.c=J.b0.prototype
C.a6=J.b1.prototype
C.G=W.dj.prototype
C.ac=W.ci.prototype
C.M=J.fD.prototype
C.N=W.dD.prototype
C.b=P.bN.prototype
C.x=W.aR.prototype
C.o=W.dL.prototype
C.n=W.dM.prototype
C.C=J.bq.prototype
C.O=W.aV.prototype
C.P=W.cD.prototype
C.R=new P.ex(!1)
C.Q=new P.ew(C.R)
C.S=new P.fC()
C.T=new P.hA()
C.l=new P.ig()
C.d=new A.by(0,"ColorSourceType.None")
C.j=new A.by(1,"ColorSourceType.Solid")
C.h=new A.by(2,"ColorSourceType.Texture2D")
C.i=new A.by(3,"ColorSourceType.TextureCube")
C.y=new P.aM(0)
C.V=new P.aM(5e6)
C.Y=new P.f2("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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
C.E=function(hooks) { return hooks; }

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.b(u([127,2047,65535,1114111]),[P.l])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a7=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a8=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.b(u([]),[P.f])
C.a9=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.J=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.K=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.aa=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.L=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.eF(0,{},C.I,[P.f,P.f])
C.m=new P.hy(!1)})();(function staticFields(){$.aL=0
$.c4=null
$.k2=null
$.jE=!1
$.l6=null
$.kZ=null
$.lc=null
$.iX=null
$.j1=null
$.jO=null
$.bT=null
$.cN=null
$.cO=null
$.jF=!1
$.U=C.l
$.aZ=null
$.jo=null
$.k9=null
$.k8=null
$.kg=null
$.kk=null
$.cj=null
$.ko=null
$.kB=null
$.kE=null
$.kD=null
$.hB=null
$.hC=null
$.hD=null
$.kC=null
$.kj=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nS","lg",function(){return H.l5("_$dart_dartClosure")})
u($,"nT","jU",function(){return H.l5("_$dart_js")})
u($,"nZ","lh",function(){return H.aT(H.he({
toString:function(){return"$receiver$"}}))})
u($,"o_","li",function(){return H.aT(H.he({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o0","lj",function(){return H.aT(H.he(null))})
u($,"o1","lk",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o4","ln",function(){return H.aT(H.he(void 0))})
u($,"o5","lo",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o3","lm",function(){return H.aT(H.kv(null))})
u($,"o2","ll",function(){return H.aT(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o7","lq",function(){return H.aT(H.kv(void 0))})
u($,"o6","lp",function(){return H.aT(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oo","jV",function(){return P.mH()})
u($,"ou","cU",function(){return[]})
u($,"oa","lr",function(){return P.mD()})
u($,"op","lv",function(){return H.mb(H.bS(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"os","lx",function(){return P.mr("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"ot","ly",function(){return P.n5()})
u($,"oq","lw",function(){return P.ke(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"or","jW",function(){return P.kd(P.f,P.bi)})
u($,"oh","lu",function(){return Z.ay(0)})
u($,"ob","ls",function(){return Z.ay(511)})
u($,"oj","ba",function(){return Z.ay(1)})
u($,"oi","b9",function(){return Z.ay(2)})
u($,"od","b8",function(){return Z.ay(4)})
u($,"ok","bb",function(){return Z.ay(8)})
u($,"ol","bc",function(){return Z.ay(16)})
u($,"oe","cS",function(){return Z.ay(32)})
u($,"of","cT",function(){return Z.ay(64)})
u($,"og","lt",function(){return Z.ay(96)})
u($,"om","c1",function(){return Z.ay(128)})
u($,"oc","b7",function(){return Z.ay(256)})
u($,"nR","lf",function(){return new V.eP(1e-9)})
u($,"nQ","L",function(){return $.lf()})})()
var v={mangledGlobalNames:{l:"int",q:"double",af:"num",f:"String",K:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.l,[P.n,E.ah]]},{func:1,ret:P.D,args:[F.a2]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.D,args:[F.a9,P.q,P.q]},{func:1,ret:P.D,args:[D.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.m]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.l,[P.n,D.a1]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.ai]]},{func:1,ret:P.K,args:[W.M,P.f,P.f,W.br]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.K,args:[W.A]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.K,args:[W.au]},{func:1,ret:P.K,args:[P.f]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.D,args:[,]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:-1,args:[P.l,[P.n,U.ad]]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.D,args:[P.af]},{func:1,args:[W.m]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.J,args:[P.l]},{func:1,ret:P.D,args:[P.f,,]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.K,args:[[P.n,D.a1]]},{func:1,ret:P.D,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.F,P.f,P.f],args:[[P.F,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[P.ap]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.D,args:[P.aS]},{func:1,ret:P.K,args:[V.bf]},{func:1,args:[,P.f]},{func:1,ret:W.M,args:[W.A]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a7,MediaError:J.a7,Navigator:J.a7,NavigatorConcurrentHardware:J.a7,NavigatorUserMediaError:J.a7,OverconstrainedError:J.a7,PositionError:J.a7,WebGLActiveInfo:J.a7,WebGLRenderbuffer:J.a7,WebGL2RenderingContext:J.a7,SQLError:J.a7,ArrayBufferView:H.bI,Float32Array:H.dv,Int16Array:H.fu,Int32Array:H.fv,Int8Array:H.fw,Uint32Array:H.fx,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.ch,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.cW,HTMLAreaElement:W.eu,HTMLBaseElement:W.c2,HTMLBodyElement:W.bd,HTMLCanvasElement:W.bv,CanvasRenderingContext2D:W.bw,CDATASection:W.be,CharacterData:W.be,Comment:W.be,ProcessingInstruction:W.be,Text:W.be,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,HTMLDivElement:W.aw,XMLDocument:W.c7,Document:W.c7,DOMException:W.eJ,DOMImplementation:W.d6,DOMRectReadOnly:W.d7,Element:W.M,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bA,HTMLFormElement:W.eX,HTMLHeadElement:W.db,History:W.dc,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.dd,ImageData:W.b_,HTMLImageElement:W.cc,HTMLInputElement:W.cd,KeyboardEvent:W.aO,HTMLLabelElement:W.dj,Location:W.dm,HTMLAudioElement:W.cg,HTMLMediaElement:W.cg,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.A,ShadowRoot:W.A,DocumentType:W.A,Node:W.A,NodeList:W.ci,RadioNodeList:W.ci,Range:W.dD,HTMLSelectElement:W.fP,HTMLTableCellElement:W.aR,HTMLTableDataCellElement:W.aR,HTMLTableHeaderCellElement:W.aR,HTMLTableElement:W.dL,HTMLTableRowElement:W.dM,HTMLTableSectionElement:W.h3,HTMLTemplateElement:W.cp,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.hc,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,HTMLVideoElement:W.hP,WheelEvent:W.aV,Window:W.cD,DOMWindow:W.cD,Attr:W.cE,ClientRect:W.e4,DOMRect:W.e4,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SVGScriptElement:P.cl,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.cZ,WebGLFramebuffer:P.da,WebGLProgram:P.dC,WebGLRenderingContext:P.bN,WebGLShader:P.dG,WebGLTexture:P.dO,WebGLUniformLocation:P.dW})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.l9,[])
else M.l9([])})})()
//# sourceMappingURL=test.dart.js.map
