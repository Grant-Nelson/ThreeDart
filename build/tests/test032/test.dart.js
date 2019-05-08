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
a[c]=function(){a[c]=function(){H.pW(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.m9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.m9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.m9(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lQ:function lQ(a){this.a=a},
kT:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
oj:function(){return new P.cX("No element")},
ok:function(){return new P.cX("Too few elements")},
ad:function ad(a){this.a=a},
h9:function h9(){},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
i3:function i3(a,b,c){this.a=a
this.b=b
this.$ti=c},
i4:function i4(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.$ti=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
da:function da(){},
et:function et(){},
o9:function(){throw H.c(P.F("Cannot modify unmodifiable Map"))},
ct:function(a){var u,t
u=H.L(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pI:function(a){return v.types[H.ap(a)]},
pN:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iJ},
o:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aK(a)
if(typeof u!=="string")throw H.c(H.av(a))
return u},
oL:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hN(u)
t=u[0]
s=u[1]
return new H.iz(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oI:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.t(H.av(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.L(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.an(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.I(r,p)|32)>s)return}return parseInt(a,b)},
oH:function(a){var u,t
if(typeof a!=="string")H.t(H.av(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.lF(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ca:function(a){return H.oy(a)+H.m7(H.bT(a),0,null)},
oy:function(a){var u,t,s,r,q,p,o,n,m
u=J.Y(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Q||!!u.$icf){p=C.C(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ct(r.length>1&&C.c.I(r,0)===36?C.c.au(r,1):r)},
oz:function(){if(!!self.location)return self.location.href
return},
mJ:function(a){var u,t,s,r,q
H.kY(a)
u=J.aA(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oJ:function(a){var u,t,s,r
u=H.f([],[P.p])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.av(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aY(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.av(r))}return H.mJ(u)},
mK:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.av(s))
if(s<0)throw H.c(H.av(s))
if(s>65535)return H.oJ(a)}return H.mJ(a)},
oK:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e9:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aY(u,10))>>>0,56320|u&1023)}}throw H.c(P.an(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oG:function(a){var u=H.c9(a).getFullYear()+0
return u},
oE:function(a){var u=H.c9(a).getMonth()+1
return u},
oA:function(a){var u=H.c9(a).getDate()+0
return u},
oB:function(a){var u=H.c9(a).getHours()+0
return u},
oD:function(a){var u=H.c9(a).getMinutes()+0
return u},
oF:function(a){var u=H.c9(a).getSeconds()+0
return u},
oC:function(a){var u=H.c9(a).getMilliseconds()+0
return u},
i:function(a){throw H.c(H.av(a))},
e:function(a,b){if(a==null)J.aA(a)
throw H.c(H.bC(a,b))},
bC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b8(!0,b,"index",null)
u=H.ap(J.aA(a))
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,"index",null,u)
return P.iy(b,"index",null)},
pC:function(a,b,c){if(a>c)return new P.cb(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end","Invalid value")
return new P.b8(!0,b,"end",null)},
av:function(a){return new P.b8(!0,a,null,null)},
cn:function(a){if(typeof a!=="number")throw H.c(H.av(a))
return a},
c:function(a){var u
if(a==null)a=new P.cS()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nF})
u.name=""}else u.toString=H.nF
return u},
nF:function(){return J.aK(this.dartException)},
t:function(a){throw H.c(a)},
G:function(a){throw H.c(P.c2(a))},
bm:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.f([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.jb(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
jc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mF:function(a,b){return new H.io(a,b==null?null:b.method)},
lR:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hR(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.lA(a)
if(a==null)return
if(a instanceof H.cE)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aY(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lR(H.o(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.mF(H.o(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.nI()
p=$.nJ()
o=$.nK()
n=$.nL()
m=$.nO()
l=$.nP()
k=$.nN()
$.nM()
j=$.nR()
i=$.nQ()
h=q.al(t)
if(h!=null)return u.$1(H.lR(H.L(t),h))
else{h=p.al(t)
if(h!=null){h.method="call"
return u.$1(H.lR(H.L(t),h))}else{h=o.al(t)
if(h==null){h=n.al(t)
if(h==null){h=m.al(t)
if(h==null){h=l.al(t)
if(h==null){h=k.al(t)
if(h==null){h=n.al(t)
if(h==null){h=j.al(t)
if(h==null){h=i.al(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.mF(H.L(t),h))}}return u.$1(new H.jn(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ee()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.b8(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ee()
return a},
bU:function(a){var u
if(a instanceof H.cE)return a.b
if(a==null)return new H.fa(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fa(a)},
pG:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
pM:function(a,b,c,d,e,f){H.d(a,"$ilN")
switch(H.ap(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.ap(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pM)
a.$identity=u
return u},
o7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Y(d).$ib){u.$reflectionInfo=d
s=H.oL(u).r}else s=d
r=e?Object.create(new H.iS().constructor.prototype):Object.create(new H.cw(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b9
if(typeof p!=="number")return p.n()
$.b9=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.mq(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pI,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.mo:H.lH
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.mq(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
o4:function(a,b,c,d){var u=H.lH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
mq:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o4(t,!r,u,b)
if(t===0){r=$.b9
if(typeof r!=="number")return r.n()
$.b9=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cx
if(q==null){q=H.fQ("self")
$.cx=q}return new Function(r+H.o(q)+";return "+p+"."+H.o(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b9
if(typeof r!=="number")return r.n()
$.b9=r+1
o+=r
r="return function("+o+"){return this."
q=$.cx
if(q==null){q=H.fQ("self")
$.cx=q}return new Function(r+H.o(q)+"."+H.o(u)+"("+o+");}")()},
o5:function(a,b,c,d){var u,t
u=H.lH
t=H.mo
switch(b?-1:a){case 0:throw H.c(H.oO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o6:function(a,b){var u,t,s,r,q,p,o,n
u=$.cx
if(u==null){u=H.fQ("self")
$.cx=u}t=$.mn
if(t==null){t=H.fQ("receiver")
$.mn=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.o5(r,!p,s,b)
if(r===1){u="return function(){return this."+H.o(u)+"."+H.o(s)+"(this."+H.o(t)+");"
t=$.b9
if(typeof t!=="number")return t.n()
$.b9=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.o(u)+"."+H.o(s)+"(this."+H.o(t)+", "+n+");"
t=$.b9
if(typeof t!=="number")return t.n()
$.b9=t+1
return new Function(u+t+"}")()},
m9:function(a,b,c,d,e,f,g){return H.o7(a,b,H.ap(c),d,!!e,!!f,g)},
lH:function(a){return a.a},
mo:function(a){return a.c},
fQ:function(a){var u,t,s,r,q
u=new H.cw("self","target","receiver","name")
t=J.hN(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b3(a,"String"))},
pD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"double"))},
pR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"num"))},
nt:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b3(a,"bool"))},
ap:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b3(a,"int"))},
md:function(a,b){throw H.c(H.b3(a,H.ct(H.L(b).substring(2))))},
pT:function(a,b){throw H.c(H.o3(a,H.ct(H.L(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.md(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.pT(a,b)},
qD:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.Y(a)[b])return a
H.md(a,b)},
kY:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.c(H.b3(a,"List<dynamic>"))},
nA:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.md(a,b)},
nu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ap(u)]
else return a.$S()}return},
fz:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.nu(J.Y(a))
if(u==null)return!1
return H.nh(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.m4)return a
$.m4=!0
try{if(H.fz(a,b))return a
u=H.ly(b)
t=H.b3(a,u)
throw H.c(t)}finally{$.m4=!1}},
cq:function(a,b){if(a!=null&&!H.m8(a,b))H.t(H.b3(a,H.ly(b)))
return a},
b3:function(a,b){return new H.jd("TypeError: "+P.hd(a)+": type '"+H.no(a)+"' is not a subtype of type '"+b+"'")},
o3:function(a,b){return new H.fR("CastError: "+P.hd(a)+": type '"+H.no(a)+"' is not a subtype of type '"+b+"'")},
no:function(a){var u,t
u=J.Y(a)
if(!!u.$icz){t=H.nu(u)
if(t!=null)return H.ly(t)
return"Closure"}return H.ca(a)},
pW:function(a){throw H.c(new P.h2(H.L(a)))},
oO:function(a){return new H.iG(a)},
nw:function(a){return v.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qC:function(a,b,c){return H.cs(a["$a"+H.o(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.L(c)
H.ap(d)
u=H.cs(a["$a"+H.o(c)],H.bT(b))
return u==null?null:u[d]},
aS:function(a,b,c){var u
H.L(b)
H.ap(c)
u=H.cs(a["$a"+H.o(b)],H.bT(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ap(b)
u=H.bT(a)
return u==null?null:u[b]},
ly:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.k(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ct(a[0].name)+H.m7(a,1,b)
if(typeof a=="function")return H.ct(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ap(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.o(b[t])}if('func' in a)return H.po(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
po:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.h]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.f([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.N)o+=" extends "+H.bR(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bR(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bR(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bR(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pF(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.L(u[g])
i=i+h+H.bR(d[c],b)+(" "+H.o(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
m7:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.aF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.j(0)+">"},
cs:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bA:function(a,b,c,d){var u,t
H.L(b)
H.kY(c)
H.L(d)
if(a==null)return!1
u=H.bT(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.nr(H.cs(t[d],u),null,c,null)},
k:function(a,b,c,d){H.L(b)
H.kY(c)
H.L(d)
if(a==null)return a
if(H.bA(a,b,c,d))return a
throw H.c(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ct(b.substring(2))+H.m7(c,0,null),v.mangledGlobalNames)))},
nr:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aR(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aR(a[t],b,c[t],d))return!1
return!0},
qA:function(a,b,c){return a.apply(b,H.cs(J.Y(b)["$a"+H.o(c)],H.bT(b)))},
nz:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="z"||a===-1||a===-2||H.nz(u)}return!1},
m8:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="z"||b===-1||b===-2||H.nz(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.m8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fz(a,b)}u=J.Y(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aR(u,null,b,null)},
y:function(a,b){if(a!=null&&!H.m8(a,b))throw H.c(H.b3(a,H.ly(b)))
return a},
aR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aR(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.nh(a,b,c,d)
if('func' in a)return c.name==="lN"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aR("type" in a?a.type:null,b,s,d)
else if(H.aR(a,b,s,d))return!0
else{if(!('$i'+"ab" in t.prototype))return!1
r=t.prototype["$a"+"ab"]
q=H.cs(r,u?a.slice(1):null)
return H.aR(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.nr(H.cs(m,u),b,p,d)},
nh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aR(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aR(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aR(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aR(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pQ(h,b,g,d)},
pQ:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aR(c[r],d,a[r],b))return!1}return!0},
qB:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
pO:function(a){var u,t,s,r,q,p
u=H.L($.ny.$1(a))
t=$.kR[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kX[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.L($.nq.$2(a,u))
if(u!=null){t=$.kR[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kX[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.lx(s)
$.kR[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kX[u]=s
return s}if(q==="-"){p=H.lx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.nC(a,s)
if(q==="*")throw H.c(P.jm(u))
if(v.leafTags[u]===true){p=H.lx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.nC(a,s)},
nC:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.mb(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lx:function(a){return J.mb(a,!1,null,!!a.$iJ)},
pP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lx(u)
else return J.mb(u,c,null,null)},
pK:function(){if(!0===$.ma)return
$.ma=!0
H.pL()},
pL:function(){var u,t,s,r,q,p,o,n
$.kR=Object.create(null)
$.kX=Object.create(null)
H.pJ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nD.$1(q)
if(p!=null){o=H.pP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pJ:function(){var u,t,s,r,q,p,o
u=C.V()
u=H.cm(C.S,H.cm(C.X,H.cm(C.B,H.cm(C.B,H.cm(C.W,H.cm(C.T,H.cm(C.U(C.C),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.ny=new H.kU(q)
$.nq=new H.kV(p)
$.nD=new H.kW(o)},
cm:function(a,b){return a(b)||b},
mx:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
pV:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nE:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fX:function fX(){},
fY:function fY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iz:function iz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
jb:function jb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
io:function io(a,b){this.a=a
this.b=b},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
lA:function lA(a){this.a=a},
fa:function fa(a){this.a=a
this.b=null},
cz:function cz(){},
iZ:function iZ(){},
iS:function iS(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a){this.a=a},
fR:function fR(a){this.a=a},
iG:function iG(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hQ:function hQ(a){this.a=a},
hU:function hU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hV:function hV(a,b){this.a=a
this.$ti=b},
hW:function hW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
hP:function hP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eU:function eU(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cj:function(a){return a},
ow:function(a){return new Int8Array(a)},
bp:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bC(b,a))},
pm:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pC(a,b,c))
return b},
cO:function cO(){},
bN:function bN(){},
e3:function e3(){},
cP:function cP(){},
e4:function e4(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
e5:function e5(){},
cQ:function cQ(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
pF:function(a){return J.mv(a?Object.keys(a):[],null)},
pS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fA:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ma==null){H.pK()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.jm("Return interceptor for "+H.o(t(a,u))))}r=a.constructor
q=r==null?null:r[$.mf()]
if(q!=null)return q
q=H.pO(a)
if(q!=null)return q
if(typeof a=="function")return C.Y
t=Object.getPrototypeOf(a)
if(t==null)return C.G
if(t===Object.prototype)return C.G
if(typeof r=="function"){Object.defineProperty(r,$.mf(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
ol:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lG(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.an(a,0,4294967295,"length",null))
return J.mv(new Array(a),b)},
mv:function(a,b){return J.hN(H.f(a,[b]))},
hN:function(a){H.kY(a)
a.fixed$length=Array
return a},
mw:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
om:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.I(a,b)
if(t!==32&&t!==13&&!J.mw(t))break;++b}return b},
on:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.a_(a,u)
if(t!==32&&t!==13&&!J.mw(t))break}return b},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.bM.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.hO.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.N)return a
return J.fA(a)},
pH:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.N)return a
return J.fA(a)},
cr:function(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.N)return a
return J.fA(a)},
kS:function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.N)return a
return J.fA(a)},
nv:function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.cf.prototype
return a},
dr:function(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.cf.prototype
return a},
bD:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.N)return a
return J.fA(a)},
fC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pH(a).n(a,b)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).B(a,b)},
mh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.nv(a).aS(a,b)},
mi:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nv(a).E(a,b)},
Z:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pN(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cr(a).i(a,b)},
lB:function(a,b,c){return J.kS(a).m(a,b,c)},
nZ:function(a,b){return J.dr(a).I(a,b)},
lC:function(a,b,c){return J.bD(a).ji(a,b,c)},
o_:function(a,b,c,d){return J.bD(a).kr(a,b,c,d)},
mj:function(a,b){return J.bD(a).Z(a,b)},
o0:function(a,b){return J.dr(a).a_(a,b)},
lD:function(a,b){return J.kS(a).K(a,b)},
o1:function(a,b,c,d){return J.bD(a).kT(a,b,c,d)},
lE:function(a,b){return J.kS(a).v(a,b)},
fD:function(a){return J.bD(a).gcU(a)},
du:function(a){return J.Y(a).gJ(a)},
cv:function(a){return J.kS(a).ga6(a)},
aA:function(a){return J.cr(a).gk(a)},
mk:function(a,b){return J.dr(a).d4(a,b)},
o2:function(a,b){return J.bD(a).lA(a,b)},
ml:function(a,b,c){return J.dr(a).u(a,b,c)},
aK:function(a){return J.Y(a).j(a)},
lF:function(a){return J.dr(a).fv(a)},
a:function a(){},
hO:function hO(){},
dR:function dR(){},
dS:function dS(){},
is:function is(){},
cf:function cf(){},
bs:function bs(){},
aU:function aU(a){this.$ti=a},
lP:function lP(a){this.$ti=a},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
c8:function c8(){},
dQ:function dQ(){},
dP:function dP(){},
bM:function bM(){}},P={
p1:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.pw()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.co(new P.jP(u),1)).observe(t,{childList:true})
return new P.jO(u,t,s)}else if(self.setImmediate!=null)return P.px()
return P.py()},
p2:function(a){self.scheduleImmediate(H.co(new P.jQ(H.j(a,{func:1,ret:-1})),0))},
p3:function(a){self.setImmediate(H.co(new P.jR(H.j(a,{func:1,ret:-1})),0))},
p4:function(a){P.lX(C.v,H.j(a,{func:1,ret:-1}))},
lX:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.e.a8(a.a,1000)
return P.p6(u<0?0:u,b)},
mV:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.bk]})
u=C.e.a8(a.a,1000)
return P.p7(u<0?0:u,b)},
p6:function(a,b){var u=new P.fi(!0)
u.hc(a,b)
return u},
p7:function(a,b){var u=new P.fi(!1)
u.hd(a,b)
return u},
aj:function(a){return new P.eC(new P.ff(new P.at(0,$.T,[a]),[a]),!1,[a])},
ai:function(a,b){H.j(a,{func:1,ret:-1,args:[P.p,,]})
H.d(b,"$ieC")
a.$2(0,null)
b.b=!0
return b.a.a},
au:function(a,b){P.pl(a,H.j(b,{func:1,ret:-1,args:[P.p,,]}))},
ah:function(a,b){H.d(b,"$ilL").az(0,a)},
ag:function(a,b){H.d(b,"$ilL").b2(H.al(a),H.bU(a))},
pl:function(a,b){var u,t,s,r
H.j(b,{func:1,ret:-1,args:[P.p,,]})
u=new P.kE(b)
t=new P.kF(b)
s=J.Y(a)
if(!!s.$iat)a.cM(u,t,null)
else if(!!s.$iab)a.c4(u,t,null)
else{r=new P.at(0,$.T,[null])
H.y(a,null)
r.a=4
r.c=a
r.cM(u,null,null)}},
ak:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.T.fo(new P.kP(u),P.z,P.p,null)},
n6:function(a,b){var u,t,s
b.a=1
try{a.c4(new P.k2(b),new P.k3(b),null)}catch(s){u=H.al(s)
t=H.bU(s)
P.me(new P.k4(b,u,t))}},
k1:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iat")
if(u>=4){t=b.bB()
b.a=a.a
b.c=a.c
P.ch(b,t)}else{t=H.d(b.c,"$ibo")
b.a=2
b.c=a
a.e6(t)}},
ch:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iaB")
t=t.b
p=q.a
o=q.b
t.toString
P.kM(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ch(u.a,b)}t=u.a
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
if(k){H.d(m,"$iaB")
t=t.b
p=m.a
o=m.b
t.toString
P.kM(null,null,t,p,o)
return}j=$.T
if(j!=l)$.T=l
else j=null
t=b.c
if(t===8)new P.k9(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.k8(s,b,m).$0()}else if((t&2)!==0)new P.k7(u,s,b).$0()
if(j!=null)$.T=j
t=s.b
if(!!J.Y(t).$iab){if(t.a>=4){i=H.d(o.c,"$ibo")
o.c=null
b=o.bC(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.k1(t,o)
return}}h=b.b
i=H.d(h.c,"$ibo")
h.c=null
b=h.bC(i)
t=s.a
p=s.b
if(!t){H.y(p,H.u(h,0))
h.a=4
h.c=p}else{H.d(p,"$iaB")
h.a=8
h.c=p}u.a=h
t=h}},
pr:function(a,b){if(H.fz(a,{func:1,args:[P.N,P.ae]}))return b.fo(a,null,P.N,P.ae)
if(H.fz(a,{func:1,args:[P.N]}))return H.j(a,{func:1,ret:null,args:[P.N]})
throw H.c(P.lG(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pq:function(){var u,t
for(;u=$.ck,u!=null;){$.dp=null
t=u.b
$.ck=t
if(t==null)$.dn=null
u.a.$0()}},
pv:function(){$.m5=!0
try{P.pq()}finally{$.dp=null
$.m5=!1
if($.ck!=null)$.mg().$1(P.ns())}},
nl:function(a){var u=new P.eD(H.j(a,{func:1,ret:-1}))
if($.ck==null){$.dn=u
$.ck=u
if(!$.m5)$.mg().$1(P.ns())}else{$.dn.b=u
$.dn=u}},
pu:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.ck
if(u==null){P.nl(a)
$.dp=$.dn
return}t=new P.eD(a)
s=$.dp
if(s==null){t.b=u
$.dp=t
$.ck=t}else{t.b=s.b
s.b=t
$.dp=t
if(t.b==null)$.dn=t}},
me:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.T
if(C.k===t){P.cl(null,null,C.k,a)
return}t.toString
P.cl(null,null,t,H.j(t.cR(a),u))},
q4:function(a,b){return new P.ko(H.k(a,"$icY",[b],"$acY"),[b])},
mU:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.T
if(t===C.k){t.toString
return P.lX(a,b)}return P.lX(a,H.j(t.cR(b),u))},
oT:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bk]}
H.j(b,u)
t=$.T
if(t===C.k){t.toString
return P.mV(a,b)}s=t.ep(b,P.bk)
$.T.toString
return P.mV(a,H.j(s,u))},
kM:function(a,b,c,d,e){var u={}
u.a=d
P.pu(new P.kN(u,e))},
ni:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
nj:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.y(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
ps:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
cl:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cR(d):c.kw(d,-1)
P.nl(d)},
jP:function jP(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
fi:function fi(a){this.a=a
this.b=null
this.c=0},
kt:function kt(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a,b,c){this.a=a
this.b=b
this.$ti=c},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kP:function kP(a){this.a=a},
ab:function ab(){},
eF:function eF(){},
jN:function jN(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b){this.a=a
this.$ti=b},
bo:function bo(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jZ:function jZ(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka:function ka(a){this.a=a},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a
this.b=null},
cY:function cY(){},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
iV:function iV(){},
ko:function ko(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bk:function bk(){},
aB:function aB(a,b){this.a=a
this.b=b},
kD:function kD(){},
kN:function kN(a,b){this.a=a
this.b=b},
kh:function kh(){},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
oo:function(a,b,c,d,e){return new H.aI([d,e])},
mz:function(a,b){return new H.aI([a,b])},
op:function(a){return H.pG(a,new H.aI([null,null]))},
oq:function(a,b,c,d){return new P.ke([d])},
n9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
n8:function(a,b,c){var u=new P.kf(a,b,[c])
u.c=a.e
return u},
oi:function(a,b,c){var u,t
if(P.m6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.f([],[P.h])
t=$.dt()
C.a.h(t,a)
try{P.pp(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.mS(b,H.nA(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
lO:function(a,b,c){var u,t,s
if(P.m6(a))return b+"..."+c
u=new P.aF(b)
t=$.dt()
C.a.h(t,a)
try{s=u
s.a=P.mS(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
m6:function(a){var u,t
for(u=0;t=$.dt(),u<t.length;++u)if(a===t[u])return!0
return!1},
pp:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.h],"$ab")
u=a.ga6(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.H())return
r=H.o(u.gW(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.H()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gW(u);++s
if(!u.H()){if(s<=4){C.a.h(b,H.o(o))
return}q=H.o(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gW(u);++s
for(;u.H();o=n,n=m){m=u.gW(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.o(o)
q=H.o(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mA:function(a,b,c){var u=P.oo(null,null,null,b,c)
a.v(0,new P.hX(u,b,c))
return u},
lS:function(a){var u,t
u={}
if(P.m6(a))return"{...}"
t=new P.aF("")
try{C.a.h($.dt(),a)
t.a+="{"
u.a=!0
J.lE(a,new P.i1(u,t))
t.a+="}"}finally{u=$.dt()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ke:function ke(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dc:function dc(a){this.a=a
this.c=this.b=null},
kf:function kf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(){},
w:function w(){},
i0:function i0(){},
i1:function i1(a,b){this.a=a
this.b=b},
ax:function ax(){},
ku:function ku(){},
i2:function i2(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
kl:function kl(){},
eT:function eT(){},
fo:function fo(){},
oX:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.oY(!1,b,c,d)
return},
oY:function(a,b,c,d){var u,t,s
u=$.nS()
if(u==null)return
t=0===c
if(t&&!0)return P.m_(u,b)
s=b.length
d=P.by(c,d,s,null,null,null)
if(t&&d===s)return P.m_(u,b)
return P.m_(u,b.subarray(c,d))},
m_:function(a,b){if(P.p_(b))return
return P.p0(a,b)},
p0:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
p_:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
oZ:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
pt:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.cr(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.c9()
if((s&127)!==s)return t-b}return c-b},
mm:function(a,b,c,d,e,f){if(C.e.bs(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
c0:function c0(){},
c3:function c3(){},
ha:function ha(){},
jv:function jv(a){this.a=a},
jx:function jx(){},
kC:function kC(a){this.b=this.a=0
this.c=a},
jw:function jw(a){this.a=a},
kA:function kA(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function(a,b,c){var u
H.j(b,{func:1,ret:P.p,args:[P.h]})
u=H.oI(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
pE:function(a,b){var u=H.oH(a)
if(u!=null)return u
throw H.c(P.a6("Invalid double",a,null))},
od:function(a){if(a instanceof H.cz)return a.j(0)
return"Instance of '"+H.ca(a)+"'"},
or:function(a,b,c,d){var u,t
H.y(b,d)
u=J.ol(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
os:function(a,b,c){var u,t,s
u=[c]
t=H.f([],u)
for(s=a.ga6(a);s.H();)C.a.h(t,H.y(s.gW(s),c))
if(b)return t
return H.k(J.hN(t),"$ib",u,"$ab")},
ef:function(a,b,c){var u,t
u=P.p
H.k(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaU",[u],"$aaU")
t=a.length
c=P.by(b,c,t,null,null,null)
return H.mK(b>0||c<t?C.a.fS(a,b,c):a)}if(!!J.Y(a).$icQ)return H.oK(a,b,P.by(b,c,a.length,null,null,null))
return P.oQ(a,b,c)},
oQ:function(a,b,c){var u,t,s,r
H.k(a,"$in",[P.p],"$an")
if(b<0)throw H.c(P.an(b,0,J.aA(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.an(c,b,J.aA(a),null,null))
t=J.cv(a)
for(s=0;s<b;++s)if(!t.H())throw H.c(P.an(b,0,s,null,null))
r=[]
if(u)for(;t.H();)r.push(t.gW(t))
else for(s=b;s<c;++s){if(!t.H())throw H.c(P.an(c,b,s,null,null))
r.push(t.gW(t))}return H.mK(r)},
lV:function(a,b,c){return new H.hP(a,H.mx(a,!1,!0,!1))},
mS:function(a,b,c){var u=J.cv(b)
if(!u.H())return a
if(c.length===0){do a+=H.o(u.gW(u))
while(u.H())}else{a+=H.o(u.gW(u))
for(;u.H();)a=a+c+H.o(u.gW(u))}return a},
ev:function(){var u=H.oz()
if(u!=null)return P.oW(u,0,null)
throw H.c(P.F("'Uri.base' is not supported"))},
kz:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.p],"$ab")
if(c===C.m){u=$.nX().b
if(typeof b!=="string")H.t(H.av(b))
u=u.test(b)}else u=!1
if(u)return b
H.y(b,H.aS(c,"c0",0))
t=c.gkR().cV(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e9(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
oa:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ob:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
mr:function(a,b,c,d,e,f){return new P.bq(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
hd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.od(a)},
dv:function(a){return new P.b8(!1,null,null,a)},
lG:function(a,b,c){return new P.b8(!0,a,b,c)},
iy:function(a,b,c){return new P.cb(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
by:function(a,b,c,d,e,f){if(typeof a!=="number")return H.i(a)
if(0>a||a>c)throw H.c(P.an(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.an(b,a,c,"end",f))
return b}return c},
a0:function(a,b,c,d,e){var u=H.ap(e==null?J.aA(b):e)
return new P.ho(b,u,!0,a,c,"Index out of range")},
F:function(a){return new P.jo(a)},
jm:function(a){return new P.jl(a)},
lW:function(a){return new P.cX(a)},
c2:function(a){return new P.fW(a)},
r:function(a){return new P.eM(a)},
a6:function(a,b,c){return new P.hk(a,b,c)},
ot:function(a,b,c,d){var u,t
H.j(b,{func:1,ret:d,args:[P.p]})
u=H.f([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
fB:function(a){H.pS(a)},
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(t===0)return P.mX(b>0||c<c?C.c.u(a,b,c):a,5,null).gfB()
else if(t===32)return P.mX(C.c.u(a,u,c),0,null).gfB()}s=new Array(8)
s.fixed$length=Array
r=H.f(s,[P.p])
C.a.m(r,0,0)
s=b-1
C.a.m(r,1,s)
C.a.m(r,2,s)
C.a.m(r,7,s)
C.a.m(r,3,b)
C.a.m(r,4,b)
C.a.m(r,5,c)
C.a.m(r,6,c)
if(P.nk(a,b,c,0,r)>=14)C.a.m(r,7,c)
q=r[1]
if(typeof q!=="number")return q.aS()
if(q>=b)if(P.nk(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.E()
if(typeof m!=="number")return H.i(m)
if(l<m)m=l
if(typeof n!=="number")return n.E()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.E()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.E()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ai(a,"..",n)))i=m>n+2&&C.c.ai(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ai(a,"file",b)){if(p<=b){if(!C.c.ai(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.c.b6(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ai(a,"http",b)){if(s&&o+3===n&&C.c.ai(a,"80",o+1))if(b===0&&!0){a=C.c.b6(a,o,n,"")
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
else if(q===u&&C.c.ai(a,"https",b)){if(s&&o+4===n&&C.c.ai(a,"443",o+1))if(b===0&&!0){a=C.c.b6(a,o,n,"")
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
l-=b}return new P.km(a,q,p,o,n,m,l,j)}return P.p8(a,b,c,q,p,o,n,m,l,j)},
mZ:function(a,b){var u=P.h
return C.a.kX(H.f(a.split("&"),[u]),P.mz(u,u),new P.jt(b),[P.A,P.h,P.h])},
oV:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jq(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a_(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.bV(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.dn()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.bV(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.dn()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
mY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jr(a)
t=new P.js(u,a)
if(a.length<2)u.$1("address is too short")
s=H.f([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a_(a,r)
if(n===58){if(r===b){++r
if(C.c.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaP(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oV(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aY(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
p8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.pf(a,b,d)
else{if(d===b)P.dl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pg(a,u,e-1):""
s=P.pc(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.i(g)
q=r<g?P.pe(P.bV(C.c.u(a,r,g),new P.kv(a,f),null),j):null}else{t=""
s=null
q=null}p=P.pd(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.E()
o=h<i?P.m2(a,h+1,i,null):null
return new P.ci(j,t,s,q,p,o,i<c?P.pb(a,i+1,c):null)},
na:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dl:function(a,b,c){throw H.c(P.a6(c,a,b))},
pe:function(a,b){if(a!=null&&a===P.na(b))return
return a},
pc:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.c.a_(a,u)!==93)P.dl(a,b,"Missing end `]` to match `[` in host")
P.mY(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.i(c)
t=b
for(;t<c;++t)if(C.c.a_(a,t)===58){P.mY(a,b,c)
return"["+a+"]"}return P.pi(a,b,c)},
pi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a_(a,u)
if(q===37){p=P.ng(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aF("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.E,o)
o=(C.E[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aF("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.q,o)
o=(C.q[o]&1<<(q&15))!==0}else o=!1
if(o)P.dl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aF("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.nb(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
pf:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.nd(C.c.I(a,b)))P.dl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.t,r)
r=(C.t[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.p9(t?a.toLowerCase():a)},
p9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pg:function(a,b,c){return P.dm(a,b,c,C.a_,!1)},
pd:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dm(a,b,c,C.F,!0):C.n.m0(d,new P.kw(),P.h).G(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ah(r,"/"))r="/"+r
return P.ph(r,e,f)},
ph:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ah(a,"/"))return P.pj(a,!u||c)
return P.pk(a)},
m2:function(a,b,c,d){var u,t
u={}
H.k(d,"$iA",[P.h,null],"$aA")
if(a!=null){if(d!=null)throw H.c(P.dv("Both query and queryParameters specified"))
return P.dm(a,b,c,C.r,!0)}if(d==null)return
t=new P.aF("")
u.a=""
d.v(0,new P.kx(new P.ky(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
pb:function(a,b,c){return P.dm(a,b,c,C.r,!0)},
ng:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a_(a,b+1)
s=C.c.a_(a,u)
r=H.kT(t)
q=H.kT(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aY(p,4)
if(u>=8)return H.e(C.u,u)
u=(C.u[u]&1<<(p&15))!==0}else u=!1
if(u)return H.e9(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
nb:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.f(u,[P.p])
C.a.m(t,0,37)
C.a.m(t,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.m(t,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.f(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.e.jv(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.c.I("0123456789ABCDEF",p>>>4))
C.a.m(t,q+2,C.c.I("0123456789ABCDEF",p&15))
q+=3}}return P.ef(t,0,null)},
dm:function(a,b,c,d,e){var u=P.nf(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.c.u(a,b,c):u},
nf:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.E()
if(typeof c!=="number")return H.i(c)
if(!(t<c))break
c$0:{q=C.c.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.ng(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dl(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.nb(q)}}if(r==null)r=new P.aF("")
r.a+=C.c.u(a,s,t)
r.a+=H.o(o)
if(typeof n!=="number")return H.i(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.E()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
ne:function(a){if(C.c.ah(a,"."))return!0
return C.c.d4(a,"/.")!==-1},
pk:function(a){var u,t,s,r,q,p,o
if(!P.ne(a))return a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a_(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.G(u,"/")},
pj:function(a,b){var u,t,s,r,q,p
if(!P.ne(a))return!b?P.nc(a):a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaP(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaP(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.m(u,0,P.nc(u[0]))}return C.a.G(u,"/")},
nc:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.nd(J.nZ(a,0)))for(t=1;t<u;++t){s=C.c.I(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.au(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.t,r)
r=(C.t[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
pa:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dv("Invalid URL encoding"))}}return u},
m3:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.ad(C.c.u(a,b,c))}else{q=H.f([],[P.p])
for(r=a.length,t=b;t<c;++t){s=C.c.I(a,t)
if(s>127)throw H.c(P.dv("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dv("Truncated URI"))
C.a.h(q,P.pa(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.p],"$ab")
return new P.jw(!1).cV(q)},
nd:function(a){var u=a|32
return 97<=u&&u<=122},
mX:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.f([b-1],[P.p])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a6("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a6("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaP(u)
if(q!==44||s!==o+7||!C.c.ai(a,"base64",o+1))throw H.c(P.a6("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.K.la(0,a,n,t)
else{m=P.nf(a,n,t,C.r,!0)
if(m!=null)a=C.c.b6(a,n,t,m)}return new P.jp(a,u,c)},
pn:function(){var u,t,s,r,q
u=P.ot(22,new P.kH(),!0,P.R)
t=new P.kG(u)
s=new P.kI()
r=new P.kJ()
q=H.d(t.$2(0,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iR")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iR")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iR"),"]",5)
q=H.d(t.$2(9,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iR"),"az",21)
q=H.d(t.$2(21,245),"$iR")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
nk:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.nY()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
K:function K(){},
aC:function aC(a,b){this.a=a
this.b=b},
E:function E(){},
bq:function bq(a){this.a=a},
h7:function h7(){},
h8:function h8(){},
bJ:function bJ(){},
cS:function cS(){},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ho:function ho(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jo:function jo(a){this.a=a},
jl:function jl(a){this.a=a},
cX:function cX(a){this.a=a},
fW:function fW(a){this.a=a},
ir:function ir(){},
ee:function ee(){},
h2:function h2(a){this.a=a},
eM:function eM(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
n:function n(){},
aN:function aN(){},
b:function b(){},
A:function A(){},
z:function z(){},
a9:function a9(){},
N:function N(){},
dY:function dY(){},
ae:function ae(){},
h:function h(){},
aF:function aF(a){this.a=a},
jt:function jt(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
kv:function kv(a,b){this.a=a
this.b=b},
kw:function kw(){},
ky:function ky(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(){},
kG:function kG(a){this.a=a},
kI:function kI(){},
kJ:function kJ(){},
km:function km(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jV:function jV(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
pB:function(a){var u,t
u=J.Y(a)
if(!!u.$ibr){t=u.gey(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fn(a.data,a.height,a.width)},
pA:function(a){if(a instanceof P.fn)return{data:a.a,height:a.b,width:a.c}
return a},
bB:function(a){var u,t,s,r,q
if(a==null)return
u=P.mz(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.L(t[r])
u.m(0,q,a[q])}return u},
pz:function(a,b){var u={}
a.v(0,new P.kQ(u))
return u},
kp:function kp(){},
kq:function kq(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
kQ:function kQ(a){this.a=a},
fe:function fe(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(){},
kd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kg:function kg(){},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
hT:function hT(){},
bh:function bh(){},
ip:function ip(){},
iv:function iv(){},
iY:function iY(){},
v:function v(){},
bl:function bl(){},
ja:function ja(){},
eR:function eR(){},
eS:function eS(){},
f1:function f1(){},
f2:function f2(){},
fc:function fc(){},
fd:function fd(){},
fl:function fl(){},
fm:function fm(){},
R:function R(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
bX:function bX(){},
iq:function iq(){},
eE:function eE(){},
dy:function dy(){},
dK:function dK(){},
ea:function ea(){},
cd:function cd(){},
ec:function ec(){},
ej:function ej(){},
es:function es(){},
iR:function iR(){},
f8:function f8(){},
f9:function f9(){}},W={
lI:function(a,b){var u=document.createElement("canvas")
return u},
oc:function(a){H.d(a,"$il")
return"wheel"},
mt:function(a,b,c){return W.of(a,null,null,b,null,null,null,c).ft(new W.hm(),P.h)},
of:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=W.bc
t=new P.at(0,$.T,[u])
s=new P.jN(t,[u])
r=new XMLHttpRequest()
C.P.lj(r,"GET",a,!0)
u=W.bi
q={func:1,ret:-1,args:[u]}
W.a8(r,"load",H.j(new W.hn(r,s),q),!1,u)
W.a8(r,"error",H.j(s.gew(),q),!1,u)
r.send()
return t},
mu:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$icJ")
try{u.type=a}catch(s){H.al(s)}return u},
kc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n7:function(a,b,c,d){var u,t
u=W.kc(W.kc(W.kc(W.kc(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.np(new W.jY(c),W.q)
u=new W.jX(a,b,u,!1,[e])
u.jM()
return u},
np:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.k)return a
return u.ep(a,b)},
x:function x(){},
fE:function fE(){},
fG:function fG(){},
fH:function fH(){},
bY:function bY(){},
dx:function dx(){},
bZ:function bZ(){},
c_:function c_(){},
bI:function bI(){},
cA:function cA(){},
fZ:function fZ(){},
V:function V(){},
cB:function cB(){},
h_:function h_(){},
ba:function ba(){},
bb:function bb(){},
h0:function h0(){},
h1:function h1(){},
h3:function h3(){},
cC:function cC(){},
cD:function cD(){},
h4:function h4(){},
dG:function dG(){},
dH:function dH(){},
h5:function h5(){},
h6:function h6(){},
jT:function jT(a,b){this.a=a
this.b=b},
a5:function a5(){},
q:function q(){},
l:function l(){},
aM:function aM(){},
cF:function cF(){},
hf:function hf(){},
hj:function hj(){},
aT:function aT(){},
dL:function dL(){},
c5:function c5(){},
dM:function dM(){},
bc:function bc(){},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
cH:function cH(){},
br:function br(){},
cI:function cI(){},
cJ:function cJ(){},
cy:function cy(){},
bd:function bd(){},
dU:function dU(){},
hZ:function hZ(){},
cM:function cM(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
id:function id(){},
ie:function ie(a){this.a=a},
aW:function aW(){},
ig:function ig(){},
aq:function aq(){},
jS:function jS(a){this.a=a},
I:function I(){},
cR:function cR(){},
aX:function aX(){},
it:function it(){},
bi:function bi(){},
iE:function iE(){},
iF:function iF(a){this.a=a},
iH:function iH(){},
aY:function aY(){},
iP:function iP(){},
aZ:function aZ(){},
iQ:function iQ(){},
b_:function b_(){},
iT:function iT(){},
iU:function iU(a){this.a=a},
aO:function aO(){},
bj:function bj(){},
eg:function eg(){},
eh:function eh(){},
b0:function b0(){},
aP:function aP(){},
j_:function j_(){},
j0:function j0(){},
j5:function j5(){},
b1:function b1(){},
b2:function b2(){},
j8:function j8(){},
j9:function j9(){},
bQ:function bQ(){},
ju:function ju(){},
jG:function jG(){},
jH:function jH(){},
bn:function bn(){},
db:function db(){},
jU:function jU(){},
eH:function eH(){},
kb:function kb(){},
eZ:function eZ(){},
kn:function kn(){},
kr:function kr(){},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
m1:function m1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jX:function jX(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jY:function jY(a){this.a=a},
C:function C(){},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
dh:function dh(){},
di:function di(){},
f6:function f6(){},
f7:function f7(){},
fb:function fb(){},
fg:function fg(){},
fh:function fh(){},
dj:function dj(){},
dk:function dk(){},
fj:function fj(){},
fk:function fk(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){}},O={
lJ:function(a){var u=new O.aa([a])
u.cf(a)
return u},
aa:function aa(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cL:function cL(){this.b=this.a=null},
nx:function(a){var u=C.c.l4(a,"/")
if(u<=0)return a
return C.c.u(a,0,u)},
nn:function(a){var u,t,s
u=P.lV("([^\\s]+)",!0,!1)
$.nm=u
t=u.kW(a)
if(t==null)return H.f([],[P.h])
u=t.b
if(1>=u.length)return H.e(u,1)
s=u[1]
return H.f([s,C.c.fv(C.c.au(a,s.length))],[P.h])},
kO:function(a){var u,t,s
u=H.f([],[P.h])
t=P.lV("([^\\s]+)",!0,!1)
$.nm=t
t=new H.jK(t,a,0)
for(;t.H();){s=t.d.b
if(1>=s.length)return H.e(s,1)
C.a.h(u,s[1])}return u},
bz:function(a){var u,t,s,r
u=O.kO(a)
t=H.f([],[P.E])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,P.pE(u[r],null))}return t},
e2:function(a,b,c){return O.ov(a,b,!1)},
ov:function(a,b,c){var u=0,t=P.aj([P.A,P.h,O.aV]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$e2=P.ak(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.nx(a)
k=new O.kK(b)
k.scA(new H.aI([P.h,O.aV]))
k.c=null
n=k
u=7
return P.au(W.mt(a,null,null),$async$e2)
case 7:m=e
u=8
return P.au(n.as(m,o,!1),$async$e2)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.al(h)
P.fB(a+": "+H.o(l))
j=P.r(a+": "+H.o(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$e2,t)},
e6:function(a,b,c,d,e){return O.ox(a,b,c,d,!1)},
ox:function(a,b,c,d,e){var u=0,t=P.aj(E.a3),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g
var $async$e6=P.ak(function(f,a0){if(f===1){q=a0
u=r}while(true)switch(u){case 0:r=4
o=O.nx(a)
k=new O.kL(b)
k.sj9(H.f([],[O.dq]))
k.sjD(H.f([],[V.am]))
k.sig(H.f([],[V.a4]))
k.scA(new H.aI([P.h,O.aV]))
k.f=d
k.r=""
j=O.mB()
i=j.r
i.sV(0,new V.a1(0.35,0.35,0.35))
i=j.x
i.sV(0,new V.a1(0.65,0.65,0.65))
k.x=j
k.y=null
k.z=null
k.Q=E.hb(null,!0,null,"",null,null)
k.bF()
n=k
u=7
return P.au(W.mt(a,null,null),$async$e6)
case 7:m=a0
u=8
return P.au(n.as(m,o,!1),$async$e6)
case 8:j=n.gkS()
s=j
u=1
break
r=2
u=6
break
case 4:r=3
g=q
l=H.al(g)
P.fB(a+": "+H.o(l))
j=P.r(a+": "+H.o(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$e6,t)},
kK:function kK(a){this.a=a
this.c=this.b=null},
dq:function dq(a){this.a=a
this.b=null},
kL:function kL(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mB:function(){var u,t,s
u=new O.aV()
u.shq(O.lJ(V.aD))
u.e.bu(u.gio(),u.giq())
t=new O.bf(u,"emission")
t.c=C.d
t.f=new V.a1(0,0,0)
u.f=t
t=new O.bf(u,"ambient")
t.c=C.d
t.f=new V.a1(0,0,0)
u.r=t
t=new O.bf(u,"diffuse")
t.c=C.d
t.f=new V.a1(0,0,0)
u.x=t
t=new O.bf(u,"invDiffuse")
t.c=C.d
t.f=new V.a1(0,0,0)
u.y=t
t=new O.i9(u,"specular")
t.c=C.d
t.f=new V.a1(0,0,0)
t.ch=100
u.z=t
t=new O.i6(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.bf(u,"reflect")
t.c=C.d
t.f=new V.a1(0,0,0)
u.cx=t
t=new O.i8(u,"refract")
t.c=C.d
t.f=new V.a1(0,0,0)
t.ch=1
u.cy=t
t=new O.i5(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dV()
t.cf(D.ac)
t.shF(H.f([],[D.dF]))
t.sj8(H.f([],[D.e8]))
t.sjw(H.f([],[D.ed]))
t.sjR(H.f([],[D.el]))
t.sjS(H.f([],[D.em]))
t.sjT(H.f([],[D.en]))
t.Q=null
t.ch=null
t.dq(t.gil(),t.giX(),t.gj0())
u.dx=t
s=t.Q
if(s==null){s=D.W()
t.Q=s
t=s}else t=s
t.h(0,u.gjk())
t=u.dx
s=t.ch
if(s==null){s=D.W()
t.ch=s
t=s}else t=s
t.h(0,u.gbw())
u.dy=null
return u},
dN:function dN(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
hq:function hq(a){this.a=a},
hp:function hp(a){this.a=a},
aV:function aV(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cK:function cK(){},
i6:function i6(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bf:function bf(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i8:function i8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i9:function i9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bP:function bP(){}},E={
hb:function(a,b,c,d,e,f){var u=new E.a3()
u.a=d
u.b=!0
u.sh2(0,O.lJ(E.a3))
u.y.bu(u.glb(),u.gle())
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
u.sdr(0,e)
u.sb8(f)
u.sbj(c)
return u},
oN:function(a,b){var u=new E.iA(a,b)
u.fY(a,b)
return u},
oS:function(a,b,c,d,e){var u,t,s,r
u=J.Y(a)
if(!!u.$ibZ)return E.mT(a,!0,!0,!0,!1)
t=W.lI(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcU(a).h(0,t)
r=E.mT(t,!0,!0,!0,!1)
r.a=a
return r},
mT:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eo()
t=H.d(C.o.dl(a,"webgl2",P.op(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icd")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oN(t,a)
s=new T.j2(t)
s.b=H.ap((t&&C.b).dm(t,3379))
s.c=H.ap(C.b.dm(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ew(a)
r=new X.hS()
r.c=new X.aL(!1,!1,!1)
r.sja(P.oq(null,null,null,P.p))
s.b=r
r=new X.ih(s)
r.f=0
r.r=V.bO()
r.x=V.bO()
r.Q=1
r.ch=1
s.c=r
r=new X.i_(s)
r.r=0
r.x=V.bO()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.j7(s)
r.e=0
r.f=V.bO()
r.r=V.bO()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shH(H.f([],[[P.cZ,P.N]]))
r=s.z
q=document
p=W.aq
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a8(q,"contextmenu",H.j(s.giy(),o),!1,p))
r=s.z
n=W.q
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a8(a,"focus",H.j(s.giE(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a8(a,"blur",H.j(s.gis(),m),!1,n))
r=s.z
l=W.bd
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a8(q,"keyup",H.j(s.giI(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a8(q,"keydown",H.j(s.giG(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a8(a,"mousedown",H.j(s.giM(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a8(a,"mouseup",H.j(s.giQ(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a8(a,"mousemove",H.j(s.giO(),o),!1,p))
l=s.z
k=W.bn;(l&&C.a).h(l,W.a8(a,H.L(W.oc(a)),H.j(s.giS(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a8(q,"mousemove",H.j(s.giA(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a8(q,"mouseup",H.j(s.giC(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a8(q,"pointerlockchange",H.j(s.giU(),m),!1,n))
n=s.z
m=W.b2
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a8(a,"touchstart",H.j(s.gj6(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a8(a,"touchend",H.j(s.gj2(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a8(a,"touchmove",H.j(s.gj4(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aC(Date.now(),!1)
u.cy=0
u.ea()
return u},
fP:function fP(){},
a3:function a3(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j4:function j4(a){this.a=a}},Z={
m0:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
C.b.ay(a,b,u)
C.b.er(a,b,new Int16Array(H.cj(c)),35044)
C.b.ay(a,b,null)
return new Z.eA(b,u)},
aQ:function(a){return new Z.b4(a)},
eA:function eA(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eB:function eB(a){this.a=a},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dA:function dA(){this.a=null},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a}},D={
W:function(){var u=new D.bK()
u.sao(null)
u.sbd(null)
u.c=null
u.d=0
return u},
fS:function fS(){},
bK:function bK(){var _=this
_.d=_.c=_.b=_.a=null},
he:function he(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
c6:function c6(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c7:function c7(a,b,c,d){var _=this
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
dF:function dF(){},
ac:function ac(){},
dV:function dV(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
ed:function ed(){},
el:function el(){},
em:function em(){},
en:function en(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dT:function dT(a,b){this.a=a
this.b=b},hS:function hS(){var _=this
_.d=_.c=_.b=_.a=null},dX:function dX(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},i_:function i_(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},bu:function bu(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ih:function ih(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cN:function cN(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},iu:function iu(){},eq:function eq(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},j7:function j7(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ew:function ew(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
oe:function(a,b,c,d,e,f,g){var u,t
u=new X.hl()
t=new V.S(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.mN
if(t==null){t=V.mM(0,0,1,1)
$.mN=t}u.r=t
return u},
dC:function dC(){},
hl:function hl(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){}},V={
lK:function(a){var u,t,s
H.k(a,"$ib",[P.E],"$ab")
u=a.length
if(0>=u)return H.e(a,0)
t=a[0]
if(1>=u)return H.e(a,1)
s=a[1]
if(2>=u)return H.e(a,2)
u=a[2]
if(typeof t!=="number")return t.E()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.E()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.E()
if(u<0)u=0
else if(u>1)u=1
return new V.a1(t,s,u)},
o8:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.j.c_(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.a1(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.a1(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.a1(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.a1(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.a1(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.a1(p,o,n)}},
pX:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bs(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.am("null",c)
return C.c.am(C.j.fu(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cp:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.E],"$ab")
u=H.f([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.m(u,p,C.c.am(u[p],s))}return u},
mc:function(a,b){return C.j.lK(Math.pow(b,C.R.c_(Math.log(H.cn(a))/Math.log(b))))},
e1:function(){var u=$.mE
if(u==null){u=V.bg(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.mE=u}return u},
bg:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mD:function(a,b,c){return V.bg(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mC:function(a,b,c,d){return V.bg(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bO:function(){var u=$.mI
if(u==null){u=new V.am(0,0)
$.mI=u}return u},
lU:function(){var u=$.cT
if(u==null){u=new V.aE(0,0,0)
$.cT=u}return u},
mM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)},
mO:function(a,b,c,d,e,f){return new V.cc(a,b,c,d,e,f)},
mP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.cn(u),H.cn(t))
r=a.b
q=b.b
p=Math.min(H.cn(r),H.cn(q))
o=a.c
n=b.c
m=Math.min(H.cn(o),H.cn(n))
l=a.d
if(typeof u!=="number")return u.n()
k=b.d
if(typeof t!=="number")return t.n()
j=Math.max(u+l,t+k)
k=a.e
if(typeof r!=="number")return r.n()
t=b.e
if(typeof q!=="number")return q.n()
i=Math.max(r+k,q+t)
t=a.f
if(typeof o!=="number")return o.n()
q=b.f
if(typeof n!=="number")return n.n()
return new V.cc(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
a7:function(){var u=$.n3
if(u==null){u=new V.a4(0,0,0)
$.n3=u}return u},
n5:function(){var u=$.n1
if(u==null){u=new V.a4(1,0,0)
$.n1=u}return u},
n4:function(){var u=$.n0
if(u==null){u=new V.a4(0,0,-1)
$.n0=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a){this.a=a},
e0:function e0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aD:function aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
am:function am(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
X:function X(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function(a){var u=new V.iI()
u.fZ(a)
return u},
fF:function fF(){},
bt:function bt(){},
dZ:function dZ(){},
bw:function bw(){this.a=null},
iI:function iI(){this.a=null},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b){this.a=a
this.b=b
this.c=null},
j6:function j6(){this.c=this.b=this.a=null},
d1:function d1(a){this.b=a
this.a=this.c=null},
pU:function(a){P.oT(C.O,new V.lz(a))},
mL:function(a,b){var u,t
u=new V.iw(a,!0)
t=C.w.ca(document,a)
u.c=t
if(t==null)H.t("Failed to find "+a+" for RadioGroup")
return u},
oP:function(a,b){var u=new V.iM()
u.h_(a,!0)
return u},
fT:function fT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lz:function lz(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b
this.c=null},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(){this.b=this.a=null},
iO:function iO(a){this.a=a},
iN:function iN(a){this.a=a}},U={
lM:function(){var u=new U.fV()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
fV:function fV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cG:function cG(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ar:function ar(){},
ex:function ex(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ez:function ez(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dI:function dI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ou:function(a,b){var u,t
u=a.aq
t=new A.e_(b,u)
t.dw(b,u)
t.fX(a,b)
return t},
lY:function(a,b,c,d,e){var u=new A.je(a,b,c,e)
u.f=d
u.sjU(P.or(d,0,!1,P.p))
return u},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
dO:function dO(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e_:function e_(a,b){var _=this
_.bM=_.eD=_.bL=_.aq=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eT=_.cY=_.eS=_.bZ=_.eR=_.eQ=_.bY=_.bX=_.eP=_.eO=_.bW=_.bV=_.bU=_.eN=_.eM=_.bT=_.eL=_.eK=_.bS=_.eJ=_.eI=_.bR=_.bQ=_.eH=_.eG=_.bP=_.bO=_.eF=_.eE=_.bN=null
_.d2=_.eX=_.d1=_.eW=_.d0=_.eV=_.d_=_.eU=_.cZ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i7:function i7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aq=b4
_.bL=b5},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
d5:function d5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d8:function d8(a,b,c,d,e,f,g,h,i,j){var _=this
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
d6:function d6(a,b,c,d,e,f,g,h,i,j){var _=this
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
d9:function d9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cV:function cV(){},
c1:function c1(a,b){this.a=a
this.b=b},
er:function er(){},
jj:function jj(a){this.a=a},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a,b,c,d){var _=this
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
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ms:function(a,b,c){var u,t
u=new F.M()
t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
my:function(a,b){var u,t
u=new F.aJ()
if(a==null)H.t(P.r("May not create a line with a null start vertex."))
if(b==null)H.t(P.r("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a5()
return u},
lT:function(a){var u=new F.bx()
if(a.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a5()
return u},
as:function(){var u,t
u=new F.ao()
t=new F.jy(u)
t.b=!1
t.sjV(H.f([],[F.H]))
u.a=t
t=new F.iL(u)
t.scD(H.f([],[F.bx]))
u.b=t
t=new F.iK(u)
t.si3(H.f([],[F.aJ]))
u.c=t
t=new F.iJ(u)
t.shR(H.f([],[F.M]))
u.d=t
u.e=null
return u},
cg:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.H()
t=new F.jD(u)
t.scD(H.f([],[F.bx]))
u.b=t
t=new F.jC(u)
s=[F.aJ]
t.si4(H.f([],s))
t.si5(H.f([],s))
u.c=t
t=new F.jz(u)
s=[F.M]
t.shS(H.f([],s))
t.shT(H.f([],s))
t.shU(H.f([],s))
u.d=t
h=$.nT()
u.e=0
t=$.b7()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b6().a)!==0?e:null
u.x=(s&$.b5().a)!==0?b:null
u.y=(s&$.bF().a)!==0?f:null
u.z=(s&$.bG().a)!==0?g:null
u.Q=(s&$.nU().a)!==0?c:null
u.ch=(s&$.cu().a)!==0?i:0
u.cx=(s&$.bE().a)!==0?a:null
return u},
M:function M(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aJ:function aJ(){this.b=this.a=null},
bx:function bx(){this.a=null},
ao:function ao(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ce:function ce(){},
iJ:function iJ(a){this.a=a
this.b=null},
iK:function iK(a){this.a=a
this.b=null},
iL:function iL(a){this.a=a
this.b=null},
H:function H(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jF:function jF(a){this.a=a},
jE:function jE(a){this.a=a},
jy:function jy(a){this.a=a
this.c=this.b=null},
jz:function jz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a){this.a=a
this.c=this.b=null},
jD:function jD(a){this.a=a
this.b=null}},T={d_:function d_(){},ek:function ek(){},j1:function j1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},j2:function j2(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
nB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=V.oP("Test 032",!0)
s=W.lI(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.Z(t.a,s)
r=[P.h]
t.em(H.f(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],r))
t.kq(H.f(["controls","shapes","scalars"],r))
t.em(H.f(["\xab[Back to Tests|../]"],r))
r=document
q=C.w.ca(r,"testCanvas")
if(q==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
p=E.oS(q,!0,!0,!0,!1)
u.a=!0
o=E.hb(null,!0,null,"",null,null)
t=new U.cG()
t.cf(U.ar)
t.bu(t.gij(),t.giZ())
t.e=null
t.f=V.e1()
t.r=0
n=p.r
m=new U.ey()
l=U.lM()
l.sdk(0,!0)
l.sd9(6.283185307179586)
l.sdc(0)
l.saa(0,0)
l.sda(100)
l.sY(0)
l.scW(0.5)
m.b=l
k=m.gaW()
l.gC().h(0,k)
l=U.lM()
l.sdk(0,!0)
l.sd9(6.283185307179586)
l.sdc(0)
l.saa(0,0)
l.sda(100)
l.sY(0)
l.scW(0.5)
m.c=l
l.gC().h(0,k)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
j=new X.aL(!1,!1,!1)
i=m.d
m.d=j
l=[X.aL]
k=new D.D("modifiers",i,j,m,l)
k.b=!0
m.T(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.D("invertX",k,!1,m,[P.K])
k.b=!0
m.T(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.D("invertY",k,!0,m,[P.K])
k.b=!0
m.T(k)}m.bf(n)
t.h(0,m)
n=p.r
m=new U.ex()
k=U.lM()
k.sdk(0,!0)
k.sd9(6.283185307179586)
k.sdc(0)
k.saa(0,0)
k.sda(100)
k.sY(0)
k.scW(0.2)
m.b=k
k.gC().h(0,m.gaW())
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
j=new X.aL(!0,!1,!1)
i=m.c
m.c=j
k=new D.D("modifiers",i,j,m,l)
k.b=!0
m.T(k)
m.bf(n)
t.h(0,m)
n=p.r
m=new U.ez()
m.c=0.01
m.d=0
m.e=0
j=new X.aL(!1,!1,!1)
m.b=j
l=new D.D("modifiers",null,j,m,l)
l.b=!0
m.T(l)
m.bf(n)
t.h(0,m)
o.sbj(t)
h=new O.dN()
h.b=V.n4()
h.c=new V.S(0.2,0.3,0.4,1)
h.d=new V.S(0.1,0.2,0.3,1)
h.e=new V.S(0.7,0.7,0.7,1)
h.f=new V.S(0.3,0.3,0.3,1)
h.r=new V.S(0.5,0.5,0.5,1)
h.x=new V.S(0.5,0.5,0.5,1)
h.y=new V.S(1,1,1,1)
h.z=new V.S(0.8,0.8,0.8,1)
h.Q=!1
h.ch=!1
h.cx=!1
h.cy=!1
h.db=!1
h.dx=!1
h.dy=!1
h.fr=!1
h.fx=!1
h.fy=!1
h.go=!1
h.id=!1
h.k1=!1
h.k2=!1
h.k3=!1
h.k4=!1
h.r1=!1
h.r2=1
h.sad(0.4)
t=new M.dI()
t.shx(0,O.lJ(E.a3))
t.d.bu(t.giu(),t.giw())
t.e=null
t.f=null
t.r=null
t.x=null
g=X.oe(!0,!0,!1,null,2000,null,0)
f=new X.e7()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sbj(null)
n=f.c
if(!(Math.abs(n-1.0471975511965976)<$.P().a)){f.c=1.0471975511965976
n=new D.D("fov",n,1.0471975511965976,f,[P.E])
n.b=!0
f.aU(n)}n=f.d
if(!(Math.abs(n-0.1)<$.P().a)){f.d=0.1
n=new D.D("near",n,0.1,f,[P.E])
n.b=!0
f.aU(n)}n=f.e
if(!(Math.abs(n-2000)<$.P().a)){f.e=2000
n=new D.D("far",n,2000,f,[P.E])
n.b=!0
f.aU(n)}n=t.a
if(n!==f){if(n!=null)n.gC().a3(0,t.gav())
i=t.a
t.a=f
f.gC().h(0,t.gav())
n=new D.D("camera",i,t.a,t,[X.dC])
n.b=!0
t.aE(n)}n=t.b
if(n!==g){if(n!=null)n.gC().a3(0,t.gav())
i=t.b
t.b=g
g.gC().h(0,t.gav())
n=new D.D("target",i,t.b,t,[X.ei])
n.b=!0
t.aE(n)}t.sb8(null)
t.sb8(h)
t.d.h(0,o)
n=t.a
e=V.mD(0,0,5)
m=new U.dD()
m.a=e
n.sbj(m)
n=p.d
if(n!==t){if(n!=null)n.gC().a3(0,p.gdz())
p.d=t
t.gC().h(0,p.gdz())
p.dA()}t=new V.fT("controls",!0)
r=C.w.ca(r,"controls")
t.c=r
if(r==null)H.t("Failed to find controls for CheckGroup")
t.shw(H.f([],[W.cy]))
t.a9(0,"Material",new G.kZ(u,o),!0)
t.t(0,"Filled",new G.l_(h))
t.a9(0,"Wire Frame",new G.l0(h),!0)
t.t(0,"Vertices",new G.lb(h))
t.t(0,"Normals",new G.lm(h))
t.t(0,"Binormals",new G.lo(h))
t.t(0,"Tangentals",new G.lp(h))
t.t(0,"Face Centers",new G.lq(h))
t.t(0,"Face Normals",new G.lr(h))
t.t(0,"Face Binormals",new G.ls(h))
t.t(0,"Face Tangentals",new G.lt(h))
t.t(0,"Colors",new G.l1(h))
t.t(0,"Textures2D",new G.l2(h))
t.t(0,"TexturesCube",new G.l3(h))
t.t(0,"Weight",new G.l4(h))
t.a9(0,"Axis",new G.l5(h),!0)
t.t(0,"AABB",new G.l6(h))
u=new G.lw(u,p,o,new G.lu(),h)
t=V.mL("shapes",!0)
t.a9(0,"Cube",new G.l7(u),!0)
t.t(0,"Low Poly Tree",new G.l8(u))
t.t(0,"Low Poly Wolf",new G.l9(u))
t.t(0,"Plant",new G.la(u))
u=V.mL("scalars",!0)
u.t(0,"0.01",new G.lc(h))
u.t(0,"0.02",new G.ld(h))
u.t(0,"0.04",new G.le(h))
u.t(0,"0.06",new G.lf(h))
u.t(0,"0.08",new G.lg(h))
u.t(0,"0.1",new G.lh(h))
u.t(0,"0.2",new G.li(h))
u.a9(0,"0.4",new G.lj(h),!0)
u.t(0,"0.6",new G.lk(h))
u.t(0,"0.8",new G.ll(h))
u.t(0,"1.0",new G.ln(h))
V.pU(p)},
kZ:function kZ(a,b){this.a=a
this.b=b},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
lb:function lb(a){this.a=a},
lm:function lm(a){this.a=a},
lo:function lo(a){this.a=a},
lp:function lp(a){this.a=a},
lq:function lq(a){this.a=a},
lr:function lr(a){this.a=a},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
lu:function lu(){},
lv:function lv(a,b){this.a=a
this.b=b},
lw:function lw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a){this.a=a},
lj:function lj(a){this.a=a},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
ln:function ln(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lQ.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gJ:function(a){return H.cU(a)},
j:function(a){return"Instance of '"+H.ca(a)+"'"}}
J.hO.prototype={
j:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iK:1}
J.dR.prototype={
B:function(a,b){return null==b},
j:function(a){return"null"},
gJ:function(a){return 0},
$iz:1}
J.dS.prototype={
gJ:function(a){return 0},
j:function(a){return String(a)}}
J.is.prototype={}
J.cf.prototype={}
J.bs.prototype={
j:function(a){var u=a[$.nH()]
if(u==null)return this.fU(a)
return"JavaScript function for "+H.o(J.aK(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ilN:1}
J.aU.prototype={
h:function(a,b){H.y(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.F("add"))
a.push(b)},
a3:function(a,b){var u
if(!!a.fixed$length)H.t(P.F("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.c2(a))}},
G:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.m(u,t,H.o(a[t]))
return u.join(b)},
l3:function(a){return this.G(a,"")},
kX:function(a,b,c,d){var u,t,s
H.y(b,d)
H.j(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.c2(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fS:function(a,b,c){if(b<0||b>a.length)throw H.c(P.an(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.an(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.u(a,0)])
return H.f(a.slice(b,c),[H.u(a,0)])},
gaP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.oj())},
fP:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$in",[u],"$an")
if(!!a.immutable$list)H.t(P.F("setRange"))
P.by(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cr(d)
if(e+t>u.gk(d))throw H.c(H.ok())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.i(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.i(d,e+s)},
bv:function(a,b,c,d){return this.fP(a,b,c,d,0)},
b3:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
j:function(a){return P.lO(a,"[","]")},
ga6:function(a){return new J.aw(a,a.length,0,[H.u(a,0)])},
gJ:function(a){return H.cU(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.F("set length"))
if(b<0)throw H.c(P.an(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bC(a,b))
if(b>=a.length||b<0)throw H.c(H.bC(a,b))
return a[b]},
m:function(a,b,c){H.y(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.F("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bC(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.e.n(a.length,b.gk(b))
u=H.f([],u)
this.sk(u,t)
this.bv(u,0,a.length,a)
this.bv(u,a.length,t,b)
return u},
$in:1,
$ib:1}
J.lP.prototype={}
J.aw.prototype={
gW:function(a){return this.d},
H:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.G(u))
s=this.c
if(s>=t){this.sdE(null)
return!1}this.sdE(u[s]);++this.c
return!0},
sdE:function(a){this.d=H.y(a,H.u(this,0))},
$iaN:1}
J.c8.prototype={
lK:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.F(""+a+".toInt()"))},
c_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.F(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.F(""+a+".round()"))},
fu:function(a,b){var u,t
if(b>20)throw H.c(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bq:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.an(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.F("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.l("0",r)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a+b},
bs:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ef(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.ef(a,b)},
ef:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.F("Result of truncating division is "+H.o(u)+": "+H.o(a)+" ~/ "+b))},
aY:function(a,b){var u
if(a>0)u=this.ee(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jv:function(a,b){if(b<0)throw H.c(H.av(b))
return this.ee(a,b)},
ee:function(a,b){return b>31?0:a>>>b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a<b},
aS:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a>=b},
$iE:1,
$ia9:1}
J.dQ.prototype={$ip:1}
J.dP.prototype={}
J.bM.prototype={
a_:function(a,b){if(b<0)throw H.c(H.bC(a,b))
if(b>=a.length)H.t(H.bC(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.bC(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.lG(b,null,null))
return a+b},
b6:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.av(b))
c=P.by(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ai:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.av(c))
if(typeof c!=="number")return c.E()
if(c<0||c>a.length)throw H.c(P.an(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ah:function(a,b){return this.ai(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.av(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.E()
if(b<0)throw H.c(P.iy(b,null,null))
if(b>c)throw H.c(P.iy(b,null,null))
if(c>a.length)throw H.c(P.iy(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.u(a,b,null)},
fv:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.I(u,0)===133){s=J.om(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.a_(u,r)===133?J.on(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
lk:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.l(c,u)+a},
am:function(a,b){return this.lk(a,b," ")},
ll:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.l(c,u)},
f5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.an(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
d4:function(a,b){return this.f5(a,b,0)},
l5:function(a,b,c){var u
c=a.length
u=b.length
if(c+u>c)c-=u
return a.lastIndexOf(b,c)},
l4:function(a,b){return this.l5(a,b,null)},
j:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.bC(a,b))
return a[b]},
$imG:1,
$ih:1}
H.ad.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.c.a_(this.a,b)},
$ada:function(){return[P.p]},
$aw:function(){return[P.p]},
$an:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h9.prototype={}
H.dW.prototype={
gW:function(a){return this.d},
H:function(){var u,t,s,r
u=this.a
t=J.cr(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.c2(u))
r=this.c
if(r>=s){this.sbb(null)
return!1}this.sbb(t.K(u,r));++this.c
return!0},
sbb:function(a){this.d=H.y(a,H.u(this,0))},
$iaN:1}
H.i3.prototype={
ga6:function(a){return new H.i4(J.cv(this.a),this.b,this.$ti)},
gk:function(a){return J.aA(this.a)},
K:function(a,b){return this.b.$1(J.lD(this.a,b))},
$an:function(a,b){return[b]}}
H.i4.prototype={
H:function(){var u=this.b
if(u.H()){this.sbb(this.c.$1(u.gW(u)))
return!0}this.sbb(null)
return!1},
gW:function(a){return this.a},
sbb:function(a){this.a=H.y(a,H.u(this,1))},
$aaN:function(a,b){return[b]}}
H.jI.prototype={
ga6:function(a){return new H.jJ(J.cv(this.a),this.b,this.$ti)}}
H.jJ.prototype={
H:function(){var u,t
for(u=this.a,t=this.b;u.H();)if(t.$1(u.gW(u)))return!0
return!1},
gW:function(a){var u=this.a
return u.gW(u)}}
H.c4.prototype={}
H.da.prototype={
m:function(a,b,c){H.y(c,H.aS(this,"da",0))
throw H.c(P.F("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fX.prototype={
j:function(a){return P.lS(this)},
m:function(a,b,c){H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
return H.o9()},
$iA:1}
H.fY.prototype={
gk:function(a){return this.a},
bJ:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bJ(0,b))return
return this.dT(b)},
dT:function(a){return this.b[H.L(a)]},
v:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.j(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.y(this.dT(q),u))}}}
H.iz.prototype={}
H.jb.prototype={
al:function(a){var u,t,s
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
H.io.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.o(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hR.prototype={
j:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.o(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.o(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.o(this.a)+")"}}
H.jn.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cE.prototype={}
H.lA.prototype={
$1:function(a){if(!!J.Y(a).$ibJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:20}
H.fa.prototype={
j:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iae:1}
H.cz.prototype={
j:function(a){return"Closure '"+H.ca(this).trim()+"'"},
$ilN:1,
glS:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iZ.prototype={}
H.iS.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ct(u)+"'"}}
H.cw.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cw))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cU(this.a)
else t=typeof u!=="object"?J.du(u):H.cU(u)
return(t^H.cU(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.o(this.d)+"' of "+("Instance of '"+H.ca(u)+"'")}}
H.jd.prototype={
j:function(a){return this.a}}
H.fR.prototype={
j:function(a){return this.a}}
H.iG.prototype={
j:function(a){return"RuntimeError: "+H.o(this.a)}}
H.aI.prototype={
gk:function(a){return this.a},
gaC:function(a){return new H.hV(this,[H.u(this,0)])},
bJ:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dO(t,b)}else return this.l0(b)},
l0:function(a){var u=this.d
if(u==null)return!1
return this.d6(this.cp(u,this.d5(a)),a)>=0},
kp:function(a,b){J.lE(H.k(b,"$iA",this.$ti,"$aA"),new H.hQ(this))},
i:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bx(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bx(r,b)
s=t==null?null:t.b
return s}else return this.l1(b)},
l1:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cp(u,this.d5(a))
s=this.d6(t,a)
if(s<0)return
return t[s].b},
m:function(a,b,c){var u,t
H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cB()
this.b=u}this.dG(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cB()
this.c=t}this.dG(t,b,c)}else this.l2(b,c)},
l2:function(a,b){var u,t,s,r
H.y(a,H.u(this,0))
H.y(b,H.u(this,1))
u=this.d
if(u==null){u=this.cB()
this.d=u}t=this.d5(a)
s=this.cp(u,t)
if(s==null)this.cK(u,t,[this.cC(a,b)])
else{r=this.d6(s,a)
if(r>=0)s[r].b=b
else s.push(this.cC(a,b))}},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.c2(this))
u=u.c}},
dG:function(a,b,c){var u
H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
u=this.bx(a,b)
if(u==null)this.cK(a,b,this.cC(b,c))
else u.b=c},
cC:function(a,b){var u,t
u=new H.hU(H.y(a,H.u(this,0)),H.y(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
d5:function(a){return J.du(a)&0x3ffffff},
d6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
j:function(a){return P.lS(this)},
bx:function(a,b){return a[b]},
cp:function(a,b){return a[b]},
cK:function(a,b,c){a[b]=c},
hE:function(a,b){delete a[b]},
dO:function(a,b){return this.bx(a,b)!=null},
cB:function(){var u=Object.create(null)
this.cK(u,"<non-identifier-key>",u)
this.hE(u,"<non-identifier-key>")
return u}}
H.hQ.prototype={
$2:function(a,b){var u=this.a
u.m(0,H.y(a,H.u(u,0)),H.y(b,H.u(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.z,args:[H.u(u,0),H.u(u,1)]}}}
H.hU.prototype={}
H.hV.prototype={
gk:function(a){return this.a.a},
ga6:function(a){var u,t
u=this.a
t=new H.hW(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hW.prototype={
gW:function(a){return this.d},
H:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.c2(u))
else{u=this.c
if(u==null){this.sdR(null)
return!1}else{this.sdR(u.a)
this.c=this.c.c
return!0}}},
sdR:function(a){this.d=H.y(a,H.u(this,0))},
$iaN:1}
H.kU.prototype={
$1:function(a){return this.a(a)},
$S:20}
H.kV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:48}
H.kW.prototype={
$1:function(a){return this.a(H.L(a))},
$S:42}
H.hP.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gie:function(){var u=this.c
if(u!=null)return u
u=this.b
u=H.mx(this.a,u.multiline,!u.ignoreCase,!0)
this.c=u
return u},
kW:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eU(this,u)},
hI:function(a,b){var u,t
u=this.gie()
u.lastIndex=b
t=u.exec(a)
if(t==null)return
return new H.eU(this,t)},
$imG:1,
$ioM:1}
H.eU.prototype={
i:function(a,b){return C.a.i(this.b,b)},
$idY:1}
H.jK.prototype={
gW:function(a){return this.d},
H:function(){var u,t,s,r
u=this.b
if(u==null)return!1
t=this.c
if(t<=u.length){s=this.a.hI(u,t)
if(s!=null){this.d=s
u=s.b
t=u.index
r=t+u[0].length
this.c=t===r?r+1:r
return!0}}this.d=null
this.b=null
return!1},
$iaN:1,
$aaN:function(){return[P.dY]}}
H.cO.prototype={$icO:1}
H.bN.prototype={$ibN:1,$ioU:1}
H.e3.prototype={
gk:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cP.prototype={
i:function(a,b){H.bp(b,a,a.length)
return a[b]},
m:function(a,b,c){H.pD(c)
H.bp(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.E]},
$aw:function(){return[P.E]},
$in:1,
$an:function(){return[P.E]},
$ib:1,
$ab:function(){return[P.E]}}
H.e4.prototype={
m:function(a,b,c){H.ap(c)
H.bp(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.p]},
$aw:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.ii.prototype={
i:function(a,b){H.bp(b,a,a.length)
return a[b]}}
H.ij.prototype={
i:function(a,b){H.bp(b,a,a.length)
return a[b]}}
H.ik.prototype={
i:function(a,b){H.bp(b,a,a.length)
return a[b]}}
H.il.prototype={
i:function(a,b){H.bp(b,a,a.length)
return a[b]}}
H.im.prototype={
i:function(a,b){H.bp(b,a,a.length)
return a[b]}}
H.e5.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bp(b,a,a.length)
return a[b]},
$iqg:1}
H.cQ.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bp(b,a,a.length)
return a[b]},
$icQ:1,
$iR:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
P.jP.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:18}
P.jO.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.jQ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jR.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fi.prototype={
hc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.co(new P.kt(this,b),0),a)
else throw H.c(P.F("`setTimeout()` not found."))},
hd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.co(new P.ks(this,a,Date.now(),b),0),a)
else throw H.c(P.F("Periodic timer."))},
$ibk:1}
P.kt.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:7}
P.ks.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fW(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.eC.prototype={
az:function(a,b){var u
H.cq(b,{futureOr:1,type:H.u(this,0)})
if(this.b)this.a.az(0,b)
else if(H.bA(b,"$iab",this.$ti,"$aab")){u=this.a
b.c4(u.gkC(u),u.gew(),-1)}else P.me(new P.jM(this,b))},
b2:function(a,b){if(this.b)this.a.b2(a,b)
else P.me(new P.jL(this,a,b))},
$ilL:1}
P.jM.prototype={
$0:function(){this.a.a.az(0,this.b)},
$S:0}
P.jL.prototype={
$0:function(){this.a.a.b2(this.b,this.c)},
$S:0}
P.kE.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:51}
P.kF.prototype={
$2:function(a,b){this.a.$2(1,new H.cE(a,H.d(b,"$iae")))},
$S:29}
P.kP.prototype={
$2:function(a,b){this.a(H.ap(a),b)},
$S:33}
P.ab.prototype={}
P.eF.prototype={
b2:function(a,b){H.d(b,"$iae")
if(a==null)a=new P.cS()
if(this.a.a!==0)throw H.c(P.lW("Future already completed"))
$.T.toString
this.aF(a,b)},
ex:function(a){return this.b2(a,null)},
$ilL:1}
P.jN.prototype={
az:function(a,b){var u
H.cq(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.c(P.lW("Future already completed"))
u.hj(b)},
aF:function(a,b){this.a.hk(a,b)}}
P.ff.prototype={
az:function(a,b){var u
H.cq(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.c(P.lW("Future already completed"))
u.cl(b)},
kD:function(a){return this.az(a,null)},
aF:function(a,b){this.a.aF(a,b)}}
P.bo.prototype={
l9:function(a){if(this.c!==6)return!0
return this.b.b.di(H.j(this.d,{func:1,ret:P.K,args:[P.N]}),a.a,P.K,P.N)},
l_:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fz(u,{func:1,args:[P.N,P.ae]}))return H.cq(r.lF(u,a.a,a.b,null,t,P.ae),s)
else return H.cq(r.di(H.j(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.at.prototype={
c4:function(a,b,c){var u,t
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.T
if(t!==C.k){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.pr(b,t)}return this.cM(a,b,c)},
ft:function(a,b){return this.c4(a,null,b)},
cM:function(a,b,c){var u,t,s
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.at(0,$.T,[c])
s=b==null?1:3
this.dH(new P.bo(t,s,a,b,[u,c]))
return t},
dH:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ibo")
this.c=a}else{if(u===2){t=H.d(this.c,"$iat")
u=t.a
if(u<4){t.dH(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.cl(null,null,u,H.j(new P.jZ(this,a),{func:1,ret:-1}))}},
e6:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ibo")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iat")
t=p.a
if(t<4){p.e6(a)
return}this.a=t
this.c=p.c}u.a=this.bC(a)
t=this.b
t.toString
P.cl(null,null,t,H.j(new P.k6(u,this),{func:1,ret:-1}))}},
bB:function(){var u=H.d(this.c,"$ibo")
this.c=null
return this.bC(u)},
bC:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cl:function(a){var u,t,s
u=H.u(this,0)
H.cq(a,{futureOr:1,type:u})
t=this.$ti
if(H.bA(a,"$iab",t,"$aab"))if(H.bA(a,"$iat",t,null))P.k1(a,this)
else P.n6(a,this)
else{s=this.bB()
H.y(a,u)
this.a=4
this.c=a
P.ch(this,s)}},
aF:function(a,b){var u
H.d(b,"$iae")
u=this.bB()
this.a=8
this.c=new P.aB(a,b)
P.ch(this,u)},
hj:function(a){var u
H.cq(a,{futureOr:1,type:H.u(this,0)})
if(H.bA(a,"$iab",this.$ti,"$aab")){this.hv(a)
return}this.a=1
u=this.b
u.toString
P.cl(null,null,u,H.j(new P.k0(this,a),{func:1,ret:-1}))},
hv:function(a){var u=this.$ti
H.k(a,"$iab",u,"$aab")
if(H.bA(a,"$iat",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.cl(null,null,u,H.j(new P.k5(this,a),{func:1,ret:-1}))}else P.k1(a,this)
return}P.n6(a,this)},
hk:function(a,b){var u
this.a=1
u=this.b
u.toString
P.cl(null,null,u,H.j(new P.k_(this,a,b),{func:1,ret:-1}))},
$iab:1}
P.jZ.prototype={
$0:function(){P.ch(this.a,this.b)},
$S:0}
P.k6.prototype={
$0:function(){P.ch(this.b,this.a.a)},
$S:0}
P.k2.prototype={
$1:function(a){var u=this.a
u.a=0
u.cl(a)},
$S:18}
P.k3.prototype={
$2:function(a,b){H.d(b,"$iae")
this.a.aF(a,b)},
$1:function(a){return this.$2(a,null)},
$S:38}
P.k4.prototype={
$0:function(){this.a.aF(this.b,this.c)},
$S:0}
P.k0.prototype={
$0:function(){var u,t,s
u=this.a
t=H.y(this.b,H.u(u,0))
s=u.bB()
u.a=4
u.c=t
P.ch(u,s)},
$S:0}
P.k5.prototype={
$0:function(){P.k1(this.b,this.a)},
$S:0}
P.k_.prototype={
$0:function(){this.a.aF(this.b,this.c)},
$S:0}
P.k9.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fs(H.j(r.d,{func:1}),null)}catch(q){t=H.al(q)
s=H.bU(q)
if(this.d){r=H.d(this.a.a.c,"$iaB").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iaB")
else p.b=new P.aB(t,s)
p.a=!0
return}if(!!J.Y(u).$iab){if(u instanceof P.at&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iaB")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ft(new P.ka(o),null)
r.a=!1}},
$S:7}
P.ka.prototype={
$1:function(a){return this.a},
$S:39}
P.k8.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.y(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.di(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.bU(o)
s=this.a
s.b=new P.aB(u,t)
s.a=!0}},
$S:7}
P.k7.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iaB")
r=this.c
if(r.l9(u)&&r.e!=null){q=this.b
q.b=r.l_(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.bU(p)
r=H.d(this.a.a.c,"$iaB")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aB(t,s)
n.a=!0}},
$S:7}
P.eD.prototype={}
P.cY.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.at(0,$.T,[P.p])
u.a=0
s=H.u(this,0)
r=H.j(new P.iW(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.iX(u,t),{func:1,ret:-1})
W.a8(this.a,this.b,r,!1,s)
return t}}
P.iW.prototype={
$1:function(a){H.y(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.u(this.b,0)]}}}
P.iX.prototype={
$0:function(){this.b.cl(this.a.a)},
$S:0}
P.cZ.prototype={}
P.iV.prototype={}
P.ko.prototype={}
P.bk.prototype={}
P.aB.prototype={
j:function(a){return H.o(this.a)},
$ibJ:1}
P.kD.prototype={$iqu:1}
P.kN.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cS()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.j(0)
throw s},
$S:0}
P.kh.prototype={
lG:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.k===$.T){a.$0()
return}P.ni(null,null,this,a,-1)}catch(s){u=H.al(s)
t=H.bU(s)
P.kM(null,null,this,u,H.d(t,"$iae"))}},
lH:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.k===$.T){a.$1(b)
return}P.nj(null,null,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.bU(s)
P.kM(null,null,this,u,H.d(t,"$iae"))}},
kw:function(a,b){return new P.kj(this,H.j(a,{func:1,ret:b}),b)},
cR:function(a){return new P.ki(this,H.j(a,{func:1,ret:-1}))},
ep:function(a,b){return new P.kk(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
fs:function(a,b){H.j(a,{func:1,ret:b})
if($.T===C.k)return a.$0()
return P.ni(null,null,this,a,b)},
di:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.T===C.k)return a.$1(b)
return P.nj(null,null,this,a,b,c,d)},
lF:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.T===C.k)return a.$2(b,c)
return P.ps(null,null,this,a,b,c,d,e,f)},
fo:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}}
P.kj.prototype={
$0:function(){return this.a.fs(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ki.prototype={
$0:function(){return this.a.lG(this.b)},
$S:7}
P.kk.prototype={
$1:function(a){var u=this.c
return this.a.lH(this.b,H.y(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ke.prototype={
ga6:function(a){return P.n8(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.y(b,H.u(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.n9()
this.c=u}return this.hy(u,b)}else return this.hh(0,b)},
hh:function(a,b){var u,t,s
H.y(b,H.u(this,0))
u=this.d
if(u==null){u=P.n9()
this.d=u}t=this.dM(b)
s=u[t]
if(s==null)u[t]=[this.ck(b)]
else{if(this.dU(s,b)>=0)return!1
s.push(this.ck(b))}return!0},
a3:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.jg(this.c,b)
else return this.jf(0,b)},
jf:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.hW(u,b)
s=this.dU(t,b)
if(s<0)return!1
this.eg(t.splice(s,1)[0])
return!0},
hy:function(a,b){H.y(b,H.u(this,0))
if(H.d(a[b],"$idc")!=null)return!1
a[b]=this.ck(b)
return!0},
jg:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$idc")
if(u==null)return!1
this.eg(u)
delete a[b]
return!0},
e0:function(){this.r=1073741823&this.r+1},
ck:function(a){var u,t
u=new P.dc(H.y(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.e0()
return u},
eg:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.e0()},
dM:function(a){return J.du(a)&1073741823},
hW:function(a,b){return a[this.dM(b)]},
dU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.dc.prototype={}
P.kf.prototype={
gW:function(a){return this.d},
H:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.c2(u))
else{u=this.c
if(u==null){this.sdL(null)
return!1}else{this.sdL(H.y(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdL:function(a){this.d=H.y(a,H.u(this,0))},
$iaN:1}
P.hX.prototype={
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))},
$S:10}
P.hY.prototype={$in:1,$ib:1}
P.w.prototype={
ga6:function(a){return new H.dW(a,this.gk(a),0,[H.bS(this,a,"w",0)])},
K:function(a,b){return this.i(a,b)},
lM:function(a,b){var u,t
u=H.f([],[H.bS(this,a,"w",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.m(u,t,this.i(a,t))
return u},
lL:function(a){return this.lM(a,!0)},
n:function(a,b){var u,t
u=[H.bS(this,a,"w",0)]
H.k(b,"$ib",u,"$ab")
t=H.f([],u)
C.a.sk(t,C.e.n(this.gk(a),b.gk(b)))
C.a.bv(t,0,this.gk(a),a)
C.a.bv(t,this.gk(a),t.length,b)
return t},
kT:function(a,b,c,d){var u
H.y(d,H.bS(this,a,"w",0))
P.by(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.m(a,u,d)},
j:function(a){return P.lO(a,"[","]")}}
P.i0.prototype={}
P.i1.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.o(a)
u.a=t+": "
u.a+=H.o(b)},
$S:10}
P.ax.prototype={
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.bS(this,a,"ax",0),H.bS(this,a,"ax",1)]})
for(u=J.cv(this.gaC(a));u.H();){t=u.gW(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.aA(this.gaC(a))},
j:function(a){return P.lS(a)},
$iA:1}
P.ku.prototype={
m:function(a,b,c){H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
throw H.c(P.F("Cannot modify unmodifiable map"))}}
P.i2.prototype={
i:function(a,b){return J.Z(this.a,b)},
m:function(a,b,c){J.lB(this.a,H.y(b,H.u(this,0)),H.y(c,H.u(this,1)))},
v:function(a,b){J.lE(this.a,H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gk:function(a){return J.aA(this.a)},
j:function(a){return J.aK(this.a)},
$iA:1}
P.eu.prototype={}
P.kl.prototype={
j:function(a){return P.lO(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.t(P.an(b,0,null,"index",null))
for(u=P.n8(this,this.r,H.u(this,0)),t=0;u.H();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
$in:1,
$imR:1}
P.eT.prototype={}
P.fo.prototype={}
P.fN.prototype={
la:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.by(c,a0,b.length,null,null,null)
u=$.nW()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.I(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kT(C.c.I(b,n))
j=H.kT(C.c.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aF("")
g=r.a+=C.c.u(b,s,t)
r.a=g+H.e9(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.u(b,s,a0)
f=g.length
if(q>=0)P.mm(b,p,a0,q,o,f)
else{e=C.e.bs(f-1,4)+1
if(e===1)throw H.c(P.a6("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b6(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.mm(b,p,a0,q,o,d)
else{e=C.e.bs(d,4)
if(e===1)throw H.c(P.a6("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b6(b,a0,a0,e===2?"==":"=")}return b},
$ac0:function(){return[[P.b,P.p],P.h]}}
P.fO.prototype={
$ac3:function(){return[[P.b,P.p],P.h]}}
P.c0.prototype={}
P.c3.prototype={}
P.ha.prototype={
$ac0:function(){return[P.h,[P.b,P.p]]}}
P.jv.prototype={
gkR:function(){return C.N}}
P.jx.prototype={
bh:function(a,b,c){var u,t,s
c=P.by(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kC(t)
if(s.hV(a,b,c)!==c)s.ek(J.o0(a,c-1),0)
return new Uint8Array(t.subarray(0,H.pm(0,s.b,t.length)))},
cV:function(a){return this.bh(a,0,null)},
$ac3:function(){return[P.h,[P.b,P.p]]}}
P.kC.prototype={
ek:function(a,b){var u,t,s,r,q
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
hV:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a_(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ek(r,C.c.I(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jw.prototype={
bh:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.p],"$ab")
u=P.oX(!1,a,b,c)
if(u!=null)return u
c=P.by(b,c,J.aA(a),null,null,null)
t=new P.aF("")
s=new P.kA(!1,t)
s.bh(a,b,c)
if(s.e>0){H.t(P.a6("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.e9(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cV:function(a){return this.bh(a,0,null)},
$ac3:function(){return[[P.b,P.p],P.h]}}
P.kA.prototype={
bh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.p],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kB(this,b,c,a)
$label0$0:for(q=J.cr(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.i(a,o)
if(typeof n!=="number")return n.c9()
if((n&192)!==128){m=P.a6("Bad UTF-8 encoding 0x"+C.e.bq(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.D,m)
if(u<=C.D[m]){m=P.a6("Overlong encoding of 0x"+C.e.bq(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a6("Character outside valid Unicode range: 0x"+C.e.bq(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.e9(u)
this.c=!1}for(m=o<c;m;){l=P.pt(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.i(a,k)
if(typeof n!=="number")return n.E()
if(n<0){i=P.a6("Negative UTF-8 code unit: -0x"+C.e.bq(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a6("Bad UTF-8 encoding 0x"+C.e.bq(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kB.prototype={
$2:function(a,b){this.a.b.a+=P.ef(this.d,a,b)},
$S:41}
P.K.prototype={}
P.aC.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aY(u,30))&1073741823},
j:function(a){var u,t,s,r,q,p,o,n
u=P.oa(H.oG(this))
t=P.dE(H.oE(this))
s=P.dE(H.oA(this))
r=P.dE(H.oB(this))
q=P.dE(H.oD(this))
p=P.dE(H.oF(this))
o=P.ob(H.oC(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.E.prototype={}
P.bq.prototype={
n:function(a,b){return new P.bq(C.e.n(this.a,b.gdS()))},
E:function(a,b){return C.e.E(this.a,b.gdS())},
aS:function(a,b){return C.e.aS(this.a,b.gdS())},
B:function(a,b){if(b==null)return!1
return b instanceof P.bq&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
j:function(a){var u,t,s,r,q
u=new P.h8()
t=this.a
if(t<0)return"-"+new P.bq(0-t).j(0)
s=u.$1(C.e.a8(t,6e7)%60)
r=u.$1(C.e.a8(t,1e6)%60)
q=new P.h7().$1(t%1e6)
return""+C.e.a8(t,36e8)+":"+H.o(s)+":"+H.o(r)+"."+H.o(q)}}
P.h7.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.h8.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bJ.prototype={}
P.cS.prototype={
j:function(a){return"Throw of null."}}
P.b8.prototype={
gcn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcm:function(){return""},
j:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcn()+t+s
if(!this.a)return r
q=this.gcm()
p=P.hd(this.b)
return r+q+": "+p}}
P.cb.prototype={
gcn:function(){return"RangeError"},
gcm:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.o(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.o(u)
else if(s>u)t=": Not in range "+H.o(u)+".."+H.o(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.o(u)}return t}}
P.ho.prototype={
gcn:function(){return"RangeError"},
gcm:function(){var u,t
u=H.ap(this.b)
if(typeof u!=="number")return u.E()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.o(t)},
gk:function(a){return this.f}}
P.jo.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.jl.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cX.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fW.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hd(u)+"."}}
P.ir.prototype={
j:function(a){return"Out of Memory"},
$ibJ:1}
P.ee.prototype={
j:function(a){return"Stack Overflow"},
$ibJ:1}
P.h2.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eM.prototype={
j:function(a){return"Exception: "+this.a}}
P.hk.prototype={
j:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u!=null&&""!==u?"FormatException: "+H.o(u):"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.I(r,m)
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
return t+h+f+g+"\n"+C.c.l(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.o(s)+")"):t}}
P.p.prototype={}
P.n.prototype={
gk:function(a){var u,t
u=this.ga6(this)
for(t=0;u.H();)++t
return t},
K:function(a,b){var u,t,s
if(b<0)H.t(P.an(b,0,null,"index",null))
for(u=this.ga6(this),t=0;u.H();){s=u.gW(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
j:function(a){return P.oi(this,"(",")")}}
P.aN.prototype={}
P.b.prototype={$in:1}
P.A.prototype={}
P.z.prototype={
gJ:function(a){return P.N.prototype.gJ.call(this,this)},
j:function(a){return"null"}}
P.a9.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
B:function(a,b){return this===b},
gJ:function(a){return H.cU(this)},
j:function(a){return"Instance of '"+H.ca(this)+"'"},
toString:function(){return this.j(this)}}
P.dY.prototype={}
P.ae.prototype={}
P.h.prototype={$imG:1}
P.aF.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq5:1}
P.jt.prototype={
$2:function(a,b){var u,t,s,r
u=P.h
H.k(a,"$iA",[u,u],"$aA")
H.L(b)
t=J.dr(b).d4(b,"=")
if(t===-1){if(b!=="")J.lB(a,P.m3(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.au(b,t+1)
u=this.a
J.lB(a,P.m3(s,0,s.length,u,!0),P.m3(r,0,r.length,u,!0))}return a},
$S:44}
P.jq.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.jr.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.js.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.bV(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.E()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:47}
P.ci.prototype={
gfC:function(){return this.b},
gd3:function(a){var u=this.c
if(u==null)return""
if(C.c.ah(u,"["))return C.c.u(u,1,u.length-1)
return u},
gc1:function(a){var u=this.d
if(u==null)return P.na(this.a)
return u},
gdf:function(a){var u=this.f
return u==null?"":u},
gf0:function(){var u=this.r
return u==null?"":u},
dh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iA",[P.h,null],"$aA")
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
if(s&&!C.c.ah(d,"/"))d="/"+d
g=P.m2(g,0,0,h)
return new P.ci(i,j,c,f,d,g,this.r)},
dg:function(a,b){return this.dh(a,null,null,null,null,null,null,b,null,null)},
gb5:function(){var u,t
if(this.Q==null){u=this.f
t=P.h
this.sje(new P.eu(P.mZ(u==null?"":u,C.m),[t,t]))}return this.Q},
gf1:function(){return this.c!=null},
gf4:function(){return this.f!=null},
gf2:function(){return this.r!=null},
j:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.o(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.o(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.o(t)}else u=t
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
if(!!J.Y(b).$ilZ)if(this.a==b.gcc())if(this.c!=null===b.gf1())if(this.b==b.gfC())if(this.gd3(this)==b.gd3(b))if(this.gc1(this)==b.gc1(b))if(this.e===b.gfj(b)){u=this.f
t=u==null
if(!t===b.gf4()){if(t)u=""
if(u===b.gdf(b)){u=this.r
t=u==null
if(!t===b.gf2()){if(t)u=""
u=u===b.gf0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
if(u==null){u=C.c.gJ(this.j(0))
this.z=u}return u},
sje:function(a){var u=P.h
this.Q=H.k(a,"$iA",[u,u],"$aA")},
$ilZ:1,
gcc:function(){return this.a},
gfj:function(a){return this.e}}
P.kv.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a6("Invalid port",this.a,u+1))},
$S:27}
P.kw.prototype={
$1:function(a){return P.kz(C.a1,a,C.m,!1)},
$S:49}
P.ky.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.o(P.kz(C.u,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.o(P.kz(C.u,b,C.m,!0))}},
$S:21}
P.kx.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.cv(H.nA(b,"$in")),t=this.a;u.H();)t.$2(a,H.L(u.gW(u)))},
$S:54}
P.jp.prototype={
gfB:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f5(t,"?",u)
r=t.length
if(s>=0){q=P.dm(t,s+1,r,C.r,!1)
r=s}else q=null
u=new P.jV(this,"data",null,null,null,P.dm(t,u,r,C.F,!1),q,null)
this.c=u
return u},
j:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kH.prototype={
$1:function(a){return new Uint8Array(96)},
$S:55}
P.kG.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.o1(u,0,96,b)
return u},
$S:57}
P.kI.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.I(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.kJ.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.I(b,0),t=C.c.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.km.prototype={
gf1:function(){return this.c>0},
gf3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.i(t)
t=u+1<t
u=t}else u=!1
return u},
gf4:function(){var u=this.f
if(typeof u!=="number")return u.E()
return u<this.r},
gf2:function(){return this.r<this.a.length},
gdY:function(){return this.b===4&&C.c.ah(this.a,"http")},
gdZ:function(){return this.b===5&&C.c.ah(this.a,"https")},
gcc:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdY()){this.x="http"
u="http"}else if(this.gdZ()){this.x="https"
u="https"}else if(u===4&&C.c.ah(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ah(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
gfC:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gd3:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gc1:function(a){var u
if(this.gf3()){u=this.d
if(typeof u!=="number")return u.n()
return P.bV(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdY())return 80
if(this.gdZ())return 443
return 0},
gfj:function(a){return C.c.u(this.a,this.e,this.f)},
gdf:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.E()
return u<t?C.c.u(this.a,u+1,t):""},
gf0:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.au(t,u+1):""},
gb5:function(){var u=this.f
if(typeof u!=="number")return u.E()
if(u>=this.r)return C.a2
u=P.h
return new P.eu(P.mZ(this.gdf(this),C.m),[u,u])},
dh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iA",[P.h,null],"$aA")
i=this.gcc()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.gf3()?this.gc1(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.ah(d,"/"))d="/"+d
g=P.m2(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.au(t,s+1)
return new P.ci(i,j,c,f,d,g,b)},
dg:function(a,b){return this.dh(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Y(b).$ilZ&&this.a===b.j(0)},
j:function(a){return this.a},
$ilZ:1}
P.jV.prototype={}
W.x.prototype={}
W.fE.prototype={
gk:function(a){return a.length}}
W.fG.prototype={
j:function(a){return String(a)}}
W.fH.prototype={
j:function(a){return String(a)}}
W.bY.prototype={$ibY:1}
W.dx.prototype={}
W.bZ.prototype={
dl:function(a,b,c){if(c!=null)return this.hX(a,b,P.pz(c,null))
return this.hY(a,b)},
fJ:function(a,b){return this.dl(a,b,null)},
hX:function(a,b,c){return a.getContext(b,c)},
hY:function(a,b){return a.getContext(b)},
$ibZ:1,
$imp:1}
W.c_.prototype={
hZ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kO:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ic_:1}
W.bI.prototype={
gk:function(a){return a.length}}
W.cA.prototype={$icA:1}
W.fZ.prototype={
gk:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cB.prototype={
gk:function(a){return a.length}}
W.h_.prototype={}
W.ba.prototype={}
W.bb.prototype={}
W.h0.prototype={
gk:function(a){return a.length}}
W.h1.prototype={
gk:function(a){return a.length}}
W.h3.prototype={
i:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.cC.prototype={$icC:1}
W.cD.prototype={
ca:function(a,b){return a.getElementById(b)}}
W.h4.prototype={
j:function(a){return String(a)}}
W.dG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.k(c,"$iaf",[P.a9],"$aaf")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.af,P.a9]]},
$aw:function(){return[[P.af,P.a9]]},
$in:1,
$an:function(){return[[P.af,P.a9]]},
$ib:1,
$ab:function(){return[[P.af,P.a9]]},
$aC:function(){return[[P.af,P.a9]]}}
W.dH.prototype={
j:function(a){return"Rectangle ("+H.o(a.left)+", "+H.o(a.top)+") "+H.o(this.gaR(a))+" x "+H.o(this.gaO(a))},
B:function(a,b){var u
if(b==null)return!1
if(!H.bA(b,"$iaf",[P.a9],"$aaf"))return!1
u=J.bD(b)
return a.left===u.gc0(b)&&a.top===u.gc5(b)&&this.gaR(a)===u.gaR(b)&&this.gaO(a)===u.gaO(b)},
gJ:function(a){return W.n7(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(this.gaR(a)),C.j.gJ(this.gaO(a)))},
geq:function(a){return a.bottom},
gaO:function(a){return a.height},
gc0:function(a){return a.left},
gc2:function(a){return a.right},
gc5:function(a){return a.top},
gaR:function(a){return a.width},
$iaf:1,
$aaf:function(){return[P.a9]}}
W.h5.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.L(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.h]},
$aw:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aC:function(){return[P.h]}}
W.h6.prototype={
gk:function(a){return a.length}}
W.jT.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$ia5")},
m:function(a,b,c){var u
H.d(c,"$ia5")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.lC(this.a,c,u[b])},
h:function(a,b){J.mj(this.a,b)
return b},
ga6:function(a){var u=this.lL(this)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$aw:function(){return[W.a5]},
$an:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
W.a5.prototype={
gcU:function(a){return new W.jT(a,a.children)},
gev:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.E()
if(s<0)s=-s*0
if(typeof r!=="number")return r.E()
if(r<0)r=-r*0
return new P.af(u,t,s,r,[P.a9])},
j:function(a){return a.localName},
$ia5:1}
W.q.prototype={$iq:1}
W.l.prototype={
kr:function(a,b,c,d){H.j(c,{func:1,args:[W.q]})
if(c!=null)this.hi(a,b,c,!1)},
hi:function(a,b,c,d){return a.addEventListener(b,H.co(H.j(c,{func:1,args:[W.q]}),1),!1)},
$il:1}
W.aM.prototype={$iaM:1}
W.cF.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaM")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$icF:1,
$aC:function(){return[W.aM]}}
W.hf.prototype={
gk:function(a){return a.length}}
W.hj.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.dL.prototype={
e8:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.c5.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iI")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.I]},
$aw:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ic5:1,
$aC:function(){return[W.I]}}
W.dM.prototype={}
W.bc.prototype={
m2:function(a,b,c,d,e,f){return a.open(b,c)},
lj:function(a,b,c,d){return a.open(b,c,d)},
$ibc:1}
W.hm.prototype={
$1:function(a){return H.d(a,"$ibc").responseText},
$S:61}
W.hn.prototype={
$1:function(a){var u,t,s,r,q
H.d(a,"$ibi")
u=this.a
t=u.status
if(typeof t!=="number")return t.aS()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.az(0,u)
else q.ex(a)},
$S:28}
W.cH.prototype={}
W.br.prototype={$ibr:1,
gey:function(a){return a.data}}
W.cI.prototype={$icI:1,$imp:1}
W.cJ.prototype={$icJ:1,$icy:1}
W.cy.prototype={$ia5:1,$il:1,$iI:1}
W.bd.prototype={$ibd:1}
W.dU.prototype={}
W.hZ.prototype={
j:function(a){return String(a)}}
W.cM.prototype={}
W.ia.prototype={
gk:function(a){return a.length}}
W.ib.prototype={
i:function(a,b){return P.bB(a.get(H.L(b)))},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaC:function(a){var u=H.f([],[P.h])
this.v(a,new W.ic(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.F("Not supported"))},
$aax:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.ic.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.id.prototype={
i:function(a,b){return P.bB(a.get(H.L(b)))},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaC:function(a){var u=H.f([],[P.h])
this.v(a,new W.ie(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.F("Not supported"))},
$aax:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.aW.prototype={$iaW:1}
W.ig.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaW")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$in:1,
$an:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aC:function(){return[W.aW]}}
W.aq.prototype={$iaq:1}
W.jS.prototype={
m:function(a,b,c){var u,t
H.d(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.lC(u,c,t[b])},
ga6:function(a){var u=this.a.childNodes
return new W.dJ(u,u.length,-1,[H.bS(C.a3,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aw:function(){return[W.I]},
$an:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
lA:function(a,b){var u,t
try{u=a.parentNode
J.lC(u,b,a)}catch(t){H.al(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.fT(a):u},
Z:function(a,b){return a.appendChild(b)},
ji:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cR.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iI")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.I]},
$aw:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aC:function(){return[W.I]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.it.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaX")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$in:1,
$an:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.bi.prototype={$ibi:1}
W.iE.prototype={
i:function(a,b){return P.bB(a.get(H.L(b)))},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaC:function(a){var u=H.f([],[P.h])
this.v(a,new W.iF(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.F("Not supported"))},
$aax:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.iF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.iH.prototype={
gk:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.iP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaY")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$in:1,
$an:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1}
W.iQ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaZ")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$in:1,
$an:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1,
gk:function(a){return a.length}}
W.iT.prototype={
i:function(a,b){return this.dV(a,H.L(b))},
m:function(a,b,c){this.jo(a,b,c)},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=this.i2(a,u)
if(t==null)return
b.$2(t,this.dV(a,t))}},
gaC:function(a){var u=H.f([],[P.h])
this.v(a,new W.iU(u))
return u},
gk:function(a){return a.length},
dV:function(a,b){return a.getItem(b)},
i2:function(a,b){return a.key(b)},
jo:function(a,b,c){return a.setItem(b,c)},
$aax:function(){return[P.h,P.h]},
$iA:1,
$aA:function(){return[P.h,P.h]}}
W.iU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aO.prototype={$iaO:1}
W.bj.prototype={$ibj:1}
W.eg.prototype={
i0:function(a,b){return a.insertRow(b)}}
W.eh.prototype={
dX:function(a,b){return a.insertCell(b)}}
W.b0.prototype={$ib0:1}
W.aP.prototype={$iaP:1}
W.j_.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaP")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$in:1,
$an:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.j0.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib0")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$in:1,
$an:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.j5.prototype={
gk:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.b2.prototype={$ib2:1}
W.j8.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib1")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$in:1,
$an:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.j9.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={}
W.ju.prototype={
j:function(a){return String(a)}}
W.jG.prototype={$imp:1}
W.jH.prototype={
gk:function(a){return a.length}}
W.bn.prototype={
gkL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.F("deltaY is not supported"))},
gkK:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.F("deltaX is not supported"))},
$ibn:1}
W.db.prototype={
jj:function(a,b){return a.requestAnimationFrame(H.co(H.j(b,{func:1,ret:-1,args:[P.a9]}),1))},
hG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jU.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iV")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.V]},
$aw:function(){return[W.V]},
$in:1,
$an:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aC:function(){return[W.V]}}
W.eH.prototype={
j:function(a){return"Rectangle ("+H.o(a.left)+", "+H.o(a.top)+") "+H.o(a.width)+" x "+H.o(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.bA(b,"$iaf",[P.a9],"$aaf"))return!1
u=J.bD(b)
return a.left===u.gc0(b)&&a.top===u.gc5(b)&&a.width===u.gaR(b)&&a.height===u.gaO(b)},
gJ:function(a){return W.n7(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gaO:function(a){return a.height},
gaR:function(a){return a.width}}
W.kb.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaT")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$in:1,
$an:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aC:function(){return[W.aT]}}
W.eZ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iI")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.I]},
$aw:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aC:function(){return[W.I]}}
W.kn.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib_")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$in:1,
$an:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.kr.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaO")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.jW.prototype={}
W.m1.prototype={}
W.jX.prototype={
jM:function(){var u=this.d
if(u!=null&&this.a<=0)J.o_(this.b,this.c,u,!1)}}
W.jY.prototype={
$1:function(a){return this.a.$1(H.d(a,"$iq"))},
$S:30}
W.C.prototype={
ga6:function(a){return new W.dJ(a,this.gk(a),-1,[H.bS(this,a,"C",0)])}}
W.dJ.prototype={
H:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdW(J.Z(this.a,u))
this.c=u
return!0}this.sdW(null)
this.c=t
return!1},
gW:function(a){return this.d},
sdW:function(a){this.d=H.y(a,H.u(this,0))},
$iaN:1}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.fb.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
P.kp.prototype={
eY:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
c8:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Y(a)
if(!!t.$iaC)return new Date(a.a)
if(!!t.$ioM)throw H.c(P.jm("structured clone of RegExp"))
if(!!t.$iaM)return a
if(!!t.$ibY)return a
if(!!t.$icF)return a
if(!!t.$ibr)return a
if(!!t.$icO||!!t.$ibN)return a
if(!!t.$iA){s=this.eY(a)
r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.m(r,s,q)
t.v(a,new P.kq(u,this))
return u.a}if(!!t.$ib){s=this.eY(a)
u=this.b
if(s>=u.length)return H.e(u,s)
q=u[s]
if(q!=null)return q
return this.kF(a,s)}throw H.c(P.jm("structured clone of other type"))},
kF:function(a,b){var u,t,s,r
u=J.cr(a)
t=u.gk(a)
s=new Array(t)
C.a.m(this.b,b,s)
for(r=0;r<t;++r)C.a.m(s,r,this.c8(u.i(a,r)))
return s}}
P.kq.prototype={
$2:function(a,b){this.a.a[a]=this.b.c8(b)},
$S:10}
P.fn.prototype={$ibr:1,
gey:function(a){return this.a}}
P.kQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.fe.prototype={}
P.hg.prototype={
gby:function(){var u,t,s
u=this.b
t=H.aS(u,"w",0)
s=W.a5
return new H.i3(new H.jI(u,H.j(new P.hh(),{func:1,ret:P.K,args:[t]}),[t]),H.j(new P.hi(),{func:1,ret:s,args:[t]}),[t,s])},
m:function(a,b,c){var u
H.d(c,"$ia5")
u=this.gby()
J.o2(u.b.$1(J.lD(u.a,b)),c)},
h:function(a,b){J.mj(this.b.a,b)},
gk:function(a){return J.aA(this.gby().a)},
i:function(a,b){var u=this.gby()
return u.b.$1(J.lD(u.a,b))},
ga6:function(a){var u=P.os(this.gby(),!1,W.a5)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$aw:function(){return[W.a5]},
$an:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
P.hh.prototype={
$1:function(a){return!!J.Y(H.d(a,"$iI")).$ia5},
$S:31}
P.hi.prototype={
$1:function(a){return H.m(H.d(a,"$iI"),"$ia5")},
$S:32}
P.kg.prototype={
gc2:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.y(u+this.c,H.u(this,0))},
geq:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.y(u+this.d,H.u(this,0))},
j:function(a){return"Rectangle ("+H.o(this.a)+", "+H.o(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.bA(b,"$iaf",[P.a9],"$aaf")){u=this.a
t=J.bD(b)
if(u==t.gc0(b)){s=this.b
if(s==t.gc5(b)){if(typeof u!=="number")return u.n()
r=H.u(this,0)
if(H.y(u+this.c,r)===t.gc2(b)){if(typeof s!=="number")return s.n()
u=H.y(s+this.d,r)===t.geq(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.du(u)
s=this.b
r=J.du(s)
if(typeof u!=="number")return u.n()
q=H.u(this,0)
u=C.e.gJ(H.y(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.e.gJ(H.y(s+this.d,q))
return P.p5(P.kd(P.kd(P.kd(P.kd(0,t),r),u),q))}}
P.af.prototype={
gc0:function(a){return this.a},
gc5:function(a){return this.b},
gaR:function(a){return this.c},
gaO:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.hT.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aD(a,b)},
m:function(a,b,c){H.d(c,"$ibe")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
aD:function(a,b){return a.getItem(b)},
$aw:function(){return[P.be]},
$in:1,
$an:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aC:function(){return[P.be]}}
P.bh.prototype={$ibh:1}
P.ip.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aD(a,b)},
m:function(a,b,c){H.d(c,"$ibh")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
aD:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bh]},
$in:1,
$an:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aC:function(){return[P.bh]}}
P.iv.prototype={
gk:function(a){return a.length}}
P.iY.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aD(a,b)},
m:function(a,b,c){H.L(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
aD:function(a,b){return a.getItem(b)},
$aw:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aC:function(){return[P.h]}}
P.v.prototype={
gcU:function(a){return new P.hg(a,new W.jS(a))}}
P.bl.prototype={$ibl:1}
P.ja.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aD(a,b)},
m:function(a,b,c){H.d(c,"$ibl")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
aD:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bl]},
$in:1,
$an:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aC:function(){return[P.bl]}}
P.eR.prototype={}
P.eS.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fc.prototype={}
P.fd.prototype={}
P.fl.prototype={}
P.fm.prototype={}
P.R.prototype={$in:1,
$an:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$ioU:1}
P.fJ.prototype={
gk:function(a){return a.length}}
P.fK.prototype={
i:function(a,b){return P.bB(a.get(H.L(b)))},
v:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaC:function(a){var u=H.f([],[P.h])
this.v(a,new P.fL(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.F("Not supported"))},
$aax:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
P.fL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
P.fM.prototype={
gk:function(a){return a.length}}
P.bX.prototype={}
P.iq.prototype={
gk:function(a){return a.length}}
P.eE.prototype={}
P.dy.prototype={$idy:1}
P.dK.prototype={$idK:1}
P.ea.prototype={$iea:1}
P.cd.prototype={
el:function(a,b){return a.activeTexture(b)},
eo:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
kx:function(a,b,c){return a.bindFramebuffer(b,c)},
aZ:function(a,b,c){return a.bindTexture(b,c)},
aM:function(a,b,c){return a.blendFunc(b,c)},
er:function(a,b,c,d){return a.bufferData(b,c,d)},
ky:function(a,b){return a.clear(b)},
kz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
kA:function(a,b){return a.clearDepth(b)},
kB:function(a,b){return a.compileShader(b)},
kG:function(a,b){return a.createShader(b)},
kI:function(a,b){return a.deleteProgram(b)},
kJ:function(a,b){return a.deleteShader(b)},
kM:function(a,b){return a.depthFunc(b)},
cX:function(a,b){return a.disable(b)},
eA:function(a,b){return a.disableVertexAttribArray(b)},
kN:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aA:function(a,b){return a.enable(b)},
eC:function(a,b){return a.enableVertexAttribArray(b)},
fF:function(a,b){return a.generateMipmap(b)},
fG:function(a,b,c){return a.getActiveAttrib(b,c)},
fH:function(a,b,c){return a.getActiveUniform(b,c)},
fI:function(a,b,c){return a.getAttribLocation(b,c)},
dm:function(a,b){return a.getParameter(b)},
fK:function(a,b){return a.getProgramInfoLog(b)},
cb:function(a,b,c){return a.getProgramParameter(b,c)},
fL:function(a,b){return a.getShaderInfoLog(b)},
fM:function(a,b,c){return a.getShaderParameter(b,c)},
fN:function(a,b,c){return a.getUniformLocation(b,c)},
l6:function(a,b){return a.linkProgram(b)},
lt:function(a,b,c){return a.pixelStorei(b,c)},
fR:function(a,b,c){return a.shaderSource(b,c)},
lJ:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Y(g)
if(!!u.$ibr)t=!0
else t=!1
if(t){this.jB(a,b,c,d,e,f,P.pA(g))
return}if(!!u.$icI)u=!0
else u=!1
if(u){this.jC(a,b,c,d,e,f,g)
return}throw H.c(P.dv("Incorrect number or type of arguments"))},
lI:function(a,b,c,d,e,f,g){return this.lJ(a,b,c,d,e,f,g,null,null,null)},
jB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
P:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
lO:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dj:function(a,b){return a.useProgram(b)},
lP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lR:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$icd:1}
P.ec.prototype={$iec:1}
P.ej.prototype={$iej:1}
P.es.prototype={$ies:1}
P.iR.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bB(this.i1(a,b))},
m:function(a,b,c){H.d(c,"$iA")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
i1:function(a,b){return a.item(b)},
$aw:function(){return[[P.A,,,]]},
$in:1,
$an:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$aC:function(){return[[P.A,,,]]}}
P.f8.prototype={}
P.f9.prototype={}
O.aa.prototype={
cf:function(a){this.se_(H.f([],[a]))
this.se4(null)
this.se1(null)
this.se5(null)},
dq:function(a,b,c){var u=H.aS(this,"aa",0)
H.j(b,{func:1,ret:P.K,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.p,[P.n,u]]}
H.j(a,u)
H.j(c,u)
this.se4(b)
this.se1(a)
this.se5(c)},
bu:function(a,b){return this.dq(a,null,b)},
iW:function(a){var u
H.k(a,"$in",[H.aS(this,"aa",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
h0:function(a,b){var u
H.k(b,"$in",[H.aS(this,"aa",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga6:function(a){var u=this.a
return new J.aw(u,u.length,0,[H.u(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aS(this,"aa",0)
H.y(b,u)
u=[u]
if(this.iW(H.f([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.h0(s,H.f([b],u))}},
i:function(a,b){var u=this.a
if(b>=u.length)return H.e(u,b)
return u[b]},
se_:function(a){this.a=H.k(a,"$ib",[H.aS(this,"aa",0)],"$ab")},
se4:function(a){this.b=H.j(a,{func:1,ret:P.K,args:[[P.n,H.aS(this,"aa",0)]]})},
se1:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.p,[P.n,H.aS(this,"aa",0)]]})},
se5:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.p,[P.n,H.aS(this,"aa",0)]]})},
$in:1}
O.cL.prototype={
gk:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
h1:function(a){var u=this.b
if(u!=null)u.M(a)},
aT:function(){return this.h1(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaP(u)
else return V.e1()},
fm:function(a){var u=this.a
if(a==null)C.a.h(u,V.e1())
else C.a.h(u,a)
this.aT()},
de:function(){var u=this.a
if(u.length>0){u.pop()
this.aT()}},
scq:function(a){this.a=H.k(a,"$ib",[V.aD],"$ab")}}
E.fP.prototype={}
E.a3.prototype={
dK:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();){t=u.d
if(t.f==null)t.dK()}},
sdr:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().a3(0,this.gfe())
t=this.c
if(t!=null)t.gC().h(0,this.gfe())
s=new D.D("shape",u,this.c,this,[F.ao])
s.b=!0
this.ag(s)}},
sb8:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gC().a3(0,this.gfg())
t=this.f
this.f=a
if(a!=null)a.gC().h(0,this.gfg())
this.dK()
s=new D.D("technique",t,this.f,this,[O.bP])
s.b=!0
this.ag(s)}},
sbj:function(a){var u,t
if(!J.a_(this.r,a)){u=this.r
if(u!=null)u.gC().a3(0,this.gfc())
if(a!=null)a.gC().h(0,this.gfc())
this.r=a
t=new D.D("mover",u,a,this,[U.ar])
t.b=!0
this.ag(t)}},
bg:function(){var u,t
u=this.d
t=u!=null?V.mP(null,u.bg()):null
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)t=V.mP(t,u.d.bg())
return t},
lD:function(a,b){var u,t,s,r,q,p,o,n
u=this.bg()
b=V.lU()
t=u.a
s=u.d
if(typeof t!=="number")return t.n()
r=u.b
q=u.e
if(typeof r!=="number")return r.n()
p=u.c
o=u.f
if(typeof p!=="number")return p.n()
b=b.p(0,new V.aE(t+s/2,r+q/2,p+o/2))
if(q>s)s=q
if(o>s)s=o
if(s===0)return
n=a/s
this.bH(V.mC(n,n,n,1).l(0,V.mD(b.a,b.b,b.c)))},
lC:function(a){return this.lD(a,null)},
bH:function(a){var u=this.c
if(u!=null)u.bH(a)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)u.d.bH(a)},
an:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.ba(0,b,this):null
if(!J.a_(t,this.x)){s=this.x
this.x=t
r=new D.D("matrix",s,t,this,[V.aD])
r.b=!0
this.ag(r)}u=this.f
if(u!=null)u.an(0,b)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)u.d.an(0,b)},
aQ:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.l(0,u.ga1(u)))
u.aT()
a.fn(this.f)
u=a.dy
s=(u&&C.a).gaP(u)
if(s!=null&&this.d!=null)s.fp(a,this)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)u.d.aQ(a)
a.fk()
a.dx.de()},
gC:function(){var u=this.z
if(u==null){u=D.W()
this.z=u}return u},
ag:function(a){var u=this.z
if(u!=null)u.M(a)},
a5:function(){return this.ag(null)},
ff:function(a){H.d(a,"$iB")
this.e=null
this.ag(a)},
lh:function(){return this.ff(null)},
fh:function(a){this.ag(H.d(a,"$iB"))},
li:function(){return this.fh(null)},
fd:function(a){this.ag(H.d(a,"$iB"))},
lg:function(){return this.fd(null)},
fb:function(a){this.ag(H.d(a,"$iB"))},
ld:function(){return this.fb(null)},
lc:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$in",[E.a3],"$an")
for(u=b.length,t=this.gfa(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bK()
o.sao(null)
o.sbd(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sao(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
lf:function(a,b){var u,t,s,r,q
H.k(b,"$in",[E.a3],"$an")
for(u=b.length,t=this.gfa(),s=0;s<b.length;b.length===u||(0,H.G)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bK()
q.sao(null)
q.sbd(null)
q.c=null
q.d=0
r.z=q}q.a3(0,t)}}this.a5()},
j:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh2:function(a,b){this.y=H.k(b,"$iaa",[E.a3],"$aaa")},
$ibv:1}
E.iA.prototype={
fY:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aC(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cL()
t=[V.aD]
u.scq(H.f([],t))
u.b=null
u.gC().h(0,new E.iB(this))
this.cy=u
u=new O.cL()
u.scq(H.f([],t))
u.b=null
u.gC().h(0,new E.iC(this))
this.db=u
u=new O.cL()
u.scq(H.f([],t))
u.b=null
u.gC().h(0,new E.iD(this))
this.dx=u
this.sjA(H.f([],[O.bP]))
u=this.dy;(u&&C.a).h(u,null)
this.sjs(new H.aI([P.h,A.cV]))},
gly:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.l(0,t.ga1(t))
this.z=t
u=t}return u},
gfl:function(){var u,t
u=this.ch
if(u==null){u=this.gly()
t=this.dx
t=u.l(0,t.ga1(t))
this.ch=t
u=t}return u},
gfE:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.ga1(u)
t=this.dx
t=u.l(0,t.ga1(t))
this.cx=t
u=t}return u},
fn:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaP(u):a;(u&&C.a).h(u,t)},
fk:function(){var u=this.dy
if(u.length>1)u.pop()},
en:function(a){var u=a.b
if(u.length===0)throw H.c(P.r("May not cache a shader with no name."))
if(this.fr.bJ(0,u))throw H.c(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)},
sjA:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
sjs:function(a){this.fr=H.k(a,"$iA",[P.h,A.cV],"$aA")}}
E.iB.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:14}
E.iC.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:14}
E.iD.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:14}
E.eo.prototype={
dB:function(a){H.d(a,"$iB")
this.fq()},
dA:function(){return this.dB(null)},
gkZ:function(){var u,t,s
u=Date.now()
t=C.e.a8(P.mr(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aC(u,!1)
return s/t},
ea:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.i(u)
s=C.j.c_(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.l()
r=C.j.c_(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mU(C.v,this.glB())}},
fq:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.j4(this),{func:1,ret:-1,args:[P.a9]})
C.J.hG(u)
C.J.jj(u,W.np(t,P.a9))}},
lz:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ea()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aC(r,!1)
s.y=P.mr(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aT()
r=s.db
C.a.sk(r.a,0)
r.aT()
r=s.dx
C.a.sk(r.a,0)
r.aT()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aQ(this.e)}}catch(q){u=H.al(q)
t=H.bU(q)
P.fB("Error: "+H.o(u))
P.fB("Stack: "+H.o(t))
throw H.c(u)}}}
E.j4.prototype={
$1:function(a){var u
H.pR(a)
u=this.a
if(u.ch){u.ch=!1
u.lz()}},
$S:36}
Z.eA.prototype={$ipY:1}
Z.dz.prototype={
aL:function(a){var u,t,s
try{t=a.a
C.b.eC(t,this.e)
C.b.lP(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.al(s)
t=P.r('Failed to bind buffer attribute "'+this.a.j(0)+'": '+H.o(u))
throw H.c(t)}},
j:function(a){return"["+this.a.j(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.o(this.e)+"]"}}
Z.eB.prototype={$ipZ:1}
Z.bH.prototype={
ak:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aL:function(a){var u,t
u=this.a
C.b.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aL(a)},
fw:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eA(s,u[t].e)
C.b.ay(s,this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ay(t,p,r.b)
C.b.kN(t,q.a,q.b,5123,0)
C.b.ay(t,p,null)}},
fi:function(a){this.aL(a)
this.aQ(a)
this.fw(a)},
j:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.f([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q)C.a.h(t,s[q].j(0))
p=H.f([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aK(u[q]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.G(t,", ")+"\nAttrs:   "+C.a.G(p,", ")},
si_:function(a){this.b=H.k(a,"$ib",[Z.bL],"$ab")},
$ioR:1}
Z.dA.prototype={
sia:function(a){this.a=H.k(a,"$iA",[P.h,Z.bH],"$aA")},
$ioR:1}
Z.bL.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ca(this.c)+"'")+"]"}}
Z.b4.prototype={
gds:function(a){var u,t
u=this.a
t=(u&$.b7().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.bF().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.bW().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.cu().a)!==0)++t
return(u&$.bE().a)!==0?t+4:t},
kv:function(a){var u,t,s
u=$.b7()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bF()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ds()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bE()
if((t&u.a)!==0)if(s===a)return u
return $.nV()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
j:function(a){var u,t
u=H.f([],[P.h])
t=this.a
if((t&$.b7().a)!==0)C.a.h(u,"Pos")
if((t&$.b6().a)!==0)C.a.h(u,"Norm")
if((t&$.b5().a)!==0)C.a.h(u,"Binm")
if((t&$.bF().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bW().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.cu().a)!==0)C.a.h(u,"Weight")
if((t&$.bE().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.G(u,"|")}}
D.fS.prototype={}
D.bK.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.j(b,u)
if(this.a==null)this.sao(H.f([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a3:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.b3(u,b)
if(u===!0){u=this.a
t=(u&&C.a).a3(u,b)||!1}else t=!1
return t},
M:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.B(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.v(t,new D.he(u))
return!0},
kP:function(){return this.M(null)},
lE:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.M(t)}}},
b7:function(a){return this.lE(a,!0,!1)},
sao:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
sbd:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.he.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:37}
D.B.prototype={}
D.c6.prototype={}
D.c7.prototype={}
D.D.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.o(this.d)+" => "+H.o(this.e)}}
O.kK.prototype={
as:function(a,b,c){var u=0,t=P.aj(null),s=this
var $async$as=P.ak(function(d,e){if(d===1)return P.ag(e,t)
while(true)switch(u){case 0:u=2
return P.au(s.ar(H.f(a.split("\n"),[P.h]),b,!1),$async$as)
case 2:return P.ah(null,t)}})
return P.ai($async$as,t)},
ar:function(a,b,c){H.k(a,"$ib",[P.h],"$ab")
return this.lw(a,b,!1)},
lw:function(a,b,c){var u=0,t=P.aj(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ar=P.ak(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.mi(o,a.length)){u=4
break}s=6
u=9
return P.au(p.a7(C.a.i(a,o),b,!1),$async$ar)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.al(k)
l=P.r("Line "+H.o(J.fC(o,1))+": "+H.o(n))
throw H.c(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fC(o,1)
u=2
break
case 4:return P.ah(null,t)
case 1:return P.ag(r,t)}})
return P.ai($async$ar,t)},
a7:function(a,b,c){return this.lu(a,b,!1)},
lu:function(a,b,c){var u=0,t=P.aj(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a7=P.ak(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.mk(a,"#")
if(J.mh(n,0))a=J.ml(a,0,n)
a=J.lF(a)
if(J.aA(a)<=0){u=1
break}m=O.nn(a)
if(J.aA(m)<1){u=1
break}case 7:switch(J.Z(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.Z(m,1)
j=O.mB()
o.c=j
o.b.m(0,k,j)
u=1
break
case 10:i=O.bz(J.Z(m,1))
o.c.r.sV(0,V.lK(i))
u=1
break
case 11:i=O.bz(J.Z(m,1))
o.c.x.sV(0,V.lK(i))
u=1
break
case 12:i=O.bz(J.Z(m,1))
o.c.z.sV(0,V.lK(i))
u=1
break
case 13:i=O.bz(J.Z(m,1))
k=i.length
if(k!==1)H.t(P.r("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.e(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0)j.eu(0)
else if(j.c===C.d){j.c=C.i
j.ce()
j.bE(100)
k=j.a
k.a=null
k.D(null)}j.bE(h)
u=1
break
case 14:i=O.bz(J.Z(m,1))
k=i.length
if(k!==1)H.t(P.r("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}j.sfD(0,i[0])
u=1
break
case 15:i=O.bz(J.Z(m,1))
k=i.length
if(k!==1)H.t(P.r("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.i(k)
u=1
break}j.sfD(0,1-k)
u=1
break
case 16:u=23
return P.au(o.cF(J.Z(m,1),b),$async$a7)
case 23:u=1
break
case 17:u=24
return P.au(o.cG(J.Z(m,1),b),$async$a7)
case 24:u=1
break
case 18:u=25
return P.au(o.cH(J.Z(m,1),b),$async$a7)
case 25:u=1
break
case 19:u=26
return P.au(o.cE(J.Z(m,1),b),$async$a7)
case 26:u=1
break
case 20:u=27
return P.au(o.bz(J.Z(m,1),b),$async$a7)
case 27:u=1
break
case 21:u=28
return P.au(o.bz(J.Z(m,1),b),$async$a7)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.al(f)
k=P.r('Line: "'+H.o(a)+'": '+H.o(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$a7,t)},
cF:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$cF=P.ak(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sbp(s.a.bi(r))
return P.ah(null,t)}})
return P.ai($async$cF,t)},
cG:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$cG=P.ak(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sbp(s.a.bi(r))
return P.ah(null,t)}})
return P.ai($async$cG,t)},
cH:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$cH=P.ak(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sbp(s.a.bi(r))
return P.ah(null,t)}})
return P.ai($async$cH,t)},
cE:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$cE=P.ak(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sbp(s.a.bi(r))
return P.ah(null,t)}})
return P.ai($async$cE,t)},
bz:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$bz=P.ak(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sbp(s.a.bi(r))
return P.ah(null,t)}})
return P.ai($async$bz,t)},
scA:function(a){this.b=H.k(a,"$iA",[P.h,O.aV],"$aA")}}
O.dq.prototype={
slQ:function(a){this.b=H.k(a,"$ib",[F.H],"$ab")}}
O.kL.prototype={
gkS:function(){var u,t,s
u=this.Q
t=u.y.a
s=t.length
if(s===1){if(0>=s)return H.e(t,0)
return t[0]}return u},
as:function(a,b,c){var u=0,t=P.aj(null),s=this
var $async$as=P.ak(function(d,e){if(d===1)return P.ag(e,t)
while(true)switch(u){case 0:u=2
return P.au(s.ar(H.f(a.split("\n"),[P.h]),b,!1),$async$as)
case 2:return P.ah(null,t)}})
return P.ai($async$as,t)},
ar:function(a,b,c){H.k(a,"$ib",[P.h],"$ab")
return this.lx(a,b,!1)},
lx:function(a,b,c){var u=0,t=P.aj(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ar=P.ak(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.mi(o,a.length)){u=4
break}s=6
u=9
return P.au(p.a7(C.a.i(a,o),b,!1),$async$ar)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.al(k)
l=P.r("Line "+H.o(J.fC(o,1))+": "+H.o(n))
throw H.c(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fC(o,1)
u=2
break
case 4:return P.ah(null,t)
case 1:return P.ag(r,t)}})
return P.ai($async$ar,t)},
a7:function(a,b,c){return this.lv(a,b,!1)},
lv:function(a,b,c){var u=0,t=P.aj(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a7=P.ak(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.mk(a,"#")
if(J.mh(n,0))a=J.ml(a,0,n)
a=J.lF(a)
if(J.aA(a)<=0){u=1
break}m=O.nn(a)
if(J.aA(m)<1){u=1
break}case 7:switch(J.Z(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:k=O.bz(J.Z(m,1))
j=k.length
if(j<3)H.t(P.r("Positions must have at least 3 numbers."))
if(j>4)H.t(P.r("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.e(k,3)
u=1
break}i=k[3]
h=$.P()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-1)<h.a))H.t(P.r("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.dq(new V.aE(g[0],g[1],g[2]))
g.slQ(H.f([],[F.H]))
C.a.h(i,g)
u=1
break
case 10:k=O.bz(J.Z(m,1))
j=k.length
if(j<2)H.t(P.r("Textures must have at least 2 numbers."))
if(j>3)H.t(P.r("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.e(k,2)
u=1
break}i=k[2]
h=$.P()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-0)<h.a))H.t(P.r("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.am(h[0],h[1]))
u=1
break
case 11:k=O.bz(J.Z(m,1))
j=k.length
if(j!==3)H.t(P.r("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}C.a.h(i,new V.a4(h,g,k[2]))
u=1
break
case 12:o.jd(J.Z(m,1))
u=1
break
case 13:o.jc(J.Z(m,1))
u=1
break
case 14:o.jb(J.Z(m,1))
u=1
break
case 15:u=20
return P.au(o.bA(J.Z(m,1),b,!1),$async$a7)
case 20:u=1
break
case 16:j=J.Z(m,1)
o.x=H.d(o.e.i(0,j),"$iaV")
o.bF()
u=1
break
case 17:o.r=H.L(J.Z(m,1))
o.bF()
u=1
break
case 18:o.r=H.L(J.Z(m,1))
o.bF()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.al(e)
j=P.r('Line: "'+H.o(a)+'": '+H.o(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$a7,t)},
bF:function(){var u,t,s
if(this.z==null||this.y.a.c.length!==0){u=F.as()
this.y=u
u=E.hb(null,!0,null,"",u,null)
this.z=u
this.Q.y.h(0,u)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.sk(u[s].b,0)}this.z.sb8(this.x)
this.z.a=this.r},
ci:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=a.split("/")
t=u.length
if(0>=t)return H.e(u,0)
s=P.bV(u[0],null,null)
r=this.b.length
if(typeof s!=="number")return s.E()
if(s<-r||s>r||s===0)throw H.c(P.r("The position index, "+s+", was out of range [-"+r+".."+r+"] or 0."))
if(s<0)s=r+s+1;--s
if(t>1){q=u[1]
if(q!=null&&q.length>0){p=P.bV(q,null,null)
o=this.c
r=o.length
if(typeof p!=="number")return p.E()
if(p<-r||p>r||p===0)throw H.c(P.r("The texture index, "+p+", was out of range [-"+r+".."+r+"] or 0."))
if(p<0)p=r+p+1
n=p-1
if(n<0||n>=r)return H.e(o,n)
m=o[n]}else m=null}else m=null
if(t>2){q=u[2]
if(q!=null&&q.length>0){l=P.bV(q,null,null)
t=this.d
r=t.length
if(typeof l!=="number")return l.E()
if(l<-r||l>r||l===0)throw H.c(P.r("The normal index, "+l+", was out of range [-"+r+".."+r+"] or 0."))
if(l<0)l=r+l+1
o=l-1
if(o<0||o>=r)return H.e(t,o)
k=t[o]}else k=null}else k=null
t=this.b
if(s<0||s>=t.length)return H.e(t,s)
j=t[s]
for(t=j.b,o=t.length,i=0;i<t.length;t.length===o||(0,H.G)(t),++i){h=t[i]
if(J.a_(h.y,m)&&J.a_(h.r,k))return h}h=F.cg(null,null,null,null,null,null,null,null,0)
h.saa(0,j.a)
if(!J.a_(h.y,m)){h.y=m
t=h.a
if(t!=null)t.a5()}h.sbk(k)
this.y.a.h(0,h)
C.a.h(j.b,h)
return h},
jd:function(a){var u,t,s,r
u=O.kO(a)
t=H.f([],[F.H])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.ci(u[r]))}this.y.b.ku(t)},
jc:function(a){var u,t,s,r
u=O.kO(a)
t=H.f([],[F.H])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.ci(u[r]))}this.y.c.kt(t)},
jb:function(a){var u,t,s,r
u=O.kO(a)
t=H.f([],[F.H])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.ci(u[r]))}this.y.d.ks(t)},
bA:function(a,b,c){var u=0,t=P.aj(null),s=this,r
var $async$bA=P.ak(function(d,e){if(d===1)return P.ag(e,t)
while(true)switch(u){case 0:u=2
return P.au(O.e2(b+"/"+a,s.a,!1),$async$bA)
case 2:r=e
s.e.kp(0,r)
return P.ah(null,t)}})
return P.ai($async$bA,t)},
sj9:function(a){this.b=H.k(a,"$ib",[O.dq],"$ab")},
sjD:function(a){this.c=H.k(a,"$ib",[V.am],"$ab")},
sig:function(a){this.d=H.k(a,"$ib",[V.a4],"$ab")},
scA:function(a){this.e=H.k(a,"$iA",[P.h,O.aV],"$aA")}}
X.dB.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.o(this.a)}}
X.dT.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.o(this.a)}}
X.hS.prototype={
lq:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
lm:function(a){this.c=a.b
this.d.a3(0,a.a)
return!1},
sja:function(a){this.d=H.k(a,"$imR",[P.p],"$amR")}}
X.dX.prototype={}
X.i_.prototype={
bc:function(a,b){var u,t,s,r,q,p,o,n,m
u=new P.aC(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.l()
q=b.b
p=this.ch
if(typeof q!=="number")return q.l()
o=t.a
if(typeof o!=="number")return o.n()
t=t.b
if(typeof t!=="number")return t.n()
n=new V.am(o+s*r,t+q*p)
p=this.a.gb1()
m=new X.bu(a,V.bO(),this.x,this.y,this.z,p,n,u,this)
m.b=!0
this.z=u
this.x=n
return m},
dd:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fO()
if(typeof u!=="number")return u.c9()
this.r=(u&~t)>>>0
return!1},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.bc(a,b))
return!0},
lr:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb1()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.l()
o=a.b
n=this.cy
if(typeof o!=="number")return o.l()
r=new X.cN(new V.X(q*p,o*n),t,s,new P.aC(r,!1),this)
r.b=!0
u.M(r)
return!0},
iL:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aC(Date.now(),!1)
t=this.f
s=new X.dX(c,a,this.a.gb1(),b,u,this)
s.b=!0
t.M(s)
this.y=u
this.x=V.bO()}}
X.aL.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aL))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bu.prototype={}
X.ih.prototype={
co:function(a,b,c){var u,t,s
u=new P.aC(Date.now(),!1)
t=this.a.gb1()
s=new X.bu(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
dd:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.M(this.co(a,b,!0))
return!0},
bm:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fO()
if(typeof u!=="number")return u.c9()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.M(this.co(a,b,!0))
return!0},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.co(a,b,!1))
return!0},
ls:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb1()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.l()
p=a.b
o=this.ch
if(typeof p!=="number")return p.l()
s=new X.cN(new V.X(r*q,p*o),t,b,new P.aC(s,!1),this)
s.b=!0
u.M(s)
return!0},
geB:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
gc7:function(){var u=this.c
if(u==null){u=D.W()
this.c=u}return u},
gf9:function(){var u=this.d
if(u==null){u=D.W()
this.d=u}return u}}
X.cN.prototype={}
X.iu.prototype={}
X.eq.prototype={}
X.j7.prototype={
bc:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.am],"$ab")
u=new P.aC(Date.now(),!1)
t=a.length>0?a[0]:V.bO()
s=this.a.gb1()
r=new X.eq(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
lp:function(a){var u
H.k(a,"$ib",[V.am],"$ab")
u=this.b
if(u==null)return!1
u.M(this.bc(a,!0))
return!0},
ln:function(a){var u
H.k(a,"$ib",[V.am],"$ab")
u=this.c
if(u==null)return!1
u.M(this.bc(a,!0))
return!0},
lo:function(a){var u
H.k(a,"$ib",[V.am],"$ab")
u=this.d
if(u==null)return!1
u.M(this.bc(a,!1))
return!0}}
X.ew.prototype={
gb1:function(){var u=this.a
return V.mM(0,0,C.o.gev(u).c,C.o.gev(u).d)},
dP:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dT(u,new X.aL(t,a.altKey,a.shiftKey))},
aX:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aL(t,a.altKey,a.shiftKey)},
cL:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aL(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.am(t-r,s-q)},
be:function(a){return new V.X(a.movementX,a.movementY)},
cI:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.f([],[V.am])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
o=C.j.at(p.pageX)
C.j.at(p.pageY)
n=u.left
C.j.at(p.pageX)
C.a.h(t,new V.am(o-n,C.j.at(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dB(u,new X.aL(t,a.altKey,a.shiftKey))},
cr:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.p()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
iF:function(a){this.f=!0},
it:function(a){this.f=!1},
iz:function(a){H.d(a,"$iaq")
if(this.f&&this.cr(a))a.preventDefault()},
iJ:function(a){var u
H.d(a,"$ibd")
if(!this.f)return
u=this.dP(a)
this.b.lq(u)},
iH:function(a){var u
H.d(a,"$ibd")
if(!this.f)return
u=this.dP(a)
this.b.lm(u)},
iN:function(a){var u,t,s,r
H.d(a,"$iaq")
u=this.a
u.focus()
this.f=!0
this.aX(a)
if(this.x){t=this.aG(a)
s=this.be(a)
if(this.d.dd(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aK(a)
if(this.c.dd(t,r))a.preventDefault()},
iR:function(a){var u,t,s
H.d(a,"$iaq")
this.aX(a)
u=this.aG(a)
if(this.x){t=this.be(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bm(u,s))a.preventDefault()},
iD:function(a){var u,t,s
H.d(a,"$iaq")
if(!this.cr(a)){this.aX(a)
u=this.aG(a)
if(this.x){t=this.be(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bm(u,s))a.preventDefault()}},
iP:function(a){var u,t,s
H.d(a,"$iaq")
this.aX(a)
u=this.aG(a)
if(this.x){t=this.be(a)
if(this.d.bl(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bl(u,s))a.preventDefault()},
iB:function(a){var u,t,s
H.d(a,"$iaq")
if(!this.cr(a)){this.aX(a)
u=this.aG(a)
if(this.x){t=this.be(a)
if(this.d.bl(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bl(u,s))a.preventDefault()}},
iT:function(a){var u,t
H.d(a,"$ibn")
this.aX(a)
u=new V.X((a&&C.I).gkK(a),C.I.gkL(a)).w(0,180)
if(this.x){if(this.d.lr(u))a.preventDefault()
return}if(this.r)return
t=this.aK(a)
if(this.c.ls(u,t))a.preventDefault()},
iV:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aK(this.y)
this.d.iL(t,s,u)}},
j7:function(a){var u
H.d(a,"$ib2")
this.a.focus()
this.f=!0
this.cL(a)
u=this.cI(a)
if(this.e.lp(u))a.preventDefault()},
j3:function(a){var u
H.d(a,"$ib2")
this.cL(a)
u=this.cI(a)
if(this.e.ln(u))a.preventDefault()},
j5:function(a){var u
H.d(a,"$ib2")
this.cL(a)
u=this.cI(a)
if(this.e.lo(u))a.preventDefault()},
shH:function(a){this.z=H.k(a,"$ib",[[P.cZ,P.N]],"$ab")}}
D.dF.prototype={$iac:1,$ibv:1}
D.ac.prototype={$ibv:1}
D.dV.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.W()
this.Q=u}return u},
dC:function(a){var u=this.Q
if(u!=null)u.M(a)},
e3:function(a){var u=this.ch
if(u!=null)u.M(a)},
iK:function(){return this.e3(null)},
iY:function(a){var u,t,s
H.k(a,"$in",[D.ac],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(s==null||this.hB(s))return!1}return!0},
im:function(a,b){var u,t,s,r,q
u=D.ac
H.k(b,"$in",[u],"$an")
for(t=b.length,s=this.ge2(),r=0;r<b.length;b.length===t||(0,H.G)(b),++r){q=H.d(b[r],"$iac")
q.gC().h(0,s)}u=new D.c6(a,b,this,[u])
u.b=!0
this.dC(u)},
j1:function(a,b){var u,t,s,r,q
u=D.ac
H.k(b,"$in",[u],"$an")
for(t=b.length,s=this.ge2(),r=0;r<b.length;b.length===t||(0,H.G)(b),++r){q=H.d(b[r],"$iac")
q.gC().a3(0,s)}u=new D.c7(a,b,this,[u])
u.b=!0
this.dC(u)},
hB:function(a){var u=C.a.b3(this.e,a)
return u},
shF:function(a){this.e=H.k(a,"$ib",[D.dF],"$ab")},
sj8:function(a){this.f=H.k(a,"$ib",[D.e8],"$ab")},
sjw:function(a){this.r=H.k(a,"$ib",[D.ed],"$ab")},
sjR:function(a){this.x=H.k(a,"$ib",[D.el],"$ab")},
sjS:function(a){this.y=H.k(a,"$ib",[D.em],"$ab")},
sjT:function(a){this.z=H.k(a,"$ib",[D.en],"$ab")},
$an:function(){return[D.ac]},
$aaa:function(){return[D.ac]}}
D.e8.prototype={$iac:1,$ibv:1}
D.ed.prototype={$iac:1,$ibv:1}
D.el.prototype={$iac:1,$ibv:1}
D.em.prototype={$iac:1,$ibv:1}
D.en.prototype={$iac:1,$ibv:1}
V.a1.prototype={
n:function(a,b){var u,t,s
u=this.a+b.a
t=this.b+b.b
s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.S.prototype={
n:function(a,b){var u,t,s,r
u=C.j.n(this.a,b.gm3())
t=C.j.n(this.b,b.glT())
s=C.j.n(this.c,b.glV())
r=C.j.n(this.d,b.glU(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.S(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.hc.prototype={}
V.e0.prototype={
ab:function(a,b){var u=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.E])
return u},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e0))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){var u,t,s,r,q,p,o,n
u=[P.E]
t=V.cp(H.f([this.a,this.d,this.r],u),3,0)
s=V.cp(H.f([this.b,this.e,this.x],u),3,0)
r=V.cp(H.f([this.c,this.f,this.y],u),3,0)
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
V.aD.prototype={
ab:function(a,b){var u=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.E])
return u},
f7:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.b
r=this.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=u*t-s*r
p=this.r
if(typeof p!=="number")return H.i(p)
o=this.c
if(typeof o!=="number")return o.l()
n=u*p-o*r
m=this.x
if(typeof m!=="number")return H.i(m)
l=this.d
if(typeof l!=="number")return l.l()
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.l()
e=this.z
d=this.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=this.dx
a2=this.ch
if(typeof a2!=="number")return a2.l()
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.P().a)return V.e1()
a8=1/a7
a9=-r
b0=-d
return V.bg((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.b
r=b2.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=this.c
p=b2.y
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.i(p)
o=this.d
n=b2.cx
if(typeof o!=="number")return o.l()
m=b2.b
if(typeof m!=="number")return H.i(m)
l=b2.f
if(typeof l!=="number")return H.i(l)
k=b2.z
if(typeof k!=="number")return H.i(k)
j=b2.cy
i=b2.c
if(typeof i!=="number")return H.i(i)
h=b2.r
if(typeof h!=="number")return H.i(h)
g=b2.Q
if(typeof g!=="number")return H.i(g)
f=b2.db
e=b2.d
if(typeof e!=="number")return H.i(e)
d=b2.x
if(typeof d!=="number")return H.i(d)
c=b2.ch
if(typeof c!=="number")return H.i(c)
b=b2.dx
a=this.e
if(typeof a!=="number")return a.l()
a0=this.f
if(typeof a0!=="number")return a0.l()
a1=this.r
if(typeof a1!=="number")return a1.l()
a2=this.x
if(typeof a2!=="number")return a2.l()
a3=this.y
if(typeof a3!=="number")return a3.l()
a4=this.z
if(typeof a4!=="number")return a4.l()
a5=this.Q
if(typeof a5!=="number")return a5.l()
a6=this.ch
if(typeof a6!=="number")return a6.l()
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.bg(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
c6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.i(p)
o=this.e
if(typeof o!=="number")return o.l()
n=this.f
if(typeof n!=="number")return n.l()
m=this.r
if(typeof m!=="number")return m.l()
l=this.y
if(typeof l!=="number")return l.l()
k=this.z
if(typeof k!=="number")return k.l()
j=this.Q
if(typeof j!=="number")return j.l()
return new V.a4(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
b9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.i(p)
o=this.d
if(typeof o!=="number")return H.i(o)
n=this.e
if(typeof n!=="number")return n.l()
m=this.f
if(typeof m!=="number")return m.l()
l=this.r
if(typeof l!=="number")return l.l()
k=this.x
if(typeof k!=="number")return H.i(k)
j=this.y
if(typeof j!=="number")return j.l()
i=this.z
if(typeof i!=="number")return i.l()
h=this.Q
if(typeof h!=="number")return h.l()
g=this.ch
if(typeof g!=="number")return H.i(g)
return new V.aE(u*t+s*r+q*p+o,n*t+m*r+l*p+k,j*t+i*r+h*p+g)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=this.ch
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
j:function(a){return this.R()},
f_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.E]
t=V.cp(H.f([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cp(H.f([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cp(H.f([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cp(H.f([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.f_("",3,0)},
F:function(a){return this.f_(a,3,0)}}
V.am.prototype={
n:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
return new V.am(u+t,s+r)},
p:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
return new V.am(u-t,s-r)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
return new V.aE(u+t,s+r,q+p)},
p:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.i(p)
return new V.aE(u-t,s-r,q-p)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.P().a)return V.lU()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.aE(u/b,t/b,s/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.eb.prototype={
gaf:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.cc.prototype={
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cc))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+", "+V.U(this.e,3,0)+", "+V.U(this.f,3,0)+"]"}}
V.X.prototype={
d7:function(a){return Math.sqrt(this.L(this))},
L:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.glY(b)
if(typeof u!=="number")return u.n()
t=C.j.n(u,t)
u=this.b
s=b.glZ(b)
if(typeof u!=="number")return u.n()
return new V.X(t,C.j.n(u,s))},
l:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.l()
t=this.b
if(typeof t!=="number")return t.l()
return new V.X(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.n_
if(u==null){u=new V.X(0,0)
$.n_=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.X(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a4.prototype={
d7:function(a){return Math.sqrt(this.L(this))},
L:function(a){var u,t,s,r,q,p
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.i(p)
return u*t+s*r+q*p},
aN:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=a.a
if(typeof q!=="number")return H.i(q)
p=this.a
if(typeof p!=="number")return p.l()
return new V.a4(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
return new V.a4(u+t,s+r,q+p)},
N:function(a){var u,t,s
u=this.a
if(typeof u!=="number")return u.N()
t=this.b
if(typeof t!=="number")return t.N()
s=this.c
if(typeof s!=="number")return s.N()
return new V.a4(-u,-t,-s)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.P().a)return V.a7()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.a4(u/b,t/b,s/b)},
f8:function(){var u,t
u=this.a
t=$.P()
t.toString
if(typeof u!=="number")return H.i(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fV.prototype={
cj:function(a){var u=V.pX(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u},
T:function(a){var u=this.y
if(u!=null)u.M(a)},
sdk:function(a,b){},
sd9:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.P().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cj(t)}u=new D.D("maximumLocation",u,this.b,this,[P.E])
u.b=!0
this.T(u)}},
sdc:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cj(t)}u=new D.D("minimumLocation",u,this.c,this,[P.E])
u.b=!0
this.T(u)}},
saa:function(a,b){var u
b=this.cj(b)
u=this.d
if(!(Math.abs(u-b)<$.P().a)){this.d=b
u=new D.D("location",u,b,this,[P.E])
u.b=!0
this.T(u)}},
sda:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.D("maximumVelocity",u,a,this,[P.E])
u.b=!0
this.T(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.D("velocity",u,a,this,[P.E])
u.b=!0
this.T(u)}},
scW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.D("dampening",u,a,this,[P.E])
u.b=!0
this.T(u)}},
an:function(a,b){var u,t,s,r,q
u=this.f
t=$.P().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.saa(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.P().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.dD.prototype={
gC:function(){var u=this.b
if(u==null){u=D.W()
this.b=u}return u},
ba:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.a_(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")}}
U.cG.prototype={
gC:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
T:function(a){var u
H.d(a,"$iB")
u=this.e
if(u!=null)u.M(a)},
ac:function(){return this.T(null)},
ik:function(a,b){var u,t,s,r,q,p,o,n
u=U.ar
H.k(b,"$in",[u],"$an")
for(t=b.length,s=this.gaW(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.G)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.j(s,r)
if(n.a==null)n.sao(H.f([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c6(a,b,this,[u])
u.b=!0
this.T(u)},
j_:function(a,b){var u,t,s,r,q
u=U.ar
H.k(b,"$in",[u],"$an")
for(t=b.length,s=this.gaW(),r=0;r<b.length;b.length===t||(0,H.G)(b),++r){q=b[r]
if(q!=null)q.gC().a3(0,s)}u=new D.c7(a,b,this,[u])
u.b=!0
this.T(u)},
ba:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.E()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aw(u,u.length,0,[H.u(u,0)]),s=null;u.H();){t=u.d
if(t!=null){r=t.ba(0,b,c)
if(r!=null)s=s==null?r:r.l(0,s)}}this.f=s==null?V.e1():s
u=this.e
if(u!=null)u.b7(0)}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$an:function(){return[U.ar]},
$aaa:function(){return[U.ar]},
$iar:1}
U.ar.prototype={}
U.ex.prototype={
gC:function(){var u=this.cy
if(u==null){u=D.W()
this.cy=u}return u},
T:function(a){var u
H.d(a,"$iB")
u=this.cy
if(u!=null)u.M(a)},
ac:function(){return this.T(null)},
bf:function(a){if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcs())
this.a.c.gf9().h(0,this.gcu())
this.a.c.gc7().h(0,this.gcw())
return!0},
ct:function(a){H.d(a,"$iB")
if(!J.a_(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cv:function(a){var u,t,s,r,q,p,o
a=H.m(H.d(a,"$iB"),"$ibu")
if(!this.y)return
if(this.x){u=a.d.p(0,a.y)
u=new V.X(u.a,u.b)
u=u.L(u)
t=this.r
if(typeof t!=="number")return H.i(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.p(0,a.y)
u=new V.X(t.a,t.b).l(0,2).w(0,u.gaf())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.l()
s=this.e
if(typeof s!=="number")return H.i(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.X(s.a,s.b).l(0,2).w(0,u.gaf())
s=this.b
q=r.a
if(typeof q!=="number")return q.N()
p=this.e
if(typeof p!=="number")return H.i(p)
o=this.z
if(typeof o!=="number")return H.i(o)
s.saa(0,-q*p+o)
this.b.sY(0)
t=t.p(0,a.z)
this.Q=new V.X(t.a,t.b).l(0,2).w(0,u.gaf())}this.ac()},
cz:function(a){var u,t,s
H.d(a,"$iB")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.L(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.l()
s=this.e
if(typeof s!=="number")return H.i(s)
u.sY(t*10*s)
this.ac()}},
ba:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.E()
if(u<t){this.ch=t
s=b.y
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.bg(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iar:1}
U.ey.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.W()
this.fx=u}return u},
T:function(a){var u
H.d(a,"$iB")
u=this.fx
if(u!=null)u.M(a)},
ac:function(){return this.T(null)},
bf:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcs())
this.a.c.gf9().h(0,this.gcu())
this.a.c.gc7().h(0,this.gcw())
u=this.a.d
t=u.f
if(t==null){t=D.W()
u.f=t
u=t}else u=t
u.h(0,this.gi6())
u=this.a.d
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.gi8())
u=this.a.e
t=u.b
if(t==null){t=D.W()
u.b=t
u=t}else u=t
u.h(0,this.gjJ())
u=this.a.e
t=u.d
if(t==null){t=D.W()
u.d=t
u=t}else u=t
u.h(0,this.gjH())
u=this.a.e
t=u.c
if(t==null){t=D.W()
u.c=t
u=t}else u=t
u.h(0,this.gjF())
return!0},
aw:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.X(u,t)},
ct:function(a){a=H.m(H.d(a,"$iB"),"$ibu")
if(!J.a_(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cv:function(a){var u,t,s,r,q,p,o
a=H.m(H.d(a,"$iB"),"$ibu")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.X(u.a,u.b)
u=u.L(u)
t=this.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aw(new V.X(t.a,t.b).l(0,2).w(0,u.gaf()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.i(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.i(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aw(new V.X(s.a,s.b).l(0,2).w(0,u.gaf()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.i(p)
o=this.cy
if(typeof o!=="number")return H.i(o)
s.saa(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.i(q)
s=this.db
if(typeof s!=="number")return H.i(s)
o.saa(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.p(0,a.z)
this.dx=this.aw(new V.X(t.a,t.b).l(0,2).w(0,u.gaf()))}this.ac()},
cz:function(a){var u,t,s
H.d(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.L(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.i(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.i(u)
s.sY(-t*10*u)
this.ac()}},
i7:function(a){if(H.m(H.d(a,"$iB"),"$idX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
i9:function(a){var u,t,s,r,q,p,o
a=H.m(H.d(a,"$iB"),"$ibu")
if(!J.a_(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aw(new V.X(s.a,s.b).l(0,2).w(0,u.gaf()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.i(p)
o=this.cy
if(typeof o!=="number")return H.i(o)
s.saa(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.i(q)
s=this.db
if(typeof s!=="number")return H.i(s)
o.saa(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.p(0,a.z)
this.dx=this.aw(new V.X(t.a,t.b).l(0,2).w(0,u.gaf()))
this.ac()},
jK:function(a){H.d(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jI:function(a){var u,t,s,r,q,p,o
a=H.m(H.d(a,"$iB"),"$ieq")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.X(u.a,u.b)
u=u.L(u)
t=this.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aw(new V.X(t.a,t.b).l(0,2).w(0,u.gaf()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.i(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.i(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aw(new V.X(s.a,s.b).l(0,2).w(0,u.gaf()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.i(p)
o=this.cy
if(typeof o!=="number")return H.i(o)
s.saa(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.i(q)
s=this.db
if(typeof s!=="number")return H.i(s)
o.saa(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.p(0,a.z)
this.dx=this.aw(new V.X(t.a,t.b).l(0,2).w(0,u.gaf()))}this.ac()},
jG:function(a){var u,t,s
H.d(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.L(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.i(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.i(u)
s.sY(-t*10*u)
this.ac()}},
ba:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.E()
if(u<t){this.dy=t
s=b.y
this.c.an(0,s)
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.bg(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.l(0,V.bg(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iar:1}
U.ez.prototype={
gC:function(){var u=this.r
if(u==null){u=D.W()
this.r=u}return u},
T:function(a){var u=this.r
if(u!=null)u.M(a)},
bf:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.W()
u.e=t
u=t}else u=t
t=this.gib()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.W()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
ic:function(a){var u,t,s,r
H.d(a,"$iB")
if(!J.a_(this.b,this.a.b.c))return
H.m(a,"$icN")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.l()
r=u+t*s
if(u!==r){this.d=r
u=new D.D("zoom",u,r,this,[P.E])
u.b=!0
this.T(u)}},
ba:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.mC(s,s,s,1)}return this.f},
$iar:1}
M.dI.prototype={
aE:function(a){var u
H.d(a,"$iB")
u=this.x
if(u!=null)u.M(a)},
h3:function(){return this.aE(null)},
iv:function(a,b){var u,t,s,r,q,p,o,n
u=E.a3
H.k(b,"$in",[u],"$an")
for(t=b.length,s=this.gav(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.G)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bK()
n.sao(null)
n.sbd(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sao(H.f([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c6(a,b,this,[u])
u.b=!0
this.aE(u)},
ix:function(a,b){var u,t,s,r,q,p
u=E.a3
H.k(b,"$in",[u],"$an")
for(t=b.length,s=this.gav(),r=0;r<b.length;b.length===t||(0,H.G)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bK()
p.sao(null)
p.sbd(null)
p.c=null
p.d=0
q.z=p}p.a3(0,s)}}u=new D.c7(a,b,this,[u])
u.b=!0
this.aE(u)},
sb8:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().a3(0,this.gav())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gav())
u=new D.D("technique",t,this.c,this,[O.bP])
u.b=!0
this.aE(u)}},
gC:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u},
aQ:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.fn(this.c)
u=this.b
u.toString
t=a1.a
C.b.kx(t,36160,null)
C.b.aA(t,2884)
C.b.aA(t,2929)
C.b.kM(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.i(s)
o=C.j.at(p*s)
p=q.b
if(typeof r!=="number")return H.i(r)
n=C.j.at(p*r)
p=C.j.at(q.c*s)
a1.c=p
q=C.j.at(q.d*r)
a1.d=q
C.b.lR(t,o,n,p,q)
C.b.kA(t,u.c)
u=u.a
C.b.kz(t,u.a,u.b,u.c,u.d)
C.b.ky(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bg(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.fm(i)
t=$.mH
if(t==null){t=V.lU()
q=$.n2
if(q==null){q=new V.a4(0,1,0)
$.n2=q}p=V.n4()
h=p.w(0,Math.sqrt(p.L(p)))
q=q.aN(h)
g=q.w(0,Math.sqrt(q.L(q)))
f=h.aN(g)
e=new V.a4(t.a,t.b,t.c)
d=g.N(0).L(e)
c=f.N(0).L(e)
b=h.N(0).L(e)
t=V.bg(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.mH=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.l(0,a)}a1.db.fm(a)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)u.d.an(0,a1)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)u.d.aQ(a1)
this.a.toString
a1.cy.de()
a1.db.de()
this.b.toString
a1.fk()},
shx:function(a,b){this.d=H.k(b,"$iaa",[E.a3],"$aaa")},
$iq3:1}
A.dw.prototype={}
A.fI.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
C.b.eC(r.a,r.c)}},
ez:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
C.b.eA(r.a,r.c)}}}
A.dO.prototype={}
A.e_.prototype={
fX:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aF("")
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
a6.k0(u)
a6.kb(u)
a6.k5(u)
a6.kj(u)
a6.kk(u)
a6.kd(u)
a6.ko(u)
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
u=new P.aF("")
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
q.k8(u)
q.k_(u)
q.k6(u)
q.k9(u)
q.kh(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.kf(u)
q.kg(u)}q.kc(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.f([],[P.h])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.G(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.k7(u)
q.ke(u)
q.ki(u)
q.kl(u)
q.km(u)
q.kn(u)
q.ka(u)}m=u.a+="// === Main ===\n"
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
j=H.f([],[P.h])
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
i="vec4("+C.a.G(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.f6(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a6.fr)this.id=H.m(this.y.q(0,"invViewMat"),"$iaz")
if(t)this.dy=H.m(this.y.q(0,"objMat"),"$iaz")
if(r)this.fr=H.m(this.y.q(0,"viewObjMat"),"$iaz")
this.fy=H.m(this.y.q(0,"projViewObjMat"),"$iaz")
if(a6.x2)this.k1=H.m(this.y.q(0,"txt2DMat"),"$id4")
if(a6.y1)this.k2=H.m(this.y.q(0,"txtCubeMat"),"$iaz")
if(a6.y2)this.k3=H.m(this.y.q(0,"colorMat"),"$iaz")
this.shp(H.f([],[A.az]))
t=a6.aB
if(t>0){this.k4=H.d(this.y.q(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.i(0,q)
if(g==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.m(g,"$iaz"))}}t=a6.a
if(t!==C.d){this.r2=H.m(this.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.rx=H.m(this.y.q(0,"emissionTxt"),"$iaG")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iQ")
break
case C.h:this.ry=H.m(this.y.q(0,"emissionTxt"),"$iaH")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iQ")
break}}t=a6.b
if(t!==C.d){this.x2=H.m(this.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.y1=H.m(this.y.q(0,"ambientTxt"),"$iaG")
this.aB=H.m(this.y.q(0,"nullAmbientTxt"),"$iQ")
break
case C.h:this.y2=H.m(this.y.q(0,"ambientTxt"),"$iaH")
this.aB=H.m(this.y.q(0,"nullAmbientTxt"),"$iQ")
break}}t=a6.c
if(t!==C.d){this.aq=H.m(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.bL=H.m(this.y.q(0,"diffuseTxt"),"$iaG")
this.bM=H.m(this.y.q(0,"nullDiffuseTxt"),"$iQ")
break
case C.h:this.eD=H.m(this.y.q(0,"diffuseTxt"),"$iaH")
this.bM=H.m(this.y.q(0,"nullDiffuseTxt"),"$iQ")
break}}t=a6.d
if(t!==C.d){this.bN=H.m(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.eE=H.m(this.y.q(0,"invDiffuseTxt"),"$iaG")
this.bO=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iQ")
break
case C.h:this.eF=H.m(this.y.q(0,"invDiffuseTxt"),"$iaH")
this.bO=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iQ")
break}}t=a6.e
if(t!==C.d){this.bR=H.m(this.y.q(0,"shininess"),"$ia2")
this.bP=H.m(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.eG=H.m(this.y.q(0,"specularTxt"),"$iaG")
this.bQ=H.m(this.y.q(0,"nullSpecularTxt"),"$iQ")
break
case C.h:this.eH=H.m(this.y.q(0,"specularTxt"),"$iaH")
this.bQ=H.m(this.y.q(0,"nullSpecularTxt"),"$iQ")
break}}switch(a6.f){case C.d:break
case C.i:break
case C.f:this.eI=H.m(this.y.q(0,"bumpTxt"),"$iaG")
this.bS=H.m(this.y.q(0,"nullBumpTxt"),"$iQ")
break
case C.h:this.eJ=H.m(this.y.q(0,"bumpTxt"),"$iaH")
this.bS=H.m(this.y.q(0,"nullBumpTxt"),"$iQ")
break}if(a6.dy){this.eK=H.m(this.y.q(0,"envSampler"),"$iaH")
this.eL=H.m(this.y.q(0,"nullEnvTxt"),"$iQ")
t=a6.r
if(t!==C.d){this.bT=H.m(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.eM=H.m(this.y.q(0,"reflectTxt"),"$iaG")
this.bU=H.m(this.y.q(0,"nullReflectTxt"),"$iQ")
break
case C.h:this.eN=H.m(this.y.q(0,"reflectTxt"),"$iaH")
this.bU=H.m(this.y.q(0,"nullReflectTxt"),"$iQ")
break}}t=a6.x
if(t!==C.d){this.bV=H.m(this.y.q(0,"refraction"),"$ia2")
this.bW=H.m(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.f:this.eO=H.m(this.y.q(0,"refractTxt"),"$iaG")
this.bX=H.m(this.y.q(0,"nullRefractTxt"),"$iQ")
break
case C.h:this.eP=H.m(this.y.q(0,"refractTxt"),"$iaH")
this.bX=H.m(this.y.q(0,"nullRefractTxt"),"$iQ")
break}}}t=a6.y
if(t!==C.d){this.bY=H.m(this.y.q(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.i:break
case C.f:this.eQ=H.m(this.y.q(0,"alphaTxt"),"$iaG")
this.bZ=H.m(this.y.q(0,"nullAlphaTxt"),"$iQ")
break
case C.h:this.eR=H.m(this.y.q(0,"alphaTxt"),"$iaH")
this.bZ=H.m(this.y.q(0,"nullAlphaTxt"),"$iQ")
break}}this.sh4(H.f([],[A.d3]))
this.sh5(H.f([],[A.d5]))
this.sh6(H.f([],[A.d6]))
this.sh7(H.f([],[A.d7]))
this.sh8(H.f([],[A.d8]))
this.sh9(H.f([],[A.d9]))
if(a6.k2){t=a6.z
if(t>0){this.eS=H.d(this.y.q(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.i(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(g,"$iO")
s=this.y
r="dirLights["+h+"].color"
f=s.i(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.cY;(s&&C.a).h(s,new A.d3(h,g,f))}}t=a6.Q
if(t>0){this.eT=H.d(this.y.q(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(g,"$iO")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="pntLights["+h+"].color"
e=s.i(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="pntLights["+h+"].att0"
d=s.i(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$ia2")
s=this.y
r="pntLights["+h+"].att1"
c=s.i(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$ia2")
s=this.y
r="pntLights["+h+"].att2"
b=s.i(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.cZ;(s&&C.a).h(s,new A.d5(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eU=H.d(this.y.q(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(g,"$iO")
s=this.y
r="spotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.i(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="spotLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.i(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$ia2")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.i(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.y
r="spotLights["+h+"].att0"
a=s.i(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.y
r="spotLights["+h+"].att1"
a0=s.i(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="spotLights["+h+"].att2"
a1=s.i(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.d_;(s&&C.a).h(s,new A.d6(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eV=H.d(this.y.q(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.i(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(g,"$iO")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.i(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.i(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.i(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="txtDirLights["+h+"].color"
c=s.i(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iO")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iQ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.i(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iaG")
s=this.d0;(s&&C.a).h(s,new A.d7(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eW=H.d(this.y.q(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(g,"$iO")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.i(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$id4")
s=this.y
r="txtPntLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.i(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iQ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.i(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.i(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.i(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.i(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$iaH")
s=this.d1;(s&&C.a).h(s,new A.d8(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eX=H.d(this.y.q(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(g,"$iO")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iO")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.i(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iO")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.i(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iO")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.i(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iO")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iQ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.i(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iO")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.i(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.i(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.i(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.i(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a3,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.i(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a4,"$ia2")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.i(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a5,"$iaG")
s=this.d2;(s&&C.a).h(s,new A.d9(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ap:function(a,b,c){if(c==null||!c.d)C.b.U(b.a,b.d,1)
else{a.fQ(c)
C.b.U(b.a,b.d,0)}},
aj:function(a,b,c){C.b.U(b.a,b.d,1)},
shp:function(a){this.r1=H.k(a,"$ib",[A.az],"$ab")},
sh4:function(a){this.cY=H.k(a,"$ib",[A.d3],"$ab")},
sh5:function(a){this.cZ=H.k(a,"$ib",[A.d5],"$ab")},
sh6:function(a){this.d_=H.k(a,"$ib",[A.d6],"$ab")},
sh7:function(a){this.d0=H.k(a,"$ib",[A.d7],"$ab")},
sh8:function(a){this.d1=H.k(a,"$ib",[A.d8],"$ab")},
sh9:function(a){this.d2=H.k(a,"$ib",[A.d9],"$ab")}}
A.i7.prototype={
k0:function(a){var u,t,s
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
kb:function(a){var u
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
k5:function(a){var u
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
kj:function(a){var u,t
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
kk:function(a){var u,t
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
kd:function(a){var u
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
ko:function(a){var u
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
aH:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.au(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
k8:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aH(a,u,"emission")
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
k_:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aH(a,u,"ambient")
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
k6:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"diffuse")
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
k9:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"invDiffuse")
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
kh:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aH(a,u,"specular")
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
kc:function(a){var u,t
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
kf:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aH(a,u,"reflect")
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
kg:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aH(a,u,"refract")
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
k7:function(a){var u,t
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
ke:function(a){var u,t
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
ki:function(a){var u,t
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
kl:function(a){var u,t,s
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
km:function(a){var u,t,s
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
kn:function(a){var u,t,s
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
ka:function(a){var u
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
j:function(a){return this.aq}}
A.d3.prototype={}
A.d7.prototype={}
A.d5.prototype={}
A.d8.prototype={}
A.d6.prototype={}
A.d9.prototype={}
A.cV.prototype={
dw:function(a,b){this.c=null
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
C.b.eo(u,t,this.e)
C.b.eo(u,this.r,this.f)
C.b.l6(u,this.r)
if(!H.nt(C.b.cb(u,this.r,35714))){s=C.b.fK(u,this.r)
C.b.kI(u,this.r)
H.t(P.r("Failed to link shader: "+H.o(s)))}this.jp()
this.jr()},
aL:function(a){C.b.dj(a.a,this.r)
this.x.kQ()},
dQ:function(a,b){var u,t,s
u=this.a
t=C.b.kG(u,b)
C.b.fR(u,t,a)
C.b.kB(u,t)
if(!H.nt(C.b.fM(u,t,35713))){s=C.b.fL(u,t)
C.b.kJ(u,t)
throw H.c(P.r("Error compiling shader '"+H.o(t)+"': "+H.o(s)))}return t},
jp:function(){var u,t,s,r,q,p
u=H.f([],[A.dw])
t=this.a
s=H.ap(C.b.cb(t,this.r,35721))
if(typeof s!=="number")return H.i(s)
r=0
for(;r<s;++r){q=C.b.fG(t,this.r,r)
p=C.b.fI(t,this.r,q.name)
C.a.h(u,new A.dw(t,q.name,p))}this.x=new A.fI(u)},
jr:function(){var u,t,s,r,q,p
u=H.f([],[A.er])
t=this.a
s=H.ap(C.b.cb(t,this.r,35718))
if(typeof s!=="number")return H.i(s)
r=0
for(;r<s;++r){q=C.b.fH(t,this.r,r)
p=C.b.fN(t,this.r,q.name)
C.a.h(u,this.kH(q.type,q.size,q.name,p))}this.y=new A.jj(u)},
aV:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.Q(u,t,b,c)
else return A.lY(u,t,b,a,c)},
hC:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aG(u,t,b,c)
else return A.lY(u,t,b,a,c)},
hD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aH(u,t,b,c)
else return A.lY(u,t,b,a,c)},
bG:function(a,b){return new P.eM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.o(b)+"."))},
kH:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.jf(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.d2(this.a,this.r,c,d)
case 35667:return new A.jg(this.a,this.r,c,d)
case 35668:return new A.jh(this.a,this.r,c,d)
case 35669:return new A.ji(this.a,this.r,c,d)
case 35674:return new A.jk(this.a,this.r,c,d)
case 35675:return new A.d4(this.a,this.r,c,d)
case 35676:return new A.az(this.a,this.r,c,d)
case 35678:return this.hC(b,c,d)
case 35680:return this.hD(b,c,d)
case 35670:throw H.c(this.bG("BOOL",c))
case 35671:throw H.c(this.bG("BOOL_VEC2",c))
case 35672:throw H.c(this.bG("BOOL_VEC3",c))
case 35673:throw H.c(this.bG("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.o(a)+" for "+H.o(c)+"."))}}}
A.c1.prototype={
j:function(a){return this.b}}
A.er.prototype={}
A.jj.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.R()},
kY:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].j(0)+a
return s},
R:function(){return this.kY("\n")}}
A.Q.prototype={
j:function(a){return"Uniform1i: "+H.o(this.c)}}
A.jg.prototype={
j:function(a){return"Uniform2i: "+H.o(this.c)}}
A.jh.prototype={
j:function(a){return"Uniform3i: "+H.o(this.c)}}
A.ji.prototype={
j:function(a){return"Uniform4i: "+H.o(this.c)}}
A.je.prototype={
j:function(a){return"Uniform1iv: "+H.o(this.c)},
sjU:function(a){this.e=H.k(a,"$ib",[P.p],"$ab")}}
A.a2.prototype={
j:function(a){return"Uniform1f: "+H.o(this.c)}}
A.jf.prototype={
j:function(a){return"Uniform2f: "+H.o(this.c)}}
A.O.prototype={
j:function(a){return"Uniform3f: "+H.o(this.c)}}
A.d2.prototype={
bt:function(a){return C.b.lO(this.a,this.d,a.a,a.b,a.c,a.d)},
j:function(a){return"Uniform4f: "+H.o(this.c)}}
A.jk.prototype={
j:function(a){return"Uniform1Mat2 "+H.o(this.c)}}
A.d4.prototype={
ae:function(a){var u=new Float32Array(H.cj(H.k(a,"$ib",[P.E],"$ab")))
C.b.fz(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.o(this.c)}}
A.az.prototype={
ae:function(a){var u=new Float32Array(H.cj(H.k(a,"$ib",[P.E],"$ab")))
C.b.fA(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.o(this.c)}}
A.aG.prototype={
fQ:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.U(t,s,0)
else C.b.U(t,s,a.a)},
j:function(a){return"UniformSampler2D: "+H.o(this.c)}}
A.aH.prototype={
j:function(a){return"UniformSamplerCube: "+H.o(this.c)}}
F.M.prototype={
hm:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.a7()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.f8())return
return q.w(0,Math.sqrt(q.L(q)))},
hu:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.a4(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.L(u)))
u=r.p(0,t)
u=new V.a4(u.a,u.b,u.c)
u=q.aN(u.w(0,Math.sqrt(u.L(u))))
return u.w(0,Math.sqrt(u.L(u)))},
cT:function(){if(this.d!=null)return!0
var u=this.hm()
if(u==null){u=this.hu()
if(u==null)return!1}this.d=u
this.a.a.a5()
return!0},
hl:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.a7()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.f8())return
return q.w(0,Math.sqrt(q.L(q)))},
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
t=j.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
i=u-t
if(Math.abs(i-0)<$.P().a){u=m.p(0,p)
u=new V.a4(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.L(u)))
u=j.a
k=k.a
if(typeof u!=="number")return u.p()
if(typeof k!=="number")return H.i(k)
if(u-k<0)h=h.N(0)}else{t=l.b
if(typeof t!=="number")return H.i(t)
g=(u-t)/i
t=m.p(0,p)
u=t.a
if(typeof u!=="number")return u.l()
r=t.b
if(typeof r!=="number")return r.l()
t=t.c
if(typeof t!=="number")return t.l()
t=new V.aE(u*g,r*g,t*g).n(0,p).p(0,s)
t=new V.a4(t.a,t.b,t.c)
h=t.w(0,Math.sqrt(t.L(t)))
j=j.a
k=k.a
if(typeof j!=="number")return j.p()
if(typeof k!=="number")return H.i(k)
l=l.a
if(typeof l!=="number")return H.i(l)
if((j-k)*g+k-l<0)h=h.N(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.L(u)))
u=f.aN(h)
u=u.w(0,Math.sqrt(u.L(u))).aN(f)
h=u.w(0,Math.sqrt(u.L(u)))}return h},
cS:function(){if(this.e!=null)return!0
var u=this.hl()
if(u==null){u=this.ht()
if(u==null)return!1}this.e=u
this.a.a.a5()
return!0},
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
F:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.am(J.aK(u.e),0)+", "+C.c.am(J.aK(this.b.e),0)+", "+C.c.am(J.aK(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.j(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.j(0)+"}"):t+"-}"},
R:function(){return this.F("")}}
F.aJ.prototype={
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.am(J.aK(u.e),0)+", "+C.c.am(J.aK(this.b.e),0)},
R:function(){return this.F("")}}
F.bx.prototype={
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.am(J.aK(u.e),0)},
R:function(){return this.F("")}}
F.ao.prototype={
gC:function(){var u=this.e
if(u==null){u=D.W()
this.e=u}return u},
b0:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.b0()||!1
if(!this.a.b0())t=!1
u=this.e
if(u!=null)u.b7(0)
return t},
b_:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.b_()||!1
if(!this.a.b_())t=!1
u=this.e
if(u!=null)u.b7(0)
return t},
bI:function(){var u=this.e
if(u!=null)++u.d
this.a.bI()
u=this.e
if(u!=null)u.b7(0)
return!0},
bg:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.a.c
t=u.length
if(t<=0){u=$.mQ
if(u==null){u=V.mO(0,0,0,0,0,0)
$.mQ=u}return u}u=u[0].f
s=V.mO(u.a,u.b,u.c,0,0,0)
for(r=t-1,u=this.a;r>=1;--r){q=u.c
if(r>=q.length)return H.e(q,r)
q=q[r].f
p=q.a
o=q.b
q=q.c
n=s.d
m=s.a
if(typeof p!=="number")return p.E()
if(typeof m!=="number")return H.i(m)
if(p<m){n+=m-p
l=p}else{if(p>m+n)n=p-m
l=m}k=s.e
p=s.b
if(typeof o!=="number")return o.E()
if(typeof p!=="number")return H.i(p)
if(o<p){k+=p-o
j=o}else{if(o>p+k)k=o-p
j=p}i=s.f
p=s.c
if(typeof q!=="number")return q.E()
if(typeof p!=="number")return H.i(p)
if(q<p){i+=p-q
h=q}else{if(q>p+i)i=q-p
h=p}s=new V.cc(l,j,h,n,k,i)}return s},
bH:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.b9(t)
if(!J.a_(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.M(null)}}}t=s.r
if(t!=null)s.sbk(a.c6(t))
t=s.x
if(t!=null)s.sX(a.c6(t))}},
es:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b7()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b6().a)!==0)++r
if((s&$.b5().a)!==0)++r
if((s&$.bF().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.bW().a)!==0)++r
if((s&$.ds().a)!==0)++r
if((s&$.cu().a)!==0)++r
if((s&$.bE().a)!==0)++r
q=a1.gds(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.E
o=H.f(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.f(t,[Z.dz])
for(m=0,l=0;l<r;++l){k=a1.kv(l)
j=k.gds(k)
C.a.m(n,l,new Z.dz(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].l7(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.m(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ay(t,34962,e)
C.b.er(t,34962,new Float32Array(H.cj(o)),35044)
C.b.ay(t,34962,null)
d=new Z.bH(new Z.eA(34962,e),n,a1)
d.si_(H.f([],[Z.bL]))
if(this.b.b.length!==0){s=P.p
c=H.f([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.O()
C.a.h(c,b.e)}a=Z.m0(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bL(0,c.length,a))}if(this.c.b.length!==0){s=P.p
c=H.f([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.O()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.O()
C.a.h(c,b.e)}a=Z.m0(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bL(1,c.length,a))}if(this.d.b.length!==0){s=P.p
c=H.f([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.O()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.O()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.O()
C.a.h(c,b.e)}a=Z.m0(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bL(4,c.length,a))}return d},
j:function(a){var u=H.f([],[P.h])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.F("   "))}return C.a.G(u,"\n")},
ag:function(a){var u=this.e
if(u!=null)u.M(a)},
a5:function(){return this.ag(null)},
$ice:1}
F.ce.prototype={}
F.iJ.prototype={
a9:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.ms(b,c,d)},
ks:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.H],"$ab")
u=H.f([],[F.M])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ms(s,p,o))}}return u},
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
b0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cT())s=!1
return s},
b_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cS())s=!1
return s},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
u=H.f([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
R:function(){return this.F("")},
shR:function(a){this.b=H.k(a,"$ib",[F.M],"$ab")}}
F.iK.prototype={
t:function(a,b,c){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
return F.my(b,c)},
kt:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.H],"$ab")
u=H.f([],[F.aJ])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.e(a,q)
q=a[q]
if(r>=p)return H.e(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.my(q,p))}return u},
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
u=H.f([],[P.h])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].F(a+(""+s+". ")))}return C.a.G(u,"\n")},
R:function(){return this.F("")},
si3:function(a){this.b=H.k(a,"$ib",[F.aJ],"$ab")}}
F.iL.prototype={
ku:function(a){var u,t,s,r,q
H.k(a,"$ib",[F.H],"$ab")
u=H.f([],[F.bx])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.e(a,r)
q=a[r]
s.a.h(0,q)
C.a.h(u,F.lT(q))}return u},
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
u=H.f([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
R:function(){return this.F("")},
scD:function(a){this.b=H.k(a,"$ib",[F.bx],"$ab")}}
F.H.prototype={
kE:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.cg(this.cx,s,p,u,t,r,q,a,o)},
a2:function(){return this.kE(null)},
saa:function(a,b){var u
if(!J.a_(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
sbk:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.L(a)))
if(!J.a_(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a5()}},
sX:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.L(a)))
if(!J.a_(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a5()}},
sV:function(a,b){var u
if(!J.a_(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a5()}},
l7:function(a){var u,t
if(a.B(0,$.b7())){u=this.f
t=[P.E]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.B(0,$.b6())){u=this.r
t=[P.E]
if(u==null)return H.f([0,1,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.B(0,$.b5())){u=this.x
t=[P.E]
if(u==null)return H.f([0,0,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.B(0,$.bF())){u=this.y
t=[P.E]
if(u==null)return H.f([0,0],t)
else return H.f([u.a,u.b],t)}else if(a.B(0,$.bG())){u=this.z
t=[P.E]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.B(0,$.bW())){u=this.Q
t=[P.E]
if(u==null)return H.f([1,1,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.B(0,$.ds())){u=this.Q
t=[P.E]
if(u==null)return H.f([1,1,1,1],t)
else return H.f([u.a,u.b,u.c,u.d],t)}else if(a.B(0,$.cu()))return H.f([this.ch],[P.E])
else if(a.B(0,$.bE())){u=H.f([-1,-1,-1,-1],[P.E])
return u}else return H.f([],[P.E])},
cT:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.a7()
this.d.v(0,new F.jF(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.b7(0)}return!0},
cS:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.a7()
this.d.v(0,new F.jE(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.b7(0)}return!0},
eZ:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.b
s.a.a.O()
s=s.e
a.a.a.O()
if(s==a.e)return r}return},
kV:function(a){var u=this.eZ(a)
if(u!=null)return u
return a.eZ(this)},
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
F:function(a){var u,t,s
u=H.f([],[P.h])
C.a.h(u,C.c.am(J.aK(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
C.a.h(u,V.U(this.ch,3,0))
C.a.h(u,"-")
s=C.a.G(u,", ")
return a+"{"+s+"}"},
R:function(){return this.F("")}}
F.jF.prototype={
$1:function(a){var u,t
H.d(a,"$iM")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:4}
F.jE.prototype={
$1:function(a){var u,t
H.d(a,"$iM")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:4}
F.jy.prototype={
O:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a5()
return!0},
cN:function(a,b,c){var u=F.cg(null,null,null,new V.aE(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
i:function(a,b){return C.a.i(this.c,b)},
b0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cT()
return!0},
b_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cS()
return!0},
bI:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.M(null)}}}}return!0},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
this.O()
u=H.f([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
R:function(){return this.F("")},
sjV:function(a){this.c=H.k(a,"$ib",[F.H],"$ab")}}
F.jz.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t
u=this.b.length
if(b.E(0,u))return C.a.i(this.b,b)
b=b.p(0,u)
t=this.c.length
if(b.E(0,t))return C.a.i(this.c,b)
b=b.p(0,t)
return C.a.i(this.d,b)},
v:function(a,b){H.j(b,{func:1,ret:-1,args:[F.M]})
C.a.v(this.b,b)
C.a.v(this.c,new F.jA(this,b))
C.a.v(this.d,new F.jB(this,b))},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
u=H.f([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
R:function(){return this.F("")},
shS:function(a){this.b=H.k(a,"$ib",[F.M],"$ab")},
shT:function(a){this.c=H.k(a,"$ib",[F.M],"$ab")},
shU:function(a){this.d=H.k(a,"$ib",[F.M],"$ab")}}
F.jA.prototype={
$1:function(a){H.d(a,"$iM")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:4}
F.jB.prototype={
$1:function(a){var u
H.d(a,"$iM")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:4}
F.jC.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u=this.b.length
if(b.aS(0,u))return C.a.i(this.c,b.p(0,u))
else return C.a.i(this.b,b)},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
u=H.f([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
R:function(){return this.F("")},
si4:function(a){this.b=H.k(a,"$ib",[F.aJ],"$ab")},
si5:function(a){this.c=H.k(a,"$ib",[F.aJ],"$ab")}}
F.jD.prototype={
gk:function(a){return this.b.length},
i:function(a,b){return C.a.i(this.b,b)},
j:function(a){return this.R()},
F:function(a){var u,t,s,r
u=H.f([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
R:function(){return this.F("")},
scD:function(a){this.b=H.k(a,"$ib",[F.bx],"$ab")}}
O.dN.prototype={
gC:function(){var u=this.rx
if(u==null){u=D.W()
this.rx=u}return u},
D:function(a){var u=this.rx
if(u!=null)u.M(a)},
sad:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.P().a)){this.r2=a
u=new D.D("vectorScale",u,a,this,[P.E])
u.b=!0
this.D(u)}},
an:function(a,b){},
fp:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.i(0,"Inspection"),"$idO")
if(u==null){t=a.a
u=new A.dO(t,"Inspection")
u.dw(t,"Inspection")
u.f6(0,$.oh,$.og)
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.m(u.y.i(0,"lightVec"),"$iO")
u.db=H.m(u.y.i(0,"ambientClr"),"$id2")
u.dx=H.m(u.y.i(0,"diffuseClr"),"$id2")
u.dy=H.m(u.y.i(0,"weightScalar"),"$ia2")
u.fr=H.m(u.y.i(0,"viewMat"),"$iaz")
u.fx=H.m(u.y.i(0,"viewObjMatrix"),"$iaz")
u.fy=H.m(u.y.i(0,"projViewObjMatrix"),"$iaz")
a.en(u)}this.a=u}if(b.e==null){b.d.b0()
b.d.b_()
b.d.bI()
t=new Z.dA()
t.sia(new H.aI([P.h,Z.bH]))
b.e=t}t=this.a
t.aL(a)
s=this.r2
r=t.dy
C.b.P(r.a,r.d,s)
s=this.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.A(r.a,r.d,q,p,s)
s=a.db
s=s.ga1(s)
p=t.fr
p.toString
p.ae(s.ab(0,!0))
s=a.gfE()
p=t.fx
p.toString
p.ae(s.ab(0,!0))
s=a.gfl()
t=t.fy
t.toString
t.ae(s.ab(0,!0))
t=b.e
if(t instanceof Z.dA){s=a.a
C.b.aM(s,1,1)
if(b.c==null){C.b.cX(s,2929)
C.b.aA(s,3042)
C.b.aM(s,1,1)
if(this.k3)this.e7(a,t,b.d,"Axis",H.j(this.gdI(),{func:1,ret:F.ao,args:[F.ce]}),this.z,this.y)
if(this.k4)this.e7(a,t,b.d,"AABB",H.j(this.gdF(),{func:1,ret:F.ao,args:[F.ce]}),this.z,this.y)
C.b.aA(s,2929)
C.b.aM(s,770,771)}else{C.b.aA(s,2929)
C.b.aA(s,3042)
C.b.aM(s,770,771)
if(this.Q)this.a4(a,t,b.c,"shapeFill",this.gjt(),this.d,this.c)
if(this.id)this.a4(a,t,b.c,"colorFill",this.ghz(),this.x,this.r)
if(this.k1)this.a4(a,t,b.c,"txt2DColor",this.gjN(),this.x,this.r)
if(this.k2)this.a4(a,t,b.c,"weight",this.gjW(),this.x,this.r)
C.b.cX(s,2929)
C.b.aM(s,1,1)
if(this.cx)this.a4(a,t,b.c,"vertices",this.gha(),this.f,this.e)
if(this.fr)this.a4(a,t,b.c,"faceCenters",this.ghL(),this.f,this.e)
if(this.ch)this.a4(a,t,b.c,"wireFrame",this.gjY(),this.f,this.e)
if(this.cy)this.a4(a,t,b.c,"normals",this.gih(),this.f,this.e)
if(this.db)this.a4(a,t,b.c,"binormals",this.ghr(),this.f,this.e)
if(this.dx)this.a4(a,t,b.c,"tangentals",this.gjy(),this.f,this.e)
if(this.dy)this.a4(a,t,b.c,"textureCube",this.gjP(),this.f,this.e)
if(this.fx)this.a4(a,t,b.c,"faceNormals",this.ghN(),this.f,this.e)
if(this.fy)this.a4(a,t,b.c,"faceBinormals",this.ghJ(),this.x,this.r)
if(this.go)this.a4(a,t,b.c,"faceTangentals",this.ghP(),this.x,this.r)
if(this.k3)this.a4(a,t,b.c,"Axis",this.gdI(),this.z,this.y)
if(this.k4)this.a4(a,t,b.c,"AABB",this.gdF(),this.z,this.y)
C.b.aA(s,2929)
C.b.aM(s,770,771)}}else b.e=null
t=this.a
t.toString
C.b.dj(a.a,null)
t.x.ez()},
a4:function(a,b,c,d,e,f,g){var u,t
H.j(e,{func:1,ret:F.ao,args:[F.ao]})
u=b.a.i(0,d)
if(u==null){u=this.dJ(a,e.$1(c))
b.a.m(0,d,u)}t=this.a
t.db.bt(f)
t.dx.bt(g)
u.fi(a)},
e7:function(a,b,c,d,e,f,g){var u,t
H.j(e,{func:1,ret:F.ao,args:[F.ce]})
u=b.a.i(0,d)
if(u==null){u=this.dJ(a,e.$1(c))
b.a.m(0,d,u)}t=this.a
t.db.bt(f)
t.dx.bt(g)
u.fi(a)},
dJ:function(a,b){var u,t,s
u=$.b7()
t=$.b6()
s=b.es(new Z.eB(a.a),new Z.b4(u.a|t.a|$.b5().a|$.bW().a))
s.ak($.b7()).e=this.a.z.c
s.ak($.b6()).e=this.a.Q.c
s.ak($.bW()).e=this.a.ch.c
s.ak($.b5()).e=this.a.cx.c
return s},
ju:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hz(u,new V.S(1,1,1,1)),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
s=a.d
s.toString
t=H.j(new O.hA(u),{func:1,ret:-1,args:[F.M]})
C.a.v(s.b,t)
return u},
ej:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.as()
u.a=new V.S(0,0.7,1,1)
s=a.a
s.toString
u=H.j(new O.hK(u,t),{func:1,ret:-1,args:[F.H]})
C.a.v(s.c,u)
u=new O.hJ(t)
s=a.c
s.toString
r=H.j(new O.hL(t,u),{func:1,ret:-1,args:[F.aJ]})
C.a.v(s.b,r)
r=a.d
r.toString
u=H.j(new O.hM(t,u),{func:1,ret:-1,args:[F.M]})
C.a.v(r.b,u)
return t},
jZ:function(a){return this.ej(a,null)},
hb:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hF(new V.S(1,1,1,1),u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
return u},
ii:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hy(new V.S(1,1,0.3,1),u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
return u},
hs:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hr(new V.S(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
return u},
jz:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hB(new V.S(1,0.3,1,1),u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
return u},
jQ:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hE(new V.S(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
return u},
hM:function(a){var u,t,s
u=F.as()
t=a.d
t.toString
s=H.j(new O.hv(new V.S(1,1,0.3,1),u),{func:1,ret:-1,args:[F.M]})
C.a.v(t.b,s)
return u},
hO:function(a){var u,t,s
u=F.as()
t=a.d
t.toString
s=H.j(new O.hw(new V.S(1,1,0.3,1),u),{func:1,ret:-1,args:[F.M]})
C.a.v(t.b,s)
return u},
hK:function(a){var u,t,s
u=F.as()
t=a.d
t.toString
s=H.j(new O.hu(new V.S(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.M]})
C.a.v(t.b,s)
return u},
hQ:function(a){var u,t,s
u=F.as()
t=a.d
t.toString
s=H.j(new O.hx(new V.S(1,0.3,1,1),u),{func:1,ret:-1,args:[F.M]})
C.a.v(t.b,s)
return u},
hA:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hs(u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
s=a.d
s.toString
t=H.j(new O.ht(u),{func:1,ret:-1,args:[F.M]})
C.a.v(s.b,t)
return u},
jO:function(a){var u,t,s
u=F.as()
t=a.a
t.toString
s=H.j(new O.hC(u),{func:1,ret:-1,args:[F.H]})
C.a.v(t.c,s)
s=a.d
s.toString
t=H.j(new O.hD(u),{func:1,ret:-1,args:[F.M]})
C.a.v(s.b,t)
return u},
jX:function(a){var u,t,s,r,q,p,o
u={}
t=F.as()
s=a.a
r=s.c
if(r.length<1)return t
q=r[0].ch
u.a=q
u.b=q
s.toString
s={func:1,ret:-1,args:[F.H]}
C.a.v(r,H.j(new O.hG(u),s))
r=u.b
p=u.a
if(typeof r!=="number")return r.p()
if(typeof p!=="number")return H.i(p)
o=r-p
u.c=o
if(o<=0)u.c=1
r=a.a
r.toString
s=H.j(new O.hH(u,t),s)
C.a.v(r.c,s)
s=a.d
s.toString
r=H.j(new O.hI(t),{func:1,ret:-1,args:[F.M]})
C.a.v(s.b,r)
return t},
hn:function(a){return this.ho(a)},
ho:function(a){var u,t
u=F.as()
t=new O.hq(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
hf:function(a){return this.hg(a)},
hg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.bg()
t=F.as()
s=new O.hp(t)
r=u.a
q=u.b
p=u.c
o=s.$3(r,q,p)
n=u.d
if(typeof r!=="number")return r.n()
n=r+n
m=s.$3(n,q,p)
l=u.e
if(typeof q!=="number")return q.n()
l=q+l
k=s.$3(n,l,p)
j=s.$3(r,l,p)
i=u.f
if(typeof p!=="number")return p.n()
i=p+i
h=s.$3(r,q,i)
g=s.$3(n,q,i)
f=s.$3(n,l,i)
e=s.$3(r,l,i)
t.c.t(0,o,m)
t.c.t(0,m,k)
t.c.t(0,k,j)
t.c.t(0,j,o)
t.c.t(0,h,g)
t.c.t(0,g,f)
t.c.t(0,f,e)
t.c.t(0,e,h)
t.c.t(0,o,h)
t.c.t(0,m,g)
t.c.t(0,k,f)
t.c.t(0,j,e)
return t}}
O.hz.prototype={
$1:function(a){var u,t
H.d(a,"$iH")
u=this.a.a
t=a.a2()
t.sV(0,this.b)
t.sX(V.a7())
u.h(0,t)},
$S:6}
O.hA.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iM")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a9(0,r,q,p)},
$S:4}
O.hK.prototype={
$1:function(a){var u,t
H.d(a,"$iH")
u=this.b.a
t=a.a2()
t.sV(0,this.a.a)
t.sX(V.a7())
u.h(0,t)},
$S:6}
O.hJ.prototype={
$2:function(a,b){if(a.kV(b)==null)this.a.c.t(0,a,b)},
$S:52}
O.hL.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iaJ")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
u=u.a
s=a.b
s.a.a.O()
s=s.e
this.b.$2(r,C.a.i(u.c,s))},
$S:53}
O.hM.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iM")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
u=u.a
t=a.c
t.a.a.O()
t=t.e
p=C.a.i(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:4}
O.hF.prototype={
$1:function(a){var u,t
u=H.d(a,"$iH").a2()
u.sV(0,this.a)
u.sX(V.a7())
t=this.b
t.a.h(0,u)
t.b.a.a.h(0,u)
F.lT(u)},
$S:6}
O.hy.prototype={
$1:function(a){var u,t,s
u=H.d(a,"$iH").a2()
u.sV(0,this.a)
u.sX(V.a7())
t=u.a2()
t.sX(u.r)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hr.prototype={
$1:function(a){var u,t,s
H.d(a,"$iH")
u=a.a2()
u.sV(0,this.a)
u.sX(V.a7())
t=u.a2()
t.sX(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hB.prototype={
$1:function(a){var u,t,s
H.d(a,"$iH")
u=a.a2()
u.sV(0,this.a)
u.sX(V.a7())
t=u.a2()
t.sX(a.x.aN(a.r).N(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hE.prototype={
$1:function(a){var u,t,s
H.d(a,"$iH")
u=a.a2()
u.sV(0,this.a)
u.sX(V.a7())
t=u.a2()
t.sX(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hv.prototype={
$1:function(a){var u,t,s
H.d(a,"$iM")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cg(null,V.a7(),this.a,u,t,null,null,null,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.lT(s)},
$S:4}
O.hw.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iM")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cg(null,V.a7(),this.a,u,t,null,null,null,0)
r=s.a2()
r.sX(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hu.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iM")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cg(null,V.a7(),this.a,u,t,null,null,null,0)
r=s.a2()
r.sX(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hx.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iM")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cg(null,V.a7(),this.a,u,t,null,null,null,0)
r=s.a2()
r.sX(a.e.aN(a.d).N(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hs.prototype={
$1:function(a){var u,t
H.d(a,"$iH")
u=this.a.a
t=a.a2()
t.sX(V.a7())
u.h(0,t)},
$S:6}
O.ht.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iM")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a9(0,r,q,p)},
$S:4}
O.hC.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.d(a,"$iH")
u=a.y
t=this.a.a
s=a.a2()
r=u.a
q=u.b
if(typeof r!=="number")return r.E()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.E()
p=q<0
if(p)o=0
else if(q>1)o=1
else o=q
if(p)q=0
else if(q>1)q=1
s.sV(0,new V.S(r,o,q,1))
s.sX(V.a7())
t.h(0,s)},
$S:6}
O.hD.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iM")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a9(0,r,q,p)},
$S:4}
O.hG.prototype={
$1:function(a){var u,t,s
H.d(a,"$iH")
u=this.a
t=u.a
s=a.ch
if(typeof t!=="number")return t.dn()
if(typeof s!=="number")return H.i(s)
if(t>s)u.a=s
t=u.b
if(typeof t!=="number")return t.E()
if(t<s)u.b=s},
$S:6}
O.hH.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iH")
u=a.ch
t=this.a
s=t.a
if(typeof u!=="number")return u.p()
if(typeof s!=="number")return H.i(s)
r=V.o8((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.a2()
s.sX(V.a7())
s.sV(0,new V.S(r.a,r.b,r.c,1))
t.h(0,s)},
$S:6}
O.hI.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iM")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a9(0,r,q,p)},
$S:4}
O.hq.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=a>1?1:a
t=b>1?1:b
s=c>1?1:c
r=new V.S(u,t,s,1)
u=this.a
q=u.a.cN(0,0,0)
q.sX(V.a7())
q.sbk(V.n5())
q.sV(0,r)
p=u.a.cN(a,b,c)
p.sX(V.a7())
p.sbk(V.n5())
p.sV(0,r)
u.c.t(0,q,p)}}
O.hp.prototype={
$3:function(a,b,c){var u=this.a.a.cN(a,b,c)
u.sX(V.a7())
u.sbk(new V.a4(a,b,c))
return u}}
O.aV.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.W()
this.dy=u}return u},
D:function(a){var u
H.d(a,"$iB")
u=this.dy
if(u!=null)u.M(a)},
cg:function(){return this.D(null)},
e9:function(a){H.d(a,"$iB")
this.a=null
this.D(a)},
jl:function(){return this.e9(null)},
ip:function(a,b){var u=V.aD
u=new D.c6(a,H.k(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.D(u)},
ir:function(a,b){var u=V.aD
u=new D.c7(a,H.k(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.D(u)},
dN:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
e="MaterialLight_"+C.e.j(u.a)+C.e.j(m.a)+C.e.j(l.a)+C.e.j(k.a)+C.e.j(j.a)+C.e.j(i.a)+C.e.j(h.a)+C.e.j(g.a)+C.e.j(f.a)
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
a7=$.b7()
if(a0){b=$.b6()
a7=new Z.b4(a7.a|b.a)}if(a1){b=$.b5()
a7=new Z.b4(a7.a|b.a)}if(a2){b=$.bF()
a7=new Z.b4(a7.a|b.a)}if(a3){b=$.bG()
a7=new Z.b4(a7.a|b.a)}if(a5){b=$.bE()
a7=new Z.b4(a7.a|b.a)}return new A.i7(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a0:function(a,b){H.k(a,"$ib",[T.d_],"$ab")
if(b!=null)if(!C.a.b3(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var u
for(u=this.dx.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.H();)C.n.an(u.d,b)},
fp:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dN()
t=H.d(a2.fr.i(0,u.aq),"$ie_")
if(t==null){t=A.ou(u,a2.a)
a2.en(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bL
u=a3.e
if(!(u instanceof Z.bH)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.b0()
q=s.r2
if(q)a3.d.b_()
p=s.ry
if(p)a3.d.bI()
o=a3.d.es(new Z.eB(a2.a),r)
o.ak($.b7()).e=this.a.Q.c
if(u)o.ak($.b6()).e=this.a.cx.c
if(q)o.ak($.b5()).e=this.a.ch.c
if(s.rx)o.ak($.bF()).e=this.a.cy.c
if(p)o.ak($.bG()).e=this.a.db.c
if(s.x1)o.ak($.bE()).e=this.a.dx.c
a3.e=o}u=T.d_
n=H.f([],[u])
this.a.aL(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga1(p)
q=q.dy
q.toString
q.ae(p.ab(0,!0))}if(s.fy){q=this.a
p=a2.gfE()
q=q.fr
q.toString
q.ae(p.ab(0,!0))}q=this.a
p=a2.gfl()
q=q.fy
q.toString
q.ae(p.ab(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ae(C.n.ab(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ae(C.n.ab(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ae(C.n.ab(p,!0))}if(s.aB>0){m=this.e.a.length
q=this.a.k4
C.b.U(q.a,q.d,m)
for(q=[P.E],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.e(k,l)
k=k[l]
p.toString
H.d(k,"$iaD")
p=p.r1
if(l>=p.length)return H.e(p,l)
p=p[l]
j=new Float32Array(H.cj(H.k(k.ab(0,!0),"$ib",q,"$ab")))
C.b.fA(p.a,p.d,!1,j)}}switch(s.a){case C.d:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.A(q.a,q.d,k,i,p)
break
case C.f:this.a0(n,this.f.d)
q=this.a
p=this.f.d
q.ap(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.f.e)
q=this.a
p=this.f.e
q.aj(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.A(q.a,q.d,k,i,p)
break
case C.f:this.a0(n,this.r.d)
q=this.a
p=this.r.d
q.ap(q.y1,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.r.e)
q=this.a
p=this.r.e
q.aj(q.y2,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break}switch(s.c){case C.d:break
case C.i:q=this.a
p=this.x.f
q=q.aq
q.toString
k=p.a
i=p.b
p=p.c
C.b.A(q.a,q.d,k,i,p)
break
case C.f:this.a0(n,this.x.d)
q=this.a
p=this.x.d
q.ap(q.bL,q.bM,p)
p=this.a
q=this.x.f
p=p.aq
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.x.e)
q=this.a
p=this.x.e
q.aj(q.eD,q.bM,p)
p=this.a
q=this.x.f
p=p.aq
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break}switch(s.d){case C.d:break
case C.i:q=this.a
p=this.y.f
q=q.bN
q.toString
k=p.a
i=p.b
p=p.c
C.b.A(q.a,q.d,k,i,p)
break
case C.f:this.a0(n,this.y.d)
q=this.a
p=this.y.d
q.ap(q.eE,q.bO,p)
p=this.a
q=this.y.f
p=p.bN
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.y.e)
q=this.a
p=this.y.e
q.aj(q.eF,q.bO,p)
p=this.a
q=this.y.f
p=p.bN
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
break}switch(s.e){case C.d:break
case C.i:q=this.a
p=this.z.f
q=q.bP
q.toString
k=p.a
i=p.b
p=p.c
C.b.A(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bR
C.b.P(p.a,p.d,i)
break
case C.f:this.a0(n,this.z.d)
q=this.a
p=this.z.d
q.ap(q.eG,q.bQ,p)
p=this.a
q=this.z.f
p=p.bP
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bR
C.b.P(q.a,q.d,i)
break
case C.h:this.a0(n,this.z.e)
q=this.a
p=this.z.e
q.aj(q.eH,q.bQ,p)
p=this.a
q=this.z.f
p=p.bP
p.toString
k=q.a
i=q.b
q=q.c
C.b.A(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bR
C.b.P(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.eS
C.b.U(q.a,q.d,m)
q=a2.db
h=q.ga1(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.G)(q),++f){e=q[f]
k=this.a.cY
if(g>=k.length)return H.e(k,g)
d=k[g]
k=h.c6(e.gbK(e))
i=k.a
if(typeof i!=="number")return i.l()
c=k.b
if(typeof c!=="number")return c.l()
b=k.c
if(typeof b!=="number")return b.l()
b=k.w(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.A(c.a,c.d,i,k,b)
b=e.gV(e)
k=d.c
C.b.A(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.eT
C.b.U(q.a,q.d,m)
q=a2.db
h=q.ga1(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.G)(q),++f){e=q[f]
k=this.a.cZ
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbn(e)
i=d.b
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=h.b9(e.gbn(e))
i=d.c
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gV(e)
i=d.d
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gcO()
i=d.e
C.b.P(i.a,i.d,k)
k=e.gcP()
i=d.f
C.b.P(i.a,i.d,k)
k=e.gcQ()
i=d.r
C.b.P(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.eU
C.b.U(q.a,q.d,m)
q=a2.db
h=q.ga1(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.G)(q),++f){e=q[f]
k=this.a.d_
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbn(e)
i=d.b
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gbK(e).m1()
i=d.c
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=h.b9(e.gbn(e))
i=d.d
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gV(e)
i=d.e
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.glX()
i=d.f
C.b.P(i.a,i.d,k)
k=e.glW()
i=d.r
C.b.P(i.a,i.d,k)
k=e.gcO()
i=d.x
C.b.P(i.a,i.d,k)
k=e.gcP()
i=d.y
C.b.P(i.a,i.d,k)
k=e.gcQ()
i=d.z
C.b.P(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.eV
C.b.U(q.a,q.d,m)
q=a2.db
h=q.ga1(q)
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.G)(q),++f){e=q[f]
i=this.a.d0
if(g>=i.length)return H.e(i,g)
d=i[g]
i=e.gbo()
H.k(n,"$ib",k,"$ab")
if(!C.a.b3(n,i)){i.a=n.length
C.a.h(n,i)}i=e.gbK(e)
c=d.d
C.b.A(c.a,c.d,i.a,i.b,i.c)
i=e.gc7()
c=d.b
C.b.A(c.a,c.d,i.a,i.b,i.c)
i=e.gc2(e)
c=d.c
C.b.A(c.a,c.d,i.a,i.b,i.c)
i=h.c6(e.gbK(e))
c=i.a
if(typeof c!=="number")return c.l()
b=i.b
if(typeof b!=="number")return b.l()
a=i.c
if(typeof a!=="number")return a.l()
a=i.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.A(b.a,b.d,c,i,a)
a=e.gV(e)
i=d.f
C.b.A(i.a,i.d,a.a,a.b,a.c)
a=e.gbo()
i=a.gd8(a)
if(!i){i=d.x
C.b.U(i.a,i.d,1)}else{i=d.r
c=a.d
b=i.a
i=i.d
if(!c)C.b.U(b,i,0)
else C.b.U(b,i,a.a)
i=d.x
C.b.U(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.eW
C.b.U(q.a,q.d,m)
q=a2.db
h=q.ga1(q)
for(q=this.dx.y,p=q.length,k=[P.E],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.G)(q),++f){e=q[f]
c=this.a.d1
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbo()
H.k(n,"$ib",i,"$ab")
if(!C.a.b3(n,c)){c.a=n.length
C.a.h(n,c)}a0=h.l(0,e.ga1(e))
c=e.ga1(e)
b=$.cT
if(b==null){b=new V.aE(0,0,0)
$.cT=b}b=c.b9(b)
c=d.b
C.b.A(c.a,c.d,b.a,b.b,b.c)
c=$.cT
if(c==null){c=new V.aE(0,0,0)
$.cT=c}c=a0.b9(c)
b=d.c
C.b.A(b.a,b.d,c.a,c.b,c.c)
c=a0.f7(0)
b=d.d
j=new Float32Array(H.cj(H.k(new V.e0(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ab(0,!0),"$ib",k,"$ab")))
C.b.fz(b.a,b.d,!1,j)
b=e.gV(e)
c=d.e
C.b.A(c.a,c.d,b.a,b.b,b.c)
b=e.gbo()
c=b.gd8(b)
if(!c){c=d.r
C.b.U(c.a,c.d,1)}else{c=d.f
a=b.gd8(b)
a1=c.a
c=c.d
if(!a)C.b.U(a1,c,0)
else C.b.U(a1,c,b.gm_(b))
c=d.r
C.b.U(c.a,c.d,0)}c=e.gcO()
b=d.x
C.b.P(b.a,b.d,c)
c=e.gcP()
b=d.y
C.b.P(b.a,b.d,c)
c=e.gcQ()
b=d.z
C.b.P(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.eX
C.b.U(q.a,q.d,m)
q=a2.db
h=q.ga1(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.G)(q),++f){e=q[f]
k=this.a.d2
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbo()
H.k(n,"$ib",u,"$ab")
if(!C.a.b3(n,k)){k.a=n.length
C.a.h(n,k)}k=e.gbn(e)
i=d.b
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gbK(e)
i=d.c
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gc7()
i=d.d
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gc2(e)
i=d.e
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=h.b9(e.gbn(e))
i=d.f
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gbo()
i=k.gd8(k)
if(!i){k=d.x
C.b.U(k.a,k.d,1)}else{i=d.r
c=k.d
b=i.a
i=i.d
if(!c)C.b.U(b,i,0)
else C.b.U(b,i,k.a)
k=d.x
C.b.U(k.a,k.d,0)}k=e.gV(e)
i=d.y
C.b.A(i.a,i.d,k.a,k.b,k.c)
k=e.gm4()
i=d.z
C.b.P(i.a,i.d,k)
k=e.gm5()
i=d.Q
C.b.P(i.a,i.d,k)
k=e.gcO()
i=d.ch
C.b.P(i.a,i.d,k)
k=e.gcP()
i=d.cx
C.b.P(i.a,i.d,k)
k=e.gcQ()
i=d.cy
C.b.P(i.a,i.d,k);++g}}}switch(s.f){case C.d:break
case C.i:break
case C.f:this.a0(n,this.Q.d)
u=this.a
q=this.Q.d
u.ap(u.eI,u.bS,q)
break
case C.h:this.a0(n,this.Q.e)
u=this.a
q=this.Q.e
u.aj(u.eJ,u.bS,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga1(q).f7(0)
a2.Q=q}u=u.id
u.toString
u.ae(q.ab(0,!0))}if(s.dy){this.a0(n,this.ch)
u=this.a
q=this.ch
u.aj(u.eK,u.eL,q)
switch(s.r){case C.d:break
case C.i:u=this.a
q=this.cx.f
u=u.bT
u.toString
p=q.a
k=q.b
q=q.c
C.b.A(u.a,u.d,p,k,q)
break
case C.f:this.a0(n,this.cx.d)
u=this.a
q=this.cx.d
u.ap(u.eM,u.bU,q)
q=this.a
u=this.cx.f
q=q.bT
q.toString
p=u.a
k=u.b
u=u.c
C.b.A(q.a,q.d,p,k,u)
break
case C.h:this.a0(n,this.cx.e)
u=this.a
q=this.cx.e
u.aj(u.eN,u.bU,q)
q=this.a
u=this.cx.f
q=q.bT
q.toString
p=u.a
k=u.b
u=u.c
C.b.A(q.a,q.d,p,k,u)
break}switch(s.x){case C.d:break
case C.i:u=this.a
q=this.cy.f
u=u.bW
u.toString
p=q.a
k=q.b
q=q.c
C.b.A(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bV
C.b.P(q.a,q.d,k)
break
case C.f:this.a0(n,this.cy.d)
u=this.a
q=this.cy.d
u.ap(u.eO,u.bX,q)
q=this.a
u=this.cy.f
q=q.bW
q.toString
p=u.a
k=u.b
u=u.c
C.b.A(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bV
C.b.P(u.a,u.d,k)
break
case C.h:this.a0(n,this.cy.e)
u=this.a
q=this.cy.e
u.aj(u.eP,u.bX,q)
q=this.a
u=this.cy.f
q=q.bW
q.toString
p=u.a
k=u.b
u=u.c
C.b.A(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bV
C.b.P(u.a,u.d,k)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.i:u=this.a
p=this.db.f
u=u.bY
C.b.P(u.a,u.d,p)
break
case C.f:this.a0(n,this.db.d)
u=this.a
p=this.db.d
u.ap(u.eQ,u.bZ,p)
p=this.a
u=this.db.f
p=p.bY
C.b.P(p.a,p.d,u)
break
case C.h:this.a0(n,this.db.e)
u=this.a
p=this.db.e
u.aj(u.eR,u.bZ,p)
p=this.a
u=this.db.f
p=p.bY
C.b.P(p.a,p.d,u)
break}u=a2.a
C.b.aA(u,3042)
C.b.aM(u,770,771)}for(u=a2.a,l=0;l<n.length;++l){p=n[l]
if(!p.c&&p.d){p.c=!0
C.b.el(u,33984+p.a)
C.b.aZ(u,3553,p.b)}}p=H.m(a3.e,"$ibH")
p.aL(a2)
p.aQ(a2)
p.fw(a2)
if(q)C.b.cX(u,3042)
for(l=0;l<n.length;++l){q=n[l]
if(q.c){q.c=!1
C.b.el(u,33984+q.a)
C.b.aZ(u,3553,null)}}q=this.a
q.toString
C.b.dj(u,null)
q.x.ez()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.dN().aq},
shq:function(a){this.e=H.k(a,"$iaa",[V.aD],"$aaa")}}
O.i5.prototype={
bD:function(a){var u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.D(this.b,u,a,this,[P.E])
u.b=!0
this.a.D(u)}},
aJ:function(){this.du()
this.bD(1)},
ax:function(){this.cd()
this.bD(1)},
sfD:function(a,b){var u
if(b==null)b=1
if(b<=0)this.eu(0)
else if(this.c===C.d){this.c=C.i
this.cd()
this.bD(1)
u=this.a
u.a=null
u.D(null)}this.bD(b)}}
O.cK.prototype={
D:function(a){this.a.D(H.d(a,"$iB"))},
cg:function(){return this.D(null)},
aJ:function(){},
ax:function(){},
ec:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gC().a3(0,this.gbw())
t=this.d
this.d=a
if(a!=null)a.gC().h(0,this.gbw())
u=new D.D(this.b+".texture2D",t,this.d,this,[T.ek])
u.b=!0
this.a.D(u)}},
ed:function(a){},
eu:function(a){var u
if(this.c!==C.d){this.c=C.d
u=this.a
u.a=null
u.D(null)}this.aJ()
this.ec(null)
this.ed(null)
this.a.D(null)},
sbp:function(a){var u=this.c
if(u!==C.f){if(u===C.d)this.ax()
this.c=C.f
this.ed(null)
u=this.a
u.a=null
u.D(null)}this.ec(a)}}
O.i6.prototype={}
O.bf.prototype={
cJ:function(a){var u,t
if(!J.a_(this.f,a)){u=this.f
this.f=a
t=new D.D(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.D(t)}},
aJ:function(){this.du()
this.cJ(new V.a1(0,0,0))},
ax:function(){this.cd()
this.cJ(new V.a1(1,1,1))},
sV:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.ax()
u=this.a
u.a=null
u.D(null)}this.cJ(b)}}
O.i8.prototype={
eb:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.D(this.b+".refraction",u,a,this,[P.E])
u.b=!0
this.a.D(u)}},
aJ:function(){this.dv()
this.eb(1)},
ax:function(){this.ce()
this.eb(1)}}
O.i9.prototype={
bE:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.D(this.b+".shininess",u,a,this,[P.E])
u.b=!0
this.a.D(u)}},
aJ:function(){this.dv()
this.bE(100)},
ax:function(){this.ce()
this.bE(100)}}
O.bP.prototype={}
T.d_.prototype={}
T.ek.prototype={}
T.j1.prototype={
gC:function(){var u=this.y
if(u==null){u=D.W()
this.y=u}return u}}
T.j2.prototype={
l8:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aZ(u,3553,t)
C.b.c3(u,3553,10242,33071)
C.b.c3(u,3553,10243,33071)
C.b.c3(u,3553,10241,9729)
C.b.c3(u,3553,10240,9729)
C.b.aZ(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.j1()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.q
W.a8(s,"load",H.j(new T.j3(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
bi:function(a){return this.l8(a,!1,!1,!1,!1)},
jm:function(a,b,c){var u,t,s,r
b=V.mc(b,2)
u=V.mc(a.width,2)
t=V.mc(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lI(null,null)
s.width=u
s.height=t
r=H.d(C.o.fJ(s,"2d"),"$ic_")
r.imageSmoothingEnabled=!1;(r&&C.z).kO(r,a,0,0,s.width,s.height)
return P.pB(C.z.hZ(r,0,0,s.width,s.height))}}}
T.j3.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.jm(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aZ(t,3553,this.e)
C.b.lt(t,37440,this.f?1:0)
C.b.lI(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fF(t,3553)
C.b.aZ(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kP()}++s.e},
$S:13}
V.fF.prototype={
b4:function(a,b){return!0},
j:function(a){return"all"},
$ibt:1}
V.bt.prototype={}
V.dZ.prototype={
b4:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].b4(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saI:function(a){this.a=H.k(a,"$ib",[V.bt],"$ab")},
$ibt:1}
V.bw.prototype={
b4:function(a,b){return!this.fV(0,b)},
j:function(a){return"!["+this.dt(0)+"]"}}
V.iI.prototype={
fZ:function(a){var u,t
if(a.a.length<=0)throw H.c(P.r("May not create a SetMatcher with zero characters."))
u=new H.aI([P.p,P.K])
for(t=new H.dW(a,a.gk(a),0,[H.aS(a,"w",0)]);t.H();)u.m(0,t.d,!0)
this.sjn(u)},
b4:function(a,b){return this.a.bJ(0,b)},
j:function(a){var u=this.a
return P.ef(u.gaC(u),0,null)},
sjn:function(a){this.a=H.k(a,"$iA",[P.p,P.K],"$aA")},
$ibt:1}
V.cW.prototype={
G:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d1(this.a.S(0,b))
r.saI(H.f([],[V.bt]))
r.c=!1
C.a.h(this.c,r)
return r},
kU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.b4(0,a))return r}return},
j:function(a){return this.b},
sjL:function(a){this.c=H.k(a,"$ib",[V.d1],"$ab")}}
V.ep.prototype={
j:function(a){var u,t
u=H.nE(this.b,"\n","\\n")
t=H.nE(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d0.prototype={
j:function(a){return this.b},
sjh:function(a){var u=P.h
this.c=H.k(a,"$iA",[u,u],"$aA")}}
V.j6.prototype={
S:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.cW(this,b)
u.sjL(H.f([],[V.d1]))
u.d=null
this.a.m(0,b,u)}return u},
br:function(a){var u,t
u=this.b.i(0,a)
if(u==null){u=new V.d0(this,a)
t=P.h
u.sjh(new H.aI([t,t]))
this.b.m(0,a,u)}return u},
lN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.f([],[V.ep])
t=this.c
s=[P.p]
r=H.f([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.I(a,o)
m=t.kU(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ef(r,0,null)
throw H.c(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.f([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ef(r,0,null)
k=t.d
j=k.c.i(0,l)
p=new V.ep(j==null?k.b:j,l,o)}++o}}},
sjx:function(a){this.a=H.k(a,"$iA",[P.h,V.cW],"$aA")},
sjE:function(a){this.b=H.k(a,"$iA",[P.h,V.d0],"$aA")}}
V.d1.prototype={
j:function(a){return this.b.b+": "+this.dt(0)}}
X.dC.prototype={$ibv:1}
X.hl.prototype={
gC:function(){var u=this.x
if(u==null){u=D.W()
this.x=u}return u}}
X.e7.prototype={
gC:function(){var u=this.f
if(u==null){u=D.W()
this.f=u}return u},
aU:function(a){var u
H.d(a,"$iB")
u=this.f
if(u!=null)u.M(a)},
he:function(){return this.aU(null)},
sbj:function(a){var u,t
if(!J.a_(this.b,a)){u=this.b
if(u!=null)u.gC().a3(0,this.gdD())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdD())
u=new D.D("mover",t,this.b,this,[U.ar])
u.b=!0
this.aU(u)}},
$ibv:1,
$idC:1}
X.ei.prototype={}
V.fT.prototype={
a9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[P.K]})
if(this.c==null)return
u=this.d.length
t=P.ev().gb5().i(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.fD(this.c).h(0,p)
n=W.mu("checkbox")
n.checked=s
o=W.q
W.a8(n,"change",H.j(new V.fU(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.p.Z(p,n)
m=q.createElement("span")
m.textContent=b
C.p.Z(p,m)
J.fD(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.ei(u,s)},
t:function(a,b,c){return this.a9(a,b,c,!1)},
ei:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.ev().gb5().i(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.ll(t,a-s+1,"0")
r=a>0?C.c.u(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.au(t,s)
q=P.ev()
s=P.h
p=P.mA(q.gb5(),s,s)
p.m(0,u,r)
o=q.dg(0,p)
u=window.history
s=o.j(0)
u.toString;(u&&C.A).e8(u,new P.fe([],[]).c8(""),"",s)},
shw:function(a){this.d=H.k(a,"$ib",[W.cy],"$ab")}}
V.fU.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.ei(this.d,u.checked)},
$S:13}
V.lz.prototype={
$1:function(a){H.d(a,"$ibk")
P.fB(C.j.fu(this.a.gkZ(),2)+" fps")},
$S:56}
V.iw.prototype={
a9:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.j(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.ev().gb5().i(0,H.o(u))
if(t==null)if(d){c.$0()
this.eh(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.fD(this.c).h(0,q)
o=W.mu("radio")
o.checked=s
o.name=u
u=W.q
W.a8(o,"change",H.j(new V.ix(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.p.Z(q,o)
n=r.createElement("span")
n.textContent=b
C.p.Z(q,n)
J.fD(this.c).h(0,r.createElement("br"))},
t:function(a,b,c){return this.a9(a,b,c,!1)},
eh:function(a){var u,t,s,r,q
u=P.ev()
t=P.h
s=P.mA(u.gb5(),t,t)
s.m(0,this.a,a)
r=u.dg(0,s)
t=window.history
q=r.j(0)
t.toString;(t&&C.A).e8(t,new P.fe([],[]).c8(""),"",q)}}
V.ix.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.eh(this.d)}},
$S:13}
V.iM.prototype={
h_:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.y).Z(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.y.Z(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.Z(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.Z(q,p)}o=u.createElement("div")
this.a=o
C.l.Z(q,o)
this.b=null
o=W.q
W.a8(u,"scroll",H.j(new V.iO(s),{func:1,ret:-1,args:[o]}),!1,o)},
em:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.h],"$ab")
this.jq()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.lN(C.a.l3(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.Z(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.Z(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.Z(t,o)
break
case"Link":n=p.b
if(H.pV(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
C.l.Z(t,l)}else{k=P.kz(C.a0,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.o(k)
l.textContent=n
C.l.Z(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.Z(t,o)
break}}C.l.Z(this.a,t)},
kq:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.h],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.Z(this.a,t)
r=C.a5.i0(t,-1)
s=H.d((r&&C.H).dX(r,-1),"$ibj").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.d(C.H.dX(r,-1),"$ibj")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a4).Z(o,p)}},
jq:function(){var u,t,s,r
if(this.b!=null)return
u=new V.j6()
t=P.h
u.sjx(new H.aI([t,V.cW]))
u.sjE(new H.aI([t,V.d0]))
u.c=null
u.c=u.S(0,"Start")
t=u.S(0,"Start").G(0,"Bold")
s=V.ay(new H.ad("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"Bold").G(0,"Bold")
s=new V.bw()
r=[V.bt]
s.saI(H.f([],r))
C.a.h(t.a,s)
t=V.ay(new H.ad("*"))
C.a.h(s.a,t)
t=u.S(0,"Bold").G(0,"BoldEnd")
s=V.ay(new H.ad("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"Start").G(0,"Italic")
s=V.ay(new H.ad("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"Italic").G(0,"Italic")
s=new V.bw()
s.saI(H.f([],r))
C.a.h(t.a,s)
t=V.ay(new H.ad("_"))
C.a.h(s.a,t)
t=u.S(0,"Italic").G(0,"ItalicEnd")
s=V.ay(new H.ad("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"Start").G(0,"Code")
s=V.ay(new H.ad("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"Code").G(0,"Code")
s=new V.bw()
s.saI(H.f([],r))
C.a.h(t.a,s)
t=V.ay(new H.ad("`"))
C.a.h(s.a,t)
t=u.S(0,"Code").G(0,"CodeEnd")
s=V.ay(new H.ad("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"Start").G(0,"LinkHead")
s=V.ay(new H.ad("["))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,"LinkHead").G(0,"LinkTail")
s=V.ay(new H.ad("|"))
C.a.h(t.a,s)
s=u.S(0,"LinkHead").G(0,"LinkEnd")
t=V.ay(new H.ad("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,"LinkHead").G(0,"LinkHead")
t=new V.bw()
t.saI(H.f([],r))
C.a.h(s.a,t)
s=V.ay(new H.ad("|]"))
C.a.h(t.a,s)
s=u.S(0,"LinkTail").G(0,"LinkEnd")
t=V.ay(new H.ad("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,"LinkTail").G(0,"LinkTail")
t=new V.bw()
t.saI(H.f([],r))
C.a.h(s.a,t)
s=V.ay(new H.ad("|]"))
C.a.h(t.a,s)
C.a.h(u.S(0,"Start").G(0,"Other").a,new V.fF())
s=u.S(0,"Other").G(0,"Other")
t=new V.bw()
t.saI(H.f([],r))
C.a.h(s.a,t)
s=V.ay(new H.ad("*_`["))
C.a.h(t.a,s)
s=u.S(0,"BoldEnd")
s.d=s.a.br("Bold")
s=u.S(0,"ItalicEnd")
s.d=s.a.br("Italic")
s=u.S(0,"CodeEnd")
s.d=s.a.br("Code")
s=u.S(0,"LinkEnd")
s.d=s.a.br("Link")
s=u.S(0,"Other")
s.d=s.a.br("Other")
this.b=u}}
V.iO.prototype={
$1:function(a){P.mU(C.v,new V.iN(this.a))},
$S:13}
V.iN.prototype={
$0:function(){var u,t,s
u=C.j.at(document.documentElement.scrollTop)
t=this.a.style
s=H.o(-0.01*u)+"px"
t.top=s},
$S:0}
G.kZ.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a},
$S:1}
G.l_.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.Q!==a){u.Q=a
t=new D.D("showFilled",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l0.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.ch!==a){u.ch=a
t=new D.D("showWireFrame",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lb.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cx!==a){u.cx=a
t=new D.D("showVertices",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lm.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cy!==a){u.cy=a
t=new D.D("showNormals",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lo.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.db!==a){u.db=a
t=new D.D("showBinormals",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lp.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dx!==a){u.dx=a
t=new D.D("showTangentals",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lq.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fr!==a){u.fr=a
t=new D.D("showFaceCenters",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lr.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fx!==a){u.fx=a
t=new D.D("showFaceNormals",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.ls.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fy!==a){u.fy=a
t=new D.D("showFaceBinormals",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lt.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.go!==a){u.go=a
t=new D.D("showFaceTangentals",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l1.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.id!==a){u.id=a
t=new D.D("showColorFill",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l2.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k1!==a){u.k1=a
t=new D.D("showTxt2DColor",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l3.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dy!==a){u.dy=a
t=new D.D("showTxtCube",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l4.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k2!==a){u.k2=a
t=new D.D("showWeight",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l5.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k3!==a){u.k3=a
t=new D.D("showAxis",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.l6.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k4!==a){u.k4=a
t=new D.D("showAABB",!a,a,u,[P.K])
t.b=!0
u.D(t)}},
$S:1}
G.lu.prototype={
$1:function(a){var u,t,s
u=E.hb(null,!0,null,"",null,null)
u.sdr(0,a.c)
t=a.y
s=H.j(new G.lv(u,this),{func:1,ret:-1,args:[H.u(t,0)]})
C.a.v(t.a,s)
return u},
$S:58}
G.lv.prototype={
$1:function(a){H.d(a,"$ia3")
this.a.y.h(0,this.b.$1(a))},
$S:59}
G.lw.prototype={
$1:function(a){var u=0,t=P.aj(null),s=this,r,q,p,o,n,m
var $async$$1=P.ak(function(b,c){if(b===1)return P.ag(c,t)
while(true)switch(u){case 0:u=2
return P.au(O.e6(a,s.b.f,null,null,!1),$async$$1)
case 2:r=c
r.lC(3.5)
q=s.c
p=q.y
o=p.a
if(o.length>0){n=H.u(p,0)
p.se_(H.f([],[n]))
H.k(o,"$in",[n],"$an")
p=p.d
if(p!=null)p.$2(0,o)}q.y.h(0,r)
r.b=s.a.a
m=s.d.$1(r)
m.sb8(s.e)
q.y.h(0,m)
return P.ah(null,t)}})
return P.ai($async$$1,t)},
$S:60}
G.l7.prototype={
$0:function(){var u=0,t=P.aj(P.z),s=this
var $async$$0=P.ak(function(a,b){if(a===1)return P.ag(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.ah(null,t)}})
return P.ai($async$$0,t)},
$S:9}
G.l8.prototype={
$0:function(){var u=0,t=P.aj(P.z),s=this
var $async$$0=P.ak(function(a,b){if(a===1)return P.ag(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.ah(null,t)}})
return P.ai($async$$0,t)},
$S:9}
G.l9.prototype={
$0:function(){var u=0,t=P.aj(P.z),s=this
var $async$$0=P.ak(function(a,b){if(a===1)return P.ag(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.ah(null,t)}})
return P.ai($async$$0,t)},
$S:9}
G.la.prototype={
$0:function(){var u=0,t=P.aj(P.z),s=this
var $async$$0=P.ak(function(a,b){if(a===1)return P.ag(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.ah(null,t)}})
return P.ai($async$$0,t)},
$S:9}
G.lc.prototype={
$0:function(){this.a.sad(0.01)},
$S:0}
G.ld.prototype={
$0:function(){this.a.sad(0.02)},
$S:0}
G.le.prototype={
$0:function(){this.a.sad(0.04)},
$S:0}
G.lf.prototype={
$0:function(){this.a.sad(0.06)},
$S:0}
G.lg.prototype={
$0:function(){this.a.sad(0.08)},
$S:0}
G.lh.prototype={
$0:function(){this.a.sad(0.1)},
$S:0}
G.li.prototype={
$0:function(){this.a.sad(0.2)},
$S:0}
G.lj.prototype={
$0:function(){this.a.sad(0.4)},
$S:0}
G.lk.prototype={
$0:function(){this.a.sad(0.6)},
$S:0}
G.ll.prototype={
$0:function(){this.a.sad(0.8)},
$S:0}
G.ln.prototype={
$0:function(){this.a.sad(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.fT=u.j
u=J.dS.prototype
u.fU=u.j
u=O.cK.prototype
u.du=u.aJ
u.cd=u.ax
u=O.bf.prototype
u.dv=u.aJ
u.ce=u.ax
u=V.dZ.prototype
u.fV=u.b4
u.dt=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"pw","p2",16)
u(P,"px","p3",16)
u(P,"py","p4",16)
t(P,"ns","pv",7)
s(P.eF.prototype,"gew",0,1,null,["$2","$1"],["b2","ex"],34,0)
s(P.ff.prototype,"gkC",1,0,null,["$1","$0"],["az","kD"],35,0)
var n
s(n=E.a3.prototype,"gfe",0,0,null,["$1","$0"],["ff","lh"],3,0)
s(n,"gfg",0,0,null,["$1","$0"],["fh","li"],3,0)
s(n,"gfc",0,0,null,["$1","$0"],["fd","lg"],3,0)
s(n,"gfa",0,0,null,["$1","$0"],["fb","ld"],3,0)
r(n,"glb","lc",12)
r(n,"gle","lf",12)
s(n=E.eo.prototype,"gdz",0,0,null,["$1","$0"],["dB","dA"],3,0)
q(n,"glB","fq",7)
p(n=X.ew.prototype,"giE","iF",15)
p(n,"gis","it",15)
p(n,"giy","iz",8)
p(n,"giI","iJ",22)
p(n,"giG","iH",22)
p(n,"giM","iN",8)
p(n,"giQ","iR",8)
p(n,"giC","iD",8)
p(n,"giO","iP",8)
p(n,"giA","iB",8)
p(n,"giS","iT",62)
p(n,"giU","iV",15)
p(n,"gj6","j7",17)
p(n,"gj2","j3",17)
p(n,"gj4","j5",17)
s(n=D.dV.prototype,"ge2",0,0,null,["$1","$0"],["e3","iK"],3,0)
p(n,"giX","iY",43)
r(n,"gil","im",23)
r(n,"gj0","j1",23)
o(V.X.prototype,"gk","d7",24)
o(V.a4.prototype,"gk","d7",24)
s(n=U.cG.prototype,"gaW",0,0,null,["$1","$0"],["T","ac"],3,0)
r(n,"gij","ik",25)
r(n,"giZ","j_",25)
s(n=U.ex.prototype,"gaW",0,0,null,["$1","$0"],["T","ac"],3,0)
p(n,"gcs","ct",5)
p(n,"gcu","cv",5)
p(n,"gcw","cz",5)
s(n=U.ey.prototype,"gaW",0,0,null,["$1","$0"],["T","ac"],3,0)
p(n,"gcs","ct",5)
p(n,"gcu","cv",5)
p(n,"gcw","cz",5)
p(n,"gi6","i7",5)
p(n,"gi8","i9",5)
p(n,"gjJ","jK",5)
p(n,"gjH","jI",5)
p(n,"gjF","jG",5)
p(U.ez.prototype,"gib","ic",5)
s(n=M.dI.prototype,"gav",0,0,null,["$1","$0"],["aE","h3"],3,0)
r(n,"giu","iv",12)
r(n,"giw","ix",12)
p(n=O.dN.prototype,"gjt","ju",2)
s(n,"gjY",0,1,null,["$2$color","$1"],["ej","jZ"],50,0)
p(n,"gha","hb",2)
p(n,"gih","ii",2)
p(n,"ghr","hs",2)
p(n,"gjy","jz",2)
p(n,"gjP","jQ",2)
p(n,"ghL","hM",2)
p(n,"ghN","hO",2)
p(n,"ghJ","hK",2)
p(n,"ghP","hQ",2)
p(n,"ghz","hA",2)
p(n,"gjN","jO",2)
p(n,"gjW","jX",2)
p(n,"gdI","hn",2)
p(n,"gdF","hf",2)
s(n=O.aV.prototype,"gbw",0,0,null,["$1","$0"],["D","cg"],3,0)
s(n,"gjk",0,0,null,["$1","$0"],["e9","jl"],3,0)
r(n,"gio","ip",26)
r(n,"giq","ir",26)
s(O.cK.prototype,"gbw",0,0,null,["$1","$0"],["D","cg"],3,0)
s(X.e7.prototype,"gdD",0,0,null,["$1","$0"],["aU","he"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.lQ,J.a,J.aw,P.eT,P.n,H.dW,P.aN,H.c4,H.da,H.fX,H.iz,H.jb,P.bJ,H.cE,H.cz,H.fa,P.ax,H.hU,H.hW,H.hP,H.eU,H.jK,P.fi,P.eC,P.ab,P.eF,P.bo,P.at,P.eD,P.cY,P.cZ,P.iV,P.ko,P.bk,P.aB,P.kD,P.kl,P.dc,P.kf,P.w,P.ku,P.i2,P.c0,P.kC,P.kA,P.K,P.aC,P.a9,P.bq,P.ir,P.ee,P.eM,P.hk,P.b,P.A,P.z,P.dY,P.ae,P.h,P.aF,P.ci,P.jp,P.km,W.h_,W.cy,W.C,W.dJ,P.kp,P.fn,P.kg,P.R,O.aa,O.cL,E.fP,E.a3,E.iA,E.eo,Z.eA,Z.eB,Z.bH,Z.dA,Z.bL,Z.b4,D.fS,D.bK,D.B,O.kK,O.dq,O.kL,X.dB,X.dT,X.hS,X.i_,X.aL,X.ih,X.j7,X.ew,D.dF,D.ac,D.e8,D.ed,D.el,D.em,D.en,V.a1,V.S,V.hc,V.e0,V.aD,V.am,V.aE,V.eb,V.cc,V.X,V.a4,U.ex,U.ey,U.ez,M.dI,A.dw,A.fI,A.i7,A.d3,A.d7,A.d5,A.d8,A.d6,A.d9,A.c1,A.er,A.jj,F.M,F.aJ,F.bx,F.ao,F.iJ,F.iK,F.iL,F.H,F.jy,F.jz,F.jC,F.jD,O.bP,O.cK,T.j2,V.fF,V.bt,V.dZ,V.iI,V.cW,V.ep,V.d0,V.j6,X.dC,X.ei,X.e7,V.fT,V.iw,V.iM])
s(J.a,[J.hO,J.dR,J.dS,J.aU,J.c8,J.bM,H.cO,H.bN,W.l,W.fE,W.bY,W.c_,W.ba,W.bb,W.V,W.eG,W.h3,W.h4,W.eI,W.dH,W.eK,W.h6,W.q,W.eN,W.aT,W.dL,W.eP,W.br,W.hZ,W.ia,W.eV,W.eW,W.aW,W.eX,W.f_,W.aX,W.f3,W.f5,W.aZ,W.f6,W.b_,W.fb,W.aO,W.fg,W.j5,W.b1,W.fj,W.j9,W.ju,W.fp,W.fr,W.ft,W.fv,W.fx,P.be,P.eR,P.bh,P.f1,P.iv,P.fc,P.bl,P.fl,P.fJ,P.eE,P.dy,P.dK,P.ea,P.cd,P.ec,P.ej,P.es,P.f8])
s(J.dS,[J.is,J.cf,J.bs])
t(J.lP,J.aU)
s(J.c8,[J.dQ,J.dP])
t(P.hY,P.eT)
s(P.hY,[H.et,W.jT,W.jS,P.hg])
t(H.ad,H.et)
s(P.n,[H.h9,H.i3,H.jI])
s(P.aN,[H.i4,H.jJ])
t(H.fY,H.fX)
s(P.bJ,[H.io,H.hR,H.jn,H.jd,H.fR,H.iG,P.cS,P.b8,P.jo,P.jl,P.cX,P.fW,P.h2])
s(H.cz,[H.lA,H.iZ,H.hQ,H.kU,H.kV,H.kW,P.jP,P.jO,P.jQ,P.jR,P.kt,P.ks,P.jM,P.jL,P.kE,P.kF,P.kP,P.jZ,P.k6,P.k2,P.k3,P.k4,P.k0,P.k5,P.k_,P.k9,P.ka,P.k8,P.k7,P.iW,P.iX,P.kN,P.kj,P.ki,P.kk,P.hX,P.i1,P.kB,P.h7,P.h8,P.jt,P.jq,P.jr,P.js,P.kv,P.kw,P.ky,P.kx,P.kH,P.kG,P.kI,P.kJ,W.hm,W.hn,W.ic,W.ie,W.iF,W.iU,W.jY,P.kq,P.kQ,P.hh,P.hi,P.fL,E.iB,E.iC,E.iD,E.j4,D.he,F.jF,F.jE,F.jA,F.jB,O.hz,O.hA,O.hK,O.hJ,O.hL,O.hM,O.hF,O.hy,O.hr,O.hB,O.hE,O.hv,O.hw,O.hu,O.hx,O.hs,O.ht,O.hC,O.hD,O.hG,O.hH,O.hI,O.hq,O.hp,T.j3,V.fU,V.lz,V.ix,V.iO,V.iN,G.kZ,G.l_,G.l0,G.lb,G.lm,G.lo,G.lp,G.lq,G.lr,G.ls,G.lt,G.l1,G.l2,G.l3,G.l4,G.l5,G.l6,G.lu,G.lv,G.lw,G.l7,G.l8,G.l9,G.la,G.lc,G.ld,G.le,G.lf,G.lg,G.lh,G.li,G.lj,G.lk,G.ll,G.ln])
s(H.iZ,[H.iS,H.cw])
t(P.i0,P.ax)
t(H.aI,P.i0)
t(H.hV,H.h9)
t(H.e3,H.bN)
s(H.e3,[H.dd,H.df])
t(H.de,H.dd)
t(H.cP,H.de)
t(H.dg,H.df)
t(H.e4,H.dg)
s(H.e4,[H.ii,H.ij,H.ik,H.il,H.im,H.e5,H.cQ])
s(P.eF,[P.jN,P.ff])
t(P.kh,P.kD)
t(P.ke,P.kl)
t(P.fo,P.i2)
t(P.eu,P.fo)
s(P.c0,[P.fN,P.ha])
t(P.c3,P.iV)
s(P.c3,[P.fO,P.jx,P.jw])
t(P.jv,P.ha)
s(P.a9,[P.E,P.p])
s(P.b8,[P.cb,P.ho])
t(P.jV,P.ci)
s(W.l,[W.I,W.hf,W.cH,W.aY,W.dh,W.b0,W.aP,W.dj,W.jH,W.db,P.fM,P.bX])
s(W.I,[W.a5,W.bI,W.cD])
s(W.a5,[W.x,P.v])
s(W.x,[W.fG,W.fH,W.dx,W.bZ,W.cC,W.hj,W.cI,W.cJ,W.dU,W.cM,W.iH,W.bj,W.eg,W.eh])
s(W.ba,[W.cA,W.h0,W.h1])
t(W.fZ,W.bb)
t(W.cB,W.eG)
t(W.eJ,W.eI)
t(W.dG,W.eJ)
t(W.eL,W.eK)
t(W.h5,W.eL)
t(W.aM,W.bY)
t(W.eO,W.eN)
t(W.cF,W.eO)
t(W.eQ,W.eP)
t(W.c5,W.eQ)
t(W.dM,W.cD)
t(W.bc,W.cH)
s(W.q,[W.bQ,W.bi])
s(W.bQ,[W.bd,W.aq,W.b2])
t(W.ib,W.eV)
t(W.id,W.eW)
t(W.eY,W.eX)
t(W.ig,W.eY)
t(W.f0,W.f_)
t(W.cR,W.f0)
t(W.f4,W.f3)
t(W.it,W.f4)
t(W.iE,W.f5)
t(W.di,W.dh)
t(W.iP,W.di)
t(W.f7,W.f6)
t(W.iQ,W.f7)
t(W.iT,W.fb)
t(W.fh,W.fg)
t(W.j_,W.fh)
t(W.dk,W.dj)
t(W.j0,W.dk)
t(W.fk,W.fj)
t(W.j8,W.fk)
t(W.jG,W.cM)
t(W.bn,W.aq)
t(W.fq,W.fp)
t(W.jU,W.fq)
t(W.eH,W.dH)
t(W.fs,W.fr)
t(W.kb,W.fs)
t(W.fu,W.ft)
t(W.eZ,W.fu)
t(W.fw,W.fv)
t(W.kn,W.fw)
t(W.fy,W.fx)
t(W.kr,W.fy)
t(W.jW,P.cY)
t(W.m1,W.jW)
t(W.jX,P.cZ)
t(P.fe,P.kp)
t(P.af,P.kg)
t(P.eS,P.eR)
t(P.hT,P.eS)
t(P.f2,P.f1)
t(P.ip,P.f2)
t(P.fd,P.fc)
t(P.iY,P.fd)
t(P.fm,P.fl)
t(P.ja,P.fm)
t(P.fK,P.eE)
t(P.iq,P.bX)
t(P.f9,P.f8)
t(P.iR,P.f9)
s(E.fP,[Z.dz,A.cV,T.d_])
s(D.B,[D.c6,D.c7,D.D,X.iu])
s(X.iu,[X.dX,X.bu,X.cN,X.eq])
s(O.aa,[D.dV,U.cG])
s(D.fS,[U.fV,U.ar,F.ce])
t(U.dD,U.ar)
s(A.cV,[A.dO,A.e_])
s(A.er,[A.Q,A.jg,A.jh,A.ji,A.je,A.a2,A.jf,A.O,A.d2,A.jk,A.d4,A.az,A.aG,A.aH])
s(O.bP,[O.dN,O.aV])
s(O.cK,[O.i5,O.i6,O.bf])
s(O.bf,[O.i8,O.i9])
t(T.ek,T.d_)
t(T.j1,T.ek)
s(V.dZ,[V.bw,V.d1])
t(X.hl,X.ei)
u(H.et,H.da)
u(H.dd,P.w)
u(H.de,H.c4)
u(H.df,P.w)
u(H.dg,H.c4)
u(P.eT,P.w)
u(P.fo,P.ku)
u(W.eG,W.h_)
u(W.eI,P.w)
u(W.eJ,W.C)
u(W.eK,P.w)
u(W.eL,W.C)
u(W.eN,P.w)
u(W.eO,W.C)
u(W.eP,P.w)
u(W.eQ,W.C)
u(W.eV,P.ax)
u(W.eW,P.ax)
u(W.eX,P.w)
u(W.eY,W.C)
u(W.f_,P.w)
u(W.f0,W.C)
u(W.f3,P.w)
u(W.f4,W.C)
u(W.f5,P.ax)
u(W.dh,P.w)
u(W.di,W.C)
u(W.f6,P.w)
u(W.f7,W.C)
u(W.fb,P.ax)
u(W.fg,P.w)
u(W.fh,W.C)
u(W.dj,P.w)
u(W.dk,W.C)
u(W.fj,P.w)
u(W.fk,W.C)
u(W.fp,P.w)
u(W.fq,W.C)
u(W.fr,P.w)
u(W.fs,W.C)
u(W.ft,P.w)
u(W.fu,W.C)
u(W.fv,P.w)
u(W.fw,W.C)
u(W.fx,P.w)
u(W.fy,W.C)
u(P.eR,P.w)
u(P.eS,W.C)
u(P.f1,P.w)
u(P.f2,W.C)
u(P.fc,P.w)
u(P.fd,W.C)
u(P.fl,P.w)
u(P.fm,W.C)
u(P.eE,P.ax)
u(P.f8,P.w)
u(P.f9,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.y=W.dx.prototype
C.o=W.bZ.prototype
C.z=W.c_.prototype
C.l=W.cC.prototype
C.A=W.dL.prototype
C.w=W.dM.prototype
C.P=W.bc.prototype
C.Q=J.a.prototype
C.a=J.aU.prototype
C.R=J.dP.prototype
C.e=J.dQ.prototype
C.n=J.dR.prototype
C.j=J.c8.prototype
C.c=J.bM.prototype
C.Y=J.bs.prototype
C.p=W.dU.prototype
C.a3=W.cR.prototype
C.G=J.is.prototype
C.b=P.cd.prototype
C.a4=W.bj.prototype
C.a5=W.eg.prototype
C.H=W.eh.prototype
C.x=J.cf.prototype
C.I=W.bn.prototype
C.J=W.db.prototype
C.L=new P.fO(!1)
C.K=new P.fN(C.L)
C.M=new P.ir()
C.N=new P.jx()
C.k=new P.kh()
C.d=new A.c1(0,"ColorSourceType.None")
C.i=new A.c1(1,"ColorSourceType.Solid")
C.f=new A.c1(2,"ColorSourceType.Texture2D")
C.h=new A.c1(3,"ColorSourceType.TextureCube")
C.v=new P.bq(0)
C.O=new P.bq(5e6)
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
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
C.B=function(hooks) { return hooks; }

C.U=function(getTagFallback) {
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
C.V=function() {
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
C.W=function(hooks) {
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
C.X=function(hooks) {
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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=H.f(u([127,2047,65535,1114111]),[P.p])
C.q=H.f(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.r=H.f(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.t=H.f(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.a_=H.f(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.a0=H.f(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.u=H.f(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.E=H.f(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a1=H.f(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.F=H.f(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.Z=H.f(u([]),[P.h])
C.a2=new H.fY(0,{},C.Z,[P.h,P.h])
C.m=new P.jv(!1)})();(function staticFields(){$.b9=0
$.cx=null
$.mn=null
$.m4=!1
$.ny=null
$.nq=null
$.nD=null
$.kR=null
$.kX=null
$.ma=null
$.ck=null
$.dn=null
$.dp=null
$.m5=!1
$.T=C.k
$.nm=null
$.mE=null
$.mI=null
$.cT=null
$.mN=null
$.mQ=null
$.n_=null
$.n3=null
$.n1=null
$.n2=null
$.n0=null
$.oh="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.og="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.mH=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q1","nH",function(){return H.nw("_$dart_dartClosure")})
u($,"q2","mf",function(){return H.nw("_$dart_js")})
u($,"q6","nI",function(){return H.bm(H.jc({
toString:function(){return"$receiver$"}}))})
u($,"q7","nJ",function(){return H.bm(H.jc({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q8","nK",function(){return H.bm(H.jc(null))})
u($,"q9","nL",function(){return H.bm(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qc","nO",function(){return H.bm(H.jc(void 0))})
u($,"qd","nP",function(){return H.bm(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qb","nN",function(){return H.bm(H.mW(null))})
u($,"qa","nM",function(){return H.bm(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qf","nR",function(){return H.bm(H.mW(void 0))})
u($,"qe","nQ",function(){return H.bm(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qv","mg",function(){return P.p1()})
u($,"qz","dt",function(){return[]})
u($,"qh","nS",function(){return P.oZ()})
u($,"qw","nW",function(){return H.ow(H.cj(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"qx","nX",function(){return P.lV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qy","nY",function(){return P.pn()})
u($,"qo","nV",function(){return Z.aQ(0)})
u($,"qi","nT",function(){return Z.aQ(511)})
u($,"qq","b7",function(){return Z.aQ(1)})
u($,"qp","b6",function(){return Z.aQ(2)})
u($,"qk","b5",function(){return Z.aQ(4)})
u($,"qr","bF",function(){return Z.aQ(8)})
u($,"qs","bG",function(){return Z.aQ(16)})
u($,"ql","bW",function(){return Z.aQ(32)})
u($,"qm","ds",function(){return Z.aQ(64)})
u($,"qn","nU",function(){return Z.aQ(96)})
u($,"qt","cu",function(){return Z.aQ(128)})
u($,"qj","bE",function(){return Z.aQ(256)})
u($,"q0","nG",function(){return new V.hc(1e-9)})
u($,"q_","P",function(){return $.nG()})})()
var v={mangledGlobalNames:{p:"int",E:"double",a9:"num",h:"String",K:"bool",z:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.z},{func:1,ret:P.z,args:[P.K]},{func:1,ret:F.ao,args:[F.ao]},{func:1,ret:-1,opt:[D.B]},{func:1,ret:P.z,args:[F.M]},{func:1,ret:-1,args:[D.B]},{func:1,ret:P.z,args:[F.H]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aq]},{func:1,ret:[P.ab,P.z]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.p,[P.n,E.a3]]},{func:1,ret:P.z,args:[W.q]},{func:1,ret:P.z,args:[D.B]},{func:1,ret:-1,args:[W.q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.h,args:[P.p]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:-1,args:[P.p,[P.n,D.ac]]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.p,[P.n,U.ar]]},{func:1,ret:-1,args:[P.p,[P.n,V.aD]]},{func:1,ret:P.z,args:[P.h]},{func:1,ret:P.z,args:[W.bi]},{func:1,ret:P.z,args:[,P.ae]},{func:1,args:[W.q]},{func:1,ret:P.K,args:[W.I]},{func:1,ret:W.a5,args:[W.I]},{func:1,ret:P.z,args:[P.p,,]},{func:1,ret:-1,args:[P.N],opt:[P.ae]},{func:1,ret:-1,opt:[P.N]},{func:1,ret:P.z,args:[P.a9]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.z,args:[,],opt:[P.ae]},{func:1,ret:[P.at,,],args:[,]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,args:[P.h]},{func:1,ret:P.K,args:[[P.n,D.ac]]},{func:1,ret:[P.A,P.h,P.h],args:[[P.A,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.h,P.p]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,args:[,P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:F.ao,args:[F.ao],named:{color:V.S}},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[F.H,F.H]},{func:1,ret:P.z,args:[F.aJ]},{func:1,ret:P.z,args:[P.h,,]},{func:1,ret:P.R,args:[P.p]},{func:1,ret:P.z,args:[P.bk]},{func:1,ret:P.R,args:[,,]},{func:1,ret:E.a3,args:[E.a3]},{func:1,ret:P.z,args:[E.a3]},{func:1,ret:[P.ab,,],args:[P.h]},{func:1,ret:P.h,args:[W.bc]},{func:1,ret:-1,args:[W.bn]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cO,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cP,Float64Array:H.cP,Int16Array:H.ii,Int32Array:H.ij,Int8Array:H.ik,Uint16Array:H.il,Uint32Array:H.im,Uint8ClampedArray:H.e5,CanvasPixelArray:H.e5,Uint8Array:H.cQ,HTMLBRElement:W.x,HTMLBaseElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTableSectionElement:W.x,HTMLTemplateElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fE,HTMLAnchorElement:W.fG,HTMLAreaElement:W.fH,Blob:W.bY,HTMLBodyElement:W.dx,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.c_,CDATASection:W.bI,CharacterData:W.bI,Comment:W.bI,ProcessingInstruction:W.bI,Text:W.bI,CSSNumericValue:W.cA,CSSUnitValue:W.cA,CSSPerspective:W.fZ,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cB,MSStyleCSSProperties:W.cB,CSS2Properties:W.cB,CSSImageValue:W.ba,CSSKeywordValue:W.ba,CSSPositionValue:W.ba,CSSResourceValue:W.ba,CSSURLImageValue:W.ba,CSSStyleValue:W.ba,CSSMatrixComponent:W.bb,CSSRotation:W.bb,CSSScale:W.bb,CSSSkew:W.bb,CSSTranslation:W.bb,CSSTransformComponent:W.bb,CSSTransformValue:W.h0,CSSUnparsedValue:W.h1,DataTransferItemList:W.h3,HTMLDivElement:W.cC,XMLDocument:W.cD,Document:W.cD,DOMException:W.h4,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.h5,DOMTokenList:W.h6,Element:W.a5,AbortPaymentEvent:W.q,AnimationEvent:W.q,AnimationPlaybackEvent:W.q,ApplicationCacheErrorEvent:W.q,BackgroundFetchClickEvent:W.q,BackgroundFetchEvent:W.q,BackgroundFetchFailEvent:W.q,BackgroundFetchedEvent:W.q,BeforeInstallPromptEvent:W.q,BeforeUnloadEvent:W.q,BlobEvent:W.q,CanMakePaymentEvent:W.q,ClipboardEvent:W.q,CloseEvent:W.q,CustomEvent:W.q,DeviceMotionEvent:W.q,DeviceOrientationEvent:W.q,ErrorEvent:W.q,ExtendableEvent:W.q,ExtendableMessageEvent:W.q,FetchEvent:W.q,FontFaceSetLoadEvent:W.q,ForeignFetchEvent:W.q,GamepadEvent:W.q,HashChangeEvent:W.q,InstallEvent:W.q,MediaEncryptedEvent:W.q,MediaKeyMessageEvent:W.q,MediaQueryListEvent:W.q,MediaStreamEvent:W.q,MediaStreamTrackEvent:W.q,MessageEvent:W.q,MIDIConnectionEvent:W.q,MIDIMessageEvent:W.q,MutationEvent:W.q,NotificationEvent:W.q,PageTransitionEvent:W.q,PaymentRequestEvent:W.q,PaymentRequestUpdateEvent:W.q,PopStateEvent:W.q,PresentationConnectionAvailableEvent:W.q,PresentationConnectionCloseEvent:W.q,PromiseRejectionEvent:W.q,PushEvent:W.q,RTCDataChannelEvent:W.q,RTCDTMFToneChangeEvent:W.q,RTCPeerConnectionIceEvent:W.q,RTCTrackEvent:W.q,SecurityPolicyViolationEvent:W.q,SensorErrorEvent:W.q,SpeechRecognitionError:W.q,SpeechRecognitionEvent:W.q,SpeechSynthesisEvent:W.q,StorageEvent:W.q,SyncEvent:W.q,TrackEvent:W.q,TransitionEvent:W.q,WebKitTransitionEvent:W.q,VRDeviceEvent:W.q,VRDisplayEvent:W.q,VRSessionEvent:W.q,MojoInterfaceRequestEvent:W.q,USBConnectionEvent:W.q,IDBVersionChangeEvent:W.q,AudioProcessingEvent:W.q,OfflineAudioCompletionEvent:W.q,WebGLContextEvent:W.q,Event:W.q,InputEvent:W.q,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MessagePort:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aM,FileList:W.cF,FileWriter:W.hf,HTMLFormElement:W.hj,Gamepad:W.aT,History:W.dL,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,HTMLDocument:W.dM,XMLHttpRequest:W.bc,XMLHttpRequestUpload:W.cH,XMLHttpRequestEventTarget:W.cH,ImageData:W.br,HTMLImageElement:W.cI,HTMLInputElement:W.cJ,KeyboardEvent:W.bd,HTMLLabelElement:W.dU,Location:W.hZ,HTMLAudioElement:W.cM,HTMLMediaElement:W.cM,MediaList:W.ia,MIDIInputMap:W.ib,MIDIOutputMap:W.id,MimeType:W.aW,MimeTypeArray:W.ig,PointerEvent:W.aq,MouseEvent:W.aq,DragEvent:W.aq,DocumentFragment:W.I,ShadowRoot:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.aX,PluginArray:W.it,ProgressEvent:W.bi,ResourceProgressEvent:W.bi,RTCStatsReport:W.iE,HTMLSelectElement:W.iH,SourceBuffer:W.aY,SourceBufferList:W.iP,SpeechGrammar:W.aZ,SpeechGrammarList:W.iQ,SpeechRecognitionResult:W.b_,Storage:W.iT,CSSStyleSheet:W.aO,StyleSheet:W.aO,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,HTMLTableElement:W.eg,HTMLTableRowElement:W.eh,TextTrack:W.b0,TextTrackCue:W.aP,VTTCue:W.aP,TextTrackCueList:W.j_,TextTrackList:W.j0,TimeRanges:W.j5,Touch:W.b1,TouchEvent:W.b2,TouchList:W.j8,TrackDefaultList:W.j9,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.ju,HTMLVideoElement:W.jG,VideoTrackList:W.jH,WheelEvent:W.bn,Window:W.db,DOMWindow:W.db,CSSRuleList:W.jU,ClientRect:W.eH,DOMRect:W.eH,GamepadList:W.kb,NamedNodeMap:W.eZ,MozNamedAttrMap:W.eZ,SpeechRecognitionResultList:W.kn,StyleSheetList:W.kr,SVGLength:P.be,SVGLengthList:P.hT,SVGNumber:P.bh,SVGNumberList:P.ip,SVGPointList:P.iv,SVGStringList:P.iY,SVGAElement:P.v,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGCircleElement:P.v,SVGClipPathElement:P.v,SVGDefsElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGEllipseElement:P.v,SVGFEBlendElement:P.v,SVGFEColorMatrixElement:P.v,SVGFEComponentTransferElement:P.v,SVGFECompositeElement:P.v,SVGFEConvolveMatrixElement:P.v,SVGFEDiffuseLightingElement:P.v,SVGFEDisplacementMapElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFloodElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEGaussianBlurElement:P.v,SVGFEImageElement:P.v,SVGFEMergeElement:P.v,SVGFEMergeNodeElement:P.v,SVGFEMorphologyElement:P.v,SVGFEOffsetElement:P.v,SVGFEPointLightElement:P.v,SVGFESpecularLightingElement:P.v,SVGFESpotLightElement:P.v,SVGFETileElement:P.v,SVGFETurbulenceElement:P.v,SVGFilterElement:P.v,SVGForeignObjectElement:P.v,SVGGElement:P.v,SVGGeometryElement:P.v,SVGGraphicsElement:P.v,SVGImageElement:P.v,SVGLineElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMaskElement:P.v,SVGMetadataElement:P.v,SVGPathElement:P.v,SVGPatternElement:P.v,SVGPolygonElement:P.v,SVGPolylineElement:P.v,SVGRadialGradientElement:P.v,SVGRectElement:P.v,SVGScriptElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGElement:P.v,SVGSVGElement:P.v,SVGSwitchElement:P.v,SVGSymbolElement:P.v,SVGTSpanElement:P.v,SVGTextContentElement:P.v,SVGTextElement:P.v,SVGTextPathElement:P.v,SVGTextPositioningElement:P.v,SVGTitleElement:P.v,SVGUseElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGTransform:P.bl,SVGTransformList:P.ja,AudioBuffer:P.fJ,AudioParamMap:P.fK,AudioTrackList:P.fM,AudioContext:P.bX,webkitAudioContext:P.bX,BaseAudioContext:P.bX,OfflineAudioContext:P.iq,WebGLBuffer:P.dy,WebGLFramebuffer:P.dK,WebGLProgram:P.ea,WebGL2RenderingContext:P.cd,WebGLShader:P.ec,WebGLTexture:P.ej,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iR})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e3.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.e4.$nativeSuperclassTag="ArrayBufferView"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.nB,[])
else G.nB([])})})()
//# sourceMappingURL=test.dart.js.map
