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
a[c]=function(){a[c]=function(){H.le(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ic"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ic"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ic(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hW:function hW(a){this.a=a},
ep:function(){return new P.bv("No element")},
k2:function(){return new P.bv("Too many elements")},
k1:function(){return new P.bv("Too few elements")},
o:function o(a){this.a=a},
e5:function e5(){},
bn:function bn(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eD:function eD(a,b,c){this.a=a
this.b=b
this.$ti=c},
eE:function eE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eF:function eF(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(){},
dr:function dr(){},
dq:function dq(){},
bG:function(a){var u,t
u=H.F(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kW:function(a){return v.types[H.a0(a)]},
l2:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$ias},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.e(H.bc(a))
return u},
kj:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eq(u)
t=u[0]
s=u[1]
return new H.eZ(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c_:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bs:function(a){return H.ka(a)+H.i9(H.bd(a),0,null)},
ka:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ib9){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bG(r.length>1&&C.j.au(r,0)===36?C.j.aS(r,1):r)},
iN:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ki:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.e(H.bc(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.i.aX(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.e(H.bc(r))}return H.iN(u)},
iO:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bc(s))
if(s<0)throw H.e(H.bc(s))
if(s>65535)return H.ki(a)}return H.iN(a)},
hZ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.i.aX(u,10))>>>0,56320|u&1023)}throw H.e(P.al(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kh:function(a){var u=H.br(a).getFullYear()+0
return u},
kf:function(a){var u=H.br(a).getMonth()+1
return u},
kb:function(a){var u=H.br(a).getDate()+0
return u},
kc:function(a){var u=H.br(a).getHours()+0
return u},
ke:function(a){var u=H.br(a).getMinutes()+0
return u},
kg:function(a){var u=H.br(a).getSeconds()+0
return u},
kd:function(a){var u=H.br(a).getMilliseconds()+0
return u},
be:function(a){throw H.e(H.bc(a))},
f:function(a,b){if(a==null)J.bf(a)
throw H.e(H.bC(a,b))},
bC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,"index",null)
u=H.a0(J.bf(a))
if(!(b<0)){if(typeof u!=="number")return H.be(u)
t=b>=u}else t=!0
if(t)return P.bm(b,a,"index",null,u)
return P.d6(b,"index",null)},
kQ:function(a,b,c){if(a>c)return new P.bt(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bt(a,c,!0,b,"end","Invalid value")
return new P.ax(!0,b,"end",null)},
bc:function(a){return new P.ax(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.d0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jq})
u.name=""}else u.toString=H.jq
return u},
jq:function(){return J.aw(this.dartException)},
p:function(a){throw H.e(a)},
y:function(a){throw H.e(P.b1(a))},
aG:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iI:function(a,b){return new H.eU(a,b==null?null:b.method)},
hX:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eu(a,t,u?null:b.receiver)},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.i.aX(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hX(H.d(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iI(H.d(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jt()
p=$.ju()
o=$.jv()
n=$.jw()
m=$.jz()
l=$.jA()
k=$.jy()
$.jx()
j=$.jC()
i=$.jB()
h=q.a2(t)
if(h!=null)return u.$1(H.hX(H.F(t),h))
else{h=p.a2(t)
if(h!=null){h.method="call"
return u.$1(H.hX(H.F(t),h))}else{h=o.a2(t)
if(h==null){h=n.a2(t)
if(h==null){h=m.a2(t)
if(h==null){h=l.a2(t)
if(h==null){h=k.a2(t)
if(h==null){h=n.a2(t)
if(h==null){h=j.a2(t)
if(h==null){h=i.a2(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iI(H.F(t),h))}}return u.$1(new H.fE(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dd()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ax(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dd()
return a},
bE:function(a){var u
if(a==null)return new H.dG(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dG(a)},
kS:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.S(0,a[t],a[s])}return b},
l1:function(a,b,c,d,e,f){H.k(a,"$ib5")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.q("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l1)
a.$identity=u
return u},
jU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ia){u.$reflectionInfo=d
s=H.kj(u).r}else s=d
r=e?Object.create(new H.fe().constructor.prototype):Object.create(new H.bK(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.ay
if(typeof p!=="number")return p.q()
$.ay=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.ix(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kW,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iv:H.hR
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.e("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.ix(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jR:function(a,b,c,d){var u=H.hR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ix:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jT(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jR(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.q()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
if(q==null){q=H.dW("self")
$.bL=q}return new Function(r+H.d(q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.q()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
if(q==null){q=H.dW("self")
$.bL=q}return new Function(r+H.d(q)+"."+H.d(u)+"("+o+");}")()},
jS:function(a,b,c,d){var u,t
u=H.hR
t=H.iv
switch(b?-1:a){case 0:throw H.e(H.kn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jT:function(a,b){var u,t,s,r,q,p,o,n
u=$.bL
if(u==null){u=H.dW("self")
$.bL=u}t=$.iu
if(t==null){t=H.dW("receiver")
$.iu=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jS(r,!p,s,b)
if(r===1){u="return function(){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.ay
if(typeof t!=="number")return t.q()
$.ay=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.ay
if(typeof t!=="number")return t.q()
$.ay=t+1
return new Function(u+t+"}")()},
ic:function(a,b,c,d,e,f,g){return H.jU(a,b,H.a0(c),d,!!e,!!f,g)},
hR:function(a){return a.a},
iv:function(a){return a.c},
dW:function(a){var u,t,s,r,q
u=new H.bK("self","target","receiver","name")
t=J.eq(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
lV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
l7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
ia:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
jo:function(a,b){throw H.e(H.au(a,H.bG(H.F(b).substring(2))))},
l9:function(a,b){throw H.e(H.jQ(a,H.bG(H.F(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.jo(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.l9(a,b)},
hH:function(a){if(a==null)return a
if(!!J.Q(a).$ia)return a
throw H.e(H.au(a,"List<dynamic>"))},
l3:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ia)return a
if(u[b])return a
H.jo(a,b)},
ji:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
dP:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ji(J.Q(a))
if(u==null)return!1
return H.j9(u,null,b,null)},
i:function(a,b){var u,t
if(a==null)return a
if($.i6)return a
$.i6=!0
try{if(H.dP(a,b))return a
u=H.hK(b)
t=H.au(a,u)
throw H.e(t)}finally{$.i6=!1}},
id:function(a,b){if(a!=null&&!H.ib(a,b))H.p(H.au(a,H.hK(b)))
return a},
au:function(a,b){return new H.ft("TypeError: "+P.e9(a)+": type '"+H.jd(a)+"' is not a subtype of type '"+b+"'")},
jQ:function(a,b){return new H.dX("CastError: "+P.e9(a)+": type '"+H.jd(a)+"' is not a subtype of type '"+b+"'")},
jd:function(a){var u,t
u=J.Q(a)
if(!!u.$ibM){t=H.ji(u)
if(t!=null)return H.hK(t)
return"Closure"}return H.bs(a)},
le:function(a){throw H.e(new P.e0(H.F(a)))},
kn:function(a){return new H.f3(a)},
jj:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bd:function(a){if(a==null)return
return a.$ti},
lW:function(a,b,c){return H.bF(a["$a"+H.d(c)],H.bd(b))},
dR:function(a,b,c,d){var u
H.F(c)
H.a0(d)
u=H.bF(a["$a"+H.d(c)],H.bd(b))
return u==null?null:u[d]},
a_:function(a,b,c){var u
H.F(b)
H.a0(c)
u=H.bF(a["$a"+H.d(b)],H.bd(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a0(b)
u=H.bd(a)
return u==null?null:u[b]},
hK:function(a){return H.bb(a,null)},
bb:function(a,b){var u,t
H.h(b,"$ia",[P.l],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bG(a[0].name)+H.i9(a,1,b)
if(typeof a=="function")return H.bG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.kE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bb("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.l]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.j.q(o,b[m])
l=t[p]
if(l!=null&&l!==P.E)o+=" extends "+H.bb(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bb(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bb(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bb(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kR(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.F(u[g])
i=i+h+H.bb(d[c],b)+(" "+H.d(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
i9:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.l],"$aa")
if(a==null)return""
u=new P.aS("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bb(p,c)}return"<"+u.i(0)+">"},
bF:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dO:function(a,b,c,d){var u,t
H.F(b)
H.hH(c)
H.F(d)
if(a==null)return!1
u=H.bd(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.jg(H.bF(t[d],u),null,c,null)},
h:function(a,b,c,d){H.F(b)
H.hH(c)
H.F(d)
if(a==null)return a
if(H.dO(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bG(b.substring(2))+H.i9(c,0,null),v.mangledGlobalNames)))},
jg:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ap(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ap(a[t],b,c[t],d))return!1
return!0},
lT:function(a,b,c){return a.apply(b,H.bF(J.Q(b)["$a"+H.d(c)],H.bd(b)))},
jl:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="E"||a.name==="C"||a===-1||a===-2||H.jl(u)}return!1},
ib:function(a,b){var u,t
if(a==null)return b==null||b.name==="E"||b.name==="C"||b===-1||b===-2||H.jl(b)
if(b==null||b===-1||b.name==="E"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ib(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dP(a,b)}u=J.Q(a).constructor
t=H.bd(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ap(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.ib(a,b))throw H.e(H.au(a,H.hK(b)))
return a},
ap:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="E"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="E"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.j9(a,b,c,d)
if('func' in a)return c.name==="b5"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,s,d)
else if(H.ap(a,b,s,d))return!0
else{if(!('$i'+"bS" in t.prototype))return!1
r=t.prototype["$a"+"bS"]
q=H.bF(r,u?a.slice(1):null)
return H.ap(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jg(H.bF(m,u),b,p,d)},
j9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ap(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ap(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ap(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.l6(h,b,g,d)},
l6:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ap(c[r],d,a[r],b))return!1}return!0},
lU:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
l4:function(a){var u,t,s,r,q,p
u=H.F($.jk.$1(a))
t=$.hB[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hG[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.F($.jf.$2(a,u))
if(u!=null){t=$.hB[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hG[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hJ(s)
$.hB[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hG[u]=s
return s}if(q==="-"){p=H.hJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jn(a,s)
if(q==="*")throw H.e(P.iX(u))
if(v.leafTags[u]===true){p=H.hJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jn(a,s)},
jn:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ii(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hJ:function(a){return J.ii(a,!1,null,!!a.$ias)},
l5:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hJ(u)
else return J.ii(u,c,null,null)},
l_:function(){if(!0===$.ih)return
$.ih=!0
H.l0()},
l0:function(){var u,t,s,r,q,p,o,n
$.hB=Object.create(null)
$.hG=Object.create(null)
H.kZ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jp.$1(q)
if(p!=null){o=H.l5(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kZ:function(){var u,t,s,r,q,p,o
u=C.Q()
u=H.bA(C.N,H.bA(C.S,H.bA(C.z,H.bA(C.z,H.bA(C.R,H.bA(C.O,H.bA(C.P(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jk=new H.hD(q)
$.jf=new H.hE(p)
$.jp=new H.hF(o)},
bA:function(a,b){return a(b)||b},
k4:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(new P.ei("Illegal RegExp pattern ("+String(r)+")",a,null))},
lc:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ik:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eZ:function eZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fr:function fr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eU:function eU(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
hN:function hN(a){this.a=a},
dG:function dG(a){this.a=a
this.b=null},
bM:function bM(){},
fk:function fk(){},
fe:function fe(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a){this.a=a},
dX:function dX(a){this.a=a},
f3:function f3(a){this.a=a},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ex:function ex(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cn:function(a){return a},
dN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bC(b,a))},
kD:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.kQ(a,b,c))
return b},
cZ:function cZ(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
kR:function(a){return J.iC(a?Object.keys(a):[],null)},
l8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ii:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dQ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ih==null){H.l_()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.iX("Return interceptor for "+H.d(t(a,u))))}r=a.constructor
q=r==null?null:r[$.im()]
if(q!=null)return q
q=H.l4(a)
if(q!=null)return q
if(typeof a=="function")return C.T
t=Object.getPrototypeOf(a)
if(t==null)return C.C
if(t===Object.prototype)return C.C
if(typeof r=="function"){Object.defineProperty(r,$.im(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
k3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.hQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.al(a,0,4294967295,"length",null))
return J.iC(new Array(a),b)},
iC:function(a,b){return J.eq(H.b(a,[b]))},
eq:function(a){H.hH(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cK.prototype
return J.es.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.cL.prototype
if(typeof a=="boolean")return J.er.prototype
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dQ(a)},
kT:function(a){if(typeof a=="number")return J.b6.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dQ(a)},
hC:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dQ(a)},
ie:function(a){if(a==null)return a
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dQ(a)},
kU:function(a){if(typeof a=="number")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.b9.prototype
return a},
kV:function(a){if(typeof a=="number")return J.b6.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.b9.prototype
return a},
ig:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.b9.prototype
return a},
ag:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dQ(a)},
jI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kT(a).q(a,b)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).t(a,b)},
iq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kV(a).K(a,b)},
jJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.kU(a).w(a,b)},
jK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hC(a).l(a,b)},
jL:function(a,b,c,d){return J.ag(a).eL(a,b,c,d)},
dS:function(a,b){return J.ag(a).h4(a,b)},
ir:function(a,b){return J.ag(a).u(a,b)},
hO:function(a,b){return J.ie(a).Y(a,b)},
jM:function(a){return J.ag(a).gi_(a)},
ct:function(a){return J.Q(a).gH(a)},
bI:function(a){return J.ie(a).gM(a)},
bf:function(a){return J.hC(a).gn(a)},
jN:function(a){return J.ag(a).gj9(a)},
hP:function(a,b){return J.ag(a).aD(a,b)},
is:function(a){return J.ie(a).iZ(a)},
jO:function(a,b,c){return J.ig(a).aT(a,b,c)},
jP:function(a){return J.ig(a).jd(a)},
aw:function(a){return J.Q(a).i(a)},
V:function V(){},
er:function er(){},
cL:function cL(){},
cM:function cM(){},
eW:function eW(){},
b9:function b9(){},
aO:function aO(){},
ar:function ar(a){this.$ti=a},
hV:function hV(a){this.$ti=a},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b6:function b6(){},
cK:function cK(){},
es:function es(){},
aN:function aN(){}},P={
kt:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kL()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bB(new P.fX(u),1)).observe(t,{childList:true})
return new P.fW(u,t,s)}else if(self.setImmediate!=null)return P.kM()
return P.kN()},
ku:function(a){self.scheduleImmediate(H.bB(new P.fY(H.i(a,{func:1,ret:-1})),0))},
kv:function(a){self.setImmediate(H.bB(new P.fZ(H.i(a,{func:1,ret:-1})),0))},
kw:function(a){P.i1(C.p,H.i(a,{func:1,ret:-1}))},
i1:function(a,b){var u
H.i(b,{func:1,ret:-1})
u=C.i.V(a.a,1000)
return P.kB(u<0?0:u,b)},
iV:function(a,b){var u
H.i(b,{func:1,ret:-1,args:[P.aE]})
u=C.i.V(a.a,1000)
return P.kC(u<0?0:u,b)},
kB:function(a,b){var u=new P.dH(!0)
u.eG(a,b)
return u},
kC:function(a,b){var u=new P.dH(!1)
u.eH(a,b)
return u},
kx:function(a,b){var u,t,s
b.a=1
try{a.dM(new P.h6(b),new P.h7(b),null)}catch(s){u=H.ah(s)
t=H.bE(s)
P.la(new P.h8(b,u,t))}},
j4:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iao")
if(u>=4){t=b.bD()
b.a=a.a
b.c=a.c
P.ci(b,t)}else{t=H.k(b.c,"$iaJ")
b.a=2
b.c=a
a.cJ(t)}},
ci:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$ia1")
t=t.b
p=q.a
o=q.b
t.toString
P.hw(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ci(u.a,b)}t=u.a
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
if(k){H.k(m,"$ia1")
t=t.b
p=m.a
o=m.b
t.toString
P.hw(null,null,t,p,o)
return}j=$.N
if(j!=l)$.N=l
else j=null
t=b.c
if(t===8)new P.hc(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hb(s,b,m).$0()}else if((t&2)!==0)new P.ha(u,s,b).$0()
if(j!=null)$.N=j
t=s.b
if(!!J.Q(t).$ibS){if(t.a>=4){i=H.k(o.c,"$iaJ")
o.c=null
b=o.aW(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.j4(t,o)
return}}h=b.b
i=H.k(h.c,"$iaJ")
h.c=null
b=h.aW(i)
t=s.a
p=s.b
if(!t){H.z(p,H.u(h,0))
h.a=4
h.c=p}else{H.k(p,"$ia1")
h.a=8
h.c=p}u.a=h
t=h}},
kH:function(a,b){if(H.dP(a,{func:1,args:[P.E,P.a9]}))return H.i(a,{func:1,ret:null,args:[P.E,P.a9]})
if(H.dP(a,{func:1,args:[P.E]}))return H.i(a,{func:1,ret:null,args:[P.E]})
throw H.e(P.hQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kG:function(){var u,t
for(;u=$.bz,u!=null;){$.cp=null
t=u.b
$.bz=t
if(t==null)$.co=null
u.a.$0()}},
kK:function(){$.i7=!0
try{P.kG()}finally{$.cp=null
$.i7=!1
if($.bz!=null)$.io().$1(P.jh())}},
jc:function(a){var u=new P.du(H.i(a,{func:1,ret:-1}))
if($.bz==null){$.co=u
$.bz=u
if(!$.i7)$.io().$1(P.jh())}else{$.co.b=u
$.co=u}},
kJ:function(a){var u,t,s
H.i(a,{func:1,ret:-1})
u=$.bz
if(u==null){P.jc(a)
$.cp=$.co
return}t=new P.du(a)
s=$.cp
if(s==null){t.b=u
$.cp=t
$.bz=t}else{t.b=s.b
s.b=t
$.cp=t
if(t.b==null)$.co=t}},
la:function(a){var u,t
u={func:1,ret:-1}
H.i(a,u)
t=$.N
if(C.l===t){P.hy(null,null,C.l,a)
return}t.toString
P.hy(null,null,t,H.i(t.bK(a),u))},
iU:function(a,b){var u,t
u={func:1,ret:-1}
H.i(b,u)
t=$.N
if(t===C.l){t.toString
return P.i1(a,b)}return P.i1(a,H.i(t.bK(b),u))},
kr:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aE]}
H.i(b,u)
t=$.N
if(t===C.l){t.toString
return P.iV(a,b)}s=t.cU(b,P.aE)
$.N.toString
return P.iV(a,H.i(s,u))},
hw:function(a,b,c,d,e){var u={}
u.a=d
P.kJ(new P.hx(u,e))},
ja:function(a,b,c,d,e){var u,t
H.i(d,{func:1,ret:e})
t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
jb:function(a,b,c,d,e,f,g){var u,t
H.i(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
kI:function(a,b,c,d,e,f,g,h,i){var u,t
H.i(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
hy:function(a,b,c,d){var u
H.i(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.bK(d):c.i0(d,-1)
P.jc(d)},
fX:function fX(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
dH:function dH(a){this.a=a
this.b=null
this.c=0},
hs:function hs(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
h5:function h5(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a
this.b=null},
ff:function ff(){},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
c3:function c3(){},
fg:function fg(){},
aE:function aE(){},
a1:function a1(a,b){this.a=a
this.b=b},
hv:function hv(){},
hx:function hx(a,b){this.a=a
this.b=b},
hg:function hg(){},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function(a,b,c){H.hH(a)
return H.h(H.kS(a,new H.aB([b,c])),"$iiD",[b,c],"$aiD")},
k5:function(a,b){return new H.aB([a,b])},
cQ:function(a,b,c,d){return new P.hf([d])},
i5:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kA:function(a,b,c){var u=new P.dA(a,b,[c])
u.c=a.e
return u},
k0:function(a,b,c){var u,t
if(P.i8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.l])
t=$.cs()
C.a.h(t,a)
try{P.kF(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.iS(b,H.l3(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
hU:function(a,b,c){var u,t,s
if(P.i8(a))return b+"..."+c
u=new P.aS(b)
t=$.cs()
C.a.h(t,a)
try{s=u
s.a=P.iS(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
i8:function(a){var u,t
for(u=0;t=$.cs(),u<t.length;++u)if(a===t[u])return!0
return!1},
kF:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.l],"$aa")
u=a.gM(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.d(u.gE())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gE();++s
if(!u.v()){if(s<=4){C.a.h(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE();++s
for(;u.v();o=n,n=m){m=u.gE();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
iE:function(a,b){var u,t,s
u=P.cQ(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)u.h(0,H.z(a[s],b))
return u},
iF:function(a){var u,t
u={}
if(P.i8(a))return"{...}"
t=new P.aS("")
try{C.a.h($.cs(),a)
t.a+="{"
u.a=!0
a.W(0,new P.eC(u,t))
t.a+="}"}finally{u=$.cs()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hf:function hf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
by:function by(a){this.a=a
this.c=this.b=null},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ez:function ez(){},
L:function L(){},
eB:function eB(){},
eC:function eC(a,b){this.a=a
this.b=b},
bo:function bo(){},
hl:function hl(){},
dB:function dB(){},
bN:function bN(){},
bO:function bO(){},
e7:function e7(){},
en:function en(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
em:function em(a){this.a=a},
fG:function fG(a){this.a=a},
fH:function fH(){},
ht:function ht(a){this.b=this.a=0
this.c=a},
jZ:function(a){if(a instanceof H.bM)return a.i(0)
return"Instance of '"+H.bs(a)+"'"},
k7:function(a,b,c,d){var u,t
H.z(b,d)
u=J.k3(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.S(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
k8:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gM(a);s.v();)C.a.h(t,H.z(s.gE(),c))
if(b)return t
return H.h(J.eq(t),"$ia",u,"$aa")},
i0:function(a,b,c){var u,t
u=P.x
H.h(a,"$in",[u],"$an")
if(a.constructor===Array){H.h(a,"$iar",[u],"$aar")
t=a.length
c=P.i_(b,c,t,null,null,null)
return H.iO(b>0||c<t?C.a.ec(a,b,c):a)}return P.kp(a,b,c)},
kp:function(a,b,c){var u,t,s
H.h(a,"$in",[P.x],"$an")
u=J.bI(a)
for(t=0;t<b;++t)if(!u.v())throw H.e(P.al(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gE())
return H.iO(s)},
kk:function(a,b,c){return new H.et(a,H.k4(a,!1,!0,!1))},
iS:function(a,b,c){var u=J.bI(b)
if(!u.v())return a
if(c.length===0){do a+=H.d(u.gE())
while(u.v())}else{a+=H.d(u.gE())
for(;u.v();)a=a+c+H.d(u.gE())}return a},
j8:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.x],"$aa")
if(c===C.w){u=$.jH().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.i9(H.z(b,H.a_(c,"bN",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.hZ(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jV:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cC:function(a){if(a>=10)return""+a
return"0"+a},
iz:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jZ(a)},
hQ:function(a,b,c){return new P.ax(!0,a,b,c)},
d6:function(a,b,c){return new P.bt(null,null,!0,a,b,"Value not in range")},
al:function(a,b,c,d,e){return new P.bt(b,c,!0,a,d,"Invalid value")},
i_:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.al(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.al(b,a,c,"end",f))
return b}return c},
bm:function(a,b,c,d,e){var u=H.a0(e==null?J.bf(b):e)
return new P.eo(b,u,!0,a,c,"Index out of range")},
af:function(a){return new P.fF(a)},
iX:function(a){return new P.fD(a)},
iR:function(a){return new P.bv(a)},
b1:function(a){return new P.dZ(a)},
q:function(a){return new P.dx(a)},
ij:function(a){H.l8(a)},
G:function G(){},
b2:function b2(a,b){this.a=a
this.b=b},
v:function v(){},
az:function az(a){this.a=a},
e3:function e3(){},
e4:function e4(){},
b4:function b4(){},
d0:function d0(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eo:function eo(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a){this.a=a},
fD:function fD(a){this.a=a},
bv:function bv(a){this.a=a},
dZ:function dZ(a){this.a=a},
eV:function eV(){},
dd:function dd(){},
e0:function e0(a){this.a=a},
dx:function dx(a){this.a=a},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(){},
x:function x(){},
n:function n(){},
aA:function aA(){},
a:function a(){},
C:function C(){},
aa:function aa(){},
E:function E(){},
a9:function a9(){},
l:function l(){},
aS:function aS(a){this.a=a},
kO:function(a,b){var u={}
a.W(0,new P.hz(u))
return u},
hz:function hz(a){this.a=a},
ee:function ee(a,b){this.a=a
this.b=b},
ef:function ef(){},
eg:function eg(){},
c0:function c0(){},
m:function m(){},
cw:function cw(){},
cH:function cH(){},
d4:function d4(){},
bu:function bu(){},
da:function da(){},
dp:function dp(){}},W={
it:function(a){var u=document.createElement("a")
return u},
iw:function(a,b){var u=document.createElement("canvas")
return u},
jX:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a1(u,a,b,c)
t.toString
u=W.w
u=new H.cf(new W.a6(t),H.i(new W.e6(),{func:1,ret:P.G,args:[u]}),[u])
return H.k(u.gar(u),"$iJ")},
jY:function(a){H.k(a,"$ibj")
return"wheel"},
bR:function(a){var u,t,s
u="element tag unavailable"
try{t=J.jN(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ah(s)}return u},
he:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j6:function(a,b,c,d){var u,t
u=W.he(W.he(W.he(W.he(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d,e){var u,t
u=W.je(new W.h4(c),W.j)
t=u!=null
if(t&&!0){H.i(u,{func:1,args:[W.j]})
if(t)J.jL(a,b,u,!1)}return new W.h3(a,b,u,!1,[e])},
j5:function(a){var u,t
u=W.it(null)
t=window.location
u=new W.ba(new W.hk(u,t))
u.eq(a)
return u},
ky:function(a,b,c,d){H.k(a,"$iJ")
H.F(b)
H.F(c)
H.k(d,"$iba")
return!0},
kz:function(a,b,c,d){var u,t,s
H.k(a,"$iJ")
H.F(b)
H.F(c)
u=H.k(d,"$iba").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
j7:function(){var u,t,s,r,q
u=P.l
t=P.iE(C.r,u)
s=H.u(C.r,0)
r=H.i(new W.hq(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hp(t,P.cQ(null,null,null,u),P.cQ(null,null,null,u),P.cQ(null,null,null,u),null)
t.eD(null,new H.eF(C.r,r,[s,u]),q,null)
return t},
je:function(a,b){var u
H.i(a,{func:1,ret:-1,args:[b]})
u=$.N
if(u===C.l)return a
return u.cU(a,b)},
r:function r(){},
cu:function cu(){},
dT:function dT(){},
bJ:function bJ(){},
aZ:function aZ(){},
bg:function bg(){},
b_:function b_(){},
bP:function bP(){},
e_:function e_(){},
aj:function aj(){},
bQ:function bQ(){},
e2:function e2(){},
cD:function cD(){},
cE:function cE(){},
h0:function h0(a,b){this.a=a
this.b=b},
J:function J(){},
e6:function e6(){},
j:function j(){},
bj:function bj(){},
eh:function eh(){},
cI:function cI(){},
bl:function bl(){},
cJ:function cJ(){},
aC:function aC(){},
cR:function cR(){},
X:function X(){},
a6:function a6(a){this.a=a},
w:function w(){},
bY:function bY(){},
d5:function d5(){},
f4:function f4(){},
bw:function bw(){},
de:function de(){},
df:function df(){},
fj:function fj(){},
c4:function c4(){},
aF:function aF(){},
at:function at(){},
fq:function fq(){},
b8:function b8(){},
aI:function aI(){},
cg:function cg(){},
ch:function ch(){},
dw:function dw(){},
dC:function dC(){},
h_:function h_(){},
h1:function h1(a){this.a=a},
h2:function h2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h3:function h3(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
h4:function h4(a){this.a=a},
ba:function ba(a){this.a=a},
ab:function ab(){},
d_:function d_(a){this.a=a},
eS:function eS(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(){},
hm:function hm(){},
hn:function hn(){},
hp:function hp(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hq:function hq(){},
ho:function ho(){},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ad:function ad(){},
hk:function hk(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
hu:function hu(a){this.a=a},
dv:function dv(){},
dy:function dy(){},
dz:function dz(){},
dD:function dD(){},
dE:function dE(){},
dI:function dI(){},
dJ:function dJ(){},
dL:function dL(){},
dM:function dM(){}},O={
hS:function(a){var u=new O.T([a])
u.cg(a)
return u},
T:function T(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
cT:function cT(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eH:function eH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cU:function cU(){},
eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aD:function aD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eK:function eK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eL:function eL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bx:function bx(){}},E={
km:function(a,b){var u=new E.f_(a,b)
u.el(a,b)
return u},
kq:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibg)return E.iT(a,!0,!0,!0,!1)
t=W.iw(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcW(a).h(0,t)
r=E.iT(t,!0,!0,!0,!1)
r.a=a
return r},
iT:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dl()
t=P.k6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
s=C.x.c9(a,"webgl",t)
s=H.k(s==null?C.x.c9(a,"experimental-webgl",t):s,"$ibu")
if(s==null)H.p(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.km(s,a)
r=new T.fl(s)
r.b=H.a0((s&&C.b).ca(s,3379))
r.c=H.a0(C.b.ca(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.ds(a)
q=new X.ev()
q.c=new X.aQ(!1,!1,!1)
q.sh1(P.cQ(null,null,null,P.x))
r.b=q
q=new X.eM(r)
q.f=0
q.r=V.d3()
q.x=V.d3()
q.Q=1
q.ch=1
r.c=q
q=new X.eA(r)
q.r=0
q.x=V.d3()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fp(r)
q.e=0
q.f=V.d3()
q.r=V.d3()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sf0(H.b([],[[P.c3,P.E]]))
q=r.z
p=document
o=W.X
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.Z(p,"contextmenu",H.i(r.gfp(),n),!1,o))
q=r.z
m=W.j
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.Z(a,"focus",H.i(r.gfw(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.Z(a,"blur",H.i(r.gfj(),l),!1,m))
q=r.z
k=W.aC
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.Z(p,"keyup",H.i(r.gfC(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.Z(p,"keydown",H.i(r.gfA(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.Z(a,"mousedown",H.i(r.gfG(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Z(a,"mouseup",H.i(r.gfK(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Z(a,"mousemove",H.i(r.gfI(),n),!1,o))
k=r.z
j=W.aI;(k&&C.a).h(k,W.Z(a,H.F(W.jY(a)),H.i(r.gfM(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.Z(p,"mousemove",H.i(r.gfs(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.Z(p,"mouseup",H.i(r.gfu(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.Z(p,"pointerlockchange",H.i(r.gfO(),l),!1,m))
m=r.z
l=W.at
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.Z(a,"touchstart",H.i(r.gfZ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Z(a,"touchend",H.i(r.gfV(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Z(a,"touchmove",H.i(r.gfX(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.b2(Date.now(),!1)
u.cy=0
u.cL()
return u},
dV:function dV(){},
a7:function a7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f_:function f_(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
dl:function dl(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(a){this.a=a}},Z={
ks:function(a,b,c){var u
H.h(c,"$ia",[P.x],"$aa")
u=a.createBuffer()
C.b.ad(a,b,u)
C.b.cV(a,b,new Int16Array(H.cn(c)),35044)
C.b.ad(a,b,null)
return new Z.dt(b,u)},
an:function(a){return new Z.aH(a)},
dt:function dt(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fU:function fU(a){this.a=a},
cy:function cy(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a){this.a=a}},D={
aq:function(){var u=new D.bi()
u.saa(null)
u.saG(null)
u.c=null
u.d=0
return u},
dY:function dY(){},
bi:function bi(){var _=this
_.d=_.c=_.b=_.a=null},
ea:function ea(a){this.a=a},
eb:function eb(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
bU:function bU(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bV:function bV(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
O:function O(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b3:function b3(){var _=this
_.d=_.c=_.b=_.a=null},
U:function U(){},
cO:function cO(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
d2:function d2(){},
dc:function dc(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){}},X={cz:function cz(a,b){this.a=a
this.b=b},cN:function cN(a,b){this.a=a
this.b=b},ev:function ev(){var _=this
_.d=_.c=_.b=_.a=null},eA:function eA(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},eM:function eM(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fp:function fp(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ds:function ds(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k_:function(a,b,c,d,e,f,g){var u,t
u=new X.ej()
t=new V.aL(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.iP
if(t==null){t=V.kl(0,0,1,1)
$.iP=t}u.r=t
return u},
cA:function cA(){},
ej:function ej(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){},
jm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=V.ko("Test 003",!0)
t=W.iw(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.u(u.a,t)
s=[P.l]
u.cR(H.b(["A test of the Material Light Shader with a solid color directional lighting."],s))
u.cR(H.b(["\xab[Back to Tests|../]"],s))
r=new E.a7()
r.a=""
r.b=!0
s=E.a7
r.seS(0,O.hS(s))
r.y.bm(r.giJ(),r.giM())
r.z=null
r.Q=null
r.ch=null
r.cx=null
r.cy=null
r.db=null
r.dx=null
r.dy=null
r.fr=null
r.fx=null
r.scd(0,null)
r.saL(null)
r.scd(0,F.lf(30,1,15,0.5))
q=new U.d9()
q.a=0
q.b=0
q.c=0
q.d=0
q.e=0
q.f=0
q.r=0
q.sdU(0)
q.sdE(0)
q.sdJ(0)
p=q.d
if(!(Math.abs(p-0.1)<$.I().a)){q.d=0.1
p=new D.O("deltaYaw",p,0.1,q,[P.v])
p.b=!0
q.aw(p)}p=q.e
if(!(Math.abs(p-0.21)<$.I().a)){q.e=0.21
p=new D.O("deltaPitch",p,0.21,q,[P.v])
p.b=!0
q.aw(p)}p=q.f
if(!(Math.abs(p-0.32)<$.I().a)){q.f=0.32
p=new D.O("deltaRoll",p,0.32,q,[P.v])
p.b=!0
q.aw(p)}r.saL(q)
o=new O.cT()
o.seP(O.hS(V.a2))
o.e.bm(o.gff(),o.gfh())
q=new O.aD(o,"emission")
q.c=C.c
q.f=new V.R(0,0,0)
o.f=q
q=new O.aD(o,"ambient")
q.c=C.c
q.f=new V.R(0,0,0)
o.r=q
q=new O.aD(o,"diffuse")
q.c=C.c
q.f=new V.R(0,0,0)
o.x=q
q=new O.aD(o,"invDiffuse")
q.c=C.c
q.f=new V.R(0,0,0)
o.y=q
q=new O.eL(o,"specular")
q.c=C.c
q.f=new V.R(0,0,0)
q.ch=100
o.z=q
q=new O.eI(o,"bump")
q.c=C.c
o.Q=q
o.ch=null
q=new O.aD(o,"reflect")
q.c=C.c
q.f=new V.R(0,0,0)
o.cx=q
q=new O.eK(o,"refract")
q.c=C.c
q.f=new V.R(0,0,0)
q.ch=1
o.cy=q
q=new O.eH(o,"alpha")
q.c=C.c
q.f=1
o.db=q
q=new D.cO()
q.cg(D.U)
q.seY(H.b([],[D.b3]))
q.sh0(H.b([],[D.d2]))
q.shp(H.b([],[D.dc]))
q.shu(H.b([],[D.di]))
q.shv(H.b([],[D.dj]))
q.shw(H.b([],[D.dk]))
q.Q=null
q.ch=null
q.cc(q.gfd(),q.gfR(),q.gfT())
o.dx=q
p=q.Q
if(p==null){p=D.aq()
q.Q=p
q=p}else q=p
q.h(0,o.ghb())
q=o.dx
p=q.ch
if(p==null){p=D.aq()
q.ch=p
q=p}else q=p
q.h(0,o.geE())
o.dy=null
q=o.dx
n=V.j2()
p=U.iy(V.iG(V.iM(),n,new V.K(1,1,-3)))
m=new V.R(1,1,1)
l=new D.b3()
l.c=new V.R(1,1,1)
l.a=V.j3()
k=l.b
l.b=p
p.gB().h(0,l.ges())
p=new D.O("mover",k,l.b,l,[U.bp])
p.b=!0
l.ag(p)
if(!l.c.t(0,m)){k=l.c
l.c=m
p=new D.O("color",k,m,l,[V.R])
p.b=!0
l.ag(p)}q.h(0,l)
q=o.r
q.sae(0,new V.R(0,0,1))
q=o.x
q.sae(0,new V.R(0,1,0))
q=o.z
q.sae(0,new V.R(1,0,0))
q=o.z
if(q.c===C.c){q.c=C.h
q.bp()
q.bE(100)
p=q.a
p.a=null
p.a_(null)}q.bE(10)
j=new M.cF()
j.sev(0,O.hS(s))
j.d.bm(j.gfl(),j.gfn())
j.e=null
j.f=null
j.r=null
j.x=null
i=X.k_(!0,!0,!1,null,2000,null,0)
h=new X.d1()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saL(null)
s=h.c
if(!(Math.abs(s-1.0471975511965976)<$.I().a)){h.c=1.0471975511965976
s=new D.O("fov",s,1.0471975511965976,h,[P.v])
s.b=!0
h.at(s)}s=h.d
if(!(Math.abs(s-0.1)<$.I().a)){h.d=0.1
s=new D.O("near",s,0.1,h,[P.v])
s.b=!0
h.at(s)}s=h.e
if(!(Math.abs(s-2000)<$.I().a)){h.e=2000
s=new D.O("far",s,2000,h,[P.v])
s.b=!0
h.at(s)}s=j.a
if(s!==h){if(s!=null)s.gB().N(0,j.ga9())
k=j.a
j.a=h
h.gB().h(0,j.ga9())
s=new D.O("camera",k,j.a,j,[X.cA])
s.b=!0
j.ah(s)}s=j.b
if(s!==i){if(s!=null)s.gB().N(0,j.ga9())
k=j.b
j.b=i
i.gB().h(0,j.ga9())
s=new D.O("target",k,j.b,j,[X.dg])
s.b=!0
j.ah(s)}j.sdL(null)
j.sdL(o)
j.d.h(0,r)
j.a.saL(U.iy(V.aP(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=C.y.e_(document,"testCanvas")
if(g==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
f=E.kq(g,!0,!0,!0,!1)
s=f.d
if(s!==j){if(s!=null)s.gB().N(0,f.gci())
f.d=j
j.gB().h(0,f.gci())
f.cj()}s=f.z
if(s==null){s=D.aq()
f.z=s}q={func:1,ret:-1,args:[D.A]}
p=H.i(new X.hI(u,o),q)
if(s.b==null)s.saG(H.b([],[q]))
s=s.b;(s&&C.a).h(s,p)
V.lb(f)},
hI:function hI(a,b){this.a=a
this.b=b}},V={
il:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.e4(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.j.ao("null",c)
return C.j.ao(C.d.dN(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
bD:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.v],"$aa")
u=H.b([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.H(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.S(u,p,C.j.ao(u[p],s))}return u},
hY:function(){var u=$.iH
if(u==null){u=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iH=u}return u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iG:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.C(0,Math.sqrt(c.J(c)))
t=b.al(u)
s=t.C(0,Math.sqrt(t.J(t)))
r=u.al(s)
q=new V.K(a.a,a.b,a.c)
p=s.aE(0).J(q)
o=r.aE(0).J(q)
n=u.aE(0).J(q)
return V.aP(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
d3:function(){var u=$.iL
if(u==null){u=new V.a3(0,0)
$.iL=u}return u},
iM:function(){var u=$.bZ
if(u==null){u=new V.Y(0,0,0)
$.bZ=u}return u},
kl:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d8(a,b,c,d)},
ce:function(){var u=$.j1
if(u==null){u=new V.K(0,0,0)
$.j1=u}return u},
j2:function(){var u=$.j0
if(u==null){u=new V.K(0,1,0)
$.j0=u}return u},
j3:function(){var u=$.fI
if(u==null){u=new V.K(0,0,1)
$.fI=u}return u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a){this.a=a},
cV:function cV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a2:function a2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.au(a,0)
t=C.j.au(b,0)
s=new V.eY()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.f5()
u.em(a)
return u},
fo:function(){var u,t
u=new V.fn()
t=P.l
u.shq(new H.aB([t,V.c2]))
u.shs(new H.aB([t,V.c5]))
u.c=null
return u},
aK:function aK(){},
ac:function ac(){},
cS:function cS(){},
a8:function a8(){this.a=null},
eY:function eY(){this.b=this.a=null},
f5:function f5(){this.a=null},
c2:function c2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a,b){this.a=a
this.b=b
this.c=null},
fn:function fn(){this.c=this.b=this.a=null},
c6:function c6(a){this.b=a
this.a=this.c=null},
lb:function(a){P.kr(C.J,new V.hL(a))},
ko:function(a,b){var u=new V.f9()
u.eo(a,!0)
return u},
b0:function b0(){},
hL:function hL(a){this.a=a},
e1:function e1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ek:function ek(a){var _=this
_.a=a
_.d=_.c=_.b=null},
el:function el(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eX:function eX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f9:function f9(){this.b=this.a=null},
fb:function fb(a){this.a=a},
fa:function fa(a){this.a=a},
fc:function fc(a){this.a=a}},U={
iy:function(a){var u=new U.cB()
u.a=a
return u},
cB:function cB(){this.b=this.a=null},
bp:function bp(){},
d9:function d9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cF:function cF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
k9:function(a,b){var u,t
u=a.a5
t=new A.eG(b,u)
t.en(b,u)
t.ek(a,b)
return t},
i2:function(a,b,c,d,e){var u=new A.fv(a,b,c,e)
u.f=d
u.shx(P.k7(d,0,!1,P.x))
return u},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a},
eG:function eG(a,b){var _=this
_.b2=_.d2=_.b1=_.a5=_.af=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dj=_.bS=_.di=_.bf=_.dh=_.dg=_.be=_.bd=_.df=_.de=_.bc=_.bb=_.ba=_.dd=_.dc=_.b9=_.da=_.d9=_.b8=_.d8=_.d7=_.b7=_.b6=_.d6=_.d5=_.b5=_.b4=_.d4=_.d3=_.b3=null
_.bX=_.dn=_.bW=_.dm=_.bV=_.dl=_.bU=_.dk=_.bT=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eJ:function eJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.af=b3
_.a5=b4
_.b1=b5},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
c9:function c9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cc:function cc(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
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
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c1:function c1(){},
bh:function bh(a,b){this.a=a
this.b=b},
dn:function dn(){},
fB:function fB(a){this.a=a},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lf:function(a,b,c,d){return F.kP(c,a,d,b,new F.hM())},
kP:function(a,b,c,d,e){var u=F.ld(a,b,new F.hA(H.i(e,{func:1,ret:V.Y,args:[P.v]}),d,b,c),null)
if(u==null)return
u.aA()
u.iI(new F.fO(),new F.eT())
return u},
ld:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,{func:1,ret:-1,args:[F.am,P.v,P.v]})
if(a<1)return
if(b<1)return
u=new F.db()
t=new F.fJ(u)
t.b=!1
s=[F.am]
t.shy(H.b([],s))
u.a=t
t=new F.f8(u)
t.sbB(H.b([],[F.bq]))
u.b=t
t=new F.f7(u)
t.sf8(H.b([],[F.b7]))
u.c=t
t=new F.f6(u)
t.sf1(H.b([],[F.W]))
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.i3(null,null,new V.aL(s,0,0,1),null,null,new V.a3(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.cZ(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.i3(null,null,new V.aL(j,i,h,1),null,null,new V.a3(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.cZ(d))}}u.d.hV(a+1,b+1,r)
return u},
ec:function(a,b,c){var u,t
u=new F.W()
t=a.a
if(t==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
u.hh(a)
u.hi(b)
u.hj(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
i3:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.am()
t=new F.fR(u)
t.sbB(H.b([],[F.bq]))
u.b=t
t=new F.fN(u)
s=[F.b7]
t.sf9(H.b([],s))
t.sfa(H.b([],s))
u.c=t
t=new F.fK(u)
s=[F.W]
t.sf2(H.b([],s))
t.sf3(H.b([],s))
t.sf4(H.b([],s))
u.d=t
h=$.jD()
u.e=0
t=$.aW()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aV().a)!==0?e:null
u.x=(s&$.aU().a)!==0?b:null
u.y=(s&$.aX().a)!==0?f:null
u.z=(s&$.aY().a)!==0?g:null
u.Q=(s&$.jE().a)!==0?c:null
u.ch=(s&$.bH().a)!==0?i:0
u.cx=(s&$.aT().a)!==0?a:null
return u},
hM:function hM(){},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){},
fd:function fd(){},
b7:function b7(){},
ew:function ew(){},
fu:function fu(){},
bq:function bq(){},
db:function db(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f6:function f6(a){this.a=a
this.b=null},
f7:function f7(a){this.a=a
this.b=null},
f8:function f8(a){this.a=a
this.b=null},
am:function am(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(a){this.a=a},
fS:function fS(a){this.a=a},
fJ:function fJ(a){this.a=a
this.c=this.b=null},
fK:function fK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(a){this.a=a
this.c=this.b=null},
fP:function fP(){},
fO:function fO(){},
fQ:function fQ(){},
eT:function eT(){},
fR:function fR(a){this.a=a
this.b=null}},T={dh:function dh(){},fl:function fl(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hW.prototype={}
J.V.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.c_(a)},
i:function(a){return"Instance of '"+H.bs(a)+"'"}}
J.er.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iG:1}
J.cL.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iC:1}
J.cM.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.eW.prototype={}
J.b9.prototype={}
J.aO.prototype={
i:function(a){var u=a[$.js()]
if(u==null)return this.ef(a)
return"JavaScript function for "+H.d(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib5:1}
J.ar.prototype={
h:function(a,b){H.z(b,H.u(a,0))
if(!!a.fixed$length)H.p(P.af("add"))
a.push(b)},
j_:function(a,b){var u
if(!!a.fixed$length)H.p(P.af("removeAt"))
u=a.length
if(b>=u)throw H.e(P.d6(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.p(P.af("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
W:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.b1(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.S(u,t,H.d(a[t]))
return u.join(b)},
iD:function(a){return this.k(a,"")},
ix:function(a,b,c){var u,t,s
H.i(b,{func:1,ret:P.G,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.e(P.b1(a))}throw H.e(H.ep())},
iw:function(a,b){return this.ix(a,b,null)},
Y:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ec:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.al(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.al(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
giv:function(a){if(a.length>0)return a[0]
throw H.e(H.ep())},
gbg:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.ep())},
e9:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.p(P.af("setRange"))
P.i_(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.hC(d)
if(e+t>u.gn(d))throw H.e(H.k1())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.l(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.l(d,e+s)},
aR:function(a,b,c,d){return this.e9(a,b,c,d,0)},
cS:function(a,b){var u,t
H.i(b,{func:1,ret:P.G,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.e(P.b1(a))}return!1},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.hU(a,"[","]")},
gM:function(a){return new J.ai(a,a.length,0,[H.u(a,0)])},
gH:function(a){return H.c_(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.p(P.af("set length"))
if(b<0)throw H.e(P.al(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.e(H.bC(a,b))
return a[b]},
S:function(a,b,c){H.z(c,H.u(a,0))
if(!!a.immutable$list)H.p(P.af("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bC(a,b))
a[b]=c},
q:function(a,b){var u,t
u=[H.u(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.i.q(a.length,b.gn(b))
u=H.b([],u)
this.sn(u,t)
this.aR(u,0,a.length,a)
this.aR(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.hV.prototype={}
J.ai.prototype={
gE:function(){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.y(u))
s=this.c
if(s>=t){this.scA(null)
return!1}this.scA(u[s]);++this.c
return!0},
scA:function(a){this.d=H.z(a,H.u(this,0))},
$iaA:1}
J.b6.prototype={
dq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.af(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.af(""+a+".round()"))},
dN:function(a,b){var u,t
if(b>20)throw H.e(P.al(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
q:function(a,b){return a+b},
w:function(a,b){if(typeof b!=="number")throw H.e(H.bc(b))
return a-b},
K:function(a,b){if(typeof b!=="number")throw H.e(H.bc(b))
return a*b},
e4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ej:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.af("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.ho(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ho:function(a,b){return b>31?0:a>>>b},
$iv:1,
$iaa:1}
J.cK.prototype={$ix:1}
J.es.prototype={}
J.aN.prototype={
bP:function(a,b){if(b<0)throw H.e(H.bC(a,b))
if(b>=a.length)H.p(H.bC(a,b))
return a.charCodeAt(b)},
au:function(a,b){if(b>=a.length)throw H.e(H.bC(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.e(P.hQ(b,null,null))
return a+b},
eb:function(a,b,c){var u
if(c>a.length)throw H.e(P.al(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bn:function(a,b){return this.eb(a,b,0)},
aT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.d6(b,null,null))
if(b>c)throw H.e(P.d6(b,null,null))
if(c>a.length)throw H.e(P.d6(c,null,null))
return a.substring(b,c)},
aS:function(a,b){return this.aT(a,b,null)},
jd:function(a){return a.toLowerCase()},
K:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
iQ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.K(c,u)+a},
ao:function(a,b){return this.iQ(a,b," ")},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$iiJ:1,
$il:1}
H.o.prototype={
gn:function(a){return this.a.length},
l:function(a,b){return C.j.bP(this.a,b)},
$adr:function(){return[P.x]},
$aL:function(){return[P.x]},
$an:function(){return[P.x]},
$aa:function(){return[P.x]}}
H.e5.prototype={}
H.bn.prototype={
gM:function(a){return new H.bW(this,this.gn(this),0,[H.a_(this,"bn",0)])},
bj:function(a,b){return this.ee(0,H.i(b,{func:1,ret:P.G,args:[H.a_(this,"bn",0)]}))}}
H.bW.prototype={
gE:function(){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.hC(u)
s=t.gn(u)
if(this.b!==s)throw H.e(P.b1(u))
r=this.c
if(r>=s){this.saF(null)
return!1}this.saF(t.Y(u,r));++this.c
return!0},
saF:function(a){this.d=H.z(a,H.u(this,0))},
$iaA:1}
H.eD.prototype={
gM:function(a){return new H.eE(J.bI(this.a),this.b,this.$ti)},
gn:function(a){return J.bf(this.a)},
Y:function(a,b){return this.b.$1(J.hO(this.a,b))},
$an:function(a,b){return[b]}}
H.eE.prototype={
v:function(){var u=this.b
if(u.v()){this.saF(this.c.$1(u.gE()))
return!0}this.saF(null)
return!1},
gE:function(){return this.a},
saF:function(a){this.a=H.z(a,H.u(this,1))},
$aaA:function(a,b){return[b]}}
H.eF.prototype={
gn:function(a){return J.bf(this.a)},
Y:function(a,b){return this.b.$1(J.hO(this.a,b))},
$abn:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cf.prototype={
gM:function(a){return new H.fV(J.bI(this.a),this.b,this.$ti)}}
H.fV.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gE()))return!0
return!1},
gE:function(){return this.a.gE()}}
H.bk.prototype={}
H.dr.prototype={}
H.dq.prototype={}
H.eZ.prototype={}
H.fr.prototype={
a2:function(a){var u,t,s
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
H.eU.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eu.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.d(this.a)+")"}}
H.fE.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hN.prototype={
$1:function(a){if(!!J.Q(a).$ib4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dG.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia9:1}
H.bM.prototype={
i:function(a){return"Closure '"+H.bs(this).trim()+"'"},
$ib5:1,
gjh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fk.prototype={}
H.fe.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bG(u)+"'"}}
H.bK.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var u,t
u=this.c
if(u==null)t=H.c_(this.a)
else t=typeof u!=="object"?J.ct(u):H.c_(u)
return(t^H.c_(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bs(u)+"'")}}
H.ft.prototype={
i:function(a){return this.a}}
H.dX.prototype={
i:function(a){return this.a}}
H.f3.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.aB.prototype={
gn:function(a){return this.a},
gam:function(){return new H.cP(this,[H.u(this,0)])},
cY:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cv(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cv(t,a)}else return this.iB(a)},
iB:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.bu(u,J.ct(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aV(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aV(r,b)
s=t==null?null:t.b
return s}else return this.iC(b)},
iC:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bu(u,J.ct(a)&0x3ffffff)
s=this.bZ(t,a)
if(s<0)return
return t[s].b},
S:function(a,b,c){var u,t,s,r,q,p
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bz()
this.b=u}this.cm(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bz()
this.c=t}this.cm(t,b,c)}else{s=this.d
if(s==null){s=this.bz()
this.d=s}r=J.ct(b)&0x3ffffff
q=this.bu(s,r)
if(q==null)this.bF(s,r,[this.bq(b,c)])
else{p=this.bZ(q,b)
if(p>=0)q[p].b=c
else q.push(this.bq(b,c))}}},
W:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.b1(this))
u=u.c}},
cm:function(a,b,c){var u
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
u=this.aV(a,b)
if(u==null)this.bF(a,b,this.bq(b,c))
else u.b=c},
eJ:function(){this.r=this.r+1&67108863},
bq:function(a,b){var u,t
u=new H.ex(H.z(a,H.u(this,0)),H.z(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.eJ()
return u},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.iF(this)},
aV:function(a,b){return a[b]},
bu:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
eX:function(a,b){delete a[b]},
cv:function(a,b){return this.aV(a,b)!=null},
bz:function(){var u=Object.create(null)
this.bF(u,"<non-identifier-key>",u)
this.eX(u,"<non-identifier-key>")
return u},
$iiD:1}
H.ex.prototype={}
H.cP.prototype={
gn:function(a){return this.a.a},
gM:function(a){var u,t
u=this.a
t=new H.ey(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ey.prototype={
gE:function(){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.b1(u))
else{u=this.c
if(u==null){this.scn(null)
return!1}else{this.scn(u.a)
this.c=this.c.c
return!0}}},
scn:function(a){this.d=H.z(a,H.u(this,0))},
$iaA:1}
H.hD.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.hE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.hF.prototype={
$1:function(a){return this.a(H.F(a))},
$S:34}
H.et.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiJ:1}
H.cZ.prototype={}
H.cW.prototype={
gn:function(a){return a.length},
$ias:1,
$aas:function(){}}
H.cX.prototype={
l:function(a,b){H.dN(b,a,a.length)
return a[b]},
$abk:function(){return[P.v]},
$aL:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]},
$ia:1,
$aa:function(){return[P.v]}}
H.cY.prototype={
$abk:function(){return[P.x]},
$aL:function(){return[P.x]},
$in:1,
$an:function(){return[P.x]},
$ia:1,
$aa:function(){return[P.x]}}
H.eN.prototype={
l:function(a,b){H.dN(b,a,a.length)
return a[b]}}
H.eO.prototype={
l:function(a,b){H.dN(b,a,a.length)
return a[b]}}
H.eP.prototype={
l:function(a,b){H.dN(b,a,a.length)
return a[b]}}
H.eQ.prototype={
gn:function(a){return a.length},
l:function(a,b){H.dN(b,a,a.length)
return a[b]}}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
P.fX.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:19}
P.fW.prototype={
$1:function(a){var u,t
this.a.a=H.i(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.fY.prototype={
$0:function(){this.a.$0()},
$S:1}
P.fZ.prototype={
$0:function(){this.a.$0()},
$S:1}
P.dH.prototype={
eG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.hs(this,b),0),a)
else throw H.e(P.af("`setTimeout()` not found."))},
eH:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.hr(this,a,Date.now(),b),0),a)
else throw H.e(P.af("Periodic timer."))},
$iaE:1}
P.hs.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.hr.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.i.ej(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.aJ.prototype={
iG:function(a){if(this.c!==6)return!0
return this.b.b.c6(H.i(this.d,{func:1,ret:P.G,args:[P.E]}),a.a,P.G,P.E)},
iA:function(a){var u,t,s,r
u=this.e
t=P.E
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.dP(u,{func:1,args:[P.E,P.a9]}))return H.id(r.j6(u,a.a,a.b,null,t,P.a9),s)
else return H.id(r.c6(H.i(u,{func:1,args:[P.E]}),a.a,null,t),s)}}
P.ao.prototype={
dM:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.N
if(t!==C.l){t.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kH(b,t)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ao(0,$.N,[c])
r=b==null?1:3
this.cp(new P.aJ(s,r,a,b,[u,c]))
return s},
ja:function(a,b){return this.dM(a,null,b)},
cp:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iaJ")
this.c=a}else{if(u===2){t=H.k(this.c,"$iao")
u=t.a
if(u<4){t.cp(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hy(null,null,u,H.i(new P.h5(this,a),{func:1,ret:-1}))}},
cJ:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iaJ")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iao")
t=p.a
if(t<4){p.cJ(a)
return}this.a=t
this.c=p.c}u.a=this.aW(a)
t=this.b
t.toString
P.hy(null,null,t,H.i(new P.h9(u,this),{func:1,ret:-1}))}},
bD:function(){var u=H.k(this.c,"$iaJ")
this.c=null
return this.aW(u)},
aW:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cr:function(a){var u,t,s
u=H.u(this,0)
H.id(a,{futureOr:1,type:u})
t=this.$ti
if(H.dO(a,"$ibS",t,"$abS"))if(H.dO(a,"$iao",t,null))P.j4(a,this)
else P.kx(a,this)
else{s=this.bD()
H.z(a,u)
this.a=4
this.c=a
P.ci(this,s)}},
cs:function(a,b){var u
H.k(b,"$ia9")
u=this.bD()
this.a=8
this.c=new P.a1(a,b)
P.ci(this,u)},
$ibS:1}
P.h5.prototype={
$0:function(){P.ci(this.a,this.b)},
$S:1}
P.h9.prototype={
$0:function(){P.ci(this.b,this.a.a)},
$S:1}
P.h6.prototype={
$1:function(a){var u=this.a
u.a=0
u.cr(a)},
$S:19}
P.h7.prototype={
$2:function(a,b){H.k(b,"$ia9")
this.a.cs(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.h8.prototype={
$0:function(){this.a.cs(this.b,this.c)},
$S:1}
P.hc.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dK(H.i(r.d,{func:1}),null)}catch(q){t=H.ah(q)
s=H.bE(q)
if(this.d){r=H.k(this.a.a.c,"$ia1").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$ia1")
else p.b=new P.a1(t,s)
p.a=!0
return}if(!!J.Q(u).$ibS){if(u instanceof P.ao&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$ia1")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ja(new P.hd(o),null)
r.a=!1}},
$S:2}
P.hd.prototype={
$1:function(a){return this.a},
$S:29}
P.hb.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.z(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.c6(H.i(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ah(o)
t=H.bE(o)
s=this.a
s.b=new P.a1(u,t)
s.a=!0}},
$S:2}
P.ha.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$ia1")
r=this.c
if(r.iG(u)&&r.e!=null){q=this.b
q.b=r.iA(u)
q.a=!1}}catch(p){t=H.ah(p)
s=H.bE(p)
r=H.k(this.a.a.c,"$ia1")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a1(t,s)
n.a=!0}},
$S:2}
P.du.prototype={}
P.ff.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.ao(0,$.N,[P.x])
u.a=0
s=H.u(this,0)
r=H.i(new P.fh(u,this),{func:1,ret:-1,args:[s]})
H.i(new P.fi(u,t),{func:1,ret:-1})
W.Z(this.a,this.b,r,!1,s)
return t}}
P.fh.prototype={
$1:function(a){H.z(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.u(this.b,0)]}}}
P.fi.prototype={
$0:function(){this.b.cr(this.a.a)},
$S:1}
P.c3.prototype={}
P.fg.prototype={}
P.aE.prototype={}
P.a1.prototype={
i:function(a){return H.d(this.a)},
$ib4:1}
P.hv.prototype={$ilN:1}
P.hx.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d0()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.i(0)
throw s},
$S:1}
P.hg.prototype={
j7:function(a){var u,t,s
H.i(a,{func:1,ret:-1})
try{if(C.l===$.N){a.$0()
return}P.ja(null,null,this,a,-1)}catch(s){u=H.ah(s)
t=H.bE(s)
P.hw(null,null,this,u,H.k(t,"$ia9"))}},
j8:function(a,b,c){var u,t,s
H.i(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.N){a.$1(b)
return}P.jb(null,null,this,a,b,-1,c)}catch(s){u=H.ah(s)
t=H.bE(s)
P.hw(null,null,this,u,H.k(t,"$ia9"))}},
i0:function(a,b){return new P.hi(this,H.i(a,{func:1,ret:b}),b)},
bK:function(a){return new P.hh(this,H.i(a,{func:1,ret:-1}))},
cU:function(a,b){return new P.hj(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
dK:function(a,b){H.i(a,{func:1,ret:b})
if($.N===C.l)return a.$0()
return P.ja(null,null,this,a,b)},
c6:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.N===C.l)return a.$1(b)
return P.jb(null,null,this,a,b,c,d)},
j6:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.N===C.l)return a.$2(b,c)
return P.kI(null,null,this,a,b,c,d,e,f)}}
P.hi.prototype={
$0:function(){return this.a.dK(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hh.prototype={
$0:function(){return this.a.j7(this.b)},
$S:2}
P.hj.prototype={
$1:function(a){var u=this.c
return this.a.j8(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hf.prototype={
gM:function(a){var u=new P.dA(this,this.r,this.$ti)
u.c=this.e
return u},
gn:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$iby")!=null}else{t=this.eT(b)
return t}},
eT:function(a){var u=this.d
if(u==null)return!1
return this.bt(this.cB(u,a),a)>=0},
h:function(a,b){var u,t
H.z(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.i5()
this.b=u}return this.co(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.i5()
this.c=t}return this.co(t,b)}else return this.eK(b)},
eK:function(a){var u,t,s
H.z(a,H.u(this,0))
u=this.d
if(u==null){u=P.i5()
this.d=u}t=this.ct(a)
s=u[t]
if(s==null)u[t]=[this.bA(a)]
else{if(this.bt(s,a)>=0)return!1
s.push(this.bA(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h5(this.c,b)
else return this.h2(b)},
h2:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.cB(u,a)
s=this.bt(t,a)
if(s<0)return!1
this.cO(t.splice(s,1)[0])
return!0},
co:function(a,b){H.z(b,H.u(this,0))
if(H.k(a[b],"$iby")!=null)return!1
a[b]=this.bA(b)
return!0},
h5:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$iby")
if(u==null)return!1
this.cO(u)
delete a[b]
return!0},
cD:function(){this.r=1073741823&this.r+1},
bA:function(a){var u,t
u=new P.by(H.z(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cD()
return u},
cO:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cD()},
ct:function(a){return J.ct(a)&1073741823},
cB:function(a,b){return a[this.ct(b)]},
bt:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.by.prototype={}
P.dA.prototype={
gE:function(){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.b1(u))
else{u=this.c
if(u==null){this.scq(null)
return!1}else{this.scq(H.z(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
scq:function(a){this.d=H.z(a,H.u(this,0))},
$iaA:1}
P.ez.prototype={$in:1,$ia:1}
P.L.prototype={
gM:function(a){return new H.bW(a,this.gn(a),0,[H.dR(this,a,"L",0)])},
Y:function(a,b){return this.l(a,b)},
jc:function(a,b){var u,t
u=H.b([],[H.dR(this,a,"L",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.S(u,t,this.l(a,t))
return u},
jb:function(a){return this.jc(a,!0)},
q:function(a,b){var u,t
u=[H.dR(this,a,"L",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sn(t,C.i.q(this.gn(a),b.gn(b)))
C.a.aR(t,0,this.gn(a),a)
C.a.aR(t,this.gn(a),t.length,b)
return t},
i:function(a){return P.hU(a,"[","]")}}
P.eB.prototype={}
P.eC.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.d(a)
u.a=t+": "
u.a+=H.d(b)},
$S:13}
P.bo.prototype={
W:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.a_(this,"bo",0),H.a_(this,"bo",1)]})
for(u=J.bI(this.gam());u.v();){t=u.gE()
b.$2(t,this.l(0,t))}},
gn:function(a){return J.bf(this.gam())},
i:function(a){return P.iF(this)},
$iak:1}
P.hl.prototype={
ab:function(a,b){var u
for(u=J.bI(H.h(b,"$in",this.$ti,"$an"));u.v();)this.h(0,u.gE())},
i:function(a){return P.hU(this,"{","}")},
Y:function(a,b){var u,t,s
if(b<0)H.p(P.al(b,0,null,"index",null))
for(u=P.kA(this,this.r,H.u(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.e(P.bm(b,this,"index",null,t))},
$in:1,
$iiQ:1}
P.dB.prototype={}
P.bN.prototype={}
P.bO.prototype={}
P.e7.prototype={
$abN:function(){return[P.l,[P.a,P.x]]}}
P.en.prototype={
i:function(a){return this.a}}
P.em.prototype={
eU:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.aS("")
if(r>b)q.a+=C.j.aT(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jO(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abO:function(){return[P.l,P.l]}}
P.fG.prototype={}
P.fH.prototype={
ia:function(a,b,c){var u,t,s
c=P.i_(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ht(t)
if(s.f5(a,b,c)!==c)s.cP(C.j.bP(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kD(0,s.b,t.length)))},
i9:function(a){return this.ia(a,0,null)},
$abO:function(){return[P.l,[P.a,P.x]]}}
P.ht.prototype={
cP:function(a,b){var u,t,s,r,q
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
f5:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.bP(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.au(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cP(r,C.j.au(a,p)))s=p}else if(r<=2047){q=this.b
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
P.G.prototype={}
P.b2.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.i.aX(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jV(H.kh(this))
t=P.cC(H.kf(this))
s=P.cC(H.kb(this))
r=P.cC(H.kc(this))
q=P.cC(H.ke(this))
p=P.cC(H.kg(this))
o=P.jW(H.kd(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.v.prototype={}
P.az.prototype={
q:function(a,b){return new P.az(C.i.q(this.a,b.geZ()))},
w:function(a,b){return new P.az(C.i.w(this.a,b.geZ()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a},
gH:function(a){return C.i.gH(this.a)},
i:function(a){var u,t,s,r,q
u=new P.e4()
t=this.a
if(t<0)return"-"+new P.az(0-t).i(0)
s=u.$1(C.i.V(t,6e7)%60)
r=u.$1(C.i.V(t,1e6)%60)
q=new P.e3().$1(t%1e6)
return""+C.i.V(t,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.e3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.e4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.b4.prototype={}
P.d0.prototype={
i:function(a){return"Throw of null."}}
P.ax.prototype={
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbs()+t+s
if(!this.a)return r
q=this.gbr()
p=P.e9(this.b)
return r+q+": "+p}}
P.bt.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.d(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(u)
else if(s>u)t=": Not in range "+H.d(u)+".."+H.d(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.d(u)}return t}}
P.eo.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var u,t
u=H.a0(this.b)
if(typeof u!=="number")return u.jj()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gn:function(a){return this.f}}
P.fF.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bv.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e9(u)+"."}}
P.eV.prototype={
i:function(a){return"Out of Memory"},
$ib4:1}
P.dd.prototype={
i:function(a){return"Stack Overflow"},
$ib4:1}
P.e0.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dx.prototype={
i:function(a){return"Exception: "+this.a}}
P.ei.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.aT(s,0,75)+"...":s
return t+"\n"+r}}
P.b5.prototype={}
P.x.prototype={}
P.n.prototype={
bj:function(a,b){var u=H.a_(this,"n",0)
return new H.cf(this,H.i(b,{func:1,ret:P.G,args:[u]}),[u])},
gn:function(a){var u,t
u=this.gM(this)
for(t=0;u.v();)++t
return t},
gar:function(a){var u,t
u=this.gM(this)
if(!u.v())throw H.e(H.ep())
t=u.gE()
if(u.v())throw H.e(H.k2())
return t},
Y:function(a,b){var u,t,s
if(b<0)H.p(P.al(b,0,null,"index",null))
for(u=this.gM(this),t=0;u.v();){s=u.gE()
if(b===t)return s;++t}throw H.e(P.bm(b,this,"index",null,t))},
i:function(a){return P.k0(this,"(",")")}}
P.aA.prototype={}
P.a.prototype={$in:1}
P.C.prototype={
gH:function(a){return P.E.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
t:function(a,b){return this===b},
gH:function(a){return H.c_(this)},
i:function(a){return"Instance of '"+H.bs(this)+"'"},
toString:function(){return this.i(this)}}
P.a9.prototype={}
P.l.prototype={$iiJ:1}
P.aS.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.cu.prototype={
i:function(a){return String(a)},
$icu:1}
W.dT.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.aZ.prototype={$iaZ:1}
W.bg.prototype={
c9:function(a,b,c){var u=this.f6(a,b,P.kO(c,null))
return u},
f6:function(a,b,c){return a.getContext(b,c)},
$ibg:1}
W.b_.prototype={
gn:function(a){return a.length}}
W.bP.prototype={
gn:function(a){return a.length}}
W.e_.prototype={}
W.aj.prototype={$iaj:1}
W.bQ.prototype={
hW:function(a,b){return a.adoptNode(b)},
e_:function(a,b){return a.getElementById(b)}}
W.e2.prototype={
i:function(a){return String(a)}}
W.cD.prototype={
ie:function(a,b){return a.createHTMLDocument(b)}}
W.cE.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.dO(b,"$id7",[P.aa],"$ad7"))return!1
u=J.ag(b)
return a.left===u.gdu(b)&&a.top===u.gdP(b)&&a.width===u.gc8(b)&&a.height===u.gbY(b)},
gH:function(a){return W.j6(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gbY:function(a){return a.height},
gdu:function(a){return a.left},
gdP:function(a){return a.top},
gc8:function(a){return a.width},
$id7:1,
$ad7:function(){return[P.aa]}}
W.h0.prototype={
gn:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.k(u[b],"$iJ")},
h:function(a,b){J.ir(this.a,b)
return b},
gM:function(a){var u=this.jb(this)
return new J.ai(u,u.length,0,[H.u(u,0)])},
$aL:function(){return[W.J]},
$an:function(){return[W.J]},
$aa:function(){return[W.J]}}
W.J.prototype={
gi_:function(a){return new W.h1(a)},
gcW:function(a){return new W.h0(a,a.children)},
i:function(a){return a.localName},
a1:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iB
if(u==null){u=H.b([],[W.ad])
t=new W.d_(u)
C.a.h(u,W.j5(null))
C.a.h(u,W.j7())
$.iB=t
d=t}else d=u
u=$.iA
if(u==null){u=new W.dK(d)
$.iA=u
c=u}else{u.a=d
c=u}}if($.aM==null){u=document
t=u.implementation
t=(t&&C.I).ie(t,"")
$.aM=t
$.hT=t.createRange()
t=$.aM
t.toString
t=t.createElement("base")
H.k(t,"$ibJ")
t.href=u.baseURI
u=$.aM.head;(u&&C.K).u(u,t)}u=$.aM
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$iaZ")}u=$.aM
if(!!this.$iaZ)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aM.body;(u&&C.n).u(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.V,a.tagName)){u=$.hT;(u&&C.D).e6(u,s)
u=$.hT
r=(u&&C.D).ib(u,b)}else{s.innerHTML=b
r=$.aM.createDocumentFragment()
for(u=J.ag(r);t=s.firstChild,t!=null;)u.u(r,t)}u=$.aM.body
if(s==null?u!=null:s!==u)J.is(s)
c.cb(r)
C.y.hW(document,r)
return r},
ic:function(a,b,c){return this.a1(a,b,c,null)},
e8:function(a,b,c,d){a.textContent=null
this.u(a,this.a1(a,b,c,d))},
e7:function(a,b){return this.e8(a,b,null,null)},
aD:function(a,b){return a.getAttribute(b)},
h3:function(a,b){return a.removeAttribute(b)},
$iJ:1,
gj9:function(a){return a.tagName}}
W.e6.prototype={
$1:function(a){return!!J.Q(H.k(a,"$iw")).$iJ},
$S:15}
W.j.prototype={$ij:1}
W.bj.prototype={
eL:function(a,b,c,d){return a.addEventListener(b,H.bB(H.i(c,{func:1,args:[W.j]}),1),!1)},
$ibj:1}
W.eh.prototype={
gn:function(a){return a.length}}
W.cI.prototype={}
W.bl.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bm(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.w]},
$aL:function(){return[W.w]},
$in:1,
$an:function(){return[W.w]},
$ia:1,
$aa:function(){return[W.w]},
$ibl:1,
$aab:function(){return[W.w]}}
W.cJ.prototype={}
W.aC.prototype={$iaC:1}
W.cR.prototype={
i:function(a){return String(a)},
$icR:1}
W.X.prototype={$iX:1}
W.a6.prototype={
gar:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.e(P.iR("No elements"))
if(t>1)throw H.e(P.iR("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.w],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ag(t),q=0;q<s;++q)r.u(t,u.firstChild)
return},
gM:function(a){var u=this.a.childNodes
return new W.cG(u,u.length,-1,[H.dR(C.X,u,"ab",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$aL:function(){return[W.w]},
$an:function(){return[W.w]},
$aa:function(){return[W.w]}}
W.w.prototype={
iZ:function(a){var u=a.parentNode
if(u!=null)J.dS(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.ed(a):u},
u:function(a,b){return a.appendChild(b)},
h4:function(a,b){return a.removeChild(b)},
$iw:1}
W.bY.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bm(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.w]},
$aL:function(){return[W.w]},
$in:1,
$an:function(){return[W.w]},
$ia:1,
$aa:function(){return[W.w]},
$aab:function(){return[W.w]}}
W.d5.prototype={
ib:function(a,b){return a.createContextualFragment(b)},
e6:function(a,b){return a.selectNodeContents(b)}}
W.f4.prototype={
gn:function(a){return a.length}}
W.bw.prototype={}
W.de.prototype={
a1:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bo(a,b,c,d)
u=W.jX("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a6(t).ab(0,new W.a6(u))
return t}}
W.df.prototype={
a1:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bo(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.a6(u)
s=u.gar(u)
s.toString
u=new W.a6(s)
r=u.gar(u)
t.toString
r.toString
new W.a6(t).ab(0,new W.a6(r))
return t}}
W.fj.prototype={
a1:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bo(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.a6(u)
s=u.gar(u)
t.toString
s.toString
new W.a6(t).ab(0,new W.a6(s))
return t}}
W.c4.prototype={$ic4:1}
W.aF.prototype={$iaF:1}
W.at.prototype={$iat:1}
W.fq.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bm(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.aF]},
$aL:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]},
$ia:1,
$aa:function(){return[W.aF]},
$aab:function(){return[W.aF]}}
W.b8.prototype={}
W.aI.prototype={
gil:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.af("deltaY is not supported"))},
gik:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.af("deltaX is not supported"))},
$iaI:1}
W.cg.prototype={
ha:function(a,b){return a.requestAnimationFrame(H.bB(H.i(b,{func:1,ret:-1,args:[P.aa]}),1))},
f_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ch.prototype={$ich:1}
W.dw.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.dO(b,"$id7",[P.aa],"$ad7"))return!1
u=J.ag(b)
return a.left===u.gdu(b)&&a.top===u.gdP(b)&&a.width===u.gc8(b)&&a.height===u.gbY(b)},
gH:function(a){return W.j6(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gbY:function(a){return a.height},
gc8:function(a){return a.width}}
W.dC.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bm(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.w]},
$aL:function(){return[W.w]},
$in:1,
$an:function(){return[W.w]},
$ia:1,
$aa:function(){return[W.w]},
$aab:function(){return[W.w]}}
W.h_.prototype={
W:function(a,b){var u,t,s,r,q,p
H.i(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=this.gam(),t=u.length,s=this.a,r=J.ag(s),q=0;q<u.length;u.length===t||(0,H.y)(u),++q){p=u[q]
b.$2(p,r.aD(s,p))}},
gam:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.l])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.k(u[r],"$ich")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abo:function(){return[P.l,P.l]},
$aak:function(){return[P.l,P.l]}}
W.h1.prototype={
l:function(a,b){return J.hP(this.a,H.F(b))},
gn:function(a){return this.gam().length}}
W.h2.prototype={}
W.i4.prototype={}
W.h3.prototype={}
W.h4.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ij"))},
$S:27}
W.ba.prototype={
eq:function(a){var u,t
u=$.ip()
if(u.a===0){for(t=0;t<262;++t)u.S(0,C.U[t],W.kX())
for(t=0;t<12;++t)u.S(0,C.t[t],W.kY())}},
az:function(a){return $.jG().R(0,W.bR(a))},
ac:function(a,b,c){var u,t,s
u=W.bR(a)
t=$.ip()
s=t.l(0,H.d(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.ia(s.$4(a,b,c,this))},
$iad:1}
W.ab.prototype={
gM:function(a){return new W.cG(a,this.gn(a),-1,[H.dR(this,a,"ab",0)])}}
W.d_.prototype={
az:function(a){return C.a.cS(this.a,new W.eS(a))},
ac:function(a,b,c){return C.a.cS(this.a,new W.eR(a,b,c))},
$iad:1}
W.eS.prototype={
$1:function(a){return H.k(a,"$iad").az(this.a)},
$S:22}
W.eR.prototype={
$1:function(a){return H.k(a,"$iad").ac(this.a,this.b,this.c)},
$S:22}
W.dF.prototype={
eD:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bj(0,new W.hm())
t=b.bj(0,new W.hn())
this.b.ab(0,u)
s=this.c
s.ab(0,C.W)
s.ab(0,t)},
az:function(a){return this.a.R(0,W.bR(a))},
ac:function(a,b,c){var u,t
u=W.bR(a)
t=this.c
if(t.R(0,H.d(u)+"::"+b))return this.d.hX(c)
else if(t.R(0,"*::"+b))return this.d.hX(c)
else{t=this.b
if(t.R(0,H.d(u)+"::"+b))return!0
else if(t.R(0,"*::"+b))return!0
else if(t.R(0,H.d(u)+"::*"))return!0
else if(t.R(0,"*::*"))return!0}return!1},
$iad:1}
W.hm.prototype={
$1:function(a){return!C.a.R(C.t,H.F(a))},
$S:17}
W.hn.prototype={
$1:function(a){return C.a.R(C.t,H.F(a))},
$S:17}
W.hp.prototype={
ac:function(a,b,c){if(this.ei(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hP(a,"template")==="")return this.e.R(0,b)
return!1}}
W.hq.prototype={
$1:function(a){return"TEMPLATE::"+H.d(H.F(a))},
$S:25}
W.ho.prototype={
az:function(a){var u=J.Q(a)
if(!!u.$ic0)return!1
u=!!u.$im
if(u&&W.bR(a)==="foreignObject")return!1
if(u)return!0
return!1},
ac:function(a,b,c){if(b==="is"||C.j.bn(b,"on"))return!1
return this.az(a)},
$iad:1}
W.cG.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scC(J.jK(this.a,u))
this.c=u
return!0}this.scC(null)
this.c=t
return!1},
gE:function(){return this.d},
scC:function(a){this.d=H.z(a,H.u(this,0))},
$iaA:1}
W.ad.prototype={}
W.hk.prototype={$ilA:1}
W.dK.prototype={
cb:function(a){new W.hu(this).$2(a,null)},
aI:function(a,b){if(b==null)J.is(a)
else J.dS(b,a)},
he:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.jM(a)
s=J.hP(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ah(o)}q="element unprintable"
try{q=J.aw(a)}catch(o){H.ah(o)}try{p=W.bR(a)
this.hd(H.k(a,"$iJ"),b,u,q,p,H.k(t,"$iak"),H.F(s))}catch(o){if(H.ah(o) instanceof P.ax)throw o
else{this.aI(a,b)
window
n="Removing corrupted element "+H.d(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hd:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aI(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.az(a)){this.aI(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ac(a,"is",g)){this.aI(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gam()
t=H.b(u.slice(0),[H.u(u,0)])
for(s=f.gam().length-1,u=f.a,r=J.ag(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.ac(a,J.jP(q),r.aD(u,q))){window
p="Removing disallowed attribute <"+H.d(e)+" "+q+'="'+H.d(r.aD(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aD(u,q)
r.h3(u,q)}}if(!!J.Q(a).$ic4)this.cb(a.content)},
$ilm:1}
W.hu.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.he(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aI(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ah(r)
q=H.k(u,"$iw")
if(s){p=q.parentNode
if(p!=null)J.dS(p,q)}else J.dS(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iw")}},
$S:24}
W.dv.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dL.prototype={}
W.dM.prototype={}
P.hz.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.ee.prototype={
gbv:function(){var u,t,s
u=this.b
t=H.a_(u,"L",0)
s=W.J
return new H.eD(new H.cf(u,H.i(new P.ef(),{func:1,ret:P.G,args:[t]}),[t]),H.i(new P.eg(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.ir(this.b.a,b)},
gn:function(a){return J.bf(this.gbv().a)},
l:function(a,b){var u=this.gbv()
return u.b.$1(J.hO(u.a,b))},
gM:function(a){var u=P.k8(this.gbv(),!1,W.J)
return new J.ai(u,u.length,0,[H.u(u,0)])},
$aL:function(){return[W.J]},
$an:function(){return[W.J]},
$aa:function(){return[W.J]}}
P.ef.prototype={
$1:function(a){return!!J.Q(H.k(a,"$iw")).$iJ},
$S:15}
P.eg.prototype={
$1:function(a){return H.c(H.k(a,"$iw"),"$iJ")},
$S:23}
P.c0.prototype={$ic0:1}
P.m.prototype={
gcW:function(a){return new P.ee(a,new W.a6(a))},
a1:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ad])
C.a.h(u,W.j5(null))
C.a.h(u,W.j7())
C.a.h(u,new W.ho())
c=new W.dK(new W.d_(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).ic(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a6(r)
p=u.gar(u)
for(u=J.ag(q);s=p.firstChild,s!=null;)u.u(q,s)
return q},
$im:1}
P.cw.prototype={$icw:1}
P.cH.prototype={$icH:1}
P.d4.prototype={$id4:1}
P.bu.prototype={
cT:function(a,b,c){return a.attachShader(b,c)},
ad:function(a,b,c){return a.bindBuffer(b,c)},
i1:function(a,b,c){return a.bindFramebuffer(b,c)},
i2:function(a,b,c){return a.blendFunc(b,c)},
cV:function(a,b,c,d){return a.bufferData(b,c,d)},
i5:function(a,b){return a.clear(b)},
i6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
i7:function(a,b){return a.clearDepth(b)},
i8:function(a,b){return a.compileShader(b)},
ig:function(a,b){return a.createShader(b)},
ii:function(a,b){return a.deleteProgram(b)},
ij:function(a,b){return a.deleteShader(b)},
im:function(a,b){return a.depthFunc(b)},
io:function(a,b){return a.disable(b)},
d_:function(a,b){return a.disableVertexAttribArray(b)},
iq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
d1:function(a,b){return a.enableVertexAttribArray(b)},
dW:function(a,b,c){return a.getActiveAttrib(b,c)},
dX:function(a,b,c){return a.getActiveUniform(b,c)},
dY:function(a,b,c){return a.getAttribLocation(b,c)},
ca:function(a,b){return a.getParameter(b)},
e0:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
e1:function(a,b){return a.getShaderInfoLog(b)},
e2:function(a,b,c){return a.getShaderParameter(b,c)},
e3:function(a,b,c){return a.getUniformLocation(b,c)},
iE:function(a,b){return a.linkProgram(b)},
ea:function(a,b,c){return a.shaderSource(b,c)},
G:function(a,b,c){return a.uniform1f(b,c)},
O:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dT:function(a,b){return a.useProgram(b)},
jf:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jg:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibu:1}
P.da.prototype={$ida:1}
P.dp.prototype={$idp:1}
O.T.prototype={
cg:function(a){this.sfb(H.b([],[a]))
this.scH(null)
this.scE(null)
this.scI(null)},
cc:function(a,b,c){var u=H.a_(this,"T",0)
H.i(b,{func:1,ret:P.G,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.x,[P.n,u]]}
H.i(a,u)
H.i(c,u)
this.scH(b)
this.scE(a)
this.scI(c)},
bm:function(a,b){return this.cc(a,null,b)},
fQ:function(a){var u
H.h(a,"$in",[H.a_(this,"T",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fc:function(a,b){var u
H.h(b,"$in",[H.a_(this,"T",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.ai(u,u.length,0,[H.u(u,0)])},
Y:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a_(this,"T",0)
H.z(b,u)
u=[u]
if(this.fQ(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fc(s,H.b([b],u))}},
sfb:function(a){this.a=H.h(a,"$ia",[H.a_(this,"T",0)],"$aa")},
scH:function(a){this.b=H.i(a,{func:1,ret:P.G,args:[[P.n,H.a_(this,"T",0)]]})},
scE:function(a){this.c=H.i(a,{func:1,ret:-1,args:[P.x,[P.n,H.a_(this,"T",0)]]})},
scI:function(a){this.d=H.i(a,{func:1,ret:-1,args:[P.x,[P.n,H.a_(this,"T",0)]]})},
$in:1}
O.bX.prototype={
gn:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.aq()
this.b=u}return u},
ep:function(a){var u=this.b
if(u!=null)u.U(a)},
as:function(){return this.ep(null)},
gT:function(){var u=this.a
if(u.length>0)return C.a.gbg(u)
else return V.hY()},
dG:function(a){var u=this.a
if(a==null)C.a.h(u,V.hY())
else C.a.h(u,a)
this.as()},
c2:function(){var u=this.a
if(u.length>0){u.pop()
this.as()}},
sbx:function(a){this.a=H.h(a,"$ia",[V.a2],"$aa")}}
E.dV.prototype={}
E.a7.prototype={
scd:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().N(0,this.gdB())
t=this.c
if(t!=null)t.gB().h(0,this.gdB())
s=new D.O("shape",u,this.c,this,[F.db])
s.b=!0
this.a6(s)}},
saL:function(a){var u,t
if(!J.S(this.r,a)){u=this.r
if(u!=null)u.gB().N(0,this.gdz())
if(a!=null)a.gB().h(0,this.gdz())
this.r=a
t=new D.O("mover",u,a,this,[U.bp])
t.b=!0
this.a6(t)}},
bi:function(a){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=a.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdU(u.a+u.d*a.y)
u.sdE(u.b+u.e*a.y)
u.sdJ(u.c+u.f*a.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.aP(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.K(0,V.aP(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.K(0,V.aP(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.aq()}p=u.x}else p=null
if(!J.S(p,this.x)){o=this.x
this.x=p
n=new D.O("matrix",o,p,this,[V.a2])
n.b=!0
this.a6(n)}for(u=this.y.a,u=new J.ai(u,u.length,0,[H.u(u,0)]);u.v();)u.d.bi(a)},
aC:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gT())
else C.a.h(u.a,t.K(0,u.gT()))
u.as()
a.dH(this.f)
u=a.dy
s=(u&&C.a).gbg(u)
if(s!=null&&this.d!=null)s.j2(a,this)
for(u=this.y.a,u=new J.ai(u,u.length,0,[H.u(u,0)]);u.v();)u.d.aC(a)
a.dF()
a.dx.c2()},
a6:function(a){var u=this.z
if(u!=null)u.U(a)},
Z:function(){return this.a6(null)},
dC:function(a){H.k(a,"$iA")
this.e=null
this.a6(a)},
iP:function(){return this.dC(null)},
dA:function(a){this.a6(H.k(a,"$iA"))},
iO:function(){return this.dA(null)},
dw:function(a){this.a6(H.k(a,"$iA"))},
iL:function(){return this.dw(null)},
iK:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.a7],"$an")
for(u=b.length,t=this.gdv(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bi()
o.saa(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.i(t,s)
if(o.a==null)o.saa(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
iN:function(a,b){var u,t
H.h(b,"$in",[E.a7],"$an")
for(u=b.gM(b),t=this.gdv();u.v();)u.gE().gB().N(0,t)
this.Z()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seS:function(a,b){this.y=H.h(b,"$iT",[E.a7],"$aT")},
$iaR:1}
E.f_.prototype={
el:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.b2(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bX()
t=[V.a2]
u.sbx(H.b([],t))
u.b=null
u.gB().h(0,new E.f0(this))
this.cy=u
u=new O.bX()
u.sbx(H.b([],t))
u.b=null
u.gB().h(0,new E.f1(this))
this.db=u
u=new O.bX()
u.sbx(H.b([],t))
u.b=null
u.gB().h(0,new E.f2(this))
this.dx=u
this.shr(H.b([],[O.bx]))
u=this.dy;(u&&C.a).h(u,null)
this.shn(new H.aB([P.l,A.c1]))},
giY:function(){var u=this.z
if(u==null){u=this.cy.gT().K(0,this.db.gT())
this.z=u}return u},
dH:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbg(u):a;(u&&C.a).h(u,t)},
dF:function(){var u=this.dy
if(u.length>1)u.pop()},
shr:function(a){this.dy=H.h(a,"$ia",[O.bx],"$aa")},
shn:function(a){this.fr=H.h(a,"$iak",[P.l,A.c1],"$aak")}}
E.f0.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.f1.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.f2.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dl.prototype={
ck:function(a){H.k(a,"$iA")
this.dI()},
cj:function(){return this.ck(null)},
giz:function(){var u,t,s
u=Date.now()
t=C.i.V(P.iz(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.b2(u,!1)
return s/t},
cL:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.K()
if(typeof u!=="number")return H.be(u)
s=C.d.dq(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.K()
r=C.d.dq(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.iU(C.p,this.gj3())}},
dI:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.i(new E.fm(this),{func:1,ret:-1,args:[P.aa]})
C.F.f_(u)
C.F.ha(u,W.je(t,P.aa))}},
j1:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cL()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b2(r,!1)
s.y=P.iz(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.as()
r=s.db
C.a.sn(r.a,0)
r.as()
r=s.dx
C.a.sn(r.a,0)
r.as()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aC(this.e)}s=this.z
if(s!=null)s.U(null)}catch(q){u=H.ah(q)
t=H.bE(q)
P.ij("Error: "+H.d(u))
P.ij("Stack: "+H.d(t))
throw H.e(u)}}}
E.fm.prototype={
$1:function(a){var u
H.l7(a)
u=this.a
if(u.ch){u.ch=!1
u.j1()}},
$S:39}
Z.dt.prototype={$ilg:1}
Z.cx.prototype={
aZ:function(a){var u,t,s
try{t=a.a
C.b.d1(t,this.e)
C.b.jf(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ah(s)
t=P.q('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.d(u))
throw H.e(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}}
Z.fU.prototype={$ilh:1}
Z.cy.prototype={
aB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aZ:function(a){var u,t
u=this.a
C.b.ad(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aZ(a)},
dQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.d_(s,u[t].e)
C.b.ad(s,this.a.a,null)},
aC:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ad(t,p,r.b)
C.b.iq(t,q.a,q.b,5123,0)
C.b.ad(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.l]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aw(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sf7:function(a){this.b=H.h(a,"$ia",[Z.bT],"$aa")},
$ilp:1}
Z.bT.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bs(this.c)+"'")+"]"}}
Z.aH.prototype={
gce:function(a){var u,t
u=this.a
t=(u&$.aW().a)!==0?3:0
if((u&$.aV().a)!==0)t+=3
if((u&$.aU().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=2
if((u&$.aY().a)!==0)t+=3
if((u&$.cq().a)!==0)t+=3
if((u&$.cr().a)!==0)t+=4
if((u&$.bH().a)!==0)++t
return(u&$.aT().a)!==0?t+4:t},
hZ:function(a){var u,t,s
u=$.aW()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cr()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bH()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aT()
if((t&u.a)!==0)if(s===a)return u
return $.jF()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.l])
t=this.a
if((t&$.aW().a)!==0)C.a.h(u,"Pos")
if((t&$.aV().a)!==0)C.a.h(u,"Norm")
if((t&$.aU().a)!==0)C.a.h(u,"Binm")
if((t&$.aX().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cq().a)!==0)C.a.h(u,"Clr3")
if((t&$.cr().a)!==0)C.a.h(u,"Clr4")
if((t&$.bH().a)!==0)C.a.h(u,"Weight")
if((t&$.aT().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.dY.prototype={}
D.bi.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.i(b,u)
if(this.a==null)this.saa(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=this.b
t=(u&&C.a).N(u,b)||t}return t},
U:function(a){var u,t,s,r
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
return!0}if(!s)C.a.W(t,new D.ea(u))
t=this.b
if(t!=null)C.a.W(t,new D.eb(u))
u=this.b
if(u!=null)C.a.sn(u,0)
return!0},
j4:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.U(t)}}},
aq:function(){return this.j4(!0,!1)},
saa:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.A]}],"$aa")},
saG:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.A]}],"$aa")}}
D.ea.prototype={
$1:function(a){var u
H.i(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.eb.prototype={
$1:function(a){var u
H.i(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.A.prototype={}
D.bU.prototype={}
D.bV.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cz.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cN.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cN))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.ev.prototype={
iV:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iR:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
sh1:function(a){this.d=H.h(a,"$iiQ",[P.x],"$aiQ")}}
X.eA.prototype={
c1:function(a,b){this.r=a.a
return!1},
aN:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.e5()
if(typeof u!=="number")return u.dV()
this.r=(u&~t)>>>0
return!1},
aM:function(a,b){return!1},
iW:function(a){return!1},
fF:function(a,b,c){return}}
X.aQ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aQ))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.eM.prototype={
c1:function(a,b){this.f=a.a
return!1},
aN:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.e5()
if(typeof u!=="number")return u.dV()
this.f=(u&~t)>>>0
return!1},
aM:function(a,b){return!1},
iX:function(a,b){return!1}}
X.fp.prototype={
iU:function(a){H.h(a,"$ia",[V.a3],"$aa")
return!1},
iS:function(a){H.h(a,"$ia",[V.a3],"$aa")
return!1},
iT:function(a){H.h(a,"$ia",[V.a3],"$aa")
return!1}}
X.ds.prototype={
cw:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cN(u,new X.aQ(t,a.altKey,a.shiftKey))},
ay:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
bG:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.w()
q=u.top
if(typeof s!=="number")return s.w()
return new V.a3(t-r,s-q)},
aH:function(a){return new V.av(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a3])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.d.a7(p.pageX)
C.d.a7(p.pageY)
n=u.left
C.d.a7(p.pageX)
C.a.h(t,new V.a3(o-n,C.d.a7(p.pageY)-u.top))}return t},
ai:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.aQ(t,a.altKey,a.shiftKey))},
by:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.w()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.w()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fz:function(a){this.f=!0},
fk:function(a){this.f=!1},
fq:function(a){H.k(a,"$iX")
if(this.f&&this.by(a))a.preventDefault()},
fD:function(a){var u
H.k(a,"$iaC")
if(!this.f)return
u=this.cw(a)
this.b.iV(u)},
fB:function(a){var u
H.k(a,"$iaC")
if(!this.f)return
u=this.cw(a)
this.b.iR(u)},
fH:function(a){var u,t,s,r
H.k(a,"$iX")
u=this.a
u.focus()
this.f=!0
this.ay(a)
if(this.x){t=this.ai(a)
s=this.aH(a)
if(this.d.c1(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ai(a)
r=this.ak(a)
if(this.c.c1(t,r))a.preventDefault()},
fL:function(a){var u,t,s
H.k(a,"$iX")
this.ay(a)
u=this.ai(a)
if(this.x){t=this.aH(a)
if(this.d.aN(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aN(u,s))a.preventDefault()},
fv:function(a){var u,t,s
H.k(a,"$iX")
if(!this.by(a)){this.ay(a)
u=this.ai(a)
if(this.x){t=this.aH(a)
if(this.d.aN(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aN(u,s))a.preventDefault()}},
fJ:function(a){var u,t,s
H.k(a,"$iX")
this.ay(a)
u=this.ai(a)
if(this.x){t=this.aH(a)
if(this.d.aM(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aM(u,s))a.preventDefault()},
ft:function(a){var u,t,s
H.k(a,"$iX")
if(!this.by(a)){this.ay(a)
u=this.ai(a)
if(this.x){t=this.aH(a)
if(this.d.aM(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aM(u,s))a.preventDefault()}},
fN:function(a){var u,t
H.k(a,"$iaI")
this.ay(a)
u=new V.av((a&&C.E).gik(a),C.E.gil(a)).C(0,180)
if(this.x){if(this.d.iW(u))a.preventDefault()
return}if(this.r)return
t=this.ak(a)
if(this.c.iX(u,t))a.preventDefault()},
fP:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ai(this.y)
s=this.ak(this.y)
this.d.fF(t,s,u)}},
h_:function(a){var u
H.k(a,"$iat")
this.a.focus()
this.f=!0
this.bG(a)
u=this.bC(a)
if(this.e.iU(u))a.preventDefault()},
fW:function(a){var u
H.k(a,"$iat")
this.bG(a)
u=this.bC(a)
if(this.e.iS(u))a.preventDefault()},
fY:function(a){var u
H.k(a,"$iat")
this.bG(a)
u=this.bC(a)
if(this.e.iT(u))a.preventDefault()},
sf0:function(a){this.z=H.h(a,"$ia",[[P.c3,P.E]],"$aa")}}
D.b3.prototype={
ag:function(a){var u
H.k(a,"$iA")
u=this.d
if(u!=null)u.U(a)},
eu:function(){return this.ag(null)},
$iU:1,
$iaR:1}
D.U.prototype={$iaR:1}
D.cO.prototype={
ag:function(a){var u=this.Q
if(u!=null)u.U(a)},
cG:function(a){var u
H.k(a,"$iA")
u=this.ch
if(u!=null)u.U(a)},
fE:function(){return this.cG(null)},
fS:function(a){var u,t,s
H.h(a,"$in",[D.U],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.er(s))return!1}return!0},
fe:function(a,b){var u,t,s,r,q,p,o,n
u=D.U
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gcF(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.k(b[p],"$iU")
if(o instanceof D.b3)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bi()
n.saa(null)
n.saG(null)
n.c=null
n.d=0
o.d=n}H.i(s,r)
if(n.a==null)n.saa(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bU(a,b,this,[u])
u.b=!0
this.ag(u)},
fU:function(a,b){var u,t,s,r
u=D.U
H.h(b,"$in",[u],"$an")
for(t=b.gM(b),s=this.gcF();t.v();){r=t.gE()
C.a.N(this.e,r)
r.gB().N(0,s)}u=new D.bV(a,b,this,[u])
u.b=!0
this.ag(u)},
er:function(a){var u=C.a.R(this.e,a)
return u},
seY:function(a){this.e=H.h(a,"$ia",[D.b3],"$aa")},
sh0:function(a){this.f=H.h(a,"$ia",[D.d2],"$aa")},
shp:function(a){this.r=H.h(a,"$ia",[D.dc],"$aa")},
shu:function(a){this.x=H.h(a,"$ia",[D.di],"$aa")},
shv:function(a){this.y=H.h(a,"$ia",[D.dj],"$aa")},
shw:function(a){this.z=H.h(a,"$ia",[D.dk],"$aa")},
$an:function(){return[D.U]},
$aT:function(){return[D.U]}}
D.d2.prototype={$iU:1,$iaR:1}
D.dc.prototype={$iU:1,$iaR:1}
D.di.prototype={$iU:1,$iaR:1}
D.dj.prototype={$iU:1,$iaR:1}
D.dk.prototype={$iU:1,$iaR:1}
V.R.prototype={
q:function(a,b){var u,t,s
u=C.d.q(this.a,b.gc3())
t=C.d.q(this.b,b.gbl())
s=C.d.q(this.c,b.gbL())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.R(u,t,s)},
w:function(a,b){var u,t,s
u=C.d.w(this.a,b.gc3())
t=C.d.w(this.b,b.gbl())
s=C.d.w(this.c,b.gbL())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.R(u,t,s)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.aL.prototype={
q:function(a,b){var u,t,s,r
u=C.d.q(this.a,b.gc3())
t=C.d.q(this.b,b.gbl())
s=C.d.q(this.c,b.gbL())
r=C.d.q(this.d,b.ghY(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aL(u,t,s,r)},
w:function(a,b){var u,t,s,r
u=C.d.w(this.a,b.gc3())
t=C.d.w(this.b,b.gbl())
s=C.d.w(this.c,b.gbL())
r=C.d.w(this.d,b.ghY(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aL(u,t,s,r)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.e8.prototype={}
V.cV.prototype={
a3:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.I().a
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
u=[P.v]
t=V.bD(H.b([this.a,this.d,this.r],u),3,0)
s=V.bD(H.b([this.b,this.e,this.x],u),3,0)
r=V.bD(H.b([this.c,this.f,this.y],u),3,0)
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
V.a2.prototype={
a3:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return u},
ds:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.I().a)return V.hY()
a8=1/a7
a9=-r
b0=-d
return V.aP((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
K:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aP(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
c7:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aQ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Y(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.I().a
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
i:function(a){return this.L()},
dr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.v]
t=V.bD(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bD(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bD(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bD(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
L:function(){return this.dr("",3,0)},
A:function(a){return this.dr(a,3,0)}}
V.a3.prototype={
q:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
w:function(a,b){return new V.a3(C.d.w(this.a,b.gjr(b)),C.d.w(this.b,b.gjs(b)))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.Y.prototype={
q:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
w:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.d8.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d8))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.av.prototype={
c_:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return Math.sqrt(u*u+t*t)},
q:function(a,b){var u,t,s
u=this.a
t=b.gir(b)
if(typeof u!=="number")return u.q()
t=C.d.q(u,t)
u=this.b
s=b.gis(b)
if(typeof u!=="number")return u.q()
return new V.av(t,C.d.q(u,s))},
w:function(a,b){var u,t,s
u=this.a
t=b.gir(b)
if(typeof u!=="number")return u.w()
t=C.d.w(u,t)
u=this.b
s=b.gis(b)
if(typeof u!=="number")return u.w()
return new V.av(t,C.d.w(u,s))},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.iY
if(u==null){u=new V.av(0,0)
$.iY=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.av(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.be(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.be(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.K.prototype={
c_:function(a){return Math.sqrt(this.J(this))},
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
al:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
w:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
aE:function(a){return new V.K(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.I().a)return V.ce()
return new V.K(this.a/b,this.b/b,this.c/b)},
dt:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.cB.prototype={
gB:function(){var u=this.b
if(u==null){u=D.aq()
this.b=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bp.prototype={}
U.d9.prototype={
gB:function(){var u=this.y
if(u==null){u=D.aq()
this.y=u}return u},
aw:function(a){var u=this.y
if(u!=null)u.U(a)},
sdU:function(a){var u
a=V.il(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.O("yaw",u,a,this,[P.v])
u.b=!0
this.aw(u)}},
sdE:function(a){var u
a=V.il(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.I().a)){this.b=a
u=new D.O("pitch",u,a,this,[P.v])
u.b=!0
this.aw(u)}},
sdJ:function(a){var u
a=V.il(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.O("roll",u,a,this,[P.v])
u.b=!0
this.aw(u)}},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
u=this.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"], ["+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"}}
M.cF.prototype={
ah:function(a){var u
H.k(a,"$iA")
u=this.x
if(u!=null)u.U(a)},
ew:function(){return this.ah(null)},
fm:function(a,b){var u,t,s,r,q,p,o,n
u=E.a7
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.ga9(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bi()
n.saa(null)
n.saG(null)
n.c=null
n.d=0
o.z=n}H.i(s,r)
if(n.a==null)n.saa(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bU(a,b,this,[u])
u.b=!0
this.ah(u)},
fo:function(a,b){var u,t,s
u=E.a7
H.h(b,"$in",[u],"$an")
for(t=b.gM(b),s=this.ga9();t.v();)t.gE().gB().N(0,s)
u=new D.bV(a,b,this,[u])
u.b=!0
this.ah(u)},
sdL:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().N(0,this.ga9())
t=this.c
this.c=a
if(a!=null)a.gB().h(0,this.ga9())
u=new D.O("technique",t,this.c,this,[O.bx])
u.b=!0
this.ah(u)}},
gB:function(){var u=this.x
if(u==null){u=D.aq()
this.x=u}return u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.dH(this.c)
u=this.b
u.toString
t=a.a
C.b.i1(t,36160,null)
C.b.bR(t,2884)
C.b.bR(t,2929)
C.b.im(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.be(s)
o=C.d.a7(p*s)
p=q.b
if(typeof r!=="number")return H.be(r)
n=C.d.a7(p*r)
p=C.d.a7(q.c*s)
a.c=p
q=C.d.a7(q.d*r)
a.d=q
C.b.jg(t,o,n,p,q)
C.b.i7(t,u.c)
u=u.a
C.b.i6(t,u.a,u.b,u.c,u.d)
C.b.i5(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aP(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dG(i)
t=$.iK
if(t==null){t=V.iM()
q=V.j2()
p=$.iZ
if(p==null){p=new V.K(0,0,-1)
$.iZ=p}p=V.iG(t,q,p)
$.iK=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.K(0,h)}a.db.dG(h)
u=this.c
if(u!=null)u.bi(a)
for(u=this.d.a,u=new J.ai(u,u.length,0,[H.u(u,0)]);u.v();)u.d.bi(a)
for(u=this.d.a,u=new J.ai(u,u.length,0,[H.u(u,0)]);u.v();)u.d.aC(a)
this.a.toString
a.cy.c2()
a.db.c2()
this.b.toString
a.dF()},
sev:function(a,b){this.d=H.h(b,"$iT",[E.a7],"$aT")},
$iln:1}
A.cv.prototype={}
A.dU.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
it:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.d1(r.a,r.c)}},
ip:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.d_(r.a,r.c)}}}
A.eG.prototype={
ek:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.aS("")
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
a7.hA(u)
a7.hH(u)
a7.hB(u)
a7.hP(u)
a7.hQ(u)
a7.hJ(u)
a7.hU(u)
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
u=new P.aS("")
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
s.hE(u)
s.hz(u)
s.hC(u)
s.hF(u)
s.hN(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hL(u)
s.hM(u)}s.hI(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.h){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.h:m+="   return alpha;\n"
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
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.l])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.k(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hD(u)
s.hK(u)
s.hO(u)
s.hR(u)
s.hS(u)
s.hT(u)
s.hG(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.l])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.c)u.a+="   setDiffuseColor();\n"
if(s.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.c)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.c)C.a.h(j,"emission()")
if(s.r!==C.c)C.a.h(j,"reflect(refl)")
if(s.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.k(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.cz(n,35633)
this.f=this.cz(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.cT(s,q,this.e)
C.b.cT(s,this.r,this.f)
C.b.iE(s,this.r)
if(!H.ia(C.b.bk(s,this.r,35714))){h=C.b.e0(s,this.r)
C.b.ii(s,this.r)
H.p(P.q("Failed to link shader: "+H.d(h)))}this.hk()
this.hm()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a7.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$iae")
if(t)this.dy=H.c(this.y.m(0,"objMat"),"$iae")
if(r)this.fr=H.c(this.y.m(0,"viewObjMat"),"$iae")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$iae")
if(a7.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$ic8")
if(a7.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$iae")
if(a7.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$iae")
this.seO(H.b([],[A.ae]))
t=a7.af
if(t>0){this.k4=H.k(this.y.m(0,"bendMatCount"),"$iD")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.l(0,q)
if(f==null)H.p(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(f,"$iae"))}}t=a7.a
if(t!==C.c){this.r2=H.c(this.y.m(0,"emissionClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.rx=H.c(this.y.m(0,"emissionTxt"),"$ia4")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iD")
break
case C.f:this.ry=H.c(this.y.m(0,"emissionTxt"),"$ia5")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iD")
break}}t=a7.b
if(t!==C.c){this.x2=H.c(this.y.m(0,"ambientClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.y1=H.c(this.y.m(0,"ambientTxt"),"$ia4")
this.af=H.c(this.y.m(0,"nullAmbientTxt"),"$iD")
break
case C.f:this.y2=H.c(this.y.m(0,"ambientTxt"),"$ia5")
this.af=H.c(this.y.m(0,"nullAmbientTxt"),"$iD")
break}}t=a7.c
if(t!==C.c){this.a5=H.c(this.y.m(0,"diffuseClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.b1=H.c(this.y.m(0,"diffuseTxt"),"$ia4")
this.b2=H.c(this.y.m(0,"nullDiffuseTxt"),"$iD")
break
case C.f:this.d2=H.c(this.y.m(0,"diffuseTxt"),"$ia5")
this.b2=H.c(this.y.m(0,"nullDiffuseTxt"),"$iD")
break}}t=a7.d
if(t!==C.c){this.b3=H.c(this.y.m(0,"invDiffuseClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.d3=H.c(this.y.m(0,"invDiffuseTxt"),"$ia4")
this.b4=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iD")
break
case C.f:this.d4=H.c(this.y.m(0,"invDiffuseTxt"),"$ia5")
this.b4=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iD")
break}}t=a7.e
if(t!==C.c){this.b7=H.c(this.y.m(0,"shininess"),"$iP")
this.b5=H.c(this.y.m(0,"specularClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.d5=H.c(this.y.m(0,"specularTxt"),"$ia4")
this.b6=H.c(this.y.m(0,"nullSpecularTxt"),"$iD")
break
case C.f:this.d6=H.c(this.y.m(0,"specularTxt"),"$ia5")
this.b6=H.c(this.y.m(0,"nullSpecularTxt"),"$iD")
break}}switch(a7.f){case C.c:break
case C.h:break
case C.e:this.d7=H.c(this.y.m(0,"bumpTxt"),"$ia4")
this.b8=H.c(this.y.m(0,"nullBumpTxt"),"$iD")
break
case C.f:this.d8=H.c(this.y.m(0,"bumpTxt"),"$ia5")
this.b8=H.c(this.y.m(0,"nullBumpTxt"),"$iD")
break}if(a7.dy){this.d9=H.c(this.y.m(0,"envSampler"),"$ia5")
this.da=H.c(this.y.m(0,"nullEnvTxt"),"$iD")
t=a7.r
if(t!==C.c){this.b9=H.c(this.y.m(0,"reflectClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.dc=H.c(this.y.m(0,"reflectTxt"),"$ia4")
this.ba=H.c(this.y.m(0,"nullReflectTxt"),"$iD")
break
case C.f:this.dd=H.c(this.y.m(0,"reflectTxt"),"$ia5")
this.ba=H.c(this.y.m(0,"nullReflectTxt"),"$iD")
break}}t=a7.x
if(t!==C.c){this.bb=H.c(this.y.m(0,"refraction"),"$iP")
this.bc=H.c(this.y.m(0,"refractClr"),"$iB")
switch(t){case C.c:break
case C.h:break
case C.e:this.de=H.c(this.y.m(0,"refractTxt"),"$ia4")
this.bd=H.c(this.y.m(0,"nullRefractTxt"),"$iD")
break
case C.f:this.df=H.c(this.y.m(0,"refractTxt"),"$ia5")
this.bd=H.c(this.y.m(0,"nullRefractTxt"),"$iD")
break}}}t=a7.y
if(t!==C.c){this.be=H.c(this.y.m(0,"alpha"),"$iP")
switch(t){case C.c:break
case C.h:break
case C.e:this.dg=H.c(this.y.m(0,"alphaTxt"),"$ia4")
this.bf=H.c(this.y.m(0,"nullAlphaTxt"),"$iD")
break
case C.f:this.dh=H.c(this.y.m(0,"alphaTxt"),"$ia5")
this.bf=H.c(this.y.m(0,"nullAlphaTxt"),"$iD")
break}}this.sex(H.b([],[A.c7]))
this.sey(H.b([],[A.c9]))
this.sez(H.b([],[A.ca]))
this.seA(H.b([],[A.cb]))
this.seB(H.b([],[A.cc]))
this.seC(H.b([],[A.cd]))
if(a7.k2){t=a7.z
if(t>0){this.di=H.k(this.y.m(0,"dirLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="dirLights["+g+"].color"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.bS;(s&&C.a).h(s,new A.c7(g,f,e))}}t=a7.Q
if(t>0){this.dj=H.k(this.y.m(0,"pntLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="pntLights["+g+"].color"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="pntLights["+g+"].att0"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iP")
s=this.y
r="pntLights["+g+"].att1"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iP")
s=this.y
r="pntLights["+g+"].att2"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iP")
s=this.bT;(s&&C.a).h(s,new A.c9(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dk=H.k(this.y.m(0,"spotLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="spotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="spotLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iP")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iP")
s=this.y
r="spotLights["+g+"].att0"
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iP")
s=this.y
r="spotLights["+g+"].att1"
a1=s.l(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iP")
s=this.y
r="spotLights["+g+"].att2"
a2=s.l(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iP")
s=this.bU;(s&&C.a).h(s,new A.ca(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dl=H.k(this.y.m(0,"txtDirLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtDirLights["+g+"].color"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iB")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iD")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$ia4")
s=this.bV;(s&&C.a).h(s,new A.cb(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dm=H.k(this.y.m(0,"txtPntLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ic8")
s=this.y
r="txtPntLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iD")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iP")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iP")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.l(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iP")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.l(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$ia5")
s=this.bW;(s&&C.a).h(s,new A.cc(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dn=H.k(this.y.m(0,"txtSpotLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iB")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iD")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iB")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.l(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iP")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.l(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iP")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.l(0,r)
if(a3==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iP")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.l(0,r)
if(a4==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iP")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.l(0,r)
if(a5==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iP")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.l(0,r)
if(a6==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a6,"$ia4")
s=this.bX;(s&&C.a).h(s,new A.cd(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a4:function(a,b,c){C.b.O(b.a,b.d,1)},
a0:function(a,b,c){C.b.O(b.a,b.d,1)},
seO:function(a){this.r1=H.h(a,"$ia",[A.ae],"$aa")},
sex:function(a){this.bS=H.h(a,"$ia",[A.c7],"$aa")},
sey:function(a){this.bT=H.h(a,"$ia",[A.c9],"$aa")},
sez:function(a){this.bU=H.h(a,"$ia",[A.ca],"$aa")},
seA:function(a){this.bV=H.h(a,"$ia",[A.cb],"$aa")},
seB:function(a){this.bW=H.h(a,"$ia",[A.cc],"$aa")},
seC:function(a){this.bX=H.h(a,"$ia",[A.cd],"$aa")}}
A.eJ.prototype={
hA:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.af+"];\n"
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
hH:function(a){var u
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
hB:function(a){var u
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
hP:function(a){var u,t
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
hQ:function(a){var u,t
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
hJ:function(a){var u
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
hU:function(a){var u
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
aj:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.aS(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hE:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aj(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hz:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aj(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hC:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aj(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hF:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aj(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hN:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aj(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hI:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.h:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.f:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.c:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   return normalize(normalVec);\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hL:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aj(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hM:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aj(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hD:function(a){var u,t
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
hK:function(a){var u,t
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
hO:function(a){var u,t
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
hR:function(a){var u,t,s
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
hS:function(a){var u,t,s
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
hT:function(a){var u,t,s
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
hG:function(a){var u
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
i:function(a){return this.a5}}
A.c7.prototype={}
A.cb.prototype={}
A.c9.prototype={}
A.cc.prototype={}
A.ca.prototype={}
A.cd.prototype={}
A.c1.prototype={
en:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cz:function(a,b){var u,t,s
u=this.a
t=C.b.ig(u,b)
C.b.ea(u,t,a)
C.b.i8(u,t)
if(!H.ia(C.b.e2(u,t,35713))){s=C.b.e1(u,t)
C.b.ij(u,t)
throw H.e(P.q("Error compiling shader '"+H.d(t)+"': "+H.d(s)))}return t},
hk:function(){var u,t,s,r,q,p
u=H.b([],[A.cv])
t=this.a
s=H.a0(C.b.bk(t,this.r,35721))
if(typeof s!=="number")return H.be(s)
r=0
for(;r<s;++r){q=C.b.dW(t,this.r,r)
p=C.b.dY(t,this.r,q.name)
C.a.h(u,new A.cv(t,q.name,p))}this.x=new A.dU(u)},
hm:function(){var u,t,s,r,q,p
u=H.b([],[A.dn])
t=this.a
s=H.a0(C.b.bk(t,this.r,35718))
if(typeof s!=="number")return H.be(s)
r=0
for(;r<s;++r){q=C.b.dX(t,this.r,r)
p=C.b.e3(t,this.r,q.name)
C.a.h(u,this.ih(q.type,q.size,q.name,p))}this.y=new A.fB(u)},
av:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.D(u,t,b,c)
else return A.i2(u,t,b,a,c)},
eV:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a4(u,t,b,c)
else return A.i2(u,t,b,a,c)},
eW:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a5(u,t,b,c)
else return A.i2(u,t,b,a,c)},
aY:function(a,b){return new P.dx(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
ih:function(a,b,c,d){switch(a){case 5120:return this.av(b,c,d)
case 5121:return this.av(b,c,d)
case 5122:return this.av(b,c,d)
case 5123:return this.av(b,c,d)
case 5124:return this.av(b,c,d)
case 5125:return this.av(b,c,d)
case 5126:return new A.P(this.a,this.r,c,d)
case 35664:return new A.fw(this.a,this.r,c,d)
case 35665:return new A.B(this.a,this.r,c,d)
case 35666:return new A.fz(this.a,this.r,c,d)
case 35667:return new A.fx(this.a,this.r,c,d)
case 35668:return new A.fy(this.a,this.r,c,d)
case 35669:return new A.fA(this.a,this.r,c,d)
case 35674:return new A.fC(this.a,this.r,c,d)
case 35675:return new A.c8(this.a,this.r,c,d)
case 35676:return new A.ae(this.a,this.r,c,d)
case 35678:return this.eV(b,c,d)
case 35680:return this.eW(b,c,d)
case 35670:throw H.e(this.aY("BOOL",c))
case 35671:throw H.e(this.aY("BOOL_VEC2",c))
case 35672:throw H.e(this.aY("BOOL_VEC3",c))
case 35673:throw H.e(this.aY("BOOL_VEC4",c))
default:throw H.e(P.q("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.bh.prototype={
i:function(a){return this.b}}
A.dn.prototype={}
A.fB.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.l(0,b)
if(u==null)throw H.e(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
iy:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
L:function(){return this.iy("\n")}}
A.D.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.fx.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.fy.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.fA.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.fv.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)},
shx:function(a){this.e=H.h(a,"$ia",[P.x],"$aa")}}
A.P.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.fw.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.fz.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.fC.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.c8.prototype={
a8:function(a){var u=new Float32Array(H.cn(H.h(a,"$ia",[P.v],"$aa")))
C.b.dR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.ae.prototype={
a8:function(a){var u=new Float32Array(H.cn(H.h(a,"$ia",[P.v],"$aa")))
C.b.dS(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.a4.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.a5.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.hM.prototype={
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)},
$S:31}
F.hA.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.iq(t.$1(u),s)
s=J.jJ(J.iq(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.K(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.J(s)))
t=$.j_
if(t==null){t=new V.K(1,0,0)
$.j_=t
p=t}else p=t
t=q.al(!J.S(q,p)?V.j3():p)
o=t.C(0,Math.sqrt(t.J(t)))
t=o.al(q)
p=t.C(0,Math.sqrt(t.J(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.K(0,t*s)
s=o.K(0,m*s)
s=J.jI(r,new V.Y(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.S(a.f,s)){a.f=H.k(s,"$iY")
t=a.a
if(t!=null)t.Z()}},
$S:32}
F.W.prototype={
b0:function(){if(!this.gd0()){C.a.N(this.a.a.d.b,this)
this.a.a.Z()}this.h6()
this.h7()
this.h8()},
hh:function(a){this.a=a
C.a.h(a.d.b,this)},
hi:function(a){this.b=a
C.a.h(a.d.c,this)},
hj:function(a){this.c=a
C.a.h(a.d.d,this)},
h6:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
h7:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
h8:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gd0:function(){return this.a==null||this.b==null||this.c==null},
eN:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ce()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.dt())return
return q.C(0,Math.sqrt(q.J(q)))},
eR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.w(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.J(u)))
u=r.w(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.al(u.C(0,Math.sqrt(u.J(u))))
return u.C(0,Math.sqrt(u.J(u)))},
bO:function(){if(this.d!=null)return!0
var u=this.eN()
if(u==null){u=this.eR()
if(u==null)return!1}this.d=u
this.a.a.Z()
return!0},
eM:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ce()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.dt())return
return q.C(0,Math.sqrt(q.J(q)))},
eQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.I().a){u=m.w(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.J(u)))
if(j.a-k.a<0)h=h.aE(0)}else{g=(u-l.b)/i
u=m.w(0,p).K(0,g).q(0,p).w(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.J(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.aE(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.J(u)))
u=f.al(h)
u=u.C(0,Math.sqrt(u.J(u))).al(f)
h=u.C(0,Math.sqrt(u.J(u)))}return h},
bM:function(){if(this.e!=null)return!0
var u=this.eM()
if(u==null){u=this.eQ()
if(u==null)return!1}this.e=u
this.a.a.Z()
return!0},
gcX:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u,t
if(this.gd0())return a+"disposed"
u=a+C.j.ao(J.aw(this.a.e),0)+", "+C.j.ao(J.aw(this.b.e),0)+", "+C.j.ao(J.aw(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.A("")}}
F.ed.prototype={}
F.fd.prototype={
c0:function(a,b,c){var u,t
u=b.a
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b7.prototype={}
F.ew.prototype={}
F.fu.prototype={}
F.bq.prototype={}
F.db.prototype={
gB:function(){var u=this.e
if(u==null){u=D.aq()
this.e=u}return u},
aA:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aA()||!1
if(!this.a.aA())t=!1
u=this.e
if(u!=null)u.aq()
return t},
iI:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.u(u,0)])
for(u=[F.am];t.length!==0;){s=C.a.giv(t)
C.a.j_(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.y)(t),++p){o=t[p]
if(o!=null&&a.c0(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.iH(r)}}this.a.I()
this.c.c4()
this.d.c4()
this.b.j0()
this.c.c5(new F.fu())
this.d.c5(new F.fd())
u=this.e
if(u!=null)u.aq()},
i3:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aW()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aV().a)!==0)++r
if((s&$.aU().a)!==0)++r
if((s&$.aX().a)!==0)++r
if((s&$.aY().a)!==0)++r
if((s&$.cq().a)!==0)++r
if((s&$.cr().a)!==0)++r
if((s&$.bH().a)!==0)++r
if((s&$.aT().a)!==0)++r
q=a1.gce(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.v
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cx])
for(m=0,l=0;l<r;++l){k=a1.hZ(l)
j=k.gce(k)
C.a.S(n,l,new Z.cx(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].iF(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.S(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ad(t,34962,e)
C.b.cV(t,34962,new Float32Array(H.cn(o)),35044)
C.b.ad(t,34962,null)
d=new Z.cy(new Z.dt(34962,e),n,a1)
d.sf7(H.b([],[Z.bT]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.I()
C.a.h(c,b.e)}a=Z.ks(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bT(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.k(u,"\n")},
a6:function(a){var u=this.e
if(u!=null)u.U(a)},
Z:function(){return this.a6(null)},
$ilo:1}
F.f6.prototype={
hV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.am],"$aa")
u=H.b([],[F.W])
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
C.a.h(u,F.ec(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ec(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ec(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ec(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.l(0,q)
for(o=q-1;o>=0;--o){n=r.d.l(0,o)
if(a.c0(0,p,n)){p.b0()
break}}}}},
c4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gcX(s)
if(t)s.b0()}},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bO())s=!1
return s},
bN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bM())s=!1
return s},
i:function(a){return this.L()},
A:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
L:function(){return this.A("")},
sf1:function(a){this.b=H.h(a,"$ia",[F.W],"$aa")}}
F.f7.prototype={
gn:function(a){return 0},
c5:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.l(0,q)}},
c4:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gcX(s)
if(t)s.b0()}},
i:function(a){return this.L()},
A:function(a){var u,t,s
u=H.b([],[P.l])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.f(s,t)
C.a.h(u,s[t].A(a+(""+t+". ")))}return C.a.k(u,"\n")},
L:function(){return this.A("")},
sf8:function(a){this.b=H.h(a,"$ia",[F.b7],"$aa")}}
F.f8.prototype={
gn:function(a){return 0},
j0:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].gjq()
t=t.gjn(t)
if(t.gn(t).ji(0,1)){t=this.b
return H.f(t,u)
t[u].b0()}}},
i:function(a){return this.L()},
A:function(a){var u,t,s
u=H.b([],[P.l])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.h(u,t[s].A(a))}return C.a.k(u,"\n")},
L:function(){return this.A("")},
sbB:function(a){this.b=H.h(a,"$ia",[F.bq],"$aa")}}
F.am.prototype={
cZ:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.i3(this.cx,s,p,u,t,r,q,a,o)},
iF:function(a){var u,t
if(a.t(0,$.aW())){u=this.f
t=[P.v]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aV())){u=this.r
t=[P.v]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aU())){u=this.x
t=[P.v]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aX())){u=this.y
t=[P.v]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.aY())){u=this.z
t=[P.v]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cq())){u=this.Q
t=[P.v]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cr())){u=this.Q
t=[P.v]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bH()))return H.b([this.ch],[P.v])
else if(a.t(0,$.aT())){u=H.b([-1,-1,-1,-1],[P.v])
return u}else return H.b([],[P.v])},
bO:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ce()
this.d.W(0,new F.fT(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.J(u)))
u=this.a
if(u!=null){u.Z()
u=this.a.e
if(u!=null)u.aq()}return!0},
bM:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ce()
this.d.W(0,new F.fS(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.J(u)))
u=this.a
if(u!=null){u.Z()
u=this.a.e
if(u!=null)u.aq()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u,t,s
u=H.b([],[P.l])
C.a.h(u,C.j.ao(J.aw(this.e),0))
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
C.a.h(u,V.H(this.ch,3,0))
C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
L:function(){return this.A("")}}
F.fT.prototype={
$1:function(a){var u,t
H.k(a,"$iW")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:5}
F.fS.prototype={
$1:function(a){var u,t
H.k(a,"$iW")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:5}
F.fJ.prototype={
I:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.e(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.Z()
return!0},
gn:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bO()
return!0},
bN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bM()
return!0},
i4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.S(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.U(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var u,t,s,r
this.I()
u=H.b([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
L:function(){return this.A("")},
shy:function(a){this.c=H.h(a,"$ia",[F.am],"$aa")}}
F.fK.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var u,t,s
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
W:function(a,b){H.i(b,{func:1,ret:-1,args:[F.W]})
C.a.W(this.b,b)
C.a.W(this.c,new F.fL(this,b))
C.a.W(this.d,new F.fM(this,b))},
i:function(a){return this.L()},
A:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
L:function(){return this.A("")},
sf2:function(a){this.b=H.h(a,"$ia",[F.W],"$aa")},
sf3:function(a){this.c=H.h(a,"$ia",[F.W],"$aa")},
sf4:function(a){this.d=H.h(a,"$ia",[F.W],"$aa")}}
F.fL.prototype={
$1:function(a){H.k(a,"$iW")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:5}
F.fM.prototype={
$1:function(a){var u
H.k(a,"$iW")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:5}
F.fN.prototype={
gn:function(a){return 0},
l:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
i:function(a){return this.L()},
A:function(a){var u,t,s
u=H.b([],[P.l])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.h(u,t[s].A(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.h(u,t[s].A(a))}return C.a.k(u,"\n")},
L:function(){return this.A("")},
sf9:function(a){this.b=H.h(a,"$ia",[F.b7],"$aa")},
sfa:function(a){this.c=H.h(a,"$ia",[F.b7],"$aa")}}
F.fP.prototype={}
F.fO.prototype={
c0:function(a,b,c){return J.S(b.f,c.f)}}
F.fQ.prototype={}
F.eT.prototype={
iH:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ia",[F.am],"$aa")
u=V.ce()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.J(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.C(0,Math.sqrt(o*o+n*n+m*m))}if(!J.S(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.U(null)}}}return}}
F.fR.prototype={
gn:function(a){return 0},
i:function(a){return this.L()},
A:function(a){var u,t,s
u=H.b([],[P.l])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.h(u,t[s].A(a))}return C.a.k(u,"\n")},
L:function(){return this.A("")},
sbB:function(a){this.b=H.h(a,"$ia",[F.bq],"$aa")}}
O.cT.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.aq()
this.dy=u}return u},
a_:function(a){var u
H.k(a,"$iA")
u=this.dy
if(u!=null)u.U(a)},
eF:function(){return this.a_(null)},
cK:function(a){H.k(a,"$iA")
this.a=null
this.a_(a)},
hc:function(){return this.cK(null)},
fg:function(a,b){var u=V.a2
u=new D.bU(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a_(u)},
fi:function(a,b){var u=V.a2
u=new D.bV(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.a_(u)},
cu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.i.V(u.e.length+3,4)*4
s=C.i.V(u.f.length+3,4)*4
r=C.i.V(u.r.length+3,4)*4
q=C.i.V(u.x.length+3,4)*4
p=C.i.V(u.y.length+3,4)*4
o=C.i.V(u.z.length+3,4)*4
n=C.i.V(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.i.i(u.a)+C.i.i(m.a)+C.i.i(l.a)+C.i.i(k.a)+C.i.i(j.a)+C.i.i(i.a)+C.i.i(h.a)+C.i.i(g.a)+C.i.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.c||g!==C.c
c=m!==C.c||l!==C.c||k!==C.c||j!==C.c
b=j===C.c
a=!b||d
a0=l!==C.c||k!==C.c||!b||i!==C.c||d
b=i===C.c
a1=!b
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aW()
if(a0){b=$.aV()
a7=new Z.aH(a7.a|b.a)}if(a1){b=$.aU()
a7=new Z.aH(a7.a|b.a)}if(a2){b=$.aX()
a7=new Z.aH(a7.a|b.a)}if(a3){b=$.aY()
a7=new Z.aH(a7.a|b.a)}if(a5){b=$.aT()
a7=new Z.aH(a7.a|b.a)}return new A.eJ(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
P:function(a,b){H.h(a,"$ia",[T.dh],"$aa")},
bi:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ai(u,u.length,0,[H.u(u,0)]);u.v();){t=u.d
t.toString
s=$.fI
if(s==null){s=new V.K(0,0,1)
$.fI=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.c7(s)}}},
j2:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cu()
t=a4.fr.l(0,u.a5)
if(t==null){t=A.k9(u,a4.a)
s=t.b
if(s.length===0)H.p(P.q("May not cache a shader with no name."))
if(a4.fr.cY(s))H.p(P.q('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.S(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.b1
u=a5.e
if(!(u instanceof Z.cy)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aA()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.bN()
o.a.bN()
o=o.e
if(o!=null)o.aq()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.i4()
n=n.e
if(n!=null)n.aq()}l=a5.d.i3(new Z.fU(a4.a),q)
l.aB($.aW()).e=this.a.Q.c
if(u)l.aB($.aV()).e=this.a.cx.c
if(p)l.aB($.aU()).e=this.a.ch.c
if(r.rx)l.aB($.aX()).e=this.a.cy.c
if(o)l.aB($.aY()).e=this.a.db.c
if(r.x1)l.aB($.aT()).e=this.a.dx.c
a5.e=l}u=T.dh
k=H.b([],[u])
p=this.a
o=a4.a
C.b.dT(o,p.r)
p.x.it()
if(r.fx){p=this.a
n=a4.dx.gT()
p=p.dy
p.toString
p.a8(n.a3(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gT().K(0,a4.dx.gT())
a4.cx=n}p=p.fr
p.toString
p.a8(n.a3(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.giY().K(0,a4.dx.gT())
a4.ch=n}p=p.fy
p.toString
p.a8(n.a3(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.a8(C.q.a3(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.a8(C.q.a3(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.a8(C.q.a3(n,!0))}if(r.af>0){j=this.e.a.length
p=this.a.k4
C.b.O(p.a,p.d,j)
for(p=[P.v],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.f(m,i)
m=m[i]
n.toString
H.k(m,"$ia2")
n=n.r1
if(i>=n.length)return H.f(n,i)
n=n[i]
h=new Float32Array(H.cn(H.h(m.a3(0,!0),"$ia",p,"$aa")))
C.b.dS(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.h:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.P(k,this.f.d)
p=this.a
n=this.f.d
p.a4(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.P(k,this.f.e)
p=this.a
n=this.f.e
p.a0(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.h:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.P(k,this.r.d)
p=this.a
n=this.r.d
p.a4(p.y1,p.af,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.P(k,this.r.e)
p=this.a
n=this.r.e
p.a0(p.y2,p.af,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.h:p=this.a
n=this.x.f
p=p.a5
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.P(k,this.x.d)
p=this.a
n=this.x.d
p.a4(p.b1,p.b2,n)
n=this.a
p=this.x.f
n=n.a5
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.P(k,this.x.e)
p=this.a
n=this.x.e
p.a0(p.d2,p.b2,n)
n=this.a
p=this.x.f
n=n.a5
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.h:p=this.a
n=this.y.f
p=p.b3
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.P(k,this.y.d)
p=this.a
n=this.y.d
p.a4(p.d3,p.b4,n)
n=this.a
p=this.y.f
n=n.b3
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.f:this.P(k,this.y.e)
p=this.a
n=this.y.e
p.a0(p.d4,p.b4,n)
n=this.a
p=this.y.f
n=n.b3
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.h:p=this.a
n=this.z.f
p=p.b5
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.b7
C.b.G(n.a,n.d,g)
break
case C.e:this.P(k,this.z.d)
p=this.a
n=this.z.d
p.a4(p.d5,p.b6,n)
n=this.a
p=this.z.f
n=n.b5
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.b7
C.b.G(p.a,p.d,g)
break
case C.f:this.P(k,this.z.e)
p=this.a
n=this.z.e
p.a0(p.d6,p.b6,n)
n=this.a
p=this.z.f
n=n.b5
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.b7
C.b.G(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.di
C.b.O(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.bS
if(e>=m.length)return H.f(m,e)
b=m[e]
m=f.c7(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.C(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.p(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.p(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dj
C.b.O(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.bT
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gaO(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aQ(c.gaO(c))
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gae(c)
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbH()
g=b.e
C.b.G(g.a,g.d,m)
m=c.gbI()
g=b.f
C.b.G(g.a,g.d,m)
m=c.gbJ()
g=b.r
C.b.G(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dk
C.b.O(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.bU
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gaO(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbQ(c).jm()
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aQ(c.gaO(c))
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gae(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjl()
g=b.f
C.b.G(g.a,g.d,m)
m=c.gjk()
g=b.r
C.b.G(g.a,g.d,m)
m=c.gbH()
g=b.x
C.b.G(g.a,g.d,m)
m=c.gbI()
g=b.y
C.b.G(g.a,g.d,m)
m=c.gbJ()
g=b.z
C.b.G(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dl
C.b.O(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
g=this.a.bV
if(e>=g.length)return H.f(g,e)
b=g[e]
g=c.gaP()
H.h(k,"$ia",m,"$aa")
if(!C.a.R(k,g)){g.saJ(0,k.length)
C.a.h(k,g)}g=c.gbQ(c)
a=b.d
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gje()
a=b.b
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gj5(c)
a=b.c
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=f.c7(c.gbQ(c))
a=g.a
a0=g.b
a1=g.c
a1=g.C(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.p(a0.a,a0.d,a,g,a1)
a1=c.gae(c)
g=b.f
C.b.p(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gaP()
g=a1.gaK(a1)
if(!g){g=b.x
C.b.O(g.a,g.d,1)}else{g=b.r
a=a1.gaK(a1)
a0=g.a
g=g.d
if(!a)C.b.O(a0,g,0)
else C.b.O(a0,g,a1.gaJ(a1))
g=b.x
C.b.O(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dm
C.b.O(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.y,n=p.length,m=[P.v],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
a=this.a.bW
if(e>=a.length)return H.f(a,e)
b=a[e]
a=c.gaP()
H.h(k,"$ia",g,"$aa")
if(!C.a.R(k,a)){a.saJ(0,k.length)
C.a.h(k,a)}a2=f.K(0,c.gT())
a=c.gT()
a0=$.bZ
if(a0==null){a0=new V.Y(0,0,0)
$.bZ=a0}a0=a.aQ(a0)
a=b.b
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bZ
if(a==null){a=new V.Y(0,0,0)
$.bZ=a}a=a2.aQ(a)
a0=b.c
C.b.p(a0.a,a0.d,a.a,a.b,a.c)
a=a2.ds()
a0=b.d
h=new Float32Array(H.cn(H.h(new V.cV(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a3(0,!0),"$ia",m,"$aa")))
C.b.dR(a0.a,a0.d,!1,h)
a0=c.gae(c)
a=b.e
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gaP()
a=a0.gaK(a0)
if(!a){a=b.r
C.b.O(a.a,a.d,1)}else{a=b.f
a1=a0.gaK(a0)
a3=a.a
a=a.d
if(!a1)C.b.O(a3,a,0)
else C.b.O(a3,a,a0.gaJ(a0))
a=b.r
C.b.O(a.a,a.d,0)}a=c.gbH()
a0=b.x
C.b.G(a0.a,a0.d,a)
a=c.gbI()
a0=b.y
C.b.G(a0.a,a0.d,a)
a=c.gbJ()
a0=b.z
C.b.G(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dn
C.b.O(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.bX
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gaP()
H.h(k,"$ia",u,"$aa")
if(!C.a.R(k,m)){m.saJ(0,k.length)
C.a.h(k,m)}m=c.gaO(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbQ(c)
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gje()
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gj5(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aQ(c.gaO(c))
g=b.f
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gaP()
g=m.gaK(m)
if(!g){m=b.x
C.b.O(m.a,m.d,1)}else{g=b.r
a=m.gaK(m)
a0=g.a
g=g.d
if(!a)C.b.O(a0,g,0)
else C.b.O(a0,g,m.gaJ(m))
m=b.x
C.b.O(m.a,m.d,0)}m=c.gae(c)
g=b.y
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjo()
g=b.z
C.b.G(g.a,g.d,m)
m=c.gjp()
g=b.Q
C.b.G(g.a,g.d,m)
m=c.gbH()
g=b.ch
C.b.G(g.a,g.d,m)
m=c.gbI()
g=b.cx
C.b.G(g.a,g.d,m)
m=c.gbJ()
g=b.cy
C.b.G(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.h:break
case C.e:this.P(k,this.Q.d)
u=this.a
p=this.Q.d
u.a4(u.d7,u.b8,p)
break
case C.f:this.P(k,this.Q.e)
u=this.a
p=this.Q.e
u.a0(u.d8,u.b8,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gT().ds()
a4.Q=p}u=u.id
u.toString
u.a8(p.a3(0,!0))}if(r.dy){this.P(k,this.ch)
u=this.a
p=this.ch
u.a0(u.d9,u.da,p)
switch(r.r){case C.c:break
case C.h:u=this.a
p=this.cx.f
u=u.b9
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
break
case C.e:this.P(k,this.cx.d)
u=this.a
p=this.cx.d
u.a4(u.dc,u.ba,p)
p=this.a
u=this.cx.f
p=p.b9
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break
case C.f:this.P(k,this.cx.e)
u=this.a
p=this.cx.e
u.a0(u.dd,u.ba,p)
p=this.a
u=this.cx.f
p=p.b9
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.h:u=this.a
p=this.cy.f
u=u.bc
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bb
C.b.G(p.a,p.d,m)
break
case C.e:this.P(k,this.cy.d)
u=this.a
p=this.cy.d
u.a4(u.de,u.bd,p)
p=this.a
u=this.cy.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bb
C.b.G(u.a,u.d,m)
break
case C.f:this.P(k,this.cy.e)
u=this.a
p=this.cy.e
u.a0(u.df,u.bd,p)
p=this.a
u=this.cy.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bb
C.b.G(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.h:u=this.a
n=this.db.f
u=u.be
C.b.G(u.a,u.d,n)
break
case C.e:this.P(k,this.db.d)
u=this.a
n=this.db.d
u.a4(u.dg,u.bf,n)
n=this.a
u=this.db.f
n=n.be
C.b.G(n.a,n.d,u)
break
case C.f:this.P(k,this.db.e)
u=this.a
n=this.db.e
u.a0(u.dh,u.bf,n)
n=this.a
u=this.db.f
n=n.be
C.b.G(n.a,n.d,u)
break}C.b.bR(o,3042)
C.b.i2(o,770,771)}for(i=0;i<k.length;++i)k[i].aZ(a4)
u=a5.e
u.aZ(a4)
u.aC(a4)
u.dQ(a4)
if(p)C.b.io(o,3042)
for(i=0;i<k.length;++i)k[i].dQ(a4)
u=this.a
u.toString
C.b.dT(o,null)
u.x.ip()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cu().a5},
seP:function(a){this.e=H.h(a,"$iT",[V.a2],"$aT")}}
O.eH.prototype={}
O.cU.prototype={
ax:function(){}}
O.eI.prototype={}
O.aD.prototype={
cM:function(a){var u,t
if(!J.S(this.f,a)){u=this.f
this.f=a
t=new D.O(this.b+".color",u,a,this,[V.R])
t.b=!0
this.a.a_(t)}},
ax:function(){this.eh()
this.cM(new V.R(1,1,1))},
sae:function(a,b){var u
if(this.c===C.c){this.c=C.h
this.ax()
u=this.a
u.a=null
u.a_(null)}this.cM(b)}}
O.eK.prototype={
hg:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.O(this.b+".refraction",u,a,this,[P.v])
u.b=!0
this.a.a_(u)}},
ax:function(){this.bp()
this.hg(1)}}
O.eL.prototype={
bE:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.O(this.b+".shininess",u,a,this,[P.v])
u.b=!0
this.a.a_(u)}},
ax:function(){this.bp()
this.bE(100)}}
O.bx.prototype={}
T.dh.prototype={}
T.fl.prototype={}
V.aK.prototype={
an:function(a){return!0},
i:function(a){return"all"},
$iac:1}
V.ac.prototype={}
V.cS.prototype={
an:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].an(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sX:function(a){this.a=H.h(a,"$ia",[V.ac],"$aa")},
$iac:1}
V.a8.prototype={
an:function(a){return!this.eg(a)},
i:function(a){return"!["+this.cf(0)+"]"}}
V.eY.prototype={
an:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.hZ(this.a)
t=H.hZ(this.b)
return u+".."+t},
$iac:1}
V.f5.prototype={
em:function(a){var u,t
if(a.a.length<=0)throw H.e(P.q("May not create a SetMatcher with zero characters."))
u=new H.aB([P.x,P.G])
for(t=new H.bW(a,a.gn(a),0,[H.a_(a,"L",0)]);t.v();)u.S(0,t.d,!0)
this.shf(u)},
an:function(a){return this.a.cY(a)},
i:function(a){var u=this.a
return P.i0(new H.cP(u,[H.u(u,0)]),0,null)},
shf:function(a){this.a=H.h(a,"$iak",[P.x,P.G],"$aak")},
$iac:1}
V.c2.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c6(this.a.j(0,b))
r.sX(H.b([],[V.ac]))
r.c=!1
C.a.h(this.c,r)
return r},
iu:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.an(a))return r}return},
i:function(a){return this.b},
sht:function(a){this.c=H.h(a,"$ia",[V.c6],"$aa")}}
V.dm.prototype={
i:function(a){var u,t
u=H.ik(this.b,"\n","\\n")
t=H.ik(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c5.prototype={
ap:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.l],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.y)(c),++t){s=c[t]
this.c.S(0,s,b)}},
i:function(a){return this.b},
sh9:function(a){var u=P.l
this.c=H.h(a,"$iak",[u,u],"$aak")}}
V.fn.prototype={
j:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.c2(this,b)
u.sht(H.b([],[V.c6]))
u.d=null
this.a.S(0,b,u)}return u},
F:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.c5(this,a)
t=P.l
u.sh9(new H.aB([t,t]))
this.b.S(0,a,u)}return u},
dO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dm])
t=this.c
s=[P.x]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.au(a,o)
m=t.iu(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.i0(r,0,null)
throw H.e(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.i0(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.dm(j==null?k.b:j,l,o)}++o}}},
shq:function(a){this.a=H.h(a,"$iak",[P.l,V.c2],"$aak")},
shs:function(a){this.b=H.h(a,"$iak",[P.l,V.c5],"$aak")}}
V.c6.prototype={
i:function(a){return this.b.b+": "+this.cf(0)}}
X.cA.prototype={$iaR:1}
X.ej.prototype={
gB:function(){var u=this.x
if(u==null){u=D.aq()
this.x=u}return u}}
X.d1.prototype={
gB:function(){var u=this.f
if(u==null){u=D.aq()
this.f=u}return u},
at:function(a){var u
H.k(a,"$iA")
u=this.f
if(u!=null)u.U(a)},
eI:function(){return this.at(null)},
saL:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gB().N(0,this.gcl())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gcl())
u=new D.O("mover",t,this.b,this,[U.bp])
u.b=!0
this.at(u)}},
$iaR:1,
$icA:1}
X.dg.prototype={}
V.b0.prototype={
aU:function(a){this.b=new P.em(C.L)
this.c=null
this.sbw(H.b([],[[P.a,W.aj]]))},
D:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aj]))
t=a.split("\n")
for(u=t.length,s=[W.aj],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.F(p)
n=this.b.eU(p,0,p.length)
m=n==null?p:n
C.k.e7(o,H.ik(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbg(this.d),o)}},
dD:function(a){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
this.sbw(H.b([],[[P.a,W.aj]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.b_()
this.c=t}for(t=t.dO(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)this.bh(t[r])},
sbw:function(a){this.d=H.h(a,"$ia",[[P.a,W.aj]],"$aa")}}
V.hL.prototype={
$1:function(a){H.k(a,"$iaE")
P.ij(C.d.dN(this.a.giz(),2)+" fps")},
$S:35}
V.e1.prototype={
bh:function(a){switch(a.a){case"Class":this.D(a.b,"#551")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break
case"Type":this.D(a.b,"#B11")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b_:function(){var u,t,s,r
u=V.fo()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.t(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.t(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.t(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.t(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.t(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.t(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.t(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aK())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.t(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.t(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.t(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.t(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aK())
s=u.j(0,"Start").k(0,"Slash")
t=V.t(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.t(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a8()
r=[V.ac]
s.sX(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.t(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.t(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.a8()
s.sX(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.t(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.t(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.t(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.F("Num")
s=u.j(0,"Float")
s.d=s.a.F("Num")
s=u.j(0,"Sym")
s.d=s.a.F("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.F("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.F("String")
s=u.j(0,"EndComment")
s.d=s.a.F("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.F("Whitespace")
s=u.j(0,"Id")
t=s.a.F("Id")
s.d=t
s=[P.l]
t.ap(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.ap(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.ap(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.ek.prototype={
bh:function(a){switch(a.a){case"Builtin":this.D(a.b,"#411")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Preprocess":this.D(a.b,"#737")
break
case"Reserved":this.D(a.b,"#119")
break
case"Symbol":this.D(a.b,"#611")
break
case"Type":this.D(a.b,"#171")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b_:function(){var u,t,s,r
u=V.fo()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.t(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.t(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.t(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.t(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.t(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aK())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a8()
r=[V.ac]
s.sX(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.t(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.a8()
t.sX(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.t(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.t(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.F("Num")
t=u.j(0,"Float")
t.d=t.a.F("Num")
t=u.j(0,"Sym")
t.d=t.a.F("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.F("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.F("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.F("Whitespace")
t=u.j(0,"Id")
s=t.a.F("Id")
t.d=s
t=[P.l]
s.ap(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.ap(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.ap(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.el.prototype={
bh:function(a){switch(a.a){case"Attr":this.D(a.b,"#911")
this.D("=","#111")
break
case"Id":this.D(a.b,"#111")
break
case"Other":this.D(a.b,"#111")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break}},
b_:function(){var u,t,s
u=V.fo()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.t(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.t(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.t(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.t(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.t(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.t(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.t(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aK())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aK())
t=u.j(0,"Other").k(0,"Other")
s=new V.a8()
s.sX(H.b([],[V.ac]))
C.a.h(t.a,s)
t=V.t(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.F("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.F("String")
t=u.j(0,"Id")
s=t.a.F("Id")
t.d=s
s.ap(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.l]))
s=u.j(0,"Attr")
s.d=s.a.F("Attr")
s=u.j(0,"Other")
s.d=s.a.F("Other")
return u}}
V.eX.prototype={
dD:function(a){H.h(a,"$ia",[P.l],"$aa")
this.sbw(H.b([],[[P.a,W.aj]]))
this.D(C.a.k(a,"\n"),"#111")},
bh:function(a){},
b_:function(){return}}
V.f9.prototype={
eo:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).u(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.u(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.u(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.u(q,p)}o=u.createElement("div")
this.a=o
C.k.u(q,o)
this.b=null
o=W.j
W.Z(u,"scroll",H.i(new V.fb(s),{func:1,ret:-1,args:[o]}),!1,o)},
cR:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.l],"$aa")
this.hl()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dO(C.a.iD(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.u(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.u(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.u(t,o)
break
case"Link":n=p.b
if(H.lc(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
C.k.u(t,l)}else{k=P.j8(C.B,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.u(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.u(t,o)
break}}C.k.u(this.a,t)},
dZ:function(a){var u,t,s,r
u=new V.e1("dart")
u.aU("dart")
t=new V.ek("glsl")
t.aU("glsl")
s=new V.el("html")
s.aU("html")
r=C.a.iw(H.b([u,t,s],[V.b0]),new V.fc(a))
if(r!=null)return r
u=new V.eX("plain")
u.aU("plain")
return u},
cQ:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.l],"$aa")
u=H.b([],[P.x])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.ig(r).bn(r,"+")){C.a.S(a7,s,C.j.aS(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bn(r,"-")){C.a.S(a7,s,C.j.aS(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dZ(a5)
q.dD(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.u(o,n)
C.k.u(this.a,o)
m=P.j8(C.B,a4,C.w,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.it(null)
i.href="#"+m
i.textContent=a4
C.k.u(j,i)
C.u.u(k,j)
C.m.u(l,k)
C.o.u(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.y)(r),++a0)C.u.u(a,r[a0])
C.m.u(e,d)
C.m.u(e,c)
C.m.u(e,a)
C.o.u(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.y)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gM(r);a3.v();)C.u.u(c,a3.gE())
C.m.u(e,d)
C.m.u(e,c)
C.o.u(n,e)}},
hl:function(){var u,t,s,r
if(this.b!=null)return
u=V.fo()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.t(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.a8()
r=[V.ac]
s.sX(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.t(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.a8()
s.sX(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.t(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.a8()
s.sX(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.t(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.t(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.t(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.t(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.a8()
t.sX(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.t(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.a8()
t.sX(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aK())
s=u.j(0,"Other").k(0,"Other")
t=new V.a8()
t.sX(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.F("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.F("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.F("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.F("Link")
s=u.j(0,"Other")
s.d=s.a.F("Other")
this.b=u}}
V.fb.prototype={
$1:function(a){P.iU(C.p,new V.fa(this.a))},
$S:36}
V.fa.prototype={
$0:function(){var u,t,s
u=C.d.a7(document.documentElement.scrollTop)
t=this.a.style
s=H.d(-0.01*u)+"px"
t.top=s},
$S:1}
V.fc.prototype={
$1:function(a){return H.k(a,"$ib0").a===this.a},
$S:37}
X.hI.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.l]
u.cQ("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cQ("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.V.prototype
u.ed=u.i
u=J.cM.prototype
u.ef=u.i
u=P.n.prototype
u.ee=u.bj
u=W.J.prototype
u.bo=u.a1
u=W.dF.prototype
u.ei=u.ac
u=O.cU.prototype
u.eh=u.ax
u=O.aD.prototype
u.bp=u.ax
u=V.cS.prototype
u.eg=u.an
u.cf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kL","ku",7)
u(P,"kM","kv",7)
u(P,"kN","kw",7)
t(P,"jh","kK",2)
s(W,"kX",4,null,["$4"],["ky"],18,0)
s(W,"kY",4,null,["$4"],["kz"],18,0)
var m
r(m=E.a7.prototype,"gdB",0,0,null,["$1","$0"],["dC","iP"],0,0)
r(m,"gdz",0,0,null,["$1","$0"],["dA","iO"],0,0)
r(m,"gdv",0,0,null,["$1","$0"],["dw","iL"],0,0)
q(m,"giJ","iK",4)
q(m,"giM","iN",4)
r(m=E.dl.prototype,"gci",0,0,null,["$1","$0"],["ck","cj"],0,0)
p(m,"gj3","dI",2)
o(m=X.ds.prototype,"gfw","fz",9)
o(m,"gfj","fk",9)
o(m,"gfp","fq",3)
o(m,"gfC","fD",20)
o(m,"gfA","fB",20)
o(m,"gfG","fH",3)
o(m,"gfK","fL",3)
o(m,"gfu","fv",3)
o(m,"gfI","fJ",3)
o(m,"gfs","ft",3)
o(m,"gfM","fN",26)
o(m,"gfO","fP",9)
o(m,"gfZ","h_",8)
o(m,"gfV","fW",8)
o(m,"gfX","fY",8)
r(D.b3.prototype,"ges",0,0,null,["$1","$0"],["ag","eu"],0,0)
r(m=D.cO.prototype,"gcF",0,0,null,["$1","$0"],["cG","fE"],0,0)
o(m,"gfR","fS",28)
q(m,"gfd","fe",12)
q(m,"gfT","fU",12)
n(V.av.prototype,"gn","c_",11)
n(V.K.prototype,"gn","c_",11)
r(m=M.cF.prototype,"ga9",0,0,null,["$1","$0"],["ah","ew"],0,0)
q(m,"gfl","fm",4)
q(m,"gfn","fo",4)
r(m=O.cT.prototype,"geE",0,0,null,["$1","$0"],["a_","eF"],0,0)
r(m,"ghb",0,0,null,["$1","$0"],["cK","hc"],0,0)
q(m,"gff","fg",10)
q(m,"gfh","fi",10)
r(X.d1.prototype,"gcl",0,0,null,["$1","$0"],["at","eI"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.E,null)
s(P.E,[H.hW,J.V,J.ai,P.dB,P.n,H.bW,P.aA,H.bk,H.dr,H.eZ,H.fr,P.b4,H.bM,H.dG,P.bo,H.ex,H.ey,H.et,P.dH,P.aJ,P.ao,P.du,P.ff,P.c3,P.fg,P.aE,P.a1,P.hv,P.hl,P.by,P.dA,P.L,P.bN,P.en,P.ht,P.G,P.b2,P.aa,P.az,P.eV,P.dd,P.dx,P.ei,P.b5,P.a,P.C,P.a9,P.l,P.aS,W.e_,W.ba,W.ab,W.d_,W.dF,W.ho,W.cG,W.ad,W.hk,W.dK,O.T,O.bX,E.dV,E.a7,E.f_,E.dl,Z.dt,Z.fU,Z.cy,Z.bT,Z.aH,D.dY,D.bi,D.A,X.cz,X.cN,X.ev,X.eA,X.aQ,X.eM,X.fp,X.ds,D.b3,D.U,D.d2,D.dc,D.di,D.dj,D.dk,V.R,V.aL,V.e8,V.cV,V.a2,V.a3,V.Y,V.d8,V.av,V.K,M.cF,A.cv,A.dU,A.eJ,A.c7,A.cb,A.c9,A.cc,A.ca,A.cd,A.bh,A.dn,A.fB,F.W,F.ed,F.b7,F.ew,F.bq,F.db,F.f6,F.f7,F.f8,F.am,F.fJ,F.fK,F.fN,F.fP,F.fQ,F.fR,O.bx,O.cU,T.fl,V.aK,V.ac,V.cS,V.eY,V.f5,V.c2,V.dm,V.c5,V.fn,X.cA,X.dg,X.d1,V.b0,V.f9])
s(J.V,[J.er,J.cL,J.cM,J.ar,J.b6,J.aN,H.cZ,W.bj,W.dv,W.e2,W.cD,W.cE,W.j,W.dy,W.cR,W.dD,W.d5,W.aF,W.dI,W.dL,P.cw,P.cH,P.d4,P.bu,P.da,P.dp])
s(J.cM,[J.eW,J.b9,J.aO])
t(J.hV,J.ar)
s(J.b6,[J.cK,J.es])
t(P.ez,P.dB)
s(P.ez,[H.dq,W.h0,W.a6,P.ee])
t(H.o,H.dq)
s(P.n,[H.e5,H.eD,H.cf])
s(H.e5,[H.bn,H.cP])
s(P.aA,[H.eE,H.fV])
t(H.eF,H.bn)
s(P.b4,[H.eU,H.eu,H.fE,H.ft,H.dX,H.f3,P.d0,P.ax,P.fF,P.fD,P.bv,P.dZ,P.e0])
s(H.bM,[H.hN,H.fk,H.hD,H.hE,H.hF,P.fX,P.fW,P.fY,P.fZ,P.hs,P.hr,P.h5,P.h9,P.h6,P.h7,P.h8,P.hc,P.hd,P.hb,P.ha,P.fh,P.fi,P.hx,P.hi,P.hh,P.hj,P.eC,P.e3,P.e4,W.e6,W.h4,W.eS,W.eR,W.hm,W.hn,W.hq,W.hu,P.hz,P.ef,P.eg,E.f0,E.f1,E.f2,E.fm,D.ea,D.eb,F.hM,F.hA,F.fT,F.fS,F.fL,F.fM,V.hL,V.fb,V.fa,V.fc,X.hI])
s(H.fk,[H.fe,H.bK])
t(P.eB,P.bo)
s(P.eB,[H.aB,W.h_])
t(H.cW,H.cZ)
s(H.cW,[H.cj,H.cl])
t(H.ck,H.cj)
t(H.cX,H.ck)
t(H.cm,H.cl)
t(H.cY,H.cm)
s(H.cY,[H.eN,H.eO,H.eP,H.eQ])
t(P.hg,P.hv)
t(P.hf,P.hl)
t(P.bO,P.fg)
t(P.e7,P.bN)
s(P.bO,[P.em,P.fH])
t(P.fG,P.e7)
s(P.aa,[P.v,P.x])
s(P.ax,[P.bt,P.eo])
s(W.bj,[W.w,W.cg])
s(W.w,[W.J,W.b_,W.bQ,W.ch])
s(W.J,[W.r,P.m])
s(W.r,[W.cu,W.dT,W.bJ,W.aZ,W.bg,W.aj,W.eh,W.cI,W.f4,W.bw,W.de,W.df,W.fj,W.c4])
t(W.bP,W.dv)
t(W.dz,W.dy)
t(W.bl,W.dz)
t(W.cJ,W.bQ)
t(W.b8,W.j)
s(W.b8,[W.aC,W.X,W.at])
t(W.dE,W.dD)
t(W.bY,W.dE)
t(W.dJ,W.dI)
t(W.fq,W.dJ)
t(W.aI,W.X)
t(W.dw,W.cE)
t(W.dM,W.dL)
t(W.dC,W.dM)
t(W.h1,W.h_)
t(W.h2,P.ff)
t(W.i4,W.h2)
t(W.h3,P.c3)
t(W.hp,W.dF)
t(P.c0,P.m)
s(E.dV,[Z.cx,A.c1,T.dh])
s(D.A,[D.bU,D.bV,D.O])
t(D.cO,O.T)
t(U.bp,D.dY)
s(U.bp,[U.cB,U.d9])
t(A.eG,A.c1)
s(A.dn,[A.D,A.fx,A.fy,A.fA,A.fv,A.P,A.fw,A.B,A.fz,A.fC,A.c8,A.ae,A.a4,A.a5])
t(F.fd,F.ed)
t(F.fu,F.ew)
t(F.fO,F.fP)
t(F.eT,F.fQ)
t(O.cT,O.bx)
s(O.cU,[O.eH,O.eI,O.aD])
s(O.aD,[O.eK,O.eL])
s(V.cS,[V.a8,V.c6])
t(X.ej,X.dg)
s(V.b0,[V.e1,V.ek,V.el,V.eX])
u(H.dq,H.dr)
u(H.cj,P.L)
u(H.ck,H.bk)
u(H.cl,P.L)
u(H.cm,H.bk)
u(P.dB,P.L)
u(W.dv,W.e_)
u(W.dy,P.L)
u(W.dz,W.ab)
u(W.dD,P.L)
u(W.dE,W.ab)
u(W.dI,P.L)
u(W.dJ,W.ab)
u(W.dL,P.L)
u(W.dM,W.ab)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.aZ.prototype
C.x=W.bg.prototype
C.k=W.aj.prototype
C.I=W.cD.prototype
C.K=W.cI.prototype
C.y=W.cJ.prototype
C.M=J.V.prototype
C.a=J.ar.prototype
C.i=J.cK.prototype
C.q=J.cL.prototype
C.d=J.b6.prototype
C.j=J.aN.prototype
C.T=J.aO.prototype
C.X=W.bY.prototype
C.C=J.eW.prototype
C.D=W.d5.prototype
C.b=P.bu.prototype
C.u=W.bw.prototype
C.o=W.de.prototype
C.m=W.df.prototype
C.v=J.b9.prototype
C.E=W.aI.prototype
C.F=W.cg.prototype
C.G=new P.eV()
C.H=new P.fH()
C.l=new P.hg()
C.c=new A.bh(0,"ColorSourceType.None")
C.h=new A.bh(1,"ColorSourceType.Solid")
C.e=new A.bh(2,"ColorSourceType.Texture2D")
C.f=new A.bh(3,"ColorSourceType.TextureCube")
C.p=new P.az(0)
C.J=new P.az(5e6)
C.L=new P.en("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.W=H.b(u([]),[P.l])
C.B=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.r=H.b(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.t=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.w=new P.fG(!1)})();(function staticFields(){$.ay=0
$.bL=null
$.iu=null
$.i6=!1
$.jk=null
$.jf=null
$.jp=null
$.hB=null
$.hG=null
$.ih=null
$.bz=null
$.co=null
$.cp=null
$.i7=!1
$.N=C.l
$.aM=null
$.hT=null
$.iB=null
$.iA=null
$.iH=null
$.iL=null
$.bZ=null
$.iP=null
$.iY=null
$.j1=null
$.j_=null
$.j0=null
$.fI=null
$.iZ=null
$.iK=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lk","js",function(){return H.jj("_$dart_dartClosure")})
u($,"ll","im",function(){return H.jj("_$dart_js")})
u($,"lq","jt",function(){return H.aG(H.fs({
toString:function(){return"$receiver$"}}))})
u($,"lr","ju",function(){return H.aG(H.fs({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ls","jv",function(){return H.aG(H.fs(null))})
u($,"lt","jw",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lw","jz",function(){return H.aG(H.fs(void 0))})
u($,"lx","jA",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lv","jy",function(){return H.aG(H.iW(null))})
u($,"lu","jx",function(){return H.aG(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lz","jC",function(){return H.aG(H.iW(void 0))})
u($,"ly","jB",function(){return H.aG(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lO","io",function(){return P.kt()})
u($,"lS","cs",function(){return[]})
u($,"lR","jH",function(){return P.kk("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"lP","jG",function(){return P.iE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"lQ","ip",function(){return P.k5(P.l,P.b5)})
u($,"lH","jF",function(){return Z.an(0)})
u($,"lB","jD",function(){return Z.an(511)})
u($,"lJ","aW",function(){return Z.an(1)})
u($,"lI","aV",function(){return Z.an(2)})
u($,"lD","aU",function(){return Z.an(4)})
u($,"lK","aX",function(){return Z.an(8)})
u($,"lL","aY",function(){return Z.an(16)})
u($,"lE","cq",function(){return Z.an(32)})
u($,"lF","cr",function(){return Z.an(64)})
u($,"lG","jE",function(){return Z.an(96)})
u($,"lM","bH",function(){return Z.an(128)})
u($,"lC","aT",function(){return Z.an(256)})
u($,"lj","jr",function(){return new V.e8(1e-9)})
u($,"li","I",function(){return $.jr()})})()
var v={mangledGlobalNames:{x:"int",v:"double",aa:"num",l:"String",G:"bool",C:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[W.X]},{func:1,ret:-1,args:[P.x,[P.n,E.a7]]},{func:1,ret:P.C,args:[F.W]},{func:1,ret:P.C,args:[D.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[P.x,[P.n,V.a2]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.x,[P.n,D.U]]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.l,args:[P.x]},{func:1,ret:P.G,args:[W.w]},{func:1,args:[,]},{func:1,ret:P.G,args:[P.l]},{func:1,ret:P.G,args:[W.J,P.l,P.l,W.ba]},{func:1,ret:P.C,args:[,]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.G,args:[W.ad]},{func:1,ret:W.J,args:[W.w]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:-1,args:[W.aI]},{func:1,args:[W.j]},{func:1,ret:P.G,args:[[P.n,D.U]]},{func:1,ret:[P.ao,,],args:[,]},{func:1,ret:P.C,args:[,],opt:[P.a9]},{func:1,ret:V.Y,args:[P.v]},{func:1,ret:P.C,args:[F.am,P.v,P.v]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[P.l]},{func:1,ret:P.C,args:[P.aE]},{func:1,ret:P.C,args:[W.j]},{func:1,ret:P.G,args:[V.b0]},{func:1,args:[,P.l]},{func:1,ret:P.C,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.V,DOMError:J.V,MediaError:J.V,Navigator:J.V,NavigatorConcurrentHardware:J.V,NavigatorUserMediaError:J.V,OverconstrainedError:J.V,PositionError:J.V,WebGLActiveInfo:J.V,WebGLRenderbuffer:J.V,WebGL2RenderingContext:J.V,WebGLTexture:J.V,SQLError:J.V,ArrayBufferView:H.cZ,Float32Array:H.cX,Int16Array:H.eN,Int32Array:H.eO,Uint32Array:H.eP,Uint8Array:H.eQ,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,HTMLAnchorElement:W.cu,HTMLAreaElement:W.dT,HTMLBaseElement:W.bJ,HTMLBodyElement:W.aZ,HTMLCanvasElement:W.bg,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,HTMLDivElement:W.aj,XMLDocument:W.bQ,Document:W.bQ,DOMException:W.e2,DOMImplementation:W.cD,DOMRectReadOnly:W.cE,Element:W.J,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.bj,HTMLFormElement:W.eh,HTMLHeadElement:W.cI,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.cJ,KeyboardEvent:W.aC,Location:W.cR,PointerEvent:W.X,MouseEvent:W.X,DragEvent:W.X,DocumentFragment:W.w,ShadowRoot:W.w,DocumentType:W.w,Node:W.w,NodeList:W.bY,RadioNodeList:W.bY,Range:W.d5,HTMLSelectElement:W.f4,HTMLTableCellElement:W.bw,HTMLTableDataCellElement:W.bw,HTMLTableHeaderCellElement:W.bw,HTMLTableElement:W.de,HTMLTableRowElement:W.df,HTMLTableSectionElement:W.fj,HTMLTemplateElement:W.c4,Touch:W.aF,TouchEvent:W.at,TouchList:W.fq,CompositionEvent:W.b8,FocusEvent:W.b8,TextEvent:W.b8,UIEvent:W.b8,WheelEvent:W.aI,Window:W.cg,DOMWindow:W.cg,Attr:W.ch,ClientRect:W.dw,DOMRect:W.dw,NamedNodeMap:W.dC,MozNamedAttrMap:W.dC,SVGScriptElement:P.c0,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,WebGLBuffer:P.cw,WebGLFramebuffer:P.cH,WebGLProgram:P.d4,WebGLRenderingContext:P.bu,WebGLShader:P.da,WebGLUniformLocation:P.dp})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.jm,[])
else X.jm([])})})()
//# sourceMappingURL=test.dart.js.map
