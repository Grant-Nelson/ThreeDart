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
a[c]=function(){a[c]=function(){H.nC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jk:function jk(a){this.a=a},
iP:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
f0:function(){return new P.bP("No element")},
lY:function(){return new P.bP("Too many elements")},
lX:function(){return new P.bP("Too few elements")},
t:function t(a){this.a=a},
eI:function eI(){},
bG:function bG(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fi:function fi(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fj:function fj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
cx:function cx(){},
dR:function dR(){},
lO:function(){throw H.c(P.Y("Cannot modify unmodifiable Map"))},
c0:function(a){var u,t
u=H.G(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nk:function(a){return v.types[H.ac(a)]},
nr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iaG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.c(H.ar(a))
return u},
ml:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.f1(u)
t=u[0]
s=u[1]
return new H.fG(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ci:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mi:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.G(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.I(r,p)|32)>s)return}return parseInt(a,b)},
bL:function(a){return H.m9(a)+H.jB(H.bu(a),0,null)},
m9:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibq){p=C.E(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.b.I(r,0)===36?C.b.at(r,1):r)},
ma:function(){if(!!self.location)return self.location.href
return},
ki:function(a){var u,t,s,r,q
H.em(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mj:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ar(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aS(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ar(r))}return H.ki(u)},
kj:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<0)throw H.c(H.ar(s))
if(s>65535)return H.mj(a)}return H.ki(a)},
mk:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bM:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.a7(a,0,1114111,null,null))},
bK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mh:function(a){var u=H.bK(a).getFullYear()+0
return u},
mf:function(a){var u=H.bK(a).getMonth()+1
return u},
mb:function(a){var u=H.bK(a).getDate()+0
return u},
mc:function(a){var u=H.bK(a).getHours()+0
return u},
me:function(a){var u=H.bK(a).getMinutes()+0
return u},
mg:function(a){var u=H.bK(a).getSeconds()+0
return u},
md:function(a){var u=H.bK(a).getMilliseconds()+0
return u},
A:function(a){throw H.c(H.ar(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.c(H.bW(a,b))},
bW:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
u=H.ac(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.bD(b,a,"index",null,u)
return P.dx(b,"index",null)},
nd:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
ar:function(a){return new P.aD(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dt()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.la})
u.name=""}else u.toString=H.la
return u},
la:function(){return J.an(this.dartException)},
q:function(a){throw H.c(a)},
z:function(a){throw H.c(P.aZ(a))},
aU:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.h8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kd:function(a,b){return new H.fy(a,b==null?null:b.method)},
jl:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.f5(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aS(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jl(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kd(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.le()
p=$.lf()
o=$.lg()
n=$.lh()
m=$.lk()
l=$.ll()
k=$.lj()
$.li()
j=$.ln()
i=$.lm()
h=q.ah(t)
if(h!=null)return u.$1(H.jl(H.G(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.jl(H.G(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kd(H.G(t),h))}}return u.$1(new H.hm(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dD()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aD(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dD()
return a},
bZ:function(a){var u
if(a==null)return new H.ea(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ea(a)},
ng:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nq:function(a,b,c,d,e,f){H.d(a,"$ibh")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bV:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nq)
a.$identity=u
return u},
lN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ia){u.$reflectionInfo=d
s=H.ml(u).r}else s=d
r=e?Object.create(new H.fW().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.n()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k_(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nk,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jY:H.jc
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k_(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lK:function(a,b,c,d){var u=H.jc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k_:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lK(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.ev("self")
$.c4=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.ev("self")
$.c4=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
lL:function(a,b,c,d){var u,t
u=H.jc
t=H.jY
switch(b?-1:a){case 0:throw H.c(H.mp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lM:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.ev("self")
$.c4=u}t=$.jX
if(t==null){t=H.ev("receiver")
$.jX=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lL(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()},
jF:function(a,b,c,d,e,f,g){return H.lN(a,b,H.ac(c),d,!!e,!!f,g)},
jc:function(a){return a.a},
jY:function(a){return a.c},
ev:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.f1(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aK(a,"String"))},
ne:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"double"))},
nw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"num"))},
jD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aK(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aK(a,"int"))},
l7:function(a,b){throw H.c(H.aK(a,H.c0(H.G(b).substring(2))))},
ny:function(a,b){throw H.c(H.lJ(a,H.c0(H.G(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.l7(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.ny(a,b)},
em:function(a){if(a==null)return a
if(!!J.S(a).$ia)return a
throw H.c(H.aK(a,"List<dynamic>"))},
l4:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ia)return a
if(u[b])return a
H.l7(a,b)},
l0:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
ej:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l0(J.S(a))
if(u==null)return!1
return H.kO(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jy)return a
$.jy=!0
try{if(H.ej(a,b))return a
u=H.j2(b)
t=H.aK(a,u)
throw H.c(t)}finally{$.jy=!1}},
jH:function(a,b){if(a!=null&&!H.jE(a,b))H.q(H.aK(a,H.j2(b)))
return a},
aK:function(a,b){return new H.ha("TypeError: "+P.eM(a)+": type '"+H.kT(a)+"' is not a subtype of type '"+b+"'")},
lJ:function(a,b){return new H.ew("CastError: "+P.eM(a)+": type '"+H.kT(a)+"' is not a subtype of type '"+b+"'")},
kT:function(a){var u,t
u=J.S(a)
if(!!u.$ic5){t=H.l0(u)
if(t!=null)return H.j2(t)
return"Closure"}return H.bL(a)},
nC:function(a){throw H.c(new P.eD(H.G(a)))},
mp:function(a){return new H.fL(a)},
l1:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bu:function(a){if(a==null)return
return a.$ti},
ol:function(a,b,c){return H.c_(a["$a"+H.j(c)],H.bu(b))},
cO:function(a,b,c,d){var u
H.G(c)
H.ac(d)
u=H.c_(a["$a"+H.j(c)],H.bu(b))
return u==null?null:u[d]},
ab:function(a,b,c){var u
H.G(b)
H.ac(c)
u=H.c_(a["$a"+H.j(b)],H.bu(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ac(b)
u=H.bu(a)
return u==null?null:u[b]},
j2:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jB(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.n0(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.e(b,m)
o=C.b.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nf(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.G(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jB:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cM:function(a,b,c,d){var u,t
H.G(b)
H.em(c)
H.G(d)
if(a==null)return!1
u=H.bu(a)
t=J.S(a)
if(t[b]==null)return!1
return H.kW(H.c_(t[d],u),null,c,null)},
h:function(a,b,c,d){H.G(b)
H.em(c)
H.G(d)
if(a==null)return a
if(H.cM(a,b,c,d))return a
throw H.c(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jB(c,0,null),v.mangledGlobalNames)))},
kW:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
oj:function(a,b,c){return a.apply(b,H.c_(J.S(b)["$a"+H.j(c)],H.bu(b)))},
l3:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="F"||a===-1||a===-2||H.l3(u)}return!1},
jE:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="F"||b===-1||b===-2||H.l3(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ej(a,b)}u=J.S(a).constructor
t=H.bu(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jE(a,b))throw H.c(H.aK(a,H.j2(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.kO(a,b,c,d)
if('func' in a)return c.name==="bh"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"ca" in t.prototype))return!1
r=t.prototype["$a"+"ca"]
q=H.c_(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kW(H.c_(m,u),b,p,d)},
kO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nv(h,b,g,d)},
nv:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
ok:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
nt:function(a){var u,t,s,r,q,p
u=H.G($.l2.$1(a))
t=$.iO[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iT[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.G($.kV.$2(a,u))
if(u!=null){t=$.iO[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iT[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.j1(s)
$.iO[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.iT[u]=s
return s}if(q==="-"){p=H.j1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l6(a,s)
if(q==="*")throw H.c(P.hl(u))
if(v.leafTags[u]===true){p=H.j1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l6(a,s)},
l6:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jK(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j1:function(a){return J.jK(a,!1,null,!!a.$iaG)},
nu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j1(u)
else return J.jK(u,c,null,null)},
no:function(){if(!0===$.jJ)return
$.jJ=!0
H.np()},
np:function(){var u,t,s,r,q,p,o,n
$.iO=Object.create(null)
$.iT=Object.create(null)
H.nn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l8.$1(q)
if(p!=null){o=H.nu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nn:function(){var u,t,s,r,q,p,o
u=C.a1()
u=H.bU(C.Z,H.bU(C.a3,H.bU(C.D,H.bU(C.D,H.bU(C.a2,H.bU(C.a_,H.bU(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l2=new H.iQ(q)
$.kV=new H.iR(p)
$.l8=new H.iS(o)},
bU:function(a,b){return a(b)||b},
m_:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a0("Illegal RegExp pattern ("+String(r)+")",a,null))},
nB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jM:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eA:function eA(){},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fG:function fG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
h8:function h8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fy:function fy(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
j7:function j7(a){this.a=a},
ea:function ea(a){this.a=a
this.b=null},
c5:function c5(){},
h1:function h1(){},
fW:function fW(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
ew:function ew(a){this.a=a},
fL:function fL(a){this.a=a},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f9:function f9(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
f4:function f4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bS:function(a){return a},
m8:function(a){return new Int8Array(a)},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bW(b,a))},
mZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nd(a,b,c))
return b},
bJ:function bJ(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
cg:function cg(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
nf:function(a){return J.k3(a?Object.keys(a):[],null)},
nx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ek:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jJ==null){H.no()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hl("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jO()]
if(q!=null)return q
q=H.nt(a)
if(q!=null)return q
if(typeof a=="function")return C.a4
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.jO(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
lZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.k3(new Array(a),b)},
k3:function(a,b){return J.f1(H.b(a,[b]))},
f1:function(a){H.em(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.f3.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.f2.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ek(a)},
nh:function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ek(a)},
bY:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ek(a)},
jI:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ek(a)},
ni:function(a){if(typeof a=="number")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
nj:function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
cN:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ek(a)},
lw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nh(a).n(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).w(a,b)},
jR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nj(a).t(a,b)},
lx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ni(a).u(a,b)},
ly:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bY(a).k(a,b)},
lz:function(a,b,c,d){return J.a5(a).h6(a,b,c,d)},
lA:function(a,b){return J.cN(a).I(a,b)},
en:function(a,b){return J.a5(a).iA(a,b)},
j9:function(a,b,c){return J.a5(a).iE(a,b,c)},
jS:function(a,b){return J.a5(a).F(a,b)},
lB:function(a,b){return J.cN(a).a0(a,b)},
eo:function(a,b){return J.jI(a).a8(a,b)},
lC:function(a,b,c,d){return J.a5(a).k9(a,b,c,d)},
lD:function(a){return J.a5(a).gjE(a)},
jT:function(a){return J.a5(a).gcB(a)},
cS:function(a){return J.S(a).gL(a)},
bv:function(a){return J.jI(a).gU(a)},
aC:function(a){return J.bY(a).gm(a)},
lE:function(a){return J.a5(a).gkU(a)},
ja:function(a,b){return J.a5(a).aZ(a,b)},
jU:function(a){return J.jI(a).kJ(a)},
lF:function(a,b){return J.a5(a).kO(a,b)},
lG:function(a,b,c){return J.a5(a).fp(a,b,c)},
lH:function(a,b,c){return J.cN(a).v(a,b,c)},
lI:function(a){return J.cN(a).kY(a)},
an:function(a){return J.S(a).i(a)},
a3:function a3(){},
f2:function f2(){},
dc:function dc(){},
dd:function dd(){},
fA:function fA(){},
bq:function bq(){},
b1:function b1(){},
aF:function aF(a){this.$ti=a},
jj:function jj(a){this.$ti=a},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bj:function bj(){},
db:function db(){},
f3:function f3(){},
b0:function b0(){}},P={
mB:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bV(new P.hK(u),1)).observe(t,{childList:true})
return new P.hJ(u,t,s)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
mC:function(a){self.scheduleImmediate(H.bV(new P.hL(H.k(a,{func:1,ret:-1})),0))},
mD:function(a){self.setImmediate(H.bV(new P.hM(H.k(a,{func:1,ret:-1})),0))},
mE:function(a){P.jp(C.y,H.k(a,{func:1,ret:-1}))},
jp:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a5(a.a,1000)
return P.mK(u<0?0:u,b)},
kr:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aT]})
u=C.f.a5(a.a,1000)
return P.mL(u<0?0:u,b)},
mK:function(a,b){var u=new P.eb(!0)
u.h1(a,b)
return u},
mL:function(a,b){var u=new P.eb(!1)
u.h2(a,b)
return u},
mF:function(a,b){var u,t,s
b.a=1
try{a.f3(new P.hV(b),new P.hW(b),null)}catch(s){u=H.ad(s)
t=H.bZ(s)
P.nz(new P.hX(b,u,t))}},
kD:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaA")
if(u>=4){t=b.cl()
b.a=a.a
b.c=a.c
P.cC(b,t)}else{t=H.d(b.c,"$iaX")
b.a=2
b.c=a
a.dM(t)}},
cC:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iag")
t=t.b
p=q.a
o=q.b
t.toString
P.iF(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cC(u.a,b)}t=u.a
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
if(k){H.d(m,"$iag")
t=t.b
p=m.a
o=m.b
t.toString
P.iF(null,null,t,p,o)
return}j=$.V
if(j!=l)$.V=l
else j=null
t=b.c
if(t===8)new P.i0(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.i_(s,b,m).$0()}else if((t&2)!==0)new P.hZ(u,s,b).$0()
if(j!=null)$.V=j
t=s.b
if(!!J.S(t).$ica){if(t.a>=4){i=H.d(o.c,"$iaX")
o.c=null
b=o.bo(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kD(t,o)
return}}h=b.b
i=H.d(h.c,"$iaX")
h.c=null
b=h.bo(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.d(p,"$iag")
h.a=8
h.c=p}u.a=h
t=h}},
n3:function(a,b){if(H.ej(a,{func:1,args:[P.L,P.aq]}))return H.k(a,{func:1,ret:null,args:[P.L,P.aq]})
if(H.ej(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.c(P.jb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n2:function(){var u,t
for(;u=$.bT,u!=null;){$.cL=null
t=u.b
$.bT=t
if(t==null)$.cK=null
u.a.$0()}},
n7:function(){$.jz=!0
try{P.n2()}finally{$.cL=null
$.jz=!1
if($.bT!=null)$.jP().$1(P.kX())}},
kS:function(a){var u=new P.dZ(H.k(a,{func:1,ret:-1}))
if($.bT==null){$.cK=u
$.bT=u
if(!$.jz)$.jP().$1(P.kX())}else{$.cK.b=u
$.cK=u}},
n6:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bT
if(u==null){P.kS(a)
$.cL=$.cK
return}t=new P.dZ(a)
s=$.cL
if(s==null){t.b=u
$.cL=t
$.bT=t}else{t.b=s.b
s.b=t
$.cL=t
if(t.b==null)$.cK=t}},
nz:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.V
if(C.l===t){P.iH(null,null,C.l,a)
return}t.toString
P.iH(null,null,t,H.k(t.cu(a),u))},
kq:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.jp(a,b)}return P.jp(a,H.k(t.cu(b),u))},
mt:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aT]}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.kr(a,b)}s=t.e3(b,P.aT)
$.V.toString
return P.kr(a,H.k(s,u))},
iF:function(a,b,c,d,e){var u={}
u.a=d
P.n6(new P.iG(u,e))},
kP:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kQ:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
n4:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
iH:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cu(d):c.jF(d,-1)
P.kS(d)},
hK:function hK(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
eb:function eb(a){this.a=a
this.b=null
this.c=0},
io:function io(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aX:function aX(a,b,c,d,e){var _=this
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
hU:function hU(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a
this.b=null},
fX:function fX(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
cm:function cm(){},
fY:function fY(){},
aT:function aT(){},
ag:function ag(a,b){this.a=a
this.b=b},
iy:function iy(){},
iG:function iG(a,b){this.a=a
this.b=b},
i6:function i6(){},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
m1:function(a,b,c,d,e){return new H.aH([d,e])},
m2:function(a,b,c){H.em(a)
return H.h(H.ng(a,new H.aH([b,c])),"$ik4",[b,c],"$ak4")},
k5:function(a,b){return new H.aH([a,b])},
dh:function(a,b,c,d){return new P.i4([d])},
jv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mJ:function(a,b,c){var u=new P.e4(a,b,[c])
u.c=a.e
return u},
lW:function(a,b,c){var u,t
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.cR()
C.a.h(t,a)
try{P.n1(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.ko(b,H.l4(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
ji:function(a,b,c){var u,t,s
if(P.jA(a))return b+"..."+c
u=new P.ae(b)
t=$.cR()
C.a.h(t,a)
try{s=u
s.a=P.ko(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function(a){var u,t
for(u=0;t=$.cR(),u<t.length;++u)if(a===t[u])return!0
return!1},
n1:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.E()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.E();o=n,n=m){m=u.gM();++s
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
m3:function(a,b,c){var u=P.m1(null,null,null,b,c)
a.a_(0,new P.fb(u,b,c))
return u},
k6:function(a,b){var u,t,s
u=P.dh(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)u.h(0,H.x(a[s],b))
return u},
jm:function(a){var u,t
u={}
if(P.jA(a))return"{...}"
t=new P.ae("")
try{C.a.h($.cR(),a)
t.a+="{"
u.a=!0
a.a_(0,new P.ff(u,t))
t.a+="}"}finally{u=$.cR()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
i4:function i4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bQ:function bQ(a){this.a=a
this.c=this.b=null},
e4:function e4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(){},
T:function T(){},
fe:function fe(){},
ff:function ff(a,b){this.a=a
this.b=b},
bH:function bH(){},
ip:function ip(){},
fg:function fg(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
ib:function ib(){},
e5:function e5(){},
ee:function ee(){},
mw:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mx(!1,b,c,d)
return},
mx:function(a,b,c,d){var u,t,s
u=$.lo()
if(u==null)return
t=0===c
if(t&&!0)return P.js(u,b)
s=b.length
d=P.b5(c,d,s,null,null,null)
if(t&&d===s)return P.js(u,b)
return P.js(u,b.subarray(c,d))},
js:function(a,b){if(P.mz(b))return
return P.mA(a,b)},
mA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
mz:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
my:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
n5:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bY(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bU()
if((s&127)!==s)return t-b}return c-b},
jW:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
bx:function bx(){},
bf:function bf(){},
eK:function eK(){},
eZ:function eZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eY:function eY(a){this.a=a},
ht:function ht(a){this.a=a},
hv:function hv(){},
iw:function iw(a){this.b=this.a=0
this.c=a},
hu:function hu(a){this.a=a},
iu:function iu(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mi(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
lT:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bL(a)+"'"},
m4:function(a,b,c,d){var u,t
H.x(b,d)
u=J.lZ(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
m5:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.E();)C.a.h(t,H.x(s.gM(),c))
if(b)return t
return H.h(J.f1(t),"$ia",u,"$aa")},
dE:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaF",[u],"$aaF")
t=a.length
c=P.b5(b,c,t,null,null,null)
return H.kj(b>0||c<t?C.a.fv(a,b,c):a)}if(!!J.S(a).$icg)return H.mk(a,b,P.b5(b,c,a.length,null,null,null))
return P.mr(a,b,c)},
mr:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a7(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a7(c,b,J.aC(a),null,null))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.a7(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gM())
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.a7(c,b,s,null,null))
r.push(t.gM())}return H.kj(r)},
mn:function(a,b,c){return new H.f4(a,H.m_(a,!1,!0,!1))},
ko:function(a,b,c){var u=J.bv(b)
if(!u.E())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.E())}else{a+=H.j(u.gM())
for(;u.E();)a=a+c+H.j(u.gM())}return a},
ku:function(){var u=H.ma()
if(u!=null)return P.mv(u,0,null)
throw H.c(P.Y("'Uri.base' is not supported"))},
ef:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lu().b
if(typeof b!=="string")H.q(H.ar(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.ab(c,"bx",0))
t=c.gk8().cC(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bM(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lP:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
k0:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lT(a)},
eq:function(a){return new P.aD(!1,null,null,a)},
jb:function(a,b,c){return new P.aD(!0,a,b,c)},
dx:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",f))
return b}return c},
bD:function(a,b,c,d,e){var u=H.ac(e==null?J.aC(b):e)
return new P.f_(b,u,!0,a,c,"Index out of range")},
Y:function(a){return new P.hn(a)},
hl:function(a){return new P.hk(a)},
kn:function(a){return new P.bP(a)},
aZ:function(a){return new P.ez(a)},
u:function(a){return new P.e1(a)},
a0:function(a,b,c){return new P.eU(a,b,c)},
m6:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jL:function(a){H.nx(a)},
mv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(t===0)return P.kt(b>0||c<c?C.b.v(a,b,c):a,5,null).gfa()
else if(t===32)return P.kt(C.b.v(a,u,c),0,null).gfa()}s=new Array(8)
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
if(P.kR(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l5()
if(q>=b)if(P.kR(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.X()
if(typeof m!=="number")return H.A(m)
if(l<m)m=l
if(typeof n!=="number")return n.X()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.X()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.X()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.ac(a,"..",n)))i=m>n+2&&C.b.ac(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.ac(a,"file",b)){if(p<=b){if(!C.b.ac(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.v(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aX(a,n,m,"/");++m;++l;++c}else{a=C.b.v(a,b,n)+"/"+C.b.v(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.ac(a,"http",b)){if(s&&o+3===n&&C.b.ac(a,"80",o+1))if(b===0&&!0){a=C.b.aX(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.v(a,b,o)+C.b.v(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.ac(a,"https",b)){if(s&&o+4===n&&C.b.ac(a,"443",o+1))if(b===0&&!0){a=C.b.aX(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.v(a,b,o)+C.b.v(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.v(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.ie(a,q,p,o,n,m,l,j)}return P.mM(a,b,c,q,p,o,n,m,l,j)},
kw:function(a,b){var u=P.f
return C.a.ke(H.b(a.split("&"),[u]),P.k5(u,u),new P.hs(b),[P.H,P.f,P.f])},
mu:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hp(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.el(C.b.v(a,q,r),null,null)
if(typeof n!=="number")return n.fm()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.el(C.b.v(a,q,c),null,null)
if(typeof n!=="number")return n.fm()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hq(a)
t=new P.hr(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a0(a,r)
if(n===58){if(r===b){++r
if(C.b.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaC(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mu(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aS(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
mM:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mT(a,b,d)
else{if(d===b)P.cH(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mU(a,u,e-1):""
s=P.mQ(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.A(g)
q=r<g?P.mS(P.el(C.b.v(a,r,g),new P.iq(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mR(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.X()
o=h<i?P.jw(a,h+1,i,null):null
return new P.bR(j,t,s,q,p,o,i<c?P.mP(a,i+1,c):null)},
kH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cH:function(a,b,c){throw H.c(P.a0(c,a,b))},
mS:function(a,b){if(a!=null&&a===P.kH(b))return
return a},
mQ:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a0(a,u)!==93)P.cH(a,b,"Missing end `]` to match `[` in host")
P.kv(a,b+1,u)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.kv(a,b,c)
return"["+a+"]"}return P.mW(a,b,c)},
mW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.A(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.kN(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ae("")
n=C.b.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ae("")
if(t<u){s.a+=C.b.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cH(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kI(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mT:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kK(C.b.I(a,b)))P.cH(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cH(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.mN(t?a.toLowerCase():a)},
mN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mU:function(a,b,c){return P.cI(a,b,c,C.a7,!1)},
mR:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cI(a,b,c,C.K,!0):C.r.l8(d,new P.ir(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a4(r,"/"))r="/"+r
return P.mV(r,e,f)},
mV:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.mX(a,!u||c)
return P.mY(a)},
jw:function(a,b,c,d){var u,t
u={}
H.h(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.eq("Both query and queryParameters specified"))
return P.cI(a,b,c,C.u,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.a_(0,new P.is(new P.it(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mP:function(a,b,c){return P.cI(a,b,c,C.u,!0)},
kN:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.a0(a,b+1)
s=C.b.a0(a,u)
r=H.iP(t)
q=H.iP(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aS(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bM(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
kI:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.iS(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.b.I("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.b.I("0123456789ABCDEF",p&15))
q+=3}}return P.dE(t,0,null)},
cI:function(a,b,c,d,e){var u=P.kM(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.b.v(a,b,c):u},
kM:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.X()
if(typeof c!=="number")return H.A(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kN(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cH(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kI(q)}}if(r==null)r=new P.ae("")
r.a+=C.b.v(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.A(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.X()
if(s<c)r.a+=C.b.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kL:function(a){if(C.b.a4(a,"."))return!0
return C.b.eF(a,"/.")!==-1},
mY:function(a){var u,t,s,r,q,p,o
if(!P.kL(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
mX:function(a,b){var u,t,s,r,q,p
if(!P.kL(a))return!b?P.kJ(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaC(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaC(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.kJ(u[0]))}return C.a.l(u,"/")},
kJ:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kK(J.lA(a,0)))for(t=1;t<u;++t){s=C.b.I(a,t)
if(s===58)return C.b.v(a,0,t)+"%3A"+C.b.at(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mO:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eq("Invalid URL encoding"))}}return u},
jx:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.b.v(a,b,c)
else q=new H.t(C.b.v(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.b.I(a,t)
if(s>127)throw H.c(P.eq("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.eq("Truncated URI"))
C.a.h(q,P.mO(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.hu(!1).cC(q)},
kK:function(a){var u=a|32
return 97<=u&&u<=122},
kt:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a0("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a0("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaC(u)
if(q!==44||s!==o+7||!C.b.ac(a,"base64",o+1))throw H.c(P.a0("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kr(a,n,t)
else{m=P.kM(a,n,t,C.u,!0)
if(m!=null)a=C.b.aX(a,n,t,m)}return new P.ho(a,u,c)},
n_:function(){var u,t,s,r,q
u=P.m6(22,new P.iC(),!0,P.M)
t=new P.iB(u)
s=new P.iD()
r=new P.iE()
q=H.d(t.$2(0,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iM")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iM")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iM"),"]",5)
q=H.d(t.$2(9,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iM"),"az",21)
q=H.d(t.$2(21,245),"$iM")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kR:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.lv()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
N:function N(){},
ah:function ah(a,b){this.a=a
this.b=b},
o:function o(){},
aM:function aM(a){this.a=a},
eG:function eG(){},
eH:function eH(){},
bg:function bg(){},
dt:function dt(){},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f_:function f_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hn:function hn(a){this.a=a},
hk:function hk(a){this.a=a},
bP:function bP(a){this.a=a},
ez:function ez(a){this.a=a},
fz:function fz(){},
dD:function dD(){},
eD:function eD(a){this.a=a},
e1:function e1(a){this.a=a},
eU:function eU(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(){},
l:function l(){},
n:function n(){},
aN:function aN(){},
a:function a(){},
H:function H(){},
F:function F(){},
af:function af(){},
L:function L(){},
aq:function aq(){},
f:function f(){},
ae:function ae(a){this.a=a},
hs:function hs(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(a,b){this.a=a
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
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(){},
it:function it(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(){},
iB:function iB(a){this.a=a},
iD:function iD(){},
iE:function iE(){},
ie:function ie(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hP:function hP(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nb:function(a,b){var u={}
a.a_(0,new P.iI(u))
return u},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
eR:function eR(){},
eS:function eS(){},
i3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i5:function i5(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cj:function cj(){},
p:function p(){},
M:function M(){},
cV:function cV(){},
d7:function d7(){},
dv:function dv(){},
bO:function bO(){},
dA:function dA(){},
dQ:function dQ(){}},W={
jV:function(a){var u=document.createElement("a")
return u},
jZ:function(a,b){var u=document.createElement("canvas")
return u},
lR:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ag(u,a,b,c)
t.toString
u=W.B
u=new H.cz(new W.am(t),H.k(new W.eJ(),{func:1,ret:P.N,args:[u]}),[u])
return H.d(u.gaL(u),"$iP")},
lS:function(a){H.d(a,"$ibA")
return"wheel"},
c8:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lE(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ad(s)}return u},
lV:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$icc")
try{u.type=a}catch(s){H.ad(s)}return u},
i2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kF:function(a,b,c,d){var u,t
u=W.i2(W.i2(W.i2(W.i2(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u,t
u=W.kU(new W.hT(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lz(a,b,u,!1)}return new W.hS(a,b,u,!1,[e])},
kE:function(a){var u,t
u=W.jV(null)
t=window.location
u=new W.br(new W.ia(u,t))
u.fM(a)
return u},
mG:function(a,b,c,d){H.d(a,"$iP")
H.G(b)
H.G(c)
H.d(d,"$ibr")
return!0},
mH:function(a,b,c,d){var u,t,s
H.d(a,"$iP")
H.G(b)
H.G(c)
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
kG:function(){var u,t,s,r,q
u=P.f
t=P.k6(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.il(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.ik(t,P.dh(null,null,null,u),P.dh(null,null,null,u),P.dh(null,null,null,u),null)
t.fZ(null,new H.fj(C.A,r,[s,u]),q,null)
return t},
kU:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.l)return a
return u.e3(a,b)},
w:function w(){},
cT:function cT(){},
ep:function ep(){},
c2:function c2(){},
bc:function bc(){},
bw:function bw(){},
bd:function bd(){},
c6:function c6(){},
eC:function eC(){},
ax:function ax(){},
c7:function c7(){},
eF:function eF(){},
d3:function d3(){},
d4:function d4(){},
hO:function hO(a,b){this.a=a
this.b=b},
P:function P(){},
eJ:function eJ(){},
m:function m(){},
bA:function bA(){},
eT:function eT(){},
d8:function d8(){},
d9:function d9(){},
bC:function bC(){},
da:function da(){},
cc:function cc(){},
aO:function aO(){},
df:function df(){},
di:function di(){},
a9:function a9(){},
am:function am(a){this.a=a},
B:function B(){},
ch:function ch(){},
dw:function dw(){},
fM:function fM(){},
aS:function aS(){},
dF:function dF(){},
dG:function dG(){},
h0:function h0(){},
cn:function cn(){},
aI:function aI(){},
aJ:function aJ(){},
h7:function h7(){},
bp:function bp(){},
aW:function aW(){},
cA:function cA(){},
cB:function cB(){},
e0:function e0(){},
e6:function e6(){},
hN:function hN(){},
hQ:function hQ(a){this.a=a},
hR:function hR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hT:function hT(a){this.a=a},
br:function br(a){this.a=a},
as:function as(){},
ds:function ds(a){this.a=a},
fw:function fw(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(){},
ic:function ic(){},
id:function id(){},
ik:function ik(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
il:function il(){},
ij:function ij(){},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(){},
ia:function ia(a,b){this.a=a
this.b=b},
eg:function eg(a){this.a=a},
ix:function ix(a){this.a=a},
e_:function e_(){},
e2:function e2(){},
e3:function e3(){},
e7:function e7(){},
e8:function e8(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
ei:function ei(){}},O={
jd:function(a){var u=new O.Z([a])
u.c_(a)
return u},
Z:function Z(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ce:function ce(){this.b=this.a=null},
k7:function(){var u,t,s
u=new O.dl()
u.sha(O.jd(V.aj))
u.e.bj(u.ghI(),u.ghK())
t=new O.aP(u,"emission")
t.c=C.d
t.f=new V.a_(0,0,0)
u.f=t
t=new O.aP(u,"ambient")
t.c=C.d
t.f=new V.a_(0,0,0)
u.r=t
t=new O.aP(u,"diffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.x=t
t=new O.aP(u,"invDiffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.y=t
t=new O.fp(u,"specular")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=100
u.z=t
t=new O.fm(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aP(u,"reflect")
t.c=C.d
t.f=new V.a_(0,0,0)
u.cx=t
t=new O.fo(u,"refract")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=1
u.cy=t
t=new O.fl(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dg()
t.c_(D.a1)
t.sfO(H.b([],[D.d2]))
t.sfR(H.b([],[D.bl]))
t.sfS(H.b([],[D.dC]))
t.sfT(H.b([],[D.dJ]))
t.sfU(H.b([],[D.dK]))
t.sfV(H.b([],[D.dL]))
t.Q=null
t.ch=null
t.da(t.ghG(),t.gii(),t.gim())
u.dx=t
s=t.Q
if(s==null){s=D.Q()
t.Q=s
t=s}else t=s
t.h(0,u.giH())
t=u.dx
s=t.ch
if(s==null){s=D.Q()
t.ch=s
t=s}else t=s
t.h(0,u.gh_())
u.dy=null
return u},
dl:function dl(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fl:function fl(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dm:function dm(){},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fo:function fo(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fp:function fp(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bo:function bo(){}},E={
jg:function(a,b,c,d,e,f){var u=new E.ai()
u.a=d
u.b=!0
u.sfL(0,O.jd(E.ai))
u.y.bj(u.gks(),u.gkv())
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
u.sab(0,e)
u.sbf(f)
u.saJ(c)
return u},
mo:function(a,b){var u=new E.fH(a,b)
u.fG(a,b)
return u},
ms:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibw)return E.kp(a,!0,!0,!0,!1)
t=W.jZ(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcB(a).h(0,t)
r=E.kp(t,!0,!0,!0,!1)
r.a=a
return r},
kp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dM()
t=P.m2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.d6(a,"webgl",t)
s=H.d(s==null?C.q.d6(a,"experimental-webgl",t):s,"$ibO")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mo(s,a)
r=new T.h2(s)
r.b=H.ac((s&&C.c).d8(s,3379))
r.c=H.ac(C.c.d8(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dT(a)
q=new X.f6()
q.c=new X.au(!1,!1,!1)
q.siw(P.dh(null,null,null,P.l))
r.b=q
q=new X.fq(r)
q.f=0
q.r=V.bm()
q.x=V.bm()
q.Q=1
q.ch=1
r.c=q
q=new X.fd(r)
q.r=0
q.x=V.bm()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.h6(r)
q.e=0
q.f=V.bm()
q.r=V.bm()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shm(H.b([],[[P.cm,P.L]]))
q=r.z
p=document
o=W.a9
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a8(p,"contextmenu",H.k(r.ghS(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a8(a,"focus",H.k(r.ghY(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a8(a,"blur",H.k(r.ghM(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a8(p,"keyup",H.k(r.gi1(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a8(p,"keydown",H.k(r.gi_(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a8(a,"mousedown",H.k(r.gi5(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a8(a,"mouseup",H.k(r.gi9(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a8(a,"mousemove",H.k(r.gi7(),n),!1,o))
k=r.z
j=W.aW;(k&&C.a).h(k,W.a8(a,H.G(W.lS(a)),H.k(r.gib(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a8(p,"mousemove",H.k(r.ghU(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a8(p,"mouseup",H.k(r.ghW(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a8(p,"pointerlockchange",H.k(r.gie(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a8(a,"touchstart",H.k(r.git(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a8(a,"touchend",H.k(r.gip(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a8(a,"touchmove",H.k(r.gir(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ah(Date.now(),!1)
u.cy=0
u.dO()
return u},
eu:function eu(){},
ai:function ai(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a}},Z={
jt:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.c.ay(a,b,u)
C.c.e5(a,b,new Int16Array(H.bS(c)),35044)
C.c.ay(a,b,null)
return new Z.dY(b,u)},
az:function(a){return new Z.aV(a)},
dY:function dY(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hH:function hH(a){this.a=a},
cX:function cX(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
Q:function(){var u=new D.bz()
u.sal(null)
u.sb1(null)
u.c=null
u.d=0
return u},
ex:function ex(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
y:function y(a){this.a=a
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
C:function C(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
d2:function d2(){},
a1:function a1(){},
dg:function dg(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
bl:function bl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){}},X={cY:function cY(a,b){this.a=a
this.b=b},de:function de(a,b){this.a=a
this.b=b},f6:function f6(){var _=this
_.d=_.c=_.b=_.a=null},dj:function dj(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fd:function fd(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},b3:function b3(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fq:function fq(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cf:function cf(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fC:function fC(){},dO:function dO(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h6:function h6(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dT:function dT(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lU:function(a,b,c,d,e,f,g){var u,t
u=new X.eV()
t=new V.aE(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kl
if(t==null){t=V.kk(0,0,1,1)
$.kl=t}u.r=t
return u},
cZ:function cZ(){},
eV:function eV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
du:function du(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){}},V={
j8:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.e.f4(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.o],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.K(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.b.ai(u[p],s))}return u},
bI:function(){var u=$.kc
if(u==null){u=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kc=u}return u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kb:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jn:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
k8:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
k9:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ka:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bm:function(){var u=$.kg
if(u==null){u=new V.a4(0,0)
$.kg=u}return u},
kh:function(){var u=$.bn
if(u==null){u=new V.W(0,0,0)
$.bn=u}return u},
kk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dy(a,b,c,d)},
cy:function(){var u=$.kC
if(u==null){u=new V.E(0,0,0)
$.kC=u}return u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eL:function eL(a){this.a=a},
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
aj:function aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.I(a,0)
t=C.b.I(b,0)
s=new V.fF()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fN()
u.fH(a)
return u},
h5:function(){var u,t
u=new V.h4()
t=P.f
u.siU(new H.aH([t,V.cl]))
u.siW(new H.aH([t,V.co]))
u.c=null
return u},
aY:function aY(){},
at:function at(){},
dk:function dk(){},
ap:function ap(){this.a=null},
fF:function fF(){this.b=this.a=null},
fN:function fN(){this.a=null},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a,b){this.a=a
this.b=b
this.c=null},
h4:function h4(){this.c=this.b=this.a=null},
cp:function cp(a){this.b=a
this.a=this.c=null},
nA:function(a){P.mt(C.U,new V.j3(a))},
mq:function(a,b){var u=new V.fR()
u.fJ(a,!0)
return u},
be:function be(){},
j3:function j3(a){this.a=a},
eE:function eE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eW:function eW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eX:function eX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fB:function fB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fD:function fD(a,b){this.a=a
this.b=b
this.c=null},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(){this.b=this.a=null},
fT:function fT(a){this.a=a},
fS:function fS(a){this.a=a},
fU:function fU(a){this.a=a}},U={
je:function(){var u=new U.ey()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
d0:function(a){var u=new U.d_()
if(a==null)a=V.bI()
if(null!=a)u.a=a
return u},
jh:function(a){var u=new U.cb()
u.c_(U.a6)
u.bj(u.gfW(),u.gik())
u.e=null
u.f=V.bI()
u.r=0
return u},
ey:function ey(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){this.b=this.a=null},
cb:function cb(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dz:function dz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jC:function(a,b,c,d,e,f,g,h){var u,t,s,r,q,p,o,n
u=c>1?1:c
t=d>1?1:d
s=e>1?1:e
r=new V.a_(u,t,s)
q=U.jh(null)
q.h(0,U.d0(V.kb(0,0,2)))
s=new U.dz()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.sfd(0)
s.seV(0)
s.sf0(0)
u=s.d
if(!(Math.abs(u-f)<$.D().a)){s.d=f
u=new D.C("deltaYaw",u,f,s,[P.o])
u.b=!0
s.K(u)}u=s.e
if(!(Math.abs(u-g)<$.D().a)){s.e=g
u=new D.C("deltaPitch",u,g,s,[P.o])
u.b=!0
s.K(u)}u=s.f
if(!(Math.abs(u-h)<$.D().a)){s.f=h
u=new D.C("deltaRoll",u,h,s,[P.o])
u.b=!0
s.K(u)}q.h(0,s)
p=E.jg(null,!0,null,"",null,null)
u=U.jh(null)
u.h(0,U.d0(V.jn(0.1,0.1,0.1,1)))
u.h(0,q)
p.saJ(u)
p.sab(0,F.l9(8,null,1,8))
u=O.k7()
u.f.san(0,r)
p.sbf(u)
o=new D.bl()
o.c=new V.a_(1,1,1)
o.d=1
o.e=0
o.f=0
o.a=V.kh()
n=o.b
o.b=q
q.gC().h(0,o.gfP())
u=new D.C("mover",n,o.b,o,[U.a6])
u.b=!0
o.ad(u)
o.c=r
if(!r.w(0,r)){n=o.c
o.c=r
u=new D.C("color",n,r,o,[V.a_])
u.b=!0
o.ad(u)}u=o.d
if(!(Math.abs(u-1)<$.D().a)){o.d=1
u=new D.C("attenuation0",u,1,o,[P.o])
u.b=!0
o.ad(u)}u=o.e
if(!(Math.abs(u-0.5)<$.D().a)){o.e=0.5
u=new D.C("attenuation1",u,0.5,o,[P.o])
u.b=!0
o.ad(u)}u=o.f
if(!(Math.abs(u-0.15)<$.D().a)){o.f=0.15
u=new D.C("attenuation2",u,0.15,o,[P.o])
u.b=!0
o.ad(u)}a.dx.h(0,o)
b.d.h(0,p)},
l5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.mq("Test 021",!0)
t=W.jZ(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.f]
u.dX(H.b(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],s))
u.ju(H.b(["shapes"],s))
u.dX(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.d7(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.ms(r,!0,!0,!0,!1)
p=E.jg(null,!0,null,"",null,null)
p.saJ(U.d0(V.bI()))
p.sab(0,F.lb(30,1,15,0.5))
o=E.jg(null,!0,null,"",null,null)
o.saJ(U.d0(V.jn(3,3,3,1)))
n=F.jG(1,null,null,1)
n.cM()
o.sab(0,n)
m=U.jh(null)
n=q.r
l=new U.dV()
k=U.je()
k.sd5(0,!0)
k.scS(6.283185307179586)
k.scU(0)
k.sa2(0,0)
k.scT(100)
k.sW(0)
k.scE(0.5)
l.b=k
j=l.gaP()
k.gC().h(0,j)
k=U.je()
k.sd5(0,!0)
k.scS(6.283185307179586)
k.scU(0)
k.sa2(0,0)
k.scT(100)
k.sW(0)
k.scE(0.5)
l.c=k
k.gC().h(0,j)
l.d=null
l.e=!1
l.f=!1
l.r=!1
l.x=2.5
l.y=2.5
l.z=2
l.Q=4
l.cx=!1
l.ch=!1
l.cy=0
l.db=0
l.dx=null
l.dy=0
l.fr=null
l.fx=null
i=new X.au(!1,!1,!1)
h=l.d
l.d=i
k=[X.au]
j=new D.C("modifiers",h,i,l,k)
j.b=!0
l.K(j)
j=l.f
if(j!==!1){l.f=!1
j=new D.C("invertX",j,!1,l,[P.N])
j.b=!0
l.K(j)}j=l.r
if(j!==!1){l.r=!1
j=new D.C("invertY",j,!1,l,[P.N])
j.b=!0
l.K(j)}l.b5(n)
m.h(0,l)
n=q.r
l=new U.dU()
j=U.je()
j.sd5(0,!0)
j.scS(6.283185307179586)
j.scU(0)
j.sa2(0,0)
j.scT(100)
j.sW(0)
j.scE(0.2)
l.b=j
j.gC().h(0,l.gaP())
l.c=null
l.d=!1
l.e=2.5
l.f=2
l.r=4
l.y=!1
l.x=!1
l.z=0
l.Q=null
l.ch=0
l.cx=null
l.cy=null
i=new X.au(!0,!1,!1)
h=l.c
l.c=i
j=new D.C("modifiers",h,i,l,k)
j.b=!0
l.K(j)
l.b5(n)
m.h(0,l)
n=q.r
l=new U.dW()
l.c=0.01
l.d=0
l.e=0
i=new X.au(!1,!1,!1)
l.b=i
k=new D.C("modifiers",null,i,l,k)
k.b=!0
l.K(k)
l.b5(n)
m.h(0,l)
m.h(0,U.d0(V.kb(0,0,5)))
g=O.k7()
n=g.r
n.san(0,new V.a_(0.4,0.4,0.4))
n=g.x
n.san(0,new V.a_(0.4,0.4,0.4))
n=g.z
n.san(0,new V.a_(0.3,0.3,0.3))
n=g.z
if(n.c===C.d){n.c=C.j
n.bZ()
n.co(100)
l=n.a
l.a=null
l.ae(null)}n.co(100)
f=new M.d5()
f.shd(0,O.jd(E.ai))
f.d.bj(f.ghO(),f.ghQ())
f.e=null
f.f=null
f.r=null
f.x=null
e=X.lU(!0,!0,!1,null,2000,null,0)
d=new X.du()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saJ(null)
n=d.c
if(!(Math.abs(n-1.0471975511965976)<$.D().a)){d.c=1.0471975511965976
n=new D.C("fov",n,1.0471975511965976,d,[P.o])
n.b=!0
d.aN(n)}n=d.d
if(!(Math.abs(n-0.1)<$.D().a)){d.d=0.1
n=new D.C("near",n,0.1,d,[P.o])
n.b=!0
d.aN(n)}n=d.e
if(!(Math.abs(n-2000)<$.D().a)){d.e=2000
n=new D.C("far",n,2000,d,[P.o])
n.b=!0
d.aN(n)}n=f.a
if(n!==d){if(n!=null)n.gC().N(0,f.gau())
h=f.a
f.a=d
d.gC().h(0,f.gau())
n=new D.C("camera",h,f.a,f,[X.cZ])
n.b=!0
f.aD(n)}n=f.b
if(n!==e){if(n!=null)n.gC().N(0,f.gau())
h=f.b
f.b=e
e.gC().h(0,f.gau())
n=new D.C("target",h,f.b,f,[X.dH])
n.b=!0
f.aD(n)}f.sbf(null)
f.sbf(g)
f.d.h(0,o)
f.d.h(0,p)
f.a.saJ(m)
n=q.d
if(n!==f){if(n!=null)n.gC().N(0,q.gde())
q.d=f
f.gC().h(0,q.gde())
q.df()}U.jC(g,f,1,0,0,0.3,0,0)
U.jC(g,f,0,1,0,0,0.4,0)
U.jC(g,f,0,0,1,0.5,0.5,0)
n=new V.fD("shapes",!0)
s=C.z.d7(s,"shapes")
n.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
n.b4(0,"Cube",new U.iV(p))
n.b4(0,"Cylinder",new U.iW(p))
n.b4(0,"Cone",new U.iX(p))
n.b4(0,"Sphere",new U.iY(p))
n.dV(0,"Toroid",new U.iZ(p),!0)
n.b4(0,"Knot",new U.j_(p))
s=q.z
if(s==null){s=D.Q()
q.z=s}n={func:1,ret:-1,args:[D.y]}
l=H.k(new U.j0(u,g),n)
if(s.b==null)s.sb1(H.b([],[n]))
s=s.b;(s&&C.a).h(s,l)
V.nA(q)},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b}},M={d5:function d5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m7:function(a,b){var u,t
u=a.ao
t=new A.fk(b,u)
t.fI(b,u)
t.fF(a,b)
return t},
jq:function(a,b,c,d,e){var u=new A.hc(a,b,c,e)
u.f=d
u.sj6(P.m4(d,0,!1,P.l))
return u},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
fk:function fk(a,b){var _=this
_.bx=_.eb=_.bw=_.ao=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.er=_.cG=_.eq=_.bK=_.ep=_.eo=_.bJ=_.bI=_.en=_.em=_.bH=_.bG=_.bF=_.el=_.ek=_.bE=_.ej=_.ei=_.bD=_.eh=_.eg=_.bC=_.bB=_.ef=_.ee=_.bA=_.bz=_.ed=_.ec=_.by=null
_.cL=_.ew=_.cK=_.ev=_.cJ=_.eu=_.cI=_.es=_.cH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fn:function fn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ao=b4
_.bw=b5},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cs:function cs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
cw:function cw(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ck:function ck(){},
by:function by(a,b){this.a=a
this.b=b},
dP:function dP(){},
hi:function hi(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a,b,c,d){var _=this
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
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jG:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
u=F.jo()
F.cJ(u,b,c,d,a,1,0,0,1)
F.cJ(u,b,c,d,a,0,1,0,3)
F.cJ(u,b,c,d,a,0,0,1,2)
F.cJ(u,b,c,d,a,-1,0,0,0)
F.cJ(u,b,c,d,a,0,-1,0,0)
F.cJ(u,b,c,d,a,0,0,-1,3)
u.az()
return u},
iA:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cJ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.E(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.E(o+a3,n+a1,m+a2)
u.b=l
k=new V.E(o-a3,n-a1,m-a2)
u.c=k
j=new V.E(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iA(t)
f=F.iA(u.b)
e=F.jN(d,a0,new F.iz(u,F.iA(u.c),F.iA(u.d),f,g,c),b)
if(e!=null)a.bc(e)},
l_:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.o,args:[P.o]})
if(a0<3)return
u=F.jo()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.aa])
q=u.a
p=new V.E(0,0,t)
p=p.B(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jx(new V.aR(a,-1,-1,-1),new V.aE(1,1,1,1),new V.W(0,0,d),new V.E(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.A(k)
j=new V.E(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dX(new V.aR(a,-1,-1,-1),null,new V.aE(i,g,h,1),new V.W(m*k,l*k,d),new V.E(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jv(r)
return u},
kY:function(a,b,c,d,e,f){return F.nc(!0,c,d,new F.iJ(a,f),e)},
nc:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
u=F.jN(c,e,new F.iL(d),null)
if(u==null)return
u.az()
u.ct()
if(b)u.bc(F.l_(3,!1,!1,1,new F.iM(d),e))
u.bc(F.l_(1,!0,!1,-1,new F.iN(d),e))
return u},
l9:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.j4()
t=F.jG(a,null,new F.j5(u,c),d)
t.ct()
return t},
lb:function(a,b,c,d){return F.kZ(c,a,d,b,new F.j6())},
ns:function(a,b,c,d,e,f){return F.kZ(d,a,e,b,new F.iU(f,c))},
kZ:function(a,b,c,d,e){var u=F.jN(a,b,new F.iK(H.k(e,{func:1,ret:V.W,args:[P.o]}),d,b,c),null)
if(u==null)return
u.az()
u.ct()
return u},
jN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
if(a<1)return
if(b<1)return
u=F.jo()
t=H.b([],[F.aa])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dX(null,null,new V.aE(p,0,0,1),null,null,new V.a4(r,1),null,null,0)
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
o=F.dX(null,null,new V.aE(j,i,h,1),null,null,new V.a4(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cD(d))}}u.d.jw(a+1,b+1,t)
return u},
c9:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.cr(a)
u.cs(b)
u.iN(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
m0:function(a,b){var u,t
u=new F.b2()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.cr(a)
u.cs(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
jo:function(){var u,t
u=new F.dB()
t=new F.hw(u)
t.b=!1
t.sj7(H.b([],[F.aa]))
u.a=t
t=new F.fQ(u)
t.scj(H.b([],[F.bk]))
u.b=t
t=new F.fP(u)
t.shv(H.b([],[F.b2]))
u.c=t
t=new F.fO(u)
t.shn(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
dX:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aa()
t=new F.hE(u)
t.scj(H.b([],[F.bk]))
u.b=t
t=new F.hA(u)
s=[F.b2]
t.shw(H.b([],s))
t.shx(H.b([],s))
u.c=t
t=new F.hx(u)
s=[F.a2]
t.sho(H.b([],s))
t.shp(H.b([],s))
t.shq(H.b([],s))
u.d=t
h=$.lp()
u.e=0
t=$.b9()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b8().a)!==0?e:null
u.x=(s&$.b7().a)!==0?b:null
u.y=(s&$.ba().a)!==0?f:null
u.z=(s&$.bb().a)!==0?g:null
u.Q=(s&$.lq().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.b6().a)!==0?a:null
return u},
iz:function iz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iJ:function iJ(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
j4:function j4(){},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(){},
iU:function iU(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eP:function eP(){},
fV:function fV(){},
b2:function b2(){this.b=this.a=null},
f7:function f7(){},
hb:function hb(){},
bk:function bk(){this.a=null},
dB:function dB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a){this.a=a
this.b=null},
fP:function fP(a){this.a=a
this.b=null},
fQ:function fQ(a){this.a=a
this.b=null},
aa:function aa(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){this.a=a},
hF:function hF(a){this.a=a},
hw:function hw(a){this.a=a
this.c=this.b=null},
hx:function hx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a
this.c=this.b=null},
hC:function hC(){},
hB:function hB(){},
hD:function hD(){},
fx:function fx(){},
hE:function hE(a){this.a=a
this.b=null}},T={dI:function dI(){},h2:function h2(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jk.prototype={}
J.a3.prototype={
w:function(a,b){return a===b},
gL:function(a){return H.ci(a)},
i:function(a){return"Instance of '"+H.bL(a)+"'"}}
J.f2.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iN:1}
J.dc.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iF:1}
J.dd.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fA.prototype={}
J.bq.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.ld()]
if(u==null)return this.fA(a)
return"JavaScript function for "+H.j(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibh:1}
J.aF.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.Y("add"))
a.push(b)},
kK:function(a,b){var u
if(!!a.fixed$length)H.q(P.Y("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dx(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.q(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aZ(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.j(a[t]))
return u.join(b)},
km:function(a){return this.l(a,"")},
ke:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aZ(a))}return t},
kd:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aZ(a))}throw H.c(H.f0())},
kc:function(a,b){return this.kd(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fv:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a7(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gkb:function(a){if(a.length>0)return a[0]
throw H.c(H.f0())},
gaC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f0())},
ft:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.q(P.Y("setRange"))
P.b5(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bY(d)
if(e+t>u.gm(d))throw H.c(H.lX())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bk:function(a,b,c,d){return this.ft(a,b,c,d,0)},
dY:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aZ(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.ji(a,"[","]")},
gU:function(a){return new J.ao(a,a.length,0,[H.r(a,0)])},
gL:function(a){return H.ci(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.Y("set length"))
if(b<0)throw H.c(P.a7(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bW(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bW(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bk(u,0,a.length,a)
this.bk(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.jj.prototype={}
J.ao.prototype={
gM:function(){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.z(u))
s=this.c
if(s>=t){this.sdz(null)
return!1}this.sdz(u[s]);++this.c
return!0},
sdz:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
J.bj.prototype={
ey:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Y(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Y(""+a+".round()"))},
f4:function(a,b){var u,t
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.Y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a*b},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dR(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dR(a,b)},
dR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Y("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iS:function(a,b){if(b<0)throw H.c(H.ar(b))
return this.dQ(a,b)},
dQ:function(a,b){return b>31?0:a>>>b},
$io:1,
$iaf:1}
J.db.prototype={$il:1}
J.f3.prototype={}
J.b0.prototype={
a0:function(a,b){if(b<0)throw H.c(H.bW(a,b))
if(b>=a.length)H.q(H.bW(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.bW(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jb(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ar(b))
c=P.b5(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ar(c))
if(typeof c!=="number")return c.X()
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ar(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.X()
if(b<0)throw H.c(P.dx(b,null,null))
if(b>c)throw H.c(P.dx(b,null,null))
if(c>a.length)throw H.c(P.dx(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.v(a,b,null)},
kY:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kA:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.t(c,u)+a},
ai:function(a,b){return this.kA(a,b," ")},
eG:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eF:function(a,b){return this.eG(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ike:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.b.a0(this.a,b)},
$acx:function(){return[P.l]},
$aT:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eI.prototype={}
H.bG.prototype={
gU:function(a){return new H.cd(this,this.gm(this),0,[H.ab(this,"bG",0)])},
bS:function(a,b){return this.fz(0,H.k(b,{func:1,ret:P.N,args:[H.ab(this,"bG",0)]}))}}
H.cd.prototype={
gM:function(){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.bY(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aZ(u))
r=this.c
if(r>=s){this.sb_(null)
return!1}this.sb_(t.a8(u,r));++this.c
return!0},
sb_:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.fh.prototype={
gU:function(a){return new H.fi(J.bv(this.a),this.b,this.$ti)},
gm:function(a){return J.aC(this.a)},
a8:function(a,b){return this.b.$1(J.eo(this.a,b))},
$an:function(a,b){return[b]}}
H.fi.prototype={
E:function(){var u=this.b
if(u.E()){this.sb_(this.c.$1(u.gM()))
return!0}this.sb_(null)
return!1},
gM:function(){return this.a},
sb_:function(a){this.a=H.x(a,H.r(this,1))},
$aaN:function(a,b){return[b]}}
H.fj.prototype={
gm:function(a){return J.aC(this.a)},
a8:function(a,b){return this.b.$1(J.eo(this.a,b))},
$abG:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cz.prototype={
gU:function(a){return new H.hI(J.bv(this.a),this.b,this.$ti)}}
H.hI.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bB.prototype={}
H.cx.prototype={
q:function(a,b,c){H.x(c,H.ab(this,"cx",0))
throw H.c(P.Y("Cannot modify an unmodifiable list"))}}
H.dR.prototype={}
H.eA.prototype={
i:function(a){return P.jm(this)},
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.lO()},
$iH:1}
H.eB.prototype={
gm:function(a){return this.a},
br:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.br(b))return
return this.dA(b)},
dA:function(a){return this.b[H.G(a)]},
a_:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dA(q),u))}}}
H.fG.prototype={}
H.h8.prototype={
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
H.fy.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f5.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hm.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j7.prototype={
$1:function(a){if(!!J.S(a).$ibg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.ea.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaq:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bL(this).trim()+"'"},
$ibh:1,
gl4:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h1.prototype={}
H.fW.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c3.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.ci(this.a)
else t=typeof u!=="object"?J.cS(u):H.ci(u)
return(t^H.ci(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bL(u)+"'")}}
H.ha.prototype={
i:function(a){return this.a}}
H.ew.prototype={
i:function(a){return this.a}}
H.fL.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aH.prototype={
gm:function(a){return this.a},
gkl:function(a){return this.a===0},
gaB:function(){return new H.f9(this,[H.r(this,0)])},
br:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.du(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.du(t,a)}else return this.ki(a)},
ki:function(a){var u=this.d
if(u==null)return!1
return this.cP(this.c6(u,this.cO(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.kj(b)},
kj:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c6(u,this.cO(a))
s=this.cP(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cg()
this.b=u}this.di(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cg()
this.c=t}this.di(t,b,c)}else this.kk(b,c)},
kk:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.cg()
this.d=u}t=this.cO(a)
s=this.c6(u,t)
if(s==null)this.cp(u,t,[this.c0(a,b)])
else{r=this.cP(s,a)
if(r>=0)s[r].b=b
else s.push(this.c0(a,b))}},
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aZ(this))
u=u.c}},
di:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bm(a,b)
if(u==null)this.cp(a,b,this.c0(b,c))
else u.b=c},
h4:function(){this.r=this.r+1&67108863},
c0:function(a,b){var u,t
u=new H.f8(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h4()
return u},
cO:function(a){return J.cS(a)&0x3ffffff},
cP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.jm(this)},
bm:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
hi:function(a,b){delete a[b]},
du:function(a,b){return this.bm(a,b)!=null},
cg:function(){var u=Object.create(null)
this.cp(u,"<non-identifier-key>",u)
this.hi(u,"<non-identifier-key>")
return u},
$ik4:1}
H.f8.prototype={}
H.f9.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.fa(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fa.prototype={
gM:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdj(null)
return!1}else{this.sdj(u.a)
this.c=this.c.c
return!0}}},
sdj:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.iR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.iS.prototype={
$1:function(a){return this.a(H.G(a))},
$S:50}
H.f4.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ike:1,
$imm:1}
H.bJ.prototype={$ibJ:1}
H.dp.prototype={
gm:function(a){return a.length},
$iaG:1,
$aaG:function(){}}
H.dq.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]},
q:function(a,b,c){H.ne(c)
H.bs(b,a,a.length)
a[b]=c},
$abB:function(){return[P.o]},
$aT:function(){return[P.o]},
$in:1,
$an:function(){return[P.o]},
$ia:1,
$aa:function(){return[P.o]}}
H.dr.prototype={
q:function(a,b,c){H.ac(c)
H.bs(b,a,a.length)
a[b]=c},
$abB:function(){return[P.l]},
$aT:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fr.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fs.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.ft.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fu.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.cg.prototype={
gm:function(a){return a.length},
k:function(a,b){H.bs(b,a,a.length)
return a[b]},
$icg:1,
$iM:1}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
P.hK.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:28}
P.hJ.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.hL.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eb.prototype={
h1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bV(new P.io(this,b),0),a)
else throw H.c(P.Y("`setTimeout()` not found."))},
h2:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bV(new P.im(this,a,Date.now(),b),0),a)
else throw H.c(P.Y("Periodic timer."))},
$iaT:1}
P.io.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.im.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fE(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aX.prototype={
kp:function(a){if(this.c!==6)return!0
return this.b.b.d3(H.k(this.d,{func:1,ret:P.N,args:[P.L]}),a.a,P.N,P.L)},
kh:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.ej(u,{func:1,args:[P.L,P.aq]}))return H.jH(r.kR(u,a.a,a.b,null,t,P.aq),s)
else return H.jH(r.d3(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aA.prototype={
f3:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n3(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.V,[c])
r=b==null?1:3
this.dl(new P.aX(s,r,a,b,[u,c]))
return s},
kV:function(a,b){return this.f3(a,null,b)},
dl:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaX")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaA")
u=t.a
if(u<4){t.dl(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iH(null,null,u,H.k(new P.hU(this,a),{func:1,ret:-1}))}},
dM:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaX")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaA")
t=p.a
if(t<4){p.dM(a)
return}this.a=t
this.c=p.c}u.a=this.bo(a)
t=this.b
t.toString
P.iH(null,null,t,H.k(new P.hY(u,this),{func:1,ret:-1}))}},
cl:function(){var u=H.d(this.c,"$iaX")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dq:function(a){var u,t,s
u=H.r(this,0)
H.jH(a,{futureOr:1,type:u})
t=this.$ti
if(H.cM(a,"$ica",t,"$aca"))if(H.cM(a,"$iaA",t,null))P.kD(a,this)
else P.mF(a,this)
else{s=this.cl()
H.x(a,u)
this.a=4
this.c=a
P.cC(this,s)}},
dr:function(a,b){var u
H.d(b,"$iaq")
u=this.cl()
this.a=8
this.c=new P.ag(a,b)
P.cC(this,u)},
$ica:1}
P.hU.prototype={
$0:function(){P.cC(this.a,this.b)},
$S:0}
P.hY.prototype={
$0:function(){P.cC(this.b,this.a.a)},
$S:0}
P.hV.prototype={
$1:function(a){var u=this.a
u.a=0
u.dq(a)},
$S:28}
P.hW.prototype={
$2:function(a,b){H.d(b,"$iaq")
this.a.dr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.hX.prototype={
$0:function(){this.a.dr(this.b,this.c)},
$S:0}
P.i0.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f1(H.k(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.bZ(q)
if(this.d){r=H.d(this.a.a.c,"$iag").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iag")
else p.b=new P.ag(t,s)
p.a=!0
return}if(!!J.S(u).$ica){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iag")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kV(new P.i1(o),null)
r.a=!1}},
$S:3}
P.i1.prototype={
$1:function(a){return this.a},
$S:46}
P.i_.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.d3(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bZ(o)
s=this.a
s.b=new P.ag(u,t)
s.a=!0}},
$S:3}
P.hZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iag")
r=this.c
if(r.kp(u)&&r.e!=null){q=this.b
q.b=r.kh(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bZ(p)
r=H.d(this.a.a.c,"$iag")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ag(t,s)
n.a=!0}},
$S:3}
P.dZ.prototype={}
P.fX.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.V,[P.l])
u.a=0
s=H.r(this,0)
r=H.k(new P.fZ(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.h_(u,t),{func:1,ret:-1})
W.a8(this.a,this.b,r,!1,s)
return t}}
P.fZ.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}}
P.h_.prototype={
$0:function(){this.b.dq(this.a.a)},
$S:0}
P.cm.prototype={}
P.fY.prototype={}
P.aT.prototype={}
P.ag.prototype={
i:function(a){return H.j(this.a)},
$ibg:1}
P.iy.prototype={$iob:1}
P.iG.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dt()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.i6.prototype={
kS:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.V){a.$0()
return}P.kP(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.bZ(s)
P.iF(null,null,this,u,H.d(t,"$iaq"))}},
kT:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.V){a.$1(b)
return}P.kQ(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bZ(s)
P.iF(null,null,this,u,H.d(t,"$iaq"))}},
jF:function(a,b){return new P.i8(this,H.k(a,{func:1,ret:b}),b)},
cu:function(a){return new P.i7(this,H.k(a,{func:1,ret:-1}))},
e3:function(a,b){return new P.i9(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
f1:function(a,b){H.k(a,{func:1,ret:b})
if($.V===C.l)return a.$0()
return P.kP(null,null,this,a,b)},
d3:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.V===C.l)return a.$1(b)
return P.kQ(null,null,this,a,b,c,d)},
kR:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.V===C.l)return a.$2(b,c)
return P.n4(null,null,this,a,b,c,d,e,f)}}
P.i8.prototype={
$0:function(){return this.a.f1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.i7.prototype={
$0:function(){return this.a.kS(this.b)},
$S:3}
P.i9.prototype={
$1:function(a){var u=this.c
return this.a.kT(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i4.prototype={
gU:function(a){var u=new P.e4(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibQ")!=null}else{t=this.he(b)
return t}},
he:function(a){var u=this.d
if(u==null)return!1
return this.c4(this.dB(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jv()
this.b=u}return this.dk(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jv()
this.c=t}return this.dk(t,b)}else return this.h5(b)},
h5:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.jv()
this.d=u}t=this.ds(a)
s=u[t]
if(s==null)u[t]=[this.ci(a)]
else{if(this.c4(s,a)>=0)return!1
s.push(this.ci(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iB(this.c,b)
else return this.iy(b)},
iy:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dB(u,a)
s=this.c4(t,a)
if(s<0)return!1
this.dS(t.splice(s,1)[0])
return!0},
dk:function(a,b){H.x(b,H.r(this,0))
if(H.d(a[b],"$ibQ")!=null)return!1
a[b]=this.ci(b)
return!0},
iB:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibQ")
if(u==null)return!1
this.dS(u)
delete a[b]
return!0},
dG:function(){this.r=1073741823&this.r+1},
ci:function(a){var u,t
u=new P.bQ(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dG()
return u},
dS:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dG()},
ds:function(a){return J.cS(a)&1073741823},
dB:function(a,b){return a[this.ds(b)]},
c4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.bQ.prototype={}
P.e4.prototype={
gM:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdn(null)
return!1}else{this.sdn(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdn:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
P.fb.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:7}
P.fc.prototype={$in:1,$ia:1}
P.T.prototype={
gU:function(a){return new H.cd(a,this.gm(a),0,[H.cO(this,a,"T",0)])},
a8:function(a,b){return this.k(a,b)},
kX:function(a,b){var u,t
u=H.b([],[H.cO(this,a,"T",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
kW:function(a){return this.kX(a,!0)},
n:function(a,b){var u,t
u=[H.cO(this,a,"T",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bk(t,0,this.gm(a),a)
C.a.bk(t,this.gm(a),t.length,b)
return t},
k9:function(a,b,c,d){var u
H.x(d,H.cO(this,a,"T",0))
P.b5(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.ji(a,"[","]")}}
P.fe.prototype={}
P.ff.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:7}
P.bH.prototype={
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.ab(this,"bH",0),H.ab(this,"bH",1)]})
for(u=J.bv(this.gaB());u.E();){t=u.gM()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aC(this.gaB())},
i:function(a){return P.jm(this)},
$iH:1}
P.ip.prototype={
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.Y("Cannot modify unmodifiable map"))}}
P.fg.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
a_:function(a,b){this.a.a_(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.an(this.a)},
$iH:1}
P.dS.prototype={}
P.ib.prototype={
aw:function(a,b){var u
for(u=J.bv(H.h(b,"$in",this.$ti,"$an"));u.E();)this.h(0,u.gM())},
i:function(a){return P.ji(this,"{","}")},
a8:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=P.mJ(this,this.r,H.r(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
$in:1,
$ikm:1}
P.e5.prototype={}
P.ee.prototype={}
P.es.prototype={
kr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b5(b,c,a.length,null,null,null)
u=$.ls()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.b.I(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iP(C.b.I(a,n))
j=H.iP(C.b.I(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ae("")
g=r.a+=C.b.v(a,s,t)
r.a=g+H.bM(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.b.v(a,s,c)
f=g.length
if(q>=0)P.jW(a,p,c,q,o,f)
else{e=C.f.bi(f-1,4)+1
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aX(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jW(a,p,c,q,o,d)
else{e=C.f.bi(d,4)
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
if(e>1)a=C.b.aX(a,c,c,e===2?"==":"=")}return a},
$abx:function(){return[[P.a,P.l],P.f]}}
P.et.prototype={
$abf:function(){return[[P.a,P.l],P.f]}}
P.bx.prototype={}
P.bf.prototype={}
P.eK.prototype={
$abx:function(){return[P.f,[P.a,P.l]]}}
P.eZ.prototype={
i:function(a){return this.a}}
P.eY.prototype={
hf:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.ae("")
if(r>b)q.a+=C.b.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lH(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abf:function(){return[P.f,P.f]}}
P.ht.prototype={
gk8:function(){return C.S}}
P.hv.prototype={
b6:function(a,b,c){var u,t,s
c=P.b5(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iw(t)
if(s.hr(a,b,c)!==c)s.dU(J.lB(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mZ(0,s.b,t.length)))},
cC:function(a){return this.b6(a,0,null)},
$abf:function(){return[P.f,[P.a,P.l]]}}
P.iw.prototype={
dU:function(a,b){var u,t,s,r,q
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
hr:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dU(r,C.b.I(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hu.prototype={
b6:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mw(!1,a,b,c)
if(u!=null)return u
c=P.b5(b,c,J.aC(a),null,null,null)
t=new P.ae("")
s=new P.iu(!1,t)
s.b6(a,b,c)
if(s.e>0){H.q(P.a0("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bM(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cC:function(a){return this.b6(a,0,null)},
$abf:function(){return[[P.a,P.l],P.f]}}
P.iu.prototype={
b6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iv(this,b,c,a)
$label0$0:for(q=J.bY(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bU()
if((n&192)!==128){m=P.a0("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.G,m)
if(u<=C.G[m]){m=P.a0("Overlong encoding of 0x"+C.f.bh(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a0("Character outside valid Unicode range: 0x"+C.f.bh(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bM(u)
this.c=!1}for(m=o<c;m;){l=P.n5(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.X()
if(n<0){i=P.a0("Negative UTF-8 code unit: -0x"+C.f.bh(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a0("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iv.prototype={
$2:function(a,b){this.a.b.a+=P.dE(this.d,a,b)},
$S:45}
P.N.prototype={}
P.ah.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aS(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lP(H.mh(this))
t=P.d1(H.mf(this))
s=P.d1(H.mb(this))
r=P.d1(H.mc(this))
q=P.d1(H.me(this))
p=P.d1(H.mg(this))
o=P.lQ(H.md(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.o.prototype={}
P.aM.prototype={
n:function(a,b){return new P.aM(C.f.n(this.a,b.ghk()))},
u:function(a,b){return new P.aM(C.f.u(this.a,b.ghk()))},
w:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eH()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.f.a5(t,6e7)%60)
r=u.$1(C.f.a5(t,1e6)%60)
q=new P.eG().$1(t%1e6)
return""+C.f.a5(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eG.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:27}
P.eH.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:27}
P.bg.prototype={}
P.dt.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gc3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc3()+t+s
if(!this.a)return r
q=this.gc2()
p=P.eM(this.b)
return r+q+": "+p}}
P.bN.prototype={
gc3:function(){return"RangeError"},
gc2:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.f_.prototype={
gc3:function(){return"RangeError"},
gc2:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.X()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hn.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hk.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ez.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eM(u)+"."}}
P.fz.prototype={
i:function(a){return"Out of Memory"},
$ibg:1}
P.dD.prototype={
i:function(a){return"Stack Overflow"},
$ibg:1}
P.eD.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e1.prototype={
i:function(a){return"Exception: "+this.a}}
P.eU.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.v(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.I(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.a0(r,m)
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
g=""}f=C.b.v(r,i,j)
return t+h+f+g+"\n"+C.b.t(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bh.prototype={}
P.l.prototype={}
P.n.prototype={
bS:function(a,b){var u=H.ab(this,"n",0)
return new H.cz(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gU(this)
for(t=0;u.E();)++t
return t},
gaL:function(a){var u,t
u=this.gU(this)
if(!u.E())throw H.c(H.f0())
t=u.gM()
if(u.E())throw H.c(H.lY())
return t},
a8:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.E();){s=u.gM()
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
i:function(a){return P.lW(this,"(",")")}}
P.aN.prototype={}
P.a.prototype={$in:1}
P.H.prototype={}
P.F.prototype={
gL:function(a){return P.L.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.af.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
w:function(a,b){return this===b},
gL:function(a){return H.ci(this)},
i:function(a){return"Instance of '"+H.bL(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.f.prototype={$ike:1}
P.ae.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inM:1}
P.hs.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iH",[u,u],"$aH")
H.G(b)
t=J.cN(b).eF(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jx(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.v(b,0,t)
r=C.b.at(b,t+1)
u=this.a
a.q(0,P.jx(s,0,s.length,u,!0),P.jx(r,0,r.length,u,!0))}return a},
$S:43}
P.hp.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hq.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hr.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.el(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.X()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bR.prototype={
gfc:function(){return this.b},
gcN:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbN:function(a){var u=this.d
if(u==null)return P.kH(this.a)
return u},
gcY:function(){var u=this.f
return u==null?"":u},
geA:function(){var u=this.r
return u==null?"":u},
d2:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
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
if(s&&!C.b.a4(d,"/"))d="/"+d
g=P.jw(g,0,0,h)
return new P.bR(i,j,c,f,d,g,this.r)},
eZ:function(a,b){return this.d2(a,null,null,null,null,null,null,b,null,null)},
gcZ:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.six(new P.dS(P.kw(u==null?"":u,C.m),[t,t]))}return this.Q},
geB:function(){return this.c!=null},
geE:function(){return this.f!=null},
geC:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.j(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.j(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.j(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.S(b).$ijr)if(this.a==b.gbX())if(this.c!=null===b.geB())if(this.b==b.gfc())if(this.gcN(this)==b.gcN(b))if(this.gbN(this)==b.gbN(b))if(this.e===b.geU(b)){u=this.f
t=u==null
if(!t===b.geE()){if(t)u=""
if(u===b.gcY()){u=this.r
t=u==null
if(!t===b.geC()){if(t)u=""
u=u===b.geA()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.b.gL(this.i(0))
this.z=u}return u},
six:function(a){var u=P.f
this.Q=H.h(a,"$iH",[u,u],"$aH")},
$ijr:1,
gbX:function(){return this.a},
geU:function(a){return this.e}}
P.iq.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a0("Invalid port",this.a,u+1))},
$S:39}
P.ir.prototype={
$1:function(a){return P.ef(C.a8,a,C.m,!1)},
$S:13}
P.it.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.ef(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.ef(C.w,b,C.m,!0))}},
$S:37}
P.is.prototype={
$2:function(a,b){var u,t
H.G(a)
if(b==null||typeof b==="string")this.a.$2(a,H.G(b))
else for(u=J.bv(H.l4(b,"$in")),t=this.a;u.E();)t.$2(a,H.G(u.gM()))},
$S:35}
P.ho.prototype={
gfa:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.b.eG(t,"?",u)
r=t.length
if(s>=0){q=P.cI(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.hP(this,"data",null,null,null,P.cI(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iC.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.iB.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.lC(u,0,96,b)
return u},
$S:33}
P.iD.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.I(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iE.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.I(b,0),t=C.b.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.ie.prototype={
geB:function(){return this.c>0},
geD:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.A(t)
t=u+1<t
u=t}else u=!1
return u},
geE:function(){var u=this.f
if(typeof u!=="number")return u.X()
return u<this.r},
geC:function(){return this.r<this.a.length},
gdE:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdF:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbX:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdE()){this.x="http"
u="http"}else if(this.gdF()){this.x="https"
u="https"}else if(u===4&&C.b.a4(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a4(this.a,"package")){this.x="package"
u="package"}else{u=C.b.v(this.a,0,u)
this.x=u}return u},
gfc:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gcN:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbN:function(a){var u
if(this.geD()){u=this.d
if(typeof u!=="number")return u.n()
return P.el(C.b.v(this.a,u+1,this.e),null,null)}if(this.gdE())return 80
if(this.gdF())return 443
return 0},
geU:function(a){return C.b.v(this.a,this.e,this.f)},
gcY:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.X()
return u<t?C.b.v(this.a,u+1,t):""},
geA:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.at(t,u+1):""},
gcZ:function(){var u=this.f
if(typeof u!=="number")return u.X()
if(u>=this.r)return C.a9
u=P.f
return new P.dS(P.kw(this.gcY(),C.m),[u,u])},
d2:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
i=this.gbX()
u=i==="file"
t=this.c
j=t>0?C.b.v(this.a,this.b+3,t):""
f=this.geD()?this.gbN(this):null
t=this.c
if(t>0)c=C.b.v(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.v(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a4(d,"/"))d="/"+d
g=P.jw(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.at(t,s+1)
return new P.bR(i,j,c,f,d,g,b)},
eZ:function(a,b){return this.d2(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.b.gL(this.a)
this.y=u}return u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ijr&&this.a===b.i(0)},
i:function(a){return this.a},
$ijr:1}
P.hP.prototype={}
W.w.prototype={}
W.cT.prototype={
i:function(a){return String(a)},
$icT:1}
W.ep.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.bc.prototype={$ibc:1}
W.bw.prototype={
d6:function(a,b,c){var u=this.hs(a,b,P.nb(c,null))
return u},
hs:function(a,b,c){return a.getContext(b,c)},
$ibw:1}
W.bd.prototype={
gm:function(a){return a.length}}
W.c6.prototype={
gm:function(a){return a.length}}
W.eC.prototype={}
W.ax.prototype={$iax:1}
W.c7.prototype={
jA:function(a,b){return a.adoptNode(b)},
d7:function(a,b){return a.getElementById(b)}}
W.eF.prototype={
i:function(a){return String(a)}}
W.d3.prototype={
jT:function(a,b){return a.createHTMLDocument(b)}}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.cM(b,"$iay",[P.af],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbM(b)&&a.top===u.gbQ(b)&&a.width===u.gbT(b)&&a.height===u.gbL(b)},
gL:function(a){return W.kF(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
ge4:function(a){return a.bottom},
gbL:function(a){return a.height},
gbM:function(a){return a.left},
gbP:function(a){return a.right},
gbQ:function(a){return a.top},
gbT:function(a){return a.width},
$iay:1,
$aay:function(){return[P.af]}}
W.hO.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iP")},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.j9(this.a,c,u[b])},
h:function(a,b){J.jS(this.a,b)
return b},
gU:function(a){var u=this.kW(this)
return new J.ao(u,u.length,0,[H.r(u,0)])},
$aT:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gjE:function(a){return new W.hQ(a)},
gcB:function(a){return new W.hO(a,a.children)},
ge6:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.X()
if(s<0)s=-s*0
if(typeof r!=="number")return r.X()
if(r<0)r=-r*0
return new P.ay(u,t,s,r,[P.af])},
i:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k2
if(u==null){u=H.b([],[W.av])
t=new W.ds(u)
C.a.h(u,W.kE(null))
C.a.h(u,W.kG())
$.k2=t
d=t}else d=u
u=$.k1
if(u==null){u=new W.eg(d)
$.k1=u
c=u}else{u.a=d
c=u}}if($.b_==null){u=document
t=u.implementation
t=(t&&C.T).jT(t,"")
$.b_=t
$.jf=t.createRange()
t=$.b_
t.toString
t=t.createElement("base")
H.d(t,"$ic2")
t.href=u.baseURI
u=$.b_.head;(u&&C.V).F(u,t)}u=$.b_
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibc")}u=$.b_
if(!!this.$ibc)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b_.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a6,a.tagName)){u=$.jf;(u&&C.M).fo(u,s)
u=$.jf
r=(u&&C.M).jR(u,b)}else{s.innerHTML=b
r=$.b_.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.b_.body
if(s==null?u!=null:s!==u)J.jU(s)
c.d9(r)
C.z.jA(document,r)
return r},
jS:function(a,b,c){return this.ag(a,b,c,null)},
fs:function(a,b,c,d){a.textContent=null
this.F(a,this.ag(a,b,c,d))},
fq:function(a,b){return this.fs(a,b,null,null)},
aZ:function(a,b){return a.getAttribute(b)},
iz:function(a,b){return a.removeAttribute(b)},
fp:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
gkU:function(a){return a.tagName}}
W.eJ.prototype={
$1:function(a){return!!J.S(H.d(a,"$iB")).$iP},
$S:22}
W.m.prototype={$im:1}
W.bA.prototype={
h6:function(a,b,c,d){return a.addEventListener(b,H.bV(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibA:1}
W.eT.prototype={
gm:function(a){return a.length}}
W.d8.prototype={}
W.d9.prototype={
iF:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bC.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$ibC:1,
$aas:function(){return[W.B]}}
W.da.prototype={}
W.cc.prototype={$icc:1}
W.aO.prototype={$iaO:1}
W.df.prototype={}
W.di.prototype={
i:function(a){return String(a)},
$idi:1}
W.a9.prototype={$ia9:1}
W.am.prototype={
gaL:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kn("No elements"))
if(t>1)throw H.c(P.kn("More than one element"))
return u.firstChild},
aw:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.B],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.d(c,"$iB")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.j9(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d6(u,u.length,-1,[H.cO(C.aa,u,"as",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aT:function(){return[W.B]},
$an:function(){return[W.B]},
$aa:function(){return[W.B]}}
W.B.prototype={
kJ:function(a){var u=a.parentNode
if(u!=null)J.en(u,a)},
kO:function(a,b){var u,t
try{u=a.parentNode
J.j9(u,b,a)}catch(t){H.ad(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fw(a):u},
F:function(a,b){return a.appendChild(H.d(b,"$iB"))},
iA:function(a,b){return a.removeChild(b)},
iE:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.ch.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aas:function(){return[W.B]}}
W.dw.prototype={
jR:function(a,b){return a.createContextualFragment(b)},
fo:function(a,b){return a.selectNodeContents(b)}}
W.fM.prototype={
gm:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.dF.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bY(a,b,c,d)
u=W.lR("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).aw(0,new W.am(u))
return t},
hu:function(a,b){return a.insertRow(b)}}
W.dG.prototype={
ag:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bY(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaL(u)
s.toString
u=new W.am(s)
r=u.gaL(u)
t.toString
r.toString
new W.am(t).aw(0,new W.am(r))
return t},
dD:function(a,b){return a.insertCell(b)}}
W.h0.prototype={
ag:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bY(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaL(u)
t.toString
s.toString
new W.am(t).aw(0,new W.am(s))
return t}}
W.cn.prototype={$icn:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.h7.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iaI")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.aI]},
$aT:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]},
$ia:1,
$aa:function(){return[W.aI]},
$aas:function(){return[W.aI]}}
W.bp.prototype={}
W.aW.prototype={
gjZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Y("deltaY is not supported"))},
gjY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Y("deltaX is not supported"))},
$iaW:1}
W.cA.prototype={
iG:function(a,b){return a.requestAnimationFrame(H.bV(H.k(b,{func:1,ret:-1,args:[P.af]}),1))},
hl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cB.prototype={$icB:1}
W.e0.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.cM(b,"$iay",[P.af],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbM(b)&&a.top===u.gbQ(b)&&a.width===u.gbT(b)&&a.height===u.gbL(b)},
gL:function(a){return W.kF(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gbL:function(a){return a.height},
gbT:function(a){return a.width}}
W.e6.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aas:function(){return[W.B]}}
W.hN.prototype={
a_:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaB(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.z)(u),++q){p=u[q]
b.$2(p,r.aZ(s,p))}},
gaB:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icB")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abH:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.hQ.prototype={
k:function(a,b){return J.ja(this.a,H.G(b))},
q:function(a,b,c){J.lG(this.a,b,c)},
gm:function(a){return this.gaB().length}}
W.hR.prototype={}
W.ju.prototype={}
W.hS.prototype={}
W.hT.prototype={
$1:function(a){return this.a.$1(H.d(a,"$im"))},
$S:32}
W.br.prototype={
fM:function(a){var u,t
u=$.jQ()
if(u.gkl(u)){for(t=0;t<262;++t)u.q(0,C.a5[t],W.nl())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nm())}},
aT:function(a){return $.lt().Z(0,W.c8(a))},
ax:function(a,b,c){var u,t,s
u=W.c8(a)
t=$.jQ()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jD(s.$4(a,b,c,this))},
$iav:1}
W.as.prototype={
gU:function(a){return new W.d6(a,this.gm(a),-1,[H.cO(this,a,"as",0)])}}
W.ds.prototype={
aT:function(a){return C.a.dY(this.a,new W.fw(a))},
ax:function(a,b,c){return C.a.dY(this.a,new W.fv(a,b,c))},
$iav:1}
W.fw.prototype={
$1:function(a){return H.d(a,"$iav").aT(this.a)},
$S:24}
W.fv.prototype={
$1:function(a){return H.d(a,"$iav").ax(this.a,this.b,this.c)},
$S:24}
W.e9.prototype={
fZ:function(a,b,c,d){var u,t,s
this.a.aw(0,c)
u=b.bS(0,new W.ic())
t=b.bS(0,new W.id())
this.b.aw(0,u)
s=this.c
s.aw(0,C.H)
s.aw(0,t)},
aT:function(a){return this.a.Z(0,W.c8(a))},
ax:function(a,b,c){var u,t
u=W.c8(a)
t=this.c
if(t.Z(0,H.j(u)+"::"+b))return this.d.jB(c)
else if(t.Z(0,"*::"+b))return this.d.jB(c)
else{t=this.b
if(t.Z(0,H.j(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.j(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iav:1}
W.ic.prototype={
$1:function(a){return!C.a.Z(C.B,H.G(a))},
$S:25}
W.id.prototype={
$1:function(a){return C.a.Z(C.B,H.G(a))},
$S:25}
W.ik.prototype={
ax:function(a,b,c){if(this.fD(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ja(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.il.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.G(a))},
$S:13}
W.ij.prototype={
aT:function(a){var u=J.S(a)
if(!!u.$icj)return!1
u=!!u.$ip
if(u&&W.c8(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aT(a)},
$iav:1}
W.d6.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdC(J.ly(this.a,u))
this.c=u
return!0}this.sdC(null)
this.c=t
return!1},
gM:function(){return this.d},
sdC:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
W.av.prototype={}
W.ia.prototype={$inY:1}
W.eg.prototype={
d9:function(a){new W.ix(this).$2(a,null)},
b3:function(a,b){if(b==null)J.jU(a)
else J.en(b,a)},
iK:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lD(a)
s=J.ja(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ad(o)}q="element unprintable"
try{q=J.an(a)}catch(o){H.ad(o)}try{p=W.c8(a)
this.iJ(H.d(a,"$iP"),b,u,q,p,H.d(t,"$iH"),H.G(s))}catch(o){if(H.ad(o) instanceof P.aD)throw o
else{this.b3(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b3(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aT(a)){this.b3(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ax(a,"is",g)){this.b3(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaB()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gaB().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.ax(a,J.lI(q),r.aZ(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.aZ(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aZ(u,q)
r.iz(u,q)}}if(!!J.S(a).$icn)this.d9(a.content)},
$inJ:1}
W.ix.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iK(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b3(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ad(r)
q=H.d(u,"$iB")
if(s){p=q.parentNode
if(p!=null)J.en(p,q)}else J.en(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iB")}},
$S:44}
W.e_.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.ei.prototype={}
P.ig.prototype={
ex:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
d4:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.S(a)
if(!!t.$iah)return new Date(a.a)
if(!!t.$imm)throw H.c(P.hl("structured clone of RegExp"))
if(!!t.$ibJ)return a
if(!!t.$iH){s=this.ex(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.a_(0,new P.ii(u,this))
return u.a}if(!!t.$ia){s=this.ex(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.jQ(a,s)}throw H.c(P.hl("structured clone of other type"))},
jQ:function(a,b){var u,t,s,r
u=J.bY(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.d4(u.k(a,r)))
return s}}
P.ii.prototype={
$2:function(a,b){this.a.a[a]=this.b.d4(b)},
$S:7}
P.iI.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.ih.prototype={}
P.eQ.prototype={
gbn:function(){var u,t,s
u=this.b
t=H.ab(u,"T",0)
s=W.P
return new H.fh(new H.cz(u,H.k(new P.eR(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.eS(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.gbn()
J.lF(u.b.$1(J.eo(u.a,b)),c)},
h:function(a,b){J.jS(this.b.a,b)},
gm:function(a){return J.aC(this.gbn().a)},
k:function(a,b){var u=this.gbn()
return u.b.$1(J.eo(u.a,b))},
gU:function(a){var u=P.m5(this.gbn(),!1,W.P)
return new J.ao(u,u.length,0,[H.r(u,0)])},
$aT:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.eR.prototype={
$1:function(a){return!!J.S(H.d(a,"$iB")).$iP},
$S:22}
P.eS.prototype={
$1:function(a){return H.i(H.d(a,"$iB"),"$iP")},
$S:53}
P.i5.prototype={
gbP:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
ge4:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cM(b,"$iay",[P.af],"$aay")){u=this.a
t=J.a5(b)
if(u==t.gbM(b)){s=this.b
if(s==t.gbQ(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gbP(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.ge4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.cS(u)
s=this.b
r=J.cS(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gL(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.x(s+this.d,q))
return P.mI(P.i3(P.i3(P.i3(P.i3(0,t),r),u),q))}}
P.ay.prototype={
gbM:function(a){return this.a},
gbQ:function(a){return this.b},
gbT:function(a){return this.c},
gbL:function(a){return this.d}}
P.cj.prototype={$icj:1}
P.p.prototype={
gcB:function(a){return new P.eQ(a,new W.am(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.av])
C.a.h(u,W.kE(null))
C.a.h(u,W.kG())
C.a.h(u,new W.ij())
c=new W.eg(new W.ds(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jS(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaL(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ip:1}
P.M.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
P.cV.prototype={$icV:1}
P.d7.prototype={$id7:1}
P.dv.prototype={$idv:1}
P.bO.prototype={
dZ:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
jG:function(a,b,c){return a.bindFramebuffer(b,c)},
jH:function(a,b,c){return a.blendFunc(b,c)},
e5:function(a,b,c,d){return a.bufferData(b,c,d)},
jK:function(a,b){return a.clear(b)},
jL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jM:function(a,b){return a.clearDepth(b)},
jO:function(a,b){return a.compileShader(b)},
jU:function(a,b){return a.createShader(b)},
jW:function(a,b){return a.deleteProgram(b)},
jX:function(a,b){return a.deleteShader(b)},
k_:function(a,b){return a.depthFunc(b)},
k0:function(a,b){return a.disable(b)},
e7:function(a,b){return a.disableVertexAttribArray(b)},
k6:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cF:function(a,b){return a.enable(b)},
ea:function(a,b){return a.enableVertexAttribArray(b)},
fe:function(a,b,c){return a.getActiveAttrib(b,c)},
ff:function(a,b,c){return a.getActiveUniform(b,c)},
fg:function(a,b,c){return a.getAttribLocation(b,c)},
d8:function(a,b){return a.getParameter(b)},
fi:function(a,b){return a.getProgramInfoLog(b)},
bV:function(a,b,c){return a.getProgramParameter(b,c)},
fj:function(a,b){return a.getShaderInfoLog(b)},
fk:function(a,b,c){return a.getShaderParameter(b,c)},
fl:function(a,b,c){return a.getUniformLocation(b,c)},
kn:function(a,b){return a.linkProgram(b)},
fu:function(a,b,c){return a.shaderSource(b,c)},
S:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f9:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fb:function(a,b){return a.useProgram(b)},
kZ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l_:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibO:1}
P.dA.prototype={$idA:1}
P.dQ.prototype={$idQ:1}
O.Z.prototype={
c_:function(a){this.shy(H.b([],[a]))
this.sdK(null)
this.sdH(null)
this.sdL(null)},
da:function(a,b,c){var u=H.ab(this,"Z",0)
H.k(b,{func:1,ret:P.N,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdK(b)
this.sdH(a)
this.sdL(c)},
bj:function(a,b){return this.da(a,null,b)},
ih:function(a){var u
H.h(a,"$in",[H.ab(this,"Z",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hF:function(a,b){var u
H.h(b,"$in",[H.ab(this,"Z",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ao(u,u.length,0,[H.r(u,0)])},
a8:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ab(this,"Z",0)
H.x(b,u)
u=[u]
if(this.ih(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hF(s,H.b([b],u))}},
shy:function(a){this.a=H.h(a,"$ia",[H.ab(this,"Z",0)],"$aa")},
sdK:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.n,H.ab(this,"Z",0)]]})},
sdH:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"Z",0)]]})},
sdL:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"Z",0)]]})},
$in:1}
O.ce.prototype={
gm:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
fK:function(a){var u=this.b
if(u!=null)u.J(a)},
aM:function(){return this.fK(null)},
ga1:function(){var u=this.a
if(u.length>0)return C.a.gaC(u)
else return V.bI()},
eX:function(a){var u=this.a
if(a==null)C.a.h(u,V.bI())
else C.a.h(u,a)
this.aM()},
cW:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sc8:function(a){this.a=H.h(a,"$ia",[V.aj],"$aa")}}
E.eu.prototype={}
E.ai.prototype={
dm:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
if(t.f==null)t.dm()}},
sab:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().N(0,this.geP())
t=this.c
if(t!=null)t.gC().h(0,this.geP())
s=new D.C("shape",u,this.c,this,[F.dB])
s.b=!0
this.aa(s)}},
sbf:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gC().N(0,this.geR())
t=this.f
this.f=a
if(a!=null)a.gC().h(0,this.geR())
this.dm()
s=new D.C("technique",t,this.f,this,[O.bo])
s.b=!0
this.aa(s)}},
saJ:function(a){var u,t
if(!J.O(this.r,a)){u=this.r
if(u!=null)u.gC().N(0,this.geN())
if(a!=null)a.gC().h(0,this.geN())
this.r=a
t=new D.C("mover",u,a,this,[U.a6])
t.b=!0
this.aa(t)}},
aq:function(a){var u,t,s,r
u=this.r
t=u!=null?u.ar(a,this):null
if(!J.O(t,this.x)){s=this.x
this.x=t
r=new D.C("matrix",s,t,this,[V.aj])
r.b=!0
this.aa(r)}u=this.f
if(u!=null)u.aq(a)
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aq(a)},
aW:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1())
else C.a.h(u.a,t.t(0,u.ga1()))
u.aM()
a.eY(this.f)
u=a.dy
s=(u&&C.a).gaC(u)
if(s!=null&&this.d!=null)s.kN(a,this)
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aW(a)
a.eW()
a.dx.cW()},
gC:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
aa:function(a){var u=this.z
if(u!=null)u.J(a)},
a3:function(){return this.aa(null)},
eQ:function(a){H.d(a,"$iy")
this.e=null
this.aa(a)},
ky:function(){return this.eQ(null)},
eS:function(a){this.aa(H.d(a,"$iy"))},
kz:function(){return this.eS(null)},
eO:function(a){this.aa(H.d(a,"$iy"))},
kx:function(){return this.eO(null)},
eM:function(a){this.aa(H.d(a,"$iy"))},
ku:function(){return this.eM(null)},
kt:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ai],"$an")
for(u=b.length,t=this.geL(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.sal(null)
o.sb1(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sal(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kw:function(a,b){var u,t
H.h(b,"$in",[E.ai],"$an")
for(u=b.gU(b),t=this.geL();u.E();)u.gM().gC().N(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfL:function(a,b){this.y=H.h(b,"$iZ",[E.ai],"$aZ")},
$ib4:1}
E.fH.prototype={
fG:function(a,b){var u,t
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
u=new O.ce()
t=[V.aj]
u.sc8(H.b([],t))
u.b=null
u.gC().h(0,new E.fI(this))
this.cy=u
u=new O.ce()
u.sc8(H.b([],t))
u.b=null
u.gC().h(0,new E.fJ(this))
this.db=u
u=new O.ce()
u.sc8(H.b([],t))
u.b=null
u.gC().h(0,new E.fK(this))
this.dx=u
this.siV(H.b([],[O.bo]))
u=this.dy;(u&&C.a).h(u,null)
this.siR(new H.aH([P.f,A.ck]))},
gkI:function(){var u=this.z
if(u==null){u=this.cy.ga1().t(0,this.db.ga1())
this.z=u}return u},
eY:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaC(u):a;(u&&C.a).h(u,t)},
eW:function(){var u=this.dy
if(u.length>1)u.pop()},
siV:function(a){this.dy=H.h(a,"$ia",[O.bo],"$aa")},
siR:function(a){this.fr=H.h(a,"$iH",[P.f,A.ck],"$aH")}}
E.fI.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fJ.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fK.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dM.prototype={
dg:function(a){H.d(a,"$iy")
this.f_()},
df:function(){return this.dg(null)},
gkg:function(){var u,t,s
u=Date.now()
t=C.f.a5(P.k0(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ah(u,!1)
return s/t},
dO:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.t()
if(typeof u!=="number")return H.A(u)
s=C.e.ey(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.t()
r=C.e.ey(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kq(C.y,this.gkP())}},
f_:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.h3(this),{func:1,ret:-1,args:[P.af]})
C.O.hl(u)
C.O.iG(u,W.kU(t,P.af))}},
kM:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dO()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ah(r,!1)
s.y=P.k0(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aM()
r=s.db
C.a.sm(r.a,0)
r.aM()
r=s.dx
C.a.sm(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aW(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ad(q)
t=H.bZ(q)
P.jL("Error: "+H.j(u))
P.jL("Stack: "+H.j(t))
throw H.c(u)}}}
E.h3.prototype={
$1:function(a){var u
H.nw(a)
u=this.a
if(u.ch){u.ch=!1
u.kM()}},
$S:31}
Z.dY.prototype={$inD:1}
Z.cW.prototype={
bq:function(a){var u,t,s
try{t=a.a
C.c.ea(t,this.e)
C.c.kZ(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.hH.prototype={$inE:1}
Z.cX.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bq:function(a){var u,t
u=this.a
C.c.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bq(a)},
f7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.e7(s,u[t].e)
C.c.ay(s,this.a.a,null)},
aW:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.c.ay(t,p,r.b)
C.c.k6(t,q.a,q.b,5123,0)
C.c.ay(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.an(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sht:function(a){this.b=H.h(a,"$ia",[Z.bi],"$aa")},
$inN:1}
Z.bi.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bL(this.c)+"'")+"]"}}
Z.aV.prototype={
gdc:function(a){var u,t
u=this.a
t=(u&$.b9().a)!==0?3:0
if((u&$.b8().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=2
if((u&$.bb().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.b6().a)!==0?t+4:t},
jD:function(a){var u,t,s
u=$.b9()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cP()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cQ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0)if(s===a)return u
return $.lr()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.b9().a)!==0)C.a.h(u,"Pos")
if((t&$.b8().a)!==0)C.a.h(u,"Norm")
if((t&$.b7().a)!==0)C.a.h(u,"Binm")
if((t&$.ba().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bb().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cP().a)!==0)C.a.h(u,"Clr3")
if((t&$.cQ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.b6().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.ex.prototype={}
D.bz.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.sal(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.b
t=(u&&C.a).N(u,b)||t}return t},
J:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.y(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a_(t,new D.eN(u))
t=this.b
if(t!=null)C.a.a_(t,new D.eO(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kQ:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
aj:function(){return this.kQ(!0,!1)},
sal:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
sb1:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.eN.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eO.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.y.prototype={}
D.bE.prototype={}
D.bF.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.cY.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cY))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.de.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.f6.prototype={
kF:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kB:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
siw:function(a){this.d=H.h(a,"$ikm",[P.l],"$akm")}}
X.dj.prototype={}
X.fd.prototype={
b0:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ah(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.t()
q=b.b
p=this.ch
if(typeof q!=="number")return q.t()
o=new V.a4(t.a+s*r,t.b+q*p)
p=this.a.gaU()
n=new X.b3(a,V.bm(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cV:function(a,b){this.r=a.a
return!1},
be:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fn()
if(typeof u!=="number")return u.bU()
this.r=(u&~t)>>>0
return!1},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b0(a,b))
return!0},
kG:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaU()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.t()
o=a.b
n=this.cy
if(typeof o!=="number")return o.t()
r=new X.cf(new V.R(q*p,o*n),t,s,new P.ah(r,!1),this)
r.b=!0
u.J(r)
return!0},
i4:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ah(Date.now(),!1)
t=this.f
s=new X.dj(c,a,this.a.gaU(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bm()}}
X.au.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b3.prototype={}
X.fq.prototype={
c5:function(a,b,c){var u,t,s
u=new P.ah(Date.now(),!1)
t=this.a.gaU()
s=new X.b3(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c5(a,b,!0))
return!0},
be:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fn()
if(typeof u!=="number")return u.bU()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c5(a,b,!0))
return!0},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c5(a,b,!1))
return!0},
kH:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaU()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.t()
p=a.b
o=this.ch
if(typeof p!=="number")return p.t()
s=new X.cf(new V.R(r*q,p*o),t,b,new P.ah(s,!1),this)
s.b=!0
u.J(s)
return!0},
ge8:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
gbR:function(){var u=this.c
if(u==null){u=D.Q()
this.c=u}return u},
geJ:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u}}
X.cf.prototype={}
X.fC.prototype={}
X.dO.prototype={}
X.h6.prototype={
b0:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a4],"$aa")
u=new P.ah(Date.now(),!1)
t=a.length>0?a[0]:V.bm()
s=this.a.gaU()
r=new X.dO(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kE:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.b
if(u==null)return!1
u.J(this.b0(a,!0))
return!0},
kC:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.c
if(u==null)return!1
u.J(this.b0(a,!0))
return!0},
kD:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.d
if(u==null)return!1
u.J(this.b0(a,!1))
return!0}}
X.dT.prototype={
gaU:function(){var u=this.a
return V.kk(0,0,C.q.ge6(u).c,C.q.ge6(u).d)},
dv:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.de(u,new X.au(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
cq:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a4(t-r,s-q)},
b2:function(a){return new V.R(a.movementX,a.movementY)},
ck:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a4])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.e.ap(p.pageX)
C.e.ap(p.pageY)
n=u.left
C.e.ap(p.pageX)
C.a.h(t,new V.a4(o-n,C.e.ap(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cY(u,new X.au(t,a.altKey,a.shiftKey))},
c9:function(a){var u,t,s,r,q,p
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
hZ:function(a){this.f=!0},
hN:function(a){this.f=!1},
hT:function(a){H.d(a,"$ia9")
if(this.f&&this.c9(a))a.preventDefault()},
i2:function(a){var u
H.d(a,"$iaO")
if(!this.f)return
u=this.dv(a)
this.b.kF(u)},
i0:function(a){var u
H.d(a,"$iaO")
if(!this.f)return
u=this.dv(a)
this.b.kB(u)},
i6:function(a){var u,t,s,r
H.d(a,"$ia9")
u=this.a
u.focus()
this.f=!0
this.aR(a)
if(this.x){t=this.aE(a)
s=this.b2(a)
if(this.d.cV(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aG(a)
if(this.c.cV(t,r))a.preventDefault()},
ia:function(a){var u,t,s
H.d(a,"$ia9")
this.aR(a)
u=this.aE(a)
if(this.x){t=this.b2(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.be(u,s))a.preventDefault()},
hX:function(a){var u,t,s
H.d(a,"$ia9")
if(!this.c9(a)){this.aR(a)
u=this.aE(a)
if(this.x){t=this.b2(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.be(u,s))a.preventDefault()}},
i8:function(a){var u,t,s
H.d(a,"$ia9")
this.aR(a)
u=this.aE(a)
if(this.x){t=this.b2(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()},
hV:function(a){var u,t,s
H.d(a,"$ia9")
if(!this.c9(a)){this.aR(a)
u=this.aE(a)
if(this.x){t=this.b2(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()}},
ic:function(a){var u,t
H.d(a,"$iaW")
this.aR(a)
u=new V.R((a&&C.N).gjY(a),C.N.gjZ(a)).B(0,180)
if(this.x){if(this.d.kG(u))a.preventDefault()
return}if(this.r)return
t=this.aG(a)
if(this.c.kH(u,t))a.preventDefault()},
ig:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aG(this.y)
this.d.i4(t,s,u)}},
iu:function(a){var u
H.d(a,"$iaJ")
this.a.focus()
this.f=!0
this.cq(a)
u=this.ck(a)
if(this.e.kE(u))a.preventDefault()},
iq:function(a){var u
H.d(a,"$iaJ")
this.cq(a)
u=this.ck(a)
if(this.e.kC(u))a.preventDefault()},
is:function(a){var u
H.d(a,"$iaJ")
this.cq(a)
u=this.ck(a)
if(this.e.kD(u))a.preventDefault()},
shm:function(a){this.z=H.h(a,"$ia",[[P.cm,P.L]],"$aa")}}
D.d2.prototype={$ia1:1,$ib4:1}
D.a1.prototype={$ib4:1}
D.dg.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
ad:function(a){var u=this.Q
if(u!=null)u.J(a)},
dJ:function(a){var u
H.d(a,"$iy")
u=this.ch
if(u!=null)u.J(a)},
i3:function(){return this.dJ(null)},
ij:function(a){var u,t,s
H.h(a,"$in",[D.a1],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fN(s))return!1}return!0},
hH:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdI(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.d(b[p],"$ia1")
if(o instanceof D.bl)C.a.h(this.f,o)
n=o.r
if(n==null){n=new D.bz()
n.sal(null)
n.sb1(null)
n.c=null
n.d=0
o.r=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bE(a,b,this,[u])
u.b=!0
this.ad(u)},
io:function(a,b){var u,t,s,r
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gdI();t.E();){r=t.gM()
C.a.N(this.e,r)
r.gC().N(0,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.ad(u)},
fN:function(a){var u=C.a.Z(this.f,a)
return u},
sfO:function(a){this.e=H.h(a,"$ia",[D.d2],"$aa")},
sfR:function(a){this.f=H.h(a,"$ia",[D.bl],"$aa")},
sfS:function(a){this.r=H.h(a,"$ia",[D.dC],"$aa")},
sfT:function(a){this.x=H.h(a,"$ia",[D.dJ],"$aa")},
sfU:function(a){this.y=H.h(a,"$ia",[D.dK],"$aa")},
sfV:function(a){this.z=H.h(a,"$ia",[D.dL],"$aa")},
$an:function(){return[D.a1]},
$aZ:function(){return[D.a1]}}
D.bl.prototype={
gC:function(){var u=this.r
if(u==null){u=D.Q()
this.r=u}return u},
ad:function(a){var u
H.d(a,"$iy")
u=this.r
if(u!=null)u.J(a)},
fQ:function(){return this.ad(null)},
$ia1:1,
$ib4:1}
D.dC.prototype={$ia1:1,$ib4:1}
D.dJ.prototype={$ia1:1,$ib4:1}
D.dK.prototype={$ia1:1,$ib4:1}
D.dL.prototype={$ia1:1,$ib4:1}
V.a_.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gd_())
t=C.e.n(this.b,b.gbW())
s=C.e.n(this.c,b.gcv())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gd_())
t=C.e.u(this.b,b.gbW())
s=C.e.u(this.c,b.gcv())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gd_())
t=C.e.n(this.b,b.gbW())
s=C.e.n(this.c,b.gcv())
r=C.e.n(this.d,b.gjC(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aE(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gd_())
t=C.e.u(this.b,b.gbW())
s=C.e.u(this.c,b.gcv())
r=C.e.u(this.d,b.gjC(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aE(u,t,s,r)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.eL.prototype={}
V.dn.prototype={
ak:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.o])
return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.D().a
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
u=[P.o]
t=V.bX(H.b([this.a,this.d,this.r],u),3,0)
s=V.bX(H.b([this.b,this.e,this.x],u),3,0)
r=V.bX(H.b([this.c,this.f,this.y],u),3,0)
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
V.aj.prototype={
ak:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.o])
return u},
eH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.D().a)return V.bI()
a8=1/a7
a9=-r
b0=-d
return V.aQ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
t:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aQ(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
f6:function(a){return new V.E(C.e.t(this.a,a.gbu(a))+C.e.t(this.b,a.gbv(a))+C.e.t(this.c,a.ge9()),C.e.t(this.e,a.gbu(a))+C.e.t(this.f,a.gbv(a))+C.e.t(this.r,a.ge9()),C.e.t(this.y,a.gbu(a))+C.e.t(this.z,a.gbv(a))+C.e.t(this.Q,a.ge9()))},
aY:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.W(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.D().a
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
i:function(a){return this.P()},
ez:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.o]
t=V.bX(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bX(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bX(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bX(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
P:function(){return this.ez("",3,0)},
G:function(a){return this.ez(a,3,0)}}
V.a4.prototype={
n:function(a,b){return new V.a4(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.W.prototype={
n:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aR.prototype={
n:function(a,b){return new V.aR(C.e.n(this.a,b.gl1(b)),C.e.n(this.b,b.gl2(b)),C.e.n(this.c,b.gl3(b)),C.e.n(this.d,b.gl0()))},
u:function(a,b){return new V.aR(C.e.u(this.a,b.gl1(b)),C.e.u(this.b,b.gl2(b)),C.e.u(this.c,b.gl3(b)),C.e.u(this.d,b.gl0()))},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.dy.prototype={
ga9:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.R.prototype={
cQ:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.A(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.A(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gbu(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gbv(b)
if(typeof u!=="number")return u.n()
return new V.R(t,C.e.n(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gbu(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.gbv(b)
if(typeof u!=="number")return u.u()
return new V.R(t,C.e.u(u,s))},
t:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.R(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.kx
if(u==null){u=new V.R(0,0)
$.kx=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.R(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.E.prototype={
cQ:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cR:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.E(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.E(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.E(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.E(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cy()
return new V.E(this.a/b,this.b/b,this.c/b)},
eI:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.ey.prototype={
c1:function(a){var u=V.j8(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sd5:function(a,b){},
scS:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.D().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c1(t)}u=new D.C("maximumLocation",u,this.b,this,[P.o])
u.b=!0
this.K(u)}},
scU:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c1(t)}u=new D.C("minimumLocation",u,this.c,this,[P.o])
u.b=!0
this.K(u)}},
sa2:function(a,b){var u
b=this.c1(b)
u=this.d
if(!(Math.abs(u-b)<$.D().a)){this.d=b
u=new D.C("location",u,b,this,[P.o])
u.b=!0
this.K(u)}},
scT:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.D().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.C("maximumVelocity",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sW:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.D().a)){this.f=a
u=new D.C("velocity",u,a,this,[P.o])
u.b=!0
this.K(u)}},
scE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.C("dampening",u,a,this,[P.o])
u.b=!0
this.K(u)}},
aq:function(a){var u,t,s,r,q
u=this.f
t=$.D().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.D().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sW(s)}}}
U.d_.prototype={
gC:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
ar:function(a,b){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d_))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cb.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.e
if(u!=null)u.J(a)},
a7:function(){return this.K(null)},
fX:function(a,b){var u,t,s,r,q,p,o,n
u=U.a6
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaP(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.K(u)},
il:function(a,b){var u,t,s
u=U.a6
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gaP();t.E();)t.gM().gC().N(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.K(u)},
ar:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.X()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ao(u,u.length,0,[H.r(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.ar(a,b)
if(r!=null)s=s==null?r:r.t(0,s)}}this.f=s==null?V.bI():s
u=this.e
if(u!=null)u.aj()}return this.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cb))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.a6]},
$aZ:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dz.prototype={
gC:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sfd:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.D().a)){this.a=a
u=new D.C("yaw",u,a,this,[P.o])
u.b=!0
this.K(u)}},
seV:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.D().a)){this.b=a
u=new D.C("pitch",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sf0:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
u=new D.C("roll",u,a,this,[P.o])
u.b=!0
this.K(u)}},
ar:function(a,b){var u,t
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfd(this.a+this.d*a.y)
this.seV(this.b+this.e*a.y)
this.sf0(this.c+this.f*a.y)
this.x=V.ka(this.c).t(0,V.k9(this.b)).t(0,V.k8(this.a))
u=this.y
if(u!=null)u.aj()}return this.x},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
u=this.a
t=b.a
s=$.D().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}}
U.dU.prototype={
gC:function(){var u=this.cy
if(u==null){u=D.Q()
this.cy=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.cy
if(u!=null)u.J(a)},
a7:function(){return this.K(null)},
b5:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge8().h(0,this.gca())
this.a.c.geJ().h(0,this.gcc())
this.a.c.gbR().h(0,this.gce())
return!0},
cb:function(a){H.d(a,"$iy")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cd:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib3")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.R(t.a,t.b).t(0,2).B(0,u.ga9())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.t()
s=this.e
if(typeof s!=="number")return H.A(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.R(s.a,s.b).t(0,2).B(0,u.ga9())
s=this.b
q=r.a
if(typeof q!=="number")return q.T()
p=this.e
if(typeof p!=="number")return H.A(p)
o=this.z
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
this.b.sW(0)
t=t.u(0,a.z)
this.Q=new V.R(t.a,t.b).t(0,2).B(0,u.ga9())}this.a7()},
cf:function(a){var u,t,s
H.d(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.t()
s=this.e
if(typeof s!=="number")return H.A(s)
u.sW(t*10*s)
this.a7()}},
ar:function(a,b){var u,t,s
u=this.ch
t=a.e
if(typeof u!=="number")return u.X()
if(u<t){this.ch=t
s=a.y
this.b.aq(s)
this.cx=V.ka(this.b.d)}return this.cx},
$ia6:1}
U.dV.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.fx
if(u!=null)u.J(a)},
a7:function(){return this.K(null)},
b5:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ge8().h(0,this.gca())
this.a.c.geJ().h(0,this.gcc())
this.a.c.gbR().h(0,this.gce())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.ghz())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.ghB())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.gj0())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.giZ())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.giX())
return!0},
av:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.R(u,t)},
cb:function(a){a=H.i(H.d(a,"$iy"),"$ib3")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cd:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib3")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.av(new V.R(t.a,t.b).t(0,2).B(0,u.ga9()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sW(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.av(new V.R(s.a,s.b).t(0,2).B(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.av(new V.R(t.a,t.b).t(0,2).B(0,u.ga9()))}this.a7()},
cf:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sW(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sW(-t*10*u)
this.a7()}},
hA:function(a){if(H.i(H.d(a,"$iy"),"$idj").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hC:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib3")
if(!J.O(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.av(new V.R(s.a,s.b).t(0,2).B(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.av(new V.R(t.a,t.b).t(0,2).B(0,u.ga9()))
this.a7()},
j1:function(a){H.d(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j_:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$idO")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.av(new V.R(t.a,t.b).t(0,2).B(0,u.ga9()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sW(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.av(new V.R(s.a,s.b).t(0,2).B(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.av(new V.R(t.a,t.b).t(0,2).B(0,u.ga9()))}this.a7()},
iY:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sW(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sW(-t*10*u)
this.a7()}},
ar:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.X()
if(u<t){this.dy=t
s=a.y
this.c.aq(s)
this.b.aq(s)
this.fr=V.k8(this.b.d).t(0,V.k9(this.c.d))}return this.fr},
$ia6:1}
U.dW.prototype={
gC:function(){var u=this.r
if(u==null){u=D.Q()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.J(a)},
b5:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.Q()
u.e=t
u=t}else u=t
t=this.ghD()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.Q()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hE:function(a){var u,t,s,r
H.d(a,"$iy")
if(!J.O(this.b,this.a.b.c))return
H.i(a,"$icf")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){this.d=r
u=new D.C("zoom",u,r,this,[P.o])
u.b=!0
this.K(u)}},
ar:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.jn(s,s,s,1)}return this.f},
$ia6:1}
M.d5.prototype={
aD:function(a){var u
H.d(a,"$iy")
u=this.x
if(u!=null)u.J(a)},
fY:function(){return this.aD(null)},
hP:function(a,b){var u,t,s,r,q,p,o,n
u=E.ai
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gau(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.sal(null)
n.sb1(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.aD(u)},
hR:function(a,b){var u,t,s
u=E.ai
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gau();t.E();)t.gM().gC().N(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.aD(u)},
sbf:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().N(0,this.gau())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gau())
u=new D.C("technique",t,this.c,this,[O.bo])
u.b=!0
this.aD(u)}},
gC:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aW:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eY(this.c)
u=this.b
u.toString
t=a1.a
C.c.jG(t,36160,null)
C.c.cF(t,2884)
C.c.cF(t,2929)
C.c.k_(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.A(s)
o=C.e.ap(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.e.ap(p*r)
p=C.e.ap(q.c*s)
a1.c=p
q=C.e.ap(q.d*r)
a1.d=q
C.c.l_(t,o,n,p,q)
C.c.jM(t,u.c)
u=u.a
C.c.jL(t,u.a,u.b,u.c,u.d)
C.c.jK(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aQ(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.eX(i)
t=$.kf
if(t==null){t=V.kh()
q=$.kA
if(q==null){q=new V.E(0,1,0)
$.kA=q}p=$.ky
if(p==null){p=new V.E(0,0,-1)
$.ky=p}h=p.B(0,Math.sqrt(p.H(p)))
q=q.aH(h)
g=q.B(0,Math.sqrt(q.H(q)))
f=h.aH(g)
e=new V.E(t.a,t.b,t.c)
d=g.T(0).H(e)
c=f.T(0).H(e)
b=h.T(0).H(e)
t=V.aQ(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kf=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ar(a1,u)
if(a0!=null)a=a0.t(0,a)}a1.db.eX(a)
u=this.c
if(u!=null)u.aq(a1)
for(u=this.d.a,u=new J.ao(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aq(a1)
for(u=this.d.a,u=new J.ao(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aW(a1)
this.a.toString
a1.cy.cW()
a1.db.cW()
this.b.toString
a1.eW()},
shd:function(a,b){this.d=H.h(b,"$iZ",[E.ai],"$aZ")},
$inK:1}
A.cU.prototype={}
A.er.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k7:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.c.ea(r.a,r.c)}},
k5:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.c.e7(r.a,r.c)}}}
A.fk.prototype={
fF:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.j9(u)
a7.jg(u)
a7.ja(u)
a7.jo(u)
a7.jp(u)
a7.ji(u)
a7.jt(u)
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
s.jd(u)
s.j8(u)
s.jb(u)
s.je(u)
s.jm(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jk(u)
s.jl(u)}s.jh(u)
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
s.jc(u)
s.jj(u)
s.jn(u)
s.jq(u)
s.jr(u)
s.js(u)
s.jf(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dw(n,35633)
this.f=this.dw(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.c.dZ(s,q,this.e)
C.c.dZ(s,this.r,this.f)
C.c.kn(s,this.r)
if(!H.jD(C.c.bV(s,this.r,35714))){h=C.c.fi(s,this.r)
C.c.jW(s,this.r)
H.q(P.u("Failed to link shader: "+H.j(h)))}this.iO()
this.iQ()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.i(this.y.p(0,"invViewMat"),"$iaw")
if(t)this.dy=H.i(this.y.p(0,"objMat"),"$iaw")
if(r)this.fr=H.i(this.y.p(0,"viewObjMat"),"$iaw")
this.fy=H.i(this.y.p(0,"projViewObjMat"),"$iaw")
if(a7.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icr")
if(a7.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iaw")
if(a7.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iaw")
this.sh9(H.b([],[A.aw]))
t=a7.aA
if(t>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(f,"$iaw"))}}t=a7.a
if(t!==C.d){this.r2=H.i(this.y.p(0,"emissionClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.i(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.i:this.ry=H.i(this.y.p(0,"emissionTxt"),"$ial")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.d){this.x2=H.i(this.y.p(0,"ambientClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.i(this.y.p(0,"ambientTxt"),"$iak")
this.aA=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.i:this.y2=H.i(this.y.p(0,"ambientTxt"),"$ial")
this.aA=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.d){this.ao=H.i(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.bw=H.i(this.y.p(0,"diffuseTxt"),"$iak")
this.bx=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.i:this.eb=H.i(this.y.p(0,"diffuseTxt"),"$ial")
this.bx=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.d){this.by=H.i(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ec=H.i(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bz=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.i:this.ed=H.i(this.y.p(0,"invDiffuseTxt"),"$ial")
this.bz=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.d){this.bC=H.i(this.y.p(0,"shininess"),"$iX")
this.bA=H.i(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ee=H.i(this.y.p(0,"specularTxt"),"$iak")
this.bB=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.i:this.ef=H.i(this.y.p(0,"specularTxt"),"$ial")
this.bB=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.eg=H.i(this.y.p(0,"bumpTxt"),"$iak")
this.bD=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.i:this.eh=H.i(this.y.p(0,"bumpTxt"),"$ial")
this.bD=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.ei=H.i(this.y.p(0,"envSampler"),"$ial")
this.ej=H.i(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.d){this.bE=H.i(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ek=H.i(this.y.p(0,"reflectTxt"),"$iak")
this.bF=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.i:this.el=H.i(this.y.p(0,"reflectTxt"),"$ial")
this.bF=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.d){this.bG=H.i(this.y.p(0,"refraction"),"$iX")
this.bH=H.i(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.em=H.i(this.y.p(0,"refractTxt"),"$iak")
this.bI=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.i:this.en=H.i(this.y.p(0,"refractTxt"),"$ial")
this.bI=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.d){this.bJ=H.i(this.y.p(0,"alpha"),"$iX")
switch(t){case C.d:break
case C.j:break
case C.h:this.eo=H.i(this.y.p(0,"alphaTxt"),"$iak")
this.bK=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.i:this.ep=H.i(this.y.p(0,"alphaTxt"),"$ial")
this.bK=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.shj(H.b([],[A.cq]))
this.siv(H.b([],[A.cs]))
this.siT(H.b([],[A.ct]))
this.sj3(H.b([],[A.cu]))
this.sj4(H.b([],[A.cv]))
this.sj5(H.b([],[A.cw]))
if(a7.k2){t=a7.z
if(t>0){this.eq=H.d(this.y.p(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.cG;(s&&C.a).h(s,new A.cq(g,f,e))}}t=a7.Q
if(t>0){this.er=H.d(this.y.p(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iX")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.cH;(s&&C.a).h(s,new A.cs(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.es=H.d(this.y.p(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iX")
s=this.cI;(s&&C.a).h(s,new A.ct(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eu=H.d(this.y.p(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iak")
s=this.cJ;(s&&C.a).h(s,new A.cu(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ev=H.d(this.y.p(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$icr")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$ial")
s=this.cK;(s&&C.a).h(s,new A.cv(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.ew=H.d(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iX")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iX")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iX")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iX")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a6,"$iak")
s=this.cL;(s&&C.a).h(s,new A.cw(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
am:function(a,b,c){C.c.V(b.a,b.d,1)},
af:function(a,b,c){C.c.V(b.a,b.d,1)},
sh9:function(a){this.r1=H.h(a,"$ia",[A.aw],"$aa")},
shj:function(a){this.cG=H.h(a,"$ia",[A.cq],"$aa")},
siv:function(a){this.cH=H.h(a,"$ia",[A.cs],"$aa")},
siT:function(a){this.cI=H.h(a,"$ia",[A.ct],"$aa")},
sj3:function(a){this.cJ=H.h(a,"$ia",[A.cu],"$aa")},
sj4:function(a){this.cK=H.h(a,"$ia",[A.cv],"$aa")},
sj5:function(a){this.cL=H.h(a,"$ia",[A.cw],"$aa")}}
A.fn.prototype={
j9:function(a){var u,t,s
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
jg:function(a){var u
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
ja:function(a){var u
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
jo:function(a){var u,t
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
jp:function(a){var u,t
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
ji:function(a){var u
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
jt:function(a){var u
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
aF:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.b.at(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jd:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aF(a,u,"emission")
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
j8:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aF(a,u,"ambient")
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
jb:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"diffuse")
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
je:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"invDiffuse")
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
jm:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aF(a,u,"specular")
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
jh:function(a){var u,t
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
jk:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aF(a,u,"reflect")
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
jl:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aF(a,u,"refract")
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
jc:function(a){var u,t
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
jj:function(a){var u,t
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
jn:function(a){var u,t
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
jq:function(a){var u,t,s
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
jr:function(a){var u,t,s
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
js:function(a){var u,t,s
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
jf:function(a){var u
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
i:function(a){return this.ao}}
A.cq.prototype={}
A.cu.prototype={}
A.cs.prototype={}
A.cv.prototype={}
A.ct.prototype={}
A.cw.prototype={}
A.ck.prototype={
fI:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dw:function(a,b){var u,t,s
u=this.a
t=C.c.jU(u,b)
C.c.fu(u,t,a)
C.c.jO(u,t)
if(!H.jD(C.c.fk(u,t,35713))){s=C.c.fj(u,t)
C.c.jX(u,t)
throw H.c(P.u("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
iO:function(){var u,t,s,r,q,p
u=H.b([],[A.cU])
t=this.a
s=H.ac(C.c.bV(t,this.r,35721))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.c.fe(t,this.r,r)
p=C.c.fg(t,this.r,q.name)
C.a.h(u,new A.cU(t,q.name,p))}this.x=new A.er(u)},
iQ:function(){var u,t,s,r,q,p
u=H.b([],[A.dP])
t=this.a
s=H.ac(C.c.bV(t,this.r,35718))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.c.ff(t,this.r,r)
p=C.c.fl(t,this.r,q.name)
C.a.h(u,this.jV(q.type,q.size,q.name,p))}this.y=new A.hi(u)},
aO:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jq(u,t,b,a,c)},
hg:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jq(u,t,b,a,c)},
hh:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.al(u,t,b,c)
else return A.jq(u,t,b,a,c)},
bp:function(a,b){return new P.e1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jV:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.hd(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.hg(this.a,this.r,c,d)
case 35667:return new A.he(this.a,this.r,c,d)
case 35668:return new A.hf(this.a,this.r,c,d)
case 35669:return new A.hh(this.a,this.r,c,d)
case 35674:return new A.hj(this.a,this.r,c,d)
case 35675:return new A.cr(this.a,this.r,c,d)
case 35676:return new A.aw(this.a,this.r,c,d)
case 35678:return this.hg(b,c,d)
case 35680:return this.hh(b,c,d)
case 35670:throw H.c(this.bp("BOOL",c))
case 35671:throw H.c(this.bp("BOOL_VEC2",c))
case 35672:throw H.c(this.bp("BOOL_VEC3",c))
case 35673:throw H.c(this.bp("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.by.prototype={
i:function(a){return this.b}}
A.dP.prototype={}
A.hi.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
kf:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.kf("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.he.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hf.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hh.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hc.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sj6:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hd.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hg.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hj.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cr.prototype={
as:function(a){var u=new Float32Array(H.bS(H.h(a,"$ia",[P.o],"$aa")))
C.c.f8(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aw.prototype={
as:function(a){var u=new Float32Array(H.bS(H.h(a,"$ia",[P.o],"$aa")))
C.c.f9(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.al.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iz.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cR(u.b,b).cR(u.d.cR(u.c,b),c)
a.sa2(0,new V.W(t.a,t.b,t.c))
a.sf2(t.B(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.se2(new V.aR(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.iJ.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:30}
F.iL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.A(q)
t=-t*q
p=s*q
a.sa2(0,new V.W(t,p,r))
p=new V.E(t,p,r)
a.sf2(p.B(0,Math.sqrt(p.H(p))))
a.se2(new V.aR(1-c,2+c,-1,-1))},
$S:8}
F.iM.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:21}
F.iN.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:21}
F.j4.prototype={
$2:function(a,b){return 0},
$S:30}
F.j5.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.A(u)
t=a.f
s=new V.E(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.H(s))).t(0,this.b+u)
a.sa2(0,new V.W(u.a,u.b,u.c))},
$S:8}
F.j6.prototype={
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)},
$S:18}
F.iU.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.W(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.iK.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jR(t.$1(u),s)
s=J.lx(J.jR(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.E(s.a,s.b,s.c)
q=s.B(0,Math.sqrt(s.H(s)))
t=$.kz
if(t==null){t=new V.E(1,0,0)
$.kz=t
p=t}else p=t
if(!J.O(q,p)){t=$.kB
if(t==null){t=new V.E(0,0,1)
$.kB=t
p=t}else p=t}t=q.aH(p)
o=t.B(0,Math.sqrt(t.H(t)))
t=o.aH(q)
p=t.B(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.t(0,t*s)
s=o.t(0,m*s)
a.sa2(0,J.lw(r,new V.W(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a2.prototype={
b7:function(){if(!this.gb8()){C.a.N(this.a.a.d.b,this)
this.a.a.a3()}this.cm()
this.cn()
this.iC()},
cr:function(a){this.a=a
C.a.h(a.d.b,this)},
cs:function(a){this.b=a
C.a.h(a.d.c,this)},
iN:function(a){this.c=a
C.a.h(a.d.d,this)},
cm:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cn:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
iC:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
h8:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cy()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eI())return
return q.B(0,Math.sqrt(q.H(q)))},
hc:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.E(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.H(u)))
u=r.u(0,t)
u=new V.E(u.a,u.b,u.c)
u=q.aH(u.B(0,Math.sqrt(u.H(u))))
return u.B(0,Math.sqrt(u.H(u)))},
cA:function(){if(this.d!=null)return!0
var u=this.h8()
if(u==null){u=this.hc()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
h7:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cy()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eI())return
return q.B(0,Math.sqrt(q.H(q)))},
hb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.D().a){u=m.u(0,p)
u=new V.E(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.T(0)}else{g=(u-l.b)/i
u=m.u(0,p).t(0,g).n(0,p).u(0,s)
u=new V.E(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.T(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.H(u)))
u=f.aH(h)
u=u.B(0,Math.sqrt(u.H(u))).aH(f)
h=u.B(0,Math.sqrt(u.H(u)))}return h},
cw:function(){if(this.e!=null)return!0
var u=this.h7()
if(u==null){u=this.hb()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjN:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t
if(this.gb8())return a+"disposed"
u=a+C.b.ai(J.an(this.a.e),0)+", "+C.b.ai(J.an(this.b.e),0)+", "+C.b.ai(J.an(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.eP.prototype={}
F.fV.prototype={
bb:function(a,b,c){var u,t
u=b.a
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b2.prototype={
b7:function(){if(!this.gb8()){C.a.N(this.a.a.c.b,this)
this.a.a.a3()}this.cm()
this.cn()},
cr:function(a){this.a=a
C.a.h(a.c.b,this)},
cs:function(a){this.b=a
C.a.h(a.c.c,this)},
cm:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cn:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gb8())return a+"disposed"
return a+C.b.ai(J.an(this.a.e),0)+", "+C.b.ai(J.an(this.b.e),0)},
P:function(){return this.G("")}}
F.f7.prototype={}
F.hb.prototype={
bb:function(a,b,c){var u,t
u=b.a
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
return u==t.e}else{u=b.a
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
return u==t.e}else return!1}}}
F.bk.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ai(J.an(u.e),0)},
P:function(){return this.G("")}}
F.dB.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
bc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.jP())}this.a.D()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bk()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.m0(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c9(k,j,h)}u=this.e
if(u!=null)u.aj()},
az:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.az()||!1
if(!this.a.az())t=!1
u=this.e
if(u!=null)u.aj()
return t},
kq:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.aa];t.length!==0;){s=C.a.gkb(t)
C.a.kK(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.bb(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.bc(r)}}this.a.D()
this.c.d0()
this.d.d0()
this.b.kL()
this.c.d1(new F.hb())
this.d.d1(new F.fV())
u=this.e
if(u!=null)u.aj()},
jz:function(a){this.kq(new F.hB(),new F.fx())},
ct:function(){return this.jz(null)},
cM:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cM()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.e(u,t)
s=u[t]
u=s.r
if(u!=null)s.seK(new V.E(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.E(r,q,u).B(0,Math.sqrt(r*r+q*q+u*u))
if(!J.O(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.J(null)}}}}u=this.e
if(u!=null)u.aj()},
jI:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b9()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b8().a)!==0)++r
if((s&$.b7().a)!==0)++r
if((s&$.ba().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.cP().a)!==0)++r
if((s&$.cQ().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.b6().a)!==0)++r
q=a1.gdc(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.o
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cW])
for(m=0,l=0;l<r;++l){k=a1.jD(l)
j=k.gdc(k)
C.a.q(n,l,new Z.cW(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].ko(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.c.ay(t,34962,e)
C.c.e5(t,34962,new Float32Array(H.bS(o)),35044)
C.c.ay(t,34962,null)
d=new Z.cX(new Z.dY(34962,e),n,a1)
d.sht(H.b([],[Z.bi]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.jt(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bi(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.jt(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bi(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.D()
C.a.h(c,b.e)}a=Z.jt(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bi(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
aa:function(a){var u=this.e
if(u!=null)u.J(a)},
a3:function(){return this.aa(null)},
$inL:1}
F.fO.prototype={
jv:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.aa],"$aa")
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
C.a.h(u,F.c9(s,p,o))}}return u},
jw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.aa],"$aa")
u=H.b([],[F.a2])
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
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.bb(0,p,n)){p.b7()
break}}}}},
d0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjN(s)
if(t)s.b7()}},
az:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cA())s=!1
return s},
cz:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cw())s=!1
return s},
cM:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.E(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.E(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
shn:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")}}
F.fP.prototype={
gm:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.bb(0,p,n)){p.b7()
break}}}}},
d0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.b7()}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
P:function(){return this.G("")},
shv:function(a){this.b=H.h(a,"$ia",[F.b2],"$aa")}}
F.fQ.prototype={
gm:function(a){return this.b.length},
kL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
scj:function(a){this.b=H.h(a,"$ia",[F.bk],"$aa")}}
F.aa.prototype={
cD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.dX(this.cx,s,p,u,t,r,q,a,o)},
jP:function(){return this.cD(null)},
sa2:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seK:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.H(a)))
if(!J.O(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
sf2:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
se2:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
ko:function(a){var u,t
if(a.w(0,$.b9())){u=this.f
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b8())){u=this.r
t=[P.o]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b7())){u=this.x
t=[P.o]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.ba())){u=this.y
t=[P.o]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.w(0,$.bb())){u=this.z
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.cP())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.cQ())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.c1()))return H.b([this.ch],[P.o])
else if(a.w(0,$.b6())){u=this.cx
t=[P.o]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.o])},
cA:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cy()
this.d.a_(0,new F.hG(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aj()}return!0},
cw:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cy()
this.d.a_(0,new F.hF(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aj()}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.b.ai(J.an(this.e),0))
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
P:function(){return this.G("")}}
F.hG.prototype={
$1:function(a){var u,t
H.d(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hF.prototype={
$1:function(a){var u,t
H.d(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hw.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
jy:function(a,b,c,d,e,f,g,h,i){var u=F.dX(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jx:function(a,b,c,d,e,f){return this.jy(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
az:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cA()
return!0},
cz:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cw()
return!0},
jJ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.D()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
sj7:function(a){this.c=H.h(a,"$ia",[F.aa],"$aa")}}
F.hx.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
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
a_:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.a_(this.b,b)
C.a.a_(this.c,new F.hy(this,b))
C.a.a_(this.d,new F.hz(this,b))},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
sho:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")},
shp:function(a){this.c=H.h(a,"$ia",[F.a2],"$aa")},
shq:function(a){this.d=H.h(a,"$ia",[F.a2],"$aa")}}
F.hy.prototype={
$1:function(a){H.d(a,"$ia2")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:6}
F.hz.prototype={
$1:function(a){var u
H.d(a,"$ia2")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:6}
F.hA.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
shw:function(a){this.b=H.h(a,"$ia",[F.b2],"$aa")},
shx:function(a){this.c=H.h(a,"$ia",[F.b2],"$aa")}}
F.hC.prototype={}
F.hB.prototype={
bb:function(a,b,c){return J.O(b.f,c.f)}}
F.hD.prototype={}
F.fx.prototype={
bc:function(a){var u,t,s,r
H.h(a,"$ia",[F.aa],"$aa")
u=V.cy()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.E(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.H(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)a[s].seK(u)
return}}
F.hE.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
scj:function(a){this.b=H.h(a,"$ia",[F.bk],"$aa")}}
O.dl.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
ae:function(a){var u
H.d(a,"$iy")
u=this.dy
if(u!=null)u.J(a)},
h0:function(){return this.ae(null)},
dN:function(a){H.d(a,"$iy")
this.a=null
this.ae(a)},
iI:function(){return this.dN(null)},
hJ:function(a,b){var u=V.aj
u=new D.bE(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.ae(u)},
hL:function(a,b){var u=V.aj
u=new D.bF(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.ae(u)},
dt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a7=$.b9()
if(a0){b=$.b8()
a7=new Z.aV(a7.a|b.a)}if(a1){b=$.b7()
a7=new Z.aV(a7.a|b.a)}if(a2){b=$.ba()
a7=new Z.aV(a7.a|b.a)}if(a3){b=$.bb()
a7=new Z.aV(a7.a|b.a)}if(a5){b=$.b6()
a7=new Z.aV(a7.a|b.a)}return new A.fn(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
Y:function(a,b){H.h(a,"$ia",[T.dI],"$aa")},
aq:function(a){var u,t,s,r
for(u=this.dx.a,u=new J.ao(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
t.toString
s=$.bn
if(s==null){s=new V.W(0,0,0)
$.bn=s}t.a=s
s=t.b
if(s!=null){r=s.ar(a,t)
if(r!=null)t.a=r.aY(t.a)}}},
kN:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dt()
t=a4.fr.k(0,u.ao)
if(t==null){t=A.m7(u,a4.a)
s=t.b
if(s.length===0)H.q(P.u("May not cache a shader with no name."))
if(a4.fr.br(s))H.q(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bw
u=a5.e
if(!(u instanceof Z.cX)){a5.e=null
u=null}if(u==null||!u.d.w(0,q)){u=r.r1
if(u)a5.d.az()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cz()
o.a.cz()
o=o.e
if(o!=null)o.aj()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jJ()
n=n.e
if(n!=null)n.aj()}l=a5.d.jI(new Z.hH(a4.a),q)
l.aV($.b9()).e=this.a.Q.c
if(u)l.aV($.b8()).e=this.a.cx.c
if(p)l.aV($.b7()).e=this.a.ch.c
if(r.rx)l.aV($.ba()).e=this.a.cy.c
if(o)l.aV($.bb()).e=this.a.db.c
if(r.x1)l.aV($.b6()).e=this.a.dx.c
a5.e=l}u=T.dI
k=H.b([],[u])
p=this.a
o=a4.a
C.c.fb(o,p.r)
p.x.k7()
if(r.fx){p=this.a
n=a4.dx.ga1()
p=p.dy
p.toString
p.as(n.ak(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga1().t(0,a4.dx.ga1())
a4.cx=n}p=p.fr
p.toString
p.as(n.ak(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkI().t(0,a4.dx.ga1())
a4.ch=n}p=p.fy
p.toString
p.as(n.ak(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.as(C.r.ak(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.as(C.r.ak(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.as(C.r.ak(n,!0))}if(r.aA>0){j=this.e.a.length
p=this.a.k4
C.c.V(p.a,p.d,j)
for(p=[P.o],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.d(m,"$iaj")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.bS(H.h(m.ak(0,!0),"$ia",p,"$aa")))
C.c.f9(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.f.d)
p=this.a
n=this.f.d
p.am(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.f.e)
p=this.a
n=this.f.e
p.af(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.r.d)
p=this.a
n=this.r.d
p.am(p.y1,p.aA,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.r.e)
p=this.a
n=this.r.e
p.af(p.y2,p.aA,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.ao
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.x.d)
p=this.a
n=this.x.d
p.am(p.bw,p.bx,n)
n=this.a
p=this.x.f
n=n.ao
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.x.e)
p=this.a
n=this.x.e
p.af(p.eb,p.bx,n)
n=this.a
p=this.x.f
n=n.ao
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.by
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.y.d)
p=this.a
n=this.y.d
p.am(p.ec,p.bz,n)
n=this.a
p=this.y.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.y.e)
p=this.a
n=this.y.e
p.af(p.ed,p.bz,n)
n=this.a
p=this.y.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bA
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bC
C.c.S(n.a,n.d,g)
break
case C.h:this.Y(k,this.z.d)
p=this.a
n=this.z.d
p.am(p.ee,p.bB,n)
n=this.a
p=this.z.f
n=n.bA
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bC
C.c.S(p.a,p.d,g)
break
case C.i:this.Y(k,this.z.e)
p=this.a
n=this.z.e
p.af(p.ef,p.bB,n)
n=this.a
p=this.z.f
n=n.bA
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bC
C.c.S(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eq
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cG
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.f6(c.gbt(c))
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.c.A(a.a,a.d,g,m,a0)
a0=c.gan(c)
m=b.c
C.c.A(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.er
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cH
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.a
g=b.b
a=m.a
a0=m.b
m=m.c
C.c.A(g.a,g.d,a,a0,m)
m=f.aY(c.a)
a0=b.c
C.c.A(a0.a,a0.d,m.a,m.b,m.c)
m=c.c
a0=b.d
C.c.A(a0.a,a0.d,m.a,m.b,m.c)
m=c.d
a0=b.e
C.c.S(a0.a,a0.d,m)
m=c.e
a0=b.f
C.c.S(a0.a,a0.d,m)
m=c.f
a0=b.r
C.c.S(a0.a,a0.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.es
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cI
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gcX(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbt(c).l9()
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.aY(c.gcX(c))
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gan(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gl7()
g=b.f
C.c.S(g.a,g.d,m)
m=c.gl6()
g=b.r
C.c.S(g.a,g.d,m)
m=c.ge_()
g=b.x
C.c.S(g.a,g.d,m)
m=c.ge0()
g=b.y
C.c.S(g.a,g.d,m)
m=c.ge1()
g=b.z
C.c.S(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eu
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
g=this.a.cJ
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gbg()
H.h(k,"$ia",m,"$aa")
if(!C.a.Z(k,g)){g.sb9(0,k.length)
C.a.h(k,g)}g=c.gbt(c)
a=b.d
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbR()
a=b.b
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbP(c)
a=b.c
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=f.f6(c.gbt(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.c.A(a0.a,a0.d,a,g,a1)
a1=c.gan(c)
g=b.f
C.c.A(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbg()
g=a1.gba(a1)
if(!g){g=b.x
C.c.V(g.a,g.d,1)}else{g=b.r
a=a1.gba(a1)
a0=g.a
g=g.d
if(!a)C.c.V(a0,g,0)
else C.c.V(a0,g,a1.gb9(a1))
g=b.x
C.c.V(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ev
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.y,n=p.length,m=[P.o],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
a=this.a.cK
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gbg()
H.h(k,"$ia",g,"$aa")
if(!C.a.Z(k,a)){a.sb9(0,k.length)
C.a.h(k,a)}a2=f.t(0,c.ga1())
a=c.ga1()
a0=$.bn
if(a0==null){a0=new V.W(0,0,0)
$.bn=a0}a0=a.aY(a0)
a=b.b
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bn
if(a==null){a=new V.W(0,0,0)
$.bn=a}a=a2.aY(a)
a0=b.c
C.c.A(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eH()
a0=b.d
h=new Float32Array(H.bS(H.h(new V.dn(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ak(0,!0),"$ia",m,"$aa")))
C.c.f8(a0.a,a0.d,!1,h)
a0=c.gan(c)
a=b.e
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbg()
a=a0.gba(a0)
if(!a){a=b.r
C.c.V(a.a,a.d,1)}else{a=b.f
a1=a0.gba(a0)
a3=a.a
a=a.d
if(!a1)C.c.V(a3,a,0)
else C.c.V(a3,a,a0.gb9(a0))
a=b.r
C.c.V(a.a,a.d,0)}a=c.ge_()
a0=b.x
C.c.S(a0.a,a0.d,a)
a=c.ge0()
a0=b.y
C.c.S(a0.a,a0.d,a)
a=c.ge1()
a0=b.z
C.c.S(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.ew
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cL
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gbg()
H.h(k,"$ia",u,"$aa")
if(!C.a.Z(k,m)){m.sb9(0,k.length)
C.a.h(k,m)}m=c.gcX(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbt(c)
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbR()
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbP(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.aY(c.gcX(c))
g=b.f
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbg()
g=m.gba(m)
if(!g){m=b.x
C.c.V(m.a,m.d,1)}else{g=b.r
a=m.gba(m)
a0=g.a
g=g.d
if(!a)C.c.V(a0,g,0)
else C.c.V(a0,g,m.gb9(m))
m=b.x
C.c.V(m.a,m.d,0)}m=c.gan(c)
g=b.y
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gla()
g=b.z
C.c.S(g.a,g.d,m)
m=c.glb()
g=b.Q
C.c.S(g.a,g.d,m)
m=c.ge_()
g=b.ch
C.c.S(g.a,g.d,m)
m=c.ge0()
g=b.cx
C.c.S(g.a,g.d,m)
m=c.ge1()
g=b.cy
C.c.S(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.Y(k,this.Q.d)
u=this.a
p=this.Q.d
u.am(u.eg,u.bD,p)
break
case C.i:this.Y(k,this.Q.e)
u=this.a
p=this.Q.e
u.af(u.eh,u.bD,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga1().eH()
a4.Q=p}u=u.id
u.toString
u.as(p.ak(0,!0))}if(r.dy){this.Y(k,this.ch)
u=this.a
p=this.ch
u.af(u.ei,u.ej,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bE
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
break
case C.h:this.Y(k,this.cx.d)
u=this.a
p=this.cx.d
u.am(u.ek,u.bF,p)
p=this.a
u=this.cx.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break
case C.i:this.Y(k,this.cx.e)
u=this.a
p=this.cx.e
u.af(u.el,u.bF,p)
p=this.a
u=this.cx.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bH
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bG
C.c.S(p.a,p.d,m)
break
case C.h:this.Y(k,this.cy.d)
u=this.a
p=this.cy.d
u.am(u.em,u.bI,p)
p=this.a
u=this.cy.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bG
C.c.S(u.a,u.d,m)
break
case C.i:this.Y(k,this.cy.e)
u=this.a
p=this.cy.e
u.af(u.en,u.bI,p)
p=this.a
u=this.cy.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bG
C.c.S(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bJ
C.c.S(u.a,u.d,n)
break
case C.h:this.Y(k,this.db.d)
u=this.a
n=this.db.d
u.am(u.eo,u.bK,n)
n=this.a
u=this.db.f
n=n.bJ
C.c.S(n.a,n.d,u)
break
case C.i:this.Y(k,this.db.e)
u=this.a
n=this.db.e
u.af(u.ep,u.bK,n)
n=this.a
u=this.db.f
n=n.bJ
C.c.S(n.a,n.d,u)
break}C.c.cF(o,3042)
C.c.jH(o,770,771)}for(i=0;i<k.length;++i)k[i].bq(a4)
u=a5.e
u.bq(a4)
u.aW(a4)
u.f7(a4)
if(p)C.c.k0(o,3042)
for(i=0;i<k.length;++i)k[i].f7(a4)
u=this.a
u.toString
C.c.fb(o,null)
u.x.k5()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dt().ao},
sha:function(a){this.e=H.h(a,"$iZ",[V.aj],"$aZ")}}
O.fl.prototype={}
O.dm.prototype={
aQ:function(){}}
O.fm.prototype={}
O.aP.prototype={
dP:function(a){var u,t
if(!J.O(this.f,a)){u=this.f
this.f=a
t=new D.C(this.b+".color",u,a,this,[V.a_])
t.b=!0
this.a.ae(t)}},
aQ:function(){this.fC()
this.dP(new V.a_(1,1,1))},
san:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aQ()
u=this.a
u.a=null
u.ae(null)}this.dP(b)}}
O.fo.prototype={
iM:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.D().a)){this.ch=a
u=new D.C(this.b+".refraction",u,a,this,[P.o])
u.b=!0
this.a.ae(u)}},
aQ:function(){this.bZ()
this.iM(1)}}
O.fp.prototype={
co:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.D().a)){this.ch=a
u=new D.C(this.b+".shininess",u,a,this,[P.o])
u.b=!0
this.a.ae(u)}},
aQ:function(){this.bZ()
this.co(100)}}
O.bo.prototype={}
T.dI.prototype={}
T.h2.prototype={}
V.aY.prototype={
aI:function(a){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dk.prototype={
aI:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aI(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.h(a,"$ia",[V.at],"$aa")},
$iat:1}
V.ap.prototype={
aI:function(a){return!this.fB(a)},
i:function(a){return"!["+this.dd(0)+"]"}}
V.fF.prototype={
aI:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bM(this.a)
t=H.bM(this.b)
return u+".."+t},
$iat:1}
V.fN.prototype={
fH:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aH([P.l,P.N])
for(t=new H.cd(a,a.gm(a),0,[H.ab(a,"T",0)]);t.E();)u.q(0,t.d,!0)
this.siL(u)},
aI:function(a){return this.a.br(a)},
i:function(a){return P.dE(this.a.gaB(),0,null)},
siL:function(a){this.a=H.h(a,"$iH",[P.l,P.N],"$aH")},
$iat:1}
V.cl.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cp(this.a.j(0,b))
r.sa6(H.b([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
ka:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aI(a))return r}return},
i:function(a){return this.b},
sj2:function(a){this.c=H.h(a,"$ia",[V.cp],"$aa")}}
V.dN.prototype={
i:function(a){var u,t
u=H.jM(this.b,"\n","\\n")
t=H.jM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.co.prototype={
aK:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.z)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siD:function(a){var u=P.f
this.c=H.h(a,"$iH",[u,u],"$aH")}}
V.h4.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cl(this,b)
u.sj2(H.b([],[V.cp]))
u.d=null
this.a.q(0,b,u)}return u},
R:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.co(this,a)
t=P.f
u.siD(new H.aH([t,t]))
this.b.q(0,a,u)}return u},
f5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dN])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.I(a,o)
m=t.ka(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dE(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dE(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dN(j==null?k.b:j,l,o)}++o}}},
siU:function(a){this.a=H.h(a,"$iH",[P.f,V.cl],"$aH")},
siW:function(a){this.b=H.h(a,"$iH",[P.f,V.co],"$aH")}}
V.cp.prototype={
i:function(a){return this.b.b+": "+this.dd(0)}}
X.cZ.prototype={$ib4:1}
X.eV.prototype={
gC:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u}}
X.du.prototype={
gC:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
aN:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.J(a)},
h3:function(){return this.aN(null)},
saJ:function(a){var u,t
if(!J.O(this.b,a)){u=this.b
if(u!=null)u.gC().N(0,this.gdh())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdh())
u=new D.C("mover",t,this.b,this,[U.a6])
u.b=!0
this.aN(u)}},
$ib4:1,
$icZ:1}
X.dH.prototype={}
V.be.prototype={
bl:function(a){this.b=new P.eY(C.X)
this.c=null
this.sc7(H.b([],[[P.a,W.ax]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.ax]))
t=a.split("\n")
for(u=t.length,s=[W.ax],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.G(p)
n=this.b.hf(p,0,p.length)
m=n==null?p:n
C.k.fq(o,H.jM(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaC(this.d),o)}},
eT:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.sc7(H.b([],[[P.a,W.ax]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bs()
this.c=t}for(t=t.f5(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)this.bO(t[r])},
sc7:function(a){this.d=H.h(a,"$ia",[[P.a,W.ax]],"$aa")}}
V.j3.prototype={
$1:function(a){H.d(a,"$iaT")
P.jL(C.e.f4(this.a.gkg(),2)+" fps")},
$S:49}
V.eE.prototype={
bO:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
break
case"Comment":this.O(a.b,"#777")
break
case"Id":this.O(a.b,"#111")
break
case"Num":this.O(a.b,"#191")
break
case"Reserved":this.O(a.b,"#119")
break
case"String":this.O(a.b,"#171")
break
case"Symbol":this.O(a.b,"#616")
break
case"Type":this.O(a.b,"#B11")
break
case"Whitespace":this.O(a.b,"#111")
break}},
bs:function(){var u,t,s,r
u=V.h5()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.U("0","9")
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
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aY())
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
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aY())
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
s=new V.ap()
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
s=new V.ap()
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
s.d=s.a.R("Num")
s=u.j(0,"Float")
s.d=s.a.R("Num")
s=u.j(0,"Sym")
s.d=s.a.R("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.R("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.R("String")
s=u.j(0,"EndComment")
s.d=s.a.R("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.R("Whitespace")
s=u.j(0,"Id")
t=s.a.R("Id")
s.d=t
s=[P.f]
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eW.prototype={
bO:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
break
case"Comment":this.O(a.b,"#777")
break
case"Id":this.O(a.b,"#111")
break
case"Num":this.O(a.b,"#191")
break
case"Preprocess":this.O(a.b,"#737")
break
case"Reserved":this.O(a.b,"#119")
break
case"Symbol":this.O(a.b,"#611")
break
case"Type":this.O(a.b,"#171")
break
case"Whitespace":this.O(a.b,"#111")
break}},
bs:function(){var u,t,s,r
u=V.h5()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.U("0","9")
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
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aY())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ap()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ap()
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
t.d=t.a.R("Num")
t=u.j(0,"Float")
t.d=t.a.R("Num")
t=u.j(0,"Sym")
t.d=t.a.R("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.R("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.R("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.R("Whitespace")
t=u.j(0,"Id")
s=t.a.R("Id")
t.d=s
t=[P.f]
s.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eX.prototype={
bO:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
this.O("=","#111")
break
case"Id":this.O(a.b,"#111")
break
case"Other":this.O(a.b,"#111")
break
case"Reserved":this.O(a.b,"#119")
break
case"String":this.O(a.b,"#171")
break
case"Symbol":this.O(a.b,"#616")
break}},
bs:function(){var u,t,s
u=V.h5()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
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
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aY())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aY())
t=u.j(0,"Other").l(0,"Other")
s=new V.ap()
s.sa6(H.b([],[V.at]))
C.a.h(t.a,s)
t=V.v(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.R("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.R("String")
t=u.j(0,"Id")
s=t.a.R("Id")
t.d=s
s.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.R("Attr")
s=u.j(0,"Other")
s.d=s.a.R("Other")
return u}}
V.fB.prototype={
eT:function(a){H.h(a,"$ia",[P.f],"$aa")
this.sc7(H.b([],[[P.a,W.ax]]))
this.O(C.a.l(a,"\n"),"#111")},
bO:function(a){},
bs:function(){return}}
V.fD.prototype={
dV:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.ku().gcZ().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.dT(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.jT(this.c).h(0,q)
o=W.lV("radio")
o.checked=s
o.name=u
u=W.m
W.a8(o,"change",H.k(new V.fE(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.F.F(q,o)
n=r.createElement("span")
n.textContent=b
C.F.F(q,n)
J.jT(this.c).h(0,r.createElement("br"))},
b4:function(a,b,c){return this.dV(a,b,c,!1)},
dT:function(a){var u,t,s,r,q
u=P.ku()
t=P.f
s=P.m3(u.gcZ(),t,t)
s.q(0,this.a,a)
r=u.eZ(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iF(t,new P.ih([],[]).d4(""),"",q)}}
V.fE.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dT(this.d)}},
$S:20}
V.fR.prototype={
fJ:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).F(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.F(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.F(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.F(q,p)}o=u.createElement("div")
this.a=o
C.k.F(q,o)
this.b=null
o=W.m
W.a8(u,"scroll",H.k(new V.fT(s),{func:1,ret:-1,args:[o]}),!1,o)},
dX:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f5(C.a.km(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.F(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.F(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.F(t,o)
break
case"Link":n=p.b
if(H.nB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.G(m[1])
l.textContent=H.G(m[0])
C.k.F(t,l)}else{k=P.ef(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.F(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.F(t,o)
break}}C.k.F(this.a,t)},
fh:function(a){var u,t,s,r
u=new V.eE("dart")
u.bl("dart")
t=new V.eW("glsl")
t.bl("glsl")
s=new V.eX("html")
s.bl("html")
r=C.a.kc(H.b([u,t,s],[V.be]),new V.fU(a))
if(r!=null)return r
u=new V.fB("plain")
u.bl("plain")
return u},
dW:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cN(r).a4(r,"+")){C.a.q(a7,s,C.b.at(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a4(r,"-")){C.a.q(a7,s,C.b.at(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fh(a5)
q.eT(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.ef(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jV(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.F(j,i)
C.x.F(k,j)
C.n.F(l,k)
C.o.F(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.z)(r),++a0)C.x.F(a,r[a0])
C.n.F(e,d)
C.n.F(e,c)
C.n.F(e,a)
C.o.F(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.z)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gU(r);a3.E();)C.x.F(c,a3.gM())
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
ju:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.F(this.a,t)
r=C.o.hu(t,-1)
s=H.d((r&&C.n).dD(r,-1),"$iaS").style
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
o=H.d(C.n.dD(r,-1),"$iaS")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
iP:function(){var u,t,s,r
if(this.b!=null)return
u=V.h5()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ap()
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
s=new V.ap()
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
s=new V.ap()
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
t=new V.ap()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ap()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aY())
s=u.j(0,"Other").l(0,"Other")
t=new V.ap()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.R("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.R("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.R("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.R("Link")
s=u.j(0,"Other")
s.d=s.a.R("Other")
this.b=u}}
V.fT.prototype={
$1:function(a){P.kq(C.y,new V.fS(this.a))},
$S:20}
V.fS.prototype={
$0:function(){var u,t,s
u=C.e.ap(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.fU.prototype={
$1:function(a){return H.d(a,"$ibe").a===this.a},
$S:51}
U.iV.prototype={
$0:function(){this.a.sab(0,F.jG(1,null,null,1))},
$S:0}
U.iW.prototype={
$0:function(){this.a.sab(0,F.kY(1,!0,!0,1,40,1))},
$S:0}
U.iX.prototype={
$0:function(){this.a.sab(0,F.kY(1,!0,!1,1,40,0))},
$S:0}
U.iY.prototype={
$0:function(){this.a.sab(0,F.l9(6,null,1,6))},
$S:0}
U.iZ.prototype={
$0:function(){this.a.sab(0,F.lb(30,1,15,0.5))},
$S:0}
U.j_.prototype={
$0:function(){this.a.sab(0,F.ns(120,1,2,12,0.3,3))},
$S:0}
U.j0.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dW("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dW("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a3.prototype
u.fw=u.i
u=J.dd.prototype
u.fA=u.i
u=P.n.prototype
u.fz=u.bS
u=W.P.prototype
u.bY=u.ag
u=W.e9.prototype
u.fD=u.ax
u=O.dm.prototype
u.fC=u.aQ
u=O.aP.prototype
u.bZ=u.aQ
u=V.dk.prototype
u.fB=u.aI
u.dd=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n8","mC",10)
u(P,"n9","mD",10)
u(P,"na","mE",10)
t(P,"kX","n7",3)
s(W,"nl",4,null,["$4"],["mG"],19,0)
s(W,"nm",4,null,["$4"],["mH"],19,0)
var m
r(m=E.ai.prototype,"geP",0,0,null,["$1","$0"],["eQ","ky"],1,0)
r(m,"geR",0,0,null,["$1","$0"],["eS","kz"],1,0)
r(m,"geN",0,0,null,["$1","$0"],["eO","kx"],1,0)
r(m,"geL",0,0,null,["$1","$0"],["eM","ku"],1,0)
q(m,"gks","kt",5)
q(m,"gkv","kw",5)
r(m=E.dM.prototype,"gde",0,0,null,["$1","$0"],["dg","df"],1,0)
p(m,"gkP","f_",3)
o(m=X.dT.prototype,"ghY","hZ",12)
o(m,"ghM","hN",12)
o(m,"ghS","hT",4)
o(m,"gi1","i2",26)
o(m,"gi_","i0",26)
o(m,"gi5","i6",4)
o(m,"gi9","ia",4)
o(m,"ghW","hX",4)
o(m,"gi7","i8",4)
o(m,"ghU","hV",4)
o(m,"gib","ic",36)
o(m,"gie","ig",12)
o(m,"git","iu",11)
o(m,"gip","iq",11)
o(m,"gir","is",11)
r(m=D.dg.prototype,"gdI",0,0,null,["$1","$0"],["dJ","i3"],1,0)
o(m,"gii","ij",38)
q(m,"ghG","hH",16)
q(m,"gim","io",16)
r(D.bl.prototype,"gfP",0,0,null,["$1","$0"],["ad","fQ"],1,0)
n(V.R.prototype,"gm","cQ",15)
n(V.E.prototype,"gm","cQ",15)
r(m=U.cb.prototype,"gaP",0,0,null,["$1","$0"],["K","a7"],1,0)
q(m,"gfW","fX",14)
q(m,"gik","il",14)
r(m=U.dU.prototype,"gaP",0,0,null,["$1","$0"],["K","a7"],1,0)
o(m,"gca","cb",2)
o(m,"gcc","cd",2)
o(m,"gce","cf",2)
r(m=U.dV.prototype,"gaP",0,0,null,["$1","$0"],["K","a7"],1,0)
o(m,"gca","cb",2)
o(m,"gcc","cd",2)
o(m,"gce","cf",2)
o(m,"ghz","hA",2)
o(m,"ghB","hC",2)
o(m,"gj0","j1",2)
o(m,"giZ","j_",2)
o(m,"giX","iY",2)
o(U.dW.prototype,"ghD","hE",2)
r(m=M.d5.prototype,"gau",0,0,null,["$1","$0"],["aD","fY"],1,0)
q(m,"ghO","hP",5)
q(m,"ghQ","hR",5)
r(m=O.dl.prototype,"gh_",0,0,null,["$1","$0"],["ae","h0"],1,0)
r(m,"giH",0,0,null,["$1","$0"],["dN","iI"],1,0)
q(m,"ghI","hJ",29)
q(m,"ghK","hL",29)
r(X.du.prototype,"gdh",0,0,null,["$1","$0"],["aN","h3"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jk,J.a3,J.ao,P.e5,P.n,H.cd,P.aN,H.bB,H.cx,H.eA,H.fG,H.h8,P.bg,H.c5,H.ea,P.bH,H.f8,H.fa,H.f4,P.eb,P.aX,P.aA,P.dZ,P.fX,P.cm,P.fY,P.aT,P.ag,P.iy,P.ib,P.bQ,P.e4,P.T,P.ip,P.fg,P.bx,P.eZ,P.iw,P.iu,P.N,P.ah,P.af,P.aM,P.fz,P.dD,P.e1,P.eU,P.bh,P.a,P.H,P.F,P.aq,P.f,P.ae,P.bR,P.ho,P.ie,W.eC,W.br,W.as,W.ds,W.e9,W.ij,W.d6,W.av,W.ia,W.eg,P.ig,P.i5,P.M,O.Z,O.ce,E.eu,E.ai,E.fH,E.dM,Z.dY,Z.hH,Z.cX,Z.bi,Z.aV,D.ex,D.bz,D.y,X.cY,X.de,X.f6,X.fd,X.au,X.fq,X.h6,X.dT,D.d2,D.a1,D.bl,D.dC,D.dJ,D.dK,D.dL,V.a_,V.aE,V.eL,V.dn,V.aj,V.a4,V.W,V.aR,V.dy,V.R,V.E,U.dU,U.dV,U.dW,M.d5,A.cU,A.er,A.fn,A.cq,A.cu,A.cs,A.cv,A.ct,A.cw,A.by,A.dP,A.hi,F.a2,F.eP,F.b2,F.f7,F.bk,F.dB,F.fO,F.fP,F.fQ,F.aa,F.hw,F.hx,F.hA,F.hC,F.hD,F.hE,O.bo,O.dm,T.h2,V.aY,V.at,V.dk,V.fF,V.fN,V.cl,V.dN,V.co,V.h4,X.cZ,X.dH,X.du,V.be,V.fD,V.fR])
s(J.a3,[J.f2,J.dc,J.dd,J.aF,J.bj,J.b0,H.bJ,W.bA,W.e_,W.eF,W.d3,W.d4,W.m,W.d9,W.e2,W.di,W.e7,W.dw,W.aI,W.ec,W.eh,P.cV,P.d7,P.dv,P.bO,P.dA,P.dQ])
s(J.dd,[J.fA,J.bq,J.b1])
t(J.jj,J.aF)
s(J.bj,[J.db,J.f3])
t(P.fc,P.e5)
s(P.fc,[H.dR,W.hO,W.am,P.eQ])
t(H.t,H.dR)
s(P.n,[H.eI,H.fh,H.cz])
s(H.eI,[H.bG,H.f9])
s(P.aN,[H.fi,H.hI])
t(H.fj,H.bG)
t(H.eB,H.eA)
s(P.bg,[H.fy,H.f5,H.hm,H.ha,H.ew,H.fL,P.dt,P.aD,P.hn,P.hk,P.bP,P.ez,P.eD])
s(H.c5,[H.j7,H.h1,H.iQ,H.iR,H.iS,P.hK,P.hJ,P.hL,P.hM,P.io,P.im,P.hU,P.hY,P.hV,P.hW,P.hX,P.i0,P.i1,P.i_,P.hZ,P.fZ,P.h_,P.iG,P.i8,P.i7,P.i9,P.fb,P.ff,P.iv,P.eG,P.eH,P.hs,P.hp,P.hq,P.hr,P.iq,P.ir,P.it,P.is,P.iC,P.iB,P.iD,P.iE,W.eJ,W.hT,W.fw,W.fv,W.ic,W.id,W.il,W.ix,P.ii,P.iI,P.eR,P.eS,E.fI,E.fJ,E.fK,E.h3,D.eN,D.eO,F.iz,F.iJ,F.iL,F.iM,F.iN,F.j4,F.j5,F.j6,F.iU,F.iK,F.hG,F.hF,F.hy,F.hz,V.j3,V.fE,V.fT,V.fS,V.fU,U.iV,U.iW,U.iX,U.iY,U.iZ,U.j_,U.j0])
s(H.h1,[H.fW,H.c3])
t(P.fe,P.bH)
s(P.fe,[H.aH,W.hN])
t(H.dp,H.bJ)
s(H.dp,[H.cD,H.cF])
t(H.cE,H.cD)
t(H.dq,H.cE)
t(H.cG,H.cF)
t(H.dr,H.cG)
s(H.dr,[H.fr,H.fs,H.ft,H.fu,H.cg])
t(P.i6,P.iy)
t(P.i4,P.ib)
t(P.ee,P.fg)
t(P.dS,P.ee)
s(P.bx,[P.es,P.eK])
t(P.bf,P.fY)
s(P.bf,[P.et,P.eY,P.hv,P.hu])
t(P.ht,P.eK)
s(P.af,[P.o,P.l])
s(P.aD,[P.bN,P.f_])
t(P.hP,P.bR)
s(W.bA,[W.B,W.cA])
s(W.B,[W.P,W.bd,W.c7,W.cB])
s(W.P,[W.w,P.p])
s(W.w,[W.cT,W.ep,W.c2,W.bc,W.bw,W.ax,W.eT,W.d8,W.cc,W.df,W.fM,W.aS,W.dF,W.dG,W.h0,W.cn])
t(W.c6,W.e_)
t(W.e3,W.e2)
t(W.bC,W.e3)
t(W.da,W.c7)
t(W.bp,W.m)
s(W.bp,[W.aO,W.a9,W.aJ])
t(W.e8,W.e7)
t(W.ch,W.e8)
t(W.ed,W.ec)
t(W.h7,W.ed)
t(W.aW,W.a9)
t(W.e0,W.d4)
t(W.ei,W.eh)
t(W.e6,W.ei)
t(W.hQ,W.hN)
t(W.hR,P.fX)
t(W.ju,W.hR)
t(W.hS,P.cm)
t(W.ik,W.e9)
t(P.ih,P.ig)
t(P.ay,P.i5)
t(P.cj,P.p)
s(E.eu,[Z.cW,A.ck,T.dI])
s(D.y,[D.bE,D.bF,D.C,X.fC])
s(X.fC,[X.dj,X.b3,X.cf,X.dO])
s(O.Z,[D.dg,U.cb])
s(D.ex,[U.ey,U.a6])
s(U.a6,[U.d_,U.dz])
t(A.fk,A.ck)
s(A.dP,[A.J,A.he,A.hf,A.hh,A.hc,A.X,A.hd,A.I,A.hg,A.hj,A.cr,A.aw,A.ak,A.al])
t(F.fV,F.eP)
t(F.hb,F.f7)
t(F.hB,F.hC)
t(F.fx,F.hD)
t(O.dl,O.bo)
s(O.dm,[O.fl,O.fm,O.aP])
s(O.aP,[O.fo,O.fp])
s(V.dk,[V.ap,V.cp])
t(X.eV,X.dH)
s(V.be,[V.eE,V.eW,V.eX,V.fB])
u(H.dR,H.cx)
u(H.cD,P.T)
u(H.cE,H.bB)
u(H.cF,P.T)
u(H.cG,H.bB)
u(P.e5,P.T)
u(P.ee,P.ip)
u(W.e_,W.eC)
u(W.e2,P.T)
u(W.e3,W.as)
u(W.e7,P.T)
u(W.e8,W.as)
u(W.ec,P.T)
u(W.ed,W.as)
u(W.eh,P.T)
u(W.ei,W.as)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bc.prototype
C.q=W.bw.prototype
C.k=W.ax.prototype
C.T=W.d3.prototype
C.V=W.d8.prototype
C.W=W.d9.prototype
C.z=W.da.prototype
C.Y=J.a3.prototype
C.a=J.aF.prototype
C.f=J.db.prototype
C.r=J.dc.prototype
C.e=J.bj.prototype
C.b=J.b0.prototype
C.a4=J.b1.prototype
C.F=W.df.prototype
C.aa=W.ch.prototype
C.L=J.fA.prototype
C.M=W.dw.prototype
C.c=P.bO.prototype
C.x=W.aS.prototype
C.o=W.dF.prototype
C.n=W.dG.prototype
C.C=J.bq.prototype
C.N=W.aW.prototype
C.O=W.cA.prototype
C.Q=new P.et(!1)
C.P=new P.es(C.Q)
C.R=new P.fz()
C.S=new P.hv()
C.l=new P.i6()
C.d=new A.by(0,"ColorSourceType.None")
C.j=new A.by(1,"ColorSourceType.Solid")
C.h=new A.by(2,"ColorSourceType.Texture2D")
C.i=new A.by(3,"ColorSourceType.TextureCube")
C.y=new P.aM(0)
C.U=new P.aM(5e6)
C.X=new P.eZ("element",!0,!1,!1,!1)
C.Z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a_=function(hooks) {
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
C.D=function(hooks) { return hooks; }

C.a0=function(getTagFallback) {
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
C.a1=function() {
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
C.a2=function(hooks) {
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
C.a3=function(hooks) {
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
C.E=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=H.b(u([127,2047,65535,1114111]),[P.l])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a5=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a6=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.H=H.b(u([]),[P.f])
C.a7=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.J=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.a8=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.K=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a9=new H.eB(0,{},C.H,[P.f,P.f])
C.m=new P.ht(!1)})();(function staticFields(){$.aL=0
$.c4=null
$.jX=null
$.jy=!1
$.l2=null
$.kV=null
$.l8=null
$.iO=null
$.iT=null
$.jJ=null
$.bT=null
$.cK=null
$.cL=null
$.jz=!1
$.V=C.l
$.b_=null
$.jf=null
$.k2=null
$.k1=null
$.kc=null
$.kg=null
$.bn=null
$.kl=null
$.kx=null
$.kC=null
$.kz=null
$.kA=null
$.kB=null
$.ky=null
$.kf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nH","ld",function(){return H.l1("_$dart_dartClosure")})
u($,"nI","jO",function(){return H.l1("_$dart_js")})
u($,"nO","le",function(){return H.aU(H.h9({
toString:function(){return"$receiver$"}}))})
u($,"nP","lf",function(){return H.aU(H.h9({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nQ","lg",function(){return H.aU(H.h9(null))})
u($,"nR","lh",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nU","lk",function(){return H.aU(H.h9(void 0))})
u($,"nV","ll",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nT","lj",function(){return H.aU(H.ks(null))})
u($,"nS","li",function(){return H.aU(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nX","ln",function(){return H.aU(H.ks(void 0))})
u($,"nW","lm",function(){return H.aU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oc","jP",function(){return P.mB()})
u($,"oi","cR",function(){return[]})
u($,"nZ","lo",function(){return P.my()})
u($,"od","ls",function(){return H.m8(H.bS(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"og","lu",function(){return P.mn("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oh","lv",function(){return P.n_()})
u($,"oe","lt",function(){return P.k6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"of","jQ",function(){return P.k5(P.f,P.bh)})
u($,"o5","lr",function(){return Z.az(0)})
u($,"o_","lp",function(){return Z.az(511)})
u($,"o7","b9",function(){return Z.az(1)})
u($,"o6","b8",function(){return Z.az(2)})
u($,"o1","b7",function(){return Z.az(4)})
u($,"o8","ba",function(){return Z.az(8)})
u($,"o9","bb",function(){return Z.az(16)})
u($,"o2","cP",function(){return Z.az(32)})
u($,"o3","cQ",function(){return Z.az(64)})
u($,"o4","lq",function(){return Z.az(96)})
u($,"oa","c1",function(){return Z.az(128)})
u($,"o0","b6",function(){return Z.az(256)})
u($,"nG","lc",function(){return new V.eL(1e-9)})
u($,"nF","D",function(){return $.lc()})})()
var v={mangledGlobalNames:{l:"int",o:"double",af:"num",f:"String",N:"bool",F:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.F},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.l,[P.n,E.ai]]},{func:1,ret:P.F,args:[F.a2]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.F,args:[F.aa,P.o,P.o]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.l,[P.n,U.a6]]},{func:1,ret:P.o},{func:1,ret:-1,args:[P.l,[P.n,D.a1]]},{func:1,args:[,]},{func:1,ret:V.W,args:[P.o]},{func:1,ret:P.N,args:[W.P,P.f,P.f,W.br]},{func:1,ret:P.F,args:[W.m]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.av]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.aj]]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.F,args:[P.af]},{func:1,args:[W.m]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[P.l]},{func:1,ret:P.F,args:[P.f,,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.N,args:[[P.n,D.a1]]},{func:1,ret:P.F,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[P.aq]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[P.aT]},{func:1,args:[P.f]},{func:1,ret:P.N,args:[V.be]},{func:1,args:[,P.f]},{func:1,ret:W.P,args:[W.B]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a3,DOMError:J.a3,MediaError:J.a3,Navigator:J.a3,NavigatorConcurrentHardware:J.a3,NavigatorUserMediaError:J.a3,OverconstrainedError:J.a3,PositionError:J.a3,WebGLActiveInfo:J.a3,WebGLRenderbuffer:J.a3,WebGL2RenderingContext:J.a3,WebGLTexture:J.a3,SQLError:J.a3,ArrayBufferView:H.bJ,Float32Array:H.dq,Int16Array:H.fr,Int32Array:H.fs,Int8Array:H.ft,Uint32Array:H.fu,Uint8Array:H.cg,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLImageElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.cT,HTMLAreaElement:W.ep,HTMLBaseElement:W.c2,HTMLBodyElement:W.bc,HTMLCanvasElement:W.bw,CDATASection:W.bd,CharacterData:W.bd,Comment:W.bd,ProcessingInstruction:W.bd,Text:W.bd,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,HTMLDivElement:W.ax,XMLDocument:W.c7,Document:W.c7,DOMException:W.eF,DOMImplementation:W.d3,DOMRectReadOnly:W.d4,Element:W.P,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bA,HTMLFormElement:W.eT,HTMLHeadElement:W.d8,History:W.d9,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.da,HTMLInputElement:W.cc,KeyboardEvent:W.aO,HTMLLabelElement:W.df,Location:W.di,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,DocumentFragment:W.B,ShadowRoot:W.B,DocumentType:W.B,Node:W.B,NodeList:W.ch,RadioNodeList:W.ch,Range:W.dw,HTMLSelectElement:W.fM,HTMLTableCellElement:W.aS,HTMLTableDataCellElement:W.aS,HTMLTableHeaderCellElement:W.aS,HTMLTableElement:W.dF,HTMLTableRowElement:W.dG,HTMLTableSectionElement:W.h0,HTMLTemplateElement:W.cn,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.h7,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,WheelEvent:W.aW,Window:W.cA,DOMWindow:W.cA,Attr:W.cB,ClientRect:W.e0,DOMRect:W.e0,NamedNodeMap:W.e6,MozNamedAttrMap:W.e6,SVGScriptElement:P.cj,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,WebGLBuffer:P.cV,WebGLFramebuffer:P.d7,WebGLProgram:P.dv,WebGLRenderingContext:P.bO,WebGLShader:P.dA,WebGLUniformLocation:P.dQ})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.l5,[])
else U.l5([])})})()
//# sourceMappingURL=test.dart.js.map
