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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ly(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ld:function ld(a){this.a=a},
kH:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hl:function(){return new P.c9("No element")},
nT:function(){return new P.c9("Too many elements")},
nS:function(){return new P.c9("Too few elements")},
v:function v(a){this.a=a},
h1:function h1(){},
c2:function c2(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hC:function hC(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.$ti=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
jy:function jy(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d0:function d0(){},
er:function er(){},
nJ:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
cm:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pj:function(a){return v.types[H.ai(a)]},
pq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iK},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
og:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hm(u)
t=u[0]
s=u[1]
return new H.ib(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cL:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
od:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.H(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
c5:function(a){return H.o4(a)+H.lv(H.bR(a),0,null)},
o4:function(a){var u,t,s,r,q,p,o,n,m
u=J.W(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibN){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cm(r.length>1&&C.c.H(r,0)===36?C.c.aq(r,1):r)},
o5:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q
H.kN(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oe:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.as(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aV(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.as(r))}return H.mc(u)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.oe(a)}return H.mc(a)},
of:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aV(u,10))>>>0,56320|u&1023)}}throw H.c(P.ae(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oc:function(a){var u=H.c4(a).getFullYear()+0
return u},
oa:function(a){var u=H.c4(a).getMonth()+1
return u},
o6:function(a){var u=H.c4(a).getDate()+0
return u},
o7:function(a){var u=H.c4(a).getHours()+0
return u},
o9:function(a){var u=H.c4(a).getMinutes()+0
return u},
ob:function(a){var u=H.c4(a).getSeconds()+0
return u},
o8:function(a){var u=H.c4(a).getMilliseconds()+0
return u},
I:function(a){throw H.c(H.as(a))},
h:function(a,b){if(a==null)J.aC(a)
throw H.c(H.ch(a,b))},
ch:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
u=H.ai(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.I(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,"index",null,u)
return P.e5(b,"index",null)},
pc:function(a,b,c){if(a>c)return new P.c7(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
as:function(a){return new P.aK(!0,a,null,null)},
p7:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.e0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n6})
u.name=""}else u.toString=H.n6
return u},
n6:function(){return J.au(this.dartException)},
t:function(a){throw H.c(a)},
C:function(a){throw H.c(P.bj(a))},
bd:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m7:function(a,b){return new H.i_(a,b==null?null:b.method)},
le:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hp(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.l1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aV(s,16)&8191)===10)switch(r){case 438:return u.$1(H.le(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m7(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.na()
p=$.nb()
o=$.nc()
n=$.nd()
m=$.ng()
l=$.nh()
k=$.nf()
$.ne()
j=$.nj()
i=$.ni()
h=q.ae(t)
if(h!=null)return u.$1(H.le(H.H(t),h))
else{h=p.ae(t)
if(h!=null){h.method="call"
return u.$1(H.le(H.H(t),h))}else{h=o.ae(t)
if(h==null){h=n.ae(t)
if(h==null){h=m.ae(t)
if(h==null){h=l.ae(t)
if(h==null){h=k.ae(t)
if(h==null){h=n.ae(t)
if(h==null){h=j.ae(t)
if(h==null){h=i.ae(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m7(H.H(t),h))}}return u.$1(new H.j8(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.eb()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aK(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.eb()
return a},
ck:function(a){var u
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
pf:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pp:function(a,b,c,d,e,f){H.f(a,"$ibF")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
H.ai(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pp)
a.$identity=u
return u},
nI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.W(d).$ib){u.$reflectionInfo=d
s=H.og(u).r}else s=d
r=e?Object.create(new H.iy().constructor.prototype):Object.create(new H.cp(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b_
if(typeof p!=="number")return p.p()
$.b_=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lU(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pj,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lS:H.l7
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lU(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nF:function(a,b,c,d){var u=H.l7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nH(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nF(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cq
if(q==null){q=H.fJ("self")
$.cq=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cq
if(q==null){q=H.fJ("self")
$.cq=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
nG:function(a,b,c,d){var u,t
u=H.l7
t=H.lS
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
nH:function(a,b){var u,t,s,r,q,p,o,n
u=$.cq
if(u==null){u=H.fJ("self")
$.cq=u}t=$.lR
if(t==null){t=H.fJ("receiver")
$.lR=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nG(r,!p,s,b)
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
ly:function(a,b,c,d,e,f,g){return H.nI(a,b,H.ai(c),d,!!e,!!f,g)},
l7:function(a){return a.a},
lS:function(a){return a.c},
fJ:function(a){var u,t,s,r,q
u=new H.cp("self","target","receiver","name")
t=J.hm(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
pd:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
pv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
lw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
n4:function(a,b){throw H.c(H.aY(a,H.cm(H.H(b).substring(2))))},
px:function(a,b){throw H.c(H.nE(a,H.cm(H.H(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.n4(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.px(a,b)},
kN:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
n1:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.n4(a,b)},
mY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
ft:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mY(J.W(a))
if(u==null)return!1
return H.mL(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ls)return a
$.ls=!0
try{if(H.ft(a,b))return a
u=H.kX(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.ls=!1}},
lA:function(a,b){if(a!=null&&!H.lx(a,b))H.t(H.aY(a,H.kX(b)))
return a},
aY:function(a,b){return new H.iX("TypeError: "+P.h5(a)+": type '"+H.mQ(a)+"' is not a subtype of type '"+b+"'")},
nE:function(a,b){return new H.fK("CastError: "+P.h5(a)+": type '"+H.mQ(a)+"' is not a subtype of type '"+b+"'")},
mQ:function(a){var u,t
u=J.W(a)
if(!!u.$icr){t=H.mY(u)
if(t!=null)return H.kX(t)
return"Closure"}return H.c5(a)},
pC:function(a){throw H.c(new P.fU(H.H(a)))},
ok:function(a){return new H.ij(a)},
mZ:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
qm:function(a,b,c){return H.cl(a["$a"+H.l(c)],H.bR(b))},
bQ:function(a,b,c,d){var u
H.H(c)
H.ai(d)
u=H.cl(a["$a"+H.l(c)],H.bR(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.H(b)
H.ai(c)
u=H.cl(a["$a"+H.l(b)],H.bR(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ai(b)
u=H.bR(a)
return u==null?null:u[b]},
kX:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cm(a[0].name)+H.lv(a,1,b)
if(typeof a=="function")return H.cm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
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
if(l!=null&&l!==P.R)o+=" extends "+H.bP(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bP(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bP(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bP(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pe(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bP(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lv:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dj:function(a,b,c,d){var u,t
H.H(b)
H.kN(c)
H.H(d)
if(a==null)return!1
u=H.bR(a)
t=J.W(a)
if(t[b]==null)return!1
return H.mT(H.cl(t[d],u),null,c,null)},
k:function(a,b,c,d){H.H(b)
H.kN(c)
H.H(d)
if(a==null)return a
if(H.dj(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cm(b.substring(2))+H.lv(c,0,null),v.mangledGlobalNames)))},
mT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
qk:function(a,b,c){return a.apply(b,H.cl(J.W(b)["$a"+H.l(c)],H.bR(b)))},
n0:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="L"||a===-1||a===-2||H.n0(u)}return!1},
lx:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="L"||b===-1||b===-2||H.n0(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ft(a,b)}u=J.W(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lx(a,b))throw H.c(H.aY(a,H.kX(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mL(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aJ("type" in a?a.type:null,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cy" in t.prototype))return!1
r=t.prototype["$a"+"cy"]
q=H.cl(r,u?a.slice(1):null)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mT(H.cl(m,u),b,p,d)},
mL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pu(h,b,g,d)},
pu:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aJ(c[r],d,a[r],b))return!1}return!0},
ql:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
ps:function(a){var u,t,s,r,q,p
u=H.H($.n_.$1(a))
t=$.kG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kL[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.mS.$2(a,u))
if(u!=null){t=$.kG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kL[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kW(s)
$.kG[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kL[u]=s
return s}if(q==="-"){p=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.n3(a,s)
if(q==="*")throw H.c(P.j7(u))
if(v.leafTags[u]===true){p=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.n3(a,s)},
n3:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lC(a,!1,null,!!a.$iK)},
pt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kW(u)
else return J.lC(u,c,null,null)},
pn:function(){if(!0===$.lB)return
$.lB=!0
H.po()},
po:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kL=Object.create(null)
H.pm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n5.$1(q)
if(p!=null){o=H.pt(q,u[q],p)
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
u=H.cf(C.a0,H.cf(C.a5,H.cf(C.E,H.cf(C.E,H.cf(C.a4,H.cf(C.a1,H.cf(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.n_=new H.kI(q)
$.mS=new H.kJ(p)
$.n5=new H.kK(o)},
cf:function(a,b){return a(b)||b},
nV:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lE:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fO:function fO(){},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ib:function ib(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i_:function i_(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
l1:function l1(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
cr:function cr(){},
iH:function iH(){},
iy:function iy(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a){this.a=a},
fK:function fK(a){this.a=a},
ij:function ij(a){this.a=a},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hu:function hu(a,b){this.a=a
this.$ti=b},
hv:function hv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
o3:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ch(b,a))},
oV:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pc(a,b,c))
return b},
cG:function cG(){},
bJ:function bJ(){},
dX:function dX(){},
cH:function cH(){},
dY:function dY(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
dZ:function dZ(){},
cI:function cI(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
pe:function(a){return J.m0(a?Object.keys(a):[],null)},
pw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fv:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lB==null){H.pn()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.j7("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lG()]
if(q!=null)return q
q=H.ps(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lG(),{value:C.B,enumerable:false,writable:true,configurable:true})
return C.B}return C.B},
nU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ae(a,0,4294967295,"length",null))
return J.m0(new Array(a),b)},
m0:function(a,b){return J.hm(H.d(a,[b]))},
hm:function(a){H.kN(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.dM.prototype
if(typeof a=="boolean")return J.hn.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
pg:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
cj:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
fu:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
ph:function(a){if(typeof a=="number")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bN.prototype
return a},
pi:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bN.prototype
return a},
dk:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bN.prototype
return a},
ad:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
ns:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pg(a).p(a,b)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).v(a,b)},
lJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pi(a).D(a,b)},
nt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ph(a).t(a,b)},
lK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cj(a).j(a,b)},
l3:function(a,b,c){return J.fu(a).n(a,b,c)},
nu:function(a,b){return J.dk(a).H(a,b)},
fx:function(a,b){return J.ad(a).iz(a,b)},
l4:function(a,b,c){return J.ad(a).iD(a,b,c)},
nv:function(a,b,c,d){return J.ad(a).jA(a,b,c,d)},
lL:function(a,b){return J.ad(a).E(a,b)},
nw:function(a,b){return J.dk(a).a1(a,b)},
fy:function(a,b){return J.fu(a).K(a,b)},
nx:function(a,b,c,d){return J.ad(a).kk(a,b,c,d)},
lM:function(a,b){return J.fu(a).O(a,b)},
ny:function(a){return J.ad(a).gjL(a)},
lN:function(a){return J.ad(a).gcu(a)},
dp:function(a){return J.W(a).gJ(a)},
by:function(a){return J.fu(a).gX(a)},
aC:function(a){return J.cj(a).gl(a)},
nz:function(a){return J.ad(a).gl6(a)},
l5:function(a,b){return J.ad(a).b0(a,b)},
lO:function(a){return J.fu(a).kW(a)},
nA:function(a,b){return J.ad(a).l0(a,b)},
nB:function(a,b,c){return J.ad(a).fi(a,b,c)},
nC:function(a,b,c){return J.dk(a).u(a,b,c)},
nD:function(a){return J.dk(a).ld(a)},
au:function(a){return J.W(a).i(a)},
a:function a(){},
hn:function hn(){},
dM:function dM(){},
dN:function dN(){},
i3:function i3(){},
bN:function bN(){},
bn:function bn(){},
aN:function aN(a){this.$ti=a},
lc:function lc(a){this.$ti=a},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bH:function bH(){},
dL:function dL(){},
dK:function dK(){},
bm:function bm(){}},P={
ox:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.p4()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cg(new P.jA(u),1)).observe(t,{childList:true})
return new P.jz(u,t,s)}else if(self.setImmediate!=null)return P.p5()
return P.p6()},
oy:function(a){self.scheduleImmediate(H.cg(new P.jB(H.n(a,{func:1,ret:-1})),0))},
oz:function(a){self.setImmediate(H.cg(new P.jC(H.n(a,{func:1,ret:-1})),0))},
oA:function(a){P.lj(C.x,H.n(a,{func:1,ret:-1}))},
lj:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a7(a.a,1000)
return P.oG(u<0?0:u,b)},
mm:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bb]})
u=C.f.a7(a.a,1000)
return P.oH(u<0?0:u,b)},
oG:function(a,b){var u=new P.fa(!0)
u.fS(a,b)
return u},
oH:function(a,b){var u=new P.fa(!1)
u.fT(a,b)
return u},
oB:function(a,b){var u,t,s
b.a=1
try{a.eW(new P.jM(b),new P.jN(b),null)}catch(s){u=H.aj(s)
t=H.ck(s)
P.py(new P.jO(b,u,t))}},
mA:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaI")
if(u>=4){t=b.cb()
b.a=a.a
b.c=a.c
P.d5(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.dG(t)}},
d5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$ian")
t=t.b
p=q.a
o=q.b
t.toString
P.kx(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d5(u.a,b)}t=u.a
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
P.kx(null,null,t,p,o)
return}j=$.a0
if(j!=l)$.a0=l
else j=null
t=b.c
if(t===8)new P.jS(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jR(s,b,m).$0()}else if((t&2)!==0)new P.jQ(u,s,b).$0()
if(j!=null)$.a0=j
t=s.b
if(!!J.W(t).$icy){if(t.a>=4){i=H.f(o.c,"$ibg")
o.c=null
b=o.bp(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mA(t,o)
return}}h=b.b
i=H.f(h.c,"$ibg")
h.c=null
b=h.bp(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.f(p,"$ian")
h.a=8
h.c=p}u.a=h
t=h}},
p_:function(a,b){if(H.ft(a,{func:1,args:[P.R,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.R,P.aw]})
if(H.ft(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.l6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oZ:function(){var u,t
for(;u=$.ce,u!=null;){$.di=null
t=u.b
$.ce=t
if(t==null)$.dh=null
u.a.$0()}},
p3:function(){$.lt=!0
try{P.oZ()}finally{$.di=null
$.lt=!1
if($.ce!=null)$.lH().$1(P.mU())}},
mP:function(a){var u=new P.ex(H.n(a,{func:1,ret:-1}))
if($.ce==null){$.dh=u
$.ce=u
if(!$.lt)$.lH().$1(P.mU())}else{$.dh.b=u
$.dh=u}},
p2:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ce
if(u==null){P.mP(a)
$.di=$.dh
return}t=new P.ex(a)
s=$.di
if(s==null){t.b=u
$.di=t
$.ce=t}else{t.b=s.b
s.b=t
$.di=t
if(t.b==null)$.dh=t}},
py:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a0
if(C.l===t){P.kz(null,null,C.l,a)
return}t.toString
P.kz(null,null,t,H.n(t.cp(a),u))},
ml:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.lj(a,b)}return P.lj(a,H.n(t.cp(b),u))},
oo:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bb]}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.mm(a,b)}s=t.dW(b,P.bb)
$.a0.toString
return P.mm(a,H.n(s,u))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.p2(new P.ky(u,e))},
mM:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mN:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
p0:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kz:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cp(d):c.jM(d,-1)
P.mP(d)},
jA:function jA(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
fa:function fa(a){this.a=a
this.b=null
this.c=0},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
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
jL:function jL(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jT:function jT(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
iB:function iB(){},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
cP:function cP(){},
iC:function iC(){},
bb:function bb(){},
an:function an(a,b){this.a=a
this.b=b},
kq:function kq(){},
ky:function ky(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a,b,c,d,e){return new H.aO([d,e])},
lf:function(a,b){return new H.aO([a,b])},
nZ:function(a){return H.pf(a,new H.aO([null,null]))},
dR:function(a,b,c,d){return new P.jX([d])},
lp:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oF:function(a,b,c){var u=new P.eM(a,b,[c])
u.c=a.e
return u},
nR:function(a,b,c){var u,t
if(P.lu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dn()
C.a.h(t,a)
try{P.oY(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.mj(b,H.n1(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lb:function(a,b,c){var u,t,s
if(P.lu(a))return b+"..."+c
u=new P.am(b)
t=$.dn()
C.a.h(t,a)
try{s=u
s.a=P.mj(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lu:function(a){var u,t
for(u=0;t=$.dn(),u<t.length;++u)if(a===t[u])return!0
return!1},
oY:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.l(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.F();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nY:function(a,b,c){var u=P.nX(null,null,null,b,c)
a.O(0,new P.hw(u,b,c))
return u},
m1:function(a,b){var u,t,s
u=P.dR(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.A(a[s],b))
return u},
lg:function(a){var u,t
u={}
if(P.lu(a))return"{...}"
t=new P.am("")
try{C.a.h($.dn(),a)
t.a+="{"
u.a=!0
J.lM(a,new P.hA(u,t))
t.a+="}"}finally{u=$.dn()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jX:function jX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(){},
y:function y(){},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
af:function af(){},
kh:function kh(){},
hB:function hB(){},
es:function es(a,b){this.a=a
this.$ti=b},
k3:function k3(){},
eN:function eN(){},
fg:function fg(){},
os:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.ot(!1,b,c,d)
return},
ot:function(a,b,c,d){var u,t,s
u=$.nk()
if(u==null)return
t=0===c
if(t&&!0)return P.lm(u,b)
s=b.length
d=P.bq(c,d,s,null,null,null)
if(t&&d===s)return P.lm(u,b)
return P.lm(u,b.subarray(c,d))},
lm:function(a,b){if(P.ov(b))return
return P.ow(a,b)},
ow:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
ov:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
ou:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
p1:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cj(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bQ()
if((s&127)!==s)return t-b}return c-b},
lQ:function(a,b,c,d,e,f){if(C.f.bh(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fG:function fG(a){this.a=a},
fH:function fH(a){this.a=a},
bW:function bW(){},
bC:function bC(){},
h3:function h3(){},
hj:function hj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hi:function hi(a){this.a=a},
jg:function jg(a){this.a=a},
ji:function ji(){},
ko:function ko(a){this.b=this.a=0
this.c=a},
jh:function jh(a){this.a=a},
km:function km(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.od(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nO:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.c5(a)+"'"},
o_:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nU(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
m2:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.by(a);s.F();)C.a.h(t,H.A(s.gM(s),c))
if(b)return t
return H.k(J.hm(t),"$ib",u,"$ab")},
ed:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaN",[u],"$aaN")
t=a.length
c=P.bq(b,c,t,null,null,null)
return H.md(b>0||c<t?C.a.fo(a,b,c):a)}if(!!J.W(a).$icI)return H.of(a,b,P.bq(b,c,a.length,null,null,null))
return P.om(a,b,c)},
om:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ae(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ae(c,b,J.aC(a),null,null))
t=J.by(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.ae(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.ae(c,b,s,null,null))
r.push(t.gM(t))}return H.md(r)},
oi:function(a,b,c){return new H.ho(a,H.nV(a,!1,!0,!1))},
mj:function(a,b,c){var u=J.by(b)
if(!u.F())return a
if(c.length===0){do a+=H.l(u.gM(u))
while(u.F())}else{a+=H.l(u.gM(u))
for(;u.F();)a=a+c+H.l(u.gM(u))}return a},
mp:function(){var u=H.o5()
if(u!=null)return P.or(u,0,null)
throw H.c(P.G("'Uri.base' is not supported"))},
fh:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nq().b
if(typeof b!=="string")H.t(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.at(c,"bW",0))
t=c.gkj().cv(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c6(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nK:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
lX:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nO(a)},
dr:function(a){return new P.aK(!1,null,null,a)},
l6:function(a,b,c){return new P.aK(!0,a,b,c)},
e5:function(a,b,c){return new P.c7(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c,d,e,f){if(typeof a!=="number")return H.I(a)
if(0>a||a>c)throw H.c(P.ae(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ae(b,a,c,"end",f))
return b}return c},
Z:function(a,b,c,d,e){var u=H.ai(e==null?J.aC(b):e)
return new P.hk(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.j9(a)},
j7:function(a){return new P.j6(a)},
mi:function(a){return new P.c9(a)},
bj:function(a){return new P.fN(a)},
w:function(a){return new P.eF(a)},
a7:function(a,b,c){return new P.he(a,b,c)},
o0:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
aZ:function(a){H.pw(a)},
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.mo(b>0||c<c?C.c.u(a,b,c):a,5,null).gf0()
else if(t===32)return P.mo(C.c.u(a,u,c),0,null).gf0()}s=new Array(8)
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
if(P.mO(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.ln()
if(q>=b)if(P.mO(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a_()
if(typeof m!=="number")return H.I(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.ab(a,"..",n)))i=m>n+2&&C.c.ab(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ab(a,"file",b)){if(p<=b){if(!C.c.ab(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b_(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ab(a,"http",b)){if(s&&o+3===n&&C.c.ab(a,"80",o+1))if(b===0&&!0){a=C.c.b_(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ab(a,"https",b)){if(s&&o+4===n&&C.c.ab(a,"443",o+1))if(b===0&&!0){a=C.c.b_(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.k6(a,q,p,o,n,m,l,j)}return P.oI(a,b,c,q,p,o,n,m,l,j)},
mr:function(a,b){var u=P.e
return C.a.kp(H.d(a.split("&"),[u]),P.lf(u,u),new P.je(b),[P.E,P.e,P.e])},
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jb(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a1(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fw(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.ff()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fw(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.ff()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jc(a)
t=new P.jd(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a1(a,r)
if(n===58){if(r===b){++r
if(C.c.a1(a,r)!==58)u.$2("invalid start colon.",r)
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
g+=2}else{d=C.f.aV(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oI:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oP(a,b,d)
else{if(d===b)P.de(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oQ(a,u,e-1):""
s=P.oM(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.I(g)
q=r<g?P.oO(P.fw(C.c.u(a,r,g),new P.ki(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oN(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.lq(a,h+1,i,null):null
return new P.cc(j,t,s,q,p,o,i<c?P.oL(a,i+1,c):null)},
mE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
de:function(a,b,c){throw H.c(P.a7(c,a,b))},
oO:function(a,b){if(a!=null&&a===P.mE(b))return
return a},
oM:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.a1(a,u)!==93)P.de(a,b,"Missing end `]` to match `[` in host")
P.mq(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.I(c)
t=b
for(;t<c;++t)if(C.c.a1(a,t)===58){P.mq(a,b,c)
return"["+a+"]"}return P.oS(a,b,c)},
oS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.I(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a1(a,u)
if(q===37){p=P.mK(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.am("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.am("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.de(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mF(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oP:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mH(C.c.H(a,b)))P.de(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.de(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.oJ(t?a.toLowerCase():a)},
oJ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oQ:function(a,b,c){return P.df(a,b,c,C.a9,!1)},
oN:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.df(a,b,c,C.L,!0):C.D.lr(d,new P.kj(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a6(r,"/"))r="/"+r
return P.oR(r,e,f)},
oR:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a6(a,"/"))return P.oT(a,!u||c)
return P.oU(a)},
lq:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.dr("Both query and queryParameters specified"))
return P.df(a,b,c,C.t,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.O(0,new P.kk(new P.kl(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oL:function(a,b,c){return P.df(a,b,c,C.t,!0)},
mK:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a1(a,b+1)
s=C.c.a1(a,u)
r=H.kH(t)
q=H.kH(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aV(p,4)
if(u>=8)return H.h(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c6(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
mF:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iV(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.ed(t,0,null)},
df:function(a,b,c,d,e){var u=P.mJ(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.u(a,b,c):u},
mJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.I(c)
if(!(t<c))break
c$0:{q=C.c.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mK(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.de(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mF(q)}}if(r==null)r=new P.am("")
r.a+=C.c.u(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.I(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mI:function(a){if(C.c.a6(a,"."))return!0
return C.c.ew(a,"/.")!==-1},
oU:function(a){var u,t,s,r,q,p,o
if(!P.mI(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.S(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oT:function(a,b){var u,t,s,r,q,p
if(!P.mI(a))return!b?P.mG(a):a
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
C.a.n(u,0,P.mG(u[0]))}return C.a.m(u,"/")},
mG:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mH(J.nu(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oK:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dr("Invalid URL encoding"))}}return u},
lr:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.v(C.c.u(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.H(a,t)
if(s>127)throw H.c(P.dr("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dr("Truncated URI"))
C.a.h(q,P.oK(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.jh(!1).cv(q)},
mH:function(a){var u=a|32
return 97<=u&&u<=122},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.ab(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kE(0,a,n,t)
else{m=P.mJ(a,n,t,C.t,!0)
if(m!=null)a=C.c.b_(a,n,t,m)}return new P.ja(a,u,c)},
oW:function(){var u,t,s,r,q
u=P.o0(22,new P.ku(),!0,P.T)
t=new P.kt(u)
s=new P.kv()
r=new P.kw()
q=H.f(t.$2(0,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iT")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iT")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iT"),"]",5)
q=H.f(t.$2(9,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iT"),"az",21)
q=H.f(t.$2(21,245),"$iT")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mO:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nr()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
U:function U(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
b2:function b2(a){this.a=a},
h_:function h_(){},
h0:function h0(){},
bE:function bE(){},
e0:function e0(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hk:function hk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j9:function j9(a){this.a=a},
j6:function j6(a){this.a=a},
c9:function c9(a){this.a=a},
fN:function fN(a){this.a=a},
i2:function i2(){},
eb:function eb(){},
fU:function fU(a){this.a=a},
eF:function eF(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
o:function o(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
E:function E(){},
L:function L(){},
a5:function a5(){},
R:function R(){},
aw:function aw(){},
e:function e(){},
am:function am(a){this.a=a},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(){},
kt:function kt(a){this.a=a},
kv:function kv(){},
kw:function kw(){},
k6:function k6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jG:function jG(a,b,c,d,e,f,g,h){var _=this
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
u=J.W(a)
if(!!u.$ibl){t=u.ge0(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ff(a.data,a.height,a.width)},
p9:function(a){if(a instanceof P.ff)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.n(0,q,a[q])}return u},
p8:function(a,b){var u={}
a.O(0,new P.kA(u))
return u},
k8:function k8(){},
ka:function ka(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(){},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jY:function jY(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hr:function hr(){},
b8:function b8(){},
i0:function i0(){},
i7:function i7(){},
cM:function cM(){},
iF:function iF(){},
q:function q(){},
bc:function bc(){},
iU:function iU(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
T:function T(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
fF:function fF(){},
bS:function bS(){},
i1:function i1(){},
ey:function ey(){},
dt:function dt(){},
dG:function dG(){},
e3:function e3(){},
c8:function c8(){},
e8:function e8(){},
eh:function eh(){},
eq:function eq(){},
ix:function ix(){},
f2:function f2(){},
f3:function f3(){}},W={
lP:function(a){var u=document.createElement("a")
return u},
l8:function(a,b){var u=document.createElement("canvas")
return u},
nM:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ad(u,a,b,c)
t.toString
u=W.F
u=new H.d2(new W.ar(t),H.n(new W.h2(),{func:1,ret:P.U,args:[u]}),[u])
return H.f(u.gaP(u),"$iV")},
nN:function(a){H.f(a,"$ij")
return"wheel"},
cv:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nz(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aj(s)}return u},
nQ:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icB")
try{u.type=a}catch(s){H.aj(s)}return u},
jV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mC:function(a,b,c,d){var u,t
u=W.jV(W.jV(W.jV(W.jV(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mR(new W.jK(c),W.p)
if(u!=null&&!0)J.nv(a,b,u,!1)
return new W.jJ(a,b,u,!1,[e])},
mB:function(a){var u,t
u=W.lP(null)
t=window.location
u=new W.bO(new W.k2(u,t))
u.fH(a)
return u},
oC:function(a,b,c,d){H.f(a,"$iV")
H.H(b)
H.H(c)
H.f(d,"$ibO")
return!0},
oD:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.H(b)
H.H(c)
u=H.f(d,"$ibO").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mD:function(){var u,t,s,r,q
u=P.e
t=P.m1(C.z,u)
s=H.u(C.z,0)
r=H.n(new W.ke(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kd(t,P.dR(null,null,null,u),P.dR(null,null,null,u),P.dR(null,null,null,u),null)
t.fR(null,new H.hE(C.z,r,[s,u]),q,null)
return t},
mR:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.l)return a
return u.dW(a,b)},
z:function z(){},
fz:function fz(){},
dq:function dq(){},
fA:function fA(){},
co:function co(){},
bT:function bT(){},
bz:function bz(){},
bU:function bU(){},
bV:function bV(){},
bA:function bA(){},
cs:function cs(){},
fQ:function fQ(){},
X:function X(){},
ct:function ct(){},
fR:function fR(){},
b0:function b0(){},
b1:function b1(){},
fS:function fS(){},
fT:function fT(){},
fW:function fW(){},
aD:function aD(){},
cu:function cu(){},
fX:function fX(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
fY:function fY(){},
fZ:function fZ(){},
jE:function jE(a,b){this.a=a
this.b=b},
V:function V(){},
h2:function h2(){},
p:function p(){},
j:function j(){},
aE:function aE(){},
cx:function cx(){},
h9:function h9(){},
hd:function hd(){},
aM:function aM(){},
dH:function dH(){},
dI:function dI(){},
c_:function c_(){},
dJ:function dJ(){},
bl:function bl(){},
cA:function cA(){},
cB:function cB(){},
b4:function b4(){},
dP:function dP(){},
dS:function dS(){},
cF:function cF(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(a){this.a=a},
hO:function hO(){},
hP:function hP(a){this.a=a},
aP:function aP(){},
hQ:function hQ(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
F:function F(){},
cJ:function cJ(){},
aR:function aR(){},
i5:function i5(){},
e4:function e4(){},
ih:function ih(){},
ii:function ii(a){this.a=a},
ik:function ik(){},
aS:function aS(){},
iv:function iv(){},
aT:function aT(){},
iw:function iw(){},
aU:function aU(){},
iz:function iz(){},
iA:function iA(a){this.a=a},
aF:function aF(){},
ba:function ba(){},
ee:function ee(){},
ef:function ef(){},
iG:function iG(){},
cQ:function cQ(){},
aV:function aV(){},
aG:function aG(){},
iI:function iI(){},
iJ:function iJ(){},
iO:function iO(){},
aW:function aW(){},
aX:function aX(){},
iS:function iS(){},
iT:function iT(){},
bM:function bM(){},
jf:function jf(){},
jv:function jv(){},
jw:function jw(){},
bf:function bf(){},
d3:function d3(){},
d4:function d4(){},
jF:function jF(){},
eA:function eA(){},
jU:function jU(){},
eS:function eS(){},
k7:function k7(){},
kb:function kb(){},
jD:function jD(){},
jH:function jH(a){this.a=a},
jI:function jI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lo:function lo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jK:function jK(a){this.a=a},
bO:function bO(a){this.a=a},
D:function D(){},
e_:function e_(a){this.a=a},
hY:function hY(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(){},
k4:function k4(){},
k5:function k5(){},
kd:function kd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ke:function ke(){},
kc:function kc(){},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aA:function aA(){},
k2:function k2(a,b){this.a=a
this.b=b},
fi:function fi(a){this.a=a},
kp:function kp(a){this.a=a},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
da:function da(){},
db:function db(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
dc:function dc(){},
dd:function dd(){},
fb:function fb(){},
fc:function fc(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){}},O={
l9:function(a){var u=new O.a6([a])
u.bW(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cE:function cE(){this.b=this.a=null},
dV:function dV(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cD:function cD(){},
hH:function hH(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hJ:function hJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hK:function hK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ca:function ca(){}},E={
m_:function(a,b,c,d,e,f){var u=new E.ao()
u.a=d
u.b=!0
u.sfG(0,O.l9(E.ao))
u.y.bi(u.gkF(),u.gkI())
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
u.saj(0,e)
u.saf(c)
return u},
oj:function(a,b){var u=new E.ic(a,b)
u.fA(a,b)
return u},
on:function(a,b,c,d,e){var u,t,s,r
u=J.W(a)
if(!!u.$ibU)return E.mk(a,!0,!0,!0,!1)
t=W.l8(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcu(a).h(0,t)
r=E.mk(t,!0,!0,!0,!1)
r.a=a
return r},
mk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.em()
t=H.f(C.q.d_(a,"webgl2",P.nZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic8")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oj(t,a)
s=new T.iL(t)
s.b=H.ai((t&&C.b).d1(t,3379))
s.c=H.ai(C.b.d1(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.et(a)
r=new X.hq()
r.c=new X.aQ(!1,!1,!1)
r.siv(P.dR(null,null,null,P.o))
s.b=r
r=new X.hR(s)
r.f=0
r.r=V.bL()
r.x=V.bL()
r.Q=1
r.ch=1
s.c=r
r=new X.hy(s)
r.r=0
r.x=V.bL()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iR(s)
r.e=0
r.f=V.bL()
r.r=V.bL()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shb(H.d([],[[P.cP,P.R]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.ghR(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.ghX(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.ghL(),m),!1,n))
r=s.z
l=W.b4
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.gi0(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.ghZ(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.gi4(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.gi8(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.gi6(),o),!1,p))
l=s.z
k=W.bf;(l&&C.a).h(l,W.ac(a,H.H(W.nN(a)),H.n(s.gia(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.ghT(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.ghV(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.gic(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.gis(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.gio(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.giq(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ay(Date.now(),!1)
u.cy=0
u.dI()
return u},
fI:function fI(){},
ao:function ao(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ec:function ec(a,b){this.c=a
this.a=b
this.b=null},
em:function em(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iN:function iN(a){this.a=a}},Z={
ln:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aw(a,b,u)
C.b.dY(a,b,new Int16Array(H.cd(c)),35044)
C.b.aw(a,b,null)
return new Z.ew(b,u)},
aH:function(a){return new Z.be(a)},
ew:function ew(a,b){this.a=a
this.b=b},
du:function du(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jx:function jx(a){this.a=a},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
Y:function(){var u=new D.bY()
u.sak(null)
u.saT(null)
u.c=null
u.d=0
return u},
fL:function fL(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
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
N:function N(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
lW:function(a,b){var u=new D.bD()
u.c=new V.a1(1,1,1)
u.a=V.mz()
u.saf(b)
u.saa(0,a)
return u},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dQ:function dQ(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e2:function e2(){},
ea:function ea(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){}},X={dw:function dw(a,b){this.a=a
this.b=b},dO:function dO(a,b){this.a=a
this.b=b},hq:function hq(){var _=this
_.d=_.c=_.b=_.a=null},dT:function dT(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hy:function hy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hR:function hR(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i6:function i6(){},eo:function eo(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iR:function iR(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},et:function et(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nP:function(a,b,c,d,e,f,g){var u,t
u=new X.hf()
t=new V.aL(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.mf
if(t==null){t=V.me(0,0,1,1)
$.mf=t}u.r=t
return u},
dx:function dx(){},
hf:function hf(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){}},V={
l2:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bh(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.c.ag("null",c)
return C.c.ag(C.e.eX(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
ci:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.ag(u[p],s))}return u},
lD:function(a,b){return C.e.la(Math.pow(b,C.a_.cI(Math.log(H.p7(a))/Math.log(b))))},
o2:function(a){return new V.c3(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
dW:function(){var u=$.m6
if(u==null){u=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m6=u}return u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lh:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m4:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m5:function(a,b,c,d){d=V.my()
return V.m3(V.mb(),d,new V.J(a,b,c))},
m3:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.C(0,Math.sqrt(c.I(c)))
t=b.aJ(u)
s=t.C(0,Math.sqrt(t.I(t)))
r=u.aJ(s)
q=new V.J(a.a,a.b,a.c)
p=s.W(0).I(q)
o=r.W(0).I(q)
n=u.W(0).I(q)
return V.b7(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bL:function(){var u=$.ma
if(u==null){u=new V.aa(0,0)
$.ma=u}return u},
mb:function(){var u=$.cK
if(u==null){u=new V.a4(0,0,0)
$.cK=u}return u},
me:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e6(a,b,c,d)},
d1:function(){var u=$.mx
if(u==null){u=new V.J(0,0,0)
$.mx=u}return u},
my:function(){var u=$.mw
if(u==null){u=new V.J(0,1,0)
$.mw=u}return u},
mz:function(){var u=$.jj
if(u==null){u=new V.J(0,0,1)
$.jj=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(a){this.a=a},
c3:function c3(a,b,c,d,e,f,g,h,i){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.ia()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.il()
u.fB(a)
return u},
iQ:function(){var u,t
u=new V.iP()
t=P.e
u.siX(new H.aO([t,V.cO]))
u.sj0(new H.aO([t,V.cS]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dU:function dU(){},
av:function av(){this.a=null},
ia:function ia(){this.b=this.a=null},
il:function il(){this.a=null},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a,b){this.a=a
this.b=b
this.c=null},
iP:function iP(){this.c=this.b=this.a=null},
cT:function cT(a){this.b=a
this.a=this.c=null},
pz:function(a){P.oo(C.V,new V.kY(a))},
ol:function(a,b){var u=new V.iq()
u.fD(a,!0)
return u},
bB:function bB(){},
kY:function kY(a){this.a=a},
fV:function fV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hg:function hg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hh:function hh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i4:function i4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i8:function i8(a,b){this.a=a
this.b=b
this.c=null},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(){this.b=this.a=null},
is:function is(a){this.a=a},
ir:function ir(a){this.a=a},
it:function it(a){this.a=a}},U={
lV:function(){var u=new U.fM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
dz:function(a){var u=new U.dy()
u.a=a
return u},
mg:function(a,b,c,d,e,f){var u,t
u=new U.e7()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sf4(f)
u.seM(0,d)
u.seS(e)
t=u.d
if(!(Math.abs(t-c)<$.M().a)){u.d=c
t=new D.N("deltaYaw",t,c,u,[P.r])
t.b=!0
u.U(t)}t=u.e
if(!(Math.abs(t-a)<$.M().a)){u.e=a
t=new D.N("deltaPitch",t,a,u,[P.r])
t.b=!0
u.U(t)}t=u.f
if(!(Math.abs(t-b)<$.M().a)){u.f=b
t=new D.N("deltaRoll",t,b,u,[P.r])
t.b=!0
u.U(t)}return u},
ms:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.eu()
t=U.lV()
t.sf3(0,!0)
t.seA(6.283185307179586)
t.seC(0)
t.sa5(0,0)
t.seB(100)
t.sa3(0)
t.se_(0.5)
u.b=t
s=u.gbl()
t.gB().h(0,s)
t=U.lV()
t.sf3(0,!0)
t.seA(6.283185307179586)
t.seC(0)
t.sa5(0,0)
t.seB(100)
t.sa3(0)
t.se_(0.5)
u.c=t
t.gB().h(0,s)
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
t=new D.N("modifiers",q,r,u,[X.aQ])
t.b=!0
u.U(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.N("invertX",t,!1,u,[P.U])
t.b=!0
u.U(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.N("invertY",t,!1,u,[P.U])
t.b=!0
u.U(t)}u.jK(c)
return u},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){this.b=this.a=null},
cz:function cz(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
al:function al(){},
e7:function e7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eu:function eu(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dE:function dE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o1:function(a,b){var u,t
u=a.am
t=new A.hF(b,u)
t.fC(b,u)
t.fz(a,b)
return t},
lk:function(a,b,c,d,e){var u=new A.iZ(a,b,c,e)
u.f=d
u.sjb(P.o_(d,0,!1,P.o))
return u},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
hF:function hF(a,b){var _=this
_.bv=_.e3=_.bu=_.am=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ej=_.cB=_.ei=_.bI=_.eh=_.eg=_.bH=_.bG=_.ef=_.ee=_.bF=_.bE=_.bD=_.ed=_.ec=_.bC=_.eb=_.ea=_.bB=_.e9=_.e8=_.bA=_.bz=_.e7=_.e6=_.by=_.bx=_.e5=_.e4=_.bw=null
_.cG=_.en=_.cF=_.em=_.cE=_.el=_.cD=_.ek=_.cC=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hI:function hI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bu=b5},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cW:function cW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cZ:function cZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cX:function cX(a,b,c,d,e,f,g,h,i,j){var _=this
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
d_:function d_(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cN:function cN(){},
bX:function bX(a,b){this.a=a
this.b=b},
ep:function ep(){},
j4:function j4(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d){var _=this
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
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
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
lz:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.li()
F.dg(u,b,c,d,a,1,0,0,1)
F.dg(u,b,c,d,a,0,1,0,3)
F.dg(u,b,c,d,a,0,0,1,2)
F.dg(u,b,c,d,a,-1,0,0,0)
F.dg(u,b,c,d,a,0,-1,0,0)
F.dg(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
ks:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u.d=t}g=F.ks(t)
f=F.ks(u.b)
e=F.lF(d,a0,new F.kr(u,F.ks(u.c),F.ks(u.d),f,g,c),b)
if(e!=null)a.ba(e)},
mX:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.li()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ah])
q=u.a
p=new V.J(0,0,t)
p=p.C(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jD(new V.b9(a,-1,-1,-1),new V.aL(1,1,1,1),new V.a4(0,0,d),new V.J(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.I(k)
j=new V.J(m,l,t).C(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ev(new V.b9(a,-1,-1,-1),null,new V.aL(i,g,h,1),new V.a4(m*k,l*k,d),new V.J(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jB(r)
return u},
mV:function(a,b,c,d,e,f){return F.pb(!0,c,d,new F.kB(a,f),e)},
pb:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lF(c,e,new F.kD(d),null)
if(u==null)return
u.ax()
u.ck()
if(b)u.ba(F.mX(3,!1,!1,1,new F.kE(d),e))
u.ba(F.mX(1,!0,!1,-1,new F.kF(d),e))
return u},
pA:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kZ()
t=F.lz(a,null,new F.l_(u,c),d)
t.ck()
return t},
n7:function(a,b,c,d){return F.mW(c,a,d,b,new F.l0())},
pr:function(a,b,c,d,e,f){return F.mW(d,a,e,b,new F.kM(f,c))},
mW:function(a,b,c,d,e){var u
H.n(e,{func:1,ret:V.a4,args:[P.r]})
P.aZ("FLAG 1\n")
u=F.lF(a,b,new F.kC(e,d,b,c),null)
if(u==null)return
P.aZ("FLAG 2\n")
u.ax()
P.aZ("FLAG 3\n")
u.ck()
P.aZ("FLAG 4\n")
return u},
lF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.li()
t=H.d([],[F.ah])
P.aZ("FLAG A\n")
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ev(null,null,new V.aL(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cw(d))}P.aZ("FLAG B\n")
for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ev(null,null,new V.aL(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cw(d))}}P.aZ("FLAG C\n")
u.d.jC(a+1,b+1,t)
P.aZ("FLAG D\n")
return u},
cw:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.ci(a)
u.cj(b)
u.iQ(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
nW:function(a,b){var u,t
u=new F.bo()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.ci(a)
u.cj(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
li:function(){var u,t
u=new F.e9()
t=new F.jk(u)
t.b=!1
t.sjc(H.d([],[F.ah]))
u.a=t
t=new F.ip(u)
t.sc9(H.d([],[F.bK]))
u.b=t
t=new F.io(u)
t.sho(H.d([],[F.bo]))
u.c=t
t=new F.im(u)
t.shc(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
ev:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ah()
t=new F.js(u)
t.sc9(H.d([],[F.bK]))
u.b=t
t=new F.jo(u)
s=[F.bo]
t.shp(H.d([],s))
t.shq(H.d([],s))
u.c=t
t=new F.jl(u)
s=[F.a9]
t.shd(H.d([],s))
t.she(H.d([],s))
t.shf(H.d([],s))
u.d=t
h=$.nl()
u.e=0
t=$.bv()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bu().a)!==0?e:null
u.x=(s&$.bt().a)!==0?b:null
u.y=(s&$.bw().a)!==0?f:null
u.z=(s&$.bx().a)!==0?g:null
u.Q=(s&$.nm().a)!==0?c:null
u.ch=(s&$.cn().a)!==0?i:0
u.cx=(s&$.bs().a)!==0?a:null
return u},
kr:function kr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kB:function kB(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kZ:function kZ(){},
l_:function l_(a,b){this.a=a
this.b=b},
l0:function l0(){},
kM:function kM(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(){},
iu:function iu(){},
bo:function bo(){this.b=this.a=null},
hs:function hs(){},
iY:function iY(){},
bK:function bK(){this.a=null},
e9:function e9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){this.a=a
this.b=null},
io:function io(a){this.a=a
this.b=null},
ip:function ip(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ju:function ju(a){this.a=a},
jt:function jt(a){this.a=a},
jk:function jk(a){this.a=a
this.c=this.b=null},
jl:function jl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a
this.c=this.b=null},
jq:function jq(){},
jp:function jp(){},
jr:function jr(){},
hZ:function hZ(){},
js:function js(a){this.a=a
this.b=null}},T={cR:function cR(){},ei:function ei(){},iK:function iK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},iL:function iL(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iM:function iM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
n2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=V.ol("Test 026",!0)
t=W.l8(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.e]
u.dS(H.d(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],s))
u.jz(H.d(["shapes"],s))
u.dS(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.y.d0(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.on(r,!0,!0,!0,!1)
p=D.lW(null,null)
p.saf(U.dz(V.m5(0.3,0.4,1,null)))
o=D.lW(null,null)
o.saf(U.dz(V.m5(-0.3,-0.4,-1,null)))
o.saa(0,new V.a1(0.125,0.125,0.125))
n=new O.dV()
n.sh_(O.l9(V.ak))
n.e.bi(n.ghH(),n.ghJ())
m=new O.b6(n,"emission")
m.c=C.d
m.f=new V.a1(0,0,0)
n.f=m
m=new O.b6(n,"ambient")
m.c=C.d
m.f=new V.a1(0,0,0)
n.r=m
m=new O.b6(n,"diffuse")
m.c=C.d
m.f=new V.a1(0,0,0)
n.x=m
m=new O.b6(n,"invDiffuse")
m.c=C.d
m.f=new V.a1(0,0,0)
n.y=m
m=new O.hK(n,"specular")
m.c=C.d
m.f=new V.a1(0,0,0)
m.ch=100
n.z=m
m=new O.hH(n,"bump")
m.c=C.d
n.Q=m
n.ch=null
m=new O.b6(n,"reflect")
m.c=C.d
m.f=new V.a1(0,0,0)
n.cx=m
m=new O.hJ(n,"refract")
m.c=C.d
m.f=new V.a1(0,0,0)
m.ch=1
n.cy=m
m=new O.hG(n,"alpha")
m.c=C.d
m.f=1
n.db=m
m=new D.dQ()
m.bW(D.a8)
m.sh8(H.d([],[D.bD]))
m.siu(H.d([],[D.e2]))
m.siW(H.d([],[D.ea]))
m.sj8(H.d([],[D.ej]))
m.sj9(H.d([],[D.ek]))
m.sja(H.d([],[D.el]))
m.Q=null
m.ch=null
m.d3(m.ghF(),m.gih(),m.gil())
n.dx=m
l=m.Q
if(l==null){l=D.Y()
m.Q=l
m=l}else m=l
m.h(0,n.giG())
m=n.dx
l=m.ch
if(l==null){l=D.Y()
m.ch=l
m=l}else m=l
m.h(0,n.gbo())
n.dy=null
n.dx.h(0,p)
n.dx.h(0,o)
n.f.saa(0,new V.a1(0,0,0))
m=n.r
m.saa(0,new V.a1(0.1,0.1,0.1))
m=n.x
m.saa(0,new V.a1(0.8,0.8,0.8))
m=n.z
m.saa(0,new V.a1(0.2,0.2,0.2))
m=n.z
if(m.c===C.d){m.c=C.j
m.bV()
m.ce(100)
l=m.a
l.a=null
l.a0(null)}m.ce(100)
m=n.x
l=q.f.kA("../resources/Test.png",!0)
k=m.c
if(k!==C.h){if(k===C.d)m.aH()
m.c=C.h
m.iP(null)
k=m.a
k.a=null
k.a0(null)}m.iO(l)
j=E.m_(null,!0,null,"",null,null)
j.saf(U.ms(!1,!0,q.r,!1,!1,!1,null,!1))
j.saj(0,F.n7(30,1,15,0.5))
i=E.m_(null,!0,null,"",null,null)
i.saf(U.dz(V.b7(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
m=F.lz(1,null,null,1)
m.cH()
i.saj(0,m)
h=new U.cz()
h.bW(U.al)
h.bi(h.ghD(),h.gij())
h.e=null
h.f=V.dW()
h.r=0
h.h(0,U.ms(!1,!1,q.r,!1,!1,!1,null,!1))
h.h(0,U.dz(V.lh(3.141592653589793)))
h.h(0,U.dz(V.b7(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=U.mg(0.5,0.7,0.3,0,0,0)
f=U.mg(0,0.1,0,0,0,0)
m=new M.dE()
m.sh2(0,O.l9(E.ao))
m.d.bi(m.ghN(),m.ghP())
m.e=null
m.f=null
m.r=null
m.x=null
e=X.nP(!0,!0,!1,null,2000,null,0)
d=new X.e1()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saf(null)
l=d.c
if(!(Math.abs(l-1.0471975511965976)<$.M().a)){d.c=1.0471975511965976
l=new D.N("fov",l,1.0471975511965976,d,[P.r])
l.b=!0
d.aR(l)}l=d.d
if(!(Math.abs(l-0.1)<$.M().a)){d.d=0.1
l=new D.N("near",l,0.1,d,[P.r])
l.b=!0
d.aR(l)}l=d.e
if(!(Math.abs(l-2000)<$.M().a)){d.e=2000
l=new D.N("far",l,2000,d,[P.r])
l.b=!0
d.aR(l)}l=m.a
if(l!==d){if(l!=null)l.gB().N(0,m.gas())
c=m.a
m.a=d
d.gB().h(0,m.gas())
l=new D.N("camera",c,m.a,m,[X.dx])
l.b=!0
m.aE(l)}l=m.b
if(l!==e){if(l!=null)l.gB().N(0,m.gas())
c=m.b
m.b=e
e.gB().h(0,m.gas())
l=new D.N("target",c,m.b,m,[X.eg])
l.b=!0
m.aE(l)}m.seU(null)
m.seU(n)
m.d.h(0,j)
m.d.h(0,i)
m.a.saf(h)
l=m.e
if(l==null){l=D.Y()
m.e=l}l.h(0,new K.kO(n,g,f))
l=q.d
if(l!==m){if(l!=null)l.gB().N(0,q.gd6())
q.d=m
m.gB().h(0,q.gd6())
q.d7()}m=new V.i8("shapes",!0)
s=C.y.d0(s,"shapes")
m.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
m.b5(0,"Cube",new K.kP(j))
m.b5(0,"Cylinder",new K.kQ(j))
m.b5(0,"Cone",new K.kR(j))
m.b5(0,"Sphere",new K.kS(j))
m.dQ(0,"Toroid",new K.kT(j),!0)
m.b5(0,"Knot",new K.kU(j))
s=q.z
if(s==null){s=D.Y()
q.z=s}m={func:1,ret:-1,args:[D.B]}
l=H.n(new K.kV(u,n),m)
if(s.b==null)s.saT(H.d([],[m]))
s=s.b;(s&&C.a).h(s,l)
V.pz(q)},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ld.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cL(a)},
i:function(a){return"Instance of '"+H.c5(a)+"'"}}
J.hn.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iU:1}
J.dM.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iL:1}
J.dN.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i3.prototype={}
J.bN.prototype={}
J.bn.prototype={
i:function(a){var u=a[$.n9()]
if(u==null)return this.fs(a)
return"JavaScript function for "+H.l(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.aN.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.G("add"))
a.push(b)},
kX:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("removeAt"))
u=a.length
if(b>=u)throw H.c(P.e5(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.l(a[t]))
return u.join(b)},
kx:function(a){return this.m(a,"")},
kp:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
ko:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.U,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.hl())},
kn:function(a,b){return this.ko(a,b,null)},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fo:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ae(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gkm:function(a){if(a.length>0)return a[0]
throw H.c(H.hl())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hl())},
fl:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.G("setRange"))
P.bq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cj(d)
if(e+t>u.gl(d))throw H.c(H.nS())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bj:function(a,b,c,d){return this.fl(a,b,c,d,0)},
dT:function(a,b){var u,t
H.n(b,{func:1,ret:P.U,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.lb(a,"[","]")},
gX:function(a){return new J.ax(a,a.length,0,[H.u(a,0)])},
gJ:function(a){return H.cL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.G("set length"))
if(b<0)throw H.c(P.ae(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ch(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ch(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bj(u,0,a.length,a)
this.bj(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.lc.prototype={}
J.ax.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdr(null)
return!1}this.sdr(u[s]);++this.c
return!0},
sdr:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
J.bH.prototype={
la:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
cI:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
eX:function(a,b){var u,t
if(b>20)throw H.c(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.D("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a-b},
D:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dL(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dL(a,b)},
dL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dK(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iV:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dK(a,b)},
dK:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia5:1}
J.dL.prototype={$io:1}
J.dK.prototype={}
J.bm.prototype={
a1:function(a,b){if(b<0)throw H.c(H.ch(a,b))
if(b>=a.length)H.t(H.ch(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.ch(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l6(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.as(b))
c=P.bq(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.as(c))
if(typeof c!=="number")return c.a_()
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.ab(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.e5(b,null,null))
if(b>c)throw H.c(P.e5(b,null,null))
if(c>a.length)throw H.c(P.e5(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.u(a,b,null)},
ld:function(a){return a.toLowerCase()},
D:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kM:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.D(c,u)+a},
ag:function(a,b){return this.kM(a,b," ")},
ex:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ew:function(a,b){return this.ex(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im8:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a1(this.a,b)},
$ad0:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h1.prototype={}
H.c2.prototype={
gX:function(a){return new H.cC(this,this.gl(this),0,[H.at(this,"c2",0)])},
bP:function(a,b){return this.fq(0,H.n(b,{func:1,ret:P.U,args:[H.at(this,"c2",0)]}))}}
H.cC.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.cj(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bj(u))
r=this.c
if(r>=s){this.sb1(null)
return!1}this.sb1(t.K(u,r));++this.c
return!0},
sb1:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.hC.prototype={
gX:function(a){return new H.hD(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.aC(this.a)},
K:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ai:function(a,b){return[b]}}
H.hD.prototype={
F:function(){var u=this.b
if(u.F()){this.sb1(this.c.$1(u.gM(u)))
return!0}this.sb1(null)
return!1},
gM:function(a){return this.a},
sb1:function(a){this.a=H.A(a,H.u(this,1))},
$ab3:function(a,b){return[b]}}
H.hE.prototype={
gl:function(a){return J.aC(this.a)},
K:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ac2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d2.prototype={
gX:function(a){return new H.jy(J.by(this.a),this.b,this.$ti)}}
H.jy.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.bZ.prototype={}
H.d0.prototype={
n:function(a,b,c){H.A(c,H.at(this,"d0",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.er.prototype={}
H.fO.prototype={
i:function(a){return P.lg(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.nJ()},
$iE:1}
H.fP.prototype={
gl:function(a){return this.a},
bs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bs(0,b))return
return this.ds(b)},
ds:function(a){return this.b[H.H(a)]},
O:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.ds(q),u))}}}
H.ib.prototype={}
H.iV.prototype={
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
H.i_.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hp.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.j8.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l1.prototype={
$1:function(a){if(!!J.W(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.f4.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaw:1}
H.cr.prototype={
i:function(a){return"Closure '"+H.c5(this).trim()+"'"},
$ibF:1,
glm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iH.prototype={}
H.iy.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cm(u)+"'"}}
H.cp.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cL(this.a)
else t=typeof u!=="object"?J.dp(u):H.cL(u)
return(t^H.cL(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c5(u)+"'")}}
H.iX.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return this.a}}
H.ij.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aO.prototype={
gl:function(a){return this.a},
gkw:function(a){return this.a===0},
ga8:function(a){return new H.hu(this,[H.u(this,0)])},
bs:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dm(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dm(t,b)}else return this.kt(b)},
kt:function(a){var u=this.d
if(u==null)return!1
return this.cL(this.c2(u,this.cK(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.ku(b)},
ku:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c2(u,this.cK(a))
s=this.cL(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c6()
this.b=u}this.dd(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c6()
this.c=t}this.dd(t,b,c)}else this.kv(b,c)},
kv:function(a,b){var u,t,s,r
H.A(a,H.u(this,0))
H.A(b,H.u(this,1))
u=this.d
if(u==null){u=this.c6()
this.d=u}t=this.cK(a)
s=this.c2(u,t)
if(s==null)this.cf(u,t,[this.c7(a,b)])
else{r=this.cL(s,a)
if(r>=0)s[r].b=b
else s.push(this.c7(a,b))}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bj(this))
u=u.c}},
dd:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bm(a,b)
if(u==null)this.cf(a,b,this.c7(b,c))
else u.b=c},
hw:function(){this.r=this.r+1&67108863},
c7:function(a,b){var u,t
u=new H.ht(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hw()
return u},
cK:function(a){return J.dp(a)&0x3ffffff},
cL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.lg(this)},
bm:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
h7:function(a,b){delete a[b]},
dm:function(a,b){return this.bm(a,b)!=null},
c6:function(){var u=Object.create(null)
this.cf(u,"<non-identifier-key>",u)
this.h7(u,"<non-identifier-key>")
return u}}
H.ht.prototype={}
H.hu.prototype={
gl:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.hv(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hv.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bj(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(u.a)
this.c=this.c.c
return!0}}},
sdc:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kK.prototype={
$1:function(a){return this.a(H.H(a))},
$S:50}
H.ho.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im8:1,
$ioh:1}
H.cG.prototype={$icG:1}
H.bJ.prototype={$ibJ:1,$iop:1}
H.dX.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cH.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pd(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.r]},
$ay:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dY.prototype={
n:function(a,b,c){H.ai(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hS.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hV.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dZ.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$ipY:1}
H.cI.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icI:1,
$iT:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
P.jA.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.jz.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jB.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jC.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fa.prototype={
fS:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cg(new P.kg(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
fT:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cg(new P.kf(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$ibb:1}
P.kg.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kf.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fw(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bg.prototype={
kC:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.n(this.d,{func:1,ret:P.U,args:[P.R]}),a.a,P.U,P.R)},
ks:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.ft(u,{func:1,args:[P.R,P.aw]}))return H.lA(r.l3(u,a.a,a.b,null,t,P.aw),s)
else return H.lA(r.cX(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aI.prototype={
eW:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a0
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.p_(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aI(0,$.a0,[c])
r=b==null?1:3
this.de(new P.bg(s,r,a,b,[u,c]))
return s},
l9:function(a,b){return this.eW(a,null,b)},
de:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibg")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaI")
u=t.a
if(u<4){t.de(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kz(null,null,u,H.n(new P.jL(this,a),{func:1,ret:-1}))}},
dG:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibg")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaI")
t=p.a
if(t<4){p.dG(a)
return}this.a=t
this.c=p.c}u.a=this.bp(a)
t=this.b
t.toString
P.kz(null,null,t,H.n(new P.jP(u,this),{func:1,ret:-1}))}},
cb:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
di:function(a){var u,t,s
u=H.u(this,0)
H.lA(a,{futureOr:1,type:u})
t=this.$ti
if(H.dj(a,"$icy",t,"$acy"))if(H.dj(a,"$iaI",t,null))P.mA(a,this)
else P.oB(a,this)
else{s=this.cb()
H.A(a,u)
this.a=4
this.c=a
P.d5(this,s)}},
dj:function(a,b){var u
H.f(b,"$iaw")
u=this.cb()
this.a=8
this.c=new P.an(a,b)
P.d5(this,u)},
$icy:1}
P.jL.prototype={
$0:function(){P.d5(this.a,this.b)},
$S:0}
P.jP.prototype={
$0:function(){P.d5(this.b,this.a.a)},
$S:0}
P.jM.prototype={
$1:function(a){var u=this.a
u.a=0
u.di(a)},
$S:24}
P.jN.prototype={
$2:function(a,b){H.f(b,"$iaw")
this.a.dj(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jO.prototype={
$0:function(){this.a.dj(this.b,this.c)},
$S:0}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eT(H.n(r.d,{func:1}),null)}catch(q){t=H.aj(q)
s=H.ck(q)
if(this.d){r=H.f(this.a.a.c,"$ian").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$ian")
else p.b=new P.an(t,s)
p.a=!0
return}if(!!J.W(u).$icy){if(u instanceof P.aI&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$ian")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l9(new P.jT(o),null)
r.a=!1}},
$S:3}
P.jT.prototype={
$1:function(a){return this.a},
$S:47}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cX(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ck(o)
s=this.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$ian")
r=this.c
if(r.kC(u)&&r.e!=null){q=this.b
q.b=r.ks(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ck(p)
r=H.f(this.a.a.c,"$ian")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ex.prototype={}
P.iB.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aI(0,$.a0,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iD(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iE(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.iD.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.iE.prototype={
$0:function(){this.b.di(this.a.a)},
$S:0}
P.cP.prototype={}
P.iC.prototype={}
P.bb.prototype={}
P.an.prototype={
i:function(a){return H.l(this.a)},
$ibE:1}
P.kq.prototype={$iqc:1}
P.ky.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e0()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jZ.prototype={
l4:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a0){a.$0()
return}P.mM(null,null,this,a,-1)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kx(null,null,this,u,H.f(t,"$iaw"))}},
l5:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a0){a.$1(b)
return}P.mN(null,null,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kx(null,null,this,u,H.f(t,"$iaw"))}},
jM:function(a,b){return new P.k0(this,H.n(a,{func:1,ret:b}),b)},
cp:function(a){return new P.k_(this,H.n(a,{func:1,ret:-1}))},
dW:function(a,b){return new P.k1(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eT:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.l)return a.$0()
return P.mM(null,null,this,a,b)},
cX:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a0===C.l)return a.$1(b)
return P.mN(null,null,this,a,b,c,d)},
l3:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a0===C.l)return a.$2(b,c)
return P.p0(null,null,this,a,b,c,d,e,f)}}
P.k0.prototype={
$0:function(){return this.a.eT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k_.prototype={
$0:function(){return this.a.l4(this.b)},
$S:3}
P.k1.prototype={
$1:function(a){var u=this.c
return this.a.l5(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jX.prototype={
gX:function(a){var u=new P.eM(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icb")!=null}else{t=this.h3(b)
return t}},
h3:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dt(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lp()
this.b=u}return this.df(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lp()
this.c=t}return this.df(t,b)}else return this.fV(0,b)},
fV:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.lp()
this.d=u}t=this.dk(b)
s=u[t]
if(s==null)u[t]=[this.bY(b)]
else{if(this.c0(s,b)>=0)return!1
s.push(this.bY(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iA(this.c,b)
else return this.ix(0,b)},
ix:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dt(u,b)
s=this.c0(t,b)
if(s<0)return!1
this.dM(t.splice(s,1)[0])
return!0},
df:function(a,b){H.A(b,H.u(this,0))
if(H.f(a[b],"$icb")!=null)return!1
a[b]=this.bY(b)
return!0},
iA:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icb")
if(u==null)return!1
this.dM(u)
delete a[b]
return!0},
dh:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t
u=new P.cb(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dh()
return u},
dM:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dh()},
dk:function(a){return J.dp(a)&1073741823},
dt:function(a,b){return a[this.dk(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eM.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bj(u))
else{u=this.c
if(u==null){this.sdg(null)
return!1}else{this.sdg(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdg:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
P.hw.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hx.prototype={$ii:1,$ib:1}
P.y.prototype={
gX:function(a){return new H.cC(a,this.gl(a),0,[H.bQ(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
lc:function(a,b){var u,t
u=H.d([],[H.bQ(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
lb:function(a){return this.lc(a,!0)},
p:function(a,b){var u,t
u=[H.bQ(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bj(t,0,this.gl(a),a)
C.a.bj(t,this.gl(a),t.length,b)
return t},
kk:function(a,b,c,d){var u
H.A(d,H.bQ(this,a,"y",0))
P.bq(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lb(a,"[","]")}}
P.hz.prototype={}
P.hA.prototype={
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
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bQ(this,a,"af",0),H.bQ(this,a,"af",1)]})
for(u=J.by(this.ga8(a));u.F();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aC(this.ga8(a))},
i:function(a){return P.lg(a)},
$iE:1}
P.kh.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.hB.prototype={
j:function(a,b){return J.lK(this.a,b)},
n:function(a,b,c){J.l3(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
O:function(a,b){J.lM(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aC(this.a)},
i:function(a){return J.au(this.a)},
$iE:1}
P.es.prototype={}
P.k3.prototype={
au:function(a,b){var u
for(u=J.by(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gM(u))},
i:function(a){return P.lb(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=P.oF(this,this.r,H.u(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
$ii:1,
$imh:1}
P.eN.prototype={}
P.fg.prototype={}
P.fG.prototype={
kE:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bq(c,a0,b.length,null,null,null)
u=$.no()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kH(C.c.H(b,n))
j=H.kH(C.c.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.am("")
g=r.a+=C.c.u(b,s,t)
r.a=g+H.c6(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.u(b,s,a0)
f=g.length
if(q>=0)P.lQ(b,p,a0,q,o,f)
else{e=C.f.bh(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b_(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lQ(b,p,a0,q,o,d)
else{e=C.f.bh(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b_(b,a0,a0,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.o],P.e]}}
P.fH.prototype={
$abC:function(){return[[P.b,P.o],P.e]}}
P.bW.prototype={}
P.bC.prototype={}
P.h3.prototype={
$abW:function(){return[P.e,[P.b,P.o]]}}
P.hj.prototype={
i:function(a){return this.a}}
P.hi.prototype={
h4:function(a,b,c){var u,t,s,r,q,p
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
if(r>b)q.a+=C.c.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nC(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.e,P.e]}}
P.jg.prototype={
gkj:function(){return C.T}}
P.ji.prototype={
b6:function(a,b,c){var u,t,s
c=P.bq(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ko(t)
if(s.hg(a,b,c)!==c)s.dO(J.nw(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oV(0,s.b,t.length)))},
cv:function(a){return this.b6(a,0,null)},
$abC:function(){return[P.e,[P.b,P.o]]}}
P.ko.prototype={
dO:function(a,b){var u,t,s,r,q
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
hg:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dO(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jh.prototype={
b6:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.os(!1,a,b,c)
if(u!=null)return u
c=P.bq(b,c,J.aC(a),null,null,null)
t=new P.am("")
s=new P.km(!1,t)
s.b6(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c6(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cv:function(a){return this.b6(a,0,null)},
$abC:function(){return[[P.b,P.o],P.e]}}
P.km.prototype={
b6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kn(this,b,c,a)
$label0$0:for(q=J.cj(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bQ()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bf(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.H,m)
if(u<=C.H[m]){m=P.a7("Overlong encoding of 0x"+C.f.bf(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bf(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c6(u)
this.c=!1}for(m=o<c;m;){l=P.p1(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a_()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bf(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bf(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kn.prototype={
$2:function(a,b){this.a.b.a+=P.ed(this.d,a,b)},
$S:46}
P.U.prototype={}
P.ay.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aV(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nK(H.oc(this))
t=P.dA(H.oa(this))
s=P.dA(H.o6(this))
r=P.dA(H.o7(this))
q=P.dA(H.o9(this))
p=P.dA(H.ob(this))
o=P.nL(H.o8(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.b2.prototype={
p:function(a,b){return new P.b2(C.f.p(this.a,b.gh9()))},
t:function(a,b){return new P.b2(C.f.t(this.a,b.gh9()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h0()
t=this.a
if(t<0)return"-"+new P.b2(0-t).i(0)
s=u.$1(C.f.a7(t,6e7)%60)
r=u.$1(C.f.a7(t,1e6)%60)
q=new P.h_().$1(t%1e6)
return""+C.f.a7(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.h_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.h0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bE.prototype={}
P.e0.prototype={
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
p=P.h5(this.b)
return r+q+": "+p}}
P.c7.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.hk.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.ai(this.b)
if(typeof u!=="number")return u.a_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.j9.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j6.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c9.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h5(u)+"."}}
P.i2.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.eb.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
i:function(a){return"Exception: "+this.a}}
P.he.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a1(r,m)
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
g=""}f=C.c.u(r,i,j)
return t+h+f+g+"\n"+C.c.D(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.l(s)+")"):t}}
P.bF.prototype={}
P.o.prototype={}
P.i.prototype={
bP:function(a,b){var u=H.at(this,"i",0)
return new H.d2(this,H.n(b,{func:1,ret:P.U,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gX(this)
for(t=0;u.F();)++t
return t},
gaP:function(a){var u,t
u=this.gX(this)
if(!u.F())throw H.c(H.hl())
t=u.gM(u)
if(u.F())throw H.c(H.nT())
return t},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.F();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nR(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.L.prototype={
gJ:function(a){return P.R.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cL(this)},
i:function(a){return"Instance of '"+H.c5(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$im8:1}
P.am.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipM:1}
P.je.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.H(b)
t=J.dk(b).ew(b,"=")
if(t===-1){if(b!=="")J.l3(a,P.lr(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.aq(b,t+1)
u=this.a
J.l3(a,P.lr(s,0,s.length,u,!0),P.lr(r,0,r.length,u,!0))}return a},
$S:44}
P.jb.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jc.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jd.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fw(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cc.prototype={
gf2:function(){return this.b},
gcJ:function(a){var u=this.c
if(u==null)return""
if(C.c.a6(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbK:function(a){var u=this.d
if(u==null)return P.mE(this.a)
return u},
gcR:function(a){var u=this.f
return u==null?"":u},
geq:function(){var u=this.r
return u==null?"":u},
cW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.lq(g,0,0,h)
return new P.cc(i,j,c,f,d,g,this.r)},
eQ:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gcS:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siw(new P.es(P.mr(u==null?"":u,C.m),[t,t]))}return this.Q},
ger:function(){return this.c!=null},
gev:function(){return this.f!=null},
ges:function(){return this.r!=null},
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
if(!!J.W(b).$ill)if(this.a==b.gbT())if(this.c!=null===b.ger())if(this.b==b.gf2())if(this.gcJ(this)==b.gcJ(b))if(this.gbK(this)==b.gbK(b))if(this.e===b.geL(b)){u=this.f
t=u==null
if(!t===b.gev()){if(t)u=""
if(u===b.gcR(b)){u=this.r
t=u==null
if(!t===b.ges()){if(t)u=""
u=u===b.geq()}else u=!1}else u=!1}else u=!1}else u=!1
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
siw:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$ill:1,
gbT:function(){return this.a},
geL:function(a){return this.e}}
P.ki.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.kj.prototype={
$1:function(a){return P.fh(C.aa,a,C.m,!1)},
$S:17}
P.kl.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fh(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fh(C.v,b,C.m,!0))}},
$S:15}
P.kk.prototype={
$2:function(a,b){var u,t
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(u=J.by(H.n1(b,"$ii")),t=this.a;u.F();)t.$2(a,H.H(u.gM(u)))},
$S:38}
P.ja.prototype={
gf0:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.ex(t,"?",u)
r=t.length
if(s>=0){q=P.df(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.jG(this,"data",null,null,null,P.df(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.ku.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kt.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nx(u,0,96,b)
return u},
$S:35}
P.kv.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kw.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.k6.prototype={
ger:function(){return this.c>0},
geu:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.I(t)
t=u+1<t
u=t}else u=!1
return u},
gev:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
ges:function(){return this.r<this.a.length},
gdz:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdA:function(){return this.b===5&&C.c.a6(this.a,"https")},
gbT:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdz()){this.x="http"
u="http"}else if(this.gdA()){this.x="https"
u="https"}else if(u===4&&C.c.a6(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a6(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
gf2:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcJ:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbK:function(a){var u
if(this.geu()){u=this.d
if(typeof u!=="number")return u.p()
return P.fw(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdz())return 80
if(this.gdA())return 443
return 0},
geL:function(a){return C.c.u(this.a,this.e,this.f)},
gcR:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.c.u(this.a,u+1,t):""},
geq:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aq(t,u+1):""},
gcS:function(){var u=this.f
if(typeof u!=="number")return u.a_()
if(u>=this.r)return C.ab
u=P.e
return new P.es(P.mr(this.gcR(this),C.m),[u,u])},
cW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbT()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.geu()?this.gbK(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.lq(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aq(t,s+1)
return new P.cc(i,j,c,f,d,g,b)},
eQ:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.W(b).$ill&&this.a===b.i(0)},
i:function(a){return this.a},
$ill:1}
P.jG.prototype={}
W.z.prototype={}
W.fz.prototype={
gl:function(a){return a.length}}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.co.prototype={$ico:1}
W.bT.prototype={$ibT:1}
W.bz.prototype={$ibz:1}
W.bU.prototype={
d_:function(a,b,c){if(c!=null)return this.hh(a,b,P.p8(c,null))
return this.hi(a,b)},
fa:function(a,b){return this.d_(a,b,null)},
hh:function(a,b,c){return a.getContext(b,c)},
hi:function(a,b){return a.getContext(b)},
$ibU:1,
$ilT:1}
W.bV.prototype={
hj:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
ke:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibV:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fQ.prototype={
gl:function(a){return a.length}}
W.X.prototype={$iX:1}
W.ct.prototype={
gl:function(a){return a.length}}
W.fR.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fS.prototype={
gl:function(a){return a.length}}
W.fT.prototype={
gl:function(a){return a.length}}
W.fW.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.cu.prototype={
jG:function(a,b){return a.adoptNode(b)},
d0:function(a,b){return a.getElementById(b)}}
W.fX.prototype={
i:function(a){return String(a)}}
W.dB.prototype={
k_:function(a,b){return a.createHTMLDocument(b)}}
W.dC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a5],"$aab")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ab,P.a5]]},
$ay:function(){return[[P.ab,P.a5]]},
$ii:1,
$ai:function(){return[[P.ab,P.a5]]},
$ib:1,
$ab:function(){return[[P.ab,P.a5]]},
$aD:function(){return[[P.ab,P.a5]]}}
W.dD.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaO(a))+" x "+H.l(this.gaK(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.dj(b,"$iab",[P.a5],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbJ(b)&&a.top===u.gbO(b)&&this.gaO(a)===u.gaO(b)&&this.gaK(a)===u.gaK(b)},
gJ:function(a){return W.mC(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gaO(a)),C.e.gJ(this.gaK(a)))},
gdX:function(a){return a.bottom},
gaK:function(a){return a.height},
gbJ:function(a){return a.left},
gbM:function(a){return a.right},
gbO:function(a){return a.top},
gaO:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a5]}}
W.fY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.e]},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.jE.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iV")},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.l4(this.a,c,u[b])},
h:function(a,b){J.lL(this.a,b)
return b},
gX:function(a){var u=this.lb(this)
return new J.ax(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gjL:function(a){return new W.jH(a)},
gcu:function(a){return new W.jE(a,a.children)},
gdZ:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lZ
if(u==null){u=H.d([],[W.aA])
t=new W.e_(u)
C.a.h(u,W.mB(null))
C.a.h(u,W.mD())
$.lZ=t
d=t}else d=u
u=$.lY
if(u==null){u=new W.fi(d)
$.lY=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation
t=(t&&C.U).k_(t,"")
$.bk=t
$.la=t.createRange()
t=$.bk
t.toString
t=t.createElement("base")
H.f(t,"$ico")
t.href=u.baseURI
u=$.bk.head;(u&&C.W).E(u,t)}u=$.bk
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$ibz")}u=$.bk
if(!!this.$ibz)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bk.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a8,a.tagName)){u=$.la;(u&&C.N).fh(u,s)
u=$.la
r=(u&&C.N).jY(u,b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(u=J.ad(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lO(s)
c.d2(r)
C.y.jG(document,r)
return r},
jZ:function(a,b,c){return this.ad(a,b,c,null)},
fk:function(a,b,c,d){a.textContent=null
this.E(a,this.ad(a,b,c,d))},
fj:function(a,b){return this.fk(a,b,null,null)},
b0:function(a,b){return a.getAttribute(b)},
iy:function(a,b){return a.removeAttribute(b)},
fi:function(a,b,c){return a.setAttribute(b,c)},
$iV:1,
gl6:function(a){return a.tagName}}
W.h2.prototype={
$1:function(a){return!!J.W(H.f(a,"$iF")).$iV},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jA:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fW(a,b,c,!1)},
fW:function(a,b,c,d){return a.addEventListener(b,H.cg(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaE")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icx:1,
$aD:function(){return[W.aE]}}
W.h9.prototype={
gl:function(a){return a.length}}
W.hd.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.dH.prototype={}
W.dI.prototype={
iE:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.dJ.prototype={}
W.bl.prototype={$ibl:1,
ge0:function(a){return a.data}}
W.cA.prototype={$icA:1,$ilT:1}
W.cB.prototype={$icB:1}
W.b4.prototype={$ib4:1}
W.dP.prototype={}
W.dS.prototype={
i:function(a){return String(a)},
$idS:1}
W.cF.prototype={}
W.hL.prototype={
gl:function(a){return a.length}}
W.hM.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.hN(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hO.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.hP(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aP.prototype={$iaP:1}
W.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
gaP:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mi("No elements"))
if(t>1)throw H.c(P.mi("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ad(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.l4(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dF(u,u.length,-1,[H.bQ(C.ac,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
kW:function(a){var u=a.parentNode
if(u!=null)J.fx(u,a)},
l0:function(a,b){var u,t
try{u=a.parentNode
J.l4(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fp(a):u},
E:function(a,b){return a.appendChild(H.f(b,"$iF"))},
iz:function(a,b){return a.removeChild(b)},
iD:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.i5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.e4.prototype={
jY:function(a,b){return a.createContextualFragment(b)},
fh:function(a,b){return a.selectNodeContents(b)}}
W.ih.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.ii(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.ii.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ik.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.iv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.iw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.iz.prototype={
j:function(a,b){return this.du(a,H.H(b))},
n:function(a,b,c){this.iM(a,b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hn(a,u)
if(t==null)return
b.$2(t,this.du(a,t))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.iA(u))
return u},
gl:function(a){return a.length},
du:function(a,b){return a.getItem(b)},
hn:function(a,b){return a.key(b)},
iM:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.iA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aF.prototype={$iaF:1}
W.ba.prototype={$iba:1}
W.ee.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=W.nM("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).au(0,new W.ar(u))
return t},
hl:function(a,b){return a.insertRow(b)}}
W.ef.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaP(u)
s.toString
u=new W.ar(s)
r=u.gaP(u)
t.toString
r.toString
new W.ar(t).au(0,new W.ar(r))
return t},
dw:function(a,b){return a.insertCell(b)}}
W.iG.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaP(u)
t.toString
s.toString
new W.ar(t).au(0,new W.ar(s))
return t}}
W.cQ.prototype={$icQ:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.iO.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.iT.prototype={
gl:function(a){return a.length}}
W.bM.prototype={}
W.jf.prototype={
i:function(a){return String(a)}}
W.jv.prototype={$ilT:1}
W.jw.prototype={
gl:function(a){return a.length}}
W.bf.prototype={
gk9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gk8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibf:1}
W.d3.prototype={
iF:function(a,b){return a.requestAnimationFrame(H.cg(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
ha:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d4.prototype={$id4:1}
W.jF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iX")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.X]},
$ay:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aD:function(){return[W.X]}}
W.eA.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.dj(b,"$iab",[P.a5],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbJ(b)&&a.top===u.gbO(b)&&a.width===u.gaO(b)&&a.height===u.gaK(b)},
gJ:function(a){return W.mC(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaK:function(a){return a.height},
gaO:function(a){return a.width}}
W.jU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.eS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.k7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.kb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aD:function(){return[W.aF]}}
W.jD.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga8(this),t=u.length,s=this.a,r=J.ad(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b0(s,p))}},
ga8:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.f(u[r],"$id4")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaf:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jH.prototype={
j:function(a,b){return J.l5(this.a,H.H(b))},
n:function(a,b,c){J.nB(this.a,b,c)},
gl:function(a){return this.ga8(this).length}}
W.jI.prototype={}
W.lo.prototype={}
W.jJ.prototype={}
W.jK.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:34}
W.bO.prototype={
fH:function(a){var u,t
u=$.lI()
if(u.gkw(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pk())
for(t=0;t<12;++t)u.n(0,C.A[t],W.pl())}},
aW:function(a){return $.np().Y(0,W.cv(a))},
av:function(a,b,c){var u,t,s
u=W.cv(a)
t=$.lI()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lw(s.$4(a,b,c,this))},
$iaA:1}
W.D.prototype={
gX:function(a){return new W.dF(a,this.gl(a),-1,[H.bQ(this,a,"D",0)])}}
W.e_.prototype={
aW:function(a){return C.a.dT(this.a,new W.hY(a))},
av:function(a,b,c){return C.a.dT(this.a,new W.hX(a,b,c))},
$iaA:1}
W.hY.prototype={
$1:function(a){return H.f(a,"$iaA").aW(this.a)},
$S:25}
W.hX.prototype={
$1:function(a){return H.f(a,"$iaA").av(this.a,this.b,this.c)},
$S:25}
W.f_.prototype={
fR:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bP(0,new W.k4())
t=b.bP(0,new W.k5())
this.b.au(0,u)
s=this.c
s.au(0,C.I)
s.au(0,t)},
aW:function(a){return this.a.Y(0,W.cv(a))},
av:function(a,b,c){var u,t
u=W.cv(a)
t=this.c
if(t.Y(0,H.l(u)+"::"+b))return this.d.jH(c)
else if(t.Y(0,"*::"+b))return this.d.jH(c)
else{t=this.b
if(t.Y(0,H.l(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.l(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iaA:1}
W.k4.prototype={
$1:function(a){return!C.a.Y(C.A,H.H(a))},
$S:26}
W.k5.prototype={
$1:function(a){return C.a.Y(C.A,H.H(a))},
$S:26}
W.kd.prototype={
av:function(a,b,c){if(this.fv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.l5(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.ke.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:17}
W.kc.prototype={
aW:function(a){var u=J.W(a)
if(!!u.$icM)return!1
u=!!u.$iq
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.aW(a)},
$iaA:1}
W.dF.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdv(J.lK(this.a,u))
this.c=u
return!0}this.sdv(null)
this.c=t
return!1},
gM:function(a){return this.d},
sdv:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
W.aA.prototype={}
W.k2.prototype={$ipZ:1}
W.fi.prototype={
d2:function(a){new W.kp(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lO(a)
else J.fx(b,a)},
iK:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.ny(a)
s=J.l5(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aj(o)}q="element unprintable"
try{q=J.au(a)}catch(o){H.aj(o)}try{p=W.cv(a)
this.iJ(H.f(a,"$iV"),b,u,q,p,H.f(t,"$iE"),H.H(s))}catch(o){if(H.aj(o) instanceof P.aK)throw o
else{this.b4(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aW(a)){this.b4(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b4(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga8(f).length-1,u=f.a,r=J.ad(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.av(a,J.nD(q),r.b0(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.b0(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b0(u,q)
r.iy(u,q)}}if(!!J.W(a).$icQ)this.d2(a.content)},
$ipJ:1}
W.kp.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iK(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b4(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aj(r)
q=H.f(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.fx(p,q)}else J.fx(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iF")}},
$S:45}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.da.prototype={}
W.db.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
P.k8.prototype={
eo:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cZ:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.W(a)
if(!!t.$iay)return new Date(a.a)
if(!!t.$ioh)throw H.c(P.j7("structured clone of RegExp"))
if(!!t.$iaE)return a
if(!!t.$ibT)return a
if(!!t.$icx)return a
if(!!t.$ibl)return a
if(!!t.$icG||!!t.$ibJ)return a
if(!!t.$iE){s=this.eo(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.O(a,new P.ka(u,this))
return u.a}if(!!t.$ib){s=this.eo(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.jX(a,s)}throw H.c(P.j7("structured clone of other type"))},
jX:function(a,b){var u,t,s,r
u=J.cj(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.cZ(u.j(a,r)))
return s}}
P.ka.prototype={
$2:function(a,b){this.a.a[a]=this.b.cZ(b)},
$S:7}
P.ff.prototype={$ibl:1,
ge0:function(a){return this.a}}
P.kA.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k9.prototype={}
P.ha.prototype={
gbn:function(){var u,t,s
u=this.b
t=H.at(u,"y",0)
s=W.V
return new H.hC(new H.d2(u,H.n(new P.hb(),{func:1,ret:P.U,args:[t]}),[t]),H.n(new P.hc(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbn()
J.nA(u.b.$1(J.fy(u.a,b)),c)},
h:function(a,b){J.lL(this.b.a,b)},
gl:function(a){return J.aC(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.fy(u.a,b))},
gX:function(a){var u=P.m2(this.gbn(),!1,W.V)
return new J.ax(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.hb.prototype={
$1:function(a){return!!J.W(H.f(a,"$iF")).$iV},
$S:22}
P.hc.prototype={
$1:function(a){return H.m(H.f(a,"$iF"),"$iV")},
$S:33}
P.jY.prototype={
gbM:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdX:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dj(b,"$iab",[P.a5],"$aab")){u=this.a
t=J.ad(b)
if(u==t.gbJ(b)){s=this.b
if(s==t.gbO(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gbM(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdX(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.dp(u)
s=this.b
r=J.dp(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gJ(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gJ(H.A(s+this.d,q))
return P.oE(P.jW(P.jW(P.jW(P.jW(0,t),r),u),q))}}
P.ab.prototype={
gbJ:function(a){return this.a},
gbO:function(a){return this.b},
gaO:function(a){return this.c},
gaK:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aD:function(){return[P.b8]}}
P.i7.prototype={
gl:function(a){return a.length}}
P.cM.prototype={$icM:1}
P.iF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.q.prototype={
gcu:function(a){return new P.ha(a,new W.ar(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aA])
C.a.h(u,W.mB(null))
C.a.h(u,W.mD())
C.a.h(u,new W.kc())
c=new W.fi(new W.e_(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jZ(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ar(r)
p=u.gaP(u)
for(u=J.ad(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$iq:1}
P.bc.prototype={$ibc:1}
P.iU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aD:function(){return[P.bc]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$iop:1}
P.fC.prototype={
gl:function(a){return a.length}}
P.fD.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new P.fE(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fF.prototype={
gl:function(a){return a.length}}
P.bS.prototype={}
P.i1.prototype={
gl:function(a){return a.length}}
P.ey.prototype={}
P.dt.prototype={$idt:1}
P.dG.prototype={$idG:1}
P.e3.prototype={$ie3:1}
P.c8.prototype={
dP:function(a,b){return a.activeTexture(b)},
dU:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jN:function(a,b,c){return a.bindFramebuffer(b,c)},
aX:function(a,b,c){return a.bindTexture(b,c)},
jO:function(a,b,c){return a.blendFunc(b,c)},
dY:function(a,b,c,d){return a.bufferData(b,c,d)},
jR:function(a,b){return a.clear(b)},
jS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jT:function(a,b){return a.clearDepth(b)},
jV:function(a,b){return a.compileShader(b)},
k0:function(a,b){return a.createShader(b)},
k6:function(a,b){return a.deleteProgram(b)},
k7:function(a,b){return a.deleteShader(b)},
ka:function(a,b){return a.depthFunc(b)},
kb:function(a,b){return a.disable(b)},
e1:function(a,b){return a.disableVertexAttribArray(b)},
kd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cA:function(a,b){return a.enable(b)},
e2:function(a,b){return a.enableVertexAttribArray(b)},
f5:function(a,b){return a.generateMipmap(b)},
f6:function(a,b,c){return a.getActiveAttrib(b,c)},
f7:function(a,b,c){return a.getActiveUniform(b,c)},
f8:function(a,b,c){return a.getAttribLocation(b,c)},
d1:function(a,b){return a.getParameter(b)},
fb:function(a,b){return a.getProgramInfoLog(b)},
bR:function(a,b,c){return a.getProgramParameter(b,c)},
fc:function(a,b){return a.getShaderInfoLog(b)},
fd:function(a,b,c){return a.getShaderParameter(b,c)},
fe:function(a,b,c){return a.getUniformLocation(b,c)},
ky:function(a,b){return a.linkProgram(b)},
kU:function(a,b,c){return a.pixelStorei(b,c)},
fn:function(a,b,c){return a.shaderSource(b,c)},
l8:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.W(g)
if(!!u.$ibl)t=!0
else t=!1
if(t){this.iZ(a,b,c,d,e,f,P.p9(g))
return}if(!!u.$icA)u=!0
else u=!1
if(u){this.j_(a,b,c,d,e,f,g)
return}throw H.c(P.dr("Incorrect number or type of arguments"))},
l7:function(a,b,c,d,e,f,g){return this.l8(a,b,c,d,e,f,g,null,null,null)},
iZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bN:function(a,b,c,d){return a.texParameteri(b,c,d)},
T:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f1:function(a,b){return a.useProgram(b)},
lg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lh:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic8:1}
P.e8.prototype={$ie8:1}
P.eh.prototype={$ieh:1}
P.eq.prototype={$ieq:1}
P.ix.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.br(this.hm(a,b))},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
hm:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.a6.prototype={
bW:function(a){this.shr(H.d([],[a]))
this.sdE(null)
this.sdB(null)
this.sdF(null)},
d3:function(a,b,c){var u=H.at(this,"a6",0)
H.n(b,{func:1,ret:P.U,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdE(b)
this.sdB(a)
this.sdF(c)},
bi:function(a,b){return this.d3(a,null,b)},
ig:function(a){var u
H.k(a,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fE:function(a,b){var u
H.k(b,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.ax(u,u.length,0,[H.u(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.at(this,"a6",0)
H.A(b,u)
u=[u]
if(this.ig(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fE(s,H.d([b],u))}},
shr:function(a){this.a=H.k(a,"$ib",[H.at(this,"a6",0)],"$ab")},
sdE:function(a){this.b=H.n(a,{func:1,ret:P.U,args:[[P.i,H.at(this,"a6",0)]]})},
sdB:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
sdF:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
$ii:1}
O.cE.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.Y()
this.b=u}return u},
fF:function(a){var u=this.b
if(u!=null)u.L(a)},
aQ:function(){return this.fF(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dW()},
eO:function(a){var u=this.a
if(a==null)C.a.h(u,V.dW())
else C.a.h(u,a)
this.aQ()},
cQ:function(){var u=this.a
if(u.length>0){u.pop()
this.aQ()}},
sc4:function(a){this.a=H.k(a,"$ib",[V.ak],"$ab")}}
E.fI.prototype={}
E.ao.prototype={
saj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().N(0,this.geI())
t=this.c
if(t!=null)t.gB().h(0,this.geI())
s=new D.N("shape",u,this.c,this,[F.e9])
s.b=!0
this.an(s)}},
saf:function(a){var u,t
if(!J.S(this.r,a)){u=this.r
if(u!=null)u.gB().N(0,this.geG())
if(a!=null)a.gB().h(0,this.geG())
this.r=a
t=new D.N("mover",u,a,this,[U.al])
t.b=!0
this.an(t)}},
aN:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aB(0,b,this):null
if(!J.S(t,this.x)){s=this.x
this.x=t
r=new D.N("matrix",s,t,this,[V.ak])
r.b=!0
this.an(r)}for(u=this.y.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aN(0,b)},
aZ:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga2(u))
else C.a.h(u.a,t.D(0,u.ga2(u)))
u.aQ()
a.eP(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.l_(a,this)
for(u=this.y.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aZ(a)
a.eN()
a.dx.cQ()},
gB:function(){var u=this.z
if(u==null){u=D.Y()
this.z=u}return u},
an:function(a){var u=this.z
if(u!=null)u.L(a)},
a4:function(){return this.an(null)},
eJ:function(a){H.f(a,"$iB")
this.e=null
this.an(a)},
kL:function(){return this.eJ(null)},
eH:function(a){this.an(H.f(a,"$iB"))},
kK:function(){return this.eH(null)},
eF:function(a){this.an(H.f(a,"$iB"))},
kH:function(){return this.eF(null)},
kG:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.geE(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
kJ:function(a,b){var u,t
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.gX(b),t=this.geE();u.F();)u.gM(u).gB().N(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfG:function(a,b){this.y=H.k(b,"$ia6",[E.ao],"$aa6")},
$ibp:1}
E.ic.prototype={
fA:function(a,b){var u,t
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
u=new O.cE()
t=[V.ak]
u.sc4(H.d([],t))
u.b=null
u.gB().h(0,new E.id(this))
this.cy=u
u=new O.cE()
u.sc4(H.d([],t))
u.b=null
u.gB().h(0,new E.ie(this))
this.db=u
u=new O.cE()
u.sc4(H.d([],t))
u.b=null
u.gB().h(0,new E.ig(this))
this.dx=u
this.siY(H.d([],[O.ca]))
u=this.dy;(u&&C.a).h(u,null)
this.siU(new H.aO([P.e,A.cN]))},
gkV:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga2(u)
t=this.db
t=u.D(0,t.ga2(t))
this.z=t
u=t}return u},
eP:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eN:function(){var u=this.dy
if(u.length>1)u.pop()},
siY:function(a){this.dy=H.k(a,"$ib",[O.ca],"$ab")},
siU:function(a){this.fr=H.k(a,"$iE",[P.e,A.cN],"$aE")}}
E.id.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ie.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.ig.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ec.prototype={}
E.em.prototype={
d8:function(a){H.f(a,"$iB")
this.eR()},
d7:function(){return this.d8(null)},
gkr:function(){var u,t,s
u=Date.now()
t=C.f.a7(P.lX(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ay(u,!1)
return s/t},
dI:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.D()
if(typeof u!=="number")return H.I(u)
s=C.e.cI(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.D()
r=C.e.cI(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ml(C.x,this.gl1())}},
eR:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iN(this),{func:1,ret:-1,args:[P.a5]})
C.P.ha(u)
C.P.iF(u,W.mR(t,P.a5))}},
kZ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dI()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lX(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aQ()
r=s.db
C.a.sl(r.a,0)
r.aQ()
r=s.dx
C.a.sl(r.a,0)
r.aQ()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aZ(this.e)}s=this.z
if(s!=null)s.L(null)}catch(q){u=H.aj(q)
t=H.ck(q)
P.aZ("Error: "+H.l(u))
P.aZ("Stack: "+H.l(t))
throw H.c(u)}}}
E.iN.prototype={
$1:function(a){var u
H.pv(a)
u=this.a
if(u.ch){u.ch=!1
u.kZ()}},
$S:54}
Z.ew.prototype={$ipD:1}
Z.du.prototype={
co:function(a){var u,t,s
try{t=a.a
C.b.e2(t,this.e)
C.b.lg(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.jx.prototype={$ipE:1}
Z.dv.prototype={
aY:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
co:function(a){var u,t
u=this.a
C.b.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].co(a)},
le:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e1(s,u[t].e)
C.b.aw(s,this.a.a,null)},
aZ:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aw(t,p,r.b)
C.b.kd(t,q.a,q.b,5123,0)
C.b.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.au(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shk:function(a){this.b=H.k(a,"$ib",[Z.bG],"$ab")},
$ipN:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c5(this.c)+"'")+"]"}}
Z.be.prototype={
gd4:function(a){var u,t
u=this.a
t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=2
if((u&$.bx().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=4
if((u&$.cn().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
jJ:function(a){var u,t,s
u=$.bv()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0)if(s===a)return u
return $.nn()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bv().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bw().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bx().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dl().a)!==0)C.a.h(u,"Clr3")
if((t&$.dm().a)!==0)C.a.h(u,"Clr4")
if((t&$.cn().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fL.prototype={}
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
L:function(a){var u,t,s,r
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
return!0}if(!s)C.a.O(P.m2(t,!0,{func:1,ret:-1,args:[D.B]}),new D.h6(u))
t=this.b
if(t!=null){this.saT(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.O(t,new D.h7(u))}return!0},
kh:function(){return this.L(null)},
l2:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.L(t)}}},
ah:function(a){return this.l2(a,!0,!1)},
sak:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saT:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h6.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.h7.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dw.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dO.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hq.prototype={
kR:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kN:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
siv:function(a){this.d=H.k(a,"$imh",[P.o],"$amh")}}
X.dT.prototype={}
X.hy.prototype={
b2:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ay(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.D()
q=b.b
p=this.ch
if(typeof q!=="number")return q.D()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gbr()
n=new X.bI(a,V.bL(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cP:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fg()
if(typeof u!=="number")return u.bQ()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.b2(a,b))
return!0},
kS:function(a){return!1},
i3:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ay(Date.now(),!1)
t=this.f
s=new X.dT(c,a,this.a.gbr(),b,u,this)
s.b=!0
t.L(s)
this.y=u
this.x=V.bL()}}
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
X.bI.prototype={}
X.hR.prototype={
c1:function(a,b,c){var u,t,s
u=new P.ay(Date.now(),!1)
t=this.a.gbr()
s=new X.bI(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cP:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.c1(a,b,!0))
return!0},
bc:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fg()
if(typeof u!=="number")return u.bQ()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.L(this.c1(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.c1(a,b,!1))
return!0},
kT:function(a,b){return!1}}
X.i6.prototype={}
X.eo.prototype={}
X.iR.prototype={
b2:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bL()
s=this.a.gbr()
r=new X.eo(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kQ:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.L(this.b2(a,!0))
return!0},
kO:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.L(this.b2(a,!0))
return!0},
kP:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.L(this.b2(a,!1))
return!0}}
X.et.prototype={
gbr:function(){var u=this.a
return V.me(0,0,C.q.gdZ(u).c,C.q.gdZ(u).d)},
dn:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dO(u,new X.aQ(t,a.altKey,a.shiftKey))},
aU:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
cg:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.aa(t-r,s-q)},
b3:function(a){return new V.a3(a.movementX,a.movementY)},
ca:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ao(p.pageX)
C.e.ao(p.pageY)
n=u.left
C.e.ao(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.ao(p.pageY)-u.top))}return t},
aF:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dw(u,new X.aQ(t,a.altKey,a.shiftKey))},
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
hY:function(a){this.f=!0},
hM:function(a){this.f=!1},
hS:function(a){H.f(a,"$iag")
if(this.f&&this.c5(a))a.preventDefault()},
i1:function(a){var u
H.f(a,"$ib4")
if(!this.f)return
u=this.dn(a)
this.b.kR(u)},
i_:function(a){var u
H.f(a,"$ib4")
if(!this.f)return
u=this.dn(a)
this.b.kN(u)},
i5:function(a){var u,t,s,r
H.f(a,"$iag")
u=this.a
u.focus()
this.f=!0
this.aU(a)
if(this.x){t=this.aF(a)
s=this.b3(a)
if(this.d.cP(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aF(a)
r=this.aI(a)
if(this.c.cP(t,r))a.preventDefault()},
i9:function(a){var u,t,s
H.f(a,"$iag")
this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bc(u,s))a.preventDefault()},
hW:function(a){var u,t,s
H.f(a,"$iag")
if(!this.c5(a)){this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bc(u,s))a.preventDefault()}},
i7:function(a){var u,t,s
H.f(a,"$iag")
this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bb(u,s))a.preventDefault()},
hU:function(a){var u,t,s
H.f(a,"$iag")
if(!this.c5(a)){this.aU(a)
u=this.aF(a)
if(this.x){t=this.b3(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bb(u,s))a.preventDefault()}},
ib:function(a){var u,t
H.f(a,"$ibf")
this.aU(a)
u=new V.a3((a&&C.O).gk8(a),C.O.gk9(a)).C(0,180)
if(this.x){if(this.d.kS(u))a.preventDefault()
return}if(this.r)return
t=this.aI(a)
if(this.c.kT(u,t))a.preventDefault()},
ie:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aF(this.y)
s=this.aI(this.y)
this.d.i3(t,s,u)}},
it:function(a){var u
H.f(a,"$iaX")
this.a.focus()
this.f=!0
this.cg(a)
u=this.ca(a)
if(this.e.kQ(u))a.preventDefault()},
ip:function(a){var u
H.f(a,"$iaX")
this.cg(a)
u=this.ca(a)
if(this.e.kO(u))a.preventDefault()},
ir:function(a){var u
H.f(a,"$iaX")
this.cg(a)
u=this.ca(a)
if(this.e.kP(u))a.preventDefault()},
shb:function(a){this.z=H.k(a,"$ib",[[P.cP,P.R]],"$ab")}}
D.bD.prototype={
gB:function(){var u=this.d
if(u==null){u=D.Y()
this.d=u}return u},
aD:function(a){var u
H.f(a,"$iB")
u=this.d
if(u!=null)u.L(a)},
fJ:function(){return this.aD(null)},
saf:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gB().N(0,this.gd9())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd9())
u=new D.N("mover",t,this.b,this,[U.al])
u.b=!0
this.aD(u)}},
saa:function(a,b){var u,t
if(b==null)b=new V.a1(1,1,1)
if(!this.c.v(0,b)){u=this.c
this.c=b
t=new D.N("color",u,b,this,[V.a1])
t.b=!0
this.aD(t)}},
$ia8:1,
$ibp:1}
D.a8.prototype={$ibp:1}
D.dQ.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.Y()
this.Q=u}return u},
aD:function(a){var u=this.Q
if(u!=null)u.L(a)},
dD:function(a){var u
H.f(a,"$iB")
u=this.ch
if(u!=null)u.L(a)},
i2:function(){return this.dD(null)},
ii:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fI(s))return!1}return!0},
hG:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdC(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.f(b[p],"$ia8")
if(o instanceof D.bD)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bY()
n.sak(null)
n.saT(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c0(a,b,this,[u])
u.b=!0
this.aD(u)},
im:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gdC();t.F();){r=t.gM(t)
C.a.N(this.e,r)
r.gB().N(0,s)}u=new D.c1(a,b,this,[u])
u.b=!0
this.aD(u)},
fI:function(a){var u=C.a.Y(this.e,a)
return u},
sh8:function(a){this.e=H.k(a,"$ib",[D.bD],"$ab")},
siu:function(a){this.f=H.k(a,"$ib",[D.e2],"$ab")},
siW:function(a){this.r=H.k(a,"$ib",[D.ea],"$ab")},
sj8:function(a){this.x=H.k(a,"$ib",[D.ej],"$ab")},
sj9:function(a){this.y=H.k(a,"$ib",[D.ek],"$ab")},
sja:function(a){this.z=H.k(a,"$ib",[D.el],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.e2.prototype={$ia8:1,$ibp:1}
D.ea.prototype={$ia8:1,$ibp:1}
D.ej.prototype={$ia8:1,$ibp:1}
D.ek.prototype={$ia8:1,$ibp:1}
D.el.prototype={$ia8:1,$ibp:1}
V.a1.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcT())
t=C.e.p(this.b,b.gbS())
s=C.e.p(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcT())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcq())
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
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aL.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcT())
t=C.e.p(this.b,b.gbS())
s=C.e.p(this.c,b.gcq())
r=C.e.p(this.d,b.gjI(b))
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
u=C.e.t(this.a,b.gcT())
t=C.e.t(this.b,b.gbS())
s=C.e.t(this.c,b.gcq())
r=C.e.t(this.d,b.gjI(b))
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
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.h4.prototype={}
V.c3.prototype={
ai:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c3))return!1
u=b.a
t=$.M().a
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
t=V.ci(H.d([this.a,this.d,this.r],u),3,0)
s=V.ci(H.d([this.b,this.e,this.x],u),3,0)
r=V.ci(H.d([this.c,this.f,this.y],u),3,0)
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
V.ak.prototype={
ai:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
ey:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.M().a)return V.dW()
a8=1/a7
a9=-r
b0=-d
return V.b7((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
D:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b7(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cY:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.J(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bg:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a4(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.M().a
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
ep:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.ci(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ci(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ci(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ci(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.ep("",3,0)},
G:function(a){return this.ep(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
D:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b9.prototype={
p:function(a,b){return new V.b9(C.e.p(this.a,b.glj(b)),C.e.p(this.b,b.glk(b)),C.e.p(this.c,b.gll(b)),C.e.p(this.d,b.gli(b)))},
t:function(a,b){return new V.b9(C.e.t(this.a,b.glj(b)),C.e.t(this.b,b.glk(b)),C.e.t(this.c,b.gll(b)),C.e.t(this.d,b.gli(b)))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.e6.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.a3.prototype={
cM:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.I(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.I(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gkf(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gkg(b)
if(typeof u!=="number")return u.p()
return new V.a3(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gkf(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gkg(b)
if(typeof u!=="number")return u.t()
return new V.a3(t,C.e.t(u,s))},
D:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.a3(u*b,t*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mt
if(u==null){u=new V.a3(0,0)
$.mt=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.a3(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.J.prototype={
cM:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cN:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aJ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.J(this.a-b.a,this.b-b.b,this.c-b.c)},
W:function(a){return new V.J(-this.a,-this.b,-this.c)},
D:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.M().a)return V.d1()
return new V.J(this.a/b,this.b/b,this.c/b)},
ez:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fM.prototype={
bX:function(a){var u=V.l2(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u},
U:function(a){var u=this.y
if(u!=null)u.L(a)},
sf3:function(a,b){},
seA:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.M().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bX(t)}u=new D.N("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.U(u)}},
seC:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bX(t)}u=new D.N("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.U(u)}},
sa5:function(a,b){var u
b=this.bX(b)
u=this.d
if(!(Math.abs(u-b)<$.M().a)){this.d=b
u=new D.N("location",u,b,this,[P.r])
u.b=!0
this.U(u)}},
seB:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.M().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.N("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.U(u)}},
sa3:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.N("velocity",u,a,this,[P.r])
u.b=!0
this.U(u)}},
se_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.N("dampening",u,a,this,[P.r])
u.b=!0
this.U(u)}},
aN:function(a,b){var u,t,s,r,q
u=this.f
t=$.M().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa5(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.M().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa3(s)}}}
U.dy.prototype={
gB:function(){var u=this.b
if(u==null){u=D.Y()
this.b=u}return u},
aB:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cz.prototype={
gB:function(){var u=this.e
if(u==null){u=D.Y()
this.e=u}return u},
U:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.L(a)},
ar:function(){return this.U(null)},
hE:function(a,b){var u,t,s,r,q,p,o,n
u=U.al
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbl(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.U(u)},
ik:function(a,b){var u,t,s
u=U.al
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gbl();t.F();)t.gM(t).gB().N(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.U(u)},
aB:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ax(u,u.length,0,[H.u(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.aB(0,b,c)
if(r!=null)s=s==null?r:r.D(0,s)}}this.f=s==null?V.dW():s
u=this.e
if(u!=null)u.ah(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.S(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.al]},
$aa6:function(){return[U.al]},
$ial:1}
U.al.prototype={}
U.e7.prototype={
gB:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u},
U:function(a){var u=this.y
if(u!=null)u.L(a)},
sf4:function(a){var u
a=V.l2(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.N("yaw",u,a,this,[P.r])
u.b=!0
this.U(u)}},
seM:function(a,b){var u
b=V.l2(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.N("pitch",u,b,this,[P.r])
u.b=!0
this.U(u)}},
seS:function(a){var u
a=V.l2(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.N("roll",u,a,this,[P.r])
u.b=!0
this.U(u)}},
aB:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sf4(this.a+this.d*b.y)
this.seM(0,this.b+this.e*b.y)
this.seS(this.c+this.f*b.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.b7(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).D(0,V.m4(this.b)).D(0,V.lh(this.a))
u=this.y
if(u!=null)u.ah(0)}return this.x},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e7))return!1
u=this.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"], ["+V.Q(this.d,3,0)+", "+V.Q(this.e,3,0)+", "+V.Q(this.f,3,0)+"]"}}
U.eu.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.Y()
this.fx=u}return u},
U:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.L(a)},
ar:function(){return this.U(null)},
jK:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.Y()
u.b=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.c
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.ghz())
u=this.a.c
t=u.c
if(t==null){t=D.Y()
u.c=t
u=t}else u=t
u.h(0,this.ghB())
u=this.a.d
t=u.f
if(t==null){t=D.Y()
u.f=t
u=t}else u=t
u.h(0,this.ghs())
u=this.a.d
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.ghu())
u=this.a.e
t=u.b
if(t==null){t=D.Y()
u.b=t
u=t}else u=t
u.h(0,this.gj5())
u=this.a.e
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.gj3())
u=this.a.e
t=u.c
if(t==null){t=D.Y()
u.c=t
u=t}else u=t
u.h(0,this.gj1())
return!0},
at:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.a3(u,t)},
hy:function(a){a=H.m(H.f(a,"$iB"),"$ibI")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hA:function(a){var u,t,s,r,q,p,o
a=H.m(H.f(a,"$iB"),"$ibI")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a3(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.I(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.a3(t.a,t.b).D(0,2).C(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.I(s)
t.sa3(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.I(t)
s.sa3(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a3(s.a,s.b).D(0,2).C(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.I(p)
o=this.cy
if(typeof o!=="number")return H.I(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.I(q)
s=this.db
if(typeof s!=="number")return H.I(s)
o.sa5(0,-p*q+s)
this.b.sa3(0)
this.c.sa3(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a3(t.a,t.b).D(0,2).C(0,u.gaA()))}this.ar()},
hC:function(a){var u,t,s
H.f(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.I(s)
u.sa3(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.I(u)
s.sa3(-t*10*u)
this.ar()}},
ht:function(a){if(H.m(H.f(a,"$iB"),"$idT").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hv:function(a){var u,t,s,r,q,p,o
a=H.m(H.f(a,"$iB"),"$ibI")
if(!J.S(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a3(s.a,s.b).D(0,2).C(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.I(p)
o=this.cy
if(typeof o!=="number")return H.I(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.I(q)
s=this.db
if(typeof s!=="number")return H.I(s)
o.sa5(0,-p*q+s)
this.b.sa3(0)
this.c.sa3(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a3(t.a,t.b).D(0,2).C(0,u.gaA()))
this.ar()},
j6:function(a){H.f(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j4:function(a){var u,t,s,r,q,p,o
a=H.m(H.f(a,"$iB"),"$ieo")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a3(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.I(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.a3(t.a,t.b).D(0,2).C(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.I(s)
t.sa3(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.I(t)
s.sa3(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a3(s.a,s.b).D(0,2).C(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.I(p)
o=this.cy
if(typeof o!=="number")return H.I(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.I(q)
s=this.db
if(typeof s!=="number")return H.I(s)
o.sa5(0,-p*q+s)
this.b.sa3(0)
this.c.sa3(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a3(t.a,t.b).D(0,2).C(0,u.gaA()))}this.ar()},
j2:function(a){var u,t,s
H.f(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.I(s)
u.sa3(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.I(u)
s.sa3(-t*10*u)
this.ar()}},
aB:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.dy=t
s=b.y
this.c.aN(0,s)
this.b.aN(0,s)
this.fr=V.lh(this.b.d).D(0,V.m4(this.c.d))}return this.fr},
$ial:1}
M.dE.prototype={
aE:function(a){var u
H.f(a,"$iB")
u=this.x
if(u!=null)u.L(a)},
fK:function(){return this.aE(null)},
hO:function(a,b){var u,t,s,r,q,p,o,n
u=E.ao
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gas(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bY()
n.sak(null)
n.saT(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sak(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.aE(u)},
hQ:function(a,b){var u,t,s
u=E.ao
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gas();t.F();)t.gM(t).gB().N(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.aE(u)},
seU:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().N(0,this.gas())
t=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gas())
u=new D.N("technique",t,this.c,this,[O.ca])
u.b=!0
this.aE(u)}},
gB:function(){var u=this.x
if(u==null){u=D.Y()
this.x=u}return u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=new E.ec(a,this)
u.b=!0
t=this.e
if(t!=null)t.L(u)
a.eP(this.c)
t=this.b
t.toString
s=a.a
C.b.jN(s,36160,null)
C.b.cA(s,2884)
C.b.cA(s,2929)
C.b.ka(s,513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.I(r)
n=C.e.ao(o*r)
o=p.b
if(typeof q!=="number")return H.I(q)
m=C.e.ao(o*q)
o=C.e.ao(p.c*r)
a.c=o
p=C.e.ao(p.d*q)
a.d=p
C.b.lh(s,n,m,o,p)
C.b.jT(s,t.c)
t=t.a
C.b.jS(s,t.a,t.b,t.c,t.d)
C.b.jR(s,16640)
t=this.a
s=a.c
p=a.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.b7(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t.a
a.cy.eO(h)
s=$.m9
if(s==null){s=V.mb()
p=V.my()
o=$.mu
if(o==null){o=new V.J(0,0,-1)
$.mu=o}o=V.m3(s,p,o)
$.m9=o
g=o}else g=s
s=t.b
if(s!=null){f=s.aB(0,a,t)
if(f!=null)g=f.D(0,g)}a.db.eO(g)
t=this.c
if(t!=null)t.aN(0,a)
for(t=this.d.a,t=new J.ax(t,t.length,0,[H.u(t,0)]);t.F();)t.d.aN(0,a)
for(t=this.d.a,t=new J.ax(t,t.length,0,[H.u(t,0)]);t.F();)t.d.aZ(a)
this.a.toString
a.cy.cQ()
a.db.cQ()
this.b.toString
a.eN()},
sh2:function(a,b){this.d=H.k(b,"$ia6",[E.ao],"$aa6")},
$ipK:1}
A.ds.prototype={}
A.fB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ki:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e2(r.a,r.c)}},
kc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e1(r.a,r.c)}}}
A.hF.prototype={
fz:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.je(u)
a7.jl(u)
a7.jf(u)
a7.jt(u)
a7.ju(u)
a7.jn(u)
a7.jy(u)
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
s.ji(u)
s.jd(u)
s.jg(u)
s.jj(u)
s.jr(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jp(u)
s.jq(u)}s.jm(u)
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
s.jh(u)
s.jo(u)
s.js(u)
s.jv(u)
s.jw(u)
s.jx(u)
s.jk(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dq(n,35633)
this.f=this.dq(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dU(s,q,this.e)
C.b.dU(s,this.r,this.f)
C.b.ky(s,this.r)
if(!H.lw(C.b.bR(s,this.r,35714))){h=C.b.fb(s,this.r)
C.b.k6(s,this.r)
H.t(P.w("Failed to link shader: "+H.l(h)))}this.iR()
this.iT()
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
if(a7.x2)this.k1=H.m(this.y.q(0,"txt2DMat"),"$icV")
if(a7.y1)this.k2=H.m(this.y.q(0,"txtCubeMat"),"$iaB")
if(a7.y2)this.k3=H.m(this.y.q(0,"colorMat"),"$iaB")
this.sfZ(H.d([],[A.aB]))
t=a7.ay
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.m(f,"$iaB"))}}t=a7.a
if(t!==C.d){this.r2=H.m(this.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.m(this.y.q(0,"emissionTxt"),"$iap")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iP")
break
case C.i:this.ry=H.m(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iP")
break}}t=a7.b
if(t!==C.d){this.x2=H.m(this.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.m(this.y.q(0,"ambientTxt"),"$iap")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iP")
break
case C.i:this.y2=H.m(this.y.q(0,"ambientTxt"),"$iaq")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iP")
break}}t=a7.c
if(t!==C.d){this.am=H.m(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.bu=H.m(this.y.q(0,"diffuseTxt"),"$iap")
this.bv=H.m(this.y.q(0,"nullDiffuseTxt"),"$iP")
break
case C.i:this.e3=H.m(this.y.q(0,"diffuseTxt"),"$iaq")
this.bv=H.m(this.y.q(0,"nullDiffuseTxt"),"$iP")
break}}t=a7.d
if(t!==C.d){this.bw=H.m(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.e4=H.m(this.y.q(0,"invDiffuseTxt"),"$iap")
this.bx=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break
case C.i:this.e5=H.m(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bx=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a7.e
if(t!==C.d){this.bA=H.m(this.y.q(0,"shininess"),"$ia2")
this.by=H.m(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.e6=H.m(this.y.q(0,"specularTxt"),"$iap")
this.bz=H.m(this.y.q(0,"nullSpecularTxt"),"$iP")
break
case C.i:this.e7=H.m(this.y.q(0,"specularTxt"),"$iaq")
this.bz=H.m(this.y.q(0,"nullSpecularTxt"),"$iP")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e8=H.m(this.y.q(0,"bumpTxt"),"$iap")
this.bB=H.m(this.y.q(0,"nullBumpTxt"),"$iP")
break
case C.i:this.e9=H.m(this.y.q(0,"bumpTxt"),"$iaq")
this.bB=H.m(this.y.q(0,"nullBumpTxt"),"$iP")
break}if(a7.dy){this.ea=H.m(this.y.q(0,"envSampler"),"$iaq")
this.eb=H.m(this.y.q(0,"nullEnvTxt"),"$iP")
t=a7.r
if(t!==C.d){this.bC=H.m(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ec=H.m(this.y.q(0,"reflectTxt"),"$iap")
this.bD=H.m(this.y.q(0,"nullReflectTxt"),"$iP")
break
case C.i:this.ed=H.m(this.y.q(0,"reflectTxt"),"$iaq")
this.bD=H.m(this.y.q(0,"nullReflectTxt"),"$iP")
break}}t=a7.x
if(t!==C.d){this.bE=H.m(this.y.q(0,"refraction"),"$ia2")
this.bF=H.m(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ee=H.m(this.y.q(0,"refractTxt"),"$iap")
this.bG=H.m(this.y.q(0,"nullRefractTxt"),"$iP")
break
case C.i:this.ef=H.m(this.y.q(0,"refractTxt"),"$iaq")
this.bG=H.m(this.y.q(0,"nullRefractTxt"),"$iP")
break}}}t=a7.y
if(t!==C.d){this.bH=H.m(this.y.q(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.j:break
case C.h:this.eg=H.m(this.y.q(0,"alphaTxt"),"$iap")
this.bI=H.m(this.y.q(0,"nullAlphaTxt"),"$iP")
break
case C.i:this.eh=H.m(this.y.q(0,"alphaTxt"),"$iaq")
this.bI=H.m(this.y.q(0,"nullAlphaTxt"),"$iP")
break}}this.sfL(H.d([],[A.cU]))
this.sfM(H.d([],[A.cW]))
this.sfN(H.d([],[A.cX]))
this.sfO(H.d([],[A.cY]))
this.sfP(H.d([],[A.cZ]))
this.sfQ(H.d([],[A.d_]))
if(a7.k2){t=a7.z
if(t>0){this.ei=H.f(this.y.q(0,"dirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.cB;(s&&C.a).h(s,new A.cU(g,f,e))}}t=a7.Q
if(t>0){this.ej=H.f(this.y.q(0,"pntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$ia2")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.cC;(s&&C.a).h(s,new A.cW(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ek=H.f(this.y.q(0,"spotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iO")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia2")
s=this.cD;(s&&C.a).h(s,new A.cX(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.el=H.f(this.y.q(0,"txtDirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iO")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iO")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iP")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iap")
s=this.cE;(s&&C.a).h(s,new A.cY(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.em=H.f(this.y.q(0,"txtPntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$icV")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iO")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iP")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$iaq")
s=this.cF;(s&&C.a).h(s,new A.cZ(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.en=H.f(this.y.q(0,"txtSpotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iO")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iO")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iP")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iO")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a3,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a4,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a5,"$ia2")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a6,"$iap")
s=this.cG;(s&&C.a).h(s,new A.d_(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
al:function(a,b,c){if(c==null||!c.d)C.b.V(b.a,b.d,1)
else{a.fm(c)
C.b.V(b.a,b.d,0)}},
ac:function(a,b,c){C.b.V(b.a,b.d,1)},
sfZ:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sfL:function(a){this.cB=H.k(a,"$ib",[A.cU],"$ab")},
sfM:function(a){this.cC=H.k(a,"$ib",[A.cW],"$ab")},
sfN:function(a){this.cD=H.k(a,"$ib",[A.cX],"$ab")},
sfO:function(a){this.cE=H.k(a,"$ib",[A.cY],"$ab")},
sfP:function(a){this.cF=H.k(a,"$ib",[A.cZ],"$ab")},
sfQ:function(a){this.cG=H.k(a,"$ib",[A.d_],"$ab")}}
A.hI.prototype={
je:function(a){var u,t,s
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
jl:function(a){var u
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
jf:function(a){var u
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
jt:function(a){var u,t
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
ju:function(a){var u,t
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
jn:function(a){var u
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
jy:function(a){var u
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
ji:function(a){var u,t
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
jd:function(a){var u,t
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
jg:function(a){var u,t
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
jj:function(a){var u,t
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
jr:function(a){var u,t
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
jm:function(a){var u,t
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
jp:function(a){var u,t
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
jq:function(a){var u,t
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
jh:function(a){var u,t
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
jo:function(a){var u,t
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
js:function(a){var u,t
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
jv:function(a){var u,t,s
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
jw:function(a){var u,t,s
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
jx:function(a){var u,t,s
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
jk:function(a){var u
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
A.cU.prototype={}
A.cY.prototype={}
A.cW.prototype={}
A.cZ.prototype={}
A.cX.prototype={}
A.d_.prototype={}
A.cN.prototype={
fC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dq:function(a,b){var u,t,s
u=this.a
t=C.b.k0(u,b)
C.b.fn(u,t,a)
C.b.jV(u,t)
if(!H.lw(C.b.fd(u,t,35713))){s=C.b.fc(u,t)
C.b.k7(u,t)
throw H.c(P.w("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
iR:function(){var u,t,s,r,q,p
u=H.d([],[A.ds])
t=this.a
s=H.ai(C.b.bR(t,this.r,35721))
if(typeof s!=="number")return H.I(s)
r=0
for(;r<s;++r){q=C.b.f6(t,this.r,r)
p=C.b.f8(t,this.r,q.name)
C.a.h(u,new A.ds(t,q.name,p))}this.x=new A.fB(u)},
iT:function(){var u,t,s,r,q,p
u=H.d([],[A.ep])
t=this.a
s=H.ai(C.b.bR(t,this.r,35718))
if(typeof s!=="number")return H.I(s)
r=0
for(;r<s;++r){q=C.b.f7(t,this.r,r)
p=C.b.fe(t,this.r,q.name)
C.a.h(u,this.k5(q.type,q.size,q.name,p))}this.y=new A.j4(u)},
aS:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.lk(u,t,b,a,c)},
h5:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ap(u,t,b,c)
else return A.lk(u,t,b,a,c)},
h6:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lk(u,t,b,a,c)},
bq:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
k5:function(a,b,c,d){switch(a){case 5120:return this.aS(b,c,d)
case 5121:return this.aS(b,c,d)
case 5122:return this.aS(b,c,d)
case 5123:return this.aS(b,c,d)
case 5124:return this.aS(b,c,d)
case 5125:return this.aS(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.j_(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.j2(this.a,this.r,c,d)
case 35667:return new A.j0(this.a,this.r,c,d)
case 35668:return new A.j1(this.a,this.r,c,d)
case 35669:return new A.j3(this.a,this.r,c,d)
case 35674:return new A.j5(this.a,this.r,c,d)
case 35675:return new A.cV(this.a,this.r,c,d)
case 35676:return new A.aB(this.a,this.r,c,d)
case 35678:return this.h5(b,c,d)
case 35680:return this.h6(b,c,d)
case 35670:throw H.c(this.bq("BOOL",c))
case 35671:throw H.c(this.bq("BOOL_VEC2",c))
case 35672:throw H.c(this.bq("BOOL_VEC3",c))
case 35673:throw H.c(this.bq("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.ep.prototype={}
A.j4.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kq:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kq("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sjb:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cV.prototype={
ap:function(a){var u=new Float32Array(H.cd(H.k(a,"$ib",[P.r],"$ab")))
C.b.eZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aB.prototype={
ap:function(a){var u=new Float32Array(H.cd(H.k(a,"$ib",[P.r],"$ab")))
C.b.f_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
fm:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.V(t,s,0)
else C.b.V(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kr.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cN(u.b,b).cN(u.d.cN(u.c,b),c)
a.sa5(0,new V.a4(t.a,t.b,t.c))
a.seV(t.C(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdV(new V.b9(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.kB.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.kD.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.I(q)
t=-t*q
p=s*q
a.sa5(0,new V.a4(t,p,r))
p=new V.J(t,p,r)
a.seV(p.C(0,Math.sqrt(p.I(p))))
a.sdV(new V.b9(1-c,2+c,-1,-1))},
$S:8}
F.kE.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:21}
F.kF.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:21}
F.kZ.prototype={
$2:function(a,b){return 0},
$S:31}
F.l_.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.I(u)
t=a.f
s=new V.J(t.a,t.b,t.c)
u=s.C(0,Math.sqrt(s.I(s))).D(0,this.b+u)
a.sa5(0,new V.a4(u.a,u.b,u.c))},
$S:8}
F.l0.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:29}
F.kM.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:29}
F.kC.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lJ(t.$1(u),s)
s=J.nt(J.lJ(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.J(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.I(s)))
t=$.mv
if(t==null){t=new V.J(1,0,0)
$.mv=t
p=t}else p=t
t=q.aJ(!J.S(q,p)?V.mz():p)
o=t.C(0,Math.sqrt(t.I(t)))
t=o.aJ(q)
p=t.C(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.D(0,t*s)
s=o.D(0,m*s)
a.sa5(0,J.ns(r,new V.a4(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
b7:function(){if(!this.gb8()){C.a.N(this.a.a.d.b,this)
this.a.a.a4()}this.cc()
this.cd()
this.iB()},
ci:function(a){this.a=a
C.a.h(a.d.b,this)},
cj:function(a){this.b=a
C.a.h(a.d.c,this)},
iQ:function(a){this.c=a
C.a.h(a.d.d,this)},
cc:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cd:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
iB:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fY:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d1()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ez())return
return q.C(0,Math.sqrt(q.I(q)))},
h1:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.J(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.J(u.a,u.b,u.c)
u=q.aJ(u.C(0,Math.sqrt(u.I(u))))
return u.C(0,Math.sqrt(u.I(u)))},
ct:function(){if(this.d!=null)return!0
var u=this.fY()
if(u==null){u=this.h1()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
fX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d1()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ez())return
return q.C(0,Math.sqrt(q.I(q)))},
h0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.M().a){u=m.t(0,p)
u=new V.J(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.t(0,p).D(0,g).p(0,p).t(0,s)
u=new V.J(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.I(u)))
u=f.aJ(h)
u=u.C(0,Math.sqrt(u.I(u))).aJ(f)
h=u.C(0,Math.sqrt(u.I(u)))}return h},
cr:function(){if(this.e!=null)return!0
var u=this.fX()
if(u==null){u=this.h0()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
gjU:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t
if(this.gb8())return a+"disposed"
u=a+C.c.ag(J.au(this.a.e),0)+", "+C.c.ag(J.au(this.b.e),0)+", "+C.c.ag(J.au(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.G("")}}
F.h8.prototype={}
F.iu.prototype={
b9:function(a,b,c){var u,t
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
F.bo.prototype={
b7:function(){if(!this.gb8()){C.a.N(this.a.a.c.b,this)
this.a.a.a4()}this.cc()
this.cd()},
ci:function(a){this.a=a
C.a.h(a.c.b,this)},
cj:function(a){this.b=a
C.a.h(a.c.c,this)},
cc:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cd:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){if(this.gb8())return a+"disposed"
return a+C.c.ag(J.au(this.a.e),0)+", "+C.c.ag(J.au(this.b.e),0)},
R:function(){return this.G("")}}
F.hs.prototype={}
F.iY.prototype={
b9:function(a,b,c){var u,t
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
F.bK.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ag(J.au(u.e),0)},
R:function(){return this.G("")}}
F.e9.prototype={
gB:function(){var u=this.e
if(u==null){u=D.Y()
this.e=u}return u},
ba:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jW())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bK()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.L(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nW(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
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
F.cw(k,j,h)}u=this.e
if(u!=null)u.ah(0)},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.ah(0)
return t},
kD:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
for(u=[F.ah];t.length!==0;){s=C.a.gkm(t)
C.a.kX(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.C)(t),++p){o=t[p]
if(o!=null&&a.b9(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.ba(r)}}this.a.A()
this.c.cU()
this.d.cU()
this.b.kY()
this.c.cV(new F.iY())
this.d.cV(new F.iu())
u=this.e
if(u!=null)u.ah(0)},
jF:function(a){this.kD(new F.jp(),new F.hZ())},
ck:function(){return this.jF(null)},
cH:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cH()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.h(u,t)
s=u[t]
u=s.r
if(u!=null)s.seD(new V.J(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.J(r,q,u).C(0,Math.sqrt(r*r+q*q+u*u))
if(!J.S(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.L(null)}}}}u=this.e
if(u!=null)u.ah(0)},
jP:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bv()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bu().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.dl().a)!==0)++r
if((s&$.dm().a)!==0)++r
if((s&$.cn().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a1.gd4(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.du])
for(m=0,l=0;l<r;++l){k=a1.jJ(l)
j=k.gd4(k)
C.a.n(n,l,new Z.du(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kz(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aw(t,34962,e)
C.b.dY(t,34962,new Float32Array(H.cd(o)),35044)
C.b.aw(t,34962,null)
d=new Z.dv(new Z.ew(34962,e),n,a1)
d.shk(H.d([],[Z.bG]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.ln(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bG(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.ln(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bG(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.ln(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bG(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
an:function(a){var u=this.e
if(u!=null)u.L(a)},
a4:function(){return this.an(null)},
$ipL:1}
F.im.prototype={
jB:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cw(s,p,o))}}return u},
jC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cw(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cw(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b9(0,p,n)){p.b7()
break}}}}},
cU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjU(s)
if(t)s.b7()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cr())s=!1
return s},
cH:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.L(null)}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
shc:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.io.prototype={
gl:function(a){return this.b.length},
cV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b9(0,p,n)){p.b7()
break}}}}},
cU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.S(s.a,s.b)
if(t)s.b7()}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
R:function(){return this.G("")},
sho:function(a){this.b=H.k(a,"$ib",[F.bo],"$ab")}}
F.ip.prototype={
gl:function(a){return this.b.length},
kY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.L(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc9:function(a){this.b=H.k(a,"$ib",[F.bK],"$ab")}}
F.ah.prototype={
cw:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ev(this.cx,s,p,u,t,r,q,a,o)},
jW:function(){return this.cw(null)},
sa5:function(a,b){var u
if(!J.S(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
seD:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.I(a)))
if(!J.S(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a4()}},
seV:function(a){var u
if(!J.S(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
sdV:function(a){var u
if(!J.S(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
kz:function(a){var u,t
if(a.v(0,$.bv())){u=this.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bu())){u=this.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=this.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bw())){u=this.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bx())){u=this.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dl())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dm())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cn()))return H.d([this.ch],[P.r])
else if(a.v(0,$.bs())){u=this.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d1()
this.d.O(0,new F.ju(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ah(0)}return!0},
cr:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d1()
this.d.O(0,new F.jt(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ah(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.c.ag(J.au(this.e),0))
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
C.a.h(u,V.Q(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
R:function(){return this.G("")}}
F.ju.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jt.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jk.prototype={
A:function(){var u,t,s,r
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
t.a4()
return!0},
jE:function(a,b,c,d,e,f,g,h,i){var u=F.ev(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jD:function(a,b,c,d,e,f){return this.jE(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cr()
return!0},
jQ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.S(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
this.A()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sjc:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.jl.prototype={
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
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.O(this.b,b)
C.a.O(this.c,new F.jm(this,b))
C.a.O(this.d,new F.jn(this,b))},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
shd:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
she:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
shf:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jm.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:6}
F.jn.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:6}
F.jo.prototype={
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
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
shp:function(a){this.b=H.k(a,"$ib",[F.bo],"$ab")},
shq:function(a){this.c=H.k(a,"$ib",[F.bo],"$ab")}}
F.jq.prototype={}
F.jp.prototype={
b9:function(a,b,c){return J.S(b.f,c.f)}}
F.jr.prototype={}
F.hZ.prototype={
ba:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.d1()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].seD(u)
return}}
F.js.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc9:function(a){this.b=H.k(a,"$ib",[F.bK],"$ab")}}
O.dV.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.Y()
this.dy=u}return u},
a0:function(a){var u
H.f(a,"$iB")
u=this.dy
if(u!=null)u.L(a)},
c8:function(){return this.a0(null)},
dH:function(a){H.f(a,"$iB")
this.a=null
this.a0(a)},
iH:function(){return this.dH(null)},
hI:function(a,b){var u=V.ak
u=new D.c0(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a0(u)},
hK:function(a,b){var u=V.ak
u=new D.c1(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a0(u)},
dl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.dx
t=C.f.a7(u.e.length+3,4)*4
s=C.f.a7(u.f.length+3,4)*4
r=C.f.a7(u.r.length+3,4)*4
q=C.f.a7(u.x.length+3,4)*4
p=C.f.a7(u.y.length+3,4)*4
o=C.f.a7(u.z.length+3,4)*4
n=C.f.a7(this.e.a.length+3,4)*4
u=this.b!=null
m=this.d!=null
l=this.f.c
k=this.r.c
j=this.x.c
i=this.y.c
h=this.z.c
g=this.Q.c
f=this.cx.c
e=this.cy.c
d=this.db.c
c="MaterialLight_"+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)+C.f.i(e.a)+C.f.i(d.a)+"_"
c+=u?"1":"0"
c+="0"
c=c+(m?"1":"0")+"_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
b=f!==C.d||e!==C.d
a=k!==C.d||j!==C.d||i!==C.d||h!==C.d
a0=h===C.d
a1=!a0||b
a2=j!==C.d||i!==C.d||!a0||g!==C.d||b
a0=g===C.d
a3=!a0
a4=l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h||e===C.h||d===C.h
a5=l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i||e===C.i||d===C.i
a6=s+p+q+r+o>0
a7=n>0
a8=a2||!a0||a1
a9=u&&a4
b0=$.bv()
if(a2){u=$.bu()
b0=new Z.be(b0.a|u.a)}if(a3){u=$.bt()
b0=new Z.be(b0.a|u.a)}if(a4){u=$.bw()
b0=new Z.be(b0.a|u.a)}if(a5){u=$.bx()
b0=new Z.be(b0.a|u.a)}if(a7){u=$.bs()
b0=new Z.be(b0.a|u.a)}return new A.hI(l,k,j,i,h,g,f,e,d,t,s,r,q,p,o,t+s+r+q+p+o,b,b,a6,a8,!0,!1,!1,a,a6,a1,a2,a3,a4,a5,a7,a9,!1,m,n,c.charCodeAt(0)==0?c:c,b0)},
Z:function(a,b){H.k(a,"$ib",[T.cR],"$ab")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
aN:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.F();){t=u.d
t.toString
s=$.jj
if(s==null){s=new V.J(0,0,1)
$.jj=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cY(s)}}},
l_:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dl()
t=a4.fr.j(0,u.am)
if(t==null){t=A.o1(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.bs(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bu
u=a5.e
if(!(u instanceof Z.dv)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.ax()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cs()
o.a.cs()
o=o.e
if(o!=null)o.ah(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jQ()
n=n.e
if(n!=null)n.ah(0)}l=a5.d.jP(new Z.jx(a4.a),q)
l.aY($.bv()).e=this.a.Q.c
if(u)l.aY($.bu()).e=this.a.cx.c
if(p)l.aY($.bt()).e=this.a.ch.c
if(r.rx)l.aY($.bw()).e=this.a.cy.c
if(o)l.aY($.bx()).e=this.a.db.c
if(r.x1)l.aY($.bs()).e=this.a.dx.c
a5.e=l}u=T.cR
k=H.d([],[u])
p=this.a
o=a4.a
C.b.f1(o,p.r)
p.x.ki()
if(r.fx){p=this.a
n=a4.dx
n=n.ga2(n)
p=p.dy
p.toString
p.ap(n.ai(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga2(n)
m=a4.dx
m=n.D(0,m.ga2(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ap(n.ai(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkV()
m=a4.dx
m=n.D(0,m.ga2(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ap(n.ai(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ap(n.ai(0,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ap(C.D.ai(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ap(n.ai(0,!0))}if(r.ay>0){j=this.e.a.length
p=this.a.k4
C.b.V(p.a,p.d,j)
for(p=[P.r],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.h(m,i)
m=m[i]
n.toString
H.f(m,"$iak")
n=n.r1
if(i>=n.length)return H.h(n,i)
n=n[i]
h=new Float32Array(H.cd(H.k(m.ai(0,!0),"$ib",p,"$ab")))
C.b.f_(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Z(k,this.f.d)
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
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Z(k,this.f.e)
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
C.b.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Z(k,this.r.d)
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
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Z(k,this.r.e)
p=this.a
n=this.r.e
p.ac(p.y2,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.am
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Z(k,this.x.d)
p=this.a
n=this.x.d
p.al(p.bu,p.bv,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Z(k,this.x.e)
p=this.a
n=this.x.e
p.ac(p.e3,p.bv,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bw
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Z(k,this.y.d)
p=this.a
n=this.y.d
p.al(p.e4,p.bx,n)
n=this.a
p=this.y.f
n=n.bw
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Z(k,this.y.e)
p=this.a
n=this.y.e
p.ac(p.e5,p.bx,n)
n=this.a
p=this.y.f
n=n.bw
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.by
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bA
C.b.T(n.a,n.d,g)
break
case C.h:this.Z(k,this.z.d)
p=this.a
n=this.z.d
p.al(p.e6,p.bz,n)
n=this.a
p=this.z.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bA
C.b.T(p.a,p.d,g)
break
case C.i:this.Z(k,this.z.e)
p=this.a
n=this.z.e
p.ac(p.e7,p.bz,n)
n=this.a
p=this.z.f
n=n.by
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bA
C.b.T(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ei
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cB
if(e>=m.length)return H.h(m,e)
b=m[e]
m=f.cY(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.C(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ej
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cC
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbd(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bg(c.gbd(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gaa(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcl()
g=b.e
C.b.T(g.a,g.d,m)
m=c.gcm()
g=b.f
C.b.T(g.a,g.d,m)
m=c.gcn()
g=b.r
C.b.T(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ek
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cD
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbd(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcz(c).ls()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bg(c.gbd(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gaa(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glp()
g=b.f
C.b.T(g.a,g.d,m)
m=c.glo()
g=b.r
C.b.T(g.a,g.d,m)
m=c.gcl()
g=b.x
C.b.T(g.a,g.d,m)
m=c.gcm()
g=b.y
C.b.T(g.a,g.d,m)
m=c.gcn()
g=b.z
C.b.T(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.el
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cE
if(e>=g.length)return H.h(g,e)
b=g[e]
g=c.gbe()
H.k(k,"$ib",m,"$ab")
if(!C.a.Y(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gcz(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.glf()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbM(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.cY(c.gcz(c))
a=g.a
a0=g.b
a1=g.c
a1=g.C(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.gaa(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbe()
g=a1.gcO(a1)
if(!g){g=b.x
C.b.V(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.V(a0,g,0)
else C.b.V(a0,g,a1.a)
g=b.x
C.b.V(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.em
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.y,n=p.length,m=[P.r],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cF
if(e>=a.length)return H.h(a,e)
b=a[e]
a=c.gbe()
H.k(k,"$ib",g,"$ab")
if(!C.a.Y(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.D(0,c.ga2(c))
a=c.ga2(c)
a0=$.cK
if(a0==null){a0=new V.a4(0,0,0)
$.cK=a0}a0=a.bg(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cK
if(a==null){a=new V.a4(0,0,0)
$.cK=a}a=a2.bg(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.ey(0)
a0=b.d
h=new Float32Array(H.cd(H.k(new V.c3(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ai(0,!0),"$ib",m,"$ab")))
C.b.eZ(a0.a,a0.d,!1,h)
a0=c.gaa(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbe()
a=a0.gcO(a0)
if(!a){a=b.r
C.b.V(a.a,a.d,1)}else{a=b.f
a1=a0.gcO(a0)
a3=a.a
a=a.d
if(!a1)C.b.V(a3,a,0)
else C.b.V(a3,a,a0.glq(a0))
a=b.r
C.b.V(a.a,a.d,0)}a=c.gcl()
a0=b.x
C.b.T(a0.a,a0.d,a)
a=c.gcm()
a0=b.y
C.b.T(a0.a,a0.d,a)
a=c.gcn()
a0=b.z
C.b.T(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.en
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cG
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbe()
H.k(k,"$ib",u,"$ab")
if(!C.a.Y(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gbd(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcz(c)
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glf()
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbM(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.bg(c.gbd(c))
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbe()
g=m.gcO(m)
if(!g){m=b.x
C.b.V(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.V(a0,g,0)
else C.b.V(a0,g,m.a)
m=b.x
C.b.V(m.a,m.d,0)}m=c.gaa(c)
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glt()
g=b.z
C.b.T(g.a,g.d,m)
m=c.glu()
g=b.Q
C.b.T(g.a,g.d,m)
m=c.gcl()
g=b.ch
C.b.T(g.a,g.d,m)
m=c.gcm()
g=b.cx
C.b.T(g.a,g.d,m)
m=c.gcn()
g=b.cy
C.b.T(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.Z(k,this.Q.d)
u=this.a
p=this.Q.d
u.al(u.e8,u.bB,p)
break
case C.i:this.Z(k,this.Q.e)
u=this.a
p=this.Q.e
u.ac(u.e9,u.bB,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga2(p).ey(0)
a4.Q=p}u=u.id
u.toString
u.ap(p.ai(0,!0))}if(r.dy){this.Z(k,this.ch)
u=this.a
p=this.ch
u.ac(u.ea,u.eb,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bC
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.Z(k,this.cx.d)
u=this.a
p=this.cx.d
u.al(u.ec,u.bD,p)
p=this.a
u=this.cx.f
p=p.bC
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.Z(k,this.cx.e)
u=this.a
p=this.cx.e
u.ac(u.ed,u.bD,p)
p=this.a
u=this.cx.f
p=p.bC
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bF
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bE
C.b.T(p.a,p.d,m)
break
case C.h:this.Z(k,this.cy.d)
u=this.a
p=this.cy.d
u.al(u.ee,u.bG,p)
p=this.a
u=this.cy.f
p=p.bF
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bE
C.b.T(u.a,u.d,m)
break
case C.i:this.Z(k,this.cy.e)
u=this.a
p=this.cy.e
u.ac(u.ef,u.bG,p)
p=this.a
u=this.cy.f
p=p.bF
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bE
C.b.T(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bH
C.b.T(u.a,u.d,n)
break
case C.h:this.Z(k,this.db.d)
u=this.a
n=this.db.d
u.al(u.eg,u.bI,n)
n=this.a
u=this.db.f
n=n.bH
C.b.T(n.a,n.d,u)
break
case C.i:this.Z(k,this.db.e)
u=this.a
n=this.db.e
u.ac(u.eh,u.bI,n)
n=this.a
u=this.db.f
n=n.bH
C.b.T(n.a,n.d,u)
break}C.b.cA(o,3042)
C.b.jO(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dP(o,33984+u.a)
C.b.aX(o,3553,u.b)}}u=a5.e
u.co(a4)
u.aZ(a4)
u.le(a4)
if(p)C.b.kb(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dP(o,33984+u.a)
C.b.aX(o,3553,null)}}u=this.a
u.toString
C.b.f1(o,null)
u.x.kc()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dl().am},
sh_:function(a){this.e=H.k(a,"$ia6",[V.ak],"$aa6")}}
O.hG.prototype={}
O.cD.prototype={
a0:function(a){this.a.a0(H.f(a,"$iB"))},
c8:function(){return this.a0(null)},
aH:function(){},
iO:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gB().N(0,this.gbo())
t=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gbo())
u=new D.N(this.b+".texture2D",t,this.d,this,[T.ei])
u.b=!0
this.a.a0(u)}},
iP:function(a){}}
O.hH.prototype={}
O.b6.prototype={
dJ:function(a){var u,t
if(!J.S(this.f,a)){u=this.f
this.f=a
t=new D.N(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.a0(t)}},
aH:function(){this.fu()
this.dJ(new V.a1(1,1,1))},
saa:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aH()
u=this.a
u.a=null
u.a0(null)}this.dJ(b)}}
O.hJ.prototype={
iN:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.N(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.a0(u)}},
aH:function(){this.bV()
this.iN(1)}}
O.hK.prototype={
ce:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.N(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.a0(u)}},
aH:function(){this.bV()
this.ce(100)}}
O.ca.prototype={}
T.cR.prototype={}
T.ei.prototype={}
T.iK.prototype={
gB:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u}}
T.iL.prototype={
kB:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aX(u,3553,t)
C.b.bN(u,3553,10242,10497)
C.b.bN(u,3553,10243,10497)
C.b.bN(u,3553,10241,9729)
C.b.bN(u,3553,10240,9729)
C.b.aX(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.iK()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.ac(s,"load",H.n(new T.iM(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kA:function(a,b){return this.kB(a,!1,!1,!1,b)},
iI:function(a,b,c){var u,t,s,r
b=V.lD(b,2)
u=V.lD(a.width,2)
t=V.lD(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l8(null,null)
s.width=u
s.height=t
r=H.f(C.q.fa(s,"2d"),"$ibV")
r.imageSmoothingEnabled=!1;(r&&C.C).ke(r,a,0,0,s.width,s.height)
return P.pa(C.C.hj(r,0,0,s.width,s.height))}}}
T.iM.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iI(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aX(t,3553,this.e)
C.b.kU(t,37440,this.f?1:0)
C.b.l7(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.f5(t,3553)
C.b.aX(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kh()}++s.e},
$S:12}
V.bi.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dU.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aL:function(a,b){return!this.ft(0,b)},
i:function(a){return"!["+this.d5(0)+"]"}}
V.ia.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c6(this.a)
t=H.c6(this.b)
return u+".."+t},
$iaz:1}
V.il.prototype={
fB:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aO([P.o,P.U])
for(t=new H.cC(a,a.gl(a),0,[H.at(a,"y",0)]);t.F();)u.n(0,t.d,!0)
this.siL(u)},
aL:function(a,b){return this.a.bs(0,b)},
i:function(a){var u=this.a
return P.ed(u.ga8(u),0,null)},
siL:function(a){this.a=H.k(a,"$iE",[P.o,P.U],"$aE")},
$iaz:1}
V.cO.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cT(this.a.k(0,b))
r.sa9(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
kl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sj7:function(a){this.c=H.k(a,"$ib",[V.cT],"$ab")}}
V.en.prototype={
i:function(a){var u,t
u=H.lE(this.b,"\n","\\n")
t=H.lE(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cS.prototype={
aM:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siC:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iP.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cO(this,b)
u.sj7(H.d([],[V.cT]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cS(this,a)
t=P.e
u.siC(new H.aO([t,t]))
this.b.n(0,a,u)}return u},
eY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.en])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.kl(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ed(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ed(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.en(j==null?k.b:j,l,o)}++o}}},
siX:function(a){this.a=H.k(a,"$iE",[P.e,V.cO],"$aE")},
sj0:function(a){this.b=H.k(a,"$iE",[P.e,V.cS],"$aE")}}
V.cT.prototype={
i:function(a){return this.b.b+": "+this.d5(0)}}
X.dx.prototype={$ibp:1}
X.hf.prototype={
gB:function(){var u=this.x
if(u==null){u=D.Y()
this.x=u}return u}}
X.e1.prototype={
gB:function(){var u=this.f
if(u==null){u=D.Y()
this.f=u}return u},
aR:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.L(a)},
fU:function(){return this.aR(null)},
saf:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gB().N(0,this.gda())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gda())
u=new D.N("mover",t,this.b,this,[U.al])
u.b=!0
this.aR(u)}},
$ibp:1,
$idx:1}
X.eg.prototype={}
V.bB.prototype={
bk:function(a){this.b=new P.hi(C.Y)
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
H.H(p)
n=this.b.h4(p,0,p.length)
m=n==null?p:n
C.k.fj(o,H.lE(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eK:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bt()
this.c=t}for(t=t.eY(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bL(t[r])},
sc3:function(a){this.d=H.k(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kY.prototype={
$1:function(a){H.f(a,"$ibb")
P.aZ(C.e.eX(this.a.gkr(),2)+" fps")},
$S:51}
V.fV.prototype={
bL:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
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
bt:function(){var u,t,s,r
u=V.iQ()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a_("0","9")
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
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bi())
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
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bi())
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
s.sa9(H.d([],r))
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
s.sa9(H.d([],r))
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
t.aM(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aM(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aM(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hg.prototype={
bL:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
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
bt:function(){var u,t,s,r
u=V.iQ()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a_("0","9")
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
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bi())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.av()
r=[V.az]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.av()
t.sa9(H.d([],r))
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
s.aM(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aM(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aM(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hh.prototype={
bL:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
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
bt:function(){var u,t,s
u=V.iQ()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bi())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bi())
t=u.k(0,"Other").m(0,"Other")
s=new V.av()
s.sa9(H.d([],[V.az]))
C.a.h(t.a,s)
t=V.x(new H.v('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
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
V.i4.prototype={
eK:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aD]]))
this.P(C.a.m(b,"\n"),"#111")},
bL:function(a){},
bt:function(){return}}
V.i8.prototype={
dQ:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mp().gcS().j(0,H.l(u))
if(t==null)if(d){c.$0()
this.dN(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lN(this.c).h(0,q)
o=W.nQ("radio")
o.checked=s
o.name=u
u=W.p
W.ac(o,"change",H.n(new V.i9(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.E(q,o)
n=r.createElement("span")
n.textContent=b
C.G.E(q,n)
J.lN(this.c).h(0,r.createElement("br"))},
b5:function(a,b,c){return this.dQ(a,b,c,!1)},
dN:function(a){var u,t,s,r,q
u=P.mp()
t=P.e
s=P.nY(u.gcS(),t,t)
s.n(0,this.a,a)
r=u.eQ(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iE(t,new P.k9([],[]).cZ(""),"",q)}}
V.i9.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dN(this.d)}},
$S:12}
V.iq.prototype={
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
o=W.p
W.ac(u,"scroll",H.n(new V.is(s),{func:1,ret:-1,args:[o]}),!1,o)},
dS:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iS()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eY(C.a.kx(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.pB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.E(t,l)}else{k=P.fh(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
C.k.E(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.E(t,o)
break}}C.k.E(this.a,t)},
f9:function(a){var u,t,s,r
u=new V.fV("dart")
u.bk("dart")
t=new V.hg("glsl")
t.bk("glsl")
s=new V.hh("html")
s.bk("html")
r=C.a.kn(H.d([u,t,s],[V.bB]),new V.it(a))
if(r!=null)return r
u=new V.i4("plain")
u.bk("plain")
return u},
dR:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dk(r).a6(r,"+")){C.a.n(a7,s,C.c.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a6(r,"-")){C.a.n(a7,s,C.c.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f9(a5)
q.eK(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.fh(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lP(null)
i.href="#"+H.l(m)
i.textContent=a4
C.k.E(j,i)
C.w.E(k,j)
C.n.E(l,k)
C.o.E(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.w.E(a,r[a0])
C.n.E(e,d)
C.n.E(e,c)
C.n.E(e,a)
C.o.E(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gX(r);a3.F();)C.w.E(c,a3.gM(a3))
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
jz:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.e],"$ab")
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
s=H.f((r&&C.n).dw(r,-1),"$iba").style
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
o=H.f(C.n.dw(r,-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.w).E(o,p)}},
iS:function(){var u,t,s,r
if(this.b!=null)return
u=V.iQ()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.av()
r=[V.az]
s.sa9(H.d([],r))
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
s.sa9(H.d([],r))
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
s.sa9(H.d([],r))
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
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.av()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bi())
s=u.k(0,"Other").m(0,"Other")
t=new V.av()
t.sa9(H.d([],r))
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
V.is.prototype={
$1:function(a){P.ml(C.x,new V.ir(this.a))},
$S:12}
V.ir.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.it.prototype={
$1:function(a){return H.f(a,"$ibB").a===this.a},
$S:52}
K.kO.prototype={
$1:function(a){var u,t,s,r,q,p,o
u=H.m(H.f(a,"$iB"),"$iec").c
t=this.a
s=this.b.aB(0,u,null)
if(!J.S(t.d,s)){r=t.d
q=r==null
p=s==null
if(!(!q&&p))q=q&&!p
else q=!0
if(q)t.a=null
t.d=s
s=new D.N("colorMatrix",r,s,t,[V.ak])
s.b=!0
t.a0(s)}o=V.o2(this.c.aB(0,u,null))
if(!J.S(t.b,o)){s=t.b
r=s==null&&!0
if(r)t.a=null
t.b=o
s=new D.N("texture2DMatrix",s,o,t,[V.c3])
s.b=!0
t.a0(s)}},
$S:5}
K.kP.prototype={
$0:function(){this.a.saj(0,F.lz(1,null,null,1))},
$S:0}
K.kQ.prototype={
$0:function(){this.a.saj(0,F.mV(1,!0,!0,1,40,1))},
$S:0}
K.kR.prototype={
$0:function(){this.a.saj(0,F.mV(1,!0,!1,1,40,0))},
$S:0}
K.kS.prototype={
$0:function(){this.a.saj(0,F.pA(6,null,1,6))},
$S:0}
K.kT.prototype={
$0:function(){this.a.saj(0,F.n7(30,1,15,0.5))},
$S:0}
K.kU.prototype={
$0:function(){this.a.saj(0,F.pr(120,1,2,12,0.3,3))},
$S:0}
K.kV.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dR("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dR("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fp=u.i
u=J.dN.prototype
u.fs=u.i
u=P.i.prototype
u.fq=u.bP
u=W.V.prototype
u.bU=u.ad
u=W.f_.prototype
u.fv=u.av
u=O.cD.prototype
u.fu=u.aH
u=O.b6.prototype
u.bV=u.aH
u=V.dU.prototype
u.ft=u.aL
u.d5=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p4","oy",11)
u(P,"p5","oz",11)
u(P,"p6","oA",11)
t(P,"mU","p3",3)
s(W,"pk",4,null,["$4"],["oC"],20,0)
s(W,"pl",4,null,["$4"],["oD"],20,0)
var m
r(m=E.ao.prototype,"geI",0,0,null,["$1","$0"],["eJ","kL"],1,0)
r(m,"geG",0,0,null,["$1","$0"],["eH","kK"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","kH"],1,0)
q(m,"gkF","kG",10)
q(m,"gkI","kJ",10)
r(m=E.em.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],1,0)
p(m,"gl1","eR",3)
o(m=X.et.prototype,"ghX","hY",14)
o(m,"ghL","hM",14)
o(m,"ghR","hS",4)
o(m,"gi0","i1",27)
o(m,"ghZ","i_",27)
o(m,"gi4","i5",4)
o(m,"gi8","i9",4)
o(m,"ghV","hW",4)
o(m,"gi6","i7",4)
o(m,"ghT","hU",4)
o(m,"gia","ib",37)
o(m,"gic","ie",14)
o(m,"gis","it",13)
o(m,"gio","ip",13)
o(m,"giq","ir",13)
r(D.bD.prototype,"gd9",0,0,null,["$1","$0"],["aD","fJ"],1,0)
r(m=D.dQ.prototype,"gdC",0,0,null,["$1","$0"],["dD","i2"],1,0)
o(m,"gih","ii",39)
q(m,"ghF","hG",16)
q(m,"gil","im",16)
n(V.a3.prototype,"gl","cM",32)
n(V.J.prototype,"gl","cM",32)
r(m=U.cz.prototype,"gbl",0,0,null,["$1","$0"],["U","ar"],1,0)
q(m,"ghD","hE",30)
q(m,"gij","ik",30)
r(m=U.eu.prototype,"gbl",0,0,null,["$1","$0"],["U","ar"],1,0)
o(m,"ghx","hy",2)
o(m,"ghz","hA",2)
o(m,"ghB","hC",2)
o(m,"ghs","ht",2)
o(m,"ghu","hv",2)
o(m,"gj5","j6",2)
o(m,"gj3","j4",2)
o(m,"gj1","j2",2)
r(m=M.dE.prototype,"gas",0,0,null,["$1","$0"],["aE","fK"],1,0)
q(m,"ghN","hO",10)
q(m,"ghP","hQ",10)
r(m=O.dV.prototype,"gbo",0,0,null,["$1","$0"],["a0","c8"],1,0)
r(m,"giG",0,0,null,["$1","$0"],["dH","iH"],1,0)
q(m,"ghH","hI",19)
q(m,"ghJ","hK",19)
r(O.cD.prototype,"gbo",0,0,null,["$1","$0"],["a0","c8"],1,0)
r(X.e1.prototype,"gda",0,0,null,["$1","$0"],["aR","fU"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.ld,J.a,J.ax,P.eN,P.i,H.cC,P.b3,H.bZ,H.d0,H.fO,H.ib,H.iV,P.bE,H.cr,H.f4,P.af,H.ht,H.hv,H.ho,P.fa,P.bg,P.aI,P.ex,P.iB,P.cP,P.iC,P.bb,P.an,P.kq,P.k3,P.cb,P.eM,P.y,P.kh,P.hB,P.bW,P.hj,P.ko,P.km,P.U,P.ay,P.a5,P.b2,P.i2,P.eb,P.eF,P.he,P.bF,P.b,P.E,P.L,P.aw,P.e,P.am,P.cc,P.ja,P.k6,W.fR,W.bO,W.D,W.e_,W.f_,W.kc,W.dF,W.aA,W.k2,W.fi,P.k8,P.ff,P.jY,P.T,O.a6,O.cE,E.fI,E.ao,E.ic,D.B,E.em,Z.ew,Z.jx,Z.dv,Z.bG,Z.be,D.fL,D.bY,X.dw,X.dO,X.hq,X.hy,X.aQ,X.hR,X.iR,X.et,D.bD,D.a8,D.e2,D.ea,D.ej,D.ek,D.el,V.a1,V.aL,V.h4,V.c3,V.ak,V.aa,V.a4,V.b9,V.e6,V.a3,V.J,U.eu,M.dE,A.ds,A.fB,A.hI,A.cU,A.cY,A.cW,A.cZ,A.cX,A.d_,A.bX,A.ep,A.j4,F.a9,F.h8,F.bo,F.hs,F.bK,F.e9,F.im,F.io,F.ip,F.ah,F.jk,F.jl,F.jo,F.jq,F.jr,F.js,O.ca,O.cD,T.iL,V.bi,V.az,V.dU,V.ia,V.il,V.cO,V.en,V.cS,V.iP,X.dx,X.eg,X.e1,V.bB,V.i8,V.iq])
s(J.a,[J.hn,J.dM,J.dN,J.aN,J.bH,J.bm,H.cG,H.bJ,W.j,W.fz,W.bT,W.bV,W.b0,W.b1,W.X,W.ez,W.fW,W.fX,W.dB,W.eB,W.dD,W.eD,W.fZ,W.p,W.eG,W.aM,W.dI,W.eI,W.bl,W.dS,W.hL,W.eO,W.eP,W.aP,W.eQ,W.eT,W.aR,W.eX,W.e4,W.eZ,W.aT,W.f0,W.aU,W.f5,W.aF,W.f8,W.iO,W.aW,W.fb,W.iT,W.jf,W.fj,W.fl,W.fn,W.fp,W.fr,P.b5,P.eK,P.b8,P.eV,P.i7,P.f6,P.bc,P.fd,P.fC,P.ey,P.dt,P.dG,P.e3,P.c8,P.e8,P.eh,P.eq,P.f2])
s(J.dN,[J.i3,J.bN,J.bn])
t(J.lc,J.aN)
s(J.bH,[J.dL,J.dK])
t(P.hx,P.eN)
s(P.hx,[H.er,W.jE,W.ar,P.ha])
t(H.v,H.er)
s(P.i,[H.h1,H.hC,H.d2])
s(H.h1,[H.c2,H.hu])
s(P.b3,[H.hD,H.jy])
t(H.hE,H.c2)
t(H.fP,H.fO)
s(P.bE,[H.i_,H.hp,H.j8,H.iX,H.fK,H.ij,P.e0,P.aK,P.j9,P.j6,P.c9,P.fN,P.fU])
s(H.cr,[H.l1,H.iH,H.kI,H.kJ,H.kK,P.jA,P.jz,P.jB,P.jC,P.kg,P.kf,P.jL,P.jP,P.jM,P.jN,P.jO,P.jS,P.jT,P.jR,P.jQ,P.iD,P.iE,P.ky,P.k0,P.k_,P.k1,P.hw,P.hA,P.kn,P.h_,P.h0,P.je,P.jb,P.jc,P.jd,P.ki,P.kj,P.kl,P.kk,P.ku,P.kt,P.kv,P.kw,W.h2,W.hN,W.hP,W.ii,W.iA,W.jK,W.hY,W.hX,W.k4,W.k5,W.ke,W.kp,P.ka,P.kA,P.hb,P.hc,P.fE,E.id,E.ie,E.ig,E.iN,D.h6,D.h7,F.kr,F.kB,F.kD,F.kE,F.kF,F.kZ,F.l_,F.l0,F.kM,F.kC,F.ju,F.jt,F.jm,F.jn,T.iM,V.kY,V.i9,V.is,V.ir,V.it,K.kO,K.kP,K.kQ,K.kR,K.kS,K.kT,K.kU,K.kV])
s(H.iH,[H.iy,H.cp])
t(P.hz,P.af)
s(P.hz,[H.aO,W.jD])
t(H.dX,H.bJ)
s(H.dX,[H.d6,H.d8])
t(H.d7,H.d6)
t(H.cH,H.d7)
t(H.d9,H.d8)
t(H.dY,H.d9)
s(H.dY,[H.hS,H.hT,H.hU,H.hV,H.hW,H.dZ,H.cI])
t(P.jZ,P.kq)
t(P.jX,P.k3)
t(P.fg,P.hB)
t(P.es,P.fg)
s(P.bW,[P.fG,P.h3])
t(P.bC,P.iC)
s(P.bC,[P.fH,P.hi,P.ji,P.jh])
t(P.jg,P.h3)
s(P.a5,[P.r,P.o])
s(P.aK,[P.c7,P.hk])
t(P.jG,P.cc)
s(W.j,[W.F,W.h9,W.aS,W.da,W.aV,W.aG,W.dc,W.jw,W.d3,P.fF,P.bS])
s(W.F,[W.V,W.bA,W.cu,W.d4])
s(W.V,[W.z,P.q])
s(W.z,[W.dq,W.fA,W.co,W.bz,W.bU,W.aD,W.hd,W.dH,W.cA,W.cB,W.dP,W.cF,W.ik,W.ba,W.ee,W.ef,W.iG,W.cQ])
s(W.b0,[W.cs,W.fS,W.fT])
t(W.fQ,W.b1)
t(W.ct,W.ez)
t(W.eC,W.eB)
t(W.dC,W.eC)
t(W.eE,W.eD)
t(W.fY,W.eE)
t(W.aE,W.bT)
t(W.eH,W.eG)
t(W.cx,W.eH)
t(W.eJ,W.eI)
t(W.c_,W.eJ)
t(W.dJ,W.cu)
t(W.bM,W.p)
s(W.bM,[W.b4,W.ag,W.aX])
t(W.hM,W.eO)
t(W.hO,W.eP)
t(W.eR,W.eQ)
t(W.hQ,W.eR)
t(W.eU,W.eT)
t(W.cJ,W.eU)
t(W.eY,W.eX)
t(W.i5,W.eY)
t(W.ih,W.eZ)
t(W.db,W.da)
t(W.iv,W.db)
t(W.f1,W.f0)
t(W.iw,W.f1)
t(W.iz,W.f5)
t(W.f9,W.f8)
t(W.iI,W.f9)
t(W.dd,W.dc)
t(W.iJ,W.dd)
t(W.fc,W.fb)
t(W.iS,W.fc)
t(W.jv,W.cF)
t(W.bf,W.ag)
t(W.fk,W.fj)
t(W.jF,W.fk)
t(W.eA,W.dD)
t(W.fm,W.fl)
t(W.jU,W.fm)
t(W.fo,W.fn)
t(W.eS,W.fo)
t(W.fq,W.fp)
t(W.k7,W.fq)
t(W.fs,W.fr)
t(W.kb,W.fs)
t(W.jH,W.jD)
t(W.jI,P.iB)
t(W.lo,W.jI)
t(W.jJ,P.cP)
t(W.kd,W.f_)
t(P.k9,P.k8)
t(P.ab,P.jY)
t(P.eL,P.eK)
t(P.hr,P.eL)
t(P.eW,P.eV)
t(P.i0,P.eW)
t(P.cM,P.q)
t(P.f7,P.f6)
t(P.iF,P.f7)
t(P.fe,P.fd)
t(P.iU,P.fe)
t(P.fD,P.ey)
t(P.i1,P.bS)
t(P.f3,P.f2)
t(P.ix,P.f3)
s(D.B,[E.ec,D.c0,D.c1,D.N,X.i6])
s(E.fI,[Z.du,A.cN,T.cR])
s(X.i6,[X.dT,X.bI,X.eo])
s(O.a6,[D.dQ,U.cz])
s(D.fL,[U.fM,U.al])
s(U.al,[U.dy,U.e7])
t(A.hF,A.cN)
s(A.ep,[A.P,A.j0,A.j1,A.j3,A.iZ,A.a2,A.j_,A.O,A.j2,A.j5,A.cV,A.aB,A.ap,A.aq])
t(F.iu,F.h8)
t(F.iY,F.hs)
t(F.jp,F.jq)
t(F.hZ,F.jr)
t(O.dV,O.ca)
s(O.cD,[O.hG,O.hH,O.b6])
s(O.b6,[O.hJ,O.hK])
t(T.ei,T.cR)
t(T.iK,T.ei)
s(V.dU,[V.av,V.cT])
t(X.hf,X.eg)
s(V.bB,[V.fV,V.hg,V.hh,V.i4])
u(H.er,H.d0)
u(H.d6,P.y)
u(H.d7,H.bZ)
u(H.d8,P.y)
u(H.d9,H.bZ)
u(P.eN,P.y)
u(P.fg,P.kh)
u(W.ez,W.fR)
u(W.eB,P.y)
u(W.eC,W.D)
u(W.eD,P.y)
u(W.eE,W.D)
u(W.eG,P.y)
u(W.eH,W.D)
u(W.eI,P.y)
u(W.eJ,W.D)
u(W.eO,P.af)
u(W.eP,P.af)
u(W.eQ,P.y)
u(W.eR,W.D)
u(W.eT,P.y)
u(W.eU,W.D)
u(W.eX,P.y)
u(W.eY,W.D)
u(W.eZ,P.af)
u(W.da,P.y)
u(W.db,W.D)
u(W.f0,P.y)
u(W.f1,W.D)
u(W.f5,P.af)
u(W.f8,P.y)
u(W.f9,W.D)
u(W.dc,P.y)
u(W.dd,W.D)
u(W.fb,P.y)
u(W.fc,W.D)
u(W.fj,P.y)
u(W.fk,W.D)
u(W.fl,P.y)
u(W.fm,W.D)
u(W.fn,P.y)
u(W.fo,W.D)
u(W.fp,P.y)
u(W.fq,W.D)
u(W.fr,P.y)
u(W.fs,W.D)
u(P.eK,P.y)
u(P.eL,W.D)
u(P.eV,P.y)
u(P.eW,W.D)
u(P.f6,P.y)
u(P.f7,W.D)
u(P.fd,P.y)
u(P.fe,W.D)
u(P.ey,P.af)
u(P.f2,P.y)
u(P.f3,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bz.prototype
C.q=W.bU.prototype
C.C=W.bV.prototype
C.k=W.aD.prototype
C.U=W.dB.prototype
C.W=W.dH.prototype
C.X=W.dI.prototype
C.y=W.dJ.prototype
C.Z=J.a.prototype
C.a=J.aN.prototype
C.a_=J.dK.prototype
C.f=J.dL.prototype
C.D=J.dM.prototype
C.e=J.bH.prototype
C.c=J.bm.prototype
C.a6=J.bn.prototype
C.G=W.dP.prototype
C.ac=W.cJ.prototype
C.M=J.i3.prototype
C.N=W.e4.prototype
C.b=P.c8.prototype
C.w=W.ba.prototype
C.o=W.ee.prototype
C.n=W.ef.prototype
C.B=J.bN.prototype
C.O=W.bf.prototype
C.P=W.d3.prototype
C.R=new P.fH(!1)
C.Q=new P.fG(C.R)
C.S=new P.i2()
C.T=new P.ji()
C.l=new P.jZ()
C.d=new A.bX(0,"ColorSourceType.None")
C.j=new A.bX(1,"ColorSourceType.Solid")
C.h=new A.bX(2,"ColorSourceType.Texture2D")
C.i=new A.bX(3,"ColorSourceType.TextureCube")
C.x=new P.b2(0)
C.V=new P.b2(5e6)
C.Y=new P.hj("element",!0,!1,!1,!1)
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
C.r=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a7=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.t=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.u=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a8=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.I=H.d(u([]),[P.e])
C.a9=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.aa=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.L=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.z=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.A=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.ab=new H.fP(0,{},C.I,[P.e,P.e])
C.m=new P.jg(!1)})();(function staticFields(){$.b_=0
$.cq=null
$.lR=null
$.ls=!1
$.n_=null
$.mS=null
$.n5=null
$.kG=null
$.kL=null
$.lB=null
$.ce=null
$.dh=null
$.di=null
$.lt=!1
$.a0=C.l
$.bk=null
$.la=null
$.lZ=null
$.lY=null
$.m6=null
$.ma=null
$.cK=null
$.mf=null
$.mt=null
$.mx=null
$.mv=null
$.mw=null
$.jj=null
$.mu=null
$.m9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pH","n9",function(){return H.mZ("_$dart_dartClosure")})
u($,"pI","lG",function(){return H.mZ("_$dart_js")})
u($,"pO","na",function(){return H.bd(H.iW({
toString:function(){return"$receiver$"}}))})
u($,"pP","nb",function(){return H.bd(H.iW({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pQ","nc",function(){return H.bd(H.iW(null))})
u($,"pR","nd",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pU","ng",function(){return H.bd(H.iW(void 0))})
u($,"pV","nh",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pT","nf",function(){return H.bd(H.mn(null))})
u($,"pS","ne",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pX","nj",function(){return H.bd(H.mn(void 0))})
u($,"pW","ni",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qd","lH",function(){return P.ox()})
u($,"qj","dn",function(){return[]})
u($,"q_","nk",function(){return P.ou()})
u($,"qe","no",function(){return H.o3(H.cd(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qh","nq",function(){return P.oi("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qi","nr",function(){return P.oW()})
u($,"qf","np",function(){return P.m1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"qg","lI",function(){return P.lf(P.e,P.bF)})
u($,"q6","nn",function(){return Z.aH(0)})
u($,"q0","nl",function(){return Z.aH(511)})
u($,"q8","bv",function(){return Z.aH(1)})
u($,"q7","bu",function(){return Z.aH(2)})
u($,"q2","bt",function(){return Z.aH(4)})
u($,"q9","bw",function(){return Z.aH(8)})
u($,"qa","bx",function(){return Z.aH(16)})
u($,"q3","dl",function(){return Z.aH(32)})
u($,"q4","dm",function(){return Z.aH(64)})
u($,"q5","nm",function(){return Z.aH(96)})
u($,"qb","cn",function(){return Z.aH(128)})
u($,"q1","bs",function(){return Z.aH(256)})
u($,"pG","n8",function(){return new V.h4(1e-9)})
u($,"pF","M",function(){return $.n8()})})()
var v={mangledGlobalNames:{o:"int",r:"double",a5:"num",e:"String",U:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ao]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ak]]},{func:1,ret:P.U,args:[W.V,P.e,P.e,W.bO]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.U,args:[W.F]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.U,args:[W.aA]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:V.a4,args:[P.r]},{func:1,ret:-1,args:[P.o,[P.i,U.al]]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.r},{func:1,ret:W.V,args:[W.F]},{func:1,args:[W.p]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.T,args:[P.o]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.L,args:[P.e,,]},{func:1,ret:P.U,args:[[P.i,D.a8]]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.aw]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.L,args:[P.bb]},{func:1,ret:P.U,args:[V.bB]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cG,DataView:H.bJ,ArrayBufferView:H.bJ,Float32Array:H.cH,Float64Array:H.cH,Int16Array:H.hS,Int32Array:H.hT,Int8Array:H.hU,Uint16Array:H.hV,Uint32Array:H.hW,Uint8ClampedArray:H.dZ,CanvasPixelArray:H.dZ,Uint8Array:H.cI,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fz,HTMLAnchorElement:W.dq,HTMLAreaElement:W.fA,HTMLBaseElement:W.co,Blob:W.bT,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.bV,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fQ,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fS,CSSUnparsedValue:W.fT,DataTransferItemList:W.fW,HTMLDivElement:W.aD,XMLDocument:W.cu,Document:W.cu,DOMException:W.fX,DOMImplementation:W.dB,ClientRectList:W.dC,DOMRectList:W.dC,DOMRectReadOnly:W.dD,DOMStringList:W.fY,DOMTokenList:W.fZ,Element:W.V,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cx,FileWriter:W.h9,HTMLFormElement:W.hd,Gamepad:W.aM,HTMLHeadElement:W.dH,History:W.dI,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,HTMLDocument:W.dJ,ImageData:W.bl,HTMLImageElement:W.cA,HTMLInputElement:W.cB,KeyboardEvent:W.b4,HTMLLabelElement:W.dP,Location:W.dS,HTMLAudioElement:W.cF,HTMLMediaElement:W.cF,MediaList:W.hL,MIDIInputMap:W.hM,MIDIOutputMap:W.hO,MimeType:W.aP,MimeTypeArray:W.hQ,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cJ,RadioNodeList:W.cJ,Plugin:W.aR,PluginArray:W.i5,Range:W.e4,RTCStatsReport:W.ih,HTMLSelectElement:W.ik,SourceBuffer:W.aS,SourceBufferList:W.iv,SpeechGrammar:W.aT,SpeechGrammarList:W.iw,SpeechRecognitionResult:W.aU,Storage:W.iz,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.ee,HTMLTableRowElement:W.ef,HTMLTableSectionElement:W.iG,HTMLTemplateElement:W.cQ,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.iI,TextTrackList:W.iJ,TimeRanges:W.iO,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iS,TrackDefaultList:W.iT,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.jf,HTMLVideoElement:W.jv,VideoTrackList:W.jw,WheelEvent:W.bf,Window:W.d3,DOMWindow:W.d3,Attr:W.d4,CSSRuleList:W.jF,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.jU,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.k7,StyleSheetList:W.kb,SVGLength:P.b5,SVGLengthList:P.hr,SVGNumber:P.b8,SVGNumberList:P.i0,SVGPointList:P.i7,SVGScriptElement:P.cM,SVGStringList:P.iF,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bc,SVGTransformList:P.iU,AudioBuffer:P.fC,AudioParamMap:P.fD,AudioTrackList:P.fF,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.i1,WebGLBuffer:P.dt,WebGLFramebuffer:P.dG,WebGLProgram:P.e3,WebGL2RenderingContext:P.c8,WebGLShader:P.e8,WebGLTexture:P.eh,WebGLUniformLocation:P.eq,SQLResultSetRowList:P.ix})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dX.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.dY.$nativeSuperclassTag="ArrayBufferView"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.n2,[])
else K.n2([])})})()
//# sourceMappingURL=test.dart.js.map
