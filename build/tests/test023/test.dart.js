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
a[c]=function(){a[c]=function(){H.pu(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lu(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={la:function la(a){this.a=a},
kF:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hh:function(){return new P.c7("No element")},
nK:function(){return new P.c7("Too many elements")},
nJ:function(){return new P.c7("Too few elements")},
v:function v(a){this.a=a},
fY:function fY(){},
c1:function c1(){},
cA:function cA(a,b,c,d){var _=this
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
d_:function d_(a,b,c){this.a=a
this.b=b
this.$ti=c},
jw:function jw(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(){},
cY:function cY(){},
en:function en(){},
nA:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
ck:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pb:function(a){return v.types[H.ai(a)]},
pi:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iK},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
o7:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hi(u)
t=u[0]
s=u[1]
return new H.i7(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o4:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.H(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
c3:function(a){return H.nW(a)+H.lr(H.bQ(a),0,null)},
nW:function(a){var u,t,s,r,q,p,o,n,m
u=J.T(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibM){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ck(r.length>1&&C.c.H(r,0)===36?C.c.ap(r,1):r)},
nX:function(){if(!!self.location)return self.location.href
return},
m5:function(a){var u,t,s,r,q
H.kL(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o5:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.as(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aT(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.as(r))}return H.m5(u)},
m6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.o5(a)}return H.m5(a)},
o6:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.ae(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o3:function(a){var u=H.c2(a).getFullYear()+0
return u},
o1:function(a){var u=H.c2(a).getMonth()+1
return u},
nY:function(a){var u=H.c2(a).getDate()+0
return u},
nZ:function(a){var u=H.c2(a).getHours()+0
return u},
o0:function(a){var u=H.c2(a).getMinutes()+0
return u},
o2:function(a){var u=H.c2(a).getSeconds()+0
return u},
o_:function(a){var u=H.c2(a).getMilliseconds()+0
return u},
J:function(a){throw H.c(H.as(a))},
f:function(a,b){if(a==null)J.aC(a)
throw H.c(H.cf(a,b))},
cf:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
u=H.ai(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.J(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,"index",null,u)
return P.e4(b,"index",null)},
p4:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
as:function(a){return new P.aK(!0,a,null,null)},
p_:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.e_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mY})
u.name=""}else u.toString=H.mY
return u},
mY:function(){return J.au(this.dartException)},
r:function(a){throw H.c(a)},
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
return new H.iR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.hW(a,b==null?null:b.method)},
lb:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hl(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aT(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lb(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m1(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.n1()
p=$.n2()
o=$.n3()
n=$.n4()
m=$.n7()
l=$.n8()
k=$.n6()
$.n5()
j=$.na()
i=$.n9()
h=q.ad(t)
if(h!=null)return u.$1(H.lb(H.H(t),h))
else{h=p.ad(t)
if(h!=null){h.method="call"
return u.$1(H.lb(H.H(t),h))}else{h=o.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=m.ad(t)
if(h==null){h=l.ad(t)
if(h==null){h=k.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=j.ad(t)
if(h==null){h=i.ad(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m1(H.H(t),h))}}return u.$1(new H.j4(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e9()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aK(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e9()
return a},
ci:function(a){var u
if(a==null)return new H.f0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f0(a)},
p7:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
ph:function(a,b,c,d,e,f){H.h(a,"$ibD")
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
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ph)
a.$identity=u
return u},
nz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.T(d).$ib){u.$reflectionInfo=d
s=H.o7(u).r}else s=d
r=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aZ
if(typeof p!=="number")return p.p()
$.aZ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lR(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pb,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lP:H.l3
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lR(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nw:function(a,b,c,d){var u=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ny(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nw(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
if(q==null){q=H.fF("self")
$.co=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.p()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
if(q==null){q=H.fF("self")
$.co=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
nx:function(a,b,c,d){var u,t
u=H.l3
t=H.lP
switch(b?-1:a){case 0:throw H.c(H.ob("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ny:function(a,b){var u,t,s,r,q,p,o,n
u=$.co
if(u==null){u=H.fF("self")
$.co=u}t=$.lO
if(t==null){t=H.fF("receiver")
$.lO=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nx(r,!p,s,b)
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
lu:function(a,b,c,d,e,f,g){return H.nz(a,b,H.ai(c),d,!!e,!!f,g)},
l3:function(a){return a.a},
lP:function(a){return a.c},
fF:function(a){var u,t,s,r,q
u=new H.cn("self","target","receiver","name")
t=J.hi(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
p5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
pn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
ls:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mW:function(a,b){throw H.c(H.aY(a,H.ck(H.H(b).substring(2))))},
pp:function(a,b){throw H.c(H.nv(a,H.ck(H.H(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.mW(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pp(a,b)},
kL:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mT:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.mW(a,b)},
mP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
fp:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mP(J.T(a))
if(u==null)return!1
return H.mC(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lo)return a
$.lo=!0
try{if(H.fp(a,b))return a
u=H.kU(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.lo=!1}},
lw:function(a,b){if(a!=null&&!H.lt(a,b))H.r(H.aY(a,H.kU(b)))
return a},
aY:function(a,b){return new H.iT("TypeError: "+P.h1(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
nv:function(a,b){return new H.fG("CastError: "+P.h1(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t
u=J.T(a)
if(!!u.$icp){t=H.mP(u)
if(t!=null)return H.kU(t)
return"Closure"}return H.c3(a)},
pu:function(a){throw H.c(new P.fQ(H.H(a)))},
ob:function(a){return new H.ie(a)},
mQ:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
qf:function(a,b,c){return H.cj(a["$a"+H.l(c)],H.bQ(b))},
bP:function(a,b,c,d){var u
H.H(c)
H.ai(d)
u=H.cj(a["$a"+H.l(c)],H.bQ(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.H(b)
H.ai(c)
u=H.cj(a["$a"+H.l(b)],H.bQ(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ai(b)
u=H.bQ(a)
return u==null?null:u[b]},
kU:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.lr(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.oP(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
o=C.c.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.O)o+=" extends "+H.bO(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bO(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bO(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bO(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.p6(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bO(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lr:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dg:function(a,b,c,d){var u,t
H.H(b)
H.kL(c)
H.H(d)
if(a==null)return!1
u=H.bQ(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mK(H.cj(t[d],u),null,c,null)},
k:function(a,b,c,d){H.H(b)
H.kL(c)
H.H(d)
if(a==null)return a
if(H.dg(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.lr(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
qd:function(a,b,c){return a.apply(b,H.cj(J.T(b)["$a"+H.l(c)],H.bQ(b)))},
mS:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="L"||a===-1||a===-2||H.mS(u)}return!1},
lt:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="L"||b===-1||b===-2||H.mS(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fp(a,b)}u=J.T(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lt(a,b))throw H.c(H.aY(a,H.kU(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mC(a,b,c,d)
if('func' in a)return c.name==="bD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aJ("type" in a?a.type:null,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cw" in t.prototype))return!1
r=t.prototype["$a"+"cw"]
q=H.cj(r,u?a.slice(1):null)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mK(H.cj(m,u),b,p,d)},
mC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pm(h,b,g,d)},
pm:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aJ(c[r],d,a[r],b))return!1}return!0},
qe:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
pk:function(a){var u,t,s,r,q,p
u=H.H($.mR.$1(a))
t=$.kE[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kJ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.mJ.$2(a,u))
if(u!=null){t=$.kE[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kJ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kT(s)
$.kE[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kJ[u]=s
return s}if(q==="-"){p=H.kT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mV(a,s)
if(q==="*")throw H.c(P.j3(u))
if(v.leafTags[u]===true){p=H.kT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mV(a,s)},
mV:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ly(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kT:function(a){return J.ly(a,!1,null,!!a.$iK)},
pl:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kT(u)
else return J.ly(u,c,null,null)},
pf:function(){if(!0===$.lx)return
$.lx=!0
H.pg()},
pg:function(){var u,t,s,r,q,p,o,n
$.kE=Object.create(null)
$.kJ=Object.create(null)
H.pe()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mX.$1(q)
if(p!=null){o=H.pl(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pe:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.cd(C.a0,H.cd(C.a5,H.cd(C.E,H.cd(C.E,H.cd(C.a4,H.cd(C.a1,H.cd(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mR=new H.kG(q)
$.mJ=new H.kH(p)
$.mX=new H.kI(o)},
cd:function(a,b){return a(b)||b},
nM:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pt:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lB:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fK:function fK(){},
fL:function fL(a,b,c,d){var _=this
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
iR:function iR(a,b,c,d,e,f){var _=this
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
j4:function j4(a){this.a=a},
kZ:function kZ(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
cp:function cp(){},
iD:function iD(){},
iu:function iu(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a){this.a=a},
fG:function fG(a){this.a=a},
ie:function ie(a){this.a=a},
aO:function aO(a){var _=this
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
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
nU:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cf(b,a))},
oN:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p4(a,b,c))
return b},
cD:function cD(){},
bH:function bH(){},
dW:function dW(){},
cE:function cE(){},
dX:function dX(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
dY:function dY(){},
cF:function cF(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
p6:function(a){return J.lX(a?Object.keys(a):[],null)},
po:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ly:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fr:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lx==null){H.pf()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.j3("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lD()]
if(q!=null)return q
q=H.pk(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lD(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nL:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ae(a,0,4294967295,"length",null))
return J.lX(new Array(a),b)},
lX:function(a,b){return J.hi(H.d(a,[b]))},
hi:function(a){H.kL(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dI.prototype
return J.dH.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.dJ.prototype
if(typeof a=="boolean")return J.hj.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.fr(a)},
p8:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.fr(a)},
ch:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.fr(a)},
fq:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.fr(a)},
p9:function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bM.prototype
return a},
pa:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bM.prototype
return a},
dh:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bM.prototype
return a},
ad:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.O)return a
return J.fr(a)},
nj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p8(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).v(a,b)},
lG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pa(a).F(a,b)},
nk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p9(a).t(a,b)},
lH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pi(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ch(a).j(a,b)},
l_:function(a,b,c){return J.fq(a).n(a,b,c)},
nl:function(a,b){return J.dh(a).H(a,b)},
ft:function(a,b){return J.ad(a).iw(a,b)},
l0:function(a,b,c){return J.ad(a).iA(a,b,c)},
nm:function(a,b,c,d){return J.ad(a).jv(a,b,c,d)},
lI:function(a,b){return J.ad(a).D(a,b)},
nn:function(a,b){return J.dh(a).a_(a,b)},
fu:function(a,b){return J.fq(a).K(a,b)},
no:function(a,b,c,d){return J.ad(a).kf(a,b,c,d)},
lJ:function(a,b){return J.fq(a).N(a,b)},
np:function(a){return J.ad(a).gjG(a)},
lK:function(a){return J.ad(a).gcs(a)},
dl:function(a){return J.T(a).gJ(a)},
bx:function(a){return J.fq(a).gV(a)},
aC:function(a){return J.ch(a).gl(a)},
nq:function(a){return J.ad(a).gl0(a)},
l1:function(a,b){return J.ad(a).aZ(a,b)},
lL:function(a){return J.fq(a).kR(a)},
nr:function(a,b){return J.ad(a).kV(a,b)},
ns:function(a,b,c){return J.ad(a).fe(a,b,c)},
nt:function(a,b,c){return J.dh(a).u(a,b,c)},
nu:function(a){return J.dh(a).l7(a)},
au:function(a){return J.T(a).i(a)},
a:function a(){},
hj:function hj(){},
dJ:function dJ(){},
dK:function dK(){},
i_:function i_(){},
bM:function bM(){},
bl:function bl(){},
aN:function aN(a){this.$ti=a},
l9:function l9(a){this.$ti=a},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bF:function bF(){},
dI:function dI(){},
dH:function dH(){},
bk:function bk(){}},P={
op:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oX()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ce(new P.jy(u),1)).observe(t,{childList:true})
return new P.jx(u,t,s)}else if(self.setImmediate!=null)return P.oY()
return P.oZ()},
oq:function(a){self.scheduleImmediate(H.ce(new P.jz(H.n(a,{func:1,ret:-1})),0))},
or:function(a){self.setImmediate(H.ce(new P.jA(H.n(a,{func:1,ret:-1})),0))},
os:function(a){P.lf(C.y,H.n(a,{func:1,ret:-1}))},
lf:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.oy(u<0?0:u,b)},
me:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b9]})
u=C.f.a6(a.a,1000)
return P.oz(u<0?0:u,b)},
oy:function(a,b){var u=new P.f6(!0)
u.fO(a,b)
return u},
oz:function(a,b){var u=new P.f6(!1)
u.fP(a,b)
return u},
ot:function(a,b){var u,t,s
b.a=1
try{a.eT(new P.jK(b),new P.jL(b),null)}catch(s){u=H.aj(s)
t=H.ci(s)
P.pq(new P.jM(b,u,t))}},
mr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaI")
if(u>=4){t=b.c9()
b.a=a.a
b.c=a.c
P.d2(b,t)}else{t=H.h(b.c,"$ibe")
b.a=2
b.c=a
a.dC(t)}},
d2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.kv(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d2(u.a,b)}t=u.a
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
P.kv(null,null,t,p,o)
return}j=$.a0
if(j!=l)$.a0=l
else j=null
t=b.c
if(t===8)new P.jQ(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jP(s,b,m).$0()}else if((t&2)!==0)new P.jO(u,s,b).$0()
if(j!=null)$.a0=j
t=s.b
if(!!J.T(t).$icw){if(t.a>=4){i=H.h(o.c,"$ibe")
o.c=null
b=o.bo(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mr(t,o)
return}}h=b.b
i=H.h(h.c,"$ibe")
h.c=null
b=h.bo(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.h(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
oS:function(a,b){if(H.fp(a,{func:1,args:[P.O,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.O,P.aw]})
if(H.fp(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.c(P.l2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oR:function(){var u,t
for(;u=$.cc,u!=null;){$.df=null
t=u.b
$.cc=t
if(t==null)$.de=null
u.a.$0()}},
oW:function(){$.lp=!0
try{P.oR()}finally{$.df=null
$.lp=!1
if($.cc!=null)$.lE().$1(P.mL())}},
mG:function(a){var u=new P.et(H.n(a,{func:1,ret:-1}))
if($.cc==null){$.de=u
$.cc=u
if(!$.lp)$.lE().$1(P.mL())}else{$.de.b=u
$.de=u}},
oV:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.mG(a)
$.df=$.de
return}t=new P.et(a)
s=$.df
if(s==null){t.b=u
$.df=t
$.cc=t}else{t.b=s.b
s.b=t
$.df=t
if(t.b==null)$.de=t}},
pq:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a0
if(C.l===t){P.kx(null,null,C.l,a)
return}t.toString
P.kx(null,null,t,H.n(t.cn(a),u))},
md:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.lf(a,b)}return P.lf(a,H.n(t.cn(b),u))},
of:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b9]}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.me(a,b)}s=t.dS(b,P.b9)
$.a0.toString
return P.me(a,H.n(s,u))},
kv:function(a,b,c,d,e){var u={}
u.a=d
P.oV(new P.kw(u,e))},
mD:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mE:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
oT:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kx:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cn(d):c.jH(d,-1)
P.mG(d)},
jy:function jy(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
f6:function f6(a){this.a=a
this.b=null
this.c=0},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
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
jJ:function jJ(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a
this.b=null},
ix:function ix(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
cM:function cM(){},
iy:function iy(){},
b9:function b9(){},
am:function am(a,b){this.a=a
this.b=b},
ko:function ko(){},
kw:function kw(a,b){this.a=a
this.b=b},
jX:function jX(){},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function(a,b,c,d,e){return new H.aO([d,e])},
lc:function(a,b){return new H.aO([a,b])},
nQ:function(a){return H.p7(a,new H.aO([null,null]))},
dO:function(a,b,c,d){return new P.jV([d])},
ll:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ox:function(a,b,c){var u=new P.eI(a,b,[c])
u.c=a.e
return u},
nI:function(a,b,c){var u,t
if(P.lq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dk()
C.a.h(t,a)
try{P.oQ(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.mb(b,H.mT(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l8:function(a,b,c){var u,t,s
if(P.lq(a))return b+"..."+c
u=new P.al(b)
t=$.dk()
C.a.h(t,a)
try{s=u
s.a=P.mb(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lq:function(a){var u,t
for(u=0;t=$.dk(),u<t.length;++u)if(a===t[u])return!0
return!1},
oQ:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.E();o=n,n=m){m=u.gL(u);++s
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
nP:function(a,b,c){var u=P.nO(null,null,null,b,c)
a.N(0,new P.hs(u,b,c))
return u},
lY:function(a,b){var u,t,s
u=P.dO(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.A(a[s],b))
return u},
ld:function(a){var u,t
u={}
if(P.lq(a))return"{...}"
t=new P.al("")
try{C.a.h($.dk(),a)
t.a+="{"
u.a=!0
J.lJ(a,new P.hw(u,t))
t.a+="}"}finally{u=$.dk()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jV:function jV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
eI:function eI(a,b,c){var _=this
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
af:function af(){},
kf:function kf(){},
hx:function hx(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
k1:function k1(){},
eJ:function eJ(){},
fc:function fc(){},
oj:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.ok(!1,b,c,d)
return},
ok:function(a,b,c,d){var u,t,s
u=$.nb()
if(u==null)return
t=0===c
if(t&&!0)return P.li(u,b)
s=b.length
d=P.bp(c,d,s,null,null,null)
if(t&&d===s)return P.li(u,b)
return P.li(u,b.subarray(c,d))},
li:function(a,b){if(P.om(b))return
return P.on(a,b)},
on:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
om:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
ol:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
oU:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.ch(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bO()
if((s&127)!==s)return t-b}return c-b},
lN:function(a,b,c,d,e,f){if(C.f.bh(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
bV:function bV(){},
bB:function bB(){},
h_:function h_(){},
hf:function hf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
he:function he(a){this.a=a},
jc:function jc(a){this.a=a},
je:function je(){},
km:function km(a){this.b=this.a=0
this.c=a},
jd:function jd(a){this.a=a},
kk:function kk(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kl:function kl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.o4(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nF:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.c3(a)+"'"},
nR:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nL(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
lZ:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bx(a);s.E();)C.a.h(t,H.A(s.gL(s),c))
if(b)return t
return H.k(J.hi(t),"$ib",u,"$ab")},
ea:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaN",[u],"$aaN")
t=a.length
c=P.bp(b,c,t,null,null,null)
return H.m6(b>0||c<t?C.a.fj(a,b,c):a)}if(!!J.T(a).$icF)return H.o6(a,b,P.bp(b,c,a.length,null,null,null))
return P.od(a,b,c)},
od:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ae(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ae(c,b,J.aC(a),null,null))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.ae(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.ae(c,b,s,null,null))
r.push(t.gL(t))}return H.m6(r)},
o9:function(a,b,c){return new H.hk(a,H.nM(a,!1,!0,!1))},
mb:function(a,b,c){var u=J.bx(b)
if(!u.E())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.E())}else{a+=H.l(u.gL(u))
for(;u.E();)a=a+c+H.l(u.gL(u))}return a},
mh:function(){var u=H.nX()
if(u!=null)return P.oi(u,0,null)
throw H.c(P.G("'Uri.base' is not supported"))},
fd:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nh().b
if(typeof b!=="string")H.r(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.at(c,"bV",0))
t=c.gke().ct(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c4(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nB:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw:function(a){if(a>=10)return""+a
return"0"+a},
lT:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nF(a)},
dn:function(a){return new P.aK(!1,null,null,a)},
l2:function(a,b,c){return new P.aK(!0,a,b,c)},
e4:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c,d,e,f){if(typeof a!=="number")return H.J(a)
if(0>a||a>c)throw H.c(P.ae(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ae(b,a,c,"end",f))
return b}return c},
Z:function(a,b,c,d,e){var u=H.ai(e==null?J.aC(b):e)
return new P.hg(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.j5(a)},
j3:function(a){return new P.j2(a)},
ma:function(a){return new P.c7(a)},
bh:function(a){return new P.fJ(a)},
w:function(a){return new P.eB(a)},
a7:function(a,b,c){return new P.ha(a,b,c)},
nS:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lA:function(a){H.po(a)},
oi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.mg(b>0||c<c?C.c.u(a,b,c):a,5,null).geY()
else if(t===32)return P.mg(C.c.u(a,u,c),0,null).geY()}s=new Array(8)
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
if(P.mF(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lg()
if(q>=b)if(P.mF(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.J(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.a9(a,"..",n)))i=m>n+2&&C.c.a9(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a9(a,"file",b)){if(p<=b){if(!C.c.a9(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.c.aY(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a9(a,"http",b)){if(s&&o+3===n&&C.c.a9(a,"80",o+1))if(b===0&&!0){a=C.c.aY(a,o,n,"")
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
else if(q===u&&C.c.a9(a,"https",b)){if(s&&o+4===n&&C.c.a9(a,"443",o+1))if(b===0&&!0){a=C.c.aY(a,o,n,"")
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
l-=b}return new P.k4(a,q,p,o,n,m,l,j)}return P.oA(a,b,c,q,p,o,n,m,l,j)},
mj:function(a,b){var u=P.e
return C.a.kk(H.d(a.split("&"),[u]),P.lc(u,u),new P.ja(b),[P.E,P.e,P.e])},
oh:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.j7(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a_(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fs(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.fb()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fs(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.fb()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j8(a)
t=new P.j9(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a_(a,r)
if(n===58){if(r===b){++r
if(C.c.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oh(a,q,c)
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
oA:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oH(a,b,d)
else{if(d===b)P.db(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oI(a,u,e-1):""
s=P.oE(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.J(g)
q=r<g?P.oG(P.fs(C.c.u(a,r,g),new P.kg(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oF(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lm(a,h+1,i,null):null
return new P.ca(j,t,s,q,p,o,i<c?P.oD(a,i+1,c):null)},
mv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
db:function(a,b,c){throw H.c(P.a7(c,a,b))},
oG:function(a,b){if(a!=null&&a===P.mv(b))return
return a},
oE:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.a_(a,u)!==93)P.db(a,b,"Missing end `]` to match `[` in host")
P.mi(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.J(c)
t=b
for(;t<c;++t)if(C.c.a_(a,t)===58){P.mi(a,b,c)
return"["+a+"]"}return P.oK(a,b,c)},
oK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.J(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a_(a,u)
if(q===37){p=P.mB(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.db(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mw(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oH:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.my(C.c.H(a,b)))P.db(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.db(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.oB(t?a.toLowerCase():a)},
oB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oI:function(a,b,c){return P.dc(a,b,c,C.a9,!1)},
oF:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dc(a,b,c,C.L,!0):C.r.lk(d,new P.kh(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.oJ(r,e,f)},
oJ:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.oL(a,!u||c)
return P.oM(a)},
lm:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.dn("Both query and queryParameters specified"))
return P.dc(a,b,c,C.u,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.N(0,new P.ki(new P.kj(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oD:function(a,b,c){return P.dc(a,b,c,C.u,!0)},
mB:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a_(a,b+1)
s=C.c.a_(a,u)
r=H.kF(t)
q=H.kF(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aT(p,4)
if(u>=8)return H.f(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c4(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
mw:function(a){var u,t,s,r,q,p
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
for(q=0;--r,r>=0;s=128){p=C.f.iQ(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.ea(t,0,null)},
dc:function(a,b,c,d,e){var u=P.mA(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.u(a,b,c):u},
mA:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.J(c)
if(!(t<c))break
c$0:{q=C.c.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mB(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.db(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mw(q)}}if(r==null)r=new P.al("")
r.a+=C.c.u(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.J(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mz:function(a){if(C.c.a5(a,"."))return!0
return C.c.es(a,"/.")!==-1},
oM:function(a){var u,t,s,r,q,p,o
if(!P.mz(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oL:function(a,b){var u,t,s,r,q,p
if(!P.mz(a))return!b?P.mx(a):a
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
C.a.n(u,0,P.mx(u[0]))}return C.a.m(u,"/")},
mx:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.my(J.nl(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.ap(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oC:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dn("Invalid URL encoding"))}}return u},
ln:function(a,b,c,d,e){var u,t,s,r,q
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
if(s>127)throw H.c(P.dn("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dn("Truncated URI"))
C.a.h(q,P.oC(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.jd(!1).ct(q)},
my:function(a){var u=a|32
return 97<=u&&u<=122},
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.a9(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kz(0,a,n,t)
else{m=P.mA(a,n,t,C.u,!0)
if(m!=null)a=C.c.aY(a,n,t,m)}return new P.j6(a,u,c)},
oO:function(){var u,t,s,r,q
u=P.nS(22,new P.ks(),!0,P.P)
t=new P.kr(u)
s=new P.kt()
r=new P.ku()
q=H.h(t.$2(0,225),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(14,225),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(15,225),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(1,225),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(2,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(3,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(4,229),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(5,229),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(6,231),"$iP")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(7,231),"$iP")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.h(t.$2(8,8),"$iP"),"]",5)
q=H.h(t.$2(9,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(16,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(17,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(10,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(18,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(19,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(11,235),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(12,236),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.h(t.$2(13,237),"$iP")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.h(t.$2(20,245),"$iP"),"az",21)
q=H.h(t.$2(21,245),"$iP")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mF:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.ni()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
Q:function Q(){},
ay:function ay(a,b){this.a=a
this.b=b},
t:function t(){},
b1:function b1(a){this.a=a},
fW:function fW(){},
fX:function fX(){},
bC:function bC(){},
e_:function e_(){},
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
hg:function hg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j5:function j5(a){this.a=a},
j2:function j2(a){this.a=a},
c7:function c7(a){this.a=a},
fJ:function fJ(a){this.a=a},
hZ:function hZ(){},
e9:function e9(){},
fQ:function fQ(a){this.a=a},
eB:function eB(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
o:function o(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
E:function E(){},
L:function L(){},
a5:function a5(){},
O:function O(){},
aw:function aw(){},
e:function e(){},
al:function al(a){this.a=a},
ja:function ja(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a,b){this.a=a
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
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(){},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a){this.a=a},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(){},
kr:function kr(a){this.a=a},
kt:function kt(){},
ku:function ku(){},
k4:function k4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jE:function jE(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
p2:function(a){var u,t
u=J.T(a)
if(!!u.$ibj){t=u.gdX(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fb(a.data,a.height,a.width)},
p1:function(a){if(a instanceof P.fb)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.lc(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.n(0,q,a[q])}return u},
p0:function(a,b){var u={}
a.N(0,new P.ky(u))
return u},
k6:function k6(){},
k8:function k8(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
k7:function k7(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(){},
jU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ow:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jW:function jW(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hn:function hn(){},
b6:function b6(){},
hX:function hX(){},
i3:function i3(){},
cJ:function cJ(){},
iB:function iB(){},
q:function q(){},
ba:function ba(){},
iQ:function iQ(){},
eG:function eG(){},
eH:function eH(){},
eR:function eR(){},
eS:function eS(){},
f2:function f2(){},
f3:function f3(){},
f9:function f9(){},
fa:function fa(){},
P:function P(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(a){this.a=a},
fB:function fB(){},
bR:function bR(){},
hY:function hY(){},
eu:function eu(){},
dq:function dq(){},
dD:function dD(){},
e2:function e2(){},
c6:function c6(){},
e6:function e6(){},
ee:function ee(){},
em:function em(){},
it:function it(){},
eZ:function eZ(){},
f_:function f_(){}},W={
lM:function(a){var u=document.createElement("a")
return u},
l4:function(a,b){var u=document.createElement("canvas")
return u},
nD:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ac(u,a,b,c)
t.toString
u=W.F
u=new H.d_(new W.ar(t),H.n(new W.fZ(),{func:1,ret:P.Q,args:[u]}),[u])
return H.h(u.gaM(u),"$iS")},
nE:function(a){H.h(a,"$ij")
return"wheel"},
ct:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nq(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aj(s)}return u},
nH:function(a){var u,t,s
t=document.createElement("input")
u=H.h(t,"$icz")
try{u.type=a}catch(s){H.aj(s)}return u},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mt:function(a,b,c,d){var u,t
u=W.jT(W.jT(W.jT(W.jT(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mI(new W.jI(c),W.p)
if(u!=null&&!0)J.nm(a,b,u,!1)
return new W.jH(a,b,u,!1,[e])},
ms:function(a){var u,t
u=W.lM(null)
t=window.location
u=new W.bN(new W.k0(u,t))
u.fC(a)
return u},
ou:function(a,b,c,d){H.h(a,"$iS")
H.H(b)
H.H(c)
H.h(d,"$ibN")
return!0},
ov:function(a,b,c,d){var u,t,s
H.h(a,"$iS")
H.H(b)
H.H(c)
u=H.h(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mu:function(){var u,t,s,r,q
u=P.e
t=P.lY(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.kc(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kb(t,P.dO(null,null,null,u),P.dO(null,null,null,u),P.dO(null,null,null,u),null)
t.fL(null,new H.hA(C.A,r,[s,u]),q,null)
return t},
mI:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.l)return a
return u.dS(a,b)},
z:function z(){},
fv:function fv(){},
dm:function dm(){},
fw:function fw(){},
cm:function cm(){},
bS:function bS(){},
by:function by(){},
bT:function bT(){},
bU:function bU(){},
bz:function bz(){},
cq:function cq(){},
fM:function fM(){},
V:function V(){},
cr:function cr(){},
fN:function fN(){},
b_:function b_(){},
b0:function b0(){},
fO:function fO(){},
fP:function fP(){},
fS:function fS(){},
aD:function aD(){},
cs:function cs(){},
fT:function fT(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
fU:function fU(){},
fV:function fV(){},
jC:function jC(a,b){this.a=a
this.b=b},
S:function S(){},
fZ:function fZ(){},
p:function p(){},
j:function j(){},
aE:function aE(){},
cv:function cv(){},
h5:function h5(){},
h9:function h9(){},
aM:function aM(){},
dE:function dE(){},
dF:function dF(){},
bZ:function bZ(){},
dG:function dG(){},
bj:function bj(){},
cy:function cy(){},
cz:function cz(){},
b3:function b3(){},
dM:function dM(){},
dP:function dP(){},
cC:function cC(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(){},
hL:function hL(a){this.a=a},
aP:function aP(){},
hM:function hM(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
F:function F(){},
cG:function cG(){},
aR:function aR(){},
i1:function i1(){},
e3:function e3(){},
ic:function ic(){},
id:function id(a){this.a=a},
ig:function ig(){},
aS:function aS(){},
ir:function ir(){},
aT:function aT(){},
is:function is(){},
aU:function aU(){},
iv:function iv(){},
iw:function iw(a){this.a=a},
aF:function aF(){},
b8:function b8(){},
eb:function eb(){},
ec:function ec(){},
iC:function iC(){},
cN:function cN(){},
aV:function aV(){},
aG:function aG(){},
iE:function iE(){},
iF:function iF(){},
iK:function iK(){},
aW:function aW(){},
aX:function aX(){},
iO:function iO(){},
iP:function iP(){},
bL:function bL(){},
jb:function jb(){},
jt:function jt(){},
ju:function ju(){},
bd:function bd(){},
d0:function d0(){},
d1:function d1(){},
jD:function jD(){},
ew:function ew(){},
jS:function jS(){},
eO:function eO(){},
k5:function k5(){},
k9:function k9(){},
jB:function jB(){},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lk:function lk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jH:function jH(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jI:function jI(a){this.a=a},
bN:function bN(a){this.a=a},
D:function D(){},
dZ:function dZ(a){this.a=a},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(){},
k2:function k2(){},
k3:function k3(){},
kb:function kb(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kc:function kc(){},
ka:function ka(){},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aA:function aA(){},
k0:function k0(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a},
kn:function kn(a){this.a=a},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
d7:function d7(){},
d8:function d8(){},
eX:function eX(){},
eY:function eY(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
d9:function d9(){},
da:function da(){},
f7:function f7(){},
f8:function f8(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){}},O={
l5:function(a){var u=new O.a6([a])
u.bU(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cB:function cB(){this.b=this.a=null},
dS:function dS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dT:function dT(){},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
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
c8:function c8(){}},E={
lW:function(a,b,c,d,e,f){var u=new E.an()
u.a=d
u.b=!0
u.sfB(0,O.l5(E.an))
u.y.bi(u.gkA(),u.gkD())
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
u.sag(0,e)
u.sb9(c)
return u},
oa:function(a,b){var u=new E.i8(a,b)
u.ft(a,b)
return u},
oe:function(a,b,c,d,e){var u,t,s,r
u=J.T(a)
if(!!u.$ibT)return E.mc(a,!0,!0,!0,!1)
t=W.l4(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcs(a).h(0,t)
r=E.mc(t,!0,!0,!0,!1)
r.a=a
return r},
mc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ei()
t=H.h(C.q.cX(a,"webgl2",P.nQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic6")
if(t==null)H.r(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oa(t,a)
s=new T.iH(t)
s.b=H.ai((t&&C.b).cZ(t,3379))
s.c=H.ai(C.b.cZ(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ep(a)
r=new X.hm()
r.c=new X.aQ(!1,!1,!1)
r.sis(P.dO(null,null,null,P.o))
s.b=r
r=new X.hN(s)
r.f=0
r.r=V.bJ()
r.x=V.bJ()
r.Q=1
r.ch=1
s.c=r
r=new X.hu(s)
r.r=0
r.x=V.bJ()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iN(s)
r.e=0
r.f=V.bJ()
r.r=V.bJ()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sh7(H.d([],[[P.cM,P.O]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.ghO(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.ghU(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.ghH(),m),!1,n))
r=s.z
l=W.b3
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.ghY(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.ghW(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.gi1(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.gi5(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.gi3(),o),!1,p))
l=s.z
k=W.bd;(l&&C.a).h(l,W.ac(a,H.H(W.nE(a)),H.n(s.gi7(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.ghQ(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.ghS(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.gi9(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.gip(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.gik(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.gim(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ay(Date.now(),!1)
u.cy=0
u.dE()
return u},
fE:function fE(){},
an:function an(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a}},Z={
lj:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aw(a,b,u)
C.b.dU(a,b,new Int16Array(H.cb(c)),35044)
C.b.aw(a,b,null)
return new Z.es(b,u)},
aH:function(a){return new Z.bc(a)},
es:function es(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jv:function jv(a){this.a=a},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
Y:function(){var u=new D.bX()
u.sah(null)
u.saR(null)
u.c=null
u.d=0
return u},
fH:function fH(){},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
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
W:function W(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
dx:function dx(){},
a8:function a8(){},
dN:function dN(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e1:function e1(){},
e8:function e8(){},
bK:function bK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){},
eh:function eh(){}},X={dt:function dt(a,b){this.a=a
this.b=b},dL:function dL(a,b){this.a=a
this.b=b},hm:function hm(){var _=this
_.d=_.c=_.b=_.a=null},dQ:function dQ(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hu:function hu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aQ:function aQ(a,b,c){this.a=a
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
_.b=null},hN:function hN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i2:function i2(){},ek:function ek(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iN:function iN(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nG:function(a,b,c,d,e,f,g){var u,t
u=new X.hb()
t=new V.aL(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.m8
if(t==null){t=V.m7(0,0,1,1)
$.m8=t}u.r=t
return u},
du:function du(){},
hb:function hb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){}},V={
pv:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bh(a-b,u)
return(a<0?a+u:a)+b},
X:function(a,b,c){if(a==null)return C.c.ae("null",c)
return C.c.ae(C.e.eU(Math.abs(a-0)<$.R().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.t],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.X(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.n(u,p,C.c.ae(u[p],s))}return u},
lz:function(a,b){return C.e.l4(Math.pow(b,C.a_.cF(Math.log(H.p_(a))/Math.log(b))))},
dV:function(){var u=$.m0
if(u==null){u=V.bn(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m0=u}return u},
bn:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m_:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bn(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bJ:function(){var u=$.m4
if(u==null){u=new V.aa(0,0)
$.m4=u}return u},
nV:function(){var u=$.cH
if(u==null){u=new V.a4(0,0,0)
$.cH=u}return u},
m7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e5(a,b,c,d)},
cZ:function(){var u=$.mo
if(u==null){u=new V.I(0,0,0)
$.mo=u}return u},
oo:function(){var u=$.jf
if(u==null){u=new V.I(-1,0,0)
$.jf=u}return u},
mp:function(){var u=$.jg
if(u==null){u=new V.I(0,1,0)
$.jg=u}return u},
mq:function(){var u=$.jh
if(u==null){u=new V.I(0,0,1)
$.jh=u}return u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a){this.a=a},
dU:function dU(a,b,c,d,e,f,g,h,i){var _=this
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
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.i6()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ih()
u.fu(a)
return u},
iM:function(){var u,t
u=new V.iL()
t=P.e
u.siS(new H.aO([t,V.cL]))
u.siW(new H.aO([t,V.cP]))
u.c=null
return u},
bg:function bg(){},
az:function az(){},
dR:function dR(){},
av:function av(){this.a=null},
i6:function i6(){this.b=this.a=null},
ih:function ih(){this.a=null},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b){this.a=a
this.b=b
this.c=null},
iL:function iL(){this.c=this.b=this.a=null},
cQ:function cQ(a){this.b=a
this.a=this.c=null},
pr:function(a){P.of(C.V,new V.kV(a))},
oc:function(a,b){var u=new V.il()
u.fw(a,!0)
return u},
bA:function bA(){},
kV:function kV(a){this.a=a},
fR:function fR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
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
lS:function(){var u=new U.fI()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
l6:function(a){var u=new U.dv()
u.a=a
return u},
mk:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.eq()
t=U.lS()
t.sf0(0,!0)
t.sey(6.283185307179586)
t.seA(0)
t.sa4(0,0)
t.sez(100)
t.sa2(0)
t.sdW(0.5)
u.b=t
s=u.gbl()
t.gC().h(0,s)
t=U.lS()
t.sf0(0,!0)
t.sey(6.283185307179586)
t.seA(0)
t.sa4(0,0)
t.sez(100)
t.sa2(0)
t.sdW(0.5)
u.c=t
t.gC().h(0,s)
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
t=new D.W("modifiers",q,r,u,[X.aQ])
t.b=!0
u.a0(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.W("invertX",t,!1,u,[P.Q])
t.b=!0
u.a0(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.W("invertY",t,!1,u,[P.Q])
t.b=!0
u.a0(t)}u.jF(c)
return u},
fI:function fI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){this.b=this.a=null},
cx:function cx(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
eq:function eq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dB:function dB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.oc("Test 023",!0)
t=W.l4(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.D(u.a,t)
s=[P.e]
u.dO(H.d(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],s))
u.ju(H.d(["shapes"],s))
u.dO(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.cY(s,"testCanvas")
if(r==null)H.r(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.oe(r,!0,!0,!0,!1)
p=U.mk(!1,!1,q.r,!1,!1,!1,null,!1)
o=U.mk(!1,!0,q.r,!1,!1,!1,null,!1)
n=new V.a3(0.6,0.9,1)
m=q.f.kv("../resources/Test.png",!0)
l=new D.bK()
l.e=new V.a3(1,1,1)
l.a=V.mq()
l.b=V.mp()
l.c=V.oo()
k=l.d
l.d=o
o.gC().h(0,l.gc6())
j=new D.W("mover",k,l.d,l,[U.ak])
j.b=!0
l.at(j)
if(!l.e.v(0,n)){k=l.e
l.e=n
j=new D.W("color",k,n,l,[V.a3])
j.b=!0
l.at(j)}j=l.f
if(j!==m){if(j!=null)j.gC().O(0,l.gc6())
k=l.f
l.f=m
m.gC().h(0,l.gc6())
m=new D.W("texture",k,l.f,l,[T.ef])
m.b=!0
l.at(m)}i=new O.dS()
i.sfW(O.l5(V.ao))
i.e.bi(i.ghD(),i.ghF())
m=new O.b5(i,"emission")
m.c=C.d
m.f=new V.a3(0,0,0)
i.f=m
m=new O.b5(i,"ambient")
m.c=C.d
m.f=new V.a3(0,0,0)
i.r=m
m=new O.b5(i,"diffuse")
m.c=C.d
m.f=new V.a3(0,0,0)
i.x=m
m=new O.b5(i,"invDiffuse")
m.c=C.d
m.f=new V.a3(0,0,0)
i.y=m
m=new O.hG(i,"specular")
m.c=C.d
m.f=new V.a3(0,0,0)
m.ch=100
i.z=m
m=new O.hD(i,"bump")
m.c=C.d
i.Q=m
i.ch=null
m=new O.b5(i,"reflect")
m.c=C.d
m.f=new V.a3(0,0,0)
i.cx=m
m=new O.hF(i,"refract")
m.c=C.d
m.f=new V.a3(0,0,0)
m.ch=1
i.cy=m
m=new O.hC(i,"alpha")
m.c=C.d
m.f=1
i.db=m
m=new D.dN()
m.bU(D.a8)
m.sh4(H.d([],[D.dx]))
m.sir(H.d([],[D.e1]))
m.siR(H.d([],[D.e8]))
m.sj3(H.d([],[D.bK]))
m.sj4(H.d([],[D.eg]))
m.sj5(H.d([],[D.eh]))
m.Q=null
m.ch=null
m.d0(m.ghB(),m.gic(),m.gii())
i.dx=m
j=m.Q
if(j==null){j=D.Y()
m.Q=j
m=j}else m=j
m.h(0,i.giD())
m=i.dx
j=m.ch
if(j==null){j=D.Y()
m.ch=j
m=j}else m=j
m.h(0,i.gfM())
i.dy=null
i.dx.h(0,l)
i.f.saj(0,new V.a3(0,0,0))
m=i.r
m.saj(0,new V.a3(0,0,0))
m=i.x
m.saj(0,new V.a3(0.7,0.7,0.7))
m=i.z
m.saj(0,new V.a3(0.3,0.3,0.3))
m=i.z
if(m.c===C.d){m.c=C.j
m.bT()
m.cc(100)
j=m.a
j.a=null
j.aa(null)}m.cc(100)
h=E.lW(null,!0,null,"",null,null)
h.sag(0,F.mZ(30,1,15,0.5))
g=E.lW(null,!0,null,"",null,null)
g.sb9(U.l6(V.bn(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
m=F.lv(1,null,null,1)
m.cE()
g.sag(0,m)
f=new U.cx()
f.bU(U.ak)
f.bi(f.ghz(),f.gig())
f.e=null
f.f=V.dV()
f.r=0
f.h(0,p)
f.h(0,U.l6(V.m_(3.141592653589793)))
f.h(0,U.l6(V.bn(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=new M.dB()
m.sfZ(0,O.l5(E.an))
m.d.bi(m.ghK(),m.ghM())
m.e=null
m.f=null
m.r=null
m.x=null
e=X.nG(!0,!0,!1,null,2000,null,0)
d=new X.e0()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb9(null)
j=d.c
if(!(Math.abs(j-1.0471975511965976)<$.R().a)){d.c=1.0471975511965976
j=new D.W("fov",j,1.0471975511965976,d,[P.t])
j.b=!0
d.aO(j)}j=d.d
if(!(Math.abs(j-0.1)<$.R().a)){d.d=0.1
j=new D.W("near",j,0.1,d,[P.t])
j.b=!0
d.aO(j)}j=d.e
if(!(Math.abs(j-2000)<$.R().a)){d.e=2000
j=new D.W("far",j,2000,d,[P.t])
j.b=!0
d.aO(j)}j=m.a
if(j!==d){if(j!=null)j.gC().O(0,m.gar())
k=m.a
m.a=d
d.gC().h(0,m.gar())
j=new D.W("camera",k,m.a,m,[X.du])
j.b=!0
m.aC(j)}j=m.b
if(j!==e){if(j!=null)j.gC().O(0,m.gar())
k=m.b
m.b=e
e.gC().h(0,m.gar())
j=new D.W("target",k,m.b,m,[X.ed])
j.b=!0
m.aC(j)}m.seR(null)
m.seR(i)
m.d.h(0,h)
m.d.h(0,g)
m.a.sb9(f)
j=q.d
if(j!==m){if(j!=null)j.gC().O(0,q.gd3())
q.d=m
m.gC().h(0,q.gd3())
q.d4()}m=new V.i4("shapes",!0)
s=C.z.cY(s,"shapes")
m.c=s
if(s==null)H.r("Failed to find shapes for RadioGroup")
m.b3(0,"Cube",new M.kM(h))
m.b3(0,"Cylinder",new M.kN(h))
m.b3(0,"Cone",new M.kO(h))
m.b3(0,"Sphere",new M.kP(h))
m.dM(0,"Toroid",new M.kQ(h),!0)
m.b3(0,"Knot",new M.kR(h))
s=q.z
if(s==null){s=D.Y()
q.z=s}m={func:1,ret:-1,args:[D.B]}
j=H.n(new M.kS(u,i),m)
if(s.b==null)s.saR(H.d([],[m]))
s=s.b;(s&&C.a).h(s,j)
V.pr(q)},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b}},A={
nT:function(a,b){var u,t
u=a.ak
t=new A.hB(b,u)
t.fv(b,u)
t.fs(a,b)
return t},
lg:function(a,b,c,d,e){var u=new A.iV(a,b,c,e)
u.f=d
u.sj6(P.nR(d,0,!1,P.o))
return u},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a){this.a=a},
hB:function hB(a,b){var _=this
_.bu=_.e0=_.bt=_.ak=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eg=_.cw=_.ef=_.bH=_.ee=_.ed=_.bG=_.bF=_.ec=_.eb=_.bE=_.bD=_.bC=_.ea=_.e9=_.bB=_.e8=_.e7=_.bA=_.e6=_.e5=_.bz=_.by=_.e4=_.e3=_.bx=_.bw=_.e2=_.e1=_.bv=null
_.cD=_.ek=_.cC=_.ej=_.cB=_.ei=_.cA=_.eh=_.cz=null
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
_.ay=b3
_.ak=b4
_.bt=b5},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cT:function cT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cW:function cW(a,b,c,d,e,f,g,h,i,j){var _=this
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
cU:function cU(a,b,c,d,e,f,g,h,i,j){var _=this
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
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bW:function bW(a,b){this.a=a
this.b=b},
el:function el(){},
j0:function j0(a){this.a=a},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cS:function cS(a,b,c,d){var _=this
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
lv:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
u=F.le()
F.dd(u,b,c,d,a,1,0,0,1)
F.dd(u,b,c,d,a,0,1,0,3)
F.dd(u,b,c,d,a,0,0,1,2)
F.dd(u,b,c,d,a,-1,0,0,0)
F.dd(u,b,c,d,a,0,-1,0,0)
F.dd(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
kq:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dd:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.I(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.I(o+a3,n+a1,m+a2)
u.b=l
k=new V.I(o-a3,n-a1,m-a2)
u.c=k
j=new V.I(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.kq(t)
f=F.kq(u.b)
e=F.lC(d,a0,new F.kp(u,F.kq(u.c),F.kq(u.d),f,g,c),b)
if(e!=null)a.b8(e)},
mO:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.t,args:[P.t]})
if(a0<3)return
u=F.le()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ah])
q=u.a
p=new V.I(0,0,t)
p=p.A(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jy(new V.b7(a,-1,-1,-1),new V.aL(1,1,1,1),new V.a4(0,0,d),new V.I(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.J(k)
j=new V.I(m,l,t).A(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.er(new V.b7(a,-1,-1,-1),null,new V.aL(i,g,h,1),new V.a4(m*k,l*k,d),new V.I(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jw(r)
return u},
mM:function(a,b,c,d,e,f){return F.p3(!0,c,d,new F.kz(a,f),e)},
p3:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
u=F.lC(c,e,new F.kB(d),null)
if(u==null)return
u.ax()
u.ci()
if(b)u.b8(F.mO(3,!1,!1,1,new F.kC(d),e))
u.b8(F.mO(1,!0,!1,-1,new F.kD(d),e))
return u},
ps:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kW()
t=F.lv(a,null,new F.kX(u,c),d)
t.ci()
return t},
mZ:function(a,b,c,d){return F.mN(c,a,d,b,new F.kY())},
pj:function(a,b,c,d,e,f){return F.mN(d,a,e,b,new F.kK(f,c))},
mN:function(a,b,c,d,e){var u=F.lC(a,b,new F.kA(H.n(e,{func:1,ret:V.a4,args:[P.t]}),d,b,c),null)
if(u==null)return
u.ax()
u.ci()
return u},
lC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.le()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.er(null,null,new V.aL(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cu(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.er(null,null,new V.aL(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cu(d))}}u.d.jx(a+1,b+1,t)
return u},
cu:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.r(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.w("May not create a face with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
u.iL(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
nN:function(a,b){var u,t
u=new F.bm()
t=a.a
if(t==null)H.r(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.w("May not create a line with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
le:function(){var u,t
u=new F.e7()
t=new F.ji(u)
t.b=!1
t.sj7(H.d([],[F.ah]))
u.a=t
t=new F.ik(u)
t.sc7(H.d([],[F.bI]))
u.b=t
t=new F.ij(u)
t.shk(H.d([],[F.bm]))
u.c=t
t=new F.ii(u)
t.sh8(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
er:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ah()
t=new F.jq(u)
t.sc7(H.d([],[F.bI]))
u.b=t
t=new F.jm(u)
s=[F.bm]
t.shl(H.d([],s))
t.shm(H.d([],s))
u.c=t
t=new F.jj(u)
s=[F.a9]
t.sh9(H.d([],s))
t.sha(H.d([],s))
t.shb(H.d([],s))
u.d=t
h=$.nc()
u.e=0
t=$.bu()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bt().a)!==0?e:null
u.x=(s&$.bs().a)!==0?b:null
u.y=(s&$.bv().a)!==0?f:null
u.z=(s&$.bw().a)!==0?g:null
u.Q=(s&$.nd().a)!==0?c:null
u.ch=(s&$.cl().a)!==0?i:0
u.cx=(s&$.br().a)!==0?a:null
return u},
kp:function kp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kz:function kz(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kW:function kW(){},
kX:function kX(a,b){this.a=a
this.b=b},
kY:function kY(){},
kK:function kK(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(){},
iq:function iq(){},
bm:function bm(){this.b=this.a=null},
ho:function ho(){},
iU:function iU(){},
bI:function bI(){this.a=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
jj:function jj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a){this.a=a
this.c=this.b=null},
jo:function jo(){},
jn:function jn(){},
jp:function jp(){},
hV:function hV(){},
jq:function jq(a){this.a=a
this.b=null}},T={cO:function cO(){},ef:function ef(){},iG:function iG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},iH:function iH(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iI:function iI(a,b,c,d,e,f,g){var _=this
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
H.la.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cI(a)},
i:function(a){return"Instance of '"+H.c3(a)+"'"}}
J.hj.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iQ:1}
J.dJ.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iL:1}
J.dK.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i_.prototype={}
J.bM.prototype={}
J.bl.prototype={
i:function(a){var u=a[$.n0()]
if(u==null)return this.fm(a)
return"JavaScript function for "+H.l(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.aN.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.r(P.G("add"))
a.push(b)},
eN:function(a,b){if(!!a.fixed$length)H.r(P.G("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e4(b,null,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.r(P.G("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bh(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.l(a[t]))
return u.join(b)},
ks:function(a){return this.m(a,"")},
kk:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bh(a))}return t},
kj:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.Q,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bh(a))}throw H.c(H.hh())},
ki:function(a,b){return this.kj(a,b,null)},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fj:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ae(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gkh:function(a){if(a.length>0)return a[0]
throw H.c(H.hh())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hh())},
fh:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.r(P.G("setRange"))
P.bp(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.ch(d)
if(e+t>u.gl(d))throw H.c(H.nJ())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bj:function(a,b,c,d){return this.fh(a,b,c,d,0)},
dP:function(a,b){var u,t
H.n(b,{func:1,ret:P.Q,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bh(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.l8(a,"[","]")},
gV:function(a){return new J.ax(a,a.length,0,[H.u(a,0)])},
gJ:function(a){return H.cI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.G("set length"))
if(b<0)throw H.c(P.ae(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.r(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cf(a,b))
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
J.l9.prototype={}
J.ax.prototype={
gL:function(a){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdl(null)
return!1}this.sdl(u[s]);++this.c
return!0},
sdl:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
J.bF.prototype={
l4:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
cF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
eU:function(a,b){var u,t
if(b>20)throw H.c(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.F("0",r)},
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
F:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dG(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iQ:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dG(a,b)},
dG:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia5:1}
J.dI.prototype={$io:1}
J.dH.prototype={}
J.bk.prototype={
a_:function(a,b){if(b<0)throw H.c(H.cf(a,b))
if(b>=a.length)H.r(H.cf(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.cf(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l2(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.as(b))
c=P.bp(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.as(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a9(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e4(b,null,null))
if(b>c)throw H.c(P.e4(b,null,null))
if(c>a.length)throw H.c(P.e4(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.u(a,b,null)},
l7:function(a){return a.toLowerCase()},
F:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.F(c,u)+a},
ae:function(a,b){return this.kH(a,b," ")},
eu:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
es:function(a,b){return this.eu(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im2:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a_(this.a,b)},
$acY:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fY.prototype={}
H.c1.prototype={
gV:function(a){return new H.cA(this,this.gl(this),0,[H.at(this,"c1",0)])},
bN:function(a,b){return this.fl(0,H.n(b,{func:1,ret:P.Q,args:[H.at(this,"c1",0)]}))}}
H.cA.prototype={
gL:function(a){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.ch(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bh(u))
r=this.c
if(r>=s){this.sb_(null)
return!1}this.sb_(t.K(u,r));++this.c
return!0},
sb_:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.hy.prototype={
gV:function(a){return new H.hz(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aC(this.a)},
K:function(a,b){return this.b.$1(J.fu(this.a,b))},
$ai:function(a,b){return[b]}}
H.hz.prototype={
E:function(){var u=this.b
if(u.E()){this.sb_(this.c.$1(u.gL(u)))
return!0}this.sb_(null)
return!1},
gL:function(a){return this.a},
sb_:function(a){this.a=H.A(a,H.u(this,1))},
$ab2:function(a,b){return[b]}}
H.hA.prototype={
gl:function(a){return J.aC(this.a)},
K:function(a,b){return this.b.$1(J.fu(this.a,b))},
$ac1:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d_.prototype={
gV:function(a){return new H.jw(J.bx(this.a),this.b,this.$ti)}}
H.jw.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bY.prototype={}
H.cY.prototype={
n:function(a,b,c){H.A(c,H.at(this,"cY",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fK.prototype={
i:function(a){return P.ld(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.nA()},
$iE:1}
H.fL.prototype={
gl:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.dm(b)},
dm:function(a){return this.b[H.H(a)]},
N:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dm(q),u))}}}
H.i7.prototype={}
H.iR.prototype={
ad:function(a){var u,t,s
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
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hl.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.j4.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kZ.prototype={
$1:function(a){if(!!J.T(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.f0.prototype={
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
i:function(a){return"Closure '"+H.c3(this).trim()+"'"},
$ibD:1,
glf:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.iu.prototype={
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
if(u==null)t=H.cI(this.a)
else t=typeof u!=="object"?J.dl(u):H.cI(u)
return(t^H.cI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c3(u)+"'")}}
H.iT.prototype={
i:function(a){return this.a}}
H.fG.prototype={
i:function(a){return this.a}}
H.ie.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aO.prototype={
gl:function(a){return this.a},
gkr:function(a){return this.a===0},
ga7:function(a){return new H.hq(this,[H.u(this,0)])},
br:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.di(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.di(t,b)}else return this.ko(b)},
ko:function(a){var u=this.d
if(u==null)return!1
return this.cI(this.c0(u,this.cH(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.kp(b)},
kp:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c0(u,this.cH(a))
s=this.cI(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c4()
this.b=u}this.d8(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c4()
this.c=t}this.d8(t,b,c)}else this.kq(b,c)},
kq:function(a,b){var u,t,s,r
H.A(a,H.u(this,0))
H.A(b,H.u(this,1))
u=this.d
if(u==null){u=this.c4()
this.d=u}t=this.cH(a)
s=this.c0(u,t)
if(s==null)this.cd(u,t,[this.c5(a,b)])
else{r=this.cI(s,a)
if(r>=0)s[r].b=b
else s.push(this.c5(a,b))}},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bh(this))
u=u.c}},
d8:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bm(a,b)
if(u==null)this.cd(a,b,this.c5(b,c))
else u.b=c},
hs:function(){this.r=this.r+1&67108863},
c5:function(a,b){var u,t
u=new H.hp(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hs()
return u},
cH:function(a){return J.dl(a)&0x3ffffff},
cI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.ld(this)},
bm:function(a,b){return a[b]},
c0:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
h3:function(a,b){delete a[b]},
di:function(a,b){return this.bm(a,b)!=null},
c4:function(){var u=Object.create(null)
this.cd(u,"<non-identifier-key>",u)
this.h3(u,"<non-identifier-key>")
return u}}
H.hp.prototype={}
H.hq.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.hr(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hr.prototype={
gL:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bh(u))
else{u=this.c
if(u==null){this.sd7(null)
return!1}else{this.sd7(u.a)
this.c=this.c.c
return!0}}},
sd7:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kI.prototype={
$1:function(a){return this.a(H.H(a))},
$S:50}
H.hk.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im2:1,
$io8:1}
H.cD.prototype={$icD:1}
H.bH.prototype={$ibH:1,$iog:1}
H.dW.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cE.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p5(c)
H.bf(b,a,a.length)
a[b]=c},
$abY:function(){return[P.t]},
$ay:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dX.prototype={
n:function(a,b,c){H.ai(c)
H.bf(b,a,a.length)
a[b]=c},
$abY:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hO.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dY.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$ipR:1}
H.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icF:1,
$iP:1}
H.d3.prototype={}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
P.jy.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.jx.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f6.prototype={
fO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ce(new P.ke(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
fP:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ce(new P.kd(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$ib9:1}
P.ke.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kd.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fq(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.be.prototype={
kx:function(a){if(this.c!==6)return!0
return this.b.b.cU(H.n(this.d,{func:1,ret:P.Q,args:[P.O]}),a.a,P.Q,P.O)},
kn:function(a){var u,t,s,r
u=this.e
t=P.O
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fp(u,{func:1,args:[P.O,P.aw]}))return H.lw(r.kY(u,a.a,a.b,null,t,P.aw),s)
else return H.lw(r.cU(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aI.prototype={
eT:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a0
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oS(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aI(0,$.a0,[c])
r=b==null?1:3
this.d9(new P.be(s,r,a,b,[u,c]))
return s},
l3:function(a,b){return this.eT(a,null,b)},
d9:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$ibe")
this.c=a}else{if(u===2){t=H.h(this.c,"$iaI")
u=t.a
if(u<4){t.d9(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kx(null,null,u,H.n(new P.jJ(this,a),{func:1,ret:-1}))}},
dC:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$ibe")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iaI")
t=p.a
if(t<4){p.dC(a)
return}this.a=t
this.c=p.c}u.a=this.bo(a)
t=this.b
t.toString
P.kx(null,null,t,H.n(new P.jN(u,this),{func:1,ret:-1}))}},
c9:function(){var u=H.h(this.c,"$ibe")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
de:function(a){var u,t,s
u=H.u(this,0)
H.lw(a,{futureOr:1,type:u})
t=this.$ti
if(H.dg(a,"$icw",t,"$acw"))if(H.dg(a,"$iaI",t,null))P.mr(a,this)
else P.ot(a,this)
else{s=this.c9()
H.A(a,u)
this.a=4
this.c=a
P.d2(this,s)}},
df:function(a,b){var u
H.h(b,"$iaw")
u=this.c9()
this.a=8
this.c=new P.am(a,b)
P.d2(this,u)},
$icw:1}
P.jJ.prototype={
$0:function(){P.d2(this.a,this.b)},
$S:0}
P.jN.prototype={
$0:function(){P.d2(this.b,this.a.a)},
$S:0}
P.jK.prototype={
$1:function(a){var u=this.a
u.a=0
u.de(a)},
$S:24}
P.jL.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.df(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jM.prototype={
$0:function(){this.a.df(this.b,this.c)},
$S:0}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eQ(H.n(r.d,{func:1}),null)}catch(q){t=H.aj(q)
s=H.ci(q)
if(this.d){r=H.h(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.T(u).$icw){if(u instanceof P.aI&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l3(new P.jR(o),null)
r.a=!1}},
$S:3}
P.jR.prototype={
$1:function(a){return this.a},
$S:47}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cU(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ci(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$iam")
r=this.c
if(r.kx(u)&&r.e!=null){q=this.b
q.b=r.kn(u)
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
P.et.prototype={}
P.ix.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aI(0,$.a0,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iz(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iA(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.iz.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.iA.prototype={
$0:function(){this.b.de(this.a.a)},
$S:0}
P.cM.prototype={}
P.iy.prototype={}
P.b9.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibC:1}
P.ko.prototype={$iq5:1}
P.kw.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e_()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jX.prototype={
kZ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a0){a.$0()
return}P.mD(null,null,this,a,-1)}catch(s){u=H.aj(s)
t=H.ci(s)
P.kv(null,null,this,u,H.h(t,"$iaw"))}},
l_:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a0){a.$1(b)
return}P.mE(null,null,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ci(s)
P.kv(null,null,this,u,H.h(t,"$iaw"))}},
jH:function(a,b){return new P.jZ(this,H.n(a,{func:1,ret:b}),b)},
cn:function(a){return new P.jY(this,H.n(a,{func:1,ret:-1}))},
dS:function(a,b){return new P.k_(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eQ:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.l)return a.$0()
return P.mD(null,null,this,a,b)},
cU:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a0===C.l)return a.$1(b)
return P.mE(null,null,this,a,b,c,d)},
kY:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a0===C.l)return a.$2(b,c)
return P.oT(null,null,this,a,b,c,d,e,f)}}
P.jZ.prototype={
$0:function(){return this.a.eQ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jY.prototype={
$0:function(){return this.a.kZ(this.b)},
$S:3}
P.k_.prototype={
$1:function(a){var u=this.c
return this.a.l_(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jV.prototype={
gV:function(a){var u=new P.eI(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ic9")!=null}else{t=this.h_(b)
return t}},
h_:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.dn(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.ll()
this.b=u}return this.da(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.ll()
this.c=t}return this.da(t,b)}else return this.fR(0,b)},
fR:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.ll()
this.d=u}t=this.dg(b)
s=u[t]
if(s==null)u[t]=[this.bW(b)]
else{if(this.bZ(s,b)>=0)return!1
s.push(this.bW(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ix(this.c,b)
else return this.iu(0,b)},
iu:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dn(u,b)
s=this.bZ(t,b)
if(s<0)return!1
this.dI(t.splice(s,1)[0])
return!0},
da:function(a,b){H.A(b,H.u(this,0))
if(H.h(a[b],"$ic9")!=null)return!1
a[b]=this.bW(b)
return!0},
ix:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ic9")
if(u==null)return!1
this.dI(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bW:function(a){var u,t
u=new P.c9(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dd()
return u},
dI:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dd()},
dg:function(a){return J.dl(a)&1073741823},
dn:function(a,b){return a[this.dg(b)]},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.eI.prototype={
gL:function(a){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bh(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdc:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
P.hs.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.ht.prototype={$ii:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cA(a,this.gl(a),0,[H.bP(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
l6:function(a,b){var u,t
u=H.d([],[H.bP(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
l5:function(a){return this.l6(a,!0)},
p:function(a,b){var u,t
u=[H.bP(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bj(t,0,this.gl(a),a)
C.a.bj(t,this.gl(a),t.length,b)
return t},
kf:function(a,b,c,d){var u
H.A(d,H.bP(this,a,"y",0))
P.bp(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l8(a,"[","]")}}
P.hv.prototype={}
P.hw.prototype={
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
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bP(this,a,"af",0),H.bP(this,a,"af",1)]})
for(u=J.bx(this.ga7(a));u.E();){t=u.gL(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aC(this.ga7(a))},
i:function(a){return P.ld(a)},
$iE:1}
P.kf.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.hx.prototype={
j:function(a,b){return J.lH(this.a,b)},
n:function(a,b,c){J.l_(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
N:function(a,b){J.lJ(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aC(this.a)},
i:function(a){return J.au(this.a)},
$iE:1}
P.eo.prototype={}
P.k1.prototype={
au:function(a,b){var u
for(u=J.bx(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gL(u))},
i:function(a){return P.l8(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.r(P.ae(b,0,null,"index",null))
for(u=P.ox(this,this.r,H.u(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
$ii:1,
$im9:1}
P.eJ.prototype={}
P.fc.prototype={}
P.fC.prototype={
kz:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bp(c,a0,b.length,null,null,null)
u=$.nf()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kF(C.c.H(b,n))
j=H.kF(C.c.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.c.u(b,s,t)
r.a=g+H.c4(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.u(b,s,a0)
f=g.length
if(q>=0)P.lN(b,p,a0,q,o,f)
else{e=C.f.bh(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aY(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lN(b,p,a0,q,o,d)
else{e=C.f.bh(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.aY(b,a0,a0,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.o],P.e]}}
P.fD.prototype={
$abB:function(){return[[P.b,P.o],P.e]}}
P.bV.prototype={}
P.bB.prototype={}
P.h_.prototype={
$abV:function(){return[P.e,[P.b,P.o]]}}
P.hf.prototype={
i:function(a){return this.a}}
P.he.prototype={
h0:function(a,b,c){var u,t,s,r,q,p
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
if(r>b)q.a+=C.c.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nt(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.e,P.e]}}
P.jc.prototype={
gke:function(){return C.T}}
P.je.prototype={
b4:function(a,b,c){var u,t,s
c=P.bp(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.km(t)
if(s.hc(a,b,c)!==c)s.dK(J.nn(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oN(0,s.b,t.length)))},
ct:function(a){return this.b4(a,0,null)},
$abB:function(){return[P.e,[P.b,P.o]]}}
P.km.prototype={
dK:function(a,b){var u,t,s,r,q
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
hc:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a_(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dK(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jd.prototype={
b4:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.oj(!1,a,b,c)
if(u!=null)return u
c=P.bp(b,c,J.aC(a),null,null,null)
t=new P.al("")
s=new P.kk(!1,t)
s.b4(a,b,c)
if(s.e>0){H.r(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c4(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
ct:function(a){return this.b4(a,0,null)},
$abB:function(){return[[P.b,P.o],P.e]}}
P.kk.prototype={
b4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kl(this,b,c,a)
$label0$0:for(q=J.ch(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bO()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bd(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.H,m)
if(u<=C.H[m]){m=P.a7("Overlong encoding of 0x"+C.f.bd(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bd(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c4(u)
this.c=!1}for(m=o<c;m;){l=P.oU(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bd(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bd(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kl.prototype={
$2:function(a,b){this.a.b.a+=P.ea(this.d,a,b)},
$S:46}
P.Q.prototype={}
P.ay.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aT(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nB(H.o3(this))
t=P.dw(H.o1(this))
s=P.dw(H.nY(this))
r=P.dw(H.nZ(this))
q=P.dw(H.o0(this))
p=P.dw(H.o2(this))
o=P.nC(H.o_(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.b1.prototype={
p:function(a,b){return new P.b1(C.f.p(this.a,b.gh5()))},
t:function(a,b){return new P.b1(C.f.t(this.a,b.gh5()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fX()
t=this.a
if(t<0)return"-"+new P.b1(0-t).i(0)
s=u.$1(C.f.a6(t,6e7)%60)
r=u.$1(C.f.a6(t,1e6)%60)
q=new P.fW().$1(t%1e6)
return""+C.f.a6(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.fX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bC.prototype={}
P.e_.prototype={
i:function(a){return"Throw of null."}}
P.aK.prototype={
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbY()+t+s
if(!this.a)return r
q=this.gbX()
p=P.h1(this.b)
return r+q+": "+p}}
P.c5.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.hg.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t
u=H.ai(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.j5.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fJ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h1(u)+"."}}
P.hZ.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.e9.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fQ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eB.prototype={
i:function(a){return"Exception: "+this.a}}
P.ha.prototype={
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
for(m=s;m<k;++m){l=C.c.a_(r,m)
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
return t+h+f+g+"\n"+C.c.F(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.l(s)+")"):t}}
P.bD.prototype={}
P.o.prototype={}
P.i.prototype={
bN:function(a,b){var u=H.at(this,"i",0)
return new H.d_(this,H.n(b,{func:1,ret:P.Q,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gV(this)
for(t=0;u.E();)++t
return t},
gaM:function(a){var u,t
u=this.gV(this)
if(!u.E())throw H.c(H.hh())
t=u.gL(u)
if(u.E())throw H.c(H.nK())
return t},
K:function(a,b){var u,t,s
if(b<0)H.r(P.ae(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.E();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nI(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.L.prototype={
gJ:function(a){return P.O.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cI(this)},
i:function(a){return"Instance of '"+H.c3(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$im2:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipF:1}
P.ja.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.H(b)
t=J.dh(b).es(b,"=")
if(t===-1){if(b!=="")J.l_(a,P.ln(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.ap(b,t+1)
u=this.a
J.l_(a,P.ln(s,0,s.length,u,!0),P.ln(r,0,r.length,u,!0))}return a},
$S:44}
P.j7.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j8.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j9.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fs(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ca.prototype={
gf_:function(){return this.b},
gcG:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbJ:function(a){var u=this.d
if(u==null)return P.mv(this.a)
return u},
gcN:function(a){var u=this.f
return u==null?"":u},
gen:function(){var u=this.r
return u==null?"":u},
cS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.lm(g,0,0,h)
return new P.ca(i,j,c,f,d,g,this.r)},
eO:function(a,b){return this.cS(a,null,null,null,null,null,null,b,null,null)},
gcO:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.sit(new P.eo(P.mj(u==null?"":u,C.m),[t,t]))}return this.Q},
geo:function(){return this.c!=null},
ger:function(){return this.f!=null},
gep:function(){return this.r!=null},
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
if(!!J.T(b).$ilh)if(this.a==b.gbR())if(this.c!=null===b.geo())if(this.b==b.gf_())if(this.gcG(this)==b.gcG(b))if(this.gbJ(this)==b.gbJ(b))if(this.e===b.geJ(b)){u=this.f
t=u==null
if(!t===b.ger()){if(t)u=""
if(u===b.gcN(b)){u=this.r
t=u==null
if(!t===b.gep()){if(t)u=""
u=u===b.gen()}else u=!1}else u=!1}else u=!1}else u=!1
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
sit:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$ilh:1,
gbR:function(){return this.a},
geJ:function(a){return this.e}}
P.kg.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.kh.prototype={
$1:function(a){return P.fd(C.aa,a,C.m,!1)},
$S:17}
P.kj.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fd(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fd(C.w,b,C.m,!0))}},
$S:15}
P.ki.prototype={
$2:function(a,b){var u,t
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(u=J.bx(H.mT(b,"$ii")),t=this.a;u.E();)t.$2(a,H.H(u.gL(u)))},
$S:38}
P.j6.prototype={
geY:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.c.eu(t,"?",u)
r=t.length
if(s>=0){q=P.dc(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jE(this,"data",null,null,null,P.dc(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.ks.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kr.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.no(u,0,96,b)
return u},
$S:35}
P.kt.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.ku.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.k4.prototype={
geo:function(){return this.c>0},
geq:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.J(t)
t=u+1<t
u=t}else u=!1
return u},
ger:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gep:function(){return this.r<this.a.length},
gdt:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdu:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbR:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdt()){this.x="http"
u="http"}else if(this.gdu()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
gf_:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcG:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbJ:function(a){var u
if(this.geq()){u=this.d
if(typeof u!=="number")return u.p()
return P.fs(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdt())return 80
if(this.gdu())return 443
return 0},
geJ:function(a){return C.c.u(this.a,this.e,this.f)},
gcN:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.u(this.a,u+1,t):""},
gen:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ap(t,u+1):""},
gcO:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.ab
u=P.e
return new P.eo(P.mj(this.gcN(this),C.m),[u,u])},
cS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbR()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.geq()?this.gbJ(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.lm(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ap(t,s+1)
return new P.ca(i,j,c,f,d,g,b)},
eO:function(a,b){return this.cS(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilh&&this.a===b.i(0)},
i:function(a){return this.a},
$ilh:1}
P.jE.prototype={}
W.z.prototype={}
W.fv.prototype={
gl:function(a){return a.length}}
W.dm.prototype={
i:function(a){return String(a)},
$idm:1}
W.fw.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.bS.prototype={$ibS:1}
W.by.prototype={$iby:1}
W.bT.prototype={
cX:function(a,b,c){if(c!=null)return this.hd(a,b,P.p0(c,null))
return this.he(a,b)},
f6:function(a,b){return this.cX(a,b,null)},
hd:function(a,b,c){return a.getContext(b,c)},
he:function(a,b){return a.getContext(b)},
$ibT:1,
$ilQ:1}
W.bU.prototype={
hf:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibU:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fM.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cr.prototype={
gl:function(a){return a.length}}
W.fN.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fO.prototype={
gl:function(a){return a.length}}
W.fP.prototype={
gl:function(a){return a.length}}
W.fS.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.cs.prototype={
jB:function(a,b){return a.adoptNode(b)},
cY:function(a,b){return a.getElementById(b)}}
W.fT.prototype={
i:function(a){return String(a)}}
W.dy.prototype={
jV:function(a,b){return a.createHTMLDocument(b)}}
W.dz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a5],"$aab")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.dA.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaL(a))+" x "+H.l(this.gaH(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.dg(b,"$iab",[P.a5],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&this.gaL(a)===u.gaL(b)&&this.gaH(a)===u.gaH(b)},
gJ:function(a){return W.mt(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gaL(a)),C.e.gJ(this.gaH(a)))},
gdT:function(a){return a.bottom},
gaH:function(a){return a.height},
gbI:function(a){return a.left},
gcT:function(a){return a.right},
gbM:function(a){return a.top},
gaL:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a5]}}
W.fU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.fV.prototype={
gl:function(a){return a.length}}
W.jC.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.h(u[b],"$iS")},
n:function(a,b,c){var u
H.h(c,"$iS")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.l0(this.a,c,u[b])},
h:function(a,b){J.lI(this.a,b)
return b},
gV:function(a){var u=this.l5(this)
return new J.ax(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$ab:function(){return[W.S]}}
W.S.prototype={
gjG:function(a){return new W.jF(a)},
gcs:function(a){return new W.jC(a,a.children)},
gdV:function(a){var u,t,s,r
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
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lV
if(u==null){u=H.d([],[W.aA])
t=new W.dZ(u)
C.a.h(u,W.ms(null))
C.a.h(u,W.mu())
$.lV=t
d=t}else d=u
u=$.lU
if(u==null){u=new W.fe(d)
$.lU=u
c=u}else{u.a=d
c=u}}if($.bi==null){u=document
t=u.implementation
t=(t&&C.U).jV(t,"")
$.bi=t
$.l7=t.createRange()
t=$.bi
t.toString
t=t.createElement("base")
H.h(t,"$icm")
t.href=u.baseURI
u=$.bi.head;(u&&C.W).D(u,t)}u=$.bi
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.h(t,"$iby")}u=$.bi
if(!!this.$iby)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bi.body;(u&&C.p).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.a8,a.tagName)){u=$.l7;(u&&C.N).fd(u,s)
u=$.l7
r=(u&&C.N).jT(u,b)}else{s.innerHTML=b
r=$.bi.createDocumentFragment()
for(u=J.ad(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.bi.body
if(s==null?u!=null:s!==u)J.lL(s)
c.d_(r)
C.z.jB(document,r)
return r},
jU:function(a,b,c){return this.ac(a,b,c,null)},
fg:function(a,b,c,d){a.textContent=null
this.D(a,this.ac(a,b,c,d))},
ff:function(a,b){return this.fg(a,b,null,null)},
aZ:function(a,b){return a.getAttribute(b)},
iv:function(a,b){return a.removeAttribute(b)},
fe:function(a,b,c){return a.setAttribute(b,c)},
$iS:1,
gl0:function(a){return a.tagName}}
W.fZ.prototype={
$1:function(a){return!!J.T(H.h(a,"$iF")).$iS},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jv:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fS(a,b,c,!1)},
fS:function(a,b,c,d){return a.addEventListener(b,H.ce(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaE")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icv:1,
$aD:function(){return[W.aE]}}
W.h5.prototype={
gl:function(a){return a.length}}
W.h9.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.dE.prototype={}
W.dF.prototype={
iB:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.bZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.dG.prototype={}
W.bj.prototype={$ibj:1,
gdX:function(a){return a.data}}
W.cy.prototype={$icy:1,$ilQ:1}
W.cz.prototype={$icz:1}
W.b3.prototype={$ib3:1}
W.dM.prototype={}
W.dP.prototype={
i:function(a){return String(a)},
$idP:1}
W.cC.prototype={}
W.hH.prototype={
gl:function(a){return a.length}}
W.hI.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.hJ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hK.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.hL(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aP.prototype={$iaP:1}
W.hM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaP")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
if(t===0)throw H.c(P.ma("No elements"))
if(t>1)throw H.c(P.ma("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ad(t),q=0;q<s;++q)r.D(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.h(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.l0(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dC(u,u.length,-1,[H.bP(C.ac,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ay:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
kR:function(a){var u=a.parentNode
if(u!=null)J.ft(u,a)},
kV:function(a,b){var u,t
try{u=a.parentNode
J.l0(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fk(a):u},
D:function(a,b){return a.appendChild(H.h(b,"$iF"))},
iw:function(a,b){return a.removeChild(b)},
iA:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaR")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.e3.prototype={
jT:function(a,b){return a.createContextualFragment(b)},
fd:function(a,b){return a.selectNodeContents(b)}}
W.ic.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.id(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.id.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ig.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.is.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.iv.prototype={
j:function(a,b){return this.dq(a,H.H(b))},
n:function(a,b,c){this.iJ(a,b,c)},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hj(a,u)
if(t==null)return
b.$2(t,this.dq(a,t))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.iw(u))
return u},
gl:function(a){return a.length},
dq:function(a,b){return a.getItem(b)},
hj:function(a,b){return a.key(b)},
iJ:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.iw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aF.prototype={$iaF:1}
W.b8.prototype={$ib8:1}
W.eb.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=W.nD("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).au(0,new W.ar(u))
return t},
hh:function(a,b){return a.insertRow(b)}}
W.ec.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ac(u.createElement("table"),b,c,d)
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
ds:function(a,b){return a.insertCell(b)}}
W.iC.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
t.toString
s.toString
new W.ar(t).au(0,new W.ar(s))
return t}}
W.cN.prototype={$icN:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.iE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.iF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.iK.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.iP.prototype={
gl:function(a){return a.length}}
W.bL.prototype={}
W.jb.prototype={
i:function(a){return String(a)}}
W.jt.prototype={$ilQ:1}
W.ju.prototype={
gl:function(a){return a.length}}
W.bd.prototype={
gk0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gk_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibd:1}
W.d0.prototype={
iC:function(a,b){return a.requestAnimationFrame(H.ce(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
h6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d1.prototype={$id1:1}
W.jD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iV")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.ew.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.dg(b,"$iab",[P.a5],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&a.width===u.gaL(b)&&a.height===u.gaH(b)},
gJ:function(a){return W.mt(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaH:function(a){return a.height},
gaL:function(a){return a.width}}
W.jS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaM")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.eO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.k5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.k9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaF")
throw H.c(P.G("Cannot assign element of immutable List."))},
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
W.jB.prototype={
N:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.ad(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.aZ(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.h(u[r],"$id1")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaf:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jF.prototype={
j:function(a,b){return J.l1(this.a,H.H(b))},
n:function(a,b,c){J.ns(this.a,b,c)},
gl:function(a){return this.ga7(this).length}}
W.jG.prototype={}
W.lk.prototype={}
W.jH.prototype={}
W.jI.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ip"))},
$S:34}
W.bN.prototype={
fC:function(a){var u,t
u=$.lF()
if(u.gkr(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pc())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pd())}},
aU:function(a){return $.ng().X(0,W.ct(a))},
av:function(a,b,c){var u,t,s
u=W.ct(a)
t=$.lF()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.ls(s.$4(a,b,c,this))},
$iaA:1}
W.D.prototype={
gV:function(a){return new W.dC(a,this.gl(a),-1,[H.bP(this,a,"D",0)])}}
W.dZ.prototype={
aU:function(a){return C.a.dP(this.a,new W.hU(a))},
av:function(a,b,c){return C.a.dP(this.a,new W.hT(a,b,c))},
$iaA:1}
W.hU.prototype={
$1:function(a){return H.h(a,"$iaA").aU(this.a)},
$S:25}
W.hT.prototype={
$1:function(a){return H.h(a,"$iaA").av(this.a,this.b,this.c)},
$S:25}
W.eW.prototype={
fL:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bN(0,new W.k2())
t=b.bN(0,new W.k3())
this.b.au(0,u)
s=this.c
s.au(0,C.I)
s.au(0,t)},
aU:function(a){return this.a.X(0,W.ct(a))},
av:function(a,b,c){var u,t
u=W.ct(a)
t=this.c
if(t.X(0,H.l(u)+"::"+b))return this.d.jC(c)
else if(t.X(0,"*::"+b))return this.d.jC(c)
else{t=this.b
if(t.X(0,H.l(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.l(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$iaA:1}
W.k2.prototype={
$1:function(a){return!C.a.X(C.B,H.H(a))},
$S:26}
W.k3.prototype={
$1:function(a){return C.a.X(C.B,H.H(a))},
$S:26}
W.kb.prototype={
av:function(a,b,c){if(this.fp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.l1(a,"template")==="")return this.e.X(0,b)
return!1}}
W.kc.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:17}
W.ka.prototype={
aU:function(a){var u=J.T(a)
if(!!u.$icJ)return!1
u=!!u.$iq
if(u&&W.ct(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aU(a)},
$iaA:1}
W.dC.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdr(J.lH(this.a,u))
this.c=u
return!0}this.sdr(null)
this.c=t
return!1},
gL:function(a){return this.d},
sdr:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
W.aA.prototype={}
W.k0.prototype={$ipS:1}
W.fe.prototype={
d_:function(a){new W.kn(this).$2(a,null)},
b2:function(a,b){if(b==null)J.lL(a)
else J.ft(b,a)},
iH:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.np(a)
s=J.l1(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aj(o)}q="element unprintable"
try{q=J.au(a)}catch(o){H.aj(o)}try{p=W.ct(a)
this.iG(H.h(a,"$iS"),b,u,q,p,H.h(t,"$iE"),H.H(s))}catch(o){if(H.aj(o) instanceof P.aK)throw o
else{this.b2(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aU(a)){this.b2(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b2(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga7(f).length-1,u=f.a,r=J.ad(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.av(a,J.nu(q),r.aZ(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.aZ(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aZ(u,q)
r.iv(u,q)}}if(!!J.T(a).$icN)this.d_(a.content)},
$ipC:1}
W.kn.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iH(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b2(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aj(r)
q=H.h(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.ft(p,q)}else J.ft(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iF")}},
$S:45}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
P.k6.prototype={
el:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cW:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.T(a)
if(!!t.$iay)return new Date(a.a)
if(!!t.$io8)throw H.c(P.j3("structured clone of RegExp"))
if(!!t.$iaE)return a
if(!!t.$ibS)return a
if(!!t.$icv)return a
if(!!t.$ibj)return a
if(!!t.$icD||!!t.$ibH)return a
if(!!t.$iE){s=this.el(a)
r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.N(a,new P.k8(u,this))
return u.a}if(!!t.$ib){s=this.el(a)
u=this.b
if(s>=u.length)return H.f(u,s)
q=u[s]
if(q!=null)return q
return this.jS(a,s)}throw H.c(P.j3("structured clone of other type"))},
jS:function(a,b){var u,t,s,r
u=J.ch(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.cW(u.j(a,r)))
return s}}
P.k8.prototype={
$2:function(a,b){this.a.a[a]=this.b.cW(b)},
$S:7}
P.fb.prototype={$ibj:1,
gdX:function(a){return this.a}}
P.ky.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k7.prototype={}
P.h6.prototype={
gbn:function(){var u,t,s
u=this.b
t=H.at(u,"y",0)
s=W.S
return new H.hy(new H.d_(u,H.n(new P.h7(),{func:1,ret:P.Q,args:[t]}),[t]),H.n(new P.h8(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.h(c,"$iS")
u=this.gbn()
J.nr(u.b.$1(J.fu(u.a,b)),c)},
h:function(a,b){J.lI(this.b.a,b)},
gl:function(a){return J.aC(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.fu(u.a,b))},
gV:function(a){var u=P.lZ(this.gbn(),!1,W.S)
return new J.ax(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$ab:function(){return[W.S]}}
P.h7.prototype={
$1:function(a){return!!J.T(H.h(a,"$iF")).$iS},
$S:22}
P.h8.prototype={
$1:function(a){return H.m(H.h(a,"$iF"),"$iS")},
$S:33}
P.jW.prototype={
gcT:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdT:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dg(b,"$iab",[P.a5],"$aab")){u=this.a
t=J.ad(b)
if(u==t.gbI(b)){s=this.b
if(s==t.gbM(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gcT(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdT(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.dl(u)
s=this.b
r=J.dl(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gJ(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gJ(H.A(s+this.d,q))
return P.ow(P.jU(P.jU(P.jU(P.jU(0,t),r),u),q))}}
P.ab.prototype={
gbI:function(a){return this.a},
gbM:function(a){return this.b},
gaL:function(a){return this.c},
gaH:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aB(a,b)},
n:function(a,b,c){H.h(c,"$ib4")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aB:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aD:function(){return[P.b4]}}
P.b6.prototype={$ib6:1}
P.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aB(a,b)},
n:function(a,b,c){H.h(c,"$ib6")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aB:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aD:function(){return[P.b6]}}
P.i3.prototype={
gl:function(a){return a.length}}
P.cJ.prototype={$icJ:1}
P.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aB(a,b)},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aB:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.q.prototype={
gcs:function(a){return new P.h6(a,new W.ar(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aA])
C.a.h(u,W.ms(null))
C.a.h(u,W.mu())
C.a.h(u,new W.ka())
c=new W.fe(new W.dZ(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jU(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ar(r)
p=u.gaM(u)
for(u=J.ad(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$iq:1}
P.ba.prototype={$iba:1}
P.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aB(a,b)},
n:function(a,b,c){H.h(c,"$iba")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aB:function(a,b){return a.getItem(b)},
$ay:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aD:function(){return[P.ba]}}
P.eG.prototype={}
P.eH.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.P.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$iog:1}
P.fy.prototype={
gl:function(a){return a.length}}
P.fz.prototype={
j:function(a,b){return P.bq(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new P.fA(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fB.prototype={
gl:function(a){return a.length}}
P.bR.prototype={}
P.hY.prototype={
gl:function(a){return a.length}}
P.eu.prototype={}
P.dq.prototype={$idq:1}
P.dD.prototype={$idD:1}
P.e2.prototype={$ie2:1}
P.c6.prototype={
dL:function(a,b){return a.activeTexture(b)},
dQ:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jI:function(a,b,c){return a.bindFramebuffer(b,c)},
aV:function(a,b,c){return a.bindTexture(b,c)},
jJ:function(a,b,c){return a.blendFunc(b,c)},
dU:function(a,b,c,d){return a.bufferData(b,c,d)},
jM:function(a,b){return a.clear(b)},
jN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jO:function(a,b){return a.clearDepth(b)},
jQ:function(a,b){return a.compileShader(b)},
jW:function(a,b){return a.createShader(b)},
jY:function(a,b){return a.deleteProgram(b)},
jZ:function(a,b){return a.deleteShader(b)},
k5:function(a,b){return a.depthFunc(b)},
k6:function(a,b){return a.disable(b)},
dZ:function(a,b){return a.disableVertexAttribArray(b)},
k8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cv:function(a,b){return a.enable(b)},
e_:function(a,b){return a.enableVertexAttribArray(b)},
f1:function(a,b){return a.generateMipmap(b)},
f2:function(a,b,c){return a.getActiveAttrib(b,c)},
f3:function(a,b,c){return a.getActiveUniform(b,c)},
f4:function(a,b,c){return a.getAttribLocation(b,c)},
cZ:function(a,b){return a.getParameter(b)},
f7:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
f8:function(a,b){return a.getShaderInfoLog(b)},
f9:function(a,b,c){return a.getShaderParameter(b,c)},
fa:function(a,b,c){return a.getUniformLocation(b,c)},
kt:function(a,b){return a.linkProgram(b)},
kP:function(a,b,c){return a.pixelStorei(b,c)},
fi:function(a,b,c){return a.shaderSource(b,c)},
l2:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.T(g)
if(!!u.$ibj)t=!0
else t=!1
if(t){this.iU(a,b,c,d,e,f,P.p1(g))
return}if(!!u.$icy)u=!0
else u=!1
if(u){this.iV(a,b,c,d,e,f,g)
return}throw H.c(P.dn("Incorrect number or type of arguments"))},
l1:function(a,b,c,d,e,f,g){return this.l2(a,b,c,d,e,f,g,null,null,null)},
iU:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bL:function(a,b,c,d){return a.texParameteri(b,c,d)},
T:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eW:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eX:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eZ:function(a,b){return a.useProgram(b)},
l9:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
la:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic6:1}
P.e6.prototype={$ie6:1}
P.ee.prototype={$iee:1}
P.em.prototype={$iem:1}
P.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bq(this.hi(a,b))},
n:function(a,b,c){H.h(c,"$iE")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
hi:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.eZ.prototype={}
P.f_.prototype={}
O.a6.prototype={
bU:function(a){this.shn(H.d([],[a]))
this.sdA(null)
this.sdv(null)
this.sdB(null)},
d0:function(a,b,c){var u=H.at(this,"a6",0)
H.n(b,{func:1,ret:P.Q,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdA(b)
this.sdv(a)
this.sdB(c)},
bi:function(a,b){return this.d0(a,null,b)},
ib:function(a){var u
H.k(a,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fz:function(a,b){var u
H.k(b,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ax(u,u.length,0,[H.u(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.at(this,"a6",0)
H.A(b,u)
u=[u]
if(this.ib(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fz(s,H.d([b],u))}},
shn:function(a){this.a=H.k(a,"$ib",[H.at(this,"a6",0)],"$ab")},
sdA:function(a){this.b=H.n(a,{func:1,ret:P.Q,args:[[P.i,H.at(this,"a6",0)]]})},
sdv:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
sdB:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
$ii:1}
O.cB.prototype={
gl:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.Y()
this.b=u}return u},
fA:function(a){var u=this.b
if(u!=null)u.M(a)},
aN:function(){return this.fA(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dV()},
eL:function(a){var u=this.a
if(a==null)C.a.h(u,V.dV())
else C.a.h(u,a)
this.aN()},
cM:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sc2:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fE.prototype={}
E.an.prototype={
sag:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().O(0,this.geG())
t=this.c
if(t!=null)t.gC().h(0,this.geG())
s=new D.W("shape",u,this.c,this,[F.e7])
s.b=!0
this.al(s)}},
sb9:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gC().O(0,this.geE())
if(a!=null)a.gC().h(0,this.geE())
this.r=a
t=new D.W("mover",u,a,this,[U.ak])
t.b=!0
this.al(t)}},
aK:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.W("matrix",s,t,this,[V.ao])
r.b=!0
this.al(r)}for(u=this.y.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aK(0,b)},
aX:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.F(0,u.ga1(u)))
u.aN()
a.eM(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kU(a,this)
for(u=this.y.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aX(a)
a.eK()
a.dx.cM()},
gC:function(){var u=this.z
if(u==null){u=D.Y()
this.z=u}return u},
al:function(a){var u=this.z
if(u!=null)u.M(a)},
a3:function(){return this.al(null)},
eH:function(a){H.h(a,"$iB")
this.e=null
this.al(a)},
kG:function(){return this.eH(null)},
eF:function(a){this.al(H.h(a,"$iB"))},
kF:function(){return this.eF(null)},
eD:function(a){this.al(H.h(a,"$iB"))},
kC:function(){return this.eD(null)},
kB:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.geC(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bX()
o.sah(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kE:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gV(b),t=this.geC();u.E();)u.gL(u).gC().O(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfB:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibo:1}
E.i8.prototype={
ft:function(a,b){var u,t
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
u=new O.cB()
t=[V.ao]
u.sc2(H.d([],t))
u.b=null
u.gC().h(0,new E.i9(this))
this.cy=u
u=new O.cB()
u.sc2(H.d([],t))
u.b=null
u.gC().h(0,new E.ia(this))
this.db=u
u=new O.cB()
u.sc2(H.d([],t))
u.b=null
u.gC().h(0,new E.ib(this))
this.dx=u
this.siT(H.d([],[O.c8]))
u=this.dy;(u&&C.a).h(u,null)
this.siP(new H.aO([P.e,A.cK]))},
gkQ:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.F(0,t.ga1(t))
this.z=t
u=t}return u},
eM:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eK:function(){var u=this.dy
if(u.length>1)u.pop()},
siT:function(a){this.dy=H.k(a,"$ib",[O.c8],"$ab")},
siP:function(a){this.fr=H.k(a,"$iE",[P.e,A.cK],"$aE")}}
E.i9.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ia.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.ib.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ei.prototype={
d5:function(a){H.h(a,"$iB")
this.eP()},
d4:function(){return this.d5(null)},
gkm:function(){var u,t,s
u=Date.now()
t=C.f.a6(P.lT(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ay(u,!1)
return s/t},
dE:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.F()
if(typeof u!=="number")return H.J(u)
s=C.e.cF(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.F()
r=C.e.cF(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.md(C.y,this.gkW())}},
eP:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iJ(this),{func:1,ret:-1,args:[P.a5]})
C.P.h6(u)
C.P.iC(u,W.mI(t,P.a5))}},
kT:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dE()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lT(0,0,0,r-s.r.a,0,0).a*0.000001
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
if(s!=null)s.M(null)}catch(q){u=H.aj(q)
t=H.ci(q)
P.lA("Error: "+H.l(u))
P.lA("Stack: "+H.l(t))
throw H.c(u)}}}
E.iJ.prototype={
$1:function(a){var u
H.pn(a)
u=this.a
if(u.ch){u.ch=!1
u.kT()}},
$S:54}
Z.es.prototype={$ipw:1}
Z.dr.prototype={
cm:function(a){var u,t,s
try{t=a.a
C.b.e_(t,this.e)
C.b.l9(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.jv.prototype={$ipx:1}
Z.ds.prototype={
aW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cm:function(a){var u,t
u=this.a
C.b.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cm(a)},
l8:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dZ(s,u[t].e)
C.b.aw(s,this.a.a,null)},
aX:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aw(t,p,r.b)
C.b.k8(t,q.a,q.b,5123,0)
C.b.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.au(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shg:function(a){this.b=H.k(a,"$ib",[Z.bE],"$ab")},
$ipG:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c3(this.c)+"'")+"]"}}
Z.bc.prototype={
gd1:function(a){var u,t
u=this.a
t=(u&$.bu().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.di().a)!==0)t+=3
if((u&$.dj().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
jE:function(a){var u,t,s
u=$.bu()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.di()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0)if(s===a)return u
return $.ne()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bu().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bv().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.di().a)!==0)C.a.h(u,"Clr3")
if((t&$.dj().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fH.prototype={}
D.bX.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sah(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
M:function(a){var u,t,s,r
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
return!0}if(!s)C.a.N(P.lZ(t,!0,{func:1,ret:-1,args:[D.B]}),new D.h2(u))
t=this.b
if(t!=null){this.saR(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.N(t,new D.h3(u))}return!0},
kc:function(){return this.M(null)},
kX:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.M(t)}}},
am:function(a){return this.kX(a,!0,!1)},
sah:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saR:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h2.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.h3.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.c_.prototype={}
D.c0.prototype={}
D.W.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dt.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dL.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hm.prototype={
kM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kI:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sis:function(a){this.d=H.k(a,"$im9",[P.o],"$am9")}}
X.dQ.prototype={}
X.hu.prototype={
b0:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ay(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.F()
q=b.b
p=this.ch
if(typeof q!=="number")return q.F()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gbq()
n=new X.bG(a,V.bJ(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cL:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fc()
if(typeof u!=="number")return u.bO()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.b0(a,b))
return!0},
kN:function(a){return!1},
i0:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ay(Date.now(),!1)
t=this.f
s=new X.dQ(c,a,this.a.gbq(),b,u,this)
s.b=!0
t.M(s)
this.y=u
this.x=V.bJ()}}
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
X.bG.prototype={}
X.hN.prototype={
c_:function(a,b,c){var u,t,s
u=new P.ay(Date.now(),!1)
t=this.a.gbq()
s=new X.bG(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cL:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.M(this.c_(a,b,!0))
return!0},
bb:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fc()
if(typeof u!=="number")return u.bO()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.M(this.c_(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.c_(a,b,!1))
return!0},
kO:function(a,b){return!1}}
X.i2.prototype={}
X.ek.prototype={}
X.iN.prototype={
b0:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=this.a.gbq()
r=new X.ek(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kL:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.M(this.b0(a,!0))
return!0},
kJ:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.M(this.b0(a,!0))
return!0},
kK:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.M(this.b0(a,!1))
return!0}}
X.ep.prototype={
gbq:function(){var u=this.a
return V.m7(0,0,C.q.gdV(u).c,C.q.gdV(u).d)},
dj:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dL(u,new X.aQ(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
ce:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
aF:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.aa(t-r,s-q)},
b1:function(a){return new V.a2(a.movementX,a.movementY)},
c8:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.an(p.pageX)
C.e.an(p.pageY)
n=u.left
C.e.an(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.an(p.pageY)-u.top))}return t},
aD:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dt(u,new X.aQ(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s,r,q,p
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
hV:function(a){this.f=!0},
hI:function(a){this.f=!1},
hP:function(a){H.h(a,"$iag")
if(this.f&&this.c3(a))a.preventDefault()},
hZ:function(a){var u
H.h(a,"$ib3")
if(!this.f)return
u=this.dj(a)
this.b.kM(u)},
hX:function(a){var u
H.h(a,"$ib3")
if(!this.f)return
u=this.dj(a)
this.b.kI(u)},
i2:function(a){var u,t,s,r
H.h(a,"$iag")
u=this.a
u.focus()
this.f=!0
this.aS(a)
if(this.x){t=this.aD(a)
s=this.b1(a)
if(this.d.cL(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aD(a)
r=this.aF(a)
if(this.c.cL(t,r))a.preventDefault()},
i6:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aD(a)
if(this.x){t=this.b1(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.bb(u,s))a.preventDefault()},
hT:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c3(a)){this.aS(a)
u=this.aD(a)
if(this.x){t=this.b1(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.bb(u,s))a.preventDefault()}},
i4:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aD(a)
if(this.x){t=this.b1(a)
if(this.d.ba(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.ba(u,s))a.preventDefault()},
hR:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c3(a)){this.aS(a)
u=this.aD(a)
if(this.x){t=this.b1(a)
if(this.d.ba(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.ba(u,s))a.preventDefault()}},
i8:function(a){var u,t
H.h(a,"$ibd")
this.aS(a)
u=new V.a2((a&&C.O).gk_(a),C.O.gk0(a)).A(0,180)
if(this.x){if(this.d.kN(u))a.preventDefault()
return}if(this.r)return
t=this.aF(a)
if(this.c.kO(u,t))a.preventDefault()},
ia:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aD(this.y)
s=this.aF(this.y)
this.d.i0(t,s,u)}},
iq:function(a){var u
H.h(a,"$iaX")
this.a.focus()
this.f=!0
this.ce(a)
u=this.c8(a)
if(this.e.kL(u))a.preventDefault()},
il:function(a){var u
H.h(a,"$iaX")
this.ce(a)
u=this.c8(a)
if(this.e.kJ(u))a.preventDefault()},
io:function(a){var u
H.h(a,"$iaX")
this.ce(a)
u=this.c8(a)
if(this.e.kK(u))a.preventDefault()},
sh7:function(a){this.z=H.k(a,"$ib",[[P.cM,P.O]],"$ab")}}
D.dx.prototype={$ia8:1,$ibo:1}
D.a8.prototype={$ibo:1}
D.dN.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.Y()
this.Q=u}return u},
at:function(a){var u=this.Q
if(u!=null)u.M(a)},
dz:function(a){var u
H.h(a,"$iB")
u=this.ch
if(u!=null)u.M(a)},
i_:function(){return this.dz(null)},
ie:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fD(s))return!1}return!0},
hC:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdw(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.h(b[p],"$ia8")
if(o instanceof D.bK)C.a.h(this.x,o)
n=o.r
if(n==null){n=new D.bX()
n.sah(null)
n.saR(null)
n.c=null
n.d=0
o.r=n}H.n(s,r)
if(n.a==null)n.sah(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c_(a,b,this,[u])
u.b=!0
this.at(u)},
ij:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gdw();t.E();){r=t.gL(t)
C.a.O(this.e,r)
r.gC().O(0,s)}u=new D.c0(a,b,this,[u])
u.b=!0
this.at(u)},
fD:function(a){var u=C.a.X(this.x,a)
return u},
sh4:function(a){this.e=H.k(a,"$ib",[D.dx],"$ab")},
sir:function(a){this.f=H.k(a,"$ib",[D.e1],"$ab")},
siR:function(a){this.r=H.k(a,"$ib",[D.e8],"$ab")},
sj3:function(a){this.x=H.k(a,"$ib",[D.bK],"$ab")},
sj4:function(a){this.y=H.k(a,"$ib",[D.eg],"$ab")},
sj5:function(a){this.z=H.k(a,"$ib",[D.eh],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.e1.prototype={$ia8:1,$ibo:1}
D.e8.prototype={$ia8:1,$ibo:1}
D.bK.prototype={
gC:function(){var u=this.r
if(u==null){u=D.Y()
this.r=u}return u},
at:function(a){var u
H.h(a,"$iB")
u=this.r
if(u!=null)u.M(a)},
hJ:function(){return this.at(null)},
$ia8:1,
$ibo:1}
D.eg.prototype={$ia8:1,$ibo:1}
D.eh.prototype={$ia8:1,$ibo:1}
V.a3.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcP())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gco())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcP())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gco())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
V.aL.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcP())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gco())
r=C.e.p(this.d,b.gjD(b))
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
u=C.e.t(this.a,b.gcP())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gco())
r=C.e.t(this.d,b.gjD(b))
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
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+", "+V.X(this.d,3,0)+"]"}}
V.h0.prototype={}
V.dU.prototype={
af:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
u=b.a
t=$.R().a
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
u=[P.t]
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
af:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
ev:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.R().a)return V.dV()
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
bf:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.I(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
be:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a4(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.R().a
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
em:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
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
R:function(){return this.em("",3,0)},
G:function(a){return this.em(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
F:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
V.b7.prototype={
p:function(a,b){return new V.b7(C.e.p(this.a,b.glc(b)),C.e.p(this.b,b.gld(b)),C.e.p(this.c,b.gle(b)),C.e.p(this.d,b.glb(b)))},
t:function(a,b){return new V.b7(C.e.t(this.a,b.glc(b)),C.e.t(this.b,b.gld(b)),C.e.t(this.c,b.gle(b)),C.e.t(this.d,b.glb(b)))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+", "+V.X(this.d,3,0)+"]"}}
V.e5.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e5))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+", "+V.X(this.d,3,0)+"]"}}
V.a2.prototype={
cJ:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.J(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.F()
if(typeof r!=="number")return H.J(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gka(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gkb(b)
if(typeof u!=="number")return u.p()
return new V.a2(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gka(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gkb(b)
if(typeof u!=="number")return u.t()
return new V.a2(t,C.e.t(u,s))},
F:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.F()
t=this.b
if(typeof t!=="number")return t.F()
return new V.a2(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.R().a){u=$.ml
if(u==null){u=new V.a2(0,0)
$.ml=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.a2(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=this.a
s=$.R()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.J(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.J(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+"]"}}
V.I.prototype={
cJ:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cK:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aG:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.I(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.I(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.R().a)return V.cZ()
return new V.I(this.a/b,this.b/b,this.c/b)},
ew:function(){var u=$.R().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
U.fI.prototype={
bV:function(a){var u=V.pv(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u},
a0:function(a){var u=this.y
if(u!=null)u.M(a)},
sf0:function(a,b){},
sey:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.R().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bV(t)}u=new D.W("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.a0(u)}},
seA:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.R().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bV(t)}u=new D.W("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.a0(u)}},
sa4:function(a,b){var u
b=this.bV(b)
u=this.d
if(!(Math.abs(u-b)<$.R().a)){this.d=b
u=new D.W("location",u,b,this,[P.t])
u.b=!0
this.a0(u)}},
sez:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.R().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.W("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.a0(u)}},
sa2:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.R().a)){this.f=a
u=new D.W("velocity",u,a,this,[P.t])
u.b=!0
this.a0(u)}},
sdW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.R().a)){this.x=a
u=new D.W("dampening",u,a,this,[P.t])
u.b=!0
this.a0(u)}},
aK:function(a,b){var u,t,s,r,q
u=this.f
t=$.R().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.R().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa2(s)}}}
U.dv.prototype={
gC:function(){var u=this.b
if(u==null){u=D.Y()
this.b=u}return u},
bg:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cx.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Y()
this.e=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.M(a)},
aq:function(){return this.a0(null)},
hA:function(a,b){var u,t,s,r,q,p,o,n
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbl(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.n(s,r)
if(n.a==null)n.sah(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c_(a,b,this,[u])
u.b=!0
this.a0(u)},
ih:function(a,b){var u,t,s
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gbl();t.E();)t.gL(t).gC().O(0,s)
u=new D.c0(a,b,this,[u])
u.b=!0
this.a0(u)},
bg:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ax(u,u.length,0,[H.u(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.bg(0,b,c)
if(r!=null)s=s==null?r:r.F(0,s)}}this.f=s==null?V.dV():s
u=this.e
if(u!=null)u.am(0)}return this.f},
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
U.eq.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.Y()
this.fx=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.M(a)},
aq:function(){return this.a0(null)},
jF:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.Y()
u.b=t
u=t}else u=t
u.h(0,this.ght())
u=this.a.c
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.ghv())
u=this.a.c
t=u.c
if(t==null){t=D.Y()
u.c=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.d
t=u.f
if(t==null){t=D.Y()
u.f=t
u=t}else u=t
u.h(0,this.gho())
u=this.a.d
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.ghq())
u=this.a.e
t=u.b
if(t==null){t=D.Y()
u.b=t
u=t}else u=t
u.h(0,this.gj0())
u=this.a.e
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.giZ())
u=this.a.e
t=u.c
if(t==null){t=D.Y()
u.c=t
u=t}else u=t
u.h(0,this.giX())
return!0},
as:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.a2(u,t)},
hu:function(a){a=H.m(H.h(a,"$iB"),"$ibG")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hw:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibG")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a2(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.J(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.a2(t.a,t.b).F(0,2).A(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.J(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.J(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.a2(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.J(p)
o=this.cy
if(typeof o!=="number")return H.J(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.J(q)
s=this.db
if(typeof s!=="number")return H.J(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.as(new V.a2(t.a,t.b).F(0,2).A(0,u.gaA()))}this.aq()},
hy:function(a){var u,t,s
H.h(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.J(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.J(u)
s.sa2(-t*10*u)
this.aq()}},
hp:function(a){if(H.m(H.h(a,"$iB"),"$idQ").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hr:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibG")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.a2(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.J(p)
o=this.cy
if(typeof o!=="number")return H.J(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.J(q)
s=this.db
if(typeof s!=="number")return H.J(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.as(new V.a2(t.a,t.b).F(0,2).A(0,u.gaA()))
this.aq()},
j1:function(a){H.h(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j_:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$iek")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a2(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.J(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.a2(t.a,t.b).F(0,2).A(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.J(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.J(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.a2(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.J(p)
o=this.cy
if(typeof o!=="number")return H.J(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.J(q)
s=this.db
if(typeof s!=="number")return H.J(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.as(new V.a2(t.a,t.b).F(0,2).A(0,u.gaA()))}this.aq()},
iY:function(a){var u,t,s
H.h(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.J(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.J(u)
s.sa2(-t*10*u)
this.aq()}},
bg:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=b.y
this.c.aK(0,s)
this.b.aK(0,s)
u=V.m_(this.b.d)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.F(0,V.bn(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iak:1}
M.dB.prototype={
aC:function(a){var u
H.h(a,"$iB")
u=this.x
if(u!=null)u.M(a)},
fE:function(){return this.aC(null)},
hL:function(a,b){var u,t,s,r,q,p,o,n
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bX()
n.sah(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sah(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c_(a,b,this,[u])
u.b=!0
this.aC(u)},
hN:function(a,b){var u,t,s
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gar();t.E();)t.gL(t).gC().O(0,s)
u=new D.c0(a,b,this,[u])
u.b=!0
this.aC(u)},
seR:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().O(0,this.gar())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gar())
u=new D.W("technique",t,this.c,this,[O.c8])
u.b=!0
this.aC(u)}},
gC:function(){var u=this.x
if(u==null){u=D.Y()
this.x=u}return u},
aX:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eM(this.c)
u=this.b
u.toString
t=a1.a
C.b.jI(t,36160,null)
C.b.cv(t,2884)
C.b.cv(t,2929)
C.b.k5(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.J(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.J(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a1.c=p
q=C.e.an(q.d*r)
a1.d=q
C.b.la(t,o,n,p,q)
C.b.jO(t,u.c)
u=u.a
C.b.jN(t,u.a,u.b,u.c,u.d)
C.b.jM(t,16640)
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
a1.cy.eL(i)
t=$.m3
if(t==null){t=V.nV()
q=V.mp()
p=$.mm
if(p==null){p=new V.I(0,0,-1)
$.mm=p}h=p.A(0,Math.sqrt(p.I(p)))
q=q.aG(h)
g=q.A(0,Math.sqrt(q.I(q)))
f=h.aG(g)
e=new V.I(t.a,t.b,t.c)
d=g.U(0).I(e)
c=f.U(0).I(e)
b=h.U(0).I(e)
t=V.bn(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m3=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.bg(0,a1,u)
if(a0!=null)a=a0.F(0,a)}a1.db.eL(a)
u=this.c
if(u!=null)u.aK(0,a1)
for(u=this.d.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aK(0,a1)
for(u=this.d.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.E();)u.d.aX(a1)
this.a.toString
a1.cy.cM()
a1.db.cM()
this.b.toString
a1.eK()},
sfZ:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipD:1}
A.dp.prototype={}
A.fx.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e_(r.a,r.c)}},
k7:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dZ(r.a,r.c)}}}
A.hB.prototype={
fs:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.j9(u)
a7.jg(u)
a7.ja(u)
a7.jo(u)
a7.jp(u)
a7.ji(u)
a7.jt(u)
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
s.jd(u)
s.j8(u)
s.jb(u)
s.je(u)
s.jm(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jk(u)
s.jl(u)}s.jh(u)
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
s.jc(u)
s.jj(u)
s.jn(u)
s.jq(u)
s.jr(u)
s.js(u)
s.jf(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dk(n,35633)
this.f=this.dk(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dQ(s,q,this.e)
C.b.dQ(s,this.r,this.f)
C.b.kt(s,this.r)
if(!H.ls(C.b.bP(s,this.r,35714))){h=C.b.f7(s,this.r)
C.b.jY(s,this.r)
H.r(P.w("Failed to link shader: "+H.l(h)))}this.iM()
this.iO()
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
if(a7.x2)this.k1=H.m(this.y.q(0,"txt2DMat"),"$icS")
if(a7.y1)this.k2=H.m(this.y.q(0,"txtCubeMat"),"$iaB")
if(a7.y2)this.k3=H.m(this.y.q(0,"colorMat"),"$iaB")
this.sfV(H.d([],[A.aB]))
t=a7.ay
if(t>0){this.k4=H.h(this.y.q(0,"bendMatCount"),"$iN")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.m(f,"$iaB"))}}t=a7.a
if(t!==C.d){this.r2=H.m(this.y.q(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.m(this.y.q(0,"emissionTxt"),"$iap")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iN")
break
case C.i:this.ry=H.m(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iN")
break}}t=a7.b
if(t!==C.d){this.x2=H.m(this.y.q(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.m(this.y.q(0,"ambientTxt"),"$iap")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iN")
break
case C.i:this.y2=H.m(this.y.q(0,"ambientTxt"),"$iaq")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iN")
break}}t=a7.c
if(t!==C.d){this.ak=H.m(this.y.q(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.bt=H.m(this.y.q(0,"diffuseTxt"),"$iap")
this.bu=H.m(this.y.q(0,"nullDiffuseTxt"),"$iN")
break
case C.i:this.e0=H.m(this.y.q(0,"diffuseTxt"),"$iaq")
this.bu=H.m(this.y.q(0,"nullDiffuseTxt"),"$iN")
break}}t=a7.d
if(t!==C.d){this.bv=H.m(this.y.q(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e1=H.m(this.y.q(0,"invDiffuseTxt"),"$iap")
this.bw=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iN")
break
case C.i:this.e2=H.m(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bw=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iN")
break}}t=a7.e
if(t!==C.d){this.bz=H.m(this.y.q(0,"shininess"),"$ia1")
this.bx=H.m(this.y.q(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e3=H.m(this.y.q(0,"specularTxt"),"$iap")
this.by=H.m(this.y.q(0,"nullSpecularTxt"),"$iN")
break
case C.i:this.e4=H.m(this.y.q(0,"specularTxt"),"$iaq")
this.by=H.m(this.y.q(0,"nullSpecularTxt"),"$iN")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e5=H.m(this.y.q(0,"bumpTxt"),"$iap")
this.bA=H.m(this.y.q(0,"nullBumpTxt"),"$iN")
break
case C.i:this.e6=H.m(this.y.q(0,"bumpTxt"),"$iaq")
this.bA=H.m(this.y.q(0,"nullBumpTxt"),"$iN")
break}if(a7.dy){this.e7=H.m(this.y.q(0,"envSampler"),"$iaq")
this.e8=H.m(this.y.q(0,"nullEnvTxt"),"$iN")
t=a7.r
if(t!==C.d){this.bB=H.m(this.y.q(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e9=H.m(this.y.q(0,"reflectTxt"),"$iap")
this.bC=H.m(this.y.q(0,"nullReflectTxt"),"$iN")
break
case C.i:this.ea=H.m(this.y.q(0,"reflectTxt"),"$iaq")
this.bC=H.m(this.y.q(0,"nullReflectTxt"),"$iN")
break}}t=a7.x
if(t!==C.d){this.bD=H.m(this.y.q(0,"refraction"),"$ia1")
this.bE=H.m(this.y.q(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.eb=H.m(this.y.q(0,"refractTxt"),"$iap")
this.bF=H.m(this.y.q(0,"nullRefractTxt"),"$iN")
break
case C.i:this.ec=H.m(this.y.q(0,"refractTxt"),"$iaq")
this.bF=H.m(this.y.q(0,"nullRefractTxt"),"$iN")
break}}}t=a7.y
if(t!==C.d){this.bG=H.m(this.y.q(0,"alpha"),"$ia1")
switch(t){case C.d:break
case C.j:break
case C.h:this.ed=H.m(this.y.q(0,"alphaTxt"),"$iap")
this.bH=H.m(this.y.q(0,"nullAlphaTxt"),"$iN")
break
case C.i:this.ee=H.m(this.y.q(0,"alphaTxt"),"$iaq")
this.bH=H.m(this.y.q(0,"nullAlphaTxt"),"$iN")
break}}this.sfF(H.d([],[A.cR]))
this.sfG(H.d([],[A.cT]))
this.sfH(H.d([],[A.cU]))
this.sfI(H.d([],[A.cV]))
this.sfJ(H.d([],[A.cW]))
this.sfK(H.d([],[A.cX]))
if(a7.k2){t=a7.z
if(t>0){this.ef=H.h(this.y.q(0,"dirLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.cw;(s&&C.a).h(s,new A.cR(g,f,e))}}t=a7.Q
if(t>0){this.eg=H.h(this.y.q(0,"pntLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$ia1")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia1")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia1")
s=this.cz;(s&&C.a).h(s,new A.cT(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eh=H.h(this.y.q(0,"spotLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia1")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia1")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia1")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia1")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia1")
s=this.cA;(s&&C.a).h(s,new A.cU(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ei=H.h(this.y.q(0,"txtDirLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iM")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iN")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iap")
s=this.cB;(s&&C.a).h(s,new A.cV(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ej=H.h(this.y.q(0,"txtPntLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$icS")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iN")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia1")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia1")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia1")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$iaq")
s=this.cC;(s&&C.a).h(s,new A.cW(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.ek=H.h(this.y.q(0,"txtSpotLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iM")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iM")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iM")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iM")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iM")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iN")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iM")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia1")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia1")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a3,"$ia1")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a4,"$ia1")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a5,"$ia1")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a6,"$iap")
s=this.cD;(s&&C.a).h(s,new A.cX(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ai:function(a,b,c){C.b.W(b.a,b.d,1)},
ab:function(a,b,c){C.b.W(b.a,b.d,1)},
sfV:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sfF:function(a){this.cw=H.k(a,"$ib",[A.cR],"$ab")},
sfG:function(a){this.cz=H.k(a,"$ib",[A.cT],"$ab")},
sfH:function(a){this.cA=H.k(a,"$ib",[A.cU],"$ab")},
sfI:function(a){this.cB=H.k(a,"$ib",[A.cV],"$ab")},
sfJ:function(a){this.cC=H.k(a,"$ib",[A.cW],"$ab")},
sfK:function(a){this.cD=H.k(a,"$ib",[A.cX],"$ab")}}
A.hE.prototype={
j9:function(a){var u,t,s
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
jg:function(a){var u
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
ja:function(a){var u
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
jo:function(a){var u,t
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
jp:function(a){var u,t
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
ji:function(a){var u
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
jt:function(a){var u
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
aE:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ap(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jd:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aE(a,u,"emission")
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
j8:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aE(a,u,"ambient")
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
jb:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aE(a,u,"diffuse")
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
je:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aE(a,u,"invDiffuse")
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
jm:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aE(a,u,"specular")
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
jh:function(a){var u,t
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
jk:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aE(a,u,"reflect")
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
jl:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aE(a,u,"refract")
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
jc:function(a){var u,t
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
jj:function(a){var u,t
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
jn:function(a){var u,t
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
jq:function(a){var u,t,s
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
jr:function(a){var u,t,s
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
js:function(a){var u,t,s
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
jf:function(a){var u
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
i:function(a){return this.ak}}
A.cR.prototype={}
A.cV.prototype={}
A.cT.prototype={}
A.cW.prototype={}
A.cU.prototype={}
A.cX.prototype={}
A.cK.prototype={
fv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dk:function(a,b){var u,t,s
u=this.a
t=C.b.jW(u,b)
C.b.fi(u,t,a)
C.b.jQ(u,t)
if(!H.ls(C.b.f9(u,t,35713))){s=C.b.f8(u,t)
C.b.jZ(u,t)
throw H.c(P.w("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
iM:function(){var u,t,s,r,q,p
u=H.d([],[A.dp])
t=this.a
s=H.ai(C.b.bP(t,this.r,35721))
if(typeof s!=="number")return H.J(s)
r=0
for(;r<s;++r){q=C.b.f2(t,this.r,r)
p=C.b.f4(t,this.r,q.name)
C.a.h(u,new A.dp(t,q.name,p))}this.x=new A.fx(u)},
iO:function(){var u,t,s,r,q,p
u=H.d([],[A.el])
t=this.a
s=H.ai(C.b.bP(t,this.r,35718))
if(typeof s!=="number")return H.J(s)
r=0
for(;r<s;++r){q=C.b.f3(t,this.r,r)
p=C.b.fa(t,this.r,q.name)
C.a.h(u,this.jX(q.type,q.size,q.name,p))}this.y=new A.j0(u)},
aP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.N(u,t,b,c)
else return A.lg(u,t,b,a,c)},
h1:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ap(u,t,b,c)
else return A.lg(u,t,b,a,c)},
h2:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lg(u,t,b,a,c)},
bp:function(a,b){return new P.eB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jX:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a1(this.a,this.r,c,d)
case 35664:return new A.iW(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.iZ(this.a,this.r,c,d)
case 35667:return new A.iX(this.a,this.r,c,d)
case 35668:return new A.iY(this.a,this.r,c,d)
case 35669:return new A.j_(this.a,this.r,c,d)
case 35674:return new A.j1(this.a,this.r,c,d)
case 35675:return new A.cS(this.a,this.r,c,d)
case 35676:return new A.aB(this.a,this.r,c,d)
case 35678:return this.h1(b,c,d)
case 35680:return this.h2(b,c,d)
case 35670:throw H.c(this.bp("BOOL",c))
case 35671:throw H.c(this.bp("BOOL_VEC2",c))
case 35672:throw H.c(this.bp("BOOL_VEC3",c))
case 35673:throw H.c(this.bp("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bW.prototype={
i:function(a){return this.b}}
A.el.prototype={}
A.j0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kl:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kl("\n")}}
A.N.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sj6:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a1.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cS.prototype={
ao:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.t],"$ab")))
C.b.eW(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aB.prototype={
ao:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.t],"$ab")))
C.b.eX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kp.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cK(u.b,b).cK(u.d.cK(u.c,b),c)
a.sa4(0,new V.a4(t.a,t.b,t.c))
a.seS(t.A(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdR(new V.b7(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.kz.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.kB.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.J(q)
t=-t*q
p=s*q
a.sa4(0,new V.a4(t,p,r))
p=new V.I(t,p,r)
a.seS(p.A(0,Math.sqrt(p.I(p))))
a.sdR(new V.b7(1-c,2+c,-1,-1))},
$S:8}
F.kC.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:21}
F.kD.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:21}
F.kW.prototype={
$2:function(a,b){return 0},
$S:31}
F.kX.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.J(u)
t=a.f
s=new V.I(t.a,t.b,t.c)
u=s.A(0,Math.sqrt(s.I(s))).F(0,this.b+u)
a.sa4(0,new V.a4(u.a,u.b,u.c))},
$S:8}
F.kY.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:29}
F.kK.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:29}
F.kA.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lG(t.$1(u),s)
s=J.nk(J.lG(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.I(s.a,s.b,s.c)
q=s.A(0,Math.sqrt(s.I(s)))
t=$.mn
if(t==null){t=new V.I(1,0,0)
$.mn=t
p=t}else p=t
t=q.aG(!J.U(q,p)?V.mq():p)
o=t.A(0,Math.sqrt(t.I(t)))
t=o.aG(q)
p=t.A(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.F(0,t*s)
s=o.F(0,m*s)
a.sa4(0,J.nj(r,new V.a4(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
b5:function(){if(!this.gb6()){C.a.O(this.a.a.d.b,this)
this.a.a.a3()}this.ca()
this.cb()
this.iy()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
iL:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
iy:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
fU:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cZ()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ew())return
return q.A(0,Math.sqrt(q.I(q)))},
fY:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.I(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.I(u.a,u.b,u.c)
u=q.aG(u.A(0,Math.sqrt(u.I(u))))
return u.A(0,Math.sqrt(u.I(u)))},
cr:function(){if(this.d!=null)return!0
var u=this.fU()
if(u==null){u=this.fY()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fT:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cZ()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ew())return
return q.A(0,Math.sqrt(q.I(q)))},
fX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.R().a){u=m.t(0,p)
u=new V.I(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.t(0,p).F(0,g).p(0,p).t(0,s)
u=new V.I(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.I(u)))
u=f.aG(h)
u=u.A(0,Math.sqrt(u.I(u))).aG(f)
h=u.A(0,Math.sqrt(u.I(u)))}return h},
cp:function(){if(this.e!=null)return!0
var u=this.fT()
if(u==null){u=this.fX()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjP:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t
if(this.gb6())return a+"disposed"
u=a+C.c.ae(J.au(this.a.e),0)+", "+C.c.ae(J.au(this.b.e),0)+", "+C.c.ae(J.au(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.G("")}}
F.h4.prototype={}
F.iq.prototype={
b7:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bm.prototype={
b5:function(){if(!this.gb6()){C.a.O(this.a.a.c.b,this)
this.a.a.a3()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var u=this.a
if(u!=null){C.a.O(u.c.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.O(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){if(this.gb6())return a+"disposed"
return a+C.c.ae(J.au(this.a.e),0)+", "+C.c.ae(J.au(this.b.e),0)},
R:function(){return this.G("")}}
F.ho.prototype={}
F.iU.prototype={
b7:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
return u==t.e}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
return u==t.e}else return!1}}}
F.bI.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ae(J.au(u.e),0)},
R:function(){return this.G("")}}
F.e7.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Y()
this.e=u}return u},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.B()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jR())}this.a.B()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bI()
if(m.a==null)H.r(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.M(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nN(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.B()
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
if(u!=null)u.am(0)},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.am(0)
return t},
ky:function(a,b){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
for(u=[F.ah];t.length!==0;){s=C.a.gkh(t)
C.a.eN(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.f(t,q)
p=t[q]
if(p!=null&&a.b7(0,s,p)){C.a.h(r,p)
C.a.eN(t,q)}}if(r.length>1)b.b8(r)}}this.a.B()
this.c.cQ()
this.d.cQ()
this.b.kS()
this.c.cR(new F.iU())
this.d.cR(new F.iq())
u=this.e
if(u!=null)u.am(0)},
jA:function(a){this.ky(new F.jn(),new F.hV())},
ci:function(){return this.jA(null)},
cE:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cE()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.f(u,t)
s=u[t]
u=s.r
if(u!=null)s.seB(new V.I(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.I(r,q,u).A(0,Math.sqrt(r*r+q*q+u*u))
if(!J.U(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.M(null)}}}}u=this.e
if(u!=null)u.am(0)},
jK:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bu()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bt().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.di().a)!==0)++r
if((s&$.dj().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.br().a)!==0)++r
q=a1.gd1(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dr])
for(m=0,l=0;l<r;++l){k=a1.jE(l)
j=k.gd1(k)
C.a.n(n,l,new Z.dr(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].ku(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aw(t,34962,e)
C.b.dU(t,34962,new Float32Array(H.cb(o)),35044)
C.b.aw(t,34962,null)
d=new Z.ds(new Z.es(34962,e),n,a1)
d.shg(H.d([],[Z.bE]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)}a=Z.lj(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)}a=Z.lj(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.B()
C.a.h(c,b.e)}a=Z.lj(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
al:function(a){var u=this.e
if(u!=null)u.M(a)},
a3:function(){return this.al(null)},
$ipE:1}
F.ii.prototype={
jw:function(a){var u,t,s,r,q,p,o
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
jx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
cR:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b7(0,p,n)){p.b5()
break}}}}},
cQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gjP(s)
if(t)s.b5()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cr())s=!1
return s},
cq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cp())s=!1
return s},
cE:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.I(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.I(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.M(null)}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sh8:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ij.prototype={
gl:function(a){return this.b.length},
cR:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b7(0,p,n)){p.b5()
break}}}}},
cQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
R:function(){return this.G("")},
shk:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")}}
F.ik.prototype={
gl:function(a){return this.b.length},
kS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.O(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.M(null)}s=t.a
if(s!=null){C.a.O(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc7:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
F.ah.prototype={
cu:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.er(this.cx,s,p,u,t,r,q,a,o)},
jR:function(){return this.cu(null)},
sa4:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seB:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.I(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
seS:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdR:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
ku:function(a){var u,t
if(a.v(0,$.bu())){u=this.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=this.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bs())){u=this.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bv())){u=this.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bw())){u=this.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.di())){u=this.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dj())){u=this.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cl()))return H.d([this.ch],[P.t])
else if(a.v(0,$.br())){u=this.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
cr:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cZ()
this.d.N(0,new F.js(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.am(0)}return!0},
cp:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cZ()
this.d.N(0,new F.jr(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.am(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.c.ae(J.au(this.e),0))
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
C.a.h(u,V.X(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
R:function(){return this.G("")}}
F.js.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jr.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.ji.prototype={
B:function(){var u,t,s,r
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
jz:function(a,b,c,d,e,f,g,h,i){var u=F.er(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jy:function(a,b,c,d,e,f){return this.jz(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cr()
return!0},
cq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cp()
return!0},
jL:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.M(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
this.B()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sj7:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.jj.prototype={
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
N:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.N(this.b,b)
C.a.N(this.c,new F.jk(this,b))
C.a.N(this.d,new F.jl(this,b))},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sh9:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sha:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
shb:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jk.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:6}
F.jl.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:6}
F.jm.prototype={
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
shl:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")},
shm:function(a){this.c=H.k(a,"$ib",[F.bm],"$ab")}}
F.jo.prototype={}
F.jn.prototype={
b7:function(a,b,c){return J.U(b.f,c.f)}}
F.jp.prototype={}
F.hV.prototype={
b8:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.cZ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.I(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].seB(u)
return}}
F.jq.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc7:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
O.dS.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.Y()
this.dy=u}return u},
aa:function(a){var u
H.h(a,"$iB")
u=this.dy
if(u!=null)u.M(a)},
fN:function(){return this.aa(null)},
dD:function(a){H.h(a,"$iB")
this.a=null
this.aa(a)},
iE:function(){return this.dD(null)},
hE:function(a,b){var u=V.ao
u=new D.c_(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.aa(u)},
hG:function(a,b){var u=V.ao
u=new D.c0(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.aa(u)},
dh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a7=new Z.bc(a7.a|b.a)}if(a1){b=$.bs()
a7=new Z.bc(a7.a|b.a)}if(a2){b=$.bv()
a7=new Z.bc(a7.a|b.a)}if(a3){b=$.bw()
a7=new Z.bc(a7.a|b.a)}if(a5){b=$.br()
a7=new Z.bc(a7.a|b.a)}return new A.hE(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
Y:function(a,b){H.k(a,"$ib",[T.cO],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
aK:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ax(u,u.length,0,[H.u(u,0)]);u.E();){t=u.d
t.toString
s=$.jh
if(s==null){s=new V.I(0,0,1)
$.jh=s}t.a=s
s=$.jg
if(s==null){s=new V.I(0,1,0)
$.jg=s}t.b=s
s=$.jf
if(s==null){s=new V.I(-1,0,0)
$.jf=s}t.c=s
s=t.d
if(s!=null){r=s.bg(0,b,t)
if(r!=null){s=r.bf(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(q*q+p*p+o*o))
o=r.bf(t.b)
p=o.a
q=o.b
s=o.c
t.b=o.A(0,Math.sqrt(p*p+q*q+s*s))
s=r.bf(t.c)
q=s.a
p=s.b
o=s.c
t.c=s.A(0,Math.sqrt(q*q+p*p+o*o))}}}},
kU:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dh()
t=a4.fr.j(0,u.ak)
if(t==null){t=A.nT(u,a4.a)
s=t.b
if(s.length===0)H.r(P.w("May not cache a shader with no name."))
if(a4.fr.br(0,s))H.r(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bt
u=a5.e
if(!(u instanceof Z.ds)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.ax()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cq()
o.a.cq()
o=o.e
if(o!=null)o.am(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jL()
n=n.e
if(n!=null)n.am(0)}l=a5.d.jK(new Z.jv(a4.a),q)
l.aW($.bu()).e=this.a.Q.c
if(u)l.aW($.bt()).e=this.a.cx.c
if(p)l.aW($.bs()).e=this.a.ch.c
if(r.rx)l.aW($.bv()).e=this.a.cy.c
if(o)l.aW($.bw()).e=this.a.db.c
if(r.x1)l.aW($.br()).e=this.a.dx.c
a5.e=l}u=T.cO
k=H.d([],[u])
p=this.a
o=a4.a
C.b.eZ(o,p.r)
p.x.kd()
if(r.fx){p=this.a
n=a4.dx
n=n.ga1(n)
p=p.dy
p.toString
p.ao(n.af(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga1(n)
m=a4.dx
m=n.F(0,m.ga1(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ao(n.af(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkQ()
m=a4.dx
m=n.F(0,m.ga1(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ao(n.af(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ao(C.r.af(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ao(C.r.af(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ao(C.r.af(n,!0))}if(r.ay>0){j=this.e.a.length
p=this.a.k4
C.b.W(p.a,p.d,j)
for(p=[P.t],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.f(m,i)
m=m[i]
n.toString
H.h(m,"$iao")
n=n.r1
if(i>=n.length)return H.f(n,i)
n=n[i]
h=new Float32Array(H.cb(H.k(m.af(0,!0),"$ib",p,"$ab")))
C.b.eX(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.f.d)
p=this.a
n=this.f.d
p.ai(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.f.e)
p=this.a
n=this.f.e
p.ab(p.ry,p.x1,n)
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
case C.h:this.Y(k,this.r.d)
p=this.a
n=this.r.d
p.ai(p.y1,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.r.e)
p=this.a
n=this.r.e
p.ab(p.y2,p.ay,n)
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
p=p.ak
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.x.d)
p=this.a
n=this.x.d
p.ai(p.bt,p.bu,n)
n=this.a
p=this.x.f
n=n.ak
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.x.e)
p=this.a
n=this.x.e
p.ab(p.e0,p.bu,n)
n=this.a
p=this.x.f
n=n.ak
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bv
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.y.d)
p=this.a
n=this.y.d
p.ai(p.e1,p.bw,n)
n=this.a
p=this.y.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.y.e)
p=this.a
n=this.y.e
p.ab(p.e2,p.bw,n)
n=this.a
p=this.y.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bx
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bz
C.b.T(n.a,n.d,g)
break
case C.h:this.Y(k,this.z.d)
p=this.a
n=this.z.d
p.ai(p.e3,p.by,n)
n=this.a
p=this.z.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bz
C.b.T(p.a,p.d,g)
break
case C.i:this.Y(k,this.z.e)
p=this.a
n=this.z.e
p.ab(p.e4,p.by,n)
n=this.a
p=this.z.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bz
C.b.T(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ef
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cw
if(e>=m.length)return H.f(m,e)
b=m[e]
m=f.bf(c.gdY(c))
g=m.a
a=m.b
a0=m.c
a0=m.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.gaj(c)
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.eg
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cz
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gbc(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.be(c.gbc(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gaj(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcj()
g=b.e
C.b.T(g.a,g.d,m)
m=c.gck()
g=b.f
C.b.T(g.a,g.d,m)
m=c.gcl()
g=b.r
C.b.T(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.eh
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cA
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gbc(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdY(c).ll()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.be(c.gbc(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gaj(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gli()
g=b.f
C.b.T(g.a,g.d,m)
m=c.glh()
g=b.r
C.b.T(g.a,g.d,m)
m=c.gcj()
g=b.x
C.b.T(g.a,g.d,m)
m=c.gck()
g=b.y
C.b.T(g.a,g.d,m)
m=c.gcl()
g=b.z
C.b.T(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ei
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cB
if(e>=g.length)return H.f(g,e)
b=g[e]
g=c.f
H.k(k,"$ib",m,"$ab")
if(g!=null)if(!C.a.X(k,g)){g.a=k.length
C.a.h(k,g)}g=c.a
a=b.d
a0=g.a
a1=g.b
g=g.c
C.b.w(a.a,a.d,a0,a1,g)
g=c.b
a1=b.b
a0=g.a
a=g.b
g=g.c
C.b.w(a1.a,a1.d,a0,a,g)
g=c.c
a=b.c
a0=g.a
a1=g.b
g=g.c
C.b.w(a.a,a.d,a0,a1,g)
g=f.bf(c.a)
a1=g.a
a0=g.b
a=g.c
a=g.A(0,Math.sqrt(a1*a1+a0*a0+a*a))
a0=b.e
a1=a.a
g=a.b
a=a.c
C.b.w(a0.a,a0.d,a1,g,a)
a=c.e
g=b.f
C.b.w(g.a,g.d,a.a,a.b,a.c)
a=c.f
g=a!=null
if(!g||!a.d){g=b.x
C.b.W(g.a,g.d,1)}else{a0=b.r
g=!g||!a.d
a1=a0.a
a0=a0.d
if(g)C.b.W(a1,a0,0)
else C.b.W(a1,a0,a.a)
g=b.x
C.b.W(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ej
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.y,n=p.length,m=[P.t],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cC
if(e>=a.length)return H.f(a,e)
b=a[e]
a=c.gcV()
H.k(k,"$ib",g,"$ab")
if(!C.a.X(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.F(0,c.ga1(c))
a=c.ga1(c)
a0=$.cH
if(a0==null){a0=new V.a4(0,0,0)
$.cH=a0}a0=a.be(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cH
if(a==null){a=new V.a4(0,0,0)
$.cH=a}a=a2.be(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.ev(0)
a0=b.d
h=new Float32Array(H.cb(H.k(new V.dU(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).af(0,!0),"$ib",m,"$ab")))
C.b.eW(a0.a,a0.d,!1,h)
a0=c.gaj(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gcV()
a=a0.gex(a0)
if(!a){a=b.r
C.b.W(a.a,a.d,1)}else{a=b.f
a1=a0.gex(a0)
a3=a.a
a=a.d
if(!a1)C.b.W(a3,a,0)
else C.b.W(a3,a,a0.glj(a0))
a=b.r
C.b.W(a.a,a.d,0)}a=c.gcj()
a0=b.x
C.b.T(a0.a,a0.d,a)
a=c.gck()
a0=b.y
C.b.T(a0.a,a0.d,a)
a=c.gcl()
a0=b.z
C.b.T(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.ek
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cD
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gcV()
H.k(k,"$ib",u,"$ab")
if(!C.a.X(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gbc(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdY(c)
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glo()
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcT(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.be(c.gbc(c))
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcV()
g=m.gex(m)
if(!g){m=b.x
C.b.W(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.W(a0,g,0)
else C.b.W(a0,g,m.a)
m=b.x
C.b.W(m.a,m.d,0)}m=c.gaj(c)
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glm()
g=b.z
C.b.T(g.a,g.d,m)
m=c.gln()
g=b.Q
C.b.T(g.a,g.d,m)
m=c.gcj()
g=b.ch
C.b.T(g.a,g.d,m)
m=c.gck()
g=b.cx
C.b.T(g.a,g.d,m)
m=c.gcl()
g=b.cy
C.b.T(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.Y(k,this.Q.d)
u=this.a
p=this.Q.d
u.ai(u.e5,u.bA,p)
break
case C.i:this.Y(k,this.Q.e)
u=this.a
p=this.Q.e
u.ab(u.e6,u.bA,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga1(p).ev(0)
a4.Q=p}u=u.id
u.toString
u.ao(p.af(0,!0))}if(r.dy){this.Y(k,this.ch)
u=this.a
p=this.ch
u.ab(u.e7,u.e8,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bB
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.Y(k,this.cx.d)
u=this.a
p=this.cx.d
u.ai(u.e9,u.bC,p)
p=this.a
u=this.cx.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.Y(k,this.cx.e)
u=this.a
p=this.cx.e
u.ab(u.ea,u.bC,p)
p=this.a
u=this.cx.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bE
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bD
C.b.T(p.a,p.d,m)
break
case C.h:this.Y(k,this.cy.d)
u=this.a
p=this.cy.d
u.ai(u.eb,u.bF,p)
p=this.a
u=this.cy.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bD
C.b.T(u.a,u.d,m)
break
case C.i:this.Y(k,this.cy.e)
u=this.a
p=this.cy.e
u.ab(u.ec,u.bF,p)
p=this.a
u=this.cy.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bD
C.b.T(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bG
C.b.T(u.a,u.d,n)
break
case C.h:this.Y(k,this.db.d)
u=this.a
n=this.db.d
u.ai(u.ed,u.bH,n)
n=this.a
u=this.db.f
n=n.bG
C.b.T(n.a,n.d,u)
break
case C.i:this.Y(k,this.db.e)
u=this.a
n=this.db.e
u.ab(u.ee,u.bH,n)
n=this.a
u=this.db.f
n=n.bG
C.b.T(n.a,n.d,u)
break}C.b.cv(o,3042)
C.b.jJ(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dL(o,33984+u.a)
C.b.aV(o,3553,u.b)}}u=a5.e
u.cm(a4)
u.aX(a4)
u.l8(a4)
if(p)C.b.k6(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dL(o,33984+u.a)
C.b.aV(o,3553,null)}}u=this.a
u.toString
C.b.eZ(o,null)
u.x.k7()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dh().ak},
sfW:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.hC.prototype={}
O.dT.prototype={
aQ:function(){}}
O.hD.prototype={}
O.b5.prototype={
dF:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.W(this.b+".color",u,a,this,[V.a3])
t.b=!0
this.a.aa(t)}},
aQ:function(){this.fo()
this.dF(new V.a3(1,1,1))},
saj:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aQ()
u=this.a
u.a=null
u.aa(null)}this.dF(b)}}
O.hF.prototype={
iK:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.W(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.aa(u)}},
aQ:function(){this.bT()
this.iK(1)}}
O.hG.prototype={
cc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.W(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.aa(u)}},
aQ:function(){this.bT()
this.cc(100)}}
O.c8.prototype={}
T.cO.prototype={}
T.ef.prototype={}
T.iG.prototype={
gC:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u}}
T.iH.prototype={
kw:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aV(u,3553,t)
C.b.bL(u,3553,10242,10497)
C.b.bL(u,3553,10243,10497)
C.b.bL(u,3553,10241,9729)
C.b.bL(u,3553,10240,9729)
C.b.aV(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.iG()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.ac(s,"load",H.n(new T.iI(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kv:function(a,b){return this.kw(a,!1,!1,!1,b)},
iF:function(a,b,c){var u,t,s,r
b=V.lz(b,2)
u=V.lz(a.width,2)
t=V.lz(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l4(null,null)
s.width=u
s.height=t
r=H.h(C.q.f6(s,"2d"),"$ibU")
r.imageSmoothingEnabled=!1;(r&&C.D).k9(r,a,0,0,s.width,s.height)
return P.p2(C.D.hf(r,0,0,s.width,s.height))}}}
T.iI.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iF(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aV(t,3553,this.e)
C.b.kP(t,37440,this.f?1:0)
C.b.l1(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.f1(t,3553)
C.b.aV(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kc()}++s.e},
$S:12}
V.bg.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dR.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aI:function(a,b){return!this.fn(0,b)},
i:function(a){return"!["+this.d2(0)+"]"}}
V.i6.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c4(this.a)
t=H.c4(this.b)
return u+".."+t},
$iaz:1}
V.ih.prototype={
fu:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aO([P.o,P.Q])
for(t=new H.cA(a,a.gl(a),0,[H.at(a,"y",0)]);t.E();)u.n(0,t.d,!0)
this.siI(u)},
aI:function(a,b){return this.a.br(0,b)},
i:function(a){var u=this.a
return P.ea(u.ga7(u),0,null)},
siI:function(a){this.a=H.k(a,"$iE",[P.o,P.Q],"$aE")},
$iaz:1}
V.cL.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cQ(this.a.k(0,b))
r.sa8(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
kg:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
sj2:function(a){this.c=H.k(a,"$ib",[V.cQ],"$ab")}}
V.ej.prototype={
i:function(a){var u,t
u=H.lB(this.b,"\n","\\n")
t=H.lB(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cP.prototype={
aJ:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siz:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iL.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cL(this,b)
u.sj2(H.d([],[V.cQ]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cP(this,a)
t=P.e
u.siz(new H.aO([t,t]))
this.b.n(0,a,u)}return u},
eV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ej])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.kg(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ea(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ea(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ej(j==null?k.b:j,l,o)}++o}}},
siS:function(a){this.a=H.k(a,"$iE",[P.e,V.cL],"$aE")},
siW:function(a){this.b=H.k(a,"$iE",[P.e,V.cP],"$aE")}}
V.cQ.prototype={
i:function(a){return this.b.b+": "+this.d2(0)}}
X.du.prototype={$ibo:1}
X.hb.prototype={
gC:function(){var u=this.x
if(u==null){u=D.Y()
this.x=u}return u}}
X.e0.prototype={
gC:function(){var u=this.f
if(u==null){u=D.Y()
this.f=u}return u},
aO:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.M(a)},
fQ:function(){return this.aO(null)},
sb9:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gC().O(0,this.gd6())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gd6())
u=new D.W("mover",t,this.b,this,[U.ak])
u.b=!0
this.aO(u)}},
$ibo:1,
$idu:1}
X.ed.prototype={}
V.bA.prototype={
bk:function(a){this.b=new P.he(C.Y)
this.c=null
this.sc1(H.d([],[[P.b,W.aD]]))},
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
n=this.b.h0(p,0,p.length)
m=n==null?p:n
C.k.ff(o,H.lB(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eI:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc1(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bs()
this.c=t}for(t=t.eV(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bK(t[r])},
sc1:function(a){this.d=H.k(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kV.prototype={
$1:function(a){H.h(a,"$ib9")
P.lA(C.e.eU(this.a.gkm(),2)+" fps")},
$S:51}
V.fR.prototype={
bK:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
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
bs:function(){var u,t,s,r
u=V.iM()
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
t.aJ(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aJ(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aJ(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hc.prototype={
bK:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
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
bs:function(){var u,t,s,r
u=V.iM()
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
s.aJ(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aJ(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aJ(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hd.prototype={
bK:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
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
bs:function(){var u,t,s
u=V.iM()
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bg())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bg())
t=u.k(0,"Other").m(0,"Other")
s=new V.av()
s.sa8(H.d([],[V.az]))
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
s.aJ(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.S("Attr")
s=u.k(0,"Other")
s.d=s.a.S("Other")
return u}}
V.i0.prototype={
eI:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc1(H.d([],[[P.b,W.aD]]))
this.P(C.a.m(b,"\n"),"#111")},
bK:function(a){},
bs:function(){return}}
V.i4.prototype={
dM:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mh().gcO().j(0,H.l(u))
if(t==null)if(d){c.$0()
this.dJ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lK(this.c).h(0,q)
o=W.nH("radio")
o.checked=s
o.name=u
u=W.p
W.ac(o,"change",H.n(new V.i5(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.D(q,o)
n=r.createElement("span")
n.textContent=b
C.G.D(q,n)
J.lK(this.c).h(0,r.createElement("br"))},
b3:function(a,b,c){return this.dM(a,b,c,!1)},
dJ:function(a){var u,t,s,r,q
u=P.mh()
t=P.e
s=P.nP(u.gcO(),t,t)
s.n(0,this.a,a)
r=u.eO(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iB(t,new P.k7([],[]).cW(""),"",q)}}
V.i5.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dJ(this.d)}},
$S:12}
V.il.prototype={
fw:function(a,b){var u,t,s,r,q,p,o
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
W.ac(u,"scroll",H.n(new V.io(s),{func:1,ret:-1,args:[o]}),!1,o)},
dO:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iN()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eV(C.a.ks(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.pt(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.D(t,l)}else{k=P.fd(C.J,n,C.m,!1)
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
f5:function(a){var u,t,s,r
u=new V.fR("dart")
u.bk("dart")
t=new V.hc("glsl")
t.bk("glsl")
s=new V.hd("html")
s.bk("html")
r=C.a.ki(H.d([u,t,s],[V.bA]),new V.ip(a))
if(r!=null)return r
u=new V.i0("plain")
u.bk("plain")
return u},
dN:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dh(r).a5(r,"+")){C.a.n(a7,s,C.c.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a5(r,"-")){C.a.n(a7,s,C.c.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f5(a5)
q.eI(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.fd(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lM(null)
i.href="#"+H.l(m)
i.textContent=a4
C.k.D(j,i)
C.x.D(k,j)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.x.D(a,r[a0])
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
for(a3=C.a.gV(r);a3.E();)C.x.D(c,a3.gL(a3))
C.n.D(e,d)
C.n.D(e,c)
C.o.D(n,e)}},
ju:function(a){var u,t,s,r,q,p,o
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
r=C.o.hh(t,-1)
s=H.h((r&&C.n).ds(r,-1),"$ib8").style
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
o=H.h(C.n.ds(r,-1),"$ib8")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).D(o,p)}},
iN:function(){var u,t,s,r
if(this.b!=null)return
u=V.iM()
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
V.io.prototype={
$1:function(a){P.md(C.y,new V.im(this.a))},
$S:12}
V.im.prototype={
$0:function(){var u,t,s
u=C.e.an(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ip.prototype={
$1:function(a){return H.h(a,"$ibA").a===this.a},
$S:52}
M.kM.prototype={
$0:function(){this.a.sag(0,F.lv(1,null,null,1))},
$S:0}
M.kN.prototype={
$0:function(){this.a.sag(0,F.mM(1,!0,!0,1,40,1))},
$S:0}
M.kO.prototype={
$0:function(){this.a.sag(0,F.mM(1,!0,!1,1,40,0))},
$S:0}
M.kP.prototype={
$0:function(){this.a.sag(0,F.ps(6,null,1,6))},
$S:0}
M.kQ.prototype={
$0:function(){this.a.sag(0,F.mZ(30,1,15,0.5))},
$S:0}
M.kR.prototype={
$0:function(){this.a.sag(0,F.pj(120,1,2,12,0.3,3))},
$S:0}
M.kS.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dN("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dN("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fk=u.i
u=J.dK.prototype
u.fm=u.i
u=P.i.prototype
u.fl=u.bN
u=W.S.prototype
u.bS=u.ac
u=W.eW.prototype
u.fp=u.av
u=O.dT.prototype
u.fo=u.aQ
u=O.b5.prototype
u.bT=u.aQ
u=V.dR.prototype
u.fn=u.aI
u.d2=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oX","oq",11)
u(P,"oY","or",11)
u(P,"oZ","os",11)
t(P,"mL","oW",3)
s(W,"pc",4,null,["$4"],["ou"],20,0)
s(W,"pd",4,null,["$4"],["ov"],20,0)
var m
r(m=E.an.prototype,"geG",0,0,null,["$1","$0"],["eH","kG"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","kF"],1,0)
r(m,"geC",0,0,null,["$1","$0"],["eD","kC"],1,0)
q(m,"gkA","kB",10)
q(m,"gkD","kE",10)
r(m=E.ei.prototype,"gd3",0,0,null,["$1","$0"],["d5","d4"],1,0)
p(m,"gkW","eP",3)
o(m=X.ep.prototype,"ghU","hV",14)
o(m,"ghH","hI",14)
o(m,"ghO","hP",4)
o(m,"ghY","hZ",27)
o(m,"ghW","hX",27)
o(m,"gi1","i2",4)
o(m,"gi5","i6",4)
o(m,"ghS","hT",4)
o(m,"gi3","i4",4)
o(m,"ghQ","hR",4)
o(m,"gi7","i8",37)
o(m,"gi9","ia",14)
o(m,"gip","iq",13)
o(m,"gik","il",13)
o(m,"gim","io",13)
r(m=D.dN.prototype,"gdw",0,0,null,["$1","$0"],["dz","i_"],1,0)
o(m,"gic","ie",39)
q(m,"ghB","hC",16)
q(m,"gii","ij",16)
r(D.bK.prototype,"gc6",0,0,null,["$1","$0"],["at","hJ"],1,0)
n(V.a2.prototype,"gl","cJ",32)
n(V.I.prototype,"gl","cJ",32)
r(m=U.cx.prototype,"gbl",0,0,null,["$1","$0"],["a0","aq"],1,0)
q(m,"ghz","hA",30)
q(m,"gig","ih",30)
r(m=U.eq.prototype,"gbl",0,0,null,["$1","$0"],["a0","aq"],1,0)
o(m,"ght","hu",2)
o(m,"ghv","hw",2)
o(m,"ghx","hy",2)
o(m,"gho","hp",2)
o(m,"ghq","hr",2)
o(m,"gj0","j1",2)
o(m,"giZ","j_",2)
o(m,"giX","iY",2)
r(m=M.dB.prototype,"gar",0,0,null,["$1","$0"],["aC","fE"],1,0)
q(m,"ghK","hL",10)
q(m,"ghM","hN",10)
r(m=O.dS.prototype,"gfM",0,0,null,["$1","$0"],["aa","fN"],1,0)
r(m,"giD",0,0,null,["$1","$0"],["dD","iE"],1,0)
q(m,"ghD","hE",19)
q(m,"ghF","hG",19)
r(X.e0.prototype,"gd6",0,0,null,["$1","$0"],["aO","fQ"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.la,J.a,J.ax,P.eJ,P.i,H.cA,P.b2,H.bY,H.cY,H.fK,H.i7,H.iR,P.bC,H.cp,H.f0,P.af,H.hp,H.hr,H.hk,P.f6,P.be,P.aI,P.et,P.ix,P.cM,P.iy,P.b9,P.am,P.ko,P.k1,P.c9,P.eI,P.y,P.kf,P.hx,P.bV,P.hf,P.km,P.kk,P.Q,P.ay,P.a5,P.b1,P.hZ,P.e9,P.eB,P.ha,P.bD,P.b,P.E,P.L,P.aw,P.e,P.al,P.ca,P.j6,P.k4,W.fN,W.bN,W.D,W.dZ,W.eW,W.ka,W.dC,W.aA,W.k0,W.fe,P.k6,P.fb,P.jW,P.P,O.a6,O.cB,E.fE,E.an,E.i8,E.ei,Z.es,Z.jv,Z.ds,Z.bE,Z.bc,D.fH,D.bX,D.B,X.dt,X.dL,X.hm,X.hu,X.aQ,X.hN,X.iN,X.ep,D.dx,D.a8,D.e1,D.e8,D.bK,D.eg,D.eh,V.a3,V.aL,V.h0,V.dU,V.ao,V.aa,V.a4,V.b7,V.e5,V.a2,V.I,U.eq,M.dB,A.dp,A.fx,A.hE,A.cR,A.cV,A.cT,A.cW,A.cU,A.cX,A.bW,A.el,A.j0,F.a9,F.h4,F.bm,F.ho,F.bI,F.e7,F.ii,F.ij,F.ik,F.ah,F.ji,F.jj,F.jm,F.jo,F.jp,F.jq,O.c8,O.dT,T.iH,V.bg,V.az,V.dR,V.i6,V.ih,V.cL,V.ej,V.cP,V.iL,X.du,X.ed,X.e0,V.bA,V.i4,V.il])
s(J.a,[J.hj,J.dJ,J.dK,J.aN,J.bF,J.bk,H.cD,H.bH,W.j,W.fv,W.bS,W.bU,W.b_,W.b0,W.V,W.ev,W.fS,W.fT,W.dy,W.ex,W.dA,W.ez,W.fV,W.p,W.eC,W.aM,W.dF,W.eE,W.bj,W.dP,W.hH,W.eK,W.eL,W.aP,W.eM,W.eP,W.aR,W.eT,W.e3,W.eV,W.aT,W.eX,W.aU,W.f1,W.aF,W.f4,W.iK,W.aW,W.f7,W.iP,W.jb,W.ff,W.fh,W.fj,W.fl,W.fn,P.b4,P.eG,P.b6,P.eR,P.i3,P.f2,P.ba,P.f9,P.fy,P.eu,P.dq,P.dD,P.e2,P.c6,P.e6,P.ee,P.em,P.eZ])
s(J.dK,[J.i_,J.bM,J.bl])
t(J.l9,J.aN)
s(J.bF,[J.dI,J.dH])
t(P.ht,P.eJ)
s(P.ht,[H.en,W.jC,W.ar,P.h6])
t(H.v,H.en)
s(P.i,[H.fY,H.hy,H.d_])
s(H.fY,[H.c1,H.hq])
s(P.b2,[H.hz,H.jw])
t(H.hA,H.c1)
t(H.fL,H.fK)
s(P.bC,[H.hW,H.hl,H.j4,H.iT,H.fG,H.ie,P.e_,P.aK,P.j5,P.j2,P.c7,P.fJ,P.fQ])
s(H.cp,[H.kZ,H.iD,H.kG,H.kH,H.kI,P.jy,P.jx,P.jz,P.jA,P.ke,P.kd,P.jJ,P.jN,P.jK,P.jL,P.jM,P.jQ,P.jR,P.jP,P.jO,P.iz,P.iA,P.kw,P.jZ,P.jY,P.k_,P.hs,P.hw,P.kl,P.fW,P.fX,P.ja,P.j7,P.j8,P.j9,P.kg,P.kh,P.kj,P.ki,P.ks,P.kr,P.kt,P.ku,W.fZ,W.hJ,W.hL,W.id,W.iw,W.jI,W.hU,W.hT,W.k2,W.k3,W.kc,W.kn,P.k8,P.ky,P.h7,P.h8,P.fA,E.i9,E.ia,E.ib,E.iJ,D.h2,D.h3,F.kp,F.kz,F.kB,F.kC,F.kD,F.kW,F.kX,F.kY,F.kK,F.kA,F.js,F.jr,F.jk,F.jl,T.iI,V.kV,V.i5,V.io,V.im,V.ip,M.kM,M.kN,M.kO,M.kP,M.kQ,M.kR,M.kS])
s(H.iD,[H.iu,H.cn])
t(P.hv,P.af)
s(P.hv,[H.aO,W.jB])
t(H.dW,H.bH)
s(H.dW,[H.d3,H.d5])
t(H.d4,H.d3)
t(H.cE,H.d4)
t(H.d6,H.d5)
t(H.dX,H.d6)
s(H.dX,[H.hO,H.hP,H.hQ,H.hR,H.hS,H.dY,H.cF])
t(P.jX,P.ko)
t(P.jV,P.k1)
t(P.fc,P.hx)
t(P.eo,P.fc)
s(P.bV,[P.fC,P.h_])
t(P.bB,P.iy)
s(P.bB,[P.fD,P.he,P.je,P.jd])
t(P.jc,P.h_)
s(P.a5,[P.t,P.o])
s(P.aK,[P.c5,P.hg])
t(P.jE,P.ca)
s(W.j,[W.F,W.h5,W.aS,W.d7,W.aV,W.aG,W.d9,W.ju,W.d0,P.fB,P.bR])
s(W.F,[W.S,W.bz,W.cs,W.d1])
s(W.S,[W.z,P.q])
s(W.z,[W.dm,W.fw,W.cm,W.by,W.bT,W.aD,W.h9,W.dE,W.cy,W.cz,W.dM,W.cC,W.ig,W.b8,W.eb,W.ec,W.iC,W.cN])
s(W.b_,[W.cq,W.fO,W.fP])
t(W.fM,W.b0)
t(W.cr,W.ev)
t(W.ey,W.ex)
t(W.dz,W.ey)
t(W.eA,W.ez)
t(W.fU,W.eA)
t(W.aE,W.bS)
t(W.eD,W.eC)
t(W.cv,W.eD)
t(W.eF,W.eE)
t(W.bZ,W.eF)
t(W.dG,W.cs)
t(W.bL,W.p)
s(W.bL,[W.b3,W.ag,W.aX])
t(W.hI,W.eK)
t(W.hK,W.eL)
t(W.eN,W.eM)
t(W.hM,W.eN)
t(W.eQ,W.eP)
t(W.cG,W.eQ)
t(W.eU,W.eT)
t(W.i1,W.eU)
t(W.ic,W.eV)
t(W.d8,W.d7)
t(W.ir,W.d8)
t(W.eY,W.eX)
t(W.is,W.eY)
t(W.iv,W.f1)
t(W.f5,W.f4)
t(W.iE,W.f5)
t(W.da,W.d9)
t(W.iF,W.da)
t(W.f8,W.f7)
t(W.iO,W.f8)
t(W.jt,W.cC)
t(W.bd,W.ag)
t(W.fg,W.ff)
t(W.jD,W.fg)
t(W.ew,W.dA)
t(W.fi,W.fh)
t(W.jS,W.fi)
t(W.fk,W.fj)
t(W.eO,W.fk)
t(W.fm,W.fl)
t(W.k5,W.fm)
t(W.fo,W.fn)
t(W.k9,W.fo)
t(W.jF,W.jB)
t(W.jG,P.ix)
t(W.lk,W.jG)
t(W.jH,P.cM)
t(W.kb,W.eW)
t(P.k7,P.k6)
t(P.ab,P.jW)
t(P.eH,P.eG)
t(P.hn,P.eH)
t(P.eS,P.eR)
t(P.hX,P.eS)
t(P.cJ,P.q)
t(P.f3,P.f2)
t(P.iB,P.f3)
t(P.fa,P.f9)
t(P.iQ,P.fa)
t(P.fz,P.eu)
t(P.hY,P.bR)
t(P.f_,P.eZ)
t(P.it,P.f_)
s(E.fE,[Z.dr,A.cK,T.cO])
s(D.B,[D.c_,D.c0,D.W,X.i2])
s(X.i2,[X.dQ,X.bG,X.ek])
s(O.a6,[D.dN,U.cx])
s(D.fH,[U.fI,U.ak])
t(U.dv,U.ak)
t(A.hB,A.cK)
s(A.el,[A.N,A.iX,A.iY,A.j_,A.iV,A.a1,A.iW,A.M,A.iZ,A.j1,A.cS,A.aB,A.ap,A.aq])
t(F.iq,F.h4)
t(F.iU,F.ho)
t(F.jn,F.jo)
t(F.hV,F.jp)
t(O.dS,O.c8)
s(O.dT,[O.hC,O.hD,O.b5])
s(O.b5,[O.hF,O.hG])
t(T.ef,T.cO)
t(T.iG,T.ef)
s(V.dR,[V.av,V.cQ])
t(X.hb,X.ed)
s(V.bA,[V.fR,V.hc,V.hd,V.i0])
u(H.en,H.cY)
u(H.d3,P.y)
u(H.d4,H.bY)
u(H.d5,P.y)
u(H.d6,H.bY)
u(P.eJ,P.y)
u(P.fc,P.kf)
u(W.ev,W.fN)
u(W.ex,P.y)
u(W.ey,W.D)
u(W.ez,P.y)
u(W.eA,W.D)
u(W.eC,P.y)
u(W.eD,W.D)
u(W.eE,P.y)
u(W.eF,W.D)
u(W.eK,P.af)
u(W.eL,P.af)
u(W.eM,P.y)
u(W.eN,W.D)
u(W.eP,P.y)
u(W.eQ,W.D)
u(W.eT,P.y)
u(W.eU,W.D)
u(W.eV,P.af)
u(W.d7,P.y)
u(W.d8,W.D)
u(W.eX,P.y)
u(W.eY,W.D)
u(W.f1,P.af)
u(W.f4,P.y)
u(W.f5,W.D)
u(W.d9,P.y)
u(W.da,W.D)
u(W.f7,P.y)
u(W.f8,W.D)
u(W.ff,P.y)
u(W.fg,W.D)
u(W.fh,P.y)
u(W.fi,W.D)
u(W.fj,P.y)
u(W.fk,W.D)
u(W.fl,P.y)
u(W.fm,W.D)
u(W.fn,P.y)
u(W.fo,W.D)
u(P.eG,P.y)
u(P.eH,W.D)
u(P.eR,P.y)
u(P.eS,W.D)
u(P.f2,P.y)
u(P.f3,W.D)
u(P.f9,P.y)
u(P.fa,W.D)
u(P.eu,P.af)
u(P.eZ,P.y)
u(P.f_,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.by.prototype
C.q=W.bT.prototype
C.D=W.bU.prototype
C.k=W.aD.prototype
C.U=W.dy.prototype
C.W=W.dE.prototype
C.X=W.dF.prototype
C.z=W.dG.prototype
C.Z=J.a.prototype
C.a=J.aN.prototype
C.a_=J.dH.prototype
C.f=J.dI.prototype
C.r=J.dJ.prototype
C.e=J.bF.prototype
C.c=J.bk.prototype
C.a6=J.bl.prototype
C.G=W.dM.prototype
C.ac=W.cG.prototype
C.M=J.i_.prototype
C.N=W.e3.prototype
C.b=P.c6.prototype
C.x=W.b8.prototype
C.o=W.eb.prototype
C.n=W.ec.prototype
C.C=J.bM.prototype
C.O=W.bd.prototype
C.P=W.d0.prototype
C.R=new P.fD(!1)
C.Q=new P.fC(C.R)
C.S=new P.hZ()
C.T=new P.je()
C.l=new P.jX()
C.d=new A.bW(0,"ColorSourceType.None")
C.j=new A.bW(1,"ColorSourceType.Solid")
C.h=new A.bW(2,"ColorSourceType.Texture2D")
C.i=new A.bW(3,"ColorSourceType.TextureCube")
C.y=new P.b1(0)
C.V=new P.b1(5e6)
C.Y=new P.hf("element",!0,!1,!1,!1)
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
C.ab=new H.fL(0,{},C.I,[P.e,P.e])
C.m=new P.jc(!1)})();(function staticFields(){$.aZ=0
$.co=null
$.lO=null
$.lo=!1
$.mR=null
$.mJ=null
$.mX=null
$.kE=null
$.kJ=null
$.lx=null
$.cc=null
$.de=null
$.df=null
$.lp=!1
$.a0=C.l
$.bi=null
$.l7=null
$.lV=null
$.lU=null
$.m0=null
$.m4=null
$.cH=null
$.m8=null
$.ml=null
$.mo=null
$.mn=null
$.jf=null
$.jg=null
$.jh=null
$.mm=null
$.m3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pA","n0",function(){return H.mQ("_$dart_dartClosure")})
u($,"pB","lD",function(){return H.mQ("_$dart_js")})
u($,"pH","n1",function(){return H.bb(H.iS({
toString:function(){return"$receiver$"}}))})
u($,"pI","n2",function(){return H.bb(H.iS({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pJ","n3",function(){return H.bb(H.iS(null))})
u($,"pK","n4",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pN","n7",function(){return H.bb(H.iS(void 0))})
u($,"pO","n8",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pM","n6",function(){return H.bb(H.mf(null))})
u($,"pL","n5",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pQ","na",function(){return H.bb(H.mf(void 0))})
u($,"pP","n9",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q6","lE",function(){return P.op()})
u($,"qc","dk",function(){return[]})
u($,"pT","nb",function(){return P.ol()})
u($,"q7","nf",function(){return H.nU(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qa","nh",function(){return P.o9("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qb","ni",function(){return P.oO()})
u($,"q8","ng",function(){return P.lY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"q9","lF",function(){return P.lc(P.e,P.bD)})
u($,"q_","ne",function(){return Z.aH(0)})
u($,"pU","nc",function(){return Z.aH(511)})
u($,"q1","bu",function(){return Z.aH(1)})
u($,"q0","bt",function(){return Z.aH(2)})
u($,"pW","bs",function(){return Z.aH(4)})
u($,"q2","bv",function(){return Z.aH(8)})
u($,"q3","bw",function(){return Z.aH(16)})
u($,"pX","di",function(){return Z.aH(32)})
u($,"pY","dj",function(){return Z.aH(64)})
u($,"pZ","nd",function(){return Z.aH(96)})
u($,"q4","cl",function(){return Z.aH(128)})
u($,"pV","br",function(){return Z.aH(256)})
u($,"pz","n_",function(){return new V.h0(1e-9)})
u($,"py","R",function(){return $.n_()})})()
var v={mangledGlobalNames:{o:"int",t:"double",a5:"num",e:"String",Q:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ah,P.t,P.t]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ao]]},{func:1,ret:P.Q,args:[W.S,P.e,P.e,W.bN]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.Q,args:[W.F]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.Q,args:[W.aA]},{func:1,ret:P.Q,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:V.a4,args:[P.t]},{func:1,ret:-1,args:[P.o,[P.i,U.ak]]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:P.t},{func:1,ret:W.S,args:[W.F]},{func:1,args:[W.p]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.o]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.L,args:[P.e,,]},{func:1,ret:P.Q,args:[[P.i,D.a8]]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.aw]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.L,args:[P.b9]},{func:1,ret:P.Q,args:[V.bA]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cD,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cE,Float64Array:H.cE,Int16Array:H.hO,Int32Array:H.hP,Int8Array:H.hQ,Uint16Array:H.hR,Uint32Array:H.hS,Uint8ClampedArray:H.dY,CanvasPixelArray:H.dY,Uint8Array:H.cF,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fv,HTMLAnchorElement:W.dm,HTMLAreaElement:W.fw,HTMLBaseElement:W.cm,Blob:W.bS,HTMLBodyElement:W.by,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.bU,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fM,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fO,CSSUnparsedValue:W.fP,DataTransferItemList:W.fS,HTMLDivElement:W.aD,XMLDocument:W.cs,Document:W.cs,DOMException:W.fT,DOMImplementation:W.dy,ClientRectList:W.dz,DOMRectList:W.dz,DOMRectReadOnly:W.dA,DOMStringList:W.fU,DOMTokenList:W.fV,Element:W.S,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cv,FileWriter:W.h5,HTMLFormElement:W.h9,Gamepad:W.aM,HTMLHeadElement:W.dE,History:W.dF,HTMLCollection:W.bZ,HTMLFormControlsCollection:W.bZ,HTMLOptionsCollection:W.bZ,HTMLDocument:W.dG,ImageData:W.bj,HTMLImageElement:W.cy,HTMLInputElement:W.cz,KeyboardEvent:W.b3,HTMLLabelElement:W.dM,Location:W.dP,HTMLAudioElement:W.cC,HTMLMediaElement:W.cC,MediaList:W.hH,MIDIInputMap:W.hI,MIDIOutputMap:W.hK,MimeType:W.aP,MimeTypeArray:W.hM,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.aR,PluginArray:W.i1,Range:W.e3,RTCStatsReport:W.ic,HTMLSelectElement:W.ig,SourceBuffer:W.aS,SourceBufferList:W.ir,SpeechGrammar:W.aT,SpeechGrammarList:W.is,SpeechRecognitionResult:W.aU,Storage:W.iv,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.eb,HTMLTableRowElement:W.ec,HTMLTableSectionElement:W.iC,HTMLTemplateElement:W.cN,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iK,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iO,TrackDefaultList:W.iP,CompositionEvent:W.bL,FocusEvent:W.bL,TextEvent:W.bL,UIEvent:W.bL,URL:W.jb,HTMLVideoElement:W.jt,VideoTrackList:W.ju,WheelEvent:W.bd,Window:W.d0,DOMWindow:W.d0,Attr:W.d1,CSSRuleList:W.jD,ClientRect:W.ew,DOMRect:W.ew,GamepadList:W.jS,NamedNodeMap:W.eO,MozNamedAttrMap:W.eO,SpeechRecognitionResultList:W.k5,StyleSheetList:W.k9,SVGLength:P.b4,SVGLengthList:P.hn,SVGNumber:P.b6,SVGNumberList:P.hX,SVGPointList:P.i3,SVGScriptElement:P.cJ,SVGStringList:P.iB,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.ba,SVGTransformList:P.iQ,AudioBuffer:P.fy,AudioParamMap:P.fz,AudioTrackList:P.fB,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hY,WebGLBuffer:P.dq,WebGLFramebuffer:P.dD,WebGLProgram:P.e2,WebGL2RenderingContext:P.c6,WebGLShader:P.e6,WebGLTexture:P.ee,WebGLUniformLocation:P.em,SQLResultSetRowList:P.it})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.dX.$nativeSuperclassTag="ArrayBufferView"
W.d7.$nativeSuperclassTag="EventTarget"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.mU,[])
else M.mU([])})})()
//# sourceMappingURL=test.dart.js.map
