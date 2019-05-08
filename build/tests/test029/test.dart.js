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
a[c]=function(){a[c]=function(){H.nL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jJ(this,a,b,c,true,false,e).prototype
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
j4:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
fh:function(){return new P.bW("No element")},
m2:function(){return new P.bW("Too many elements")},
m1:function(){return new P.bW("Too few elements")},
r:function r(a){this.a=a},
eY:function eY(){},
bN:function bN(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
fy:function fy(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fz:function fz(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
i3:function i3(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(){},
cG:function cG(){},
e5:function e5(){},
lT:function(){throw H.c(P.X("Cannot modify unmodifiable Map"))},
c8:function(a){var u,t
u=H.D(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nt:function(a){return v.types[H.a5(a)]},
nA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iaI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aF(a)
if(typeof u!=="string")throw H.c(H.an(a))
return u},
mo:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fi(u)
t=u[0]
s=u[1]
return new H.fT(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cr:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ml:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.D(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
bS:function(a){return H.mc(a)+H.jG(H.by(a),0,null)},
mc:function(a){var u,t,s,r,q,p,o,n,m
u=J.O(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibv){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c8(r.length>1&&C.c.H(r,0)===36?C.c.ax(r,1):r)},
md:function(){if(!!self.location)return self.location.href
return},
ko:function(a){var u,t,s,r,q
H.eA(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mm:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.an(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aZ(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.an(r))}return H.ko(u)},
kp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.an(s))
if(s<0)throw H.c(H.an(s))
if(s>65535)return H.mm(a)}return H.ko(a)},
mn:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bT:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.a8(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){var u=H.bR(a).getFullYear()+0
return u},
mi:function(a){var u=H.bR(a).getMonth()+1
return u},
me:function(a){var u=H.bR(a).getDate()+0
return u},
mf:function(a){var u=H.bR(a).getHours()+0
return u},
mh:function(a){var u=H.bR(a).getMinutes()+0
return u},
mj:function(a){var u=H.bR(a).getSeconds()+0
return u},
mg:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
A:function(a){throw H.c(H.an(a))},
e:function(a,b){if(a==null)J.aE(a)
throw H.c(H.c2(a,b))},
c2:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
u=H.a5(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.bL(b,a,"index",null,u)
return P.dK(b,"index",null)},
nm:function(a,b,c){if(a>c)return new P.bU(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
an:function(a){return new P.aG(!0,a,null,null)},
nh:function(a){if(typeof a!=="number")throw H.c(H.an(a))
return a},
c:function(a){var u
if(a==null)a=new P.dF()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lg})
u.name=""}else u.toString=H.lg
return u},
lg:function(){return J.aF(this.dartException)},
q:function(a){throw H.c(a)},
B:function(a){throw H.c(P.aQ(a))},
b_:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hs(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ht:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ki:function(a,b){return new H.fN(a,b==null?null:b.method)},
js:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fl(a,t,u?null:b.receiver)},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aZ(s,16)&8191)===10)switch(r){case 438:return u.$1(H.js(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ki(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lj()
p=$.lk()
o=$.ll()
n=$.lm()
m=$.lp()
l=$.lq()
k=$.lo()
$.ln()
j=$.ls()
i=$.lr()
h=q.at(t)
if(h!=null)return u.$1(H.js(H.D(t),h))
else{h=p.at(t)
if(h!=null){h.method="call"
return u.$1(H.js(H.D(t),h))}else{h=o.at(t)
if(h==null){h=n.at(t)
if(h==null){h=m.at(t)
if(h==null){h=l.at(t)
if(h==null){h=k.at(t)
if(h==null){h=n.at(t)
if(h==null){h=j.at(t)
if(h==null){h=i.at(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ki(H.D(t),h))}}return u.$1(new H.hG(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dS()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aG(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dS()
return a},
c6:function(a){var u
if(a==null)return new H.eo(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eo(a)},
np:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
nz:function(a,b,c,d,e,f){H.d(a,"$ibl")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var u
H.a5(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nz)
a.$identity=u
return u},
lS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.O(d).$ia){u.$reflectionInfo=d
s=H.mo(u).r}else s=d
r=e?Object.create(new H.h8().constructor.prototype):Object.create(new H.cb(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aP
if(typeof p!=="number")return p.q()
$.aP=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k0(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nt,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jZ:H.jj
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k0(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lP:function(a,b,c,d){var u=H.jj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lR(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lP(t,!r,u,b)
if(t===0){r=$.aP
if(typeof r!=="number")return r.q()
$.aP=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cc
if(q==null){q=H.eK("self")
$.cc=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aP
if(typeof r!=="number")return r.q()
$.aP=r+1
o+=r
r="return function("+o+"){return this."
q=$.cc
if(q==null){q=H.eK("self")
$.cc=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
lQ:function(a,b,c,d){var u,t
u=H.jj
t=H.jZ
switch(b?-1:a){case 0:throw H.c(H.ms("Intercepted function with no arguments."))
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
u=$.cc
if(u==null){u=H.eK("self")
$.cc=u}t=$.jY
if(t==null){t=H.eK("receiver")
$.jY=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lQ(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aP
if(typeof t!=="number")return t.q()
$.aP=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aP
if(typeof t!=="number")return t.q()
$.aP=t+1
return new Function(u+t+"}")()},
jJ:function(a,b,c,d,e,f,g){return H.lS(a,b,H.a5(c),d,!!e,!!f,g)},
jj:function(a){return a.a},
jZ:function(a){return a.c},
eK:function(a){var u,t,s,r,q
u=new H.cb("self","target","receiver","name")
t=J.fi(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aM(a,"String"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"double"))},
nE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"num"))},
jH:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aM(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aM(a,"int"))},
le:function(a,b){throw H.c(H.aM(a,H.c8(H.D(b).substring(2))))},
nG:function(a,b){throw H.c(H.lO(a,H.c8(H.D(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.le(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.nG(a,b)},
eA:function(a){if(a==null)return a
if(!!J.O(a).$ia)return a
throw H.c(H.aM(a,"List<dynamic>"))},
lb:function(a,b){var u
if(a==null)return a
u=J.O(a)
if(!!u.$ia)return a
if(u[b])return a
H.le(a,b)},
l7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
ey:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l7(J.O(a))
if(u==null)return!1
return H.kY(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jD)return a
$.jD=!0
try{if(H.ey(a,b))return a
u=H.jc(b)
t=H.aM(a,u)
throw H.c(t)}finally{$.jD=!1}},
jK:function(a,b){if(a!=null&&!H.jI(a,b))H.q(H.aM(a,H.jc(b)))
return a},
aM:function(a,b){return new H.hu("TypeError: "+P.f1(a)+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
lO:function(a,b){return new H.eL("CastError: "+P.f1(a)+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
l2:function(a){var u,t
u=J.O(a)
if(!!u.$icd){t=H.l7(u)
if(t!=null)return H.jc(t)
return"Closure"}return H.bS(a)},
nL:function(a){throw H.c(new P.eS(H.D(a)))},
ms:function(a){return new H.fY(a)},
l8:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
by:function(a){if(a==null)return
return a.$ti},
ow:function(a,b,c){return H.c7(a["$a"+H.j(c)],H.by(b))},
c5:function(a,b,c,d){var u
H.D(c)
H.a5(d)
u=H.c7(a["$a"+H.j(c)],H.by(b))
return u==null?null:u[d]},
a9:function(a,b,c){var u
H.D(b)
H.a5(c)
u=H.c7(a["$a"+H.j(b)],H.by(a))
return u==null?null:u[c]},
p:function(a,b){var u
H.a5(b)
u=H.by(a)
return u==null?null:u[b]},
jc:function(a){return H.bx(a,null)},
bx:function(a,b){var u,t
H.i(b,"$ia",[P.h],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.jG(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.n6(a,b)
if('futureOr' in a)return"FutureOr<"+H.bx("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.h]
H.i(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.q(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.bx(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bx(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bx(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bx(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.no(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.D(u[g])
i=i+h+H.bx(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jG:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ia",[P.h],"$aa")
if(a==null)return""
u=new P.ad("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bx(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cV:function(a,b,c,d){var u,t
H.D(b)
H.eA(c)
H.D(d)
if(a==null)return!1
u=H.by(a)
t=J.O(a)
if(t[b]==null)return!1
return H.l5(H.c7(t[d],u),null,c,null)},
i:function(a,b,c,d){H.D(b)
H.eA(c)
H.D(d)
if(a==null)return a
if(H.cV(a,b,c,d))return a
throw H.c(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.jG(c,0,null),v.mangledGlobalNames)))},
l5:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
ou:function(a,b,c){return a.apply(b,H.c7(J.O(b)["$a"+H.j(c)],H.by(b)))},
la:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="C"||a===-1||a===-2||H.la(u)}return!1},
jI:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="C"||b===-1||b===-2||H.la(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ey(a,b)}u=J.O(a).constructor
t=H.by(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jI(a,b))throw H.c(H.aM(a,H.jc(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.kY(a,b,c,d)
if('func' in a)return c.name==="bl"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aD("type" in a?a.type:null,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"ch" in t.prototype))return!1
r=t.prototype["$a"+"ch"]
q=H.c7(r,u?a.slice(1):null)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l5(H.c7(m,u),b,p,d)},
kY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nD(h,b,g,d)},
nD:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aD(c[r],d,a[r],b))return!1}return!0},
ov:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nB:function(a){var u,t,s,r,q,p
u=H.D($.l9.$1(a))
t=$.j3[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.D($.l4.$2(a,u))
if(u!=null){t=$.j3[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jb(s)
$.j3[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j8[u]=s
return s}if(q==="-"){p=H.jb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ld(a,s)
if(q==="*")throw H.c(P.hF(u))
if(v.leafTags[u]===true){p=H.jb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ld(a,s)},
ld:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jN(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jb:function(a){return J.jN(a,!1,null,!!a.$iaI)},
nC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jb(u)
else return J.jN(u,c,null,null)},
nx:function(){if(!0===$.jM)return
$.jM=!0
H.ny()},
ny:function(){var u,t,s,r,q,p,o,n
$.j3=Object.create(null)
$.j8=Object.create(null)
H.nw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lf.$1(q)
if(p!=null){o=H.nC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nw:function(){var u,t,s,r,q,p,o
u=C.a2()
u=H.c0(C.a_,H.c0(C.a4,H.c0(C.E,H.c0(C.E,H.c0(C.a3,H.c0(C.a0,H.c0(C.a1(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l9=new H.j5(q)
$.l4=new H.j6(p)
$.lf=new H.j7(o)},
c0:function(a,b){return a(b)||b},
m4:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a_("Illegal RegExp pattern ("+String(r)+")",a,null))},
nJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jP:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eP:function eP(){},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fT:function fT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fN:function fN(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a){this.a=a},
jf:function jf(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null},
cd:function cd(){},
he:function he(){},
h8:function h8(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a){this.a=a},
eL:function eL(a){this.a=a},
fY:function fY(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fp:function fp(a,b){this.a=a
this.$ti=b},
fq:function fq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bZ:function(a){return a},
mb:function(a){return new Int8Array(a)},
ba:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c2(b,a))},
n4:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nm(a,b,c))
return b},
bP:function bP(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
dD:function dD(){},
co:function co(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
no:function(a){return J.k8(a?Object.keys(a):[],null)},
nF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ez:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jM==null){H.nx()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hF("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jQ()]
if(q!=null)return q
q=H.nB(a)
if(q!=null)return q
if(typeof a=="function")return C.a5
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.jQ(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
m3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ji(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a8(a,0,4294967295,"length",null))
return J.k8(new Array(a),b)},
k8:function(a,b){return J.fi(H.b(a,[b]))},
fi:function(a){H.eA(a)
a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dn.prototype
return J.dm.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.dp.prototype
if(typeof a=="boolean")return J.fj.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.ez(a)},
nq:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.ez(a)},
c4:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.ez(a)},
jL:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.ez(a)},
nr:function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bv.prototype
return a},
ns:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bv.prototype
return a},
cW:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bv.prototype
return a},
a7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.ez(a)},
lB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nq(a).q(a,b)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).B(a,b)},
jT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ns(a).v(a,b)},
lC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nr(a).u(a,b)},
lD:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c4(a).j(a,b)},
lE:function(a,b,c,d){return J.a7(a).hg(a,b,c,d)},
lF:function(a,b){return J.cW(a).H(a,b)},
eB:function(a,b){return J.a7(a).iQ(a,b)},
jg:function(a,b,c){return J.a7(a).iW(a,b,c)},
jU:function(a,b){return J.a7(a).E(a,b)},
lG:function(a,b){return J.cW(a).a3(a,b)},
eC:function(a,b){return J.jL(a).ag(a,b)},
lH:function(a,b,c,d){return J.a7(a).kp(a,b,c,d)},
lI:function(a){return J.a7(a).gjZ(a)},
eD:function(a){return J.a7(a).gcM(a)},
d1:function(a){return J.O(a).gK(a)},
bz:function(a){return J.jL(a).gU(a)},
aE:function(a){return J.c4(a).gm(a)},
lJ:function(a){return J.a7(a).glc(a)},
jh:function(a,b){return J.a7(a).b5(a,b)},
jV:function(a){return J.jL(a).l1(a)},
lK:function(a,b){return J.a7(a).l6(a,b)},
lL:function(a,b,c){return J.a7(a).fF(a,b,c)},
lM:function(a,b,c){return J.cW(a).w(a,b,c)},
lN:function(a){return J.cW(a).lh(a)},
aF:function(a){return J.O(a).i(a)},
ab:function ab(){},
fj:function fj(){},
dp:function dp(){},
dq:function dq(){},
fP:function fP(){},
bv:function bv(){},
b6:function b6(){},
aH:function aH(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bo:function bo(){},
dn:function dn(){},
dm:function dm(){},
b5:function b5(){}},P={
mH:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c1(new P.i5(u),1)).observe(t,{childList:true})
return new P.i4(u,t,s)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
mI:function(a){self.scheduleImmediate(H.c1(new P.i6(H.k(a,{func:1,ret:-1})),0))},
mJ:function(a){self.setImmediate(H.c1(new P.i7(H.k(a,{func:1,ret:-1})),0))},
mK:function(a){P.jv(C.y,H.k(a,{func:1,ret:-1}))},
jv:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.e.ab(a.a,1000)
return P.mQ(u<0?0:u,b)},
kz:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aZ]})
u=C.e.ab(a.a,1000)
return P.mR(u<0?0:u,b)},
mQ:function(a,b){var u=new P.ep(!0)
u.ha(a,b)
return u},
mR:function(a,b){var u=new P.ep(!1)
u.hb(a,b)
return u},
mL:function(a,b){var u,t,s
b.a=1
try{a.fi(new P.ih(b),new P.ii(b),null)}catch(s){u=H.ah(s)
t=H.c6(s)
P.nH(new P.ij(b,u,t))}},
kN:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaC")
if(u>=4){t=b.cw()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.d(b.c,"$ib1")
b.a=2
b.c=a
a.e_(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.iZ(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cM(u.a,b)}t=u.a
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
if(k){H.d(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.iZ(null,null,t,p,o)
return}j=$.W
if(j!=l)$.W=l
else j=null
t=b.c
if(t===8)new P.io(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.im(s,b,m).$0()}else if((t&2)!==0)new P.il(u,s,b).$0()
if(j!=null)$.W=j
t=s.b
if(!!J.O(t).$ich){if(t.a>=4){i=H.d(o.c,"$ib1")
o.c=null
b=o.bx(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kN(t,o)
return}}h=b.b
i=H.d(h.c,"$ib1")
h.c=null
b=h.bx(i)
t=s.a
p=s.b
if(!t){H.x(p,H.p(h,0))
h.a=4
h.c=p}else{H.d(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
n9:function(a,b){if(H.ey(a,{func:1,args:[P.K,P.as]}))return H.k(a,{func:1,ret:null,args:[P.K,P.as]})
if(H.ey(a,{func:1,args:[P.K]}))return H.k(a,{func:1,ret:null,args:[P.K]})
throw H.c(P.ji(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n8:function(){var u,t
for(;u=$.c_,u!=null;){$.cU=null
t=u.b
$.c_=t
if(t==null)$.cT=null
u.a.$0()}},
nd:function(){$.jE=!0
try{P.n8()}finally{$.cU=null
$.jE=!1
if($.c_!=null)$.jR().$1(P.l6())}},
l1:function(a){var u=new P.ec(H.k(a,{func:1,ret:-1}))
if($.c_==null){$.cT=u
$.c_=u
if(!$.jE)$.jR().$1(P.l6())}else{$.cT.b=u
$.cT=u}},
nc:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.c_
if(u==null){P.l1(a)
$.cU=$.cT
return}t=new P.ec(a)
s=$.cU
if(s==null){t.b=u
$.cU=t
$.c_=t}else{t.b=s.b
s.b=t
$.cU=t
if(t.b==null)$.cT=t}},
nH:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.W
if(C.l===t){P.j0(null,null,C.l,a)
return}t.toString
P.j0(null,null,t,H.k(t.cG(a),u))},
ky:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.W
if(t===C.l){t.toString
return P.jv(a,b)}return P.jv(a,H.k(t.cG(b),u))},
my:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aZ]}
H.k(b,u)
t=$.W
if(t===C.l){t.toString
return P.kz(a,b)}s=t.eg(b,P.aZ)
$.W.toString
return P.kz(a,H.k(s,u))},
iZ:function(a,b,c,d,e){var u={}
u.a=d
P.nc(new P.j_(u,e))},
kZ:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
l_:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
na:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
j0:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cG(d):c.k_(d,-1)
P.l1(d)},
i5:function i5(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null
this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b,c,d,e){var _=this
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
ig:function ig(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
h9:function h9(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
cv:function cv(){},
ha:function ha(){},
aZ:function aZ(){},
ai:function ai(a,b){this.a=a
this.b=b},
iU:function iU(){},
j_:function j_(a,b){this.a=a
this.b=b},
iu:function iu(){},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function(a,b,c,d,e){return new H.aJ([d,e])},
m6:function(a,b,c){H.eA(a)
return H.i(H.np(a,new H.aJ([b,c])),"$ik9",[b,c],"$ak9")},
ka:function(a,b){return new H.aJ([a,b])},
dt:function(a,b,c,d){return new P.is([d])},
jA:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mP:function(a,b,c){var u=new P.ei(a,b,[c])
u.c=a.e
return u},
m0:function(a,b,c){var u,t
if(P.jF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
t=$.d0()
C.a.h(t,a)
try{P.n7(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.kw(b,H.lb(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
jp:function(a,b,c){var u,t,s
if(P.jF(a))return b+"..."+c
u=new P.ad(b)
t=$.d0()
C.a.h(t,a)
try{s=u
s.a=P.kw(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jF:function(a){var u,t
for(u=0;t=$.d0(),u<t.length;++u)if(a===t[u])return!0
return!1},
n7:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ia",[P.h],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.j(u.gL())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gL();++s
if(!u.D()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL();++s
for(;u.D();o=n,n=m){m=u.gL();++s
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
m7:function(a,b,c){var u=P.m5(null,null,null,b,c)
a.T(0,new P.fr(u,b,c))
return u},
kb:function(a,b){var u,t,s
u=P.dt(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)u.h(0,H.x(a[s],b))
return u},
jt:function(a){var u,t
u={}
if(P.jF(a))return"{...}"
t=new P.ad("")
try{C.a.h($.d0(),a)
t.a+="{"
u.a=!0
a.T(0,new P.fv(u,t))
t.a+="}"}finally{u=$.d0()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
is:function is(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bX:function bX(a){this.a=a
this.c=this.b=null},
ei:function ei(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(){},
S:function S(){},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
bO:function bO(){},
iL:function iL(){},
fw:function fw(){},
e6:function e6(a,b){this.a=a
this.$ti=b},
iz:function iz(){},
ej:function ej(){},
et:function et(){},
mC:function(a,b,c,d){H.i(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.mD(!1,b,c,d)
return},
mD:function(a,b,c,d){var u,t,s
u=$.lt()
if(u==null)return
t=0===c
if(t&&!0)return P.jy(u,b)
s=b.length
d=P.b9(c,d,s,null,null,null)
if(t&&d===s)return P.jy(u,b)
return P.jy(u,b.subarray(c,d))},
jy:function(a,b){if(P.mF(b))return
return P.mG(a,b)},
mG:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ah(t)}return},
mF:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mE:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ah(t)}return},
nb:function(a,b,c){var u,t,s
H.i(a,"$ia",[P.m],"$aa")
for(u=J.c4(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c0()
if((s&127)!==s)return t-b}return c-b},
jX:function(a,b,c,d,e,f){if(C.e.bs(f,4)!==0)throw H.c(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a_("Invalid base64 padding, more than two '=' characters",a,b))},
eH:function eH(a){this.a=a},
eI:function eI(a){this.a=a},
bE:function bE(){},
bi:function bi(){},
f_:function f_(){},
fe:function fe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fd:function fd(a){this.a=a},
hN:function hN(a){this.a=a},
hP:function hP(){},
iS:function iS(a){this.b=this.a=0
this.c=a},
hO:function hO(a){this.a=a},
iQ:function iQ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX:function(a,b,c){var u
H.k(b,{func:1,ret:P.m,args:[P.h]})
u=H.ml(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a_(a,null,null))},
m_:function(a){if(a instanceof H.cd)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
m8:function(a,b,c,d){var u,t
H.x(b,d)
u=J.m3(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.p(u,t,b)
return H.i(u,"$ia",[d],"$aa")},
kc:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.D();)C.a.h(t,H.x(s.gL(),c))
if(b)return t
return H.i(J.fi(t),"$ia",u,"$aa")},
dT:function(a,b,c){var u,t
u=P.m
H.i(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.i(a,"$iaH",[u],"$aaH")
t=a.length
c=P.b9(b,c,t,null,null,null)
return H.kp(b>0||c<t?C.a.fM(a,b,c):a)}if(!!J.O(a).$ico)return H.mn(a,b,P.b9(b,c,a.length,null,null,null))
return P.mw(a,b,c)},
mw:function(a,b,c){var u,t,s,r
H.i(a,"$il",[P.m],"$al")
if(b<0)throw H.c(P.a8(b,0,J.aE(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a8(c,b,J.aE(a),null,null))
t=J.bz(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.a8(b,0,s,null,null))
r=[]
if(u)for(;t.D();)r.push(t.gL())
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.a8(c,b,s,null,null))
r.push(t.gL())}return H.kp(r)},
mq:function(a,b,c){return new H.fk(a,H.m4(a,!1,!0,!1))},
kw:function(a,b,c){var u=J.bz(b)
if(!u.D())return a
if(c.length===0){do a+=H.j(u.gL())
while(u.D())}else{a+=H.j(u.gL())
for(;u.D();)a=a+c+H.j(u.gL())}return a},
kC:function(){var u=H.md()
if(u!=null)return P.mB(u,0,null)
throw H.c(P.X("'Uri.base' is not supported"))},
eu:function(a,b,c,d){var u,t,s,r,q,p
H.i(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.lz().b
if(typeof b!=="string")H.q(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.a9(c,"bE",0))
t=c.gko().cN(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bT(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lU:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
k3:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m_(a)},
d3:function(a){return new P.aG(!1,null,null,a)},
ji:function(a,b,c){return new P.aG(!0,a,b,c)},
dK:function(a,b,c){return new P.bU(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
b9:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.c(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a8(b,a,c,"end",f))
return b}return c},
bL:function(a,b,c,d,e){var u=H.a5(e==null?J.aE(b):e)
return new P.fg(b,u,!0,a,c,"Index out of range")},
X:function(a){return new P.hH(a)},
hF:function(a){return new P.hE(a)},
kv:function(a){return new P.bW(a)},
aQ:function(a){return new P.eO(a)},
t:function(a){return new P.ef(a)},
a_:function(a,b,c){return new P.f9(a,b,c)},
m9:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.p(u,t,b.$1(t))
return u},
jO:function(a){H.nF(a)},
mB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.kB(b>0||c<c?C.c.w(a,b,c):a,5,null).gfn()
else if(t===32)return P.kB(C.c.w(a,u,c),0,null).gfn()}s=new Array(8)
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
if(P.l0(a,b,c,0,r)>=14)C.a.p(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lo()
if(q>=b)if(P.l0(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.q()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a_()
if(typeof m!=="number")return H.A(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.ao(a,"..",n)))i=m>n+2&&C.c.ao(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ao(a,"file",b)){if(p<=b){if(!C.c.ao(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.w(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b2(a,n,m,"/");++m;++l;++c}else{a=C.c.w(a,b,n)+"/"+C.c.w(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ao(a,"http",b)){if(s&&o+3===n&&C.c.ao(a,"80",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.w(a,b,o)+C.c.w(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ao(a,"https",b)){if(s&&o+4===n&&C.c.ao(a,"443",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.w(a,b,o)+C.c.w(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.w(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iC(a,q,p,o,n,m,l,j)}return P.mS(a,b,c,q,p,o,n,m,l,j)},
kE:function(a,b){var u=P.h
return C.a.ku(H.b(a.split("&"),[u]),P.ka(u,u),new P.hM(b),[P.J,P.h,P.h])},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hJ(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a3(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cX(C.c.w(a,q,r),null,null)
if(typeof n!=="number")return n.dn()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cX(C.c.w(a,q,c),null,null)
if(typeof n!=="number")return n.dn()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hK(a)
t=new P.hL(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a3(a,r)
if(n===58){if(r===b){++r
if(C.c.a3(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaE(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mA(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aZ(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
mS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mZ(a,b,d)
else{if(d===b)P.cR(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n_(a,u,e-1):""
s=P.mW(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.A(g)
q=r<g?P.mY(P.cX(C.c.w(a,r,g),new P.iM(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mX(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.jB(a,h+1,i,null):null
return new P.bY(j,t,s,q,p,o,i<c?P.mV(a,i+1,c):null)},
kR:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cR:function(a,b,c){throw H.c(P.a_(c,a,b))},
mY:function(a,b){if(a!=null&&a===P.kR(b))return
return a},
mW:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a3(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a3(a,u)!==93)P.cR(a,b,"Missing end `]` to match `[` in host")
P.kD(a,b+1,u)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
t=b
for(;t<c;++t)if(C.c.a3(a,t)===58){P.kD(a,b,c)
return"["+a+"]"}return P.n1(a,b,c)},
n1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.A(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a3(a,u)
if(q===37){p=P.kX(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ad("")
n=C.c.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ad("")
if(t<u){s.a+=C.c.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cR(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a3(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ad("")
n=C.c.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kS(q)
u+=l
t=u}}}}if(s==null)return C.c.w(a,b,c)
if(t<c){n=C.c.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mZ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kU(C.c.H(a,b)))P.cR(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cR(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.w(a,b,c)
return P.mT(t?a.toLowerCase():a)},
mT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n_:function(a,b,c){return P.cS(a,b,c,C.a8,!1)},
mX:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cS(a,b,c,C.K,!0):C.r.lr(d,new P.iN(),P.h).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.aa(r,"/"))r="/"+r
return P.n0(r,e,f)},
n0:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.aa(a,"/"))return P.n2(a,!u||c)
return P.n3(a)},
jB:function(a,b,c,d){var u,t
u={}
H.i(d,"$iJ",[P.h,null],"$aJ")
if(a!=null){if(d!=null)throw H.c(P.d3("Both query and queryParameters specified"))
return P.cS(a,b,c,C.u,!0)}if(d==null)return
t=new P.ad("")
u.a=""
d.T(0,new P.iO(new P.iP(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mV:function(a,b,c){return P.cS(a,b,c,C.u,!0)},
kX:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a3(a,b+1)
s=C.c.a3(a,u)
r=H.j4(t)
q=H.j4(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aZ(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bT(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
kS:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.p(t,0,37)
C.a.p(t,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.p(t,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.jb(a,6*r)&63|s
C.a.p(t,q,37)
C.a.p(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.p(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.dT(t,0,null)},
cS:function(a,b,c,d,e){var u=P.kW(a,b,c,H.i(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.w(a,b,c):u},
kW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.i(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.A(c)
if(!(t<c))break
c$0:{q=C.c.a3(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kX(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cR(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a3(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kS(q)}}if(r==null)r=new P.ad("")
r.a+=C.c.w(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.A(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.c.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kV:function(a){if(C.c.aa(a,"."))return!0
return C.c.f0(a,"/.")!==-1},
n3:function(a){var u,t,s,r,q,p,o
if(!P.kV(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.R(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
n2:function(a,b){var u,t,s,r,q,p
if(!P.kV(a))return!b?P.kT(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaE(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaE(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.p(u,0,P.kT(u[0]))}return C.a.l(u,"/")},
kT:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kU(J.lF(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.w(a,0,t)+"%3A"+C.c.ax(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mU:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d3("Invalid URL encoding"))}}return u},
jC:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.w(a,b,c)
else q=new H.r(C.c.w(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.H(a,t)
if(s>127)throw H.c(P.d3("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d3("Truncated URI"))
C.a.h(q,P.mU(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.i(q,"$ia",[P.m],"$aa")
return new P.hO(!1).cN(q)},
kU:function(a){var u=a|32
return 97<=u&&u<=122},
kB:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a_("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a_("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaE(u)
if(q!==44||s!==o+7||!C.c.ao(a,"base64",o+1))throw H.c(P.a_("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kM(a,n,t)
else{m=P.kW(a,n,t,C.u,!0)
if(m!=null)a=C.c.b2(a,n,t,m)}return new P.hI(a,u,c)},
n5:function(){var u,t,s,r,q
u=P.m9(22,new P.iW(),!0,P.M)
t=new P.iV(u)
s=new P.iX()
r=new P.iY()
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
l0:function(a,b,c,d,e){var u,t,s,r,q
H.i(e,"$ia",[P.m],"$aa")
u=$.lA()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.p(e,q>>>5,t)}return d},
L:function L(){},
aj:function aj(a,b){this.a=a
this.b=b},
y:function y(){},
aR:function aR(a){this.a=a},
eW:function eW(){},
eX:function eX(){},
bk:function bk(){},
dF:function dF(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fg:function fg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hH:function hH(a){this.a=a},
hE:function hE(a){this.a=a},
bW:function bW(a){this.a=a},
eO:function eO(a){this.a=a},
fO:function fO(){},
dS:function dS(){},
eS:function eS(a){this.a=a},
ef:function ef(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(){},
m:function m(){},
l:function l(){},
aS:function aS(){},
a:function a(){},
J:function J(){},
C:function C(){},
ag:function ag(){},
K:function K(){},
as:function as(){},
h:function h(){},
ad:function ad(a){this.a=a},
hM:function hM(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){},
iP:function iP(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(){},
iV:function iV(a){this.a=a},
iX:function iX(){},
iY:function iY(){},
iC:function iC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ia:function ia(a,b,c,d,e,f,g,h){var _=this
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
u=J.O(a)
if(!!u.$ib4){t=u.ger(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
nj:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
ni:function(a,b){var u={}
a.T(0,new P.j1(u))
return u},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(){},
f7:function f7(){},
ir:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
it:function it(){},
aA:function aA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cs:function cs(){},
o:function o(){},
M:function M(){},
d5:function d5(){},
di:function di(){},
dI:function dI(){},
dM:function dM(){},
bV:function bV(){},
dN:function dN(){},
dW:function dW(){},
e4:function e4(){}},W={
jW:function(a){var u=document.createElement("a")
return u},
jk:function(a,b){var u=document.createElement("canvas")
return u},
lY:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).as(u,a,b,c)
t.toString
u=W.z
u=new H.cJ(new W.am(t),H.k(new W.eZ(),{func:1,ret:P.L,args:[u]}),[u])
return H.d(u.gaS(u),"$iI")},
lZ:function(a){H.d(a,"$ibH")
return"wheel"},
cg:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lJ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ah(s)}return u},
jo:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
iq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kP:function(a,b,c,d){var u,t
u=W.iq(W.iq(W.iq(W.iq(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.l3(new W.ie(c),W.n)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.n]})
if(t)J.lE(a,b,u,!1)}return new W.id(a,b,u,!1,[e])},
kO:function(a){var u,t
u=W.jW(null)
t=window.location
u=new W.bw(new W.iy(u,t))
u.h_(a)
return u},
mM:function(a,b,c,d){H.d(a,"$iI")
H.D(b)
H.D(c)
H.d(d,"$ibw")
return!0},
mN:function(a,b,c,d){var u,t,s
H.d(a,"$iI")
H.D(b)
H.D(c)
u=H.d(d,"$ibw").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kQ:function(){var u,t,s,r,q
u=P.h
t=P.kb(C.A,u)
s=H.p(C.A,0)
r=H.k(new W.iI(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iH(t,P.dt(null,null,null,u),P.dt(null,null,null,u),P.dt(null,null,null,u),null)
t.h9(null,new H.fz(C.A,r,[s,u]),q,null)
return t},
l3:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.l)return a
return u.eg(a,b)},
v:function v(){},
d2:function d2(){},
eE:function eE(){},
ca:function ca(){},
bf:function bf(){},
bC:function bC(){},
bD:function bD(){},
bg:function bg(){},
ce:function ce(){},
eR:function eR(){},
az:function az(){},
cf:function cf(){},
eV:function eV(){},
dd:function dd(){},
de:function de(){},
i9:function i9(a,b){this.a=a
this.b=b},
I:function I(){},
eZ:function eZ(){},
n:function n(){},
bH:function bH(){},
f8:function f8(){},
dj:function dj(){},
dk:function dk(){},
bJ:function bJ(){},
dl:function dl(){},
b4:function b4(){},
bK:function bK(){},
aT:function aT(){},
du:function du(){},
cm:function cm(){},
a0:function a0(){},
am:function am(a){this.a=a},
z:function z(){},
cp:function cp(){},
dJ:function dJ(){},
fZ:function fZ(){},
aY:function aY(){},
dU:function dU(){},
dV:function dV(){},
hd:function hd(){},
cx:function cx(){},
aK:function aK(){},
aL:function aL(){},
hr:function hr(){},
bt:function bt(){},
i2:function i2(){},
b0:function b0(){},
cK:function cK(){},
cL:function cL(){},
ee:function ee(){},
ek:function ek(){},
i8:function i8(){},
ib:function ib(a){this.a=a},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
id:function id(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ie:function ie(a){this.a=a},
bw:function bw(a){this.a=a},
at:function at(){},
dE:function dE(a){this.a=a},
fL:function fL(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(){},
iA:function iA(){},
iB:function iB(){},
iH:function iH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iI:function iI(){},
iG:function iG(){},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aw:function aw(){},
iy:function iy(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
iT:function iT(a){this.a=a},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
er:function er(){},
ew:function ew(){},
ex:function ex(){}},O={
jl:function(a){var u=new O.Y([a])
u.bv(a)
return u},
Y:function Y(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cl:function cl(){this.b=this.a=null},
eU:function eU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dz:function dz(){},
fB:function fB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fD:function fD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fE:function fE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
br:function br(){}},E={
k6:function(a,b,c,d,e,f){var u=new E.ak()
u.a=d
u.b=!0
u.sfZ(0,O.jl(E.ak))
u.y.b6(u.gkN(),u.gkQ())
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
u.sc6(0,e)
return u},
mr:function(a,b){var u=new E.fU(a,b)
u.fV(a,b)
return u},
mx:function(a,b,c,d,e){var u,t,s,r
u=J.O(a)
if(!!u.$ibC)return E.kx(a,!0,!0,!0,!1)
t=W.jk(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcM(a).h(0,t)
r=E.kx(t,!0,!0,!0,!1)
r.a=a
return r},
kx:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.e0()
t=P.m6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
s=C.q.c1(a,"webgl",t)
s=H.d(s==null?C.q.c1(a,"experimental-webgl",t):s,"$ibV")
if(s==null)H.q(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mr(s,a)
r=new T.hk(s)
r.b=H.a5((s&&C.b).c2(s,3379))
r.c=H.a5(C.b.c2(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e7(a)
q=new X.fm()
q.c=new X.av(!1,!1,!1)
q.siM(P.dt(null,null,null,P.m))
r.b=q
q=new X.fF(r)
q.f=0
q.r=V.b8()
q.x=V.b8()
q.Q=1
q.ch=1
r.c=q
q=new X.ft(r)
q.r=0
q.x=V.b8()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hq(r)
q.e=0
q.f=V.b8()
q.r=V.b8()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shw(H.b([],[[P.cv,P.K]]))
q=r.z
p=document
o=W.a0
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.k(r.gi4(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.k(r.gia(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.k(r.ghZ(),l),!1,m))
q=r.z
k=W.aT
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.k(r.gig(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.k(r.gic(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.k(r.gik(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.k(r.gip(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.k(r.gim(),n),!1,o))
k=r.z
j=W.b0;(k&&C.a).h(k,W.a4(a,H.D(W.lZ(a)),H.k(r.gir(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.k(r.gi6(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.k(r.gi8(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.k(r.git(),l),!1,m))
m=r.z
l=W.aL
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.k(r.giJ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.k(r.giF(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.k(r.giH(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.e1()
return u},
eJ:function eJ(){},
ak:function ak(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(a){this.a=a}},Z={
kM:function(a,b,c){var u
H.i(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.aA(a,b,u)
C.b.ei(a,b,new Int16Array(H.bZ(c)),35044)
C.b.aA(a,b,null)
return new Z.eb(b,u)},
aB:function(a){return new Z.aN(a)},
eb:function eb(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cI:function cI(a){this.a=a},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
E:function(){var u=new D.bG()
u.saq(null)
u.sbb(null)
u.c=null
u.d=0
return u},
eM:function eM(){},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
bm:function bm(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bn:function bn(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
H:function H(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bj:function bj(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
ds:function ds(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dH:function dH(){},
dR:function dR(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){}},X={d7:function d7(a,b){this.a=a
this.b=b},dr:function dr(a,b){this.a=a
this.b=b},fm:function fm(){var _=this
_.d=_.c=_.b=_.a=null},dv:function dv(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},ft:function ft(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fF:function fF(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fR:function fR(){},e2:function e2(a,b,c,d,e,f,g,h,i){var _=this
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
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e7:function e7(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k7:function(a,b,c,d,e,f,g){var u,t
u=new X.fa()
t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.ks()
u.r=t
return u},
kk:function(a,b,c,d,e){var u,t,s
u=new X.dG()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gt().h(0,u.ghc())
s=new D.H("mover",t,u.b,u,[U.ac])
s.b=!0
u.ap(s)}s=u.c
if(!(Math.abs(s-b)<$.P().a)){u.c=b
s=new D.H("fov",s,b,u,[P.y])
s.b=!0
u.ap(s)}s=u.d
if(!(Math.abs(s-d)<$.P().a)){u.d=d
s=new D.H("near",s,d,u,[P.y])
s.b=!0
u.ap(s)}s=u.e
if(!(Math.abs(s-a)<$.P().a)){u.e=a
s=new D.H("far",s,a,u,[P.y])
s.b=!0
u.ap(s)}return u},
eG:function eG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(){},
fa:function fa(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ff:function ff(){this.b=this.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cw:function cw(){},
lc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.mt("Test 029",!0)
t=W.jk(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.h]
u.ec(H.b(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],s))
u.jR(H.b(["bumpMaps"],s))
u.ec(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dm(s,"testCanvas")
if(r==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.mx(r,!0,!0,!0,!1)
p=new U.ci()
o=U.ac
p.bv(o)
p.b6(p.ghR(),p.gix())
p.e=null
p.f=V.bq()
p.r=0
n=q.r
m=new U.e9()
l=U.jm()
l.sdl(0,!0)
l.sd4(6.283185307179586)
l.sd6(0)
l.sak(0,0)
l.sd5(100)
l.sY(0)
l.scO(0.5)
m.b=l
k=m.gaW()
l.gt().h(0,k)
l=U.jm()
l.sdl(0,!0)
l.sd4(6.283185307179586)
l.sd6(0)
l.sak(0,0)
l.sd5(100)
l.sY(0)
l.scO(0.5)
m.c=l
l.gt().h(0,k)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
j=new X.av(!1,!1,!1)
i=m.d
m.d=j
l=[X.av]
k=new D.H("modifiers",i,j,m,l)
k.b=!0
m.R(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.H("invertX",k,!1,m,[P.L])
k.b=!0
m.R(k)}k=m.r
if(k!==!1){m.r=!1
k=new D.H("invertY",k,!1,m,[P.L])
k.b=!0
m.R(k)}m.be(n)
p.h(0,m)
n=q.r
m=new U.e8()
k=U.jm()
k.sdl(0,!0)
k.sd4(6.283185307179586)
k.sd6(0)
k.sak(0,0)
k.sd5(100)
k.sY(0)
k.scO(0.2)
m.b=k
k.gt().h(0,m.gaW())
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
j=new X.av(!0,!1,!1)
i=m.c
m.c=j
k=new D.H("modifiers",i,j,m,l)
k.b=!0
m.R(k)
m.be(n)
p.h(0,m)
n=q.r
m=new U.ea()
m.c=0.01
m.d=0
m.e=0
j=new X.av(!1,!1,!1)
m.b=j
l=new D.H("modifiers",null,j,m,l)
l.b=!0
m.R(l)
m.be(n)
p.h(0,m)
p.h(0,U.k1(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=X.kk(2000,1.0471975511965976,p,0.1,null)
g=new X.eG()
g.a=512
g.b=512
g.c=512
g.d=512
g.e=!0
g.f=!0
g.r=1
g.x=1
g.ch=T.ju(0,null)
g.cx=new V.ap(0,0,0,1)
g.cy=!0
g.db=2000
g.dx=!0
g.dy=V.ks()
g.saR(0,800)
g.saL(0,600)
if(g.cy){g.cy=!1
n=new D.H("clearColor",!0,!1,g,[P.L])
n.b=!0
g.ap(n)}f=E.k6(null,!0,null,"",null,null)
f.sc6(0,F.nM(30,1,15,0.5))
e=new O.dx()
e.shk(O.jl(V.aq))
e.e.b6(e.ghV(),e.ghX())
n=new O.aU(e,"emission")
n.c=C.d
n.f=new V.Z(0,0,0)
e.f=n
n=new O.aU(e,"ambient")
n.c=C.d
n.f=new V.Z(0,0,0)
e.r=n
n=new O.aU(e,"diffuse")
n.c=C.d
n.f=new V.Z(0,0,0)
e.x=n
n=new O.aU(e,"invDiffuse")
n.c=C.d
n.f=new V.Z(0,0,0)
e.y=n
n=new O.fE(e,"specular")
n.c=C.d
n.f=new V.Z(0,0,0)
n.ch=100
e.z=n
n=new O.fB(e,"bump")
n.c=C.d
e.Q=n
e.ch=null
n=new O.aU(e,"reflect")
n.c=C.d
n.f=new V.Z(0,0,0)
e.cx=n
n=new O.fD(e,"refract")
n.c=C.d
n.f=new V.Z(0,0,0)
n.ch=1
e.cy=n
n=new O.fA(e,"alpha")
n.c=C.d
n.f=1
e.db=n
n=new D.ds()
n.bv(D.a2)
n.sht(H.b([],[D.bj]))
n.siL(H.b([],[D.dH]))
n.sjc(H.b([],[D.dR]))
n.sjq(H.b([],[D.dY]))
n.sjr(H.b([],[D.dZ]))
n.sjs(H.b([],[D.e_]))
n.Q=null
n.ch=null
n.dr(n.ghT(),n.giv(),n.giz())
e.dx=n
m=n.Q
if(m==null){m=D.E()
n.Q=m
n=m}else n=m
n.h(0,e.giZ())
n=e.dx
m=n.ch
if(m==null){m=D.E()
n.ch=m
n=m}else n=m
n.h(0,e.gca())
e.dy=null
n=e.dx
d=V.kK()
m=U.k1(V.kf(V.kn(),d,new V.N(0,-1,-1)))
c=new V.Z(1,1,1)
l=new D.bj()
l.c=new V.Z(1,1,1)
l.a=V.kL()
i=l.b
l.b=m
m.gt().h(0,l.gh1())
o=new D.H("mover",i,l.b,l,[o])
o.b=!0
l.aF(o)
if(!l.c.B(0,c)){i=l.c
l.c=c
o=new D.H("color",i,c,l,[V.Z])
o.b=!0
l.aF(o)}n.h(0,l)
o=e.r
o.saB(0,new V.Z(0,0,1))
o=e.x
o.saB(0,new V.Z(0,1,0))
o=e.z
o.saB(0,new V.Z(1,0,0))
o=e.z
if(o.c===C.d){o.c=C.j
o.c8()
o.cz(100)
n=o.a
n.a=null
n.a6(null)}o.cz(10)
o=q.f
n=o.a
b=n.createTexture()
C.b.a7(n,34067,b)
C.b.ai(n,34067,10242,10497)
C.b.ai(n,34067,10243,10497)
C.b.ai(n,34067,10241,9729)
C.b.ai(n,34067,10240,9729)
C.b.a7(n,34067,null)
a=new T.dX()
a.a=0
a.b=b
a.c=!1
a.d=0
o.aV(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aV(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aV(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aV(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aV(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aV(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=M.k2(null,null,null)
o=new O.dP()
o.b=1.0471975511965976
o.d=new V.Z(1,1,1)
i=o.c
o.c=a
a.gt().h(0,o.gca())
n=new D.H("boxTexture",i,o.c,o,[T.dX])
n.b=!0
o.a6(n)
a0.sb3(o)
a0.sbo(0,g)
a0.sbg(h)
a1=new M.df()
a1.shn(0,O.jl(E.ak))
a1.d.b6(a1.gi0(),a1.gi2())
a1.e=null
a1.f=null
a1.r=null
a1.x=null
a2=X.k7(!0,!0,!1,null,2000,null,0)
a1.sbg(null)
a1.sbo(0,a2)
a1.sb3(null)
a1.sbg(h)
a1.sb3(e)
a1.sbo(0,g)
a1.d.h(0,f)
a3=new O.eU()
a3.sep(null)
a3.sek(null)
a4=V.ke()
if(!J.R(a3.d,a4)){a3.d=a4
a3.au()}a4=V.ke()
if(!J.R(a3.e,a4)){a3.e=a4
a3.au()}a3.sej(null)
a3.sep(g.ch)
a3.sej(V.kg(0.05,0.05,0.05,1))
a5=M.k2(null,null,null)
a5.sb3(a3)
o=M.ax
n=H.b([a0,a1,a5],[o])
m=new M.d8()
m.bv(o)
m.e=!1
m.f=null
m.b6(m.giB(),m.giD())
m.af(0,n)
o=q.d
if(o!==m){if(o!=null)o.gt().S(0,q.gdv())
q.d=m
m.gt().h(0,q.gdv())
q.dw()}o=new V.hg("bumpMaps",!0,new X.j9(a3,q))
s=C.z.dm(s,"bumpMaps")
o.c=s
if(s==null)H.q("Failed to find bumpMaps for Texture2DGroup")
o.ea(0,"../resources/BumpMap1.png",!0)
o.h(0,"../resources/BumpMap2.png")
o.h(0,"../resources/BumpMap3.png")
o.h(0,"../resources/BumpMap4.png")
o.h(0,"../resources/BumpMap5.png")
o.h(0,"../resources/ScrewBumpMap.png")
o.h(0,"../resources/CtrlPnlBumpMap.png")
s=q.z
if(s==null){s=D.E()
q.z=s}o={func:1,ret:-1,args:[D.w]}
n=H.k(new X.ja(u,a3),o)
if(s.b==null)s.sbb(H.b([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.nI(q)},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b}},V={
nN:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.bs(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.c.aN("null",c)
return C.c.aN(C.f.fj(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c3:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ia",[P.y],"$aa")
u=H.b([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.p(u,p,C.c.aN(u[p],s))}return u},
cY:function(a,b){return C.f.le(Math.pow(b,C.Z.cY(Math.log(H.nh(a))/Math.log(b))))},
ke:function(){var u=$.kd
if(u==null){u=new V.ck(1,0,0,0,1,0,0,0,1)
$.kd=u}return u},
bq:function(){var u=$.kh
if(u==null){u=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kh=u}return u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kg:function(a,b,c,d){return V.aV(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
kf:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.C(0,Math.sqrt(c.F(c)))
t=b.aK(u)
s=t.C(0,Math.sqrt(t.F(t)))
r=u.aK(s)
q=new V.N(a.a,a.b,a.c)
p=s.V(0).F(q)
o=r.V(0).F(q)
n=u.V(0).F(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.km
if(u==null){u=new V.a3(0,0)
$.km=u}return u},
kn:function(){var u=$.cq
if(u==null){u=new V.a1(0,0,0)
$.cq=u}return u},
ks:function(){var u=$.kr
if(u==null){u=V.kq(0,0,1,1)
$.kr=u}return u},
kq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
cH:function(){var u=$.kJ
if(u==null){u=new V.N(0,0,0)
$.kJ=u}return u},
kK:function(){var u=$.kI
if(u==null){u=new V.N(0,1,0)
$.kI=u}return u},
kL:function(){var u=$.hQ
if(u==null){u=new V.N(0,0,1)
$.hQ=u}return u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a){this.a=a},
ck:function ck(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.fS()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.h_()
u.fW(a)
return u},
hp:function(){var u,t
u=new V.ho()
t=P.h
u.sjd(new H.aJ([t,V.cu]))
u.sji(new H.aJ([t,V.cy]))
u.c=null
return u},
b2:function b2(){},
au:function au(){},
dw:function dw(){},
ar:function ar(){this.a=null},
fS:function fS(){this.b=this.a=null},
h_:function h_(){this.a=null},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b
this.c=null},
ho:function ho(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
nI:function(a){P.my(C.U,new V.jd(a))},
mt:function(a,b){var u=new V.h3()
u.fX(a,!0)
return u},
bh:function bh(){},
jd:function jd(a){this.a=a},
eT:function eT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fb:function fb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fQ:function fQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h3:function h3(){this.b=this.a=null},
h5:function h5(a){this.a=a},
h4:function h4(a){this.a=a},
h6:function h6(a){this.a=a},
hg:function hg(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(){}},U={
jm:function(){var u=new U.eN()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
k1:function(a){var u=new U.d9()
u.a=a
return u},
eN:function eN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
ci:function ci(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
k2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=new M.da()
u.sbg(a)
u.sbo(0,b)
u.sb3(c)
t=E.k6(null,!0,null,"",null,null)
s=F.ku()
r=s.a
q=new V.N(-1,-1,1)
q=q.C(0,Math.sqrt(q.F(q)))
p=r.bA(new V.aX(1,2,4,6),new V.ap(1,0,0,1),new V.a1(-1,-1,0),new V.a3(0,1),q,null)
r=s.a
q=new V.N(1,-1,1)
q=q.C(0,Math.sqrt(q.F(q)))
o=r.bA(new V.aX(0,3,4,6),new V.ap(0,0,1,1),new V.a1(1,-1,0),new V.a3(1,1),q,null)
r=s.a
q=new V.N(1,1,1)
q=q.C(0,Math.sqrt(q.F(q)))
n=r.bA(new V.aX(0,2,5,6),new V.ap(0,1,0,1),new V.a1(1,1,0),new V.a3(1,0),q,null)
r=s.a
q=V.b8()
m=new V.N(-1,1,1)
m=m.C(0,Math.sqrt(m.F(m)))
l=r.bA(new V.aX(0,2,4,7),new V.ap(1,1,0,1),new V.a1(-1,1,0),q,m,null)
s.d.jS(H.b([p,o,n,l],[F.al]))
s.aJ()
t.sc6(0,s)
u.d=t
u.e=null
return u},
d8:function d8(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
da:function da(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){}},A={
ma:function(a,b){var u,t
u=a.av
t=new A.dy(b,u)
t.c9(b,u)
t.fU(a,b)
return t},
jw:function(a,b,c,d,e){var u=new A.hw(a,b,c,e)
u.f=d
u.sjt(P.m8(d,0,!1,P.m))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
dc:function dc(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dy:function dy(a,b){var _=this
_.bE=_.ey=_.bD=_.av=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eO=_.cS=_.eN=_.bR=_.eM=_.eL=_.bQ=_.bP=_.eK=_.eJ=_.bO=_.bN=_.bM=_.eI=_.eH=_.bL=_.eG=_.eF=_.bK=_.eE=_.eD=_.bJ=_.bI=_.eC=_.eB=_.bH=_.bG=_.eA=_.ez=_.bF=null
_.cX=_.eS=_.cW=_.eR=_.cV=_.eQ=_.cU=_.eP=_.cT=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fC:function fC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aC=b3
_.av=b4
_.bD=b5},
cA:function cA(a,b,c){this.a=a
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
ct:function ct(){},
bF:function bF(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e3:function e3(){},
hC:function hC(a){this.a=a},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
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
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
nM:function(a,b,c,d){return F.nl(c,a,d,b,new F.je())},
nl:function(a,b,c,d,e){var u=F.nK(a,b,new F.j2(H.k(e,{func:1,ret:V.a1,args:[P.y]}),d,b,c),null)
if(u==null)return
u.aJ()
u.kL(new F.hX(),new F.fM())
return u},
nK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.al,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.ku()
t=H.b([],[F.al])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hR(null,null,new V.ap(p,0,0,1),null,null,new V.a3(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.eq(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hR(null,null,new V.ap(j,i,h,1),null,null,new V.a3(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.eq(d))}}u.d.jT(a+1,b+1,t)
return u},
dg:function(a,b,c){var u,t
u=new F.a6()
t=a.a
if(t==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.t("May not create a face with vertices attached to different shapes."))
u.j4(a)
u.j5(b)
u.j6(c)
C.a.h(u.a.a.d.b,u)
u.a.a.am()
return u},
ku:function(){var u,t
u=new F.dO()
t=new F.hS(u)
t.b=!1
t.sju(H.b([],[F.al]))
u.a=t
t=new F.h2(u)
t.scu(H.b([],[F.bQ]))
u.b=t
t=new F.h1(u)
t.shH(H.b([],[F.bp]))
u.c=t
t=new F.h0(u)
t.shx(H.b([],[F.a6]))
u.d=t
u.e=null
return u},
hR:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.al()
t=new F.i_(u)
t.scu(H.b([],[F.bQ]))
u.b=t
t=new F.hW(u)
s=[F.bp]
t.shI(H.b([],s))
t.shJ(H.b([],s))
u.c=t
t=new F.hT(u)
s=[F.a6]
t.shy(H.b([],s))
t.shz(H.b([],s))
t.shA(H.b([],s))
u.d=t
h=$.lu()
u.e=0
t=$.ay()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bd().a)!==0?e:null
u.x=(s&$.bc().a)!==0?b:null
u.y=(s&$.aO().a)!==0?f:null
u.z=(s&$.be().a)!==0?g:null
u.Q=(s&$.lv().a)!==0?c:null
u.ch=(s&$.c9().a)!==0?i:0
u.cx=(s&$.bb().a)!==0?a:null
return u},
je:function je(){},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f4:function f4(){},
h7:function h7(){},
bp:function bp(){},
fn:function fn(){},
hv:function hv(){},
bQ:function bQ(){},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a){this.a=a
this.b=null},
h1:function h1(a){this.a=a
this.b=null},
h2:function h2(a){this.a=a
this.b=null},
al:function al(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a},
i0:function i0(a){this.a=a},
hS:function hS(a){this.a=a
this.c=this.b=null},
hT:function hT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a
this.c=this.b=null},
hY:function hY(){},
hX:function hX(){},
hZ:function hZ(){},
fM:function fM(){},
i_:function i_(a){this.a=a
this.b=null}},T={
ju:function(a,b){var u=new T.hj()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bs:function bs(){},
hf:function hf(){},
hj:function hj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
hm:function hm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hl:function hl(a,b,c,d,e,f,g){var _=this
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
J.ab.prototype={
B:function(a,b){return a===b},
gK:function(a){return H.cr(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fj.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iL:1}
J.dp.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$iC:1}
J.dq.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.fP.prototype={}
J.bv.prototype={}
J.b6.prototype={
i:function(a){var u=a[$.li()]
if(u==null)return this.fP(a)
return"JavaScript function for "+H.j(J.aF(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibl:1}
J.aH.prototype={
h:function(a,b){H.x(b,H.p(a,0))
if(!!a.fixed$length)H.q(P.X("add"))
a.push(b)},
l2:function(a,b){var u
if(!!a.fixed$length)H.q(P.X("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dK(b,null,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.q(P.X("remove"))
for(u=0;u<a.length;++u)if(J.R(a[u],b)){a.splice(u,1)
return!0}return!1},
af:function(a,b){var u,t
H.i(b,"$il",[H.p(a,0)],"$al")
if(!!a.fixed$length)H.q(P.X("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
T:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aQ(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.p(u,t,H.j(a[t]))
return u.join(b)},
kE:function(a){return this.l(a,"")},
ku:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.p(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aQ(a))}return t},
kt:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.L,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aQ(a))}throw H.c(H.fh())},
ks:function(a,b){return this.kt(a,b,null)},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fM:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.p(a,0)])
return H.b(a.slice(b,c),[H.p(a,0)])},
gkr:function(a){if(a.length>0)return a[0]
throw H.c(H.fh())},
gaE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fh())},
fI:function(a,b,c,d,e){var u,t,s
u=H.p(a,0)
H.i(d,"$il",[u],"$al")
if(!!a.immutable$list)H.q(P.X("setRange"))
P.b9(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.i(d,"$ia",[u],"$aa")
u=J.c4(d)
if(e+t>u.gm(d))throw H.c(H.m1())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bt:function(a,b,c,d){return this.fI(a,b,c,d,0)},
ed:function(a,b){var u,t
H.k(b,{func:1,ret:P.L,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aQ(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
i:function(a){return P.jp(a,"[","]")},
gU:function(a){return new J.ao(a,a.length,0,[H.p(a,0)])},
gK:function(a){return H.cr(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.X("set length"))
if(b<0)throw H.c(P.a8(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c2(a,b))
return a[b]},
p:function(a,b,c){H.x(c,H.p(a,0))
if(!!a.immutable$list)H.q(P.X("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c2(a,b))
a[b]=c},
q:function(a,b){var u,t
u=[H.p(a,0)]
H.i(b,"$ia",u,"$aa")
t=C.e.q(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bt(u,0,a.length,a)
this.bt(u,a.length,t,b)
return u},
$il:1,
$ia:1}
J.jq.prototype={}
J.ao.prototype={
gL:function(){return this.d},
D:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.B(u))
s=this.c
if(s>=t){this.sdM(null)
return!1}this.sdM(u[s]);++this.c
return!0},
sdM:function(a){this.d=H.x(a,H.p(this,0))},
$iaS:1}
J.bo.prototype={
le:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.X(""+a+".toInt()"))},
cY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.X(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.X(""+a+".round()"))},
fj:function(a,b){var u,t
if(b>20)throw H.c(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bq:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a3(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.X("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.v("0",r)},
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
q:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a*b},
bs:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e6(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.e6(a,b)},
e6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.X("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.e5(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jb:function(a,b){if(b<0)throw H.c(H.an(b))
return this.e5(a,b)},
e5:function(a,b){return b>31?0:a>>>b},
$iy:1,
$iag:1}
J.dn.prototype={$im:1}
J.dm.prototype={}
J.b5.prototype={
a3:function(a,b){if(b<0)throw H.c(H.c2(a,b))
if(b>=a.length)H.q(H.c2(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.c2(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.ji(b,null,null))
return a+b},
b2:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
c=P.b9(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ao:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.an(c))
if(typeof c!=="number")return c.a_()
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.ao(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.dK(b,null,null))
if(b>c)throw H.c(P.dK(b,null,null))
if(c>a.length)throw H.c(P.dK(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.w(a,b,null)},
lh:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kT:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aN:function(a,b){return this.kT(a,b," ")},
f1:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f0:function(a,b){return this.f1(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikj:1,
$ih:1}
H.r.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.a3(this.a,b)},
$acG:function(){return[P.m]},
$aS:function(){return[P.m]},
$al:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.eY.prototype={}
H.bN.prototype={
gU:function(a){return new H.cj(this,this.gm(this),0,[H.a9(this,"bN",0)])},
c_:function(a,b){return this.fO(0,H.k(b,{func:1,ret:P.L,args:[H.a9(this,"bN",0)]}))}}
H.cj.prototype={
gL:function(){return this.d},
D:function(){var u,t,s,r
u=this.a
t=J.c4(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aQ(u))
r=this.c
if(r>=s){this.sb8(null)
return!1}this.sb8(t.ag(u,r));++this.c
return!0},
sb8:function(a){this.d=H.x(a,H.p(this,0))},
$iaS:1}
H.fx.prototype={
gU:function(a){return new H.fy(J.bz(this.a),this.b,this.$ti)},
gm:function(a){return J.aE(this.a)},
ag:function(a,b){return this.b.$1(J.eC(this.a,b))},
$al:function(a,b){return[b]}}
H.fy.prototype={
D:function(){var u=this.b
if(u.D()){this.sb8(this.c.$1(u.gL()))
return!0}this.sb8(null)
return!1},
gL:function(){return this.a},
sb8:function(a){this.a=H.x(a,H.p(this,1))},
$aaS:function(a,b){return[b]}}
H.fz.prototype={
gm:function(a){return J.aE(this.a)},
ag:function(a,b){return this.b.$1(J.eC(this.a,b))},
$abN:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cJ.prototype={
gU:function(a){return new H.i3(J.bz(this.a),this.b,this.$ti)}}
H.i3.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(t.$1(u.gL()))return!0
return!1},
gL:function(){return this.a.gL()}}
H.bI.prototype={}
H.cG.prototype={
p:function(a,b,c){H.x(c,H.a9(this,"cG",0))
throw H.c(P.X("Cannot modify an unmodifiable list"))}}
H.e5.prototype={}
H.eP.prototype={
i:function(a){return P.jt(this)},
p:function(a,b,c){H.x(b,H.p(this,0))
H.x(c,H.p(this,1))
return H.lT()},
$iJ:1}
H.eQ.prototype={
gm:function(a){return this.a},
bB:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bB(b))return
return this.dN(b)},
dN:function(a){return this.b[H.D(a)]},
T:function(a,b){var u,t,s,r,q
u=H.p(this,1)
H.k(b,{func:1,ret:-1,args:[H.p(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.dN(q),u))}}}
H.fT.prototype={}
H.hs.prototype={
at:function(a){var u,t,s
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
H.fN.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fl.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hG.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jf.prototype={
$1:function(a){if(!!J.O(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eo.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ias:1}
H.cd.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ibl:1,
gln:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.he.prototype={}
H.h8.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.cb.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gK:function(a){var u,t
u=this.c
if(u==null)t=H.cr(this.a)
else t=typeof u!=="object"?J.d1(u):H.cr(u)
return(t^H.cr(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.hu.prototype={
i:function(a){return this.a}}
H.eL.prototype={
i:function(a){return this.a}}
H.fY.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aJ.prototype={
gm:function(a){return this.a},
gkD:function(a){return this.a===0},
gaD:function(){return new H.fp(this,[H.p(this,0)])},
bB:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dJ(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dJ(t,a)}else return this.kA(a)},
kA:function(a){var u=this.d
if(u==null)return!1
return this.d1(this.ci(u,this.d0(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bw(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bw(r,b)
s=t==null?null:t.b
return s}else return this.kB(b)},
kB:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ci(u,this.d0(a))
s=this.d1(t,a)
if(s<0)return
return t[s].b},
p:function(a,b,c){var u,t
H.x(b,H.p(this,0))
H.x(c,H.p(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cs()
this.b=u}this.dA(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cs()
this.c=t}this.dA(t,b,c)}else this.kC(b,c)},
kC:function(a,b){var u,t,s,r
H.x(a,H.p(this,0))
H.x(b,H.p(this,1))
u=this.d
if(u==null){u=this.cs()
this.d=u}t=this.d0(a)
s=this.ci(u,t)
if(s==null)this.cA(u,t,[this.cb(a,b)])
else{r=this.d1(s,a)
if(r>=0)s[r].b=b
else s.push(this.cb(a,b))}},
T:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aQ(this))
u=u.c}},
dA:function(a,b,c){var u
H.x(b,H.p(this,0))
H.x(c,H.p(this,1))
u=this.bw(a,b)
if(u==null)this.cA(a,b,this.cb(b,c))
else u.b=c},
he:function(){this.r=this.r+1&67108863},
cb:function(a,b){var u,t
u=new H.fo(H.x(a,H.p(this,0)),H.x(b,H.p(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.he()
return u},
d0:function(a){return J.d1(a)&0x3ffffff},
d1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
i:function(a){return P.jt(this)},
bw:function(a,b){return a[b]},
ci:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
hs:function(a,b){delete a[b]},
dJ:function(a,b){return this.bw(a,b)!=null},
cs:function(){var u=Object.create(null)
this.cA(u,"<non-identifier-key>",u)
this.hs(u,"<non-identifier-key>")
return u},
$ik9:1}
H.fo.prototype={}
H.fp.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.fq(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fq.prototype={
gL:function(){return this.d},
D:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aQ(u))
else{u=this.c
if(u==null){this.sdB(null)
return!1}else{this.sdB(u.a)
this.c=this.c.c
return!0}}},
sdB:function(a){this.d=H.x(a,H.p(this,0))},
$iaS:1}
H.j5.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.j6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.j7.prototype={
$1:function(a){return this.a(H.D(a))},
$S:43}
H.fk.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikj:1,
$imp:1}
H.bP.prototype={$ibP:1,$imz:1}
H.dA.prototype={
gm:function(a){return a.length},
$iaI:1,
$aaI:function(){}}
H.dB.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]},
p:function(a,b,c){H.nn(c)
H.ba(b,a,a.length)
a[b]=c},
$abI:function(){return[P.y]},
$aS:function(){return[P.y]},
$il:1,
$al:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.dC.prototype={
p:function(a,b,c){H.a5(c)
H.ba(b,a,a.length)
a[b]=c},
$abI:function(){return[P.m]},
$aS:function(){return[P.m]},
$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.fG.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fH.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fI.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fJ.prototype={
j:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.dD.prototype={
gm:function(a){return a.length},
j:function(a,b){H.ba(b,a,a.length)
return a[b]},
$io7:1}
H.co.prototype={
gm:function(a){return a.length},
j:function(a,b){H.ba(b,a,a.length)
return a[b]},
$ico:1,
$iM:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.i5.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:13}
P.i4.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.i6.prototype={
$0:function(){this.a.$0()},
$S:2}
P.i7.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ep.prototype={
ha:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c1(new P.iK(this,b),0),a)
else throw H.c(P.X("`setTimeout()` not found."))},
hb:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c1(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.c(P.X("Periodic timer."))},
$iaZ:1}
P.iK.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iJ.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fT(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b1.prototype={
kJ:function(a){if(this.c!==6)return!0
return this.b.b.di(H.k(this.d,{func:1,ret:P.L,args:[P.K]}),a.a,P.L,P.K)},
kz:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.p(this,1)}
r=this.b.b
if(H.ey(u,{func:1,args:[P.K,P.as]}))return H.jK(r.l9(u,a.a,a.b,null,t,P.as),s)
else return H.jK(r.di(H.k(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.aC.prototype={
fi:function(a,b,c){var u,t,s,r
u=H.p(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.W
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n9(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aC(0,$.W,[c])
r=b==null?1:3
this.dD(new P.b1(s,r,a,b,[u,c]))
return s},
ld:function(a,b){return this.fi(a,null,b)},
dD:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ib1")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaC")
u=t.a
if(u<4){t.dD(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.j0(null,null,u,H.k(new P.ig(this,a),{func:1,ret:-1}))}},
e_:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ib1")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaC")
t=p.a
if(t<4){p.e_(a)
return}this.a=t
this.c=p.c}u.a=this.bx(a)
t=this.b
t.toString
P.j0(null,null,t,H.k(new P.ik(u,this),{func:1,ret:-1}))}},
cw:function(){var u=H.d(this.c,"$ib1")
this.c=null
return this.bx(u)},
bx:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dF:function(a){var u,t,s
u=H.p(this,0)
H.jK(a,{futureOr:1,type:u})
t=this.$ti
if(H.cV(a,"$ich",t,"$ach"))if(H.cV(a,"$iaC",t,null))P.kN(a,this)
else P.mL(a,this)
else{s=this.cw()
H.x(a,u)
this.a=4
this.c=a
P.cM(this,s)}},
dG:function(a,b){var u
H.d(b,"$ias")
u=this.cw()
this.a=8
this.c=new P.ai(a,b)
P.cM(this,u)},
$ich:1}
P.ig.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:2}
P.ik.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:2}
P.ih.prototype={
$1:function(a){var u=this.a
u.a=0
u.dF(a)},
$S:13}
P.ii.prototype={
$2:function(a,b){H.d(b,"$ias")
this.a.dG(a,b)},
$1:function(a){return this.$2(a,null)},
$S:34}
P.ij.prototype={
$0:function(){this.a.dG(this.b,this.c)},
$S:2}
P.io.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ff(H.k(r.d,{func:1}),null)}catch(q){t=H.ah(q)
s=H.c6(q)
if(this.d){r=H.d(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.O(u).$ich){if(u instanceof P.aC&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ld(new P.ip(o),null)
r.a=!1}},
$S:3}
P.ip.prototype={
$1:function(a){return this.a},
$S:35}
P.im.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.p(s,0)
q=H.x(this.c,r)
p=H.p(s,1)
this.a.b=s.b.b.di(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ah(o)
t=H.c6(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.il.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iai")
r=this.c
if(r.kJ(u)&&r.e!=null){q=this.b
q.b=r.kz(u)
q.a=!1}}catch(p){t=H.ah(p)
s=H.c6(p)
r=H.d(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.h9.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aC(0,$.W,[P.m])
u.a=0
s=H.p(this,0)
r=H.k(new P.hb(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.hc(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.hb.prototype={
$1:function(a){H.x(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.p(this.b,0)]}}}
P.hc.prototype={
$0:function(){this.b.dF(this.a.a)},
$S:2}
P.cv.prototype={}
P.ha.prototype={}
P.aZ.prototype={}
P.ai.prototype={
i:function(a){return H.j(this.a)},
$ibk:1}
P.iU.prototype={$iom:1}
P.j_.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dF()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:2}
P.iu.prototype={
la:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.W){a.$0()
return}P.kZ(null,null,this,a,-1)}catch(s){u=H.ah(s)
t=H.c6(s)
P.iZ(null,null,this,u,H.d(t,"$ias"))}},
lb:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.W){a.$1(b)
return}P.l_(null,null,this,a,b,-1,c)}catch(s){u=H.ah(s)
t=H.c6(s)
P.iZ(null,null,this,u,H.d(t,"$ias"))}},
k_:function(a,b){return new P.iw(this,H.k(a,{func:1,ret:b}),b)},
cG:function(a){return new P.iv(this,H.k(a,{func:1,ret:-1}))},
eg:function(a,b){return new P.ix(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
ff:function(a,b){H.k(a,{func:1,ret:b})
if($.W===C.l)return a.$0()
return P.kZ(null,null,this,a,b)},
di:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.W===C.l)return a.$1(b)
return P.l_(null,null,this,a,b,c,d)},
l9:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.W===C.l)return a.$2(b,c)
return P.na(null,null,this,a,b,c,d,e,f)}}
P.iw.prototype={
$0:function(){return this.a.ff(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iv.prototype={
$0:function(){return this.a.la(this.b)},
$S:3}
P.ix.prototype={
$1:function(a){var u=this.c
return this.a.lb(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.is.prototype={
gU:function(a){var u=new P.ei(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibX")!=null}else{t=this.ho(b)
return t}},
ho:function(a){var u=this.d
if(u==null)return!1
return this.cf(this.dO(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jA()
this.b=u}return this.dC(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jA()
this.c=t}return this.dC(t,b)}else return this.hf(b)},
hf:function(a){var u,t,s
H.x(a,H.p(this,0))
u=this.d
if(u==null){u=P.jA()
this.d=u}t=this.dH(a)
s=u[t]
if(s==null)u[t]=[this.ct(a)]
else{if(this.cf(s,a)>=0)return!1
s.push(this.ct(a))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iR(this.c,b)
else return this.iO(b)},
iO:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dO(u,a)
s=this.cf(t,a)
if(s<0)return!1
this.e7(t.splice(s,1)[0])
return!0},
dC:function(a,b){H.x(b,H.p(this,0))
if(H.d(a[b],"$ibX")!=null)return!1
a[b]=this.ct(b)
return!0},
iR:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibX")
if(u==null)return!1
this.e7(u)
delete a[b]
return!0},
dT:function(){this.r=1073741823&this.r+1},
ct:function(a){var u,t
u=new P.bX(H.x(a,H.p(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dT()
return u},
e7:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dT()},
dH:function(a){return J.d1(a)&1073741823},
dO:function(a,b){return a[this.dH(b)]},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1}}
P.bX.prototype={}
P.ei.prototype={
gL:function(){return this.d},
D:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aQ(u))
else{u=this.c
if(u==null){this.sdE(null)
return!1}else{this.sdE(H.x(u.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
sdE:function(a){this.d=H.x(a,H.p(this,0))},
$iaS:1}
P.fr.prototype={
$2:function(a,b){this.a.p(0,H.x(a,this.b),H.x(b,this.c))},
$S:5}
P.fs.prototype={$il:1,$ia:1}
P.S.prototype={
gU:function(a){return new H.cj(a,this.gm(a),0,[H.c5(this,a,"S",0)])},
ag:function(a,b){return this.j(a,b)},
T:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.c5(this,a,"S",0)]})
u=this.gm(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gm(a))throw H.c(P.aQ(a))}},
lg:function(a,b){var u,t
u=H.b([],[H.c5(this,a,"S",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.p(u,t,this.j(a,t))
return u},
lf:function(a){return this.lg(a,!0)},
q:function(a,b){var u,t
u=[H.c5(this,a,"S",0)]
H.i(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.e.q(this.gm(a),b.gm(b)))
C.a.bt(t,0,this.gm(a),a)
C.a.bt(t,this.gm(a),t.length,b)
return t},
kp:function(a,b,c,d){var u
H.x(d,H.c5(this,a,"S",0))
P.b9(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.p(a,u,d)},
i:function(a){return P.jp(a,"[","]")}}
P.fu.prototype={}
P.fv.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:5}
P.bO.prototype={
T:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.a9(this,"bO",0),H.a9(this,"bO",1)]})
for(u=J.bz(this.gaD());u.D();){t=u.gL()
b.$2(t,this.j(0,t))}},
gm:function(a){return J.aE(this.gaD())},
i:function(a){return P.jt(this)},
$iJ:1}
P.iL.prototype={
p:function(a,b,c){H.x(b,H.p(this,0))
H.x(c,H.p(this,1))
throw H.c(P.X("Cannot modify unmodifiable map"))}}
P.fw.prototype={
j:function(a,b){return this.a.j(0,b)},
p:function(a,b,c){this.a.p(0,H.x(b,H.p(this,0)),H.x(c,H.p(this,1)))},
T:function(a,b){this.a.T(0,H.k(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.aF(this.a)},
$iJ:1}
P.e6.prototype={}
P.iz.prototype={
af:function(a,b){var u
for(u=J.bz(H.i(b,"$il",this.$ti,"$al"));u.D();)this.h(0,u.gL())},
i:function(a){return P.jp(this,"{","}")},
ag:function(a,b){var u,t,s
if(b<0)H.q(P.a8(b,0,null,"index",null))
for(u=P.mP(this,this.r,H.p(this,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.bL(b,this,"index",null,t))},
$il:1,
$ikt:1}
P.ej.prototype={}
P.et.prototype={}
P.eH.prototype={
kM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b9(b,c,a.length,null,null,null)
u=$.lx()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.H(a,t)
if(m===37){l=n+2
if(l<=c){k=H.j4(C.c.H(a,n))
j=H.j4(C.c.H(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ad("")
g=r.a+=C.c.w(a,s,t)
r.a=g+H.bT(m)
s=n
continue}}throw H.c(P.a_("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.w(a,s,c)
f=g.length
if(q>=0)P.jX(a,p,c,q,o,f)
else{e=C.e.bs(f-1,4)+1
if(e===1)throw H.c(P.a_("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b2(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jX(a,p,c,q,o,d)
else{e=C.e.bs(d,4)
if(e===1)throw H.c(P.a_("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b2(a,c,c,e===2?"==":"=")}return a},
$abE:function(){return[[P.a,P.m],P.h]}}
P.eI.prototype={
$abi:function(){return[[P.a,P.m],P.h]}}
P.bE.prototype={}
P.bi.prototype={}
P.f_.prototype={
$abE:function(){return[P.h,[P.a,P.m]]}}
P.fe.prototype={
i:function(a){return this.a}}
P.fd.prototype={
hp:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.ad("")
if(r>b)q.a+=C.c.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abi:function(){return[P.h,P.h]}}
P.hN.prototype={
gko:function(){return C.S}}
P.hP.prototype={
bh:function(a,b,c){var u,t,s
c=P.b9(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iS(t)
if(s.hB(a,b,c)!==c)s.e9(J.lG(a,c-1),0)
return new Uint8Array(t.subarray(0,H.n4(0,s.b,t.length)))},
cN:function(a){return this.bh(a,0,null)},
$abi:function(){return[P.h,[P.a,P.m]]}}
P.iS.prototype={
e9:function(a,b){var u,t,s,r,q
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
hB:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a3(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e9(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hO.prototype={
bh:function(a,b,c){var u,t,s,r
H.i(a,"$ia",[P.m],"$aa")
u=P.mC(!1,a,b,c)
if(u!=null)return u
c=P.b9(b,c,J.aE(a),null,null,null)
t=new P.ad("")
s=new P.iQ(!1,t)
s.bh(a,b,c)
if(s.e>0){H.q(P.a_("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bT(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cN:function(a){return this.bh(a,0,null)},
$abi:function(){return[[P.a,P.m],P.h]}}
P.iQ.prototype={
bh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.i(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iR(this,b,c,a)
$label0$0:for(q=J.c4(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c0()
if((n&192)!==128){m=P.a_("Bad UTF-8 encoding 0x"+C.e.bq(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.G,m)
if(u<=C.G[m]){m=P.a_("Overlong encoding of 0x"+C.e.bq(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a_("Character outside valid Unicode range: 0x"+C.e.bq(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bT(u)
this.c=!1}for(m=o<c;m;){l=P.nb(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a_()
if(n<0){i=P.a_("Negative UTF-8 code unit: -0x"+C.e.bq(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a_("Bad UTF-8 encoding 0x"+C.e.bq(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iR.prototype={
$2:function(a,b){this.a.b.a+=P.dT(this.d,a,b)},
$S:42}
P.L.prototype={}
P.aj.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.e.aZ(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lU(H.mk(this))
t=P.db(H.mi(this))
s=P.db(H.me(this))
r=P.db(H.mf(this))
q=P.db(H.mh(this))
p=P.db(H.mj(this))
o=P.lV(H.mg(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.y.prototype={}
P.aR.prototype={
q:function(a,b){return new P.aR(C.e.q(this.a,b.ghu()))},
u:function(a,b){return new P.aR(C.e.u(this.a,b.ghu()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gK:function(a){return C.e.gK(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eX()
t=this.a
if(t<0)return"-"+new P.aR(0-t).i(0)
s=u.$1(C.e.ab(t,6e7)%60)
r=u.$1(C.e.ab(t,1e6)%60)
q=new P.eW().$1(t%1e6)
return""+C.e.ab(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.eX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bk.prototype={}
P.dF.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gce:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcd:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gce()+t+s
if(!this.a)return r
q=this.gcd()
p=P.f1(this.b)
return r+q+": "+p}}
P.bU.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fg.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t
u=H.a5(this.b)
if(typeof u!=="number")return u.a_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hE.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eO.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.f1(u)+"."}}
P.fO.prototype={
i:function(a){return"Out of Memory"},
$ibk:1}
P.dS.prototype={
i:function(a){return"Stack Overflow"},
$ibk:1}
P.eS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ef.prototype={
i:function(a){return"Exception: "+this.a}}
P.f9.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a3(r,m)
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
g=""}f=C.c.w(r,i,j)
return t+h+f+g+"\n"+C.c.v(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bl.prototype={}
P.m.prototype={}
P.l.prototype={
c_:function(a,b){var u=H.a9(this,"l",0)
return new H.cJ(this,H.k(b,{func:1,ret:P.L,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gU(this)
for(t=0;u.D();)++t
return t},
gaS:function(a){var u,t
u=this.gU(this)
if(!u.D())throw H.c(H.fh())
t=u.gL()
if(u.D())throw H.c(H.m2())
return t},
ag:function(a,b){var u,t,s
if(b<0)H.q(P.a8(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.D();){s=u.gL()
if(b===t)return s;++t}throw H.c(P.bL(b,this,"index",null,t))},
i:function(a){return P.m0(this,"(",")")}}
P.aS.prototype={}
P.a.prototype={$il:1}
P.J.prototype={}
P.C.prototype={
gK:function(a){return P.K.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ag.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
B:function(a,b){return this===b},
gK:function(a){return H.cr(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.as.prototype={}
P.h.prototype={$ikj:1}
P.ad.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inW:1}
P.hM.prototype={
$2:function(a,b){var u,t,s,r
u=P.h
H.i(a,"$iJ",[u,u],"$aJ")
H.D(b)
t=J.cW(b).f0(b,"=")
if(t===-1){if(b!=="")a.p(0,P.jC(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.w(b,0,t)
r=C.c.ax(b,t+1)
u=this.a
a.p(0,P.jC(s,0,s.length,u,!0),P.jC(r,0,r.length,u,!0))}return a},
$S:48}
P.hJ.prototype={
$2:function(a,b){throw H.c(P.a_("Illegal IPv4 address, "+a,this.a,b))},
$S:53}
P.hK.prototype={
$2:function(a,b){throw H.c(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:30}
P.hL.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cX(C.c.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:32}
P.bY.prototype={
gfo:function(){return this.b},
gcZ:function(a){var u=this.c
if(u==null)return""
if(C.c.aa(u,"["))return C.c.w(u,1,u.length-1)
return u},
gbT:function(a){var u=this.d
if(u==null)return P.kR(this.a)
return u},
gda:function(){var u=this.f
return u==null?"":u},
geV:function(){var u=this.r
return u==null?"":u},
dh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.i(h,"$iJ",[P.h,null],"$aJ")
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
if(s&&!C.c.aa(d,"/"))d="/"+d
g=P.jB(g,0,0,h)
return new P.bY(i,j,c,f,d,g,this.r)},
fd:function(a,b){return this.dh(a,null,null,null,null,null,null,b,null,null)},
gdc:function(){var u,t
if(this.Q==null){u=this.f
t=P.h
this.siN(new P.e6(P.kE(u==null?"":u,C.m),[t,t]))}return this.Q},
geW:function(){return this.c!=null},
geZ:function(){return this.f!=null},
geX:function(){return this.r!=null},
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
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$ijx)if(this.a==b.gc5())if(this.c!=null===b.geW())if(this.b==b.gfo())if(this.gcZ(this)==b.gcZ(b))if(this.gbT(this)==b.gbT(b))if(this.e===b.gfa(b)){u=this.f
t=u==null
if(!t===b.geZ()){if(t)u=""
if(u===b.gda()){u=this.r
t=u==null
if(!t===b.geX()){if(t)u=""
u=u===b.geV()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
if(u==null){u=C.c.gK(this.i(0))
this.z=u}return u},
siN:function(a){var u=P.h
this.Q=H.i(a,"$iJ",[u,u],"$aJ")},
$ijx:1,
gc5:function(){return this.a},
gfa:function(a){return this.e}}
P.iM.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.q()
throw H.c(P.a_("Invalid port",this.a,u+1))},
$S:15}
P.iN.prototype={
$1:function(a){return P.eu(C.a9,a,C.m,!1)},
$S:16}
P.iP.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.eu(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.eu(C.w,b,C.m,!0))}},
$S:29}
P.iO.prototype={
$2:function(a,b){var u,t
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(u=J.bz(H.lb(b,"$il")),t=this.a;u.D();)t.$2(a,H.D(u.gL()))},
$S:36}
P.hI.prototype={
gfn:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f1(t,"?",u)
r=t.length
if(s>=0){q=P.cS(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.ia(this,"data",null,null,null,P.cS(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iW.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.iV.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.lH(u,0,96,b)
return u},
$S:39}
P.iX.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iY.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iC.prototype={
geW:function(){return this.c>0},
geY:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.A(t)
t=u+1<t
u=t}else u=!1
return u},
geZ:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
geX:function(){return this.r<this.a.length},
gdR:function(){return this.b===4&&C.c.aa(this.a,"http")},
gdS:function(){return this.b===5&&C.c.aa(this.a,"https")},
gc5:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdR()){this.x="http"
u="http"}else if(this.gdS()){this.x="https"
u="https"}else if(u===4&&C.c.aa(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.aa(this.a,"package")){this.x="package"
u="package"}else{u=C.c.w(this.a,0,u)
this.x=u}return u},
gfo:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.w(this.a,t,u-1):""},
gcZ:function(a){var u=this.c
return u>0?C.c.w(this.a,u,this.d):""},
gbT:function(a){var u
if(this.geY()){u=this.d
if(typeof u!=="number")return u.q()
return P.cX(C.c.w(this.a,u+1,this.e),null,null)}if(this.gdR())return 80
if(this.gdS())return 443
return 0},
gfa:function(a){return C.c.w(this.a,this.e,this.f)},
gda:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.c.w(this.a,u+1,t):""},
geV:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ax(t,u+1):""},
gdc:function(){var u=this.f
if(typeof u!=="number")return u.a_()
if(u>=this.r)return C.aa
u=P.h
return new P.e6(P.kE(this.gda(),C.m),[u,u])},
dh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.i(h,"$iJ",[P.h,null],"$aJ")
i=this.gc5()
u=i==="file"
t=this.c
j=t>0?C.c.w(this.a,this.b+3,t):""
f=this.geY()?this.gbT(this):null
t=this.c
if(t>0)c=C.c.w(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.w(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.aa(d,"/"))d="/"+d
g=P.jB(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ax(t,s+1)
return new P.bY(i,j,c,f,d,g,b)},
fd:function(a,b){return this.dh(a,null,null,null,null,null,null,b,null,null)},
gK:function(a){var u=this.y
if(u==null){u=C.c.gK(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ijx&&this.a===b.i(0)},
i:function(a){return this.a},
$ijx:1}
P.ia.prototype={}
W.v.prototype={}
W.d2.prototype={
i:function(a){return String(a)},
$id2:1}
W.eE.prototype={
i:function(a){return String(a)}}
W.ca.prototype={$ica:1}
W.bf.prototype={$ibf:1}
W.bC.prototype={
c1:function(a,b,c){if(c!=null)return this.hC(a,b,P.ni(c,null))
return this.hD(a,b)},
fw:function(a,b){return this.c1(a,b,null)},
hC:function(a,b,c){return a.getContext(b,c)},
hD:function(a,b){return a.getContext(b)},
$ibC:1,
$ik_:1}
W.bD.prototype={
hE:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kk:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibD:1}
W.bg.prototype={
gm:function(a){return a.length}}
W.ce.prototype={
gm:function(a){return a.length}}
W.eR.prototype={}
W.az.prototype={$iaz:1}
W.cf.prototype={
jV:function(a,b){return a.adoptNode(b)},
dm:function(a,b){return a.getElementById(b)}}
W.eV.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
kb:function(a,b){return a.createHTMLDocument(b)}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.cV(b,"$iaA",[P.ag],"$aaA"))return!1
u=J.a7(b)
return a.left===u.gbS(b)&&a.top===u.gbX(b)&&a.width===u.gaR(b)&&a.height===u.gaL(b)},
gK:function(a){return W.kP(C.f.gK(a.left),C.f.gK(a.top),C.f.gK(a.width),C.f.gK(a.height))},
geh:function(a){return a.bottom},
gaL:function(a){return a.height},
gbS:function(a){return a.left},
gbW:function(a){return a.right},
gbX:function(a){return a.top},
gaR:function(a){return a.width},
$iaA:1,
$aaA:function(){return[P.ag]}}
W.i9.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iI")},
p:function(a,b,c){var u
H.d(c,"$iI")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.jg(this.a,c,u[b])},
h:function(a,b){J.jU(this.a,b)
return b},
gU:function(a){var u=this.lf(this)
return new J.ao(u,u.length,0,[H.p(u,0)])},
$aS:function(){return[W.I]},
$al:function(){return[W.I]},
$aa:function(){return[W.I]}}
W.I.prototype={
gjZ:function(a){return new W.ib(a)},
gcM:function(a){return new W.i9(a,a.children)},
geo:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.aA(u,t,s,r,[P.ag])},
i:function(a){return a.localName},
as:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k5
if(u==null){u=H.b([],[W.aw])
t=new W.dE(u)
C.a.h(u,W.kO(null))
C.a.h(u,W.kQ())
$.k5=t
d=t}else d=u
u=$.k4
if(u==null){u=new W.ev(d)
$.k4=u
c=u}else{u.a=d
c=u}}if($.b3==null){u=document
t=u.implementation
t=(t&&C.T).kb(t,"")
$.b3=t
$.jn=t.createRange()
t=$.b3
t.toString
t=t.createElement("base")
H.d(t,"$ica")
t.href=u.baseURI
u=$.b3.head;(u&&C.V).E(u,t)}u=$.b3
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibf")}u=$.b3
if(!!this.$ibf)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b3.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a7,a.tagName)){u=$.jn;(u&&C.M).fE(u,s)
u=$.jn
r=(u&&C.M).k9(u,b)}else{s.innerHTML=b
r=$.b3.createDocumentFragment()
for(u=J.a7(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.b3.body
if(s==null?u!=null:s!==u)J.jV(s)
c.dq(r)
C.z.jV(document,r)
return r},
ka:function(a,b,c){return this.as(a,b,c,null)},
fH:function(a,b,c,d){a.textContent=null
this.E(a,this.as(a,b,c,d))},
fG:function(a,b){return this.fH(a,b,null,null)},
b5:function(a,b){return a.getAttribute(b)},
iP:function(a,b){return a.removeAttribute(b)},
fF:function(a,b,c){return a.setAttribute(b,c)},
$iI:1,
glc:function(a){return a.tagName}}
W.eZ.prototype={
$1:function(a){return!!J.O(H.d(a,"$iz")).$iI},
$S:18}
W.n.prototype={$in:1}
W.bH.prototype={
hg:function(a,b,c,d){return a.addEventListener(b,H.c1(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ibH:1}
W.f8.prototype={
gm:function(a){return a.length}}
W.dj.prototype={}
W.dk.prototype={
iX:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bJ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bL(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$iz")
throw H.c(P.X("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.z]},
$aS:function(){return[W.z]},
$il:1,
$al:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$ibJ:1,
$aat:function(){return[W.z]}}
W.dl.prototype={}
W.b4.prototype={$ib4:1,
ger:function(a){return a.data}}
W.bK.prototype={$ibK:1,$ik_:1}
W.aT.prototype={$iaT:1}
W.du.prototype={
i:function(a){return String(a)},
$idu:1}
W.cm.prototype={}
W.a0.prototype={$ia0:1}
W.am.prototype={
gaS:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kv("No elements"))
if(t>1)throw H.c(P.kv("More than one element"))
return u.firstChild},
af:function(a,b){var u,t,s,r,q
H.i(b,"$il",[W.z],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a7(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
p:function(a,b,c){var u,t
H.d(c,"$iz")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.jg(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,-1,[H.c5(C.ab,u,"at",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aS:function(){return[W.z]},
$al:function(){return[W.z]},
$aa:function(){return[W.z]}}
W.z.prototype={
l1:function(a){var u=a.parentNode
if(u!=null)J.eB(u,a)},
l6:function(a,b){var u,t
try{u=a.parentNode
J.jg(u,b,a)}catch(t){H.ah(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fN(a):u},
E:function(a,b){return a.appendChild(H.d(b,"$iz"))},
iQ:function(a,b){return a.removeChild(b)},
iW:function(a,b,c){return a.replaceChild(b,c)},
$iz:1}
W.cp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bL(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$iz")
throw H.c(P.X("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.z]},
$aS:function(){return[W.z]},
$il:1,
$al:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aat:function(){return[W.z]}}
W.dJ.prototype={
k9:function(a,b){return a.createContextualFragment(b)},
fE:function(a,b){return a.selectNodeContents(b)}}
W.fZ.prototype={
gm:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.dU.prototype={
as:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
u=W.lY("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).af(0,new W.am(u))
return t},
hG:function(a,b){return a.insertRow(b)}}
W.dV.prototype={
as:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.as(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaS(u)
s.toString
u=new W.am(s)
r=u.gaS(u)
t.toString
r.toString
new W.am(t).af(0,new W.am(r))
return t},
dQ:function(a,b){return a.insertCell(b)}}
W.hd.prototype={
as:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.as(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaS(u)
t.toString
s.toString
new W.am(t).af(0,new W.am(s))
return t}}
W.cx.prototype={$icx:1}
W.aK.prototype={$iaK:1}
W.aL.prototype={$iaL:1}
W.hr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bL(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$iaK")
throw H.c(P.X("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.aK]},
$aS:function(){return[W.aK]},
$il:1,
$al:function(){return[W.aK]},
$ia:1,
$aa:function(){return[W.aK]},
$aat:function(){return[W.aK]}}
W.bt.prototype={}
W.i2.prototype={$ik_:1}
W.b0.prototype={
gkh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.X("deltaY is not supported"))},
gkg:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.X("deltaX is not supported"))},
$ib0:1}
W.cK.prototype={
iY:function(a,b){return a.requestAnimationFrame(H.c1(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
hv:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.ee.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.cV(b,"$iaA",[P.ag],"$aaA"))return!1
u=J.a7(b)
return a.left===u.gbS(b)&&a.top===u.gbX(b)&&a.width===u.gaR(b)&&a.height===u.gaL(b)},
gK:function(a){return W.kP(C.f.gK(a.left),C.f.gK(a.top),C.f.gK(a.width),C.f.gK(a.height))},
gaL:function(a){return a.height},
gaR:function(a){return a.width}}
W.ek.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bL(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$iz")
throw H.c(P.X("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.z]},
$aS:function(){return[W.z]},
$il:1,
$al:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aat:function(){return[W.z]}}
W.i8.prototype={
T:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gaD(),t=u.length,s=this.a,r=J.a7(s),q=0;q<u.length;u.length===t||(0,H.B)(u),++q){p=u[q]
b.$2(p,r.b5(s,p))}},
gaD:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.h])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icL")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abO:function(){return[P.h,P.h]},
$aJ:function(){return[P.h,P.h]}}
W.ib.prototype={
j:function(a,b){return J.jh(this.a,H.D(b))},
p:function(a,b,c){J.lL(this.a,b,c)},
gm:function(a){return this.gaD().length}}
W.ic.prototype={}
W.jz.prototype={}
W.id.prototype={}
W.ie.prototype={
$1:function(a){return this.a.$1(H.d(a,"$in"))},
$S:41}
W.bw.prototype={
h_:function(a){var u,t
u=$.jS()
if(u.gkD(u)){for(t=0;t<262;++t)u.p(0,C.a6[t],W.nu())
for(t=0;t<12;++t)u.p(0,C.B[t],W.nv())}},
b_:function(a){return $.ly().Z(0,W.cg(a))},
az:function(a,b,c){var u,t,s
u=W.cg(a)
t=$.jS()
s=t.j(0,H.j(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.jH(s.$4(a,b,c,this))},
$iaw:1}
W.at.prototype={
gU:function(a){return new W.dh(a,this.gm(a),-1,[H.c5(this,a,"at",0)])}}
W.dE.prototype={
b_:function(a){return C.a.ed(this.a,new W.fL(a))},
az:function(a,b,c){return C.a.ed(this.a,new W.fK(a,b,c))},
$iaw:1}
W.fL.prototype={
$1:function(a){return H.d(a,"$iaw").b_(this.a)},
$S:19}
W.fK.prototype={
$1:function(a){return H.d(a,"$iaw").az(this.a,this.b,this.c)},
$S:19}
W.en.prototype={
h9:function(a,b,c,d){var u,t,s
this.a.af(0,c)
u=b.c_(0,new W.iA())
t=b.c_(0,new W.iB())
this.b.af(0,u)
s=this.c
s.af(0,C.H)
s.af(0,t)},
b_:function(a){return this.a.Z(0,W.cg(a))},
az:function(a,b,c){var u,t
u=W.cg(a)
t=this.c
if(t.Z(0,H.j(u)+"::"+b))return this.d.jW(c)
else if(t.Z(0,"*::"+b))return this.d.jW(c)
else{t=this.b
if(t.Z(0,H.j(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.j(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iaw:1}
W.iA.prototype={
$1:function(a){return!C.a.Z(C.B,H.D(a))},
$S:20}
W.iB.prototype={
$1:function(a){return C.a.Z(C.B,H.D(a))},
$S:20}
W.iH.prototype={
az:function(a,b,c){if(this.fS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jh(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.iI.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.D(a))},
$S:16}
W.iG.prototype={
b_:function(a){var u=J.O(a)
if(!!u.$ics)return!1
u=!!u.$io
if(u&&W.cg(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.c.aa(b,"on"))return!1
return this.b_(a)},
$iaw:1}
W.dh.prototype={
D:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdP(J.lD(this.a,u))
this.c=u
return!0}this.sdP(null)
this.c=t
return!1},
gL:function(){return this.d},
sdP:function(a){this.d=H.x(a,H.p(this,0))},
$iaS:1}
W.aw.prototype={}
W.iy.prototype={$io8:1}
W.ev.prototype={
dq:function(a){new W.iT(this).$2(a,null)},
bd:function(a,b){if(b==null)J.jV(a)
else J.eB(b,a)},
j1:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lI(a)
s=J.jh(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ah(o)}q="element unprintable"
try{q=J.aF(a)}catch(o){H.ah(o)}try{p=W.cg(a)
this.j0(H.d(a,"$iI"),b,u,q,p,H.d(t,"$iJ"),H.D(s))}catch(o){if(H.ah(o) instanceof P.aG)throw o
else{this.bd(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
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
return}u=f.gaD()
t=H.b(u.slice(0),[H.p(u,0)])
for(s=f.gaD().length-1,u=f.a,r=J.a7(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.az(a,J.lN(q),r.b5(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b5(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b5(u,q)
r.iP(u,q)}}if(!!J.O(a).$icx)this.dq(a.content)},
$inU:1}
W.iT.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j1(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bd(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ah(r)
q=H.d(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.eB(p,q)}else J.eB(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iz")}},
$S:46}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.ew.prototype={}
W.ex.prototype={}
P.iD.prototype={
eT:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dk:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.O(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$imp)throw H.c(P.hF("structured clone of RegExp"))
if(!!t.$ib4)return a
if(!!t.$ibP)return a
if(!!t.$iJ){s=this.eT(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.p(t,s,r)
a.T(0,new P.iF(u,this))
return u.a}if(!!t.$ia){s=this.eT(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.k8(a,s)}throw H.c(P.hF("structured clone of other type"))},
k8:function(a,b){var u,t,s,r
u=J.c4(a)
t=u.gm(a)
s=new Array(t)
C.a.p(this.b,b,s)
for(r=0;r<t;++r)C.a.p(s,r,this.dk(u.j(a,r)))
return s}}
P.iF.prototype={
$2:function(a,b){this.a.a[a]=this.b.dk(b)},
$S:5}
P.es.prototype={$ib4:1,
ger:function(a){return this.a}}
P.j1.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.iE.prototype={}
P.f5.prototype={
gba:function(){var u,t,s
u=this.b
t=H.a9(u,"S",0)
s=W.I
return new H.fx(new H.cJ(u,H.k(new P.f6(),{func:1,ret:P.L,args:[t]}),[t]),H.k(new P.f7(),{func:1,ret:s,args:[t]}),[t,s])},
T:function(a,b){H.k(b,{func:1,ret:-1,args:[W.I]})
C.a.T(P.kc(this.gba(),!1,W.I),b)},
p:function(a,b,c){var u
H.d(c,"$iI")
u=this.gba()
J.lK(u.b.$1(J.eC(u.a,b)),c)},
h:function(a,b){J.jU(this.b.a,b)},
gm:function(a){return J.aE(this.gba().a)},
j:function(a,b){var u=this.gba()
return u.b.$1(J.eC(u.a,b))},
gU:function(a){var u=P.kc(this.gba(),!1,W.I)
return new J.ao(u,u.length,0,[H.p(u,0)])},
$aS:function(){return[W.I]},
$al:function(){return[W.I]},
$aa:function(){return[W.I]}}
P.f6.prototype={
$1:function(a){return!!J.O(H.d(a,"$iz")).$iI},
$S:18}
P.f7.prototype={
$1:function(a){return H.f(H.d(a,"$iz"),"$iI")},
$S:47}
P.it.prototype={
gbW:function(a){var u=this.a
if(typeof u!=="number")return u.q()
return H.x(u+this.c,H.p(this,0))},
geh:function(a){var u=this.b
if(typeof u!=="number")return u.q()
return H.x(u+this.d,H.p(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cV(b,"$iaA",[P.ag],"$aaA")){u=this.a
t=J.a7(b)
if(u==t.gbS(b)){s=this.b
if(s==t.gbX(b)){if(typeof u!=="number")return u.q()
r=H.p(this,0)
if(H.x(u+this.c,r)===t.gbW(b)){if(typeof s!=="number")return s.q()
u=H.x(s+this.d,r)===t.geh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t,s,r,q
u=this.a
t=J.d1(u)
s=this.b
r=J.d1(s)
if(typeof u!=="number")return u.q()
q=H.p(this,0)
u=C.e.gK(H.x(u+this.c,q))
if(typeof s!=="number")return s.q()
q=C.e.gK(H.x(s+this.d,q))
return P.mO(P.ir(P.ir(P.ir(P.ir(0,t),r),u),q))}}
P.aA.prototype={
gbS:function(a){return this.a},
gbX:function(a){return this.b},
gaR:function(a){return this.c},
gaL:function(a){return this.d}}
P.cs.prototype={$ics:1}
P.o.prototype={
gcM:function(a){return new P.f5(a,new W.am(a))},
as:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.aw])
C.a.h(u,W.kO(null))
C.a.h(u,W.kQ())
C.a.h(u,new W.iG())
c=new W.ev(new W.dE(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).ka(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaS(u)
for(u=J.a7(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$io:1}
P.M.prototype={$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$imz:1}
P.d5.prototype={$id5:1}
P.di.prototype={$idi:1}
P.dI.prototype={$idI:1}
P.dM.prototype={$idM:1}
P.bV.prototype={
bz:function(a,b){return a.activeTexture(b)},
ee:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
bf:function(a,b,c){return a.bindFramebuffer(b,c)},
ef:function(a,b,c){return a.bindRenderbuffer(b,c)},
a7:function(a,b,c){return a.bindTexture(b,c)},
k0:function(a,b,c){return a.blendFunc(b,c)},
ei:function(a,b,c,d){return a.bufferData(b,c,d)},
el:function(a,b){return a.clear(b)},
em:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
en:function(a,b){return a.clearDepth(b)},
k7:function(a,b){return a.compileShader(b)},
kc:function(a,b){return a.createShader(b)},
ke:function(a,b){return a.deleteProgram(b)},
kf:function(a,b){return a.deleteShader(b)},
es:function(a,b){return a.depthFunc(b)},
ki:function(a,b){return a.disable(b)},
eu:function(a,b){return a.disableVertexAttribArray(b)},
kj:function(a,b,c,d,e){return a.drawElements(b,c,H.a5(d),H.a5(e))},
bj:function(a,b){return a.enable(b)},
ex:function(a,b){return a.enableVertexAttribArray(b)},
kx:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
ky:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
fq:function(a,b){return a.generateMipmap(b)},
fs:function(a,b,c){return a.getActiveAttrib(b,c)},
ft:function(a,b,c){return a.getActiveUniform(b,c)},
fu:function(a,b,c){return a.getAttribLocation(b,c)},
c2:function(a,b){return a.getParameter(b)},
fz:function(a,b){return a.getProgramInfoLog(b)},
c3:function(a,b,c){return a.getProgramParameter(b,c)},
fA:function(a,b){return a.getShaderInfoLog(b)},
fB:function(a,b,c){return a.getShaderParameter(b,c)},
fC:function(a,b,c){return a.getUniformLocation(b,c)},
kF:function(a,b){return a.linkProgram(b)},
fb:function(a,b,c){return a.pixelStorei(b,c)},
l5:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fL:function(a,b,c){return a.shaderSource(b,c)},
fh:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.jf(a,b,c,d,e,f,g,h,i,j)
return}t=J.O(g)
if(!!t.$ib4&&h==null&&u&&!0){this.jg(a,b,c,d,e,f,P.nj(g))
return}if(!!t.$ibK&&h==null&&u&&!0){this.jh(a,b,c,d,e,f,g)
return}throw H.c(P.d3("Incorrect number or type of arguments"))},
fg:function(a,b,c,d,e,f,g){return this.fh(a,b,c,d,e,f,g,null,null,null)},
jf:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
jg:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jh:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ai:function(a,b,c,d){return a.texParameteri(b,c,d)},
M:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bZ:function(a,b){return a.useProgram(b)},
li:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fp:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibV:1}
P.dN.prototype={$idN:1}
P.dW.prototype={$idW:1}
P.e4.prototype={$ie4:1}
O.Y.prototype={
bv:function(a){this.shK(H.b([],[a]))
this.sdY(null)
this.sdU(null)
this.sdZ(null)},
dr:function(a,b,c){var u=H.a9(this,"Y",0)
H.k(b,{func:1,ret:P.L,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.m,[P.l,u]]}
H.k(a,u)
H.k(c,u)
this.sdY(b)
this.sdU(a)
this.sdZ(c)},
b6:function(a,b){return this.dr(a,null,b)},
dX:function(a){var u
H.i(a,"$il",[H.a9(this,"Y",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
du:function(a,b){var u
H.i(b,"$il",[H.a9(this,"Y",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ao(u,u.length,0,[H.p(u,0)])},
ag:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a9(this,"Y",0)
H.x(b,u)
u=[u]
if(this.dX(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.du(s,H.b([b],u))}},
af:function(a,b){var u,t
H.i(b,"$il",[H.a9(this,"Y",0)],"$al")
if(this.dX(b)){u=this.a
t=u.length
C.a.af(u,b)
this.du(t,b)}},
shK:function(a){this.a=H.i(a,"$ia",[H.a9(this,"Y",0)],"$aa")},
sdY:function(a){this.b=H.k(a,{func:1,ret:P.L,args:[[P.l,H.a9(this,"Y",0)]]})},
sdU:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a9(this,"Y",0)]]})},
sdZ:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a9(this,"Y",0)]]})},
$il:1}
O.cl.prototype={
gm:function(a){return this.a.length},
gt:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
fY:function(a){var u=this.b
if(u!=null)u.G(a)},
aT:function(){return this.fY(null)},
ga4:function(){var u=this.a
if(u.length>0)return C.a.gaE(u)
else return V.bq()},
bV:function(a){var u=this.a
if(a==null)C.a.h(u,V.bq())
else C.a.h(u,a)
this.aT()},
aO:function(){var u=this.a
if(u.length>0){u.pop()
this.aT()}},
sck:function(a){this.a=H.i(a,"$ia",[V.aq],"$aa")}}
E.eJ.prototype={}
E.ak.prototype={
sc6:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gt().S(0,this.gf7())
t=this.c
if(t!=null)t.gt().h(0,this.gf7())
s=new D.H("shape",u,this.c,this,[F.dO])
s.b=!0
this.b1(s)}},
aj:function(a){var u
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.p(u,0)]);u.D();)u.d.aj(a)},
ah:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga4())
u.aT()
a.d9(this.f)
u=a.dy
t=(u&&C.a).gaE(u)
if(t!=null&&this.d!=null)t.dg(a,this)
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.p(u,0)]);u.D();)u.d.ah(a)
a.d8()
a.dx.aO()},
gt:function(){var u=this.z
if(u==null){u=D.E()
this.z=u}return u},
b1:function(a){var u=this.z
if(u!=null)u.G(a)},
am:function(){return this.b1(null)},
f8:function(a){H.d(a,"$iw")
this.e=null
this.b1(a)},
kS:function(){return this.f8(null)},
f6:function(a){this.b1(H.d(a,"$iw"))},
kP:function(){return this.f6(null)},
kO:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$il",[E.ak],"$al")
for(u=b.length,t=this.gf5(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bG()
o.saq(null)
o.sbb(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.saq(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.am()},
kR:function(a,b){var u,t
H.i(b,"$il",[E.ak],"$al")
for(u=b.gU(b),t=this.gf5();u.D();)u.gL().gt().S(0,t)
this.am()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfZ:function(a,b){this.y=H.i(b,"$iY",[E.ak],"$aY")},
$iaW:1}
E.fU.prototype={
fV:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aj(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cl()
t=[V.aq]
u.sck(H.b([],t))
u.b=null
u.gt().h(0,new E.fV(this))
this.cy=u
u=new O.cl()
u.sck(H.b([],t))
u.b=null
u.gt().h(0,new E.fW(this))
this.db=u
u=new O.cl()
u.sck(H.b([],t))
u.b=null
u.gt().h(0,new E.fX(this))
this.dx=u
this.sje(H.b([],[O.br]))
u=this.dy;(u&&C.a).h(u,null)
this.sja(new H.aJ([P.h,A.ct]))},
gl0:function(){var u=this.z
if(u==null){u=this.cy.ga4().v(0,this.db.ga4())
this.z=u}return u},
gfc:function(){var u=this.ch
if(u==null){u=this.gl0().v(0,this.dx.ga4())
this.ch=u}return u},
d9:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaE(u):a;(u&&C.a).h(u,t)},
d8:function(){var u=this.dy
if(u.length>1)u.pop()},
cC:function(a){var u=a.b
if(u.length===0)throw H.c(P.t("May not cache a shader with no name."))
if(this.fr.bB(u))throw H.c(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.p(0,u,a)},
sje:function(a){this.dy=H.i(a,"$ia",[O.br],"$aa")},
sja:function(a){this.fr=H.i(a,"$iJ",[P.h,A.ct],"$aJ")}}
E.fV.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.fW.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.fX.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.e0.prototype={
dz:function(a){H.d(a,"$iw")
this.fe()},
dw:function(){return this.dz(null)},
gkw:function(){var u,t,s
u=Date.now()
t=C.e.ab(P.k3(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
e1:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.A(u)
s=C.f.cY(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.f.cY(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ky(C.y,this.gl7())}},
fe:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hn(this),{func:1,ret:-1,args:[P.ag]})
C.O.hv(u)
C.O.iY(u,W.l3(t,P.ag))}},
l4:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e1()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.k3(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.ah(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.ah(q)
t=H.c6(q)
P.jO("Error: "+H.j(u))
P.jO("Stack: "+H.j(t))
throw H.c(u)}}}
E.hn.prototype={
$1:function(a){var u
H.nE(a)
u=this.a
if(u.ch){u.ch=!1
u.l4()}},
$S:31}
Z.eb.prototype={$inO:1}
Z.d6.prototype={
a2:function(a){var u,t,s
try{t=a.a
C.b.ex(t,this.e)
C.b.li(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ah(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.cI.prototype={$inP:1}
Z.bA.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t
u=this.a
C.b.aA(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a2(a)},
an:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eu(s,u[t].e)
C.b.aA(s,this.a.a,null)},
ah:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aA(t,p,r.b)
C.b.kj(t,q.a,q.b,5123,0)
C.b.aA(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aF(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shF:function(a){this.b=H.i(a,"$ia",[Z.bM],"$aa")},
$inX:1}
Z.bM.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.aN.prototype={
gds:function(a){var u,t
u=this.a
t=(u&$.ay().a)!==0?3:0
if((u&$.bd().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.bb().a)!==0?t+4:t},
jY:function(a){var u,t,s
u=$.ay()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0)if(s===a)return u
return $.lw()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.h])
t=this.a
if((t&$.ay().a)!==0)C.a.h(u,"Pos")
if((t&$.bd().a)!==0)C.a.h(u,"Norm")
if((t&$.bc().a)!==0)C.a.h(u,"Binm")
if((t&$.aO().a)!==0)C.a.h(u,"Txt2D")
if((t&$.be().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.bb().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eM.prototype={}
D.bG.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.k(b,u)
if(this.a==null)this.saq(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.b
t=(u&&C.a).S(u,b)||t}return t},
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
return!0}if(!s)C.a.T(t,new D.f2(u))
t=this.b
if(t!=null)C.a.T(t,new D.f3(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
cR:function(){return this.G(null)},
l8:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.G(t)}}},
aQ:function(){return this.l8(!0,!1)},
saq:function(a){this.a=H.i(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbb:function(a){this.b=H.i(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
D.f2.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.f3.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.w.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d7.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dr.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fm.prototype={
kY:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kU:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
siM:function(a){this.d=H.i(a,"$ikt",[P.m],"$akt")}}
X.dv.prototype={}
X.ft.prototype={
b9:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a3(t.a+s*r,t.b+q*p)
p=this.a.gb0()
n=new X.b7(a,V.b8(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d7:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fD()
if(typeof u!=="number")return u.c0()
this.r=(u&~t)>>>0
return!1},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.b9(a,b))
return!0},
kZ:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cn(new V.Q(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.G(r)
return!0},
ij:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.dv(c,a,this.a.gb0(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.b8()}}
X.av.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.fF.prototype={
cg:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gb0()
s=new X.b7(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.cg(a,b,!0))
return!0},
bm:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fD()
if(typeof u!=="number")return u.c0()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.G(this.cg(a,b,!0))
return!0},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.cg(a,b,!1))
return!0},
l_:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cn(new V.Q(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.G(s)
return!0},
gew:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
gbY:function(){var u=this.c
if(u==null){u=D.E()
this.c=u}return u},
gf4:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u}}
X.cn.prototype={}
X.fR.prototype={}
X.e2.prototype={}
X.hq.prototype={
b9:function(a,b){var u,t,s,r
H.i(a,"$ia",[V.a3],"$aa")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.b8()
s=this.a.gb0()
r=new X.e2(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kX:function(a){var u
H.i(a,"$ia",[V.a3],"$aa")
u=this.b
if(u==null)return!1
u.G(this.b9(a,!0))
return!0},
kV:function(a){var u
H.i(a,"$ia",[V.a3],"$aa")
u=this.c
if(u==null)return!1
u.G(this.b9(a,!0))
return!0},
kW:function(a){var u
H.i(a,"$ia",[V.a3],"$aa")
u=this.d
if(u==null)return!1
u.G(this.b9(a,!1))
return!0}}
X.e7.prototype={
gb0:function(){var u=this.a
return V.kq(0,0,C.q.geo(u).c,C.q.geo(u).d)},
dK:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dr(u,new X.av(t,a.altKey,a.shiftKey))},
aY:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
cB:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a3(t-r,s-q)},
bc:function(a){return new V.Q(a.movementX,a.movementY)},
cv:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a3])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
o=C.f.a5(p.pageX)
C.f.a5(p.pageY)
n=u.left
C.f.a5(p.pageX)
C.a.h(t,new V.a3(o-n,C.f.a5(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.av(t,a.altKey,a.shiftKey))},
cl:function(a){var u,t,s,r,q,p
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
ib:function(a){this.f=!0},
i_:function(a){this.f=!1},
i5:function(a){H.d(a,"$ia0")
if(this.f&&this.cl(a))a.preventDefault()},
ih:function(a){var u
H.d(a,"$iaT")
if(!this.f)return
u=this.dK(a)
this.b.kY(u)},
ie:function(a){var u
H.d(a,"$iaT")
if(!this.f)return
u=this.dK(a)
this.b.kU(u)},
il:function(a){var u,t,s,r
H.d(a,"$ia0")
u=this.a
u.focus()
this.f=!0
this.aY(a)
if(this.x){t=this.aG(a)
s=this.bc(a)
if(this.d.d7(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aI(a)
if(this.c.d7(t,r))a.preventDefault()},
iq:function(a){var u,t,s
H.d(a,"$ia0")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bm(u,s))a.preventDefault()},
i9:function(a){var u,t,s
H.d(a,"$ia0")
if(!this.cl(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bm(u,s))a.preventDefault()}},
io:function(a){var u,t,s
H.d(a,"$ia0")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bl(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bl(u,s))a.preventDefault()},
i7:function(a){var u,t,s
H.d(a,"$ia0")
if(!this.cl(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.bc(a)
if(this.d.bl(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bl(u,s))a.preventDefault()}},
is:function(a){var u,t
H.d(a,"$ib0")
this.aY(a)
u=new V.Q((a&&C.N).gkg(a),C.N.gkh(a)).C(0,180)
if(this.x){if(this.d.kZ(u))a.preventDefault()
return}if(this.r)return
t=this.aI(a)
if(this.c.l_(u,t))a.preventDefault()},
iu:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aI(this.y)
this.d.ij(t,s,u)}},
iK:function(a){var u
H.d(a,"$iaL")
this.a.focus()
this.f=!0
this.cB(a)
u=this.cv(a)
if(this.e.kX(u))a.preventDefault()},
iG:function(a){var u
H.d(a,"$iaL")
this.cB(a)
u=this.cv(a)
if(this.e.kV(u))a.preventDefault()},
iI:function(a){var u
H.d(a,"$iaL")
this.cB(a)
u=this.cv(a)
if(this.e.kW(u))a.preventDefault()},
shw:function(a){this.z=H.i(a,"$ia",[[P.cv,P.K]],"$aa")}}
D.bj.prototype={
gt:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u},
aF:function(a){var u
H.d(a,"$iw")
u=this.d
if(u!=null)u.G(a)},
h2:function(){return this.aF(null)},
$ia2:1,
$iaW:1}
D.a2.prototype={$iaW:1}
D.ds.prototype={
gt:function(){var u=this.Q
if(u==null){u=D.E()
this.Q=u}return u},
aF:function(a){var u=this.Q
if(u!=null)u.G(a)},
dW:function(a){var u
H.d(a,"$iw")
u=this.ch
if(u!=null)u.G(a)},
ii:function(){return this.dW(null)},
iw:function(a){var u,t,s
H.i(a,"$il",[D.a2],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.h0(s))return!1}return!0},
hU:function(a,b){var u,t,s,r,q,p,o,n
u=D.a2
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gdV(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=H.d(b[p],"$ia2")
if(o instanceof D.bj)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bG()
n.saq(null)
n.sbb(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.saq(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bm(a,b,this,[u])
u.b=!0
this.aF(u)},
iA:function(a,b){var u,t,s,r
u=D.a2
H.i(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.gdV();t.D();){r=t.gL()
C.a.S(this.e,r)
r.gt().S(0,s)}u=new D.bn(a,b,this,[u])
u.b=!0
this.aF(u)},
h0:function(a){var u=C.a.Z(this.e,a)
return u},
sht:function(a){this.e=H.i(a,"$ia",[D.bj],"$aa")},
siL:function(a){this.f=H.i(a,"$ia",[D.dH],"$aa")},
sjc:function(a){this.r=H.i(a,"$ia",[D.dR],"$aa")},
sjq:function(a){this.x=H.i(a,"$ia",[D.dY],"$aa")},
sjr:function(a){this.y=H.i(a,"$ia",[D.dZ],"$aa")},
sjs:function(a){this.z=H.i(a,"$ia",[D.e_],"$aa")},
$al:function(){return[D.a2]},
$aY:function(){return[D.a2]}}
D.dH.prototype={$ia2:1,$iaW:1}
D.dR.prototype={$ia2:1,$iaW:1}
D.dY.prototype={$ia2:1,$iaW:1}
D.dZ.prototype={$ia2:1,$iaW:1}
D.e_.prototype={$ia2:1,$iaW:1}
V.Z.prototype={
q:function(a,b){var u,t,s
u=C.f.q(this.a,b.gdd())
t=C.f.q(this.b,b.gc4())
s=C.f.q(this.c,b.gcH())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Z(u,t,s)},
u:function(a,b){var u,t,s
u=C.f.u(this.a,b.gdd())
t=C.f.u(this.b,b.gc4())
s=C.f.u(this.c,b.gcH())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Z(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ap.prototype={
q:function(a,b){var u,t,s,r
u=C.f.q(this.a,b.gdd())
t=C.f.q(this.b,b.gc4())
s=C.f.q(this.c,b.gcH())
r=C.f.q(this.d,b.gjX(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ap(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.f.u(this.a,b.gdd())
t=C.f.u(this.b,b.gc4())
s=C.f.u(this.c,b.gcH())
r=C.f.u(this.d,b.gjX(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ap(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.f0.prototype={}
V.ck.prototype={
a8:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ck))return!1
u=b.a
t=$.P().a
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
u=[P.y]
t=V.c3(H.b([this.a,this.d,this.r],u),3,0)
s=V.c3(H.b([this.b,this.e,this.x],u),3,0)
r=V.c3(H.b([this.c,this.f,this.y],u),3,0)
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
V.aq.prototype={
a8:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return u},
d2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.P().a)return V.bq()
a8=1/a7
a9=-r
b0=-d
return V.aV((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aV(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dj:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.N(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
br:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a1(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.X()},
eU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.y]
t=V.c3(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c3(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c3(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c3(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
X:function(){return this.eU("",3,0)},
J:function(a){return this.eU(a,3,0)}}
V.a3.prototype={
q:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.a1.prototype={
q:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.aX.prototype={
q:function(a,b){return new V.aX(C.e.q(this.a,b.glk(b)),C.e.q(this.b,b.gll(b)),C.e.q(this.c,b.glm(b)),C.e.q(this.d,b.glj()))},
u:function(a,b){return new V.aX(C.e.u(this.a,b.glk(b)),C.e.u(this.b,b.gll(b)),C.e.u(this.c,b.glm(b)),C.e.u(this.d,b.glj()))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.dL.prototype={
gal:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.Q.prototype={
d3:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.A(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.A(r)
return u*t+s*r},
q:function(a,b){var u,t,s
u=this.a
t=b.gkl(b)
if(typeof u!=="number")return u.q()
t=C.f.q(u,t)
u=this.b
s=b.gkm(b)
if(typeof u!=="number")return u.q()
return new V.Q(t,C.f.q(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gkl(b)
if(typeof u!=="number")return u.u()
t=C.f.u(u,t)
u=this.b
s=b.gkm(b)
if(typeof u!=="number")return u.u()
return new V.Q(t,C.f.u(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.Q(u*b,t*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.kF
if(u==null){u=new V.Q(0,0)
$.kF=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.Q(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.P()
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.N.prototype={
d3:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aK:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.N(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.P().a)return V.cH()
return new V.N(this.a/b,this.b/b,this.c/b)},
f2:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.eN.prototype={
cc:function(a){var u=V.nN(a,this.c,this.b)
return u},
gt:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u},
R:function(a){var u=this.y
if(u!=null)u.G(a)},
sdl:function(a,b){},
sd4:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.P().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cc(t)}u=new D.H("maximumLocation",u,this.b,this,[P.y])
u.b=!0
this.R(u)}},
sd6:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cc(t)}u=new D.H("minimumLocation",u,this.c,this,[P.y])
u.b=!0
this.R(u)}},
sak:function(a,b){var u
b=this.cc(b)
u=this.d
if(!(Math.abs(u-b)<$.P().a)){this.d=b
u=new D.H("location",u,b,this,[P.y])
u.b=!0
this.R(u)}},
sd5:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.H("maximumVelocity",u,a,this,[P.y])
u.b=!0
this.R(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.H("velocity",u,a,this,[P.y])
u.b=!0
this.R(u)}},
scO:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.H("dampening",u,a,this,[P.y])
u.b=!0
this.R(u)}},
aj:function(a){var u,t,s,r,q
u=this.f
t=$.P().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sak(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.P().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.d9.prototype={
gt:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
b4:function(a,b){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.ci.prototype={
gt:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
R:function(a){var u
H.d(a,"$iw")
u=this.e
if(u!=null)u.G(a)},
ad:function(){return this.R(null)},
hS:function(a,b){var u,t,s,r,q,p,o,n
u=U.ac
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gaW(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.k(s,r)
if(n.a==null)n.saq(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bm(a,b,this,[u])
u.b=!0
this.R(u)},
iy:function(a,b){var u,t,s
u=U.ac
H.i(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.gaW();t.D();)t.gL().gt().S(0,s)
u=new D.bn(a,b,this,[u])
u.b=!0
this.R(u)},
b4:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ao(u,u.length,0,[H.p(u,0)]),s=null;u.D();){t=u.d
if(t!=null){r=t.b4(a,b)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bq():s
u=this.e
if(u!=null)u.aQ()}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ci))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.R(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.ac]},
$aY:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.e8.prototype={
gt:function(){var u=this.cy
if(u==null){u=D.E()
this.cy=u}return u},
R:function(a){var u
H.d(a,"$iw")
u=this.cy
if(u!=null)u.G(a)},
ad:function(){return this.R(null)},
be:function(a){if(this.a!=null)return!1
this.a=a
a.c.gew().h(0,this.gcm())
this.a.c.gf4().h(0,this.gco())
this.a.c.gbY().h(0,this.gcq())
return!0},
cn:function(a){H.d(a,"$iw")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$iw"),"$ib7")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.Q(u.a,u.b)
u=u.F(u)
t=this.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.Q(t.a,t.b).v(0,2).C(0,u.gal())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.A(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.Q(s.a,s.b).v(0,2).C(0,u.gal())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.A(p)
o=this.z
if(typeof o!=="number")return H.A(o)
s.sak(0,-q*p+o)
this.b.sY(0)
t=t.u(0,a.z)
this.Q=new V.Q(t.a,t.b).v(0,2).C(0,u.gal())}this.ad()},
cr:function(a){var u,t,s
H.d(a,"$iw")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.F(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.A(s)
u.sY(t*10*s)
this.ad()}},
b4:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.ch=t
s=a.y
this.b.aj(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aV(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iac:1}
U.e9.prototype={
gt:function(){var u=this.fx
if(u==null){u=D.E()
this.fx=u}return u},
R:function(a){var u
H.d(a,"$iw")
u=this.fx
if(u!=null)u.G(a)},
ad:function(){return this.R(null)},
be:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gew().h(0,this.gcm())
this.a.c.gf4().h(0,this.gco())
this.a.c.gbY().h(0,this.gcq())
u=this.a.d
t=u.f
if(t==null){t=D.E()
u.f=t
u=t}else u=t
u.h(0,this.ghL())
u=this.a.d
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.ghN())
u=this.a.e
t=u.b
if(t==null){t=D.E()
u.b=t
u=t}else u=t
u.h(0,this.gjn())
u=this.a.e
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gjl())
u=this.a.e
t=u.c
if(t==null){t=D.E()
u.c=t
u=t}else u=t
u.h(0,this.gjj())
return!0},
ay:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.Q(u,t)},
cn:function(a){a=H.f(H.d(a,"$iw"),"$ib7")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$iw"),"$ib7")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.Q(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.ay(new V.Q(t.a,t.b).v(0,2).C(0,u.gal()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ay(new V.Q(s.a,s.b).v(0,2).C(0,u.gal()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sak(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sak(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.ay(new V.Q(t.a,t.b).v(0,2).C(0,u.gal()))}this.ad()},
cr:function(a){var u,t,s
H.d(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sY(-t*10*u)
this.ad()}},
hM:function(a){if(H.f(H.d(a,"$iw"),"$idv").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hO:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$iw"),"$ib7")
if(!J.R(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ay(new V.Q(s.a,s.b).v(0,2).C(0,u.gal()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sak(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sak(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.ay(new V.Q(t.a,t.b).v(0,2).C(0,u.gal()))
this.ad()},
jo:function(a){H.d(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jm:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$iw"),"$ie2")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.Q(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.ay(new V.Q(t.a,t.b).v(0,2).C(0,u.gal()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ay(new V.Q(s.a,s.b).v(0,2).C(0,u.gal()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sak(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sak(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.ay(new V.Q(t.a,t.b).v(0,2).C(0,u.gal()))}this.ad()},
jk:function(a){var u,t,s
H.d(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sY(-t*10*u)
this.ad()}},
b4:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.dy=t
s=a.y
this.c.aj(s)
this.b.aj(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aV(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aV(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iac:1}
U.ea.prototype={
gt:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
R:function(a){var u=this.r
if(u!=null)u.G(a)},
be:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.E()
u.e=t
u=t}else u=t
t=this.ghP()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.E()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hQ:function(a){var u,t,s,r
H.d(a,"$iw")
if(!J.R(this.b,this.a.b.c))return
H.f(a,"$icn")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.H("zoom",u,r,this,[P.y])
u.b=!0
this.R(u)}},
b4:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.kg(s,s,s,1)}return this.f},
$iac:1}
M.d8.prototype={
gt:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
a1:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.G(a)},
b7:function(){return this.a1(null)},
iC:function(a,b){var u,t,s,r,q,p,o,n
u=M.ax
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.ga0(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.k(s,r)
if(n.a==null)n.saq(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bm(a,b,this,[u])
u.b=!0
this.a1(u)},
iE:function(a,b){var u,t,s
u=M.ax
H.i(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ga0();t.D();)t.gL().gt().S(0,s)
u=new D.bn(a,b,this,[u])
u.b=!0
this.a1(u)},
ah:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ao(u,u.length,0,[H.p(u,0)]);u.D();){t=u.d
if(t!=null)t.ah(a)}this.e=!1},
$al:function(){return[M.ax]},
$aY:function(){return[M.ax]},
$iax:1}
M.da.prototype={
gt:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
a1:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.G(a)},
b7:function(){return this.a1(null)},
sbg:function(a){var u,t
if(a==null)a=new X.ff()
u=this.a
if(u!==a){if(u!=null)u.gt().S(0,this.ga0())
t=this.a
this.a=a
a.gt().h(0,this.ga0())
u=new D.H("camera",t,this.a,this,[X.bB])
u.b=!0
this.a1(u)}},
sbo:function(a,b){var u,t
if(b==null)b=X.k7(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gt().S(0,this.ga0())
t=this.b
this.b=b
b.gt().h(0,this.ga0())
u=new D.H("target",t,this.b,this,[X.cw])
u.b=!0
this.a1(u)}},
sb3:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().S(0,this.ga0())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga0())
u=new D.H("technique",t,this.c,this,[O.br])
u.b=!0
this.a1(u)}},
ah:function(a){var u
a.d9(this.c)
this.b.a2(a)
this.a.a2(a)
u=this.c
if(u!=null)u.aj(a)
this.d.aj(a)
this.d.ah(a)
this.a.an(a)
this.b.an(a)
a.d8()},
$iax:1}
M.df.prototype={
a1:function(a){var u
H.d(a,"$iw")
u=this.x
if(u!=null)u.G(a)},
b7:function(){return this.a1(null)},
i1:function(a,b){var u,t,s,r,q,p,o,n
u=E.ak
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.ga0(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bG()
n.saq(null)
n.sbb(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.saq(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bm(a,b,this,[u])
u.b=!0
this.a1(u)},
i3:function(a,b){var u,t,s
u=E.ak
H.i(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ga0();t.D();)t.gL().gt().S(0,s)
u=new D.bn(a,b,this,[u])
u.b=!0
this.a1(u)},
sbg:function(a){var u,t
if(a==null)a=X.kk(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gt().S(0,this.ga0())
t=this.a
this.a=a
a.gt().h(0,this.ga0())
u=new D.H("camera",t,this.a,this,[X.bB])
u.b=!0
this.a1(u)}},
sbo:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gt().S(0,this.ga0())
t=this.b
this.b=b
b.gt().h(0,this.ga0())
u=new D.H("target",t,this.b,this,[X.cw])
u.b=!0
this.a1(u)}},
sb3:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().S(0,this.ga0())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga0())
u=new D.H("technique",t,this.c,this,[O.br])
u.b=!0
this.a1(u)}},
gt:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
ah:function(a){var u
a.d9(this.c)
this.b.a2(a)
this.a.a2(a)
u=this.c
if(u!=null)u.aj(a)
for(u=this.d.a,u=new J.ao(u,u.length,0,[H.p(u,0)]);u.D();)u.d.aj(a)
for(u=this.d.a,u=new J.ao(u,u.length,0,[H.p(u,0)]);u.D();)u.d.ah(a)
this.a.toString
a.cy.aO()
a.db.aO()
this.b.an(a)
a.d8()},
shn:function(a,b){this.d=H.i(b,"$iY",[E.ak],"$aY")},
$iax:1}
M.ax.prototype={}
A.d4.prototype={}
A.eF.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kn:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.ex(r.a,r.c)}},
cQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.eu(r.a,r.c)}}}
A.dc.prototype={
ae:function(a,b,c){if(c==null||!c.d)C.b.N(b.a,b.d,1)
else{a.fJ(c)
C.b.N(b.a,b.d,0)}}}
A.dy.prototype={
fU:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ad("")
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
a6.jw(u)
a6.jD(u)
a6.jx(u)
a6.jL(u)
a6.jM(u)
a6.jF(u)
a6.jQ(u)
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
u=new P.ad("")
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
q.jA(u)
q.jv(u)
q.jy(u)
q.jB(u)
q.jJ(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jH(u)
q.jI(u)}q.jE(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.b([],[P.h])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jz(u)
q.jG(u)
q.jK(u)
q.jN(u)
q.jO(u)
q.jP(u)
q.jC(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.h])
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
this.d_(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.f(this.y.n(0,"invViewMat"),"$iae")
if(t)this.dy=H.f(this.y.n(0,"objMat"),"$iae")
if(r)this.fr=H.f(this.y.n(0,"viewObjMat"),"$iae")
this.fy=H.f(this.y.n(0,"projViewObjMat"),"$iae")
if(a6.x2)this.k1=H.f(this.y.n(0,"txt2DMat"),"$ibu")
if(a6.y1)this.k2=H.f(this.y.n(0,"txtCubeMat"),"$iae")
if(a6.y2)this.k3=H.f(this.y.n(0,"colorMat"),"$iae")
this.shj(H.b([],[A.ae]))
t=a6.aC
if(t>0){this.k4=H.d(this.y.n(0,"bendMatCount"),"$iF")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.q(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(g,"$iae"))}}t=a6.a
if(t!==C.d){this.r2=H.f(this.y.n(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.f(this.y.n(0,"emissionTxt"),"$iaa")
this.x1=H.f(this.y.n(0,"nullEmissionTxt"),"$iF")
break
case C.i:this.ry=H.f(this.y.n(0,"emissionTxt"),"$iaf")
this.x1=H.f(this.y.n(0,"nullEmissionTxt"),"$iF")
break}}t=a6.b
if(t!==C.d){this.x2=H.f(this.y.n(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.f(this.y.n(0,"ambientTxt"),"$iaa")
this.aC=H.f(this.y.n(0,"nullAmbientTxt"),"$iF")
break
case C.i:this.y2=H.f(this.y.n(0,"ambientTxt"),"$iaf")
this.aC=H.f(this.y.n(0,"nullAmbientTxt"),"$iF")
break}}t=a6.c
if(t!==C.d){this.av=H.f(this.y.n(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.bD=H.f(this.y.n(0,"diffuseTxt"),"$iaa")
this.bE=H.f(this.y.n(0,"nullDiffuseTxt"),"$iF")
break
case C.i:this.ey=H.f(this.y.n(0,"diffuseTxt"),"$iaf")
this.bE=H.f(this.y.n(0,"nullDiffuseTxt"),"$iF")
break}}t=a6.d
if(t!==C.d){this.bF=H.f(this.y.n(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.ez=H.f(this.y.n(0,"invDiffuseTxt"),"$iaa")
this.bG=H.f(this.y.n(0,"nullInvDiffuseTxt"),"$iF")
break
case C.i:this.eA=H.f(this.y.n(0,"invDiffuseTxt"),"$iaf")
this.bG=H.f(this.y.n(0,"nullInvDiffuseTxt"),"$iF")
break}}t=a6.e
if(t!==C.d){this.bJ=H.f(this.y.n(0,"shininess"),"$iV")
this.bH=H.f(this.y.n(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eB=H.f(this.y.n(0,"specularTxt"),"$iaa")
this.bI=H.f(this.y.n(0,"nullSpecularTxt"),"$iF")
break
case C.i:this.eC=H.f(this.y.n(0,"specularTxt"),"$iaf")
this.bI=H.f(this.y.n(0,"nullSpecularTxt"),"$iF")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.h:this.eD=H.f(this.y.n(0,"bumpTxt"),"$iaa")
this.bK=H.f(this.y.n(0,"nullBumpTxt"),"$iF")
break
case C.i:this.eE=H.f(this.y.n(0,"bumpTxt"),"$iaf")
this.bK=H.f(this.y.n(0,"nullBumpTxt"),"$iF")
break}if(a6.dy){this.eF=H.f(this.y.n(0,"envSampler"),"$iaf")
this.eG=H.f(this.y.n(0,"nullEnvTxt"),"$iF")
t=a6.r
if(t!==C.d){this.bL=H.f(this.y.n(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eH=H.f(this.y.n(0,"reflectTxt"),"$iaa")
this.bM=H.f(this.y.n(0,"nullReflectTxt"),"$iF")
break
case C.i:this.eI=H.f(this.y.n(0,"reflectTxt"),"$iaf")
this.bM=H.f(this.y.n(0,"nullReflectTxt"),"$iF")
break}}t=a6.x
if(t!==C.d){this.bN=H.f(this.y.n(0,"refraction"),"$iV")
this.bO=H.f(this.y.n(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eJ=H.f(this.y.n(0,"refractTxt"),"$iaa")
this.bP=H.f(this.y.n(0,"nullRefractTxt"),"$iF")
break
case C.i:this.eK=H.f(this.y.n(0,"refractTxt"),"$iaf")
this.bP=H.f(this.y.n(0,"nullRefractTxt"),"$iF")
break}}}t=a6.y
if(t!==C.d){this.bQ=H.f(this.y.n(0,"alpha"),"$iV")
switch(t){case C.d:break
case C.j:break
case C.h:this.eL=H.f(this.y.n(0,"alphaTxt"),"$iaa")
this.bR=H.f(this.y.n(0,"nullAlphaTxt"),"$iF")
break
case C.i:this.eM=H.f(this.y.n(0,"alphaTxt"),"$iaf")
this.bR=H.f(this.y.n(0,"nullAlphaTxt"),"$iF")
break}}this.sh3(H.b([],[A.cA]))
this.sh4(H.b([],[A.cB]))
this.sh5(H.b([],[A.cC]))
this.sh6(H.b([],[A.cD]))
this.sh7(H.b([],[A.cE]))
this.sh8(H.b([],[A.cF]))
if(a6.k2){t=a6.z
if(t>0){this.eN=H.d(this.y.n(0,"dirLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iG")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iG")
s=this.cS;(s&&C.a).h(s,new A.cA(h,g,f))}}t=a6.Q
if(t>0){this.eO=H.d(this.y.n(0,"pntLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iG")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iG")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iG")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iV")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iV")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iV")
s=this.cT;(s&&C.a).h(s,new A.cB(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eP=H.d(this.y.n(0,"spotLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iG")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iG")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iG")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iG")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iV")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iV")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iV")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iV")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iV")
s=this.cU;(s&&C.a).h(s,new A.cC(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eQ=H.d(this.y.n(0,"txtDirLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iG")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iG")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iG")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iG")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iG")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iF")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iaa")
s=this.cV;(s&&C.a).h(s,new A.cD(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eR=H.d(this.y.n(0,"txtPntLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iG")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iG")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$ibu")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iG")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iF")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iV")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iV")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iV")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iaf")
s=this.cW;(s&&C.a).h(s,new A.cE(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eS=H.d(this.y.n(0,"txtSpotLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iG")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iG")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iG")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iG")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iG")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iF")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iG")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iV")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iV")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iV")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iV")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iV")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iaa")
s=this.cX;(s&&C.a).h(s,new A.cF(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ae:function(a,b,c){C.b.N(b.a,b.d,1)},
ar:function(a,b,c){C.b.N(b.a,b.d,1)},
shj:function(a){this.r1=H.i(a,"$ia",[A.ae],"$aa")},
sh3:function(a){this.cS=H.i(a,"$ia",[A.cA],"$aa")},
sh4:function(a){this.cT=H.i(a,"$ia",[A.cB],"$aa")},
sh5:function(a){this.cU=H.i(a,"$ia",[A.cC],"$aa")},
sh6:function(a){this.cV=H.i(a,"$ia",[A.cD],"$aa")},
sh7:function(a){this.cW=H.i(a,"$ia",[A.cE],"$aa")},
sh8:function(a){this.cX=H.i(a,"$ia",[A.cF],"$aa")}}
A.fC.prototype={
jw:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aC+"];\n"
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
jD:function(a){var u
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
jx:function(a){var u
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
jL:function(a){var u,t
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
jM:function(a){var u,t
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
jF:function(a){var u
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
jQ:function(a){var u
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
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ax(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jA:function(a){var u,t
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
jv:function(a){var u,t
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
jy:function(a){var u,t
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
jB:function(a){var u,t
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
jJ:function(a){var u,t
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
jE:function(a){var u,t
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
jH:function(a){var u,t
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
jI:function(a){var u,t
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
jz:function(a){var u,t
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
jG:function(a){var u,t
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
jK:function(a){var u,t
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
jN:function(a){var u,t,s
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
jO:function(a){var u,t,s
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
jP:function(a){var u,t,s
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
jC:function(a){var u
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
i:function(a){return this.av}}
A.cA.prototype={}
A.cD.prototype={}
A.cB.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.ct.prototype={
c9:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d_:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dL(a,35633)
this.f=this.dL(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.ee(u,t,this.e)
C.b.ee(u,this.r,this.f)
C.b.kF(u,this.r)
if(!H.jH(C.b.c3(u,this.r,35714))){s=C.b.fz(u,this.r)
C.b.ke(u,this.r)
H.q(P.t("Failed to link shader: "+H.j(s)))}this.j7()
this.j9()},
a2:function(a){C.b.bZ(a.a,this.r)
this.x.kn()},
dL:function(a,b){var u,t,s
u=this.a
t=C.b.kc(u,b)
C.b.fL(u,t,a)
C.b.k7(u,t)
if(!H.jH(C.b.fB(u,t,35713))){s=C.b.fA(u,t)
C.b.kf(u,t)
throw H.c(P.t("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
j7:function(){var u,t,s,r,q,p
u=H.b([],[A.d4])
t=this.a
s=H.a5(C.b.c3(t,this.r,35721))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.fs(t,this.r,r)
p=C.b.fu(t,this.r,q.name)
C.a.h(u,new A.d4(t,q.name,p))}this.x=new A.eF(u)},
j9:function(){var u,t,s,r,q,p
u=H.b([],[A.e3])
t=this.a
s=H.a5(C.b.c3(t,this.r,35718))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.ft(t,this.r,r)
p=C.b.fC(t,this.r,q.name)
C.a.h(u,this.kd(q.type,q.size,q.name,p))}this.y=new A.hC(u)},
aU:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.F(u,t,b,c)
else return A.jw(u,t,b,a,c)},
hq:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aa(u,t,b,c)
else return A.jw(u,t,b,a,c)},
hr:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.af(u,t,b,c)
else return A.jw(u,t,b,a,c)},
by:function(a,b){return new P.ef(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
kd:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.V(this.a,this.r,c,d)
case 35664:return new A.hx(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.hA(this.a,this.r,c,d)
case 35667:return new A.hy(this.a,this.r,c,d)
case 35668:return new A.hz(this.a,this.r,c,d)
case 35669:return new A.hB(this.a,this.r,c,d)
case 35674:return new A.hD(this.a,this.r,c,d)
case 35675:return new A.bu(this.a,this.r,c,d)
case 35676:return new A.ae(this.a,this.r,c,d)
case 35678:return this.hq(b,c,d)
case 35680:return this.hr(b,c,d)
case 35670:throw H.c(this.by("BOOL",c))
case 35671:throw H.c(this.by("BOOL_VEC2",c))
case 35672:throw H.c(this.by("BOOL_VEC3",c))
case 35673:throw H.c(this.by("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bF.prototype={
i:function(a){return this.b}}
A.dQ.prototype={}
A.e3.prototype={}
A.hC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.X()},
kv:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+a
return s},
X:function(){return this.kv("\n")}}
A.F.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sjt:function(a){this.e=H.i(a,"$ia",[P.m],"$aa")}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.bu.prototype={
a9:function(a){var u=new Float32Array(H.bZ(H.i(a,"$ia",[P.y],"$aa")))
C.b.fl(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ae.prototype={
a9:function(a){var u=new Float32Array(H.bZ(H.i(a,"$ia",[P.y],"$aa")))
C.b.fm(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.aa.prototype={
fJ:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.af.prototype={
fK:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.je.prototype={
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)},
$S:44}
F.j2.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jT(t.$1(u),s)
s=J.lC(J.jT(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.N(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.F(s)))
t=$.kH
if(t==null){t=new V.N(1,0,0)
$.kH=t
p=t}else p=t
t=q.aK(!J.R(q,p)?V.kL():p)
o=t.C(0,Math.sqrt(t.F(t)))
t=o.aK(q)
p=t.C(0,Math.sqrt(t.F(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
s=J.lB(r,new V.a1(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.R(a.f,s)){a.f=H.d(s,"$ia1")
t=a.a
if(t!=null)t.am()}},
$S:45}
F.a6.prototype={
bi:function(){if(!this.gev()){C.a.S(this.a.a.d.b,this)
this.a.a.am()}this.iS()
this.iT()
this.iU()},
j4:function(a){this.a=a
C.a.h(a.d.b,this)},
j5:function(a){this.b=a
C.a.h(a.d.c,this)},
j6:function(a){this.c=a
C.a.h(a.d.d,this)},
iS:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
iT:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
iU:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
gev:function(){return this.a==null||this.b==null||this.c==null},
hi:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cH()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.f2())return
return q.C(0,Math.sqrt(q.F(q)))},
hm:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.N(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.F(u)))
u=r.u(0,t)
u=new V.N(u.a,u.b,u.c)
u=q.aK(u.C(0,Math.sqrt(u.F(u))))
return u.C(0,Math.sqrt(u.F(u)))},
cL:function(){if(this.d!=null)return!0
var u=this.hi()
if(u==null){u=this.hm()
if(u==null)return!1}this.d=u
this.a.a.am()
return!0},
hh:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cH()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.f2())return
return q.C(0,Math.sqrt(q.F(q)))},
hl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.P().a){u=m.u(0,p)
u=new V.N(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.F(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.u(0,p).v(0,g).q(0,p).u(0,s)
u=new V.N(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.F(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.F(u)))
u=f.aK(h)
u=u.C(0,Math.sqrt(u.F(u))).aK(f)
h=u.C(0,Math.sqrt(u.F(u)))}return h},
cJ:function(){if(this.e!=null)return!0
var u=this.hh()
if(u==null){u=this.hl()
if(u==null)return!1}this.e=u
this.a.a.am()
return!0},
gk6:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.X()},
J:function(a){var u,t
if(this.gev())return a+"disposed"
u=a+C.c.aN(J.aF(this.a.e),0)+", "+C.c.aN(J.aF(this.b.e),0)+", "+C.c.aN(J.aF(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
X:function(){return this.J("")}}
F.f4.prototype={}
F.h7.prototype={
bk:function(a,b,c){var u,t
u=b.a
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bp.prototype={}
F.fn.prototype={}
F.hv.prototype={
bk:function(a,b,c){var u,t
u=b.a
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
return u==t.e}else{u=b.a
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
return u==t.e}else return!1}}}
F.bQ.prototype={}
F.dO.prototype={
gt:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
aJ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aJ()||!1
if(!this.a.aJ())t=!1
u=this.e
if(u!=null)u.aQ()
return t},
kL:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.p(u,0)])
for(u=[F.al];t.length!==0;){s=C.a.gkr(t)
C.a.l2(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.B)(t),++p){o=t[p]
if(o!=null&&a.bk(0,s,o)){C.a.h(r,o)
C.a.S(t,o)}}if(r.length>1)b.kK(r)}}this.a.I()
this.c.de()
this.d.de()
this.b.l3()
this.c.df(new F.hv())
this.d.df(new F.h7())
u=this.e
if(u!=null)u.aQ()},
cI:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.ay()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bd().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.aO().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.c9().a)!==0)++r
if((s&$.bb().a)!==0)++r
q=a1.gds(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.y
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d6])
for(m=0,l=0;l<r;++l){k=a1.jY(l)
j=k.gds(k)
C.a.p(n,l,new Z.d6(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kG(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.p(o,g,h[f]);++g}}m+=j}H.i(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aA(t,34962,e)
C.b.ei(t,34962,new Float32Array(H.bZ(o)),35044)
C.b.aA(t,34962,null)
d=new Z.bA(new Z.eb(34962,e),n,a1)
d.shF(H.b([],[Z.bM]))
this.b.b
if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)}a=Z.kM(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bM(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.I()
C.a.h(c,b.e)}a=Z.kM(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bM(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.h])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.J("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.J("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.J("   "))}return C.a.l(u,"\n")},
b1:function(a){var u=this.e
if(u!=null)u.G(a)},
am:function(){return this.b1(null)},
$inV:1}
F.h0.prototype={
jS:function(a){var u,t,s,r,q,p
H.i(a,"$ia",[F.al],"$aa")
u=H.b([],[F.a6])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dg(t,q,p))}return u},
jT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ia",[F.al],"$aa")
u=H.b([],[F.a6])
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
df:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bk(0,p,n)){p.bi()
break}}}}},
de:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gk6(s)
if(t)s.bi()}},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].cL())s=!1
return s},
cK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].cJ())s=!1
return s},
i:function(a){return this.X()},
J:function(a){var u,t,s,r
u=H.b([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
X:function(){return this.J("")},
shx:function(a){this.b=H.i(a,"$ia",[F.a6],"$aa")}}
F.h1.prototype={
gm:function(a){return this.b.length},
df:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bk(0,p,n)){p.bi()
break}}}}},
de:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.R(s.a,s.b)
if(t)s.bi()}},
i:function(a){return this.X()},
J:function(a){var u,t,s,r
u=H.b([],[P.h])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].J(a+(""+s+". ")))}return C.a.l(u,"\n")},
X:function(){return this.J("")},
shH:function(a){this.b=H.i(a,"$ia",[F.bp],"$aa")}}
F.h2.prototype={
gm:function(a){return 0},
l3:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
t=t[u].glw()
t=t.glt(t)
if(t.gm(t).dn(0,1)){t=this.b
return H.e(t,u)
t[u].bi()}}},
i:function(a){return this.X()},
J:function(a){var u,t,s
u=H.b([],[P.h])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.h(u,t[s].J(a))}return C.a.l(u,"\n")},
X:function(){return this.J("")},
scu:function(a){this.b=H.i(a,"$ia",[F.bQ],"$aa")}}
F.al.prototype={
eq:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hR(this.cx,s,p,u,t,r,q,a,o)},
kG:function(a){var u,t
if(a.B(0,$.ay())){u=this.f
t=[P.y]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bd())){u=this.r
t=[P.y]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bc())){u=this.x
t=[P.y]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.aO())){u=this.y
t=[P.y]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.B(0,$.be())){u=this.z
t=[P.y]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.cZ())){u=this.Q
t=[P.y]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.d_())){u=this.Q
t=[P.y]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.B(0,$.c9()))return H.b([this.ch],[P.y])
else if(a.B(0,$.bb())){u=this.cx
t=[P.y]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.y])},
cL:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cH()
this.d.T(0,new F.i1(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.am()
u=this.a.e
if(u!=null)u.aQ()}return!0},
cJ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cH()
this.d.T(0,new F.i0(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.am()
u=this.a.e
if(u!=null)u.aQ()}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.X()},
J:function(a){var u,t,s
u=H.b([],[P.h])
C.a.h(u,C.c.aN(J.aF(this.e),0))
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
C.a.h(u,V.T(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
X:function(){return this.J("")}}
F.i1.prototype={
$1:function(a){var u,t
H.d(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:8}
F.i0.prototype={
$1:function(a){var u,t
H.d(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:8}
F.hS.prototype={
I:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.am()
return!0},
jU:function(a,b,c,d,e,f,g,h,i){var u=F.hR(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bA:function(a,b,c,d,e,f){return this.jU(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].cL()
return!0},
cK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].cJ()
return!0},
k5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.R(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.X()},
J:function(a){var u,t,s,r
this.I()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
X:function(){return this.J("")},
sju:function(a){this.c=H.i(a,"$ia",[F.al],"$aa")}}
F.hT.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
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
T:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a6]})
C.a.T(this.b,b)
C.a.T(this.c,new F.hU(this,b))
C.a.T(this.d,new F.hV(this,b))},
i:function(a){return this.X()},
J:function(a){var u,t,s,r
u=H.b([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
X:function(){return this.J("")},
shy:function(a){this.b=H.i(a,"$ia",[F.a6],"$aa")},
shz:function(a){this.c=H.i(a,"$ia",[F.a6],"$aa")},
shA:function(a){this.d=H.i(a,"$ia",[F.a6],"$aa")}}
F.hU.prototype={
$1:function(a){H.d(a,"$ia6")
if(!J.R(a.a,this.a))this.b.$1(a)},
$S:8}
F.hV.prototype={
$1:function(a){var u
H.d(a,"$ia6")
u=this.a
if(!J.R(a.a,u)&&!J.R(a.b,u))this.b.$1(a)},
$S:8}
F.hW.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.X()},
J:function(a){var u,t,s,r
u=H.b([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
X:function(){return this.J("")},
shI:function(a){this.b=H.i(a,"$ia",[F.bp],"$aa")},
shJ:function(a){this.c=H.i(a,"$ia",[F.bp],"$aa")}}
F.hY.prototype={}
F.hX.prototype={
bk:function(a,b,c){return J.R(b.f,c.f)}}
F.hZ.prototype={}
F.fM.prototype={
kK:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ia",[F.al],"$aa")
u=V.cH()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.N(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.F(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.C(0,Math.sqrt(o*o+n*n+m*m))}if(!J.R(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}return}}
F.i_.prototype={
gm:function(a){return 0},
i:function(a){return this.X()},
J:function(a){var u,t,s
u=H.b([],[P.h])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.h(u,t[s].J(a))}return C.a.l(u,"\n")},
X:function(){return this.J("")},
scu:function(a){this.b=H.i(a,"$ia",[F.bQ],"$aa")}}
O.eU.prototype={
gt:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
a6:function(a){var u=this.r
if(u!=null)u.G(a)},
au:function(){return this.a6(null)},
sep:function(a){if(this.b!=a){this.b=a
this.au()}},
sek:function(a){if(this.c!=a){this.c=a
this.au()}},
sej:function(a){var u=a==null?V.bq():a
this.f=u
if(!J.R(u,a)){this.f=a
this.au()}},
aj:function(a){},
W:function(a,b){H.i(a,"$ia",[T.bs],"$aa")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
dg:function(a,b){var u,t,s,r,q,p,o
if(this.a==null){u=H.d(a.fr.j(0,"Distort"),"$idc")
if(u==null){t=a.a
u=new A.dc(t,"Distort")
u.c9(t,"Distort")
u.d_($.lX,$.lW)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.f(u.y.n(0,"projViewObjMat"),"$iae")
u.cx=H.f(u.y.n(0,"colorTxt2DMat"),"$ibu")
u.cy=H.f(u.y.n(0,"bumpTxt2DMat"),"$ibu")
u.db=H.f(u.y.n(0,"colorTxt"),"$iaa")
u.dx=H.f(u.y.n(0,"bumpTxt"),"$iaa")
u.dy=H.f(u.y.n(0,"nullColorTxt"),"$iF")
u.fr=H.f(u.y.n(0,"nullBumpTxt"),"$iF")
u.fx=H.f(u.y.n(0,"bumpMat"),"$iae")
a.cC(u)}this.a=u}if(b.e==null){t=b.d
s=$.ay()
r=$.aO()
r=t.cI(new Z.cI(a.a),new Z.aN(s.a|r.a))
r.aw($.ay()).e=this.a.z.c
r.aw($.aO()).e=this.a.Q.c
b.e=r}q=H.b([],[T.bs])
this.W(q,this.b)
this.W(q,this.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
C.b.bz(t,33984+s.a)
C.b.a7(t,3553,s.b)}}s=this.a
s.a2(a)
r=this.b
s.ae(s.db,s.dy,r)
r=this.c
s.ae(s.dx,s.fr,r)
r=a.gfc()
o=s.ch
o.toString
o.a9(r.a8(0,!0))
r=this.d
o=s.cx
o.toString
o.a9(r.a8(0,!0))
r=this.e
o=s.cy
o.toString
o.a9(r.a8(0,!0))
r=this.f
s=s.fx
s.toString
s.a9(r.a8(0,!0))
s=b.e
if(s instanceof Z.bA){s.a2(a)
s.ah(a)
s.an(a)}else b.e=null
s=this.a
s.toString
C.b.bZ(t,null)
s.x.cQ()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
C.b.bz(t,33984+s.a)
C.b.a7(t,3553,null)}}}}
O.dx.prototype={
gt:function(){var u=this.dy
if(u==null){u=D.E()
this.dy=u}return u},
a6:function(a){var u
H.d(a,"$iw")
u=this.dy
if(u!=null)u.G(a)},
au:function(){return this.a6(null)},
e0:function(a){H.d(a,"$iw")
this.a=null
this.a6(a)},
j_:function(){return this.e0(null)},
hW:function(a,b){var u=V.aq
u=new D.bm(a,H.i(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a6(u)},
hY:function(a,b){var u=V.aq
u=new D.bn(a,H.i(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a6(u)},
dI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.ab(u.e.length+3,4)*4
s=C.e.ab(u.f.length+3,4)*4
r=C.e.ab(u.r.length+3,4)*4
q=C.e.ab(u.x.length+3,4)*4
p=C.e.ab(u.y.length+3,4)*4
o=C.e.ab(u.z.length+3,4)*4
n=C.e.ab(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.i(u.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+C.e.i(h.a)+C.e.i(g.a)+C.e.i(f.a)
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
a7=$.ay()
if(a0){b=$.bd()
a7=new Z.aN(a7.a|b.a)}if(a1){b=$.bc()
a7=new Z.aN(a7.a|b.a)}if(a2){b=$.aO()
a7=new Z.aN(a7.a|b.a)}if(a3){b=$.be()
a7=new Z.aN(a7.a|b.a)}if(a5){b=$.bb()
a7=new Z.aN(a7.a|b.a)}return new A.fC(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.i(a,"$ia",[T.bs],"$aa")},
aj:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ao(u,u.length,0,[H.p(u,0)]);u.D();){t=u.d
t.toString
s=$.hQ
if(s==null){s=new V.N(0,0,1)
$.hQ=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dj(s)}}},
dg:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dI()
t=H.d(a2.fr.j(0,u.av),"$idy")
if(t==null){t=A.ma(u,a2.a)
a2.cC(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bD
u=a3.e
if(!(u instanceof Z.bA)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.aJ()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cK()
p.a.cK()
p=p.e
if(p!=null)p.aQ()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.k5()
o=o.e
if(o!=null)o.aQ()}m=a3.d.cI(new Z.cI(a2.a),r)
m.aw($.ay()).e=this.a.Q.c
if(u)m.aw($.bd()).e=this.a.cx.c
if(q)m.aw($.bc()).e=this.a.ch.c
if(s.rx)m.aw($.aO()).e=this.a.cy.c
if(p)m.aw($.be()).e=this.a.db.c
if(s.x1)m.aw($.bb()).e=this.a.dx.c
a3.e=m}u=T.bs
l=H.b([],[u])
this.a.a2(a2)
if(s.fx){q=this.a
p=a2.dx.ga4()
q=q.dy
q.toString
q.a9(p.a8(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.ga4().v(0,a2.dx.ga4())
a2.cx=p}q=q.fr
q.toString
q.a9(p.a8(0,!0))}q=this.a
p=a2.gfc()
q=q.fy
q.toString
q.a9(p.a8(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.a9(C.r.a8(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.a9(C.r.a8(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.a9(C.r.a8(p,!0))}if(s.aC>0){k=this.e.a.length
q=this.a.k4
C.b.N(q.a,q.d,k)
for(q=[P.y],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.d(o,"$iaq")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.bZ(H.i(o.a8(0,!0),"$ia",q,"$aa")))
C.b.fm(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.f.d)
q=this.a
p=this.f.d
q.ae(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.f.e)
q=this.a
p=this.f.e
q.ar(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.r.d)
q=this.a
p=this.r.d
q.ae(q.y1,q.aC,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.r.e)
q=this.a
p=this.r.e
q.ar(q.y2,q.aC,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.av
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.x.d)
q=this.a
p=this.x.d
q.ae(q.bD,q.bE,p)
p=this.a
q=this.x.f
p=p.av
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.x.e)
q=this.a
p=this.x.e
q.ar(q.ey,q.bE,p)
p=this.a
q=this.x.f
p=p.av
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bF
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.y.d)
q=this.a
p=this.y.d
q.ae(q.ez,q.bG,p)
p=this.a
q=this.y.f
p=p.bF
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.y.e)
q=this.a
p=this.y.e
q.ar(q.eA,q.bG,p)
p=this.a
q=this.y.f
p=p.bF
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bH
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bJ
C.b.M(p.a,p.d,n)
break
case C.h:this.W(l,this.z.d)
q=this.a
p=this.z.d
q.ae(q.eB,q.bI,p)
p=this.a
q=this.z.f
p=p.bH
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bJ
C.b.M(q.a,q.d,n)
break
case C.i:this.W(l,this.z.e)
q=this.a
p=this.z.e
q.ar(q.eC,q.bI,p)
p=this.a
q=this.z.f
p=p.bH
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bJ
C.b.M(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eN
C.b.N(q.a,q.d,k)
h=a2.db.ga4()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
o=this.a.cS
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.dj(e.a)
n=o.a
c=o.b
b=o.c
b=o.C(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.A(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.A(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eO
C.b.N(q.a,q.d,k)
h=a2.db.ga4()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
o=this.a.cT
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbn(e)
n=d.b
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=h.br(e.gbn(e))
n=d.c
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gaB(e)
n=d.d
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gcD()
n=d.e
C.b.M(n.a,n.d,o)
o=e.gcE()
n=d.f
C.b.M(n.a,n.d,o)
o=e.gcF()
n=d.r
C.b.M(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eP
C.b.N(q.a,q.d,k)
h=a2.db.ga4()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
o=this.a.cU
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbn(e)
n=d.b
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gcP(e).ls()
n=d.c
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=h.br(e.gbn(e))
n=d.d
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gaB(e)
n=d.e
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.glq()
n=d.f
C.b.M(n.a,n.d,o)
o=e.glp()
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
q=this.a.eQ
C.b.N(q.a,q.d,k)
h=a2.db.ga4()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
n=this.a.cV
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbp()
H.i(l,"$ia",o,"$aa")
if(!C.a.Z(l,n)){n.sf_(0,l.length)
C.a.h(l,n)}n=e.gcP(e)
c=d.d
C.b.A(c.a,c.d,n.a,n.b,n.c)
n=e.gbY()
c=d.b
C.b.A(c.a,c.d,n.a,n.b,n.c)
n=e.gbW(e)
c=d.c
C.b.A(c.a,c.d,n.a,n.b,n.c)
n=h.dj(e.gcP(e))
c=n.a
b=n.b
a=n.c
a=n.C(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.A(b.a,b.d,c,n,a)
a=e.gaB(e)
n=d.f
C.b.A(n.a,n.d,a.a,a.b,a.c)
a=e.gbp()
n=a.gf3(a)
if(!n){n=d.x
C.b.N(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.N(b,n,0)
else C.b.N(b,n,a.a)
n=d.x
C.b.N(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eR
C.b.N(q.a,q.d,k)
h=a2.db.ga4()
for(q=this.dx.y,p=q.length,o=[P.y],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
c=this.a.cW
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbp()
H.i(l,"$ia",n,"$aa")
if(!C.a.Z(l,c)){c.sf_(0,l.length)
C.a.h(l,c)}a0=h.v(0,e.ga4())
c=e.ga4()
b=$.cq
if(b==null){b=new V.a1(0,0,0)
$.cq=b}b=c.br(b)
c=d.b
C.b.A(c.a,c.d,b.a,b.b,b.c)
c=$.cq
if(c==null){c=new V.a1(0,0,0)
$.cq=c}c=a0.br(c)
b=d.c
C.b.A(b.a,b.d,c.a,c.b,c.c)
c=a0.d2()
b=d.d
i=new Float32Array(H.bZ(H.i(new V.ck(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a8(0,!0),"$ia",o,"$aa")))
C.b.fl(b.a,b.d,!1,i)
b=e.gaB(e)
c=d.e
C.b.A(c.a,c.d,b.a,b.b,b.c)
b=e.gbp()
c=b.gf3(b)
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
q=this.a.eS
C.b.N(q.a,q.d,k)
h=a2.db.ga4()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
o=this.a.cX
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbp()
H.i(l,"$ia",u,"$aa")
if(!C.a.Z(l,o)){o.sf_(0,l.length)
C.a.h(l,o)}o=e.gbn(e)
n=d.b
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gcP(e)
n=d.c
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gbY()
n=d.d
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gbW(e)
n=d.e
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=h.br(e.gbn(e))
n=d.f
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gbp()
n=o.gf3(o)
if(!n){o=d.x
C.b.N(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.N(b,n,0)
else C.b.N(b,n,o.a)
o=d.x
C.b.N(o.a,o.d,0)}o=e.gaB(e)
n=d.y
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.glu()
n=d.z
C.b.M(n.a,n.d,o)
o=e.glv()
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
case C.j:break
case C.h:this.W(l,this.Q.d)
u=this.a
q=this.Q.d
u.ae(u.eD,u.bK,q)
break
case C.i:this.W(l,this.Q.e)
u=this.a
q=this.Q.e
u.ar(u.eE,u.bK,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga4().d2()
a2.Q=q}u=u.id
u.toString
u.a9(q.a8(0,!0))}if(s.dy){this.W(l,this.ch)
u=this.a
q=this.ch
u.ar(u.eF,u.eG,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bL
u.toString
p=q.a
o=q.b
q=q.c
C.b.A(u.a,u.d,p,o,q)
break
case C.h:this.W(l,this.cx.d)
u=this.a
q=this.cx.d
u.ae(u.eH,u.bM,q)
q=this.a
u=this.cx.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
break
case C.i:this.W(l,this.cx.e)
u=this.a
q=this.cx.e
u.ar(u.eI,u.bM,q)
q=this.a
u=this.cx.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bO
u.toString
p=q.a
o=q.b
q=q.c
C.b.A(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bN
C.b.M(q.a,q.d,o)
break
case C.h:this.W(l,this.cy.d)
u=this.a
q=this.cy.d
u.ae(u.eJ,u.bP,q)
q=this.a
u=this.cy.f
q=q.bO
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bN
C.b.M(u.a,u.d,o)
break
case C.i:this.W(l,this.cy.e)
u=this.a
q=this.cy.e
u.ar(u.eK,u.bP,q)
q=this.a
u=this.cy.f
q=q.bO
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bN
C.b.M(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bQ
C.b.M(u.a,u.d,p)
break
case C.h:this.W(l,this.db.d)
u=this.a
p=this.db.d
u.ae(u.eL,u.bR,p)
p=this.a
u=this.db.f
p=p.bQ
C.b.M(p.a,p.d,u)
break
case C.i:this.W(l,this.db.e)
u=this.a
p=this.db.e
u.ar(u.eM,u.bR,p)
p=this.a
u=this.db.f
p=p.bQ
C.b.M(p.a,p.d,u)
break}u=a2.a
C.b.bj(u,3042)
C.b.k0(u,770,771)}for(j=0;j<l.length;++j)l[j].a2(a2)
u=a3.e
u.a2(a2)
u.ah(a2)
u.an(a2)
if(q)C.b.ki(a2.a,3042)
for(j=0;j<l.length;++j)l[j].an(a2)
u=this.a
u.toString
C.b.bZ(a2.a,null)
u.x.cQ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dI().av},
shk:function(a){this.e=H.i(a,"$iY",[V.aq],"$aY")}}
O.fA.prototype={}
O.dz.prototype={
aX:function(){}}
O.fB.prototype={}
O.aU.prototype={
e3:function(a){var u,t
if(!J.R(this.f,a)){u=this.f
this.f=a
t=new D.H(this.b+".color",u,a,this,[V.Z])
t.b=!0
this.a.a6(t)}},
aX:function(){this.fR()
this.e3(new V.Z(1,1,1))},
saB:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aX()
u=this.a
u.a=null
u.a6(null)}this.e3(b)}}
O.fD.prototype={
j3:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.H(this.b+".refraction",u,a,this,[P.y])
u.b=!0
this.a.a6(u)}},
aX:function(){this.c8()
this.j3(1)}}
O.fE.prototype={
cz:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.H(this.b+".shininess",u,a,this,[P.y])
u.b=!0
this.a.a6(u)}},
aX:function(){this.c8()
this.cz(100)}}
O.dP.prototype={
gt:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
a6:function(a){var u
H.d(a,"$iw")
u=this.e
if(u!=null)u.G(a)},
au:function(){return this.a6(null)},
aj:function(a){},
dg:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.j(0,"Skybox"),"$idQ")
if(u==null){t=a.a
u=new A.dQ(t,"Skybox")
u.c9(t,"Skybox")
u.d_($.mv,$.mu)
u.z=u.x.j(0,"posAttr")
u.Q=H.f(u.y.j(0,"fov"),"$iV")
u.ch=H.f(u.y.j(0,"ratio"),"$iV")
u.cx=H.f(u.y.j(0,"boxClr"),"$iG")
u.cy=H.f(u.y.j(0,"boxTxt"),"$iaf")
u.db=H.f(u.y.j(0,"viewMat"),"$iae")
a.cC(u)}this.a=u}if(b.e==null){t=b.d.cI(new Z.cI(a.a),$.ay())
t.aw($.ay()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.bz(s,33985)
C.b.a7(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a2(a)
q=this.b
p=r.Q
C.b.M(p.a,p.d,q)
q=r.ch
C.b.M(q.a,q.d,t/s)
s=this.c
r.cy.fK(s)
s=this.d
t=r.cx
C.b.A(t.a,t.d,s.a,s.b,s.c)
s=a.db.ga4().d2()
r=r.db
r.toString
r.a9(s.a8(0,!0))
t=b.e
if(t instanceof Z.bA){t.a2(a)
t.ah(a)
t.an(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.bZ(s,null)
t.x.cQ()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.bz(s,33984+t.a)
C.b.a7(s,34067,null)}}}
O.br.prototype={}
T.bs.prototype={}
T.hf.prototype={}
T.hj.prototype={
e4:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cR()}},
gt:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u}}
T.dX.prototype={
gt:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u}}
T.hk.prototype={
kI:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a7(u,3553,t)
C.b.ai(u,3553,10242,33071)
C.b.ai(u,3553,10243,33071)
C.b.ai(u,3553,10241,9729)
C.b.ai(u,3553,10240,9729)
C.b.a7(u,3553,null);++this.d
s=W.jo(null,a,null)
r=T.ju(0,t)
u=W.n
W.a4(s,"load",H.k(new T.hm(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kH:function(a){return this.kI(a,!1,!1,!1,!1)},
aV:function(a,b,c,d,e,f){var u,t
u=W.jo(null,c,null);++this.d
t=W.n
W.a4(u,"load",H.k(new T.hl(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
e2:function(a,b,c){var u,t,s,r
b=V.cY(b,2)
u=V.cY(a.width,2)
t=V.cY(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jk(null,null)
s.width=u
s.height=t
r=H.d(C.q.fw(s,"2d"),"$ibD")
r.imageSmoothingEnabled=!1;(r&&C.D).kk(r,a,0,0,s.width,s.height)
return P.nk(C.D.hE(r,0,0,s.width,s.height))}}}
T.hm.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.e2(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a7(t,3553,this.e)
C.b.fb(t,37440,this.f?1:0)
C.b.fg(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fq(t,3553)
C.b.a7(t,3553,null)
u.e4();++s.e},
$S:12}
T.hl.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.e2(this.b,u.c,this.c)
s=u.a
C.b.a7(s,34067,this.d)
C.b.fb(s,37440,this.e?1:0)
C.b.fg(s,this.f,0,6408,6408,5121,t)
C.b.a7(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cR()}++u.e},
$S:12}
V.b2.prototype={
aM:function(a){return!0},
i:function(a){return"all"},
$iau:1}
V.au.prototype={}
V.dw.prototype={
aM:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].aM(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.i(a,"$ia",[V.au],"$aa")},
$iau:1}
V.ar.prototype={
aM:function(a){return!this.fQ(a)},
i:function(a){return"!["+this.dt(0)+"]"}}
V.fS.prototype={
aM:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bT(this.a)
t=H.bT(this.b)
return u+".."+t},
$iau:1}
V.h_.prototype={
fW:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a SetMatcher with zero characters."))
u=new H.aJ([P.m,P.L])
for(t=new H.cj(a,a.gm(a),0,[H.a9(a,"S",0)]);t.D();)u.p(0,t.d,!0)
this.sj2(u)},
aM:function(a){return this.a.bB(a)},
i:function(a){return P.dT(this.a.gaD(),0,null)},
sj2:function(a){this.a=H.i(a,"$iJ",[P.m,P.L],"$aJ")},
$iau:1}
V.cu.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.k(0,b))
r.sac(H.b([],[V.au]))
r.c=!1
C.a.h(this.c,r)
return r},
kq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.aM(a))return r}return},
i:function(a){return this.b},
sjp:function(a){this.c=H.i(a,"$ia",[V.cz],"$aa")}}
V.e1.prototype={
i:function(a){var u,t
u=H.jP(this.b,"\n","\\n")
t=H.jP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
aP:function(a,b,c){var u,t,s
H.i(c,"$ia",[P.h],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.p(0,s,b)}},
i:function(a){return this.b},
siV:function(a){var u=P.h
this.c=H.i(a,"$iJ",[u,u],"$aJ")}}
V.ho.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cu(this,b)
u.sjp(H.b([],[V.cz]))
u.d=null
this.a.p(0,b,u)}return u},
P:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cy(this,a)
t=P.h
u.siV(new H.aJ([t,t]))
this.b.p(0,a,u)}return u},
fk:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.e1])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.kq(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dT(r,0,null)
throw H.c(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dT(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e1(j==null?k.b:j,l,o)}++o}}},
sjd:function(a){this.a=H.i(a,"$iJ",[P.h,V.cu],"$aJ")},
sji:function(a){this.b=H.i(a,"$iJ",[P.h,V.cy],"$aJ")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.dt(0)}}
X.eG.prototype={
gt:function(){var u=this.fr
if(u==null){u=D.E()
this.fr=u}return u},
ap:function(a){var u=this.fr
if(u!=null)u.G(a)},
saR:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.H("width",u,b,this,[P.m])
u.b=!0
this.ap(u)}},
saL:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.H("height",u,b,this,[P.m])
u.b=!0
this.ap(u)}},
a2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.v()
this.saR(0,C.e.a5(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.v()
this.saL(0,C.e.a5(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.a5(C.b.c2(u,3379))
p=V.cY(s,2)
o=V.cY(r,2)
q=V.cY(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.a7(u,3553,n)
C.b.ai(u,3553,10242,33071)
C.b.ai(u,3553,10243,33071)
C.b.ai(u,3553,10241,9729)
C.b.ai(u,3553,10240,9729)
C.b.fh(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.a7(u,3553,null)
m=T.ju(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
m.e4()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cR()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.a7(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.ef(u,36161,t)
C.b.l5(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.bf(u,36160,t)
C.b.ky(u,36160,36064,3553,this.z,0)
C.b.kx(u,36160,36096,36161,this.Q)
C.b.a7(u,3553,null)
C.b.ef(u,36161,null)
C.b.bf(u,36160,null)}u=a.a
C.b.bf(u,36160,this.y)
C.b.bj(u,2884)
C.b.bj(u,2929)
C.b.es(u,513)
t=this.dy
s=t.c
a.c=C.f.a5(s*this.a)
r=t.d
a.d=C.f.a5(r*this.b)
l=t.a
k=this.c
if(typeof k!=="number")return H.A(k)
j=C.f.a5(l*k)
t=t.b
l=this.d
if(typeof l!=="number")return H.A(l)
C.b.fp(u,j,C.f.a5(t*l),C.f.a5(s*k),C.f.a5(r*l))
C.b.en(u,this.db)
if(this.cy){t=this.cx
C.b.em(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.el(u,i)},
an:function(a){C.b.bf(a.a,36160,null)}}
X.bB.prototype={$iaW:1}
X.fa.prototype={
gt:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
a2:function(a){var u,t,s,r,q,p,o
u=a.a
C.b.bf(u,36160,null)
C.b.bj(u,2884)
C.b.bj(u,2929)
C.b.es(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.A(t)
p=C.f.a5(q*t)
q=r.b
if(typeof s!=="number")return H.A(s)
o=C.f.a5(q*s)
q=C.f.a5(r.c*t)
a.c=q
r=C.f.a5(r.d*s)
a.d=r
C.b.fp(u,p,o,q,r)
C.b.en(u,this.c)
r=this.a
C.b.em(u,r.a,r.b,r.c,r.d)
C.b.el(u,16640)},
an:function(a){}}
X.ff.prototype={
gt:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
a2:function(a){var u
a.cy.bV(V.bq())
u=V.bq()
a.db.bV(u)},
an:function(a){a.cy.aO()
a.db.aO()},
$iaW:1,
$ibB:1}
X.dG.prototype={
gt:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
ap:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.G(a)},
hd:function(){return this.ap(null)},
a2:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aV(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bV(n)
u=$.kl
if(u==null){u=V.kn()
t=V.kK()
s=$.kG
if(s==null){s=new V.N(0,0,-1)
$.kG=s}s=V.kf(u,t,s)
$.kl=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b4(a,this)
if(l!=null)m=l.v(0,m)}a.db.bV(m)},
an:function(a){a.cy.aO()
a.db.aO()},
$iaW:1,
$ibB:1}
X.cw.prototype={}
V.bh.prototype={
bu:function(a){this.b=new P.fd(C.X)
this.c=null
this.scj(H.b([],[[P.a,W.az]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.az]))
t=a.split("\n")
for(u=t.length,s=[W.az],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.D(p)
n=this.b.hp(p,0,p.length)
m=n==null?p:n
C.k.fG(o,H.jP(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaE(this.d),o)}},
f9:function(a){var u,t,s,r
H.i(a,"$ia",[P.h],"$aa")
this.scj(H.b([],[[P.a,W.az]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bC()
this.c=t}for(t=t.fk(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)this.bU(t[r])},
scj:function(a){this.d=H.i(a,"$ia",[[P.a,W.az]],"$aa")}}
V.jd.prototype={
$1:function(a){H.d(a,"$iaZ")
P.jO(C.f.fj(this.a.gkw(),2)+" fps")},
$S:49}
V.eT.prototype={
bU:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
bC:function(){var u,t,s,r
u=V.hp()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.r("_"))
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
s=V.u(new H.r("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.r("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.r("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"OpenDoubleStr")
t=V.u(new H.r('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.u(new H.r('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.u(new H.r("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.u(new H.r('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b2())
s=u.k(0,"Start").l(0,"OpenSingleStr")
t=V.u(new H.r("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.u(new H.r("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.u(new H.r("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.u(new H.r("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b2())
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.r("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.r("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.au]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"MLComment")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").l(0,"MLCStar")
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"MLComment")
s=new V.ar()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"EndComment")
s=V.u(new H.r("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Whitespace")
t=V.u(new H.r(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").l(0,"Whitespace")
s=V.u(new H.r(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.P("Num")
s=u.k(0,"Float")
s.d=s.a.P("Num")
s=u.k(0,"Sym")
s.d=s.a.P("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.P("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.P("String")
s=u.k(0,"EndComment")
s.d=s.a.P("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.P("Whitespace")
s=u.k(0,"Id")
t=s.a.P("Id")
s.d=t
s=[P.h]
t.aP(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aP(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aP(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fb.prototype={
bU:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
bC:function(){var u,t,s,r
u=V.hp()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.r("_"))
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
s=V.u(new H.r("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.r("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.r("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.r("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.r("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.b2())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.au]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.r("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"EndPreprocess")
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Whitespace")
s=V.u(new H.r(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").l(0,"Whitespace")
t=V.u(new H.r(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.P("Num")
t=u.k(0,"Float")
t.d=t.a.P("Num")
t=u.k(0,"Sym")
t.d=t.a.P("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.P("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.P("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.P("Whitespace")
t=u.k(0,"Id")
s=t.a.P("Id")
t.d=s
t=[P.h]
s.aP(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aP(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aP(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.fc.prototype={
bU:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
bC:function(){var u,t,s
u=V.hp()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.r("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").l(0,"Attr")
s=V.u(new H.r("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Sym")
s=V.u(new H.r("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").l(0,"Sym")
t=V.u(new H.r("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"OpenStr")
s=V.u(new H.r('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").l(0,"CloseStr")
t=V.u(new H.r('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").l(0,"EscStr")
s=V.u(new H.r("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").l(0,"OpenStr")
t=V.u(new H.r('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.b2())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b2())
t=u.k(0,"Other").l(0,"Other")
s=new V.ar()
s.sac(H.b([],[V.au]))
C.a.h(t.a,s)
t=V.u(new H.r('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.P("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.P("String")
t=u.k(0,"Id")
s=t.a.P("Id")
t.d=s
s.aP(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
s=u.k(0,"Attr")
s.d=s.a.P("Attr")
s=u.k(0,"Other")
s.d=s.a.P("Other")
return u}}
V.fQ.prototype={
f9:function(a){H.i(a,"$ia",[P.h],"$aa")
this.scj(H.b([],[[P.a,W.az]]))
this.O(C.a.l(a,"\n"),"#111")},
bU:function(a){},
bC:function(){return}}
V.h3.prototype={
fX:function(a,b){var u,t,s,r,q,p,o
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
o=W.n
W.a4(u,"scroll",H.k(new V.h5(s),{func:1,ret:-1,args:[o]}),!1,o)},
ec:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ia",[P.h],"$aa")
this.j8()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fk(C.a.kE(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
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
if(H.nJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.D(m[1])
l.textContent=H.D(m[0])
C.k.E(t,l)}else{k=P.eu(C.I,n,C.m,!1)
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
fv:function(a){var u,t,s,r
u=new V.eT("dart")
u.bu("dart")
t=new V.fb("glsl")
t.bu("glsl")
s=new V.fc("html")
s.bu("html")
r=C.a.ks(H.b([u,t,s],[V.bh]),new V.h6(a))
if(r!=null)return r
u=new V.fQ("plain")
u.bu("plain")
return u},
eb:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.i(a7,"$ia",[P.h],"$aa")
u=H.b([],[P.m])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cW(r).aa(r,"+")){C.a.p(a7,s,C.c.ax(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aa(r,"-")){C.a.p(a7,s,C.c.ax(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fv(a5)
q.f9(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.eu(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jW(null)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.x.E(a,r[a0])
C.n.E(e,d)
C.n.E(e,c)
C.n.E(e,a)
C.o.E(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gU(r);a3.D();)C.x.E(c,a3.gL())
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
jR:function(a){var u,t,s,r,q,p,o
H.i(a,"$ia",[P.h],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.E(this.a,t)
r=C.o.hG(t,-1)
s=H.d((r&&C.n).dQ(r,-1),"$iaY").style
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
o=H.d(C.n.dQ(r,-1),"$iaY")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).E(o,p)}},
j8:function(){var u,t,s,r
if(this.b!=null)return
u=V.hp()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.ar()
r=[V.au]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").l(0,"BoldEnd")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Italic")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").l(0,"Italic")
s=new V.ar()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").l(0,"ItalicEnd")
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Code")
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").l(0,"Code")
s=new V.ar()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").l(0,"CodeEnd")
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"LinkHead")
s=V.u(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").l(0,"LinkTail")
s=V.u(new H.r("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").l(0,"LinkEnd")
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").l(0,"LinkHead")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b2())
s=u.k(0,"Other").l(0,"Other")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.P("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.P("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.P("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.P("Link")
s=u.k(0,"Other")
s.d=s.a.P("Other")
this.b=u}}
V.h5.prototype={
$1:function(a){P.ky(C.y,new V.h4(this.a))},
$S:12}
V.h4.prototype={
$0:function(){var u,t,s
u=C.f.a5(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
V.h6.prototype={
$1:function(a){return H.d(a,"$ibh").a===this.a},
$S:50}
V.hg.prototype={
ea:function(a,b,c){var u,t,s,r,q
u=W.jo(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.eD(this.c)
s=t.gm(t)
t=W.a0
W.a4(u,"click",H.k(new V.hi(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.eD(this.c).h(0,u)
J.eD(this.c).h(0,document.createElement("br"))
r=P.kC().gdc().j(0,H.j(this.a))
if(r==null){this.e8(s)
q=c}else q=P.cX(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.ea(a,b,!1)},
e8:function(a){var u,t,s,r,q
u=P.kC()
t=P.h
s=P.m7(u.gdc(),t,t)
s.p(0,this.a,""+a)
r=u.fd(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iX(t,new P.iE([],[]).dk(""),"",q)}}
V.hi.prototype={
$1:function(a){var u,t
H.d(a,"$ia0")
u=this.a
t=J.eD(u.c)
t.T(t,new V.hh())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.e8(this.d)},
$S:51}
V.hh.prototype={
$1:function(a){var u
H.d(a,"$iI")
if(!!J.O(a).$ibK){u=a.style
u.border="solid 2px white"}},
$S:52}
X.j9.prototype={
$1:function(a){this.a.sek(this.b.f.kH(a))},
$S:15}
X.ja.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iw")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.eb("Vertex Shader for distort","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.eb("Fragment Shader for distort","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.ab.prototype
u.fN=u.i
u=J.dq.prototype
u.fP=u.i
u=P.l.prototype
u.fO=u.c_
u=W.I.prototype
u.c7=u.as
u=W.en.prototype
u.fS=u.az
u=O.dz.prototype
u.fR=u.aX
u=O.aU.prototype
u.c8=u.aX
u=V.dw.prototype
u.fQ=u.aM
u.dt=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ne","mI",9)
u(P,"nf","mJ",9)
u(P,"ng","mK",9)
t(P,"l6","nd",3)
s(W,"nu",4,null,["$4"],["mM"],23,0)
s(W,"nv",4,null,["$4"],["mN"],23,0)
var m
r(m=E.ak.prototype,"gf7",0,0,null,["$1","$0"],["f8","kS"],0,0)
r(m,"gf5",0,0,null,["$1","$0"],["f6","kP"],0,0)
q(m,"gkN","kO",6)
q(m,"gkQ","kR",6)
r(m=E.e0.prototype,"gdv",0,0,null,["$1","$0"],["dz","dw"],0,0)
p(m,"gl7","fe",3)
o(m=X.e7.prototype,"gia","ib",10)
o(m,"ghZ","i_",10)
o(m,"gi4","i5",4)
o(m,"gig","ih",22)
o(m,"gic","ie",22)
o(m,"gik","il",4)
o(m,"gip","iq",4)
o(m,"gi8","i9",4)
o(m,"gim","io",4)
o(m,"gi6","i7",4)
o(m,"gir","is",54)
o(m,"git","iu",10)
o(m,"giJ","iK",11)
o(m,"giF","iG",11)
o(m,"giH","iI",11)
r(D.bj.prototype,"gh1",0,0,null,["$1","$0"],["aF","h2"],0,0)
r(m=D.ds.prototype,"gdV",0,0,null,["$1","$0"],["dW","ii"],0,0)
o(m,"giv","iw",38)
q(m,"ghT","hU",24)
q(m,"giz","iA",24)
n(V.Q.prototype,"gm","d3",25)
n(V.N.prototype,"gm","d3",25)
r(m=U.ci.prototype,"gaW",0,0,null,["$1","$0"],["R","ad"],0,0)
q(m,"ghR","hS",26)
q(m,"gix","iy",26)
r(m=U.e8.prototype,"gaW",0,0,null,["$1","$0"],["R","ad"],0,0)
o(m,"gcm","cn",1)
o(m,"gco","cp",1)
o(m,"gcq","cr",1)
r(m=U.e9.prototype,"gaW",0,0,null,["$1","$0"],["R","ad"],0,0)
o(m,"gcm","cn",1)
o(m,"gco","cp",1)
o(m,"gcq","cr",1)
o(m,"ghL","hM",1)
o(m,"ghN","hO",1)
o(m,"gjn","jo",1)
o(m,"gjl","jm",1)
o(m,"gjj","jk",1)
o(U.ea.prototype,"ghP","hQ",1)
r(m=M.d8.prototype,"ga0",0,0,null,["$1","$0"],["a1","b7"],0,0)
q(m,"giB","iC",27)
q(m,"giD","iE",27)
r(M.da.prototype,"ga0",0,0,null,["$1","$0"],["a1","b7"],0,0)
r(m=M.df.prototype,"ga0",0,0,null,["$1","$0"],["a1","b7"],0,0)
q(m,"gi0","i1",6)
q(m,"gi2","i3",6)
r(m=O.dx.prototype,"gca",0,0,null,["$1","$0"],["a6","au"],0,0)
r(m,"giZ",0,0,null,["$1","$0"],["e0","j_"],0,0)
q(m,"ghV","hW",28)
q(m,"ghX","hY",28)
r(O.dP.prototype,"gca",0,0,null,["$1","$0"],["a6","au"],0,0)
r(X.dG.prototype,"ghc",0,0,null,["$1","$0"],["ap","hd"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jr,J.ab,J.ao,P.ej,P.l,H.cj,P.aS,H.bI,H.cG,H.eP,H.fT,H.hs,P.bk,H.cd,H.eo,P.bO,H.fo,H.fq,H.fk,P.ep,P.b1,P.aC,P.ec,P.h9,P.cv,P.ha,P.aZ,P.ai,P.iU,P.iz,P.bX,P.ei,P.S,P.iL,P.fw,P.bE,P.fe,P.iS,P.iQ,P.L,P.aj,P.ag,P.aR,P.fO,P.dS,P.ef,P.f9,P.bl,P.a,P.J,P.C,P.as,P.h,P.ad,P.bY,P.hI,P.iC,W.eR,W.bw,W.at,W.dE,W.en,W.iG,W.dh,W.aw,W.iy,W.ev,P.iD,P.es,P.it,P.M,O.Y,O.cl,E.eJ,E.ak,E.fU,E.e0,Z.eb,Z.cI,Z.bA,Z.bM,Z.aN,D.eM,D.bG,D.w,X.d7,X.dr,X.fm,X.ft,X.av,X.fF,X.hq,X.e7,D.bj,D.a2,D.dH,D.dR,D.dY,D.dZ,D.e_,V.Z,V.ap,V.f0,V.ck,V.aq,V.a3,V.a1,V.aX,V.dL,V.Q,V.N,U.e8,U.e9,U.ea,M.da,M.df,M.ax,A.d4,A.eF,A.fC,A.cA,A.cD,A.cB,A.cE,A.cC,A.cF,A.bF,A.e3,A.hC,F.a6,F.f4,F.bp,F.fn,F.bQ,F.dO,F.h0,F.h1,F.h2,F.al,F.hS,F.hT,F.hW,F.hY,F.hZ,F.i_,O.br,O.dz,T.hk,V.b2,V.au,V.dw,V.fS,V.h_,V.cu,V.e1,V.cy,V.ho,X.cw,X.bB,X.ff,X.dG,V.bh,V.h3,V.hg])
s(J.ab,[J.fj,J.dp,J.dq,J.aH,J.bo,J.b5,H.bP,W.bH,W.bD,W.ed,W.eV,W.dd,W.de,W.n,W.dk,W.eg,W.b4,W.du,W.el,W.dJ,W.aK,W.eq,W.ew,P.d5,P.di,P.dI,P.dM,P.bV,P.dN,P.dW,P.e4])
s(J.dq,[J.fP,J.bv,J.b6])
t(J.jq,J.aH)
s(J.bo,[J.dn,J.dm])
t(P.fs,P.ej)
s(P.fs,[H.e5,W.i9,W.am,P.f5])
t(H.r,H.e5)
s(P.l,[H.eY,H.fx,H.cJ])
s(H.eY,[H.bN,H.fp])
s(P.aS,[H.fy,H.i3])
t(H.fz,H.bN)
t(H.eQ,H.eP)
s(P.bk,[H.fN,H.fl,H.hG,H.hu,H.eL,H.fY,P.dF,P.aG,P.hH,P.hE,P.bW,P.eO,P.eS])
s(H.cd,[H.jf,H.he,H.j5,H.j6,H.j7,P.i5,P.i4,P.i6,P.i7,P.iK,P.iJ,P.ig,P.ik,P.ih,P.ii,P.ij,P.io,P.ip,P.im,P.il,P.hb,P.hc,P.j_,P.iw,P.iv,P.ix,P.fr,P.fv,P.iR,P.eW,P.eX,P.hM,P.hJ,P.hK,P.hL,P.iM,P.iN,P.iP,P.iO,P.iW,P.iV,P.iX,P.iY,W.eZ,W.ie,W.fL,W.fK,W.iA,W.iB,W.iI,W.iT,P.iF,P.j1,P.f6,P.f7,E.fV,E.fW,E.fX,E.hn,D.f2,D.f3,F.je,F.j2,F.i1,F.i0,F.hU,F.hV,T.hm,T.hl,V.jd,V.h5,V.h4,V.h6,V.hi,V.hh,X.j9,X.ja])
s(H.he,[H.h8,H.cb])
t(P.fu,P.bO)
s(P.fu,[H.aJ,W.i8])
t(H.dA,H.bP)
s(H.dA,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.dB,H.cO)
t(H.cQ,H.cP)
t(H.dC,H.cQ)
s(H.dC,[H.fG,H.fH,H.fI,H.fJ,H.dD,H.co])
t(P.iu,P.iU)
t(P.is,P.iz)
t(P.et,P.fw)
t(P.e6,P.et)
s(P.bE,[P.eH,P.f_])
t(P.bi,P.ha)
s(P.bi,[P.eI,P.fd,P.hP,P.hO])
t(P.hN,P.f_)
s(P.ag,[P.y,P.m])
s(P.aG,[P.bU,P.fg])
t(P.ia,P.bY)
s(W.bH,[W.z,W.cK])
s(W.z,[W.I,W.bg,W.cf,W.cL])
s(W.I,[W.v,P.o])
s(W.v,[W.d2,W.eE,W.ca,W.bf,W.bC,W.az,W.f8,W.dj,W.bK,W.cm,W.fZ,W.aY,W.dU,W.dV,W.hd,W.cx])
t(W.ce,W.ed)
t(W.eh,W.eg)
t(W.bJ,W.eh)
t(W.dl,W.cf)
t(W.bt,W.n)
s(W.bt,[W.aT,W.a0,W.aL])
t(W.em,W.el)
t(W.cp,W.em)
t(W.er,W.eq)
t(W.hr,W.er)
t(W.i2,W.cm)
t(W.b0,W.a0)
t(W.ee,W.de)
t(W.ex,W.ew)
t(W.ek,W.ex)
t(W.ib,W.i8)
t(W.ic,P.h9)
t(W.jz,W.ic)
t(W.id,P.cv)
t(W.iH,W.en)
t(P.iE,P.iD)
t(P.aA,P.it)
t(P.cs,P.o)
s(E.eJ,[Z.d6,A.ct,T.bs])
s(D.w,[D.bm,D.bn,D.H,X.fR])
s(X.fR,[X.dv,X.b7,X.cn,X.e2])
s(O.Y,[D.ds,U.ci,M.d8])
s(D.eM,[U.eN,U.ac])
t(U.d9,U.ac)
s(A.ct,[A.dc,A.dy,A.dQ])
s(A.e3,[A.F,A.hy,A.hz,A.hB,A.hw,A.V,A.hx,A.G,A.hA,A.hD,A.bu,A.ae,A.aa,A.af])
t(F.h7,F.f4)
t(F.hv,F.fn)
t(F.hX,F.hY)
t(F.fM,F.hZ)
s(O.br,[O.eU,O.dx,O.dP])
s(O.dz,[O.fA,O.fB,O.aU])
s(O.aU,[O.fD,O.fE])
s(T.bs,[T.hf,T.dX])
t(T.hj,T.hf)
s(V.dw,[V.ar,V.cz])
s(X.cw,[X.eG,X.fa])
s(V.bh,[V.eT,V.fb,V.fc,V.fQ])
u(H.e5,H.cG)
u(H.cN,P.S)
u(H.cO,H.bI)
u(H.cP,P.S)
u(H.cQ,H.bI)
u(P.ej,P.S)
u(P.et,P.iL)
u(W.ed,W.eR)
u(W.eg,P.S)
u(W.eh,W.at)
u(W.el,P.S)
u(W.em,W.at)
u(W.eq,P.S)
u(W.er,W.at)
u(W.ew,P.S)
u(W.ex,W.at)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bf.prototype
C.q=W.bC.prototype
C.D=W.bD.prototype
C.k=W.az.prototype
C.T=W.dd.prototype
C.V=W.dj.prototype
C.W=W.dk.prototype
C.z=W.dl.prototype
C.Y=J.ab.prototype
C.a=J.aH.prototype
C.Z=J.dm.prototype
C.e=J.dn.prototype
C.r=J.dp.prototype
C.f=J.bo.prototype
C.c=J.b5.prototype
C.a5=J.b6.prototype
C.ab=W.cp.prototype
C.L=J.fP.prototype
C.M=W.dJ.prototype
C.b=P.bV.prototype
C.x=W.aY.prototype
C.o=W.dU.prototype
C.n=W.dV.prototype
C.C=J.bv.prototype
C.N=W.b0.prototype
C.O=W.cK.prototype
C.Q=new P.eI(!1)
C.P=new P.eH(C.Q)
C.R=new P.fO()
C.S=new P.hP()
C.l=new P.iu()
C.d=new A.bF(0,"ColorSourceType.None")
C.j=new A.bF(1,"ColorSourceType.Solid")
C.h=new A.bF(2,"ColorSourceType.Texture2D")
C.i=new A.bF(3,"ColorSourceType.TextureCube")
C.y=new P.aR(0)
C.U=new P.aR(5e6)
C.X=new P.fe("element",!0,!1,!1,!1)
C.a_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a0=function(hooks) {
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

C.a1=function(getTagFallback) {
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
C.a2=function() {
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
C.a3=function(hooks) {
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
C.a4=function(hooks) {
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
C.G=H.b(u([127,2047,65535,1114111]),[P.m])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a6=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a7=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.H=H.b(u([]),[P.h])
C.a8=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.J=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a9=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.K=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.aa=new H.eQ(0,{},C.H,[P.h,P.h])
C.m=new P.hN(!1)})();(function staticFields(){$.aP=0
$.cc=null
$.jY=null
$.jD=!1
$.l9=null
$.l4=null
$.lf=null
$.j3=null
$.j8=null
$.jM=null
$.c_=null
$.cT=null
$.cU=null
$.jE=!1
$.W=C.l
$.b3=null
$.jn=null
$.k5=null
$.k4=null
$.kd=null
$.kh=null
$.km=null
$.cq=null
$.kr=null
$.kF=null
$.kJ=null
$.kH=null
$.kI=null
$.hQ=null
$.kG=null
$.lX="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.lW="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.mv="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mu="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kl=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nS","li",function(){return H.l8("_$dart_dartClosure")})
u($,"nT","jQ",function(){return H.l8("_$dart_js")})
u($,"nY","lj",function(){return H.b_(H.ht({
toString:function(){return"$receiver$"}}))})
u($,"nZ","lk",function(){return H.b_(H.ht({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o_","ll",function(){return H.b_(H.ht(null))})
u($,"o0","lm",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o3","lp",function(){return H.b_(H.ht(void 0))})
u($,"o4","lq",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o2","lo",function(){return H.b_(H.kA(null))})
u($,"o1","ln",function(){return H.b_(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o6","ls",function(){return H.b_(H.kA(void 0))})
u($,"o5","lr",function(){return H.b_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"on","jR",function(){return P.mH()})
u($,"ot","d0",function(){return[]})
u($,"o9","lt",function(){return P.mE()})
u($,"oo","lx",function(){return H.mb(H.bZ(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"or","lz",function(){return P.mq("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"os","lA",function(){return P.n5()})
u($,"op","ly",function(){return P.kb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"oq","jS",function(){return P.ka(P.h,P.bl)})
u($,"og","lw",function(){return Z.aB(0)})
u($,"oa","lu",function(){return Z.aB(511)})
u($,"oi","ay",function(){return Z.aB(1)})
u($,"oh","bd",function(){return Z.aB(2)})
u($,"oc","bc",function(){return Z.aB(4)})
u($,"oj","aO",function(){return Z.aB(8)})
u($,"ok","be",function(){return Z.aB(16)})
u($,"od","cZ",function(){return Z.aB(32)})
u($,"oe","d_",function(){return Z.aB(64)})
u($,"of","lv",function(){return Z.aB(96)})
u($,"ol","c9",function(){return Z.aB(128)})
u($,"ob","bb",function(){return Z.aB(256)})
u($,"nR","lh",function(){return new V.f0(1e-9)})
u($,"nQ","P",function(){return $.lh()})})()
var v={mangledGlobalNames:{m:"int",y:"double",ag:"num",h:"String",L:"bool",C:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1,args:[P.m,[P.l,E.ak]]},{func:1,ret:P.C,args:[D.w]},{func:1,ret:P.C,args:[F.a6]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:P.C,args:[W.n]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.C,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.L,args:[W.z]},{func:1,ret:P.L,args:[W.aw]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.L,args:[W.I,P.h,P.h,W.bw]},{func:1,ret:-1,args:[P.m,[P.l,D.a2]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.m,[P.l,U.ac]]},{func:1,ret:-1,args:[P.m,[P.l,M.ax]]},{func:1,ret:-1,args:[P.m,[P.l,V.aq]]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.C,args:[P.ag]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,args:[,P.h]},{func:1,ret:P.C,args:[,],opt:[P.as]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.C,args:[P.h,,]},{func:1,ret:P.M,args:[P.m]},{func:1,ret:P.L,args:[[P.l,D.a2]]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[W.n]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[P.h]},{func:1,ret:V.a1,args:[P.y]},{func:1,ret:P.C,args:[F.al,P.y,P.y]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:W.I,args:[W.z]},{func:1,ret:[P.J,P.h,P.h],args:[[P.J,P.h,P.h],P.h]},{func:1,ret:P.C,args:[P.aZ]},{func:1,ret:P.L,args:[V.bh]},{func:1,ret:P.C,args:[W.a0]},{func:1,ret:P.C,args:[W.I]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:-1,args:[W.b0]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ab,MediaError:J.ab,Navigator:J.ab,NavigatorConcurrentHardware:J.ab,NavigatorUserMediaError:J.ab,OverconstrainedError:J.ab,PositionError:J.ab,WebGLActiveInfo:J.ab,WebGL2RenderingContext:J.ab,SQLError:J.ab,ArrayBufferView:H.bP,Float32Array:H.dB,Int16Array:H.fG,Int32Array:H.fH,Int8Array:H.fI,Uint32Array:H.fJ,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.co,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLInputElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,HTMLAnchorElement:W.d2,HTMLAreaElement:W.eE,HTMLBaseElement:W.ca,HTMLBodyElement:W.bf,HTMLCanvasElement:W.bC,CanvasRenderingContext2D:W.bD,CDATASection:W.bg,CharacterData:W.bg,Comment:W.bg,ProcessingInstruction:W.bg,Text:W.bg,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,HTMLDivElement:W.az,XMLDocument:W.cf,Document:W.cf,DOMException:W.eV,DOMImplementation:W.dd,DOMRectReadOnly:W.de,Element:W.I,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bH,HTMLFormElement:W.f8,HTMLHeadElement:W.dj,History:W.dk,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,HTMLDocument:W.dl,ImageData:W.b4,HTMLImageElement:W.bK,KeyboardEvent:W.aT,Location:W.du,HTMLAudioElement:W.cm,HTMLMediaElement:W.cm,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cp,RadioNodeList:W.cp,Range:W.dJ,HTMLSelectElement:W.fZ,HTMLTableCellElement:W.aY,HTMLTableDataCellElement:W.aY,HTMLTableHeaderCellElement:W.aY,HTMLTableElement:W.dU,HTMLTableRowElement:W.dV,HTMLTableSectionElement:W.hd,HTMLTemplateElement:W.cx,Touch:W.aK,TouchEvent:W.aL,TouchList:W.hr,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,HTMLVideoElement:W.i2,WheelEvent:W.b0,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,ClientRect:W.ee,DOMRect:W.ee,NamedNodeMap:W.ek,MozNamedAttrMap:W.ek,SVGScriptElement:P.cs,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.d5,WebGLFramebuffer:P.di,WebGLProgram:P.dI,WebGLRenderbuffer:P.dM,WebGLRenderingContext:P.bV,WebGLShader:P.dN,WebGLTexture:P.dW,WebGLUniformLocation:P.e4})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lc,[])
else X.lc([])})})()
//# sourceMappingURL=test.dart.js.map
