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
a[c]=function(){a[c]=function(){H.ny(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jN(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ju:function ju(a){this.a=a},
iY:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
js:function(){return new P.cr("No element")},
lT:function(){return new P.cr("Too many elements")},
r:function r(a){this.a=a},
eW:function eW(){},
bI:function bI(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ft:function ft(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
hW:function hW(a,b,c){this.a=a
this.b=b
this.$ti=c},
bD:function bD(){},
cH:function cH(){},
e4:function e4(){},
lL:function(){throw H.d(P.Y("Cannot modify unmodifiable Map"))},
c0:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ng:function(a){return v.types[H.a6(a)]},
nn:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iaG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.al(a)
if(typeof u!=="string")throw H.d(H.aC(a))
return u},
me:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fe(u)
t=u[0]
s=u[1]
return new H.fQ(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cn:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mb:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.E(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a7(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.F(r,p)|32)>s)return}return parseInt(a,b)},
bN:function(a){return H.m2(a)+H.jK(H.bu(a),0,null)},
m2:function(a){var u,t,s,r,q,p,o,n,m
u=J.P(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$icG){p=C.G(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.c.F(r,0)===36?C.c.aw(r,1):r)},
m3:function(){if(!!self.location)return self.location.href
return},
ko:function(a){var u,t,s,r,q
H.eB(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mc:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.aC(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aZ(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.aC(r))}return H.ko(u)},
kp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aC(s))
if(s<0)throw H.d(H.aC(s))
if(s>65535)return H.mc(a)}return H.ko(a)},
md:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bO:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aZ(u,10))>>>0,56320|u&1023)}}throw H.d(P.a7(a,0,1114111,null,null))},
bM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ma:function(a){var u=H.bM(a).getFullYear()+0
return u},
m8:function(a){var u=H.bM(a).getMonth()+1
return u},
m4:function(a){var u=H.bM(a).getDate()+0
return u},
m5:function(a){var u=H.bM(a).getHours()+0
return u},
m7:function(a){var u=H.bM(a).getMinutes()+0
return u},
m9:function(a){var u=H.bM(a).getSeconds()+0
return u},
m6:function(a){var u=H.bM(a).getMilliseconds()+0
return u},
C:function(a){throw H.d(H.aC(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.d(H.bX(a,b))},
bX:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
u=H.a6(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.bG(b,a,"index",null,u)
return P.fO(b,"index",null)},
nc:function(a,b,c){if(a>c)return new P.bP(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aC:function(a){return new P.aE(!0,a,null,null)},
n8:function(a){if(typeof a!=="number")throw H.d(H.aC(a))
return a},
d:function(a){var u
if(a==null)a=new P.dG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.la})
u.name=""}else u.toString=H.la
return u},
la:function(){return J.al(this.dartException)},
p:function(a){throw H.d(a)},
A:function(a){throw H.d(P.aN(a))},
aW:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ho:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ky:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ki:function(a,b){return new H.fH(a,b==null?null:b.method)},
jv:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fh(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aZ(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jv(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ki(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.ld()
p=$.le()
o=$.lf()
n=$.lg()
m=$.lj()
l=$.lk()
k=$.li()
$.lh()
j=$.lm()
i=$.ll()
h=q.ao(t)
if(h!=null)return u.$1(H.jv(H.E(t),h))
else{h=p.ao(t)
if(h!=null){h.method="call"
return u.$1(H.jv(H.E(t),h))}else{h=o.ao(t)
if(h==null){h=n.ao(t)
if(h==null){h=m.ao(t)
if(h==null){h=l.ao(t)
if(h==null){h=k.ao(t)
if(h==null){h=n.ao(t)
if(h==null){h=j.ao(t)
if(h==null){h=i.ao(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ki(H.E(t),h))}}return u.$1(new H.hA(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dR()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aE(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dR()
return a},
bZ:function(a){var u
if(a==null)return new H.ep(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ep(a)},
nf:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
nm:function(a,b,c,d,e,f){H.c(a,"$ibj")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.t("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nm)
a.$identity=u
return u},
lK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.P(d).$ia){u.$reflectionInfo=d
s=H.me(u).r}else s=d
r=e?Object.create(new H.h4().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aM
if(typeof p!=="number")return p.H()
$.aM=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k4(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ng,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k2:H.jk
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k4(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lH:function(a,b,c,d){var u=H.jk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lH(t,!r,u,b)
if(t===0){r=$.aM
if(typeof r!=="number")return r.H()
$.aM=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c5
if(q==null){q=H.eJ("self")
$.c5=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aM
if(typeof r!=="number")return r.H()
$.aM=r+1
o+=r
r="return function("+o+"){return this."
q=$.c5
if(q==null){q=H.eJ("self")
$.c5=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
lI:function(a,b,c,d){var u,t
u=H.jk
t=H.k2
switch(b?-1:a){case 0:throw H.d(H.mi("Intercepted function with no arguments."))
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
u=$.c5
if(u==null){u=H.eJ("self")
$.c5=u}t=$.k1
if(t==null){t=H.eJ("receiver")
$.k1=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lI(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aM
if(typeof t!=="number")return t.H()
$.aM=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aM
if(typeof t!=="number")return t.H()
$.aM=t+1
return new Function(u+t+"}")()},
jN:function(a,b,c,d,e,f,g){return H.lK(a,b,H.a6(c),d,!!e,!!f,g)},
jk:function(a){return a.a},
k2:function(a){return a.c},
eJ:function(a){var u,t,s,r,q
u=new H.c4("self","target","receiver","name")
t=J.fe(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aK(a,"String"))},
nd:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aK(a,"double"))},
nr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aK(a,"num"))},
jL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aK(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aK(a,"int"))},
l8:function(a,b){throw H.d(H.aK(a,H.c0(H.E(b).substring(2))))},
nt:function(a,b){throw H.d(H.lG(a,H.c0(H.E(b).substring(2))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.l8(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.nt(a,b)},
eB:function(a){if(a==null)return a
if(!!J.P(a).$ia)return a
throw H.d(H.aK(a,"List<dynamic>"))},
l5:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ia)return a
if(u[b])return a
H.l8(a,b)},
l1:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
eA:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l1(J.P(a))
if(u==null)return!1
return H.kS(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jH)return a
$.jH=!0
try{if(H.eA(a,b))return a
u=H.je(b)
t=H.aK(a,u)
throw H.d(t)}finally{$.jH=!1}},
jO:function(a,b){if(a!=null&&!H.jM(a,b))H.p(H.aK(a,H.je(b)))
return a},
aK:function(a,b){return new H.hp("TypeError: "+P.f_(a)+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")},
lG:function(a,b){return new H.eK("CastError: "+P.f_(a)+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")},
kX:function(a){var u,t
u=J.P(a)
if(!!u.$ic7){t=H.l1(u)
if(t!=null)return H.je(t)
return"Closure"}return H.bN(a)},
ny:function(a){throw H.d(new P.eR(H.E(a)))},
mi:function(a){return new H.fV(a)},
l2:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bu:function(a){if(a==null)return
return a.$ti},
oi:function(a,b,c){return H.c_(a["$a"+H.j(c)],H.bu(b))},
cY:function(a,b,c,d){var u
H.E(c)
H.a6(d)
u=H.c_(a["$a"+H.j(c)],H.bu(b))
return u==null?null:u[d]},
a8:function(a,b,c){var u
H.E(b)
H.a6(c)
u=H.c_(a["$a"+H.j(b)],H.bu(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.a6(b)
u=H.bu(a)
return u==null?null:u[b]},
je:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.i(b,"$ia",[P.e],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jK(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.j(b[t])}if('func' in a)return H.mY(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.i(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.c.H(o,b[m])
l=t[p]
if(l!=null&&l!==P.Q)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.ne(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jK:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ia",[P.e],"$aa")
if(a==null)return""
u=new P.ac("")
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
cV:function(a,b,c,d){var u,t
H.E(b)
H.eB(c)
H.E(d)
if(a==null)return!1
u=H.bu(a)
t=J.P(a)
if(t[b]==null)return!1
return H.l_(H.c_(t[d],u),null,c,null)},
i:function(a,b,c,d){H.E(b)
H.eB(c)
H.E(d)
if(a==null)return a
if(H.cV(a,b,c,d))return a
throw H.d(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jK(c,0,null),v.mangledGlobalNames)))},
l_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.c_(J.P(b)["$a"+H.j(c)],H.bu(b)))},
l4:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="D"||a===-1||a===-2||H.l4(u)}return!1},
jM:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="D"||b===-1||b===-2||H.l4(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jM(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eA(a,b)}u=J.P(a).constructor
t=H.bu(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
y:function(a,b){if(a!=null&&!H.jM(a,b))throw H.d(H.aK(a,H.je(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.kS(a,b,c,d)
if('func' in a)return c.name==="bj"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cc" in t.prototype))return!1
r=t.prototype["$a"+"cc"]
q=H.c_(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
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
return H.nq(h,b,g,d)},
nq:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
no:function(a){var u,t,s,r,q,p
u=H.E($.l3.$1(a))
t=$.iW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j1[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.kZ.$2(a,u))
if(u!=null){t=$.iW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j1[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jd(s)
$.iW[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j1[u]=s
return s}if(q==="-"){p=H.jd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l7(a,s)
if(q==="*")throw H.d(P.hz(u))
if(v.leafTags[u]===true){p=H.jd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l7(a,s)},
l7:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jd:function(a){return J.jR(a,!1,null,!!a.$iaG)},
np:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jd(u)
else return J.jR(u,c,null,null)},
nk:function(){if(!0===$.jQ)return
$.jQ=!0
H.nl()},
nl:function(){var u,t,s,r,q,p,o,n
$.iW=Object.create(null)
$.j1=Object.create(null)
H.nj()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l9.$1(q)
if(p!=null){o=H.np(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nj:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.bV(C.a0,H.bV(C.a5,H.bV(C.F,H.bV(C.F,H.bV(C.a4,H.bV(C.a1,H.bV(C.a2(C.G),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l3=new H.iZ(q)
$.kZ=new H.j_(p)
$.l9=new H.j0(o)},
bV:function(a,b){return a(b)||b},
lV:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.Z("Illegal RegExp pattern ("+String(r)+")",a,null))},
nw:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jU:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eO:function eO(){},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fQ:function fQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a){this.a=a},
jg:function jg(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null},
c7:function c7(){},
ha:function ha(){},
h4:function h4(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a){this.a=a},
eK:function eK(a){this.a=a},
fV:function fV(a){this.a=a},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fk:function fk(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
fg:function fg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bT:function(a){return a},
m1:function(a){return new Int8Array(a)},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bX(b,a))},
mW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.nc(a,b,c))
return b},
bL:function bL(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
dE:function dE(){},
ck:function ck(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
ne:function(a){return J.ka(a?Object.keys(a):[],null)},
ns:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iX:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jQ==null){H.nk()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.hz("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jV()]
if(q!=null)return q
q=H.no(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.N
if(t===Object.prototype)return C.N
if(typeof r=="function"){Object.defineProperty(r,$.jV(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
lU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.jj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a7(a,0,4294967295,"length",null))
return J.ka(new Array(a),b)},
ka:function(a,b){return J.fe(H.b(a,[b]))},
fe:function(a){H.eB(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.ff.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.Q)return a
return J.iX(a)},
cW:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.Q)return a
return J.iX(a)},
jP:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.Q)return a
return J.iX(a)},
cX:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.cG.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.Q)return a
return J.iX(a)},
a2:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).w(a,b)},
lv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cW(a).k(a,b)},
lw:function(a,b,c,d){return J.a5(a).h4(a,b,c,d)},
lx:function(a,b){return J.cX(a).F(a,b)},
eC:function(a,b){return J.a5(a).iD(a,b)},
jh:function(a,b,c){return J.a5(a).iG(a,b,c)},
jY:function(a,b){return J.a5(a).B(a,b)},
ly:function(a,b){return J.cX(a).a4(a,b)},
eD:function(a,b){return J.jP(a).ae(a,b)},
lz:function(a,b,c,d){return J.a5(a).k7(a,b,c,d)},
lA:function(a){return J.a5(a).gjD(a)},
c2:function(a){return J.a5(a).gcK(a)},
d2:function(a){return J.P(a).gJ(a)},
bv:function(a){return J.jP(a).gV(a)},
aD:function(a){return J.cW(a).gm(a)},
lB:function(a){return J.a5(a).gkO(a)},
ji:function(a,b){return J.a5(a).b4(a,b)},
jZ:function(a){return J.jP(a).kG(a)},
lC:function(a,b){return J.a5(a).kI(a,b)},
lD:function(a,b,c){return J.a5(a).ft(a,b,c)},
lE:function(a,b,c){return J.cX(a).t(a,b,c)},
lF:function(a){return J.cX(a).kV(a)},
al:function(a){return J.P(a).i(a)},
a9:function a9(){},
ff:function ff(){},
dn:function dn(){},
dq:function dq(){},
fJ:function fJ(){},
cG:function cG(){},
bn:function bn(){},
aP:function aP(a){this.$ti=a},
jt:function jt(a){this.$ti=a},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dp:function dp(){},
dm:function dm(){},
dl:function dl(){},
bH:function bH(){}},P={
my:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n5()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bW(new P.hY(u),1)).observe(t,{childList:true})
return new P.hX(u,t,s)}else if(self.setImmediate!=null)return P.n6()
return P.n7()},
mz:function(a){self.scheduleImmediate(H.bW(new P.hZ(H.k(a,{func:1,ret:-1})),0))},
mA:function(a){self.setImmediate(H.bW(new P.i_(H.k(a,{func:1,ret:-1})),0))},
mB:function(a){P.jy(C.z,H.k(a,{func:1,ret:-1}))},
jy:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a8(a.a,1000)
return P.mH(u<0?0:u,b)},
kx:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aV]})
u=C.f.a8(a.a,1000)
return P.mI(u<0?0:u,b)},
mH:function(a,b){var u=new P.er(!0)
u.fZ(a,b)
return u},
mI:function(a,b){var u=new P.er(!1)
u.h_(a,b)
return u},
mC:function(a,b){var u,t,s
b.a=1
try{a.f8(new P.i8(b),new P.i9(b),null)}catch(s){u=H.ab(s)
t=H.bZ(s)
P.nu(new P.ia(b,u,t))}},
kH:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.c(a.c,"$iaA")
if(u>=4){t=b.cz()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.c(b.c,"$iaZ")
b.a=2
b.c=a
a.dX(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.c(t.c,"$iaf")
t=t.b
p=q.a
o=q.b
t.toString
P.iS(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cL(u.a,b)}t=u.a
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
if(k){H.c(m,"$iaf")
t=t.b
p=m.a
o=m.b
t.toString
P.iS(null,null,t,p,o)
return}j=$.W
if(j!=l)$.W=l
else j=null
t=b.c
if(t===8)new P.ie(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.id(s,b,m).$0()}else if((t&2)!==0)new P.ic(u,s,b).$0()
if(j!=null)$.W=j
t=s.b
if(!!J.P(t).$icc){if(t.a>=4){i=H.c(o.c,"$iaZ")
o.c=null
b=o.by(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kH(t,o)
return}}h=b.b
i=H.c(h.c,"$iaZ")
h.c=null
b=h.by(i)
t=s.a
p=s.b
if(!t){H.y(p,H.q(h,0))
h.a=4
h.c=p}else{H.c(p,"$iaf")
h.a=8
h.c=p}u.a=h
t=h}},
n0:function(a,b){if(H.eA(a,{func:1,args:[P.Q,P.ap]}))return H.k(a,{func:1,ret:null,args:[P.Q,P.ap]})
if(H.eA(a,{func:1,args:[P.Q]}))return H.k(a,{func:1,ret:null,args:[P.Q]})
throw H.d(P.jj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n_:function(){var u,t
for(;u=$.bU,u!=null;){$.cU=null
t=u.b
$.bU=t
if(t==null)$.cT=null
u.a.$0()}},
n4:function(){$.jI=!0
try{P.n_()}finally{$.cU=null
$.jI=!1
if($.bU!=null)$.jW().$1(P.l0())}},
kW:function(a){var u=new P.ed(H.k(a,{func:1,ret:-1}))
if($.bU==null){$.cT=u
$.bU=u
if(!$.jI)$.jW().$1(P.l0())}else{$.cT.b=u
$.cT=u}},
n3:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bU
if(u==null){P.kW(a)
$.cU=$.cT
return}t=new P.ed(a)
s=$.cU
if(s==null){t.b=u
$.cU=t
$.bU=t}else{t.b=s.b
s.b=t
$.cU=t
if(t.b==null)$.cT=t}},
nu:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.W
if(C.l===t){P.iU(null,null,C.l,a)
return}t.toString
P.iU(null,null,t,H.k(t.cG(a),u))},
kw:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.W
if(t===C.l){t.toString
return P.jy(a,b)}return P.jy(a,H.k(t.cG(b),u))},
mo:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aV]}
H.k(b,u)
t=$.W
if(t===C.l){t.toString
return P.kx(a,b)}s=t.ed(b,P.aV)
$.W.toString
return P.kx(a,H.k(s,u))},
iS:function(a,b,c,d,e){var u={}
u.a=d
P.n3(new P.iT(u,e))},
kT:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
kU:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
n1:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
iU:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cG(d):c.jE(d,-1)
P.kW(d)},
hY:function hY(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
er:function er(a){this.a=a
this.b=null
this.c=0},
iB:function iB(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a,b,c,d,e){var _=this
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
i7:function i7(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a){this.a=a},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a
this.b=null},
h5:function h5(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
cs:function cs(){},
h6:function h6(){},
aV:function aV(){},
af:function af(a,b){this.a=a
this.b=b},
iL:function iL(){},
iT:function iT(a,b){this.a=a
this.b=b},
il:function il(){},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function(a,b,c,d,e){return new H.aH([d,e])},
lY:function(a,b,c){H.eB(a)
return H.i(H.nf(a,new H.aH([b,c])),"$ikb",[b,c],"$akb")},
kc:function(a,b){return new H.aH([a,b])},
du:function(a,b,c,d){return new P.ij([d])},
jE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mG:function(a,b,c){var u=new P.ej(a,b,[c])
u.c=a.e
return u},
lS:function(a,b,c){var u,t
if(P.jJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.e])
t=$.d1()
C.a.h(t,a)
try{P.mZ(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.ku(b,H.l5(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
jr:function(a,b,c){var u,t,s
if(P.jJ(a))return b+"..."+c
u=new P.ac(b)
t=$.d1()
C.a.h(t,a)
try{s=u
s.a=P.ku(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jJ:function(a){var u,t
for(u=0;t=$.d1(),u<t.length;++u)if(a===t[u])return!0
return!1},
mZ:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ia",[P.e],"$aa")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.j(u.gK())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gK();++s
if(!u.A()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK();++s
for(;u.A();o=n,n=m){m=u.gK();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kd:function(a,b,c){var u=P.lX(null,null,null,b,c)
a.U(0,new P.fm(u,b,c))
return u},
ke:function(a,b){var u,t,s
u=P.du(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.y(a[s],b))
return u},
jw:function(a){var u,t
u={}
if(P.jJ(a))return"{...}"
t=new P.ac("")
try{C.a.h($.d1(),a)
t.a+="{"
u.a=!0
a.U(0,new P.fq(u,t))
t.a+="}"}finally{u=$.d1()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ij:function ij(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bR:function bR(a){this.a=a
this.c=this.b=null},
ej:function ej(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(){},
T:function T(){},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
bJ:function bJ(){},
iC:function iC(){},
fr:function fr(){},
e5:function e5(a,b){this.a=a
this.$ti=b},
ir:function ir(){},
ek:function ek(){},
ev:function ev(){},
ms:function(a,b,c,d){H.i(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.mt(!1,b,c,d)
return},
mt:function(a,b,c,d){var u,t,s
u=$.ln()
if(u==null)return
t=0===c
if(t&&!0)return P.jB(u,b)
s=b.length
d=P.bp(c,d,s,null,null,null)
if(t&&d===s)return P.jB(u,b)
return P.jB(u,b.subarray(c,d))},
jB:function(a,b){if(P.mv(b))return
return P.mw(a,b)},
mw:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ab(t)}return},
mv:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mu:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ab(t)}return},
n2:function(a,b,c){var u,t,s
H.i(a,"$ia",[P.m],"$aa")
for(u=J.cW(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.c5()
if((s&127)!==s)return t-b}return c-b},
k0:function(a,b,c,d,e,f){if(C.f.bt(f,4)!==0)throw H.d(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Z("Invalid base64 padding, more than two '=' characters",a,b))},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
bz:function bz(){},
bf:function bf(){},
eY:function eY(){},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fa:function fa(a){this.a=a},
hI:function hI(a){this.a=a},
hK:function hK(){},
iJ:function iJ(a){this.b=this.a=0
this.c=a},
hJ:function hJ(a){this.a=a},
iH:function iH(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ:function(a,b,c){var u
H.k(b,{func:1,ret:P.m,args:[P.e]})
u=H.mb(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.Z(a,null,null))},
lQ:function(a){if(a instanceof H.c7)return a.i(0)
return"Instance of '"+H.bN(a)+"'"},
lZ:function(a,b,c,d){var u,t
H.y(b,d)
u=J.lU(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.p(u,t,b)
return H.i(u,"$ia",[d],"$aa")},
kf:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gV(a);s.A();)C.a.h(t,H.y(s.gK(),c))
if(b)return t
return H.i(J.fe(t),"$ia",u,"$aa")},
dS:function(a,b,c){var u,t
u=P.m
H.i(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.i(a,"$iaP",[u],"$aaP")
t=a.length
c=P.bp(b,c,t,null,null,null)
return H.kp(b>0||c<t?C.a.fA(a,b,c):a)}if(!!J.P(a).$ick)return H.md(a,b,P.bp(b,c,a.length,null,null,null))
return P.mm(a,b,c)},
mm:function(a,b,c){var u,t,s,r
H.i(a,"$il",[P.m],"$al")
if(b<0)throw H.d(P.a7(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.d(P.a7(c,b,J.aD(a),null,null))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.a7(b,0,s,null,null))
r=[]
if(u)for(;t.A();)r.push(t.gK())
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.a7(c,b,s,null,null))
r.push(t.gK())}return H.kp(r)},
mg:function(a,b,c){return new H.fg(a,H.lV(a,!1,!0,!1))},
ku:function(a,b,c){var u=J.bv(b)
if(!u.A())return a
if(c.length===0){do a+=H.j(u.gK())
while(u.A())}else{a+=H.j(u.gK())
for(;u.A();)a=a+c+H.j(u.gK())}return a},
hE:function(){var u=H.m3()
if(u!=null)return P.mr(u,0,null)
throw H.d(P.Y("'Uri.base' is not supported"))},
ew:function(a,b,c,d){var u,t,s,r,q,p
H.i(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.lt().b
if(typeof b!=="string")H.p(H.aC(b))
u=u.test(b)}else u=!1
if(u)return b
H.y(b,H.a8(c,"bz",0))
t=c.gk6().cL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bO(q)
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
dc:function(a){if(a>=10)return""+a
return"0"+a},
k6:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lQ(a)},
d4:function(a){return new P.aE(!1,null,null,a)},
jj:function(a,b,c){return new P.aE(!0,a,b,c)},
fO:function(a,b,c){return new P.bP(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c,d,e,f){if(typeof a!=="number")return H.C(a)
if(0>a||a>c)throw H.d(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a7(b,a,c,"end",f))
return b}return c},
bG:function(a,b,c,d,e){var u=H.a6(e==null?J.aD(b):e)
return new P.fd(b,u,!0,a,c,"Index out of range")},
Y:function(a){return new P.hB(a)},
hz:function(a){return new P.hy(a)},
kt:function(a){return new P.cr(a)},
aN:function(a){return new P.eN(a)},
t:function(a){return new P.eg(a)},
Z:function(a,b,c){return new P.f6(a,b,c)},
m_:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.p(u,t,b.$1(t))
return u},
jT:function(a){H.ns(a)},
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(t===0)return P.kz(b>0||c<c?C.c.t(a,b,c):a,5,null).gfd()
else if(t===32)return P.kz(C.c.t(a,u,c),0,null).gfd()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.m])
C.a.p(r,0,0)
s=b-1
C.a.p(r,1,s)
C.a.p(r,2,s)
C.a.p(r,7,s)
C.a.p(r,3,b)
C.a.p(r,4,b)
C.a.p(r,5,c)
C.a.p(r,6,c)
if(P.kV(a,b,c,0,r)>=14)C.a.p(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kZ()
if(q>=b)if(P.kV(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.H()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a_()
if(typeof m!=="number")return H.C(m)
if(l<m)m=l
if(typeof n!=="number")return n.a_()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a_()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a_()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ak(a,"..",n)))i=m>n+2&&C.c.ak(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ak(a,"file",b)){if(p<=b){if(!C.c.ak(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.t(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b2(a,n,m,"/");++m;++l;++c}else{a=C.c.t(a,b,n)+"/"+C.c.t(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ak(a,"http",b)){if(s&&o+3===n&&C.c.ak(a,"80",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ak(a,"https",b)){if(s&&o+4===n&&C.c.ak(a,"443",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.t(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iu(a,q,p,o,n,m,l,j)}return P.mJ(a,b,c,q,p,o,n,m,l,j)},
kB:function(a,b){var u=P.e
return C.a.kb(H.b(a.split("&"),[u]),P.kc(u,u),new P.hH(b),[P.J,P.e,P.e])},
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hD(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a4(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cZ(C.c.t(a,q,r),null,null)
if(typeof n!=="number")return n.fp()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cZ(C.c.t(a,q,c),null,null)
if(typeof n!=="number")return n.fp()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
kA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hF(a)
t=new P.hG(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a4(a,r)
if(n===58){if(r===b){++r
if(C.c.a4(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaD(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mq(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aZ(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
mJ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mQ(a,b,d)
else{if(d===b)P.cQ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mR(a,u,e-1):""
s=P.mN(a,e,f,!1)
if(typeof f!=="number")return f.H()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.mP(P.cZ(C.c.t(a,r,g),new P.iD(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mO(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.jF(a,h+1,i,null):null
return new P.bS(j,t,s,q,p,o,i<c?P.mM(a,i+1,c):null)},
kL:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cQ:function(a,b,c){throw H.d(P.Z(c,a,b))},
mP:function(a,b){if(a!=null&&a===P.kL(b))return
return a},
mN:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a4(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.c.a4(a,u)!==93)P.cQ(a,b,"Missing end `]` to match `[` in host")
P.kA(a,b+1,u)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.c.a4(a,t)===58){P.kA(a,b,c)
return"["+a+"]"}return P.mT(a,b,c)},
mT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a4(a,u)
if(q===37){p=P.kR(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ac("")
n=C.c.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.L,o)
o=(C.L[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ac("")
if(t<u){s.a+=C.c.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o)P.cQ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a4(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ac("")
n=C.c.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kM(q)
u+=l
t=u}}}}if(s==null)return C.c.t(a,b,c)
if(t<c){n=C.c.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mQ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kO(C.c.F(a,b)))P.cQ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.w,r)
r=(C.w[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cQ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.t(a,b,c)
return P.mK(t?a.toLowerCase():a)},
mK:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mR:function(a,b,c){return P.cR(a,b,c,C.a9,!1)},
mO:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cR(a,b,c,C.M,!0):C.t.l1(d,new P.iE(),P.e).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a7(r,"/"))r="/"+r
return P.mS(r,e,f)},
mS:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a7(a,"/"))return P.mU(a,!u||c)
return P.mV(a)},
jF:function(a,b,c,d){var u,t
u={}
H.i(d,"$iJ",[P.e,null],"$aJ")
if(a!=null){if(d!=null)throw H.d(P.d4("Both query and queryParameters specified"))
return P.cR(a,b,c,C.v,!0)}if(d==null)return
t=new P.ac("")
u.a=""
d.U(0,new P.iF(new P.iG(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mM:function(a,b,c){return P.cR(a,b,c,C.v,!0)},
kR:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a4(a,b+1)
s=C.c.a4(a,u)
r=H.iY(t)
q=H.iY(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aZ(p,4)
if(u>=8)return H.f(C.x,u)
u=(C.x[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bO(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
kM:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.p(t,0,37)
C.a.p(t,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.p(t,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.f.iS(a,6*r)&63|s
C.a.p(t,q,37)
C.a.p(t,q+1,C.c.F("0123456789ABCDEF",p>>>4))
C.a.p(t,q+2,C.c.F("0123456789ABCDEF",p&15))
q+=3}}return P.dS(t,0,null)},
cR:function(a,b,c,d,e){var u=P.kQ(a,b,c,H.i(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.t(a,b,c):u},
kQ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.i(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.c.a4(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kR(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.u,p)
p=(C.u[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cQ(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a4(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kM(q)}}if(r==null)r=new P.ac("")
r.a+=C.c.t(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.c.t(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kP:function(a){if(C.c.a7(a,"."))return!0
return C.c.eS(a,"/.")!==-1},
mV:function(a){var u,t,s,r,q,p,o
if(!P.kP(a))return a
u=H.b([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a2(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
mU:function(a,b){var u,t,s,r,q,p
if(!P.kP(a))return!b?P.kN(a):a
u=H.b([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaD(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaD(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.p(u,0,P.kN(u[0]))}return C.a.l(u,"/")},
kN:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kO(J.lx(a,0)))for(t=1;t<u;++t){s=C.c.F(a,t)
if(s===58)return C.c.t(a,0,t)+"%3A"+C.c.aw(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.w,r)
r=(C.w[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mL:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.d4("Invalid URL encoding"))}}return u},
jG:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.F(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.t(a,b,c)
else q=new H.r(C.c.t(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.F(a,t)
if(s>127)throw H.d(P.d4("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.d(P.d4("Truncated URI"))
C.a.h(q,P.mL(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.i(q,"$ia",[P.m],"$aa")
return new P.hJ(!1).cL(q)},
kO:function(a){var u=a|32
return 97<=u&&u<=122},
kz:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.F(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.d(P.Z("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.d(P.Z("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.F(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaD(u)
if(q!==44||s!==o+7||!C.c.ak(a,"base64",o+1))throw H.d(P.Z("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.R.kq(a,n,t)
else{m=P.kQ(a,n,t,C.v,!0)
if(m!=null)a=C.c.b2(a,n,t,m)}return new P.hC(a,u,c)},
mX:function(){var u,t,s,r,q
u=P.m_(22,new P.iP(),!0,P.M)
t=new P.iO(u)
s=new P.iQ()
r=new P.iR()
q=H.c(t.$2(0,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(14,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(15,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(1,225),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(2,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(3,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(4,229),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(5,229),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(6,231),"$iM")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(7,231),"$iM")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.c(t.$2(8,8),"$iM"),"]",5)
q=H.c(t.$2(9,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(16,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(17,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(10,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(18,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(19,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(11,235),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(12,236),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.c(t.$2(13,237),"$iM")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.c(t.$2(20,245),"$iM"),"az",21)
q=H.c(t.$2(21,245),"$iM")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kV:function(a,b,c,d,e){var u,t,s,r,q
H.i(e,"$ia",[P.m],"$aa")
u=$.lu()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.c.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.p(e,q>>>5,t)}return d},
L:function L(){},
ag:function ag(a,b){this.a=a
this.b=b},
z:function z(){},
bh:function bh(a){this.a=a},
eU:function eU(){},
eV:function eV(){},
bi:function bi(){},
dG:function dG(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fd:function fd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hB:function hB(a){this.a=a},
hy:function hy(a){this.a=a},
cr:function cr(a){this.a=a},
eN:function eN(a){this.a=a},
fI:function fI(){},
dR:function dR(){},
eR:function eR(a){this.a=a},
eg:function eg(a){this.a=a},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(){},
m:function m(){},
l:function l(){},
aO:function aO(){},
a:function a(){},
J:function J(){},
D:function D(){},
ae:function ae(){},
Q:function Q(){},
ap:function ap(){},
e:function e(){},
ac:function ac(a){this.a=a},
hH:function hH(a){this.a=a},
hD:function hD(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(){},
iG:function iG(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(){},
iO:function iO(a){this.a=a},
iQ:function iQ(){},
iR:function iR(){},
iu:function iu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i2:function i2(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nb:function(a){var u,t
u=J.P(a)
if(!!u.$ib1){t=u.gej(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eu(a.data,a.height,a.width)},
na:function(a){if(a instanceof P.eu)return{data:a.a,height:a.b,width:a.c}
return a},
n9:function(a,b){var u={}
a.U(0,new P.iV(u))
return u},
iv:function iv(){},
iw:function iw(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
eq:function eq(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(){},
f4:function f4(){},
ii:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ik:function ik(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
co:function co(){},
o:function o(){},
M:function M(){},
d6:function d6(){},
dh:function dh(){},
dJ:function dJ(){},
bQ:function bQ(){},
dM:function dM(){},
dV:function dV(){},
e3:function e3(){}},W={
k_:function(a){var u=document.createElement("a")
return u},
jl:function(a,b){var u=document.createElement("canvas")
return u},
lO:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).an(u,a,b,c)
t.toString
u=W.B
u=new H.cI(new W.ak(t),H.k(new W.eX(),{func:1,ret:P.L,args:[u]}),[u])
return H.c(u.gaS(u),"$iH")},
lP:function(a){H.c(a,"$ibC")
return"wheel"},
ca:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lB(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ab(s)}return u},
jq:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
lR:function(a){var u,t,s
t=document.createElement("input")
u=H.c(t,"$ice")
try{u.type=a}catch(s){H.ab(s)}return u},
ih:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a,b,c,d){var u,t
u=W.ih(W.ih(W.ih(W.ih(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d,e){var u,t
u=W.kY(new W.i6(c),W.n)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.n]})
if(t)J.lw(a,b,u,!1)}return new W.i5(a,b,u,!1,[e])},
kI:function(a){var u,t
u=W.k_(null)
t=window.location
u=new W.bs(new W.iq(u,t))
u.fO(a)
return u},
mD:function(a,b,c,d){H.c(a,"$iH")
H.E(b)
H.E(c)
H.c(d,"$ibs")
return!0},
mE:function(a,b,c,d){var u,t,s
H.c(a,"$iH")
H.E(b)
H.E(c)
u=H.c(d,"$ibs").a
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
u=P.e
t=P.ke(C.A,u)
s=H.q(C.A,0)
r=H.k(new W.iz(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iy(t,P.du(null,null,null,u),P.du(null,null,null,u),P.du(null,null,null,u),null)
t.fY(null,new H.fu(C.A,r,[s,u]),q,null)
return t},
kY:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.l)return a
return u.ed(a,b)},
x:function x(){},
d3:function d3(){},
eE:function eE(){},
c3:function c3(){},
bc:function bc(){},
bx:function bx(){},
by:function by(){},
bd:function bd(){},
c8:function c8(){},
eQ:function eQ(){},
ax:function ax(){},
c9:function c9(){},
eT:function eT(){},
dd:function dd(){},
de:function de(){},
i1:function i1(a,b){this.a=a
this.b=b},
H:function H(){},
eX:function eX(){},
n:function n(){},
bC:function bC(){},
f5:function f5(){},
di:function di(){},
dj:function dj(){},
bE:function bE(){},
dk:function dk(){},
b1:function b1(){},
bF:function bF(){},
ce:function ce(){},
aQ:function aQ(){},
ds:function ds(){},
dv:function dv(){},
ci:function ci(){},
a_:function a_(){},
ak:function ak(a){this.a=a},
B:function B(){},
cl:function cl(){},
dK:function dK(){},
fW:function fW(){},
aU:function aU(){},
dT:function dT(){},
dU:function dU(){},
h9:function h9(){},
cu:function cu(){},
aI:function aI(){},
aJ:function aJ(){},
hm:function hm(){},
br:function br(){},
hV:function hV(){},
aY:function aY(){},
cJ:function cJ(){},
cK:function cK(){},
ef:function ef(){},
el:function el(){},
i0:function i0(){},
i3:function i3(a){this.a=a},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i5:function i5(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i6:function i6(a){this.a=a},
bs:function bs(a){this.a=a},
ar:function ar(){},
dF:function dF(a){this.a=a},
fG:function fG(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(){},
is:function is(){},
it:function it(){},
iy:function iy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iz:function iz(){},
ix:function ix(){},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(){},
iq:function iq(a,b){this.a=a
this.b=b},
ex:function ex(a){this.a=a},
iK:function iK(a){this.a=a},
ee:function ee(){},
eh:function eh(){},
ei:function ei(){},
em:function em(){},
en:function en(){},
es:function es(){},
et:function et(){},
ey:function ey(){},
ez:function ez(){}},O={
jm:function(a){var u=new O.X([a])
u.bw(a)
return u},
X:function X(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ch:function ch(){this.b=this.a=null},
dy:function dy(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cg:function cg(){},
fw:function fw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aR:function aR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bq:function bq(){}},E={
k9:function(a,b,c,d,e,f){var u=new E.ah()
u.a=d
u.b=!0
u.sfN(0,O.jm(E.ah))
u.y.b5(u.gkr(),u.gku())
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
u.sca(0,e)
return u},
mh:function(a,b){var u=new E.fR(a,b)
u.fJ(a,b)
return u},
mn:function(a,b,c,d,e){var u,t,s,r
u=J.P(a)
if(!!u.$ibx)return E.kv(a,!0,!0,!0,!1)
t=W.jl(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcK(a).h(0,t)
r=E.kv(t,!0,!0,!0,!1)
r.a=a
return r},
kv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.e_()
t=P.lY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
s=C.q.c6(a,"webgl",t)
s=H.c(s==null?C.q.c6(a,"experimental-webgl",t):s,"$ibQ")
if(s==null)H.p(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mh(s,a)
r=new T.hf(s)
r.b=H.a6((s&&C.b).dg(s,3379))
r.c=H.a6(C.b.dg(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e6(a)
q=new X.fi()
q.c=new X.at(!1,!1,!1)
q.siz(P.du(null,null,null,P.m))
r.b=q
q=new X.fA(r)
q.f=0
q.r=V.b4()
q.x=V.b4()
q.Q=1
q.ch=1
r.c=q
q=new X.fo(r)
q.r=0
q.x=V.b4()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hl(r)
q.e=0
q.f=V.b4()
q.r=V.b4()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shj(H.b([],[[P.cs,P.Q]]))
q=r.z
p=document
o=W.a_
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a0(p,"contextmenu",H.k(r.ghS(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a0(a,"focus",H.k(r.ghY(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a0(a,"blur",H.k(r.ghM(),l),!1,m))
q=r.z
k=W.aQ
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a0(p,"keyup",H.k(r.gi1(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a0(p,"keydown",H.k(r.gi_(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a0(a,"mousedown",H.k(r.gi5(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a0(a,"mouseup",H.k(r.gi9(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a0(a,"mousemove",H.k(r.gi7(),n),!1,o))
k=r.z
j=W.aY;(k&&C.a).h(k,W.a0(a,H.E(W.lP(a)),H.k(r.gib(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a0(p,"mousemove",H.k(r.ghU(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a0(p,"mouseup",H.k(r.ghW(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a0(p,"pointerlockchange",H.k(r.gie(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a0(a,"touchstart",H.k(r.giw(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a0(a,"touchend",H.k(r.gis(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a0(a,"touchmove",H.k(r.giu(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ag(Date.now(),!1)
u.cy=0
u.e_()
return u},
eI:function eI(){},
ah:function ah(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(a){this.a=a}},Z={
jC:function(a,b,c){var u
H.i(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.aA(a,b,u)
C.b.ef(a,b,new Int16Array(H.bT(c)),35044)
C.b.aA(a,b,null)
return new Z.eb(b,u)},
az:function(a){return new Z.aX(a)},
eb:function eb(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ec:function ec(a){this.a=a},
c6:function c6(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a}},D={
I:function(){var u=new D.bB()
u.sal(null)
u.sbb(null)
u.c=null
u.d=0
return u},
eL:function eL(){},
bB:function bB(){var _=this
_.d=_.c=_.b=_.a=null},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
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
F:function F(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bg:function bg(){var _=this
_.d=_.c=_.b=_.a=null},
a1:function a1(){},
dt:function dt(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dI:function dI(){},
dQ:function dQ(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dr:function dr(a,b){this.a=a
this.b=b},fi:function fi(){var _=this
_.d=_.c=_.b=_.a=null},dw:function dw(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fo:function fo(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
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
_.b=null},fA:function fA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cj:function cj(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fL:function fL(){},e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hl:function hl(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jp:function(a,b,c,d,e,f,g){var u,t
u=new X.f7()
t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kr
if(t==null){t=V.kq(0,0,1,1)
$.kr=t}u.r=t
return u},
kk:function(a,b,c,d,e){var u,t,s
u=new X.dH()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gh0())
s=new D.F("mover",t,u.b,u,[U.aa])
s.b=!0
u.ax(s)}s=u.c
if(!(Math.abs(s-b)<$.N().a)){u.c=b
s=new D.F("fov",s,b,u,[P.z])
s.b=!0
u.ax(s)}s=u.d
if(!(Math.abs(s-d)<$.N().a)){u.d=d
s=new D.F("near",s,d,u,[P.z])
s.b=!0
u.ax(s)}s=u.e
if(!(Math.abs(s-a)<$.N().a)){u.e=a
s=new D.F("far",s,a,u,[P.z])
s.b=!0
u.ax(s)}return u},
bw:function bw(){},
f7:function f7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fc:function fc(){this.b=this.a=null},
dH:function dH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){}},V={
nz:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bt(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.c.ap("null",c)
return C.c.ap(C.j.f9(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
bY:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ia",[P.z],"$aa")
u=H.b([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.S(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.p(u,p,C.c.ap(u[p],s))}return u},
jS:function(a,b){return C.j.kS(Math.pow(b,C.a_.cW(Math.log(H.n8(a))/Math.log(b))))},
bK:function(){var u=$.kh
if(u==null){u=V.aS(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kh=u}return u},
aS:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kg:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.D(0,Math.sqrt(c.I(c)))
t=b.bi(u)
s=t.D(0,Math.sqrt(t.I(t)))
r=u.bi(s)
q=new V.O(a.a,a.b,a.c)
p=s.W(0).I(q)
o=r.W(0).I(q)
n=u.W(0).I(q)
return V.aS(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b4:function(){var u=$.km
if(u==null){u=new V.a4(0,0)
$.km=u}return u},
kn:function(){var u=$.cm
if(u==null){u=new V.ai(0,0,0)
$.cm=u}return u},
kq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
ea:function(){var u=$.kF
if(u==null){u=new V.O(0,0,0)
$.kF=u}return u},
kG:function(){var u=$.kE
if(u==null){u=new V.O(0,1,0)
$.kE=u}return u},
mx:function(){var u=$.hL
if(u==null){u=new V.O(0,0,1)
$.hL=u}return u},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
dA:function dA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
an:function an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.F(a,0)
t=C.c.F(b,0)
s=new V.fP()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.fX()
u.fK(a)
return u},
hk:function(){var u,t
u=new V.hj()
t=P.e
u.siU(new H.aH([t,V.cq]))
u.siY(new H.aH([t,V.cx]))
u.c=null
return u},
b_:function b_(){},
as:function as(){},
dx:function dx(){},
ao:function ao(){this.a=null},
fP:function fP(){this.b=this.a=null},
fX:function fX(){this.a=null},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b){this.a=a
this.b=b
this.c=null},
hj:function hj(){this.c=this.b=this.a=null},
cy:function cy(a){this.b=a
this.a=this.c=null},
nv:function(a){P.mo(C.W,new V.jf(a))},
mj:function(a,b){var u=new V.h0()
u.fL(a,!0)
return u},
be:function be(){},
jf:function jf(a){this.a=a},
eS:function eS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f8:function f8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fK:function fK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(a,b){this.a=a
this.b=b
this.c=null},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(){this.b=this.a=null},
h2:function h2(a){this.a=a},
h1:function h1(a){this.a=a},
h3:function h3(a){this.a=a},
hb:function hb(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(){}},U={
jn:function(){var u=new U.eM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
k5:function(a){var u=new U.da()
u.a=a
return u},
eM:function eM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d9:function d9(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},df:function df(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},av:function av(){}},A={
m0:function(a,b){var u,t
u=a.as
t=new A.dz(b,u)
t.dq(b,u)
t.fI(a,b)
return t},
jz:function(a,b,c,d,e){var u=new A.hq(a,b,c,e)
u.f=d
u.sj8(P.lZ(d,0,!1,P.m))
return u},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
dz:function dz(a,b){var _=this
_.bH=_.ep=_.bG=_.as=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eG=_.cQ=_.eF=_.bU=_.eE=_.eD=_.bT=_.bS=_.eC=_.eB=_.bR=_.bQ=_.bP=_.eA=_.ez=_.bO=_.ey=_.ex=_.bN=_.ew=_.ev=_.bM=_.bL=_.eu=_.es=_.bK=_.bJ=_.er=_.eq=_.bI=null
_.cV=_.eK=_.cU=_.eJ=_.cT=_.eI=_.cS=_.eH=_.cR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fx:function fx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aB=b3
_.as=b4
_.bG=b5},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cB:function cB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cE:function cE(a,b,c,d,e,f,g,h,i,j){var _=this
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
cF:function cF(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cp:function cp(){},
bA:function bA(a,b){this.a=a
this.b=b},
dP:function dP(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e2:function e2(){},
hw:function hw(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(a,b,c,d){var _=this
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
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
iN:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cS:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.O(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.O(o+a3,n+a1,m+a2)
u.b=l
k=new V.O(o-a3,n-a1,m-a2)
u.c=k
j=new V.O(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iN(t)
f=F.iN(u.b)
e=F.nx(d,a0,new F.iM(u,F.iN(u.c),F.iN(u.d),f,g,c),b)
if(e!=null)a.kp(e)},
nx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.aw,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.jx()
t=H.b([],[F.aw])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hM(null,null,new V.aF(p,0,0,1),null,null,new V.a4(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hM(null,null,new V.aF(j,i,h,1),null,null,new V.a4(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cM(d))}}u.d.jy(a+1,b+1,t)
return u},
cb:function(a,b,c){var u,t
u=new F.a3()
t=a.a
if(t==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.t("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a9()
return u},
lW:function(a,b){var u,t
u=new F.b2()
t=a.a
if(t==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.t("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a9()
return u},
jx:function(){var u,t
u=new F.dN()
t=new F.hN(u)
t.b=!1
t.sj9(H.b([],[F.aw]))
u.a=t
t=new F.h_(u)
t.scv(H.b([],[F.bo]))
u.b=t
t=new F.fZ(u)
t.shu(H.b([],[F.b2]))
u.c=t
t=new F.fY(u)
t.shk(H.b([],[F.a3]))
u.d=t
u.e=null
return u},
hM:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aw()
t=new F.hS(u)
t.scv(H.b([],[F.bo]))
u.b=t
t=new F.hR(u)
s=[F.b2]
t.shv(H.b([],s))
t.shw(H.b([],s))
u.c=t
t=new F.hO(u)
s=[F.a3]
t.shl(H.b([],s))
t.shm(H.b([],s))
t.shn(H.b([],s))
u.d=t
h=$.lo()
u.e=0
t=$.aL()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b9().a)!==0?e:null
u.x=(s&$.b8().a)!==0?b:null
u.y=(s&$.ba().a)!==0?f:null
u.z=(s&$.bb().a)!==0?g:null
u.Q=(s&$.lp().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.b7().a)!==0?a:null
return u},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b2:function b2(){this.b=this.a=null},
bo:function bo(){this.a=null},
dN:function dN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a){this.a=a
this.b=null},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
aw:function aw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a},
hT:function hT(a){this.a=a},
hN:function hN(a){this.a=a
this.c=this.b=null},
hO:function hO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a){this.a=a
this.c=this.b=null},
hS:function hS(a){this.a=a
this.b=null}},T={cv:function cv(){},dW:function dW(){},he:function he(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cw:function cw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hf:function hf(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hh:function hh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hg:function hg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
l6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.mj("Test 015",!0)
t=W.jl(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.e]
u.e9(H.b(["Test of Material Lighting shader with bump mapping, reflections, refractions."],s))
u.jw(H.b(["bumpMaps","controls"],s))
u.e9(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.r.c7(s,"testCanvas")
if(r==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.mn(r,!0,!0,!0,!1)
p=X.jp(!0,!0,!1,null,2000,null,0)
p.seh(0,!1)
o=E.k9(null,!0,null,"",null,null)
n=F.jx()
F.cS(n,null,null,1,1,1,0,0,1)
F.cS(n,null,null,1,1,0,1,0,3)
F.cS(n,null,null,1,1,0,0,1,2)
F.cS(n,null,null,1,1,-1,0,0,0)
F.cS(n,null,null,1,1,0,-1,0,0)
F.cS(n,null,null,1,1,0,0,-1,3)
n.aL()
o.sca(0,n)
m=q.f
l=m.a
k=l.createTexture()
C.b.ad(l,34067,k)
C.b.aE(l,34067,10242,10497)
C.b.aE(l,34067,10243,10497)
C.b.aE(l,34067,10241,9729)
C.b.aE(l,34067,10240,9729)
C.b.ad(l,34067,null)
j=new T.cw()
j.a=0
j.b=k
j.c=!1
j.d=0
m.aW(j,k,"../resources/maskonaive/posx.jpg",34069,!1,!1)
m.aW(j,k,"../resources/maskonaive/negx.jpg",34070,!1,!1)
m.aW(j,k,"../resources/maskonaive/posy.jpg",34071,!1,!1)
m.aW(j,k,"../resources/maskonaive/negy.jpg",34072,!1,!1)
m.aW(j,k,"../resources/maskonaive/posz.jpg",34073,!1,!1)
m.aW(j,k,"../resources/maskonaive/negz.jpg",34074,!1,!1)
i=new O.dy()
i.sh8(O.jm(V.an))
i.e.b5(i.ghI(),i.ghK())
m=new O.aR(i,"emission")
m.c=C.d
m.f=new V.v(0,0,0)
i.f=m
m=new O.aR(i,"ambient")
m.c=C.d
m.f=new V.v(0,0,0)
i.r=m
m=new O.aR(i,"diffuse")
m.c=C.d
m.f=new V.v(0,0,0)
i.x=m
m=new O.aR(i,"invDiffuse")
m.c=C.d
m.f=new V.v(0,0,0)
i.y=m
m=new O.fz(i,"specular")
m.c=C.d
m.f=new V.v(0,0,0)
m.ch=100
i.z=m
m=new O.fw(i,"bump")
m.c=C.d
i.Q=m
i.ch=null
m=new O.aR(i,"reflect")
m.c=C.d
m.f=new V.v(0,0,0)
i.cx=m
m=new O.fy(i,"refract")
m.c=C.d
m.f=new V.v(0,0,0)
m.ch=1
i.cy=m
m=new O.fv(i,"alpha")
m.c=C.d
m.f=1
i.db=m
m=new D.dt()
m.bw(D.a1)
m.shh(H.b([],[D.bg]))
m.siy(H.b([],[D.dI]))
m.siT(H.b([],[D.dQ]))
m.sj5(H.b([],[D.dX]))
m.sj6(H.b([],[D.dY]))
m.sj7(H.b([],[D.dZ]))
m.Q=null
m.ch=null
m.di(m.ghG(),m.gih(),m.gil())
i.dx=m
l=m.Q
if(l==null){l=D.I()
m.Q=l
m=l}else m=l
m.h(0,i.giI())
m=i.dx
l=m.ch
if(l==null){l=D.I()
m.ch=l
m=l}else m=l
l=i.gaX()
m.h(0,l)
i.dy=null
m=i.dx
h=V.kG()
g=U.k5(V.kg(V.kn(),h,new V.O(-1,-1,-1)))
f=new D.bg()
f.c=new V.v(1,1,1)
f.a=V.mx()
e=f.b
f.b=g
g.gq().h(0,f.gfQ())
g=new D.F("mover",e,f.b,f,[U.aa])
g.b=!0
f.aF(g)
d=new V.v(1,1,1)
if(!f.c.w(0,d)){e=f.c
f.c=d
g=new D.F("color",e,d,f,[V.v])
g.b=!0
f.aF(g)}m.h(0,f)
m=i.r
m.su(0,new V.v(0.1,0.1,0.1))
m=i.x
m.su(0,new V.v(0.1,0.1,0.1))
i.z.su(0,new V.v(0,0,0))
m=i.z
if(m.c===C.d){m.c=C.i
m.bu()
m.bA(100)
g=m.a
g.a=null
g.P(null)}m.bA(10)
m=i.ch
if(m!==j){if(m!=null)m.gq().X(0,l)
e=i.ch
i.ch=j
j.gq().h(0,l)
m=new D.F("environment",e,i.ch,i,[T.cw])
m.b=!0
i.P(m)}i.cy.saM(0.6)
m=i.cy
m.su(0,new V.v(0.2,0.3,1))
m=i.cx
m.su(0,new V.v(0.6,0.6,0.6))
c=new U.cd()
c.bw(U.aa)
c.b5(c.ghE(),c.gij())
c.e=null
c.f=V.bK()
c.r=0
m=q.r
l=new U.e8()
g=U.jn()
g.sdf(0,!0)
g.sd2(6.283185307179586)
g.sd4(0)
g.sag(0,0)
g.sd3(100)
g.sY(0)
g.scN(0.5)
l.b=g
f=l.gaU()
g.gq().h(0,f)
g=U.jn()
g.sdf(0,!0)
g.sd2(6.283185307179586)
g.sd4(0)
g.sag(0,0)
g.sd3(100)
g.sY(0)
g.scN(0.5)
l.c=g
g.gq().h(0,f)
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
b=new X.at(!1,!1,!1)
e=l.d
l.d=b
g=[X.at]
f=new D.F("modifiers",e,b,l,g)
f.b=!0
l.T(f)
f=l.f
if(f!==!1){l.f=!1
f=new D.F("invertX",f,!1,l,[P.L])
f.b=!0
l.T(f)}f=l.r
if(f!==!1){l.r=!1
f=new D.F("invertY",f,!1,l,[P.L])
f.b=!0
l.T(f)}l.bf(m)
c.h(0,l)
m=q.r
l=new U.e7()
f=U.jn()
f.sdf(0,!0)
f.sd2(6.283185307179586)
f.sd4(0)
f.sag(0,0)
f.sd3(100)
f.sY(0)
f.scN(0.2)
l.b=f
f.gq().h(0,l.gaU())
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
b=new X.at(!0,!1,!1)
e=l.c
l.c=b
f=new D.F("modifiers",e,b,l,g)
f.b=!0
l.T(f)
l.bf(m)
c.h(0,l)
m=q.r
l=new U.e9()
l.c=0.01
l.d=0
l.e=0
b=new X.at(!1,!1,!1)
l.b=b
g=new D.F("modifiers",null,b,l,g)
g.b=!0
l.T(g)
l.bf(m)
c.h(0,l)
c.h(0,U.k5(V.aS(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.kk(2000,1.0471975511965976,c,0.1,null)
a0=new M.db()
a0.sbg(null)
a0.sbo(0,null)
a0.sbp(null)
m=E.k9(null,!0,null,"",null,null)
n=F.jx()
l=n.a
g=new V.O(-1,-1,1)
g=g.D(0,Math.sqrt(g.I(g)))
a1=l.bD(new V.b5(1,2,4,6),new V.aF(1,0,0,1),new V.ai(-1,-1,0),new V.a4(0,1),g,null)
l=n.a
g=new V.O(1,-1,1)
g=g.D(0,Math.sqrt(g.I(g)))
a2=l.bD(new V.b5(0,3,4,6),new V.aF(0,0,1,1),new V.ai(1,-1,0),new V.a4(1,1),g,null)
l=n.a
g=new V.O(1,1,1)
g=g.D(0,Math.sqrt(g.I(g)))
a3=l.bD(new V.b5(0,2,5,6),new V.aF(0,1,0,1),new V.ai(1,1,0),new V.a4(1,0),g,null)
l=n.a
g=V.b4()
f=new V.O(-1,1,1)
f=f.D(0,Math.sqrt(f.I(f)))
a4=l.bD(new V.b5(0,2,4,7),new V.aF(1,1,0,1),new V.ai(-1,1,0),g,f,null)
n.d.jx(H.b([a1,a2,a3,a4],[F.aw]))
n.aL()
m.sca(0,n)
a0.d=m
a0.e=null
m=new O.dO()
m.b=1.0471975511965976
m.d=new V.v(1,1,1)
e=m.c
m.c=j
j.gq().h(0,m.gaX())
l=new D.F("boxTexture",e,m.c,m,[T.cw])
l.b=!0
m.P(l)
a0.sbp(m)
a0.sbo(0,p)
a0.sbg(a)
a5=new M.df()
a5.shb(0,O.jm(E.ah))
a5.d.b5(a5.ghO(),a5.ghQ())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.jp(!0,!0,!1,null,2000,null,0)
a5.sbg(null)
a5.sbo(0,a6)
a5.sbp(null)
a5.sbg(a)
a5.sbp(i)
a5.sbo(0,p)
a5.d.h(0,o)
a5.b.seh(0,!1)
m=M.av
l=H.b([a0,a5],[m])
g=new M.d9()
g.bw(m)
g.e=!1
g.f=null
g.b5(g.gio(),g.giq())
g.ac(0,l)
m=q.d
if(m!==g){if(m!=null)m.gq().X(0,q.gds())
q.d=g
g.gq().h(0,q.gds())
q.dt()}m=new V.fM("controls",!0)
l=C.r.c7(s,"controls")
m.c=l
if(l==null)H.p("Failed to find controls for RadioGroup")
m.e7(0,"Silver",new B.j2(i),!0)
m.af(0,"Gold",new B.j3(i))
m.af(0,"Glass",new B.j4(i))
m.af(0,"Blue Glass",new B.j5(i))
m.af(0,"Water Bubble",new B.j6(i))
m.af(0,"No Reflection",new B.j7(i))
m.af(0,"Pink Distort",new B.j8(i))
m.af(0,"Cloak",new B.j9(i))
m.af(0,"White and Shiny",new B.ja(i))
m=new V.hb("bumpMaps",!0,new B.jb(i,q))
s=C.r.c7(s,"bumpMaps")
m.c=s
if(s==null)H.p("Failed to find bumpMaps for Texture2DGroup")
m.af(0,"../resources/BumpMap1.png",!0)
m.h(0,"../resources/BumpMap2.png")
m.h(0,"../resources/BumpMap3.png")
m.h(0,"../resources/BumpMap4.png")
m.h(0,"../resources/BumpMap5.png")
m.h(0,"../resources/ScrewBumpMap.png")
m.h(0,"../resources/CtrlPnlBumpMap.png")
s=q.z
if(s==null){s=D.I()
q.z=s}m={func:1,ret:-1,args:[D.w]}
l=H.k(new B.jc(u,i),m)
if(s.b==null)s.sbb(H.b([],[m]))
s=s.b;(s&&C.a).h(s,l)
V.nv(q)},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ju.prototype={}
J.a9.prototype={
w:function(a,b){return a===b},
gJ:function(a){return H.cn(a)},
i:function(a){return"Instance of '"+H.bN(a)+"'"}}
J.ff.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iL:1}
J.dn.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iD:1}
J.dq.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.fJ.prototype={}
J.cG.prototype={}
J.bn.prototype={
i:function(a){var u=a[$.lc()]
if(u==null)return this.fD(a)
return"JavaScript function for "+H.j(J.al(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibj:1}
J.aP.prototype={
h:function(a,b){H.y(b,H.q(a,0))
if(!!a.fixed$length)H.p(P.Y("add"))
a.push(b)},
X:function(a,b){var u
if(!!a.fixed$length)H.p(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.a2(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u,t
H.i(b,"$il",[H.q(a,0)],"$al")
if(!!a.fixed$length)H.p(P.Y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
U:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.aN(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.p(u,t,H.j(a[t]))
return u.join(b)},
kj:function(a){return this.l(a,"")},
kb:function(a,b,c,d){var u,t,s
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.aN(a))}return t},
ka:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.L,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.d(P.aN(a))}throw H.d(H.js())},
k9:function(a,b){return this.ka(a,b,null)},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fA:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a7(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.js())},
eb:function(a,b){var u,t
H.k(b,{func:1,ret:P.L,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.d(P.aN(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a2(a[u],b))return!0
return!1},
i:function(a){return P.jr(a,"[","]")},
gV:function(a){return new J.am(a,a.length,0,[H.q(a,0)])},
gJ:function(a){return H.cn(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.Y("set length"))
if(b<0)throw H.d(P.a7(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.bX(a,b))
return a[b]},
p:function(a,b,c){H.y(c,H.q(a,0))
if(!!a.immutable$list)H.p(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bX(a,b))
a[b]=c},
$il:1,
$ia:1}
J.jt.prototype={}
J.am.prototype={
gK:function(){return this.d},
A:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.A(u))
s=this.c
if(s>=t){this.sdJ(null)
return!1}this.sdJ(u[s]);++this.c
return!0},
sdJ:function(a){this.d=H.y(a,H.q(this,0))},
$iaO:1}
J.dp.prototype={
kS:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.Y(""+a+".toInt()"))},
cW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.Y(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.Y(""+a+".round()"))},
f9:function(a,b){var u,t
if(b>20)throw H.d(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
br:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a7(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a4(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.Y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.C("0",r)},
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
bt:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e4(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.e4(a,b)},
e4:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.Y("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.e3(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iS:function(a,b){if(b<0)throw H.d(H.aC(b))
return this.e3(a,b)},
e3:function(a,b){return b>31?0:a>>>b},
$iz:1,
$iae:1}
J.dm.prototype={$im:1}
J.dl.prototype={}
J.bH.prototype={
a4:function(a,b){if(b<0)throw H.d(H.bX(a,b))
if(b>=a.length)H.p(H.bX(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.bX(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.d(P.jj(b,null,null))
return a+b},
b2:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.aC(b))
c=P.bp(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.aC(c))
if(typeof c!=="number")return c.a_()
if(c<0||c>a.length)throw H.d(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.ak(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.aC(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.d(P.fO(b,null,null))
if(b>c)throw H.d(P.fO(b,null,null))
if(c>a.length)throw H.d(P.fO(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.t(a,b,null)},
kV:function(a){return a.toLowerCase()},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.T)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kx:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.C(c,u)+a},
ap:function(a,b){return this.kx(a,b," ")},
eT:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a7(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eS:function(a,b){return this.eT(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikj:1,
$ie:1}
H.r.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a4(this.a,b)},
$acH:function(){return[P.m]},
$aT:function(){return[P.m]},
$al:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.eW.prototype={}
H.bI.prototype={
gV:function(a){return new H.cf(this,this.gm(this),0,[H.a8(this,"bI",0)])},
c3:function(a,b){return this.fC(0,H.k(b,{func:1,ret:P.L,args:[H.a8(this,"bI",0)]}))}}
H.cf.prototype={
gK:function(){return this.d},
A:function(){var u,t,s,r
u=this.a
t=J.cW(u)
s=t.gm(u)
if(this.b!==s)throw H.d(P.aN(u))
r=this.c
if(r>=s){this.sb7(null)
return!1}this.sb7(t.ae(u,r));++this.c
return!0},
sb7:function(a){this.d=H.y(a,H.q(this,0))},
$iaO:1}
H.fs.prototype={
gV:function(a){return new H.ft(J.bv(this.a),this.b,this.$ti)},
gm:function(a){return J.aD(this.a)},
ae:function(a,b){return this.b.$1(J.eD(this.a,b))},
$al:function(a,b){return[b]}}
H.ft.prototype={
A:function(){var u=this.b
if(u.A()){this.sb7(this.c.$1(u.gK()))
return!0}this.sb7(null)
return!1},
gK:function(){return this.a},
sb7:function(a){this.a=H.y(a,H.q(this,1))},
$aaO:function(a,b){return[b]}}
H.fu.prototype={
gm:function(a){return J.aD(this.a)},
ae:function(a,b){return this.b.$1(J.eD(this.a,b))},
$abI:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cI.prototype={
gV:function(a){return new H.hW(J.bv(this.a),this.b,this.$ti)}}
H.hW.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gK()))return!0
return!1},
gK:function(){return this.a.gK()}}
H.bD.prototype={}
H.cH.prototype={
p:function(a,b,c){H.y(c,H.a8(this,"cH",0))
throw H.d(P.Y("Cannot modify an unmodifiable list"))}}
H.e4.prototype={}
H.eO.prototype={
i:function(a){return P.jw(this)},
p:function(a,b,c){H.y(b,H.q(this,0))
H.y(c,H.q(this,1))
return H.lL()},
$iJ:1}
H.eP.prototype={
gm:function(a){return this.a},
bE:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bE(b))return
return this.dK(b)},
dK:function(a){return this.b[H.E(a)]},
U:function(a,b){var u,t,s,r,q
u=H.q(this,1)
H.k(b,{func:1,ret:-1,args:[H.q(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.y(this.dK(q),u))}}}
H.fQ.prototype={}
H.hn.prototype={
ao:function(a){var u,t,s
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
H.fH.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fh.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hA.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jg.prototype={
$1:function(a){if(!!J.P(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.ep.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iap:1}
H.c7.prototype={
i:function(a){return"Closure '"+H.bN(this).trim()+"'"},
$ibj:1,
gkY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ha.prototype={}
H.h4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c4.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cn(this.a)
else t=typeof u!=="object"?J.d2(u):H.cn(u)
return(t^H.cn(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bN(u)+"'")}}
H.hp.prototype={
i:function(a){return this.a}}
H.eK.prototype={
i:function(a){return this.a}}
H.fV.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aH.prototype={
gm:function(a){return this.a},
gki:function(a){return this.a===0},
gaC:function(){return new H.fk(this,[H.q(this,0)])},
bE:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dG(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dG(t,a)}else return this.kf(a)},
kf:function(a){var u=this.d
if(u==null)return!1
return this.cZ(this.cj(u,this.cY(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bx(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bx(r,b)
s=t==null?null:t.b
return s}else return this.kg(b)},
kg:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cj(u,this.cY(a))
s=this.cZ(t,a)
if(s<0)return
return t[s].b},
p:function(a,b,c){var u,t
H.y(b,H.q(this,0))
H.y(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ct()
this.b=u}this.dv(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ct()
this.c=t}this.dv(t,b,c)}else this.kh(b,c)},
kh:function(a,b){var u,t,s,r
H.y(a,H.q(this,0))
H.y(b,H.q(this,1))
u=this.d
if(u==null){u=this.ct()
this.d=u}t=this.cY(a)
s=this.cj(u,t)
if(s==null)this.cB(u,t,[this.cc(a,b)])
else{r=this.cZ(s,a)
if(r>=0)s[r].b=b
else s.push(this.cc(a,b))}},
U:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aN(this))
u=u.c}},
dv:function(a,b,c){var u
H.y(b,H.q(this,0))
H.y(c,H.q(this,1))
u=this.bx(a,b)
if(u==null)this.cB(a,b,this.cc(b,c))
else u.b=c},
h2:function(){this.r=this.r+1&67108863},
cc:function(a,b){var u,t
u=new H.fj(H.y(a,H.q(this,0)),H.y(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h2()
return u},
cY:function(a){return J.d2(a)&0x3ffffff},
cZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a2(a[t].a,b))return t
return-1},
i:function(a){return P.jw(this)},
bx:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
cB:function(a,b,c){a[b]=c},
hg:function(a,b){delete a[b]},
dG:function(a,b){return this.bx(a,b)!=null},
ct:function(){var u=Object.create(null)
this.cB(u,"<non-identifier-key>",u)
this.hg(u,"<non-identifier-key>")
return u},
$ikb:1}
H.fj.prototype={}
H.fk.prototype={
gm:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.fl(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fl.prototype={
gK:function(){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aN(u))
else{u=this.c
if(u==null){this.sdw(null)
return!1}else{this.sdw(u.a)
this.c=this.c.c
return!0}}},
sdw:function(a){this.d=H.y(a,H.q(this,0))},
$iaO:1}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.j_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.j0.prototype={
$1:function(a){return this.a(H.E(a))},
$S:30}
H.fg.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikj:1,
$imf:1}
H.bL.prototype={$ibL:1,$imp:1}
H.dB.prototype={
gm:function(a){return a.length},
$iaG:1,
$aaG:function(){}}
H.dC.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
p:function(a,b,c){H.nd(c)
H.b6(b,a,a.length)
a[b]=c},
$abD:function(){return[P.z]},
$aT:function(){return[P.z]},
$il:1,
$al:function(){return[P.z]},
$ia:1,
$aa:function(){return[P.z]}}
H.dD.prototype={
p:function(a,b,c){H.a6(c)
H.b6(b,a,a.length)
a[b]=c},
$abD:function(){return[P.m]},
$aT:function(){return[P.m]},
$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.fB.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fC.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fD.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fE.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dE.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
$inU:1}
H.ck.prototype={
gm:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
$ick:1,
$iM:1}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.hY.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:23}
P.hX.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.hZ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i_.prototype={
$0:function(){this.a.$0()},
$S:0}
P.er.prototype={
fZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bW(new P.iB(this,b),0),a)
else throw H.d(P.Y("`setTimeout()` not found."))},
h_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bW(new P.iA(this,a,Date.now(),b),0),a)
else throw H.d(P.Y("Periodic timer."))},
$iaV:1}
P.iB.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iA.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fH(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aZ.prototype={
ko:function(a){if(this.c!==6)return!0
return this.b.b.dc(H.k(this.d,{func:1,ret:P.L,args:[P.Q]}),a.a,P.L,P.Q)},
ke:function(a){var u,t,s,r
u=this.e
t=P.Q
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.eA(u,{func:1,args:[P.Q,P.ap]}))return H.jO(r.kL(u,a.a,a.b,null,t,P.ap),s)
else return H.jO(r.dc(H.k(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aA.prototype={
f8:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.W
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n0(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.W,[c])
r=b==null?1:3
this.dA(new P.aZ(s,r,a,b,[u,c]))
return s},
kR:function(a,b){return this.f8(a,null,b)},
dA:function(a){var u,t
u=this.a
if(u<=1){a.a=H.c(this.c,"$iaZ")
this.c=a}else{if(u===2){t=H.c(this.c,"$iaA")
u=t.a
if(u<4){t.dA(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iU(null,null,u,H.k(new P.i7(this,a),{func:1,ret:-1}))}},
dX:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.c(this.c,"$iaZ")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.c(this.c,"$iaA")
t=p.a
if(t<4){p.dX(a)
return}this.a=t
this.c=p.c}u.a=this.by(a)
t=this.b
t.toString
P.iU(null,null,t,H.k(new P.ib(u,this),{func:1,ret:-1}))}},
cz:function(){var u=H.c(this.c,"$iaZ")
this.c=null
return this.by(u)},
by:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dC:function(a){var u,t,s
u=H.q(this,0)
H.jO(a,{futureOr:1,type:u})
t=this.$ti
if(H.cV(a,"$icc",t,"$acc"))if(H.cV(a,"$iaA",t,null))P.kH(a,this)
else P.mC(a,this)
else{s=this.cz()
H.y(a,u)
this.a=4
this.c=a
P.cL(this,s)}},
dD:function(a,b){var u
H.c(b,"$iap")
u=this.cz()
this.a=8
this.c=new P.af(a,b)
P.cL(this,u)},
$icc:1}
P.i7.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:0}
P.ib.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:0}
P.i8.prototype={
$1:function(a){var u=this.a
u.a=0
u.dC(a)},
$S:23}
P.i9.prototype={
$2:function(a,b){H.c(b,"$iap")
this.a.dD(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.ia.prototype={
$0:function(){this.a.dD(this.b,this.c)},
$S:0}
P.ie.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f6(H.k(r.d,{func:1}),null)}catch(q){t=H.ab(q)
s=H.bZ(q)
if(this.d){r=H.c(this.a.a.c,"$iaf").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.c(this.a.a.c,"$iaf")
else p.b=new P.af(t,s)
p.a=!0
return}if(!!J.P(u).$icc){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.c(u.c,"$iaf")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kR(new P.ig(o),null)
r.a=!1}},
$S:3}
P.ig.prototype={
$1:function(a){return this.a},
$S:34}
P.id.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.y(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.dc(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ab(o)
t=H.bZ(o)
s=this.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.ic.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.c(this.a.a.c,"$iaf")
r=this.c
if(r.ko(u)&&r.e!=null){q=this.b
q.b=r.ke(u)
q.a=!1}}catch(p){t=H.ab(p)
s=H.bZ(p)
r=H.c(this.a.a.c,"$iaf")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.ed.prototype={}
P.h5.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.W,[P.m])
u.a=0
s=H.q(this,0)
r=H.k(new P.h7(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.h8(u,t),{func:1,ret:-1})
W.a0(this.a,this.b,r,!1,s)
return t}}
P.h7.prototype={
$1:function(a){H.y(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.q(this.b,0)]}}}
P.h8.prototype={
$0:function(){this.b.dC(this.a.a)},
$S:0}
P.cs.prototype={}
P.h6.prototype={}
P.aV.prototype={}
P.af.prototype={
i:function(a){return H.j(this.a)},
$ibi:1}
P.iL.prototype={$io8:1}
P.iT.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dG()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.il.prototype={
kM:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.W){a.$0()
return}P.kT(null,null,this,a,-1)}catch(s){u=H.ab(s)
t=H.bZ(s)
P.iS(null,null,this,u,H.c(t,"$iap"))}},
kN:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.l===$.W){a.$1(b)
return}P.kU(null,null,this,a,b,-1,c)}catch(s){u=H.ab(s)
t=H.bZ(s)
P.iS(null,null,this,u,H.c(t,"$iap"))}},
jE:function(a,b){return new P.io(this,H.k(a,{func:1,ret:b}),b)},
cG:function(a){return new P.im(this,H.k(a,{func:1,ret:-1}))},
ed:function(a,b){return new P.ip(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
f6:function(a,b){H.k(a,{func:1,ret:b})
if($.W===C.l)return a.$0()
return P.kT(null,null,this,a,b)},
dc:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.W===C.l)return a.$1(b)
return P.kU(null,null,this,a,b,c,d)},
kL:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.W===C.l)return a.$2(b,c)
return P.n1(null,null,this,a,b,c,d,e,f)}}
P.io.prototype={
$0:function(){return this.a.f6(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.im.prototype={
$0:function(){return this.a.kM(this.b)},
$S:3}
P.ip.prototype={
$1:function(a){var u=this.c
return this.a.kN(this.b,H.y(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ij.prototype={
gV:function(a){var u=new P.ej(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.c(u[b],"$ibR")!=null}else{t=this.hc(b)
return t}},
hc:function(a){var u=this.d
if(u==null)return!1
return this.cg(this.dL(u,a),a)>=0},
h:function(a,b){var u,t
H.y(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jE()
this.b=u}return this.dz(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jE()
this.c=t}return this.dz(t,b)}else return this.h3(b)},
h3:function(a){var u,t,s
H.y(a,H.q(this,0))
u=this.d
if(u==null){u=P.jE()
this.d=u}t=this.dE(a)
s=u[t]
if(s==null)u[t]=[this.cu(a)]
else{if(this.cg(s,a)>=0)return!1
s.push(this.cu(a))}return!0},
X:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iE(this.c,b)
else return this.iB(b)},
iB:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dL(u,a)
s=this.cg(t,a)
if(s<0)return!1
this.e5(t.splice(s,1)[0])
return!0},
dz:function(a,b){H.y(b,H.q(this,0))
if(H.c(a[b],"$ibR")!=null)return!1
a[b]=this.cu(b)
return!0},
iE:function(a,b){var u
if(a==null)return!1
u=H.c(a[b],"$ibR")
if(u==null)return!1
this.e5(u)
delete a[b]
return!0},
dQ:function(){this.r=1073741823&this.r+1},
cu:function(a){var u,t
u=new P.bR(H.y(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dQ()
return u},
e5:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dQ()},
dE:function(a){return J.d2(a)&1073741823},
dL:function(a,b){return a[this.dE(b)]},
cg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a2(a[t].a,b))return t
return-1}}
P.bR.prototype={}
P.ej.prototype={
gK:function(){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aN(u))
else{u=this.c
if(u==null){this.sdB(null)
return!1}else{this.sdB(H.y(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sdB:function(a){this.d=H.y(a,H.q(this,0))},
$iaO:1}
P.fm.prototype={
$2:function(a,b){this.a.p(0,H.y(a,this.b),H.y(b,this.c))},
$S:5}
P.fn.prototype={$il:1,$ia:1}
P.T.prototype={
gV:function(a){return new H.cf(a,this.gm(a),0,[H.cY(this,a,"T",0)])},
ae:function(a,b){return this.k(a,b)},
U:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.cY(this,a,"T",0)]})
u=this.gm(a)
for(t=0;t<u;++t){b.$1(this.k(a,t))
if(u!==this.gm(a))throw H.d(P.aN(a))}},
kU:function(a,b){var u,t
u=H.b([],[H.cY(this,a,"T",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.p(u,t,this.k(a,t))
return u},
kT:function(a){return this.kU(a,!0)},
k7:function(a,b,c,d){var u
H.y(d,H.cY(this,a,"T",0))
P.bp(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.p(a,u,d)},
i:function(a){return P.jr(a,"[","]")}}
P.fp.prototype={}
P.fq.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:5}
P.bJ.prototype={
U:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.a8(this,"bJ",0),H.a8(this,"bJ",1)]})
for(u=J.bv(this.gaC());u.A();){t=u.gK()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aD(this.gaC())},
i:function(a){return P.jw(this)},
$iJ:1}
P.iC.prototype={
p:function(a,b,c){H.y(b,H.q(this,0))
H.y(c,H.q(this,1))
throw H.d(P.Y("Cannot modify unmodifiable map"))}}
P.fr.prototype={
k:function(a,b){return this.a.k(0,b)},
p:function(a,b,c){this.a.p(0,H.y(b,H.q(this,0)),H.y(c,H.q(this,1)))},
U:function(a,b){this.a.U(0,H.k(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.al(this.a)},
$iJ:1}
P.e5.prototype={}
P.ir.prototype={
ac:function(a,b){var u
for(u=J.bv(H.i(b,"$il",this.$ti,"$al"));u.A();)this.h(0,u.gK())},
i:function(a){return P.jr(this,"{","}")},
ae:function(a,b){var u,t,s
if(b<0)H.p(P.a7(b,0,null,"index",null))
for(u=P.mG(this,this.r,H.q(this,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.bG(b,this,"index",null,t))},
$il:1,
$iks:1}
P.ek.prototype={}
P.ev.prototype={}
P.eG.prototype={
kq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.bp(b,c,a.length,null,null,null)
u=$.lr()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.F(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iY(C.c.F(a,n))
j=H.iY(C.c.F(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.c.a4("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ac("")
g=r.a+=C.c.t(a,s,t)
r.a=g+H.bO(m)
s=n
continue}}throw H.d(P.Z("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.t(a,s,c)
f=g.length
if(q>=0)P.k0(a,p,c,q,o,f)
else{e=C.f.bt(f-1,4)+1
if(e===1)throw H.d(P.Z("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b2(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.k0(a,p,c,q,o,d)
else{e=C.f.bt(d,4)
if(e===1)throw H.d(P.Z("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b2(a,c,c,e===2?"==":"=")}return a},
$abz:function(){return[[P.a,P.m],P.e]}}
P.eH.prototype={
$abf:function(){return[[P.a,P.m],P.e]}}
P.bz.prototype={}
P.bf.prototype={}
P.eY.prototype={
$abz:function(){return[P.e,[P.a,P.m]]}}
P.fb.prototype={
i:function(a){return this.a}}
P.fa.prototype={
hd:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.f(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.ac("")
if(r>b)q.a+=C.c.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lE(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abf:function(){return[P.e,P.e]}}
P.hI.prototype={
gk6:function(){return C.U}}
P.hK.prototype={
bh:function(a,b,c){var u,t,s
c=P.bp(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iJ(t)
if(s.ho(a,b,c)!==c)s.e6(J.ly(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mW(0,s.b,t.length)))},
cL:function(a){return this.bh(a,0,null)},
$abf:function(){return[P.e,[P.a,P.m]]}}
P.iJ.prototype={
e6:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.f(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.f(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.f(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.f(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.f(u,t)
u[t]=128|a&63
return!1}},
ho:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a4(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.F(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e6(r,C.c.F(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.hJ.prototype={
bh:function(a,b,c){var u,t,s,r
H.i(a,"$ia",[P.m],"$aa")
u=P.ms(!1,a,b,c)
if(u!=null)return u
c=P.bp(b,c,J.aD(a),null,null,null)
t=new P.ac("")
s=new P.iH(!1,t)
s.bh(a,b,c)
if(s.e>0){H.p(P.Z("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bO(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cL:function(a){return this.bh(a,0,null)},
$abf:function(){return[[P.a,P.m],P.e]}}
P.iH.prototype={
bh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.i(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iI(this,b,c,a)
$label0$0:for(q=J.cW(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.c5()
if((n&192)!==128){m=P.Z("Bad UTF-8 encoding 0x"+C.f.br(n,16),a,o)
throw H.d(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.I,m)
if(u<=C.I[m]){m=P.Z("Overlong encoding of 0x"+C.f.br(u,16),a,o-s-1)
throw H.d(m)}if(u>1114111){m=P.Z("Character outside valid Unicode range: 0x"+C.f.br(u,16),a,o-s-1)
throw H.d(m)}if(!this.c||u!==65279)p.a+=H.bO(u)
this.c=!1}for(m=o<c;m;){l=P.n2(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.a_()
if(n<0){i=P.Z("Negative UTF-8 code unit: -0x"+C.f.br(-n,16),a,j-1)
throw H.d(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.Z("Bad UTF-8 encoding 0x"+C.f.br(n,16),a,j-1)
throw H.d(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iI.prototype={
$2:function(a,b){this.a.b.a+=P.dS(this.d,a,b)},
$S:42}
P.L.prototype={}
P.ag.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aZ(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lM(H.ma(this))
t=P.dc(H.m8(this))
s=P.dc(H.m4(this))
r=P.dc(H.m5(this))
q=P.dc(H.m7(this))
p=P.dc(H.m9(this))
o=P.lN(H.m6(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.bh.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.bh&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eV()
t=this.a
if(t<0)return"-"+new P.bh(0-t).i(0)
s=u.$1(C.f.a8(t,6e7)%60)
r=u.$1(C.f.a8(t,1e6)%60)
q=new P.eU().$1(t%1e6)
return""+C.f.a8(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:25}
P.eV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:25}
P.bi.prototype={}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gcf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gce:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcf()+t+s
if(!this.a)return r
q=this.gce()
p=P.f_(this.b)
return r+q+": "+p}}
P.bP.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fd.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.a_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hB.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hy.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cr.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.f_(u)+"."}}
P.fI.prototype={
i:function(a){return"Out of Memory"},
$ibi:1}
P.dR.prototype={
i:function(a){return"Stack Overflow"},
$ibi:1}
P.eR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eg.prototype={
i:function(a){return"Exception: "+this.a}}
P.f6.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.t(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.F(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a4(r,m)
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
g=""}f=C.c.t(r,i,j)
return t+h+f+g+"\n"+C.c.C(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bj.prototype={}
P.m.prototype={}
P.l.prototype={
c3:function(a,b){var u=H.a8(this,"l",0)
return new H.cI(this,H.k(b,{func:1,ret:P.L,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gV(this)
for(t=0;u.A();)++t
return t},
gaS:function(a){var u,t
u=this.gV(this)
if(!u.A())throw H.d(H.js())
t=u.gK()
if(u.A())throw H.d(H.lT())
return t},
ae:function(a,b){var u,t,s
if(b<0)H.p(P.a7(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.A();){s=u.gK()
if(b===t)return s;++t}throw H.d(P.bG(b,this,"index",null,t))},
i:function(a){return P.lS(this,"(",")")}}
P.aO.prototype={}
P.a.prototype={$il:1}
P.J.prototype={}
P.D.prototype={
gJ:function(a){return P.Q.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
w:function(a,b){return this===b},
gJ:function(a){return H.cn(this)},
i:function(a){return"Instance of '"+H.bN(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.e.prototype={$ikj:1}
P.ac.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inI:1}
P.hH.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.i(a,"$iJ",[u,u],"$aJ")
H.E(b)
t=J.cX(b).eS(b,"=")
if(t===-1){if(b!=="")a.p(0,P.jG(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.t(b,0,t)
r=C.c.aw(b,t+1)
u=this.a
a.p(0,P.jG(s,0,s.length,u,!0),P.jG(r,0,r.length,u,!0))}return a},
$S:47}
P.hD.prototype={
$2:function(a,b){throw H.d(P.Z("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.hF.prototype={
$2:function(a,b){throw H.d(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:35}
P.hG.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cZ(C.c.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.bS.prototype={
gfe:function(){return this.b},
gcX:function(a){var u=this.c
if(u==null)return""
if(C.c.a7(u,"["))return C.c.t(u,1,u.length-1)
return u},
gbX:function(a){var u=this.d
if(u==null)return P.kL(this.a)
return u},
gd8:function(){var u=this.f
return u==null?"":u},
geN:function(){var u=this.r
return u==null?"":u},
da:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.i(h,"$iJ",[P.e,null],"$aJ")
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
if(s&&!C.c.a7(d,"/"))d="/"+d
g=P.jF(g,0,0,h)
return new P.bS(i,j,c,f,d,g,this.r)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gbn:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siA(new P.e5(P.kB(u==null?"":u,C.m),[t,t]))}return this.Q},
geO:function(){return this.c!=null},
geR:function(){return this.f!=null},
geP:function(){return this.r!=null},
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
if(!!J.P(b).$ijA)if(this.a==b.gc9())if(this.c!=null===b.geO())if(this.b==b.gfe())if(this.gcX(this)==b.gcX(b))if(this.gbX(this)==b.gbX(b))if(this.e===b.gf2(b)){u=this.f
t=u==null
if(!t===b.geR()){if(t)u=""
if(u===b.gd8()){u=this.r
t=u==null
if(!t===b.geP()){if(t)u=""
u=u===b.geN()}else u=!1}else u=!1}else u=!1}else u=!1
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
siA:function(a){var u=P.e
this.Q=H.i(a,"$iJ",[u,u],"$aJ")},
$ijA:1,
gc9:function(){return this.a},
gf2:function(a){return this.e}}
P.iD.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.H()
throw H.d(P.Z("Invalid port",this.a,u+1))},
$S:15}
P.iE.prototype={
$1:function(a){return P.ew(C.aa,a,C.m,!1)},
$S:13}
P.iG.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.ew(C.x,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.ew(C.x,b,C.m,!0))}},
$S:43}
P.iF.prototype={
$2:function(a,b){var u,t
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(u=J.bv(H.l5(b,"$il")),t=this.a;u.A();)t.$2(a,H.E(u.gK()))},
$S:41}
P.hC.prototype={
gfd:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.c.eT(t,"?",u)
r=t.length
if(s>=0){q=P.cR(t,s+1,r,C.v,!1)
r=s}else q=null
u=new P.i2(this,"data",null,null,null,P.cR(t,u,r,C.M,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iP.prototype={
$1:function(a){return new Uint8Array(96)},
$S:52}
P.iO.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.lz(u,0,96,b)
return u},
$S:40}
P.iQ.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.F(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.iR.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.F(b,0),t=C.c.F(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.iu.prototype={
geO:function(){return this.c>0},
geQ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.H()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
geR:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
geP:function(){return this.r<this.a.length},
gdO:function(){return this.b===4&&C.c.a7(this.a,"http")},
gdP:function(){return this.b===5&&C.c.a7(this.a,"https")},
gc9:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdO()){this.x="http"
u="http"}else if(this.gdP()){this.x="https"
u="https"}else if(u===4&&C.c.a7(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a7(this.a,"package")){this.x="package"
u="package"}else{u=C.c.t(this.a,0,u)
this.x=u}return u},
gfe:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.t(this.a,t,u-1):""},
gcX:function(a){var u=this.c
return u>0?C.c.t(this.a,u,this.d):""},
gbX:function(a){var u
if(this.geQ()){u=this.d
if(typeof u!=="number")return u.H()
return P.cZ(C.c.t(this.a,u+1,this.e),null,null)}if(this.gdO())return 80
if(this.gdP())return 443
return 0},
gf2:function(a){return C.c.t(this.a,this.e,this.f)},
gd8:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.c.t(this.a,u+1,t):""},
geN:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aw(t,u+1):""},
gbn:function(){var u=this.f
if(typeof u!=="number")return u.a_()
if(u>=this.r)return C.ab
u=P.e
return new P.e5(P.kB(this.gd8(),C.m),[u,u])},
da:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.i(h,"$iJ",[P.e,null],"$aJ")
i=this.gc9()
u=i==="file"
t=this.c
j=t>0?C.c.t(this.a,this.b+3,t):""
f=this.geQ()?this.gbX(this):null
t=this.c
if(t>0)c=C.c.t(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.t(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a7(d,"/"))d="/"+d
g=P.jF(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aw(t,s+1)
return new P.bS(i,j,c,f,d,g,b)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ijA&&this.a===b.i(0)},
i:function(a){return this.a},
$ijA:1}
P.i2.prototype={}
W.x.prototype={}
W.d3.prototype={
i:function(a){return String(a)},
$id3:1}
W.eE.prototype={
i:function(a){return String(a)}}
W.c3.prototype={$ic3:1}
W.bc.prototype={$ibc:1}
W.bx.prototype={
c6:function(a,b,c){if(c!=null)return this.hp(a,b,P.n9(c,null))
return this.hq(a,b)},
fk:function(a,b){return this.c6(a,b,null)},
hp:function(a,b,c){return a.getContext(b,c)},
hq:function(a,b){return a.getContext(b)},
$ibx:1,
$ik3:1}
W.by.prototype={
hr:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k0:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iby:1}
W.bd.prototype={
gm:function(a){return a.length}}
W.c8.prototype={
gm:function(a){return a.length}}
W.eQ.prototype={}
W.ax.prototype={$iax:1}
W.c9.prototype={
jA:function(a,b){return a.adoptNode(b)},
c7:function(a,b){return a.getElementById(b)}}
W.eT.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
jR:function(a,b){return a.createHTMLDocument(b)}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.cV(b,"$iay",[P.ae],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbW(b)&&a.top===u.gc0(b)&&a.width===u.gc4(b)&&a.height===u.gbV(b)},
gJ:function(a){return W.kJ(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gee:function(a){return a.bottom},
gbV:function(a){return a.height},
gbW:function(a){return a.left},
gc_:function(a){return a.right},
gc0:function(a){return a.top},
gc4:function(a){return a.width},
$iay:1,
$aay:function(){return[P.ae]}}
W.i1.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.c(u[b],"$iH")},
p:function(a,b,c){var u
H.c(c,"$iH")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.jh(this.a,c,u[b])},
h:function(a,b){J.jY(this.a,b)
return b},
gV:function(a){var u=this.kT(this)
return new J.am(u,u.length,0,[H.q(u,0)])},
$aT:function(){return[W.H]},
$al:function(){return[W.H]},
$aa:function(){return[W.H]}}
W.H.prototype={
gjD:function(a){return new W.i3(a)},
gcK:function(a){return new W.i1(a,a.children)},
gei:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.ay(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k8
if(u==null){u=H.b([],[W.au])
t=new W.dF(u)
C.a.h(u,W.kI(null))
C.a.h(u,W.kK())
$.k8=t
d=t}else d=u
u=$.k7
if(u==null){u=new W.ex(d)
$.k7=u
c=u}else{u.a=d
c=u}}if($.b0==null){u=document
t=u.implementation
t=(t&&C.V).jR(t,"")
$.b0=t
$.jo=t.createRange()
t=$.b0
t.toString
t=t.createElement("base")
H.c(t,"$ic3")
t.href=u.baseURI
u=$.b0.head;(u&&C.X).B(u,t)}u=$.b0
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.c(t,"$ibc")}u=$.b0
if(!!this.$ibc)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b0.body;(u&&C.p).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a8,a.tagName)){u=$.jo;(u&&C.O).fs(u,s)
u=$.jo
r=(u&&C.O).jP(u,b)}else{s.innerHTML=b
r=$.b0.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.b0.body
if(s==null?u!=null:s!==u)J.jZ(s)
c.dh(r)
C.r.jA(document,r)
return r},
jQ:function(a,b,c){return this.an(a,b,c,null)},
fv:function(a,b,c,d){a.textContent=null
this.B(a,this.an(a,b,c,d))},
fu:function(a,b){return this.fv(a,b,null,null)},
b4:function(a,b){return a.getAttribute(b)},
iC:function(a,b){return a.removeAttribute(b)},
ft:function(a,b,c){return a.setAttribute(b,c)},
$iH:1,
gkO:function(a){return a.tagName}}
W.eX.prototype={
$1:function(a){return!!J.P(H.c(a,"$iB")).$iH},
$S:18}
W.n.prototype={$in:1}
W.bC.prototype={
h4:function(a,b,c,d){return a.addEventListener(b,H.bW(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ibC:1}
W.f5.prototype={
gm:function(a){return a.length}}
W.di.prototype={}
W.dj.prototype={
dY:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bE.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bG(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iB")
throw H.d(P.Y("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$ibE:1,
$aar:function(){return[W.B]}}
W.dk.prototype={}
W.b1.prototype={$ib1:1,
gej:function(a){return a.data}}
W.bF.prototype={$ibF:1,$ik3:1}
W.ce.prototype={$ice:1}
W.aQ.prototype={$iaQ:1}
W.ds.prototype={}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.ci.prototype={}
W.a_.prototype={$ia_:1}
W.ak.prototype={
gaS:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.d(P.kt("No elements"))
if(t>1)throw H.d(P.kt("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s,r,q
H.i(b,"$il",[W.B],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
p:function(a,b,c){var u,t
H.c(c,"$iB")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.jh(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dg(u,u.length,-1,[H.cY(C.ac,u,"ar",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$aT:function(){return[W.B]},
$al:function(){return[W.B]},
$aa:function(){return[W.B]}}
W.B.prototype={
kG:function(a){var u=a.parentNode
if(u!=null)J.eC(u,a)},
kI:function(a,b){var u,t
try{u=a.parentNode
J.jh(u,b,a)}catch(t){H.ab(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fB(a):u},
B:function(a,b){return a.appendChild(H.c(b,"$iB"))},
iD:function(a,b){return a.removeChild(b)},
iG:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cl.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bG(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iB")
throw H.d(P.Y("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aar:function(){return[W.B]}}
W.dK.prototype={
jP:function(a,b){return a.createContextualFragment(b)},
fs:function(a,b){return a.selectNodeContents(b)}}
W.fW.prototype={
gm:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.dT.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.cb(a,b,c,d)
u=W.lO("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ak(t).ac(0,new W.ak(u))
return t},
ht:function(a,b){return a.insertRow(b)}}
W.dU.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.an(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.gaS(u)
s.toString
u=new W.ak(s)
r=u.gaS(u)
t.toString
r.toString
new W.ak(t).ac(0,new W.ak(r))
return t},
dN:function(a,b){return a.insertCell(b)}}
W.h9.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.cb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.an(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.gaS(u)
t.toString
s.toString
new W.ak(t).ac(0,new W.ak(s))
return t}}
W.cu.prototype={$icu:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.hm.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bG(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iaI")
throw H.d(P.Y("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.aI]},
$aT:function(){return[W.aI]},
$il:1,
$al:function(){return[W.aI]},
$ia:1,
$aa:function(){return[W.aI]},
$aar:function(){return[W.aI]}}
W.br.prototype={}
W.hV.prototype={$ik3:1}
W.aY.prototype={
gjX:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.Y("deltaY is not supported"))},
gjW:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.Y("deltaX is not supported"))},
$iaY:1}
W.cJ.prototype={
iH:function(a,b){return a.requestAnimationFrame(H.bW(H.k(b,{func:1,ret:-1,args:[P.ae]}),1))},
hi:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cK.prototype={$icK:1}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.cV(b,"$iay",[P.ae],"$aay"))return!1
u=J.a5(b)
return a.left===u.gbW(b)&&a.top===u.gc0(b)&&a.width===u.gc4(b)&&a.height===u.gbV(b)},
gJ:function(a){return W.kJ(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gbV:function(a){return a.height},
gc4:function(a){return a.width}}
W.el.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bG(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iB")
throw H.d(P.Y("Cannot assign element of immutable List."))},
ae:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaG:1,
$aaG:function(){return[W.B]},
$aT:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aar:function(){return[W.B]}}
W.i0.prototype={
U:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gaC(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.b4(s,p))}},
gaC:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.c(u[r],"$icK")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abJ:function(){return[P.e,P.e]},
$aJ:function(){return[P.e,P.e]}}
W.i3.prototype={
k:function(a,b){return J.ji(this.a,H.E(b))},
p:function(a,b,c){J.lD(this.a,b,c)},
gm:function(a){return this.gaC().length}}
W.i4.prototype={}
W.jD.prototype={}
W.i5.prototype={}
W.i6.prototype={
$1:function(a){return this.a.$1(H.c(a,"$in"))},
$S:37}
W.bs.prototype={
fO:function(a){var u,t
u=$.jX()
if(u.gki(u)){for(t=0;t<262;++t)u.p(0,C.a7[t],W.nh())
for(t=0;t<12;++t)u.p(0,C.B[t],W.ni())}},
b_:function(a){return $.ls().Z(0,W.ca(a))},
az:function(a,b,c){var u,t,s
u=W.ca(a)
t=$.jX()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jL(s.$4(a,b,c,this))},
$iau:1}
W.ar.prototype={
gV:function(a){return new W.dg(a,this.gm(a),-1,[H.cY(this,a,"ar",0)])}}
W.dF.prototype={
b_:function(a){return C.a.eb(this.a,new W.fG(a))},
az:function(a,b,c){return C.a.eb(this.a,new W.fF(a,b,c))},
$iau:1}
W.fG.prototype={
$1:function(a){return H.c(a,"$iau").b_(this.a)},
$S:19}
W.fF.prototype={
$1:function(a){return H.c(a,"$iau").az(this.a,this.b,this.c)},
$S:19}
W.eo.prototype={
fY:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.c3(0,new W.is())
t=b.c3(0,new W.it())
this.b.ac(0,u)
s=this.c
s.ac(0,C.J)
s.ac(0,t)},
b_:function(a){return this.a.Z(0,W.ca(a))},
az:function(a,b,c){var u,t
u=W.ca(a)
t=this.c
if(t.Z(0,H.j(u)+"::"+b))return this.d.jB(c)
else if(t.Z(0,"*::"+b))return this.d.jB(c)
else{t=this.b
if(t.Z(0,H.j(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.j(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iau:1}
W.is.prototype={
$1:function(a){return!C.a.Z(C.B,H.E(a))},
$S:20}
W.it.prototype={
$1:function(a){return C.a.Z(C.B,H.E(a))},
$S:20}
W.iy.prototype={
az:function(a,b,c){if(this.fG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.iz.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.E(a))},
$S:13}
W.ix.prototype={
b_:function(a){var u=J.P(a)
if(!!u.$ico)return!1
u=!!u.$io
if(u&&W.ca(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.c.a7(b,"on"))return!1
return this.b_(a)},
$iau:1}
W.dg.prototype={
A:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdM(J.lv(this.a,u))
this.c=u
return!0}this.sdM(null)
this.c=t
return!1},
gK:function(){return this.d},
sdM:function(a){this.d=H.y(a,H.q(this,0))},
$iaO:1}
W.au.prototype={}
W.iq.prototype={$inV:1}
W.ex.prototype={
dh:function(a){new W.iK(this).$2(a,null)},
bd:function(a,b){if(b==null)J.jZ(a)
else J.eC(b,a)},
iL:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lA(a)
s=J.ji(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ab(o)}q="element unprintable"
try{q=J.al(a)}catch(o){H.ab(o)}try{p=W.ca(a)
this.iK(H.c(a,"$iH"),b,u,q,p,H.c(t,"$iJ"),H.E(s))}catch(o){if(H.ab(o) instanceof P.aE)throw o
else{this.bd(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bd(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b_(a)){this.bd(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.az(a,"is",g)){this.bd(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaC()
t=H.b(u.slice(0),[H.q(u,0)])
for(s=f.gaC().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.az(a,J.lF(q),r.b4(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b4(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b4(u,q)
r.iC(u,q)}}if(!!J.P(a).$icu)this.dh(a.content)},
$inG:1}
W.iK.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iL(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bd(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ab(r)
q=H.c(u,"$iB")
if(s){p=q.parentNode
if(p!=null)J.eC(p,q)}else J.eC(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.c(t,"$iB")}},
$S:53}
W.ee.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.em.prototype={}
W.en.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ey.prototype={}
W.ez.prototype={}
P.iv.prototype={
eL:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
c2:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.P(a)
if(!!t.$iag)return new Date(a.a)
if(!!t.$imf)throw H.d(P.hz("structured clone of RegExp"))
if(!!t.$ib1)return a
if(!!t.$ibL)return a
if(!!t.$iJ){s=this.eL(a)
t=this.b
if(s>=t.length)return H.f(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.p(t,s,r)
a.U(0,new P.iw(u,this))
return u.a}if(!!t.$ia){s=this.eL(a)
u=this.b
if(s>=u.length)return H.f(u,s)
r=u[s]
if(r!=null)return r
return this.jO(a,s)}throw H.d(P.hz("structured clone of other type"))},
jO:function(a,b){var u,t,s,r
u=J.cW(a)
t=u.gm(a)
s=new Array(t)
C.a.p(this.b,b,s)
for(r=0;r<t;++r)C.a.p(s,r,this.c2(u.k(a,r)))
return s}}
P.iw.prototype={
$2:function(a,b){this.a.a[a]=this.b.c2(b)},
$S:5}
P.eu.prototype={$ib1:1,
gej:function(a){return this.a}}
P.iV.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.eq.prototype={}
P.f2.prototype={
gb9:function(){var u,t,s
u=this.b
t=H.a8(u,"T",0)
s=W.H
return new H.fs(new H.cI(u,H.k(new P.f3(),{func:1,ret:P.L,args:[t]}),[t]),H.k(new P.f4(),{func:1,ret:s,args:[t]}),[t,s])},
U:function(a,b){H.k(b,{func:1,ret:-1,args:[W.H]})
C.a.U(P.kf(this.gb9(),!1,W.H),b)},
p:function(a,b,c){var u
H.c(c,"$iH")
u=this.gb9()
J.lC(u.b.$1(J.eD(u.a,b)),c)},
h:function(a,b){J.jY(this.b.a,b)},
gm:function(a){return J.aD(this.gb9().a)},
k:function(a,b){var u=this.gb9()
return u.b.$1(J.eD(u.a,b))},
gV:function(a){var u=P.kf(this.gb9(),!1,W.H)
return new J.am(u,u.length,0,[H.q(u,0)])},
$aT:function(){return[W.H]},
$al:function(){return[W.H]},
$aa:function(){return[W.H]}}
P.f3.prototype={
$1:function(a){return!!J.P(H.c(a,"$iB")).$iH},
$S:18}
P.f4.prototype={
$1:function(a){return H.h(H.c(a,"$iB"),"$iH")},
$S:46}
P.ik.prototype={
gc_:function(a){var u=this.a
if(typeof u!=="number")return u.H()
return H.y(u+this.c,H.q(this,0))},
gee:function(a){var u=this.b
if(typeof u!=="number")return u.H()
return H.y(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cV(b,"$iay",[P.ae],"$aay")){u=this.a
t=J.a5(b)
if(u==t.gbW(b)){s=this.b
if(s==t.gc0(b)){if(typeof u!=="number")return u.H()
r=H.q(this,0)
if(H.y(u+this.c,r)===t.gc_(b)){if(typeof s!=="number")return s.H()
u=H.y(s+this.d,r)===t.gee(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.d2(u)
s=this.b
r=J.d2(s)
if(typeof u!=="number")return u.H()
q=H.q(this,0)
u=C.f.gJ(H.y(u+this.c,q))
if(typeof s!=="number")return s.H()
q=C.f.gJ(H.y(s+this.d,q))
return P.mF(P.ii(P.ii(P.ii(P.ii(0,t),r),u),q))}}
P.ay.prototype={
gbW:function(a){return this.a},
gc0:function(a){return this.b},
gc4:function(a){return this.c},
gbV:function(a){return this.d}}
P.co.prototype={$ico:1}
P.o.prototype={
gcK:function(a){return new P.f2(a,new W.ak(a))},
an:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.au])
C.a.h(u,W.kI(null))
C.a.h(u,W.kK())
C.a.h(u,new W.ix())
c=new W.ex(new W.dF(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jQ(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ak(r)
p=u.gaS(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$io:1}
P.M.prototype={$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$imp:1}
P.d6.prototype={$id6:1}
P.dh.prototype={$idh:1}
P.dJ.prototype={$idJ:1}
P.bQ.prototype={
bC:function(a,b){return a.activeTexture(b)},
ec:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
jF:function(a,b,c){return a.bindFramebuffer(b,c)},
ad:function(a,b,c){return a.bindTexture(b,c)},
jG:function(a,b,c){return a.blendFunc(b,c)},
ef:function(a,b,c,d){return a.bufferData(b,c,d)},
jJ:function(a,b){return a.clear(b)},
jK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jL:function(a,b){return a.clearDepth(b)},
jM:function(a,b){return a.compileShader(b)},
jS:function(a,b){return a.createShader(b)},
jU:function(a,b){return a.deleteProgram(b)},
jV:function(a,b){return a.deleteShader(b)},
jY:function(a,b){return a.depthFunc(b)},
jZ:function(a,b){return a.disable(b)},
el:function(a,b){return a.disableVertexAttribArray(b)},
k_:function(a,b,c,d,e){return a.drawElements(b,c,H.a6(d),H.a6(e))},
cP:function(a,b){return a.enable(b)},
eo:function(a,b){return a.enableVertexAttribArray(b)},
ff:function(a,b){return a.generateMipmap(b)},
fg:function(a,b,c){return a.getActiveAttrib(b,c)},
fh:function(a,b,c){return a.getActiveUniform(b,c)},
fi:function(a,b,c){return a.getAttribLocation(b,c)},
dg:function(a,b){return a.getParameter(b)},
fl:function(a,b){return a.getProgramInfoLog(b)},
c8:function(a,b,c){return a.getProgramParameter(b,c)},
fm:function(a,b){return a.getShaderInfoLog(b)},
fn:function(a,b,c){return a.getShaderParameter(b,c)},
fo:function(a,b,c){return a.getUniformLocation(b,c)},
kk:function(a,b){return a.linkProgram(b)},
f3:function(a,b,c){return a.pixelStorei(b,c)},
fz:function(a,b,c){return a.shaderSource(b,c)},
kP:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.P(g)
if(!!u.$ib1)t=!0
else t=!1
if(t){this.iW(a,b,c,d,e,f,P.na(g))
return}if(!!u.$ibF)u=!0
else u=!1
if(u){this.iX(a,b,c,d,e,f,g)
return}throw H.d(P.d4("Incorrect number or type of arguments"))},
f7:function(a,b,c,d,e,f,g){return this.kP(a,b,c,d,e,f,g,null,null,null)},
iW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aE:function(a,b,c,d){return a.texParameteri(b,c,d)},
M:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
de:function(a,b){return a.useProgram(b)},
kW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kX:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibQ:1}
P.dM.prototype={$idM:1}
P.dV.prototype={$idV:1}
P.e3.prototype={$ie3:1}
O.X.prototype={
bw:function(a){this.shx(H.b([],[a]))
this.sdV(null)
this.sdR(null)
this.sdW(null)},
di:function(a,b,c){var u=H.a8(this,"X",0)
H.k(b,{func:1,ret:P.L,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.m,[P.l,u]]}
H.k(a,u)
H.k(c,u)
this.sdV(b)
this.sdR(a)
this.sdW(c)},
b5:function(a,b){return this.di(a,null,b)},
dU:function(a){var u
H.i(a,"$il",[H.a8(this,"X",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dr:function(a,b){var u
H.i(b,"$il",[H.a8(this,"X",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.am(u,u.length,0,[H.q(u,0)])},
ae:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a8(this,"X",0)
H.y(b,u)
u=[u]
if(this.dU(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dr(s,H.b([b],u))}},
ac:function(a,b){var u,t
H.i(b,"$il",[H.a8(this,"X",0)],"$al")
if(this.dU(b)){u=this.a
t=u.length
C.a.ac(u,b)
this.dr(t,b)}},
shx:function(a){this.a=H.i(a,"$ia",[H.a8(this,"X",0)],"$aa")},
sdV:function(a){this.b=H.k(a,{func:1,ret:P.L,args:[[P.l,H.a8(this,"X",0)]]})},
sdR:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a8(this,"X",0)]]})},
sdW:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a8(this,"X",0)]]})},
$il:1}
O.ch.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
fM:function(a){var u=this.b
if(u!=null)u.G(a)},
aT:function(){return this.fM(null)},
ga5:function(){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.bK()},
bZ:function(a){var u=this.a
if(a==null)C.a.h(u,V.bK())
else C.a.h(u,a)
this.aT()},
aP:function(){var u=this.a
if(u.length>0){u.pop()
this.aT()}},
scl:function(a){this.a=H.i(a,"$ia",[V.an],"$aa")}}
E.eI.prototype={}
E.ah.prototype={
sca:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().X(0,this.gf_())
t=this.c
if(t!=null)t.gq().h(0,this.gf_())
s=new D.F("shape",u,this.c,this,[F.dN])
s.b=!0
this.b1(s)}},
av:function(a){var u
for(u=this.y.a,u=new J.am(u,u.length,0,[H.q(u,0)]);u.A();)u.d.av(a)},
ai:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga5())
u.aT()
a.d7(this.f)
u=a.dy
t=(u&&C.a).gaD(u)
if(t!=null&&this.d!=null)t.f4(a,this)
for(u=this.y.a,u=new J.am(u,u.length,0,[H.q(u,0)]);u.A();)u.d.ai(a)
a.d6()
a.dx.aP()},
gq:function(){var u=this.z
if(u==null){u=D.I()
this.z=u}return u},
b1:function(a){var u=this.z
if(u!=null)u.G(a)},
a9:function(){return this.b1(null)},
f0:function(a){H.c(a,"$iw")
this.e=null
this.b1(a)},
kw:function(){return this.f0(null)},
eZ:function(a){this.b1(H.c(a,"$iw"))},
kt:function(){return this.eZ(null)},
ks:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$il",[E.ah],"$al")
for(u=b.length,t=this.geY(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bB()
o.sal(null)
o.sbb(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sal(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a9()},
kv:function(a,b){var u,t
H.i(b,"$il",[E.ah],"$al")
for(u=b.gV(b),t=this.geY();u.A();)u.gK().gq().X(0,t)
this.a9()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfN:function(a,b){this.y=H.i(b,"$iX",[E.ah],"$aX")},
$iaT:1}
E.fR.prototype={
fJ:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ag(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ch()
t=[V.an]
u.scl(H.b([],t))
u.b=null
u.gq().h(0,new E.fS(this))
this.cy=u
u=new O.ch()
u.scl(H.b([],t))
u.b=null
u.gq().h(0,new E.fT(this))
this.db=u
u=new O.ch()
u.scl(H.b([],t))
u.b=null
u.gq().h(0,new E.fU(this))
this.dx=u
this.siV(H.b([],[O.bq]))
u=this.dy;(u&&C.a).h(u,null)
this.siR(new H.aH([P.e,A.cp]))},
gkF:function(){var u=this.z
if(u==null){u=this.cy.ga5().C(0,this.db.ga5())
this.z=u}return u},
d7:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
d6:function(){var u=this.dy
if(u.length>1)u.pop()},
ea:function(a){var u=a.b
if(u.length===0)throw H.d(P.t("May not cache a shader with no name."))
if(this.fr.bE(u))throw H.d(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.p(0,u,a)},
siV:function(a){this.dy=H.i(a,"$ia",[O.bq],"$aa")},
siR:function(a){this.fr=H.i(a,"$iJ",[P.e,A.cp],"$aJ")}}
E.fS.prototype={
$1:function(a){var u
H.c(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.fT.prototype={
$1:function(a){var u
H.c(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.fU.prototype={
$1:function(a){var u
H.c(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.e_.prototype={
du:function(a){H.c(a,"$iw")
this.f5()},
dt:function(){return this.du(null)},
gkd:function(){var u,t,s
u=Date.now()
t=C.f.a8(P.k6(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ag(u,!1)
return s/t},
e_:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.C()
if(typeof u!=="number")return H.C(u)
s=C.j.cW(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.C()
r=C.j.cW(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kw(C.z,this.gkJ())}},
f5:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hi(this),{func:1,ret:-1,args:[P.ae]})
C.Q.hi(u)
C.Q.iH(u,W.kY(t,P.ae))}},
kH:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e_()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ag(r,!1)
s.y=P.k6(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aT()
r=s.db
C.a.sm(r.a,0)
r.aT()
r=s.dx
C.a.sm(r.a,0)
r.aT()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ai(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.ab(q)
t=H.bZ(q)
P.jT("Error: "+H.j(u))
P.jT("Stack: "+H.j(t))
throw H.d(u)}}}
E.hi.prototype={
$1:function(a){var u
H.nr(a)
u=this.a
if(u.ch){u.ch=!1
u.kH()}},
$S:31}
Z.eb.prototype={$inA:1}
Z.d7.prototype={
a3:function(a){var u,t,s
try{t=a.a
C.b.eo(t,this.e)
C.b.kW(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ab(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.ec.prototype={$inB:1}
Z.c6.prototype={
aN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t
u=this.a
C.b.aA(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a3(a)},
au:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.el(s,u[t].e)
C.b.aA(s,this.a.a,null)},
ai:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aA(t,p,r.b)
C.b.k_(t,q.a,q.b,5123,0)
C.b.aA(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.al(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shs:function(a){this.b=H.i(a,"$ia",[Z.bk],"$aa")},
$inJ:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bN(this.c)+"'")+"]"}}
Z.aX.prototype={
gdk:function(a){var u,t
u=this.a
t=(u&$.aL().a)!==0?3:0
if((u&$.b9().a)!==0)t+=3
if((u&$.b8().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=2
if((u&$.bb().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.b7().a)!==0?t+4:t},
jC:function(a){var u,t,s
u=$.aL()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b7()
if((t&u.a)!==0)if(s===a)return u
return $.lq()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.e])
t=this.a
if((t&$.aL().a)!==0)C.a.h(u,"Pos")
if((t&$.b9().a)!==0)C.a.h(u,"Norm")
if((t&$.b8().a)!==0)C.a.h(u,"Binm")
if((t&$.ba().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bb().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.b7().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eL.prototype={}
D.bB.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.k(b,u)
if(this.a==null)this.sal(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.a
t=(u&&C.a).X(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.b
t=(u&&C.a).X(u,b)||t}return t},
G:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.w(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.U(t,new D.f0(u))
t=this.b
if(t!=null)C.a.U(t,new D.f1(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
en:function(){return this.G(null)},
kK:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.G(t)}}},
aR:function(){return this.kK(!0,!1)},
sal:function(a){this.a=H.i(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbb:function(a){this.b=H.i(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
D.f0.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.f1.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.w.prototype={}
D.bl.prototype={}
D.bm.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d8.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dr.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fi.prototype={
kC:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ky:function(a){this.c=a.b
this.d.X(0,a.a)
return!1},
siz:function(a){this.d=H.i(a,"$iks",[P.m],"$aks")}}
X.dw.prototype={}
X.fo.prototype={
b8:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ag(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.C()
q=b.b
p=this.ch
if(typeof q!=="number")return q.C()
o=new V.a4(t.a+s*r,t.b+q*p)
p=this.a.gb0()
n=new X.b3(a,V.b4(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d5:function(a,b){this.r=a.a
return!1},
bl:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fq()
if(typeof u!=="number")return u.c5()
this.r=(u&~t)>>>0
return!1},
bk:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.b8(a,b))
return!0},
kD:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.C()
o=a.b
n=this.cy
if(typeof o!=="number")return o.C()
r=new X.cj(new V.R(q*p,o*n),t,s,new P.ag(r,!1),this)
r.b=!0
u.G(r)
return!0},
i4:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ag(Date.now(),!1)
t=this.f
s=new X.dw(c,a,this.a.gb0(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.b4()}}
X.at.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.at))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b3.prototype={}
X.fA.prototype={
ci:function(a,b,c){var u,t,s
u=new P.ag(Date.now(),!1)
t=this.a.gb0()
s=new X.b3(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.ci(a,b,!0))
return!0},
bl:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fq()
if(typeof u!=="number")return u.c5()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.G(this.ci(a,b,!0))
return!0},
bk:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.ci(a,b,!1))
return!0},
kE:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.C()
p=a.b
o=this.ch
if(typeof p!=="number")return p.C()
s=new X.cj(new V.R(r*q,p*o),t,b,new P.ag(s,!1),this)
s.b=!0
u.G(s)
return!0},
gem:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
gc1:function(){var u=this.c
if(u==null){u=D.I()
this.c=u}return u},
geX:function(){var u=this.d
if(u==null){u=D.I()
this.d=u}return u}}
X.cj.prototype={}
X.fL.prototype={}
X.e1.prototype={}
X.hl.prototype={
b8:function(a,b){var u,t,s,r
H.i(a,"$ia",[V.a4],"$aa")
u=new P.ag(Date.now(),!1)
t=a.length>0?a[0]:V.b4()
s=this.a.gb0()
r=new X.e1(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kB:function(a){var u
H.i(a,"$ia",[V.a4],"$aa")
u=this.b
if(u==null)return!1
u.G(this.b8(a,!0))
return!0},
kz:function(a){var u
H.i(a,"$ia",[V.a4],"$aa")
u=this.c
if(u==null)return!1
u.G(this.b8(a,!0))
return!0},
kA:function(a){var u
H.i(a,"$ia",[V.a4],"$aa")
u=this.d
if(u==null)return!1
u.G(this.b8(a,!1))
return!0}}
X.e6.prototype={
gb0:function(){var u=this.a
return V.kq(0,0,C.q.gei(u).c,C.q.gei(u).d)},
dH:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dr(u,new X.at(t,a.altKey,a.shiftKey))},
aY:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
cC:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.L()
q=u.top
if(typeof s!=="number")return s.L()
return new V.a4(t-r,s-q)},
bc:function(a){return new V.R(a.movementX,a.movementY)},
cw:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a4])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.j.at(p.pageX)
C.j.at(p.pageY)
n=u.left
C.j.at(p.pageX)
C.a.h(t,new V.a4(o-n,C.j.at(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.at(t,a.altKey,a.shiftKey))},
cm:function(a){var u,t,s,r,q,p
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
hZ:function(a){this.f=!0},
hN:function(a){this.f=!1},
hT:function(a){H.c(a,"$ia_")
if(this.f&&this.cm(a))a.preventDefault()},
i2:function(a){var u
H.c(a,"$iaQ")
if(!this.f)return
u=this.dH(a)
this.b.kC(u)},
i0:function(a){var u
H.c(a,"$iaQ")
if(!this.f)return
u=this.dH(a)
this.b.ky(u)},
i6:function(a){var u,t,s,r
H.c(a,"$ia_")
u=this.a
u.focus()
this.f=!0
this.aY(a)
if(this.x){t=this.aG(a)
s=this.bc(a)
if(this.d.d5(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aK(a)
if(this.c.d5(t,r))a.preventDefault()},
ia:function(a){var u,t,s
H.c(a,"$ia_")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bl(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bl(u,s))a.preventDefault()},
hX:function(a){var u,t,s
H.c(a,"$ia_")
if(!this.cm(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bl(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bl(u,s))a.preventDefault()}},
i8:function(a){var u,t,s
H.c(a,"$ia_")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bk(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bk(u,s))a.preventDefault()},
hV:function(a){var u,t,s
H.c(a,"$ia_")
if(!this.cm(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bk(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bk(u,s))a.preventDefault()}},
ic:function(a){var u,t
H.c(a,"$iaY")
this.aY(a)
u=new V.R((a&&C.P).gjW(a),C.P.gjX(a)).D(0,180)
if(this.x){if(this.d.kD(u))a.preventDefault()
return}if(this.r)return
t=this.aK(a)
if(this.c.kE(u,t))a.preventDefault()},
ig:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aK(this.y)
this.d.i4(t,s,u)}},
ix:function(a){var u
H.c(a,"$iaJ")
this.a.focus()
this.f=!0
this.cC(a)
u=this.cw(a)
if(this.e.kB(u))a.preventDefault()},
it:function(a){var u
H.c(a,"$iaJ")
this.cC(a)
u=this.cw(a)
if(this.e.kz(u))a.preventDefault()},
iv:function(a){var u
H.c(a,"$iaJ")
this.cC(a)
u=this.cw(a)
if(this.e.kA(u))a.preventDefault()},
shj:function(a){this.z=H.i(a,"$ia",[[P.cs,P.Q]],"$aa")}}
D.bg.prototype={
gq:function(){var u=this.d
if(u==null){u=D.I()
this.d=u}return u},
aF:function(a){var u
H.c(a,"$iw")
u=this.d
if(u!=null)u.G(a)},
fR:function(){return this.aF(null)},
$ia1:1,
$iaT:1}
D.a1.prototype={$iaT:1}
D.dt.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.I()
this.Q=u}return u},
aF:function(a){var u=this.Q
if(u!=null)u.G(a)},
dT:function(a){var u
H.c(a,"$iw")
u=this.ch
if(u!=null)u.G(a)},
i3:function(){return this.dT(null)},
ii:function(a){var u,t,s
H.i(a,"$il",[D.a1],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fP(s))return!1}return!0},
hH:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gdS(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.c(b[p],"$ia1")
if(o instanceof D.bg)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bB()
n.sal(null)
n.sbb(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bl(a,b,this,[u])
u.b=!0
this.aF(u)},
im:function(a,b){var u,t,s,r
u=D.a1
H.i(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.gdS();t.A();){r=t.gK()
C.a.X(this.e,r)
r.gq().X(0,s)}u=new D.bm(a,b,this,[u])
u.b=!0
this.aF(u)},
fP:function(a){var u=C.a.Z(this.e,a)
return u},
shh:function(a){this.e=H.i(a,"$ia",[D.bg],"$aa")},
siy:function(a){this.f=H.i(a,"$ia",[D.dI],"$aa")},
siT:function(a){this.r=H.i(a,"$ia",[D.dQ],"$aa")},
sj5:function(a){this.x=H.i(a,"$ia",[D.dX],"$aa")},
sj6:function(a){this.y=H.i(a,"$ia",[D.dY],"$aa")},
sj7:function(a){this.z=H.i(a,"$ia",[D.dZ],"$aa")},
$al:function(){return[D.a1]},
$aX:function(){return[D.a1]}}
D.dI.prototype={$ia1:1,$iaT:1}
D.dQ.prototype={$ia1:1,$iaT:1}
D.dX.prototype={$ia1:1,$iaT:1}
D.dY.prototype={$ia1:1,$iaT:1}
D.dZ.prototype={$ia1:1,$iaT:1}
V.v.prototype={
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.aF.prototype={
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}}
V.eZ.prototype={}
V.dA.prototype={
aj:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dA))return!1
u=b.a
t=$.N().a
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
t=V.bY(H.b([this.a,this.d,this.r],u),3,0)
s=V.bY(H.b([this.b,this.e,this.x],u),3,0)
r=V.bY(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.f(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.f(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.f(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.f(t,1)
n=" "+t[1]+", "
if(1>=p)return H.f(s,1)
n=n+s[1]+", "
if(1>=o)return H.f(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.f(t,2)
u=" "+t[2]+", "
if(2>=p)return H.f(s,2)
u=u+s[2]+", "
if(2>=o)return H.f(r,2)
return n+(u+r[2]+"]")}}
V.an.prototype={
aj:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
d_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.N().a)return V.bK()
a8=1/a7
a9=-r
b0=-d
return V.aS((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
C:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aS(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.O(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bs:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ai(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.N().a
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
i:function(a){return this.R()},
eM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.bY(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bY(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bY(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bY(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.f(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.f(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.f(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.f(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.f(t,1)
l=l+t[1]+", "
if(1>=o)return H.f(s,1)
l=l+s[1]+", "
if(1>=n)return H.f(r,1)
l=l+r[1]+", "
if(1>=m)return H.f(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.f(t,2)
p=p+t[2]+", "
if(2>=o)return H.f(s,2)
p=p+s[2]+", "
if(2>=n)return H.f(r,2)
p=p+r[2]+", "
if(2>=m)return H.f(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.f(t,3)
l=l+t[3]+", "
if(3>=o)return H.f(s,3)
l=l+s[3]+", "
if(3>=n)return H.f(r,3)
l=l+r[3]+", "
if(3>=m)return H.f(q,3)
return p+(l+q[3]+"]")},
R:function(){return this.eM("",3,0)},
E:function(a){return this.eM(a,3,0)}}
V.a4.prototype={
L:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.ai.prototype={
L:function(a,b){return new V.ai(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.b5.prototype={
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b5))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}}
V.dL.prototype={
gah:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}}
V.R.prototype={
d0:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.C(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.C(r)
return u*t+s*r},
C:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.R(u*b,t*b)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.kC
if(u==null){u=new V.R(0,0)
$.kC=u}return u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.R(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.O.prototype={
d0:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d1:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.O(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bi:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.O(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a){return new V.O(-this.a,-this.b,-this.c)},
D:function(a,b){if(Math.abs(b-0)<$.N().a)return V.ea()
return new V.O(this.a/b,this.b/b,this.c/b)},
eV:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
U.eM.prototype={
cd:function(a){var u=V.nz(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.I()
this.y=u}return u},
T:function(a){var u=this.y
if(u!=null)u.G(a)},
sdf:function(a,b){},
sd2:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cd(t)}u=new D.F("maximumLocation",u,this.b,this,[P.z])
u.b=!0
this.T(u)}},
sd4:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cd(t)}u=new D.F("minimumLocation",u,this.c,this,[P.z])
u.b=!0
this.T(u)}},
sag:function(a,b){var u
b=this.cd(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.F("location",u,b,this,[P.z])
u.b=!0
this.T(u)}},
sd3:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.F("maximumVelocity",u,a,this,[P.z])
u.b=!0
this.T(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.F("velocity",u,a,this,[P.z])
u.b=!0
this.T(u)}},
scN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.F("dampening",u,a,this,[P.z])
u.b=!0
this.T(u)}},
av:function(a){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sag(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.da.prototype={
gq:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
b3:function(a,b){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.a2(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cd.prototype={
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
T:function(a){var u
H.c(a,"$iw")
u=this.e
if(u!=null)u.G(a)},
aa:function(){return this.T(null)},
hF:function(a,b){var u,t,s,r,q,p,o,n
u=U.aa
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gaU(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.T(u)},
ik:function(a,b){var u,t,s
u=U.aa
H.i(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.gaU();t.A();)t.gK().gq().X(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.T(u)},
b3:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.am(u,u.length,0,[H.q(u,0)]),s=null;u.A();){t=u.d
if(t!=null){r=t.b3(a,b)
if(r!=null)s=s==null?r:r.C(0,s)}}this.f=s==null?V.bK():s
u=this.e
if(u!=null)u.aR()}return this.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cd))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.a2(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.aa]},
$aX:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.e7.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.I()
this.cy=u}return u},
T:function(a){var u
H.c(a,"$iw")
u=this.cy
if(u!=null)u.G(a)},
aa:function(){return this.T(null)},
bf:function(a){if(this.a!=null)return!1
this.a=a
a.c.gem().h(0,this.gcn())
this.a.c.geX().h(0,this.gcp())
this.a.c.gc1().h(0,this.gcr())
return!0},
co:function(a){H.c(a,"$iw")
if(!J.a2(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$iw"),"$ib3")
if(!this.y)return
if(this.x){u=a.d.L(0,a.y)
u=new V.R(u.a,u.b)
u=u.I(u)
t=this.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.L(0,a.y)
u=new V.R(t.a,t.b).C(0,2).D(0,u.gah())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.C()
s=this.e
if(typeof s!=="number")return H.C(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.R(s.a,s.b).C(0,2).D(0,u.gah())
s=this.b
q=r.a
if(typeof q!=="number")return q.W()
p=this.e
if(typeof p!=="number")return H.C(p)
o=this.z
if(typeof o!=="number")return H.C(o)
s.sag(0,-q*p+o)
this.b.sY(0)
t=t.L(0,a.z)
this.Q=new V.R(t.a,t.b).C(0,2).D(0,u.gah())}this.aa()},
cs:function(a){var u,t,s
H.c(a,"$iw")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.I(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.C()
s=this.e
if(typeof s!=="number")return H.C(s)
u.sY(t*10*s)
this.aa()}},
b3:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.ch=t
s=a.y
this.b.av(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aS(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaa:1}
U.e8.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.I()
this.fx=u}return u},
T:function(a){var u
H.c(a,"$iw")
u=this.fx
if(u!=null)u.G(a)},
aa:function(){return this.T(null)},
bf:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gem().h(0,this.gcn())
this.a.c.geX().h(0,this.gcp())
this.a.c.gc1().h(0,this.gcr())
u=this.a.d
t=u.f
if(t==null){t=D.I()
u.f=t
u=t}else u=t
u.h(0,this.ghy())
u=this.a.d
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.ghA())
u=this.a.e
t=u.b
if(t==null){t=D.I()
u.b=t
u=t}else u=t
u.h(0,this.gj2())
u=this.a.e
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.gj0())
u=this.a.e
t=u.c
if(t==null){t=D.I()
u.c=t
u=t}else u=t
u.h(0,this.giZ())
return!0},
ay:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.R(u,t)},
co:function(a){a=H.h(H.c(a,"$iw"),"$ib3")
if(!J.a2(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$iw"),"$ib3")
if(!this.cx)return
if(this.ch){u=a.d.L(0,a.y)
u=new V.R(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.L(0,a.y)
u=this.ay(new V.R(t.a,t.b).C(0,2).D(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=this.ay(new V.R(s.a,s.b).C(0,2).D(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sag(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sag(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.L(0,a.z)
this.dx=this.ay(new V.R(t.a,t.b).C(0,2).D(0,u.gah()))}this.aa()},
cs:function(a){var u,t,s
H.c(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sY(-t*10*u)
this.aa()}},
hz:function(a){if(H.h(H.c(a,"$iw"),"$idw").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hB:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$iw"),"$ib3")
if(!J.a2(this.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=this.ay(new V.R(s.a,s.b).C(0,2).D(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sag(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sag(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.L(0,a.z)
this.dx=this.ay(new V.R(t.a,t.b).C(0,2).D(0,u.gah()))
this.aa()},
j3:function(a){H.c(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j1:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$iw"),"$ie1")
if(!this.cx)return
if(this.ch){u=a.d.L(0,a.y)
u=new V.R(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.L(0,a.y)
u=this.ay(new V.R(t.a,t.b).C(0,2).D(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=this.ay(new V.R(s.a,s.b).C(0,2).D(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sag(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sag(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.L(0,a.z)
this.dx=this.ay(new V.R(t.a,t.b).C(0,2).D(0,u.gah()))}this.aa()},
j_:function(a){var u,t,s
H.c(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sY(-t*10*u)
this.aa()}},
b3:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.dy=t
s=a.y
this.c.av(s)
this.b.av(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aS(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.C(0,V.aS(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaa:1}
U.e9.prototype={
gq:function(){var u=this.r
if(u==null){u=D.I()
this.r=u}return u},
T:function(a){var u=this.r
if(u!=null)u.G(a)},
bf:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.I()
u.e=t
u=t}else u=t
t=this.ghC()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.I()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hD:function(a){var u,t,s,r
H.c(a,"$iw")
if(!J.a2(this.b,this.a.b.c))return
H.h(a,"$icj")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.C()
r=u+t*s
if(u!==r){this.d=r
u=new D.F("zoom",u,r,this,[P.z])
u.b=!0
this.T(u)}},
b3:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aS(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaa:1}
M.d9.prototype={
gq:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
a2:function(a){var u
H.c(a,"$iw")
u=this.f
if(u!=null)u.G(a)},
b6:function(){return this.a2(null)},
ip:function(a,b){var u,t,s,r,q,p,o,n
u=M.av
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.ga1(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.a2(u)},
ir:function(a,b){var u,t,s
u=M.av
H.i(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.ga1();t.A();)t.gK().gq().X(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.a2(u)},
ai:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.am(u,u.length,0,[H.q(u,0)]);u.A();){t=u.d
if(t!=null)t.ai(a)}this.e=!1},
$al:function(){return[M.av]},
$aX:function(){return[M.av]},
$iav:1}
M.db.prototype={
gq:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
a2:function(a){var u
H.c(a,"$iw")
u=this.f
if(u!=null)u.G(a)},
b6:function(){return this.a2(null)},
sbg:function(a){var u,t
if(a==null)a=new X.fc()
u=this.a
if(u!==a){if(u!=null)u.gq().X(0,this.ga1())
t=this.a
this.a=a
a.gq().h(0,this.ga1())
u=new D.F("camera",t,this.a,this,[X.bw])
u.b=!0
this.a2(u)}},
sbo:function(a,b){var u,t
if(b==null)b=X.jp(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().X(0,this.ga1())
t=this.b
this.b=b
b.gq().h(0,this.ga1())
u=new D.F("target",t,this.b,this,[X.ct])
u.b=!0
this.a2(u)}},
sbp:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().X(0,this.ga1())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.ga1())
u=new D.F("technique",t,this.c,this,[O.bq])
u.b=!0
this.a2(u)}},
ai:function(a){a.d7(this.c)
this.b.a3(a)
this.a.a3(a)
this.d.av(a)
this.d.ai(a)
this.a.au(a)
this.b.toString
a.d6()},
$iav:1}
M.df.prototype={
a2:function(a){var u
H.c(a,"$iw")
u=this.x
if(u!=null)u.G(a)},
b6:function(){return this.a2(null)},
hP:function(a,b){var u,t,s,r,q,p,o,n
u=E.ah
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.ga1(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bB()
n.sal(null)
n.sbb(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.a2(u)},
hR:function(a,b){var u,t,s
u=E.ah
H.i(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.ga1();t.A();)t.gK().gq().X(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.a2(u)},
sbg:function(a){var u,t
if(a==null)a=X.kk(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().X(0,this.ga1())
t=this.a
this.a=a
a.gq().h(0,this.ga1())
u=new D.F("camera",t,this.a,this,[X.bw])
u.b=!0
this.a2(u)}},
sbo:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().X(0,this.ga1())
t=this.b
this.b=b
b.gq().h(0,this.ga1())
u=new D.F("target",t,this.b,this,[X.ct])
u.b=!0
this.a2(u)}},
sbp:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().X(0,this.ga1())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.ga1())
u=new D.F("technique",t,this.c,this,[O.bq])
u.b=!0
this.a2(u)}},
gq:function(){var u=this.x
if(u==null){u=D.I()
this.x=u}return u},
ai:function(a){var u
a.d7(this.c)
this.b.a3(a)
this.a.a3(a)
u=this.c
if(u!=null)u.av(a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.q(u,0)]);u.A();)u.d.av(a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.q(u,0)]);u.A();)u.d.ai(a)
this.a.toString
a.cy.aP()
a.db.aP()
this.b.toString
a.d6()},
shb:function(a,b){this.d=H.i(b,"$iX",[E.ah],"$aX")},
$iav:1}
M.av.prototype={}
A.d5.prototype={}
A.eF.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k5:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.eo(r.a,r.c)}},
ek:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.el(r.a,r.c)}}}
A.dz.prototype={
fI:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ac("")
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
a6.jb(u)
a6.ji(u)
a6.jc(u)
a6.jq(u)
a6.jr(u)
a6.jk(u)
a6.jv(u)
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
u=new P.ac("")
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
q.jf(u)
q.ja(u)
q.jd(u)
q.jg(u)
q.jo(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jm(u)
q.jn(u)}q.jj(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.i:m+="   return alpha;\n"
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
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.e])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.je(u)
q.jl(u)
q.jp(u)
q.js(u)
q.jt(u)
q.ju(u)
q.jh(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.e])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.eU(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a6.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$iaq")
if(t)this.dy=H.h(this.y.n(0,"objMat"),"$iaq")
if(r)this.fr=H.h(this.y.n(0,"viewObjMat"),"$iaq")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$iaq")
if(a6.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$icA")
if(a6.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$iaq")
if(a6.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$iaq")
this.sh7(H.b([],[A.aq]))
t=a6.aB
if(t>0){this.k4=H.c(this.y.n(0,"bendMatCount"),"$iK")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.k(0,q)
if(g==null)H.p(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.h(g,"$iaq"))}}t=a6.a
if(t!==C.d){this.r2=H.h(this.y.n(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.rx=H.h(this.y.n(0,"emissionTxt"),"$iaj")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iK")
break
case C.h:this.ry=H.h(this.y.n(0,"emissionTxt"),"$iad")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iK")
break}}t=a6.b
if(t!==C.d){this.x2=H.h(this.y.n(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.y1=H.h(this.y.n(0,"ambientTxt"),"$iaj")
this.aB=H.h(this.y.n(0,"nullAmbientTxt"),"$iK")
break
case C.h:this.y2=H.h(this.y.n(0,"ambientTxt"),"$iad")
this.aB=H.h(this.y.n(0,"nullAmbientTxt"),"$iK")
break}}t=a6.c
if(t!==C.d){this.as=H.h(this.y.n(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.bG=H.h(this.y.n(0,"diffuseTxt"),"$iaj")
this.bH=H.h(this.y.n(0,"nullDiffuseTxt"),"$iK")
break
case C.h:this.ep=H.h(this.y.n(0,"diffuseTxt"),"$iad")
this.bH=H.h(this.y.n(0,"nullDiffuseTxt"),"$iK")
break}}t=a6.d
if(t!==C.d){this.bI=H.h(this.y.n(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.eq=H.h(this.y.n(0,"invDiffuseTxt"),"$iaj")
this.bJ=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iK")
break
case C.h:this.er=H.h(this.y.n(0,"invDiffuseTxt"),"$iad")
this.bJ=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iK")
break}}t=a6.e
if(t!==C.d){this.bM=H.h(this.y.n(0,"shininess"),"$iV")
this.bK=H.h(this.y.n(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.es=H.h(this.y.n(0,"specularTxt"),"$iaj")
this.bL=H.h(this.y.n(0,"nullSpecularTxt"),"$iK")
break
case C.h:this.eu=H.h(this.y.n(0,"specularTxt"),"$iad")
this.bL=H.h(this.y.n(0,"nullSpecularTxt"),"$iK")
break}}switch(a6.f){case C.d:break
case C.i:break
case C.e:this.ev=H.h(this.y.n(0,"bumpTxt"),"$iaj")
this.bN=H.h(this.y.n(0,"nullBumpTxt"),"$iK")
break
case C.h:this.ew=H.h(this.y.n(0,"bumpTxt"),"$iad")
this.bN=H.h(this.y.n(0,"nullBumpTxt"),"$iK")
break}if(a6.dy){this.ex=H.h(this.y.n(0,"envSampler"),"$iad")
this.ey=H.h(this.y.n(0,"nullEnvTxt"),"$iK")
t=a6.r
if(t!==C.d){this.bO=H.h(this.y.n(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.ez=H.h(this.y.n(0,"reflectTxt"),"$iaj")
this.bP=H.h(this.y.n(0,"nullReflectTxt"),"$iK")
break
case C.h:this.eA=H.h(this.y.n(0,"reflectTxt"),"$iad")
this.bP=H.h(this.y.n(0,"nullReflectTxt"),"$iK")
break}}t=a6.x
if(t!==C.d){this.bQ=H.h(this.y.n(0,"refraction"),"$iV")
this.bR=H.h(this.y.n(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.eB=H.h(this.y.n(0,"refractTxt"),"$iaj")
this.bS=H.h(this.y.n(0,"nullRefractTxt"),"$iK")
break
case C.h:this.eC=H.h(this.y.n(0,"refractTxt"),"$iad")
this.bS=H.h(this.y.n(0,"nullRefractTxt"),"$iK")
break}}}t=a6.y
if(t!==C.d){this.bT=H.h(this.y.n(0,"alpha"),"$iV")
switch(t){case C.d:break
case C.i:break
case C.e:this.eD=H.h(this.y.n(0,"alphaTxt"),"$iaj")
this.bU=H.h(this.y.n(0,"nullAlphaTxt"),"$iK")
break
case C.h:this.eE=H.h(this.y.n(0,"alphaTxt"),"$iad")
this.bU=H.h(this.y.n(0,"nullAlphaTxt"),"$iK")
break}}this.sfS(H.b([],[A.cz]))
this.sfT(H.b([],[A.cB]))
this.sfU(H.b([],[A.cC]))
this.sfV(H.b([],[A.cD]))
this.sfW(H.b([],[A.cE]))
this.sfX(H.b([],[A.cF]))
if(a6.k2){t=a6.z
if(t>0){this.eF=H.c(this.y.n(0,"dirLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.k(0,r)
if(g==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="dirLights["+h+"].color"
f=s.k(0,r)
if(f==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.cQ;(s&&C.a).h(s,new A.cz(h,g,f))}}t=a6.Q
if(t>0){this.eG=H.c(this.y.n(0,"pntLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="pntLights["+h+"].color"
e=s.k(0,r)
if(e==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="pntLights["+h+"].att0"
d=s.k(0,r)
if(d==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iV")
s=this.y
r="pntLights["+h+"].att1"
c=s.k(0,r)
if(c==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iV")
s=this.y
r="pntLights["+h+"].att2"
b=s.k(0,r)
if(b==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iV")
s=this.cR;(s&&C.a).h(s,new A.cB(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eH=H.c(this.y.n(0,"spotLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="spotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.k(0,r)
if(e==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="spotLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.k(0,r)
if(c==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iV")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.k(0,r)
if(b==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iV")
s=this.y
r="spotLights["+h+"].att0"
a=s.k(0,r)
if(a==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iV")
s=this.y
r="spotLights["+h+"].att1"
a0=s.k(0,r)
if(a0==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iV")
s=this.y
r="spotLights["+h+"].att2"
a1=s.k(0,r)
if(a1==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iV")
s=this.cS;(s&&C.a).h(s,new A.cC(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eI=H.c(this.y.n(0,"txtDirLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.k(0,r)
if(g==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.k(0,r)
if(f==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.k(0,r)
if(e==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.k(0,r)
if(d==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="txtDirLights["+h+"].color"
c=s.k(0,r)
if(c==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iG")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iK")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.k(0,r)
if(a==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iaj")
s=this.cT;(s&&C.a).h(s,new A.cD(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eJ=H.c(this.y.n(0,"txtPntLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.k(0,r)
if(e==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$icA")
s=this.y
r="txtPntLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.k(0,r)
if(c==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iK")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.k(0,r)
if(b==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iV")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.k(0,r)
if(a==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iV")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.k(0,r)
if(a0==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iV")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.k(0,r)
if(a1==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iad")
s=this.cU;(s&&C.a).h(s,new A.cE(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eK=H.c(this.y.n(0,"txtSpotLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.k(0,r)
if(e==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.k(0,r)
if(d==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.k(0,r)
if(c==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iG")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iK")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.k(0,r)
if(a==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iG")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.k(0,r)
if(a0==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iV")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.k(0,r)
if(a1==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iV")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.k(0,r)
if(a2==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a2,"$iV")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.k(0,r)
if(a3==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a3,"$iV")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.k(0,r)
if(a4==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a4,"$iV")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.k(0,r)
if(a5==null)H.p(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a5,"$iaj")
s=this.cV;(s&&C.a).h(s,new A.cF(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ar:function(a,b,c){if(c==null||!c.d)C.b.N(b.a,b.d,1)
else{a.fw(c)
C.b.N(b.a,b.d,0)}},
am:function(a,b,c){if(c==null||c.d<6)C.b.N(b.a,b.d,1)
else{a.dj(c)
C.b.N(b.a,b.d,0)}},
sh7:function(a){this.r1=H.i(a,"$ia",[A.aq],"$aa")},
sfS:function(a){this.cQ=H.i(a,"$ia",[A.cz],"$aa")},
sfT:function(a){this.cR=H.i(a,"$ia",[A.cB],"$aa")},
sfU:function(a){this.cS=H.i(a,"$ia",[A.cC],"$aa")},
sfV:function(a){this.cT=H.i(a,"$ia",[A.cD],"$aa")},
sfW:function(a){this.cU=H.i(a,"$ia",[A.cE],"$aa")},
sfX:function(a){this.cV=H.i(a,"$ia",[A.cF],"$aa")}}
A.fx.prototype={
jb:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aB+"];\n"
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
ji:function(a){var u
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
jc:function(a){var u
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
jq:function(a){var u,t
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
jr:function(a){var u,t
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
jk:function(a){var u
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
jv:function(a){var u
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
aH:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aw(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jf:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aH(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ja:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aH(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jd:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jg:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jo:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aH(a,u,"specular")
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
case C.i:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jj:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
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
case C.i:u+="   return normalize(normalVec);\n"
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
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jm:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aH(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jn:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aH(a,u,"refract")
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
case C.i:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
je:function(a){var u,t
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
jl:function(a){var u,t
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
jp:function(a){var u,t
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
js:function(a){var u,t,s
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
jt:function(a){var u,t,s
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
ju:function(a){var u,t,s
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
jh:function(a){var u
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
i:function(a){return this.as}}
A.cz.prototype={}
A.cD.prototype={}
A.cB.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cp.prototype={
dq:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eU:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dI(a,35633)
this.f=this.dI(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.ec(u,t,this.e)
C.b.ec(u,this.r,this.f)
C.b.kk(u,this.r)
if(!H.jL(C.b.c8(u,this.r,35714))){s=C.b.fl(u,this.r)
C.b.jU(u,this.r)
H.p(P.t("Failed to link shader: "+H.j(s)))}this.iO()
this.iQ()},
a3:function(a){C.b.de(a.a,this.r)
this.x.k5()},
dI:function(a,b){var u,t,s
u=this.a
t=C.b.jS(u,b)
C.b.fz(u,t,a)
C.b.jM(u,t)
if(!H.jL(C.b.fn(u,t,35713))){s=C.b.fm(u,t)
C.b.jV(u,t)
throw H.d(P.t("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
iO:function(){var u,t,s,r,q,p
u=H.b([],[A.d5])
t=this.a
s=H.a6(C.b.c8(t,this.r,35721))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.fg(t,this.r,r)
p=C.b.fi(t,this.r,q.name)
C.a.h(u,new A.d5(t,q.name,p))}this.x=new A.eF(u)},
iQ:function(){var u,t,s,r,q,p
u=H.b([],[A.e2])
t=this.a
s=H.a6(C.b.c8(t,this.r,35718))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.fh(t,this.r,r)
p=C.b.fo(t,this.r,q.name)
C.a.h(u,this.jT(q.type,q.size,q.name,p))}this.y=new A.hw(u)},
aV:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.K(u,t,b,c)
else return A.jz(u,t,b,a,c)},
he:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aj(u,t,b,c)
else return A.jz(u,t,b,a,c)},
hf:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ad(u,t,b,c)
else return A.jz(u,t,b,a,c)},
bB:function(a,b){return new P.eg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jT:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.V(this.a,this.r,c,d)
case 35664:return new A.hr(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.hu(this.a,this.r,c,d)
case 35667:return new A.hs(this.a,this.r,c,d)
case 35668:return new A.ht(this.a,this.r,c,d)
case 35669:return new A.hv(this.a,this.r,c,d)
case 35674:return new A.hx(this.a,this.r,c,d)
case 35675:return new A.cA(this.a,this.r,c,d)
case 35676:return new A.aq(this.a,this.r,c,d)
case 35678:return this.he(b,c,d)
case 35680:return this.hf(b,c,d)
case 35670:throw H.d(this.bB("BOOL",c))
case 35671:throw H.d(this.bB("BOOL_VEC2",c))
case 35672:throw H.d(this.bB("BOOL_VEC3",c))
case 35673:throw H.d(this.bB("BOOL_VEC4",c))
default:throw H.d(P.t("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bA.prototype={
i:function(a){return this.b}}
A.dP.prototype={}
A.e2.prototype={}
A.hw.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.k(0,b)
if(u==null)throw H.d(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kc:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kc("\n")}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.hs.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hq.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sj8:function(a){this.e=H.i(a,"$ia",[P.m],"$aa")}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cA.prototype={
aq:function(a){var u=new Float32Array(H.bT(H.i(a,"$ia",[P.z],"$aa")))
C.b.fb(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aq.prototype={
aq:function(a){var u=new Float32Array(H.bT(H.i(a,"$ia",[P.z],"$aa")))
C.b.fc(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.aj.prototype={
fw:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ad.prototype={
dj:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iM.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.d1(u.b,b).d1(u.d.d1(u.c,b),c)
u=new V.ai(t.a,t.b,t.c)
if(!J.a2(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a9()}a.skQ(t.D(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
s=new V.b5(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a2(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a9()}},
$S:44}
F.a3.prototype={
h6:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ea()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.eV())return
return q.D(0,Math.sqrt(q.I(q)))},
ha:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.L(0,t)
u=new V.O(u.a,u.b,u.c)
q=u.D(0,Math.sqrt(u.I(u)))
u=r.L(0,t)
u=new V.O(u.a,u.b,u.c)
u=q.bi(u.D(0,Math.sqrt(u.I(u))))
return u.D(0,Math.sqrt(u.I(u)))},
cJ:function(){if(this.d!=null)return!0
var u=this.h6()
if(u==null){u=this.ha()
if(u==null)return!1}this.d=u
this.a.a.a9()
return!0},
h5:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ea()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.eV())return
return q.D(0,Math.sqrt(q.I(q)))},
h9:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.N().a){u=m.L(0,p)
u=new V.O(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.L(0,p)
u=new V.ai(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).L(0,s)
u=new V.O(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.D(0,Math.sqrt(u.I(u)))
u=f.bi(h)
u=u.D(0,Math.sqrt(u.I(u))).bi(f)
h=u.D(0,Math.sqrt(u.I(u)))}return h},
cH:function(){if(this.e!=null)return!0
var u=this.h5()
if(u==null){u=this.h9()
if(u==null)return!1}this.e=u
this.a.a.a9()
return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
E:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.ap(J.al(u.e),0)+", "+C.c.ap(J.al(this.b.e),0)+", "+C.c.ap(J.al(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
R:function(){return this.E("")}}
F.b2.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
E:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ap(J.al(u.e),0)+", "+C.c.ap(J.al(this.b.e),0)},
R:function(){return this.E("")}}
F.bo.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ap(J.al(u.e),0)},
R:function(){return this.E("")}}
F.dN.prototype={
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
kp:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a6()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.jN())}this.a.a6()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a6()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bo()
if(m.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.G(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a6()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a6()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lW(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a6()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a6()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a6()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cb(k,j,h)}u=this.e
if(u!=null)u.aR()},
aL:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aL()||!1
if(!this.a.aL())t=!1
u=this.e
if(u!=null)u.aR()
return t},
eg:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aL()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b9().a)!==0)++r
if((s&$.b8().a)!==0)++r
if((s&$.ba().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.d0().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.b7().a)!==0)++r
q=a1.gdk(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d7])
for(m=0,l=0;l<r;++l){k=a1.jC(l)
j=k.gdk(k)
C.a.p(n,l,new Z.d7(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].kl(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.p(o,g,h[f]);++g}}m+=j}H.i(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aA(t,34962,e)
C.b.ef(t,34962,new Float32Array(H.bT(o)),35044)
C.b.aA(t,34962,null)
d=new Z.c6(new Z.eb(34962,e),n,a1)
d.shs(H.b([],[Z.bk]))
if(this.b.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a6()
C.a.h(c,b.e)}a=Z.jC(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(0,c.length,a))}if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a6()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.a6()
C.a.h(c,b.e)}a=Z.jC(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a6()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.a6()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.a6()
C.a.h(c,b.e)}a=Z.jC(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.l(u,"\n")},
b1:function(a){var u=this.e
if(u!=null)u.G(a)},
a9:function(){return this.b1(null)},
$inH:1}
F.fY.prototype={
jx:function(a){var u,t,s,r,q,p
H.i(a,"$ia",[F.aw],"$aa")
u=H.b([],[F.a3])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cb(t,q,p))}return u},
jy:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ia",[F.aw],"$aa")
u=H.b([],[F.a3])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.f(c,r)
l=c[r];++r
if(r>=m)return H.f(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.f(c,j)
i=c[j]
if(s<0||s>=m)return H.f(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cb(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cb(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cb(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cb(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cJ())s=!1
return s},
cI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cH())s=!1
return s},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
R:function(){return this.E("")},
shk:function(a){this.b=H.i(a,"$ia",[F.a3],"$aa")}}
F.fZ.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.b([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.l(u,"\n")},
R:function(){return this.E("")},
shu:function(a){this.b=H.i(a,"$ia",[F.b2],"$aa")}}
F.h_.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
R:function(){return this.E("")},
scv:function(a){this.b=H.i(a,"$ia",[F.bo],"$aa")}}
F.aw.prototype={
cM:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hM(this.cx,s,p,u,t,r,q,a,o)},
jN:function(){return this.cM(null)},
skQ:function(a){var u
if(!J.a2(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a9()}},
kl:function(a){var u,t
if(a.w(0,$.aL())){u=this.f
t=[P.z]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b9())){u=this.r
t=[P.z]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b8())){u=this.x
t=[P.z]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.ba())){u=this.y
t=[P.z]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.w(0,$.bb())){u=this.z
t=[P.z]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.d_())){u=this.Q
t=[P.z]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.d0())){u=this.Q
t=[P.z]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.c1()))return H.b([this.ch],[P.z])
else if(a.w(0,$.b7())){u=this.cx
t=[P.z]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.z])},
cJ:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ea()
this.d.U(0,new F.hU(u))
u=u.a
this.r=u.D(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a9()
u=this.a.e
if(u!=null)u.aR()}return!0},
cH:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ea()
this.d.U(0,new F.hT(u))
u=u.a
this.x=u.D(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a9()
u=this.a.e
if(u!=null)u.aR()}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
E:function(a){var u,t,s
u=H.b([],[P.e])
C.a.h(u,C.c.ap(J.al(this.e),0))
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
C.a.h(u,V.S(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
R:function(){return this.E("")}}
F.hU.prototype={
$1:function(a){var u,t
H.c(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:8}
F.hT.prototype={
$1:function(a){var u,t
H.c(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:8}
F.hN.prototype={
a6:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a9()
return!0},
jz:function(a,b,c,d,e,f,g,h,i){var u=F.hM(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bD:function(a,b,c,d,e,f){return this.jz(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cJ()
return!0},
cI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cH()
return!0},
jH:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a2(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
this.a6()
u=H.b([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
R:function(){return this.E("")},
sj9:function(a){this.c=H.i(a,"$ia",[F.aw],"$aa")}}
F.hO.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
U:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a3]})
C.a.U(this.b,b)
C.a.U(this.c,new F.hP(this,b))
C.a.U(this.d,new F.hQ(this,b))},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
R:function(){return this.E("")},
shl:function(a){this.b=H.i(a,"$ia",[F.a3],"$aa")},
shm:function(a){this.c=H.i(a,"$ia",[F.a3],"$aa")},
shn:function(a){this.d=H.i(a,"$ia",[F.a3],"$aa")}}
F.hP.prototype={
$1:function(a){H.c(a,"$ia3")
if(!J.a2(a.a,this.a))this.b.$1(a)},
$S:8}
F.hQ.prototype={
$1:function(a){var u
H.c(a,"$ia3")
u=this.a
if(!J.a2(a.a,u)&&!J.a2(a.b,u))this.b.$1(a)},
$S:8}
F.hR.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
R:function(){return this.E("")},
shv:function(a){this.b=H.i(a,"$ia",[F.b2],"$aa")},
shw:function(a){this.c=H.i(a,"$ia",[F.b2],"$aa")}}
F.hS.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
R:function(){return this.E("")},
scv:function(a){this.b=H.i(a,"$ia",[F.bo],"$aa")}}
O.dy.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.I()
this.dy=u}return u},
P:function(a){var u
H.c(a,"$iw")
u=this.dy
if(u!=null)u.G(a)},
ba:function(){return this.P(null)},
dZ:function(a){H.c(a,"$iw")
this.a=null
this.P(a)},
iJ:function(){return this.dZ(null)},
hJ:function(a,b){var u=V.an
u=new D.bl(a,H.i(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.P(u)},
hL:function(a,b){var u=V.an
u=new D.bm(a,H.i(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.P(u)},
dF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a8(u.e.length+3,4)*4
s=C.f.a8(u.f.length+3,4)*4
r=C.f.a8(u.r.length+3,4)*4
q=C.f.a8(u.x.length+3,4)*4
p=C.f.a8(u.y.length+3,4)*4
o=C.f.a8(u.z.length+3,4)*4
n=C.f.a8(this.e.a.length+3,4)*4
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aL()
if(a0){b=$.b9()
a7=new Z.aX(a7.a|b.a)}if(a1){b=$.b8()
a7=new Z.aX(a7.a|b.a)}if(a2){b=$.ba()
a7=new Z.aX(a7.a|b.a)}if(a3){b=$.bb()
a7=new Z.aX(a7.a|b.a)}if(a5){b=$.b7()
a7=new Z.aX(a7.a|b.a)}return new A.fx(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a0:function(a,b){H.i(a,"$ia",[T.cv],"$aa")
if(b!=null)if(!C.a.Z(a,b)){b.sbj(0,a.length)
C.a.h(a,b)}},
av:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.am(u,u.length,0,[H.q(u,0)]);u.A();){t=u.d
t.toString
s=$.hL
if(s==null){s=new V.O(0,0,1)
$.hL=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dd(s)}}},
f4:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dF()
t=H.c(a2.fr.k(0,u.as),"$idz")
if(t==null){t=A.m0(u,a2.a)
a2.ea(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bG
u=a3.e
if(!(u instanceof Z.c6)){a3.e=null
u=null}if(u==null||!u.d.w(0,r)){u=s.r1
if(u)a3.d.aL()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cI()
p.a.cI()
p=p.e
if(p!=null)p.aR()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jH()
o=o.e
if(o!=null)o.aR()}m=a3.d.eg(new Z.ec(a2.a),r)
m.aN($.aL()).e=this.a.Q.c
if(u)m.aN($.b9()).e=this.a.cx.c
if(q)m.aN($.b8()).e=this.a.ch.c
if(s.rx)m.aN($.ba()).e=this.a.cy.c
if(p)m.aN($.bb()).e=this.a.db.c
if(s.x1)m.aN($.b7()).e=this.a.dx.c
a3.e=m}u=T.cv
l=H.b([],[u])
this.a.a3(a2)
if(s.fx){q=this.a
p=a2.dx.ga5()
q=q.dy
q.toString
q.aq(p.aj(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.ga5().C(0,a2.dx.ga5())
a2.cx=p}q=q.fr
q.toString
q.aq(p.aj(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gkF().C(0,a2.dx.ga5())
a2.ch=p}q=q.fy
q.toString
q.aq(p.aj(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.aq(C.t.aj(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.aq(C.t.aj(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.aq(C.t.aj(p,!0))}if(s.aB>0){k=this.e.a.length
q=this.a.k4
C.b.N(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.f(o,j)
o=o[j]
p.toString
H.c(o,"$ian")
p=p.r1
if(j>=p.length)return H.f(p,j)
p=p[j]
i=new Float32Array(H.bT(H.i(o.aj(0,!0),"$ia",q,"$aa")))
C.b.fc(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a0(l,this.f.d)
q=this.a
p=this.f.d
q.ar(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.f.e)
q=this.a
p=this.f.e
q.am(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a0(l,this.r.d)
q=this.a
p=this.r.d
q.ar(q.y1,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.r.e)
q=this.a
p=this.r.e
q.am(q.y2,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.i:q=this.a
p=this.x.f
q=q.as
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a0(l,this.x.d)
q=this.a
p=this.x.d
q.ar(q.bG,q.bH,p)
p=this.a
q=this.x.f
p=p.as
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.x.e)
q=this.a
p=this.x.e
q.am(q.ep,q.bH,p)
p=this.a
q=this.x.f
p=p.as
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.i:q=this.a
p=this.y.f
q=q.bI
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
break
case C.e:this.a0(l,this.y.d)
q=this.a
p=this.y.d
q.ar(q.eq,q.bJ,p)
p=this.a
q=this.y.f
p=p.bI
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.y.e)
q=this.a
p=this.y.e
q.am(q.er,q.bJ,p)
p=this.a
q=this.y.f
p=p.bI
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.i:q=this.a
p=this.z.f
q=q.bK
q.toString
o=p.a
n=p.b
p=p.c
C.b.v(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bM
C.b.M(p.a,p.d,n)
break
case C.e:this.a0(l,this.z.d)
q=this.a
p=this.z.d
q.ar(q.es,q.bL,p)
p=this.a
q=this.z.f
p=p.bK
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bM
C.b.M(q.a,q.d,n)
break
case C.h:this.a0(l,this.z.e)
q=this.a
p=this.z.e
q.am(q.eu,q.bL,p)
p=this.a
q=this.z.f
p=p.bK
p.toString
o=q.a
n=q.b
q=q.c
C.b.v(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bM
C.b.M(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eF
C.b.N(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cQ
if(g>=o.length)return H.f(o,g)
d=o[g]
o=h.dd(e.a)
n=o.a
c=o.b
b=o.c
b=o.D(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.v(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.v(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eG
C.b.N(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cR
if(g>=o.length)return H.f(o,g)
d=o[g]
o=e.gbm(e)
n=d.b
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=h.bs(e.gbm(e))
n=d.c
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gu(e)
n=d.d
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gcD()
n=d.e
C.b.M(n.a,n.d,o)
o=e.gcE()
n=d.f
C.b.M(n.a,n.d,o)
o=e.gcF()
n=d.r
C.b.M(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eH
C.b.N(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cS
if(g>=o.length)return H.f(o,g)
d=o[g]
o=e.gbm(e)
n=d.b
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gcO(e).l2()
n=d.c
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=h.bs(e.gbm(e))
n=d.d
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gu(e)
n=d.e
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gl0()
n=d.f
C.b.M(n.a,n.d,o)
o=e.gl_()
n=d.r
C.b.M(n.a,n.d,o)
o=e.gcD()
n=d.x
C.b.M(n.a,n.d,o)
o=e.gcE()
n=d.y
C.b.M(n.a,n.d,o)
o=e.gcF()
n=d.z
C.b.M(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eI
C.b.N(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.cT
if(g>=n.length)return H.f(n,g)
d=n[g]
n=e.gbq()
H.i(l,"$ia",o,"$aa")
if(!C.a.Z(l,n)){n.sbj(0,l.length)
C.a.h(l,n)}n=e.gcO(e)
c=d.d
C.b.v(c.a,c.d,n.a,n.b,n.c)
n=e.gc1()
c=d.b
C.b.v(c.a,c.d,n.a,n.b,n.c)
n=e.gc_(e)
c=d.c
C.b.v(c.a,c.d,n.a,n.b,n.c)
n=h.dd(e.gcO(e))
c=n.a
b=n.b
a=n.c
a=n.D(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.v(b.a,b.d,c,n,a)
a=e.gu(e)
n=d.f
C.b.v(n.a,n.d,a.a,a.b,a.c)
a=e.gbq()
n=a.geW(a)
if(!n){n=d.x
C.b.N(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.N(b,n,0)
else C.b.N(b,n,a.a)
n=d.x
C.b.N(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eJ
C.b.N(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.y,p=q.length,o=[P.z],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.cU
if(g>=c.length)return H.f(c,g)
d=c[g]
c=e.gbq()
H.i(l,"$ia",n,"$aa")
if(!C.a.Z(l,c)){c.sbj(0,l.length)
C.a.h(l,c)}a0=h.C(0,e.ga5())
c=e.ga5()
b=$.cm
if(b==null){b=new V.ai(0,0,0)
$.cm=b}b=c.bs(b)
c=d.b
C.b.v(c.a,c.d,b.a,b.b,b.c)
c=$.cm
if(c==null){c=new V.ai(0,0,0)
$.cm=c}c=a0.bs(c)
b=d.c
C.b.v(b.a,b.d,c.a,c.b,c.c)
c=a0.d_()
b=d.d
i=new Float32Array(H.bT(H.i(new V.dA(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).aj(0,!0),"$ia",o,"$aa")))
C.b.fb(b.a,b.d,!1,i)
b=e.gu(e)
c=d.e
C.b.v(c.a,c.d,b.a,b.b,b.c)
b=e.gbq()
c=b.geW(b)
if(!c){c=d.r
C.b.N(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.N(a1,c,0)
else C.b.N(a1,c,b.a)
c=d.r
C.b.N(c.a,c.d,0)}c=e.gcD()
b=d.x
C.b.M(b.a,b.d,c)
c=e.gcE()
b=d.y
C.b.M(b.a,b.d,c)
c=e.gcF()
b=d.z
C.b.M(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eK
C.b.N(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cV
if(g>=o.length)return H.f(o,g)
d=o[g]
o=e.gbq()
H.i(l,"$ia",u,"$aa")
if(!C.a.Z(l,o)){o.sbj(0,l.length)
C.a.h(l,o)}o=e.gbm(e)
n=d.b
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gcO(e)
n=d.c
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gc1()
n=d.d
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gc_(e)
n=d.e
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=h.bs(e.gbm(e))
n=d.f
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gbq()
n=o.geW(o)
if(!n){o=d.x
C.b.N(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.N(b,n,0)
else C.b.N(b,n,o.a)
o=d.x
C.b.N(o.a,o.d,0)}o=e.gu(e)
n=d.y
C.b.v(n.a,n.d,o.a,o.b,o.c)
o=e.gl3()
n=d.z
C.b.M(n.a,n.d,o)
o=e.gl4()
n=d.Q
C.b.M(n.a,n.d,o)
o=e.gcD()
n=d.ch
C.b.M(n.a,n.d,o)
o=e.gcE()
n=d.cx
C.b.M(n.a,n.d,o)
o=e.gcF()
n=d.cy
C.b.M(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.i:break
case C.e:this.a0(l,this.Q.d)
u=this.a
q=this.Q.d
u.ar(u.ev,u.bN,q)
break
case C.h:this.a0(l,this.Q.e)
u=this.a
q=this.Q.e
u.am(u.ew,u.bN,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga5().d_()
a2.Q=q}u=u.id
u.toString
u.aq(q.aj(0,!0))}if(s.dy){this.a0(l,this.ch)
u=this.a
q=this.ch
u.am(u.ex,u.ey,q)
switch(s.r){case C.d:break
case C.i:u=this.a
q=this.cx.f
u=u.bO
u.toString
p=q.a
o=q.b
q=q.c
C.b.v(u.a,u.d,p,o,q)
break
case C.e:this.a0(l,this.cx.d)
u=this.a
q=this.cx.d
u.ar(u.ez,u.bP,q)
q=this.a
u=this.cx.f
q=q.bO
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
break
case C.h:this.a0(l,this.cx.e)
u=this.a
q=this.cx.e
u.am(u.eA,u.bP,q)
q=this.a
u=this.cx.f
q=q.bO
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.i:u=this.a
q=this.cy.f
u=u.bR
u.toString
p=q.a
o=q.b
q=q.c
C.b.v(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bQ
C.b.M(q.a,q.d,o)
break
case C.e:this.a0(l,this.cy.d)
u=this.a
q=this.cy.d
u.ar(u.eB,u.bS,q)
q=this.a
u=this.cy.f
q=q.bR
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bQ
C.b.M(u.a,u.d,o)
break
case C.h:this.a0(l,this.cy.e)
u=this.a
q=this.cy.e
u.am(u.eC,u.bS,q)
q=this.a
u=this.cy.f
q=q.bR
q.toString
p=u.a
o=u.b
u=u.c
C.b.v(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bQ
C.b.M(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.i:u=this.a
p=this.db.f
u=u.bT
C.b.M(u.a,u.d,p)
break
case C.e:this.a0(l,this.db.d)
u=this.a
p=this.db.d
u.ar(u.eD,u.bU,p)
p=this.a
u=this.db.f
p=p.bT
C.b.M(p.a,p.d,u)
break
case C.h:this.a0(l,this.db.e)
u=this.a
p=this.db.e
u.am(u.eE,u.bU,p)
p=this.a
u=this.db.f
p=p.bT
C.b.M(p.a,p.d,u)
break}u=a2.a
C.b.cP(u,3042)
C.b.jG(u,770,771)}for(j=0;j<l.length;++j)l[j].a3(a2)
u=a3.e
u.a3(a2)
u.ai(a2)
u.au(a2)
if(q)C.b.jZ(a2.a,3042)
for(j=0;j<l.length;++j)l[j].au(a2)
u=this.a
u.toString
C.b.de(a2.a,null)
u.x.ek()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dF().as},
sh8:function(a){this.e=H.i(a,"$iX",[V.an],"$aX")}}
O.fv.prototype={
iN:function(a){var u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.F(this.b,u,a,this,[P.z])
u.b=!0
this.a.P(u)}},
aI:function(){this.dm()
this.iN(1)}}
O.cg.prototype={
P:function(a){this.a.P(H.c(a,"$iw"))},
ba:function(){return this.P(null)},
aI:function(){},
aJ:function(){},
e1:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gq().X(0,this.gaX())
t=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gaX())
u=new D.F(this.b+".texture2D",t,this.d,this,[T.dW])
u.b=!0
this.a.P(u)}},
e2:function(a){},
jI:function(a){var u
if(this.c!==C.d){this.c=C.d
u=this.a
u.a=null
u.P(null)}this.aI()
this.e1(null)
this.e2(null)
this.a.P(null)}}
O.fw.prototype={}
O.aR.prototype={
cA:function(a){var u,t
if(!J.a2(this.f,a)){u=this.f
this.f=a
t=new D.F(this.b+".color",u,a,this,[V.v])
t.b=!0
this.a.P(t)}},
aI:function(){this.dm()
this.cA(new V.v(0,0,0))},
aJ:function(){this.fF()
this.cA(new V.v(1,1,1))},
su:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.aJ()
u=this.a
u.a=null
u.P(null)}this.cA(b)}}
O.fy.prototype={
bz:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.F(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.P(u)}},
aI:function(){this.dn()
this.bz(1)},
aJ:function(){this.bu()
this.bz(1)},
saM:function(a){var u
if(a<=0)this.jI(0)
else if(this.c===C.d){this.c=C.i
this.bu()
this.bz(1)
u=this.a
u.a=null
u.P(null)}this.bz(a)}}
O.fz.prototype={
bA:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.F(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.P(u)}},
aI:function(){this.dn()
this.bA(100)},
aJ:function(){this.bu()
this.bA(100)}}
O.dO.prototype={
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
P:function(a){var u
H.c(a,"$iw")
u=this.e
if(u!=null)u.G(a)},
ba:function(){return this.P(null)},
f4:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.c(a.fr.k(0,"Skybox"),"$idP")
if(u==null){t=a.a
u=new A.dP(t,"Skybox")
u.dq(t,"Skybox")
u.eU($.ml,$.mk)
u.z=u.x.k(0,"posAttr")
u.Q=H.h(u.y.k(0,"fov"),"$iV")
u.ch=H.h(u.y.k(0,"ratio"),"$iV")
u.cx=H.h(u.y.k(0,"boxClr"),"$iG")
u.cy=H.h(u.y.k(0,"boxTxt"),"$iad")
u.db=H.h(u.y.k(0,"viewMat"),"$iaq")
a.ea(u)}this.a=u}if(b.e==null){t=b.d.eg(new Z.ec(a.a),$.aL())
t.aN($.aL()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a3(a)}t=a.d
s=a.c
r=this.a
r.a3(a)
q=this.b
p=r.Q
C.b.M(p.a,p.d,q)
q=r.ch
C.b.M(q.a,q.d,t/s)
s=this.c
r.cy.dj(s)
s=this.d
t=r.cx
C.b.v(t.a,t.d,s.a,s.b,s.c)
s=a.db.ga5().d_()
r=r.db
r.toString
r.aq(s.aj(0,!0))
t=b.e
if(t instanceof Z.c6){t.a3(a)
t.ai(a)
t.au(a)}else b.e=null
t=this.a
t.toString
C.b.de(a.a,null)
t.x.ek()
t=this.c
if(t!=null)t.au(a)}}
O.bq.prototype={}
T.cv.prototype={}
T.dW.prototype={}
T.he.prototype={
sbj:function(a,b){this.a=b
return b},
gq:function(){var u=this.y
if(u==null){u=D.I()
this.y=u}return u},
a3:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.bC(u,33984+this.a)
C.b.ad(u,3553,this.b)}},
au:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bC(u,33984+this.a)
C.b.ad(u,3553,null)}}}
T.cw.prototype={
sbj:function(a,b){this.a=b
return b},
gq:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
a3:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.bC(u,33984+this.a)
C.b.ad(u,34067,this.b)}},
au:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bC(u,33984+this.a)
C.b.ad(u,34067,null)}}}
T.hf.prototype={
kn:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.ad(u,3553,t)
C.b.aE(u,3553,10242,33071)
C.b.aE(u,3553,10243,33071)
C.b.aE(u,3553,10241,9729)
C.b.aE(u,3553,10240,9729)
C.b.ad(u,3553,null);++this.d
s=W.jq(null,a,null)
r=new T.he()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.n
W.a0(s,"load",H.k(new T.hh(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
km:function(a){return this.kn(a,!1,!1,!1,!1)},
aW:function(a,b,c,d,e,f){var u,t
u=W.jq(null,c,null);++this.d
t=W.n
W.a0(u,"load",H.k(new T.hg(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
e0:function(a,b,c){var u,t,s,r
b=V.jS(b,2)
u=V.jS(a.width,2)
t=V.jS(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jl(null,null)
s.width=u
s.height=t
r=H.c(C.q.fk(s,"2d"),"$iby")
r.imageSmoothingEnabled=!1;(r&&C.D).k0(r,a,0,0,s.width,s.height)
return P.nb(C.D.hr(r,0,0,s.width,s.height))}}}
T.hh.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.e0(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.ad(t,3553,this.e)
C.b.f3(t,37440,this.f?1:0)
C.b.f7(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ff(t,3553)
C.b.ad(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.en()}++s.e},
$S:9}
T.hg.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.e0(this.b,u.c,this.c)
s=u.a
C.b.ad(s,34067,this.d)
C.b.f3(s,37440,this.e?1:0)
C.b.f7(s,this.f,0,6408,6408,5121,t)
C.b.ad(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.en()}++u.e},
$S:9}
V.b_.prototype={
aO:function(a){return!0},
i:function(a){return"all"},
$ias:1}
V.as.prototype={}
V.dx.prototype={
aO:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aO(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sab:function(a){this.a=H.i(a,"$ia",[V.as],"$aa")},
$ias:1}
V.ao.prototype={
aO:function(a){return!this.fE(a)},
i:function(a){return"!["+this.dl(0)+"]"}}
V.fP.prototype={
aO:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bO(this.a)
t=H.bO(this.b)
return u+".."+t},
$ias:1}
V.fX.prototype={
fK:function(a){var u,t
if(a.a.length<=0)throw H.d(P.t("May not create a SetMatcher with zero characters."))
u=new H.aH([P.m,P.L])
for(t=new H.cf(a,a.gm(a),0,[H.a8(a,"T",0)]);t.A();)u.p(0,t.d,!0)
this.siM(u)},
aO:function(a){return this.a.bE(a)},
i:function(a){return P.dS(this.a.gaC(),0,null)},
siM:function(a){this.a=H.i(a,"$iJ",[P.m,P.L],"$aJ")},
$ias:1}
V.cq.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cy(this.a.j(0,b))
r.sab(H.b([],[V.as]))
r.c=!1
C.a.h(this.c,r)
return r},
k8:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aO(a))return r}return},
i:function(a){return this.b},
sj4:function(a){this.c=H.i(a,"$ia",[V.cy],"$aa")}}
V.e0.prototype={
i:function(a){var u,t
u=H.jU(this.b,"\n","\\n")
t=H.jU(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cx.prototype={
aQ:function(a,b,c){var u,t,s
H.i(c,"$ia",[P.e],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.p(0,s,b)}},
i:function(a){return this.b},
siF:function(a){var u=P.e
this.c=H.i(a,"$iJ",[u,u],"$aJ")}}
V.hj.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cq(this,b)
u.sj4(H.b([],[V.cy]))
u.d=null
this.a.p(0,b,u)}return u},
S:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cx(this,a)
t=P.e
u.siF(new H.aH([t,t]))
this.b.p(0,a,u)}return u},
fa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.e0])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.F(a,o)
m=t.k8(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dS(r,0,null)
throw H.d(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dS(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.e0(j==null?k.b:j,l,o)}++o}}},
siU:function(a){this.a=H.i(a,"$iJ",[P.e,V.cq],"$aJ")},
siY:function(a){this.b=H.i(a,"$iJ",[P.e,V.cx],"$aJ")}}
V.cy.prototype={
i:function(a){return this.b.b+": "+this.dl(0)}}
X.bw.prototype={$iaT:1}
X.f7.prototype={
gq:function(){var u=this.x
if(u==null){u=D.I()
this.x=u}return u},
ax:function(a){var u=this.x
if(u!=null)u.G(a)},
seh:function(a,b){var u
if(this.b){this.b=!1
u=new D.F("clearColor",!0,!1,this,[P.L])
u.b=!0
this.ax(u)}},
a3:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.jF(u,36160,null)
C.b.cP(u,2884)
C.b.cP(u,2929)
C.b.jY(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.C(t)
p=C.j.at(q*t)
q=r.b
if(typeof s!=="number")return H.C(s)
o=C.j.at(q*s)
q=C.j.at(r.c*t)
a.c=q
r=C.j.at(r.d*s)
a.d=r
C.b.kX(u,p,o,q,r)
C.b.jL(u,this.c)
if(this.b){r=this.a
C.b.jK(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.jJ(u,n)}}
X.fc.prototype={
gq:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
a3:function(a){var u
a.cy.bZ(V.bK())
u=V.bK()
a.db.bZ(u)},
au:function(a){a.cy.aP()
a.db.aP()},
$iaT:1,
$ibw:1}
X.dH.prototype={
gq:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
ax:function(a){var u
H.c(a,"$iw")
u=this.f
if(u!=null)u.G(a)},
h1:function(){return this.ax(null)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aS(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bZ(n)
u=$.kl
if(u==null){u=V.kn()
t=V.kG()
s=$.kD
if(s==null){s=new V.O(0,0,-1)
$.kD=s}s=V.kg(u,t,s)
$.kl=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b3(a,this)
if(l!=null)m=l.C(0,m)}a.db.bZ(m)},
au:function(a){a.cy.aP()
a.db.aP()},
$iaT:1,
$ibw:1}
X.ct.prototype={}
V.be.prototype={
bv:function(a){this.b=new P.fa(C.Y)
this.c=null
this.sck(H.b([],[[P.a,W.ax]]))},
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
n=this.b.hd(p,0,p.length)
m=n==null?p:n
C.k.fu(o,H.jU(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaD(this.d),o)}},
f1:function(a){var u,t,s,r
H.i(a,"$ia",[P.e],"$aa")
this.sck(H.b([],[[P.a,W.ax]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bF()
this.c=t}for(t=t.fa(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bY(t[r])},
sck:function(a){this.d=H.i(a,"$ia",[[P.a,W.ax]],"$aa")}}
V.jf.prototype={
$1:function(a){H.c(a,"$iaV")
P.jT(C.j.f9(this.a.gkd(),2)+" fps")},
$S:48}
V.eS.prototype={
bY:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
bF:function(){var u,t,s,r
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.u(new H.r("_"))
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
s=V.u(new H.r("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.u(new H.r("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.u(new H.r("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.u(new H.r('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.u(new H.r('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.u(new H.r("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.u(new H.r('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b_())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.u(new H.r("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.u(new H.r("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.u(new H.r("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.u(new H.r("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b_())
s=u.j(0,"Start").l(0,"Slash")
t=V.u(new H.r("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.u(new H.r("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.as]
s.sab(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ao()
s.sab(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.u(new H.r("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.u(new H.r(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.u(new H.r(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.S("Num")
s=u.j(0,"Float")
s.d=s.a.S("Num")
s=u.j(0,"Sym")
s.d=s.a.S("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.S("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.S("String")
s=u.j(0,"EndComment")
s.d=s.a.S("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.S("Whitespace")
s=u.j(0,"Id")
t=s.a.S("Id")
s.d=t
s=[P.e]
t.aQ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aQ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aQ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f8.prototype={
bY:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
bF:function(){var u,t,s,r
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.u(new H.r("_"))
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
s=V.u(new H.r("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.u(new H.r("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.u(new H.r("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.u(new H.r("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.u(new H.r("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.b_())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.as]
s.sab(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.u(new H.r("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ao()
t.sab(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.u(new H.r(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.u(new H.r(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.S("Num")
t=u.j(0,"Float")
t.d=t.a.S("Num")
t=u.j(0,"Sym")
t.d=t.a.S("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.S("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.S("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.S("Whitespace")
t=u.j(0,"Id")
s=t.a.S("Id")
t.d=s
t=[P.e]
s.aQ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aQ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aQ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.f9.prototype={
bY:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
bF:function(){var u,t,s
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.u(new H.r("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.u(new H.r("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.u(new H.r("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.u(new H.r("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.u(new H.r('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.u(new H.r('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.u(new H.r("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.u(new H.r('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.b_())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b_())
t=u.j(0,"Other").l(0,"Other")
s=new V.ao()
s.sab(H.b([],[V.as]))
C.a.h(t.a,s)
t=V.u(new H.r('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.S("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.S("String")
t=u.j(0,"Id")
s=t.a.S("Id")
t.d=s
s.aQ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.j(0,"Attr")
s.d=s.a.S("Attr")
s=u.j(0,"Other")
s.d=s.a.S("Other")
return u}}
V.fK.prototype={
f1:function(a){H.i(a,"$ia",[P.e],"$aa")
this.sck(H.b([],[[P.a,W.ax]]))
this.O(C.a.l(a,"\n"),"#111")},
bY:function(a){},
bF:function(){return}}
V.fM.prototype={
e7:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.hE().gbn().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.be(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.c2(this.c).h(0,q)
o=W.lR("radio")
o.checked=s
o.name=u
u=W.n
W.a0(o,"change",H.k(new V.fN(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.H.B(q,o)
n=r.createElement("span")
n.textContent=b
C.H.B(q,n)
J.c2(this.c).h(0,r.createElement("br"))},
af:function(a,b,c){return this.e7(a,b,c,!1)},
be:function(a){var u,t,s,r,q
u=P.hE()
t=P.e
s=P.kd(u.gbn(),t,t)
s.p(0,this.a,a)
r=u.d9(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.E).dY(t,new P.eq([],[]).c2(""),"",q)}}
V.fN.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.be(this.d)}},
$S:9}
V.h0.prototype={
fL:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).B(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.B(t,r)
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
o=W.n
W.a0(u,"scroll",H.k(new V.h2(s),{func:1,ret:-1,args:[o]}),!1,o)},
e9:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ia",[P.e],"$aa")
this.iP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fa(C.a.kj(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.nw(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.B(t,l)}else{k=P.ew(C.K,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
fj:function(a){var u,t,s,r
u=new V.eS("dart")
u.bv("dart")
t=new V.f8("glsl")
t.bv("glsl")
s=new V.f9("html")
s.bv("html")
r=C.a.k9(H.b([u,t,s],[V.be]),new V.h3(a))
if(r!=null)return r
u=new V.fK("plain")
u.bv("plain")
return u},
e8:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.i(a7,"$ia",[P.e],"$aa")
u=H.b([],[P.m])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cX(r).a7(r,"+")){C.a.p(a7,s,C.c.aw(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a7(r,"-")){C.a.p(a7,s,C.c.aw(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fj(a5)
q.f1(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.ew(C.K,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.k_(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.B(j,i)
C.y.B(k,j)
C.n.B(l,k)
C.o.B(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.f(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.y.B(a,r[a0])
C.n.B(e,d)
C.n.B(e,c)
C.n.B(e,a)
C.o.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gV(r);a3.A();)C.y.B(c,a3.gK())
C.n.B(e,d)
C.n.B(e,c)
C.o.B(n,e)}},
jw:function(a){var u,t,s,r,q,p,o
H.i(a,"$ia",[P.e],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.B(this.a,t)
r=C.o.ht(t,-1)
s=H.c((r&&C.n).dN(r,-1),"$iaU").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<2;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.c(C.n.dN(r,-1),"$iaU")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.y).B(o,p)}},
iP:function(){var u,t,s,r
if(this.b!=null)return
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ao()
r=[V.as]
s.sab(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ao()
s.sab(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ao()
s.sab(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.u(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.u(new H.r("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ao()
t.sab(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ao()
t.sab(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b_())
s=u.j(0,"Other").l(0,"Other")
t=new V.ao()
t.sab(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.S("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.S("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.S("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.S("Link")
s=u.j(0,"Other")
s.d=s.a.S("Other")
this.b=u}}
V.h2.prototype={
$1:function(a){P.kw(C.z,new V.h1(this.a))},
$S:9}
V.h1.prototype={
$0:function(){var u,t,s
u=C.j.at(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.h3.prototype={
$1:function(a){return H.c(a,"$ibe").a===this.a},
$S:49}
V.hb.prototype={
af:function(a,b,c){var u,t,s,r,q
u=W.jq(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.c2(this.c)
s=t.gm(t)
t=W.a_
W.a0(u,"click",H.k(new V.hd(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.c2(this.c).h(0,u)
J.c2(this.c).h(0,document.createElement("br"))
r=P.hE().gbn().k(0,H.j(this.a))
if(r==null){this.be(s)
q=c}else q=P.cZ(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.af(a,b,!1)},
be:function(a){var u,t,s,r,q
u=P.hE()
t=P.e
s=P.kd(u.gbn(),t,t)
s.p(0,this.a,""+a)
r=u.d9(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.E).dY(t,new P.eq([],[]).c2(""),"",q)}}
V.hd.prototype={
$1:function(a){var u,t
H.c(a,"$ia_")
u=this.a
t=J.c2(u.c)
t.U(t,new V.hc())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.be(this.d)},
$S:50}
V.hc.prototype={
$1:function(a){var u
H.c(a,"$iH")
if(!!J.P(a).$ibF){u=a.style
u.border="solid 2px white"}},
$S:51}
B.j2.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.1,0.1,0.1))
t=u.x
t.su(0,new V.v(0.2,0.2,0.2))
u.cy.su(0,new V.v(0,0,0))
u.cx.su(0,new V.v(1,1,1))},
$S:0}
B.j3.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.11,0.11,0.1))
t=u.x
t.su(0,new V.v(0.21,0.21,0.2))
u.cy.su(0,new V.v(0,0,0))
u=u.cx
u.su(0,new V.v(1,0.9,0.5))},
$S:0}
B.j4.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.1,0.1,0.1))
t=u.x
t.su(0,new V.v(0.1,0.1,0.1))
u.cy.saM(0.4)
t=u.cy
t.su(0,new V.v(0.6,0.6,0.6))
u=u.cx
u.su(0,new V.v(0.4,0.4,0.4))},
$S:0}
B.j5.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.1,0.1,0.1))
t=u.x
t.su(0,new V.v(0.1,0.1,0.1))
u.cy.saM(0.4)
t=u.cy
t.su(0,new V.v(0.2,0.3,1))
u=u.cx
u.su(0,new V.v(0.3,0.3,0.3))},
$S:0}
B.j6.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.1,0.1,0.1))
t=u.x
t.su(0,new V.v(0.1,0.1,0.1))
u.cy.saM(0.6)
t=u.cy
t.su(0,new V.v(0.8,0.8,0.8))
u=u.cx
u.su(0,new V.v(0.2,0.2,0.2))},
$S:0}
B.j7.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.1,0.1,0.1))
t=u.x
t.su(0,new V.v(0.1,0.1,0.1))
u.cy.saM(0.6)
u.cy.su(0,new V.v(1,1,1))
u.cx.su(0,new V.v(0,0,0))},
$S:0}
B.j8.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.1,0.1,0.1))
t=u.x
t.su(0,new V.v(0.1,0.1,0.1))
u.cy.saM(0.9)
t=u.cy
t.su(0,new V.v(1,0.8,0.8))
u.cx.su(0,new V.v(0,0,0))},
$S:0}
B.j9.prototype={
$0:function(){var u,t
u=this.a
u.r.su(0,new V.v(0,0,0))
t=u.x
t.su(0,new V.v(0.1,0.1,0.1))
u.cy.saM(0.99)
t=u.cy
t.su(0,new V.v(0.95,0.95,0.95))
u.cx.su(0,new V.v(0,0,0))},
$S:0}
B.ja.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.su(0,new V.v(0.3,0.3,0.3))
t=u.x
t.su(0,new V.v(0.5,0.5,0.5))
u.cy.su(0,new V.v(0,0,0))
u=u.cx
u.su(0,new V.v(0.3,0.3,0.3))},
$S:0}
B.jb.prototype={
$1:function(a){var u,t,s
u=this.a.Q
t=this.b.f.km(a)
s=u.c
if(s!==C.e){if(s===C.d)u.aJ()
u.c=C.e
u.e2(null)
s=u.a
s.a=null
s.P(null)}u.e1(t)},
$S:15}
B.jc.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iw")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.e8("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.e8("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a9.prototype
u.fB=u.i
u=J.dq.prototype
u.fD=u.i
u=P.l.prototype
u.fC=u.c3
u=W.H.prototype
u.cb=u.an
u=W.eo.prototype
u.fG=u.az
u=O.cg.prototype
u.dm=u.aI
u.fF=u.aJ
u=O.aR.prototype
u.dn=u.aI
u.bu=u.aJ
u=V.dx.prototype
u.fE=u.aO
u.dl=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n5","mz",10)
u(P,"n6","mA",10)
u(P,"n7","mB",10)
t(P,"l0","n4",3)
s(W,"nh",4,null,["$4"],["mD"],27,0)
s(W,"ni",4,null,["$4"],["mE"],27,0)
var m
r(m=E.ah.prototype,"gf_",0,0,null,["$1","$0"],["f0","kw"],1,0)
r(m,"geY",0,0,null,["$1","$0"],["eZ","kt"],1,0)
q(m,"gkr","ks",6)
q(m,"gku","kv",6)
r(m=E.e_.prototype,"gds",0,0,null,["$1","$0"],["du","dt"],1,0)
p(m,"gkJ","f5",3)
o(m=X.e6.prototype,"ghY","hZ",11)
o(m,"ghM","hN",11)
o(m,"ghS","hT",4)
o(m,"gi1","i2",21)
o(m,"gi_","i0",21)
o(m,"gi5","i6",4)
o(m,"gi9","ia",4)
o(m,"ghW","hX",4)
o(m,"gi7","i8",4)
o(m,"ghU","hV",4)
o(m,"gib","ic",36)
o(m,"gie","ig",11)
o(m,"giw","ix",12)
o(m,"gis","it",12)
o(m,"giu","iv",12)
r(D.bg.prototype,"gfQ",0,0,null,["$1","$0"],["aF","fR"],1,0)
r(m=D.dt.prototype,"gdS",0,0,null,["$1","$0"],["dT","i3"],1,0)
o(m,"gih","ii",38)
q(m,"ghG","hH",17)
q(m,"gil","im",17)
n(V.R.prototype,"gm","d0",26)
n(V.O.prototype,"gm","d0",26)
r(m=U.cd.prototype,"gaU",0,0,null,["$1","$0"],["T","aa"],1,0)
q(m,"ghE","hF",24)
q(m,"gij","ik",24)
r(m=U.e7.prototype,"gaU",0,0,null,["$1","$0"],["T","aa"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
r(m=U.e8.prototype,"gaU",0,0,null,["$1","$0"],["T","aa"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
o(m,"ghy","hz",2)
o(m,"ghA","hB",2)
o(m,"gj2","j3",2)
o(m,"gj0","j1",2)
o(m,"giZ","j_",2)
o(U.e9.prototype,"ghC","hD",2)
r(m=M.d9.prototype,"ga1",0,0,null,["$1","$0"],["a2","b6"],1,0)
q(m,"gio","ip",22)
q(m,"giq","ir",22)
r(M.db.prototype,"ga1",0,0,null,["$1","$0"],["a2","b6"],1,0)
r(m=M.df.prototype,"ga1",0,0,null,["$1","$0"],["a2","b6"],1,0)
q(m,"ghO","hP",6)
q(m,"ghQ","hR",6)
r(m=O.dy.prototype,"gaX",0,0,null,["$1","$0"],["P","ba"],1,0)
r(m,"giI",0,0,null,["$1","$0"],["dZ","iJ"],1,0)
q(m,"ghI","hJ",14)
q(m,"ghK","hL",14)
r(O.cg.prototype,"gaX",0,0,null,["$1","$0"],["P","ba"],1,0)
r(O.dO.prototype,"gaX",0,0,null,["$1","$0"],["P","ba"],1,0)
r(X.dH.prototype,"gh0",0,0,null,["$1","$0"],["ax","h1"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.ju,J.a9,J.am,P.ek,P.l,H.cf,P.aO,H.bD,H.cH,H.eO,H.fQ,H.hn,P.bi,H.c7,H.ep,P.bJ,H.fj,H.fl,H.fg,P.er,P.aZ,P.aA,P.ed,P.h5,P.cs,P.h6,P.aV,P.af,P.iL,P.ir,P.bR,P.ej,P.T,P.iC,P.fr,P.bz,P.fb,P.iJ,P.iH,P.L,P.ag,P.ae,P.bh,P.fI,P.dR,P.eg,P.f6,P.bj,P.a,P.J,P.D,P.ap,P.e,P.ac,P.bS,P.hC,P.iu,W.eQ,W.bs,W.ar,W.dF,W.eo,W.ix,W.dg,W.au,W.iq,W.ex,P.iv,P.eu,P.ik,P.M,O.X,O.ch,E.eI,E.ah,E.fR,E.e_,Z.eb,Z.ec,Z.c6,Z.bk,Z.aX,D.eL,D.bB,D.w,X.d8,X.dr,X.fi,X.fo,X.at,X.fA,X.hl,X.e6,D.bg,D.a1,D.dI,D.dQ,D.dX,D.dY,D.dZ,V.v,V.aF,V.eZ,V.dA,V.an,V.a4,V.ai,V.b5,V.dL,V.R,V.O,U.e7,U.e8,U.e9,M.db,M.df,M.av,A.d5,A.eF,A.fx,A.cz,A.cD,A.cB,A.cE,A.cC,A.cF,A.bA,A.e2,A.hw,F.a3,F.b2,F.bo,F.dN,F.fY,F.fZ,F.h_,F.aw,F.hN,F.hO,F.hR,F.hS,O.bq,O.cg,T.hf,V.b_,V.as,V.dx,V.fP,V.fX,V.cq,V.e0,V.cx,V.hj,X.bw,X.ct,X.fc,X.dH,V.be,V.fM,V.h0,V.hb])
s(J.a9,[J.ff,J.dn,J.dq,J.aP,J.dp,J.bH,H.bL,W.bC,W.by,W.ee,W.eT,W.dd,W.de,W.n,W.dj,W.eh,W.b1,W.dv,W.em,W.dK,W.aI,W.es,W.ey,P.d6,P.dh,P.dJ,P.bQ,P.dM,P.dV,P.e3])
s(J.dq,[J.fJ,J.cG,J.bn])
t(J.jt,J.aP)
s(J.dp,[J.dm,J.dl])
t(P.fn,P.ek)
s(P.fn,[H.e4,W.i1,W.ak,P.f2])
t(H.r,H.e4)
s(P.l,[H.eW,H.fs,H.cI])
s(H.eW,[H.bI,H.fk])
s(P.aO,[H.ft,H.hW])
t(H.fu,H.bI)
t(H.eP,H.eO)
s(P.bi,[H.fH,H.fh,H.hA,H.hp,H.eK,H.fV,P.dG,P.aE,P.hB,P.hy,P.cr,P.eN,P.eR])
s(H.c7,[H.jg,H.ha,H.iZ,H.j_,H.j0,P.hY,P.hX,P.hZ,P.i_,P.iB,P.iA,P.i7,P.ib,P.i8,P.i9,P.ia,P.ie,P.ig,P.id,P.ic,P.h7,P.h8,P.iT,P.io,P.im,P.ip,P.fm,P.fq,P.iI,P.eU,P.eV,P.hH,P.hD,P.hF,P.hG,P.iD,P.iE,P.iG,P.iF,P.iP,P.iO,P.iQ,P.iR,W.eX,W.i6,W.fG,W.fF,W.is,W.it,W.iz,W.iK,P.iw,P.iV,P.f3,P.f4,E.fS,E.fT,E.fU,E.hi,D.f0,D.f1,F.iM,F.hU,F.hT,F.hP,F.hQ,T.hh,T.hg,V.jf,V.fN,V.h2,V.h1,V.h3,V.hd,V.hc,B.j2,B.j3,B.j4,B.j5,B.j6,B.j7,B.j8,B.j9,B.ja,B.jb,B.jc])
s(H.ha,[H.h4,H.c4])
t(P.fp,P.bJ)
s(P.fp,[H.aH,W.i0])
t(H.dB,H.bL)
s(H.dB,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.dC,H.cN)
t(H.cP,H.cO)
t(H.dD,H.cP)
s(H.dD,[H.fB,H.fC,H.fD,H.fE,H.dE,H.ck])
t(P.il,P.iL)
t(P.ij,P.ir)
t(P.ev,P.fr)
t(P.e5,P.ev)
s(P.bz,[P.eG,P.eY])
t(P.bf,P.h6)
s(P.bf,[P.eH,P.fa,P.hK,P.hJ])
t(P.hI,P.eY)
s(P.ae,[P.z,P.m])
s(P.aE,[P.bP,P.fd])
t(P.i2,P.bS)
s(W.bC,[W.B,W.cJ])
s(W.B,[W.H,W.bd,W.c9,W.cK])
s(W.H,[W.x,P.o])
s(W.x,[W.d3,W.eE,W.c3,W.bc,W.bx,W.ax,W.f5,W.di,W.bF,W.ce,W.ds,W.ci,W.fW,W.aU,W.dT,W.dU,W.h9,W.cu])
t(W.c8,W.ee)
t(W.ei,W.eh)
t(W.bE,W.ei)
t(W.dk,W.c9)
t(W.br,W.n)
s(W.br,[W.aQ,W.a_,W.aJ])
t(W.en,W.em)
t(W.cl,W.en)
t(W.et,W.es)
t(W.hm,W.et)
t(W.hV,W.ci)
t(W.aY,W.a_)
t(W.ef,W.de)
t(W.ez,W.ey)
t(W.el,W.ez)
t(W.i3,W.i0)
t(W.i4,P.h5)
t(W.jD,W.i4)
t(W.i5,P.cs)
t(W.iy,W.eo)
t(P.eq,P.iv)
t(P.ay,P.ik)
t(P.co,P.o)
s(E.eI,[Z.d7,A.cp,T.cv])
s(D.w,[D.bl,D.bm,D.F,X.fL])
s(X.fL,[X.dw,X.b3,X.cj,X.e1])
s(O.X,[D.dt,U.cd,M.d9])
s(D.eL,[U.eM,U.aa])
t(U.da,U.aa)
s(A.cp,[A.dz,A.dP])
s(A.e2,[A.K,A.hs,A.ht,A.hv,A.hq,A.V,A.hr,A.G,A.hu,A.hx,A.cA,A.aq,A.aj,A.ad])
s(O.bq,[O.dy,O.dO])
s(O.cg,[O.fv,O.fw,O.aR])
s(O.aR,[O.fy,O.fz])
s(T.cv,[T.dW,T.cw])
t(T.he,T.dW)
s(V.dx,[V.ao,V.cy])
t(X.f7,X.ct)
s(V.be,[V.eS,V.f8,V.f9,V.fK])
u(H.e4,H.cH)
u(H.cM,P.T)
u(H.cN,H.bD)
u(H.cO,P.T)
u(H.cP,H.bD)
u(P.ek,P.T)
u(P.ev,P.iC)
u(W.ee,W.eQ)
u(W.eh,P.T)
u(W.ei,W.ar)
u(W.em,P.T)
u(W.en,W.ar)
u(W.es,P.T)
u(W.et,W.ar)
u(W.ey,P.T)
u(W.ez,W.ar)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bc.prototype
C.q=W.bx.prototype
C.D=W.by.prototype
C.k=W.ax.prototype
C.V=W.dd.prototype
C.X=W.di.prototype
C.E=W.dj.prototype
C.r=W.dk.prototype
C.Z=J.a9.prototype
C.a=J.aP.prototype
C.a_=J.dl.prototype
C.f=J.dm.prototype
C.t=J.dn.prototype
C.j=J.dp.prototype
C.c=J.bH.prototype
C.a6=J.bn.prototype
C.H=W.ds.prototype
C.ac=W.cl.prototype
C.N=J.fJ.prototype
C.O=W.dK.prototype
C.b=P.bQ.prototype
C.y=W.aU.prototype
C.o=W.dT.prototype
C.n=W.dU.prototype
C.C=J.cG.prototype
C.P=W.aY.prototype
C.Q=W.cJ.prototype
C.S=new P.eH(!1)
C.R=new P.eG(C.S)
C.T=new P.fI()
C.U=new P.hK()
C.l=new P.il()
C.d=new A.bA(0,"ColorSourceType.None")
C.i=new A.bA(1,"ColorSourceType.Solid")
C.e=new A.bA(2,"ColorSourceType.Texture2D")
C.h=new A.bA(3,"ColorSourceType.TextureCube")
C.z=new P.bh(0)
C.W=new P.bh(5e6)
C.Y=new P.fb("element",!0,!1,!1,!1)
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
C.F=function(hooks) { return hooks; }

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
C.G=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.b(u([127,2047,65535,1114111]),[P.m])
C.u=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.v=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.w=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.J=H.b(u([]),[P.e])
C.a9=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.K=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.x=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.L=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.M=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.ab=new H.eP(0,{},C.J,[P.e,P.e])
C.m=new P.hI(!1)})();(function staticFields(){$.aM=0
$.c5=null
$.k1=null
$.jH=!1
$.l3=null
$.kZ=null
$.l9=null
$.iW=null
$.j1=null
$.jQ=null
$.bU=null
$.cT=null
$.cU=null
$.jI=!1
$.W=C.l
$.b0=null
$.jo=null
$.k8=null
$.k7=null
$.kh=null
$.km=null
$.cm=null
$.kr=null
$.kC=null
$.kF=null
$.kE=null
$.hL=null
$.kD=null
$.ml="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mk="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kl=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nE","lc",function(){return H.l2("_$dart_dartClosure")})
u($,"nF","jV",function(){return H.l2("_$dart_js")})
u($,"nK","ld",function(){return H.aW(H.ho({
toString:function(){return"$receiver$"}}))})
u($,"nL","le",function(){return H.aW(H.ho({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nM","lf",function(){return H.aW(H.ho(null))})
u($,"nN","lg",function(){return H.aW(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nQ","lj",function(){return H.aW(H.ho(void 0))})
u($,"nR","lk",function(){return H.aW(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nP","li",function(){return H.aW(H.ky(null))})
u($,"nO","lh",function(){return H.aW(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nT","lm",function(){return H.aW(H.ky(void 0))})
u($,"nS","ll",function(){return H.aW(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o9","jW",function(){return P.my()})
u($,"of","d1",function(){return[]})
u($,"nW","ln",function(){return P.mu()})
u($,"oa","lr",function(){return H.m1(H.bT(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"od","lt",function(){return P.mg("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oe","lu",function(){return P.mX()})
u($,"ob","ls",function(){return P.ke(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"oc","jX",function(){return P.kc(P.e,P.bj)})
u($,"o2","lq",function(){return Z.az(0)})
u($,"nX","lo",function(){return Z.az(511)})
u($,"o4","aL",function(){return Z.az(1)})
u($,"o3","b9",function(){return Z.az(2)})
u($,"nZ","b8",function(){return Z.az(4)})
u($,"o5","ba",function(){return Z.az(8)})
u($,"o6","bb",function(){return Z.az(16)})
u($,"o_","d_",function(){return Z.az(32)})
u($,"o0","d0",function(){return Z.az(64)})
u($,"o1","lp",function(){return Z.az(96)})
u($,"o7","c1",function(){return Z.az(128)})
u($,"nY","b7",function(){return Z.az(256)})
u($,"nD","lb",function(){return new V.eZ(1e-9)})
u($,"nC","N",function(){return $.lb()})})()
var v={mangledGlobalNames:{m:"int",z:"double",ae:"num",e:"String",L:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.m,[P.l,E.ah]]},{func:1,ret:P.D,args:[D.w]},{func:1,ret:P.D,args:[F.a3]},{func:1,ret:P.D,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[P.m,[P.l,V.an]]},{func:1,ret:P.D,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.l,D.a1]]},{func:1,ret:P.L,args:[W.B]},{func:1,ret:P.L,args:[W.au]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:-1,args:[P.m,[P.l,M.av]]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.m,[P.l,U.aa]]},{func:1,ret:P.e,args:[P.m]},{func:1,ret:P.z},{func:1,ret:P.L,args:[W.H,P.e,P.e,W.bs]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.D,args:[P.ae]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[,],opt:[P.ap]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[W.aY]},{func:1,args:[W.n]},{func:1,ret:P.L,args:[[P.l,D.a1]]},{func:1,ret:-1,args:[P.e,P.m]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.D,args:[P.e,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.D,args:[F.aw,P.z,P.z]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:W.H,args:[W.B]},{func:1,ret:[P.J,P.e,P.e],args:[[P.J,P.e,P.e],P.e]},{func:1,ret:P.D,args:[P.aV]},{func:1,ret:P.L,args:[V.be]},{func:1,ret:P.D,args:[W.a_]},{func:1,ret:P.D,args:[W.H]},{func:1,ret:P.M,args:[P.m]},{func:1,ret:-1,args:[W.B,W.B]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a9,MediaError:J.a9,Navigator:J.a9,NavigatorConcurrentHardware:J.a9,NavigatorUserMediaError:J.a9,OverconstrainedError:J.a9,PositionError:J.a9,WebGLActiveInfo:J.a9,WebGLRenderbuffer:J.a9,WebGL2RenderingContext:J.a9,SQLError:J.a9,ArrayBufferView:H.bL,Float32Array:H.dC,Int16Array:H.fB,Int32Array:H.fC,Int8Array:H.fD,Uint32Array:H.fE,Uint8ClampedArray:H.dE,CanvasPixelArray:H.dE,Uint8Array:H.ck,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,HTMLAnchorElement:W.d3,HTMLAreaElement:W.eE,HTMLBaseElement:W.c3,HTMLBodyElement:W.bc,HTMLCanvasElement:W.bx,CanvasRenderingContext2D:W.by,CDATASection:W.bd,CharacterData:W.bd,Comment:W.bd,ProcessingInstruction:W.bd,Text:W.bd,CSSStyleDeclaration:W.c8,MSStyleCSSProperties:W.c8,CSS2Properties:W.c8,HTMLDivElement:W.ax,XMLDocument:W.c9,Document:W.c9,DOMException:W.eT,DOMImplementation:W.dd,DOMRectReadOnly:W.de,Element:W.H,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bC,HTMLFormElement:W.f5,HTMLHeadElement:W.di,History:W.dj,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,HTMLDocument:W.dk,ImageData:W.b1,HTMLImageElement:W.bF,HTMLInputElement:W.ce,KeyboardEvent:W.aQ,HTMLLabelElement:W.ds,Location:W.dv,HTMLAudioElement:W.ci,HTMLMediaElement:W.ci,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,DocumentFragment:W.B,ShadowRoot:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cl,RadioNodeList:W.cl,Range:W.dK,HTMLSelectElement:W.fW,HTMLTableCellElement:W.aU,HTMLTableDataCellElement:W.aU,HTMLTableHeaderCellElement:W.aU,HTMLTableElement:W.dT,HTMLTableRowElement:W.dU,HTMLTableSectionElement:W.h9,HTMLTemplateElement:W.cu,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.hm,CompositionEvent:W.br,FocusEvent:W.br,TextEvent:W.br,UIEvent:W.br,HTMLVideoElement:W.hV,WheelEvent:W.aY,Window:W.cJ,DOMWindow:W.cJ,Attr:W.cK,ClientRect:W.ef,DOMRect:W.ef,NamedNodeMap:W.el,MozNamedAttrMap:W.el,SVGScriptElement:P.co,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.d6,WebGLFramebuffer:P.dh,WebGLProgram:P.dJ,WebGLRenderingContext:P.bQ,WebGLShader:P.dM,WebGLTexture:P.dV,WebGLUniformLocation:P.e3})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dD.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.l6,[])
else B.l6([])})})()
//# sourceMappingURL=test.dart.js.map
