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
a[c]=function(){a[c]=function(){H.pC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ll:function ll(a){this.a=a},
kL:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
ho:function(){return new P.cb("No element")},
nU:function(){return new P.cb("Too many elements")},
nT:function(){return new P.cb("Too few elements")},
w:function w(a){this.a=a},
h4:function h4(){},
c5:function c5(){},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
jC:function jC(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(){},
d3:function d3(){},
et:function et(){},
nK:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cp:function(a){var u,t
u=H.J(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pj:function(a){return v.types[H.ak(a)]},
pq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iL},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.c(H.au(a))
return u},
og:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hp(u)
t=u[0]
s=u[1]
return new H.ie(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cO:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
od:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.J(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.J(r,p)|32)>s)return}return parseInt(a,b)},
c7:function(a){return H.o4(a)+H.lC(H.bT(a),0,null)},
o4:function(a){var u,t,s,r,q,p,o,n,m
u=J.Y(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibP){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cp(r.length>1&&C.c.J(r,0)===36?C.c.aq(r,1):r)},
o5:function(){if(!!self.location)return self.location.href
return},
me:function(a){var u,t,s,r,q
H.kS(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oe:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.au(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aW(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.au(r))}return H.me(u)},
mf:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.au(s))
if(s<0)throw H.c(H.au(s))
if(s>65535)return H.oe(a)}return H.me(a)},
of:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c8:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oc:function(a){var u=H.c6(a).getFullYear()+0
return u},
oa:function(a){var u=H.c6(a).getMonth()+1
return u},
o6:function(a){var u=H.c6(a).getDate()+0
return u},
o7:function(a){var u=H.c6(a).getHours()+0
return u},
o9:function(a){var u=H.c6(a).getMinutes()+0
return u},
ob:function(a){var u=H.c6(a).getSeconds()+0
return u},
o8:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.au(a))},
h:function(a,b){if(a==null)J.aG(a)
throw H.c(H.ck(a,b))},
ck:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,"index",null)
u=H.ak(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,"index",null,u)
return P.e9(b,"index",null)},
pc:function(a,b,c){if(a>c)return new P.c9(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end","Invalid value")
return new P.aO(!0,b,"end",null)},
au:function(a){return new P.aO(!0,a,null,null)},
p7:function(a){if(typeof a!=="number")throw H.c(H.au(a))
return a},
c:function(a){var u
if(a==null)a=new P.e4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n8})
u.name=""}else u.toString=H.n8
return u},
n8:function(){return J.aw(this.dartException)},
q:function(a){throw H.c(a)},
D:function(a){throw H.c(P.bl(a))},
bf:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mo:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ma:function(a,b){return new H.i2(a,b==null?null:b.method)},
lm:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hs(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.l9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aW(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lm(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ma(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.nb()
p=$.nc()
o=$.nd()
n=$.ne()
m=$.nh()
l=$.ni()
k=$.ng()
$.nf()
j=$.nk()
i=$.nj()
h=q.ag(t)
if(h!=null)return u.$1(H.lm(H.J(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.lm(H.J(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ma(H.J(t),h))}}return u.$1(new H.jc(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ee()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aO(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ee()
return a},
cn:function(a){var u
if(a==null)return new H.f7(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f7(a)},
pf:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pp:function(a,b,c,d,e,f){H.f(a,"$ibJ")
switch(H.ak(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
cj:function(a,b){var u
H.ak(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pp)
a.$identity=u
return u},
nJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Y(d).$ib){u.$reflectionInfo=d
s=H.og(u).r}else s=d
r=e?Object.create(new H.iC().constructor.prototype):Object.create(new H.cs(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b1
if(typeof p!=="number")return p.p()
$.b1=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.m0(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pj,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lZ:H.le
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.m0(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nG:function(a,b,c,d){var u=H.le
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nG(t,!r,u,b)
if(t===0){r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ct
if(q==null){q=H.fM("self")
$.ct=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
o+=r
r="return function("+o+"){return this."
q=$.ct
if(q==null){q=H.fM("self")
$.ct=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nH:function(a,b,c,d){var u,t
u=H.le
t=H.lZ
switch(b?-1:a){case 0:throw H.c(H.ok("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nI:function(a,b){var u,t,s,r,q,p,o,n
u=$.ct
if(u==null){u=H.fM("self")
$.ct=u}t=$.lY
if(t==null){t=H.fM("receiver")
$.lY=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nH(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b1
if(typeof t!=="number")return t.p()
$.b1=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b1
if(typeof t!=="number")return t.p()
$.b1=t+1
return new Function(u+t+"}")()},
lF:function(a,b,c,d,e,f,g){return H.nJ(a,b,H.ak(c),d,!!e,!!f,g)},
le:function(a){return a.a},
lZ:function(a){return a.c},
fM:function(a){var u,t,s,r,q
u=new H.cs("self","target","receiver","name")
t=J.hp(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b_(a,"String"))},
pd:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"double"))},
pw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"num"))},
lD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b_(a,"bool"))},
ak:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b_(a,"int"))},
n5:function(a,b){throw H.c(H.b_(a,H.cp(H.J(b).substring(2))))},
py:function(a,b){throw H.c(H.nF(a,H.cp(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.n5(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.py(a,b)},
kS:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.c(H.b_(a,"List<dynamic>"))},
n2:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.n5(a,b)},
mZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ak(u)]
else return a.$S()}return},
fw:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mZ(J.Y(a))
if(u==null)return!1
return H.mM(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lz)return a
$.lz=!0
try{if(H.fw(a,b))return a
u=H.l3(b)
t=H.b_(a,u)
throw H.c(t)}finally{$.lz=!1}},
lH:function(a,b){if(a!=null&&!H.lE(a,b))H.q(H.b_(a,H.l3(b)))
return a},
b_:function(a,b){return new H.j0("TypeError: "+P.h8(a)+": type '"+H.mR(a)+"' is not a subtype of type '"+b+"'")},
nF:function(a,b){return new H.fN("CastError: "+P.h8(a)+": type '"+H.mR(a)+"' is not a subtype of type '"+b+"'")},
mR:function(a){var u,t
u=J.Y(a)
if(!!u.$icu){t=H.mZ(u)
if(t!=null)return H.l3(t)
return"Closure"}return H.c7(a)},
pC:function(a){throw H.c(new P.fX(H.J(a)))},
ok:function(a){return new H.im(a)},
n_:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qo:function(a,b,c){return H.co(a["$a"+H.m(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.J(c)
H.ak(d)
u=H.co(a["$a"+H.m(c)],H.bT(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.J(b)
H.ak(c)
u=H.co(a["$a"+H.m(b)],H.bT(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ak(b)
u=H.bT(a)
return u==null?null:u[b]},
l3:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cp(a[0].name)+H.lC(a,1,b)
if(typeof a=="function")return H.cp(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ak(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.h(b,m)
o=C.c.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.Q)o+=" extends "+H.bR(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bR(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bR(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bR(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pe(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.J(u[g])
i=i+h+H.bR(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lC:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.i(0)+">"},
co:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dn:function(a,b,c,d){var u,t
H.J(b)
H.kS(c)
H.J(d)
if(a==null)return!1
u=H.bT(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.mU(H.co(t[d],u),null,c,null)},
k:function(a,b,c,d){H.J(b)
H.kS(c)
H.J(d)
if(a==null)return a
if(H.dn(a,b,c,d))return a
throw H.c(H.b_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cp(b.substring(2))+H.lC(c,0,null),v.mangledGlobalNames)))},
mU:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
qm:function(a,b,c){return a.apply(b,H.co(J.Y(b)["$a"+H.m(c)],H.bT(b)))},
n1:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="M"||a===-1||a===-2||H.n1(u)}return!1},
lE:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="M"||b===-1||b===-2||H.n1(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fw(a,b)}u=J.Y(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lE(a,b))throw H.c(H.b_(a,H.l3(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.mM(a,b,c,d)
if('func' in a)return c.name==="bJ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aN("type" in a?a.type:null,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cA" in t.prototype))return!1
r=t.prototype["$a"+"cA"]
q=H.co(r,u?a.slice(1):null)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mU(H.co(m,u),b,p,d)},
mM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aN(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aN(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aN(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aN(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pv(h,b,g,d)},
pv:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aN(c[r],d,a[r],b))return!1}return!0},
qn:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pt:function(a){var u,t,s,r,q,p
u=H.J($.n0.$1(a))
t=$.kK[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kP[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.J($.mT.$2(a,u))
if(u!=null){t=$.kK[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kP[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.l2(s)
$.kK[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kP[u]=s
return s}if(q==="-"){p=H.l2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.n4(a,s)
if(q==="*")throw H.c(P.jb(u))
if(v.leafTags[u]===true){p=H.l2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.n4(a,s)},
n4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lJ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l2:function(a){return J.lJ(a,!1,null,!!a.$iL)},
pu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l2(u)
else return J.lJ(u,c,null,null)},
pn:function(){if(!0===$.lI)return
$.lI=!0
H.po()},
po:function(){var u,t,s,r,q,p,o,n
$.kK=Object.create(null)
$.kP=Object.create(null)
H.pm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n6.$1(q)
if(p!=null){o=H.pu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pm:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.ci(C.a0,H.ci(C.a5,H.ci(C.E,H.ci(C.E,H.ci(C.a4,H.ci(C.a1,H.ci(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.n0=new H.kM(q)
$.mT=new H.kN(p)
$.n6=new H.kO(o)},
ci:function(a,b){return a(b)||b},
nW:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
pB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lM:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fR:function fR(){},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i2:function i2(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
l9:function l9(a){this.a=a},
f7:function f7(a){this.a=a
this.b=null},
cu:function cu(){},
iL:function iL(){},
iC:function iC(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a){this.a=a},
fN:function fN(a){this.a=a},
im:function im(a){this.a=a},
aR:function aR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hx:function hx(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
o3:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ck(b,a))},
oV:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pc(a,b,c))
return b},
cJ:function cJ(){},
bM:function bM(){},
e0:function e0(){},
cK:function cK(){},
e1:function e1(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e2:function e2(){},
cL:function cL(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
pe:function(a){return J.m5(a?Object.keys(a):[],null)},
px:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fy:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lI==null){H.pn()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.jb("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lN()]
if(q!=null)return q
q=H.pt(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lN(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ld(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.m5(new Array(a),b)},
m5:function(a,b){return J.hp(H.d(a,[b]))},
hp:function(a){H.kS(a)
a.fixed$length=Array
return a},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.Q)return a
return J.fy(a)},
pg:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.Q)return a
return J.fy(a)},
cm:function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.Q)return a
return J.fy(a)},
fx:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.Q)return a
return J.fy(a)},
ph:function(a){if(typeof a=="number")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
pi:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
dp:function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
ae:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.Q)return a
return J.fy(a)},
nt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pg(a).p(a,b)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).A(a,b)},
lQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pi(a).v(a,b)},
nu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ph(a).t(a,b)},
lR:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cm(a).j(a,b)},
la:function(a,b,c){return J.fx(a).n(a,b,c)},
nv:function(a,b){return J.dp(a).J(a,b)},
fA:function(a,b){return J.ae(a).iI(a,b)},
lb:function(a,b,c){return J.ae(a).iM(a,b,c)},
nw:function(a,b,c,d){return J.ae(a).jH(a,b,c,d)},
lS:function(a,b){return J.ae(a).F(a,b)},
nx:function(a,b){return J.dp(a).a3(a,b)},
fB:function(a,b){return J.fx(a).M(a,b)},
ny:function(a,b,c,d){return J.ae(a).ko(a,b,c,d)},
lT:function(a,b){return J.fx(a).O(a,b)},
nz:function(a){return J.ae(a).gjR(a)},
lU:function(a){return J.ae(a).gcI(a)},
dt:function(a){return J.Y(a).gL(a)},
bC:function(a){return J.fx(a).gX(a)},
aG:function(a){return J.cm(a).gl(a)},
nA:function(a){return J.ae(a).gla(a)},
lc:function(a,b){return J.ae(a).b6(a,b)},
lV:function(a){return J.fx(a).l_(a)},
nB:function(a,b){return J.ae(a).l4(a,b)},
nC:function(a,b,c){return J.ae(a).fw(a,b,c)},
nD:function(a,b,c){return J.dp(a).w(a,b,c)},
nE:function(a){return J.dp(a).lg(a)},
aw:function(a){return J.Y(a).i(a)},
a:function a(){},
hq:function hq(){},
dP:function dP(){},
dQ:function dQ(){},
i6:function i6(){},
bP:function bP(){},
bp:function bp(){},
aQ:function aQ(a){this.$ti=a},
lk:function lk(a){this.$ti=a},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bL:function bL(){},
dO:function dO(){},
dN:function dN(){},
bo:function bo(){}},P={
ox:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.p4()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cj(new P.jE(u),1)).observe(t,{childList:true})
return new P.jD(u,t,s)}else if(self.setImmediate!=null)return P.p5()
return P.p6()},
oy:function(a){self.scheduleImmediate(H.cj(new P.jF(H.n(a,{func:1,ret:-1})),0))},
oz:function(a){self.setImmediate(H.cj(new P.jG(H.n(a,{func:1,ret:-1})),0))},
oA:function(a){P.lq(C.y,H.n(a,{func:1,ret:-1}))},
lq:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a7(a.a,1000)
return P.oG(u<0?0:u,b)},
mn:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bd]})
u=C.f.a7(a.a,1000)
return P.oH(u<0?0:u,b)},
oG:function(a,b){var u=new P.fd(!0)
u.h4(a,b)
return u},
oH:function(a,b){var u=new P.fd(!1)
u.h5(a,b)
return u},
oB:function(a,b){var u,t,s
b.a=1
try{a.f9(new P.jQ(b),new P.jR(b),null)}catch(s){u=H.al(s)
t=H.cn(s)
P.pz(new P.jS(b,u,t))}},
mB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaM")
if(u>=4){t=b.cq()
b.a=a.a
b.c=a.c
P.d9(b,t)}else{t=H.f(b.c,"$ibi")
b.a=2
b.c=a
a.dX(t)}},
d9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$ian")
t=t.b
p=q.a
o=q.b
t.toString
P.kB(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d9(u.a,b)}t=u.a
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
if(k){H.f(m,"$ian")
t=t.b
p=m.a
o=m.b
t.toString
P.kB(null,null,t,p,o)
return}j=$.a2
if(j!=l)$.a2=l
else j=null
t=b.c
if(t===8)new P.jW(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jV(s,b,m).$0()}else if((t&2)!==0)new P.jU(u,s,b).$0()
if(j!=null)$.a2=j
t=s.b
if(!!J.Y(t).$icA){if(t.a>=4){i=H.f(o.c,"$ibi")
o.c=null
b=o.bu(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mB(t,o)
return}}h=b.b
i=H.f(h.c,"$ibi")
h.c=null
b=h.bu(i)
t=s.a
p=s.b
if(!t){H.B(p,H.v(h,0))
h.a=4
h.c=p}else{H.f(p,"$ian")
h.a=8
h.c=p}u.a=h
t=h}},
p_:function(a,b){if(H.fw(a,{func:1,args:[P.Q,P.az]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.az]})
if(H.fw(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.c(P.ld(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oZ:function(){var u,t
for(;u=$.ch,u!=null;){$.dm=null
t=u.b
$.ch=t
if(t==null)$.dl=null
u.a.$0()}},
p3:function(){$.lA=!0
try{P.oZ()}finally{$.dm=null
$.lA=!1
if($.ch!=null)$.lO().$1(P.mV())}},
mQ:function(a){var u=new P.eA(H.n(a,{func:1,ret:-1}))
if($.ch==null){$.dl=u
$.ch=u
if(!$.lA)$.lO().$1(P.mV())}else{$.dl.b=u
$.dl=u}},
p2:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ch
if(u==null){P.mQ(a)
$.dm=$.dl
return}t=new P.eA(a)
s=$.dm
if(s==null){t.b=u
$.dm=t
$.ch=t}else{t.b=s.b
s.b=t
$.dm=t
if(t.b==null)$.dl=t}},
pz:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a2
if(C.l===t){P.kD(null,null,C.l,a)
return}t.toString
P.kD(null,null,t,H.n(t.cD(a),u))},
mm:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a2
if(t===C.l){t.toString
return P.lq(a,b)}return P.lq(a,H.n(t.cD(b),u))},
oo:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bd]}
H.n(b,u)
t=$.a2
if(t===C.l){t.toString
return P.mn(a,b)}s=t.ea(b,P.bd)
$.a2.toString
return P.mn(a,H.n(s,u))},
kB:function(a,b,c,d,e){var u={}
u.a=d
P.p2(new P.kC(u,e))},
mN:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mO:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
p0:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kD:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cD(d):c.jS(d,-1)
P.mQ(d)},
jE:function jE(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fd:function fd(a){this.a=a
this.b=null
this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jP:function jP(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jX:function jX(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a){this.a=a
this.b=null},
iF:function iF(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
cS:function cS(){},
iG:function iG(){},
bd:function bd(){},
an:function an(a,b){this.a=a
this.b=b},
ku:function ku(){},
kC:function kC(a,b){this.a=a
this.b=b},
k2:function k2(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function(a,b,c,d,e){return new H.aR([d,e])},
ln:function(a,b){return new H.aR([a,b])},
o_:function(a){return H.pf(a,new H.aR([null,null]))},
dU:function(a,b,c,d){return new P.k0([d])},
lw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oF:function(a,b,c){var u=new P.eP(a,b,[c])
u.c=a.e
return u},
nS:function(a,b,c){var u,t
if(P.lB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.ds()
C.a.h(t,a)
try{P.oY(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.mk(b,H.n2(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lj:function(a,b,c){var u,t,s
if(P.lB(a))return b+"..."+c
u=new P.am(b)
t=$.ds()
C.a.h(t,a)
try{s=u
s.a=P.mk(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lB:function(a){var u,t
for(u=0;t=$.ds(),u<t.length;++u)if(a===t[u])return!0
return!1},
oY:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.G())return
r=H.m(u.gN(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.G()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gN(u);++s
if(!u.G()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gN(u);++s
for(;u.G();o=n,n=m){m=u.gN(u);++s
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
nZ:function(a,b,c){var u=P.nY(null,null,null,b,c)
a.O(0,new P.hz(u,b,c))
return u},
m6:function(a,b){var u,t,s
u=P.dU(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)u.h(0,H.B(a[s],b))
return u},
lo:function(a){var u,t
u={}
if(P.lB(a))return"{...}"
t=new P.am("")
try{C.a.h($.ds(),a)
t.a+="{"
u.a=!0
J.lT(a,new P.hD(u,t))
t.a+="}"}finally{u=$.ds()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k0:function k0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.c=this.b=null},
eP:function eP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(){},
y:function y(){},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
ah:function ah(){},
kl:function kl(){},
hE:function hE(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
k7:function k7(){},
eQ:function eQ(){},
fj:function fj(){},
os:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.ot(!1,b,c,d)
return},
ot:function(a,b,c,d){var u,t,s
u=$.nl()
if(u==null)return
t=0===c
if(t&&!0)return P.lt(u,b)
s=b.length
d=P.bu(c,d,s,null,null,null)
if(t&&d===s)return P.lt(u,b)
return P.lt(u,b.subarray(c,d))},
lt:function(a,b){if(P.ov(b))return
return P.ow(a,b)},
ow:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
ov:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
ou:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
p1:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cm(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bZ()
if((s&127)!==s)return t-b}return c-b},
lX:function(a,b,c,d,e,f){if(C.f.bn(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
bY:function bY(){},
bG:function bG(){},
h6:function h6(){},
hm:function hm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hl:function hl(a){this.a=a},
jk:function jk(a){this.a=a},
jm:function jm(){},
ks:function ks(a){this.b=this.a=0
this.c=a},
jl:function jl(a){this.a=a},
kq:function kq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.od(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
nP:function(a){if(a instanceof H.cu)return a.i(0)
return"Instance of '"+H.c7(a)+"'"},
o0:function(a,b,c,d){var u,t
H.B(b,d)
u=J.nV(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
m7:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bC(a);s.G();)C.a.h(t,H.B(s.gN(s),c))
if(b)return t
return H.k(J.hp(t),"$ib",u,"$ab")},
ef:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaQ",[u],"$aaQ")
t=a.length
c=P.bu(b,c,t,null,null,null)
return H.mf(b>0||c<t?C.a.fE(a,b,c):a)}if(!!J.Y(a).$icL)return H.of(a,b,P.bu(b,c,a.length,null,null,null))
return P.om(a,b,c)},
om:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ag(b,0,J.aG(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aG(a),null,null))
t=J.bC(a)
for(s=0;s<b;++s)if(!t.G())throw H.c(P.ag(b,0,s,null,null))
r=[]
if(u)for(;t.G();)r.push(t.gN(t))
else for(s=b;s<c;++s){if(!t.G())throw H.c(P.ag(c,b,s,null,null))
r.push(t.gN(t))}return H.mf(r)},
oi:function(a,b,c){return new H.hr(a,H.nW(a,!1,!0,!1))},
mk:function(a,b,c){var u=J.bC(b)
if(!u.G())return a
if(c.length===0){do a+=H.m(u.gN(u))
while(u.G())}else{a+=H.m(u.gN(u))
for(;u.G();)a=a+c+H.m(u.gN(u))}return a},
mq:function(){var u=H.o5()
if(u!=null)return P.or(u,0,null)
throw H.c(P.I("'Uri.base' is not supported"))},
fk:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nr().b
if(typeof b!=="string")H.q(H.au(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.av(c,"bY",0))
t=c.gkn().cJ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c8(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nL:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dD:function(a){if(a>=10)return""+a
return"0"+a},
m2:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nP(a)},
dv:function(a){return new P.aO(!1,null,null,a)},
ld:function(a,b,c){return new P.aO(!0,a,b,c)},
e9:function(a,b,c){return new P.c9(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c,d,e,f){if(typeof a!=="number")return H.G(a)
if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",f))
return b}return c},
a0:function(a,b,c,d,e){var u=H.ak(e==null?J.aG(b):e)
return new P.hn(b,u,!0,a,c,"Index out of range")},
I:function(a){return new P.jd(a)},
jb:function(a){return new P.ja(a)},
mj:function(a){return new P.cb(a)},
bl:function(a){return new P.fQ(a)},
t:function(a){return new P.eI(a)},
a8:function(a,b,c){return new P.hh(a,b,c)},
o1:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lL:function(a){H.px(a)},
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(t===0)return P.mp(b>0||c<c?C.c.w(a,b,c):a,5,null).gfe()
else if(t===32)return P.mp(C.c.w(a,u,c),0,null).gfe()}s=new Array(8)
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
if(P.mP(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lp()
if(q>=b)if(P.mP(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a0()
if(typeof m!=="number")return H.G(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.ad(a,"..",n)))i=m>n+2&&C.c.ad(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ad(a,"file",b)){if(p<=b){if(!C.c.ad(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.c.b3(a,n,m,"/");++m;++l;++c}else{a=C.c.w(a,b,n)+"/"+C.c.w(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ad(a,"http",b)){if(s&&o+3===n&&C.c.ad(a,"80",o+1))if(b===0&&!0){a=C.c.b3(a,o,n,"")
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
else if(q===u&&C.c.ad(a,"https",b)){if(s&&o+4===n&&C.c.ad(a,"443",o+1))if(b===0&&!0){a=C.c.b3(a,o,n,"")
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
l-=b}return new P.ka(a,q,p,o,n,m,l,j)}return P.oI(a,b,c,q,p,o,n,m,l,j)},
ms:function(a,b){var u=P.e
return C.a.kv(H.d(a.split("&"),[u]),P.ln(u,u),new P.ji(b),[P.F,P.e,P.e])},
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jf(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a3(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fz(C.c.w(a,q,r),null,null)
if(typeof n!=="number")return n.ft()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fz(C.c.w(a,q,c),null,null)
if(typeof n!=="number")return n.ft()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jg(a)
t=new P.jh(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a3(a,r)
if(n===58){if(r===b){++r
if(C.c.a3(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oq(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aW(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oI:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oP(a,b,d)
else{if(d===b)P.di(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oQ(a,u,e-1):""
s=P.oM(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oO(P.fz(C.c.w(a,r,g),new P.km(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oN(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a0()
o=h<i?P.lx(a,h+1,i,null):null
return new P.cf(j,t,s,q,p,o,i<c?P.oL(a,i+1,c):null)},
mF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
di:function(a,b,c){throw H.c(P.a8(c,a,b))},
oO:function(a,b){if(a!=null&&a===P.mF(b))return
return a},
oM:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a3(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.a3(a,u)!==93)P.di(a,b,"Missing end `]` to match `[` in host")
P.mr(a,b+1,u)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.c.a3(a,t)===58){P.mr(a,b,c)
return"["+a+"]"}return P.oS(a,b,c)},
oS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a3(a,u)
if(q===37){p=P.mL(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.am("")
n=C.c.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.am("")
if(t<u){s.a+=C.c.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.di(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a3(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.c.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mG(q)
u+=l
t=u}}}}if(s==null)return C.c.w(a,b,c)
if(t<c){n=C.c.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oP:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mI(C.c.J(a,b)))P.di(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.J(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.di(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.w(a,b,c)
return P.oJ(t?a.toLowerCase():a)},
oJ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oQ:function(a,b,c){return P.dj(a,b,c,C.a9,!1)},
oN:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dj(a,b,c,C.L,!0):C.r.lv(d,new P.kn(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a6(r,"/"))r="/"+r
return P.oR(r,e,f)},
oR:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a6(a,"/"))return P.oT(a,!u||c)
return P.oU(a)},
lx:function(a,b,c,d){var u,t
u={}
H.k(d,"$iF",[P.e,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dv("Both query and queryParameters specified"))
return P.dj(a,b,c,C.u,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.O(0,new P.ko(new P.kp(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oL:function(a,b,c){return P.dj(a,b,c,C.u,!0)},
mL:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a3(a,b+1)
s=C.c.a3(a,u)
r=H.kL(t)
q=H.kL(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aW(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c8(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
mG:function(a){var u,t,s,r,q,p
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
for(q=0;--r,r>=0;s=128){p=C.f.j1(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.J("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.J("0123456789ABCDEF",p&15))
q+=3}}return P.ef(t,0,null)},
dj:function(a,b,c,d,e){var u=P.mK(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.w(a,b,c):u},
mK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a0()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.c.a3(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mL(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.di(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a3(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mG(q)}}if(r==null)r=new P.am("")
r.a+=C.c.w(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a0()
if(s<c)r.a+=C.c.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mJ:function(a){if(C.c.a6(a,"."))return!0
return C.c.eO(a,"/.")!==-1},
oU:function(a){var u,t,s,r,q,p,o
if(!P.mJ(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oT:function(a,b){var u,t,s,r,q,p
if(!P.mJ(a))return!b?P.mH(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mH(u[0]))}return C.a.m(u,"/")},
mH:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mI(J.nv(a,0)))for(t=1;t<u;++t){s=C.c.J(a,t)
if(s===58)return C.c.w(a,0,t)+"%3A"+C.c.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oK:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.J(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dv("Invalid URL encoding"))}}return u},
ly:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.J(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.w(a,b,c)
else q=new H.w(C.c.w(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.J(a,t)
if(s>127)throw H.c(P.dv("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dv("Truncated URI"))
C.a.h(q,P.oK(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.jl(!1).cJ(q)},
mI:function(a){var u=a|32
return 97<=u&&u<=122},
mp:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.J(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a8("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a8("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.J(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.ad(a,"base64",o+1))throw H.c(P.a8("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kI(0,a,n,t)
else{m=P.mK(a,n,t,C.u,!0)
if(m!=null)a=C.c.b3(a,n,t,m)}return new P.je(a,u,c)},
oW:function(){var u,t,s,r,q
u=P.o1(22,new P.ky(),!0,P.S)
t=new P.kx(u)
s=new P.kz()
r=new P.kA()
q=H.f(t.$2(0,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iS")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iS")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iS"),"]",5)
q=H.f(t.$2(9,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iS"),"az",21)
q=H.f(t.$2(21,245),"$iS")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mP:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.ns()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.J(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
ao:function ao(a,b){this.a=a
this.b=b},
u:function u(){},
b4:function b4(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bI:function bI(){},
e4:function e4(){},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hn:function hn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jd:function jd(a){this.a=a},
ja:function ja(a){this.a=a},
cb:function cb(a){this.a=a},
fQ:function fQ(a){this.a=a},
i5:function i5(){},
ee:function ee(){},
fX:function fX(a){this.a=a},
eI:function eI(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(){},
o:function o(){},
i:function i(){},
b5:function b5(){},
b:function b(){},
F:function F(){},
M:function M(){},
a6:function a6(){},
Q:function Q(){},
az:function az(){},
e:function e(){},
am:function am(a){this.a=a},
ji:function ji(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a,b){this.a=a
this.b=b},
cf:function cf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(){},
kx:function kx(a){this.a=a},
kz:function kz(){},
kA:function kA(){},
ka:function ka(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jK:function jK(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
pa:function(a){var u,t
u=J.Y(a)
if(!!u.$ibn){t=u.gef(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fi(a.data,a.height,a.width)},
p9:function(a){if(a instanceof P.fi)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.ln(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.J(t[r])
u.n(0,q,a[q])}return u},
p8:function(a,b){var u={}
a.O(0,new P.kE(u))
return u},
kc:function kc(){},
ke:function ke(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(){},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k1:function k1(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
hu:function hu(){},
ba:function ba(){},
i3:function i3(){},
ia:function ia(){},
cP:function cP(){},
iJ:function iJ(){},
r:function r(){},
be:function be(){},
iY:function iY(){},
eN:function eN(){},
eO:function eO(){},
eY:function eY(){},
eZ:function eZ(){},
f9:function f9(){},
fa:function fa(){},
fg:function fg(){},
fh:function fh(){},
S:function S(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
bU:function bU(){},
i4:function i4(){},
eB:function eB(){},
dx:function dx(){},
dJ:function dJ(){},
e7:function e7(){},
ca:function ca(){},
eb:function eb(){},
ej:function ej(){},
es:function es(){},
iB:function iB(){},
f5:function f5(){},
f6:function f6(){}},W={
lW:function(a){var u=document.createElement("a")
return u},
lf:function(a,b){var u=document.createElement("canvas")
return u},
nN:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).af(u,a,b,c)
t.toString
u=W.H
u=new H.d6(new W.as(t),H.n(new W.h5(),{func:1,ret:P.T,args:[u]}),[u])
return H.f(u.gaO(u),"$iV")},
nO:function(a){H.f(a,"$ij")
return"wheel"},
cy:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nA(a)
if(typeof t==="string")u=a.tagName}catch(s){H.al(s)}return u},
nR:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icD")
try{u.type=a}catch(s){H.al(s)}return u},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mD:function(a,b,c,d){var u,t
u=W.jZ(W.jZ(W.jZ(W.jZ(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.mS(new W.jO(c),W.p)
if(u!=null&&!0)J.nw(a,b,u,!1)
return new W.jN(a,b,u,!1,[e])},
mC:function(a){var u,t
u=W.lW(null)
t=window.location
u=new W.bQ(new W.k6(u,t))
u.fS(a)
return u},
oC:function(a,b,c,d){H.f(a,"$iV")
H.J(b)
H.J(c)
H.f(d,"$ibQ")
return!0},
oD:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.J(b)
H.J(c)
u=H.f(d,"$ibQ").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mE:function(){var u,t,s,r,q
u=P.e
t=P.m6(C.A,u)
s=H.v(C.A,0)
r=H.n(new W.ki(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kh(t,P.dU(null,null,null,u),P.dU(null,null,null,u),P.dU(null,null,null,u),null)
t.h3(null,new H.hH(C.A,r,[s,u]),q,null)
return t},
mS:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.l)return a
return u.ea(a,b)},
z:function z(){},
fC:function fC(){},
du:function du(){},
fD:function fD(){},
cr:function cr(){},
bV:function bV(){},
bD:function bD(){},
bW:function bW(){},
bX:function bX(){},
bE:function bE(){},
cv:function cv(){},
fT:function fT(){},
Z:function Z(){},
cw:function cw(){},
fU:function fU(){},
b2:function b2(){},
b3:function b3(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
aH:function aH(){},
cx:function cx(){},
h_:function h_(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
h0:function h0(){},
h1:function h1(){},
jI:function jI(a,b){this.a=a
this.b=b},
V:function V(){},
h5:function h5(){},
p:function p(){},
j:function j(){},
aI:function aI(){},
cz:function cz(){},
hc:function hc(){},
hg:function hg(){},
aP:function aP(){},
dK:function dK(){},
dL:function dL(){},
c2:function c2(){},
dM:function dM(){},
bn:function bn(){},
cC:function cC(){},
cD:function cD(){},
b6:function b6(){},
dS:function dS(){},
dV:function dV(){},
cH:function cH(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aS:function aS(){},
hT:function hT(){},
ai:function ai(){},
as:function as(a){this.a=a},
H:function H(){},
cM:function cM(){},
aT:function aT(){},
i8:function i8(){},
e8:function e8(){},
ik:function ik(){},
il:function il(a){this.a=a},
io:function io(){},
aU:function aU(){},
iz:function iz(){},
aV:function aV(){},
iA:function iA(){},
aW:function aW(){},
iD:function iD(){},
iE:function iE(a){this.a=a},
aJ:function aJ(){},
bc:function bc(){},
eg:function eg(){},
eh:function eh(){},
iK:function iK(){},
cT:function cT(){},
aX:function aX(){},
aK:function aK(){},
iM:function iM(){},
iN:function iN(){},
iS:function iS(){},
aY:function aY(){},
aZ:function aZ(){},
iW:function iW(){},
iX:function iX(){},
bO:function bO(){},
jj:function jj(){},
jz:function jz(){},
jA:function jA(){},
bh:function bh(){},
d7:function d7(){},
d8:function d8(){},
jJ:function jJ(){},
eD:function eD(){},
jY:function jY(){},
eV:function eV(){},
kb:function kb(){},
kf:function kf(){},
jH:function jH(){},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lv:function lv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jO:function jO(a){this.a=a},
bQ:function bQ(a){this.a=a},
E:function E(){},
e3:function e3(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(){},
k8:function k8(){},
k9:function k9(){},
kh:function kh(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ki:function ki(){},
kg:function kg(){},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aE:function aE(){},
k6:function k6(a,b){this.a=a
this.b=b},
fl:function fl(a){this.a=a},
kt:function kt(a){this.a=a},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
de:function de(){},
df:function df(){},
f3:function f3(){},
f4:function f4(){},
f8:function f8(){},
fb:function fb(){},
fc:function fc(){},
dg:function dg(){},
dh:function dh(){},
fe:function fe(){},
ff:function ff(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){}},O={
lg:function(a){var u=new O.a7([a])
u.c3(a)
return u},
a7:function a7(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cG:function cG(){this.b=this.a=null},
dY:function dY(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cF:function cF(){},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){}},E={
oj:function(a,b){var u=new E.ig(a,b)
u.fM(a,b)
return u},
on:function(a,b,c,d,e){var u,t,s,r
u=J.Y(a)
if(!!u.$ibW)return E.ml(a,!0,!0,!0,!1)
t=W.lf(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcI(a).h(0,t)
r=E.ml(t,!0,!0,!0,!1)
r.a=a
return r},
ml:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eo()
t=H.f(C.q.dg(a,"webgl2",P.o_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(t==null)H.q(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oj(t,a)
s=new T.iP(t)
s.b=H.ak((t&&C.b).di(t,3379))
s.c=H.ak(C.b.di(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ev(a)
r=new X.ht()
r.c=new X.aD(!1,!1,!1)
r.siE(P.dU(null,null,null,P.o))
s.b=r
r=new X.hU(s)
r.f=0
r.r=V.bt()
r.x=V.bt()
r.Q=1
r.ch=1
s.c=r
r=new X.hB(s)
r.r=0
r.x=V.bt()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iV(s)
r.e=0
r.f=V.bt()
r.r=V.bt()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sho(H.d([],[[P.cS,P.Q]]))
r=s.z
q=document
p=W.ai
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ad(q,"contextmenu",H.n(s.gi_(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ad(a,"focus",H.n(s.gi5(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ad(a,"blur",H.n(s.ghU(),m),!1,n))
r=s.z
l=W.b6
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ad(q,"keyup",H.n(s.gi9(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ad(q,"keydown",H.n(s.gi7(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousedown",H.n(s.gie(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mouseup",H.n(s.gij(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousemove",H.n(s.gih(),o),!1,p))
l=s.z
k=W.bh;(l&&C.a).h(l,W.ad(a,H.J(W.nO(a)),H.n(s.gil(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ad(q,"mousemove",H.n(s.gi1(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ad(q,"mouseup",H.n(s.gi3(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ad(q,"pointerlockchange",H.n(s.gio(),m),!1,n))
n=s.z
m=W.aZ
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ad(a,"touchstart",H.n(s.giB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchend",H.n(s.gix(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchmove",H.n(s.giz(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ao(Date.now(),!1)
u.cy=0
u.dZ()
return u},
fL:function fL(){},
ax:function ax(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iR:function iR(a){this.a=a}},Z={
lu:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aw(a,b,u)
C.b.ed(a,b,new Int16Array(H.cg(c)),35044)
C.b.aw(a,b,null)
return new Z.ez(b,u)},
aL:function(a){return new Z.bg(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jB:function jB(a){this.a=a},
dz:function dz(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
W:function(){var u=new D.c_()
u.saj(null)
u.saU(null)
u.c=null
u.d=0
return u},
fO:function fO(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
c3:function c3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c4:function c4(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
R:function R(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bH:function bH(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dT:function dT(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e6:function e6(){},
ed:function ed(){},
el:function el(){},
em:function em(){},
en:function en(){}},X={dA:function dA(a,b){this.a=a
this.b=b},dR:function dR(a,b){this.a=a
this.b=b},ht:function ht(){var _=this
_.d=_.c=_.b=_.a=null},dW:function dW(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hB:function hB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},br:function br(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cI:function cI(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},i9:function i9(){},eq:function eq(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iV:function iV(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nQ:function(a,b,c,d,e,f,g){var u,t
u=new X.hi()
t=new V.aB(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.mh
if(t==null){t=V.mg(0,0,1,1)
$.mh=t}u.r=t
return u},
dB:function dB(){},
hi:function hi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){}},V={
pE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bn(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.ah("null",c)
return C.c.ah(C.e.fa(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cl:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.u],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.ah(u[p],s))}return u},
lK:function(a,b){return C.e.le(Math.pow(b,C.a_.cU(Math.log(H.p7(a))/Math.log(b))))},
e_:function(){var u=$.m9
if(u==null){u=V.b9(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m9=u}return u},
b9:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m8:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.u(0,Math.sqrt(c.E(c)))
t=b.aJ(u)
s=t.u(0,Math.sqrt(t.E(t)))
r=u.aJ(s)
q=new V.C(a.a,a.b,a.c)
p=s.W(0).E(q)
o=r.W(0).E(q)
n=u.W(0).E(q)
return V.b9(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.md
if(u==null){u=new V.a5(0,0)
$.md=u}return u},
lp:function(){var u=$.cN
if(u==null){u=new V.a_(0,0,0)
$.cN=u}return u},
mg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ea(a,b,c,d)},
d4:function(){var u=$.mx
if(u==null){u=new V.C(0,0,0)
$.mx=u}return u},
my:function(){var u=$.mw
if(u==null){u=new V.C(0,1,0)
$.mw=u}return u},
mz:function(){var u=$.jn
if(u==null){u=new V.C(0,0,1)
$.jn=u}return u},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ap:function ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.J(a,0)
t=C.c.J(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ip()
u.fN(a)
return u},
iU:function(){var u,t
u=new V.iT()
t=P.e
u.sj3(new H.aR([t,V.cR]))
u.sj7(new H.aR([t,V.cV]))
u.c=null
return u},
bk:function bk(){},
aC:function aC(){},
dX:function dX(){},
ay:function ay(){this.a=null},
id:function id(){this.b=this.a=null},
ip:function ip(){this.a=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a,b){this.a=a
this.b=b
this.c=null},
iT:function iT(){this.c=this.b=this.a=null},
cW:function cW(a){this.b=a
this.a=this.c=null},
pA:function(a){P.oo(C.V,new V.l4(a))},
ol:function(a,b){var u=new V.iu()
u.fP(a,!0)
return u},
bF:function bF(){},
l4:function l4(a){this.a=a},
fY:function fY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i7:function i7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ib:function ib(a,b){this.a=a
this.b=b
this.c=null},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(){this.b=this.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
ix:function ix(a){this.a=a}},U={
lh:function(){var u=new U.fP()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
m1:function(a){var u=new U.dC()
u.a=a
return u},
fP:function fP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cB:function cB(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ew:function ew(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dH:function dH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
n3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u=V.ol("Test 018",!0)
t=W.lf(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.e]
u.e6(H.d(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],s))
u.jG(H.d(["shapes"],s))
u.e6(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dh(s,"testCanvas")
if(r==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.on(r,!0,!0,!0,!1)
p=new E.ax()
p.a=""
p.b=!0
o=E.ax
p.shf(0,O.lg(o))
p.y.bo(p.gkJ(),p.gkM())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.sab(0,null)
p.sbg(null)
p.sab(0,F.n7(8,null,1,8))
n=new U.cB()
m=U.aj
n.c3(m)
n.bo(n.ghM(),n.git())
n.e=null
n.f=V.e_()
n.r=0
l=q.r
k=new U.ex()
j=U.lh()
j.sdf(0,!0)
j.sd_(6.283185307179586)
j.sd1(0)
j.sa2(0,0)
j.sd0(100)
j.sZ(0)
j.scL(0.5)
k.b=j
i=k.gaT()
j.gC().h(0,i)
j=U.lh()
j.sdf(0,!0)
j.sd_(6.283185307179586)
j.sd1(0)
j.sa2(0,0)
j.sd0(100)
j.sZ(0)
j.scL(0.5)
k.c=j
j.gC().h(0,i)
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
h=new X.aD(!1,!1,!1)
g=k.d
k.d=h
j=[X.aD]
i=new D.R("modifiers",g,h,k,j)
i.b=!0
k.U(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.R("invertX",i,!1,k,[P.T])
i.b=!0
k.U(i)}i=k.r
if(i!==!1){k.r=!1
i=new D.R("invertY",i,!1,k,[P.T])
i.b=!0
k.U(i)}k.bb(l)
n.h(0,k)
l=q.r
k=new U.ew()
i=U.lh()
i.sdf(0,!0)
i.sd_(6.283185307179586)
i.sd1(0)
i.sa2(0,0)
i.sd0(100)
i.sZ(0)
i.scL(0.2)
k.b=i
i.gC().h(0,k.gaT())
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
h=new X.aD(!0,!1,!1)
g=k.c
k.c=h
i=new D.R("modifiers",g,h,k,j)
i.b=!0
k.U(i)
k.bb(l)
n.h(0,k)
l=q.r
k=new U.ey()
k.c=0.01
k.d=0
k.e=0
h=new X.aD(!1,!1,!1)
k.b=h
j=new D.R("modifiers",null,h,k,j)
j.b=!0
k.U(j)
k.bb(l)
n.h(0,k)
p.sbg(n)
f=q.f.eS("../resources/Dirt.png")
e=q.f.eS("../resources/Grass.png")
d=new O.dY()
d.shc(O.lg(V.ap))
d.e.bo(d.ghQ(),d.ghS())
n=new O.b8(d,"emission")
n.c=C.d
n.f=new V.af(0,0,0)
d.f=n
n=new O.b8(d,"ambient")
n.c=C.d
n.f=new V.af(0,0,0)
d.r=n
n=new O.b8(d,"diffuse")
n.c=C.d
n.f=new V.af(0,0,0)
d.x=n
n=new O.b8(d,"invDiffuse")
n.c=C.d
n.f=new V.af(0,0,0)
d.y=n
n=new O.hN(d,"specular")
n.c=C.d
n.f=new V.af(0,0,0)
n.ch=100
d.z=n
n=new O.hK(d,"bump")
n.c=C.d
d.Q=n
d.ch=null
n=new O.b8(d,"reflect")
n.c=C.d
n.f=new V.af(0,0,0)
d.cx=n
n=new O.hM(d,"refract")
n.c=C.d
n.f=new V.af(0,0,0)
n.ch=1
d.cy=n
n=new O.hJ(d,"alpha")
n.c=C.d
n.f=1
d.db=n
n=new D.dT()
n.c3(D.a9)
n.shl(H.d([],[D.bH]))
n.siD(H.d([],[D.e6]))
n.sj2(H.d([],[D.ed]))
n.sjf(H.d([],[D.el]))
n.sjg(H.d([],[D.em]))
n.sjh(H.d([],[D.en]))
n.Q=null
n.ch=null
n.dk(n.ghO(),n.gir(),n.giv())
d.dx=n
l=n.Q
if(l==null){l=D.W()
n.Q=l
n=l}else n=l
n.h(0,d.giQ())
n=d.dx
l=n.ch
if(l==null){l=D.W()
n.ch=l
n=l}else n=l
n.h(0,d.gbr())
d.dy=null
n=d.dx
c=V.my()
l=U.m1(V.m8(V.lp(),c,new V.C(-1,-1,-1)))
b=new V.af(1,1,1)
k=new D.bH()
k.c=new V.af(1,1,1)
k.a=V.mz()
g=k.b
k.b=l
l.gC().h(0,k.gfU())
m=new D.R("mover",g,k.b,k,[m])
m.b=!0
k.aD(m)
if(!k.c.A(0,b)){g=k.c
k.c=b
m=new D.R("color",g,b,k,[V.af])
m.b=!0
k.aD(m)}n.h(0,k)
d.x.sb4(f)
d.y.sb4(e)
n=new M.dH()
n.sfW(0,O.lg(o))
n.d.bo(n.ghW(),n.ghY())
n.e=null
n.f=null
n.r=null
n.x=null
a=X.nQ(!0,!0,!1,null,2000,null,0)
a0=new X.e5()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.sbg(null)
o=a0.c
if(!(Math.abs(o-1.0471975511965976)<$.N().a)){a0.c=1.0471975511965976
o=new D.R("fov",o,1.0471975511965976,a0,[P.u])
o.b=!0
a0.aQ(o)}o=a0.d
if(!(Math.abs(o-0.1)<$.N().a)){a0.d=0.1
o=new D.R("near",o,0.1,a0,[P.u])
o.b=!0
a0.aQ(o)}o=a0.e
if(!(Math.abs(o-2000)<$.N().a)){a0.e=2000
o=new D.R("far",o,2000,a0,[P.u])
o.b=!0
a0.aQ(o)}o=n.a
if(o!==a0){if(o!=null)o.gC().I(0,n.gar())
g=n.a
n.a=a0
a0.gC().h(0,n.gar())
o=new D.R("camera",g,n.a,n,[X.dB])
o.b=!0
n.aE(o)}o=n.b
if(o!==a){if(o!=null)o.gC().I(0,n.gar())
g=n.b
n.b=a
a.gC().h(0,n.gar())
o=new D.R("target",g,n.b,n,[X.ei])
o.b=!0
n.aE(o)}n.sf8(null)
n.sf8(d)
n.d.h(0,p)
n.a.sbg(U.m1(V.b9(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
o=q.d
if(o!==n){if(o!=null)o.gC().I(0,q.gdr())
q.d=n
n.gC().h(0,q.gdr())
q.ds()}o=new V.ib("shapes",!0)
s=C.z.dh(s,"shapes")
o.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
o.at(0,"Cube",new M.kT(p))
o.at(0,"Cuboid",new M.kU(p))
o.at(0,"Cylinder",new M.kV(p))
o.at(0,"Cone",new M.kW(p))
o.at(0,"LatLonSphere",new M.kX(p))
o.at(0,"IsoSphere",new M.kY(p))
o.bw(0,"Sphere",new M.kZ(p),!0)
o.at(0,"Toroid",new M.l_(p))
o.at(0,"Knot",new M.l0(p))
s=q.z
if(s==null){s=D.W()
q.z=s}o={func:1,ret:-1,args:[D.A]}
n=H.n(new M.l1(u,d),o)
if(s.b==null)s.saU(H.d([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.pA(q)},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a,b){this.a=a
this.b=b}},A={
o2:function(a,b){var u,t
u=a.am
t=new A.hI(b,u)
t.fO(b,u)
t.fL(a,b)
return t},
lr:function(a,b,c,d,e){var u=new A.j2(a,b,c,e)
u.f=d
u.sji(P.o0(d,0,!1,P.o))
return u},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
hI:function hI(a,b){var _=this
_.bB=_.el=_.bA=_.am=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eC=_.cO=_.eB=_.bO=_.eA=_.ez=_.bN=_.bM=_.ey=_.ex=_.bL=_.bK=_.bJ=_.ew=_.ev=_.bI=_.eu=_.es=_.bH=_.er=_.eq=_.bG=_.bF=_.ep=_.eo=_.bE=_.bD=_.en=_.em=_.bC=null
_.cT=_.eG=_.cS=_.eF=_.cR=_.eE=_.cQ=_.eD=_.cP=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bA=b5},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cZ:function cZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
d_:function d_(a,b,c,d,e,f,g,h,i,j){var _=this
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
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cQ:function cQ(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
er:function er(){},
j8:function j8(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lG:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ac,P.u,P.u]})
u=F.iq()
F.dk(u,b,c,d,a,1,0,0,1)
F.dk(u,b,c,d,a,0,1,0,3)
F.dk(u,b,c,d,a,0,0,1,2)
F.dk(u,b,c,d,a,-1,0,0,0)
F.dk(u,b,c,d,a,0,-1,0,0)
F.dk(u,b,c,d,a,0,0,-1,3)
u.al()
return u},
kw:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dk:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ac,P.u,P.u]})
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
u.d=t}g=F.kw(t)
f=F.kw(u.b)
e=F.l7(d,a0,new F.kv(u,F.kw(u.c),F.kw(u.d),f,g,c),b)
if(e!=null)a.b1(e)},
mY:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.u,args:[P.u]})
if(a0<3)return
u=F.iq()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ac])
q=u.a
p=new V.C(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
C.a.h(r,q.jK(new V.bb(a,-1,-1,-1),new V.aB(1,1,1,1),new V.a_(0,0,d),new V.C(0,0,t),new V.a5(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.C(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.cd(new V.bb(a,-1,-1,-1),null,new V.aB(i,g,h,1),new V.a_(m*k,l*k,d),new V.C(0,0,t),new V.a5(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jI(r)
return u},
mW:function(a,b,c,d,e,f){return F.pb(!0,c,d,new F.kF(a,f),e)},
pb:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
u=F.l7(c,e,new F.kH(d),null)
if(u==null)return
u.al()
u.bx()
if(b)u.b1(F.mY(3,!1,!1,1,new F.kI(d),e))
u.b1(F.mY(1,!0,!1,-1,new F.kJ(d),e))
return u},
ps:function(a,b){var u=F.l7(a,b,new F.kR(),null)
u.d.bS()
u.al()
u.bx()
return u},
at:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.u(0,Math.sqrt(b.E(b)))
u=b.a
t=b.b
s=b.c
r=F.cd(null,null,null,new V.a_(u,t,s),b,null,null,null,0)
q=a.kp(r,new F.d5())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sax(0,new V.aB(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sb4(new V.a5(l,k<0?-k:k))
a.a.h(0,r)
return r},
a3:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bw(0,b,d,c)
else{u=F.at(a,b.r.p(0,c.r).v(0,0.5))
t=F.at(a,c.r.p(0,d.r).v(0,0.5))
s=F.at(a,d.r.p(0,b.r).v(0,0.5))
r=e-1
F.a3(a,b,u,s,r)
F.a3(a,u,c,t,r)
F.a3(a,t,s,u,r)
F.a3(a,s,t,d,r)}},
n7:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.l5()
t=F.lG(a,null,new F.l6(u,c),d)
t.bx()
return t},
pD:function(a,b,c,d){return F.mX(c,a,d,b,new F.l8())},
pr:function(a,b,c,d,e,f){return F.mX(d,a,e,b,new F.kQ(f,c))},
mX:function(a,b,c,d,e){var u=F.l7(a,b,new F.kG(H.n(e,{func:1,ret:V.a_,args:[P.u]}),d,b,c),null)
if(u==null)return
u.al()
u.bx()
return u},
l7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ac,P.u,P.u]})
if(a<1)return
if(b<1)return
u=F.iq()
t=H.d([],[F.ac])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.cd(null,null,new V.aB(p,0,0,1),null,null,new V.a5(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cK(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.cd(null,null,new V.aB(j,i,h,1),null,null,new V.a5(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cK(d))}}u.d.jJ(a+1,b+1,t)
return u},
c0:function(a,b,c){var u,t
u=new F.aa()
t=a.a
if(t==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.t("May not create a face with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
u.iX(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Y()
return u},
nX:function(a,b){var u,t
u=new F.bq()
t=a.a
if(t==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.t("May not create a line with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Y()
return u},
iq:function(){var u,t
u=new F.ec()
t=new F.jo(u)
t.b=!1
t.sjj(H.d([],[F.ac]))
u.a=t
t=new F.it(u)
t.sco(H.d([],[F.bN]))
u.b=t
t=new F.is(u)
t.shB(H.d([],[F.bq]))
u.c=t
t=new F.ir(u)
t.shp(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
cd:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ac()
t=new F.jw(u)
t.sco(H.d([],[F.bN]))
u.b=t
t=new F.jt(u)
s=[F.bq]
t.shC(H.d([],s))
t.shD(H.d([],s))
u.c=t
t=new F.jp(u)
s=[F.aa]
t.shq(H.d([],s))
t.shr(H.d([],s))
t.shs(H.d([],s))
u.d=t
h=$.nm()
u.e=0
t=$.bz()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.by().a)!==0?e:null
u.x=(s&$.bx().a)!==0?b:null
u.y=(s&$.bA().a)!==0?f:null
u.z=(s&$.bB().a)!==0?g:null
u.Q=(s&$.nn().a)!==0?c:null
u.ch=(s&$.cq().a)!==0?i:0
u.cx=(s&$.bw().a)!==0?a:null
return u},
kv:function kv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kF:function kF(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kR:function kR(){},
l5:function l5(){},
l6:function l6(a,b){this.a=a
this.b=b},
l8:function l8(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(){},
iy:function iy(){},
bq:function bq(){this.b=this.a=null},
hv:function hv(){},
j1:function j1(){},
bN:function bN(){this.a=null},
ec:function ec(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
ac:function ac(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jy:function jy(a){this.a=a},
jx:function jx(a){this.a=a},
jo:function jo(a){this.a=a
this.c=this.b=null},
jp:function jp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jt:function jt(a){this.a=a
this.c=this.b=null},
ju:function ju(){},
d5:function d5(){},
jv:function jv(){},
js:function js(){},
i1:function i1(){},
jw:function jw(a){this.a=a
this.b=null}},T={cU:function cU(){},ek:function ek(){},iO:function iO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},iP:function iP(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iQ:function iQ(a,b,c,d,e,f,g){var _=this
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
H.ll.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gL:function(a){return H.cO(a)},
i:function(a){return"Instance of '"+H.c7(a)+"'"}}
J.hq.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iT:1}
J.dP.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iM:1}
J.dQ.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.i6.prototype={}
J.bP.prototype={}
J.bp.prototype={
i:function(a){var u=a[$.na()]
if(u==null)return this.fH(a)
return"JavaScript function for "+H.m(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibJ:1}
J.aQ.prototype={
h:function(a,b){H.B(b,H.v(a,0))
if(!!a.fixed$length)H.q(P.I("add"))
a.push(b)},
l0:function(a,b){var u
if(!!a.fixed$length)H.q(P.I("removeAt"))
u=a.length
if(b>=u)throw H.c(P.e9(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.q(P.I("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bl(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kD:function(a){return this.m(a,"")},
kv:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bl(a))}return t},
ku:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bl(a))}throw H.c(H.ho())},
kt:function(a,b){return this.ku(a,b,null)},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fE:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gks:function(a){if(a.length>0)return a[0]
throw H.c(H.ho())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ho())},
fB:function(a,b,c,d,e){var u,t,s
u=H.v(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.q(P.I("setRange"))
P.bu(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cm(d)
if(e+t>u.gl(d))throw H.c(H.nT())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bp:function(a,b,c,d){return this.fB(a,b,c,d,0)},
e7:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bl(a))}return!1},
a_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.lj(a,"[","]")},
gX:function(a){return new J.aA(a,a.length,0,[H.v(a,0)])},
gL:function(a){return H.cO(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.I("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ck(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.v(a,0))
if(!!a.immutable$list)H.q(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ck(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.v(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bp(u,0,a.length,a)
this.bp(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.lk.prototype={}
J.aA.prototype={
gN:function(a){return this.d},
G:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.D(u))
s=this.c
if(s>=t){this.sdK(null)
return!1}this.sdK(u[s]);++this.c
return!0},
sdK:function(a){this.d=H.B(a,H.v(this,0))},
$ib5:1}
J.bL.prototype={
le:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
cU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
fa:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a3(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.I("Unexpected toString result: "+u))
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
t:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a*b},
bn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e0(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.e0(a,b)},
e0:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.e_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j1:function(a,b){if(b<0)throw H.c(H.au(b))
return this.e_(a,b)},
e_:function(a,b){return b>31?0:a>>>b},
$iu:1,
$ia6:1}
J.dO.prototype={$io:1}
J.dN.prototype={}
J.bo.prototype={
a3:function(a,b){if(b<0)throw H.c(H.ck(a,b))
if(b>=a.length)H.q(H.ck(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.c(H.ck(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.ld(b,null,null))
return a+b},
b3:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.au(b))
c=P.bu(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ad:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.au(c))
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.ad(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.au(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a0()
if(b<0)throw H.c(P.e9(b,null,null))
if(b>c)throw H.c(P.e9(b,null,null))
if(c>a.length)throw H.c(P.e9(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.w(a,b,null)},
lg:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kQ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
ah:function(a,b){return this.kQ(a,b," ")},
eP:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eO:function(a,b){return this.eP(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imb:1,
$ie:1}
H.w.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a3(this.a,b)},
$ad3:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h4.prototype={}
H.c5.prototype={
gX:function(a){return new H.cE(this,this.gl(this),0,[H.av(this,"c5",0)])},
bY:function(a,b){return this.fG(0,H.n(b,{func:1,ret:P.T,args:[H.av(this,"c5",0)]}))}}
H.cE.prototype={
gN:function(a){return this.d},
G:function(){var u,t,s,r
u=this.a
t=J.cm(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bl(u))
r=this.c
if(r>=s){this.sb7(null)
return!1}this.sb7(t.M(u,r));++this.c
return!0},
sb7:function(a){this.d=H.B(a,H.v(this,0))},
$ib5:1}
H.hF.prototype={
gX:function(a){return new H.hG(J.bC(this.a),this.b,this.$ti)},
gl:function(a){return J.aG(this.a)},
M:function(a,b){return this.b.$1(J.fB(this.a,b))},
$ai:function(a,b){return[b]}}
H.hG.prototype={
G:function(){var u=this.b
if(u.G()){this.sb7(this.c.$1(u.gN(u)))
return!0}this.sb7(null)
return!1},
gN:function(a){return this.a},
sb7:function(a){this.a=H.B(a,H.v(this,1))},
$ab5:function(a,b){return[b]}}
H.hH.prototype={
gl:function(a){return J.aG(this.a)},
M:function(a,b){return this.b.$1(J.fB(this.a,b))},
$ac5:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d6.prototype={
gX:function(a){return new H.jC(J.bC(this.a),this.b,this.$ti)}}
H.jC.prototype={
G:function(){var u,t
for(u=this.a,t=this.b;u.G();)if(t.$1(u.gN(u)))return!0
return!1},
gN:function(a){var u=this.a
return u.gN(u)}}
H.c1.prototype={}
H.d3.prototype={
n:function(a,b,c){H.B(c,H.av(this,"d3",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fR.prototype={
i:function(a){return P.lo(this)},
n:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
return H.nK()},
$iF:1}
H.fS.prototype={
gl:function(a){return this.a},
by:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.by(0,b))return
return this.dL(b)},
dL:function(a){return this.b[H.J(a)]},
O:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.n(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dL(q),u))}}}
H.ie.prototype={}
H.iZ.prototype={
ag:function(a){var u,t,s
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
H.i2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hs.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jc.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l9.prototype={
$1:function(a){if(!!J.Y(a).$ibI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.f7.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaz:1}
H.cu.prototype={
i:function(a){return"Closure '"+H.c7(this).trim()+"'"},
$ibJ:1,
glo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iL.prototype={}
H.iC.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cp(u)+"'"}}
H.cs.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cs))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cO(this.a)
else t=typeof u!=="object"?J.dt(u):H.cO(u)
return(t^H.cO(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c7(u)+"'")}}
H.j0.prototype={
i:function(a){return this.a}}
H.fN.prototype={
i:function(a){return this.a}}
H.im.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aR.prototype={
gl:function(a){return this.a},
gkC:function(a){return this.a===0},
ga8:function(a){return new H.hx(this,[H.v(this,0)])},
by:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dH(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dH(t,b)}else return this.kz(b)},
kz:function(a){var u=this.d
if(u==null)return!1
return this.cX(this.cb(u,this.cW(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bs(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bs(r,b)
s=t==null?null:t.b
return s}else return this.kA(b)},
kA:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cb(u,this.cW(a))
s=this.cX(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cm()
this.b=u}this.dw(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cm()
this.c=t}this.dw(t,b,c)}else this.kB(b,c)},
kB:function(a,b){var u,t,s,r
H.B(a,H.v(this,0))
H.B(b,H.v(this,1))
u=this.d
if(u==null){u=this.cm()
this.d=u}t=this.cW(a)
s=this.cb(u,t)
if(s==null)this.ct(u,t,[this.cn(a,b)])
else{r=this.cX(s,a)
if(r>=0)s[r].b=b
else s.push(this.cn(a,b))}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bl(this))
u=u.c}},
dw:function(a,b,c){var u
H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
u=this.bs(a,b)
if(u==null)this.ct(a,b,this.cn(b,c))
else u.b=c},
hJ:function(){this.r=this.r+1&67108863},
cn:function(a,b){var u,t
u=new H.hw(H.B(a,H.v(this,0)),H.B(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hJ()
return u},
cW:function(a){return J.dt(a)&0x3ffffff},
cX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.lo(this)},
bs:function(a,b){return a[b]},
cb:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
hk:function(a,b){delete a[b]},
dH:function(a,b){return this.bs(a,b)!=null},
cm:function(){var u=Object.create(null)
this.ct(u,"<non-identifier-key>",u)
this.hk(u,"<non-identifier-key>")
return u}}
H.hw.prototype={}
H.hx.prototype={
gl:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.hy(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hy.prototype={
gN:function(a){return this.d},
G:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bl(u))
else{u=this.c
if(u==null){this.sdv(null)
return!1}else{this.sdv(u.a)
this.c=this.c.c
return!0}}},
sdv:function(a){this.d=H.B(a,H.v(this,0))},
$ib5:1}
H.kM.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kO.prototype={
$1:function(a){return this.a(H.J(a))},
$S:50}
H.hr.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imb:1,
$ioh:1}
H.cJ.prototype={$icJ:1}
H.bM.prototype={$ibM:1,$iop:1}
H.e0.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cK.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pd(c)
H.bj(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.u]},
$ay:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.e1.prototype={
n:function(a,b,c){H.ak(c)
H.bj(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hV.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.e2.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$iq_:1}
H.cL.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icL:1,
$iS:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
P.jE.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:23}
P.jD.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fd.prototype={
h4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cj(new P.kk(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
h5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cj(new P.kj(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibd:1}
P.kk.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kj.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fK(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bi.prototype={
kH:function(a){if(this.c!==6)return!0
return this.b.b.da(H.n(this.d,{func:1,ret:P.T,args:[P.Q]}),a.a,P.T,P.Q)},
ky:function(a){var u,t,s,r
u=this.e
t=P.Q
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.fw(u,{func:1,args:[P.Q,P.az]}))return H.lH(r.l7(u,a.a,a.b,null,t,P.az),s)
else return H.lH(r.da(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aM.prototype={
f9:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a2
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.p_(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aM(0,$.a2,[c])
r=b==null?1:3
this.dz(new P.bi(s,r,a,b,[u,c]))
return s},
ld:function(a,b){return this.f9(a,null,b)},
dz:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibi")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaM")
u=t.a
if(u<4){t.dz(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kD(null,null,u,H.n(new P.jP(this,a),{func:1,ret:-1}))}},
dX:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibi")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaM")
t=p.a
if(t<4){p.dX(a)
return}this.a=t
this.c=p.c}u.a=this.bu(a)
t=this.b
t.toString
P.kD(null,null,t,H.n(new P.jT(u,this),{func:1,ret:-1}))}},
cq:function(){var u=H.f(this.c,"$ibi")
this.c=null
return this.bu(u)},
bu:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dD:function(a){var u,t,s
u=H.v(this,0)
H.lH(a,{futureOr:1,type:u})
t=this.$ti
if(H.dn(a,"$icA",t,"$acA"))if(H.dn(a,"$iaM",t,null))P.mB(a,this)
else P.oB(a,this)
else{s=this.cq()
H.B(a,u)
this.a=4
this.c=a
P.d9(this,s)}},
dE:function(a,b){var u
H.f(b,"$iaz")
u=this.cq()
this.a=8
this.c=new P.an(a,b)
P.d9(this,u)},
$icA:1}
P.jP.prototype={
$0:function(){P.d9(this.a,this.b)},
$S:0}
P.jT.prototype={
$0:function(){P.d9(this.b,this.a.a)},
$S:0}
P.jQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.dD(a)},
$S:23}
P.jR.prototype={
$2:function(a,b){H.f(b,"$iaz")
this.a.dE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jS.prototype={
$0:function(){this.a.dE(this.b,this.c)},
$S:0}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f7(H.n(r.d,{func:1}),null)}catch(q){t=H.al(q)
s=H.cn(q)
if(this.d){r=H.f(this.a.a.c,"$ian").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$ian")
else p.b=new P.an(t,s)
p.a=!0
return}if(!!J.Y(u).$icA){if(u instanceof P.aM&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$ian")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ld(new P.jX(o),null)
r.a=!1}},
$S:3}
P.jX.prototype={
$1:function(a){return this.a},
$S:47}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.B(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.da(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.cn(o)
s=this.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$ian")
r=this.c
if(r.kH(u)&&r.e!=null){q=this.b
q.b=r.ky(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.cn(p)
r=H.f(this.a.a.c,"$ian")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.eA.prototype={}
P.iF.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aM(0,$.a2,[P.o])
u.a=0
s=H.v(this,0)
r=H.n(new P.iH(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iI(u,t),{func:1,ret:-1})
W.ad(this.a,this.b,r,!1,s)
return t}}
P.iH.prototype={
$1:function(a){H.B(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.v(this.b,0)]}}}
P.iI.prototype={
$0:function(){this.b.dD(this.a.a)},
$S:0}
P.cS.prototype={}
P.iG.prototype={}
P.bd.prototype={}
P.an.prototype={
i:function(a){return H.m(this.a)},
$ibI:1}
P.ku.prototype={$iqe:1}
P.kC.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e4()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.k2.prototype={
l8:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a2){a.$0()
return}P.mN(null,null,this,a,-1)}catch(s){u=H.al(s)
t=H.cn(s)
P.kB(null,null,this,u,H.f(t,"$iaz"))}},
l9:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.l===$.a2){a.$1(b)
return}P.mO(null,null,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.cn(s)
P.kB(null,null,this,u,H.f(t,"$iaz"))}},
jS:function(a,b){return new P.k4(this,H.n(a,{func:1,ret:b}),b)},
cD:function(a){return new P.k3(this,H.n(a,{func:1,ret:-1}))},
ea:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f7:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.l)return a.$0()
return P.mN(null,null,this,a,b)},
da:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a2===C.l)return a.$1(b)
return P.mO(null,null,this,a,b,c,d)},
l7:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a2===C.l)return a.$2(b,c)
return P.p0(null,null,this,a,b,c,d,e,f)}}
P.k4.prototype={
$0:function(){return this.a.f7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k3.prototype={
$0:function(){return this.a.l8(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){var u=this.c
return this.a.l9(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k0.prototype={
gX:function(a){var u=new P.eP(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a_:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ice")!=null}else{t=this.hg(b)
return t}},
hg:function(a){var u=this.d
if(u==null)return!1
return this.c9(this.dM(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lw()
this.b=u}return this.dA(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lw()
this.c=t}return this.dA(t,b)}else return this.h7(0,b)},
h7:function(a,b){var u,t,s
H.B(b,H.v(this,0))
u=this.d
if(u==null){u=P.lw()
this.d=u}t=this.dF(b)
s=u[t]
if(s==null)u[t]=[this.c6(b)]
else{if(this.c9(s,b)>=0)return!1
s.push(this.c6(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iJ(this.c,b)
else return this.iG(0,b)},
iG:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dM(u,b)
s=this.c9(t,b)
if(s<0)return!1
this.e1(t.splice(s,1)[0])
return!0},
dA:function(a,b){H.B(b,H.v(this,0))
if(H.f(a[b],"$ice")!=null)return!1
a[b]=this.c6(b)
return!0},
iJ:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ice")
if(u==null)return!1
this.e1(u)
delete a[b]
return!0},
dC:function(){this.r=1073741823&this.r+1},
c6:function(a){var u,t
u=new P.ce(H.B(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dC()
return u},
e1:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dC()},
dF:function(a){return J.dt(a)&1073741823},
dM:function(a,b){return a[this.dF(b)]},
c9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.ce.prototype={}
P.eP.prototype={
gN:function(a){return this.d},
G:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bl(u))
else{u=this.c
if(u==null){this.sdB(null)
return!1}else{this.sdB(H.B(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdB:function(a){this.d=H.B(a,H.v(this,0))},
$ib5:1}
P.hz.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:8}
P.hA.prototype={$ii:1,$ib:1}
P.y.prototype={
gX:function(a){return new H.cE(a,this.gl(a),0,[H.bS(this,a,"y",0)])},
M:function(a,b){return this.j(a,b)},
lf:function(a,b){var u,t
u=H.d([],[H.bS(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
dc:function(a){return this.lf(a,!0)},
p:function(a,b){var u,t
u=[H.bS(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bp(t,0,this.gl(a),a)
C.a.bp(t,this.gl(a),t.length,b)
return t},
ko:function(a,b,c,d){var u
H.B(d,H.bS(this,a,"y",0))
P.bu(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lj(a,"[","]")}}
P.hC.prototype={}
P.hD.prototype={
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
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bS(this,a,"ah",0),H.bS(this,a,"ah",1)]})
for(u=J.bC(this.ga8(a));u.G();){t=u.gN(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aG(this.ga8(a))},
i:function(a){return P.lo(a)},
$iF:1}
P.kl.prototype={
n:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hE.prototype={
j:function(a,b){return J.lR(this.a,b)},
n:function(a,b,c){J.la(this.a,H.B(b,H.v(this,0)),H.B(c,H.v(this,1)))},
O:function(a,b){J.lT(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.aG(this.a)},
i:function(a){return J.aw(this.a)},
$iF:1}
P.eu.prototype={}
P.k7.prototype={
au:function(a,b){var u
for(u=J.bC(H.k(b,"$ii",this.$ti,"$ai"));u.G();)this.h(0,u.gN(u))},
i:function(a){return P.lj(this,"{","}")},
M:function(a,b){var u,t,s
if(b<0)H.q(P.ag(b,0,null,"index",null))
for(u=P.oF(this,this.r,H.v(this,0)),t=0;u.G();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
$ii:1,
$imi:1}
P.eQ.prototype={}
P.fj.prototype={}
P.fJ.prototype={
kI:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bu(c,a0,b.length,null,null,null)
u=$.np()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.J(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kL(C.c.J(b,n))
j=H.kL(C.c.J(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.am("")
g=r.a+=C.c.w(b,s,t)
r.a=g+H.c8(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.w(b,s,a0)
f=g.length
if(q>=0)P.lX(b,p,a0,q,o,f)
else{e=C.f.bn(f-1,4)+1
if(e===1)throw H.c(P.a8("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b3(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lX(b,p,a0,q,o,d)
else{e=C.f.bn(d,4)
if(e===1)throw H.c(P.a8("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b3(b,a0,a0,e===2?"==":"=")}return b},
$abY:function(){return[[P.b,P.o],P.e]}}
P.fK.prototype={
$abG:function(){return[[P.b,P.o],P.e]}}
P.bY.prototype={}
P.bG.prototype={}
P.h6.prototype={
$abY:function(){return[P.e,[P.b,P.o]]}}
P.hm.prototype={
i:function(a){return this.a}}
P.hl.prototype={
hh:function(a,b,c){var u,t,s,r,q,p
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
if(r>b)q.a+=C.c.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nD(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abG:function(){return[P.e,P.e]}}
P.jk.prototype={
gkn:function(){return C.T}}
P.jm.prototype={
bc:function(a,b,c){var u,t,s
c=P.bu(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ks(t)
if(s.ht(a,b,c)!==c)s.e3(J.nx(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oV(0,s.b,t.length)))},
cJ:function(a){return this.bc(a,0,null)},
$abG:function(){return[P.e,[P.b,P.o]]}}
P.ks.prototype={
e3:function(a,b){var u,t,s,r,q
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
ht:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a3(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.J(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e3(r,C.c.J(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jl.prototype={
bc:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.os(!1,a,b,c)
if(u!=null)return u
c=P.bu(b,c,J.aG(a),null,null,null)
t=new P.am("")
s=new P.kq(!1,t)
s.bc(a,b,c)
if(s.e>0){H.q(P.a8("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c8(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cJ:function(a){return this.bc(a,0,null)},
$abG:function(){return[[P.b,P.o],P.e]}}
P.kq.prototype={
bc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kr(this,b,c,a)
$label0$0:for(q=J.cm(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bZ()
if((n&192)!==128){m=P.a8("Bad UTF-8 encoding 0x"+C.f.bl(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.H,m)
if(u<=C.H[m]){m=P.a8("Overlong encoding of 0x"+C.f.bl(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a8("Character outside valid Unicode range: 0x"+C.f.bl(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c8(u)
this.c=!1}for(m=o<c;m;){l=P.p1(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a0()
if(n<0){i=P.a8("Negative UTF-8 code unit: -0x"+C.f.bl(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a8("Bad UTF-8 encoding 0x"+C.f.bl(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kr.prototype={
$2:function(a,b){this.a.b.a+=P.ef(this.d,a,b)},
$S:46}
P.T.prototype={}
P.ao.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.ao&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aW(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nL(H.oc(this))
t=P.dD(H.oa(this))
s=P.dD(H.o6(this))
r=P.dD(H.o7(this))
q=P.dD(H.o9(this))
p=P.dD(H.ob(this))
o=P.nM(H.o8(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.u.prototype={}
P.b4.prototype={
p:function(a,b){return new P.b4(C.f.p(this.a,b.ghm()))},
t:function(a,b){return new P.b4(C.f.t(this.a,b.ghm()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h3()
t=this.a
if(t<0)return"-"+new P.b4(0-t).i(0)
s=u.$1(C.f.a7(t,6e7)%60)
r=u.$1(C.f.a7(t,1e6)%60)
q=new P.h2().$1(t%1e6)
return""+C.f.a7(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bI.prototype={}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.aO.prototype={
gc8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc7:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc8()+t+s
if(!this.a)return r
q=this.gc7()
p=P.h8(this.b)
return r+q+": "+p}}
P.c9.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hn.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t
u=H.ak(this.b)
if(typeof u!=="number")return u.a0()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.jd.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ja.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fQ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h8(u)+"."}}
P.i5.prototype={
i:function(a){return"Out of Memory"},
$ibI:1}
P.ee.prototype={
i:function(a){return"Stack Overflow"},
$ibI:1}
P.fX.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eI.prototype={
i:function(a){return"Exception: "+this.a}}
P.hh.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.J(r,m)
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
return t+h+f+g+"\n"+C.c.v(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bJ.prototype={}
P.o.prototype={}
P.i.prototype={
bY:function(a,b){var u=H.av(this,"i",0)
return new H.d6(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gX(this)
for(t=0;u.G();)++t
return t},
gaO:function(a){var u,t
u=this.gX(this)
if(!u.G())throw H.c(H.ho())
t=u.gN(u)
if(u.G())throw H.c(H.nU())
return t},
M:function(a,b){var u,t,s
if(b<0)H.q(P.ag(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.G();){s=u.gN(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.nS(this,"(",")")}}
P.b5.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.M.prototype={
gL:function(a){return P.Q.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
A:function(a,b){return this===b},
gL:function(a){return H.cO(this)},
i:function(a){return"Instance of '"+H.c7(this)+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.e.prototype={$imb:1}
P.am.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipO:1}
P.ji.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iF",[u,u],"$aF")
H.J(b)
t=J.dp(b).eO(b,"=")
if(t===-1){if(b!=="")J.la(a,P.ly(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.w(b,0,t)
r=C.c.aq(b,t+1)
u=this.a
J.la(a,P.ly(s,0,s.length,u,!0),P.ly(r,0,r.length,u,!0))}return a},
$S:44}
P.jf.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jh.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fz(C.c.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.a0()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cf.prototype={
gfg:function(){return this.b},
gcV:function(a){var u=this.c
if(u==null)return""
if(C.c.a6(u,"["))return C.c.w(u,1,u.length-1)
return u},
gbQ:function(a){var u=this.d
if(u==null)return P.mF(this.a)
return u},
gd5:function(a){var u=this.f
return u==null?"":u},
geJ:function(){var u=this.r
return u==null?"":u},
d9:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iF",[P.e,null],"$aF")
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
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.lx(g,0,0,h)
return new P.cf(i,j,c,f,d,g,this.r)},
f5:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gd6:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siF(new P.eu(P.ms(u==null?"":u,C.m),[t,t]))}return this.Q},
geK:function(){return this.c!=null},
geN:function(){return this.f!=null},
geL:function(){return this.r!=null},
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
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.Y(b).$ils)if(this.a==b.gc1())if(this.c!=null===b.geK())if(this.b==b.gfg())if(this.gcV(this)==b.gcV(b))if(this.gbQ(this)==b.gbQ(b))if(this.e===b.gf1(b)){u=this.f
t=u==null
if(!t===b.geN()){if(t)u=""
if(u===b.gd5(b)){u=this.r
t=u==null
if(!t===b.geL()){if(t)u=""
u=u===b.geJ()}else u=!1}else u=!1}else u=!1}else u=!1
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
siF:function(a){var u=P.e
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$ils:1,
gc1:function(){return this.a},
gf1:function(a){return this.e}}
P.km.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a8("Invalid port",this.a,u+1))},
$S:40}
P.kn.prototype={
$1:function(a){return P.fk(C.aa,a,C.m,!1)},
$S:17}
P.kp.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fk(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fk(C.w,b,C.m,!0))}},
$S:16}
P.ko.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bC(H.n2(b,"$ii")),t=this.a;u.G();)t.$2(a,H.J(u.gN(u)))},
$S:38}
P.je.prototype={
gfe:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.eP(t,"?",u)
r=t.length
if(s>=0){q=P.dj(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jK(this,"data",null,null,null,P.dj(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.ky.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kx.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.ny(u,0,96,b)
return u},
$S:35}
P.kz.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.J(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kA.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.J(b,0),t=C.c.J(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.ka.prototype={
geK:function(){return this.c>0},
geM:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
geN:function(){var u=this.f
if(typeof u!=="number")return u.a0()
return u<this.r},
geL:function(){return this.r<this.a.length},
gdQ:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdR:function(){return this.b===5&&C.c.a6(this.a,"https")},
gc1:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdQ()){this.x="http"
u="http"}else if(this.gdR()){this.x="https"
u="https"}else if(u===4&&C.c.a6(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a6(this.a,"package")){this.x="package"
u="package"}else{u=C.c.w(this.a,0,u)
this.x=u}return u},
gfg:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.w(this.a,t,u-1):""},
gcV:function(a){var u=this.c
return u>0?C.c.w(this.a,u,this.d):""},
gbQ:function(a){var u
if(this.geM()){u=this.d
if(typeof u!=="number")return u.p()
return P.fz(C.c.w(this.a,u+1,this.e),null,null)}if(this.gdQ())return 80
if(this.gdR())return 443
return 0},
gf1:function(a){return C.c.w(this.a,this.e,this.f)},
gd5:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a0()
return u<t?C.c.w(this.a,u+1,t):""},
geJ:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aq(t,u+1):""},
gd6:function(){var u=this.f
if(typeof u!=="number")return u.a0()
if(u>=this.r)return C.ab
u=P.e
return new P.eu(P.ms(this.gd5(this),C.m),[u,u])},
d9:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iF",[P.e,null],"$aF")
i=this.gc1()
u=i==="file"
t=this.c
j=t>0?C.c.w(this.a,this.b+3,t):""
f=this.geM()?this.gbQ(this):null
t=this.c
if(t>0)c=C.c.w(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.w(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.lx(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aq(t,s+1)
return new P.cf(i,j,c,f,d,g,b)},
f5:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Y(b).$ils&&this.a===b.i(0)},
i:function(a){return this.a},
$ils:1}
P.jK.prototype={}
W.z.prototype={}
W.fC.prototype={
gl:function(a){return a.length}}
W.du.prototype={
i:function(a){return String(a)},
$idu:1}
W.fD.prototype={
i:function(a){return String(a)}}
W.cr.prototype={$icr:1}
W.bV.prototype={$ibV:1}
W.bD.prototype={$ibD:1}
W.bW.prototype={
dg:function(a,b,c){if(c!=null)return this.hu(a,b,P.p8(c,null))
return this.hv(a,b)},
fn:function(a,b){return this.dg(a,b,null)},
hu:function(a,b,c){return a.getContext(b,c)},
hv:function(a,b){return a.getContext(b)},
$ibW:1,
$im_:1}
W.bX.prototype={
hw:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kk:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibX:1}
W.bE.prototype={
gl:function(a){return a.length}}
W.cv.prototype={$icv:1}
W.fT.prototype={
gl:function(a){return a.length}}
W.Z.prototype={$iZ:1}
W.cw.prototype={
gl:function(a){return a.length}}
W.fU.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fV.prototype={
gl:function(a){return a.length}}
W.fW.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.cx.prototype={
jN:function(a,b){return a.adoptNode(b)},
dh:function(a,b){return a.getElementById(b)}}
W.h_.prototype={
i:function(a){return String(a)}}
W.dE.prototype={
k9:function(a,b){return a.createHTMLDocument(b)}}
W.dF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a6],"$aab")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ab,P.a6]]},
$ay:function(){return[[P.ab,P.a6]]},
$ii:1,
$ai:function(){return[[P.ab,P.a6]]},
$ib:1,
$ab:function(){return[[P.ab,P.a6]]},
$aE:function(){return[[P.ab,P.a6]]}}
W.dG.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaN(a))+" x "+H.m(this.gaK(a))},
A:function(a,b){var u
if(b==null)return!1
if(!H.dn(b,"$iab",[P.a6],"$aab"))return!1
u=J.ae(b)
return a.left===u.gbP(b)&&a.top===u.gbW(b)&&this.gaN(a)===u.gaN(b)&&this.gaK(a)===u.gaK(b)},
gL:function(a){return W.mD(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaN(a)),C.e.gL(this.gaK(a)))},
gec:function(a){return a.bottom},
gaK:function(a){return a.height},
gbP:function(a){return a.left},
gbT:function(a){return a.right},
gbW:function(a){return a.top},
gaN:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a6]}}
W.h0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.e]},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
W.h1.prototype={
gl:function(a){return a.length}}
W.jI.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iV")},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.lb(this.a,c,u[b])},
h:function(a,b){J.lS(this.a,b)
return b},
gX:function(a){var u=this.dc(this)
return new J.aA(u,u.length,0,[H.v(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gjR:function(a){return new W.jL(a)},
gcI:function(a){return new W.jI(a,a.children)},
gee:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m4
if(u==null){u=H.d([],[W.aE])
t=new W.e3(u)
C.a.h(u,W.mC(null))
C.a.h(u,W.mE())
$.m4=t
d=t}else d=u
u=$.m3
if(u==null){u=new W.fl(d)
$.m3=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation
t=(t&&C.U).k9(t,"")
$.bm=t
$.li=t.createRange()
t=$.bm
t.toString
t=t.createElement("base")
H.f(t,"$icr")
t.href=u.baseURI
u=$.bm.head;(u&&C.W).F(u,t)}u=$.bm
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$ibD")}u=$.bm
if(!!this.$ibD)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bm.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a8,a.tagName)){u=$.li;(u&&C.N).fv(u,s)
u=$.li
r=(u&&C.N).k7(u,b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(u=J.ae(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.bm.body
if(s==null?u!=null:s!==u)J.lV(s)
c.dj(r)
C.z.jN(document,r)
return r},
k8:function(a,b,c){return this.af(a,b,c,null)},
fA:function(a,b,c,d){a.textContent=null
this.F(a,this.af(a,b,c,d))},
fz:function(a,b){return this.fA(a,b,null,null)},
b6:function(a,b){return a.getAttribute(b)},
iH:function(a,b){return a.removeAttribute(b)},
fw:function(a,b,c){return a.setAttribute(b,c)},
$iV:1,
gla:function(a){return a.tagName}}
W.h5.prototype={
$1:function(a){return!!J.Y(H.f(a,"$iH")).$iV},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jH:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.h8(a,b,c,!1)},
h8:function(a,b,c,d){return a.addEventListener(b,H.cj(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aI.prototype={$iaI:1}
W.cz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icz:1,
$aE:function(){return[W.aI]}}
W.hc.prototype={
gl:function(a){return a.length}}
W.hg.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.dK.prototype={}
W.dL.prototype={
iN:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$ay:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic2:1,
$aE:function(){return[W.H]}}
W.dM.prototype={}
W.bn.prototype={$ibn:1,
gef:function(a){return a.data}}
W.cC.prototype={$icC:1,$im_:1}
W.cD.prototype={$icD:1}
W.b6.prototype={$ib6:1}
W.dS.prototype={}
W.dV.prototype={
i:function(a){return String(a)},
$idV:1}
W.cH.prototype={}
W.hO.prototype={
gl:function(a){return a.length}}
W.hP.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.hQ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hR.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.hS(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aS.prototype={$iaS:1}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.ai.prototype={$iai:1}
W.as.prototype={
gaO:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mj("No elements"))
if(t>1)throw H.c(P.mj("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.H],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ae(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.lb(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dI(u,u.length,-1,[H.bS(C.ac,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
l_:function(a){var u=a.parentNode
if(u!=null)J.fA(u,a)},
l4:function(a,b){var u,t
try{u=a.parentNode
J.lb(u,b,a)}catch(t){H.al(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fF(a):u},
F:function(a,b){return a.appendChild(H.f(b,"$iH"))},
iI:function(a,b){return a.removeChild(b)},
iM:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$ay:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.aT.prototype={$iaT:1,
gl:function(a){return a.length}}
W.i8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.e8.prototype={
k7:function(a,b){return a.createContextualFragment(b)},
fv:function(a,b){return a.selectNodeContents(b)}}
W.ik.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.il(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.il.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.io.prototype={
gl:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aE:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gl:function(a){return a.length}}
W.iD.prototype={
j:function(a,b){return this.dN(a,H.J(b))},
n:function(a,b,c){this.iW(a,b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hA(a,u)
if(t==null)return
b.$2(t,this.dN(a,t))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.iE(u))
return u},
gl:function(a){return a.length},
dN:function(a,b){return a.getItem(b)},
hA:function(a,b){return a.key(b)},
iW:function(a,b,c){return a.setItem(b,c)},
$aah:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.iE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:16}
W.aJ.prototype={$iaJ:1}
W.bc.prototype={$ibc:1}
W.eg.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=W.nN("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).au(0,new W.as(u))
return t},
hy:function(a,b){return a.insertRow(b)}}
W.eh.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaO(u)
s.toString
u=new W.as(s)
r=u.gaO(u)
t.toString
r.toString
new W.as(t).au(0,new W.as(r))
return t},
dP:function(a,b){return a.insertCell(b)}}
W.iK.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaO(u)
t.toString
s.toString
new W.as(t).au(0,new W.as(s))
return t}}
W.cT.prototype={$icT:1}
W.aX.prototype={$iaX:1}
W.aK.prototype={$iaK:1}
W.iM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aE:function(){return[W.aK]}}
W.iN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aE:function(){return[W.aX]}}
W.iS.prototype={
gl:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aZ.prototype={$iaZ:1}
W.iW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aE:function(){return[W.aY]}}
W.iX.prototype={
gl:function(a){return a.length}}
W.bO.prototype={}
W.jj.prototype={
i:function(a){return String(a)}}
W.jz.prototype={$im_:1}
W.jA.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
gkf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
gke:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibh:1}
W.d7.prototype={
iP:function(a,b){return a.requestAnimationFrame(H.cj(H.n(b,{func:1,ret:-1,args:[P.a6]}),1))},
hn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d8.prototype={$id8:1}
W.jJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.Z]},
$ay:function(){return[W.Z]},
$ii:1,
$ai:function(){return[W.Z]},
$ib:1,
$ab:function(){return[W.Z]},
$aE:function(){return[W.Z]}}
W.eD.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.dn(b,"$iab",[P.a6],"$aab"))return!1
u=J.ae(b)
return a.left===u.gbP(b)&&a.top===u.gbW(b)&&a.width===u.gaN(b)&&a.height===u.gaK(b)},
gL:function(a){return W.mD(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaK:function(a){return a.height},
gaN:function(a){return a.width}}
W.jY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aE:function(){return[W.aP]}}
W.eV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$ay:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.kb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.kf.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aE:function(){return[W.aJ]}}
W.jH.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga8(this),t=u.length,s=this.a,r=J.ae(s),q=0;q<u.length;u.length===t||(0,H.D)(u),++q){p=u[q]
b.$2(p,r.b6(s,p))}},
ga8:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.f(u[r],"$id8")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aah:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.jL.prototype={
j:function(a,b){return J.lc(this.a,H.J(b))},
n:function(a,b,c){J.nC(this.a,b,c)},
gl:function(a){return this.ga8(this).length}}
W.jM.prototype={}
W.lv.prototype={}
W.jN.prototype={}
W.jO.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:34}
W.bQ.prototype={
fS:function(a){var u,t
u=$.lP()
if(u.gkC(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pk())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pl())}},
aX:function(a){return $.nq().a_(0,W.cy(a))},
av:function(a,b,c){var u,t,s
u=W.cy(a)
t=$.lP()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lD(s.$4(a,b,c,this))},
$iaE:1}
W.E.prototype={
gX:function(a){return new W.dI(a,this.gl(a),-1,[H.bS(this,a,"E",0)])}}
W.e3.prototype={
aX:function(a){return C.a.e7(this.a,new W.i0(a))},
av:function(a,b,c){return C.a.e7(this.a,new W.i_(a,b,c))},
$iaE:1}
W.i0.prototype={
$1:function(a){return H.f(a,"$iaE").aX(this.a)},
$S:25}
W.i_.prototype={
$1:function(a){return H.f(a,"$iaE").av(this.a,this.b,this.c)},
$S:25}
W.f2.prototype={
h3:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bY(0,new W.k8())
t=b.bY(0,new W.k9())
this.b.au(0,u)
s=this.c
s.au(0,C.I)
s.au(0,t)},
aX:function(a){return this.a.a_(0,W.cy(a))},
av:function(a,b,c){var u,t
u=W.cy(a)
t=this.c
if(t.a_(0,H.m(u)+"::"+b))return this.d.jO(c)
else if(t.a_(0,"*::"+b))return this.d.jO(c)
else{t=this.b
if(t.a_(0,H.m(u)+"::"+b))return!0
else if(t.a_(0,"*::"+b))return!0
else if(t.a_(0,H.m(u)+"::*"))return!0
else if(t.a_(0,"*::*"))return!0}return!1},
$iaE:1}
W.k8.prototype={
$1:function(a){return!C.a.a_(C.B,H.J(a))},
$S:26}
W.k9.prototype={
$1:function(a){return C.a.a_(C.B,H.J(a))},
$S:26}
W.kh.prototype={
av:function(a,b,c){if(this.fJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.lc(a,"template")==="")return this.e.a_(0,b)
return!1}}
W.ki.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.J(a))},
$S:17}
W.kg.prototype={
aX:function(a){var u=J.Y(a)
if(!!u.$icP)return!1
u=!!u.$ir
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.aX(a)},
$iaE:1}
W.dI.prototype={
G:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdO(J.lR(this.a,u))
this.c=u
return!0}this.sdO(null)
this.c=t
return!1},
gN:function(a){return this.d},
sdO:function(a){this.d=H.B(a,H.v(this,0))},
$ib5:1}
W.aE.prototype={}
W.k6.prototype={$iq0:1}
W.fl.prototype={
dj:function(a){new W.kt(this).$2(a,null)},
ba:function(a,b){if(b==null)J.lV(a)
else J.fA(b,a)},
iU:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nz(a)
s=J.lc(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.al(o)}q="element unprintable"
try{q=J.aw(a)}catch(o){H.al(o)}try{p=W.cy(a)
this.iT(H.f(a,"$iV"),b,u,q,p,H.f(t,"$iF"),H.J(s))}catch(o){if(H.al(o) instanceof P.aO)throw o
else{this.ba(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aX(a)){this.ba(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.ba(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.ga8(f).length-1,u=f.a,r=J.ae(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.av(a,J.nE(q),r.b6(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b6(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b6(u,q)
r.iH(u,q)}}if(!!J.Y(a).$icT)this.dj(a.content)},
$ipL:1}
W.kt.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iU(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ba(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.al(r)
q=H.f(u,"$iH")
if(s){p=q.parentNode
if(p!=null)J.fA(p,q)}else J.fA(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:45}
W.eC.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.de.prototype={}
W.df.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f8.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
P.kc.prototype={
eH:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
de:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Y(a)
if(!!t.$iao)return new Date(a.a)
if(!!t.$ioh)throw H.c(P.jb("structured clone of RegExp"))
if(!!t.$iaI)return a
if(!!t.$ibV)return a
if(!!t.$icz)return a
if(!!t.$ibn)return a
if(!!t.$icJ||!!t.$ibM)return a
if(!!t.$iF){s=this.eH(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.O(a,new P.ke(u,this))
return u.a}if(!!t.$ib){s=this.eH(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.k6(a,s)}throw H.c(P.jb("structured clone of other type"))},
k6:function(a,b){var u,t,s,r
u=J.cm(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.de(u.j(a,r)))
return s}}
P.ke.prototype={
$2:function(a,b){this.a.a[a]=this.b.de(b)},
$S:8}
P.fi.prototype={$ibn:1,
gef:function(a){return this.a}}
P.kE.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.kd.prototype={}
P.hd.prototype={
gbt:function(){var u,t,s
u=this.b
t=H.av(u,"y",0)
s=W.V
return new H.hF(new H.d6(u,H.n(new P.he(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.hf(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbt()
J.nB(u.b.$1(J.fB(u.a,b)),c)},
h:function(a,b){J.lS(this.b.a,b)},
gl:function(a){return J.aG(this.gbt().a)},
j:function(a,b){var u=this.gbt()
return u.b.$1(J.fB(u.a,b))},
gX:function(a){var u=P.m7(this.gbt(),!1,W.V)
return new J.aA(u,u.length,0,[H.v(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.he.prototype={
$1:function(a){return!!J.Y(H.f(a,"$iH")).$iV},
$S:22}
P.hf.prototype={
$1:function(a){return H.l(H.f(a,"$iH"),"$iV")},
$S:33}
P.k1.prototype={
gbT:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.B(u+this.c,H.v(this,0))},
gec:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.B(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dn(b,"$iab",[P.a6],"$aab")){u=this.a
t=J.ae(b)
if(u==t.gbP(b)){s=this.b
if(s==t.gbW(b)){if(typeof u!=="number")return u.p()
r=H.v(this,0)
if(H.B(u+this.c,r)===t.gbT(b)){if(typeof s!=="number")return s.p()
u=H.B(s+this.d,r)===t.gec(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.dt(u)
s=this.b
r=J.dt(s)
if(typeof u!=="number")return u.p()
q=H.v(this,0)
u=C.f.gL(H.B(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.B(s+this.d,q))
return P.oE(P.k_(P.k_(P.k_(P.k_(0,t),r),u),q))}}
P.ab.prototype={
gbP:function(a){return this.a},
gbW:function(a){return this.b},
gaN:function(a){return this.c},
gaK:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.hu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aE:function(){return[P.b7]}}
P.ba.prototype={$iba:1}
P.i3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$iba")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aE:function(){return[P.ba]}}
P.ia.prototype={
gl:function(a){return a.length}}
P.cP.prototype={$icP:1}
P.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
P.r.prototype={
gcI:function(a){return new P.hd(a,new W.as(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aE])
C.a.h(u,W.mC(null))
C.a.h(u,W.mE())
C.a.h(u,new W.kg())
c=new W.fl(new W.e3(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).k8(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.as(r)
p=u.gaO(u)
for(u=J.ae(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ir:1}
P.be.prototype={$ibe:1}
P.iY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ibe")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aE:function(){return[P.be]}}
P.eN.prototype={}
P.eO.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fg.prototype={}
P.fh.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$iop:1}
P.fF.prototype={
gl:function(a){return a.length}}
P.fG.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new P.fH(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fI.prototype={
gl:function(a){return a.length}}
P.bU.prototype={}
P.i4.prototype={
gl:function(a){return a.length}}
P.eB.prototype={}
P.dx.prototype={$idx:1}
P.dJ.prototype={$idJ:1}
P.e7.prototype={$ie7:1}
P.ca.prototype={
e4:function(a,b){return a.activeTexture(b)},
e8:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jT:function(a,b,c){return a.bindFramebuffer(b,c)},
aY:function(a,b,c){return a.bindTexture(b,c)},
jU:function(a,b,c){return a.blendFunc(b,c)},
ed:function(a,b,c,d){return a.bufferData(b,c,d)},
jX:function(a,b){return a.clear(b)},
jY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jZ:function(a,b){return a.clearDepth(b)},
k0:function(a,b){return a.compileShader(b)},
ka:function(a,b){return a.createShader(b)},
kc:function(a,b){return a.deleteProgram(b)},
kd:function(a,b){return a.deleteShader(b)},
kg:function(a,b){return a.depthFunc(b)},
kh:function(a,b){return a.disable(b)},
eg:function(a,b){return a.disableVertexAttribArray(b)},
kj:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cN:function(a,b){return a.enable(b)},
ek:function(a,b){return a.enableVertexAttribArray(b)},
fi:function(a,b){return a.generateMipmap(b)},
fj:function(a,b,c){return a.getActiveAttrib(b,c)},
fk:function(a,b,c){return a.getActiveUniform(b,c)},
fl:function(a,b,c){return a.getAttribLocation(b,c)},
di:function(a,b){return a.getParameter(b)},
fo:function(a,b){return a.getProgramInfoLog(b)},
c_:function(a,b,c){return a.getProgramParameter(b,c)},
fp:function(a,b){return a.getShaderInfoLog(b)},
fq:function(a,b,c){return a.getShaderParameter(b,c)},
fs:function(a,b,c){return a.getUniformLocation(b,c)},
kE:function(a,b){return a.linkProgram(b)},
kY:function(a,b,c){return a.pixelStorei(b,c)},
fD:function(a,b,c){return a.shaderSource(b,c)},
lc:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Y(g)
if(!!u.$ibn)t=!0
else t=!1
if(t){this.j5(a,b,c,d,e,f,P.p9(g))
return}if(!!u.$icC)u=!0
else u=!1
if(u){this.j6(a,b,c,d,e,f,g)
return}throw H.c(P.dv("Incorrect number or type of arguments"))},
lb:function(a,b,c,d,e,f,g){return this.lc(a,b,c,d,e,f,g,null,null,null)},
j5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
T:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ff:function(a,b){return a.useProgram(b)},
li:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lj:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ica:1}
P.eb.prototype={$ieb:1}
P.ej.prototype={$iej:1}
P.es.prototype={$ies:1}
P.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bv(this.hz(a,b))},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
hz:function(a,b){return a.item(b)},
$ay:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.f5.prototype={}
P.f6.prototype={}
O.a7.prototype={
c3:function(a){this.shE(H.d([],[a]))
this.sdV(null)
this.sdS(null)
this.sdW(null)},
dk:function(a,b,c){var u=H.av(this,"a7",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdV(b)
this.sdS(a)
this.sdW(c)},
bo:function(a,b){return this.dk(a,null,b)},
iq:function(a){var u
H.k(a,"$ii",[H.av(this,"a7",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fQ:function(a,b){var u
H.k(b,"$ii",[H.av(this,"a7",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.aA(u,u.length,0,[H.v(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.av(this,"a7",0)
H.B(b,u)
u=[u]
if(this.iq(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fQ(s,H.d([b],u))}},
shE:function(a){this.a=H.k(a,"$ib",[H.av(this,"a7",0)],"$ab")},
sdV:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.av(this,"a7",0)]]})},
sdS:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.av(this,"a7",0)]]})},
sdW:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.av(this,"a7",0)]]})},
$ii:1}
O.cG.prototype={
gl:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
fR:function(a){var u=this.b
if(u!=null)u.K(a)},
aP:function(){return this.fR(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.e_()},
f3:function(a){var u=this.a
if(a==null)C.a.h(u,V.e_())
else C.a.h(u,a)
this.aP()},
d4:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
scd:function(a){this.a=H.k(a,"$ib",[V.ap],"$ab")}}
E.fL.prototype={}
E.ax.prototype={
sab:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().I(0,this.geZ())
t=this.c
if(t!=null)t.gC().h(0,this.geZ())
s=new D.R("shape",u,this.c,this,[F.ec])
s.b=!0
this.an(s)}},
sbg:function(a){var u,t
if(!J.K(this.r,a)){u=this.r
if(u!=null)u.gC().I(0,this.geX())
if(a!=null)a.gC().h(0,this.geX())
this.r=a
t=new D.R("mover",u,a,this,[U.aj])
t.b=!0
this.an(t)}},
aB:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.b5(0,b,this):null
if(!J.K(t,this.x)){s=this.x
this.x=t
r=new D.R("matrix",s,t,this,[V.ap])
r.b=!0
this.an(r)}for(u=this.y.a,u=new J.aA(u,u.length,0,[H.v(u,0)]);u.G();)u.d.aB(0,b)},
b2:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga4(u))
else C.a.h(u.a,t.v(0,u.ga4(u)))
u.aP()
a.f4(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.l3(a,this)
for(u=this.y.a,u=new J.aA(u,u.length,0,[H.v(u,0)]);u.G();)u.d.b2(a)
a.f2()
a.dx.d4()},
gC:function(){var u=this.z
if(u==null){u=D.W()
this.z=u}return u},
an:function(a){var u=this.z
if(u!=null)u.K(a)},
Y:function(){return this.an(null)},
f_:function(a){H.f(a,"$iA")
this.e=null
this.an(a)},
kP:function(){return this.f_(null)},
eY:function(a){this.an(H.f(a,"$iA"))},
kO:function(){return this.eY(null)},
eW:function(a){this.an(H.f(a,"$iA"))},
kL:function(){return this.eW(null)},
kK:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ax],"$ai")
for(u=b.length,t=this.geV(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.saj(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
kN:function(a,b){var u,t
H.k(b,"$ii",[E.ax],"$ai")
for(u=b.gX(b),t=this.geV();u.G();)u.gN(u).gC().I(0,t)
this.Y()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
shf:function(a,b){this.y=H.k(b,"$ia7",[E.ax],"$aa7")},
$ibs:1}
E.ig.prototype={
fM:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ao(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cG()
t=[V.ap]
u.scd(H.d([],t))
u.b=null
u.gC().h(0,new E.ih(this))
this.cy=u
u=new O.cG()
u.scd(H.d([],t))
u.b=null
u.gC().h(0,new E.ii(this))
this.db=u
u=new O.cG()
u.scd(H.d([],t))
u.b=null
u.gC().h(0,new E.ij(this))
this.dx=u
this.sj4(H.d([],[O.cc]))
u=this.dy;(u&&C.a).h(u,null)
this.sj0(new H.aR([P.e,A.cQ]))},
gkZ:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga4(u)
t=this.db
t=u.v(0,t.ga4(t))
this.z=t
u=t}return u},
f4:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
f2:function(){var u=this.dy
if(u.length>1)u.pop()},
sj4:function(a){this.dy=H.k(a,"$ib",[O.cc],"$ab")},
sj0:function(a){this.fr=H.k(a,"$iF",[P.e,A.cQ],"$aF")}}
E.ih.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.ii.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.ij.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.eo.prototype={
dt:function(a){H.f(a,"$iA")
this.f6()},
ds:function(){return this.dt(null)},
gkx:function(){var u,t,s
u=Date.now()
t=C.f.a7(P.m2(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ao(u,!1)
return s/t},
dZ:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.G(u)
s=C.e.cU(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.e.cU(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mm(C.y,this.gl5())}},
f6:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iR(this),{func:1,ret:-1,args:[P.a6]})
C.P.hn(u)
C.P.iP(u,W.mS(t,P.a6))}},
l2:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dZ()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ao(r,!1)
s.y=P.m2(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aP()
r=s.db
C.a.sl(r.a,0)
r.aP()
r=s.dx
C.a.sl(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.b2(this.e)}s=this.z
if(s!=null)s.K(null)}catch(q){u=H.al(q)
t=H.cn(q)
P.lL("Error: "+H.m(u))
P.lL("Stack: "+H.m(t))
throw H.c(u)}}}
E.iR.prototype={
$1:function(a){var u
H.pw(a)
u=this.a
if(u.ch){u.ch=!1
u.l2()}},
$S:54}
Z.ez.prototype={$ipF:1}
Z.dy.prototype={
cC:function(a){var u,t,s
try{t=a.a
C.b.ek(t,this.e)
C.b.li(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.al(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.jB.prototype={$ipG:1}
Z.dz.prototype={
b_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cC:function(a){var u,t
u=this.a
C.b.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cC(a)},
lh:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eg(s,u[t].e)
C.b.aw(s,this.a.a,null)},
b2:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aw(t,p,r.b)
C.b.kj(t,q.a,q.b,5123,0)
C.b.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aw(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shx:function(a){this.b=H.k(a,"$ib",[Z.bK],"$ab")},
$ipP:1}
Z.bK.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c7(this.c)+"'")+"]"}}
Z.bg.prototype={
gdl:function(a){var u,t
u=this.a
t=(u&$.bz().a)!==0?3:0
if((u&$.by().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.bA().a)!==0)t+=2
if((u&$.bB().a)!==0)t+=3
if((u&$.dq().a)!==0)t+=3
if((u&$.dr().a)!==0)t+=4
if((u&$.cq().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
jQ:function(a){var u,t,s
u=$.bz()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.by()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bB()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dr()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0)if(s===a)return u
return $.no()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bz().a)!==0)C.a.h(u,"Pos")
if((t&$.by().a)!==0)C.a.h(u,"Norm")
if((t&$.bx().a)!==0)C.a.h(u,"Binm")
if((t&$.bA().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bB().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dq().a)!==0)C.a.h(u,"Clr3")
if((t&$.dr().a)!==0)C.a.h(u,"Clr4")
if((t&$.cq().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fO.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.b
t=(u&&C.a).I(u,b)||t}return t},
K:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.O(P.m7(t,!0,{func:1,ret:-1,args:[D.A]}),new D.h9(u))
t=this.b
if(t!=null){this.saU(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.O(t,new D.ha(u))}return!0},
kl:function(){return this.K(null)},
l6:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.K(t)}}},
aA:function(a){return this.l6(a,!0,!1)},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saU:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.ha.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.A.prototype={}
D.c3.prototype={}
D.c4.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dA.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dR.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.ht.prototype={
kV:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kR:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
siE:function(a){this.d=H.k(a,"$imi",[P.o],"$ami")}}
X.dW.prototype={}
X.hB.prototype={
b8:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ao(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=t.p(0,new V.a5(s*r,q*p))
p=this.a.gaZ()
n=new X.br(a,V.bt(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d3:function(a,b){this.r=a.a
return!1},
bi:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fu()
if(typeof u!=="number")return u.bZ()
this.r=(u&~t)>>>0
return!1},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.b8(a,b))
return!0},
kW:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaZ()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cI(new V.X(q*p,o*n),t,s,new P.ao(r,!1),this)
r.b=!0
u.K(r)
return!0},
ic:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ao(Date.now(),!1)
t=this.f
s=new X.dW(c,a,this.a.gaZ(),b,u,this)
s.b=!0
t.K(s)
this.y=u
this.x=V.bt()}}
X.aD.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.br.prototype={}
X.hU.prototype={
ca:function(a,b,c){var u,t,s
u=new P.ao(Date.now(),!1)
t=this.a.gaZ()
s=new X.br(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d3:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.ca(a,b,!0))
return!0},
bi:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fu()
if(typeof u!=="number")return u.bZ()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.K(this.ca(a,b,!0))
return!0},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.ca(a,b,!1))
return!0},
kX:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaZ()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cI(new V.X(r*q,p*o),t,b,new P.ao(s,!1),this)
s.b=!0
u.K(s)
return!0},
geh:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
gbX:function(){var u=this.c
if(u==null){u=D.W()
this.c=u}return u},
geU:function(){var u=this.d
if(u==null){u=D.W()
this.d=u}return u}}
X.cI.prototype={}
X.i9.prototype={}
X.eq.prototype={}
X.iV.prototype={
b8:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.a5],"$ab")
u=new P.ao(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=this.a.gaZ()
r=new X.eq(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kU:function(a){var u
H.k(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.K(this.b8(a,!0))
return!0},
kS:function(a){var u
H.k(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.K(this.b8(a,!0))
return!0},
kT:function(a){var u
H.k(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.K(this.b8(a,!1))
return!0}}
X.ev.prototype={
gaZ:function(){var u=this.a
return V.mg(0,0,C.q.gee(u).c,C.q.gee(u).d)},
dI:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dR(u,new X.aD(t,a.altKey,a.shiftKey))},
aV:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aD(t,a.altKey,a.shiftKey)},
cu:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aD(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a5(t-r,s-q)},
b9:function(a){return new V.X(a.movementX,a.movementY)},
cp:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a5])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
o=C.e.ao(p.pageX)
C.e.ao(p.pageY)
n=u.left
C.e.ao(p.pageX)
C.a.h(t,new V.a5(o-n,C.e.ao(p.pageY)-u.top))}return t},
aF:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dA(u,new X.aD(t,a.altKey,a.shiftKey))},
ce:function(a){var u,t,s,r,q,p
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
i6:function(a){this.f=!0},
hV:function(a){this.f=!1},
i0:function(a){H.f(a,"$iai")
if(this.f&&this.ce(a))a.preventDefault()},
ia:function(a){var u
H.f(a,"$ib6")
if(!this.f)return
u=this.dI(a)
this.b.kV(u)},
i8:function(a){var u
H.f(a,"$ib6")
if(!this.f)return
u=this.dI(a)
this.b.kR(u)},
ig:function(a){var u,t,s,r
H.f(a,"$iai")
u=this.a
u.focus()
this.f=!0
this.aV(a)
if(this.x){t=this.aF(a)
s=this.b9(a)
if(this.d.d3(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aF(a)
r=this.aI(a)
if(this.c.d3(t,r))a.preventDefault()},
ik:function(a){var u,t,s
H.f(a,"$iai")
this.aV(a)
u=this.aF(a)
if(this.x){t=this.b9(a)
if(this.d.bi(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bi(u,s))a.preventDefault()},
i4:function(a){var u,t,s
H.f(a,"$iai")
if(!this.ce(a)){this.aV(a)
u=this.aF(a)
if(this.x){t=this.b9(a)
if(this.d.bi(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bi(u,s))a.preventDefault()}},
ii:function(a){var u,t,s
H.f(a,"$iai")
this.aV(a)
u=this.aF(a)
if(this.x){t=this.b9(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bh(u,s))a.preventDefault()},
i2:function(a){var u,t,s
H.f(a,"$iai")
if(!this.ce(a)){this.aV(a)
u=this.aF(a)
if(this.x){t=this.b9(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bh(u,s))a.preventDefault()}},
im:function(a){var u,t
H.f(a,"$ibh")
this.aV(a)
u=new V.X((a&&C.O).gke(a),C.O.gkf(a)).u(0,180)
if(this.x){if(this.d.kW(u))a.preventDefault()
return}if(this.r)return
t=this.aI(a)
if(this.c.kX(u,t))a.preventDefault()},
ip:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aF(this.y)
s=this.aI(this.y)
this.d.ic(t,s,u)}},
iC:function(a){var u
H.f(a,"$iaZ")
this.a.focus()
this.f=!0
this.cu(a)
u=this.cp(a)
if(this.e.kU(u))a.preventDefault()},
iy:function(a){var u
H.f(a,"$iaZ")
this.cu(a)
u=this.cp(a)
if(this.e.kS(u))a.preventDefault()},
iA:function(a){var u
H.f(a,"$iaZ")
this.cu(a)
u=this.cp(a)
if(this.e.kT(u))a.preventDefault()},
sho:function(a){this.z=H.k(a,"$ib",[[P.cS,P.Q]],"$ab")}}
D.bH.prototype={
gC:function(){var u=this.d
if(u==null){u=D.W()
this.d=u}return u},
aD:function(a){var u
H.f(a,"$iA")
u=this.d
if(u!=null)u.K(a)},
fV:function(){return this.aD(null)},
$ia9:1,
$ibs:1}
D.a9.prototype={$ibs:1}
D.dT.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.W()
this.Q=u}return u},
aD:function(a){var u=this.Q
if(u!=null)u.K(a)},
dU:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.K(a)},
ib:function(){return this.dU(null)},
is:function(a){var u,t,s
H.k(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.fT(s))return!1}return!0},
hP:function(a,b){var u,t,s,r,q,p,o,n
u=D.a9
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdT(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=H.f(b[p],"$ia9")
if(o instanceof D.bH)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.c_()
n.saj(null)
n.saU(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.saj(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c3(a,b,this,[u])
u.b=!0
this.aD(u)},
iw:function(a,b){var u,t,s,r
u=D.a9
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gdT();t.G();){r=t.gN(t)
C.a.I(this.e,r)
r.gC().I(0,s)}u=new D.c4(a,b,this,[u])
u.b=!0
this.aD(u)},
fT:function(a){var u=C.a.a_(this.e,a)
return u},
shl:function(a){this.e=H.k(a,"$ib",[D.bH],"$ab")},
siD:function(a){this.f=H.k(a,"$ib",[D.e6],"$ab")},
sj2:function(a){this.r=H.k(a,"$ib",[D.ed],"$ab")},
sjf:function(a){this.x=H.k(a,"$ib",[D.el],"$ab")},
sjg:function(a){this.y=H.k(a,"$ib",[D.em],"$ab")},
sjh:function(a){this.z=H.k(a,"$ib",[D.en],"$ab")},
$ai:function(){return[D.a9]},
$aa7:function(){return[D.a9]}}
D.e6.prototype={$ia9:1,$ibs:1}
D.ed.prototype={$ia9:1,$ibs:1}
D.el.prototype={$ia9:1,$ibs:1}
D.em.prototype={$ia9:1,$ibs:1}
D.en.prototype={$ia9:1,$ibs:1}
V.af.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gd7())
t=C.e.p(this.b,b.gc0())
s=C.e.p(this.c,b.gcE())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.af(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gd7())
t=C.e.t(this.b,b.gc0())
s=C.e.t(this.c,b.gcE())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.af(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.aB.prototype={
dc:function(a){return H.d([this.a,this.b,this.c,this.d],[P.u])},
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gd7())
t=C.e.p(this.b,b.gc0())
s=C.e.p(this.c,b.gcE())
r=C.e.p(this.d,b.gjP(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aB(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gd7())
t=C.e.t(this.b,b.gc0())
s=C.e.t(this.c,b.gcE())
r=C.e.t(this.d,b.gjP(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aB(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.h7.prototype={}
V.dZ.prototype={
ai:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dZ))return!1
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
u=[P.u]
t=V.cl(H.d([this.a,this.d,this.r],u),3,0)
s=V.cl(H.d([this.b,this.e,this.x],u),3,0)
r=V.cl(H.d([this.c,this.f,this.y],u),3,0)
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
V.ap.prototype={
ai:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return u},
eQ:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.N().a)return V.e_()
a8=1/a7
a9=-r
b0=-d
return V.b9((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.b9(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.C(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bm:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a_(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
eI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.u]
t=V.cl(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cl(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cl(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cl(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.eI("",3,0)},
H:function(a){return this.eI(a,3,0)}}
V.a5.prototype={
p:function(a,b){return new V.a5(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
u:function(a,b){if(Math.abs(b-0)<$.N().a)return V.bt()
return new V.a5(this.a/b,this.b/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a_.prototype={
p:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.N().a)return V.lp()
return new V.a_(this.a/b,this.b/b,this.c/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bb.prototype={
p:function(a,b){return new V.bb(C.e.p(this.a,b.gll(b)),C.e.p(this.b,b.glm(b)),C.e.p(this.c,b.gln(b)),C.e.p(this.d,b.glk(b)))},
t:function(a,b){return new V.bb(C.e.t(this.a,b.gll(b)),C.e.t(this.b,b.glm(b)),C.e.t(this.c,b.gln(b)),C.e.t(this.d,b.glk(b)))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bb))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.ea.prototype={
gac:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ea))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.X.prototype={
bf:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gei(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gej(b)
if(typeof u!=="number")return u.p()
return new V.X(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gei(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gej(b)
if(typeof u!=="number")return u.t()
return new V.X(t,C.e.t(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.X(u*b,t*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.mt
if(u==null){u=new V.X(0,0)
$.mt=u}return u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.X(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.C.prototype={
bf:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cY:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aJ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.C(this.a-b.a,this.b-b.b,this.c-b.c)},
W:function(a){return new V.C(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.N().a)return V.d4()
return new V.C(this.a/b,this.b/b,this.c/b)},
eR:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.b0.prototype={
bf:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
p:function(a,b){return new V.b0(this.a+b.a,this.b+b.b,this.c+b.c,this.d+b.d)},
t:function(a,b){return new V.b0(C.e.t(this.a,b.gei(b)),C.e.t(this.b,b.gej(b)),C.e.t(this.c,b.glt()),C.e.t(this.d,b.gls()))},
u:function(a,b){var u
if(Math.abs(b-0)<$.N().a){u=$.mA
if(u==null){u=new V.b0(0,0,0,0)
$.mA=u}return u}return new V.b0(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
U.fP.prototype={
c5:function(a){var u=V.pE(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u},
U:function(a){var u=this.y
if(u!=null)u.K(a)},
sdf:function(a,b){},
sd_:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c5(t)}u=new D.R("maximumLocation",u,this.b,this,[P.u])
u.b=!0
this.U(u)}},
sd1:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c5(t)}u=new D.R("minimumLocation",u,this.c,this,[P.u])
u.b=!0
this.U(u)}},
sa2:function(a,b){var u
b=this.c5(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.R("location",u,b,this,[P.u])
u.b=!0
this.U(u)}},
sd0:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.R("maximumVelocity",u,a,this,[P.u])
u.b=!0
this.U(u)}},
sZ:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.R("velocity",u,a,this,[P.u])
u.b=!0
this.U(u)}},
scL:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.R("dampening",u,a,this,[P.u])
u.b=!0
this.U(u)}},
aB:function(a,b){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sZ(s)}}}
U.dC.prototype={
gC:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
b5:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cB.prototype={
gC:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
U:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.K(a)},
aa:function(){return this.U(null)},
hN:function(a,b){var u,t,s,r,q,p,o,n
u=U.aj
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaT(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.n(s,r)
if(n.a==null)n.saj(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c3(a,b,this,[u])
u.b=!0
this.U(u)},
iu:function(a,b){var u,t,s
u=U.aj
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gaT();t.G();)t.gN(t).gC().I(0,s)
u=new D.c4(a,b,this,[u])
u.b=!0
this.U(u)},
b5:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aA(u,u.length,0,[H.v(u,0)]),s=null;u.G();){t=u.d
if(t!=null){r=t.b5(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.e_():s
u=this.e
if(u!=null)u.aA(0)}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa7:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ew.prototype={
gC:function(){var u=this.cy
if(u==null){u=D.W()
this.cy=u}return u},
U:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.K(a)},
aa:function(){return this.U(null)},
bb:function(a){if(this.a!=null)return!1
this.a=a
a.c.geh().h(0,this.gcf())
this.a.c.geU().h(0,this.gci())
this.a.c.gbX().h(0,this.gck())
return!0},
cg:function(a){H.f(a,"$iA")
if(!J.K(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cj:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibr")
if(!this.y)return
if(this.x){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.t(0,a.y)
u=new V.X(t.a,t.b).v(0,2).u(0,u.gac())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sZ(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.X(s.a,s.b).v(0,2).u(0,u.gac())
s=this.b
q=r.a
if(typeof q!=="number")return q.W()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa2(0,-q*p+o)
this.b.sZ(0)
t=t.t(0,a.z)
this.Q=new V.X(t.a,t.b).v(0,2).u(0,u.gac())}this.aa()},
cl:function(a){var u,t,s
H.f(a,"$iA")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.E(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sZ(t*10*s)
this.aa()}},
b5:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.ch=t
s=b.y
this.b.aB(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.b9(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaj:1}
U.ex.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.W()
this.fx=u}return u},
U:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.K(a)},
aa:function(){return this.U(null)},
bb:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geh().h(0,this.gcf())
this.a.c.geU().h(0,this.gci())
this.a.c.gbX().h(0,this.gck())
u=this.a.d
t=u.f
if(t==null){t=D.W()
u.f=t
u=t}else u=t
u.h(0,this.ghF())
u=this.a.d
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.ghH())
u=this.a.e
t=u.b
if(t==null){t=D.W()
u.b=t
u=t}else u=t
u.h(0,this.gjc())
u=this.a.e
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.gja())
u=this.a.e
t=u.c
if(t==null){t=D.W()
u.c=t
u=t}else u=t
u.h(0,this.gj8())
return!0},
as:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.X(u,t)},
cg:function(a){a=H.l(H.f(a,"$iA"),"$ibr")
if(!J.K(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cj:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibr")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.X(t.a,t.b).v(0,2).u(0,u.gac()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.X(s.a,s.b).v(0,2).u(0,u.gac()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa2(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.t(0,a.z)
this.dx=this.as(new V.X(t.a,t.b).v(0,2).u(0,u.gac()))}this.aa()},
cl:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sZ(-t*10*u)
this.aa()}},
hG:function(a){if(H.l(H.f(a,"$iA"),"$idW").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hI:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibr")
if(!J.K(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.X(s.a,s.b).v(0,2).u(0,u.gac()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa2(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.t(0,a.z)
this.dx=this.as(new V.X(t.a,t.b).v(0,2).u(0,u.gac()))
this.aa()},
jd:function(a){H.f(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jb:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ieq")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.X(t.a,t.b).v(0,2).u(0,u.gac()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.X(s.a,s.b).v(0,2).u(0,u.gac()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa2(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.t(0,a.z)
this.dx=this.as(new V.X(t.a,t.b).v(0,2).u(0,u.gac()))}this.aa()},
j9:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sZ(-t*10*u)
this.aa()}},
b5:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.dy=t
s=b.y
this.c.aB(0,s)
this.b.aB(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.b9(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.b9(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaj:1}
U.ey.prototype={
gC:function(){var u=this.r
if(u==null){u=D.W()
this.r=u}return u},
U:function(a){var u=this.r
if(u!=null)u.K(a)},
bb:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.W()
u.e=t
u=t}else u=t
t=this.ghK()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.W()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hL:function(a){var u,t,s,r
H.f(a,"$iA")
if(!J.K(this.b,this.a.b.c))return
H.l(a,"$icI")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.R("zoom",u,r,this,[P.u])
u.b=!0
this.U(u)}},
b5:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b9(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaj:1}
M.dH.prototype={
aE:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.K(a)},
fX:function(){return this.aE(null)},
hX:function(a,b){var u,t,s,r,q,p,o,n
u=E.ax
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c_()
n.saj(null)
n.saU(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.saj(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c3(a,b,this,[u])
u.b=!0
this.aE(u)},
hZ:function(a,b){var u,t,s
u=E.ax
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gar();t.G();)t.gN(t).gC().I(0,s)
u=new D.c4(a,b,this,[u])
u.b=!0
this.aE(u)},
sf8:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().I(0,this.gar())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gar())
u=new D.R("technique",t,this.c,this,[O.cc])
u.b=!0
this.aE(u)}},
gC:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.f4(this.c)
u=this.b
u.toString
t=a.a
C.b.jT(t,36160,null)
C.b.cN(t,2884)
C.b.cN(t,2929)
C.b.kg(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.G(s)
o=C.e.ao(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.e.ao(p*r)
p=C.e.ao(q.c*s)
a.c=p
q=C.e.ao(q.d*r)
a.d=q
C.b.lj(t,o,n,p,q)
C.b.jZ(t,u.c)
u=u.a
C.b.jY(t,u.a,u.b,u.c,u.d)
C.b.jX(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b9(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.f3(i)
t=$.mc
if(t==null){t=V.lp()
q=V.my()
p=$.mu
if(p==null){p=new V.C(0,0,-1)
$.mu=p}p=V.m8(t,q,p)
$.mc=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.v(0,h)}a.db.f3(h)
u=this.c
if(u!=null)u.aB(0,a)
for(u=this.d.a,u=new J.aA(u,u.length,0,[H.v(u,0)]);u.G();)u.d.aB(0,a)
for(u=this.d.a,u=new J.aA(u,u.length,0,[H.v(u,0)]);u.G();)u.d.b2(a)
this.a.toString
a.cy.d4()
a.db.d4()
this.b.toString
a.f2()},
sfW:function(a,b){this.d=H.k(b,"$ia7",[E.ax],"$aa7")},
$ipM:1}
A.dw.prototype={}
A.fE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
km:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.ek(r.a,r.c)}},
ki:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.eg(r.a,r.c)}}}
A.hI.prototype={
fL:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.am("")
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
a7.jl(u)
a7.js(u)
a7.jm(u)
a7.jA(u)
a7.jB(u)
a7.ju(u)
a7.jF(u)
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
u=new P.am("")
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
s.jp(u)
s.jk(u)
s.jn(u)
s.jq(u)
s.jy(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jw(u)
s.jx(u)}s.jt(u)
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
s.jo(u)
s.jv(u)
s.jz(u)
s.jC(u)
s.jD(u)
s.jE(u)
s.jr(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dJ(n,35633)
this.f=this.dJ(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.e8(s,q,this.e)
C.b.e8(s,this.r,this.f)
C.b.kE(s,this.r)
if(!H.lD(C.b.c_(s,this.r,35714))){h=C.b.fo(s,this.r)
C.b.kc(s,this.r)
H.q(P.t("Failed to link shader: "+H.m(h)))}this.iY()
this.j_()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaF")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaF")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaF")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaF")
if(a7.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$icY")
if(a7.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaF")
if(a7.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaF")
this.shb(H.d([],[A.aF]))
t=a7.ay
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.q(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(f,"$iaF"))}}t=a7.a
if(t!==C.d){this.r2=H.l(this.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.l(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iP")
break
case C.i:this.ry=H.l(this.y.q(0,"emissionTxt"),"$iar")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iP")
break}}t=a7.b
if(t!==C.d){this.x2=H.l(this.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.l(this.y.q(0,"ambientTxt"),"$iaq")
this.ay=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break
case C.i:this.y2=H.l(this.y.q(0,"ambientTxt"),"$iar")
this.ay=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break}}t=a7.c
if(t!==C.d){this.am=H.l(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.bA=H.l(this.y.q(0,"diffuseTxt"),"$iaq")
this.bB=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break
case C.i:this.el=H.l(this.y.q(0,"diffuseTxt"),"$iar")
this.bB=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break}}t=a7.d
if(t!==C.d){this.bC=H.l(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.em=H.l(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bD=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break
case C.i:this.en=H.l(this.y.q(0,"invDiffuseTxt"),"$iar")
this.bD=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a7.e
if(t!==C.d){this.bG=H.l(this.y.q(0,"shininess"),"$ia4")
this.bE=H.l(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.eo=H.l(this.y.q(0,"specularTxt"),"$iaq")
this.bF=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break
case C.i:this.ep=H.l(this.y.q(0,"specularTxt"),"$iar")
this.bF=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.eq=H.l(this.y.q(0,"bumpTxt"),"$iaq")
this.bH=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break
case C.i:this.er=H.l(this.y.q(0,"bumpTxt"),"$iar")
this.bH=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break}if(a7.dy){this.es=H.l(this.y.q(0,"envSampler"),"$iar")
this.eu=H.l(this.y.q(0,"nullEnvTxt"),"$iP")
t=a7.r
if(t!==C.d){this.bI=H.l(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ev=H.l(this.y.q(0,"reflectTxt"),"$iaq")
this.bJ=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break
case C.i:this.ew=H.l(this.y.q(0,"reflectTxt"),"$iar")
this.bJ=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break}}t=a7.x
if(t!==C.d){this.bK=H.l(this.y.q(0,"refraction"),"$ia4")
this.bL=H.l(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ex=H.l(this.y.q(0,"refractTxt"),"$iaq")
this.bM=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break
case C.i:this.ey=H.l(this.y.q(0,"refractTxt"),"$iar")
this.bM=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break}}}t=a7.y
if(t!==C.d){this.bN=H.l(this.y.q(0,"alpha"),"$ia4")
switch(t){case C.d:break
case C.j:break
case C.h:this.ez=H.l(this.y.q(0,"alphaTxt"),"$iaq")
this.bO=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break
case C.i:this.eA=H.l(this.y.q(0,"alphaTxt"),"$iar")
this.bO=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break}}this.sfY(H.d([],[A.cX]))
this.sfZ(H.d([],[A.cZ]))
this.sh_(H.d([],[A.d_]))
this.sh0(H.d([],[A.d0]))
this.sh1(H.d([],[A.d1]))
this.sh2(H.d([],[A.d2]))
if(a7.k2){t=a7.z
if(t>0){this.eB=H.f(this.y.q(0,"dirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.cO;(s&&C.a).h(s,new A.cX(g,f,e))}}t=a7.Q
if(t>0){this.eC=H.f(this.y.q(0,"pntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia4")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia4")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia4")
s=this.cP;(s&&C.a).h(s,new A.cZ(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eD=H.f(this.y.q(0,"spotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia4")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia4")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia4")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia4")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia4")
s=this.cQ;(s&&C.a).h(s,new A.d_(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eE=H.f(this.y.q(0,"txtDirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iO")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$iaq")
s=this.cR;(s&&C.a).h(s,new A.d0(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eF=H.f(this.y.q(0,"txtPntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$icY")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iP")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia4")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia4")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia4")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$iar")
s=this.cS;(s&&C.a).h(s,new A.d1(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eG=H.f(this.y.q(0,"txtSpotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iO")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$iO")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia4")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia4")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia4")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia4")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$ia4")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.q(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a6,"$iaq")
s=this.cT;(s&&C.a).h(s,new A.d2(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){if(c==null||!c.d)C.b.V(b.a,b.d,1)
else{a.fC(c)
C.b.V(b.a,b.d,0)}},
ae:function(a,b,c){C.b.V(b.a,b.d,1)},
shb:function(a){this.r1=H.k(a,"$ib",[A.aF],"$ab")},
sfY:function(a){this.cO=H.k(a,"$ib",[A.cX],"$ab")},
sfZ:function(a){this.cP=H.k(a,"$ib",[A.cZ],"$ab")},
sh_:function(a){this.cQ=H.k(a,"$ib",[A.d_],"$ab")},
sh0:function(a){this.cR=H.k(a,"$ib",[A.d0],"$ab")},
sh1:function(a){this.cS=H.k(a,"$ib",[A.d1],"$ab")},
sh2:function(a){this.cT=H.k(a,"$ib",[A.d2],"$ab")}}
A.hL.prototype={
jl:function(a){var u,t,s
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
js:function(a){var u
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
jm:function(a){var u
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
jA:function(a){var u,t
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
jB:function(a){var u,t
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
ju:function(a){var u
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
jF:function(a){var u
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
aG:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aq(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jp:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aG(a,u,"emission")
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
jk:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aG(a,u,"ambient")
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
jn:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aG(a,u,"diffuse")
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
jq:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aG(a,u,"invDiffuse")
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
jy:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aG(a,u,"specular")
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
jt:function(a){var u,t
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
jw:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aG(a,u,"reflect")
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
jx:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aG(a,u,"refract")
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
jo:function(a){var u,t
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
jv:function(a){var u,t
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
jz:function(a){var u,t
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
jC:function(a){var u,t,s
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
jD:function(a){var u,t,s
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
jE:function(a){var u,t,s
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
jr:function(a){var u
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
A.cX.prototype={}
A.d0.prototype={}
A.cZ.prototype={}
A.d1.prototype={}
A.d_.prototype={}
A.d2.prototype={}
A.cQ.prototype={
fO:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dJ:function(a,b){var u,t,s
u=this.a
t=C.b.ka(u,b)
C.b.fD(u,t,a)
C.b.k0(u,t)
if(!H.lD(C.b.fq(u,t,35713))){s=C.b.fp(u,t)
C.b.kd(u,t)
throw H.c(P.t("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iY:function(){var u,t,s,r,q,p
u=H.d([],[A.dw])
t=this.a
s=H.ak(C.b.c_(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.fj(t,this.r,r)
p=C.b.fl(t,this.r,q.name)
C.a.h(u,new A.dw(t,q.name,p))}this.x=new A.fE(u)},
j_:function(){var u,t,s,r,q,p
u=H.d([],[A.er])
t=this.a
s=H.ak(C.b.c_(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.fk(t,this.r,r)
p=C.b.fs(t,this.r,q.name)
C.a.h(u,this.kb(q.type,q.size,q.name,p))}this.y=new A.j8(u)},
aS:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.lr(u,t,b,a,c)},
hi:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lr(u,t,b,a,c)},
hj:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.lr(u,t,b,a,c)},
bv:function(a,b){return new P.eI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
kb:function(a,b,c,d){switch(a){case 5120:return this.aS(b,c,d)
case 5121:return this.aS(b,c,d)
case 5122:return this.aS(b,c,d)
case 5123:return this.aS(b,c,d)
case 5124:return this.aS(b,c,d)
case 5125:return this.aS(b,c,d)
case 5126:return new A.a4(this.a,this.r,c,d)
case 35664:return new A.j3(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.j6(this.a,this.r,c,d)
case 35667:return new A.j4(this.a,this.r,c,d)
case 35668:return new A.j5(this.a,this.r,c,d)
case 35669:return new A.j7(this.a,this.r,c,d)
case 35674:return new A.j9(this.a,this.r,c,d)
case 35675:return new A.cY(this.a,this.r,c,d)
case 35676:return new A.aF(this.a,this.r,c,d)
case 35678:return this.hi(b,c,d)
case 35680:return this.hj(b,c,d)
case 35670:throw H.c(this.bv("BOOL",c))
case 35671:throw H.c(this.bv("BOOL_VEC2",c))
case 35672:throw H.c(this.bv("BOOL_VEC3",c))
case 35673:throw H.c(this.bv("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bZ.prototype={
i:function(a){return this.b}}
A.er.prototype={}
A.j8.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kw:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kw("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sji:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a4.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cY.prototype={
ap:function(a){var u=new Float32Array(H.cg(H.k(a,"$ib",[P.u],"$ab")))
C.b.fc(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aF.prototype={
ap:function(a){var u=new Float32Array(H.cg(H.k(a,"$ib",[P.u],"$ab")))
C.b.fd(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.aq.prototype={
fC:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.V(t,s,0)
else C.b.V(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ar.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kv.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cY(u.b,b).cY(u.d.cY(u.c,b),c)
a.sa2(0,new V.a_(t.a,t.b,t.c))
a.sbV(t.u(0,Math.sqrt(t.E(t))))
u=1-b
s=1-c
a.se9(new V.bb(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.kF.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.kH.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.G(q)
t=-t*q
p=s*q
a.sa2(0,new V.a_(t,p,r))
p=new V.C(t,p,r)
a.sbV(p.u(0,Math.sqrt(p.E(p))))
a.se9(new V.bb(1-c,2+c,-1,-1))},
$S:5}
F.kI.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kJ.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kR.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.C(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.u(0,Math.sqrt(r.E(r)))
a.sa2(0,new V.a_(s.a,s.b,s.c))},
$S:5}
F.l5.prototype={
$2:function(a,b){return 0},
$S:31}
F.l6.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.G(u)
t=a.f
s=new V.C(t.a,t.b,t.c)
u=s.u(0,Math.sqrt(s.E(s))).v(0,this.b+u)
a.sa2(0,new V.a_(u.a,u.b,u.c))},
$S:5}
F.l8.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:24}
F.kQ.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a_(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:24}
F.kG.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lQ(t.$1(u),s)
s=J.nu(J.lQ(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.C(s.a,s.b,s.c)
q=s.u(0,Math.sqrt(s.E(s)))
t=$.mv
if(t==null){t=new V.C(1,0,0)
$.mv=t
p=t}else p=t
t=q.aJ(!J.K(q,p)?V.mz():p)
o=t.u(0,Math.sqrt(t.E(t)))
t=o.aJ(q)
p=t.u(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
a.sa2(0,J.nt(r,new V.a_(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.aa.prototype={
bd:function(){if(!this.gbe()){C.a.I(this.a.a.d.b,this)
this.a.a.Y()}this.cr()
this.cs()
this.iK()},
cv:function(a){this.a=a
C.a.h(a.d.b,this)},
cw:function(a){this.b=a
C.a.h(a.d.c,this)},
iX:function(a){this.c=a
C.a.h(a.d.d,this)},
cr:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
cs:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
iK:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gbe:function(){return this.a==null||this.b==null||this.c==null},
ha:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d4()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eR())return
return q.u(0,Math.sqrt(q.E(q)))},
he:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.C(u.a,u.b,u.c)
q=u.u(0,Math.sqrt(u.E(u)))
u=r.t(0,t)
u=new V.C(u.a,u.b,u.c)
u=q.aJ(u.u(0,Math.sqrt(u.E(u))))
return u.u(0,Math.sqrt(u.E(u)))},
cH:function(){if(this.d!=null)return!0
var u=this.ha()
if(u==null){u=this.he()
if(u==null)return!1}this.d=u
this.a.a.Y()
return!0},
h9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d4()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eR())return
return q.u(0,Math.sqrt(q.E(q)))},
hd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
u=new V.C(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.t(0,p).v(0,g).p(0,p).t(0,s)
u=new V.C(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.u(0,Math.sqrt(u.E(u)))
u=f.aJ(h)
u=u.u(0,Math.sqrt(u.E(u))).aJ(f)
h=u.u(0,Math.sqrt(u.E(u)))}return h},
cF:function(){if(this.e!=null)return!0
var u=this.h9()
if(u==null){u=this.hd()
if(u==null)return!1}this.e=u
this.a.a.Y()
return!0},
aR:function(a,b){var u=b.a
if(u==null)throw H.c(P.t("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.t("May not replace a face's vertex with a vertex attached to a different shape."))},
gk_:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){var u,t
if(this.gbe())return a+"disposed"
u=a+C.c.ah(J.aw(this.a.e),0)+", "+C.c.ah(J.aw(this.b.e),0)+", "+C.c.ah(J.aw(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.H("")}}
F.hb.prototype={}
F.iy.prototype={
b0:function(a,b,c){var u,t
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
F.bq.prototype={
bd:function(){if(!this.gbe()){C.a.I(this.a.a.c.b,this)
this.a.a.Y()}this.cr()
this.cs()},
cv:function(a){this.a=a
C.a.h(a.c.b,this)},
cw:function(a){this.b=a
C.a.h(a.c.c,this)},
cr:function(){var u=this.a
if(u!=null){C.a.I(u.c.b,this)
this.a=null}},
cs:function(){var u=this.b
if(u!=null){C.a.I(u.c.c,this)
this.b=null}},
gbe:function(){return this.a==null||this.b==null},
aR:function(a,b){var u=b.a
if(u==null)throw H.c(P.t("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.t("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){if(this.gbe())return a+"disposed"
return a+C.c.ah(J.aw(this.a.e),0)+", "+C.c.ah(J.aw(this.b.e),0)},
R:function(){return this.H("")}}
F.hv.prototype={}
F.j1.prototype={
b0:function(a,b,c){var u,t
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
F.bN.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ah(J.aw(u.e),0)},
R:function(){return this.H("")}}
F.ec.prototype={
gC:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
b1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){q=u[r]
this.a.h(0,q.k5())}this.a.D()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){p=u[r]
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
n=new F.bN()
if(m.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.K(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){l=u[r]
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
F.nX(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){i=u[r]
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
F.c0(k,j,h)}u=this.e
if(u!=null)u.aA(0)},
al:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.al()||!1
if(!this.a.al())t=!1
u=this.e
if(u!=null)u.aA(0)
return t},
kq:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
if(b.b0(0,a,r))return r}return},
kp:function(a,b){return this.kq(a,b,0)},
iO:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.ac],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.q(P.t("May not replace a face's vertex when the point has been disposed."))
if(J.K(q,s)){r.aR(s,a)
q=r.a
if(q!=null){C.a.I(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.aR(s,a)
q=r.b
if(q!=null){C.a.I(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.K(r.c,s)){r.aR(s,a)
q=r.c
if(q!=null){C.a.I(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.q(P.t("May not replace a line's vertex when the point has been disposed."))
if(J.K(q,s)){r.aR(s,a)
q=r.a
if(q!=null){C.a.I(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.aR(s,a)
q=r.b
if(q!=null){C.a.I(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.q(P.t("May not replace a point's vertex when the point has been disposed."))
if(J.K(q,s)){if(a.a==null)H.q(P.t("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.I(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}this.a.I(0,s)}},
eT:function(a,b){var u,t,s,r,q,p,o,n
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.v(u,0)])
for(u=[F.ac];t.length!==0;){s=C.a.gks(t)
C.a.l0(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.D)(t),++p){o=t[p]
if(o!=null&&a.b0(0,s,o)){C.a.h(r,o)
C.a.I(t,o)}}if(r.length>1){n=b.b1(r)
if(n!=null){this.iO(n,r)
C.a.h(t,n)}}}}this.a.D()
this.c.bS()
this.d.bS()
this.b.l1()
this.c.d8(new F.j1())
this.d.d8(new F.iy())
u=this.e
if(u!=null)u.aA(0)},
jM:function(a){this.eT(new F.d5(),new F.i1())},
bx:function(){return this.jM(null)},
jV:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bz()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.by().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.bB().a)!==0)++r
if((s&$.dq().a)!==0)++r
if((s&$.dr().a)!==0)++r
if((s&$.cq().a)!==0)++r
if((s&$.bw().a)!==0)++r
q=a1.gdl(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.u
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dy])
for(m=0,l=0;l<r;++l){k=a1.jQ(l)
j=k.gdl(k)
C.a.n(n,l,new Z.dy(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kF(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aw(t,34962,e)
C.b.ed(t,34962,new Float32Array(H.cg(o)),35044)
C.b.aw(t,34962,null)
d=new Z.dz(new Z.ez(34962,e),n,a1)
d.shx(H.d([],[Z.bK]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.lu(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bK(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.lu(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bK(1,c.length,a))}if(this.d.b.length!==0){s=P.o
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
C.a.h(c,b.e)}a=Z.lu(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bK(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.H("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.H("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.H("   "))}return C.a.m(u,"\n")},
an:function(a){var u=this.e
if(u!=null)u.K(a)},
Y:function(){return this.an(null)},
$ipN:1}
F.ir.prototype={
bw:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.c0(b,c,d)},
jI:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ac],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.c0(s,p,o))}}return u},
jJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ac],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.c0(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c0(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c0(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c0(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
d8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b0(0,p,n)){p.bd()
break}}}}},
bS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gk_(s)
if(t)s.bd()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cH())s=!1
return s},
cG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cF())s=!1
return s},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
R:function(){return this.H("")},
shp:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")}}
F.is.prototype={
gl:function(a){return this.b.length},
d8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b0(0,p,n)){p.bd()
break}}}}},
bS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.bd()}},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].H(a+(""+s+". ")))}return C.a.m(u,"\n")},
R:function(){return this.H("")},
shB:function(a){this.b=H.k(a,"$ib",[F.bq],"$ab")}}
F.it.prototype={
gl:function(a){return this.b.length},
l1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.I(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.I(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
R:function(){return this.H("")},
sco:function(a){this.b=H.k(a,"$ib",[F.bN],"$ab")}}
F.ac.prototype={
cK:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.cd(this.cx,s,p,u,t,r,q,a,o)},
k5:function(){return this.cK(null)},
sa2:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sd2:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.K(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
seb:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.K(this.x,a)){this.x=a
u=this.a
if(u!=null)u.Y()}},
sb4:function(a){var u
if(!J.K(this.y,a)){this.y=a
u=this.a
if(u!=null)u.Y()}},
sbV:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sax:function(a,b){var u
if(!J.K(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.Y()}},
sfh:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.Y()}},
se9:function(a){var u
if(!J.K(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
kF:function(a){var u,t
if(a.A(0,$.bz())){u=this.f
t=[P.u]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.by())){u=this.r
t=[P.u]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bx())){u=this.x
t=[P.u]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bA())){u=this.y
t=[P.u]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bB())){u=this.z
t=[P.u]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dq())){u=this.Q
t=[P.u]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dr())){u=this.Q
if(u==null)return H.d([1,1,1,1],[P.u])
else return u.dc(0)}else if(a.A(0,$.cq()))return H.d([this.ch],[P.u])
else if(a.A(0,$.bw())){u=this.cx
t=[P.u]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.u])},
cH:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d4()
this.d.O(0,new F.jy(u))
u=u.a
this.r=u.u(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.Y()
u=this.a.e
if(u!=null)u.aA(0)}return!0},
cF:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d4()
this.d.O(0,new F.jx(u))
u=u.a
this.x=u.u(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.Y()
u=this.a.e
if(u!=null)u.aA(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
H:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.c.ah(J.aw(this.e),0))
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
C.a.h(u,V.U(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
R:function(){return this.H("")}}
F.jy.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jx.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jo.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.Y()
return!0},
jL:function(a,b,c,d,e,f,g,h,i){var u=F.cd(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jK:function(a,b,c,d,e,f){return this.jL(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
I:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.t("May not remove a vertex without first making it empty."))
b.a=null
C.a.I(this.c,b)
u.Y()
this.b=!0
return!0},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cH()
return!0},
cG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cF()
return!0},
jW:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
this.D()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
R:function(){return this.H("")},
sjj:function(a){this.c=H.k(a,"$ib",[F.ac],"$ab")}}
F.jp.prototype={
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
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.O(this.b,b)
C.a.O(this.c,new F.jq(this,b))
C.a.O(this.d,new F.jr(this,b))},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
R:function(){return this.H("")},
shq:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")},
shr:function(a){this.c=H.k(a,"$ib",[F.aa],"$ab")},
shs:function(a){this.d=H.k(a,"$ib",[F.aa],"$ab")}}
F.jq.prototype={
$1:function(a){H.f(a,"$iaa")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:7}
F.jr.prototype={
$1:function(a){var u
H.f(a,"$iaa")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:7}
F.jt.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
R:function(){return this.H("")},
shC:function(a){this.b=H.k(a,"$ib",[F.bq],"$ab")},
shD:function(a){this.c=H.k(a,"$ib",[F.bq],"$ab")}}
F.ju.prototype={}
F.d5.prototype={
b0:function(a,b,c){return J.K(b.f,c.f)}}
F.jv.prototype={}
F.js.prototype={
b1:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a4,"$ib",[F.ac],"$ab")
for(u=a4.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a4[h]
f=g.f
if(f!=null){s=s==null?f:new V.a_(s.a+f.a,s.b+f.b,s.c+f.c);++t}e=g.r
if(e!=null)r=r==null?e:new V.C(r.a+e.a,r.b+e.b,r.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.C(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){m=m==null?c:new V.a5(m.a+c.a,m.b+c.b);++n}b=g.z
if(b!=null){k=k==null?b:new V.C(k.a+b.a,k.b+b.b,k.c+b.c);++l}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(o==null){a=[a0,a1,a2,a]
o=new V.b0(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
o=new V.b0(o.a+a0,o.b+a1,o.c+a2,o.d+a)}++p}a=g.ch
if(typeof a!=="number")return H.G(a)
i+=a;++j}a3=F.cd(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a3.sa2(0,null)
else a3.sa2(0,s.u(0,t))
if(r==null)a3.sd2(null)
else a3.sd2(r.u(0,Math.sqrt(r.E(r))))
if(q==null)a3.seb(null)
else a3.seb(q.u(0,Math.sqrt(q.E(q))))
if(n<=0||m==null)a3.sb4(null)
else a3.sb4(m.u(0,n))
if(l<=0||k==null)a3.sbV(null)
else a3.sbV(k.u(0,l))
if(p<=0||o==null)a3.sax(0,null)
else{u=o.u(0,p)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sax(0,new V.aB(a,a0,a1,u))}if(j<=0)a3.sfh(0,0)
else a3.sfh(0,i/j)
return a3}}
F.i1.prototype={
b1:function(a){var u,t,s,r
H.k(a,"$ib",[F.ac],"$ab")
u=V.d4()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.C(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)a[s].sd2(u)
return}}
F.jw.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
H:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
R:function(){return this.H("")},
sco:function(a){this.b=H.k(a,"$ib",[F.bN],"$ab")}}
O.dY.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.W()
this.dy=u}return u},
a5:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.K(a)},
c4:function(){return this.a5(null)},
dY:function(a){H.f(a,"$iA")
this.a=null
this.a5(a)},
iR:function(){return this.dY(null)},
hR:function(a,b){var u=V.ap
u=new D.c3(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a5(u)},
hT:function(a,b){var u=V.ap
u=new D.c4(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a5(u)},
dG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a7(u.e.length+3,4)*4
s=C.f.a7(u.f.length+3,4)*4
r=C.f.a7(u.r.length+3,4)*4
q=C.f.a7(u.x.length+3,4)*4
p=C.f.a7(u.y.length+3,4)*4
o=C.f.a7(u.z.length+3,4)*4
n=C.f.a7(this.e.a.length+3,4)*4
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
a7=$.bz()
if(a0){b=$.by()
a7=new Z.bg(a7.a|b.a)}if(a1){b=$.bx()
a7=new Z.bg(a7.a|b.a)}if(a2){b=$.bA()
a7=new Z.bg(a7.a|b.a)}if(a3){b=$.bB()
a7=new Z.bg(a7.a|b.a)}if(a5){b=$.bw()
a7=new Z.bg(a7.a|b.a)}return new A.hL(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a1:function(a,b){H.k(a,"$ib",[T.cU],"$ab")
if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
C.a.h(a,b)}},
aB:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aA(u,u.length,0,[H.v(u,0)]);u.G();){t=u.d
t.toString
s=$.jn
if(s==null){s=new V.C(0,0,1)
$.jn=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dd(s)}}},
l3:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dG()
t=a4.fr.j(0,u.am)
if(t==null){t=A.o2(u,a4.a)
s=t.b
if(s.length===0)H.q(P.t("May not cache a shader with no name."))
if(a4.fr.by(0,s))H.q(P.t('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bA
u=a5.e
if(!(u instanceof Z.dz)){a5.e=null
u=null}if(u==null||!u.d.A(0,q)){u=r.r1
if(u)a5.d.al()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cG()
o.a.cG()
o=o.e
if(o!=null)o.aA(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jW()
n=n.e
if(n!=null)n.aA(0)}l=a5.d.jV(new Z.jB(a4.a),q)
l.b_($.bz()).e=this.a.Q.c
if(u)l.b_($.by()).e=this.a.cx.c
if(p)l.b_($.bx()).e=this.a.ch.c
if(r.rx)l.b_($.bA()).e=this.a.cy.c
if(o)l.b_($.bB()).e=this.a.db.c
if(r.x1)l.b_($.bw()).e=this.a.dx.c
a5.e=l}u=T.cU
k=H.d([],[u])
p=this.a
o=a4.a
C.b.ff(o,p.r)
p.x.km()
if(r.fx){p=this.a
n=a4.dx
n=n.ga4(n)
p=p.dy
p.toString
p.ap(n.ai(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga4(n)
m=a4.dx
m=n.v(0,m.ga4(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ap(n.ai(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkZ()
m=a4.dx
m=n.v(0,m.ga4(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ap(n.ai(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ap(C.r.ai(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ap(C.r.ai(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ap(C.r.ai(n,!0))}if(r.ay>0){j=this.e.a.length
p=this.a.k4
C.b.V(p.a,p.d,j)
for(p=[P.u],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.h(m,i)
m=m[i]
n.toString
H.f(m,"$iap")
n=n.r1
if(i>=n.length)return H.h(n,i)
n=n[i]
h=new Float32Array(H.cg(H.k(m.ai(0,!0),"$ib",p,"$ab")))
C.b.fd(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a1(k,this.f.d)
p=this.a
n=this.f.d
p.ak(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a1(k,this.f.e)
p=this.a
n=this.f.e
p.ae(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a1(k,this.r.d)
p=this.a
n=this.r.d
p.ak(p.y1,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a1(k,this.r.e)
p=this.a
n=this.r.e
p.ae(p.y2,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.am
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a1(k,this.x.d)
p=this.a
n=this.x.d
p.ak(p.bA,p.bB,n)
n=this.a
p=this.x.f
n=n.am
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a1(k,this.x.e)
p=this.a
n=this.x.e
p.ae(p.el,p.bB,n)
n=this.a
p=this.x.f
n=n.am
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bC
C.b.B(p.a,p.d,n.a,n.b,n.c)
break
case C.h:this.a1(k,this.y.d)
p=this.a
n=this.y.d
p.ak(p.em,p.bD,n)
n=this.a
p=this.y.f
n=n.bC
C.b.B(n.a,n.d,p.a,p.b,p.c)
break
case C.i:this.a1(k,this.y.e)
p=this.a
n=this.y.e
p.ae(p.en,p.bD,n)
n=this.a
p=this.y.f
n=n.bC
C.b.B(n.a,n.d,p.a,p.b,p.c)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bE
C.b.B(p.a,p.d,n.a,n.b,n.c)
n=this.a
p=this.z.ch
n=n.bG
C.b.T(n.a,n.d,p)
break
case C.h:this.a1(k,this.z.d)
p=this.a
n=this.z.d
p.ak(p.eo,p.bF,n)
n=this.a
p=this.z.f
n=n.bE
C.b.B(n.a,n.d,p.a,p.b,p.c)
p=this.a
n=this.z.ch
p=p.bG
C.b.T(p.a,p.d,n)
break
case C.i:this.a1(k,this.z.e)
p=this.a
n=this.z.e
p.ae(p.ep,p.bF,n)
n=this.a
p=this.z.f
n=n.bE
C.b.B(n.a,n.d,p.a,p.b,p.c)
p=this.a
n=this.z.ch
p=p.bG
C.b.T(p.a,p.d,n)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eB
C.b.V(p.a,p.d,j)
p=a4.db
g=p.ga4(p)
for(p=this.dx.e,n=p.length,f=0,e=0;e<p.length;p.length===n||(0,H.D)(p),++e){d=p[e]
m=this.a.cO
if(f>=m.length)return H.h(m,f)
c=m[f]
m=g.dd(d.a)
b=m.a
a=m.b
a0=m.c
a0=m.u(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.b
b=a0.a
m=a0.b
a0=a0.c
C.b.B(a.a,a.d,b,m,a0)
a0=d.c
m=c.c
C.b.B(m.a,m.d,a0.a,a0.b,a0.c);++f}}if(r.Q>0){j=this.dx.f.length
p=this.a.eC
C.b.V(p.a,p.d,j)
p=a4.db
g=p.ga4(p)
for(p=this.dx.f,n=p.length,f=0,e=0;e<p.length;p.length===n||(0,H.D)(p),++e){d=p[e]
m=this.a.cP
if(f>=m.length)return H.h(m,f)
c=m[f]
m=d.gbj(d)
b=c.b
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=g.bm(d.gbj(d))
b=c.c
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gax(d)
b=c.d
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gcz()
b=c.e
C.b.T(b.a,b.d,m)
m=d.gcA()
b=c.f
C.b.T(b.a,b.d,m)
m=d.gcB()
b=c.r
C.b.T(b.a,b.d,m);++f}}if(r.ch>0){j=this.dx.r.length
p=this.a.eD
C.b.V(p.a,p.d,j)
p=a4.db
g=p.ga4(p)
for(p=this.dx.r,n=p.length,f=0,e=0;e<p.length;p.length===n||(0,H.D)(p),++e){d=p[e]
m=this.a.cQ
if(f>=m.length)return H.h(m,f)
c=m[f]
m=d.gbj(d)
b=c.b
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gcM(d).lw()
b=c.c
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=g.bm(d.gbj(d))
b=c.d
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gax(d)
b=c.e
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.glr()
b=c.f
C.b.T(b.a,b.d,m)
m=d.glq()
b=c.r
C.b.T(b.a,b.d,m)
m=d.gcz()
b=c.x
C.b.T(b.a,b.d,m)
m=d.gcA()
b=c.y
C.b.T(b.a,b.d,m)
m=d.gcB()
b=c.z
C.b.T(b.a,b.d,m);++f}}if(r.cx>0){j=this.dx.x.length
p=this.a.eE
C.b.V(p.a,p.d,j)
p=a4.db
g=p.ga4(p)
for(p=this.dx.x,n=p.length,m=[u],f=0,e=0;e<p.length;p.length===n||(0,H.D)(p),++e){d=p[e]
b=this.a.cR
if(f>=b.length)return H.h(b,f)
c=b[f]
b=d.gbk()
H.k(k,"$ib",m,"$ab")
if(!C.a.a_(k,b)){b.a=k.length
C.a.h(k,b)}b=d.gcM(d)
a=c.d
C.b.B(a.a,a.d,b.a,b.b,b.c)
b=d.gbX()
a=c.b
C.b.B(a.a,a.d,b.a,b.b,b.c)
b=d.gbT(d)
a=c.c
C.b.B(a.a,a.d,b.a,b.b,b.c)
b=g.dd(d.gcM(d))
a=b.a
a0=b.b
a1=b.c
a1=b.u(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.b.B(a0.a,a0.d,a,b,a1)
a1=d.gax(d)
b=c.f
C.b.B(b.a,b.d,a1.a,a1.b,a1.c)
a1=d.gbk()
b=a1.gcZ(a1)
if(!b){b=c.x
C.b.V(b.a,b.d,1)}else{b=c.r
a=a1.d
a0=b.a
b=b.d
if(!a)C.b.V(a0,b,0)
else C.b.V(a0,b,a1.a)
b=c.x
C.b.V(b.a,b.d,0)}++f}}if(r.cy>0){j=this.dx.y.length
p=this.a.eF
C.b.V(p.a,p.d,j)
p=a4.db
g=p.ga4(p)
for(p=this.dx.y,n=p.length,m=[P.u],b=[u],f=0,e=0;e<p.length;p.length===n||(0,H.D)(p),++e){d=p[e]
a=this.a.cS
if(f>=a.length)return H.h(a,f)
c=a[f]
a=d.gbk()
H.k(k,"$ib",b,"$ab")
if(!C.a.a_(k,a)){a.a=k.length
C.a.h(k,a)}a2=g.v(0,d.ga4(d))
a=d.ga4(d)
a0=$.cN
if(a0==null){a0=new V.a_(0,0,0)
$.cN=a0}a0=a.bm(a0)
a=c.b
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cN
if(a==null){a=new V.a_(0,0,0)
$.cN=a}a=a2.bm(a)
a0=c.c
C.b.B(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eQ(0)
a0=c.d
h=new Float32Array(H.cg(H.k(new V.dZ(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ai(0,!0),"$ib",m,"$ab")))
C.b.fc(a0.a,a0.d,!1,h)
a0=d.gax(d)
a=c.e
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a0=d.gbk()
a=a0.gcZ(a0)
if(!a){a=c.r
C.b.V(a.a,a.d,1)}else{a=c.f
a1=a0.gcZ(a0)
a3=a.a
a=a.d
if(!a1)C.b.V(a3,a,0)
else C.b.V(a3,a,a0.glu(a0))
a=c.r
C.b.V(a.a,a.d,0)}a=d.gcz()
a0=c.x
C.b.T(a0.a,a0.d,a)
a=d.gcA()
a0=c.y
C.b.T(a0.a,a0.d,a)
a=d.gcB()
a0=c.z
C.b.T(a0.a,a0.d,a);++f}}if(r.db>0){j=this.dx.z.length
p=this.a.eG
C.b.V(p.a,p.d,j)
p=a4.db
g=p.ga4(p)
for(p=this.dx.z,n=p.length,u=[u],f=0,e=0;e<p.length;p.length===n||(0,H.D)(p),++e){d=p[e]
m=this.a.cT
if(f>=m.length)return H.h(m,f)
c=m[f]
m=d.gbk()
H.k(k,"$ib",u,"$ab")
if(!C.a.a_(k,m)){m.a=k.length
C.a.h(k,m)}m=d.gbj(d)
b=c.b
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gcM(d)
b=c.c
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gbX()
b=c.d
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gbT(d)
b=c.e
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=g.bm(d.gbj(d))
b=c.f
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.gbk()
b=m.gcZ(m)
if(!b){m=c.x
C.b.V(m.a,m.d,1)}else{b=c.r
a=m.d
a0=b.a
b=b.d
if(!a)C.b.V(a0,b,0)
else C.b.V(a0,b,m.a)
m=c.x
C.b.V(m.a,m.d,0)}m=d.gax(d)
b=c.y
C.b.B(b.a,b.d,m.a,m.b,m.c)
m=d.glx()
b=c.z
C.b.T(b.a,b.d,m)
m=d.gly()
b=c.Q
C.b.T(b.a,b.d,m)
m=d.gcz()
b=c.ch
C.b.T(b.a,b.d,m)
m=d.gcA()
b=c.cx
C.b.T(b.a,b.d,m)
m=d.gcB()
b=c.cy
C.b.T(b.a,b.d,m);++f}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.a1(k,this.Q.d)
u=this.a
p=this.Q.d
u.ak(u.eq,u.bH,p)
break
case C.i:this.a1(k,this.Q.e)
u=this.a
p=this.Q.e
u.ae(u.er,u.bH,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga4(p).eQ(0)
a4.Q=p}u=u.id
u.toString
u.ap(p.ai(0,!0))}if(r.dy){this.a1(k,this.ch)
u=this.a
p=this.ch
u.ae(u.es,u.eu,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bI
C.b.B(u.a,u.d,p.a,p.b,p.c)
break
case C.h:this.a1(k,this.cx.d)
u=this.a
p=this.cx.d
u.ak(u.ev,u.bJ,p)
p=this.a
u=this.cx.f
p=p.bI
C.b.B(p.a,p.d,u.a,u.b,u.c)
break
case C.i:this.a1(k,this.cx.e)
u=this.a
p=this.cx.e
u.ae(u.ew,u.bJ,p)
p=this.a
u=this.cx.f
p=p.bI
C.b.B(p.a,p.d,u.a,u.b,u.c)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bL
C.b.B(u.a,u.d,p.a,p.b,p.c)
p=this.a
u=this.cy.ch
p=p.bK
C.b.T(p.a,p.d,u)
break
case C.h:this.a1(k,this.cy.d)
u=this.a
p=this.cy.d
u.ak(u.ex,u.bM,p)
p=this.a
u=this.cy.f
p=p.bL
C.b.B(p.a,p.d,u.a,u.b,u.c)
u=this.a
p=this.cy.ch
u=u.bK
C.b.T(u.a,u.d,p)
break
case C.i:this.a1(k,this.cy.e)
u=this.a
p=this.cy.e
u.ae(u.ey,u.bM,p)
p=this.a
u=this.cy.f
p=p.bL
C.b.B(p.a,p.d,u.a,u.b,u.c)
u=this.a
p=this.cy.ch
u=u.bK
C.b.T(u.a,u.d,p)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bN
C.b.T(u.a,u.d,n)
break
case C.h:this.a1(k,this.db.d)
u=this.a
n=this.db.d
u.ak(u.ez,u.bO,n)
n=this.a
u=this.db.f
n=n.bN
C.b.T(n.a,n.d,u)
break
case C.i:this.a1(k,this.db.e)
u=this.a
n=this.db.e
u.ae(u.eA,u.bO,n)
n=this.a
u=this.db.f
n=n.bN
C.b.T(n.a,n.d,u)
break}C.b.cN(o,3042)
C.b.jU(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.e4(o,33984+u.a)
C.b.aY(o,3553,u.b)}}u=a5.e
u.cC(a4)
u.b2(a4)
u.lh(a4)
if(p)C.b.kh(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.e4(o,33984+u.a)
C.b.aY(o,3553,null)}}u=this.a
u.toString
C.b.ff(o,null)
u.x.ki()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dG().am},
shc:function(a){this.e=H.k(a,"$ia7",[V.ap],"$aa7")}}
O.hJ.prototype={
aH:function(){this.dn()
var u=this.f
if(!(Math.abs(u-1)<$.N().a)){this.f=1
u=new D.R(this.b,u,1,this,[P.u])
u.b=!0
this.a.a5(u)}}}
O.cF.prototype={
a5:function(a){this.a.a5(H.f(a,"$iA"))},
c4:function(){return this.a5(null)},
aH:function(){},
sb4:function(a){var u,t
u=this.c
if(u!==C.h){if(u===C.d)this.aH()
this.c=C.h
u=this.a
u.a=null
u.a5(null)}u=this.d
if(u!==a){if(u!=null)u.gC().I(0,this.gbr())
t=this.d
this.d=a
a.gC().h(0,this.gbr())
u=new D.R(this.b+".texture2D",t,this.d,this,[T.ek])
u.b=!0
this.a.a5(u)}}}
O.hK.prototype={}
O.b8.prototype={
aH:function(){var u,t
this.dn()
u=new V.af(1,1,1)
if(!this.f.A(0,u)){t=this.f
this.f=u
u=new D.R(this.b+".color",t,u,this,[V.af])
u.b=!0
this.a.a5(u)}}}
O.hM.prototype={
aH:function(){this.dq()
var u=this.ch
if(!(Math.abs(u-1)<$.N().a)){this.ch=1
u=new D.R(this.b+".refraction",u,1,this,[P.u])
u.b=!0
this.a.a5(u)}}}
O.hN.prototype={
aH:function(){this.dq()
var u=this.ch
if(!(Math.abs(u-100)<$.N().a)){this.ch=100
u=new D.R(this.b+".shininess",u,100,this,[P.u])
u.b=!0
this.a.a5(u)}}}
O.cc.prototype={}
T.cU.prototype={}
T.ek.prototype={}
T.iO.prototype={
gC:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u}}
T.iP.prototype={
kG:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aY(u,3553,t)
C.b.bU(u,3553,10242,33071)
C.b.bU(u,3553,10243,33071)
C.b.bU(u,3553,10241,9729)
C.b.bU(u,3553,10240,9729)
C.b.aY(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.iO()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.ad(s,"load",H.n(new T.iQ(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
eS:function(a){return this.kG(a,!1,!1,!1,!1)},
iS:function(a,b,c){var u,t,s,r
b=V.lK(b,2)
u=V.lK(a.width,2)
t=V.lK(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lf(null,null)
s.width=u
s.height=t
r=H.f(C.q.fn(s,"2d"),"$ibX")
r.imageSmoothingEnabled=!1;(r&&C.D).kk(r,a,0,0,s.width,s.height)
return P.pa(C.D.hw(r,0,0,s.width,s.height))}}}
T.iQ.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iS(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aY(t,3553,this.e)
C.b.kY(t,37440,this.f?1:0)
C.b.lb(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fi(t,3553)
C.b.aY(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kl()}++s.e},
$S:12}
V.bk.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dX.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.k(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.ay.prototype={
aL:function(a,b){return!this.fI(0,b)},
i:function(a){return"!["+this.dm(0)+"]"}}
V.id.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c8(this.a)
t=H.c8(this.b)
return u+".."+t},
$iaC:1}
V.ip.prototype={
fN:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a SetMatcher with zero characters."))
u=new H.aR([P.o,P.T])
for(t=new H.cE(a,a.gl(a),0,[H.av(a,"y",0)]);t.G();)u.n(0,t.d,!0)
this.siV(u)},
aL:function(a,b){return this.a.by(0,b)},
i:function(a){var u=this.a
return P.ef(u.ga8(u),0,null)},
siV:function(a){this.a=H.k(a,"$iF",[P.o,P.T],"$aF")},
$iaC:1}
V.cR.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cW(this.a.k(0,b))
r.sa9(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
kr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sje:function(a){this.c=H.k(a,"$ib",[V.cW],"$ab")}}
V.ep.prototype={
i:function(a){var u,t
u=H.lM(this.b,"\n","\\n")
t=H.lM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cV.prototype={
aM:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siL:function(a){var u=P.e
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.iT.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cR(this,b)
u.sje(H.d([],[V.cW]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cV(this,a)
t=P.e
u.siL(new H.aR([t,t]))
this.b.n(0,a,u)}return u},
fb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ep])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.J(a,o)
m=t.kr(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ef(r,0,null)
throw H.c(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ef(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ep(j==null?k.b:j,l,o)}++o}}},
sj3:function(a){this.a=H.k(a,"$iF",[P.e,V.cR],"$aF")},
sj7:function(a){this.b=H.k(a,"$iF",[P.e,V.cV],"$aF")}}
V.cW.prototype={
i:function(a){return this.b.b+": "+this.dm(0)}}
X.dB.prototype={$ibs:1}
X.hi.prototype={
gC:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u}}
X.e5.prototype={
gC:function(){var u=this.f
if(u==null){u=D.W()
this.f=u}return u},
aQ:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.K(a)},
h6:function(){return this.aQ(null)},
sbg:function(a){var u,t
if(!J.K(this.b,a)){u=this.b
if(u!=null)u.gC().I(0,this.gdu())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdu())
u=new D.R("mover",t,this.b,this,[U.aj])
u.b=!0
this.aQ(u)}},
$ibs:1,
$idB:1}
X.ei.prototype={}
V.bF.prototype={
bq:function(a){this.b=new P.hl(C.Y)
this.c=null
this.scc(H.d([],[[P.b,W.aH]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aH]))
t=a.split("\n")
for(u=t.length,s=[W.aH],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.J(p)
n=this.b.hh(p,0,p.length)
m=n==null?p:n
C.k.fz(o,H.lM(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
f0:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.scc(H.d([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bz()
this.c=t}for(t=t.fb(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)this.bR(t[r])},
scc:function(a){this.d=H.k(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.l4.prototype={
$1:function(a){H.f(a,"$ibd")
P.lL(C.e.fa(this.a.gkx(),2)+" fps")},
$S:51}
V.fY.prototype={
bR:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
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
bz:function(){var u,t,s,r
u=V.iU()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
s=V.a1("a","z")
C.a.h(t.a,s)
s=V.a1("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.w("_"))
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
s=V.x(new H.w("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a1("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a1("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.x(new H.w('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.x(new H.w('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.x(new H.w("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.x(new H.w('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bk())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.x(new H.w("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.x(new H.w("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.x(new H.w("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.x(new H.w("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bk())
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.w("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.w("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aC]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.ay()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.x(new H.w("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.x(new H.w(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.x(new H.w(" \n\t"))
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
t.aM(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aM(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aM(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hj.prototype={
bR:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
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
bz:function(){var u,t,s,r
u=V.iU()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
s=V.a1("a","z")
C.a.h(t.a,s)
s=V.a1("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.w("_"))
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
s=V.x(new H.w("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a1("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a1("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.w("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.w("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bk())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aC]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.w("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.ay()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.x(new H.w(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.x(new H.w(" \n\t"))
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
s.aM(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aM(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aM(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hk.prototype={
bR:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
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
bz:function(){var u,t,s
u=V.iU()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
s=V.a1("a","z")
C.a.h(t.a,s)
s=V.a1("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=V.a1("0","9")
C.a.h(s.a,t)
t=V.a1("a","z")
C.a.h(s.a,t)
t=V.a1("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.x(new H.w("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.x(new H.w("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.x(new H.w("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.x(new H.w('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.x(new H.w('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.x(new H.w("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.x(new H.w('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bk())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bk())
t=u.k(0,"Other").m(0,"Other")
s=new V.ay()
s.sa9(H.d([],[V.aC]))
C.a.h(t.a,s)
t=V.x(new H.w('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a1("a","z")
C.a.h(s.a,t)
t=V.a1("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.S("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.S("String")
t=u.k(0,"Id")
s=t.a.S("Id")
t.d=s
s.aM(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.S("Attr")
s=u.k(0,"Other")
s.d=s.a.S("Other")
return u}}
V.i7.prototype={
f0:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.scc(H.d([],[[P.b,W.aH]]))
this.P(C.a.m(b,"\n"),"#111")},
bR:function(a){},
bz:function(){return}}
V.ib.prototype={
bw:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mq().gd6().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.e2(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lU(this.c).h(0,q)
o=W.nR("radio")
o.checked=s
o.name=u
u=W.p
W.ad(o,"change",H.n(new V.ic(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.F(q,o)
n=r.createElement("span")
n.textContent=b
C.G.F(q,n)
J.lU(this.c).h(0,r.createElement("br"))},
at:function(a,b,c){return this.bw(a,b,c,!1)},
e2:function(a){var u,t,s,r,q
u=P.mq()
t=P.e
s=P.nZ(u.gd6(),t,t)
s.n(0,this.a,a)
r=u.f5(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iN(t,new P.kd([],[]).de(""),"",q)}}
V.ic.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e2(this.d)}},
$S:12}
V.iu.prototype={
fP:function(a,b){var u,t,s,r,q,p,o
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
W.ad(u,"scroll",H.n(new V.iw(s),{func:1,ret:-1,args:[o]}),!1,o)},
e6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fb(C.a.kD(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.pB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
C.k.F(t,l)}else{k=P.fk(C.J,n,C.m,!1)
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
fm:function(a){var u,t,s,r
u=new V.fY("dart")
u.bq("dart")
t=new V.hj("glsl")
t.bq("glsl")
s=new V.hk("html")
s.bq("html")
r=C.a.kt(H.d([u,t,s],[V.bF]),new V.ix(a))
if(r!=null)return r
u=new V.i7("plain")
u.bq("plain")
return u},
e5:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dp(r).a6(r,"+")){C.a.n(a7,s,C.c.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a6(r,"-")){C.a.n(a7,s,C.c.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fm(a5)
q.f0(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.fk(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lW(null)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.x.F(a,r[a0])
C.n.F(e,d)
C.n.F(e,c)
C.n.F(e,a)
C.o.F(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gX(r);a3.G();)C.x.F(c,a3.gN(a3))
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
jG:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.e],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.F(this.a,t)
r=C.o.hy(t,-1)
s=H.f((r&&C.n).dP(r,-1),"$ibc").style
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
o=H.f(C.n.dP(r,-1),"$ibc")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
iZ:function(){var u,t,s,r
if(this.b!=null)return
u=V.iU()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.ay()
r=[V.aC]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.ay()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.x(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.ay()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.x(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.x(new H.w("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.x(new H.w("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.ay()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.ay()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bk())
s=u.k(0,"Other").m(0,"Other")
t=new V.ay()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("*_`["))
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
V.iw.prototype={
$1:function(a){P.mm(C.y,new V.iv(this.a))},
$S:12}
V.iv.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.ix.prototype={
$1:function(a){return H.f(a,"$ibF").a===this.a},
$S:52}
M.kT.prototype={
$0:function(){this.a.sab(0,F.lG(1,null,null,1))},
$S:0}
M.kU.prototype={
$0:function(){this.a.sab(0,F.lG(8,null,null,8))},
$S:0}
M.kV.prototype={
$0:function(){this.a.sab(0,F.mW(1,!0,!0,1,40,1))},
$S:0}
M.kW.prototype={
$0:function(){this.a.sab(0,F.mW(1,!0,!1,1,40,0))},
$S:0}
M.kX.prototype={
$0:function(){this.a.sab(0,F.ps(10,20))},
$S:0}
M.kY.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.iq()
t=Math.sqrt(5)/2+0.5
s=F.at(u,new V.C(-1,t,0))
r=F.at(u,new V.C(1,t,0))
q=-t
p=F.at(u,new V.C(-1,q,0))
o=F.at(u,new V.C(1,q,0))
n=F.at(u,new V.C(0,-1,q))
m=F.at(u,new V.C(0,1,q))
l=F.at(u,new V.C(0,-1,t))
k=F.at(u,new V.C(0,1,t))
j=F.at(u,new V.C(t,0,1))
i=F.at(u,new V.C(t,0,-1))
h=F.at(u,new V.C(q,0,1))
g=F.at(u,new V.C(q,0,-1))
F.a3(u,s,g,m,2)
F.a3(u,s,m,r,2)
F.a3(u,s,r,k,2)
F.a3(u,s,k,h,2)
F.a3(u,s,h,g,2)
F.a3(u,r,m,i,2)
F.a3(u,m,g,n,2)
F.a3(u,g,h,p,2)
F.a3(u,h,k,l,2)
F.a3(u,k,r,j,2)
F.a3(u,o,i,n,2)
F.a3(u,o,n,p,2)
F.a3(u,o,p,l,2)
F.a3(u,o,l,j,2)
F.a3(u,o,j,i,2)
F.a3(u,n,i,m,2)
F.a3(u,p,n,g,2)
F.a3(u,l,p,h,2)
F.a3(u,j,l,k,2)
F.a3(u,i,j,r,2)
u.eT(new F.d5(),new F.js())
this.a.sab(0,u)},
$S:0}
M.kZ.prototype={
$0:function(){this.a.sab(0,F.n7(6,null,1,6))},
$S:0}
M.l_.prototype={
$0:function(){this.a.sab(0,F.pD(30,1,15,0.5))},
$S:0}
M.l0.prototype={
$0:function(){this.a.sab(0,F.pr(120,1,2,12,0.3,3))},
$S:0}
M.l1.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.e5("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.e5("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.fF=u.i
u=J.dQ.prototype
u.fH=u.i
u=P.i.prototype
u.fG=u.bY
u=W.V.prototype
u.c2=u.af
u=W.f2.prototype
u.fJ=u.av
u=O.cF.prototype
u.dn=u.aH
u=O.b8.prototype
u.dq=u.aH
u=V.dX.prototype
u.fI=u.aL
u.dm=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p4","oy",11)
u(P,"p5","oz",11)
u(P,"p6","oA",11)
t(P,"mV","p3",3)
s(W,"pk",4,null,["$4"],["oC"],20,0)
s(W,"pl",4,null,["$4"],["oD"],20,0)
var m
r(m=E.ax.prototype,"geZ",0,0,null,["$1","$0"],["f_","kP"],1,0)
r(m,"geX",0,0,null,["$1","$0"],["eY","kO"],1,0)
r(m,"geV",0,0,null,["$1","$0"],["eW","kL"],1,0)
q(m,"gkJ","kK",10)
q(m,"gkM","kN",10)
r(m=E.eo.prototype,"gdr",0,0,null,["$1","$0"],["dt","ds"],1,0)
p(m,"gl5","f6",3)
o(m=X.ev.prototype,"gi5","i6",15)
o(m,"ghU","hV",15)
o(m,"gi_","i0",4)
o(m,"gi9","ia",27)
o(m,"gi7","i8",27)
o(m,"gie","ig",4)
o(m,"gij","ik",4)
o(m,"gi3","i4",4)
o(m,"gih","ii",4)
o(m,"gi1","i2",4)
o(m,"gil","im",37)
o(m,"gio","ip",15)
o(m,"giB","iC",14)
o(m,"gix","iy",14)
o(m,"giz","iA",14)
r(D.bH.prototype,"gfU",0,0,null,["$1","$0"],["aD","fV"],1,0)
r(m=D.dT.prototype,"gdT",0,0,null,["$1","$0"],["dU","ib"],1,0)
o(m,"gir","is",39)
q(m,"ghO","hP",32)
q(m,"giv","iw",32)
n(V.X.prototype,"gl","bf",13)
n(V.C.prototype,"gl","bf",13)
n(V.b0.prototype,"gl","bf",13)
r(m=U.cB.prototype,"gaT",0,0,null,["$1","$0"],["U","aa"],1,0)
q(m,"ghM","hN",29)
q(m,"git","iu",29)
r(m=U.ew.prototype,"gaT",0,0,null,["$1","$0"],["U","aa"],1,0)
o(m,"gcf","cg",2)
o(m,"gci","cj",2)
o(m,"gck","cl",2)
r(m=U.ex.prototype,"gaT",0,0,null,["$1","$0"],["U","aa"],1,0)
o(m,"gcf","cg",2)
o(m,"gci","cj",2)
o(m,"gck","cl",2)
o(m,"ghF","hG",2)
o(m,"ghH","hI",2)
o(m,"gjc","jd",2)
o(m,"gja","jb",2)
o(m,"gj8","j9",2)
o(U.ey.prototype,"ghK","hL",2)
r(m=M.dH.prototype,"gar",0,0,null,["$1","$0"],["aE","fX"],1,0)
q(m,"ghW","hX",10)
q(m,"ghY","hZ",10)
r(m=O.dY.prototype,"gbr",0,0,null,["$1","$0"],["a5","c4"],1,0)
r(m,"giQ",0,0,null,["$1","$0"],["dY","iR"],1,0)
q(m,"ghQ","hR",30)
q(m,"ghS","hT",30)
r(O.cF.prototype,"gbr",0,0,null,["$1","$0"],["a5","c4"],1,0)
r(X.e5.prototype,"gdu",0,0,null,["$1","$0"],["aQ","h6"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.ll,J.a,J.aA,P.eQ,P.i,H.cE,P.b5,H.c1,H.d3,H.fR,H.ie,H.iZ,P.bI,H.cu,H.f7,P.ah,H.hw,H.hy,H.hr,P.fd,P.bi,P.aM,P.eA,P.iF,P.cS,P.iG,P.bd,P.an,P.ku,P.k7,P.ce,P.eP,P.y,P.kl,P.hE,P.bY,P.hm,P.ks,P.kq,P.T,P.ao,P.a6,P.b4,P.i5,P.ee,P.eI,P.hh,P.bJ,P.b,P.F,P.M,P.az,P.e,P.am,P.cf,P.je,P.ka,W.fU,W.bQ,W.E,W.e3,W.f2,W.kg,W.dI,W.aE,W.k6,W.fl,P.kc,P.fi,P.k1,P.S,O.a7,O.cG,E.fL,E.ax,E.ig,E.eo,Z.ez,Z.jB,Z.dz,Z.bK,Z.bg,D.fO,D.c_,D.A,X.dA,X.dR,X.ht,X.hB,X.aD,X.hU,X.iV,X.ev,D.bH,D.a9,D.e6,D.ed,D.el,D.em,D.en,V.af,V.aB,V.h7,V.dZ,V.ap,V.a5,V.a_,V.bb,V.ea,V.X,V.C,V.b0,U.ew,U.ex,U.ey,M.dH,A.dw,A.fE,A.hL,A.cX,A.d0,A.cZ,A.d1,A.d_,A.d2,A.bZ,A.er,A.j8,F.aa,F.hb,F.bq,F.hv,F.bN,F.ec,F.ir,F.is,F.it,F.ac,F.jo,F.jp,F.jt,F.ju,F.jv,F.jw,O.cc,O.cF,T.iP,V.bk,V.aC,V.dX,V.id,V.ip,V.cR,V.ep,V.cV,V.iT,X.dB,X.ei,X.e5,V.bF,V.ib,V.iu])
s(J.a,[J.hq,J.dP,J.dQ,J.aQ,J.bL,J.bo,H.cJ,H.bM,W.j,W.fC,W.bV,W.bX,W.b2,W.b3,W.Z,W.eC,W.fZ,W.h_,W.dE,W.eE,W.dG,W.eG,W.h1,W.p,W.eJ,W.aP,W.dL,W.eL,W.bn,W.dV,W.hO,W.eR,W.eS,W.aS,W.eT,W.eW,W.aT,W.f_,W.e8,W.f1,W.aV,W.f3,W.aW,W.f8,W.aJ,W.fb,W.iS,W.aY,W.fe,W.iX,W.jj,W.fm,W.fo,W.fq,W.fs,W.fu,P.b7,P.eN,P.ba,P.eY,P.ia,P.f9,P.be,P.fg,P.fF,P.eB,P.dx,P.dJ,P.e7,P.ca,P.eb,P.ej,P.es,P.f5])
s(J.dQ,[J.i6,J.bP,J.bp])
t(J.lk,J.aQ)
s(J.bL,[J.dO,J.dN])
t(P.hA,P.eQ)
s(P.hA,[H.et,W.jI,W.as,P.hd])
t(H.w,H.et)
s(P.i,[H.h4,H.hF,H.d6])
s(H.h4,[H.c5,H.hx])
s(P.b5,[H.hG,H.jC])
t(H.hH,H.c5)
t(H.fS,H.fR)
s(P.bI,[H.i2,H.hs,H.jc,H.j0,H.fN,H.im,P.e4,P.aO,P.jd,P.ja,P.cb,P.fQ,P.fX])
s(H.cu,[H.l9,H.iL,H.kM,H.kN,H.kO,P.jE,P.jD,P.jF,P.jG,P.kk,P.kj,P.jP,P.jT,P.jQ,P.jR,P.jS,P.jW,P.jX,P.jV,P.jU,P.iH,P.iI,P.kC,P.k4,P.k3,P.k5,P.hz,P.hD,P.kr,P.h2,P.h3,P.ji,P.jf,P.jg,P.jh,P.km,P.kn,P.kp,P.ko,P.ky,P.kx,P.kz,P.kA,W.h5,W.hQ,W.hS,W.il,W.iE,W.jO,W.i0,W.i_,W.k8,W.k9,W.ki,W.kt,P.ke,P.kE,P.he,P.hf,P.fH,E.ih,E.ii,E.ij,E.iR,D.h9,D.ha,F.kv,F.kF,F.kH,F.kI,F.kJ,F.kR,F.l5,F.l6,F.l8,F.kQ,F.kG,F.jy,F.jx,F.jq,F.jr,T.iQ,V.l4,V.ic,V.iw,V.iv,V.ix,M.kT,M.kU,M.kV,M.kW,M.kX,M.kY,M.kZ,M.l_,M.l0,M.l1])
s(H.iL,[H.iC,H.cs])
t(P.hC,P.ah)
s(P.hC,[H.aR,W.jH])
t(H.e0,H.bM)
s(H.e0,[H.da,H.dc])
t(H.db,H.da)
t(H.cK,H.db)
t(H.dd,H.dc)
t(H.e1,H.dd)
s(H.e1,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e2,H.cL])
t(P.k2,P.ku)
t(P.k0,P.k7)
t(P.fj,P.hE)
t(P.eu,P.fj)
s(P.bY,[P.fJ,P.h6])
t(P.bG,P.iG)
s(P.bG,[P.fK,P.hl,P.jm,P.jl])
t(P.jk,P.h6)
s(P.a6,[P.u,P.o])
s(P.aO,[P.c9,P.hn])
t(P.jK,P.cf)
s(W.j,[W.H,W.hc,W.aU,W.de,W.aX,W.aK,W.dg,W.jA,W.d7,P.fI,P.bU])
s(W.H,[W.V,W.bE,W.cx,W.d8])
s(W.V,[W.z,P.r])
s(W.z,[W.du,W.fD,W.cr,W.bD,W.bW,W.aH,W.hg,W.dK,W.cC,W.cD,W.dS,W.cH,W.io,W.bc,W.eg,W.eh,W.iK,W.cT])
s(W.b2,[W.cv,W.fV,W.fW])
t(W.fT,W.b3)
t(W.cw,W.eC)
t(W.eF,W.eE)
t(W.dF,W.eF)
t(W.eH,W.eG)
t(W.h0,W.eH)
t(W.aI,W.bV)
t(W.eK,W.eJ)
t(W.cz,W.eK)
t(W.eM,W.eL)
t(W.c2,W.eM)
t(W.dM,W.cx)
t(W.bO,W.p)
s(W.bO,[W.b6,W.ai,W.aZ])
t(W.hP,W.eR)
t(W.hR,W.eS)
t(W.eU,W.eT)
t(W.hT,W.eU)
t(W.eX,W.eW)
t(W.cM,W.eX)
t(W.f0,W.f_)
t(W.i8,W.f0)
t(W.ik,W.f1)
t(W.df,W.de)
t(W.iz,W.df)
t(W.f4,W.f3)
t(W.iA,W.f4)
t(W.iD,W.f8)
t(W.fc,W.fb)
t(W.iM,W.fc)
t(W.dh,W.dg)
t(W.iN,W.dh)
t(W.ff,W.fe)
t(W.iW,W.ff)
t(W.jz,W.cH)
t(W.bh,W.ai)
t(W.fn,W.fm)
t(W.jJ,W.fn)
t(W.eD,W.dG)
t(W.fp,W.fo)
t(W.jY,W.fp)
t(W.fr,W.fq)
t(W.eV,W.fr)
t(W.ft,W.fs)
t(W.kb,W.ft)
t(W.fv,W.fu)
t(W.kf,W.fv)
t(W.jL,W.jH)
t(W.jM,P.iF)
t(W.lv,W.jM)
t(W.jN,P.cS)
t(W.kh,W.f2)
t(P.kd,P.kc)
t(P.ab,P.k1)
t(P.eO,P.eN)
t(P.hu,P.eO)
t(P.eZ,P.eY)
t(P.i3,P.eZ)
t(P.cP,P.r)
t(P.fa,P.f9)
t(P.iJ,P.fa)
t(P.fh,P.fg)
t(P.iY,P.fh)
t(P.fG,P.eB)
t(P.i4,P.bU)
t(P.f6,P.f5)
t(P.iB,P.f6)
s(E.fL,[Z.dy,A.cQ,T.cU])
s(D.A,[D.c3,D.c4,D.R,X.i9])
s(X.i9,[X.dW,X.br,X.cI,X.eq])
s(O.a7,[D.dT,U.cB])
s(D.fO,[U.fP,U.aj])
t(U.dC,U.aj)
t(A.hI,A.cQ)
s(A.er,[A.P,A.j4,A.j5,A.j7,A.j2,A.a4,A.j3,A.O,A.j6,A.j9,A.cY,A.aF,A.aq,A.ar])
t(F.iy,F.hb)
t(F.j1,F.hv)
t(F.d5,F.ju)
s(F.jv,[F.js,F.i1])
t(O.dY,O.cc)
s(O.cF,[O.hJ,O.hK,O.b8])
s(O.b8,[O.hM,O.hN])
t(T.ek,T.cU)
t(T.iO,T.ek)
s(V.dX,[V.ay,V.cW])
t(X.hi,X.ei)
s(V.bF,[V.fY,V.hj,V.hk,V.i7])
u(H.et,H.d3)
u(H.da,P.y)
u(H.db,H.c1)
u(H.dc,P.y)
u(H.dd,H.c1)
u(P.eQ,P.y)
u(P.fj,P.kl)
u(W.eC,W.fU)
u(W.eE,P.y)
u(W.eF,W.E)
u(W.eG,P.y)
u(W.eH,W.E)
u(W.eJ,P.y)
u(W.eK,W.E)
u(W.eL,P.y)
u(W.eM,W.E)
u(W.eR,P.ah)
u(W.eS,P.ah)
u(W.eT,P.y)
u(W.eU,W.E)
u(W.eW,P.y)
u(W.eX,W.E)
u(W.f_,P.y)
u(W.f0,W.E)
u(W.f1,P.ah)
u(W.de,P.y)
u(W.df,W.E)
u(W.f3,P.y)
u(W.f4,W.E)
u(W.f8,P.ah)
u(W.fb,P.y)
u(W.fc,W.E)
u(W.dg,P.y)
u(W.dh,W.E)
u(W.fe,P.y)
u(W.ff,W.E)
u(W.fm,P.y)
u(W.fn,W.E)
u(W.fo,P.y)
u(W.fp,W.E)
u(W.fq,P.y)
u(W.fr,W.E)
u(W.fs,P.y)
u(W.ft,W.E)
u(W.fu,P.y)
u(W.fv,W.E)
u(P.eN,P.y)
u(P.eO,W.E)
u(P.eY,P.y)
u(P.eZ,W.E)
u(P.f9,P.y)
u(P.fa,W.E)
u(P.fg,P.y)
u(P.fh,W.E)
u(P.eB,P.ah)
u(P.f5,P.y)
u(P.f6,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bD.prototype
C.q=W.bW.prototype
C.D=W.bX.prototype
C.k=W.aH.prototype
C.U=W.dE.prototype
C.W=W.dK.prototype
C.X=W.dL.prototype
C.z=W.dM.prototype
C.Z=J.a.prototype
C.a=J.aQ.prototype
C.a_=J.dN.prototype
C.f=J.dO.prototype
C.r=J.dP.prototype
C.e=J.bL.prototype
C.c=J.bo.prototype
C.a6=J.bp.prototype
C.G=W.dS.prototype
C.ac=W.cM.prototype
C.M=J.i6.prototype
C.N=W.e8.prototype
C.b=P.ca.prototype
C.x=W.bc.prototype
C.o=W.eg.prototype
C.n=W.eh.prototype
C.C=J.bP.prototype
C.O=W.bh.prototype
C.P=W.d7.prototype
C.R=new P.fK(!1)
C.Q=new P.fJ(C.R)
C.S=new P.i5()
C.T=new P.jm()
C.l=new P.k2()
C.d=new A.bZ(0,"ColorSourceType.None")
C.j=new A.bZ(1,"ColorSourceType.Solid")
C.h=new A.bZ(2,"ColorSourceType.Texture2D")
C.i=new A.bZ(3,"ColorSourceType.TextureCube")
C.y=new P.b4(0)
C.V=new P.b4(5e6)
C.Y=new P.hm("element",!0,!1,!1,!1)
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
C.a7=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.u=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a8=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.I=H.d(u([]),[P.e])
C.a9=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.aa=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.L=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.ab=new H.fS(0,{},C.I,[P.e,P.e])
C.m=new P.jk(!1)})();(function staticFields(){$.b1=0
$.ct=null
$.lY=null
$.lz=!1
$.n0=null
$.mT=null
$.n6=null
$.kK=null
$.kP=null
$.lI=null
$.ch=null
$.dl=null
$.dm=null
$.lA=!1
$.a2=C.l
$.bm=null
$.li=null
$.m4=null
$.m3=null
$.m9=null
$.md=null
$.cN=null
$.mh=null
$.mt=null
$.mx=null
$.mv=null
$.mw=null
$.jn=null
$.mu=null
$.mA=null
$.mc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pJ","na",function(){return H.n_("_$dart_dartClosure")})
u($,"pK","lN",function(){return H.n_("_$dart_js")})
u($,"pQ","nb",function(){return H.bf(H.j_({
toString:function(){return"$receiver$"}}))})
u($,"pR","nc",function(){return H.bf(H.j_({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pS","nd",function(){return H.bf(H.j_(null))})
u($,"pT","ne",function(){return H.bf(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pW","nh",function(){return H.bf(H.j_(void 0))})
u($,"pX","ni",function(){return H.bf(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pV","ng",function(){return H.bf(H.mo(null))})
u($,"pU","nf",function(){return H.bf(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pZ","nk",function(){return H.bf(H.mo(void 0))})
u($,"pY","nj",function(){return H.bf(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qf","lO",function(){return P.ox()})
u($,"ql","ds",function(){return[]})
u($,"q1","nl",function(){return P.ou()})
u($,"qg","np",function(){return H.o3(H.cg(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qj","nr",function(){return P.oi("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qk","ns",function(){return P.oW()})
u($,"qh","nq",function(){return P.m6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"qi","lP",function(){return P.ln(P.e,P.bJ)})
u($,"q8","no",function(){return Z.aL(0)})
u($,"q2","nm",function(){return Z.aL(511)})
u($,"qa","bz",function(){return Z.aL(1)})
u($,"q9","by",function(){return Z.aL(2)})
u($,"q4","bx",function(){return Z.aL(4)})
u($,"qb","bA",function(){return Z.aL(8)})
u($,"qc","bB",function(){return Z.aL(16)})
u($,"q5","dq",function(){return Z.aL(32)})
u($,"q6","dr",function(){return Z.aL(64)})
u($,"q7","nn",function(){return Z.aL(96)})
u($,"qd","cq",function(){return Z.aL(128)})
u($,"q3","bw",function(){return Z.aL(256)})
u($,"pI","n9",function(){return new V.h7(1e-9)})
u($,"pH","N",function(){return $.n9()})})()
var v={mangledGlobalNames:{o:"int",u:"double",a6:"num",e:"String",T:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.M,args:[F.ac,P.u,P.u]},{func:1,ret:P.M,args:[D.A]},{func:1,ret:P.M,args:[F.aa]},{func:1,ret:P.M,args:[,,]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ax]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[W.p]},{func:1,ret:P.u},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:P.T,args:[W.V,P.e,P.e,W.bQ]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.T,args:[W.H]},{func:1,ret:P.M,args:[,]},{func:1,ret:V.a_,args:[P.u]},{func:1,ret:P.T,args:[W.aE]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[P.o,[P.i,U.aj]]},{func:1,ret:-1,args:[P.o,[P.i,V.ap]]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:-1,args:[P.o,[P.i,D.a9]]},{func:1,ret:W.V,args:[W.H]},{func:1,args:[W.p]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.M,args:[P.e,,]},{func:1,ret:P.T,args:[[P.i,D.a9]]},{func:1,ret:P.M,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.F,P.e,P.e],args:[[P.F,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.az]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.M,args:[P.bd]},{func:1,ret:P.T,args:[V.bF]},{func:1,args:[,P.e]},{func:1,ret:P.M,args:[P.a6]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cJ,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.cK,Float64Array:H.cK,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e2,CanvasPixelArray:H.e2,Uint8Array:H.cL,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fC,HTMLAnchorElement:W.du,HTMLAreaElement:W.fD,HTMLBaseElement:W.cr,Blob:W.bV,HTMLBodyElement:W.bD,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.bX,CDATASection:W.bE,CharacterData:W.bE,Comment:W.bE,ProcessingInstruction:W.bE,Text:W.bE,CSSNumericValue:W.cv,CSSUnitValue:W.cv,CSSPerspective:W.fT,CSSCharsetRule:W.Z,CSSConditionRule:W.Z,CSSFontFaceRule:W.Z,CSSGroupingRule:W.Z,CSSImportRule:W.Z,CSSKeyframeRule:W.Z,MozCSSKeyframeRule:W.Z,WebKitCSSKeyframeRule:W.Z,CSSKeyframesRule:W.Z,MozCSSKeyframesRule:W.Z,WebKitCSSKeyframesRule:W.Z,CSSMediaRule:W.Z,CSSNamespaceRule:W.Z,CSSPageRule:W.Z,CSSRule:W.Z,CSSStyleRule:W.Z,CSSSupportsRule:W.Z,CSSViewportRule:W.Z,CSSStyleDeclaration:W.cw,MSStyleCSSProperties:W.cw,CSS2Properties:W.cw,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fV,CSSUnparsedValue:W.fW,DataTransferItemList:W.fZ,HTMLDivElement:W.aH,XMLDocument:W.cx,Document:W.cx,DOMException:W.h_,DOMImplementation:W.dE,ClientRectList:W.dF,DOMRectList:W.dF,DOMRectReadOnly:W.dG,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.V,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aI,FileList:W.cz,FileWriter:W.hc,HTMLFormElement:W.hg,Gamepad:W.aP,HTMLHeadElement:W.dK,History:W.dL,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,HTMLDocument:W.dM,ImageData:W.bn,HTMLImageElement:W.cC,HTMLInputElement:W.cD,KeyboardEvent:W.b6,HTMLLabelElement:W.dS,Location:W.dV,HTMLAudioElement:W.cH,HTMLMediaElement:W.cH,MediaList:W.hO,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aS,MimeTypeArray:W.hT,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,DocumentFragment:W.H,ShadowRoot:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cM,RadioNodeList:W.cM,Plugin:W.aT,PluginArray:W.i8,Range:W.e8,RTCStatsReport:W.ik,HTMLSelectElement:W.io,SourceBuffer:W.aU,SourceBufferList:W.iz,SpeechGrammar:W.aV,SpeechGrammarList:W.iA,SpeechRecognitionResult:W.aW,Storage:W.iD,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bc,HTMLTableDataCellElement:W.bc,HTMLTableHeaderCellElement:W.bc,HTMLTableElement:W.eg,HTMLTableRowElement:W.eh,HTMLTableSectionElement:W.iK,HTMLTemplateElement:W.cT,TextTrack:W.aX,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iM,TextTrackList:W.iN,TimeRanges:W.iS,Touch:W.aY,TouchEvent:W.aZ,TouchList:W.iW,TrackDefaultList:W.iX,CompositionEvent:W.bO,FocusEvent:W.bO,TextEvent:W.bO,UIEvent:W.bO,URL:W.jj,HTMLVideoElement:W.jz,VideoTrackList:W.jA,WheelEvent:W.bh,Window:W.d7,DOMWindow:W.d7,Attr:W.d8,CSSRuleList:W.jJ,ClientRect:W.eD,DOMRect:W.eD,GamepadList:W.jY,NamedNodeMap:W.eV,MozNamedAttrMap:W.eV,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kf,SVGLength:P.b7,SVGLengthList:P.hu,SVGNumber:P.ba,SVGNumberList:P.i3,SVGPointList:P.ia,SVGScriptElement:P.cP,SVGStringList:P.iJ,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGTransform:P.be,SVGTransformList:P.iY,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.fI,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.i4,WebGLBuffer:P.dx,WebGLFramebuffer:P.dJ,WebGLProgram:P.e7,WebGL2RenderingContext:P.ca,WebGLShader:P.eb,WebGLTexture:P.ej,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iB})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.e1.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.n3,[])
else M.n3([])})})()
//# sourceMappingURL=test.dart.js.map
