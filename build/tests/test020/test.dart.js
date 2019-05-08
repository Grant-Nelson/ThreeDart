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
a[c]=function(){a[c]=function(){H.nB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jj:function jj(a){this.a=a},
iP:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
f_:function(){return new P.bM("No element")},
lV:function(){return new P.bM("Too many elements")},
lU:function(){return new P.bM("Too few elements")},
t:function t(a){this.a=a},
eH:function eH(){},
bE:function bE(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fg:function fg(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fi:function fi(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
bz:function bz(){},
cw:function cw(){},
dQ:function dQ(){},
lL:function(){throw H.c(P.Z("Cannot modify unmodifiable Map"))},
bZ:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ni:function(a){return v.types[H.ac(a)]},
np:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iaG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.c(H.aq(a))
return u},
mj:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.f0(u)
t=u[0]
s=u[1]
return new H.fF(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ch:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mg:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.E(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.I(r,p)|32)>s)return}return parseInt(a,b)},
bI:function(a){return H.m7(a)+H.jA(H.bs(a),0,null)},
m7:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibo){p=C.E(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bZ(r.length>1&&C.b.I(r,0)===36?C.b.aq(r,1):r)},
m8:function(){if(!!self.location)return self.location.href
return},
kg:function(a){var u,t,s,r,q
H.el(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mh:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aq(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aR(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aq(r))}return H.kg(u)},
kh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aq(s))
if(s<0)throw H.c(H.aq(s))
if(s>65535)return H.mh(a)}return H.kg(a)},
mi:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bJ:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.a7(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mf:function(a){var u=H.bH(a).getFullYear()+0
return u},
md:function(a){var u=H.bH(a).getMonth()+1
return u},
m9:function(a){var u=H.bH(a).getDate()+0
return u},
ma:function(a){var u=H.bH(a).getHours()+0
return u},
mc:function(a){var u=H.bH(a).getMinutes()+0
return u},
me:function(a){var u=H.bH(a).getSeconds()+0
return u},
mb:function(a){var u=H.bH(a).getMilliseconds()+0
return u},
A:function(a){throw H.c(H.aq(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.c(H.bU(a,b))},
bU:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
u=H.ac(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.bB(b,a,"index",null,u)
return P.dw(b,"index",null)},
nb:function(a,b,c){if(a>c)return new P.bK(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bK(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
aq:function(a){return new P.aD(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l7})
u.name=""}else u.toString=H.l7
return u},
l7:function(){return J.an(this.dartException)},
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
return new H.h7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kc:function(a,b){return new H.fx(a,b==null?null:b.method)},
jk:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.f4(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aR(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jk(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kc(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lb()
p=$.lc()
o=$.ld()
n=$.le()
m=$.lh()
l=$.li()
k=$.lg()
$.lf()
j=$.lk()
i=$.lj()
h=q.ae(t)
if(h!=null)return u.$1(H.jk(H.E(t),h))
else{h=p.ae(t)
if(h!=null){h.method="call"
return u.$1(H.jk(H.E(t),h))}else{h=o.ae(t)
if(h==null){h=n.ae(t)
if(h==null){h=m.ae(t)
if(h==null){h=l.ae(t)
if(h==null){h=k.ae(t)
if(h==null){h=n.ae(t)
if(h==null){h=j.ae(t)
if(h==null){h=i.ae(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kc(H.E(t),h))}}return u.$1(new H.hl(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dC()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aD(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dC()
return a},
bX:function(a){var u
if(a==null)return new H.e9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e9(a)},
ne:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
no:function(a,b,c,d,e,f){H.d(a,"$ibi")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bT:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.no)
a.$identity=u
return u},
lK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ia){u.$reflectionInfo=d
s=H.mj(u).r}else s=d
r=e?Object.create(new H.fV().constructor.prototype):Object.create(new H.c1(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.n()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jY(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ni,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jW:H.jc
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jY(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lH:function(a,b,c,d){var u=H.jc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jY:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lH(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c2
if(q==null){q=H.eu("self")
$.c2=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.c2
if(q==null){q=H.eu("self")
$.c2=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
lI:function(a,b,c,d){var u,t
u=H.jc
t=H.jW
switch(b?-1:a){case 0:throw H.c(H.mn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lJ:function(a,b){var u,t,s,r,q,p,o,n
u=$.c2
if(u==null){u=H.eu("self")
$.c2=u}t=$.jV
if(t==null){t=H.eu("receiver")
$.jV=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lI(r,!p,s,b)
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
jD:function(a,b,c,d,e,f,g){return H.lK(a,b,H.ac(c),d,!!e,!!f,g)},
jc:function(a){return a.a},
jW:function(a){return a.c},
eu:function(a){var u,t,s,r,q
u=new H.c1("self","target","receiver","name")
t=J.f0(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aK(a,"String"))},
nc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"double"))},
nu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"num"))},
jB:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aK(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aK(a,"int"))},
l5:function(a,b){throw H.c(H.aK(a,H.bZ(H.E(b).substring(2))))},
nw:function(a,b){throw H.c(H.lG(a,H.bZ(H.E(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.l5(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.nw(a,b)},
el:function(a){if(a==null)return a
if(!!J.S(a).$ia)return a
throw H.c(H.aK(a,"List<dynamic>"))},
l2:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ia)return a
if(u[b])return a
H.l5(a,b)},
kZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
ei:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kZ(J.S(a))
if(u==null)return!1
return H.kM(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jx)return a
$.jx=!0
try{if(H.ei(a,b))return a
u=H.j2(b)
t=H.aK(a,u)
throw H.c(t)}finally{$.jx=!1}},
jF:function(a,b){if(a!=null&&!H.jC(a,b))H.q(H.aK(a,H.j2(b)))
return a},
aK:function(a,b){return new H.h9("TypeError: "+P.eL(a)+": type '"+H.kR(a)+"' is not a subtype of type '"+b+"'")},
lG:function(a,b){return new H.ev("CastError: "+P.eL(a)+": type '"+H.kR(a)+"' is not a subtype of type '"+b+"'")},
kR:function(a){var u,t
u=J.S(a)
if(!!u.$ic3){t=H.kZ(u)
if(t!=null)return H.j2(t)
return"Closure"}return H.bI(a)},
nB:function(a){throw H.c(new P.eC(H.E(a)))},
mn:function(a){return new H.fK(a)},
l_:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bs:function(a){if(a==null)return
return a.$ti},
ok:function(a,b,c){return H.bY(a["$a"+H.j(c)],H.bs(b))},
cN:function(a,b,c,d){var u
H.E(c)
H.ac(d)
u=H.bY(a["$a"+H.j(c)],H.bs(b))
return u==null?null:u[d]},
ab:function(a,b,c){var u
H.E(b)
H.ac(c)
u=H.bY(a["$a"+H.j(b)],H.bs(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ac(b)
u=H.bs(a)
return u==null?null:u[b]},
j2:function(a){return H.br(a,null)},
br:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bZ(a[0].name)+H.jA(a,1,b)
if(typeof a=="function")return H.bZ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.mZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.br("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(l!=null&&l!==P.L)o+=" extends "+H.br(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.br(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.br(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.br(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nd(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.br(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jA:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.br(p,c)}return"<"+u.i(0)+">"},
bY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cL:function(a,b,c,d){var u,t
H.E(b)
H.el(c)
H.E(d)
if(a==null)return!1
u=H.bs(a)
t=J.S(a)
if(t[b]==null)return!1
return H.kU(H.bY(t[d],u),null,c,null)},
h:function(a,b,c,d){H.E(b)
H.el(c)
H.E(d)
if(a==null)return a
if(H.cL(a,b,c,d))return a
throw H.c(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bZ(b.substring(2))+H.jA(c,0,null),v.mangledGlobalNames)))},
kU:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
oi:function(a,b,c){return a.apply(b,H.bY(J.S(b)["$a"+H.j(c)],H.bs(b)))},
l1:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="D"||a===-1||a===-2||H.l1(u)}return!1},
jC:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="D"||b===-1||b===-2||H.l1(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ei(a,b)}u=J.S(a).constructor
t=H.bs(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jC(a,b))throw H.c(H.aK(a,H.j2(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.kM(a,b,c,d)
if('func' in a)return c.name==="bi"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"c8" in t.prototype))return!1
r=t.prototype["$a"+"c8"]
q=H.bY(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kU(H.bY(m,u),b,p,d)},
kM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nt(h,b,g,d)},
nt:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
oj:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
nr:function(a){var u,t,s,r,q,p
u=H.E($.l0.$1(a))
t=$.iO[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iT[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.kT.$2(a,u))
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
return p.i}if(q==="+")return H.l4(a,s)
if(q==="*")throw H.c(P.hk(u))
if(v.leafTags[u]===true){p=H.j1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l4(a,s)},
l4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j1:function(a){return J.jI(a,!1,null,!!a.$iaG)},
ns:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j1(u)
else return J.jI(u,c,null,null)},
nm:function(){if(!0===$.jH)return
$.jH=!0
H.nn()},
nn:function(){var u,t,s,r,q,p,o,n
$.iO=Object.create(null)
$.iT=Object.create(null)
H.nl()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l6.$1(q)
if(p!=null){o=H.ns(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nl:function(){var u,t,s,r,q,p,o
u=C.a1()
u=H.bS(C.Z,H.bS(C.a3,H.bS(C.D,H.bS(C.D,H.bS(C.a2,H.bS(C.a_,H.bS(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l0=new H.iQ(q)
$.kT=new H.iR(p)
$.l6=new H.iS(o)},
bS:function(a,b){return a(b)||b},
lX:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a0("Illegal RegExp pattern ("+String(r)+")",a,null))},
nA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jK:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ez:function ez(){},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fF:function fF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
h7:function h7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fx:function fx(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
j7:function j7(a){this.a=a},
e9:function e9(a){this.a=a
this.b=null},
c3:function c3(){},
h0:function h0(){},
fV:function fV(){},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
ev:function ev(a){this.a=a},
fK:function fK(a){this.a=a},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f8:function f8(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bQ:function(a){return a},
m5:function(a){return new Int8Array(a)},
bq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bU(b,a))},
mX:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nb(a,b,c))
return b},
bG:function bG(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
ce:function ce(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
nd:function(a){return J.k3(a?Object.keys(a):[],null)},
nv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ej:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jH==null){H.nm()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hk("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jM()]
if(q!=null)return q
q=H.nr(a)
if(q!=null)return q
if(typeof a=="function")return C.a4
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.jM(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
lW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.k3(new Array(a),b)},
k3:function(a,b){return J.f0(H.b(a,[b]))},
f0:function(a){H.el(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.f2.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.f1.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ej(a)},
nf:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ej(a)},
bW:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ej(a)},
jG:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ej(a)},
ng:function(a){if(typeof a=="number")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bo.prototype
return a},
nh:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bo.prototype
return a},
cM:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bo.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.L)return a
return J.ej(a)},
lt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nf(a).n(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).w(a,b)},
jP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nh(a).u(a,b)},
lu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ng(a).t(a,b)},
lv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.np(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bW(a).k(a,b)},
lw:function(a,b,c,d){return J.a5(a).fY(a,b,c,d)},
lx:function(a,b){return J.cM(a).I(a,b)},
em:function(a,b){return J.a5(a).iu(a,b)},
j9:function(a,b,c){return J.a5(a).iy(a,b,c)},
jQ:function(a,b){return J.a5(a).E(a,b)},
ly:function(a,b){return J.cM(a).a0(a,b)},
en:function(a,b){return J.jG(a).a8(a,b)},
lz:function(a,b,c,d){return J.a5(a).k5(a,b,c,d)},
lA:function(a){return J.a5(a).gjy(a)},
jR:function(a){return J.a5(a).gcB(a)},
cR:function(a){return J.S(a).gL(a)},
bt:function(a){return J.jG(a).gU(a)},
aC:function(a){return J.bW(a).gm(a)},
lB:function(a){return J.a5(a).gkP(a)},
ja:function(a,b){return J.a5(a).aX(a,b)},
jS:function(a){return J.jG(a).kE(a)},
lC:function(a,b){return J.a5(a).kJ(a,b)},
lD:function(a,b,c){return J.a5(a).fj(a,b,c)},
lE:function(a,b,c){return J.cM(a).v(a,b,c)},
lF:function(a){return J.cM(a).kT(a)},
an:function(a){return J.S(a).i(a)},
a3:function a3(){},
f1:function f1(){},
d9:function d9(){},
da:function da(){},
fz:function fz(){},
bo:function bo(){},
b1:function b1(){},
aF:function aF(a){this.$ti=a},
ji:function ji(a){this.$ti=a},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bk:function bk(){},
d8:function d8(){},
f2:function f2(){},
b0:function b0(){}},P={
mz:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n6()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bT(new P.hK(u),1)).observe(t,{childList:true})
return new P.hJ(u,t,s)}else if(self.setImmediate!=null)return P.n7()
return P.n8()},
mA:function(a){self.scheduleImmediate(H.bT(new P.hL(H.k(a,{func:1,ret:-1})),0))},
mB:function(a){self.setImmediate(H.bT(new P.hM(H.k(a,{func:1,ret:-1})),0))},
mC:function(a){P.jo(C.y,H.k(a,{func:1,ret:-1}))},
jo:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a5(a.a,1000)
return P.mI(u<0?0:u,b)},
kp:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aT]})
u=C.f.a5(a.a,1000)
return P.mJ(u<0?0:u,b)},
mI:function(a,b){var u=new P.ea(!0)
u.fT(a,b)
return u},
mJ:function(a,b){var u=new P.ea(!1)
u.fU(a,b)
return u},
mD:function(a,b){var u,t,s
b.a=1
try{a.eZ(new P.hV(b),new P.hW(b),null)}catch(s){u=H.ad(s)
t=H.bX(s)
P.nx(new P.hX(b,u,t))}},
kB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaA")
if(u>=4){t=b.ci()
b.a=a.a
b.c=a.c
P.cB(b,t)}else{t=H.d(b.c,"$iaX")
b.a=2
b.c=a
a.dM(t)}},
cB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(!!J.S(t).$ic8){if(t.a>=4){i=H.d(o.c,"$iaX")
o.c=null
b=o.bo(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kB(t,o)
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
n1:function(a,b){if(H.ei(a,{func:1,args:[P.L,P.ap]}))return H.k(a,{func:1,ret:null,args:[P.L,P.ap]})
if(H.ei(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.c(P.jb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n0:function(){var u,t
for(;u=$.bR,u!=null;){$.cK=null
t=u.b
$.bR=t
if(t==null)$.cJ=null
u.a.$0()}},
n5:function(){$.jy=!0
try{P.n0()}finally{$.cK=null
$.jy=!1
if($.bR!=null)$.jN().$1(P.kV())}},
kQ:function(a){var u=new P.dY(H.k(a,{func:1,ret:-1}))
if($.bR==null){$.cJ=u
$.bR=u
if(!$.jy)$.jN().$1(P.kV())}else{$.cJ.b=u
$.cJ=u}},
n4:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bR
if(u==null){P.kQ(a)
$.cK=$.cJ
return}t=new P.dY(a)
s=$.cK
if(s==null){t.b=u
$.cK=t
$.bR=t}else{t.b=s.b
s.b=t
$.cK=t
if(t.b==null)$.cJ=t}},
nx:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.V
if(C.l===t){P.iH(null,null,C.l,a)
return}t.toString
P.iH(null,null,t,H.k(t.cu(a),u))},
ko:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.jo(a,b)}return P.jo(a,H.k(t.cu(b),u))},
mr:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aT]}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.kp(a,b)}s=t.e0(b,P.aT)
$.V.toString
return P.kp(a,H.k(s,u))},
iF:function(a,b,c,d,e){var u={}
u.a=d
P.n4(new P.iG(u,e))},
kN:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kO:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
n2:function(a,b,c,d,e,f,g,h,i){var u,t
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
if(u)d=!(!u||!1)?c.cu(d):c.jz(d,-1)
P.kQ(d)},
hK:function hK(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
ea:function ea(a){this.a=a
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
dY:function dY(a){this.a=a
this.b=null},
fW:function fW(){},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
cl:function cl(){},
fX:function fX(){},
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
lZ:function(a,b,c,d,e){return new H.aH([d,e])},
m_:function(a,b,c){H.el(a)
return H.h(H.ne(a,new H.aH([b,c])),"$ik4",[b,c],"$ak4")},
k5:function(a,b){return new H.aH([a,b])},
de:function(a,b,c,d){return new P.i4([d])},
ju:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mH:function(a,b,c){var u=new P.e3(a,b,[c])
u.c=a.e
return u},
lT:function(a,b,c){var u,t
if(P.jz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.cQ()
C.a.h(t,a)
try{P.n_(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.km(b,H.l2(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
jh:function(a,b,c){var u,t,s
if(P.jz(a))return b+"..."+c
u=new P.ae(b)
t=$.cQ()
C.a.h(t,a)
try{s=u
s.a=P.km(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jz:function(a){var u,t
for(u=0;t=$.cQ(),u<t.length;++u)if(a===t[u])return!0
return!1},
n_:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.F()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.F();o=n,n=m){m=u.gM();++s
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
m0:function(a,b,c){var u=P.lZ(null,null,null,b,c)
a.a_(0,new P.fa(u,b,c))
return u},
k6:function(a,b){var u,t,s
u=P.de(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)u.h(0,H.x(a[s],b))
return u},
jl:function(a){var u,t
u={}
if(P.jz(a))return"{...}"
t=new P.ae("")
try{C.a.h($.cQ(),a)
t.a+="{"
u.a=!0
a.a_(0,new P.fe(u,t))
t.a+="}"}finally{u=$.cQ()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
i4:function i4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bO:function bO(a){this.a=a
this.c=this.b=null},
e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(){},
T:function T(){},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
bF:function bF(){},
ip:function ip(){},
ff:function ff(){},
dR:function dR(a,b){this.a=a
this.$ti=b},
ib:function ib(){},
e4:function e4(){},
ed:function ed(){},
mu:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mv(!1,b,c,d)
return},
mv:function(a,b,c,d){var u,t,s
u=$.ll()
if(u==null)return
t=0===c
if(t&&!0)return P.jr(u,b)
s=b.length
d=P.b5(c,d,s,null,null,null)
if(t&&d===s)return P.jr(u,b)
return P.jr(u,b.subarray(c,d))},
jr:function(a,b){if(P.mx(b))return
return P.my(a,b)},
my:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
mx:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mw:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
n3:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bW(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bR()
if((s&127)!==s)return t-b}return c-b},
jU:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
bv:function bv(){},
bf:function bf(){},
eJ:function eJ(){},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eX:function eX(a){this.a=a},
hs:function hs(a){this.a=a},
hu:function hu(){},
iw:function iw(a){this.b=this.a=0
this.c=a},
ht:function ht(a){this.a=a},
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
ek:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mg(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
lQ:function(a){if(a instanceof H.c3)return a.i(0)
return"Instance of '"+H.bI(a)+"'"},
m1:function(a,b,c,d){var u,t
H.x(b,d)
u=J.lW(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
m2:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.F();)C.a.h(t,H.x(s.gM(),c))
if(b)return t
return H.h(J.f0(t),"$ia",u,"$aa")},
dD:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaF",[u],"$aaF")
t=a.length
c=P.b5(b,c,t,null,null,null)
return H.kh(b>0||c<t?C.a.fo(a,b,c):a)}if(!!J.S(a).$ice)return H.mi(a,b,P.b5(b,c,a.length,null,null,null))
return P.mp(a,b,c)},
mp:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a7(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a7(c,b,J.aC(a),null,null))
t=J.bt(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.a7(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM())
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.a7(c,b,s,null,null))
r.push(t.gM())}return H.kh(r)},
ml:function(a,b,c){return new H.f3(a,H.lX(a,!1,!0,!1))},
km:function(a,b,c){var u=J.bt(b)
if(!u.F())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.F())}else{a+=H.j(u.gM())
for(;u.F();)a=a+c+H.j(u.gM())}return a},
ks:function(){var u=H.m8()
if(u!=null)return P.mt(u,0,null)
throw H.c(P.Z("'Uri.base' is not supported"))},
ee:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lr().b
if(typeof b!=="string")H.q(H.aq(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.ab(c,"bv",0))
t=c.gk0().cC(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bJ(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lM:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
k_:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lQ(a)},
ep:function(a){return new P.aD(!1,null,null,a)},
jb:function(a,b,c){return new P.aD(!0,a,b,c)},
dw:function(a,b,c){return new P.bK(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",f))
return b}return c},
bB:function(a,b,c,d,e){var u=H.ac(e==null?J.aC(b):e)
return new P.eZ(b,u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hm(a)},
hk:function(a){return new P.hj(a)},
kl:function(a){return new P.bM(a)},
aZ:function(a){return new P.ey(a)},
u:function(a){return new P.e0(a)},
a0:function(a,b,c){return new P.eT(a,b,c)},
m3:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jJ:function(a){H.nv(a)},
mt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(t===0)return P.kr(b>0||c<c?C.b.v(a,b,c):a,5,null).gf4()
else if(t===32)return P.kr(C.b.v(a,u,c),0,null).gf4()}s=new Array(8)
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
if(P.kP(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l0()
if(q>=b)if(P.kP(a,b,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<c&&m===n+2&&C.b.aa(a,"..",n)))i=m>n+2&&C.b.aa(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.aa(a,"file",b)){if(p<=b){if(!C.b.aa(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.b.aW(a,n,m,"/");++m;++l;++c}else{a=C.b.v(a,b,n)+"/"+C.b.v(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.aa(a,"http",b)){if(s&&o+3===n&&C.b.aa(a,"80",o+1))if(b===0&&!0){a=C.b.aW(a,o,n,"")
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
else if(q===u&&C.b.aa(a,"https",b)){if(s&&o+4===n&&C.b.aa(a,"443",o+1))if(b===0&&!0){a=C.b.aW(a,o,n,"")
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
l-=b}return new P.ie(a,q,p,o,n,m,l,j)}return P.mK(a,b,c,q,p,o,n,m,l,j)},
ku:function(a,b){var u=P.f
return C.a.ka(H.b(a.split("&"),[u]),P.k5(u,u),new P.hr(b),[P.H,P.f,P.f])},
ms:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.ho(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.ek(C.b.v(a,q,r),null,null)
if(typeof n!=="number")return n.fg()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.ek(C.b.v(a,q,c),null,null)
if(typeof n!=="number")return n.fg()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hp(a)
t=new P.hq(u,a)
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
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ms(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aR(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
mK:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mR(a,b,d)
else{if(d===b)P.cG(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mS(a,u,e-1):""
s=P.mO(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.A(g)
q=r<g?P.mQ(P.ek(C.b.v(a,r,g),new P.iq(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mP(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.X()
o=h<i?P.jv(a,h+1,i,null):null
return new P.bP(j,t,s,q,p,o,i<c?P.mN(a,i+1,c):null)},
kF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cG:function(a,b,c){throw H.c(P.a0(c,a,b))},
mQ:function(a,b){if(a!=null&&a===P.kF(b))return
return a},
mO:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a0(a,u)!==93)P.cG(a,b,"Missing end `]` to match `[` in host")
P.kt(a,b+1,u)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.kt(a,b,c)
return"["+a+"]"}return P.mU(a,b,c)},
mU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.A(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.kL(a,u,!0)
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
if(o)P.cG(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kG(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mR:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kI(C.b.I(a,b)))P.cG(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cG(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.mL(t?a.toLowerCase():a)},
mL:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mS:function(a,b,c){return P.cH(a,b,c,C.a7,!1)},
mP:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cH(a,b,c,C.K,!0):C.r.l3(d,new P.ir(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a4(r,"/"))r="/"+r
return P.mT(r,e,f)},
mT:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.mV(a,!u||c)
return P.mW(a)},
jv:function(a,b,c,d){var u,t
u={}
H.h(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.ep("Both query and queryParameters specified"))
return P.cH(a,b,c,C.u,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.a_(0,new P.is(new P.it(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mN:function(a,b,c){return P.cH(a,b,c,C.u,!0)},
kL:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.a0(a,b+1)
s=C.b.a0(a,u)
r=H.iP(t)
q=H.iP(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aR(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bJ(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
kG:function(a){var u,t,s,r,q,p
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
for(q=0;--r,r>=0;s=128){p=C.f.iM(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.b.I("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.b.I("0123456789ABCDEF",p&15))
q+=3}}return P.dD(t,0,null)},
cH:function(a,b,c,d,e){var u=P.kK(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.b.v(a,b,c):u},
kK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
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
else{if(q===37){o=P.kL(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cG(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kG(q)}}if(r==null)r=new P.ae("")
r.a+=C.b.v(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.A(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.X()
if(s<c)r.a+=C.b.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kJ:function(a){if(C.b.a4(a,"."))return!0
return C.b.eB(a,"/.")!==-1},
mW:function(a){var u,t,s,r,q,p,o
if(!P.kJ(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
mV:function(a,b){var u,t,s,r,q,p
if(!P.kJ(a))return!b?P.kH(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.kH(u[0]))}return C.a.l(u,"/")},
kH:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kI(J.lx(a,0)))for(t=1;t<u;++t){s=C.b.I(a,t)
if(s===58)return C.b.v(a,0,t)+"%3A"+C.b.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mM:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ep("Invalid URL encoding"))}}return u},
jw:function(a,b,c,d,e){var u,t,s,r,q
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
if(s>127)throw H.c(P.ep("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.ep("Truncated URI"))
C.a.h(q,P.mM(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.ht(!1).cC(q)},
kI:function(a){var u=a|32
return 97<=u&&u<=122},
kr:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a0("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a0("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.b.aa(a,"base64",o+1))throw H.c(P.a0("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kn(a,n,t)
else{m=P.kK(a,n,t,C.u,!0)
if(m!=null)a=C.b.aW(a,n,t,m)}return new P.hn(a,u,c)},
mY:function(){var u,t,s,r,q
u=P.m3(22,new P.iC(),!0,P.M)
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
kP:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.ls()
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
p:function p(){},
aM:function aM(a){this.a=a},
eF:function eF(){},
eG:function eG(){},
bh:function bh(){},
dr:function dr(){},
aD:function aD(a,b,c,d){var _=this
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
eZ:function eZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a){this.a=a},
hj:function hj(a){this.a=a},
bM:function bM(a){this.a=a},
ey:function ey(a){this.a=a},
fy:function fy(){},
dC:function dC(){},
eC:function eC(a){this.a=a},
e0:function e0(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(){},
l:function l(){},
n:function n(){},
aN:function aN(){},
a:function a(){},
H:function H(){},
D:function D(){},
af:function af(){},
L:function L(){},
ap:function ap(){},
f:function f(){},
ae:function ae(a){this.a=a},
hr:function hr(a){this.a=a},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c,d,e,f,g){var _=this
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
hn:function hn(a,b,c){this.a=a
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
n9:function(a,b){var u={}
a.a_(0,new P.iI(u))
return u},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eR:function eR(){},
i3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i5:function i5(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ci:function ci(){},
o:function o(){},
M:function M(){},
cU:function cU(){},
d4:function d4(){},
du:function du(){},
bL:function bL(){},
dz:function dz(){},
dP:function dP(){}},W={
jT:function(a){var u=document.createElement("a")
return u},
jX:function(a,b){var u=document.createElement("canvas")
return u},
lO:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ad(u,a,b,c)
t.toString
u=W.B
u=new H.cy(new W.am(t),H.k(new W.eI(),{func:1,ret:P.N,args:[u]}),[u])
return H.d(u.gaK(u),"$iP")},
lP:function(a){H.d(a,"$iby")
return"wheel"},
c6:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lB(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ad(s)}return u},
lS:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ica")
try{u.type=a}catch(s){H.ad(s)}return u},
i2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kD:function(a,b,c,d){var u,t
u=W.i2(W.i2(W.i2(W.i2(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u,t
u=W.kS(new W.hT(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lw(a,b,u,!1)}return new W.hS(a,b,u,!1,[e])},
kC:function(a){var u,t
u=W.jT(null)
t=window.location
u=new W.bp(new W.ia(u,t))
u.fH(a)
return u},
mE:function(a,b,c,d){H.d(a,"$iP")
H.E(b)
H.E(c)
H.d(d,"$ibp")
return!0},
mF:function(a,b,c,d){var u,t,s
H.d(a,"$iP")
H.E(b)
H.E(c)
u=H.d(d,"$ibp").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kE:function(){var u,t,s,r,q
u=P.f
t=P.k6(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.il(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.ik(t,P.de(null,null,null,u),P.de(null,null,null,u),P.de(null,null,null,u),null)
t.fS(null,new H.fi(C.A,r,[s,u]),q,null)
return t},
kS:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.l)return a
return u.e0(a,b)},
w:function w(){},
cS:function cS(){},
eo:function eo(){},
c0:function c0(){},
bc:function bc(){},
bu:function bu(){},
bd:function bd(){},
c4:function c4(){},
eB:function eB(){},
ax:function ax(){},
c5:function c5(){},
eE:function eE(){},
d0:function d0(){},
d1:function d1(){},
hO:function hO(a,b){this.a=a
this.b=b},
P:function P(){},
eI:function eI(){},
m:function m(){},
by:function by(){},
eS:function eS(){},
d5:function d5(){},
d6:function d6(){},
bA:function bA(){},
d7:function d7(){},
ca:function ca(){},
aO:function aO(){},
dc:function dc(){},
df:function df(){},
a9:function a9(){},
am:function am(a){this.a=a},
B:function B(){},
cf:function cf(){},
dv:function dv(){},
fL:function fL(){},
aS:function aS(){},
dE:function dE(){},
dF:function dF(){},
h_:function h_(){},
cm:function cm(){},
aI:function aI(){},
aJ:function aJ(){},
h6:function h6(){},
bn:function bn(){},
aW:function aW(){},
cz:function cz(){},
cA:function cA(){},
e_:function e_(){},
e5:function e5(){},
hN:function hN(){},
hQ:function hQ(a){this.a=a},
hR:function hR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jt:function jt(a,b,c,d){var _=this
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
bp:function bp(a){this.a=a},
as:function as(){},
dq:function dq(a){this.a=a},
fv:function fv(a){this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(){},
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
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(){},
ia:function ia(a,b){this.a=a
this.b=b},
ef:function ef(a){this.a=a},
ix:function ix(a){this.a=a},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
e6:function e6(){},
e7:function e7(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
eh:function eh(){}},O={
jd:function(a){var u=new O.a_([a])
u.bX(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cc:function cc(){this.b=this.a=null},
di:function di(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dj:function dj(){},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fn:function fn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fo:function fo(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bN:function bN(){}},E={
k2:function(a,b,c,d,e,f){var u=new E.ai()
u.a=d
u.b=!0
u.sfG(0,O.jd(E.ai))
u.y.bj(u.gko(),u.gkr())
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
u.sai(0,e)
u.sbb(c)
return u},
mm:function(a,b){var u=new E.fG(a,b)
u.fA(a,b)
return u},
mq:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibu)return E.kn(a,!0,!0,!0,!1)
t=W.jX(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcB(a).h(0,t)
r=E.kn(t,!0,!0,!0,!1)
r.a=a
return r},
kn:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dL()
t=P.m_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.d7(a,"webgl",t)
s=H.d(s==null?C.q.d7(a,"experimental-webgl",t):s,"$ibL")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mm(s,a)
r=new T.h1(s)
r.b=H.ac((s&&C.c).d9(s,3379))
r.c=H.ac(C.c.d9(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dS(a)
q=new X.f5()
q.c=new X.au(!1,!1,!1)
q.siq(P.de(null,null,null,P.l))
r.b=q
q=new X.fp(r)
q.f=0
q.r=V.bm()
q.x=V.bm()
q.Q=1
q.ch=1
r.c=q
q=new X.fc(r)
q.r=0
q.x=V.bm()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.h5(r)
q.e=0
q.f=V.bm()
q.r=V.bm()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shd(H.b([],[[P.cl,P.L]]))
q=r.z
p=document
o=W.a9
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a8(p,"contextmenu",H.k(r.ghM(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a8(a,"focus",H.k(r.ghS(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a8(a,"blur",H.k(r.ghE(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a8(p,"keyup",H.k(r.ghW(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a8(p,"keydown",H.k(r.ghU(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a8(a,"mousedown",H.k(r.gi_(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a8(a,"mouseup",H.k(r.gi3(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a8(a,"mousemove",H.k(r.gi1(),n),!1,o))
k=r.z
j=W.aW;(k&&C.a).h(k,W.a8(a,H.E(W.lP(a)),H.k(r.gi5(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a8(p,"mousemove",H.k(r.ghO(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a8(p,"mouseup",H.k(r.ghQ(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a8(p,"pointerlockchange",H.k(r.gi7(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a8(a,"touchstart",H.k(r.gim(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a8(a,"touchend",H.k(r.gii(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a8(a,"touchmove",H.k(r.gik(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ah(Date.now(),!1)
u.cy=0
u.dO()
return u},
et:function et(){},
ai:function ai(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fG:function fG(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
dL:function dL(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a}},Z={
js:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.c.av(a,b,u)
C.c.e2(a,b,new Int16Array(H.bQ(c)),35044)
C.c.av(a,b,null)
return new Z.dX(b,u)},
az:function(a){return new Z.aV(a)},
dX:function dX(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hH:function hH(a){this.a=a},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
Q:function(){var u=new D.bx()
u.saj(null)
u.sb_(null)
u.c=null
u.d=0
return u},
ew:function ew(){},
bx:function bx(){var _=this
_.d=_.c=_.b=_.a=null},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bC:function bC(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bD:function bD(a,b,c,d){var _=this
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
jf:function(a,b){var u,t,s
u=new D.bg()
u.c=new V.W(1,1,1)
u.a=V.kA()
t=u.b
u.b=b
b.gD().h(0,u.gfJ())
s=new D.G("mover",t,u.b,u,[U.a6])
s.b=!0
u.aC(s)
if(!u.c.w(0,a)){t=u.c
u.c=a
s=new D.G("color",t,a,u,[V.W])
s.b=!0
u.aC(s)}return u},
bg:function bg(){var _=this
_.d=_.c=_.b=_.a=null},
a1:function a1(){},
dd:function dd(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dt:function dt(){},
dB:function dB(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){}},X={cX:function cX(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},f5:function f5(){var _=this
_.d=_.c=_.b=_.a=null},dg:function dg(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fc:function fc(a){var _=this
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
_.b=null},fp:function fp(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cd:function cd(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fB:function fB(){},dN:function dN(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h5:function h5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dS:function dS(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lR:function(a,b,c,d,e,f,g){var u,t
u=new X.eU()
t=new V.aE(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kj
if(t==null){t=V.ki(0,0,1,1)
$.kj=t}u.r=t
return u},
cY:function cY(){},
eU:function eU(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){}},V={
j8:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.e.f_(Math.abs(a-0)<$.F().a?0:a,b),c+b+1)},
bV:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.p],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.K(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.b.af(u[p],s))}return u},
dl:function(){var u=$.kb
if(u==null){u=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kb=u}return u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ka:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
k7:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
k8:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
k9:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aQ(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bm:function(){var u=$.kf
if(u==null){u=new V.a4(0,0)
$.kf=u}return u},
m6:function(){var u=$.cg
if(u==null){u=new V.Y(0,0,0)
$.cg=u}return u},
ki:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dx(a,b,c,d)},
cx:function(){var u=$.kz
if(u==null){u=new V.C(0,0,0)
$.kz=u}return u},
kA:function(){var u=$.hv
if(u==null){u=new V.C(0,0,1)
$.hv=u}return u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
dk:function dk(a,b,c,d,e,f,g,h,i){var _=this
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
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.I(a,0)
t=C.b.I(b,0)
s=new V.fE()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fM()
u.fB(a)
return u},
h4:function(){var u,t
u=new V.h3()
t=P.f
u.siO(new H.aH([t,V.ck]))
u.siQ(new H.aH([t,V.cn]))
u.c=null
return u},
aY:function aY(){},
at:function at(){},
dh:function dh(){},
ao:function ao(){this.a=null},
fE:function fE(){this.b=this.a=null},
fM:function fM(){this.a=null},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a,b){this.a=a
this.b=b
this.c=null},
h3:function h3(){this.c=this.b=this.a=null},
co:function co(a){this.b=a
this.a=this.c=null},
ny:function(a){P.mr(C.U,new V.j3(a))},
mo:function(a,b){var u=new V.fQ()
u.fD(a,!0)
return u},
be:function be(){},
j3:function j3(a){this.a=a},
eD:function eD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eV:function eV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eW:function eW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fC:function fC(a,b){this.a=a
this.b=b
this.c=null},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(){this.b=this.a=null},
fS:function fS(a){this.a=a},
fR:function fR(a){this.a=a},
fT:function fT(a){this.a=a}},U={
je:function(){var u=new U.ex()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jZ:function(a){var u=new U.cZ()
u.a=a
return u},
jm:function(a,b,c,d,e,f){var u,t
u=new U.dy()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sf7(f)
u.seP(d)
u.seV(e)
t=u.d
if(!(Math.abs(t-c)<$.F().a)){u.d=c
t=new D.G("deltaYaw",t,c,u,[P.p])
t.b=!0
u.K(t)}t=u.e
if(!(Math.abs(t-a)<$.F().a)){u.e=a
t=new D.G("deltaPitch",t,a,u,[P.p])
t.b=!0
u.K(t)}t=u.f
if(!(Math.abs(t-b)<$.F().a)){u.f=b
t=new D.G("deltaRoll",t,b,u,[P.p])
t.b=!0
u.K(t)}return u},
ex:function ex(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
c9:function c9(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dy:function dy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
l3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u=V.mo("Test 020",!0)
t=W.jX(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.f]
u.dX(H.b(["Test of the Matrial Lighting shader with multiple moving directional lights."],s))
u.jo(H.b(["shapes"],s))
u.dX(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.d8(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.mq(r,!0,!0,!0,!1)
p=U.jm(0,0,0.3,0,0,0)
o=D.jf(new V.W(1,0,0),p)
p=U.jm(0.4,0,0,0,0,0)
n=D.jf(new V.W(0,1,0),p)
p=U.jm(0.5,0,0.5,0,0,0)
m=D.jf(new V.W(0,0,1),p)
l=new O.di()
l.sh1(O.jd(V.aj))
l.e.bj(l.ghA(),l.ghC())
p=new O.aP(l,"emission")
p.c=C.d
p.f=new V.W(0,0,0)
l.f=p
p=new O.aP(l,"ambient")
p.c=C.d
p.f=new V.W(0,0,0)
l.r=p
p=new O.aP(l,"diffuse")
p.c=C.d
p.f=new V.W(0,0,0)
l.x=p
p=new O.aP(l,"invDiffuse")
p.c=C.d
p.f=new V.W(0,0,0)
l.y=p
p=new O.fo(l,"specular")
p.c=C.d
p.f=new V.W(0,0,0)
p.ch=100
l.z=p
p=new O.fl(l,"bump")
p.c=C.d
l.Q=p
l.ch=null
p=new O.aP(l,"reflect")
p.c=C.d
p.f=new V.W(0,0,0)
l.cx=p
p=new O.fn(l,"refract")
p.c=C.d
p.f=new V.W(0,0,0)
p.ch=1
l.cy=p
p=new O.fk(l,"alpha")
p.c=C.d
p.f=1
l.db=p
p=new D.dd()
p.bX(D.a1)
p.sha(H.b([],[D.bg]))
p.sip(H.b([],[D.dt]))
p.siN(H.b([],[D.dB]))
p.siY(H.b([],[D.dI]))
p.siZ(H.b([],[D.dJ]))
p.sj_(H.b([],[D.dK]))
p.Q=null
p.ch=null
p.dc(p.ghy(),p.gia(),p.gig())
l.dx=p
k=p.Q
if(k==null){k=D.Q()
p.Q=k
p=k}else p=k
p.h(0,l.giB())
p=l.dx
k=p.ch
if(k==null){k=D.Q()
p.ch=k
p=k}else p=k
p.h(0,l.ghG())
l.dy=null
l.dx.h(0,o)
l.dx.h(0,n)
l.dx.h(0,m)
l.f.sal(0,new V.W(0,0,0))
p=l.r
p.sal(0,new V.W(0.1,0.1,0.1))
p=l.x
p.sal(0,new V.W(0.7,0.7,0.7))
p=l.z
p.sal(0,new V.W(0.3,0.3,0.3))
p=l.z
if(p.c===C.d){p.c=C.j
p.bW()
p.cl(100)
k=p.a
k.a=null
k.ab(null)}p.cl(100)
j=E.k2(null,!0,null,"",null,null)
j.sai(0,F.l8(30,1,15,0.5))
i=E.k2(null,!0,null,"",null,null)
i.sbb(U.jZ(V.ka(3,3,3,1)))
p=F.jE(1,null,null,1)
p.cN()
i.sai(0,p)
h=new U.c9()
h.bX(U.a6)
h.bj(h.ghw(),h.gic())
h.e=null
h.f=V.dl()
h.r=0
p=q.r
k=new U.dU()
g=U.je()
g.sd6(0,!0)
g.scT(6.283185307179586)
g.scV(0)
g.sa2(0,0)
g.scU(100)
g.sW(0)
g.scE(0.5)
k.b=g
f=k.gaM()
g.gD().h(0,f)
g=U.je()
g.sd6(0,!0)
g.scT(6.283185307179586)
g.scV(0)
g.sa2(0,0)
g.scU(100)
g.sW(0)
g.scE(0.5)
k.c=g
g.gD().h(0,f)
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
e=new X.au(!1,!1,!1)
d=k.d
k.d=e
g=[X.au]
f=new D.G("modifiers",d,e,k,g)
f.b=!0
k.K(f)
f=k.f
if(f!==!1){k.f=!1
f=new D.G("invertX",f,!1,k,[P.N])
f.b=!0
k.K(f)}f=k.r
if(f!==!1){k.r=!1
f=new D.G("invertY",f,!1,k,[P.N])
f.b=!0
k.K(f)}k.b3(p)
h.h(0,k)
p=q.r
k=new U.dT()
f=U.je()
f.sd6(0,!0)
f.scT(6.283185307179586)
f.scV(0)
f.sa2(0,0)
f.scU(100)
f.sW(0)
f.scE(0.2)
k.b=f
f.gD().h(0,k.gaM())
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
e=new X.au(!0,!1,!1)
d=k.c
k.c=e
f=new D.G("modifiers",d,e,k,g)
f.b=!0
k.K(f)
k.b3(p)
h.h(0,k)
p=q.r
k=new U.dV()
k.c=0.01
k.d=0
k.e=0
e=new X.au(!1,!1,!1)
k.b=e
g=new D.G("modifiers",null,e,k,g)
g.b=!0
k.K(g)
k.b3(p)
h.h(0,k)
h.h(0,U.jZ(V.aQ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=new M.d2()
p.sh4(0,O.jd(E.ai))
p.d.bj(p.ghI(),p.ghK())
p.e=null
p.f=null
p.r=null
p.x=null
c=X.lR(!0,!0,!1,null,2000,null,0)
b=new X.ds()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.sbb(null)
k=b.c
if(!(Math.abs(k-1.0471975511965976)<$.F().a)){b.c=1.0471975511965976
k=new D.G("fov",k,1.0471975511965976,b,[P.p])
k.b=!0
b.aN(k)}k=b.d
if(!(Math.abs(k-0.1)<$.F().a)){b.d=0.1
k=new D.G("near",k,0.1,b,[P.p])
k.b=!0
b.aN(k)}k=b.e
if(!(Math.abs(k-2000)<$.F().a)){b.e=2000
k=new D.G("far",k,2000,b,[P.p])
k.b=!0
b.aN(k)}k=p.a
if(k!==b){if(k!=null)k.gD().N(0,p.gar())
d=p.a
p.a=b
b.gD().h(0,p.gar())
k=new D.G("camera",d,p.a,p,[X.cY])
k.b=!0
p.aD(k)}k=p.b
if(k!==c){if(k!=null)k.gD().N(0,p.gar())
d=p.b
p.b=c
c.gD().h(0,p.gar())
k=new D.G("target",d,p.b,p,[X.dG])
k.b=!0
p.aD(k)}p.seX(null)
p.seX(l)
p.d.h(0,j)
p.d.h(0,i)
p.a.sbb(h)
k=q.d
if(k!==p){if(k!=null)k.gD().N(0,q.gdf())
q.d=p
p.gD().h(0,q.gdf())
q.dg()}p=new V.fC("shapes",!0)
s=C.z.d8(s,"shapes")
p.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
p.b2(0,"Cube",new U.iV(j))
p.b2(0,"Cylinder",new U.iW(j))
p.b2(0,"Cone",new U.iX(j))
p.b2(0,"Sphere",new U.iY(j))
p.dV(0,"Toroid",new U.iZ(j),!0)
p.b2(0,"Knot",new U.j_(j))
s=q.z
if(s==null){s=D.Q()
q.z=s}p={func:1,ret:-1,args:[D.y]}
k=H.k(new U.j0(u,l),p)
if(s.b==null)s.sb_(H.b([],[p]))
s=s.b;(s&&C.a).h(s,k)
V.ny(q)},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b}},M={d2:function d2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m4:function(a,b){var u,t
u=a.am
t=new A.fj(b,u)
t.fC(b,u)
t.fz(a,b)
return t},
jp:function(a,b,c,d,e){var u=new A.hb(a,b,c,e)
u.f=d
u.sj0(P.m1(d,0,!1,P.l))
return u},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
fj:function fj(a,b){var _=this
_.bu=_.e7=_.bt=_.am=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.en=_.cH=_.em=_.bH=_.el=_.ek=_.bG=_.bF=_.ej=_.ei=_.bE=_.bD=_.bC=_.eh=_.eg=_.bB=_.ef=_.ee=_.bA=_.ed=_.ec=_.bz=_.by=_.eb=_.ea=_.bx=_.bw=_.e9=_.e8=_.bv=null
_.cM=_.er=_.cL=_.eq=_.cK=_.ep=_.cJ=_.eo=_.cI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fm:function fm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.am=b4
_.bt=b5},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cr:function cr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cu:function cu(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b,c,d,e,f,g,h,i,j){var _=this
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
cv:function cv(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cj:function cj(){},
bw:function bw(a,b){this.a=a
this.b=b},
dO:function dO(){},
hh:function hh(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a,b,c,d){var _=this
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
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b,c,d){var _=this
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
jE:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.aa,P.p,P.p]})
u=F.jn()
F.cI(u,b,c,d,a,1,0,0,1)
F.cI(u,b,c,d,a,0,1,0,3)
F.cI(u,b,c,d,a,0,0,1,2)
F.cI(u,b,c,d,a,-1,0,0,0)
F.cI(u,b,c,d,a,0,-1,0,0)
F.cI(u,b,c,d,a,0,0,-1,3)
u.aw()
return u},
iA:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cI:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.aa,P.p,P.p]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.C(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.C(o+a3,n+a1,m+a2)
u.b=l
k=new V.C(o-a3,n-a1,m-a2)
u.c=k
j=new V.C(t-a3,r-a1,q-a2)
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
e=F.jL(d,a0,new F.iz(u,F.iA(u.c),F.iA(u.d),f,g,c),b)
if(e!=null)a.ba(e)},
kY:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.p,args:[P.p]})
if(a0<3)return
u=F.jn()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.aa])
q=u.a
p=new V.C(0,0,t)
p=p.B(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jr(new V.aR(a,-1,-1,-1),new V.aE(1,1,1,1),new V.Y(0,0,d),new V.C(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.A(k)
j=new V.C(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dW(new V.aR(a,-1,-1,-1),null,new V.aE(i,g,h,1),new V.Y(m*k,l*k,d),new V.C(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jp(r)
return u},
kW:function(a,b,c,d,e,f){return F.na(!0,c,d,new F.iJ(a,f),e)},
na:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.jL(c,e,new F.iL(d),null)
if(u==null)return
u.aw()
u.cq()
if(b)u.ba(F.kY(3,!1,!1,1,new F.iM(d),e))
u.ba(F.kY(1,!0,!1,-1,new F.iN(d),e))
return u},
nz:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.j4()
t=F.jE(a,null,new F.j5(u,c),d)
t.cq()
return t},
l8:function(a,b,c,d){return F.kX(c,a,d,b,new F.j6())},
nq:function(a,b,c,d,e,f){return F.kX(d,a,e,b,new F.iU(f,c))},
kX:function(a,b,c,d,e){var u=F.jL(a,b,new F.iK(H.k(e,{func:1,ret:V.Y,args:[P.p]}),d,b,c),null)
if(u==null)return
u.aw()
u.cq()
return u},
jL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.aa,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.jn()
t=H.b([],[F.aa])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dW(null,null,new V.aE(p,0,0,1),null,null,new V.a4(r,1),null,null,0)
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
o=F.dW(null,null,new V.aE(j,i,h,1),null,null,new V.a4(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cD(d))}}u.d.jq(a+1,b+1,t)
return u},
c7:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.co(a)
u.cp(b)
u.iH(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
lY:function(a,b){var u,t
u=new F.b2()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.co(a)
u.cp(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
jn:function(){var u,t
u=new F.dA()
t=new F.hw(u)
t.b=!1
t.sj1(H.b([],[F.aa]))
u.a=t
t=new F.fP(u)
t.scf(H.b([],[F.bl]))
u.b=t
t=new F.fO(u)
t.shm(H.b([],[F.b2]))
u.c=t
t=new F.fN(u)
t.she(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
dW:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aa()
t=new F.hE(u)
t.scf(H.b([],[F.bl]))
u.b=t
t=new F.hA(u)
s=[F.b2]
t.shn(H.b([],s))
t.sho(H.b([],s))
u.c=t
t=new F.hx(u)
s=[F.a2]
t.shf(H.b([],s))
t.shg(H.b([],s))
t.shh(H.b([],s))
u.d=t
h=$.lm()
u.e=0
t=$.b9()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b8().a)!==0?e:null
u.x=(s&$.b7().a)!==0?b:null
u.y=(s&$.ba().a)!==0?f:null
u.z=(s&$.bb().a)!==0?g:null
u.Q=(s&$.ln().a)!==0?c:null
u.ch=(s&$.c_().a)!==0?i:0
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
eO:function eO(){},
fU:function fU(){},
b2:function b2(){this.b=this.a=null},
f6:function f6(){},
ha:function ha(){},
bl:function bl(){this.a=null},
dA:function dA(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(a){this.a=a
this.b=null},
fO:function fO(a){this.a=a
this.b=null},
fP:function fP(a){this.a=a
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
fw:function fw(){},
hE:function hE(a){this.a=a
this.b=null}},T={dH:function dH(){},h1:function h1(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jj.prototype={}
J.a3.prototype={
w:function(a,b){return a===b},
gL:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.bI(a)+"'"}}
J.f1.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iN:1}
J.d9.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iD:1}
J.da.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fz.prototype={}
J.bo.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.la()]
if(u==null)return this.fs(a)
return"JavaScript function for "+H.j(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibi:1}
J.aF.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.Z("add"))
a.push(b)},
kF:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dw(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("remove"))
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
ki:function(a){return this.l(a,"")},
ka:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aZ(a))}return t},
k9:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aZ(a))}throw H.c(H.f_())},
k8:function(a,b){return this.k9(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fo:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a7(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gk7:function(a){if(a.length>0)return a[0]
throw H.c(H.f_())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f_())},
fm:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.q(P.Z("setRange"))
P.b5(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bW(d)
if(e+t>u.gm(d))throw H.c(H.lU())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bk:function(a,b,c,d){return this.fm(a,b,c,d,0)},
dY:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aZ(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.jh(a,"[","]")},
gU:function(a){return new J.ar(a,a.length,0,[H.r(a,0)])},
gL:function(a){return H.ch(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.Z("set length"))
if(b<0)throw H.c(P.a7(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bU(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bU(a,b))
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
J.ji.prototype={}
J.ar.prototype={
gM:function(){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.z(u))
s=this.c
if(s>=t){this.sdz(null)
return!1}this.sdz(u[s]);++this.c
return!0},
sdz:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
J.bk.prototype={
eu:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Z(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Z(""+a+".round()"))},
f_:function(a,b){var u,t
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bg:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.Z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.aq(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aq(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.aq(b))
return a*b},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dR(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dR(a,b)},
dR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Z("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.dQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iM:function(a,b){if(b<0)throw H.c(H.aq(b))
return this.dQ(a,b)},
dQ:function(a,b){return b>31?0:a>>>b},
$ip:1,
$iaf:1}
J.d8.prototype={$il:1}
J.f2.prototype={}
J.b0.prototype={
a0:function(a,b){if(b<0)throw H.c(H.bU(a,b))
if(b>=a.length)H.q(H.bU(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.bU(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jb(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aq(b))
c=P.b5(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.aq(c))
if(typeof c!=="number")return c.X()
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aq(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.X()
if(b<0)throw H.c(P.dw(b,null,null))
if(b>c)throw H.c(P.dw(b,null,null))
if(c>a.length)throw H.c(P.dw(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.v(a,b,null)},
kT:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kv:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
af:function(a,b){return this.kv(a,b," ")},
eC:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eB:function(a,b){return this.eC(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikd:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.b.a0(this.a,b)},
$acw:function(){return[P.l]},
$aT:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eH.prototype={}
H.bE.prototype={
gU:function(a){return new H.cb(this,this.gm(this),0,[H.ab(this,"bE",0)])},
bP:function(a,b){return this.fq(0,H.k(b,{func:1,ret:P.N,args:[H.ab(this,"bE",0)]}))}}
H.cb.prototype={
gM:function(){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.bW(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aZ(u))
r=this.c
if(r>=s){this.saY(null)
return!1}this.saY(t.a8(u,r));++this.c
return!0},
saY:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.fg.prototype={
gU:function(a){return new H.fh(J.bt(this.a),this.b,this.$ti)},
gm:function(a){return J.aC(this.a)},
a8:function(a,b){return this.b.$1(J.en(this.a,b))},
$an:function(a,b){return[b]}}
H.fh.prototype={
F:function(){var u=this.b
if(u.F()){this.saY(this.c.$1(u.gM()))
return!0}this.saY(null)
return!1},
gM:function(){return this.a},
saY:function(a){this.a=H.x(a,H.r(this,1))},
$aaN:function(a,b){return[b]}}
H.fi.prototype={
gm:function(a){return J.aC(this.a)},
a8:function(a,b){return this.b.$1(J.en(this.a,b))},
$abE:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cy.prototype={
gU:function(a){return new H.hI(J.bt(this.a),this.b,this.$ti)}}
H.hI.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bz.prototype={}
H.cw.prototype={
q:function(a,b,c){H.x(c,H.ab(this,"cw",0))
throw H.c(P.Z("Cannot modify an unmodifiable list"))}}
H.dQ.prototype={}
H.ez.prototype={
i:function(a){return P.jl(this)},
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.lL()},
$iH:1}
H.eA.prototype={
gm:function(a){return this.a},
br:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.br(b))return
return this.dA(b)},
dA:function(a){return this.b[H.E(a)]},
a_:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dA(q),u))}}}
H.fF.prototype={}
H.h7.prototype={
ae:function(a){var u,t,s
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
H.fx.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f4.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hl.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j7.prototype={
$1:function(a){if(!!J.S(a).$ibh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.e9.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iap:1}
H.c3.prototype={
i:function(a){return"Closure '"+H.bI(this).trim()+"'"},
$ibi:1,
gl_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h0.prototype={}
H.fV.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bZ(u)+"'"}}
H.c1.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c1))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.ch(this.a)
else t=typeof u!=="object"?J.cR(u):H.ch(u)
return(t^H.ch(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bI(u)+"'")}}
H.h9.prototype={
i:function(a){return this.a}}
H.ev.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aH.prototype={
gm:function(a){return this.a},
gkh:function(a){return this.a===0},
gay:function(){return new H.f8(this,[H.r(this,0)])},
br:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.du(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.du(t,a)}else return this.ke(a)},
ke:function(a){var u=this.d
if(u==null)return!1
return this.cQ(this.c3(u,this.cP(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.kf(b)},
kf:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c3(u,this.cP(a))
s=this.cQ(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cd()
this.b=u}this.dj(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cd()
this.c=t}this.dj(t,b,c)}else this.kg(b,c)},
kg:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.cd()
this.d=u}t=this.cP(a)
s=this.c3(u,t)
if(s==null)this.cm(u,t,[this.bY(a,b)])
else{r=this.cQ(s,a)
if(r>=0)s[r].b=b
else s.push(this.bY(a,b))}},
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aZ(this))
u=u.c}},
dj:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bm(a,b)
if(u==null)this.cm(a,b,this.bY(b,c))
else u.b=c},
fW:function(){this.r=this.r+1&67108863},
bY:function(a,b){var u,t
u=new H.f7(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fW()
return u},
cP:function(a){return J.cR(a)&0x3ffffff},
cQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.jl(this)},
bm:function(a,b){return a[b]},
c3:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
h9:function(a,b){delete a[b]},
du:function(a,b){return this.bm(a,b)!=null},
cd:function(){var u=Object.create(null)
this.cm(u,"<non-identifier-key>",u)
this.h9(u,"<non-identifier-key>")
return u},
$ik4:1}
H.f7.prototype={}
H.f8.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.f9(u,u.r,this.$ti)
t.c=u.e
return t}}
H.f9.prototype={
gM:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdk(null)
return!1}else{this.sdk(u.a)
this.c=this.c.c
return!0}}},
sdk:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.iR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.iS.prototype={
$1:function(a){return this.a(H.E(a))},
$S:50}
H.f3.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikd:1,
$imk:1}
H.bG.prototype={$ibG:1}
H.dm.prototype={
gm:function(a){return a.length},
$iaG:1,
$aaG:function(){}}
H.dn.prototype={
k:function(a,b){H.bq(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nc(c)
H.bq(b,a,a.length)
a[b]=c},
$abz:function(){return[P.p]},
$aT:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]},
$ia:1,
$aa:function(){return[P.p]}}
H.dp.prototype={
q:function(a,b,c){H.ac(c)
H.bq(b,a,a.length)
a[b]=c},
$abz:function(){return[P.l]},
$aT:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fq.prototype={
k:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.fr.prototype={
k:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.fs.prototype={
k:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.ft.prototype={
k:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.ce.prototype={
gm:function(a){return a.length},
k:function(a,b){H.bq(b,a,a.length)
return a[b]},
$ice:1,
$iM:1}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
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
P.ea.prototype={
fT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bT(new P.io(this,b),0),a)
else throw H.c(P.Z("`setTimeout()` not found."))},
fU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bT(new P.im(this,a,Date.now(),b),0),a)
else throw H.c(P.Z("Periodic timer."))},
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
if(r>(t+1)*s)t=C.f.fw(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aX.prototype={
kl:function(a){if(this.c!==6)return!0
return this.b.b.d3(H.k(this.d,{func:1,ret:P.N,args:[P.L]}),a.a,P.N,P.L)},
kd:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.ei(u,{func:1,args:[P.L,P.ap]}))return H.jF(r.kM(u,a.a,a.b,null,t,P.ap),s)
else return H.jF(r.d3(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aA.prototype={
eZ:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n1(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.V,[c])
r=b==null?1:3
this.dm(new P.aX(s,r,a,b,[u,c]))
return s},
kQ:function(a,b){return this.eZ(a,null,b)},
dm:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaX")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaA")
u=t.a
if(u<4){t.dm(a)
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
ci:function(){var u=H.d(this.c,"$iaX")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dq:function(a){var u,t,s
u=H.r(this,0)
H.jF(a,{futureOr:1,type:u})
t=this.$ti
if(H.cL(a,"$ic8",t,"$ac8"))if(H.cL(a,"$iaA",t,null))P.kB(a,this)
else P.mD(a,this)
else{s=this.ci()
H.x(a,u)
this.a=4
this.c=a
P.cB(this,s)}},
dr:function(a,b){var u
H.d(b,"$iap")
u=this.ci()
this.a=8
this.c=new P.ag(a,b)
P.cB(this,u)},
$ic8:1}
P.hU.prototype={
$0:function(){P.cB(this.a,this.b)},
$S:0}
P.hY.prototype={
$0:function(){P.cB(this.b,this.a.a)},
$S:0}
P.hV.prototype={
$1:function(a){var u=this.a
u.a=0
u.dq(a)},
$S:28}
P.hW.prototype={
$2:function(a,b){H.d(b,"$iap")
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
u=r.b.b.eW(H.k(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.bX(q)
if(this.d){r=H.d(this.a.a.c,"$iag").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iag")
else p.b=new P.ag(t,s)
p.a=!0
return}if(!!J.S(u).$ic8){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iag")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kQ(new P.i1(o),null)
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
t=H.bX(o)
s=this.a
s.b=new P.ag(u,t)
s.a=!0}},
$S:3}
P.hZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iag")
r=this.c
if(r.kl(u)&&r.e!=null){q=this.b
q.b=r.kd(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bX(p)
r=H.d(this.a.a.c,"$iag")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ag(t,s)
n.a=!0}},
$S:3}
P.dY.prototype={}
P.fW.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.V,[P.l])
u.a=0
s=H.r(this,0)
r=H.k(new P.fY(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.fZ(u,t),{func:1,ret:-1})
W.a8(this.a,this.b,r,!1,s)
return t}}
P.fY.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.r(this.b,0)]}}}
P.fZ.prototype={
$0:function(){this.b.dq(this.a.a)},
$S:0}
P.cl.prototype={}
P.fX.prototype={}
P.aT.prototype={}
P.ag.prototype={
i:function(a){return H.j(this.a)},
$ibh:1}
P.iy.prototype={$ioa:1}
P.iG.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dr()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.i6.prototype={
kN:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.V){a.$0()
return}P.kN(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.bX(s)
P.iF(null,null,this,u,H.d(t,"$iap"))}},
kO:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.V){a.$1(b)
return}P.kO(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bX(s)
P.iF(null,null,this,u,H.d(t,"$iap"))}},
jz:function(a,b){return new P.i8(this,H.k(a,{func:1,ret:b}),b)},
cu:function(a){return new P.i7(this,H.k(a,{func:1,ret:-1}))},
e0:function(a,b){return new P.i9(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eW:function(a,b){H.k(a,{func:1,ret:b})
if($.V===C.l)return a.$0()
return P.kN(null,null,this,a,b)},
d3:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.V===C.l)return a.$1(b)
return P.kO(null,null,this,a,b,c,d)},
kM:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.V===C.l)return a.$2(b,c)
return P.n2(null,null,this,a,b,c,d,e,f)}}
P.i8.prototype={
$0:function(){return this.a.eW(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.i7.prototype={
$0:function(){return this.a.kN(this.b)},
$S:3}
P.i9.prototype={
$1:function(a){var u=this.c
return this.a.kO(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i4.prototype={
gU:function(a){var u=new P.e3(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibO")!=null}else{t=this.h5(b)
return t}},
h5:function(a){var u=this.d
if(u==null)return!1
return this.c1(this.dB(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.ju()
this.b=u}return this.dl(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.ju()
this.c=t}return this.dl(t,b)}else return this.fX(b)},
fX:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.ju()
this.d=u}t=this.ds(a)
s=u[t]
if(s==null)u[t]=[this.ce(a)]
else{if(this.c1(s,a)>=0)return!1
s.push(this.ce(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iv(this.c,b)
else return this.is(b)},
is:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dB(u,a)
s=this.c1(t,a)
if(s<0)return!1
this.dS(t.splice(s,1)[0])
return!0},
dl:function(a,b){H.x(b,H.r(this,0))
if(H.d(a[b],"$ibO")!=null)return!1
a[b]=this.ce(b)
return!0},
iv:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibO")
if(u==null)return!1
this.dS(u)
delete a[b]
return!0},
dG:function(){this.r=1073741823&this.r+1},
ce:function(a){var u,t
u=new P.bO(H.x(a,H.r(this,0)))
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
ds:function(a){return J.cR(a)&1073741823},
dB:function(a,b){return a[this.ds(b)]},
c1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.bO.prototype={}
P.e3.prototype={
gM:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aZ(u))
else{u=this.c
if(u==null){this.sdn(null)
return!1}else{this.sdn(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdn:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
P.fa.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:7}
P.fb.prototype={$in:1,$ia:1}
P.T.prototype={
gU:function(a){return new H.cb(a,this.gm(a),0,[H.cN(this,a,"T",0)])},
a8:function(a,b){return this.k(a,b)},
kS:function(a,b){var u,t
u=H.b([],[H.cN(this,a,"T",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
kR:function(a){return this.kS(a,!0)},
n:function(a,b){var u,t
u=[H.cN(this,a,"T",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bk(t,0,this.gm(a),a)
C.a.bk(t,this.gm(a),t.length,b)
return t},
k5:function(a,b,c,d){var u
H.x(d,H.cN(this,a,"T",0))
P.b5(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jh(a,"[","]")}}
P.fd.prototype={}
P.fe.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:7}
P.bF.prototype={
a_:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.ab(this,"bF",0),H.ab(this,"bF",1)]})
for(u=J.bt(this.gay());u.F();){t=u.gM()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aC(this.gay())},
i:function(a){return P.jl(this)},
$iH:1}
P.ip.prototype={
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.Z("Cannot modify unmodifiable map"))}}
P.ff.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
a_:function(a,b){this.a.a_(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.an(this.a)},
$iH:1}
P.dR.prototype={}
P.ib.prototype={
at:function(a,b){var u
for(u=J.bt(H.h(b,"$in",this.$ti,"$an"));u.F();)this.h(0,u.gM())},
i:function(a){return P.jh(this,"{","}")},
a8:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=P.mH(this,this.r,H.r(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.bB(b,this,"index",null,t))},
$in:1,
$ikk:1}
P.e4.prototype={}
P.ed.prototype={}
P.er.prototype={
kn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b5(b,c,a.length,null,null,null)
u=$.lp()
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
r.a=g+H.bJ(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.b.v(a,s,c)
f=g.length
if(q>=0)P.jU(a,p,c,q,o,f)
else{e=C.f.bi(f-1,4)+1
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jU(a,p,c,q,o,d)
else{e=C.f.bi(d,4)
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
if(e>1)a=C.b.aW(a,c,c,e===2?"==":"=")}return a},
$abv:function(){return[[P.a,P.l],P.f]}}
P.es.prototype={
$abf:function(){return[[P.a,P.l],P.f]}}
P.bv.prototype={}
P.bf.prototype={}
P.eJ.prototype={
$abv:function(){return[P.f,[P.a,P.l]]}}
P.eY.prototype={
i:function(a){return this.a}}
P.eX.prototype={
h6:function(a,b,c){var u,t,s,r,q,p
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
if(c>b)q.a+=J.lE(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abf:function(){return[P.f,P.f]}}
P.hs.prototype={
gk0:function(){return C.S}}
P.hu.prototype={
b4:function(a,b,c){var u,t,s
c=P.b5(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iw(t)
if(s.hi(a,b,c)!==c)s.dU(J.ly(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mX(0,s.b,t.length)))},
cC:function(a){return this.b4(a,0,null)},
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
hi:function(a,b,c){var u,t,s,r,q,p,o
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
P.ht.prototype={
b4:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mu(!1,a,b,c)
if(u!=null)return u
c=P.b5(b,c,J.aC(a),null,null,null)
t=new P.ae("")
s=new P.iu(!1,t)
s.b4(a,b,c)
if(s.e>0){H.q(P.a0("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bJ(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cC:function(a){return this.b4(a,0,null)},
$abf:function(){return[[P.a,P.l],P.f]}}
P.iu.prototype={
b4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iv(this,b,c,a)
$label0$0:for(q=J.bW(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bR()
if((n&192)!==128){m=P.a0("Bad UTF-8 encoding 0x"+C.f.bg(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.G,m)
if(u<=C.G[m]){m=P.a0("Overlong encoding of 0x"+C.f.bg(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a0("Character outside valid Unicode range: 0x"+C.f.bg(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bJ(u)
this.c=!1}for(m=o<c;m;){l=P.n3(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.X()
if(n<0){i=P.a0("Negative UTF-8 code unit: -0x"+C.f.bg(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a0("Bad UTF-8 encoding 0x"+C.f.bg(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iv.prototype={
$2:function(a,b){this.a.b.a+=P.dD(this.d,a,b)},
$S:45}
P.N.prototype={}
P.ah.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aR(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lM(H.mf(this))
t=P.d_(H.md(this))
s=P.d_(H.m9(this))
r=P.d_(H.ma(this))
q=P.d_(H.mc(this))
p=P.d_(H.me(this))
o=P.lN(H.mb(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.p.prototype={}
P.aM.prototype={
n:function(a,b){return new P.aM(C.f.n(this.a,b.ghb()))},
t:function(a,b){return new P.aM(C.f.t(this.a,b.ghb()))},
w:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eG()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.f.a5(t,6e7)%60)
r=u.$1(C.f.a5(t,1e6)%60)
q=new P.eF().$1(t%1e6)
return""+C.f.a5(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:27}
P.eG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:27}
P.bh.prototype={}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc0()+t+s
if(!this.a)return r
q=this.gc_()
p=P.eL(this.b)
return r+q+": "+p}}
P.bK.prototype={
gc0:function(){return"RangeError"},
gc_:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.eZ.prototype={
gc0:function(){return"RangeError"},
gc_:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.X()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hm.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hj.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ey.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eL(u)+"."}}
P.fy.prototype={
i:function(a){return"Out of Memory"},
$ibh:1}
P.dC.prototype={
i:function(a){return"Stack Overflow"},
$ibh:1}
P.eC.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e0.prototype={
i:function(a){return"Exception: "+this.a}}
P.eT.prototype={
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
return t+h+f+g+"\n"+C.b.u(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bi.prototype={}
P.l.prototype={}
P.n.prototype={
bP:function(a,b){var u=H.ab(this,"n",0)
return new H.cy(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gU(this)
for(t=0;u.F();)++t
return t},
gaK:function(a){var u,t
u=this.gU(this)
if(!u.F())throw H.c(H.f_())
t=u.gM()
if(u.F())throw H.c(H.lV())
return t},
a8:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.F();){s=u.gM()
if(b===t)return s;++t}throw H.c(P.bB(b,this,"index",null,t))},
i:function(a){return P.lT(this,"(",")")}}
P.aN.prototype={}
P.a.prototype={$in:1}
P.H.prototype={}
P.D.prototype={
gL:function(a){return P.L.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.af.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
w:function(a,b){return this===b},
gL:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.bI(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.f.prototype={$ikd:1}
P.ae.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inL:1}
P.hr.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iH",[u,u],"$aH")
H.E(b)
t=J.cM(b).eB(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jw(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.v(b,0,t)
r=C.b.aq(b,t+1)
u=this.a
a.q(0,P.jw(s,0,s.length,u,!0),P.jw(r,0,r.length,u,!0))}return a},
$S:43}
P.ho.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hp.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hq.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ek(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.X()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bP.prototype={
gf6:function(){return this.b},
gcO:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbK:function(a){var u=this.d
if(u==null)return P.kF(this.a)
return u},
gcY:function(){var u=this.f
return u==null?"":u},
gew:function(){var u=this.r
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
g=P.jv(g,0,0,h)
return new P.bP(i,j,c,f,d,g,this.r)},
eT:function(a,b){return this.d2(a,null,null,null,null,null,null,b,null,null)},
gcZ:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.sir(new P.dR(P.ku(u==null?"":u,C.m),[t,t]))}return this.Q},
gex:function(){return this.c!=null},
geA:function(){return this.f!=null},
gey:function(){return this.r!=null},
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
if(!!J.S(b).$ijq)if(this.a==b.gbU())if(this.c!=null===b.gex())if(this.b==b.gf6())if(this.gcO(this)==b.gcO(b))if(this.gbK(this)==b.gbK(b))if(this.e===b.geO(b)){u=this.f
t=u==null
if(!t===b.geA()){if(t)u=""
if(u===b.gcY()){u=this.r
t=u==null
if(!t===b.gey()){if(t)u=""
u=u===b.gew()}else u=!1}else u=!1}else u=!1}else u=!1
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
sir:function(a){var u=P.f
this.Q=H.h(a,"$iH",[u,u],"$aH")},
$ijq:1,
gbU:function(){return this.a},
geO:function(a){return this.e}}
P.iq.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a0("Invalid port",this.a,u+1))},
$S:39}
P.ir.prototype={
$1:function(a){return P.ee(C.a8,a,C.m,!1)},
$S:13}
P.it.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.ee(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.ee(C.w,b,C.m,!0))}},
$S:37}
P.is.prototype={
$2:function(a,b){var u,t
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(u=J.bt(H.l2(b,"$in")),t=this.a;u.F();)t.$2(a,H.E(u.gM()))},
$S:35}
P.hn.prototype={
gf4:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.b.eC(t,"?",u)
r=t.length
if(s>=0){q=P.cH(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.hP(this,"data",null,null,null,P.cH(t,u,r,C.K,!1),q,null)
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
J.lz(u,0,96,b)
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
gex:function(){return this.c>0},
gez:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.A(t)
t=u+1<t
u=t}else u=!1
return u},
geA:function(){var u=this.f
if(typeof u!=="number")return u.X()
return u<this.r},
gey:function(){return this.r<this.a.length},
gdE:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdF:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbU:function(){var u,t
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
gf6:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gcO:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbK:function(a){var u
if(this.gez()){u=this.d
if(typeof u!=="number")return u.n()
return P.ek(C.b.v(this.a,u+1,this.e),null,null)}if(this.gdE())return 80
if(this.gdF())return 443
return 0},
geO:function(a){return C.b.v(this.a,this.e,this.f)},
gcY:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.X()
return u<t?C.b.v(this.a,u+1,t):""},
gew:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.aq(t,u+1):""},
gcZ:function(){var u=this.f
if(typeof u!=="number")return u.X()
if(u>=this.r)return C.a9
u=P.f
return new P.dR(P.ku(this.gcY(),C.m),[u,u])},
d2:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iH",[P.f,null],"$aH")
i=this.gbU()
u=i==="file"
t=this.c
j=t>0?C.b.v(this.a,this.b+3,t):""
f=this.gez()?this.gbK(this):null
t=this.c
if(t>0)c=C.b.v(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.v(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a4(d,"/"))d="/"+d
g=P.jv(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.aq(t,s+1)
return new P.bP(i,j,c,f,d,g,b)},
eT:function(a,b){return this.d2(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.b.gL(this.a)
this.y=u}return u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ijq&&this.a===b.i(0)},
i:function(a){return this.a},
$ijq:1}
P.hP.prototype={}
W.w.prototype={}
W.cS.prototype={
i:function(a){return String(a)},
$icS:1}
W.eo.prototype={
i:function(a){return String(a)}}
W.c0.prototype={$ic0:1}
W.bc.prototype={$ibc:1}
W.bu.prototype={
d7:function(a,b,c){var u=this.hj(a,b,P.n9(c,null))
return u},
hj:function(a,b,c){return a.getContext(b,c)},
$ibu:1}
W.bd.prototype={
gm:function(a){return a.length}}
W.c4.prototype={
gm:function(a){return a.length}}
W.eB.prototype={}
W.ax.prototype={$iax:1}
W.c5.prototype={
ju:function(a,b){return a.adoptNode(b)},
d8:function(a,b){return a.getElementById(b)}}
W.eE.prototype={
i:function(a){return String(a)}}
W.d0.prototype={
jN:function(a,b){return a.createHTMLDocument(b)}}
W.d1.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.cL(b,"$iay",[P.af],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbJ(b)&&a.top===u.gbN(b)&&a.width===u.gbQ(b)&&a.height===u.gbI(b)},
gL:function(a){return W.kD(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
ge1:function(a){return a.bottom},
gbI:function(a){return a.height},
gbJ:function(a){return a.left},
gbM:function(a){return a.right},
gbN:function(a){return a.top},
gbQ:function(a){return a.width},
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
h:function(a,b){J.jQ(this.a,b)
return b},
gU:function(a){var u=this.kR(this)
return new J.ar(u,u.length,0,[H.r(u,0)])},
$aT:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gjy:function(a){return new W.hQ(a)},
gcB:function(a){return new W.hO(a,a.children)},
ge3:function(a){var u,t,s,r
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
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k1
if(u==null){u=H.b([],[W.av])
t=new W.dq(u)
C.a.h(u,W.kC(null))
C.a.h(u,W.kE())
$.k1=t
d=t}else d=u
u=$.k0
if(u==null){u=new W.ef(d)
$.k0=u
c=u}else{u.a=d
c=u}}if($.b_==null){u=document
t=u.implementation
t=(t&&C.T).jN(t,"")
$.b_=t
$.jg=t.createRange()
t=$.b_
t.toString
t=t.createElement("base")
H.d(t,"$ic0")
t.href=u.baseURI
u=$.b_.head;(u&&C.V).E(u,t)}u=$.b_
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibc")}u=$.b_
if(!!this.$ibc)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b_.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a6,a.tagName)){u=$.jg;(u&&C.M).fi(u,s)
u=$.jg
r=(u&&C.M).jL(u,b)}else{s.innerHTML=b
r=$.b_.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.b_.body
if(s==null?u!=null:s!==u)J.jS(s)
c.da(r)
C.z.ju(document,r)
return r},
jM:function(a,b,c){return this.ad(a,b,c,null)},
fl:function(a,b,c,d){a.textContent=null
this.E(a,this.ad(a,b,c,d))},
fk:function(a,b){return this.fl(a,b,null,null)},
aX:function(a,b){return a.getAttribute(b)},
it:function(a,b){return a.removeAttribute(b)},
fj:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
gkP:function(a){return a.tagName}}
W.eI.prototype={
$1:function(a){return!!J.S(H.d(a,"$iB")).$iP},
$S:22}
W.m.prototype={$im:1}
W.by.prototype={
fY:function(a,b,c,d){return a.addEventListener(b,H.bT(H.k(c,{func:1,args:[W.m]}),1),!1)},
$iby:1}
W.eS.prototype={
gm:function(a){return a.length}}
W.d5.prototype={}
W.d6.prototype={
iz:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bA.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bB(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$ibA:1,
$aas:function(){return[W.B]}}
W.d7.prototype={}
W.ca.prototype={$ica:1}
W.aO.prototype={$iaO:1}
W.dc.prototype={}
W.df.prototype={
i:function(a){return String(a)},
$idf:1}
W.a9.prototype={$ia9:1}
W.am.prototype={
gaK:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kl("No elements"))
if(t>1)throw H.c(P.kl("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.B],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.d(c,"$iB")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.j9(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d3(u,u.length,-1,[H.cN(C.aa,u,"as",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aT:function(){return[W.B]},
$an:function(){return[W.B]},
$aa:function(){return[W.B]}}
W.B.prototype={
kE:function(a){var u=a.parentNode
if(u!=null)J.em(u,a)},
kJ:function(a,b){var u,t
try{u=a.parentNode
J.j9(u,b,a)}catch(t){H.ad(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fp(a):u},
E:function(a,b){return a.appendChild(H.d(b,"$iB"))},
iu:function(a,b){return a.removeChild(b)},
iy:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cf.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bB(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Z("Cannot assign element of immutable List."))},
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
W.dv.prototype={
jL:function(a,b){return a.createContextualFragment(b)},
fi:function(a,b){return a.selectNodeContents(b)}}
W.fL.prototype={
gm:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.dE.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=W.lO("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).at(0,new W.am(u))
return t},
hl:function(a,b){return a.insertRow(b)}}
W.dF.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaK(u)
s.toString
u=new W.am(s)
r=u.gaK(u)
t.toString
r.toString
new W.am(t).at(0,new W.am(r))
return t},
dD:function(a,b){return a.insertCell(b)}}
W.h_.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaK(u)
t.toString
s.toString
new W.am(t).at(0,new W.am(s))
return t}}
W.cm.prototype={$icm:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.h6.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bB(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iaI")
throw H.c(P.Z("Cannot assign element of immutable List."))},
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
W.bn.prototype={}
W.aW.prototype={
gjT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Z("deltaY is not supported"))},
gjS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Z("deltaX is not supported"))},
$iaW:1}
W.cz.prototype={
iA:function(a,b){return a.requestAnimationFrame(H.bT(H.k(b,{func:1,ret:-1,args:[P.af]}),1))},
hc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cA.prototype={$icA:1}
W.e_.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.cL(b,"$iay",[P.af],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbJ(b)&&a.top===u.gbN(b)&&a.width===u.gbQ(b)&&a.height===u.gbI(b)},
gL:function(a){return W.kD(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gbI:function(a){return a.height},
gbQ:function(a){return a.width}}
W.e5.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bB(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Z("Cannot assign element of immutable List."))},
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
for(u=this.gay(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.z)(u),++q){p=u[q]
b.$2(p,r.aX(s,p))}},
gay:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icA")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abF:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.hQ.prototype={
k:function(a,b){return J.ja(this.a,H.E(b))},
q:function(a,b,c){J.lD(this.a,b,c)},
gm:function(a){return this.gay().length}}
W.hR.prototype={}
W.jt.prototype={}
W.hS.prototype={}
W.hT.prototype={
$1:function(a){return this.a.$1(H.d(a,"$im"))},
$S:32}
W.bp.prototype={
fH:function(a){var u,t
u=$.jO()
if(u.gkh(u)){for(t=0;t<262;++t)u.q(0,C.a5[t],W.nj())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nk())}},
aS:function(a){return $.lq().Z(0,W.c6(a))},
au:function(a,b,c){var u,t,s
u=W.c6(a)
t=$.jO()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jB(s.$4(a,b,c,this))},
$iav:1}
W.as.prototype={
gU:function(a){return new W.d3(a,this.gm(a),-1,[H.cN(this,a,"as",0)])}}
W.dq.prototype={
aS:function(a){return C.a.dY(this.a,new W.fv(a))},
au:function(a,b,c){return C.a.dY(this.a,new W.fu(a,b,c))},
$iav:1}
W.fv.prototype={
$1:function(a){return H.d(a,"$iav").aS(this.a)},
$S:24}
W.fu.prototype={
$1:function(a){return H.d(a,"$iav").au(this.a,this.b,this.c)},
$S:24}
W.e8.prototype={
fS:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bP(0,new W.ic())
t=b.bP(0,new W.id())
this.b.at(0,u)
s=this.c
s.at(0,C.H)
s.at(0,t)},
aS:function(a){return this.a.Z(0,W.c6(a))},
au:function(a,b,c){var u,t
u=W.c6(a)
t=this.c
if(t.Z(0,H.j(u)+"::"+b))return this.d.jv(c)
else if(t.Z(0,"*::"+b))return this.d.jv(c)
else{t=this.b
if(t.Z(0,H.j(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.j(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iav:1}
W.ic.prototype={
$1:function(a){return!C.a.Z(C.B,H.E(a))},
$S:25}
W.id.prototype={
$1:function(a){return C.a.Z(C.B,H.E(a))},
$S:25}
W.ik.prototype={
au:function(a,b,c){if(this.fv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ja(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.il.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.E(a))},
$S:13}
W.ij.prototype={
aS:function(a){var u=J.S(a)
if(!!u.$ici)return!1
u=!!u.$io
if(u&&W.c6(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aS(a)},
$iav:1}
W.d3.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdC(J.lv(this.a,u))
this.c=u
return!0}this.sdC(null)
this.c=t
return!1},
gM:function(){return this.d},
sdC:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
W.av.prototype={}
W.ia.prototype={$inX:1}
W.ef.prototype={
da:function(a){new W.ix(this).$2(a,null)},
b1:function(a,b){if(b==null)J.jS(a)
else J.em(b,a)},
iE:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lA(a)
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
try{q=J.an(a)}catch(o){H.ad(o)}try{p=W.c6(a)
this.iD(H.d(a,"$iP"),b,u,q,p,H.d(t,"$iH"),H.E(s))}catch(o){if(H.ad(o) instanceof P.aD)throw o
else{this.b1(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b1(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aS(a)){this.b1(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.b1(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gay()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gay().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.au(a,J.lF(q),r.aX(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.aX(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aX(u,q)
r.it(u,q)}}if(!!J.S(a).$icm)this.da(a.content)},
$inI:1}
W.ix.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iE(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b1(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ad(r)
q=H.d(u,"$iB")
if(s){p=q.parentNode
if(p!=null)J.em(p,q)}else J.em(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iB")}},
$S:44}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.eh.prototype={}
P.ig.prototype={
es:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
d5:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.S(a)
if(!!t.$iah)return new Date(a.a)
if(!!t.$imk)throw H.c(P.hk("structured clone of RegExp"))
if(!!t.$ibG)return a
if(!!t.$iH){s=this.es(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.a_(0,new P.ii(u,this))
return u.a}if(!!t.$ia){s=this.es(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.jK(a,s)}throw H.c(P.hk("structured clone of other type"))},
jK:function(a,b){var u,t,s,r
u=J.bW(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.d5(u.k(a,r)))
return s}}
P.ii.prototype={
$2:function(a,b){this.a.a[a]=this.b.d5(b)},
$S:7}
P.iI.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.ih.prototype={}
P.eP.prototype={
gbn:function(){var u,t,s
u=this.b
t=H.ab(u,"T",0)
s=W.P
return new H.fg(new H.cy(u,H.k(new P.eQ(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.eR(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.gbn()
J.lC(u.b.$1(J.en(u.a,b)),c)},
h:function(a,b){J.jQ(this.b.a,b)},
gm:function(a){return J.aC(this.gbn().a)},
k:function(a,b){var u=this.gbn()
return u.b.$1(J.en(u.a,b))},
gU:function(a){var u=P.m2(this.gbn(),!1,W.P)
return new J.ar(u,u.length,0,[H.r(u,0)])},
$aT:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.eQ.prototype={
$1:function(a){return!!J.S(H.d(a,"$iB")).$iP},
$S:22}
P.eR.prototype={
$1:function(a){return H.i(H.d(a,"$iB"),"$iP")},
$S:53}
P.i5.prototype={
gbM:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
ge1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cL(b,"$iay",[P.af],"$aay")){u=this.a
t=J.a5(b)
if(u==t.gbJ(b)){s=this.b
if(s==t.gbN(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gbM(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.ge1(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.cR(u)
s=this.b
r=J.cR(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gL(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.x(s+this.d,q))
return P.mG(P.i3(P.i3(P.i3(P.i3(0,t),r),u),q))}}
P.ay.prototype={
gbJ:function(a){return this.a},
gbN:function(a){return this.b},
gbQ:function(a){return this.c},
gbI:function(a){return this.d}}
P.ci.prototype={$ici:1}
P.o.prototype={
gcB:function(a){return new P.eP(a,new W.am(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.av])
C.a.h(u,W.kC(null))
C.a.h(u,W.kE())
C.a.h(u,new W.ij())
c=new W.ef(new W.dq(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jM(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaK(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$io:1}
P.M.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
P.cU.prototype={$icU:1}
P.d4.prototype={$id4:1}
P.du.prototype={$idu:1}
P.bL.prototype={
dZ:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jA:function(a,b,c){return a.bindFramebuffer(b,c)},
jB:function(a,b,c){return a.blendFunc(b,c)},
e2:function(a,b,c,d){return a.bufferData(b,c,d)},
jE:function(a,b){return a.clear(b)},
jF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jG:function(a,b){return a.clearDepth(b)},
jI:function(a,b){return a.compileShader(b)},
jO:function(a,b){return a.createShader(b)},
jQ:function(a,b){return a.deleteProgram(b)},
jR:function(a,b){return a.deleteShader(b)},
jU:function(a,b){return a.depthFunc(b)},
jV:function(a,b){return a.disable(b)},
e4:function(a,b){return a.disableVertexAttribArray(b)},
jX:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cG:function(a,b){return a.enable(b)},
e6:function(a,b){return a.enableVertexAttribArray(b)},
f8:function(a,b,c){return a.getActiveAttrib(b,c)},
f9:function(a,b,c){return a.getActiveUniform(b,c)},
fa:function(a,b,c){return a.getAttribLocation(b,c)},
d9:function(a,b){return a.getParameter(b)},
fc:function(a,b){return a.getProgramInfoLog(b)},
bS:function(a,b,c){return a.getProgramParameter(b,c)},
fd:function(a,b){return a.getShaderInfoLog(b)},
fe:function(a,b,c){return a.getShaderParameter(b,c)},
ff:function(a,b,c){return a.getUniformLocation(b,c)},
kj:function(a,b){return a.linkProgram(b)},
fn:function(a,b,c){return a.shaderSource(b,c)},
S:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f5:function(a,b){return a.useProgram(b)},
kU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kV:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibL:1}
P.dz.prototype={$idz:1}
P.dP.prototype={$idP:1}
O.a_.prototype={
bX:function(a){this.shp(H.b([],[a]))
this.sdK(null)
this.sdH(null)
this.sdL(null)},
dc:function(a,b,c){var u=H.ab(this,"a_",0)
H.k(b,{func:1,ret:P.N,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdK(b)
this.sdH(a)
this.sdL(c)},
bj:function(a,b){return this.dc(a,null,b)},
i9:function(a){var u
H.h(a,"$in",[H.ab(this,"a_",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fE:function(a,b){var u
H.h(b,"$in",[H.ab(this,"a_",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ar(u,u.length,0,[H.r(u,0)])},
a8:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ab(this,"a_",0)
H.x(b,u)
u=[u]
if(this.i9(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fE(s,H.b([b],u))}},
shp:function(a){this.a=H.h(a,"$ia",[H.ab(this,"a_",0)],"$aa")},
sdK:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.n,H.ab(this,"a_",0)]]})},
sdH:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"a_",0)]]})},
sdL:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"a_",0)]]})},
$in:1}
O.cc.prototype={
gm:function(a){return this.a.length},
gD:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
fF:function(a){var u=this.b
if(u!=null)u.J(a)},
aL:function(){return this.fF(null)},
ga1:function(){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dl()},
eR:function(a){var u=this.a
if(a==null)C.a.h(u,V.dl())
else C.a.h(u,a)
this.aL()},
cX:function(){var u=this.a
if(u.length>0){u.pop()
this.aL()}},
sc5:function(a){this.a=H.h(a,"$ia",[V.aj],"$aa")}}
E.et.prototype={}
E.ai.prototype={
sai:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gD().N(0,this.geL())
t=this.c
if(t!=null)t.gD().h(0,this.geL())
s=new D.G("shape",u,this.c,this,[F.dA])
s.b=!0
this.an(s)}},
sbb:function(a){var u,t
if(!J.O(this.r,a)){u=this.r
if(u!=null)u.gD().N(0,this.geJ())
if(a!=null)a.gD().h(0,this.geJ())
this.r=a
t=new D.G("mover",u,a,this,[U.a6])
t.b=!0
this.an(t)}},
aA:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.O(t,this.x)){s=this.x
this.x=t
r=new D.G("matrix",s,t,this,[V.aj])
r.b=!0
this.an(r)}for(u=this.y.a,u=new J.ar(u,u.length,0,[H.r(u,0)]);u.F();)u.d.aA(a)},
aV:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1())
else C.a.h(u.a,t.u(0,u.ga1()))
u.aL()
a.eS(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kI(a,this)
for(u=this.y.a,u=new J.ar(u,u.length,0,[H.r(u,0)]);u.F();)u.d.aV(a)
a.eQ()
a.dx.cX()},
gD:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
an:function(a){var u=this.z
if(u!=null)u.J(a)},
a3:function(){return this.an(null)},
eM:function(a){H.d(a,"$iy")
this.e=null
this.an(a)},
ku:function(){return this.eM(null)},
eK:function(a){this.an(H.d(a,"$iy"))},
kt:function(){return this.eK(null)},
eI:function(a){this.an(H.d(a,"$iy"))},
kq:function(){return this.eI(null)},
kp:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ai],"$an")
for(u=b.length,t=this.geH(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bx()
o.saj(null)
o.sb_(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.saj(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
ks:function(a,b){var u,t
H.h(b,"$in",[E.ai],"$an")
for(u=b.gU(b),t=this.geH();u.F();)u.gM().gD().N(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfG:function(a,b){this.y=H.h(b,"$ia_",[E.ai],"$aa_")},
$ib4:1}
E.fG.prototype={
fA:function(a,b){var u,t
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
u=new O.cc()
t=[V.aj]
u.sc5(H.b([],t))
u.b=null
u.gD().h(0,new E.fH(this))
this.cy=u
u=new O.cc()
u.sc5(H.b([],t))
u.b=null
u.gD().h(0,new E.fI(this))
this.db=u
u=new O.cc()
u.sc5(H.b([],t))
u.b=null
u.gD().h(0,new E.fJ(this))
this.dx=u
this.siP(H.b([],[O.bN]))
u=this.dy;(u&&C.a).h(u,null)
this.siL(new H.aH([P.f,A.cj]))},
gkD:function(){var u=this.z
if(u==null){u=this.cy.ga1().u(0,this.db.ga1())
this.z=u}return u},
eS:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eQ:function(){var u=this.dy
if(u.length>1)u.pop()},
siP:function(a){this.dy=H.h(a,"$ia",[O.bN],"$aa")},
siL:function(a){this.fr=H.h(a,"$iH",[P.f,A.cj],"$aH")}}
E.fH.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fI.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fJ.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dL.prototype={
dh:function(a){H.d(a,"$iy")
this.eU()},
dg:function(){return this.dh(null)},
gkc:function(){var u,t,s
u=Date.now()
t=C.f.a5(P.k_(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ah(u,!1)
return s/t},
dO:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.A(u)
s=C.e.eu(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.e.eu(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ko(C.y,this.gkK())}},
eU:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.h2(this),{func:1,ret:-1,args:[P.af]})
C.O.hc(u)
C.O.iA(u,W.kS(t,P.af))}},
kH:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dO()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ah(r,!1)
s.y=P.k_(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aL()
r=s.db
C.a.sm(r.a,0)
r.aL()
r=s.dx
C.a.sm(r.a,0)
r.aL()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aV(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ad(q)
t=H.bX(q)
P.jJ("Error: "+H.j(u))
P.jJ("Stack: "+H.j(t))
throw H.c(u)}}}
E.h2.prototype={
$1:function(a){var u
H.nu(a)
u=this.a
if(u.ch){u.ch=!1
u.kH()}},
$S:31}
Z.dX.prototype={$inC:1}
Z.cV.prototype={
bq:function(a){var u,t,s
try{t=a.a
C.c.e6(t,this.e)
C.c.kU(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.hH.prototype={$inD:1}
Z.cW.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bq:function(a){var u,t
u=this.a
C.c.av(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bq(a)},
f1:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.e4(s,u[t].e)
C.c.av(s,this.a.a,null)},
aV:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.c.av(t,p,r.b)
C.c.jX(t,q.a,q.b,5123,0)
C.c.av(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.an(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shk:function(a){this.b=H.h(a,"$ia",[Z.bj],"$aa")},
$inM:1}
Z.bj.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bI(this.c)+"'")+"]"}}
Z.aV.prototype={
gdd:function(a){var u,t
u=this.a
t=(u&$.b9().a)!==0?3:0
if((u&$.b8().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=2
if((u&$.bb().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=4
if((u&$.c_().a)!==0)++t
return(u&$.b6().a)!==0?t+4:t},
jx:function(a){var u,t,s
u=$.b9()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cP()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0)if(s===a)return u
return $.lo()},
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
if((t&$.cO().a)!==0)C.a.h(u,"Clr3")
if((t&$.cP().a)!==0)C.a.h(u,"Clr4")
if((t&$.c_().a)!==0)C.a.h(u,"Weight")
if((t&$.b6().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.ew.prototype={}
D.bx.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.saj(H.b([],[u]))
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
return!0}if(!s)C.a.a_(t,new D.eM(u))
t=this.b
if(t!=null)C.a.a_(t,new D.eN(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kL:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
ag:function(){return this.kL(!0,!1)},
saj:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
sb_:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.eM.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eN.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.y.prototype={}
D.bC.prototype={}
D.bD.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.cX.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.db.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.f5.prototype={
kA:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kw:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
siq:function(a){this.d=H.h(a,"$ikk",[P.l],"$akk")}}
X.dg.prototype={}
X.fc.prototype={
aZ:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ah(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.a4(t.a+s*r,t.b+q*p)
p=this.a.gaT()
n=new X.b3(a,V.bm(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cW:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fh()
if(typeof u!=="number")return u.bR()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aZ(a,b))
return!0},
kB:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaT()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.cd(new V.R(q*p,o*n),t,s,new P.ah(r,!1),this)
r.b=!0
u.J(r)
return!0},
hZ:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ah(Date.now(),!1)
t=this.f
s=new X.dg(c,a,this.a.gaT(),b,u,this)
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
X.fp.prototype={
c2:function(a,b,c){var u,t,s
u=new P.ah(Date.now(),!1)
t=this.a.gaT()
s=new X.b3(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cW:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c2(a,b,!0))
return!0},
bd:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fh()
if(typeof u!=="number")return u.bR()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c2(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c2(a,b,!1))
return!0},
kC:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaT()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.cd(new V.R(r*q,p*o),t,b,new P.ah(s,!1),this)
s.b=!0
u.J(s)
return!0},
ge5:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
gbO:function(){var u=this.c
if(u==null){u=D.Q()
this.c=u}return u},
geF:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u}}
X.cd.prototype={}
X.fB.prototype={}
X.dN.prototype={}
X.h5.prototype={
aZ:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a4],"$aa")
u=new P.ah(Date.now(),!1)
t=a.length>0?a[0]:V.bm()
s=this.a.gaT()
r=new X.dN(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kz:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.b
if(u==null)return!1
u.J(this.aZ(a,!0))
return!0},
kx:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.c
if(u==null)return!1
u.J(this.aZ(a,!0))
return!0},
ky:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.d
if(u==null)return!1
u.J(this.aZ(a,!1))
return!0}}
X.dS.prototype={
gaT:function(){var u=this.a
return V.ki(0,0,C.q.ge3(u).c,C.q.ge3(u).d)},
dv:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.db(u,new X.au(t,a.altKey,a.shiftKey))},
aQ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
cn:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a4(t-r,s-q)},
b0:function(a){return new V.R(a.movementX,a.movementY)},
cg:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a4])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.e.ao(p.pageX)
C.e.ao(p.pageY)
n=u.left
C.e.ao(p.pageX)
C.a.h(t,new V.a4(o-n,C.e.ao(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.au(t,a.altKey,a.shiftKey))},
c6:function(a){var u,t,s,r,q,p
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
hT:function(a){this.f=!0},
hF:function(a){this.f=!1},
hN:function(a){H.d(a,"$ia9")
if(this.f&&this.c6(a))a.preventDefault()},
hX:function(a){var u
H.d(a,"$iaO")
if(!this.f)return
u=this.dv(a)
this.b.kA(u)},
hV:function(a){var u
H.d(a,"$iaO")
if(!this.f)return
u=this.dv(a)
this.b.kw(u)},
i0:function(a){var u,t,s,r
H.d(a,"$ia9")
u=this.a
u.focus()
this.f=!0
this.aQ(a)
if(this.x){t=this.aE(a)
s=this.b0(a)
if(this.d.cW(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aG(a)
if(this.c.cW(t,r))a.preventDefault()},
i4:function(a){var u,t,s
H.d(a,"$ia9")
this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()},
hR:function(a){var u,t,s
H.d(a,"$ia9")
if(!this.c6(a)){this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()}},
i2:function(a){var u,t,s
H.d(a,"$ia9")
this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bc(u,s))a.preventDefault()},
hP:function(a){var u,t,s
H.d(a,"$ia9")
if(!this.c6(a)){this.aQ(a)
u=this.aE(a)
if(this.x){t=this.b0(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bc(u,s))a.preventDefault()}},
i6:function(a){var u,t
H.d(a,"$iaW")
this.aQ(a)
u=new V.R((a&&C.N).gjS(a),C.N.gjT(a)).B(0,180)
if(this.x){if(this.d.kB(u))a.preventDefault()
return}if(this.r)return
t=this.aG(a)
if(this.c.kC(u,t))a.preventDefault()},
i8:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aG(this.y)
this.d.hZ(t,s,u)}},
io:function(a){var u
H.d(a,"$iaJ")
this.a.focus()
this.f=!0
this.cn(a)
u=this.cg(a)
if(this.e.kz(u))a.preventDefault()},
ij:function(a){var u
H.d(a,"$iaJ")
this.cn(a)
u=this.cg(a)
if(this.e.kx(u))a.preventDefault()},
il:function(a){var u
H.d(a,"$iaJ")
this.cn(a)
u=this.cg(a)
if(this.e.ky(u))a.preventDefault()},
shd:function(a){this.z=H.h(a,"$ia",[[P.cl,P.L]],"$aa")}}
D.bg.prototype={
gD:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
aC:function(a){var u
H.d(a,"$iy")
u=this.d
if(u!=null)u.J(a)},
fK:function(){return this.aC(null)},
$ia1:1,
$ib4:1}
D.a1.prototype={$ib4:1}
D.dd.prototype={
gD:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
aC:function(a){var u=this.Q
if(u!=null)u.J(a)},
dJ:function(a){var u
H.d(a,"$iy")
u=this.ch
if(u!=null)u.J(a)},
hY:function(){return this.dJ(null)},
ib:function(a){var u,t,s
H.h(a,"$in",[D.a1],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fI(s))return!1}return!0},
hz:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdI(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.d(b[p],"$ia1")
if(o instanceof D.bg)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bx()
n.saj(null)
n.sb_(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bC(a,b,this,[u])
u.b=!0
this.aC(u)},
ih:function(a,b){var u,t,s,r
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gdI();t.F();){r=t.gM()
C.a.N(this.e,r)
r.gD().N(0,s)}u=new D.bD(a,b,this,[u])
u.b=!0
this.aC(u)},
fI:function(a){var u=C.a.Z(this.e,a)
return u},
sha:function(a){this.e=H.h(a,"$ia",[D.bg],"$aa")},
sip:function(a){this.f=H.h(a,"$ia",[D.dt],"$aa")},
siN:function(a){this.r=H.h(a,"$ia",[D.dB],"$aa")},
siY:function(a){this.x=H.h(a,"$ia",[D.dI],"$aa")},
siZ:function(a){this.y=H.h(a,"$ia",[D.dJ],"$aa")},
sj_:function(a){this.z=H.h(a,"$ia",[D.dK],"$aa")},
$an:function(){return[D.a1]},
$aa_:function(){return[D.a1]}}
D.dt.prototype={$ia1:1,$ib4:1}
D.dB.prototype={$ia1:1,$ib4:1}
D.dI.prototype={$ia1:1,$ib4:1}
D.dJ.prototype={$ia1:1,$ib4:1}
D.dK.prototype={$ia1:1,$ib4:1}
V.W.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gd_())
t=C.e.n(this.b,b.gbT())
s=C.e.n(this.c,b.gcv())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.W(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gd_())
t=C.e.t(this.b,b.gbT())
s=C.e.t(this.c,b.gcv())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.W(u,t,s)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gd_())
t=C.e.n(this.b,b.gbT())
s=C.e.n(this.c,b.gcv())
r=C.e.n(this.d,b.gjw(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aE(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gd_())
t=C.e.t(this.b,b.gbT())
s=C.e.t(this.c,b.gcv())
r=C.e.t(this.d,b.gjw(b))
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
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.eK.prototype={}
V.dk.prototype={
ah:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.F().a
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
u=[P.p]
t=V.bV(H.b([this.a,this.d,this.r],u),3,0)
s=V.bV(H.b([this.b,this.e,this.x],u),3,0)
r=V.bV(H.b([this.c,this.f,this.y],u),3,0)
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
ah:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return u},
eD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.F().a)return V.dl()
a8=1/a7
a9=-r
b0=-d
return V.aQ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aQ(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
d4:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.C(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bh:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Y(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.F().a
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
ev:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.p]
t=V.bV(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bV(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bV(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bV(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
P:function(){return this.ev("",3,0)},
G:function(a){return this.ev(a,3,0)}}
V.a4.prototype={
n:function(a,b){return new V.a4(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.Y.prototype={
n:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aR.prototype={
n:function(a,b){return new V.aR(C.e.n(this.a,b.gkX(b)),C.e.n(this.b,b.gkY(b)),C.e.n(this.c,b.gkZ(b)),C.e.n(this.d,b.gkW()))},
t:function(a,b){return new V.aR(C.e.t(this.a,b.gkX(b)),C.e.t(this.b,b.gkY(b)),C.e.t(this.c,b.gkZ(b)),C.e.t(this.d,b.gkW()))},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.dx.prototype={
ga9:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dx))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.R.prototype={
cR:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.A(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gjY(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gjZ(b)
if(typeof u!=="number")return u.n()
return new V.R(t,C.e.n(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gjY(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gjZ(b)
if(typeof u!=="number")return u.t()
return new V.R(t,C.e.t(u,s))},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.R(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.F().a){u=$.kv
if(u==null){u=new V.R(0,0)
$.kv=u}return u}u=this.a
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
s=$.F()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.C.prototype={
cR:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cS:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.C(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.C(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.F().a)return V.cx()
return new V.C(this.a/b,this.b/b,this.c/b)},
eE:function(){var u=$.F().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.ex.prototype={
bZ:function(a){var u=V.j8(a,this.c,this.b)
return u},
gD:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sd6:function(a,b){},
scT:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.F().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bZ(t)}u=new D.G("maximumLocation",u,this.b,this,[P.p])
u.b=!0
this.K(u)}},
scV:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bZ(t)}u=new D.G("minimumLocation",u,this.c,this,[P.p])
u.b=!0
this.K(u)}},
sa2:function(a,b){var u
b=this.bZ(b)
u=this.d
if(!(Math.abs(u-b)<$.F().a)){this.d=b
u=new D.G("location",u,b,this,[P.p])
u.b=!0
this.K(u)}},
scU:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.F().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.G("maximumVelocity",u,a,this,[P.p])
u.b=!0
this.K(u)}},
sW:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.F().a)){this.f=a
u=new D.G("velocity",u,a,this,[P.p])
u.b=!0
this.K(u)}},
scE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.F().a)){this.x=a
u=new D.G("dampening",u,a,this,[P.p])
u.b=!0
this.K(u)}},
aA:function(a){var u,t,s,r,q
u=this.f
t=$.F().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.F().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sW(s)}}}
U.cZ.prototype={
gD:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
aB:function(a,b){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.c9.prototype={
gD:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.e
if(u!=null)u.J(a)},
a6:function(){return this.K(null)},
hx:function(a,b){var u,t,s,r,q,p,o,n
u=U.a6
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaM(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gD()
n.toString
H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bC(a,b,this,[u])
u.b=!0
this.K(u)},
ie:function(a,b){var u,t,s
u=U.a6
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gaM();t.F();)t.gM().gD().N(0,s)
u=new D.bD(a,b,this,[u])
u.b=!0
this.K(u)},
aB:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.X()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ar(u,u.length,0,[H.r(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.aB(a,b)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.dl():s
u=this.e
if(u!=null)u.ag()}return this.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c9))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.a6]},
$aa_:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dy.prototype={
gD:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sf7:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.F().a)){this.a=a
u=new D.G("yaw",u,a,this,[P.p])
u.b=!0
this.K(u)}},
seP:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.F().a)){this.b=a
u=new D.G("pitch",u,a,this,[P.p])
u.b=!0
this.K(u)}},
seV:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
u=new D.G("roll",u,a,this,[P.p])
u.b=!0
this.K(u)}},
aB:function(a,b){var u,t
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sf7(this.a+this.d*a.y)
this.seP(this.b+this.e*a.y)
this.seV(this.c+this.f*a.y)
this.x=V.k9(this.c).u(0,V.k8(this.b)).u(0,V.k7(this.a))
u=this.y
if(u!=null)u.ag()}return this.x},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
u=this.a
t=b.a
s=$.F().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}}
U.dT.prototype={
gD:function(){var u=this.cy
if(u==null){u=D.Q()
this.cy=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.cy
if(u!=null)u.J(a)},
a6:function(){return this.K(null)},
b3:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge5().h(0,this.gc7())
this.a.c.geF().h(0,this.gc9())
this.a.c.gbO().h(0,this.gcb())
return!0},
c8:function(a){H.d(a,"$iy")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib3")
if(!this.y)return
if(this.x){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.t(0,a.y)
u=new V.R(t.a,t.b).u(0,2).B(0,u.ga9())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.A(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.R(s.a,s.b).u(0,2).B(0,u.ga9())
s=this.b
q=r.a
if(typeof q!=="number")return q.T()
p=this.e
if(typeof p!=="number")return H.A(p)
o=this.z
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
this.b.sW(0)
t=t.t(0,a.z)
this.Q=new V.R(t.a,t.b).u(0,2).B(0,u.ga9())}this.a6()},
cc:function(a){var u,t,s
H.d(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.A(s)
u.sW(t*10*s)
this.a6()}},
aB:function(a,b){var u,t,s
u=this.ch
t=a.e
if(typeof u!=="number")return u.X()
if(u<t){this.ch=t
s=a.y
this.b.aA(s)
this.cx=V.k9(this.b.d)}return this.cx},
$ia6:1}
U.dU.prototype={
gD:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
K:function(a){var u
H.d(a,"$iy")
u=this.fx
if(u!=null)u.J(a)},
a6:function(){return this.K(null)},
b3:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ge5().h(0,this.gc7())
this.a.c.geF().h(0,this.gc9())
this.a.c.gbO().h(0,this.gcb())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.ghq())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.ghs())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.giV())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.giT())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.giR())
return!0},
as:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.R(u,t)},
c8:function(a){a=H.i(H.d(a,"$iy"),"$ib3")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib3")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.R(t.a,t.b).u(0,2).B(0,u.ga9()))
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
s=t.t(0,a.y)
r=this.as(new V.R(s.a,s.b).u(0,2).B(0,u.ga9()))
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
t=t.t(0,a.z)
this.dx=this.as(new V.R(t.a,t.b).u(0,2).B(0,u.ga9()))}this.a6()},
cc:function(a){var u,t,s
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
this.a6()}},
hr:function(a){if(H.i(H.d(a,"$iy"),"$idg").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
ht:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib3")
if(!J.O(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.R(s.a,s.b).u(0,2).B(0,u.ga9()))
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
t=t.t(0,a.z)
this.dx=this.as(new V.R(t.a,t.b).u(0,2).B(0,u.ga9()))
this.a6()},
iW:function(a){H.d(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iU:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$idN")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.R(t.a,t.b).u(0,2).B(0,u.ga9()))
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
s=t.t(0,a.y)
r=this.as(new V.R(s.a,s.b).u(0,2).B(0,u.ga9()))
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
t=t.t(0,a.z)
this.dx=this.as(new V.R(t.a,t.b).u(0,2).B(0,u.ga9()))}this.a6()},
iS:function(a){var u,t,s
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
this.a6()}},
aB:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.X()
if(u<t){this.dy=t
s=a.y
this.c.aA(s)
this.b.aA(s)
this.fr=V.k7(this.b.d).u(0,V.k8(this.c.d))}return this.fr},
$ia6:1}
U.dV.prototype={
gD:function(){var u=this.r
if(u==null){u=D.Q()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.J(a)},
b3:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.Q()
u.e=t
u=t}else u=t
t=this.ghu()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.Q()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hv:function(a){var u,t,s,r
H.d(a,"$iy")
if(!J.O(this.b,this.a.b.c))return
H.i(a,"$icd")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.G("zoom",u,r,this,[P.p])
u.b=!0
this.K(u)}},
aB:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.ka(s,s,s,1)}return this.f},
$ia6:1}
M.d2.prototype={
aD:function(a){var u
H.d(a,"$iy")
u=this.x
if(u!=null)u.J(a)},
fL:function(){return this.aD(null)},
hJ:function(a,b){var u,t,s,r,q,p,o,n
u=E.ai
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bx()
n.saj(null)
n.sb_(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bC(a,b,this,[u])
u.b=!0
this.aD(u)},
hL:function(a,b){var u,t,s
u=E.ai
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gar();t.F();)t.gM().gD().N(0,s)
u=new D.bD(a,b,this,[u])
u.b=!0
this.aD(u)},
seX:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gD().N(0,this.gar())
t=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gar())
u=new D.G("technique",t,this.c,this,[O.bN])
u.b=!0
this.aD(u)}},
gD:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aV:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eS(this.c)
u=this.b
u.toString
t=a1.a
C.c.jA(t,36160,null)
C.c.cG(t,2884)
C.c.cG(t,2929)
C.c.jU(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.A(s)
o=C.e.ao(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.e.ao(p*r)
p=C.e.ao(q.c*s)
a1.c=p
q=C.e.ao(q.d*r)
a1.d=q
C.c.kV(t,o,n,p,q)
C.c.jG(t,u.c)
u=u.a
C.c.jF(t,u.a,u.b,u.c,u.d)
C.c.jE(t,16640)
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
a1.cy.eR(i)
t=$.ke
if(t==null){t=V.m6()
q=$.ky
if(q==null){q=new V.C(0,1,0)
$.ky=q}p=$.kw
if(p==null){p=new V.C(0,0,-1)
$.kw=p}h=p.B(0,Math.sqrt(p.H(p)))
q=q.aH(h)
g=q.B(0,Math.sqrt(q.H(q)))
f=h.aH(g)
e=new V.C(t.a,t.b,t.c)
d=g.T(0).H(e)
c=f.T(0).H(e)
b=h.T(0).H(e)
t=V.aQ(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ke=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aB(a1,u)
if(a0!=null)a=a0.u(0,a)}a1.db.eR(a)
u=this.c
if(u!=null)u.aA(a1)
for(u=this.d.a,u=new J.ar(u,u.length,0,[H.r(u,0)]);u.F();)u.d.aA(a1)
for(u=this.d.a,u=new J.ar(u,u.length,0,[H.r(u,0)]);u.F();)u.d.aV(a1)
this.a.toString
a1.cy.cX()
a1.db.cX()
this.b.toString
a1.eQ()},
sh4:function(a,b){this.d=H.h(b,"$ia_",[E.ai],"$aa_")},
$inJ:1}
A.cT.prototype={}
A.eq.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.c.e6(r.a,r.c)}},
jW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.c.e4(r.a,r.c)}}}
A.fj.prototype={
fz:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
this.e=this.dw(n,35633)
this.f=this.dw(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.c.dZ(s,q,this.e)
C.c.dZ(s,this.r,this.f)
C.c.kj(s,this.r)
if(!H.jB(C.c.bS(s,this.r,35714))){h=C.c.fc(s,this.r)
C.c.jQ(s,this.r)
H.q(P.u("Failed to link shader: "+H.j(h)))}this.iI()
this.iK()
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
if(a7.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icq")
if(a7.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iaw")
if(a7.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iaw")
this.sh0(H.b([],[A.aw]))
t=a7.ax
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
this.ax=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.i:this.y2=H.i(this.y.p(0,"ambientTxt"),"$ial")
this.ax=H.i(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.d){this.am=H.i(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.bt=H.i(this.y.p(0,"diffuseTxt"),"$iak")
this.bu=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.i:this.e7=H.i(this.y.p(0,"diffuseTxt"),"$ial")
this.bu=H.i(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.d){this.bv=H.i(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.e8=H.i(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bw=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.i:this.e9=H.i(this.y.p(0,"invDiffuseTxt"),"$ial")
this.bw=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.d){this.bz=H.i(this.y.p(0,"shininess"),"$iX")
this.bx=H.i(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ea=H.i(this.y.p(0,"specularTxt"),"$iak")
this.by=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.i:this.eb=H.i(this.y.p(0,"specularTxt"),"$ial")
this.by=H.i(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.ec=H.i(this.y.p(0,"bumpTxt"),"$iak")
this.bA=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.i:this.ed=H.i(this.y.p(0,"bumpTxt"),"$ial")
this.bA=H.i(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.ee=H.i(this.y.p(0,"envSampler"),"$ial")
this.ef=H.i(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.d){this.bB=H.i(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.eg=H.i(this.y.p(0,"reflectTxt"),"$iak")
this.bC=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.i:this.eh=H.i(this.y.p(0,"reflectTxt"),"$ial")
this.bC=H.i(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.d){this.bD=H.i(this.y.p(0,"refraction"),"$iX")
this.bE=H.i(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.ei=H.i(this.y.p(0,"refractTxt"),"$iak")
this.bF=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.i:this.ej=H.i(this.y.p(0,"refractTxt"),"$ial")
this.bF=H.i(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.d){this.bG=H.i(this.y.p(0,"alpha"),"$iX")
switch(t){case C.d:break
case C.j:break
case C.h:this.ek=H.i(this.y.p(0,"alphaTxt"),"$iak")
this.bH=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.i:this.el=H.i(this.y.p(0,"alphaTxt"),"$ial")
this.bH=H.i(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sfM(H.b([],[A.cp]))
this.sfN(H.b([],[A.cr]))
this.sfO(H.b([],[A.cs]))
this.sfP(H.b([],[A.ct]))
this.sfQ(H.b([],[A.cu]))
this.sfR(H.b([],[A.cv]))
if(a7.k2){t=a7.z
if(t>0){this.em=H.d(this.y.p(0,"dirLightCount"),"$iJ")
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
s=this.cH;(s&&C.a).h(s,new A.cp(g,f,e))}}t=a7.Q
if(t>0){this.en=H.d(this.y.p(0,"pntLightCount"),"$iJ")
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
s=this.cI;(s&&C.a).h(s,new A.cr(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eo=H.d(this.y.p(0,"spotLightCount"),"$iJ")
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
s=this.cJ;(s&&C.a).h(s,new A.cs(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ep=H.d(this.y.p(0,"txtDirLightCount"),"$iJ")
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
s=this.cK;(s&&C.a).h(s,new A.ct(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eq=H.d(this.y.p(0,"txtPntLightCount"),"$iJ")
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
H.i(d,"$icq")
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
s=this.cL;(s&&C.a).h(s,new A.cu(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.er=H.d(this.y.p(0,"txtSpotLightCount"),"$iJ")
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
s=this.cM;(s&&C.a).h(s,new A.cv(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){C.c.V(b.a,b.d,1)},
ac:function(a,b,c){C.c.V(b.a,b.d,1)},
sh0:function(a){this.r1=H.h(a,"$ia",[A.aw],"$aa")},
sfM:function(a){this.cH=H.h(a,"$ia",[A.cp],"$aa")},
sfN:function(a){this.cI=H.h(a,"$ia",[A.cr],"$aa")},
sfO:function(a){this.cJ=H.h(a,"$ia",[A.cs],"$aa")},
sfP:function(a){this.cK=H.h(a,"$ia",[A.ct],"$aa")},
sfQ:function(a){this.cL=H.h(a,"$ia",[A.cu],"$aa")},
sfR:function(a){this.cM=H.h(a,"$ia",[A.cv],"$aa")}}
A.fm.prototype={
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
aF:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.b.aq(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j7:function(a){var u,t
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
j2:function(a){var u,t
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
j5:function(a){var u,t
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
j8:function(a){var u,t
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
jg:function(a){var u,t
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
jf:function(a){var u,t
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
i:function(a){return this.am}}
A.cp.prototype={}
A.ct.prototype={}
A.cr.prototype={}
A.cu.prototype={}
A.cs.prototype={}
A.cv.prototype={}
A.cj.prototype={
fC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dw:function(a,b){var u,t,s
u=this.a
t=C.c.jO(u,b)
C.c.fn(u,t,a)
C.c.jI(u,t)
if(!H.jB(C.c.fe(u,t,35713))){s=C.c.fd(u,t)
C.c.jR(u,t)
throw H.c(P.u("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
iI:function(){var u,t,s,r,q,p
u=H.b([],[A.cT])
t=this.a
s=H.ac(C.c.bS(t,this.r,35721))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.c.f8(t,this.r,r)
p=C.c.fa(t,this.r,q.name)
C.a.h(u,new A.cT(t,q.name,p))}this.x=new A.eq(u)},
iK:function(){var u,t,s,r,q,p
u=H.b([],[A.dO])
t=this.a
s=H.ac(C.c.bS(t,this.r,35718))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.c.f9(t,this.r,r)
p=C.c.ff(t,this.r,q.name)
C.a.h(u,this.jP(q.type,q.size,q.name,p))}this.y=new A.hh(u)},
aO:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jp(u,t,b,a,c)},
h7:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jp(u,t,b,a,c)},
h8:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.al(u,t,b,c)
else return A.jp(u,t,b,a,c)},
bp:function(a,b){return new P.e0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jP:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.hc(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.hf(this.a,this.r,c,d)
case 35667:return new A.hd(this.a,this.r,c,d)
case 35668:return new A.he(this.a,this.r,c,d)
case 35669:return new A.hg(this.a,this.r,c,d)
case 35674:return new A.hi(this.a,this.r,c,d)
case 35675:return new A.cq(this.a,this.r,c,d)
case 35676:return new A.aw(this.a,this.r,c,d)
case 35678:return this.h7(b,c,d)
case 35680:return this.h8(b,c,d)
case 35670:throw H.c(this.bp("BOOL",c))
case 35671:throw H.c(this.bp("BOOL_VEC2",c))
case 35672:throw H.c(this.bp("BOOL_VEC3",c))
case 35673:throw H.c(this.bp("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bw.prototype={
i:function(a){return this.b}}
A.dO.prototype={}
A.hh.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
kb:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.kb("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.hd.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.he.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hg.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hb.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sj0:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hc.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hf.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hi.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cq.prototype={
ap:function(a){var u=new Float32Array(H.bQ(H.h(a,"$ia",[P.p],"$aa")))
C.c.f2(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aw.prototype={
ap:function(a){var u=new Float32Array(H.bQ(H.h(a,"$ia",[P.p],"$aa")))
C.c.f3(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.al.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iz.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cS(u.b,b).cS(u.d.cS(u.c,b),c)
a.sa2(0,new V.Y(t.a,t.b,t.c))
a.seY(t.B(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.se_(new V.aR(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
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
a.sa2(0,new V.Y(t,p,r))
p=new V.C(t,p,r)
a.seY(p.B(0,Math.sqrt(p.H(p))))
a.se_(new V.aR(1-c,2+c,-1,-1))},
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
s=new V.C(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.H(s))).u(0,this.b+u)
a.sa2(0,new V.Y(u.a,u.b,u.c))},
$S:8}
F.j6.prototype={
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)},
$S:18}
F.iU.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Y(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.iK.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jP(t.$1(u),s)
s=J.lu(J.jP(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.C(s.a,s.b,s.c)
q=s.B(0,Math.sqrt(s.H(s)))
t=$.kx
if(t==null){t=new V.C(1,0,0)
$.kx=t
p=t}else p=t
t=q.aH(!J.O(q,p)?V.kA():p)
o=t.B(0,Math.sqrt(t.H(t)))
t=o.aH(q)
p=t.B(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.u(0,t*s)
s=o.u(0,m*s)
a.sa2(0,J.lt(r,new V.Y(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a2.prototype={
b5:function(){if(!this.gb6()){C.a.N(this.a.a.d.b,this)
this.a.a.a3()}this.cj()
this.ck()
this.iw()},
co:function(a){this.a=a
C.a.h(a.d.b,this)},
cp:function(a){this.b=a
C.a.h(a.d.c,this)},
iH:function(a){this.c=a
C.a.h(a.d.d,this)},
cj:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
ck:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
iw:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
h_:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cx()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eE())return
return q.B(0,Math.sqrt(q.H(q)))},
h3:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.C(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.H(u)))
u=r.t(0,t)
u=new V.C(u.a,u.b,u.c)
u=q.aH(u.B(0,Math.sqrt(u.H(u))))
return u.B(0,Math.sqrt(u.H(u)))},
cA:function(){if(this.d!=null)return!0
var u=this.h_()
if(u==null){u=this.h3()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fZ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cx()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eE())return
return q.B(0,Math.sqrt(q.H(q)))},
h2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.F().a){u=m.t(0,p)
u=new V.C(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.T(0)}else{g=(u-l.b)/i
u=m.t(0,p).u(0,g).n(0,p).t(0,s)
u=new V.C(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.T(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.H(u)))
u=f.aH(h)
u=u.B(0,Math.sqrt(u.H(u))).aH(f)
h=u.B(0,Math.sqrt(u.H(u)))}return h},
cw:function(){if(this.e!=null)return!0
var u=this.fZ()
if(u==null){u=this.h2()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjH:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t
if(this.gb6())return a+"disposed"
u=a+C.b.af(J.an(this.a.e),0)+", "+C.b.af(J.an(this.b.e),0)+", "+C.b.af(J.an(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.eO.prototype={}
F.fU.prototype={
b9:function(a,b,c){var u,t
u=b.a
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
if(u==t.e){u=b.c
u.a.a.C()
u=u.e
t=c.c
t.a.a.C()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.c
t.a.a.C()
if(u==t.e){u=b.c
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.C()
u=u.e
t=c.c
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
if(u==t.e){u=b.c
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b2.prototype={
b5:function(){if(!this.gb6()){C.a.N(this.a.a.c.b,this)
this.a.a.a3()}this.cj()
this.ck()},
co:function(a){this.a=a
C.a.h(a.c.b,this)},
cp:function(a){this.b=a
C.a.h(a.c.c,this)},
cj:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
ck:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gb6())return a+"disposed"
return a+C.b.af(J.an(this.a.e),0)+", "+C.b.af(J.an(this.b.e),0)},
P:function(){return this.G("")}}
F.f6.prototype={}
F.ha.prototype={
b9:function(a,b,c){var u,t
u=b.a
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
return u==t.e}else{u=b.a
u.a.a.C()
u=u.e
t=c.b
t.a.a.C()
if(u==t.e){u=b.b
u.a.a.C()
u=u.e
t=c.a
t.a.a.C()
return u==t.e}else return!1}}}
F.bl.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.af(J.an(u.e),0)},
P:function(){return this.G("")}}
F.dA.prototype={
gD:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
ba:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.C()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.jJ())}this.a.C()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bl()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lY(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.C()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.C()
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
F.c7(k,j,h)}u=this.e
if(u!=null)u.ag()},
aw:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aw()||!1
if(!this.a.aw())t=!1
u=this.e
if(u!=null)u.ag()
return t},
km:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.aa];t.length!==0;){s=C.a.gk7(t)
C.a.kF(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.b9(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.ba(r)}}this.a.C()
this.c.d0()
this.d.d0()
this.b.kG()
this.c.d1(new F.ha())
this.d.d1(new F.fU())
u=this.e
if(u!=null)u.ag()},
jt:function(a){this.km(new F.hB(),new F.fw())},
cq:function(){return this.jt(null)},
cN:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cN()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.e(u,t)
s=u[t]
u=s.r
if(u!=null)s.seG(new V.C(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.C(r,q,u).B(0,Math.sqrt(r*r+q*q+u*u))
if(!J.O(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.J(null)}}}}u=this.e
if(u!=null)u.ag()},
jC:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b9()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b8().a)!==0)++r
if((s&$.b7().a)!==0)++r
if((s&$.ba().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.cO().a)!==0)++r
if((s&$.cP().a)!==0)++r
if((s&$.c_().a)!==0)++r
if((s&$.b6().a)!==0)++r
q=a1.gdd(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.p
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cV])
for(m=0,l=0;l<r;++l){k=a1.jx(l)
j=k.gdd(k)
C.a.q(n,l,new Z.cV(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kk(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.c.av(t,34962,e)
C.c.e2(t,34962,new Float32Array(H.bQ(o)),35044)
C.c.av(t,34962,null)
d=new Z.cW(new Z.dX(34962,e),n,a1)
d.shk(H.b([],[Z.bj]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.C()
C.a.h(c,b.e)}a=Z.js(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bj(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.C()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.C()
C.a.h(c,b.e)}a=Z.js(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bj(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.C()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.C()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.C()
C.a.h(c,b.e)}a=Z.js(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bj(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
an:function(a){var u=this.e
if(u!=null)u.J(a)},
a3:function(){return this.an(null)},
$inK:1}
F.fN.prototype={
jp:function(a){var u,t,s,r,q,p,o
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
C.a.h(u,F.c7(s,p,o))}}return u},
jq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
gm:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.b9(0,p,n)){p.b5()
break}}}}},
d0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjH(s)
if(t)s.b5()}},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cA())s=!1
return s},
cz:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cw())s=!1
return s},
cN:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.C(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.C(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
she:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")}}
F.fO.prototype={
gm:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.b9(0,p,n)){p.b5()
break}}}}},
d0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
P:function(){return this.G("")},
shm:function(a){this.b=H.h(a,"$ia",[F.b2],"$aa")}}
F.fP.prototype={
gm:function(a){return this.b.length},
kG:function(){var u,t,s
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
scf:function(a){this.b=H.h(a,"$ia",[F.bl],"$aa")}}
F.aa.prototype={
cD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.dW(this.cx,s,p,u,t,r,q,a,o)},
jJ:function(){return this.cD(null)},
sa2:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seG:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.H(a)))
if(!J.O(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
seY:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
se_:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
kk:function(a){var u,t
if(a.w(0,$.b9())){u=this.f
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b8())){u=this.r
t=[P.p]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b7())){u=this.x
t=[P.p]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.ba())){u=this.y
t=[P.p]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.w(0,$.bb())){u=this.z
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.cO())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.cP())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.c_()))return H.b([this.ch],[P.p])
else if(a.w(0,$.b6())){u=this.cx
t=[P.p]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.p])},
cA:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cx()
this.d.a_(0,new F.hG(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ag()}return!0},
cw:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cx()
this.d.a_(0,new F.hF(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ag()}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.b.af(J.an(this.e),0))
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
C:function(){var u,t,s,r
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
js:function(a,b,c,d,e,f,g,h,i){var u=F.dW(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jr:function(a,b,c,d,e,f){return this.js(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cA()
return!0},
cz:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cw()
return!0},
jD:function(){var u,t,s,r,q,p,o,n
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
this.C()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
sj1:function(a){this.c=H.h(a,"$ia",[F.aa],"$aa")}}
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
shf:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")},
shg:function(a){this.c=H.h(a,"$ia",[F.a2],"$aa")},
shh:function(a){this.d=H.h(a,"$ia",[F.a2],"$aa")}}
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
shn:function(a){this.b=H.h(a,"$ia",[F.b2],"$aa")},
sho:function(a){this.c=H.h(a,"$ia",[F.b2],"$aa")}}
F.hC.prototype={}
F.hB.prototype={
b9:function(a,b,c){return J.O(b.f,c.f)}}
F.hD.prototype={}
F.fw.prototype={
ba:function(a){var u,t,s,r
H.h(a,"$ia",[F.aa],"$aa")
u=V.cx()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.C(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.H(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)a[s].seG(u)
return}}
F.hE.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
scf:function(a){this.b=H.h(a,"$ia",[F.bl],"$aa")}}
O.di.prototype={
gD:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
ab:function(a){var u
H.d(a,"$iy")
u=this.dy
if(u!=null)u.J(a)},
hH:function(){return this.ab(null)},
dN:function(a){H.d(a,"$iy")
this.a=null
this.ab(a)},
iC:function(){return this.dN(null)},
hB:function(a,b){var u=V.aj
u=new D.bC(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.ab(u)},
hD:function(a,b){var u=V.aj
u=new D.bD(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.ab(u)},
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
a7=new Z.aV(a7.a|b.a)}return new A.fm(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
Y:function(a,b){H.h(a,"$ia",[T.dH],"$aa")},
aA:function(a){var u,t,s,r
for(u=this.dx.a,u=new J.ar(u,u.length,0,[H.r(u,0)]);u.F();){t=u.d
t.toString
s=$.hv
if(s==null){s=new V.C(0,0,1)
$.hv=s}t.a=s
s=t.b
if(s!=null){r=s.aB(a,t)
if(r!=null)t.a=r.d4(t.a)}}},
kI:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dt()
t=a4.fr.k(0,u.am)
if(t==null){t=A.m4(u,a4.a)
s=t.b
if(s.length===0)H.q(P.u("May not cache a shader with no name."))
if(a4.fr.br(s))H.q(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bt
u=a5.e
if(!(u instanceof Z.cW)){a5.e=null
u=null}if(u==null||!u.d.w(0,q)){u=r.r1
if(u)a5.d.aw()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cz()
o.a.cz()
o=o.e
if(o!=null)o.ag()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jD()
n=n.e
if(n!=null)n.ag()}l=a5.d.jC(new Z.hH(a4.a),q)
l.aU($.b9()).e=this.a.Q.c
if(u)l.aU($.b8()).e=this.a.cx.c
if(p)l.aU($.b7()).e=this.a.ch.c
if(r.rx)l.aU($.ba()).e=this.a.cy.c
if(o)l.aU($.bb()).e=this.a.db.c
if(r.x1)l.aU($.b6()).e=this.a.dx.c
a5.e=l}u=T.dH
k=H.b([],[u])
p=this.a
o=a4.a
C.c.f5(o,p.r)
p.x.k_()
if(r.fx){p=this.a
n=a4.dx.ga1()
p=p.dy
p.toString
p.ap(n.ah(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga1().u(0,a4.dx.ga1())
a4.cx=n}p=p.fr
p.toString
p.ap(n.ah(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkD().u(0,a4.dx.ga1())
a4.ch=n}p=p.fy
p.toString
p.ap(n.ah(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ap(C.r.ah(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ap(C.r.ah(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ap(C.r.ah(n,!0))}if(r.ax>0){j=this.e.a.length
p=this.a.k4
C.c.V(p.a,p.d,j)
for(p=[P.p],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.d(m,"$iaj")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.bQ(H.h(m.ah(0,!0),"$ia",p,"$aa")))
C.c.f3(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
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
p.ak(p.rx,p.x1,n)
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
p.ac(p.ry,p.x1,n)
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
p.ak(p.y1,p.ax,n)
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
p.ac(p.y2,p.ax,n)
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
p=p.am
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.x.d)
p=this.a
n=this.x.d
p.ak(p.bt,p.bu,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.x.e)
p=this.a
n=this.x.e
p.ac(p.e7,p.bu,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bv
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.y.d)
p=this.a
n=this.y.d
p.ak(p.e8,p.bw,n)
n=this.a
p=this.y.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.y.e)
p=this.a
n=this.y.e
p.ac(p.e9,p.bw,n)
n=this.a
p=this.y.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bx
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bz
C.c.S(n.a,n.d,g)
break
case C.h:this.Y(k,this.z.d)
p=this.a
n=this.z.d
p.ak(p.ea,p.by,n)
n=this.a
p=this.z.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bz
C.c.S(p.a,p.d,g)
break
case C.i:this.Y(k,this.z.e)
p=this.a
n=this.z.e
p.ac(p.eb,p.by,n)
n=this.a
p=this.z.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bz
C.c.S(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.em
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cH
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.d4(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.c.A(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.c.A(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.en
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cI
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gbe(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.bh(c.gbe(c))
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gal(c)
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gcr()
g=b.e
C.c.S(g.a,g.d,m)
m=c.gcs()
g=b.f
C.c.S(g.a,g.d,m)
m=c.gct()
g=b.r
C.c.S(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.eo
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cJ
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gbe(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gcF(c).l4()
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.bh(c.gbe(c))
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gal(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gl2()
g=b.f
C.c.S(g.a,g.d,m)
m=c.gl1()
g=b.r
C.c.S(g.a,g.d,m)
m=c.gcr()
g=b.x
C.c.S(g.a,g.d,m)
m=c.gcs()
g=b.y
C.c.S(g.a,g.d,m)
m=c.gct()
g=b.z
C.c.S(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ep
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
g=this.a.cK
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gbf()
H.h(k,"$ia",m,"$aa")
if(!C.a.Z(k,g)){g.sb7(0,k.length)
C.a.h(k,g)}g=c.gcF(c)
a=b.d
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbO()
a=b.b
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbM(c)
a=b.c
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=f.d4(c.gcF(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.c.A(a0.a,a0.d,a,g,a1)
a1=c.gal(c)
g=b.f
C.c.A(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbf()
g=a1.gb8(a1)
if(!g){g=b.x
C.c.V(g.a,g.d,1)}else{g=b.r
a=a1.gb8(a1)
a0=g.a
g=g.d
if(!a)C.c.V(a0,g,0)
else C.c.V(a0,g,a1.gb7(a1))
g=b.x
C.c.V(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eq
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.y,n=p.length,m=[P.p],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
a=this.a.cL
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gbf()
H.h(k,"$ia",g,"$aa")
if(!C.a.Z(k,a)){a.sb7(0,k.length)
C.a.h(k,a)}a2=f.u(0,c.ga1())
a=c.ga1()
a0=$.cg
if(a0==null){a0=new V.Y(0,0,0)
$.cg=a0}a0=a.bh(a0)
a=b.b
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cg
if(a==null){a=new V.Y(0,0,0)
$.cg=a}a=a2.bh(a)
a0=b.c
C.c.A(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eD()
a0=b.d
h=new Float32Array(H.bQ(H.h(new V.dk(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ah(0,!0),"$ia",m,"$aa")))
C.c.f2(a0.a,a0.d,!1,h)
a0=c.gal(c)
a=b.e
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbf()
a=a0.gb8(a0)
if(!a){a=b.r
C.c.V(a.a,a.d,1)}else{a=b.f
a1=a0.gb8(a0)
a3=a.a
a=a.d
if(!a1)C.c.V(a3,a,0)
else C.c.V(a3,a,a0.gb7(a0))
a=b.r
C.c.V(a.a,a.d,0)}a=c.gcr()
a0=b.x
C.c.S(a0.a,a0.d,a)
a=c.gcs()
a0=b.y
C.c.S(a0.a,a0.d,a)
a=c.gct()
a0=b.z
C.c.S(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.er
C.c.V(p.a,p.d,j)
f=a4.db.ga1()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cM
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gbf()
H.h(k,"$ia",u,"$aa")
if(!C.a.Z(k,m)){m.sb7(0,k.length)
C.a.h(k,m)}m=c.gbe(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gcF(c)
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbO()
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbM(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.bh(c.gbe(c))
g=b.f
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbf()
g=m.gb8(m)
if(!g){m=b.x
C.c.V(m.a,m.d,1)}else{g=b.r
a=m.gb8(m)
a0=g.a
g=g.d
if(!a)C.c.V(a0,g,0)
else C.c.V(a0,g,m.gb7(m))
m=b.x
C.c.V(m.a,m.d,0)}m=c.gal(c)
g=b.y
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gl5()
g=b.z
C.c.S(g.a,g.d,m)
m=c.gl6()
g=b.Q
C.c.S(g.a,g.d,m)
m=c.gcr()
g=b.ch
C.c.S(g.a,g.d,m)
m=c.gcs()
g=b.cx
C.c.S(g.a,g.d,m)
m=c.gct()
g=b.cy
C.c.S(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.Y(k,this.Q.d)
u=this.a
p=this.Q.d
u.ak(u.ec,u.bA,p)
break
case C.i:this.Y(k,this.Q.e)
u=this.a
p=this.Q.e
u.ac(u.ed,u.bA,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga1().eD()
a4.Q=p}u=u.id
u.toString
u.ap(p.ah(0,!0))}if(r.dy){this.Y(k,this.ch)
u=this.a
p=this.ch
u.ac(u.ee,u.ef,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bB
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
break
case C.h:this.Y(k,this.cx.d)
u=this.a
p=this.cx.d
u.ak(u.eg,u.bC,p)
p=this.a
u=this.cx.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break
case C.i:this.Y(k,this.cx.e)
u=this.a
p=this.cx.e
u.ac(u.eh,u.bC,p)
p=this.a
u=this.cx.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bE
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bD
C.c.S(p.a,p.d,m)
break
case C.h:this.Y(k,this.cy.d)
u=this.a
p=this.cy.d
u.ak(u.ei,u.bF,p)
p=this.a
u=this.cy.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bD
C.c.S(u.a,u.d,m)
break
case C.i:this.Y(k,this.cy.e)
u=this.a
p=this.cy.e
u.ac(u.ej,u.bF,p)
p=this.a
u=this.cy.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bD
C.c.S(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bG
C.c.S(u.a,u.d,n)
break
case C.h:this.Y(k,this.db.d)
u=this.a
n=this.db.d
u.ak(u.ek,u.bH,n)
n=this.a
u=this.db.f
n=n.bG
C.c.S(n.a,n.d,u)
break
case C.i:this.Y(k,this.db.e)
u=this.a
n=this.db.e
u.ac(u.el,u.bH,n)
n=this.a
u=this.db.f
n=n.bG
C.c.S(n.a,n.d,u)
break}C.c.cG(o,3042)
C.c.jB(o,770,771)}for(i=0;i<k.length;++i)k[i].bq(a4)
u=a5.e
u.bq(a4)
u.aV(a4)
u.f1(a4)
if(p)C.c.jV(o,3042)
for(i=0;i<k.length;++i)k[i].f1(a4)
u=this.a
u.toString
C.c.f5(o,null)
u.x.jW()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dt().am},
sh1:function(a){this.e=H.h(a,"$ia_",[V.aj],"$aa_")}}
O.fk.prototype={}
O.dj.prototype={
aP:function(){}}
O.fl.prototype={}
O.aP.prototype={
dP:function(a){var u,t
if(!J.O(this.f,a)){u=this.f
this.f=a
t=new D.G(this.b+".color",u,a,this,[V.W])
t.b=!0
this.a.ab(t)}},
aP:function(){this.fu()
this.dP(new V.W(1,1,1))},
sal:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aP()
u=this.a
u.a=null
u.ab(null)}this.dP(b)}}
O.fn.prototype={
iG:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.G(this.b+".refraction",u,a,this,[P.p])
u.b=!0
this.a.ab(u)}},
aP:function(){this.bW()
this.iG(1)}}
O.fo.prototype={
cl:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.G(this.b+".shininess",u,a,this,[P.p])
u.b=!0
this.a.ab(u)}},
aP:function(){this.bW()
this.cl(100)}}
O.bN.prototype={}
T.dH.prototype={}
T.h1.prototype={}
V.aY.prototype={
aI:function(a){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dh.prototype={
aI:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aI(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.h(a,"$ia",[V.at],"$aa")},
$iat:1}
V.ao.prototype={
aI:function(a){return!this.ft(a)},
i:function(a){return"!["+this.de(0)+"]"}}
V.fE.prototype={
aI:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bJ(this.a)
t=H.bJ(this.b)
return u+".."+t},
$iat:1}
V.fM.prototype={
fB:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aH([P.l,P.N])
for(t=new H.cb(a,a.gm(a),0,[H.ab(a,"T",0)]);t.F();)u.q(0,t.d,!0)
this.siF(u)},
aI:function(a){return this.a.br(a)},
i:function(a){return P.dD(this.a.gay(),0,null)},
siF:function(a){this.a=H.h(a,"$iH",[P.l,P.N],"$aH")},
$iat:1}
V.ck.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.co(this.a.j(0,b))
r.sa7(H.b([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
k6:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aI(a))return r}return},
i:function(a){return this.b},
siX:function(a){this.c=H.h(a,"$ia",[V.co],"$aa")}}
V.dM.prototype={
i:function(a){var u,t
u=H.jK(this.b,"\n","\\n")
t=H.jK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cn.prototype={
aJ:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.z)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
six:function(a){var u=P.f
this.c=H.h(a,"$iH",[u,u],"$aH")}}
V.h3.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.ck(this,b)
u.siX(H.b([],[V.co]))
u.d=null
this.a.q(0,b,u)}return u},
R:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cn(this,a)
t=P.f
u.six(new H.aH([t,t]))
this.b.q(0,a,u)}return u},
f0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dM])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.I(a,o)
m=t.k6(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dD(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dD(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dM(j==null?k.b:j,l,o)}++o}}},
siO:function(a){this.a=H.h(a,"$iH",[P.f,V.ck],"$aH")},
siQ:function(a){this.b=H.h(a,"$iH",[P.f,V.cn],"$aH")}}
V.co.prototype={
i:function(a){return this.b.b+": "+this.de(0)}}
X.cY.prototype={$ib4:1}
X.eU.prototype={
gD:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u}}
X.ds.prototype={
gD:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
aN:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.J(a)},
fV:function(){return this.aN(null)},
sbb:function(a){var u,t
if(!J.O(this.b,a)){u=this.b
if(u!=null)u.gD().N(0,this.gdi())
t=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gdi())
u=new D.G("mover",t,this.b,this,[U.a6])
u.b=!0
this.aN(u)}},
$ib4:1,
$icY:1}
X.dG.prototype={}
V.be.prototype={
bl:function(a){this.b=new P.eX(C.X)
this.c=null
this.sc4(H.b([],[[P.a,W.ax]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.ax]))
t=a.split("\n")
for(u=t.length,s=[W.ax],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.h6(p,0,p.length)
m=n==null?p:n
C.k.fk(o,H.jK(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eN:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.sc4(H.b([],[[P.a,W.ax]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bs()
this.c=t}for(t=t.f0(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)this.bL(t[r])},
sc4:function(a){this.d=H.h(a,"$ia",[[P.a,W.ax]],"$aa")}}
V.j3.prototype={
$1:function(a){H.d(a,"$iaT")
P.jJ(C.e.f_(this.a.gkc(),2)+" fps")},
$S:49}
V.eD.prototype={
bL:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
u=V.h4()
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
s=new V.ao()
r=[V.at]
s.sa7(H.b([],r))
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
s.sa7(H.b([],r))
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
t.aJ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aJ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aJ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eV.prototype={
bL:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
u=V.h4()
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
s=new V.ao()
r=[V.at]
s.sa7(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ao()
t.sa7(H.b([],r))
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
s.aJ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aJ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aJ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eW.prototype={
bL:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
u=V.h4()
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
s=new V.ao()
s.sa7(H.b([],[V.at]))
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
s.aJ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.R("Attr")
s=u.j(0,"Other")
s.d=s.a.R("Other")
return u}}
V.fA.prototype={
eN:function(a){H.h(a,"$ia",[P.f],"$aa")
this.sc4(H.b([],[[P.a,W.ax]]))
this.O(C.a.l(a,"\n"),"#111")},
bL:function(a){},
bs:function(){return}}
V.fC.prototype={
dV:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.ks().gcZ().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.dT(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.jR(this.c).h(0,q)
o=W.lS("radio")
o.checked=s
o.name=u
u=W.m
W.a8(o,"change",H.k(new V.fD(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.F.E(q,o)
n=r.createElement("span")
n.textContent=b
C.F.E(q,n)
J.jR(this.c).h(0,r.createElement("br"))},
b2:function(a,b,c){return this.dV(a,b,c,!1)},
dT:function(a){var u,t,s,r,q
u=P.ks()
t=P.f
s=P.m0(u.gcZ(),t,t)
s.q(0,this.a,a)
r=u.eT(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iz(t,new P.ih([],[]).d5(""),"",q)}}
V.fD.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dT(this.d)}},
$S:20}
V.fQ.prototype={
fD:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).E(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.E(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.E(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.E(q,p)}o=u.createElement("div")
this.a=o
C.k.E(q,o)
this.b=null
o=W.m
W.a8(u,"scroll",H.k(new V.fS(s),{func:1,ret:-1,args:[o]}),!1,o)},
dX:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f0(C.a.ki(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.E(t,o)
break
case"Link":n=p.b
if(H.nA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.E(t,l)}else{k=P.ee(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.E(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.E(t,o)
break}}C.k.E(this.a,t)},
fb:function(a){var u,t,s,r
u=new V.eD("dart")
u.bl("dart")
t=new V.eV("glsl")
t.bl("glsl")
s=new V.eW("html")
s.bl("html")
r=C.a.k8(H.b([u,t,s],[V.be]),new V.fT(a))
if(r!=null)return r
u=new V.fA("plain")
u.bl("plain")
return u},
dW:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cM(r).a4(r,"+")){C.a.q(a7,s,C.b.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a4(r,"-")){C.a.q(a7,s,C.b.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fb(a5)
q.eN(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.ee(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jT(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.E(j,i)
C.x.E(k,j)
C.n.E(l,k)
C.o.E(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.z)(r),++a0)C.x.E(a,r[a0])
C.n.E(e,d)
C.n.E(e,c)
C.n.E(e,a)
C.o.E(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.z)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gU(r);a3.F();)C.x.E(c,a3.gM())
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
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
C.k.E(this.a,t)
r=C.o.hl(t,-1)
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
s.marginRight="auto";(o&&C.x).E(o,p)}},
iJ:function(){var u,t,s,r
if(this.b!=null)return
u=V.h4()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ao()
r=[V.at]
s.sa7(H.b([],r))
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
s.sa7(H.b([],r))
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
s.sa7(H.b([],r))
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
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ao()
t.sa7(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aY())
s=u.j(0,"Other").l(0,"Other")
t=new V.ao()
t.sa7(H.b([],r))
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
V.fS.prototype={
$1:function(a){P.ko(C.y,new V.fR(this.a))},
$S:20}
V.fR.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.fT.prototype={
$1:function(a){return H.d(a,"$ibe").a===this.a},
$S:51}
U.iV.prototype={
$0:function(){this.a.sai(0,F.jE(1,null,null,1))},
$S:0}
U.iW.prototype={
$0:function(){this.a.sai(0,F.kW(1,!0,!0,1,40,1))},
$S:0}
U.iX.prototype={
$0:function(){this.a.sai(0,F.kW(1,!0,!1,1,40,0))},
$S:0}
U.iY.prototype={
$0:function(){this.a.sai(0,F.nz(6,null,1,6))},
$S:0}
U.iZ.prototype={
$0:function(){this.a.sai(0,F.l8(30,1,15,0.5))},
$S:0}
U.j_.prototype={
$0:function(){this.a.sai(0,F.nq(120,1,2,12,0.3,3))},
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
u.fp=u.i
u=J.da.prototype
u.fs=u.i
u=P.n.prototype
u.fq=u.bP
u=W.P.prototype
u.bV=u.ad
u=W.e8.prototype
u.fv=u.au
u=O.dj.prototype
u.fu=u.aP
u=O.aP.prototype
u.bW=u.aP
u=V.dh.prototype
u.ft=u.aI
u.de=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n6","mA",10)
u(P,"n7","mB",10)
u(P,"n8","mC",10)
t(P,"kV","n5",3)
s(W,"nj",4,null,["$4"],["mE"],19,0)
s(W,"nk",4,null,["$4"],["mF"],19,0)
var m
r(m=E.ai.prototype,"geL",0,0,null,["$1","$0"],["eM","ku"],1,0)
r(m,"geJ",0,0,null,["$1","$0"],["eK","kt"],1,0)
r(m,"geH",0,0,null,["$1","$0"],["eI","kq"],1,0)
q(m,"gko","kp",5)
q(m,"gkr","ks",5)
r(m=E.dL.prototype,"gdf",0,0,null,["$1","$0"],["dh","dg"],1,0)
p(m,"gkK","eU",3)
o(m=X.dS.prototype,"ghS","hT",12)
o(m,"ghE","hF",12)
o(m,"ghM","hN",4)
o(m,"ghW","hX",26)
o(m,"ghU","hV",26)
o(m,"gi_","i0",4)
o(m,"gi3","i4",4)
o(m,"ghQ","hR",4)
o(m,"gi1","i2",4)
o(m,"ghO","hP",4)
o(m,"gi5","i6",36)
o(m,"gi7","i8",12)
o(m,"gim","io",11)
o(m,"gii","ij",11)
o(m,"gik","il",11)
r(D.bg.prototype,"gfJ",0,0,null,["$1","$0"],["aC","fK"],1,0)
r(m=D.dd.prototype,"gdI",0,0,null,["$1","$0"],["dJ","hY"],1,0)
o(m,"gia","ib",38)
q(m,"ghy","hz",16)
q(m,"gig","ih",16)
n(V.R.prototype,"gm","cR",15)
n(V.C.prototype,"gm","cR",15)
r(m=U.c9.prototype,"gaM",0,0,null,["$1","$0"],["K","a6"],1,0)
q(m,"ghw","hx",14)
q(m,"gic","ie",14)
r(m=U.dT.prototype,"gaM",0,0,null,["$1","$0"],["K","a6"],1,0)
o(m,"gc7","c8",2)
o(m,"gc9","ca",2)
o(m,"gcb","cc",2)
r(m=U.dU.prototype,"gaM",0,0,null,["$1","$0"],["K","a6"],1,0)
o(m,"gc7","c8",2)
o(m,"gc9","ca",2)
o(m,"gcb","cc",2)
o(m,"ghq","hr",2)
o(m,"ghs","ht",2)
o(m,"giV","iW",2)
o(m,"giT","iU",2)
o(m,"giR","iS",2)
o(U.dV.prototype,"ghu","hv",2)
r(m=M.d2.prototype,"gar",0,0,null,["$1","$0"],["aD","fL"],1,0)
q(m,"ghI","hJ",5)
q(m,"ghK","hL",5)
r(m=O.di.prototype,"ghG",0,0,null,["$1","$0"],["ab","hH"],1,0)
r(m,"giB",0,0,null,["$1","$0"],["dN","iC"],1,0)
q(m,"ghA","hB",29)
q(m,"ghC","hD",29)
r(X.ds.prototype,"gdi",0,0,null,["$1","$0"],["aN","fV"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jj,J.a3,J.ar,P.e4,P.n,H.cb,P.aN,H.bz,H.cw,H.ez,H.fF,H.h7,P.bh,H.c3,H.e9,P.bF,H.f7,H.f9,H.f3,P.ea,P.aX,P.aA,P.dY,P.fW,P.cl,P.fX,P.aT,P.ag,P.iy,P.ib,P.bO,P.e3,P.T,P.ip,P.ff,P.bv,P.eY,P.iw,P.iu,P.N,P.ah,P.af,P.aM,P.fy,P.dC,P.e0,P.eT,P.bi,P.a,P.H,P.D,P.ap,P.f,P.ae,P.bP,P.hn,P.ie,W.eB,W.bp,W.as,W.dq,W.e8,W.ij,W.d3,W.av,W.ia,W.ef,P.ig,P.i5,P.M,O.a_,O.cc,E.et,E.ai,E.fG,E.dL,Z.dX,Z.hH,Z.cW,Z.bj,Z.aV,D.ew,D.bx,D.y,X.cX,X.db,X.f5,X.fc,X.au,X.fp,X.h5,X.dS,D.bg,D.a1,D.dt,D.dB,D.dI,D.dJ,D.dK,V.W,V.aE,V.eK,V.dk,V.aj,V.a4,V.Y,V.aR,V.dx,V.R,V.C,U.dT,U.dU,U.dV,M.d2,A.cT,A.eq,A.fm,A.cp,A.ct,A.cr,A.cu,A.cs,A.cv,A.bw,A.dO,A.hh,F.a2,F.eO,F.b2,F.f6,F.bl,F.dA,F.fN,F.fO,F.fP,F.aa,F.hw,F.hx,F.hA,F.hC,F.hD,F.hE,O.bN,O.dj,T.h1,V.aY,V.at,V.dh,V.fE,V.fM,V.ck,V.dM,V.cn,V.h3,X.cY,X.dG,X.ds,V.be,V.fC,V.fQ])
s(J.a3,[J.f1,J.d9,J.da,J.aF,J.bk,J.b0,H.bG,W.by,W.dZ,W.eE,W.d0,W.d1,W.m,W.d6,W.e1,W.df,W.e6,W.dv,W.aI,W.eb,W.eg,P.cU,P.d4,P.du,P.bL,P.dz,P.dP])
s(J.da,[J.fz,J.bo,J.b1])
t(J.ji,J.aF)
s(J.bk,[J.d8,J.f2])
t(P.fb,P.e4)
s(P.fb,[H.dQ,W.hO,W.am,P.eP])
t(H.t,H.dQ)
s(P.n,[H.eH,H.fg,H.cy])
s(H.eH,[H.bE,H.f8])
s(P.aN,[H.fh,H.hI])
t(H.fi,H.bE)
t(H.eA,H.ez)
s(P.bh,[H.fx,H.f4,H.hl,H.h9,H.ev,H.fK,P.dr,P.aD,P.hm,P.hj,P.bM,P.ey,P.eC])
s(H.c3,[H.j7,H.h0,H.iQ,H.iR,H.iS,P.hK,P.hJ,P.hL,P.hM,P.io,P.im,P.hU,P.hY,P.hV,P.hW,P.hX,P.i0,P.i1,P.i_,P.hZ,P.fY,P.fZ,P.iG,P.i8,P.i7,P.i9,P.fa,P.fe,P.iv,P.eF,P.eG,P.hr,P.ho,P.hp,P.hq,P.iq,P.ir,P.it,P.is,P.iC,P.iB,P.iD,P.iE,W.eI,W.hT,W.fv,W.fu,W.ic,W.id,W.il,W.ix,P.ii,P.iI,P.eQ,P.eR,E.fH,E.fI,E.fJ,E.h2,D.eM,D.eN,F.iz,F.iJ,F.iL,F.iM,F.iN,F.j4,F.j5,F.j6,F.iU,F.iK,F.hG,F.hF,F.hy,F.hz,V.j3,V.fD,V.fS,V.fR,V.fT,U.iV,U.iW,U.iX,U.iY,U.iZ,U.j_,U.j0])
s(H.h0,[H.fV,H.c1])
t(P.fd,P.bF)
s(P.fd,[H.aH,W.hN])
t(H.dm,H.bG)
s(H.dm,[H.cC,H.cE])
t(H.cD,H.cC)
t(H.dn,H.cD)
t(H.cF,H.cE)
t(H.dp,H.cF)
s(H.dp,[H.fq,H.fr,H.fs,H.ft,H.ce])
t(P.i6,P.iy)
t(P.i4,P.ib)
t(P.ed,P.ff)
t(P.dR,P.ed)
s(P.bv,[P.er,P.eJ])
t(P.bf,P.fX)
s(P.bf,[P.es,P.eX,P.hu,P.ht])
t(P.hs,P.eJ)
s(P.af,[P.p,P.l])
s(P.aD,[P.bK,P.eZ])
t(P.hP,P.bP)
s(W.by,[W.B,W.cz])
s(W.B,[W.P,W.bd,W.c5,W.cA])
s(W.P,[W.w,P.o])
s(W.w,[W.cS,W.eo,W.c0,W.bc,W.bu,W.ax,W.eS,W.d5,W.ca,W.dc,W.fL,W.aS,W.dE,W.dF,W.h_,W.cm])
t(W.c4,W.dZ)
t(W.e2,W.e1)
t(W.bA,W.e2)
t(W.d7,W.c5)
t(W.bn,W.m)
s(W.bn,[W.aO,W.a9,W.aJ])
t(W.e7,W.e6)
t(W.cf,W.e7)
t(W.ec,W.eb)
t(W.h6,W.ec)
t(W.aW,W.a9)
t(W.e_,W.d1)
t(W.eh,W.eg)
t(W.e5,W.eh)
t(W.hQ,W.hN)
t(W.hR,P.fW)
t(W.jt,W.hR)
t(W.hS,P.cl)
t(W.ik,W.e8)
t(P.ih,P.ig)
t(P.ay,P.i5)
t(P.ci,P.o)
s(E.et,[Z.cV,A.cj,T.dH])
s(D.y,[D.bC,D.bD,D.G,X.fB])
s(X.fB,[X.dg,X.b3,X.cd,X.dN])
s(O.a_,[D.dd,U.c9])
s(D.ew,[U.ex,U.a6])
s(U.a6,[U.cZ,U.dy])
t(A.fj,A.cj)
s(A.dO,[A.J,A.hd,A.he,A.hg,A.hb,A.X,A.hc,A.I,A.hf,A.hi,A.cq,A.aw,A.ak,A.al])
t(F.fU,F.eO)
t(F.ha,F.f6)
t(F.hB,F.hC)
t(F.fw,F.hD)
t(O.di,O.bN)
s(O.dj,[O.fk,O.fl,O.aP])
s(O.aP,[O.fn,O.fo])
s(V.dh,[V.ao,V.co])
t(X.eU,X.dG)
s(V.be,[V.eD,V.eV,V.eW,V.fA])
u(H.dQ,H.cw)
u(H.cC,P.T)
u(H.cD,H.bz)
u(H.cE,P.T)
u(H.cF,H.bz)
u(P.e4,P.T)
u(P.ed,P.ip)
u(W.dZ,W.eB)
u(W.e1,P.T)
u(W.e2,W.as)
u(W.e6,P.T)
u(W.e7,W.as)
u(W.eb,P.T)
u(W.ec,W.as)
u(W.eg,P.T)
u(W.eh,W.as)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bc.prototype
C.q=W.bu.prototype
C.k=W.ax.prototype
C.T=W.d0.prototype
C.V=W.d5.prototype
C.W=W.d6.prototype
C.z=W.d7.prototype
C.Y=J.a3.prototype
C.a=J.aF.prototype
C.f=J.d8.prototype
C.r=J.d9.prototype
C.e=J.bk.prototype
C.b=J.b0.prototype
C.a4=J.b1.prototype
C.F=W.dc.prototype
C.aa=W.cf.prototype
C.L=J.fz.prototype
C.M=W.dv.prototype
C.c=P.bL.prototype
C.x=W.aS.prototype
C.o=W.dE.prototype
C.n=W.dF.prototype
C.C=J.bo.prototype
C.N=W.aW.prototype
C.O=W.cz.prototype
C.Q=new P.es(!1)
C.P=new P.er(C.Q)
C.R=new P.fy()
C.S=new P.hu()
C.l=new P.i6()
C.d=new A.bw(0,"ColorSourceType.None")
C.j=new A.bw(1,"ColorSourceType.Solid")
C.h=new A.bw(2,"ColorSourceType.Texture2D")
C.i=new A.bw(3,"ColorSourceType.TextureCube")
C.y=new P.aM(0)
C.U=new P.aM(5e6)
C.X=new P.eY("element",!0,!1,!1,!1)
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
C.a9=new H.eA(0,{},C.H,[P.f,P.f])
C.m=new P.hs(!1)})();(function staticFields(){$.aL=0
$.c2=null
$.jV=null
$.jx=!1
$.l0=null
$.kT=null
$.l6=null
$.iO=null
$.iT=null
$.jH=null
$.bR=null
$.cJ=null
$.cK=null
$.jy=!1
$.V=C.l
$.b_=null
$.jg=null
$.k1=null
$.k0=null
$.kb=null
$.kf=null
$.cg=null
$.kj=null
$.kv=null
$.kz=null
$.kx=null
$.ky=null
$.hv=null
$.kw=null
$.ke=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nG","la",function(){return H.l_("_$dart_dartClosure")})
u($,"nH","jM",function(){return H.l_("_$dart_js")})
u($,"nN","lb",function(){return H.aU(H.h8({
toString:function(){return"$receiver$"}}))})
u($,"nO","lc",function(){return H.aU(H.h8({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nP","ld",function(){return H.aU(H.h8(null))})
u($,"nQ","le",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nT","lh",function(){return H.aU(H.h8(void 0))})
u($,"nU","li",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nS","lg",function(){return H.aU(H.kq(null))})
u($,"nR","lf",function(){return H.aU(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nW","lk",function(){return H.aU(H.kq(void 0))})
u($,"nV","lj",function(){return H.aU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ob","jN",function(){return P.mz()})
u($,"oh","cQ",function(){return[]})
u($,"nY","ll",function(){return P.mw()})
u($,"oc","lp",function(){return H.m5(H.bQ(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"of","lr",function(){return P.ml("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"og","ls",function(){return P.mY()})
u($,"od","lq",function(){return P.k6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oe","jO",function(){return P.k5(P.f,P.bi)})
u($,"o4","lo",function(){return Z.az(0)})
u($,"nZ","lm",function(){return Z.az(511)})
u($,"o6","b9",function(){return Z.az(1)})
u($,"o5","b8",function(){return Z.az(2)})
u($,"o0","b7",function(){return Z.az(4)})
u($,"o7","ba",function(){return Z.az(8)})
u($,"o8","bb",function(){return Z.az(16)})
u($,"o1","cO",function(){return Z.az(32)})
u($,"o2","cP",function(){return Z.az(64)})
u($,"o3","ln",function(){return Z.az(96)})
u($,"o9","c_",function(){return Z.az(128)})
u($,"o_","b6",function(){return Z.az(256)})
u($,"nF","l9",function(){return new V.eK(1e-9)})
u($,"nE","F",function(){return $.l9()})})()
var v={mangledGlobalNames:{l:"int",p:"double",af:"num",f:"String",N:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.l,[P.n,E.ai]]},{func:1,ret:P.D,args:[F.a2]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.D,args:[F.aa,P.p,P.p]},{func:1,ret:P.D,args:[D.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.l,[P.n,U.a6]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.l,[P.n,D.a1]]},{func:1,args:[,]},{func:1,ret:V.Y,args:[P.p]},{func:1,ret:P.N,args:[W.P,P.f,P.f,W.bp]},{func:1,ret:P.D,args:[W.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.av]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.aj]]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.D,args:[P.af]},{func:1,args:[W.m]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[P.l]},{func:1,ret:P.D,args:[P.f,,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.N,args:[[P.n,D.a1]]},{func:1,ret:P.D,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[P.ap]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.aT]},{func:1,args:[P.f]},{func:1,ret:P.N,args:[V.be]},{func:1,args:[,P.f]},{func:1,ret:W.P,args:[W.B]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a3,DOMError:J.a3,MediaError:J.a3,Navigator:J.a3,NavigatorConcurrentHardware:J.a3,NavigatorUserMediaError:J.a3,OverconstrainedError:J.a3,PositionError:J.a3,WebGLActiveInfo:J.a3,WebGLRenderbuffer:J.a3,WebGL2RenderingContext:J.a3,WebGLTexture:J.a3,SQLError:J.a3,ArrayBufferView:H.bG,Float32Array:H.dn,Int16Array:H.fq,Int32Array:H.fr,Int8Array:H.fs,Uint32Array:H.ft,Uint8Array:H.ce,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLImageElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.cS,HTMLAreaElement:W.eo,HTMLBaseElement:W.c0,HTMLBodyElement:W.bc,HTMLCanvasElement:W.bu,CDATASection:W.bd,CharacterData:W.bd,Comment:W.bd,ProcessingInstruction:W.bd,Text:W.bd,CSSStyleDeclaration:W.c4,MSStyleCSSProperties:W.c4,CSS2Properties:W.c4,HTMLDivElement:W.ax,XMLDocument:W.c5,Document:W.c5,DOMException:W.eE,DOMImplementation:W.d0,DOMRectReadOnly:W.d1,Element:W.P,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.by,HTMLFormElement:W.eS,HTMLHeadElement:W.d5,History:W.d6,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,HTMLDocument:W.d7,HTMLInputElement:W.ca,KeyboardEvent:W.aO,HTMLLabelElement:W.dc,Location:W.df,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,DocumentFragment:W.B,ShadowRoot:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cf,RadioNodeList:W.cf,Range:W.dv,HTMLSelectElement:W.fL,HTMLTableCellElement:W.aS,HTMLTableDataCellElement:W.aS,HTMLTableHeaderCellElement:W.aS,HTMLTableElement:W.dE,HTMLTableRowElement:W.dF,HTMLTableSectionElement:W.h_,HTMLTemplateElement:W.cm,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.h6,CompositionEvent:W.bn,FocusEvent:W.bn,TextEvent:W.bn,UIEvent:W.bn,WheelEvent:W.aW,Window:W.cz,DOMWindow:W.cz,Attr:W.cA,ClientRect:W.e_,DOMRect:W.e_,NamedNodeMap:W.e5,MozNamedAttrMap:W.e5,SVGScriptElement:P.ci,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.cU,WebGLFramebuffer:P.d4,WebGLProgram:P.du,WebGLRenderingContext:P.bL,WebGLShader:P.dz,WebGLUniformLocation:P.dP})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.l3,[])
else U.l3([])})})()
//# sourceMappingURL=test.dart.js.map
