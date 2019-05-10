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
a[c]=function(){a[c]=function(){H.pz(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lA(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lf:function lf(a){this.a=a},
kH:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hm:function(){return new P.c8("No element")},
nR:function(){return new P.c8("Too many elements")},
nQ:function(){return new P.c8("Too few elements")},
v:function v(a){this.a=a},
h2:function h2(){},
c2:function c2(){},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
hE:function hE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
jy:function jy(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d1:function d1(){},
ep:function ep(){},
nH:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
ck:function(a){var u,t
u=H.I(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ph:function(a){return v.types[H.aj(a)]},
po:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.at(a))
return u},
oe:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hn(u)
t=u[0]
s=u[1]
return new H.id(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cL:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ob:function(a,b){var u,t,s,r,q,p
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
for(q=r.length,p=0;p<q;++p)if((C.c.I(r,p)|32)>s)return}return parseInt(a,b)},
c4:function(a){return H.o2(a)+H.lx(H.bR(a),0,null)},
o2:function(a){var u,t,s,r,q,p,o,n,m
u=J.Y(a)
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
return H.ck(r.length>1&&C.c.I(r,0)===36?C.c.at(r,1):r)},
o3:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q
H.kN(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oc:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.at(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aW(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.at(r))}return H.mc(u)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<0)throw H.c(H.at(s))
if(s>65535)return H.oc(a)}return H.mc(a)},
od:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oa:function(a){var u=H.c3(a).getFullYear()+0
return u},
o8:function(a){var u=H.c3(a).getMonth()+1
return u},
o4:function(a){var u=H.c3(a).getDate()+0
return u},
o5:function(a){var u=H.c3(a).getHours()+0
return u},
o7:function(a){var u=H.c3(a).getMinutes()+0
return u},
o9:function(a){var u=H.c3(a).getSeconds()+0
return u},
o6:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.at(a))},
h:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cf(a,b))},
cf:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
u=H.aj(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,"index",null,u)
return P.e6(b,"index",null)},
pa:function(a,b,c){if(a>c)return new P.c6(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
at:function(a){return new P.aL(!0,a,null,null)},
p5:function(a){if(typeof a!=="number")throw H.c(H.at(a))
return a},
c:function(a){var u
if(a==null)a=new P.e1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n4})
u.name=""}else u.toString=H.n4
return u},
n4:function(){return J.av(this.dartException)},
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
return new H.iW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mm:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m8:function(a,b){return new H.i1(a,b==null?null:b.method)},
lg:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hq(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.l0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aW(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lg(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m8(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.n8()
p=$.n9()
o=$.na()
n=$.nb()
m=$.ne()
l=$.nf()
k=$.nd()
$.nc()
j=$.nh()
i=$.ng()
h=q.ai(t)
if(h!=null)return u.$1(H.lg(H.I(t),h))
else{h=p.ai(t)
if(h!=null){h.method="call"
return u.$1(H.lg(H.I(t),h))}else{h=o.ai(t)
if(h==null){h=n.ai(t)
if(h==null){h=m.ai(t)
if(h==null){h=l.ai(t)
if(h==null){h=k.ai(t)
if(h==null){h=n.ai(t)
if(h==null){h=j.ai(t)
if(h==null){h=i.ai(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m8(H.I(t),h))}}return u.$1(new H.j9(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ec()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aL(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ec()
return a},
ci:function(a){var u
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
pd:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pn:function(a,b,c,d,e,f){H.f(a,"$ibE")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pn)
a.$identity=u
return u},
nG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Y(d).$ib){u.$reflectionInfo=d
s=H.oe(u).r}else s=d
r=e?Object.create(new H.iA().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aZ
if(typeof p!=="number")return p.p()
$.aZ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lX(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ph,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lV:H.l6
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lX(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nD:function(a,b,c,d){var u=H.l6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nF(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nD(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
if(q==null){q=H.fJ("self")
$.co=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
if(q==null){q=H.fJ("self")
$.co=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nE:function(a,b,c,d){var u,t
u=H.l6
t=H.lV
switch(b?-1:a){case 0:throw H.c(H.oi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nF:function(a,b){var u,t,s,r,q,p,o,n
u=$.co
if(u==null){u=H.fJ("self")
$.co=u}t=$.lU
if(t==null){t=H.fJ("receiver")
$.lU=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nE(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aZ
if(typeof t!=="number")return t.p()
$.aZ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aZ
if(typeof t!=="number")return t.p()
$.aZ=t+1
return new Function(u+t+"}")()},
lA:function(a,b,c,d,e,f,g){return H.nG(a,b,H.aj(c),d,!!e,!!f,g)},
l6:function(a){return a.a},
lV:function(a){return a.c},
fJ:function(a){var u,t,s,r,q
u=new H.cn("self","target","receiver","name")
t=J.hn(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
pb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
pt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
ly:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
n1:function(a,b){throw H.c(H.aY(a,H.ck(H.I(b).substring(2))))},
pv:function(a,b){throw H.c(H.nC(a,H.ck(H.I(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.n1(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.pv(a,b)},
kN:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mZ:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.n1(a,b)},
mV:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
ft:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mV(J.Y(a))
if(u==null)return!1
return H.mI(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lu)return a
$.lu=!0
try{if(H.ft(a,b))return a
u=H.kW(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.lu=!1}},
lC:function(a,b){if(a!=null&&!H.lz(a,b))H.t(H.aY(a,H.kW(b)))
return a},
aY:function(a,b){return new H.iY("TypeError: "+P.h6(a)+": type '"+H.mN(a)+"' is not a subtype of type '"+b+"'")},
nC:function(a,b){return new H.fK("CastError: "+P.h6(a)+": type '"+H.mN(a)+"' is not a subtype of type '"+b+"'")},
mN:function(a){var u,t
u=J.Y(a)
if(!!u.$icp){t=H.mV(u)
if(t!=null)return H.kW(t)
return"Closure"}return H.c4(a)},
pz:function(a){throw H.c(new P.fV(H.I(a)))},
oi:function(a){return new H.il(a)},
mW:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
qj:function(a,b,c){return H.cj(a["$a"+H.m(c)],H.bR(b))},
bQ:function(a,b,c,d){var u
H.I(c)
H.aj(d)
u=H.cj(a["$a"+H.m(c)],H.bR(b))
return u==null?null:u[d]},
au:function(a,b,c){var u
H.I(b)
H.aj(c)
u=H.cj(a["$a"+H.m(b)],H.bR(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.aj(b)
u=H.bR(a)
return u==null?null:u[b]},
kW:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.lx(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oV(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
for(u=H.pc(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.I(u[g])
i=i+h+H.bP(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lx:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dk:function(a,b,c,d){var u,t
H.I(b)
H.kN(c)
H.I(d)
if(a==null)return!1
u=H.bR(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.mQ(H.cj(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.kN(c)
H.I(d)
if(a==null)return a
if(H.dk(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.lx(c,0,null),v.mangledGlobalNames)))},
mQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
qh:function(a,b,c){return a.apply(b,H.cj(J.Y(b)["$a"+H.m(c)],H.bR(b)))},
mY:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="N"||a===-1||a===-2||H.mY(u)}return!1},
lz:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="N"||b===-1||b===-2||H.mY(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ft(a,b)}u=J.Y(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lz(a,b))throw H.c(H.aY(a,H.kW(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mI(a,b,c,d)
if('func' in a)return c.name==="bE"
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
return H.mQ(H.cj(m,u),b,p,d)},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ps(h,b,g,d)},
ps:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aK(c[r],d,a[r],b))return!1}return!0},
qi:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pq:function(a){var u,t,s,r,q,p
u=H.I($.mX.$1(a))
t=$.kG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kL[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.I($.mP.$2(a,u))
if(u!=null){t=$.kG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kL[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kV(s)
$.kG[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kL[u]=s
return s}if(q==="-"){p=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.n0(a,s)
if(q==="*")throw H.c(P.j8(u))
if(v.leafTags[u]===true){p=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.n0(a,s)},
n0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kV:function(a){return J.lE(a,!1,null,!!a.$iM)},
pr:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kV(u)
else return J.lE(u,c,null,null)},
pl:function(){if(!0===$.lD)return
$.lD=!0
H.pm()},
pm:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kL=Object.create(null)
H.pk()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n2.$1(q)
if(p!=null){o=H.pr(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pk:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.cd(C.a0,H.cd(C.a5,H.cd(C.E,H.cd(C.E,H.cd(C.a4,H.cd(C.a1,H.cd(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mX=new H.kI(q)
$.mP=new H.kJ(p)
$.n2=new H.kK(o)},
cd:function(a,b){return a(b)||b},
nT:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
py:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lH:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fP:function fP(){},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
id:function id(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iW:function iW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
l0:function l0(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
cp:function cp(){},
iJ:function iJ(){},
iA:function iA(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a){this.a=a},
fK:function fK(a){this.a=a},
il:function il(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hv:function hv(a,b){this.a=a
this.$ti=b},
hw:function hw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
o0:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cf(b,a))},
oT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pa(a,b,c))
return b},
cG:function cG(){},
bH:function bH(){},
dY:function dY(){},
cH:function cH(){},
dZ:function dZ(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
e_:function e_(){},
cI:function cI(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
pc:function(a){return J.m0(a?Object.keys(a):[],null)},
pu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fv:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lD==null){H.pl()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.j8("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lJ()]
if(q!=null)return q
q=H.pq(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lJ(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.m0(new Array(a),b)},
m0:function(a,b){return J.hn(H.d(a,[b]))},
hn:function(a){H.kN(a)
a.fixed$length=Array
return a},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dM.prototype
return J.dL.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dN.prototype
if(typeof a=="boolean")return J.ho.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
pe:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
ch:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
fu:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
pf:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bN.prototype
return a},
pg:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bN.prototype
return a},
dl:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bN.prototype
return a},
ad:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fv(a)},
nq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pe(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).A(a,b)},
lM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pg(a).t(a,b)},
nr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.pf(a).u(a,b)},
lN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.po(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ch(a).j(a,b)},
l2:function(a,b,c){return J.fu(a).n(a,b,c)},
ns:function(a,b){return J.dl(a).I(a,b)},
fx:function(a,b){return J.ad(a).iM(a,b)},
l3:function(a,b,c){return J.ad(a).iQ(a,b,c)},
nt:function(a,b,c,d){return J.ad(a).jN(a,b,c,d)},
lO:function(a,b){return J.ad(a).F(a,b)},
nu:function(a,b){return J.dl(a).a1(a,b)},
fy:function(a,b){return J.fu(a).M(a,b)},
nv:function(a,b,c,d){return J.ad(a).ku(a,b,c,d)},
lP:function(a,b){return J.fu(a).P(a,b)},
nw:function(a){return J.ad(a).gjX(a)},
lQ:function(a){return J.ad(a).gcG(a)},
dq:function(a){return J.Y(a).gL(a)},
by:function(a){return J.fu(a).gX(a)},
aD:function(a){return J.ch(a).gl(a)},
nx:function(a){return J.ad(a).glf(a)},
l4:function(a,b){return J.ad(a).b3(a,b)},
lR:function(a){return J.fu(a).l5(a)},
ny:function(a,b){return J.ad(a).l9(a,b)},
nz:function(a,b,c){return J.ad(a).fC(a,b,c)},
nA:function(a,b,c){return J.dl(a).w(a,b,c)},
nB:function(a){return J.dl(a).lm(a)},
av:function(a){return J.Y(a).i(a)},
a:function a(){},
ho:function ho(){},
dN:function dN(){},
dO:function dO(){},
i5:function i5(){},
bN:function bN(){},
bm:function bm(){},
aO:function aO(a){this.$ti=a},
le:function le(a){this.$ti=a},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bG:function bG(){},
dM:function dM(){},
dL:function dL(){},
bl:function bl(){}},P={
ov:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.p2()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ce(new P.jA(u),1)).observe(t,{childList:true})
return new P.jz(u,t,s)}else if(self.setImmediate!=null)return P.p3()
return P.p4()},
ow:function(a){self.scheduleImmediate(H.ce(new P.jB(H.n(a,{func:1,ret:-1})),0))},
ox:function(a){self.setImmediate(H.ce(new P.jC(H.n(a,{func:1,ret:-1})),0))},
oy:function(a){P.ll(C.y,H.n(a,{func:1,ret:-1}))},
ll:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a7(a.a,1000)
return P.oE(u<0?0:u,b)},
ml:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.ba]})
u=C.f.a7(a.a,1000)
return P.oF(u<0?0:u,b)},
oE:function(a,b){var u=new P.fa(!0)
u.h9(a,b)
return u},
oF:function(a,b){var u=new P.fa(!1)
u.ha(a,b)
return u},
oz:function(a,b){var u,t,s
b.a=1
try{a.fd(new P.jM(b),new P.jN(b),null)}catch(s){u=H.ak(s)
t=H.ci(s)
P.pw(new P.jO(b,u,t))}},
mx:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaJ")
if(u>=4){t=b.cp()
b.a=a.a
b.c=a.c
P.d6(b,t)}else{t=H.f(b.c,"$ibf")
b.a=2
b.c=a
a.dU(t)}},
d6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
P.d6(u.a,b)}t=u.a
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
return}j=$.a1
if(j!=l)$.a1=l
else j=null
t=b.c
if(t===8)new P.jS(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jR(s,b,m).$0()}else if((t&2)!==0)new P.jQ(u,s,b).$0()
if(j!=null)$.a1=j
t=s.b
if(!!J.Y(t).$icw){if(t.a>=4){i=H.f(o.c,"$ibf")
o.c=null
b=o.bs(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mx(t,o)
return}}h=b.b
i=H.f(h.c,"$ibf")
h.c=null
b=h.bs(i)
t=s.a
p=s.b
if(!t){H.B(p,H.u(h,0))
h.a=4
h.c=p}else{H.f(p,"$ian")
h.a=8
h.c=p}u.a=h
t=h}},
oY:function(a,b){if(H.ft(a,{func:1,args:[P.R,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ay]})
if(H.ft(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.l5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oX:function(){var u,t
for(;u=$.cc,u!=null;){$.dj=null
t=u.b
$.cc=t
if(t==null)$.di=null
u.a.$0()}},
p1:function(){$.lv=!0
try{P.oX()}finally{$.dj=null
$.lv=!1
if($.cc!=null)$.lK().$1(P.mR())}},
mM:function(a){var u=new P.ex(H.n(a,{func:1,ret:-1}))
if($.cc==null){$.di=u
$.cc=u
if(!$.lv)$.lK().$1(P.mR())}else{$.di.b=u
$.di=u}},
p0:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.mM(a)
$.dj=$.di
return}t=new P.ex(a)
s=$.dj
if(s==null){t.b=u
$.dj=t
$.cc=t}else{t.b=s.b
s.b=t
$.dj=t
if(t.b==null)$.di=t}},
pw:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a1
if(C.l===t){P.kz(null,null,C.l,a)
return}t.toString
P.kz(null,null,t,H.n(t.cB(a),u))},
mk:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a1
if(t===C.l){t.toString
return P.ll(a,b)}return P.ll(a,H.n(t.cB(b),u))},
om:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ba]}
H.n(b,u)
t=$.a1
if(t===C.l){t.toString
return P.ml(a,b)}s=t.ec(b,P.ba)
$.a1.toString
return P.ml(a,H.n(s,u))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.p0(new P.ky(u,e))},
mJ:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mK:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
oZ:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kz:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cB(d):c.jY(d,-1)
P.mM(d)},
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
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
cP:function cP(){},
iE:function iE(){},
ba:function ba(){},
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
nV:function(a,b,c,d,e){return new H.aP([d,e])},
lh:function(a,b){return new H.aP([a,b])},
nX:function(a){return H.pd(a,new H.aP([null,null]))},
dS:function(a,b,c,d){return new P.jX([d])},
lr:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oD:function(a,b,c){var u=new P.eM(a,b,[c])
u.c=a.e
return u},
nP:function(a,b,c){var u,t
if(P.lw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dp()
C.a.h(t,a)
try{P.oW(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.mi(b,H.mZ(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
ld:function(a,b,c){var u,t,s
if(P.lw(a))return b+"..."+c
u=new P.am(b)
t=$.dp()
C.a.h(t,a)
try{s=u
s.a=P.mi(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lw:function(a){var u,t
for(u=0;t=$.dp(),u<t.length;++u)if(a===t[u])return!0
return!1},
oW:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.m(u.gN(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gN(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gN(u);++s
for(;u.E();o=n,n=m){m=u.gN(u);++s
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
nW:function(a,b,c){var u=P.nV(null,null,null,b,c)
a.P(0,new P.hx(u,b,c))
return u},
m1:function(a,b){var u,t,s
u=P.dS(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.B(a[s],b))
return u},
li:function(a){var u,t
u={}
if(P.lw(a))return"{...}"
t=new P.am("")
try{C.a.h($.dp(),a)
t.a+="{"
u.a=!0
J.lP(a,new P.hB(u,t))
t.a+="}"}finally{u=$.dp()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jX:function jX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(){},
y:function y(){},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
ag:function ag(){},
kh:function kh(){},
hC:function hC(){},
eq:function eq(a,b){this.a=a
this.$ti=b},
k3:function k3(){},
eN:function eN(){},
fg:function fg(){},
oq:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.or(!1,b,c,d)
return},
or:function(a,b,c,d){var u,t,s
u=$.ni()
if(u==null)return
t=0===c
if(t&&!0)return P.lo(u,b)
s=b.length
d=P.bq(c,d,s,null,null,null)
if(t&&d===s)return P.lo(u,b)
return P.lo(u,b.subarray(c,d))},
lo:function(a,b){if(P.ot(b))return
return P.ou(a,b)},
ou:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
ot:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
os:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
p_:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.ch(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bW()
if((s&127)!==s)return t-b}return c-b},
lT:function(a,b,c,d,e,f){if(C.f.bl(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fG:function fG(a){this.a=a},
fH:function fH(a){this.a=a},
bW:function bW(){},
bC:function bC(){},
h4:function h4(){},
hk:function hk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hj:function hj(a){this.a=a},
jh:function jh(a){this.a=a},
jj:function jj(){},
ko:function ko(a){this.b=this.a=0
this.c=a},
ji:function ji(a){this.a=a},
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
u=H.ob(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nM:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.c4(a)+"'"},
nY:function(a,b,c,d){var u,t
H.B(b,d)
u=J.nS(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
m2:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.by(a);s.E();)C.a.h(t,H.B(s.gN(s),c))
if(b)return t
return H.k(J.hn(t),"$ib",u,"$ab")},
ed:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[u],"$aaO")
t=a.length
c=P.bq(b,c,t,null,null,null)
return H.md(b>0||c<t?C.a.fI(a,b,c):a)}if(!!J.Y(a).$icI)return H.od(a,b,P.bq(b,c,a.length,null,null,null))
return P.ok(a,b,c)},
ok:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aD(a),null,null))
t=J.by(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.af(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gN(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.af(c,b,s,null,null))
r.push(t.gN(t))}return H.md(r)},
og:function(a,b,c){return new H.hp(a,H.nT(a,!1,!0,!1))},
mi:function(a,b,c){var u=J.by(b)
if(!u.E())return a
if(c.length===0){do a+=H.m(u.gN(u))
while(u.E())}else{a+=H.m(u.gN(u))
for(;u.E();)a=a+c+H.m(u.gN(u))}return a},
mo:function(){var u=H.o3()
if(u!=null)return P.op(u,0,null)
throw H.c(P.H("'Uri.base' is not supported"))},
fh:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.no().b
if(typeof b!=="string")H.t(H.at(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.au(c,"bW",0))
t=c.gkt().cH(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nI:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
lY:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nM(a)},
ds:function(a){return new P.aL(!1,null,null,a)},
l5:function(a,b,c){return new P.aL(!0,a,b,c)},
e6:function(a,b,c){return new P.c6(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c,d,e,f){if(typeof a!=="number")return H.F(a)
if(0>a||a>c)throw H.c(P.af(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",f))
return b}return c},
a_:function(a,b,c,d,e){var u=H.aj(e==null?J.aD(b):e)
return new P.hl(b,u,!0,a,c,"Index out of range")},
H:function(a){return new P.ja(a)},
j8:function(a){return new P.j7(a)},
mh:function(a){return new P.c8(a)},
bi:function(a){return new P.fN(a)},
w:function(a){return new P.eF(a)},
a7:function(a,b,c){return new P.hf(a,b,c)},
nZ:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lG:function(a){H.pu(a)},
op:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(t===0)return P.mn(b>0||c<c?C.c.w(a,b,c):a,5,null).gfj()
else if(t===32)return P.mn(C.c.w(a,u,c),0,null).gfj()}s=new Array(8)
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
if(P.mL(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lv()
if(q>=b)if(P.mL(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a_()
if(typeof m!=="number")return H.F(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.af(a,"..",n)))i=m>n+2&&C.c.af(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.af(a,"file",b)){if(p<=b){if(!C.c.af(a,"/",n)){h="file:///"
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
b=0}j="file"}else if(C.c.af(a,"http",b)){if(s&&o+3===n&&C.c.af(a,"80",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
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
else if(q===u&&C.c.af(a,"https",b)){if(s&&o+4===n&&C.c.af(a,"443",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
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
l-=b}return new P.k6(a,q,p,o,n,m,l,j)}return P.oG(a,b,c,q,p,o,n,m,l,j)},
mq:function(a,b){var u=P.e
return C.a.kz(H.d(a.split("&"),[u]),P.lh(u,u),new P.jf(b),[P.E,P.e,P.e])},
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jc(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a1(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fw(C.c.w(a,q,r),null,null)
if(typeof n!=="number")return n.fz()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fw(C.c.w(a,q,c),null,null)
if(typeof n!=="number")return n.fz()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jd(a)
t=new P.je(u,a)
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
l=C.a.gaC(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oo(a,q,c)
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
oG:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oN(a,b,d)
else{if(d===b)P.df(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oO(a,u,e-1):""
s=P.oK(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oM(P.fw(C.c.w(a,r,g),new P.ki(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oL(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.ls(a,h+1,i,null):null
return new P.ca(j,t,s,q,p,o,i<c?P.oJ(a,i+1,c):null)},
mB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
df:function(a,b,c){throw H.c(P.a7(c,a,b))},
oM:function(a,b){if(a!=null&&a===P.mB(b))return
return a},
oK:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a1(a,u)!==93)P.df(a,b,"Missing end `]` to match `[` in host")
P.mp(a,b+1,u)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.c.a1(a,t)===58){P.mp(a,b,c)
return"["+a+"]"}return P.oQ(a,b,c)},
oQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a1(a,u)
if(q===37){p=P.mH(a,u,!0)
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
if(o)P.df(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.c.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mC(q)
u+=l
t=u}}}}if(s==null)return C.c.w(a,b,c)
if(t<c){n=C.c.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oN:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mE(C.c.I(a,b)))P.df(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.df(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.w(a,b,c)
return P.oH(t?a.toLowerCase():a)},
oH:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oO:function(a,b,c){return P.dg(a,b,c,C.a9,!1)},
oL:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dg(a,b,c,C.L,!0):C.r.ly(d,new P.kj(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a6(r,"/"))r="/"+r
return P.oP(r,e,f)},
oP:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a6(a,"/"))return P.oR(a,!u||c)
return P.oS(a)},
ls:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.ds("Both query and queryParameters specified"))
return P.dg(a,b,c,C.u,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.P(0,new P.kk(new P.kl(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oJ:function(a,b,c){return P.dg(a,b,c,C.u,!0)},
mH:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a1(a,b+1)
s=C.c.a1(a,u)
r=H.kH(t)
q=H.kH(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aW(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c5(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
mC:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.j7(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.I("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.I("0123456789ABCDEF",p&15))
q+=3}}return P.ed(t,0,null)},
dg:function(a,b,c,d,e){var u=P.mG(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.w(a,b,c):u},
mG:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.c.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mH(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.df(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mC(q)}}if(r==null)r=new P.am("")
r.a+=C.c.w(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.c.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mF:function(a){if(C.c.a6(a,"."))return!0
return C.c.eO(a,"/.")!==-1},
oS:function(a){var u,t,s,r,q,p,o
if(!P.mF(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oR:function(a,b){var u,t,s,r,q,p
if(!P.mF(a))return!b?P.mD(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaC(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaC(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mD(u[0]))}return C.a.m(u,"/")},
mD:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mE(J.ns(a,0)))for(t=1;t<u;++t){s=C.c.I(a,t)
if(s===58)return C.c.w(a,0,t)+"%3A"+C.c.at(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oI:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ds("Invalid URL encoding"))}}return u},
lt:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.w(a,b,c)
else q=new H.v(C.c.w(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.I(a,t)
if(s>127)throw H.c(P.ds("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.ds("Truncated URI"))
C.a.h(q,P.oI(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.ji(!1).cH(q)},
mE:function(a){var u=a|32
return 97<=u&&u<=122},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaC(u)
if(q!==44||s!==o+7||!C.c.af(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kN(0,a,n,t)
else{m=P.mG(a,n,t,C.u,!0)
if(m!=null)a=C.c.b2(a,n,t,m)}return new P.jb(a,u,c)},
oU:function(){var u,t,s,r,q
u=P.nZ(22,new P.ku(),!0,P.S)
t=new P.kt(u)
s=new P.kv()
r=new P.kw()
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
mL:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.np()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
ao:function ao(a,b){this.a=a
this.b=b},
q:function q(){},
b1:function b1(a){this.a=a},
h0:function h0(){},
h1:function h1(){},
bD:function bD(){},
e1:function e1(){},
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
hl:function hl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ja:function ja(a){this.a=a},
j7:function j7(a){this.a=a},
c8:function c8(a){this.a=a},
fN:function fN(a){this.a=a},
i4:function i4(){},
ec:function ec(){},
fV:function fV(a){this.a=a},
eF:function eF(a){this.a=a},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
o:function o(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
E:function E(){},
N:function N(){},
a4:function a4(){},
R:function R(){},
ay:function ay(){},
e:function e(){},
am:function am(a){this.a=a},
jf:function jf(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a,b){this.a=a
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
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
jb:function jb(a,b,c){this.a=a
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
p8:function(a){var u,t
u=J.Y(a)
if(!!u.$ibk){t=u.geg(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ff(a.data,a.height,a.width)},
p7:function(a){if(a instanceof P.ff)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.lh(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
p6:function(a,b){var u={}
a.P(0,new P.kA(u))
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
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
hd:function hd(){},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oC:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jY:function jY(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hs:function hs(){},
b7:function b7(){},
i2:function i2(){},
i9:function i9(){},
cM:function cM(){},
iH:function iH(){},
r:function r(){},
bb:function bb(){},
iV:function iV(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
S:function S(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
fF:function fF(){},
bS:function bS(){},
i3:function i3(){},
ey:function ey(){},
du:function du(){},
dH:function dH(){},
e4:function e4(){},
c7:function c7(){},
e9:function e9(){},
eh:function eh(){},
eo:function eo(){},
iz:function iz(){},
f2:function f2(){},
f3:function f3(){}},W={
lS:function(a){var u=document.createElement("a")
return u},
l7:function(a,b){var u=document.createElement("canvas")
return u},
nK:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ah(u,a,b,c)
t.toString
u=W.G
u=new H.d3(new W.as(t),H.n(new W.h3(),{func:1,ret:P.T,args:[u]}),[u])
return H.f(u.gaO(u),"$iW")},
nL:function(a){H.f(a,"$ij")
return"wheel"},
ct:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nx(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ak(s)}return u},
nO:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icz")
try{u.type=a}catch(s){H.ak(s)}return u},
jV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a,b,c,d){var u,t
u=W.jV(W.jV(W.jV(W.jV(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mO(new W.jK(c),W.p)
if(u!=null&&!0)J.nt(a,b,u,!1)
return new W.jJ(a,b,u,!1,[e])},
my:function(a){var u,t
u=W.lS(null)
t=window.location
u=new W.bO(new W.k2(u,t))
u.fX(a)
return u},
oA:function(a,b,c,d){H.f(a,"$iW")
H.I(b)
H.I(c)
H.f(d,"$ibO")
return!0},
oB:function(a,b,c,d){var u,t,s
H.f(a,"$iW")
H.I(b)
H.I(c)
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
mA:function(){var u,t,s,r,q
u=P.e
t=P.m1(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.ke(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kd(t,P.dS(null,null,null,u),P.dS(null,null,null,u),P.dS(null,null,null,u),null)
t.h8(null,new H.hF(C.A,r,[s,u]),q,null)
return t},
mO:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.l)return a
return u.ec(a,b)},
A:function A(){},
fz:function fz(){},
dr:function dr(){},
fA:function fA(){},
cm:function cm(){},
bT:function bT(){},
bz:function bz(){},
bU:function bU(){},
bV:function bV(){},
bA:function bA(){},
cq:function cq(){},
fR:function fR(){},
Z:function Z(){},
cr:function cr(){},
fS:function fS(){},
b_:function b_(){},
b0:function b0(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
aE:function aE(){},
cs:function cs(){},
fY:function fY(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
fZ:function fZ(){},
h_:function h_(){},
jE:function jE(a,b){this.a=a
this.b=b},
W:function W(){},
h3:function h3(){},
p:function p(){},
j:function j(){},
aF:function aF(){},
cv:function cv(){},
ha:function ha(){},
he:function he(){},
aN:function aN(){},
dI:function dI(){},
dJ:function dJ(){},
c_:function c_(){},
dK:function dK(){},
bk:function bk(){},
cy:function cy(){},
cz:function cz(){},
b3:function b3(){},
dQ:function dQ(){},
dT:function dT(){},
cE:function cE(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aQ:function aQ(){},
hS:function hS(){},
ah:function ah(){},
as:function as(a){this.a=a},
G:function G(){},
cJ:function cJ(){},
aR:function aR(){},
i7:function i7(){},
e5:function e5(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aS:function aS(){},
ix:function ix(){},
aT:function aT(){},
iy:function iy(){},
aU:function aU(){},
iB:function iB(){},
iC:function iC(a){this.a=a},
aG:function aG(){},
b9:function b9(){},
ee:function ee(){},
ef:function ef(){},
iI:function iI(){},
cQ:function cQ(){},
aV:function aV(){},
aH:function aH(){},
iK:function iK(){},
iL:function iL(){},
iP:function iP(){},
aW:function aW(){},
aX:function aX(){},
iT:function iT(){},
iU:function iU(){},
bM:function bM(){},
jg:function jg(){},
jv:function jv(){},
jw:function jw(){},
be:function be(){},
d4:function d4(){},
d5:function d5(){},
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
lq:function lq(a,b,c,d){var _=this
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
e0:function e0(a){this.a=a},
i_:function i_(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
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
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aB:function aB(){},
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
db:function db(){},
dc:function dc(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
dd:function dd(){},
de:function de(){},
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
l8:function(a){var u=new O.a5([a])
u.c1(a)
return u},
a5:function a5(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cC:function cC(){this.b=this.a=null},
m3:function(){var u,t,s
u=new O.dW()
u.shh(O.l8(V.al))
u.e.bm(u.ghU(),u.ghW())
t=new O.b5(u,"emission")
t.c=C.d
t.f=new V.a6(0,0,0)
u.f=t
t=new O.b5(u,"ambient")
t.c=C.d
t.f=new V.a6(0,0,0)
u.r=t
t=new O.b5(u,"diffuse")
t.c=C.d
t.f=new V.a6(0,0,0)
u.x=t
t=new O.b5(u,"invDiffuse")
t.c=C.d
t.f=new V.a6(0,0,0)
u.y=t
t=new O.hL(u,"specular")
t.c=C.d
t.f=new V.a6(0,0,0)
t.ch=100
u.z=t
t=new O.hI(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b5(u,"reflect")
t.c=C.d
t.f=new V.a6(0,0,0)
u.cx=t
t=new O.hK(u,"refract")
t.c=C.d
t.f=new V.a6(0,0,0)
t.ch=1
u.cy=t
t=new O.hH(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dR()
t.c1(D.a8)
t.sfZ(H.d([],[D.dB]))
t.sh0(H.d([],[D.e3]))
t.sh1(H.d([],[D.eb]))
t.sh2(H.d([],[D.ei]))
t.sh3(H.d([],[D.bL]))
t.sh4(H.d([],[D.ej]))
t.Q=null
t.ch=null
t.di(t.ghS(),t.giv(),t.giz())
u.dx=t
s=t.Q
if(s==null){s=D.V()
t.Q=s
t=s}else t=s
t.h(0,u.giT())
t=u.dx
s=t.ch
if(s==null){s=D.V()
t.ch=s
t=s}else t=s
t.h(0,u.gbp())
u.dy=null
return u},
dW:function dW(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cB:function cB(){},
hI:function hI(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hK:function hK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bK:function bK(){}},E={
lb:function(a,b,c,d,e,f){var u=new E.ap()
u.a=d
u.b=!0
u.sfW(0,O.l8(E.ap))
u.y.bm(u.gkO(),u.gkR())
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
u.sae(0,e)
u.sbi(f)
u.sb0(c)
return u},
oh:function(a,b){var u=new E.ie(a,b)
u.fR(a,b)
return u},
ol:function(a,b,c,d,e){var u,t,s,r
u=J.Y(a)
if(!!u.$ibU)return E.mj(a,!0,!0,!0,!1)
t=W.l7(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcG(a).h(0,t)
r=E.mj(t,!0,!0,!0,!1)
r.a=a
return r},
mj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ek()
t=H.f(C.q.de(a,"webgl2",P.nX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oh(t,a)
s=new T.iM(t)
s.b=H.aj((t&&C.b).dg(t,3379))
s.c=H.aj(C.b.dg(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.er(a)
r=new X.hr()
r.c=new X.aA(!1,!1,!1)
r.siI(P.dS(null,null,null,P.o))
s.b=r
r=new X.hT(s)
r.f=0
r.r=V.bJ()
r.x=V.bJ()
r.Q=1
r.ch=1
s.c=r
r=new X.hz(s)
r.r=0
r.x=V.bJ()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iS(s)
r.e=0
r.f=V.bJ()
r.r=V.bJ()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sht(H.d([],[[P.cP,P.R]]))
r=s.z
q=document
p=W.ah
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.gi3(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.gi9(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.ghY(),m),!1,n))
r=s.z
l=W.b3
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.gie(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.gib(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.gij(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.gio(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.gil(),o),!1,p))
l=s.z
k=W.be;(l&&C.a).h(l,W.ac(a,H.I(W.nL(a)),H.n(s.giq(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.gi5(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.gi7(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.gis(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.giF(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.giB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.giD(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ao(Date.now(),!1)
u.cy=0
u.dW()
return u},
fI:function fI(){},
ap:function ap(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ek:function ek(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iO:function iO(a){this.a=a}},Z={
lp:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.ay(a,b,u)
C.b.ee(a,b,new Int16Array(H.cb(c)),35044)
C.b.ay(a,b,null)
return new Z.ew(b,u)},
aI:function(a){return new Z.bd(a)},
ew:function ew(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jx:function jx(a){this.a=a},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
V:function(){var u=new D.bY()
u.sam(null)
u.saU(null)
u.c=null
u.d=0
return u},
fL:function fL(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
z:function z(a){this.a=a
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
J:function J(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
dB:function dB(){},
a8:function a8(){},
dR:function dR(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e3:function e3(){},
eb:function eb(){},
ei:function ei(){},
bL:function bL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){}},X={dx:function dx(a,b){this.a=a
this.b=b},dP:function dP(a,b){this.a=a
this.b=b},hr:function hr(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hz:function hz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bo:function bo(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hT:function hT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cF:function cF(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},i8:function i8(){},em:function em(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iS:function iS(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},er:function er(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nN:function(a,b,c,d,e,f,g){var u,t
u=new X.hg()
t=new V.aM(0,0,0,1)
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
dy:function dy(){},
hg:function hg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){}},V={
l1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bl(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.c.aj("null",c)
return C.c.aj(C.e.fe(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.aj(u[p],s))}return u},
lF:function(a,b){return C.e.lj(Math.pow(b,C.a_.cS(Math.log(H.p5(a))/Math.log(b))))},
cD:function(){var u=$.hM
if(u==null){u=V.b6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hM=u}return u},
b6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m7:function(a,b,c){return V.b6(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lj:function(a,b,c,d){return V.b6(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m4:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m5:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m6:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b6(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bJ:function(){var u=$.mb
if(u==null){u=new V.aa(0,0)
$.mb=u}return u},
o1:function(){var u=$.cK
if(u==null){u=new V.a3(0,0,0)
$.cK=u}return u},
me:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)},
d2:function(){var u=$.mw
if(u==null){u=new V.L(0,0,0)
$.mw=u}return u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a){this.a=a},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.I(a,0)
t=C.c.I(b,0)
s=new V.ic()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.io()
u.fS(a)
return u},
iR:function(){var u,t
u=new V.iQ()
t=P.e
u.sj9(new H.aP([t,V.cO]))
u.sjd(new H.aP([t,V.cT]))
u.c=null
return u},
bh:function bh(){},
az:function az(){},
dV:function dV(){},
ax:function ax(){this.a=null},
ic:function ic(){this.b=this.a=null},
io:function io(){this.a=null},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b){this.a=a
this.b=b
this.c=null},
iQ:function iQ(){this.c=this.b=this.a=null},
cU:function cU(a){this.b=a
this.a=this.c=null},
px:function(a){P.om(C.V,new V.kX(a))},
oj:function(a,b){var u=new V.is()
u.fU(a,!0)
return u},
bB:function bB(){},
kX:function kX(a){this.a=a},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hh:function hh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a,b){this.a=a
this.b=b
this.c=null},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(){this.b=this.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
iv:function iv(a){this.a=a}},U={
l9:function(){var u=new U.fM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
fO:function(a){var u=new U.dz()
u.a=a
return u},
lc:function(a){var u=new U.cx()
u.c1(U.ae)
u.bm(u.gh5(),u.gix())
u.e=null
u.f=V.cD()
u.r=0
return u},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){this.b=this.a=null},
cx:function cx(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
e8:function e8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eu:function eu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dF:function dF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o_:function(a,b){var u,t
u=a.ao
t=new A.hG(b,u)
t.fT(b,u)
t.fQ(a,b)
return t},
lm:function(a,b,c,d,e){var u=new A.j_(a,b,c,e)
u.f=d
u.sjo(P.nY(d,0,!1,P.o))
return u},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
hG:function hG(a,b){var _=this
_.bA=_.el=_.bz=_.ao=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eC=_.cL=_.eB=_.bN=_.eA=_.ez=_.bM=_.bL=_.ey=_.ex=_.bK=_.bJ=_.bI=_.ew=_.ev=_.bH=_.eu=_.es=_.bG=_.er=_.eq=_.bF=_.bE=_.ep=_.eo=_.bD=_.bC=_.en=_.em=_.bB=null
_.cQ=_.eG=_.cP=_.eF=_.cO=_.eE=_.cN=_.eD=_.cM=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hJ:function hJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ao=b4
_.bz=b5},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cX:function cX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cY:function cY(a,b,c,d,e,f,g,h,i,j){var _=this
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
d0:function d0(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
en:function en(){},
j5:function j5(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b,c,d){var _=this
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
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
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
lB:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
u=F.lk()
F.dh(u,b,c,d,a,1,0,0,1)
F.dh(u,b,c,d,a,0,1,0,3)
F.dh(u,b,c,d,a,0,0,1,2)
F.dh(u,b,c,d,a,-1,0,0,0)
F.dh(u,b,c,d,a,0,-1,0,0)
F.dh(u,b,c,d,a,0,0,-1,3)
u.az()
return u},
ks:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dh:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.L(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.L(o+a3,n+a1,m+a2)
u.b=l
k=new V.L(o-a3,n-a1,m-a2)
u.c=k
j=new V.L(t-a3,r-a1,q-a2)
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
e=F.lI(d,a0,new F.kr(u,F.ks(u.c),F.ks(u.d),f,g,c),b)
if(e!=null)a.be(e)},
mU:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.q,args:[P.q]})
if(a0<3)return
u=F.lk()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ai])
q=u.a
p=new V.L(0,0,t)
p=p.C(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jQ(new V.b8(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a3(0,0,d),new V.L(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.L(m,l,t).C(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ev(new V.b8(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a3(m*k,l*k,d),new V.L(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jO(r)
return u},
mS:function(a,b,c,d,e,f){return F.p9(!0,c,d,new F.kB(a,f),e)},
p9:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.lI(c,e,new F.kD(d),null)
if(u==null)return
u.az()
u.cz()
if(b)u.be(F.mU(3,!1,!1,1,new F.kE(d),e))
u.be(F.mU(1,!0,!1,-1,new F.kF(d),e))
return u},
n3:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kY()
t=F.lB(a,null,new F.kZ(u,c),d)
t.cz()
return t},
n5:function(a,b,c,d){return F.mT(c,a,d,b,new F.l_())},
pp:function(a,b,c,d,e,f){return F.mT(d,a,e,b,new F.kM(f,c))},
mT:function(a,b,c,d,e){var u=F.lI(a,b,new F.kC(H.n(e,{func:1,ret:V.a3,args:[P.q]}),d,b,c),null)
if(u==null)return
u.az()
u.cz()
return u},
lI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.lk()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ev(null,null,new V.aM(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cI(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ev(null,null,new V.aM(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cI(d))}}u.d.jP(a+1,b+1,t)
return u},
cu:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
u.j2(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
nU:function(a,b){var u,t
u=new F.bn()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cv(a)
u.cw(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
lk:function(){var u,t
u=new F.ea()
t=new F.jk(u)
t.b=!1
t.sjp(H.d([],[F.ai]))
u.a=t
t=new F.ir(u)
t.scn(H.d([],[F.bI]))
u.b=t
t=new F.iq(u)
t.shG(H.d([],[F.bn]))
u.c=t
t=new F.ip(u)
t.shu(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
ev:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ai()
t=new F.js(u)
t.scn(H.d([],[F.bI]))
u.b=t
t=new F.jo(u)
s=[F.bn]
t.shH(H.d([],s))
t.shI(H.d([],s))
u.c=t
t=new F.jl(u)
s=[F.a9]
t.shv(H.d([],s))
t.shw(H.d([],s))
t.shx(H.d([],s))
u.d=t
h=$.nj()
u.e=0
t=$.bv()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bu().a)!==0?e:null
u.x=(s&$.bt().a)!==0?b:null
u.y=(s&$.bw().a)!==0?f:null
u.z=(s&$.bx().a)!==0?g:null
u.Q=(s&$.nk().a)!==0?c:null
u.ch=(s&$.cl().a)!==0?i:0
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
kY:function kY(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
l_:function l_(){},
kM:function kM(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(){},
iw:function iw(){},
bn:function bn(){this.b=this.a=null},
ht:function ht(){},
iZ:function iZ(){},
bI:function bI(){this.a=null},
ea:function ea(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a
this.b=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
ai:function ai(){var _=this
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
i0:function i0(){},
js:function js(a){this.a=a
this.b=null}},T={cR:function cR(){},cS:function cS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iM:function iM(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iN:function iN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
u=V.oj("Test 022",!0)
t=W.l7(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.e]
u.e5(H.d(["Test of the Material Lighting shader with a textured point light."],s))
u.jM(H.d(["shapes"],s))
u.e5(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.df(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.ol(r,!0,!0,!0,!1)
p=q.f
o=p.a
n=o.createTexture()
C.b.aY(o,34067,n)
C.b.bS(o,34067,10242,10497)
C.b.bS(o,34067,10243,10497)
C.b.bS(o,34067,10241,9729)
C.b.bS(o,34067,10240,9729)
C.b.aY(o,34067,null)
m=new T.cS()
m.a=0
m.b=n
m.c=!1
m.d=0
p.aS(m,n,"../resources/earthColor/posx.png",34069,!1,!1)
p.aS(m,n,"../resources/earthColor/negx.png",34070,!1,!1)
p.aS(m,n,"../resources/earthColor/posy.png",34071,!1,!1)
p.aS(m,n,"../resources/earthColor/negy.png",34072,!1,!1)
p.aS(m,n,"../resources/earthColor/posz.png",34073,!1,!1)
p.aS(m,n,"../resources/earthColor/negz.png",34074,!1,!1)
l=U.lc(null)
l.h(0,U.fO(V.m7(0,0,2)))
p=new U.e8()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.sfm(0)
p.sf3(0,0)
p.sfa(0)
o=p.d
if(!(Math.abs(o-0.5)<$.K().a)){p.d=0.5
o=new D.J("deltaYaw",o,0.5,p,[P.q])
o.b=!0
p.K(o)}o=p.e
if(!(Math.abs(o-0.5)<$.K().a)){p.e=0.5
o=new D.J("deltaPitch",o,0.5,p,[P.q])
o.b=!0
p.K(o)}o=p.f
if(!(Math.abs(o-0)<$.K().a)){p.f=0
o=new D.J("deltaRoll",o,0,p,[P.q])
o.b=!0
p.K(o)}l.h(0,p)
k=E.lb(null,!0,null,"",null,null)
p=U.lc(null)
p.h(0,U.fO(V.lj(0.2,0.2,0.2,1)))
p.h(0,l)
k.sb0(p)
k.sae(0,F.n3(8,null,1,8))
p=O.m3()
o=p.f
j=o.c
if(j!==C.h){if(j===C.d)o.aH()
o.c=C.h
o.j0(null)
j=o.a
j.a=null
j.a2(null)}o.j1(m)
k.sbi(p)
i=new D.bL()
i.c=new V.a6(1,1,1)
i.e=1
i.f=0
i.r=0
i.a=V.cD()
h=i.b
i.b=l
l.gv().h(0,i.gc2())
p=new D.J("mover",h,i.b,i,[U.ae])
p.b=!0
i.ab(p)
g=new V.a6(1,1,1)
if(!i.c.A(0,g)){h=i.c
i.c=g
p=new D.J("color",h,g,i,[V.a6])
p.b=!0
i.ab(p)}p=i.d
if(p!==m){if(p!=null)p.gv().O(0,i.gc2())
h=i.d
i.d=m
m.gv().h(0,i.gc2())
p=new D.J("texture",h,i.d,i,[T.cS])
p.b=!0
i.ab(p)}p=i.e
if(!(Math.abs(p-1)<$.K().a)){i.e=1
p=new D.J("attenuation0",p,1,i,[P.q])
p.b=!0
i.ab(p)}p=i.f
if(!(Math.abs(p-0.15)<$.K().a)){i.f=0.15
p=new D.J("attenuation1",p,0.15,i,[P.q])
p.b=!0
i.ab(p)}p=i.r
if(!(Math.abs(p-0.05)<$.K().a)){i.r=0.05
p=new D.J("attenuation2",p,0.05,i,[P.q])
p.b=!0
i.ab(p)}f=O.m3()
f.dx.h(0,i)
p=f.r
p.saA(0,new V.a6(0.2,0.2,0.2))
p=f.x
p.saA(0,new V.a6(1,1,1))
p=f.z
p.saA(0,new V.a6(1,1,1))
p=f.z
if(p.c===C.d){p.c=C.j
p.c0()
p.cs(100)
o=p.a
o.a=null
o.a2(null)}p.cs(100)
e=E.lb(null,!0,null,"",null,null)
e.sb0(U.fO(V.lj(3,3,3,1)))
p=F.lB(1,null,null,1)
p.cR()
e.sae(0,p)
d=E.lb(null,!0,null,"",null,null)
d.sae(0,F.n5(30,1,15,0.5))
c=U.lc(null)
p=q.r
o=new U.et()
j=U.l9()
j.sdd(0,!0)
j.scZ(6.283185307179586)
j.sd0(0)
j.sa3(0,0)
j.sd_(100)
j.sY(0)
j.scJ(0.5)
o.b=j
b=o.gaT()
j.gv().h(0,b)
j=U.l9()
j.sdd(0,!0)
j.scZ(6.283185307179586)
j.sd0(0)
j.sa3(0,0)
j.sd_(100)
j.sY(0)
j.scJ(0.5)
o.c=j
j.gv().h(0,b)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
a=new X.aA(!1,!1,!1)
h=o.d
o.d=a
j=[X.aA]
b=new D.J("modifiers",h,a,o,j)
b.b=!0
o.K(b)
b=o.f
if(b!==!1){o.f=!1
b=new D.J("invertX",b,!1,o,[P.T])
b.b=!0
o.K(b)}b=o.r
if(b!==!1){o.r=!1
b=new D.J("invertY",b,!1,o,[P.T])
b.b=!0
o.K(b)}o.b9(p)
c.h(0,o)
p=q.r
o=new U.es()
b=U.l9()
b.sdd(0,!0)
b.scZ(6.283185307179586)
b.sd0(0)
b.sa3(0,0)
b.sd_(100)
b.sY(0)
b.scJ(0.2)
o.b=b
b.gv().h(0,o.gaT())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
a=new X.aA(!0,!1,!1)
h=o.c
o.c=a
b=new D.J("modifiers",h,a,o,j)
b.b=!0
o.K(b)
o.b9(p)
c.h(0,o)
p=q.r
o=new U.eu()
o.c=0.01
o.d=0
o.e=0
a=new X.aA(!1,!1,!1)
o.b=a
j=new D.J("modifiers",null,a,o,j)
j.b=!0
o.K(j)
o.b9(p)
c.h(0,o)
c.h(0,U.fO(V.m7(0,0,5)))
a0=new M.dF()
a0.shk(0,O.l8(E.ap))
a0.d.bm(a0.gi_(),a0.gi1())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a1=X.nN(!0,!0,!1,null,2000,null,0)
a2=new X.e2()
a2.c=1.0471975511965976
a2.d=0.1
a2.e=2000
a2.sb0(null)
p=a2.c
if(!(Math.abs(p-1.0471975511965976)<$.K().a)){a2.c=1.0471975511965976
p=new D.J("fov",p,1.0471975511965976,a2,[P.q])
p.b=!0
a2.aQ(p)}p=a2.d
if(!(Math.abs(p-0.1)<$.K().a)){a2.d=0.1
p=new D.J("near",p,0.1,a2,[P.q])
p.b=!0
a2.aQ(p)}p=a2.e
if(!(Math.abs(p-2000)<$.K().a)){a2.e=2000
p=new D.J("far",p,2000,a2,[P.q])
p.b=!0
a2.aQ(p)}p=a0.a
if(p!==a2){if(p!=null)p.gv().O(0,a0.gau())
h=a0.a
a0.a=a2
a2.gv().h(0,a0.gau())
p=new D.J("camera",h,a0.a,a0,[X.dy])
p.b=!0
a0.aE(p)}p=a0.b
if(p!==a1){if(p!=null)p.gv().O(0,a0.gau())
h=a0.b
a0.b=a1
a1.gv().h(0,a0.gau())
p=new D.J("target",h,a0.b,a0,[X.eg])
p.b=!0
a0.aE(p)}a0.sbi(null)
a0.sbi(f)
a0.d.h(0,e)
a0.d.h(0,d)
a0.d.h(0,k)
a0.a.sb0(c)
p=q.d
if(p!==a0){if(p!=null)p.gv().O(0,q.gdl())
q.d=a0
a0.gv().h(0,q.gdl())
q.dm()}p=new V.ia("shapes",!0)
s=C.z.df(s,"shapes")
p.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
p.b8(0,"Cube",new T.kO(d))
p.b8(0,"Cylinder",new T.kP(d))
p.b8(0,"Cone",new T.kQ(d))
p.b8(0,"Sphere",new T.kR(d))
p.e3(0,"Toroid",new T.kS(d),!0)
p.b8(0,"Knot",new T.kT(d))
s=q.z
if(s==null){s=D.V()
q.z=s}p={func:1,ret:-1,args:[D.z]}
o=H.n(new T.kU(u,f),p)
if(s.b==null)s.saU(H.d([],[p]))
s=s.b;(s&&C.a).h(s,o)
V.px(q)},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lf.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gL:function(a){return H.cL(a)},
i:function(a){return"Instance of '"+H.c4(a)+"'"}}
J.ho.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iT:1}
J.dN.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iN:1}
J.dO.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.i5.prototype={}
J.bN.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.n7()]
if(u==null)return this.fL(a)
return"JavaScript function for "+H.m(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aO.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.H("add"))
a.push(b)},
f7:function(a,b){if(!!a.fixed$length)H.t(P.H("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e6(b,null,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bi(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kI:function(a){return this.m(a,"")},
kz:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bi(a))}return t},
ky:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bi(a))}throw H.c(H.hm())},
kx:function(a,b){return this.ky(a,b,null)},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fI:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gkw:function(a){if(a.length>0)return a[0]
throw H.c(H.hm())},
gaC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hm())},
fF:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.H("setRange"))
P.bq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.ch(d)
if(e+t>u.gl(d))throw H.c(H.nQ())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bn:function(a,b,c,d){return this.fF(a,b,c,d,0)},
e6:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bi(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.ld(a,"[","]")},
gX:function(a){return new J.aw(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.cL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.H("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cf(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bn(u,0,a.length,a)
this.bn(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.le.prototype={}
J.aw.prototype={
gN:function(a){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdH(null)
return!1}this.sdH(u[s]);++this.c
return!0},
sdH:function(a){this.d=H.B(a,H.u(this,0))},
$ib2:1}
J.bG.prototype={
lj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
cS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
fe:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.t("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a*b},
bl:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dZ(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dZ(a,b)},
dZ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dY(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j7:function(a,b){if(b<0)throw H.c(H.at(b))
return this.dY(a,b)},
dY:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia4:1}
J.dM.prototype={$io:1}
J.dL.prototype={}
J.bl.prototype={
a1:function(a,b){if(b<0)throw H.c(H.cf(a,b))
if(b>=a.length)H.t(H.cf(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.cf(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l5(b,null,null))
return a+b},
b2:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.at(b))
c=P.bq(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
af:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.at(c))
if(typeof c!=="number")return c.a_()
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.af(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.at(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.e6(b,null,null))
if(b>c)throw H.c(P.e6(b,null,null))
if(c>a.length)throw H.c(P.e6(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.w(a,b,null)},
lm:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kW:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.t(c,u)+a},
aj:function(a,b){return this.kW(a,b," ")},
eP:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
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
$im9:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a1(this.a,b)},
$ad1:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h2.prototype={}
H.c2.prototype={
gX:function(a){return new H.cA(this,this.gl(this),0,[H.au(this,"c2",0)])},
bV:function(a,b){return this.fK(0,H.n(b,{func:1,ret:P.T,args:[H.au(this,"c2",0)]}))}}
H.cA.prototype={
gN:function(a){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.ch(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bi(u))
r=this.c
if(r>=s){this.sb4(null)
return!1}this.sb4(t.M(u,r));++this.c
return!0},
sb4:function(a){this.d=H.B(a,H.u(this,0))},
$ib2:1}
H.hD.prototype={
gX:function(a){return new H.hE(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
M:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ai:function(a,b){return[b]}}
H.hE.prototype={
E:function(){var u=this.b
if(u.E()){this.sb4(this.c.$1(u.gN(u)))
return!0}this.sb4(null)
return!1},
gN:function(a){return this.a},
sb4:function(a){this.a=H.B(a,H.u(this,1))},
$ab2:function(a,b){return[b]}}
H.hF.prototype={
gl:function(a){return J.aD(this.a)},
M:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ac2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d3.prototype={
gX:function(a){return new H.jy(J.by(this.a),this.b,this.$ti)}}
H.jy.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gN(u)))return!0
return!1},
gN:function(a){var u=this.a
return u.gN(u)}}
H.bZ.prototype={}
H.d1.prototype={
n:function(a,b,c){H.B(c,H.au(this,"d1",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.ep.prototype={}
H.fP.prototype={
i:function(a){return P.li(this)},
n:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
return H.nH()},
$iE:1}
H.fQ.prototype={
gl:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.dI(b)},
dI:function(a){return this.b[H.I(a)]},
P:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dI(q),u))}}}
H.id.prototype={}
H.iW.prototype={
ai:function(a){var u,t,s
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
H.i1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hq.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.j9.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l0.prototype={
$1:function(a){if(!!J.Y(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$iay:1}
H.cp.prototype={
i:function(a){return"Closure '"+H.c4(this).trim()+"'"},
$ibE:1,
glu:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iJ.prototype={}
H.iA.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.cn.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cL(this.a)
else t=typeof u!=="object"?J.dq(u):H.cL(u)
return(t^H.cL(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c4(u)+"'")}}
H.iY.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gkH:function(a){return this.a===0},
ga8:function(a){return new H.hv(this,[H.u(this,0)])},
bu:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dE(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dE(t,b)}else return this.kE(b)},
kE:function(a){var u=this.d
if(u==null)return!1
return this.cV(this.ca(u,this.cU(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bq(r,b)
s=t==null?null:t.b
return s}else return this.kF(b)},
kF:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ca(u,this.cU(a))
s=this.cV(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cl()
this.b=u}this.ds(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cl()
this.c=t}this.ds(t,b,c)}else this.kG(b,c)},
kG:function(a,b){var u,t,s,r
H.B(a,H.u(this,0))
H.B(b,H.u(this,1))
u=this.d
if(u==null){u=this.cl()
this.d=u}t=this.cU(a)
s=this.ca(u,t)
if(s==null)this.ct(u,t,[this.cm(a,b)])
else{r=this.cV(s,a)
if(r>=0)s[r].b=b
else s.push(this.cm(a,b))}},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bi(this))
u=u.c}},
ds:function(a,b,c){var u
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
u=this.bq(a,b)
if(u==null)this.ct(a,b,this.cm(b,c))
else u.b=c},
hO:function(){this.r=this.r+1&67108863},
cm:function(a,b){var u,t
u=new H.hu(H.B(a,H.u(this,0)),H.B(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hO()
return u},
cU:function(a){return J.dq(a)&0x3ffffff},
cV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.li(this)},
bq:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
hp:function(a,b){delete a[b]},
dE:function(a,b){return this.bq(a,b)!=null},
cl:function(){var u=Object.create(null)
this.ct(u,"<non-identifier-key>",u)
this.hp(u,"<non-identifier-key>")
return u}}
H.hu.prototype={}
H.hv.prototype={
gl:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.hw(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hw.prototype={
gN:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sdr(null)
return!1}else{this.sdr(u.a)
this.c=this.c.c
return!0}}},
sdr:function(a){this.d=H.B(a,H.u(this,0))},
$ib2:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kK.prototype={
$1:function(a){return this.a(H.I(a))},
$S:50}
H.hp.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im9:1,
$iof:1}
H.cG.prototype={$icG:1}
H.bH.prototype={$ibH:1,$ion:1}
H.dY.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cH.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pb(c)
H.bg(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.q]},
$ay:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dZ.prototype={
n:function(a,b,c){H.aj(c)
H.bg(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hU.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hV.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.e_.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$ipV:1}
H.cI.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icI:1,
$iS:1}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
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
h9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ce(new P.kg(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
ha:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ce(new P.kf(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$iba:1}
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
if(r>(t+1)*s)t=C.f.fP(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bf.prototype={
kL:function(a){if(this.c!==6)return!0
return this.b.b.d9(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
kC:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.ft(u,{func:1,args:[P.R,P.ay]}))return H.lC(r.lc(u,a.a,a.b,null,t,P.ay),s)
else return H.lC(r.d9(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aJ.prototype={
fd:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a1
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oY(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aJ(0,$.a1,[c])
r=b==null?1:3
this.dt(new P.bf(s,r,a,b,[u,c]))
return s},
li:function(a,b){return this.fd(a,null,b)},
dt:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibf")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaJ")
u=t.a
if(u<4){t.dt(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kz(null,null,u,H.n(new P.jL(this,a),{func:1,ret:-1}))}},
dU:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibf")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaJ")
t=p.a
if(t<4){p.dU(a)
return}this.a=t
this.c=p.c}u.a=this.bs(a)
t=this.b
t.toString
P.kz(null,null,t,H.n(new P.jP(u,this),{func:1,ret:-1}))}},
cp:function(){var u=H.f(this.c,"$ibf")
this.c=null
return this.bs(u)},
bs:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dA:function(a){var u,t,s
u=H.u(this,0)
H.lC(a,{futureOr:1,type:u})
t=this.$ti
if(H.dk(a,"$icw",t,"$acw"))if(H.dk(a,"$iaJ",t,null))P.mx(a,this)
else P.oz(a,this)
else{s=this.cp()
H.B(a,u)
this.a=4
this.c=a
P.d6(this,s)}},
dB:function(a,b){var u
H.f(b,"$iay")
u=this.cp()
this.a=8
this.c=new P.an(a,b)
P.d6(this,u)},
$icw:1}
P.jL.prototype={
$0:function(){P.d6(this.a,this.b)},
$S:0}
P.jP.prototype={
$0:function(){P.d6(this.b,this.a.a)},
$S:0}
P.jM.prototype={
$1:function(a){var u=this.a
u.a=0
u.dA(a)},
$S:24}
P.jN.prototype={
$2:function(a,b){H.f(b,"$iay")
this.a.dB(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jO.prototype={
$0:function(){this.a.dB(this.b,this.c)},
$S:0}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fb(H.n(r.d,{func:1}),null)}catch(q){t=H.ak(q)
s=H.ci(q)
if(this.d){r=H.f(this.a.a.c,"$ian").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$ian")
else p.b=new P.an(t,s)
p.a=!0
return}if(!!J.Y(u).$icw){if(u instanceof P.aJ&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$ian")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.li(new P.jT(o),null)
r.a=!1}},
$S:3}
P.jT.prototype={
$1:function(a){return this.a},
$S:47}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.B(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.d9(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.ci(o)
s=this.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$ian")
r=this.c
if(r.kL(u)&&r.e!=null){q=this.b
q.b=r.kC(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.ci(p)
r=H.f(this.a.a.c,"$ian")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ex.prototype={}
P.iD.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aJ(0,$.a1,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iF(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iG(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.iF.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.u(this.b,0)]}}}
P.iG.prototype={
$0:function(){this.b.dA(this.a.a)},
$S:0}
P.cP.prototype={}
P.iE.prototype={}
P.ba.prototype={}
P.an.prototype={
i:function(a){return H.m(this.a)},
$ibD:1}
P.kq.prototype={$iq9:1}
P.ky.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e1()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jZ.prototype={
ld:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a1){a.$0()
return}P.mJ(null,null,this,a,-1)}catch(s){u=H.ak(s)
t=H.ci(s)
P.kx(null,null,this,u,H.f(t,"$iay"))}},
le:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.l===$.a1){a.$1(b)
return}P.mK(null,null,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.ci(s)
P.kx(null,null,this,u,H.f(t,"$iay"))}},
jY:function(a,b){return new P.k0(this,H.n(a,{func:1,ret:b}),b)},
cB:function(a){return new P.k_(this,H.n(a,{func:1,ret:-1}))},
ec:function(a,b){return new P.k1(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
fb:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.l)return a.$0()
return P.mJ(null,null,this,a,b)},
d9:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a1===C.l)return a.$1(b)
return P.mK(null,null,this,a,b,c,d)},
lc:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a1===C.l)return a.$2(b,c)
return P.oZ(null,null,this,a,b,c,d,e,f)}}
P.k0.prototype={
$0:function(){return this.a.fb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k_.prototype={
$0:function(){return this.a.ld(this.b)},
$S:3}
P.k1.prototype={
$1:function(a){var u=this.c
return this.a.le(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jX.prototype={
gX:function(a){var u=new P.eM(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ic9")!=null}else{t=this.hl(b)
return t}},
hl:function(a){var u=this.d
if(u==null)return!1
return this.c8(this.dJ(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lr()
this.b=u}return this.dv(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lr()
this.c=t}return this.dv(t,b)}else return this.hc(0,b)},
hc:function(a,b){var u,t,s
H.B(b,H.u(this,0))
u=this.d
if(u==null){u=P.lr()
this.d=u}t=this.dC(b)
s=u[t]
if(s==null)u[t]=[this.c5(b)]
else{if(this.c8(s,b)>=0)return!1
s.push(this.c5(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iN(this.c,b)
else return this.iK(0,b)},
iK:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dJ(u,b)
s=this.c8(t,b)
if(s<0)return!1
this.e_(t.splice(s,1)[0])
return!0},
dv:function(a,b){H.B(b,H.u(this,0))
if(H.f(a[b],"$ic9")!=null)return!1
a[b]=this.c5(b)
return!0},
iN:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ic9")
if(u==null)return!1
this.e_(u)
delete a[b]
return!0},
dz:function(){this.r=1073741823&this.r+1},
c5:function(a){var u,t
u=new P.c9(H.B(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dz()
return u},
e_:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dz()},
dC:function(a){return J.dq(a)&1073741823},
dJ:function(a,b){return a[this.dC(b)]},
c8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.eM.prototype={
gN:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sdw(null)
return!1}else{this.sdw(H.B(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdw:function(a){this.d=H.B(a,H.u(this,0))},
$ib2:1}
P.hx.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:7}
P.hy.prototype={$ii:1,$ib:1}
P.y.prototype={
gX:function(a){return new H.cA(a,this.gl(a),0,[H.bQ(this,a,"y",0)])},
M:function(a,b){return this.j(a,b)},
ll:function(a,b){var u,t
u=H.d([],[H.bQ(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
lk:function(a){return this.ll(a,!0)},
p:function(a,b){var u,t
u=[H.bQ(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bn(t,0,this.gl(a),a)
C.a.bn(t,this.gl(a),t.length,b)
return t},
ku:function(a,b,c,d){var u
H.B(d,H.bQ(this,a,"y",0))
P.bq(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.ld(a,"[","]")}}
P.hA.prototype={}
P.hB.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:7}
P.ag.prototype={
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bQ(this,a,"ag",0),H.bQ(this,a,"ag",1)]})
for(u=J.by(this.ga8(a));u.E();){t=u.gN(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aD(this.ga8(a))},
i:function(a){return P.li(a)},
$iE:1}
P.kh.prototype={
n:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hC.prototype={
j:function(a,b){return J.lN(this.a,b)},
n:function(a,b,c){J.l2(this.a,H.B(b,H.u(this,0)),H.B(c,H.u(this,1)))},
P:function(a,b){J.lP(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.av(this.a)},
$iE:1}
P.eq.prototype={}
P.k3.prototype={
aw:function(a,b){var u
for(u=J.by(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gN(u))},
i:function(a){return P.ld(this,"{","}")},
M:function(a,b){var u,t,s
if(b<0)H.t(P.af(b,0,null,"index",null))
for(u=P.oD(this,this.r,H.u(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
$ii:1,
$img:1}
P.eN.prototype={}
P.fg.prototype={}
P.fG.prototype={
kN:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bq(c,a0,b.length,null,null,null)
u=$.nm()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.I(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kH(C.c.I(b,n))
j=H.kH(C.c.I(b,n+1))
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
g=r.a+=C.c.w(b,s,t)
r.a=g+H.c5(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.w(b,s,a0)
f=g.length
if(q>=0)P.lT(b,p,a0,q,o,f)
else{e=C.f.bl(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b2(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lT(b,p,a0,q,o,d)
else{e=C.f.bl(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b2(b,a0,a0,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.o],P.e]}}
P.fH.prototype={
$abC:function(){return[[P.b,P.o],P.e]}}
P.bW.prototype={}
P.bC.prototype={}
P.h4.prototype={
$abW:function(){return[P.e,[P.b,P.o]]}}
P.hk.prototype={
i:function(a){return this.a}}
P.hj.prototype={
hm:function(a,b,c){var u,t,s,r,q,p
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
if(c>b)q.a+=J.nA(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.e,P.e]}}
P.jh.prototype={
gkt:function(){return C.T}}
P.jj.prototype={
ba:function(a,b,c){var u,t,s
c=P.bq(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ko(t)
if(s.hy(a,b,c)!==c)s.e1(J.nu(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oT(0,s.b,t.length)))},
cH:function(a){return this.ba(a,0,null)},
$abC:function(){return[P.e,[P.b,P.o]]}}
P.ko.prototype={
e1:function(a,b){var u,t,s,r,q
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
hy:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.e1(r,C.c.I(a,p)))s=p}else if(r<=2047){q=this.b
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
P.ji.prototype={
ba:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.oq(!1,a,b,c)
if(u!=null)return u
c=P.bq(b,c,J.aD(a),null,null,null)
t=new P.am("")
s=new P.km(!1,t)
s.ba(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c5(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cH:function(a){return this.ba(a,0,null)},
$abC:function(){return[[P.b,P.o],P.e]}}
P.km.prototype={
ba:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kn(this,b,c,a)
$label0$0:for(q=J.ch(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bW()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bj(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.H,m)
if(u<=C.H[m]){m=P.a7("Overlong encoding of 0x"+C.f.bj(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bj(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c5(u)
this.c=!1}for(m=o<c;m;){l=P.p_(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a_()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bj(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bj(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kn.prototype={
$2:function(a,b){this.a.b.a+=P.ed(this.d,a,b)},
$S:46}
P.T.prototype={}
P.ao.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.ao&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aW(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nI(H.oa(this))
t=P.dA(H.o8(this))
s=P.dA(H.o4(this))
r=P.dA(H.o5(this))
q=P.dA(H.o7(this))
p=P.dA(H.o9(this))
o=P.nJ(H.o6(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.b1.prototype={
p:function(a,b){return new P.b1(C.f.p(this.a,b.ghr()))},
u:function(a,b){return new P.b1(C.f.u(this.a,b.ghr()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h1()
t=this.a
if(t<0)return"-"+new P.b1(0-t).i(0)
s=u.$1(C.f.a7(t,6e7)%60)
r=u.$1(C.f.a7(t,1e6)%60)
q=new P.h0().$1(t%1e6)
return""+C.f.a7(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.h0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.h1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bD.prototype={}
P.e1.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc7()+t+s
if(!this.a)return r
q=this.gc6()
p=P.h6(this.b)
return r+q+": "+p}}
P.c6.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hl.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var u,t
u=H.aj(this.b)
if(typeof u!=="number")return u.a_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.ja.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j7.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h6(u)+"."}}
P.i4.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.ec.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fV.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
i:function(a){return"Exception: "+this.a}}
P.hf.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.I(r,m)
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
g=""}f=C.c.w(r,i,j)
return t+h+f+g+"\n"+C.c.t(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bE.prototype={}
P.o.prototype={}
P.i.prototype={
bV:function(a,b){var u=H.au(this,"i",0)
return new H.d3(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gX(this)
for(t=0;u.E();)++t
return t},
gaO:function(a){var u,t
u=this.gX(this)
if(!u.E())throw H.c(H.hm())
t=u.gN(u)
if(u.E())throw H.c(H.nR())
return t},
M:function(a,b){var u,t,s
if(b<0)H.t(P.af(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.E();){s=u.gN(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nP(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.N.prototype={
gL:function(a){return P.R.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
A:function(a,b){return this===b},
gL:function(a){return H.cL(this)},
i:function(a){return"Instance of '"+H.c4(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.e.prototype={$im9:1}
P.am.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipJ:1}
P.jf.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.I(b)
t=J.dl(b).eO(b,"=")
if(t===-1){if(b!=="")J.l2(a,P.lt(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.w(b,0,t)
r=C.c.at(b,t+1)
u=this.a
J.l2(a,P.lt(s,0,s.length,u,!0),P.lt(r,0,r.length,u,!0))}return a},
$S:44}
P.jc.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jd.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.je.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fw(C.c.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ca.prototype={
gfl:function(){return this.b},
gcT:function(a){var u=this.c
if(u==null)return""
if(C.c.a6(u,"["))return C.c.w(u,1,u.length-1)
return u},
gbP:function(a){var u=this.d
if(u==null)return P.mB(this.a)
return u},
gd3:function(a){var u=this.f
return u==null?"":u},
geJ:function(){var u=this.r
return u==null?"":u},
d8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
g=P.ls(g,0,0,h)
return new P.ca(i,j,c,f,d,g,this.r)},
f8:function(a,b){return this.d8(a,null,null,null,null,null,null,b,null,null)},
gd4:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siJ(new P.eq(P.mq(u==null?"":u,C.m),[t,t]))}return this.Q},
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
if(!!J.Y(b).$iln)if(this.a==b.gbZ())if(this.c!=null===b.geK())if(this.b==b.gfl())if(this.gcT(this)==b.gcT(b))if(this.gbP(this)==b.gbP(b))if(this.e===b.gf2(b)){u=this.f
t=u==null
if(!t===b.geN()){if(t)u=""
if(u===b.gd3(b)){u=this.r
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
siJ:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$iln:1,
gbZ:function(){return this.a},
gf2:function(a){return this.e}}
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
t=u.a+=H.m(P.fh(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fh(C.w,b,C.m,!0))}},
$S:15}
P.kk.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.by(H.mZ(b,"$ii")),t=this.a;u.E();)t.$2(a,H.I(u.gN(u)))},
$S:38}
P.jb.prototype={
gfj:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.eP(t,"?",u)
r=t.length
if(s>=0){q=P.dg(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jG(this,"data",null,null,null,P.dg(t,u,r,C.L,!1),q,null)
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
J.nv(u,0,96,b)
return u},
$S:35}
P.kv.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.I(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kw.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.I(b,0),t=C.c.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.k6.prototype={
geK:function(){return this.c>0},
geM:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
geN:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
geL:function(){return this.r<this.a.length},
gdN:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdO:function(){return this.b===5&&C.c.a6(this.a,"https")},
gbZ:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdN()){this.x="http"
u="http"}else if(this.gdO()){this.x="https"
u="https"}else if(u===4&&C.c.a6(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a6(this.a,"package")){this.x="package"
u="package"}else{u=C.c.w(this.a,0,u)
this.x=u}return u},
gfl:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.w(this.a,t,u-1):""},
gcT:function(a){var u=this.c
return u>0?C.c.w(this.a,u,this.d):""},
gbP:function(a){var u
if(this.geM()){u=this.d
if(typeof u!=="number")return u.p()
return P.fw(C.c.w(this.a,u+1,this.e),null,null)}if(this.gdN())return 80
if(this.gdO())return 443
return 0},
gf2:function(a){return C.c.w(this.a,this.e,this.f)},
gd3:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.c.w(this.a,u+1,t):""},
geJ:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.at(t,u+1):""},
gd4:function(){var u=this.f
if(typeof u!=="number")return u.a_()
if(u>=this.r)return C.ab
u=P.e
return new P.eq(P.mq(this.gd3(this),C.m),[u,u])},
d8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbZ()
u=i==="file"
t=this.c
j=t>0?C.c.w(this.a,this.b+3,t):""
f=this.geM()?this.gbP(this):null
t=this.c
if(t>0)c=C.c.w(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.w(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.ls(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.at(t,s+1)
return new P.ca(i,j,c,f,d,g,b)},
f8:function(a,b){return this.d8(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Y(b).$iln&&this.a===b.i(0)},
i:function(a){return this.a},
$iln:1}
P.jG.prototype={}
W.A.prototype={}
W.fz.prototype={
gl:function(a){return a.length}}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.bT.prototype={$ibT:1}
W.bz.prototype={$ibz:1}
W.bU.prototype={
de:function(a,b,c){if(c!=null)return this.hz(a,b,P.p6(c,null))
return this.hA(a,b)},
fs:function(a,b){return this.de(a,b,null)},
hz:function(a,b,c){return a.getContext(b,c)},
hA:function(a,b){return a.getContext(b)},
$ibU:1,
$ilW:1}
W.bV.prototype={
hB:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kq:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibV:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fR.prototype={
gl:function(a){return a.length}}
W.Z.prototype={$iZ:1}
W.cr.prototype={
gl:function(a){return a.length}}
W.fS.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fT.prototype={
gl:function(a){return a.length}}
W.fU.prototype={
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.cs.prototype={
jT:function(a,b){return a.adoptNode(b)},
df:function(a,b){return a.getElementById(b)}}
W.fY.prototype={
i:function(a){return String(a)}}
W.dC.prototype={
kf:function(a,b){return a.createHTMLDocument(b)}}
W.dD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a4],"$aab")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ab,P.a4]]},
$ay:function(){return[[P.ab,P.a4]]},
$ii:1,
$ai:function(){return[[P.ab,P.a4]]},
$ib:1,
$ab:function(){return[[P.ab,P.a4]]},
$aD:function(){return[[P.ab,P.a4]]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaN(a))+" x "+H.m(this.gaK(a))},
A:function(a,b){var u
if(b==null)return!1
if(!H.dk(b,"$iab",[P.a4],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbO(b)&&a.top===u.gbT(b)&&this.gaN(a)===u.gaN(b)&&this.gaK(a)===u.gaK(b)},
gL:function(a){return W.mz(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaN(a)),C.e.gL(this.gaK(a)))},
ged:function(a){return a.bottom},
gaK:function(a){return a.height},
gbO:function(a){return a.left},
gbR:function(a){return a.right},
gbT:function(a){return a.top},
gaN:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a4]}}
W.fZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.e]},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
W.h_.prototype={
gl:function(a){return a.length}}
W.jE.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iW")},
n:function(a,b,c){var u
H.f(c,"$iW")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.l3(this.a,c,u[b])},
h:function(a,b){J.lO(this.a,b)
return b},
gX:function(a){var u=this.lk(this)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.W]},
$ai:function(){return[W.W]},
$ab:function(){return[W.W]}}
W.W.prototype={
gjX:function(a){return new W.jH(a)},
gcG:function(a){return new W.jE(a,a.children)},
gef:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
ah:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m_
if(u==null){u=H.d([],[W.aB])
t=new W.e0(u)
C.a.h(u,W.my(null))
C.a.h(u,W.mA())
$.m_=t
d=t}else d=u
u=$.lZ
if(u==null){u=new W.fi(d)
$.lZ=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation
t=(t&&C.U).kf(t,"")
$.bj=t
$.la=t.createRange()
t=$.bj
t.toString
t=t.createElement("base")
H.f(t,"$icm")
t.href=u.baseURI
u=$.bj.head;(u&&C.W).F(u,t)}u=$.bj
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$ibz")}u=$.bj
if(!!this.$ibz)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bj.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a8,a.tagName)){u=$.la;(u&&C.N).fB(u,s)
u=$.la
r=(u&&C.N).kd(u,b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(u=J.ad(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lR(s)
c.dh(r)
C.z.jT(document,r)
return r},
ke:function(a,b,c){return this.ah(a,b,c,null)},
fE:function(a,b,c,d){a.textContent=null
this.F(a,this.ah(a,b,c,d))},
fD:function(a,b){return this.fE(a,b,null,null)},
b3:function(a,b){return a.getAttribute(b)},
iL:function(a,b){return a.removeAttribute(b)},
fC:function(a,b,c){return a.setAttribute(b,c)},
$iW:1,
glf:function(a){return a.tagName}}
W.h3.prototype={
$1:function(a){return!!J.Y(H.f(a,"$iG")).$iW},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jN:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.hd(a,b,c,!1)},
hd:function(a,b,c,d){return a.addEventListener(b,H.ce(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icv:1,
$aD:function(){return[W.aF]}}
W.ha.prototype={
gl:function(a){return a.length}}
W.he.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.dI.prototype={}
W.dJ.prototype={
iR:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic_:1,
$aD:function(){return[W.G]}}
W.dK.prototype={}
W.bk.prototype={$ibk:1,
geg:function(a){return a.data}}
W.cy.prototype={$icy:1,$ilW:1}
W.cz.prototype={$icz:1}
W.b3.prototype={$ib3:1}
W.dQ.prototype={}
W.dT.prototype={
i:function(a){return String(a)},
$idT:1}
W.cE.prototype={}
W.hN.prototype={
gl:function(a){return a.length}}
W.hO.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.P(a,new W.hP(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hQ.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.P(a,new W.hR(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.ah.prototype={$iah:1}
W.as.prototype={
gaO:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mh("No elements"))
if(t>1)throw H.c(P.mh("More than one element"))
return u.firstChild},
aw:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ad(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.l3(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dG(u,u.length,-1,[H.bQ(C.ac,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
l5:function(a){var u=a.parentNode
if(u!=null)J.fx(u,a)},
l9:function(a,b){var u,t
try{u=a.parentNode
J.l3(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fJ(a):u},
F:function(a,b){return a.appendChild(H.f(b,"$iG"))},
iM:function(a,b){return a.removeChild(b)},
iQ:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.e5.prototype={
kd:function(a,b){return a.createContextualFragment(b)},
fB:function(a,b){return a.selectNodeContents(b)}}
W.ij.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.P(a,new W.ik(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.ik.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.im.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ix.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.iB.prototype={
j:function(a,b){return this.dK(a,H.I(b))},
n:function(a,b,c){this.iZ(a,b,c)},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hF(a,u)
if(t==null)return
b.$2(t,this.dK(a,t))}},
ga8:function(a){var u=H.d([],[P.e])
this.P(a,new W.iC(u))
return u},
gl:function(a){return a.length},
dK:function(a,b){return a.getItem(b)},
hF:function(a,b){return a.key(b)},
iZ:function(a,b,c){return a.setItem(b,c)},
$aag:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.iC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aG.prototype={$iaG:1}
W.b9.prototype={$ib9:1}
W.ee.prototype={
ah:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
u=W.nK("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).aw(0,new W.as(u))
return t},
hD:function(a,b){return a.insertRow(b)}}
W.ef.prototype={
ah:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaO(u)
s.toString
u=new W.as(s)
r=u.gaO(u)
t.toString
r.toString
new W.as(t).aw(0,new W.as(r))
return t},
dM:function(a,b){return a.insertCell(b)}}
W.iI.prototype={
ah:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c_(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaO(u)
t.toString
s.toString
new W.as(t).aw(0,new W.as(s))
return t}}
W.cQ.prototype={$icQ:1}
W.aV.prototype={$iaV:1}
W.aH.prototype={$iaH:1}
W.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.iP.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.iU.prototype={
gl:function(a){return a.length}}
W.bM.prototype={}
W.jg.prototype={
i:function(a){return String(a)}}
W.jv.prototype={$ilW:1}
W.jw.prototype={
gl:function(a){return a.length}}
W.be.prototype={
gkl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gkk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibe:1}
W.d4.prototype={
iS:function(a,b){return a.requestAnimationFrame(H.ce(H.n(b,{func:1,ret:-1,args:[P.a4]}),1))},
hs:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d5.prototype={$id5:1}
W.jF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iZ")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Z]},
$ay:function(){return[W.Z]},
$ii:1,
$ai:function(){return[W.Z]},
$ib:1,
$ab:function(){return[W.Z]},
$aD:function(){return[W.Z]}}
W.eA.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.dk(b,"$iab",[P.a4],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbO(b)&&a.top===u.gbT(b)&&a.width===u.gaN(b)&&a.height===u.gaK(b)},
gL:function(a){return W.mz(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaK:function(a){return a.height},
gaN:function(a){return a.width}}
W.jU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.eS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.k7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.kb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.jD.prototype={
P:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga8(this),t=u.length,s=this.a,r=J.ad(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b3(s,p))}},
ga8:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.f(u[r],"$id5")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aag:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jH.prototype={
j:function(a,b){return J.l4(this.a,H.I(b))},
n:function(a,b,c){J.nz(this.a,b,c)},
gl:function(a){return this.ga8(this).length}}
W.jI.prototype={}
W.lq.prototype={}
W.jJ.prototype={}
W.jK.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:34}
W.bO.prototype={
fX:function(a){var u,t
u=$.lL()
if(u.gkH(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pi())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pj())}},
aX:function(a){return $.nn().Z(0,W.ct(a))},
ax:function(a,b,c){var u,t,s
u=W.ct(a)
t=$.lL()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.ly(s.$4(a,b,c,this))},
$iaB:1}
W.D.prototype={
gX:function(a){return new W.dG(a,this.gl(a),-1,[H.bQ(this,a,"D",0)])}}
W.e0.prototype={
aX:function(a){return C.a.e6(this.a,new W.i_(a))},
ax:function(a,b,c){return C.a.e6(this.a,new W.hZ(a,b,c))},
$iaB:1}
W.i_.prototype={
$1:function(a){return H.f(a,"$iaB").aX(this.a)},
$S:25}
W.hZ.prototype={
$1:function(a){return H.f(a,"$iaB").ax(this.a,this.b,this.c)},
$S:25}
W.f_.prototype={
h8:function(a,b,c,d){var u,t,s
this.a.aw(0,c)
u=b.bV(0,new W.k4())
t=b.bV(0,new W.k5())
this.b.aw(0,u)
s=this.c
s.aw(0,C.I)
s.aw(0,t)},
aX:function(a){return this.a.Z(0,W.ct(a))},
ax:function(a,b,c){var u,t
u=W.ct(a)
t=this.c
if(t.Z(0,H.m(u)+"::"+b))return this.d.jU(c)
else if(t.Z(0,"*::"+b))return this.d.jU(c)
else{t=this.b
if(t.Z(0,H.m(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.m(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iaB:1}
W.k4.prototype={
$1:function(a){return!C.a.Z(C.B,H.I(a))},
$S:26}
W.k5.prototype={
$1:function(a){return C.a.Z(C.B,H.I(a))},
$S:26}
W.kd.prototype={
ax:function(a,b,c){if(this.fO(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.l4(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.ke.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.I(a))},
$S:17}
W.kc.prototype={
aX:function(a){var u=J.Y(a)
if(!!u.$icM)return!1
u=!!u.$ir
if(u&&W.ct(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.aX(a)},
$iaB:1}
W.dG.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdL(J.lN(this.a,u))
this.c=u
return!0}this.sdL(null)
this.c=t
return!1},
gN:function(a){return this.d},
sdL:function(a){this.d=H.B(a,H.u(this,0))},
$ib2:1}
W.aB.prototype={}
W.k2.prototype={$ipW:1}
W.fi.prototype={
dh:function(a){new W.kp(this).$2(a,null)},
b7:function(a,b){if(b==null)J.lR(a)
else J.fx(b,a)},
iX:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nw(a)
s=J.l4(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ak(o)}q="element unprintable"
try{q=J.av(a)}catch(o){H.ak(o)}try{p=W.ct(a)
this.iW(H.f(a,"$iW"),b,u,q,p,H.f(t,"$iE"),H.I(s))}catch(o){if(H.ak(o) instanceof P.aL)throw o
else{this.b7(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b7(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aX(a)){this.b7(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ax(a,"is",g)){this.b7(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga8(f).length-1,u=f.a,r=J.ad(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.ax(a,J.nB(q),r.b3(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b3(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b3(u,q)
r.iL(u,q)}}if(!!J.Y(a).$icQ)this.dh(a.content)},
$ipG:1}
W.kp.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iX(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b7(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ak(r)
q=H.f(u,"$iG")
if(s){p=q.parentNode
if(p!=null)J.fx(p,q)}else J.fx(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
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
W.db.prototype={}
W.dc.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.dd.prototype={}
W.de.prototype={}
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
eH:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dc:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Y(a)
if(!!t.$iao)return new Date(a.a)
if(!!t.$iof)throw H.c(P.j8("structured clone of RegExp"))
if(!!t.$iaF)return a
if(!!t.$ibT)return a
if(!!t.$icv)return a
if(!!t.$ibk)return a
if(!!t.$icG||!!t.$ibH)return a
if(!!t.$iE){s=this.eH(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.P(a,new P.ka(u,this))
return u.a}if(!!t.$ib){s=this.eH(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.kc(a,s)}throw H.c(P.j8("structured clone of other type"))},
kc:function(a,b){var u,t,s,r
u=J.ch(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.dc(u.j(a,r)))
return s}}
P.ka.prototype={
$2:function(a,b){this.a.a[a]=this.b.dc(b)},
$S:7}
P.ff.prototype={$ibk:1,
geg:function(a){return this.a}}
P.kA.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k9.prototype={}
P.hb.prototype={
gbr:function(){var u,t,s
u=this.b
t=H.au(u,"y",0)
s=W.W
return new H.hD(new H.d3(u,H.n(new P.hc(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.hd(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iW")
u=this.gbr()
J.ny(u.b.$1(J.fy(u.a,b)),c)},
h:function(a,b){J.lO(this.b.a,b)},
gl:function(a){return J.aD(this.gbr().a)},
j:function(a,b){var u=this.gbr()
return u.b.$1(J.fy(u.a,b))},
gX:function(a){var u=P.m2(this.gbr(),!1,W.W)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.W]},
$ai:function(){return[W.W]},
$ab:function(){return[W.W]}}
P.hc.prototype={
$1:function(a){return!!J.Y(H.f(a,"$iG")).$iW},
$S:22}
P.hd.prototype={
$1:function(a){return H.l(H.f(a,"$iG"),"$iW")},
$S:33}
P.jY.prototype={
gbR:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.B(u+this.c,H.u(this,0))},
ged:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.B(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dk(b,"$iab",[P.a4],"$aab")){u=this.a
t=J.ad(b)
if(u==t.gbO(b)){s=this.b
if(s==t.gbT(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.B(u+this.c,r)===t.gbR(b)){if(typeof s!=="number")return s.p()
u=H.B(s+this.d,r)===t.ged(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.dq(u)
s=this.b
r=J.dq(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gL(H.B(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.B(s+this.d,q))
return P.oC(P.jW(P.jW(P.jW(P.jW(0,t),r),u),q))}}
P.ab.prototype={
gbO:function(a){return this.a},
gbT:function(a){return this.b},
gaN:function(a){return this.c},
gaK:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hs.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.f(c,"$ib4")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aD:function(){return[P.b4]}}
P.b7.prototype={$ib7:1}
P.i2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aD:function(){return[P.b7]}}
P.i9.prototype={
gl:function(a){return a.length}}
P.cM.prototype={$icM:1}
P.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.I(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.r.prototype={
gcG:function(a){return new P.hb(a,new W.as(a))},
ah:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aB])
C.a.h(u,W.my(null))
C.a.h(u,W.mA())
C.a.h(u,new W.kc())
c=new W.fi(new W.e0(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).ke(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.as(r)
p=u.gaO(u)
for(u=J.ad(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ir:1}
P.bb.prototype={$ibb:1}
P.iV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aD:function(){return[P.bb]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ion:1}
P.fC.prototype={
gl:function(a){return a.length}}
P.fD.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.P(a,new P.fE(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fF.prototype={
gl:function(a){return a.length}}
P.bS.prototype={}
P.i3.prototype={
gl:function(a){return a.length}}
P.ey.prototype={}
P.du.prototype={$idu:1}
P.dH.prototype={$idH:1}
P.e4.prototype={$ie4:1}
P.c7.prototype={
e2:function(a,b){return a.activeTexture(b)},
e7:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
jZ:function(a,b,c){return a.bindFramebuffer(b,c)},
aY:function(a,b,c){return a.bindTexture(b,c)},
k_:function(a,b,c){return a.blendFunc(b,c)},
ee:function(a,b,c,d){return a.bufferData(b,c,d)},
k6:function(a,b){return a.clear(b)},
k7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
k8:function(a,b){return a.clearDepth(b)},
ka:function(a,b){return a.compileShader(b)},
kg:function(a,b){return a.createShader(b)},
ki:function(a,b){return a.deleteProgram(b)},
kj:function(a,b){return a.deleteShader(b)},
km:function(a,b){return a.depthFunc(b)},
kn:function(a,b){return a.disable(b)},
eh:function(a,b){return a.disableVertexAttribArray(b)},
kp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cK:function(a,b){return a.enable(b)},
ek:function(a,b){return a.enableVertexAttribArray(b)},
fn:function(a,b,c){return a.getActiveAttrib(b,c)},
fo:function(a,b,c){return a.getActiveUniform(b,c)},
fp:function(a,b,c){return a.getAttribLocation(b,c)},
dg:function(a,b){return a.getParameter(b)},
ft:function(a,b){return a.getProgramInfoLog(b)},
bX:function(a,b,c){return a.getProgramParameter(b,c)},
fu:function(a,b){return a.getShaderInfoLog(b)},
fv:function(a,b,c){return a.getShaderParameter(b,c)},
fw:function(a,b,c){return a.getUniformLocation(b,c)},
kJ:function(a,b){return a.linkProgram(b)},
l3:function(a,b,c){return a.pixelStorei(b,c)},
fH:function(a,b,c){return a.shaderSource(b,c)},
lh:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Y(g)
if(!!u.$ibk)t=!0
else t=!1
if(t){this.jb(a,b,c,d,e,f,P.p7(g))
return}if(!!u.$icy)u=!0
else u=!1
if(u){this.jc(a,b,c,d,e,f,g)
return}throw H.c(P.ds("Incorrect number or type of arguments"))},
lg:function(a,b,c,d,e,f,g){return this.lh(a,b,c,d,e,f,g,null,null,null)},
jb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bS:function(a,b,c,d){return a.texParameteri(b,c,d)},
U:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fh:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fi:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fk:function(a,b){return a.useProgram(b)},
lo:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lp:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic7:1}
P.e9.prototype={$ie9:1}
P.eh.prototype={$ieh:1}
P.eo.prototype={$ieo:1}
P.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.br(this.hE(a,b))},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
hE:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.a5.prototype={
c1:function(a){this.shJ(H.d([],[a]))
this.sdS(null)
this.sdP(null)
this.sdT(null)},
di:function(a,b,c){var u=H.au(this,"a5",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdS(b)
this.sdP(a)
this.sdT(c)},
bm:function(a,b){return this.di(a,null,b)},
iu:function(a){var u
H.k(a,"$ii",[H.au(this,"a5",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hR:function(a,b){var u
H.k(b,"$ii",[H.au(this,"a5",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.aw(u,u.length,0,[H.u(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.au(this,"a5",0)
H.B(b,u)
u=[u]
if(this.iu(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hR(s,H.d([b],u))}},
shJ:function(a){this.a=H.k(a,"$ib",[H.au(this,"a5",0)],"$ab")},
sdS:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.au(this,"a5",0)]]})},
sdP:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.au(this,"a5",0)]]})},
sdT:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.au(this,"a5",0)]]})},
$ii:1}
O.cC.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.V()
this.b=u}return u},
fV:function(a){var u=this.b
if(u!=null)u.J(a)},
aP:function(){return this.fV(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.a.gaC(u)
else return V.cD()},
f5:function(a){var u=this.a
if(a==null)C.a.h(u,V.cD())
else C.a.h(u,a)
this.aP()},
d2:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
scc:function(a){this.a=H.k(a,"$ib",[V.al],"$ab")}}
E.fI.prototype={}
E.ap.prototype={
du:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
if(t.f==null)t.du()}},
sae:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().O(0,this.geY())
t=this.c
if(t!=null)t.gv().h(0,this.geY())
s=new D.J("shape",u,this.c,this,[F.ea])
s.b=!0
this.ad(s)}},
sbi:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().O(0,this.gf_())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.gf_())
this.du()
s=new D.J("technique",t,this.f,this,[O.bK])
s.b=!0
this.ad(s)}},
sb0:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gv().O(0,this.geW())
if(a!=null)a.gv().h(0,this.geW())
this.r=a
t=new D.J("mover",u,a,this,[U.ae])
t.b=!0
this.ad(t)}},
aq:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.ar(0,b,this):null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.J("matrix",s,t,this,[V.al])
r.b=!0
this.ad(r)}u=this.f
if(u!=null)u.aq(0,b)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aq(0,b)},
b1:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga5(u))
else C.a.h(u.a,t.t(0,u.ga5(u)))
u.aP()
a.f6(this.f)
u=a.dy
s=(u&&C.a).gaC(u)
if(s!=null&&this.d!=null)s.l8(a,this)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.b1(a)
a.f4()
a.dx.d2()},
gv:function(){var u=this.z
if(u==null){u=D.V()
this.z=u}return u},
ad:function(a){var u=this.z
if(u!=null)u.J(a)},
a4:function(){return this.ad(null)},
eZ:function(a){H.f(a,"$iz")
this.e=null
this.ad(a)},
kU:function(){return this.eZ(null)},
f0:function(a){this.ad(H.f(a,"$iz"))},
kV:function(){return this.f0(null)},
eX:function(a){this.ad(H.f(a,"$iz"))},
kT:function(){return this.eX(null)},
eV:function(a){this.ad(H.f(a,"$iz"))},
kQ:function(){return this.eV(null)},
kP:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ap],"$ai")
for(u=b.length,t=this.geU(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sam(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
kS:function(a,b){var u,t
H.k(b,"$ii",[E.ap],"$ai")
for(u=b.gX(b),t=this.geU();u.E();)u.gN(u).gv().O(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfW:function(a,b){this.y=H.k(b,"$ia5",[E.ap],"$aa5")},
$ibp:1}
E.ie.prototype={
fR:function(a,b){var u,t
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
u=new O.cC()
t=[V.al]
u.scc(H.d([],t))
u.b=null
u.gv().h(0,new E.ig(this))
this.cy=u
u=new O.cC()
u.scc(H.d([],t))
u.b=null
u.gv().h(0,new E.ih(this))
this.db=u
u=new O.cC()
u.scc(H.d([],t))
u.b=null
u.gv().h(0,new E.ii(this))
this.dx=u
this.sja(H.d([],[O.bK]))
u=this.dy;(u&&C.a).h(u,null)
this.sj6(new H.aP([P.e,A.cN]))},
gl4:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga5(u)
t=this.db
t=u.t(0,t.ga5(t))
this.z=t
u=t}return u},
f6:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaC(u):a;(u&&C.a).h(u,t)},
f4:function(){var u=this.dy
if(u.length>1)u.pop()},
sja:function(a){this.dy=H.k(a,"$ib",[O.bK],"$ab")},
sj6:function(a){this.fr=H.k(a,"$iE",[P.e,A.cN],"$aE")}}
E.ig.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ih.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.ii.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ek.prototype={
dn:function(a){H.f(a,"$iz")
this.f9()},
dm:function(){return this.dn(null)},
gkB:function(){var u,t,s
u=Date.now()
t=C.f.a7(P.lY(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ao(u,!1)
return s/t},
dW:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.t()
if(typeof u!=="number")return H.F(u)
s=C.e.cS(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.t()
r=C.e.cS(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mk(C.y,this.gla())}},
f9:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iO(this),{func:1,ret:-1,args:[P.a4]})
C.P.hs(u)
C.P.iS(u,W.mO(t,P.a4))}},
l7:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dW()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ao(r,!1)
s.y=P.lY(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.b1(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ak(q)
t=H.ci(q)
P.lG("Error: "+H.m(u))
P.lG("Stack: "+H.m(t))
throw H.c(u)}}}
E.iO.prototype={
$1:function(a){var u
H.pt(a)
u=this.a
if(u.ch){u.ch=!1
u.l7()}},
$S:54}
Z.ew.prototype={$ipA:1}
Z.dv.prototype={
cA:function(a){var u,t,s
try{t=a.a
C.b.ek(t,this.e)
C.b.lo(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ak(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.jx.prototype={$ipB:1}
Z.dw.prototype={
b_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cA:function(a){var u,t
u=this.a
C.b.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cA(a)},
ln:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eh(s,u[t].e)
C.b.ay(s,this.a.a,null)},
b1:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ay(t,p,r.b)
C.b.kp(t,q.a,q.b,5123,0)
C.b.ay(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.av(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shC:function(a){this.b=H.k(a,"$ib",[Z.bF],"$ab")},
$ipK:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c4(this.c)+"'")+"]"}}
Z.bd.prototype={
gdj:function(a){var u,t
u=this.a
t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=2
if((u&$.bx().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
jW:function(a){var u,t,s
u=$.bv()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0)if(s===a)return u
return $.nl()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bv().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bw().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bx().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dm().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fL.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sam(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
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
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.P(P.m2(t,!0,{func:1,ret:-1,args:[D.z]}),new D.h7(u))
t=this.b
if(t!=null){this.saU(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.P(t,new D.h8(u))}return!0},
kr:function(){return this.J(null)},
lb:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
ak:function(a){return this.lb(a,!0,!1)},
sam:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saU:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h7.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.h8.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.z.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dx.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dP.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hr.prototype={
l0:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kX:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
siI:function(a){this.d=H.k(a,"$img",[P.o],"$amg")}}
X.dU.prototype={}
X.hz.prototype={
b5:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ao(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.t()
q=b.b
p=this.ch
if(typeof q!=="number")return q.t()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gaZ()
n=new X.bo(a,V.bJ(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d1:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fA()
if(typeof u!=="number")return u.bW()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b5(a,b))
return!0},
l1:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaZ()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.t()
o=a.b
n=this.cy
if(typeof o!=="number")return o.t()
r=new X.cF(new V.X(q*p,o*n),t,s,new P.ao(r,!1),this)
r.b=!0
u.J(r)
return!0},
ii:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ao(Date.now(),!1)
t=this.f
s=new X.dU(c,a,this.a.gaZ(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bJ()}}
X.aA.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aA))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bo.prototype={}
X.hT.prototype={
c9:function(a,b,c){var u,t,s
u=new P.ao(Date.now(),!1)
t=this.a.gaZ()
s=new X.bo(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c9(a,b,!0))
return!0},
bg:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fA()
if(typeof u!=="number")return u.bW()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c9(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c9(a,b,!1))
return!0},
l2:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaZ()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.t()
p=a.b
o=this.ch
if(typeof p!=="number")return p.t()
s=new X.cF(new V.X(r*q,p*o),t,b,new P.ao(s,!1),this)
s.b=!0
u.J(s)
return!0},
gei:function(){var u=this.b
if(u==null){u=D.V()
this.b=u}return u},
gbU:function(){var u=this.c
if(u==null){u=D.V()
this.c=u}return u},
geS:function(){var u=this.d
if(u==null){u=D.V()
this.d=u}return u}}
X.cF.prototype={}
X.i8.prototype={}
X.em.prototype={}
X.iS.prototype={
b5:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ao(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=this.a.gaZ()
r=new X.em(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
l_:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.J(this.b5(a,!0))
return!0},
kY:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.J(this.b5(a,!0))
return!0},
kZ:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.J(this.b5(a,!1))
return!0}}
X.er.prototype={
gaZ:function(){var u=this.a
return V.me(0,0,C.q.gef(u).c,C.q.gef(u).d)},
dF:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dP(u,new X.aA(t,a.altKey,a.shiftKey))},
aV:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aA(t,a.altKey,a.shiftKey)},
cu:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.aa(t-r,s-q)},
b6:function(a){return new V.X(a.movementX,a.movementY)},
co:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ap(p.pageX)
C.e.ap(p.pageY)
n=u.left
C.e.ap(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.ap(p.pageY)-u.top))}return t},
aF:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dx(u,new X.aA(t,a.altKey,a.shiftKey))},
cd:function(a){var u,t,s,r,q,p
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
ia:function(a){this.f=!0},
hZ:function(a){this.f=!1},
i4:function(a){H.f(a,"$iah")
if(this.f&&this.cd(a))a.preventDefault()},
ig:function(a){var u
H.f(a,"$ib3")
if(!this.f)return
u=this.dF(a)
this.b.l0(u)},
ic:function(a){var u
H.f(a,"$ib3")
if(!this.f)return
u=this.dF(a)
this.b.kX(u)},
ik:function(a){var u,t,s,r
H.f(a,"$iah")
u=this.a
u.focus()
this.f=!0
this.aV(a)
if(this.x){t=this.aF(a)
s=this.b6(a)
if(this.d.d1(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aF(a)
r=this.aI(a)
if(this.c.d1(t,r))a.preventDefault()},
ip:function(a){var u,t,s
H.f(a,"$iah")
this.aV(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bg(u,s))a.preventDefault()},
i8:function(a){var u,t,s
H.f(a,"$iah")
if(!this.cd(a)){this.aV(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bg(u,s))a.preventDefault()}},
im:function(a){var u,t,s
H.f(a,"$iah")
this.aV(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bf(u,s))a.preventDefault()},
i6:function(a){var u,t,s
H.f(a,"$iah")
if(!this.cd(a)){this.aV(a)
u=this.aF(a)
if(this.x){t=this.b6(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bf(u,s))a.preventDefault()}},
ir:function(a){var u,t
H.f(a,"$ibe")
this.aV(a)
u=new V.X((a&&C.O).gkk(a),C.O.gkl(a)).C(0,180)
if(this.x){if(this.d.l1(u))a.preventDefault()
return}if(this.r)return
t=this.aI(a)
if(this.c.l2(u,t))a.preventDefault()},
it:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aF(this.y)
s=this.aI(this.y)
this.d.ii(t,s,u)}},
iG:function(a){var u
H.f(a,"$iaX")
this.a.focus()
this.f=!0
this.cu(a)
u=this.co(a)
if(this.e.l_(u))a.preventDefault()},
iC:function(a){var u
H.f(a,"$iaX")
this.cu(a)
u=this.co(a)
if(this.e.kY(u))a.preventDefault()},
iE:function(a){var u
H.f(a,"$iaX")
this.cu(a)
u=this.co(a)
if(this.e.kZ(u))a.preventDefault()},
sht:function(a){this.z=H.k(a,"$ib",[[P.cP,P.R]],"$ab")}}
D.dB.prototype={$ia8:1,$ibp:1}
D.a8.prototype={$ibp:1}
D.dR.prototype={
gv:function(){var u=this.Q
if(u==null){u=D.V()
this.Q=u}return u},
ab:function(a){var u=this.Q
if(u!=null)u.J(a)},
dR:function(a){var u
H.f(a,"$iz")
u=this.ch
if(u!=null)u.J(a)},
ih:function(){return this.dR(null)},
iw:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fY(s))return!1}return!0},
hT:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdQ(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.f(b[p],"$ia8")
if(o instanceof D.bL)C.a.h(this.y,o)
n=o.x
if(n==null){n=new D.bY()
n.sam(null)
n.saU(null)
n.c=null
n.d=0
o.x=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c0(a,b,this,[u])
u.b=!0
this.ab(u)},
iA:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gdQ();t.E();){r=t.gN(t)
C.a.O(this.e,r)
r.gv().O(0,s)}u=new D.c1(a,b,this,[u])
u.b=!0
this.ab(u)},
fY:function(a){var u=C.a.Z(this.y,a)
return u},
sfZ:function(a){this.e=H.k(a,"$ib",[D.dB],"$ab")},
sh0:function(a){this.f=H.k(a,"$ib",[D.e3],"$ab")},
sh1:function(a){this.r=H.k(a,"$ib",[D.eb],"$ab")},
sh2:function(a){this.x=H.k(a,"$ib",[D.ei],"$ab")},
sh3:function(a){this.y=H.k(a,"$ib",[D.bL],"$ab")},
sh4:function(a){this.z=H.k(a,"$ib",[D.ej],"$ab")},
$ai:function(){return[D.a8]},
$aa5:function(){return[D.a8]}}
D.e3.prototype={$ia8:1,$ibp:1}
D.eb.prototype={$ia8:1,$ibp:1}
D.ei.prototype={$ia8:1,$ibp:1}
D.bL.prototype={
gv:function(){var u=this.x
if(u==null){u=D.V()
this.x=u}return u},
ab:function(a){var u
H.f(a,"$iz")
u=this.x
if(u!=null)u.J(a)},
h_:function(){return this.ab(null)},
$ia8:1,
$ibp:1}
D.ej.prototype={$ia8:1,$ibp:1}
V.a6.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gd5())
t=C.e.p(this.b,b.gbY())
s=C.e.p(this.c,b.gcC())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gd5())
t=C.e.u(this.b,b.gbY())
s=C.e.u(this.c,b.gcC())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aM.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gd5())
t=C.e.p(this.b,b.gbY())
s=C.e.p(this.c,b.gcC())
r=C.e.p(this.d,b.gjV(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gd5())
t=C.e.u(this.b,b.gbY())
s=C.e.u(this.c,b.gcC())
r=C.e.u(this.d,b.gjV(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.h5.prototype={}
V.dX.prototype={
al:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dX))return!1
u=b.a
t=$.K().a
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
t=V.cg(H.d([this.a,this.d,this.r],u),3,0)
s=V.cg(H.d([this.b,this.e,this.x],u),3,0)
r=V.cg(H.d([this.c,this.f,this.y],u),3,0)
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
V.al.prototype={
al:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
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
if(Math.abs(a7-0)<$.K().a)return V.cD()
a8=1/a7
a9=-r
b0=-d
return V.b6((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
t:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b6(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
fg:function(a){return new V.L(C.e.t(this.a,a.gbx(a))+C.e.t(this.b,a.gby(a))+C.e.t(this.c,a.gej()),C.e.t(this.e,a.gbx(a))+C.e.t(this.f,a.gby(a))+C.e.t(this.r,a.gej()),C.e.t(this.y,a.gbx(a))+C.e.t(this.z,a.gby(a))+C.e.t(this.Q,a.gej()))},
bk:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a3(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.K().a
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
i:function(a){return this.S()},
eI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.cg(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cg(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cg(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cg(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.eI("",3,0)},
G:function(a){return this.eI(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.a3.prototype={
p:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b8.prototype={
p:function(a,b){return new V.b8(C.e.p(this.a,b.glr(b)),C.e.p(this.b,b.gls(b)),C.e.p(this.c,b.glt(b)),C.e.p(this.d,b.glq(b)))},
u:function(a,b){return new V.b8(C.e.u(this.a,b.glr(b)),C.e.u(this.b,b.gls(b)),C.e.u(this.c,b.glt(b)),C.e.u(this.d,b.glq(b)))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.e7.prototype={
gac:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.X.prototype={
cW:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gbx(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gby(b)
if(typeof u!=="number")return u.p()
return new V.X(t,C.e.p(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gbx(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.gby(b)
if(typeof u!=="number")return u.u()
return new V.X(t,C.e.u(u,s))},
t:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.X(u*b,t*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.mr
if(u==null){u=new V.X(0,0)
$.mr=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.X(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.K()
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.L.prototype={
cW:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cX:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aJ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
W:function(a){return new V.L(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d2()
return new V.L(this.a/b,this.b/b,this.c/b)},
eR:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fM.prototype={
c4:function(a){var u=V.l1(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.V()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sdd:function(a,b){},
scZ:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.K().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c4(t)}u=new D.J("maximumLocation",u,this.b,this,[P.q])
u.b=!0
this.K(u)}},
sd0:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c4(t)}u=new D.J("minimumLocation",u,this.c,this,[P.q])
u.b=!0
this.K(u)}},
sa3:function(a,b){var u
b=this.c4(b)
u=this.d
if(!(Math.abs(u-b)<$.K().a)){this.d=b
u=new D.J("location",u,b,this,[P.q])
u.b=!0
this.K(u)}},
sd_:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.K().a)){this.e=a
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
if(!(Math.abs(u-a)<$.K().a)){this.f=a
u=new D.J("velocity",u,a,this,[P.q])
u.b=!0
this.K(u)}},
scJ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.J("dampening",u,a,this,[P.q])
u.b=!0
this.K(u)}},
aq:function(a,b){var u,t,s,r,q
u=this.f
t=$.K().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.K().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.dz.prototype={
gv:function(){var u=this.b
if(u==null){u=D.V()
this.b=u}return u},
ar:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cx.prototype={
gv:function(){var u=this.e
if(u==null){u=D.V()
this.e=u}return u},
K:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.J(a)},
aa:function(){return this.K(null)},
h6:function(a,b){var u,t,s,r,q,p,o,n
u=U.ae
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaT(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.K(u)},
iy:function(a,b){var u,t,s
u=U.ae
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gaT();t.E();)t.gN(t).gv().O(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.K(u)},
ar:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aw(u,u.length,0,[H.u(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.ar(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}this.f=s==null?V.cD():s
u=this.e
if(u!=null)u.ak(0)}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cx))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ae]},
$aa5:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.e8.prototype={
gv:function(){var u=this.y
if(u==null){u=D.V()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sfm:function(a){var u
a=V.l1(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.K().a)){this.a=a
u=new D.J("yaw",u,a,this,[P.q])
u.b=!0
this.K(u)}},
sf3:function(a,b){var u
b=V.l1(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.K().a)){this.b=b
u=new D.J("pitch",u,b,this,[P.q])
u.b=!0
this.K(u)}},
sfa:function(a){var u
a=V.l1(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.J("roll",u,a,this,[P.q])
u.b=!0
this.K(u)}},
ar:function(a,b,c){var u,t
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfm(this.a+this.d*b.y)
this.sf3(0,this.b+this.e*b.y)
this.sfa(this.c+this.f*b.y)
this.x=V.m6(this.c).t(0,V.m5(this.b)).t(0,V.m4(this.a))
u=this.y
if(u!=null)u.ak(0)}return this.x},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e8))return!1
u=this.a
t=b.a
s=$.K().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"], ["+V.Q(this.d,3,0)+", "+V.Q(this.e,3,0)+", "+V.Q(this.f,3,0)+"]"}}
U.es.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.V()
this.cy=u}return u},
K:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.J(a)},
aa:function(){return this.K(null)},
b9:function(a){if(this.a!=null)return!1
this.a=a
a.c.gei().h(0,this.gce())
this.a.c.geS().h(0,this.gcg())
this.a.c.gbU().h(0,this.gcj())
return!0},
cf:function(a){H.f(a,"$iz")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iz"),"$ibo")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.X(t.a,t.b).t(0,2).C(0,u.gac())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.t()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.X(s.a,s.b).t(0,2).C(0,u.gac())
s=this.b
q=r.a
if(typeof q!=="number")return q.W()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
this.b.sY(0)
t=t.u(0,a.z)
this.Q=new V.X(t.a,t.b).t(0,2).C(0,u.gac())}this.aa()},
ck:function(a){var u,t,s
H.f(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.t()
s=this.e
if(typeof s!=="number")return H.F(s)
u.sY(t*10*s)
this.aa()}},
ar:function(a,b,c){var u,t,s
u=this.ch
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.ch=t
s=b.y
this.b.aq(0,s)
this.cx=V.m6(this.b.d)}return this.cx},
$iae:1}
U.et.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.V()
this.fx=u}return u},
K:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.J(a)},
aa:function(){return this.K(null)},
b9:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gei().h(0,this.gce())
this.a.c.geS().h(0,this.gcg())
this.a.c.gbU().h(0,this.gcj())
u=this.a.d
t=u.f
if(t==null){t=D.V()
u.f=t
u=t}else u=t
u.h(0,this.ghK())
u=this.a.d
t=u.d
if(t==null){t=D.V()
u.d=t
u=t}else u=t
u.h(0,this.ghM())
u=this.a.e
t=u.b
if(t==null){t=D.V()
u.b=t
u=t}else u=t
u.h(0,this.gji())
u=this.a.e
t=u.d
if(t==null){t=D.V()
u.d=t
u=t}else u=t
u.h(0,this.gjg())
u=this.a.e
t=u.c
if(t==null){t=D.V()
u.c=t
u=t}else u=t
u.h(0,this.gje())
return!0},
av:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.X(u,t)},
cf:function(a){a=H.l(H.f(a,"$iz"),"$ibo")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iz"),"$ibo")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.av(new V.X(t.a,t.b).t(0,2).C(0,u.gac()))
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
r=this.av(new V.X(s.a,s.b).t(0,2).C(0,u.gac()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.av(new V.X(t.a,t.b).t(0,2).C(0,u.gac()))}this.aa()},
ck:function(a){var u,t,s
H.f(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
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
this.aa()}},
hL:function(a){if(H.l(H.f(a,"$iz"),"$idU").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hN:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iz"),"$ibo")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.av(new V.X(s.a,s.b).t(0,2).C(0,u.gac()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.av(new V.X(t.a,t.b).t(0,2).C(0,u.gac()))
this.aa()},
jj:function(a){H.f(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jh:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iz"),"$iem")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.av(new V.X(t.a,t.b).t(0,2).C(0,u.gac()))
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
r=this.av(new V.X(s.a,s.b).t(0,2).C(0,u.gac()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.av(new V.X(t.a,t.b).t(0,2).C(0,u.gac()))}this.aa()},
jf:function(a){var u,t,s
H.f(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
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
this.aa()}},
ar:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.dy=t
s=b.y
this.c.aq(0,s)
this.b.aq(0,s)
this.fr=V.m4(this.b.d).t(0,V.m5(this.c.d))}return this.fr},
$iae:1}
U.eu.prototype={
gv:function(){var u=this.r
if(u==null){u=D.V()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.J(a)},
b9:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.V()
u.e=t
u=t}else u=t
t=this.ghP()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.V()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hQ:function(a){var u,t,s,r
H.f(a,"$iz")
if(!J.U(this.b,this.a.b.c))return
H.l(a,"$icF")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){this.d=r
u=new D.J("zoom",u,r,this,[P.q])
u.b=!0
this.K(u)}},
ar:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.lj(s,s,s,1)}return this.f},
$iae:1}
M.dF.prototype={
aE:function(a){var u
H.f(a,"$iz")
u=this.x
if(u!=null)u.J(a)},
h7:function(){return this.aE(null)},
i0:function(a,b){var u,t,s,r,q,p,o,n
u=E.ap
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gau(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bY()
n.sam(null)
n.saU(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.aE(u)},
i2:function(a,b){var u,t,s
u=E.ap
H.k(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gau();t.E();)t.gN(t).gv().O(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.aE(u)},
sbi:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().O(0,this.gau())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gau())
u=new D.J("technique",t,this.c,this,[O.bK])
u.b=!0
this.aE(u)}},
gv:function(){var u=this.x
if(u==null){u=D.V()
this.x=u}return u},
b1:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.f6(this.c)
u=this.b
u.toString
t=a1.a
C.b.jZ(t,36160,null)
C.b.cK(t,2884)
C.b.cK(t,2929)
C.b.km(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.F(s)
o=C.e.ap(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.ap(p*r)
p=C.e.ap(q.c*s)
a1.c=p
q=C.e.ap(q.d*r)
a1.d=q
C.b.lp(t,o,n,p,q)
C.b.k8(t,u.c)
u=u.a
C.b.k7(t,u.a,u.b,u.c,u.d)
C.b.k6(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b6(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.f5(i)
t=$.ma
if(t==null){t=V.o1()
q=$.mu
if(q==null){q=new V.L(0,1,0)
$.mu=q}p=$.ms
if(p==null){p=new V.L(0,0,-1)
$.ms=p}h=p.C(0,Math.sqrt(p.H(p)))
q=q.aJ(h)
g=q.C(0,Math.sqrt(q.H(q)))
f=h.aJ(g)
e=new V.L(t.a,t.b,t.c)
d=g.W(0).H(e)
c=f.W(0).H(e)
b=h.W(0).H(e)
t=V.b6(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ma=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ar(0,a1,u)
if(a0!=null)a=a0.t(0,a)}a1.db.f5(a)
u=this.c
if(u!=null)u.aq(0,a1)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aq(0,a1)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();)u.d.b1(a1)
this.a.toString
a1.cy.d2()
a1.db.d2()
this.b.toString
a1.f4()},
shk:function(a,b){this.d=H.k(b,"$ia5",[E.ap],"$aa5")},
$ipH:1}
A.dt.prototype={}
A.fB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ks:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.ek(r.a,r.c)}},
ko:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.eh(r.a,r.c)}}}
A.hG.prototype={
fQ:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.jr(u)
a7.jy(u)
a7.js(u)
a7.jG(u)
a7.jH(u)
a7.jA(u)
a7.jL(u)
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
s.jv(u)
s.jq(u)
s.jt(u)
s.jw(u)
s.jE(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jC(u)
s.jD(u)}s.jz(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.i){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
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
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.d([],[P.e])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.ju(u)
s.jB(u)
s.jF(u)
s.jI(u)
s.jJ(u)
s.jK(u)
s.jx(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dG(n,35633)
this.f=this.dG(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.e7(s,q,this.e)
C.b.e7(s,this.r,this.f)
C.b.kJ(s,this.r)
if(!H.ly(C.b.bX(s,this.r,35714))){h=C.b.ft(s,this.r)
C.b.ki(s,this.r)
H.t(P.w("Failed to link shader: "+H.m(h)))}this.j3()
this.j5()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaC")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaC")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaC")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaC")
if(a7.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$icW")
if(a7.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaC")
if(a7.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaC")
this.shg(H.d([],[A.aC]))
t=a7.aB
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(f,"$iaC"))}}t=a7.a
if(t!==C.d){this.r2=H.l(this.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.rx=H.l(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iP")
break
case C.h:this.ry=H.l(this.y.q(0,"emissionTxt"),"$iar")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iP")
break}}t=a7.b
if(t!==C.d){this.x2=H.l(this.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.y1=H.l(this.y.q(0,"ambientTxt"),"$iaq")
this.aB=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break
case C.h:this.y2=H.l(this.y.q(0,"ambientTxt"),"$iar")
this.aB=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break}}t=a7.c
if(t!==C.d){this.ao=H.l(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.bz=H.l(this.y.q(0,"diffuseTxt"),"$iaq")
this.bA=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break
case C.h:this.el=H.l(this.y.q(0,"diffuseTxt"),"$iar")
this.bA=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break}}t=a7.d
if(t!==C.d){this.bB=H.l(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.em=H.l(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bC=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break
case C.h:this.en=H.l(this.y.q(0,"invDiffuseTxt"),"$iar")
this.bC=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a7.e
if(t!==C.d){this.bF=H.l(this.y.q(0,"shininess"),"$ia2")
this.bD=H.l(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.eo=H.l(this.y.q(0,"specularTxt"),"$iaq")
this.bE=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break
case C.h:this.ep=H.l(this.y.q(0,"specularTxt"),"$iar")
this.bE=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.i:this.eq=H.l(this.y.q(0,"bumpTxt"),"$iaq")
this.bG=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break
case C.h:this.er=H.l(this.y.q(0,"bumpTxt"),"$iar")
this.bG=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break}if(a7.dy){this.es=H.l(this.y.q(0,"envSampler"),"$iar")
this.eu=H.l(this.y.q(0,"nullEnvTxt"),"$iP")
t=a7.r
if(t!==C.d){this.bH=H.l(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.ev=H.l(this.y.q(0,"reflectTxt"),"$iaq")
this.bI=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break
case C.h:this.ew=H.l(this.y.q(0,"reflectTxt"),"$iar")
this.bI=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break}}t=a7.x
if(t!==C.d){this.bJ=H.l(this.y.q(0,"refraction"),"$ia2")
this.bK=H.l(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.ex=H.l(this.y.q(0,"refractTxt"),"$iaq")
this.bL=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break
case C.h:this.ey=H.l(this.y.q(0,"refractTxt"),"$iar")
this.bL=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break}}}t=a7.y
if(t!==C.d){this.bM=H.l(this.y.q(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.j:break
case C.i:this.ez=H.l(this.y.q(0,"alphaTxt"),"$iaq")
this.bN=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break
case C.h:this.eA=H.l(this.y.q(0,"alphaTxt"),"$iar")
this.bN=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break}}this.shq(H.d([],[A.cV]))
this.siH(H.d([],[A.cX]))
this.sj8(H.d([],[A.cY]))
this.sjl(H.d([],[A.cZ]))
this.sjm(H.d([],[A.d_]))
this.sjn(H.d([],[A.d0]))
if(a7.k2){t=a7.z
if(t>0){this.eB=H.f(this.y.q(0,"dirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.cL;(s&&C.a).h(s,new A.cV(g,f,e))}}t=a7.Q
if(t>0){this.eC=H.f(this.y.q(0,"pntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia2")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia2")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia2")
s=this.cM;(s&&C.a).h(s,new A.cX(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eD=H.f(this.y.q(0,"spotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia2")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia2")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia2")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia2")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia2")
s=this.cN;(s&&C.a).h(s,new A.cY(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eE=H.f(this.y.q(0,"txtDirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iO")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$iaq")
s=this.cO;(s&&C.a).h(s,new A.cZ(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eF=H.f(this.y.q(0,"txtPntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$icW")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iP")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia2")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia2")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia2")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$iar")
s=this.cP;(s&&C.a).h(s,new A.d_(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eG=H.f(this.y.q(0,"txtSpotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iO")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iP")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$iO")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia2")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$ia2")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a6,"$iaq")
s=this.cQ;(s&&C.a).h(s,new A.d0(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
an:function(a,b,c){C.b.V(b.a,b.d,1)},
ag:function(a,b,c){if(c==null||c.d<6)C.b.V(b.a,b.d,1)
else{a.fG(c)
C.b.V(b.a,b.d,0)}},
shg:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
shq:function(a){this.cL=H.k(a,"$ib",[A.cV],"$ab")},
siH:function(a){this.cM=H.k(a,"$ib",[A.cX],"$ab")},
sj8:function(a){this.cN=H.k(a,"$ib",[A.cY],"$ab")},
sjl:function(a){this.cO=H.k(a,"$ib",[A.cZ],"$ab")},
sjm:function(a){this.cP=H.k(a,"$ib",[A.d_],"$ab")},
sjn:function(a){this.cQ=H.k(a,"$ib",[A.d0],"$ab")}}
A.hJ.prototype={
jr:function(a){var u,t,s
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
jy:function(a){var u
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
js:function(a){var u
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
jG:function(a){var u,t
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
jH:function(a){var u,t
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
jA:function(a){var u
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
jL:function(a){var u
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
u+="uniform int null"+(c[0].toUpperCase()+C.c.at(c,1))+"Txt;\n"
a.a=u
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jv:function(a){var u,t
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
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
jq:function(a){var u,t
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
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
jt:function(a){var u,t
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
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jw:function(a){var u,t
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
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jE:function(a){var u,t
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
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jz:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.i:u+="uniform sampler2D bumpTxt;\n"
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
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jC:function(a){var u,t
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
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jD:function(a){var u,t
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
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
ju:function(a){var u,t
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
jB:function(a){var u,t
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
jF:function(a){var u,t
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
jI:function(a){var u,t,s
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
jJ:function(a){var u,t,s
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
jK:function(a){var u,t,s
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
jx:function(a){var u
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
i:function(a){return this.ao}}
A.cV.prototype={}
A.cZ.prototype={}
A.cX.prototype={}
A.d_.prototype={}
A.cY.prototype={}
A.d0.prototype={}
A.cN.prototype={
fT:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dG:function(a,b){var u,t,s
u=this.a
t=C.b.kg(u,b)
C.b.fH(u,t,a)
C.b.ka(u,t)
if(!H.ly(C.b.fv(u,t,35713))){s=C.b.fu(u,t)
C.b.kj(u,t)
throw H.c(P.w("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
j3:function(){var u,t,s,r,q,p
u=H.d([],[A.dt])
t=this.a
s=H.aj(C.b.bX(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.fn(t,this.r,r)
p=C.b.fp(t,this.r,q.name)
C.a.h(u,new A.dt(t,q.name,p))}this.x=new A.fB(u)},
j5:function(){var u,t,s,r,q,p
u=H.d([],[A.en])
t=this.a
s=H.aj(C.b.bX(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.fo(t,this.r,r)
p=C.b.fw(t,this.r,q.name)
C.a.h(u,this.kh(q.type,q.size,q.name,p))}this.y=new A.j5(u)},
aR:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.lm(u,t,b,a,c)},
hn:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lm(u,t,b,a,c)},
ho:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.lm(u,t,b,a,c)},
bt:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
kh:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.j0(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.j3(this.a,this.r,c,d)
case 35667:return new A.j1(this.a,this.r,c,d)
case 35668:return new A.j2(this.a,this.r,c,d)
case 35669:return new A.j4(this.a,this.r,c,d)
case 35674:return new A.j6(this.a,this.r,c,d)
case 35675:return new A.cW(this.a,this.r,c,d)
case 35676:return new A.aC(this.a,this.r,c,d)
case 35678:return this.hn(b,c,d)
case 35680:return this.ho(b,c,d)
case 35670:throw H.c(this.bt("BOOL",c))
case 35671:throw H.c(this.bt("BOOL_VEC2",c))
case 35672:throw H.c(this.bt("BOOL_VEC3",c))
case 35673:throw H.c(this.bt("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.en.prototype={}
A.j5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
kA:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.kA("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjo:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cW.prototype={
as:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.q],"$ab")))
C.b.fh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aC.prototype={
as:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.q],"$ab")))
C.b.fi(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ar.prototype={
fG:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(u<6)C.b.V(t,s,0)
else C.b.V(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kr.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cX(u.b,b).cX(u.d.cX(u.c,b),c)
a.sa3(0,new V.a3(t.a,t.b,t.c))
a.sfc(t.C(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.seb(new V.b8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
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
if(typeof q!=="number")return H.F(q)
t=-t*q
p=s*q
a.sa3(0,new V.a3(t,p,r))
p=new V.L(t,p,r)
a.sfc(p.C(0,Math.sqrt(p.H(p))))
a.seb(new V.b8(1-c,2+c,-1,-1))},
$S:8}
F.kE.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:21}
F.kF.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:21}
F.kY.prototype={
$2:function(a,b){return 0},
$S:31}
F.kZ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.F(u)
t=a.f
s=new V.L(t.a,t.b,t.c)
u=s.C(0,Math.sqrt(s.H(s))).t(0,this.b+u)
a.sa3(0,new V.a3(u.a,u.b,u.c))},
$S:8}
F.l_.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:29}
F.kM.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a3(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:29}
F.kC.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lM(t.$1(u),s)
s=J.nr(J.lM(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.L(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.H(s)))
t=$.mt
if(t==null){t=new V.L(1,0,0)
$.mt=t
p=t}else p=t
if(!J.U(q,p)){t=$.mv
if(t==null){t=new V.L(0,0,1)
$.mv=t
p=t}else p=t}t=q.aJ(p)
o=t.C(0,Math.sqrt(t.H(t)))
t=o.aJ(q)
p=t.C(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.t(0,t*s)
s=o.t(0,m*s)
a.sa3(0,J.nq(r,new V.a3(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
bb:function(){if(!this.gbc()){C.a.O(this.a.a.d.b,this)
this.a.a.a4()}this.cq()
this.cr()
this.iO()},
cv:function(a){this.a=a
C.a.h(a.d.b,this)},
cw:function(a){this.b=a
C.a.h(a.d.c,this)},
j2:function(a){this.c=a
C.a.h(a.d.d,this)},
cq:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
cr:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
iO:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gbc:function(){return this.a==null||this.b==null||this.c==null},
hf:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d2()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eR())return
return q.C(0,Math.sqrt(q.H(q)))},
hj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.L(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.H(u)))
u=r.u(0,t)
u=new V.L(u.a,u.b,u.c)
u=q.aJ(u.C(0,Math.sqrt(u.H(u))))
return u.C(0,Math.sqrt(u.H(u)))},
cF:function(){if(this.d!=null)return!0
var u=this.hf()
if(u==null){u=this.hj()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
he:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d2()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eR())return
return q.C(0,Math.sqrt(q.H(q)))},
hi:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.K().a){u=m.u(0,p)
u=new V.L(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.u(0,p).t(0,g).p(0,p).u(0,s)
u=new V.L(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.H(u)))
u=f.aJ(h)
u=u.C(0,Math.sqrt(u.H(u))).aJ(f)
h=u.C(0,Math.sqrt(u.H(u)))}return h},
cD:function(){if(this.e!=null)return!0
var u=this.he()
if(u==null){u=this.hi()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
gk9:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t
if(this.gbc())return a+"disposed"
u=a+C.c.aj(J.av(this.a.e),0)+", "+C.c.aj(J.av(this.b.e),0)+", "+C.c.aj(J.av(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.G("")}}
F.h9.prototype={}
F.iw.prototype={
bd:function(a,b,c){var u,t
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
F.bn.prototype={
bb:function(){if(!this.gbc()){C.a.O(this.a.a.c.b,this)
this.a.a.a4()}this.cq()
this.cr()},
cv:function(a){this.a=a
C.a.h(a.c.b,this)},
cw:function(a){this.b=a
C.a.h(a.c.c,this)},
cq:function(){var u=this.a
if(u!=null){C.a.O(u.c.b,this)
this.a=null}},
cr:function(){var u=this.b
if(u!=null){C.a.O(u.c.c,this)
this.b=null}},
gbc:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){if(this.gbc())return a+"disposed"
return a+C.c.aj(J.av(this.a.e),0)+", "+C.c.aj(J.av(this.b.e),0)},
S:function(){return this.G("")}}
F.ht.prototype={}
F.iZ.prototype={
bd:function(a,b,c){var u,t
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
F.bI.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aj(J.av(u.e),0)},
S:function(){return this.G("")}}
F.ea.prototype={
gv:function(){var u=this.e
if(u==null){u=D.V()
this.e=u}return u},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.kb())}this.a.D()
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
n=new F.bI()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
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
F.nU(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
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
F.cu(k,j,h)}u=this.e
if(u!=null)u.ak(0)},
az:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.az()||!1
if(!this.a.az())t=!1
u=this.e
if(u!=null)u.ak(0)
return t},
kM:function(a,b){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
for(u=[F.ai];t.length!==0;){s=C.a.gkw(t)
C.a.f7(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.h(t,q)
p=t[q]
if(p!=null&&a.bd(0,s,p)){C.a.h(r,p)
C.a.f7(t,q)}}if(r.length>1)b.be(r)}}this.a.D()
this.c.d6()
this.d.d6()
this.b.l6()
this.c.d7(new F.iZ())
this.d.d7(new F.iw())
u=this.e
if(u!=null)u.ak(0)},
jS:function(a){this.kM(new F.jp(),new F.i0())},
cz:function(){return this.jS(null)},
cR:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cR()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.h(u,t)
s=u[t]
u=s.r
if(u!=null)s.seT(new V.L(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.L(r,q,u).C(0,Math.sqrt(r*r+q*q+u*u))
if(!J.U(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.J(null)}}}}u=this.e
if(u!=null)u.ak(0)},
k0:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bv()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bu().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.dm().a)!==0)++r
if((s&$.dn().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a1.gdj(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dv])
for(m=0,l=0;l<r;++l){k=a1.jW(l)
j=k.gdj(k)
C.a.n(n,l,new Z.dv(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kK(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ay(t,34962,e)
C.b.ee(t,34962,new Float32Array(H.cb(o)),35044)
C.b.ay(t,34962,null)
d=new Z.dw(new Z.ew(34962,e),n,a1)
d.shC(H.d([],[Z.bF]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.lp(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.lp(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(1,c.length,a))}if(this.d.b.length!==0){s=P.o
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
C.a.h(c,b.e)}a=Z.lp(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
ad:function(a){var u=this.e
if(u!=null)u.J(a)},
a4:function(){return this.ad(null)},
$ipI:1}
F.ip.prototype={
jO:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ai],"$ab")
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
C.a.h(u,F.cu(s,p,o))}}return u},
jP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ai],"$ab")
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
d7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bd(0,p,n)){p.bb()
break}}}}},
d6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gk9(s)
if(t)s.bb()}},
az:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cF())s=!1
return s},
cE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cD())s=!1
return s},
cR:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.L(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.L(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shu:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.iq.prototype={
gl:function(a){return this.b.length},
d7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bd(0,p,n)){p.bb()
break}}}}},
d6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.bb()}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
S:function(){return this.G("")},
shG:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")}}
F.ir.prototype={
gl:function(a){return this.b.length},
l6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.O(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.O(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
scn:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
F.ai.prototype={
cI:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ev(this.cx,s,p,u,t,r,q,a,o)},
kb:function(){return this.cI(null)},
sa3:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
seT:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.H(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a4()}},
sfc:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
seb:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
kK:function(a){var u,t
if(a.A(0,$.bv())){u=this.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bu())){u=this.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bt())){u=this.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bw())){u=this.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bx())){u=this.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dm())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dn())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.cl()))return H.d([this.ch],[P.q])
else if(a.A(0,$.bs())){u=this.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cF:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d2()
this.d.P(0,new F.ju(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ak(0)}return!0},
cD:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d2()
this.d.P(0,new F.jt(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ak(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.c.aj(J.av(this.e),0))
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
S:function(){return this.G("")}}
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
t.a4()
return!0},
jR:function(a,b,c,d,e,f,g,h,i){var u=F.ev(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jQ:function(a,b,c,d,e,f){return this.jR(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
az:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cF()
return!0},
cE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cD()
return!0},
k5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
this.D()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
sjp:function(a){this.c=H.k(a,"$ib",[F.ai],"$ab")}}
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
P:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.P(this.b,b)
C.a.P(this.c,new F.jm(this,b))
C.a.P(this.d,new F.jn(this,b))},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shv:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
shw:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
shx:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jm.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jn.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
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
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shH:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")},
shI:function(a){this.c=H.k(a,"$ib",[F.bn],"$ab")}}
F.jq.prototype={}
F.jp.prototype={
bd:function(a,b,c){return J.U(b.f,c.f)}}
F.jr.prototype={}
F.i0.prototype={
be:function(a){var u,t,s,r
H.k(a,"$ib",[F.ai],"$ab")
u=V.d2()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.H(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].seT(u)
return}}
F.js.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
scn:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
O.dW.prototype={
gv:function(){var u=this.dy
if(u==null){u=D.V()
this.dy=u}return u},
a2:function(a){var u
H.f(a,"$iz")
u=this.dy
if(u!=null)u.J(a)},
c3:function(){return this.a2(null)},
dV:function(a){H.f(a,"$iz")
this.a=null
this.a2(a)},
iU:function(){return this.dV(null)},
hV:function(a,b){var u=V.al
u=new D.c0(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a2(u)},
hX:function(a,b){var u=V.al
u=new D.c1(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a2(u)},
dD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a2=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bv()
if(a0){b=$.bu()
a7=new Z.bd(a7.a|b.a)}if(a1){b=$.bt()
a7=new Z.bd(a7.a|b.a)}if(a2){b=$.bw()
a7=new Z.bd(a7.a|b.a)}if(a3){b=$.bx()
a7=new Z.bd(a7.a|b.a)}if(a5){b=$.bs()
a7=new Z.bd(a7.a|b.a)}return new A.hJ(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a0:function(a,b){H.k(a,"$ib",[T.cR],"$ab")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
aq:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
t.toString
s=$.hM
if(s==null){s=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hM=s}t.a=s
s=t.b
if(s!=null)t.a=s.ar(0,b,t)}},
l8:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dD()
t=a4.fr.j(0,u.ao)
if(t==null){t=A.o_(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.bu(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bz
u=a5.e
if(!(u instanceof Z.dw)){a5.e=null
u=null}if(u==null||!u.d.A(0,q)){u=r.r1
if(u)a5.d.az()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cE()
o.a.cE()
o=o.e
if(o!=null)o.ak(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.k5()
n=n.e
if(n!=null)n.ak(0)}l=a5.d.k0(new Z.jx(a4.a),q)
l.b_($.bv()).e=this.a.Q.c
if(u)l.b_($.bu()).e=this.a.cx.c
if(p)l.b_($.bt()).e=this.a.ch.c
if(r.rx)l.b_($.bw()).e=this.a.cy.c
if(o)l.b_($.bx()).e=this.a.db.c
if(r.x1)l.b_($.bs()).e=this.a.dx.c
a5.e=l}u=T.cR
k=H.d([],[u])
p=this.a
o=a4.a
C.b.fk(o,p.r)
p.x.ks()
if(r.fx){p=this.a
n=a4.dx
n=n.ga5(n)
p=p.dy
p.toString
p.as(n.al(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga5(n)
m=a4.dx
m=n.t(0,m.ga5(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.as(n.al(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gl4()
m=a4.dx
m=n.t(0,m.ga5(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.as(n.al(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.as(C.r.al(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.as(C.r.al(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.as(C.r.al(n,!0))}if(r.aB>0){j=this.e.a.length
p=this.a.k4
C.b.V(p.a,p.d,j)
for(p=[P.q],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.h(m,i)
m=m[i]
n.toString
H.f(m,"$ial")
n=n.r1
if(i>=n.length)return H.h(n,i)
n=n[i]
h=new Float32Array(H.cb(H.k(m.al(0,!0),"$ib",p,"$ab")))
C.b.fi(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.a0(k,this.f.d)
p=this.a
n=this.f.d
p.an(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.a0(k,this.f.e)
p=this.a
n=this.f.e
p.ag(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.a0(k,this.r.d)
p=this.a
n=this.r.d
p.an(p.y1,p.aB,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.a0(k,this.r.e)
p=this.a
n=this.r.e
p.ag(p.y2,p.aB,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.ao
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.a0(k,this.x.d)
p=this.a
n=this.x.d
p.an(p.bz,p.bA,n)
n=this.a
p=this.x.f
n=n.ao
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.a0(k,this.x.e)
p=this.a
n=this.x.e
p.ag(p.el,p.bA,n)
n=this.a
p=this.x.f
n=n.ao
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bB
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
break
case C.i:this.a0(k,this.y.d)
p=this.a
n=this.y.d
p.an(p.em,p.bC,n)
n=this.a
p=this.y.f
n=n.bB
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break
case C.h:this.a0(k,this.y.e)
p=this.a
n=this.y.e
p.ag(p.en,p.bC,n)
n=this.a
p=this.y.f
n=n.bB
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bD
p.toString
m=n.a
g=n.b
n=n.c
C.b.B(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bF
C.b.U(n.a,n.d,g)
break
case C.i:this.a0(k,this.z.d)
p=this.a
n=this.z.d
p.an(p.eo,p.bE,n)
n=this.a
p=this.z.f
n=n.bD
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bF
C.b.U(p.a,p.d,g)
break
case C.h:this.a0(k,this.z.e)
p=this.a
n=this.z.e
p.ag(p.ep,p.bE,n)
n=this.a
p=this.z.f
n=n.bD
n.toString
m=p.a
g=p.b
p=p.c
C.b.B(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bF
C.b.U(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eB
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga5(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cL
if(e>=m.length)return H.h(m,e)
b=m[e]
m=f.fg(c.gbw(c))
g=m.a
a=m.b
a0=m.c
a0=m.C(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.B(a.a,a.d,g,m,a0)
a0=c.gaA(c)
m=b.c
C.b.B(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.eC
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga5(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cM
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbh(c)
g=b.b
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=f.bk(c.gbh(c))
g=b.c
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gaA(c)
g=b.d
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.ge8()
g=b.e
C.b.U(g.a,g.d,m)
m=c.ge9()
g=b.f
C.b.U(g.a,g.d,m)
m=c.gea()
g=b.r
C.b.U(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.eD
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga5(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cN
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbh(c)
g=b.b
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbw(c).lz()
g=b.c
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=f.bk(c.gbh(c))
g=b.d
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gaA(c)
g=b.e
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.glx()
g=b.f
C.b.U(g.a,g.d,m)
m=c.glw()
g=b.r
C.b.U(g.a,g.d,m)
m=c.ge8()
g=b.x
C.b.U(g.a,g.d,m)
m=c.ge9()
g=b.y
C.b.U(g.a,g.d,m)
m=c.gea()
g=b.z
C.b.U(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eE
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga5(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cO
if(e>=g.length)return H.h(g,e)
b=g[e]
g=c.gda()
H.k(k,"$ib",m,"$ab")
if(!C.a.Z(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gbw(c)
a=b.d
C.b.B(a.a,a.d,g.a,g.b,g.c)
g=c.gbU()
a=b.b
C.b.B(a.a,a.d,g.a,g.b,g.c)
g=c.gbR(c)
a=b.c
C.b.B(a.a,a.d,g.a,g.b,g.c)
g=f.fg(c.gbw(c))
a=g.a
a0=g.b
a1=g.c
a1=g.C(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.B(a0.a,a0.d,a,g,a1)
a1=c.gaA(c)
g=b.f
C.b.B(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gda()
g=a1.gcY(a1)
if(!g){g=b.x
C.b.V(g.a,g.d,1)}else{g=b.r
a=a1.gcY(a1)
a0=g.a
g=g.d
if(!a)C.b.V(a0,g,0)
else C.b.V(a0,g,a1.gkD(a1))
g=b.x
C.b.V(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eF
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga5(p)
for(p=this.dx.y,n=p.length,m=[P.q],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cP
if(e>=a.length)return H.h(a,e)
b=a[e]
a=c.d
H.k(k,"$ib",g,"$ab")
if(a!=null)if(!C.a.Z(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.t(0,c.a)
a=c.a
a0=$.cK
if(a0==null){a0=new V.a3(0,0,0)
$.cK=a0}a0=a.bk(a0)
a=b.b
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cK
if(a==null){a=new V.a3(0,0,0)
$.cK=a}a=a2.bk(a)
a0=b.c
C.b.B(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eQ(0)
a0=b.d
h=new Float32Array(H.cb(H.k(new V.dX(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).al(0,!0),"$ib",m,"$ab")))
C.b.fh(a0.a,a0.d,!1,h)
a0=c.c
a=b.e
C.b.B(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.d
a=a0!=null
if(!a||a0.d<6){a=b.r
C.b.V(a.a,a.d,1)}else{a1=b.f
a=!a||a0.d<6
a3=a1.a
a1=a1.d
if(a)C.b.V(a3,a1,0)
else C.b.V(a3,a1,a0.a)
a=b.r
C.b.V(a.a,a.d,0)}a=c.e
a0=b.x
C.b.U(a0.a,a0.d,a)
a=c.f
a0=b.y
C.b.U(a0.a,a0.d,a)
a=c.r
a0=b.z
C.b.U(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eG
C.b.V(p.a,p.d,j)
p=a4.db
f=p.ga5(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cQ
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gda()
H.k(k,"$ib",u,"$ab")
if(!C.a.Z(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gbh(c)
g=b.b
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbw(c)
g=b.c
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbU()
g=b.d
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gbR(c)
g=b.e
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=f.bk(c.gbh(c))
g=b.f
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.gda()
g=m.gcY(m)
if(!g){m=b.x
C.b.V(m.a,m.d,1)}else{g=b.r
a=m.gcY(m)
a0=g.a
g=g.d
if(!a)C.b.V(a0,g,0)
else C.b.V(a0,g,m.gkD(m))
m=b.x
C.b.V(m.a,m.d,0)}m=c.gaA(c)
g=b.y
C.b.B(g.a,g.d,m.a,m.b,m.c)
m=c.glA()
g=b.z
C.b.U(g.a,g.d,m)
m=c.glB()
g=b.Q
C.b.U(g.a,g.d,m)
m=c.ge8()
g=b.ch
C.b.U(g.a,g.d,m)
m=c.ge9()
g=b.cx
C.b.U(g.a,g.d,m)
m=c.gea()
g=b.cy
C.b.U(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.i:this.a0(k,this.Q.d)
u=this.a
p=this.Q.d
u.an(u.eq,u.bG,p)
break
case C.h:this.a0(k,this.Q.e)
u=this.a
p=this.Q.e
u.ag(u.er,u.bG,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga5(p).eQ(0)
a4.Q=p}u=u.id
u.toString
u.as(p.al(0,!0))}if(r.dy){this.a0(k,this.ch)
u=this.a
p=this.ch
u.ag(u.es,u.eu,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bH
u.toString
n=p.a
m=p.b
p=p.c
C.b.B(u.a,u.d,n,m,p)
break
case C.i:this.a0(k,this.cx.d)
u=this.a
p=this.cx.d
u.an(u.ev,u.bI,p)
p=this.a
u=this.cx.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
break
case C.h:this.a0(k,this.cx.e)
u=this.a
p=this.cx.e
u.ag(u.ew,u.bI,p)
p=this.a
u=this.cx.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bK
u.toString
n=p.a
m=p.b
p=p.c
C.b.B(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bJ
C.b.U(p.a,p.d,m)
break
case C.i:this.a0(k,this.cy.d)
u=this.a
p=this.cy.d
u.an(u.ex,u.bL,p)
p=this.a
u=this.cy.f
p=p.bK
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bJ
C.b.U(u.a,u.d,m)
break
case C.h:this.a0(k,this.cy.e)
u=this.a
p=this.cy.e
u.ag(u.ey,u.bL,p)
p=this.a
u=this.cy.f
p=p.bK
p.toString
n=u.a
m=u.b
u=u.c
C.b.B(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bJ
C.b.U(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bM
C.b.U(u.a,u.d,n)
break
case C.i:this.a0(k,this.db.d)
u=this.a
n=this.db.d
u.an(u.ez,u.bN,n)
n=this.a
u=this.db.f
n=n.bM
C.b.U(n.a,n.d,u)
break
case C.h:this.a0(k,this.db.e)
u=this.a
n=this.db.e
u.ag(u.eA,u.bN,n)
n=this.a
u=this.db.f
n=n.bM
C.b.U(n.a,n.d,u)
break}C.b.cK(o,3042)
C.b.k_(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d>=6){u.c=!0
C.b.e2(o,33984+u.a)
C.b.aY(o,34067,u.b)}}u=a5.e
u.cA(a4)
u.b1(a4)
u.ln(a4)
if(p)C.b.kn(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.e2(o,33984+u.a)
C.b.aY(o,34067,null)}}u=this.a
u.toString
C.b.fk(o,null)
u.x.ko()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dD().ao},
shh:function(a){this.e=H.k(a,"$ia5",[V.al],"$aa5")}}
O.hH.prototype={}
O.cB.prototype={
a2:function(a){this.a.a2(H.f(a,"$iz"))},
c3:function(){return this.a2(null)},
aH:function(){},
j0:function(a){},
j1:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gv().O(0,this.gbp())
t=this.e
this.e=a
if(a!=null)a.gv().h(0,this.gbp())
u=new D.J(this.b+".textureCube",t,this.e,this,[T.cS])
u.b=!0
this.a.a2(u)}}}
O.hI.prototype={}
O.b5.prototype={
dX:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.J(this.b+".color",u,a,this,[V.a6])
t.b=!0
this.a.a2(t)}},
aH:function(){this.fN()
this.dX(new V.a6(1,1,1))},
saA:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aH()
u=this.a
u.a=null
u.a2(null)}this.dX(b)}}
O.hK.prototype={
j_:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.J(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.a2(u)}},
aH:function(){this.c0()
this.j_(1)}}
O.hL.prototype={
cs:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.J(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.a2(u)}},
aH:function(){this.c0()
this.cs(100)}}
O.bK.prototype={}
T.cR.prototype={}
T.cS.prototype={
gv:function(){var u=this.e
if(u==null){u=D.V()
this.e=u}return u}}
T.iM.prototype={
aS:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.p
W.ac(u,"load",H.n(new T.iN(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
iV:function(a,b,c){var u,t,s,r
b=V.lF(b,2)
u=V.lF(a.width,2)
t=V.lF(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l7(null,null)
s.width=u
s.height=t
r=H.f(C.q.fs(s,"2d"),"$ibV")
r.imageSmoothingEnabled=!1;(r&&C.D).kq(r,a,0,0,s.width,s.height)
return P.p8(C.D.hB(r,0,0,s.width,s.height))}}}
T.iN.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.iV(this.b,u.c,this.c)
s=u.a
C.b.aY(s,34067,this.d)
C.b.l3(s,37440,this.e?1:0)
C.b.lg(s,this.f,0,6408,6408,5121,t)
C.b.aY(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.kr()}++u.e},
$S:12}
V.bh.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dV.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.ax.prototype={
aL:function(a,b){return!this.fM(0,b)},
i:function(a){return"!["+this.dk(0)+"]"}}
V.ic.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c5(this.a)
t=H.c5(this.b)
return u+".."+t},
$iaz:1}
V.io.prototype={
fS:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.o,P.T])
for(t=new H.cA(a,a.gl(a),0,[H.au(a,"y",0)]);t.E();)u.n(0,t.d,!0)
this.siY(u)},
aL:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.ed(u.ga8(u),0,null)},
siY:function(a){this.a=H.k(a,"$iE",[P.o,P.T],"$aE")},
$iaz:1}
V.cO.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cU(this.a.k(0,b))
r.sa9(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
kv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sjk:function(a){this.c=H.k(a,"$ib",[V.cU],"$ab")}}
V.el.prototype={
i:function(a){var u,t
u=H.lH(this.b,"\n","\\n")
t=H.lH(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cT.prototype={
aM:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siP:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iQ.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cO(this,b)
u.sjk(H.d([],[V.cU]))
u.d=null
this.a.n(0,b,u)}return u},
T:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cT(this,a)
t=P.e
u.siP(new H.aP([t,t]))
this.b.n(0,a,u)}return u},
ff:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.el])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.I(a,o)
m=t.kv(n)
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
p=new V.el(j==null?k.b:j,l,o)}++o}}},
sj9:function(a){this.a=H.k(a,"$iE",[P.e,V.cO],"$aE")},
sjd:function(a){this.b=H.k(a,"$iE",[P.e,V.cT],"$aE")}}
V.cU.prototype={
i:function(a){return this.b.b+": "+this.dk(0)}}
X.dy.prototype={$ibp:1}
X.hg.prototype={
gv:function(){var u=this.x
if(u==null){u=D.V()
this.x=u}return u}}
X.e2.prototype={
gv:function(){var u=this.f
if(u==null){u=D.V()
this.f=u}return u},
aQ:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.J(a)},
hb:function(){return this.aQ(null)},
sb0:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gv().O(0,this.gdq())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gdq())
u=new D.J("mover",t,this.b,this,[U.ae])
u.b=!0
this.aQ(u)}},
$ibp:1,
$idy:1}
X.eg.prototype={}
V.bB.prototype={
bo:function(a){this.b=new P.hj(C.Y)
this.c=null
this.scb(H.d([],[[P.b,W.aE]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aE]))
t=a.split("\n")
for(u=t.length,s=[W.aE],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.I(p)
n=this.b.hm(p,0,p.length)
m=n==null?p:n
C.k.fD(o,H.lH(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaC(this.d),o)}},
f1:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.scb(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bv()
this.c=t}for(t=t.ff(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bQ(t[r])},
scb:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kX.prototype={
$1:function(a){H.f(a,"$iba")
P.lG(C.e.fe(this.a.gkB(),2)+" fps")},
$S:51}
V.fW.prototype={
bQ:function(a){switch(a.a){case"Class":this.R(a.b,"#551")
break
case"Comment":this.R(a.b,"#777")
break
case"Id":this.R(a.b,"#111")
break
case"Num":this.R(a.b,"#191")
break
case"Reserved":this.R(a.b,"#119")
break
case"String":this.R(a.b,"#171")
break
case"Symbol":this.R(a.b,"#616")
break
case"Type":this.R(a.b,"#B11")
break
case"Whitespace":this.R(a.b,"#111")
break}},
bv:function(){var u,t,s,r
u=V.iR()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
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
s=new V.ax()
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
s=new V.ax()
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
s.d=s.a.T("Num")
s=u.k(0,"Float")
s.d=s.a.T("Num")
s=u.k(0,"Sym")
s.d=s.a.T("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.T("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.T("String")
s=u.k(0,"EndComment")
s.d=s.a.T("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.T("Whitespace")
s=u.k(0,"Id")
t=s.a.T("Id")
s.d=t
s=[P.e]
t.aM(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aM(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aM(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hh.prototype={
bQ:function(a){switch(a.a){case"Builtin":this.R(a.b,"#411")
break
case"Comment":this.R(a.b,"#777")
break
case"Id":this.R(a.b,"#111")
break
case"Num":this.R(a.b,"#191")
break
case"Preprocess":this.R(a.b,"#737")
break
case"Reserved":this.R(a.b,"#119")
break
case"Symbol":this.R(a.b,"#611")
break
case"Type":this.R(a.b,"#171")
break
case"Whitespace":this.R(a.b,"#111")
break}},
bv:function(){var u,t,s,r
u=V.iR()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
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
s=new V.ax()
r=[V.az]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.ax()
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
t.d=t.a.T("Num")
t=u.k(0,"Float")
t.d=t.a.T("Num")
t=u.k(0,"Sym")
t.d=t.a.T("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.T("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.T("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.T("Whitespace")
t=u.k(0,"Id")
s=t.a.T("Id")
t.d=s
t=[P.e]
s.aM(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aM(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aM(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hi.prototype={
bQ:function(a){switch(a.a){case"Attr":this.R(a.b,"#911")
this.R("=","#111")
break
case"Id":this.R(a.b,"#111")
break
case"Other":this.R(a.b,"#111")
break
case"Reserved":this.R(a.b,"#119")
break
case"String":this.R(a.b,"#171")
break
case"Symbol":this.R(a.b,"#616")
break}},
bv:function(){var u,t,s
u=V.iR()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
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
s=new V.ax()
s.sa9(H.d([],[V.az]))
C.a.h(t.a,s)
t=V.x(new H.v('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.T("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.T("String")
t=u.k(0,"Id")
s=t.a.T("Id")
t.d=s
s.aM(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.T("Attr")
s=u.k(0,"Other")
s.d=s.a.T("Other")
return u}}
V.i6.prototype={
f1:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.scb(H.d([],[[P.b,W.aE]]))
this.R(C.a.m(b,"\n"),"#111")},
bQ:function(a){},
bv:function(){return}}
V.ia.prototype={
e3:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mo().gd4().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.e0(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lQ(this.c).h(0,q)
o=W.nO("radio")
o.checked=s
o.name=u
u=W.p
W.ac(o,"change",H.n(new V.ib(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.F(q,o)
n=r.createElement("span")
n.textContent=b
C.G.F(q,n)
J.lQ(this.c).h(0,r.createElement("br"))},
b8:function(a,b,c){return this.e3(a,b,c,!1)},
e0:function(a){var u,t,s,r,q
u=P.mo()
t=P.e
s=P.nW(u.gd4(),t,t)
s.n(0,this.a,a)
r=u.f8(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iR(t,new P.k9([],[]).dc(""),"",q)}}
V.ib.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e0(this.d)}},
$S:12}
V.is.prototype={
fU:function(a,b){var u,t,s,r,q,p,o
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
W.ac(u,"scroll",H.n(new V.iu(s),{func:1,ret:-1,args:[o]}),!1,o)},
e5:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.j4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ff(C.a.kI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.py(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
C.k.F(t,l)}else{k=P.fh(C.J,n,C.m,!1)
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
fq:function(a){var u,t,s,r
u=new V.fW("dart")
u.bo("dart")
t=new V.hh("glsl")
t.bo("glsl")
s=new V.hi("html")
s.bo("html")
r=C.a.kx(H.d([u,t,s],[V.bB]),new V.iv(a))
if(r!=null)return r
u=new V.i6("plain")
u.bo("plain")
return u},
e4:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dl(r).a6(r,"+")){C.a.n(a7,s,C.c.at(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a6(r,"-")){C.a.n(a7,s,C.c.at(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fq(a5)
q.f1(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.fh(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lS(null)
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
for(a3=C.a.gX(r);a3.E();)C.x.F(c,a3.gN(a3))
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
jM:function(a){var u,t,s,r,q,p,o
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
r=C.o.hD(t,-1)
s=H.f((r&&C.n).dM(r,-1),"$ib9").style
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
o=H.f(C.n.dM(r,-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
j4:function(){var u,t,s,r
if(this.b!=null)return
u=V.iR()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.ax()
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
s=new V.ax()
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
s=new V.ax()
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
t=new V.ax()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.ax()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bh())
s=u.k(0,"Other").m(0,"Other")
t=new V.ax()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.T("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.T("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.T("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.T("Link")
s=u.k(0,"Other")
s.d=s.a.T("Other")
this.b=u}}
V.iu.prototype={
$1:function(a){P.mk(C.y,new V.it(this.a))},
$S:12}
V.it.prototype={
$0:function(){var u,t,s
u=C.e.ap(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.iv.prototype={
$1:function(a){return H.f(a,"$ibB").a===this.a},
$S:52}
T.kO.prototype={
$0:function(){this.a.sae(0,F.lB(1,null,null,1))},
$S:0}
T.kP.prototype={
$0:function(){this.a.sae(0,F.mS(1,!0,!0,1,40,1))},
$S:0}
T.kQ.prototype={
$0:function(){this.a.sae(0,F.mS(1,!0,!1,1,40,0))},
$S:0}
T.kR.prototype={
$0:function(){this.a.sae(0,F.n3(6,null,1,6))},
$S:0}
T.kS.prototype={
$0:function(){this.a.sae(0,F.n5(30,1,15,0.5))},
$S:0}
T.kT.prototype={
$0:function(){this.a.sae(0,F.pp(120,1,2,12,0.3,3))},
$S:0}
T.kU.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.e4("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.e4("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fJ=u.i
u=J.dO.prototype
u.fL=u.i
u=P.i.prototype
u.fK=u.bV
u=W.W.prototype
u.c_=u.ah
u=W.f_.prototype
u.fO=u.ax
u=O.cB.prototype
u.fN=u.aH
u=O.b5.prototype
u.c0=u.aH
u=V.dV.prototype
u.fM=u.aL
u.dk=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p2","ow",11)
u(P,"p3","ox",11)
u(P,"p4","oy",11)
t(P,"mR","p1",3)
s(W,"pi",4,null,["$4"],["oA"],20,0)
s(W,"pj",4,null,["$4"],["oB"],20,0)
var m
r(m=E.ap.prototype,"geY",0,0,null,["$1","$0"],["eZ","kU"],1,0)
r(m,"gf_",0,0,null,["$1","$0"],["f0","kV"],1,0)
r(m,"geW",0,0,null,["$1","$0"],["eX","kT"],1,0)
r(m,"geU",0,0,null,["$1","$0"],["eV","kQ"],1,0)
q(m,"gkO","kP",10)
q(m,"gkR","kS",10)
r(m=E.ek.prototype,"gdl",0,0,null,["$1","$0"],["dn","dm"],1,0)
p(m,"gla","f9",3)
o(m=X.er.prototype,"gi9","ia",14)
o(m,"ghY","hZ",14)
o(m,"gi3","i4",4)
o(m,"gie","ig",27)
o(m,"gib","ic",27)
o(m,"gij","ik",4)
o(m,"gio","ip",4)
o(m,"gi7","i8",4)
o(m,"gil","im",4)
o(m,"gi5","i6",4)
o(m,"giq","ir",37)
o(m,"gis","it",14)
o(m,"giF","iG",13)
o(m,"giB","iC",13)
o(m,"giD","iE",13)
r(m=D.dR.prototype,"gdQ",0,0,null,["$1","$0"],["dR","ih"],1,0)
o(m,"giv","iw",39)
q(m,"ghS","hT",16)
q(m,"giz","iA",16)
r(D.bL.prototype,"gc2",0,0,null,["$1","$0"],["ab","h_"],1,0)
n(V.X.prototype,"gl","cW",32)
n(V.L.prototype,"gl","cW",32)
r(m=U.cx.prototype,"gaT",0,0,null,["$1","$0"],["K","aa"],1,0)
q(m,"gh5","h6",30)
q(m,"gix","iy",30)
r(m=U.es.prototype,"gaT",0,0,null,["$1","$0"],["K","aa"],1,0)
o(m,"gce","cf",2)
o(m,"gcg","ci",2)
o(m,"gcj","ck",2)
r(m=U.et.prototype,"gaT",0,0,null,["$1","$0"],["K","aa"],1,0)
o(m,"gce","cf",2)
o(m,"gcg","ci",2)
o(m,"gcj","ck",2)
o(m,"ghK","hL",2)
o(m,"ghM","hN",2)
o(m,"gji","jj",2)
o(m,"gjg","jh",2)
o(m,"gje","jf",2)
o(U.eu.prototype,"ghP","hQ",2)
r(m=M.dF.prototype,"gau",0,0,null,["$1","$0"],["aE","h7"],1,0)
q(m,"gi_","i0",10)
q(m,"gi1","i2",10)
r(m=O.dW.prototype,"gbp",0,0,null,["$1","$0"],["a2","c3"],1,0)
r(m,"giT",0,0,null,["$1","$0"],["dV","iU"],1,0)
q(m,"ghU","hV",19)
q(m,"ghW","hX",19)
r(O.cB.prototype,"gbp",0,0,null,["$1","$0"],["a2","c3"],1,0)
r(X.e2.prototype,"gdq",0,0,null,["$1","$0"],["aQ","hb"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.lf,J.a,J.aw,P.eN,P.i,H.cA,P.b2,H.bZ,H.d1,H.fP,H.id,H.iW,P.bD,H.cp,H.f4,P.ag,H.hu,H.hw,H.hp,P.fa,P.bf,P.aJ,P.ex,P.iD,P.cP,P.iE,P.ba,P.an,P.kq,P.k3,P.c9,P.eM,P.y,P.kh,P.hC,P.bW,P.hk,P.ko,P.km,P.T,P.ao,P.a4,P.b1,P.i4,P.ec,P.eF,P.hf,P.bE,P.b,P.E,P.N,P.ay,P.e,P.am,P.ca,P.jb,P.k6,W.fS,W.bO,W.D,W.e0,W.f_,W.kc,W.dG,W.aB,W.k2,W.fi,P.k8,P.ff,P.jY,P.S,O.a5,O.cC,E.fI,E.ap,E.ie,E.ek,Z.ew,Z.jx,Z.dw,Z.bF,Z.bd,D.fL,D.bY,D.z,X.dx,X.dP,X.hr,X.hz,X.aA,X.hT,X.iS,X.er,D.dB,D.a8,D.e3,D.eb,D.ei,D.bL,D.ej,V.a6,V.aM,V.h5,V.dX,V.al,V.aa,V.a3,V.b8,V.e7,V.X,V.L,U.es,U.et,U.eu,M.dF,A.dt,A.fB,A.hJ,A.cV,A.cZ,A.cX,A.d_,A.cY,A.d0,A.bX,A.en,A.j5,F.a9,F.h9,F.bn,F.ht,F.bI,F.ea,F.ip,F.iq,F.ir,F.ai,F.jk,F.jl,F.jo,F.jq,F.jr,F.js,O.bK,O.cB,T.iM,V.bh,V.az,V.dV,V.ic,V.io,V.cO,V.el,V.cT,V.iQ,X.dy,X.eg,X.e2,V.bB,V.ia,V.is])
s(J.a,[J.ho,J.dN,J.dO,J.aO,J.bG,J.bl,H.cG,H.bH,W.j,W.fz,W.bT,W.bV,W.b_,W.b0,W.Z,W.ez,W.fX,W.fY,W.dC,W.eB,W.dE,W.eD,W.h_,W.p,W.eG,W.aN,W.dJ,W.eI,W.bk,W.dT,W.hN,W.eO,W.eP,W.aQ,W.eQ,W.eT,W.aR,W.eX,W.e5,W.eZ,W.aT,W.f0,W.aU,W.f5,W.aG,W.f8,W.iP,W.aW,W.fb,W.iU,W.jg,W.fj,W.fl,W.fn,W.fp,W.fr,P.b4,P.eK,P.b7,P.eV,P.i9,P.f6,P.bb,P.fd,P.fC,P.ey,P.du,P.dH,P.e4,P.c7,P.e9,P.eh,P.eo,P.f2])
s(J.dO,[J.i5,J.bN,J.bm])
t(J.le,J.aO)
s(J.bG,[J.dM,J.dL])
t(P.hy,P.eN)
s(P.hy,[H.ep,W.jE,W.as,P.hb])
t(H.v,H.ep)
s(P.i,[H.h2,H.hD,H.d3])
s(H.h2,[H.c2,H.hv])
s(P.b2,[H.hE,H.jy])
t(H.hF,H.c2)
t(H.fQ,H.fP)
s(P.bD,[H.i1,H.hq,H.j9,H.iY,H.fK,H.il,P.e1,P.aL,P.ja,P.j7,P.c8,P.fN,P.fV])
s(H.cp,[H.l0,H.iJ,H.kI,H.kJ,H.kK,P.jA,P.jz,P.jB,P.jC,P.kg,P.kf,P.jL,P.jP,P.jM,P.jN,P.jO,P.jS,P.jT,P.jR,P.jQ,P.iF,P.iG,P.ky,P.k0,P.k_,P.k1,P.hx,P.hB,P.kn,P.h0,P.h1,P.jf,P.jc,P.jd,P.je,P.ki,P.kj,P.kl,P.kk,P.ku,P.kt,P.kv,P.kw,W.h3,W.hP,W.hR,W.ik,W.iC,W.jK,W.i_,W.hZ,W.k4,W.k5,W.ke,W.kp,P.ka,P.kA,P.hc,P.hd,P.fE,E.ig,E.ih,E.ii,E.iO,D.h7,D.h8,F.kr,F.kB,F.kD,F.kE,F.kF,F.kY,F.kZ,F.l_,F.kM,F.kC,F.ju,F.jt,F.jm,F.jn,T.iN,V.kX,V.ib,V.iu,V.it,V.iv,T.kO,T.kP,T.kQ,T.kR,T.kS,T.kT,T.kU])
s(H.iJ,[H.iA,H.cn])
t(P.hA,P.ag)
s(P.hA,[H.aP,W.jD])
t(H.dY,H.bH)
s(H.dY,[H.d7,H.d9])
t(H.d8,H.d7)
t(H.cH,H.d8)
t(H.da,H.d9)
t(H.dZ,H.da)
s(H.dZ,[H.hU,H.hV,H.hW,H.hX,H.hY,H.e_,H.cI])
t(P.jZ,P.kq)
t(P.jX,P.k3)
t(P.fg,P.hC)
t(P.eq,P.fg)
s(P.bW,[P.fG,P.h4])
t(P.bC,P.iE)
s(P.bC,[P.fH,P.hj,P.jj,P.ji])
t(P.jh,P.h4)
s(P.a4,[P.q,P.o])
s(P.aL,[P.c6,P.hl])
t(P.jG,P.ca)
s(W.j,[W.G,W.ha,W.aS,W.db,W.aV,W.aH,W.dd,W.jw,W.d4,P.fF,P.bS])
s(W.G,[W.W,W.bA,W.cs,W.d5])
s(W.W,[W.A,P.r])
s(W.A,[W.dr,W.fA,W.cm,W.bz,W.bU,W.aE,W.he,W.dI,W.cy,W.cz,W.dQ,W.cE,W.im,W.b9,W.ee,W.ef,W.iI,W.cQ])
s(W.b_,[W.cq,W.fT,W.fU])
t(W.fR,W.b0)
t(W.cr,W.ez)
t(W.eC,W.eB)
t(W.dD,W.eC)
t(W.eE,W.eD)
t(W.fZ,W.eE)
t(W.aF,W.bT)
t(W.eH,W.eG)
t(W.cv,W.eH)
t(W.eJ,W.eI)
t(W.c_,W.eJ)
t(W.dK,W.cs)
t(W.bM,W.p)
s(W.bM,[W.b3,W.ah,W.aX])
t(W.hO,W.eO)
t(W.hQ,W.eP)
t(W.eR,W.eQ)
t(W.hS,W.eR)
t(W.eU,W.eT)
t(W.cJ,W.eU)
t(W.eY,W.eX)
t(W.i7,W.eY)
t(W.ij,W.eZ)
t(W.dc,W.db)
t(W.ix,W.dc)
t(W.f1,W.f0)
t(W.iy,W.f1)
t(W.iB,W.f5)
t(W.f9,W.f8)
t(W.iK,W.f9)
t(W.de,W.dd)
t(W.iL,W.de)
t(W.fc,W.fb)
t(W.iT,W.fc)
t(W.jv,W.cE)
t(W.be,W.ah)
t(W.fk,W.fj)
t(W.jF,W.fk)
t(W.eA,W.dE)
t(W.fm,W.fl)
t(W.jU,W.fm)
t(W.fo,W.fn)
t(W.eS,W.fo)
t(W.fq,W.fp)
t(W.k7,W.fq)
t(W.fs,W.fr)
t(W.kb,W.fs)
t(W.jH,W.jD)
t(W.jI,P.iD)
t(W.lq,W.jI)
t(W.jJ,P.cP)
t(W.kd,W.f_)
t(P.k9,P.k8)
t(P.ab,P.jY)
t(P.eL,P.eK)
t(P.hs,P.eL)
t(P.eW,P.eV)
t(P.i2,P.eW)
t(P.cM,P.r)
t(P.f7,P.f6)
t(P.iH,P.f7)
t(P.fe,P.fd)
t(P.iV,P.fe)
t(P.fD,P.ey)
t(P.i3,P.bS)
t(P.f3,P.f2)
t(P.iz,P.f3)
s(E.fI,[Z.dv,A.cN,T.cR])
s(D.z,[D.c0,D.c1,D.J,X.i8])
s(X.i8,[X.dU,X.bo,X.cF,X.em])
s(O.a5,[D.dR,U.cx])
s(D.fL,[U.fM,U.ae])
s(U.ae,[U.dz,U.e8])
t(A.hG,A.cN)
s(A.en,[A.P,A.j1,A.j2,A.j4,A.j_,A.a2,A.j0,A.O,A.j3,A.j6,A.cW,A.aC,A.aq,A.ar])
t(F.iw,F.h9)
t(F.iZ,F.ht)
t(F.jp,F.jq)
t(F.i0,F.jr)
t(O.dW,O.bK)
s(O.cB,[O.hH,O.hI,O.b5])
s(O.b5,[O.hK,O.hL])
t(T.cS,T.cR)
s(V.dV,[V.ax,V.cU])
t(X.hg,X.eg)
s(V.bB,[V.fW,V.hh,V.hi,V.i6])
u(H.ep,H.d1)
u(H.d7,P.y)
u(H.d8,H.bZ)
u(H.d9,P.y)
u(H.da,H.bZ)
u(P.eN,P.y)
u(P.fg,P.kh)
u(W.ez,W.fS)
u(W.eB,P.y)
u(W.eC,W.D)
u(W.eD,P.y)
u(W.eE,W.D)
u(W.eG,P.y)
u(W.eH,W.D)
u(W.eI,P.y)
u(W.eJ,W.D)
u(W.eO,P.ag)
u(W.eP,P.ag)
u(W.eQ,P.y)
u(W.eR,W.D)
u(W.eT,P.y)
u(W.eU,W.D)
u(W.eX,P.y)
u(W.eY,W.D)
u(W.eZ,P.ag)
u(W.db,P.y)
u(W.dc,W.D)
u(W.f0,P.y)
u(W.f1,W.D)
u(W.f5,P.ag)
u(W.f8,P.y)
u(W.f9,W.D)
u(W.dd,P.y)
u(W.de,W.D)
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
u(P.ey,P.ag)
u(P.f2,P.y)
u(P.f3,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bz.prototype
C.q=W.bU.prototype
C.D=W.bV.prototype
C.k=W.aE.prototype
C.U=W.dC.prototype
C.W=W.dI.prototype
C.X=W.dJ.prototype
C.z=W.dK.prototype
C.Z=J.a.prototype
C.a=J.aO.prototype
C.a_=J.dL.prototype
C.f=J.dM.prototype
C.r=J.dN.prototype
C.e=J.bG.prototype
C.c=J.bl.prototype
C.a6=J.bm.prototype
C.G=W.dQ.prototype
C.ac=W.cJ.prototype
C.M=J.i5.prototype
C.N=W.e5.prototype
C.b=P.c7.prototype
C.x=W.b9.prototype
C.o=W.ee.prototype
C.n=W.ef.prototype
C.C=J.bN.prototype
C.O=W.be.prototype
C.P=W.d4.prototype
C.R=new P.fH(!1)
C.Q=new P.fG(C.R)
C.S=new P.i4()
C.T=new P.jj()
C.l=new P.jZ()
C.d=new A.bX(0,"ColorSourceType.None")
C.j=new A.bX(1,"ColorSourceType.Solid")
C.i=new A.bX(2,"ColorSourceType.Texture2D")
C.h=new A.bX(3,"ColorSourceType.TextureCube")
C.y=new P.b1(0)
C.V=new P.b1(5e6)
C.Y=new P.hk("element",!0,!1,!1,!1)
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
C.ab=new H.fQ(0,{},C.I,[P.e,P.e])
C.m=new P.jh(!1)})();(function staticFields(){$.aZ=0
$.co=null
$.lU=null
$.lu=!1
$.mX=null
$.mP=null
$.n2=null
$.kG=null
$.kL=null
$.lD=null
$.cc=null
$.di=null
$.dj=null
$.lv=!1
$.a1=C.l
$.bj=null
$.la=null
$.m_=null
$.lZ=null
$.hM=null
$.mb=null
$.cK=null
$.mf=null
$.mr=null
$.mw=null
$.mt=null
$.mu=null
$.mv=null
$.ms=null
$.ma=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pE","n7",function(){return H.mW("_$dart_dartClosure")})
u($,"pF","lJ",function(){return H.mW("_$dart_js")})
u($,"pL","n8",function(){return H.bc(H.iX({
toString:function(){return"$receiver$"}}))})
u($,"pM","n9",function(){return H.bc(H.iX({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pN","na",function(){return H.bc(H.iX(null))})
u($,"pO","nb",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pR","ne",function(){return H.bc(H.iX(void 0))})
u($,"pS","nf",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pQ","nd",function(){return H.bc(H.mm(null))})
u($,"pP","nc",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pU","nh",function(){return H.bc(H.mm(void 0))})
u($,"pT","ng",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qa","lK",function(){return P.ov()})
u($,"qg","dp",function(){return[]})
u($,"pX","ni",function(){return P.os()})
u($,"qb","nm",function(){return H.o0(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qe","no",function(){return P.og("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qf","np",function(){return P.oU()})
u($,"qc","nn",function(){return P.m1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"qd","lL",function(){return P.lh(P.e,P.bE)})
u($,"q3","nl",function(){return Z.aI(0)})
u($,"pY","nj",function(){return Z.aI(511)})
u($,"q5","bv",function(){return Z.aI(1)})
u($,"q4","bu",function(){return Z.aI(2)})
u($,"q_","bt",function(){return Z.aI(4)})
u($,"q6","bw",function(){return Z.aI(8)})
u($,"q7","bx",function(){return Z.aI(16)})
u($,"q0","dm",function(){return Z.aI(32)})
u($,"q1","dn",function(){return Z.aI(64)})
u($,"q2","nk",function(){return Z.aI(96)})
u($,"q8","cl",function(){return Z.aI(128)})
u($,"pZ","bs",function(){return Z.aI(256)})
u($,"pD","n6",function(){return new V.h5(1e-9)})
u($,"pC","K",function(){return $.n6()})})()
var v={mangledGlobalNames:{o:"int",q:"double",a4:"num",e:"String",T:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.N,args:[D.z]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.ai,P.q,P.q]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ap]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.al]]},{func:1,ret:P.T,args:[W.W,P.e,P.e,W.bO]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.T,args:[W.aB]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:V.a3,args:[P.q]},{func:1,ret:-1,args:[P.o,[P.i,U.ae]]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.q},{func:1,ret:W.W,args:[W.G]},{func:1,args:[W.p]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.N,args:[P.e,,]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.N,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.ay]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.N,args:[P.ba]},{func:1,ret:P.T,args:[V.bB]},{func:1,args:[,P.e]},{func:1,ret:P.N,args:[P.a4]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cG,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cH,Float64Array:H.cH,Int16Array:H.hU,Int32Array:H.hV,Int8Array:H.hW,Uint16Array:H.hX,Uint32Array:H.hY,Uint8ClampedArray:H.e_,CanvasPixelArray:H.e_,Uint8Array:H.cI,HTMLBRElement:W.A,HTMLButtonElement:W.A,HTMLContentElement:W.A,HTMLDListElement:W.A,HTMLDataElement:W.A,HTMLDataListElement:W.A,HTMLDetailsElement:W.A,HTMLDialogElement:W.A,HTMLEmbedElement:W.A,HTMLFieldSetElement:W.A,HTMLHRElement:W.A,HTMLHeadingElement:W.A,HTMLHtmlElement:W.A,HTMLIFrameElement:W.A,HTMLLIElement:W.A,HTMLLegendElement:W.A,HTMLLinkElement:W.A,HTMLMapElement:W.A,HTMLMenuElement:W.A,HTMLMetaElement:W.A,HTMLMeterElement:W.A,HTMLModElement:W.A,HTMLOListElement:W.A,HTMLObjectElement:W.A,HTMLOptGroupElement:W.A,HTMLOptionElement:W.A,HTMLOutputElement:W.A,HTMLParagraphElement:W.A,HTMLParamElement:W.A,HTMLPictureElement:W.A,HTMLPreElement:W.A,HTMLProgressElement:W.A,HTMLQuoteElement:W.A,HTMLScriptElement:W.A,HTMLShadowElement:W.A,HTMLSlotElement:W.A,HTMLSourceElement:W.A,HTMLSpanElement:W.A,HTMLStyleElement:W.A,HTMLTableCaptionElement:W.A,HTMLTableColElement:W.A,HTMLTextAreaElement:W.A,HTMLTimeElement:W.A,HTMLTitleElement:W.A,HTMLTrackElement:W.A,HTMLUListElement:W.A,HTMLUnknownElement:W.A,HTMLDirectoryElement:W.A,HTMLFontElement:W.A,HTMLFrameElement:W.A,HTMLFrameSetElement:W.A,HTMLMarqueeElement:W.A,HTMLElement:W.A,AccessibleNodeList:W.fz,HTMLAnchorElement:W.dr,HTMLAreaElement:W.fA,HTMLBaseElement:W.cm,Blob:W.bT,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.bV,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fR,CSSCharsetRule:W.Z,CSSConditionRule:W.Z,CSSFontFaceRule:W.Z,CSSGroupingRule:W.Z,CSSImportRule:W.Z,CSSKeyframeRule:W.Z,MozCSSKeyframeRule:W.Z,WebKitCSSKeyframeRule:W.Z,CSSKeyframesRule:W.Z,MozCSSKeyframesRule:W.Z,WebKitCSSKeyframesRule:W.Z,CSSMediaRule:W.Z,CSSNamespaceRule:W.Z,CSSPageRule:W.Z,CSSRule:W.Z,CSSStyleRule:W.Z,CSSSupportsRule:W.Z,CSSViewportRule:W.Z,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fT,CSSUnparsedValue:W.fU,DataTransferItemList:W.fX,HTMLDivElement:W.aE,XMLDocument:W.cs,Document:W.cs,DOMException:W.fY,DOMImplementation:W.dC,ClientRectList:W.dD,DOMRectList:W.dD,DOMRectReadOnly:W.dE,DOMStringList:W.fZ,DOMTokenList:W.h_,Element:W.W,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cv,FileWriter:W.ha,HTMLFormElement:W.he,Gamepad:W.aN,HTMLHeadElement:W.dI,History:W.dJ,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,HTMLDocument:W.dK,ImageData:W.bk,HTMLImageElement:W.cy,HTMLInputElement:W.cz,KeyboardEvent:W.b3,HTMLLabelElement:W.dQ,Location:W.dT,HTMLAudioElement:W.cE,HTMLMediaElement:W.cE,MediaList:W.hN,MIDIInputMap:W.hO,MIDIOutputMap:W.hQ,MimeType:W.aQ,MimeTypeArray:W.hS,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,DocumentFragment:W.G,ShadowRoot:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cJ,RadioNodeList:W.cJ,Plugin:W.aR,PluginArray:W.i7,Range:W.e5,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aS,SourceBufferList:W.ix,SpeechGrammar:W.aT,SpeechGrammarList:W.iy,SpeechRecognitionResult:W.aU,Storage:W.iB,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.ee,HTMLTableRowElement:W.ef,HTMLTableSectionElement:W.iI,HTMLTemplateElement:W.cQ,TextTrack:W.aV,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iK,TextTrackList:W.iL,TimeRanges:W.iP,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iT,TrackDefaultList:W.iU,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.jg,HTMLVideoElement:W.jv,VideoTrackList:W.jw,WheelEvent:W.be,Window:W.d4,DOMWindow:W.d4,Attr:W.d5,CSSRuleList:W.jF,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.jU,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.k7,StyleSheetList:W.kb,SVGLength:P.b4,SVGLengthList:P.hs,SVGNumber:P.b7,SVGNumberList:P.i2,SVGPointList:P.i9,SVGScriptElement:P.cM,SVGStringList:P.iH,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGTransform:P.bb,SVGTransformList:P.iV,AudioBuffer:P.fC,AudioParamMap:P.fD,AudioTrackList:P.fF,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.i3,WebGLBuffer:P.du,WebGLFramebuffer:P.dH,WebGLProgram:P.e4,WebGL2RenderingContext:P.c7,WebGLShader:P.e9,WebGLTexture:P.eh,WebGLUniformLocation:P.eo,SQLResultSetRowList:P.iz})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.n_,[])
else T.n_([])})})()
//# sourceMappingURL=test.dart.js.map
