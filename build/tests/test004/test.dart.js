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
a[c]=function(){a[c]=function(){H.kM(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hK(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hu:function hu(a){this.a=a},
dY:function(){return new P.bO("No element")},
jC:function(){return new P.bO("Too many elements")},
l:function l(a){this.a=a},
dE:function dE(){},
b5:function b5(){},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
ed:function ed(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(){},
cY:function cY(){},
cX:function cX(){},
bm:function(a){var u,t
u=H.z(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kt:function(a){return v.types[H.S(a)]},
kA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.J(a).$iai},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.al(a)
if(typeof u!=="string")throw H.d(H.aW(a))
return u},
jS:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.dZ(u)
t=u[0]
s=u[1]
return new H.et(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bK:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
b9:function(a){return H.jJ(a)+H.hH(H.aX(a),0,null)},
jJ:function(a){var u,t,s,r,q,p,o,n,m
u=J.J(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.H||!!u.$iaT){p=C.v(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bm(r.length>1&&C.d.ac(r,0)===36?C.d.aJ(r,1):r)},
il:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jR:function(a){var u,t,s,r
u=H.a([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.aW(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.ax(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.aW(r))}return H.il(u)},
im:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aW(s))
if(s<0)throw H.d(H.aW(s))
if(s>65535)return H.jR(a)}return H.il(a)},
hw:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.ax(u,10))>>>0,56320|u&1023)}throw H.d(P.ab(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jQ:function(a){var u=H.b8(a).getFullYear()+0
return u},
jO:function(a){var u=H.b8(a).getMonth()+1
return u},
jK:function(a){var u=H.b8(a).getDate()+0
return u},
jL:function(a){var u=H.b8(a).getHours()+0
return u},
jN:function(a){var u=H.b8(a).getMinutes()+0
return u},
jP:function(a){var u=H.b8(a).getSeconds()+0
return u},
jM:function(a){var u=H.b8(a).getMilliseconds()+0
return u},
aY:function(a){throw H.d(H.aW(a))},
h:function(a,b){if(a==null)J.aZ(a)
throw H.d(H.c5(a,b))},
c5:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
u=H.S(J.aZ(a))
if(!(b<0)){if(typeof u!=="number")return H.aY(u)
t=b>=u}else t=!0
if(t)return P.b3(b,a,"index",null,u)
return P.cJ(b,"index",null)},
ko:function(a,b,c){if(a>c)return new P.ba(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ba(a,c,!0,b,"end","Invalid value")
return new P.am(!0,b,"end",null)},
aW:function(a){return new P.am(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.cE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.j_})
u.name=""}else u.toString=H.j_
return u},
j_:function(){return J.al(this.dartException)},
W:function(a){throw H.d(a)},
B:function(a){throw H.d(P.aK(a))},
au:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.a([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.eW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
eX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iw:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ig:function(a,b){return new H.eo(a,b==null?null:b.method)},
hv:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.e3(a,t,u?null:b.receiver)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.ax(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hv(H.c(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ig(H.c(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.j2()
p=$.j3()
o=$.j4()
n=$.j5()
m=$.j8()
l=$.j9()
k=$.j7()
$.j6()
j=$.jb()
i=$.ja()
h=q.U(t)
if(h!=null)return u.$1(H.hv(H.z(t),h))
else{h=p.U(t)
if(h!=null){h.method="call"
return u.$1(H.hv(H.z(t),h))}else{h=o.U(t)
if(h==null){h=n.U(t)
if(h==null){h=m.U(t)
if(h==null){h=l.U(t)
if(h==null){h=k.U(t)
if(h==null){h=n.U(t)
if(h==null){h=j.U(t)
if(h==null){h=i.U(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ig(H.z(t),h))}}return u.$1(new H.fc(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cP()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.am(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cP()
return a},
bj:function(a){var u
if(a==null)return new H.dd(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dd(a)},
kq:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.I(0,a[t],a[s])}return b},
kz:function(a,b,c,d,e,f){H.k(a,"$iaN")
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.X("Unsupported number of arguments for wrapped closure"))},
bi:function(a,b){var u
H.S(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kz)
a.$identity=u
return u},
js:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.J(d).$ib){u.$reflectionInfo=d
s=H.jS(u).r}else s=d
r=e?Object.create(new H.eJ().constructor.prototype):Object.create(new H.bv(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.an
if(typeof p!=="number")return p.P()
$.an=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.i3(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kt,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.i1:H.hq
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.i3(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jp:function(a,b,c,d){var u=H.hq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
i3:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jp(t,!r,u,b)
if(t===0){r=$.an
if(typeof r!=="number")return r.P()
$.an=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bw
if(q==null){q=H.ds("self")
$.bw=q}return new Function(r+H.c(q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.an
if(typeof r!=="number")return r.P()
$.an=r+1
o+=r
r="return function("+o+"){return this."
q=$.bw
if(q==null){q=H.ds("self")
$.bw=q}return new Function(r+H.c(q)+"."+H.c(u)+"("+o+");}")()},
jq:function(a,b,c,d){var u,t
u=H.hq
t=H.i1
switch(b?-1:a){case 0:throw H.d(H.jW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jr:function(a,b){var u,t,s,r,q,p,o,n
u=$.bw
if(u==null){u=H.ds("self")
$.bw=u}t=$.i0
if(t==null){t=H.ds("receiver")
$.i0=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jq(r,!p,s,b)
if(r===1){u="return function(){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+");"
t=$.an
if(typeof t!=="number")return t.P()
$.an=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+", "+n+");"
t=$.an
if(typeof t!=="number")return t.P()
$.an=t+1
return new Function(u+t+"}")()},
hK:function(a,b,c,d,e,f,g){return H.js(a,b,H.S(c),d,!!e,!!f,g)},
hq:function(a){return a.a},
i1:function(a){return a.c},
ds:function(a){var u,t,s,r,q
u=new H.bv("self","target","receiver","name")
t=J.dZ(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ak(a,"String"))},
ls:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ak(a,"double"))},
kF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ak(a,"num"))},
hI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ak(a,"bool"))},
S:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ak(a,"int"))},
iY:function(a,b){throw H.d(H.ak(a,H.bm(H.z(b).substring(2))))},
kH:function(a,b){throw H.d(H.jo(a,H.bm(H.z(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.iY(a,b)},
bk:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else u=!0
if(u)return a
H.kH(a,b)},
hg:function(a){if(a==null)return a
if(!!J.J(a).$ib)return a
throw H.d(H.ak(a,"List<dynamic>"))},
kB:function(a,b){var u
if(a==null)return a
u=J.J(a)
if(!!u.$ib)return a
if(u[b])return a
H.iY(a,b)},
iS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.S(u)]
else return a.$S()}return},
dm:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.iS(J.J(a))
if(u==null)return!1
return H.iJ(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.hE)return a
$.hE=!0
try{if(H.dm(a,b))return a
u=H.hj(b)
t=H.ak(a,u)
throw H.d(t)}finally{$.hE=!1}},
hL:function(a,b){if(a!=null&&!H.hJ(a,b))H.W(H.ak(a,H.hj(b)))
return a},
ak:function(a,b){return new H.eY("TypeError: "+P.dI(a)+": type '"+H.iN(a)+"' is not a subtype of type '"+b+"'")},
jo:function(a,b){return new H.dt("CastError: "+P.dI(a)+": type '"+H.iN(a)+"' is not a subtype of type '"+b+"'")},
iN:function(a){var u,t
u=J.J(a)
if(!!u.$ibx){t=H.iS(u)
if(t!=null)return H.hj(t)
return"Closure"}return H.b9(a)},
kM:function(a){throw H.d(new P.dx(H.z(a)))},
jW:function(a){return new H.ey(a)},
iT:function(a){return v.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
aX:function(a){if(a==null)return
return a.$ti},
lt:function(a,b,c){return H.bl(a["$a"+H.c(c)],H.aX(b))},
hb:function(a,b,c,d){var u
H.z(c)
H.S(d)
u=H.bl(a["$a"+H.c(c)],H.aX(b))
return u==null?null:u[d]},
R:function(a,b,c){var u
H.z(b)
H.S(c)
u=H.bl(a["$a"+H.c(b)],H.aX(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.S(b)
u=H.aX(a)
return u==null?null:u[b]},
hj:function(a){return H.aV(a,null)},
aV:function(a,b){var u,t
H.m(b,"$ib",[P.j],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bm(a[0].name)+H.hH(a,1,b)
if(typeof a=="function")return H.bm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.S(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.c(b[t])}if('func' in a)return H.kc(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.j]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.a([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.d.P(o,b[m])
l=t[p]
if(l!=null&&l!==P.y)o+=" extends "+H.aV(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aV(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aV(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kp(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.z(u[g])
i=i+h+H.aV(d[c],b)+(" "+H.c(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hH:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.j],"$ab")
if(a==null)return""
u=new P.bc("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aV(p,c)}return"<"+u.i(0)+">"},
bl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dl:function(a,b,c,d){var u,t
H.z(b)
H.hg(c)
H.z(d)
if(a==null)return!1
u=H.aX(a)
t=J.J(a)
if(t[b]==null)return!1
return H.iQ(H.bl(t[d],u),null,c,null)},
m:function(a,b,c,d){H.z(b)
H.hg(c)
H.z(d)
if(a==null)return a
if(H.dl(a,b,c,d))return a
throw H.d(H.ak(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bm(b.substring(2))+H.hH(c,0,null),v.mangledGlobalNames)))},
iQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ag(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ag(a[t],b,c[t],d))return!1
return!0},
lq:function(a,b,c){return a.apply(b,H.bl(J.J(b)["$a"+H.c(c)],H.aX(b)))},
iV:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="y"||a.name==="w"||a===-1||a===-2||H.iV(u)}return!1},
hJ:function(a,b){var u,t
if(a==null)return b==null||b.name==="y"||b.name==="w"||b===-1||b===-2||H.iV(b)
if(b==null||b===-1||b.name==="y"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dm(a,b)}u=J.J(a).constructor
t=H.aX(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ag(u,null,b,null)},
v:function(a,b){if(a!=null&&!H.hJ(a,b))throw H.d(H.ak(a,H.hj(b)))
return a},
ag:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="y"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="y"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ag(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="w")return!0
if('func' in c)return H.iJ(a,b,c,d)
if('func' in a)return c.name==="aN"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ag("type" in a?a.type:null,b,s,d)
else if(H.ag(a,b,s,d))return!0
else{if(!('$i'+"bE" in t.prototype))return!1
r=t.prototype["$a"+"bE"]
q=H.bl(r,u?a.slice(1):null)
return H.ag(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iQ(H.bl(m,u),b,p,d)},
iJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ag(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ag(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ag(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ag(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.kE(h,b,g,d)},
kE:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ag(c[r],d,a[r],b))return!1}return!0},
lr:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
kC:function(a){var u,t,s,r,q,p
u=H.z($.iU.$1(a))
t=$.h8[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hf[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.z($.iP.$2(a,u))
if(u!=null){t=$.h8[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hf[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hi(s)
$.h8[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hf[u]=s
return s}if(q==="-"){p=H.hi(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iX(a,s)
if(q==="*")throw H.d(P.ix(u))
if(v.leafTags[u]===true){p=H.hi(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iX(a,s)},
iX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hQ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hi:function(a){return J.hQ(a,!1,null,!!a.$iai)},
kD:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hi(u)
else return J.hQ(u,c,null,null)},
kx:function(){if(!0===$.hP)return
$.hP=!0
H.ky()},
ky:function(){var u,t,s,r,q,p,o,n
$.h8=Object.create(null)
$.hf=Object.create(null)
H.kw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iZ.$1(q)
if(p!=null){o=H.kD(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kw:function(){var u,t,s,r,q,p,o
u=C.L()
u=H.bh(C.I,H.bh(C.N,H.bh(C.u,H.bh(C.u,H.bh(C.M,H.bh(C.J,H.bh(C.K(C.v),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iU=new H.hc(q)
$.iP=new H.hd(p)
$.iZ=new H.he(o)},
bh:function(a,b){return a(b)||b},
jE:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(new P.dR("Illegal RegExp pattern ("+String(r)+")",a,null))},
kK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
hS:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
et:function et(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
eW:function eW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eo:function eo(a,b){this.a=a
this.b=b},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
hm:function hm(a){this.a=a},
dd:function dd(a){this.a=a
this.b=null},
bx:function bx(){},
eP:function eP(){},
eJ:function eJ(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.a=a},
dt:function dt(a){this.a=a},
ey:function ey(a){this.a=a},
aq:function aq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e6:function e6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cv:function cv(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
e2:function e2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hD:function(a){return a},
dk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.c5(b,a))},
kb:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ko(a,b,c))
return b},
cC:function cC(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
kp:function(a){return J.i9(a?Object.keys(a):[],null)},
kG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ha:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hP==null){H.kx()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.ix("Return interceptor for "+H.c(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hU()]
if(q!=null)return q
q=H.kC(a)
if(q!=null)return q
if(typeof a=="function")return C.O
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.hU(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
jD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.hp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ab(a,0,4294967295,"length",null))
return J.i9(new Array(a),b)},
i9:function(a,b){return J.dZ(H.a(a,[b]))},
dZ:function(a){H.hg(a)
a.fixed$length=Array
return a},
J:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cs.prototype
return J.e0.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.e1.prototype
if(typeof a=="boolean")return J.e_.prototype
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.y)return a
return J.ha(a)},
hM:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.y)return a
return J.ha(a)},
hN:function(a){if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.y)return a
return J.ha(a)},
kr:function(a){if(typeof a=="number")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.aT.prototype
return a},
ks:function(a){if(typeof a=="number")return J.b4.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.aT.prototype
return a},
hO:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.aT.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.y)return a
return J.ha(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).n(a,b)},
hX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ks(a).H(a,b)},
jh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.kr(a).u(a,b)},
ji:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hM(a).m(a,b)},
jj:function(a,b,c,d){return J.a5(a).dh(a,b,c,d)},
dn:function(a,b){return J.a5(a).en(a,b)},
hY:function(a,b){return J.a5(a).p(a,b)},
hn:function(a,b){return J.hN(a).N(a,b)},
jk:function(a){return J.a5(a).geQ(a)},
c9:function(a){return J.J(a).gC(a)},
bt:function(a){return J.hN(a).gF(a)},
aZ:function(a){return J.hM(a).gl(a)},
jl:function(a){return J.a5(a).gfW(a)},
ho:function(a,b){return J.a5(a).ai(a,b)},
hZ:function(a){return J.hN(a).fN(a)},
jm:function(a,b,c){return J.hO(a).ar(a,b,c)},
jn:function(a){return J.hO(a).h_(a)},
al:function(a){return J.J(a).i(a)},
M:function M(){},
e_:function e_(){},
e1:function e1(){},
ct:function ct(){},
eq:function eq(){},
aT:function aT(){},
aP:function aP(){},
ap:function ap(a){this.$ti=a},
ht:function ht(a){this.$ti=a},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b4:function b4(){},
cs:function cs(){},
e0:function e0(){},
aO:function aO(){}},P={
k1:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kj()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bi(new P.fu(u),1)).observe(t,{childList:true})
return new P.ft(u,t,s)}else if(self.setImmediate!=null)return P.kk()
return P.kl()},
k2:function(a){self.scheduleImmediate(H.bi(new P.fv(H.f(a,{func:1,ret:-1})),0))},
k3:function(a){self.setImmediate(H.bi(new P.fw(H.f(a,{func:1,ret:-1})),0))},
k4:function(a){P.hy(C.l,H.f(a,{func:1,ret:-1}))},
hy:function(a,b){var u
H.f(b,{func:1,ret:-1})
u=C.h.af(a.a,1000)
return P.k9(u<0?0:u,b)},
iv:function(a,b){var u
H.f(b,{func:1,ret:-1,args:[P.as]})
u=C.h.af(a.a,1000)
return P.ka(u<0?0:u,b)},
k9:function(a,b){var u=new P.de(!0)
u.dc(a,b)
return u},
ka:function(a,b){var u=new P.de(!1)
u.dd(a,b)
return u},
k5:function(a,b){var u,t,s
b.a=1
try{a.co(new P.fE(b),new P.fF(b),null)}catch(s){u=H.a6(s)
t=H.bj(s)
P.kI(new P.fG(b,u,t))}},
iE:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaf")
if(u>=4){t=b.aY()
b.a=a.a
b.c=a.c
P.bZ(b,t)}else{t=H.k(b.c,"$iax")
b.a=2
b.c=a
a.bJ(t)}},
bZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iT")
t=t.b
p=q.a
o=q.b
t.toString
P.h3(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bZ(u.a,b)}t=u.a
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
if(k){H.k(m,"$iT")
t=t.b
p=m.a
o=m.b
t.toString
P.h3(null,null,t,p,o)
return}j=$.F
if(j!=l)$.F=l
else j=null
t=b.c
if(t===8)new P.fK(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fJ(s,b,m).$0()}else if((t&2)!==0)new P.fI(u,s,b).$0()
if(j!=null)$.F=j
t=s.b
if(!!J.J(t).$ibE){if(t.a>=4){i=H.k(o.c,"$iax")
o.c=null
b=o.aw(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iE(t,o)
return}}h=b.b
i=H.k(h.c,"$iax")
h.c=null
b=h.aw(i)
t=s.a
p=s.b
if(!t){H.v(p,H.q(h,0))
h.a=4
h.c=p}else{H.k(p,"$iT")
h.a=8
h.c=p}u.a=h
t=h}},
kf:function(a,b){if(H.dm(a,{func:1,args:[P.y,P.a0]}))return H.f(a,{func:1,ret:null,args:[P.y,P.a0]})
if(H.dm(a,{func:1,args:[P.y]}))return H.f(a,{func:1,ret:null,args:[P.y]})
throw H.d(P.hp(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ke:function(){var u,t
for(;u=$.bg,u!=null;){$.c4=null
t=u.b
$.bg=t
if(t==null)$.c3=null
u.a.$0()}},
ki:function(){$.hF=!0
try{P.ke()}finally{$.c4=null
$.hF=!1
if($.bg!=null)$.hV().$1(P.iR())}},
iM:function(a){var u=new P.d1(H.f(a,{func:1,ret:-1}))
if($.bg==null){$.c3=u
$.bg=u
if(!$.hF)$.hV().$1(P.iR())}else{$.c3.b=u
$.c3=u}},
kh:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.bg
if(u==null){P.iM(a)
$.c4=$.c3
return}t=new P.d1(a)
s=$.c4
if(s==null){t.b=u
$.c4=t
$.bg=t}else{t.b=s.b
s.b=t
$.c4=t
if(t.b==null)$.c3=t}},
kI:function(a){var u,t
u={func:1,ret:-1}
H.f(a,u)
t=$.F
if(C.f===t){P.h5(null,null,C.f,a)
return}t.toString
P.h5(null,null,t,H.f(t.b1(a),u))},
iu:function(a,b){var u,t
u={func:1,ret:-1}
H.f(b,u)
t=$.F
if(t===C.f){t.toString
return P.hy(a,b)}return P.hy(a,H.f(t.b1(b),u))},
k_:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.as]}
H.f(b,u)
t=$.F
if(t===C.f){t.toString
return P.iv(a,b)}s=t.bS(b,P.as)
$.F.toString
return P.iv(a,H.f(s,u))},
h3:function(a,b,c,d,e){var u={}
u.a=d
P.kh(new P.h4(u,e))},
iK:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.F
if(t===c)return d.$0()
$.F=c
u=t
try{t=d.$0()
return t}finally{$.F=u}},
iL:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.v(e,g)
t=$.F
if(t===c)return d.$1(e)
$.F=c
u=t
try{t=d.$1(e)
return t}finally{$.F=u}},
kg:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
t=$.F
if(t===c)return d.$2(e,f)
$.F=c
u=t
try{t=d.$2(e,f)
return t}finally{$.F=u}},
h5:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b1(d):c.eR(d,-1)
P.iM(d)},
fu:function fu(a){this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
de:function de(a){this.a=a
this.b=null
this.c=0},
h_:function h_(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fD:function fD(a,b){this.a=a
this.b=b},
fH:function fH(a,b){this.a=a
this.b=b},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fL:function fL(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a){this.a=a
this.b=null},
eK:function eK(){},
eM:function eM(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
bP:function bP(){},
eL:function eL(){},
as:function as(){},
T:function T(a,b){this.a=a
this.b=b},
h2:function h2(){},
h4:function h4(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function(a,b,c){H.hg(a)
return H.m(H.kq(a,new H.aq([b,c])),"$iia",[b,c],"$aia")},
jF:function(a,b){return new H.aq([a,b])},
cw:function(a,b,c,d){return new P.fN([d])},
hC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k8:function(a,b,c){var u=new P.d7(a,b,[c])
u.c=a.e
return u},
jB:function(a,b,c){var u,t
if(P.hG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a([],[P.j])
t=$.c8()
C.a.h(t,a)
try{P.kd(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.is(b,H.kB(u,"$io"),", ")+c
return t.charCodeAt(0)==0?t:t},
hs:function(a,b,c){var u,t,s
if(P.hG(a))return b+"..."+c
u=new P.bc(b)
t=$.c8()
C.a.h(t,a)
try{s=u
s.a=P.is(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hG:function(a){var u,t
for(u=0;t=$.c8(),u<t.length;++u)if(a===t[u])return!0
return!1},
kd:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.j],"$ab")
u=a.gF(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.q())return
r=H.c(u.gA())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.q()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gA();++s
if(!u.q()){if(s<=4){C.a.h(b,H.c(o))
return}q=H.c(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gA();++s
for(;u.q();o=n,n=m){m=u.gA();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.c(o)
q=H.c(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ib:function(a,b){var u,t,s
u=P.cw(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)u.h(0,H.v(a[s],b))
return u},
ic:function(a){var u,t
u={}
if(P.hG(a))return"{...}"
t=new P.bc("")
try{C.a.h($.c8(),a)
t.a+="{"
u.a=!0
a.O(0,new P.eb(u,t))
t.a+="}"}finally{u=$.c8()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fN:function fN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bf:function bf(a){this.a=a
this.c=this.b=null},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e8:function e8(){},
H:function H(){},
ea:function ea(){},
eb:function eb(a,b){this.a=a
this.b=b},
b6:function b6(){},
fT:function fT(){},
d8:function d8(){},
by:function by(){},
bz:function bz(){},
dG:function dG(){},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dV:function dV(a){this.a=a},
fe:function fe(a){this.a=a},
ff:function ff(){},
h0:function h0(a){this.b=this.a=0
this.c=a},
jz:function(a){if(a instanceof H.bx)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
jH:function(a,b,c,d){var u,t
H.v(b,d)
u=J.jD(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.I(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
jI:function(a,b,c){var u,t,s
u=[c]
t=H.a([],u)
for(s=a.gF(a);s.q();)C.a.h(t,H.v(s.gA(),c))
if(b)return t
return H.m(J.dZ(t),"$ib",u,"$ab")},
hx:function(a,b,c){var u,t
u=P.u
H.m(a,"$io",[u],"$ao")
if(a.constructor===Array){H.m(a,"$iap",[u],"$aap")
t=a.length
c=P.io(b,c,t,null,null,null)
return H.im(b>0||c<t?C.a.cU(a,b,c):a)}return P.jY(a,b,c)},
jY:function(a,b,c){var u,t,s
H.m(a,"$io",[P.u],"$ao")
u=J.bt(a)
for(t=0;t<b;++t)if(!u.q())throw H.d(P.ab(b,0,t,null,null))
s=[]
for(;u.q();)s.push(u.gA())
return H.im(s)},
jT:function(a,b,c){return new H.e2(a,H.jE(a,!1,!0,!1))},
is:function(a,b,c){var u=J.bt(b)
if(!u.q())return a
if(c.length===0){do a+=H.c(u.gA())
while(u.q())}else{a+=H.c(u.gA())
for(;u.q();)a=a+c+H.c(u.gA())}return a},
iI:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.u],"$ab")
if(c===C.q){u=$.jg().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.eZ(H.v(b,H.R(c,"by",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.hw(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jt:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ju:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci:function(a){if(a>=10)return""+a
return"0"+a},
i6:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
dI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jz(a)},
hp:function(a,b,c){return new P.am(!0,a,b,c)},
cJ:function(a,b,c){return new P.ba(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.ba(b,c,!0,a,d,"Invalid value")},
io:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.ab(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.ab(b,a,c,"end",f))
return b}return c},
b3:function(a,b,c,d,e){var u=H.S(e==null?J.aZ(b):e)
return new P.dX(b,u,!0,a,c,"Index out of range")},
ac:function(a){return new P.fd(a)},
ix:function(a){return new P.fb(a)},
ir:function(a){return new P.bO(a)},
aK:function(a){return new P.dv(a)},
X:function(a){return new P.d4(a)},
hR:function(a){H.kG(a)},
D:function D(){},
aL:function aL(a,b){this.a=a
this.b=b},
r:function r(){},
az:function az(a){this.a=a},
dC:function dC(){},
dD:function dD(){},
aM:function aM(){},
cE:function cE(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dX:function dX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fd:function fd(a){this.a=a},
fb:function fb(a){this.a=a},
bO:function bO(a){this.a=a},
dv:function dv(a){this.a=a},
ep:function ep(){},
cP:function cP(){},
dx:function dx(a){this.a=a},
d4:function d4(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(){},
u:function u(){},
o:function o(){},
ao:function ao(){},
b:function b(){},
w:function w(){},
a1:function a1(){},
y:function y(){},
a0:function a0(){},
j:function j(){},
bc:function bc(a){this.a=a},
km:function(a,b){var u={}
a.O(0,new P.h6(u))
return u},
h6:function h6(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
dO:function dO(){},
dP:function dP(){},
bL:function bL(){},
i:function i(){},
cc:function cc(){},
cn:function cn(){},
cH:function cH(){},
bb:function bb(){},
cN:function cN(){},
cW:function cW(){}},W={
i_:function(a){var u=document.createElement("a")
return u},
i2:function(a,b){var u=document.createElement("canvas")
return u},
jx:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).T(u,a,b,c)
t.toString
u=W.t
u=new H.bW(new W.V(t),H.f(new W.dF(),{func:1,ret:P.D,args:[u]}),[u])
return H.k(u.ga9(u),"$iC")},
jy:function(a){H.k(a,"$ib0")
return"wheel"},
bC:function(a){var u,t,s
u="element tag unavailable"
try{t=J.jl(a)
if(typeof t==="string")u=a.tagName}catch(s){H.a6(s)}return u},
fM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iG:function(a,b,c,d){var u,t
u=W.fM(W.fM(W.fM(W.fM(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Q:function(a,b,c,d,e){var u,t
u=W.iO(new W.fC(c),W.e)
t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.e]})
if(t)J.jj(a,b,u,!1)}return new W.fB(a,b,u,!1,[e])},
iF:function(a){var u,t
u=W.i_(null)
t=window.location
u=new W.aU(new W.fS(u,t))
u.d7(a)
return u},
k6:function(a,b,c,d){H.k(a,"$iC")
H.z(b)
H.z(c)
H.k(d,"$iaU")
return!0},
k7:function(a,b,c,d){var u,t,s
H.k(a,"$iC")
H.z(b)
H.z(c)
u=H.k(d,"$iaU").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
iH:function(){var u,t,s,r,q
u=P.j
t=P.ib(C.m,u)
s=H.q(C.m,0)
r=H.f(new W.fY(),{func:1,ret:u,args:[s]})
q=H.a(["TEMPLATE"],[u])
t=new W.fX(t,P.cw(null,null,null,u),P.cw(null,null,null,u),P.cw(null,null,null,u),null)
t.da(null,new H.ee(C.m,r,[s,u]),q,null)
return t},
iO:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.F
if(u===C.f)return a
return u.bS(a,b)},
n:function n(){},
ca:function ca(){},
dp:function dp(){},
bu:function bu(){},
aF:function aF(){},
b_:function b_(){},
aG:function aG(){},
bA:function bA(){},
dw:function dw(){},
a8:function a8(){},
bB:function bB(){},
dB:function dB(){},
cj:function cj(){},
ck:function ck(){},
fy:function fy(a,b){this.a=a
this.b=b},
C:function C(){},
dF:function dF(){},
e:function e(){},
b0:function b0(){},
dQ:function dQ(){},
co:function co(){},
b2:function b2(){},
cp:function cp(){},
ar:function ar(){},
cx:function cx(){},
P:function P(){},
V:function V(a){this.a=a},
t:function t(){},
bJ:function bJ(){},
cI:function cI(){},
ez:function ez(){},
bd:function bd(){},
cQ:function cQ(){},
cR:function cR(){},
eO:function eO(){},
bQ:function bQ(){},
at:function at(){},
aj:function aj(){},
eV:function eV(){},
aS:function aS(){},
aw:function aw(){},
bX:function bX(){},
bY:function bY(){},
d3:function d3(){},
d9:function d9(){},
fx:function fx(){},
fz:function fz(a){this.a=a},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fB:function fB(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fC:function fC(a){this.a=a},
aU:function aU(a){this.a=a},
a2:function a2(){},
cD:function cD(a){this.a=a},
em:function em(a){this.a=a},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(){},
fU:function fU(){},
fV:function fV(){},
fX:function fX(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fY:function fY(){},
fW:function fW(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a4:function a4(){},
fS:function fS(a,b){this.a=a
this.b=b},
dh:function dh(a){this.a=a},
h1:function h1(a){this.a=a},
d2:function d2(){},
d5:function d5(){},
d6:function d6(){},
da:function da(){},
db:function db(){},
df:function df(){},
dg:function dg(){},
di:function di(){},
dj:function dj(){}},O={
i4:function(a){var u=new O.N([a])
u.bl(a)
return u},
N:function N(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bI:function bI(){this.b=this.a=null},
dz:function dz(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
be:function be(){}},E={
aB:function(a,b,c,d,e,f){var u,t,s,r,q
u=new E.U()
u.a=d
u.b=!0
u.sd6(0,O.i4(E.U))
u.y.aH(u.gfv(),u.gfA())
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
if(t!=null)t.gv().G(0,u.gcc())
s=u.c
if(s!=null)s.gv().h(0,u.gcc())
r=new D.I("shape",t,u.c,u,[F.cO])
r.b=!0
u.W(r)}if(!J.L(u.r,c)){q=u.r
if(q!=null)q.gv().G(0,u.gca())
c.gv().h(0,u.gca())
u.r=c
r=new D.I("mover",q,c,u,[U.Y])
r.b=!0
u.W(r)}return u},
jV:function(a,b){var u=new E.eu(a,b)
u.d0(a,b)
return u},
jZ:function(a,b,c,d,e){var u,t,s,r
u=J.J(a)
if(!!u.$ib_)return E.it(a,!0,!0,!0,!1)
t=W.i2(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbU(a).h(0,t)
r=E.it(t,!0,!0,!0,!1)
r.a=a
return r},
it:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.cT()
t=P.jG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
s=C.r.bf(a,"webgl",t)
s=H.k(s==null?C.r.bf(a,"experimental-webgl",t):s,"$ibb")
if(s==null)H.W(P.X("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.jV(s,a)
r=new T.eQ(s)
r.b=H.S((s&&C.b).bg(s,3379))
r.c=H.S(C.b.bg(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.cZ(a)
q=new X.e4()
q.c=new X.aD(!1,!1,!1)
q.sek(P.cw(null,null,null,P.u))
r.b=q
q=new X.eg(r)
q.f=0
q.r=V.cG()
q.x=V.cG()
q.Q=1
q.ch=1
r.c=q
q=new X.e9(r)
q.r=0
q.x=V.cG()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.eU(r)
q.e=0
q.f=V.cG()
q.r=V.cG()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sdt(H.a([],[[P.bP,P.y]]))
q=r.z
p=document
o=W.P
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.Q(p,"contextmenu",H.f(r.gdP(),n),!1,o))
q=r.z
m=W.e
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.Q(a,"focus",H.f(r.gdV(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.Q(a,"blur",H.f(r.gdJ(),l),!1,m))
q=r.z
k=W.ar
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.Q(p,"keyup",H.f(r.gdZ(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.Q(p,"keydown",H.f(r.gdX(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.Q(a,"mousedown",H.f(r.ge1(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Q(a,"mouseup",H.f(r.ge5(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Q(a,"mousemove",H.f(r.ge3(),n),!1,o))
k=r.z
j=W.aw;(k&&C.a).h(k,W.Q(a,H.z(W.jy(a)),H.f(r.ge7(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.Q(p,"mousemove",H.f(r.gdR(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.Q(p,"mouseup",H.f(r.gdT(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.Q(p,"pointerlockchange",H.f(r.ge9(),l),!1,m))
m=r.z
l=W.aj
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.Q(a,"touchstart",H.f(r.gei(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Q(a,"touchend",H.f(r.gee(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Q(a,"touchmove",H.f(r.geg(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aL(Date.now(),!1)
u.cy=0
u.bK()
return u},
dr:function dr(){},
U:function U(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ex:function ex(a){this.a=a},
cT:function cT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eR:function eR(a){this.a=a}},Z={
k0:function(a,b,c){var u
H.m(c,"$ib",[P.u],"$ab")
u=a.createBuffer()
C.b.a0(a,b,u)
C.b.bT(a,b,new Int16Array(H.hD(c)),35044)
C.b.a0(a,b,null)
return new Z.d0(b,u)},
ae:function(a){return new Z.d_(a)},
d0:function d0(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fr:function fr(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a}},D={
ah:function(){var u=new D.bD()
u.sa3(null)
u.sav(null)
u.c=null
u.d=0
return u},
du:function du(){},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
dJ:function dJ(a){this.a=a},
dK:function dK(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
cq:function cq(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cr:function cr(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
I:function I(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cf:function cf(a,b){this.a=a
this.b=b},cu:function cu(a,b){this.a=a
this.b=b},e4:function e4(){var _=this
_.d=_.c=_.b=_.a=null},e9:function e9(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},eg:function eg(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eU:function eU(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cZ:function cZ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jA:function(a,b,c,d,e,f,g){var u,t
u=new X.dS()
t=new V.aJ(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ip
if(t==null){t=V.jU(0,0,1,1)
$.ip=t}u.r=t
return u},
cg:function cg(){},
dS:function dS(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cS:function cS(){}},V={
hT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cM(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.d.a7("null",c)
return C.d.a7(C.c.cq(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
h9:function(a,b,c){var u,t,s,r,q
H.m(a,"$ib",[P.r],"$ab")
u=H.a([],[P.j])
for(t=0,s=0;s<4;++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.h(u,q)
C.a.I(u,q,C.d.a7(u[q],t))}return u},
ef:function(){var u=$.id
if(u==null){u=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.id=u}return u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cG:function(){var u=$.ij
if(u==null){u=new V.a_(0,0)
$.ij=u}return u},
jU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cL(a,b,c,d)},
fg:function(){var u=$.iD
if(u==null){u=new V.K(0,0,0)
$.iD=u}return u},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a){this.a=a},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
E:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.X("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.d.ac(a,0)
t=C.d.ac(b,0)
s=new V.es()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new V.eA()
u.d1(a)
return u},
eT:function(){var u,t
u=new V.eS()
t=P.j
u.seG(new H.aq([t,V.bN]))
u.seI(new H.aq([t,V.bR]))
u.c=null
return u},
ay:function ay(){},
a3:function a3(){},
cy:function cy(){},
Z:function Z(){this.a=null},
es:function es(){this.b=this.a=null},
eA:function eA(){this.a=null},
bN:function bN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b){this.a=a
this.b=b
this.c=null},
eS:function eS(){this.c=this.b=this.a=null},
bS:function bS(a){this.b=a
this.a=this.c=null},
kJ:function(a){P.k_(C.E,new V.hk(a))},
jX:function(a,b){var u=new V.eE()
u.d3(a,!0)
return u},
aH:function aH(){},
hk:function hk(a){this.a=a},
dy:function dy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dT:function dT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dU:function dU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
er:function er(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eE:function eE(){this.b=this.a=null},
eG:function eG(a){this.a=a},
eF:function eF(a){this.a=a},
eH:function eH(a){this.a=a}},U={
i5:function(a){var u=new U.ch()
u.a=a
return u},
ch:function ch(){this.b=this.a=null},
bF:function bF(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
Y:function Y(){},
cM:function cM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cl:function cl(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
hz:function(a,b,c,d,e){var u=new A.f0(a,b,c,e)
u.f=d
u.seK(P.jH(d,0,!1,P.u))
return u},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a){this.a=a},
dA:function dA(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
bM:function bM(){},
cV:function cV(){},
f6:function f6(a){this.a=a},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kN:function(a,b,c,d){return F.kn(c,a,d,b,new F.hl())},
kn:function(a,b,c,d,e){var u,t
u=F.kL(a,b,new F.h7(H.f(e,{func:1,ret:V.aa,args:[P.r]}),d,b,c),null)
if(u==null)return
t=u.e
if(t!=null)++t.d
u.d.b3()
u.a.b3()
t=u.e
if(t!=null)t.aq()
u.fu(new F.fm(),new F.en())
return u},
kL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
if(a<1)return
if(b<1)return
u=new F.cO()
t=new F.fh(u)
t.b=!1
s=[F.ad]
t.seL(H.a([],s))
u.a=t
t=new F.eD(u)
t.saW(H.a([],[F.b7]))
u.b=t
t=new F.eC(u)
t.sdD(H.a([],[F.aQ]))
u.c=t
t=new F.eB(u)
t.sdu(H.a([],[F.O]))
u.d=t
u.e=null
r=H.a([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.hA(null,null,new V.aJ(s,0,0,1),null,null,new V.a_(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.bX(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.hA(null,null,new V.aJ(j,i,h,1),null,null,new V.a_(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.bX(d))}}u.d.eM(a+1,b+1,r)
return u},
dL:function(a,b,c){var u,t
u=new F.O()
t=a.a
if(t==null)H.W(P.X("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.W(P.X("May not create a face with vertices attached to different shapes."))
u.ey(a)
u.ez(b)
u.eA(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
hA:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ad()
t=new F.fp(u)
t.saW(H.a([],[F.b7]))
u.b=t
t=new F.fl(u)
s=[F.aQ]
t.sdE(H.a([],s))
t.sdF(H.a([],s))
u.c=t
t=new F.fi(u)
s=[F.O]
t.sdv(H.a([],s))
t.sdw(H.a([],s))
t.sdz(H.a([],s))
u.d=t
h=$.jc()
u.e=0
t=$.aE()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bp().a)!==0?e:null
u.x=(s&$.bo().a)!==0?b:null
u.y=(s&$.bq().a)!==0?f:null
u.z=(s&$.br().a)!==0?g:null
u.Q=(s&$.jd().a)!==0?c:null
u.ch=(s&$.bs().a)!==0?i:0
u.cx=(s&$.bn().a)!==0?a:null
return u},
hl:function hl(){},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){},
eI:function eI(){},
aQ:function aQ(){},
e5:function e5(){},
eZ:function eZ(){},
b7:function b7(){},
cO:function cO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eB:function eB(a){this.a=a
this.b=null},
eC:function eC(a){this.a=a
this.b=null},
eD:function eD(a){this.a=a
this.b=null},
ad:function ad(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(a){this.a=a},
fh:function fh(a){this.a=a
this.c=this.b=null},
fi:function fi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(a){this.a=a
this.c=this.b=null},
fn:function fn(){},
fm:function fm(){},
fo:function fo(){},
en:function en(){},
fp:function fp(a){this.a=a
this.b=null}},T={eQ:function eQ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},R={
iW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=V.jX("Test 004",!0)
t=W.i2(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.e.p(u.a,t)
s=[P.j]
u.bP(H.a(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],s))
u.bP(H.a(["\xab[Back to Tests|../]"],s))
r=new U.cM()
r.a=0
r.b=0
r.c=0
r.d=0
r.e=0
r.f=0
r.r=0
r.scz(0)
r.scf(0)
r.scl(0)
r.sc_(0.1)
r.sbY(0.21)
r.sbZ(0.32)
r.sc_(0.51)
r.sbY(0.71)
r.sbZ(0.92)
q=new U.bF()
q.bl(U.Y)
q.aH(q.gdH(),q.gec())
q.e=null
q.f=V.ef()
q.r=0
q.h(0,U.i5(V.aC(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
q.h(0,r)
p=F.kN(30,2,15,0.2)
o=E.aB(null,!0,q,"",p,null)
n=E.aB(null,!0,q,"",p,null)
n.y.h(0,o)
m=E.aB(null,!0,q,"",p,null)
m.y.h(0,n)
l=E.aB(null,!0,q,"",p,null)
l.y.h(0,m)
k=E.aB(null,!0,q,"",p,null)
k.y.h(0,l)
j=E.aB(null,!0,q,"",p,null)
j.y.h(0,k)
i=E.aB(null,!0,q,"",p,null)
i.y.h(0,j)
h=E.aB(null,!0,q,"",p,null)
h.y.h(0,i)
g=E.aB(null,!0,q,"",p,null)
g.y.h(0,h)
f=new O.dz()
f.d=1
f.e=10
e=new V.aI(1,1,1)
f.b=e
s=[V.aI]
d=new D.I("objectColor",null,e,f,s)
d.b=!0
f.au(d)
e=new V.aI(0,0,0)
if(!J.L(f.c,e)){c=f.c
f.c=e
s=new D.I("fogColor",c,e,f,s)
s.b=!0
f.au(s)}s=f.d
if(!(Math.abs(s-3)<$.G().a)){f.d=3
s=new D.I("fogStart",s,3,f,[P.r])
s.b=!0
f.au(s)}s=f.e
if(!(Math.abs(s-6)<$.G().a)){f.e=6
s=new D.I("fogStop",s,6,f,[P.r])
s.b=!0
f.au(s)}b=new M.cl()
b.sdk(0,O.i4(E.U))
b.d.aH(b.gdL(),b.gdN())
b.e=null
b.f=null
b.r=null
b.x=null
a=X.jA(!0,!0,!1,null,2000,null,0)
a0=new X.cF()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.sc7(null)
s=a0.c
if(!(Math.abs(s-1.0471975511965976)<$.G().a)){a0.c=1.0471975511965976
s=new D.I("fov",s,1.0471975511965976,a0,[P.r])
s.b=!0
a0.ab(s)}s=a0.d
if(!(Math.abs(s-0.1)<$.G().a)){a0.d=0.1
s=new D.I("near",s,0.1,a0,[P.r])
s.b=!0
a0.ab(s)}s=a0.e
if(!(Math.abs(s-2000)<$.G().a)){a0.e=2000
s=new D.I("far",s,2000,a0,[P.r])
s.b=!0
a0.ab(s)}s=b.a
if(s!==a0){if(s!=null)s.gv().G(0,b.gY())
c=b.a
b.a=a0
a0.gv().h(0,b.gY())
s=new D.I("camera",c,b.a,b,[X.cg])
s.b=!0
b.a1(s)}s=b.b
if(s!==a){if(s!=null)s.gv().G(0,b.gY())
c=b.b
b.b=a
a.gv().h(0,b.gY())
s=new D.I("target",c,b.b,b,[X.cS])
s.b=!0
b.a1(s)}b.scn(null)
b.scn(f)
b.d.h(0,g)
b.a.sc7(U.i5(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a1=C.t.cF(document,"testCanvas")
if(a1==null)H.W(P.X("Failed to find an element with the identifier, testCanvas."))
a2=E.jZ(a1,!0,!0,!0,!1)
s=a2.d
if(s!==b){if(s!=null)s.gv().G(0,a2.gbm())
a2.d=b
b.gv().h(0,a2.gbm())
a2.bn()}s=a2.z
if(s==null){s=D.ah()
a2.z=s}d={func:1,ret:-1,args:[D.x]}
a3=H.f(new R.hh(u,f),d)
if(s.b==null)s.sav(H.a([],[d]))
s=s.b;(s&&C.a).h(s,a3)
V.kJ(a2)},
hh:function hh(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hu.prototype={}
J.M.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.bK(a)},
i:function(a){return"Instance of '"+H.b9(a)+"'"}}
J.e_.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iD:1}
J.e1.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0},
$iw:1}
J.ct.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.eq.prototype={}
J.aT.prototype={}
J.aP.prototype={
i:function(a){var u=a[$.j1()]
if(u==null)return this.cX(a)
return"JavaScript function for "+H.c(J.al(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaN:1}
J.ap.prototype={
h:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.W(P.ac("add"))
a.push(b)},
fO:function(a,b){var u
if(!!a.fixed$length)H.W(P.ac("removeAt"))
u=a.length
if(b>=u)throw H.d(P.cJ(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.W(P.ac("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.aK(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.I(u,t,H.c(a[t]))
return u.join(b)},
fo:function(a){return this.k(a,"")},
fh:function(a,b,c){var u,t,s
H.f(b,{func:1,ret:P.D,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.d(P.aK(a))}throw H.d(H.dY())},
fg:function(a,b){return this.fh(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
cU:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.ab(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ab(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.q(a,0)])
return H.a(a.slice(b,c),[H.q(a,0)])},
gff:function(a){if(a.length>0)return a[0]
throw H.d(H.dY())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.dY())},
bQ:function(a,b){var u,t
H.f(b,{func:1,ret:P.D,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.d(P.aK(a))}return!1},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.hs(a,"[","]")},
gF:function(a){return new J.a7(a,a.length,0,[H.q(a,0)])},
gC:function(a){return H.bK(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.W(P.ac("set length"))
if(b<0)throw H.d(P.ab(b,0,null,"newLength",null))
a.length=b},
I:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.W(P.ac("indexed set"))
if(b>=a.length||b<0)throw H.d(H.c5(a,b))
a[b]=c},
$io:1,
$ib:1}
J.ht.prototype={}
J.a7.prototype={
gA:function(){return this.d},
q:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.B(u))
s=this.c
if(s>=t){this.sbr(null)
return!1}this.sbr(u[s]);++this.c
return!0},
sbr:function(a){this.d=H.v(a,H.q(this,0))},
$iao:1}
J.b4.prototype={
c4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.ac(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ac(""+a+".round()"))},
cq:function(a,b){var u,t
if(b>20)throw H.d(P.ab(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
u:function(a,b){if(typeof b!=="number")throw H.d(H.aW(b))
return a-b},
H:function(a,b){if(typeof b!=="number")throw H.d(H.aW(b))
return a*b},
cM:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bL(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.bL(a,b)},
bL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.ac("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
ax:function(a,b){var u
if(a>0)u=this.eF(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eF:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia1:1}
J.cs.prototype={$iu:1}
J.e0.prototype={}
J.aO.prototype={
b4:function(a,b){if(b<0)throw H.d(H.c5(a,b))
if(b>=a.length)H.W(H.c5(a,b))
return a.charCodeAt(b)},
ac:function(a,b){if(b>=a.length)throw H.d(H.c5(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.d(P.hp(b,null,null))
return a+b},
cT:function(a,b,c){var u
if(c>a.length)throw H.d(P.ab(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aI:function(a,b){return this.cT(a,b,0)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.cJ(b,null,null))
if(b>c)throw H.d(P.cJ(b,null,null))
if(c>a.length)throw H.d(P.cJ(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.ar(a,b,null)},
h_:function(a){return a.toLowerCase()},
H:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fE:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.H(c,u)+a},
a7:function(a,b){return this.fE(a,b," ")},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iih:1,
$ij:1}
H.l.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.d.b4(this.a,b)},
$acY:function(){return[P.u]},
$aH:function(){return[P.u]},
$ao:function(){return[P.u]},
$ab:function(){return[P.u]}}
H.dE.prototype={}
H.b5.prototype={
gF:function(a){return new H.bH(this,this.gl(this),0,[H.R(this,"b5",0)])},
aE:function(a,b){return this.cW(0,H.f(b,{func:1,ret:P.D,args:[H.R(this,"b5",0)]}))}}
H.bH.prototype={
gA:function(){return this.d},
q:function(){var u,t,s,r
u=this.a
t=J.hM(u)
s=t.gl(u)
if(this.b!==s)throw H.d(P.aK(u))
r=this.c
if(r>=s){this.saj(null)
return!1}this.saj(t.N(u,r));++this.c
return!0},
saj:function(a){this.d=H.v(a,H.q(this,0))},
$iao:1}
H.ec.prototype={
gF:function(a){return new H.ed(J.bt(this.a),this.b,this.$ti)},
gl:function(a){return J.aZ(this.a)},
N:function(a,b){return this.b.$1(J.hn(this.a,b))},
$ao:function(a,b){return[b]}}
H.ed.prototype={
q:function(){var u=this.b
if(u.q()){this.saj(this.c.$1(u.gA()))
return!0}this.saj(null)
return!1},
gA:function(){return this.a},
saj:function(a){this.a=H.v(a,H.q(this,1))},
$aao:function(a,b){return[b]}}
H.ee.prototype={
gl:function(a){return J.aZ(this.a)},
N:function(a,b){return this.b.$1(J.hn(this.a,b))},
$ab5:function(a,b){return[b]},
$ao:function(a,b){return[b]}}
H.bW.prototype={
gF:function(a){return new H.fs(J.bt(this.a),this.b,this.$ti)}}
H.fs.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gA()))return!0
return!1},
gA:function(){return this.a.gA()}}
H.b1.prototype={}
H.cY.prototype={}
H.cX.prototype={}
H.et.prototype={}
H.eW.prototype={
U:function(a){var u,t,s
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
H.eo.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.e3.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.c(this.a)+")"}}
H.fc.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hm.prototype={
$1:function(a){if(!!J.J(a).$iaM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dd.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia0:1}
H.bx.prototype={
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
$iaN:1,
gh4:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eP.prototype={}
H.eJ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bm(u)+"'"}}
H.bv.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var u,t
u=this.c
if(u==null)t=H.bK(this.a)
else t=typeof u!=="object"?J.c9(u):H.bK(u)
return(t^H.bK(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.b9(u)+"'")}}
H.eY.prototype={
i:function(a){return this.a}}
H.dt.prototype={
i:function(a){return this.a}}
H.ey.prototype={
i:function(a){return"RuntimeError: "+H.c(this.a)}}
H.aq.prototype={
gl:function(a){return this.a},
ga5:function(){return new H.cv(this,[H.q(this,0)])},
bW:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bA(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.bA(t,a)}else return this.fl(a)},
fl:function(a){var u=this.d
if(u==null)return!1
return this.b6(this.aP(u,J.c9(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.at(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.at(r,b)
s=t==null?null:t.b
return s}else return this.fm(b)},
fm:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aP(u,J.c9(a)&0x3ffffff)
s=this.b6(t,a)
if(s<0)return
return t[s].b},
I:function(a,b,c){var u,t,s,r,q,p
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aU()
this.b=u}this.bs(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aU()
this.c=t}this.bs(t,b,c)}else{s=this.d
if(s==null){s=this.aU()
this.d=s}r=J.c9(b)&0x3ffffff
q=this.aP(s,r)
if(q==null)this.aZ(s,r,[this.aL(b,c)])
else{p=this.b6(q,b)
if(p>=0)q[p].b=c
else q.push(this.aL(b,c))}}},
O:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aK(this))
u=u.c}},
bs:function(a,b,c){var u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
u=this.at(a,b)
if(u==null)this.aZ(a,b,this.aL(b,c))
else u.b=c},
df:function(){this.r=this.r+1&67108863},
aL:function(a,b){var u,t
u=new H.e6(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.df()
return u},
b6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.ic(this)},
at:function(a,b){return a[b]},
aP:function(a,b){return a[b]},
aZ:function(a,b,c){a[b]=c},
dr:function(a,b){delete a[b]},
bA:function(a,b){return this.at(a,b)!=null},
aU:function(){var u=Object.create(null)
this.aZ(u,"<non-identifier-key>",u)
this.dr(u,"<non-identifier-key>")
return u},
$iia:1}
H.e6.prototype={}
H.cv.prototype={
gl:function(a){return this.a.a},
gF:function(a){var u,t
u=this.a
t=new H.e7(u,u.r,this.$ti)
t.c=u.e
return t}}
H.e7.prototype={
gA:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aK(u))
else{u=this.c
if(u==null){this.sbt(null)
return!1}else{this.sbt(u.a)
this.c=this.c.c
return!0}}},
sbt:function(a){this.d=H.v(a,H.q(this,0))},
$iao:1}
H.hc.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.hd.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.he.prototype={
$1:function(a){return this.a(H.z(a))},
$S:36}
H.e2.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iih:1}
H.cC.prototype={}
H.cz.prototype={
gl:function(a){return a.length},
$iai:1,
$aai:function(){}}
H.cA.prototype={
m:function(a,b){H.dk(b,a,a.length)
return a[b]},
$ab1:function(){return[P.r]},
$aH:function(){return[P.r]},
$io:1,
$ao:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.cB.prototype={
$ab1:function(){return[P.u]},
$aH:function(){return[P.u]},
$io:1,
$ao:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.eh.prototype={
m:function(a,b){H.dk(b,a,a.length)
return a[b]}}
H.ei.prototype={
m:function(a,b){H.dk(b,a,a.length)
return a[b]}}
H.ej.prototype={
m:function(a,b){H.dk(b,a,a.length)
return a[b]}}
H.ek.prototype={
gl:function(a){return a.length},
m:function(a,b){H.dk(b,a,a.length)
return a[b]}}
H.c_.prototype={}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
P.fu.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:10}
P.ft.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.fv.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fw.prototype={
$0:function(){this.a.$0()},
$S:0}
P.de.prototype={
dc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bi(new P.h_(this,b),0),a)
else throw H.d(P.ac("`setTimeout()` not found."))},
dd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bi(new P.fZ(this,a,Date.now(),b),0),a)
else throw H.d(P.ac("Periodic timer."))},
$ias:1}
P.h_.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.fZ.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.d_(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.ax.prototype={
fs:function(a){if(this.c!==6)return!0
return this.b.b.bd(H.f(this.d,{func:1,ret:P.D,args:[P.y]}),a.a,P.D,P.y)},
fk:function(a){var u,t,s,r
u=this.e
t=P.y
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dm(u,{func:1,args:[P.y,P.a0]}))return H.hL(r.fT(u,a.a,a.b,null,t,P.a0),s)
else return H.hL(r.bd(H.f(u,{func:1,args:[P.y]}),a.a,null,t),s)}}
P.af.prototype={
co:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.F
if(t!==C.f){t.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kf(b,t)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.af(0,$.F,[c])
r=b==null?1:3
this.bv(new P.ax(s,r,a,b,[u,c]))
return s},
fX:function(a,b){return this.co(a,null,b)},
bv:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iax")
this.c=a}else{if(u===2){t=H.k(this.c,"$iaf")
u=t.a
if(u<4){t.bv(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.h5(null,null,u,H.f(new P.fD(this,a),{func:1,ret:-1}))}},
bJ:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iax")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iaf")
t=p.a
if(t<4){p.bJ(a)
return}this.a=t
this.c=p.c}u.a=this.aw(a)
t=this.b
t.toString
P.h5(null,null,t,H.f(new P.fH(u,this),{func:1,ret:-1}))}},
aY:function(){var u=H.k(this.c,"$iax")
this.c=null
return this.aw(u)},
aw:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bx:function(a){var u,t,s
u=H.q(this,0)
H.hL(a,{futureOr:1,type:u})
t=this.$ti
if(H.dl(a,"$ibE",t,"$abE"))if(H.dl(a,"$iaf",t,null))P.iE(a,this)
else P.k5(a,this)
else{s=this.aY()
H.v(a,u)
this.a=4
this.c=a
P.bZ(this,s)}},
by:function(a,b){var u
H.k(b,"$ia0")
u=this.aY()
this.a=8
this.c=new P.T(a,b)
P.bZ(this,u)},
$ibE:1}
P.fD.prototype={
$0:function(){P.bZ(this.a,this.b)},
$S:0}
P.fH.prototype={
$0:function(){P.bZ(this.b,this.a.a)},
$S:0}
P.fE.prototype={
$1:function(a){var u=this.a
u.a=0
u.bx(a)},
$S:10}
P.fF.prototype={
$2:function(a,b){H.k(b,"$ia0")
this.a.by(a,b)},
$1:function(a){return this.$2(a,null)},
$S:28}
P.fG.prototype={
$0:function(){this.a.by(this.b,this.c)},
$S:0}
P.fK.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.cm(H.f(r.d,{func:1}),null)}catch(q){t=H.a6(q)
s=H.bj(q)
if(this.d){r=H.k(this.a.a.c,"$iT").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iT")
else p.b=new P.T(t,s)
p.a=!0
return}if(!!J.J(u).$ibE){if(u instanceof P.af&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iT")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.fX(new P.fL(o),null)
r.a=!1}},
$S:2}
P.fL.prototype={
$1:function(a){return this.a},
$S:27}
P.fJ.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.v(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.bd(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a6(o)
t=H.bj(o)
s=this.a
s.b=new P.T(u,t)
s.a=!0}},
$S:2}
P.fI.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iT")
r=this.c
if(r.fs(u)&&r.e!=null){q=this.b
q.b=r.fk(u)
q.a=!1}}catch(p){t=H.a6(p)
s=H.bj(p)
r=H.k(this.a.a.c,"$iT")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.T(t,s)
n.a=!0}},
$S:2}
P.d1.prototype={}
P.eK.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.af(0,$.F,[P.u])
u.a=0
s=H.q(this,0)
r=H.f(new P.eM(u,this),{func:1,ret:-1,args:[s]})
H.f(new P.eN(u,t),{func:1,ret:-1})
W.Q(this.a,this.b,r,!1,s)
return t}}
P.eM.prototype={
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.q(this.b,0)]}}}
P.eN.prototype={
$0:function(){this.b.bx(this.a.a)},
$S:0}
P.bP.prototype={}
P.eL.prototype={}
P.as.prototype={}
P.T.prototype={
i:function(a){return H.c(this.a)},
$iaM:1}
P.h2.prototype={$ilk:1}
P.h4.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cE()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.fO.prototype={
fU:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
try{if(C.f===$.F){a.$0()
return}P.iK(null,null,this,a,-1)}catch(s){u=H.a6(s)
t=H.bj(s)
P.h3(null,null,this,u,H.k(t,"$ia0"))}},
fV:function(a,b,c){var u,t,s
H.f(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.f===$.F){a.$1(b)
return}P.iL(null,null,this,a,b,-1,c)}catch(s){u=H.a6(s)
t=H.bj(s)
P.h3(null,null,this,u,H.k(t,"$ia0"))}},
eR:function(a,b){return new P.fQ(this,H.f(a,{func:1,ret:b}),b)},
b1:function(a){return new P.fP(this,H.f(a,{func:1,ret:-1}))},
bS:function(a,b){return new P.fR(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
cm:function(a,b){H.f(a,{func:1,ret:b})
if($.F===C.f)return a.$0()
return P.iK(null,null,this,a,b)},
bd:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.F===C.f)return a.$1(b)
return P.iL(null,null,this,a,b,c,d)},
fT:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.F===C.f)return a.$2(b,c)
return P.kg(null,null,this,a,b,c,d,e,f)}}
P.fQ.prototype={
$0:function(){return this.a.cm(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fP.prototype={
$0:function(){return this.a.fU(this.b)},
$S:2}
P.fR.prototype={
$1:function(a){var u=this.c
return this.a.fV(this.b,H.v(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fN.prototype={
gF:function(a){var u=new P.d7(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibf")!=null}else{t=this.dl(b)
return t}},
dl:function(a){var u=this.d
if(u==null)return!1
return this.aO(this.bD(u,a),a)>=0},
h:function(a,b){var u,t
H.v(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.hC()
this.b=u}return this.bu(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.hC()
this.c=t}return this.bu(t,b)}else return this.dg(b)},
dg:function(a){var u,t,s
H.v(a,H.q(this,0))
u=this.d
if(u==null){u=P.hC()
this.d=u}t=this.bz(a)
s=u[t]
if(s==null)u[t]=[this.aV(a)]
else{if(this.aO(s,a)>=0)return!1
s.push(this.aV(a))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eo(this.c,b)
else return this.el(b)},
el:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.bD(u,a)
s=this.aO(t,a)
if(s<0)return!1
this.bM(t.splice(s,1)[0])
return!0},
bu:function(a,b){H.v(b,H.q(this,0))
if(H.k(a[b],"$ibf")!=null)return!1
a[b]=this.aV(b)
return!0},
eo:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibf")
if(u==null)return!1
this.bM(u)
delete a[b]
return!0},
bF:function(){this.r=1073741823&this.r+1},
aV:function(a){var u,t
u=new P.bf(H.v(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bF()
return u},
bM:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bF()},
bz:function(a){return J.c9(a)&1073741823},
bD:function(a,b){return a[this.bz(b)]},
aO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.bf.prototype={}
P.d7.prototype={
gA:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aK(u))
else{u=this.c
if(u==null){this.sbw(null)
return!1}else{this.sbw(H.v(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sbw:function(a){this.d=H.v(a,H.q(this,0))},
$iao:1}
P.e8.prototype={$io:1,$ib:1}
P.H.prototype={
gF:function(a){return new H.bH(a,this.gl(a),0,[H.hb(this,a,"H",0)])},
N:function(a,b){return this.m(a,b)},
fZ:function(a,b){var u,t
u=H.a([],[H.hb(this,a,"H",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.I(u,t,this.m(a,t))
return u},
fY:function(a){return this.fZ(a,!0)},
i:function(a){return P.hs(a,"[","]")}}
P.ea.prototype={}
P.eb.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.c(a)
u.a=t+": "
u.a+=H.c(b)},
$S:13}
P.b6.prototype={
O:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.R(this,"b6",0),H.R(this,"b6",1)]})
for(u=J.bt(this.ga5());u.q();){t=u.gA()
b.$2(t,this.m(0,t))}},
gl:function(a){return J.aZ(this.ga5())},
i:function(a){return P.ic(this)},
$ia9:1}
P.fT.prototype={
Z:function(a,b){var u
for(u=J.bt(H.m(b,"$io",this.$ti,"$ao"));u.q();)this.h(0,u.gA())},
i:function(a){return P.hs(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.W(P.ab(b,0,null,"index",null))
for(u=P.k8(this,this.r,H.q(this,0)),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.d(P.b3(b,this,"index",null,t))},
$io:1,
$iiq:1}
P.d8.prototype={}
P.by.prototype={}
P.bz.prototype={}
P.dG.prototype={
$aby:function(){return[P.j,[P.b,P.u]]}}
P.dW.prototype={
i:function(a){return this.a}}
P.dV.prototype={
dm:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bc("")
if(r>b)q.a+=C.d.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jm(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abz:function(){return[P.j,P.j]}}
P.fe.prototype={}
P.ff.prototype={
f_:function(a,b,c){var u,t,s
c=P.io(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.h0(t)
if(s.dA(a,b,c)!==c)s.bN(C.d.b4(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kb(0,s.b,t.length)))},
eZ:function(a){return this.f_(a,0,null)},
$abz:function(){return[P.j,[P.b,P.u]]}}
P.h0.prototype={
bN:function(a,b){var u,t,s,r,q
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
dA:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.d.b4(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.d.ac(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bN(r,C.d.ac(a,p)))s=p}else if(r<=2047){q=this.b
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
P.D.prototype={}
P.aL.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.h.ax(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jt(H.jQ(this))
t=P.ci(H.jO(this))
s=P.ci(H.jK(this))
r=P.ci(H.jL(this))
q=P.ci(H.jN(this))
p=P.ci(H.jP(this))
o=P.ju(H.jM(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.az.prototype={
u:function(a,b){return new P.az(C.h.u(this.a,b.gh6()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a},
gC:function(a){return C.h.gC(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dD()
t=this.a
if(t<0)return"-"+new P.az(0-t).i(0)
s=u.$1(C.h.af(t,6e7)%60)
r=u.$1(C.h.af(t,1e6)%60)
q=new P.dC().$1(t%1e6)
return""+C.h.af(t,36e8)+":"+H.c(s)+":"+H.c(r)+"."+H.c(q)}}
P.dC.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.dD.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.aM.prototype={}
P.cE.prototype={
i:function(a){return"Throw of null."}}
P.am.prototype={
gaN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaN()+t+s
if(!this.a)return r
q=this.gaM()
p=P.dI(this.b)
return r+q+": "+p}}
P.ba.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.c(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.c(u)
else if(s>u)t=": Not in range "+H.c(u)+".."+H.c(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.c(u)}return t}}
P.dX.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var u,t
u=H.S(this.b)
if(typeof u!=="number")return u.cL()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.c(t)},
gl:function(a){return this.f}}
P.fd.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dv.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dI(u)+"."}}
P.ep.prototype={
i:function(a){return"Out of Memory"},
$iaM:1}
P.cP.prototype={
i:function(a){return"Stack Overflow"},
$iaM:1}
P.dx.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d4.prototype={
i:function(a){return"Exception: "+this.a}}
P.dR.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.d.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.aN.prototype={}
P.u.prototype={}
P.o.prototype={
aE:function(a,b){var u=H.R(this,"o",0)
return new H.bW(this,H.f(b,{func:1,ret:P.D,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gF(this)
for(t=0;u.q();)++t
return t},
ga9:function(a){var u,t
u=this.gF(this)
if(!u.q())throw H.d(H.dY())
t=u.gA()
if(u.q())throw H.d(H.jC())
return t},
N:function(a,b){var u,t,s
if(b<0)H.W(P.ab(b,0,null,"index",null))
for(u=this.gF(this),t=0;u.q();){s=u.gA()
if(b===t)return s;++t}throw H.d(P.b3(b,this,"index",null,t))},
i:function(a){return P.jB(this,"(",")")}}
P.ao.prototype={}
P.b.prototype={$io:1}
P.w.prototype={
gC:function(a){return P.y.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.a1.prototype={}
P.y.prototype={constructor:P.y,$iy:1,
n:function(a,b){return this===b},
gC:function(a){return H.bK(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={}
P.j.prototype={$iih:1}
P.bc.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.ca.prototype={
i:function(a){return String(a)},
$ica:1}
W.dp.prototype={
i:function(a){return String(a)}}
W.bu.prototype={$ibu:1}
W.aF.prototype={$iaF:1}
W.b_.prototype={
bf:function(a,b,c){var u=this.dB(a,b,P.km(c,null))
return u},
dB:function(a,b,c){return a.getContext(b,c)},
$ib_:1}
W.aG.prototype={
gl:function(a){return a.length}}
W.bA.prototype={
gl:function(a){return a.length}}
W.dw.prototype={}
W.a8.prototype={$ia8:1}
W.bB.prototype={
eN:function(a,b){return a.adoptNode(b)},
cF:function(a,b){return a.getElementById(b)}}
W.dB.prototype={
i:function(a){return String(a)}}
W.cj.prototype={
f2:function(a,b){return a.createHTMLDocument(b)}}
W.ck.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.dl(b,"$icK",[P.a1],"$acK"))return!1
u=J.a5(b)
return a.left===u.gc6(b)&&a.top===u.gcs(b)&&a.width===u.gbe(b)&&a.height===u.gb5(b)},
gC:function(a){return W.iG(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gb5:function(a){return a.height},
gc6:function(a){return a.left},
gcs:function(a){return a.top},
gbe:function(a){return a.width},
$icK:1,
$acK:function(){return[P.a1]}}
W.fy.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.k(u[b],"$iC")},
h:function(a,b){J.hY(this.a,b)
return b},
gF:function(a){var u=this.fY(this)
return new J.a7(u,u.length,0,[H.q(u,0)])},
$aH:function(){return[W.C]},
$ao:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
geQ:function(a){return new W.fz(a)},
gbU:function(a){return new W.fy(a,a.children)},
i:function(a){return a.localName},
T:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.i8
if(u==null){u=H.a([],[W.a4])
t=new W.cD(u)
C.a.h(u,W.iF(null))
C.a.h(u,W.iH())
$.i8=t
d=t}else d=u
u=$.i7
if(u==null){u=new W.dh(d)
$.i7=u
c=u}else{u.a=d
c=u}}if($.aA==null){u=document
t=u.implementation
t=(t&&C.D).f2(t,"")
$.aA=t
$.hr=t.createRange()
t=$.aA
t.toString
t=t.createElement("base")
H.k(t,"$ibu")
t.href=u.baseURI
u=$.aA.head;(u&&C.F).p(u,t)}u=$.aA
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$iaF")}u=$.aA
if(!!this.$iaF)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aA.body;(u&&C.j).p(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.Q,a.tagName)){u=$.hr;(u&&C.y).cO(u,s)
u=$.hr
r=(u&&C.y).f0(u,b)}else{s.innerHTML=b
r=$.aA.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.p(r,t)}u=$.aA.body
if(s==null?u!=null:s!==u)J.hZ(s)
c.bh(r)
C.t.eN(document,r)
return r},
f1:function(a,b,c){return this.T(a,b,c,null)},
cR:function(a,b,c,d){a.textContent=null
this.p(a,this.T(a,b,c,d))},
cQ:function(a,b){return this.cR(a,b,null,null)},
ai:function(a,b){return a.getAttribute(b)},
em:function(a,b){return a.removeAttribute(b)},
$iC:1,
gfW:function(a){return a.tagName}}
W.dF.prototype={
$1:function(a){return!!J.J(H.k(a,"$it")).$iC},
$S:15}
W.e.prototype={$ie:1}
W.b0.prototype={
dh:function(a,b,c,d){return a.addEventListener(b,H.bi(H.f(c,{func:1,args:[W.e]}),1),!1)},
$ib0:1}
W.dQ.prototype={
gl:function(a){return a.length}}
W.co.prototype={}
W.b2.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b3(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iai:1,
$aai:function(){return[W.t]},
$aH:function(){return[W.t]},
$io:1,
$ao:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$ib2:1,
$aa2:function(){return[W.t]}}
W.cp.prototype={}
W.ar.prototype={$iar:1}
W.cx.prototype={
i:function(a){return String(a)},
$icx:1}
W.P.prototype={$iP:1}
W.V.prototype={
ga9:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.d(P.ir("No elements"))
if(t>1)throw H.d(P.ir("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s,r,q
H.m(b,"$io",[W.t],"$ao")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.p(t,u.firstChild)
return},
gF:function(a){var u=this.a.childNodes
return new W.cm(u,u.length,-1,[H.hb(C.S,u,"a2",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aH:function(){return[W.t]},
$ao:function(){return[W.t]},
$ab:function(){return[W.t]}}
W.t.prototype={
fN:function(a){var u=a.parentNode
if(u!=null)J.dn(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.cV(a):u},
p:function(a,b){return a.appendChild(b)},
en:function(a,b){return a.removeChild(b)},
$it:1}
W.bJ.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b3(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iai:1,
$aai:function(){return[W.t]},
$aH:function(){return[W.t]},
$io:1,
$ao:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$aa2:function(){return[W.t]}}
W.cI.prototype={
f0:function(a,b){return a.createContextualFragment(b)},
cO:function(a,b){return a.selectNodeContents(b)}}
W.ez.prototype={
gl:function(a){return a.length}}
W.bd.prototype={}
W.cQ.prototype={
T:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
u=W.jx("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.V(t).Z(0,new W.V(u))
return t}}
W.cR.prototype={
T:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.T(u.createElement("table"),b,c,d)
u.toString
u=new W.V(u)
s=u.ga9(u)
s.toString
u=new W.V(s)
r=u.ga9(u)
t.toString
r.toString
new W.V(t).Z(0,new W.V(r))
return t}}
W.eO.prototype={
T:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.T(u.createElement("table"),b,c,d)
u.toString
u=new W.V(u)
s=u.ga9(u)
t.toString
s.toString
new W.V(t).Z(0,new W.V(s))
return t}}
W.bQ.prototype={$ibQ:1}
W.at.prototype={$iat:1}
W.aj.prototype={$iaj:1}
W.eV.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b3(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iai:1,
$aai:function(){return[W.at]},
$aH:function(){return[W.at]},
$io:1,
$ao:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$aa2:function(){return[W.at]}}
W.aS.prototype={}
W.aw.prototype={
gf8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ac("deltaY is not supported"))},
gf7:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ac("deltaX is not supported"))},
$iaw:1}
W.bX.prototype={
eu:function(a,b){return a.requestAnimationFrame(H.bi(H.f(b,{func:1,ret:-1,args:[P.a1]}),1))},
ds:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bY.prototype={$ibY:1}
W.d3.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.dl(b,"$icK",[P.a1],"$acK"))return!1
u=J.a5(b)
return a.left===u.gc6(b)&&a.top===u.gcs(b)&&a.width===u.gbe(b)&&a.height===u.gb5(b)},
gC:function(a){return W.iG(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gb5:function(a){return a.height},
gbe:function(a){return a.width}}
W.d9.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b3(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iai:1,
$aai:function(){return[W.t]},
$aH:function(){return[W.t]},
$io:1,
$ao:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$aa2:function(){return[W.t]}}
W.fx.prototype={
O:function(a,b){var u,t,s,r,q,p
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=this.ga5(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.B)(u),++q){p=u[q]
b.$2(p,r.ai(s,p))}},
ga5:function(){var u,t,s,r,q
u=this.a.attributes
t=H.a([],[P.j])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.k(u[r],"$ibY")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$ab6:function(){return[P.j,P.j]},
$aa9:function(){return[P.j,P.j]}}
W.fz.prototype={
m:function(a,b){return J.ho(this.a,H.z(b))},
gl:function(a){return this.ga5().length}}
W.fA.prototype={}
W.hB.prototype={}
W.fB.prototype={}
W.fC.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ie"))},
$S:37}
W.aU.prototype={
d7:function(a){var u,t
u=$.hW()
if(u.a===0){for(t=0;t<262;++t)u.I(0,C.P[t],W.ku())
for(t=0;t<12;++t)u.I(0,C.n[t],W.kv())}},
ag:function(a){return $.jf().K(0,W.bC(a))},
a_:function(a,b,c){var u,t,s
u=W.bC(a)
t=$.hW()
s=t.m(0,H.c(u)+"::"+b)
if(s==null)s=t.m(0,"*::"+b)
if(s==null)return!1
return H.hI(s.$4(a,b,c,this))},
$ia4:1}
W.a2.prototype={
gF:function(a){return new W.cm(a,this.gl(a),-1,[H.hb(this,a,"a2",0)])}}
W.cD.prototype={
ag:function(a){return C.a.bQ(this.a,new W.em(a))},
a_:function(a,b,c){return C.a.bQ(this.a,new W.el(a,b,c))},
$ia4:1}
W.em.prototype={
$1:function(a){return H.k(a,"$ia4").ag(this.a)},
$S:17}
W.el.prototype={
$1:function(a){return H.k(a,"$ia4").a_(this.a,this.b,this.c)},
$S:17}
W.dc.prototype={
da:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.aE(0,new W.fU())
t=b.aE(0,new W.fV())
this.b.Z(0,u)
s=this.c
s.Z(0,C.R)
s.Z(0,t)},
ag:function(a){return this.a.K(0,W.bC(a))},
a_:function(a,b,c){var u,t
u=W.bC(a)
t=this.c
if(t.K(0,H.c(u)+"::"+b))return this.d.eO(c)
else if(t.K(0,"*::"+b))return this.d.eO(c)
else{t=this.b
if(t.K(0,H.c(u)+"::"+b))return!0
else if(t.K(0,"*::"+b))return!0
else if(t.K(0,H.c(u)+"::*"))return!0
else if(t.K(0,"*::*"))return!0}return!1},
$ia4:1}
W.fU.prototype={
$1:function(a){return!C.a.K(C.n,H.z(a))},
$S:18}
W.fV.prototype={
$1:function(a){return C.a.K(C.n,H.z(a))},
$S:18}
W.fX.prototype={
a_:function(a,b,c){if(this.cZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ho(a,"template")==="")return this.e.K(0,b)
return!1}}
W.fY.prototype={
$1:function(a){return"TEMPLATE::"+H.c(H.z(a))},
$S:25}
W.fW.prototype={
ag:function(a){var u=J.J(a)
if(!!u.$ibL)return!1
u=!!u.$ii
if(u&&W.bC(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.d.aI(b,"on"))return!1
return this.ag(a)},
$ia4:1}
W.cm.prototype={
q:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbE(J.ji(this.a,u))
this.c=u
return!0}this.sbE(null)
this.c=t
return!1},
gA:function(){return this.d},
sbE:function(a){this.d=H.v(a,H.q(this,0))},
$iao:1}
W.a4.prototype={}
W.fS.prototype={$il7:1}
W.dh.prototype={
bh:function(a){new W.h1(this).$2(a,null)},
al:function(a,b){if(b==null)J.hZ(a)
else J.dn(b,a)},
ew:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.jk(a)
s=J.ho(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.a6(o)}q="element unprintable"
try{q=J.al(a)}catch(o){H.a6(o)}try{p=W.bC(a)
this.ev(H.k(a,"$iC"),b,u,q,p,H.k(t,"$ia9"),H.z(s))}catch(o){if(H.a6(o) instanceof P.am)throw o
else{this.al(a,b)
window
n="Removing corrupted element "+H.c(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ev:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ag(a)){this.al(a,b)
window
u="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.al(a,b)
window
u="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga5()
t=H.a(u.slice(0),[H.q(u,0)])
for(s=f.ga5().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.a_(a,J.jn(q),r.ai(u,q))){window
p="Removing disallowed attribute <"+H.c(e)+" "+q+'="'+H.c(r.ai(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ai(u,q)
r.em(u,q)}}if(!!J.J(a).$ibQ)this.bh(a.content)},
$ikU:1}
W.h1.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.ew(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.al(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.a6(r)
q=H.k(u,"$it")
if(s){p=q.parentNode
if(p!=null)J.dn(p,q)}else J.dn(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$it")}},
$S:24}
W.d2.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.da.prototype={}
W.db.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.di.prototype={}
W.dj.prototype={}
P.h6.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.dN.prototype={
gaQ:function(){var u,t,s
u=this.b
t=H.R(u,"H",0)
s=W.C
return new H.ec(new H.bW(u,H.f(new P.dO(),{func:1,ret:P.D,args:[t]}),[t]),H.f(new P.dP(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hY(this.b.a,b)},
gl:function(a){return J.aZ(this.gaQ().a)},
m:function(a,b){var u=this.gaQ()
return u.b.$1(J.hn(u.a,b))},
gF:function(a){var u=P.jI(this.gaQ(),!1,W.C)
return new J.a7(u,u.length,0,[H.q(u,0)])},
$aH:function(){return[W.C]},
$ao:function(){return[W.C]},
$ab:function(){return[W.C]}}
P.dO.prototype={
$1:function(a){return!!J.J(H.k(a,"$it")).$iC},
$S:15}
P.dP.prototype={
$1:function(a){return H.bk(H.k(a,"$it"),"$iC")},
$S:23}
P.bL.prototype={$ibL:1}
P.i.prototype={
gbU:function(a){return new P.dN(a,new W.V(a))},
T:function(a,b,c,d){var u,t,s,r,q,p
u=H.a([],[W.a4])
C.a.h(u,W.iF(null))
C.a.h(u,W.iH())
C.a.h(u,new W.fW())
c=new W.dh(new W.cD(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).f1(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.V(r)
p=u.ga9(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.p(q,s)
return q},
$ii:1}
P.cc.prototype={$icc:1}
P.cn.prototype={$icn:1}
P.cH.prototype={$icH:1}
P.bb.prototype={
bR:function(a,b,c){return a.attachShader(b,c)},
a0:function(a,b,c){return a.bindBuffer(b,c)},
eS:function(a,b,c){return a.bindFramebuffer(b,c)},
bT:function(a,b,c,d){return a.bufferData(b,c,d)},
eV:function(a,b){return a.clear(b)},
eW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eX:function(a,b){return a.clearDepth(b)},
eY:function(a,b){return a.compileShader(b)},
f3:function(a,b){return a.createShader(b)},
f5:function(a,b){return a.deleteProgram(b)},
f6:function(a,b){return a.deleteShader(b)},
f9:function(a,b){return a.depthFunc(b)},
c0:function(a,b){return a.disableVertexAttribArray(b)},
fb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
cB:function(a,b,c){return a.getActiveAttrib(b,c)},
cC:function(a,b,c){return a.getActiveUniform(b,c)},
cD:function(a,b,c){return a.getAttribLocation(b,c)},
bg:function(a,b){return a.getParameter(b)},
cG:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
cH:function(a,b){return a.getShaderInfoLog(b)},
cI:function(a,b,c){return a.getShaderParameter(b,c)},
cJ:function(a,b,c){return a.getUniformLocation(b,c)},
fp:function(a,b){return a.linkProgram(b)},
cS:function(a,b,c){return a.shaderSource(b,c)},
ct:function(a,b,c){return a.uniform1f(b,c)},
cu:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
h1:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
h2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
h3:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibb:1}
P.cN.prototype={$icN:1}
P.cW.prototype={$icW:1}
O.N.prototype={
bl:function(a){this.sdG(H.a([],[a]))
this.sbH(null)
this.sbG(null)
this.sbI(null)},
cP:function(a,b,c){var u={func:1,ret:-1,args:[P.u,[P.o,H.R(this,"N",0)]]}
H.f(a,u)
H.f(c,u)
this.sbH(b)
this.sbG(a)
this.sbI(c)},
aH:function(a,b){return this.cP(a,null,b)},
eb:function(a){H.m(a,"$io",[H.R(this,"N",0)],"$ao")
return!0},
d4:function(a,b){var u
H.m(b,"$io",[H.R(this,"N",0)],"$ao")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.a7(u,u.length,0,[H.q(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.R(this,"N",0)
H.v(b,u)
u=[u]
if(this.eb(H.a([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d4(s,H.a([b],u))}},
sdG:function(a){this.a=H.m(a,"$ib",[H.R(this,"N",0)],"$ab")},
sbH:function(a){this.b=H.f(a,{func:1,ret:P.D,args:[[P.o,H.R(this,"N",0)]]})},
sbG:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.u,[P.o,H.R(this,"N",0)]]})},
sbI:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.u,[P.o,H.R(this,"N",0)]]})},
$io:1}
O.bI.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.ah()
this.b=u}return u},
d5:function(a){var u=this.b
if(u!=null)u.S(a)},
aa:function(){return this.d5(null)},
gan:function(){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.ef()},
ci:function(a){var u=this.a
if(a==null)C.a.h(u,V.ef())
else C.a.h(u,a)
this.aa()},
ba:function(){var u=this.a
if(u.length>0){u.pop()
this.aa()}},
saS:function(a){this.a=H.m(a,"$ib",[V.aR],"$ab")}}
E.dr.prototype={}
E.U.prototype={
cv:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aD(a,this):null
if(!J.L(t,this.x)){s=this.x
this.x=t
r=new D.I("matrix",s,t,this,[V.aR])
r.b=!0
this.W(r)}for(u=this.y.a,u=new J.a7(u,u.length,0,[H.q(u,0)]);u.q();)u.d.cv(a)},
ah:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gan())
else C.a.h(u.a,t.H(0,u.gan()))
u.aa()
a.cj(this.f)
u=a.dy
s=(u&&C.a).gaB(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.m(0,"Depth")
if(r==null){u=a.a
r=new A.dA(u,"Depth")
r.d2(u,"Depth")
t=$.jw
q=$.jv
r.c=t
r.d=q
r.e=r.bC(t,35633)
r.f=r.bC(r.d,35632)
t=u.createProgram()
r.r=t
C.b.bR(u,t,r.e)
C.b.bR(u,r.r,r.f)
C.b.fp(u,r.r)
if(!H.hI(C.b.aF(u,r.r,35714))){p=C.b.cG(u,r.r)
C.b.f5(u,r.r)
H.W(P.X("Failed to link shader: "+H.c(p)))}r.eB()
r.eD()
r.z=r.x.m(0,"posAttr")
r.Q=H.bk(r.y.m(0,"objClr"),"$ibU")
r.ch=H.bk(r.y.m(0,"fogClr"),"$ibU")
r.cx=H.bk(r.y.m(0,"fogStart"),"$ibT")
r.cy=H.bk(r.y.m(0,"fogStop"),"$ibT")
r.db=H.bk(r.y.m(0,"viewObjMat"),"$ibV")
r.dx=H.bk(r.y.m(0,"projMat"),"$ibV")
if(a.fr.bW("Depth"))H.W(P.X('Shader cache already contains a shader by the name "Depth".'))
a.fr.I(0,"Depth",r)}s.a=r
u=r}t=this.e
if(!(t instanceof Z.ce)){this.e=null
t=null}if(t==null){u=this.d.eU(new Z.fr(a.a),$.aE())
t=u.fd($.aE())
q=s.a
t.e=q.z.c
this.e=u
u=q}t=a.a
C.b.cw(t,u.r)
u.x.fc()
q=s.b
o=u.Q
o.toString
n=q.a
m=q.b
q=q.c
C.b.cu(o.a,o.d,n,m,q)
q=s.c
m=u.ch
m.toString
n=q.a
o=q.b
q=q.c
C.b.cu(m.a,m.d,n,o,q)
q=s.d
o=u.cx
C.b.ct(o.a,o.d,q)
q=s.e
o=u.cy
C.b.ct(o.a,o.d,q)
q=a.cy.gan()
o=u.dx
o.toString
o.bi(q.cp(0,!0))
q=a.cx
if(q==null){q=a.db.gan().H(0,a.dx.gan())
a.cx=q}u=u.db
u.toString
u.bi(q.cp(0,!0))
q=this.e
q.b0(a)
q.ah(a)
q.h0(a)
q=s.a
q.toString
C.b.cw(t,null)
q.x.fa()}for(u=this.y.a,u=new J.a7(u,u.length,0,[H.q(u,0)]);u.q();)u.d.ah(a)
a.cg()
a.dx.ba()},
gv:function(){var u=this.z
if(u==null){u=D.ah()
this.z=u}return u},
W:function(a){var u=this.z
if(u!=null)u.S(a)},
V:function(){return this.W(null)},
cd:function(a){H.k(a,"$ix")
this.e=null
this.W(a)},
fD:function(){return this.cd(null)},
cb:function(a){this.W(H.k(a,"$ix"))},
fC:function(){return this.cb(null)},
c9:function(a){this.W(H.k(a,"$ix"))},
fz:function(){return this.c9(null)},
fw:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$io",[E.U],"$ao")
for(u=b.length,t=this.gc8(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bD()
o.sa3(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.f(t,s)
if(o.a==null)o.sa3(H.a([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
fB:function(a,b){var u,t
H.m(b,"$io",[E.U],"$ao")
for(u=b.gF(b),t=this.gc8();u.q();)u.gA().gv().G(0,t)
this.V()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sd6:function(a,b){this.y=H.m(b,"$iN",[E.U],"$aN")},
$iie:1}
E.eu.prototype={
d0:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aL(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bI()
t=[V.aR]
u.saS(H.a([],t))
u.b=null
u.gv().h(0,new E.ev(this))
this.cy=u
u=new O.bI()
u.saS(H.a([],t))
u.b=null
u.gv().h(0,new E.ew(this))
this.db=u
u=new O.bI()
u.saS(H.a([],t))
u.b=null
u.gv().h(0,new E.ex(this))
this.dx=u
this.seH(H.a([],[O.be]))
u=this.dy;(u&&C.a).h(u,null)
this.seE(new H.aq([P.j,A.bM]))},
cj:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
cg:function(){var u=this.dy
if(u.length>1)u.pop()},
seH:function(a){this.dy=H.m(a,"$ib",[O.be],"$ab")},
seE:function(a){this.fr=H.m(a,"$ia9",[P.j,A.bM],"$aa9")}}
E.ev.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ew.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.ex.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.cT.prototype={
bo:function(a){H.k(a,"$ix")
this.ck()},
bn:function(){return this.bo(null)},
gfj:function(){var u,t,s
u=Date.now()
t=C.h.af(P.i6(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aL(u,!1)
return s/t},
bK:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.H()
if(typeof u!=="number")return H.aY(u)
s=C.c.c4(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.H()
r=C.c.c4(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.iu(C.l,this.gfR())}},
ck:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.f(new E.eR(this),{func:1,ret:-1,args:[P.a1]})
C.A.ds(u)
C.A.eu(u,W.iO(t,P.a1))}},
fQ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bK()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aL(r,!1)
s.y=P.i6(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aa()
r=s.db
C.a.sl(r.a,0)
r.aa()
r=s.dx
C.a.sl(r.a,0)
r.aa()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ah(this.e)}s=this.z
if(s!=null)s.S(null)}catch(q){u=H.a6(q)
t=H.bj(q)
P.hR("Error: "+H.c(u))
P.hR("Stack: "+H.c(t))
throw H.d(u)}}}
E.eR.prototype={
$1:function(a){var u
H.kF(a)
u=this.a
if(u.ch){u.ch=!1
u.fQ()}},
$S:22}
Z.d0.prototype={$ikO:1}
Z.cd.prototype={
b0:function(a){var u,t,s
try{t=a.a
C.b.c3(t,this.e)
C.b.h2(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.a6(s)
t=P.X('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.c(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.c(this.e)+"]"}}
Z.fr.prototype={$ikP:1}
Z.ce.prototype={
fd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b0:function(a){var u,t
u=this.a
C.b.a0(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b0(a)},
h0:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.c0(s,u[t].e)
C.b.a0(s,this.a.a,null)},
ah:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a0(t,p,r.b)
C.b.fb(t,q.a,q.b,5123,0)
C.b.a0(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.j]
t=H.a([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q)C.a.h(t,s[q].i(0))
p=H.a([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.al(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sdC:function(a){this.b=H.m(a,"$ib",[Z.bG],"$ab")},
$ikX:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}}
Z.d_.prototype={
gbj:function(a){var u,t
u=this.a
t=(u&$.aE().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=2
if((u&$.br().a)!==0)t+=3
if((u&$.c6().a)!==0)t+=3
if((u&$.c7().a)!==0)t+=4
if((u&$.bs().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
eP:function(a){var u,t,s
u=$.aE()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0)if(s===a)return u
return $.je()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.d_))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.a([],[P.j])
t=this.a
if((t&$.aE().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.bq().a)!==0)C.a.h(u,"Txt2D")
if((t&$.br().a)!==0)C.a.h(u,"TxtCube")
if((t&$.c6().a)!==0)C.a.h(u,"Clr3")
if((t&$.c7().a)!==0)C.a.h(u,"Clr4")
if((t&$.bs().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.du.prototype={}
D.bD.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.f(b,u)
if(this.a==null)this.sa3(H.a([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.K(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.K(u,b)
if(u===!0){u=this.b
t=(u&&C.a).G(u,b)||t}return t},
S:function(a){var u,t,s,r
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
return!0}if(!s)C.a.O(t,new D.dJ(u))
t=this.b
if(t!=null)C.a.O(t,new D.dK(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
fS:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.S(t)}}},
aq:function(){return this.fS(!0,!1)},
sa3:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
sav:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.dJ.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.dK.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.x.prototype={}
D.cq.prototype={}
D.cr.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.c(this.d)+" => "+H.c(this.e)}}
X.cf.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cf))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.cu.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cu))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.e4.prototype={
fJ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fF:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
sek:function(a){this.d=H.m(a,"$iiq",[P.u],"$aiq")}}
X.e9.prototype={
b9:function(a,b){this.r=a.a
return!1},
ap:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cN()
if(typeof u!=="number")return u.cA()
this.r=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
fK:function(a){return!1},
e0:function(a,b,c){return}}
X.aD.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.eg.prototype={
b9:function(a,b){this.f=a.a
return!1},
ap:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cN()
if(typeof u!=="number")return u.cA()
this.f=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
fL:function(a,b){return!1}}
X.eU.prototype={
fI:function(a){H.m(a,"$ib",[V.a_],"$ab")
return!1},
fG:function(a){H.m(a,"$ib",[V.a_],"$ab")
return!1},
fH:function(a){H.m(a,"$ib",[V.a_],"$ab")
return!1}}
X.cZ.prototype={
bB:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cu(u,new X.aD(t,a.altKey,a.shiftKey))},
ae:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aD(t,a.altKey,a.shiftKey)},
b_:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aD(t,a.altKey,a.shiftKey)},
a4:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a_(t-r,s-q)},
ak:function(a){return new V.av(a.movementX,a.movementY)},
aX:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.a([],[V.a_])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
o=C.c.X(p.pageX)
C.c.X(p.pageY)
n=u.left
C.c.X(p.pageX)
C.a.h(t,new V.a_(o-n,C.c.X(p.pageY)-u.top))}return t},
a2:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cf(u,new X.aD(t,a.altKey,a.shiftKey))},
aT:function(a){var u,t,s,r,q,p
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
dW:function(a){this.f=!0},
dK:function(a){this.f=!1},
dQ:function(a){H.k(a,"$iP")
if(this.f&&this.aT(a))a.preventDefault()},
e_:function(a){var u
H.k(a,"$iar")
if(!this.f)return
u=this.bB(a)
this.b.fJ(u)},
dY:function(a){var u
H.k(a,"$iar")
if(!this.f)return
u=this.bB(a)
this.b.fF(u)},
e2:function(a){var u,t,s,r
H.k(a,"$iP")
u=this.a
u.focus()
this.f=!0
this.ae(a)
if(this.x){t=this.a2(a)
s=this.ak(a)
if(this.d.b9(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a2(a)
r=this.a4(a)
if(this.c.b9(t,r))a.preventDefault()},
e6:function(a){var u,t,s
H.k(a,"$iP")
this.ae(a)
u=this.a2(a)
if(this.x){t=this.ak(a)
if(this.d.ap(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.ap(u,s))a.preventDefault()},
dU:function(a){var u,t,s
H.k(a,"$iP")
if(!this.aT(a)){this.ae(a)
u=this.a2(a)
if(this.x){t=this.ak(a)
if(this.d.ap(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.ap(u,s))a.preventDefault()}},
e4:function(a){var u,t,s
H.k(a,"$iP")
this.ae(a)
u=this.a2(a)
if(this.x){t=this.ak(a)
if(this.d.ao(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.ao(u,s))a.preventDefault()},
dS:function(a){var u,t,s
H.k(a,"$iP")
if(!this.aT(a)){this.ae(a)
u=this.a2(a)
if(this.x){t=this.ak(a)
if(this.d.ao(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.ao(u,s))a.preventDefault()}},
e8:function(a){var u,t
H.k(a,"$iaw")
this.ae(a)
u=new V.av((a&&C.z).gf7(a),C.z.gf8(a)).J(0,180)
if(this.x){if(this.d.fK(u))a.preventDefault()
return}if(this.r)return
t=this.a4(a)
if(this.c.fL(u,t))a.preventDefault()},
ea:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a2(this.y)
s=this.a4(this.y)
this.d.e0(t,s,u)}},
ej:function(a){var u
H.k(a,"$iaj")
this.a.focus()
this.f=!0
this.b_(a)
u=this.aX(a)
if(this.e.fI(u))a.preventDefault()},
ef:function(a){var u
H.k(a,"$iaj")
this.b_(a)
u=this.aX(a)
if(this.e.fG(u))a.preventDefault()},
eh:function(a){var u
H.k(a,"$iaj")
this.b_(a)
u=this.aX(a)
if(this.e.fH(u))a.preventDefault()},
sdt:function(a){this.z=H.m(a,"$ib",[[P.bP,P.y]],"$ab")}}
V.aI.prototype={
u:function(a,b){var u,t,s
u=C.c.u(this.a,b.gfM())
t=C.c.u(this.b,b.gcK())
s=C.c.u(this.c,b.geT())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aI(u,t,s)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aJ.prototype={
u:function(a,b){var u,t,s,r
u=C.c.u(this.a,b.gfM())
t=C.c.u(this.b,b.gcK())
s=C.c.u(this.c,b.geT())
r=C.c.u(this.d,b.gh7(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aJ(u,t,s,r)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.dH.prototype={}
V.aR.prototype={
cp:function(a,b){var u=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
H:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aC(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.G().a
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
i:function(a){return this.E()},
c5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.h9(H.a([this.a,this.e,this.y,this.cx],u),b,c)
s=V.h9(H.a([this.b,this.f,this.z,this.cy],u),b,c)
r=V.h9(H.a([this.c,this.r,this.Q,this.db],u),b,c)
q=V.h9(H.a([this.d,this.x,this.ch,this.dx],u),b,c)
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
E:function(){return this.c5("",3,0)},
t:function(a){return this.c5(a,3,0)}}
V.a_.prototype={
u:function(a,b){return new V.a_(C.c.u(this.a,b.ghc(b)),C.c.u(this.b,b.ghd(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.aa.prototype={
u:function(a,b){return new V.aa(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.aa(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.cL.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cL))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.av.prototype={
b7:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.H()
t=this.b
if(typeof t!=="number")return t.H()
return Math.sqrt(u*u+t*t)},
u:function(a,b){var u,t,s
u=this.a
t=b.gh8(b)
if(typeof u!=="number")return u.u()
t=C.c.u(u,t)
u=this.b
s=b.gh9(b)
if(typeof u!=="number")return u.u()
return new V.av(t,C.c.u(u,s))},
J:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.iy
if(u==null){u=new V.av(0,0)
$.iy=u}return u}u=this.a
if(typeof u!=="number")return u.J()
t=this.b
if(typeof t!=="number")return t.J()
return new V.av(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.aY(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.aY(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.K.prototype={
b7:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
P:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
aG:function(a){return new V.K(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
J:function(a,b){if(Math.abs(b-0)<$.G().a)return V.fg()
return new V.K(this.a/b,this.b/b,this.c/b)},
fn:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.ch.prototype={
gv:function(){var u=this.b
if(u==null){u=D.ah()
this.b=u}return u},
aD:function(a,b){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.bF.prototype={
gv:function(){var u=this.e
if(u==null){u=D.ah()
this.e=u}return u},
R:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.S(a)},
d8:function(){return this.R(null)},
dI:function(a,b){var u,t,s,r,q,p,o,n
u=U.Y
H.m(b,"$io",[u],"$ao")
for(t=b.length,s=this.gbp(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.f(s,r)
if(n.a==null)n.sa3(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cq(a,b,this,[u])
u.b=!0
this.R(u)},
ed:function(a,b){var u,t,s
u=U.Y
H.m(b,"$io",[u],"$ao")
for(t=b.gF(b),s=this.gbp();t.q();)t.gA().gv().G(0,s)
u=new D.cr(a,b,this,[u])
u.b=!0
this.R(u)},
aD:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.cL()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.a7(u,u.length,0,[H.q(u,0)]),s=null;u.q();){t=u.d
if(t!=null){r=t.aD(a,b)
if(r!=null)s=s==null?r:r.H(0,s)}}this.f=s==null?V.ef():s
u=this.e
if(u!=null)u.aq()}return this.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bF))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ao:function(){return[U.Y]},
$aN:function(){return[U.Y]},
$iY:1}
U.Y.prototype={}
U.cM.prototype={
gv:function(){var u=this.y
if(u==null){u=D.ah()
this.y=u}return u},
R:function(a){var u=this.y
if(u!=null)u.S(a)},
scz:function(a){var u
a=V.hT(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.I("yaw",u,a,this,[P.r])
u.b=!0
this.R(u)}},
scf:function(a){var u
a=V.hT(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
u=new D.I("pitch",u,a,this,[P.r])
u.b=!0
this.R(u)}},
scl:function(a){var u
a=V.hT(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.I("roll",u,a,this,[P.r])
u.b=!0
this.R(u)}},
sc_:function(a){var u=this.d
if(!(Math.abs(u-a)<$.G().a)){this.d=a
u=new D.I("deltaYaw",u,a,this,[P.r])
u.b=!0
this.R(u)}},
sbY:function(a){var u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
u=new D.I("deltaPitch",u,a,this,[P.r])
u.b=!0
this.R(u)}},
sbZ:function(a){var u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.I("deltaRoll",u,a,this,[P.r])
u.b=!0
this.R(u)}},
aD:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.scz(this.a+this.d*a.y)
this.scf(this.b+this.e*a.y)
this.scl(this.c+this.f*a.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aC(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=this.b
s=Math.cos(t)
r=Math.sin(t)
u=u.H(0,V.aC(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=this.a
s=Math.cos(t)
r=Math.sin(t)
this.x=u.H(0,V.aC(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=this.y
if(u!=null)u.aq()}return this.x},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
u=this.a
t=b.a
s=$.G().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"], ["+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}
M.cl.prototype={
a1:function(a){var u
H.k(a,"$ix")
u=this.x
if(u!=null)u.S(a)},
d9:function(){return this.a1(null)},
dM:function(a,b){var u,t,s,r,q,p,o,n
u=E.U
H.m(b,"$io",[u],"$ao")
for(t=b.length,s=this.gY(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bD()
n.sa3(null)
n.sav(null)
n.c=null
n.d=0
o.z=n}H.f(s,r)
if(n.a==null)n.sa3(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cq(a,b,this,[u])
u.b=!0
this.a1(u)},
dO:function(a,b){var u,t,s
u=E.U
H.m(b,"$io",[u],"$ao")
for(t=b.gF(b),s=this.gY();t.q();)t.gA().gv().G(0,s)
u=new D.cr(a,b,this,[u])
u.b=!0
this.a1(u)},
scn:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().G(0,this.gY())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gY())
u=new D.I("technique",t,this.c,this,[O.be])
u.b=!0
this.a1(u)}},
gv:function(){var u=this.x
if(u==null){u=D.ah()
this.x=u}return u},
ah:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.cj(this.c)
u=this.b
u.toString
t=a1.a
C.b.eS(t,36160,null)
C.b.c2(t,2884)
C.b.c2(t,2929)
C.b.f9(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.aY(s)
o=C.c.X(p*s)
p=q.b
if(typeof r!=="number")return H.aY(r)
n=C.c.X(p*r)
p=C.c.X(q.c*s)
a1.c=p
q=C.c.X(q.d*r)
a1.d=q
C.b.h3(t,o,n,p,q)
C.b.eX(t,u.c)
u=u.a
C.b.eW(t,u.a,u.b,u.c,u.d)
C.b.eV(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aC(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.ci(i)
t=$.ii
if(t==null){t=$.ik
if(t==null){t=new V.aa(0,0,0)
$.ik=t}q=$.iB
if(q==null){q=new V.K(0,1,0)
$.iB=q}p=$.iz
if(p==null){p=new V.K(0,0,-1)
$.iz=p}h=p.J(0,Math.sqrt(p.L(p)))
q=q.am(h)
g=q.J(0,Math.sqrt(q.L(q)))
f=h.am(g)
e=new V.K(t.a,t.b,t.c)
d=g.aG(0).L(e)
c=f.aG(0).L(e)
b=h.aG(0).L(e)
t=V.aC(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ii=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.H(0,a)}a1.db.ci(a)
for(u=this.d.a,u=new J.a7(u,u.length,0,[H.q(u,0)]);u.q();)u.d.cv(a1)
for(u=this.d.a,u=new J.a7(u,u.length,0,[H.q(u,0)]);u.q();)u.d.ah(a1)
this.a.toString
a1.cy.ba()
a1.db.ba()
this.b.toString
a1.cg()},
sdk:function(a,b){this.d=H.m(b,"$iN",[E.U],"$aN")},
$ikV:1}
A.cb.prototype={}
A.dq.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.c3(r.a,r.c)}},
fa:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.c0(r.a,r.c)}}}
A.dA.prototype={}
A.bM.prototype={
d2:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bC:function(a,b){var u,t,s
u=this.a
t=C.b.f3(u,b)
C.b.cS(u,t,a)
C.b.eY(u,t)
if(!H.hI(C.b.cI(u,t,35713))){s=C.b.cH(u,t)
C.b.f6(u,t)
throw H.d(P.X("Error compiling shader '"+H.c(t)+"': "+H.c(s)))}return t},
eB:function(){var u,t,s,r,q,p
u=H.a([],[A.cb])
t=this.a
s=H.S(C.b.aF(t,this.r,35721))
if(typeof s!=="number")return H.aY(s)
r=0
for(;r<s;++r){q=C.b.cB(t,this.r,r)
p=C.b.cD(t,this.r,q.name)
C.a.h(u,new A.cb(t,q.name,p))}this.x=new A.dq(u)},
eD:function(){var u,t,s,r,q,p
u=H.a([],[A.cV])
t=this.a
s=H.S(C.b.aF(t,this.r,35718))
if(typeof s!=="number")return H.aY(s)
r=0
for(;r<s;++r){q=C.b.cC(t,this.r,r)
p=C.b.cJ(t,this.r,q.name)
C.a.h(u,this.f4(q.type,q.size,q.name,p))}this.y=new A.f6(u)},
ad:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.f_(u,t,b,c)
else return A.hz(u,t,b,a,c)},
dn:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.f9(u,t,b,c)
else return A.hz(u,t,b,a,c)},
dq:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.fa(u,t,b,c)
else return A.hz(u,t,b,a,c)},
ay:function(a,b){return new P.d4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.c(b)+"."))},
f4:function(a,b,c,d){switch(a){case 5120:return this.ad(b,c,d)
case 5121:return this.ad(b,c,d)
case 5122:return this.ad(b,c,d)
case 5123:return this.ad(b,c,d)
case 5124:return this.ad(b,c,d)
case 5125:return this.ad(b,c,d)
case 5126:return new A.bT(this.a,this.r,c,d)
case 35664:return new A.f1(this.a,this.r,c,d)
case 35665:return new A.bU(this.a,this.r,c,d)
case 35666:return new A.f4(this.a,this.r,c,d)
case 35667:return new A.f2(this.a,this.r,c,d)
case 35668:return new A.f3(this.a,this.r,c,d)
case 35669:return new A.f5(this.a,this.r,c,d)
case 35674:return new A.f7(this.a,this.r,c,d)
case 35675:return new A.f8(this.a,this.r,c,d)
case 35676:return new A.bV(this.a,this.r,c,d)
case 35678:return this.dn(b,c,d)
case 35680:return this.dq(b,c,d)
case 35670:throw H.d(this.ay("BOOL",c))
case 35671:throw H.d(this.ay("BOOL_VEC2",c))
case 35672:throw H.d(this.ay("BOOL_VEC3",c))
case 35673:throw H.d(this.ay("BOOL_VEC4",c))
default:throw H.d(P.X("Unknown uniform variable type "+H.c(a)+" for "+H.c(c)+"."))}}}
A.cV.prototype={}
A.f6.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.E()},
fi:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+a
return s},
E:function(){return this.fi("\n")}}
A.f_.prototype={
i:function(a){return"Uniform1i: "+H.c(this.c)}}
A.f2.prototype={
i:function(a){return"Uniform2i: "+H.c(this.c)}}
A.f3.prototype={
i:function(a){return"Uniform3i: "+H.c(this.c)}}
A.f5.prototype={
i:function(a){return"Uniform4i: "+H.c(this.c)}}
A.f0.prototype={
i:function(a){return"Uniform1iv: "+H.c(this.c)},
seK:function(a){this.e=H.m(a,"$ib",[P.u],"$ab")}}
A.bT.prototype={
i:function(a){return"Uniform1f: "+H.c(this.c)}}
A.f1.prototype={
i:function(a){return"Uniform2f: "+H.c(this.c)}}
A.bU.prototype={
i:function(a){return"Uniform3f: "+H.c(this.c)}}
A.f4.prototype={
i:function(a){return"Uniform4f: "+H.c(this.c)}}
A.f7.prototype={
i:function(a){return"Uniform1Mat2 "+H.c(this.c)}}
A.f8.prototype={
i:function(a){return"UniformMat3: "+H.c(this.c)}}
A.bV.prototype={
bi:function(a){var u=new Float32Array(H.hD(H.m(a,"$ib",[P.r],"$ab")))
C.b.h1(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.c(this.c)}}
A.f9.prototype={
i:function(a){return"UniformSampler2D: "+H.c(this.c)}}
A.fa.prototype={
i:function(a){return"UniformSamplerCube: "+H.c(this.c)}}
F.hl.prototype={
$1:function(a){return new V.aa(Math.cos(a),Math.sin(a),0)},
$S:30}
F.h7.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.hX(t.$1(u),s)
s=J.jh(J.hX(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.K(s.a,s.b,s.c)
q=s.J(0,Math.sqrt(s.L(s)))
t=$.iA
if(t==null){t=new V.K(1,0,0)
$.iA=t
p=t}else p=t
if(!J.L(q,p)){t=$.iC
if(t==null){t=new V.K(0,0,1)
$.iC=t
p=t}else p=t}t=q.am(p)
o=t.J(0,Math.sqrt(t.L(t)))
t=o.am(q)
p=t.J(0,Math.sqrt(t.L(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.H(0,t*s)
s=o.H(0,m*s)
s=new V.aa(r.a+(t.a-s.a),r.b+(t.b-s.b),r.c+(t.c-s.c))
if(!J.L(a.f,s)){a.f=s
t=a.a
if(t!=null)t.V()}},
$S:31}
F.O.prototype={
aA:function(){if(!this.gc1()){C.a.G(this.a.a.d.b,this)
this.a.a.V()}this.ep()
this.eq()
this.er()},
ey:function(a){this.a=a
C.a.h(a.d.b,this)},
ez:function(a){this.b=a
C.a.h(a.d.c,this)},
eA:function(a){this.c=a
C.a.h(a.d.d,this)},
ep:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
eq:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
er:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gc1:function(){return this.a==null||this.b==null||this.c==null},
di:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.fg()
if(t!=null)q=q.P(0,t)
if(s!=null)q=q.P(0,s)
if(r!=null)q=q.P(0,r)
if(q.fn())return
return q.J(0,Math.sqrt(q.L(q)))},
dj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.J(0,Math.sqrt(u.L(u)))
u=r.u(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.am(u.J(0,Math.sqrt(u.L(u))))
return u.J(0,Math.sqrt(u.L(u)))},
b2:function(){if(this.d!=null)return!0
var u=this.di()
if(u==null){u=this.dj()
if(u==null)return!1}this.d=u
this.a.a.V()
return!0},
gbV:function(a){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var u,t
if(this.gc1())return a+"disposed"
u=a+C.d.a7(J.al(this.a.e),0)+", "+C.d.a7(J.al(this.b.e),0)+", "+C.d.a7(J.al(this.c.e),0)+" {"
t=this.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
E:function(){return this.t("")}}
F.dM.prototype={}
F.eI.prototype={
b8:function(a,b,c){var u,t
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
F.aQ.prototype={}
F.e5.prototype={}
F.eZ.prototype={}
F.b7.prototype={}
F.cO.prototype={
gv:function(){var u=this.e
if(u==null){u=D.ah()
this.e=u}return u},
fu:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.a(u.slice(0),[H.q(u,0)])
for(u=[F.ad];t.length!==0;){s=C.a.gff(t)
C.a.fO(t,0)
if(s!=null){r=H.a([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.B)(t),++p){o=t[p]
if(o!=null&&a.b8(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1)b.ft(r)}}this.a.D()
this.c.bb()
this.d.bb()
this.b.fP()
this.c.bc(new F.eZ())
this.d.bc(new F.eI())
u=this.e
if(u!=null)u.aq()},
eU:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aE()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bp().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.c6().a)!==0)++r
if((s&$.c7().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bn().a)!==0)++r
q=a1.gbj(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.a(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.a(t,[Z.cd])
for(m=0,l=0;l<r;++l){k=a1.eP(l)
j=k.gbj(k)
C.a.I(n,l,new Z.cd(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].fq(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.I(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a0(t,34962,e)
C.b.bT(t,34962,new Float32Array(H.hD(o)),35044)
C.b.a0(t,34962,null)
d=new Z.ce(new Z.d0(34962,e),n,a1)
d.sdC(H.a([],[Z.bG]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.u
c=H.a([],[s])
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
C.a.h(c,b.e)}a=Z.k0(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bG(4,c.length,a))}return d},
i:function(a){var u=H.a([],[P.j])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.t("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.t("   "))}return C.a.k(u,"\n")},
W:function(a){var u=this.e
if(u!=null)u.S(a)},
V:function(){return this.W(null)},
$ikW:1}
F.eB.prototype={
eM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ad],"$ab")
u=H.a([],[F.O])
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
C.a.h(u,F.dL(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dL(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dL(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dL(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
bc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b8(0,p,n)){p.aA()
break}}}}},
bb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gbV(s)
if(t)s.aA()}},
b3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].b2())s=!1
return s},
i:function(a){return this.E()},
t:function(a){var u,t,s,r
u=H.a([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdu:function(a){this.b=H.m(a,"$ib",[F.O],"$ab")}}
F.eC.prototype={
gl:function(a){return 0},
bc:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
bb:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
s=t[u]
t=s.gbV(s)
if(t)s.aA()}},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.h(s,t)
C.a.h(u,s[t].t(a+(""+t+". ")))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdD:function(a){this.b=H.m(a,"$ib",[F.aQ],"$ab")}}
F.eD.prototype={
gl:function(a){return 0},
fP:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
t=t[u].ghb()
t=t.gha(t)
if(t.gl(t).h5(0,1)){t=this.b
return H.h(t,u)
t[u].aA()}}},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].t(a))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
saW:function(a){this.b=H.m(a,"$ib",[F.b7],"$ab")}}
F.ad.prototype={
bX:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hA(this.cx,s,p,u,t,r,q,a,o)},
fq:function(a){var u,t
if(a.n(0,$.aE())){u=this.f
t=[P.r]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.n(0,$.bp())){u=this.r
t=[P.r]
if(u==null)return H.a([0,1,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.n(0,$.bo())){u=H.a([0,0,1],[P.r])
return u}else if(a.n(0,$.bq())){u=this.y
t=[P.r]
if(u==null)return H.a([0,0],t)
else return H.a([u.a,u.b],t)}else if(a.n(0,$.br())){u=H.a([0,0,0],[P.r])
return u}else if(a.n(0,$.c6())){u=this.Q
t=[P.r]
if(u==null)return H.a([1,1,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.n(0,$.c7())){u=this.Q
t=[P.r]
if(u==null)return H.a([1,1,1,1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bs()))return H.a([this.ch],[P.r])
else if(a.n(0,$.bn())){u=H.a([-1,-1,-1,-1],[P.r])
return u}else return H.a([],[P.r])},
b2:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.fg()
this.d.O(0,new F.fq(u))
u=u.a
this.r=u.J(0,Math.sqrt(u.L(u)))
u=this.a
if(u!=null){u.V()
u=this.a.e
if(u!=null)u.aq()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
C.a.h(u,C.d.a7(J.al(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.A(this.ch,3,0))
C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
E:function(){return this.t("")}}
F.fq.prototype={
$1:function(a){var u,t
H.k(a,"$iO")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.P(0,u)}},
$S:6}
F.fh.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.X("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.V()
return!0},
gl:function(a){return this.c.length},
b3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].b2()
return!0},
i:function(a){return this.E()},
t:function(a){var u,t,s,r
this.D()
u=H.a([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
return C.a.k(u,"\n")},
E:function(){return this.t("")},
seL:function(a){this.c=H.m(a,"$ib",[F.ad],"$ab")}}
F.fi.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t,s
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
O:function(a,b){H.f(b,{func:1,ret:-1,args:[F.O]})
C.a.O(this.b,b)
C.a.O(this.c,new F.fj(this,b))
C.a.O(this.d,new F.fk(this,b))},
i:function(a){return this.E()},
t:function(a){var u,t,s,r
u=H.a([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].t(a))
return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdv:function(a){this.b=H.m(a,"$ib",[F.O],"$ab")},
sdw:function(a){this.c=H.m(a,"$ib",[F.O],"$ab")},
sdz:function(a){this.d=H.m(a,"$ib",[F.O],"$ab")}}
F.fj.prototype={
$1:function(a){H.k(a,"$iO")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:6}
F.fk.prototype={
$1:function(a){var u
H.k(a,"$iO")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:6}
F.fl.prototype={
gl:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.h(u,t)
return u[t]}else{u=this.b
return H.h(u,b)
return u[b]}},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].t(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].t(a))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
sdE:function(a){this.b=H.m(a,"$ib",[F.aQ],"$ab")},
sdF:function(a){this.c=H.m(a,"$ib",[F.aQ],"$ab")}}
F.fn.prototype={}
F.fm.prototype={
b8:function(a,b,c){return J.L(b.f,c.f)}}
F.fo.prototype={}
F.en.prototype={
ft:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ad],"$ab")
u=V.fg()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.J(0,Math.sqrt(u.L(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.J(0,Math.sqrt(o*o+n*n+m*m))}if(!J.L(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.S(null)}}}return}}
F.fp.prototype={
gl:function(a){return 0},
i:function(a){return this.E()},
t:function(a){var u,t,s
u=H.a([],[P.j])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].t(a))}return C.a.k(u,"\n")},
E:function(){return this.t("")},
saW:function(a){this.b=H.m(a,"$ib",[F.b7],"$ab")}}
O.dz.prototype={
gv:function(){var u=this.f
if(u==null){u=D.ah()
this.f=u}return u},
au:function(a){var u=this.f
if(u!=null)u.S(a)}}
O.be.prototype={}
T.eQ.prototype={}
V.ay.prototype={
a6:function(a){return!0},
i:function(a){return"all"},
$ia3:1}
V.a3.prototype={}
V.cy.prototype={
a6:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].a6(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sM:function(a){this.a=H.m(a,"$ib",[V.a3],"$ab")},
$ia3:1}
V.Z.prototype={
a6:function(a){return!this.cY(a)},
i:function(a){return"!["+this.bk(0)+"]"}}
V.es.prototype={
a6:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.hw(this.a)
t=H.hw(this.b)
return u+".."+t},
$ia3:1}
V.eA.prototype={
d1:function(a){var u,t
if(a.a.length<=0)throw H.d(P.X("May not create a SetMatcher with zero characters."))
u=new H.aq([P.u,P.D])
for(t=new H.bH(a,a.gl(a),0,[H.R(a,"H",0)]);t.q();)u.I(0,t.d,!0)
this.sex(u)},
a6:function(a){return this.a.bW(a)},
i:function(a){var u=this.a
return P.hx(new H.cv(u,[H.q(u,0)]),0,null)},
sex:function(a){this.a=H.m(a,"$ia9",[P.u,P.D],"$aa9")},
$ia3:1}
V.bN.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.bS(this.a.j(0,b))
r.sM(H.a([],[V.a3]))
r.c=!1
C.a.h(this.c,r)
return r},
fe:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.a6(a))return r}return},
i:function(a){return this.b},
seJ:function(a){this.c=H.m(a,"$ib",[V.bS],"$ab")}}
V.cU.prototype={
i:function(a){var u,t
u=H.hS(this.b,"\n","\\n")
t=H.hS(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.bR.prototype={
a8:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.j],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.I(0,s,b)}},
i:function(a){return this.b},
ses:function(a){var u=P.j
this.c=H.m(a,"$ia9",[u,u],"$aa9")}}
V.eS.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.bN(this,b)
u.seJ(H.a([],[V.bS]))
u.d=null
this.a.I(0,b,u)}return u},
B:function(a){var u,t
u=this.b.m(0,a)
if(u==null){u=new V.bR(this,a)
t=P.j
u.ses(new H.aq([t,t]))
this.b.I(0,a,u)}return u},
cr:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.a([],[V.cU])
t=this.c
s=[P.u]
r=H.a([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.d.ac(a,o)
m=t.fe(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hx(r,0,null)
throw H.d(P.X("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.a([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hx(r,0,null)
k=t.d
j=k.c.m(0,l)
p=new V.cU(j==null?k.b:j,l,o)}++o}}},
seG:function(a){this.a=H.m(a,"$ia9",[P.j,V.bN],"$aa9")},
seI:function(a){this.b=H.m(a,"$ia9",[P.j,V.bR],"$aa9")}}
V.bS.prototype={
i:function(a){return this.b.b+": "+this.bk(0)}}
X.cg.prototype={$iie:1}
X.dS.prototype={
gv:function(){var u=this.x
if(u==null){u=D.ah()
this.x=u}return u}}
X.cF.prototype={
gv:function(){var u=this.f
if(u==null){u=D.ah()
this.f=u}return u},
ab:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.S(a)},
de:function(){return this.ab(null)},
sc7:function(a){var u,t
if(!J.L(this.b,a)){u=this.b
if(u!=null)u.gv().G(0,this.gbq())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gbq())
u=new D.I("mover",t,this.b,this,[U.Y])
u.b=!0
this.ab(u)}},
$iie:1,
$icg:1}
X.cS.prototype={}
V.aH.prototype={
as:function(a){this.b=new P.dV(C.G)
this.c=null
this.saR(H.a([],[[P.b,W.a8]]))},
w:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.a([],[W.a8]))
t=a.split("\n")
for(u=t.length,s=[W.a8],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.a([],s))
o=document.createElement("div")
o.className="codePart"
H.z(p)
n=this.b.dm(p,0,p.length)
m=n==null?p:n
C.e.cQ(o,H.hS(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaB(this.d),o)}},
ce:function(a){var u,t,s,r
H.m(a,"$ib",[P.j],"$ab")
this.saR(H.a([],[[P.b,W.a8]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.az()
this.c=t}for(t=t.cr(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)this.aC(t[r])},
saR:function(a){this.d=H.m(a,"$ib",[[P.b,W.a8]],"$ab")}}
V.hk.prototype={
$1:function(a){H.k(a,"$ias")
P.hR(C.c.cq(this.a.gfj(),2)+" fps")},
$S:33}
V.dy.prototype={
aC:function(a){switch(a.a){case"Class":this.w(a.b,"#551")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break
case"Type":this.w(a.b,"#B11")
break
case"Whitespace":this.w(a.b,"#111")
break}},
az:function(){var u,t,s,r
u=V.eT()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.p(new H.l("_"))
C.a.h(t.a,s)
s=V.E("a","z")
C.a.h(t.a,s)
s=V.E("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.p(new H.l("_"))
C.a.h(s.a,t)
t=V.E("0","9")
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.p(new H.l("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.p(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.p(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.p(new H.l('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.p(new H.l('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.p(new H.l("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.p(new H.l('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.ay())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.p(new H.l("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.p(new H.l("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.p(new H.l("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.p(new H.l("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.ay())
s=u.j(0,"Start").k(0,"Slash")
t=V.p(new H.l("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.p(new H.l("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.p(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.Z()
r=[V.a3]
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.p(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.p(new H.l("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.p(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.Z()
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.p(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.p(new H.l("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.p(new H.l(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.p(new H.l(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.B("Num")
s=u.j(0,"Float")
s.d=s.a.B("Num")
s=u.j(0,"Sym")
s.d=s.a.B("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.B("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.B("String")
s=u.j(0,"EndComment")
s.d=s.a.B("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.B("Whitespace")
s=u.j(0,"Id")
t=s.a.B("Id")
s.d=t
s=[P.j]
t.a8(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.a8(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.a8(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.dT.prototype={
aC:function(a){switch(a.a){case"Builtin":this.w(a.b,"#411")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Preprocess":this.w(a.b,"#737")
break
case"Reserved":this.w(a.b,"#119")
break
case"Symbol":this.w(a.b,"#611")
break
case"Type":this.w(a.b,"#171")
break
case"Whitespace":this.w(a.b,"#111")
break}},
az:function(){var u,t,s,r
u=V.eT()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.p(new H.l("_"))
C.a.h(t.a,s)
s=V.E("a","z")
C.a.h(t.a,s)
s=V.E("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.p(new H.l("_"))
C.a.h(s.a,t)
t=V.E("0","9")
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.p(new H.l("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.E("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.E("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.p(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.p(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.p(new H.l("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.p(new H.l("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.ay())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.p(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.Z()
r=[V.a3]
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.p(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.p(new H.l("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.Z()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.p(new H.l("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.p(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.p(new H.l(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.p(new H.l(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.B("Num")
t=u.j(0,"Float")
t.d=t.a.B("Num")
t=u.j(0,"Sym")
t.d=t.a.B("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.B("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.B("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.B("Whitespace")
t=u.j(0,"Id")
s=t.a.B("Id")
t.d=s
t=[P.j]
s.a8(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.a8(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.a8(0,"Builtin",H.a(["gl_FragColor","gl_Position"],t))
return u}}
V.dU.prototype={
aC:function(a){switch(a.a){case"Attr":this.w(a.b,"#911")
this.w("=","#111")
break
case"Id":this.w(a.b,"#111")
break
case"Other":this.w(a.b,"#111")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break}},
az:function(){var u,t,s
u=V.eT()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.p(new H.l("_"))
C.a.h(t.a,s)
s=V.E("a","z")
C.a.h(t.a,s)
s=V.E("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.p(new H.l("_"))
C.a.h(s.a,t)
t=V.E("0","9")
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.p(new H.l("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.p(new H.l("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.p(new H.l("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.p(new H.l('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.p(new H.l('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.p(new H.l("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.p(new H.l('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.ay())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.ay())
t=u.j(0,"Other").k(0,"Other")
s=new V.Z()
s.sM(H.a([],[V.a3]))
C.a.h(t.a,s)
t=V.p(new H.l('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.E("a","z")
C.a.h(s.a,t)
t=V.E("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.B("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.B("String")
t=u.j(0,"Id")
s=t.a.B("Id")
t.d=s
s.a8(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
s=u.j(0,"Attr")
s.d=s.a.B("Attr")
s=u.j(0,"Other")
s.d=s.a.B("Other")
return u}}
V.er.prototype={
ce:function(a){H.m(a,"$ib",[P.j],"$ab")
this.saR(H.a([],[[P.b,W.a8]]))
this.w(C.a.k(a,"\n"),"#111")},
aC:function(a){},
az:function(){return}}
V.eE.prototype={
d3:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).p(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.p(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.p(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.p(q,p)}o=u.createElement("div")
this.a=o
C.e.p(q,o)
this.b=null
o=W.e
W.Q(u,"scroll",H.f(new V.eG(s),{func:1,ret:-1,args:[o]}),!1,o)},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.j],"$ab")
this.eC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cr(C.a.fo(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.p(t,o)
break
case"Link":n=p.b
if(H.kK(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
C.e.p(t,l)}else{k=P.iI(C.w,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.p(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.p(t,o)
break}}C.e.p(this.a,t)},
cE:function(a){var u,t,s,r
u=new V.dy("dart")
u.as("dart")
t=new V.dT("glsl")
t.as("glsl")
s=new V.dU("html")
s.as("html")
r=C.a.fg(H.a([u,t,s],[V.aH]),new V.eH(a))
if(r!=null)return r
u=new V.er("plain")
u.as("plain")
return u},
bO:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.j],"$ab")
u=H.a([],[P.u])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.hO(r).aI(r,"+")){C.a.I(a7,s,C.d.aJ(r,1))
C.a.h(u,1)
t=!0}else if(C.d.aI(r,"-")){C.a.I(a7,s,C.d.aJ(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cE(a5)
q.ce(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.p(o,n)
C.e.p(this.a,o)
m=P.iI(C.w,a4,C.q,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.i_(null)
i.href="#"+m
i.textContent=a4
C.e.p(j,i)
C.o.p(k,j)
C.i.p(l,k)
C.k.p(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.o.p(a,r[a0])
C.i.p(e,d)
C.i.p(e,c)
C.i.p(e,a)
C.k.p(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gF(r);a3.q();)C.o.p(c,a3.gA())
C.i.p(e,d)
C.i.p(e,c)
C.k.p(n,e)}},
eC:function(){var u,t,s,r
if(this.b!=null)return
u=V.eT()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.p(new H.l("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.Z()
r=[V.a3]
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.p(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.p(new H.l("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.p(new H.l("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.Z()
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.p(new H.l("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.p(new H.l("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.p(new H.l("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.Z()
s.sM(H.a([],r))
C.a.h(t.a,s)
t=V.p(new H.l("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.p(new H.l("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.p(new H.l("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.p(new H.l("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.p(new H.l("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.Z()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.p(new H.l("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.p(new H.l("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.Z()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.p(new H.l("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.ay())
s=u.j(0,"Other").k(0,"Other")
t=new V.Z()
t.sM(H.a([],r))
C.a.h(s.a,t)
s=V.p(new H.l("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.B("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.B("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.B("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.B("Link")
s=u.j(0,"Other")
s.d=s.a.B("Other")
this.b=u}}
V.eG.prototype={
$1:function(a){P.iu(C.l,new V.eF(this.a))},
$S:34}
V.eF.prototype={
$0:function(){var u,t,s
u=C.c.X(document.documentElement.scrollTop)
t=this.a.style
s=H.c(-0.01*u)+"px"
t.top=s},
$S:0}
V.eH.prototype={
$1:function(a){return H.k(a,"$iaH").a===this.a},
$S:35}
R.hh.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.j]
u.bO("Vertex Shader","glsl",0,H.a((s==null?null:s.c).split("\n"),r))
t=t.a
u.bO("Fragment Shader","glsl",0,H.a((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.M.prototype
u.cV=u.i
u=J.ct.prototype
u.cX=u.i
u=P.o.prototype
u.cW=u.aE
u=W.C.prototype
u.aK=u.T
u=W.dc.prototype
u.cZ=u.a_
u=V.cy.prototype
u.cY=u.a6
u.bk=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kj","k2",7)
u(P,"kk","k3",7)
u(P,"kl","k4",7)
t(P,"iR","ki",2)
s(W,"ku",4,null,["$4"],["k6"],20,0)
s(W,"kv",4,null,["$4"],["k7"],20,0)
var m
r(m=E.U.prototype,"gcc",0,0,null,["$1","$0"],["cd","fD"],1,0)
r(m,"gca",0,0,null,["$1","$0"],["cb","fC"],1,0)
r(m,"gc8",0,0,null,["$1","$0"],["c9","fz"],1,0)
q(m,"gfv","fw",4)
q(m,"gfA","fB",4)
r(m=E.cT.prototype,"gbm",0,0,null,["$1","$0"],["bo","bn"],1,0)
p(m,"gfR","ck",2)
o(m=X.cZ.prototype,"gdV","dW",9)
o(m,"gdJ","dK",9)
o(m,"gdP","dQ",3)
o(m,"gdZ","e_",19)
o(m,"gdX","dY",19)
o(m,"ge1","e2",3)
o(m,"ge5","e6",3)
o(m,"gdT","dU",3)
o(m,"ge3","e4",3)
o(m,"gdR","dS",3)
o(m,"ge7","e8",26)
o(m,"ge9","ea",9)
o(m,"gei","ej",8)
o(m,"gee","ef",8)
o(m,"geg","eh",8)
n(V.av.prototype,"gl","b7",12)
n(V.K.prototype,"gl","b7",12)
r(m=U.bF.prototype,"gbp",0,0,null,["$1","$0"],["R","d8"],1,0)
q(m,"gdH","dI",11)
q(m,"gec","ed",11)
r(m=M.cl.prototype,"gY",0,0,null,["$1","$0"],["a1","d9"],1,0)
q(m,"gdL","dM",4)
q(m,"gdN","dO",4)
r(X.cF.prototype,"gbq",0,0,null,["$1","$0"],["ab","de"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.y,null)
s(P.y,[H.hu,J.M,J.a7,P.d8,P.o,H.bH,P.ao,H.b1,H.cY,H.et,H.eW,P.aM,H.bx,H.dd,P.b6,H.e6,H.e7,H.e2,P.de,P.ax,P.af,P.d1,P.eK,P.bP,P.eL,P.as,P.T,P.h2,P.fT,P.bf,P.d7,P.H,P.by,P.dW,P.h0,P.D,P.aL,P.a1,P.az,P.ep,P.cP,P.d4,P.dR,P.aN,P.b,P.w,P.a0,P.j,P.bc,W.dw,W.aU,W.a2,W.cD,W.dc,W.fW,W.cm,W.a4,W.fS,W.dh,O.N,O.bI,E.dr,E.U,E.eu,E.cT,Z.d0,Z.fr,Z.ce,Z.bG,Z.d_,D.du,D.bD,D.x,X.cf,X.cu,X.e4,X.e9,X.aD,X.eg,X.eU,X.cZ,V.aI,V.aJ,V.dH,V.aR,V.a_,V.aa,V.cL,V.av,V.K,M.cl,A.cb,A.dq,A.cV,A.f6,F.O,F.dM,F.aQ,F.e5,F.b7,F.cO,F.eB,F.eC,F.eD,F.ad,F.fh,F.fi,F.fl,F.fn,F.fo,F.fp,O.be,T.eQ,V.ay,V.a3,V.cy,V.es,V.eA,V.bN,V.cU,V.bR,V.eS,X.cg,X.cS,X.cF,V.aH,V.eE])
s(J.M,[J.e_,J.e1,J.ct,J.ap,J.b4,J.aO,H.cC,W.b0,W.d2,W.dB,W.cj,W.ck,W.e,W.d5,W.cx,W.da,W.cI,W.at,W.df,W.di,P.cc,P.cn,P.cH,P.bb,P.cN,P.cW])
s(J.ct,[J.eq,J.aT,J.aP])
t(J.ht,J.ap)
s(J.b4,[J.cs,J.e0])
t(P.e8,P.d8)
s(P.e8,[H.cX,W.fy,W.V,P.dN])
t(H.l,H.cX)
s(P.o,[H.dE,H.ec,H.bW])
s(H.dE,[H.b5,H.cv])
s(P.ao,[H.ed,H.fs])
t(H.ee,H.b5)
s(P.aM,[H.eo,H.e3,H.fc,H.eY,H.dt,H.ey,P.cE,P.am,P.fd,P.fb,P.bO,P.dv,P.dx])
s(H.bx,[H.hm,H.eP,H.hc,H.hd,H.he,P.fu,P.ft,P.fv,P.fw,P.h_,P.fZ,P.fD,P.fH,P.fE,P.fF,P.fG,P.fK,P.fL,P.fJ,P.fI,P.eM,P.eN,P.h4,P.fQ,P.fP,P.fR,P.eb,P.dC,P.dD,W.dF,W.fC,W.em,W.el,W.fU,W.fV,W.fY,W.h1,P.h6,P.dO,P.dP,E.ev,E.ew,E.ex,E.eR,D.dJ,D.dK,F.hl,F.h7,F.fq,F.fj,F.fk,V.hk,V.eG,V.eF,V.eH,R.hh])
s(H.eP,[H.eJ,H.bv])
t(P.ea,P.b6)
s(P.ea,[H.aq,W.fx])
t(H.cz,H.cC)
s(H.cz,[H.c_,H.c1])
t(H.c0,H.c_)
t(H.cA,H.c0)
t(H.c2,H.c1)
t(H.cB,H.c2)
s(H.cB,[H.eh,H.ei,H.ej,H.ek])
t(P.fO,P.h2)
t(P.fN,P.fT)
t(P.bz,P.eL)
t(P.dG,P.by)
s(P.bz,[P.dV,P.ff])
t(P.fe,P.dG)
s(P.a1,[P.r,P.u])
s(P.am,[P.ba,P.dX])
s(W.b0,[W.t,W.bX])
s(W.t,[W.C,W.aG,W.bB,W.bY])
s(W.C,[W.n,P.i])
s(W.n,[W.ca,W.dp,W.bu,W.aF,W.b_,W.a8,W.dQ,W.co,W.ez,W.bd,W.cQ,W.cR,W.eO,W.bQ])
t(W.bA,W.d2)
t(W.d6,W.d5)
t(W.b2,W.d6)
t(W.cp,W.bB)
t(W.aS,W.e)
s(W.aS,[W.ar,W.P,W.aj])
t(W.db,W.da)
t(W.bJ,W.db)
t(W.dg,W.df)
t(W.eV,W.dg)
t(W.aw,W.P)
t(W.d3,W.ck)
t(W.dj,W.di)
t(W.d9,W.dj)
t(W.fz,W.fx)
t(W.fA,P.eK)
t(W.hB,W.fA)
t(W.fB,P.bP)
t(W.fX,W.dc)
t(P.bL,P.i)
s(E.dr,[Z.cd,A.bM])
s(D.x,[D.cq,D.cr,D.I])
t(U.Y,D.du)
s(U.Y,[U.ch,U.cM])
t(U.bF,O.N)
t(A.dA,A.bM)
s(A.cV,[A.f_,A.f2,A.f3,A.f5,A.f0,A.bT,A.f1,A.bU,A.f4,A.f7,A.f8,A.bV,A.f9,A.fa])
t(F.eI,F.dM)
t(F.eZ,F.e5)
t(F.fm,F.fn)
t(F.en,F.fo)
t(O.dz,O.be)
s(V.cy,[V.Z,V.bS])
t(X.dS,X.cS)
s(V.aH,[V.dy,V.dT,V.dU,V.er])
u(H.cX,H.cY)
u(H.c_,P.H)
u(H.c0,H.b1)
u(H.c1,P.H)
u(H.c2,H.b1)
u(P.d8,P.H)
u(W.d2,W.dw)
u(W.d5,P.H)
u(W.d6,W.a2)
u(W.da,P.H)
u(W.db,W.a2)
u(W.df,P.H)
u(W.dg,W.a2)
u(W.di,P.H)
u(W.dj,W.a2)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.aF.prototype
C.r=W.b_.prototype
C.e=W.a8.prototype
C.D=W.cj.prototype
C.F=W.co.prototype
C.t=W.cp.prototype
C.H=J.M.prototype
C.a=J.ap.prototype
C.h=J.cs.prototype
C.c=J.b4.prototype
C.d=J.aO.prototype
C.O=J.aP.prototype
C.S=W.bJ.prototype
C.x=J.eq.prototype
C.y=W.cI.prototype
C.b=P.bb.prototype
C.o=W.bd.prototype
C.k=W.cQ.prototype
C.i=W.cR.prototype
C.p=J.aT.prototype
C.z=W.aw.prototype
C.A=W.bX.prototype
C.B=new P.ep()
C.C=new P.ff()
C.f=new P.fO()
C.l=new P.az(0)
C.E=new P.az(5e6)
C.G=new P.dW("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.P=H.a(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.Q=H.a(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.R=H.a(u([]),[P.j])
C.w=H.a(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.m=H.a(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.n=H.a(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.q=new P.fe(!1)})();(function staticFields(){$.an=0
$.bw=null
$.i0=null
$.hE=!1
$.iU=null
$.iP=null
$.iZ=null
$.h8=null
$.hf=null
$.hP=null
$.bg=null
$.c3=null
$.c4=null
$.hF=!1
$.F=C.f
$.aA=null
$.hr=null
$.i8=null
$.i7=null
$.id=null
$.ij=null
$.ik=null
$.ip=null
$.iy=null
$.iD=null
$.iA=null
$.iB=null
$.iC=null
$.iz=null
$.jw="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.jv="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.ii=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kS","j1",function(){return H.iT("_$dart_dartClosure")})
u($,"kT","hU",function(){return H.iT("_$dart_js")})
u($,"kY","j2",function(){return H.au(H.eX({
toString:function(){return"$receiver$"}}))})
u($,"kZ","j3",function(){return H.au(H.eX({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"l_","j4",function(){return H.au(H.eX(null))})
u($,"l0","j5",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"l3","j8",function(){return H.au(H.eX(void 0))})
u($,"l4","j9",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"l2","j7",function(){return H.au(H.iw(null))})
u($,"l1","j6",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"l6","jb",function(){return H.au(H.iw(void 0))})
u($,"l5","ja",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ll","hV",function(){return P.k1()})
u($,"lp","c8",function(){return[]})
u($,"lo","jg",function(){return P.jT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"lm","jf",function(){return P.ib(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"ln","hW",function(){return P.jF(P.j,P.aN)})
u($,"le","je",function(){return Z.ae(0)})
u($,"l8","jc",function(){return Z.ae(511)})
u($,"lg","aE",function(){return Z.ae(1)})
u($,"lf","bp",function(){return Z.ae(2)})
u($,"la","bo",function(){return Z.ae(4)})
u($,"lh","bq",function(){return Z.ae(8)})
u($,"li","br",function(){return Z.ae(16)})
u($,"lb","c6",function(){return Z.ae(32)})
u($,"lc","c7",function(){return Z.ae(64)})
u($,"ld","jd",function(){return Z.ae(96)})
u($,"lj","bs",function(){return Z.ae(128)})
u($,"l9","bn",function(){return Z.ae(256)})
u($,"kR","j0",function(){return new V.dH(1e-9)})
u($,"kQ","G",function(){return $.j0()})})()
var v={mangledGlobalNames:{u:"int",r:"double",a1:"num",j:"String",D:"bool",w:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.P]},{func:1,ret:-1,args:[P.u,[P.o,E.U]]},{func:1,ret:P.w,args:[D.x]},{func:1,ret:P.w,args:[F.O]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aj]},{func:1,ret:-1,args:[W.e]},{func:1,ret:P.w,args:[,]},{func:1,ret:-1,args:[P.u,[P.o,U.Y]]},{func:1,ret:P.r},{func:1,ret:P.w,args:[,,]},{func:1,ret:P.j,args:[P.u]},{func:1,ret:P.D,args:[W.t]},{func:1,args:[,]},{func:1,ret:P.D,args:[W.a4]},{func:1,ret:P.D,args:[P.j]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.D,args:[W.C,P.j,P.j,W.aU]},{func:1,ret:P.w,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.w,args:[P.a1]},{func:1,ret:W.C,args:[W.t]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:[P.af,,],args:[,]},{func:1,ret:P.w,args:[,],opt:[P.a0]},{func:1,args:[,P.j]},{func:1,ret:V.aa,args:[P.r]},{func:1,ret:P.w,args:[F.ad,P.r,P.r]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[P.as]},{func:1,ret:P.w,args:[W.e]},{func:1,ret:P.D,args:[V.aH]},{func:1,args:[P.j]},{func:1,args:[W.e]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.M,DOMError:J.M,MediaError:J.M,Navigator:J.M,NavigatorConcurrentHardware:J.M,NavigatorUserMediaError:J.M,OverconstrainedError:J.M,PositionError:J.M,WebGLActiveInfo:J.M,WebGLRenderbuffer:J.M,WebGL2RenderingContext:J.M,WebGLTexture:J.M,SQLError:J.M,ArrayBufferView:H.cC,Float32Array:H.cA,Int16Array:H.eh,Int32Array:H.ei,Uint32Array:H.ej,Uint8Array:H.ek,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.ca,HTMLAreaElement:W.dp,HTMLBaseElement:W.bu,HTMLBodyElement:W.aF,HTMLCanvasElement:W.b_,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSStyleDeclaration:W.bA,MSStyleCSSProperties:W.bA,CSS2Properties:W.bA,HTMLDivElement:W.a8,XMLDocument:W.bB,Document:W.bB,DOMException:W.dB,DOMImplementation:W.cj,DOMRectReadOnly:W.ck,Element:W.C,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,EventTarget:W.b0,HTMLFormElement:W.dQ,HTMLHeadElement:W.co,HTMLCollection:W.b2,HTMLFormControlsCollection:W.b2,HTMLOptionsCollection:W.b2,HTMLDocument:W.cp,KeyboardEvent:W.ar,Location:W.cx,PointerEvent:W.P,MouseEvent:W.P,DragEvent:W.P,DocumentFragment:W.t,ShadowRoot:W.t,DocumentType:W.t,Node:W.t,NodeList:W.bJ,RadioNodeList:W.bJ,Range:W.cI,HTMLSelectElement:W.ez,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.cQ,HTMLTableRowElement:W.cR,HTMLTableSectionElement:W.eO,HTMLTemplateElement:W.bQ,Touch:W.at,TouchEvent:W.aj,TouchList:W.eV,CompositionEvent:W.aS,FocusEvent:W.aS,TextEvent:W.aS,UIEvent:W.aS,WheelEvent:W.aw,Window:W.bX,DOMWindow:W.bX,Attr:W.bY,ClientRect:W.d3,DOMRect:W.d3,NamedNodeMap:W.d9,MozNamedAttrMap:W.d9,SVGScriptElement:P.bL,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,WebGLBuffer:P.cc,WebGLFramebuffer:P.cn,WebGLProgram:P.cH,WebGLRenderingContext:P.bb,WebGLShader:P.cN,WebGLUniformLocation:P.cW})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.iW,[])
else R.iW([])})})()
//# sourceMappingURL=test.dart.js.map
