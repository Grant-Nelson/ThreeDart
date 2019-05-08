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
a[c]=function(){a[c]=function(){H.nr(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jB(this,a,b,c,true,false,e).prototype
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
iX:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
jh:function(){return new P.cp("No element")},
lL:function(){return new P.cp("Too many elements")},
r:function r(a){this.a=a},
eT:function eT(){},
bJ:function bJ(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fv:function fv(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hU:function hU(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(){},
cE:function cE(){},
e2:function e2(){},
lB:function(){throw H.d(P.a1("Cannot modify unmodifiable Map"))},
c0:function(a){var u,t
u=H.D(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
n9:function(a){return v.types[H.ac(a)]},
ng:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iaI},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ap(a)
if(typeof u!=="string")throw H.d(H.aF(a))
return u},
m8:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fh(u)
t=u[0]
s=u[1]
return new H.fR(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cj:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
m5:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.D(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a8(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.F(r,p)|32)>s)return}return parseInt(a,b)},
bN:function(a){return H.lX(a)+H.jy(H.bt(a),0,null)},
lX:function(a){var u,t,s,r,q,p,o,n,m
u=J.N(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$icD){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.c.F(r,0)===36?C.c.aq(r,1):r)},
lY:function(){if(!!self.location)return self.location.href
return},
ka:function(a){var u,t,s,r,q
H.ex(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
m6:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.aF(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aV(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.aF(r))}return H.ka(u)},
kb:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aF(s))
if(s<0)throw H.d(H.aF(s))
if(s>65535)return H.m6(a)}return H.ka(a)},
m7:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bO:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aV(u,10))>>>0,56320|u&1023)}}throw H.d(P.a8(a,0,1114111,null,null))},
bM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m4:function(a){var u=H.bM(a).getFullYear()+0
return u},
m2:function(a){var u=H.bM(a).getMonth()+1
return u},
lZ:function(a){var u=H.bM(a).getDate()+0
return u},
m_:function(a){var u=H.bM(a).getHours()+0
return u},
m1:function(a){var u=H.bM(a).getMinutes()+0
return u},
m3:function(a){var u=H.bM(a).getSeconds()+0
return u},
m0:function(a){var u=H.bM(a).getMilliseconds()+0
return u},
C:function(a){throw H.d(H.aF(a))},
f:function(a,b){if(a==null)J.aG(a)
throw H.d(H.bs(a,b))},
bs:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
u=H.ac(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.bF(b,a,"index",null,u)
return P.fP(b,"index",null)},
n5:function(a,b,c){if(a>c)return new P.bP(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aF:function(a){return new P.aH(!0,a,null,null)},
n1:function(a){if(typeof a!=="number")throw H.d(H.aF(a))
return a},
d:function(a){var u
if(a==null)a=new P.dF()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l0})
u.name=""}else u.toString=H.l0
return u},
l0:function(){return J.ap(this.dartException)},
p:function(a){throw H.d(a)},
A:function(a){throw H.d(P.aR(a))},
aZ:function(a){var u,t,s,r,q,p
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
kk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k5:function(a,b){return new H.fK(a,b==null?null:b.method)},
jk:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fk(a,t,u?null:b.receiver)},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aV(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jk(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.k5(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.l3()
p=$.l4()
o=$.l5()
n=$.l6()
m=$.l9()
l=$.la()
k=$.l8()
$.l7()
j=$.lc()
i=$.lb()
h=q.aj(t)
if(h!=null)return u.$1(H.jk(H.D(t),h))
else{h=p.aj(t)
if(h!=null){h.method="call"
return u.$1(H.jk(H.D(t),h))}else{h=o.aj(t)
if(h==null){h=n.aj(t)
if(h==null){h=m.aj(t)
if(h==null){h=l.aj(t)
if(h==null){h=k.aj(t)
if(h==null){h=n.aj(t)
if(h==null){h=j.aj(t)
if(h==null){h=i.aj(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.k5(H.D(t),h))}}return u.$1(new H.hz(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dO()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aH(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dO()
return a},
bZ:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
n8:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
nf:function(a,b,c,d,e,f){H.c(a,"$ibj")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.q("Unsupported number of arguments for wrapped closure"))},
bX:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nf)
a.$identity=u
return u},
lA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.N(d).$ia){u.$reflectionInfo=d
s=H.m8(u).r}else s=d
r=e?Object.create(new H.h5().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aQ
if(typeof p!=="number")return p.E()
$.aQ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jT(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.n9,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jR:H.ja
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jT(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lx:function(a,b,c,d){var u=H.ja
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lx(t,!r,u,b)
if(t===0){r=$.aQ
if(typeof r!=="number")return r.E()
$.aQ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.eG("self")
$.c4=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aQ
if(typeof r!=="number")return r.E()
$.aQ=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.eG("self")
$.c4=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
ly:function(a,b,c,d){var u,t
u=H.ja
t=H.jR
switch(b?-1:a){case 0:throw H.d(H.mc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lz:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.eG("self")
$.c4=u}t=$.jQ
if(t==null){t=H.eG("receiver")
$.jQ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ly(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aQ
if(typeof t!=="number")return t.E()
$.aQ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aQ
if(typeof t!=="number")return t.E()
$.aQ=t+1
return new Function(u+t+"}")()},
jB:function(a,b,c,d,e,f,g){return H.lA(a,b,H.ac(c),d,!!e,!!f,g)},
ja:function(a){return a.a},
jR:function(a){return a.c},
eG:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.fh(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aL(a,"String"))},
n6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aL(a,"double"))},
nk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aL(a,"num"))},
jz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aL(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aL(a,"int"))},
kZ:function(a,b){throw H.d(H.aL(a,H.c0(H.D(b).substring(2))))},
nm:function(a,b){throw H.d(H.lw(a,H.c0(H.D(b).substring(2))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.kZ(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.nm(a,b)},
ex:function(a){if(a==null)return a
if(!!J.N(a).$ia)return a
throw H.d(H.aL(a,"List<dynamic>"))},
kW:function(a,b){var u
if(a==null)return a
u=J.N(a)
if(!!u.$ia)return a
if(u[b])return a
H.kZ(a,b)},
kS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
ew:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kS(J.N(a))
if(u==null)return!1
return H.kI(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jv)return a
$.jv=!0
try{if(H.ew(a,b))return a
u=H.j4(b)
t=H.aL(a,u)
throw H.d(t)}finally{$.jv=!1}},
jC:function(a,b){if(a!=null&&!H.jA(a,b))H.p(H.aL(a,H.j4(b)))
return a},
aL:function(a,b){return new H.hp("TypeError: "+P.eX(a)+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")},
lw:function(a,b){return new H.eH("CastError: "+P.eX(a)+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")},
kN:function(a){var u,t
u=J.N(a)
if(!!u.$ic5){t=H.kS(u)
if(t!=null)return H.j4(t)
return"Closure"}return H.bN(a)},
nr:function(a){throw H.d(new P.eO(H.D(a)))},
mc:function(a){return new H.fW(a)},
kT:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bt:function(a){if(a==null)return
return a.$ti},
oa:function(a,b,c){return H.c_(a["$a"+H.i(c)],H.bt(b))},
cV:function(a,b,c,d){var u
H.D(c)
H.ac(d)
u=H.c_(a["$a"+H.i(c)],H.bt(b))
return u==null?null:u[d]},
ab:function(a,b,c){var u
H.D(b)
H.ac(c)
u=H.c_(a["$a"+H.i(b)],H.bt(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.ac(b)
u=H.bt(a)
return u==null?null:u[b]},
j4:function(a){return H.br(a,null)},
br:function(a,b){var u,t
H.j(b,"$ia",[P.e],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jy(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.i(b[t])}if('func' in a)return H.mR(a,b)
if('futureOr' in a)return"FutureOr<"+H.br("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mR:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.j(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.c.E(o,b[m])
l=t[p]
if(l!=null&&l!==P.O)o+=" extends "+H.br(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.br(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.br(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.br(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.n7(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.D(u[g])
i=i+h+H.br(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jy:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ia",[P.e],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.br(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cS:function(a,b,c,d){var u,t
H.D(b)
H.ex(c)
H.D(d)
if(a==null)return!1
u=H.bt(a)
t=J.N(a)
if(t[b]==null)return!1
return H.kQ(H.c_(t[d],u),null,c,null)},
j:function(a,b,c,d){H.D(b)
H.ex(c)
H.D(d)
if(a==null)return a
if(H.cS(a,b,c,d))return a
throw H.d(H.aL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jy(c,0,null),v.mangledGlobalNames)))},
kQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
o8:function(a,b,c){return a.apply(b,H.c_(J.N(b)["$a"+H.i(c)],H.bt(b)))},
kV:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="B"||a===-1||a===-2||H.kV(u)}return!1},
jA:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="B"||b===-1||b===-2||H.kV(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ew(a,b)}u=J.N(a).constructor
t=H.bt(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.jA(a,b))throw H.d(H.aL(a,H.j4(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="B")return!0
if('func' in c)return H.kI(a,b,c,d)
if('func' in a)return c.name==="bj"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aE("type" in a?a.type:null,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"c9" in t.prototype))return!1
r=t.prototype["$a"+"c9"]
q=H.c_(r,u?a.slice(1):null)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kQ(H.c_(m,u),b,p,d)},
kI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nj(h,b,g,d)},
nj:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aE(c[r],d,a[r],b))return!1}return!0},
o9:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var u,t,s,r,q,p
u=H.D($.kU.$1(a))
t=$.iV[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j0[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.D($.kP.$2(a,u))
if(u!=null){t=$.iV[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j0[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.j3(s)
$.iV[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j0[u]=s
return s}if(q==="-"){p=H.j3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kY(a,s)
if(q==="*")throw H.d(P.hy(u))
if(v.leafTags[u]===true){p=H.j3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kY(a,s)},
kY:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j3:function(a){return J.jF(a,!1,null,!!a.$iaI)},
ni:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j3(u)
else return J.jF(u,c,null,null)},
nd:function(){if(!0===$.jE)return
$.jE=!0
H.ne()},
ne:function(){var u,t,s,r,q,p,o,n
$.iV=Object.create(null)
$.j0=Object.create(null)
H.nc()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l_.$1(q)
if(p!=null){o=H.ni(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nc:function(){var u,t,s,r,q,p,o
u=C.a2()
u=H.bW(C.a_,H.bW(C.a4,H.bW(C.E,H.bW(C.E,H.bW(C.a3,H.bW(C.a0,H.bW(C.a1(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kU=new H.iY(q)
$.kP=new H.iZ(p)
$.l_=new H.j_(o)},
bW:function(a,b){return a(b)||b},
lN:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a_("Illegal RegExp pattern ("+String(r)+")",a,null))},
np:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jI:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eL:function eL(){},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fR:function fR(a,b,c,d,e,f,g){var _=this
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
fK:function fK(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a){this.a=a},
j6:function j6(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
c5:function c5(){},
hb:function hb(){},
h5:function h5(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a){this.a=a},
eH:function eH(a){this.a=a},
fW:function fW(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fn:function fn(a,b){this.a=a
this.$ti=b},
fo:function fo(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bU:function(a){return a},
lV:function(a){return new Int8Array(a)},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bs(b,a))},
mP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.n5(a,b,c))
return b},
bL:function bL(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
dD:function dD(){},
cg:function cg(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
n7:function(a){return J.jZ(a?Object.keys(a):[],null)},
nl:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iW:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jE==null){H.nd()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.hy("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jJ()]
if(q!=null)return q
q=H.nh(a)
if(q!=null)return q
if(typeof a=="function")return C.a5
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.jJ(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
lM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.j9(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a8(a,0,4294967295,"length",null))
return J.jZ(new Array(a),b)},
jZ:function(a,b){return J.fh(H.b(a,[b]))},
fh:function(a){H.ex(a)
a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.bI.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fi.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.iW(a)},
cT:function(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.iW(a)},
jD:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.iW(a)},
cU:function(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.cD.prototype
return a},
a6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.iW(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).u(a,b)},
ll:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ng(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cT(a).j(a,b)},
lm:function(a,b,c,d){return J.a6(a).h5(a,b,c,d)},
ln:function(a,b){return J.cU(a).F(a,b)},
ey:function(a,b){return J.a6(a).iI(a,b)},
j7:function(a,b,c){return J.a6(a).iM(a,b,c)},
jM:function(a,b){return J.a6(a).B(a,b)},
lo:function(a,b){return J.cU(a).a0(a,b)},
ez:function(a,b){return J.jD(a).aa(a,b)},
lp:function(a,b,c,d){return J.a6(a).kd(a,b,c,d)},
lq:function(a){return J.a6(a).gjN(a)},
eA:function(a){return J.a6(a).gcz(a)},
cZ:function(a){return J.N(a).gG(a)},
bv:function(a){return J.jD(a).gW(a)},
aG:function(a){return J.cT(a).gm(a)},
lr:function(a){return J.a6(a).gkY(a)},
j8:function(a,b){return J.a6(a).b2(a,b)},
jN:function(a){return J.jD(a).kQ(a)},
ls:function(a,b){return J.a6(a).kS(a,b)},
lt:function(a,b,c){return J.a6(a).ft(a,b,c)},
lu:function(a,b,c){return J.cU(a).q(a,b,c)},
lv:function(a){return J.cU(a).l5(a)},
ap:function(a){return J.N(a).i(a)},
a9:function a9(){},
fi:function fi(){},
dm:function dm(){},
dp:function dp(){},
fM:function fM(){},
cD:function cD(){},
bl:function bl(){},
aT:function aT(a){this.$ti=a},
ji:function ji(a){this.$ti=a},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dn:function dn(){},
dl:function dl(){},
dk:function dk(){},
bI:function bI(){}},P={
mr:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mZ()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bX(new P.hW(u),1)).observe(t,{childList:true})
return new P.hV(u,t,s)}else if(self.setImmediate!=null)return P.n_()
return P.n0()},
ms:function(a){self.scheduleImmediate(H.bX(new P.hX(H.k(a,{func:1,ret:-1})),0))},
mt:function(a){self.setImmediate(H.bX(new P.hY(H.k(a,{func:1,ret:-1})),0))},
mu:function(a){P.jm(C.y,H.k(a,{func:1,ret:-1}))},
jm:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.mA(u<0?0:u,b)},
kj:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aY]})
u=C.f.a6(a.a,1000)
return P.mB(u<0?0:u,b)},
mA:function(a,b){var u=new P.en(!0)
u.h0(a,b)
return u},
mB:function(a,b){var u=new P.en(!1)
u.h1(a,b)
return u},
mv:function(a,b){var u,t,s
b.a=1
try{a.f6(new P.i6(b),new P.i7(b),null)}catch(s){u=H.ah(s)
t=H.bZ(s)
P.nn(new P.i8(b,u,t))}},
kx:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.c(a.c,"$iaD")
if(u>=4){t=b.cn()
b.a=a.a
b.c=a.c
P.cI(b,t)}else{t=H.c(b.c,"$ib1")
b.a=2
b.c=a
a.dN(t)}},
cI:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.c(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.iR(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cI(u.a,b)}t=u.a
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
if(k){H.c(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.iR(null,null,t,p,o)
return}j=$.V
if(j!=l)$.V=l
else j=null
t=b.c
if(t===8)new P.ic(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ib(s,b,m).$0()}else if((t&2)!==0)new P.ia(u,s,b).$0()
if(j!=null)$.V=j
t=s.b
if(!!J.N(t).$ic9){if(t.a>=4){i=H.c(o.c,"$ib1")
o.c=null
b=o.bq(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kx(t,o)
return}}h=b.b
i=H.c(h.c,"$ib1")
h.c=null
b=h.bq(i)
t=s.a
p=s.b
if(!t){H.w(p,H.t(h,0))
h.a=4
h.c=p}else{H.c(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
mU:function(a,b){if(H.ew(a,{func:1,args:[P.O,P.at]}))return H.k(a,{func:1,ret:null,args:[P.O,P.at]})
if(H.ew(a,{func:1,args:[P.O]}))return H.k(a,{func:1,ret:null,args:[P.O]})
throw H.d(P.j9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mT:function(){var u,t
for(;u=$.bV,u!=null;){$.cR=null
t=u.b
$.bV=t
if(t==null)$.cQ=null
u.a.$0()}},
mY:function(){$.jw=!0
try{P.mT()}finally{$.cR=null
$.jw=!1
if($.bV!=null)$.jK().$1(P.kR())}},
kM:function(a){var u=new P.ea(H.k(a,{func:1,ret:-1}))
if($.bV==null){$.cQ=u
$.bV=u
if(!$.jw)$.jK().$1(P.kR())}else{$.cQ.b=u
$.cQ=u}},
mX:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bV
if(u==null){P.kM(a)
$.cR=$.cQ
return}t=new P.ea(a)
s=$.cR
if(s==null){t.b=u
$.cR=t
$.bV=t}else{t.b=s.b
s.b=t
$.cR=t
if(t.b==null)$.cQ=t}},
nn:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.V
if(C.l===t){P.iT(null,null,C.l,a)
return}t.toString
P.iT(null,null,t,H.k(t.cu(a),u))},
ki:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.jm(a,b)}return P.jm(a,H.k(t.cu(b),u))},
mh:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aY]}
H.k(b,u)
t=$.V
if(t===C.l){t.toString
return P.kj(a,b)}s=t.e3(b,P.aY)
$.V.toString
return P.kj(a,H.k(s,u))},
iR:function(a,b,c,d,e){var u={}
u.a=d
P.mX(new P.iS(u,e))},
kJ:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kK:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.w(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mV:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
iT:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cu(d):c.jO(d,-1)
P.kM(d)},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
en:function en(a){this.a=a
this.b=null
this.c=0},
iA:function iA(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d){var _=this
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
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i5:function i5(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a
this.b=null},
h6:function h6(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
cq:function cq(){},
h7:function h7(){},
aY:function aY(){},
ai:function ai(a,b){this.a=a
this.b=b},
iK:function iK(){},
iS:function iS(a,b){this.a=a
this.b=b},
ij:function ij(){},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b){this.a=a
this.b=b},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function(a,b,c,d,e){return new H.aA([d,e])},
lQ:function(a,b,c){H.ex(a)
return H.j(H.n8(a,new H.aA([b,c])),"$ik_",[b,c],"$ak_")},
k0:function(a,b){return new H.aA([a,b])},
ds:function(a,b,c,d){return new P.ih([d])},
js:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mz:function(a,b,c){var u=new P.eg(a,b,[c])
u.c=a.e
return u},
lK:function(a,b,c){var u,t
if(P.jx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.e])
t=$.cY()
C.a.h(t,a)
try{P.mS(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.kg(b,H.kW(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
jg:function(a,b,c){var u,t,s
if(P.jx(a))return b+"..."+c
u=new P.ae(b)
t=$.cY()
C.a.h(t,a)
try{s=u
s.a=P.kg(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jx:function(a){var u,t
for(u=0;t=$.cY(),u<t.length;++u)if(a===t[u])return!0
return!1},
mS:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ia",[P.e],"$aa")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.i(u.gH())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gH();++s
if(!u.w()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH();++s
for(;u.w();o=n,n=m){m=u.gH();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lR:function(a,b,c){var u=P.lP(null,null,null,b,c)
a.K(0,new P.fp(u,b,c))
return u},
k1:function(a,b){var u,t,s
u=P.ds(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.w(a[s],b))
return u},
jl:function(a){var u,t
u={}
if(P.jx(a))return"{...}"
t=new P.ae("")
try{C.a.h($.cY(),a)
t.a+="{"
u.a=!0
a.K(0,new P.ft(u,t))
t.a+="}"}finally{u=$.cY()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ih:function ih(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bS:function bS(a){this.a=a
this.c=this.b=null},
eg:function eg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(){},
S:function S(){},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
bK:function bK(){},
iB:function iB(){},
fu:function fu(){},
e3:function e3(a,b){this.a=a
this.$ti=b},
ip:function ip(){},
eh:function eh(){},
er:function er(){},
ml:function(a,b,c,d){H.j(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mm(!1,b,c,d)
return},
mm:function(a,b,c,d){var u,t,s
u=$.ld()
if(u==null)return
t=0===c
if(t&&!0)return P.jp(u,b)
s=b.length
d=P.bo(c,d,s,null,null,null)
if(t&&d===s)return P.jp(u,b)
return P.jp(u,b.subarray(c,d))},
jp:function(a,b){if(P.mo(b))return
return P.mp(a,b)},
mp:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ah(t)}return},
mo:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mn:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ah(t)}return},
mW:function(a,b,c){var u,t,s
H.j(a,"$ia",[P.l],"$aa")
for(u=J.cT(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bU()
if((s&127)!==s)return t-b}return c-b},
jP:function(a,b,c,d,e,f){if(C.f.bj(f,4)!==0)throw H.d(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a_("Invalid base64 padding, more than two '=' characters",a,b))},
eD:function eD(a){this.a=a},
eE:function eE(a){this.a=a},
by:function by(){},
bf:function bf(){},
eV:function eV(){},
f8:function f8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f7:function f7(a){this.a=a},
hG:function hG(a){this.a=a},
hI:function hI(){},
iI:function iI(a){this.b=this.a=0
this.c=a},
hH:function hH(a){this.a=a},
iG:function iG(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.e]})
u=H.m5(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a_(a,null,null))},
lG:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bN(a)+"'"},
lS:function(a,b,c,d){var u,t
H.w(b,d)
u=J.lM(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.p(u,t,b)
return H.j(u,"$ia",[d],"$aa")},
k2:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gW(a);s.w();)C.a.h(t,H.w(s.gH(),c))
if(b)return t
return H.j(J.fh(t),"$ia",u,"$aa")},
dP:function(a,b,c){var u,t
u=P.l
H.j(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$iaT",[u],"$aaT")
t=a.length
c=P.bo(b,c,t,null,null,null)
return H.kb(b>0||c<t?C.a.fA(a,b,c):a)}if(!!J.N(a).$icg)return H.m7(a,b,P.bo(b,c,a.length,null,null,null))
return P.me(a,b,c)},
me:function(a,b,c){var u,t,s,r
H.j(a,"$in",[P.l],"$an")
if(b<0)throw H.d(P.a8(b,0,J.aG(a),null,null))
u=c==null
if(!u&&c<b)throw H.d(P.a8(c,b,J.aG(a),null,null))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.w())throw H.d(P.a8(b,0,s,null,null))
r=[]
if(u)for(;t.w();)r.push(t.gH())
else for(s=b;s<c;++s){if(!t.w())throw H.d(P.a8(c,b,s,null,null))
r.push(t.gH())}return H.kb(r)},
ma:function(a,b,c){return new H.fj(a,H.lN(a,!1,!0,!1))},
kg:function(a,b,c){var u=J.bv(b)
if(!u.w())return a
if(c.length===0){do a+=H.i(u.gH())
while(u.w())}else{a+=H.i(u.gH())
for(;u.w();)a=a+c+H.i(u.gH())}return a},
km:function(){var u=H.lY()
if(u!=null)return P.mk(u,0,null)
throw H.d(P.a1("'Uri.base' is not supported"))},
es:function(a,b,c,d){var u,t,s,r,q,p
H.j(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.lj().b
if(typeof b!=="string")H.p(H.aF(b))
u=u.test(b)}else u=!1
if(u)return b
H.w(b,H.ab(c,"by",0))
t=c.gkc().cA(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bO(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lC:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
jV:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ap(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lG(a)},
d0:function(a){return new P.aH(!1,null,null,a)},
j9:function(a,b,c){return new P.aH(!0,a,b,c)},
fP:function(a,b,c){return new P.bP(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c,d,e,f){if(typeof a!=="number")return H.C(a)
if(0>a||a>c)throw H.d(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a8(b,a,c,"end",f))
return b}return c},
bF:function(a,b,c,d,e){var u=H.ac(e==null?J.aG(b):e)
return new P.f9(b,u,!0,a,c,"Index out of range")},
a1:function(a){return new P.hA(a)},
hy:function(a){return new P.hx(a)},
kf:function(a){return new P.cp(a)},
aR:function(a){return new P.eK(a)},
q:function(a){return new P.ed(a)},
a_:function(a,b,c){return new P.f3(a,b,c)},
lT:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.p(u,t,b.$1(t))
return u},
jH:function(a){H.nl(a)},
mk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(t===0)return P.kl(b>0||c<c?C.c.q(a,b,c):a,5,null).gfc()
else if(t===32)return P.kl(C.c.q(a,u,c),0,null).gfc()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.l])
C.a.p(r,0,0)
s=b-1
C.a.p(r,1,s)
C.a.p(r,2,s)
C.a.p(r,7,s)
C.a.p(r,3,b)
C.a.p(r,4,b)
C.a.p(r,5,c)
C.a.p(r,6,c)
if(P.kL(a,b,c,0,r)>=14)C.a.p(r,7,c)
q=r[1]
if(typeof q!=="number")return q.la()
if(q>=b)if(P.kL(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.E()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.C(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.af(a,"..",n)))i=m>n+2&&C.c.af(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.af(a,"file",b)){if(p<=b){if(!C.c.af(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.q(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b0(a,n,m,"/");++m;++l;++c}else{a=C.c.q(a,b,n)+"/"+C.c.q(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.af(a,"http",b)){if(s&&o+3===n&&C.c.af(a,"80",o+1))if(b===0&&!0){a=C.c.b0(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.af(a,"https",b)){if(s&&o+4===n&&C.c.af(a,"443",o+1))if(b===0&&!0){a=C.c.b0(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.q(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.is(a,q,p,o,n,m,l,j)}return P.mC(a,b,c,q,p,o,n,m,l,j)},
ko:function(a,b){var u=P.e
return C.a.ki(H.b(a.split("&"),[u]),P.k0(u,u),new P.hF(b),[P.E,P.e,P.e])},
mj:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hC(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cW(C.c.q(a,q,r),null,null)
if(typeof n!=="number")return n.fp()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cW(C.c.q(a,q,c),null,null)
if(typeof n!=="number")return n.fp()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
kn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hD(a)
t=new P.hE(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a0(a,r)
if(n===58){if(r===b){++r
if(C.c.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gay(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mj(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aV(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
mC:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mJ(a,b,d)
else{if(d===b)P.cN(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mK(a,u,e-1):""
s=P.mG(a,e,f,!1)
if(typeof f!=="number")return f.E()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.mI(P.cW(C.c.q(a,r,g),new P.iC(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mH(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.jt(a,h+1,i,null):null
return new P.bT(j,t,s,q,p,o,i<c?P.mF(a,i+1,c):null)},
kB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cN:function(a,b,c){throw H.d(P.a_(c,a,b))},
mI:function(a,b){if(a!=null&&a===P.kB(b))return
return a},
mG:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.c.a0(a,u)!==93)P.cN(a,b,"Missing end `]` to match `[` in host")
P.kn(a,b+1,u)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.c.a0(a,t)===58){P.kn(a,b,c)
return"["+a+"]"}return P.mM(a,b,c)},
mM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a0(a,u)
if(q===37){p=P.kH(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ae("")
n=C.c.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ae("")
if(t<u){s.a+=C.c.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cN(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.c.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kC(q)
u+=l
t=u}}}}if(s==null)return C.c.q(a,b,c)
if(t<c){n=C.c.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kE(C.c.F(a,b)))P.cN(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cN(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.q(a,b,c)
return P.mD(t?a.toLowerCase():a)},
mD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mK:function(a,b,c){return P.cO(a,b,c,C.a8,!1)},
mH:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cO(a,b,c,C.K,!0):C.r.le(d,new P.iD(),P.e).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.mL(r,e,f)},
mL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.mN(a,!u||c)
return P.mO(a)},
jt:function(a,b,c,d){var u,t
u={}
H.j(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.d(P.d0("Both query and queryParameters specified"))
return P.cO(a,b,c,C.u,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.K(0,new P.iE(new P.iF(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mF:function(a,b,c){return P.cO(a,b,c,C.u,!0)},
kH:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a0(a,b+1)
s=C.c.a0(a,u)
r=H.iX(t)
q=H.iX(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aV(p,4)
if(u>=8)return H.f(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bO(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
kC:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.p(t,0,37)
C.a.p(t,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.p(t,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.j1(a,6*r)&63|s
C.a.p(t,q,37)
C.a.p(t,q+1,C.c.F("0123456789ABCDEF",p>>>4))
C.a.p(t,q+2,C.c.F("0123456789ABCDEF",p&15))
q+=3}}return P.dP(t,0,null)},
cO:function(a,b,c,d,e){var u=P.kG(a,b,c,H.j(d,"$ia",[P.l],"$aa"),e)
return u==null?C.c.q(a,b,c):u},
kG:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.j(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.c.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kH(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cN(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kC(q)}}if(r==null)r=new P.ae("")
r.a+=C.c.q(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.q(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kF:function(a){if(C.c.a5(a,"."))return!0
return C.c.eH(a,"/.")!==-1},
mO:function(a){var u,t,s,r,q,p,o
if(!P.kF(a))return a
u=H.b([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.T(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
mN:function(a,b){var u,t,s,r,q,p
if(!P.kF(a))return!b?P.kD(a):a
u=H.b([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.p(u,0,P.kD(u[0]))}return C.a.l(u,"/")},
kD:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kE(J.ln(a,0)))for(t=1;t<u;++t){s=C.c.F(a,t)
if(s===58)return C.c.q(a,0,t)+"%3A"+C.c.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.d0("Invalid URL encoding"))}}return u},
ju:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.F(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.q(a,b,c)
else q=new H.r(C.c.q(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.c.F(a,t)
if(s>127)throw H.d(P.d0("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.d(P.d0("Truncated URI"))
C.a.h(q,P.mE(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.j(q,"$ia",[P.l],"$aa")
return new P.hH(!1).cA(q)},
kE:function(a){var u=a|32
return 97<=u&&u<=122},
kl:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.F(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.d(P.a_("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.d(P.a_("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.F(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gay(u)
if(q!==44||s!==o+7||!C.c.af(a,"base64",o+1))throw H.d(P.a_("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kx(a,n,t)
else{m=P.kG(a,n,t,C.u,!0)
if(m!=null)a=C.c.b0(a,n,t,m)}return new P.hB(a,u,c)},
mQ:function(){var u,t,s,r,q
u=P.lT(22,new P.iO(),!0,P.K)
t=new P.iN(u)
s=new P.iP()
r=new P.iQ()
q=H.c(t.$2(0,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(14,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(15,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(1,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(2,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(3,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(4,229),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(5,229),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(6,231),"$iK")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(7,231),"$iK")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.c(t.$2(8,8),"$iK"),"]",5)
q=H.c(t.$2(9,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(16,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(17,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(10,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(18,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(19,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(11,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(12,236),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.c(t.$2(13,237),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.c(t.$2(20,245),"$iK"),"az",21)
q=H.c(t.$2(21,245),"$iK")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kL:function(a,b,c,d,e){var u,t,s,r,q
H.j(e,"$ia",[P.l],"$aa")
u=$.lk()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.c.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.p(e,q>>>5,t)}return d},
H:function H(){},
aj:function aj(a,b){this.a=a
this.b=b},
y:function y(){},
bh:function bh(a){this.a=a},
eR:function eR(){},
eS:function eS(){},
bi:function bi(){},
dF:function dF(){},
aH:function aH(a,b,c,d){var _=this
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
f9:function f9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hA:function hA(a){this.a=a},
hx:function hx(a){this.a=a},
cp:function cp(a){this.a=a},
eK:function eK(a){this.a=a},
fL:function fL(){},
dO:function dO(){},
eO:function eO(a){this.a=a},
ed:function ed(a){this.a=a},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(){},
l:function l(){},
n:function n(){},
aS:function aS(){},
a:function a(){},
E:function E(){},
B:function B(){},
ag:function ag(){},
O:function O(){},
at:function at(){},
e:function e(){},
ae:function ae(a){this.a=a},
hF:function hF(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(){},
iN:function iN(a){this.a=a},
iP:function iP(){},
iQ:function iQ(){},
is:function is(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i0:function i0(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
n4:function(a){var u,t
u=J.N(a)
if(!!u.$ib4){t=u.ge8(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eq(a.data,a.height,a.width)},
n3:function(a){if(a instanceof P.eq)return{data:a.a,height:a.b,width:a.c}
return a},
n2:function(a,b){var u={}
a.K(0,new P.iU(u))
return u},
it:function it(){},
iv:function iv(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
f0:function f0(){},
f1:function f1(){},
ig:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
my:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ii:function ii(){},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ck:function ck(){},
o:function o(){},
K:function K(){},
d2:function d2(){},
de:function de(){},
dJ:function dJ(){},
bQ:function bQ(){},
dM:function dM(){},
dT:function dT(){},
e1:function e1(){}},W={
jO:function(a){var u=document.createElement("a")
return u},
jb:function(a,b){var u=document.createElement("canvas")
return u},
lE:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ah(u,a,b,c)
t.toString
u=W.z
u=new H.cF(new W.ao(t),H.k(new W.eU(),{func:1,ret:P.H,args:[u]}),[u])
return H.c(u.gaN(u),"$iI")},
lF:function(a){H.c(a,"$ibB")
return"wheel"},
c8:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lr(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ah(s)}return u},
jY:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
ie:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kz:function(a,b,c,d){var u,t
u=W.ie(W.ie(W.ie(W.ie(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u,t
u=W.kO(new W.i4(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.lm(a,b,u,!1)}return new W.i3(a,b,u,!1,[e])},
ky:function(a){var u,t
u=W.jO(null)
t=window.location
u=new W.bq(new W.io(u,t))
u.fP(a)
return u},
mw:function(a,b,c,d){H.c(a,"$iI")
H.D(b)
H.D(c)
H.c(d,"$ibq")
return!0},
mx:function(a,b,c,d){var u,t,s
H.c(a,"$iI")
H.D(b)
H.D(c)
u=H.c(d,"$ibq").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kA:function(){var u,t,s,r,q
u=P.e
t=P.k1(C.A,u)
s=H.t(C.A,0)
r=H.k(new W.iy(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.ix(t,P.ds(null,null,null,u),P.ds(null,null,null,u),P.ds(null,null,null,u),null)
t.h_(null,new H.fx(C.A,r,[s,u]),q,null)
return t},
kO:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.l)return a
return u.e3(a,b)},
v:function v(){},
d_:function d_(){},
eB:function eB(){},
c2:function c2(){},
bb:function bb(){},
bw:function bw(){},
bx:function bx(){},
bd:function bd(){},
c6:function c6(){},
eN:function eN(){},
az:function az(){},
c7:function c7(){},
eQ:function eQ(){},
d9:function d9(){},
da:function da(){},
i_:function i_(a,b){this.a=a
this.b=b},
I:function I(){},
eU:function eU(){},
m:function m(){},
bB:function bB(){},
f2:function f2(){},
df:function df(){},
dg:function dg(){},
bD:function bD(){},
dh:function dh(){},
b4:function b4(){},
bE:function bE(){},
aU:function aU(){},
dt:function dt(){},
ce:function ce(){},
a0:function a0(){},
ao:function ao(a){this.a=a},
z:function z(){},
ch:function ch(){},
dK:function dK(){},
fX:function fX(){},
aX:function aX(){},
dQ:function dQ(){},
dR:function dR(){},
ha:function ha(){},
cr:function cr(){},
aJ:function aJ(){},
aK:function aK(){},
hm:function hm(){},
bp:function bp(){},
hT:function hT(){},
b0:function b0(){},
cG:function cG(){},
cH:function cH(){},
ec:function ec(){},
ei:function ei(){},
hZ:function hZ(){},
i1:function i1(a){this.a=a},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i3:function i3(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i4:function i4(a){this.a=a},
bq:function bq(a){this.a=a},
au:function au(){},
dE:function dE(a){this.a=a},
fJ:function fJ(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(){},
iq:function iq(){},
ir:function ir(){},
ix:function ix(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(){},
iw:function iw(){},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ax:function ax(){},
io:function io(a,b){this.a=a
this.b=b},
et:function et(a){this.a=a},
iJ:function iJ(a){this.a=a},
eb:function eb(){},
ee:function ee(){},
ef:function ef(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){}},O={
jc:function(a){var u=new O.Y([a])
u.c0(a)
return u},
Y:function Y(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cd:function cd(){this.b=this.a=null},
di:function di(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fe:function fe(a,b){this.a=a
this.b=b},
fd:function fd(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
dw:function dw(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fB:function fB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bR:function bR(){}},E={
jf:function(a,b,c,d,e,f){var u=new E.ak()
u.a=d
u.b=!0
u.sfO(0,O.jc(E.ak))
u.y.bl(u.gky(),u.gkB())
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
u.sbY(0,e)
u.sd0(f)
u.sbc(c)
return u},
mb:function(a,b){var u=new E.fS(a,b)
u.fJ(a,b)
return u},
mg:function(a,b,c,d,e){var u,t,s,r
u=J.N(a)
if(!!u.$ibw)return E.kh(a,!0,!0,!0,!1)
t=W.jb(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcz(a).h(0,t)
r=E.kh(t,!0,!0,!0,!1)
r.a=a
return r},
kh:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dY()
t=P.lQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
s=C.q.bV(a,"webgl",t)
s=H.c(s==null?C.q.bV(a,"experimental-webgl",t):s,"$ibQ")
if(s==null)H.p(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mb(s,a)
r=new T.hg(s)
r.b=H.ac((s&&C.b).d6(s,3379))
r.c=H.ac(C.b.d6(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e4(a)
q=new X.fl()
q.c=new X.aw(!1,!1,!1)
q.siE(P.ds(null,null,null,P.l))
r.b=q
q=new X.fD(r)
q.f=0
q.r=V.bn()
q.x=V.bn()
q.Q=1
q.ch=1
r.c=q
q=new X.fr(r)
q.r=0
q.x=V.bn()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hl(r)
q.e=0
q.f=V.bn()
q.r=V.bn()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sho(H.b([],[[P.cq,P.O]]))
q=r.z
p=document
o=W.a0
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a5(p,"contextmenu",H.k(r.gi_(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a5(a,"focus",H.k(r.gi5(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a5(a,"blur",H.k(r.ghU(),l),!1,m))
q=r.z
k=W.aU
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a5(p,"keyup",H.k(r.gi9(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a5(p,"keydown",H.k(r.gi7(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousedown",H.k(r.gie(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mouseup",H.k(r.gij(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousemove",H.k(r.gih(),n),!1,o))
k=r.z
j=W.b0;(k&&C.a).h(k,W.a5(a,H.D(W.lF(a)),H.k(r.gil(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a5(p,"mousemove",H.k(r.gi1(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a5(p,"mouseup",H.k(r.gi3(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a5(p,"pointerlockchange",H.k(r.gio(),l),!1,m))
m=r.z
l=W.aK
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a5(a,"touchstart",H.k(r.giB(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchend",H.k(r.gix(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchmove",H.k(r.giz(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.dP()
return u},
eF:function eF(){},
ak:function ak(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
dY:function dY(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(a){this.a=a}},Z={
jq:function(a,b,c){var u
H.j(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.b.au(a,b,u)
C.b.e5(a,b,new Int16Array(H.bU(c)),35044)
C.b.au(a,b,null)
return new Z.e8(b,u)},
aC:function(a){return new Z.aM(a)},
e8:function e8(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e9:function e9(a){this.a=a},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
d4:function d4(){this.a=null},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a){this.a=a}},D={
M:function(){var u=new D.bA()
u.sal(null)
u.sb6(null)
u.c=null
u.d=0
return u},
eI:function eI(){},
bA:function bA(){var _=this
_.d=_.c=_.b=_.a=null},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
bG:function bG(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bH:function bH(a,b,c,d){var _=this
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
a3:function a3(){},
dr:function dr(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dH:function dH(){},
dN:function dN(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){}},X={d5:function d5(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},fl:function fl(){var _=this
_.d=_.c=_.b=_.a=null},du:function du(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fr:function fr(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},b5:function b5(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fD:function fD(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cf:function cf(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fO:function fO(){},e_:function e_(a,b,c,d,e,f,g,h,i){var _=this
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
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e4:function e4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lH:function(a,b,c,d,e,f,g){var u,t
u=new X.f4()
t=new V.Z(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kd
if(t==null){t=V.kc(0,0,1,1)
$.kd=t}u.r=t
return u},
d6:function d6(){},
f4:function f4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){}},V={
ns:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bj(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.c.ak("null",c)
return C.c.ak(C.j.f7(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
bY:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ia",[P.y],"$aa")
u=H.b([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.p(u,p,C.c.ak(u[p],s))}return u},
jG:function(a,b){return C.j.l2(Math.pow(b,C.Z.cL(Math.log(H.n1(a))/Math.log(b))))},
dz:function(){var u=$.k4
if(u==null){u=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.k4=u}return u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k3:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.D(0,Math.sqrt(c.I(c)))
t=b.bb(u)
s=t.D(0,Math.sqrt(t.I(t)))
r=u.bb(s)
q=new V.Q(a.a,a.b,a.c)
p=s.T(0).I(q)
o=r.T(0).I(q)
n=u.T(0).I(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bn:function(){var u=$.k8
if(u==null){u=new V.ad(0,0)
$.k8=u}return u},
k9:function(){var u=$.ci
if(u==null){u=new V.ay(0,0,0)
$.ci=u}return u},
kc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
b_:function(){var u=$.kt
if(u==null){u=new V.Q(0,0,0)
$.kt=u}return u},
kv:function(){var u=$.kr
if(u==null){u=new V.Q(1,0,0)
$.kr=u}return u},
kw:function(){var u=$.ks
if(u==null){u=new V.Q(0,1,0)
$.ks=u}return u},
mq:function(){var u=$.hJ
if(u==null){u=new V.Q(0,0,1)
$.hJ=u}return u},
ku:function(){var u=$.kq
if(u==null){u=new V.Q(0,0,-1)
$.kq=u}return u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
dy:function dy(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.F(a,0)
t=C.c.F(b,0)
s=new V.fQ()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.fY()
u.fK(a)
return u},
hk:function(){var u,t
u=new V.hj()
t=P.e
u.sj3(new H.aA([t,V.co]))
u.sj7(new H.aA([t,V.ct]))
u.c=null
return u},
b2:function b2(){},
av:function av(){},
dv:function dv(){},
as:function as(){this.a=null},
fQ:function fQ(){this.b=this.a=null},
fY:function fY(){this.a=null},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b
this.c=null},
hj:function hj(){this.c=this.b=this.a=null},
cu:function cu(a){this.b=a
this.a=this.c=null},
no:function(a){P.mh(C.U,new V.j5(a))},
md:function(a,b){var u=new V.h1()
u.fL(a,!0)
return u},
be:function be(){},
j5:function j5(a){this.a=a},
eP:function eP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f6:function f6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h1:function h1(){this.b=this.a=null},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a},
h4:function h4(a){this.a=a},
hc:function hc(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(){}},U={
jd:function(){var u=new U.eJ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jU:function(a){var u=new U.d7()
u.a=a
return u},
eJ:function eJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){this.b=this.a=null},
ca:function ca(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a7:function a7(){},
e5:function e5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={db:function db(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lU:function(a,b){var u,t
u=a.an
t=new A.dx(b,u)
t.dc(b,u)
t.fI(a,b)
return t},
jn:function(a,b,c,d,e){var u=new A.hq(a,b,c,e)
u.f=d
u.sji(P.lS(d,0,!1,P.l))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a},
dj:function dj(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dx:function dx(a,b){var _=this
_.bw=_.ed=_.bv=_.an=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eu=_.cF=_.es=_.bJ=_.er=_.eq=_.bI=_.bH=_.ep=_.eo=_.bG=_.bF=_.bE=_.en=_.em=_.bD=_.el=_.ek=_.bC=_.ej=_.ei=_.bB=_.bA=_.eh=_.eg=_.bz=_.by=_.ef=_.ee=_.bx=null
_.cK=_.ey=_.cJ=_.ex=_.cI=_.ew=_.cH=_.ev=_.cG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fA:function fA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aw=b3
_.an=b4
_.bv=b5},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cy:function cy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cz:function cz(a,b,c,d,e,f,g,h,i,j){var _=this
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
cC:function cC(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cl:function cl(){},
bz:function bz(a,b){this.a=a
this.b=b},
e0:function e0(){},
hv:function hv(a){this.a=a},
J:function J(a,b,c,d){var _=this
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
hu:function hu(a,b,c,d){var _=this
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
W:function W(a,b,c,d){var _=this
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
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
iM:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cP:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u.d=t}g=F.iM(t)
f=F.iM(u.b)
e=F.nq(d,a0,new F.iL(u,F.iM(u.c),F.iM(u.d),f,g,c),b)
if(e!=null)a.kw(e)},
nq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.X,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.cm()
t=H.b([],[F.X])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hK(null,null,new V.Z(p,0,0,1),null,null,new V.ad(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cB(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hK(null,null,new V.Z(j,i,h,1),null,null,new V.ad(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cB(d))}}u.d.jJ(a+1,b+1,t)
return u},
dc:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
lO:function(a,b){var u,t
u=new F.ar()
if(a==null)H.p(P.q("May not create a line with a null start vertex."))
if(b==null)H.p(P.q("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
lW:function(a){var u=new F.bm()
if(a.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a2()
return u},
cm:function(){var u,t
u=new F.aa()
t=new F.hL(u)
t.b=!1
t.sjj(H.b([],[F.X]))
u.a=t
t=new F.h0(u)
t.scl(H.b([],[F.bm]))
u.b=t
t=new F.h_(u)
t.shz(H.b([],[F.ar]))
u.c=t
t=new F.fZ(u)
t.shp(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
hK:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.X()
t=new F.hQ(u)
t.scl(H.b([],[F.bm]))
u.b=t
t=new F.hP(u)
s=[F.ar]
t.shA(H.b([],s))
t.shB(H.b([],s))
u.c=t
t=new F.hM(u)
s=[F.a2]
t.shq(H.b([],s))
t.shr(H.b([],s))
t.shs(H.b([],s))
u.d=t
h=$.le()
u.e=0
t=$.aP()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aO().a)!==0?e:null
u.x=(s&$.aN().a)!==0?b:null
u.y=(s&$.b9().a)!==0?f:null
u.z=(s&$.ba().a)!==0?g:null
u.Q=(s&$.lf().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.b8().a)!==0?a:null
return u},
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ar:function ar(){this.b=this.a=null},
bm:function bm(){this.a=null},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cn:function cn(){},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
X:function X(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a){this.a=a},
hR:function hR(a){this.a=a},
hL:function hL(a){this.a=a
this.c=this.b=null},
hM:function hM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a
this.c=this.b=null},
hQ:function hQ(a){this.a=a
this.b=null}},T={cs:function cs(){},dU:function dU(){},hf:function hf(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},hg:function hg(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hh:function hh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=V.md("Test 006",!0)
t=W.jb(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.e]
u.e_(H.b(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],s))
u.jI(H.b(["bumpMaps"],s))
u.e_(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.d5(s,"testCanvas")
if(r==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.mg(r,!0,!0,!0,!1)
p=F.cm()
F.cP(p,null,null,1,1,1,0,0,1)
F.cP(p,null,null,1,1,0,1,0,3)
F.cP(p,null,null,1,1,0,0,1,2)
F.cP(p,null,null,1,1,-1,0,0,0)
F.cP(p,null,null,1,1,0,-1,0,0)
F.cP(p,null,null,1,1,0,0,-1,3)
p.aI()
o=new O.dw()
o.shb(O.jc(V.al))
o.e.bl(o.ghQ(),o.ghS())
n=new O.aV(o,"emission")
n.c=C.d
n.f=new V.a4(0,0,0)
o.f=n
n=new O.aV(o,"ambient")
n.c=C.d
n.f=new V.a4(0,0,0)
o.r=n
n=new O.aV(o,"diffuse")
n.c=C.d
n.f=new V.a4(0,0,0)
o.x=n
n=new O.aV(o,"invDiffuse")
n.c=C.d
n.f=new V.a4(0,0,0)
o.y=n
n=new O.fC(o,"specular")
n.c=C.d
n.f=new V.a4(0,0,0)
n.ch=100
o.z=n
n=new O.fz(o,"bump")
n.c=C.d
o.Q=n
o.ch=null
n=new O.aV(o,"reflect")
n.c=C.d
n.f=new V.a4(0,0,0)
o.cx=n
n=new O.fB(o,"refract")
n.c=C.d
n.f=new V.a4(0,0,0)
n.ch=1
o.cy=n
n=new O.fy(o,"alpha")
n.c=C.d
n.f=1
o.db=n
n=new D.dr()
n.c0(D.a3)
n.shm(H.b([],[D.bg]))
n.siD(H.b([],[D.dH]))
n.sj2(H.b([],[D.dN]))
n.sjf(H.b([],[D.dV]))
n.sjg(H.b([],[D.dW]))
n.sjh(H.b([],[D.dX]))
n.Q=null
n.ch=null
n.d8(n.ghO(),n.gir(),n.giv())
o.dx=n
m=n.Q
if(m==null){m=D.M()
n.Q=m
n=m}else n=m
n.h(0,o.giP())
n=o.dx
m=n.ch
if(m==null){m=D.M()
n.ch=m
n=m}else n=m
n.h(0,o.gbo())
o.dy=null
n=o.dx
l=V.kw()
m=U.jU(V.k3(V.k9(),l,new V.Q(0,0,-1)))
k=new V.a4(1,1,1)
j=new D.bg()
j.c=new V.a4(1,1,1)
j.a=V.mq()
i=j.b
j.b=m
m.gv().h(0,j.gfR())
m=new D.F("mover",i,j.b,j,[U.a7])
m.b=!0
j.az(m)
if(!j.c.u(0,k)){i=j.c
j.c=k
m=new D.F("color",i,k,j,[V.a4])
m.b=!0
j.az(m)}n.h(0,j)
n=o.r
n.sa4(0,new V.a4(0,0,1))
n=o.x
n.sa4(0,new V.a4(0,1,0))
n=o.z
n.sa4(0,new V.a4(1,0,0))
n=o.z
if(n.c===C.d){n.c=C.i
n.c_()
n.co(100)
m=n.a
m.a=null
m.U(null)}n.co(10)
h=E.jf(null,!0,null,"",null,null)
h.sbY(0,p)
h.sd0(o)
g=E.jf(null,!0,null,"",null,null)
g.sbY(0,p)
n=new O.di()
n.b=V.ku()
n.c=new V.Z(0.2,0.3,0.4,1)
n.d=new V.Z(0.1,0.2,0.3,1)
n.e=new V.Z(0.7,0.7,0.7,1)
n.f=new V.Z(0.3,0.3,0.3,1)
n.r=new V.Z(0.5,0.5,0.5,1)
n.x=new V.Z(0.5,0.5,0.5,1)
n.y=new V.Z(1,1,1,1)
n.z=new V.Z(0.8,0.8,0.8,1)
n.Q=!1
n.ch=!1
n.cx=!1
n.cy=!1
n.db=!1
n.dx=!1
n.dy=!1
n.fr=!1
n.fx=!1
n.fy=!1
n.go=!1
n.id=!1
n.k1=!1
n.k2=!1
n.k3=!1
n.k4=!1
n.r1=!1
n.r2=1
if(!(Math.abs(0.6)<$.L().a)){n.r2=0.4
m=new D.F("vectorScale",1,0.4,n,[P.y])
m.b=!0
n.U(m)}if(!n.ch){n.ch=!0
m=new D.F("showWireFrame",!1,!0,n,[P.H])
m.b=!0
n.U(m)}if(!n.k3){n.k3=!0
m=new D.F("showAxis",!1,!0,n,[P.H])
m.b=!0
n.U(m)}if(!n.cy){n.cy=!0
m=new D.F("showNormals",!1,!0,n,[P.H])
m.b=!0
n.U(m)}if(!n.db){n.db=!0
m=new D.F("showBinormals",!1,!0,n,[P.H])
m.b=!0
n.U(m)}g.sd0(n)
f=E.jf(null,!0,null,"",null,null)
f.y.h(0,g)
f.y.h(0,h)
n=new U.ca()
n.c0(U.a7)
n.bl(n.ghM(),n.git())
n.e=null
n.f=V.dz()
n.r=0
m=q.r
j=new U.e6()
e=U.jd()
e.sd4(0,!0)
e.scS(6.283185307179586)
e.scU(0)
e.sac(0,0)
e.scT(100)
e.sX(0)
e.scC(0.5)
j.b=e
d=j.gaP()
e.gv().h(0,d)
e=U.jd()
e.sd4(0,!0)
e.scS(6.283185307179586)
e.scU(0)
e.sac(0,0)
e.scT(100)
e.sX(0)
e.scC(0.5)
j.c=e
e.gv().h(0,d)
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
c=new X.aw(!1,!1,!1)
i=j.d
j.d=c
e=[X.aw]
d=new D.F("modifiers",i,c,j,e)
d.b=!0
j.R(d)
d=j.f
if(d!==!1){j.f=!1
d=new D.F("invertX",d,!1,j,[P.H])
d.b=!0
j.R(d)}d=j.r
if(d!==!0){j.r=!0
d=new D.F("invertY",d,!0,j,[P.H])
d.b=!0
j.R(d)}j.b9(m)
n.h(0,j)
m=q.r
j=new U.e5()
d=U.jd()
d.sd4(0,!0)
d.scS(6.283185307179586)
d.scU(0)
d.sac(0,0)
d.scT(100)
d.sX(0)
d.scC(0.2)
j.b=d
d.gv().h(0,j.gaP())
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
c=new X.aw(!0,!1,!1)
i=j.c
j.c=c
d=new D.F("modifiers",i,c,j,e)
d.b=!0
j.R(d)
j.b9(m)
n.h(0,j)
m=q.r
j=new U.e7()
j.c=0.01
j.d=0
j.e=0
c=new X.aw(!1,!1,!1)
j.b=c
e=new D.F("modifiers",null,c,j,e)
e.b=!0
j.R(e)
j.b9(m)
n.h(0,j)
f.sbc(n)
n=new M.db()
n.shg(0,O.jc(E.ak))
n.d.bl(n.ghW(),n.ghY())
n.e=null
n.f=null
n.r=null
n.x=null
b=X.lH(!0,!0,!1,null,2000,null,0)
a=new X.dG()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.sbc(null)
m=a.c
if(!(Math.abs(m-1.0471975511965976)<$.L().a)){a.c=1.0471975511965976
m=new D.F("fov",m,1.0471975511965976,a,[P.y])
m.b=!0
a.aS(m)}m=a.d
if(!(Math.abs(m-0.1)<$.L().a)){a.d=0.1
m=new D.F("near",m,0.1,a,[P.y])
m.b=!0
a.aS(m)}m=a.e
if(!(Math.abs(m-2000)<$.L().a)){a.e=2000
m=new D.F("far",m,2000,a,[P.y])
m.b=!0
a.aS(m)}m=n.a
if(m!==a){if(m!=null)m.gv().a3(0,n.gaQ())
i=n.a
n.a=a
a.gv().h(0,n.gaQ())
m=new D.F("camera",i,n.a,n,[X.d6])
m.b=!0
n.aR(m)}m=n.b
if(m!==b){if(m!=null)m.gv().a3(0,n.gaQ())
i=n.b
n.b=b
b.gv().h(0,n.gaQ())
m=new D.F("target",i,n.b,n,[X.dS])
m.b=!0
n.aR(m)}n.d.h(0,f)
n.a.sbc(U.jU(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=q.d
if(m!==n){if(m!=null)m.gv().a3(0,q.gdd())
q.d=n
n.gv().h(0,q.gdd())
q.de()}n=new V.hc("bumpMaps",!0,new N.j1(o,q))
s=C.z.d5(s,"bumpMaps")
n.c=s
if(s==null)H.p("Failed to find bumpMaps for Texture2DGroup")
n.aE(0,"../resources/BumpMap1.png",!0)
n.h(0,"../resources/BumpMap2.png")
n.h(0,"../resources/BumpMap3.png")
n.h(0,"../resources/BumpMap4.png")
n.h(0,"../resources/BumpMap5.png")
n.h(0,"../resources/ScrewBumpMap.png")
n.h(0,"../resources/CtrlPnlBumpMap.png")
s=q.z
if(s==null){s=D.M()
q.z=s}n={func:1,ret:-1,args:[D.x]}
m=H.k(new N.j2(u,o),n)
if(s.b==null)s.sb6(H.b([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.no(q)},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jj.prototype={}
J.a9.prototype={
u:function(a,b){return a===b},
gG:function(a){return H.cj(a)},
i:function(a){return"Instance of '"+H.bN(a)+"'"}}
J.fi.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iH:1}
J.dm.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iB:1}
J.dp.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.fM.prototype={}
J.cD.prototype={}
J.bl.prototype={
i:function(a){var u=a[$.l2()]
if(u==null)return this.fD(a)
return"JavaScript function for "+H.i(J.ap(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibj:1}
J.aT.prototype={
h:function(a,b){H.w(b,H.t(a,0))
if(!!a.fixed$length)H.p(P.a1("add"))
a.push(b)},
a3:function(a,b){var u
if(!!a.fixed$length)H.p(P.a1("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
K:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.aR(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.p(u,t,H.i(a[t]))
return u.join(b)},
kq:function(a){return this.l(a,"")},
ki:function(a,b,c,d){var u,t,s
H.w(b,d)
H.k(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.aR(a))}return t},
kh:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.H,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.d(P.aR(a))}throw H.d(H.jh())},
kg:function(a,b){return this.kh(a,b,null)},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fA:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.t(a,0)])
return H.b(a.slice(b,c),[H.t(a,0)])},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.jh())},
e1:function(a,b){var u,t
H.k(b,{func:1,ret:P.H,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.d(P.aR(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.jg(a,"[","]")},
gW:function(a){return new J.aq(a,a.length,0,[H.t(a,0)])},
gG:function(a){return H.cj(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.a1("set length"))
if(b<0)throw H.d(P.a8(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.bs(a,b))
if(b>=a.length||b<0)throw H.d(H.bs(a,b))
return a[b]},
p:function(a,b,c){H.w(c,H.t(a,0))
if(!!a.immutable$list)H.p(P.a1("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bs(a,b))
a[b]=c},
$in:1,
$ia:1}
J.ji.prototype={}
J.aq.prototype={
gH:function(){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.A(u))
s=this.c
if(s>=t){this.sdA(null)
return!1}this.sdA(u[s]);++this.c
return!0},
sdA:function(a){this.d=H.w(a,H.t(this,0))},
$iaS:1}
J.dn.prototype={
l2:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.a1(""+a+".toInt()"))},
cL:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.a1(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a1(""+a+".round()"))},
f7:function(a,b){var u,t
if(b>20)throw H.d(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a8(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.a1("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
bj:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.a1("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j1:function(a,b){if(b<0)throw H.d(H.aF(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
$iy:1,
$iag:1}
J.dl.prototype={$il:1}
J.dk.prototype={}
J.bI.prototype={
a0:function(a,b){if(b<0)throw H.d(H.bs(a,b))
if(b>=a.length)H.p(H.bs(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.bs(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.d(P.j9(b,null,null))
return a+b},
b0:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.aF(b))
c=P.bo(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
af:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.aF(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.d(P.a8(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.af(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.aF(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.d(P.fP(b,null,null))
if(b>c)throw H.d(P.fP(b,null,null))
if(c>a.length)throw H.d(P.fP(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.q(a,b,null)},
l5:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kG:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
ak:function(a,b){return this.kG(a,b," ")},
eI:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a8(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eH:function(a,b){return this.eI(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ik6:1,
$ie:1}
H.r.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.a0(this.a,b)},
$acE:function(){return[P.l]},
$aS:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eT.prototype={}
H.bJ.prototype={
gW:function(a){return new H.cb(this,this.gm(this),0,[H.ab(this,"bJ",0)])},
bS:function(a,b){return this.fC(0,H.k(b,{func:1,ret:P.H,args:[H.ab(this,"bJ",0)]}))}}
H.cb.prototype={
gH:function(){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.cT(u)
s=t.gm(u)
if(this.b!==s)throw H.d(P.aR(u))
r=this.c
if(r>=s){this.sb3(null)
return!1}this.sb3(t.aa(u,r));++this.c
return!0},
sb3:function(a){this.d=H.w(a,H.t(this,0))},
$iaS:1}
H.fv.prototype={
gW:function(a){return new H.fw(J.bv(this.a),this.b,this.$ti)},
gm:function(a){return J.aG(this.a)},
aa:function(a,b){return this.b.$1(J.ez(this.a,b))},
$an:function(a,b){return[b]}}
H.fw.prototype={
w:function(){var u=this.b
if(u.w()){this.sb3(this.c.$1(u.gH()))
return!0}this.sb3(null)
return!1},
gH:function(){return this.a},
sb3:function(a){this.a=H.w(a,H.t(this,1))},
$aaS:function(a,b){return[b]}}
H.fx.prototype={
gm:function(a){return J.aG(this.a)},
aa:function(a,b){return this.b.$1(J.ez(this.a,b))},
$abJ:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cF.prototype={
gW:function(a){return new H.hU(J.bv(this.a),this.b,this.$ti)}}
H.hU.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gH()))return!0
return!1},
gH:function(){return this.a.gH()}}
H.bC.prototype={}
H.cE.prototype={
p:function(a,b,c){H.w(c,H.ab(this,"cE",0))
throw H.d(P.a1("Cannot modify an unmodifiable list"))}}
H.e2.prototype={}
H.eL.prototype={
i:function(a){return P.jl(this)},
p:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
return H.lB()},
$iE:1}
H.eM.prototype={
gm:function(a){return this.a},
bt:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bt(b))return
return this.dB(b)},
dB:function(a){return this.b[H.D(a)]},
K:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.k(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.w(this.dB(q),u))}}}
H.fR.prototype={}
H.hn.prototype={
aj:function(a){var u,t,s
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
H.fK.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fk.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.hz.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j6.prototype={
$1:function(a){if(!!J.N(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.em.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iat:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bN(this).trim()+"'"},
$ibj:1,
gl9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hb.prototype={}
H.h5.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c3.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.cj(this.a)
else t=typeof u!=="object"?J.cZ(u):H.cj(u)
return(t^H.cj(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bN(u)+"'")}}
H.hp.prototype={
i:function(a){return this.a}}
H.eH.prototype={
i:function(a){return this.a}}
H.fW.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aA.prototype={
gm:function(a){return this.a},
gkp:function(a){return this.a===0},
gax:function(){return new H.fn(this,[H.t(this,0)])},
bt:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dv(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dv(t,a)}else return this.km(a)},
km:function(a){var u=this.d
if(u==null)return!1
return this.cO(this.c7(u,this.cN(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bn(r,b)
s=t==null?null:t.b
return s}else return this.kn(b)},
kn:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c7(u,this.cN(a))
s=this.cO(t,a)
if(s<0)return
return t[s].b},
p:function(a,b,c){var u,t
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ci()
this.b=u}this.dh(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ci()
this.c=t}this.dh(t,b,c)}else this.ko(b,c)},
ko:function(a,b){var u,t,s,r
H.w(a,H.t(this,0))
H.w(b,H.t(this,1))
u=this.d
if(u==null){u=this.ci()
this.d=u}t=this.cN(a)
s=this.c7(u,t)
if(s==null)this.cp(u,t,[this.c1(a,b)])
else{r=this.cO(s,a)
if(r>=0)s[r].b=b
else s.push(this.c1(a,b))}},
K:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aR(this))
u=u.c}},
dh:function(a,b,c){var u
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
u=this.bn(a,b)
if(u==null)this.cp(a,b,this.c1(b,c))
else u.b=c},
h3:function(){this.r=this.r+1&67108863},
c1:function(a,b){var u,t
u=new H.fm(H.w(a,H.t(this,0)),H.w(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h3()
return u},
cN:function(a){return J.cZ(a)&0x3ffffff},
cO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jl(this)},
bn:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
hl:function(a,b){delete a[b]},
dv:function(a,b){return this.bn(a,b)!=null},
ci:function(){var u=Object.create(null)
this.cp(u,"<non-identifier-key>",u)
this.hl(u,"<non-identifier-key>")
return u},
$ik_:1}
H.fm.prototype={}
H.fn.prototype={
gm:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.fo(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fo.prototype={
gH:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aR(u))
else{u=this.c
if(u==null){this.sdi(null)
return!1}else{this.sdi(u.a)
this.c=this.c.c
return!0}}},
sdi:function(a){this.d=H.w(a,H.t(this,0))},
$iaS:1}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.iZ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.j_.prototype={
$1:function(a){return this.a(H.D(a))},
$S:44}
H.fj.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik6:1,
$im9:1}
H.bL.prototype={$ibL:1,$imi:1}
H.dA.prototype={
gm:function(a){return a.length},
$iaI:1,
$aaI:function(){}}
H.dB.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
p:function(a,b,c){H.n6(c)
H.b7(b,a,a.length)
a[b]=c},
$abC:function(){return[P.y]},
$aS:function(){return[P.y]},
$in:1,
$an:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.dC.prototype={
p:function(a,b,c){H.ac(c)
H.b7(b,a,a.length)
a[b]=c},
$abC:function(){return[P.l]},
$aS:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fE.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fF.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fG.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fH.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.dD.prototype={
gm:function(a){return a.length},
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
$inM:1}
H.cg.prototype={
gm:function(a){return a.length},
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
$icg:1,
$iK:1}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
P.hW.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:15}
P.hV.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.hX.prototype={
$0:function(){this.a.$0()},
$S:2}
P.hY.prototype={
$0:function(){this.a.$0()},
$S:2}
P.en.prototype={
h0:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bX(new P.iA(this,b),0),a)
else throw H.d(P.a1("`setTimeout()` not found."))},
h1:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bX(new P.iz(this,a,Date.now(),b),0),a)
else throw H.d(P.a1("Periodic timer."))},
$iaY:1}
P.iA.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iz.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fH(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b1.prototype={
kv:function(a){if(this.c!==6)return!0
return this.b.b.d_(H.k(this.d,{func:1,ret:P.H,args:[P.O]}),a.a,P.H,P.O)},
kl:function(a){var u,t,s,r
u=this.e
t=P.O
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.ew(u,{func:1,args:[P.O,P.at]}))return H.jC(r.kV(u,a.a,a.b,null,t,P.at),s)
else return H.jC(r.d_(H.k(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aD.prototype={
f6:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mU(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aD(0,$.V,[c])
r=b==null?1:3
this.dk(new P.b1(s,r,a,b,[u,c]))
return s},
l1:function(a,b){return this.f6(a,null,b)},
dk:function(a){var u,t
u=this.a
if(u<=1){a.a=H.c(this.c,"$ib1")
this.c=a}else{if(u===2){t=H.c(this.c,"$iaD")
u=t.a
if(u<4){t.dk(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iT(null,null,u,H.k(new P.i5(this,a),{func:1,ret:-1}))}},
dN:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.c(this.c,"$ib1")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.c(this.c,"$iaD")
t=p.a
if(t<4){p.dN(a)
return}this.a=t
this.c=p.c}u.a=this.bq(a)
t=this.b
t.toString
P.iT(null,null,t,H.k(new P.i9(u,this),{func:1,ret:-1}))}},
cn:function(){var u=H.c(this.c,"$ib1")
this.c=null
return this.bq(u)},
bq:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dr:function(a){var u,t,s
u=H.t(this,0)
H.jC(a,{futureOr:1,type:u})
t=this.$ti
if(H.cS(a,"$ic9",t,"$ac9"))if(H.cS(a,"$iaD",t,null))P.kx(a,this)
else P.mv(a,this)
else{s=this.cn()
H.w(a,u)
this.a=4
this.c=a
P.cI(this,s)}},
ds:function(a,b){var u
H.c(b,"$iat")
u=this.cn()
this.a=8
this.c=new P.ai(a,b)
P.cI(this,u)},
$ic9:1}
P.i5.prototype={
$0:function(){P.cI(this.a,this.b)},
$S:2}
P.i9.prototype={
$0:function(){P.cI(this.b,this.a.a)},
$S:2}
P.i6.prototype={
$1:function(a){var u=this.a
u.a=0
u.dr(a)},
$S:15}
P.i7.prototype={
$2:function(a,b){H.c(b,"$iat")
this.a.ds(a,b)},
$1:function(a){return this.$2(a,null)},
$S:56}
P.i8.prototype={
$0:function(){this.a.ds(this.b,this.c)},
$S:2}
P.ic.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f5(H.k(r.d,{func:1}),null)}catch(q){t=H.ah(q)
s=H.bZ(q)
if(this.d){r=H.c(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.c(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.N(u).$ic9){if(u instanceof P.aD&&u.a>=4){if(u.a===8){r=this.b
r.b=H.c(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l1(new P.id(o),null)
r.a=!1}},
$S:3}
P.id.prototype={
$1:function(a){return this.a},
$S:51}
P.ib.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.w(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.d_(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ah(o)
t=H.bZ(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.ia.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.c(this.a.a.c,"$iai")
r=this.c
if(r.kv(u)&&r.e!=null){q=this.b
q.b=r.kl(u)
q.a=!1}}catch(p){t=H.ah(p)
s=H.bZ(p)
r=H.c(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.ea.prototype={}
P.h6.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aD(0,$.V,[P.l])
u.a=0
s=H.t(this,0)
r=H.k(new P.h8(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.h9(u,t),{func:1,ret:-1})
W.a5(this.a,this.b,r,!1,s)
return t}}
P.h8.prototype={
$1:function(a){H.w(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.t(this.b,0)]}}}
P.h9.prototype={
$0:function(){this.b.dr(this.a.a)},
$S:2}
P.cq.prototype={}
P.h7.prototype={}
P.aY.prototype={}
P.ai.prototype={
i:function(a){return H.i(this.a)},
$ibi:1}
P.iK.prototype={$io0:1}
P.iS.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dF()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:2}
P.ij.prototype={
kW:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.V){a.$0()
return}P.kJ(null,null,this,a,-1)}catch(s){u=H.ah(s)
t=H.bZ(s)
P.iR(null,null,this,u,H.c(t,"$iat"))}},
kX:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.l===$.V){a.$1(b)
return}P.kK(null,null,this,a,b,-1,c)}catch(s){u=H.ah(s)
t=H.bZ(s)
P.iR(null,null,this,u,H.c(t,"$iat"))}},
jO:function(a,b){return new P.il(this,H.k(a,{func:1,ret:b}),b)},
cu:function(a){return new P.ik(this,H.k(a,{func:1,ret:-1}))},
e3:function(a,b){return new P.im(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
f5:function(a,b){H.k(a,{func:1,ret:b})
if($.V===C.l)return a.$0()
return P.kJ(null,null,this,a,b)},
d_:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.V===C.l)return a.$1(b)
return P.kK(null,null,this,a,b,c,d)},
kV:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.V===C.l)return a.$2(b,c)
return P.mV(null,null,this,a,b,c,d,e,f)}}
P.il.prototype={
$0:function(){return this.a.f5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ik.prototype={
$0:function(){return this.a.kW(this.b)},
$S:3}
P.im.prototype={
$1:function(a){var u=this.c
return this.a.kX(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ih.prototype={
gW:function(a){var u=new P.eg(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.c(u[b],"$ibS")!=null}else{t=this.hh(b)
return t}},
hh:function(a){var u=this.d
if(u==null)return!1
return this.c5(this.dC(u,a),a)>=0},
h:function(a,b){var u,t
H.w(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.js()
this.b=u}return this.dj(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.js()
this.c=t}return this.dj(t,b)}else return this.h4(b)},
h4:function(a){var u,t,s
H.w(a,H.t(this,0))
u=this.d
if(u==null){u=P.js()
this.d=u}t=this.dt(a)
s=u[t]
if(s==null)u[t]=[this.cj(a)]
else{if(this.c5(s,a)>=0)return!1
s.push(this.cj(a))}return!0},
a3:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iJ(this.c,b)
else return this.iG(b)},
iG:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dC(u,a)
s=this.c5(t,a)
if(s<0)return!1
this.dT(t.splice(s,1)[0])
return!0},
dj:function(a,b){H.w(b,H.t(this,0))
if(H.c(a[b],"$ibS")!=null)return!1
a[b]=this.cj(b)
return!0},
iJ:function(a,b){var u
if(a==null)return!1
u=H.c(a[b],"$ibS")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dH:function(){this.r=1073741823&this.r+1},
cj:function(a){var u,t
u=new P.bS(H.w(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dH()
return u},
dT:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dH()},
dt:function(a){return J.cZ(a)&1073741823},
dC:function(a,b){return a[this.dt(b)]},
c5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.bS.prototype={}
P.eg.prototype={
gH:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aR(u))
else{u=this.c
if(u==null){this.sdq(null)
return!1}else{this.sdq(H.w(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sdq:function(a){this.d=H.w(a,H.t(this,0))},
$iaS:1}
P.fp.prototype={
$2:function(a,b){this.a.p(0,H.w(a,this.b),H.w(b,this.c))},
$S:6}
P.fq.prototype={$in:1,$ia:1}
P.S.prototype={
gW:function(a){return new H.cb(a,this.gm(a),0,[H.cV(this,a,"S",0)])},
aa:function(a,b){return this.j(a,b)},
K:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.cV(this,a,"S",0)]})
u=this.gm(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gm(a))throw H.d(P.aR(a))}},
l4:function(a,b){var u,t
u=H.b([],[H.cV(this,a,"S",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.p(u,t,this.j(a,t))
return u},
l3:function(a){return this.l4(a,!0)},
kd:function(a,b,c,d){var u
H.w(d,H.cV(this,a,"S",0))
P.bo(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.p(a,u,d)},
i:function(a){return P.jg(a,"[","]")}}
P.fs.prototype={}
P.ft.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:6}
P.bK.prototype={
K:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.ab(this,"bK",0),H.ab(this,"bK",1)]})
for(u=J.bv(this.gax());u.w();){t=u.gH()
b.$2(t,this.j(0,t))}},
gm:function(a){return J.aG(this.gax())},
i:function(a){return P.jl(this)},
$iE:1}
P.iB.prototype={
p:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
throw H.d(P.a1("Cannot modify unmodifiable map"))}}
P.fu.prototype={
j:function(a,b){return this.a.j(0,b)},
p:function(a,b,c){this.a.p(0,H.w(b,H.t(this,0)),H.w(c,H.t(this,1)))},
K:function(a,b){this.a.K(0,H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.ap(this.a)},
$iE:1}
P.e3.prototype={}
P.ip.prototype={
as:function(a,b){var u
for(u=J.bv(H.j(b,"$in",this.$ti,"$an"));u.w();)this.h(0,u.gH())},
i:function(a){return P.jg(this,"{","}")},
aa:function(a,b){var u,t,s
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(u=P.mz(this,this.r,H.t(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.d(P.bF(b,this,"index",null,t))},
$in:1,
$ike:1}
P.eh.prototype={}
P.er.prototype={}
P.eD.prototype={
kx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.bo(b,c,a.length,null,null,null)
u=$.lh()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.F(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iX(C.c.F(a,n))
j=H.iX(C.c.F(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ae("")
g=r.a+=C.c.q(a,s,t)
r.a=g+H.bO(m)
s=n
continue}}throw H.d(P.a_("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.q(a,s,c)
f=g.length
if(q>=0)P.jP(a,p,c,q,o,f)
else{e=C.f.bj(f-1,4)+1
if(e===1)throw H.d(P.a_("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b0(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jP(a,p,c,q,o,d)
else{e=C.f.bj(d,4)
if(e===1)throw H.d(P.a_("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b0(a,c,c,e===2?"==":"=")}return a},
$aby:function(){return[[P.a,P.l],P.e]}}
P.eE.prototype={
$abf:function(){return[[P.a,P.l],P.e]}}
P.by.prototype={}
P.bf.prototype={}
P.eV.prototype={
$aby:function(){return[P.e,[P.a,P.l]]}}
P.f8.prototype={
i:function(a){return this.a}}
P.f7.prototype={
hi:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.ae("")
if(r>b)q.a+=C.c.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lu(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abf:function(){return[P.e,P.e]}}
P.hG.prototype={
gkc:function(){return C.S}}
P.hI.prototype={
ba:function(a,b,c){var u,t,s
c=P.bo(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iI(t)
if(s.ht(a,b,c)!==c)s.dW(J.lo(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mP(0,s.b,t.length)))},
cA:function(a){return this.ba(a,0,null)},
$abf:function(){return[P.e,[P.a,P.l]]}}
P.iI.prototype={
dW:function(a,b){var u,t,s,r,q
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
ht:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.F(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dW(r,C.c.F(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hH.prototype={
ba:function(a,b,c){var u,t,s,r
H.j(a,"$ia",[P.l],"$aa")
u=P.ml(!1,a,b,c)
if(u!=null)return u
c=P.bo(b,c,J.aG(a),null,null,null)
t=new P.ae("")
s=new P.iG(!1,t)
s.ba(a,b,c)
if(s.e>0){H.p(P.a_("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bO(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cA:function(a){return this.ba(a,0,null)},
$abf:function(){return[[P.a,P.l],P.e]}}
P.iG.prototype={
ba:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.j(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iH(this,b,c,a)
$label0$0:for(q=J.cT(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bU()
if((n&192)!==128){m=P.a_("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,o)
throw H.d(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.G,m)
if(u<=C.G[m]){m=P.a_("Overlong encoding of 0x"+C.f.bh(u,16),a,o-s-1)
throw H.d(m)}if(u>1114111){m=P.a_("Character outside valid Unicode range: 0x"+C.f.bh(u,16),a,o-s-1)
throw H.d(m)}if(!this.c||u!==65279)p.a+=H.bO(u)
this.c=!1}for(m=o<c;m;){l=P.mW(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a_("Negative UTF-8 code unit: -0x"+C.f.bh(-n,16),a,j-1)
throw H.d(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a_("Bad UTF-8 encoding 0x"+C.f.bh(n,16),a,j-1)
throw H.d(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iH.prototype={
$2:function(a,b){this.a.b.a+=P.dP(this.d,a,b)},
$S:50}
P.H.prototype={}
P.aj.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.f.aV(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lC(H.m4(this))
t=P.d8(H.m2(this))
s=P.d8(H.lZ(this))
r=P.d8(H.m_(this))
q=P.d8(H.m1(this))
p=P.d8(H.m3(this))
o=P.lD(H.m0(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.y.prototype={}
P.bh.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bh&&this.a===b.a},
gG:function(a){return C.f.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eS()
t=this.a
if(t<0)return"-"+new P.bh(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.eR().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.eR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.eS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bi.prototype={}
P.dF.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc4()+t+s
if(!this.a)return r
q=this.gc3()
p=P.eX(this.b)
return r+q+": "+p}}
P.bP.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.f9.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gm:function(a){return this.f}}
P.hA.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hx.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cp.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eX(u)+"."}}
P.fL.prototype={
i:function(a){return"Out of Memory"},
$ibi:1}
P.dO.prototype={
i:function(a){return"Stack Overflow"},
$ibi:1}
P.eO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ed.prototype={
i:function(a){return"Exception: "+this.a}}
P.f3.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.q(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.F(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a0(r,m)
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
g=""}f=C.c.q(r,i,j)
return t+h+f+g+"\n"+C.c.A(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.bj.prototype={}
P.l.prototype={}
P.n.prototype={
bS:function(a,b){var u=H.ab(this,"n",0)
return new H.cF(this,H.k(b,{func:1,ret:P.H,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gW(this)
for(t=0;u.w();)++t
return t},
gaN:function(a){var u,t
u=this.gW(this)
if(!u.w())throw H.d(H.jh())
t=u.gH()
if(u.w())throw H.d(H.lL())
return t},
aa:function(a,b){var u,t,s
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.w();){s=u.gH()
if(b===t)return s;++t}throw H.d(P.bF(b,this,"index",null,t))},
i:function(a){return P.lK(this,"(",")")}}
P.aS.prototype={}
P.a.prototype={$in:1}
P.E.prototype={}
P.B.prototype={
gG:function(a){return P.O.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ag.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
u:function(a,b){return this===b},
gG:function(a){return H.cj(this)},
i:function(a){return"Instance of '"+H.bN(this)+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.e.prototype={$ik6:1}
P.ae.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inB:1}
P.hF.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.j(a,"$iE",[u,u],"$aE")
H.D(b)
t=J.cU(b).eH(b,"=")
if(t===-1){if(b!=="")a.p(0,P.ju(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.q(b,0,t)
r=C.c.aq(b,t+1)
u=this.a
a.p(0,P.ju(s,0,s.length,u,!0),P.ju(r,0,r.length,u,!0))}return a},
$S:47}
P.hC.prototype={
$2:function(a,b){throw H.d(P.a_("Illegal IPv4 address, "+a,this.a,b))},
$S:46}
P.hD.prototype={
$2:function(a,b){throw H.d(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hE.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cW(C.c.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bT.prototype={
gfd:function(){return this.b},
gcM:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.q(u,1,u.length-1)
return u},
gbM:function(a){var u=this.d
if(u==null)return P.kB(this.a)
return u},
gcX:function(){var u=this.f
return u==null?"":u},
geC:function(){var u=this.r
return u==null?"":u},
cZ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.j(h,"$iE",[P.e,null],"$aE")
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
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.jt(g,0,0,h)
return new P.bT(i,j,c,f,d,g,this.r)},
f3:function(a,b){return this.cZ(a,null,null,null,null,null,null,b,null,null)},
gcY:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siF(new P.e3(P.ko(u==null?"":u,C.m),[t,t]))}return this.Q},
geD:function(){return this.c!=null},
geG:function(){return this.f!=null},
geE:function(){return this.r!=null},
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
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$ijo)if(this.a==b.gbX())if(this.c!=null===b.geD())if(this.b==b.gfd())if(this.gcM(this)==b.gcM(b))if(this.gbM(this)==b.gbM(b))if(this.e===b.geY(b)){u=this.f
t=u==null
if(!t===b.geG()){if(t)u=""
if(u===b.gcX()){u=this.r
t=u==null
if(!t===b.geE()){if(t)u=""
u=u===b.geC()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
if(u==null){u=C.c.gG(this.i(0))
this.z=u}return u},
siF:function(a){var u=P.e
this.Q=H.j(a,"$iE",[u,u],"$aE")},
$ijo:1,
gbX:function(){return this.a},
geY:function(a){return this.e}}
P.iC.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.E()
throw H.d(P.a_("Invalid port",this.a,u+1))},
$S:20}
P.iD.prototype={
$1:function(a){return P.es(C.a9,a,C.m,!1)},
$S:21}
P.iF.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.es(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.es(C.w,b,C.m,!0))}},
$S:39}
P.iE.prototype={
$2:function(a,b){var u,t
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(u=J.bv(H.kW(b,"$in")),t=this.a;u.w();)t.$2(a,H.D(u.gH()))},
$S:57}
P.hB.prototype={
gfc:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.c.eI(t,"?",u)
r=t.length
if(s>=0){q=P.cO(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.i0(this,"data",null,null,null,P.cO(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iO.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.iN.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.lp(u,0,96,b)
return u},
$S:35}
P.iP.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.F(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.iQ.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.F(b,0),t=C.c.F(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.is.prototype={
geD:function(){return this.c>0},
geF:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.E()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
geG:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geE:function(){return this.r<this.a.length},
gdF:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdG:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbX:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdF()){this.x="http"
u="http"}else if(this.gdG()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.q(this.a,0,u)
this.x=u}return u},
gfd:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.q(this.a,t,u-1):""},
gcM:function(a){var u=this.c
return u>0?C.c.q(this.a,u,this.d):""},
gbM:function(a){var u
if(this.geF()){u=this.d
if(typeof u!=="number")return u.E()
return P.cW(C.c.q(this.a,u+1,this.e),null,null)}if(this.gdF())return 80
if(this.gdG())return 443
return 0},
geY:function(a){return C.c.q(this.a,this.e,this.f)},
gcX:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.q(this.a,u+1,t):""},
geC:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aq(t,u+1):""},
gcY:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.aa
u=P.e
return new P.e3(P.ko(this.gcX(),C.m),[u,u])},
cZ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.j(h,"$iE",[P.e,null],"$aE")
i=this.gbX()
u=i==="file"
t=this.c
j=t>0?C.c.q(this.a,this.b+3,t):""
f=this.geF()?this.gbM(this):null
t=this.c
if(t>0)c=C.c.q(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.q(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.jt(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aq(t,s+1)
return new P.bT(i,j,c,f,d,g,b)},
f3:function(a,b){return this.cZ(a,null,null,null,null,null,null,b,null,null)},
gG:function(a){var u=this.y
if(u==null){u=C.c.gG(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ijo&&this.a===b.i(0)},
i:function(a){return this.a},
$ijo:1}
P.i0.prototype={}
W.v.prototype={}
W.d_.prototype={
i:function(a){return String(a)},
$id_:1}
W.eB.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.bb.prototype={$ibb:1}
W.bw.prototype={
bV:function(a,b,c){if(c!=null)return this.hu(a,b,P.n2(c,null))
return this.hv(a,b)},
fk:function(a,b){return this.bV(a,b,null)},
hu:function(a,b,c){return a.getContext(b,c)},
hv:function(a,b){return a.getContext(b)},
$ibw:1,
$ijS:1}
W.bx.prototype={
hw:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibx:1}
W.bd.prototype={
gm:function(a){return a.length}}
W.c6.prototype={
gm:function(a){return a.length}}
W.eN.prototype={}
W.az.prototype={$iaz:1}
W.c7.prototype={
jK:function(a,b){return a.adoptNode(b)},
d5:function(a,b){return a.getElementById(b)}}
W.eQ.prototype={
i:function(a){return String(a)}}
W.d9.prototype={
jX:function(a,b){return a.createHTMLDocument(b)}}
W.da.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cS(b,"$iaB",[P.ag],"$aaB"))return!1
u=J.a6(b)
return a.left===u.gbL(b)&&a.top===u.gbQ(b)&&a.width===u.gbT(b)&&a.height===u.gbK(b)},
gG:function(a){return W.kz(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
ge4:function(a){return a.bottom},
gbK:function(a){return a.height},
gbL:function(a){return a.left},
gbO:function(a){return a.right},
gbQ:function(a){return a.top},
gbT:function(a){return a.width},
$iaB:1,
$aaB:function(){return[P.ag]}}
W.i_.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.c(u[b],"$iI")},
p:function(a,b,c){var u
H.c(c,"$iI")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.j7(this.a,c,u[b])},
h:function(a,b){J.jM(this.a,b)
return b},
gW:function(a){var u=this.l3(this)
return new J.aq(u,u.length,0,[H.t(u,0)])},
$aS:function(){return[W.I]},
$an:function(){return[W.I]},
$aa:function(){return[W.I]}}
W.I.prototype={
gjN:function(a){return new W.i1(a)},
gcz:function(a){return new W.i_(a,a.children)},
ge7:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.aB(u,t,s,r,[P.ag])},
i:function(a){return a.localName},
ah:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jX
if(u==null){u=H.b([],[W.ax])
t=new W.dE(u)
C.a.h(u,W.ky(null))
C.a.h(u,W.kA())
$.jX=t
d=t}else d=u
u=$.jW
if(u==null){u=new W.et(d)
$.jW=u
c=u}else{u.a=d
c=u}}if($.b3==null){u=document
t=u.implementation
t=(t&&C.T).jX(t,"")
$.b3=t
$.je=t.createRange()
t=$.b3
t.toString
t=t.createElement("base")
H.c(t,"$ic2")
t.href=u.baseURI
u=$.b3.head;(u&&C.V).B(u,t)}u=$.b3
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.c(t,"$ibb")}u=$.b3
if(!!this.$ibb)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b3.body;(u&&C.p).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a7,a.tagName)){u=$.je;(u&&C.M).fs(u,s)
u=$.je
r=(u&&C.M).jV(u,b)}else{s.innerHTML=b
r=$.b3.createDocumentFragment()
for(u=J.a6(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.b3.body
if(s==null?u!=null:s!==u)J.jN(s)
c.d7(r)
C.z.jK(document,r)
return r},
jW:function(a,b,c){return this.ah(a,b,c,null)},
fv:function(a,b,c,d){a.textContent=null
this.B(a,this.ah(a,b,c,d))},
fu:function(a,b){return this.fv(a,b,null,null)},
b2:function(a,b){return a.getAttribute(b)},
iH:function(a,b){return a.removeAttribute(b)},
ft:function(a,b,c){return a.setAttribute(b,c)},
$iI:1,
gkY:function(a){return a.tagName}}
W.eU.prototype={
$1:function(a){return!!J.N(H.c(a,"$iz")).$iI},
$S:26}
W.m.prototype={$im:1}
W.bB.prototype={
h5:function(a,b,c,d){return a.addEventListener(b,H.bX(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibB:1}
W.f2.prototype={
gm:function(a){return a.length}}
W.df.prototype={}
W.dg.prototype={
iN:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bD.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bF(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iz")
throw H.d(P.a1("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.z]},
$aS:function(){return[W.z]},
$in:1,
$an:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$ibD:1,
$aau:function(){return[W.z]}}
W.dh.prototype={}
W.b4.prototype={$ib4:1,
ge8:function(a){return a.data}}
W.bE.prototype={$ibE:1,$ijS:1}
W.aU.prototype={$iaU:1}
W.dt.prototype={
i:function(a){return String(a)},
$idt:1}
W.ce.prototype={}
W.a0.prototype={$ia0:1}
W.ao.prototype={
gaN:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.d(P.kf("No elements"))
if(t>1)throw H.d(P.kf("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r,q
H.j(b,"$in",[W.z],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a6(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
p:function(a,b,c){var u,t
H.c(c,"$iz")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.j7(u,c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dd(u,u.length,-1,[H.cV(C.ab,u,"au",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$aS:function(){return[W.z]},
$an:function(){return[W.z]},
$aa:function(){return[W.z]}}
W.z.prototype={
kQ:function(a){var u=a.parentNode
if(u!=null)J.ey(u,a)},
kS:function(a,b){var u,t
try{u=a.parentNode
J.j7(u,b,a)}catch(t){H.ah(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fB(a):u},
B:function(a,b){return a.appendChild(H.c(b,"$iz"))},
iI:function(a,b){return a.removeChild(b)},
iM:function(a,b,c){return a.replaceChild(b,c)},
$iz:1}
W.ch.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bF(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iz")
throw H.d(P.a1("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.z]},
$aS:function(){return[W.z]},
$in:1,
$an:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aau:function(){return[W.z]}}
W.dK.prototype={
jV:function(a,b){return a.createContextualFragment(b)},
fs:function(a,b){return a.selectNodeContents(b)}}
W.fX.prototype={
gm:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.dQ.prototype={
ah:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=W.lE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ao(t).as(0,new W.ao(u))
return t},
hy:function(a,b){return a.insertRow(b)}}
W.dR.prototype={
ah:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.ao(u)
s=u.gaN(u)
s.toString
u=new W.ao(s)
r=u.gaN(u)
t.toString
r.toString
new W.ao(t).as(0,new W.ao(r))
return t},
dE:function(a,b){return a.insertCell(b)}}
W.ha.prototype={
ah:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.ao(u)
s=u.gaN(u)
t.toString
s.toString
new W.ao(t).as(0,new W.ao(s))
return t}}
W.cr.prototype={$icr:1}
W.aJ.prototype={$iaJ:1}
W.aK.prototype={$iaK:1}
W.hm.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bF(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iaJ")
throw H.d(P.a1("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.aJ]},
$aS:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]},
$ia:1,
$aa:function(){return[W.aJ]},
$aau:function(){return[W.aJ]}}
W.bp.prototype={}
W.hT.prototype={$ijS:1}
W.b0.prototype={
gk6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.a1("deltaY is not supported"))},
gk5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.a1("deltaX is not supported"))},
$ib0:1}
W.cG.prototype={
iO:function(a,b){return a.requestAnimationFrame(H.bX(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
hn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cH.prototype={$icH:1}
W.ec.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cS(b,"$iaB",[P.ag],"$aaB"))return!1
u=J.a6(b)
return a.left===u.gbL(b)&&a.top===u.gbQ(b)&&a.width===u.gbT(b)&&a.height===u.gbK(b)},
gG:function(a){return W.kz(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gbK:function(a){return a.height},
gbT:function(a){return a.width}}
W.ei.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bF(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.c(c,"$iz")
throw H.d(P.a1("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.z]},
$aS:function(){return[W.z]},
$in:1,
$an:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aau:function(){return[W.z]}}
W.hZ.prototype={
K:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gax(),t=u.length,s=this.a,r=J.a6(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.b2(s,p))}},
gax:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.c(u[r],"$icH")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abK:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.i1.prototype={
j:function(a,b){return J.j8(this.a,H.D(b))},
p:function(a,b,c){J.lt(this.a,b,c)},
gm:function(a){return this.gax().length}}
W.i2.prototype={}
W.jr.prototype={}
W.i3.prototype={}
W.i4.prototype={
$1:function(a){return this.a.$1(H.c(a,"$im"))},
$S:33}
W.bq.prototype={
fP:function(a){var u,t
u=$.jL()
if(u.gkp(u)){for(t=0;t<262;++t)u.p(0,C.a6[t],W.na())
for(t=0;t<12;++t)u.p(0,C.B[t],W.nb())}},
aW:function(a){return $.li().Y(0,W.c8(a))},
at:function(a,b,c){var u,t,s
u=W.c8(a)
t=$.jL()
s=t.j(0,H.i(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.jz(s.$4(a,b,c,this))},
$iax:1}
W.au.prototype={
gW:function(a){return new W.dd(a,this.gm(a),-1,[H.cV(this,a,"au",0)])}}
W.dE.prototype={
aW:function(a){return C.a.e1(this.a,new W.fJ(a))},
at:function(a,b,c){return C.a.e1(this.a,new W.fI(a,b,c))},
$iax:1}
W.fJ.prototype={
$1:function(a){return H.c(a,"$iax").aW(this.a)},
$S:27}
W.fI.prototype={
$1:function(a){return H.c(a,"$iax").at(this.a,this.b,this.c)},
$S:27}
W.el.prototype={
h_:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bS(0,new W.iq())
t=b.bS(0,new W.ir())
this.b.as(0,u)
s=this.c
s.as(0,C.H)
s.as(0,t)},
aW:function(a){return this.a.Y(0,W.c8(a))},
at:function(a,b,c){var u,t
u=W.c8(a)
t=this.c
if(t.Y(0,H.i(u)+"::"+b))return this.d.jL(c)
else if(t.Y(0,"*::"+b))return this.d.jL(c)
else{t=this.b
if(t.Y(0,H.i(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.i(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iax:1}
W.iq.prototype={
$1:function(a){return!C.a.Y(C.B,H.D(a))},
$S:28}
W.ir.prototype={
$1:function(a){return C.a.Y(C.B,H.D(a))},
$S:28}
W.ix.prototype={
at:function(a,b,c){if(this.fG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j8(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.D(a))},
$S:21}
W.iw.prototype={
aW:function(a){var u=J.N(a)
if(!!u.$ick)return!1
u=!!u.$io
if(u&&W.c8(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aW(a)},
$iax:1}
W.dd.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdD(J.ll(this.a,u))
this.c=u
return!0}this.sdD(null)
this.c=t
return!1},
gH:function(){return this.d},
sdD:function(a){this.d=H.w(a,H.t(this,0))},
$iaS:1}
W.ax.prototype={}
W.io.prototype={$inN:1}
W.et.prototype={
d7:function(a){new W.iJ(this).$2(a,null)},
b8:function(a,b){if(b==null)J.jN(a)
else J.ey(b,a)},
iT:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lq(a)
s=J.j8(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ah(o)}q="element unprintable"
try{q=J.ap(a)}catch(o){H.ah(o)}try{p=W.c8(a)
this.iS(H.c(a,"$iI"),b,u,q,p,H.c(t,"$iE"),H.D(s))}catch(o){if(H.ah(o) instanceof P.aH)throw o
else{this.b8(a,b)
window
n="Removing corrupted element "+H.i(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b8(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aW(a)){this.b8(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.at(a,"is",g)){this.b8(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gax()
t=H.b(u.slice(0),[H.t(u,0)])
for(s=f.gax().length-1,u=f.a,r=J.a6(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.at(a,J.lv(q),r.b2(u,q))){window
p="Removing disallowed attribute <"+H.i(e)+" "+q+'="'+H.i(r.b2(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b2(u,q)
r.iH(u,q)}}if(!!J.N(a).$icr)this.d7(a.content)},
$inz:1}
W.iJ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iT(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b8(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ah(r)
q=H.c(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.ey(p,q)}else J.ey(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.c(t,"$iz")}},
$S:32}
W.eb.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
P.it.prototype={
ez:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
d3:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.N(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$im9)throw H.d(P.hy("structured clone of RegExp"))
if(!!t.$ib4)return a
if(!!t.$ibL)return a
if(!!t.$iE){s=this.ez(a)
t=this.b
if(s>=t.length)return H.f(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.p(t,s,r)
a.K(0,new P.iv(u,this))
return u.a}if(!!t.$ia){s=this.ez(a)
u=this.b
if(s>=u.length)return H.f(u,s)
r=u[s]
if(r!=null)return r
return this.jU(a,s)}throw H.d(P.hy("structured clone of other type"))},
jU:function(a,b){var u,t,s,r
u=J.cT(a)
t=u.gm(a)
s=new Array(t)
C.a.p(this.b,b,s)
for(r=0;r<t;++r)C.a.p(s,r,this.d3(u.j(a,r)))
return s}}
P.iv.prototype={
$2:function(a,b){this.a.a[a]=this.b.d3(b)},
$S:6}
P.eq.prototype={$ib4:1,
ge8:function(a){return this.a}}
P.iU.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.iu.prototype={}
P.f_.prototype={
gb5:function(){var u,t,s
u=this.b
t=H.ab(u,"S",0)
s=W.I
return new H.fv(new H.cF(u,H.k(new P.f0(),{func:1,ret:P.H,args:[t]}),[t]),H.k(new P.f1(),{func:1,ret:s,args:[t]}),[t,s])},
K:function(a,b){H.k(b,{func:1,ret:-1,args:[W.I]})
C.a.K(P.k2(this.gb5(),!1,W.I),b)},
p:function(a,b,c){var u
H.c(c,"$iI")
u=this.gb5()
J.ls(u.b.$1(J.ez(u.a,b)),c)},
h:function(a,b){J.jM(this.b.a,b)},
gm:function(a){return J.aG(this.gb5().a)},
j:function(a,b){var u=this.gb5()
return u.b.$1(J.ez(u.a,b))},
gW:function(a){var u=P.k2(this.gb5(),!1,W.I)
return new J.aq(u,u.length,0,[H.t(u,0)])},
$aS:function(){return[W.I]},
$an:function(){return[W.I]},
$aa:function(){return[W.I]}}
P.f0.prototype={
$1:function(a){return!!J.N(H.c(a,"$iz")).$iI},
$S:26}
P.f1.prototype={
$1:function(a){return H.h(H.c(a,"$iz"),"$iI")},
$S:30}
P.ii.prototype={
gbO:function(a){var u=this.a
if(typeof u!=="number")return u.E()
return H.w(u+this.c,H.t(this,0))},
ge4:function(a){var u=this.b
if(typeof u!=="number")return u.E()
return H.w(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cS(b,"$iaB",[P.ag],"$aaB")){u=this.a
t=J.a6(b)
if(u==t.gbL(b)){s=this.b
if(s==t.gbQ(b)){if(typeof u!=="number")return u.E()
r=H.t(this,0)
if(H.w(u+this.c,r)===t.gbO(b)){if(typeof s!=="number")return s.E()
u=H.w(s+this.d,r)===t.ge4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.cZ(u)
s=this.b
r=J.cZ(s)
if(typeof u!=="number")return u.E()
q=H.t(this,0)
u=C.f.gG(H.w(u+this.c,q))
if(typeof s!=="number")return s.E()
q=C.f.gG(H.w(s+this.d,q))
return P.my(P.ig(P.ig(P.ig(P.ig(0,t),r),u),q))}}
P.aB.prototype={
gbL:function(a){return this.a},
gbQ:function(a){return this.b},
gbT:function(a){return this.c},
gbK:function(a){return this.d}}
P.ck.prototype={$ick:1}
P.o.prototype={
gcz:function(a){return new P.f_(a,new W.ao(a))},
ah:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ax])
C.a.h(u,W.ky(null))
C.a.h(u,W.kA())
C.a.h(u,new W.iw())
c=new W.et(new W.dE(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jW(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ao(r)
p=u.gaN(u)
for(u=J.a6(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$io:1}
P.K.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]},
$imi:1}
P.d2.prototype={$id2:1}
P.de.prototype={$ide:1}
P.dJ.prototype={$idJ:1}
P.bQ.prototype={
dX:function(a,b){return a.activeTexture(b)},
e2:function(a,b,c){return a.attachShader(b,c)},
au:function(a,b,c){return a.bindBuffer(b,c)},
jP:function(a,b,c){return a.bindFramebuffer(b,c)},
aX:function(a,b,c){return a.bindTexture(b,c)},
aH:function(a,b,c){return a.blendFunc(b,c)},
e5:function(a,b,c,d){return a.bufferData(b,c,d)},
jQ:function(a,b){return a.clear(b)},
jR:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jS:function(a,b){return a.clearDepth(b)},
jT:function(a,b){return a.compileShader(b)},
jY:function(a,b){return a.createShader(b)},
k_:function(a,b){return a.deleteProgram(b)},
k0:function(a,b){return a.deleteShader(b)},
k7:function(a,b){return a.depthFunc(b)},
cE:function(a,b){return a.disable(b)},
ea:function(a,b){return a.disableVertexAttribArray(b)},
k8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
av:function(a,b){return a.enable(b)},
ec:function(a,b){return a.enableVertexAttribArray(b)},
ff:function(a,b){return a.generateMipmap(b)},
fg:function(a,b,c){return a.getActiveAttrib(b,c)},
fh:function(a,b,c){return a.getActiveUniform(b,c)},
fi:function(a,b,c){return a.getAttribLocation(b,c)},
d6:function(a,b){return a.getParameter(b)},
fl:function(a,b){return a.getProgramInfoLog(b)},
bW:function(a,b,c){return a.getProgramParameter(b,c)},
fm:function(a,b){return a.getShaderInfoLog(b)},
fn:function(a,b,c){return a.getShaderParameter(b,c)},
fo:function(a,b,c){return a.getUniformLocation(b,c)},
kr:function(a,b){return a.linkProgram(b)},
kO:function(a,b,c){return a.pixelStorei(b,c)},
fz:function(a,b,c){return a.shaderSource(b,c)},
l_:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.N(g)
if(!!u.$ib4)t=!0
else t=!1
if(t){this.j5(a,b,c,d,e,f,P.n3(g))
return}if(!!u.$ibE)u=!0
else u=!1
if(u){this.j6(a,b,c,d,e,f,g)
return}throw H.d(P.d0("Incorrect number or type of arguments"))},
kZ:function(a,b,c,d,e,f,g){return this.l_(a,b,c,d,e,f,g,null,null,null)},
j5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bP:function(a,b,c,d){return a.texParameteri(b,c,d)},
N:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
l6:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fa:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fb:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d2:function(a,b){return a.useProgram(b)},
l7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibQ:1}
P.dM.prototype={$idM:1}
P.dT.prototype={$idT:1}
P.e1.prototype={$ie1:1}
O.Y.prototype={
c0:function(a){this.shC(H.b([],[a]))
this.sdL(null)
this.sdI(null)
this.sdM(null)},
d8:function(a,b,c){var u=H.ab(this,"Y",0)
H.k(b,{func:1,ret:P.H,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdL(b)
this.sdI(a)
this.sdM(c)},
bl:function(a,b){return this.d8(a,null,b)},
iq:function(a){var u
H.j(a,"$in",[H.ab(this,"Y",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fM:function(a,b){var u
H.j(b,"$in",[H.ab(this,"Y",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.aq(u,u.length,0,[H.t(u,0)])},
aa:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ab(this,"Y",0)
H.w(b,u)
u=[u]
if(this.iq(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fM(s,H.b([b],u))}},
shC:function(a){this.a=H.j(a,"$ia",[H.ab(this,"Y",0)],"$aa")},
sdL:function(a){this.b=H.k(a,{func:1,ret:P.H,args:[[P.n,H.ab(this,"Y",0)]]})},
sdI:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"Y",0)]]})},
sdM:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.ab(this,"Y",0)]]})},
$in:1}
O.cd.prototype={
gm:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.M()
this.b=u}return u},
fN:function(a){var u=this.b
if(u!=null)u.J(a)},
aO:function(){return this.fN(null)},
ga1:function(){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.dz()},
f0:function(a){var u=this.a
if(a==null)C.a.h(u,V.dz())
else C.a.h(u,a)
this.aO()},
cW:function(){var u=this.a
if(u.length>0){u.pop()
this.aO()}},
sc9:function(a){this.a=H.j(a,"$ia",[V.al],"$aa")}}
E.eF.prototype={}
E.ak.prototype={
dn:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.t(u,0)]);u.w();){t=u.d
if(t.f==null)t.dn()}},
sbY:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().a3(0,this.geS())
t=this.c
if(t!=null)t.gv().h(0,this.geS())
s=new D.F("shape",u,this.c,this,[F.aa])
s.b=!0
this.ae(s)}},
sd0:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().a3(0,this.geU())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.geU())
this.dn()
s=new D.F("technique",t,this.f,this,[O.bR])
s.b=!0
this.ae(s)}},
sbc:function(a){var u,t
if(!J.T(this.r,a)){u=this.r
if(u!=null)u.gv().a3(0,this.geQ())
if(a!=null)a.gv().h(0,this.geQ())
this.r=a
t=new D.F("mover",u,a,this,[U.a7])
t.b=!0
this.ae(t)}},
ap:function(a){var u,t,s,r
u=this.r
t=u!=null?u.b1(a,this):null
if(!J.T(t,this.x)){s=this.x
this.x=t
r=new D.F("matrix",s,t,this,[V.al])
r.b=!0
this.ae(r)}u=this.f
if(u!=null)u.ap(a)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.t(u,0)]);u.w();)u.d.ap(a)},
aK:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1())
else C.a.h(u.a,t.A(0,u.ga1()))
u.aO()
a.f1(this.f)
u=a.dy
s=(u&&C.a).gay(u)
if(s!=null&&this.d!=null)s.f2(a,this)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.t(u,0)]);u.w();)u.d.aK(a)
a.eZ()
a.dx.cW()},
gv:function(){var u=this.z
if(u==null){u=D.M()
this.z=u}return u},
ae:function(a){var u=this.z
if(u!=null)u.J(a)},
a2:function(){return this.ae(null)},
eT:function(a){H.c(a,"$ix")
this.e=null
this.ae(a)},
kE:function(){return this.eT(null)},
eV:function(a){this.ae(H.c(a,"$ix"))},
kF:function(){return this.eV(null)},
eR:function(a){this.ae(H.c(a,"$ix"))},
kD:function(){return this.eR(null)},
eP:function(a){this.ae(H.c(a,"$ix"))},
kA:function(){return this.eP(null)},
kz:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$in",[E.ak],"$an")
for(u=b.length,t=this.geO(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bA()
o.sal(null)
o.sb6(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sal(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
kC:function(a,b){var u,t
H.j(b,"$in",[E.ak],"$an")
for(u=b.gW(b),t=this.geO();u.w();)u.gH().gv().a3(0,t)
this.a2()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfO:function(a,b){this.y=H.j(b,"$iY",[E.ak],"$aY")},
$ib6:1}
E.fS.prototype={
fJ:function(a,b){var u,t
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
u=new O.cd()
t=[V.al]
u.sc9(H.b([],t))
u.b=null
u.gv().h(0,new E.fT(this))
this.cy=u
u=new O.cd()
u.sc9(H.b([],t))
u.b=null
u.gv().h(0,new E.fU(this))
this.db=u
u=new O.cd()
u.sc9(H.b([],t))
u.b=null
u.gv().h(0,new E.fV(this))
this.dx=u
this.sj4(H.b([],[O.bR]))
u=this.dy;(u&&C.a).h(u,null)
this.sj0(new H.aA([P.e,A.cl]))},
gkP:function(){var u=this.z
if(u==null){u=this.cy.ga1().A(0,this.db.ga1())
this.z=u}return u},
gf_:function(){var u=this.ch
if(u==null){u=this.gkP().A(0,this.dx.ga1())
this.ch=u}return u},
gfe:function(){var u=this.cx
if(u==null){u=this.db.ga1().A(0,this.dx.ga1())
this.cx=u}return u},
f1:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
eZ:function(){var u=this.dy
if(u.length>1)u.pop()},
e0:function(a){var u=a.b
if(u.length===0)throw H.d(P.q("May not cache a shader with no name."))
if(this.fr.bt(u))throw H.d(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.p(0,u,a)},
sj4:function(a){this.dy=H.j(a,"$ia",[O.bR],"$aa")},
sj0:function(a){this.fr=H.j(a,"$iE",[P.e,A.cl],"$aE")}}
E.fT.prototype={
$1:function(a){var u
H.c(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.fU.prototype={
$1:function(a){var u
H.c(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.fV.prototype={
$1:function(a){var u
H.c(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dY.prototype={
df:function(a){H.c(a,"$ix")
this.f4()},
de:function(){return this.df(null)},
gkk:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.jV(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
dP:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.C(u)
s=C.j.cL(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.j.cL(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ki(C.y,this.gkT())}},
f4:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hi(this),{func:1,ret:-1,args:[P.ag]})
C.O.hn(u)
C.O.iO(u,W.kO(t,P.ag))}},
kR:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dP()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.jV(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aO()
r=s.db
C.a.sm(r.a,0)
r.aO()
r=s.dx
C.a.sm(r.a,0)
r.aO()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aK(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ah(q)
t=H.bZ(q)
P.jH("Error: "+H.i(u))
P.jH("Stack: "+H.i(t))
throw H.d(u)}}}
E.hi.prototype={
$1:function(a){var u
H.nk(a)
u=this.a
if(u.ch){u.ch=!1
u.kR()}},
$S:31}
Z.e8.prototype={$int:1}
Z.d3.prototype={
aF:function(a){var u,t,s
try{t=a.a
C.b.ec(t,this.e)
C.b.l7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ah(s)
t=P.q('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.e9.prototype={$inu:1}
Z.bc.prototype={
ai:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aF:function(a){var u,t
u=this.a
C.b.au(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aF(a)},
f9:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ea(s,u[t].e)
C.b.au(s,this.a.a,null)},
aK:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.au(t,p,r.b)
C.b.k8(t,q.a,q.b,5123,0)
C.b.au(t,p,null)}},
eW:function(a){this.aF(a)
this.aK(a)
this.f9(a)},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ap(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shx:function(a){this.b=H.j(a,"$ia",[Z.bk],"$aa")},
$imf:1}
Z.d4.prototype={
shH:function(a){this.a=H.j(a,"$iE",[P.e,Z.bc],"$aE")},
$imf:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bN(this.c)+"'")+"]"}}
Z.aM.prototype={
gd9:function(a){var u,t
u=this.a
t=(u&$.aP().a)!==0?3:0
if((u&$.aO().a)!==0)t+=3
if((u&$.aN().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=2
if((u&$.ba().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=3
if((u&$.cX().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.b8().a)!==0?t+4:t},
jM:function(a){var u,t,s
u=$.aP()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aN()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b8()
if((t&u.a)!==0)if(s===a)return u
return $.lg()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aM))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.e])
t=this.a
if((t&$.aP().a)!==0)C.a.h(u,"Pos")
if((t&$.aO().a)!==0)C.a.h(u,"Norm")
if((t&$.aN().a)!==0)C.a.h(u,"Binm")
if((t&$.b9().a)!==0)C.a.h(u,"Txt2D")
if((t&$.ba().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bu().a)!==0)C.a.h(u,"Clr3")
if((t&$.cX().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.b8().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eI.prototype={}
D.bA.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.k(b,u)
if(this.a==null)this.sal(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a3:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.a
t=(u&&C.a).a3(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.b
t=(u&&C.a).a3(u,b)||t}return t},
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
if(a==null){a=new D.x(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.K(t,new D.eY(u))
t=this.b
if(t!=null)C.a.K(t,new D.eZ(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
ka:function(){return this.J(null)},
kU:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
aM:function(){return this.kU(!0,!1)},
sal:function(a){this.a=H.j(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")},
sb6:function(a){this.b=H.j(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")}}
D.eY.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.eZ.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.x.prototype={}
D.bG.prototype={}
D.bH.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.d5.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dq.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fl.prototype={
kL:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kH:function(a){this.c=a.b
this.d.a3(0,a.a)
return!1},
siE:function(a){this.d=H.j(a,"$ike",[P.l],"$ake")}}
X.du.prototype={}
X.fr.prototype={
b4:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.ad(t.a+s*r,t.b+q*p)
p=this.a.gaZ()
n=new X.b5(a,V.bn(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cV:function(a,b){this.r=a.a
return!1},
be:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fq()
if(typeof u!=="number")return u.bU()
this.r=(u&~t)>>>0
return!1},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b4(a,b))
return!0},
kM:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaZ()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.cf(new V.P(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.J(r)
return!0},
ic:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.du(c,a,this.a.gaZ(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bn()}}
X.aw.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b5.prototype={}
X.fD.prototype={
c6:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gaZ()
s=new X.b5(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c6(a,b,!0))
return!0},
be:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fq()
if(typeof u!=="number")return u.bU()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c6(a,b,!0))
return!0},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c6(a,b,!1))
return!0},
kN:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaZ()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.cf(new V.P(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.J(s)
return!0},
geb:function(){var u=this.b
if(u==null){u=D.M()
this.b=u}return u},
gbR:function(){var u=this.c
if(u==null){u=D.M()
this.c=u}return u},
geM:function(){var u=this.d
if(u==null){u=D.M()
this.d=u}return u}}
X.cf.prototype={}
X.fO.prototype={}
X.e_.prototype={}
X.hl.prototype={
b4:function(a,b){var u,t,s,r
H.j(a,"$ia",[V.ad],"$aa")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.bn()
s=this.a.gaZ()
r=new X.e_(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kK:function(a){var u
H.j(a,"$ia",[V.ad],"$aa")
u=this.b
if(u==null)return!1
u.J(this.b4(a,!0))
return!0},
kI:function(a){var u
H.j(a,"$ia",[V.ad],"$aa")
u=this.c
if(u==null)return!1
u.J(this.b4(a,!0))
return!0},
kJ:function(a){var u
H.j(a,"$ia",[V.ad],"$aa")
u=this.d
if(u==null)return!1
u.J(this.b4(a,!1))
return!0}}
X.e4.prototype={
gaZ:function(){var u=this.a
return V.kc(0,0,C.q.ge7(u).c,C.q.ge7(u).d)},
dw:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dq(u,new X.aw(t,a.altKey,a.shiftKey))},
aU:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aw(t,a.altKey,a.shiftKey)},
cq:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aw(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.L()
q=u.top
if(typeof s!=="number")return s.L()
return new V.ad(t-r,s-q)},
b7:function(a){return new V.P(a.movementX,a.movementY)},
cm:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.ad])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.j.ao(p.pageX)
C.j.ao(p.pageY)
n=u.left
C.j.ao(p.pageX)
C.a.h(t,new V.ad(o-n,C.j.ao(p.pageY)-u.top))}return t},
aA:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d5(u,new X.aw(t,a.altKey,a.shiftKey))},
ca:function(a){var u,t,s,r,q,p
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
i6:function(a){this.f=!0},
hV:function(a){this.f=!1},
i0:function(a){H.c(a,"$ia0")
if(this.f&&this.ca(a))a.preventDefault()},
ia:function(a){var u
H.c(a,"$iaU")
if(!this.f)return
u=this.dw(a)
this.b.kL(u)},
i8:function(a){var u
H.c(a,"$iaU")
if(!this.f)return
u=this.dw(a)
this.b.kH(u)},
ig:function(a){var u,t,s,r
H.c(a,"$ia0")
u=this.a
u.focus()
this.f=!0
this.aU(a)
if(this.x){t=this.aA(a)
s=this.b7(a)
if(this.d.cV(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aA(a)
r=this.aD(a)
if(this.c.cV(t,r))a.preventDefault()},
ik:function(a){var u,t,s
H.c(a,"$ia0")
this.aU(a)
u=this.aA(a)
if(this.x){t=this.b7(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.be(u,s))a.preventDefault()},
i4:function(a){var u,t,s
H.c(a,"$ia0")
if(!this.ca(a)){this.aU(a)
u=this.aA(a)
if(this.x){t=this.b7(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.be(u,s))a.preventDefault()}},
ii:function(a){var u,t,s
H.c(a,"$ia0")
this.aU(a)
u=this.aA(a)
if(this.x){t=this.b7(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.bd(u,s))a.preventDefault()},
i2:function(a){var u,t,s
H.c(a,"$ia0")
if(!this.ca(a)){this.aU(a)
u=this.aA(a)
if(this.x){t=this.b7(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.bd(u,s))a.preventDefault()}},
im:function(a){var u,t
H.c(a,"$ib0")
this.aU(a)
u=new V.P((a&&C.N).gk5(a),C.N.gk6(a)).D(0,180)
if(this.x){if(this.d.kM(u))a.preventDefault()
return}if(this.r)return
t=this.aD(a)
if(this.c.kN(u,t))a.preventDefault()},
ip:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aA(this.y)
s=this.aD(this.y)
this.d.ic(t,s,u)}},
iC:function(a){var u
H.c(a,"$iaK")
this.a.focus()
this.f=!0
this.cq(a)
u=this.cm(a)
if(this.e.kK(u))a.preventDefault()},
iy:function(a){var u
H.c(a,"$iaK")
this.cq(a)
u=this.cm(a)
if(this.e.kI(u))a.preventDefault()},
iA:function(a){var u
H.c(a,"$iaK")
this.cq(a)
u=this.cm(a)
if(this.e.kJ(u))a.preventDefault()},
sho:function(a){this.z=H.j(a,"$ia",[[P.cq,P.O]],"$aa")}}
D.bg.prototype={
gv:function(){var u=this.d
if(u==null){u=D.M()
this.d=u}return u},
az:function(a){var u
H.c(a,"$ix")
u=this.d
if(u!=null)u.J(a)},
fS:function(){return this.az(null)},
$ia3:1,
$ib6:1}
D.a3.prototype={$ib6:1}
D.dr.prototype={
gv:function(){var u=this.Q
if(u==null){u=D.M()
this.Q=u}return u},
az:function(a){var u=this.Q
if(u!=null)u.J(a)},
dK:function(a){var u
H.c(a,"$ix")
u=this.ch
if(u!=null)u.J(a)},
ib:function(){return this.dK(null)},
is:function(a){var u,t,s
H.j(a,"$in",[D.a3],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fQ(s))return!1}return!0},
hP:function(a,b){var u,t,s,r,q,p,o,n
u=D.a3
H.j(b,"$in",[u],"$an")
for(t=b.length,s=this.gdJ(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.c(b[p],"$ia3")
if(o instanceof D.bg)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bA()
n.sal(null)
n.sb6(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bG(a,b,this,[u])
u.b=!0
this.az(u)},
iw:function(a,b){var u,t,s,r
u=D.a3
H.j(b,"$in",[u],"$an")
for(t=b.gW(b),s=this.gdJ();t.w();){r=t.gH()
C.a.a3(this.e,r)
r.gv().a3(0,s)}u=new D.bH(a,b,this,[u])
u.b=!0
this.az(u)},
fQ:function(a){var u=C.a.Y(this.e,a)
return u},
shm:function(a){this.e=H.j(a,"$ia",[D.bg],"$aa")},
siD:function(a){this.f=H.j(a,"$ia",[D.dH],"$aa")},
sj2:function(a){this.r=H.j(a,"$ia",[D.dN],"$aa")},
sjf:function(a){this.x=H.j(a,"$ia",[D.dV],"$aa")},
sjg:function(a){this.y=H.j(a,"$ia",[D.dW],"$aa")},
sjh:function(a){this.z=H.j(a,"$ia",[D.dX],"$aa")},
$an:function(){return[D.a3]},
$aY:function(){return[D.a3]}}
D.dH.prototype={$ia3:1,$ib6:1}
D.dN.prototype={$ia3:1,$ib6:1}
D.dV.prototype={$ia3:1,$ib6:1}
D.dW.prototype={$ia3:1,$ib6:1}
D.dX.prototype={$ia3:1,$ib6:1}
V.a4.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.Z.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}}
V.eW.prototype={}
V.dy.prototype={
a7:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
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
u=[P.y]
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
V.al.prototype={
a7:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return u},
eK:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.L().a)return V.dz()
a8=1/a7
a9=-r
b0=-d
return V.aW((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aW(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
d1:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Q(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bi:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ay(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
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
eB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.y]
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
O:function(){return this.eB("",3,0)},
C:function(a){return this.eB(a,3,0)}}
V.ad.prototype={
L:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.ay.prototype={
E:function(a,b){return new V.ay(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.ay(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.dI.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dI))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}}
V.dL.prototype={
gad:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}}
V.P.prototype={
cP:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.C(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.C(r)
return u*t+s*r},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.P(u*b,t*b)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.kp
if(u==null){u=new V.P(0,0)
$.kp=u}return u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.P(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.L()
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
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.Q.prototype={
cP:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cQ:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bb:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.Q(-this.a,-this.b,-this.c)},
D:function(a,b){if(Math.abs(b-0)<$.L().a)return V.b_()
return new V.Q(this.a/b,this.b/b,this.c/b)},
eL:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.eJ.prototype={
c2:function(a){var u=V.ns(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.M()
this.y=u}return u},
R:function(a){var u=this.y
if(u!=null)u.J(a)},
sd4:function(a,b){},
scS:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.L().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c2(t)}u=new D.F("maximumLocation",u,this.b,this,[P.y])
u.b=!0
this.R(u)}},
scU:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c2(t)}u=new D.F("minimumLocation",u,this.c,this,[P.y])
u.b=!0
this.R(u)}},
sac:function(a,b){var u
b=this.c2(b)
u=this.d
if(!(Math.abs(u-b)<$.L().a)){this.d=b
u=new D.F("location",u,b,this,[P.y])
u.b=!0
this.R(u)}},
scT:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.L().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.F("maximumVelocity",u,a,this,[P.y])
u.b=!0
this.R(u)}},
sX:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.L().a)){this.f=a
u=new D.F("velocity",u,a,this,[P.y])
u.b=!0
this.R(u)}},
scC:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.F("dampening",u,a,this,[P.y])
u.b=!0
this.R(u)}},
ap:function(a){var u,t,s,r,q
u=this.f
t=$.L().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sac(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.L().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sX(s)}}}
U.d7.prototype={
gv:function(){var u=this.b
if(u==null){u=D.M()
this.b=u}return u},
b1:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.ca.prototype={
gv:function(){var u=this.e
if(u==null){u=D.M()
this.e=u}return u},
R:function(a){var u
H.c(a,"$ix")
u=this.e
if(u!=null)u.J(a)},
a8:function(){return this.R(null)},
hN:function(a,b){var u,t,s,r,q,p,o,n
u=U.a7
H.j(b,"$in",[u],"$an")
for(t=b.length,s=this.gaP(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bG(a,b,this,[u])
u.b=!0
this.R(u)},
iu:function(a,b){var u,t,s
u=U.a7
H.j(b,"$in",[u],"$an")
for(t=b.gW(b),s=this.gaP();t.w();)t.gH().gv().a3(0,s)
u=new D.bH(a,b,this,[u])
u.b=!0
this.R(u)},
b1:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aq(u,u.length,0,[H.t(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.b1(a,b)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.dz():s
u=this.e
if(u!=null)u.aM()}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ca))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.a7]},
$aY:function(){return[U.a7]},
$ia7:1}
U.a7.prototype={}
U.e5.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.M()
this.cy=u}return u},
R:function(a){var u
H.c(a,"$ix")
u=this.cy
if(u!=null)u.J(a)},
a8:function(){return this.R(null)},
b9:function(a){if(this.a!=null)return!1
this.a=a
a.c.geb().h(0,this.gcb())
this.a.c.geM().h(0,this.gcd())
this.a.c.gbR().h(0,this.gcf())
return!0},
cc:function(a){H.c(a,"$ix")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ce:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$ix"),"$ib5")
if(!this.y)return
if(this.x){u=a.d.L(0,a.y)
u=new V.P(u.a,u.b)
u=u.I(u)
t=this.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.L(0,a.y)
u=new V.P(t.a,t.b).A(0,2).D(0,u.gad())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.C(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.P(s.a,s.b).A(0,2).D(0,u.gad())
s=this.b
q=r.a
if(typeof q!=="number")return q.T()
p=this.e
if(typeof p!=="number")return H.C(p)
o=this.z
if(typeof o!=="number")return H.C(o)
s.sac(0,-q*p+o)
this.b.sX(0)
t=t.L(0,a.z)
this.Q=new V.P(t.a,t.b).A(0,2).D(0,u.gad())}this.a8()},
cg:function(a){var u,t,s
H.c(a,"$ix")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.I(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.C(s)
u.sX(t*10*s)
this.a8()}},
b1:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.ch=t
s=a.y
this.b.ap(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia7:1}
U.e6.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.M()
this.fx=u}return u},
R:function(a){var u
H.c(a,"$ix")
u=this.fx
if(u!=null)u.J(a)},
a8:function(){return this.R(null)},
b9:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geb().h(0,this.gcb())
this.a.c.geM().h(0,this.gcd())
this.a.c.gbR().h(0,this.gcf())
u=this.a.d
t=u.f
if(t==null){t=D.M()
u.f=t
u=t}else u=t
u.h(0,this.ghD())
u=this.a.d
t=u.d
if(t==null){t=D.M()
u.d=t
u=t}else u=t
u.h(0,this.ghF())
u=this.a.e
t=u.b
if(t==null){t=D.M()
u.b=t
u=t}else u=t
u.h(0,this.gjc())
u=this.a.e
t=u.d
if(t==null){t=D.M()
u.d=t
u=t}else u=t
u.h(0,this.gja())
u=this.a.e
t=u.c
if(t==null){t=D.M()
u.c=t
u=t}else u=t
u.h(0,this.gj8())
return!0},
ar:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.P(u,t)},
cc:function(a){a=H.h(H.c(a,"$ix"),"$ib5")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ce:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$ix"),"$ib5")
if(!this.cx)return
if(this.ch){u=a.d.L(0,a.y)
u=new V.P(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.L(0,a.y)
u=this.ar(new V.P(t.a,t.b).A(0,2).D(0,u.gad()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=this.ar(new V.P(s.a,s.b).A(0,2).D(0,u.gad()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sac(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sac(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.L(0,a.z)
this.dx=this.ar(new V.P(t.a,t.b).A(0,2).D(0,u.gad()))}this.a8()},
cg:function(a){var u,t,s
H.c(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sX(-t*10*u)
this.a8()}},
hE:function(a){if(H.h(H.c(a,"$ix"),"$idu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hG:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$ix"),"$ib5")
if(!J.T(this.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=this.ar(new V.P(s.a,s.b).A(0,2).D(0,u.gad()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sac(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sac(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.L(0,a.z)
this.dx=this.ar(new V.P(t.a,t.b).A(0,2).D(0,u.gad()))
this.a8()},
jd:function(a){H.c(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jb:function(a){var u,t,s,r,q,p,o
a=H.h(H.c(a,"$ix"),"$ie_")
if(!this.cx)return
if(this.ch){u=a.d.L(0,a.y)
u=new V.P(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.L(0,a.y)
u=this.ar(new V.P(t.a,t.b).A(0,2).D(0,u.gad()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=this.ar(new V.P(s.a,s.b).A(0,2).D(0,u.gad()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sac(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sac(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.L(0,a.z)
this.dx=this.ar(new V.P(t.a,t.b).A(0,2).D(0,u.gad()))}this.a8()},
j9:function(a){var u,t,s
H.c(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sX(-t*10*u)
this.a8()}},
b1:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=a.y
this.c.ap(s)
this.b.ap(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia7:1}
U.e7.prototype={
gv:function(){var u=this.r
if(u==null){u=D.M()
this.r=u}return u},
R:function(a){var u=this.r
if(u!=null)u.J(a)},
b9:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.M()
u.e=t
u=t}else u=t
t=this.ghI()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.M()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hJ:function(a){var u,t,s,r
H.c(a,"$ix")
if(!J.T(this.b,this.a.b.c))return
H.h(a,"$icf")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.F("zoom",u,r,this,[P.y])
u.b=!0
this.R(u)}},
b1:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia7:1}
M.db.prototype={
aR:function(a){var u
H.c(a,"$ix")
u=this.x
if(u!=null)u.J(a)},
fT:function(){return this.aR(null)},
hX:function(a,b){var u,t,s,r,q,p,o,n
u=E.ak
H.j(b,"$in",[u],"$an")
for(t=b.length,s=this.gaQ(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bA()
n.sal(null)
n.sb6(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bG(a,b,this,[u])
u.b=!0
this.aR(u)},
hZ:function(a,b){var u,t,s
u=E.ak
H.j(b,"$in",[u],"$an")
for(t=b.gW(b),s=this.gaQ();t.w();)t.gH().gv().a3(0,s)
u=new D.bH(a,b,this,[u])
u.b=!0
this.aR(u)},
gv:function(){var u=this.x
if(u==null){u=D.M()
this.x=u}return u},
aK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.f1(this.c)
u=this.b
u.toString
t=a.a
C.b.jP(t,36160,null)
C.b.av(t,2884)
C.b.av(t,2929)
C.b.k7(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.C(s)
o=C.j.ao(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.j.ao(p*r)
p=C.j.ao(q.c*s)
a.c=p
q=C.j.ao(q.d*r)
a.d=q
C.b.l8(t,o,n,p,q)
C.b.jS(t,u.c)
u=u.a
C.b.jR(t,u.a,u.b,u.c,u.d)
C.b.jQ(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aW(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.f0(i)
t=$.k7
if(t==null){t=V.k3(V.k9(),V.kw(),V.ku())
$.k7=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.A(0,h)}a.db.f0(h)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.t(u,0)]);u.w();)u.d.ap(a)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.t(u,0)]);u.w();)u.d.aK(a)
this.a.toString
a.cy.cW()
a.db.cW()
this.b.toString
a.eZ()},
shg:function(a,b){this.d=H.j(b,"$iY",[E.ak],"$aY")},
$inA:1}
A.d1.prototype={}
A.eC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.ec(r.a,r.c)}},
e9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.ea(r.a,r.c)}}}
A.dj.prototype={}
A.dx.prototype={
fI:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ae("")
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
a6.jn(u)
a6.ju(u)
a6.jo(u)
a6.jC(u)
a6.jD(u)
a6.jw(u)
a6.jH(u)
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
u=new P.ae("")
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
q.jr(u)
q.jm(u)
q.jp(u)
q.js(u)
q.jA(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jy(u)
q.jz(u)}q.jv(u)
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
q.jq(u)
q.jx(u)
q.jB(u)
q.jE(u)
q.jF(u)
q.jG(u)
q.jt(u)}m=u.a+="// === Main ===\n"
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
this.eJ(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$iaf")
if(t)this.dy=H.h(this.y.n(0,"objMat"),"$iaf")
if(r)this.fr=H.h(this.y.n(0,"viewObjMat"),"$iaf")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$iaf")
if(a6.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$icx")
if(a6.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$iaf")
if(a6.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$iaf")
this.sha(H.b([],[A.af]))
t=a6.aw
if(t>0){this.k4=H.c(this.y.n(0,"bendMatCount"),"$iJ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.p(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.h(g,"$iaf"))}}t=a6.a
if(t!==C.d){this.r2=H.h(this.y.n(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.rx=H.h(this.y.n(0,"emissionTxt"),"$iam")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iJ")
break
case C.h:this.ry=H.h(this.y.n(0,"emissionTxt"),"$ian")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iJ")
break}}t=a6.b
if(t!==C.d){this.x2=H.h(this.y.n(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.y1=H.h(this.y.n(0,"ambientTxt"),"$iam")
this.aw=H.h(this.y.n(0,"nullAmbientTxt"),"$iJ")
break
case C.h:this.y2=H.h(this.y.n(0,"ambientTxt"),"$ian")
this.aw=H.h(this.y.n(0,"nullAmbientTxt"),"$iJ")
break}}t=a6.c
if(t!==C.d){this.an=H.h(this.y.n(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.bv=H.h(this.y.n(0,"diffuseTxt"),"$iam")
this.bw=H.h(this.y.n(0,"nullDiffuseTxt"),"$iJ")
break
case C.h:this.ed=H.h(this.y.n(0,"diffuseTxt"),"$ian")
this.bw=H.h(this.y.n(0,"nullDiffuseTxt"),"$iJ")
break}}t=a6.d
if(t!==C.d){this.bx=H.h(this.y.n(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.ee=H.h(this.y.n(0,"invDiffuseTxt"),"$iam")
this.by=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.h:this.ef=H.h(this.y.n(0,"invDiffuseTxt"),"$ian")
this.by=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a6.e
if(t!==C.d){this.bB=H.h(this.y.n(0,"shininess"),"$iW")
this.bz=H.h(this.y.n(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.eg=H.h(this.y.n(0,"specularTxt"),"$iam")
this.bA=H.h(this.y.n(0,"nullSpecularTxt"),"$iJ")
break
case C.h:this.eh=H.h(this.y.n(0,"specularTxt"),"$ian")
this.bA=H.h(this.y.n(0,"nullSpecularTxt"),"$iJ")
break}}switch(a6.f){case C.d:break
case C.i:break
case C.e:this.ei=H.h(this.y.n(0,"bumpTxt"),"$iam")
this.bC=H.h(this.y.n(0,"nullBumpTxt"),"$iJ")
break
case C.h:this.ej=H.h(this.y.n(0,"bumpTxt"),"$ian")
this.bC=H.h(this.y.n(0,"nullBumpTxt"),"$iJ")
break}if(a6.dy){this.ek=H.h(this.y.n(0,"envSampler"),"$ian")
this.el=H.h(this.y.n(0,"nullEnvTxt"),"$iJ")
t=a6.r
if(t!==C.d){this.bD=H.h(this.y.n(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.em=H.h(this.y.n(0,"reflectTxt"),"$iam")
this.bE=H.h(this.y.n(0,"nullReflectTxt"),"$iJ")
break
case C.h:this.en=H.h(this.y.n(0,"reflectTxt"),"$ian")
this.bE=H.h(this.y.n(0,"nullReflectTxt"),"$iJ")
break}}t=a6.x
if(t!==C.d){this.bF=H.h(this.y.n(0,"refraction"),"$iW")
this.bG=H.h(this.y.n(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.e:this.eo=H.h(this.y.n(0,"refractTxt"),"$iam")
this.bH=H.h(this.y.n(0,"nullRefractTxt"),"$iJ")
break
case C.h:this.ep=H.h(this.y.n(0,"refractTxt"),"$ian")
this.bH=H.h(this.y.n(0,"nullRefractTxt"),"$iJ")
break}}}t=a6.y
if(t!==C.d){this.bI=H.h(this.y.n(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.i:break
case C.e:this.eq=H.h(this.y.n(0,"alphaTxt"),"$iam")
this.bJ=H.h(this.y.n(0,"nullAlphaTxt"),"$iJ")
break
case C.h:this.er=H.h(this.y.n(0,"alphaTxt"),"$ian")
this.bJ=H.h(this.y.n(0,"nullAlphaTxt"),"$iJ")
break}}this.sfU(H.b([],[A.cw]))
this.sfV(H.b([],[A.cy]))
this.sfW(H.b([],[A.cz]))
this.sfX(H.b([],[A.cA]))
this.sfY(H.b([],[A.cB]))
this.sfZ(H.b([],[A.cC]))
if(a6.k2){t=a6.z
if(t>0){this.es=H.c(this.y.n(0,"dirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.cF;(s&&C.a).h(s,new A.cw(h,g,f))}}t=a6.Q
if(t>0){this.eu=H.c(this.y.n(0,"pntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iW")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iW")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iW")
s=this.cG;(s&&C.a).h(s,new A.cy(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ev=H.c(this.y.n(0,"spotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iW")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iW")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iW")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iW")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iW")
s=this.cH;(s&&C.a).h(s,new A.cz(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ew=H.c(this.y.n(0,"txtDirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iG")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iam")
s=this.cI;(s&&C.a).h(s,new A.cA(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ex=H.c(this.y.n(0,"txtPntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$icx")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iJ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iW")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iW")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iW")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$ian")
s=this.cJ;(s&&C.a).h(s,new A.cB(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ey=H.c(this.y.n(0,"txtSpotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iG")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iG")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iG")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iG")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iG")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iJ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iG")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iW")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iW")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a2,"$iW")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a3,"$iW")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a4,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a5,"$iam")
s=this.cK;(s&&C.a).h(s,new A.cC(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
am:function(a,b,c){if(c==null||!c.d)C.b.S(b.a,b.d,1)
else{a.fw(c)
C.b.S(b.a,b.d,0)}},
ag:function(a,b,c){C.b.S(b.a,b.d,1)},
sha:function(a){this.r1=H.j(a,"$ia",[A.af],"$aa")},
sfU:function(a){this.cF=H.j(a,"$ia",[A.cw],"$aa")},
sfV:function(a){this.cG=H.j(a,"$ia",[A.cy],"$aa")},
sfW:function(a){this.cH=H.j(a,"$ia",[A.cz],"$aa")},
sfX:function(a){this.cI=H.j(a,"$ia",[A.cA],"$aa")},
sfY:function(a){this.cJ=H.j(a,"$ia",[A.cB],"$aa")},
sfZ:function(a){this.cK=H.j(a,"$ia",[A.cC],"$aa")}}
A.fA.prototype={
jn:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aw+"];\n"
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
ju:function(a){var u
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
jo:function(a){var u
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
jC:function(a){var u,t
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
jD:function(a){var u,t
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
jw:function(a){var u
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
jH:function(a){var u
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
aB:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aq(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jr:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aB(a,u,"emission")
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
jm:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aB(a,u,"ambient")
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
jp:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aB(a,u,"diffuse")
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
js:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aB(a,u,"invDiffuse")
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
jA:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aB(a,u,"specular")
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
jv:function(a){var u,t
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
jy:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aB(a,u,"reflect")
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
jz:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aB(a,u,"refract")
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
jq:function(a){var u,t
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
jx:function(a){var u,t
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
jB:function(a){var u,t
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
jE:function(a){var u,t,s
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
jF:function(a){var u,t,s
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
jG:function(a){var u,t,s
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
jt:function(a){var u
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
i:function(a){return this.an}}
A.cw.prototype={}
A.cA.prototype={}
A.cy.prototype={}
A.cB.prototype={}
A.cz.prototype={}
A.cC.prototype={}
A.cl.prototype={
dc:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eJ:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dz(a,35633)
this.f=this.dz(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.e2(u,t,this.e)
C.b.e2(u,this.r,this.f)
C.b.kr(u,this.r)
if(!H.jz(C.b.bW(u,this.r,35714))){s=C.b.fl(u,this.r)
C.b.k_(u,this.r)
H.p(P.q("Failed to link shader: "+H.i(s)))}this.iY()
this.j_()},
aF:function(a){C.b.d2(a.a,this.r)
this.x.kb()},
dz:function(a,b){var u,t,s
u=this.a
t=C.b.jY(u,b)
C.b.fz(u,t,a)
C.b.jT(u,t)
if(!H.jz(C.b.fn(u,t,35713))){s=C.b.fm(u,t)
C.b.k0(u,t)
throw H.d(P.q("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
iY:function(){var u,t,s,r,q,p
u=H.b([],[A.d1])
t=this.a
s=H.ac(C.b.bW(t,this.r,35721))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.fg(t,this.r,r)
p=C.b.fi(t,this.r,q.name)
C.a.h(u,new A.d1(t,q.name,p))}this.x=new A.eC(u)},
j_:function(){var u,t,s,r,q,p
u=H.b([],[A.e0])
t=this.a
s=H.ac(C.b.bW(t,this.r,35718))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.fh(t,this.r,r)
p=C.b.fo(t,this.r,q.name)
C.a.h(u,this.jZ(q.type,q.size,q.name,p))}this.y=new A.hv(u)},
aT:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jn(u,t,b,a,c)},
hj:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.am(u,t,b,c)
else return A.jn(u,t,b,a,c)},
hk:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.jn(u,t,b,a,c)},
br:function(a,b){return new P.ed(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jZ:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.hr(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.cv(this.a,this.r,c,d)
case 35667:return new A.hs(this.a,this.r,c,d)
case 35668:return new A.ht(this.a,this.r,c,d)
case 35669:return new A.hu(this.a,this.r,c,d)
case 35674:return new A.hw(this.a,this.r,c,d)
case 35675:return new A.cx(this.a,this.r,c,d)
case 35676:return new A.af(this.a,this.r,c,d)
case 35678:return this.hj(b,c,d)
case 35680:return this.hk(b,c,d)
case 35670:throw H.d(this.br("BOOL",c))
case 35671:throw H.d(this.br("BOOL_VEC2",c))
case 35672:throw H.d(this.br("BOOL_VEC3",c))
case 35673:throw H.d(this.br("BOOL_VEC4",c))
default:throw H.d(P.q("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bz.prototype={
i:function(a){return this.b}}
A.e0.prototype={}
A.hv.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
kj:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.kj("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hs.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hq.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sji:function(a){this.e=H.j(a,"$ia",[P.l],"$aa")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cv.prototype={
bk:function(a){return C.b.l6(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cx.prototype={
ab:function(a){var u=new Float32Array(H.bU(H.j(a,"$ia",[P.y],"$aa")))
C.b.fa(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.af.prototype={
ab:function(a){var u=new Float32Array(H.bU(H.j(a,"$ia",[P.y],"$aa")))
C.b.fb(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.am.prototype={
fw:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.S(t,s,0)
else C.b.S(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.an.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.iL.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cQ(u.b,b).cQ(u.d.cQ(u.c,b),c)
u=new V.ay(t.a,t.b,t.c)
if(!J.T(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a2()}a.sl0(t.D(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
s=new V.dI(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.T(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a2()}},
$S:43}
F.a2.prototype={
h7:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.b_()
if(t!=null)q=q.E(0,t)
if(s!=null)q=q.E(0,s)
if(r!=null)q=q.E(0,r)
if(q.eL())return
return q.D(0,Math.sqrt(q.I(q)))},
hf:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.L(0,t)
u=new V.Q(u.a,u.b,u.c)
q=u.D(0,Math.sqrt(u.I(u)))
u=r.L(0,t)
u=new V.Q(u.a,u.b,u.c)
u=q.bb(u.D(0,Math.sqrt(u.I(u))))
return u.D(0,Math.sqrt(u.I(u)))},
cw:function(){if(this.d!=null)return!0
var u=this.h7()
if(u==null){u=this.hf()
if(u==null)return!1}this.d=u
this.a.a.a2()
return!0},
h6:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.b_()
if(t!=null)q=q.E(0,t)
if(s!=null)q=q.E(0,s)
if(r!=null)q=q.E(0,r)
if(q.eL())return
return q.D(0,Math.sqrt(q.I(q)))},
he:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.L().a){u=m.L(0,p)
u=new V.Q(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.T(0)}else{g=(u-l.b)/i
u=m.L(0,p)
u=new V.ay(u.a*g,u.b*g,u.c*g).E(0,p).L(0,s)
u=new V.Q(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.T(0)}u=this.d
if(u!=null){f=u.D(0,Math.sqrt(u.I(u)))
u=f.bb(h)
u=u.D(0,Math.sqrt(u.I(u))).bb(f)
h=u.D(0,Math.sqrt(u.I(u)))}return h},
cv:function(){if(this.e!=null)return!0
var u=this.h6()
if(u==null){u=this.he()
if(u==null)return!1}this.e=u
this.a.a.a2()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.ak(J.ap(u.e),0)+", "+C.c.ak(J.ap(this.b.e),0)+", "+C.c.ak(J.ap(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
O:function(){return this.C("")}}
F.ar.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ak(J.ap(u.e),0)+", "+C.c.ak(J.ap(this.b.e),0)},
O:function(){return this.C("")}}
F.bm.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ak(J.ap(u.e),0)},
O:function(){return this.C("")}}
F.aa.prototype={
gv:function(){var u=this.e
if(u==null){u=D.M()
this.e=u}return u},
kw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.V()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.b_())}this.a.V()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
F.lW(m)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.E()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lO(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.E()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.V()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.dc(k,j,h)}u=this.e
if(u!=null)u.aM()},
aI:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aI()||!1
if(!this.a.aI())t=!1
u=this.e
if(u!=null)u.aM()
return t},
aY:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aY()||!1
if(!this.a.aY())t=!1
u=this.e
if(u!=null)u.aM()
return t},
bs:function(){var u=this.e
if(u!=null)++u.d
this.a.bs()
u=this.e
if(u!=null)u.aM()
return!0},
e6:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aP()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aO().a)!==0)++r
if((s&$.aN().a)!==0)++r
if((s&$.b9().a)!==0)++r
if((s&$.ba().a)!==0)++r
if((s&$.bu().a)!==0)++r
if((s&$.cX().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.b8().a)!==0)++r
q=a1.gd9(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.y
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d3])
for(m=0,l=0;l<r;++l){k=a1.jM(l)
j=k.gd9(k)
C.a.p(n,l,new Z.d3(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].ks(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.p(o,g,h[f]);++g}}m+=j}H.j(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.au(t,34962,e)
C.b.e5(t,34962,new Float32Array(H.bU(o)),35044)
C.b.au(t,34962,null)
d=new Z.bc(new Z.e8(34962,e),n,a1)
d.shx(H.b([],[Z.bk]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.V()
C.a.h(c,b.e)}a=Z.jq(t,34963,H.j(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.V()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.V()
C.a.h(c,b.e)}a=Z.jq(t,34963,H.j(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.V()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.V()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.V()
C.a.h(c,b.e)}a=Z.jq(t,34963,H.j(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.l(u,"\n")},
ae:function(a){var u=this.e
if(u!=null)u.J(a)},
a2:function(){return this.ae(null)},
$icn:1}
F.cn.prototype={}
F.fZ.prototype={
jJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ia",[F.X],"$aa")
u=H.b([],[F.a2])
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
C.a.h(u,F.dc(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dc(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dc(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dc(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cw())s=!1
return s},
aY:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cv())s=!1
return s},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
shp:function(a){this.b=H.j(a,"$ia",[F.a2],"$aa")}}
F.h_.prototype={
aE:function(a,b,c){var u,t
u=this.a
u.a.h(0,b)
u.a.h(0,c)
u=new F.ar()
if(b==null)H.p(P.q("May not create a line with a null start vertex."))
if(c==null)H.p(P.q("May not create a line with a null end vertex."))
t=b.a
if(t==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=c.a)H.p(P.q("May not create a line with vertices attached to different shapes."))
u.a=b
C.a.h(b.c.b,u)
u.b=c
C.a.h(c.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
gm:function(a){return this.b.length},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.b([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.l(u,"\n")},
O:function(){return this.C("")},
shz:function(a){this.b=H.j(a,"$ia",[F.ar],"$aa")}}
F.h0.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
scl:function(a){this.b=H.j(a,"$ia",[F.bm],"$aa")}}
F.X.prototype={
cB:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hK(this.cx,s,p,u,t,r,q,a,o)},
b_:function(){return this.cB(null)},
seN:function(a){var u
a=a==null?null:a.D(0,Math.sqrt(a.I(a)))
if(!J.T(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a2()}},
saG:function(a){var u
a=a==null?null:a.D(0,Math.sqrt(a.I(a)))
if(!J.T(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a2()}},
sl0:function(a){var u
if(!J.T(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sa4:function(a,b){var u
if(!J.T(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a2()}},
ks:function(a){var u,t
if(a.u(0,$.aP())){u=this.f
t=[P.y]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aO())){u=this.r
t=[P.y]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aN())){u=this.x
t=[P.y]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.b9())){u=this.y
t=[P.y]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.ba())){u=this.z
t=[P.y]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.bu())){u=this.Q
t=[P.y]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cX())){u=this.Q
t=[P.y]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.c1()))return H.b([this.ch],[P.y])
else if(a.u(0,$.b8())){u=this.cx
t=[P.y]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.y])},
cw:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.b_()
this.d.K(0,new F.hS(u))
u=u.a
this.r=u.D(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.aM()}return!0},
cv:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.b_()
this.d.K(0,new F.hR(u))
u=u.a
this.x=u.D(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.aM()}return!0},
eA:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.b
s.a.a.V()
s=s.e
a.a.a.V()
if(s==a.e)return r}return},
kf:function(a){var u=this.eA(a)
if(u!=null)return u
return a.eA(this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var u,t,s
u=H.b([],[P.e])
C.a.h(u,C.c.ak(J.ap(this.e),0))
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
C.a.h(u,V.R(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
O:function(){return this.C("")}}
F.hS.prototype={
$1:function(a){var u,t
H.c(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:5}
F.hR.prototype={
$1:function(a){var u,t
H.c(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:5}
F.hL.prototype={
V:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a2()
return!0},
dZ:function(a,b,c){var u=F.hK(null,null,null,new V.ay(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
aI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cw()
return!0},
aY:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cv()
return!0},
bs:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
this.V()
u=H.b([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
sjj:function(a){this.c=H.j(a,"$ia",[F.X],"$aa")}}
F.hM.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.K(this.b,b)
C.a.K(this.c,new F.hN(this,b))
C.a.K(this.d,new F.hO(this,b))},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
shq:function(a){this.b=H.j(a,"$ia",[F.a2],"$aa")},
shr:function(a){this.c=H.j(a,"$ia",[F.a2],"$aa")},
shs:function(a){this.d=H.j(a,"$ia",[F.a2],"$aa")}}
F.hN.prototype={
$1:function(a){H.c(a,"$ia2")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:5}
F.hO.prototype={
$1:function(a){var u
H.c(a,"$ia2")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:5}
F.hP.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
shA:function(a){this.b=H.j(a,"$ia",[F.ar],"$aa")},
shB:function(a){this.c=H.j(a,"$ia",[F.ar],"$aa")}}
F.hQ.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.b([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
scl:function(a){this.b=H.j(a,"$ia",[F.bm],"$aa")}}
O.di.prototype={
gv:function(){var u=this.rx
if(u==null){u=D.M()
this.rx=u}return u},
U:function(a){var u=this.rx
if(u!=null)u.J(a)},
ap:function(a){},
f2:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.c(a.fr.j(0,"Inspection"),"$idj")
if(u==null){t=a.a
u=new A.dj(t,"Inspection")
u.dc(t,"Inspection")
u.eJ($.lJ,$.lI)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.h(u.y.j(0,"lightVec"),"$iG")
u.db=H.h(u.y.j(0,"ambientClr"),"$icv")
u.dx=H.h(u.y.j(0,"diffuseClr"),"$icv")
u.dy=H.h(u.y.j(0,"weightScalar"),"$iW")
u.fr=H.h(u.y.j(0,"viewMat"),"$iaf")
u.fx=H.h(u.y.j(0,"viewObjMatrix"),"$iaf")
u.fy=H.h(u.y.j(0,"projViewObjMatrix"),"$iaf")
a.e0(u)}this.a=u}if(b.e==null){b.d.aI()
b.d.aY()
b.d.bs()
t=new Z.d4()
t.shH(new H.aA([P.e,Z.bc]))
b.e=t}t=this.a
t.aF(a)
s=this.r2
r=t.dy
C.b.N(r.a,r.d,s)
s=this.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=a.db.ga1()
p=t.fr
p.toString
p.ab(s.a7(0,!0))
s=a.gfe()
p=t.fx
p.toString
p.ab(s.a7(0,!0))
s=a.gf_()
t=t.fy
t.toString
t.ab(s.a7(0,!0))
t=b.e
if(t instanceof Z.d4){s=a.a
C.b.aH(s,1,1)
if(b.c==null){C.b.cE(s,2929)
C.b.av(s,3042)
C.b.aH(s,1,1)
if(this.k3)this.iK(a,t,b.d,"Axis",H.k(this.gdl(),{func:1,ret:F.aa,args:[F.cn]}),this.z,this.y)
C.b.av(s,2929)
C.b.aH(s,770,771)}else{C.b.av(s,2929)
C.b.av(s,3042)
C.b.aH(s,770,771)
C.b.cE(s,2929)
C.b.aH(s,1,1)
if(this.ch)this.bp(a,t,b.c,"wireFrame",this.gjk(),this.f,this.e)
if(this.cy)this.bp(a,t,b.c,"normals",this.ghK(),this.f,this.e)
if(this.db)this.bp(a,t,b.c,"binormals",this.ghc(),this.f,this.e)
if(this.k3)this.bp(a,t,b.c,"Axis",this.gdl(),this.z,this.y)
C.b.av(s,2929)
C.b.aH(s,770,771)}}else b.e=null
t=this.a
t.toString
C.b.d2(a.a,null)
t.x.e9()},
bp:function(a,b,c,d,e,f,g){var u,t
H.k(e,{func:1,ret:F.aa,args:[F.aa]})
u=b.a.j(0,d)
if(u==null){u=this.dm(a,e.$1(c))
b.a.p(0,d,u)}t=this.a
t.db.bk(f)
t.dx.bk(g)
u.eW(a)},
iK:function(a,b,c,d,e,f,g){var u,t
H.k(e,{func:1,ret:F.aa,args:[F.cn]})
u=b.a.j(0,d)
if(u==null){u=this.dm(a,e.$1(c))
b.a.p(0,d,u)}t=this.a
t.db.bk(f)
t.dx.bk(g)
u.eW(a)},
dm:function(a,b){var u,t,s
u=$.aP()
t=$.aO()
s=b.e6(new Z.e9(a.a),new Z.aM(u.a|t.a|$.aN().a|$.bu().a))
s.ai($.aP()).e=this.a.z.c
s.ai($.aO()).e=this.a.Q.c
s.ai($.bu()).e=this.a.ch.c
s.ai($.aN()).e=this.a.cx.c
return s},
dV:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.cm()
u.a=new V.Z(0,0.7,1,1)
s=a.a
s.toString
u=H.k(new O.fe(u,t),{func:1,ret:-1,args:[F.X]})
C.a.K(s.c,u)
u=new O.fd(t)
s=a.c
s.toString
r=H.k(new O.ff(t,u),{func:1,ret:-1,args:[F.ar]})
C.a.K(s.b,r)
r=a.d
r.toString
u=H.k(new O.fg(t,u),{func:1,ret:-1,args:[F.a2]})
C.a.K(r.b,u)
return t},
jl:function(a){return this.dV(a,null)},
hL:function(a){var u,t,s
u=F.cm()
t=a.a
t.toString
s=H.k(new O.fc(new V.Z(1,1,0.3,1),u),{func:1,ret:-1,args:[F.X]})
C.a.K(t.c,s)
return u},
hd:function(a){var u,t,s
u=F.cm()
t=a.a
t.toString
s=H.k(new O.fb(new V.Z(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.X]})
C.a.K(t.c,s)
return u},
h8:function(a){return this.h9(a)},
h9:function(a){var u,t
u=F.cm()
t=new O.fa(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u}}
O.fe.prototype={
$1:function(a){var u,t
H.c(a,"$iX")
u=this.b.a
t=a.b_()
t.sa4(0,this.a.a)
t.saG(V.b_())
u.h(0,t)},
$S:9}
O.fd.prototype={
$2:function(a,b){if(a.kf(b)==null)this.a.c.aE(0,a,b)},
$S:48}
O.ff.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iar")
u=this.a
t=u.a
s=a.a
s.a.a.V()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.V()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:49}
O.fg.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$ia2")
u=this.a
t=u.a
s=a.a
s.a.a.V()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.V()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.V()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.fc.prototype={
$1:function(a){var u,t,s
u=H.c(a,"$iX").b_()
u.sa4(0,this.a)
u.saG(V.b_())
t=u.b_()
t.saG(u.r)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.aE(0,u,t)},
$S:9}
O.fb.prototype={
$1:function(a){var u,t,s
H.c(a,"$iX")
u=a.b_()
u.sa4(0,this.a)
u.saG(V.b_())
t=u.b_()
t.saG(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.aE(0,u,t)},
$S:9}
O.fa.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=a>1?1:a
t=b>1?1:b
s=c>1?1:c
r=new V.Z(u,t,s,1)
u=this.a
q=u.a.dZ(0,0,0)
q.saG(V.b_())
q.seN(V.kv())
q.sa4(0,r)
p=u.a.dZ(a,b,c)
p.saG(V.b_())
p.seN(V.kv())
p.sa4(0,r)
u.c.aE(0,q,p)}}
O.dw.prototype={
gv:function(){var u=this.dy
if(u==null){u=D.M()
this.dy=u}return u},
U:function(a){var u
H.c(a,"$ix")
u=this.dy
if(u!=null)u.J(a)},
ck:function(){return this.U(null)},
dO:function(a){H.c(a,"$ix")
this.a=null
this.U(a)},
iQ:function(){return this.dO(null)},
hR:function(a,b){var u=V.al
u=new D.bG(a,H.j(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.U(u)},
hT:function(a,b){var u=V.al
u=new D.bH(a,H.j(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.U(u)},
du:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aP()
if(a0){b=$.aO()
a7=new Z.aM(a7.a|b.a)}if(a1){b=$.aN()
a7=new Z.aM(a7.a|b.a)}if(a2){b=$.b9()
a7=new Z.aM(a7.a|b.a)}if(a3){b=$.ba()
a7=new Z.aM(a7.a|b.a)}if(a5){b=$.b8()
a7=new Z.aM(a7.a|b.a)}return new A.fA(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.j(a,"$ia",[T.cs],"$aa")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.aq(u,u.length,0,[H.t(u,0)]);u.w();){t=u.d
t.toString
s=$.hJ
if(s==null){s=new V.Q(0,0,1)
$.hJ=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.d1(s)}}},
f2:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.du()
t=H.c(a2.fr.j(0,u.an),"$idx")
if(t==null){t=A.lU(u,a2.a)
a2.e0(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bv
u=a3.e
if(!(u instanceof Z.bc)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.aI()
q=s.r2
if(q)a3.d.aY()
p=s.ry
if(p)a3.d.bs()
o=a3.d.e6(new Z.e9(a2.a),r)
o.ai($.aP()).e=this.a.Q.c
if(u)o.ai($.aO()).e=this.a.cx.c
if(q)o.ai($.aN()).e=this.a.ch.c
if(s.rx)o.ai($.b9()).e=this.a.cy.c
if(p)o.ai($.ba()).e=this.a.db.c
if(s.x1)o.ai($.b8()).e=this.a.dx.c
a3.e=o}u=T.cs
n=H.b([],[u])
this.a.aF(a2)
if(s.fx){q=this.a
p=a2.dx.ga1()
q=q.dy
q.toString
q.ab(p.a7(0,!0))}if(s.fy){q=this.a
p=a2.gfe()
q=q.fr
q.toString
q.ab(p.a7(0,!0))}q=this.a
p=a2.gf_()
q=q.fy
q.toString
q.ab(p.a7(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ab(C.r.a7(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ab(C.r.a7(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ab(C.r.a7(p,!0))}if(s.aw>0){m=this.e.a.length
q=this.a.k4
C.b.S(q.a,q.d,m)
for(q=[P.y],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.f(k,l)
k=k[l]
p.toString
H.c(k,"$ial")
p=p.r1
if(l>=p.length)return H.f(p,l)
p=p[l]
j=new Float32Array(H.bU(H.j(k.a7(0,!0),"$ia",q,"$aa")))
C.b.fb(p.a,p.d,!1,j)}}switch(s.a){case C.d:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a_(n,this.f.d)
q=this.a
p=this.f.d
q.am(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.f.e)
q=this.a
p=this.f.e
q.ag(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a_(n,this.r.d)
q=this.a
p=this.r.d
q.am(q.y1,q.aw,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.r.e)
q=this.a
p=this.r.e
q.ag(q.y2,q.aw,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.c){case C.d:break
case C.i:q=this.a
p=this.x.f
q=q.an
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a_(n,this.x.d)
q=this.a
p=this.x.d
q.am(q.bv,q.bw,p)
p=this.a
q=this.x.f
p=p.an
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.x.e)
q=this.a
p=this.x.e
q.ag(q.ed,q.bw,p)
p=this.a
q=this.x.f
p=p.an
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.d){case C.d:break
case C.i:q=this.a
p=this.y.f
q=q.bx
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a_(n,this.y.d)
q=this.a
p=this.y.d
q.am(q.ee,q.by,p)
p=this.a
q=this.y.f
p=p.bx
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.y.e)
q=this.a
p=this.y.e
q.ag(q.ef,q.by,p)
p=this.a
q=this.y.f
p=p.bx
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.e){case C.d:break
case C.i:q=this.a
p=this.z.f
q=q.bz
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bB
C.b.N(p.a,p.d,i)
break
case C.e:this.a_(n,this.z.d)
q=this.a
p=this.z.d
q.am(q.eg,q.bA,p)
p=this.a
q=this.z.f
p=p.bz
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bB
C.b.N(q.a,q.d,i)
break
case C.h:this.a_(n,this.z.e)
q=this.a
p=this.z.e
q.ag(q.eh,q.bA,p)
p=this.a
q=this.z.f
p=p.bz
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bB
C.b.N(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.es
C.b.S(q.a,q.d,m)
h=a2.db.ga1()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cF
if(g>=k.length)return H.f(k,g)
d=k[g]
k=h.d1(e.a)
i=k.a
c=k.b
b=k.c
b=k.D(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.t(c.a,c.d,i,k,b)
b=e.c
k=d.c
C.b.t(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.eu
C.b.S(q.a,q.d,m)
h=a2.db.ga1()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cG
if(g>=k.length)return H.f(k,g)
d=k[g]
k=e.gbf(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bi(e.gbf(e))
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.ga4(e)
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gcr()
i=d.e
C.b.N(i.a,i.d,k)
k=e.gcs()
i=d.f
C.b.N(i.a,i.d,k)
k=e.gct()
i=d.r
C.b.N(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.ev
C.b.S(q.a,q.d,m)
h=a2.db.ga1()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cH
if(g>=k.length)return H.f(k,g)
d=k[g]
k=e.gbf(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gcD(e).lf()
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bi(e.gbf(e))
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.ga4(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.glc()
i=d.f
C.b.N(i.a,i.d,k)
k=e.glb()
i=d.r
C.b.N(i.a,i.d,k)
k=e.gcr()
i=d.x
C.b.N(i.a,i.d,k)
k=e.gcs()
i=d.y
C.b.N(i.a,i.d,k)
k=e.gct()
i=d.z
C.b.N(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.ew
C.b.S(q.a,q.d,m)
h=a2.db.ga1()
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
i=this.a.cI
if(g>=i.length)return H.f(i,g)
d=i[g]
i=e.gbg()
H.j(n,"$ia",k,"$aa")
if(!C.a.Y(n,i)){i.a=n.length
C.a.h(n,i)}i=e.gcD(e)
c=d.d
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gbR()
c=d.b
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gbO(e)
c=d.c
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=h.d1(e.gcD(e))
c=i.a
b=i.b
a=i.c
a=i.D(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.t(b.a,b.d,c,i,a)
a=e.ga4(e)
i=d.f
C.b.t(i.a,i.d,a.a,a.b,a.c)
a=e.gbg()
i=a.gcR(a)
if(!i){i=d.x
C.b.S(i.a,i.d,1)}else{i=d.r
c=a.d
b=i.a
i=i.d
if(!c)C.b.S(b,i,0)
else C.b.S(b,i,a.a)
i=d.x
C.b.S(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.ex
C.b.S(q.a,q.d,m)
h=a2.db.ga1()
for(q=this.dx.y,p=q.length,k=[P.y],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.cJ
if(g>=c.length)return H.f(c,g)
d=c[g]
c=e.gbg()
H.j(n,"$ia",i,"$aa")
if(!C.a.Y(n,c)){c.a=n.length
C.a.h(n,c)}a0=h.A(0,e.ga1())
c=e.ga1()
b=$.ci
if(b==null){b=new V.ay(0,0,0)
$.ci=b}b=c.bi(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.ci
if(c==null){c=new V.ay(0,0,0)
$.ci=c}c=a0.bi(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eK()
b=d.d
j=new Float32Array(H.bU(H.j(new V.dy(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a7(0,!0),"$ia",k,"$aa")))
C.b.fa(b.a,b.d,!1,j)
b=e.ga4(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbg()
c=b.gcR(b)
if(!c){c=d.r
C.b.S(c.a,c.d,1)}else{c=d.f
a=b.gcR(b)
a1=c.a
c=c.d
if(!a)C.b.S(a1,c,0)
else C.b.S(a1,c,b.gld(b))
c=d.r
C.b.S(c.a,c.d,0)}c=e.gcr()
b=d.x
C.b.N(b.a,b.d,c)
c=e.gcs()
b=d.y
C.b.N(b.a,b.d,c)
c=e.gct()
b=d.z
C.b.N(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.ey
C.b.S(q.a,q.d,m)
h=a2.db.ga1()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cK
if(g>=k.length)return H.f(k,g)
d=k[g]
k=e.gbg()
H.j(n,"$ia",u,"$aa")
if(!C.a.Y(n,k)){k.a=n.length
C.a.h(n,k)}k=e.gbf(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gcD(e)
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbR()
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbO(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bi(e.gbf(e))
i=d.f
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbg()
i=k.gcR(k)
if(!i){k=d.x
C.b.S(k.a,k.d,1)}else{i=d.r
c=k.d
b=i.a
i=i.d
if(!c)C.b.S(b,i,0)
else C.b.S(b,i,k.a)
k=d.x
C.b.S(k.a,k.d,0)}k=e.ga4(e)
i=d.y
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.glg()
i=d.z
C.b.N(i.a,i.d,k)
k=e.glh()
i=d.Q
C.b.N(i.a,i.d,k)
k=e.gcr()
i=d.ch
C.b.N(i.a,i.d,k)
k=e.gcs()
i=d.cx
C.b.N(i.a,i.d,k)
k=e.gct()
i=d.cy
C.b.N(i.a,i.d,k);++g}}}switch(s.f){case C.d:break
case C.i:break
case C.e:this.a_(n,this.Q.d)
u=this.a
q=this.Q.d
u.am(u.ei,u.bC,q)
break
case C.h:this.a_(n,this.Q.e)
u=this.a
q=this.Q.e
u.ag(u.ej,u.bC,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga1().eK()
a2.Q=q}u=u.id
u.toString
u.ab(q.a7(0,!0))}if(s.dy){this.a_(n,this.ch)
u=this.a
q=this.ch
u.ag(u.ek,u.el,q)
switch(s.r){case C.d:break
case C.i:u=this.a
q=this.cx.f
u=u.bD
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
break
case C.e:this.a_(n,this.cx.d)
u=this.a
q=this.cx.d
u.am(u.em,u.bE,q)
q=this.a
u=this.cx.f
q=q.bD
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break
case C.h:this.a_(n,this.cx.e)
u=this.a
q=this.cx.e
u.ag(u.en,u.bE,q)
q=this.a
u=this.cx.f
q=q.bD
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break}switch(s.x){case C.d:break
case C.i:u=this.a
q=this.cy.f
u=u.bG
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bF
C.b.N(q.a,q.d,k)
break
case C.e:this.a_(n,this.cy.d)
u=this.a
q=this.cy.d
u.am(u.eo,u.bH,q)
q=this.a
u=this.cy.f
q=q.bG
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bF
C.b.N(u.a,u.d,k)
break
case C.h:this.a_(n,this.cy.e)
u=this.a
q=this.cy.e
u.ag(u.ep,u.bH,q)
q=this.a
u=this.cy.f
q=q.bG
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bF
C.b.N(u.a,u.d,k)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.i:u=this.a
p=this.db.f
u=u.bI
C.b.N(u.a,u.d,p)
break
case C.e:this.a_(n,this.db.d)
u=this.a
p=this.db.d
u.am(u.eq,u.bJ,p)
p=this.a
u=this.db.f
p=p.bI
C.b.N(p.a,p.d,u)
break
case C.h:this.a_(n,this.db.e)
u=this.a
p=this.db.e
u.ag(u.er,u.bJ,p)
p=this.a
u=this.db.f
p=p.bI
C.b.N(p.a,p.d,u)
break}u=a2.a
C.b.av(u,3042)
C.b.aH(u,770,771)}for(u=a2.a,l=0;l<n.length;++l){p=n[l]
if(!p.c&&p.d){p.c=!0
C.b.dX(u,33984+p.a)
C.b.aX(u,3553,p.b)}}p=H.h(a3.e,"$ibc")
p.aF(a2)
p.aK(a2)
p.f9(a2)
if(q)C.b.cE(u,3042)
for(l=0;l<n.length;++l){q=n[l]
if(q.c){q.c=!1
C.b.dX(u,33984+q.a)
C.b.aX(u,3553,null)}}q=this.a
q.toString
C.b.d2(u,null)
q.x.e9()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.du().an},
shb:function(a){this.e=H.j(a,"$iY",[V.al],"$aY")}}
O.fy.prototype={}
O.cc.prototype={
U:function(a){this.a.U(H.c(a,"$ix"))},
ck:function(){return this.U(null)},
aC:function(){},
iW:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gv().a3(0,this.gbo())
t=this.d
this.d=a
if(a!=null)a.gv().h(0,this.gbo())
u=new D.F(this.b+".texture2D",t,this.d,this,[T.dU])
u.b=!0
this.a.U(u)}},
iX:function(a){}}
O.fz.prototype={}
O.aV.prototype={
dQ:function(a){var u,t
if(!J.T(this.f,a)){u=this.f
this.f=a
t=new D.F(this.b+".color",u,a,this,[V.a4])
t.b=!0
this.a.U(t)}},
aC:function(){this.fF()
this.dQ(new V.a4(1,1,1))},
sa4:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.aC()
u=this.a
u.a=null
u.U(null)}this.dQ(b)}}
O.fB.prototype={
iV:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.L().a)){this.ch=a
u=new D.F(this.b+".refraction",u,a,this,[P.y])
u.b=!0
this.a.U(u)}},
aC:function(){this.c_()
this.iV(1)}}
O.fC.prototype={
co:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.L().a)){this.ch=a
u=new D.F(this.b+".shininess",u,a,this,[P.y])
u.b=!0
this.a.U(u)}},
aC:function(){this.c_()
this.co(100)}}
O.bR.prototype={}
T.cs.prototype={}
T.dU.prototype={}
T.hf.prototype={
gv:function(){var u=this.y
if(u==null){u=D.M()
this.y=u}return u}}
T.hg.prototype={
ku:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aX(u,3553,t)
C.b.bP(u,3553,10242,33071)
C.b.bP(u,3553,10243,33071)
C.b.bP(u,3553,10241,9729)
C.b.bP(u,3553,10240,9729)
C.b.aX(u,3553,null);++this.d
s=W.jY(null,a,null)
r=new T.hf()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.a5(s,"load",H.k(new T.hh(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kt:function(a){return this.ku(a,!1,!1,!1,!1)},
iR:function(a,b,c){var u,t,s,r
b=V.jG(b,2)
u=V.jG(a.width,2)
t=V.jG(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jb(null,null)
s.width=u
s.height=t
r=H.c(C.q.fk(s,"2d"),"$ibx")
r.imageSmoothingEnabled=!1;(r&&C.D).k9(r,a,0,0,s.width,s.height)
return P.n4(C.D.hw(r,0,0,s.width,s.height))}}}
T.hh.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iR(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aX(t,3553,this.e)
C.b.kO(t,37440,this.f?1:0)
C.b.kZ(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ff(t,3553)
C.b.aX(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.ka()}++s.e},
$S:14}
V.b2.prototype={
aJ:function(a){return!0},
i:function(a){return"all"},
$iav:1}
V.av.prototype={}
V.dv.prototype={
aJ:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aJ(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.j(a,"$ia",[V.av],"$aa")},
$iav:1}
V.as.prototype={
aJ:function(a){return!this.fE(a)},
i:function(a){return"!["+this.da(0)+"]"}}
V.fQ.prototype={
aJ:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bO(this.a)
t=H.bO(this.b)
return u+".."+t},
$iav:1}
V.fY.prototype={
fK:function(a){var u,t
if(a.a.length<=0)throw H.d(P.q("May not create a SetMatcher with zero characters."))
u=new H.aA([P.l,P.H])
for(t=new H.cb(a,a.gm(a),0,[H.ab(a,"S",0)]);t.w();)u.p(0,t.d,!0)
this.siU(u)},
aJ:function(a){return this.a.bt(a)},
i:function(a){return P.dP(this.a.gax(),0,null)},
siU:function(a){this.a=H.j(a,"$iE",[P.l,P.H],"$aE")},
$iav:1}
V.co.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cu(this.a.k(0,b))
r.sa9(H.b([],[V.av]))
r.c=!1
C.a.h(this.c,r)
return r},
ke:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aJ(a))return r}return},
i:function(a){return this.b},
sje:function(a){this.c=H.j(a,"$ia",[V.cu],"$aa")}}
V.dZ.prototype={
i:function(a){var u,t
u=H.jI(this.b,"\n","\\n")
t=H.jI(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ct.prototype={
aL:function(a,b,c){var u,t,s
H.j(c,"$ia",[P.e],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.p(0,s,b)}},
i:function(a){return this.b},
siL:function(a){var u=P.e
this.c=H.j(a,"$iE",[u,u],"$aE")}}
V.hj.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.co(this,b)
u.sje(H.b([],[V.cu]))
u.d=null
this.a.p(0,b,u)}return u},
P:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.ct(this,a)
t=P.e
u.siL(new H.aA([t,t]))
this.b.p(0,a,u)}return u},
f8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dZ])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.F(a,o)
m=t.ke(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dP(r,0,null)
throw H.d(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dP(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dZ(j==null?k.b:j,l,o)}++o}}},
sj3:function(a){this.a=H.j(a,"$iE",[P.e,V.co],"$aE")},
sj7:function(a){this.b=H.j(a,"$iE",[P.e,V.ct],"$aE")}}
V.cu.prototype={
i:function(a){return this.b.b+": "+this.da(0)}}
X.d6.prototype={$ib6:1}
X.f4.prototype={
gv:function(){var u=this.x
if(u==null){u=D.M()
this.x=u}return u}}
X.dG.prototype={
gv:function(){var u=this.f
if(u==null){u=D.M()
this.f=u}return u},
aS:function(a){var u
H.c(a,"$ix")
u=this.f
if(u!=null)u.J(a)},
h2:function(){return this.aS(null)},
sbc:function(a){var u,t
if(!J.T(this.b,a)){u=this.b
if(u!=null)u.gv().a3(0,this.gdg())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gdg())
u=new D.F("mover",t,this.b,this,[U.a7])
u.b=!0
this.aS(u)}},
$ib6:1,
$id6:1}
X.dS.prototype={}
V.be.prototype={
bm:function(a){this.b=new P.f7(C.X)
this.c=null
this.sc8(H.b([],[[P.a,W.az]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.az]))
t=a.split("\n")
for(u=t.length,s=[W.az],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.D(p)
n=this.b.hi(p,0,p.length)
m=n==null?p:n
C.k.fu(o,H.jI(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gay(this.d),o)}},
eX:function(a){var u,t,s,r
H.j(a,"$ia",[P.e],"$aa")
this.sc8(H.b([],[[P.a,W.az]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bu()
this.c=t}for(t=t.f8(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bN(t[r])},
sc8:function(a){this.d=H.j(a,"$ia",[[P.a,W.az]],"$aa")}}
V.j5.prototype={
$1:function(a){H.c(a,"$iaY")
P.jH(C.j.f7(this.a.gkk(),2)+" fps")},
$S:52}
V.eP.prototype={
bN:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
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
bu:function(){var u,t,s,r
u=V.hk()
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
s=new V.as()
r=[V.av]
s.sa9(H.b([],r))
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
s=new V.as()
s.sa9(H.b([],r))
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
s=[P.e]
t.aL(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aL(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aL(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f5.prototype={
bN:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
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
bu:function(){var u,t,s,r
u=V.hk()
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
s=new V.as()
r=[V.av]
s.sa9(H.b([],r))
C.a.h(t.a,s)
t=V.u(new H.r("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.r("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.as()
t.sa9(H.b([],r))
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
t=[P.e]
s.aL(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aL(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aL(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.f6.prototype={
bN:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
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
bu:function(){var u,t,s
u=V.hk()
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
s=new V.as()
s.sa9(H.b([],[V.av]))
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
s.aL(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.P("Attr")
s=u.k(0,"Other")
s.d=s.a.P("Other")
return u}}
V.fN.prototype={
eX:function(a){H.j(a,"$ia",[P.e],"$aa")
this.sc8(H.b([],[[P.a,W.az]]))
this.M(C.a.l(a,"\n"),"#111")},
bN:function(a){},
bu:function(){return}}
V.h1.prototype={
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
o=W.m
W.a5(u,"scroll",H.k(new V.h3(s),{func:1,ret:-1,args:[o]}),!1,o)},
e_:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ia",[P.e],"$aa")
this.iZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f8(C.a.kq(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.np(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.D(m[1])
l.textContent=H.D(m[0])
C.k.B(t,l)}else{k=P.es(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
fj:function(a){var u,t,s,r
u=new V.eP("dart")
u.bm("dart")
t=new V.f5("glsl")
t.bm("glsl")
s=new V.f6("html")
s.bm("html")
r=C.a.kg(H.b([u,t,s],[V.be]),new V.h4(a))
if(r!=null)return r
u=new V.fN("plain")
u.bm("plain")
return u},
dY:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a7,"$ia",[P.e],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cU(r).a5(r,"+")){C.a.p(a7,s,C.c.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a5(r,"-")){C.a.p(a7,s,C.c.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fj(a5)
q.eX(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.es(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jO(null)
i.href="#"+H.i(m)
i.textContent=a4
C.k.B(j,i)
C.x.B(k,j)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.x.B(a,r[a0])
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
for(a3=C.a.gW(r);a3.w();)C.x.B(c,a3.gH())
C.n.B(e,d)
C.n.B(e,c)
C.o.B(n,e)}},
jI:function(a){var u,t,s,r,q,p,o
H.j(a,"$ia",[P.e],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.B(this.a,t)
r=C.o.hy(t,-1)
s=H.c((r&&C.n).dE(r,-1),"$iaX").style
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
o=H.c(C.n.dE(r,-1),"$iaX")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).B(o,p)}},
iZ:function(){var u,t,s,r
if(this.b!=null)return
u=V.hk()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.as()
r=[V.av]
s.sa9(H.b([],r))
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
s=new V.as()
s.sa9(H.b([],r))
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
s=new V.as()
s.sa9(H.b([],r))
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
t=new V.as()
t.sa9(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.as()
t.sa9(H.b([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b2())
s=u.k(0,"Other").l(0,"Other")
t=new V.as()
t.sa9(H.b([],r))
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
V.h3.prototype={
$1:function(a){P.ki(C.y,new V.h2(this.a))},
$S:14}
V.h2.prototype={
$0:function(){var u,t,s
u=C.j.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
V.h4.prototype={
$1:function(a){return H.c(a,"$ibe").a===this.a},
$S:53}
V.hc.prototype={
aE:function(a,b,c){var u,t,s,r,q
u=W.jY(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.eA(this.c)
s=t.gm(t)
t=W.a0
W.a5(u,"click",H.k(new V.he(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.eA(this.c).h(0,u)
J.eA(this.c).h(0,document.createElement("br"))
r=P.km().gcY().j(0,H.i(this.a))
if(r==null){this.dU(s)
q=c}else q=P.cW(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.aE(a,b,!1)},
dU:function(a){var u,t,s,r,q
u=P.km()
t=P.e
s=P.lR(u.gcY(),t,t)
s.p(0,this.a,""+a)
r=u.f3(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iN(t,new P.iu([],[]).d3(""),"",q)}}
V.he.prototype={
$1:function(a){var u,t
H.c(a,"$ia0")
u=this.a
t=J.eA(u.c)
t.K(t,new V.hd())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.dU(this.d)},
$S:54}
V.hd.prototype={
$1:function(a){var u
H.c(a,"$iI")
if(!!J.N(a).$ibE){u=a.style
u.border="solid 2px white"}},
$S:55}
N.j1.prototype={
$1:function(a){var u,t,s
u=this.a.Q
t=this.b.f.kt(a)
s=u.c
if(s!==C.e){if(s===C.d)u.aC()
u.c=C.e
u.iX(null)
s=u.a
s.a=null
s.U(null)}u.iW(t)},
$S:20}
N.j2.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dY("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dY("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a9.prototype
u.fB=u.i
u=J.dp.prototype
u.fD=u.i
u=P.n.prototype
u.fC=u.bS
u=W.I.prototype
u.bZ=u.ah
u=W.el.prototype
u.fG=u.at
u=O.cc.prototype
u.fF=u.aC
u=O.aV.prototype
u.c_=u.aC
u=V.dv.prototype
u.fE=u.aJ
u.da=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mZ","ms",13)
u(P,"n_","mt",13)
u(P,"n0","mu",13)
t(P,"kR","mY",3)
s(W,"na",4,null,["$4"],["mw"],24,0)
s(W,"nb",4,null,["$4"],["mx"],24,0)
var m
r(m=E.ak.prototype,"geS",0,0,null,["$1","$0"],["eT","kE"],0,0)
r(m,"geU",0,0,null,["$1","$0"],["eV","kF"],0,0)
r(m,"geQ",0,0,null,["$1","$0"],["eR","kD"],0,0)
r(m,"geO",0,0,null,["$1","$0"],["eP","kA"],0,0)
q(m,"gky","kz",7)
q(m,"gkB","kC",7)
r(m=E.dY.prototype,"gdd",0,0,null,["$1","$0"],["df","de"],0,0)
p(m,"gkT","f4",3)
o(m=X.e4.prototype,"gi5","i6",11)
o(m,"ghU","hV",11)
o(m,"gi_","i0",4)
o(m,"gi9","ia",25)
o(m,"gi7","i8",25)
o(m,"gie","ig",4)
o(m,"gij","ik",4)
o(m,"gi3","i4",4)
o(m,"gih","ii",4)
o(m,"gi1","i2",4)
o(m,"gil","im",36)
o(m,"gio","ip",11)
o(m,"giB","iC",12)
o(m,"gix","iy",12)
o(m,"giz","iA",12)
r(D.bg.prototype,"gfR",0,0,null,["$1","$0"],["az","fS"],0,0)
r(m=D.dr.prototype,"gdJ",0,0,null,["$1","$0"],["dK","ib"],0,0)
o(m,"gir","is",38)
q(m,"ghO","hP",22)
q(m,"giv","iw",22)
n(V.P.prototype,"gm","cP",19)
n(V.Q.prototype,"gm","cP",19)
r(m=U.ca.prototype,"gaP",0,0,null,["$1","$0"],["R","a8"],0,0)
q(m,"ghM","hN",18)
q(m,"git","iu",18)
r(m=U.e5.prototype,"gaP",0,0,null,["$1","$0"],["R","a8"],0,0)
o(m,"gcb","cc",1)
o(m,"gcd","ce",1)
o(m,"gcf","cg",1)
r(m=U.e6.prototype,"gaP",0,0,null,["$1","$0"],["R","a8"],0,0)
o(m,"gcb","cc",1)
o(m,"gcd","ce",1)
o(m,"gcf","cg",1)
o(m,"ghD","hE",1)
o(m,"ghF","hG",1)
o(m,"gjc","jd",1)
o(m,"gja","jb",1)
o(m,"gj8","j9",1)
o(U.e7.prototype,"ghI","hJ",1)
r(m=M.db.prototype,"gaQ",0,0,null,["$1","$0"],["aR","fT"],0,0)
q(m,"ghW","hX",7)
q(m,"ghY","hZ",7)
r(m=O.di.prototype,"gjk",0,1,null,["$2$color","$1"],["dV","jl"],45,0)
o(m,"ghK","hL",10)
o(m,"ghc","hd",10)
o(m,"gdl","h8",10)
r(m=O.dw.prototype,"gbo",0,0,null,["$1","$0"],["U","ck"],0,0)
r(m,"giP",0,0,null,["$1","$0"],["dO","iQ"],0,0)
q(m,"ghQ","hR",16)
q(m,"ghS","hT",16)
r(O.cc.prototype,"gbo",0,0,null,["$1","$0"],["U","ck"],0,0)
r(X.dG.prototype,"gdg",0,0,null,["$1","$0"],["aS","h2"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.jj,J.a9,J.aq,P.eh,P.n,H.cb,P.aS,H.bC,H.cE,H.eL,H.fR,H.hn,P.bi,H.c5,H.em,P.bK,H.fm,H.fo,H.fj,P.en,P.b1,P.aD,P.ea,P.h6,P.cq,P.h7,P.aY,P.ai,P.iK,P.ip,P.bS,P.eg,P.S,P.iB,P.fu,P.by,P.f8,P.iI,P.iG,P.H,P.aj,P.ag,P.bh,P.fL,P.dO,P.ed,P.f3,P.bj,P.a,P.E,P.B,P.at,P.e,P.ae,P.bT,P.hB,P.is,W.eN,W.bq,W.au,W.dE,W.el,W.iw,W.dd,W.ax,W.io,W.et,P.it,P.eq,P.ii,P.K,O.Y,O.cd,E.eF,E.ak,E.fS,E.dY,Z.e8,Z.e9,Z.bc,Z.d4,Z.bk,Z.aM,D.eI,D.bA,D.x,X.d5,X.dq,X.fl,X.fr,X.aw,X.fD,X.hl,X.e4,D.bg,D.a3,D.dH,D.dN,D.dV,D.dW,D.dX,V.a4,V.Z,V.eW,V.dy,V.al,V.ad,V.ay,V.dI,V.dL,V.P,V.Q,U.e5,U.e6,U.e7,M.db,A.d1,A.eC,A.fA,A.cw,A.cA,A.cy,A.cB,A.cz,A.cC,A.bz,A.e0,A.hv,F.a2,F.ar,F.bm,F.aa,F.fZ,F.h_,F.h0,F.X,F.hL,F.hM,F.hP,F.hQ,O.bR,O.cc,T.hg,V.b2,V.av,V.dv,V.fQ,V.fY,V.co,V.dZ,V.ct,V.hj,X.d6,X.dS,X.dG,V.be,V.h1,V.hc])
s(J.a9,[J.fi,J.dm,J.dp,J.aT,J.dn,J.bI,H.bL,W.bB,W.bx,W.eb,W.eQ,W.d9,W.da,W.m,W.dg,W.ee,W.b4,W.dt,W.ej,W.dK,W.aJ,W.eo,W.eu,P.d2,P.de,P.dJ,P.bQ,P.dM,P.dT,P.e1])
s(J.dp,[J.fM,J.cD,J.bl])
t(J.ji,J.aT)
s(J.dn,[J.dl,J.dk])
t(P.fq,P.eh)
s(P.fq,[H.e2,W.i_,W.ao,P.f_])
t(H.r,H.e2)
s(P.n,[H.eT,H.fv,H.cF])
s(H.eT,[H.bJ,H.fn])
s(P.aS,[H.fw,H.hU])
t(H.fx,H.bJ)
t(H.eM,H.eL)
s(P.bi,[H.fK,H.fk,H.hz,H.hp,H.eH,H.fW,P.dF,P.aH,P.hA,P.hx,P.cp,P.eK,P.eO])
s(H.c5,[H.j6,H.hb,H.iY,H.iZ,H.j_,P.hW,P.hV,P.hX,P.hY,P.iA,P.iz,P.i5,P.i9,P.i6,P.i7,P.i8,P.ic,P.id,P.ib,P.ia,P.h8,P.h9,P.iS,P.il,P.ik,P.im,P.fp,P.ft,P.iH,P.eR,P.eS,P.hF,P.hC,P.hD,P.hE,P.iC,P.iD,P.iF,P.iE,P.iO,P.iN,P.iP,P.iQ,W.eU,W.i4,W.fJ,W.fI,W.iq,W.ir,W.iy,W.iJ,P.iv,P.iU,P.f0,P.f1,E.fT,E.fU,E.fV,E.hi,D.eY,D.eZ,F.iL,F.hS,F.hR,F.hN,F.hO,O.fe,O.fd,O.ff,O.fg,O.fc,O.fb,O.fa,T.hh,V.j5,V.h3,V.h2,V.h4,V.he,V.hd,N.j1,N.j2])
s(H.hb,[H.h5,H.c3])
t(P.fs,P.bK)
s(P.fs,[H.aA,W.hZ])
t(H.dA,H.bL)
s(H.dA,[H.cJ,H.cL])
t(H.cK,H.cJ)
t(H.dB,H.cK)
t(H.cM,H.cL)
t(H.dC,H.cM)
s(H.dC,[H.fE,H.fF,H.fG,H.fH,H.dD,H.cg])
t(P.ij,P.iK)
t(P.ih,P.ip)
t(P.er,P.fu)
t(P.e3,P.er)
s(P.by,[P.eD,P.eV])
t(P.bf,P.h7)
s(P.bf,[P.eE,P.f7,P.hI,P.hH])
t(P.hG,P.eV)
s(P.ag,[P.y,P.l])
s(P.aH,[P.bP,P.f9])
t(P.i0,P.bT)
s(W.bB,[W.z,W.cG])
s(W.z,[W.I,W.bd,W.c7,W.cH])
s(W.I,[W.v,P.o])
s(W.v,[W.d_,W.eB,W.c2,W.bb,W.bw,W.az,W.f2,W.df,W.bE,W.ce,W.fX,W.aX,W.dQ,W.dR,W.ha,W.cr])
t(W.c6,W.eb)
t(W.ef,W.ee)
t(W.bD,W.ef)
t(W.dh,W.c7)
t(W.bp,W.m)
s(W.bp,[W.aU,W.a0,W.aK])
t(W.ek,W.ej)
t(W.ch,W.ek)
t(W.ep,W.eo)
t(W.hm,W.ep)
t(W.hT,W.ce)
t(W.b0,W.a0)
t(W.ec,W.da)
t(W.ev,W.eu)
t(W.ei,W.ev)
t(W.i1,W.hZ)
t(W.i2,P.h6)
t(W.jr,W.i2)
t(W.i3,P.cq)
t(W.ix,W.el)
t(P.iu,P.it)
t(P.aB,P.ii)
t(P.ck,P.o)
s(E.eF,[Z.d3,A.cl,T.cs])
s(D.x,[D.bG,D.bH,D.F,X.fO])
s(X.fO,[X.du,X.b5,X.cf,X.e_])
s(O.Y,[D.dr,U.ca])
s(D.eI,[U.eJ,U.a7,F.cn])
t(U.d7,U.a7)
s(A.cl,[A.dj,A.dx])
s(A.e0,[A.J,A.hs,A.ht,A.hu,A.hq,A.W,A.hr,A.G,A.cv,A.hw,A.cx,A.af,A.am,A.an])
s(O.bR,[O.di,O.dw])
s(O.cc,[O.fy,O.fz,O.aV])
s(O.aV,[O.fB,O.fC])
t(T.dU,T.cs)
t(T.hf,T.dU)
s(V.dv,[V.as,V.cu])
t(X.f4,X.dS)
s(V.be,[V.eP,V.f5,V.f6,V.fN])
u(H.e2,H.cE)
u(H.cJ,P.S)
u(H.cK,H.bC)
u(H.cL,P.S)
u(H.cM,H.bC)
u(P.eh,P.S)
u(P.er,P.iB)
u(W.eb,W.eN)
u(W.ee,P.S)
u(W.ef,W.au)
u(W.ej,P.S)
u(W.ek,W.au)
u(W.eo,P.S)
u(W.ep,W.au)
u(W.eu,P.S)
u(W.ev,W.au)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bb.prototype
C.q=W.bw.prototype
C.D=W.bx.prototype
C.k=W.az.prototype
C.T=W.d9.prototype
C.V=W.df.prototype
C.W=W.dg.prototype
C.z=W.dh.prototype
C.Y=J.a9.prototype
C.a=J.aT.prototype
C.Z=J.dk.prototype
C.f=J.dl.prototype
C.r=J.dm.prototype
C.j=J.dn.prototype
C.c=J.bI.prototype
C.a5=J.bl.prototype
C.ab=W.ch.prototype
C.L=J.fM.prototype
C.M=W.dK.prototype
C.b=P.bQ.prototype
C.x=W.aX.prototype
C.o=W.dQ.prototype
C.n=W.dR.prototype
C.C=J.cD.prototype
C.N=W.b0.prototype
C.O=W.cG.prototype
C.Q=new P.eE(!1)
C.P=new P.eD(C.Q)
C.R=new P.fL()
C.S=new P.hI()
C.l=new P.ij()
C.d=new A.bz(0,"ColorSourceType.None")
C.i=new A.bz(1,"ColorSourceType.Solid")
C.e=new A.bz(2,"ColorSourceType.Texture2D")
C.h=new A.bz(3,"ColorSourceType.TextureCube")
C.y=new P.bh(0)
C.U=new P.bh(5e6)
C.X=new P.f8("element",!0,!1,!1,!1)
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
C.G=H.b(u([127,2047,65535,1114111]),[P.l])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a6=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a7=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.H=H.b(u([]),[P.e])
C.a8=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.J=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.a9=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.K=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.aa=new H.eM(0,{},C.H,[P.e,P.e])
C.m=new P.hG(!1)})();(function staticFields(){$.aQ=0
$.c4=null
$.jQ=null
$.jv=!1
$.kU=null
$.kP=null
$.l_=null
$.iV=null
$.j0=null
$.jE=null
$.bV=null
$.cQ=null
$.cR=null
$.jw=!1
$.V=C.l
$.b3=null
$.je=null
$.jX=null
$.jW=null
$.k4=null
$.k8=null
$.ci=null
$.kd=null
$.kp=null
$.kt=null
$.kr=null
$.ks=null
$.hJ=null
$.kq=null
$.lJ="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.lI="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.k7=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nx","l2",function(){return H.kT("_$dart_dartClosure")})
u($,"ny","jJ",function(){return H.kT("_$dart_js")})
u($,"nC","l3",function(){return H.aZ(H.ho({
toString:function(){return"$receiver$"}}))})
u($,"nD","l4",function(){return H.aZ(H.ho({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nE","l5",function(){return H.aZ(H.ho(null))})
u($,"nF","l6",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nI","l9",function(){return H.aZ(H.ho(void 0))})
u($,"nJ","la",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nH","l8",function(){return H.aZ(H.kk(null))})
u($,"nG","l7",function(){return H.aZ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nL","lc",function(){return H.aZ(H.kk(void 0))})
u($,"nK","lb",function(){return H.aZ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o1","jK",function(){return P.mr()})
u($,"o7","cY",function(){return[]})
u($,"nO","ld",function(){return P.mn()})
u($,"o2","lh",function(){return H.lV(H.bU(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"o5","lj",function(){return P.ma("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"o6","lk",function(){return P.mQ()})
u($,"o3","li",function(){return P.k1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"o4","jL",function(){return P.k0(P.e,P.bj)})
u($,"nV","lg",function(){return Z.aC(0)})
u($,"nP","le",function(){return Z.aC(511)})
u($,"nX","aP",function(){return Z.aC(1)})
u($,"nW","aO",function(){return Z.aC(2)})
u($,"nR","aN",function(){return Z.aC(4)})
u($,"nY","b9",function(){return Z.aC(8)})
u($,"nZ","ba",function(){return Z.aC(16)})
u($,"nS","bu",function(){return Z.aC(32)})
u($,"nT","cX",function(){return Z.aC(64)})
u($,"nU","lf",function(){return Z.aC(96)})
u($,"o_","c1",function(){return Z.aC(128)})
u($,"nQ","b8",function(){return Z.aC(256)})
u($,"nw","l1",function(){return new V.eW(1e-9)})
u($,"nv","L",function(){return $.l1()})})()
var v={mangledGlobalNames:{l:"int",y:"double",ag:"num",e:"String",H:"bool",B:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.B,args:[F.a2]},{func:1,ret:P.B,args:[,,]},{func:1,ret:-1,args:[P.l,[P.n,E.ak]]},{func:1,ret:P.B,args:[D.x]},{func:1,ret:P.B,args:[F.X]},{func:1,ret:F.aa,args:[F.aa]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.m]},{func:1,ret:P.B,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.al]]},{func:1,ret:P.e,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.n,U.a7]]},{func:1,ret:P.y},{func:1,ret:P.B,args:[P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[P.l,[P.n,D.a3]]},{func:1,args:[,]},{func:1,ret:P.H,args:[W.I,P.e,P.e,W.bq]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.H,args:[W.z]},{func:1,ret:P.H,args:[W.ax]},{func:1,ret:P.H,args:[P.e]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:W.I,args:[W.z]},{func:1,ret:P.B,args:[P.ag]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,args:[W.m]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.K,args:[P.l]},{func:1,ret:P.H,args:[[P.n,D.a3]]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,args:[,P.e]},{func:1,ret:P.B,args:[F.X,P.y,P.y]},{func:1,args:[P.e]},{func:1,ret:F.aa,args:[F.aa],named:{color:V.Z}},{func:1,ret:-1,args:[P.e,P.l]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[F.X,F.X]},{func:1,ret:P.B,args:[F.ar]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:P.B,args:[P.aY]},{func:1,ret:P.H,args:[V.be]},{func:1,ret:P.B,args:[W.a0]},{func:1,ret:P.B,args:[W.I]},{func:1,ret:P.B,args:[,],opt:[P.at]},{func:1,ret:P.B,args:[P.e,,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a9,MediaError:J.a9,Navigator:J.a9,NavigatorConcurrentHardware:J.a9,NavigatorUserMediaError:J.a9,OverconstrainedError:J.a9,PositionError:J.a9,WebGLActiveInfo:J.a9,WebGLRenderbuffer:J.a9,WebGL2RenderingContext:J.a9,SQLError:J.a9,ArrayBufferView:H.bL,Float32Array:H.dB,Int16Array:H.fE,Int32Array:H.fF,Int8Array:H.fG,Uint32Array:H.fH,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.cg,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLInputElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,HTMLAnchorElement:W.d_,HTMLAreaElement:W.eB,HTMLBaseElement:W.c2,HTMLBodyElement:W.bb,HTMLCanvasElement:W.bw,CanvasRenderingContext2D:W.bx,CDATASection:W.bd,CharacterData:W.bd,Comment:W.bd,ProcessingInstruction:W.bd,Text:W.bd,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,HTMLDivElement:W.az,XMLDocument:W.c7,Document:W.c7,DOMException:W.eQ,DOMImplementation:W.d9,DOMRectReadOnly:W.da,Element:W.I,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bB,HTMLFormElement:W.f2,HTMLHeadElement:W.df,History:W.dg,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,HTMLDocument:W.dh,ImageData:W.b4,HTMLImageElement:W.bE,KeyboardEvent:W.aU,Location:W.dt,HTMLAudioElement:W.ce,HTMLMediaElement:W.ce,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.ch,RadioNodeList:W.ch,Range:W.dK,HTMLSelectElement:W.fX,HTMLTableCellElement:W.aX,HTMLTableDataCellElement:W.aX,HTMLTableHeaderCellElement:W.aX,HTMLTableElement:W.dQ,HTMLTableRowElement:W.dR,HTMLTableSectionElement:W.ha,HTMLTemplateElement:W.cr,Touch:W.aJ,TouchEvent:W.aK,TouchList:W.hm,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,HTMLVideoElement:W.hT,WheelEvent:W.b0,Window:W.cG,DOMWindow:W.cG,Attr:W.cH,ClientRect:W.ec,DOMRect:W.ec,NamedNodeMap:W.ei,MozNamedAttrMap:W.ei,SVGScriptElement:P.ck,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.d2,WebGLFramebuffer:P.de,WebGLProgram:P.dJ,WebGLRenderingContext:P.bQ,WebGLShader:P.dM,WebGLTexture:P.dT,WebGLUniformLocation:P.e1})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kX,[])
else N.kX([])})})()
//# sourceMappingURL=test.dart.js.map
