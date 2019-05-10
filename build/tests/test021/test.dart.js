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
a[c]=function(){a[c]=function(){H.pm(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ls"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ls"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ls(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l6:function l6(a){this.a=a},
kz:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hg:function(){return new P.c9("No element")},
nJ:function(){return new P.c9("Too many elements")},
nI:function(){return new P.c9("Too few elements")},
v:function v(a){this.a=a},
fX:function fX(){},
c2:function c2(){},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
cX:function cX(){},
ek:function ek(){},
nz:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cl:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
p4:function(a){return v.types[H.aj(a)]},
pb:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.ay(a))
return u},
o5:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hh(u)
t=u[0]
s=u[1]
return new H.i7(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o2:function(a,b){var u,t,s,r,q,p
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
for(q=r.length,p=0;p<q;++p)if((C.b.I(r,p)|32)>s)return}return parseInt(a,b)},
c5:function(a){return H.nU(a)+H.lo(H.bS(a),0,null)},
nU:function(a){var u,t,s,r,q,p,o,n,m
u=J.Z(a)
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
return H.cl(r.length>1&&C.b.I(r,0)===36?C.b.au(r,1):r)},
nV:function(){if(!!self.location)return self.location.href
return},
m4:function(a){var u,t,s,r,q
H.kF(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o3:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ay(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aW(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ay(r))}return H.m4(u)},
m5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ay(s))
if(s<0)throw H.c(H.ay(s))
if(s>65535)return H.o3(a)}return H.m4(a)},
o4:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.ae(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o1:function(a){var u=H.c4(a).getFullYear()+0
return u},
o_:function(a){var u=H.c4(a).getMonth()+1
return u},
nW:function(a){var u=H.c4(a).getDate()+0
return u},
nX:function(a){var u=H.c4(a).getHours()+0
return u},
nZ:function(a){var u=H.c4(a).getMinutes()+0
return u},
o0:function(a){var u=H.c4(a).getSeconds()+0
return u},
nY:function(a){var u=H.c4(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.ay(a))},
h:function(a,b){if(a==null)J.aE(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
u=H.aj(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,"index",null,u)
return P.e0(b,"index",null)},
oY:function(a,b,c){if(a>c)return new P.c7(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
ay:function(a){return new P.aM(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mX})
u.name=""}else u.toString=H.mX
return u},
mX:function(){return J.au(this.dartException)},
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
return new H.iP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
me:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m_:function(a,b){return new H.hW(a,b==null?null:b.method)},
l7:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hl(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aW(s,16)&8191)===10)switch(r){case 438:return u.$1(H.l7(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m_(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.n0()
p=$.n1()
o=$.n2()
n=$.n3()
m=$.n6()
l=$.n7()
k=$.n5()
$.n4()
j=$.n9()
i=$.n8()
h=q.ai(t)
if(h!=null)return u.$1(H.l7(H.H(t),h))
else{h=p.ai(t)
if(h!=null){h.method="call"
return u.$1(H.l7(H.H(t),h))}else{h=o.ai(t)
if(h==null){h=n.ai(t)
if(h==null){h=m.ai(t)
if(h==null){h=l.ai(t)
if(h==null){h=k.ai(t)
if(h==null){h=n.ai(t)
if(h==null){h=j.ai(t)
if(h==null){h=i.ai(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m_(H.H(t),h))}}return u.$1(new H.j2(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e6()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aM(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e6()
return a},
cj:function(a){var u
if(a==null)return new H.f_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f_(a)},
p0:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pa:function(a,b,c,d,e,f){H.f(a,"$ibE")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pa)
a.$identity=u
return u},
ny:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Z(d).$ib){u.$reflectionInfo=d
s=H.o5(u).r}else s=d
r=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b_
if(typeof p!=="number")return p.p()
$.b_=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lN(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.p4,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lL:H.kZ
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lN(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nv:function(a,b,c,d){var u=H.kZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lN:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nv(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cp
if(q==null){q=H.fE("self")
$.cp=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cp
if(q==null){q=H.fE("self")
$.cp=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nw:function(a,b,c,d){var u,t
u=H.kZ
t=H.lL
switch(b?-1:a){case 0:throw H.c(H.o9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nx:function(a,b){var u,t,s,r,q,p,o,n
u=$.cp
if(u==null){u=H.fE("self")
$.cp=u}t=$.lK
if(t==null){t=H.fE("receiver")
$.lK=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nw(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b_
if(typeof t!=="number")return t.p()
$.b_=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b_
if(typeof t!=="number")return t.p()
$.b_=t+1
return new Function(u+t+"}")()},
ls:function(a,b,c,d,e,f,g){return H.ny(a,b,H.aj(c),d,!!e,!!f,g)},
kZ:function(a){return a.a},
lL:function(a){return a.c},
fE:function(a){var u,t,s,r,q
u=new H.co("self","target","receiver","name")
t=J.hh(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
oZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
pg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
mU:function(a,b){throw H.c(H.aZ(a,H.cl(H.H(b).substring(2))))},
pi:function(a,b){throw H.c(H.nu(a,H.cl(H.H(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.mU(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.pi(a,b)},
kF:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
mR:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.mU(a,b)},
mN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
fn:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mN(J.Z(a))
if(u==null)return!1
return H.mA(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ll)return a
$.ll=!0
try{if(H.fn(a,b))return a
u=H.kO(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.ll=!1}},
lu:function(a,b){if(a!=null&&!H.lr(a,b))H.t(H.aZ(a,H.kO(b)))
return a},
aZ:function(a,b){return new H.iR("TypeError: "+P.h0(a)+": type '"+H.mF(a)+"' is not a subtype of type '"+b+"'")},
nu:function(a,b){return new H.fF("CastError: "+P.h0(a)+": type '"+H.mF(a)+"' is not a subtype of type '"+b+"'")},
mF:function(a){var u,t
u=J.Z(a)
if(!!u.$icq){t=H.mN(u)
if(t!=null)return H.kO(t)
return"Closure"}return H.c5(a)},
pm:function(a){throw H.c(new P.fP(H.H(a)))},
o9:function(a){return new H.ie(a)},
mO:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
q5:function(a,b,c){return H.ck(a["$a"+H.m(c)],H.bS(b))},
bR:function(a,b,c,d){var u
H.H(c)
H.aj(d)
u=H.ck(a["$a"+H.m(c)],H.bS(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.H(b)
H.aj(c)
u=H.ck(a["$a"+H.m(b)],H.bS(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.aj(b)
u=H.bS(a)
return u==null?null:u[b]},
kO:function(a){return H.bQ(a,null)},
bQ:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.lo(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
o=C.b.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bQ(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bQ(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bQ(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bQ(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.p_(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bQ(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lo:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bQ(p,c)}return"<"+u.i(0)+">"},
ck:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
df:function(a,b,c,d){var u,t
H.H(b)
H.kF(c)
H.H(d)
if(a==null)return!1
u=H.bS(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.mI(H.ck(t[d],u),null,c,null)},
k:function(a,b,c,d){H.H(b)
H.kF(c)
H.H(d)
if(a==null)return a
if(H.df(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cl(b.substring(2))+H.lo(c,0,null),v.mangledGlobalNames)))},
mI:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
q3:function(a,b,c){return a.apply(b,H.ck(J.Z(b)["$a"+H.m(c)],H.bS(b)))},
mQ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="N"||a===-1||a===-2||H.mQ(u)}return!1},
lr:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="N"||b===-1||b===-2||H.mQ(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fn(a,b)}u=J.Z(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lr(a,b))throw H.c(H.aZ(a,H.kO(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mA(a,b,c,d)
if('func' in a)return c.name==="bE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aL("type" in a?a.type:null,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"cx" in t.prototype))return!1
r=t.prototype["$a"+"cx"]
q=H.ck(r,u?a.slice(1):null)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mI(H.ck(m,u),b,p,d)},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aL(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aL(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aL(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aL(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pf(h,b,g,d)},
pf:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aL(c[r],d,a[r],b))return!1}return!0},
q4:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
pd:function(a){var u,t,s,r,q,p
u=H.H($.mP.$1(a))
t=$.ky[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kD[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.mH.$2(a,u))
if(u!=null){t=$.ky[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kD[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kN(s)
$.ky[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kD[u]=s
return s}if(q==="-"){p=H.kN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mT(a,s)
if(q==="*")throw H.c(P.j1(u))
if(v.leafTags[u]===true){p=H.kN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mT(a,s)},
mT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.lw(a,!1,null,!!a.$iM)},
pe:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.lw(u,c,null,null)},
p8:function(){if(!0===$.lv)return
$.lv=!0
H.p9()},
p9:function(){var u,t,s,r,q,p,o,n
$.ky=Object.create(null)
$.kD=Object.create(null)
H.p7()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mV.$1(q)
if(p!=null){o=H.pe(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p7:function(){var u,t,s,r,q,p,o
u=C.a1()
u=H.ce(C.Z,H.ce(C.a3,H.ce(C.D,H.ce(C.D,H.ce(C.a2,H.ce(C.a_,H.ce(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mP=new H.kA(q)
$.mH=new H.kB(p)
$.mV=new H.kC(o)},
ce:function(a,b){return a(b)||b},
nL:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pl:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lx:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fJ:function fJ(){},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i7:function i7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
kT:function kT(a){this.a=a},
f_:function f_(a){this.a=a
this.b=null},
cq:function cq(){},
iD:function iD(){},
iu:function iu(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a){this.a=a},
fF:function fF(a){this.a=a},
ie:function ie(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hq:function hq(a,b){this.a=a
this.$ti=b},
hr:function hr(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
nT:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
oJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oY(a,b,c))
return b},
cE:function cE(){},
bH:function bH(){},
dT:function dT(){},
cF:function cF(){},
dU:function dU(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
dV:function dV(){},
cG:function cG(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
p_:function(a){return J.lR(a?Object.keys(a):[],null)},
ph:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fp:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lv==null){H.p8()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.j1("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lz()]
if(q!=null)return q
q=H.pd(a)
if(q!=null)return q
if(typeof a=="function")return C.a4
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.lz(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ae(a,0,4294967295,"length",null))
return J.lR(new Array(a),b)},
lR:function(a,b){return J.hh(H.d(a,[b]))},
hh:function(a){H.kF(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.hj.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.hi.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fp(a)},
p1:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fp(a)},
ci:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fp(a)},
fo:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fp(a)},
p2:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bO.prototype
return a},
p3:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bO.prototype
return a},
dg:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bO.prototype
return a},
ac:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.R)return a
return J.fp(a)},
ni:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p1(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).w(a,b)},
lC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p3(a).t(a,b)},
nj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p2(a).u(a,b)},
lD:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ci(a).j(a,b)},
kV:function(a,b,c){return J.fo(a).n(a,b,c)},
nk:function(a,b){return J.dg(a).I(a,b)},
fr:function(a,b){return J.ac(a).iE(a,b)},
kW:function(a,b,c){return J.ac(a).iI(a,b,c)},
nl:function(a,b,c,d){return J.ac(a).jA(a,b,c,d)},
lE:function(a,b){return J.ac(a).F(a,b)},
nm:function(a,b){return J.dg(a).a1(a,b)},
fs:function(a,b){return J.fo(a).M(a,b)},
nn:function(a,b,c,d){return J.ac(a).kf(a,b,c,d)},
lF:function(a,b){return J.fo(a).O(a,b)},
no:function(a){return J.ac(a).gjK(a)},
lG:function(a){return J.ac(a).gcC(a)},
dk:function(a){return J.Z(a).gL(a)},
by:function(a){return J.fo(a).gW(a)},
aE:function(a){return J.ci(a).gl(a)},
np:function(a){return J.ac(a).gl_(a)},
kX:function(a,b){return J.ac(a).b2(a,b)},
lH:function(a){return J.fo(a).kP(a)},
nq:function(a,b){return J.ac(a).kU(a,b)},
nr:function(a,b,c){return J.ac(a).fs(a,b,c)},
ns:function(a,b,c){return J.dg(a).v(a,b,c)},
nt:function(a){return J.dg(a).l3(a)},
au:function(a){return J.Z(a).i(a)},
a:function a(){},
hi:function hi(){},
dH:function dH(){},
dI:function dI(){},
i_:function i_(){},
bO:function bO(){},
bm:function bm(){},
aP:function aP(a){this.$ti=a},
l5:function l5(a){this.$ti=a},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bG:function bG(){},
dG:function dG(){},
hj:function hj(){},
bl:function bl(){}},P={
ol:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oT()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cf(new P.js(u),1)).observe(t,{childList:true})
return new P.jr(u,t,s)}else if(self.setImmediate!=null)return P.oU()
return P.oV()},
om:function(a){self.scheduleImmediate(H.cf(new P.jt(H.n(a,{func:1,ret:-1})),0))},
on:function(a){self.setImmediate(H.cf(new P.ju(H.n(a,{func:1,ret:-1})),0))},
oo:function(a){P.lc(C.y,H.n(a,{func:1,ret:-1}))},
lc:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.ou(u<0?0:u,b)},
md:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bb]})
u=C.f.a6(a.a,1000)
return P.ov(u<0?0:u,b)},
ou:function(a,b){var u=new P.f5(!0)
u.h3(a,b)
return u},
ov:function(a,b){var u=new P.f5(!1)
u.h4(a,b)
return u},
op:function(a,b){var u,t,s
b.a=1
try{a.f4(new P.jE(b),new P.jF(b),null)}catch(s){u=H.ak(s)
t=H.cj(s)
P.pj(new P.jG(b,u,t))}},
mp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaK")
if(u>=4){t=b.cm()
b.a=a.a
b.c=a.c
P.d1(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.dN(t)}},
d1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.kp(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d1(u.a,b)}t=u.a
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
if(k){H.f(m,"$iam")
t=t.b
p=m.a
o=m.b
t.toString
P.kp(null,null,t,p,o)
return}j=$.a1
if(j!=l)$.a1=l
else j=null
t=b.c
if(t===8)new P.jK(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jJ(s,b,m).$0()}else if((t&2)!==0)new P.jI(u,s,b).$0()
if(j!=null)$.a1=j
t=s.b
if(!!J.Z(t).$icx){if(t.a>=4){i=H.f(o.c,"$ibg")
o.c=null
b=o.br(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mp(t,o)
return}}h=b.b
i=H.f(h.c,"$ibg")
h.c=null
b=h.br(i)
t=s.a
p=s.b
if(!t){H.B(p,H.u(h,0))
h.a=4
h.c=p}else{H.f(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
oO:function(a,b){if(H.fn(a,{func:1,args:[P.R,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ax]})
if(H.fn(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.kY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oN:function(){var u,t
for(;u=$.cd,u!=null;){$.de=null
t=u.b
$.cd=t
if(t==null)$.dd=null
u.a.$0()}},
oS:function(){$.lm=!0
try{P.oN()}finally{$.de=null
$.lm=!1
if($.cd!=null)$.lA().$1(P.mJ())}},
mE:function(a){var u=new P.es(H.n(a,{func:1,ret:-1}))
if($.cd==null){$.dd=u
$.cd=u
if(!$.lm)$.lA().$1(P.mJ())}else{$.dd.b=u
$.dd=u}},
oR:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cd
if(u==null){P.mE(a)
$.de=$.dd
return}t=new P.es(a)
s=$.de
if(s==null){t.b=u
$.de=t
$.cd=t}else{t.b=s.b
s.b=t
$.de=t
if(t.b==null)$.dd=t}},
pj:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a1
if(C.l===t){P.kr(null,null,C.l,a)
return}t.toString
P.kr(null,null,t,H.n(t.cv(a),u))},
mc:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a1
if(t===C.l){t.toString
return P.lc(a,b)}return P.lc(a,H.n(t.cv(b),u))},
od:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bb]}
H.n(b,u)
t=$.a1
if(t===C.l){t.toString
return P.md(a,b)}s=t.e4(b,P.bb)
$.a1.toString
return P.md(a,H.n(s,u))},
kp:function(a,b,c,d,e){var u={}
u.a=d
P.oR(new P.kq(u,e))},
mB:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mC:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
oP:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kr:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cv(d):c.jL(d,-1)
P.mE(d)},
js:function js(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
f5:function f5(a){this.a=a
this.b=null
this.c=0},
k8:function k8(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c,d){var _=this
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
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jD:function jD(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jL:function jL(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a){this.a=a
this.b=null},
ix:function ix(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
cM:function cM(){},
iy:function iy(){},
bb:function bb(){},
am:function am(a,b){this.a=a
this.b=b},
ki:function ki(){},
kq:function kq(a,b){this.a=a
this.b=b},
jR:function jR(){},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function(a,b,c,d,e){return new H.aQ([d,e])},
l8:function(a,b){return new H.aQ([a,b])},
nP:function(a){return H.p0(a,new H.aQ([null,null]))},
dM:function(a,b,c,d){return new P.jP([d])},
li:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ot:function(a,b,c){var u=new P.eH(a,b,[c])
u.c=a.e
return u},
nH:function(a,b,c){var u,t
if(P.ln(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dj()
C.a.h(t,a)
try{P.oM(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.ma(b,H.mR(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l4:function(a,b,c){var u,t,s
if(P.ln(a))return b+"..."+c
u=new P.al(b)
t=$.dj()
C.a.h(t,a)
try{s=u
s.a=P.ma(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ln:function(a){var u,t
for(u=0;t=$.dj(),u<t.length;++u)if(a===t[u])return!0
return!1},
oM:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gW(a)
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
nO:function(a,b,c){var u=P.nN(null,null,null,b,c)
a.O(0,new P.hs(u,b,c))
return u},
lS:function(a,b){var u,t,s
u=P.dM(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.B(a[s],b))
return u},
l9:function(a){var u,t
u={}
if(P.ln(a))return"{...}"
t=new P.al("")
try{C.a.h($.dj(),a)
t.a+="{"
u.a=!0
J.lF(a,new P.hw(u,t))
t.a+="}"}finally{u=$.dj()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jP:function jP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.c=this.b=null},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(){},
y:function y(){},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
ag:function ag(){},
k9:function k9(){},
hx:function hx(){},
el:function el(a,b){this.a=a
this.$ti=b},
jW:function jW(){},
eI:function eI(){},
fa:function fa(){},
og:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oh(!1,b,c,d)
return},
oh:function(a,b,c,d){var u,t,s
u=$.na()
if(u==null)return
t=0===c
if(t&&!0)return P.lf(u,b)
s=b.length
d=P.bq(c,d,s,null,null,null)
if(t&&d===s)return P.lf(u,b)
return P.lf(u,b.subarray(c,d))},
lf:function(a,b){if(P.oj(b))return
return P.ok(a,b)},
ok:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oj:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
oi:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
oQ:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.ci(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bV()
if((s&127)!==s)return t-b}return c-b},
lJ:function(a,b,c,d,e,f){if(C.f.bl(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
bW:function bW(){},
bC:function bC(){},
fZ:function fZ(){},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hd:function hd(a){this.a=a},
ja:function ja(a){this.a=a},
jc:function jc(){},
kg:function kg(a){this.b=this.a=0
this.c=a},
jb:function jb(a){this.a=a},
ke:function ke(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kf:function kf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.o2(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nE:function(a){if(a instanceof H.cq)return a.i(0)
return"Instance of '"+H.c5(a)+"'"},
nQ:function(a,b,c,d){var u,t
H.B(b,d)
u=J.nK(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
lT:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.by(a);s.E();)C.a.h(t,H.B(s.gN(s),c))
if(b)return t
return H.k(J.hh(t),"$ib",u,"$ab")},
e7:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaP",[u],"$aaP")
t=a.length
c=P.bq(b,c,t,null,null,null)
return H.m5(b>0||c<t?C.a.fz(a,b,c):a)}if(!!J.Z(a).$icG)return H.o4(a,b,P.bq(b,c,a.length,null,null,null))
return P.ob(a,b,c)},
ob:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ae(b,0,J.aE(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ae(c,b,J.aE(a),null,null))
t=J.by(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.ae(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gN(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.ae(c,b,s,null,null))
r.push(t.gN(t))}return H.m5(r)},
o7:function(a,b,c){return new H.hk(a,H.nL(a,!1,!0,!1))},
ma:function(a,b,c){var u=J.by(b)
if(!u.E())return a
if(c.length===0){do a+=H.m(u.gN(u))
while(u.E())}else{a+=H.m(u.gN(u))
for(;u.E();)a=a+c+H.m(u.gN(u))}return a},
mg:function(){var u=H.nV()
if(u!=null)return P.of(u,0,null)
throw H.c(P.I("'Uri.base' is not supported"))},
fb:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.ng().b
if(typeof b!=="string")H.t(H.ay(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.at(c,"bW",0))
t=c.gke().cD(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c6(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nA:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dv:function(a){if(a>=10)return""+a
return"0"+a},
lO:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h0:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nE(a)},
fv:function(a){return new P.aM(!1,null,null,a)},
kY:function(a,b,c){return new P.aM(!0,a,b,c)},
e0:function(a,b,c){return new P.c7(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c,d,e,f){if(typeof a!=="number")return H.F(a)
if(0>a||a>c)throw H.c(P.ae(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ae(b,a,c,"end",f))
return b}return c},
a_:function(a,b,c,d,e){var u=H.aj(e==null?J.aE(b):e)
return new P.hf(b,u,!0,a,c,"Index out of range")},
I:function(a){return new P.j3(a)},
j1:function(a){return new P.j0(a)},
m9:function(a){return new P.c9(a)},
bj:function(a){return new P.fI(a)},
w:function(a){return new P.eA(a)},
a7:function(a,b,c){return new P.h9(a,b,c)},
nR:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
az:function(a){H.ph(a)},
of:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(t===0)return P.mf(b>0||c<c?C.b.v(a,b,c):a,5,null).gfb()
else if(t===32)return P.mf(C.b.v(a,u,c),0,null).gfb()}s=new Array(8)
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
if(P.mD(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lb()
if(q>=b)if(P.mD(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.F(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.b.ad(a,"..",n)))i=m>n+2&&C.b.ad(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.ad(a,"file",b)){if(p<=b){if(!C.b.ad(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.v(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.b0(a,n,m,"/");++m;++l;++c}else{a=C.b.v(a,b,n)+"/"+C.b.v(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.ad(a,"http",b)){if(s&&o+3===n&&C.b.ad(a,"80",o+1))if(b===0&&!0){a=C.b.b0(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.v(a,b,o)+C.b.v(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.ad(a,"https",b)){if(s&&o+4===n&&C.b.ad(a,"443",o+1))if(b===0&&!0){a=C.b.b0(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.v(a,b,o)+C.b.v(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.v(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jZ(a,q,p,o,n,m,l,j)}return P.ow(a,b,c,q,p,o,n,m,l,j)},
mi:function(a,b){var u=P.e
return C.a.kk(H.d(a.split("&"),[u]),P.l8(u,u),new P.j8(b),[P.E,P.e,P.e])},
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.j5(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.a1(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fq(C.b.v(a,q,r),null,null)
if(typeof n!=="number")return n.fo()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fq(C.b.v(a,q,c),null,null)
if(typeof n!=="number")return n.fo()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j6(a)
t=new P.j7(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a1(a,r)
if(n===58){if(r===b){++r
if(C.b.a1(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaC(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oe(a,q,c)
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
ow:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oD(a,b,d)
else{if(d===b)P.da(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oE(a,u,e-1):""
s=P.oA(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oC(P.fq(C.b.v(a,r,g),new P.ka(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oB(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lj(a,h+1,i,null):null
return new P.cb(j,t,s,q,p,o,i<c?P.oz(a,i+1,c):null)},
mt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
da:function(a,b,c){throw H.c(P.a7(c,a,b))},
oC:function(a,b){if(a!=null&&a===P.mt(b))return
return a},
oA:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a1(a,u)!==93)P.da(a,b,"Missing end `]` to match `[` in host")
P.mh(a,b+1,u)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a1(a,t)===58){P.mh(a,b,c)
return"["+a+"]"}return P.oG(a,b,c)},
oG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a1(a,u)
if(q===37){p=P.mz(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.b.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.b.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.da(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mu(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oD:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mw(C.b.I(a,b)))P.da(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.da(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.ox(t?a.toLowerCase():a)},
ox:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oE:function(a,b,c){return P.db(a,b,c,C.a7,!1)},
oB:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.db(a,b,c,C.K,!0):C.q.le(d,new P.kb(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a5(r,"/"))r="/"+r
return P.oF(r,e,f)},
oF:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oH(a,!u||c)
return P.oI(a)},
lj:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.fv("Both query and queryParameters specified"))
return P.db(a,b,c,C.t,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.O(0,new P.kc(new P.kd(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oz:function(a,b,c){return P.db(a,b,c,C.t,!0)},
mz:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.a1(a,b+1)
s=C.b.a1(a,u)
r=H.kz(t)
q=H.kz(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aW(p,4)
if(u>=8)return H.h(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c6(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
mu:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iX(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.I("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.b.I("0123456789ABCDEF",p&15))
q+=3}}return P.e7(t,0,null)},
db:function(a,b,c,d,e){var u=P.my(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.v(a,b,c):u},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mz(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.da(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mu(q)}}if(r==null)r=new P.al("")
r.a+=C.b.v(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mx:function(a){if(C.b.a5(a,"."))return!0
return C.b.eG(a,"/.")!==-1},
oI:function(a){var u,t,s,r,q,p,o
if(!P.mx(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oH:function(a,b){var u,t,s,r,q,p
if(!P.mx(a))return!b?P.mv(a):a
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
C.a.n(u,0,P.mv(u[0]))}return C.a.m(u,"/")},
mv:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mw(J.nk(a,0)))for(t=1;t<u;++t){s=C.b.I(a,t)
if(s===58)return C.b.v(a,0,t)+"%3A"+C.b.au(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oy:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fv("Invalid URL encoding"))}}return u},
lk:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.b.v(a,b,c)
else q=new H.v(C.b.v(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.b.I(a,t)
if(s>127)throw H.c(P.fv("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.fv("Truncated URI"))
C.a.h(q,P.oy(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.jb(!1).cD(q)},
mw:function(a){var u=a|32
return 97<=u&&u<=122},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaC(u)
if(q!==44||s!==o+7||!C.b.ad(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kx(0,a,n,t)
else{m=P.my(a,n,t,C.t,!0)
if(m!=null)a=C.b.b0(a,n,t,m)}return new P.j4(a,u,c)},
oK:function(){var u,t,s,r,q
u=P.nR(22,new P.km(),!0,P.S)
t=new P.kl(u)
s=new P.kn()
r=new P.ko()
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
mD:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nh()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
an:function an(a,b){this.a=a
this.b=b},
q:function q(){},
b2:function b2(a){this.a=a},
fV:function fV(){},
fW:function fW(){},
bD:function bD(){},
dX:function dX(){},
aM:function aM(a,b,c,d){var _=this
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
hf:function hf(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
c9:function c9(a){this.a=a},
fI:function fI(a){this.a=a},
hZ:function hZ(){},
e6:function e6(){},
fP:function fP(a){this.a=a},
eA:function eA(a){this.a=a},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
o:function o(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
E:function E(){},
N:function N(){},
a4:function a4(){},
R:function R(){},
ax:function ax(){},
e:function e(){},
al:function al(a){this.a=a},
j8:function j8(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(){},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(){},
kl:function kl(a){this.a=a},
kn:function kn(){},
ko:function ko(){},
jZ:function jZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.l8(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.n(0,q,a[q])}return u},
oW:function(a,b){var u={}
a.O(0,new P.ks(u))
return u},
k0:function k0(){},
k2:function k2(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
k1:function k1(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(){},
jO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
os:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jQ:function jQ(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hn:function hn(){},
b8:function b8(){},
hX:function hX(){},
i3:function i3(){},
cJ:function cJ(){},
iB:function iB(){},
r:function r(){},
bc:function bc(){},
iO:function iO(){},
eF:function eF(){},
eG:function eG(){},
eQ:function eQ(){},
eR:function eR(){},
f1:function f1(){},
f2:function f2(){},
f8:function f8(){},
f9:function f9(){},
S:function S(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(a){this.a=a},
fA:function fA(){},
bT:function bT(){},
hY:function hY(){},
et:function et(){},
dn:function dn(){},
dC:function dC(){},
dZ:function dZ(){},
c8:function c8(){},
e3:function e3(){},
ej:function ej(){},
it:function it(){},
eY:function eY(){},
eZ:function eZ(){}},W={
lI:function(a){var u=document.createElement("a")
return u},
lM:function(a,b){var u=document.createElement("canvas")
return u},
nC:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ah(u,a,b,c)
t.toString
u=W.G
u=new H.cZ(new W.as(t),H.n(new W.fY(),{func:1,ret:P.T,args:[u]}),[u])
return H.f(u.gaO(u),"$iV")},
nD:function(a){H.f(a,"$ij")
return"wheel"},
cu:function(a){var u,t,s
u="element tag unavailable"
try{t=J.np(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ak(s)}return u},
nG:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icA")
try{u.type=a}catch(s){H.ak(s)}return u},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mr:function(a,b,c,d){var u,t
u=W.jN(W.jN(W.jN(W.jN(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
af:function(a,b,c,d,e){var u=W.mG(new W.jC(c),W.p)
if(u!=null&&!0)J.nl(a,b,u,!1)
return new W.jB(a,b,u,!1,[e])},
mq:function(a){var u,t
u=W.lI(null)
t=window.location
u=new W.bP(new W.jV(u,t))
u.fO(a)
return u},
oq:function(a,b,c,d){H.f(a,"$iV")
H.H(b)
H.H(c)
H.f(d,"$ibP")
return!0},
or:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.H(b)
H.H(c)
u=H.f(d,"$ibP").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ms:function(){var u,t,s,r,q
u=P.e
t=P.lS(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.k6(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.k5(t,P.dM(null,null,null,u),P.dM(null,null,null,u),P.dM(null,null,null,u),null)
t.h0(null,new H.hA(C.A,r,[s,u]),q,null)
return t},
mG:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.l)return a
return u.e4(a,b)},
z:function z(){},
ft:function ft(){},
dl:function dl(){},
fu:function fu(){},
cn:function cn(){},
bU:function bU(){},
bz:function bz(){},
bV:function bV(){},
bA:function bA(){},
cr:function cr(){},
fL:function fL(){},
Y:function Y(){},
cs:function cs(){},
fM:function fM(){},
b0:function b0(){},
b1:function b1(){},
fN:function fN(){},
fO:function fO(){},
fR:function fR(){},
aF:function aF(){},
ct:function ct(){},
fS:function fS(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
fT:function fT(){},
fU:function fU(){},
jw:function jw(a,b){this.a=a
this.b=b},
V:function V(){},
fY:function fY(){},
p:function p(){},
j:function j(){},
aG:function aG(){},
cw:function cw(){},
h4:function h4(){},
h8:function h8(){},
aO:function aO(){},
dD:function dD(){},
dE:function dE(){},
c_:function c_(){},
dF:function dF(){},
cz:function cz(){},
cA:function cA(){},
b4:function b4(){},
dK:function dK(){},
dN:function dN(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(){},
hL:function hL(a){this.a=a},
aR:function aR(){},
hM:function hM(){},
ah:function ah(){},
as:function as(a){this.a=a},
G:function G(){},
cH:function cH(){},
aS:function aS(){},
i1:function i1(){},
e_:function e_(){},
ic:function ic(){},
id:function id(a){this.a=a},
ig:function ig(){},
aT:function aT(){},
ir:function ir(){},
aU:function aU(){},
is:function is(){},
aV:function aV(){},
iv:function iv(){},
iw:function iw(a){this.a=a},
aH:function aH(){},
ba:function ba(){},
e8:function e8(){},
e9:function e9(){},
iC:function iC(){},
cN:function cN(){},
aW:function aW(){},
aI:function aI(){},
iE:function iE(){},
iF:function iF(){},
iI:function iI(){},
aX:function aX(){},
aY:function aY(){},
iM:function iM(){},
iN:function iN(){},
bN:function bN(){},
j9:function j9(){},
jo:function jo(){},
bf:function bf(){},
d_:function d_(){},
d0:function d0(){},
jx:function jx(){},
ev:function ev(){},
jM:function jM(){},
eN:function eN(){},
k_:function k_(){},
k3:function k3(){},
jv:function jv(){},
jz:function jz(a){this.a=a},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jB:function jB(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jC:function jC(a){this.a=a},
bP:function bP(a){this.a=a},
D:function D(){},
dW:function dW(a){this.a=a},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(){},
jX:function jX(){},
jY:function jY(){},
k5:function k5(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k6:function k6(){},
k4:function k4(){},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aC:function aC(){},
jV:function jV(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a},
kh:function kh(a){this.a=a},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
d6:function d6(){},
d7:function d7(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
d8:function d8(){},
d9:function d9(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){}},O={
l_:function(a){var u=new O.a5([a])
u.c0(a)
return u},
a5:function a5(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cC:function cC(){this.b=this.a=null},
lU:function(){var u,t,s
u=new O.dQ()
u.shb(O.l_(V.ap))
u.e.bm(u.ghM(),u.ghO())
t=new O.b6(u,"emission")
t.c=C.d
t.f=new V.a6(0,0,0)
u.f=t
t=new O.b6(u,"ambient")
t.c=C.d
t.f=new V.a6(0,0,0)
u.r=t
t=new O.b6(u,"diffuse")
t.c=C.d
t.f=new V.a6(0,0,0)
u.x=t
t=new O.b6(u,"invDiffuse")
t.c=C.d
t.f=new V.a6(0,0,0)
u.y=t
t=new O.hG(u,"specular")
t.c=C.d
t.f=new V.a6(0,0,0)
t.ch=100
u.z=t
t=new O.hD(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b6(u,"reflect")
t.c=C.d
t.f=new V.a6(0,0,0)
u.cx=t
t=new O.hF(u,"refract")
t.c=C.d
t.f=new V.a6(0,0,0)
t.ch=1
u.cy=t
t=new O.hC(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dL()
t.c0(D.a8)
t.sfQ(H.d([],[D.dw]))
t.sfT(H.d([],[D.bJ]))
t.sfU(H.d([],[D.e5]))
t.sfV(H.d([],[D.ec]))
t.sfW(H.d([],[D.ed]))
t.sfX(H.d([],[D.ee]))
t.Q=null
t.ch=null
t.da(t.ghK(),t.gim(),t.gir())
u.dx=t
s=t.Q
if(s==null){s=D.W()
t.Q=s
t=s}else t=s
t.h(0,u.giL())
t=u.dx
s=t.ch
if(s==null){s=D.W()
t.ch=s
t=s}else t=s
t.h(0,u.gh1())
u.dy=null
return u},
dQ:function dQ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dR:function dR(){},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hG:function hG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
l2:function(a,b,c,d,e,f){var u=new E.ao()
u.a=d
u.b=!0
u.sfN(0,O.l_(E.ao))
u.y.bm(u.gky(),u.gkB())
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
u.sac(0,e)
u.sbi(f)
u.saL(c)
return u},
o8:function(a,b){var u=new E.i8(a,b)
u.fI(a,b)
return u},
oc:function(a,b,c,d,e){var u,t,s,r
u=J.Z(a)
if(!!u.$ibV)return E.mb(a,!0,!0,!0,!1)
t=W.lM(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcC(a).h(0,t)
r=E.mb(t,!0,!0,!0,!1)
r.a=a
return r},
mb:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ef()
t=H.f(C.x.fj(a,"webgl2",P.nP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic8")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o8(t,a)
s=new T.iG(t)
s.b=H.aj((t&&C.c).d8(t,3379))
s.c=H.aj(C.c.d8(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.em(a)
r=new X.hm()
r.c=new X.aB(!1,!1,!1)
r.siA(P.dM(null,null,null,P.o))
s.b=r
r=new X.hN(s)
r.f=0
r.r=V.bK()
r.x=V.bK()
r.Q=1
r.ch=1
s.c=r
r=new X.hu(s)
r.r=0
r.x=V.bK()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iL(s)
r.e=0
r.f=V.bK()
r.r=V.bK()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shn(H.d([],[[P.cM,P.R]]))
r=s.z
q=document
p=W.ah
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.af(q,"contextmenu",H.n(s.ghW(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.af(a,"focus",H.n(s.gi1(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.af(a,"blur",H.n(s.ghQ(),m),!1,n))
r=s.z
l=W.b4
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.af(q,"keyup",H.n(s.gi5(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.af(q,"keydown",H.n(s.gi3(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.af(a,"mousedown",H.n(s.gi9(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.af(a,"mouseup",H.n(s.gie(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.af(a,"mousemove",H.n(s.gib(),o),!1,p))
l=s.z
k=W.bf;(l&&C.a).h(l,W.af(a,H.H(W.nD(a)),H.n(s.gih(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.af(q,"mousemove",H.n(s.ghY(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.af(q,"mouseup",H.n(s.gi_(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.af(q,"pointerlockchange",H.n(s.gij(),m),!1,n))
n=s.z
m=W.aY
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.af(a,"touchstart",H.n(s.gix(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.af(a,"touchend",H.n(s.git(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.af(a,"touchmove",H.n(s.giv(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.an(Date.now(),!1)
u.cy=0
u.dP()
return u},
fD:function fD(){},
ao:function ao(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ef:function ef(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a){this.a=a}},Z={
lg:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.c.az(a,b,u)
C.c.e6(a,b,new Int16Array(H.cc(c)),35044)
C.c.az(a,b,null)
return new Z.er(b,u)},
aJ:function(a){return new Z.be(a)},
er:function er(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jp:function jp(a){this.a=a},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
W:function(){var u=new D.bY()
u.sam(null)
u.saU(null)
u.c=null
u.d=0
return u},
fG:function fG(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
A:function A(a){this.a=a
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
dw:function dw(){},
a8:function a8(){},
dL:function dL(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
bJ:function bJ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){}},X={dr:function dr(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},hm:function hm(){var _=this
_.d=_.c=_.b=_.a=null},dO:function dO(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hu:function hu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
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
_.b=null},hN:function hN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cD:function cD(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},i2:function i2(){},eh:function eh(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iL:function iL(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},em:function em(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nF:function(a,b,c,d,e,f,g){var u,t
u=new X.ha()
t=new V.aN(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.m7
if(t==null){t=V.m6(0,0,1,1)
$.m7=t}u.r=t
return u},
ds:function ds(){},
ha:function ha(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){}},V={
kU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bl(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.b.aj("null",c)
return C.b.aj(C.e.f5(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.aj(u[p],s))}return u},
c3:function(){var u=$.lZ
if(u==null){u=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lZ=u}return u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lY:function(a,b,c){return V.b7(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
la:function(a,b,c,d){return V.b7(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lV:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lW:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lX:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bK:function(){var u=$.m2
if(u==null){u=new V.aa(0,0)
$.m2=u}return u},
m3:function(){var u=$.bL
if(u==null){u=new V.a2(0,0,0)
$.bL=u}return u},
m6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e1(a,b,c,d)},
cY:function(){var u=$.mo
if(u==null){u=new V.L(0,0,0)
$.mo=u}return u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a){this.a=a},
dS:function dS(a,b,c,d,e,f,g,h,i){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a,b,c,d){var _=this
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
u=C.b.I(a,0)
t=C.b.I(b,0)
s=new V.i6()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ih()
u.fJ(a)
return u},
iK:function(){var u,t
u=new V.iJ()
t=P.e
u.siZ(new H.aQ([t,V.cL]))
u.sj0(new H.aQ([t,V.cO]))
u.c=null
return u},
bi:function bi(){},
aA:function aA(){},
dP:function dP(){},
aw:function aw(){this.a=null},
i6:function i6(){this.b=this.a=null},
ih:function ih(){this.a=null},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b
this.c=null},
iJ:function iJ(){this.c=this.b=this.a=null},
cP:function cP(a){this.b=a
this.a=this.c=null},
pk:function(a){P.od(C.U,new V.kP(a))},
oa:function(a,b){var u=new V.il()
u.fL(a,!0)
return u},
bB:function bB(){},
kP:function kP(a){this.a=a},
fQ:function fQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hb:function hb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i0:function i0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i4:function i4(a,b){this.a=a
this.b=b
this.c=null},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(){this.b=this.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
ip:function ip(a){this.a=a}},U={
l0:function(){var u=new U.fH()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
du:function(a){var u=new U.dt()
if(a==null)a=V.c3()
if(null!=a)u.a=a
return u},
l3:function(a){var u=new U.cy()
u.c0(U.ad)
u.bm(u.gfY(),u.gip())
u.e=null
u.f=V.c3()
u.r=0
return u},
fH:function fH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){this.b=this.a=null},
cy:function cy(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e2:function e2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lp:function(a,b,c,d,e,f,g,h){var u,t,s,r,q,p,o,n
u=c>1?1:c
t=d>1?1:d
s=e>1?1:e
r=new V.a6(u,t,s)
q=U.l3(null)
q.h(0,U.du(V.lY(0,0,2)))
s=new U.e2()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.sfe(0)
s.seW(0,0)
s.sf1(0)
u=s.d
if(!(Math.abs(u-f)<$.K().a)){s.d=f
u=new D.J("deltaYaw",u,f,s,[P.q])
u.b=!0
s.K(u)}u=s.e
if(!(Math.abs(u-g)<$.K().a)){s.e=g
u=new D.J("deltaPitch",u,g,s,[P.q])
u.b=!0
s.K(u)}u=s.f
if(!(Math.abs(u-h)<$.K().a)){s.f=h
u=new D.J("deltaRoll",u,h,s,[P.q])
u.b=!0
s.K(u)}q.h(0,s)
p=E.l2(null,!0,null,"",null,null)
u=U.l3(null)
u.h(0,U.du(V.la(0.1,0.1,0.1,1)))
u.h(0,q)
p.saL(u)
p.sac(0,F.mW(8,null,1,8))
u=O.lU()
u.f.sao(0,r)
p.sbi(u)
o=new D.bJ()
o.c=new V.a6(1,1,1)
o.d=1
o.e=0
o.f=0
o.a=V.m3()
n=o.b
o.b=q
q.gC().h(0,o.gfR())
u=new D.J("mover",n,o.b,o,[U.ad])
u.b=!0
o.ae(u)
o.c=r
if(!r.w(0,r)){n=o.c
o.c=r
u=new D.J("color",n,r,o,[V.a6])
u.b=!0
o.ae(u)}u=o.d
if(!(Math.abs(u-1)<$.K().a)){o.d=1
u=new D.J("attenuation0",u,1,o,[P.q])
u.b=!0
o.ae(u)}u=o.e
if(!(Math.abs(u-0.5)<$.K().a)){o.e=0.5
u=new D.J("attenuation1",u,0.5,o,[P.q])
u.b=!0
o.ae(u)}u=o.f
if(!(Math.abs(u-0.15)<$.K().a)){o.f=0.15
u=new D.J("attenuation2",u,0.15,o,[P.q])
u.b=!0
o.ae(u)}a.dx.h(0,o)
b.d.h(0,p)},
mS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.oa("Test 021",!0)
t=W.lM(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.e]
u.dY(H.d(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],s))
u.jz(H.d(["shapes"],s))
u.dY(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.d7(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.oc(r,!0,!0,!0,!1)
p=E.l2(null,!0,null,"",null,null)
p.saL(U.du(V.c3()))
p.sac(0,F.mY(30,1,15,0.5))
o=E.l2(null,!0,null,"",null,null)
o.saL(U.du(V.la(3,3,3,1)))
n=F.lt(1,null,null,1)
n.cN()
o.sac(0,n)
m=U.l3(null)
n=q.r
l=new U.eo()
k=U.l0()
k.sd6(0,!0)
k.scT(6.283185307179586)
k.scV(0)
k.sa3(0,0)
k.scU(100)
k.sY(0)
k.scF(0.5)
l.b=k
j=l.gaS()
k.gC().h(0,j)
k=U.l0()
k.sd6(0,!0)
k.scT(6.283185307179586)
k.scV(0)
k.sa3(0,0)
k.scU(100)
k.sY(0)
k.scF(0.5)
l.c=k
k.gC().h(0,j)
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
i=new X.aB(!1,!1,!1)
h=l.d
l.d=i
k=[X.aB]
j=new D.J("modifiers",h,i,l,k)
j.b=!0
l.K(j)
j=l.f
if(j!==!1){l.f=!1
j=new D.J("invertX",j,!1,l,[P.T])
j.b=!0
l.K(j)}j=l.r
if(j!==!1){l.r=!1
j=new D.J("invertY",j,!1,l,[P.T])
j.b=!0
l.K(j)}l.b8(n)
m.h(0,l)
n=q.r
l=new U.en()
j=U.l0()
j.sd6(0,!0)
j.scT(6.283185307179586)
j.scV(0)
j.sa3(0,0)
j.scU(100)
j.sY(0)
j.scF(0.2)
l.b=j
j.gC().h(0,l.gaS())
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
i=new X.aB(!0,!1,!1)
h=l.c
l.c=i
j=new D.J("modifiers",h,i,l,k)
j.b=!0
l.K(j)
l.b8(n)
m.h(0,l)
n=q.r
l=new U.ep()
l.c=0.01
l.d=0
l.e=0
i=new X.aB(!1,!1,!1)
l.b=i
k=new D.J("modifiers",null,i,l,k)
k.b=!0
l.K(k)
l.b8(n)
m.h(0,l)
m.h(0,U.du(V.lY(0,0,5)))
g=O.lU()
n=g.r
n.sao(0,new V.a6(0.4,0.4,0.4))
n=g.x
n.sao(0,new V.a6(0.4,0.4,0.4))
n=g.z
n.sao(0,new V.a6(0.3,0.3,0.3))
n=g.z
if(n.c===C.d){n.c=C.j
n.c_()
n.cp(100)
l=n.a
l.a=null
l.af(null)}n.cp(100)
f=new M.dA()
f.she(0,O.l_(E.ao))
f.d.bm(f.ghS(),f.ghU())
f.e=null
f.f=null
f.r=null
f.x=null
e=X.nF(!0,!0,!1,null,2000,null,0)
d=new X.dY()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saL(null)
n=d.c
if(!(Math.abs(n-1.0471975511965976)<$.K().a)){d.c=1.0471975511965976
n=new D.J("fov",n,1.0471975511965976,d,[P.q])
n.b=!0
d.aQ(n)}n=d.d
if(!(Math.abs(n-0.1)<$.K().a)){d.d=0.1
n=new D.J("near",n,0.1,d,[P.q])
n.b=!0
d.aQ(n)}n=d.e
if(!(Math.abs(n-2000)<$.K().a)){d.e=2000
n=new D.J("far",n,2000,d,[P.q])
n.b=!0
d.aQ(n)}n=f.a
if(n!==d){if(n!=null)n.gC().P(0,f.gav())
h=f.a
f.a=d
d.gC().h(0,f.gav())
n=new D.J("camera",h,f.a,f,[X.ds])
n.b=!0
f.aE(n)}n=f.b
if(n!==e){if(n!=null)n.gC().P(0,f.gav())
h=f.b
f.b=e
e.gC().h(0,f.gav())
n=new D.J("target",h,f.b,f,[X.ea])
n.b=!0
f.aE(n)}f.sbi(null)
f.sbi(g)
f.d.h(0,o)
f.d.h(0,p)
f.a.saL(m)
n=q.d
if(n!==f){if(n!=null)n.gC().P(0,q.gde())
q.d=f
f.gC().h(0,q.gde())
q.df()}U.lp(g,f,1,0,0,0.3,0,0)
U.lp(g,f,0,1,0,0,0.4,0)
U.lp(g,f,0,0,1,0.5,0.5,0)
n=new V.i4("shapes",!0)
s=C.z.d7(s,"shapes")
n.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
n.b7(0,"Cube",new U.kG(p))
n.b7(0,"Cylinder",new U.kH(p))
n.b7(0,"Cone",new U.kI(p))
n.b7(0,"Sphere",new U.kJ(p))
n.dW(0,"Toroid",new U.kK(p),!0)
n.b7(0,"Knot",new U.kL(p))
s=q.z
if(s==null){s=D.W()
q.z=s}n={func:1,ret:-1,args:[D.A]}
l=H.n(new U.kM(u,g),n)
if(s.b==null)s.saU(H.d([],[n]))
s=s.b;(s&&C.a).h(s,l)
V.pk(q)},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a,b){this.a=a
this.b=b}},M={dA:function dA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nS:function(a,b){var u,t
u=a.ap
t=new A.hB(b,u)
t.fK(b,u)
t.fH(a,b)
return t},
ld:function(a,b,c,d,e){var u=new A.iT(a,b,c,e)
u.f=d
u.sjb(P.nQ(d,0,!1,P.o))
return u},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a){this.a=a},
hB:function hB(a,b){var _=this
_.bA=_.ec=_.bz=_.ap=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.es=_.cH=_.er=_.bN=_.eq=_.ep=_.bM=_.bL=_.eo=_.en=_.bK=_.bJ=_.bI=_.em=_.el=_.bH=_.ek=_.ej=_.bG=_.ei=_.eh=_.bF=_.bE=_.eg=_.ef=_.bD=_.bC=_.ee=_.ed=_.bB=null
_.cM=_.ex=_.cL=_.ew=_.cK=_.ev=_.cJ=_.eu=_.cI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hE:function hE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ap=b4
_.bz=b5},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cS:function cS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cV:function cV(a,b,c,d,e,f,g,h,i,j){var _=this
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
cW:function cW(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cK:function cK(){},
bX:function bX(a,b){this.a=a
this.b=b},
ei:function ei(){},
iZ:function iZ(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c,d){var _=this
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
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(a,b,c,d){var _=this
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
lt:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
u=F.lb()
F.dc(u,b,c,d,a,1,0,0,1)
F.dc(u,b,c,d,a,0,1,0,3)
F.dc(u,b,c,d,a,0,0,1,2)
F.dc(u,b,c,d,a,-1,0,0,0)
F.dc(u,b,c,d,a,0,-1,0,0)
F.dc(u,b,c,d,a,0,0,-1,3)
u.aA()
return u},
kk:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dc:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u.d=t}g=F.kk(t)
f=F.kk(u.b)
e=F.ly(d,a0,new F.kj(u,F.kk(u.c),F.kk(u.d),f,g,c),b)
if(e!=null)a.bf(e)},
mM:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.q,args:[P.q]})
if(a0<3)return
u=F.lb()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ai])
q=u.a
p=new V.L(0,0,t)
p=p.B(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jD(new V.b9(a,-1,-1,-1),new V.aN(1,1,1,1),new V.a2(0,0,d),new V.L(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.L(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eq(new V.b9(a,-1,-1,-1),null,new V.aN(i,g,h,1),new V.a2(m*k,l*k,d),new V.L(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jB(r)
return u},
mK:function(a,b,c,d,e,f){return F.oX(!0,c,d,new F.kt(a,f),e)},
oX:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.ly(c,e,new F.kv(d),null)
if(u==null)return
u.aA()
u.cu()
if(b)u.bf(F.mM(3,!1,!1,1,new F.kw(d),e))
u.bf(F.mM(1,!0,!1,-1,new F.kx(d),e))
return u},
mW:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kQ()
t=F.lt(a,null,new F.kR(u,c),d)
t.cu()
return t},
mY:function(a,b,c,d){return F.mL(c,a,d,b,new F.kS())},
pc:function(a,b,c,d,e,f){return F.mL(d,a,e,b,new F.kE(f,c))},
mL:function(a,b,c,d,e){var u=F.ly(a,b,new F.ku(H.n(e,{func:1,ret:V.a2,args:[P.q]}),d,b,c),null)
if(u==null)return
u.aA()
u.cu()
return u},
ly:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.lb()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eq(null,null,new V.aN(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cE(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eq(null,null,new V.aN(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cE(d))}}u.d.jC(a+1,b+1,t)
return u},
cv:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cs(a)
u.ct(b)
u.iS(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
nM:function(a,b){var u,t
u=new F.bn()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cs(a)
u.ct(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
lb:function(){var u,t
u=new F.e4()
t=new F.jd(u)
t.b=!1
t.sjc(H.d([],[F.ai]))
u.a=t
t=new F.ik(u)
t.sck(H.d([],[F.bI]))
u.b=t
t=new F.ij(u)
t.shy(H.d([],[F.bn]))
u.c=t
t=new F.ii(u)
t.sho(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
eq:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ai()
t=new F.jl(u)
t.sck(H.d([],[F.bI]))
u.b=t
t=new F.jh(u)
s=[F.bn]
t.shz(H.d([],s))
t.shA(H.d([],s))
u.c=t
t=new F.je(u)
s=[F.a9]
t.shp(H.d([],s))
t.shq(H.d([],s))
t.shr(H.d([],s))
u.d=t
h=$.nb()
u.e=0
t=$.bv()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bu().a)!==0?e:null
u.x=(s&$.bt().a)!==0?b:null
u.y=(s&$.bw().a)!==0?f:null
u.z=(s&$.bx().a)!==0?g:null
u.Q=(s&$.nc().a)!==0?c:null
u.ch=(s&$.cm().a)!==0?i:0
u.cx=(s&$.bs().a)!==0?a:null
return u},
kj:function kj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kt:function kt(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
kQ:function kQ(){},
kR:function kR(a,b){this.a=a
this.b=b},
kS:function kS(){},
kE:function kE(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(){},
iq:function iq(){},
bn:function bn(){this.b=this.a=null},
ho:function ho(){},
iS:function iS(){},
bI:function bI(){this.a=null},
e4:function e4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jn:function jn(a){this.a=a},
jm:function jm(a){this.a=a},
jd:function jd(a){this.a=a
this.c=this.b=null},
je:function je(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a){this.a=a
this.c=this.b=null},
jj:function jj(){},
ji:function ji(){},
jk:function jk(){},
hV:function hV(){},
jl:function jl(a){this.a=a
this.b=null}},T={eb:function eb(){},iG:function iG(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l6.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gL:function(a){return H.cI(a)},
i:function(a){return"Instance of '"+H.c5(a)+"'"}}
J.hi.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iT:1}
J.dH.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iN:1}
J.dI.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.i_.prototype={}
J.bO.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.n_()]
if(u==null)return this.fC(a)
return"JavaScript function for "+H.m(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aP.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.I("add"))
a.push(b)},
kQ:function(a,b){var u
if(!!a.fixed$length)H.t(P.I("removeAt"))
u=a.length
if(b>=u)throw H.c(P.e0(b,null,null))
return a.splice(b,1)[0]},
P:function(a,b){var u
if(!!a.fixed$length)H.t(P.I("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
ks:function(a){return this.m(a,"")},
kk:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
kj:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.hg())},
ki:function(a,b){return this.kj(a,b,null)},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fz:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ae(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gkh:function(a){if(a.length>0)return a[0]
throw H.c(H.hg())},
gaC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hg())},
fv:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.I("setRange"))
P.bq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.ci(d)
if(e+t>u.gl(d))throw H.c(H.nI())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bn:function(a,b,c,d){return this.fv(a,b,c,d,0)},
dZ:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
a0:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.l4(a,"[","]")},
gW:function(a){return new J.av(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.cI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.I("set length"))
if(b<0)throw H.c(P.ae(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
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
J.l5.prototype={}
J.av.prototype={
gN:function(a){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdA(null)
return!1}this.sdA(u[s]);++this.c
return!0},
sdA:function(a){this.d=H.B(a,H.u(this,0))},
$ib3:1}
J.bG.prototype={
ez:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
f5:function(a,b){var u,t
if(b>20)throw H.c(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bk:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.ay(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.ay(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ay(b))
return a*b},
bl:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iX:function(a,b){if(b<0)throw H.c(H.ay(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia4:1}
J.dG.prototype={$io:1}
J.hj.prototype={}
J.bl.prototype={
a1:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.t(H.cg(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.kY(b,null,null))
return a+b},
b0:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ay(b))
c=P.bq(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ad:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ay(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ad(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ay(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e0(b,null,null))
if(b>c)throw H.c(P.e0(b,null,null))
if(c>a.length)throw H.c(P.e0(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.v(a,b,null)},
l3:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kG:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.t(c,u)+a},
aj:function(a,b){return this.kG(a,b," ")},
eH:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eG:function(a,b){return this.eH(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im0:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a1(this.a,b)},
$acX:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fX.prototype={}
H.c2.prototype={
gW:function(a){return new H.cB(this,this.gl(this),0,[H.at(this,"c2",0)])},
bU:function(a,b){return this.fB(0,H.n(b,{func:1,ret:P.T,args:[H.at(this,"c2",0)]}))}}
H.cB.prototype={
gN:function(a){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.ci(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bj(u))
r=this.c
if(r>=s){this.sb3(null)
return!1}this.sb3(t.M(u,r));++this.c
return!0},
sb3:function(a){this.d=H.B(a,H.u(this,0))},
$ib3:1}
H.hy.prototype={
gW:function(a){return new H.hz(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.aE(this.a)},
M:function(a,b){return this.b.$1(J.fs(this.a,b))},
$ai:function(a,b){return[b]}}
H.hz.prototype={
E:function(){var u=this.b
if(u.E()){this.sb3(this.c.$1(u.gN(u)))
return!0}this.sb3(null)
return!1},
gN:function(a){return this.a},
sb3:function(a){this.a=H.B(a,H.u(this,1))},
$ab3:function(a,b){return[b]}}
H.hA.prototype={
gl:function(a){return J.aE(this.a)},
M:function(a,b){return this.b.$1(J.fs(this.a,b))},
$ac2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cZ.prototype={
gW:function(a){return new H.jq(J.by(this.a),this.b,this.$ti)}}
H.jq.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gN(u)))return!0
return!1},
gN:function(a){var u=this.a
return u.gN(u)}}
H.bZ.prototype={}
H.cX.prototype={
n:function(a,b,c){H.B(c,H.at(this,"cX",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.ek.prototype={}
H.fJ.prototype={
i:function(a){return P.l9(this)},
n:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
return H.nz()},
$iE:1}
H.fK.prototype={
gl:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.dB(b)},
dB:function(a){return this.b[H.H(a)]},
O:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dB(q),u))}}}
H.i7.prototype={}
H.iP.prototype={
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
H.hW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hl.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.j2.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kT.prototype={
$1:function(a){if(!!J.Z(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.f_.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iax:1}
H.cq.prototype={
i:function(a){return"Closure '"+H.c5(this).trim()+"'"},
$ibE:1,
gla:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.iu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.co.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cI(this.a)
else t=typeof u!=="object"?J.dk(u):H.cI(u)
return(t^H.cI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c5(u)+"'")}}
H.iR.prototype={
i:function(a){return this.a}}
H.fF.prototype={
i:function(a){return this.a}}
H.ie.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
gkr:function(a){return this.a===0},
ga7:function(a){return new H.hq(this,[H.u(this,0)])},
bu:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dv(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dv(t,b)}else return this.ko(b)},
ko:function(a){var u=this.d
if(u==null)return!1
return this.cQ(this.c7(u,this.cP(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bp(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bp(r,b)
s=t==null?null:t.b
return s}else return this.kp(b)},
kp:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c7(u,this.cP(a))
s=this.cQ(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ci()
this.b=u}this.dj(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ci()
this.c=t}this.dj(t,b,c)}else this.kq(b,c)},
kq:function(a,b){var u,t,s,r
H.B(a,H.u(this,0))
H.B(b,H.u(this,1))
u=this.d
if(u==null){u=this.ci()
this.d=u}t=this.cP(a)
s=this.c7(u,t)
if(s==null)this.cq(u,t,[this.cj(a,b)])
else{r=this.cQ(s,a)
if(r>=0)s[r].b=b
else s.push(this.cj(a,b))}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bj(this))
u=u.c}},
dj:function(a,b,c){var u
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
u=this.bp(a,b)
if(u==null)this.cq(a,b,this.cj(b,c))
else u.b=c},
hG:function(){this.r=this.r+1&67108863},
cj:function(a,b){var u,t
u=new H.hp(H.B(a,H.u(this,0)),H.B(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hG()
return u},
cP:function(a){return J.dk(a)&0x3ffffff},
cQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.l9(this)},
bp:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
cq:function(a,b,c){a[b]=c},
hj:function(a,b){delete a[b]},
dv:function(a,b){return this.bp(a,b)!=null},
ci:function(){var u=Object.create(null)
this.cq(u,"<non-identifier-key>",u)
this.hj(u,"<non-identifier-key>")
return u}}
H.hp.prototype={}
H.hq.prototype={
gl:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.hr(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hr.prototype={
gN:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bj(u))
else{u=this.c
if(u==null){this.sdi(null)
return!1}else{this.sdi(u.a)
this.c=this.c.c
return!0}}},
sdi:function(a){this.d=H.B(a,H.u(this,0))},
$ib3:1}
H.kA.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kC.prototype={
$1:function(a){return this.a(H.H(a))},
$S:51}
H.hk.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im0:1,
$io6:1}
H.cE.prototype={$icE:1}
H.bH.prototype={$ibH:1}
H.dT.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cF.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oZ(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.q]},
$ay:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dU.prototype={
n:function(a,b,c){H.aj(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hO.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dV.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.cG.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icG:1,
$iS:1}
H.d2.prototype={}
H.d3.prototype={}
H.d4.prototype={}
H.d5.prototype={}
P.js.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:29}
P.jr.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ju.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f5.prototype={
h3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cf(new P.k8(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
h4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cf(new P.k7(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibb:1}
P.k8.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.k7.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fG(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bg.prototype={
kv:function(a){if(this.c!==6)return!0
return this.b.b.d4(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
kn:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fn(u,{func:1,args:[P.R,P.ax]}))return H.lu(r.kX(u,a.a,a.b,null,t,P.ax),s)
else return H.lu(r.d4(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aK.prototype={
f4:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a1
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oO(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aK(0,$.a1,[c])
r=b==null?1:3
this.dk(new P.bg(s,r,a,b,[u,c]))
return s},
l0:function(a,b){return this.f4(a,null,b)},
dk:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibg")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaK")
u=t.a
if(u<4){t.dk(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kr(null,null,u,H.n(new P.jD(this,a),{func:1,ret:-1}))}},
dN:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibg")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaK")
t=p.a
if(t<4){p.dN(a)
return}this.a=t
this.c=p.c}u.a=this.br(a)
t=this.b
t.toString
P.kr(null,null,t,H.n(new P.jH(u,this),{func:1,ret:-1}))}},
cm:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dr:function(a){var u,t,s
u=H.u(this,0)
H.lu(a,{futureOr:1,type:u})
t=this.$ti
if(H.df(a,"$icx",t,"$acx"))if(H.df(a,"$iaK",t,null))P.mp(a,this)
else P.op(a,this)
else{s=this.cm()
H.B(a,u)
this.a=4
this.c=a
P.d1(this,s)}},
ds:function(a,b){var u
H.f(b,"$iax")
u=this.cm()
this.a=8
this.c=new P.am(a,b)
P.d1(this,u)},
$icx:1}
P.jD.prototype={
$0:function(){P.d1(this.a,this.b)},
$S:0}
P.jH.prototype={
$0:function(){P.d1(this.b,this.a.a)},
$S:0}
P.jE.prototype={
$1:function(a){var u=this.a
u.a=0
u.dr(a)},
$S:29}
P.jF.prototype={
$2:function(a,b){H.f(b,"$iax")
this.a.ds(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jG.prototype={
$0:function(){this.a.ds(this.b,this.c)},
$S:0}
P.jK.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f2(H.n(r.d,{func:1}),null)}catch(q){t=H.ak(q)
s=H.cj(q)
if(this.d){r=H.f(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.Z(u).$icx){if(u instanceof P.aK&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l0(new P.jL(o),null)
r.a=!1}},
$S:3}
P.jL.prototype={
$1:function(a){return this.a},
$S:47}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.B(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.d4(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cj(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iam")
r=this.c
if(r.kv(u)&&r.e!=null){q=this.b
q.b=r.kn(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cj(p)
r=H.f(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.es.prototype={}
P.ix.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aK(0,$.a1,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iz(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iA(u,t),{func:1,ret:-1})
W.af(this.a,this.b,r,!1,s)
return t}}
P.iz.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.u(this.b,0)]}}}
P.iA.prototype={
$0:function(){this.b.dr(this.a.a)},
$S:0}
P.cM.prototype={}
P.iy.prototype={}
P.bb.prototype={}
P.am.prototype={
i:function(a){return H.m(this.a)},
$ibD:1}
P.ki.prototype={$ipW:1}
P.kq.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dX()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jR.prototype={
kY:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a1){a.$0()
return}P.mB(null,null,this,a,-1)}catch(s){u=H.ak(s)
t=H.cj(s)
P.kp(null,null,this,u,H.f(t,"$iax"))}},
kZ:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.l===$.a1){a.$1(b)
return}P.mC(null,null,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cj(s)
P.kp(null,null,this,u,H.f(t,"$iax"))}},
jL:function(a,b){return new P.jT(this,H.n(a,{func:1,ret:b}),b)},
cv:function(a){return new P.jS(this,H.n(a,{func:1,ret:-1}))},
e4:function(a,b){return new P.jU(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f2:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.l)return a.$0()
return P.mB(null,null,this,a,b)},
d4:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a1===C.l)return a.$1(b)
return P.mC(null,null,this,a,b,c,d)},
kX:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a1===C.l)return a.$2(b,c)
return P.oP(null,null,this,a,b,c,d,e,f)}}
P.jT.prototype={
$0:function(){return this.a.f2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jS.prototype={
$0:function(){return this.a.kY(this.b)},
$S:3}
P.jU.prototype={
$1:function(a){var u=this.c
return this.a.kZ(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jP.prototype={
gW:function(a){var u=new P.eH(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a0:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ica")!=null}else{t=this.hf(b)
return t}},
hf:function(a){var u=this.d
if(u==null)return!1
return this.c5(this.dC(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.li()
this.b=u}return this.dm(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.li()
this.c=t}return this.dm(t,b)}else return this.h6(0,b)},
h6:function(a,b){var u,t,s
H.B(b,H.u(this,0))
u=this.d
if(u==null){u=P.li()
this.d=u}t=this.dt(b)
s=u[t]
if(s==null)u[t]=[this.c2(b)]
else{if(this.c5(s,b)>=0)return!1
s.push(this.c2(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iF(this.c,b)
else return this.iC(0,b)},
iC:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dC(u,b)
s=this.c5(t,b)
if(s<0)return!1
this.dT(t.splice(s,1)[0])
return!0},
dm:function(a,b){H.B(b,H.u(this,0))
if(H.f(a[b],"$ica")!=null)return!1
a[b]=this.c2(b)
return!0},
iF:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ica")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dq:function(){this.r=1073741823&this.r+1},
c2:function(a){var u,t
u=new P.ca(H.B(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dq()
return u},
dT:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dq()},
dt:function(a){return J.dk(a)&1073741823},
dC:function(a,b){return a[this.dt(b)]},
c5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.ca.prototype={}
P.eH.prototype={
gN:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bj(u))
else{u=this.c
if(u==null){this.sdn(null)
return!1}else{this.sdn(H.B(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdn:function(a){this.d=H.B(a,H.u(this,0))},
$ib3:1}
P.hs.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:7}
P.ht.prototype={$ii:1,$ib:1}
P.y.prototype={
gW:function(a){return new H.cB(a,this.gl(a),0,[H.bR(this,a,"y",0)])},
M:function(a,b){return this.j(a,b)},
l2:function(a,b){var u,t
u=H.d([],[H.bR(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
l1:function(a){return this.l2(a,!0)},
p:function(a,b){var u,t
u=[H.bR(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bn(t,0,this.gl(a),a)
C.a.bn(t,this.gl(a),t.length,b)
return t},
kf:function(a,b,c,d){var u
H.B(d,H.bR(this,a,"y",0))
P.bq(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l4(a,"[","]")}}
P.hv.prototype={}
P.hw.prototype={
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
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bR(this,a,"ag",0),H.bR(this,a,"ag",1)]})
for(u=J.by(this.ga7(a));u.E();){t=u.gN(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aE(this.ga7(a))},
i:function(a){return P.l9(a)},
$iE:1}
P.k9.prototype={
n:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hx.prototype={
j:function(a,b){return J.lD(this.a,b)},
n:function(a,b,c){J.kV(this.a,H.B(b,H.u(this,0)),H.B(c,H.u(this,1)))},
O:function(a,b){J.lF(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aE(this.a)},
i:function(a){return J.au(this.a)},
$iE:1}
P.el.prototype={}
P.jW.prototype={
ax:function(a,b){var u
for(u=J.by(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gN(u))},
i:function(a){return P.l4(this,"{","}")},
M:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=P.ot(this,this.r,H.u(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
$ii:1,
$im8:1}
P.eI.prototype={}
P.fa.prototype={}
P.fB.prototype={
kx:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bq(c,a0,b.length,null,null,null)
u=$.ne()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.b.I(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kz(C.b.I(b,n))
j=H.kz(C.b.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.b.v(b,s,t)
r.a=g+H.c6(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.v(b,s,a0)
f=g.length
if(q>=0)P.lJ(b,p,a0,q,o,f)
else{e=C.f.bl(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b0(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lJ(b,p,a0,q,o,d)
else{e=C.f.bl(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.b.b0(b,a0,a0,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.o],P.e]}}
P.fC.prototype={
$abC:function(){return[[P.b,P.o],P.e]}}
P.bW.prototype={}
P.bC.prototype={}
P.fZ.prototype={
$abW:function(){return[P.e,[P.b,P.o]]}}
P.he.prototype={
i:function(a){return this.a}}
P.hd.prototype={
hg:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.al("")
if(r>b)q.a+=C.b.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ns(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.e,P.e]}}
P.ja.prototype={
gke:function(){return C.S}}
P.jc.prototype={
b9:function(a,b,c){var u,t,s
c=P.bq(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kg(t)
if(s.hs(a,b,c)!==c)s.dV(J.nm(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oJ(0,s.b,t.length)))},
cD:function(a){return this.b9(a,0,null)},
$abC:function(){return[P.e,[P.b,P.o]]}}
P.kg.prototype={
dV:function(a,b){var u,t,s,r,q
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
hs:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dV(r,C.b.I(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jb.prototype={
b9:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.og(!1,a,b,c)
if(u!=null)return u
c=P.bq(b,c,J.aE(a),null,null,null)
t=new P.al("")
s=new P.ke(!1,t)
s.b9(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c6(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cD:function(a){return this.b9(a,0,null)},
$abC:function(){return[[P.b,P.o],P.e]}}
P.ke.prototype={
b9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kf(this,b,c,a)
$label0$0:for(q=J.ci(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bV()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bk(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.G,m)
if(u<=C.G[m]){m=P.a7("Overlong encoding of 0x"+C.f.bk(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bk(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c6(u)
this.c=!1}for(m=o<c;m;){l=P.oQ(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bk(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bk(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kf.prototype={
$2:function(a,b){this.a.b.a+=P.e7(this.d,a,b)},
$S:46}
P.T.prototype={}
P.an.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aW(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nA(H.o1(this))
t=P.dv(H.o_(this))
s=P.dv(H.nW(this))
r=P.dv(H.nX(this))
q=P.dv(H.nZ(this))
p=P.dv(H.o0(this))
o=P.nB(H.nY(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.b2.prototype={
p:function(a,b){return new P.b2(C.f.p(this.a,b.ghl()))},
u:function(a,b){return new P.b2(C.f.u(this.a,b.ghl()))},
w:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fW()
t=this.a
if(t<0)return"-"+new P.b2(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.fV().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fV.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.fW.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.bD.prototype={}
P.dX.prototype={
i:function(a){return"Throw of null."}}
P.aM.prototype={
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
p=P.h0(this.b)
return r+q+": "+p}}
P.c7.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hf.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t
u=H.aj(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.j3.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j0.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c9.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fI.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h0(u)+"."}}
P.hZ.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.e6.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fP.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eA.prototype={
i:function(a){return"Exception: "+this.a}}
P.h9.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.v(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.I(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.a1(r,m)
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
g=""}f=C.b.v(r,i,j)
return t+h+f+g+"\n"+C.b.t(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bE.prototype={}
P.o.prototype={}
P.i.prototype={
bU:function(a,b){var u=H.at(this,"i",0)
return new H.cZ(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gW(this)
for(t=0;u.E();)++t
return t},
gaO:function(a){var u,t
u=this.gW(this)
if(!u.E())throw H.c(H.hg())
t=u.gN(u)
if(u.E())throw H.c(H.nJ())
return t},
M:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.E();){s=u.gN(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nH(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.N.prototype={
gL:function(a){return P.R.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
w:function(a,b){return this===b},
gL:function(a){return H.cI(this)},
i:function(a){return"Instance of '"+H.c5(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.e.prototype={$im0:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipw:1}
P.j8.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.H(b)
t=J.dg(b).eG(b,"=")
if(t===-1){if(b!=="")J.kV(a,P.lk(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.v(b,0,t)
r=C.b.au(b,t+1)
u=this.a
J.kV(a,P.lk(s,0,s.length,u,!0),P.lk(r,0,r.length,u,!0))}return a},
$S:44}
P.j5.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j6.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j7.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fq(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cb.prototype={
gfd:function(){return this.b},
gcO:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbP:function(a){var u=this.d
if(u==null)return P.mt(this.a)
return u},
gcZ:function(a){var u=this.f
return u==null?"":u},
geB:function(){var u=this.r
return u==null?"":u},
d3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
g=P.lj(g,0,0,h)
return new P.cb(i,j,c,f,d,g,this.r)},
f_:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gd_:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siB(new P.el(P.mi(u==null?"":u,C.m),[t,t]))}return this.Q},
geC:function(){return this.c!=null},
geF:function(){return this.f!=null},
geD:function(){return this.r!=null},
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
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.Z(b).$ile)if(this.a==b.gbY())if(this.c!=null===b.geC())if(this.b==b.gfd())if(this.gcO(this)==b.gcO(b))if(this.gbP(this)==b.gbP(b))if(this.e===b.geV(b)){u=this.f
t=u==null
if(!t===b.geF()){if(t)u=""
if(u===b.gcZ(b)){u=this.r
t=u==null
if(!t===b.geD()){if(t)u=""
u=u===b.geB()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.b.gL(this.i(0))
this.z=u}return u},
siB:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$ile:1,
gbY:function(){return this.a},
geV:function(a){return this.e}}
P.ka.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.kb.prototype={
$1:function(a){return P.fb(C.a8,a,C.m,!1)},
$S:17}
P.kd.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fb(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fb(C.v,b,C.m,!0))}},
$S:14}
P.kc.prototype={
$2:function(a,b){var u,t
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(u=J.by(H.mR(b,"$ii")),t=this.a;u.E();)t.$2(a,H.H(u.gN(u)))},
$S:38}
P.j4.prototype={
gfb:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.b.eH(t,"?",u)
r=t.length
if(s>=0){q=P.db(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.jy(this,"data",null,null,null,P.db(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.km.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kl.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nn(u,0,96,b)
return u},
$S:35}
P.kn.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.I(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.ko.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.I(b,0),t=C.b.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.jZ.prototype={
geC:function(){return this.c>0},
geE:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
geF:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geD:function(){return this.r<this.a.length},
gdG:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdH:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbY:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdG()){this.x="http"
u="http"}else if(this.gdH()){this.x="https"
u="https"}else if(u===4&&C.b.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.b.v(this.a,0,u)
this.x=u}return u},
gfd:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gcO:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbP:function(a){var u
if(this.geE()){u=this.d
if(typeof u!=="number")return u.p()
return P.fq(C.b.v(this.a,u+1,this.e),null,null)}if(this.gdG())return 80
if(this.gdH())return 443
return 0},
geV:function(a){return C.b.v(this.a,this.e,this.f)},
gcZ:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.v(this.a,u+1,t):""},
geB:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.au(t,u+1):""},
gd_:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.a9
u=P.e
return new P.el(P.mi(this.gcZ(this),C.m),[u,u])},
d3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbY()
u=i==="file"
t=this.c
j=t>0?C.b.v(this.a,this.b+3,t):""
f=this.geE()?this.gbP(this):null
t=this.c
if(t>0)c=C.b.v(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.v(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a5(d,"/"))d="/"+d
g=P.lj(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.au(t,s+1)
return new P.cb(i,j,c,f,d,g,b)},
f_:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.b.gL(this.a)
this.y=u}return u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Z(b).$ile&&this.a===b.i(0)},
i:function(a){return this.a},
$ile:1}
P.jy.prototype={}
W.z.prototype={}
W.ft.prototype={
gl:function(a){return a.length}}
W.dl.prototype={
i:function(a){return String(a)},
$idl:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.cn.prototype={$icn:1}
W.bU.prototype={$ibU:1}
W.bz.prototype={$ibz:1}
W.bV.prototype={
fj:function(a,b,c){var u=this.ht(a,b,P.oW(c,null))
return u},
ht:function(a,b,c){return a.getContext(b,c)},
$ibV:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.cr.prototype={$icr:1}
W.fL.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cs.prototype={
gl:function(a){return a.length}}
W.fM.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fN.prototype={
gl:function(a){return a.length}}
W.fO.prototype={
gl:function(a){return a.length}}
W.fR.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.ct.prototype={
jG:function(a,b){return a.adoptNode(b)},
d7:function(a,b){return a.getElementById(b)}}
W.fS.prototype={
i:function(a){return String(a)}}
W.dx.prototype={
jZ:function(a,b){return a.createHTMLDocument(b)}}
W.dy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a4],"$aab")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.dz.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaN(a))+" x "+H.m(this.gaJ(a))},
w:function(a,b){var u
if(b==null)return!1
if(!H.df(b,"$iab",[P.a4],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbO(b)&&a.top===u.gbS(b)&&this.gaN(a)===u.gaN(b)&&this.gaJ(a)===u.gaJ(b)},
gL:function(a){return W.mr(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaN(a)),C.e.gL(this.gaJ(a)))},
ge5:function(a){return a.bottom},
gaJ:function(a){return a.height},
gbO:function(a){return a.left},
gbR:function(a){return a.right},
gbS:function(a){return a.top},
gaN:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a4]}}
W.fT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.H(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.fU.prototype={
gl:function(a){return a.length}}
W.jw.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iV")},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.kW(this.a,c,u[b])},
h:function(a,b){J.lE(this.a,b)
return b},
gW:function(a){var u=this.l1(this)
return new J.av(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gjK:function(a){return new W.jz(a)},
gcC:function(a){return new W.jw(a,a.children)},
ge7:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
ah:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lQ
if(u==null){u=H.d([],[W.aC])
t=new W.dW(u)
C.a.h(u,W.mq(null))
C.a.h(u,W.ms())
$.lQ=t
d=t}else d=u
u=$.lP
if(u==null){u=new W.fc(d)
$.lP=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation
t=(t&&C.T).jZ(t,"")
$.bk=t
$.l1=t.createRange()
t=$.bk
t.toString
t=t.createElement("base")
H.f(t,"$icn")
t.href=u.baseURI
u=$.bk.head;(u&&C.V).F(u,t)}u=$.bk
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$ibz")}u=$.bk
if(!!this.$ibz)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bk.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a0(C.a6,a.tagName)){u=$.l1;(u&&C.M).fq(u,s)
u=$.l1
r=(u&&C.M).jX(u,b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(u=J.ac(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lH(s)
c.d9(r)
C.z.jG(document,r)
return r},
jY:function(a,b,c){return this.ah(a,b,c,null)},
fu:function(a,b,c,d){a.textContent=null
this.F(a,this.ah(a,b,c,d))},
ft:function(a,b){return this.fu(a,b,null,null)},
b2:function(a,b){return a.getAttribute(b)},
iD:function(a,b){return a.removeAttribute(b)},
fs:function(a,b,c){return a.setAttribute(b,c)},
$iV:1,
gl_:function(a){return a.tagName}}
W.fY.prototype={
$1:function(a){return!!J.Z(H.f(a,"$iG")).$iV},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jA:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.h7(a,b,c,!1)},
h7:function(a,b,c,d){return a.addEventListener(b,H.cf(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aG.prototype={$iaG:1}
W.cw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icw:1,
$aD:function(){return[W.aG]}}
W.h4.prototype={
gl:function(a){return a.length}}
W.h8.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.dD.prototype={}
W.dE.prototype={
iJ:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.dF.prototype={}
W.cz.prototype={$icz:1}
W.cA.prototype={$icA:1}
W.b4.prototype={$ib4:1}
W.dK.prototype={}
W.dN.prototype={
i:function(a){return String(a)},
$idN:1}
W.hH.prototype={
gl:function(a){return a.length}}
W.hI.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.hJ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hK.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.hL(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aR.prototype={$iaR:1}
W.hM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.ah.prototype={$iah:1}
W.as.prototype={
gaO:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.m9("No elements"))
if(t>1)throw H.c(P.m9("More than one element"))
return u.firstChild},
ax:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ac(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.kW(u,c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dB(u,u.length,-1,[H.bR(C.aa,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
kP:function(a){var u=a.parentNode
if(u!=null)J.fr(u,a)},
kU:function(a,b){var u,t
try{u=a.parentNode
J.kW(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fA(a):u},
F:function(a,b){return a.appendChild(H.f(b,"$iG"))},
iE:function(a,b){return a.removeChild(b)},
iI:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.e_.prototype={
jX:function(a,b){return a.createContextualFragment(b)},
fq:function(a,b){return a.selectNodeContents(b)}}
W.ic.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.id(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.id.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ig.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.aU.prototype={$iaU:1}
W.is.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.iv.prototype={
j:function(a,b){return this.dD(a,H.H(b))},
n:function(a,b,c){this.iQ(a,b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hx(a,u)
if(t==null)return
b.$2(t,this.dD(a,t))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.iw(u))
return u},
gl:function(a){return a.length},
dD:function(a,b){return a.getItem(b)},
hx:function(a,b){return a.key(b)},
iQ:function(a,b,c){return a.setItem(b,c)},
$aag:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.iw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aH.prototype={$iaH:1}
W.ba.prototype={$iba:1}
W.e8.prototype={
ah:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=W.nC("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ax(0,new W.as(u))
return t},
hv:function(a,b){return a.insertRow(b)}}
W.e9.prototype={
ah:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
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
new W.as(t).ax(0,new W.as(r))
return t},
dF:function(a,b){return a.insertCell(b)}}
W.iC.prototype={
ah:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaO(u)
t.toString
s.toString
new W.as(t).ax(0,new W.as(s))
return t}}
W.cN.prototype={$icN:1}
W.aW.prototype={$iaW:1}
W.aI.prototype={$iaI:1}
W.iE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.iF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.iI.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aD:function(){return[W.aX]}}
W.iN.prototype={
gl:function(a){return a.length}}
W.bN.prototype={}
W.j9.prototype={
i:function(a){return String(a)}}
W.jo.prototype={
gl:function(a){return a.length}}
W.bf.prototype={
gk8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
gk7:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibf:1}
W.d_.prototype={
iK:function(a,b){return a.requestAnimationFrame(H.cf(H.n(b,{func:1,ret:-1,args:[P.a4]}),1))},
hm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d0.prototype={$id0:1}
W.jx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iY")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aD:function(){return[W.Y]}}
W.ev.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
w:function(a,b){var u
if(b==null)return!1
if(!H.df(b,"$iab",[P.a4],"$aab"))return!1
u=J.ac(b)
return a.left===u.gbO(b)&&a.top===u.gbS(b)&&a.width===u.gaN(b)&&a.height===u.gaJ(b)},
gL:function(a){return W.mr(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaJ:function(a){return a.height},
gaN:function(a){return a.width}}
W.jM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aD:function(){return[W.aO]}}
W.eN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.k_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.k3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.I("Cannot assign element of immutable List."))},
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
W.jv.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.ac(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b2(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.f(u[r],"$id0")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aag:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jz.prototype={
j:function(a,b){return J.kX(this.a,H.H(b))},
n:function(a,b,c){J.nr(this.a,b,c)},
gl:function(a){return this.ga7(this).length}}
W.jA.prototype={}
W.lh.prototype={}
W.jB.prototype={}
W.jC.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:34}
W.bP.prototype={
fO:function(a){var u,t
u=$.lB()
if(u.gkr(u)){for(t=0;t<262;++t)u.n(0,C.a5[t],W.p5())
for(t=0;t<12;++t)u.n(0,C.B[t],W.p6())}},
aX:function(a){return $.nf().a0(0,W.cu(a))},
ay:function(a,b,c){var u,t,s
u=W.cu(a)
t=$.lB()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lq(s.$4(a,b,c,this))},
$iaC:1}
W.D.prototype={
gW:function(a){return new W.dB(a,this.gl(a),-1,[H.bR(this,a,"D",0)])}}
W.dW.prototype={
aX:function(a){return C.a.dZ(this.a,new W.hU(a))},
ay:function(a,b,c){return C.a.dZ(this.a,new W.hT(a,b,c))},
$iaC:1}
W.hU.prototype={
$1:function(a){return H.f(a,"$iaC").aX(this.a)},
$S:25}
W.hT.prototype={
$1:function(a){return H.f(a,"$iaC").ay(this.a,this.b,this.c)},
$S:25}
W.eV.prototype={
h0:function(a,b,c,d){var u,t,s
this.a.ax(0,c)
u=b.bU(0,new W.jX())
t=b.bU(0,new W.jY())
this.b.ax(0,u)
s=this.c
s.ax(0,C.H)
s.ax(0,t)},
aX:function(a){return this.a.a0(0,W.cu(a))},
ay:function(a,b,c){var u,t
u=W.cu(a)
t=this.c
if(t.a0(0,H.m(u)+"::"+b))return this.d.jH(c)
else if(t.a0(0,"*::"+b))return this.d.jH(c)
else{t=this.b
if(t.a0(0,H.m(u)+"::"+b))return!0
else if(t.a0(0,"*::"+b))return!0
else if(t.a0(0,H.m(u)+"::*"))return!0
else if(t.a0(0,"*::*"))return!0}return!1},
$iaC:1}
W.jX.prototype={
$1:function(a){return!C.a.a0(C.B,H.H(a))},
$S:26}
W.jY.prototype={
$1:function(a){return C.a.a0(C.B,H.H(a))},
$S:26}
W.k5.prototype={
ay:function(a,b,c){if(this.fF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.kX(a,"template")==="")return this.e.a0(0,b)
return!1}}
W.k6.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.H(a))},
$S:17}
W.k4.prototype={
aX:function(a){var u=J.Z(a)
if(!!u.$icJ)return!1
u=!!u.$ir
if(u&&W.cu(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aX(a)},
$iaC:1}
W.dB.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdE(J.lD(this.a,u))
this.c=u
return!0}this.sdE(null)
this.c=t
return!1},
gN:function(a){return this.d},
sdE:function(a){this.d=H.B(a,H.u(this,0))},
$ib3:1}
W.aC.prototype={}
W.jV.prototype={$ipI:1}
W.fc.prototype={
d9:function(a){new W.kh(this).$2(a,null)},
b6:function(a,b){if(b==null)J.lH(a)
else J.fr(b,a)},
iO:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.no(a)
s=J.kX(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ak(o)}q="element unprintable"
try{q=J.au(a)}catch(o){H.ak(o)}try{p=W.cu(a)
this.iN(H.f(a,"$iV"),b,u,q,p,H.f(t,"$iE"),H.H(s))}catch(o){if(H.ak(o) instanceof P.aM)throw o
else{this.b6(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b6(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aX(a)){this.b6(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ay(a,"is",g)){this.b6(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga7(f).length-1,u=f.a,r=J.ac(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.ay(a,J.nt(q),r.b2(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b2(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b2(u,q)
r.iD(u,q)}}if(!!J.Z(a).$icN)this.d9(a.content)},
$ipt:1}
W.kh.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iO(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b6(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ak(r)
q=H.f(u,"$iG")
if(s){p=q.parentNode
if(p!=null)J.fr(p,q)}else J.fr(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:45}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
P.k0.prototype={
ey:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
d5:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Z(a)
if(!!t.$ian)return new Date(a.a)
if(!!t.$io6)throw H.c(P.j1("structured clone of RegExp"))
if(!!t.$iaG)return a
if(!!t.$ibU)return a
if(!!t.$icw)return a
if(!!t.$icz)return a
if(!!t.$icE||!!t.$ibH)return a
if(!!t.$iE){s=this.ey(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.O(a,new P.k2(u,this))
return u.a}if(!!t.$ib){s=this.ey(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.jW(a,s)}throw H.c(P.j1("structured clone of other type"))},
jW:function(a,b){var u,t,s,r
u=J.ci(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.d5(u.j(a,r)))
return s}}
P.k2.prototype={
$2:function(a,b){this.a.a[a]=this.b.d5(b)},
$S:7}
P.ks.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k1.prototype={}
P.h5.prototype={
gbq:function(){var u,t,s
u=this.b
t=H.at(u,"y",0)
s=W.V
return new H.hy(new H.cZ(u,H.n(new P.h6(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h7(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbq()
J.nq(u.b.$1(J.fs(u.a,b)),c)},
h:function(a,b){J.lE(this.b.a,b)},
gl:function(a){return J.aE(this.gbq().a)},
j:function(a,b){var u=this.gbq()
return u.b.$1(J.fs(u.a,b))},
gW:function(a){var u=P.lT(this.gbq(),!1,W.V)
return new J.av(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.h6.prototype={
$1:function(a){return!!J.Z(H.f(a,"$iG")).$iV},
$S:22}
P.h7.prototype={
$1:function(a){return H.l(H.f(a,"$iG"),"$iV")},
$S:33}
P.jQ.prototype={
gbR:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.B(u+this.c,H.u(this,0))},
ge5:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.B(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.df(b,"$iab",[P.a4],"$aab")){u=this.a
t=J.ac(b)
if(u==t.gbO(b)){s=this.b
if(s==t.gbS(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.B(u+this.c,r)===t.gbR(b)){if(typeof s!=="number")return s.p()
u=H.B(s+this.d,r)===t.ge5(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.dk(u)
s=this.b
r=J.dk(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gL(H.B(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.B(s+this.d,q))
return P.os(P.jO(P.jO(P.jO(P.jO(0,t),r),u),q))}}
P.ab.prototype={
gbO:function(a){return this.a},
gbS:function(a){return this.b},
gaN:function(a){return this.c},
gaJ:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aD:function(){return[P.b8]}}
P.i3.prototype={
gl:function(a){return a.length}}
P.cJ.prototype={$icJ:1}
P.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.H(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.r.prototype={
gcC:function(a){return new P.h5(a,new W.as(a))},
ah:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aC])
C.a.h(u,W.mq(null))
C.a.h(u,W.ms())
C.a.h(u,new W.k4())
c=new W.fc(new W.dW(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jY(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.as(r)
p=u.gaO(u)
for(u=J.ac(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ir:1}
P.bc.prototype={$ibc:1}
P.iO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aD(a,b)},
n:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
aD:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aD:function(){return[P.bc]}}
P.eF.prototype={}
P.eG.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.f8.prototype={}
P.f9.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
P.fx.prototype={
gl:function(a){return a.length}}
P.fy.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new P.fz(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fA.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.hY.prototype={
gl:function(a){return a.length}}
P.et.prototype={}
P.dn.prototype={$idn:1}
P.dC.prototype={$idC:1}
P.dZ.prototype={$idZ:1}
P.c8.prototype={
e_:function(a,b,c){return a.attachShader(b,c)},
az:function(a,b,c){return a.bindBuffer(b,c)},
jM:function(a,b,c){return a.bindFramebuffer(b,c)},
jN:function(a,b,c){return a.blendFunc(b,c)},
e6:function(a,b,c,d){return a.bufferData(b,c,d)},
jQ:function(a,b){return a.clear(b)},
jR:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jS:function(a,b){return a.clearDepth(b)},
jU:function(a,b){return a.compileShader(b)},
k_:function(a,b){return a.createShader(b)},
k5:function(a,b){return a.deleteProgram(b)},
k6:function(a,b){return a.deleteShader(b)},
k9:function(a,b){return a.depthFunc(b)},
ka:function(a,b){return a.disable(b)},
e8:function(a,b){return a.disableVertexAttribArray(b)},
kc:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cG:function(a,b){return a.enable(b)},
eb:function(a,b){return a.enableVertexAttribArray(b)},
ff:function(a,b,c){return a.getActiveAttrib(b,c)},
fg:function(a,b,c){return a.getActiveUniform(b,c)},
fh:function(a,b,c){return a.getAttribLocation(b,c)},
d8:function(a,b){return a.getParameter(b)},
fk:function(a,b){return a.getProgramInfoLog(b)},
bW:function(a,b,c){return a.getProgramParameter(b,c)},
fl:function(a,b){return a.getShaderInfoLog(b)},
fm:function(a,b,c){return a.getShaderParameter(b,c)},
fn:function(a,b,c){return a.getUniformLocation(b,c)},
kt:function(a,b){return a.linkProgram(b)},
fw:function(a,b,c){return a.shaderSource(b,c)},
U:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fa:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fc:function(a,b){return a.useProgram(b)},
l4:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
l5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic8:1}
P.e3.prototype={$ie3:1}
P.ej.prototype={$iej:1}
P.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.br(this.hw(a,b))},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.I("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
hw:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.eY.prototype={}
P.eZ.prototype={}
O.a5.prototype={
c0:function(a){this.shB(H.d([],[a]))
this.sdL(null)
this.sdI(null)
this.sdM(null)},
da:function(a,b,c){var u=H.at(this,"a5",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdL(b)
this.sdI(a)
this.sdM(c)},
bm:function(a,b){return this.da(a,null,b)},
il:function(a){var u
H.k(a,"$ii",[H.at(this,"a5",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hJ:function(a,b){var u
H.k(b,"$ii",[H.at(this,"a5",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.av(u,u.length,0,[H.u(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.at(this,"a5",0)
H.B(b,u)
u=[u]
if(this.il(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hJ(s,H.d([b],u))}},
shB:function(a){this.a=H.k(a,"$ib",[H.at(this,"a5",0)],"$ab")},
sdL:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.at(this,"a5",0)]]})},
sdI:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a5",0)]]})},
sdM:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a5",0)]]})},
$ii:1}
O.cC.prototype={
gl:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
fM:function(a){var u=this.b
if(u!=null)u.J(a)},
aP:function(){return this.fM(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gaC(u)
else return V.c3()},
eY:function(a){var u=this.a
if(a==null)C.a.h(u,V.c3())
else C.a.h(u,a)
this.aP()},
cX:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
sc9:function(a){this.a=H.k(a,"$ib",[V.ap],"$ab")}}
E.fD.prototype={}
E.ao.prototype={
dl:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
if(t.f==null)t.dl()}},
sac:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().P(0,this.geQ())
t=this.c
if(t!=null)t.gC().h(0,this.geQ())
s=new D.J("shape",u,this.c,this,[F.e4])
s.b=!0
this.ab(s)}},
sbi:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gC().P(0,this.geS())
t=this.f
this.f=a
if(a!=null)a.gC().h(0,this.geS())
this.dl()
s=new D.J("technique",t,this.f,this,[O.bM])
s.b=!0
this.ab(s)}},
saL:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gC().P(0,this.geO())
if(a!=null)a.gC().h(0,this.geO())
this.r=a
t=new D.J("mover",u,a,this,[U.ad])
t.b=!0
this.ab(t)}},
ar:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.as(0,b,this):null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.J("matrix",s,t,this,[V.ap])
r.b=!0
this.ab(r)}u=this.f
if(u!=null)u.ar(0,b)
for(u=this.y.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.E();)u.d.ar(0,b)},
b_:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga2(u))
else C.a.h(u.a,t.t(0,u.ga2(u)))
u.aP()
a.eZ(this.f)
u=a.dy
s=(u&&C.a).gaC(u)
if(s!=null&&this.d!=null)s.kT(a,this)
for(u=this.y.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.E();)u.d.b_(a)
a.eX()
a.dx.cX()},
gC:function(){var u=this.z
if(u==null){u=D.W()
this.z=u}return u},
ab:function(a){var u=this.z
if(u!=null)u.J(a)},
a4:function(){return this.ab(null)},
eR:function(a){H.f(a,"$iA")
this.e=null
this.ab(a)},
kE:function(){return this.eR(null)},
eT:function(a){this.ab(H.f(a,"$iA"))},
kF:function(){return this.eT(null)},
eP:function(a){this.ab(H.f(a,"$iA"))},
kD:function(){return this.eP(null)},
eN:function(a){this.ab(H.f(a,"$iA"))},
kA:function(){return this.eN(null)},
kz:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.geM(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sam(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
kC:function(a,b){var u,t
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.gW(b),t=this.geM();u.E();)u.gN(u).gC().P(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfN:function(a,b){this.y=H.k(b,"$ia5",[E.ao],"$aa5")},
$ibp:1}
E.i8.prototype={
fI:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.an(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cC()
t=[V.ap]
u.sc9(H.d([],t))
u.b=null
u.gC().h(0,new E.i9(this))
this.cy=u
u=new O.cC()
u.sc9(H.d([],t))
u.b=null
u.gC().h(0,new E.ia(this))
this.db=u
u=new O.cC()
u.sc9(H.d([],t))
u.b=null
u.gC().h(0,new E.ib(this))
this.dx=u
this.sj_(H.d([],[O.bM]))
u=this.dy;(u&&C.a).h(u,null)
this.siW(new H.aQ([P.e,A.cK]))},
gkO:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga2(u)
t=this.db
t=u.t(0,t.ga2(t))
this.z=t
u=t}return u},
eZ:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaC(u):a;(u&&C.a).h(u,t)},
eX:function(){var u=this.dy
if(u.length>1)u.pop()},
sj_:function(a){this.dy=H.k(a,"$ib",[O.bM],"$ab")},
siW:function(a){this.fr=H.k(a,"$iE",[P.e,A.cK],"$aE")}}
E.i9.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ia.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.ib.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ef.prototype={
dg:function(a){H.f(a,"$iA")
this.f0()},
df:function(){return this.dg(null)},
gkm:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.lO(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.an(u,!1)
return s/t},
dP:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.t()
if(typeof u!=="number")return H.F(u)
s=C.e.ez(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.t()
r=C.e.ez(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mc(C.y,this.gkV())}},
f0:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iH(this),{func:1,ret:-1,args:[P.a4]})
C.O.hm(u)
C.O.iK(u,W.mG(t,P.a4))}},
kS:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dP()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.an(r,!1)
s.y=P.lO(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.b_(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ak(q)
t=H.cj(q)
P.az("Error: "+H.m(u))
P.az("Stack: "+H.m(t))
throw H.c(u)}}}
E.iH.prototype={
$1:function(a){var u
H.pg(a)
u=this.a
if(u.ch){u.ch=!1
u.kS()}},
$S:54}
Z.er.prototype={$ipn:1}
Z.dp.prototype={
bt:function(a){var u,t,s
try{t=a.a
C.c.eb(t,this.e)
C.c.l4(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ak(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.jp.prototype={$ipo:1}
Z.dq.prototype={
aZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bt:function(a){var u,t
u=this.a
C.c.az(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bt(a)},
f8:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.e8(s,u[t].e)
C.c.az(s,this.a.a,null)},
b_:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.c.az(t,p,r.b)
C.c.kc(t,q.a,q.b,5123,0)
C.c.az(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.au(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shu:function(a){this.b=H.k(a,"$ib",[Z.bF],"$ab")},
$ipx:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c5(this.c)+"'")+"]"}}
Z.be.prototype={
gdc:function(a){var u,t
u=this.a
t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=2
if((u&$.bx().a)!==0)t+=3
if((u&$.dh().a)!==0)t+=3
if((u&$.di().a)!==0)t+=4
if((u&$.cm().a)!==0)++t
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
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.di()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0)if(s===a)return u
return $.nd()},
w:function(a,b){if(b==null)return!1
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
if((t&$.dh().a)!==0)C.a.h(u,"Clr3")
if((t&$.di().a)!==0)C.a.h(u,"Clr4")
if((t&$.cm().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fG.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sam(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.a0(u,b)
if(u===!0){u=this.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a0(u,b)
if(u===!0){u=this.b
t=(u&&C.a).P(u,b)||t}return t},
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
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.O(P.lT(t,!0,{func:1,ret:-1,args:[D.A]}),new D.h1(u))
t=this.b
if(t!=null){this.saU(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.O(t,new D.h2(u))}return!0},
kW:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
ak:function(a){return this.kW(a,!0,!1)},
sam:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saU:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.h1.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.h2.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.A.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dr.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dJ.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hm.prototype={
kL:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kH:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
siA:function(a){this.d=H.k(a,"$im8",[P.o],"$am8")}}
X.dO.prototype={}
X.hu.prototype={
b4:function(a,b){var u,t,s,r,q,p,o,n
u=new P.an(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.t()
q=b.b
p=this.ch
if(typeof q!=="number")return q.t()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gaY()
n=new X.bo(a,V.bK(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cW:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fp()
if(typeof u!=="number")return u.bV()
this.r=(u&~t)>>>0
return!1},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b4(a,b))
return!0},
kM:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaY()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.t()
o=a.b
n=this.cy
if(typeof o!=="number")return o.t()
r=new X.cD(new V.X(q*p,o*n),t,s,new P.an(r,!1),this)
r.b=!0
u.J(r)
return!0},
i8:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.an(Date.now(),!1)
t=this.f
s=new X.dO(c,a,this.a.gaY(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bK()}}
X.aB.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bo.prototype={}
X.hN.prototype={
c6:function(a,b,c){var u,t,s
u=new P.an(Date.now(),!1)
t=this.a.gaY()
s=new X.bo(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cW:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.c6(a,b,!0))
return!0},
bh:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fp()
if(typeof u!=="number")return u.bV()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.c6(a,b,!0))
return!0},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.c6(a,b,!1))
return!0},
kN:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaY()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.t()
p=a.b
o=this.ch
if(typeof p!=="number")return p.t()
s=new X.cD(new V.X(r*q,p*o),t,b,new P.an(s,!1),this)
s.b=!0
u.J(s)
return!0},
ge9:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
gbT:function(){var u=this.c
if(u==null){u=D.W()
this.c=u}return u},
geK:function(){var u=this.d
if(u==null){u=D.W()
this.d=u}return u}}
X.cD.prototype={}
X.i2.prototype={}
X.eh.prototype={}
X.iL.prototype={
b4:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.an(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=this.a.gaY()
r=new X.eh(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kK:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.J(this.b4(a,!0))
return!0},
kI:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.J(this.b4(a,!0))
return!0},
kJ:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.J(this.b4(a,!1))
return!0}}
X.em.prototype={
gaY:function(){var u=this.a
return V.m6(0,0,C.x.ge7(u).c,C.x.ge7(u).d)},
dw:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dJ(u,new X.aB(t,a.altKey,a.shiftKey))},
aV:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aB(t,a.altKey,a.shiftKey)},
cr:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.aa(t-r,s-q)},
b5:function(a){return new V.X(a.movementX,a.movementY)},
cl:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.aq(p.pageX)
C.e.aq(p.pageY)
n=u.left
C.e.aq(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.aq(p.pageY)-u.top))}return t},
aF:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dr(u,new X.aB(t,a.altKey,a.shiftKey))},
ca:function(a){var u,t,s,r,q,p
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
i2:function(a){this.f=!0},
hR:function(a){this.f=!1},
hX:function(a){H.f(a,"$iah")
if(this.f&&this.ca(a))a.preventDefault()},
i6:function(a){var u
H.f(a,"$ib4")
if(!this.f)return
u=this.dw(a)
this.b.kL(u)},
i4:function(a){var u
H.f(a,"$ib4")
if(!this.f)return
u=this.dw(a)
this.b.kH(u)},
ia:function(a){var u,t,s,r
H.f(a,"$iah")
u=this.a
u.focus()
this.f=!0
this.aV(a)
if(this.x){t=this.aF(a)
s=this.b5(a)
if(this.d.cW(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aF(a)
r=this.aH(a)
if(this.c.cW(t,r))a.preventDefault()},
ig:function(a){var u,t,s
H.f(a,"$iah")
this.aV(a)
u=this.aF(a)
if(this.x){t=this.b5(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bh(u,s))a.preventDefault()},
i0:function(a){var u,t,s
H.f(a,"$iah")
if(!this.ca(a)){this.aV(a)
u=this.aF(a)
if(this.x){t=this.b5(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bh(u,s))a.preventDefault()}},
ic:function(a){var u,t,s
H.f(a,"$iah")
this.aV(a)
u=this.aF(a)
if(this.x){t=this.b5(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bg(u,s))a.preventDefault()},
hZ:function(a){var u,t,s
H.f(a,"$iah")
if(!this.ca(a)){this.aV(a)
u=this.aF(a)
if(this.x){t=this.b5(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aH(a)
if(this.c.bg(u,s))a.preventDefault()}},
ii:function(a){var u,t
H.f(a,"$ibf")
this.aV(a)
u=new V.X((a&&C.N).gk7(a),C.N.gk8(a)).B(0,180)
if(this.x){if(this.d.kM(u))a.preventDefault()
return}if(this.r)return
t=this.aH(a)
if(this.c.kN(u,t))a.preventDefault()},
ik:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aF(this.y)
s=this.aH(this.y)
this.d.i8(t,s,u)}},
iy:function(a){var u
H.f(a,"$iaY")
this.a.focus()
this.f=!0
this.cr(a)
u=this.cl(a)
if(this.e.kK(u))a.preventDefault()},
iu:function(a){var u
H.f(a,"$iaY")
this.cr(a)
u=this.cl(a)
if(this.e.kI(u))a.preventDefault()},
iw:function(a){var u
H.f(a,"$iaY")
this.cr(a)
u=this.cl(a)
if(this.e.kJ(u))a.preventDefault()},
shn:function(a){this.z=H.k(a,"$ib",[[P.cM,P.R]],"$ab")}}
D.dw.prototype={$ia8:1,$ibp:1}
D.a8.prototype={$ibp:1}
D.dL.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.W()
this.Q=u}return u},
ae:function(a){var u=this.Q
if(u!=null)u.J(a)},
dK:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.J(a)},
i7:function(){return this.dK(null)},
io:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fP(s))return!1}return!0},
hL:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdJ(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.f(b[p],"$ia8")
if(o instanceof D.bJ)C.a.h(this.f,o)
n=o.r
if(n==null){n=new D.bY()
n.sam(null)
n.saU(null)
n.c=null
n.d=0
o.r=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c0(a,b,this,[u])
u.b=!0
this.ae(u)},
is:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gdJ();t.E();){r=t.gN(t)
C.a.P(this.e,r)
r.gC().P(0,s)}u=new D.c1(a,b,this,[u])
u.b=!0
this.ae(u)},
fP:function(a){var u=C.a.a0(this.f,a)
return u},
sfQ:function(a){this.e=H.k(a,"$ib",[D.dw],"$ab")},
sfT:function(a){this.f=H.k(a,"$ib",[D.bJ],"$ab")},
sfU:function(a){this.r=H.k(a,"$ib",[D.e5],"$ab")},
sfV:function(a){this.x=H.k(a,"$ib",[D.ec],"$ab")},
sfW:function(a){this.y=H.k(a,"$ib",[D.ed],"$ab")},
sfX:function(a){this.z=H.k(a,"$ib",[D.ee],"$ab")},
$ai:function(){return[D.a8]},
$aa5:function(){return[D.a8]}}
D.bJ.prototype={
gC:function(){var u=this.r
if(u==null){u=D.W()
this.r=u}return u},
ae:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.J(a)},
fS:function(){return this.ae(null)},
$ia8:1,
$ibp:1}
D.e5.prototype={$ia8:1,$ibp:1}
D.ec.prototype={$ia8:1,$ibp:1}
D.ed.prototype={$ia8:1,$ibp:1}
D.ee.prototype={$ia8:1,$ibp:1}
V.a6.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gd0())
t=C.e.p(this.b,b.gbX())
s=C.e.p(this.c,b.gcw())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gd0())
t=C.e.u(this.b,b.gbX())
s=C.e.u(this.c,b.gcw())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
w:function(a,b){var u,t
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
V.aN.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gd0())
t=C.e.p(this.b,b.gbX())
s=C.e.p(this.c,b.gcw())
r=C.e.p(this.d,b.gjI(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aN(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gd0())
t=C.e.u(this.b,b.gbX())
s=C.e.u(this.c,b.gcw())
r=C.e.u(this.d,b.gjI(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aN(u,t,s,r)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.h_.prototype={}
V.dS.prototype={
al:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dS))return!1
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
t=V.ch(H.d([this.a,this.d,this.r],u),3,0)
s=V.ch(H.d([this.b,this.e,this.x],u),3,0)
r=V.ch(H.d([this.c,this.f,this.y],u),3,0)
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
al:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return u},
eI:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.K().a)return V.c3()
a8=1/a7
a9=-r
b0=-d
return V.b7((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.b7(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
f7:function(a){return new V.L(C.e.t(this.a,a.gbx(a))+C.e.t(this.b,a.gby(a))+C.e.t(this.c,a.gea()),C.e.t(this.e,a.gbx(a))+C.e.t(this.f,a.gby(a))+C.e.t(this.r,a.gea()),C.e.t(this.y,a.gbx(a))+C.e.t(this.z,a.gby(a))+C.e.t(this.Q,a.gea()))},
b1:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a2(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
eA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.ch(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ch(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ch(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ch(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.eA("",3,0)},
G:function(a){return this.eA(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.a2.prototype={
p:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b9.prototype={
p:function(a,b){return new V.b9(C.e.p(this.a,b.gl7(b)),C.e.p(this.b,b.gl8(b)),C.e.p(this.c,b.gl9(b)),C.e.p(this.d,b.gl6(b)))},
u:function(a,b){return new V.b9(C.e.u(this.a,b.gl7(b)),C.e.u(this.b,b.gl8(b)),C.e.u(this.c,b.gl9(b)),C.e.u(this.d,b.gl6(b)))},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.e1.prototype={
gaa:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.X.prototype={
cR:function(a){return Math.sqrt(this.H(this))},
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
B:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.mj
if(u==null){u=new V.X(0,0)
$.mj=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.X(u/b,t/b)},
w:function(a,b){var u,t,s
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
cR:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cS:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.L(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.K().a)return V.cY()
return new V.L(this.a/b,this.b/b,this.c/b)},
eJ:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t
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
U.fH.prototype={
c1:function(a){var u=V.kU(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sd6:function(a,b){},
scT:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.K().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c1(t)}u=new D.J("maximumLocation",u,this.b,this,[P.q])
u.b=!0
this.K(u)}},
scV:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c1(t)}u=new D.J("minimumLocation",u,this.c,this,[P.q])
u.b=!0
this.K(u)}},
sa3:function(a,b){var u
b=this.c1(b)
u=this.d
if(!(Math.abs(u-b)<$.K().a)){this.d=b
u=new D.J("location",u,b,this,[P.q])
u.b=!0
this.K(u)}},
scU:function(a){var u,t,s
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
scF:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.J("dampening",u,a,this,[P.q])
u.b=!0
this.K(u)}},
ar:function(a,b){var u,t,s,r,q
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
U.dt.prototype={
gC:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
as:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dt))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cy.prototype={
gC:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
K:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.J(a)},
a9:function(){return this.K(null)},
fZ:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaS(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c0(a,b,this,[u])
u.b=!0
this.K(u)},
iq:function(a,b){var u,t,s
u=U.ad
H.k(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gaS();t.E();)t.gN(t).gC().P(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.K(u)},
as:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.av(u,u.length,0,[H.u(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.as(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}this.f=s==null?V.c3():s
u=this.e
if(u!=null)u.ak(0)}return this.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ad]},
$aa5:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e2.prototype={
gC:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.J(a)},
sfe:function(a){var u
a=V.kU(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.K().a)){this.a=a
u=new D.J("yaw",u,a,this,[P.q])
u.b=!0
this.K(u)}},
seW:function(a,b){var u
b=V.kU(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.K().a)){this.b=b
u=new D.J("pitch",u,b,this,[P.q])
u.b=!0
this.K(u)}},
sf1:function(a){var u
a=V.kU(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.J("roll",u,a,this,[P.q])
u.b=!0
this.K(u)}},
as:function(a,b,c){var u,t
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfe(this.a+this.d*b.y)
this.seW(0,this.b+this.e*b.y)
this.sf1(this.c+this.f*b.y)
this.x=V.lX(this.c).t(0,V.lW(this.b)).t(0,V.lV(this.a))
u=this.y
if(u!=null)u.ak(0)}return this.x},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
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
U.en.prototype={
gC:function(){var u=this.cy
if(u==null){u=D.W()
this.cy=u}return u},
K:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.J(a)},
a9:function(){return this.K(null)},
b8:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge9().h(0,this.gcb())
this.a.c.geK().h(0,this.gcd())
this.a.c.gbT().h(0,this.gcf())
return!0},
cc:function(a){H.f(a,"$iA")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ce:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibo")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.X(t.a,t.b).t(0,2).B(0,u.gaa())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.t()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.X(s.a,s.b).t(0,2).B(0,u.gaa())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
this.b.sY(0)
t=t.u(0,a.z)
this.Q=new V.X(t.a,t.b).t(0,2).B(0,u.gaa())}this.a9()},
cg:function(a){var u,t,s
H.f(a,"$iA")
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
this.a9()}},
as:function(a,b,c){var u,t,s
u=this.ch
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.ch=t
s=b.y
this.b.ar(0,s)
this.cx=V.lX(this.b.d)}return this.cx},
$iad:1}
U.eo.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.W()
this.fx=u}return u},
K:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.J(a)},
a9:function(){return this.K(null)},
b8:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ge9().h(0,this.gcb())
this.a.c.geK().h(0,this.gcd())
this.a.c.gbT().h(0,this.gcf())
u=this.a.d
t=u.f
if(t==null){t=D.W()
u.f=t
u=t}else u=t
u.h(0,this.ghC())
u=this.a.d
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.ghE())
u=this.a.e
t=u.b
if(t==null){t=D.W()
u.b=t
u=t}else u=t
u.h(0,this.gj5())
u=this.a.e
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.gj3())
u=this.a.e
t=u.c
if(t==null){t=D.W()
u.c=t
u=t}else u=t
u.h(0,this.gj1())
return!0},
aw:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.X(u,t)},
cc:function(a){a=H.l(H.f(a,"$iA"),"$ibo")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ce:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibo")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.aw(new V.X(t.a,t.b).t(0,2).B(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aw(new V.X(s.a,s.b).t(0,2).B(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.aw(new V.X(t.a,t.b).t(0,2).B(0,u.gaa()))}this.a9()},
cg:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
this.a9()}},
hD:function(a){if(H.l(H.f(a,"$iA"),"$idO").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hF:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibo")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aw(new V.X(s.a,s.b).t(0,2).B(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.aw(new V.X(t.a,t.b).t(0,2).B(0,u.gaa()))
this.a9()},
j6:function(a){H.f(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j4:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ieh")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.aw(new V.X(t.a,t.b).t(0,2).B(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aw(new V.X(s.a,s.b).t(0,2).B(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.aw(new V.X(t.a,t.b).t(0,2).B(0,u.gaa()))}this.a9()},
j2:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
this.a9()}},
as:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=b.y
this.c.ar(0,s)
this.b.ar(0,s)
this.fr=V.lV(this.b.d).t(0,V.lW(this.c.d))}return this.fr},
$iad:1}
U.ep.prototype={
gC:function(){var u=this.r
if(u==null){u=D.W()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.J(a)},
b8:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.W()
u.e=t
u=t}else u=t
t=this.ghH()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.W()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hI:function(a){var u,t,s,r
H.f(a,"$iA")
if(!J.U(this.b,this.a.b.c))return
H.l(a,"$icD")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){this.d=r
u=new D.J("zoom",u,r,this,[P.q])
u.b=!0
this.K(u)}},
as:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.la(s,s,s,1)}return this.f},
$iad:1}
M.dA.prototype={
aE:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.J(a)},
h_:function(){return this.aE(null)},
hT:function(a,b){var u,t,s,r,q,p,o,n
u=E.ao
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gav(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
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
hV:function(a,b){var u,t,s
u=E.ao
H.k(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gav();t.E();)t.gN(t).gC().P(0,s)
u=new D.c1(a,b,this,[u])
u.b=!0
this.aE(u)},
sbi:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().P(0,this.gav())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gav())
u=new D.J("technique",t,this.c,this,[O.bM])
u.b=!0
this.aE(u)}},
gC:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u},
b_:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eZ(this.c)
u=this.b
u.toString
t=a1.a
C.c.jM(t,36160,null)
C.c.cG(t,2884)
C.c.cG(t,2929)
C.c.k9(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.F(s)
o=C.e.aq(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.aq(p*r)
p=C.e.aq(q.c*s)
a1.c=p
q=C.e.aq(q.d*r)
a1.d=q
C.c.l5(t,o,n,p,q)
C.c.jS(t,u.c)
u=u.a
C.c.jR(t,u.a,u.b,u.c,u.d)
C.c.jQ(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b7(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.eY(i)
t=$.m1
if(t==null){t=V.m3()
q=$.mm
if(q==null){q=new V.L(0,1,0)
$.mm=q}p=$.mk
if(p==null){p=new V.L(0,0,-1)
$.mk=p}h=p.B(0,Math.sqrt(p.H(p)))
q=q.aI(h)
g=q.B(0,Math.sqrt(q.H(q)))
f=h.aI(g)
e=new V.L(t.a,t.b,t.c)
d=g.V(0).H(e)
c=f.V(0).H(e)
b=h.V(0).H(e)
t=V.b7(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m1=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.as(0,a1,u)
if(a0!=null)a=a0.t(0,a)}a1.db.eY(a)
u=this.c
if(u!=null)u.ar(0,a1)
for(u=this.d.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.E();)u.d.ar(0,a1)
for(u=this.d.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.E();)u.d.b_(a1)
this.a.toString
a1.cy.cX()
a1.db.cX()
this.b.toString
a1.eX()},
she:function(a,b){this.d=H.k(b,"$ia5",[E.ao],"$aa5")},
$ipu:1}
A.dm.prototype={}
A.fw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.eb(r.a,r.c)}},
kb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.c.e8(r.a,r.c)}}}
A.hB.prototype={
fH:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
this.e=this.dz(n,35633)
this.f=this.dz(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.c.e_(s,q,this.e)
C.c.e_(s,this.r,this.f)
C.c.kt(s,this.r)
if(!H.lq(C.c.bW(s,this.r,35714))){h=C.c.fk(s,this.r)
C.c.k5(s,this.r)
H.t(P.w("Failed to link shader: "+H.m(h)))}this.iT()
this.iV()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaD")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaD")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaD")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaD")
if(a7.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$icR")
if(a7.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaD")
if(a7.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaD")
this.sha(H.d([],[A.aD]))
t=a7.aB
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(f,"$iaD"))}}t=a7.a
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
this.aB=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break
case C.i:this.y2=H.l(this.y.q(0,"ambientTxt"),"$iar")
this.aB=H.l(this.y.q(0,"nullAmbientTxt"),"$iP")
break}}t=a7.c
if(t!==C.d){this.ap=H.l(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.bz=H.l(this.y.q(0,"diffuseTxt"),"$iaq")
this.bA=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break
case C.i:this.ec=H.l(this.y.q(0,"diffuseTxt"),"$iar")
this.bA=H.l(this.y.q(0,"nullDiffuseTxt"),"$iP")
break}}t=a7.d
if(t!==C.d){this.bB=H.l(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ed=H.l(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bC=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break
case C.i:this.ee=H.l(this.y.q(0,"invDiffuseTxt"),"$iar")
this.bC=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a7.e
if(t!==C.d){this.bF=H.l(this.y.q(0,"shininess"),"$ia3")
this.bD=H.l(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.ef=H.l(this.y.q(0,"specularTxt"),"$iaq")
this.bE=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break
case C.i:this.eg=H.l(this.y.q(0,"specularTxt"),"$iar")
this.bE=H.l(this.y.q(0,"nullSpecularTxt"),"$iP")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.eh=H.l(this.y.q(0,"bumpTxt"),"$iaq")
this.bG=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break
case C.i:this.ei=H.l(this.y.q(0,"bumpTxt"),"$iar")
this.bG=H.l(this.y.q(0,"nullBumpTxt"),"$iP")
break}if(a7.dy){this.ej=H.l(this.y.q(0,"envSampler"),"$iar")
this.ek=H.l(this.y.q(0,"nullEnvTxt"),"$iP")
t=a7.r
if(t!==C.d){this.bH=H.l(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.el=H.l(this.y.q(0,"reflectTxt"),"$iaq")
this.bI=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break
case C.i:this.em=H.l(this.y.q(0,"reflectTxt"),"$iar")
this.bI=H.l(this.y.q(0,"nullReflectTxt"),"$iP")
break}}t=a7.x
if(t!==C.d){this.bJ=H.l(this.y.q(0,"refraction"),"$ia3")
this.bK=H.l(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:this.en=H.l(this.y.q(0,"refractTxt"),"$iaq")
this.bL=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break
case C.i:this.eo=H.l(this.y.q(0,"refractTxt"),"$iar")
this.bL=H.l(this.y.q(0,"nullRefractTxt"),"$iP")
break}}}t=a7.y
if(t!==C.d){this.bM=H.l(this.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:this.ep=H.l(this.y.q(0,"alphaTxt"),"$iaq")
this.bN=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break
case C.i:this.eq=H.l(this.y.q(0,"alphaTxt"),"$iar")
this.bN=H.l(this.y.q(0,"nullAlphaTxt"),"$iP")
break}}this.shk(H.d([],[A.cQ]))
this.siz(H.d([],[A.cS]))
this.siY(H.d([],[A.cT]))
this.sj8(H.d([],[A.cU]))
this.sj9(H.d([],[A.cV]))
this.sja(H.d([],[A.cW]))
if(a7.k2){t=a7.z
if(t>0){this.er=H.f(this.y.q(0,"dirLightCount"),"$iP")
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
s=this.cH;(s&&C.a).h(s,new A.cQ(g,f,e))}}t=a7.Q
if(t>0){this.es=H.f(this.y.q(0,"pntLightCount"),"$iP")
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
H.l(c,"$ia3")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.cI;(s&&C.a).h(s,new A.cS(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eu=H.f(this.y.q(0,"spotLightCount"),"$iP")
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
H.l(b,"$ia3")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia3")
s=this.cJ;(s&&C.a).h(s,new A.cT(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ev=H.f(this.y.q(0,"txtDirLightCount"),"$iP")
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
s=this.cK;(s&&C.a).h(s,new A.cU(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ew=H.f(this.y.q(0,"txtPntLightCount"),"$iP")
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
H.l(d,"$icR")
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
H.l(a,"$ia3")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$iar")
s=this.cL;(s&&C.a).h(s,new A.cV(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.ex=H.f(this.y.q(0,"txtSpotLightCount"),"$iP")
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
H.l(a1,"$ia3")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$ia3")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a6,"$iaq")
s=this.cM;(s&&C.a).h(s,new A.cW(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
an:function(a,b,c){C.c.X(b.a,b.d,1)},
ag:function(a,b,c){C.c.X(b.a,b.d,1)},
sha:function(a){this.r1=H.k(a,"$ib",[A.aD],"$ab")},
shk:function(a){this.cH=H.k(a,"$ib",[A.cQ],"$ab")},
siz:function(a){this.cI=H.k(a,"$ib",[A.cS],"$ab")},
siY:function(a){this.cJ=H.k(a,"$ib",[A.cT],"$ab")},
sj8:function(a){this.cK=H.k(a,"$ib",[A.cU],"$ab")},
sj9:function(a){this.cL=H.k(a,"$ib",[A.cV],"$ab")},
sja:function(a){this.cM=H.k(a,"$ib",[A.cW],"$ab")}}
A.hE.prototype={
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
u+="uniform int null"+(c[0].toUpperCase()+C.b.au(c,1))+"Txt;\n"
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
i:function(a){return this.ap}}
A.cQ.prototype={}
A.cU.prototype={}
A.cS.prototype={}
A.cV.prototype={}
A.cT.prototype={}
A.cW.prototype={}
A.cK.prototype={
fK:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dz:function(a,b){var u,t,s
u=this.a
t=C.c.k_(u,b)
C.c.fw(u,t,a)
C.c.jU(u,t)
if(!H.lq(C.c.fm(u,t,35713))){s=C.c.fl(u,t)
C.c.k6(u,t)
throw H.c(P.w("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iT:function(){var u,t,s,r,q,p
u=H.d([],[A.dm])
t=this.a
s=H.aj(C.c.bW(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.c.ff(t,this.r,r)
p=C.c.fh(t,this.r,q.name)
C.a.h(u,new A.dm(t,q.name,p))}this.x=new A.fw(u)},
iV:function(){var u,t,s,r,q,p
u=H.d([],[A.ei])
t=this.a
s=H.aj(C.c.bW(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.c.fg(t,this.r,r)
p=C.c.fn(t,this.r,q.name)
C.a.h(u,this.k0(q.type,q.size,q.name,p))}this.y=new A.iZ(u)},
aR:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.ld(u,t,b,a,c)},
hh:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.ld(u,t,b,a,c)},
hi:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.ld(u,t,b,a,c)},
bs:function(a,b){return new P.eA(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
k0:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.iU(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.iX(this.a,this.r,c,d)
case 35667:return new A.iV(this.a,this.r,c,d)
case 35668:return new A.iW(this.a,this.r,c,d)
case 35669:return new A.iY(this.a,this.r,c,d)
case 35674:return new A.j_(this.a,this.r,c,d)
case 35675:return new A.cR(this.a,this.r,c,d)
case 35676:return new A.aD(this.a,this.r,c,d)
case 35678:return this.hh(b,c,d)
case 35680:return this.hi(b,c,d)
case 35670:throw H.c(this.bs("BOOL",c))
case 35671:throw H.c(this.bs("BOOL_VEC2",c))
case 35672:throw H.c(this.bs("BOOL_VEC3",c))
case 35673:throw H.c(this.bs("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.ei.prototype={}
A.iZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
kl:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.kl("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjb:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cR.prototype={
at:function(a){var u=new Float32Array(H.cc(H.k(a,"$ib",[P.q],"$ab")))
C.c.f9(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aD.prototype={
at:function(a){var u=new Float32Array(H.cc(H.k(a,"$ib",[P.q],"$ab")))
C.c.fa(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ar.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kj.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cS(u.b,b).cS(u.d.cS(u.c,b),c)
a.sa3(0,new V.a2(t.a,t.b,t.c))
a.sf3(t.B(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.se3(new V.b9(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.kt.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.kv.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.F(q)
t=-t*q
p=s*q
a.sa3(0,new V.a2(t,p,r))
p=new V.L(t,p,r)
a.sf3(p.B(0,Math.sqrt(p.H(p))))
a.se3(new V.b9(1-c,2+c,-1,-1))},
$S:8}
F.kw.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.kx.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kQ.prototype={
$2:function(a,b){return 0},
$S:31}
F.kR.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.F(u)
t=a.f
s=new V.L(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.H(s))).t(0,this.b+u)
a.sa3(0,new V.a2(u.a,u.b,u.c))},
$S:8}
F.kS.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:19}
F.kE.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a2(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:19}
F.ku.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lC(t.$1(u),s)
s=J.nj(J.lC(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.L(s.a,s.b,s.c)
q=s.B(0,Math.sqrt(s.H(s)))
t=$.ml
if(t==null){t=new V.L(1,0,0)
$.ml=t
p=t}else p=t
if(!J.U(q,p)){t=$.mn
if(t==null){t=new V.L(0,0,1)
$.mn=t
p=t}else p=t}t=q.aI(p)
o=t.B(0,Math.sqrt(t.H(t)))
t=o.aI(q)
p=t.B(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.t(0,t*s)
s=o.t(0,m*s)
a.sa3(0,J.ni(r,new V.a2(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
ba:function(){if(!this.gbb()){C.a.P(this.a.a.d.b,this)
this.a.a.a4()}this.cn()
this.co()
this.iG()},
cs:function(a){this.a=a
C.a.h(a.d.b,this)},
ct:function(a){this.b=a
C.a.h(a.d.c,this)},
iS:function(a){this.c=a
C.a.h(a.d.d,this)},
cn:function(){var u=this.a
if(u!=null){C.a.P(u.d.b,this)
this.a=null}},
co:function(){var u=this.b
if(u!=null){C.a.P(u.d.c,this)
this.b=null}},
iG:function(){var u=this.c
if(u!=null){C.a.P(u.d.d,this)
this.c=null}},
gbb:function(){return this.a==null||this.b==null||this.c==null},
h9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cY()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eJ())return
return q.B(0,Math.sqrt(q.H(q)))},
hd:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.L(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.H(u)))
u=r.u(0,t)
u=new V.L(u.a,u.b,u.c)
u=q.aI(u.B(0,Math.sqrt(u.H(u))))
return u.B(0,Math.sqrt(u.H(u)))},
cB:function(){if(this.d!=null)return!0
var u=this.h9()
if(u==null){u=this.hd()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
h8:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cY()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eJ())return
return q.B(0,Math.sqrt(q.H(q)))},
hc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
h=u.B(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.u(0,p).t(0,g).p(0,p).u(0,s)
u=new V.L(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.H(u)))
u=f.aI(h)
u=u.B(0,Math.sqrt(u.H(u))).aI(f)
h=u.B(0,Math.sqrt(u.H(u)))}return h},
cz:function(){if(this.e!=null)return!0
var u=this.h8()
if(u==null){u=this.hc()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
gjT:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t
if(this.gbb())return a+"disposed"
u=a+C.b.aj(J.au(this.a.e),0)+", "+C.b.aj(J.au(this.b.e),0)+", "+C.b.aj(J.au(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.G("")}}
F.h3.prototype={}
F.iq.prototype={
be:function(a,b,c){var u,t
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
ba:function(){if(!this.gbb()){C.a.P(this.a.a.c.b,this)
this.a.a.a4()}this.cn()
this.co()},
cs:function(a){this.a=a
C.a.h(a.c.b,this)},
ct:function(a){this.b=a
C.a.h(a.c.c,this)},
cn:function(){var u=this.a
if(u!=null){C.a.P(u.c.b,this)
this.a=null}},
co:function(){var u=this.b
if(u!=null){C.a.P(u.c.c,this)
this.b=null}},
gbb:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){if(this.gbb())return a+"disposed"
return a+C.b.aj(J.au(this.a.e),0)+", "+C.b.aj(J.au(this.b.e),0)},
S:function(){return this.G("")}}
F.ho.prototype={}
F.iS.prototype={
be:function(a,b,c){var u,t
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
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aj(J.au(u.e),0)},
S:function(){return this.G("")}}
F.e4.prototype={
gC:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
bf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jV())}this.a.D()
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
F.nM(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
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
F.cv(k,j,h)}u=this.e
if(u!=null)u.ak(0)},
aA:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aA()||!1
if(!this.a.aA())t=!1
u=this.e
if(u!=null)u.ak(0)
return t},
kw:function(a,b){var u,t,s,r,q,p
P.az("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.az("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
P.az("FLAG 3\n")
for(u=[F.ai];t.length!==0;){s=C.a.gkh(t)
C.a.kQ(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.h(t,q)
p=t[q]
if(p!=null&&a.be(0,s,p)){C.a.h(r,p)
C.a.P(t,p)}}if(r.length>1)b.bf(r)}}P.az("FLAG 4\n")
this.a.D()
P.az("FLAG 5\n")
this.c.d1()
P.az("FLAG 6\n")
this.d.d1()
P.az("FLAG 7\n")
this.b.kR()
P.az("FLAG 8\n")
this.c.d2(new F.iS())
P.az("FLAG 9\n")
this.d.d2(new F.iq())
P.az("FLAG 10\n")
u=this.e
if(u!=null)u.ak(0)
P.az("FLAG 11\n")},
jF:function(a){this.kw(new F.ji(),new F.hV())},
cu:function(){return this.jF(null)},
cN:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cN()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.h(u,t)
s=u[t]
u=s.r
if(u!=null)s.seL(new V.L(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.L(r,q,u).B(0,Math.sqrt(r*r+q*q+u*u))
if(!J.U(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.J(null)}}}}u=this.e
if(u!=null)u.ak(0)},
jO:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bv()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bu().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.dh().a)!==0)++r
if((s&$.di().a)!==0)++r
if((s&$.cm().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a1.gdc(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dp])
for(m=0,l=0;l<r;++l){k=a1.jJ(l)
j=k.gdc(k)
C.a.n(n,l,new Z.dp(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].ku(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.c.az(t,34962,e)
C.c.e6(t,34962,new Float32Array(H.cc(o)),35044)
C.c.az(t,34962,null)
d=new Z.dq(new Z.er(34962,e),n,a1)
d.shu(H.d([],[Z.bF]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.lg(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.lg(t,34963,H.k(c,"$ib",[s],"$ab"))
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
C.a.h(c,b.e)}a=Z.lg(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
ab:function(a){var u=this.e
if(u!=null)u.J(a)},
a4:function(){return this.ab(null)},
$ipv:1}
F.ii.prototype={
jB:function(a){var u,t,s,r,q,p,o
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
C.a.h(u,F.cv(s,p,o))}}return u},
jC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
C.a.h(u,F.cv(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cv(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cv(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cv(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
d2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.be(0,p,n)){p.ba()
break}}}}},
d1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjT(s)
if(t)s.ba()}},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cB())s=!1
return s},
cA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cz())s=!1
return s},
cN:function(){var u,t,s,r,q,p
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
sho:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ij.prototype={
gl:function(a){return this.b.length},
d2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.be(0,p,n)){p.ba()
break}}}}},
d1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.ba()}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
S:function(){return this.G("")},
shy:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")}}
F.ik.prototype={
gl:function(a){return this.b.length},
kR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.P(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.P(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
sck:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
F.ai.prototype={
cE:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.eq(this.cx,s,p,u,t,r,q,a,o)},
jV:function(){return this.cE(null)},
sa3:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
seL:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.H(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a4()}},
sf3:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
se3:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
ku:function(a){var u,t
if(a.w(0,$.bv())){u=this.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bu())){u=this.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bt())){u=this.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bw())){u=this.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bx())){u=this.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dh())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.di())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.cm()))return H.d([this.ch],[P.q])
else if(a.w(0,$.bs())){u=this.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cY()
this.d.O(0,new F.jn(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ak(0)}return!0},
cz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cY()
this.d.O(0,new F.jm(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ak(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.b.aj(J.au(this.e),0))
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
F.jn.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jm.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jd.prototype={
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
jE:function(a,b,c,d,e,f,g,h,i){var u=F.eq(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jD:function(a,b,c,d,e,f){return this.jE(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cB()
return!0},
cA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cz()
return!0},
jP:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
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
sjc:function(a){this.c=H.k(a,"$ib",[F.ai],"$ab")}}
F.je.prototype={
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
C.a.O(this.c,new F.jf(this,b))
C.a.O(this.d,new F.jg(this,b))},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
shp:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
shq:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
shr:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jf.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jg.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:6}
F.jh.prototype={
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
shz:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")},
shA:function(a){this.c=H.k(a,"$ib",[F.bn],"$ab")}}
F.jj.prototype={}
F.ji.prototype={
be:function(a,b,c){return J.U(b.f,c.f)}}
F.jk.prototype={}
F.hV.prototype={
bf:function(a){var u,t,s,r
H.k(a,"$ib",[F.ai],"$ab")
u=V.cY()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.H(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].seL(u)
return}}
F.jl.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
S:function(){return this.G("")},
sck:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
O.dQ.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.W()
this.dy=u}return u},
af:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.J(a)},
h2:function(){return this.af(null)},
dO:function(a){H.f(a,"$iA")
this.a=null
this.af(a)},
iM:function(){return this.dO(null)},
hN:function(a,b){var u=V.ap
u=new D.c0(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.af(u)},
hP:function(a,b){var u=V.ap
u=new D.c1(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.af(u)},
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
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bv()
if(a0){b=$.bu()
a7=new Z.be(a7.a|b.a)}if(a1){b=$.bt()
a7=new Z.be(a7.a|b.a)}if(a2){b=$.bw()
a7=new Z.be(a7.a|b.a)}if(a3){b=$.bx()
a7=new Z.be(a7.a|b.a)}if(a5){b=$.bs()
a7=new Z.be(a7.a|b.a)}return new A.hE(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.k(a,"$ib",[T.eb],"$ab")},
ar:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
t.toString
s=$.bL
if(s==null){s=new V.a2(0,0,0)
$.bL=s}t.a=s
s=t.b
if(s!=null){r=s.as(0,b,t)
if(r!=null)t.a=r.b1(t.a)}}},
kT:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.du()
t=a4.fr.j(0,u.ap)
if(t==null){t=A.nS(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.bu(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bz
u=a5.e
if(!(u instanceof Z.dq)){a5.e=null
u=null}if(u==null||!u.d.w(0,q)){u=r.r1
if(u)a5.d.aA()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cA()
o.a.cA()
o=o.e
if(o!=null)o.ak(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jP()
n=n.e
if(n!=null)n.ak(0)}l=a5.d.jO(new Z.jp(a4.a),q)
l.aZ($.bv()).e=this.a.Q.c
if(u)l.aZ($.bu()).e=this.a.cx.c
if(p)l.aZ($.bt()).e=this.a.ch.c
if(r.rx)l.aZ($.bw()).e=this.a.cy.c
if(o)l.aZ($.bx()).e=this.a.db.c
if(r.x1)l.aZ($.bs()).e=this.a.dx.c
a5.e=l}u=T.eb
k=H.d([],[u])
p=this.a
o=a4.a
C.c.fc(o,p.r)
p.x.kd()
if(r.fx){p=this.a
n=a4.dx
n=n.ga2(n)
p=p.dy
p.toString
p.at(n.al(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga2(n)
m=a4.dx
m=n.t(0,m.ga2(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.at(n.al(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkO()
m=a4.dx
m=n.t(0,m.ga2(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.at(n.al(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.at(C.q.al(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.at(C.q.al(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.at(C.q.al(n,!0))}if(r.aB>0){j=this.e.a.length
p=this.a.k4
C.c.X(p.a,p.d,j)
for(p=[P.q],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.h(m,i)
m=m[i]
n.toString
H.f(m,"$iap")
n=n.r1
if(i>=n.length)return H.h(n,i)
n=n[i]
h=new Float32Array(H.cc(H.k(m.al(0,!0),"$ib",p,"$ab")))
C.c.fa(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.f.d)
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
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.f.e)
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
C.c.A(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.r.d)
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
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.r.e)
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
C.c.A(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.ap
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.x.d)
p=this.a
n=this.x.d
p.an(p.bz,p.bA,n)
n=this.a
p=this.x.f
n=n.ap
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.x.e)
p=this.a
n=this.x.e
p.ag(p.ec,p.bA,n)
n=this.a
p=this.x.f
n=n.ap
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bB
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
break
case C.h:this.a_(k,this.y.d)
p=this.a
n=this.y.d
p.an(p.ed,p.bC,n)
n=this.a
p=this.y.f
n=n.bB
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break
case C.i:this.a_(k,this.y.e)
p=this.a
n=this.y.e
p.ag(p.ee,p.bC,n)
n=this.a
p=this.y.f
n=n.bB
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bD
p.toString
m=n.a
g=n.b
n=n.c
C.c.A(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bF
C.c.U(n.a,n.d,g)
break
case C.h:this.a_(k,this.z.d)
p=this.a
n=this.z.d
p.an(p.ef,p.bE,n)
n=this.a
p=this.z.f
n=n.bD
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bF
C.c.U(p.a,p.d,g)
break
case C.i:this.a_(k,this.z.e)
p=this.a
n=this.z.e
p.ag(p.eg,p.bE,n)
n=this.a
p=this.z.f
n=n.bD
n.toString
m=p.a
g=p.b
p=p.c
C.c.A(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bF
C.c.U(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.er
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cH
if(e>=m.length)return H.h(m,e)
b=m[e]
m=f.f7(c.gbw(c))
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.c.A(a.a,a.d,g,m,a0)
a0=c.gao(c)
m=b.c
C.c.A(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.es
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cI
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.a
g=b.b
a=m.a
a0=m.b
m=m.c
C.c.A(g.a,g.d,a,a0,m)
m=f.b1(c.a)
a0=b.c
C.c.A(a0.a,a0.d,m.a,m.b,m.c)
m=c.c
a0=b.d
C.c.A(a0.a,a0.d,m.a,m.b,m.c)
m=c.d
a0=b.e
C.c.U(a0.a,a0.d,m)
m=c.e
a0=b.f
C.c.U(a0.a,a0.d,m)
m=c.f
a0=b.r
C.c.U(a0.a,a0.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.eu
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cJ
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gcY(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbw(c).lf()
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.b1(c.gcY(c))
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gld()
g=b.f
C.c.U(g.a,g.d,m)
m=c.glc()
g=b.r
C.c.U(g.a,g.d,m)
m=c.ge0()
g=b.x
C.c.U(g.a,g.d,m)
m=c.ge1()
g=b.y
C.c.U(g.a,g.d,m)
m=c.ge2()
g=b.z
C.c.U(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ev
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cK
if(e>=g.length)return H.h(g,e)
b=g[e]
g=c.gbj()
H.k(k,"$ib",m,"$ab")
if(!C.a.a0(k,g)){g.sbc(0,k.length)
C.a.h(k,g)}g=c.gbw(c)
a=b.d
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbT()
a=b.b
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=c.gbR(c)
a=b.c
C.c.A(a.a,a.d,g.a,g.b,g.c)
g=f.f7(c.gbw(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.c.A(a0.a,a0.d,a,g,a1)
a1=c.gao(c)
g=b.f
C.c.A(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbj()
g=a1.gbd(a1)
if(!g){g=b.x
C.c.X(g.a,g.d,1)}else{g=b.r
a=a1.gbd(a1)
a0=g.a
g=g.d
if(!a)C.c.X(a0,g,0)
else C.c.X(a0,g,a1.gbc(a1))
g=b.x
C.c.X(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ew
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.y,n=p.length,m=[P.q],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cL
if(e>=a.length)return H.h(a,e)
b=a[e]
a=c.gbj()
H.k(k,"$ib",g,"$ab")
if(!C.a.a0(k,a)){a.sbc(0,k.length)
C.a.h(k,a)}a2=f.t(0,c.ga2(c))
a=c.ga2(c)
a0=$.bL
if(a0==null){a0=new V.a2(0,0,0)
$.bL=a0}a0=a.b1(a0)
a=b.b
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bL
if(a==null){a=new V.a2(0,0,0)
$.bL=a}a=a2.b1(a)
a0=b.c
C.c.A(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eI(0)
a0=b.d
h=new Float32Array(H.cc(H.k(new V.dS(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).al(0,!0),"$ib",m,"$ab")))
C.c.f9(a0.a,a0.d,!1,h)
a0=c.gao(c)
a=b.e
C.c.A(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbj()
a=a0.gbd(a0)
if(!a){a=b.r
C.c.X(a.a,a.d,1)}else{a=b.f
a1=a0.gbd(a0)
a3=a.a
a=a.d
if(!a1)C.c.X(a3,a,0)
else C.c.X(a3,a,a0.gbc(a0))
a=b.r
C.c.X(a.a,a.d,0)}a=c.ge0()
a0=b.x
C.c.U(a0.a,a0.d,a)
a=c.ge1()
a0=b.y
C.c.U(a0.a,a0.d,a)
a=c.ge2()
a0=b.z
C.c.U(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.ex
C.c.X(p.a,p.d,j)
p=a4.db
f=p.ga2(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cM
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gbj()
H.k(k,"$ib",u,"$ab")
if(!C.a.a0(k,m)){m.sbc(0,k.length)
C.a.h(k,m)}m=c.gcY(c)
g=b.b
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbw(c)
g=b.c
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbT()
g=b.d
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbR(c)
g=b.e
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=f.b1(c.gcY(c))
g=b.f
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.gbj()
g=m.gbd(m)
if(!g){m=b.x
C.c.X(m.a,m.d,1)}else{g=b.r
a=m.gbd(m)
a0=g.a
g=g.d
if(!a)C.c.X(a0,g,0)
else C.c.X(a0,g,m.gbc(m))
m=b.x
C.c.X(m.a,m.d,0)}m=c.gao(c)
g=b.y
C.c.A(g.a,g.d,m.a,m.b,m.c)
m=c.glg()
g=b.z
C.c.U(g.a,g.d,m)
m=c.glh()
g=b.Q
C.c.U(g.a,g.d,m)
m=c.ge0()
g=b.ch
C.c.U(g.a,g.d,m)
m=c.ge1()
g=b.cx
C.c.U(g.a,g.d,m)
m=c.ge2()
g=b.cy
C.c.U(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.a_(k,this.Q.d)
u=this.a
p=this.Q.d
u.an(u.eh,u.bG,p)
break
case C.i:this.a_(k,this.Q.e)
u=this.a
p=this.Q.e
u.ag(u.ei,u.bG,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga2(p).eI(0)
a4.Q=p}u=u.id
u.toString
u.at(p.al(0,!0))}if(r.dy){this.a_(k,this.ch)
u=this.a
p=this.ch
u.ag(u.ej,u.ek,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bH
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
break
case C.h:this.a_(k,this.cx.d)
u=this.a
p=this.cx.d
u.an(u.el,u.bI,p)
p=this.a
u=this.cx.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break
case C.i:this.a_(k,this.cx.e)
u=this.a
p=this.cx.e
u.ag(u.em,u.bI,p)
p=this.a
u=this.cx.f
p=p.bH
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bK
u.toString
n=p.a
m=p.b
p=p.c
C.c.A(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bJ
C.c.U(p.a,p.d,m)
break
case C.h:this.a_(k,this.cy.d)
u=this.a
p=this.cy.d
u.an(u.en,u.bL,p)
p=this.a
u=this.cy.f
p=p.bK
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bJ
C.c.U(u.a,u.d,m)
break
case C.i:this.a_(k,this.cy.e)
u=this.a
p=this.cy.e
u.ag(u.eo,u.bL,p)
p=this.a
u=this.cy.f
p=p.bK
p.toString
n=u.a
m=u.b
u=u.c
C.c.A(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bJ
C.c.U(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bM
C.c.U(u.a,u.d,n)
break
case C.h:this.a_(k,this.db.d)
u=this.a
n=this.db.d
u.an(u.ep,u.bN,n)
n=this.a
u=this.db.f
n=n.bM
C.c.U(n.a,n.d,u)
break
case C.i:this.a_(k,this.db.e)
u=this.a
n=this.db.e
u.ag(u.eq,u.bN,n)
n=this.a
u=this.db.f
n=n.bM
C.c.U(n.a,n.d,u)
break}C.c.cG(o,3042)
C.c.jN(o,770,771)}for(i=0;i<k.length;++i)k[i].bt(a4)
u=a5.e
u.bt(a4)
u.b_(a4)
u.f8(a4)
if(p)C.c.ka(o,3042)
for(i=0;i<k.length;++i)k[i].f8(a4)
u=this.a
u.toString
C.c.fc(o,null)
u.x.kb()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.du().ap},
shb:function(a){this.e=H.k(a,"$ia5",[V.ap],"$aa5")}}
O.hC.prototype={}
O.dR.prototype={
aT:function(){}}
O.hD.prototype={}
O.b6.prototype={
dQ:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.J(this.b+".color",u,a,this,[V.a6])
t.b=!0
this.a.af(t)}},
aT:function(){this.fE()
this.dQ(new V.a6(1,1,1))},
sao:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aT()
u=this.a
u.a=null
u.af(null)}this.dQ(b)}}
O.hF.prototype={
iR:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.J(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.af(u)}},
aT:function(){this.c_()
this.iR(1)}}
O.hG.prototype={
cp:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.J(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.af(u)}},
aT:function(){this.c_()
this.cp(100)}}
O.bM.prototype={}
T.eb.prototype={}
T.iG.prototype={}
V.bi.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.dP.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aK(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.aw.prototype={
aK:function(a,b){return!this.fD(0,b)},
i:function(a){return"!["+this.dd(0)+"]"}}
V.i6.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c6(this.a)
t=H.c6(this.b)
return u+".."+t},
$iaA:1}
V.ih.prototype={
fJ:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.o,P.T])
for(t=new H.cB(a,a.gl(a),0,[H.at(a,"y",0)]);t.E();)u.n(0,t.d,!0)
this.siP(u)},
aK:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.e7(u.ga7(u),0,null)},
siP:function(a){this.a=H.k(a,"$iE",[P.o,P.T],"$aE")},
$iaA:1}
V.cL.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cP(this.a.k(0,b))
r.sa8(H.d([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
kg:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
i:function(a){return this.b},
sj7:function(a){this.c=H.k(a,"$ib",[V.cP],"$ab")}}
V.eg.prototype={
i:function(a){var u,t
u=H.lx(this.b,"\n","\\n")
t=H.lx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cO.prototype={
aM:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siH:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iJ.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cL(this,b)
u.sj7(H.d([],[V.cP]))
u.d=null
this.a.n(0,b,u)}return u},
T:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cO(this,a)
t=P.e
u.siH(new H.aQ([t,t]))
this.b.n(0,a,u)}return u},
f6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.eg])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.I(a,o)
m=t.kg(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.e7(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.e7(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.eg(j==null?k.b:j,l,o)}++o}}},
siZ:function(a){this.a=H.k(a,"$iE",[P.e,V.cL],"$aE")},
sj0:function(a){this.b=H.k(a,"$iE",[P.e,V.cO],"$aE")}}
V.cP.prototype={
i:function(a){return this.b.b+": "+this.dd(0)}}
X.ds.prototype={$ibp:1}
X.ha.prototype={
gC:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u}}
X.dY.prototype={
gC:function(){var u=this.f
if(u==null){u=D.W()
this.f=u}return u},
aQ:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.J(a)},
h5:function(){return this.aQ(null)},
saL:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gC().P(0,this.gdh())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdh())
u=new D.J("mover",t,this.b,this,[U.ad])
u.b=!0
this.aQ(u)}},
$ibp:1,
$ids:1}
X.ea.prototype={}
V.bB.prototype={
bo:function(a){this.b=new P.hd(C.X)
this.c=null
this.sc8(H.d([],[[P.b,W.aF]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aF]))
t=a.split("\n")
for(u=t.length,s=[W.aF],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.hg(p,0,p.length)
m=n==null?p:n
C.k.ft(o,H.lx(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaC(this.d),o)}},
eU:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc8(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bv()
this.c=t}for(t=t.f6(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bQ(t[r])},
sc8:function(a){this.d=H.k(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kP.prototype={
$1:function(a){H.f(a,"$ibb")
P.az(C.e.f5(this.a.gkm(),2)+" fps")},
$S:50}
V.fQ.prototype={
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
u=V.iK()
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
s=new V.aw()
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
s=new V.aw()
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
V.hb.prototype={
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
u=V.iK()
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
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bi())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.aw()
r=[V.aA]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.aw()
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
V.hc.prototype={
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
u=V.iK()
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bi())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bi())
t=u.k(0,"Other").m(0,"Other")
s=new V.aw()
s.sa8(H.d([],[V.aA]))
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
V.i0.prototype={
eU:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc8(H.d([],[[P.b,W.aF]]))
this.R(C.a.m(b,"\n"),"#111")},
bQ:function(a){},
bv:function(){return}}
V.i4.prototype={
dW:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mg().gd_().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.dU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lG(this.c).h(0,q)
o=W.nG("radio")
o.checked=s
o.name=u
u=W.p
W.af(o,"change",H.n(new V.i5(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.F.F(q,o)
n=r.createElement("span")
n.textContent=b
C.F.F(q,n)
J.lG(this.c).h(0,r.createElement("br"))},
b7:function(a,b,c){return this.dW(a,b,c,!1)},
dU:function(a){var u,t,s,r,q
u=P.mg()
t=P.e
s=P.nO(u.gd_(),t,t)
s.n(0,this.a,a)
r=u.f_(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iJ(t,new P.k1([],[]).d5(""),"",q)}}
V.i5.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dU(this.d)}},
$S:21}
V.il.prototype={
fL:function(a,b){var u,t,s,r,q,p,o
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
W.af(u,"scroll",H.n(new V.io(s),{func:1,ret:-1,args:[o]}),!1,o)},
dY:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f6(C.a.ks(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.pl(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.F(t,l)}else{k=P.fb(C.I,n,C.m,!1)
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
fi:function(a){var u,t,s,r
u=new V.fQ("dart")
u.bo("dart")
t=new V.hb("glsl")
t.bo("glsl")
s=new V.hc("html")
s.bo("html")
r=C.a.ki(H.d([u,t,s],[V.bB]),new V.ip(a))
if(r!=null)return r
u=new V.i0("plain")
u.bo("plain")
return u},
dX:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dg(r).a5(r,"+")){C.a.n(a7,s,C.b.au(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(a7,s,C.b.au(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fi(a5)
q.eU(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.fb(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lI(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.F(j,i)
C.w.F(k,j)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.w.F(a,r[a0])
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
for(a3=C.a.gW(r);a3.E();)C.w.F(c,a3.gN(a3))
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
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
C.k.F(this.a,t)
r=C.o.hv(t,-1)
s=H.f((r&&C.n).dF(r,-1),"$iba").style
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
o=H.f(C.n.dF(r,-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.w).F(o,p)}},
iU:function(){var u,t,s,r
if(this.b!=null)return
u=V.iK()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.aw()
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
s=new V.aw()
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
s=new V.aw()
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
t=new V.aw()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.aw()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bi())
s=u.k(0,"Other").m(0,"Other")
t=new V.aw()
t.sa8(H.d([],r))
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
V.io.prototype={
$1:function(a){P.mc(C.y,new V.im(this.a))},
$S:21}
V.im.prototype={
$0:function(){var u,t,s
u=C.e.aq(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.ip.prototype={
$1:function(a){return H.f(a,"$ibB").a===this.a},
$S:52}
U.kG.prototype={
$0:function(){this.a.sac(0,F.lt(1,null,null,1))},
$S:0}
U.kH.prototype={
$0:function(){this.a.sac(0,F.mK(1,!0,!0,1,40,1))},
$S:0}
U.kI.prototype={
$0:function(){this.a.sac(0,F.mK(1,!0,!1,1,40,0))},
$S:0}
U.kJ.prototype={
$0:function(){this.a.sac(0,F.mW(6,null,1,6))},
$S:0}
U.kK.prototype={
$0:function(){this.a.sac(0,F.mY(30,1,15,0.5))},
$S:0}
U.kL.prototype={
$0:function(){this.a.sac(0,F.pc(120,1,2,12,0.3,3))},
$S:0}
U.kM.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dX("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dX("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fA=u.i
u=J.dI.prototype
u.fC=u.i
u=P.i.prototype
u.fB=u.bU
u=W.V.prototype
u.bZ=u.ah
u=W.eV.prototype
u.fF=u.ay
u=O.dR.prototype
u.fE=u.aT
u=O.b6.prototype
u.c_=u.aT
u=V.dP.prototype
u.fD=u.aK
u.dd=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oT","om",11)
u(P,"oU","on",11)
u(P,"oV","oo",11)
t(P,"mJ","oS",3)
s(W,"p5",4,null,["$4"],["oq"],20,0)
s(W,"p6",4,null,["$4"],["or"],20,0)
var m
r(m=E.ao.prototype,"geQ",0,0,null,["$1","$0"],["eR","kE"],1,0)
r(m,"geS",0,0,null,["$1","$0"],["eT","kF"],1,0)
r(m,"geO",0,0,null,["$1","$0"],["eP","kD"],1,0)
r(m,"geM",0,0,null,["$1","$0"],["eN","kA"],1,0)
q(m,"gky","kz",10)
q(m,"gkB","kC",10)
r(m=E.ef.prototype,"gde",0,0,null,["$1","$0"],["dg","df"],1,0)
p(m,"gkV","f0",3)
o(m=X.em.prototype,"gi1","i2",13)
o(m,"ghQ","hR",13)
o(m,"ghW","hX",4)
o(m,"gi5","i6",27)
o(m,"gi3","i4",27)
o(m,"gi9","ia",4)
o(m,"gie","ig",4)
o(m,"gi_","i0",4)
o(m,"gib","ic",4)
o(m,"ghY","hZ",4)
o(m,"gih","ii",37)
o(m,"gij","ik",13)
o(m,"gix","iy",12)
o(m,"git","iu",12)
o(m,"giv","iw",12)
r(m=D.dL.prototype,"gdJ",0,0,null,["$1","$0"],["dK","i7"],1,0)
o(m,"gim","io",39)
q(m,"ghK","hL",16)
q(m,"gir","is",16)
r(D.bJ.prototype,"gfR",0,0,null,["$1","$0"],["ae","fS"],1,0)
n(V.X.prototype,"gl","cR",15)
n(V.L.prototype,"gl","cR",15)
r(m=U.cy.prototype,"gaS",0,0,null,["$1","$0"],["K","a9"],1,0)
q(m,"gfY","fZ",32)
q(m,"gip","iq",32)
r(m=U.en.prototype,"gaS",0,0,null,["$1","$0"],["K","a9"],1,0)
o(m,"gcb","cc",2)
o(m,"gcd","ce",2)
o(m,"gcf","cg",2)
r(m=U.eo.prototype,"gaS",0,0,null,["$1","$0"],["K","a9"],1,0)
o(m,"gcb","cc",2)
o(m,"gcd","ce",2)
o(m,"gcf","cg",2)
o(m,"ghC","hD",2)
o(m,"ghE","hF",2)
o(m,"gj5","j6",2)
o(m,"gj3","j4",2)
o(m,"gj1","j2",2)
o(U.ep.prototype,"ghH","hI",2)
r(m=M.dA.prototype,"gav",0,0,null,["$1","$0"],["aE","h_"],1,0)
q(m,"ghS","hT",10)
q(m,"ghU","hV",10)
r(m=O.dQ.prototype,"gh1",0,0,null,["$1","$0"],["af","h2"],1,0)
r(m,"giL",0,0,null,["$1","$0"],["dO","iM"],1,0)
q(m,"ghM","hN",30)
q(m,"ghO","hP",30)
r(X.dY.prototype,"gdh",0,0,null,["$1","$0"],["aQ","h5"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.l6,J.a,J.av,P.eI,P.i,H.cB,P.b3,H.bZ,H.cX,H.fJ,H.i7,H.iP,P.bD,H.cq,H.f_,P.ag,H.hp,H.hr,H.hk,P.f5,P.bg,P.aK,P.es,P.ix,P.cM,P.iy,P.bb,P.am,P.ki,P.jW,P.ca,P.eH,P.y,P.k9,P.hx,P.bW,P.he,P.kg,P.ke,P.T,P.an,P.a4,P.b2,P.hZ,P.e6,P.eA,P.h9,P.bE,P.b,P.E,P.N,P.ax,P.e,P.al,P.cb,P.j4,P.jZ,W.fM,W.bP,W.D,W.dW,W.eV,W.k4,W.dB,W.aC,W.jV,W.fc,P.k0,P.jQ,P.S,O.a5,O.cC,E.fD,E.ao,E.i8,E.ef,Z.er,Z.jp,Z.dq,Z.bF,Z.be,D.fG,D.bY,D.A,X.dr,X.dJ,X.hm,X.hu,X.aB,X.hN,X.iL,X.em,D.dw,D.a8,D.bJ,D.e5,D.ec,D.ed,D.ee,V.a6,V.aN,V.h_,V.dS,V.ap,V.aa,V.a2,V.b9,V.e1,V.X,V.L,U.en,U.eo,U.ep,M.dA,A.dm,A.fw,A.hE,A.cQ,A.cU,A.cS,A.cV,A.cT,A.cW,A.bX,A.ei,A.iZ,F.a9,F.h3,F.bn,F.ho,F.bI,F.e4,F.ii,F.ij,F.ik,F.ai,F.jd,F.je,F.jh,F.jj,F.jk,F.jl,O.bM,O.dR,T.iG,V.bi,V.aA,V.dP,V.i6,V.ih,V.cL,V.eg,V.cO,V.iJ,X.ds,X.ea,X.dY,V.bB,V.i4,V.il])
s(J.a,[J.hi,J.dH,J.dI,J.aP,J.bG,J.bl,H.cE,H.bH,W.j,W.ft,W.bU,W.b0,W.b1,W.Y,W.eu,W.fR,W.fS,W.dx,W.ew,W.dz,W.ey,W.fU,W.p,W.eB,W.aO,W.dE,W.eD,W.cz,W.dN,W.hH,W.eJ,W.eK,W.aR,W.eL,W.eO,W.aS,W.eS,W.e_,W.eU,W.aU,W.eW,W.aV,W.f0,W.aH,W.f3,W.iI,W.aX,W.f6,W.iN,W.j9,W.fd,W.ff,W.fh,W.fj,W.fl,P.b5,P.eF,P.b8,P.eQ,P.i3,P.f1,P.bc,P.f8,P.fx,P.et,P.dn,P.dC,P.dZ,P.c8,P.e3,P.ej,P.eY])
s(J.dI,[J.i_,J.bO,J.bm])
t(J.l5,J.aP)
s(J.bG,[J.dG,J.hj])
t(P.ht,P.eI)
s(P.ht,[H.ek,W.jw,W.as,P.h5])
t(H.v,H.ek)
s(P.i,[H.fX,H.hy,H.cZ])
s(H.fX,[H.c2,H.hq])
s(P.b3,[H.hz,H.jq])
t(H.hA,H.c2)
t(H.fK,H.fJ)
s(P.bD,[H.hW,H.hl,H.j2,H.iR,H.fF,H.ie,P.dX,P.aM,P.j3,P.j0,P.c9,P.fI,P.fP])
s(H.cq,[H.kT,H.iD,H.kA,H.kB,H.kC,P.js,P.jr,P.jt,P.ju,P.k8,P.k7,P.jD,P.jH,P.jE,P.jF,P.jG,P.jK,P.jL,P.jJ,P.jI,P.iz,P.iA,P.kq,P.jT,P.jS,P.jU,P.hs,P.hw,P.kf,P.fV,P.fW,P.j8,P.j5,P.j6,P.j7,P.ka,P.kb,P.kd,P.kc,P.km,P.kl,P.kn,P.ko,W.fY,W.hJ,W.hL,W.id,W.iw,W.jC,W.hU,W.hT,W.jX,W.jY,W.k6,W.kh,P.k2,P.ks,P.h6,P.h7,P.fz,E.i9,E.ia,E.ib,E.iH,D.h1,D.h2,F.kj,F.kt,F.kv,F.kw,F.kx,F.kQ,F.kR,F.kS,F.kE,F.ku,F.jn,F.jm,F.jf,F.jg,V.kP,V.i5,V.io,V.im,V.ip,U.kG,U.kH,U.kI,U.kJ,U.kK,U.kL,U.kM])
s(H.iD,[H.iu,H.co])
t(P.hv,P.ag)
s(P.hv,[H.aQ,W.jv])
t(H.dT,H.bH)
s(H.dT,[H.d2,H.d4])
t(H.d3,H.d2)
t(H.cF,H.d3)
t(H.d5,H.d4)
t(H.dU,H.d5)
s(H.dU,[H.hO,H.hP,H.hQ,H.hR,H.hS,H.dV,H.cG])
t(P.jR,P.ki)
t(P.jP,P.jW)
t(P.fa,P.hx)
t(P.el,P.fa)
s(P.bW,[P.fB,P.fZ])
t(P.bC,P.iy)
s(P.bC,[P.fC,P.hd,P.jc,P.jb])
t(P.ja,P.fZ)
s(P.a4,[P.q,P.o])
s(P.aM,[P.c7,P.hf])
t(P.jy,P.cb)
s(W.j,[W.G,W.h4,W.aT,W.d6,W.aW,W.aI,W.d8,W.jo,W.d_,P.fA,P.bT])
s(W.G,[W.V,W.bA,W.ct,W.d0])
s(W.V,[W.z,P.r])
s(W.z,[W.dl,W.fu,W.cn,W.bz,W.bV,W.aF,W.h8,W.dD,W.cA,W.dK,W.ig,W.ba,W.e8,W.e9,W.iC,W.cN])
s(W.b0,[W.cr,W.fN,W.fO])
t(W.fL,W.b1)
t(W.cs,W.eu)
t(W.ex,W.ew)
t(W.dy,W.ex)
t(W.ez,W.ey)
t(W.fT,W.ez)
t(W.aG,W.bU)
t(W.eC,W.eB)
t(W.cw,W.eC)
t(W.eE,W.eD)
t(W.c_,W.eE)
t(W.dF,W.ct)
t(W.bN,W.p)
s(W.bN,[W.b4,W.ah,W.aY])
t(W.hI,W.eJ)
t(W.hK,W.eK)
t(W.eM,W.eL)
t(W.hM,W.eM)
t(W.eP,W.eO)
t(W.cH,W.eP)
t(W.eT,W.eS)
t(W.i1,W.eT)
t(W.ic,W.eU)
t(W.d7,W.d6)
t(W.ir,W.d7)
t(W.eX,W.eW)
t(W.is,W.eX)
t(W.iv,W.f0)
t(W.f4,W.f3)
t(W.iE,W.f4)
t(W.d9,W.d8)
t(W.iF,W.d9)
t(W.f7,W.f6)
t(W.iM,W.f7)
t(W.bf,W.ah)
t(W.fe,W.fd)
t(W.jx,W.fe)
t(W.ev,W.dz)
t(W.fg,W.ff)
t(W.jM,W.fg)
t(W.fi,W.fh)
t(W.eN,W.fi)
t(W.fk,W.fj)
t(W.k_,W.fk)
t(W.fm,W.fl)
t(W.k3,W.fm)
t(W.jz,W.jv)
t(W.jA,P.ix)
t(W.lh,W.jA)
t(W.jB,P.cM)
t(W.k5,W.eV)
t(P.k1,P.k0)
t(P.ab,P.jQ)
t(P.eG,P.eF)
t(P.hn,P.eG)
t(P.eR,P.eQ)
t(P.hX,P.eR)
t(P.cJ,P.r)
t(P.f2,P.f1)
t(P.iB,P.f2)
t(P.f9,P.f8)
t(P.iO,P.f9)
t(P.fy,P.et)
t(P.hY,P.bT)
t(P.eZ,P.eY)
t(P.it,P.eZ)
s(E.fD,[Z.dp,A.cK,T.eb])
s(D.A,[D.c0,D.c1,D.J,X.i2])
s(X.i2,[X.dO,X.bo,X.cD,X.eh])
s(O.a5,[D.dL,U.cy])
s(D.fG,[U.fH,U.ad])
s(U.ad,[U.dt,U.e2])
t(A.hB,A.cK)
s(A.ei,[A.P,A.iV,A.iW,A.iY,A.iT,A.a3,A.iU,A.O,A.iX,A.j_,A.cR,A.aD,A.aq,A.ar])
t(F.iq,F.h3)
t(F.iS,F.ho)
t(F.ji,F.jj)
t(F.hV,F.jk)
t(O.dQ,O.bM)
s(O.dR,[O.hC,O.hD,O.b6])
s(O.b6,[O.hF,O.hG])
s(V.dP,[V.aw,V.cP])
t(X.ha,X.ea)
s(V.bB,[V.fQ,V.hb,V.hc,V.i0])
u(H.ek,H.cX)
u(H.d2,P.y)
u(H.d3,H.bZ)
u(H.d4,P.y)
u(H.d5,H.bZ)
u(P.eI,P.y)
u(P.fa,P.k9)
u(W.eu,W.fM)
u(W.ew,P.y)
u(W.ex,W.D)
u(W.ey,P.y)
u(W.ez,W.D)
u(W.eB,P.y)
u(W.eC,W.D)
u(W.eD,P.y)
u(W.eE,W.D)
u(W.eJ,P.ag)
u(W.eK,P.ag)
u(W.eL,P.y)
u(W.eM,W.D)
u(W.eO,P.y)
u(W.eP,W.D)
u(W.eS,P.y)
u(W.eT,W.D)
u(W.eU,P.ag)
u(W.d6,P.y)
u(W.d7,W.D)
u(W.eW,P.y)
u(W.eX,W.D)
u(W.f0,P.ag)
u(W.f3,P.y)
u(W.f4,W.D)
u(W.d8,P.y)
u(W.d9,W.D)
u(W.f6,P.y)
u(W.f7,W.D)
u(W.fd,P.y)
u(W.fe,W.D)
u(W.ff,P.y)
u(W.fg,W.D)
u(W.fh,P.y)
u(W.fi,W.D)
u(W.fj,P.y)
u(W.fk,W.D)
u(W.fl,P.y)
u(W.fm,W.D)
u(P.eF,P.y)
u(P.eG,W.D)
u(P.eQ,P.y)
u(P.eR,W.D)
u(P.f1,P.y)
u(P.f2,W.D)
u(P.f8,P.y)
u(P.f9,W.D)
u(P.et,P.ag)
u(P.eY,P.y)
u(P.eZ,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bz.prototype
C.x=W.bV.prototype
C.k=W.aF.prototype
C.T=W.dx.prototype
C.V=W.dD.prototype
C.W=W.dE.prototype
C.z=W.dF.prototype
C.Y=J.a.prototype
C.a=J.aP.prototype
C.f=J.dG.prototype
C.q=J.dH.prototype
C.e=J.bG.prototype
C.b=J.bl.prototype
C.a4=J.bm.prototype
C.F=W.dK.prototype
C.aa=W.cH.prototype
C.L=J.i_.prototype
C.M=W.e_.prototype
C.c=P.c8.prototype
C.w=W.ba.prototype
C.o=W.e8.prototype
C.n=W.e9.prototype
C.C=J.bO.prototype
C.N=W.bf.prototype
C.O=W.d_.prototype
C.Q=new P.fC(!1)
C.P=new P.fB(C.Q)
C.R=new P.hZ()
C.S=new P.jc()
C.l=new P.jR()
C.d=new A.bX(0,"ColorSourceType.None")
C.j=new A.bX(1,"ColorSourceType.Solid")
C.h=new A.bX(2,"ColorSourceType.Texture2D")
C.i=new A.bX(3,"ColorSourceType.TextureCube")
C.y=new P.b2(0)
C.U=new P.b2(5e6)
C.X=new P.he("element",!0,!1,!1,!1)
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
C.a9=new H.fK(0,{},C.H,[P.e,P.e])
C.m=new P.ja(!1)})();(function staticFields(){$.b_=0
$.cp=null
$.lK=null
$.ll=!1
$.mP=null
$.mH=null
$.mV=null
$.ky=null
$.kD=null
$.lv=null
$.cd=null
$.dd=null
$.de=null
$.lm=!1
$.a1=C.l
$.bk=null
$.l1=null
$.lQ=null
$.lP=null
$.lZ=null
$.m2=null
$.bL=null
$.m7=null
$.mj=null
$.mo=null
$.ml=null
$.mm=null
$.mn=null
$.mk=null
$.m1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pr","n_",function(){return H.mO("_$dart_dartClosure")})
u($,"ps","lz",function(){return H.mO("_$dart_js")})
u($,"py","n0",function(){return H.bd(H.iQ({
toString:function(){return"$receiver$"}}))})
u($,"pz","n1",function(){return H.bd(H.iQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pA","n2",function(){return H.bd(H.iQ(null))})
u($,"pB","n3",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pE","n6",function(){return H.bd(H.iQ(void 0))})
u($,"pF","n7",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pD","n5",function(){return H.bd(H.me(null))})
u($,"pC","n4",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pH","n9",function(){return H.bd(H.me(void 0))})
u($,"pG","n8",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pX","lA",function(){return P.ol()})
u($,"q2","dj",function(){return[]})
u($,"pJ","na",function(){return P.oi()})
u($,"pY","ne",function(){return H.nT(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"q0","ng",function(){return P.o7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"q1","nh",function(){return P.oK()})
u($,"pZ","nf",function(){return P.lS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"q_","lB",function(){return P.l8(P.e,P.bE)})
u($,"pQ","nd",function(){return Z.aJ(0)})
u($,"pK","nb",function(){return Z.aJ(511)})
u($,"pS","bv",function(){return Z.aJ(1)})
u($,"pR","bu",function(){return Z.aJ(2)})
u($,"pM","bt",function(){return Z.aJ(4)})
u($,"pT","bw",function(){return Z.aJ(8)})
u($,"pU","bx",function(){return Z.aJ(16)})
u($,"pN","dh",function(){return Z.aJ(32)})
u($,"pO","di",function(){return Z.aJ(64)})
u($,"pP","nc",function(){return Z.aJ(96)})
u($,"pV","cm",function(){return Z.aJ(128)})
u($,"pL","bs",function(){return Z.aJ(256)})
u($,"pq","mZ",function(){return new V.h_(1e-9)})
u($,"pp","K",function(){return $.mZ()})})()
var v={mangledGlobalNames:{o:"int",q:"double",a4:"num",e:"String",T:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.N,args:[D.A]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.ai,P.q,P.q]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ao]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:V.a2,args:[P.q]},{func:1,ret:P.T,args:[W.V,P.e,P.e,W.bP]},{func:1,ret:P.N,args:[W.p]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.T,args:[W.aC]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ap]]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[P.o,[P.i,U.ad]]},{func:1,ret:W.V,args:[W.G]},{func:1,args:[W.p]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.N,args:[P.e,,]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.N,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.ax]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bb]},{func:1,args:[P.e]},{func:1,ret:P.T,args:[V.bB]},{func:1,args:[,P.e]},{func:1,ret:P.N,args:[P.a4]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cE,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cF,Float64Array:H.cF,Int16Array:H.hO,Int32Array:H.hP,Int8Array:H.hQ,Uint16Array:H.hR,Uint32Array:H.hS,Uint8ClampedArray:H.dV,CanvasPixelArray:H.dV,Uint8Array:H.cG,HTMLAudioElement:W.z,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLImageElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMediaElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLVideoElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.ft,HTMLAnchorElement:W.dl,HTMLAreaElement:W.fu,HTMLBaseElement:W.cn,Blob:W.bU,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bV,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cr,CSSUnitValue:W.cr,CSSPerspective:W.fL,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fN,CSSUnparsedValue:W.fO,DataTransferItemList:W.fR,HTMLDivElement:W.aF,XMLDocument:W.ct,Document:W.ct,DOMException:W.fS,DOMImplementation:W.dx,ClientRectList:W.dy,DOMRectList:W.dy,DOMRectReadOnly:W.dz,DOMStringList:W.fT,DOMTokenList:W.fU,Element:W.V,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aG,FileList:W.cw,FileWriter:W.h4,HTMLFormElement:W.h8,Gamepad:W.aO,HTMLHeadElement:W.dD,History:W.dE,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,HTMLDocument:W.dF,ImageData:W.cz,HTMLInputElement:W.cA,KeyboardEvent:W.b4,HTMLLabelElement:W.dK,Location:W.dN,MediaList:W.hH,MIDIInputMap:W.hI,MIDIOutputMap:W.hK,MimeType:W.aR,MimeTypeArray:W.hM,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,DocumentFragment:W.G,ShadowRoot:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cH,RadioNodeList:W.cH,Plugin:W.aS,PluginArray:W.i1,Range:W.e_,RTCStatsReport:W.ic,HTMLSelectElement:W.ig,SourceBuffer:W.aT,SourceBufferList:W.ir,SpeechGrammar:W.aU,SpeechGrammarList:W.is,SpeechRecognitionResult:W.aV,Storage:W.iv,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.e8,HTMLTableRowElement:W.e9,HTMLTableSectionElement:W.iC,HTMLTemplateElement:W.cN,TextTrack:W.aW,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iI,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iM,TrackDefaultList:W.iN,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.j9,VideoTrackList:W.jo,WheelEvent:W.bf,Window:W.d_,DOMWindow:W.d_,Attr:W.d0,CSSRuleList:W.jx,ClientRect:W.ev,DOMRect:W.ev,GamepadList:W.jM,NamedNodeMap:W.eN,MozNamedAttrMap:W.eN,SpeechRecognitionResultList:W.k_,StyleSheetList:W.k3,SVGLength:P.b5,SVGLengthList:P.hn,SVGNumber:P.b8,SVGNumberList:P.hX,SVGPointList:P.i3,SVGScriptElement:P.cJ,SVGStringList:P.iB,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGTransform:P.bc,SVGTransformList:P.iO,AudioBuffer:P.fx,AudioParamMap:P.fy,AudioTrackList:P.fA,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hY,WebGLBuffer:P.dn,WebGLFramebuffer:P.dC,WebGLProgram:P.dZ,WebGL2RenderingContext:P.c8,WebGLShader:P.e3,WebGLUniformLocation:P.ej,SQLResultSetRowList:P.it})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mS,[])
else U.mS([])})})()
//# sourceMappingURL=test.dart.js.map
