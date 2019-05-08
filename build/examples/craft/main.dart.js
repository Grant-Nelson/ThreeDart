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
a[c]=function(){a[c]=function(){H.np(b)}
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
if(w[u][a])return w[u][a]}}var C={},H={jg:function jg(a){this.a=a},
iT:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
lS:function(){return new P.h5("No element")},
a3:function a3(a){this.a=a},
eW:function eW(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
fo:function fo(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hX:function hX(a,b,c){this.a=a
this.b=b
this.$ti=c},
hY:function hY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
cP:function cP(){},
e0:function e0(){},
lL:function(){throw H.f(P.a2("Cannot modify unmodifiable Map"))},
ce:function(a){var u,t
u=H.P(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
n9:function(a){return v.types[H.ac(a)]},
ne:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$ib5},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aO(a)
if(typeof u!=="string")throw H.f(H.aq(a))
return u},
md:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fa(u)
t=u[0]
s=u[1]
return new H.fM(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
kf:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.P(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.f(P.aa(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.I(r,p)|32)>s)return}return parseInt(a,b)},
c_:function(a){return H.m1(a)+H.jz(H.bE(a),0,null)},
m1:function(a){var u,t,s,r,q,p,o,n,m
u=J.N(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.T||!!u.$ic2){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ce(r.length>1&&C.c.I(r,0)===36?C.c.b1(r,1):r)},
m2:function(){if(!!self.location)return self.location.href
return},
ke:function(a){var u,t,s,r,q
H.eq(a)
u=J.b3(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ma:function(a){var u,t,s,r
u=H.b([],[P.i])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.aq(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.bc(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.aq(r))}return H.ke(u)},
kg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aq(s))
if(s<0)throw H.f(H.aq(s))
if(s>65535)return H.ma(a)}return H.ke(a)},
mb:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dH:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bc(u,10))>>>0,56320|u&1023)}}throw H.f(P.aa(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m9:function(a){var u=H.bZ(a).getFullYear()+0
return u},
m7:function(a){var u=H.bZ(a).getMonth()+1
return u},
m3:function(a){var u=H.bZ(a).getDate()+0
return u},
m4:function(a){var u=H.bZ(a).getHours()+0
return u},
m6:function(a){var u=H.bZ(a).getMinutes()+0
return u},
m8:function(a){var u=H.bZ(a).getSeconds()+0
return u},
m5:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
c:function(a){throw H.f(H.aq(a))},
e:function(a,b){if(a==null)J.b3(a)
throw H.f(H.bd(a,b))},
bd:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
u=H.ac(J.b3(a))
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.cr(b,a,"index",null,u)
return P.fL(b,"index",null)},
n5:function(a,b,c){if(a>c)return new P.bx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
aq:function(a){return new P.aP(!0,a,null,null)},
c8:function(a){if(typeof a!=="number")throw H.f(H.aq(a))
return a},
f:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l9})
u.name=""}else u.toString=H.l9
return u},
l9:function(){return J.aO(this.dartException)},
r:function(a){throw H.f(a)},
C:function(a){throw H.f(P.bL(a))},
b_:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ka:function(a,b){return new H.fB(a,b==null?null:b.method)},
jh:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fd(a,t,u?null:b.receiver)},
aK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bc(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jh(H.k(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ka(H.k(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lg()
p=$.lh()
o=$.li()
n=$.lj()
m=$.lm()
l=$.ln()
k=$.ll()
$.lk()
j=$.lp()
i=$.lo()
h=q.ar(t)
if(h!=null)return u.$1(H.jh(H.P(t),h))
else{h=p.ar(t)
if(h!=null){h.method="call"
return u.$1(H.jh(H.P(t),h))}else{h=o.ar(t)
if(h==null){h=n.ar(t)
if(h==null){h=m.ar(t)
if(h==null){h=l.ar(t)
if(h==null){h=k.ar(t)
if(h==null){h=n.ar(t)
if(h==null){h=j.ar(t)
if(h==null){h=i.ar(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ka(H.P(t),h))}}return u.$1(new H.hC(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dP()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aP(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dP()
return a},
cb:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
n8:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
nd:function(a,b,c,d,e,f){H.h(a,"$ijd")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.v("Unsupported number of arguments for wrapped closure"))},
c9:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nd)
a.$identity=u
return u},
lK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.N(d).$ia){u.$reflectionInfo=d
s=H.md(u).r}else s=d
r=e?Object.create(new H.h7().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aQ
if(typeof p!=="number")return p.k()
$.aQ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jX(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.n9,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jV:H.ja
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jX(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lH:function(a,b,c,d){var u=H.ja
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lH(t,!r,u,b)
if(t===0){r=$.aQ
if(typeof r!=="number")return r.k()
$.aQ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
if(q==null){q=H.eI("self")
$.ci=q}return new Function(r+H.k(q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aQ
if(typeof r!=="number")return r.k()
$.aQ=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
if(q==null){q=H.eI("self")
$.ci=q}return new Function(r+H.k(q)+"."+H.k(u)+"("+o+");}")()},
lI:function(a,b,c,d){var u,t
u=H.ja
t=H.jV
switch(b?-1:a){case 0:throw H.f(H.mh("Intercepted function with no arguments."))
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
u=$.ci
if(u==null){u=H.eI("self")
$.ci=u}t=$.jU
if(t==null){t=H.eI("receiver")
$.jU=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lI(r,!p,s,b)
if(r===1){u="return function(){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+");"
t=$.aQ
if(typeof t!=="number")return t.k()
$.aQ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+", "+n+");"
t=$.aQ
if(typeof t!=="number")return t.k()
$.aQ=t+1
return new Function(u+t+"}")()},
jB:function(a,b,c,d,e,f,g){return H.lK(a,b,H.ac(c),d,!!e,!!f,g)},
ja:function(a){return a.a},
jV:function(a){return a.c},
eI:function(a){var u,t,s,r,q
u=new H.ch("self","target","receiver","name")
t=J.fa(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aI(a,"String"))},
n6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aI(a,"double"))},
nj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aI(a,"num"))},
kX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aI(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aI(a,"int"))},
l6:function(a,b){throw H.f(H.aI(a,H.ce(H.P(b).substring(2))))},
nl:function(a,b){throw H.f(H.lF(a,H.ce(H.P(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.l6(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.nl(a,b)},
eq:function(a){if(a==null)return a
if(!!J.N(a).$ia)return a
throw H.f(H.aI(a,"List<dynamic>"))},
l3:function(a,b){var u
if(a==null)return a
u=J.N(a)
if(!!u.$ia)return a
if(u[b])return a
H.l6(a,b)},
kY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
eo:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kY(J.N(a))
if(u==null)return!1
return H.kN(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.jw)return a
$.jw=!0
try{if(H.eo(a,b))return a
u=H.iZ(b)
t=H.aI(a,u)
throw H.f(t)}finally{$.jw=!1}},
jC:function(a,b){if(a!=null&&!H.jA(a,b))H.r(H.aI(a,H.iZ(b)))
return a},
aI:function(a,b){return new H.hr("TypeError: "+P.eZ(a)+": type '"+H.kS(a)+"' is not a subtype of type '"+b+"'")},
lF:function(a,b){return new H.eJ("CastError: "+P.eZ(a)+": type '"+H.kS(a)+"' is not a subtype of type '"+b+"'")},
kS:function(a){var u,t
u=J.N(a)
if(!!u.$ick){t=H.kY(u)
if(t!=null)return H.iZ(t)
return"Closure"}return H.c_(a)},
np:function(a){throw H.f(new P.eS(H.P(a)))},
mh:function(a){return new H.fS(a)},
l0:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
oz:function(a,b,c){return H.cd(a["$a"+H.k(c)],H.bE(b))},
ep:function(a,b,c,d){var u
H.P(c)
H.ac(d)
u=H.cd(a["$a"+H.k(c)],H.bE(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.P(b)
H.ac(c)
u=H.cd(a["$a"+H.k(b)],H.bE(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.ac(b)
u=H.bE(a)
return u==null?null:u[b]},
iZ:function(a){return H.bC(a,null)},
bC:function(a,b){var u,t
H.d(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.jz(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.k(b[t])}if('func' in a)return H.mR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mR:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.m]
H.d(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.k(o,b[m])
l=t[p]
if(l!=null&&l!==P.M)o+=" extends "+H.bC(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bC(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bC(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bC(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.n7(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.P(u[g])
i=i+h+H.bC(d[c],b)+(" "+H.k(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jz:function(a,b,c){var u,t,s,r,q,p
H.d(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bC(p,c)}return"<"+u.i(0)+">"},
cd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d1:function(a,b,c,d){var u,t
H.P(b)
H.eq(c)
H.P(d)
if(a==null)return!1
u=H.bE(a)
t=J.N(a)
if(t[b]==null)return!1
return H.kV(H.cd(t[d],u),null,c,null)},
d:function(a,b,c,d){H.P(b)
H.eq(c)
H.P(d)
if(a==null)return a
if(H.d1(a,b,c,d))return a
throw H.f(H.aI(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ce(b.substring(2))+H.jz(c,0,null),v.mangledGlobalNames)))},
kV:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aC(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aC(a[t],b,c[t],d))return!1
return!0},
ox:function(a,b,c){return a.apply(b,H.cd(J.N(b)["$a"+H.k(c)],H.bE(b)))},
l2:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="F"||a===-1||a===-2||H.l2(u)}return!1},
jA:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="F"||b===-1||b===-2||H.l2(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eo(a,b)}u=J.N(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aC(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.jA(a,b))throw H.f(H.aI(a,H.iZ(b)))
return a},
aC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.kN(a,b,c,d)
if('func' in a)return c.name==="jd"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aC("type" in a?a.type:null,b,s,d)
else if(H.aC(a,b,s,d))return!0
else{if(!('$i'+"co" in t.prototype))return!1
r=t.prototype["$a"+"co"]
q=H.cd(r,u?a.slice(1):null)
return H.aC(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kV(H.cd(m,u),b,p,d)},
kN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aC(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aC(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aC(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ni(h,b,g,d)},
ni:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aC(c[r],d,a[r],b))return!1}return!0},
oy:function(a,b,c){Object.defineProperty(a,H.P(b),{value:c,enumerable:false,writable:true,configurable:true})},
nf:function(a){var u,t,s,r,q,p
u=H.P($.l1.$1(a))
t=$.iR[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iX[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.P($.kU.$2(a,u))
if(u!=null){t=$.iR[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iX[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iY(s)
$.iR[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.iX[u]=s
return s}if(q==="-"){p=H.iY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l5(a,s)
if(q==="*")throw H.f(P.hB(u))
if(v.leafTags[u]===true){p=H.iY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l5(a,s)},
l5:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iY:function(a){return J.jF(a,!1,null,!!a.$ib5)},
nh:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iY(u)
else return J.jF(u,c,null,null)},
nb:function(){if(!0===$.jE)return
$.jE=!0
H.nc()},
nc:function(){var u,t,s,r,q,p,o,n
$.iR=Object.create(null)
$.iX=Object.create(null)
H.na()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l7.$1(q)
if(p!=null){o=H.nh(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
na:function(){var u,t,s,r,q,p,o
u=C.X()
u=H.c7(C.U,H.c7(C.Z,H.c7(C.z,H.c7(C.z,H.c7(C.Y,H.c7(C.V,H.c7(C.W(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l1=new H.iU(q)
$.kU=new H.iV(p)
$.l7=new H.iW(o)},
c7:function(a,b){return a(b)||b},
lU:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(P.a1("Illegal RegExp pattern ("+String(r)+")",a,null))},
no:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
l8:function(a,b,c){var u,t,s
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
fM:function fM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fB:function fB(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
j0:function j0(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
ck:function ck(){},
hc:function hc(){},
h7:function h7(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
eJ:function eJ(a){this.a=a},
fS:function fS(a){this.a=a},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ff:function ff(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dr:function dr(a,b){this.a=a
this.$ti=b},
fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c5:function(a){var u,t,s
u=J.N(a)
if(!!u.$iaw)return a
t=new Array(u.gq(a))
t.fixed$length=Array
for(s=0;s<u.gq(a);++s)C.a.m(t,s,u.l(a,s))
return t},
lZ:function(a){return new Int8Array(a)},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bd(b,a))},
mP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.n5(a,b,c))
return b},
bW:function bW(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
dA:function dA(){},
bX:function bX(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
n7:function(a){return J.k_(a?Object.keys(a):[],null)},
nk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iS:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jE==null){H.nb()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.hB("Return interceptor for "+H.k(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jQ()]
if(q!=null)return q
q=H.nf(a)
if(q!=null)return q
if(typeof a=="function")return C.a_
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.jQ(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
lT:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j9(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aa(a,0,4294967295,"length",null))
return J.k_(new Array(a),b)},
k_:function(a,b){return J.fa(H.b(a,[b]))},
fa:function(a){H.eq(a)
a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.bT.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fb.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.iS(a)},
be:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.iS(a)},
kZ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.iS(a)},
l_:function(a){if(typeof a=="number")return J.ct.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.c2.prototype
return a},
jD:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.c2.prototype
return a},
bD:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.iS(a)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).t(a,b)},
lw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ne(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).l(a,b)},
lx:function(a,b,c,d){return J.bD(a).hq(a,b,c,d)},
ly:function(a,b){return J.jD(a).I(a,b)},
j5:function(a,b,c){return J.bD(a).jC(a,b,c)},
jS:function(a,b){return J.bD(a).a5(a,b)},
lz:function(a,b){return J.jD(a).a0(a,b)},
j6:function(a,b){return J.kZ(a).ap(a,b)},
lA:function(a,b,c,d){return J.bD(a).eV(a,b,c,d)},
j7:function(a){return J.l_(a).c7(a)},
bF:function(a){return J.N(a).gJ(a)},
cg:function(a){return J.kZ(a).gX(a)},
b3:function(a){return J.be(a).gq(a)},
lB:function(a,b){return J.bD(a).lN(a,b)},
j8:function(a){return J.l_(a).az(a)},
aO:function(a){return J.N(a).i(a)},
ae:function ae(){},
fb:function fb(){},
dm:function dm(){},
dn:function dn(){},
fE:function fE(){},
c2:function c2(){},
bt:function bt(){},
aT:function aT(a){this.$ti=a},
jf:function jf(a){this.$ti=a},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ct:function ct(){},
dl:function dl(){},
dk:function dk(){},
bT:function bT(){}},P={
mu:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n_()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c9(new P.i_(u),1)).observe(t,{childList:true})
return new P.hZ(u,t,s)}else if(self.setImmediate!=null)return P.n0()
return P.n1()},
mv:function(a){self.scheduleImmediate(H.c9(new P.i0(H.o(a,{func:1,ret:-1})),0))},
mw:function(a){self.setImmediate(H.c9(new P.i1(H.o(a,{func:1,ret:-1})),0))},
mx:function(a){P.jn(C.p,H.o(a,{func:1,ret:-1}))},
jn:function(a,b){var u
H.o(b,{func:1,ret:-1})
u=C.e.a8(a.a,1000)
return P.mA(u<0?0:u,b)},
km:function(a,b){var u
H.o(b,{func:1,ret:-1,args:[P.aZ]})
u=C.e.a8(a.a,1000)
return P.mB(u<0?0:u,b)},
mA:function(a,b){var u=new P.ei(!0)
u.hl(a,b)
return u},
mB:function(a,b){var u=new P.ei(!1)
u.hm(a,b)
return u},
my:function(a,b){var u,t,s
b.a=1
try{a.fq(new P.i9(b),new P.ia(b),null)}catch(s){u=H.aK(s)
t=H.cb(s)
P.nm(new P.ib(b,u,t))}},
kC:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaB")
if(u>=4){t=b.cJ()
b.a=a.a
b.c=a.c
P.cS(b,t)}else{t=H.h(b.c,"$ib2")
b.a=2
b.c=a
a.ea(t)}},
cS:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$iaj")
t=t.b
p=q.a
o=q.b
t.toString
P.iN(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cS(u.a,b)}t=u.a
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
if(k){H.h(m,"$iaj")
t=t.b
p=m.a
o=m.b
t.toString
P.iN(null,null,t,p,o)
return}j=$.R
if(j!=l)$.R=l
else j=null
t=b.c
if(t===8)new P.ig(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ie(s,b,m).$0()}else if((t&2)!==0)new P.id(u,s,b).$0()
if(j!=null)$.R=j
t=s.b
if(!!J.N(t).$ico){if(t.a>=4){i=H.h(o.c,"$ib2")
o.c=null
b=o.bM(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kC(t,o)
return}}h=b.b
i=H.h(h.c,"$ib2")
h.c=null
b=h.bM(i)
t=s.a
p=s.b
if(!t){H.z(p,H.q(h,0))
h.a=4
h.c=p}else{H.h(p,"$iaj")
h.a=8
h.c=p}u.a=h
t=h}},
mV:function(a,b){if(H.eo(a,{func:1,args:[P.M,P.ap]}))return H.o(a,{func:1,ret:null,args:[P.M,P.ap]})
if(H.eo(a,{func:1,args:[P.M]}))return H.o(a,{func:1,ret:null,args:[P.M]})
throw H.f(P.j9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mU:function(){var u,t
for(;u=$.c6,u!=null;){$.d0=null
t=u.b
$.c6=t
if(t==null)$.d_=null
u.a.$0()}},
mZ:function(){$.jx=!0
try{P.mU()}finally{$.d0=null
$.jx=!1
if($.c6!=null)$.jR().$1(P.kW())}},
kR:function(a){var u=new P.e8(H.o(a,{func:1,ret:-1}))
if($.c6==null){$.d_=u
$.c6=u
if(!$.jx)$.jR().$1(P.kW())}else{$.d_.b=u
$.d_=u}},
mY:function(a){var u,t,s
H.o(a,{func:1,ret:-1})
u=$.c6
if(u==null){P.kR(a)
$.d0=$.d_
return}t=new P.e8(a)
s=$.d0
if(s==null){t.b=u
$.d0=t
$.c6=t}else{t.b=s.b
s.b=t
$.d0=t
if(t.b==null)$.d_=t}},
nm:function(a){var u,t
u={func:1,ret:-1}
H.o(a,u)
t=$.R
if(C.k===t){P.iP(null,null,C.k,a)
return}t.toString
P.iP(null,null,t,H.o(t.cV(a),u))},
jm:function(a,b){var u,t
u={func:1,ret:-1}
H.o(b,u)
t=$.R
if(t===C.k){t.toString
return P.jn(a,b)}return P.jn(a,H.o(t.cV(b),u))},
hl:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aZ]}
H.o(b,u)
t=$.R
if(t===C.k){t.toString
return P.km(a,b)}s=t.eo(b,P.aZ)
$.R.toString
return P.km(a,H.o(s,u))},
iN:function(a,b,c,d,e){var u={}
u.a=d
P.mY(new P.iO(u,e))},
kO:function(a,b,c,d,e){var u,t
H.o(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
kP:function(a,b,c,d,e,f,g){var u,t
H.o(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
mW:function(a,b,c,d,e,f,g,h,i){var u,t
H.o(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
iP:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cV(d):c.kP(d,-1)
P.kR(d)},
i_:function i_(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
ei:function ei(a){this.a=a
this.b=null
this.c=0},
iz:function iz(a,b){this.a=a
this.b=b},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i8:function i8(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.a=a
this.b=null},
h8:function h8(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
cE:function cE(){},
h9:function h9(){},
aZ:function aZ(){},
aj:function aj(a,b){this.a=a
this.b=b},
iI:function iI(){},
iO:function iO(a,b){this.a=a
this.b=b},
ip:function ip(){},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b){this.a=a
this.b=b},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function(a,b,c){H.eq(a)
return H.d(H.n8(a,new H.ax([b,c])),"$ik0",[b,c],"$ak0")},
lV:function(a,b){return new H.ax([a,b])},
lW:function(a,b,c,d){return new P.il([d])},
kF:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kE:function(a,b,c){var u=new P.im(a,b,[c])
u.c=a.e
return u},
lR:function(a,b,c){var u,t
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.d4()
C.a.h(t,a)
try{P.mT(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.kk(b,H.l3(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
je:function(a,b,c){var u,t,s
if(P.jy(a))return b+"..."+c
u=new P.al(b)
t=$.d4()
C.a.h(t,a)
try{s=u
s.a=P.kk(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jy:function(a){var u,t
for(u=0;t=$.d4(),u<t.length;++u)if(a===t[u])return!0
return!1},
mT:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.d(b,"$ia",[P.m],"$aa")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.k(u.gN())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gN();++s
if(!u.C()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gN();++s
for(;u.C();o=n,n=m){m=u.gN();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ji:function(a){var u,t
u={}
if(P.jy(a))return"{...}"
t=new P.al("")
try{C.a.h($.d4(),a)
t.a+="{"
u.a=!0
a.a6(0,new P.fk(u,t))
t.a+="}"}finally{u=$.d4()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
il:function il(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cT:function cT(a){this.a=a
this.c=this.b=null},
im:function im(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fh:function fh(){},
V:function V(){},
fj:function fj(){},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(){},
iA:function iA(){},
fm:function fm(){},
e1:function e1(a,b){this.a=a
this.$ti=b},
it:function it(){},
ee:function ee(){},
em:function em(){},
mo:function(a,b,c,d){H.d(b,"$ia",[P.i],"$aa")
if(b instanceof Uint8Array)return P.mp(!1,b,c,d)
return},
mp:function(a,b,c,d){var u,t,s
u=$.lq()
if(u==null)return
t=0===c
if(t&&!0)return P.jq(u,b)
s=b.length
d=P.by(c,d,s,null,null,null)
if(t&&d===s)return P.jq(u,b)
return P.jq(u,b.subarray(c,d))},
jq:function(a,b){if(P.mr(b))return
return P.ms(a,b)},
ms:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aK(t)}return},
mr:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aK(t)}return},
mX:function(a,b,c){var u,t,s
H.d(a,"$ia",[P.i],"$aa")
for(u=J.be(a),t=b;t<c;++t){s=u.l(a,t)
if(typeof s!=="number")return s.bD()
if((s&127)!==s)return t-b}return c-b},
jT:function(a,b,c,d,e,f){if(C.e.b0(f,4)!==0)throw H.f(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.f(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.f(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
eF:function eF(a){this.a=a},
eG:function eG(a){this.a=a},
bJ:function bJ(){},
bM:function bM(){},
eX:function eX(){},
hJ:function hJ(a){this.a=a},
hL:function hL(){},
iH:function iH(a){this.b=this.a=0
this.c=a},
hK:function hK(a){this.a=a},
iF:function iF(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function(a,b,c){var u
H.o(b,{func:1,ret:P.i,args:[P.m]})
u=H.kf(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.f(P.a1(a,null,null))},
lP:function(a){if(a instanceof H.ck)return a.i(0)
return"Instance of '"+H.c_(a)+"'"},
lX:function(a,b,c,d){var u,t
H.z(b,d)
u=J.lT(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.d(u,"$ia",[d],"$aa")},
k2:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=J.cg(a);s.C();)C.a.h(t,H.z(s.gN(),c))
if(b)return t
return H.d(J.fa(t),"$ia",u,"$aa")},
dQ:function(a,b,c){var u,t
u=P.i
H.d(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(a,"$iaT",[u],"$aaT")
t=a.length
c=P.by(b,c,t,null,null,null)
return H.kg(b>0||c<t?C.a.fS(a,b,c):a)}if(!!J.N(a).$ibX)return H.mb(a,b,P.by(b,c,a.length,null,null,null))
return P.mj(a,b,c)},
mj:function(a,b,c){var u,t,s,r
H.d(a,"$il",[P.i],"$al")
if(b<0)throw H.f(P.aa(b,0,J.b3(a),null,null))
u=c==null
if(!u&&c<b)throw H.f(P.aa(c,b,J.b3(a),null,null))
t=J.cg(a)
for(s=0;s<b;++s)if(!t.C())throw H.f(P.aa(b,0,s,null,null))
r=[]
if(u)for(;t.C();)r.push(t.gN())
else for(s=b;s<c;++s){if(!t.C())throw H.f(P.aa(c,b,s,null,null))
r.push(t.gN())}return H.kg(r)},
mf:function(a,b,c){return new H.fc(a,H.lU(a,!1,!0,!1))},
kk:function(a,b,c){var u=J.cg(b)
if(!u.C())return a
if(c.length===0){do a+=H.k(u.gN())
while(u.C())}else{a+=H.k(u.gN())
for(;u.C();)a=a+c+H.k(u.gN())}return a},
kp:function(){var u=H.m2()
if(u!=null)return P.mn(u,0,null)
throw H.f(P.a2("'Uri.base' is not supported"))},
en:function(a,b,c,d){var u,t,s,r,q,p
H.d(a,"$ia",[P.i],"$aa")
if(c===C.m){u=$.lu().b
if(typeof b!=="string")H.r(H.aq(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.av(c,"bJ",0))
t=c.gld().d_(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dH(q)
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
dd:function(a){if(a>=10)return""+a
return"0"+a},
jY:function(a,b,c,d,e,f){return new P.aD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aO(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lP(a)},
d5:function(a){return new P.aP(!1,null,null,a)},
j9:function(a,b,c){return new P.aP(!0,a,b,c)},
mc:function(a){return new P.bx(null,null,!1,null,null,a)},
fL:function(a,b,c){return new P.bx(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
by:function(a,b,c,d,e,f){if(typeof a!=="number")return H.c(a)
if(0>a||a>c)throw H.f(P.aa(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.aa(b,a,c,"end",f))
return b}return c},
cr:function(a,b,c,d,e){var u=H.ac(e==null?J.b3(b):e)
return new P.f8(b,u,!0,a,c,"Index out of range")},
a2:function(a){return new P.hD(a)},
hB:function(a){return new P.hA(a)},
bL:function(a){return new P.eO(a)},
v:function(a){return new P.eb(a)},
a1:function(a,b,c){return new P.f5(a,b,c)},
dt:function(a,b,c,d){var u,t
H.o(b,{func:1,ret:d,args:[P.i]})
u=H.b([],[d])
C.a.sq(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
jH:function(a){H.nk(a)},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(t===0)return P.ko(b>0||c<c?C.c.v(a,b,c):a,5,null).gfv()
else if(t===32)return P.ko(C.c.v(a,u,c),0,null).gfv()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.i])
C.a.m(r,0,0)
s=b-1
C.a.m(r,1,s)
C.a.m(r,2,s)
C.a.m(r,7,s)
C.a.m(r,3,b)
C.a.m(r,4,b)
C.a.m(r,5,c)
C.a.m(r,6,c)
if(P.kQ(a,b,c,0,r)>=14)C.a.m(r,7,c)
q=r[1]
if(typeof q!=="number")return q.m8()
if(q>=b)if(P.kQ(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.k()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.K()
if(typeof m!=="number")return H.c(m)
if(l<m)m=l
if(typeof n!=="number")return n.K()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.K()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.K()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.al(a,"..",n)))i=m>n+2&&C.c.al(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.al(a,"file",b)){if(p<=b){if(!C.c.al(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.v(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.bj(a,n,m,"/");++m;++l;++c}else{a=C.c.v(a,b,n)+"/"+C.c.v(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.al(a,"http",b)){if(s&&o+3===n&&C.c.al(a,"80",o+1))if(b===0&&!0){a=C.c.bj(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.v(a,b,o)+C.c.v(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.al(a,"https",b)){if(s&&o+4===n&&C.c.al(a,"443",o+1))if(b===0&&!0){a=C.c.bj(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.v(a,b,o)+C.c.v(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.v(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iu(a,q,p,o,n,m,l,j)}return P.mC(a,b,c,q,p,o,n,m,l,j)},
kr:function(a,b){var u=P.m
return C.a.lf(H.b(a.split("&"),[u]),P.lV(u,u),new P.hI(b),[P.E,P.m,P.m])},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hF(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cc(C.c.v(a,q,r),null,null)
if(typeof n!=="number")return n.bk()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cc(C.c.v(a,q,c),null,null)
if(typeof n!=="number")return n.bk()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hG(a)
t=new P.hH(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.i])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a0(a,r)
if(n===58){if(r===b){++r
if(C.c.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaZ(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mm(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.bc(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
mC:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mJ(a,b,d)
else{if(d===b)P.cY(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mK(a,u,e-1):""
s=P.mG(a,e,f,!1)
if(typeof f!=="number")return f.k()
r=f+1
if(typeof g!=="number")return H.c(g)
q=r<g?P.mI(P.cc(C.c.v(a,r,g),new P.iB(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mH(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.K()
o=h<i?P.ju(a,h+1,i,null):null
return new P.c4(j,t,s,q,p,o,i<c?P.mF(a,i+1,c):null)},
kG:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cY:function(a,b,c){throw H.f(P.a1(c,a,b))},
mI:function(a,b){if(a!=null&&a===P.kG(b))return
return a},
mG:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.c.a0(a,u)!==93)P.cY(a,b,"Missing end `]` to match `[` in host")
P.kq(a,b+1,u)
return C.c.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.c(c)
t=b
for(;t<c;++t)if(C.c.a0(a,t)===58){P.kq(a,b,c)
return"["+a+"]"}return P.mM(a,b,c)},
mM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.c(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a0(a,u)
if(q===37){p=P.kM(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.c.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.c.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.cY(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.c.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kH(q)
u+=l
t=u}}}}if(s==null)return C.c.v(a,b,c)
if(t<c){n=C.c.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kJ(C.c.I(a,b)))P.cY(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cY(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.v(a,b,c)
return P.mD(t?a.toLowerCase():a)},
mD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mK:function(a,b,c){return P.cZ(a,b,c,C.a1,!1)},
mH:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cZ(a,b,c,C.E,!0):C.q.mb(d,new P.iC(),P.m).B(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ak(r,"/"))r="/"+r
return P.mL(r,e,f)},
mL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ak(a,"/"))return P.mN(a,!u||c)
return P.mO(a)},
ju:function(a,b,c,d){var u,t
u={}
H.d(d,"$iE",[P.m,null],"$aE")
if(a!=null){if(d!=null)throw H.f(P.d5("Both query and queryParameters specified"))
return P.cZ(a,b,c,C.t,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.a6(0,new P.iD(new P.iE(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mF:function(a,b,c){return P.cZ(a,b,c,C.t,!0)},
kM:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a0(a,b+1)
s=C.c.a0(a,u)
r=H.iT(t)
q=H.iT(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.bc(p,4)
if(u>=8)return H.e(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dH(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.v(a,b,b+3).toUpperCase()
return},
kH:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.i])
C.a.m(t,0,37)
C.a.m(t,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.m(t,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.i])
for(q=0;--r,r>=0;s=128){p=C.e.jQ(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.c.I("0123456789ABCDEF",p>>>4))
C.a.m(t,q+2,C.c.I("0123456789ABCDEF",p&15))
q+=3}}return P.dQ(t,0,null)},
cZ:function(a,b,c,d,e){var u=P.kL(a,b,c,H.d(d,"$ia",[P.i],"$aa"),e)
return u==null?C.c.v(a,b,c):u},
kL:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.d(d,"$ia",[P.i],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.K()
if(typeof c!=="number")return H.c(c)
if(!(t<c))break
c$0:{q=C.c.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kM(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cY(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kH(q)}}if(r==null)r=new P.al("")
r.a+=C.c.v(a,s,t)
r.a+=H.k(o)
if(typeof n!=="number")return H.c(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.K()
if(s<c)r.a+=C.c.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kK:function(a){if(C.c.ak(a,"."))return!0
return C.c.f2(a,"/.")!==-1},
mO:function(a){var u,t,s,r,q,p,o
if(!P.kK(a))return a
u=H.b([],[P.m])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.B(u,"/")},
mN:function(a,b){var u,t,s,r,q,p
if(!P.kK(a))return!b?P.kI(a):a
u=H.b([],[P.m])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaZ(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaZ(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.m(u,0,P.kI(u[0]))}return C.a.B(u,"/")},
kI:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kJ(J.ly(a,0)))for(t=1;t<u;++t){s=C.c.I(a,t)
if(s===58)return C.c.v(a,0,t)+"%3A"+C.c.b1(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.f(P.d5("Invalid URL encoding"))}}return u},
jv:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.v(a,b,c)
else q=new H.a3(C.c.v(a,b,c))}else{q=H.b([],[P.i])
for(r=a.length,t=b;t<c;++t){s=C.c.I(a,t)
if(s>127)throw H.f(P.d5("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.f(P.d5("Truncated URI"))
C.a.h(q,P.mE(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.d(q,"$ia",[P.i],"$aa")
return new P.hK(!1).d_(q)},
kJ:function(a){var u=a|32
return 97<=u&&u<=122},
ko:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.i])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.f(P.a1("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.f(P.a1("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaZ(u)
if(q!==44||s!==o+7||!C.c.al(a,"base64",o+1))throw H.f(P.a1("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.I.lr(a,n,t)
else{m=P.kL(a,n,t,C.t,!0)
if(m!=null)a=C.c.bj(a,n,t,m)}return new P.hE(a,u,c)},
mQ:function(){var u,t,s,r,q
u=P.dt(22,new P.iK(),!0,P.L)
t=new P.iJ(u)
s=new P.iL()
r=new P.iM()
q=H.h(t.$2(0,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(14,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(15,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(1,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(2,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(3,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(4,229),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(5,229),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(6,231),"$iL")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(7,231),"$iL")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.h(t.$2(8,8),"$iL"),"]",5)
q=H.h(t.$2(9,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(16,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(17,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(10,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(18,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(19,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(11,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(12,236),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.h(t.$2(13,237),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.h(t.$2(20,245),"$iL"),"az",21)
q=H.h(t.$2(21,245),"$iL")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kQ:function(a,b,c,d,e){var u,t,s,r,q
H.d(e,"$ia",[P.i],"$aa")
u=$.lv()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
Y:function Y(){},
as:function as(a,b){this.a=a
this.b=b},
x:function x(){},
aD:function aD(a){this.a=a},
eU:function eU(){},
eV:function eV(){},
bq:function bq(){},
dC:function dC(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f8:function f8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hD:function hD(a){this.a=a},
hA:function hA(a){this.a=a},
h5:function h5(a){this.a=a},
eO:function eO(a){this.a=a},
fD:function fD(){},
dP:function dP(){},
eS:function eS(a){this.a=a},
eb:function eb(a){this.a=a},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
l:function l(){},
aS:function aS(){},
a:function a(){},
E:function E(){},
F:function F(){},
ah:function ah(){},
M:function M(){},
ap:function ap(){},
m:function m(){},
al:function al(a){this.a=a},
hI:function hI(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
iE:function iE(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(){},
iJ:function iJ(a){this.a=a},
iL:function iL(){},
iM:function iM(){},
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
i4:function i4(a,b,c,d,e,f,g,h){var _=this
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
if(!!u.$ib4){t=u.gew(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.el(a.data,a.height,a.width)},
n3:function(a){if(a instanceof P.el)return{data:a.a,height:a.b,width:a.c}
return a},
n2:function(a,b){var u={}
a.a6(0,new P.iQ(u))
return u},
iv:function iv(){},
ix:function ix(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(){},
f3:function f3(){},
ik:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ii:function ii(){},
io:function io(){},
az:function az(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
p:function p(){},
L:function L(){},
d8:function d8(){},
dh:function dh(){},
dI:function dI(){},
c0:function c0(){},
dM:function dM(){},
dS:function dS(){},
e_:function e_(){}},W={
lC:function(a){var u=document.createElement("a")
return u},
jb:function(a,b){var u=document.createElement("canvas")
return u},
lO:function(a){H.h(a,"$ibP")
return"wheel"},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kD:function(a,b,c,d){var u,t
u=W.ij(W.ij(W.ij(W.ij(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u,t
u=W.kT(new W.i7(c),W.n)
t=u!=null
if(t&&!0){H.o(u,{func:1,args:[W.n]})
if(t)J.lx(a,b,u,!1)}return new W.i6(a,b,u,!1,[e])},
kT:function(a,b){var u
H.o(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.k)return a
return u.eo(a,b)},
t:function t(){},
eC:function eC(){},
eD:function eD(){},
d7:function d7(){},
bG:function bG(){},
bH:function bH(){},
bn:function bn(){},
cl:function cl(){},
eR:function eR(){},
cm:function cm(){},
cn:function cn(){},
eT:function eT(){},
de:function de(){},
i3:function i3(a,b){this.a=a
this.b=b},
a0:function a0(){},
n:function n(){},
bP:function bP(){},
f4:function f4(){},
di:function di(){},
bR:function bR(){},
dj:function dj(){},
b4:function b4(){},
cq:function cq(){},
aV:function aV(){},
cw:function cw(){},
af:function af(){},
i2:function i2(a){this.a=a},
H:function H(){},
cx:function cx(){},
fT:function fT(){},
aA:function aA(){},
aH:function aH(){},
ho:function ho(){},
bB:function bB(){},
hV:function hV(){},
b1:function b1(){},
cR:function cR(){},
ea:function ea(){},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i6:function i6(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i7:function i7(a){this.a=a},
aE:function aE(){},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
ej:function ej(){},
ek:function ek(){}},L={
m_:function(a){var u,t,s,r,q,p,o,n
u=new Array(256)
u.fixed$length=Array
t=[P.i]
s=H.b(u,t)
u=new Array(256)
u.fixed$length=Array
r=H.b(u,t)
for(q=0;q<256;++q)C.a.m(r,q,q)
p=P.cc("6364136223846793005",null,null)
o=P.cc("1442695040888963407",null,null)
if(typeof p!=="number")return H.c(p)
if(typeof o!=="number")return H.c(o)
a=C.e.dm(C.e.dm(C.e.dm(a*p+o,64)*p+o,64)*p+o,64)
for(q=255;q>=0;--q){u=a*p+o
a=((u&-1)>>>0)-(u&0)
n=C.e.b0(a+31,q+1)
if(n>=256)return H.e(r,n)
C.a.m(s,q,r[n])
r[n]=r[q]}return new L.fC(s)},
fC:function fC(a){this.a=a}},B={
aY:function(a,b){return new B.aG(a,b)},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aG:function aG(a,b){this.a=a
this.b=b},
lE:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
lD:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
lG:function(a){var u=new B.bI(a)
u.fX(a)
return u},
l4:function(){var u,t,s
u=V.mi("3Dart Craft",!0)
t=[P.m]
u.a1(H.b(["This example is in development and may still have a few issues and glitches."],t))
s=W.jb(null,null)
s.className="pageLargeCanvas"
s.id="targetCanvas"
C.l.a5(u.a,s)
u.cQ(1,"About")
u.a1(H.b(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],t))
u.a1(H.b(["\xab[Back to Examples List|../../]"],t))
u.cQ(1,"Controls")
u.a1(H.b(["\u2022 _Currently there are no controls for mobile browsers_"],t))
u.a1(H.b(["\u2022 *Esc* to release the mouse capture"],t))
u.a1(H.b(["\u2022 *W* or *Up arrow* to move forward"],t))
u.a1(H.b(["\u2022 *S* or *Down arrow* to move backward"],t))
u.a1(H.b(["\u2022 *A* or *Left arrow* to strife left"],t))
u.a1(H.b(["\u2022 *D* or *Right arror* to strife right"],t))
u.a1(H.b(["\u2022 *Space bar* to jump"],t))
u.a1(H.b(["\u2022 *Tab* cycles the block selected which can be placed"],t))
u.a1(H.b(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],t))
u.a1(H.b(["\u2022 *Left click* or *Q* removes the currently highlighted block"],t))
u.a1(H.b(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],t))
u.a1(H.b(["\u2022 *O* to return the starting location"],t))
u.cQ(1,"Help wanted")
u.a1(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],t))
u.a1(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],t))
P.jm(C.p,B.ng())},
nn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6
u=C.S.fI(document,"targetCanvas")
if(u==null)H.r(P.v("Failed to find an element with the identifier, targetCanvas."))
t=E.mk(u,!0,!0,!0,!1)
s=new B.fv(t)
r=P.i
s.shR(new H.ax([r,B.S]))
s.sij(new H.ax([r,[P.a,P.i]]))
s.sik(H.b([],[O.bU]))
q=new V.a5(1,1,1)
p=V.dG()
o=V.js()
n=new V.u(0.5,-1,0.2).n(0,p)
n=U.bo(V.k6(p,o,new V.B(n.a,n.b,n.c)))
o=new D.bp()
o.c=new V.a5(1,1,1)
o.a=V.js()
m=o.b
o.b=n
n.gu().h(0,o.giF())
p=new D.D("mover",m,o.b,o,[U.a6])
p.b=!0
o.aR(p)
if(!o.c.t(0,q)){m=o.c
o.c=q
p=new D.D("color",m,q,o,[V.a5])
p.b=!0
o.aR(p)}s.e=o
l=s.L(s.G("boundary"),!1)
k=s.L(s.G("brick"),!1)
j=s.L(s.G("dirt"),!1)
i=s.L(s.G("dryLeavesSide"),!1)
h=s.L(s.G("dryLeavesTop"),!1)
g=s.L(s.G("leaves"),!1)
f=s.L(s.G("rock"),!1)
e=s.L(s.G("sand"),!1)
d=s.L(s.G("trunkEnd"),!1)
c=s.L(s.G("trunkSide"),!1)
b=s.L(s.G("trunkTilted"),!1)
a=s.L(s.G("turfSide"),!1)
a0=s.L(s.G("turfTop"),!1)
a1=s.L(s.G("woodEnd"),!1)
a2=s.L(s.G("woodSide"),!1)
a3=s.L(s.G("woodTilted"),!1)
a4=s.L(s.G("blackShine"),!0)
a5=s.L(s.G("redShine"),!0)
a6=s.L(s.G("yellowShine"),!0)
a7=s.L(s.G("whiteShine"),!0)
a8=s.L(s.G("mushroomBottom"),!1)
a9=s.L(s.G("mushroomSide"),!1)
b0=s.L(s.G("mushroomTop"),!1)
b1=s.L(s.G("grass"),!1)
b2=s.L(s.G("fern"),!1)
b3=s.L(s.G("blueFlowers"),!1)
b4=s.L(s.G("redFlowers"),!1)
b5=s.L(s.G("whiteFlowers"),!1)
p=T.bA
o=P.k2([s.G("water1"),s.G("water2"),s.G("water3")],!0,p)
n=new T.hg()
n.a=0
n.b=0
n.sjY(H.d(o,"$ia",[p],"$aa"))
n.f=null
s.x=n
b6=s.L(n,!0)
s.b.m(0,100,new B.S(l,l,l,l,l,l))
s.b.m(0,101,new B.S(j,j,j,j,j,j))
s.b.m(0,102,new B.S(a0,j,a,a,a,a))
s.b.m(0,103,new B.S(f,f,f,f,f,f))
s.b.m(0,104,new B.S(e,e,e,e,e,e))
s.b.m(0,105,new B.S(h,j,i,i,i,i))
s.b.m(0,106,new B.S(d,d,c,c,c,c))
s.b.m(0,107,new B.S(c,c,b,b,d,d))
s.b.m(0,108,new B.S(b,b,d,d,b,b))
s.b.m(0,109,new B.S(k,k,k,k,k,k))
s.b.m(0,110,new B.S(a5,a5,a5,a5,a5,a5))
s.b.m(0,111,new B.S(a7,a7,a7,a7,a7,a7))
s.b.m(0,112,new B.S(a6,a6,a6,a6,a6,a6))
s.b.m(0,113,new B.S(a4,a4,a4,a4,a4,a4))
s.b.m(0,114,new B.S(g,g,g,g,g,g))
s.b.m(0,115,new B.S(a1,a1,a2,a2,a2,a2))
s.b.m(0,116,new B.S(a2,a2,a3,a3,a1,a1))
s.b.m(0,117,new B.S(a3,a3,a1,a1,a3,a3))
s.b.m(0,1,new B.S(b6,b6,b6,b6,b6,b6))
r=[r]
p=H.d(H.b([b1],r),"$ia",r,"$aa")
s.c.m(0,200,p)
p=H.d(H.b([b2],r),"$ia",r,"$aa")
s.c.m(0,201,p)
p=H.d(H.b([b5],r),"$ia",r,"$aa")
s.c.m(0,202,p)
p=H.d(H.b([b3],r),"$ia",r,"$aa")
s.c.m(0,203,p)
p=H.d(H.b([b4],r),"$ia",r,"$aa")
s.c.m(0,204,p)
r=H.d(H.b([b0,a8,a9],r),"$ia",r,"$aa")
s.c.m(0,205,r)
s.f=s.dI("selection")
s.r=s.dI("crosshair")
b7=B.mt(s,B.mS())
b8=B.m0(t.r,b7)
b9=new M.df()
b9.shK(0,O.jc(E.U))
b9.d.bE(b9.giH(),b9.giJ())
b9.e=null
b9.f=null
b9.r=null
b9.x=null
c0=X.lQ(!0,!0,!1,new V.aR(0.576,0.784,0.929,1),2000,null,0)
c1=new X.dD()
c1.c=1.0471975511965976
c1.d=0.1
c1.e=2000
c1.sf5(null)
r=c1.c
if(!(Math.abs(r-1.0471975511965976)<$.y().a)){c1.c=1.0471975511965976
r=new D.D("fov",r,1.0471975511965976,c1,[P.x])
r.b=!0
c1.b5(r)}r=c1.d
if(!(Math.abs(r-0.1)<$.y().a)){c1.d=0.1
r=new D.D("near",r,0.1,c1,[P.x])
r.b=!0
c1.b5(r)}r=c1.e
if(!(Math.abs(r-2000)<$.y().a)){c1.e=2000
r=new D.D("far",r,2000,c1,[P.x])
r.b=!0
c1.b5(r)}r=b9.a
if(r!==c1){if(r!=null)r.gu().Z(0,b9.gb3())
m=b9.a
b9.a=c1
c1.gu().h(0,b9.gb3())
r=new D.D("camera",m,b9.a,b9,[X.da])
r.b=!0
b9.b4(r)}r=b9.b
if(r!==c0){if(r!=null)r.gu().Z(0,b9.gb3())
m=b9.b
b9.b=c0
c0.gu().h(0,b9.gb3())
r=new D.D("target",m,b9.b,b9,[X.dR])
r.b=!0
b9.b4(r)}r=b9.e
if(r==null){r=D.G()
b9.e=r}r.h(0,b7.gm0())
b9.a.sf5(b8.x)
for(r=b7.e,p=r.length,c2=0;c2<r.length;r.length===p||(0,H.C)(r),++c2){c3=r[c2]
o=b9.d
n=H.q(o,0)
H.z(c3,n)
c4=[n]
if(o.bn(H.b([c3],c4))){c5=o.a
c6=c5.length
C.a.h(c5,c3)
n=H.d(H.b([c3],c4),"$il",[n],"$al")
o=o.c
if(o!=null)o.$2(c6,n)}}b9.d.h(0,b8.db)
b7.f=b8
r=t.d
if(r!==b9){if(r!=null)r.gu().Z(0,t.gdz())
t.d=b9
b9.gu().h(0,t.gdz())
t.dA()}b8.dt()
P.hl(C.Q,b7.gm5())
P.hl(C.P,b7.gfC())
P.hl(C.N,b7.gkN())
P.hl(C.O,new B.j_(t,b7))},
mS:function(){var u,t,s,r,q
u=P.kp().gfl().l(0,"seed")
if(u!=null){if(u==="test")return new B.hd()
if(u==="checkers"){t=new B.eL()
t.a=!0
t.b=10
return t}s=H.kf(u,null)
if(s==null)s=-1}else s=-1
if(s<=0){s=C.M.lq(4294967296)
r=P.kp().fm(P.k1(["seed",""+s],P.m,null))
t=window.history
q=r.i(0)
t.toString;(t&&C.R).jv(t,new P.iw([],[]).dq(null),null,q)}t=new B.fH()
t.a=L.m_(s)
t.b=new Uint8Array(484)
return t},
m0:function(a,b){var u=new B.dE(b)
u.fZ(a,b)
return u},
jl:function(a,b){var u,t,s
u=new B.fY(a,b)
if(b==null){t=$.a8()
s=$.ad()
u.b=new Z.a7(t.a|s.a|$.ai().a)}t=a==null?null:a.d
t=t==null?null:t.length
if(t==null)t=1
t=new Array(t)
t.fixed$length=Array
u.see(H.b(t,[F.cA]))
return u},
mt:function(a,b){var u=new B.e7(a,b)
u.h3(a,b)
return u},
ar:function ar(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eL:function eL(){this.b=this.a=null},
bI:function bI(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
eM:function eM(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j_:function j_(a,b){this.a=a
this.b=b},
S:function S(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fv:function fv(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a){var _=this
_.b=_.a=null
_.c=a
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null},
fF:function fF(a){this.a=a},
fH:function fH(){this.c=this.b=this.a=null},
fJ:function fJ(a){this.a=a},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a){this.a=a},
fY:function fY(a,b){this.a=a
this.b=b
this.c=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
hd:function hd(){this.a=null},
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
e7:function e7(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},O={
jc:function(a){var u=new O.T([a])
u.bF(a)
return u},
T:function T(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cv:function cv(){this.b=this.a=null},
k3:function(){var u,t,s
u=new O.bU()
u.shE(O.jc(V.ak))
u.e.bE(u.giv(),u.gix())
t=new O.aW(u,"emission")
t.c=C.d
t.f=new V.a5(0,0,0)
u.f=t
t=new O.aW(u,"ambient")
t.c=C.d
t.f=new V.a5(0,0,0)
u.r=t
t=new O.aW(u,"diffuse")
t.c=C.d
t.f=new V.a5(0,0,0)
u.x=t
t=new O.aW(u,"invDiffuse")
t.c=C.d
t.f=new V.a5(0,0,0)
u.y=t
t=new O.fu(u,"specular")
t.c=C.d
t.f=new V.a5(0,0,0)
t.ch=100
u.z=t
t=new O.fr(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aW(u,"reflect")
t.c=C.d
t.f=new V.a5(0,0,0)
u.cx=t
t=new O.ft(u,"refract")
t.c=C.d
t.f=new V.a5(0,0,0)
t.ch=1
u.cy=t
t=new O.fq(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dq()
t.bF(D.a4)
t.shc(H.b([],[D.bp]))
t.shd(H.b([],[D.dF]))
t.she(H.b([],[D.dO]))
t.shf(H.b([],[D.dT]))
t.shg(H.b([],[D.dU]))
t.shh(H.b([],[D.dV]))
t.Q=null
t.ch=null
t.cl(t.git(),t.gja(),t.gje())
u.dx=t
s=t.Q
if(s==null){s=D.G()
t.Q=s
t=s}else t=s
t.h(0,u.gjE())
t=u.dx
s=t.ch
if(s==null){s=D.G()
t.ch=s
t=s}else t=s
t.h(0,u.gbG())
u.dy=null
return u},
bU:function bU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cu:function cu(){},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aW:function aW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ft:function ft(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fu:function fu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c1:function c1(){}},E={
bN:function(a,b,c,d,e,f){var u,t,s,r,q,p
u=new E.U()
u.a=d
u.b=!0
u.sh5(0,O.jc(E.U))
u.y.bE(u.gls(),u.glv())
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
t=u.c
if(t!=e){u.c=e
u.d=e
u.e=null
if(t!=null)t.gu().Z(0,u.gca())
s=u.c
if(s!=null)s.gu().h(0,u.gca())
r=new D.D("shape",t,u.c,u,[F.dN])
r.b=!0
u.aa(r)}t=u.f
if(t!=f){if(t!=null)t.gu().Z(0,u.gfd())
q=u.f
u.f=f
if(f!=null)f.gu().h(0,u.gfd())
u.dN()
r=new D.D("technique",q,u.f,u,[O.c1])
r.b=!0
u.aa(r)}if(!J.Z(u.r,c)){p=u.r
if(p!=null)p.gu().Z(0,u.gfa())
if(c!=null)c.gu().h(0,u.gfa())
u.r=c
r=new D.D("mover",p,c,u,[U.a6])
r.b=!0
u.aa(r)}if(a!=null)u.y.aT(0,a)
return u},
mg:function(a,b){var u=new E.fO(a,b)
u.h_(a,b)
return u},
mk:function(a,b,c,d,e){var u,t,s,r
u=J.N(a)
if(!!u.$ibG)return E.kl(a,!0,!0,!0,!1)
t=W.jb(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.ges(a).h(0,t)
r=E.kl(t,!0,!0,!0,!1)
r.a=a
return r},
kl:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dW()
t=P.k1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.n.cg(a,"webgl",t)
s=H.h(s==null?C.n.cg(a,"experimental-webgl",t):s,"$ic0")
if(s==null)H.r(P.v("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mg(s,a)
r=new T.hi(s)
r.b=H.ac((s&&C.b).ds(s,3379))
r.c=H.ac(C.b.ds(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e2(a)
q=new X.fe()
q.c=new X.O(!1,!1,!1)
q.sju(P.lW(null,null,null,P.i))
r.b=q
q=new X.fw(r)
q.f=0
q.r=V.bb()
q.x=V.bb()
q.Q=1
q.ch=1
r.c=q
q=new X.fi(r)
q.r=0
q.x=V.bb()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hn(r)
q.e=0
q.f=V.bb()
q.r=V.bb()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shW(H.b([],[[P.cE,P.M]]))
q=r.z
p=document
o=W.af
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.ab(p,"contextmenu",H.o(r.giN(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.ab(a,"focus",H.o(r.giT(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.ab(a,"blur",H.o(r.giD(),l),!1,m))
q=r.z
k=W.aV
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.ab(p,"keyup",H.o(r.gcF(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.ab(p,"keydown",H.o(r.gcn(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.ab(a,"mousedown",H.o(r.gj0(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.ab(a,"mouseup",H.o(r.gj4(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.ab(a,"mousemove",H.o(r.gj2(),n),!1,o))
k=r.z
j=W.b1;(k&&C.a).h(k,W.ab(a,H.P(W.lO(a)),H.o(r.gj6(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.ab(p,"mousemove",H.o(r.giP(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.ab(p,"mouseup",H.o(r.giR(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.ab(p,"pointerlockchange",H.o(r.gj8(),l),!1,m))
m=r.z
l=W.aH
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.ab(a,"touchstart",H.o(r.gjm(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.ab(a,"touchend",H.o(r.gji(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.ab(a,"touchmove",H.o(r.gjk(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.as(Date.now(),!1)
u.cy=0
u.ec()
return u},
eH:function eH(){},
U:function U(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
h6:function h6(a,b){this.c=a
this.a=b
this.b=null},
dW:function dW(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a}},Z={
kB:function(a,b,c){var u
H.d(c,"$ia",[P.x],"$aa")
u=a.createBuffer()
C.b.aG(a,b,u)
C.b.eq(a,b,new Float32Array(H.c5(c)),35044)
C.b.aG(a,b,null)
return new Z.e5(b,u)},
e6:function(a,b,c){var u
H.d(c,"$ia",[P.i],"$aa")
u=a.createBuffer()
C.b.aG(a,b,u)
C.b.eq(a,b,new Int16Array(H.c5(c)),35044)
C.b.aG(a,b,null)
return new Z.e5(b,u)},
aJ:function(a){return new Z.a7(a)},
e5:function e5(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hW:function hW(a){this.a=a},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a){this.a=a}},D={
G:function(){var u=new D.bO()
u.sat(null)
u.sbL(null)
u.c=null
u.d=0
return u},
eK:function eK(){},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=null},
f0:function f0(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
br:function br(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bs:function bs(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
D:function D(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dq:function dq(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dF:function dF(){},
dO:function dO(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){}},X={
aU:function(){var u=new X.dp()
u.bF(X.K)
u.e=null
u.f=null
u.r=!1
u.x=null
u.y=null
u.cl(u.gh6(),u.gh8(),u.gha())
return u},
d9:function d9(a,b){this.a=a
this.b=b},
K:function K(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.c=a
this.a=b
this.b=null},
dp:function dp(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fe:function fe(){var _=this
_.d=_.c=_.b=_.a=null},
du:function du(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},
fi:function fi(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},
fw:function fw(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fG:function fG(){},
dY:function dY(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},
hn:function hn(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
e2:function e2(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lQ:function(a,b,c,d,e,f,g){var u,t
u=new X.f6()
if(d==null)t=new V.aR(0,0,0,1)
else t=d
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ki
if(t==null){t=V.jk(0,0,1,1)
$.ki=t}u.r=t
return u},
da:function da(){},
f6:function f6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){}},V={
at:function(a){return new V.a_(a)},
j1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.b0(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.c.b_("null",c)
return C.c.b_(C.j.fs(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
ca:function(a,b,c){var u,t,s,r,q,p
H.d(a,"$ia",[P.x],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.A(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.m(u,p,C.c.b_(u[p],s))}return u},
jG:function(a,b){return C.j.az(Math.pow(b,C.o.c7(Math.log(H.c8(a))/Math.log(b))))},
k4:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.ay(u,0,-t,0,1,0,t,0,u)},
bV:function(){var u=$.k9
if(u==null){u=V.aX(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.k9=u}return u},
aX:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dw:function(a,b,c){return V.aX(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jj:function(a,b,c,d){return V.aX(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
k7:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aX(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
k8:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aX(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
k6:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.A(0,Math.sqrt(c.E(c)))
t=b.bt(u)
s=t.A(0,Math.sqrt(t.E(t)))
r=u.bt(s)
q=new V.B(a.a,a.b,a.c)
p=s.M(0).E(q)
o=r.M(0).E(q)
n=u.M(0).E(q)
return V.aX(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bb:function(){var u=$.kd
if(u==null){u=new V.Q(0,0)
$.kd=u}return u},
dG:function(){var u=$.cy
if(u==null){u=new V.u(0,0,0)
$.cy=u}return u},
bv:function(a,b,c){return new V.u(a,b,c)},
kh:function(a,b){return new V.dJ(a.a,a.b,a.c,b.a,b.b,b.c)},
jk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dK(a,b,c,d)},
fN:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.k()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.k()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.k()
c+=f
f=-f}return new V.bz(a,b,c,d,e,f)},
cQ:function(){var u=$.ky
if(u==null){u=new V.B(0,0,0)
$.ky=u}return u},
kA:function(){var u=$.kx
if(u==null){u=new V.B(0,1,0)
$.kx=u}return u},
js:function(){var u=$.hM
if(u==null){u=new V.B(0,0,1)
$.hM=u}return u},
kz:function(){var u=$.kv
if(u==null){u=new V.B(0,0,-1)
$.kv=u}return u},
jr:function(a,b,c){return new V.B(a,b,c)},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.a=a},
a_:function a_(a){this.a=a},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ak:function ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Q:function Q(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
X:function X(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function(a){var u=new V.fU()
u.h0(a)
return u},
eB:function eB(){},
b7:function b7(){},
dv:function dv(){},
ba:function ba(){this.a=null},
fU:function fU(){this.a=null},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b){this.a=a
this.b=b
this.c=null},
hm:function hm(){this.c=this.b=this.a=null},
cH:function cH(a){this.b=a
this.a=this.c=null},
mi:function(a,b){var u=new V.h2()
u.h2(a,!0)
return u},
h2:function h2(){this.b=this.a=null},
h4:function h4(a){this.a=a},
h3:function h3(a){this.a=a}},U={
db:function(){var u=new U.eN()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
bo:function(a){var u=new U.dc()
u.a=a
return u},
f7:function(a){var u=new U.cp()
u.bF(U.a6)
u.bE(u.ghi(),u.gjc())
u.aT(0,a)
u.e=null
u.f=V.bV()
u.r=0
return u},
eN:function eN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){this.b=this.a=null},
cp:function cp(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
cs:function cs(){var _=this
_.d=_.c=_.b=_.a=null},
a6:function a6(){},
dL:function dL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lY:function(a,b){var u,t
u=a.ax
t=new A.fp(b,u)
t.h1(b,u)
t.fY(a,b)
return t},
jo:function(a,b,c,d,e){var u=new A.hs(a,b,c,e)
u.f=d
u.skm(P.lX(d,0,!1,P.i))
return u},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a){this.a=a},
fp:function fp(a,b){var _=this
_.bT=_.eA=_.bS=_.ax=_.aI=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eQ=_.d2=_.eP=_.c5=_.eO=_.eN=_.c4=_.c3=_.eM=_.eL=_.c2=_.c1=_.c0=_.eK=_.eJ=_.c_=_.eI=_.eH=_.bZ=_.eG=_.eF=_.bY=_.bX=_.eE=_.eD=_.bW=_.bV=_.eC=_.eB=_.bU=null
_.d7=_.eU=_.d6=_.eT=_.d5=_.eS=_.d4=_.eR=_.d3=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fs:function fs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aI=b3
_.ax=b4
_.bS=b5},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cK:function cK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cN:function cN(a,b,c,d,e,f,g,h,i,j){var _=this
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
cL:function cL(a,b,c,d,e,f,g,h,i,j){var _=this
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
cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cB:function cB(){},
bK:function bK(a,b){this.a=a
this.b=b},
dZ:function dZ(){},
hy:function hy(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b,c,d){var _=this
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
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b,c,d){var _=this
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
c3:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.b0()
t=new F.hS(u)
t.sbo(H.b([],[F.bY]))
u.b=t
t=new F.hR(u)
s=[F.bu]
t.sia(H.b([],s))
t.sib(H.b([],s))
u.c=t
t=new F.hO(u)
s=[F.a9]
t.shX(H.b([],s))
t.shY(H.b([],s))
t.shZ(H.b([],s))
u.d=t
u.e=0
t=h.a
u.f=(t&$.a8().a)!==0?d:null
u.r=(t&$.ai().a)!==0?e:null
u.x=(t&$.bk().a)!==0?b:null
u.y=(t&$.ad().a)!==0?f:null
u.z=(t&$.bl().a)!==0?g:null
u.Q=(t&$.lr().a)!==0?c:null
u.ch=(t&$.cf().a)!==0?i:0
u.cx=(t&$.bj().a)!==0?a:null
return u},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bu:function bu(){},
bY:function bY(){},
cA:function cA(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
dN:function dN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cC:function cC(){},
fV:function fV(a){this.a=a
this.b=null},
fW:function fW(a){this.a=a
this.b=null},
fX:function fX(a){this.a=a
this.b=null},
b0:function b0(){var _=this
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
this.b=null}},T={cF:function cF(){},bA:function bA(){},hg:function hg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},hh:function hh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},hi:function hi(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hj:function hj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jg.prototype={}
J.ae.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.cz(a)},
i:function(a){return"Instance of '"+H.c_(a)+"'"}}
J.fb.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iY:1}
J.dm.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iF:1}
J.dn.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.fE.prototype={}
J.c2.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.lb()]
if(u==null)return this.fU(a)
return"JavaScript function for "+H.k(J.aO(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijd:1}
J.aT.prototype={
h:function(a,b){H.z(b,H.q(a,0))
if(!!a.fixed$length)H.r(P.a2("add"))
a.push(b)},
Z:function(a,b){var u
if(!!a.fixed$length)H.r(P.a2("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
aT:function(a,b){var u,t
H.d(b,"$il",[H.q(a,0)],"$al")
if(!!a.fixed$length)H.r(P.a2("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
a6:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bL(a))}},
B:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.m(u,t,H.k(a[t]))
return u.join(b)},
ll:function(a){return this.B(a,"")},
lf:function(a,b,c,d){var u,t,s
H.z(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.bL(a))}return t},
ap:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fS:function(a,b,c){if(b<0||b>a.length)throw H.f(P.aa(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aa(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
gaZ:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.lS())},
aw:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
i:function(a){return P.je(a,"[","]")},
gX:function(a){return new J.ao(a,a.length,0,[H.q(a,0)])},
gJ:function(a){return H.cz(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.r(P.a2("set length"))
if(b<0)throw H.f(P.aa(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.bd(a,b))
if(b>=a.length||b<0)throw H.f(H.bd(a,b))
return a[b]},
m:function(a,b,c){H.z(c,H.q(a,0))
if(!!a.immutable$list)H.r(P.a2("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.bd(a,b))
if(b>=a.length||b<0)throw H.f(H.bd(a,b))
a[b]=c},
$iaw:1,
$aaw:function(){},
$il:1,
$ia:1}
J.jf.prototype={}
J.ao.prototype={
gN:function(){return this.d},
C:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.C(u))
s=this.c
if(s>=t){this.sdE(null)
return!1}this.sdE(u[s]);++this.c
return!0},
sdE:function(a){this.d=H.z(a,H.q(this,0))},
$iaS:1}
J.ct.prototype={
cZ:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.e.gc9(b)
if(this.gc9(a)===u)return 0
if(this.gc9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc9:function(a){return a===0?1/a<0:a<0},
az:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a2(""+a+".toInt()"))},
c7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a2(""+a+".floor()"))},
ay:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a2(""+a+".round()"))},
kT:function(a,b,c){if(C.e.cZ(b,c)>0)throw H.f(H.aq(b))
if(this.cZ(a,b)<0)return b
if(this.cZ(a,c)>0)return c
return a},
fs:function(a,b){var u
if(b>20)throw H.f(P.aa(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gc9(a))return"-"+u
return u},
bA:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.f(P.aa(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.a2("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.j("0",r)},
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
b0:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eg(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.eg(a,b)},
eg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a2("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
fR:function(a,b){if(b<0)throw H.f(H.aq(b))
return b>31?0:a<<b>>>0},
bc:function(a,b){var u
if(a>0)u=this.ef(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jQ:function(a,b){if(b<0)throw H.f(H.aq(b))
return this.ef(a,b)},
ef:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iah:1}
J.dl.prototype={
dm:function(a,b){var u=this.fR(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$ii:1}
J.dk.prototype={}
J.bT.prototype={
a0:function(a,b){if(b<0)throw H.f(H.bd(a,b))
if(b>=a.length)H.r(H.bd(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.f(H.bd(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.f(P.j9(b,null,null))
return a+b},
bj:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aq(b))
c=P.by(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aq(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.f(P.aa(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ak:function(a,b){return this.al(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aq(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.f(P.fL(b,null,null))
if(b>c)throw H.f(P.fL(b,null,null))
if(c>a.length)throw H.f(P.fL(c,null,null))
return a.substring(b,c)},
b1:function(a,b){return this.v(a,b,null)},
j:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
lA:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.j(c,u)+a},
b_:function(a,b){return this.lA(a,b," ")},
f3:function(a,b,c){var u
if(c<0||c>a.length)throw H.f(P.aa(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f2:function(a,b){return this.f3(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gq:function(a){return a.length},
$iaw:1,
$aaw:function(){},
$ikb:1,
$im:1}
H.a3.prototype={
gq:function(a){return this.a.length},
l:function(a,b){return C.c.a0(this.a,b)},
$acP:function(){return[P.i]},
$aV:function(){return[P.i]},
$al:function(){return[P.i]},
$aa:function(){return[P.i]}}
H.eW.prototype={}
H.ds.prototype={
gN:function(){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.be(u)
s=t.gq(u)
if(this.b!==s)throw H.f(P.bL(u))
r=this.c
if(r>=s){this.sbm(null)
return!1}this.sbm(t.ap(u,r));++this.c
return!0},
sbm:function(a){this.d=H.z(a,H.q(this,0))},
$iaS:1}
H.fn.prototype={
gX:function(a){return new H.fo(J.cg(this.a),this.b,this.$ti)},
gq:function(a){return J.b3(this.a)},
ap:function(a,b){return this.b.$1(J.j6(this.a,b))},
$al:function(a,b){return[b]}}
H.fo.prototype={
C:function(){var u=this.b
if(u.C()){this.sbm(this.c.$1(u.gN()))
return!0}this.sbm(null)
return!1},
gN:function(){return this.a},
sbm:function(a){this.a=H.z(a,H.q(this,1))},
$aaS:function(a,b){return[b]}}
H.hX.prototype={
gX:function(a){return new H.hY(J.cg(this.a),this.b,this.$ti)}}
H.hY.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gN()))return!0
return!1},
gN:function(){return this.a.gN()}}
H.bQ.prototype={}
H.cP.prototype={
m:function(a,b,c){H.z(c,H.av(this,"cP",0))
throw H.f(P.a2("Cannot modify an unmodifiable list"))}}
H.e0.prototype={}
H.eP.prototype={
i:function(a){return P.ji(this)},
m:function(a,b,c){H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
return H.lL()},
$iE:1}
H.eQ.prototype={
gq:function(a){return this.a},
bR:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bR(b))return
return this.dZ(b)},
dZ:function(a){return this.b[H.P(a)]},
a6:function(a,b){var u,t,s,r,q
u=H.q(this,1)
H.o(b,{func:1,ret:-1,args:[H.q(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.z(this.dZ(q),u))}}}
H.fM.prototype={}
H.hp.prototype={
ar:function(a){var u,t,s
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
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fd.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.k(this.a)+")"}}
H.hC.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j0.prototype={
$1:function(a){if(!!J.N(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eh.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iap:1}
H.ck.prototype={
i:function(a){return"Closure '"+H.c_(this).trim()+"'"},
$ijd:1,
gm7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hc.prototype={}
H.h7.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.ch.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cz(this.a)
else t=typeof u!=="object"?J.bF(u):H.cz(u)
return(t^H.cz(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.c_(u)+"'")}}
H.hr.prototype={
i:function(a){return this.a}}
H.eJ.prototype={
i:function(a){return this.a}}
H.fS.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.ax.prototype={
gq:function(a){return this.a},
bR:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dV(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dV(t,a)}else return this.lj(a)},
lj:function(a){var u=this.d
if(u==null)return!1
return this.dc(this.cz(u,J.bF(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bI(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bI(r,b)
s=t==null?null:t.b
return s}else return this.lk(b)},
lk:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cz(u,J.bF(a)&0x3ffffff)
s=this.dc(t,a)
if(s<0)return
return t[s].b},
m:function(a,b,c){var u,t,s,r,q,p
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cD()
this.b=u}this.dJ(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cD()
this.c=t}this.dJ(t,b,c)}else{s=this.d
if(s==null){s=this.cD()
this.d=s}r=J.bF(b)&0x3ffffff
q=this.cz(s,r)
if(q==null)this.cL(s,r,[this.cE(b,c)])
else{p=this.dc(q,b)
if(p>=0)q[p].b=c
else q.push(this.cE(b,c))}}},
a6:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bL(this))
u=u.c}},
dJ:function(a,b,c){var u
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
u=this.bI(a,b)
if(u==null)this.cL(a,b,this.cE(b,c))
else u.b=c},
cE:function(a,b){var u,t
u=new H.ff(H.z(a,H.q(this,0)),H.z(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
dc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
i:function(a){return P.ji(this)},
bI:function(a,b){return a[b]},
cz:function(a,b){return a[b]},
cL:function(a,b,c){a[b]=c},
hT:function(a,b){delete a[b]},
dV:function(a,b){return this.bI(a,b)!=null},
cD:function(){var u=Object.create(null)
this.cL(u,"<non-identifier-key>",u)
this.hT(u,"<non-identifier-key>")
return u},
$ik0:1}
H.ff.prototype={}
H.dr.prototype={
gq:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.fg(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fg.prototype={
gN:function(){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bL(u))
else{u=this.c
if(u==null){this.sdF(null)
return!1}else{this.sdF(u.a)
this.c=this.c.c
return!0}}},
sdF:function(a){this.d=H.z(a,H.q(this,0))},
$iaS:1}
H.iU.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.iV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.iW.prototype={
$1:function(a){return this.a(H.P(a))},
$S:31}
H.fc.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikb:1,
$ime:1}
H.bW.prototype={$ibW:1,$iml:1}
H.dx.prototype={
gq:function(a){return a.length},
$iaw:1,
$aaw:function(){},
$ib5:1,
$ab5:function(){}}
H.dy.prototype={
l:function(a,b){H.bc(b,a,a.length)
return a[b]},
m:function(a,b,c){H.n6(c)
H.bc(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.x]},
$aV:function(){return[P.x]},
$il:1,
$al:function(){return[P.x]},
$ia:1,
$aa:function(){return[P.x]}}
H.dz.prototype={
m:function(a,b,c){H.ac(c)
H.bc(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.i]},
$aV:function(){return[P.i]},
$il:1,
$al:function(){return[P.i]},
$ia:1,
$aa:function(){return[P.i]}}
H.fx.prototype={
l:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fy.prototype={
l:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fz.prototype={
l:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fA.prototype={
l:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.dA.prototype={
gq:function(a){return a.length},
l:function(a,b){H.bc(b,a,a.length)
return a[b]},
$ioe:1}
H.bX.prototype={
gq:function(a){return a.length},
l:function(a,b){H.bc(b,a,a.length)
return a[b]},
$ibX:1,
$iL:1}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
P.i_.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:23}
P.hZ.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.i0.prototype={
$0:function(){this.a.$0()},
$S:2}
P.i1.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ei.prototype={
hl:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c9(new P.iz(this,b),0),a)
else throw H.f(P.a2("`setTimeout()` not found."))},
hm:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c9(new P.iy(this,a,Date.now(),b),0),a)
else throw H.f(P.a2("Periodic timer."))},
$iaZ:1}
P.iz.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iy.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fW(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b2.prototype={
lp:function(a){if(this.c!==6)return!0
return this.b.b.dl(H.o(this.d,{func:1,ret:P.Y,args:[P.M]}),a.a,P.Y,P.M)},
li:function(a){var u,t,s,r
u=this.e
t=P.M
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.eo(u,{func:1,args:[P.M,P.ap]}))return H.jC(r.lQ(u,a.a,a.b,null,t,P.ap),s)
else return H.jC(r.dl(H.o(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aB.prototype={
fq:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.R
if(t!==C.k){t.toString
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mV(b,t)}H.o(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aB(0,$.R,[c])
r=b==null?1:3
this.dK(new P.b2(s,r,a,b,[u,c]))
return s},
lV:function(a,b){return this.fq(a,null,b)},
dK:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$ib2")
this.c=a}else{if(u===2){t=H.h(this.c,"$iaB")
u=t.a
if(u<4){t.dK(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iP(null,null,u,H.o(new P.i8(this,a),{func:1,ret:-1}))}},
ea:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$ib2")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iaB")
t=p.a
if(t<4){p.ea(a)
return}this.a=t
this.c=p.c}u.a=this.bM(a)
t=this.b
t.toString
P.iP(null,null,t,H.o(new P.ic(u,this),{func:1,ret:-1}))}},
cJ:function(){var u=H.h(this.c,"$ib2")
this.c=null
return this.bM(u)},
bM:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dR:function(a){var u,t,s
u=H.q(this,0)
H.jC(a,{futureOr:1,type:u})
t=this.$ti
if(H.d1(a,"$ico",t,"$aco"))if(H.d1(a,"$iaB",t,null))P.kC(a,this)
else P.my(a,this)
else{s=this.cJ()
H.z(a,u)
this.a=4
this.c=a
P.cS(this,s)}},
dS:function(a,b){var u
H.h(b,"$iap")
u=this.cJ()
this.a=8
this.c=new P.aj(a,b)
P.cS(this,u)},
$ico:1}
P.i8.prototype={
$0:function(){P.cS(this.a,this.b)},
$S:2}
P.ic.prototype={
$0:function(){P.cS(this.b,this.a.a)},
$S:2}
P.i9.prototype={
$1:function(a){var u=this.a
u.a=0
u.dR(a)},
$S:23}
P.ia.prototype={
$2:function(a,b){H.h(b,"$iap")
this.a.dS(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.ib.prototype={
$0:function(){this.a.dS(this.b,this.c)},
$S:2}
P.ig.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fp(H.o(r.d,{func:1}),null)}catch(q){t=H.aK(q)
s=H.cb(q)
if(this.d){r=H.h(this.a.a.c,"$iaj").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$iaj")
else p.b=new P.aj(t,s)
p.a=!0
return}if(!!J.N(u).$ico){if(u instanceof P.aB&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$iaj")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.lV(new P.ih(o),null)
r.a=!1}},
$S:3}
P.ih.prototype={
$1:function(a){return this.a},
$S:49}
P.ie.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.z(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.dl(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aK(o)
t=H.cb(o)
s=this.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.id.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$iaj")
r=this.c
if(r.lp(u)&&r.e!=null){q=this.b
q.b=r.li(u)
q.a=!1}}catch(p){t=H.aK(p)
s=H.cb(p)
r=H.h(this.a.a.c,"$iaj")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e8.prototype={}
P.h8.prototype={
gq:function(a){var u,t,s,r
u={}
t=new P.aB(0,$.R,[P.i])
u.a=0
s=H.q(this,0)
r=H.o(new P.ha(u,this),{func:1,ret:-1,args:[s]})
H.o(new P.hb(u,t),{func:1,ret:-1})
W.ab(this.a,this.b,r,!1,s)
return t}}
P.ha.prototype={
$1:function(a){H.z(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.q(this.b,0)]}}}
P.hb.prototype={
$0:function(){this.b.dR(this.a.a)},
$S:2}
P.cE.prototype={}
P.h9.prototype={}
P.aZ.prototype={}
P.aj.prototype={
i:function(a){return H.k(this.a)},
$ibq:1}
P.iI.prototype={$ior:1}
P.iO.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dC()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:2}
P.ip.prototype={
lR:function(a){var u,t,s
H.o(a,{func:1,ret:-1})
try{if(C.k===$.R){a.$0()
return}P.kO(null,null,this,a,-1)}catch(s){u=H.aK(s)
t=H.cb(s)
P.iN(null,null,this,u,H.h(t,"$iap"))}},
lS:function(a,b,c){var u,t,s
H.o(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.k===$.R){a.$1(b)
return}P.kP(null,null,this,a,b,-1,c)}catch(s){u=H.aK(s)
t=H.cb(s)
P.iN(null,null,this,u,H.h(t,"$iap"))}},
kP:function(a,b){return new P.ir(this,H.o(a,{func:1,ret:b}),b)},
cV:function(a){return new P.iq(this,H.o(a,{func:1,ret:-1}))},
eo:function(a,b){return new P.is(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
fp:function(a,b){H.o(a,{func:1,ret:b})
if($.R===C.k)return a.$0()
return P.kO(null,null,this,a,b)},
dl:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.R===C.k)return a.$1(b)
return P.kP(null,null,this,a,b,c,d)},
lQ:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.R===C.k)return a.$2(b,c)
return P.mW(null,null,this,a,b,c,d,e,f)}}
P.ir.prototype={
$0:function(){return this.a.fp(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iq.prototype={
$0:function(){return this.a.lR(this.b)},
$S:3}
P.is.prototype={
$1:function(a){var u=this.c
return this.a.lS(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.il.prototype={
gX:function(a){return P.kE(this,this.r,H.q(this,0))},
gq:function(a){return this.a},
h:function(a,b){var u
H.z(b,H.q(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.kF()
this.c=u}return this.hN(u,b)}else return this.ho(b)},
ho:function(a){var u,t,s
H.z(a,H.q(this,0))
u=this.d
if(u==null){u=P.kF()
this.d=u}t=this.dT(a)
s=u[t]
if(s==null)u[t]=[this.cr(a)]
else{if(this.e_(s,a)>=0)return!1
s.push(this.cr(a))}return!0},
Z:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.jA(this.c,b)
else return this.jz(b)},
jz:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.i1(u,a)
s=this.e_(t,a)
if(s<0)return!1
this.eh(t.splice(s,1)[0])
return!0},
hN:function(a,b){H.z(b,H.q(this,0))
if(H.h(a[b],"$icT")!=null)return!1
a[b]=this.cr(b)
return!0},
jA:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icT")
if(u==null)return!1
this.eh(u)
delete a[b]
return!0},
e3:function(){this.r=1073741823&this.r+1},
cr:function(a){var u,t
u=new P.cT(H.z(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.e3()
return u},
eh:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.e3()},
dT:function(a){return J.bF(a)&1073741823},
i1:function(a,b){return a[this.dT(b)]},
e_:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cT.prototype={}
P.im.prototype={
gN:function(){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bL(u))
else{u=this.c
if(u==null){this.sdP(null)
return!1}else{this.sdP(H.z(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sdP:function(a){this.d=H.z(a,H.q(this,0))},
$iaS:1}
P.fh.prototype={$il:1,$ia:1}
P.V.prototype={
gX:function(a){return new H.ds(a,this.gq(a),0,[H.ep(this,a,"V",0)])},
ap:function(a,b){return this.l(a,b)},
lX:function(a,b){var u,t
u=H.b([],[H.ep(this,a,"V",0)])
C.a.sq(u,this.gq(a))
for(t=0;t<this.gq(a);++t)C.a.m(u,t,this.l(a,t))
return u},
lW:function(a){return this.lX(a,!0)},
eV:function(a,b,c,d){var u
H.z(d,H.ep(this,a,"V",0))
P.by(b,c,this.gq(a),null,null,null)
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.je(a,"[","]")}}
P.fj.prototype={}
P.fk.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.k(a)
u.a=t+": "
u.a+=H.k(b)},
$S:10}
P.fl.prototype={
a6:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
for(u=new H.dr(this,[H.q(this,0)]),u=u.gX(u);u.C();){t=u.d
b.$2(t,this.l(0,t))}},
gq:function(a){return this.a},
i:function(a){return P.ji(this)},
$iE:1}
P.iA.prototype={
m:function(a,b,c){H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
throw H.f(P.a2("Cannot modify unmodifiable map"))}}
P.fm.prototype={
l:function(a,b){return this.a.l(0,b)},
m:function(a,b,c){this.a.m(0,H.z(b,H.q(this,0)),H.z(c,H.q(this,1)))},
a6:function(a,b){this.a.a6(0,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gq:function(a){var u=this.a
return u.gq(u)},
i:function(a){return J.aO(this.a)},
$iE:1}
P.e1.prototype={}
P.it.prototype={
i:function(a){return P.je(this,"{","}")},
ap:function(a,b){var u,t,s
if(b<0)H.r(P.aa(b,0,null,"index",null))
for(u=P.kE(this,this.r,H.q(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.f(P.cr(b,this,"index",null,t))},
$il:1,
$ikj:1}
P.ee.prototype={}
P.em.prototype={}
P.eF.prototype={
lr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.by(b,c,a.length,null,null,null)
u=$.lt()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.I(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iT(C.c.I(a,n))
j=H.iT(C.c.I(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.c.v(a,s,t)
r.a=g+H.dH(m)
s=n
continue}}throw H.f(P.a1("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.v(a,s,c)
f=g.length
if(q>=0)P.jT(a,p,c,q,o,f)
else{e=C.e.b0(f-1,4)+1
if(e===1)throw H.f(P.a1("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.bj(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jT(a,p,c,q,o,d)
else{e=C.e.b0(d,4)
if(e===1)throw H.f(P.a1("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.bj(a,c,c,e===2?"==":"=")}return a},
$abJ:function(){return[[P.a,P.i],P.m]}}
P.eG.prototype={
$abM:function(){return[[P.a,P.i],P.m]}}
P.bJ.prototype={}
P.bM.prototype={}
P.eX.prototype={
$abJ:function(){return[P.m,[P.a,P.i]]}}
P.hJ.prototype={
gld:function(){return C.L}}
P.hL.prototype={
bs:function(a,b,c){var u,t,s
c=P.by(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iH(t)
if(s.i_(a,b,c)!==c)s.ej(J.lz(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mP(0,s.b,t.length)))},
d_:function(a){return this.bs(a,0,null)},
$abM:function(){return[P.m,[P.a,P.i]]}}
P.iH.prototype={
ej:function(a,b){var u,t,s,r,q
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
i_:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ej(r,C.c.I(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hK.prototype={
bs:function(a,b,c){var u,t,s,r
H.d(a,"$ia",[P.i],"$aa")
u=P.mo(!1,a,b,c)
if(u!=null)return u
c=P.by(b,c,J.b3(a),null,null,null)
t=new P.al("")
s=new P.iF(!1,t)
s.bs(a,b,c)
if(s.e>0){H.r(P.a1("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dH(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
d_:function(a){return this.bs(a,0,null)},
$abM:function(){return[[P.a,P.i],P.m]}}
P.iF.prototype={
bs:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.d(a,"$ia",[P.i],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iG(this,b,c,a)
$label0$0:for(q=J.be(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.l(a,o)
if(typeof n!=="number")return n.bD()
if((n&192)!==128){m=P.a1("Bad UTF-8 encoding 0x"+C.e.bA(n,16),a,o)
throw H.f(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.B,m)
if(u<=C.B[m]){m=P.a1("Overlong encoding of 0x"+C.e.bA(u,16),a,o-s-1)
throw H.f(m)}if(u>1114111){m=P.a1("Character outside valid Unicode range: 0x"+C.e.bA(u,16),a,o-s-1)
throw H.f(m)}if(!this.c||u!==65279)p.a+=H.dH(u)
this.c=!1}for(m=o<c;m;){l=P.mX(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.l(a,k)
if(typeof n!=="number")return n.K()
if(n<0){i=P.a1("Negative UTF-8 code unit: -0x"+C.e.bA(-n,16),a,j-1)
throw H.f(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a1("Bad UTF-8 encoding 0x"+C.e.bA(n,16),a,j-1)
throw H.f(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iG.prototype={
$2:function(a,b){this.a.b.a+=P.dQ(this.d,a,b)},
$S:34}
P.Y.prototype={}
P.as.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.bc(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lM(H.m9(this))
t=P.dd(H.m7(this))
s=P.dd(H.m3(this))
r=P.dd(H.m4(this))
q=P.dd(H.m6(this))
p=P.dd(H.m8(this))
o=P.lN(H.m5(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.x.prototype={}
P.aD.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aD&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eV()
t=this.a
if(t<0)return"-"+new P.aD(0-t).i(0)
s=u.$1(C.e.a8(t,6e7)%60)
r=u.$1(C.e.a8(t,1e6)%60)
q=new P.eU().$1(t%1e6)
return""+C.e.a8(t,36e8)+":"+H.k(s)+":"+H.k(r)+"."+H.k(q)}}
P.eU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.eV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bq.prototype={}
P.dC.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gcu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gct:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcu()+t+s
if(!this.a)return r
q=this.gct()
p=P.eZ(this.b)
return r+q+": "+p}}
P.bx.prototype={
gcu:function(){return"RangeError"},
gct:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.k(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.k(u)
else if(s>u)t=": Not in range "+H.k(u)+".."+H.k(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.k(u)}return t}}
P.f8.prototype={
gcu:function(){return"RangeError"},
gct:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.K()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.k(t)},
gq:function(a){return this.f}}
P.hD.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hA.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.h5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eO.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eZ(u)+"."}}
P.fD.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dP.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.eS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eb.prototype={
i:function(a){return"Exception: "+this.a}}
P.f5.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.v(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.I(r,m)
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
g=""}f=C.c.v(r,i,j)
return t+h+f+g+"\n"+C.c.j(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.k(s)+")"):t}}
P.i.prototype={}
P.l.prototype={
gq:function(a){var u,t
u=this.gX(this)
for(t=0;u.C();)++t
return t},
ap:function(a,b){var u,t,s
if(b<0)H.r(P.aa(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.C();){s=u.gN()
if(b===t)return s;++t}throw H.f(P.cr(b,this,"index",null,t))},
i:function(a){return P.lR(this,"(",")")}}
P.aS.prototype={}
P.a.prototype={$il:1}
P.E.prototype={}
P.F.prototype={
gJ:function(a){return P.M.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ah.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
t:function(a,b){return this===b},
gJ:function(a){return H.cz(this)},
i:function(a){return"Instance of '"+H.c_(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.m.prototype={$ikb:1}
P.al.prototype={
gq:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$io2:1}
P.hI.prototype={
$2:function(a,b){var u,t,s,r
u=P.m
H.d(a,"$iE",[u,u],"$aE")
H.P(b)
t=J.jD(b).f2(b,"=")
if(t===-1){if(b!=="")a.m(0,P.jv(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.v(b,0,t)
r=C.c.b1(b,t+1)
u=this.a
a.m(0,P.jv(s,0,s.length,u,!0),P.jv(r,0,r.length,u,!0))}return a},
$S:42}
P.hF.prototype={
$2:function(a,b){throw H.f(P.a1("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.hG.prototype={
$2:function(a,b){throw H.f(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:36}
P.hH.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cc(C.c.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.K()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:26}
P.c4.prototype={
gfz:function(){return this.b},
gda:function(a){var u=this.c
if(u==null)return""
if(C.c.ak(u,"["))return C.c.v(u,1,u.length-1)
return u},
gcb:function(a){var u=this.d
if(u==null)return P.kG(this.a)
return u},
gdj:function(){var u=this.f
return u==null?"":u},
geY:function(){var u=this.r
return u==null?"":u},
dk:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.d(g,"$iE",[P.m,null],"$aE")
h=this.a
u=h==="file"
i=this.b
e=this.d
t=this.c
if(t!=null)b=t
else if(i.length!==0||e!=null||u)b=""
c=this.e
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.ak(c,"/"))c="/"+c
f=P.ju(f,0,0,g)
return new P.c4(h,i,b,e,c,f,this.r)},
fm:function(a){return this.dk(null,null,null,null,null,null,a,null,null)},
gfl:function(){var u,t
if(this.Q==null){u=this.f
t=P.m
this.sjx(new P.e1(P.kr(u==null?"":u,C.m),[t,t]))}return this.Q},
geZ:function(){return this.c!=null},
gf1:function(){return this.f!=null},
gf_:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.k(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.k(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.k(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$ijp)if(this.a==b.gck())if(this.c!=null===b.geZ())if(this.b==b.gfz())if(this.gda(this)==b.gda(b))if(this.gcb(this)==b.gcb(b))if(this.e===b.gff(b)){u=this.f
t=u==null
if(!t===b.gf1()){if(t)u=""
if(u===b.gdj()){u=this.r
t=u==null
if(!t===b.gf_()){if(t)u=""
u=u===b.geY()}else u=!1}else u=!1}else u=!1}else u=!1
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
sjx:function(a){var u=P.m
this.Q=H.d(a,"$iE",[u,u],"$aE")},
$ijp:1,
gck:function(){return this.a},
gff:function(a){return this.e}}
P.iB.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.k()
throw H.f(P.a1("Invalid port",this.a,u+1))},
$S:41}
P.iC.prototype={
$1:function(a){return P.en(C.a2,a,C.m,!1)},
$S:44}
P.iE.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.k(P.en(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.k(P.en(C.v,b,C.m,!0))}},
$S:40}
P.iD.prototype={
$2:function(a,b){var u,t
H.P(a)
if(b==null||typeof b==="string")this.a.$2(a,H.P(b))
else for(u=J.cg(H.l3(b,"$il")),t=this.a;u.C();)t.$2(a,H.P(u.gN()))},
$S:39}
P.hE.prototype={
gfv:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f3(t,"?",u)
r=t.length
if(s>=0){q=P.cZ(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.i4(this,"data",null,null,null,P.cZ(t,u,r,C.E,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iK.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.iJ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.lA(u,0,96,b)
return u},
$S:37}
P.iL.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.I(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iM.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.I(b,0),t=C.c.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iu.prototype={
geZ:function(){return this.c>0},
gf0:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.k()
t=this.e
if(typeof t!=="number")return H.c(t)
t=u+1<t
u=t}else u=!1
return u},
gf1:function(){var u=this.f
if(typeof u!=="number")return u.K()
return u<this.r},
gf_:function(){return this.r<this.a.length},
ge1:function(){return this.b===4&&C.c.ak(this.a,"http")},
ge2:function(){return this.b===5&&C.c.ak(this.a,"https")},
gck:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.ge1()){this.x="http"
u="http"}else if(this.ge2()){this.x="https"
u="https"}else if(u===4&&C.c.ak(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ak(this.a,"package")){this.x="package"
u="package"}else{u=C.c.v(this.a,0,u)
this.x=u}return u},
gfz:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.v(this.a,t,u-1):""},
gda:function(a){var u=this.c
return u>0?C.c.v(this.a,u,this.d):""},
gcb:function(a){var u
if(this.gf0()){u=this.d
if(typeof u!=="number")return u.k()
return P.cc(C.c.v(this.a,u+1,this.e),null,null)}if(this.ge1())return 80
if(this.ge2())return 443
return 0},
gff:function(a){return C.c.v(this.a,this.e,this.f)},
gdj:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.K()
return u<t?C.c.v(this.a,u+1,t):""},
geY:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.b1(t,u+1):""},
gfl:function(){var u=this.f
if(typeof u!=="number")return u.K()
if(u>=this.r)return C.a3
u=P.m
return new P.e1(P.kr(this.gdj(),C.m),[u,u])},
dk:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.d(g,"$iE",[P.m,null],"$aE")
h=this.gck()
u=h==="file"
t=this.c
i=t>0?C.c.v(this.a,this.b+3,t):""
e=this.gf0()?this.gcb(this):null
t=this.c
if(t>0)b=C.c.v(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.c.v(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.ak(c,"/"))c="/"+c
f=P.ju(f,0,0,g)
s=this.r
if(s<t.length)a=C.c.b1(t,s+1)
return new P.c4(h,i,b,e,c,f,a)},
fm:function(a){return this.dk(null,null,null,null,null,null,a,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ijp&&this.a===b.i(0)},
i:function(a){return this.a},
$ijp:1}
P.i4.prototype={}
W.t.prototype={}
W.eC.prototype={
i:function(a){return String(a)}}
W.eD.prototype={
i:function(a){return String(a)}}
W.d7.prototype={}
W.bG.prototype={
cg:function(a,b,c){if(c!=null)return this.i2(a,b,P.n2(c,null))
return this.i3(a,b)},
fH:function(a,b){return this.cg(a,b,null)},
i2:function(a,b,c){return a.getContext(b,c)},
i3:function(a,b){return a.getContext(b)},
$ibG:1,
$ijW:1}
W.bH.prototype={
i4:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
lb:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibH:1}
W.bn.prototype={
gq:function(a){return a.length}}
W.cl.prototype={
gq:function(a){return a.length}}
W.eR.prototype={}
W.cm.prototype={$icm:1}
W.cn.prototype={
fI:function(a,b){return a.getElementById(b)}}
W.eT.prototype={
i:function(a){return String(a)}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.d1(b,"$iaz",[P.ah],"$aaz"))return!1
u=J.bD(b)
return a.left===u.gae(b)&&a.top===u.gcd(b)&&a.width===u.gcf(b)&&a.height===u.gc8(b)},
gJ:function(a){return W.kD(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gep:function(a){return a.bottom},
gc8:function(a){return a.height},
gae:function(a){return a.left},
gab:function(a){return a.right},
gcd:function(a){return a.top},
gcf:function(a){return a.width},
$iaz:1,
$aaz:function(){return[P.ah]}}
W.i3.prototype={
gq:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.h(u[b],"$ia0")},
m:function(a,b,c){var u
H.h(c,"$ia0")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.j5(this.a,c,u[b])},
h:function(a,b){J.jS(this.a,b)
return b},
gX:function(a){var u=this.lW(this)
return new J.ao(u,u.length,0,[H.q(u,0)])},
$aV:function(){return[W.a0]},
$al:function(){return[W.a0]},
$aa:function(){return[W.a0]}}
W.a0.prototype={
ges:function(a){return new W.i3(a,a.children)},
geu:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.K()
if(s<0)s=-s*0
if(typeof r!=="number")return r.K()
if(r<0)r=-r*0
return new P.az(u,t,s,r,[P.ah])},
i:function(a){return a.localName},
$ia0:1}
W.n.prototype={$in:1}
W.bP.prototype={
hq:function(a,b,c,d){return a.addEventListener(b,H.c9(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ibP:1}
W.f4.prototype={
gq:function(a){return a.length}}
W.di.prototype={
jv:function(a,b,c,d){return a.pushState(b,c,d)},
gq:function(a){return a.length}}
W.bR.prototype={
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.cr(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.h(c,"$iH")
throw H.f(P.a2("Cannot assign element of immutable List."))},
ap:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaw:1,
$aaw:function(){return[W.H]},
$ib5:1,
$ab5:function(){return[W.H]},
$aV:function(){return[W.H]},
$il:1,
$al:function(){return[W.H]},
$ia:1,
$aa:function(){return[W.H]},
$ibR:1,
$aaE:function(){return[W.H]}}
W.dj.prototype={}
W.b4.prototype={$ib4:1,
gew:function(a){return a.data}}
W.cq.prototype={$icq:1,$ijW:1}
W.aV.prototype={$iaV:1}
W.cw.prototype={}
W.af.prototype={$iaf:1}
W.i2.prototype={
m:function(a,b,c){var u,t
H.h(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.j5(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dg(u,u.length,-1,[H.ep(C.a5,u,"aE",0)])},
gq:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aV:function(){return[W.H]},
$al:function(){return[W.H]},
$aa:function(){return[W.H]}}
W.H.prototype={
lN:function(a,b){var u,t
try{u=a.parentNode
J.j5(u,b,a)}catch(t){H.aK(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fT(a):u},
a5:function(a,b){return a.appendChild(b)},
jC:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cx.prototype={
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.cr(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.h(c,"$iH")
throw H.f(P.a2("Cannot assign element of immutable List."))},
ap:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaw:1,
$aaw:function(){return[W.H]},
$ib5:1,
$ab5:function(){return[W.H]},
$aV:function(){return[W.H]},
$il:1,
$al:function(){return[W.H]},
$ia:1,
$aa:function(){return[W.H]},
$aaE:function(){return[W.H]}}
W.fT.prototype={
gq:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.aH.prototype={$iaH:1}
W.ho.prototype={
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.cr(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.h(c,"$iaA")
throw H.f(P.a2("Cannot assign element of immutable List."))},
ap:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaw:1,
$aaw:function(){return[W.aA]},
$ib5:1,
$ab5:function(){return[W.aA]},
$aV:function(){return[W.aA]},
$il:1,
$al:function(){return[W.aA]},
$ia:1,
$aa:function(){return[W.aA]},
$aaE:function(){return[W.aA]}}
W.bB.prototype={}
W.hV.prototype={$ijW:1}
W.b1.prototype={
gl5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a2("deltaY is not supported"))},
gl4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a2("deltaX is not supported"))},
$ib1:1}
W.cR.prototype={
jD:function(a,b){return a.requestAnimationFrame(H.c9(H.o(b,{func:1,ret:-1,args:[P.ah]}),1))},
hV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ea.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.d1(b,"$iaz",[P.ah],"$aaz"))return!1
u=J.bD(b)
return a.left===u.gae(b)&&a.top===u.gcd(b)&&a.width===u.gcf(b)&&a.height===u.gc8(b)},
gJ:function(a){return W.kD(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gc8:function(a){return a.height},
gcf:function(a){return a.width}}
W.i5.prototype={}
W.jt.prototype={}
W.i6.prototype={}
W.i7.prototype={
$1:function(a){return this.a.$1(H.h(a,"$in"))},
$S:35}
W.aE.prototype={
gX:function(a){return new W.dg(a,this.gq(a),-1,[H.ep(this,a,"aE",0)])}}
W.dg.prototype={
C:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdY(J.lw(this.a,u))
this.c=u
return!0}this.sdY(null)
this.c=t
return!1},
gN:function(){return this.d},
sdY:function(a){this.d=H.z(a,H.q(this,0))},
$iaS:1}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ej.prototype={}
W.ek.prototype={}
P.iv.prototype={
eW:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dq:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.N(a)
if(!!t.$ias)return new Date(a.a)
if(!!t.$ime)throw H.f(P.hB("structured clone of RegExp"))
if(!!t.$ib4)return a
if(!!t.$ibW)return a
if(!!t.$iE){s=this.eW(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.m(t,s,r)
a.a6(0,new P.ix(u,this))
return u.a}if(!!t.$ia){s=this.eW(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.l_(a,s)}throw H.f(P.hB("structured clone of other type"))},
l_:function(a,b){var u,t,s,r
u=J.be(a)
t=u.gq(a)
s=new Array(t)
C.a.m(this.b,b,s)
for(r=0;r<t;++r)C.a.m(s,r,this.dq(u.l(a,r)))
return s}}
P.ix.prototype={
$2:function(a,b){this.a.a[a]=this.b.dq(b)},
$S:10}
P.el.prototype={$ib4:1,
gew:function(a){return this.a}}
P.iQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.iw.prototype={}
P.f1.prototype={
gbJ:function(){var u,t,s
u=this.b
t=H.av(u,"V",0)
s=W.a0
return new H.fn(new H.hX(u,H.o(new P.f2(),{func:1,ret:P.Y,args:[t]}),[t]),H.o(new P.f3(),{func:1,ret:s,args:[t]}),[t,s])},
m:function(a,b,c){var u
H.h(c,"$ia0")
u=this.gbJ()
J.lB(u.b.$1(J.j6(u.a,b)),c)},
h:function(a,b){J.jS(this.b.a,b)},
gq:function(a){return J.b3(this.gbJ().a)},
l:function(a,b){var u=this.gbJ()
return u.b.$1(J.j6(u.a,b))},
gX:function(a){var u=P.k2(this.gbJ(),!1,W.a0)
return new J.ao(u,u.length,0,[H.q(u,0)])},
$aV:function(){return[W.a0]},
$al:function(){return[W.a0]},
$aa:function(){return[W.a0]}}
P.f2.prototype={
$1:function(a){return!!J.N(H.h(a,"$iH")).$ia0},
$S:32}
P.f3.prototype={
$1:function(a){return H.j(H.h(a,"$iH"),"$ia0")},
$S:24}
P.ii.prototype={
lq:function(a){if(a<=0||a>4294967296)throw H.f(P.mc("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.io.prototype={
gab:function(a){var u=this.a
if(typeof u!=="number")return u.k()
return H.z(u+this.c,H.q(this,0))},
gep:function(a){var u=this.b
if(typeof u!=="number")return u.k()
return H.z(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d1(b,"$iaz",[P.ah],"$aaz")){u=this.a
t=J.bD(b)
s=t.gae(b)
if(u==null?s==null:u===s){s=this.b
if(s==t.gcd(b)){if(typeof u!=="number")return u.k()
r=H.q(this,0)
if(H.z(u+this.c,r)===t.gab(b)){if(typeof s!=="number")return s.k()
u=H.z(s+this.d,r)===t.gep(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.bF(u)
s=this.b
r=J.bF(s)
if(typeof u!=="number")return u.k()
q=H.q(this,0)
u=C.e.gJ(H.z(u+this.c,q))
if(typeof s!=="number")return s.k()
q=C.e.gJ(H.z(s+this.d,q))
return P.mz(P.ik(P.ik(P.ik(P.ik(0,t),r),u),q))}}
P.az.prototype={
gae:function(a){return this.a},
gcd:function(a){return this.b},
gcf:function(a){return this.c},
gc8:function(a){return this.d}}
P.p.prototype={
ges:function(a){return new P.f1(a,new W.i2(a))}}
P.L.prototype={$il:1,
$al:function(){return[P.i]},
$ia:1,
$aa:function(){return[P.i]},
$iml:1}
P.d8.prototype={$id8:1}
P.dh.prototype={$idh:1}
P.dI.prototype={$idI:1}
P.c0.prototype={
el:function(a,b){return a.activeTexture(b)},
em:function(a,b,c){return a.attachShader(b,c)},
aG:function(a,b,c){return a.bindBuffer(b,c)},
kQ:function(a,b,c){return a.bindFramebuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
kR:function(a,b,c){return a.blendFunc(b,c)},
eq:function(a,b,c,d){return a.bufferData(b,c,d)},
kU:function(a,b){return a.clear(b)},
kV:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
kW:function(a,b){return a.clearDepth(b)},
kZ:function(a,b){return a.compileShader(b)},
l0:function(a,b){return a.createShader(b)},
l2:function(a,b){return a.deleteProgram(b)},
l3:function(a,b){return a.deleteShader(b)},
l6:function(a,b){return a.depthFunc(b)},
l7:function(a,b){return a.disable(b)},
ex:function(a,b){return a.disableVertexAttribArray(b)},
la:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
d1:function(a,b){return a.enable(b)},
ez:function(a,b){return a.enableVertexAttribArray(b)},
fB:function(a,b){return a.generateMipmap(b)},
fE:function(a,b,c){return a.getActiveAttrib(b,c)},
fF:function(a,b,c){return a.getActiveUniform(b,c)},
fG:function(a,b,c){return a.getAttribLocation(b,c)},
ds:function(a,b){return a.getParameter(b)},
fK:function(a,b){return a.getProgramInfoLog(b)},
ci:function(a,b,c){return a.getProgramParameter(b,c)},
fL:function(a,b){return a.getShaderInfoLog(b)},
fM:function(a,b,c){return a.getShaderParameter(b,c)},
fN:function(a,b,c){return a.getUniformLocation(b,c)},
lm:function(a,b){return a.linkProgram(b)},
lI:function(a,b,c){return a.pixelStorei(b,c)},
fQ:function(a,b,c){return a.shaderSource(b,c)},
lU:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.N(g)
if(!!u.$ib4)t=!0
else t=!1
if(t){this.jW(a,b,c,d,e,f,P.n3(g))
return}if(!!u.$icq)u=!0
else u=!1
if(u){this.jX(a,b,c,d,e,f,g)
return}throw H.f(P.d5("Incorrect number or type of arguments"))},
lT:function(a,b,c,d,e,f,g){return this.lU(a,b,c,d,e,f,g,null,null,null)},
jW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ft:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fw:function(a,b){return a.useProgram(b)},
m3:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
m4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic0:1}
P.dM.prototype={$idM:1}
P.dS.prototype={$idS:1}
P.e_.prototype={$ie_:1}
L.fC.prototype={}
B.f_.prototype={
am:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j
u=new B.aG(a,b)
t=this.c.n(0,u).n(0,$.jM().j(0,a+b))
s=t.a
r=t.b
q=2-s*s-r*r
if(q>0){p=q*q
o=this.e
n=this.b.k(0,u)
m=this.a
l=m[C.j.az(n.a)&255]
n=C.j.az(n.b)
if(typeof l!=="number")return l.k()
n=m[l+n&255]
if(typeof n!=="number")return n.bD()
k=(n&14)>>>1
n=$.lc()
if(k>=8)return H.e(n,k)
j=n[k]
this.e=o+p*p*(j.a*s+j.b*r)}}}
B.aG.prototype={
k:function(a,b){return new B.aG(this.a+b.a,this.b+b.b)},
n:function(a,b){return new B.aG(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.aG(this.a*b,this.b*b)},
i:function(a){return H.k(this.a)+", "+H.k(this.b)}}
O.T.prototype={
bF:function(a){this.sic(H.b([],[a]))
this.se8(null)
this.se5(null)
this.se9(null)},
cl:function(a,b,c){var u=H.av(this,"T",0)
H.o(b,{func:1,ret:P.Y,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.i,[P.l,u]]}
H.o(a,u)
H.o(c,u)
this.se8(b)
this.se5(a)
this.se9(c)},
bE:function(a,b){return this.cl(a,null,b)},
bn:function(a){var u
H.d(a,"$il",[H.av(this,"T",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
e4:function(a,b){var u
H.d(b,"$il",[H.av(this,"T",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gq:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.ao(u,u.length,0,[H.q(u,0)])},
ap:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.av(this,"T",0)
H.z(b,u)
u=[u]
if(this.bn(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.e4(s,H.b([b],u))}},
aT:function(a,b){var u,t
H.d(b,"$il",[H.av(this,"T",0)],"$al")
if(this.bn(b)){u=this.a
t=u.length
C.a.aT(u,b)
this.e4(t,b)}},
sic:function(a){this.a=H.d(a,"$ia",[H.av(this,"T",0)],"$aa")},
se8:function(a){this.b=H.o(a,{func:1,ret:P.Y,args:[[P.l,H.av(this,"T",0)]]})},
se5:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.i,[P.l,H.av(this,"T",0)]]})},
se9:function(a){this.d=H.o(a,{func:1,ret:-1,args:[P.i,[P.l,H.av(this,"T",0)]]})},
$il:1}
O.cv.prototype={
gq:function(a){return this.a.length},
gu:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
h4:function(a){var u=this.b
if(u!=null)u.F(a)},
b2:function(){return this.h4(null)},
ga2:function(){var u=this.a
if(u.length>0)return C.a.gaZ(u)
else return V.bV()},
fj:function(a){var u=this.a
if(a==null)C.a.h(u,V.bV())
else C.a.h(u,a)
this.b2()},
di:function(){var u=this.a
if(u.length>0){u.pop()
this.b2()}},
scB:function(a){this.a=H.d(a,"$ia",[V.ak],"$aa")}}
E.eH.prototype={}
E.U.prototype={
dN:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.q(u,0)]);u.C();){t=u.d
if(t.f==null)t.dN()}},
sdu:function(a){var u,t,s
u=this.d
if(u!=a){this.c=null
this.d=a
this.e=null
if(u!=null)u.gu().Z(0,this.gca())
t=this.d
if(t!=null)t.gu().h(0,this.gca())
s=new D.D("shapeBuilder",u,this.d,this,[F.cC])
s.b=!0
this.aa(s)}},
ag:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aB(a,this):null
if(!J.Z(t,this.x)){s=this.x
this.x=t
r=new D.D("matrix",s,t,this,[V.ak])
r.b=!0
this.aa(r)}u=this.f
if(u!=null)u.ag(a)
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.q(u,0)]);u.C();)u.d.ag(a)},
bi:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga2())
else C.a.h(u.a,t.j(0,u.ga2()))
u.b2()
a.fk(this.f)
u=a.dy
s=(u&&C.a).gaZ(u)
if(s!=null&&this.d!=null)s.lM(a,this)
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.q(u,0)]);u.C();)u.d.bi(a)
a.fh()
a.dx.di()},
gu:function(){var u=this.z
if(u==null){u=D.G()
this.z=u}return u},
aa:function(a){var u=this.z
if(u!=null)u.F(a)},
af:function(){return this.aa(null)},
fc:function(a){H.h(a,"$iw")
this.e=null
this.aa(a)},
ly:function(){return this.fc(null)},
fe:function(a){this.aa(H.h(a,"$iw"))},
lz:function(){return this.fe(null)},
fb:function(a){this.aa(H.h(a,"$iw"))},
lx:function(){return this.fb(null)},
f9:function(a){this.aa(H.h(a,"$iw"))},
lu:function(){return this.f9(null)},
lt:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$il",[E.U],"$al")
for(u=b.length,t=this.gf8(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bO()
o.sat(null)
o.sbL(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sat(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.af()},
lw:function(a,b){var u,t
H.d(b,"$il",[E.U],"$al")
for(u=b.gX(b),t=this.gf8();u.C();)u.gN().gu().Z(0,t)
this.af()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh5:function(a,b){this.y=H.d(b,"$iT",[E.U],"$aT")},
$ib9:1}
E.fO.prototype={
h_:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.as(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cv()
t=[V.ak]
u.scB(H.b([],t))
u.b=null
u.gu().h(0,new E.fP(this))
this.cy=u
u=new O.cv()
u.scB(H.b([],t))
u.b=null
u.gu().h(0,new E.fQ(this))
this.db=u
u=new O.cv()
u.scB(H.b([],t))
u.b=null
u.gu().h(0,new E.fR(this))
this.dx=u
this.sjV(H.b([],[O.c1]))
u=this.dy;(u&&C.a).h(u,null)
this.sjP(new H.ax([P.m,A.cB]))},
glJ:function(){var u=this.z
if(u==null){u=this.cy.ga2().j(0,this.db.ga2())
this.z=u}return u},
fk:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaZ(u):a;(u&&C.a).h(u,t)},
fh:function(){var u=this.dy
if(u.length>1)u.pop()},
sjV:function(a){this.dy=H.d(a,"$ia",[O.c1],"$aa")},
sjP:function(a){this.fr=H.d(a,"$iE",[P.m,A.cB],"$aE")}}
E.fP.prototype={
$1:function(a){var u
H.h(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fQ.prototype={
$1:function(a){var u
H.h(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fR.prototype={
$1:function(a){var u
H.h(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.h6.prototype={}
E.dW.prototype={
dB:function(a){H.h(a,"$iw")
this.fn()},
dA:function(){return this.dB(null)},
glh:function(){var u,t,s
u=Date.now()
t=C.e.a8(P.jY(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.as(u,!1)
return s/t},
ec:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.j()
if(typeof u!=="number")return H.c(u)
s=C.j.c7(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.j()
r=C.j.c7(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jm(C.p,this.glO())}},
fn:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.hk(this),{func:1,ret:-1,args:[P.ah]})
C.H.hV(u)
C.H.jD(u,W.kT(t,P.ah))}},
lL:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ec()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.jY(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sq(r.a,0)
r.b2()
r=s.db
C.a.sq(r.a,0)
r.b2()
r=s.dx
C.a.sq(r.a,0)
r.b2()
r=s.dy;(r&&C.a).sq(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.bi(this.e)}}catch(q){u=H.aK(q)
t=H.cb(q)
P.jH("Error: "+H.k(u))
P.jH("Stack: "+H.k(t))
throw H.f(u)}}}
E.hk.prototype={
$1:function(a){var u
H.nj(a)
u=this.a
if(u.ch){u.ch=!1
u.lL()}},
$S:28}
Z.e5.prototype={$inr:1}
Z.bm.prototype={
aV:function(a){var u,t,s
try{t=a.a
C.b.ez(t,this.e)
C.b.m3(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aK(s)
t=P.v('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}}
Z.hW.prototype={$ins:1}
Z.cj.prototype={
bg:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aV:function(a){var u,t
u=this.a
C.b.aG(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aV(a)},
bC:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ex(s,u[t].e)
C.b.aG(s,this.a.a,null)},
bi:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aG(t,p,r.b)
C.b.la(t,q.a,q.b,5123,0)
C.b.aG(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aO(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(t,", ")+"\nAttrs:   "+C.a.B(p,", ")},
se0:function(a){this.b=H.d(a,"$ia",[Z.aF],"$aa")},
$io3:1}
Z.aF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c_(this.c)+"'")+"]"}}
Z.a7.prototype={
gev:function(){var u,t
u=this.a
t=(u&$.a8().a)!==0?1:0
if((u&$.ai().a)!==0)++t
if((u&$.bk().a)!==0)++t
if((u&$.ad().a)!==0)++t
if((u&$.bl().a)!==0)++t
if((u&$.d2().a)!==0)++t
if((u&$.d3().a)!==0)++t
if((u&$.cf().a)!==0)++t
return(u&$.bj().a)!==0?t+1:t},
gbl:function(a){var u,t
u=this.a
t=(u&$.a8().a)!==0?3:0
if((u&$.ai().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.ad().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.cf().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
cR:function(a){var u,t,s
u=$.a8()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.ai()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ad()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0)if(s===a)return u
return $.ls()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a7))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.a8().a)!==0)C.a.h(u,"Pos")
if((t&$.ai().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.ad().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bl().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.cf().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
D.eK.prototype={}
D.bO.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.o(b,u)
if(this.a==null)this.sat(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Z:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.aw(u,b)
if(u===!0){u=this.a
t=(u&&C.a).Z(u,b)||!1}else t=!1
return t},
F:function(a){var u,t,s,r
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
return!0}if(!s)C.a.a6(t,new D.f0(u))
return!0},
ey:function(){return this.F(null)},
lP:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.F(t)}}},
aM:function(){return this.lP(!0,!1)},
sat:function(a){this.a=H.d(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbL:function(a){this.b=H.d(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
D.f0.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.w.prototype={}
D.br.prototype={}
D.bs.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d9.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.K.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.K))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.b6.prototype={}
X.dp.prototype={
gaq:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
dC:function(a){},
h9:function(a){var u,t,s
H.d(a,"$il",[X.K],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(C.a.aw(this.a,s))return!1}return!0},
h7:function(a,b){var u=X.K
u=new D.br(a,H.d(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.dC(u)},
hb:function(a,b){var u=X.K
u=new D.bs(a,H.d(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.dC(u)},
co:function(a){var u
H.h(a,"$iw")
if(!this.r&&a instanceof X.b6){u=a.c
if(C.a.aw(this.a,u)){this.r=!0
u=this.y
if(u!=null)u.F(a)}}},
cG:function(a){var u
H.h(a,"$iw")
if(this.r&&a instanceof X.b6){u=a.c
if(C.a.aw(this.a,u))this.r=!1}},
ad:function(a){var u,t
if(this.f!=null)return!1
this.f=a
u=a.b
t=u.b
if(t==null){t=D.G()
u.b=t}t.h(0,this.gcn())
t=u.a
if(t==null){t=D.G()
u.a=t
u=t}else u=t
u.h(0,this.gcF())
return!0},
$al:function(){return[X.K]},
$aT:function(){return[X.K]}}
X.fe.prototype={
lF:function(a){var u,t
this.c=a.b
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.b6(a,this)
t.b=!0
return u.F(t)},
lB:function(a){var u,t
this.c=a.b
this.d.Z(0,a.a)
u=this.b
if(u==null)return!1
t=new X.b6(a,this)
t.b=!0
return u.F(t)},
sju:function(a){this.d=H.d(a,"$ikj",[P.i],"$akj")}}
X.du.prototype={}
X.fi.prototype={
b9:function(a,b){var u,t,s,r,q,p,o,n,m
u=new P.as(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.j()
q=b.b
p=this.ch
if(typeof q!=="number")return q.j()
o=t.a
if(typeof o!=="number")return o.k()
t=t.b
if(typeof t!=="number")return t.k()
n=new V.Q(o+s*r,t+q*p)
p=this.a.gbQ()
m=new X.b8(a,V.bb(),this.x,this.y,this.z,p,n,u,this)
m.b=!0
this.z=u
this.x=n
return m},
dh:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.F(this.b9(a,b))
return!0},
bw:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fO()
if(typeof u!=="number")return u.bD()
this.r=(u&~t)>>>0
return!1},
bv:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b9(a,b))
return!0},
lG:function(a){return!1},
j_:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.as(Date.now(),!1)
t=this.f
s=new X.du(c,a,this.a.gbQ(),b,u,this)
s.b=!0
t.F(s)
this.y=u
this.x=V.bb()}}
X.O.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.O))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b8.prototype={}
X.fw.prototype={
cw:function(a,b,c){var u,t,s
u=new P.as(Date.now(),!1)
t=this.a.gbQ()
s=new X.b8(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
dh:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.cw(a,b,!0))
return!0},
bw:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fO()
if(typeof u!=="number")return u.bD()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.F(this.cw(a,b,!0))
return!0},
bv:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.cw(a,b,!1))
return!0},
lH:function(a,b){return!1}}
X.fG.prototype={}
X.dY.prototype={}
X.hn.prototype={
b9:function(a,b){var u,t,s,r
H.d(a,"$ia",[V.Q],"$aa")
u=new P.as(Date.now(),!1)
t=a.length>0?a[0]:V.bb()
s=this.a.gbQ()
r=new X.dY(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
lE:function(a){var u
H.d(a,"$ia",[V.Q],"$aa")
u=this.b
if(u==null)return!1
u.F(this.b9(a,!0))
return!0},
lC:function(a){var u
H.d(a,"$ia",[V.Q],"$aa")
u=this.c
if(u==null)return!1
u.F(this.b9(a,!0))
return!0},
lD:function(a){var u
H.d(a,"$ia",[V.Q],"$aa")
u=this.d
if(u==null)return!1
u.F(this.b9(a,!1))
return!0}}
X.e2.prototype={
gbQ:function(){var u=this.a
return V.jk(0,0,C.n.geu(u).c,C.n.geu(u).d)},
dW:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.K(u,new X.O(t,a.altKey,a.shiftKey))},
bb:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.O(t,a.altKey,a.shiftKey)},
cM:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.O(t,a.altKey,a.shiftKey)},
aS:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=u.top
if(typeof s!=="number")return s.n()
return new V.Q(t-r,s-q)},
bp:function(a){return new V.X(a.movementX,a.movementY)},
cI:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.Q])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.j.ay(p.pageX)
C.j.ay(p.pageY)
n=u.left
C.j.ay(p.pageX)
C.a.h(t,new V.Q(o-n,C.j.ay(p.pageY)-u.top))}return t},
aN:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d9(u,new X.O(t,a.altKey,a.shiftKey))},
cC:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.n()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
iU:function(a){this.f=!0},
iE:function(a){this.f=!1},
iO:function(a){H.h(a,"$iaf")
if(this.f&&this.cC(a))a.preventDefault()},
cG:function(a){var u
H.h(a,"$iaV")
if(!this.f)return
u=this.dW(a)
if(this.b.lF(u))a.preventDefault()},
co:function(a){var u
H.h(a,"$iaV")
if(!this.f)return
u=this.dW(a)
if(this.b.lB(u))a.preventDefault()},
j1:function(a){var u,t,s,r
H.h(a,"$iaf")
u=this.a
u.focus()
this.f=!0
this.bb(a)
if(this.x){t=this.aN(a)
s=this.bp(a)
if(this.d.dh(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aN(a)
r=this.aS(a)
if(this.c.dh(t,r))a.preventDefault()},
j5:function(a){var u,t,s
H.h(a,"$iaf")
this.bb(a)
u=this.aN(a)
if(this.x){t=this.bp(a)
if(this.d.bw(u,t))a.preventDefault()
return}if(this.r)return
s=this.aS(a)
if(this.c.bw(u,s))a.preventDefault()},
iS:function(a){var u,t,s
H.h(a,"$iaf")
if(!this.cC(a)){this.bb(a)
u=this.aN(a)
if(this.x){t=this.bp(a)
if(this.d.bw(u,t))a.preventDefault()
return}if(this.r)return
s=this.aS(a)
if(this.c.bw(u,s))a.preventDefault()}},
j3:function(a){var u,t,s
H.h(a,"$iaf")
this.bb(a)
u=this.aN(a)
if(this.x){t=this.bp(a)
if(this.d.bv(u,t))a.preventDefault()
return}if(this.r)return
s=this.aS(a)
if(this.c.bv(u,s))a.preventDefault()},
iQ:function(a){var u,t,s
H.h(a,"$iaf")
if(!this.cC(a)){this.bb(a)
u=this.aN(a)
if(this.x){t=this.bp(a)
if(this.d.bv(u,t))a.preventDefault()
return}if(this.r)return
s=this.aS(a)
if(this.c.bv(u,s))a.preventDefault()}},
j7:function(a){var u,t
H.h(a,"$ib1")
this.bb(a)
u=new V.X((a&&C.G).gl4(a),C.G.gl5(a)).A(0,180)
if(this.x){if(this.d.lG(u))a.preventDefault()
return}if(this.r)return
t=this.aS(a)
if(this.c.lH(u,t))a.preventDefault()},
j9:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aN(this.y)
s=this.aS(this.y)
this.d.j_(t,s,u)}},
jn:function(a){var u
H.h(a,"$iaH")
this.a.focus()
this.f=!0
this.cM(a)
u=this.cI(a)
if(this.e.lE(u))a.preventDefault()},
jj:function(a){var u
H.h(a,"$iaH")
this.cM(a)
u=this.cI(a)
if(this.e.lC(u))a.preventDefault()},
jl:function(a){var u
H.h(a,"$iaH")
this.cM(a)
u=this.cI(a)
if(this.e.lD(u))a.preventDefault()},
shW:function(a){this.z=H.d(a,"$ia",[[P.cE,P.M]],"$aa")}}
D.bp.prototype={
gu:function(){var u=this.d
if(u==null){u=D.G()
this.d=u}return u},
aR:function(a){var u
H.h(a,"$iw")
u=this.d
if(u!=null)u.F(a)},
iG:function(){return this.aR(null)},
$ia4:1,
$ib9:1}
D.a4.prototype={$ib9:1}
D.dq.prototype={
gu:function(){var u=this.Q
if(u==null){u=D.G()
this.Q=u}return u},
aR:function(a){var u=this.Q
if(u!=null)u.F(a)},
e7:function(a){var u
H.h(a,"$iw")
u=this.ch
if(u!=null)u.F(a)},
iZ:function(){return this.e7(null)},
jb:function(a){var u,t,s
H.d(a,"$il",[D.a4],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.hO(s))return!1}return!0},
iu:function(a,b){var u,t,s,r,q,p,o,n
u=D.a4
H.d(b,"$il",[u],"$al")
for(t=b.length,s=this.ge6(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.h(b[p],"$ia4")
if(o instanceof D.bp)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bO()
n.sat(null)
n.sbL(null)
n.c=null
n.d=0
o.d=n}H.o(s,r)
if(n.a==null)n.sat(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.br(a,b,this,[u])
u.b=!0
this.aR(u)},
jf:function(a,b){var u,t,s,r
u=D.a4
H.d(b,"$il",[u],"$al")
for(t=b.gX(b),s=this.ge6();t.C();){r=t.gN()
C.a.Z(this.e,r)
r.gu().Z(0,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.aR(u)},
hO:function(a){var u=C.a.aw(this.e,a)
return u},
shc:function(a){this.e=H.d(a,"$ia",[D.bp],"$aa")},
shd:function(a){this.f=H.d(a,"$ia",[D.dF],"$aa")},
she:function(a){this.r=H.d(a,"$ia",[D.dO],"$aa")},
shf:function(a){this.x=H.d(a,"$ia",[D.dT],"$aa")},
shg:function(a){this.y=H.d(a,"$ia",[D.dU],"$aa")},
shh:function(a){this.z=H.d(a,"$ia",[D.dV],"$aa")},
$al:function(){return[D.a4]},
$aT:function(){return[D.a4]}}
D.dF.prototype={$ia4:1,$ib9:1}
D.dO.prototype={$ia4:1,$ib9:1}
D.dT.prototype={$ia4:1,$ib9:1}
D.dU.prototype={$ia4:1,$ib9:1}
D.dV.prototype={$ia4:1,$ib9:1}
V.a5.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aR.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.eY.prototype={}
V.a_.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof V.a_))return!1
return this.a===b.a},
i:function(a){var u,t,s
$.jN()
$.j4()
u=H.b([],[P.m])
t=this.a
s=$.aM().a
if((t&s)>>>0===s)C.a.h(u,"XPos")
s=$.jO().a
if((t&s)>>>0===s)C.a.h(u,"XCenter")
s=$.aL().a
if((t&s)>>>0===s)C.a.h(u,"XNeg")
s=$.aN().a
if((t&s)>>>0===s)C.a.h(u,"YPos")
s=$.jP().a
if((t&s)>>>0===s)C.a.h(u,"YCenter")
s=$.bg().a
if((t&s)>>>0===s)C.a.h(u,"YNeg")
s=$.bi().a
if((t&s)>>>0===s)C.a.h(u,"ZPos")
s=$.lf().a
if((t&s)>>>0===s)C.a.h(u,"ZCenter")
s=$.bh().a
if((t&s)>>>0===s)C.a.h(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
V.bS.prototype={
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.k(this.c)+" "+H.k(this.d)}}
V.f9.prototype={
i:function(a){return H.k(this.a)+" "+H.k(this.b)}}
V.ay.prototype={
as:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return u},
bu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=this.e
s=this.y
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.c(s)
r=t*s
q=this.f
p=this.x
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
if(typeof u!=="number")return u.j()
o=this.d
n=this.b
if(typeof n!=="number")return n.j()
m=n*s
l=this.c
if(typeof l!=="number")return H.c(l)
k=p*l
if(typeof o!=="number")return o.j()
j=this.r
i=n*q-t*l
if(typeof j!=="number")return j.j()
h=u*(r-q*p)-o*(m-k)+j*i
if(Math.abs(h-0)<$.y().a){u=$.k5
if(u==null){u=new V.ay(1,0,0,0,1,0,0,0,1)
$.k5=u}return u}g=1/h
return new V.ay((r-p*q)*g,(k-m)*g,i*g,(j*q-o*s)*g,(u*s-j*l)*g,(o*l-u*q)*g,(o*p-j*t)*g,(j*n-u*p)*g,(u*t-o*n)*g)},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
o=this.d
if(typeof o!=="number")return o.j()
n=this.e
if(typeof n!=="number")return n.j()
m=this.f
if(typeof m!=="number")return m.j()
l=this.r
if(typeof l!=="number")return l.j()
k=this.x
if(typeof k!=="number")return k.j()
j=this.y
if(typeof j!=="number")return j.j()
return new V.B(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
T:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
o=this.d
if(typeof o!=="number")return o.j()
n=this.e
if(typeof n!=="number")return n.j()
m=this.f
if(typeof m!=="number")return m.j()
l=this.r
if(typeof l!=="number")return l.j()
k=this.x
if(typeof k!=="number")return k.j()
j=this.y
if(typeof j!=="number")return j.j()
return new V.u(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.x]
t=V.ca(H.b([this.a,this.d,this.r],u),3,0)
s=V.ca(H.b([this.b,this.e,this.x],u),3,0)
r=V.ca(H.b([this.c,this.f,this.y],u),3,0)
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
V.ak.prototype={
as:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return u},
bu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=this.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=u*t-s*r
p=this.r
if(typeof p!=="number")return H.c(p)
o=this.c
if(typeof o!=="number")return o.j()
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.j()
e=this.z
d=this.cx
if(typeof e!=="number")return e.j()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.j()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.y().a)return V.bV()
a8=1/a7
a9=-r
b0=-d
return V.aX((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
j:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=b2.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=this.c
p=b2.y
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
o=this.d
n=b2.cx
m=b2.b
if(typeof m!=="number")return H.c(m)
l=b2.f
if(typeof l!=="number")return H.c(l)
k=b2.z
if(typeof k!=="number")return H.c(k)
j=b2.cy
i=b2.c
if(typeof i!=="number")return H.c(i)
h=b2.r
if(typeof h!=="number")return H.c(h)
g=b2.Q
if(typeof g!=="number")return H.c(g)
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
if(typeof a!=="number")return a.j()
a0=this.f
if(typeof a0!=="number")return a0.j()
a1=this.r
if(typeof a1!=="number")return a1.j()
a2=this.x
a3=this.y
if(typeof a3!=="number")return a3.j()
a4=this.z
if(typeof a4!=="number")return a4.j()
a5=this.Q
if(typeof a5!=="number")return a5.j()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aX(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
o=this.e
if(typeof o!=="number")return o.j()
n=this.f
if(typeof n!=="number")return n.j()
m=this.r
if(typeof m!=="number")return m.j()
l=this.y
if(typeof l!=="number")return l.j()
k=this.z
if(typeof k!=="number")return k.j()
j=this.Q
if(typeof j!=="number")return j.j()
return new V.B(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
T:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
o=this.e
if(typeof o!=="number")return o.j()
n=this.f
if(typeof n!=="number")return n.j()
m=this.r
if(typeof m!=="number")return m.j()
l=this.y
if(typeof l!=="number")return l.j()
k=this.z
if(typeof k!=="number")return k.j()
j=this.Q
if(typeof j!=="number")return j.j()
return new V.u(u*t+s*r+q*p+this.d,o*t+n*r+m*p+this.x,l*t+k*r+j*p+this.ch)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.U()},
eX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.x]
t=V.ca(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ca(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ca(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ca(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
U:function(){return this.eX("",3,0)},
H:function(a){return this.eX(a,3,0)}}
V.Q.prototype={
n:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.c(r)
return new V.Q(u-t,s-r)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.u.prototype={
k:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
return new V.u(u+t,s+r,q+p)},
n:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.c(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.c(p)
return new V.u(u-t,s-r,q-p)},
j:function(a,b){var u,t,s
u=this.a
if(typeof u!=="number")return u.j()
t=this.b
if(typeof t!=="number")return t.j()
s=this.c
if(typeof s!=="number")return s.j()
return new V.u(u*b,t*b,s*b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bw.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bw))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.dJ.prototype={
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dJ))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}
V.dK.prototype={
gaL:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
f6:function(a){var u,t,s,r,q,p,o
u=$.bf()
t=a.a
s=this.a
if(typeof t!=="number")return t.K()
if(t<s){r=$.aL()
u=new V.a_((u.a|r.a)>>>0)}else if(t>=s+this.c){r=$.aM()
u=new V.a_((u.a|r.a)>>>0)}else{r=$.jO()
u=new V.a_((u.a|r.a)>>>0)}r=a.b
q=this.b
if(typeof r!=="number")return r.K()
if(r<q)u=new V.a_((u.a|$.bg().a)>>>0)
else{p=u.a
u=r>=q+this.d?new V.a_((p|$.aN().a)>>>0):new V.a_((p|$.jP().a)>>>0)}p=u.a
o=$.aL().a
if(!((p&o)>>>0===o)){o=$.aM().a
if((p&o)>>>0===o){t=s+this.c
s=t}else s=t}t=$.bg().a
if(!((p&t)>>>0===t)){t=$.aN().a
if((p&t)>>>0===t){t=q+this.d
q=t}else q=r}return new V.Q(s,q)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.bz.prototype={
lK:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=this.a
if(typeof u!=="number")return u.k()
t=u+this.d
s=this.b
if(typeof s!=="number")return s.k()
r=s+this.e
q=this.c
if(typeof q!=="number")return q.k()
p=q+this.f
o=a6.a
if(typeof o!=="number")return o.K()
if(o<u){n=u-o
m=a6.d
if(typeof m!=="number")return H.c(m)
if(n>m)return
n/=m
l=$.aL()
k=u
j=!1
i=-1}else if(o>t){n=t-o
m=a6.d
if(typeof m!=="number")return H.c(m)
if(n<m)return
n/=m
l=$.aM()
k=t
j=!1
i=1}else{j=!0
n=-1
i=null
k=null
l=null}m=a6.b
if(typeof m!=="number")return m.K()
if(m<s){h=s-m
g=a6.e
if(typeof g!=="number")return H.c(g)
if(h>g)return
h/=g
f=$.bg()
e=s
j=!1
d=-1}else if(m>r){h=r-m
g=a6.e
if(typeof g!=="number")return H.c(g)
if(h<g)return
h/=g
f=$.aN()
e=r
j=!1
d=1}else{h=-1
d=null
e=null
f=null}g=a6.c
if(typeof g!=="number")return g.K()
if(g<q){c=q-g
b=a6.f
if(typeof b!=="number")return H.c(b)
if(c>b)return
c/=b
a=$.bh()
a0=q
j=!1
a1=-1}else if(g>p){c=p-g
b=a6.f
if(typeof b!=="number")return H.c(b)
if(c<b)return
c/=b
a=$.bi()
a0=p
j=!1
a1=1}else{c=-1
a1=null
a0=null
a=null}if(j){u=new V.B(a6.d,a6.e,a6.f)
return new V.bS(new V.u(o,m,g),u.A(0,Math.sqrt(u.E(u))).M(0),0,$.j4())}if(h>n)a2=c>h?2:1
else a2=c>n?2:0
switch(a2){case 0:u=a6.e
if(typeof u!=="number")return u.j()
a3=m+u*n
u=$.y()
o=u.a
if(s-o<a3){u.toString
s=a3<r}else s=!1
if(!s)return
s=a6.f
if(typeof s!=="number")return s.j()
a4=g+s*n
if(q-o<a4){u.toString
u=a4<p}else u=!1
if(!u)return
return new V.bS(new V.u(k,a3,a4),new V.B(i,0,0),n,l)
case 1:s=a6.d
if(typeof s!=="number")return s.j()
a5=o+s*h
s=$.y()
o=s.a
if(u-o<a5){s.toString
u=a5<t}else u=!1
if(!u)return
u=a6.f
if(typeof u!=="number")return u.j()
a4=g+u*h
if(q-o<a4){s.toString
u=a4<p}else u=!1
if(!u)return
return new V.bS(new V.u(a5,e,a4),new V.B(0,d,0),h,f)
default:q=a6.d
if(typeof q!=="number")return q.j()
a5=o+q*c
q=$.y()
o=q.a
if(u-o<a5){q.toString
u=a5<t}else u=!1
if(!u)return
u=a6.e
if(typeof u!=="number")return u.j()
a3=m+u*c
if(s-o<a3){q.toString
u=a3<r}else u=!1
if(!u)return
return new V.bS(new V.u(a5,a3,a0),new V.B(0,0,a1),c,a)}},
kY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=$.bf()
t=b.a
if(t!==0){if(typeof t!=="number")return t.bk()
if(t>0){s=$.aL()
r=s.a
if((c.a&r)>>>0===r){r=a.a
q=this.a
if(typeof q!=="number")return q.k()
p=$.y()
p.toString
if(typeof r!=="number")return r.n()
q=r-(q+this.d)
o=Math.abs(q)<p.a?0:q/t
n=!0}else{o=null
s=null
n=!1}}else{s=$.aM()
r=s.a
if((c.a&r)>>>0===r){r=a.a
if(typeof r!=="number")return r.k()
q=this.a
p=$.y()
p.toString
if(typeof q!=="number")return H.c(q)
q=r+a.d-q
o=Math.abs(q)<p.a?0:q/t
n=!0}else{o=null
s=null
n=!1}}if(n){if(typeof o!=="number")return o.K()
r=o<100&&o>=0&&o<=1}else r=!1
if(r){r=this.b
q=b.b
if(typeof q!=="number")return q.j()
if(typeof o!=="number")return H.c(o)
if(typeof r!=="number")return r.k()
m=r+q*o
r=a.b
if(typeof r!=="number")return r.k()
q=$.y().a
if(m-q<r+a.e&&r-q<m+this.e){r=this.c
p=b.c
if(typeof p!=="number")return p.j()
if(typeof r!=="number")return r.k()
l=r+p*o
r=a.c
if(typeof r!=="number")return r.k()
if(l-q<r+a.f&&r-q<l+this.f){k=s
j=o}else{k=u
j=100}}else{k=u
j=100}}else{k=u
j=100}}else{k=u
j=100
o=null
s=null}r=b.b
if(r!==0){if(typeof r!=="number")return r.bk()
if(r>0){i=$.bg()
q=i.a
if((c.a&q)>>>0===q){q=a.b
p=this.b
if(typeof p!=="number")return p.k()
h=$.y()
h.toString
if(typeof q!=="number")return q.n()
p=q-(p+this.e)
o=Math.abs(p)<h.a?0:p/r
s=i
n=!0}else n=!1}else{i=$.aN()
q=i.a
if((c.a&q)>>>0===q){q=a.b
if(typeof q!=="number")return q.k()
p=this.b
h=$.y()
h.toString
if(typeof p!=="number")return H.c(p)
p=q+a.e-p
o=Math.abs(p)<h.a?0:p/r
s=i
n=!0}else n=!1}if(n){if(typeof o!=="number")return o.K()
q=o<j&&o>=0&&o<=1}else q=!1
if(q){q=this.a
if(typeof t!=="number")return t.j()
if(typeof o!=="number")return H.c(o)
if(typeof q!=="number")return q.k()
g=q+t*o
q=a.a
if(typeof q!=="number")return q.k()
p=$.y().a
if(g-p<q+a.d&&q-p<g+this.d){q=this.c
h=b.c
if(typeof h!=="number")return h.j()
if(typeof q!=="number")return q.k()
l=q+h*o
q=a.c
if(typeof q!=="number")return q.k()
if(l-p<q+a.f&&q-p<l+this.f){k=s
j=o}}}}q=b.c
if(q!==0){if(typeof q!=="number")return q.bk()
if(q>0){i=$.bh()
p=i.a
if((c.a&p)>>>0===p){p=a.c
h=this.c
if(typeof h!=="number")return h.k()
f=$.y()
f.toString
if(typeof p!=="number")return p.n()
h=p-(h+this.f)
o=Math.abs(h)<f.a?0:h/q
s=i
n=!0}else n=!1}else{i=$.bi()
p=i.a
if((c.a&p)>>>0===p){p=a.c
if(typeof p!=="number")return p.k()
h=this.c
f=$.y()
f.toString
if(typeof h!=="number")return H.c(h)
h=p+a.f-h
o=Math.abs(h)<f.a?0:h/q
s=i
n=!0}else n=!1}if(n){if(typeof o!=="number")return o.K()
q=o<j&&o>=0&&o<=1}else q=!1
if(q){q=this.a
if(typeof t!=="number")return t.j()
if(typeof o!=="number")return H.c(o)
if(typeof q!=="number")return q.k()
g=q+t*o
t=a.a
if(typeof t!=="number")return t.k()
q=$.y().a
if(g-q<t+a.d&&t-q<g+this.d){t=this.b
if(typeof r!=="number")return r.j()
if(typeof t!=="number")return t.k()
m=t+r*o
t=a.b
if(typeof t!=="number")return t.k()
if(m-q<t+a.e&&t-q<m+this.e){k=s
j=o}}}}if(J.Z(k,u))return
return new V.f9(j,k)},
ce:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
return V.fN(u+t,s+r,q+p,this.d,this.e,this.f)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bz))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}
V.X.prototype={
de:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
return u*t+s*r},
j:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.j()
t=this.b
if(typeof t!=="number")return t.j()
return new V.X(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.ks
if(u==null){u=new V.X(0,0)
$.ks=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.X(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.B.prototype={
de:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r,q,p
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
return u*t+s*r+q*p},
bt:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=a.a
if(typeof q!=="number")return H.c(q)
p=this.a
if(typeof p!=="number")return p.j()
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
k:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
return new V.B(u+t,s+r,q+p)},
M:function(a){var u,t,s
u=this.a
if(typeof u!=="number")return u.M()
t=this.b
if(typeof t!=="number")return t.M()
s=this.c
if(typeof s!=="number")return s.M()
return new V.B(-u,-t,-s)},
j:function(a,b){var u,t,s
u=this.a
if(typeof u!=="number")return u.j()
t=this.b
if(typeof t!=="number")return t.j()
s=this.c
if(typeof s!=="number")return s.j()
return new V.B(u*b,t*b,s*b)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.y().a)return V.cQ()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.B(u/b,t/b,s/b)},
dd:function(){var u,t
u=this.a
t=$.y()
t.toString
if(typeof u!=="number")return H.c(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.c(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.c(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.eN.prototype={
cq:function(a){var u,t,s
u=this.a
t=this.c
s=this.b
if(u)return V.j1(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gu:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sdr:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.D("wrap",u,b,this,[P.Y])
u.b=!0
this.D(u)}},
sdf:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.y().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cq(t)}u=new D.D("maximumLocation",u,this.b,this,[P.x])
u.b=!0
this.D(u)}},
sdg:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cq(t)}u=new D.D("minimumLocation",u,this.c,this,[P.x])
u.b=!0
this.D(u)}},
sY:function(a,b){var u
b=this.cq(b==null?0:b)
u=this.d
if(!(Math.abs(u-b)<$.y().a)){this.d=b
u=new D.D("location",u,b,this,[P.x])
u.b=!0
this.D(u)}},
saK:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.y().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.D("maximumVelocity",u,a,this,[P.x])
u.b=!0
this.D(u)}},
sP:function(a){var u,t
u=a==null?0:a
t=this.e
a=-t
if(!(u<a))a=u>t?t:u
u=this.f
if(!(Math.abs(u-a)<$.y().a)){this.f=a
u=new D.D("velocity",u,a,this,[P.x])
u.b=!0
this.D(u)}},
saX:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.D("dampening",u,a,this,[P.x])
u.b=!0
this.D(u)}},
ag:function(a){var u,t,s,r,q
u=this.f
t=$.y().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sY(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.y().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sP(s)}}}
U.dc.prototype={
gu:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
aB:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cp.prototype={
gu:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
D:function(a){var u
H.h(a,"$iw")
u=this.e
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
hj:function(a,b){var u,t,s,r,q,p,o,n
u=U.a6
H.d(b,"$il",[u],"$al")
for(t=b.length,s=this.gaD(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gu()
n.toString
H.o(s,r)
if(n.a==null)n.sat(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.D(u)},
jd:function(a,b){var u,t,s
u=U.a6
H.d(b,"$il",[u],"$al")
for(t=b.gX(b),s=this.gaD();t.C();)t.gN().gu().Z(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.D(u)},
aB:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.K()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ao(u,u.length,0,[H.q(u,0)]),s=null;u.C();){t=u.d
if(t!=null){r=t.aB(a,b)
if(r!=null)s=s==null?r:r.j(0,s)}}this.f=s==null?V.bV():s
u=this.e
if(u!=null)u.aM()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.a6]},
$aT:function(){return[U.a6]},
$ia6:1}
U.cs.prototype={
gu:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
D:function(a){var u
H.h(a,"$iw")
u=this.b
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
aB:function(a,b){var u,t,s
u=this.d
t=a.e
if(u<t){this.d=t
u=this.b
if(u!=null)++u.d
u=this.a
u=u==null?null:u.aB(a,b)
s=u==null?null:u.bu()
this.c=s==null?V.bV():s
u=this.b
if(u!=null)u.aM()}return this.c},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$ia6:1}
U.a6.prototype={}
U.dL.prototype={
gu:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sfA:function(a){var u
a=V.j1(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.D("yaw",u,a,this,[P.x])
u.b=!0
this.D(u)}},
sfg:function(a){var u
a=V.j1(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.y().a)){this.b=a
u=new D.D("pitch",u,a,this,[P.x])
u.b=!0
this.D(u)}},
sfo:function(a){var u
a=V.j1(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.D("roll",u,a,this,[P.x])
u.b=!0
this.D(u)}},
aB:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfA(this.a+this.d*a.y)
this.sfg(this.b+this.e*a.y)
this.sfo(this.c+this.f*a.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.aX(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).j(0,V.k8(this.b)).j(0,V.k7(this.a))
u=this.y
if(u!=null)u.aM()}return this.x},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dL))return!1
u=this.a
t=b.a
s=$.y().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"], ["+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}
U.e3.prototype={
gu:function(){var u=this.fx
if(u==null){u=D.G()
this.fx=u}return u},
D:function(a){var u
H.h(a,"$iw")
u=this.fx
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
ad:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.G()
u.b=t
u=t}else u=t
u.h(0,this.gil())
u=this.a.c
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.gio())
u=this.a.c
t=u.c
if(t==null){t=D.G()
u.c=t
u=t}else u=t
u.h(0,this.giq())
u=this.a.d
t=u.f
if(t==null){t=D.G()
u.f=t
u=t}else u=t
u.h(0,this.gie())
u=this.a.d
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.gih())
u=this.a.e
t=u.b
if(t==null){t=D.G()
u.b=t
u=t}else u=t
u.h(0,this.gk7())
u=this.a.e
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.gk5())
u=this.a.e
t=u.c
if(t==null){t=D.G()
u.c=t
u=t}else u=t
u.h(0,this.gk_())
return!0},
aE:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.X(u,t)},
im:function(a){a=H.j(H.h(a,"$iw"),"$ib8")
if(!J.Z(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ip:function(a){var u,t,s,r,q,p,o
a=H.j(H.h(a,"$iw"),"$ib8")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.c(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.aE(new V.X(t.a,t.b).j(0,2).A(0,u.gaL()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.c(s)
t.sP(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.c(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.aE(new V.X(s.a,s.b).j(0,2).A(0,u.gaL()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.c(p)
o=this.cy
if(typeof o!=="number")return H.c(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.c(q)
s=this.db
if(typeof s!=="number")return H.c(s)
o.sY(0,-p*q+s)
this.b.sP(0)
this.c.sP(0)
t=t.n(0,a.z)
this.dx=this.aE(new V.X(t.a,t.b).j(0,2).A(0,u.gaL()))}this.ac()},
ir:function(a){var u,t,s
H.h(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.c(s)
u.sP(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.c(u)
s.sP(-t*10*u)
this.ac()}},
ig:function(a){if(H.j(H.h(a,"$iw"),"$idu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
ii:function(a){var u,t,s,r,q,p,o
a=H.j(H.h(a,"$iw"),"$ib8")
if(!J.Z(this.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=this.aE(new V.X(s.a,s.b).j(0,2).A(0,u.gaL()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.c(p)
o=this.cy
if(typeof o!=="number")return H.c(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.c(q)
s=this.db
if(typeof s!=="number")return H.c(s)
o.sY(0,-p*q+s)
this.b.sP(0)
this.c.sP(0)
t=t.n(0,a.z)
this.dx=this.aE(new V.X(t.a,t.b).j(0,2).A(0,u.gaL()))
this.ac()},
k8:function(a){H.h(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
k6:function(a){var u,t,s,r,q,p,o
a=H.j(H.h(a,"$iw"),"$idY")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.c(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.aE(new V.X(t.a,t.b).j(0,2).A(0,u.gaL()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.c(s)
t.sP(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.c(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.aE(new V.X(s.a,s.b).j(0,2).A(0,u.gaL()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.c(p)
o=this.cy
if(typeof o!=="number")return H.c(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.c(q)
s=this.db
if(typeof s!=="number")return H.c(s)
o.sY(0,-p*q+s)
this.b.sP(0)
this.c.sP(0)
t=t.n(0,a.z)
this.dx=this.aE(new V.X(t.a,t.b).j(0,2).A(0,u.gaL()))}this.ac()},
k0:function(a){var u,t,s
H.h(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.c(s)
u.sP(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.c(u)
s.sP(-t*10*u)
this.ac()}},
aB:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.K()
if(u<t){this.dy=t
s=a.y
this.c.ag(s)
this.b.ag(s)
this.fr=V.k7(this.b.d).j(0,V.k8(this.c.d))}return this.fr},
$ia6:1}
U.e4.prototype={
gu:function(){var u=this.dx
if(u==null){u=D.G()
this.dx=u}return u},
D:function(a){var u
H.h(a,"$iw")
u=this.dx
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
sP:function(a){this.r.sP(a.a)
this.x.sP(a.b)
this.y.sP(a.c)},
gY:function(a){return new V.u(this.r.d,this.x.d,this.y.d)},
sY:function(a,b){this.r.sY(0,b.a)
this.x.sY(0,b.b)
this.y.sY(0,b.c)},
iY:function(a){this.D(H.h(a,"$iw"))},
cO:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.k()
e+=d}else if(b.r){if(typeof e!=="number")return e.n()
e-=d}else{if(typeof e!=="number")return e.bk()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b){var u,t,s,r,q,p,o
u=this.cy
t=a.e
if(typeof u!=="number")return u.K()
if(u<t){this.cy=t
s=this.gY(this)
r=a.y
if(r>0.1)r=0.1
u=this.ch
if(typeof u!=="number")return u.j()
q=u*r
u=this.cx
if(typeof u!=="number")return u.j()
p=u*r
o=new V.B(this.r.f,this.x.f,this.y.f)
u=this.Q
if(u!=null)o=u.aA(o)
o=new V.B(this.cO(this.a,this.b,q,p,o.a),this.cO(this.c,this.d,q,p,o.b),this.cO(this.e,this.f,q,p,o.c))
u=this.z
this.sP(u!=null?u.aA(o):o)
this.r.ag(r)
this.x.ag(r)
this.y.ag(r)
if(this.dy!=null){u=this.gY(this)
this.sY(0,this.dy.$2(s,u))}this.db=V.dw(this.r.d,-this.x.d,this.y.d)}return this.db},
sdQ:function(a){this.dy=H.o(a,{func:1,ret:V.u,args:[V.u,V.u]})},
$ia6:1}
M.df.prototype={
b4:function(a){var u
H.h(a,"$iw")
u=this.x
if(u!=null)u.F(a)},
hk:function(){return this.b4(null)},
iI:function(a,b){var u,t,s,r,q,p,o,n
u=E.U
H.d(b,"$il",[u],"$al")
for(t=b.length,s=this.gb3(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.sat(null)
n.sbL(null)
n.c=null
n.d=0
o.z=n}H.o(s,r)
if(n.a==null)n.sat(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.b4(u)},
iK:function(a,b){var u,t,s
u=E.U
H.d(b,"$il",[u],"$al")
for(t=b.gX(b),s=this.gb3();t.C();)t.gN().gu().Z(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.b4(u)},
gu:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=new E.h6(a,this)
u.b=!0
t=this.e
if(t!=null)t.F(u)
a.fk(this.c)
t=this.b
t.toString
s=a.a
C.b.kQ(s,36160,null)
C.b.d1(s,2884)
C.b.d1(s,2929)
C.b.l6(s,513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.c(r)
n=C.j.ay(o*r)
o=p.b
if(typeof q!=="number")return H.c(q)
m=C.j.ay(o*q)
o=C.j.ay(p.c*r)
a.c=o
p=C.j.ay(p.d*q)
a.d=p
C.b.m4(s,n,m,o,p)
C.b.kW(s,t.c)
t=t.a
C.b.kV(s,t.a,t.b,t.c,t.d)
C.b.kU(s,16640)
t=this.a
s=a.c
p=a.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.aX(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t.a
a.cy.fj(h)
s=$.kc
if(s==null){s=V.k6(V.dG(),V.kA(),V.kz())
$.kc=s
g=s}else g=s
s=t.b
if(s!=null){f=s.aB(a,t)
if(f!=null)g=f.j(0,g)}a.db.fj(g)
for(t=this.d.a,t=new J.ao(t,t.length,0,[H.q(t,0)]);t.C();)t.d.ag(a)
for(t=this.d.a,t=new J.ao(t,t.length,0,[H.q(t,0)]);t.C();)t.d.bi(a)
this.a.toString
a.cy.di()
a.db.di()
this.b.toString
a.fh()},
shK:function(a,b){this.d=H.d(b,"$iT",[E.U],"$aT")},
$io1:1}
A.d6.prototype={}
A.eE.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
lc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.ez(r.a,r.c)}},
l8:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.ex(r.a,r.c)}}}
A.fp.prototype={
fY:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.ko(u)
a7.kv(u)
a7.kp(u)
a7.kD(u)
a7.kE(u)
a7.kx(u)
a7.kI(u)
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
s.ks(u)
s.kn(u)
s.kq(u)
s.kt(u)
s.kB(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.kz(u)
s.kA(u)}s.kw(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
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
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.m])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.B(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.kr(u)
s.ky(u)
s.kC(u)
s.kF(u)
s.kG(u)
s.kH(u)
s.ku(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.m])
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
i="vec4("+C.a.B(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dX(n,35633)
this.f=this.dX(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.em(s,q,this.e)
C.b.em(s,this.r,this.f)
C.b.lm(s,this.r)
if(!H.kX(C.b.ci(s,this.r,35714))){h=C.b.fK(s,this.r)
C.b.l2(s,this.r)
H.r(P.v("Failed to link shader: "+H.k(h)))}this.jM()
this.jO()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a7.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$iau")
if(t)this.dy=H.j(this.y.p(0,"objMat"),"$iau")
if(r)this.fr=H.j(this.y.p(0,"viewObjMat"),"$iau")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$iau")
if(a7.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$icJ")
if(a7.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$iau")
if(a7.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$iau")
this.shD(H.b([],[A.au]))
t=a7.aI
if(t>0){this.k4=H.h(this.y.p(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.l(0,q)
if(f==null)H.r(P.v("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(f,"$iau"))}}t=a7.a
if(t!==C.d){this.r2=H.j(this.y.p(0,"emissionClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.rx=H.j(this.y.p(0,"emissionTxt"),"$iam")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.h:this.ry=H.j(this.y.p(0,"emissionTxt"),"$ian")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.d){this.x2=H.j(this.y.p(0,"ambientClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.y1=H.j(this.y.p(0,"ambientTxt"),"$iam")
this.aI=H.j(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.h:this.y2=H.j(this.y.p(0,"ambientTxt"),"$ian")
this.aI=H.j(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.d){this.ax=H.j(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.bS=H.j(this.y.p(0,"diffuseTxt"),"$iam")
this.bT=H.j(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.h:this.eA=H.j(this.y.p(0,"diffuseTxt"),"$ian")
this.bT=H.j(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.d){this.bU=H.j(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.eB=H.j(this.y.p(0,"invDiffuseTxt"),"$iam")
this.bV=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.h:this.eC=H.j(this.y.p(0,"invDiffuseTxt"),"$ian")
this.bV=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.d){this.bY=H.j(this.y.p(0,"shininess"),"$iW")
this.bW=H.j(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.eD=H.j(this.y.p(0,"specularTxt"),"$iam")
this.bX=H.j(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.h:this.eE=H.j(this.y.p(0,"specularTxt"),"$ian")
this.bX=H.j(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.d:break
case C.i:break
case C.f:this.eF=H.j(this.y.p(0,"bumpTxt"),"$iam")
this.bZ=H.j(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.h:this.eG=H.j(this.y.p(0,"bumpTxt"),"$ian")
this.bZ=H.j(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.eH=H.j(this.y.p(0,"envSampler"),"$ian")
this.eI=H.j(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.d){this.c_=H.j(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.eJ=H.j(this.y.p(0,"reflectTxt"),"$iam")
this.c0=H.j(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.h:this.eK=H.j(this.y.p(0,"reflectTxt"),"$ian")
this.c0=H.j(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.d){this.c1=H.j(this.y.p(0,"refraction"),"$iW")
this.c2=H.j(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.i:break
case C.f:this.eL=H.j(this.y.p(0,"refractTxt"),"$iam")
this.c3=H.j(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.h:this.eM=H.j(this.y.p(0,"refractTxt"),"$ian")
this.c3=H.j(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.d){this.c4=H.j(this.y.p(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.i:break
case C.f:this.eN=H.j(this.y.p(0,"alphaTxt"),"$iam")
this.c5=H.j(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.h:this.eO=H.j(this.y.p(0,"alphaTxt"),"$ian")
this.c5=H.j(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.shU(H.b([],[A.cI]))
this.sjr(H.b([],[A.cK]))
this.sjT(H.b([],[A.cL]))
this.skf(H.b([],[A.cM]))
this.skg(H.b([],[A.cN]))
this.skh(H.b([],[A.cO]))
if(a7.k2){t=a7.z
if(t>0){this.eP=H.h(this.y.p(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.l(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.l(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.d2;(s&&C.a).h(s,new A.cI(g,f,e))}}t=a7.Q
if(t>0){this.eQ=H.h(this.y.p(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.l(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.l(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iW")
s=this.y
r="pntLights["+g+"].att1"
b=s.l(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="pntLights["+g+"].att2"
a=s.l(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.d3;(s&&C.a).h(s,new A.cK(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eR=H.h(this.y.p(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.l(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.l(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.l(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="spotLights["+g+"].att0"
a0=s.l(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="spotLights["+g+"].att1"
a1=s.l(0,r)
if(a1==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="spotLights["+g+"].att2"
a2=s.l(0,r)
if(a2==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.d4;(s&&C.a).h(s,new A.cL(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eS=H.h(this.y.p(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.l(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.l(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.l(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.l(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.l(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.l(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iam")
s=this.d5;(s&&C.a).h(s,new A.cM(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eT=H.h(this.y.p(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.l(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$icJ")
s=this.y
r="txtPntLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.l(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.l(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.l(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.l(0,r)
if(a1==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.l(0,r)
if(a2==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$ian")
s=this.d6;(s&&C.a).h(s,new A.cN(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eU=H.h(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.l(0,r)
if(d==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.l(0,r)
if(c==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.l(0,r)
if(b==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.l(0,r)
if(a0==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.l(0,r)
if(a1==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.l(0,r)
if(a2==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.l(0,r)
if(a3==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iW")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.l(0,r)
if(a4==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iW")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.l(0,r)
if(a5==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.l(0,r)
if(a6==null)H.r(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a6,"$iam")
s=this.d7;(s&&C.a).h(s,new A.cO(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
av:function(a,b,c){if(c==null||!c.gaj(c))C.b.S(b.a,b.d,1)
else{a.fP(c)
C.b.S(b.a,b.d,0)}},
ao:function(a,b,c){C.b.S(b.a,b.d,1)},
shD:function(a){this.r1=H.d(a,"$ia",[A.au],"$aa")},
shU:function(a){this.d2=H.d(a,"$ia",[A.cI],"$aa")},
sjr:function(a){this.d3=H.d(a,"$ia",[A.cK],"$aa")},
sjT:function(a){this.d4=H.d(a,"$ia",[A.cL],"$aa")},
skf:function(a){this.d5=H.d(a,"$ia",[A.cM],"$aa")},
skg:function(a){this.d6=H.d(a,"$ia",[A.cN],"$aa")},
skh:function(a){this.d7=H.d(a,"$ia",[A.cO],"$aa")}}
A.fs.prototype={
ko:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
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
kv:function(a){var u
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
kp:function(a){var u
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
kD:function(a){var u,t
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
kE:function(a){var u,t
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
kx:function(a){var u
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
kI:function(a){var u
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
aP:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.b1(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ks:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aP(a,u,"emission")
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
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
kn:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aP(a,u,"ambient")
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
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
kq:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aP(a,u,"diffuse")
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
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
kt:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aP(a,u,"invDiffuse")
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
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
kB:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aP(a,u,"specular")
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
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
kw:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
kz:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aP(a,u,"reflect")
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
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
kA:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aP(a,u,"refract")
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
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
kr:function(a){var u,t
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
ky:function(a){var u,t
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
kC:function(a){var u,t
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
kF:function(a){var u,t,s
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
kG:function(a){var u,t,s
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
kH:function(a){var u,t,s
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
ku:function(a){var u
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
i:function(a){return this.ax}}
A.cI.prototype={}
A.cM.prototype={}
A.cK.prototype={}
A.cN.prototype={}
A.cL.prototype={}
A.cO.prototype={}
A.cB.prototype={
h1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dX:function(a,b){var u,t,s
u=this.a
t=C.b.l0(u,b)
C.b.fQ(u,t,a)
C.b.kZ(u,t)
if(!H.kX(C.b.fM(u,t,35713))){s=C.b.fL(u,t)
C.b.l3(u,t)
throw H.f(P.v("Error compiling shader '"+H.k(t)+"': "+H.k(s)))}return t},
jM:function(){var u,t,s,r,q,p
u=H.b([],[A.d6])
t=this.a
s=H.ac(C.b.ci(t,this.r,35721))
if(typeof s!=="number")return H.c(s)
r=0
for(;r<s;++r){q=C.b.fE(t,this.r,r)
p=C.b.fG(t,this.r,q.name)
C.a.h(u,new A.d6(t,q.name,p))}this.x=new A.eE(u)},
jO:function(){var u,t,s,r,q,p
u=H.b([],[A.dZ])
t=this.a
s=H.ac(C.b.ci(t,this.r,35718))
if(typeof s!=="number")return H.c(s)
r=0
for(;r<s;++r){q=C.b.fF(t,this.r,r)
p=C.b.fN(t,this.r,q.name)
C.a.h(u,this.l1(q.type,q.size,q.name,p))}this.y=new A.hy(u)},
b8:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.jo(u,t,b,a,c)},
hP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.am(u,t,b,c)
else return A.jo(u,t,b,a,c)},
hQ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.jo(u,t,b,a,c)},
bN:function(a,b){return new P.eb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
l1:function(a,b,c,d){switch(a){case 5120:return this.b8(b,c,d)
case 5121:return this.b8(b,c,d)
case 5122:return this.b8(b,c,d)
case 5123:return this.b8(b,c,d)
case 5124:return this.b8(b,c,d)
case 5125:return this.b8(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.ht(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.hw(this.a,this.r,c,d)
case 35667:return new A.hu(this.a,this.r,c,d)
case 35668:return new A.hv(this.a,this.r,c,d)
case 35669:return new A.hx(this.a,this.r,c,d)
case 35674:return new A.hz(this.a,this.r,c,d)
case 35675:return new A.cJ(this.a,this.r,c,d)
case 35676:return new A.au(this.a,this.r,c,d)
case 35678:return this.hP(b,c,d)
case 35680:return this.hQ(b,c,d)
case 35670:throw H.f(this.bN("BOOL",c))
case 35671:throw H.f(this.bN("BOOL_VEC2",c))
case 35672:throw H.f(this.bN("BOOL_VEC3",c))
case 35673:throw H.f(this.bN("BOOL_VEC4",c))
default:throw H.f(P.v("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bK.prototype={
i:function(a){return this.b}}
A.dZ.prototype={}
A.hy.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.l(0,b)
if(u==null)throw H.f(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.U()},
lg:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
U:function(){return this.lg("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.hs.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
skm:function(a){this.e=H.d(a,"$ia",[P.i],"$aa")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cJ.prototype={
aC:function(a){var u=new Float32Array(H.c5(H.d(a,"$ia",[P.x],"$aa")))
C.b.ft(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.au.prototype={
aC:function(a){var u=new Float32Array(H.c5(H.d(a,"$ia",[P.x],"$aa")))
C.b.fu(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.am.prototype={
fP:function(a){var u,t,s
u=a.gaj(a)
t=this.a
s=this.d
if(!u)C.b.S(t,s,0)
else C.b.S(t,s,a.gai(a))},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.an.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.a9.prototype={
hC:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cQ()
if(t!=null)q=q.k(0,t)
if(s!=null)q=q.k(0,s)
if(r!=null)q=q.k(0,r)
if(q.dd())return
return q.A(0,Math.sqrt(q.E(q)))},
hJ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.n(0,t)
u=new V.B(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.E(u)))
u=r.n(0,t)
u=new V.B(u.a,u.b,u.c)
u=q.bt(u.A(0,Math.sqrt(u.E(u))))
return u.A(0,Math.sqrt(u.E(u)))},
cY:function(){if(this.d!=null)return!0
var u=this.hC()
if(u==null){u=this.hJ()
if(u==null)return!1}this.d=u
this.a.a.af()
return!0},
hB:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cQ()
if(t!=null)q=q.k(0,t)
if(s!=null)q=q.k(0,s)
if(r!=null)q=q.k(0,r)
if(q.dd())return
return q.A(0,Math.sqrt(q.E(q)))},
hI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
i=u-t
if(Math.abs(i-0)<$.y().a){u=m.n(0,p)
u=new V.B(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.E(u)))
u=j.a
k=k.a
if(typeof u!=="number")return u.n()
if(typeof k!=="number")return H.c(k)
if(u-k<0)h=h.M(0)}else{t=l.b
if(typeof t!=="number")return H.c(t)
g=(u-t)/i
t=m.n(0,p).j(0,g).k(0,p).n(0,s)
t=new V.B(t.a,t.b,t.c)
h=t.A(0,Math.sqrt(t.E(t)))
j=j.a
k=k.a
if(typeof j!=="number")return j.n()
if(typeof k!=="number")return H.c(k)
l=l.a
if(typeof l!=="number")return H.c(l)
if((j-k)*g+k-l<0)h=h.M(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.E(u)))
u=f.bt(h)
u=u.A(0,Math.sqrt(u.E(u))).bt(f)
h=u.A(0,Math.sqrt(u.E(u)))}return h},
cX:function(){if(this.e!=null)return!0
var u=this.hB()
if(u==null){u=this.hI()
if(u==null)return!1}this.e=u
this.a.a.af()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.b_(J.aO(u.e),0)+", "+C.c.b_(J.aO(this.b.e),0)+", "+C.c.b_(J.aO(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
U:function(){return this.H("")}}
F.bu.prototype={}
F.bY.prototype={}
F.cA.prototype={
gu:function(){var u=this.Q
if(u==null){u=D.G()
this.Q=u}return u},
br:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.d(a,"$ia",[F.b0],"$aa")
u=a.length
t=new Array(u*this.c)
t.fixed$length=Array
s=H.b(t,[P.x])
for(t=this.a,r=0,q=0;q<this.b;++q){p=t.cR(q)
for(o=0;o<u;++o){if(o>=a.length)return H.e(a,o)
n=a[o].f4(p)
m=r+o*this.c
for(l=0;l<n.length;++l){C.a.m(s,m,n[l]);++m}}r+=p.gbl(p)}k=$.a8()
if((t.a&k.a)!==0){t=this.z
if(t==null){if(0>=a.length)return H.e(a,0)
t=a[0].f
t=V.fN(t.a,t.b,t.c,0,0,0)
this.z=t}for(q=u-1;q>=0;--q){if(q>=a.length)return H.e(a,q)
k=a[q].f
j=k.a
i=k.b
k=k.c
h=t.d
g=t.a
if(typeof j!=="number")return j.K()
if(typeof g!=="number")return H.c(g)
if(j<g){h+=g-j
f=j}else{if(j>g+h)h=j-g
f=g}e=t.e
j=t.b
if(typeof i!=="number")return i.K()
if(typeof j!=="number")return H.c(j)
if(i<j){e+=j-i
d=i}else{if(i>j+e)e=i-j
d=j}c=t.f
t=t.c
if(typeof k!=="number")return k.K()
if(typeof t!=="number")return H.c(t)
if(k<t){c+=t-k
b=k}else{if(k>t+c)c=k-t
b=t}t=new V.bz(f,d,b,h,e,c)
this.z=t}}m=this.d
this.d=m+u
C.a.aT(this.f,s)
this.af()
return m},
bq:function(a){var u,t,s,r,q,p,o
u=P.i
H.d(a,"$ia",[u],"$aa")
t=a.length
if(t>=3){s=new Array((t-2)*3)
s.fixed$length=Array
r=H.b(s,[u])
if(0>=a.length)return H.e(a,0)
q=a[0]
for(p=2,o=0;p<t;++p,o+=3){C.a.m(r,o,q)
u=p-1
if(u>=a.length)return H.e(a,u)
C.a.m(r,o+1,a[u])
if(p>=a.length)return H.e(a,p)
C.a.m(r,o+2,a[p])}C.a.aT(this.y,r)
this.af()}},
kM:function(a){var u,t,s,r,q,p,o,n,m,l
u=P.i
H.d(a,"$ia",[u],"$aa")
t=a.length
if(t>=3){s=new Array((t-2)*3)
s.fixed$length=Array
r=H.b(s,[u])
for(q=!1,p=2,o=0;p<t;++p,o+=3){u=p-2
s=o+1
n=p-1
m=o+2
l=a.length
if(q){if(u>=l)return H.e(a,u)
C.a.m(r,o,a[u])
if(n>=a.length)return H.e(a,n)
C.a.m(r,s,a[n])
if(p>=a.length)return H.e(a,p)
C.a.m(r,m,a[p])
q=!1}else{if(n>=l)return H.e(a,n)
C.a.m(r,o,a[n])
if(u>=a.length)return H.e(a,u)
C.a.m(r,s,a[u])
if(p>=a.length)return H.e(a,p)
C.a.m(r,m,a[p])
q=!0}}C.a.aT(this.y,r)
this.af()}},
aa:function(a){var u=this.Q
if(u!=null)u.F(a)},
af:function(){return this.aa(null)},
aW:function(){return!1},
bf:function(){return!1},
bP:function(){return!1},
er:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.a
if(!J.Z(b,u))throw H.f(P.v("Shape was reduced to "+H.k(u)+" so can not build for "+H.k(b)+"."))
if(this.e==null){t=this.c*4
s=new Array(this.b)
s.fixed$length=Array
this.shA(H.b(s,[Z.bm]))
for(r=0,q=0;q<this.b;++q){p=u.cR(q)
o=p.gbl(p)
s=this.e;(s&&C.a).m(s,q,new Z.bm(p,o,r*4,t,0))
r+=o}}s=a.a
n=new Z.cj(Z.kB(s,34962,H.d(this.f,"$ia",[P.x],"$aa")),this.e,u)
n.se0(H.b([],[Z.aF]))
u=this.r
if(u.length!==0){m=Z.e6(s,34963,H.d(u,"$ia",[P.i],"$aa"))
C.a.h(n.b,new Z.aF(0,this.r.length,m))}u=this.x
if(u.length!==0){m=Z.e6(s,34963,H.d(u,"$ia",[P.i],"$aa"))
C.a.h(n.b,new Z.aF(1,this.x.length,m))}u=this.y
if(u.length!==0){m=Z.e6(s,34963,H.d(u,"$ia",[P.i],"$aa"))
C.a.h(n.b,new Z.aF(4,this.y.length,m))}return n},
shA:function(a){this.e=H.d(a,"$ia",[Z.bm],"$aa")},
scP:function(a){this.f=H.d(a,"$ia",[P.x],"$aa")},
sbo:function(a){this.r=H.d(a,"$ia",[P.i],"$aa")},
scA:function(a){this.x=H.d(a,"$ia",[P.i],"$aa")},
scv:function(a){this.y=H.d(a,"$ia",[P.i],"$aa")},
$icC:1}
F.dN.prototype={
gu:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
aW:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aW()||!1
if(!this.a.aW())t=!1
u=this.e
if(u!=null)u.aM()
return t},
bf:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.bf()||!1
if(!this.a.bf())t=!1
u=this.e
if(u!=null)u.aM()
return t},
bP:function(){var u=this.e
if(u!=null)++u.d
this.a.bP()
u=this.e
if(u!=null)u.aM()
return!0},
er:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u=this.a.c.length
t=a0.gev()
s=a0.gbl(a0)
r=s*4
q=new Array(u*s)
q.fixed$length=Array
p=P.x
o=H.b(q,[p])
q=new Array(t)
q.fixed$length=Array
n=H.b(q,[Z.bm])
for(m=0,l=0;l<t;++l){k=a0.cR(l)
j=k.gbl(k)
C.a.m(n,l,new Z.bm(k,j,m*4,r,0))
for(i=0;i<u;++i){q=this.a.c
if(i>=q.length)return H.e(q,i)
h=q[i].f4(k)
g=m+i*s
for(f=0;f<h.length;++f){C.a.m(o,g,h[f]);++g}}m+=j}q=a.a
e=new Z.cj(Z.kB(q,34962,H.d(o,"$ia",[p],"$aa")),n,a0)
e.se0(H.b([],[Z.aF]))
this.b.b
if(this.c.b.length!==0){p=P.i
d=H.b([],[p])
for(l=0;c=this.c.b,l<c.length;++l){c=c[l].a
c.a.a.bd()
C.a.h(d,c.e)
c=this.c.b
if(l>=c.length)return H.e(c,l)
c=c[l].b
c.a.a.bd()
C.a.h(d,c.e)}b=Z.e6(q,34963,H.d(d,"$ia",[p],"$aa"))
C.a.h(e.b,new Z.aF(1,d.length,b))}if(this.d.b.length!==0){p=P.i
d=H.b([],[p])
for(l=0;c=this.d.b,l<c.length;++l){c=c[l].a
c.a.a.bd()
C.a.h(d,c.e)
c=this.d.b
if(l>=c.length)return H.e(c,l)
c=c[l].b
c.a.a.bd()
C.a.h(d,c.e)
c=this.d.b
if(l>=c.length)return H.e(c,l)
c=c[l].c
c.a.a.bd()
C.a.h(d,c.e)}b=Z.e6(q,34963,H.d(d,"$ia",[p],"$aa"))
C.a.h(e.b,new Z.aF(4,d.length,b))}return e},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.H("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.H("   "))}return C.a.B(u,"\n")},
aa:function(a){var u=this.e
if(u!=null)u.F(a)},
af:function(){return this.aa(null)},
$icC:1}
F.cC.prototype={}
F.fV.prototype={
kJ:function(a){var u,t,s,r,q,p,o,n
H.d(a,"$ia",[F.b0],"$aa")
u=H.b([],[F.a9])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
o=new F.a9()
n=t.a
if(n==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(n!=q.a||n!=p.a)H.r(P.v("May not create a face with vertices attached to different shapes."))
o.a=t
C.a.h(t.d.b,o)
o.b=q
C.a.h(q.d.c,o)
o.c=p
C.a.h(p.d.d,o)
C.a.h(o.a.a.d.b,o)
q=o.a.a.e
if(q!=null)q.F(null)
C.a.h(u,o)}return u},
gq:function(a){return this.b.length},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cY())s=!1
return s},
bf:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cX())s=!1
return s},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
U:function(){return this.H("")},
scv:function(a){this.b=H.d(a,"$ia",[F.a9],"$aa")}}
F.fW.prototype={
gq:function(a){return this.b.length},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.b([],[P.m])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].H(a+(""+s+". ")))}return C.a.B(u,"\n")},
U:function(){return this.H("")},
scA:function(a){this.b=H.d(a,"$ia",[F.bu],"$aa")}}
F.fX.prototype={
gq:function(a){return 0},
i:function(a){return this.U()},
H:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.h(u,t[s].H(a))}return C.a.B(u,"\n")},
U:function(){return this.H("")},
sbo:function(a){this.b=H.d(a,"$ia",[F.bY],"$aa")}}
F.b0.prototype={
f4:function(a){var u,t
u=J.N(a)
if(u.t(a,$.a8())){u=this.f
t=[P.x]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(u.t(a,$.ai())){u=this.r
t=[P.x]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(u.t(a,$.bk())){u=this.x
t=[P.x]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(u.t(a,$.ad())){u=this.y
t=[P.x]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(u.t(a,$.bl())){u=this.z
t=[P.x]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(u.t(a,$.d2())){u=this.Q
t=[P.x]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(u.t(a,$.d3())){u=this.Q
t=[P.x]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(u.t(a,$.cf()))return H.b([this.ch],[P.x])
else if(u.t(a,$.bj())){u=this.cx
t=[P.x]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.x])},
cY:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cQ()
this.d.a6(0,new F.hU(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.af()
u=this.a.e
if(u!=null)u.aM()}return!0},
cX:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cQ()
this.d.a6(0,new F.hT(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.af()
u=this.a.e
if(u!=null)u.aM()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
H:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.c.b_(J.aO(this.e),0))
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
C.a.h(u,V.A(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.B(u,", ")
return a+"{"+s+"}"},
U:function(){return this.H("")}}
F.hU.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.k(0,u)}},
$S:7}
F.hT.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.k(0,u)}},
$S:7}
F.hN.prototype={
bd:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.v("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.af()
return!0},
kL:function(a,b,c,d,e,f,g,h,i){var u=F.c3(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bO:function(a,b,c,d,e,f){return this.kL(a,null,b,c,null,d,e,f,0)},
gq:function(a){return this.c.length},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cY()
return!0},
bf:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cX()
return!0},
bP:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.j()
o=q.b
if(typeof o!=="number")return o.j()
n=q.c
if(typeof n!=="number")return n.j()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
this.bd()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
U:function(){return this.H("")},
scP:function(a){this.c=H.d(a,"$ia",[F.b0],"$aa")}}
F.hO.prototype={
gq:function(a){return this.b.length+this.c.length+this.d.length},
a6:function(a,b){H.o(b,{func:1,ret:-1,args:[F.a9]})
C.a.a6(this.b,b)
C.a.a6(this.c,new F.hP(this,b))
C.a.a6(this.d,new F.hQ(this,b))},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
U:function(){return this.H("")},
shX:function(a){this.b=H.d(a,"$ia",[F.a9],"$aa")},
shY:function(a){this.c=H.d(a,"$ia",[F.a9],"$aa")},
shZ:function(a){this.d=H.d(a,"$ia",[F.a9],"$aa")}}
F.hP.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:7}
F.hQ.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:7}
F.hR.prototype={
gq:function(a){return this.b.length+this.c.length},
i:function(a){return this.U()},
H:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
U:function(){return this.H("")},
sia:function(a){this.b=H.d(a,"$ia",[F.bu],"$aa")},
sib:function(a){this.c=H.d(a,"$ia",[F.bu],"$aa")}}
F.hS.prototype={
gq:function(a){return 0},
i:function(a){return this.U()},
H:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.h(u,t[s].H(a))}return C.a.B(u,"\n")},
U:function(){return this.H("")},
sbo:function(a){this.b=H.d(a,"$ia",[F.bY],"$aa")}}
O.bU.prototype={
gu:function(){var u=this.dy
if(u==null){u=D.G()
this.dy=u}return u},
a_:function(a){var u
H.h(a,"$iw")
u=this.dy
if(u!=null)u.F(a)},
cp:function(){return this.a_(null)},
eb:function(a){H.h(a,"$iw")
this.a=null
this.a_(a)},
jF:function(){return this.eb(null)},
iw:function(a,b){var u=V.ak
u=new D.br(a,H.d(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a_(u)},
iy:function(a,b){var u=V.ak
u=new D.bs(a,H.d(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a_(u)},
dU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.a8(u.e.length+3,4)*4
s=C.e.a8(u.f.length+3,4)*4
r=C.e.a8(u.r.length+3,4)*4
q=C.e.a8(u.x.length+3,4)*4
p=C.e.a8(u.y.length+3,4)*4
o=C.e.a8(u.z.length+3,4)*4
n=C.e.a8(this.e.a.length+3,4)*4
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
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.a8()
if(a0){b=$.ai()
a7=new Z.a7(a7.a|b.a)}if(a1){b=$.bk()
a7=new Z.a7(a7.a|b.a)}if(a2){b=$.ad()
a7=new Z.a7(a7.a|b.a)}if(a3){b=$.bl()
a7=new Z.a7(a7.a|b.a)}if(a5){b=$.bj()
a7=new Z.a7(a7.a|b.a)}return new A.fs(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.d(a,"$ia",[T.cF],"$aa")
if(b!=null)if(!C.a.aw(a,b)){b.sai(0,a.length)
C.a.h(a,b)}},
ag:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ao(u,u.length,0,[H.q(u,0)]);u.C();){t=u.d
t.toString
s=$.hM
if(s==null){s=new V.B(0,0,1)
$.hM=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.aA(s)}}},
lM:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dU()
t=a4.fr.l(0,u.ax)
if(t==null){t=A.lY(u,a4.a)
s=t.b
if(s.length===0)H.r(P.v("May not cache a shader with no name."))
if(a4.fr.bR(s))H.r(P.v('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.m(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bS
u=a5.e
if(!(u instanceof Z.cj)){a5.e=null
u=null}if(u==null||!J.Z(u.d,q)){u=r.r1
if(u)a5.d.aW()
p=r.r2
if(p)a5.d.bf()
o=r.ry
if(o)a5.d.bP()
n=a5.d.er(new Z.hW(a4.a),q)
n.bg($.a8()).e=this.a.Q.c
if(u)n.bg($.ai()).e=this.a.cx.c
if(p)n.bg($.bk()).e=this.a.ch.c
if(r.rx)n.bg($.ad()).e=this.a.cy.c
if(o)n.bg($.bl()).e=this.a.db.c
if(r.x1)n.bg($.bj()).e=this.a.dx.c
a5.e=n}u=T.cF
m=H.b([],[u])
p=this.a
o=a4.a
C.b.fw(o,p.r)
p.x.lc()
if(r.fx){p=this.a
l=a4.dx.ga2()
p=p.dy
p.toString
p.aC(l.as(0,!0))}if(r.fy){p=this.a
l=a4.cx
if(l==null){l=a4.db.ga2().j(0,a4.dx.ga2())
a4.cx=l}p=p.fr
p.toString
p.aC(l.as(0,!0))}p=this.a
l=a4.ch
if(l==null){l=a4.glJ().j(0,a4.dx.ga2())
a4.ch=l}p=p.fy
p.toString
p.aC(l.as(0,!0))
if(r.x2){p=this.a
l=this.b
p=p.k1
p.toString
p.aC(C.q.as(l,!0))}if(r.y1){p=this.a
l=this.c
p=p.k2
p.toString
p.aC(C.q.as(l,!0))}if(r.y2){p=this.a
l=this.d
p=p.k3
p.toString
p.aC(C.q.as(l,!0))}if(r.aI>0){k=this.e.a.length
p=this.a.k4
C.b.S(p.a,p.d,k)
for(p=[P.x],j=0;j<k;++j){l=this.a
i=this.e.a
if(j>=i.length)return H.e(i,j)
i=i[j]
l.toString
H.h(i,"$iak")
l=l.r1
if(j>=l.length)return H.e(l,j)
l=l[j]
h=new Float32Array(H.c5(H.d(i.as(0,!0),"$ia",p,"$aa")))
C.b.fu(l.a,l.d,!1,h)}}switch(r.a){case C.d:break
case C.i:p=this.a
l=this.f.f
p=p.r2
p.toString
i=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,i,g,l)
break
case C.f:this.W(m,this.f.d)
p=this.a
l=this.f.d
p.av(p.rx,p.x1,l)
l=this.a
p=this.f.f
l=l.r2
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break
case C.h:this.W(m,this.f.e)
p=this.a
l=this.f.e
p.ao(p.ry,p.x1,l)
l=this.a
p=this.f.f
l=l.r2
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.i:p=this.a
l=this.r.f
p=p.x2
p.toString
i=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,i,g,l)
break
case C.f:this.W(m,this.r.d)
p=this.a
l=this.r.d
p.av(p.y1,p.aI,l)
l=this.a
p=this.r.f
l=l.x2
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break
case C.h:this.W(m,this.r.e)
p=this.a
l=this.r.e
p.ao(p.y2,p.aI,l)
l=this.a
p=this.r.f
l=l.x2
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break}switch(r.c){case C.d:break
case C.i:p=this.a
l=this.x.f
p=p.ax
p.toString
i=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,i,g,l)
break
case C.f:this.W(m,this.x.d)
p=this.a
l=this.x.d
p.av(p.bS,p.bT,l)
l=this.a
p=this.x.f
l=l.ax
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break
case C.h:this.W(m,this.x.e)
p=this.a
l=this.x.e
p.ao(p.eA,p.bT,l)
l=this.a
p=this.x.f
l=l.ax
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break}switch(r.d){case C.d:break
case C.i:p=this.a
l=this.y.f
p=p.bU
p.toString
i=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,i,g,l)
break
case C.f:this.W(m,this.y.d)
p=this.a
l=this.y.d
p.av(p.eB,p.bV,l)
l=this.a
p=this.y.f
l=l.bU
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break
case C.h:this.W(m,this.y.e)
p=this.a
l=this.y.e
p.ao(p.eC,p.bV,l)
l=this.a
p=this.y.f
l=l.bU
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
break}switch(r.e){case C.d:break
case C.i:p=this.a
l=this.z.f
p=p.bW
p.toString
i=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,i,g,l)
l=this.a
g=this.z.ch
l=l.bY
C.b.O(l.a,l.d,g)
break
case C.f:this.W(m,this.z.d)
p=this.a
l=this.z.d
p.av(p.eD,p.bX,l)
l=this.a
p=this.z.f
l=l.bW
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
p=this.a
g=this.z.ch
p=p.bY
C.b.O(p.a,p.d,g)
break
case C.h:this.W(m,this.z.e)
p=this.a
l=this.z.e
p.ao(p.eE,p.bX,l)
l=this.a
p=this.z.f
l=l.bW
l.toString
i=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,i,g,p)
p=this.a
g=this.z.ch
p=p.bY
C.b.O(p.a,p.d,g)
break}if(r.z>0){k=this.dx.e.length
p=this.a.eP
C.b.S(p.a,p.d,k)
f=a4.db.ga2()
for(p=this.dx.e,l=p.length,e=0,d=0;d<p.length;p.length===l||(0,H.C)(p),++d){c=p[d]
i=this.a.d2
if(e>=i.length)return H.e(i,e)
b=i[e]
i=f.aA(c.a)
g=i.a
if(typeof g!=="number")return g.j()
a=i.b
if(typeof a!=="number")return a.j()
a0=i.c
if(typeof a0!=="number")return a0.j()
a0=i.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
i=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,i,a0)
a0=c.c
i=b.c
C.b.w(i.a,i.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){k=this.dx.f.length
p=this.a.eQ
C.b.S(p.a,p.d,k)
f=a4.db.ga2()
for(p=this.dx.f,l=p.length,e=0,d=0;d<p.length;p.length===l||(0,H.C)(p),++d){c=p[d]
i=this.a.d3
if(e>=i.length)return H.e(i,e)
b=i[e]
i=c.gbx(c)
g=b.b
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=f.T(c.gbx(c))
g=b.c
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gaH(c)
g=b.d
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gcS()
g=b.e
C.b.O(g.a,g.d,i)
i=c.gcT()
g=b.f
C.b.O(g.a,g.d,i)
i=c.gcU()
g=b.r
C.b.O(g.a,g.d,i);++e}}if(r.ch>0){k=this.dx.r.length
p=this.a.eR
C.b.S(p.a,p.d,k)
f=a4.db.ga2()
for(p=this.dx.r,l=p.length,e=0,d=0;d<p.length;p.length===l||(0,H.C)(p),++d){c=p[d]
i=this.a.d4
if(e>=i.length)return H.e(i,e)
b=i[e]
i=c.gbx(c)
g=b.b
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gd0(c).mc()
g=b.c
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=f.T(c.gbx(c))
g=b.d
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gaH(c)
g=b.e
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gma()
g=b.f
C.b.O(g.a,g.d,i)
i=c.gm9()
g=b.r
C.b.O(g.a,g.d,i)
i=c.gcS()
g=b.x
C.b.O(g.a,g.d,i)
i=c.gcT()
g=b.y
C.b.O(g.a,g.d,i)
i=c.gcU()
g=b.z
C.b.O(g.a,g.d,i);++e}}if(r.cx>0){k=this.dx.x.length
p=this.a.eS
C.b.S(p.a,p.d,k)
f=a4.db.ga2()
for(p=this.dx.x,l=p.length,i=[u],e=0,d=0;d<p.length;p.length===l||(0,H.C)(p),++d){c=p[d]
g=this.a.d5
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gby()
H.d(m,"$ia",i,"$aa")
if(!C.a.aw(m,g)){g.sai(0,m.length)
C.a.h(m,g)}g=c.gd0(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gm_()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gab(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.aA(c.gd0(c))
a=g.a
if(typeof a!=="number")return a.j()
a0=g.b
if(typeof a0!=="number")return a0.j()
a1=g.c
if(typeof a1!=="number")return a1.j()
a1=g.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.gaH(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gby()
g=a1.gaj(a1)
if(!g){g=b.x
C.b.S(g.a,g.d,1)}else{g=b.r
a=a1.gaj(a1)
a0=g.a
g=g.d
if(!a)C.b.S(a0,g,0)
else C.b.S(a0,g,a1.gai(a1))
g=b.x
C.b.S(g.a,g.d,0)}++e}}if(r.cy>0){k=this.dx.y.length
p=this.a.eT
C.b.S(p.a,p.d,k)
f=a4.db.ga2()
for(p=this.dx.y,l=p.length,i=[P.x],g=[u],e=0,d=0;d<p.length;p.length===l||(0,H.C)(p),++d){c=p[d]
a=this.a.d6
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gby()
H.d(m,"$ia",g,"$aa")
if(!C.a.aw(m,a)){a.sai(0,m.length)
C.a.h(m,a)}a2=f.j(0,c.ga2())
a=c.ga2()
a0=$.cy
if(a0==null){a0=new V.u(0,0,0)
$.cy=a0}a0=a.T(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cy
if(a==null){a=new V.u(0,0,0)
$.cy=a}a=a2.T(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.bu()
a0=b.d
h=new Float32Array(H.c5(H.d(new V.ay(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).as(0,!0),"$ia",i,"$aa")))
C.b.ft(a0.a,a0.d,!1,h)
a0=c.gaH(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gby()
a=a0.gaj(a0)
if(!a){a=b.r
C.b.S(a.a,a.d,1)}else{a=b.f
a1=a0.gaj(a0)
a3=a.a
a=a.d
if(!a1)C.b.S(a3,a,0)
else C.b.S(a3,a,a0.gai(a0))
a=b.r
C.b.S(a.a,a.d,0)}a=c.gcS()
a0=b.x
C.b.O(a0.a,a0.d,a)
a=c.gcT()
a0=b.y
C.b.O(a0.a,a0.d,a)
a=c.gcU()
a0=b.z
C.b.O(a0.a,a0.d,a);++e}}if(r.db>0){k=this.dx.z.length
p=this.a.eU
C.b.S(p.a,p.d,k)
f=a4.db.ga2()
for(p=this.dx.z,l=p.length,u=[u],e=0,d=0;d<p.length;p.length===l||(0,H.C)(p),++d){c=p[d]
i=this.a.d7
if(e>=i.length)return H.e(i,e)
b=i[e]
i=c.gby()
H.d(m,"$ia",u,"$aa")
if(!C.a.aw(m,i)){i.sai(0,m.length)
C.a.h(m,i)}i=c.gbx(c)
g=b.b
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gd0(c)
g=b.c
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gm_()
g=b.d
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gab(c)
g=b.e
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=f.T(c.gbx(c))
g=b.f
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gby()
g=i.gaj(i)
if(!g){i=b.x
C.b.S(i.a,i.d,1)}else{g=b.r
a=i.gaj(i)
a0=g.a
g=g.d
if(!a)C.b.S(a0,g,0)
else C.b.S(a0,g,i.gai(i))
i=b.x
C.b.S(i.a,i.d,0)}i=c.gaH(c)
g=b.y
C.b.w(g.a,g.d,i.a,i.b,i.c)
i=c.gmd()
g=b.z
C.b.O(g.a,g.d,i)
i=c.gme()
g=b.Q
C.b.O(g.a,g.d,i)
i=c.gcS()
g=b.ch
C.b.O(g.a,g.d,i)
i=c.gcT()
g=b.cx
C.b.O(g.a,g.d,i)
i=c.gcU()
g=b.cy
C.b.O(g.a,g.d,i);++e}}}switch(r.f){case C.d:break
case C.i:break
case C.f:this.W(m,this.Q.d)
u=this.a
p=this.Q.d
u.av(u.eF,u.bZ,p)
break
case C.h:this.W(m,this.Q.e)
u=this.a
p=this.Q.e
u.ao(u.eG,u.bZ,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga2().bu()
a4.Q=p}u=u.id
u.toString
u.aC(p.as(0,!0))}if(r.dy){this.W(m,this.ch)
u=this.a
p=this.ch
u.ao(u.eH,u.eI,p)
switch(r.r){case C.d:break
case C.i:u=this.a
p=this.cx.f
u=u.c_
u.toString
l=p.a
i=p.b
p=p.c
C.b.w(u.a,u.d,l,i,p)
break
case C.f:this.W(m,this.cx.d)
u=this.a
p=this.cx.d
u.av(u.eJ,u.c0,p)
p=this.a
u=this.cx.f
p=p.c_
p.toString
l=u.a
i=u.b
u=u.c
C.b.w(p.a,p.d,l,i,u)
break
case C.h:this.W(m,this.cx.e)
u=this.a
p=this.cx.e
u.ao(u.eK,u.c0,p)
p=this.a
u=this.cx.f
p=p.c_
p.toString
l=u.a
i=u.b
u=u.c
C.b.w(p.a,p.d,l,i,u)
break}switch(r.x){case C.d:break
case C.i:u=this.a
p=this.cy.f
u=u.c2
u.toString
l=p.a
i=p.b
p=p.c
C.b.w(u.a,u.d,l,i,p)
p=this.a
i=this.cy.ch
p=p.c1
C.b.O(p.a,p.d,i)
break
case C.f:this.W(m,this.cy.d)
u=this.a
p=this.cy.d
u.av(u.eL,u.c3,p)
p=this.a
u=this.cy.f
p=p.c2
p.toString
l=u.a
i=u.b
u=u.c
C.b.w(p.a,p.d,l,i,u)
u=this.a
i=this.cy.ch
u=u.c1
C.b.O(u.a,u.d,i)
break
case C.h:this.W(m,this.cy.e)
u=this.a
p=this.cy.e
u.ao(u.eM,u.c3,p)
p=this.a
u=this.cy.f
p=p.c2
p.toString
l=u.a
i=u.b
u=u.c
C.b.w(p.a,p.d,l,i,u)
u=this.a
i=this.cy.ch
u=u.c1
C.b.O(u.a,u.d,i)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.i:u=this.a
l=this.db.f
u=u.c4
C.b.O(u.a,u.d,l)
break
case C.f:this.W(m,this.db.d)
u=this.a
l=this.db.d
u.av(u.eN,u.c5,l)
l=this.a
u=this.db.f
l=l.c4
C.b.O(l.a,l.d,u)
break
case C.h:this.W(m,this.db.e)
u=this.a
l=this.db.e
u.ao(u.eO,u.c5,l)
l=this.a
u=this.db.f
l=l.c4
C.b.O(l.a,l.d,u)
break}C.b.d1(o,3042)
C.b.kR(o,770,771)}for(j=0;j<m.length;++j)m[j].aV(a4)
u=a5.e
u.aV(a4)
u.bi(a4)
u.bC(a4)
if(p)C.b.l7(o,3042)
for(j=0;j<m.length;++j)m[j].bC(a4)
u=this.a
u.toString
C.b.fw(o,null)
u.x.l8()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dU().ax},
shE:function(a){this.e=H.d(a,"$iT",[V.ak],"$aT")}}
O.fq.prototype={
jI:function(a){var u=this.f
if(!(Math.abs(u-a)<$.y().a)){this.f=a
u=new D.D(this.b,u,a,this,[P.x])
u.b=!0
this.a.a_(u)}},
aF:function(){this.dw()
this.jI(1)}}
O.cu.prototype={
a_:function(a){this.a.a_(H.h(a,"$iw"))},
cp:function(){return this.a_(null)},
aF:function(){},
jK:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gu().Z(0,this.gbG())
t=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gbG())
u=new D.D(this.b+".texture2D",t,this.d,this,[T.bA])
u.b=!0
this.a.a_(u)}},
jL:function(a){},
sbz:function(a){var u
if(a==null){if(this.c===C.f){this.c=C.i
u=this.a
u.a=null
u.a_(null)}}else{u=this.c
if(u!==C.f){if(u===C.d)this.aF()
this.c=C.f
this.jL(null)
u=this.a
u.a=null
u.a_(null)}}this.jK(a)}}
O.fr.prototype={}
O.aW.prototype={
ed:function(a){var u,t
if(!J.Z(this.f,a)){u=this.f
this.f=a
t=new D.D(this.b+".color",u,a,this,[V.a5])
t.b=!0
this.a.a_(t)}},
aF:function(){this.dw()
this.ed(new V.a5(1,1,1))},
saH:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.aF()
u=this.a
u.a=null
u.a_(null)}this.ed(b)}}
O.ft.prototype={
jJ:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.y().a)){this.ch=a
u=new D.D(this.b+".refraction",u,a,this,[P.x])
u.b=!0
this.a.a_(u)}},
aF:function(){this.cm()
this.jJ(1)}}
O.fu.prototype={
cK:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.y().a)){this.ch=a
u=new D.D(this.b+".shininess",u,a,this,[P.x])
u.b=!0
this.a.a_(u)}},
aF:function(){this.cm()
this.cK(100)}}
O.c1.prototype={}
T.cF.prototype={}
T.bA.prototype={}
T.hg.prototype={
gai:function(a){return this.a},
sai:function(a,b){this.a=b
return b},
gaj:function(a){var u=this.d
u=u==null?null:u.gaj(u)
if(u==null){u=this.c
u=u==null?null:u.gaj(u)}return u===!0},
gu:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
aV:function(a){var u
if(this.d==null){u=this.c
this.d=u
if(u!=null)u.aV(a)}},
bC:function(a){var u=this.d
if(u!=null){u.bC(a)
this.d=null}},
sjY:function(a){this.e=H.d(a,"$ia",[T.bA],"$aa")}}
T.hh.prototype={
gai:function(a){return this.a},
sai:function(a,b){this.a=b
return b},
gaj:function(a){return this.d},
gu:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
aV:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.el(u,33984+this.a)
C.b.be(u,3553,this.b)}},
bC:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.el(u,33984+this.a)
C.b.be(u,3553,null)}}}
T.hi.prototype={
lo:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.be(u,3553,t)
C.b.cc(u,3553,10242,33071)
C.b.cc(u,3553,10243,33071)
C.b.cc(u,3553,10241,9987)
C.b.cc(u,3553,10240,9729)
C.b.be(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.hh()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.n
W.ab(s,"load",H.o(new T.hj(this,r,s,!1,t,!1,!0),{func:1,ret:-1,args:[u]}),!1,u)
return r},
ln:function(a,b,c,d){return this.lo(a,!1,b,c,d)},
jG:function(a,b,c){var u,t,s,r
b=V.jG(b,2)
u=V.jG(a.width,2)
t=V.jG(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jb(null,null)
s.width=u
s.height=t
r=H.h(C.n.fH(s,"2d"),"$ibH")
r.imageSmoothingEnabled=!1;(r&&C.y).lb(r,a,0,0,s.width,s.height)
return P.n4(C.y.i4(r,0,0,s.width,s.height))}}}
T.hj.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.jG(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.be(t,3553,this.e)
C.b.lI(t,37440,this.f?1:0)
C.b.lT(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fB(t,3553)
C.b.be(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.ey()}++s.e},
$S:20}
V.eB.prototype={
bh:function(a){return!0},
i:function(a){return"all"},
$ib7:1}
V.b7.prototype={}
V.dv.prototype={
bh:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].bh(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saQ:function(a){this.a=H.d(a,"$ia",[V.b7],"$aa")},
$ib7:1}
V.ba.prototype={
bh:function(a){return!this.fV(a)},
i:function(a){return"!["+this.dv(0)+"]"}}
V.fU.prototype={
h0:function(a){var u,t
if(a.a.length<=0)throw H.f(P.v("May not create a SetMatcher with zero characters."))
u=new H.ax([P.i,P.Y])
for(t=new H.ds(a,a.gq(a),0,[H.av(a,"V",0)]);t.C();)u.m(0,t.d,!0)
this.sjH(u)},
bh:function(a){return this.a.bR(a)},
i:function(a){var u=this.a
return P.dQ(new H.dr(u,[H.q(u,0)]),0,null)},
sjH:function(a){this.a=H.d(a,"$iE",[P.i,P.Y],"$aE")},
$ib7:1}
V.cD.prototype={
B:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cH(this.a.R(0,b))
r.saQ(H.b([],[V.b7]))
r.c=!1
C.a.h(this.c,r)
return r},
le:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.bh(a))return r}return},
i:function(a){return this.b},
ska:function(a){this.c=H.d(a,"$ia",[V.cH],"$aa")}}
V.dX.prototype={
i:function(a){var u,t
u=H.l8(this.b,"\n","\\n")
t=H.l8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cG.prototype={
i:function(a){return this.b},
sjB:function(a){var u=P.m
this.c=H.d(a,"$iE",[u,u],"$aE")}}
V.hm.prototype={
R:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.cD(this,b)
u.ska(H.b([],[V.cH]))
u.d=null
this.a.m(0,b,u)}return u},
bB:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.cG(this,a)
t=P.m
u.sjB(new H.ax([t,t]))
this.b.m(0,a,u)}return u},
lY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dX])
t=this.c
s=[P.i]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.I(a,o)
m=t.le(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dQ(r,0,null)
throw H.f(P.v("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dQ(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.dX(j==null?k.b:j,l,o)}++o}}},
sjU:function(a){this.a=H.d(a,"$iE",[P.m,V.cD],"$aE")},
sjZ:function(a){this.b=H.d(a,"$iE",[P.m,V.cG],"$aE")}}
V.cH.prototype={
i:function(a){return this.b.b+": "+this.dv(0)}}
X.da.prototype={$ib9:1}
X.f6.prototype={
gu:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u}}
X.dD.prototype={
gu:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
b5:function(a){var u
H.h(a,"$iw")
u=this.f
if(u!=null)u.F(a)},
hn:function(){return this.b5(null)},
sf5:function(a){var u,t
if(!J.Z(this.b,a)){u=this.b
if(u!=null)u.gu().Z(0,this.gdD())
t=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gdD())
u=new D.D("mover",t,this.b,this,[U.a6])
u.b=!0
this.b5(u)}},
$ib9:1,
$ida:1}
X.dR.prototype={}
V.h2.prototype={
h2:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.x).a5(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.x.a5(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a5(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a5(q,p)}o=u.createElement("div")
this.a=o
C.l.a5(q,o)
this.b=null
o=W.n
W.ab(u,"scroll",H.o(new V.h4(s),{func:1,ret:-1,args:[o]}),!1,o)},
kK:function(a,b,c){var u,t,s,r
a=H.ac(C.e.kT(a,0,4))
if(c.length===0)c=P.en(C.C,b,C.m,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.lC(null)
r.href="#"+H.k(c)
r.textContent=b
C.l.a5(u,r)
C.l.a5(this.a,u)},
cQ:function(a,b){return this.kK(a,b,"")},
a1:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.d(a,"$ia",[P.m],"$aa")
this.jN()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.lY(C.a.ll(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a5(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a5(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a5(t,o)
break
case"Link":n=p.b
if(H.no(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.P(m[1])
l.textContent=H.P(m[0])
C.l.a5(t,l)}else{k=P.en(C.C,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.k(k)
l.textContent=n
C.l.a5(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a5(t,o)
break}}C.l.a5(this.a,t)},
jN:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hm()
t=P.m
u.sjU(new H.ax([t,V.cD]))
u.sjZ(new H.ax([t,V.cG]))
u.c=null
u.c=u.R(0,"Start")
t=u.R(0,"Start").B(0,"Bold")
s=V.ag(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Bold").B(0,"Bold")
s=new V.ba()
r=[V.b7]
s.saQ(H.b([],r))
C.a.h(t.a,s)
t=V.ag(new H.a3("*"))
C.a.h(s.a,t)
t=u.R(0,"Bold").B(0,"BoldEnd")
s=V.ag(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").B(0,"Italic")
s=V.ag(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Italic").B(0,"Italic")
s=new V.ba()
s.saQ(H.b([],r))
C.a.h(t.a,s)
t=V.ag(new H.a3("_"))
C.a.h(s.a,t)
t=u.R(0,"Italic").B(0,"ItalicEnd")
s=V.ag(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").B(0,"Code")
s=V.ag(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Code").B(0,"Code")
s=new V.ba()
s.saQ(H.b([],r))
C.a.h(t.a,s)
t=V.ag(new H.a3("`"))
C.a.h(s.a,t)
t=u.R(0,"Code").B(0,"CodeEnd")
s=V.ag(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").B(0,"LinkHead")
s=V.ag(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"LinkHead").B(0,"LinkTail")
s=V.ag(new H.a3("|"))
C.a.h(t.a,s)
s=u.R(0,"LinkHead").B(0,"LinkEnd")
t=V.ag(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,"LinkHead").B(0,"LinkHead")
t=new V.ba()
t.saQ(H.b([],r))
C.a.h(s.a,t)
s=V.ag(new H.a3("|]"))
C.a.h(t.a,s)
s=u.R(0,"LinkTail").B(0,"LinkEnd")
t=V.ag(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,"LinkTail").B(0,"LinkTail")
t=new V.ba()
t.saQ(H.b([],r))
C.a.h(s.a,t)
s=V.ag(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.R(0,"Start").B(0,"Other").a,new V.eB())
s=u.R(0,"Other").B(0,"Other")
t=new V.ba()
t.saQ(H.b([],r))
C.a.h(s.a,t)
s=V.ag(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.R(0,"BoldEnd")
s.d=s.a.bB("Bold")
s=u.R(0,"ItalicEnd")
s.d=s.a.bB("Italic")
s=u.R(0,"CodeEnd")
s.d=s.a.bB("Code")
s=u.R(0,"LinkEnd")
s.d=s.a.bB("Link")
s=u.R(0,"Other")
s.d=s.a.bB("Other")
this.b=u}}
V.h4.prototype={
$1:function(a){P.jm(C.p,new V.h3(this.a))},
$S:20}
V.h3.prototype={
$0:function(){var u,t,s
u=C.j.ay(document.documentElement.scrollTop)
t=this.a.style
s=H.k(-0.01*u)+"px"
t.top=s},
$S:2}
B.ar.prototype={
gek:function(){return new B.ar(this.a,this.b+1,this.c,this.d,this.e,this.f)},
gen:function(){return new B.ar(this.a,this.b-1,this.c,this.d,this.e,this.f)},
gab:function(a){var u,t,s
u=this.a+1
t=this.d
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gab(s)
u=0}return new B.ar(u,this.b,this.c,t,this.e,s)},
gae:function(a){var u,t,s
u=this.a-1
t=this.d
s=this.f
if(u<0){t-=16
s=s==null?null:s.gae(s)
u=15}return new B.ar(u,this.b,this.c,t,this.e,s)},
gaJ:function(){var u,t,s
u=this.c+1
t=this.e
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gaJ()
u=0}return new B.ar(this.a,this.b,u,this.d,t,s)},
gaU:function(a){var u,t,s
u=this.c-1
t=this.e
s=this.f
if(u<0){t-=16
s=s==null?null:s.gaU(s)
u=15}return new B.ar(this.a,this.b,u,this.d,t,s)},
f7:function(a){var u=J.N(a)
if(u.t(a,$.aL()))return this.gae(this)
else if(u.t(a,$.aM()))return this.gab(this)
else if(u.t(a,$.bg()))return this.gen()
else if(u.t(a,$.aN()))return this.gek()
else if(u.t(a,$.bh()))return this.gaU(this)
else if(u.t(a,$.bi()))return this.gaJ()
else return},
gcW:function(){return V.fN(this.a+this.d,this.b,this.c+this.e,1,1,1)},
i:function(a){return H.k(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.lE(this.ga3(this))+")"},
ga3:function(a){var u=this.f
u=u==null?null:u.ah(this.a,this.b,this.c)
if(u==null)u=this.b<0?100:0
return u},
sa3:function(a,b){var u=this.f
if(u!=null)u.V(this.a,this.b,this.c,b)}}
B.eL.prototype={
c6:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.V(u,s,t,this.i5(u,s,t))
a.d9()},
i5:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.e.b0(a+b+c,2)===0?113:111},
$ijZ:1}
B.bI.prototype={
fX:function(a){var u,t,s,r,q,p,o,n,m,l
this.d=new Uint8Array(12288)
this.scs(H.b([],[E.U]))
for(u=this.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=E.bN(null,!0,null,"",null,null)
p=r.y
o=H.q(p,0)
H.z(q,o)
n=[o]
if(p.bn(H.b([q],n))){m=p.a
l=m.length
C.a.h(m,q)
o=H.d(H.b([q],n),"$il",[o],"$al")
p=p.c
if(p!=null)p.$2(l,o)}p=this.e;(p&&C.a).h(p,q)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
d9:function(){this.x=!1
this.f=!0
this.saO(!1)
var u=this.gae(this)
if(u!=null)u.f=!0
u=this.gab(this)
if(u!=null)u.f=!0
u=this.gaJ()
if(u!=null)u.f=!0
u=this.gaU(this)
if(u!=null)u.f=!0},
ah:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
bK:function(a,b,c,d){var u=a==null?null:a.cj(b,c,d)
return u==null?0:u},
cj:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return this.bK(this.gae(this),a+16,b,c)
if(a>=16)return this.bK(this.gab(this),a-16,b,c)
if(c<0)return this.bK(this.gaU(this),a,b,c+16)
if(c>=16)return this.bK(this.gaJ(),a,b,c-16)
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
V:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
u[t]=d
return!0},
gae:function(a){return this.c.aY(this.a-16,this.b)},
gaJ:function(){return this.c.aY(this.a,this.b+16)},
gab:function(a){return this.c.aY(this.a+16,this.b)},
gaU:function(a){return this.c.aY(this.a,this.b-16)},
dn:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.ah(a,u,b)
if(t>=100&&t<=117)return u}return c},
lZ:function(a,b){return this.dn(a,b,48)},
m1:function(){if(this.x||!this.r)return
this.r=!1
this.f=!1
var u=B.jl(this.c.a,null)
u.kS(this)
u.d8(0,this.e)},
saO:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
m2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.x||this.r){this.saO(!1)
return}u=V.jk(this.a,this.b,16,16)
t=u.f6(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.c(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.c(p)
o=s-p
if(q*q+o*o<100){this.saO(!0)
return}n=u.f6(b)
s=b.a
if(typeof s!=="number")return s.n()
m=b.b
if(typeof m!=="number")return m.n()
m=new V.X(s-r,m-p)
l=m.A(0,Math.sqrt(m.E(m)))
m=n.a
if(typeof m!=="number")return m.n()
s=n.b
if(typeof s!=="number")return s.n()
k=new V.X(m-r,s-p)
j=k.E(k)
if(j>6400){this.saO(!1)
return}this.saO(l.E(k.A(0,j))>0)},
scs:function(a){this.e=H.d(a,"$ia",[E.U],"$aa")}}
B.eM.prototype={
kX:function(a,b,c){var u,t
this.b=b
this.c=a
this.d=c
this.e=$.bf()
this.hM()
for(;this.jR(););u=this.b
t=this.d
this.b=u.k(0,new V.u(t.a,t.b,t.c))
return!0},
hM:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
u=this.c
t=this.b
s=u.ce(0,new V.B(t.a,t.b,t.c))
t=s.ce(0,this.d)
u=s.a
r=t.a
q=Math.min(H.c8(u),H.c8(r))
if(typeof u!=="number")return u.k()
if(typeof r!=="number")return r.k()
p=Math.max(u+s.d,r+t.d)
r=s.b
u=t.b
o=Math.min(H.c8(r),H.c8(u))
if(typeof r!=="number")return r.k()
if(typeof u!=="number")return u.k()
n=Math.max(r+s.e,u+t.e)
u=s.c
r=t.c
m=Math.min(H.c8(u),H.c8(r))
if(typeof u!=="number")return u.k()
if(typeof r!=="number")return r.k()
l=Math.max(u+s.f,r+t.f)
t=this.a
k=t.ah(q,o,m)
j=t.ah(q+(p-q),o+(n-o),m+(l-m))
i=j.a+j.d
h=j.c+j.e
C.a.sq(this.f,0)
C.a.sq(this.r,0)
C.a.sq(this.x,0)
u=j.b
g=k
while(!0){if(!(g.a+g.d<=i))break
f=g
while(!0){if(!(f.b<=u))break
e=f
while(!0){if(!(e.c+e.e<=h))break
t=e.ga3(e)
if(t>=100&&t<=117){d=$.bf()
c=e.gae(e)
t=c.ga3(c)
t=t>=100&&t<=117
if(t){t=$.aL()
d=new V.a_((d.a|t.a)>>>0)}c=e.gab(e)
t=c.ga3(c)
t=t>=100&&t<=117
if(t){t=$.aM()
d=new V.a_((d.a|t.a)>>>0)}t=e.a
r=e.b
b=e.c
a=e.d
a0=e.e
a1=e.f
c=new B.ar(t,r-1,b,a,a0,a1)
a2=c.ga3(c)
a2=a2>=100&&a2<=117
if(a2){a2=$.bg()
d=new V.a_((d.a|a2.a)>>>0)}c=new B.ar(t,r+1,b,a,a0,a1)
t=c.ga3(c)
t=t>=100&&t<=117
if(t){t=$.aN()
d=new V.a_((d.a|t.a)>>>0)}c=e.gaU(e)
t=c.ga3(c)
t=t>=100&&t<=117
if(t){t=$.bh()
d=new V.a_((d.a|t.a)>>>0)}c=e.gaJ()
t=c.ga3(c)
t=t>=100&&t<=117
if(t){t=$.bi()
d=new V.a_((d.a|t.a)>>>0)}t=$.le()
if(!J.Z(d,t)){C.a.h(this.f,e.gcW())
r=this.r
d.toString
b=$.jN().a
a=d.a
C.a.h(r,new V.a_((t.a&b&~a)>>>0))
C.a.h(this.x,!1)}}e=e.gaJ()}f=new B.ar(f.a,f.b+1,f.c,f.d,f.e,f.f)}g=g.gab(g)}},
jR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(this.d.dd())return!1
u=this.c
t=this.b
s=u.ce(0,new V.B(t.a,t.b,t.c))
r=$.bf()
for(q=0,p=-1,o=0;u=this.f,o<u.length;++o){t=this.x
if(o>=t.length)return H.e(t,o)
if(!t[o]){n=u[o]
u=this.r
if(o>=u.length)return H.e(u,o)
m=u[o]
l=s.kY(n,this.d,m)
if(l!=null)if(J.Z(r,$.bf())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.N(r)
if(u.t(r,$.bf()))return!1
C.a.m(this.x,p,!0)
k=this.d.j(0,q)
j=this.d.j(0,1-q)
if(u.t(r,$.aM())||u.t(r,$.aL())){u=this.b
t=u.a
i=k.a
if(typeof t!=="number")return t.k()
if(typeof i!=="number")return H.c(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.k()
if(typeof g!=="number")return H.c(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.k()
if(typeof f!=="number")return H.c(f)
this.b=new V.u(t+i,h+g,u+f)
this.d=new V.B(0,j.b,j.c)}else if(u.t(r,$.aN())||u.t(r,$.bg())){u=this.b
t=u.b
i=k.b
if(typeof t!=="number")return t.k()
if(typeof i!=="number")return H.c(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.k()
if(typeof g!=="number")return H.c(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.k()
if(typeof f!=="number")return H.c(f)
this.b=new V.u(h+g,t+i,u+f)
this.d=new V.B(j.a,0,j.c)}else if(u.t(r,$.bi())||u.t(r,$.bh())){u=this.b
t=u.c
i=k.c
if(typeof t!=="number")return t.k()
if(typeof i!=="number")return H.c(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.k()
if(typeof g!=="number")return H.c(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.k()
if(typeof f!=="number")return H.c(f)
this.b=new V.u(h+g,u+f,t+i)
this.d=new V.B(j.a,j.b,0)}this.e=new V.a_((this.e.a|r.a)>>>0)
return!0},
i:function(a){return"Collider("+H.k(this.b)+", "+H.k(this.e)+")"},
shH:function(a){this.f=H.d(a,"$ia",[V.bz],"$aa")},
shG:function(a){this.r=H.d(a,"$ia",[V.a_],"$aa")},
si9:function(a){this.x=H.d(a,"$ia",[P.Y],"$aa")}}
B.j_.prototype={
$1:function(a){var u
H.h(a,"$iaZ")
u=this.b
P.jH(C.j.fs(this.a.glh(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.k(u.gcH())))},
$S:45}
B.S.prototype={}
B.fv.prototype={
G:function(a){var u="./textures/"+a+".png"
return this.a.f.ln(u,!0,!1,!1)},
L:function(a,b){var u,t,s
u=O.k3()
u.dx.h(0,this.e)
t=u.r
t.saH(0,new V.a5(0.8,0.8,0.8))
t=u.x
t.saH(0,new V.a5(0.4,0.4,0.4))
u.r.sbz(a)
u.x.sbz(a)
u.db.sbz(a)
if(b){t=u.z
t.saH(0,new V.a5(0.5,0.5,0.5))
if(t.c===C.d){t.c=C.i
t.cm()
t.cK(100)
s=t.a
s.a=null
s.a_(null)}t.cK(3)}C.a.h(this.d,u)
return this.d.length-1},
dI:function(a){var u,t
u=this.G(a)
t=O.k3()
t.f.sbz(u)
t.db.sbz(u)
return t},
shR:function(a){this.b=H.d(a,"$iE",[P.i,B.S],"$aE")},
sij:function(a){this.c=H.d(a,"$iE",[P.i,[P.a,P.i]],"$aE")},
sik:function(a){this.d=H.d(a,"$ia",[O.bU],"$aa")}}
B.dB.prototype={
i:function(a){return"NeighborBlockInfo("+this.a.i(0)+", "+H.k(this.b)+", "+this.c.i(0)+", "+this.d+")"}}
B.dE.prototype={
fZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.r=!0
u=a.d
u.Q=0.4
u.ch=0.4
u=X.aU()
u.h(0,new X.K(32,new X.O(!1,!1,!1)))
u.ad(a)
u.gaq().h(0,this.giV())
this.d=!0
u=X.aU()
u.h(0,new X.K(9,new X.O(!1,!1,!1)))
u.h(0,new X.K(9,new X.O(!1,!1,!0)))
u.ad(a)
u.gaq().h(0,this.giB())
u=X.aU()
u.h(0,new X.K(69,new X.O(!1,!1,!1)))
u.h(0,new X.K(81,new X.O(!1,!1,!1)))
u.ad(a)
u.gaq().h(0,this.giz())
u=a.d
t=u.b
if(t==null){t=D.G()
u.b=t
u=t}else u=t
u.h(0,this.giL())
u=X.aU()
u.h(0,new X.K(79,new X.O(!1,!1,!1)))
u.ad(a)
u.gaq().h(0,this.gjg())
u=new U.e4()
t=X.aU()
t.h(0,new X.K(39,new X.O(!1,!1,!1)))
t.h(0,new X.K(68,new X.O(!1,!1,!1)))
s=u.giX()
t.gaq().h(0,s)
u.a=t
t=X.aU()
t.h(0,new X.K(37,new X.O(!1,!1,!1)))
t.h(0,new X.K(65,new X.O(!1,!1,!1)))
t.gaq().h(0,s)
u.b=t
t=X.aU()
t.h(0,new X.K(81,new X.O(!1,!1,!1)))
t.gaq().h(0,s)
u.c=t
t=X.aU()
t.h(0,new X.K(69,new X.O(!1,!1,!1)))
t.gaq().h(0,s)
u.d=t
t=X.aU()
t.h(0,new X.K(40,new X.O(!1,!1,!1)))
t.h(0,new X.K(83,new X.O(!1,!1,!1)))
t.gaq().h(0,s)
u.e=t
t=X.aU()
t.h(0,new X.K(38,new X.O(!1,!1,!1)))
t.h(0,new X.K(87,new X.O(!1,!1,!1)))
t.gaq().h(0,s)
u.f=t
t=U.db()
t.saK(30)
t.saX(0)
s=u.gaD()
t.gu().h(0,s)
u.r=t
t=U.db()
t.saK(30)
t.saX(0)
t.gu().h(0,s)
u.x=t
t=U.db()
t.saK(30)
t.saX(0)
t.gu().h(0,s)
u.y=t
u.z=null
u.Q=null
u.ch=60
u.cx=15
u.cy=0
u.db=null
u.dx=null
u.sdQ(null)
u.a.ad(a)
u.b.ad(a)
u.c.ad(a)
u.d.ad(a)
u.e.ad(a)
u.f.ad(a)
u.r.saK(6)
u.x.saK(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.y().a)){t.r=-100
s=new D.D("acceleration",s,-100,t,[P.x])
s.b=!0
t.D(s)}u.y.saK(6)
u.sdQ(H.o(this.gi7(),{func:1,ret:V.u,args:[V.u,V.u]}))
this.a=u
u=new U.e3()
t=U.db()
t.sdr(0,!0)
t.sdf(6.283185307179586)
t.sdg(0)
t.sY(0,0)
t.saK(100)
t.sP(0)
t.saX(0.5)
u.b=t
s=u.gaD()
t.gu().h(0,s)
t=U.db()
t.sdr(0,!0)
t.sdf(6.283185307179586)
t.sdg(0)
t.sY(0,0)
t.saK(100)
t.sP(0)
t.saX(0.5)
u.c=t
t.gu().h(0,s)
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
r=new X.O(!1,!1,!1)
q=u.d
u.d=r
t=new D.D("modifiers",q,r,u,[X.O])
t.b=!0
u.D(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.D("invertX",t,!1,u,[P.Y])
t.b=!0
u.D(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.D("invertY",t,!1,u,[P.Y])
t.b=!0
u.D(t)}u.ad(a)
u.b.sdf(1.5707963267948966)
u.b.sdg(-1.5707963267948966)
u.b.saX(1)
u.c.saX(1)
u.b.sdr(0,!1)
this.b=u
u.gu().h(0,new B.fF(this))
u=U.a6
t=[u]
s=U.f7(H.b([this.a,this.b],t))
s.gu().h(0,this.gki())
this.x=s
s=this.b
p=new U.cs()
p.c=V.bV()
p.d=0
if(null!=s){p.a=s
s.gu().h(0,p.gaD())
u=new D.D("mover",null,p.a,p,[u])
u.b=!0
p.D(u)}this.y=U.f7(H.b([p,this.a,U.bo(V.jj(1,-1,1,1))],t))
u=U.bo(V.dw(-0.5,-0.5,-0.5))
s=new U.dL()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.sfA(-0.1)
s.sfg(0)
s.sfo(0)
p=s.d
if(!(Math.abs(p-0)<$.y().a)){s.d=0
p=new D.D("deltaYaw",p,0,s,[P.x])
p.b=!0
s.D(p)}p=s.e
if(!(Math.abs(p-0.1)<$.y().a)){s.e=0.1
p=new D.D("deltaPitch",p,0.1,s,[P.x])
p.b=!0
s.D(p)}p=s.f
if(!(Math.abs(p-0)<$.y().a)){s.f=0
p=new D.D("deltaRoll",p,0,s,[P.x])
p.b=!0
s.D(p)}this.z=U.f7(H.b([u,s,U.bo(V.dw(0.5,0.5,0.5)),U.bo(V.jj(0.04,-0.04,0.04,1)),U.bo(V.dw(-0.15,0.06,-0.2)),this.y],t))
u=U.f7(H.b([U.bo(V.jj(0.005,-0.005,0.005,1)),U.bo(V.dw(0,0,-0.2)),this.y],t))
this.Q=u
t=$.a8()
s=$.ad()
s=new Z.a7(t.a|s.a)
o=new F.dN()
t=new F.hN(o)
t.b=!1
p=F.b0
t.scP(H.b([],[p]))
o.a=t
t=new F.fX(o)
t.sbo(H.b([],[F.bY]))
o.b=t
t=new F.fW(o)
t.scA(H.b([],[F.bu]))
o.c=t
t=new F.fV(o)
t.scv(H.b([],[F.a9]))
o.d=t
o.e=null
t=o.a
n=new V.B(-1,-1,1)
n=n.A(0,Math.sqrt(n.E(n)))
m=t.bO(new V.bw(1,2,4,6),new V.aR(1,0,0,1),new V.u(-1,-1,0),new V.Q(0,1),n,s)
t=o.a
n=new V.B(1,-1,1)
n=n.A(0,Math.sqrt(n.E(n)))
l=t.bO(new V.bw(0,3,4,6),new V.aR(0,0,1,1),new V.u(1,-1,0),new V.Q(1,1),n,s)
t=o.a
n=new V.B(1,1,1)
n=n.A(0,Math.sqrt(n.E(n)))
k=t.bO(new V.bw(0,2,5,6),new V.aR(0,1,0,1),new V.u(1,1,0),new V.Q(1,0),n,s)
t=o.a
n=V.bb()
j=new V.B(-1,1,1)
j=j.A(0,Math.sqrt(j.E(j)))
i=t.bO(new V.bw(0,2,4,7),new V.aR(1,1,0,1),new V.u(-1,1,0),n,j,s)
o.d.kJ(H.b([m,l,k,i],[p]))
o.aW()
t=this.c
s=t.a
this.ch=E.bN(null,!0,u,"",o,s.r)
this.cx=E.bN(null,!0,this.z,"",null,null)
u=E.U
this.shF(H.b([],[u]))
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.C)(p),++h){g=E.bN(null,!0,null,"",null,p[h])
j=this.cx.y
f=H.q(j,0)
H.z(g,f)
e=[f]
if(j.bn(H.b([g],e))){d=j.a
c=d.length
C.a.h(d,g)
f=H.d(H.b([g],e),"$il",[f],"$al")
j=j.c
if(j!=null)j.$2(c,f)}j=this.dx;(j&&C.a).h(j,g)}this.e=0
t=new B.eM(t)
t.e=$.bf()
t.shH(H.b([],[V.bz]))
t.shG(H.b([],[V.a_]))
t.si9(H.b([],[P.Y]))
this.r=t
s=E.bN(null,!0,null,"",null,s.f)
this.cy=s
this.f=null
this.db=E.bN(H.b([this.ch,this.cx,s],[u]),!0,null,"",null,null)
this.ei()},
dt:function(){var u,t
u=this.c.aY(C.o.az(0.5),C.o.az(0.5))
t=u==null?null:u.lZ(C.o.az(0.5),C.o.az(0.5))
if(t==null)t=0
this.a.sY(0,new V.u(0.5,t+10,0.5))
this.a.sP(V.cQ())},
jh:function(a){H.h(a,"$iw")
this.dt()},
iW:function(a){H.h(a,"$iw")
if(this.d)this.a.x.sP(30)},
iC:function(a){var u,t
a=H.j(H.h(a,"$iw"),"$ib6")
$.j2()
u=a.c
t=this.e
if(u.b.c){if(typeof t!=="number")return t.n()
u=t-1
this.e=u
if(u<0)this.e=19}else{if(typeof t!=="number")return t.k()
u=t+1
this.e=u
if(u>=20)this.e=0}this.ei()},
iA:function(a){this.dO(H.j(H.h(a,"$iw"),"$ib6").c.a===69)},
iM:function(a){this.dO(H.j(H.h(a,"$iw"),"$ib8").x.a===2)},
dO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.f
if((u==null?null:u.a)==null)return
t=u.a
if(a){s=C.a.l($.j2(),this.e)
u=this.f.a
r=u.ga3(u)
q=this.f.b
u=$.aN()
p=q.a
if((p&u.a)>>>0!==0)if(r>=200&&r<=205)return
if(s>=200&&s<=205){u=t.gen()
u=u.ga3(u)
if(!(u>=100&&u<=117))return}if(s===106){u=$.aM()
o=$.aL()
if((p&(u.a|o.a))>>>0!==0)s=108
else{u=$.bi()
o=$.bh()
if((p&(u.a|o.a))>>>0!==0)s=107}}else if(s===115){u=$.aM()
o=$.aL()
if((p&(u.a|o.a))>>>0!==0)s=117
else{u=$.bi()
o=$.bh()
if((p&(u.a|o.a))>>>0!==0)s=116}}u=5&p
n=u!==0?(0|5-u)>>>0:0
u=40&p
if(u!==0)n=(n|40-u)>>>0
u=320&p
t=t.f7(new V.a_(u!==0?(n|320-u)>>>0:n))
u=this.a
u=u.gY(u)
m=$.jK().ce(0,new V.B(u.a,u.b,u.c))
u=t.gcW()
p=m.a
if(typeof p!=="number")return p.k()
o=u.a
if(typeof o!=="number")return o.k()
l=$.y().a
if(o-l<p+m.d&&p-l<o+u.d){p=m.b
if(typeof p!=="number")return p.k()
o=u.b
if(typeof o!=="number")return o.k()
if(o-l<p+m.e&&p-l<o+u.e){p=m.c
if(typeof p!=="number")return p.k()
o=u.c
if(typeof o!=="number")return o.k()
u=o-l<p+m.f&&p-l<o+u.f}else u=!1}else u=!1
if(u)return}else s=0
k=t.f
if(k!=null){t.sa3(0,s)
if(s===0){j=t.gek()
u=j.ga3(j)
if(u>=200&&u<=205)j.sa3(0,0)}k.r=!0
u=t.a
if(u<=0){p=k.gae(k)
if(p!=null)p.r=!0}p=t.c
if(p<=0){o=k.gaU(k)
if(o!=null)o.r=!0}if(u>=15){u=k.gab(k)
if(u!=null)u.r=!0}if(p>=15){u=k.gaJ()
if(u!=null)u.r=!0}}},
i8:function(a,b){var u,t,s
u=b.n(0,a)
t=new V.B(u.a,u.b,u.c)
if(t.E(t)<100){this.r.kX($.jK(),a,t)
u=this.r.e
s=$.aN()
u=u.a
s=s.a
s=(u&s)>>>0===s
this.d=s
if(s)this.a.x.sP(0)}u=this.r.b
return u==null?b:u},
kk:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=a==null
if((u?null:a.a)!=null){t=a.a
t=t.ga3(t)===0}else t=!1
if(t)return!1
s=u?null:a.a
if(s!=null){a.d
u=s.ga3(s)===0||s.ga3(s)===100}else u=!1
if(u)a=null
this.f=a
if(a==null)this.cy.b=!1
else{u=$.a8()
t=$.ad()
r=B.jl(null,new Z.a7(u.a|t.a))
q=new V.u(s.d+s.a+0.5,s.b+0.5,s.e+s.c+0.5)
p=r.a4(0)
t=$.et()
u=$.ey()
o=$.ez()
n=$.eu()
r.a9(p,q,t,u,o,n,$.eA(),!0,1.1)
m=$.ew()
l=$.er()
k=$.es()
j=$.ex()
r.a9(p,q,m,l,k,j,$.ev(),!0,1.1)
r.a9(p,q,t,l,m,u,$.jJ(),!0,1.1)
r.a9(p,q,o,j,k,n,$.jL(),!0,1.1)
r.a9(p,q,u,m,j,o,$.j3(),!0,1.1)
r.a9(p,q,n,k,l,t,$.jI(),!0,1.1)
r.d8(0,H.b([this.cy],[E.U]))
this.cy.b=!0}return!0},
kj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$iw")
u=this.y.f
t=V.kh(u.T(V.dG()),u.aA(new V.B(0,0,-6)))
s=t.a
r=t.d
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=t.b
p=t.e
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
o=t.c
n=t.f
if(typeof o!=="number")return o.k()
if(typeof n!=="number")return H.c(n)
m=V.kh(new V.u(s+r,q+p,o+n),new V.B(r,p,n).M(0))
n=this.c
l=new B.dB(n.ah(s,q,o),$.j4(),t,0)
for(k=0;!this.kk(l);){l=n.fJ(l.a,t,m,k);++k}},
ei:function(){var u=B.jl(this.c.a,null)
u.dG(null,0,0,0,C.a.l($.j2(),this.e),!1,1)
u.d8(0,this.dx)},
shF:function(a){this.dx=H.d(a,"$ia",[E.U],"$aa")}}
B.fF.prototype={
$1:function(a){var u,t,s
H.h(a,"$iw")
u=this.a
t=u.a
u=V.k4(-u.b.c.d)
if(!J.Z(t.z,u)){s=t.z
t.z=u
t.Q=u.bu()
u=new D.D("velocityRotation",s,t.z,t,[V.ay])
u.b=!0
t.D(u)}},
$S:6}
B.fH.prototype={
c6:function(a){this.c=a
this.jt()
C.a4.eV(this.c.d,0,12288,0)
this.kd()
this.hy()
this.hw()
this.kb()
this.hs()
this.jp()
this.hp()
this.k9()
a.d9()},
an:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=this.a
t=this.c
s=(a+t.a)*c
t=(b+t.b)*c
r=new B.aG(s,t)
q=r.k(0,$.ld().j(0,s+t))
t=Math.floor(q.a)
s=Math.floor(q.b)
p=new B.aG(t,s)
o=p.k(0,$.jM().j(0,t+s))
n=q.n(0,p)
r=new B.f_(u.a,p,r.n(0,o),n)
r.e=0
r.am(1,0)
r.am(0,1)
u=n.a
s=n.b
m=u+s
if(m<=1){l=1-m
if(l>u||l>s)if(u>s)r.am(1,-1)
else r.am(-1,1)
else r.am(1,1)
r.am(0,0)}else{l=2-m
if(l<u||l<s)if(u>s)r.am(2,0)
else r.am(0,2)
else r.am(0,0)
r.am(1,1)}return r.e/47*0.5+0.5},
cN:function(a,b){var u,t
u=this.b
t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.e(u,t)
return u[t]},
jt:function(){var u,t,s,r,q
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.j.az(Math.pow(0.6*this.an(t,s,0.001)+0.3*this.an(t,s,0.01)+0.1*this.an(t,s,0.1),2)*48)
if(r>=48)r=47
q=this.b
if(u<0||u>=484)return H.e(q,u)
q[u]=r;++u}},
kd:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.ke(u,t)},
ke:function(a,b){var u,t,s,r,q
u=this.cN(a,b)
for(t=u-2,s=u<8,r=0;r<=u;++r){if(s)q=t<=r?104:103
else if(u===r)q=102
else q=t<=r?101:103
this.c.V(a,r,b,q)}},
hy:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.hz(u,t)},
hz:function(a,b){var u,t
u=this.c.dn(a,b,0)
if(u<8)for(t=8;t>u;--t)this.c.V(a,t,b,1)},
hw:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.hx(u,t)},
hx:function(a,b){var u,t,s,r,q,p
if(this.cN(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.ah(s,u,q)
if(p===102||p===105)this.c.V(s,u,q,104)}},
kb:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.an(u,t,1.5)<0.1)this.ht(u,t)},
ht:function(a,b){var u,t,s,r
u=this.c
t=a+u.a
if(t>=-30)if(t<30){u=b+u.b
u=u>=-30&&u<30}else u=!1
else u=!1
if(u)return
s=this.cN(a,b)
if(s<10)return
for(r=1;r<8;++r)this.c.V(a,s+r,b,106)
this.hu(a,b)
this.hv(a,s+8,b)},
hu:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.ah(s,p,q)===102){this.c.V(s,p,q,105)
break}},
hv:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.ah(s,p,n)===0)this.c.V(s,p,n,114)}},
jp:function(){var u,t,s,r,q
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(this.an(u,r,12.5)<0.1)this.b7(u,r,204)
else if(this.an(s,r,12.5)<0.1)this.b7(u,r,203)
else{q=r+400
if(this.an(u,q,12.5)<0.1)this.b7(u,r,202)
else if(this.an(s,q,12.5)<0.15)this.b7(u,r,200)
else if(this.an(t,r,12.5)<0.1)this.b7(u,r,201)
else if(this.an(u,r-400,12.5)<0.08)this.b7(u,r,205)}},
b7:function(a,b,c){var u,t
u=this.c.dn(a,b,0)
t=this.c.ah(a,u,b)
if(t!==102&&t!==105)return
this.c.V(a,u+1,b,c)},
hs:function(){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.c
t=u.a
if(t+16>=-30)if(t<=30){u=u.b
u=u+16<-30||u>30}else u=!0
else u=!0
if(u)return
s=new B.fJ(this)
for(r=30;r>=0;r-=2){q=30-r+3
for(p=-q,u=r-1,o=p;o<=q;++o)for(n=p;n<=q;++n){s.$4(o,r,n,111)
s.$4(o,u,n,111)}for(t=p-1,m=p-2,l=q+1,k=q+2,j=-2;j<=2;++j){s.$4(t,r,j,109)
s.$4(t,u,j,109)
s.$4(m,u,j,109)
s.$4(l,r,j,109)
s.$4(l,u,j,109)
s.$4(k,u,j,109)
s.$4(j,r,t,109)
s.$4(j,u,t,109)
s.$4(j,u,m,109)
s.$4(j,r,l,109)
s.$4(j,u,l,109)
s.$4(j,u,k,109)}u=r+1
s.$4(t,u,2,109)
s.$4(m,r,2,109)
s.$4(t,u,-2,109)
s.$4(m,r,-2,109)
s.$4(l,u,2,109)
s.$4(k,r,2,109)
s.$4(l,u,-2,109)
s.$4(k,r,-2,109)
s.$4(2,u,t,109)
s.$4(2,r,m,109)
s.$4(-2,u,t,109)
s.$4(-2,r,m,109)
s.$4(2,u,l,109)
s.$4(2,r,k,109)
s.$4(-2,u,l,109)
s.$4(-2,r,k,109)}},
hp:function(){var u,t,s
u=this.c
t=u.a
if(t+16>=-36)if(t<=12){u=u.b
u=u+16<-28||u>-22}else u=!0
else u=!0
if(u)return
s=new B.fI(this,-12,40,-25)
u=[P.i]
s.$5(110,0,0,H.b([0,1,2,3,4,4,3,2,4,4,3,2,1,0],u),H.b([1,0,0,0,1,2,3,3,4,5,6,6,6,5],u))
s.$5(110,6,0,H.b([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],u),H.b([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],u))
s.$5(113,12,0,H.b([0,0,0,0,0,1,2,1,2,3,3,3,3,3],u),H.b([2,3,4,5,6,1,1,4,4,2,3,4,5,6],u))
s.$5(113,17,0,H.b([0,0,0,0,0,0,1,2,1,2,3,3,3,3],u),H.b([1,2,3,4,5,6,1,1,4,4,2,3,5,6],u))
s.$5(113,22,0,H.b([0,2,1,1,1,1,1,1],u),H.b([1,1,1,2,3,4,5,6],u))},
k9:function(){var u,t,s,r,q,p
u=this.c
t=u.a
if(t+16>=-3)if(t<=3){u=u.b
u=u+16<-3||u>3}else u=!0
else u=!0
if(u)return
s=new B.fK(this)
for(r=-3;r<=3;++r)for(q=0;q<=7;++q)for(u=2+q,p=-3;p<=3;++p)s.$4(r,u,p,0)
s.$4(0,2,0,113)
s.$4(0,3,0,112)
s.$4(0,4,0,112)
s.$4(0,5,0,112)
s.$4(0,6,0,112)},
$ijZ:1}
B.fJ.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.V(a-u.a,b,c-u.b,d)}}
B.fI.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
u=[P.i]
H.d(d,"$ia",u,"$aa")
H.d(e,"$ia",u,"$aa")
for(t=d.length-1,u=this.a,s=this.b+b,r=this.c+c,q=this.d;t>=0;--t){p=u.c
if(t>=d.length)return H.e(d,t)
o=d[t]
if(typeof o!=="number")return H.c(o)
n=p.a
if(t>=e.length)return H.e(e,t)
m=e[t]
if(typeof m!=="number")return H.c(m)
p.V(s+o-n,r-m,q-p.b,a)}}}
B.fK.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.V(a-u.a,b,c-u.b,d)}}
B.fY.prototype={
kS:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.dG(a,u,t,s,a.cj(u,t,s),!1,1)},
d8:function(a,b){var u,t,s,r
H.d(b,"$ia",[E.U],"$aa")
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.e(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.e(s,u)
r=s[u]
if(r!=null){t.sdu(r)
t.b=r.f.length!==0}else{t.sdu(null)
t.b=!1}}this.see(null)},
a4:function(a){var u,t
u=this.c
t=(u&&C.a).l(u,a)
if(t==null){u=this.b
t=new F.cA(u)
t.b=u.gev()
t.c=u.gbl(u)
t.d=0
t.scP(H.b([],[P.x]))
u=[P.i]
t.sbo(H.b([],u))
t.scA(H.b([],u))
t.scv(H.b([],u))
t.z=null
t.Q=null
u=this.c;(u&&C.a).m(u,a,t)}return t},
dG:function(a,b,c,d,e,f,g){var u,t,s,r
u=new V.u(b,c,d)
if(a!=null){b+=a.a
d+=a.b}t=new V.u(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.dH(a,t,u,e,!1,g)
else if(e>=200&&e<=205)if(e===201){s=this.a.c.l(0,201)
r=J.be(s)
this.bH(this.a4(r.l(s,0)),t,0.3141592653589793)
this.bH(this.a4(r.l(s,0)),t,1.7278759594743864)
this.bH(this.a4(r.l(s,0)),t,3.6128315516282616)
this.bH(this.a4(r.l(s,0)),t,5.026548245743669)}else if(e===205)this.hr(t)
else{s=this.a.c.l(0,e)
r=J.be(s)
this.dL(this.a4(r.l(s,0)),t,0.39269908169872414,!0)
this.dL(this.a4(r.l(s,0)),t,1.9634954084936207,!0)}else if(e>=100&&e<=117)this.dH(a,t,u,e,!1,g)},
ba:function(a,b,c,d){var u,t
u=$.a8()
t=$.ad()
return F.c3(null,null,null,a,b,new V.Q(c,d),null,new Z.a7(u.a|t.a|$.ai().a),0)},
a9:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q
u=a.br(H.b([this.ba(b.k(0,c.j(0,i)),g,0,0),this.ba(b.k(0,d.j(0,i)),g,0,1),this.ba(b.k(0,e.j(0,i)),g,1,1),this.ba(b.k(0,f.j(0,i)),g,1,0)],[F.b0]))
t=u+1
s=u+2
r=u+3
q=[P.i]
a.bq(H.b([u,t,s,r],q))
if(h)a.bq(H.b([s,t,u,r],q))},
dH:function(a,b,c,d,e,f){var u=this.a.b.l(0,d)
if(this.b6(a,d,c,0,1,0))this.a9(this.a4(u.a),b,$.et(),$.ey(),$.ez(),$.eu(),$.eA(),!1,f)
if(this.b6(a,d,c,0,-1,0))this.a9(this.a4(u.b),b,$.ew(),$.er(),$.es(),$.ex(),$.ev(),!1,f)
if(this.b6(a,d,c,-1,0,0))this.a9(this.a4(u.c),b,$.et(),$.er(),$.ew(),$.ey(),$.jJ(),!1,f)
if(this.b6(a,d,c,1,0,0))this.a9(this.a4(u.d),b,$.ez(),$.ex(),$.es(),$.eu(),$.jL(),!1,f)
if(this.b6(a,d,c,0,0,1))this.a9(this.a4(u.e),b,$.ey(),$.ew(),$.ex(),$.ez(),$.j3(),!1,f)
if(this.b6(a,d,c,0,0,-1))this.a9(this.a4(u.f),b,$.eu(),$.es(),$.er(),$.et(),$.jI(),!1,f)},
b6:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.j8(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.lD(b,a.cj(d+J.j8(c.a),e,f+J.j8(c.c)))},
dL:function(a,b,c,d){var u,t,s,r
u=Math.cos(c)*0.5
t=Math.sin(c)*0.5
s=-t
r=-u
this.a9(a,b,new V.u(u,0,s),new V.u(u,-0.5,s),new V.u(r,-0.5,t),new V.u(r,0,t),new V.B(t,0,u),!0,1)},
bH:function(a,b,c){var u=V.k4(c)
this.a9(a,b,u.T(new V.u(0.4,-0.1,-0.4)),u.T(new V.u(0,-0.5,0)),u.T(new V.u(0.4,-0.1,0.4)),u.T(new V.u(0.8,0,0)),$.eA(),!0,1)},
hr:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=this.a.c.l(0,205)
t=J.be(u)
s=this.a4(t.l(u,0))
r=this.a4(t.l(u,1))
q=this.a4(t.l(u,2))
u=[F.b0]
p=H.b([],u)
o=H.b([],u)
for(t=b2.a,n=b2.b,m=b2.c,l=0;l<=2;l+=0.25){k=3.141592653589793*l
j=Math.cos(k)
i=Math.sin(k)
h=new V.ay(j,0,-i,0,1,0,i,0,j)
k=h.T(new V.u(0.07,-0.1,0))
g=k.a
if(typeof t!=="number")return t.k()
if(typeof g!=="number")return H.c(g)
f=k.b
if(typeof n!=="number")return n.k()
if(typeof f!=="number")return H.c(f)
k=k.c
if(typeof m!=="number")return m.k()
if(typeof k!=="number")return H.c(k)
e=$.j3()
d=h.aA(e)
c=Math.abs(l-1)
b=$.a8()
a=$.ad()
C.a.h(p,F.c3(null,null,null,new V.u(t+g,n+f,m+k),d,new V.Q(c,0),null,new Z.a7(b.a|a.a|$.ai().a),0))
a=h.T(new V.u(0.1,-0.5,0))
b=a.a
if(typeof b!=="number")return H.c(b)
d=a.b
if(typeof d!=="number")return H.c(d)
a=a.c
if(typeof a!=="number")return H.c(a)
e=h.aA(e)
k=$.a8()
f=$.ad()
C.a.h(p,F.c3(null,null,null,new V.u(t+b,n+d,m+a),e,new V.Q(c,1),null,new Z.a7(k.a|f.a|$.ai().a),0))
a0=h.T(new V.u(0.1,-0.5,0))
a1=h.T(new V.u(0.1,0,0))
f=a0.a
if(typeof f!=="number")return H.c(f)
k=a0.b
if(typeof k!=="number")return H.c(k)
c=a0.c
if(typeof c!=="number")return H.c(c)
e=$.ev()
a=a1.a
if(typeof a!=="number")return a.k()
d=a1.c
if(typeof d!=="number")return d.k()
b=$.a8()
g=$.ad()
C.a.h(o,F.c3(null,null,null,new V.u(t+f,n+k,m+c),e,new V.Q(a+0.5,d+0.5),null,new Z.a7(b.a|g.a|$.ai().a),0))}a2=q.br(p)
a3=r.br(o)
k=P.i
q.kM(P.dt(p.length,new B.fZ(a2),!0,k))
r.bq(P.dt(o.length,new B.h_(a3),!0,k))
a4=H.b([],u)
a5=H.b([],u)
C.a.h(a4,this.ba(b2.k(0,new V.u(0,0.05,0)),$.eA(),0.5,0.5))
C.a.h(a5,this.ba(b2.k(0,new V.u(0,-0.1,0)),$.ev(),0.5,0.5))
for(l=0;l<=1;l+=0.1){u=-6.283185307179586*l
j=Math.cos(u)
i=Math.sin(u)
a6=new V.ay(j,0,-i,0,1,0,i,0,j)
a0=a6.T(new V.u(0.4,-0.15,0))
a1=a6.T(new V.u(0.5,0,0))
u=a0.a
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
g=a0.b
if(typeof n!=="number")return n.k()
if(typeof g!=="number")return H.c(g)
f=a0.c
if(typeof m!=="number")return m.k()
if(typeof f!=="number")return H.c(f)
e=a1.a
if(typeof e!=="number")return e.k()
d=a1.c
if(typeof d!=="number")return d.k()
c=$.a8()
b=$.ad()
C.a.h(a4,F.c3(null,null,null,new V.u(t+u,n+g,m+f),null,new V.Q(e+0.5,d+0.5),null,new Z.a7(c.a|b.a|$.ai().a),0))
b=6.283185307179586*l
j=Math.cos(b)
i=Math.sin(b)
a7=new V.ay(j,0,-i,0,1,0,i,0,j)
a8=a7.T(new V.u(0.4,-0.15,0))
a9=a7.T(new V.u(0.5,0,0))
b=a8.a
if(typeof b!=="number")return H.c(b)
c=a8.b
if(typeof c!=="number")return H.c(c)
d=a8.c
if(typeof d!=="number")return H.c(d)
e=a9.a
if(typeof e!=="number")return e.k()
f=a9.c
if(typeof f!=="number")return f.k()
g=$.a8()
u=$.ad()
C.a.h(a5,F.c3(null,null,null,new V.u(t+b,n+c,m+d),null,new V.Q(e+0.5,f+0.5),null,new Z.a7(g.a|u.a|$.ai().a),0))}b0=s.br(a4)
b1=r.br(a5)
s.bq(P.dt(a4.length,new B.h0(b0),!0,k))
r.bq(P.dt(a5.length,new B.h1(b1),!0,k))},
see:function(a){this.c=H.d(a,"$ia",[F.cA],"$aa")}}
B.fZ.prototype={
$1:function(a){return this.a+a},
$S:8}
B.h_.prototype={
$1:function(a){return this.a+a},
$S:8}
B.h0.prototype={
$1:function(a){return this.a+a},
$S:8}
B.h1.prototype={
$1:function(a){return this.a+a},
$S:8}
B.hd.prototype={
c6:function(a){this.a=a
this.hS()
if(this.au(-2,1))this.jS()
if(this.au(-1,1)){this.a7(5,9,3,7,2,11)
this.dM(6,10,4,5,1,9,1)}if(this.au(0,1)){this.a7(2,10,6,12,10,1)
this.a7(6,10,2,1,10,12)
this.a7(2,10,10,12,10,1)
this.a7(10,10,2,1,10,12)}if(this.au(1,1))this.jq()
if(this.au(1,0))this.js()
if(this.au(1,-1))this.jo()
if(this.au(-2,0))this.kc()
if(this.au(-2,-1))this.is()
if(this.au(-2,-2))this.jw()
a.d9()},
hS:function(){var u,t,s,r,q,p,o
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)this.a.V(u,q,r,103)
for(q=8;q<9;++q)this.a.V(u,q,r,101)
if(!s||r===0)this.a.V(u,9,r,113)
else{p=t&&r===1
o=this.a
if(p)o.V(u,9,r,110)
else o.V(u,9,r,102)}}},
jS:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.V(s,p,8+o,104)},
jq:function(){var u=new B.he(this,2,4,10)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
js:function(){var u=new B.hf(this,2,4,10)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
jo:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a7(t,10,2+s,1,8,1)},
jw:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a7(t,10+u,t,s,1,s)}},
kc:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a7(3,10,t,12,s,1)
this.a7(3,10+u+1,t+1,12,1,2)
this.a7(3,10,t+3,12,s,1)}},
is:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a7(3,10,t,12,s,1)
this.a7(3,10+u+1,t+1,12,1,1)
this.a7(3,10,t+2,12,s,1)}},
au:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
dM:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.V(t,r,c+q,g)},
a7:function(a,b,c,d,e,f){return this.dM(a,b,c,d,e,f,109)},
$ijZ:1}
B.he.prototype={
$3:function(a,b,c){var u,t
u=this.b
t=this.c
return this.a.a7(u+t*a,this.d+c,u+t*b,t,1,t)}}
B.hf.prototype={
$3:function(a,b,c){var u,t
u=this.b
t=this.c
return this.a.a7(u+t*a,this.d,u+t*b,1,c,1)}}
B.e7.prototype={
h3:function(a,b){var u,t,s,r,q,p,o
u=[B.bI]
this.si6(H.b([],u))
this.shL(H.b([],u))
this.scs(H.b([],[E.U]))
this.r=null
u=this.a
if(u!=null)for(u=u.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.a.h(this.e,E.bN(null,!0,null,"",null,r))}for(q=0;q<140;++q){u=this.c;(u&&C.a).h(u,B.lG(this))}for(u=this.b,p=-32;p<32;p+=16)for(o=-32;o<32;o+=16)u.c6(this.fi(p,o))},
aY:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
ah:function(a,b,c){var u,t,s,r,q,p,o,n
u=J.j7(a)
t=J.j7(b)
s=J.j7(c)
r=u<0?u-16+1:u
q=s<0?s-16+1:s
r=C.e.a8(r,16)*16
q=C.e.a8(q,16)*16
p=this.aY(r,q)
o=u-r
n=s-q
if(o<0)o+=16
return new B.ar(o,t,n<0?n+16:n,r,q,p)},
gcH:function(){var u=this.f.y.f.T(V.dG())
return u},
m6:function(a){this.kl(this.gcH())},
fD:function(a){var u=this.gcH()
this.i0(u)
this.jy(u)},
kO:function(a){var u,t,s,r
u=this.a.x
t=u.b
s=u.e
r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.h(s[t],"$ibA")
u=u.f
if(u!=null)u.ey()}},
fi:function(a,b){var u,t
u=this.c
if(0>=u.length)return H.e(u,-1)
t=u.pop()
t.a=a
t.b=b
t.f=!0
t.x=!0
t.saO(!1)
C.a.h(this.d,t)
return t},
l9:function(a){var u=C.a.Z(this.d,a)
if(u){a.f=!1
a.saO(!1)
a.x=!0
a.r=!1
u=this.c;(u&&C.a).h(u,a)
return!0}return!1},
kl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.ah(a.a,a.b,a.c)
t=u.f
if(this.r!=t){this.r=t
t=u.d
s=t-128
r=t+128
q=u.e
p=q-128
o=q+128
for(n=this.d.length-1;n>=0;--n){m=this.d
if(n>=m.length)return H.e(m,n)
l=m[n]
m=l.a
if(s<=m)if(r>m){m=l.b
m=p>m||o<=m}else m=!0
else m=!0
if(m)this.l9(l)}k=t-64
j=t+64
i=q-64
h=q+64
for(g=k;g<j;g+=16)for(f=i;f<h;f+=16)if(this.aY(g,f)==null)this.fi(g,f)}},
i0:function(a){var u,t,s,r,q,p,o,n,m,l,k
u=a.a
if(typeof u!=="number")return u.n()
t=u-8
u=a.c
if(typeof u!=="number")return u.n()
s=u-8
for(u=this.d,r=u.length,q=null,p=1e-9,o=0;o<r;++o){n=u[o]
if(n.x){m=n.a-t
l=n.b-s
k=m*m+l*l
if(q==null||p>k){p=k
q=n}}}if(q!=null)this.b.c6(q)},
jy:function(a){var u,t,s,r,q,p,o,n,m,l,k
u=a.a
if(typeof u!=="number")return u.n()
t=u-8
u=a.c
if(typeof u!=="number")return u.n()
s=u-8
for(u=this.d,r=u.length,q=null,p=1e-9,o=0;o<r;++o){n=u[o]
if(n.f&&!n.x){m=n.a-t
l=n.b-s
k=m*m+l*l
if(q==null||p>k){p=k
q=n}}}if(q!=null){q.f=!1
q.r=!0}},
fJ:function(a,b,c,d){var u,t
u=a.gcW().lK(c)
if(u==null)return
else{t=u.d
a=a.f7(t)}if(a==null)return
return new B.dB(a,t,b,d)},
ag:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$iw")
u=this.f.y.f
t=u.T(V.dG())
s=u.T(new V.u(0,0,-16))
r=new V.Q(t.a,t.c)
q=new V.Q(s.a,s.c)
for(p=this.d,o=p.length,n=0;n<p.length;p.length===o||(0,H.C)(p),++n){m=p[n]
m.m1()
m.m2(r,q)}},
si6:function(a){this.c=H.d(a,"$ia",[B.bI],"$aa")},
shL:function(a){this.d=H.d(a,"$ia",[B.bI],"$aa")},
scs:function(a){this.e=H.d(a,"$ia",[E.U],"$aa")}};(function aliases(){var u=J.ae.prototype
u.fT=u.i
u=J.dn.prototype
u.fU=u.i
u=O.cu.prototype
u.dw=u.aF
u=O.aW.prototype
u.cm=u.aF
u=V.dv.prototype
u.fV=u.bh
u.dv=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"n_","mv",11)
u(P,"n0","mw",11)
u(P,"n1","mx",11)
t(P,"kW","mZ",3)
var n
s(n=E.U.prototype,"gca",0,0,null,["$1","$0"],["fc","ly"],1,0)
s(n,"gfd",0,0,null,["$1","$0"],["fe","lz"],1,0)
s(n,"gfa",0,0,null,["$1","$0"],["fb","lx"],1,0)
s(n,"gf8",0,0,null,["$1","$0"],["f9","lu"],1,0)
r(n,"gls","lt",5)
r(n,"glv","lw",5)
s(n=E.dW.prototype,"gdz",0,0,null,["$1","$0"],["dB","dA"],1,0)
q(n,"glO","fn",3)
p(n=X.dp.prototype,"gh8","h9",30)
r(n,"gh6","h7",17)
r(n,"gha","hb",17)
p(n,"gcn","co",0)
p(n,"gcF","cG",0)
p(n=X.e2.prototype,"giT","iU",12)
p(n,"giD","iE",12)
p(n,"giN","iO",4)
p(n,"gcF","cG",22)
p(n,"gcn","co",22)
p(n,"gj0","j1",4)
p(n,"gj4","j5",4)
p(n,"giR","iS",4)
p(n,"gj2","j3",4)
p(n,"giP","iQ",4)
p(n,"gj6","j7",43)
p(n,"gj8","j9",12)
p(n,"gjm","jn",13)
p(n,"gji","jj",13)
p(n,"gjk","jl",13)
s(D.bp.prototype,"giF",0,0,null,["$1","$0"],["aR","iG"],1,0)
s(n=D.dq.prototype,"ge6",0,0,null,["$1","$0"],["e7","iZ"],1,0)
p(n,"gja","jb",38)
r(n,"git","iu",19)
r(n,"gje","jf",19)
o(V.X.prototype,"gq","de",18)
o(V.B.prototype,"gq","de",18)
s(n=U.cp.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
r(n,"ghi","hj",14)
r(n,"gjc","jd",14)
s(U.cs.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
s(n=U.e3.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
p(n,"gil","im",0)
p(n,"gio","ip",0)
p(n,"giq","ir",0)
p(n,"gie","ig",0)
p(n,"gih","ii",0)
p(n,"gk7","k8",0)
p(n,"gk5","k6",0)
p(n,"gk_","k0",0)
s(n=U.e4.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
p(n,"giX","iY",0)
s(n=M.df.prototype,"gb3",0,0,null,["$1","$0"],["b4","hk"],1,0)
r(n,"giH","iI",5)
r(n,"giJ","iK",5)
s(n=O.bU.prototype,"gbG",0,0,null,["$1","$0"],["a_","cp"],1,0)
s(n,"gjE",0,0,null,["$1","$0"],["eb","jF"],1,0)
r(n,"giv","iw",15)
r(n,"gix","iy",15)
s(O.cu.prototype,"gbG",0,0,null,["$1","$0"],["a_","cp"],1,0)
s(X.dD.prototype,"gdD",0,0,null,["$1","$0"],["b5","hn"],1,0)
t(B,"ng","nn",3)
p(n=B.dE.prototype,"gjg","jh",0)
p(n,"giV","iW",0)
p(n,"giB","iC",0)
p(n,"giz","iA",0)
p(n,"giL","iM",0)
r(n,"gi7","i8",46)
p(n,"gki","kj",0)
p(n=B.e7.prototype,"gm5","m6",9)
p(n,"gfC","fD",9)
p(n,"gkN","kO",9)
p(n,"gm0","ag",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jg,J.ae,J.ao,P.ee,P.l,H.ds,P.aS,H.bQ,H.cP,H.eP,H.fM,H.hp,P.bq,H.ck,H.eh,P.fl,H.ff,H.fg,H.fc,P.ei,P.b2,P.aB,P.e8,P.h8,P.cE,P.h9,P.aZ,P.aj,P.iI,P.it,P.cT,P.im,P.V,P.iA,P.fm,P.bJ,P.iH,P.iF,P.Y,P.as,P.ah,P.aD,P.fD,P.dP,P.eb,P.f5,P.a,P.E,P.F,P.ap,P.m,P.al,P.c4,P.hE,P.iu,W.eR,W.aE,W.dg,P.iv,P.el,P.ii,P.io,P.L,L.fC,B.f_,B.aG,O.T,O.cv,E.eH,E.U,E.fO,D.w,E.dW,Z.e5,Z.hW,Z.cj,Z.aF,Z.a7,D.eK,D.bO,X.d9,X.K,X.fe,X.fi,X.O,X.fw,X.hn,X.e2,D.bp,D.a4,D.dF,D.dO,D.dT,D.dU,D.dV,V.a5,V.aR,V.eY,V.a_,V.bS,V.f9,V.ay,V.ak,V.Q,V.u,V.bw,V.dJ,V.dK,V.bz,V.X,V.B,U.cs,U.e3,U.e4,M.df,A.d6,A.eE,A.fs,A.cI,A.cM,A.cK,A.cN,A.cL,A.cO,A.bK,A.dZ,A.hy,F.a9,F.bu,F.bY,F.cA,F.dN,F.fV,F.fW,F.fX,F.b0,F.hN,F.hO,F.hR,F.hS,O.c1,O.cu,T.hi,V.eB,V.b7,V.dv,V.fU,V.cD,V.dX,V.cG,V.hm,X.da,X.dR,X.dD,V.h2,B.ar,B.eL,B.bI,B.eM,B.S,B.fv,B.dB,B.dE,B.fH,B.fY,B.hd,B.e7])
s(J.ae,[J.fb,J.dm,J.dn,J.aT,J.ct,J.bT,H.bW,W.bP,W.bH,W.e9,W.eT,W.de,W.n,W.di,W.ec,W.b4,W.ef,W.aA,W.ej,P.d8,P.dh,P.dI,P.c0,P.dM,P.dS,P.e_])
s(J.dn,[J.fE,J.c2,J.bt])
t(J.jf,J.aT)
s(J.ct,[J.dl,J.dk])
t(P.fh,P.ee)
s(P.fh,[H.e0,W.i3,W.i2,P.f1])
t(H.a3,H.e0)
s(P.l,[H.eW,H.fn,H.hX])
s(P.aS,[H.fo,H.hY])
t(H.eQ,H.eP)
s(P.bq,[H.fB,H.fd,H.hC,H.hr,H.eJ,H.fS,P.dC,P.aP,P.hD,P.hA,P.h5,P.eO,P.eS])
s(H.ck,[H.j0,H.hc,H.iU,H.iV,H.iW,P.i_,P.hZ,P.i0,P.i1,P.iz,P.iy,P.i8,P.ic,P.i9,P.ia,P.ib,P.ig,P.ih,P.ie,P.id,P.ha,P.hb,P.iO,P.ir,P.iq,P.is,P.fk,P.iG,P.eU,P.eV,P.hI,P.hF,P.hG,P.hH,P.iB,P.iC,P.iE,P.iD,P.iK,P.iJ,P.iL,P.iM,W.i7,P.ix,P.iQ,P.f2,P.f3,E.fP,E.fQ,E.fR,E.hk,D.f0,F.hU,F.hT,F.hP,F.hQ,T.hj,V.h4,V.h3,B.j_,B.fF,B.fJ,B.fI,B.fK,B.fZ,B.h_,B.h0,B.h1,B.he,B.hf])
s(H.hc,[H.h7,H.ch])
t(P.fj,P.fl)
t(H.ax,P.fj)
t(H.dr,H.eW)
t(H.dx,H.bW)
s(H.dx,[H.cU,H.cW])
t(H.cV,H.cU)
t(H.dy,H.cV)
t(H.cX,H.cW)
t(H.dz,H.cX)
s(H.dz,[H.fx,H.fy,H.fz,H.fA,H.dA,H.bX])
t(P.ip,P.iI)
t(P.il,P.it)
t(P.em,P.fm)
t(P.e1,P.em)
s(P.bJ,[P.eF,P.eX])
t(P.bM,P.h9)
s(P.bM,[P.eG,P.hL,P.hK])
t(P.hJ,P.eX)
s(P.ah,[P.x,P.i])
s(P.aP,[P.bx,P.f8])
t(P.i4,P.c4)
s(W.bP,[W.H,W.cR])
s(W.H,[W.a0,W.bn,W.cn])
s(W.a0,[W.t,P.p])
s(W.t,[W.eC,W.eD,W.d7,W.bG,W.cm,W.f4,W.cq,W.cw,W.fT])
t(W.cl,W.e9)
t(W.ed,W.ec)
t(W.bR,W.ed)
t(W.dj,W.cn)
t(W.bB,W.n)
s(W.bB,[W.aV,W.af,W.aH])
t(W.eg,W.ef)
t(W.cx,W.eg)
t(W.ek,W.ej)
t(W.ho,W.ek)
t(W.hV,W.cw)
t(W.b1,W.af)
t(W.ea,W.de)
t(W.i5,P.h8)
t(W.jt,W.i5)
t(W.i6,P.cE)
t(P.iw,P.iv)
t(P.az,P.io)
s(D.w,[E.h6,D.br,D.bs,D.D,X.b6,X.fG])
s(E.eH,[Z.bm,A.cB,T.cF])
s(O.T,[X.dp,D.dq,U.cp])
s(X.fG,[X.du,X.b8,X.dY])
s(D.eK,[U.eN,U.a6,F.cC])
s(U.a6,[U.dc,U.dL])
t(A.fp,A.cB)
s(A.dZ,[A.J,A.hu,A.hv,A.hx,A.hs,A.W,A.ht,A.I,A.hw,A.hz,A.cJ,A.au,A.am,A.an])
t(O.bU,O.c1)
s(O.cu,[O.fq,O.fr,O.aW])
s(O.aW,[O.ft,O.fu])
t(T.bA,T.cF)
s(T.bA,[T.hg,T.hh])
s(V.dv,[V.ba,V.cH])
t(X.f6,X.dR)
u(H.e0,H.cP)
u(H.cU,P.V)
u(H.cV,H.bQ)
u(H.cW,P.V)
u(H.cX,H.bQ)
u(P.ee,P.V)
u(P.em,P.iA)
u(W.e9,W.eR)
u(W.ec,P.V)
u(W.ed,W.aE)
u(W.ef,P.V)
u(W.eg,W.aE)
u(W.ej,P.V)
u(W.ek,W.aE)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.d7.prototype
C.n=W.bG.prototype
C.y=W.bH.prototype
C.l=W.cm.prototype
C.R=W.di.prototype
C.S=W.dj.prototype
C.T=J.ae.prototype
C.a=J.aT.prototype
C.o=J.dk.prototype
C.e=J.dl.prototype
C.q=J.dm.prototype
C.j=J.ct.prototype
C.c=J.bT.prototype
C.a_=J.bt.prototype
C.a4=H.bX.prototype
C.a5=W.cx.prototype
C.F=J.fE.prototype
C.b=P.c0.prototype
C.w=J.c2.prototype
C.G=W.b1.prototype
C.H=W.cR.prototype
C.J=new P.eG(!1)
C.I=new P.eF(C.J)
C.K=new P.fD()
C.L=new P.hL()
C.M=new P.ii()
C.k=new P.ip()
C.d=new A.bK(0,"ColorSourceType.None")
C.i=new A.bK(1,"ColorSourceType.Solid")
C.f=new A.bK(2,"ColorSourceType.Texture2D")
C.h=new A.bK(3,"ColorSourceType.TextureCube")
C.p=new P.aD(0)
C.N=new P.aD(25e4)
C.O=new P.aD(5e6)
C.P=new P.aD(7e4)
C.Q=new P.aD(75e4)
C.U=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.V=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.W=function(getTagFallback) {
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
C.X=function() {
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
C.Y=function(hooks) {
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
C.Z=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.b(u([127,2047,65535,1114111]),[P.i])
C.r=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.i])
C.t=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.i])
C.u=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.i])
C.a1=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.i])
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.i])
C.v=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.i])
C.D=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.i])
C.a2=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.i])
C.E=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.i])
C.a0=H.b(u([]),[P.m])
C.a3=new H.eQ(0,{},C.a0,[P.m,P.m])
C.m=new P.hJ(!1)})();(function staticFields(){$.aQ=0
$.ci=null
$.jU=null
$.jw=!1
$.l1=null
$.kU=null
$.l7=null
$.iR=null
$.iX=null
$.jE=null
$.c6=null
$.d_=null
$.d0=null
$.jx=!1
$.R=C.k
$.k5=null
$.k9=null
$.kd=null
$.cy=null
$.ki=null
$.ks=null
$.ky=null
$.kw=null
$.kt=null
$.kx=null
$.ku=null
$.hM=null
$.kv=null
$.kc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nK","lb",function(){return H.l0("_$dart_dartClosure")})
u($,"o0","jQ",function(){return H.l0("_$dart_js")})
u($,"o4","lg",function(){return H.b_(H.hq({
toString:function(){return"$receiver$"}}))})
u($,"o5","lh",function(){return H.b_(H.hq({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o6","li",function(){return H.b_(H.hq(null))})
u($,"o7","lj",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oa","lm",function(){return H.b_(H.hq(void 0))})
u($,"ob","ln",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o9","ll",function(){return H.b_(H.kn(null))})
u($,"o8","lk",function(){return H.b_(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"od","lp",function(){return H.b_(H.kn(void 0))})
u($,"oc","lo",function(){return H.b_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"os","jR",function(){return P.mu()})
u($,"ow","d4",function(){return[]})
u($,"of","lq",function(){return P.mq()})
u($,"ot","lt",function(){return H.lZ(H.c5(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.i])))})
u($,"ou","lu",function(){return P.mf("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"ov","lv",function(){return P.mQ()})
u($,"nL","lc",function(){return H.b([B.aY(5,2),B.aY(2,5),B.aY(-5,2),B.aY(-2,5),B.aY(5,-2),B.aY(2,-5),B.aY(-5,-2),B.aY(-2,-5)],[B.aG])})
u($,"nN","ld",function(){return B.aY(-0.211324865405187,-0.211324865405187)})
u($,"nM","jM",function(){return B.aY(0.366025403784439,0.366025403784439)})
u($,"ol","ls",function(){return Z.aJ(0)})
u($,"on","a8",function(){return Z.aJ(1)})
u($,"om","ai",function(){return Z.aJ(2)})
u($,"oh","bk",function(){return Z.aJ(4)})
u($,"oo","ad",function(){return Z.aJ(8)})
u($,"op","bl",function(){return Z.aJ(16)})
u($,"oi","d2",function(){return Z.aJ(32)})
u($,"oj","d3",function(){return Z.aJ(64)})
u($,"ok","lr",function(){return Z.aJ(96)})
u($,"oq","cf",function(){return Z.aJ(128)})
u($,"og","bj",function(){return Z.aJ(256)})
u($,"nu","la",function(){return new V.eY(1e-9)})
u($,"nt","y",function(){return $.la()})
u($,"nR","bf",function(){return V.at(0)})
u($,"nO","jN",function(){return V.at(511)})
u($,"nU","aM",function(){return V.at(1)})
u($,"nS","jO",function(){return V.at(2)})
u($,"nT","aL",function(){return V.at(4)})
u($,"nX","aN",function(){return V.at(8)})
u($,"nV","jP",function(){return V.at(16)})
u($,"nW","bg",function(){return V.at(32)})
u($,"o_","bi",function(){return V.at(64)})
u($,"nY","lf",function(){return V.at(128)})
u($,"nZ","bh",function(){return V.at(256)})
u($,"nQ","j4",function(){return V.at(146)})
u($,"nP","le",function(){return V.at(365)})
u($,"nq","j2",function(){return H.b([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.i])})
u($,"nH","jK",function(){return V.fN(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"nJ","eA",function(){return V.kA()})
u($,"nA","ev",function(){var t=$.ku
if(t==null){t=V.jr(0,-1,0)
$.ku=t}return t})
u($,"nG","jJ",function(){var t=$.kw
if(t==null){t=V.jr(1,0,0)
$.kw=t}return t})
u($,"nI","jL",function(){var t=$.kt
if(t==null){t=V.jr(-1,0,0)
$.kt=t}return t})
u($,"nD","j3",function(){return V.js()})
u($,"nx","jI",function(){return V.kz()})
u($,"nE","ey",function(){return V.bv(-0.5,0.5,0.5)})
u($,"nF","ez",function(){return V.bv(0.5,0.5,0.5)})
u($,"nB","ew",function(){return V.bv(-0.5,-0.5,0.5)})
u($,"nC","ex",function(){return V.bv(0.5,-0.5,0.5)})
u($,"ny","et",function(){return V.bv(-0.5,0.5,-0.5)})
u($,"nz","eu",function(){return V.bv(0.5,0.5,-0.5)})
u($,"nv","er",function(){return V.bv(-0.5,-0.5,-0.5)})
u($,"nw","es",function(){return V.bv(0.5,-0.5,-0.5)})})()
var v={mangledGlobalNames:{i:"int",x:"double",ah:"num",m:"String",Y:"bool",F:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[P.i,[P.l,E.U]]},{func:1,ret:P.F,args:[D.w]},{func:1,ret:P.F,args:[F.a9]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:-1,args:[P.i,[P.l,U.a6]]},{func:1,ret:-1,args:[P.i,[P.l,V.ak]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,[P.l,X.K]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.i,[P.l,D.a4]]},{func:1,ret:P.F,args:[W.n]},{func:1,ret:P.m,args:[P.i]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.F,args:[,]},{func:1,ret:W.a0,args:[W.H]},{func:1,args:[,P.m]},{func:1,ret:P.i,args:[P.i,P.i]},{func:1,ret:P.F,args:[,],opt:[P.ap]},{func:1,ret:P.F,args:[P.ah]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.Y,args:[[P.l,X.K]]},{func:1,args:[P.m]},{func:1,ret:P.Y,args:[W.H]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,args:[W.n]},{func:1,ret:-1,args:[P.m],opt:[,]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.Y,args:[[P.l,D.a4]]},{func:1,ret:P.F,args:[P.m,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.F,args:[P.m]},{func:1,ret:[P.E,P.m,P.m],args:[[P.E,P.m,P.m],P.m]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:P.F,args:[P.aZ]},{func:1,ret:V.u,args:[V.u,V.u]},{func:1,ret:-1,args:[P.m,P.i]},{func:1,ret:P.L,args:[P.i]},{func:1,ret:[P.aB,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ae,MediaError:J.ae,Navigator:J.ae,NavigatorConcurrentHardware:J.ae,NavigatorUserMediaError:J.ae,OverconstrainedError:J.ae,PositionError:J.ae,WebGLActiveInfo:J.ae,WebGLRenderbuffer:J.ae,WebGL2RenderingContext:J.ae,SQLError:J.ae,ArrayBufferView:H.bW,Float32Array:H.dy,Int16Array:H.fx,Int32Array:H.fy,Int8Array:H.fz,Uint32Array:H.fA,Uint8ClampedArray:H.dA,CanvasPixelArray:H.dA,Uint8Array:H.bX,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.eC,HTMLAreaElement:W.eD,HTMLBodyElement:W.d7,HTMLCanvasElement:W.bG,CanvasRenderingContext2D:W.bH,CDATASection:W.bn,CharacterData:W.bn,Comment:W.bn,ProcessingInstruction:W.bn,Text:W.bn,CSSStyleDeclaration:W.cl,MSStyleCSSProperties:W.cl,CSS2Properties:W.cl,HTMLDivElement:W.cm,XMLDocument:W.cn,Document:W.cn,DOMException:W.eT,DOMRectReadOnly:W.de,Element:W.a0,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bP,HTMLFormElement:W.f4,History:W.di,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,HTMLDocument:W.dj,ImageData:W.b4,HTMLImageElement:W.cq,KeyboardEvent:W.aV,HTMLAudioElement:W.cw,HTMLMediaElement:W.cw,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cx,RadioNodeList:W.cx,HTMLSelectElement:W.fT,Touch:W.aA,TouchEvent:W.aH,TouchList:W.ho,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,HTMLVideoElement:W.hV,WheelEvent:W.b1,Window:W.cR,DOMWindow:W.cR,ClientRect:W.ea,DOMRect:W.ea,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,WebGLBuffer:P.d8,WebGLFramebuffer:P.dh,WebGLProgram:P.dI,WebGLRenderingContext:P.c0,WebGLShader:P.dM,WebGLTexture:P.dS,WebGLUniformLocation:P.e_})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.l4,[])
else B.l4([])})})()
//# sourceMappingURL=main.dart.js.map
