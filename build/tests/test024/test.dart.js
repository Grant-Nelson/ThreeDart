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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ll"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ll"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ll(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l1:function l1(a){this.a=a},
kw:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hc:function(){return new P.c8("No element")},
nC:function(){return new P.c8("Too many elements")},
nB:function(){return new P.c8("Too few elements")},
v:function v(a){this.a=a},
fT:function fT(){},
c2:function c2(){},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hu:function hu(a,b,c){this.a=a
this.b=b
this.$ti=c},
hv:function hv(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
jn:function jn(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
cV:function cV(){},
ei:function ei(){},
ns:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
ck:function(a){var u,t
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
u=J.hd(u)
t=u[0]
s=u[1]
return new H.i3(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cG:function(a){var u=a.$identityHash
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
c4:function(a){return H.nN(a)+H.li(H.bS(a),0,null)},
nN:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibO){p=C.E(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ck(r.length>1&&C.b.H(r,0)===36?C.b.aq(r,1):r)},
nO:function(){if(!!self.location)return self.location.href
return},
lZ:function(a){var u,t,s,r,q
H.kC(a)
u=J.aD(a)
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
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nV:function(a){var u=H.c3(a).getFullYear()+0
return u},
nT:function(a){var u=H.c3(a).getMonth()+1
return u},
nP:function(a){var u=H.c3(a).getDate()+0
return u},
nQ:function(a){var u=H.c3(a).getHours()+0
return u},
nS:function(a){var u=H.c3(a).getMinutes()+0
return u},
nU:function(a){var u=H.c3(a).getSeconds()+0
return u},
nR:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
I:function(a){throw H.c(H.ax(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cf(a,b))},
cf:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
u=H.ai(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.I(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,"index",null,u)
return P.e0(b,"index",null)},
oR:function(a,b,c){if(a>c)return new P.c6(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
ax:function(a){return new P.aL(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mQ})
u.name=""}else u.toString=H.mQ
return u},
mQ:function(){return J.at(this.dartException)},
t:function(a){throw H.c(a)},
C:function(a){throw H.c(P.bi(a))},
bc:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lU:function(a,b){return new H.hS(a,b==null?null:b.method)},
l2:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hh(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aT(s,16)&8191)===10)switch(r){case 438:return u.$1(H.l2(H.l(t)+" (Error "+r+")",null))
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
if(h!=null)return u.$1(H.l2(H.G(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.l2(H.G(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lU(H.G(t),h))}}return u.$1(new H.iZ(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e4()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aL(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e4()
return a},
ci:function(a){var u
if(a==null)return new H.eW(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eW(a)},
oU:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
p3:function(a,b,c,d,e,f){H.h(a,"$ibD")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
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
r=e?Object.create(new H.iq().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b_
if(typeof p!=="number")return p.p()
$.b_=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lH(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oY,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lF:H.kV
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
no:function(a,b,c,d){var u=H.kV
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
if(t===0){r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
if(q==null){q=H.fA("self")
$.co=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
if(q==null){q=H.fA("self")
$.co=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
np:function(a,b,c,d){var u,t
u=H.kV
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
u=$.co
if(u==null){u=H.fA("self")
$.co=u}t=$.lE
if(t==null){t=H.fA("receiver")
$.lE=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.np(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.b_
if(typeof t!=="number")return t.p()
$.b_=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.b_
if(typeof t!=="number")return t.p()
$.b_=t+1
return new Function(u+t+"}")()},
ll:function(a,b,c,d,e,f,g){return H.nr(a,b,H.ai(c),d,!!e,!!f,g)},
kV:function(a){return a.a},
lF:function(a){return a.c},
fA:function(a){var u,t,s,r,q
u=new H.cn("self","target","receiver","name")
t=J.hd(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
oS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
p9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
mO:function(a,b){throw H.c(H.aZ(a,H.ck(H.G(b).substring(2))))},
pb:function(a,b){throw H.c(H.nn(a,H.ck(H.G(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.mO(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pb(a,b)},
kC:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
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
fj:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mH(J.X(a))
if(u==null)return!1
return H.mv(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lf)return a
$.lf=!0
try{if(H.fj(a,b))return a
u=H.kL(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.lf=!1}},
lo:function(a,b){if(a!=null&&!H.lk(a,b))H.t(H.aZ(a,H.kL(b)))
return a},
aZ:function(a,b){return new H.iN("TypeError: "+P.fX(a)+": type '"+H.mA(a)+"' is not a subtype of type '"+b+"'")},
nn:function(a,b){return new H.fB("CastError: "+P.fX(a)+": type '"+H.mA(a)+"' is not a subtype of type '"+b+"'")},
mA:function(a){var u,t
u=J.X(a)
if(!!u.$icp){t=H.mH(u)
if(t!=null)return H.kL(t)
return"Closure"}return H.c4(a)},
pg:function(a){throw H.c(new P.fL(H.G(a)))},
o2:function(a){return new H.ia(a)},
mI:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
q0:function(a,b,c){return H.cj(a["$a"+H.l(c)],H.bS(b))},
bR:function(a,b,c,d){var u
H.G(c)
H.ai(d)
u=H.cj(a["$a"+H.l(c)],H.bS(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.G(b)
H.ai(c)
u=H.cj(a["$a"+H.l(b)],H.bS(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ai(b)
u=H.bS(a)
return u==null?null:u[b]},
kL:function(a){return H.bQ(a,null)},
bQ:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.li(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.oE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bQ("type" in a?a.type:null,b)+">"
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
if(l!=null&&l!==P.P)o+=" extends "+H.bQ(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bQ(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bQ(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bQ(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oT(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.G(u[g])
i=i+h+H.bQ(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
li:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bQ(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dd:function(a,b,c,d){var u,t
H.G(b)
H.kC(c)
H.G(d)
if(a==null)return!1
u=H.bS(a)
t=J.X(a)
if(t[b]==null)return!1
return H.mD(H.cj(t[d],u),null,c,null)},
k:function(a,b,c,d){H.G(b)
H.kC(c)
H.G(d)
if(a==null)return a
if(H.dd(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.li(c,0,null),v.mangledGlobalNames)))},
mD:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
pZ:function(a,b,c){return a.apply(b,H.cj(J.X(b)["$a"+H.l(c)],H.bS(b)))},
mK:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="L"||a===-1||a===-2||H.mK(u)}return!1},
lk:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="L"||b===-1||b===-2||H.mK(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lk(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fj(a,b)}u=J.X(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lk(a,b))throw H.c(H.aZ(a,H.kL(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mv(a,b,c,d)
if('func' in a)return c.name==="bD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aK("type" in a?a.type:null,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cw" in t.prototype))return!1
r=t.prototype["$a"+"cw"]
q=H.cj(r,u?a.slice(1):null)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mD(H.cj(m,u),b,p,d)},
mv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aK(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aK(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aK(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aK(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p8(h,b,g,d)},
p8:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aK(c[r],d,a[r],b))return!1}return!0},
q_:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
p6:function(a){var u,t,s,r,q,p
u=H.G($.mJ.$1(a))
t=$.kv[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kA[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.G($.mC.$2(a,u))
if(u!=null){t=$.kv[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kA[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kK(s)
$.kv[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kA[u]=s
return s}if(q==="-"){p=H.kK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mN(a,s)
if(q==="*")throw H.c(P.iY(u))
if(v.leafTags[u]===true){p=H.kK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mN(a,s)},
mN:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lq(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kK:function(a){return J.lq(a,!1,null,!!a.$iK)},
p7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kK(u)
else return J.lq(u,c,null,null)},
p1:function(){if(!0===$.lp)return
$.lp=!0
H.p2()},
p2:function(){var u,t,s,r,q,p,o,n
$.kv=Object.create(null)
$.kA=Object.create(null)
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
u=H.cd(C.Z,H.cd(C.a3,H.cd(C.D,H.cd(C.D,H.cd(C.a2,H.cd(C.a_,H.cd(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mJ=new H.kx(q)
$.mC=new H.ky(p)
$.mP=new H.kz(o)},
cd:function(a,b){return a(b)||b},
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
fF:function fF(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i3:function i3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hS:function hS(a,b){this.a=a
this.b=b},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
kQ:function kQ(a){this.a=a},
eW:function eW(a){this.a=a
this.b=null},
cp:function cp(){},
iz:function iz(){},
iq:function iq(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(a){this.a=a},
fB:function fB(a){this.a=a},
ia:function ia(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hl:function hl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hm:function hm(a,b){this.a=a
this.$ti=b},
hn:function hn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
nM:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cf(b,a))},
oC:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oR(a,b,c))
return b},
cC:function cC(){},
bH:function bH(){},
dS:function dS(){},
cD:function cD(){},
dT:function dT(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
dU:function dU(){},
cE:function cE(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
oT:function(a){return J.lM(a?Object.keys(a):[],null)},
pa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fl:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lp==null){H.p1()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.iY("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
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
nD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.lM(new Array(a),b)},
lM:function(a,b){return J.hd(H.d(a,[b]))},
hd:function(a){H.kC(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dE.prototype
return J.hf.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.dF.prototype
if(typeof a=="boolean")return J.he.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.P)return a
return J.fl(a)},
oV:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.P)return a
return J.fl(a)},
ch:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.P)return a
return J.fl(a)},
fk:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.P)return a
return J.fl(a)},
oW:function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
oX:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
de:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
ac:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.P)return a
return J.fl(a)},
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
return J.ch(a).j(a,b)},
kR:function(a,b,c){return J.fk(a).n(a,b,c)},
nd:function(a,b){return J.de(a).H(a,b)},
fn:function(a,b){return J.ac(a).is(a,b)},
kS:function(a,b,c){return J.ac(a).iw(a,b,c)},
ne:function(a,b,c,d){return J.ac(a).jo(a,b,c,d)},
ly:function(a,b){return J.ac(a).D(a,b)},
nf:function(a,b){return J.de(a).a_(a,b)},
fo:function(a,b){return J.fk(a).K(a,b)},
ng:function(a,b,c,d){return J.ac(a).k6(a,b,c,d)},
lz:function(a,b){return J.fk(a).M(a,b)},
nh:function(a){return J.ac(a).gjz(a)},
lA:function(a){return J.ac(a).gcp(a)},
di:function(a){return J.X(a).gJ(a)},
bx:function(a){return J.fk(a).gV(a)},
aD:function(a){return J.ch(a).gl(a)},
ni:function(a){return J.ac(a).gkR(a)},
kT:function(a,b){return J.ac(a).b0(a,b)},
lB:function(a){return J.fk(a).kG(a)},
nj:function(a,b){return J.ac(a).kL(a,b)},
nk:function(a,b,c){return J.ac(a).fb(a,b,c)},
nl:function(a,b,c){return J.de(a).u(a,b,c)},
nm:function(a){return J.de(a).kV(a)},
at:function(a){return J.X(a).i(a)},
a:function a(){},
he:function he(){},
dF:function dF(){},
dG:function dG(){},
hW:function hW(){},
bO:function bO(){},
bl:function bl(){},
aO:function aO(a){this.$ti=a},
l0:function l0(a){this.$ti=a},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bF:function bF(){},
dE:function dE(){},
hf:function hf(){},
bk:function bk(){}},P={
oe:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oM()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ce(new P.jp(u),1)).observe(t,{childList:true})
return new P.jo(u,t,s)}else if(self.setImmediate!=null)return P.oN()
return P.oO()},
of:function(a){self.scheduleImmediate(H.ce(new P.jq(H.n(a,{func:1,ret:-1})),0))},
og:function(a){self.setImmediate(H.ce(new P.jr(H.n(a,{func:1,ret:-1})),0))},
oh:function(a){P.l6(C.y,H.n(a,{func:1,ret:-1}))},
l6:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.on(u<0?0:u,b)},
m7:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.ba]})
u=C.f.a6(a.a,1000)
return P.oo(u<0?0:u,b)},
on:function(a,b){var u=new P.f1(!0)
u.fM(a,b)
return u},
oo:function(a,b){var u=new P.f1(!1)
u.fN(a,b)
return u},
oi:function(a,b){var u,t,s
b.a=1
try{a.eQ(new P.jB(b),new P.jC(b),null)}catch(s){u=H.aj(s)
t=H.ci(s)
P.pc(new P.jD(b,u,t))}},
mk:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaJ")
if(u>=4){t=b.ca()
b.a=a.a
b.c=a.c
P.d_(b,t)}else{t=H.h(b.c,"$ibf")
b.a=2
b.c=a
a.dz(t)}},
d_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.km(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d_(u.a,b)}t=u.a
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
P.km(null,null,t,p,o)
return}j=$.a_
if(j!=l)$.a_=l
else j=null
t=b.c
if(t===8)new P.jH(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jG(s,b,m).$0()}else if((t&2)!==0)new P.jF(u,s,b).$0()
if(j!=null)$.a_=j
t=s.b
if(!!J.X(t).$icw){if(t.a>=4){i=H.h(o.c,"$ibf")
o.c=null
b=o.bp(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mk(t,o)
return}}h=b.b
i=H.h(h.c,"$ibf")
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
oH:function(a,b){if(H.fj(a,{func:1,args:[P.P,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.P,P.aw]})
if(H.fj(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.kU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oG:function(){var u,t
for(;u=$.cc,u!=null;){$.dc=null
t=u.b
$.cc=t
if(t==null)$.db=null
u.a.$0()}},
oL:function(){$.lg=!0
try{P.oG()}finally{$.dc=null
$.lg=!1
if($.cc!=null)$.lu().$1(P.mE())}},
mz:function(a){var u=new P.eo(H.n(a,{func:1,ret:-1}))
if($.cc==null){$.db=u
$.cc=u
if(!$.lg)$.lu().$1(P.mE())}else{$.db.b=u
$.db=u}},
oK:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.mz(a)
$.dc=$.db
return}t=new P.eo(a)
s=$.dc
if(s==null){t.b=u
$.dc=t
$.cc=t}else{t.b=s.b
s.b=t
$.dc=t
if(t.b==null)$.db=t}},
pc:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a_
if(C.l===t){P.ko(null,null,C.l,a)
return}t.toString
P.ko(null,null,t,H.n(t.ck(a),u))},
m6:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a_
if(t===C.l){t.toString
return P.l6(a,b)}return P.l6(a,H.n(t.ck(b),u))},
o6:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ba]}
H.n(b,u)
t=$.a_
if(t===C.l){t.toString
return P.m7(a,b)}s=t.dR(b,P.ba)
$.a_.toString
return P.m7(a,H.n(s,u))},
km:function(a,b,c,d,e){var u={}
u.a=d
P.oK(new P.kn(u,e))},
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
ko:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.ck(d):c.jA(d,-1)
P.mz(d)},
jp:function jp(a){this.a=a},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null
this.c=0},
k5:function k5(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jA:function jA(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jI:function jI(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a){this.a=a
this.b=null},
it:function it(){},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
cK:function cK(){},
iu:function iu(){},
ba:function ba(){},
am:function am(a,b){this.a=a
this.b=b},
kf:function kf(){},
kn:function kn(a,b){this.a=a
this.b=b},
jO:function jO(){},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function(a,b,c,d,e){return new H.aP([d,e])},
l3:function(a,b){return new H.aP([a,b])},
nI:function(a){return H.oU(a,new H.aP([null,null]))},
dK:function(a,b,c,d){return new P.jM([d])},
lc:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
om:function(a,b,c){var u=new P.eD(a,b,[c])
u.c=a.e
return u},
nA:function(a,b,c){var u,t
if(P.lh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dh()
C.a.h(t,a)
try{P.oF(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.m4(b,H.mL(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l_:function(a,b,c){var u,t,s
if(P.lh(a))return b+"..."+c
u=new P.al(b)
t=$.dh()
C.a.h(t,a)
try{s=u
s.a=P.m4(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lh:function(a){var u,t
for(u=0;t=$.dh(),u<t.length;++u)if(a===t[u])return!0
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
a.M(0,new P.ho(u,b,c))
return u},
lN:function(a,b){var u,t,s
u=P.dK(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.A(a[s],b))
return u},
l4:function(a){var u,t
u={}
if(P.lh(a))return"{...}"
t=new P.al("")
try{C.a.h($.dh(),a)
t.a+="{"
u.a=!0
J.lz(a,new P.hs(u,t))
t.a+="}"}finally{u=$.dh()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jM:function jM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
eD:function eD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(){},
y:function y(){},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
af:function af(){},
k6:function k6(){},
ht:function ht(){},
ej:function ej(a,b){this.a=a
this.$ti=b},
jT:function jT(){},
eE:function eE(){},
f6:function f6(){},
o9:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oa(!1,b,c,d)
return},
oa:function(a,b,c,d){var u,t,s
u=$.n3()
if(u==null)return
t=0===c
if(t&&!0)return P.l9(u,b)
s=b.length
d=P.bp(c,d,s,null,null,null)
if(t&&d===s)return P.l9(u,b)
return P.l9(u,b.subarray(c,d))},
l9:function(a,b){if(P.oc(b))return
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
for(u=J.ch(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bQ()
if((s&127)!==s)return t-b}return c-b},
lD:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
bW:function bW(){},
bB:function bB(){},
fV:function fV(){},
ha:function ha(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h9:function h9(a){this.a=a},
j6:function j6(a){this.a=a},
j8:function j8(){},
kd:function kd(a){this.b=this.a=0
this.c=a},
j7:function j7(a){this.a=a},
kb:function kb(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.nW(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nx:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.c4(a)+"'"},
nJ:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nD(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
lO:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bx(a);s.C();)C.a.h(t,H.A(s.gL(s),c))
if(b)return t
return H.k(J.hd(t),"$ib",u,"$ab")},
e5:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[u],"$aaO")
t=a.length
c=P.bp(b,c,t,null,null,null)
return H.m_(b>0||c<t?C.a.fg(a,b,c):a)}if(!!J.X(a).$icE)return H.nY(a,b,P.bp(b,c,a.length,null,null,null))
return P.o4(a,b,c)},
o4:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ad(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aD(a),null,null))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.ad(b,0,s,null,null))
r=[]
if(u)for(;t.C();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.ad(c,b,s,null,null))
r.push(t.gL(t))}return H.m_(r)},
o0:function(a,b,c){return new H.hg(a,H.nE(a,!1,!0,!1))},
m4:function(a,b,c){var u=J.bx(b)
if(!u.C())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.C())}else{a+=H.l(u.gL(u))
for(;u.C();)a=a+c+H.l(u.gL(u))}return a},
ma:function(){var u=H.nO()
if(u!=null)return P.o8(u,0,null)
throw H.c(P.H("'Uri.base' is not supported"))},
f7:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.n9().b
if(typeof b!=="string")H.t(H.ax(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.as(c,"bW",0))
t=c.gk5().cq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
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
dt:function(a){if(a>=10)return""+a
return"0"+a},
lJ:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nx(a)},
fr:function(a){return new P.aL(!1,null,null,a)},
kU:function(a,b,c){return new P.aL(!0,a,b,c)},
e0:function(a,b,c){return new P.c6(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c,d,e,f){if(typeof a!=="number")return H.I(a)
if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",f))
return b}return c},
Y:function(a,b,c,d,e){var u=H.ai(e==null?J.aD(b):e)
return new P.hb(b,u,!0,a,c,"Index out of range")},
H:function(a){return new P.j_(a)},
iY:function(a){return new P.iX(a)},
m3:function(a){return new P.c8(a)},
bi:function(a){return new P.fE(a)},
w:function(a){return new P.ew(a)},
a7:function(a,b,c){return new P.h5(a,b,c)},
nK:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
ay:function(a){H.pa(a)},
o8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(t===0)return P.m9(b>0||c<c?C.b.u(a,b,c):a,5,null).geW()
else if(t===32)return P.m9(C.b.u(a,u,c),0,null).geW()}s=new Array(8)
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
l-=b}return new P.jW(a,q,p,o,n,m,l,j)}return P.op(a,b,c,q,p,o,n,m,l,j)},
mc:function(a,b){var u=P.e
return C.a.kb(H.d(a.split("&"),[u]),P.l3(u,u),new P.j4(b),[P.E,P.e,P.e])},
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.j1(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.a_(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fm(C.b.u(a,q,r),null,null)
if(typeof n!=="number")return n.f8()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fm(C.b.u(a,q,c),null,null)
if(typeof n!=="number")return n.f8()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j2(a)
t=new P.j3(u,a)
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
else{if(d===b)P.d8(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ox(a,u,e-1):""
s=P.ot(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.I(g)
q=r<g?P.ov(P.fm(C.b.u(a,r,g),new P.k7(a,f),null),j):null}else{t=""
s=null
q=null}p=P.ou(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.ld(a,h+1,i,null):null
return new P.ca(j,t,s,q,p,o,i<c?P.os(a,i+1,c):null)},
mo:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d8:function(a,b,c){throw H.c(P.a7(c,a,b))},
ov:function(a,b){if(a!=null&&a===P.mo(b))return
return a},
ot:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a_(a,u)!==93)P.d8(a,b,"Missing end `]` to match `[` in host")
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
if(o)P.d8(a,u,"Invalid character")
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
if(!P.mr(C.b.H(a,b)))P.d8(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d8(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.oq(t?a.toLowerCase():a)},
oq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ox:function(a,b,c){return P.d9(a,b,c,C.a7,!1)},
ou:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.d9(a,b,c,C.K,!0):C.q.l4(d,new P.k8(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a5(r,"/"))r="/"+r
return P.oy(r,e,f)},
oy:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oA(a,!u||c)
return P.oB(a)},
ld:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.fr("Both query and queryParameters specified"))
return P.d9(a,b,c,C.t,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.M(0,new P.k9(new P.ka(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
os:function(a,b,c){return P.d9(a,b,c,C.t,!0)},
mu:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.a_(a,b+1)
s=C.b.a_(a,u)
r=H.kw(t)
q=H.kw(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aT(p,4)
if(u>=8)return H.f(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c5(c&&65<=p&&90>=p?(p|32)>>>0:p)
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
for(q=0;--r,r>=0;s=128){p=C.f.iL(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.H("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.b.H("0123456789ABCDEF",p&15))
q+=3}}return P.e5(t,0,null)},
d9:function(a,b,c,d,e){var u=P.mt(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
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
if(p){P.d8(a,t,"Invalid character")
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
else throw H.c(P.fr("Invalid URL encoding"))}}return u},
le:function(a,b,c,d,e){var u,t,s,r,q
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
if(s>127)throw H.c(P.fr("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.fr("Truncated URI"))
C.a.h(q,P.or(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.j7(!1).cq(q)},
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
if((u.length&1)===1)a=C.P.ko(0,a,n,t)
else{m=P.mt(a,n,t,C.t,!0)
if(m!=null)a=C.b.aY(a,n,t,m)}return new P.j0(a,u,c)},
oD:function(){var u,t,s,r,q
u=P.nK(22,new P.kj(),!0,P.R)
t=new P.ki(u)
s=new P.kk()
r=new P.kl()
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
az:function az(a,b){this.a=a
this.b=b},
r:function r(){},
b2:function b2(a){this.a=a},
fR:function fR(){},
fS:function fS(){},
bC:function bC(){},
dW:function dW(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hb:function hb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j_:function j_(a){this.a=a},
iX:function iX(a){this.a=a},
c8:function c8(a){this.a=a},
fE:function fE(a){this.a=a},
hV:function hV(){},
e4:function e4(){},
fL:function fL(a){this.a=a},
ew:function ew(a){this.a=a},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
o:function o(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
E:function E(){},
L:function L(){},
a5:function a5(){},
P:function P(){},
aw:function aw(){},
e:function e(){},
al:function al(a){this.a=a},
j4:function j4(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
k7:function k7(a,b){this.a=a
this.b=b},
k8:function k8(){},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(){},
ki:function ki(a){this.a=a},
kk:function kk(){},
kl:function kl(){},
jW:function jW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jv:function jv(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.l3(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.G(t[r])
u.n(0,q,a[q])}return u},
oP:function(a,b){var u={}
a.M(0,new P.kp(u))
return u},
jY:function jY(){},
k_:function k_(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(){},
jL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ol:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jN:function jN(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hj:function hj(){},
b7:function b7(){},
hT:function hT(){},
i_:function i_(){},
cH:function cH(){},
ix:function ix(){},
q:function q(){},
bb:function bb(){},
iK:function iK(){},
eB:function eB(){},
eC:function eC(){},
eM:function eM(){},
eN:function eN(){},
eY:function eY(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
R:function R(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(a){this.a=a},
fw:function fw(){},
bT:function bT(){},
hU:function hU(){},
ep:function ep(){},
dl:function dl(){},
dA:function dA(){},
dZ:function dZ(){},
c7:function c7(){},
e2:function e2(){},
eh:function eh(){},
ip:function ip(){},
eU:function eU(){},
eV:function eV(){}},W={
lC:function(a){var u=document.createElement("a")
return u},
lG:function(a,b){var u=document.createElement("canvas")
return u},
nv:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ag(u,a,b,c)
t.toString
u=W.F
u=new H.cX(new W.ar(t),H.n(new W.fU(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaM(u),"$iT")},
nw:function(a){H.h(a,"$ij")
return"wheel"},
ct:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ni(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aj(s)}return u},
nz:function(a){var u,t,s
t=document.createElement("input")
u=H.h(t,"$icz")
try{u.type=a}catch(s){H.aj(s)}return u},
jK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mm:function(a,b,c,d){var u,t
u=W.jK(W.jK(W.jK(W.jK(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ae:function(a,b,c,d,e){var u=W.mB(new W.jz(c),W.p)
if(u!=null&&!0)J.ne(a,b,u,!1)
return new W.jy(a,b,u,!1,[e])},
ml:function(a){var u,t
u=W.lC(null)
t=window.location
u=new W.bP(new W.jS(u,t))
u.fw(a)
return u},
oj:function(a,b,c,d){H.h(a,"$iT")
H.G(b)
H.G(c)
H.h(d,"$ibP")
return!0},
ok:function(a,b,c,d){var u,t,s
H.h(a,"$iT")
H.G(b)
H.G(c)
u=H.h(d,"$ibP").a
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
r=H.n(new W.k3(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.k2(t,P.dK(null,null,null,u),P.dK(null,null,null,u),P.dK(null,null,null,u),null)
t.fJ(null,new H.hw(C.A,r,[s,u]),q,null)
return t},
mB:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.l)return a
return u.dR(a,b)},
z:function z(){},
fp:function fp(){},
dj:function dj(){},
fq:function fq(){},
cm:function cm(){},
bU:function bU(){},
by:function by(){},
bV:function bV(){},
bz:function bz(){},
cq:function cq(){},
fH:function fH(){},
V:function V(){},
cr:function cr(){},
fI:function fI(){},
b0:function b0(){},
b1:function b1(){},
fJ:function fJ(){},
fK:function fK(){},
fN:function fN(){},
aE:function aE(){},
cs:function cs(){},
fO:function fO(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
fP:function fP(){},
fQ:function fQ(){},
jt:function jt(a,b){this.a=a
this.b=b},
T:function T(){},
fU:function fU(){},
p:function p(){},
j:function j(){},
aF:function aF(){},
cv:function cv(){},
h0:function h0(){},
h4:function h4(){},
aN:function aN(){},
dB:function dB(){},
dC:function dC(){},
c_:function c_(){},
dD:function dD(){},
cy:function cy(){},
cz:function cz(){},
b4:function b4(){},
dI:function dI(){},
dL:function dL(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
hG:function hG(){},
hH:function hH(a){this.a=a},
aQ:function aQ(){},
hI:function hI(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
F:function F(){},
cF:function cF(){},
aS:function aS(){},
hY:function hY(){},
e_:function e_(){},
i8:function i8(){},
i9:function i9(a){this.a=a},
ib:function ib(){},
aT:function aT(){},
im:function im(){},
aU:function aU(){},
io:function io(){},
aV:function aV(){},
ir:function ir(){},
is:function is(a){this.a=a},
aG:function aG(){},
b9:function b9(){},
e6:function e6(){},
e7:function e7(){},
iy:function iy(){},
cL:function cL(){},
aW:function aW(){},
aH:function aH(){},
iA:function iA(){},
iB:function iB(){},
iE:function iE(){},
aX:function aX(){},
aY:function aY(){},
iI:function iI(){},
iJ:function iJ(){},
bN:function bN(){},
j5:function j5(){},
jl:function jl(){},
be:function be(){},
cY:function cY(){},
cZ:function cZ(){},
ju:function ju(){},
er:function er(){},
jJ:function jJ(){},
eJ:function eJ(){},
jX:function jX(){},
k0:function k0(){},
js:function js(){},
jw:function jw(a){this.a=a},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lb:function lb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jy:function jy(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jz:function jz(a){this.a=a},
bP:function bP(a){this.a=a},
D:function D(){},
dV:function dV(a){this.a=a},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(){},
jU:function jU(){},
jV:function jV(){},
k2:function k2(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k3:function k3(){},
k1:function k1(){},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aB:function aB(){},
jS:function jS(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
ke:function ke(a){this.a=a},
eq:function eq(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
d4:function d4(){},
d5:function d5(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
d6:function d6(){},
d7:function d7(){},
f2:function f2(){},
f3:function f3(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){}},O={
kW:function(a){var u=new O.a6([a])
u.bW(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cB:function cB(){this.b=this.a=null},
lP:function(){var u,t,s
u=new O.dO()
u.sfU(O.kW(V.ao))
u.e.bj(u.ghy(),u.ghA())
t=new O.b6(u,"emission")
t.c=C.d
t.f=new V.a1(0,0,0)
u.f=t
t=new O.b6(u,"ambient")
t.c=C.d
t.f=new V.a1(0,0,0)
u.r=t
t=new O.b6(u,"diffuse")
t.c=C.d
t.f=new V.a1(0,0,0)
u.x=t
t=new O.b6(u,"invDiffuse")
t.c=C.d
t.f=new V.a1(0,0,0)
u.y=t
t=new O.hC(u,"specular")
t.c=C.d
t.f=new V.a1(0,0,0)
t.ch=100
u.z=t
t=new O.hz(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b6(u,"reflect")
t.c=C.d
t.f=new V.a1(0,0,0)
u.cx=t
t=new O.hB(u,"refract")
t.c=C.d
t.f=new V.a1(0,0,0)
t.ch=1
u.cy=t
t=new O.hy(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dJ()
t.bW(D.a8)
t.sfA(H.d([],[D.du]))
t.sfB(H.d([],[D.dY]))
t.sfC(H.d([],[D.bL]))
t.sfD(H.d([],[D.ea]))
t.sfE(H.d([],[D.eb]))
t.sfF(H.d([],[D.ec]))
t.Q=null
t.ch=null
t.cX(t.ghw(),t.gi8(),t.gic())
u.dx=t
s=t.Q
if(s==null){s=D.a0()
t.Q=s
t=s}else t=s
t.h(0,u.giz())
t=u.dx
s=t.ch
if(s==null){s=D.a0()
t.ch=s
t=s}else t=s
t.h(0,u.gfK())
u.dy=null
return u},
dO:function dO(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dP:function dP(){},
hz:function hz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hB:function hB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hC:function hC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
kY:function(a,b,c,d,e,f){var u=new E.an()
u.a=d
u.b=!0
u.sfv(0,O.kW(E.an))
u.y.bj(u.gkp(),u.gks())
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
o1:function(a,b){var u=new E.i4(a,b)
u.fp(a,b)
return u},
o5:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibV)return E.m5(a,!0,!0,!0,!1)
t=W.lG(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcp(a).h(0,t)
r=E.m5(t,!0,!0,!0,!1)
r.a=a
return r},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ed()
t=H.h(C.x.f3(a,"webgl2",P.nI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o1(t,a)
s=new T.iC(t)
s.b=H.ai((t&&C.c).cV(t,3379))
s.c=H.ai(C.c.cV(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ek(a)
r=new X.hi()
r.c=new X.aR(!1,!1,!1)
r.sio(P.dK(null,null,null,P.o))
s.b=r
r=new X.hJ(s)
r.f=0
r.r=V.bJ()
r.x=V.bJ()
r.Q=1
r.ch=1
s.c=r
r=new X.hq(s)
r.r=0
r.x=V.bJ()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iH(s)
r.e=0
r.f=V.bJ()
r.r=V.bJ()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sh5(H.d([],[[P.cK,P.P]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ae(q,"contextmenu",H.n(s.ghK(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ae(a,"focus",H.n(s.ghQ(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ae(a,"blur",H.n(s.ghC(),m),!1,n))
r=s.z
l=W.b4
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ae(q,"keyup",H.n(s.ghU(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ae(q,"keydown",H.n(s.ghS(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ae(a,"mousedown",H.n(s.ghY(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ae(a,"mouseup",H.n(s.gi1(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ae(a,"mousemove",H.n(s.gi_(),o),!1,p))
l=s.z
k=W.be;(l&&C.a).h(l,W.ae(a,H.G(W.nw(a)),H.n(s.gi3(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ae(q,"mousemove",H.n(s.ghM(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ae(q,"mouseup",H.n(s.ghO(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ae(q,"pointerlockchange",H.n(s.gi5(),m),!1,n))
n=s.z
m=W.aY
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ae(a,"touchstart",H.n(s.gik(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ae(a,"touchend",H.n(s.gig(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ae(a,"touchmove",H.n(s.gii(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.az(Date.now(),!1)
u.cy=0
u.dB()
return u},
fz:function fz(){},
an:function an(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
ed:function ed(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a}},Z={
la:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.c.aw(a,b,u)
C.c.dT(a,b,new Int16Array(H.cb(c)),35044)
C.c.aw(a,b,null)
return new Z.en(b,u)},
aI:function(a){return new Z.bd(a)},
en:function en(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jm:function jm(a){this.a=a},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
a0:function(){var u=new D.bY()
u.sak(null)
u.saR(null)
u.c=null
u.d=0
return u},
fC:function fC(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
c0:function c0(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c1:function c1(a,b,c,d){var _=this
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
du:function du(){},
a8:function a8(){},
dJ:function dJ(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dY:function dY(){},
bL:function bL(){var _=this
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},X={dp:function dp(a,b){this.a=a
this.b=b},dH:function dH(a,b){this.a=a
this.b=b},hi:function hi(){var _=this
_.d=_.c=_.b=_.a=null},dM:function dM(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hq:function hq(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},bG:function bG(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hJ:function hJ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hZ:function hZ(){},ef:function ef(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iH:function iH(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ek:function ek(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ny:function(a,b,c,d,e,f,g){var u,t
u=new X.h6()
t=new V.aM(0,0,0,1)
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
dq:function dq(){},
h6:function h6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){}},V={
ph:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.e.eR(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.n(u,p,C.b.ai(u[p],s))}return u},
dR:function(){var u=$.lT
if(u==null){u=V.bn(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lT=u}return u},
bn:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lS:function(a,b,c){return V.bn(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lR:function(a,b,c,d){return V.bn(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lQ:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bn(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bJ:function(){var u=$.lX
if(u==null){u=new V.aa(0,0)
$.lX=u}return u},
lY:function(){var u=$.bK
if(u==null){u=new V.a2(0,0,0)
$.bK=u}return u},
m0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e1(a,b,c,d)},
cW:function(){var u=$.mi
if(u==null){u=new V.J(0,0,0)
$.mi=u}return u},
mj:function(){var u=$.j9
if(u==null){u=new V.J(0,0,1)
$.j9=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a){this.a=a},
dQ:function dQ(a,b,c,d,e,f,g,h,i){var _=this
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
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a,b,c,d){var _=this
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
s=new V.i2()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ic()
u.fq(a)
return u},
iG:function(){var u,t
u=new V.iF()
t=P.e
u.siN(new H.aP([t,V.cJ]))
u.siP(new H.aP([t,V.cM]))
u.c=null
return u},
bh:function bh(){},
aA:function aA(){},
dN:function dN(){},
av:function av(){this.a=null},
i2:function i2(){this.b=this.a=null},
ic:function ic(){this.a=null},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b){this.a=a
this.b=b
this.c=null},
iF:function iF(){this.c=this.b=this.a=null},
cN:function cN(a){this.b=a
this.a=this.c=null},
pd:function(a){P.o6(C.U,new V.kM(a))},
o3:function(a,b){var u=new V.ih()
u.ft(a,!0)
return u},
bA:function bA(){},
kM:function kM(a){this.a=a},
fM:function fM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h8:function h8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hX:function hX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i0:function i0(a,b){this.a=a
this.b=b
this.c=null},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(){this.b=this.a=null},
ij:function ij(a){this.a=a},
ii:function ii(a){this.a=a},
ik:function ik(a){this.a=a}},U={
lI:function(){var u=new U.fD()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ds:function(a){var u=new U.dr()
u.a=a
return u},
kZ:function(a){var u=new U.cx()
u.bW(U.ak)
u.bj(u.gfG(),u.gia())
u.e=null
u.f=V.dR()
u.r=0
return u},
md:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.el()
t=U.lI()
t.seZ(0,!0)
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
t.seZ(0,!0)
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
r=new X.aR(b,!1,!1)
q=u.d
u.d=r
t=new D.Q("modifiers",q,r,u,[X.aR])
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
u.a0(t)}u.jy(c)
return u},
fD:function fD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){this.b=this.a=null},
cx:function cx(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
el:function el(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dy:function dy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nL:function(a,b){var u,t
u=a.am
t=new A.hx(b,u)
t.fs(b,u)
t.fo(a,b)
return t},
l7:function(a,b,c,d,e){var u=new A.iP(a,b,c,e)
u.f=d
u.sj_(P.nJ(d,0,!1,P.o))
return u},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a){this.a=a},
hx:function hx(a,b){var _=this
_.bw=_.dY=_.bv=_.am=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ed=_.cu=_.ec=_.bJ=_.eb=_.ea=_.bI=_.bH=_.e9=_.e8=_.bG=_.bF=_.bE=_.e7=_.e6=_.bD=_.e5=_.e4=_.bC=_.e3=_.e2=_.bB=_.bA=_.e1=_.e0=_.bz=_.by=_.e_=_.dZ=_.bx=null
_.cB=_.eh=_.cA=_.eg=_.cz=_.ef=_.cw=_.ee=_.cv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hA:function hA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cQ:function cQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cT:function cT(a,b,c,d,e,f,g,h,i,j){var _=this
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
cR:function cR(a,b,c,d,e,f,g,h,i,j){var _=this
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
cU:function cU(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cI:function cI(){},
bX:function bX(a,b){this.a=a
this.b=b},
eg:function eg(){},
iV:function iV(a){this.a=a},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d){var _=this
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
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
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
lm:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.l5()
F.da(u,b,c,d,a,1,0,0,1)
F.da(u,b,c,d,a,0,1,0,3)
F.da(u,b,c,d,a,0,0,1,2)
F.da(u,b,c,d,a,-1,0,0,0)
F.da(u,b,c,d,a,0,-1,0,0)
F.da(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
kh:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
da:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u.d=t}g=F.kh(t)
f=F.kh(u.b)
e=F.ls(d,a0,new F.kg(u,F.kh(u.c),F.kh(u.d),f,g,c),b)
if(e!=null)a.bc(e)},
mG:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.l5()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ah])
q=u.a
p=new V.J(0,0,t)
p=p.B(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jr(new V.b8(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a2(0,0,d),new V.J(0,0,t),new V.aa(0.5,0.5),p))
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
f=F.em(new V.b8(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a2(m*k,l*k,d),new V.J(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jp(r)
return u},
ln:function(a,b,c,d,e,f){return F.oQ(b,c,d,new F.kq(a,f),e)},
oQ:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.ls(c,e,new F.ks(d),null)
if(u==null)return
u.ax()
u.cj()
if(b)u.bc(F.mG(3,!1,!1,1,new F.kt(d),e))
if(a)u.bc(F.mG(1,!0,!1,-1,new F.ku(d),e))
return u},
pe:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kN()
t=F.lm(a,null,new F.kO(u,c),d)
t.cj()
return t},
mR:function(a,b,c,d){return F.mF(c,a,d,b,new F.kP())},
p5:function(a,b,c,d,e,f){return F.mF(d,a,e,b,new F.kB(f,c))},
mF:function(a,b,c,d,e){var u=F.ls(a,b,new F.kr(H.n(e,{func:1,ret:V.a2,args:[P.r]}),d,b,c),null)
if(u==null)return
u.ax()
u.cj()
return u},
ls:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.l5()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.em(null,null,new V.aM(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
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
o=F.em(null,null,new V.aM(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.jq(a+1,b+1,t)
return u},
cu:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cg(a)
u.ci(b)
u.iG(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
nF:function(a,b){var u,t
u=new F.bm()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cg(a)
u.ci(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
l5:function(){var u,t
u=new F.e3()
t=new F.ja(u)
t.b=!1
t.sj0(H.d([],[F.ah]))
u.a=t
t=new F.ig(u)
t.sc8(H.d([],[F.bI]))
u.b=t
t=new F.ie(u)
t.shg(H.d([],[F.bm]))
u.c=t
t=new F.id(u)
t.sh6(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
em:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ah()
t=new F.ji(u)
t.sc8(H.d([],[F.bI]))
u.b=t
t=new F.je(u)
s=[F.bm]
t.shh(H.d([],s))
t.shi(H.d([],s))
u.c=t
t=new F.jb(u)
s=[F.a9]
t.sh7(H.d([],s))
t.sh8(H.d([],s))
t.sh9(H.d([],s))
u.d=t
h=$.n4()
u.e=0
t=$.bu()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bt().a)!==0?e:null
u.x=(s&$.bs().a)!==0?b:null
u.y=(s&$.bv().a)!==0?f:null
u.z=(s&$.bw().a)!==0?g:null
u.Q=(s&$.n5().a)!==0?c:null
u.ch=(s&$.cl().a)!==0?i:0
u.cx=(s&$.br().a)!==0?a:null
return u},
kg:function kg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kq:function kq(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kN:function kN(){},
kO:function kO(a,b){this.a=a
this.b=b},
kP:function kP(){},
kB:function kB(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(){},
il:function il(){},
bm:function bm(){this.b=this.a=null},
hk:function hk(){},
iO:function iO(){},
bI:function bI(){this.a=null},
e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){this.a=a
this.b=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
ja:function ja(a){this.a=a
this.c=this.b=null},
jb:function jb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a
this.c=this.b=null},
jg:function jg(){},
jf:function jf(){},
jh:function jh(){},
hR:function hR(){},
ji:function ji(a){this.a=a
this.b=null}},T={e9:function e9(){},iC:function iC(a){var _=this
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
u.jn(H.d(["shapes"],s))
u.dK(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.cU(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.o5(r,!0,!0,!0,!1)
p=U.kZ(null)
p.h(0,U.ds(V.lS(0,0,-2.5)))
p.h(0,U.md(!1,!0,q.r,!1,!1,!1,null,!1))
o=new V.a1(1,1,1)
n=new D.bL()
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
p.gE().h(0,n.ghE())
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
i=E.kY(null,!0,null,"",null,null)
i.sab(0,F.mR(30,1,15,0.5))
h=E.kY(null,!0,null,"",null,null)
h.saW(U.ds(V.lR(3,3,3,1)))
l=F.lm(1,null,null,1)
l.cC()
h.sab(0,l)
g=U.kZ(null)
g.h(0,U.md(!1,!1,q.r,!1,!1,!1,null,!1))
g.h(0,U.ds(V.lQ(3.141592653589793)))
g.h(0,U.ds(V.lS(0,0,5)))
f=E.kY(null,!0,null,"",null,null)
l=U.kZ(null)
l.h(0,U.ds(V.lR(0.1,0.1,0.1,1)))
l.h(0,p)
f.saW(l)
f.sab(0,F.ln(0,!1,!0,1,40,1))
l=O.lP()
l.f.saf(0,new V.a1(1,1,1))
f.sbf(l)
l=new M.dy()
l.sfX(0,O.kW(E.an))
l.d.bj(l.ghG(),l.ghI())
l.e=null
l.f=null
l.r=null
l.x=null
e=X.ny(!0,!0,!1,null,2000,null,0)
d=new X.dX()
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
if(j!==d){if(j!=null)j.gE().N(0,l.gas())
m=l.a
l.a=d
d.gE().h(0,l.gas())
j=new D.Q("camera",m,l.a,l,[X.dq])
j.b=!0
l.aD(j)}j=l.b
if(j!==e){if(j!=null)j.gE().N(0,l.gas())
m=l.b
l.b=e
e.gE().h(0,l.gas())
j=new D.Q("target",m,l.b,l,[X.e8])
j.b=!0
l.aD(j)}l.sbf(null)
l.sbf(k)
l.d.h(0,i)
l.d.h(0,h)
l.d.h(0,f)
l.a.saW(g)
j=q.d
if(j!==l){if(j!=null)j.gE().N(0,q.gd_())
q.d=l
l.gE().h(0,q.gd_())
q.d0()}l=new V.i0("shapes",!0)
s=C.z.cU(s,"shapes")
l.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
l.b5(0,"Cube",new N.kD(i))
l.b5(0,"Cylinder",new N.kE(i))
l.b5(0,"Cone",new N.kF(i))
l.b5(0,"Sphere",new N.kG(i))
l.dI(0,"Toroid",new N.kH(i),!0)
l.b5(0,"Knot",new N.kI(i))
s=q.z
if(s==null){s=D.a0()
q.z=s}l={func:1,ret:-1,args:[D.B]}
j=H.n(new N.kJ(u,k),l)
if(s.b==null)s.saR(H.d([],[l]))
s=s.b;(s&&C.a).h(s,j)
V.pd(q)},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l1.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cG(a)},
i:function(a){return"Instance of '"+H.c4(a)+"'"}}
J.he.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dF.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iL:1}
J.dG.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hW.prototype={}
J.bO.prototype={}
J.bl.prototype={
i:function(a){var u=a[$.mT()]
if(u==null)return this.fj(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.aO.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.H("add"))
a.push(b)},
kH:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("removeAt"))
u=a.length
if(b>=u)throw H.c(P.e0(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bi(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.l(a[t]))
return u.join(b)},
kj:function(a){return this.m(a,"")},
kb:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bi(a))}return t},
ka:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bi(a))}throw H.c(H.hc())},
k9:function(a,b){return this.ka(a,b,null)},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fg:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gk8:function(a){if(a.length>0)return a[0]
throw H.c(H.hc())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hc())},
fe:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.H("setRange"))
P.bp(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.ch(d)
if(e+t>u.gl(d))throw H.c(H.nB())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bk:function(a,b,c,d){return this.fe(a,b,c,d,0)},
dL:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bi(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.l_(a,"[","]")},
gV:function(a){return new J.au(a,a.length,0,[H.u(a,0)])},
gJ:function(a){return H.cG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.H("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cf(a,b))
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
J.l0.prototype={}
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
$ib3:1}
J.bF.prototype={
ej:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
eR:function(a,b){var u,t
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
fn:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
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
iL:function(a,b){if(b<0)throw H.c(H.ax(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia5:1}
J.dE.prototype={$io:1}
J.hf.prototype={}
J.bk.prototype={
a_:function(a,b){if(b<0)throw H.c(H.cf(a,b))
if(b>=a.length)H.t(H.cf(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.cf(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.kU(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ax(b))
c=P.bp(b,c,a.length,null,null,null)
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
if(b<0)throw H.c(P.e0(b,null,null))
if(b>c)throw H.c(P.e0(b,null,null))
if(c>a.length)throw H.c(P.e0(c,null,null))
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
kx:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.F(c,u)+a},
ai:function(a,b){return this.kx(a,b," ")},
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
$acV:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fT.prototype={}
H.c2.prototype={
gV:function(a){return new H.cA(this,this.gl(this),0,[H.as(this,"c2",0)])},
bP:function(a,b){return this.fi(0,H.n(b,{func:1,ret:P.S,args:[H.as(this,"c2",0)]}))}}
H.cA.prototype={
gL:function(a){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.ch(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bi(u))
r=this.c
if(r>=s){this.sb1(null)
return!1}this.sb1(t.K(u,r));++this.c
return!0},
sb1:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.hu.prototype={
gV:function(a){return new H.hv(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fo(this.a,b))},
$ai:function(a,b){return[b]}}
H.hv.prototype={
C:function(){var u=this.b
if(u.C()){this.sb1(this.c.$1(u.gL(u)))
return!0}this.sb1(null)
return!1},
gL:function(a){return this.a},
sb1:function(a){this.a=H.A(a,H.u(this,1))},
$ab3:function(a,b){return[b]}}
H.hw.prototype={
gl:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fo(this.a,b))},
$ac2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cX.prototype={
gV:function(a){return new H.jn(J.bx(this.a),this.b,this.$ti)}}
H.jn.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bZ.prototype={}
H.cV.prototype={
n:function(a,b,c){H.A(c,H.as(this,"cV",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.ei.prototype={}
H.fF.prototype={
i:function(a){return P.l4(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.ns()},
$iE:1}
H.fG.prototype={
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
H.i3.prototype={}
H.iL.prototype={
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
H.hS.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hh.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iZ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kQ.prototype={
$1:function(a){if(!!J.X(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.eW.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaw:1}
H.cp.prototype={
i:function(a){return"Closure '"+H.c4(this).trim()+"'"},
$ibD:1,
gl2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iz.prototype={}
H.iq.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.cn.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cG(this.a)
else t=typeof u!=="object"?J.di(u):H.cG(u)
return(t^H.cG(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c4(u)+"'")}}
H.iN.prototype={
i:function(a){return this.a}}
H.fB.prototype={
i:function(a){return this.a}}
H.ia.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gki:function(a){return this.a===0},
ga7:function(a){return new H.hm(this,[H.u(this,0)])},
bt:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.df(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.df(t,b)}else return this.kf(b)},
kf:function(a){var u=this.d
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
return s}else return this.kg(b)},
kg:function(a){var u,t,s
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
this.c=t}this.d4(t,b,c)}else this.kh(b,c)},
kh:function(a,b){var u,t,s,r
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
if(t!==this.r)throw H.c(P.bi(this))
u=u.c}},
d4:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bn(a,b)
if(u==null)this.ce(a,b,this.c7(b,c))
else u.b=c},
ho:function(){this.r=this.r+1&67108863},
c7:function(a,b){var u,t
u=new H.hl(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.ho()
return u},
cE:function(a){return J.di(a)&0x3ffffff},
cF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.l4(this)},
bn:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
h1:function(a,b){delete a[b]},
df:function(a,b){return this.bn(a,b)!=null},
c6:function(){var u=Object.create(null)
this.ce(u,"<non-identifier-key>",u)
this.h1(u,"<non-identifier-key>")
return u}}
H.hl.prototype={}
H.hm.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.hn(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hn.prototype={
gL:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sd3(null)
return!1}else{this.sd3(u.a)
this.c=this.c.c
return!0}}},
sd3:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.kx.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.ky.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kz.prototype={
$1:function(a){return this.a(H.G(a))},
$S:51}
H.hg.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilV:1,
$io_:1}
H.cC.prototype={$icC:1}
H.bH.prototype={$ibH:1}
H.dS.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cD.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oS(c)
H.bg(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.r]},
$ay:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dT.prototype={
n:function(a,b,c){H.ai(c)
H.bg(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hK.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dU.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.cE.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icE:1,
$iR:1}
H.d0.prototype={}
H.d1.prototype={}
H.d2.prototype={}
H.d3.prototype={}
P.jp.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:29}
P.jo.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jq.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jr.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f1.prototype={
fM:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ce(new P.k5(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
fN:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ce(new P.k4(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$iba:1}
P.k5.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.k4.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fn(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bf.prototype={
km:function(a){if(this.c!==6)return!0
return this.b.b.cR(H.n(this.d,{func:1,ret:P.S,args:[P.P]}),a.a,P.S,P.P)},
ke:function(a){var u,t,s,r
u=this.e
t=P.P
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fj(u,{func:1,args:[P.P,P.aw]}))return H.lo(r.kO(u,a.a,a.b,null,t,P.aw),s)
else return H.lo(r.cR(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aJ.prototype={
eQ:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a_
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oH(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aJ(0,$.a_,[c])
r=b==null?1:3
this.d5(new P.bf(s,r,a,b,[u,c]))
return s},
kS:function(a,b){return this.eQ(a,null,b)},
d5:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$ibf")
this.c=a}else{if(u===2){t=H.h(this.c,"$iaJ")
u=t.a
if(u<4){t.d5(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.ko(null,null,u,H.n(new P.jA(this,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$ibf")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iaJ")
t=p.a
if(t<4){p.dz(a)
return}this.a=t
this.c=p.c}u.a=this.bp(a)
t=this.b
t.toString
P.ko(null,null,t,H.n(new P.jE(u,this),{func:1,ret:-1}))}},
ca:function(){var u=H.h(this.c,"$ibf")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
da:function(a){var u,t,s
u=H.u(this,0)
H.lo(a,{futureOr:1,type:u})
t=this.$ti
if(H.dd(a,"$icw",t,"$acw"))if(H.dd(a,"$iaJ",t,null))P.mk(a,this)
else P.oi(a,this)
else{s=this.ca()
H.A(a,u)
this.a=4
this.c=a
P.d_(this,s)}},
dc:function(a,b){var u
H.h(b,"$iaw")
u=this.ca()
this.a=8
this.c=new P.am(a,b)
P.d_(this,u)},
$icw:1}
P.jA.prototype={
$0:function(){P.d_(this.a,this.b)},
$S:0}
P.jE.prototype={
$0:function(){P.d_(this.b,this.a.a)},
$S:0}
P.jB.prototype={
$1:function(a){var u=this.a
u.a=0
u.da(a)},
$S:29}
P.jC.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.dc(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jD.prototype={
$0:function(){this.a.dc(this.b,this.c)},
$S:0}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eO(H.n(r.d,{func:1}),null)}catch(q){t=H.aj(q)
s=H.ci(q)
if(this.d){r=H.h(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.X(u).$icw){if(u instanceof P.aJ&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kS(new P.jI(o),null)
r.a=!1}},
$S:3}
P.jI.prototype={
$1:function(a){return this.a},
$S:47}
P.jG.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cR(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ci(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jF.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$iam")
r=this.c
if(r.km(u)&&r.e!=null){q=this.b
q.b=r.ke(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ci(p)
r=H.h(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.eo.prototype={}
P.it.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aJ(0,$.a_,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iv(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iw(u,t),{func:1,ret:-1})
W.ae(this.a,this.b,r,!1,s)
return t}}
P.iv.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.iw.prototype={
$0:function(){this.b.da(this.a.a)},
$S:0}
P.cK.prototype={}
P.iu.prototype={}
P.ba.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibC:1}
P.kf.prototype={$ipR:1}
P.kn.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dW()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jO.prototype={
kP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a_){a.$0()
return}P.mw(null,null,this,a,-1)}catch(s){u=H.aj(s)
t=H.ci(s)
P.km(null,null,this,u,H.h(t,"$iaw"))}},
kQ:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a_){a.$1(b)
return}P.mx(null,null,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ci(s)
P.km(null,null,this,u,H.h(t,"$iaw"))}},
jA:function(a,b){return new P.jQ(this,H.n(a,{func:1,ret:b}),b)},
ck:function(a){return new P.jP(this,H.n(a,{func:1,ret:-1}))},
dR:function(a,b){return new P.jR(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eO:function(a,b){H.n(a,{func:1,ret:b})
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
P.jQ.prototype={
$0:function(){return this.a.eO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jP.prototype={
$0:function(){return this.a.kP(this.b)},
$S:3}
P.jR.prototype={
$1:function(a){var u=this.c
return this.a.kQ(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jM.prototype={
gV:function(a){var u=new P.eD(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ic9")!=null}else{t=this.fY(b)
return t}},
fY:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dk(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lc()
this.b=u}return this.d7(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lc()
this.c=t}return this.d7(t,b)}else return this.fP(0,b)},
fP:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.lc()
this.d=u}t=this.dd(b)
s=u[t]
if(s==null)u[t]=[this.bY(b)]
else{if(this.c0(s,b)>=0)return!1
s.push(this.bY(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.it(this.c,b)
else return this.iq(0,b)},
iq:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dk(u,b)
s=this.c0(t,b)
if(s<0)return!1
this.dF(t.splice(s,1)[0])
return!0},
d7:function(a,b){H.A(b,H.u(this,0))
if(H.h(a[b],"$ic9")!=null)return!1
a[b]=this.bY(b)
return!0},
it:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ic9")
if(u==null)return!1
this.dF(u)
delete a[b]
return!0},
d9:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t
u=new P.c9(H.A(a,H.u(this,0)))
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
dd:function(a){return J.di(a)&1073741823},
dk:function(a,b){return a[this.dd(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.eD.prototype={
gL:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sd8(null)
return!1}else{this.sd8(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sd8:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
P.ho.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hp.prototype={$ii:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cA(a,this.gl(a),0,[H.bR(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
kU:function(a,b){var u,t
u=H.d([],[H.bR(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
kT:function(a){return this.kU(a,!0)},
p:function(a,b){var u,t
u=[H.bR(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bk(t,0,this.gl(a),a)
C.a.bk(t,this.gl(a),t.length,b)
return t},
k6:function(a,b,c,d){var u
H.A(d,H.bR(this,a,"y",0))
P.bp(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l_(a,"[","]")}}
P.hr.prototype={}
P.hs.prototype={
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
H.n(b,{func:1,ret:-1,args:[H.bR(this,a,"af",0),H.bR(this,a,"af",1)]})
for(u=J.bx(this.ga7(a));u.C();){t=u.gL(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aD(this.ga7(a))},
i:function(a){return P.l4(a)},
$iE:1}
P.k6.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.ht.prototype={
j:function(a,b){return J.lx(this.a,b)},
n:function(a,b,c){J.kR(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
M:function(a,b){J.lz(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.at(this.a)},
$iE:1}
P.ej.prototype={}
P.jT.prototype={
au:function(a,b){var u
for(u=J.bx(H.k(b,"$ii",this.$ti,"$ai"));u.C();)this.h(0,u.gL(u))},
i:function(a){return P.l_(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ad(b,0,null,"index",null))
for(u=P.om(this,this.r,H.u(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
$ii:1,
$im2:1}
P.eE.prototype={}
P.f6.prototype={}
P.fx.prototype={
ko:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bp(c,a0,b.length,null,null,null)
u=$.n7()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kw(C.b.H(b,n))
j=H.kw(C.b.H(b,n+1))
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
r.a=g+H.c5(m)
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
$abW:function(){return[[P.b,P.o],P.e]}}
P.fy.prototype={
$abB:function(){return[[P.b,P.o],P.e]}}
P.bW.prototype={}
P.bB.prototype={}
P.fV.prototype={
$abW:function(){return[P.e,[P.b,P.o]]}}
P.ha.prototype={
i:function(a){return this.a}}
P.h9.prototype={
fZ:function(a,b,c){var u,t,s,r,q,p
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
$abB:function(){return[P.e,P.e]}}
P.j6.prototype={
gk5:function(){return C.S}}
P.j8.prototype={
b6:function(a,b,c){var u,t,s
c=P.bp(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kd(t)
if(s.ha(a,b,c)!==c)s.dH(J.nf(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oC(0,s.b,t.length)))},
cq:function(a){return this.b6(a,0,null)},
$abB:function(){return[P.e,[P.b,P.o]]}}
P.kd.prototype={
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
ha:function(a,b,c){var u,t,s,r,q,p,o
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
P.j7.prototype={
b6:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.o9(!1,a,b,c)
if(u!=null)return u
c=P.bp(b,c,J.aD(a),null,null,null)
t=new P.al("")
s=new P.kb(!1,t)
s.b6(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c5(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cq:function(a){return this.b6(a,0,null)},
$abB:function(){return[[P.b,P.o],P.e]}}
P.kb.prototype={
b6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kc(this,b,c,a)
$label0$0:for(q=J.ch(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bQ()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.G,m)
if(u<=C.G[m]){m=P.a7("Overlong encoding of 0x"+C.f.bh(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bh(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c5(u)
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
P.kc.prototype={
$2:function(a,b){this.a.b.a+=P.e5(this.d,a,b)},
$S:46}
P.S.prototype={}
P.az.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aT(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nt(H.nV(this))
t=P.dt(H.nT(this))
s=P.dt(H.nP(this))
r=P.dt(H.nQ(this))
q=P.dt(H.nS(this))
p=P.dt(H.nU(this))
o=P.nu(H.nR(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.b2.prototype={
p:function(a,b){return new P.b2(C.f.p(this.a,b.gh3()))},
t:function(a,b){return new P.b2(C.f.t(this.a,b.gh3()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fS()
t=this.a
if(t<0)return"-"+new P.b2(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.fR().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.fS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.bC.prototype={}
P.dW.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
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
p=P.fX(this.b)
return r+q+": "+p}}
P.c6.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.hb.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.ai(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.j_.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fE.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fX(u)+"."}}
P.hV.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.e4.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fL.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ew.prototype={
i:function(a){return"Exception: "+this.a}}
P.h5.prototype={
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
P.bD.prototype={}
P.o.prototype={}
P.i.prototype={
bP:function(a,b){var u=H.as(this,"i",0)
return new H.cX(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gV(this)
for(t=0;u.C();)++t
return t},
gaM:function(a){var u,t
u=this.gV(this)
if(!u.C())throw H.c(H.hc())
t=u.gL(u)
if(u.C())throw H.c(H.nC())
return t},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ad(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.C();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.nA(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.L.prototype={
gJ:function(a){return P.P.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cG(this)},
i:function(a){return"Instance of '"+H.c4(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$ilV:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipr:1}
P.j4.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.G(b)
t=J.de(b).eq(b,"=")
if(t===-1){if(b!=="")J.kR(a,P.le(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.u(b,0,t)
r=C.b.aq(b,t+1)
u=this.a
J.kR(a,P.le(s,0,s.length,u,!0),P.le(r,0,r.length,u,!0))}return a},
$S:44}
P.j1.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j2.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j3.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fm(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ca.prototype={
geY:function(){return this.b},
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
g=P.ld(g,0,0,h)
return new P.ca(i,j,c,f,d,g,this.r)},
eM:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gcM:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.sip(new P.ej(P.mc(u==null?"":u,C.m),[t,t]))}return this.Q},
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
if(!!J.X(b).$il8)if(this.a==b.gbT())if(this.c!=null===b.gem())if(this.b==b.geY())if(this.gcD(this)==b.gcD(b))if(this.gbL(this)==b.gbL(b))if(this.e===b.geI(b)){u=this.f
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
sip:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$il8:1,
gbT:function(){return this.a},
geI:function(a){return this.e}}
P.k7.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.k8.prototype={
$1:function(a){return P.f7(C.a8,a,C.m,!1)},
$S:17}
P.ka.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.f7(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.f7(C.v,b,C.m,!0))}},
$S:14}
P.k9.prototype={
$2:function(a,b){var u,t
H.G(a)
if(b==null||typeof b==="string")this.a.$2(a,H.G(b))
else for(u=J.bx(H.mL(b,"$ii")),t=this.a;u.C();)t.$2(a,H.G(u.gL(u)))},
$S:38}
P.j0.prototype={
geW:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.b.er(t,"?",u)
r=t.length
if(s>=0){q=P.d9(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.jv(this,"data",null,null,null,P.d9(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kj.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.ki.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.ng(u,0,96,b)
return u},
$S:35}
P.kk.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.H(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.kl.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.H(b,0),t=C.b.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.jW.prototype={
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
geY:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcD:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbL:function(a){var u
if(this.geo()){u=this.d
if(typeof u!=="number")return u.p()
return P.fm(C.b.u(this.a,u+1,this.e),null,null)}if(this.gdq())return 80
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
return new P.ej(P.mc(this.gcL(this),C.m),[u,u])},
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
g=P.ld(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.aq(t,s+1)
return new P.ca(i,j,c,f,d,g,b)},
eM:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.b.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$il8&&this.a===b.i(0)},
i:function(a){return this.a},
$il8:1}
P.jv.prototype={}
W.z.prototype={}
W.fp.prototype={
gl:function(a){return a.length}}
W.dj.prototype={
i:function(a){return String(a)},
$idj:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.bU.prototype={$ibU:1}
W.by.prototype={$iby:1}
W.bV.prototype={
f3:function(a,b,c){var u=this.hb(a,b,P.oP(c,null))
return u},
hb:function(a,b,c){return a.getContext(b,c)},
$ibV:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fH.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cr.prototype={
gl:function(a){return a.length}}
W.fI.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fJ.prototype={
gl:function(a){return a.length}}
W.fK.prototype={
gl:function(a){return a.length}}
W.fN.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.cs.prototype={
ju:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)}}
W.fO.prototype={
i:function(a){return String(a)}}
W.dv.prototype={
jO:function(a,b){return a.createHTMLDocument(b)}}
W.dw.prototype={
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
W.dx.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaL(a))+" x "+H.l(this.gaI(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.dd(b,"$iab",[P.a5],"$aab"))return!1
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
W.fP.prototype={
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
W.fQ.prototype={
gl:function(a){return a.length}}
W.jt.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.h(u[b],"$iT")},
n:function(a,b,c){var u
H.h(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.kS(this.a,c,u[b])},
h:function(a,b){J.ly(this.a,b)
return b},
gV:function(a){var u=this.kT(this)
return new J.au(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.T]},
$ai:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gjz:function(a){return new W.jw(a)},
gcp:function(a){return new W.jt(a,a.children)},
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
if(u==null){u=H.d([],[W.aB])
t=new W.dV(u)
C.a.h(u,W.ml(null))
C.a.h(u,W.mn())
$.lL=t
d=t}else d=u
u=$.lK
if(u==null){u=new W.f8(d)
$.lK=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation
t=(t&&C.T).jO(t,"")
$.bj=t
$.kX=t.createRange()
t=$.bj
t.toString
t=t.createElement("base")
H.h(t,"$icm")
t.href=u.baseURI
u=$.bj.head;(u&&C.V).D(u,t)}u=$.bj
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.h(t,"$iby")}u=$.bj
if(!!this.$iby)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bj.body;(u&&C.p).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a6,a.tagName)){u=$.kX;(u&&C.M).fa(u,s)
u=$.kX
r=(u&&C.M).jM(u,b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(u=J.ac(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lB(s)
c.cW(r)
C.z.ju(document,r)
return r},
jN:function(a,b,c){return this.ag(a,b,c,null)},
fd:function(a,b,c,d){a.textContent=null
this.D(a,this.ag(a,b,c,d))},
fc:function(a,b){return this.fd(a,b,null,null)},
b0:function(a,b){return a.getAttribute(b)},
ir:function(a,b){return a.removeAttribute(b)},
fb:function(a,b,c){return a.setAttribute(b,c)},
$iT:1,
gkR:function(a){return a.tagName}}
W.fU.prototype={
$1:function(a){return!!J.X(H.h(a,"$iF")).$iT},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jo:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fQ(a,b,c,!1)},
fQ:function(a,b,c,d){return a.addEventListener(b,H.ce(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cv.prototype={
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
$icv:1,
$aD:function(){return[W.aF]}}
W.h0.prototype={
gl:function(a){return a.length}}
W.h4.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.dB.prototype={}
W.dC.prototype={
ix:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c_.prototype={
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
$ic_:1,
$aD:function(){return[W.F]}}
W.dD.prototype={}
W.cy.prototype={$icy:1}
W.cz.prototype={$icz:1}
W.b4.prototype={$ib4:1}
W.dI.prototype={}
W.dL.prototype={
i:function(a){return String(a)},
$idL:1}
W.hD.prototype={
gl:function(a){return a.length}}
W.hE.prototype={
j:function(a,b){return P.bq(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hF(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hG.prototype={
j:function(a,b){return P.bq(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hH(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
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
J.kS(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dz(u,u.length,-1,[H.bR(C.aa,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ay:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
kG:function(a){var u=a.parentNode
if(u!=null)J.fn(u,a)},
kL:function(a,b){var u,t
try{u=a.parentNode
J.kS(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fh(a):u},
D:function(a,b){return a.appendChild(H.h(b,"$iF"))},
is:function(a,b){return a.removeChild(b)},
iw:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cF.prototype={
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
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.hY.prototype={
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
W.e_.prototype={
jM:function(a,b){return a.createContextualFragment(b)},
fa:function(a,b){return a.selectNodeContents(b)}}
W.i8.prototype={
j:function(a,b){return P.bq(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.i9(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.i9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ib.prototype={
gl:function(a){return a.length}}
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
W.aU.prototype={$iaU:1}
W.io.prototype={
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
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.ir.prototype={
j:function(a,b){return this.dl(a,H.G(b))},
n:function(a,b,c){this.iE(a,b,c)},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hf(a,u)
if(t==null)return
b.$2(t,this.dl(a,t))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.is(u))
return u},
gl:function(a){return a.length},
dl:function(a,b){return a.getItem(b)},
hf:function(a,b){return a.key(b)},
iE:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.is.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aG.prototype={$iaG:1}
W.b9.prototype={$ib9:1}
W.e6.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=W.nv("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).au(0,new W.ar(u))
return t},
hd:function(a,b){return a.insertRow(b)}}
W.e7.prototype={
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
W.iy.prototype={
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
W.cL.prototype={$icL:1}
W.aW.prototype={$iaW:1}
W.aH.prototype={$iaH:1}
W.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaH")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.iB.prototype={
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
W.iE.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aD:function(){return[W.aX]}}
W.iJ.prototype={
gl:function(a){return a.length}}
W.bN.prototype={}
W.j5.prototype={
i:function(a){return String(a)}}
W.jl.prototype={
gl:function(a){return a.length}}
W.be.prototype={
gjU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gjT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibe:1}
W.cY.prototype={
iy:function(a,b){return a.requestAnimationFrame(H.ce(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
h4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cZ.prototype={$icZ:1}
W.ju.prototype={
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
W.er.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.dd(b,"$iab",[P.a5],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbK(b)&&a.top===u.gbO(b)&&a.width===u.gaL(b)&&a.height===u.gaI(b)},
gJ:function(a){return W.mm(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaI:function(a){return a.height},
gaL:function(a){return a.width}}
W.jJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaN")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.eJ.prototype={
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
W.jX.prototype={
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
W.k0.prototype={
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
W.js.prototype={
M:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.ac(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b0(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.h(u[r],"$icZ")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaf:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jw.prototype={
j:function(a,b){return J.kT(this.a,H.G(b))},
n:function(a,b,c){J.nk(this.a,b,c)},
gl:function(a){return this.ga7(this).length}}
W.jx.prototype={}
W.lb.prototype={}
W.jy.prototype={}
W.jz.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ip"))},
$S:34}
W.bP.prototype={
fw:function(a){var u,t
u=$.lv()
if(u.gki(u)){for(t=0;t<262;++t)u.n(0,C.a5[t],W.oZ())
for(t=0;t<12;++t)u.n(0,C.B[t],W.p_())}},
aU:function(a){return $.n8().Y(0,W.ct(a))},
av:function(a,b,c){var u,t,s
u=W.ct(a)
t=$.lv()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lj(s.$4(a,b,c,this))},
$iaB:1}
W.D.prototype={
gV:function(a){return new W.dz(a,this.gl(a),-1,[H.bR(this,a,"D",0)])}}
W.dV.prototype={
aU:function(a){return C.a.dL(this.a,new W.hQ(a))},
av:function(a,b,c){return C.a.dL(this.a,new W.hP(a,b,c))},
$iaB:1}
W.hQ.prototype={
$1:function(a){return H.h(a,"$iaB").aU(this.a)},
$S:25}
W.hP.prototype={
$1:function(a){return H.h(a,"$iaB").av(this.a,this.b,this.c)},
$S:25}
W.eR.prototype={
fJ:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bP(0,new W.jU())
t=b.bP(0,new W.jV())
this.b.au(0,u)
s=this.c
s.au(0,C.H)
s.au(0,t)},
aU:function(a){return this.a.Y(0,W.ct(a))},
av:function(a,b,c){var u,t
u=W.ct(a)
t=this.c
if(t.Y(0,H.l(u)+"::"+b))return this.d.jv(c)
else if(t.Y(0,"*::"+b))return this.d.jv(c)
else{t=this.b
if(t.Y(0,H.l(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.l(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iaB:1}
W.jU.prototype={
$1:function(a){return!C.a.Y(C.B,H.G(a))},
$S:26}
W.jV.prototype={
$1:function(a){return C.a.Y(C.B,H.G(a))},
$S:26}
W.k2.prototype={
av:function(a,b,c){if(this.fm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.kT(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.k3.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.G(a))},
$S:17}
W.k1.prototype={
aU:function(a){var u=J.X(a)
if(!!u.$icH)return!1
u=!!u.$iq
if(u&&W.ct(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aU(a)},
$iaB:1}
W.dz.prototype={
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
$ib3:1}
W.aB.prototype={}
W.jS.prototype={$ipD:1}
W.f8.prototype={
cW:function(a){new W.ke(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lB(a)
else J.fn(b,a)},
iC:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nh(a)
s=J.kT(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aj(o)}q="element unprintable"
try{q=J.at(a)}catch(o){H.aj(o)}try{p=W.ct(a)
this.iB(H.h(a,"$iT"),b,u,q,p,H.h(t,"$iE"),H.G(s))}catch(o){if(H.aj(o) instanceof P.aL)throw o
else{this.b4(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iB:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
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
r.ir(u,q)}}if(!!J.X(a).$icL)this.cW(a.content)},
$ipo:1}
W.ke.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iC(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b4(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aj(r)
q=H.h(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.fn(p,q)}else J.fn(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iF")}},
$S:45}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
P.jY.prototype={
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
if(!!t.$iaz)return new Date(a.a)
if(!!t.$io_)throw H.c(P.iY("structured clone of RegExp"))
if(!!t.$iaF)return a
if(!!t.$ibU)return a
if(!!t.$icv)return a
if(!!t.$icy)return a
if(!!t.$icC||!!t.$ibH)return a
if(!!t.$iE){s=this.ei(a)
r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.M(a,new P.k_(u,this))
return u.a}if(!!t.$ib){s=this.ei(a)
u=this.b
if(s>=u.length)return H.f(u,s)
q=u[s]
if(q!=null)return q
return this.jL(a,s)}throw H.c(P.iY("structured clone of other type"))},
jL:function(a,b){var u,t,s,r
u=J.ch(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.cT(u.j(a,r)))
return s}}
P.k_.prototype={
$2:function(a,b){this.a.a[a]=this.b.cT(b)},
$S:7}
P.kp.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jZ.prototype={}
P.h1.prototype={
gbo:function(){var u,t,s
u=this.b
t=H.as(u,"y",0)
s=W.T
return new H.hu(new H.cX(u,H.n(new P.h2(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.h3(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.h(c,"$iT")
u=this.gbo()
J.nj(u.b.$1(J.fo(u.a,b)),c)},
h:function(a,b){J.ly(this.b.a,b)},
gl:function(a){return J.aD(this.gbo().a)},
j:function(a,b){var u=this.gbo()
return u.b.$1(J.fo(u.a,b))},
gV:function(a){var u=P.lO(this.gbo(),!1,W.T)
return new J.au(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.T]},
$ai:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.h2.prototype={
$1:function(a){return!!J.X(H.h(a,"$iF")).$iT},
$S:22}
P.h3.prototype={
$1:function(a){return H.m(H.h(a,"$iF"),"$iT")},
$S:33}
P.jN.prototype={
gbN:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdS:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dd(b,"$iab",[P.a5],"$aab")){u=this.a
t=J.ac(b)
if(u==t.gbK(b)){s=this.b
if(s==t.gbO(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gbN(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdS(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.di(u)
s=this.b
r=J.di(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gJ(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gJ(H.A(s+this.d,q))
return P.ol(P.jL(P.jL(P.jL(P.jL(0,t),r),u),q))}}
P.ab.prototype={
gbK:function(a){return this.a},
gbO:function(a){return this.b},
gaL:function(a){return this.c},
gaI:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hj.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ib5")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.b7.prototype={$ib7:1}
P.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ib7")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aD:function(){return[P.b7]}}
P.i_.prototype={
gl:function(a){return a.length}}
P.cH.prototype={$icH:1}
P.ix.prototype={
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
gcp:function(a){return new P.h1(a,new W.ar(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aB])
C.a.h(u,W.ml(null))
C.a.h(u,W.mn())
C.a.h(u,new W.k1())
c=new W.f8(new W.dV(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jN(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ar(r)
p=u.gaM(u)
for(u=J.ac(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$iq:1}
P.bb.prototype={$ibb:1}
P.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ibb")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aD:function(){return[P.bb]}}
P.eB.prototype={}
P.eC.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.R.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
P.ft.prototype={
gl:function(a){return a.length}}
P.fu.prototype={
j:function(a,b){return P.bq(a.get(H.G(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new P.fv(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fw.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.hU.prototype={
gl:function(a){return a.length}}
P.ep.prototype={}
P.dl.prototype={$idl:1}
P.dA.prototype={$idA:1}
P.dZ.prototype={$idZ:1}
P.c7.prototype={
dM:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jB:function(a,b,c){return a.bindFramebuffer(b,c)},
jC:function(a,b,c){return a.blendFunc(b,c)},
dT:function(a,b,c,d){return a.bufferData(b,c,d)},
jF:function(a,b){return a.clear(b)},
jG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jH:function(a,b){return a.clearDepth(b)},
jJ:function(a,b){return a.compileShader(b)},
jP:function(a,b){return a.createShader(b)},
jR:function(a,b){return a.deleteProgram(b)},
jS:function(a,b){return a.deleteShader(b)},
jV:function(a,b){return a.depthFunc(b)},
jW:function(a,b){return a.disable(b)},
dW:function(a,b){return a.disableVertexAttribArray(b)},
jY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ct:function(a,b){return a.enable(b)},
dX:function(a,b){return a.enableVertexAttribArray(b)},
f_:function(a,b,c){return a.getActiveAttrib(b,c)},
f0:function(a,b,c){return a.getActiveUniform(b,c)},
f1:function(a,b,c){return a.getAttribLocation(b,c)},
cV:function(a,b){return a.getParameter(b)},
f4:function(a,b){return a.getProgramInfoLog(b)},
bR:function(a,b,c){return a.getProgramParameter(b,c)},
f5:function(a,b){return a.getShaderInfoLog(b)},
f6:function(a,b,c){return a.getShaderParameter(b,c)},
f7:function(a,b,c){return a.getUniformLocation(b,c)},
kk:function(a,b){return a.linkProgram(b)},
ff:function(a,b,c){return a.shaderSource(b,c)},
T:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eX:function(a,b){return a.useProgram(b)},
kX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic7:1}
P.e2.prototype={$ie2:1}
P.eh.prototype={$ieh:1}
P.ip.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.bq(this.he(a,b))},
n:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
he:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.eU.prototype={}
P.eV.prototype={}
O.a6.prototype={
bW:function(a){this.shj(H.d([],[a]))
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
i7:function(a){var u
H.k(a,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hv:function(a,b){var u
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
if(this.i7(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hv(s,H.d([b],u))}},
shj:function(a){this.a=H.k(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sdv:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.as(this,"a6",0)]]})},
sds:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.as(this,"a6",0)]]})},
sdw:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.as(this,"a6",0)]]})},
$ii:1}
O.cB.prototype={
gl:function(a){return this.a.length},
gE:function(){var u=this.b
if(u==null){u=D.a0()
this.b=u}return u},
fu:function(a){var u=this.b
if(u!=null)u.O(a)},
aN:function(){return this.fu(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dR()},
eK:function(a){var u=this.a
if(a==null)C.a.h(u,V.dR())
else C.a.h(u,a)
this.aN()},
cJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sc4:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fz.prototype={}
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
if(u!=null)u.gE().N(0,this.geD())
t=this.c
if(t!=null)t.gE().h(0,this.geD())
s=new D.Q("shape",u,this.c,this,[F.e3])
s.b=!0
this.aa(s)}},
sbf:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gE().N(0,this.geF())
t=this.f
this.f=a
if(a!=null)a.gE().h(0,this.geF())
this.d6()
s=new D.Q("technique",t,this.f,this,[O.bM])
s.b=!0
this.aa(s)}},
saW:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gE().N(0,this.geB())
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
if(u!=null)u.O(a)},
a3:function(){return this.aa(null)},
eE:function(a){H.h(a,"$iB")
this.e=null
this.aa(a)},
kv:function(){return this.eE(null)},
eG:function(a){this.aa(H.h(a,"$iB"))},
kw:function(){return this.eG(null)},
eC:function(a){this.aa(H.h(a,"$iB"))},
ku:function(){return this.eC(null)},
eA:function(a){this.aa(H.h(a,"$iB"))},
kr:function(){return this.eA(null)},
kq:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.gez(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kt:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gV(b),t=this.gez();u.C();)u.gL(u).gE().N(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfv:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibo:1}
E.i4.prototype={
fp:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.az(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cB()
t=[V.ao]
u.sc4(H.d([],t))
u.b=null
u.gE().h(0,new E.i5(this))
this.cy=u
u=new O.cB()
u.sc4(H.d([],t))
u.b=null
u.gE().h(0,new E.i6(this))
this.db=u
u=new O.cB()
u.sc4(H.d([],t))
u.b=null
u.gE().h(0,new E.i7(this))
this.dx=u
this.siO(H.d([],[O.bM]))
u=this.dy;(u&&C.a).h(u,null)
this.siK(new H.aP([P.e,A.cI]))},
gkF:function(){var u,t
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
siO:function(a){this.dy=H.k(a,"$ib",[O.bM],"$ab")},
siK:function(a){this.fr=H.k(a,"$iE",[P.e,A.cI],"$aE")}}
E.i5.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.i6.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.i7.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ed.prototype={
d1:function(a){H.h(a,"$iB")
this.eN()},
d0:function(){return this.d1(null)},
gkd:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.lJ(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.az(u,!1)
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
eN:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iD(this),{func:1,ret:-1,args:[P.a5]})
C.O.h4(u)
C.O.iy(u,W.mB(t,P.a5))}},
kJ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dB()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
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
if(s!=null)s.O(null)}catch(q){u=H.aj(q)
t=H.ci(q)
P.ay("Error: "+H.l(u))
P.ay("Stack: "+H.l(t))
throw H.c(u)}}}
E.iD.prototype={
$1:function(a){var u
H.p9(a)
u=this.a
if(u.ch){u.ch=!1
u.kJ()}},
$S:54}
Z.en.prototype={$ipi:1}
Z.dm.prototype={
br:function(a){var u,t,s
try{t=a.a
C.c.dX(t,this.e)
C.c.kX(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.jm.prototype={$ipj:1}
Z.dn.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
br:function(a){var u,t
u=this.a
C.c.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].br(a)},
eT:function(a){var u,t,s
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
C.c.jY(t,q.a,q.b,5123,0)
C.c.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.at(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shc:function(a){this.b=H.k(a,"$ib",[Z.bE],"$ab")},
$ips:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c4(this.c)+"'")+"]"}}
Z.bd.prototype={
gcY:function(a){var u,t
u=this.a
t=(u&$.bu().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.df().a)!==0)t+=3
if((u&$.dg().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
jx:function(a){var u,t,s
u=$.bu()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.df()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0)if(s===a)return u
return $.n6()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bu().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bv().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.df().a)!==0)C.a.h(u,"Clr3")
if((t&$.dg().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fC.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.b
t=(u&&C.a).N(u,b)||t}return t},
O:function(a){var u,t,s,r
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
return!0}if(!s)C.a.M(P.lO(t,!0,{func:1,ret:-1,args:[D.B]}),new D.fY(u))
t=this.b
if(t!=null){this.saR(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.M(t,new D.fZ(u))}return!0},
kN:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.O(t)}}},
an:function(a){return this.kN(a,!0,!1)},
sak:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saR:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fY.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.fZ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.Q.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dp.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dH.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hi.prototype={
kC:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ky:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
sio:function(a){this.d=H.k(a,"$im2",[P.o],"$am2")}}
X.dM.prototype={}
X.hq.prototype={
b2:function(a,b){var u,t,s,r,q,p,o,n
u=new P.az(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.F()
q=b.b
p=this.ch
if(typeof q!=="number")return q.F()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gbs()
n=new X.bG(a,V.bJ(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cI:function(a,b){this.r=a.a
return!1},
be:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f9()
if(typeof u!=="number")return u.bQ()
this.r=(u&~t)>>>0
return!1},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.O(this.b2(a,b))
return!0},
kD:function(a){return!1},
hX:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.az(Date.now(),!1)
t=this.f
s=new X.dM(c,a,this.a.gbs(),b,u,this)
s.b=!0
t.O(s)
this.y=u
this.x=V.bJ()}}
X.aR.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aR))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bG.prototype={}
X.hJ.prototype={
c1:function(a,b,c){var u,t,s
u=new P.az(Date.now(),!1)
t=this.a.gbs()
s=new X.bG(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cI:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.O(this.c1(a,b,!0))
return!0},
be:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f9()
if(typeof u!=="number")return u.bQ()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.O(this.c1(a,b,!0))
return!0},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.O(this.c1(a,b,!1))
return!0},
kE:function(a,b){return!1}}
X.hZ.prototype={}
X.ef.prototype={}
X.iH.prototype={
b2:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=this.a.gbs()
r=new X.ef(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kB:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.O(this.b2(a,!0))
return!0},
kz:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.O(this.b2(a,!0))
return!0},
kA:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.O(this.b2(a,!1))
return!0}}
X.ek.prototype={
gbs:function(){var u=this.a
return V.m0(0,0,C.x.gdU(u).c,C.x.gdU(u).d)},
dg:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dH(u,new X.aR(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aR(t,a.altKey,a.shiftKey)},
cf:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aR(t,a.altKey,a.shiftKey)},
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
return new X.dp(u,new X.aR(t,a.altKey,a.shiftKey))},
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
hR:function(a){this.f=!0},
hD:function(a){this.f=!1},
hL:function(a){H.h(a,"$iag")
if(this.f&&this.c5(a))a.preventDefault()},
hV:function(a){var u
H.h(a,"$ib4")
if(!this.f)return
u=this.dg(a)
this.b.kC(u)},
hT:function(a){var u
H.h(a,"$ib4")
if(!this.f)return
u=this.dg(a)
this.b.ky(u)},
hZ:function(a){var u,t,s,r
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
i2:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.be(u,s))a.preventDefault()},
hP:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c5(a)){this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.be(u,s))a.preventDefault()}},
i0:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()},
hN:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c5(a)){this.aS(a)
u=this.aE(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()}},
i4:function(a){var u,t
H.h(a,"$ibe")
this.aS(a)
u=new V.a4((a&&C.N).gjT(a),C.N.gjU(a)).B(0,180)
if(this.x){if(this.d.kD(u))a.preventDefault()
return}if(this.r)return
t=this.aG(a)
if(this.c.kE(u,t))a.preventDefault()},
i6:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aG(this.y)
this.d.hX(t,s,u)}},
il:function(a){var u
H.h(a,"$iaY")
this.a.focus()
this.f=!0
this.cf(a)
u=this.c9(a)
if(this.e.kB(u))a.preventDefault()},
ih:function(a){var u
H.h(a,"$iaY")
this.cf(a)
u=this.c9(a)
if(this.e.kz(u))a.preventDefault()},
ij:function(a){var u
H.h(a,"$iaY")
this.cf(a)
u=this.c9(a)
if(this.e.kA(u))a.preventDefault()},
sh5:function(a){this.z=H.k(a,"$ib",[[P.cK,P.P]],"$ab")}}
D.du.prototype={$ia8:1,$ibo:1}
D.a8.prototype={$ibo:1}
D.dJ.prototype={
gE:function(){var u=this.Q
if(u==null){u=D.a0()
this.Q=u}return u},
a9:function(a){var u=this.Q
if(u!=null)u.O(a)},
du:function(a){var u
H.h(a,"$iB")
u=this.ch
if(u!=null)u.O(a)},
hW:function(){return this.du(null)},
i9:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fz(s))return!1}return!0},
hx:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdt(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.h(b[p],"$ia8")
if(o instanceof D.bL)C.a.h(this.r,o)
n=o.z
if(n==null){n=new D.bY()
n.sak(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c0(a,b,this,[u])
u.b=!0
this.a9(u)},
ie:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gdt();t.C();){r=t.gL(t)
C.a.N(this.e,r)
r.gE().N(0,s)}u=new D.c1(a,b,this,[u])
u.b=!0
this.a9(u)},
fz:function(a){var u=C.a.Y(this.r,a)
return u},
sfA:function(a){this.e=H.k(a,"$ib",[D.du],"$ab")},
sfB:function(a){this.f=H.k(a,"$ib",[D.dY],"$ab")},
sfC:function(a){this.r=H.k(a,"$ib",[D.bL],"$ab")},
sfD:function(a){this.x=H.k(a,"$ib",[D.ea],"$ab")},
sfE:function(a){this.y=H.k(a,"$ib",[D.eb],"$ab")},
sfF:function(a){this.z=H.k(a,"$ib",[D.ec],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dY.prototype={$ia8:1,$ibo:1}
D.bL.prototype={
gE:function(){var u=this.z
if(u==null){u=D.a0()
this.z=u}return u},
a9:function(a){var u
H.h(a,"$iB")
u=this.z
if(u!=null)u.O(a)},
hF:function(){return this.a9(null)},
$ia8:1,
$ibo:1}
D.ea.prototype={$ia8:1,$ibo:1}
D.eb.prototype={$ia8:1,$ibo:1}
D.ec.prototype={$ia8:1,$ibo:1}
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
V.aM.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcN())
t=C.e.p(this.b,b.gbS())
s=C.e.p(this.c,b.gcl())
r=C.e.p(this.d,b.gjw(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcN())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcl())
r=C.e.t(this.d,b.gjw(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.fW.prototype={}
V.dQ.prototype={
aj:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
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
t=V.cg(H.d([this.a,this.d,this.r],u),3,0)
s=V.cg(H.d([this.b,this.e,this.x],u),3,0)
r=V.cg(H.d([this.c,this.f,this.y],u),3,0)
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
if(Math.abs(a7-0)<$.N().a)return V.dR()
a8=1/a7
a9=-r
b0=-d
return V.bn((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.bn(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
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
t=V.cg(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cg(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cg(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cg(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
V.b8.prototype={
p:function(a,b){return new V.b8(C.e.p(this.a,b.gl_(b)),C.e.p(this.b,b.gl0(b)),C.e.p(this.c,b.gl1(b)),C.e.p(this.d,b.gkZ(b)))},
t:function(a,b){return new V.b8(C.e.t(this.a,b.gl_(b)),C.e.t(this.b,b.gl0(b)),C.e.t(this.c,b.gl1(b)),C.e.t(this.d,b.gkZ(b)))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.e1.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
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
t=b.gjZ(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gk_(b)
if(typeof u!=="number")return u.p()
return new V.a4(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gjZ(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gk_(b)
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
B:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cW()
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
U.fD.prototype={
bX:function(a){var u=V.ph(a,this.c,this.b)
return u},
gE:function(){var u=this.y
if(u==null){u=D.a0()
this.y=u}return u},
a0:function(a){var u=this.y
if(u!=null)u.O(a)},
seZ:function(a,b){},
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
U.dr.prototype={
gE:function(){var u=this.b
if(u==null){u=D.a0()
this.b=u}return u},
b_:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dr))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cx.prototype={
gE:function(){var u=this.e
if(u==null){u=D.a0()
this.e=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.O(a)},
ar:function(){return this.a0(null)},
fH:function(a,b){var u,t,s,r,q,p,o,n
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbm(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gE()
n.toString
H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.a0(u)},
ib:function(a,b){var u,t,s
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gbm();t.C();)t.gL(t).gE().N(0,s)
u=new D.c1(a,b,this,[u])
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
if(r!=null)s=s==null?r:r.F(0,s)}}this.f=s==null?V.dR():s
u=this.e
if(u!=null)u.an(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cx))return!1
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
U.el.prototype={
gE:function(){var u=this.fx
if(u==null){u=D.a0()
this.fx=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.O(a)},
ar:function(){return this.a0(null)},
jy:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.a0()
u.b=t
u=t}else u=t
u.h(0,this.ghp())
u=this.a.c
t=u.d
if(t==null){t=D.a0()
u.d=t
u=t}else u=t
u.h(0,this.ghr())
u=this.a.c
t=u.c
if(t==null){t=D.a0()
u.c=t
u=t}else u=t
u.h(0,this.ght())
u=this.a.d
t=u.f
if(t==null){t=D.a0()
u.f=t
u=t}else u=t
u.h(0,this.ghk())
u=this.a.d
t=u.d
if(t==null){t=D.a0()
u.d=t
u=t}else u=t
u.h(0,this.ghm())
u=this.a.e
t=u.b
if(t==null){t=D.a0()
u.b=t
u=t}else u=t
u.h(0,this.giU())
u=this.a.e
t=u.d
if(t==null){t=D.a0()
u.d=t
u=t}else u=t
u.h(0,this.giS())
u=this.a.e
t=u.c
if(t==null){t=D.a0()
u.c=t
u=t}else u=t
u.h(0,this.giQ())
return!0},
at:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.a4(u,t)},
hq:function(a){a=H.m(H.h(a,"$iB"),"$ibG")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hs:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibG")
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
hu:function(a){var u,t,s
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
hl:function(a){if(H.m(H.h(a,"$iB"),"$idM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hn:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibG")
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
iV:function(a){H.h(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iT:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ief")
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
iR:function(a){var u,t,s
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
this.fr=u.F(0,V.bn(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iak:1}
M.dy.prototype={
aD:function(a){var u
H.h(a,"$iB")
u=this.x
if(u!=null)u.O(a)},
fI:function(){return this.aD(null)},
hH:function(a,b){var u,t,s,r,q,p,o,n
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gas(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bY()
n.sak(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.aD(u)},
hJ:function(a,b){var u,t,s
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gas();t.C();)t.gL(t).gE().N(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.aD(u)},
sbf:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gE().N(0,this.gas())
t=this.c
this.c=a
if(a!=null)a.gE().h(0,this.gas())
u=new D.Q("technique",t,this.c,this,[O.bM])
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
C.c.jB(t,36160,null)
C.c.ct(t,2884)
C.c.ct(t,2929)
C.c.jV(t,513)
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
C.c.jH(t,u.c)
u=u.a
C.c.jG(t,u.a,u.b,u.c,u.d)
C.c.jF(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bn(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
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
t=V.bn(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
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
sfX:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipp:1}
A.dk.prototype={}
A.fs.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.dX(r.a,r.c)}},
jX:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.dW(r.a,r.c)}}}
A.hx.prototype={
fo:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.j2(u)
a7.j9(u)
a7.j3(u)
a7.jh(u)
a7.ji(u)
a7.jb(u)
a7.jm(u)
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
s.j6(u)
s.j1(u)
s.j4(u)
s.j7(u)
s.jf(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jd(u)
s.je(u)}s.ja(u)
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
s.j5(u)
s.jc(u)
s.jg(u)
s.jj(u)
s.jk(u)
s.jl(u)
s.j8(u)}m=u.a+="// === Main ===\n"
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
C.c.kk(s,this.r)
if(!H.lj(C.c.bR(s,this.r,35714))){h=C.c.f4(s,this.r)
C.c.jR(s,this.r)
H.t(P.w("Failed to link shader: "+H.l(h)))}this.iH()
this.iJ()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.m(this.y.q(0,"invViewMat"),"$iaC")
if(t)this.dy=H.m(this.y.q(0,"objMat"),"$iaC")
if(r)this.fr=H.m(this.y.q(0,"viewObjMat"),"$iaC")
this.fy=H.m(this.y.q(0,"projViewObjMat"),"$iaC")
if(a7.x2)this.k1=H.m(this.y.q(0,"txt2DMat"),"$icP")
if(a7.y1)this.k2=H.m(this.y.q(0,"txtCubeMat"),"$iaC")
if(a7.y2)this.k3=H.m(this.y.q(0,"colorMat"),"$iaC")
this.sfT(H.d([],[A.aC]))
t=a7.ay
if(t>0){this.k4=H.h(this.y.q(0,"bendMatCount"),"$iO")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.m(f,"$iaC"))}}t=a7.a
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
break}}this.sh2(H.d([],[A.cO]))
this.sim(H.d([],[A.cQ]))
this.siM(H.d([],[A.cR]))
this.siX(H.d([],[A.cS]))
this.siY(H.d([],[A.cT]))
this.siZ(H.d([],[A.cU]))
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
s=this.cu;(s&&C.a).h(s,new A.cO(g,f,e))}}t=a7.Q
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
s=this.cv;(s&&C.a).h(s,new A.cQ(g,f,e,d,c,b,a))}}t=a7.ch
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
s=this.cw;(s&&C.a).h(s,new A.cR(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
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
s=this.cz;(s&&C.a).h(s,new A.cS(g,f,e,d,c,b,a0,a))}}t=a7.cy
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
H.m(d,"$icP")
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
s=this.cA;(s&&C.a).h(s,new A.cT(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
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
s=this.cB;(s&&C.a).h(s,new A.cU(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
al:function(a,b,c){C.c.W(b.a,b.d,1)},
ae:function(a,b,c){C.c.W(b.a,b.d,1)},
sfT:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
sh2:function(a){this.cu=H.k(a,"$ib",[A.cO],"$ab")},
sim:function(a){this.cv=H.k(a,"$ib",[A.cQ],"$ab")},
siM:function(a){this.cw=H.k(a,"$ib",[A.cR],"$ab")},
siX:function(a){this.cz=H.k(a,"$ib",[A.cS],"$ab")},
siY:function(a){this.cA=H.k(a,"$ib",[A.cT],"$ab")},
siZ:function(a){this.cB=H.k(a,"$ib",[A.cU],"$ab")}}
A.hA.prototype={
j2:function(a){var u,t,s
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
j9:function(a){var u
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
j3:function(a){var u
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
jh:function(a){var u,t
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
ji:function(a){var u,t
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
jb:function(a){var u
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
jm:function(a){var u
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
j6:function(a){var u,t
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
j1:function(a){var u,t
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
j4:function(a){var u,t
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
j7:function(a){var u,t
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
jf:function(a){var u,t
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
ja:function(a){var u,t
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
jd:function(a){var u,t
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
je:function(a){var u,t
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
j5:function(a){var u,t
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
jc:function(a){var u,t
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
jg:function(a){var u,t
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
jj:function(a){var u,t,s
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
jk:function(a){var u,t,s
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
jl:function(a){var u,t,s
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
j8:function(a){var u
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
A.cO.prototype={}
A.cS.prototype={}
A.cQ.prototype={}
A.cT.prototype={}
A.cR.prototype={}
A.cU.prototype={}
A.cI.prototype={
fs:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dh:function(a,b){var u,t,s
u=this.a
t=C.c.jP(u,b)
C.c.ff(u,t,a)
C.c.jJ(u,t)
if(!H.lj(C.c.f6(u,t,35713))){s=C.c.f5(u,t)
C.c.jS(u,t)
throw H.c(P.w("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
iH:function(){var u,t,s,r,q,p
u=H.d([],[A.dk])
t=this.a
s=H.ai(C.c.bR(t,this.r,35721))
if(typeof s!=="number")return H.I(s)
r=0
for(;r<s;++r){q=C.c.f_(t,this.r,r)
p=C.c.f1(t,this.r,q.name)
C.a.h(u,new A.dk(t,q.name,p))}this.x=new A.fs(u)},
iJ:function(){var u,t,s,r,q,p
u=H.d([],[A.eg])
t=this.a
s=H.ai(C.c.bR(t,this.r,35718))
if(typeof s!=="number")return H.I(s)
r=0
for(;r<s;++r){q=C.c.f0(t,this.r,r)
p=C.c.f7(t,this.r,q.name)
C.a.h(u,this.jQ(q.type,q.size,q.name,p))}this.y=new A.iV(u)},
aP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.O(u,t,b,c)
else return A.l7(u,t,b,a,c)},
h_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ap(u,t,b,c)
else return A.l7(u,t,b,a,c)},
h0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.l7(u,t,b,a,c)},
bq:function(a,b){return new P.ew(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jQ:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.iQ(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.iT(this.a,this.r,c,d)
case 35667:return new A.iR(this.a,this.r,c,d)
case 35668:return new A.iS(this.a,this.r,c,d)
case 35669:return new A.iU(this.a,this.r,c,d)
case 35674:return new A.iW(this.a,this.r,c,d)
case 35675:return new A.cP(this.a,this.r,c,d)
case 35676:return new A.aC(this.a,this.r,c,d)
case 35678:return this.h_(b,c,d)
case 35680:return this.h0(b,c,d)
case 35670:throw H.c(this.bq("BOOL",c))
case 35671:throw H.c(this.bq("BOOL_VEC2",c))
case 35672:throw H.c(this.bq("BOOL_VEC3",c))
case 35673:throw H.c(this.bq("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.eg.prototype={}
A.iV.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kc:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kc("\n")}}
A.O.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sj_:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cP.prototype={
ap:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.r],"$ab")))
C.c.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aC.prototype={
ap:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.r],"$ab")))
C.c.eV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kg.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cH(u.b,b).cH(u.d.cH(u.c,b),c)
a.sa4(0,new V.a2(t.a,t.b,t.c))
a.seP(t.B(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdQ(new V.b8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.kq.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.ks.prototype={
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
a.seP(p.B(0,Math.sqrt(p.I(p))))
a.sdQ(new V.b8(1-c,2+c,-1,-1))},
$S:8}
F.kt.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.ku.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kN.prototype={
$2:function(a,b){return 0},
$S:31}
F.kO.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.I(u)
t=a.f
s=new V.J(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.I(s))).F(0,this.b+u)
a.sa4(0,new V.a2(u.a,u.b,u.c))},
$S:8}
F.kP.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:19}
F.kB.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a2(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:19}
F.kr.prototype={
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
b7:function(){if(!this.gb8()){C.a.N(this.a.a.d.b,this)
this.a.a.a3()}this.cb()
this.cc()
this.iu()},
cg:function(a){this.a=a
C.a.h(a.d.b,this)},
ci:function(a){this.b=a
C.a.h(a.d.c,this)},
iG:function(a){this.c=a
C.a.h(a.d.d,this)},
cb:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cc:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
iu:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cW()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eu())return
return q.B(0,Math.sqrt(q.I(q)))},
fW:function(){var u,t,s,r,q
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
var u=this.fS()
if(u==null){u=this.fW()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cW()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eu())return
return q.B(0,Math.sqrt(q.I(q)))},
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
var u=this.fR()
if(u==null){u=this.fV()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjI:function(a){if(J.U(this.a,this.b))return!0
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
F.h_.prototype={}
F.il.prototype={
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
F.bm.prototype={
b7:function(){if(!this.gb8()){C.a.N(this.a.a.c.b,this)
this.a.a.a3()}this.cb()
this.cc()},
cg:function(a){this.a=a
C.a.h(a.c.b,this)},
ci:function(a){this.b=a
C.a.h(a.c.c,this)},
cb:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cc:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){if(this.gb8())return a+"disposed"
return a+C.b.ai(J.at(this.a.e),0)+", "+C.b.ai(J.at(this.b.e),0)},
R:function(){return this.G("")}}
F.hk.prototype={}
F.iO.prototype={
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
F.bI.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ai(J.at(u.e),0)},
R:function(){return this.G("")}}
F.e3.prototype={
gE:function(){var u=this.e
if(u==null){u=D.a0()
this.e=u}return u},
bc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jK())}this.a.A()
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
n=new F.bI()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.O(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
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
F.cu(k,j,h)}u=this.e
if(u!=null)u.an(0)},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.an(0)
return t},
kn:function(a,b){var u,t,s,r,q,p,o
P.ay("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.ay("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
P.ay("FLAG 3\n")
for(u=[F.ah];t.length!==0;){s=C.a.gk8(t)
C.a.kH(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.C)(t),++p){o=t[p]
if(o!=null&&a.bb(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.bc(r)}}P.ay("FLAG 4\n")
this.a.A()
P.ay("FLAG 5\n")
this.c.cO()
P.ay("FLAG 6\n")
this.d.cO()
P.ay("FLAG 7\n")
this.b.kI()
P.ay("FLAG 8\n")
this.c.cP(new F.iO())
P.ay("FLAG 9\n")
this.d.cP(new F.il())
P.ay("FLAG 10\n")
u=this.e
if(u!=null)u.an(0)
P.ay("FLAG 11\n")},
jt:function(a){this.kn(new F.jf(),new F.hR())},
cj:function(){return this.jt(null)},
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
if(u!=null)u.O(null)}}}}u=this.e
if(u!=null)u.an(0)},
jD:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bu()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bt().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.df().a)!==0)++r
if((s&$.dg().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.br().a)!==0)++r
q=a1.gcY(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dm])
for(m=0,l=0;l<r;++l){k=a1.jx(l)
j=k.gcY(k)
C.a.n(n,l,new Z.dm(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].kl(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.c.aw(t,34962,e)
C.c.dT(t,34962,new Float32Array(H.cb(o)),35044)
C.c.aw(t,34962,null)
d=new Z.dn(new Z.en(34962,e),n,a1)
d.shc(H.d([],[Z.bE]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.la(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.la(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(1,c.length,a))}if(this.d.b.length!==0){s=P.o
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
C.a.h(c,b.e)}a=Z.la(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
aa:function(a){var u=this.e
if(u!=null)u.O(a)},
a3:function(){return this.aa(null)},
$ipq:1}
F.id.prototype={
jp:function(a){var u,t,s,r,q,p,o
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
C.a.h(u,F.cu(s,p,o))}}return u},
jq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
C.a.h(u,F.cu(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cu(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cu(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cu(k,h,l))}o=!o}q=!q}return u},
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
t=s.gjI(s)
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
if(p!=null)p.O(null)}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sh6:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ie.prototype={
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
shg:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")}}
F.ig.prototype={
gl:function(a){return this.b.length},
kI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.O(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc8:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
F.ah.prototype={
cr:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.em(this.cx,s,p,u,t,r,q,a,o)},
jK:function(){return this.cr(null)},
sa4:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
sey:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.I(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
seP:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdQ:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
kl:function(a){var u,t
if(a.v(0,$.bu())){u=this.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=this.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bs())){u=this.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bv())){u=this.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bw())){u=this.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.df())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dg())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cl()))return H.d([this.ch],[P.r])
else if(a.v(0,$.br())){u=this.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
co:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cW()
this.d.M(0,new F.jk(u))
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
if(t!=null)++t.d}u.a=V.cW()
this.d.M(0,new F.jj(u))
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
F.jk.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jj.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.ja.prototype={
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
js:function(a,b,c,d,e,f,g,h,i){var u=F.em(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jr:function(a,b,c,d,e,f){return this.js(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].co()
return!0},
cn:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cm()
return!0},
jE:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.O(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
this.A()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sj0:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.jb.prototype={
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
C.a.M(this.c,new F.jc(this,b))
C.a.M(this.d,new F.jd(this,b))},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sh7:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sh8:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sh9:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jc.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jd.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:6}
F.je.prototype={
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
shh:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")},
shi:function(a){this.c=H.k(a,"$ib",[F.bm],"$ab")}}
F.jg.prototype={}
F.jf.prototype={
bb:function(a,b,c){return J.U(b.f,c.f)}}
F.jh.prototype={}
F.hR.prototype={
bc:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.cW()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].sey(u)
return}}
F.ji.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc8:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
O.dO.prototype={
gE:function(){var u=this.dy
if(u==null){u=D.a0()
this.dy=u}return u},
ad:function(a){var u
H.h(a,"$iB")
u=this.dy
if(u!=null)u.O(a)},
fL:function(){return this.ad(null)},
dA:function(a){H.h(a,"$iB")
this.a=null
this.ad(a)},
iA:function(){return this.dA(null)},
hz:function(a,b){var u=V.ao
u=new D.c0(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ad(u)},
hB:function(a,b){var u=V.ao
u=new D.c1(a,H.k(b,"$ii",[u],"$ai"),this,[u])
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
a7=$.bu()
if(a0){b=$.bt()
a7=new Z.bd(a7.a|b.a)}if(a1){b=$.bs()
a7=new Z.bd(a7.a|b.a)}if(a2){b=$.bv()
a7=new Z.bd(a7.a|b.a)}if(a3){b=$.bw()
a7=new Z.bd(a7.a|b.a)}if(a5){b=$.br()
a7=new Z.bd(a7.a|b.a)}return new A.hA(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
X:function(a,b){H.k(a,"$ib",[T.e9],"$ab")},
aB:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.C();){t=u.d
t.toString
s=$.bK
if(s==null){s=new V.a2(0,0,0)
$.bK=s}t.a=s
s=$.j9
if(s==null){s=new V.J(0,0,1)
$.j9=s}t.b=s
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
if(!(u instanceof Z.dn)){a5.e=null
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
n.a.jE()
n=n.e
if(n!=null)n.an(0)}l=a5.d.jD(new Z.jm(a4.a),q)
l.aV($.bu()).e=this.a.Q.c
if(u)l.aV($.bt()).e=this.a.cx.c
if(p)l.aV($.bs()).e=this.a.ch.c
if(r.rx)l.aV($.bv()).e=this.a.cy.c
if(o)l.aV($.bw()).e=this.a.db.c
if(r.x1)l.aV($.br()).e=this.a.dx.c
a5.e=l}u=T.e9
k=H.d([],[u])
p=this.a
o=a4.a
C.c.eX(o,p.r)
p.x.k0()
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
if(n==null){n=a4.gkF()
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
h=new Float32Array(H.cb(H.k(m.aj(0,!0),"$ib",p,"$ab")))
C.c.eV(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
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
a0=$.bK
if(a0==null){a0=new V.a2(0,0,0)
$.bK=a0}a0=a.aZ(a0)
a=b.b
C.c.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bK
if(a==null){a=new V.a2(0,0,0)
$.bK=a}a=a2.aZ(a)
a0=b.c
C.c.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.es(0)
a0=b.d
h=new Float32Array(H.cb(H.k(new V.dQ(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).aj(0,!0),"$ib",m,"$ab")))
C.c.eU(a0.a,a0.d,!1,h)
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
C.c.jC(o,770,771)}for(i=0;i<k.length;++i)k[i].br(a4)
u=a5.e
u.br(a4)
u.aX(a4)
u.eT(a4)
if(p)C.c.jW(o,3042)
for(i=0;i<k.length;++i)k[i].eT(a4)
u=this.a
u.toString
C.c.eX(o,null)
u.x.jX()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.de().am},
sfU:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.hy.prototype={}
O.dP.prototype={
aQ:function(){}}
O.hz.prototype={}
O.b6.prototype={
dC:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.Q(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.ad(t)}},
aQ:function(){this.fl()
this.dC(new V.a1(1,1,1))},
saf:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aQ()
u=this.a
u.a=null
u.ad(null)}this.dC(b)}}
O.hB.prototype={
iF:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.Q(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.ad(u)}},
aQ:function(){this.bV()
this.iF(1)}}
O.hC.prototype={
cd:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.Q(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.ad(u)}},
aQ:function(){this.bV()
this.cd(100)}}
O.bM.prototype={}
T.e9.prototype={}
T.iC.prototype={}
V.bh.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.dN.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.av.prototype={
aJ:function(a,b){return!this.fk(0,b)},
i:function(a){return"!["+this.cZ(0)+"]"}}
V.i2.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c5(this.a)
t=H.c5(this.b)
return u+".."+t},
$iaA:1}
V.ic.prototype={
fq:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.o,P.S])
for(t=new H.cA(a,a.gl(a),0,[H.as(a,"y",0)]);t.C();)u.n(0,t.d,!0)
this.siD(u)},
aJ:function(a,b){return this.a.bt(0,b)},
i:function(a){var u=this.a
return P.e5(u.ga7(u),0,null)},
siD:function(a){this.a=H.k(a,"$iE",[P.o,P.S],"$aE")},
$iaA:1}
V.cJ.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cN(this.a.k(0,b))
r.sa8(H.d([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
k7:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
siW:function(a){this.c=H.k(a,"$ib",[V.cN],"$ab")}}
V.ee.prototype={
i:function(a){var u,t
u=H.lr(this.b,"\n","\\n")
t=H.lr(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cM.prototype={
aK:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siv:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iF.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cJ(this,b)
u.siW(H.d([],[V.cN]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cM(this,a)
t=P.e
u.siv(new H.aP([t,t]))
this.b.n(0,a,u)}return u},
eS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ee])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.H(a,o)
m=t.k7(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.e5(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.e5(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ee(j==null?k.b:j,l,o)}++o}}},
siN:function(a){this.a=H.k(a,"$iE",[P.e,V.cJ],"$aE")},
siP:function(a){this.b=H.k(a,"$iE",[P.e,V.cM],"$aE")}}
V.cN.prototype={
i:function(a){return this.b.b+": "+this.cZ(0)}}
X.dq.prototype={$ibo:1}
X.h6.prototype={
gE:function(){var u=this.x
if(u==null){u=D.a0()
this.x=u}return u}}
X.dX.prototype={
gE:function(){var u=this.f
if(u==null){u=D.a0()
this.f=u}return u},
aO:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.O(a)},
fO:function(){return this.aO(null)},
saW:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gE().N(0,this.gd2())
t=this.b
this.b=a
if(a!=null)a.gE().h(0,this.gd2())
u=new D.Q("mover",t,this.b,this,[U.ak])
u.b=!0
this.aO(u)}},
$ibo:1,
$idq:1}
X.e8.prototype={}
V.bA.prototype={
bl:function(a){this.b=new P.h9(C.X)
this.c=null
this.sc3(H.d([],[[P.b,W.aE]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aE]))
t=a.split("\n")
for(u=t.length,s=[W.aE],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.G(p)
n=this.b.fZ(p,0,p.length)
m=n==null?p:n
C.k.fc(o,H.lr(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eH:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bu()
this.c=t}for(t=t.eS(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bM(t[r])},
sc3:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kM.prototype={
$1:function(a){H.h(a,"$iba")
P.ay(C.e.eR(this.a.gkd(),2)+" fps")},
$S:50}
V.fM.prototype={
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
u=V.iG()
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
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bh())
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
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bh())
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
r=[V.aA]
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
V.h7.prototype={
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
u=V.iG()
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
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bh())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.aA]
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
V.h8.prototype={
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
u=V.iG()
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bh())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bh())
t=u.k(0,"Other").m(0,"Other")
s=new V.av()
s.sa8(H.d([],[V.aA]))
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
V.hX.prototype={
eH:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aE]]))
this.P(C.a.m(b,"\n"),"#111")},
bM:function(a){},
bu:function(){return}}
V.i0.prototype={
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
W.ae(o,"change",H.n(new V.i1(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
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
r=u.eM(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).ix(t,new P.jZ([],[]).cT(""),"",q)}}
V.i1.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dG(this.d)}},
$S:21}
V.ih.prototype={
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
o=W.p
W.ae(u,"scroll",H.n(new V.ij(s),{func:1,ret:-1,args:[o]}),!1,o)},
dK:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iI()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eS(C.a.kj(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
C.k.D(t,l)}else{k=P.f7(C.I,n,C.m,!1)
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
f2:function(a){var u,t,s,r
u=new V.fM("dart")
u.bl("dart")
t=new V.h7("glsl")
t.bl("glsl")
s=new V.h8("html")
s.bl("html")
r=C.a.k9(H.d([u,t,s],[V.bA]),new V.ik(a))
if(r!=null)return r
u=new V.hX("plain")
u.bl("plain")
return u},
dJ:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.de(r).a5(r,"+")){C.a.n(a7,s,C.b.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(a7,s,C.b.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f2(a5)
q.eH(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.f7(C.I,a4,C.m,!1)
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
jn:function(a){var u,t,s,r,q,p,o
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
r=C.o.hd(t,-1)
s=H.h((r&&C.n).dn(r,-1),"$ib9").style
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
o=H.h(C.n.dn(r,-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.w).D(o,p)}},
iI:function(){var u,t,s,r
if(this.b!=null)return
u=V.iG()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.av()
r=[V.aA]
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
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bh())
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
V.ij.prototype={
$1:function(a){P.m6(C.y,new V.ii(this.a))},
$S:21}
V.ii.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ik.prototype={
$1:function(a){return H.h(a,"$ibA").a===this.a},
$S:52}
N.kD.prototype={
$0:function(){this.a.sab(0,F.lm(1,null,null,1))},
$S:0}
N.kE.prototype={
$0:function(){this.a.sab(0,F.ln(1,!0,!0,1,40,1))},
$S:0}
N.kF.prototype={
$0:function(){this.a.sab(0,F.ln(1,!0,!1,1,40,0))},
$S:0}
N.kG.prototype={
$0:function(){this.a.sab(0,F.pe(6,null,1,6))},
$S:0}
N.kH.prototype={
$0:function(){this.a.sab(0,F.mR(30,1,15,0.5))},
$S:0}
N.kI.prototype={
$0:function(){this.a.sab(0,F.p5(120,1,2,12,0.3,3))},
$S:0}
N.kJ.prototype={
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
u.fh=u.i
u=J.dG.prototype
u.fj=u.i
u=P.i.prototype
u.fi=u.bP
u=W.T.prototype
u.bU=u.ag
u=W.eR.prototype
u.fm=u.av
u=O.dP.prototype
u.fl=u.aQ
u=O.b6.prototype
u.bV=u.aQ
u=V.dN.prototype
u.fk=u.aJ
u.cZ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oM","of",11)
u(P,"oN","og",11)
u(P,"oO","oh",11)
t(P,"mE","oL",3)
s(W,"oZ",4,null,["$4"],["oj"],20,0)
s(W,"p_",4,null,["$4"],["ok"],20,0)
var m
r(m=E.an.prototype,"geD",0,0,null,["$1","$0"],["eE","kv"],1,0)
r(m,"geF",0,0,null,["$1","$0"],["eG","kw"],1,0)
r(m,"geB",0,0,null,["$1","$0"],["eC","ku"],1,0)
r(m,"gez",0,0,null,["$1","$0"],["eA","kr"],1,0)
q(m,"gkp","kq",10)
q(m,"gks","kt",10)
r(m=E.ed.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
p(m,"gkM","eN",3)
o(m=X.ek.prototype,"ghQ","hR",13)
o(m,"ghC","hD",13)
o(m,"ghK","hL",4)
o(m,"ghU","hV",27)
o(m,"ghS","hT",27)
o(m,"ghY","hZ",4)
o(m,"gi1","i2",4)
o(m,"ghO","hP",4)
o(m,"gi_","i0",4)
o(m,"ghM","hN",4)
o(m,"gi3","i4",37)
o(m,"gi5","i6",13)
o(m,"gik","il",12)
o(m,"gig","ih",12)
o(m,"gii","ij",12)
r(m=D.dJ.prototype,"gdt",0,0,null,["$1","$0"],["du","hW"],1,0)
o(m,"gi8","i9",39)
q(m,"ghw","hx",16)
q(m,"gic","ie",16)
r(D.bL.prototype,"ghE",0,0,null,["$1","$0"],["a9","hF"],1,0)
n(V.a4.prototype,"gl","cG",15)
n(V.J.prototype,"gl","cG",15)
r(m=U.cx.prototype,"gbm",0,0,null,["$1","$0"],["a0","ar"],1,0)
q(m,"gfG","fH",32)
q(m,"gia","ib",32)
r(m=U.el.prototype,"gbm",0,0,null,["$1","$0"],["a0","ar"],1,0)
o(m,"ghp","hq",2)
o(m,"ghr","hs",2)
o(m,"ght","hu",2)
o(m,"ghk","hl",2)
o(m,"ghm","hn",2)
o(m,"giU","iV",2)
o(m,"giS","iT",2)
o(m,"giQ","iR",2)
r(m=M.dy.prototype,"gas",0,0,null,["$1","$0"],["aD","fI"],1,0)
q(m,"ghG","hH",10)
q(m,"ghI","hJ",10)
r(m=O.dO.prototype,"gfK",0,0,null,["$1","$0"],["ad","fL"],1,0)
r(m,"giz",0,0,null,["$1","$0"],["dA","iA"],1,0)
q(m,"ghy","hz",30)
q(m,"ghA","hB",30)
r(X.dX.prototype,"gd2",0,0,null,["$1","$0"],["aO","fO"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.l1,J.a,J.au,P.eE,P.i,H.cA,P.b3,H.bZ,H.cV,H.fF,H.i3,H.iL,P.bC,H.cp,H.eW,P.af,H.hl,H.hn,H.hg,P.f1,P.bf,P.aJ,P.eo,P.it,P.cK,P.iu,P.ba,P.am,P.kf,P.jT,P.c9,P.eD,P.y,P.k6,P.ht,P.bW,P.ha,P.kd,P.kb,P.S,P.az,P.a5,P.b2,P.hV,P.e4,P.ew,P.h5,P.bD,P.b,P.E,P.L,P.aw,P.e,P.al,P.ca,P.j0,P.jW,W.fI,W.bP,W.D,W.dV,W.eR,W.k1,W.dz,W.aB,W.jS,W.f8,P.jY,P.jN,P.R,O.a6,O.cB,E.fz,E.an,E.i4,E.ed,Z.en,Z.jm,Z.dn,Z.bE,Z.bd,D.fC,D.bY,D.B,X.dp,X.dH,X.hi,X.hq,X.aR,X.hJ,X.iH,X.ek,D.du,D.a8,D.dY,D.bL,D.ea,D.eb,D.ec,V.a1,V.aM,V.fW,V.dQ,V.ao,V.aa,V.a2,V.b8,V.e1,V.a4,V.J,U.el,M.dy,A.dk,A.fs,A.hA,A.cO,A.cS,A.cQ,A.cT,A.cR,A.cU,A.bX,A.eg,A.iV,F.a9,F.h_,F.bm,F.hk,F.bI,F.e3,F.id,F.ie,F.ig,F.ah,F.ja,F.jb,F.je,F.jg,F.jh,F.ji,O.bM,O.dP,T.iC,V.bh,V.aA,V.dN,V.i2,V.ic,V.cJ,V.ee,V.cM,V.iF,X.dq,X.e8,X.dX,V.bA,V.i0,V.ih])
s(J.a,[J.he,J.dF,J.dG,J.aO,J.bF,J.bk,H.cC,H.bH,W.j,W.fp,W.bU,W.b0,W.b1,W.V,W.eq,W.fN,W.fO,W.dv,W.es,W.dx,W.eu,W.fQ,W.p,W.ex,W.aN,W.dC,W.ez,W.cy,W.dL,W.hD,W.eF,W.eG,W.aQ,W.eH,W.eK,W.aS,W.eO,W.e_,W.eQ,W.aU,W.eS,W.aV,W.eX,W.aG,W.f_,W.iE,W.aX,W.f2,W.iJ,W.j5,W.f9,W.fb,W.fd,W.ff,W.fh,P.b5,P.eB,P.b7,P.eM,P.i_,P.eY,P.bb,P.f4,P.ft,P.ep,P.dl,P.dA,P.dZ,P.c7,P.e2,P.eh,P.eU])
s(J.dG,[J.hW,J.bO,J.bl])
t(J.l0,J.aO)
s(J.bF,[J.dE,J.hf])
t(P.hp,P.eE)
s(P.hp,[H.ei,W.jt,W.ar,P.h1])
t(H.v,H.ei)
s(P.i,[H.fT,H.hu,H.cX])
s(H.fT,[H.c2,H.hm])
s(P.b3,[H.hv,H.jn])
t(H.hw,H.c2)
t(H.fG,H.fF)
s(P.bC,[H.hS,H.hh,H.iZ,H.iN,H.fB,H.ia,P.dW,P.aL,P.j_,P.iX,P.c8,P.fE,P.fL])
s(H.cp,[H.kQ,H.iz,H.kx,H.ky,H.kz,P.jp,P.jo,P.jq,P.jr,P.k5,P.k4,P.jA,P.jE,P.jB,P.jC,P.jD,P.jH,P.jI,P.jG,P.jF,P.iv,P.iw,P.kn,P.jQ,P.jP,P.jR,P.ho,P.hs,P.kc,P.fR,P.fS,P.j4,P.j1,P.j2,P.j3,P.k7,P.k8,P.ka,P.k9,P.kj,P.ki,P.kk,P.kl,W.fU,W.hF,W.hH,W.i9,W.is,W.jz,W.hQ,W.hP,W.jU,W.jV,W.k3,W.ke,P.k_,P.kp,P.h2,P.h3,P.fv,E.i5,E.i6,E.i7,E.iD,D.fY,D.fZ,F.kg,F.kq,F.ks,F.kt,F.ku,F.kN,F.kO,F.kP,F.kB,F.kr,F.jk,F.jj,F.jc,F.jd,V.kM,V.i1,V.ij,V.ii,V.ik,N.kD,N.kE,N.kF,N.kG,N.kH,N.kI,N.kJ])
s(H.iz,[H.iq,H.cn])
t(P.hr,P.af)
s(P.hr,[H.aP,W.js])
t(H.dS,H.bH)
s(H.dS,[H.d0,H.d2])
t(H.d1,H.d0)
t(H.cD,H.d1)
t(H.d3,H.d2)
t(H.dT,H.d3)
s(H.dT,[H.hK,H.hL,H.hM,H.hN,H.hO,H.dU,H.cE])
t(P.jO,P.kf)
t(P.jM,P.jT)
t(P.f6,P.ht)
t(P.ej,P.f6)
s(P.bW,[P.fx,P.fV])
t(P.bB,P.iu)
s(P.bB,[P.fy,P.h9,P.j8,P.j7])
t(P.j6,P.fV)
s(P.a5,[P.r,P.o])
s(P.aL,[P.c6,P.hb])
t(P.jv,P.ca)
s(W.j,[W.F,W.h0,W.aT,W.d4,W.aW,W.aH,W.d6,W.jl,W.cY,P.fw,P.bT])
s(W.F,[W.T,W.bz,W.cs,W.cZ])
s(W.T,[W.z,P.q])
s(W.z,[W.dj,W.fq,W.cm,W.by,W.bV,W.aE,W.h4,W.dB,W.cz,W.dI,W.ib,W.b9,W.e6,W.e7,W.iy,W.cL])
s(W.b0,[W.cq,W.fJ,W.fK])
t(W.fH,W.b1)
t(W.cr,W.eq)
t(W.et,W.es)
t(W.dw,W.et)
t(W.ev,W.eu)
t(W.fP,W.ev)
t(W.aF,W.bU)
t(W.ey,W.ex)
t(W.cv,W.ey)
t(W.eA,W.ez)
t(W.c_,W.eA)
t(W.dD,W.cs)
t(W.bN,W.p)
s(W.bN,[W.b4,W.ag,W.aY])
t(W.hE,W.eF)
t(W.hG,W.eG)
t(W.eI,W.eH)
t(W.hI,W.eI)
t(W.eL,W.eK)
t(W.cF,W.eL)
t(W.eP,W.eO)
t(W.hY,W.eP)
t(W.i8,W.eQ)
t(W.d5,W.d4)
t(W.im,W.d5)
t(W.eT,W.eS)
t(W.io,W.eT)
t(W.ir,W.eX)
t(W.f0,W.f_)
t(W.iA,W.f0)
t(W.d7,W.d6)
t(W.iB,W.d7)
t(W.f3,W.f2)
t(W.iI,W.f3)
t(W.be,W.ag)
t(W.fa,W.f9)
t(W.ju,W.fa)
t(W.er,W.dx)
t(W.fc,W.fb)
t(W.jJ,W.fc)
t(W.fe,W.fd)
t(W.eJ,W.fe)
t(W.fg,W.ff)
t(W.jX,W.fg)
t(W.fi,W.fh)
t(W.k0,W.fi)
t(W.jw,W.js)
t(W.jx,P.it)
t(W.lb,W.jx)
t(W.jy,P.cK)
t(W.k2,W.eR)
t(P.jZ,P.jY)
t(P.ab,P.jN)
t(P.eC,P.eB)
t(P.hj,P.eC)
t(P.eN,P.eM)
t(P.hT,P.eN)
t(P.cH,P.q)
t(P.eZ,P.eY)
t(P.ix,P.eZ)
t(P.f5,P.f4)
t(P.iK,P.f5)
t(P.fu,P.ep)
t(P.hU,P.bT)
t(P.eV,P.eU)
t(P.ip,P.eV)
s(E.fz,[Z.dm,A.cI,T.e9])
s(D.B,[D.c0,D.c1,D.Q,X.hZ])
s(X.hZ,[X.dM,X.bG,X.ef])
s(O.a6,[D.dJ,U.cx])
s(D.fC,[U.fD,U.ak])
t(U.dr,U.ak)
t(A.hx,A.cI)
s(A.eg,[A.O,A.iR,A.iS,A.iU,A.iP,A.a3,A.iQ,A.M,A.iT,A.iW,A.cP,A.aC,A.ap,A.aq])
t(F.il,F.h_)
t(F.iO,F.hk)
t(F.jf,F.jg)
t(F.hR,F.jh)
t(O.dO,O.bM)
s(O.dP,[O.hy,O.hz,O.b6])
s(O.b6,[O.hB,O.hC])
s(V.dN,[V.av,V.cN])
t(X.h6,X.e8)
s(V.bA,[V.fM,V.h7,V.h8,V.hX])
u(H.ei,H.cV)
u(H.d0,P.y)
u(H.d1,H.bZ)
u(H.d2,P.y)
u(H.d3,H.bZ)
u(P.eE,P.y)
u(P.f6,P.k6)
u(W.eq,W.fI)
u(W.es,P.y)
u(W.et,W.D)
u(W.eu,P.y)
u(W.ev,W.D)
u(W.ex,P.y)
u(W.ey,W.D)
u(W.ez,P.y)
u(W.eA,W.D)
u(W.eF,P.af)
u(W.eG,P.af)
u(W.eH,P.y)
u(W.eI,W.D)
u(W.eK,P.y)
u(W.eL,W.D)
u(W.eO,P.y)
u(W.eP,W.D)
u(W.eQ,P.af)
u(W.d4,P.y)
u(W.d5,W.D)
u(W.eS,P.y)
u(W.eT,W.D)
u(W.eX,P.af)
u(W.f_,P.y)
u(W.f0,W.D)
u(W.d6,P.y)
u(W.d7,W.D)
u(W.f2,P.y)
u(W.f3,W.D)
u(W.f9,P.y)
u(W.fa,W.D)
u(W.fb,P.y)
u(W.fc,W.D)
u(W.fd,P.y)
u(W.fe,W.D)
u(W.ff,P.y)
u(W.fg,W.D)
u(W.fh,P.y)
u(W.fi,W.D)
u(P.eB,P.y)
u(P.eC,W.D)
u(P.eM,P.y)
u(P.eN,W.D)
u(P.eY,P.y)
u(P.eZ,W.D)
u(P.f4,P.y)
u(P.f5,W.D)
u(P.ep,P.af)
u(P.eU,P.y)
u(P.eV,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.by.prototype
C.x=W.bV.prototype
C.k=W.aE.prototype
C.T=W.dv.prototype
C.V=W.dB.prototype
C.W=W.dC.prototype
C.z=W.dD.prototype
C.Y=J.a.prototype
C.a=J.aO.prototype
C.f=J.dE.prototype
C.q=J.dF.prototype
C.e=J.bF.prototype
C.b=J.bk.prototype
C.a4=J.bl.prototype
C.F=W.dI.prototype
C.aa=W.cF.prototype
C.L=J.hW.prototype
C.M=W.e_.prototype
C.c=P.c7.prototype
C.w=W.b9.prototype
C.o=W.e6.prototype
C.n=W.e7.prototype
C.C=J.bO.prototype
C.N=W.be.prototype
C.O=W.cY.prototype
C.Q=new P.fy(!1)
C.P=new P.fx(C.Q)
C.R=new P.hV()
C.S=new P.j8()
C.l=new P.jO()
C.d=new A.bX(0,"ColorSourceType.None")
C.j=new A.bX(1,"ColorSourceType.Solid")
C.h=new A.bX(2,"ColorSourceType.Texture2D")
C.i=new A.bX(3,"ColorSourceType.TextureCube")
C.y=new P.b2(0)
C.U=new P.b2(5e6)
C.X=new P.ha("element",!0,!1,!1,!1)
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
C.a9=new H.fG(0,{},C.H,[P.e,P.e])
C.m=new P.j6(!1)})();(function staticFields(){$.b_=0
$.co=null
$.lE=null
$.lf=!1
$.mJ=null
$.mC=null
$.mP=null
$.kv=null
$.kA=null
$.lp=null
$.cc=null
$.db=null
$.dc=null
$.lg=!1
$.a_=C.l
$.bj=null
$.kX=null
$.lL=null
$.lK=null
$.lT=null
$.lX=null
$.bK=null
$.m1=null
$.me=null
$.mi=null
$.mg=null
$.mh=null
$.j9=null
$.mf=null
$.lW=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pm","mT",function(){return H.mI("_$dart_dartClosure")})
u($,"pn","lt",function(){return H.mI("_$dart_js")})
u($,"pt","mU",function(){return H.bc(H.iM({
toString:function(){return"$receiver$"}}))})
u($,"pu","mV",function(){return H.bc(H.iM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pv","mW",function(){return H.bc(H.iM(null))})
u($,"pw","mX",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pz","n_",function(){return H.bc(H.iM(void 0))})
u($,"pA","n0",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"py","mZ",function(){return H.bc(H.m8(null))})
u($,"px","mY",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pC","n2",function(){return H.bc(H.m8(void 0))})
u($,"pB","n1",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pS","lu",function(){return P.oe()})
u($,"pY","dh",function(){return[]})
u($,"pE","n3",function(){return P.ob()})
u($,"pT","n7",function(){return H.nM(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pW","n9",function(){return P.o0("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"pX","na",function(){return P.oD()})
u($,"pU","n8",function(){return P.lN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pV","lv",function(){return P.l3(P.e,P.bD)})
u($,"pL","n6",function(){return Z.aI(0)})
u($,"pF","n4",function(){return Z.aI(511)})
u($,"pN","bu",function(){return Z.aI(1)})
u($,"pM","bt",function(){return Z.aI(2)})
u($,"pH","bs",function(){return Z.aI(4)})
u($,"pO","bv",function(){return Z.aI(8)})
u($,"pP","bw",function(){return Z.aI(16)})
u($,"pI","df",function(){return Z.aI(32)})
u($,"pJ","dg",function(){return Z.aI(64)})
u($,"pK","n5",function(){return Z.aI(96)})
u($,"pQ","cl",function(){return Z.aI(128)})
u($,"pG","br",function(){return Z.aI(256)})
u($,"pl","mS",function(){return new V.fW(1e-9)})
u($,"pk","N",function(){return $.mS()})})()
var v={mangledGlobalNames:{o:"int",r:"double",a5:"num",e:"String",S:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:V.a2,args:[P.r]},{func:1,ret:P.S,args:[W.T,P.e,P.e,W.bP]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:P.S,args:[W.F]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.S,args:[W.aB]},{func:1,ret:P.S,args:[P.e]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ao]]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.o,[P.i,U.ak]]},{func:1,ret:W.T,args:[W.F]},{func:1,args:[W.p]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.R,args:[P.o]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.L,args:[P.e,,]},{func:1,ret:P.S,args:[[P.i,D.a8]]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.aw]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[P.ba]},{func:1,args:[P.e]},{func:1,ret:P.S,args:[V.bA]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cC,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cD,Float64Array:H.cD,Int16Array:H.hK,Int32Array:H.hL,Int8Array:H.hM,Uint16Array:H.hN,Uint32Array:H.hO,Uint8ClampedArray:H.dU,CanvasPixelArray:H.dU,Uint8Array:H.cE,HTMLAudioElement:W.z,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLImageElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMediaElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLVideoElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fp,HTMLAnchorElement:W.dj,HTMLAreaElement:W.fq,HTMLBaseElement:W.cm,Blob:W.bU,HTMLBodyElement:W.by,HTMLCanvasElement:W.bV,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fH,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fJ,CSSUnparsedValue:W.fK,DataTransferItemList:W.fN,HTMLDivElement:W.aE,XMLDocument:W.cs,Document:W.cs,DOMException:W.fO,DOMImplementation:W.dv,ClientRectList:W.dw,DOMRectList:W.dw,DOMRectReadOnly:W.dx,DOMStringList:W.fP,DOMTokenList:W.fQ,Element:W.T,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cv,FileWriter:W.h0,HTMLFormElement:W.h4,Gamepad:W.aN,HTMLHeadElement:W.dB,History:W.dC,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,HTMLDocument:W.dD,ImageData:W.cy,HTMLInputElement:W.cz,KeyboardEvent:W.b4,HTMLLabelElement:W.dI,Location:W.dL,MediaList:W.hD,MIDIInputMap:W.hE,MIDIOutputMap:W.hG,MimeType:W.aQ,MimeTypeArray:W.hI,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cF,RadioNodeList:W.cF,Plugin:W.aS,PluginArray:W.hY,Range:W.e_,RTCStatsReport:W.i8,HTMLSelectElement:W.ib,SourceBuffer:W.aT,SourceBufferList:W.im,SpeechGrammar:W.aU,SpeechGrammarList:W.io,SpeechRecognitionResult:W.aV,Storage:W.ir,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.e6,HTMLTableRowElement:W.e7,HTMLTableSectionElement:W.iy,HTMLTemplateElement:W.cL,TextTrack:W.aW,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iA,TextTrackList:W.iB,TimeRanges:W.iE,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iI,TrackDefaultList:W.iJ,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.j5,VideoTrackList:W.jl,WheelEvent:W.be,Window:W.cY,DOMWindow:W.cY,Attr:W.cZ,CSSRuleList:W.ju,ClientRect:W.er,DOMRect:W.er,GamepadList:W.jJ,NamedNodeMap:W.eJ,MozNamedAttrMap:W.eJ,SpeechRecognitionResultList:W.jX,StyleSheetList:W.k0,SVGLength:P.b5,SVGLengthList:P.hj,SVGNumber:P.b7,SVGNumberList:P.hT,SVGPointList:P.i_,SVGScriptElement:P.cH,SVGStringList:P.ix,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bb,SVGTransformList:P.iK,AudioBuffer:P.ft,AudioParamMap:P.fu,AudioTrackList:P.fw,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hU,WebGLBuffer:P.dl,WebGLFramebuffer:P.dA,WebGLProgram:P.dZ,WebGL2RenderingContext:P.c7,WebGLShader:P.e2,WebGLUniformLocation:P.eh,SQLResultSetRowList:P.ip})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mM,[])
else N.mM([])})})()
//# sourceMappingURL=test.dart.js.map
