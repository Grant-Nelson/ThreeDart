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
a[c]=function(){a[c]=function(){H.pg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lk(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l0:function l0(a){this.a=a},
kv:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hb:function(){return new P.c7("No element")},
nC:function(){return new P.c7("Too many elements")},
nB:function(){return new P.c7("Too few elements")},
v:function v(a){this.a=a},
fS:function fS(){},
c1:function c1(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
jm:function jm(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(){},
cU:function cU(){},
eh:function eh(){},
ns:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
cj:function(a){var u,t
u=H.G(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
oY:function(a){return v.types[H.ai(a)]},
p4:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iK},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.ax(a))
return u},
nZ:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hc(u)
t=u[0]
s=u[1]
return new H.i2(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cF:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nW:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.G(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.H(r,p)|32)>s)return}return parseInt(a,b)},
c3:function(a){return H.nN(a)+H.lh(H.bR(a),0,null)},
nN:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibN){p=C.E(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cj(r.length>1&&C.b.H(r,0)===36?C.b.aq(r,1):r)},
nO:function(){if(!!self.location)return self.location.href
return},
lZ:function(a){var u,t,s,r,q
H.kB(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nX:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ax(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aT(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ax(r))}return H.lZ(u)},
m_:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ax(s))
if(s<0)throw H.c(H.ax(s))
if(s>65535)return H.nX(a)}return H.lZ(a)},
nY:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nV:function(a){var u=H.c2(a).getFullYear()+0
return u},
nT:function(a){var u=H.c2(a).getMonth()+1
return u},
nP:function(a){var u=H.c2(a).getDate()+0
return u},
nQ:function(a){var u=H.c2(a).getHours()+0
return u},
nS:function(a){var u=H.c2(a).getMinutes()+0
return u},
nU:function(a){var u=H.c2(a).getSeconds()+0
return u},
nR:function(a){var u=H.c2(a).getMilliseconds()+0
return u},
I:function(a){throw H.c(H.ax(a))},
f:function(a,b){if(a==null)J.aC(a)
throw H.c(H.ce(a,b))},
ce:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
u=H.ai(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.I(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,"index",null,u)
return P.e_(b,"index",null)},
oR:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
ax:function(a){return new P.aK(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mQ})
u.name=""}else u.toString=H.mQ
return u},
mQ:function(){return J.at(this.dartException)},
t:function(a){throw H.c(a)},
C:function(a){throw H.c(P.bh(a))},
bb:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lU:function(a,b){return new H.hR(a,b==null?null:b.method)},
l1:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hg(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aT(s,16)&8191)===10)switch(r){case 438:return u.$1(H.l1(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lU(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mU()
p=$.mV()
o=$.mW()
n=$.mX()
m=$.n_()
l=$.n0()
k=$.mZ()
$.mY()
j=$.n2()
i=$.n1()
h=q.ah(t)
if(h!=null)return u.$1(H.l1(H.G(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.l1(H.G(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lU(H.G(t),h))}}return u.$1(new H.iY(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e3()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aK(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e3()
return a},
ch:function(a){var u
if(a==null)return new H.eV(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eV(a)},
oU:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
p3:function(a,b,c,d,e,f){H.h(a,"$ibC")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cd:function(a,b){var u
H.ai(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p3)
a.$identity=u
return u},
nr:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.nZ(u).r}else s=d
r=e?Object.create(new H.ip().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aZ
if(typeof p!=="number")return p.p()
$.aZ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lH(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oY,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lF:H.kU
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lH(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
no:function(a,b,c,d){var u=H.kU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nq(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.no(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cn
if(q==null){q=H.fz("self")
$.cn=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cn
if(q==null){q=H.fz("self")
$.cn=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
np:function(a,b,c,d){var u,t
u=H.kU
t=H.lF
switch(b?-1:a){case 0:throw H.c(H.o2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nq:function(a,b){var u,t,s,r,q,p,o,n
u=$.cn
if(u==null){u=H.fz("self")
$.cn=u}t=$.lE
if(t==null){t=H.fz("receiver")
$.lE=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.np(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aZ
if(typeof t!=="number")return t.p()
$.aZ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aZ
if(typeof t!=="number")return t.p()
$.aZ=t+1
return new Function(u+t+"}")()},
lk:function(a,b,c,d,e,f,g){return H.nr(a,b,H.ai(c),d,!!e,!!f,g)},
kU:function(a){return a.a},
lF:function(a){return a.c},
fz:function(a){var u,t,s,r,q
u=new H.cm("self","target","receiver","name")
t=J.hc(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
oS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
p9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
li:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mO:function(a,b){throw H.c(H.aY(a,H.cj(H.G(b).substring(2))))},
pb:function(a,b){throw H.c(H.nn(a,H.cj(H.G(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.mO(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pb(a,b)},
kB:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mL:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.mO(a,b)},
mH:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
fi:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mH(J.X(a))
if(u==null)return!1
return H.mv(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.le)return a
$.le=!0
try{if(H.fi(a,b))return a
u=H.kK(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.le=!1}},
ln:function(a,b){if(a!=null&&!H.lj(a,b))H.t(H.aY(a,H.kK(b)))
return a},
aY:function(a,b){return new H.iM("TypeError: "+P.fW(a)+": type '"+H.mA(a)+"' is not a subtype of type '"+b+"'")},
nn:function(a,b){return new H.fA("CastError: "+P.fW(a)+": type '"+H.mA(a)+"' is not a subtype of type '"+b+"'")},
mA:function(a){var u,t
u=J.X(a)
if(!!u.$ico){t=H.mH(u)
if(t!=null)return H.kK(t)
return"Closure"}return H.c3(a)},
pg:function(a){throw H.c(new P.fK(H.G(a)))},
o2:function(a){return new H.i9(a)},
mI:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
q0:function(a,b,c){return H.ci(a["$a"+H.l(c)],H.bR(b))},
bQ:function(a,b,c,d){var u
H.G(c)
H.ai(d)
u=H.ci(a["$a"+H.l(c)],H.bR(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.G(b)
H.ai(c)
u=H.ci(a["$a"+H.l(b)],H.bR(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ai(b)
u=H.bR(a)
return u==null?null:u[b]},
kK:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cj(a[0].name)+H.lh(a,1,b)
if(typeof a=="function")return H.cj(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.oE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.b.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.P)o+=" extends "+H.bP(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bP(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bP(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bP(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oT(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.G(u[g])
i=i+h+H.bP(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lh:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
ci:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dc:function(a,b,c,d){var u,t
H.G(b)
H.kB(c)
H.G(d)
if(a==null)return!1
u=H.bR(a)
t=J.X(a)
if(t[b]==null)return!1
return H.mD(H.ci(t[d],u),null,c,null)},
k:function(a,b,c,d){H.G(b)
H.kB(c)
H.G(d)
if(a==null)return a
if(H.dc(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cj(b.substring(2))+H.lh(c,0,null),v.mangledGlobalNames)))},
mD:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
pZ:function(a,b,c){return a.apply(b,H.ci(J.X(b)["$a"+H.l(c)],H.bR(b)))},
mK:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="L"||a===-1||a===-2||H.mK(u)}return!1},
lj:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="L"||b===-1||b===-2||H.mK(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fi(a,b)}u=J.X(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lj(a,b))throw H.c(H.aY(a,H.kK(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mv(a,b,c,d)
if('func' in a)return c.name==="bC"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aJ("type" in a?a.type:null,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cv" in t.prototype))return!1
r=t.prototype["$a"+"cv"]
q=H.ci(r,u?a.slice(1):null)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mD(H.ci(m,u),b,p,d)},
mv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aJ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aJ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aJ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aJ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p8(h,b,g,d)},
p8:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aJ(c[r],d,a[r],b))return!1}return!0},
q_:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
p6:function(a){var u,t,s,r,q,p
u=H.G($.mJ.$1(a))
t=$.ku[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kz[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.G($.mC.$2(a,u))
if(u!=null){t=$.ku[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kz[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kJ(s)
$.ku[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kz[u]=s
return s}if(q==="-"){p=H.kJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mN(a,s)
if(q==="*")throw H.c(P.iX(u))
if(v.leafTags[u]===true){p=H.kJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mN(a,s)},
mN:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lp(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kJ:function(a){return J.lp(a,!1,null,!!a.$iK)},
p7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kJ(u)
else return J.lp(u,c,null,null)},
p1:function(){if(!0===$.lo)return
$.lo=!0
H.p2()},
p2:function(){var u,t,s,r,q,p,o,n
$.ku=Object.create(null)
$.kz=Object.create(null)
H.p0()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mP.$1(q)
if(p!=null){o=H.p7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p0:function(){var u,t,s,r,q,p,o
u=C.a1()
u=H.cc(C.Z,H.cc(C.a3,H.cc(C.D,H.cc(C.D,H.cc(C.a2,H.cc(C.a_,H.cc(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mJ=new H.kw(q)
$.mC=new H.kx(p)
$.mP=new H.ky(o)},
cc:function(a,b){return a(b)||b},
nE:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pf:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lr:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fE:function fE(){},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i2:function i2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hR:function hR(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
kP:function kP(a){this.a=a},
eV:function eV(a){this.a=a
this.b=null},
co:function co(){},
iy:function iy(){},
ip:function ip(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(a){this.a=a},
fA:function fA(a){this.a=a},
i9:function i9(a){this.a=a},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hl:function hl(a,b){this.a=a
this.$ti=b},
hm:function hm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function(a){return a},
nM:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ce(b,a))},
oC:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oR(a,b,c))
return b},
cB:function cB(){},
bG:function bG(){},
dR:function dR(){},
cC:function cC(){},
dS:function dS(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
dT:function dT(){},
cD:function cD(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
oT:function(a){return J.lM(a?Object.keys(a):[],null)},
pa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fk:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lo==null){H.p1()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.iX("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lt()]
if(q!=null)return q
q=H.p6(a)
if(q!=null)return q
if(typeof a=="function")return C.a4
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.lt(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kT(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.lM(new Array(a),b)},
lM:function(a,b){return J.hc(H.d(a,[b]))},
hc:function(a){H.kB(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dD.prototype
return J.he.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.dE.prototype
if(typeof a=="boolean")return J.hd.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.P)return a
return J.fk(a)},
oV:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.P)return a
return J.fk(a)},
cg:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.P)return a
return J.fk(a)},
fj:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.P)return a
return J.fk(a)},
oW:function(a){if(typeof a=="number")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bN.prototype
return a},
oX:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bN.prototype
return a},
dd:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bN.prototype
return a},
ac:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.P)return a
return J.fk(a)},
nb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oV(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).v(a,b)},
lw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oX(a).F(a,b)},
nc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oW(a).t(a,b)},
lx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cg(a).j(a,b)},
kQ:function(a,b,c){return J.fj(a).n(a,b,c)},
nd:function(a,b){return J.dd(a).H(a,b)},
fm:function(a,b){return J.ac(a).it(a,b)},
kR:function(a,b,c){return J.ac(a).ix(a,b,c)},
ne:function(a,b,c,d){return J.ac(a).jp(a,b,c,d)},
ly:function(a,b){return J.ac(a).D(a,b)},
nf:function(a,b){return J.dd(a).a_(a,b)},
fn:function(a,b){return J.fj(a).K(a,b)},
ng:function(a,b,c,d){return J.ac(a).k7(a,b,c,d)},
lz:function(a,b){return J.fj(a).M(a,b)},
nh:function(a){return J.ac(a).gjA(a)},
lA:function(a){return J.ac(a).gcp(a)},
dh:function(a){return J.X(a).gJ(a)},
bw:function(a){return J.fj(a).gV(a)},
aC:function(a){return J.cg(a).gl(a)},
ni:function(a){return J.ac(a).gkR(a)},
kS:function(a,b){return J.ac(a).b0(a,b)},
lB:function(a){return J.fj(a).kH(a)},
nj:function(a,b){return J.ac(a).kL(a,b)},
nk:function(a,b,c){return J.ac(a).fc(a,b,c)},
nl:function(a,b,c){return J.dd(a).u(a,b,c)},
nm:function(a){return J.dd(a).kV(a)},
at:function(a){return J.X(a).i(a)},
a:function a(){},
hd:function hd(){},
dE:function dE(){},
dF:function dF(){},
hV:function hV(){},
bN:function bN(){},
bk:function bk(){},
aN:function aN(a){this.$ti=a},
l_:function l_(a){this.$ti=a},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bE:function bE(){},
dD:function dD(){},
he:function he(){},
bj:function bj(){}},P={
oe:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oM()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cd(new P.jo(u),1)).observe(t,{childList:true})
return new P.jn(u,t,s)}else if(self.setImmediate!=null)return P.oN()
return P.oO()},
of:function(a){self.scheduleImmediate(H.cd(new P.jp(H.n(a,{func:1,ret:-1})),0))},
og:function(a){self.setImmediate(H.cd(new P.jq(H.n(a,{func:1,ret:-1})),0))},
oh:function(a){P.l5(C.y,H.n(a,{func:1,ret:-1}))},
l5:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.on(u<0?0:u,b)},
m7:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b9]})
u=C.f.a6(a.a,1000)
return P.oo(u<0?0:u,b)},
on:function(a,b){var u=new P.f0(!0)
u.fN(a,b)
return u},
oo:function(a,b){var u=new P.f0(!1)
u.fO(a,b)
return u},
oi:function(a,b){var u,t,s
b.a=1
try{a.eR(new P.jA(b),new P.jB(b),null)}catch(s){u=H.aj(s)
t=H.ch(s)
P.pc(new P.jC(b,u,t))}},
mk:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaI")
if(u>=4){t=b.ca()
b.a=a.a
b.c=a.c
P.cZ(b,t)}else{t=H.h(b.c,"$ibe")
b.a=2
b.c=a
a.dz(t)}},
cZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.kl(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cZ(u.a,b)}t=u.a
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
if(k){H.h(m,"$iam")
t=t.b
p=m.a
o=m.b
t.toString
P.kl(null,null,t,p,o)
return}j=$.a_
if(j!=l)$.a_=l
else j=null
t=b.c
if(t===8)new P.jG(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jF(s,b,m).$0()}else if((t&2)!==0)new P.jE(u,s,b).$0()
if(j!=null)$.a_=j
t=s.b
if(!!J.X(t).$icv){if(t.a>=4){i=H.h(o.c,"$ibe")
o.c=null
b=o.bp(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mk(t,o)
return}}h=b.b
i=H.h(h.c,"$ibe")
h.c=null
b=h.bp(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.h(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
oH:function(a,b){if(H.fi(a,{func:1,args:[P.P,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.P,P.aw]})
if(H.fi(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.kT(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oG:function(){var u,t
for(;u=$.cb,u!=null;){$.db=null
t=u.b
$.cb=t
if(t==null)$.da=null
u.a.$0()}},
oL:function(){$.lf=!0
try{P.oG()}finally{$.db=null
$.lf=!1
if($.cb!=null)$.lu().$1(P.mE())}},
mz:function(a){var u=new P.en(H.n(a,{func:1,ret:-1}))
if($.cb==null){$.da=u
$.cb=u
if(!$.lf)$.lu().$1(P.mE())}else{$.da.b=u
$.da=u}},
oK:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cb
if(u==null){P.mz(a)
$.db=$.da
return}t=new P.en(a)
s=$.db
if(s==null){t.b=u
$.db=t
$.cb=t}else{t.b=s.b
s.b=t
$.db=t
if(t.b==null)$.da=t}},
pc:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a_
if(C.l===t){P.kn(null,null,C.l,a)
return}t.toString
P.kn(null,null,t,H.n(t.ck(a),u))},
m6:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a_
if(t===C.l){t.toString
return P.l5(a,b)}return P.l5(a,H.n(t.ck(b),u))},
o6:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b9]}
H.n(b,u)
t=$.a_
if(t===C.l){t.toString
return P.m7(a,b)}s=t.dR(b,P.b9)
$.a_.toString
return P.m7(a,H.n(s,u))},
kl:function(a,b,c,d,e){var u={}
u.a=d
P.oK(new P.km(u,e))},
mw:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mx:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
oI:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kn:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.ck(d):c.jB(d,-1)
P.mz(d)},
jo:function jo(a){this.a=a},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null
this.c=0},
k4:function k4(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jz:function jz(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jH:function jH(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a
this.b=null},
is:function is(){},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
it:function it(){},
b9:function b9(){},
am:function am(a,b){this.a=a
this.b=b},
ke:function ke(){},
km:function km(a,b){this.a=a
this.b=b},
jN:function jN(){},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function(a,b,c,d,e){return new H.aO([d,e])},
l2:function(a,b){return new H.aO([a,b])},
nI:function(a){return H.oU(a,new H.aO([null,null]))},
dJ:function(a,b,c,d){return new P.jL([d])},
lb:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
om:function(a,b,c){var u=new P.eC(a,b,[c])
u.c=a.e
return u},
nA:function(a,b,c){var u,t
if(P.lg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dg()
C.a.h(t,a)
try{P.oF(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.m4(b,H.mL(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
kZ:function(a,b,c){var u,t,s
if(P.lg(a))return b+"..."+c
u=new P.al(b)
t=$.dg()
C.a.h(t,a)
try{s=u
s.a=P.m4(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lg:function(a){var u,t
for(u=0;t=$.dg(),u<t.length;++u)if(a===t[u])return!0
return!1},
oF:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.C();o=n,n=m){m=u.gL(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nH:function(a,b,c){var u=P.nG(null,null,null,b,c)
a.M(0,new P.hn(u,b,c))
return u},
lN:function(a,b){var u,t,s
u=P.dJ(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.A(a[s],b))
return u},
l3:function(a){var u,t
u={}
if(P.lg(a))return"{...}"
t=new P.al("")
try{C.a.h($.dg(),a)
t.a+="{"
u.a=!0
J.lz(a,new P.hr(u,t))
t.a+="}"}finally{u=$.dg()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jL:function jL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c8:function c8(a){this.a=a
this.c=this.b=null},
eC:function eC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(){},
y:function y(){},
hq:function hq(){},
hr:function hr(a,b){this.a=a
this.b=b},
af:function af(){},
k5:function k5(){},
hs:function hs(){},
ei:function ei(a,b){this.a=a
this.$ti=b},
jS:function jS(){},
eD:function eD(){},
f5:function f5(){},
o9:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oa(!1,b,c,d)
return},
oa:function(a,b,c,d){var u,t,s
u=$.n3()
if(u==null)return
t=0===c
if(t&&!0)return P.l8(u,b)
s=b.length
d=P.bo(c,d,s,null,null,null)
if(t&&d===s)return P.l8(u,b)
return P.l8(u,b.subarray(c,d))},
l8:function(a,b){if(P.oc(b))return
return P.od(a,b)},
od:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
oc:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
ob:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
oJ:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cg(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bQ()
if((s&127)!==s)return t-b}return c-b},
lD:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
bV:function bV(){},
bA:function bA(){},
fU:function fU(){},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(a){this.a=a},
j5:function j5(a){this.a=a},
j7:function j7(){},
kc:function kc(a){this.b=this.a=0
this.c=a},
j6:function j6(a){this.a=a},
ka:function ka(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.nW(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nx:function(a){if(a instanceof H.co)return a.i(0)
return"Instance of '"+H.c3(a)+"'"},
nJ:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nD(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
lO:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bw(a);s.C();)C.a.h(t,H.A(s.gL(s),c))
if(b)return t
return H.k(J.hc(t),"$ib",u,"$ab")},
e4:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaN",[u],"$aaN")
t=a.length
c=P.bo(b,c,t,null,null,null)
return H.m_(b>0||c<t?C.a.fh(a,b,c):a)}if(!!J.X(a).$icD)return H.nY(a,b,P.bo(b,c,a.length,null,null,null))
return P.o4(a,b,c)},
o4:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ad(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aC(a),null,null))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.ad(b,0,s,null,null))
r=[]
if(u)for(;t.C();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.ad(c,b,s,null,null))
r.push(t.gL(t))}return H.m_(r)},
o0:function(a,b,c){return new H.hf(a,H.nE(a,!1,!0,!1))},
m4:function(a,b,c){var u=J.bw(b)
if(!u.C())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.C())}else{a+=H.l(u.gL(u))
for(;u.C();)a=a+c+H.l(u.gL(u))}return a},
ma:function(){var u=H.nO()
if(u!=null)return P.o8(u,0,null)
throw H.c(P.H("'Uri.base' is not supported"))},
f6:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.n9().b
if(typeof b!=="string")H.t(H.ax(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.as(c,"bV",0))
t=c.gk6().cq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c4(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nt:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ds:function(a){if(a>=10)return""+a
return"0"+a},
lJ:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nx(a)},
fq:function(a){return new P.aK(!1,null,null,a)},
kT:function(a,b,c){return new P.aK(!0,a,b,c)},
e_:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c,d,e,f){if(typeof a!=="number")return H.I(a)
if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",f))
return b}return c},
Y:function(a,b,c,d,e){var u=H.ai(e==null?J.aC(b):e)
return new P.ha(b,u,!0,a,c,"Index out of range")},
H:function(a){return new P.iZ(a)},
iX:function(a){return new P.iW(a)},
m3:function(a){return new P.c7(a)},
bh:function(a){return new P.fD(a)},
w:function(a){return new P.ev(a)},
a7:function(a,b,c){return new P.h4(a,b,c)},
nK:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lq:function(a){H.pa(a)},
o8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(t===0)return P.m9(b>0||c<c?C.b.u(a,b,c):a,5,null).geX()
else if(t===32)return P.m9(C.b.u(a,u,c),0,null).geX()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.n(r,0,0)
s=b-1
C.a.n(r,1,s)
C.a.n(r,2,s)
C.a.n(r,7,s)
C.a.n(r,3,b)
C.a.n(r,4,b)
C.a.n(r,5,c)
C.a.n(r,6,c)
if(P.my(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l3()
if(q>=b)if(P.my(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.I(m)
if(l<m)m=l
if(typeof n!=="number")return n.Z()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Z()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Z()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.ac(a,"..",n)))i=m>n+2&&C.b.ac(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.ac(a,"file",b)){if(p<=b){if(!C.b.ac(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aY(a,n,m,"/");++m;++l;++c}else{a=C.b.u(a,b,n)+"/"+C.b.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.ac(a,"http",b)){if(s&&o+3===n&&C.b.ac(a,"80",o+1))if(b===0&&!0){a=C.b.aY(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.u(a,b,o)+C.b.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.ac(a,"https",b)){if(s&&o+4===n&&C.b.ac(a,"443",o+1))if(b===0&&!0){a=C.b.aY(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.u(a,b,o)+C.b.u(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jV(a,q,p,o,n,m,l,j)}return P.op(a,b,c,q,p,o,n,m,l,j)},
mc:function(a,b){var u=P.e
return C.a.kc(H.d(a.split("&"),[u]),P.l2(u,u),new P.j3(b),[P.E,P.e,P.e])},
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.j0(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.a_(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fl(C.b.u(a,q,r),null,null)
if(typeof n!=="number")return n.f9()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fl(C.b.u(a,q,c),null,null)
if(typeof n!=="number")return n.f9()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j1(a)
t=new P.j2(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a_(a,r)
if(n===58){if(r===b){++r
if(C.b.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o7(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aT(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
op:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.ow(a,b,d)
else{if(d===b)P.d7(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ox(a,u,e-1):""
s=P.ot(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.I(g)
q=r<g?P.ov(P.fl(C.b.u(a,r,g),new P.k6(a,f),null),j):null}else{t=""
s=null
q=null}p=P.ou(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lc(a,h+1,i,null):null
return new P.c9(j,t,s,q,p,o,i<c?P.os(a,i+1,c):null)},
mo:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d7:function(a,b,c){throw H.c(P.a7(c,a,b))},
ov:function(a,b){if(a!=null&&a===P.mo(b))return
return a},
ot:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a_(a,u)!==93)P.d7(a,b,"Missing end `]` to match `[` in host")
P.mb(a,b+1,u)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.I(c)
t=b
for(;t<c;++t)if(C.b.a_(a,t)===58){P.mb(a,b,c)
return"["+a+"]"}return P.oz(a,b,c)},
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.I(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a_(a,u)
if(q===37){p=P.mu(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.d7(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mp(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ow:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mr(C.b.H(a,b)))P.d7(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d7(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.oq(t?a.toLowerCase():a)},
oq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ox:function(a,b,c){return P.d8(a,b,c,C.a7,!1)},
ou:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.d8(a,b,c,C.K,!0):C.q.l4(d,new P.k7(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a5(r,"/"))r="/"+r
return P.oy(r,e,f)},
oy:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oA(a,!u||c)
return P.oB(a)},
lc:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.fq("Both query and queryParameters specified"))
return P.d8(a,b,c,C.t,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.M(0,new P.k8(new P.k9(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
os:function(a,b,c){return P.d8(a,b,c,C.t,!0)},
mu:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.a_(a,b+1)
s=C.b.a_(a,u)
r=H.kv(t)
q=H.kv(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aT(p,4)
if(u>=8)return H.f(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c4(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
mp:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iM(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.H("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.b.H("0123456789ABCDEF",p&15))
q+=3}}return P.e4(t,0,null)},
d8:function(a,b,c,d,e){var u=P.mt(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.u(a,b,c):u},
mt:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.I(c)
if(!(t<c))break
c$0:{q=C.b.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mu(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d7(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mp(q)}}if(r==null)r=new P.al("")
r.a+=C.b.u(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.I(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
ms:function(a){if(C.b.a5(a,"."))return!0
return C.b.eq(a,"/.")!==-1},
oB:function(a){var u,t,s,r,q,p,o
if(!P.ms(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oA:function(a,b){var u,t,s,r,q,p
if(!P.ms(a))return!b?P.mq(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.n(u,0,P.mq(u[0]))}return C.a.m(u,"/")},
mq:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mr(J.nd(a,0)))for(t=1;t<u;++t){s=C.b.H(a,t)
if(s===58)return C.b.u(a,0,t)+"%3A"+C.b.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
or:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fq("Invalid URL encoding"))}}return u},
ld:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.b.u(a,b,c)
else q=new H.v(C.b.u(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.b.H(a,t)
if(s>127)throw H.c(P.fq("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.fq("Truncated URI"))
C.a.h(q,P.or(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.j6(!1).cq(q)},
mr:function(a){var u=a|32
return 97<=u&&u<=122},
m9:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.b.ac(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kp(0,a,n,t)
else{m=P.mt(a,n,t,C.t,!0)
if(m!=null)a=C.b.aY(a,n,t,m)}return new P.j_(a,u,c)},
oD:function(){var u,t,s,r,q
u=P.nK(22,new P.ki(),!0,P.R)
t=new P.kh(u)
s=new P.kj()
r=new P.kk()
q=H.h(t.$2(0,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(14,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(15,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(1,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(2,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(3,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(4,229),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(5,229),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(6,231),"$iR")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(7,231),"$iR")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.h(t.$2(8,8),"$iR"),"]",5)
q=H.h(t.$2(9,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(16,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(17,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(10,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(18,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(19,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(11,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(12,236),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.h(t.$2(13,237),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.h(t.$2(20,245),"$iR"),"az",21)
q=H.h(t.$2(21,245),"$iR")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
my:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.na()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
S:function S(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
b1:function b1(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
bB:function bB(){},
dV:function dV(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
c7:function c7(a){this.a=a},
fD:function fD(a){this.a=a},
hU:function hU(){},
e3:function e3(){},
fK:function fK(a){this.a=a},
ev:function ev(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(){},
o:function o(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
E:function E(){},
L:function L(){},
a5:function a5(){},
P:function P(){},
aw:function aw(){},
e:function e(){},
al:function al(a){this.a=a},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(){},
k9:function k9(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(){},
kh:function kh(a){this.a=a},
kj:function kj(){},
kk:function kk(){},
jV:function jV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ju:function ju(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
bp:function(a){var u,t,s,r,q
if(a==null)return
u=P.l2(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.G(t[r])
u.n(0,q,a[q])}return u},
oP:function(a,b){var u={}
a.M(0,new P.ko(u))
return u},
jX:function jX(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
jY:function jY(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(){},
jK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ol:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jM:function jM(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hi:function hi(){},
b6:function b6(){},
hS:function hS(){},
hZ:function hZ(){},
cG:function cG(){},
iw:function iw(){},
q:function q(){},
ba:function ba(){},
iJ:function iJ(){},
eA:function eA(){},
eB:function eB(){},
eL:function eL(){},
eM:function eM(){},
eX:function eX(){},
eY:function eY(){},
f3:function f3(){},
f4:function f4(){},
R:function R(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
bS:function bS(){},
hT:function hT(){},
eo:function eo(){},
dk:function dk(){},
dz:function dz(){},
dY:function dY(){},
c6:function c6(){},
e1:function e1(){},
eg:function eg(){},
io:function io(){},
eT:function eT(){},
eU:function eU(){}},W={
lC:function(a){var u=document.createElement("a")
return u},
lG:function(a,b){var u=document.createElement("canvas")
return u},
nv:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ag(u,a,b,c)
t.toString
u=W.F
u=new H.cW(new W.ar(t),H.n(new W.fT(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaM(u),"$iT")},
nw:function(a){H.h(a,"$ij")
return"wheel"},
cs:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ni(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aj(s)}return u},
nz:function(a){var u,t,s
t=document.createElement("input")
u=H.h(t,"$icy")
try{u.type=a}catch(s){H.aj(s)}return u},
jJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mm:function(a,b,c,d){var u,t
u=W.jJ(W.jJ(W.jJ(W.jJ(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ae:function(a,b,c,d,e){var u=W.mB(new W.jy(c),W.p)
if(u!=null&&!0)J.ne(a,b,u,!1)
return new W.jx(a,b,u,!1,[e])},
ml:function(a){var u,t
u=W.lC(null)
t=window.location
u=new W.bO(new W.jR(u,t))
u.fz(a)
return u},
oj:function(a,b,c,d){H.h(a,"$iT")
H.G(b)
H.G(c)
H.h(d,"$ibO")
return!0},
ok:function(a,b,c,d){var u,t,s
H.h(a,"$iT")
H.G(b)
H.G(c)
u=H.h(d,"$ibO").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mn:function(){var u,t,s,r,q
u=P.e
t=P.lN(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.k2(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.k1(t,P.dJ(null,null,null,u),P.dJ(null,null,null,u),P.dJ(null,null,null,u),null)
t.fK(null,new H.hv(C.A,r,[s,u]),q,null)
return t},
mB:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.l)return a
return u.dR(a,b)},
z:function z(){},
fo:function fo(){},
di:function di(){},
fp:function fp(){},
cl:function cl(){},
bT:function bT(){},
bx:function bx(){},
bU:function bU(){},
by:function by(){},
cp:function cp(){},
fG:function fG(){},
V:function V(){},
cq:function cq(){},
fH:function fH(){},
b_:function b_(){},
b0:function b0(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
aD:function aD(){},
cr:function cr(){},
fN:function fN(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
fO:function fO(){},
fP:function fP(){},
js:function js(a,b){this.a=a
this.b=b},
T:function T(){},
fT:function fT(){},
p:function p(){},
j:function j(){},
aE:function aE(){},
cu:function cu(){},
h_:function h_(){},
h3:function h3(){},
aM:function aM(){},
dA:function dA(){},
dB:function dB(){},
bZ:function bZ(){},
dC:function dC(){},
cx:function cx(){},
cy:function cy(){},
b3:function b3(){},
dH:function dH(){},
dK:function dK(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
aP:function aP(){},
hH:function hH(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
F:function F(){},
cE:function cE(){},
aR:function aR(){},
hX:function hX(){},
dZ:function dZ(){},
i7:function i7(){},
i8:function i8(a){this.a=a},
ia:function ia(){},
aS:function aS(){},
il:function il(){},
aT:function aT(){},
im:function im(){},
aU:function aU(){},
iq:function iq(){},
ir:function ir(a){this.a=a},
aF:function aF(){},
b8:function b8(){},
e5:function e5(){},
e6:function e6(){},
ix:function ix(){},
cK:function cK(){},
aV:function aV(){},
aG:function aG(){},
iz:function iz(){},
iA:function iA(){},
iD:function iD(){},
aW:function aW(){},
aX:function aX(){},
iH:function iH(){},
iI:function iI(){},
bM:function bM(){},
j4:function j4(){},
jk:function jk(){},
bd:function bd(){},
cX:function cX(){},
cY:function cY(){},
jt:function jt(){},
eq:function eq(){},
jI:function jI(){},
eI:function eI(){},
jW:function jW(){},
k_:function k_(){},
jr:function jr(){},
jv:function jv(a){this.a=a},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jx:function jx(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jy:function jy(a){this.a=a},
bO:function bO(a){this.a=a},
D:function D(){},
dU:function dU(a){this.a=a},
hP:function hP(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(){},
jT:function jT(){},
jU:function jU(){},
k1:function k1(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k2:function k2(){},
k0:function k0(){},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aA:function aA(){},
jR:function jR(a,b){this.a=a
this.b=b},
f7:function f7(a){this.a=a},
kd:function kd(a){this.a=a},
ep:function ep(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
d3:function d3(){},
d4:function d4(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
d5:function d5(){},
d6:function d6(){},
f1:function f1(){},
f2:function f2(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){}},O={
kV:function(a){var u=new O.a6([a])
u.bW(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cA:function cA(){this.b=this.a=null},
lP:function(){var u,t,s
u=new O.dN()
u.sfV(O.kV(V.ao))
u.e.bj(u.ghz(),u.ghB())
t=new O.b5(u,"emission")
t.c=C.d
t.f=new V.a1(0,0,0)
u.f=t
t=new O.b5(u,"ambient")
t.c=C.d
t.f=new V.a1(0,0,0)
u.r=t
t=new O.b5(u,"diffuse")
t.c=C.d
t.f=new V.a1(0,0,0)
u.x=t
t=new O.b5(u,"invDiffuse")
t.c=C.d
t.f=new V.a1(0,0,0)
u.y=t
t=new O.hB(u,"specular")
t.c=C.d
t.f=new V.a1(0,0,0)
t.ch=100
u.z=t
t=new O.hy(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b5(u,"reflect")
t.c=C.d
t.f=new V.a1(0,0,0)
u.cx=t
t=new O.hA(u,"refract")
t.c=C.d
t.f=new V.a1(0,0,0)
t.ch=1
u.cy=t
t=new O.hx(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dI()
t.bW(D.a8)
t.sfB(H.d([],[D.dt]))
t.sfC(H.d([],[D.dX]))
t.sfD(H.d([],[D.bK]))
t.sfE(H.d([],[D.e9]))
t.sfF(H.d([],[D.ea]))
t.sfG(H.d([],[D.eb]))
t.Q=null
t.ch=null
t.cX(t.ghx(),t.gi9(),t.gie())
u.dx=t
s=t.Q
if(s==null){s=D.a0()
t.Q=s
t=s}else t=s
t.h(0,u.giA())
t=u.dx
s=t.ch
if(s==null){s=D.a0()
t.ch=s
t=s}else t=s
t.h(0,u.gfL())
u.dy=null
return u},
dN:function dN(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dO:function dO(){},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hB:function hB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bL:function bL(){}},E={
kX:function(a,b,c,d,e,f){var u=new E.an()
u.a=d
u.b=!0
u.sfw(0,O.kV(E.an))
u.y.bj(u.gkq(),u.gkt())
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
u.saW(c)
return u},
o1:function(a,b){var u=new E.i3(a,b)
u.fq(a,b)
return u},
o5:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibU)return E.m5(a,!0,!0,!0,!1)
t=W.lG(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcp(a).h(0,t)
r=E.m5(t,!0,!0,!0,!1)
r.a=a
return r},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ec()
t=H.h(C.x.f4(a,"webgl2",P.nI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic6")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o1(t,a)
s=new T.iB(t)
s.b=H.ai((t&&C.c).cV(t,3379))
s.c=H.ai(C.c.cV(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ej(a)
r=new X.hh()
r.c=new X.aQ(!1,!1,!1)
r.sip(P.dJ(null,null,null,P.o))
s.b=r
r=new X.hI(s)
r.f=0
r.r=V.bI()
r.x=V.bI()
r.Q=1
r.ch=1
s.c=r
r=new X.hp(s)
r.r=0
r.x=V.bI()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iG(s)
r.e=0
r.f=V.bI()
r.r=V.bI()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sh6(H.d([],[[P.cJ,P.P]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ae(q,"contextmenu",H.n(s.ghL(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ae(a,"focus",H.n(s.ghR(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ae(a,"blur",H.n(s.ghD(),m),!1,n))
r=s.z
l=W.b3
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ae(q,"keyup",H.n(s.ghV(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ae(q,"keydown",H.n(s.ghT(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ae(a,"mousedown",H.n(s.ghZ(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ae(a,"mouseup",H.n(s.gi2(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ae(a,"mousemove",H.n(s.gi0(),o),!1,p))
l=s.z
k=W.bd;(l&&C.a).h(l,W.ae(a,H.G(W.nw(a)),H.n(s.gi4(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ae(q,"mousemove",H.n(s.ghN(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ae(q,"mouseup",H.n(s.ghP(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ae(q,"pointerlockchange",H.n(s.gi6(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ae(a,"touchstart",H.n(s.gil(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ae(a,"touchend",H.n(s.gih(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ae(a,"touchmove",H.n(s.gij(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ay(Date.now(),!1)
u.cy=0
u.dB()
return u},
fy:function fy(){},
an:function an(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
ec:function ec(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iC:function iC(a){this.a=a}},Z={
l9:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.c.aw(a,b,u)
C.c.dT(a,b,new Int16Array(H.ca(c)),35044)
C.c.aw(a,b,null)
return new Z.em(b,u)},
aH:function(a){return new Z.bc(a)},
em:function em(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jl:function jl(a){this.a=a},
dm:function dm(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
a0:function(){var u=new D.bX()
u.sak(null)
u.saR(null)
u.c=null
u.d=0
return u},
fB:function fB(){},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
c_:function c_(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c0:function c0(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
Q:function Q(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
dt:function dt(){},
a8:function a8(){},
dI:function dI(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dX:function dX(){},
bK:function bK(){var _=this
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){}},X={dn:function dn(a,b){this.a=a
this.b=b},dG:function dG(a,b){this.a=a
this.b=b},hh:function hh(){var _=this
_.d=_.c=_.b=_.a=null},dL:function dL(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hp:function hp(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},bF:function bF(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hI:function hI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hY:function hY(){},ee:function ee(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iG:function iG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ej:function ej(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ny:function(a,b,c,d,e,f,g){var u,t
u=new X.h5()
t=new V.aL(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.m1
if(t==null){t=V.m0(0,0,1,1)
$.m1=t}u.r=t
return u},
dp:function dp(){},
h5:function h5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){}},V={
ph:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.e.eS(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cf:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.n(u,p,C.b.ai(u[p],s))}return u},
dQ:function(){var u=$.lT
if(u==null){u=V.bm(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lT=u}return u},
bm:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lS:function(a,b,c){return V.bm(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lR:function(a,b,c,d){return V.bm(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lQ:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bm(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bI:function(){var u=$.lX
if(u==null){u=new V.aa(0,0)
$.lX=u}return u},
lY:function(){var u=$.bJ
if(u==null){u=new V.a2(0,0,0)
$.bJ=u}return u},
m0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e0(a,b,c,d)},
cV:function(){var u=$.mi
if(u==null){u=new V.J(0,0,0)
$.mi=u}return u},
mj:function(){var u=$.j8
if(u==null){u=new V.J(0,0,1)
$.j8=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a){this.a=a},
dP:function dP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.H(a,0)
t=C.b.H(b,0)
s=new V.i1()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ib()
u.fs(a)
return u},
iF:function(){var u,t
u=new V.iE()
t=P.e
u.siO(new H.aO([t,V.cI]))
u.siQ(new H.aO([t,V.cL]))
u.c=null
return u},
bg:function bg(){},
az:function az(){},
dM:function dM(){},
av:function av(){this.a=null},
i1:function i1(){this.b=this.a=null},
ib:function ib(){this.a=null},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b){this.a=a
this.b=b
this.c=null},
iE:function iE(){this.c=this.b=this.a=null},
cM:function cM(a){this.b=a
this.a=this.c=null},
pd:function(a){P.o6(C.U,new V.kL(a))},
o3:function(a,b){var u=new V.ig()
u.fu(a,!0)
return u},
bz:function bz(){},
kL:function kL(a){this.a=a},
fL:function fL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i_:function i_(a,b){this.a=a
this.b=b
this.c=null},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(){this.b=this.a=null},
ii:function ii(a){this.a=a},
ih:function ih(a){this.a=a},
ij:function ij(a){this.a=a}},U={
lI:function(){var u=new U.fC()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
dr:function(a){var u=new U.dq()
u.a=a
return u},
kY:function(a){var u=new U.cw()
u.bW(U.ak)
u.bj(u.gfH(),u.gib())
u.e=null
u.f=V.dQ()
u.r=0
return u},
md:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.ek()
t=U.lI()
t.sf_(0,!0)
t.sev(6.283185307179586)
t.sex(0)
t.sa4(0,0)
t.sew(100)
t.sa2(0)
t.sdV(0.5)
u.b=t
s=u.gbm()
t.gE().h(0,s)
t=U.lI()
t.sf_(0,!0)
t.sev(6.283185307179586)
t.sex(0)
t.sa4(0,0)
t.sew(100)
t.sa2(0)
t.sdV(0.5)
u.c=t
t.gE().h(0,s)
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
r=new X.aQ(b,!1,!1)
q=u.d
u.d=r
t=new D.Q("modifiers",q,r,u,[X.aQ])
t.b=!0
u.a0(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.Q("invertX",t,!1,u,[P.S])
t.b=!0
u.a0(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.Q("invertY",t,!1,u,[P.S])
t.b=!0
u.a0(t)}u.jz(c)
return u},
fC:function fC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){this.b=this.a=null},
cw:function cw(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
ek:function ek(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dx:function dx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nL:function(a,b){var u,t
u=a.am
t=new A.hw(b,u)
t.ft(b,u)
t.fp(a,b)
return t},
l6:function(a,b,c,d,e){var u=new A.iO(a,b,c,e)
u.f=d
u.sj0(P.nJ(d,0,!1,P.o))
return u},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a){this.a=a},
hw:function hw(a,b){var _=this
_.bw=_.dY=_.bv=_.am=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ed=_.cu=_.ec=_.bJ=_.eb=_.ea=_.bI=_.bH=_.e9=_.e8=_.bG=_.bF=_.bE=_.e7=_.e6=_.bD=_.e5=_.e4=_.bC=_.e3=_.e2=_.bB=_.bA=_.e1=_.e0=_.bz=_.by=_.e_=_.dZ=_.bx=null
_.cB=_.eh=_.cA=_.eg=_.cz=_.ef=_.cw=_.ee=_.cv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.am=b4
_.bv=b5},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cP:function cP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cS:function cS(a,b,c,d,e,f,g,h,i,j){var _=this
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
cQ:function cQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cT:function cT(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cH:function cH(){},
bW:function bW(a,b){this.a=a
this.b=b},
ef:function ef(){},
iU:function iU(a){this.a=a},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ll:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.l4()
F.d9(u,b,c,d,a,1,0,0,1)
F.d9(u,b,c,d,a,0,1,0,3)
F.d9(u,b,c,d,a,0,0,1,2)
F.d9(u,b,c,d,a,-1,0,0,0)
F.d9(u,b,c,d,a,0,-1,0,0)
F.d9(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
kg:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d9:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.J(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.J(o+a3,n+a1,m+a2)
u.b=l
k=new V.J(o-a3,n-a1,m-a2)
u.c=k
j=new V.J(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.kg(t)
f=F.kg(u.b)
e=F.ls(d,a0,new F.kf(u,F.kg(u.c),F.kg(u.d),f,g,c),b)
if(e!=null)a.bc(e)},
mG:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.l4()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ah])
q=u.a
p=new V.J(0,0,t)
p=p.B(0,Math.sqrt(p.I(p)))
C.a.h(r,q.js(new V.b7(a,-1,-1,-1),new V.aL(1,1,1,1),new V.a2(0,0,d),new V.J(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.I(k)
j=new V.J(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.el(new V.b7(a,-1,-1,-1),null,new V.aL(i,g,h,1),new V.a2(m*k,l*k,d),new V.J(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jq(r)
return u},
lm:function(a,b,c,d,e,f){return F.oQ(b,c,d,new F.kp(a,f),e)},
oQ:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.ls(c,e,new F.kr(d),null)
if(u==null)return
u.ax()
u.cj()
if(b)u.bc(F.mG(3,!1,!1,1,new F.ks(d),e))
if(a)u.bc(F.mG(1,!0,!1,-1,new F.kt(d),e))
return u},
pe:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kM()
t=F.ll(a,null,new F.kN(u,c),d)
t.cj()
return t},
mR:function(a,b,c,d){return F.mF(c,a,d,b,new F.kO())},
p5:function(a,b,c,d,e,f){return F.mF(d,a,e,b,new F.kA(f,c))},
mF:function(a,b,c,d,e){var u=F.ls(a,b,new F.kq(H.n(e,{func:1,ret:V.a2,args:[P.r]}),d,b,c),null)
if(u==null)return
u.ax()
u.cj()
return u},
ls:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.l4()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.el(null,null,new V.aL(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
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
o=F.el(null,null,new V.aL(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.jr(a+1,b+1,t)
return u},
ct:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cg(a)
u.ci(b)
u.iH(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
nF:function(a,b){var u,t
u=new F.bl()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cg(a)
u.ci(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
l4:function(){var u,t
u=new F.e2()
t=new F.j9(u)
t.b=!1
t.sj1(H.d([],[F.ah]))
u.a=t
t=new F.ie(u)
t.sc8(H.d([],[F.bH]))
u.b=t
t=new F.id(u)
t.shh(H.d([],[F.bl]))
u.c=t
t=new F.ic(u)
t.sh7(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
el:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ah()
t=new F.jh(u)
t.sc8(H.d([],[F.bH]))
u.b=t
t=new F.jd(u)
s=[F.bl]
t.shi(H.d([],s))
t.shj(H.d([],s))
u.c=t
t=new F.ja(u)
s=[F.a9]
t.sh8(H.d([],s))
t.sh9(H.d([],s))
t.sha(H.d([],s))
u.d=t
h=$.n4()
u.e=0
t=$.bt()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bs().a)!==0?e:null
u.x=(s&$.br().a)!==0?b:null
u.y=(s&$.bu().a)!==0?f:null
u.z=(s&$.bv().a)!==0?g:null
u.Q=(s&$.n5().a)!==0?c:null
u.ch=(s&$.ck().a)!==0?i:0
u.cx=(s&$.bq().a)!==0?a:null
return u},
kf:function kf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kp:function kp(a,b){this.a=a
this.b=b},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
kM:function kM(){},
kN:function kN(a,b){this.a=a
this.b=b},
kO:function kO(){},
kA:function kA(a,b){this.a=a
this.b=b},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){},
ik:function ik(){},
bl:function bl(){this.b=this.a=null},
hj:function hj(){},
iN:function iN(){},
bH:function bH(){this.a=null},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){this.a=a
this.b=null},
id:function id(a){this.a=a
this.b=null},
ie:function ie(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jj:function jj(a){this.a=a},
ji:function ji(a){this.a=a},
j9:function j9(a){this.a=a
this.c=this.b=null},
ja:function ja(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a
this.c=this.b=null},
jf:function jf(){},
je:function je(){},
jg:function jg(){},
hQ:function hQ(){},
jh:function jh(a){this.a=a
this.b=null}},T={e8:function e8(){},iB:function iB(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},N={
mM:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.o3("Test 024",!0)
t=W.lG(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.D(u.a,t)
s=[P.e]
u.dK(H.d(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],s))
u.jo(H.d(["shapes"],s))
u.dK(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.cU(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.o5(r,!0,!0,!0,!1)
p=U.kY(null)
p.h(0,U.dr(V.lS(0,0,-2.5)))
p.h(0,U.md(!1,!0,q.r,!1,!1,!1,null,!1))
o=new V.a1(1,1,1)
n=new D.bK()
n.d=new V.a1(1,1,1)
n.e=3.141592653589793
n.f=3.141592653589793
n.r=1
n.x=0
n.y=0
n.a=V.lY()
n.b=V.mj()
m=n.c
n.c=p
p.gE().h(0,n.ghF())
l=new D.Q("mover",m,n.c,n,[U.ak])
l.b=!0
n.a9(l)
if(!n.d.v(0,o)){m=n.d
n.d=o
l=new D.Q("color",m,o,n,[V.a1])
l.b=!0
n.a9(l)}l=n.e
if(!(Math.abs(l-0.6)<$.N().a)){n.e=0.6
l=new D.Q("cutoff",l,0.6,n,[P.r])
l.b=!0
n.a9(l)}l=n.f
if(!(Math.abs(l-0.5)<$.N().a)){n.f=0.5
l=new D.Q("coneAngle",l,0.5,n,[P.r])
l.b=!0
n.a9(l)}l=n.r
if(!(Math.abs(l-0.5)<$.N().a)){n.r=0.5
l=new D.Q("attenuation0",l,0.5,n,[P.r])
l.b=!0
n.a9(l)}l=n.x
if(!(Math.abs(l-0.05)<$.N().a)){n.x=0.05
l=new D.Q("attenuation1",l,0.05,n,[P.r])
l.b=!0
n.a9(l)}k=O.lP()
k.dx.h(0,n)
k.f.saf(0,new V.a1(0,0,0))
l=k.r
l.saf(0,new V.a1(0,0,0))
l=k.x
l.saf(0,new V.a1(0.7,0.7,0.7))
l=k.z
l.saf(0,new V.a1(0.3,0.3,0.3))
l=k.z
if(l.c===C.d){l.c=C.j
l.bV()
l.cd(100)
j=l.a
j.a=null
j.ad(null)}l.cd(100)
i=E.kX(null,!0,null,"",null,null)
i.sab(0,F.mR(30,1,15,0.5))
h=E.kX(null,!0,null,"",null,null)
h.saW(U.dr(V.lR(3,3,3,1)))
l=F.ll(1,null,null,1)
l.cC()
h.sab(0,l)
g=U.kY(null)
g.h(0,U.md(!1,!1,q.r,!1,!1,!1,null,!1))
g.h(0,U.dr(V.lQ(3.141592653589793)))
g.h(0,U.dr(V.lS(0,0,5)))
f=E.kX(null,!0,null,"",null,null)
l=U.kY(null)
l.h(0,U.dr(V.lR(0.1,0.1,0.1,1)))
l.h(0,p)
f.saW(l)
f.sab(0,F.lm(0,!1,!0,1,40,1))
l=O.lP()
l.f.saf(0,new V.a1(1,1,1))
f.sbf(l)
l=new M.dx()
l.sfY(0,O.kV(E.an))
l.d.bj(l.ghH(),l.ghJ())
l.e=null
l.f=null
l.r=null
l.x=null
e=X.ny(!0,!0,!1,null,2000,null,0)
d=new X.dW()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saW(null)
j=d.c
if(!(Math.abs(j-1.0471975511965976)<$.N().a)){d.c=1.0471975511965976
j=new D.Q("fov",j,1.0471975511965976,d,[P.r])
j.b=!0
d.aO(j)}j=d.d
if(!(Math.abs(j-0.1)<$.N().a)){d.d=0.1
j=new D.Q("near",j,0.1,d,[P.r])
j.b=!0
d.aO(j)}j=d.e
if(!(Math.abs(j-2000)<$.N().a)){d.e=2000
j=new D.Q("far",j,2000,d,[P.r])
j.b=!0
d.aO(j)}j=l.a
if(j!==d){if(j!=null)j.gE().O(0,l.gas())
m=l.a
l.a=d
d.gE().h(0,l.gas())
j=new D.Q("camera",m,l.a,l,[X.dp])
j.b=!0
l.aD(j)}j=l.b
if(j!==e){if(j!=null)j.gE().O(0,l.gas())
m=l.b
l.b=e
e.gE().h(0,l.gas())
j=new D.Q("target",m,l.b,l,[X.e7])
j.b=!0
l.aD(j)}l.sbf(null)
l.sbf(k)
l.d.h(0,i)
l.d.h(0,h)
l.d.h(0,f)
l.a.saW(g)
j=q.d
if(j!==l){if(j!=null)j.gE().O(0,q.gd_())
q.d=l
l.gE().h(0,q.gd_())
q.d0()}l=new V.i_("shapes",!0)
s=C.z.cU(s,"shapes")
l.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
l.b5(0,"Cube",new N.kC(i))
l.b5(0,"Cylinder",new N.kD(i))
l.b5(0,"Cone",new N.kE(i))
l.b5(0,"Sphere",new N.kF(i))
l.dI(0,"Toroid",new N.kG(i),!0)
l.b5(0,"Knot",new N.kH(i))
s=q.z
if(s==null){s=D.a0()
q.z=s}l={func:1,ret:-1,args:[D.B]}
j=H.n(new N.kI(u,k),l)
if(s.b==null)s.saR(H.d([],[l]))
s=s.b;(s&&C.a).h(s,j)
V.pd(q)},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l0.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cF(a)},
i:function(a){return"Instance of '"+H.c3(a)+"'"}}
J.hd.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dE.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iL:1}
J.dF.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hV.prototype={}
J.bN.prototype={}
J.bk.prototype={
i:function(a){var u=a[$.mT()]
if(u==null)return this.fk(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibC:1}
J.aN.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.H("add"))
a.push(b)},
eM:function(a,b){if(!!a.fixed$length)H.t(P.H("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e_(b,null,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bh(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.l(a[t]))
return u.join(b)},
kk:function(a){return this.m(a,"")},
kc:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bh(a))}return t},
kb:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bh(a))}throw H.c(H.hb())},
ka:function(a,b){return this.kb(a,b,null)},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fh:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gk9:function(a){if(a.length>0)return a[0]
throw H.c(H.hb())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hb())},
ff:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.H("setRange"))
P.bo(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cg(d)
if(e+t>u.gl(d))throw H.c(H.nB())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bk:function(a,b,c,d){return this.ff(a,b,c,d,0)},
dL:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bh(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.kZ(a,"[","]")},
gV:function(a){return new J.au(a,a.length,0,[H.u(a,0)])},
gJ:function(a){return H.cF(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.H("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ce(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ce(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bk(u,0,a.length,a)
this.bk(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.l_.prototype={}
J.au.prototype={
gL:function(a){return this.d},
C:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdi(null)
return!1}this.sdi(u[s]);++this.c
return!0},
sdi:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
J.bE.prototype={
ej:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
eS:function(a,b){var u,t
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.F("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a-b},
F:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a*b},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dE(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dE(a,b)},
dE:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dD(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iM:function(a,b){if(b<0)throw H.c(H.ax(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia5:1}
J.dD.prototype={$io:1}
J.he.prototype={}
J.bj.prototype={
a_:function(a,b){if(b<0)throw H.c(H.ce(a,b))
if(b>=a.length)H.t(H.ce(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.ce(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.kT(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ax(b))
c=P.bo(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ax(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ax(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e_(b,null,null))
if(b>c)throw H.c(P.e_(b,null,null))
if(c>a.length)throw H.c(P.e_(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.u(a,b,null)},
kV:function(a){return a.toLowerCase()},
F:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ky:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.F(c,u)+a},
ai:function(a,b){return this.ky(a,b," ")},
er:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
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
gl:function(a){return a.length},
$ilV:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$acU:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fS.prototype={}
H.c1.prototype={
gV:function(a){return new H.cz(this,this.gl(this),0,[H.as(this,"c1",0)])},
bP:function(a,b){return this.fj(0,H.n(b,{func:1,ret:P.S,args:[H.as(this,"c1",0)]}))}}
H.cz.prototype={
gL:function(a){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.cg(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bh(u))
r=this.c
if(r>=s){this.sb1(null)
return!1}this.sb1(t.K(u,r));++this.c
return!0},
sb1:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.ht.prototype={
gV:function(a){return new H.hu(J.bw(this.a),this.b,this.$ti)},
gl:function(a){return J.aC(this.a)},
K:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ai:function(a,b){return[b]}}
H.hu.prototype={
C:function(){var u=this.b
if(u.C()){this.sb1(this.c.$1(u.gL(u)))
return!0}this.sb1(null)
return!1},
gL:function(a){return this.a},
sb1:function(a){this.a=H.A(a,H.u(this,1))},
$ab2:function(a,b){return[b]}}
H.hv.prototype={
gl:function(a){return J.aC(this.a)},
K:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ac1:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cW.prototype={
gV:function(a){return new H.jm(J.bw(this.a),this.b,this.$ti)}}
H.jm.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bY.prototype={}
H.cU.prototype={
n:function(a,b,c){H.A(c,H.as(this,"cU",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.eh.prototype={}
H.fE.prototype={
i:function(a){return P.l3(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.ns()},
$iE:1}
H.fF.prototype={
gl:function(a){return this.a},
bt:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bt(0,b))return
return this.dj(b)},
dj:function(a){return this.b[H.G(a)]},
M:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dj(q),u))}}}
H.i2.prototype={}
H.iK.prototype={
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
H.hR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hg.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kP.prototype={
$1:function(a){if(!!J.X(a).$ibB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.eV.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaw:1}
H.co.prototype={
i:function(a){return"Closure '"+H.c3(this).trim()+"'"},
$ibC:1,
gl2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iy.prototype={}
H.ip.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cj(u)+"'"}}
H.cm.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cF(this.a)
else t=typeof u!=="object"?J.dh(u):H.cF(u)
return(t^H.cF(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c3(u)+"'")}}
H.iM.prototype={
i:function(a){return this.a}}
H.fA.prototype={
i:function(a){return this.a}}
H.i9.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aO.prototype={
gl:function(a){return this.a},
gkj:function(a){return this.a===0},
ga7:function(a){return new H.hl(this,[H.u(this,0)])},
bt:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.df(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.df(t,b)}else return this.kg(b)},
kg:function(a){var u=this.d
if(u==null)return!1
return this.cF(this.c2(u,this.cE(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bn(r,b)
s=t==null?null:t.b
return s}else return this.kh(b)},
kh:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c2(u,this.cE(a))
s=this.cF(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c6()
this.b=u}this.d4(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c6()
this.c=t}this.d4(t,b,c)}else this.ki(b,c)},
ki:function(a,b){var u,t,s,r
H.A(a,H.u(this,0))
H.A(b,H.u(this,1))
u=this.d
if(u==null){u=this.c6()
this.d=u}t=this.cE(a)
s=this.c2(u,t)
if(s==null)this.ce(u,t,[this.c7(a,b)])
else{r=this.cF(s,a)
if(r>=0)s[r].b=b
else s.push(this.c7(a,b))}},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bh(this))
u=u.c}},
d4:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bn(a,b)
if(u==null)this.ce(a,b,this.c7(b,c))
else u.b=c},
hp:function(){this.r=this.r+1&67108863},
c7:function(a,b){var u,t
u=new H.hk(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hp()
return u},
cE:function(a){return J.dh(a)&0x3ffffff},
cF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.l3(this)},
bn:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
h2:function(a,b){delete a[b]},
df:function(a,b){return this.bn(a,b)!=null},
c6:function(){var u=Object.create(null)
this.ce(u,"<non-identifier-key>",u)
this.h2(u,"<non-identifier-key>")
return u}}
H.hk.prototype={}
H.hl.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.hm(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hm.prototype={
gL:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bh(u))
else{u=this.c
if(u==null){this.sd3(null)
return!1}else{this.sd3(u.a)
this.c=this.c.c
return!0}}},
sd3:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.kw.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kx.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.ky.prototype={
$1:function(a){return this.a(H.G(a))},
$S:51}
H.hf.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilV:1,
$io_:1}
H.cB.prototype={$icB:1}
H.bG.prototype={$ibG:1}
H.dR.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cC.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oS(c)
H.bf(b,a,a.length)
a[b]=c},
$abY:function(){return[P.r]},
$ay:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dS.prototype={
n:function(a,b,c){H.ai(c)
H.bf(b,a,a.length)
a[b]=c},
$abY:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hJ.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dT.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cD.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icD:1,
$iR:1}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
H.d2.prototype={}
P.jo.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:29}
P.jn.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jp.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jq.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f0.prototype={
fN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cd(new P.k4(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
fO:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cd(new P.k3(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ib9:1}
P.k4.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.k3.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fo(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.be.prototype={
kn:function(a){if(this.c!==6)return!0
return this.b.b.cR(H.n(this.d,{func:1,ret:P.S,args:[P.P]}),a.a,P.S,P.P)},
kf:function(a){var u,t,s,r
u=this.e
t=P.P
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fi(u,{func:1,args:[P.P,P.aw]}))return H.ln(r.kO(u,a.a,a.b,null,t,P.aw),s)
else return H.ln(r.cR(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aI.prototype={
eR:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a_
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oH(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aI(0,$.a_,[c])
r=b==null?1:3
this.d5(new P.be(s,r,a,b,[u,c]))
return s},
kS:function(a,b){return this.eR(a,null,b)},
d5:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$ibe")
this.c=a}else{if(u===2){t=H.h(this.c,"$iaI")
u=t.a
if(u<4){t.d5(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kn(null,null,u,H.n(new P.jz(this,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$ibe")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iaI")
t=p.a
if(t<4){p.dz(a)
return}this.a=t
this.c=p.c}u.a=this.bp(a)
t=this.b
t.toString
P.kn(null,null,t,H.n(new P.jD(u,this),{func:1,ret:-1}))}},
ca:function(){var u=H.h(this.c,"$ibe")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
da:function(a){var u,t,s
u=H.u(this,0)
H.ln(a,{futureOr:1,type:u})
t=this.$ti
if(H.dc(a,"$icv",t,"$acv"))if(H.dc(a,"$iaI",t,null))P.mk(a,this)
else P.oi(a,this)
else{s=this.ca()
H.A(a,u)
this.a=4
this.c=a
P.cZ(this,s)}},
dc:function(a,b){var u
H.h(b,"$iaw")
u=this.ca()
this.a=8
this.c=new P.am(a,b)
P.cZ(this,u)},
$icv:1}
P.jz.prototype={
$0:function(){P.cZ(this.a,this.b)},
$S:0}
P.jD.prototype={
$0:function(){P.cZ(this.b,this.a.a)},
$S:0}
P.jA.prototype={
$1:function(a){var u=this.a
u.a=0
u.da(a)},
$S:29}
P.jB.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.dc(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jC.prototype={
$0:function(){this.a.dc(this.b,this.c)},
$S:0}
P.jG.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eP(H.n(r.d,{func:1}),null)}catch(q){t=H.aj(q)
s=H.ch(q)
if(this.d){r=H.h(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.X(u).$icv){if(u instanceof P.aI&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kS(new P.jH(o),null)
r.a=!1}},
$S:3}
P.jH.prototype={
$1:function(a){return this.a},
$S:47}
P.jF.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cR(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ch(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jE.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$iam")
r=this.c
if(r.kn(u)&&r.e!=null){q=this.b
q.b=r.kf(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ch(p)
r=H.h(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.en.prototype={}
P.is.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aI(0,$.a_,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iu(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iv(u,t),{func:1,ret:-1})
W.ae(this.a,this.b,r,!1,s)
return t}}
P.iu.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.iv.prototype={
$0:function(){this.b.da(this.a.a)},
$S:0}
P.cJ.prototype={}
P.it.prototype={}
P.b9.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibB:1}
P.ke.prototype={$ipR:1}
P.km.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dV()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jN.prototype={
kP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a_){a.$0()
return}P.mw(null,null,this,a,-1)}catch(s){u=H.aj(s)
t=H.ch(s)
P.kl(null,null,this,u,H.h(t,"$iaw"))}},
kQ:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a_){a.$1(b)
return}P.mx(null,null,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ch(s)
P.kl(null,null,this,u,H.h(t,"$iaw"))}},
jB:function(a,b){return new P.jP(this,H.n(a,{func:1,ret:b}),b)},
ck:function(a){return new P.jO(this,H.n(a,{func:1,ret:-1}))},
dR:function(a,b){return new P.jQ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eP:function(a,b){H.n(a,{func:1,ret:b})
if($.a_===C.l)return a.$0()
return P.mw(null,null,this,a,b)},
cR:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a_===C.l)return a.$1(b)
return P.mx(null,null,this,a,b,c,d)},
kO:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a_===C.l)return a.$2(b,c)
return P.oI(null,null,this,a,b,c,d,e,f)}}
P.jP.prototype={
$0:function(){return this.a.eP(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jO.prototype={
$0:function(){return this.a.kP(this.b)},
$S:3}
P.jQ.prototype={
$1:function(a){var u=this.c
return this.a.kQ(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jL.prototype={
gV:function(a){var u=new P.eC(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ic8")!=null}else{t=this.fZ(b)
return t}},
fZ:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dk(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lb()
this.b=u}return this.d7(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lb()
this.c=t}return this.d7(t,b)}else return this.fQ(0,b)},
fQ:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.lb()
this.d=u}t=this.dd(b)
s=u[t]
if(s==null)u[t]=[this.bY(b)]
else{if(this.c0(s,b)>=0)return!1
s.push(this.bY(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iu(this.c,b)
else return this.ir(0,b)},
ir:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dk(u,b)
s=this.c0(t,b)
if(s<0)return!1
this.dF(t.splice(s,1)[0])
return!0},
d7:function(a,b){H.A(b,H.u(this,0))
if(H.h(a[b],"$ic8")!=null)return!1
a[b]=this.bY(b)
return!0},
iu:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ic8")
if(u==null)return!1
this.dF(u)
delete a[b]
return!0},
d9:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t
u=new P.c8(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d9()
return u},
dF:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d9()},
dd:function(a){return J.dh(a)&1073741823},
dk:function(a,b){return a[this.dd(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.c8.prototype={}
P.eC.prototype={
gL:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bh(u))
else{u=this.c
if(u==null){this.sd8(null)
return!1}else{this.sd8(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sd8:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
P.hn.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.ho.prototype={$ii:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cz(a,this.gl(a),0,[H.bQ(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
kU:function(a,b){var u,t
u=H.d([],[H.bQ(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
kT:function(a){return this.kU(a,!0)},
p:function(a,b){var u,t
u=[H.bQ(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bk(t,0,this.gl(a),a)
C.a.bk(t,this.gl(a),t.length,b)
return t},
k7:function(a,b,c,d){var u
H.A(d,H.bQ(this,a,"y",0))
P.bo(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.kZ(a,"[","]")}}
P.hq.prototype={}
P.hr.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:7}
P.af.prototype={
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bQ(this,a,"af",0),H.bQ(this,a,"af",1)]})
for(u=J.bw(this.ga7(a));u.C();){t=u.gL(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aC(this.ga7(a))},
i:function(a){return P.l3(a)},
$iE:1}
P.k5.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hs.prototype={
j:function(a,b){return J.lx(this.a,b)},
n:function(a,b,c){J.kQ(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
M:function(a,b){J.lz(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aC(this.a)},
i:function(a){return J.at(this.a)},
$iE:1}
P.ei.prototype={}
P.jS.prototype={
au:function(a,b){var u
for(u=J.bw(H.k(b,"$ii",this.$ti,"$ai"));u.C();)this.h(0,u.gL(u))},
i:function(a){return P.kZ(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ad(b,0,null,"index",null))
for(u=P.om(this,this.r,H.u(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
$ii:1,
$im2:1}
P.eD.prototype={}
P.f5.prototype={}
P.fw.prototype={
kp:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bo(c,a0,b.length,null,null,null)
u=$.n7()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kv(C.b.H(b,n))
j=H.kv(C.b.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.c4(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a0)
f=g.length
if(q>=0)P.lD(b,p,a0,q,o,f)
else{e=C.f.bi(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aY(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lD(b,p,a0,q,o,d)
else{e=C.f.bi(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.b.aY(b,a0,a0,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.o],P.e]}}
P.fx.prototype={
$abA:function(){return[[P.b,P.o],P.e]}}
P.bV.prototype={}
P.bA.prototype={}
P.fU.prototype={
$abV:function(){return[P.e,[P.b,P.o]]}}
P.h9.prototype={
i:function(a){return this.a}}
P.h8.prototype={
h_:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.al("")
if(r>b)q.a+=C.b.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nl(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abA:function(){return[P.e,P.e]}}
P.j5.prototype={
gk6:function(){return C.S}}
P.j7.prototype={
b6:function(a,b,c){var u,t,s
c=P.bo(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kc(t)
if(s.hb(a,b,c)!==c)s.dH(J.nf(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oC(0,s.b,t.length)))},
cq:function(a){return this.b6(a,0,null)},
$abA:function(){return[P.e,[P.b,P.o]]}}
P.kc.prototype={
dH:function(a,b){var u,t,s,r,q
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
hb:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dH(r,C.b.H(a,p)))s=p}else if(r<=2047){q=this.b
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
P.j6.prototype={
b6:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.o9(!1,a,b,c)
if(u!=null)return u
c=P.bo(b,c,J.aC(a),null,null,null)
t=new P.al("")
s=new P.ka(!1,t)
s.b6(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c4(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cq:function(a){return this.b6(a,0,null)},
$abA:function(){return[[P.b,P.o],P.e]}}
P.ka.prototype={
b6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kb(this,b,c,a)
$label0$0:for(q=J.cg(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bQ()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.G,m)
if(u<=C.G[m]){m=P.a7("Overlong encoding of 0x"+C.f.bh(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bh(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c4(u)
this.c=!1}for(m=o<c;m;){l=P.oJ(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bh(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kb.prototype={
$2:function(a,b){this.a.b.a+=P.e4(this.d,a,b)},
$S:46}
P.S.prototype={}
P.ay.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aT(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nt(H.nV(this))
t=P.ds(H.nT(this))
s=P.ds(H.nP(this))
r=P.ds(H.nQ(this))
q=P.ds(H.nS(this))
p=P.ds(H.nU(this))
o=P.nu(H.nR(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.b1.prototype={
p:function(a,b){return new P.b1(C.f.p(this.a,b.gh4()))},
t:function(a,b){return new P.b1(C.f.t(this.a,b.gh4()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fR()
t=this.a
if(t<0)return"-"+new P.b1(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.fQ().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.fR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.bB.prototype={}
P.dV.prototype={
i:function(a){return"Throw of null."}}
P.aK.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc_()+t+s
if(!this.a)return r
q=this.gbZ()
p=P.fW(this.b)
return r+q+": "+p}}
P.c5.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.ha.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.ai(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.iZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iW.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fW(u)+"."}}
P.hU.prototype={
i:function(a){return"Out of Memory"},
$ibB:1}
P.e3.prototype={
i:function(a){return"Stack Overflow"},
$ibB:1}
P.fK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ev.prototype={
i:function(a){return"Exception: "+this.a}}
P.h4.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.a_(r,m)
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
g=""}f=C.b.u(r,i,j)
return t+h+f+g+"\n"+C.b.F(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.l(s)+")"):t}}
P.bC.prototype={}
P.o.prototype={}
P.i.prototype={
bP:function(a,b){var u=H.as(this,"i",0)
return new H.cW(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gV(this)
for(t=0;u.C();)++t
return t},
gaM:function(a){var u,t
u=this.gV(this)
if(!u.C())throw H.c(H.hb())
t=u.gL(u)
if(u.C())throw H.c(H.nC())
return t},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ad(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.C();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.nA(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.L.prototype={
gJ:function(a){return P.P.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cF(this)},
i:function(a){return"Instance of '"+H.c3(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$ilV:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipr:1}
P.j3.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.G(b)
t=J.dd(b).eq(b,"=")
if(t===-1){if(b!=="")J.kQ(a,P.ld(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.u(b,0,t)
r=C.b.aq(b,t+1)
u=this.a
J.kQ(a,P.ld(s,0,s.length,u,!0),P.ld(r,0,r.length,u,!0))}return a},
$S:44}
P.j0.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j1.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j2.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fl(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.c9.prototype={
geZ:function(){return this.b},
gcD:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbL:function(a){var u=this.d
if(u==null)return P.mo(this.a)
return u},
gcL:function(a){var u=this.f
return u==null?"":u},
gel:function(){var u=this.r
return u==null?"":u},
cQ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
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
if(s&&!C.b.a5(d,"/"))d="/"+d
g=P.lc(g,0,0,h)
return new P.c9(i,j,c,f,d,g,this.r)},
eN:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gcM:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siq(new P.ei(P.mc(u==null?"":u,C.m),[t,t]))}return this.Q},
gem:function(){return this.c!=null},
gep:function(){return this.f!=null},
gen:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.l(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.l(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.l(t)}else u=t
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
if(!!J.X(b).$il7)if(this.a==b.gbT())if(this.c!=null===b.gem())if(this.b==b.geZ())if(this.gcD(this)==b.gcD(b))if(this.gbL(this)==b.gbL(b))if(this.e===b.geI(b)){u=this.f
t=u==null
if(!t===b.gep()){if(t)u=""
if(u===b.gcL(b)){u=this.r
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
if(u==null){u=C.b.gJ(this.i(0))
this.z=u}return u},
siq:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$il7:1,
gbT:function(){return this.a},
geI:function(a){return this.e}}
P.k6.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.k7.prototype={
$1:function(a){return P.f6(C.a8,a,C.m,!1)},
$S:17}
P.k9.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.f6(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.f6(C.v,b,C.m,!0))}},
$S:14}
P.k8.prototype={
$2:function(a,b){var u,t
H.G(a)
if(b==null||typeof b==="string")this.a.$2(a,H.G(b))
else for(u=J.bw(H.mL(b,"$ii")),t=this.a;u.C();)t.$2(a,H.G(u.gL(u)))},
$S:38}
P.j_.prototype={
geX:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.b.er(t,"?",u)
r=t.length
if(s>=0){q=P.d8(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.ju(this,"data",null,null,null,P.d8(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.ki.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kh.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.ng(u,0,96,b)
return u},
$S:35}
P.kj.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.H(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.kk.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.H(b,0),t=C.b.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.jV.prototype={
gem:function(){return this.c>0},
geo:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.I(t)
t=u+1<t
u=t}else u=!1
return u},
gep:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gen:function(){return this.r<this.a.length},
gdq:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdr:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbT:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdq()){this.x="http"
u="http"}else if(this.gdr()){this.x="https"
u="https"}else if(u===4&&C.b.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.b.u(this.a,0,u)
this.x=u}return u},
geZ:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcD:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbL:function(a){var u
if(this.geo()){u=this.d
if(typeof u!=="number")return u.p()
return P.fl(C.b.u(this.a,u+1,this.e),null,null)}if(this.gdq())return 80
if(this.gdr())return 443
return 0},
geI:function(a){return C.b.u(this.a,this.e,this.f)},
gcL:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.u(this.a,u+1,t):""},
gel:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.aq(t,u+1):""},
gcM:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.a9
u=P.e
return new P.ei(P.mc(this.gcL(this),C.m),[u,u])},
cQ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbT()
u=i==="file"
t=this.c
j=t>0?C.b.u(this.a,this.b+3,t):""
f=this.geo()?this.gbL(this):null
t=this.c
if(t>0)c=C.b.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a5(d,"/"))d="/"+d
g=P.lc(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.aq(t,s+1)
return new P.c9(i,j,c,f,d,g,b)},
eN:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.b.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$il7&&this.a===b.i(0)},
i:function(a){return this.a},
$il7:1}
P.ju.prototype={}
W.z.prototype={}
W.fo.prototype={
gl:function(a){return a.length}}
W.di.prototype={
i:function(a){return String(a)},
$idi:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.cl.prototype={$icl:1}
W.bT.prototype={$ibT:1}
W.bx.prototype={$ibx:1}
W.bU.prototype={
f4:function(a,b,c){var u=this.hc(a,b,P.oP(c,null))
return u},
hc:function(a,b,c){return a.getContext(b,c)},
$ibU:1}
W.by.prototype={
gl:function(a){return a.length}}
W.cp.prototype={$icp:1}
W.fG.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cq.prototype={
gl:function(a){return a.length}}
W.fH.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fI.prototype={
gl:function(a){return a.length}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.fM.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.cr.prototype={
jv:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)}}
W.fN.prototype={
i:function(a){return String(a)}}
W.du.prototype={
jP:function(a,b){return a.createHTMLDocument(b)}}
W.dv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a5],"$aab")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ab,P.a5]]},
$ay:function(){return[[P.ab,P.a5]]},
$ii:1,
$ai:function(){return[[P.ab,P.a5]]},
$ib:1,
$ab:function(){return[[P.ab,P.a5]]},
$aD:function(){return[[P.ab,P.a5]]}}
W.dw.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaL(a))+" x "+H.l(this.gaI(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.dc(b,"$iab",[P.a5],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbK(b)&&a.top===u.gbO(b)&&this.gaL(a)===u.gaL(b)&&this.gaI(a)===u.gaI(b)},
gJ:function(a){return W.mm(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gaL(a)),C.e.gJ(this.gaI(a)))},
gdS:function(a){return a.bottom},
gaI:function(a){return a.height},
gbK:function(a){return a.left},
gbN:function(a){return a.right},
gbO:function(a){return a.top},
gaL:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a5]}}
W.fO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.e]},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
W.fP.prototype={
gl:function(a){return a.length}}
W.js.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.h(u[b],"$iT")},
n:function(a,b,c){var u
H.h(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.kR(this.a,c,u[b])},
h:function(a,b){J.ly(this.a,b)
return b},
gV:function(a){var u=this.kT(this)
return new J.au(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.T]},
$ai:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gjA:function(a){return new W.jv(a)},
gcp:function(a){return new W.js(a,a.children)},
gdU:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lL
if(u==null){u=H.d([],[W.aA])
t=new W.dU(u)
C.a.h(u,W.ml(null))
C.a.h(u,W.mn())
$.lL=t
d=t}else d=u
u=$.lK
if(u==null){u=new W.f7(d)
$.lK=u
c=u}else{u.a=d
c=u}}if($.bi==null){u=document
t=u.implementation
t=(t&&C.T).jP(t,"")
$.bi=t
$.kW=t.createRange()
t=$.bi
t.toString
t=t.createElement("base")
H.h(t,"$icl")
t.href=u.baseURI
u=$.bi.head;(u&&C.V).D(u,t)}u=$.bi
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.h(t,"$ibx")}u=$.bi
if(!!this.$ibx)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bi.body;(u&&C.p).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a6,a.tagName)){u=$.kW;(u&&C.M).fb(u,s)
u=$.kW
r=(u&&C.M).jN(u,b)}else{s.innerHTML=b
r=$.bi.createDocumentFragment()
for(u=J.ac(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.bi.body
if(s==null?u!=null:s!==u)J.lB(s)
c.cW(r)
C.z.jv(document,r)
return r},
jO:function(a,b,c){return this.ag(a,b,c,null)},
fe:function(a,b,c,d){a.textContent=null
this.D(a,this.ag(a,b,c,d))},
fd:function(a,b){return this.fe(a,b,null,null)},
b0:function(a,b){return a.getAttribute(b)},
is:function(a,b){return a.removeAttribute(b)},
fc:function(a,b,c){return a.setAttribute(b,c)},
$iT:1,
gkR:function(a){return a.tagName}}
W.fT.prototype={
$1:function(a){return!!J.X(H.h(a,"$iF")).$iT},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jp:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fR(a,b,c,!1)},
fR:function(a,b,c,d){return a.addEventListener(b,H.cd(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaE")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icu:1,
$aD:function(){return[W.aE]}}
W.h_.prototype={
gl:function(a){return a.length}}
W.h3.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.dA.prototype={}
W.dB.prototype={
iy:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.bZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibZ:1,
$aD:function(){return[W.F]}}
W.dC.prototype={}
W.cx.prototype={$icx:1}
W.cy.prototype={$icy:1}
W.b3.prototype={$ib3:1}
W.dH.prototype={}
W.dK.prototype={
i:function(a){return String(a)},
$idK:1}
W.hC.prototype={
gl:function(a){return a.length}}
W.hD.prototype={
j:function(a,b){return P.bp(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hE(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hF.prototype={
j:function(a,b){return P.bp(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hG(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aP.prototype={$iaP:1}
W.hH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaP")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.ag.prototype={$iag:1}
W.ar.prototype={
gaM:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.m3("No elements"))
if(t>1)throw H.c(P.m3("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ac(t),q=0;q<s;++q)r.D(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.h(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.kR(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dy(u,u.length,-1,[H.bQ(C.aa,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ay:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
kH:function(a){var u=a.parentNode
if(u!=null)J.fm(u,a)},
kL:function(a,b){var u,t
try{u=a.parentNode
J.kR(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fi(a):u},
D:function(a,b){return a.appendChild(H.h(b,"$iF"))},
it:function(a,b){return a.removeChild(b)},
ix:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaR")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.dZ.prototype={
jN:function(a,b){return a.createContextualFragment(b)},
fb:function(a,b){return a.selectNodeContents(b)}}
W.i7.prototype={
j:function(a,b){return P.bp(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.i8(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.i8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ia.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.il.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.im.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.iq.prototype={
j:function(a,b){return this.dl(a,H.G(b))},
n:function(a,b,c){this.iF(a,b,c)},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hg(a,u)
if(t==null)return
b.$2(t,this.dl(a,t))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.ir(u))
return u},
gl:function(a){return a.length},
dl:function(a,b){return a.getItem(b)},
hg:function(a,b){return a.key(b)},
iF:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.ir.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aF.prototype={$iaF:1}
W.b8.prototype={$ib8:1}
W.e5.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=W.nv("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).au(0,new W.ar(u))
return t},
he:function(a,b){return a.insertRow(b)}}
W.e6.prototype={
ag:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
s.toString
u=new W.ar(s)
r=u.gaM(u)
t.toString
r.toString
new W.ar(t).au(0,new W.ar(r))
return t},
dn:function(a,b){return a.insertCell(b)}}
W.ix.prototype={
ag:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
t.toString
s.toString
new W.ar(t).au(0,new W.ar(s))
return t}}
W.cK.prototype={$icK:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.iD.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.iI.prototype={
gl:function(a){return a.length}}
W.bM.prototype={}
W.j4.prototype={
i:function(a){return String(a)}}
W.jk.prototype={
gl:function(a){return a.length}}
W.bd.prototype={
gjV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gjU:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibd:1}
W.cX.prototype={
iz:function(a,b){return a.requestAnimationFrame(H.cd(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
h5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cY.prototype={$icY:1}
W.jt.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iV")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.V]},
$ay:function(){return[W.V]},
$ii:1,
$ai:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aD:function(){return[W.V]}}
W.eq.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.dc(b,"$iab",[P.a5],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbK(b)&&a.top===u.gbO(b)&&a.width===u.gaL(b)&&a.height===u.gaI(b)},
gJ:function(a){return W.mm(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaI:function(a){return a.height},
gaL:function(a){return a.width}}
W.jI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaM")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.eI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.jW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.k_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaF")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aD:function(){return[W.aF]}}
W.jr.prototype={
M:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.ac(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b0(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.h(u[r],"$icY")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaf:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jv.prototype={
j:function(a,b){return J.kS(this.a,H.G(b))},
n:function(a,b,c){J.nk(this.a,b,c)},
gl:function(a){return this.ga7(this).length}}
W.jw.prototype={}
W.la.prototype={}
W.jx.prototype={}
W.jy.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ip"))},
$S:34}
W.bO.prototype={
fz:function(a){var u,t
u=$.lv()
if(u.gkj(u)){for(t=0;t<262;++t)u.n(0,C.a5[t],W.oZ())
for(t=0;t<12;++t)u.n(0,C.B[t],W.p_())}},
aU:function(a){return $.n8().Y(0,W.cs(a))},
av:function(a,b,c){var u,t,s
u=W.cs(a)
t=$.lv()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.li(s.$4(a,b,c,this))},
$iaA:1}
W.D.prototype={
gV:function(a){return new W.dy(a,this.gl(a),-1,[H.bQ(this,a,"D",0)])}}
W.dU.prototype={
aU:function(a){return C.a.dL(this.a,new W.hP(a))},
av:function(a,b,c){return C.a.dL(this.a,new W.hO(a,b,c))},
$iaA:1}
W.hP.prototype={
$1:function(a){return H.h(a,"$iaA").aU(this.a)},
$S:25}
W.hO.prototype={
$1:function(a){return H.h(a,"$iaA").av(this.a,this.b,this.c)},
$S:25}
W.eQ.prototype={
fK:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bP(0,new W.jT())
t=b.bP(0,new W.jU())
this.b.au(0,u)
s=this.c
s.au(0,C.H)
s.au(0,t)},
aU:function(a){return this.a.Y(0,W.cs(a))},
av:function(a,b,c){var u,t
u=W.cs(a)
t=this.c
if(t.Y(0,H.l(u)+"::"+b))return this.d.jw(c)
else if(t.Y(0,"*::"+b))return this.d.jw(c)
else{t=this.b
if(t.Y(0,H.l(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.l(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iaA:1}
W.jT.prototype={
$1:function(a){return!C.a.Y(C.B,H.G(a))},
$S:26}
W.jU.prototype={
$1:function(a){return C.a.Y(C.B,H.G(a))},
$S:26}
W.k1.prototype={
av:function(a,b,c){if(this.fn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.kS(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.k2.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.G(a))},
$S:17}
W.k0.prototype={
aU:function(a){var u=J.X(a)
if(!!u.$icG)return!1
u=!!u.$iq
if(u&&W.cs(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aU(a)},
$iaA:1}
W.dy.prototype={
C:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdm(J.lx(this.a,u))
this.c=u
return!0}this.sdm(null)
this.c=t
return!1},
gL:function(a){return this.d},
sdm:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
W.aA.prototype={}
W.jR.prototype={$ipD:1}
W.f7.prototype={
cW:function(a){new W.kd(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lB(a)
else J.fm(b,a)},
iD:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nh(a)
s=J.kS(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aj(o)}q="element unprintable"
try{q=J.at(a)}catch(o){H.aj(o)}try{p=W.cs(a)
this.iC(H.h(a,"$iT"),b,u,q,p,H.h(t,"$iE"),H.G(s))}catch(o){if(H.aj(o) instanceof P.aK)throw o
else{this.b4(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aU(a)){this.b4(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b4(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga7(f).length-1,u=f.a,r=J.ac(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.av(a,J.nm(q),r.b0(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.b0(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b0(u,q)
r.is(u,q)}}if(!!J.X(a).$icK)this.cW(a.content)},
$ipo:1}
W.kd.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iD(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b4(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aj(r)
q=H.h(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.fm(p,q)}else J.fm(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iF")}},
$S:45}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
P.jX.prototype={
ei:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cT:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.X(a)
if(!!t.$iay)return new Date(a.a)
if(!!t.$io_)throw H.c(P.iX("structured clone of RegExp"))
if(!!t.$iaE)return a
if(!!t.$ibT)return a
if(!!t.$icu)return a
if(!!t.$icx)return a
if(!!t.$icB||!!t.$ibG)return a
if(!!t.$iE){s=this.ei(a)
r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.M(a,new P.jZ(u,this))
return u.a}if(!!t.$ib){s=this.ei(a)
u=this.b
if(s>=u.length)return H.f(u,s)
q=u[s]
if(q!=null)return q
return this.jM(a,s)}throw H.c(P.iX("structured clone of other type"))},
jM:function(a,b){var u,t,s,r
u=J.cg(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.cT(u.j(a,r)))
return s}}
P.jZ.prototype={
$2:function(a,b){this.a.a[a]=this.b.cT(b)},
$S:7}
P.ko.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jY.prototype={}
P.h0.prototype={
gbo:function(){var u,t,s
u=this.b
t=H.as(u,"y",0)
s=W.T
return new H.ht(new H.cW(u,H.n(new P.h1(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.h2(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.h(c,"$iT")
u=this.gbo()
J.nj(u.b.$1(J.fn(u.a,b)),c)},
h:function(a,b){J.ly(this.b.a,b)},
gl:function(a){return J.aC(this.gbo().a)},
j:function(a,b){var u=this.gbo()
return u.b.$1(J.fn(u.a,b))},
gV:function(a){var u=P.lO(this.gbo(),!1,W.T)
return new J.au(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.T]},
$ai:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.h1.prototype={
$1:function(a){return!!J.X(H.h(a,"$iF")).$iT},
$S:22}
P.h2.prototype={
$1:function(a){return H.m(H.h(a,"$iF"),"$iT")},
$S:33}
P.jM.prototype={
gbN:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdS:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dc(b,"$iab",[P.a5],"$aab")){u=this.a
t=J.ac(b)
if(u==t.gbK(b)){s=this.b
if(s==t.gbO(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gbN(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdS(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.dh(u)
s=this.b
r=J.dh(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gJ(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gJ(H.A(s+this.d,q))
return P.ol(P.jK(P.jK(P.jK(P.jK(0,t),r),u),q))}}
P.ab.prototype={
gbK:function(a){return this.a},
gbO:function(a){return this.b},
gaL:function(a){return this.c},
gaI:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hi.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ib4")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aD:function(){return[P.b4]}}
P.b6.prototype={$ib6:1}
P.hS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ib6")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aD:function(){return[P.b6]}}
P.hZ.prototype={
gl:function(a){return a.length}}
P.cG.prototype={$icG:1}
P.iw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.G(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.q.prototype={
gcp:function(a){return new P.h0(a,new W.ar(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aA])
C.a.h(u,W.ml(null))
C.a.h(u,W.mn())
C.a.h(u,new W.k0())
c=new W.f7(new W.dU(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jO(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ar(r)
p=u.gaM(u)
for(u=J.ac(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$iq:1}
P.ba.prototype={$iba:1}
P.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$iba")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aD:function(){return[P.ba]}}
P.eA.prototype={}
P.eB.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.R.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
P.fs.prototype={
gl:function(a){return a.length}}
P.ft.prototype={
j:function(a,b){return P.bp(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new P.fu(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fv.prototype={
gl:function(a){return a.length}}
P.bS.prototype={}
P.hT.prototype={
gl:function(a){return a.length}}
P.eo.prototype={}
P.dk.prototype={$idk:1}
P.dz.prototype={$idz:1}
P.dY.prototype={$idY:1}
P.c6.prototype={
dM:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jC:function(a,b,c){return a.bindFramebuffer(b,c)},
jD:function(a,b,c){return a.blendFunc(b,c)},
dT:function(a,b,c,d){return a.bufferData(b,c,d)},
jG:function(a,b){return a.clear(b)},
jH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jI:function(a,b){return a.clearDepth(b)},
jK:function(a,b){return a.compileShader(b)},
jQ:function(a,b){return a.createShader(b)},
jS:function(a,b){return a.deleteProgram(b)},
jT:function(a,b){return a.deleteShader(b)},
jW:function(a,b){return a.depthFunc(b)},
jX:function(a,b){return a.disable(b)},
dW:function(a,b){return a.disableVertexAttribArray(b)},
jZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ct:function(a,b){return a.enable(b)},
dX:function(a,b){return a.enableVertexAttribArray(b)},
f0:function(a,b,c){return a.getActiveAttrib(b,c)},
f1:function(a,b,c){return a.getActiveUniform(b,c)},
f2:function(a,b,c){return a.getAttribLocation(b,c)},
cV:function(a,b){return a.getParameter(b)},
f5:function(a,b){return a.getProgramInfoLog(b)},
bR:function(a,b,c){return a.getProgramParameter(b,c)},
f6:function(a,b){return a.getShaderInfoLog(b)},
f7:function(a,b,c){return a.getShaderParameter(b,c)},
f8:function(a,b,c){return a.getUniformLocation(b,c)},
kl:function(a,b){return a.linkProgram(b)},
fg:function(a,b,c){return a.shaderSource(b,c)},
T:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eY:function(a,b){return a.useProgram(b)},
kX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic6:1}
P.e1.prototype={$ie1:1}
P.eg.prototype={$ieg:1}
P.io.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.bp(this.hf(a,b))},
n:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
hf:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.eT.prototype={}
P.eU.prototype={}
O.a6.prototype={
bW:function(a){this.shk(H.d([],[a]))
this.sdv(null)
this.sds(null)
this.sdw(null)},
cX:function(a,b,c){var u=H.as(this,"a6",0)
H.n(b,{func:1,ret:P.S,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdv(b)
this.sds(a)
this.sdw(c)},
bj:function(a,b){return this.cX(a,null,b)},
i8:function(a){var u
H.k(a,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hw:function(a,b){var u
H.k(b,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.au(u,u.length,0,[H.u(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.as(this,"a6",0)
H.A(b,u)
u=[u]
if(this.i8(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hw(s,H.d([b],u))}},
shk:function(a){this.a=H.k(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sdv:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.as(this,"a6",0)]]})},
sds:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.as(this,"a6",0)]]})},
sdw:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.as(this,"a6",0)]]})},
$ii:1}
O.cA.prototype={
gl:function(a){return this.a.length},
gE:function(){var u=this.b
if(u==null){u=D.a0()
this.b=u}return u},
fv:function(a){var u=this.b
if(u!=null)u.N(a)},
aN:function(){return this.fv(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dQ()},
eK:function(a){var u=this.a
if(a==null)C.a.h(u,V.dQ())
else C.a.h(u,a)
this.aN()},
cJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sc4:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fy.prototype={}
E.an.prototype={
d6:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();){t=u.d
if(t.f==null)t.d6()}},
sab:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gE().O(0,this.geD())
t=this.c
if(t!=null)t.gE().h(0,this.geD())
s=new D.Q("shape",u,this.c,this,[F.e2])
s.b=!0
this.aa(s)}},
sbf:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gE().O(0,this.geF())
t=this.f
this.f=a
if(a!=null)a.gE().h(0,this.geF())
this.d6()
s=new D.Q("technique",t,this.f,this,[O.bL])
s.b=!0
this.aa(s)}},
saW:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gE().O(0,this.geB())
if(a!=null)a.gE().h(0,this.geB())
this.r=a
t=new D.Q("mover",u,a,this,[U.ak])
t.b=!0
this.aa(t)}},
aB:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.b_(0,b,this):null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.Q("matrix",s,t,this,[V.ao])
r.b=!0
this.aa(r)}u=this.f
if(u!=null)u.aB(0,b)
for(u=this.y.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();)u.d.aB(0,b)},
aX:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.F(0,u.ga1(u)))
u.aN()
a.eL(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kK(a,this)
for(u=this.y.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();)u.d.aX(a)
a.eJ()
a.dx.cJ()},
gE:function(){var u=this.z
if(u==null){u=D.a0()
this.z=u}return u},
aa:function(a){var u=this.z
if(u!=null)u.N(a)},
a3:function(){return this.aa(null)},
eE:function(a){H.h(a,"$iB")
this.e=null
this.aa(a)},
kw:function(){return this.eE(null)},
eG:function(a){this.aa(H.h(a,"$iB"))},
kx:function(){return this.eG(null)},
eC:function(a){this.aa(H.h(a,"$iB"))},
kv:function(){return this.eC(null)},
eA:function(a){this.aa(H.h(a,"$iB"))},
ks:function(){return this.eA(null)},
kr:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.gez(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bX()
o.sak(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
ku:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gV(b),t=this.gez();u.C();)u.gL(u).gE().O(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfw:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibn:1}
E.i3.prototype={
fq:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ay(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cA()
t=[V.ao]
u.sc4(H.d([],t))
u.b=null
u.gE().h(0,new E.i4(this))
this.cy=u
u=new O.cA()
u.sc4(H.d([],t))
u.b=null
u.gE().h(0,new E.i5(this))
this.db=u
u=new O.cA()
u.sc4(H.d([],t))
u.b=null
u.gE().h(0,new E.i6(this))
this.dx=u
this.siP(H.d([],[O.bL]))
u=this.dy;(u&&C.a).h(u,null)
this.siL(new H.aO([P.e,A.cH]))},
gkG:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.F(0,t.ga1(t))
this.z=t
u=t}return u},
eL:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eJ:function(){var u=this.dy
if(u.length>1)u.pop()},
siP:function(a){this.dy=H.k(a,"$ib",[O.bL],"$ab")},
siL:function(a){this.fr=H.k(a,"$iE",[P.e,A.cH],"$aE")}}
E.i4.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.i5.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.i6.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ec.prototype={
d1:function(a){H.h(a,"$iB")
this.eO()},
d0:function(){return this.d1(null)},
gke:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.lJ(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ay(u,!1)
return s/t},
dB:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.F()
if(typeof u!=="number")return H.I(u)
s=C.e.ej(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.F()
r=C.e.ej(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.m6(C.y,this.gkM())}},
eO:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iC(this),{func:1,ret:-1,args:[P.a5]})
C.O.h5(u)
C.O.iz(u,W.mB(t,P.a5))}},
kJ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dB()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lJ(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aN()
r=s.db
C.a.sl(r.a,0)
r.aN()
r=s.dx
C.a.sl(r.a,0)
r.aN()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aX(this.e)}s=this.z
if(s!=null)s.N(null)}catch(q){u=H.aj(q)
t=H.ch(q)
P.lq("Error: "+H.l(u))
P.lq("Stack: "+H.l(t))
throw H.c(u)}}}
E.iC.prototype={
$1:function(a){var u
H.p9(a)
u=this.a
if(u.ch){u.ch=!1
u.kJ()}},
$S:54}
Z.em.prototype={$ipi:1}
Z.dl.prototype={
br:function(a){var u,t,s
try{t=a.a
C.c.dX(t,this.e)
C.c.kX(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.jl.prototype={$ipj:1}
Z.dm.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
br:function(a){var u,t
u=this.a
C.c.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].br(a)},
eU:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.dW(s,u[t].e)
C.c.aw(s,this.a.a,null)},
aX:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.c.aw(t,p,r.b)
C.c.jZ(t,q.a,q.b,5123,0)
C.c.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.at(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shd:function(a){this.b=H.k(a,"$ib",[Z.bD],"$ab")},
$ips:1}
Z.bD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c3(this.c)+"'")+"]"}}
Z.bc.prototype={
gcY:function(a){var u,t
u=this.a
t=(u&$.bt().a)!==0?3:0
if((u&$.bs().a)!==0)t+=3
if((u&$.br().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=2
if((u&$.bv().a)!==0)t+=3
if((u&$.de().a)!==0)t+=3
if((u&$.df().a)!==0)t+=4
if((u&$.ck().a)!==0)++t
return(u&$.bq().a)!==0?t+4:t},
jy:function(a){var u,t,s
u=$.bt()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.de()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.df()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ck()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bq()
if((t&u.a)!==0)if(s===a)return u
return $.n6()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bt().a)!==0)C.a.h(u,"Pos")
if((t&$.bs().a)!==0)C.a.h(u,"Norm")
if((t&$.br().a)!==0)C.a.h(u,"Binm")
if((t&$.bu().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bv().a)!==0)C.a.h(u,"TxtCube")
if((t&$.de().a)!==0)C.a.h(u,"Clr3")
if((t&$.df().a)!==0)C.a.h(u,"Clr4")
if((t&$.ck().a)!==0)C.a.h(u,"Weight")
if((t&$.bq().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fB.prototype={}
D.bX.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
N:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.B(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.M(P.lO(t,!0,{func:1,ret:-1,args:[D.B]}),new D.fX(u))
t=this.b
if(t!=null){this.saR(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.M(t,new D.fY(u))}return!0},
kN:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.N(t)}}},
an:function(a){return this.kN(a,!0,!1)},
sak:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saR:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fX.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.fY.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.c_.prototype={}
D.c0.prototype={}
D.Q.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dn.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dG.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hh.prototype={
kD:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kz:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sip:function(a){this.d=H.k(a,"$im2",[P.o],"$am2")}}
X.dL.prototype={}
X.hp.prototype={
b2:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ay(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.F()
q=b.b
p=this.ch
if(typeof q!=="number")return q.F()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gbs()
n=new X.bF(a,V.bI(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cI:function(a,b){this.r=a.a
return!1},
be:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fa()
if(typeof u!=="number")return u.bQ()
this.r=(u&~t)>>>0
return!1},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.N(this.b2(a,b))
return!0},
kE:function(a){return!1},
hY:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ay(Date.now(),!1)
t=this.f
s=new X.dL(c,a,this.a.gbs(),b,u,this)
s.b=!0
t.N(s)
this.y=u
this.x=V.bI()}}
X.aQ.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aQ))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bF.prototype={}
X.hI.prototype={
c1:function(a,b,c){var u,t,s
u=new P.ay(Date.now(),!1)
t=this.a.gbs()
s=new X.bF(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cI:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.N(this.c1(a,b,!0))
return!0},
be:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fa()
if(typeof u!=="number")return u.bQ()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.N(this.c1(a,b,!0))
return!0},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.N(this.c1(a,b,!1))
return!0},
kF:function(a,b){return!1}}
X.hY.prototype={}
X.ee.prototype={}
X.iG.prototype={
b2:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bI()
s=this.a.gbs()
r=new X.ee(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kC:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.N(this.b2(a,!0))
return!0},
kA:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.N(this.b2(a,!0))
return!0},
kB:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.N(this.b2(a,!1))
return!0}}
X.ej.prototype={
gbs:function(){var u=this.a
return V.m0(0,0,C.x.gdU(u).c,C.x.gdU(u).d)},
dg:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dG(u,new X.aQ(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
cf:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.aa(t-r,s-q)},
b3:function(a){return new V.a4(a.movementX,a.movementY)},
c9:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ao(p.pageX)
C.e.ao(p.pageY)
n=u.left
C.e.ao(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.ao(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dn(u,new X.aQ(t,a.altKey,a.shiftKey))},
c5:function(a){var u,t,s,r,q,p
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
hS:function(a){this.f=!0},
hE:function(a){this.f=!1},
hM:function(a){H.h(a,"$iag")
if(this.f&&this.c5(a))a.preventDefault()},
hW:function(a){var u
H.h(a,"$ib3")
if(!this.f)return
u=this.dg(a)
this.b.kD(u)},
hU:function(a){var u
H.h(a,"$ib3")
if(!this.f)return
u=this.dg(a)
this.b.kz(u)},
i_:function(a){var u,t,s,r
H.h(a,"$iag")
u=this.a
u.focus()
this.f=!0
this.aS(a)
if(this.x){t=this.aE(a)
s=this.b3(a)
if(this.d.cI(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aG(a)
if(this.c.cI(t,r))a.preventDefault()},
i3:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.be(u,s))a.preventDefault()},
hQ:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c5(a)){this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.be(u,s))a.preventDefault()}},
i1:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()},
hO:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c5(a)){this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()}},
i5:function(a){var u,t
H.h(a,"$ibd")
this.aS(a)
u=new V.a4((a&&C.N).gjU(a),C.N.gjV(a)).B(0,180)
if(this.x){if(this.d.kE(u))a.preventDefault()
return}if(this.r)return
t=this.aG(a)
if(this.c.kF(u,t))a.preventDefault()},
i7:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aG(this.y)
this.d.hY(t,s,u)}},
im:function(a){var u
H.h(a,"$iaX")
this.a.focus()
this.f=!0
this.cf(a)
u=this.c9(a)
if(this.e.kC(u))a.preventDefault()},
ii:function(a){var u
H.h(a,"$iaX")
this.cf(a)
u=this.c9(a)
if(this.e.kA(u))a.preventDefault()},
ik:function(a){var u
H.h(a,"$iaX")
this.cf(a)
u=this.c9(a)
if(this.e.kB(u))a.preventDefault()},
sh6:function(a){this.z=H.k(a,"$ib",[[P.cJ,P.P]],"$ab")}}
D.dt.prototype={$ia8:1,$ibn:1}
D.a8.prototype={$ibn:1}
D.dI.prototype={
gE:function(){var u=this.Q
if(u==null){u=D.a0()
this.Q=u}return u},
a9:function(a){var u=this.Q
if(u!=null)u.N(a)},
du:function(a){var u
H.h(a,"$iB")
u=this.ch
if(u!=null)u.N(a)},
hX:function(){return this.du(null)},
ia:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fA(s))return!1}return!0},
hy:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdt(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.h(b[p],"$ia8")
if(o instanceof D.bK)C.a.h(this.r,o)
n=o.z
if(n==null){n=new D.bX()
n.sak(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c_(a,b,this,[u])
u.b=!0
this.a9(u)},
ig:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gdt();t.C();){r=t.gL(t)
C.a.O(this.e,r)
r.gE().O(0,s)}u=new D.c0(a,b,this,[u])
u.b=!0
this.a9(u)},
fA:function(a){var u=C.a.Y(this.r,a)
return u},
sfB:function(a){this.e=H.k(a,"$ib",[D.dt],"$ab")},
sfC:function(a){this.f=H.k(a,"$ib",[D.dX],"$ab")},
sfD:function(a){this.r=H.k(a,"$ib",[D.bK],"$ab")},
sfE:function(a){this.x=H.k(a,"$ib",[D.e9],"$ab")},
sfF:function(a){this.y=H.k(a,"$ib",[D.ea],"$ab")},
sfG:function(a){this.z=H.k(a,"$ib",[D.eb],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dX.prototype={$ia8:1,$ibn:1}
D.bK.prototype={
gE:function(){var u=this.z
if(u==null){u=D.a0()
this.z=u}return u},
a9:function(a){var u
H.h(a,"$iB")
u=this.z
if(u!=null)u.N(a)},
hG:function(){return this.a9(null)},
$ia8:1,
$ibn:1}
D.e9.prototype={$ia8:1,$ibn:1}
D.ea.prototype={$ia8:1,$ibn:1}
D.eb.prototype={$ia8:1,$ibn:1}
V.a1.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcN())
t=C.e.p(this.b,b.gbS())
s=C.e.p(this.c,b.gcl())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcN())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcl())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.aL.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcN())
t=C.e.p(this.b,b.gbS())
s=C.e.p(this.c,b.gcl())
r=C.e.p(this.d,b.gjx(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aL(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcN())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcl())
r=C.e.t(this.d,b.gjx(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aL(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.fV.prototype={}
V.dP.prototype={
aj:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
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
u=[P.r]
t=V.cf(H.d([this.a,this.d,this.r],u),3,0)
s=V.cf(H.d([this.b,this.e,this.x],u),3,0)
r=V.cf(H.d([this.c,this.f,this.y],u),3,0)
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
V.ao.prototype={
aj:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
es:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.N().a)return V.dQ()
a8=1/a7
a9=-r
b0=-d
return V.bm((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.bm(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cS:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.J(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aZ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a2(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
ek:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.cf(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cf(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cf(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cf(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.ek("",3,0)},
G:function(a){return this.ek(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.a2.prototype={
p:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
F:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.b7.prototype={
p:function(a,b){return new V.b7(C.e.p(this.a,b.gl_(b)),C.e.p(this.b,b.gl0(b)),C.e.p(this.c,b.gl1(b)),C.e.p(this.d,b.gkZ(b)))},
t:function(a,b){return new V.b7(C.e.t(this.a,b.gl_(b)),C.e.t(this.b,b.gl0(b)),C.e.t(this.c,b.gl1(b)),C.e.t(this.d,b.gkZ(b)))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.e0.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e0))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.a4.prototype={
cG:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.I(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.F()
if(typeof r!=="number")return H.I(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gk_(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gk0(b)
if(typeof u!=="number")return u.p()
return new V.a4(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gk_(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gk0(b)
if(typeof u!=="number")return u.t()
return new V.a4(t,C.e.t(u,s))},
F:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.F()
t=this.b
if(typeof t!=="number")return t.F()
return new V.a4(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.me
if(u==null){u=new V.a4(0,0)
$.me=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.a4(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.I(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.I(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.J.prototype={
cG:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cH:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.J(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.J(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cV()
return new V.J(this.a/b,this.b/b,this.c/b)},
eu:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fC.prototype={
bX:function(a){var u=V.ph(a,this.c,this.b)
return u},
gE:function(){var u=this.y
if(u==null){u=D.a0()
this.y=u}return u},
a0:function(a){var u=this.y
if(u!=null)u.N(a)},
sf_:function(a,b){},
sev:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bX(t)}u=new D.Q("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.a0(u)}},
sex:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bX(t)}u=new D.Q("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.a0(u)}},
sa4:function(a,b){var u
b=this.bX(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.Q("location",u,b,this,[P.r])
u.b=!0
this.a0(u)}},
sew:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.Q("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.a0(u)}},
sa2:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.Q("velocity",u,a,this,[P.r])
u.b=!0
this.a0(u)}},
sdV:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.Q("dampening",u,a,this,[P.r])
u.b=!0
this.a0(u)}},
aB:function(a,b){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa2(s)}}}
U.dq.prototype={
gE:function(){var u=this.b
if(u==null){u=D.a0()
this.b=u}return u},
b_:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dq))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cw.prototype={
gE:function(){var u=this.e
if(u==null){u=D.a0()
this.e=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.N(a)},
ar:function(){return this.a0(null)},
fI:function(a,b){var u,t,s,r,q,p,o,n
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbm(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gE()
n.toString
H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c_(a,b,this,[u])
u.b=!0
this.a0(u)},
ic:function(a,b){var u,t,s
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gbm();t.C();)t.gL(t).gE().O(0,s)
u=new D.c0(a,b,this,[u])
u.b=!0
this.a0(u)},
b_:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.au(u,u.length,0,[H.u(u,0)]),s=null;u.C();){t=u.d
if(t!=null){r=t.b_(0,b,c)
if(r!=null)s=s==null?r:r.F(0,s)}}this.f=s==null?V.dQ():s
u=this.e
if(u!=null)u.an(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cw))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.ek.prototype={
gE:function(){var u=this.fx
if(u==null){u=D.a0()
this.fx=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.N(a)},
ar:function(){return this.a0(null)},
jz:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.a0()
u.b=t
u=t}else u=t
u.h(0,this.ghq())
u=this.a.c
t=u.d
if(t==null){t=D.a0()
u.d=t
u=t}else u=t
u.h(0,this.ghs())
u=this.a.c
t=u.c
if(t==null){t=D.a0()
u.c=t
u=t}else u=t
u.h(0,this.ghu())
u=this.a.d
t=u.f
if(t==null){t=D.a0()
u.f=t
u=t}else u=t
u.h(0,this.ghl())
u=this.a.d
t=u.d
if(t==null){t=D.a0()
u.d=t
u=t}else u=t
u.h(0,this.ghn())
u=this.a.e
t=u.b
if(t==null){t=D.a0()
u.b=t
u=t}else u=t
u.h(0,this.giV())
u=this.a.e
t=u.d
if(t==null){t=D.a0()
u.d=t
u=t}else u=t
u.h(0,this.giT())
u=this.a.e
t=u.c
if(t==null){t=D.a0()
u.c=t
u=t}else u=t
u.h(0,this.giR())
return!0},
at:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.a4(u,t)},
hr:function(a){a=H.m(H.h(a,"$iB"),"$ibF")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ht:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibF")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a4(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.I(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.a4(t.a,t.b).F(0,2).B(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.I(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.I(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a4(s.a,s.b).F(0,2).B(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.I(p)
o=this.cy
if(typeof o!=="number")return H.I(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.I(q)
s=this.db
if(typeof s!=="number")return H.I(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a4(t.a,t.b).F(0,2).B(0,u.gaA()))}this.ar()},
hv:function(a){var u,t,s
H.h(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.I(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.I(u)
s.sa2(-t*10*u)
this.ar()}},
hm:function(a){if(H.m(H.h(a,"$iB"),"$idL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
ho:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibF")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a4(s.a,s.b).F(0,2).B(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.I(p)
o=this.cy
if(typeof o!=="number")return H.I(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.I(q)
s=this.db
if(typeof s!=="number")return H.I(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a4(t.a,t.b).F(0,2).B(0,u.gaA()))
this.ar()},
iW:function(a){H.h(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iU:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$iee")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a4(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.I(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.a4(t.a,t.b).F(0,2).B(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.I(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.I(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a4(s.a,s.b).F(0,2).B(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.I(p)
o=this.cy
if(typeof o!=="number")return H.I(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.I(q)
s=this.db
if(typeof s!=="number")return H.I(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a4(t.a,t.b).F(0,2).B(0,u.gaA()))}this.ar()},
iS:function(a){var u,t,s
H.h(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.I(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.I(u)
s.sa2(-t*10*u)
this.ar()}},
b_:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=b.y
this.c.aB(0,s)
this.b.aB(0,s)
u=V.lQ(this.b.d)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.F(0,V.bm(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iak:1}
M.dx.prototype={
aD:function(a){var u
H.h(a,"$iB")
u=this.x
if(u!=null)u.N(a)},
fJ:function(){return this.aD(null)},
hI:function(a,b){var u,t,s,r,q,p,o,n
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gas(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bX()
n.sak(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c_(a,b,this,[u])
u.b=!0
this.aD(u)},
hK:function(a,b){var u,t,s
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gas();t.C();)t.gL(t).gE().O(0,s)
u=new D.c0(a,b,this,[u])
u.b=!0
this.aD(u)},
sbf:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gE().O(0,this.gas())
t=this.c
this.c=a
if(a!=null)a.gE().h(0,this.gas())
u=new D.Q("technique",t,this.c,this,[O.bL])
u.b=!0
this.aD(u)}},
gE:function(){var u=this.x
if(u==null){u=D.a0()
this.x=u}return u},
aX:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eL(this.c)
u=this.b
u.toString
t=a1.a
C.c.jC(t,36160,null)
C.c.ct(t,2884)
C.c.ct(t,2929)
C.c.jW(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.I(s)
o=C.e.ao(p*s)
p=q.b
if(typeof r!=="number")return H.I(r)
n=C.e.ao(p*r)
p=C.e.ao(q.c*s)
a1.c=p
q=C.e.ao(q.d*r)
a1.d=q
C.c.kY(t,o,n,p,q)
C.c.jI(t,u.c)
u=u.a
C.c.jH(t,u.a,u.b,u.c,u.d)
C.c.jG(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bm(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.eK(i)
t=$.lW
if(t==null){t=V.lY()
q=$.mh
if(q==null){q=new V.J(0,1,0)
$.mh=q}p=$.mf
if(p==null){p=new V.J(0,0,-1)
$.mf=p}h=p.B(0,Math.sqrt(p.I(p)))
q=q.aH(h)
g=q.B(0,Math.sqrt(q.I(q)))
f=h.aH(g)
e=new V.J(t.a,t.b,t.c)
d=g.U(0).I(e)
c=f.U(0).I(e)
b=h.U(0).I(e)
t=V.bm(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lW=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.b_(0,a1,u)
if(a0!=null)a=a0.F(0,a)}a1.db.eK(a)
u=this.c
if(u!=null)u.aB(0,a1)
for(u=this.d.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();)u.d.aB(0,a1)
for(u=this.d.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();)u.d.aX(a1)
this.a.toString
a1.cy.cJ()
a1.db.cJ()
this.b.toString
a1.eJ()},
sfY:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipp:1}
A.dj.prototype={}
A.fr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k5:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.dX(r.a,r.c)}},
jY:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.dW(r.a,r.c)}}}
A.hw.prototype={
fp:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.al("")
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
u=new P.al("")
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
k=H.d([],[P.e])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
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
j=H.d([],[P.e])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dh(n,35633)
this.f=this.dh(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.c.dM(s,q,this.e)
C.c.dM(s,this.r,this.f)
C.c.kl(s,this.r)
if(!H.li(C.c.bR(s,this.r,35714))){h=C.c.f5(s,this.r)
C.c.jS(s,this.r)
H.t(P.w("Failed to link shader: "+H.l(h)))}this.iI()
this.iK()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.m(this.y.q(0,"invViewMat"),"$iaB")
if(t)this.dy=H.m(this.y.q(0,"objMat"),"$iaB")
if(r)this.fr=H.m(this.y.q(0,"viewObjMat"),"$iaB")
this.fy=H.m(this.y.q(0,"projViewObjMat"),"$iaB")
if(a7.x2)this.k1=H.m(this.y.q(0,"txt2DMat"),"$icO")
if(a7.y1)this.k2=H.m(this.y.q(0,"txtCubeMat"),"$iaB")
if(a7.y2)this.k3=H.m(this.y.q(0,"colorMat"),"$iaB")
this.sfU(H.d([],[A.aB]))
t=a7.ay
if(t>0){this.k4=H.h(this.y.q(0,"bendMatCount"),"$iO")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.m(f,"$iaB"))}}t=a7.a
if(t!==C.d){this.r2=H.m(this.y.q(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.m(this.y.q(0,"emissionTxt"),"$iap")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iO")
break
case C.i:this.ry=H.m(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iO")
break}}t=a7.b
if(t!==C.d){this.x2=H.m(this.y.q(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.m(this.y.q(0,"ambientTxt"),"$iap")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iO")
break
case C.i:this.y2=H.m(this.y.q(0,"ambientTxt"),"$iaq")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iO")
break}}t=a7.c
if(t!==C.d){this.am=H.m(this.y.q(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.bv=H.m(this.y.q(0,"diffuseTxt"),"$iap")
this.bw=H.m(this.y.q(0,"nullDiffuseTxt"),"$iO")
break
case C.i:this.dY=H.m(this.y.q(0,"diffuseTxt"),"$iaq")
this.bw=H.m(this.y.q(0,"nullDiffuseTxt"),"$iO")
break}}t=a7.d
if(t!==C.d){this.bx=H.m(this.y.q(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.dZ=H.m(this.y.q(0,"invDiffuseTxt"),"$iap")
this.by=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iO")
break
case C.i:this.e_=H.m(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.by=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iO")
break}}t=a7.e
if(t!==C.d){this.bB=H.m(this.y.q(0,"shininess"),"$ia3")
this.bz=H.m(this.y.q(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e0=H.m(this.y.q(0,"specularTxt"),"$iap")
this.bA=H.m(this.y.q(0,"nullSpecularTxt"),"$iO")
break
case C.i:this.e1=H.m(this.y.q(0,"specularTxt"),"$iaq")
this.bA=H.m(this.y.q(0,"nullSpecularTxt"),"$iO")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e2=H.m(this.y.q(0,"bumpTxt"),"$iap")
this.bC=H.m(this.y.q(0,"nullBumpTxt"),"$iO")
break
case C.i:this.e3=H.m(this.y.q(0,"bumpTxt"),"$iaq")
this.bC=H.m(this.y.q(0,"nullBumpTxt"),"$iO")
break}if(a7.dy){this.e4=H.m(this.y.q(0,"envSampler"),"$iaq")
this.e5=H.m(this.y.q(0,"nullEnvTxt"),"$iO")
t=a7.r
if(t!==C.d){this.bD=H.m(this.y.q(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e6=H.m(this.y.q(0,"reflectTxt"),"$iap")
this.bE=H.m(this.y.q(0,"nullReflectTxt"),"$iO")
break
case C.i:this.e7=H.m(this.y.q(0,"reflectTxt"),"$iaq")
this.bE=H.m(this.y.q(0,"nullReflectTxt"),"$iO")
break}}t=a7.x
if(t!==C.d){this.bF=H.m(this.y.q(0,"refraction"),"$ia3")
this.bG=H.m(this.y.q(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e8=H.m(this.y.q(0,"refractTxt"),"$iap")
this.bH=H.m(this.y.q(0,"nullRefractTxt"),"$iO")
break
case C.i:this.e9=H.m(this.y.q(0,"refractTxt"),"$iaq")
this.bH=H.m(this.y.q(0,"nullRefractTxt"),"$iO")
break}}}t=a7.y
if(t!==C.d){this.bI=H.m(this.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:this.ea=H.m(this.y.q(0,"alphaTxt"),"$iap")
this.bJ=H.m(this.y.q(0,"nullAlphaTxt"),"$iO")
break
case C.i:this.eb=H.m(this.y.q(0,"alphaTxt"),"$iaq")
this.bJ=H.m(this.y.q(0,"nullAlphaTxt"),"$iO")
break}}this.sh3(H.d([],[A.cN]))
this.sio(H.d([],[A.cP]))
this.siN(H.d([],[A.cQ]))
this.siY(H.d([],[A.cR]))
this.siZ(H.d([],[A.cS]))
this.sj_(H.d([],[A.cT]))
if(a7.k2){t=a7.z
if(t>0){this.ec=H.h(this.y.q(0,"dirLightCount"),"$iO")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.cu;(s&&C.a).h(s,new A.cN(g,f,e))}}t=a7.Q
if(t>0){this.ed=H.h(this.y.q(0,"pntLightCount"),"$iO")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$ia3")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia3")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia3")
s=this.cv;(s&&C.a).h(s,new A.cP(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ee=H.h(this.y.q(0,"spotLightCount"),"$iO")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia3")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia3")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia3")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia3")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia3")
s=this.cw;(s&&C.a).h(s,new A.cQ(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ef=H.h(this.y.q(0,"txtDirLightCount"),"$iO")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iM")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iO")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iap")
s=this.cz;(s&&C.a).h(s,new A.cR(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eg=H.h(this.y.q(0,"txtPntLightCount"),"$iO")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$icO")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iO")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia3")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia3")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia3")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$iaq")
s=this.cA;(s&&C.a).h(s,new A.cS(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eh=H.h(this.y.q(0,"txtSpotLightCount"),"$iO")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iM")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iO")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iM")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia3")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a3,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a4,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a5,"$ia3")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a6,"$iap")
s=this.cB;(s&&C.a).h(s,new A.cT(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
al:function(a,b,c){C.c.W(b.a,b.d,1)},
ae:function(a,b,c){C.c.W(b.a,b.d,1)},
sfU:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sh3:function(a){this.cu=H.k(a,"$ib",[A.cN],"$ab")},
sio:function(a){this.cv=H.k(a,"$ib",[A.cP],"$ab")},
siN:function(a){this.cw=H.k(a,"$ib",[A.cQ],"$ab")},
siY:function(a){this.cz=H.k(a,"$ib",[A.cR],"$ab")},
siZ:function(a){this.cA=H.k(a,"$ib",[A.cS],"$ab")},
sj_:function(a){this.cB=H.k(a,"$ib",[A.cT],"$ab")}}
A.hz.prototype={
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
if(0>=c.length)return H.f(c,0)
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
A.cN.prototype={}
A.cR.prototype={}
A.cP.prototype={}
A.cS.prototype={}
A.cQ.prototype={}
A.cT.prototype={}
A.cH.prototype={
ft:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dh:function(a,b){var u,t,s
u=this.a
t=C.c.jQ(u,b)
C.c.fg(u,t,a)
C.c.jK(u,t)
if(!H.li(C.c.f7(u,t,35713))){s=C.c.f6(u,t)
C.c.jT(u,t)
throw H.c(P.w("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
iI:function(){var u,t,s,r,q,p
u=H.d([],[A.dj])
t=this.a
s=H.ai(C.c.bR(t,this.r,35721))
if(typeof s!=="number")return H.I(s)
r=0
for(;r<s;++r){q=C.c.f0(t,this.r,r)
p=C.c.f2(t,this.r,q.name)
C.a.h(u,new A.dj(t,q.name,p))}this.x=new A.fr(u)},
iK:function(){var u,t,s,r,q,p
u=H.d([],[A.ef])
t=this.a
s=H.ai(C.c.bR(t,this.r,35718))
if(typeof s!=="number")return H.I(s)
r=0
for(;r<s;++r){q=C.c.f1(t,this.r,r)
p=C.c.f8(t,this.r,q.name)
C.a.h(u,this.jR(q.type,q.size,q.name,p))}this.y=new A.iU(u)},
aP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.O(u,t,b,c)
else return A.l6(u,t,b,a,c)},
h0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ap(u,t,b,c)
else return A.l6(u,t,b,a,c)},
h1:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.l6(u,t,b,a,c)},
bq:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jR:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.iP(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.iS(this.a,this.r,c,d)
case 35667:return new A.iQ(this.a,this.r,c,d)
case 35668:return new A.iR(this.a,this.r,c,d)
case 35669:return new A.iT(this.a,this.r,c,d)
case 35674:return new A.iV(this.a,this.r,c,d)
case 35675:return new A.cO(this.a,this.r,c,d)
case 35676:return new A.aB(this.a,this.r,c,d)
case 35678:return this.h0(b,c,d)
case 35680:return this.h1(b,c,d)
case 35670:throw H.c(this.bq("BOOL",c))
case 35671:throw H.c(this.bq("BOOL_VEC2",c))
case 35672:throw H.c(this.bq("BOOL_VEC3",c))
case 35673:throw H.c(this.bq("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bW.prototype={
i:function(a){return this.b}}
A.ef.prototype={}
A.iU.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kd:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kd("\n")}}
A.O.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sj0:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cO.prototype={
ap:function(a){var u=new Float32Array(H.ca(H.k(a,"$ib",[P.r],"$ab")))
C.c.eV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aB.prototype={
ap:function(a){var u=new Float32Array(H.ca(H.k(a,"$ib",[P.r],"$ab")))
C.c.eW(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kf.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cH(u.b,b).cH(u.d.cH(u.c,b),c)
a.sa4(0,new V.a2(t.a,t.b,t.c))
a.seQ(t.B(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdQ(new V.b7(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.kp.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.kr.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.I(q)
t=-t*q
p=s*q
a.sa4(0,new V.a2(t,p,r))
p=new V.J(t,p,r)
a.seQ(p.B(0,Math.sqrt(p.I(p))))
a.sdQ(new V.b7(1-c,2+c,-1,-1))},
$S:8}
F.ks.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.kt.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kM.prototype={
$2:function(a,b){return 0},
$S:31}
F.kN.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.I(u)
t=a.f
s=new V.J(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.I(s))).F(0,this.b+u)
a.sa4(0,new V.a2(u.a,u.b,u.c))},
$S:8}
F.kO.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:19}
F.kA.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a2(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:19}
F.kq.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lw(t.$1(u),s)
s=J.nc(J.lw(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.J(s.a,s.b,s.c)
q=s.B(0,Math.sqrt(s.I(s)))
t=$.mg
if(t==null){t=new V.J(1,0,0)
$.mg=t
p=t}else p=t
t=q.aH(!J.U(q,p)?V.mj():p)
o=t.B(0,Math.sqrt(t.I(t)))
t=o.aH(q)
p=t.B(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.F(0,t*s)
s=o.F(0,m*s)
a.sa4(0,J.nb(r,new V.a2(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
b7:function(){if(!this.gb8()){C.a.O(this.a.a.d.b,this)
this.a.a.a3()}this.cb()
this.cc()
this.iv()},
cg:function(a){this.a=a
C.a.h(a.d.b,this)},
ci:function(a){this.b=a
C.a.h(a.d.c,this)},
iH:function(a){this.c=a
C.a.h(a.d.d,this)},
cb:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
cc:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
iv:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fT:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cV()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eu())return
return q.B(0,Math.sqrt(q.I(q)))},
fX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.J(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.J(u.a,u.b,u.c)
u=q.aH(u.B(0,Math.sqrt(u.I(u))))
return u.B(0,Math.sqrt(u.I(u)))},
co:function(){if(this.d!=null)return!0
var u=this.fT()
if(u==null){u=this.fX()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cV()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eu())return
return q.B(0,Math.sqrt(q.I(q)))},
fW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.N().a){u=m.t(0,p)
u=new V.J(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.t(0,p).F(0,g).p(0,p).t(0,s)
u=new V.J(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.I(u)))
u=f.aH(h)
u=u.B(0,Math.sqrt(u.I(u))).aH(f)
h=u.B(0,Math.sqrt(u.I(u)))}return h},
cm:function(){if(this.e!=null)return!0
var u=this.fS()
if(u==null){u=this.fW()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjJ:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t
if(this.gb8())return a+"disposed"
u=a+C.b.ai(J.at(this.a.e),0)+", "+C.b.ai(J.at(this.b.e),0)+", "+C.b.ai(J.at(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.G("")}}
F.fZ.prototype={}
F.ik.prototype={
bb:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bl.prototype={
b7:function(){if(!this.gb8()){C.a.O(this.a.a.c.b,this)
this.a.a.a3()}this.cb()
this.cc()},
cg:function(a){this.a=a
C.a.h(a.c.b,this)},
ci:function(a){this.b=a
C.a.h(a.c.c,this)},
cb:function(){var u=this.a
if(u!=null){C.a.O(u.c.b,this)
this.a=null}},
cc:function(){var u=this.b
if(u!=null){C.a.O(u.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){if(this.gb8())return a+"disposed"
return a+C.b.ai(J.at(this.a.e),0)+", "+C.b.ai(J.at(this.b.e),0)},
R:function(){return this.G("")}}
F.hj.prototype={}
F.iN.prototype={
bb:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
return u==t.e}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
return u==t.e}else return!1}}}
F.bH.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ai(J.at(u.e),0)},
R:function(){return this.G("")}}
F.e2.prototype={
gE:function(){var u=this.e
if(u==null){u=D.a0()
this.e=u}return u},
bc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jL())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bH()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.N(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nF(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.ct(k,j,h)}u=this.e
if(u!=null)u.an(0)},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.an(0)
return t},
ko:function(a,b){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
for(u=[F.ah];t.length!==0;){s=C.a.gk9(t)
C.a.eM(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.f(t,q)
p=t[q]
if(p!=null&&a.bb(0,s,p)){C.a.h(r,p)
C.a.eM(t,q)}}if(r.length>1)b.bc(r)}}this.a.A()
this.c.cO()
this.d.cO()
this.b.kI()
this.c.cP(new F.iN())
this.d.cP(new F.ik())
u=this.e
if(u!=null)u.an(0)},
ju:function(a){this.ko(new F.je(),new F.hQ())},
cj:function(){return this.ju(null)},
cC:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cC()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.f(u,t)
s=u[t]
u=s.r
if(u!=null)s.sey(new V.J(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.J(r,q,u).B(0,Math.sqrt(r*r+q*q+u*u))
if(!J.U(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.N(null)}}}}u=this.e
if(u!=null)u.an(0)},
jE:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bt()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bs().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.bu().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.de().a)!==0)++r
if((s&$.df().a)!==0)++r
if((s&$.ck().a)!==0)++r
if((s&$.bq().a)!==0)++r
q=a1.gcY(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dl])
for(m=0,l=0;l<r;++l){k=a1.jy(l)
j=k.gcY(k)
C.a.n(n,l,new Z.dl(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].km(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.c.aw(t,34962,e)
C.c.dT(t,34962,new Float32Array(H.ca(o)),35044)
C.c.aw(t,34962,null)
d=new Z.dm(new Z.em(34962,e),n,a1)
d.shd(H.d([],[Z.bD]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.l9(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bD(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.l9(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bD(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.l9(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bD(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
aa:function(a){var u=this.e
if(u!=null)u.N(a)},
a3:function(){return this.aa(null)},
$ipq:1}
F.ic.prototype={
jq:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.f(a,p)
p=a[p]
if(q>=o)return H.f(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ct(s,p,o))}}return u},
jr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.ct(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ct(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ct(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ct(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cP:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bb(0,p,n)){p.b7()
break}}}}},
cO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gjJ(s)
if(t)s.b7()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].co())s=!1
return s},
cn:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cm())s=!1
return s},
cC:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.N(null)}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sh7:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.id.prototype={
gl:function(a){return this.b.length},
cP:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bb(0,p,n)){p.b7()
break}}}}},
cO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.b7()}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
R:function(){return this.G("")},
shh:function(a){this.b=H.k(a,"$ib",[F.bl],"$ab")}}
F.ie.prototype={
gl:function(a){return this.b.length},
kI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.O(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.N(null)}s=t.a
if(s!=null){C.a.O(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc8:function(a){this.b=H.k(a,"$ib",[F.bH],"$ab")}}
F.ah.prototype={
cr:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.el(this.cx,s,p,u,t,r,q,a,o)},
jL:function(){return this.cr(null)},
sa4:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
sey:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.I(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
seQ:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdQ:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
km:function(a){var u,t
if(a.v(0,$.bt())){u=this.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bs())){u=this.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.br())){u=this.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bu())){u=this.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bv())){u=this.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.de())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.df())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.ck()))return H.d([this.ch],[P.r])
else if(a.v(0,$.bq())){u=this.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
co:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cV()
this.d.M(0,new F.jj(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.an(0)}return!0},
cm:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cV()
this.d.M(0,new F.ji(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.an(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.b.ai(J.at(this.e),0))
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
C.a.h(u,V.W(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
R:function(){return this.G("")}}
F.jj.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.ji.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.j9.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
jt:function(a,b,c,d,e,f,g,h,i){var u=F.el(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
js:function(a,b,c,d,e,f){return this.jt(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].co()
return!0},
cn:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cm()
return!0},
jF:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.N(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
this.A()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sj1:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.ja.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.f(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.f(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
M:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.M(this.b,b)
C.a.M(this.c,new F.jb(this,b))
C.a.M(this.d,new F.jc(this,b))},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sh8:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sh9:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sha:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jb.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jc.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:6}
F.jd.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.f(u,s)
return u[s]}else{if(b<0)return H.f(u,b)
return u[b]}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
shi:function(a){this.b=H.k(a,"$ib",[F.bl],"$ab")},
shj:function(a){this.c=H.k(a,"$ib",[F.bl],"$ab")}}
F.jf.prototype={}
F.je.prototype={
bb:function(a,b,c){return J.U(b.f,c.f)}}
F.jg.prototype={}
F.hQ.prototype={
bc:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.cV()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].sey(u)
return}}
F.jh.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc8:function(a){this.b=H.k(a,"$ib",[F.bH],"$ab")}}
O.dN.prototype={
gE:function(){var u=this.dy
if(u==null){u=D.a0()
this.dy=u}return u},
ad:function(a){var u
H.h(a,"$iB")
u=this.dy
if(u!=null)u.N(a)},
fM:function(){return this.ad(null)},
dA:function(a){H.h(a,"$iB")
this.a=null
this.ad(a)},
iB:function(){return this.dA(null)},
hA:function(a,b){var u=V.ao
u=new D.c_(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ad(u)},
hC:function(a,b){var u=V.ao
u=new D.c0(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ad(u)},
de:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a6(u.e.length+3,4)*4
s=C.f.a6(u.f.length+3,4)*4
r=C.f.a6(u.r.length+3,4)*4
q=C.f.a6(u.x.length+3,4)*4
p=C.f.a6(u.y.length+3,4)*4
o=C.f.a6(u.z.length+3,4)*4
n=C.f.a6(this.e.a.length+3,4)*4
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
a7=$.bt()
if(a0){b=$.bs()
a7=new Z.bc(a7.a|b.a)}if(a1){b=$.br()
a7=new Z.bc(a7.a|b.a)}if(a2){b=$.bu()
a7=new Z.bc(a7.a|b.a)}if(a3){b=$.bv()
a7=new Z.bc(a7.a|b.a)}if(a5){b=$.bq()
a7=new Z.bc(a7.a|b.a)}return new A.hz(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
X:function(a,b){H.k(a,"$ib",[T.e8],"$ab")},
aB:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();){t=u.d
t.toString
s=$.bJ
if(s==null){s=new V.a2(0,0,0)
$.bJ=s}t.a=s
s=$.j8
if(s==null){s=new V.J(0,0,1)
$.j8=s}t.b=s
s=t.c
if(s!=null){r=s.b_(0,b,t)
if(r!=null){t.a=r.aZ(t.a)
t.b=r.cS(t.b)}}}},
kK:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.de()
t=a4.fr.j(0,u.am)
if(t==null){t=A.nL(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.bt(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bv
u=a5.e
if(!(u instanceof Z.dm)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.ax()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cn()
o.a.cn()
o=o.e
if(o!=null)o.an(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jF()
n=n.e
if(n!=null)n.an(0)}l=a5.d.jE(new Z.jl(a4.a),q)
l.aV($.bt()).e=this.a.Q.c
if(u)l.aV($.bs()).e=this.a.cx.c
if(p)l.aV($.br()).e=this.a.ch.c
if(r.rx)l.aV($.bu()).e=this.a.cy.c
if(o)l.aV($.bv()).e=this.a.db.c
if(r.x1)l.aV($.bq()).e=this.a.dx.c
a5.e=l}u=T.e8
k=H.d([],[u])
p=this.a
o=a4.a
C.c.eY(o,p.r)
p.x.k5()
if(r.fx){p=this.a
n=a4.dx
n=n.ga1(n)
p=p.dy
p.toString
p.ap(n.aj(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga1(n)
m=a4.dx
m=n.F(0,m.ga1(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ap(n.aj(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkG()
m=a4.dx
m=n.F(0,m.ga1(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ap(n.aj(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ap(C.q.aj(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ap(C.q.aj(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ap(C.q.aj(n,!0))}if(r.ay>0){j=this.e.a.length
p=this.a.k4
C.c.W(p.a,p.d,j)
for(p=[P.r],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.f(m,i)
m=m[i]
n.toString
H.h(m,"$iao")
n=n.r1
if(i>=n.length)return H.f(n,i)
n=n[i]
h=new Float32Array(H.ca(H.k(m.aj(0,!0),"$ib",p,"$ab")))
C.c.eW(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.f.d)
p=this.a
n=this.f.d
p.al(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.f.e)
p=this.a
n=this.f.e
p.ae(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.r.d)
p=this.a
n=this.r.d
p.al(p.y1,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.r.e)
p=this.a
n=this.r.e
p.ae(p.y2,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.am
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.x.d)
p=this.a
n=this.x.d
p.al(p.bv,p.bw,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.x.e)
p=this.a
n=this.x.e
p.ae(p.dY,p.bw,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bx
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.X(k,this.y.d)
p=this.a
n=this.y.d
p.al(p.dZ,p.by,n)
n=this.a
p=this.y.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.X(k,this.y.e)
p=this.a
n=this.y.e
p.ae(p.e_,p.by,n)
n=this.a
p=this.y.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bz
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bB
C.c.T(n.a,n.d,g)
break
case C.h:this.X(k,this.z.d)
p=this.a
n=this.z.d
p.al(p.e0,p.bA,n)
n=this.a
p=this.z.f
n=n.bz
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bB
C.c.T(p.a,p.d,g)
break
case C.i:this.X(k,this.z.e)
p=this.a
n=this.z.e
p.ae(p.e1,p.bA,n)
n=this.a
p=this.z.f
n=n.bz
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bB
C.c.T(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ec
C.c.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cu
if(e>=m.length)return H.f(m,e)
b=m[e]
m=f.cS(c.gcs(c))
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.c.w(a.a,a.d,g,m,a0)
a0=c.gaf(c)
m=b.c
C.c.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ed
C.c.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cv
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gcK(c)
g=b.b
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=f.aZ(c.gcK(c))
g=b.c
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gaf(c)
g=b.d
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdN()
g=b.e
C.c.T(g.a,g.d,m)
m=c.gdO()
g=b.f
C.c.T(g.a,g.d,m)
m=c.gdP()
g=b.r
C.c.T(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ee
C.c.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cw
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.a
g=b.b
a=m.a
a0=m.b
m=m.c
C.c.w(g.a,g.d,a,a0,m)
m=c.b
a0=m.a
a=m.b
g=m.c
g=m.B(0,Math.sqrt(a0*a0+a*a+g*g))
a=b.c
a0=g.a
m=g.b
g=g.c
C.c.w(a.a,a.d,a0,m,g)
g=f.aZ(c.a)
m=b.d
C.c.w(m.a,m.d,g.a,g.b,g.c)
g=c.d
m=b.e
C.c.w(m.a,m.d,g.a,g.b,g.c)
g=c.e
m=b.f
C.c.T(m.a,m.d,g)
g=c.f
m=b.r
C.c.T(m.a,m.d,g)
g=c.r
m=b.x
C.c.T(m.a,m.d,g)
g=c.x
m=b.y
C.c.T(m.a,m.d,g)
g=c.y
m=b.z
C.c.T(m.a,m.d,g);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ef
C.c.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cz
if(e>=g.length)return H.f(g,e)
b=g[e]
g=c.gbg()
H.k(k,"$ib",m,"$ab")
if(!C.a.Y(k,g)){g.sb9(0,k.length)
C.a.h(k,g)}g=c.gcs(c)
a=b.d
C.c.w(a.a,a.d,g.a,g.b,g.c)
g=c.gkW()
a=b.b
C.c.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbN(c)
a=b.c
C.c.w(a.a,a.d,g.a,g.b,g.c)
g=f.cS(c.gcs(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.c.w(a0.a,a0.d,a,g,a1)
a1=c.gaf(c)
g=b.f
C.c.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbg()
g=a1.gba(a1)
if(!g){g=b.x
C.c.W(g.a,g.d,1)}else{g=b.r
a=a1.gba(a1)
a0=g.a
g=g.d
if(!a)C.c.W(a0,g,0)
else C.c.W(a0,g,a1.gb9(a1))
g=b.x
C.c.W(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eg
C.c.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.y,n=p.length,m=[P.r],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cA
if(e>=a.length)return H.f(a,e)
b=a[e]
a=c.gbg()
H.k(k,"$ib",g,"$ab")
if(!C.a.Y(k,a)){a.sb9(0,k.length)
C.a.h(k,a)}a2=f.F(0,c.ga1(c))
a=c.ga1(c)
a0=$.bJ
if(a0==null){a0=new V.a2(0,0,0)
$.bJ=a0}a0=a.aZ(a0)
a=b.b
C.c.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bJ
if(a==null){a=new V.a2(0,0,0)
$.bJ=a}a=a2.aZ(a)
a0=b.c
C.c.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.es(0)
a0=b.d
h=new Float32Array(H.ca(H.k(new V.dP(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).aj(0,!0),"$ib",m,"$ab")))
C.c.eV(a0.a,a0.d,!1,h)
a0=c.gaf(c)
a=b.e
C.c.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbg()
a=a0.gba(a0)
if(!a){a=b.r
C.c.W(a.a,a.d,1)}else{a=b.f
a1=a0.gba(a0)
a3=a.a
a=a.d
if(!a1)C.c.W(a3,a,0)
else C.c.W(a3,a,a0.gb9(a0))
a=b.r
C.c.W(a.a,a.d,0)}a=c.gdN()
a0=b.x
C.c.T(a0.a,a0.d,a)
a=c.gdO()
a0=b.y
C.c.T(a0.a,a0.d,a)
a=c.gdP()
a0=b.z
C.c.T(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eh
C.c.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cB
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gbg()
H.k(k,"$ib",u,"$ab")
if(!C.a.Y(k,m)){m.sb9(0,k.length)
C.a.h(k,m)}m=c.gcK(c)
g=b.b
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcs(c)
g=b.c
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gkW()
g=b.d
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbN(c)
g=b.e
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=f.aZ(c.gcK(c))
g=b.f
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbg()
g=m.gba(m)
if(!g){m=b.x
C.c.W(m.a,m.d,1)}else{g=b.r
a=m.gba(m)
a0=g.a
g=g.d
if(!a)C.c.W(a0,g,0)
else C.c.W(a0,g,m.gb9(m))
m=b.x
C.c.W(m.a,m.d,0)}m=c.gaf(c)
g=b.y
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gl5()
g=b.z
C.c.T(g.a,g.d,m)
m=c.gl6()
g=b.Q
C.c.T(g.a,g.d,m)
m=c.gdN()
g=b.ch
C.c.T(g.a,g.d,m)
m=c.gdO()
g=b.cx
C.c.T(g.a,g.d,m)
m=c.gdP()
g=b.cy
C.c.T(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.X(k,this.Q.d)
u=this.a
p=this.Q.d
u.al(u.e2,u.bC,p)
break
case C.i:this.X(k,this.Q.e)
u=this.a
p=this.Q.e
u.ae(u.e3,u.bC,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga1(p).es(0)
a4.Q=p}u=u.id
u.toString
u.ap(p.aj(0,!0))}if(r.dy){this.X(k,this.ch)
u=this.a
p=this.ch
u.ae(u.e4,u.e5,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bD
u.toString
n=p.a
m=p.b
p=p.c
C.c.w(u.a,u.d,n,m,p)
break
case C.h:this.X(k,this.cx.d)
u=this.a
p=this.cx.d
u.al(u.e6,u.bE,p)
p=this.a
u=this.cx.f
p=p.bD
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
break
case C.i:this.X(k,this.cx.e)
u=this.a
p=this.cx.e
u.ae(u.e7,u.bE,p)
p=this.a
u=this.cx.f
p=p.bD
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bG
u.toString
n=p.a
m=p.b
p=p.c
C.c.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bF
C.c.T(p.a,p.d,m)
break
case C.h:this.X(k,this.cy.d)
u=this.a
p=this.cy.d
u.al(u.e8,u.bH,p)
p=this.a
u=this.cy.f
p=p.bG
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bF
C.c.T(u.a,u.d,m)
break
case C.i:this.X(k,this.cy.e)
u=this.a
p=this.cy.e
u.ae(u.e9,u.bH,p)
p=this.a
u=this.cy.f
p=p.bG
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bF
C.c.T(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bI
C.c.T(u.a,u.d,n)
break
case C.h:this.X(k,this.db.d)
u=this.a
n=this.db.d
u.al(u.ea,u.bJ,n)
n=this.a
u=this.db.f
n=n.bI
C.c.T(n.a,n.d,u)
break
case C.i:this.X(k,this.db.e)
u=this.a
n=this.db.e
u.ae(u.eb,u.bJ,n)
n=this.a
u=this.db.f
n=n.bI
C.c.T(n.a,n.d,u)
break}C.c.ct(o,3042)
C.c.jD(o,770,771)}for(i=0;i<k.length;++i)k[i].br(a4)
u=a5.e
u.br(a4)
u.aX(a4)
u.eU(a4)
if(p)C.c.jX(o,3042)
for(i=0;i<k.length;++i)k[i].eU(a4)
u=this.a
u.toString
C.c.eY(o,null)
u.x.jY()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.de().am},
sfV:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.hx.prototype={}
O.dO.prototype={
aQ:function(){}}
O.hy.prototype={}
O.b5.prototype={
dC:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.Q(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.ad(t)}},
aQ:function(){this.fm()
this.dC(new V.a1(1,1,1))},
saf:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aQ()
u=this.a
u.a=null
u.ad(null)}this.dC(b)}}
O.hA.prototype={
iG:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.Q(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.ad(u)}},
aQ:function(){this.bV()
this.iG(1)}}
O.hB.prototype={
cd:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.Q(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.ad(u)}},
aQ:function(){this.bV()
this.cd(100)}}
O.bL.prototype={}
T.e8.prototype={}
T.iB.prototype={}
V.bg.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dM.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aJ:function(a,b){return!this.fl(0,b)},
i:function(a){return"!["+this.cZ(0)+"]"}}
V.i1.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c4(this.a)
t=H.c4(this.b)
return u+".."+t},
$iaz:1}
V.ib.prototype={
fs:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aO([P.o,P.S])
for(t=new H.cz(a,a.gl(a),0,[H.as(a,"y",0)]);t.C();)u.n(0,t.d,!0)
this.siE(u)},
aJ:function(a,b){return this.a.bt(0,b)},
i:function(a){var u=this.a
return P.e4(u.ga7(u),0,null)},
siE:function(a){this.a=H.k(a,"$iE",[P.o,P.S],"$aE")},
$iaz:1}
V.cI.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cM(this.a.k(0,b))
r.sa8(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
k8:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
siX:function(a){this.c=H.k(a,"$ib",[V.cM],"$ab")}}
V.ed.prototype={
i:function(a){var u,t
u=H.lr(this.b,"\n","\\n")
t=H.lr(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cL.prototype={
aK:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siw:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iE.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cI(this,b)
u.siX(H.d([],[V.cM]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cL(this,a)
t=P.e
u.siw(new H.aO([t,t]))
this.b.n(0,a,u)}return u},
eT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ed])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.H(a,o)
m=t.k8(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.e4(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.e4(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ed(j==null?k.b:j,l,o)}++o}}},
siO:function(a){this.a=H.k(a,"$iE",[P.e,V.cI],"$aE")},
siQ:function(a){this.b=H.k(a,"$iE",[P.e,V.cL],"$aE")}}
V.cM.prototype={
i:function(a){return this.b.b+": "+this.cZ(0)}}
X.dp.prototype={$ibn:1}
X.h5.prototype={
gE:function(){var u=this.x
if(u==null){u=D.a0()
this.x=u}return u}}
X.dW.prototype={
gE:function(){var u=this.f
if(u==null){u=D.a0()
this.f=u}return u},
aO:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.N(a)},
fP:function(){return this.aO(null)},
saW:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gE().O(0,this.gd2())
t=this.b
this.b=a
if(a!=null)a.gE().h(0,this.gd2())
u=new D.Q("mover",t,this.b,this,[U.ak])
u.b=!0
this.aO(u)}},
$ibn:1,
$idp:1}
X.e7.prototype={}
V.bz.prototype={
bl:function(a){this.b=new P.h8(C.X)
this.c=null
this.sc3(H.d([],[[P.b,W.aD]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aD]))
t=a.split("\n")
for(u=t.length,s=[W.aD],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.G(p)
n=this.b.h_(p,0,p.length)
m=n==null?p:n
C.k.fd(o,H.lr(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eH:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bu()
this.c=t}for(t=t.eT(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bM(t[r])},
sc3:function(a){this.d=H.k(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kL.prototype={
$1:function(a){H.h(a,"$ib9")
P.lq(C.e.eS(this.a.gke(),2)+" fps")},
$S:50}
V.fL.prototype={
bM:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break
case"Type":this.P(a.b,"#B11")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bu:function(){var u,t,s,r
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.Z("a","z")
C.a.h(t.a,s)
s=V.Z("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.Z("0","9")
C.a.h(s.a,t)
t=V.Z("a","z")
C.a.h(s.a,t)
t=V.Z("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.Z("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.Z("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.Z("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.Z("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.x(new H.v('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.x(new H.v('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.x(new H.v("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.x(new H.v('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bg())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.x(new H.v("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.x(new H.v("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.x(new H.v("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.x(new H.v("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bg())
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.v("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.v("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.az]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.av()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.x(new H.v("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.x(new H.v(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.x(new H.v(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.S("Num")
s=u.k(0,"Float")
s.d=s.a.S("Num")
s=u.k(0,"Sym")
s.d=s.a.S("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.S("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.S("String")
s=u.k(0,"EndComment")
s.d=s.a.S("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.S("Whitespace")
s=u.k(0,"Id")
t=s.a.S("Id")
s.d=t
s=[P.e]
t.aK(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aK(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aK(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.h6.prototype={
bM:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Preprocess":this.P(a.b,"#737")
break
case"Reserved":this.P(a.b,"#119")
break
case"Symbol":this.P(a.b,"#611")
break
case"Type":this.P(a.b,"#171")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bu:function(){var u,t,s,r
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.Z("a","z")
C.a.h(t.a,s)
s=V.Z("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.Z("0","9")
C.a.h(s.a,t)
t=V.Z("a","z")
C.a.h(s.a,t)
t=V.Z("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.Z("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.Z("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.Z("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.Z("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.v("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.v("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bg())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.az]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.x(new H.v(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.x(new H.v(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.S("Num")
t=u.k(0,"Float")
t.d=t.a.S("Num")
t=u.k(0,"Sym")
t.d=t.a.S("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.S("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.S("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.S("Whitespace")
t=u.k(0,"Id")
s=t.a.S("Id")
t.d=s
t=[P.e]
s.aK(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aK(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aK(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.h7.prototype={
bM:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
this.P("=","#111")
break
case"Id":this.P(a.b,"#111")
break
case"Other":this.P(a.b,"#111")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break}},
bu:function(){var u,t,s
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.Z("a","z")
C.a.h(t.a,s)
s=V.Z("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.Z("0","9")
C.a.h(s.a,t)
t=V.Z("a","z")
C.a.h(s.a,t)
t=V.Z("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.x(new H.v("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.x(new H.v("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.x(new H.v("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.x(new H.v('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.x(new H.v('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.x(new H.v("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.x(new H.v('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bg())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bg())
t=u.k(0,"Other").m(0,"Other")
s=new V.av()
s.sa8(H.d([],[V.az]))
C.a.h(t.a,s)
t=V.x(new H.v('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.Z("a","z")
C.a.h(s.a,t)
t=V.Z("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.S("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.S("String")
t=u.k(0,"Id")
s=t.a.S("Id")
t.d=s
s.aK(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.S("Attr")
s=u.k(0,"Other")
s.d=s.a.S("Other")
return u}}
V.hW.prototype={
eH:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aD]]))
this.P(C.a.m(b,"\n"),"#111")},
bM:function(a){},
bu:function(){return}}
V.i_.prototype={
dI:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.ma().gcM().j(0,H.l(u))
if(t==null)if(d){c.$0()
this.dG(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lA(this.c).h(0,q)
o=W.nz("radio")
o.checked=s
o.name=u
u=W.p
W.ae(o,"change",H.n(new V.i0(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.F.D(q,o)
n=r.createElement("span")
n.textContent=b
C.F.D(q,n)
J.lA(this.c).h(0,r.createElement("br"))},
b5:function(a,b,c){return this.dI(a,b,c,!1)},
dG:function(a){var u,t,s,r,q
u=P.ma()
t=P.e
s=P.nH(u.gcM(),t,t)
s.n(0,this.a,a)
r=u.eN(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iy(t,new P.jY([],[]).cT(""),"",q)}}
V.i0.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dG(this.d)}},
$S:21}
V.ig.prototype={
fu:function(a,b){var u,t,s,r,q,p,o
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
o=W.p
W.ae(u,"scroll",H.n(new V.ii(s),{func:1,ret:-1,args:[o]}),!1,o)},
dK:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eT(C.a.kk(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.pf(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.G(m[1])
l.textContent=H.G(m[0])
C.k.D(t,l)}else{k=P.f6(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
C.k.D(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.D(t,o)
break}}C.k.D(this.a,t)},
f3:function(a){var u,t,s,r
u=new V.fL("dart")
u.bl("dart")
t=new V.h6("glsl")
t.bl("glsl")
s=new V.h7("html")
s.bl("html")
r=C.a.ka(H.d([u,t,s],[V.bz]),new V.ij(a))
if(r!=null)return r
u=new V.hW("plain")
u.bl("plain")
return u},
dJ:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dd(r).a5(r,"+")){C.a.n(a7,s,C.b.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(a7,s,C.b.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f3(a5)
q.eH(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.f6(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lC(null)
i.href="#"+H.l(m)
i.textContent=a4
C.k.D(j,i)
C.w.D(k,j)
C.n.D(l,k)
C.o.D(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.w.D(a,r[a0])
C.n.D(e,d)
C.n.D(e,c)
C.n.D(e,a)
C.o.D(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gV(r);a3.C();)C.w.D(c,a3.gL(a3))
C.n.D(e,d)
C.n.D(e,c)
C.o.D(n,e)}},
jo:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.e],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.D(this.a,t)
r=C.o.he(t,-1)
s=H.h((r&&C.n).dn(r,-1),"$ib8").style
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
o=H.h(C.n.dn(r,-1),"$ib8")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.w).D(o,p)}},
iJ:function(){var u,t,s,r
if(this.b!=null)return
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.av()
r=[V.az]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.av()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.av()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.x(new H.v("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.x(new H.v("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bg())
s=u.k(0,"Other").m(0,"Other")
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.S("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.S("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.S("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.S("Link")
s=u.k(0,"Other")
s.d=s.a.S("Other")
this.b=u}}
V.ii.prototype={
$1:function(a){P.m6(C.y,new V.ih(this.a))},
$S:21}
V.ih.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ij.prototype={
$1:function(a){return H.h(a,"$ibz").a===this.a},
$S:52}
N.kC.prototype={
$0:function(){this.a.sab(0,F.ll(1,null,null,1))},
$S:0}
N.kD.prototype={
$0:function(){this.a.sab(0,F.lm(1,!0,!0,1,40,1))},
$S:0}
N.kE.prototype={
$0:function(){this.a.sab(0,F.lm(1,!0,!1,1,40,0))},
$S:0}
N.kF.prototype={
$0:function(){this.a.sab(0,F.pe(6,null,1,6))},
$S:0}
N.kG.prototype={
$0:function(){this.a.sab(0,F.mR(30,1,15,0.5))},
$S:0}
N.kH.prototype={
$0:function(){this.a.sab(0,F.p5(120,1,2,12,0.3,3))},
$S:0}
N.kI.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dJ("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dJ("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fi=u.i
u=J.dF.prototype
u.fk=u.i
u=P.i.prototype
u.fj=u.bP
u=W.T.prototype
u.bU=u.ag
u=W.eQ.prototype
u.fn=u.av
u=O.dO.prototype
u.fm=u.aQ
u=O.b5.prototype
u.bV=u.aQ
u=V.dM.prototype
u.fl=u.aJ
u.cZ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oM","of",11)
u(P,"oN","og",11)
u(P,"oO","oh",11)
t(P,"mE","oL",3)
s(W,"oZ",4,null,["$4"],["oj"],20,0)
s(W,"p_",4,null,["$4"],["ok"],20,0)
var m
r(m=E.an.prototype,"geD",0,0,null,["$1","$0"],["eE","kw"],1,0)
r(m,"geF",0,0,null,["$1","$0"],["eG","kx"],1,0)
r(m,"geB",0,0,null,["$1","$0"],["eC","kv"],1,0)
r(m,"gez",0,0,null,["$1","$0"],["eA","ks"],1,0)
q(m,"gkq","kr",10)
q(m,"gkt","ku",10)
r(m=E.ec.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
p(m,"gkM","eO",3)
o(m=X.ej.prototype,"ghR","hS",13)
o(m,"ghD","hE",13)
o(m,"ghL","hM",4)
o(m,"ghV","hW",27)
o(m,"ghT","hU",27)
o(m,"ghZ","i_",4)
o(m,"gi2","i3",4)
o(m,"ghP","hQ",4)
o(m,"gi0","i1",4)
o(m,"ghN","hO",4)
o(m,"gi4","i5",37)
o(m,"gi6","i7",13)
o(m,"gil","im",12)
o(m,"gih","ii",12)
o(m,"gij","ik",12)
r(m=D.dI.prototype,"gdt",0,0,null,["$1","$0"],["du","hX"],1,0)
o(m,"gi9","ia",39)
q(m,"ghx","hy",16)
q(m,"gie","ig",16)
r(D.bK.prototype,"ghF",0,0,null,["$1","$0"],["a9","hG"],1,0)
n(V.a4.prototype,"gl","cG",15)
n(V.J.prototype,"gl","cG",15)
r(m=U.cw.prototype,"gbm",0,0,null,["$1","$0"],["a0","ar"],1,0)
q(m,"gfH","fI",32)
q(m,"gib","ic",32)
r(m=U.ek.prototype,"gbm",0,0,null,["$1","$0"],["a0","ar"],1,0)
o(m,"ghq","hr",2)
o(m,"ghs","ht",2)
o(m,"ghu","hv",2)
o(m,"ghl","hm",2)
o(m,"ghn","ho",2)
o(m,"giV","iW",2)
o(m,"giT","iU",2)
o(m,"giR","iS",2)
r(m=M.dx.prototype,"gas",0,0,null,["$1","$0"],["aD","fJ"],1,0)
q(m,"ghH","hI",10)
q(m,"ghJ","hK",10)
r(m=O.dN.prototype,"gfL",0,0,null,["$1","$0"],["ad","fM"],1,0)
r(m,"giA",0,0,null,["$1","$0"],["dA","iB"],1,0)
q(m,"ghz","hA",30)
q(m,"ghB","hC",30)
r(X.dW.prototype,"gd2",0,0,null,["$1","$0"],["aO","fP"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.l0,J.a,J.au,P.eD,P.i,H.cz,P.b2,H.bY,H.cU,H.fE,H.i2,H.iK,P.bB,H.co,H.eV,P.af,H.hk,H.hm,H.hf,P.f0,P.be,P.aI,P.en,P.is,P.cJ,P.it,P.b9,P.am,P.ke,P.jS,P.c8,P.eC,P.y,P.k5,P.hs,P.bV,P.h9,P.kc,P.ka,P.S,P.ay,P.a5,P.b1,P.hU,P.e3,P.ev,P.h4,P.bC,P.b,P.E,P.L,P.aw,P.e,P.al,P.c9,P.j_,P.jV,W.fH,W.bO,W.D,W.dU,W.eQ,W.k0,W.dy,W.aA,W.jR,W.f7,P.jX,P.jM,P.R,O.a6,O.cA,E.fy,E.an,E.i3,E.ec,Z.em,Z.jl,Z.dm,Z.bD,Z.bc,D.fB,D.bX,D.B,X.dn,X.dG,X.hh,X.hp,X.aQ,X.hI,X.iG,X.ej,D.dt,D.a8,D.dX,D.bK,D.e9,D.ea,D.eb,V.a1,V.aL,V.fV,V.dP,V.ao,V.aa,V.a2,V.b7,V.e0,V.a4,V.J,U.ek,M.dx,A.dj,A.fr,A.hz,A.cN,A.cR,A.cP,A.cS,A.cQ,A.cT,A.bW,A.ef,A.iU,F.a9,F.fZ,F.bl,F.hj,F.bH,F.e2,F.ic,F.id,F.ie,F.ah,F.j9,F.ja,F.jd,F.jf,F.jg,F.jh,O.bL,O.dO,T.iB,V.bg,V.az,V.dM,V.i1,V.ib,V.cI,V.ed,V.cL,V.iE,X.dp,X.e7,X.dW,V.bz,V.i_,V.ig])
s(J.a,[J.hd,J.dE,J.dF,J.aN,J.bE,J.bj,H.cB,H.bG,W.j,W.fo,W.bT,W.b_,W.b0,W.V,W.ep,W.fM,W.fN,W.du,W.er,W.dw,W.et,W.fP,W.p,W.ew,W.aM,W.dB,W.ey,W.cx,W.dK,W.hC,W.eE,W.eF,W.aP,W.eG,W.eJ,W.aR,W.eN,W.dZ,W.eP,W.aT,W.eR,W.aU,W.eW,W.aF,W.eZ,W.iD,W.aW,W.f1,W.iI,W.j4,W.f8,W.fa,W.fc,W.fe,W.fg,P.b4,P.eA,P.b6,P.eL,P.hZ,P.eX,P.ba,P.f3,P.fs,P.eo,P.dk,P.dz,P.dY,P.c6,P.e1,P.eg,P.eT])
s(J.dF,[J.hV,J.bN,J.bk])
t(J.l_,J.aN)
s(J.bE,[J.dD,J.he])
t(P.ho,P.eD)
s(P.ho,[H.eh,W.js,W.ar,P.h0])
t(H.v,H.eh)
s(P.i,[H.fS,H.ht,H.cW])
s(H.fS,[H.c1,H.hl])
s(P.b2,[H.hu,H.jm])
t(H.hv,H.c1)
t(H.fF,H.fE)
s(P.bB,[H.hR,H.hg,H.iY,H.iM,H.fA,H.i9,P.dV,P.aK,P.iZ,P.iW,P.c7,P.fD,P.fK])
s(H.co,[H.kP,H.iy,H.kw,H.kx,H.ky,P.jo,P.jn,P.jp,P.jq,P.k4,P.k3,P.jz,P.jD,P.jA,P.jB,P.jC,P.jG,P.jH,P.jF,P.jE,P.iu,P.iv,P.km,P.jP,P.jO,P.jQ,P.hn,P.hr,P.kb,P.fQ,P.fR,P.j3,P.j0,P.j1,P.j2,P.k6,P.k7,P.k9,P.k8,P.ki,P.kh,P.kj,P.kk,W.fT,W.hE,W.hG,W.i8,W.ir,W.jy,W.hP,W.hO,W.jT,W.jU,W.k2,W.kd,P.jZ,P.ko,P.h1,P.h2,P.fu,E.i4,E.i5,E.i6,E.iC,D.fX,D.fY,F.kf,F.kp,F.kr,F.ks,F.kt,F.kM,F.kN,F.kO,F.kA,F.kq,F.jj,F.ji,F.jb,F.jc,V.kL,V.i0,V.ii,V.ih,V.ij,N.kC,N.kD,N.kE,N.kF,N.kG,N.kH,N.kI])
s(H.iy,[H.ip,H.cm])
t(P.hq,P.af)
s(P.hq,[H.aO,W.jr])
t(H.dR,H.bG)
s(H.dR,[H.d_,H.d1])
t(H.d0,H.d_)
t(H.cC,H.d0)
t(H.d2,H.d1)
t(H.dS,H.d2)
s(H.dS,[H.hJ,H.hK,H.hL,H.hM,H.hN,H.dT,H.cD])
t(P.jN,P.ke)
t(P.jL,P.jS)
t(P.f5,P.hs)
t(P.ei,P.f5)
s(P.bV,[P.fw,P.fU])
t(P.bA,P.it)
s(P.bA,[P.fx,P.h8,P.j7,P.j6])
t(P.j5,P.fU)
s(P.a5,[P.r,P.o])
s(P.aK,[P.c5,P.ha])
t(P.ju,P.c9)
s(W.j,[W.F,W.h_,W.aS,W.d3,W.aV,W.aG,W.d5,W.jk,W.cX,P.fv,P.bS])
s(W.F,[W.T,W.by,W.cr,W.cY])
s(W.T,[W.z,P.q])
s(W.z,[W.di,W.fp,W.cl,W.bx,W.bU,W.aD,W.h3,W.dA,W.cy,W.dH,W.ia,W.b8,W.e5,W.e6,W.ix,W.cK])
s(W.b_,[W.cp,W.fI,W.fJ])
t(W.fG,W.b0)
t(W.cq,W.ep)
t(W.es,W.er)
t(W.dv,W.es)
t(W.eu,W.et)
t(W.fO,W.eu)
t(W.aE,W.bT)
t(W.ex,W.ew)
t(W.cu,W.ex)
t(W.ez,W.ey)
t(W.bZ,W.ez)
t(W.dC,W.cr)
t(W.bM,W.p)
s(W.bM,[W.b3,W.ag,W.aX])
t(W.hD,W.eE)
t(W.hF,W.eF)
t(W.eH,W.eG)
t(W.hH,W.eH)
t(W.eK,W.eJ)
t(W.cE,W.eK)
t(W.eO,W.eN)
t(W.hX,W.eO)
t(W.i7,W.eP)
t(W.d4,W.d3)
t(W.il,W.d4)
t(W.eS,W.eR)
t(W.im,W.eS)
t(W.iq,W.eW)
t(W.f_,W.eZ)
t(W.iz,W.f_)
t(W.d6,W.d5)
t(W.iA,W.d6)
t(W.f2,W.f1)
t(W.iH,W.f2)
t(W.bd,W.ag)
t(W.f9,W.f8)
t(W.jt,W.f9)
t(W.eq,W.dw)
t(W.fb,W.fa)
t(W.jI,W.fb)
t(W.fd,W.fc)
t(W.eI,W.fd)
t(W.ff,W.fe)
t(W.jW,W.ff)
t(W.fh,W.fg)
t(W.k_,W.fh)
t(W.jv,W.jr)
t(W.jw,P.is)
t(W.la,W.jw)
t(W.jx,P.cJ)
t(W.k1,W.eQ)
t(P.jY,P.jX)
t(P.ab,P.jM)
t(P.eB,P.eA)
t(P.hi,P.eB)
t(P.eM,P.eL)
t(P.hS,P.eM)
t(P.cG,P.q)
t(P.eY,P.eX)
t(P.iw,P.eY)
t(P.f4,P.f3)
t(P.iJ,P.f4)
t(P.ft,P.eo)
t(P.hT,P.bS)
t(P.eU,P.eT)
t(P.io,P.eU)
s(E.fy,[Z.dl,A.cH,T.e8])
s(D.B,[D.c_,D.c0,D.Q,X.hY])
s(X.hY,[X.dL,X.bF,X.ee])
s(O.a6,[D.dI,U.cw])
s(D.fB,[U.fC,U.ak])
t(U.dq,U.ak)
t(A.hw,A.cH)
s(A.ef,[A.O,A.iQ,A.iR,A.iT,A.iO,A.a3,A.iP,A.M,A.iS,A.iV,A.cO,A.aB,A.ap,A.aq])
t(F.ik,F.fZ)
t(F.iN,F.hj)
t(F.je,F.jf)
t(F.hQ,F.jg)
t(O.dN,O.bL)
s(O.dO,[O.hx,O.hy,O.b5])
s(O.b5,[O.hA,O.hB])
s(V.dM,[V.av,V.cM])
t(X.h5,X.e7)
s(V.bz,[V.fL,V.h6,V.h7,V.hW])
u(H.eh,H.cU)
u(H.d_,P.y)
u(H.d0,H.bY)
u(H.d1,P.y)
u(H.d2,H.bY)
u(P.eD,P.y)
u(P.f5,P.k5)
u(W.ep,W.fH)
u(W.er,P.y)
u(W.es,W.D)
u(W.et,P.y)
u(W.eu,W.D)
u(W.ew,P.y)
u(W.ex,W.D)
u(W.ey,P.y)
u(W.ez,W.D)
u(W.eE,P.af)
u(W.eF,P.af)
u(W.eG,P.y)
u(W.eH,W.D)
u(W.eJ,P.y)
u(W.eK,W.D)
u(W.eN,P.y)
u(W.eO,W.D)
u(W.eP,P.af)
u(W.d3,P.y)
u(W.d4,W.D)
u(W.eR,P.y)
u(W.eS,W.D)
u(W.eW,P.af)
u(W.eZ,P.y)
u(W.f_,W.D)
u(W.d5,P.y)
u(W.d6,W.D)
u(W.f1,P.y)
u(W.f2,W.D)
u(W.f8,P.y)
u(W.f9,W.D)
u(W.fa,P.y)
u(W.fb,W.D)
u(W.fc,P.y)
u(W.fd,W.D)
u(W.fe,P.y)
u(W.ff,W.D)
u(W.fg,P.y)
u(W.fh,W.D)
u(P.eA,P.y)
u(P.eB,W.D)
u(P.eL,P.y)
u(P.eM,W.D)
u(P.eX,P.y)
u(P.eY,W.D)
u(P.f3,P.y)
u(P.f4,W.D)
u(P.eo,P.af)
u(P.eT,P.y)
u(P.eU,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bx.prototype
C.x=W.bU.prototype
C.k=W.aD.prototype
C.T=W.du.prototype
C.V=W.dA.prototype
C.W=W.dB.prototype
C.z=W.dC.prototype
C.Y=J.a.prototype
C.a=J.aN.prototype
C.f=J.dD.prototype
C.q=J.dE.prototype
C.e=J.bE.prototype
C.b=J.bj.prototype
C.a4=J.bk.prototype
C.F=W.dH.prototype
C.aa=W.cE.prototype
C.L=J.hV.prototype
C.M=W.dZ.prototype
C.c=P.c6.prototype
C.w=W.b8.prototype
C.o=W.e5.prototype
C.n=W.e6.prototype
C.C=J.bN.prototype
C.N=W.bd.prototype
C.O=W.cX.prototype
C.Q=new P.fx(!1)
C.P=new P.fw(C.Q)
C.R=new P.hU()
C.S=new P.j7()
C.l=new P.jN()
C.d=new A.bW(0,"ColorSourceType.None")
C.j=new A.bW(1,"ColorSourceType.Solid")
C.h=new A.bW(2,"ColorSourceType.Texture2D")
C.i=new A.bW(3,"ColorSourceType.TextureCube")
C.y=new P.b1(0)
C.U=new P.b1(5e6)
C.X=new P.h9("element",!0,!1,!1,!1)
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
C.G=H.d(u([127,2047,65535,1114111]),[P.o])
C.r=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a5=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.t=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.u=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a6=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.H=H.d(u([]),[P.e])
C.a7=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a8=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a9=new H.fF(0,{},C.H,[P.e,P.e])
C.m=new P.j5(!1)})();(function staticFields(){$.aZ=0
$.cn=null
$.lE=null
$.le=!1
$.mJ=null
$.mC=null
$.mP=null
$.ku=null
$.kz=null
$.lo=null
$.cb=null
$.da=null
$.db=null
$.lf=!1
$.a_=C.l
$.bi=null
$.kW=null
$.lL=null
$.lK=null
$.lT=null
$.lX=null
$.bJ=null
$.m1=null
$.me=null
$.mi=null
$.mg=null
$.mh=null
$.j8=null
$.mf=null
$.lW=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pm","mT",function(){return H.mI("_$dart_dartClosure")})
u($,"pn","lt",function(){return H.mI("_$dart_js")})
u($,"pt","mU",function(){return H.bb(H.iL({
toString:function(){return"$receiver$"}}))})
u($,"pu","mV",function(){return H.bb(H.iL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pv","mW",function(){return H.bb(H.iL(null))})
u($,"pw","mX",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pz","n_",function(){return H.bb(H.iL(void 0))})
u($,"pA","n0",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"py","mZ",function(){return H.bb(H.m8(null))})
u($,"px","mY",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pC","n2",function(){return H.bb(H.m8(void 0))})
u($,"pB","n1",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pS","lu",function(){return P.oe()})
u($,"pY","dg",function(){return[]})
u($,"pE","n3",function(){return P.ob()})
u($,"pT","n7",function(){return H.nM(H.ca(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pW","n9",function(){return P.o0("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"pX","na",function(){return P.oD()})
u($,"pU","n8",function(){return P.lN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pV","lv",function(){return P.l2(P.e,P.bC)})
u($,"pL","n6",function(){return Z.aH(0)})
u($,"pF","n4",function(){return Z.aH(511)})
u($,"pN","bt",function(){return Z.aH(1)})
u($,"pM","bs",function(){return Z.aH(2)})
u($,"pH","br",function(){return Z.aH(4)})
u($,"pO","bu",function(){return Z.aH(8)})
u($,"pP","bv",function(){return Z.aH(16)})
u($,"pI","de",function(){return Z.aH(32)})
u($,"pJ","df",function(){return Z.aH(64)})
u($,"pK","n5",function(){return Z.aH(96)})
u($,"pQ","ck",function(){return Z.aH(128)})
u($,"pG","bq",function(){return Z.aH(256)})
u($,"pl","mS",function(){return new V.fV(1e-9)})
u($,"pk","N",function(){return $.mS()})})()
var v={mangledGlobalNames:{o:"int",r:"double",a5:"num",e:"String",S:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:V.a2,args:[P.r]},{func:1,ret:P.S,args:[W.T,P.e,P.e,W.bO]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:P.S,args:[W.F]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.S,args:[W.aA]},{func:1,ret:P.S,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ao]]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.o,[P.i,U.ak]]},{func:1,ret:W.T,args:[W.F]},{func:1,args:[W.p]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.R,args:[P.o]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.L,args:[P.e,,]},{func:1,ret:P.S,args:[[P.i,D.a8]]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.aw]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[P.b9]},{func:1,args:[P.e]},{func:1,ret:P.S,args:[V.bz]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cB,DataView:H.bG,ArrayBufferView:H.bG,Float32Array:H.cC,Float64Array:H.cC,Int16Array:H.hJ,Int32Array:H.hK,Int8Array:H.hL,Uint16Array:H.hM,Uint32Array:H.hN,Uint8ClampedArray:H.dT,CanvasPixelArray:H.dT,Uint8Array:H.cD,HTMLAudioElement:W.z,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLImageElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMediaElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLVideoElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fo,HTMLAnchorElement:W.di,HTMLAreaElement:W.fp,HTMLBaseElement:W.cl,Blob:W.bT,HTMLBodyElement:W.bx,HTMLCanvasElement:W.bU,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cp,CSSUnitValue:W.cp,CSSPerspective:W.fG,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fI,CSSUnparsedValue:W.fJ,DataTransferItemList:W.fM,HTMLDivElement:W.aD,XMLDocument:W.cr,Document:W.cr,DOMException:W.fN,DOMImplementation:W.du,ClientRectList:W.dv,DOMRectList:W.dv,DOMRectReadOnly:W.dw,DOMStringList:W.fO,DOMTokenList:W.fP,Element:W.T,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cu,FileWriter:W.h_,HTMLFormElement:W.h3,Gamepad:W.aM,HTMLHeadElement:W.dA,History:W.dB,HTMLCollection:W.bZ,HTMLFormControlsCollection:W.bZ,HTMLOptionsCollection:W.bZ,HTMLDocument:W.dC,ImageData:W.cx,HTMLInputElement:W.cy,KeyboardEvent:W.b3,HTMLLabelElement:W.dH,Location:W.dK,MediaList:W.hC,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.aP,MimeTypeArray:W.hH,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aR,PluginArray:W.hX,Range:W.dZ,RTCStatsReport:W.i7,HTMLSelectElement:W.ia,SourceBuffer:W.aS,SourceBufferList:W.il,SpeechGrammar:W.aT,SpeechGrammarList:W.im,SpeechRecognitionResult:W.aU,Storage:W.iq,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.e5,HTMLTableRowElement:W.e6,HTMLTableSectionElement:W.ix,HTMLTemplateElement:W.cK,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.iz,TextTrackList:W.iA,TimeRanges:W.iD,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iH,TrackDefaultList:W.iI,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.j4,VideoTrackList:W.jk,WheelEvent:W.bd,Window:W.cX,DOMWindow:W.cX,Attr:W.cY,CSSRuleList:W.jt,ClientRect:W.eq,DOMRect:W.eq,GamepadList:W.jI,NamedNodeMap:W.eI,MozNamedAttrMap:W.eI,SpeechRecognitionResultList:W.jW,StyleSheetList:W.k_,SVGLength:P.b4,SVGLengthList:P.hi,SVGNumber:P.b6,SVGNumberList:P.hS,SVGPointList:P.hZ,SVGScriptElement:P.cG,SVGStringList:P.iw,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.ba,SVGTransformList:P.iJ,AudioBuffer:P.fs,AudioParamMap:P.ft,AudioTrackList:P.fv,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.hT,WebGLBuffer:P.dk,WebGLFramebuffer:P.dz,WebGLProgram:P.dY,WebGL2RenderingContext:P.c6,WebGLShader:P.e1,WebGLUniformLocation:P.eg,SQLResultSetRowList:P.io})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mM,[])
else N.mM([])})})()
//# sourceMappingURL=test.dart.js.map
