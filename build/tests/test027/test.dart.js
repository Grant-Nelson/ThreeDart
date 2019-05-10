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
a[c]=function(){a[c]=function(){H.pX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lS(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ly:function ly(a){this.a=a},
kU:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hy:function(){return new P.cc("No element")},
oe:function(){return new P.cc("Too many elements")},
od:function(){return new P.cc("Too few elements")},
v:function v(a){this.a=a},
hd:function hd(){},
c5:function c5(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hP:function hP(a,b,c){this.a=a
this.b=b
this.$ti=c},
hQ:function hQ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hR:function hR(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
jK:function jK(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
d5:function d5(){},
ez:function ez(){},
o5:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
co:function(a){var u,t
u=H.I(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pF:function(a){return v.types[H.aa(a)]},
pM:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iL},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.au(a))
return u},
oB:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hz(u)
t=u[0]
s=u[1]
return new H.ip(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oy:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.I(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.J(r,p)|32)>s)return}return parseInt(a,b)},
c8:function(a){return H.op(a)+H.lP(H.bV(a),0,null)},
op:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibR){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.co(r.length>1&&C.c.J(r,0)===36?C.c.aB(r,1):r)},
oq:function(){if(!!self.location)return self.location.href
return},
mx:function(a){var u,t,s,r,q
H.l_(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oz:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.au(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.b3(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.au(r))}return H.mx(u)},
my:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.au(s))
if(s<0)throw H.c(H.au(s))
if(s>65535)return H.oz(a)}return H.mx(a)},
oA:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c9:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b3(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ox:function(a){var u=H.c7(a).getFullYear()+0
return u},
ov:function(a){var u=H.c7(a).getMonth()+1
return u},
or:function(a){var u=H.c7(a).getDate()+0
return u},
os:function(a){var u=H.c7(a).getHours()+0
return u},
ou:function(a){var u=H.c7(a).getMinutes()+0
return u},
ow:function(a){var u=H.c7(a).getSeconds()+0
return u},
ot:function(a){var u=H.c7(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.au(a))},
h:function(a,b){if(a==null)J.aH(a)
throw H.c(H.cj(a,b))},
cj:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
u=H.aa(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,"index",null,u)
return P.eb(b,"index",null)},
py:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
au:function(a){return new P.aP(!0,a,null,null)},
pu:function(a){if(typeof a!=="number")throw H.c(H.au(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nt})
u.name=""}else u.toString=H.nt
return u},
nt:function(){return J.av(this.dartException)},
t:function(a){throw H.c(a)},
C:function(a){throw H.c(P.bm(a))},
bg:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mJ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ms:function(a,b){return new H.ib(a,b==null?null:b.method)},
lz:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hC(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.lj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.b3(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lz(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ms(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.nx()
p=$.ny()
o=$.nz()
n=$.nA()
m=$.nD()
l=$.nE()
k=$.nC()
$.nB()
j=$.nG()
i=$.nF()
h=q.aq(t)
if(h!=null)return u.$1(H.lz(H.I(t),h))
else{h=p.aq(t)
if(h!=null){h.method="call"
return u.$1(H.lz(H.I(t),h))}else{h=o.aq(t)
if(h==null){h=n.aq(t)
if(h==null){h=m.aq(t)
if(h==null){h=l.aq(t)
if(h==null){h=k.aq(t)
if(h==null){h=n.aq(t)
if(h==null){h=j.aq(t)
if(h==null){h=i.aq(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ms(H.I(t),h))}}return u.$1(new H.jl(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ek()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aP(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ek()
return a},
cm:function(a){var u
if(a==null)return new H.ff(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ff(a)},
pB:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pL:function(a,b,c,d,e,f){H.e(a,"$ibI")
switch(H.aa(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
ci:function(a,b){var u
H.aa(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pL)
a.$identity=u
return u},
o4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.oB(u).r}else s=d
r=e?Object.create(new H.iL().constructor.prototype):Object.create(new H.cr(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b2
if(typeof p!=="number")return p.p()
$.b2=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.mb(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pF,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.m9:H.lp
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.mb(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
o1:function(a,b,c,d){var u=H.lp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
mb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o1(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
if(q==null){q=H.fV("self")
$.cs=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
if(q==null){q=H.fV("self")
$.cs=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
o2:function(a,b,c,d){var u,t
u=H.lp
t=H.m9
switch(b?-1:a){case 0:throw H.c(H.oF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o3:function(a,b){var u,t,s,r,q,p,o,n
u=$.cs
if(u==null){u=H.fV("self")
$.cs=u}t=$.m8
if(t==null){t=H.fV("receiver")
$.m8=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.o2(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
return new Function(u+t+"}")()},
lS:function(a,b,c,d,e,f,g){return H.o4(a,b,H.aa(c),d,!!e,!!f,g)},
lp:function(a){return a.a},
m9:function(a){return a.c},
fV:function(a){var u,t,s,r,q
u=new H.cr("self","target","receiver","name")
t=J.hz(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
pz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
aa:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
nq:function(a,b){throw H.c(H.b0(a,H.co(H.I(b).substring(2))))},
pT:function(a,b){throw H.c(H.o0(a,H.co(H.I(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.nq(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pT(a,b)},
l_:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
nn:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.nq(a,b)},
nj:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aa(u)]
else return a.$S()}return},
fE:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.nj(J.X(a))
if(u==null)return!1
return H.n5(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lM)return a
$.lM=!0
try{if(H.fE(a,b))return a
u=H.le(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lM=!1}},
lT:function(a,b){if(a!=null&&!H.lR(a,b))H.t(H.b0(a,H.le(b)))
return a},
b0:function(a,b){return new H.j9("TypeError: "+P.hh(a)+": type '"+H.na(a)+"' is not a subtype of type '"+b+"'")},
o0:function(a,b){return new H.fW("CastError: "+P.hh(a)+": type '"+H.na(a)+"' is not a subtype of type '"+b+"'")},
na:function(a){var u,t
u=J.X(a)
if(!!u.$icu){t=H.nj(u)
if(t!=null)return H.le(t)
return"Closure"}return H.c8(a)},
pX:function(a){throw H.c(new P.h5(H.I(a)))},
oF:function(a){return new H.iw(a)},
nk:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
qG:function(a,b,c){return H.cn(a["$a"+H.m(c)],H.bV(b))},
bU:function(a,b,c,d){var u
H.I(c)
H.aa(d)
u=H.cn(a["$a"+H.m(c)],H.bV(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.I(b)
H.aa(c)
u=H.cn(a["$a"+H.m(b)],H.bV(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.aa(b)
u=H.bV(a)
return u==null?null:u[b]},
le:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.k(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.lP(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aa(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.pj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.c.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.S)o+=" extends "+H.bT(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bT(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bT(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bT(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pA(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.I(u[g])
i=i+h+H.bT(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lP:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dp:function(a,b,c,d){var u,t
H.I(b)
H.l_(c)
H.I(d)
if(a==null)return!1
u=H.bV(a)
t=J.X(a)
if(t[b]==null)return!1
return H.nd(H.cn(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.l_(c)
H.I(d)
if(a==null)return a
if(H.dp(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.lP(c,0,null),v.mangledGlobalNames)))},
nd:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qE:function(a,b,c){return a.apply(b,H.cn(J.X(b)["$a"+H.m(c)],H.bV(b)))},
nm:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="M"||a===-1||a===-2||H.nm(u)}return!1},
lR:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="M"||b===-1||b===-2||H.nm(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fE(a,b)}u=J.X(a).constructor
t=H.bV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lR(a,b))throw H.c(H.b0(a,H.le(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.n5(a,b,c,d)
if('func' in a)return c.name==="bI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aO("type" in a?a.type:null,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.cn(r,u?a.slice(1):null)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.nd(H.cn(m,u),b,p,d)},
n5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aO(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aO(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aO(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pQ(h,b,g,d)},
pQ:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aO(c[r],d,a[r],b))return!1}return!0},
qF:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pO:function(a){var u,t,s,r,q,p
u=H.I($.nl.$1(a))
t=$.kT[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kY[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.I($.nc.$2(a,u))
if(u!=null){t=$.kT[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kY[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ld(s)
$.kT[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kY[u]=s
return s}if(q==="-"){p=H.ld(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.np(a,s)
if(q==="*")throw H.c(P.jk(u))
if(v.leafTags[u]===true){p=H.ld(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.np(a,s)},
np:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ld:function(a){return J.lV(a,!1,null,!!a.$iL)},
pP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ld(u)
else return J.lV(u,c,null,null)},
pJ:function(){if(!0===$.lU)return
$.lU=!0
H.pK()},
pK:function(){var u,t,s,r,q,p,o,n
$.kT=Object.create(null)
$.kY=Object.create(null)
H.pI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nr.$1(q)
if(p!=null){o=H.pP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pI:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.ch(C.a0,H.ch(C.a5,H.ch(C.E,H.ch(C.E,H.ch(C.a4,H.ch(C.a1,H.ch(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.nl=new H.kV(q)
$.nc=new H.kW(p)
$.nr=new H.kX(o)},
ch:function(a,b){return a(b)||b},
og:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
pW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lW:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h_:function h_(){},
h0:function h0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ib:function ib(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
lj:function lj(a){this.a=a},
ff:function ff(a){this.a=a
this.b=null},
cu:function cu(){},
iU:function iU(){},
iL:function iL(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
fW:function fW(a){this.a=a},
iw:function iw(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hG:function hG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hH:function hH(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
oo:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cj(b,a))},
ph:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.py(a,b,c))
return b},
cK:function cK(){},
bN:function bN(){},
e2:function e2(){},
cL:function cL(){},
e3:function e3(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
e4:function e4(){},
cM:function cM(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
pA:function(a){return J.mi(a?Object.keys(a):[],null)},
pS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fG:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lU==null){H.pJ()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.jk("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lY()]
if(q!=null)return q
q=H.pO(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lY(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
of:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lo(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.mi(new Array(a),b)},
mi:function(a,b){return J.hz(H.d(a,[b]))},
hz:function(a){H.l_(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.hA.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fG(a)},
pC:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fG(a)},
cl:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fG(a)},
fF:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fG(a)},
pD:function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bR.prototype
return a},
pE:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bR.prototype
return a},
dq:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bR.prototype
return a},
ae:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fG(a)},
nP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pC(a).p(a,b)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).B(a,b)},
m0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pE(a).v(a,b)},
nQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.pD(a).u(a,b)},
m1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cl(a).j(a,b)},
ll:function(a,b,c){return J.fF(a).n(a,b,c)},
nR:function(a,b){return J.dq(a).J(a,b)},
fI:function(a,b){return J.ae(a).iZ(a,b)},
lm:function(a,b,c){return J.ae(a).j2(a,b,c)},
nS:function(a,b,c,d){return J.ae(a).k0(a,b,c,d)},
m2:function(a,b){return J.ae(a).F(a,b)},
nT:function(a,b){return J.dq(a).a4(a,b)},
fJ:function(a,b){return J.fF(a).N(a,b)},
nU:function(a,b,c,d){return J.ae(a).kA(a,b,c,d)},
m3:function(a,b){return J.fF(a).P(a,b)},
nV:function(a){return J.ae(a).gkc(a)},
m4:function(a){return J.ae(a).gcQ(a)},
dv:function(a){return J.X(a).gL(a)},
bB:function(a){return J.fF(a).gX(a)},
aH:function(a){return J.cl(a).gl(a)},
nW:function(a){return J.ae(a).gll(a)},
ln:function(a,b){return J.ae(a).ba(a,b)},
m5:function(a){return J.fF(a).la(a)},
nX:function(a,b){return J.ae(a).lf(a,b)},
nY:function(a,b,c){return J.ae(a).fM(a,b,c)},
nZ:function(a,b,c){return J.dq(a).A(a,b,c)},
o_:function(a){return J.dq(a).lr(a)},
av:function(a){return J.X(a).i(a)},
a:function a(){},
hA:function hA(){},
dR:function dR(){},
dS:function dS(){},
ig:function ig(){},
bR:function bR(){},
bq:function bq(){},
aR:function aR(a){this.$ti=a},
lx:function lx(a){this.$ti=a},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bM:function bM(){},
dQ:function dQ(){},
dP:function dP(){},
bp:function bp(){}},P={
oU:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.pr()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ci(new P.jM(u),1)).observe(t,{childList:true})
return new P.jL(u,t,s)}else if(self.setImmediate!=null)return P.ps()
return P.pt()},
oV:function(a){self.scheduleImmediate(H.ci(new P.jN(H.n(a,{func:1,ret:-1})),0))},
oW:function(a){self.setImmediate(H.ci(new P.jO(H.n(a,{func:1,ret:-1})),0))},
oX:function(a){P.lD(C.y,H.n(a,{func:1,ret:-1}))},
lD:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.ac(a.a,1000)
return P.p2(u<0?0:u,b)},
mI:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.f.ac(a.a,1000)
return P.p3(u<0?0:u,b)},
p2:function(a,b){var u=new P.fl(!0)
u.hj(a,b)
return u},
p3:function(a,b){var u=new P.fl(!1)
u.hk(a,b)
return u},
oY:function(a,b){var u,t,s
b.a=1
try{a.fo(new P.jY(b),new P.jZ(b),null)}catch(s){u=H.ak(s)
t=H.cm(s)
P.pU(new P.k_(b,u,t))}},
mV:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaN")
if(u>=4){t=b.cz()
b.a=a.a
b.c=a.c
P.da(b,t)}else{t=H.e(b.c,"$ibj")
b.a=2
b.c=a
a.e5(t)}},
da:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iap")
t=t.b
p=q.a
o=q.b
t.toString
P.kJ(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.da(u.a,b)}t=u.a
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
if(k){H.e(m,"$iap")
t=t.b
p=m.a
o=m.b
t.toString
P.kJ(null,null,t,p,o)
return}j=$.a3
if(j!=l)$.a3=l
else j=null
t=b.c
if(t===8)new P.k3(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.k2(s,b,m).$0()}else if((t&2)!==0)new P.k1(u,s,b).$0()
if(j!=null)$.a3=j
t=s.b
if(!!J.X(t).$icB){if(t.a>=4){i=H.e(o.c,"$ibj")
o.c=null
b=o.bD(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mV(t,o)
return}}h=b.b
i=H.e(h.c,"$ibj")
h.c=null
b=h.bD(i)
t=s.a
p=s.b
if(!t){H.B(p,H.u(h,0))
h.a=4
h.c=p}else{H.e(p,"$iap")
h.a=8
h.c=p}u.a=h
t=h}},
pm:function(a,b){if(H.fE(a,{func:1,args:[P.S,P.aA]}))return H.n(a,{func:1,ret:null,args:[P.S,P.aA]})
if(H.fE(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.lo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pl:function(){var u,t
for(;u=$.cg,u!=null;){$.dn=null
t=u.b
$.cg=t
if(t==null)$.dm=null
u.a.$0()}},
pq:function(){$.lN=!0
try{P.pl()}finally{$.dn=null
$.lN=!1
if($.cg!=null)$.lZ().$1(P.ne())}},
n9:function(a){var u=new P.eI(H.n(a,{func:1,ret:-1}))
if($.cg==null){$.dm=u
$.cg=u
if(!$.lN)$.lZ().$1(P.ne())}else{$.dm.b=u
$.dm=u}},
pp:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cg
if(u==null){P.n9(a)
$.dn=$.dm
return}t=new P.eI(a)
s=$.dn
if(s==null){t.b=u
$.dn=t
$.cg=t}else{t.b=s.b
s.b=t
$.dn=t
if(t.b==null)$.dm=t}},
pU:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a3
if(C.l===t){P.kL(null,null,C.l,a)
return}t.toString
P.kL(null,null,t,H.n(t.cL(a),u))},
mH:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a3
if(t===C.l){t.toString
return P.lD(a,b)}return P.lD(a,H.n(t.cL(b),u))},
oL:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.be]}
H.n(b,u)
t=$.a3
if(t===C.l){t.toString
return P.mI(a,b)}s=t.eo(b,P.be)
$.a3.toString
return P.mI(a,H.n(s,u))},
kJ:function(a,b,c,d,e){var u={}
u.a=d
P.pp(new P.kK(u,e))},
n6:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
n7:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
pn:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kL:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cL(d):c.kd(d,-1)
P.n9(d)},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
fl:function fl(a){this.a=a
this.b=null
this.c=0},
ks:function ks(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jX:function jX(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k4:function k4(a){this.a=a},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.a=a
this.b=null},
iO:function iO(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
cT:function cT(){},
iP:function iP(){},
be:function be(){},
ap:function ap(a,b){this.a=a
this.b=b},
kC:function kC(){},
kK:function kK(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
oi:function(a,b,c,d,e){return new H.aS([d,e])},
lA:function(a,b){return new H.aS([a,b])},
ok:function(a){return H.pB(a,new H.aS([null,null]))},
dW:function(a,b,c,d){return new P.k8([d])},
lJ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
p1:function(a,b,c){var u=new P.eX(a,b,[c])
u.c=a.e
return u},
oc:function(a,b,c){var u,t
if(P.lO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
t=$.du()
C.a.h(t,a)
try{P.pk(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.mE(b,H.nn(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lw:function(a,b,c){var u,t,s
if(P.lO(a))return b+"..."+c
u=new P.am(b)
t=$.du()
C.a.h(t,a)
try{s=u
s.a=P.mE(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lO:function(a){var u,t
for(u=0;t=$.du(),u<t.length;++u)if(a===t[u])return!0
return!1},
pk:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.f],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.m(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.E();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
oj:function(a,b,c){var u=P.oi(null,null,null,b,c)
a.P(0,new P.hJ(u,b,c))
return u},
mj:function(a,b){var u,t,s
u=P.dW(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.B(a[s],b))
return u},
lB:function(a){var u,t
u={}
if(P.lO(a))return"{...}"
t=new P.am("")
try{C.a.h($.du(),a)
t.a+="{"
u.a=!0
J.m3(a,new P.hN(u,t))
t.a+="}"}finally{u=$.du()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k8:function k8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a
this.c=this.b=null},
eX:function eX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(){},
y:function y(){},
hM:function hM(){},
hN:function hN(a,b){this.a=a
this.b=b},
ah:function ah(){},
kt:function kt(){},
hO:function hO(){},
eA:function eA(a,b){this.a=a
this.$ti=b},
kf:function kf(){},
eY:function eY(){},
fr:function fr(){},
oP:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oQ(!1,b,c,d)
return},
oQ:function(a,b,c,d){var u,t,s
u=$.nH()
if(u==null)return
t=0===c
if(t&&!0)return P.lG(u,b)
s=b.length
d=P.bu(c,d,s,null,null,null)
if(t&&d===s)return P.lG(u,b)
return P.lG(u,b.subarray(c,d))},
lG:function(a,b){if(P.oS(b))return
return P.oT(a,b)},
oT:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oS:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
oR:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
po:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cl(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c5()
if((s&127)!==s)return t-b}return c-b},
m7:function(a,b,c,d,e,f){if(C.f.bx(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
c0:function c0(){},
bF:function bF(){},
hf:function hf(){},
hv:function hv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hu:function hu(a){this.a=a},
jt:function jt(a){this.a=a},
jv:function jv(){},
kA:function kA(a){this.b=this.a=0
this.c=a},
ju:function ju(a){this.a=a},
ky:function ky(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kz:function kz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.f]})
u=H.oy(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
oa:function(a){if(a instanceof H.cu)return a.i(0)
return"Instance of '"+H.c8(a)+"'"},
ol:function(a,b,c,d){var u,t
H.B(b,d)
u=J.of(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
mk:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bB(a);s.E();)C.a.h(t,H.B(s.gM(s),c))
if(b)return t
return H.k(J.hz(t),"$ib",u,"$ab")},
el:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaR",[u],"$aaR")
t=a.length
c=P.bu(b,c,t,null,null,null)
return H.my(b>0||c<t?C.a.fT(a,b,c):a)}if(!!J.X(a).$icM)return H.oA(a,b,P.bu(b,c,a.length,null,null,null))
return P.oJ(a,b,c)},
oJ:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aH(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aH(a),null,null))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.af(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.af(c,b,s,null,null))
r.push(t.gM(t))}return H.my(r)},
oD:function(a,b,c){return new H.hB(a,H.og(a,!1,!0,!1))},
mE:function(a,b,c){var u=J.bB(b)
if(!u.E())return a
if(c.length===0){do a+=H.m(u.gM(u))
while(u.E())}else{a+=H.m(u.gM(u))
for(;u.E();)a=a+c+H.m(u.gM(u))}return a},
mL:function(){var u=H.oq()
if(u!=null)return P.oO(u,0,null)
throw H.c(P.H("'Uri.base' is not supported"))},
fs:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nN().b
if(typeof b!=="string")H.t(H.au(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.ao(c,"c0",0))
t=c.gkz().cR(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c9(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
o6:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
o7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dF:function(a){if(a>=10)return""+a
return"0"+a},
mc:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
hh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.oa(a)},
dx:function(a){return new P.aP(!1,null,null,a)},
lo:function(a,b,c){return new P.aP(!0,a,b,c)},
eb:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c,d,e,f){if(typeof a!=="number")return H.F(a)
if(0>a||a>c)throw H.c(P.af(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",f))
return b}return c},
a0:function(a,b,c,d,e){var u=H.aa(e==null?J.aH(b):e)
return new P.hx(b,u,!0,a,c,"Index out of range")},
H:function(a){return new P.jm(a)},
jk:function(a){return new P.jj(a)},
mD:function(a){return new P.cc(a)},
bm:function(a){return new P.fZ(a)},
w:function(a){return new P.eQ(a)},
a8:function(a,b,c){return new P.hq(a,b,c)},
om:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
aC:function(a){H.pS(a)},
oO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(t===0)return P.mK(b>0||c<c?C.c.A(a,b,c):a,5,null).gfu()
else if(t===32)return P.mK(C.c.A(a,u,c),0,null).gfu()}s=new Array(8)
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
if(P.n8(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.ly()
if(q>=b)if(P.n8(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a0()
if(typeof m!=="number")return H.F(m)
if(l<m)m=l
if(typeof n!=="number")return n.a0()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a0()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a0()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.al(a,"..",n)))i=m>n+2&&C.c.al(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.al(a,"file",b)){if(p<=b){if(!C.c.al(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.A(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b8(a,n,m,"/");++m;++l;++c}else{a=C.c.A(a,b,n)+"/"+C.c.A(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.al(a,"http",b)){if(s&&o+3===n&&C.c.al(a,"80",o+1))if(b===0&&!0){a=C.c.b8(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.A(a,b,o)+C.c.A(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.al(a,"https",b)){if(s&&o+4===n&&C.c.al(a,"443",o+1))if(b===0&&!0){a=C.c.b8(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.A(a,b,o)+C.c.A(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.A(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.ki(a,q,p,o,n,m,l,j)}return P.p4(a,b,c,q,p,o,n,m,l,j)},
mN:function(a,b){var u=P.f
return C.a.kF(H.d(a.split("&"),[u]),P.lA(u,u),new P.jr(b),[P.E,P.f,P.f])},
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jo(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a4(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fH(C.c.A(a,q,r),null,null)
if(typeof n!=="number")return n.fJ()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fH(C.c.A(a,q,c),null,null)
if(typeof n!=="number")return n.fJ()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jp(a)
t=new P.jq(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a4(a,r)
if(n===58){if(r===b){++r
if(C.c.a4(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaI(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oN(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.b3(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
p4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.pb(a,b,d)
else{if(d===b)P.dj(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pc(a,u,e-1):""
s=P.p8(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.pa(P.fH(C.c.A(a,r,g),new P.ku(a,f),null),j):null}else{t=""
s=null
q=null}p=P.p9(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a0()
o=h<i?P.lK(a,h+1,i,null):null
return new P.ce(j,t,s,q,p,o,i<c?P.p7(a,i+1,c):null)},
mZ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dj:function(a,b,c){throw H.c(P.a8(c,a,b))},
pa:function(a,b){if(a!=null&&a===P.mZ(b))return
return a},
p8:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a4(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a4(a,u)!==93)P.dj(a,b,"Missing end `]` to match `[` in host")
P.mM(a,b+1,u)
return C.c.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.c.a4(a,t)===58){P.mM(a,b,c)
return"["+a+"]"}return P.pe(a,b,c)},
pe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a4(a,u)
if(q===37){p=P.n4(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.am("")
n=C.c.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.am("")
if(t<u){s.a+=C.c.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.dj(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a4(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.c.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.n_(q)
u+=l
t=u}}}}if(s==null)return C.c.A(a,b,c)
if(t<c){n=C.c.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
pb:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.n1(C.c.J(a,b)))P.dj(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.J(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dj(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.A(a,b,c)
return P.p5(t?a.toLowerCase():a)},
p5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pc:function(a,b,c){return P.dk(a,b,c,C.a9,!1)},
p9:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dk(a,b,c,C.L,!0):C.r.lB(d,new P.kv(),P.f).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ab(r,"/"))r="/"+r
return P.pd(r,e,f)},
pd:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ab(a,"/"))return P.pf(a,!u||c)
return P.pg(a)},
lK:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.f,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.dx("Both query and queryParameters specified"))
return P.dk(a,b,c,C.u,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.P(0,new P.kw(new P.kx(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
p7:function(a,b,c){return P.dk(a,b,c,C.u,!0)},
n4:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a4(a,b+1)
s=C.c.a4(a,u)
r=H.kU(t)
q=H.kU(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.b3(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c9(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.A(a,b,b+3).toUpperCase()
return},
n_:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.jk(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.J("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.J("0123456789ABCDEF",p&15))
q+=3}}return P.el(t,0,null)},
dk:function(a,b,c,d,e){var u=P.n3(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.A(a,b,c):u},
n3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a0()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.c.a4(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.n4(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dj(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a4(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.n_(q)}}if(r==null)r=new P.am("")
r.a+=C.c.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a0()
if(s<c)r.a+=C.c.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
n2:function(a){if(C.c.ab(a,"."))return!0
return C.c.f4(a,"/.")!==-1},
pg:function(a){var u,t,s,r,q,p,o
if(!P.n2(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a_(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
pf:function(a,b){var u,t,s,r,q,p
if(!P.n2(a))return!b?P.n0(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaI(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaI(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.n0(u[0]))}return C.a.m(u,"/")},
n0:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.n1(J.nR(a,0)))for(t=1;t<u;++t){s=C.c.J(a,t)
if(s===58)return C.c.A(a,0,t)+"%3A"+C.c.aB(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
p6:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.J(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dx("Invalid URL encoding"))}}return u},
lL:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.J(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.A(a,b,c)
else q=new H.v(C.c.A(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.J(a,t)
if(s>127)throw H.c(P.dx("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dx("Truncated URI"))
C.a.h(q,P.p6(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.ju(!1).cR(q)},
n1:function(a){var u=a|32
return 97<=u&&u<=122},
mK:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.J(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a8("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a8("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.J(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaI(u)
if(q!==44||s!==o+7||!C.c.al(a,"base64",o+1))throw H.c(P.a8("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kU(0,a,n,t)
else{m=P.n3(a,n,t,C.u,!0)
if(m!=null)a=C.c.b8(a,n,t,m)}return new P.jn(a,u,c)},
pi:function(){var u,t,s,r,q
u=P.om(22,new P.kG(),!0,P.U)
t=new P.kF(u)
s=new P.kH()
r=new P.kI()
q=H.e(t.$2(0,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iU")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iU")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iU"),"]",5)
q=H.e(t.$2(9,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iU"),"az",21)
q=H.e(t.$2(21,245),"$iU")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
n8:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nO()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.J(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
aq:function aq(a,b){this.a=a
this.b=b},
q:function q(){},
b5:function b5(a){this.a=a},
hb:function hb(){},
hc:function hc(){},
bH:function bH(){},
e6:function e6(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hx:function hx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jm:function jm(a){this.a=a},
jj:function jj(a){this.a=a},
cc:function cc(a){this.a=a},
fZ:function fZ(a){this.a=a},
ie:function ie(){},
ek:function ek(){},
h5:function h5(a){this.a=a},
eQ:function eQ(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
o:function o(){},
i:function i(){},
b6:function b6(){},
b:function b(){},
E:function E(){},
M:function M(){},
a7:function a7(){},
S:function S(){},
aA:function aA(){},
f:function f(){},
am:function am(a){this.a=a},
jr:function jr(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ku:function ku(a,b){this.a=a
this.b=b},
kv:function kv(){},
kx:function kx(a,b){this.a=a
this.b=b},
kw:function kw(a){this.a=a},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(){},
kF:function kF(a){this.a=a},
kH:function kH(){},
kI:function kI(){},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jS:function jS(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
px:function(a){var u,t
u=J.X(a)
if(!!u.$ibo){t=u.gex(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fq(a.data,a.height,a.width)},
pw:function(a){if(a instanceof P.fq)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.lA(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
pv:function(a,b){var u={}
a.P(0,new P.kM(u))
return u},
kk:function kk(){},
km:function km(a,b){this.a=a
this.b=b},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ho:function ho(){},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k9:function k9(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hE:function hE(){},
bc:function bc(){},
ic:function ic(){},
ik:function ik(){},
cQ:function cQ(){},
iS:function iS(){},
r:function r(){},
bf:function bf(){},
j6:function j6(){},
eV:function eV(){},
eW:function eW(){},
f5:function f5(){},
f6:function f6(){},
fh:function fh(){},
fi:function fi(){},
fo:function fo(){},
fp:function fp(){},
U:function U(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
bW:function bW(){},
id:function id(){},
eJ:function eJ(){},
dz:function dz(){},
dL:function dL(){},
e9:function e9(){},
ed:function ed(){},
cb:function cb(){},
ef:function ef(){},
eo:function eo(){},
ey:function ey(){},
iK:function iK(){},
fd:function fd(){},
fe:function fe(){}},W={
m6:function(a){var u=document.createElement("a")
return u},
lq:function(a,b){var u=document.createElement("canvas")
return u},
o8:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ap(u,a,b,c)
t.toString
u=W.G
u=new H.d7(new W.at(t),H.n(new W.he(),{func:1,ret:P.T,args:[u]}),[u])
return H.e(u.gaW(u),"$iV")},
o9:function(a){H.e(a,"$ij")
return"wheel"},
cy:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nW(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ak(s)}return u},
ob:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$icE")
try{u.type=a}catch(s){H.ak(s)}return u},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mX:function(a,b,c,d){var u,t
u=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.nb(new W.jW(c),W.p)
if(u!=null&&!0)J.nS(a,b,u,!1)
return new W.jV(a,b,u,!1,[e])},
mW:function(a){var u,t
u=W.m6(null)
t=window.location
u=new W.bS(new W.ke(u,t))
u.h6(a)
return u},
oZ:function(a,b,c,d){H.e(a,"$iV")
H.I(b)
H.I(c)
H.e(d,"$ibS")
return!0},
p_:function(a,b,c,d){var u,t,s
H.e(a,"$iV")
H.I(b)
H.I(c)
u=H.e(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mY:function(){var u,t,s,r,q
u=P.f
t=P.mj(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.kq(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kp(t,P.dW(null,null,null,u),P.dW(null,null,null,u),P.dW(null,null,null,u),null)
t.hi(null,new H.hR(C.A,r,[s,u]),q,null)
return t},
nb:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.l)return a
return u.eo(a,b)},
A:function A(){},
fK:function fK(){},
dw:function dw(){},
fL:function fL(){},
cq:function cq(){},
bX:function bX(){},
bC:function bC(){},
bZ:function bZ(){},
c_:function c_(){},
bD:function bD(){},
cv:function cv(){},
h1:function h1(){},
Y:function Y(){},
cw:function cw(){},
h2:function h2(){},
b3:function b3(){},
b4:function b4(){},
h3:function h3(){},
h4:function h4(){},
h7:function h7(){},
aI:function aI(){},
cx:function cx(){},
h8:function h8(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
h9:function h9(){},
ha:function ha(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
V:function V(){},
he:function he(){},
p:function p(){},
j:function j(){},
aJ:function aJ(){},
cA:function cA(){},
hl:function hl(){},
hp:function hp(){},
aQ:function aQ(){},
dM:function dM(){},
dN:function dN(){},
c4:function c4(){},
dO:function dO(){},
bo:function bo(){},
cD:function cD(){},
cE:function cE(){},
b7:function b7(){},
dU:function dU(){},
dX:function dX(){},
cI:function cI(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
i_:function i_(){},
i0:function i0(a){this.a=a},
aT:function aT(){},
i1:function i1(){},
ai:function ai(){},
at:function at(a){this.a=a},
G:function G(){},
cN:function cN(){},
aU:function aU(){},
ii:function ii(){},
ea:function ea(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
ix:function ix(){},
aV:function aV(){},
iI:function iI(){},
aW:function aW(){},
iJ:function iJ(){},
aX:function aX(){},
iM:function iM(){},
iN:function iN(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
em:function em(){},
en:function en(){},
iT:function iT(){},
cV:function cV(){},
aY:function aY(){},
aL:function aL(){},
iV:function iV(){},
iW:function iW(){},
j0:function j0(){},
aZ:function aZ(){},
b_:function b_(){},
j4:function j4(){},
j5:function j5(){},
bQ:function bQ(){},
js:function js(){},
jI:function jI(){},
jJ:function jJ(){},
bi:function bi(){},
d8:function d8(){},
d9:function d9(){},
jR:function jR(){},
eL:function eL(){},
k5:function k5(){},
f2:function f2(){},
kj:function kj(){},
kn:function kn(){},
jP:function jP(){},
jT:function jT(a){this.a=a},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lI:function lI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jV:function jV(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jW:function jW(a){this.a=a},
bS:function bS(a){this.a=a},
D:function D(){},
e5:function e5(a){this.a=a},
i9:function i9(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(){},
kg:function kg(){},
kh:function kh(){},
kp:function kp(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kq:function kq(){},
ko:function ko(){},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aF:function aF(){},
ke:function ke(a,b){this.a=a
this.b=b},
ft:function ft(a){this.a=a},
kB:function kB(a){this.a=a},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f3:function f3(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
df:function df(){},
dg:function dg(){},
fb:function fb(){},
fc:function fc(){},
fg:function fg(){},
fj:function fj(){},
fk:function fk(){},
dh:function dh(){},
di:function di(){},
fm:function fm(){},
fn:function fn(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){}},O={
lr:function(a){var u=new O.a4([a])
u.bA(a)
return u},
a4:function a4(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
ml:function(){var u,t,s
u=new O.e0()
u.shs(O.lr(V.ax))
u.e.bb(u.gi3(),u.gi5())
t=new O.b9(u,"emission")
t.c=C.d
t.f=new V.a5(0,0,0)
u.f=t
t=new O.b9(u,"ambient")
t.c=C.d
t.f=new V.a5(0,0,0)
u.r=t
t=new O.b9(u,"diffuse")
t.c=C.d
t.f=new V.a5(0,0,0)
u.x=t
t=new O.b9(u,"invDiffuse")
t.c=C.d
t.f=new V.a5(0,0,0)
u.y=t
t=new O.hW(u,"specular")
t.c=C.d
t.f=new V.a5(0,0,0)
t.ch=100
u.z=t
t=new O.hT(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b9(u,"reflect")
t.c=C.d
t.f=new V.a5(0,0,0)
u.cx=t
t=new O.hV(u,"refract")
t.c=C.d
t.f=new V.a5(0,0,0)
t.ch=1
u.cy=t
t=new O.hS(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dV()
t.bA(D.a9)
t.sh8(H.d([],[D.bG]))
t.shb(H.d([],[D.e8]))
t.shc(H.d([],[D.ej]))
t.shd(H.d([],[D.er]))
t.she(H.d([],[D.es]))
t.shf(H.d([],[D.et]))
t.Q=null
t.ch=null
t.dv(t.gi1(),t.giE(),t.giI())
u.dx=t
s=t.Q
if(s==null){s=D.O()
t.Q=s
t=s}else t=s
t.h(0,u.gj5())
t=u.dx
s=t.ch
if(s==null){s=D.O()
t.ch=s
t=s}else t=s
t.h(0,u.gaY())
u.dy=null
return u},
e0:function e0(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cG:function cG(){},
hT:function hT(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hV:function hV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hW:function hW(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eh:function eh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
lv:function(a,b,c,d,e,f){var u=new E.ar()
u.a=d
u.b=!0
u.sh5(0,O.lr(E.ar))
u.y.bb(u.gkV(),u.gkY())
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
u.saa(0,e)
return u},
oE:function(a,b){var u=new E.iq(a,b)
u.h1(a,b)
return u},
oK:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibZ)return E.mG(a,!0,!0,!0,!1)
t=W.lq(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcQ(a).h(0,t)
r=E.mG(t,!0,!0,!0,!1)
r.a=a
return r},
mG:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eu()
t=H.e(C.q.ds(a,"webgl2",P.ok(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icb")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oE(t,a)
s=new T.iY(t)
s.b=H.aa((t&&C.b).c6(t,3379))
s.c=H.aa(C.b.c6(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.eB(a)
r=new X.hD()
r.c=new X.aE(!1,!1,!1)
r.siV(P.dW(null,null,null,P.o))
s.b=r
r=new X.i2(s)
r.f=0
r.r=V.bt()
r.x=V.bt()
r.Q=1
r.ch=1
s.c=r
r=new X.hL(s)
r.r=0
r.x=V.bt()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.j3(s)
r.e=0
r.f=V.bt()
r.r=V.bt()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shE(H.d([],[[P.cT,P.S]]))
r=s.z
q=document
p=W.ai
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ad(q,"contextmenu",H.n(s.gie(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ad(a,"focus",H.n(s.gil(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ad(a,"blur",H.n(s.gi7(),m),!1,n))
r=s.z
l=W.b7
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ad(q,"keyup",H.n(s.giq(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ad(q,"keydown",H.n(s.gio(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousedown",H.n(s.giu(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mouseup",H.n(s.giy(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousemove",H.n(s.giw(),o),!1,p))
l=s.z
k=W.bi;(l&&C.a).h(l,W.ad(a,H.I(W.o9(a)),H.n(s.giA(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ad(q,"mousemove",H.n(s.gih(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ad(q,"mouseup",H.n(s.gij(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ad(q,"pointerlockchange",H.n(s.giC(),m),!1,n))
n=s.z
m=W.b_
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ad(a,"touchstart",H.n(s.giS(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchend",H.n(s.giO(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchmove",H.n(s.giQ(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aq(Date.now(),!1)
u.cy=0
u.e7()
return u},
fU:function fU(){},
ar:function ar(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
eu:function eu(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j_:function j_(a){this.a=a}},Z={
lH:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aF(a,b,u)
C.b.eq(a,b,new Int16Array(H.cf(c)),35044)
C.b.aF(a,b,null)
return new Z.eG(b,u)},
aM:function(a){return new Z.bh(a)},
eG:function eG(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eH:function eH(a){this.a=a},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
O:function(){var u=new D.c2()
u.san(null)
u.sb1(null)
u.c=null
u.d=0
return u},
fX:function fX(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bK:function bK(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bL:function bL(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
J:function J(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dV:function dV(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
ej:function ej(){},
er:function er(){},
es:function es(){},
et:function et(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dT:function dT(a,b){this.a=a
this.b=b},hD:function hD(){var _=this
_.d=_.c=_.b=_.a=null},dY:function dY(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hL:function hL(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},i2:function i2(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},ij:function ij(){},ew:function ew(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},j3:function j3(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eB:function eB(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mg:function(a,b,c,d,e,f,g){var u,t
u=new X.hr()
t=new V.al(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.mB()
u.r=t
return u},
lC:function(a,b,c,d,e){var u,t,s
u=new X.e7()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gt().h(0,u.ghl())
s=new D.J("mover",t,u.b,u,[U.aj])
s.b=!0
u.am(s)}s=u.c
if(!(Math.abs(s-b)<$.N().a)){u.c=b
s=new D.J("fov",s,b,u,[P.q])
s.b=!0
u.am(s)}s=u.d
if(!(Math.abs(s-d)<$.N().a)){u.d=d
s=new D.J("near",s,d,u,[P.q])
s.b=!0
u.am(s)}s=u.e
if(!(Math.abs(s-a)<$.N().a)){u.e=a
s=new D.J("far",s,a,u,[P.q])
s.b=!0
u.am(s)}return u},
fR:function fR(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){},
hr:function hr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){}},V={
lk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bx(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.c.ar("null",c)
return C.c.ar(C.e.fp(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
ck:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.ar(u[p],s))}return u},
dr:function(a,b){return C.e.lo(Math.pow(b,C.a_.d1(Math.log(H.pu(a))/Math.log(b))))},
c6:function(){var u=$.mr
if(u==null){u=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.mr=u}return u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mq:function(a,b,c){return V.ba(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mn:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.ba(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
mo:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.ba(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
mp:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.ba(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
mm:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.G(c)))
t=b.aQ(u)
s=t.w(0,Math.sqrt(t.G(t)))
r=u.aQ(s)
q=new V.K(a.a,a.b,a.c)
p=s.W(0).G(q)
o=r.W(0).G(q)
n=u.W(0).G(q)
return V.ba(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.mv
if(u==null){u=new V.a6(0,0)
$.mv=u}return u},
mw:function(){var u=$.cO
if(u==null){u=new V.Z(0,0,0)
$.cO=u}return u},
mB:function(){var u=$.mA
if(u==null){u=V.mz(0,0,1,1)
$.mA=u}return u},
mz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ec(a,b,c,d)},
d6:function(){var u=$.mS
if(u==null){u=new V.K(0,0,0)
$.mS=u}return u},
mT:function(){var u=$.mR
if(u==null){u=new V.K(0,1,0)
$.mR=u}return u},
mU:function(){var u=$.jw
if(u==null){u=new V.K(0,0,1)
$.jw=u}return u},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a){this.a=a},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.J(a,0)
t=C.c.J(b,0)
s=new V.io()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.iy()
u.h2(a)
return u},
j2:function(){var u,t
u=new V.j1()
t=P.f
u.sjm(new H.aS([t,V.cS]))
u.sjr(new H.aS([t,V.cX]))
u.c=null
return u},
bl:function bl(){},
aD:function aD(){},
dZ:function dZ(){},
ay:function ay(){this.a=null},
io:function io(){this.b=this.a=null},
iy:function iy(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b){this.a=a
this.b=b
this.c=null},
j1:function j1(){this.c=this.b=this.a=null},
cY:function cY(a){this.b=a
this.a=this.c=null},
pV:function(a){P.oL(C.V,new V.lf(a))},
oG:function(a,b){var u=new V.iD()
u.h3(a,!0)
return u},
bE:function bE(){},
lf:function lf(a){this.a=a},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hs:function hs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ht:function ht(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ih:function ih(a){var _=this
_.a=a
_.d=_.c=_.b=null},
il:function il(a,b){this.a=a
this.b=b
this.c=null},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(){this.b=this.a=null},
iF:function iF(a){this.a=a},
iE:function iE(a){this.a=a},
iG:function iG(a){this.a=a},
no:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=V.oG("Test 027",!0)
t=W.lq(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.f]
u.ei(H.d(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],s))
u.k_(H.d(["shapes"],s))
u.ei(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dt(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.oK(r,!0,!0,!0,!1)
p=U.mh(null)
o=new U.ee()
o.a=0
o.b=0
o.c=0
o.d=0
o.e=0
o.f=0
o.r=0
o.sfz(0)
o.sfg(0,0)
o.sfk(0)
n=o.d
if(!(Math.abs(n-0.1)<$.N().a)){o.d=0.1
n=new D.J("deltaYaw",n,0.1,o,[P.q])
n.b=!0
o.K(n)}n=o.e
if(!(Math.abs(n-0.21)<$.N().a)){o.e=0.21
n=new D.J("deltaPitch",n,0.21,o,[P.q])
n.b=!0
o.K(n)}n=o.f
if(!(Math.abs(n-0.32)<$.N().a)){o.f=0.32
n=new D.J("deltaRoll",n,0.32,o,[P.q])
n.b=!0
o.K(n)}p.h(0,o)
p.h(0,U.lt(V.mq(0,0,5)))
m=X.lC(2000,1.0471975511965976,p,0.1,null)
l=new X.fR()
l.a=512
l.b=512
l.c=512
l.d=512
l.e=!0
l.f=!1
l.r=1
l.x=1
l.ch=T.mF(0,null)
l.cx=new V.al(0,0,0,1)
l.cy=!0
l.db=2000
l.dx=!0
l.dy=V.mB()
l.saA(0,512)
l.saw(0,512)
if(l.cy){l.cy=!1
o=new D.J("clearColor",!0,!1,l,[P.T])
o.b=!0
l.am(o)}o=q.f
n=o.a
k=n.createTexture()
C.b.ah(n,34067,k)
C.b.aJ(n,34067,10242,10497)
C.b.aJ(n,34067,10243,10497)
C.b.aJ(n,34067,10241,9729)
C.b.aJ(n,34067,10240,9729)
C.b.ah(n,34067,null)
j=new T.eq()
j.a=0
j.b=k
j.c=!1
j.d=0
o.b_(j,k,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.b_(j,k,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.b_(j,k,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.b_(j,k,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.b_(j,k,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.b_(j,k,"../resources/maskonaive/negz.jpg",34074,!1,!1)
i=new M.dE()
i.sb5(null)
i.sbt(0,null)
i.sb9(null)
o=E.lv(null,!0,null,"",null,null)
h=F.iz()
n=h.a
g=new V.K(-1,-1,1)
g=g.w(0,Math.sqrt(g.G(g)))
f=n.bG(new V.az(1,2,4,6),new V.al(1,0,0,1),new V.Z(-1,-1,0),new V.a6(0,1),g,null)
n=h.a
g=new V.K(1,-1,1)
g=g.w(0,Math.sqrt(g.G(g)))
e=n.bG(new V.az(0,3,4,6),new V.al(0,0,1,1),new V.Z(1,-1,0),new V.a6(1,1),g,null)
n=h.a
g=new V.K(1,1,1)
g=g.w(0,Math.sqrt(g.G(g)))
d=n.bG(new V.az(0,2,5,6),new V.al(0,1,0,1),new V.Z(1,1,0),new V.a6(1,0),g,null)
n=h.a
g=V.bt()
c=new V.K(-1,1,1)
c=c.w(0,Math.sqrt(c.G(c)))
b=n.bG(new V.az(0,2,4,7),new V.al(1,1,0,1),new V.Z(-1,1,0),g,c,null)
h.d.eg(H.d([f,e,d,b],[F.ag]))
h.au()
o.saa(0,h)
i.d=o
i.e=null
o=new O.eh()
o.b=1.0471975511965976
o.d=new V.a5(1,1,1)
a=o.c
o.c=j
j.gt().h(0,o.gaY())
n=new D.J("boxTexture",a,o.c,o,[T.eq])
n.b=!0
o.Z(n)
i.sb9(o)
i.sbt(0,l)
i.sb5(m)
a0=E.lv(null,!0,null,"",null,null)
a0.saa(0,F.nu(30,1,15,0.5))
a1=O.ml()
o=a1.dx
a2=V.mT()
n=U.lt(V.mm(V.mw(),a2,new V.K(0,-1,-1)))
a3=new V.a5(1,1,1)
g=new D.bG()
g.c=new V.a5(1,1,1)
g.a=V.mU()
a=g.b
g.b=n
n.gt().h(0,g.gh9())
n=new D.J("mover",a,g.b,g,[U.aj])
n.b=!0
g.aL(n)
if(!g.c.B(0,a3)){a=g.c
g.c=a3
n=new D.J("color",a,a3,g,[V.a5])
n.b=!0
g.aL(n)}o.h(0,g)
o=a1.r
o.saG(0,new V.a5(0,0,1))
o=a1.x
o.saG(0,new V.a5(0,1,0))
o=a1.z
o.saG(0,new V.a5(1,0,0))
o=a1.z
if(o.c===C.d){o.c=C.j
o.cb()
o.cC(100)
n=o.a
n.a=null
n.Z(null)}o.cC(10)
a4=M.mf(null,null,null,null,null)
a4.sb5(m)
a4.sb9(a1)
a4.sbt(0,l)
a4.d.h(0,a0)
a5=U.mh(null)
o=q.r
n=new U.eD()
g=U.ls()
g.sdr(0,!0)
g.sd8(6.283185307179586)
g.sda(0)
g.sa5(0,0)
g.sd9(100)
g.sY(0)
g.scT(0.5)
n.b=g
c=n.gb0()
g.gt().h(0,c)
g=U.ls()
g.sdr(0,!0)
g.sd8(6.283185307179586)
g.sda(0)
g.sa5(0,0)
g.sd9(100)
g.sY(0)
g.scT(0.5)
n.c=g
g.gt().h(0,c)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
a6=new X.aE(!1,!1,!1)
a=n.d
n.d=a6
g=[X.aE]
c=new D.J("modifiers",a,a6,n,g)
c.b=!0
n.K(c)
c=n.f
if(c!==!1){n.f=!1
c=new D.J("invertX",c,!1,n,[P.T])
c.b=!0
n.K(c)}c=n.r
if(c!==!1){n.r=!1
c=new D.J("invertY",c,!1,n,[P.T])
c.b=!0
n.K(c)}n.bi(o)
a5.h(0,n)
o=q.r
n=new U.eC()
c=U.ls()
c.sdr(0,!0)
c.sd8(6.283185307179586)
c.sda(0)
c.sa5(0,0)
c.sd9(100)
c.sY(0)
c.scT(0.2)
n.b=c
c.gt().h(0,n.gb0())
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
a6=new X.aE(!0,!1,!1)
a=n.c
n.c=a6
c=new D.J("modifiers",a,a6,n,g)
c.b=!0
n.K(c)
n.bi(o)
a5.h(0,n)
o=q.r
n=new U.eE()
n.c=0.01
n.d=0
n.e=0
a6=new X.aE(!1,!1,!1)
n.b=a6
g=new D.J("modifiers",null,a6,n,g)
g.b=!0
n.K(g)
n.bi(o)
a5.h(0,n)
a5.h(0,U.lt(V.mq(0,0,5)))
a7=X.lC(2000,1.0471975511965976,a5,0.1,null)
a8=E.lv(null,!0,null,"",null,null)
a8.saa(0,F.kN(1,null,null,1))
a9=O.ml()
o=a9.f
n=l.ch
g=o.c
if(g!==C.h){if(g===C.d)o.aO()
o.c=C.h
o.je(null)
g=o.a
g.a=null
g.Z(null)}o.jd(n)
b0=M.mf(null,null,null,null,null)
b0.sb5(a7)
b0.sb9(a9)
b0.d.h(0,a8)
o=M.aG
n=H.d([i,a4,b0],[o])
g=new M.dC()
g.bA(o)
g.e=!1
g.f=null
g.bb(g.giK(),g.giM())
g.ag(0,n)
o=q.d
if(o!==g){if(o!=null)o.gt().O(0,q.gdB())
q.d=g
g.gt().h(0,q.gdB())
q.dC()}o=new V.il("shapes",!0)
s=C.z.dt(s,"shapes")
o.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
o.ee(0,"Cube",new V.l3(a8),!0)
o.aD(0,"Cuboid",new V.l4(a8))
o.aD(0,"Cylinder",new V.l5(a8))
o.aD(0,"Cone",new V.l6(a8))
o.aD(0,"Cylindrical",new V.l7(a8))
o.aD(0,"Sphere",new V.l8(a8))
o.aD(0,"Spherical",new V.l9(a8))
o.aD(0,"Toroid",new V.la(a8))
o.aD(0,"Knot",new V.lb(a8))
s=q.z
if(s==null){s=D.O()
q.z=s}o={func:1,ret:-1,args:[D.z]}
n=H.n(new V.lc(u,a9),o)
if(s.b==null)s.sb1(H.d([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.pV(q)},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l2:function l2(){},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l1:function l1(){},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
l0:function l0(){},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a,b){this.a=a
this.b=b}},U={
ls:function(){var u=new U.fY()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
lt:function(a){var u=new U.dD()
u.a=a
return u},
mh:function(a){var u=new U.cC()
u.bA(U.aj)
u.bb(u.ghg(),u.giG())
u.e=null
u.f=V.c6()
u.r=0
return u},
fY:function fY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cC:function cC(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ee:function ee(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eC:function eC(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eD:function eD(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eE:function eE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
mf:function(a,b,c,d,e){var u=new M.dJ()
u.shv(0,O.lr(E.ar))
u.d.bb(u.gi9(),u.gib())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.mg(!0,!0,!1,c,2000,null,0)
u.sb5(a)
u.sbt(0,d)
u.sb9(e)
return u},
dC:function dC(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aG:function aG(){}},A={
on:function(a,b){var u,t
u=a.av
t=new A.e_(b,u)
t.dA(b,u)
t.h0(a,b)
return t},
lE:function(a,b,c,d,e){var u=new A.jb(a,b,c,e)
u.f=d
u.sjC(P.ol(d,0,!1,P.o))
return u},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a){this.a=a},
e_:function e_(a,b){var _=this
_.bK=_.eD=_.bJ=_.av=_.aH=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eT=_.cW=_.eS=_.bX=_.eR=_.eQ=_.bW=_.bV=_.eP=_.eO=_.bU=_.bT=_.bS=_.eN=_.eM=_.bR=_.eL=_.eK=_.bQ=_.eJ=_.eI=_.bP=_.bO=_.eH=_.eG=_.bN=_.bM=_.eF=_.eE=_.bL=null
_.d0=_.eX=_.d_=_.eW=_.cZ=_.eV=_.cY=_.eU=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hU:function hU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aH=b3
_.av=b4
_.bJ=b5},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
d0:function d0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d3:function d3(a,b,c,d,e,f,g,h,i,j){var _=this
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
d1:function d1(a,b,c,d,e,f,g,h,i,j){var _=this
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
d4:function d4(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cR:function cR(){},
c1:function c1(a,b){this.a=a
this.b=b},
ei:function ei(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ex:function ex(){},
jh:function jh(a){this.a=a},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kN:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
u=F.iz()
F.dl(u,b,c,d,a,1,0,0,1)
F.dl(u,b,c,d,a,0,1,0,3)
F.dl(u,b,c,d,a,0,0,1,2)
F.dl(u,b,c,d,a,-1,0,0,0)
F.dl(u,b,c,d,a,0,-1,0,0)
F.dl(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
kE:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dl:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.K(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.K(o+a3,n+a1,m+a2)
u.b=l
k=new V.K(o-a3,n-a1,m-a2)
u.c=k
j=new V.K(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.kE(t)
f=F.kE(u.b)
e=F.lX(d,a0,new F.kD(u,F.kE(u.c),F.kE(u.d),f,g,c),b)
if(e!=null)a.bp(e)},
ni:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.q,args:[P.q]})
if(a0<3)return
u=F.iz()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ag])
q=u.a
p=new V.K(0,0,t)
p=p.w(0,Math.sqrt(p.G(p)))
C.a.h(r,q.k6(new V.az(a,-1,-1,-1),new V.al(1,1,1,1),new V.Z(0,0,d),new V.K(0,0,t),new V.a6(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.K(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eF(new V.az(a,-1,-1,-1),null,new V.al(i,g,h,1),new V.Z(m*k,l*k,d),new V.K(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.eg(r)
return u},
nf:function(a,b,c,d,e,f){return F.ng(!0,c,d,new F.kO(a,f),e)},
ng:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.lX(c,e,new F.kQ(d),null)
if(u==null)return
u.au()
u.cH()
if(b)u.bp(F.ni(3,!1,!1,1,new F.kR(d),e))
u.bp(F.ni(1,!0,!1,-1,new F.kS(d),e))
return u},
ns:function(a,b,c,d){var u,t
u={}
u.a=b
if(H.n(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)u.a=new F.lg()
t=F.kN(a,null,new F.lh(u,c),d)
t.cH()
return t},
nu:function(a,b,c,d){return F.nh(c,a,d,b,new F.li())},
pN:function(a,b,c,d,e,f){return F.nh(d,a,e,b,new F.kZ(f,c))},
nh:function(a,b,c,d,e){var u=F.lX(a,b,new F.kP(H.n(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(u==null)return
u.au()
u.cH()
return u},
lX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.iz()
t=H.d([],[F.ag])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eF(null,null,new V.al(p,0,0,1),null,null,new V.a6(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cS(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eF(null,null,new V.al(j,i,h,1),null,null,new V.a6(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cS(d))}}u.d.k5(a+1,b+1,t)
return u},
cz:function(a,b,c){var u,t
u=new F.ab()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cF(a)
u.cG(b)
u.jf(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a8()
return u},
oh:function(a,b){var u,t
u=new F.br()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cF(a)
u.cG(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a8()
return u},
iz:function(){var u,t
u=new F.eg()
t=new F.jx(u)
t.b=!1
t.sjD(H.d([],[F.ag]))
u.a=t
t=new F.iC(u)
t.scv(H.d([],[F.bO]))
u.b=t
t=new F.iB(u)
t.shR(H.d([],[F.br]))
u.c=t
t=new F.iA(u)
t.shF(H.d([],[F.ab]))
u.d=t
u.e=null
return u},
eF:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ag()
t=new F.jF(u)
t.scv(H.d([],[F.bO]))
u.b=t
t=new F.jB(u)
s=[F.br]
t.shS(H.d([],s))
t.shT(H.d([],s))
u.c=t
t=new F.jy(u)
s=[F.ab]
t.shG(H.d([],s))
t.shH(H.d([],s))
t.shI(H.d([],s))
u.d=t
h=$.nI()
u.e=0
t=$.b1()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.by().a)!==0?e:null
u.x=(s&$.bx().a)!==0?b:null
u.y=(s&$.bz().a)!==0?f:null
u.z=(s&$.bA().a)!==0?g:null
u.Q=(s&$.nJ().a)!==0?c:null
u.ch=(s&$.cp().a)!==0?i:0
u.cx=(s&$.bw().a)!==0?a:null
return u},
kD:function kD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kO:function kO(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
lg:function lg(){},
lh:function lh(a,b){this.a=a
this.b=b},
li:function li(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){},
iH:function iH(){},
br:function br(){this.b=this.a=null},
hF:function hF(){},
ja:function ja(){},
bO:function bO(){this.a=null},
eg:function eg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){this.a=a
this.b=null},
iB:function iB(a){this.a=a
this.b=null},
iC:function iC(a){this.a=a
this.b=null},
ag:function ag(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jH:function jH(a){this.a=a},
jG:function jG(a){this.a=a},
jx:function jx(a){this.a=a
this.c=this.b=null},
jy:function jy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a
this.c=this.b=null},
jD:function jD(){},
jC:function jC(){},
jE:function jE(){},
ia:function ia(){},
jF:function jF(a){this.a=a
this.b=null}},T={
mF:function(a,b){var u=new T.iX()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
cW:function cW(){},
ep:function ep(){},
iX:function iX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iY:function iY(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
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
H.ly.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gL:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.c8(a)+"'"}}
J.hA.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iT:1}
J.dR.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iM:1}
J.dS.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.ig.prototype={}
J.bR.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.nw()]
if(u==null)return this.fW(a)
return"JavaScript function for "+H.m(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aR.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.H("add"))
a.push(b)},
lb:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("removeAt"))
u=a.length
if(b>=u)throw H.c(P.eb(b,null,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.k(b,"$ii",[H.u(a,0)],"$ai")
if(!!a.fixed$length)H.t(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bm(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kP:function(a){return this.m(a,"")},
kF:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
kE:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.hy())},
kD:function(a,b){return this.kE(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fT:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gkC:function(a){if(a.length>0)return a[0]
throw H.c(H.hy())},
gaI:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hy())},
fP:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.H("setRange"))
P.bu(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cl(d)
if(e+t>u.gl(d))throw H.c(H.od())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
by:function(a,b,c,d){return this.fP(a,b,c,d,0)},
ek:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
a_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.lw(a,"[","]")},
gX:function(a){return new J.aw(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.cP(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.H("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cj(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cj(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.by(u,0,a.length,a)
this.by(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.lx.prototype={}
J.aw.prototype={
gM:function(a){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdR(null)
return!1}this.sdR(u[s]);++this.c
return!0},
sdR:function(a){this.d=H.B(a,H.u(this,0))},
$ib6:1}
J.bM.prototype={
lo:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
d1:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
fp:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bv:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a4(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.v("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a*b},
bx:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
h_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ea(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.ea(a,b)},
ea:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
b3:function(a,b){var u
if(a>0)u=this.e9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jk:function(a,b){if(b<0)throw H.c(H.au(b))
return this.e9(a,b)},
e9:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia7:1}
J.dQ.prototype={$io:1}
J.dP.prototype={}
J.bp.prototype={
a4:function(a,b){if(b<0)throw H.c(H.cj(a,b))
if(b>=a.length)H.t(H.cj(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.c(H.cj(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lo(b,null,null))
return a+b},
b8:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.au(b))
c=P.bu(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.au(c))
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ab:function(a,b){return this.al(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.au(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a0()
if(b<0)throw H.c(P.eb(b,null,null))
if(b>c)throw H.c(P.eb(b,null,null))
if(c>a.length)throw H.c(P.eb(c,null,null))
return a.substring(b,c)},
aB:function(a,b){return this.A(a,b,null)},
lr:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
l0:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
ar:function(a,b){return this.l0(a,b," ")},
f5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f4:function(a,b){return this.f5(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imt:1,
$if:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a4(this.a,b)},
$ad5:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.hd.prototype={}
H.c5.prototype={
gX:function(a){return new H.cF(this,this.gl(this),0,[H.ao(this,"c5",0)])},
c4:function(a,b){return this.fV(0,H.n(b,{func:1,ret:P.T,args:[H.ao(this,"c5",0)]}))}}
H.cF.prototype={
gM:function(a){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.cl(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bm(u))
r=this.c
if(r>=s){this.sbe(null)
return!1}this.sbe(t.N(u,r));++this.c
return!0},
sbe:function(a){this.d=H.B(a,H.u(this,0))},
$ib6:1}
H.hP.prototype={
gX:function(a){return new H.hQ(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.aH(this.a)},
N:function(a,b){return this.b.$1(J.fJ(this.a,b))},
$ai:function(a,b){return[b]}}
H.hQ.prototype={
E:function(){var u=this.b
if(u.E()){this.sbe(this.c.$1(u.gM(u)))
return!0}this.sbe(null)
return!1},
gM:function(a){return this.a},
sbe:function(a){this.a=H.B(a,H.u(this,1))},
$ab6:function(a,b){return[b]}}
H.hR.prototype={
gl:function(a){return J.aH(this.a)},
N:function(a,b){return this.b.$1(J.fJ(this.a,b))},
$ac5:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d7.prototype={
gX:function(a){return new H.jK(J.bB(this.a),this.b,this.$ti)}}
H.jK.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c3.prototype={}
H.d5.prototype={
n:function(a,b,c){H.B(c,H.ao(this,"d5",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.ez.prototype={}
H.h_.prototype={
i:function(a){return P.lB(this)},
n:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
return H.o5()},
$iE:1}
H.h0.prototype={
gl:function(a){return this.a},
bH:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bH(0,b))return
return this.dS(b)},
dS:function(a){return this.b[H.I(a)]},
P:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dS(q),u))}}}
H.ip.prototype={}
H.j7.prototype={
aq:function(a){var u,t,s
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
H.ib.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hC.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jl.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lj.prototype={
$1:function(a){if(!!J.X(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.ff.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaA:1}
H.cu.prototype={
i:function(a){return"Closure '"+H.c8(this).trim()+"'"},
$ibI:1,
glx:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iU.prototype={}
H.iL.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cr))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cP(this.a)
else t=typeof u!=="object"?J.dv(u):H.cP(u)
return(t^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c8(u)+"'")}}
H.j9.prototype={
i:function(a){return this.a}}
H.fW.prototype={
i:function(a){return this.a}}
H.iw.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aS.prototype={
gl:function(a){return this.a},
gkO:function(a){return this.a===0},
gad:function(a){return new H.hH(this,[H.u(this,0)])},
bH:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dO(t,b)}else return this.kL(b)},
kL:function(a){var u=this.d
if(u==null)return!1
return this.d4(this.cj(u,this.d3(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bB(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bB(r,b)
s=t==null?null:t.b
return s}else return this.kM(b)},
kM:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cj(u,this.d3(a))
s=this.d4(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ct()
this.b=u}this.dF(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ct()
this.c=t}this.dF(t,b,c)}else this.kN(b,c)},
kN:function(a,b){var u,t,s,r
H.B(a,H.u(this,0))
H.B(b,H.u(this,1))
u=this.d
if(u==null){u=this.ct()
this.d=u}t=this.d3(a)
s=this.cj(u,t)
if(s==null)this.cD(u,t,[this.cu(a,b)])
else{r=this.d4(s,a)
if(r>=0)s[r].b=b
else s.push(this.cu(a,b))}},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bm(this))
u=u.c}},
dF:function(a,b,c){var u
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
u=this.bB(a,b)
if(u==null)this.cD(a,b,this.cu(b,c))
else u.b=c},
hZ:function(){this.r=this.r+1&67108863},
cu:function(a,b){var u,t
u=new H.hG(H.B(a,H.u(this,0)),H.B(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hZ()
return u},
d3:function(a){return J.dv(a)&0x3ffffff},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.lB(this)},
bB:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
cD:function(a,b,c){a[b]=c},
hA:function(a,b){delete a[b]},
dO:function(a,b){return this.bB(a,b)!=null},
ct:function(){var u=Object.create(null)
this.cD(u,"<non-identifier-key>",u)
this.hA(u,"<non-identifier-key>")
return u}}
H.hG.prototype={}
H.hH.prototype={
gl:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.hI(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hI.prototype={
gM:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bm(u))
else{u=this.c
if(u==null){this.sdE(null)
return!1}else{this.sdE(u.a)
this.c=this.c.c
return!0}}},
sdE:function(a){this.d=H.B(a,H.u(this,0))},
$ib6:1}
H.kV.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kW.prototype={
$2:function(a,b){return this.a(a,b)},
$S:54}
H.kX.prototype={
$1:function(a){return this.a(H.I(a))},
$S:51}
H.hB.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imt:1,
$ioC:1}
H.cK.prototype={$icK:1}
H.bN.prototype={$ibN:1,$ioM:1}
H.e2.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cL.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pz(c)
H.bk(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.q]},
$ay:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.e3.prototype={
n:function(a,b,c){H.aa(c)
H.bk(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.i3.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i5.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i6.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i7.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e4.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iqh:1}
H.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icM:1,
$iU:1}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
P.jM.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:19}
P.jL.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:50}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fl.prototype={
hj:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ci(new P.ks(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
hk:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ci(new P.kr(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ibe:1}
P.ks.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kr.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.h_(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bj.prototype={
kS:function(a){if(this.c!==6)return!0
return this.b.b.dl(H.n(this.d,{func:1,ret:P.T,args:[P.S]}),a.a,P.T,P.S)},
kK:function(a){var u,t,s,r
u=this.e
t=P.S
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fE(u,{func:1,args:[P.S,P.aA]}))return H.lT(r.li(u,a.a,a.b,null,t,P.aA),s)
else return H.lT(r.dl(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aN.prototype={
fo:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a3
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.pm(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aN(0,$.a3,[c])
r=b==null?1:3
this.dG(new P.bj(s,r,a,b,[u,c]))
return s},
ln:function(a,b){return this.fo(a,null,b)},
dG:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$ibj")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaN")
u=t.a
if(u<4){t.dG(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kL(null,null,u,H.n(new P.jX(this,a),{func:1,ret:-1}))}},
e5:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$ibj")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaN")
t=p.a
if(t<4){p.e5(a)
return}this.a=t
this.c=p.c}u.a=this.bD(a)
t=this.b
t.toString
P.kL(null,null,t,H.n(new P.k0(u,this),{func:1,ret:-1}))}},
cz:function(){var u=H.e(this.c,"$ibj")
this.c=null
return this.bD(u)},
bD:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dK:function(a){var u,t,s
u=H.u(this,0)
H.lT(a,{futureOr:1,type:u})
t=this.$ti
if(H.dp(a,"$icB",t,"$acB"))if(H.dp(a,"$iaN",t,null))P.mV(a,this)
else P.oY(a,this)
else{s=this.cz()
H.B(a,u)
this.a=4
this.c=a
P.da(this,s)}},
dL:function(a,b){var u
H.e(b,"$iaA")
u=this.cz()
this.a=8
this.c=new P.ap(a,b)
P.da(this,u)},
$icB:1}
P.jX.prototype={
$0:function(){P.da(this.a,this.b)},
$S:0}
P.k0.prototype={
$0:function(){P.da(this.b,this.a.a)},
$S:0}
P.jY.prototype={
$1:function(a){var u=this.a
u.a=0
u.dK(a)},
$S:19}
P.jZ.prototype={
$2:function(a,b){H.e(b,"$iaA")
this.a.dL(a,b)},
$1:function(a){return this.$2(a,null)},
$S:49}
P.k_.prototype={
$0:function(){this.a.dL(this.b,this.c)},
$S:0}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fl(H.n(r.d,{func:1}),null)}catch(q){t=H.ak(q)
s=H.cm(q)
if(this.d){r=H.e(this.a.a.c,"$iap").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iap")
else p.b=new P.ap(t,s)
p.a=!0
return}if(!!J.X(u).$icB){if(u instanceof P.aN&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iap")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ln(new P.k4(o),null)
r.a=!1}},
$S:3}
P.k4.prototype={
$1:function(a){return this.a},
$S:48}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.B(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.dl(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cm(o)
s=this.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iap")
r=this.c
if(r.kS(u)&&r.e!=null){q=this.b
q.b=r.kK(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cm(p)
r=H.e(this.a.a.c,"$iap")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ap(t,s)
n.a=!0}},
$S:3}
P.eI.prototype={}
P.iO.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aN(0,$.a3,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iQ(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iR(u,t),{func:1,ret:-1})
W.ad(this.a,this.b,r,!1,s)
return t}}
P.iQ.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.u(this.b,0)]}}}
P.iR.prototype={
$0:function(){this.b.dK(this.a.a)},
$S:0}
P.cT.prototype={}
P.iP.prototype={}
P.be.prototype={}
P.ap.prototype={
i:function(a){return H.m(this.a)},
$ibH:1}
P.kC.prototype={$iqw:1}
P.kK.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e6()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.ka.prototype={
lj:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a3){a.$0()
return}P.n6(null,null,this,a,-1)}catch(s){u=H.ak(s)
t=H.cm(s)
P.kJ(null,null,this,u,H.e(t,"$iaA"))}},
lk:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.l===$.a3){a.$1(b)
return}P.n7(null,null,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cm(s)
P.kJ(null,null,this,u,H.e(t,"$iaA"))}},
kd:function(a,b){return new P.kc(this,H.n(a,{func:1,ret:b}),b)},
cL:function(a){return new P.kb(this,H.n(a,{func:1,ret:-1}))},
eo:function(a,b){return new P.kd(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
fl:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.l)return a.$0()
return P.n6(null,null,this,a,b)},
dl:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a3===C.l)return a.$1(b)
return P.n7(null,null,this,a,b,c,d)},
li:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a3===C.l)return a.$2(b,c)
return P.pn(null,null,this,a,b,c,d,e,f)}}
P.kc.prototype={
$0:function(){return this.a.fl(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kb.prototype={
$0:function(){return this.a.lj(this.b)},
$S:3}
P.kd.prototype={
$1:function(a){var u=this.c
return this.a.lk(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k8.prototype={
gX:function(a){var u=new P.eX(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a_:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icd")!=null}else{t=this.hw(b)
return t}},
hw:function(a){var u=this.d
if(u==null)return!1
return this.cg(this.dT(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lJ()
this.b=u}return this.dH(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lJ()
this.c=t}return this.dH(t,b)}else return this.hn(0,b)},
hn:function(a,b){var u,t,s
H.B(b,H.u(this,0))
u=this.d
if(u==null){u=P.lJ()
this.d=u}t=this.dM(b)
s=u[t]
if(s==null)u[t]=[this.cd(b)]
else{if(this.cg(s,b)>=0)return!1
s.push(this.cd(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.j_(this.c,b)
else return this.iX(0,b)},
iX:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dT(u,b)
s=this.cg(t,b)
if(s<0)return!1
this.eb(t.splice(s,1)[0])
return!0},
dH:function(a,b){H.B(b,H.u(this,0))
if(H.e(a[b],"$icd")!=null)return!1
a[b]=this.cd(b)
return!0},
j_:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icd")
if(u==null)return!1
this.eb(u)
delete a[b]
return!0},
dJ:function(){this.r=1073741823&this.r+1},
cd:function(a){var u,t
u=new P.cd(H.B(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dJ()
return u},
eb:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dJ()},
dM:function(a){return J.dv(a)&1073741823},
dT:function(a,b){return a[this.dM(b)]},
cg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.cd.prototype={}
P.eX.prototype={
gM:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bm(u))
else{u=this.c
if(u==null){this.sdI(null)
return!1}else{this.sdI(H.B(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdI:function(a){this.d=H.B(a,H.u(this,0))},
$ib6:1}
P.hJ.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:8}
P.hK.prototype={$ii:1,$ib:1}
P.y.prototype={
gX:function(a){return new H.cF(a,this.gl(a),0,[H.bU(this,a,"y",0)])},
N:function(a,b){return this.j(a,b)},
lq:function(a,b){var u,t
u=H.d([],[H.bU(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
lp:function(a){return this.lq(a,!0)},
p:function(a,b){var u,t
u=[H.bU(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.by(t,0,this.gl(a),a)
C.a.by(t,this.gl(a),t.length,b)
return t},
kA:function(a,b,c,d){var u
H.B(d,H.bU(this,a,"y",0))
P.bu(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lw(a,"[","]")}}
P.hM.prototype={}
P.hN.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:8}
P.ah.prototype={
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bU(this,a,"ah",0),H.bU(this,a,"ah",1)]})
for(u=J.bB(this.gad(a));u.E();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aH(this.gad(a))},
i:function(a){return P.lB(a)},
$iE:1}
P.kt.prototype={
n:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hO.prototype={
j:function(a,b){return J.m1(this.a,b)},
n:function(a,b,c){J.ll(this.a,H.B(b,H.u(this,0)),H.B(c,H.u(this,1)))},
P:function(a,b){J.m3(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aH(this.a)},
i:function(a){return J.av(this.a)},
$iE:1}
P.eA.prototype={}
P.kf.prototype={
ag:function(a,b){var u
for(u=J.bB(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gM(u))},
i:function(a){return P.lw(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.t(P.af(b,0,null,"index",null))
for(u=P.p1(this,this.r,H.u(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
$ii:1,
$imC:1}
P.eY.prototype={}
P.fr.prototype={}
P.fS.prototype={
kU:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bu(c,a0,b.length,null,null,null)
u=$.nL()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.J(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kU(C.c.J(b,n))
j=H.kU(C.c.J(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a4("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.am("")
g=r.a+=C.c.A(b,s,t)
r.a=g+H.c9(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.A(b,s,a0)
f=g.length
if(q>=0)P.m7(b,p,a0,q,o,f)
else{e=C.f.bx(f-1,4)+1
if(e===1)throw H.c(P.a8("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b8(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.m7(b,p,a0,q,o,d)
else{e=C.f.bx(d,4)
if(e===1)throw H.c(P.a8("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b8(b,a0,a0,e===2?"==":"=")}return b},
$ac0:function(){return[[P.b,P.o],P.f]}}
P.fT.prototype={
$abF:function(){return[[P.b,P.o],P.f]}}
P.c0.prototype={}
P.bF.prototype={}
P.hf.prototype={
$ac0:function(){return[P.f,[P.b,P.o]]}}
P.hv.prototype={
i:function(a){return this.a}}
P.hu.prototype={
hx:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.h(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.am("")
if(r>b)q.a+=C.c.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nZ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.f,P.f]}}
P.jt.prototype={
gkz:function(){return C.T}}
P.jv.prototype={
bk:function(a,b,c){var u,t,s
c=P.bu(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kA(t)
if(s.hJ(a,b,c)!==c)s.ed(J.nT(a,c-1),0)
return new Uint8Array(t.subarray(0,H.ph(0,s.b,t.length)))},
cR:function(a){return this.bk(a,0,null)},
$abF:function(){return[P.f,[P.b,P.o]]}}
P.kA.prototype={
ed:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
hJ:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a4(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.J(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ed(r,C.c.J(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.ju.prototype={
bk:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.oP(!1,a,b,c)
if(u!=null)return u
c=P.bu(b,c,J.aH(a),null,null,null)
t=new P.am("")
s=new P.ky(!1,t)
s.bk(a,b,c)
if(s.e>0){H.t(P.a8("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c9(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cR:function(a){return this.bk(a,0,null)},
$abF:function(){return[[P.b,P.o],P.f]}}
P.ky.prototype={
bk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kz(this,b,c,a)
$label0$0:for(q=J.cl(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c5()
if((n&192)!==128){m=P.a8("Bad UTF-8 encoding 0x"+C.f.bv(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.H,m)
if(u<=C.H[m]){m=P.a8("Overlong encoding of 0x"+C.f.bv(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a8("Character outside valid Unicode range: 0x"+C.f.bv(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c9(u)
this.c=!1}for(m=o<c;m;){l=P.po(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a0()
if(n<0){i=P.a8("Negative UTF-8 code unit: -0x"+C.f.bv(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a8("Bad UTF-8 encoding 0x"+C.f.bv(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kz.prototype={
$2:function(a,b){this.a.b.a+=P.el(this.d,a,b)},
$S:47}
P.T.prototype={}
P.aq.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aq&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.b3(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.o6(H.ox(this))
t=P.dF(H.ov(this))
s=P.dF(H.or(this))
r=P.dF(H.os(this))
q=P.dF(H.ou(this))
p=P.dF(H.ow(this))
o=P.o7(H.ot(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.f.p(this.a,b.ghC()))},
u:function(a,b){return new P.b5(C.f.u(this.a,b.ghC()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.hc()
t=this.a
if(t<0)return"-"+new P.b5(0-t).i(0)
s=u.$1(C.f.ac(t,6e7)%60)
r=u.$1(C.f.ac(t,1e6)%60)
q=new P.hb().$1(t%1e6)
return""+C.f.ac(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.hb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.hc.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bH.prototype={}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
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
p=P.hh(this.b)
return r+q+": "+p}}
P.ca.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hx.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t
u=H.aa(this.b)
if(typeof u!=="number")return u.a0()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.jm.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jj.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cc.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hh(u)+"."}}
P.ie.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.ek.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.h5.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eQ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hq.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.A(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.J(r,m)
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
g=""}f=C.c.A(r,i,j)
return t+h+f+g+"\n"+C.c.v(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bI.prototype={}
P.o.prototype={}
P.i.prototype={
c4:function(a,b){var u=H.ao(this,"i",0)
return new H.d7(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gX(this)
for(t=0;u.E();)++t
return t},
gaW:function(a){var u,t
u=this.gX(this)
if(!u.E())throw H.c(H.hy())
t=u.gM(u)
if(u.E())throw H.c(H.oe())
return t},
N:function(a,b){var u,t,s
if(b<0)H.t(P.af(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.E();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.oc(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.M.prototype={
gL:function(a){return P.S.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
B:function(a,b){return this===b},
gL:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.c8(this)+"'"},
toString:function(){return this.i(this)}}
P.aA.prototype={}
P.f.prototype={$imt:1}
P.am.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq5:1}
P.jr.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.k(a,"$iE",[u,u],"$aE")
H.I(b)
t=J.dq(b).f4(b,"=")
if(t===-1){if(b!=="")J.ll(a,P.lL(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.A(b,0,t)
r=C.c.aB(b,t+1)
u=this.a
J.ll(a,P.lL(s,0,s.length,u,!0),P.lL(r,0,r.length,u,!0))}return a},
$S:45}
P.jo.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jp.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jq.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fH(C.c.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.a0()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ce.prototype={
gfv:function(){return this.b},
gd2:function(a){var u=this.c
if(u==null)return""
if(C.c.ab(u,"["))return C.c.A(u,1,u.length-1)
return u},
gbZ:function(a){var u=this.d
if(u==null)return P.mZ(this.a)
return u},
gdf:function(a){var u=this.f
return u==null?"":u},
gf_:function(){var u=this.r
return u==null?"":u},
dk:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.f,null],"$aE")
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
if(s&&!C.c.ab(d,"/"))d="/"+d
g=P.lK(g,0,0,h)
return new P.ce(i,j,c,f,d,g,this.r)},
fi:function(a,b){return this.dk(a,null,null,null,null,null,null,b,null,null)},
gdg:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siW(new P.eA(P.mN(u==null?"":u,C.m),[t,t]))}return this.Q},
gf0:function(){return this.c!=null},
gf3:function(){return this.f!=null},
gf1:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.m(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.m(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.m(t)}else u=t
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
if(!!J.X(b).$ilF)if(this.a==b.gc9())if(this.c!=null===b.gf0())if(this.b==b.gfv())if(this.gd2(this)==b.gd2(b))if(this.gbZ(this)==b.gbZ(b))if(this.e===b.gff(b)){u=this.f
t=u==null
if(!t===b.gf3()){if(t)u=""
if(u===b.gdf(b)){u=this.r
t=u==null
if(!t===b.gf1()){if(t)u=""
u=u===b.gf_()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.i(0))
this.z=u}return u},
siW:function(a){var u=P.f
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$ilF:1,
gc9:function(){return this.a},
gff:function(a){return this.e}}
P.ku.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a8("Invalid port",this.a,u+1))},
$S:41}
P.kv.prototype={
$1:function(a){return P.fs(C.aa,a,C.m,!1)},
$S:24}
P.kx.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fs(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fs(C.w,b,C.m,!0))}},
$S:31}
P.kw.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bB(H.nn(b,"$ii")),t=this.a;u.E();)t.$2(a,H.I(u.gM(u)))},
$S:40}
P.jn.prototype={
gfu:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.f5(t,"?",u)
r=t.length
if(s>=0){q=P.dk(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jS(this,"data",null,null,null,P.dk(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kG.prototype={
$1:function(a){return new Uint8Array(96)},
$S:38}
P.kF.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nU(u,0,96,b)
return u},
$S:36}
P.kH.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.J(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kI.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.J(b,0),t=C.c.J(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.ki.prototype={
gf0:function(){return this.c>0},
gf2:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gf3:function(){var u=this.f
if(typeof u!=="number")return u.a0()
return u<this.r},
gf1:function(){return this.r<this.a.length},
gdX:function(){return this.b===4&&C.c.ab(this.a,"http")},
gdY:function(){return this.b===5&&C.c.ab(this.a,"https")},
gc9:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdX()){this.x="http"
u="http"}else if(this.gdY()){this.x="https"
u="https"}else if(u===4&&C.c.ab(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ab(this.a,"package")){this.x="package"
u="package"}else{u=C.c.A(this.a,0,u)
this.x=u}return u},
gfv:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.A(this.a,t,u-1):""},
gd2:function(a){var u=this.c
return u>0?C.c.A(this.a,u,this.d):""},
gbZ:function(a){var u
if(this.gf2()){u=this.d
if(typeof u!=="number")return u.p()
return P.fH(C.c.A(this.a,u+1,this.e),null,null)}if(this.gdX())return 80
if(this.gdY())return 443
return 0},
gff:function(a){return C.c.A(this.a,this.e,this.f)},
gdf:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a0()
return u<t?C.c.A(this.a,u+1,t):""},
gf_:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aB(t,u+1):""},
gdg:function(){var u=this.f
if(typeof u!=="number")return u.a0()
if(u>=this.r)return C.ab
u=P.f
return new P.eA(P.mN(this.gdf(this),C.m),[u,u])},
dk:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.f,null],"$aE")
i=this.gc9()
u=i==="file"
t=this.c
j=t>0?C.c.A(this.a,this.b+3,t):""
f=this.gf2()?this.gbZ(this):null
t=this.c
if(t>0)c=C.c.A(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.A(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.ab(d,"/"))d="/"+d
g=P.lK(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aB(t,s+1)
return new P.ce(i,j,c,f,d,g,b)},
fi:function(a,b){return this.dk(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$ilF&&this.a===b.i(0)},
i:function(a){return this.a},
$ilF:1}
P.jS.prototype={}
W.A.prototype={}
W.fK.prototype={
gl:function(a){return a.length}}
W.dw.prototype={
i:function(a){return String(a)},
$idw:1}
W.fL.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bX.prototype={$ibX:1}
W.bC.prototype={$ibC:1}
W.bZ.prototype={
ds:function(a,b,c){if(c!=null)return this.hK(a,b,P.pv(c,null))
return this.hL(a,b)},
fE:function(a,b){return this.ds(a,b,null)},
hK:function(a,b,c){return a.getContext(b,c)},
hL:function(a,b){return a.getContext(b)},
$ibZ:1,
$ima:1}
W.c_.prototype={
hM:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kv:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ic_:1}
W.bD.prototype={
gl:function(a){return a.length}}
W.cv.prototype={$icv:1}
W.h1.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cw.prototype={
gl:function(a){return a.length}}
W.h2.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.h3.prototype={
gl:function(a){return a.length}}
W.h4.prototype={
gl:function(a){return a.length}}
W.h7.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.cx.prototype={
k8:function(a,b){return a.adoptNode(b)},
dt:function(a,b){return a.getElementById(b)}}
W.h8.prototype={
i:function(a){return String(a)}}
W.dG.prototype={
km:function(a,b){return a.createHTMLDocument(b)}}
W.dH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iac",[P.a7],"$aac")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ac,P.a7]]},
$ay:function(){return[[P.ac,P.a7]]},
$ii:1,
$ai:function(){return[[P.ac,P.a7]]},
$ib:1,
$ab:function(){return[[P.ac,P.a7]]},
$aD:function(){return[[P.ac,P.a7]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaA(a))+" x "+H.m(this.gaw(a))},
B:function(a,b){var u
if(b==null)return!1
if(!H.dp(b,"$iac",[P.a7],"$aac"))return!1
u=J.ae(b)
return a.left===u.gbY(b)&&a.top===u.gc2(b)&&this.gaA(a)===u.gaA(b)&&this.gaw(a)===u.gaw(b)},
gL:function(a){return W.mX(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaA(a)),C.e.gL(this.gaw(a)))},
gep:function(a){return a.bottom},
gaw:function(a){return a.height},
gbY:function(a){return a.left},
gc1:function(a){return a.right},
gc2:function(a){return a.top},
gaA:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a7]}}
W.h9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aD:function(){return[P.f]}}
W.ha.prototype={
gl:function(a){return a.length}}
W.jQ.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iV")},
n:function(a,b,c){var u
H.e(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.lm(this.a,c,u[b])},
h:function(a,b){J.m2(this.a,b)
return b},
gX:function(a){var u=this.lp(this)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gkc:function(a){return new W.jT(a)},
gcQ:function(a){return new W.jQ(a,a.children)},
gew:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
ap:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.me
if(u==null){u=H.d([],[W.aF])
t=new W.e5(u)
C.a.h(u,W.mW(null))
C.a.h(u,W.mY())
$.me=t
d=t}else d=u
u=$.md
if(u==null){u=new W.ft(d)
$.md=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation
t=(t&&C.U).km(t,"")
$.bn=t
$.lu=t.createRange()
t=$.bn
t.toString
t=t.createElement("base")
H.e(t,"$icq")
t.href=u.baseURI
u=$.bn.head;(u&&C.W).F(u,t)}u=$.bn
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibC")}u=$.bn
if(!!this.$ibC)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bn.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a8,a.tagName)){u=$.lu;(u&&C.N).fL(u,s)
u=$.lu
r=(u&&C.N).kk(u,b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(u=J.ae(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.bn.body
if(s==null?u!=null:s!==u)J.m5(s)
c.du(r)
C.z.k8(document,r)
return r},
kl:function(a,b,c){return this.ap(a,b,c,null)},
fO:function(a,b,c,d){a.textContent=null
this.F(a,this.ap(a,b,c,d))},
fN:function(a,b){return this.fO(a,b,null,null)},
ba:function(a,b){return a.getAttribute(b)},
iY:function(a,b){return a.removeAttribute(b)},
fM:function(a,b,c){return a.setAttribute(b,c)},
$iV:1,
gll:function(a){return a.tagName}}
W.he.prototype={
$1:function(a){return!!J.X(H.e(a,"$iG")).$iV},
$S:28}
W.p.prototype={$ip:1}
W.j.prototype={
k0:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.ho(a,b,c,!1)},
ho:function(a,b,c,d){return a.addEventListener(b,H.ci(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aJ.prototype={$iaJ:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icA:1,
$aD:function(){return[W.aJ]}}
W.hl.prototype={
gl:function(a){return a.length}}
W.hp.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.dM.prototype={}
W.dN.prototype={
j3:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic4:1,
$aD:function(){return[W.G]}}
W.dO.prototype={}
W.bo.prototype={$ibo:1,
gex:function(a){return a.data}}
W.cD.prototype={$icD:1,$ima:1}
W.cE.prototype={$icE:1}
W.b7.prototype={$ib7:1}
W.dU.prototype={}
W.dX.prototype={
i:function(a){return String(a)},
$idX:1}
W.cI.prototype={}
W.hX.prototype={
gl:function(a){return a.length}}
W.hY.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.P(a,new W.hZ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aah:function(){return[P.f,null]},
$iE:1,
$aE:function(){return[P.f,null]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i_.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.P(a,new W.i0(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aah:function(){return[P.f,null]},
$iE:1,
$aE:function(){return[P.f,null]}}
W.i0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aT.prototype={$iaT:1}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.ai.prototype={$iai:1}
W.at.prototype={
gaW:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mD("No elements"))
if(t>1)throw H.c(P.mD("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ae(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.lm(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dK(u,u.length,-1,[H.bU(C.ac,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
la:function(a){var u=a.parentNode
if(u!=null)J.fI(u,a)},
lf:function(a,b){var u,t
try{u=a.parentNode
J.lm(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fU(a):u},
F:function(a,b){return a.appendChild(H.e(b,"$iG"))},
iZ:function(a,b){return a.removeChild(b)},
j2:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.ii.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.ea.prototype={
kk:function(a,b){return a.createContextualFragment(b)},
fL:function(a,b){return a.selectNodeContents(b)}}
W.iu.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.P(a,new W.iv(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aah:function(){return[P.f,null]},
$iE:1,
$aE:function(){return[P.f,null]}}
W.iv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ix.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gl:function(a){return a.length}}
W.iM.prototype={
j:function(a,b){return this.dU(a,H.I(b))},
n:function(a,b,c){this.jb(a,b,c)},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.hQ(a,u)
if(t==null)return
b.$2(t,this.dU(a,t))}},
gad:function(a){var u=H.d([],[P.f])
this.P(a,new W.iN(u))
return u},
gl:function(a){return a.length},
dU:function(a,b){return a.getItem(b)},
hQ:function(a,b){return a.key(b)},
jb:function(a,b,c){return a.setItem(b,c)},
$aah:function(){return[P.f,P.f]},
$iE:1,
$aE:function(){return[P.f,P.f]}}
W.iN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:31}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.em.prototype={
ap:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=W.o8("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ag(0,new W.at(u))
return t},
hO:function(a,b){return a.insertRow(b)}}
W.en.prototype={
ap:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ap(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaW(u)
s.toString
u=new W.at(s)
r=u.gaW(u)
t.toString
r.toString
new W.at(t).ag(0,new W.at(r))
return t},
dW:function(a,b){return a.insertCell(b)}}
W.iT.prototype={
ap:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ap(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaW(u)
t.toString
s.toString
new W.at(t).ag(0,new W.at(s))
return t}}
W.cV.prototype={$icV:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.iW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aD:function(){return[W.aY]}}
W.j0.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.j4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aD:function(){return[W.aZ]}}
W.j5.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={}
W.js.prototype={
i:function(a){return String(a)}}
W.jI.prototype={$ima:1}
W.jJ.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gks:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gkr:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibi:1}
W.d8.prototype={
j4:function(a,b){return a.requestAnimationFrame(H.ci(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
hD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d9.prototype={$id9:1}
W.jR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iY")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aD:function(){return[W.Y]}}
W.eL.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.dp(b,"$iac",[P.a7],"$aac"))return!1
u=J.ae(b)
return a.left===u.gbY(b)&&a.top===u.gc2(b)&&a.width===u.gaA(b)&&a.height===u.gaw(b)},
gL:function(a){return W.mX(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaw:function(a){return a.height},
gaA:function(a){return a.width}}
W.k5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.f2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.kj.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aD:function(){return[W.aX]}}
W.kn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aD:function(){return[W.aK]}}
W.jP.prototype={
P:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gad(this),t=u.length,s=this.a,r=J.ae(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.ba(s,p))}},
gad:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.e(u[r],"$id9")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aah:function(){return[P.f,P.f]},
$aE:function(){return[P.f,P.f]}}
W.jT.prototype={
j:function(a,b){return J.ln(this.a,H.I(b))},
n:function(a,b,c){J.nY(this.a,b,c)},
gl:function(a){return this.gad(this).length}}
W.jU.prototype={}
W.lI.prototype={}
W.jV.prototype={}
W.jW.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:35}
W.bS.prototype={
h6:function(a){var u,t
u=$.m_()
if(u.gkO(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pG())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pH())}},
b4:function(a){return $.nM().a_(0,W.cy(a))},
aE:function(a,b,c){var u,t,s
u=W.cy(a)
t=$.m_()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lQ(s.$4(a,b,c,this))},
$iaF:1}
W.D.prototype={
gX:function(a){return new W.dK(a,this.gl(a),-1,[H.bU(this,a,"D",0)])}}
W.e5.prototype={
b4:function(a){return C.a.ek(this.a,new W.i9(a))},
aE:function(a,b,c){return C.a.ek(this.a,new W.i8(a,b,c))},
$iaF:1}
W.i9.prototype={
$1:function(a){return H.e(a,"$iaF").b4(this.a)},
$S:29}
W.i8.prototype={
$1:function(a){return H.e(a,"$iaF").aE(this.a,this.b,this.c)},
$S:29}
W.fa.prototype={
hi:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.c4(0,new W.kg())
t=b.c4(0,new W.kh())
this.b.ag(0,u)
s=this.c
s.ag(0,C.I)
s.ag(0,t)},
b4:function(a){return this.a.a_(0,W.cy(a))},
aE:function(a,b,c){var u,t
u=W.cy(a)
t=this.c
if(t.a_(0,H.m(u)+"::"+b))return this.d.k9(c)
else if(t.a_(0,"*::"+b))return this.d.k9(c)
else{t=this.b
if(t.a_(0,H.m(u)+"::"+b))return!0
else if(t.a_(0,"*::"+b))return!0
else if(t.a_(0,H.m(u)+"::*"))return!0
else if(t.a_(0,"*::*"))return!0}return!1},
$iaF:1}
W.kg.prototype={
$1:function(a){return!C.a.a_(C.B,H.I(a))},
$S:30}
W.kh.prototype={
$1:function(a){return C.a.a_(C.B,H.I(a))},
$S:30}
W.kp.prototype={
aE:function(a,b,c){if(this.fZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ln(a,"template")==="")return this.e.a_(0,b)
return!1}}
W.kq.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.I(a))},
$S:24}
W.ko.prototype={
b4:function(a){var u=J.X(a)
if(!!u.$icQ)return!1
u=!!u.$ir
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
aE:function(a,b,c){if(b==="is"||C.c.ab(b,"on"))return!1
return this.b4(a)},
$iaF:1}
W.dK.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdV(J.m1(this.a,u))
this.c=u
return!0}this.sdV(null)
this.c=t
return!1},
gM:function(a){return this.d},
sdV:function(a){this.d=H.B(a,H.u(this,0))},
$ib6:1}
W.aF.prototype={}
W.ke.prototype={$iqi:1}
W.ft.prototype={
du:function(a){new W.kB(this).$2(a,null)},
bh:function(a,b){if(b==null)J.m5(a)
else J.fI(b,a)},
j9:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nV(a)
s=J.ln(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ak(o)}q="element unprintable"
try{q=J.av(a)}catch(o){H.ak(o)}try{p=W.cy(a)
this.j8(H.e(a,"$iV"),b,u,q,p,H.e(t,"$iE"),H.I(s))}catch(o){if(H.ak(o) instanceof P.aP)throw o
else{this.bh(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bh(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b4(a)){this.bh(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aE(a,"is",g)){this.bh(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gad(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.gad(f).length-1,u=f.a,r=J.ae(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.aE(a,J.o_(q),r.ba(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.ba(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ba(u,q)
r.iY(u,q)}}if(!!J.X(a).$icV)this.du(a.content)},
$iq3:1}
W.kB.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j9(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bh(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ak(r)
q=H.e(u,"$iG")
if(s){p=q.parentNode
if(p!=null)J.fI(p,q)}else J.fI(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iG")}},
$S:46}
W.eK.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fg.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fD.prototype={}
P.kk.prototype={
eY:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dq:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.X(a)
if(!!t.$iaq)return new Date(a.a)
if(!!t.$ioC)throw H.c(P.jk("structured clone of RegExp"))
if(!!t.$iaJ)return a
if(!!t.$ibX)return a
if(!!t.$icA)return a
if(!!t.$ibo)return a
if(!!t.$icK||!!t.$ibN)return a
if(!!t.$iE){s=this.eY(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.P(a,new P.km(u,this))
return u.a}if(!!t.$ib){s=this.eY(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.kj(a,s)}throw H.c(P.jk("structured clone of other type"))},
kj:function(a,b){var u,t,s,r
u=J.cl(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.dq(u.j(a,r)))
return s}}
P.km.prototype={
$2:function(a,b){this.a.a[a]=this.b.dq(b)},
$S:8}
P.fq.prototype={$ibo:1,
gex:function(a){return this.a}}
P.kM.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.kl.prototype={}
P.hm.prototype={
gbC:function(){var u,t,s
u=this.b
t=H.ao(u,"y",0)
s=W.V
return new H.hP(new H.d7(u,H.n(new P.hn(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.ho(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.e(c,"$iV")
u=this.gbC()
J.nX(u.b.$1(J.fJ(u.a,b)),c)},
h:function(a,b){J.m2(this.b.a,b)},
gl:function(a){return J.aH(this.gbC().a)},
j:function(a,b){var u=this.gbC()
return u.b.$1(J.fJ(u.a,b))},
gX:function(a){var u=P.mk(this.gbC(),!1,W.V)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.hn.prototype={
$1:function(a){return!!J.X(H.e(a,"$iG")).$iV},
$S:28}
P.ho.prototype={
$1:function(a){return H.l(H.e(a,"$iG"),"$iV")},
$S:34}
P.k9.prototype={
gc1:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.B(u+this.c,H.u(this,0))},
gep:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.B(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dp(b,"$iac",[P.a7],"$aac")){u=this.a
t=J.ae(b)
if(u==t.gbY(b)){s=this.b
if(s==t.gc2(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.B(u+this.c,r)===t.gc1(b)){if(typeof s!=="number")return s.p()
u=H.B(s+this.d,r)===t.gep(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.dv(u)
s=this.b
r=J.dv(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gL(H.B(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.B(s+this.d,q))
return P.p0(P.k7(P.k7(P.k7(P.k7(0,t),r),u),q))}}
P.ac.prototype={
gbY:function(a){return this.a},
gc2:function(a){return this.b},
gaA:function(a){return this.c},
gaw:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aK(a,b)},
n:function(a,b,c){H.e(c,"$ib8")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aK:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aD:function(){return[P.b8]}}
P.bc.prototype={$ibc:1}
P.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aK(a,b)},
n:function(a,b,c){H.e(c,"$ibc")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aK:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aD:function(){return[P.bc]}}
P.ik.prototype={
gl:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.iS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aK(a,b)},
n:function(a,b,c){H.I(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aK:function(a,b){return a.getItem(b)},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aD:function(){return[P.f]}}
P.r.prototype={
gcQ:function(a){return new P.hm(a,new W.at(a))},
ap:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aF])
C.a.h(u,W.mW(null))
C.a.h(u,W.mY())
C.a.h(u,new W.ko())
c=new W.ft(new W.e5(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).kl(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.at(r)
p=u.gaW(u)
for(u=J.ae(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ir:1}
P.bf.prototype={$ibf:1}
P.j6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aK(a,b)},
n:function(a,b,c){H.e(c,"$ibf")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aK:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aD:function(){return[P.bf]}}
P.eV.prototype={}
P.eW.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.fo.prototype={}
P.fp.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ioM:1}
P.fN.prototype={
gl:function(a){return a.length}}
P.fO.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.P(a,new P.fP(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aah:function(){return[P.f,null]},
$iE:1,
$aE:function(){return[P.f,null]}}
P.fP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fQ.prototype={
gl:function(a){return a.length}}
P.bW.prototype={}
P.id.prototype={
gl:function(a){return a.length}}
P.eJ.prototype={}
P.dz.prototype={$idz:1}
P.dL.prototype={$idL:1}
P.e9.prototype={$ie9:1}
P.ed.prototype={$ied:1}
P.cb.prototype={
bF:function(a,b){return a.activeTexture(b)},
el:function(a,b,c){return a.attachShader(b,c)},
aF:function(a,b,c){return a.bindBuffer(b,c)},
bj:function(a,b,c){return a.bindFramebuffer(b,c)},
en:function(a,b,c){return a.bindRenderbuffer(b,c)},
ah:function(a,b,c){return a.bindTexture(b,c)},
ke:function(a,b,c){return a.blendFunc(b,c)},
eq:function(a,b,c,d){return a.bufferData(b,c,d)},
es:function(a,b){return a.clear(b)},
eu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ev:function(a,b){return a.clearDepth(b)},
kh:function(a,b){return a.compileShader(b)},
kn:function(a,b){return a.createShader(b)},
kp:function(a,b){return a.deleteProgram(b)},
kq:function(a,b){return a.deleteShader(b)},
ey:function(a,b){return a.depthFunc(b)},
kt:function(a,b){return a.disable(b)},
eA:function(a,b){return a.disableVertexAttribArray(b)},
ku:function(a,b,c,d,e){return a.drawElements(b,c,H.aa(d),H.aa(e))},
bn:function(a,b){return a.enable(b)},
eC:function(a,b){return a.enableVertexAttribArray(b)},
kI:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
kJ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
fA:function(a,b,c){return a.getActiveAttrib(b,c)},
fB:function(a,b,c){return a.getActiveUniform(b,c)},
fC:function(a,b,c){return a.getAttribLocation(b,c)},
c6:function(a,b){return a.getParameter(b)},
fF:function(a,b){return a.getProgramInfoLog(b)},
c7:function(a,b,c){return a.getProgramParameter(b,c)},
fG:function(a,b){return a.getShaderInfoLog(b)},
fH:function(a,b,c){return a.getShaderParameter(b,c)},
fI:function(a,b,c){return a.getUniformLocation(b,c)},
kQ:function(a,b){return a.linkProgram(b)},
l8:function(a,b,c){return a.pixelStorei(b,c)},
le:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fS:function(a,b,c){return a.shaderSource(b,c)},
fm:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.jo(a,b,c,d,e,f,g,h,i,j)
return}t=J.X(g)
if(!!t.$ibo&&h==null&&u&&!0){this.jp(a,b,c,d,e,f,P.pw(g))
return}if(!!t.$icD&&h==null&&u&&!0){this.jq(a,b,c,d,e,f,g)
return}throw H.c(P.dx("Incorrect number or type of arguments"))},
lm:function(a,b,c,d,e,f,g){return this.fm(a,b,c,d,e,f,g,null,null,null)},
jo:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
jp:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jq:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
C:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ft:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dn:function(a,b){return a.useProgram(b)},
ls:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$icb:1}
P.ef.prototype={$ief:1}
P.eo.prototype={$ieo:1}
P.ey.prototype={$iey:1}
P.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bv(this.hP(a,b))},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
hP:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.fd.prototype={}
P.fe.prototype={}
O.a4.prototype={
bA:function(a){this.shU(H.d([],[a]))
this.se3(null)
this.se_(null)
this.se4(null)},
dv:function(a,b,c){var u=H.ao(this,"a4",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.se3(b)
this.se_(a)
this.se4(c)},
bb:function(a,b){return this.dv(a,null,b)},
e2:function(a){var u
H.k(a,"$ii",[H.ao(this,"a4",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dZ:function(a,b){var u
H.k(b,"$ii",[H.ao(this,"a4",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.aw(u,u.length,0,[H.u(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ao(this,"a4",0)
H.B(b,u)
u=[u]
if(this.e2(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dZ(s,H.d([b],u))}},
ag:function(a,b){var u,t
H.k(b,"$ii",[H.ao(this,"a4",0)],"$ai")
if(this.e2(b)){u=this.a
t=u.length
C.a.ag(u,b)
this.dZ(t,b)}},
shU:function(a){this.a=H.k(a,"$ib",[H.ao(this,"a4",0)],"$ab")},
se3:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.ao(this,"a4",0)]]})},
se_:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ao(this,"a4",0)]]})},
se4:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ao(this,"a4",0)]]})},
$ii:1}
O.cH.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
h4:function(a){var u=this.b
if(u!=null)u.I(a)},
aX:function(){return this.h4(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaI(u)
else return V.c6()},
c0:function(a){var u=this.a
if(a==null)C.a.h(u,V.c6())
else C.a.h(u,a)
this.aX()},
aT:function(){var u=this.a
if(u.length>0){u.pop()
this.aX()}},
scl:function(a){this.a=H.k(a,"$ib",[V.ax],"$ab")}}
E.fU.prototype={}
E.ar.prototype={
saa:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gt().O(0,this.gfc())
t=this.c
if(t!=null)t.gt().h(0,this.gfc())
s=new D.J("shape",u,this.c,this,[F.eg])
s.b=!0
this.b7(s)}},
az:function(a,b){var u
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.az(0,b)},
aj:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga6(u))
u.aX()
a.de(this.f)
u=a.dy
t=(u&&C.a).gaI(u)
if(t!=null&&this.d!=null)t.fh(a,this)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aj(a)
a.dd()
a.dx.aT()},
gt:function(){var u=this.z
if(u==null){u=D.O()
this.z=u}return u},
b7:function(a){var u=this.z
if(u!=null)u.I(a)},
a8:function(){return this.b7(null)},
fd:function(a){H.e(a,"$iz")
this.e=null
this.b7(a)},
l_:function(){return this.fd(null)},
fb:function(a){this.b7(H.e(a,"$iz"))},
kX:function(){return this.fb(null)},
kW:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.gfa(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.san(null)
o.sb1(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a8()},
kZ:function(a,b){var u,t
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.gX(b),t=this.gfa();u.E();)u.gM(u).gt().O(0,t)
this.a8()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh5:function(a,b){this.y=H.k(b,"$ia4",[E.ar],"$aa4")},
$ibb:1}
E.iq.prototype={
h1:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aq(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cH()
t=[V.ax]
u.scl(H.d([],t))
u.b=null
u.gt().h(0,new E.ir(this))
this.cy=u
u=new O.cH()
u.scl(H.d([],t))
u.b=null
u.gt().h(0,new E.is(this))
this.db=u
u=new O.cH()
u.scl(H.d([],t))
u.b=null
u.gt().h(0,new E.it(this))
this.dx=u
this.sjn(H.d([],[O.bP]))
u=this.dy;(u&&C.a).h(u,null)
this.sjj(new H.aS([P.f,A.cR]))},
gl9:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga6(u)
t=this.db
t=u.v(0,t.ga6(t))
this.z=t
u=t}return u},
de:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaI(u):a;(u&&C.a).h(u,t)},
dd:function(){var u=this.dy
if(u.length>1)u.pop()},
ej:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.bH(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sjn:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
sjj:function(a){this.fr=H.k(a,"$iE",[P.f,A.cR],"$aE")}}
E.ir.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:11}
E.is.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:11}
E.it.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:11}
E.eu.prototype={
dD:function(a){H.e(a,"$iz")
this.fj()},
dC:function(){return this.dD(null)},
gkH:function(){var u,t,s
u=Date.now()
t=C.f.ac(P.mc(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aq(u,!1)
return s/t},
e7:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.F(u)
s=C.e.d1(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.e.d1(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mH(C.y,this.glg())}},
fj:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.j_(this),{func:1,ret:-1,args:[P.a7]})
C.P.hD(u)
C.P.j4(u,W.nb(t,P.a7))}},
ld:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e7()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aq(r,!1)
s.y=P.mc(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aX()
r=s.db
C.a.sl(r.a,0)
r.aX()
r=s.dx
C.a.sl(r.a,0)
r.aX()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aj(this.e)}s=this.z
if(s!=null)s.I(null)}catch(q){u=H.ak(q)
t=H.cm(q)
P.aC("Error: "+H.m(u))
P.aC("Stack: "+H.m(t))
throw H.c(u)}}}
E.j_.prototype={
$1:function(a){var u
H.pR(a)
u=this.a
if(u.ch){u.ch=!1
u.ld()}},
$S:55}
Z.eG.prototype={$ipY:1}
Z.dA.prototype={
a7:function(a){var u,t,s
try{t=a.a
C.b.eC(t,this.e)
C.b.ls(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ak(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.eH.prototype={$ipZ:1}
Z.ct.prototype={
aR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a7:function(a){var u,t
u=this.a
C.b.aF(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a7(a)},
ay:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eA(s,u[t].e)
C.b.aF(s,this.a.a,null)},
aj:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aF(t,p,r.b)
C.b.ku(t,q.a,q.b,5123,0)
C.b.aF(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.av(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shN:function(a){this.b=H.k(a,"$ib",[Z.bJ],"$ab")},
$iq6:1}
Z.bJ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c8(this.c)+"'")+"]"}}
Z.bh.prototype={
gdw:function(a){var u,t
u=this.a
t=(u&$.b1().a)!==0?3:0
if((u&$.by().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.bz().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
kb:function(a){var u,t,s
u=$.b1()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.by()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ds()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0)if(s===a)return u
return $.nK()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.f])
t=this.a
if((t&$.b1().a)!==0)C.a.h(u,"Pos")
if((t&$.by().a)!==0)C.a.h(u,"Norm")
if((t&$.bx().a)!==0)C.a.h(u,"Binm")
if((t&$.bz().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.ds().a)!==0)C.a.h(u,"Clr3")
if((t&$.dt().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fX.prototype={}
D.c2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.san(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
I:function(a){var u,t,s,r
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
return!0}if(!s)C.a.P(P.mk(t,!0,{func:1,ret:-1,args:[D.z]}),new D.hi(u))
t=this.b
if(t!=null){this.sb1(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.P(t,new D.hj(u))}return!0},
cV:function(){return this.I(null)},
lh:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.I(t)}}},
ax:function(a){return this.lh(a,!0,!1)},
san:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sb1:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hi.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.hj.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.z.prototype={}
D.bK.prototype={}
D.bL.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dB.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dT.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hD.prototype={
l5:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
l1:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
siV:function(a){this.d=H.k(a,"$imC",[P.o],"$amC")}}
X.dY.prototype={}
X.hL.prototype={
bf:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aq(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a6(t.a+s*r,t.b+q*p)
p=this.a.gb6()
n=new X.bs(a,V.bt(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
dc:function(a,b){this.r=a.a
return!1},
br:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fK()
if(typeof u!=="number")return u.c5()
this.r=(u&~t)>>>0
return!1},
bq:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bf(a,b))
return!0},
l6:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb6()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cJ(new V.W(q*p,o*n),t,s,new P.aq(r,!1),this)
r.b=!0
u.I(r)
return!0},
it:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aq(Date.now(),!1)
t=this.f
s=new X.dY(c,a,this.a.gb6(),b,u,this)
s.b=!0
t.I(s)
this.y=u
this.x=V.bt()}}
X.aE.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.i2.prototype={
ci:function(a,b,c){var u,t,s
u=new P.aq(Date.now(),!1)
t=this.a.gb6()
s=new X.bs(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
dc:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.ci(a,b,!0))
return!0},
br:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fK()
if(typeof u!=="number")return u.c5()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.I(this.ci(a,b,!0))
return!0},
bq:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.ci(a,b,!1))
return!0},
l7:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb6()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cJ(new V.W(r*q,p*o),t,b,new P.aq(s,!1),this)
s.b=!0
u.I(s)
return!0},
geB:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
gc3:function(){var u=this.c
if(u==null){u=D.O()
this.c=u}return u},
gf9:function(){var u=this.d
if(u==null){u=D.O()
this.d=u}return u}}
X.cJ.prototype={}
X.ij.prototype={}
X.ew.prototype={}
X.j3.prototype={
bf:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.a6],"$ab")
u=new P.aq(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=this.a.gb6()
r=new X.ew(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
l4:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.I(this.bf(a,!0))
return!0},
l2:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.I(this.bf(a,!0))
return!0},
l3:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.I(this.bf(a,!1))
return!0}}
X.eB.prototype={
gb6:function(){var u=this.a
return V.mz(0,0,C.q.gew(u).c,C.q.gew(u).d)},
dP:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dT(u,new X.aE(t,a.altKey,a.shiftKey))},
b2:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aE(t,a.altKey,a.shiftKey)},
cE:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aP:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a6(t-r,s-q)},
bg:function(a){return new V.W(a.movementX,a.movementY)},
cw:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a6])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.a9(p.pageX)
C.e.a9(p.pageY)
n=u.left
C.e.a9(p.pageX)
C.a.h(t,new V.a6(o-n,C.e.a9(p.pageY)-u.top))}return t},
aM:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dB(u,new X.aE(t,a.altKey,a.shiftKey))},
cm:function(a){var u,t,s,r,q,p
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
im:function(a){this.f=!0},
i8:function(a){this.f=!1},
ig:function(a){H.e(a,"$iai")
if(this.f&&this.cm(a))a.preventDefault()},
ir:function(a){var u
H.e(a,"$ib7")
if(!this.f)return
u=this.dP(a)
this.b.l5(u)},
ip:function(a){var u
H.e(a,"$ib7")
if(!this.f)return
u=this.dP(a)
this.b.l1(u)},
iv:function(a){var u,t,s,r
H.e(a,"$iai")
u=this.a
u.focus()
this.f=!0
this.b2(a)
if(this.x){t=this.aM(a)
s=this.bg(a)
if(this.d.dc(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aM(a)
r=this.aP(a)
if(this.c.dc(t,r))a.preventDefault()},
iz:function(a){var u,t,s
H.e(a,"$iai")
this.b2(a)
u=this.aM(a)
if(this.x){t=this.bg(a)
if(this.d.br(u,t))a.preventDefault()
return}if(this.r)return
s=this.aP(a)
if(this.c.br(u,s))a.preventDefault()},
ik:function(a){var u,t,s
H.e(a,"$iai")
if(!this.cm(a)){this.b2(a)
u=this.aM(a)
if(this.x){t=this.bg(a)
if(this.d.br(u,t))a.preventDefault()
return}if(this.r)return
s=this.aP(a)
if(this.c.br(u,s))a.preventDefault()}},
ix:function(a){var u,t,s
H.e(a,"$iai")
this.b2(a)
u=this.aM(a)
if(this.x){t=this.bg(a)
if(this.d.bq(u,t))a.preventDefault()
return}if(this.r)return
s=this.aP(a)
if(this.c.bq(u,s))a.preventDefault()},
ii:function(a){var u,t,s
H.e(a,"$iai")
if(!this.cm(a)){this.b2(a)
u=this.aM(a)
if(this.x){t=this.bg(a)
if(this.d.bq(u,t))a.preventDefault()
return}if(this.r)return
s=this.aP(a)
if(this.c.bq(u,s))a.preventDefault()}},
iB:function(a){var u,t
H.e(a,"$ibi")
this.b2(a)
u=new V.W((a&&C.O).gkr(a),C.O.gks(a)).w(0,180)
if(this.x){if(this.d.l6(u))a.preventDefault()
return}if(this.r)return
t=this.aP(a)
if(this.c.l7(u,t))a.preventDefault()},
iD:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aM(this.y)
s=this.aP(this.y)
this.d.it(t,s,u)}},
iT:function(a){var u
H.e(a,"$ib_")
this.a.focus()
this.f=!0
this.cE(a)
u=this.cw(a)
if(this.e.l4(u))a.preventDefault()},
iP:function(a){var u
H.e(a,"$ib_")
this.cE(a)
u=this.cw(a)
if(this.e.l2(u))a.preventDefault()},
iR:function(a){var u
H.e(a,"$ib_")
this.cE(a)
u=this.cw(a)
if(this.e.l3(u))a.preventDefault()},
shE:function(a){this.z=H.k(a,"$ib",[[P.cT,P.S]],"$ab")}}
D.bG.prototype={
gt:function(){var u=this.d
if(u==null){u=D.O()
this.d=u}return u},
aL:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.I(a)},
ha:function(){return this.aL(null)},
$ia9:1,
$ibb:1}
D.a9.prototype={$ibb:1}
D.dV.prototype={
gt:function(){var u=this.Q
if(u==null){u=D.O()
this.Q=u}return u},
aL:function(a){var u=this.Q
if(u!=null)u.I(a)},
e1:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.I(a)},
is:function(){return this.e1(null)},
iF:function(a){var u,t,s
H.k(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.h7(s))return!1}return!0},
i2:function(a,b){var u,t,s,r,q,p,o,n
u=D.a9
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ge0(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.e(b[p],"$ia9")
if(o instanceof D.bG)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.c2()
n.san(null)
n.sb1(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.san(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bK(a,b,this,[u])
u.b=!0
this.aL(u)},
iJ:function(a,b){var u,t,s,r
u=D.a9
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.ge0();t.E();){r=t.gM(t)
C.a.O(this.e,r)
r.gt().O(0,s)}u=new D.bL(a,b,this,[u])
u.b=!0
this.aL(u)},
h7:function(a){var u=C.a.a_(this.e,a)
return u},
sh8:function(a){this.e=H.k(a,"$ib",[D.bG],"$ab")},
shb:function(a){this.f=H.k(a,"$ib",[D.e8],"$ab")},
shc:function(a){this.r=H.k(a,"$ib",[D.ej],"$ab")},
shd:function(a){this.x=H.k(a,"$ib",[D.er],"$ab")},
she:function(a){this.y=H.k(a,"$ib",[D.es],"$ab")},
shf:function(a){this.z=H.k(a,"$ib",[D.et],"$ab")},
$ai:function(){return[D.a9]},
$aa4:function(){return[D.a9]}}
D.e8.prototype={$ia9:1,$ibb:1}
D.ej.prototype={$ia9:1,$ibb:1}
D.er.prototype={$ia9:1,$ibb:1}
D.es.prototype={$ia9:1,$ibb:1}
D.et.prototype={$ia9:1,$ibb:1}
V.a5.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gdh())
t=C.e.p(this.b,b.gc8())
s=C.e.p(this.c,b.gcM())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gdh())
t=C.e.u(this.b,b.gc8())
s=C.e.u(this.c,b.gcM())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.al.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gdh())
t=C.e.p(this.b,b.gc8())
s=C.e.p(this.c,b.gcM())
r=C.e.p(this.d,b.gka(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.al(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gdh())
t=C.e.u(this.b,b.gc8())
s=C.e.u(this.c,b.gcM())
r=C.e.u(this.d,b.gka(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.al(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}}
V.hg.prototype={}
V.e1.prototype={
ak:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
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
u=[P.q]
t=V.ck(H.d([this.a,this.d,this.r],u),3,0)
s=V.ck(H.d([this.b,this.e,this.x],u),3,0)
r=V.ck(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.h(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.h(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.h(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.h(t,1)
n=" "+t[1]+", "
if(1>=p)return H.h(s,1)
n=n+s[1]+", "
if(1>=o)return H.h(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.h(t,2)
u=" "+t[2]+", "
if(2>=p)return H.h(s,2)
u=u+s[2]+", "
if(2>=o)return H.h(r,2)
return n+(u+r[2]+"]")}}
V.ax.prototype={
ak:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return u},
d5:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.N().a)return V.c6()
a8=1/a7
a9=-r
b0=-d
return V.ba((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.ba(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dm:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bw:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Z(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
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
i:function(a){return this.U()},
eZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.ck(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ck(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ck(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ck(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
U:function(){return this.eZ("",3,0)},
H:function(a){return this.eZ(a,3,0)}}
V.a6.prototype={
p:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.az.prototype={
p:function(a,b){return new V.az(C.e.p(this.a,b.glu(b)),C.e.p(this.b,b.glv(b)),C.e.p(this.c,b.glw(b)),C.e.p(this.d,b.glt(b)))},
u:function(a,b){return new V.az(C.e.u(this.a,b.glu(b)),C.e.u(this.b,b.glv(b)),C.e.u(this.c,b.glw(b)),C.e.u(this.d,b.glt(b)))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}}
V.ec.prototype={
gai:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ec))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}}
V.W.prototype={
d6:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gkw(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gkx(b)
if(typeof u!=="number")return u.p()
return new V.W(t,C.e.p(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gkw(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.gkx(b)
if(typeof u!=="number")return u.u()
return new V.W(t,C.e.u(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.W(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.mO
if(u==null){u=new V.W(0,0)
$.mO=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.W(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.K.prototype={
d6:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d7:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aQ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
W:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.N().a)return V.d6()
return new V.K(this.a/b,this.b/b,this.c/b)},
f7:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.fY.prototype={
cc:function(a){var u=V.lk(a,this.c,this.b)
return u},
gt:function(){var u=this.y
if(u==null){u=D.O()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.I(a)},
sdr:function(a,b){},
sd8:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cc(t)}u=new D.J("maximumLocation",u,this.b,this,[P.q])
u.b=!0
this.K(u)}},
sda:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cc(t)}u=new D.J("minimumLocation",u,this.c,this,[P.q])
u.b=!0
this.K(u)}},
sa5:function(a,b){var u
b=this.cc(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.J("location",u,b,this,[P.q])
u.b=!0
this.K(u)}},
sd9:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.J("maximumVelocity",u,a,this,[P.q])
u.b=!0
this.K(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.J("velocity",u,a,this,[P.q])
u.b=!0
this.K(u)}},
scT:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.J("dampening",u,a,this,[P.q])
u.b=!0
this.K(u)}},
az:function(a,b){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa5(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.dD.prototype={
gt:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
aV:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cC.prototype={
gt:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u},
K:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.I(a)},
af:function(){return this.K(null)},
hh:function(a,b){var u,t,s,r,q,p,o,n
u=U.aj
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gb0(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.n(s,r)
if(n.a==null)n.san(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.K(u)},
iH:function(a,b){var u,t,s
u=U.aj
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gb0();t.E();)t.gM(t).gt().O(0,s)
u=new D.bL(a,b,this,[u])
u.b=!0
this.K(u)},
aV:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aw(u,u.length,0,[H.u(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.aV(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.c6():s
u=this.e
if(u!=null)u.ax(0)}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa4:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ee.prototype={
gt:function(){var u=this.y
if(u==null){u=D.O()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.I(a)},
sfz:function(a){var u
a=V.lk(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.N().a)){this.a=a
u=new D.J("yaw",u,a,this,[P.q])
u.b=!0
this.K(u)}},
sfg:function(a,b){var u
b=V.lk(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.N().a)){this.b=b
u=new D.J("pitch",u,b,this,[P.q])
u.b=!0
this.K(u)}},
sfk:function(a){var u
a=V.lk(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
u=new D.J("roll",u,a,this,[P.q])
u.b=!0
this.K(u)}},
aV:function(a,b,c){var u,t
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfz(this.a+this.d*b.y)
this.sfg(0,this.b+this.e*b.y)
this.sfk(this.c+this.f*b.y)
this.x=V.mp(this.c).v(0,V.mo(this.b)).v(0,V.mn(this.a))
u=this.y
if(u!=null)u.ax(0)}return this.x},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ee))return!1
u=this.a
t=b.a
s=$.N().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"], ["+V.R(this.d,3,0)+", "+V.R(this.e,3,0)+", "+V.R(this.f,3,0)+"]"}}
U.eC.prototype={
gt:function(){var u=this.cy
if(u==null){u=D.O()
this.cy=u}return u},
K:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.I(a)},
af:function(){return this.K(null)},
bi:function(a){if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcn())
this.a.c.gf9().h(0,this.gcp())
this.a.c.gc3().h(0,this.gcr())
return!0},
co:function(a){H.e(a,"$iz")
if(!J.a_(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$ibs")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.G(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.W(t.a,t.b).v(0,2).w(0,u.gai())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.W(s.a,s.b).v(0,2).w(0,u.gai())
s=this.b
q=r.a
if(typeof q!=="number")return q.W()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
this.b.sY(0)
t=t.u(0,a.z)
this.Q=new V.W(t.a,t.b).v(0,2).w(0,u.gai())}this.af()},
cs:function(a){var u,t,s
H.e(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.G(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.F(s)
u.sY(t*10*s)
this.af()}},
aV:function(a,b,c){var u,t,s
u=this.ch
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.ch=t
s=b.y
this.b.az(0,s)
this.cx=V.mp(this.b.d)}return this.cx},
$iaj:1}
U.eD.prototype={
gt:function(){var u=this.fx
if(u==null){u=D.O()
this.fx=u}return u},
K:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.I(a)},
af:function(){return this.K(null)},
bi:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcn())
this.a.c.gf9().h(0,this.gcp())
this.a.c.gc3().h(0,this.gcr())
u=this.a.d
t=u.f
if(t==null){t=D.O()
u.f=t
u=t}else u=t
u.h(0,this.ghV())
u=this.a.d
t=u.d
if(t==null){t=D.O()
u.d=t
u=t}else u=t
u.h(0,this.ghX())
u=this.a.e
t=u.b
if(t==null){t=D.O()
u.b=t
u=t}else u=t
u.h(0,this.gjw())
u=this.a.e
t=u.d
if(t==null){t=D.O()
u.d=t
u=t}else u=t
u.h(0,this.gju())
u=this.a.e
t=u.c
if(t==null){t=D.O()
u.c=t
u=t}else u=t
u.h(0,this.gjs())
return!0},
aC:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.W(u,t)},
co:function(a){a=H.l(H.e(a,"$iz"),"$ibs")
if(!J.a_(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$ibs")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.aC(new V.W(t.a,t.b).v(0,2).w(0,u.gai()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aC(new V.W(s.a,s.b).v(0,2).w(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa5(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.aC(new V.W(t.a,t.b).v(0,2).w(0,u.gai()))}this.af()},
cs:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
this.af()}},
hW:function(a){if(H.l(H.e(a,"$iz"),"$idY").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hY:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$ibs")
if(!J.a_(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aC(new V.W(s.a,s.b).v(0,2).w(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa5(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.aC(new V.W(t.a,t.b).v(0,2).w(0,u.gai()))
this.af()},
jx:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jv:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$iew")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.aC(new V.W(t.a,t.b).v(0,2).w(0,u.gai()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aC(new V.W(s.a,s.b).v(0,2).w(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa5(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.aC(new V.W(t.a,t.b).v(0,2).w(0,u.gai()))}this.af()},
jt:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
this.af()}},
aV:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.dy=t
s=b.y
this.c.az(0,s)
this.b.az(0,s)
this.fr=V.mn(this.b.d).v(0,V.mo(this.c.d))}return this.fr},
$iaj:1}
U.eE.prototype={
gt:function(){var u=this.r
if(u==null){u=D.O()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.I(a)},
bi:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.O()
u.e=t
u=t}else u=t
t=this.gi_()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.O()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
i0:function(a){var u,t,s,r
H.e(a,"$iz")
if(!J.a_(this.b,this.a.b.c))return
H.l(a,"$icJ")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.J("zoom",u,r,this,[P.q])
u.b=!0
this.K(u)}},
aV:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.ba(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaj:1}
M.dC.prototype={
gt:function(){var u=this.f
if(u==null){u=D.O()
this.f=u}return u},
a3:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.I(a)},
bc:function(){return this.a3(null)},
iL:function(a,b){var u,t,s,r,q,p,o,n
u=M.aG
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.n(s,r)
if(n.a==null)n.san(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.a3(u)},
iN:function(a,b){var u,t,s
u=M.aG
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.ga2();t.E();)t.gM(t).gt().O(0,s)
u=new D.bL(a,b,this,[u])
u.b=!0
this.a3(u)},
aj:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
if(t!=null)t.aj(a)}this.e=!1},
$ai:function(){return[M.aG]},
$aa4:function(){return[M.aG]},
$iaG:1}
M.dE.prototype={
gt:function(){var u=this.f
if(u==null){u=D.O()
this.f=u}return u},
a3:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.I(a)},
bc:function(){return this.a3(null)},
sb5:function(a){var u,t
if(a==null)a=new X.hw()
u=this.a
if(u!==a){if(u!=null)u.gt().O(0,this.ga2())
t=this.a
this.a=a
a.gt().h(0,this.ga2())
u=new D.J("camera",t,this.a,this,[X.bY])
u.b=!0
this.a3(u)}},
sbt:function(a,b){var u,t
if(b==null)b=X.mg(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gt().O(0,this.ga2())
t=this.b
this.b=b
b.gt().h(0,this.ga2())
u=new D.J("target",t,this.b,this,[X.cU])
u.b=!0
this.a3(u)}},
sb9:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().O(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga2())
u=new D.J("technique",t,this.c,this,[O.bP])
u.b=!0
this.a3(u)}},
aj:function(a){a.de(this.c)
this.b.a7(a)
this.a.a7(a)
this.d.az(0,a)
this.d.aj(a)
this.a.ay(a)
this.b.ay(a)
a.dd()},
$iaG:1}
M.dJ.prototype={
a3:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.I(a)},
bc:function(){return this.a3(null)},
ia:function(a,b){var u,t,s,r,q,p,o,n
u=E.ar
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c2()
n.san(null)
n.sb1(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.san(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.a3(u)},
ic:function(a,b){var u,t,s
u=E.ar
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.ga2();t.E();)t.gM(t).gt().O(0,s)
u=new D.bL(a,b,this,[u])
u.b=!0
this.a3(u)},
sb5:function(a){var u,t
if(a==null)a=X.lC(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gt().O(0,this.ga2())
t=this.a
this.a=a
a.gt().h(0,this.ga2())
u=new D.J("camera",t,this.a,this,[X.bY])
u.b=!0
this.a3(u)}},
sbt:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gt().O(0,this.ga2())
t=this.b
this.b=b
b.gt().h(0,this.ga2())
u=new D.J("target",t,this.b,this,[X.cU])
u.b=!0
this.a3(u)}},
sb9:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().O(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga2())
u=new D.J("technique",t,this.c,this,[O.bP])
u.b=!0
this.a3(u)}},
gt:function(){var u=this.x
if(u==null){u=D.O()
this.x=u}return u},
aj:function(a){var u
a.de(this.c)
this.b.a7(a)
this.a.a7(a)
u=this.c
if(u!=null)u.az(0,a)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.az(0,a)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aj(a)
this.a.toString
a.cy.aT()
a.db.aT()
this.b.ay(a)
a.dd()},
shv:function(a,b){this.d=H.k(b,"$ia4",[E.ar],"$aa4")},
$iaG:1}
M.aG.prototype={}
A.dy.prototype={}
A.fM.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ky:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.eC(r.a,r.c)}},
ez:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.eA(r.a,r.c)}}}
A.e_.prototype={
h0:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.am("")
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
a6.jF(u)
a6.jM(u)
a6.jG(u)
a6.jU(u)
a6.jV(u)
a6.jO(u)
a6.jZ(u)
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
u=new P.am("")
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
q.jJ(u)
q.jE(u)
q.jH(u)
q.jK(u)
q.jS(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jQ(u)
q.jR(u)}q.jN(u)
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
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jI(u)
q.jP(u)
q.jT(u)
q.jW(u)
q.jX(u)
q.jY(u)
q.jL(u)}m=u.a+="// === Main ===\n"
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
j=H.d([],[P.f])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.f6(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaB")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaB")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaB")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaB")
if(a6.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$id_")
if(a6.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaB")
if(a6.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaB")
this.shr(H.d([],[A.aB]))
t=a6.aH
if(t>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(g,"$iaB"))}}t=a6.a
if(t!==C.d){this.r2=H.l(this.y.q(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.l(this.y.q(0,"emissionTxt"),"$ias")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iQ")
break
case C.i:this.ry=H.l(this.y.q(0,"emissionTxt"),"$ian")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iQ")
break}}t=a6.b
if(t!==C.d){this.x2=H.l(this.y.q(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.l(this.y.q(0,"ambientTxt"),"$ias")
this.aH=H.l(this.y.q(0,"nullAmbientTxt"),"$iQ")
break
case C.i:this.y2=H.l(this.y.q(0,"ambientTxt"),"$ian")
this.aH=H.l(this.y.q(0,"nullAmbientTxt"),"$iQ")
break}}t=a6.c
if(t!==C.d){this.av=H.l(this.y.q(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.bJ=H.l(this.y.q(0,"diffuseTxt"),"$ias")
this.bK=H.l(this.y.q(0,"nullDiffuseTxt"),"$iQ")
break
case C.i:this.eD=H.l(this.y.q(0,"diffuseTxt"),"$ian")
this.bK=H.l(this.y.q(0,"nullDiffuseTxt"),"$iQ")
break}}t=a6.d
if(t!==C.d){this.bL=H.l(this.y.q(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.eE=H.l(this.y.q(0,"invDiffuseTxt"),"$ias")
this.bM=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iQ")
break
case C.i:this.eF=H.l(this.y.q(0,"invDiffuseTxt"),"$ian")
this.bM=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iQ")
break}}t=a6.e
if(t!==C.d){this.bP=H.l(this.y.q(0,"shininess"),"$ia2")
this.bN=H.l(this.y.q(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.eG=H.l(this.y.q(0,"specularTxt"),"$ias")
this.bO=H.l(this.y.q(0,"nullSpecularTxt"),"$iQ")
break
case C.i:this.eH=H.l(this.y.q(0,"specularTxt"),"$ian")
this.bO=H.l(this.y.q(0,"nullSpecularTxt"),"$iQ")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.h:this.eI=H.l(this.y.q(0,"bumpTxt"),"$ias")
this.bQ=H.l(this.y.q(0,"nullBumpTxt"),"$iQ")
break
case C.i:this.eJ=H.l(this.y.q(0,"bumpTxt"),"$ian")
this.bQ=H.l(this.y.q(0,"nullBumpTxt"),"$iQ")
break}if(a6.dy){this.eK=H.l(this.y.q(0,"envSampler"),"$ian")
this.eL=H.l(this.y.q(0,"nullEnvTxt"),"$iQ")
t=a6.r
if(t!==C.d){this.bR=H.l(this.y.q(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.eM=H.l(this.y.q(0,"reflectTxt"),"$ias")
this.bS=H.l(this.y.q(0,"nullReflectTxt"),"$iQ")
break
case C.i:this.eN=H.l(this.y.q(0,"reflectTxt"),"$ian")
this.bS=H.l(this.y.q(0,"nullReflectTxt"),"$iQ")
break}}t=a6.x
if(t!==C.d){this.bT=H.l(this.y.q(0,"refraction"),"$ia2")
this.bU=H.l(this.y.q(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:this.eO=H.l(this.y.q(0,"refractTxt"),"$ias")
this.bV=H.l(this.y.q(0,"nullRefractTxt"),"$iQ")
break
case C.i:this.eP=H.l(this.y.q(0,"refractTxt"),"$ian")
this.bV=H.l(this.y.q(0,"nullRefractTxt"),"$iQ")
break}}}t=a6.y
if(t!==C.d){this.bW=H.l(this.y.q(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.j:break
case C.h:this.eQ=H.l(this.y.q(0,"alphaTxt"),"$ias")
this.bX=H.l(this.y.q(0,"nullAlphaTxt"),"$iQ")
break
case C.i:this.eR=H.l(this.y.q(0,"alphaTxt"),"$ian")
this.bX=H.l(this.y.q(0,"nullAlphaTxt"),"$iQ")
break}}this.shB(H.d([],[A.cZ]))
this.siU(H.d([],[A.d0]))
this.sjl(H.d([],[A.d1]))
this.sjz(H.d([],[A.d2]))
this.sjA(H.d([],[A.d3]))
this.sjB(H.d([],[A.d4]))
if(a6.k2){t=a6.z
if(t>0){this.eS=H.e(this.y.q(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iP")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iP")
s=this.cW;(s&&C.a).h(s,new A.cZ(h,g,f))}}t=a6.Q
if(t>0){this.eT=H.e(this.y.q(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iP")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iP")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iP")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$ia2")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia2")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia2")
s=this.cX;(s&&C.a).h(s,new A.d0(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eU=H.e(this.y.q(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iP")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iP")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iP")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iP")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia2")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia2")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia2")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia2")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia2")
s=this.cY;(s&&C.a).h(s,new A.d1(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eV=H.e(this.y.q(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iP")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iP")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iP")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iP")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iP")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iQ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ias")
s=this.cZ;(s&&C.a).h(s,new A.d2(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eW=H.e(this.y.q(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iP")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iP")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$id_")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iP")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iQ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia2")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia2")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia2")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ian")
s=this.d_;(s&&C.a).h(s,new A.d3(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eX=H.e(this.y.q(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iP")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iP")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iP")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iP")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iP")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iQ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia2")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia2")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$ias")
s=this.d0;(s&&C.a).h(s,new A.d4(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
at:function(a,b,c){if(c==null||!c.d)C.b.T(b.a,b.d,1)
else{a.fQ(c)
C.b.T(b.a,b.d,0)}},
ao:function(a,b,c){C.b.T(b.a,b.d,1)},
shr:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
shB:function(a){this.cW=H.k(a,"$ib",[A.cZ],"$ab")},
siU:function(a){this.cX=H.k(a,"$ib",[A.d0],"$ab")},
sjl:function(a){this.cY=H.k(a,"$ib",[A.d1],"$ab")},
sjz:function(a){this.cZ=H.k(a,"$ib",[A.d2],"$ab")},
sjA:function(a){this.d_=H.k(a,"$ib",[A.d3],"$ab")},
sjB:function(a){this.d0=H.k(a,"$ib",[A.d4],"$ab")}}
A.hU.prototype={
jF:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aH+"];\n"
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
jM:function(a){var u
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
jG:function(a){var u
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
jU:function(a){var u,t
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
jV:function(a){var u,t
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
jO:function(a){var u
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
jZ:function(a){var u
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
aN:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aB(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jJ:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aN(a,u,"emission")
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
jE:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aN(a,u,"ambient")
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
jH:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aN(a,u,"diffuse")
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
jK:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aN(a,u,"invDiffuse")
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
jS:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aN(a,u,"specular")
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
jN:function(a){var u,t
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
jQ:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aN(a,u,"reflect")
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
jR:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aN(a,u,"refract")
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
jI:function(a){var u,t
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
jP:function(a){var u,t
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
jT:function(a){var u,t
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
jW:function(a){var u,t,s
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
jX:function(a){var u,t,s
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
jY:function(a){var u,t,s
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
jL:function(a){var u
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
A.cZ.prototype={}
A.d2.prototype={}
A.d0.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.cR.prototype={
dA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f6:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dQ(b,35633)
this.f=this.dQ(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.el(u,t,this.e)
C.b.el(u,this.r,this.f)
C.b.kQ(u,this.r)
if(!H.lQ(C.b.c7(u,this.r,35714))){s=C.b.fF(u,this.r)
C.b.kp(u,this.r)
H.t(P.w("Failed to link shader: "+H.m(s)))}this.jg()
this.ji()},
a7:function(a){C.b.dn(a.a,this.r)
this.x.ky()},
dQ:function(a,b){var u,t,s
u=this.a
t=C.b.kn(u,b)
C.b.fS(u,t,a)
C.b.kh(u,t)
if(!H.lQ(C.b.fH(u,t,35713))){s=C.b.fG(u,t)
C.b.kq(u,t)
throw H.c(P.w("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
jg:function(){var u,t,s,r,q,p
u=H.d([],[A.dy])
t=this.a
s=H.aa(C.b.c7(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.fA(t,this.r,r)
p=C.b.fC(t,this.r,q.name)
C.a.h(u,new A.dy(t,q.name,p))}this.x=new A.fM(u)},
ji:function(){var u,t,s,r,q,p
u=H.d([],[A.ex])
t=this.a
s=H.aa(C.b.c7(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.fB(t,this.r,r)
p=C.b.fI(t,this.r,q.name)
C.a.h(u,this.ko(q.type,q.size,q.name,p))}this.y=new A.jh(u)},
aZ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.Q(u,t,b,c)
else return A.lE(u,t,b,a,c)},
hy:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.as(u,t,b,c)
else return A.lE(u,t,b,a,c)},
hz:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.lE(u,t,b,a,c)},
bE:function(a,b){return new P.eQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
ko:function(a,b,c,d){switch(a){case 5120:return this.aZ(b,c,d)
case 5121:return this.aZ(b,c,d)
case 5122:return this.aZ(b,c,d)
case 5123:return this.aZ(b,c,d)
case 5124:return this.aZ(b,c,d)
case 5125:return this.aZ(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.jc(this.a,this.r,c,d)
case 35665:return new A.P(this.a,this.r,c,d)
case 35666:return new A.jf(this.a,this.r,c,d)
case 35667:return new A.jd(this.a,this.r,c,d)
case 35668:return new A.je(this.a,this.r,c,d)
case 35669:return new A.jg(this.a,this.r,c,d)
case 35674:return new A.ji(this.a,this.r,c,d)
case 35675:return new A.d_(this.a,this.r,c,d)
case 35676:return new A.aB(this.a,this.r,c,d)
case 35678:return this.hy(b,c,d)
case 35680:return this.hz(b,c,d)
case 35670:throw H.c(this.bE("BOOL",c))
case 35671:throw H.c(this.bE("BOOL_VEC2",c))
case 35672:throw H.c(this.bE("BOOL_VEC3",c))
case 35673:throw H.c(this.bE("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c1.prototype={
i:function(a){return this.b}}
A.ei.prototype={}
A.ex.prototype={}
A.jh.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.U()},
kG:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
U:function(){return this.kG("\n")}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.je.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjC:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ji.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.d_.prototype={
as:function(a){var u=new Float32Array(H.cf(H.k(a,"$ib",[P.q],"$ab")))
C.b.fs(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aB.prototype={
as:function(a){var u=new Float32Array(H.cf(H.k(a,"$ib",[P.q],"$ab")))
C.b.ft(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.as.prototype={
fQ:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.an.prototype={
fR:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kD.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.d7(u.b,b).d7(u.d.d7(u.c,b),c)
a.sa5(0,new V.Z(t.a,t.b,t.c))
a.sfn(t.w(0,Math.sqrt(t.G(t))))
u=1-b
s=1-c
a.sem(new V.az(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.kO.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:6}
F.kQ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.F(q)
t=-t*q
p=s*q
a.sa5(0,new V.Z(t,p,r))
p=new V.K(t,p,r)
a.sfn(p.w(0,Math.sqrt(p.G(p))))
a.sem(new V.az(1-c,2+c,-1,-1))},
$S:5}
F.kR.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:17}
F.kS.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:17}
F.lg.prototype={
$2:function(a,b){return 0},
$S:6}
F.lh.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.F(u)
t=a.f
s=new V.K(t.a,t.b,t.c)
u=s.w(0,Math.sqrt(s.G(s))).v(0,this.b+u)
a.sa5(0,new V.Z(u.a,u.b,u.c))},
$S:5}
F.li.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kZ.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.kP.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.m0(t.$1(u),s)
s=J.nQ(J.m0(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.K(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.G(s)))
t=$.mQ
if(t==null){t=new V.K(1,0,0)
$.mQ=t
p=t}else p=t
t=q.aQ(!J.a_(q,p)?V.mU():p)
o=t.w(0,Math.sqrt(t.G(t)))
t=o.aQ(q)
p=t.w(0,Math.sqrt(t.G(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
a.sa5(0,J.nP(r,new V.Z(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.ab.prototype={
bl:function(){if(!this.gbm()){C.a.O(this.a.a.d.b,this)
this.a.a.a8()}this.cA()
this.cB()
this.j0()},
cF:function(a){this.a=a
C.a.h(a.d.b,this)},
cG:function(a){this.b=a
C.a.h(a.d.c,this)},
jf:function(a){this.c=a
C.a.h(a.d.d,this)},
cA:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
cB:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
j0:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gbm:function(){return this.a==null||this.b==null||this.c==null},
hq:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d6()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.f7())return
return q.w(0,Math.sqrt(q.G(q)))},
hu:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.G(u)))
u=r.u(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.aQ(u.w(0,Math.sqrt(u.G(u))))
return u.w(0,Math.sqrt(u.G(u)))},
cP:function(){if(this.d!=null)return!0
var u=this.hq()
if(u==null){u=this.hu()
if(u==null)return!1}this.d=u
this.a.a.a8()
return!0},
hp:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d6()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.f7())return
return q.w(0,Math.sqrt(q.G(q)))},
ht:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.N().a){u=m.u(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.G(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.u(0,p).v(0,g).p(0,p).u(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.G(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.G(u)))
u=f.aQ(h)
u=u.w(0,Math.sqrt(u.G(u))).aQ(f)
h=u.w(0,Math.sqrt(u.G(u)))}return h},
cN:function(){if(this.e!=null)return!0
var u=this.hp()
if(u==null){u=this.ht()
if(u==null)return!1}this.e=u
this.a.a.a8()
return!0},
gkg:function(a){if(J.a_(this.a,this.b))return!0
if(J.a_(this.b,this.c))return!0
if(J.a_(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var u,t
if(this.gbm())return a+"disposed"
u=a+C.c.ar(J.av(this.a.e),0)+", "+C.c.ar(J.av(this.b.e),0)+", "+C.c.ar(J.av(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
U:function(){return this.H("")}}
F.hk.prototype={}
F.iH.prototype={
bo:function(a,b,c){var u,t
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
F.br.prototype={
bl:function(){if(!this.gbm()){C.a.O(this.a.a.c.b,this)
this.a.a.a8()}this.cA()
this.cB()},
cF:function(a){this.a=a
C.a.h(a.c.b,this)},
cG:function(a){this.b=a
C.a.h(a.c.c,this)},
cA:function(){var u=this.a
if(u!=null){C.a.O(u.c.b,this)
this.a=null}},
cB:function(){var u=this.b
if(u!=null){C.a.O(u.c.c,this)
this.b=null}},
gbm:function(){return this.a==null||this.b==null},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){if(this.gbm())return a+"disposed"
return a+C.c.ar(J.av(this.a.e),0)+", "+C.c.ar(J.av(this.b.e),0)},
U:function(){return this.H("")}}
F.hF.prototype={}
F.ja.prototype={
bo:function(a,b,c){var u,t
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
F.bO.prototype={
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ar(J.av(u.e),0)},
U:function(){return this.H("")}}
F.eg.prototype={
gt:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u},
bp:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.ki())}this.a.D()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bO()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.I(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.oh(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cz(k,j,h)}u=this.e
if(u!=null)u.ax(0)},
au:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.au()||!1
if(!this.a.au())t=!1
u=this.e
if(u!=null)u.ax(0)
return t},
kT:function(a,b){var u,t,s,r,q,p,o
P.aC("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.aC("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
P.aC("FLAG 3\n")
for(u=[F.ag];t.length!==0;){s=C.a.gkC(t)
C.a.lb(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.C)(t),++p){o=t[p]
if(o!=null&&a.bo(0,s,o)){C.a.h(r,o)
C.a.O(t,o)}}if(r.length>1)b.bp(r)}}P.aC("FLAG 4\n")
this.a.D()
P.aC("FLAG 5\n")
this.c.di()
P.aC("FLAG 6\n")
this.d.di()
P.aC("FLAG 7\n")
this.b.lc()
P.aC("FLAG 8\n")
this.c.dj(new F.ja())
P.aC("FLAG 9\n")
this.d.dj(new F.iH())
P.aC("FLAG 10\n")
u=this.e
if(u!=null)u.ax(0)
P.aC("FLAG 11\n")},
k7:function(a){this.kT(new F.jC(),new F.ia())},
cH:function(){return this.k7(null)},
er:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b1()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.by().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.bz().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.ds().a)!==0)++r
if((s&$.dt().a)!==0)++r
if((s&$.cp().a)!==0)++r
if((s&$.bw().a)!==0)++r
q=a1.gdw(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dA])
for(m=0,l=0;l<r;++l){k=a1.kb(l)
j=k.gdw(k)
C.a.n(n,l,new Z.dA(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kR(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aF(t,34962,e)
C.b.eq(t,34962,new Float32Array(H.cf(o)),35044)
C.b.aF(t,34962,null)
d=new Z.ct(new Z.eG(34962,e),n,a1)
d.shN(H.d([],[Z.bJ]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.lH(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bJ(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.lH(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bJ(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.D()
C.a.h(c,b.e)}a=Z.lH(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bJ(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.H("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.H("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.H("   "))}return C.a.m(u,"\n")},
b7:function(a){var u=this.e
if(u!=null)u.I(a)},
a8:function(){return this.b7(null)},
$iq4:1}
F.iA.prototype={
eg:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ag],"$ab")
u=H.d([],[F.ab])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.h(a,p)
p=a[p]
if(q>=o)return H.h(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cz(s,p,o))}}return u},
k5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ag],"$ab")
u=H.d([],[F.ab])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cz(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cz(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
dj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bo(0,p,n)){p.bl()
break}}}}},
di:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gkg(s)
if(t)s.bl()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cP())s=!1
return s},
cO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cN())s=!1
return s},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
U:function(){return this.H("")},
shF:function(a){this.b=H.k(a,"$ib",[F.ab],"$ab")}}
F.iB.prototype={
gl:function(a){return this.b.length},
dj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bo(0,p,n)){p.bl()
break}}}}},
di:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.a_(s.a,s.b)
if(t)s.bl()}},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.d([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].H(a+(""+s+". ")))}return C.a.m(u,"\n")},
U:function(){return this.H("")},
shR:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")}}
F.iC.prototype={
gl:function(a){return this.b.length},
lc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.O(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.a.O(s.b.b,t)
t.a=null}}}},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
U:function(){return this.H("")},
scv:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
F.ag.prototype={
cS:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.eF(this.cx,s,p,u,t,r,q,a,o)},
ki:function(){return this.cS(null)},
sa5:function(a,b){var u
if(!J.a_(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a8()}},
sfn:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a8()}},
sem:function(a){var u
if(!J.a_(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a8()}},
kR:function(a){var u,t
if(a.B(0,$.b1())){u=this.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.by())){u=this.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.bx())){u=this.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.bz())){u=this.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.B(0,$.bA())){u=this.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.ds())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.dt())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.B(0,$.cp()))return H.d([this.ch],[P.q])
else if(a.B(0,$.bw())){u=this.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cP:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d6()
this.d.P(0,new F.jH(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.a8()
u=this.a.e
if(u!=null)u.ax(0)}return!0},
cN:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d6()
this.d.P(0,new F.jG(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.a8()
u=this.a.e
if(u!=null)u.ax(0)}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var u,t,s
u=H.d([],[P.f])
C.a.h(u,C.c.ar(J.av(this.e),0))
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
s=C.a.m(u,", ")
return a+"{"+s+"}"},
U:function(){return this.H("")}}
F.jH.prototype={
$1:function(a){var u,t
H.e(a,"$iab")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jG.prototype={
$1:function(a){var u,t
H.e(a,"$iab")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jx.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a8()
return!0},
eh:function(a,b,c,d,e,f,g,h,i){var u=F.eF(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bG:function(a,b,c,d,e,f){return this.eh(a,null,b,c,null,d,e,f,0)},
k6:function(a,b,c,d,e,f){return this.eh(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cP()
return!0},
cO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cN()
return!0},
kf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
this.D()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
U:function(){return this.H("")},
sjD:function(a){this.c=H.k(a,"$ib",[F.ag],"$ab")}}
F.jy.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.h(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.h(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
P:function(a,b){H.n(b,{func:1,ret:-1,args:[F.ab]})
C.a.P(this.b,b)
C.a.P(this.c,new F.jz(this,b))
C.a.P(this.d,new F.jA(this,b))},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
U:function(){return this.H("")},
shG:function(a){this.b=H.k(a,"$ib",[F.ab],"$ab")},
shH:function(a){this.c=H.k(a,"$ib",[F.ab],"$ab")},
shI:function(a){this.d=H.k(a,"$ib",[F.ab],"$ab")}}
F.jz.prototype={
$1:function(a){H.e(a,"$iab")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:7}
F.jA.prototype={
$1:function(a){var u
H.e(a,"$iab")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:7}
F.jB.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
U:function(){return this.H("")},
shS:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")},
shT:function(a){this.c=H.k(a,"$ib",[F.br],"$ab")}}
F.jD.prototype={}
F.jC.prototype={
bo:function(a,b,c){return J.a_(b.f,c.f)}}
F.jE.prototype={}
F.ia.prototype={
bp:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[F.ag],"$ab")
u=V.d6()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.G(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a_(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}return}}
F.jF.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
U:function(){return this.H("")},
scv:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
O.e0.prototype={
gt:function(){var u=this.dy
if(u==null){u=D.O()
this.dy=u}return u},
Z:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.I(a)},
bd:function(){return this.Z(null)},
e6:function(a){H.e(a,"$iz")
this.a=null
this.Z(a)},
j6:function(){return this.e6(null)},
i4:function(a,b){var u=V.ax
u=new D.bK(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.Z(u)},
i6:function(a,b){var u=V.ax
u=new D.bL(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.Z(u)},
dN:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.ac(u.e.length+3,4)*4
s=C.f.ac(u.f.length+3,4)*4
r=C.f.ac(u.r.length+3,4)*4
q=C.f.ac(u.x.length+3,4)*4
p=C.f.ac(u.y.length+3,4)*4
o=C.f.ac(u.z.length+3,4)*4
n=C.f.ac(this.e.a.length+3,4)*4
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
a7=$.b1()
if(a0){b=$.by()
a7=new Z.bh(a7.a|b.a)}if(a1){b=$.bx()
a7=new Z.bh(a7.a|b.a)}if(a2){b=$.bz()
a7=new Z.bh(a7.a|b.a)}if(a3){b=$.bA()
a7=new Z.bh(a7.a|b.a)}if(a5){b=$.bw()
a7=new Z.bh(a7.a|b.a)}return new A.hU(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a1:function(a,b){H.k(a,"$ib",[T.cW],"$ab")
if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
C.a.h(a,b)}},
az:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
t.toString
s=$.jw
if(s==null){s=new V.K(0,0,1)
$.jw=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dm(s)}}},
fh:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dN()
t=H.e(a2.fr.j(0,u.av),"$ie_")
if(t==null){t=A.on(u,a2.a)
a2.ej(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bJ
u=a3.e
if(!(u instanceof Z.ct)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.au()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cO()
p.a.cO()
p=p.e
if(p!=null)p.ax(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.kf()
o=o.e
if(o!=null)o.ax(0)}m=a3.d.er(new Z.eH(a2.a),r)
m.aR($.b1()).e=this.a.Q.c
if(u)m.aR($.by()).e=this.a.cx.c
if(q)m.aR($.bx()).e=this.a.ch.c
if(s.rx)m.aR($.bz()).e=this.a.cy.c
if(p)m.aR($.bA()).e=this.a.db.c
if(s.x1)m.aR($.bw()).e=this.a.dx.c
a3.e=m}u=T.cW
l=H.d([],[u])
this.a.a7(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga6(p)
q=q.dy
q.toString
q.as(p.ak(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga6(p)
o=a2.dx
o=p.v(0,o.ga6(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.as(p.ak(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gl9()
o=a2.dx
o=p.v(0,o.ga6(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.as(p.ak(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.as(C.r.ak(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.as(C.r.ak(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.as(C.r.ak(p,!0))}if(s.aH>0){k=this.e.a.length
q=this.a.k4
C.b.T(q.a,q.d,k)
for(q=[P.q],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.h(o,j)
o=o[j]
p.toString
H.e(o,"$iax")
p=p.r1
if(j>=p.length)return H.h(p,j)
p=p[j]
i=new Float32Array(H.cf(H.k(o.ak(0,!0),"$ib",q,"$ab")))
C.b.ft(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.f.d)
q=this.a
p=this.f.d
q.at(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.f.e)
q=this.a
p=this.f.e
q.ao(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.r.d)
q=this.a
p=this.r.d
q.at(q.y1,q.aH,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.r.e)
q=this.a
p=this.r.e
q.ao(q.y2,q.aH,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.av
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.x.d)
q=this.a
p=this.x.d
q.at(q.bJ,q.bK,p)
p=this.a
q=this.x.f
p=p.av
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.x.e)
q=this.a
p=this.x.e
q.ao(q.eD,q.bK,p)
p=this.a
q=this.x.f
p=p.av
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bL
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.y.d)
q=this.a
p=this.y.d
q.at(q.eE,q.bM,p)
p=this.a
q=this.y.f
p=p.bL
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.y.e)
q=this.a
p=this.y.e
q.ao(q.eF,q.bM,p)
p=this.a
q=this.y.f
p=p.bL
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bN
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bP
C.b.R(p.a,p.d,n)
break
case C.h:this.a1(l,this.z.d)
q=this.a
p=this.z.d
q.at(q.eG,q.bO,p)
p=this.a
q=this.z.f
p=p.bN
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bP
C.b.R(q.a,q.d,n)
break
case C.i:this.a1(l,this.z.e)
q=this.a
p=this.z.e
q.ao(q.eH,q.bO,p)
p=this.a
q=this.z.f
p=p.bN
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bP
C.b.R(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eS
C.b.T(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cW
if(g>=o.length)return H.h(o,g)
d=o[g]
o=h.dm(e.a)
n=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.C(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.C(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eT
C.b.T(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cX
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbs(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bw(e.gbs(e))
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gaG(e)
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcI()
n=d.e
C.b.R(n.a,n.d,o)
o=e.gcJ()
n=d.f
C.b.R(n.a,n.d,o)
o=e.gcK()
n=d.r
C.b.R(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eU
C.b.T(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cY
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbs(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcU(e).lC()
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bw(e.gbs(e))
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gaG(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glA()
n=d.f
C.b.R(n.a,n.d,o)
o=e.glz()
n=d.r
C.b.R(n.a,n.d,o)
o=e.gcI()
n=d.x
C.b.R(n.a,n.d,o)
o=e.gcJ()
n=d.y
C.b.R(n.a,n.d,o)
o=e.gcK()
n=d.z
C.b.R(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eV
C.b.T(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
n=this.a.cZ
if(g>=n.length)return H.h(n,g)
d=n[g]
n=e.gbu()
H.k(l,"$ib",o,"$ab")
if(!C.a.a_(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcU(e)
c=d.d
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc3()
c=d.b
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc1(e)
c=d.c
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=h.dm(e.gcU(e))
c=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.C(b.a,b.d,c,n,a)
a=e.gaG(e)
n=d.f
C.b.C(n.a,n.d,a.a,a.b,a.c)
a=e.gbu()
n=a.gf8(a)
if(!n){n=d.x
C.b.T(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.T(b,n,0)
else C.b.T(b,n,a.a)
n=d.x
C.b.T(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eW
C.b.T(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.y,p=q.length,o=[P.q],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
c=this.a.d_
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbu()
H.k(l,"$ib",n,"$ab")
if(!C.a.a_(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.v(0,e.ga6(e))
c=e.ga6(e)
b=$.cO
if(b==null){b=new V.Z(0,0,0)
$.cO=b}b=c.bw(b)
c=d.b
C.b.C(c.a,c.d,b.a,b.b,b.c)
c=$.cO
if(c==null){c=new V.Z(0,0,0)
$.cO=c}c=a0.bw(c)
b=d.c
C.b.C(b.a,b.d,c.a,c.b,c.c)
c=a0.d5(0)
b=d.d
i=new Float32Array(H.cf(H.k(new V.e1(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ak(0,!0),"$ib",o,"$ab")))
C.b.fs(b.a,b.d,!1,i)
b=e.gaG(e)
c=d.e
C.b.C(c.a,c.d,b.a,b.b,b.c)
b=e.gbu()
c=b.gf8(b)
if(!c){c=d.r
C.b.T(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.T(a1,c,0)
else C.b.T(a1,c,b.a)
c=d.r
C.b.T(c.a,c.d,0)}c=e.gcI()
b=d.x
C.b.R(b.a,b.d,c)
c=e.gcJ()
b=d.y
C.b.R(b.a,b.d,c)
c=e.gcK()
b=d.z
C.b.R(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eX
C.b.T(q.a,q.d,k)
q=a2.db
h=q.ga6(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.d0
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbu()
H.k(l,"$ib",u,"$ab")
if(!C.a.a_(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbs(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcU(e)
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc3()
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc1(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bw(e.gbs(e))
n=d.f
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gbu()
n=o.gf8(o)
if(!n){o=d.x
C.b.T(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.T(b,n,0)
else C.b.T(b,n,o.a)
o=d.x
C.b.T(o.a,o.d,0)}o=e.gaG(e)
n=d.y
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glD()
n=d.z
C.b.R(n.a,n.d,o)
o=e.glE()
n=d.Q
C.b.R(n.a,n.d,o)
o=e.gcI()
n=d.ch
C.b.R(n.a,n.d,o)
o=e.gcJ()
n=d.cx
C.b.R(n.a,n.d,o)
o=e.gcK()
n=d.cy
C.b.R(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.h:this.a1(l,this.Q.d)
u=this.a
q=this.Q.d
u.at(u.eI,u.bQ,q)
break
case C.i:this.a1(l,this.Q.e)
u=this.a
q=this.Q.e
u.ao(u.eJ,u.bQ,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga6(q).d5(0)
a2.Q=q}u=u.id
u.toString
u.as(q.ak(0,!0))}if(s.dy){this.a1(l,this.ch)
u=this.a
q=this.ch
u.ao(u.eK,u.eL,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bR
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
break
case C.h:this.a1(l,this.cx.d)
u=this.a
q=this.cx.d
u.at(u.eM,u.bS,q)
q=this.a
u=this.cx.f
q=q.bR
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break
case C.i:this.a1(l,this.cx.e)
u=this.a
q=this.cx.e
u.ao(u.eN,u.bS,q)
q=this.a
u=this.cx.f
q=q.bR
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bU
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bT
C.b.R(q.a,q.d,o)
break
case C.h:this.a1(l,this.cy.d)
u=this.a
q=this.cy.d
u.at(u.eO,u.bV,q)
q=this.a
u=this.cy.f
q=q.bU
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bT
C.b.R(u.a,u.d,o)
break
case C.i:this.a1(l,this.cy.e)
u=this.a
q=this.cy.e
u.ao(u.eP,u.bV,q)
q=this.a
u=this.cy.f
q=q.bU
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bT
C.b.R(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bW
C.b.R(u.a,u.d,p)
break
case C.h:this.a1(l,this.db.d)
u=this.a
p=this.db.d
u.at(u.eQ,u.bX,p)
p=this.a
u=this.db.f
p=p.bW
C.b.R(p.a,p.d,u)
break
case C.i:this.a1(l,this.db.e)
u=this.a
p=this.db.e
u.ao(u.eR,u.bX,p)
p=this.a
u=this.db.f
p=p.bW
C.b.R(p.a,p.d,u)
break}u=a2.a
C.b.bn(u,3042)
C.b.ke(u,770,771)}for(u=a2.a,j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
C.b.bF(u,33984+p.a)
C.b.ah(u,3553,p.b)}}p=a3.e
p.a7(a2)
p.aj(a2)
p.ay(a2)
if(q)C.b.kt(u,3042)
for(j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bF(u,33984+q.a)
C.b.ah(u,3553,null)}}q=this.a
q.toString
C.b.dn(u,null)
q.x.ez()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dN().av},
shs:function(a){this.e=H.k(a,"$ia4",[V.ax],"$aa4")}}
O.hS.prototype={}
O.cG.prototype={
Z:function(a){this.a.Z(H.e(a,"$iz"))},
bd:function(){return this.Z(null)},
aO:function(){},
jd:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gt().O(0,this.gaY())
t=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gaY())
u=new D.J(this.b+".texture2D",t,this.d,this,[T.ep])
u.b=!0
this.a.Z(u)}},
je:function(a){}}
O.hT.prototype={}
O.b9.prototype={
e8:function(a){var u,t
if(!J.a_(this.f,a)){u=this.f
this.f=a
t=new D.J(this.b+".color",u,a,this,[V.a5])
t.b=!0
this.a.Z(t)}},
aO:function(){this.fY()
this.e8(new V.a5(1,1,1))},
saG:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aO()
u=this.a
u.a=null
u.Z(null)}this.e8(b)}}
O.hV.prototype={
jc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.J(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.Z(u)}},
aO:function(){this.cb()
this.jc(1)}}
O.hW.prototype={
cC:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.J(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.Z(u)}},
aO:function(){this.cb()
this.cC(100)}}
O.eh.prototype={
gt:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u},
Z:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.I(a)},
bd:function(){return this.Z(null)},
fh:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Skybox"),"$iei")
if(u==null){t=a.a
u=new A.ei(t,"Skybox")
u.dA(t,"Skybox")
u.f6(0,$.oI,$.oH)
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia2")
u.ch=H.l(u.y.j(0,"ratio"),"$ia2")
u.cx=H.l(u.y.j(0,"boxClr"),"$iP")
u.cy=H.l(u.y.j(0,"boxTxt"),"$ian")
u.db=H.l(u.y.j(0,"viewMat"),"$iaB")
a.ej(u)}this.a=u}if(b.e==null){t=b.d.er(new Z.eH(a.a),$.b1())
t.aR($.b1()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.bF(s,33985)
C.b.ah(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a7(a)
q=this.b
p=r.Q
C.b.R(p.a,p.d,q)
q=r.ch
C.b.R(q.a,q.d,t/s)
s=this.c
r.cy.fR(s)
s=this.d
t=r.cx
C.b.C(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).d5(0)
r=r.db
r.toString
r.as(s.ak(0,!0))
t=b.e
if(t instanceof Z.ct){t.a7(a)
t.aj(a)
t.ay(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.dn(s,null)
t.x.ez()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.bF(s,33984+t.a)
C.b.ah(s,34067,null)}}}
O.bP.prototype={}
T.cW.prototype={}
T.ep.prototype={}
T.iX.prototype={
gt:function(){var u=this.y
if(u==null){u=D.O()
this.y=u}return u}}
T.eq.prototype={
gt:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u}}
T.iY.prototype={
b_:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.p
W.ad(u,"load",H.n(new T.iZ(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
j7:function(a,b,c){var u,t,s,r
b=V.dr(b,2)
u=V.dr(a.width,2)
t=V.dr(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lq(null,null)
s.width=u
s.height=t
r=H.e(C.q.fE(s,"2d"),"$ic_")
r.imageSmoothingEnabled=!1;(r&&C.D).kv(r,a,0,0,s.width,s.height)
return P.px(C.D.hM(r,0,0,s.width,s.height))}}}
T.iZ.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.j7(this.b,u.c,this.c)
s=u.a
C.b.ah(s,34067,this.d)
C.b.l8(s,37440,this.e?1:0)
C.b.lm(s,this.f,0,6408,6408,5121,t)
C.b.ah(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cV()}++u.e},
$S:15}
V.bl.prototype={
aS:function(a,b){return!0},
i:function(a){return"all"},
$iaD:1}
V.aD.prototype={}
V.dZ.prototype={
aS:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aS(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.k(a,"$ib",[V.aD],"$ab")},
$iaD:1}
V.ay.prototype={
aS:function(a,b){return!this.fX(0,b)},
i:function(a){return"!["+this.dz(0)+"]"}}
V.io.prototype={
aS:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c9(this.a)
t=H.c9(this.b)
return u+".."+t},
$iaD:1}
V.iy.prototype={
h2:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aS([P.o,P.T])
for(t=new H.cF(a,a.gl(a),0,[H.ao(a,"y",0)]);t.E();)u.n(0,t.d,!0)
this.sja(u)},
aS:function(a,b){return this.a.bH(0,b)},
i:function(a){var u=this.a
return P.el(u.gad(u),0,null)},
sja:function(a){this.a=H.k(a,"$iE",[P.o,P.T],"$aE")},
$iaD:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cY(this.a.k(0,b))
r.sae(H.d([],[V.aD]))
r.c=!1
C.a.h(this.c,r)
return r},
kB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aS(0,a))return r}return},
i:function(a){return this.b},
sjy:function(a){this.c=H.k(a,"$ib",[V.cY],"$ab")}}
V.ev.prototype={
i:function(a){var u,t
u=H.lW(this.b,"\n","\\n")
t=H.lW(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cX.prototype={
aU:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sj1:function(a){var u=P.f
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.j1.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.sjy(H.d([],[V.cY]))
u.d=null
this.a.n(0,b,u)}return u},
V:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cX(this,a)
t=P.f
u.sj1(new H.aS([t,t]))
this.b.n(0,a,u)}return u},
fq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ev])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.J(a,o)
m=t.kB(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.el(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.el(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ev(j==null?k.b:j,l,o)}++o}}},
sjm:function(a){this.a=H.k(a,"$iE",[P.f,V.cS],"$aE")},
sjr:function(a){this.b=H.k(a,"$iE",[P.f,V.cX],"$aE")}}
V.cY.prototype={
i:function(a){return this.b.b+": "+this.dz(0)}}
X.fR.prototype={
gt:function(){var u=this.fr
if(u==null){u=D.O()
this.fr=u}return u},
am:function(a){var u=this.fr
if(u!=null)u.I(a)},
saA:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.J("width",u,b,this,[P.o])
u.b=!0
this.am(u)}},
saw:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.J("height",u,b,this,[P.o])
u.b=!0
this.am(u)}},
a7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.aa(C.b.c6(u,3379))
p=V.dr(s,2)
o=V.dr(r,2)
q=V.dr(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.ah(u,3553,n)
C.b.aJ(u,3553,10242,33071)
C.b.aJ(u,3553,10243,33071)
C.b.aJ(u,3553,10241,9729)
C.b.aJ(u,3553,10240,9729)
C.b.fm(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.ah(u,3553,null)
m=T.mF(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cV()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cV()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.ah(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.en(u,36161,t)
C.b.le(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.bj(u,36160,t)
C.b.kJ(u,36160,36064,3553,this.z,0)
C.b.kI(u,36160,36096,36161,this.Q)
C.b.ah(u,3553,null)
C.b.en(u,36161,null)
C.b.bj(u,36160,null)}u=a.a
C.b.bj(u,36160,this.y)
C.b.bn(u,2884)
C.b.bn(u,2929)
C.b.ey(u,513)
t=this.dy
s=t.c
a.c=C.e.a9(s*this.a)
r=t.d
a.d=C.e.a9(r*this.b)
l=t.a
k=this.c
j=C.e.a9(l*k)
t=t.b
l=this.d
C.b.fw(u,j,C.e.a9(t*l),C.e.a9(s*k),C.e.a9(r*l))
C.b.ev(u,this.db)
if(this.cy){t=this.cx
C.b.eu(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.es(u,i)},
ay:function(a){C.b.bj(a.a,36160,null)}}
X.bY.prototype={$ibb:1}
X.hr.prototype={
gt:function(){var u=this.x
if(u==null){u=D.O()
this.x=u}return u},
a7:function(a){var u,t,s,r,q,p,o
u=a.a
C.b.bj(u,36160,null)
C.b.bn(u,2884)
C.b.bn(u,2929)
C.b.ey(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.F(t)
p=C.e.a9(q*t)
q=r.b
if(typeof s!=="number")return H.F(s)
o=C.e.a9(q*s)
q=C.e.a9(r.c*t)
a.c=q
r=C.e.a9(r.d*s)
a.d=r
C.b.fw(u,p,o,q,r)
C.b.ev(u,this.c)
r=this.a
C.b.eu(u,r.a,r.b,r.c,r.d)
C.b.es(u,16640)},
ay:function(a){}}
X.hw.prototype={
gt:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
a7:function(a){var u
a.cy.c0(V.c6())
u=V.c6()
a.db.c0(u)},
ay:function(a){a.cy.aT()
a.db.aT()},
$ibb:1,
$ibY:1}
X.e7.prototype={
gt:function(){var u=this.f
if(u==null){u=D.O()
this.f=u}return u},
am:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.I(a)},
hm:function(){return this.am(null)},
a7:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.ba(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.c0(n)
u=$.mu
if(u==null){u=V.mw()
t=V.mT()
s=$.mP
if(s==null){s=new V.K(0,0,-1)
$.mP=s}s=V.mm(u,t,s)
$.mu=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aV(0,a,this)
if(l!=null)m=l.v(0,m)}a.db.c0(m)},
ay:function(a){a.cy.aT()
a.db.aT()},
$ibb:1,
$ibY:1}
X.cU.prototype={}
V.bE.prototype={
bz:function(a){this.b=new P.hu(C.Y)
this.c=null
this.sck(H.d([],[[P.b,W.aI]]))},
S:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aI]))
t=a.split("\n")
for(u=t.length,s=[W.aI],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.I(p)
n=this.b.hx(p,0,p.length)
m=n==null?p:n
C.k.fN(o,H.lW(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaI(this.d),o)}},
fe:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.f],"$ab")
this.sck(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bI()
this.c=t}for(t=t.fq(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.c_(t[r])},
sck:function(a){this.d=H.k(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.lf.prototype={
$1:function(a){H.e(a,"$ibe")
P.aC(C.e.fp(this.a.gkH(),2)+" fps")},
$S:52}
V.h6.prototype={
c_:function(a){switch(a.a){case"Class":this.S(a.b,"#551")
break
case"Comment":this.S(a.b,"#777")
break
case"Id":this.S(a.b,"#111")
break
case"Num":this.S(a.b,"#191")
break
case"Reserved":this.S(a.b,"#119")
break
case"String":this.S(a.b,"#171")
break
case"Symbol":this.S(a.b,"#616")
break
case"Type":this.S(a.b,"#B11")
break
case"Whitespace":this.S(a.b,"#111")
break}},
bI:function(){var u,t,s,r
u=V.j2()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a1("a","z")
C.a.h(t.a,s)
s=V.a1("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a1("0","9")
C.a.h(s.a,t)
t=V.a1("a","z")
C.a.h(s.a,t)
t=V.a1("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a1("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a1("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a1("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a1("0","9")
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
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bl())
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
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bl())
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
s=new V.ay()
r=[V.aD]
s.sae(H.d([],r))
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
s=new V.ay()
s.sae(H.d([],r))
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
s.d=s.a.V("Num")
s=u.k(0,"Float")
s.d=s.a.V("Num")
s=u.k(0,"Sym")
s.d=s.a.V("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.V("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.V("String")
s=u.k(0,"EndComment")
s.d=s.a.V("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.V("Whitespace")
s=u.k(0,"Id")
t=s.a.V("Id")
s.d=t
s=[P.f]
t.aU(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aU(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aU(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hs.prototype={
c_:function(a){switch(a.a){case"Builtin":this.S(a.b,"#411")
break
case"Comment":this.S(a.b,"#777")
break
case"Id":this.S(a.b,"#111")
break
case"Num":this.S(a.b,"#191")
break
case"Preprocess":this.S(a.b,"#737")
break
case"Reserved":this.S(a.b,"#119")
break
case"Symbol":this.S(a.b,"#611")
break
case"Type":this.S(a.b,"#171")
break
case"Whitespace":this.S(a.b,"#111")
break}},
bI:function(){var u,t,s,r
u=V.j2()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a1("a","z")
C.a.h(t.a,s)
s=V.a1("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a1("0","9")
C.a.h(s.a,t)
t=V.a1("a","z")
C.a.h(s.a,t)
t=V.a1("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a1("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a1("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a1("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a1("0","9")
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
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bl())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aD]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.ay()
t.sae(H.d([],r))
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
t.d=t.a.V("Num")
t=u.k(0,"Float")
t.d=t.a.V("Num")
t=u.k(0,"Sym")
t.d=t.a.V("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.V("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.V("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.V("Whitespace")
t=u.k(0,"Id")
s=t.a.V("Id")
t.d=s
t=[P.f]
s.aU(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aU(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aU(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.ht.prototype={
c_:function(a){switch(a.a){case"Attr":this.S(a.b,"#911")
this.S("=","#111")
break
case"Id":this.S(a.b,"#111")
break
case"Other":this.S(a.b,"#111")
break
case"Reserved":this.S(a.b,"#119")
break
case"String":this.S(a.b,"#171")
break
case"Symbol":this.S(a.b,"#616")
break}},
bI:function(){var u,t,s
u=V.j2()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a1("a","z")
C.a.h(t.a,s)
s=V.a1("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a1("0","9")
C.a.h(s.a,t)
t=V.a1("a","z")
C.a.h(s.a,t)
t=V.a1("A","Z")
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bl())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bl())
t=u.k(0,"Other").m(0,"Other")
s=new V.ay()
s.sae(H.d([],[V.aD]))
C.a.h(t.a,s)
t=V.x(new H.v('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a1("a","z")
C.a.h(s.a,t)
t=V.a1("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.V("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.V("String")
t=u.k(0,"Id")
s=t.a.V("Id")
t.d=s
s.aU(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.V("Attr")
s=u.k(0,"Other")
s.d=s.a.V("Other")
return u}}
V.ih.prototype={
fe:function(a,b){H.k(b,"$ib",[P.f],"$ab")
this.sck(H.d([],[[P.b,W.aI]]))
this.S(C.a.m(b,"\n"),"#111")},
c_:function(a){},
bI:function(){return}}
V.il.prototype={
ee:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mL().gdg().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.ec(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m4(this.c).h(0,q)
o=W.ob("radio")
o.checked=s
o.name=u
u=W.p
W.ad(o,"change",H.n(new V.im(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.F(q,o)
n=r.createElement("span")
n.textContent=b
C.G.F(q,n)
J.m4(this.c).h(0,r.createElement("br"))},
aD:function(a,b,c){return this.ee(a,b,c,!1)},
ec:function(a){var u,t,s,r,q
u=P.mL()
t=P.f
s=P.oj(u.gdg(),t,t)
s.n(0,this.a,a)
r=u.fi(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).j3(t,new P.kl([],[]).dq(""),"",q)}}
V.im.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ec(this.d)}},
$S:15}
V.iD.prototype={
h3:function(a,b){var u,t,s,r,q,p,o
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
o=W.p
W.ad(u,"scroll",H.n(new V.iF(s),{func:1,ret:-1,args:[o]}),!1,o)},
ei:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.f],"$ab")
this.jh()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fq(C.a.kP(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.pW(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
C.k.F(t,l)}else{k=P.fs(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.F(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.F(t,o)
break}}C.k.F(this.a,t)},
fD:function(a){var u,t,s,r
u=new V.h6("dart")
u.bz("dart")
t=new V.hs("glsl")
t.bz("glsl")
s=new V.ht("html")
s.bz("html")
r=C.a.kD(H.d([u,t,s],[V.bE]),new V.iG(a))
if(r!=null)return r
u=new V.ih("plain")
u.bz("plain")
return u},
ef:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.f],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dq(r).ab(r,"+")){C.a.n(a7,s,C.c.aB(r,1))
C.a.h(u,1)
t=!0}else if(C.c.ab(r,"-")){C.a.n(a7,s,C.c.aB(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fD(a5)
q.fe(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.fs(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m6(null)
i.href="#"+H.m(m)
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
if(s>=u.length)return H.h(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.x.F(a,r[a0])
C.n.F(e,d)
C.n.F(e,c)
C.n.F(e,a)
C.o.F(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gX(r);a3.E();)C.x.F(c,a3.gM(a3))
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
k_:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.F(this.a,t)
r=C.o.hO(t,-1)
s=H.e((r&&C.n).dW(r,-1),"$ibd").style
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
o=H.e(C.n.dW(r,-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
jh:function(){var u,t,s,r
if(this.b!=null)return
u=V.j2()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.ay()
r=[V.aD]
s.sae(H.d([],r))
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
s=new V.ay()
s.sae(H.d([],r))
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
s=new V.ay()
s.sae(H.d([],r))
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
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bl())
s=u.k(0,"Other").m(0,"Other")
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.V("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.V("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.V("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.V("Link")
s=u.k(0,"Other")
s.d=s.a.V("Other")
this.b=u}}
V.iF.prototype={
$1:function(a){P.mH(C.y,new V.iE(this.a))},
$S:15}
V.iE.prototype={
$0:function(){var u,t,s
u=C.e.a9(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.iG.prototype={
$1:function(a){return H.e(a,"$ibE").a===this.a},
$S:53}
V.l3.prototype={
$0:function(){this.a.saa(0,F.kN(1,null,null,1))},
$S:0}
V.l4.prototype={
$0:function(){this.a.saa(0,F.kN(15,null,new V.l2(),15))},
$S:0}
V.l2.prototype={
$3:function(a,b,c){var u,t,s,r
u=Math.cos(c*4*3.141592653589793+3.141592653589793)
t=Math.cos(b*4*3.141592653589793+3.141592653589793)
s=a.f
s=new V.K(s.a,s.b,s.c)
r=s.w(0,Math.sqrt(s.G(s)))
s=a.f
t=r.v(0,u*0.1+t*0.1)
a.sa5(0,s.p(0,new V.Z(t.a,t.b,t.c)))},
$S:5}
V.l5.prototype={
$0:function(){this.a.saa(0,F.nf(1,!0,!0,1,30,1))},
$S:0}
V.l6.prototype={
$0:function(){this.a.saa(0,F.nf(1,!0,!1,1,30,0))},
$S:0}
V.l7.prototype={
$0:function(){this.a.saa(0,F.ng(!0,!0,25,new V.l1(),50))},
$S:0}
V.l1.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:6}
V.l8.prototype={
$0:function(){this.a.saa(0,F.ns(6,null,1,6))},
$S:0}
V.l9.prototype={
$0:function(){this.a.saa(0,F.ns(10,new V.l0(),1,10))},
$S:0}
V.l0.prototype={
$2:function(a,b){var u,t
u=a-0.5
t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:6}
V.la.prototype={
$0:function(){this.a.saa(0,F.nu(30,1,15,0.5))},
$S:0}
V.lb.prototype={
$0:function(){this.a.saa(0,F.pN(120,1,2,12,0.3,3))},
$S:0}
V.lc.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.ef("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.ef("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:11};(function aliases(){var u=J.a.prototype
u.fU=u.i
u=J.dS.prototype
u.fW=u.i
u=P.i.prototype
u.fV=u.c4
u=W.V.prototype
u.ca=u.ap
u=W.fa.prototype
u.fZ=u.aE
u=O.cG.prototype
u.fY=u.aO
u=O.b9.prototype
u.cb=u.aO
u=V.dZ.prototype
u.fX=u.aS
u.dz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pr","oV",13)
u(P,"ps","oW",13)
u(P,"pt","oX",13)
t(P,"ne","pq",3)
s(W,"pG",4,null,["$4"],["oZ"],27,0)
s(W,"pH",4,null,["$4"],["p_"],27,0)
var m
r(m=E.ar.prototype,"gfc",0,0,null,["$1","$0"],["fd","l_"],1,0)
r(m,"gfa",0,0,null,["$1","$0"],["fb","kX"],1,0)
q(m,"gkV","kW",10)
q(m,"gkY","kZ",10)
r(m=E.eu.prototype,"gdB",0,0,null,["$1","$0"],["dD","dC"],1,0)
p(m,"glg","fj",3)
o(m=X.eB.prototype,"gil","im",14)
o(m,"gi7","i8",14)
o(m,"gie","ig",4)
o(m,"giq","ir",33)
o(m,"gio","ip",33)
o(m,"giu","iv",4)
o(m,"giy","iz",4)
o(m,"gij","ik",4)
o(m,"giw","ix",4)
o(m,"gih","ii",4)
o(m,"giA","iB",37)
o(m,"giC","iD",14)
o(m,"giS","iT",12)
o(m,"giO","iP",12)
o(m,"giQ","iR",12)
r(D.bG.prototype,"gh9",0,0,null,["$1","$0"],["aL","ha"],1,0)
r(m=D.dV.prototype,"ge0",0,0,null,["$1","$0"],["e1","is"],1,0)
o(m,"giE","iF",39)
q(m,"gi1","i2",26)
q(m,"giI","iJ",26)
n(V.W.prototype,"gl","d6",23)
n(V.K.prototype,"gl","d6",23)
r(m=U.cC.prototype,"gb0",0,0,null,["$1","$0"],["K","af"],1,0)
q(m,"ghg","hh",22)
q(m,"giG","iH",22)
r(m=U.eC.prototype,"gb0",0,0,null,["$1","$0"],["K","af"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
r(m=U.eD.prototype,"gb0",0,0,null,["$1","$0"],["K","af"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
o(m,"ghV","hW",2)
o(m,"ghX","hY",2)
o(m,"gjw","jx",2)
o(m,"gju","jv",2)
o(m,"gjs","jt",2)
o(U.eE.prototype,"gi_","i0",2)
r(m=M.dC.prototype,"ga2",0,0,null,["$1","$0"],["a3","bc"],1,0)
q(m,"giK","iL",20)
q(m,"giM","iN",20)
r(M.dE.prototype,"ga2",0,0,null,["$1","$0"],["a3","bc"],1,0)
r(m=M.dJ.prototype,"ga2",0,0,null,["$1","$0"],["a3","bc"],1,0)
q(m,"gi9","ia",10)
q(m,"gib","ic",10)
r(m=O.e0.prototype,"gaY",0,0,null,["$1","$0"],["Z","bd"],1,0)
r(m,"gj5",0,0,null,["$1","$0"],["e6","j6"],1,0)
q(m,"gi3","i4",21)
q(m,"gi5","i6",21)
r(O.cG.prototype,"gaY",0,0,null,["$1","$0"],["Z","bd"],1,0)
r(O.eh.prototype,"gaY",0,0,null,["$1","$0"],["Z","bd"],1,0)
r(X.e7.prototype,"ghl",0,0,null,["$1","$0"],["am","hm"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.ly,J.a,J.aw,P.eY,P.i,H.cF,P.b6,H.c3,H.d5,H.h_,H.ip,H.j7,P.bH,H.cu,H.ff,P.ah,H.hG,H.hI,H.hB,P.fl,P.bj,P.aN,P.eI,P.iO,P.cT,P.iP,P.be,P.ap,P.kC,P.kf,P.cd,P.eX,P.y,P.kt,P.hO,P.c0,P.hv,P.kA,P.ky,P.T,P.aq,P.a7,P.b5,P.ie,P.ek,P.eQ,P.hq,P.bI,P.b,P.E,P.M,P.aA,P.f,P.am,P.ce,P.jn,P.ki,W.h2,W.bS,W.D,W.e5,W.fa,W.ko,W.dK,W.aF,W.ke,W.ft,P.kk,P.fq,P.k9,P.U,O.a4,O.cH,E.fU,E.ar,E.iq,E.eu,Z.eG,Z.eH,Z.ct,Z.bJ,Z.bh,D.fX,D.c2,D.z,X.dB,X.dT,X.hD,X.hL,X.aE,X.i2,X.j3,X.eB,D.bG,D.a9,D.e8,D.ej,D.er,D.es,D.et,V.a5,V.al,V.hg,V.e1,V.ax,V.a6,V.Z,V.az,V.ec,V.W,V.K,U.eC,U.eD,U.eE,M.dE,M.dJ,M.aG,A.dy,A.fM,A.hU,A.cZ,A.d2,A.d0,A.d3,A.d1,A.d4,A.c1,A.ex,A.jh,F.ab,F.hk,F.br,F.hF,F.bO,F.eg,F.iA,F.iB,F.iC,F.ag,F.jx,F.jy,F.jB,F.jD,F.jE,F.jF,O.bP,O.cG,T.iY,V.bl,V.aD,V.dZ,V.io,V.iy,V.cS,V.ev,V.cX,V.j1,X.cU,X.bY,X.hw,X.e7,V.bE,V.il,V.iD])
s(J.a,[J.hA,J.dR,J.dS,J.aR,J.bM,J.bp,H.cK,H.bN,W.j,W.fK,W.bX,W.c_,W.b3,W.b4,W.Y,W.eK,W.h7,W.h8,W.dG,W.eM,W.dI,W.eO,W.ha,W.p,W.eR,W.aQ,W.dN,W.eT,W.bo,W.dX,W.hX,W.eZ,W.f_,W.aT,W.f0,W.f3,W.aU,W.f7,W.ea,W.f9,W.aW,W.fb,W.aX,W.fg,W.aK,W.fj,W.j0,W.aZ,W.fm,W.j5,W.js,W.fu,W.fw,W.fy,W.fA,W.fC,P.b8,P.eV,P.bc,P.f5,P.ik,P.fh,P.bf,P.fo,P.fN,P.eJ,P.dz,P.dL,P.e9,P.ed,P.cb,P.ef,P.eo,P.ey,P.fd])
s(J.dS,[J.ig,J.bR,J.bq])
t(J.lx,J.aR)
s(J.bM,[J.dQ,J.dP])
t(P.hK,P.eY)
s(P.hK,[H.ez,W.jQ,W.at,P.hm])
t(H.v,H.ez)
s(P.i,[H.hd,H.hP,H.d7])
s(H.hd,[H.c5,H.hH])
s(P.b6,[H.hQ,H.jK])
t(H.hR,H.c5)
t(H.h0,H.h_)
s(P.bH,[H.ib,H.hC,H.jl,H.j9,H.fW,H.iw,P.e6,P.aP,P.jm,P.jj,P.cc,P.fZ,P.h5])
s(H.cu,[H.lj,H.iU,H.kV,H.kW,H.kX,P.jM,P.jL,P.jN,P.jO,P.ks,P.kr,P.jX,P.k0,P.jY,P.jZ,P.k_,P.k3,P.k4,P.k2,P.k1,P.iQ,P.iR,P.kK,P.kc,P.kb,P.kd,P.hJ,P.hN,P.kz,P.hb,P.hc,P.jr,P.jo,P.jp,P.jq,P.ku,P.kv,P.kx,P.kw,P.kG,P.kF,P.kH,P.kI,W.he,W.hZ,W.i0,W.iv,W.iN,W.jW,W.i9,W.i8,W.kg,W.kh,W.kq,W.kB,P.km,P.kM,P.hn,P.ho,P.fP,E.ir,E.is,E.it,E.j_,D.hi,D.hj,F.kD,F.kO,F.kQ,F.kR,F.kS,F.lg,F.lh,F.li,F.kZ,F.kP,F.jH,F.jG,F.jz,F.jA,T.iZ,V.lf,V.im,V.iF,V.iE,V.iG,V.l3,V.l4,V.l2,V.l5,V.l6,V.l7,V.l1,V.l8,V.l9,V.l0,V.la,V.lb,V.lc])
s(H.iU,[H.iL,H.cr])
t(P.hM,P.ah)
s(P.hM,[H.aS,W.jP])
t(H.e2,H.bN)
s(H.e2,[H.db,H.dd])
t(H.dc,H.db)
t(H.cL,H.dc)
t(H.de,H.dd)
t(H.e3,H.de)
s(H.e3,[H.i3,H.i4,H.i5,H.i6,H.i7,H.e4,H.cM])
t(P.ka,P.kC)
t(P.k8,P.kf)
t(P.fr,P.hO)
t(P.eA,P.fr)
s(P.c0,[P.fS,P.hf])
t(P.bF,P.iP)
s(P.bF,[P.fT,P.hu,P.jv,P.ju])
t(P.jt,P.hf)
s(P.a7,[P.q,P.o])
s(P.aP,[P.ca,P.hx])
t(P.jS,P.ce)
s(W.j,[W.G,W.hl,W.aV,W.df,W.aY,W.aL,W.dh,W.jJ,W.d8,P.fQ,P.bW])
s(W.G,[W.V,W.bD,W.cx,W.d9])
s(W.V,[W.A,P.r])
s(W.A,[W.dw,W.fL,W.cq,W.bC,W.bZ,W.aI,W.hp,W.dM,W.cD,W.cE,W.dU,W.cI,W.ix,W.bd,W.em,W.en,W.iT,W.cV])
s(W.b3,[W.cv,W.h3,W.h4])
t(W.h1,W.b4)
t(W.cw,W.eK)
t(W.eN,W.eM)
t(W.dH,W.eN)
t(W.eP,W.eO)
t(W.h9,W.eP)
t(W.aJ,W.bX)
t(W.eS,W.eR)
t(W.cA,W.eS)
t(W.eU,W.eT)
t(W.c4,W.eU)
t(W.dO,W.cx)
t(W.bQ,W.p)
s(W.bQ,[W.b7,W.ai,W.b_])
t(W.hY,W.eZ)
t(W.i_,W.f_)
t(W.f1,W.f0)
t(W.i1,W.f1)
t(W.f4,W.f3)
t(W.cN,W.f4)
t(W.f8,W.f7)
t(W.ii,W.f8)
t(W.iu,W.f9)
t(W.dg,W.df)
t(W.iI,W.dg)
t(W.fc,W.fb)
t(W.iJ,W.fc)
t(W.iM,W.fg)
t(W.fk,W.fj)
t(W.iV,W.fk)
t(W.di,W.dh)
t(W.iW,W.di)
t(W.fn,W.fm)
t(W.j4,W.fn)
t(W.jI,W.cI)
t(W.bi,W.ai)
t(W.fv,W.fu)
t(W.jR,W.fv)
t(W.eL,W.dI)
t(W.fx,W.fw)
t(W.k5,W.fx)
t(W.fz,W.fy)
t(W.f2,W.fz)
t(W.fB,W.fA)
t(W.kj,W.fB)
t(W.fD,W.fC)
t(W.kn,W.fD)
t(W.jT,W.jP)
t(W.jU,P.iO)
t(W.lI,W.jU)
t(W.jV,P.cT)
t(W.kp,W.fa)
t(P.kl,P.kk)
t(P.ac,P.k9)
t(P.eW,P.eV)
t(P.hE,P.eW)
t(P.f6,P.f5)
t(P.ic,P.f6)
t(P.cQ,P.r)
t(P.fi,P.fh)
t(P.iS,P.fi)
t(P.fp,P.fo)
t(P.j6,P.fp)
t(P.fO,P.eJ)
t(P.id,P.bW)
t(P.fe,P.fd)
t(P.iK,P.fe)
s(E.fU,[Z.dA,A.cR,T.cW])
s(D.z,[D.bK,D.bL,D.J,X.ij])
s(X.ij,[X.dY,X.bs,X.cJ,X.ew])
s(O.a4,[D.dV,U.cC,M.dC])
s(D.fX,[U.fY,U.aj])
s(U.aj,[U.dD,U.ee])
s(A.cR,[A.e_,A.ei])
s(A.ex,[A.Q,A.jd,A.je,A.jg,A.jb,A.a2,A.jc,A.P,A.jf,A.ji,A.d_,A.aB,A.as,A.an])
t(F.iH,F.hk)
t(F.ja,F.hF)
t(F.jC,F.jD)
t(F.ia,F.jE)
s(O.bP,[O.e0,O.eh])
s(O.cG,[O.hS,O.hT,O.b9])
s(O.b9,[O.hV,O.hW])
s(T.cW,[T.ep,T.eq])
t(T.iX,T.ep)
s(V.dZ,[V.ay,V.cY])
s(X.cU,[X.fR,X.hr])
s(V.bE,[V.h6,V.hs,V.ht,V.ih])
u(H.ez,H.d5)
u(H.db,P.y)
u(H.dc,H.c3)
u(H.dd,P.y)
u(H.de,H.c3)
u(P.eY,P.y)
u(P.fr,P.kt)
u(W.eK,W.h2)
u(W.eM,P.y)
u(W.eN,W.D)
u(W.eO,P.y)
u(W.eP,W.D)
u(W.eR,P.y)
u(W.eS,W.D)
u(W.eT,P.y)
u(W.eU,W.D)
u(W.eZ,P.ah)
u(W.f_,P.ah)
u(W.f0,P.y)
u(W.f1,W.D)
u(W.f3,P.y)
u(W.f4,W.D)
u(W.f7,P.y)
u(W.f8,W.D)
u(W.f9,P.ah)
u(W.df,P.y)
u(W.dg,W.D)
u(W.fb,P.y)
u(W.fc,W.D)
u(W.fg,P.ah)
u(W.fj,P.y)
u(W.fk,W.D)
u(W.dh,P.y)
u(W.di,W.D)
u(W.fm,P.y)
u(W.fn,W.D)
u(W.fu,P.y)
u(W.fv,W.D)
u(W.fw,P.y)
u(W.fx,W.D)
u(W.fy,P.y)
u(W.fz,W.D)
u(W.fA,P.y)
u(W.fB,W.D)
u(W.fC,P.y)
u(W.fD,W.D)
u(P.eV,P.y)
u(P.eW,W.D)
u(P.f5,P.y)
u(P.f6,W.D)
u(P.fh,P.y)
u(P.fi,W.D)
u(P.fo,P.y)
u(P.fp,W.D)
u(P.eJ,P.ah)
u(P.fd,P.y)
u(P.fe,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bC.prototype
C.q=W.bZ.prototype
C.D=W.c_.prototype
C.k=W.aI.prototype
C.U=W.dG.prototype
C.W=W.dM.prototype
C.X=W.dN.prototype
C.z=W.dO.prototype
C.Z=J.a.prototype
C.a=J.aR.prototype
C.a_=J.dP.prototype
C.f=J.dQ.prototype
C.r=J.dR.prototype
C.e=J.bM.prototype
C.c=J.bp.prototype
C.a6=J.bq.prototype
C.G=W.dU.prototype
C.ac=W.cN.prototype
C.M=J.ig.prototype
C.N=W.ea.prototype
C.b=P.cb.prototype
C.x=W.bd.prototype
C.o=W.em.prototype
C.n=W.en.prototype
C.C=J.bR.prototype
C.O=W.bi.prototype
C.P=W.d8.prototype
C.R=new P.fT(!1)
C.Q=new P.fS(C.R)
C.S=new P.ie()
C.T=new P.jv()
C.l=new P.ka()
C.d=new A.c1(0,"ColorSourceType.None")
C.j=new A.c1(1,"ColorSourceType.Solid")
C.h=new A.c1(2,"ColorSourceType.Texture2D")
C.i=new A.c1(3,"ColorSourceType.TextureCube")
C.y=new P.b5(0)
C.V=new P.b5(5e6)
C.Y=new P.hv("element",!0,!1,!1,!1)
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
C.H=H.d(u([127,2047,65535,1114111]),[P.o])
C.t=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a7=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a8=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.d(u([]),[P.f])
C.a9=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.aa=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.L=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.h0(0,{},C.I,[P.f,P.f])
C.m=new P.jt(!1)})();(function staticFields(){$.b2=0
$.cs=null
$.m8=null
$.lM=!1
$.nl=null
$.nc=null
$.nr=null
$.kT=null
$.kY=null
$.lU=null
$.cg=null
$.dm=null
$.dn=null
$.lN=!1
$.a3=C.l
$.bn=null
$.lu=null
$.me=null
$.md=null
$.mr=null
$.mv=null
$.cO=null
$.mA=null
$.mO=null
$.mS=null
$.mQ=null
$.mR=null
$.jw=null
$.mP=null
$.oI="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.oH="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.mu=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q1","nw",function(){return H.nk("_$dart_dartClosure")})
u($,"q2","lY",function(){return H.nk("_$dart_js")})
u($,"q7","nx",function(){return H.bg(H.j8({
toString:function(){return"$receiver$"}}))})
u($,"q8","ny",function(){return H.bg(H.j8({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q9","nz",function(){return H.bg(H.j8(null))})
u($,"qa","nA",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qd","nD",function(){return H.bg(H.j8(void 0))})
u($,"qe","nE",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qc","nC",function(){return H.bg(H.mJ(null))})
u($,"qb","nB",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qg","nG",function(){return H.bg(H.mJ(void 0))})
u($,"qf","nF",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qx","lZ",function(){return P.oU()})
u($,"qD","du",function(){return[]})
u($,"qj","nH",function(){return P.oR()})
u($,"qy","nL",function(){return H.oo(H.cf(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qB","nN",function(){return P.oD("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qC","nO",function(){return P.pi()})
u($,"qz","nM",function(){return P.mj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qA","m_",function(){return P.lA(P.f,P.bI)})
u($,"qq","nK",function(){return Z.aM(0)})
u($,"qk","nI",function(){return Z.aM(511)})
u($,"qs","b1",function(){return Z.aM(1)})
u($,"qr","by",function(){return Z.aM(2)})
u($,"qm","bx",function(){return Z.aM(4)})
u($,"qt","bz",function(){return Z.aM(8)})
u($,"qu","bA",function(){return Z.aM(16)})
u($,"qn","ds",function(){return Z.aM(32)})
u($,"qo","dt",function(){return Z.aM(64)})
u($,"qp","nJ",function(){return Z.aM(96)})
u($,"qv","cp",function(){return Z.aM(128)})
u($,"ql","bw",function(){return Z.aM(256)})
u($,"q0","nv",function(){return new V.hg(1e-9)})
u($,"q_","N",function(){return $.nv()})})()
var v={mangledGlobalNames:{o:"int",q:"double",a7:"num",f:"String",T:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.M,args:[F.ag,P.q,P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.M,args:[F.ab]},{func:1,ret:P.M,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ar]]},{func:1,ret:P.M,args:[D.z]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:P.M,args:[W.p]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.f,args:[P.o]},{func:1,ret:P.M,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,M.aG]]},{func:1,ret:-1,args:[P.o,[P.i,V.ax]]},{func:1,ret:-1,args:[P.o,[P.i,U.aj]]},{func:1,ret:P.q},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,D.a9]]},{func:1,ret:P.T,args:[W.V,P.f,P.f,W.bS]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.T,args:[W.aF]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:W.V,args:[W.G]},{func:1,args:[W.p]},{func:1,ret:P.U,args:[,,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.U,args:[P.o]},{func:1,ret:P.T,args:[[P.i,D.a9]]},{func:1,ret:P.M,args:[P.f,,]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.o]},{func:1,ret:[P.E,P.f,P.f],args:[[P.E,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.aA]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.M,args:[P.be]},{func:1,ret:P.T,args:[V.bE]},{func:1,args:[,P.f]},{func:1,ret:P.M,args:[P.a7]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.i3,Int32Array:H.i4,Int8Array:H.i5,Uint16Array:H.i6,Uint32Array:H.i7,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cM,HTMLBRElement:W.A,HTMLButtonElement:W.A,HTMLContentElement:W.A,HTMLDListElement:W.A,HTMLDataElement:W.A,HTMLDataListElement:W.A,HTMLDetailsElement:W.A,HTMLDialogElement:W.A,HTMLEmbedElement:W.A,HTMLFieldSetElement:W.A,HTMLHRElement:W.A,HTMLHeadingElement:W.A,HTMLHtmlElement:W.A,HTMLIFrameElement:W.A,HTMLLIElement:W.A,HTMLLegendElement:W.A,HTMLLinkElement:W.A,HTMLMapElement:W.A,HTMLMenuElement:W.A,HTMLMetaElement:W.A,HTMLMeterElement:W.A,HTMLModElement:W.A,HTMLOListElement:W.A,HTMLObjectElement:W.A,HTMLOptGroupElement:W.A,HTMLOptionElement:W.A,HTMLOutputElement:W.A,HTMLParagraphElement:W.A,HTMLParamElement:W.A,HTMLPictureElement:W.A,HTMLPreElement:W.A,HTMLProgressElement:W.A,HTMLQuoteElement:W.A,HTMLScriptElement:W.A,HTMLShadowElement:W.A,HTMLSlotElement:W.A,HTMLSourceElement:W.A,HTMLSpanElement:W.A,HTMLStyleElement:W.A,HTMLTableCaptionElement:W.A,HTMLTableColElement:W.A,HTMLTextAreaElement:W.A,HTMLTimeElement:W.A,HTMLTitleElement:W.A,HTMLTrackElement:W.A,HTMLUListElement:W.A,HTMLUnknownElement:W.A,HTMLDirectoryElement:W.A,HTMLFontElement:W.A,HTMLFrameElement:W.A,HTMLFrameSetElement:W.A,HTMLMarqueeElement:W.A,HTMLElement:W.A,AccessibleNodeList:W.fK,HTMLAnchorElement:W.dw,HTMLAreaElement:W.fL,HTMLBaseElement:W.cq,Blob:W.bX,HTMLBodyElement:W.bC,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.c_,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cv,CSSUnitValue:W.cv,CSSPerspective:W.h1,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cw,MSStyleCSSProperties:W.cw,CSS2Properties:W.cw,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.h3,CSSUnparsedValue:W.h4,DataTransferItemList:W.h7,HTMLDivElement:W.aI,XMLDocument:W.cx,Document:W.cx,DOMException:W.h8,DOMImplementation:W.dG,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.h9,DOMTokenList:W.ha,Element:W.V,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aJ,FileList:W.cA,FileWriter:W.hl,HTMLFormElement:W.hp,Gamepad:W.aQ,HTMLHeadElement:W.dM,History:W.dN,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,HTMLDocument:W.dO,ImageData:W.bo,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b7,HTMLLabelElement:W.dU,Location:W.dX,HTMLAudioElement:W.cI,HTMLMediaElement:W.cI,MediaList:W.hX,MIDIInputMap:W.hY,MIDIOutputMap:W.i_,MimeType:W.aT,MimeTypeArray:W.i1,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,DocumentFragment:W.G,ShadowRoot:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aU,PluginArray:W.ii,Range:W.ea,RTCStatsReport:W.iu,HTMLSelectElement:W.ix,SourceBuffer:W.aV,SourceBufferList:W.iI,SpeechGrammar:W.aW,SpeechGrammarList:W.iJ,SpeechRecognitionResult:W.aX,Storage:W.iM,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.em,HTMLTableRowElement:W.en,HTMLTableSectionElement:W.iT,HTMLTemplateElement:W.cV,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iV,TextTrackList:W.iW,TimeRanges:W.j0,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.j4,TrackDefaultList:W.j5,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.js,HTMLVideoElement:W.jI,VideoTrackList:W.jJ,WheelEvent:W.bi,Window:W.d8,DOMWindow:W.d8,Attr:W.d9,CSSRuleList:W.jR,ClientRect:W.eL,DOMRect:W.eL,GamepadList:W.k5,NamedNodeMap:W.f2,MozNamedAttrMap:W.f2,SpeechRecognitionResultList:W.kj,StyleSheetList:W.kn,SVGLength:P.b8,SVGLengthList:P.hE,SVGNumber:P.bc,SVGNumberList:P.ic,SVGPointList:P.ik,SVGScriptElement:P.cQ,SVGStringList:P.iS,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGTransform:P.bf,SVGTransformList:P.j6,AudioBuffer:P.fN,AudioParamMap:P.fO,AudioTrackList:P.fQ,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.id,WebGLBuffer:P.dz,WebGLFramebuffer:P.dL,WebGLProgram:P.e9,WebGLRenderbuffer:P.ed,WebGL2RenderingContext:P.cb,WebGLShader:P.ef,WebGLTexture:P.eo,WebGLUniformLocation:P.ey,SQLResultSetRowList:P.iK})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.no,[])
else V.no([])})})()
//# sourceMappingURL=test.dart.js.map
