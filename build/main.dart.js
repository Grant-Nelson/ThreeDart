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
a[c]=function(){a[c]=function(){H.ev(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.cH(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={cv:function cv(a){this.a=a},t:function t(a){this.a=a},b4:function b4(){},aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},ax:function ax(){},aL:function aL(){},aK:function aK(){},
ar:function(a){var u,t
u=H.u(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ej:function(a){return v.types[H.D(a)]},
eQ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.v(a).$icw},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aT(a)
if(typeof u!=="string")throw H.d(H.a0(a))
return u},
dQ:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ct(u)
t=u[0]
s=u[1]
return new H.bp(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ab:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ac:function(a){return H.dN(a)+H.cE(H.V(a),0,null)},
dN:function(a){var u,t,s,r,q,p,o,n,m
u=J.v(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.q||!!u.$iaJ){p=C.l(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ar(r.length>1&&C.e.G(r,0)===36?C.e.ae(r,1):r)},
cY:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
dP:function(a){var u,t,s,r
u=H.h([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.aq)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.a0(r))
if(r<=65535)C.a.i(u,r)
else if(r<=1114111){C.a.i(u,55296+(C.d.S(r-65536,10)&1023))
C.a.i(u,56320+(r&1023))}else throw H.d(H.a0(r))}return H.cY(u)},
cZ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.a0(s))
if(s<0)throw H.d(H.a0(s))
if(s>65535)return H.dP(a)}return H.cY(a)},
dO:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.S(u,10))>>>0,56320|u&1023)}throw H.d(P.ad(a,0,1114111,null,null))},
ek:function(a){throw H.d(H.a0(a))},
q:function(a,b){if(a==null)J.co(a)
throw H.d(H.an(a,b))},
an:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.L(!0,b,"index",null)
u=H.D(J.co(a))
if(!(b<0)){if(typeof u!=="number")return H.ek(u)
t=b>=u}else t=!0
if(t)return P.dJ(b,a,"index",null,u)
return P.bo(b,"index",null)},
ee:function(a,b,c){if(a>c)return new P.Y(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.Y(a,c,!0,b,"end","Invalid value")
return new P.L(!0,b,"end",null)},
a0:function(a){return new P.L(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.aG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.dp})
u.name=""}else u.toString=H.dp
return u},
dp:function(){return J.aT(this.dartException)},
cl:function(a){throw H.d(a)},
aq:function(a){throw H.d(P.aZ(a))},
I:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.h([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
d1:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cW:function(a,b){return new H.bm(a,b==null?null:b.method)},
cx:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.bd(a,t,u?null:b.receiver)},
as:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.cm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.S(s,16)&8191)===10)switch(r){case 438:return u.$1(H.cx(H.e(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.cW(H.e(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.dr()
p=$.ds()
o=$.dt()
n=$.du()
m=$.dx()
l=$.dy()
k=$.dw()
$.dv()
j=$.dA()
i=$.dz()
h=q.u(t)
if(h!=null)return u.$1(H.cx(H.u(t),h))
else{h=p.u(t)
if(h!=null){h.method="call"
return u.$1(H.cx(H.u(t),h))}else{h=o.u(t)
if(h==null){h=n.u(t)
if(h==null){h=m.u(t)
if(h==null){h=l.u(t)
if(h==null){h=k.u(t)
if(h==null){h=n.u(t)
if(h==null){h=j.u(t)
if(h==null){h=i.u(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.cW(H.u(t),h))}}return u.$1(new H.bI(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.aH()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.L(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.aH()
return a},
ao:function(a){var u
if(a==null)return new H.aQ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.aQ(a)},
eo:function(a,b,c,d,e,f){H.p(a,"$ics")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.cr("Unsupported number of arguments for wrapped closure"))},
aR:function(a,b){var u
H.D(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eo)
a.$identity=u
return u},
dH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.v(d).$ii){u.$reflectionInfo=d
s=H.dQ(u).r}else s=d
r=e?Object.create(new H.bw().constructor.prototype):Object.create(new H.a2(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.G
if(typeof p!=="number")return p.w()
$.G=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.cT(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ej,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.cS:H.cp
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.cT(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
dE:function(a,b,c,d){var u=H.cp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.dG(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.dE(t,!r,u,b)
if(t===0){r=$.G
if(typeof r!=="number")return r.w()
$.G=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.a3
if(q==null){q=H.aX("self")
$.a3=q}return new Function(r+H.e(q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.G
if(typeof r!=="number")return r.w()
$.G=r+1
o+=r
r="return function("+o+"){return this."
q=$.a3
if(q==null){q=H.aX("self")
$.a3=q}return new Function(r+H.e(q)+"."+H.e(u)+"("+o+");}")()},
dF:function(a,b,c,d){var u,t
u=H.cp
t=H.cS
switch(b?-1:a){case 0:throw H.d(new H.bq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
dG:function(a,b){var u,t,s,r,q,p,o,n
u=$.a3
if(u==null){u=H.aX("self")
$.a3=u}t=$.cR
if(t==null){t=H.aX("receiver")
$.cR=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.dF(r,!p,s,b)
if(r===1){u="return function(){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+");"
t=$.G
if(typeof t!=="number")return t.w()
$.G=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+", "+n+");"
t=$.G
if(typeof t!=="number")return t.w()
$.G=t+1
return new Function(u+t+"}")()},
cH:function(a,b,c,d,e,f,g){return H.dH(a,b,H.D(c),d,!!e,!!f,g)},
cp:function(a){return a.a},
cS:function(a){return a.c},
aX:function(a){var u,t,s,r,q
u=new H.a2("self","target","receiver","name")
t=J.ct(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.J(a,"String"))},
eR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.J(a,"num"))},
eM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.J(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.J(a,"int"))},
dl:function(a,b){throw H.d(H.J(a,H.ar(H.u(b).substring(2))))},
p:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.dl(a,b)},
cK:function(a){if(a==null)return a
if(!!J.v(a).$ii)return a
throw H.d(H.J(a,"List<dynamic>"))},
ep:function(a,b){var u
if(a==null)return a
u=J.v(a)
if(!!u.$ii)return a
if(u[b])return a
H.dl(a,b)},
dd:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.D(u)]
else return a.$S()}return},
aS:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.dd(J.v(a))
if(u==null)return!1
return H.d6(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.cB)return a
$.cB=!0
try{if(H.aS(a,b))return a
u=H.ck(b)
t=H.J(a,u)
throw H.d(t)}finally{$.cB=!1}},
cI:function(a,b){if(a!=null&&!H.cG(a,b))H.cl(H.J(a,H.ck(b)))
return a},
J:function(a,b){return new H.bG("TypeError: "+P.cq(a)+": type '"+H.e9(a)+"' is not a subtype of type '"+b+"'")},
e9:function(a){var u,t
u=J.v(a)
if(!!u.$ia4){t=H.dd(u)
if(t!=null)return H.ck(t)
return"Closure"}return H.ac(a)},
ev:function(a){throw H.d(new P.b0(H.u(a)))},
df:function(a){return v.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
V:function(a){if(a==null)return
return a.$ti},
eP:function(a,b,c){return H.a1(a["$a"+H.e(c)],H.V(b))},
ei:function(a,b,c,d){var u
H.u(c)
H.D(d)
u=H.a1(a["$a"+H.e(c)],H.V(b))
return u==null?null:u[d]},
dg:function(a,b,c){var u
H.u(b)
H.D(c)
u=H.a1(a["$a"+H.e(b)],H.V(a))
return u==null?null:u[c]},
l:function(a,b){var u
H.D(b)
u=H.V(a)
return u==null?null:u[b]},
ck:function(a){return H.U(a,null)},
U:function(a,b){var u,t
H.z(b,"$ii",[P.k],"$ai")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ar(a[0].name)+H.cE(a,1,b)
if(typeof a=="function")return H.ar(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.q(b,t)
return H.e(b[t])}if('func' in a)return H.e2(a,b)
if('futureOr' in a)return"FutureOr<"+H.U("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
e2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.z(b,"$ii",u,"$ai")
if("bounds" in a){t=a.bounds
if(b==null){b=H.h([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.i(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.q(b,m)
o=C.e.w(o,b[m])
l=t[p]
if(l!=null&&l!==P.j)o+=" extends "+H.U(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.U(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.U(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.U(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.ef(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.u(u[g])
i=i+h+H.U(d[c],b)+(" "+H.e(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
cE:function(a,b,c){var u,t,s,r,q,p
H.z(c,"$ii",[P.k],"$ai")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.U(p,c)}return"<"+u.h(0)+">"},
a1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cF:function(a,b,c,d){var u,t
H.u(b)
H.cK(c)
H.u(d)
if(a==null)return!1
u=H.V(a)
t=J.v(a)
if(t[b]==null)return!1
return H.db(H.a1(t[d],u),null,c,null)},
z:function(a,b,c,d){H.u(b)
H.cK(c)
H.u(d)
if(a==null)return a
if(H.cF(a,b,c,d))return a
throw H.d(H.J(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ar(b.substring(2))+H.cE(c,0,null),v.mangledGlobalNames)))},
db:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.F(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.F(a[t],b,c[t],d))return!1
return!0},
eN:function(a,b,c){return a.apply(b,H.a1(J.v(b)["$a"+H.e(c)],H.V(b)))},
di:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="j"||a.name==="r"||a===-1||a===-2||H.di(u)}return!1},
cG:function(a,b){var u,t
if(a==null)return b==null||b.name==="j"||b.name==="r"||b===-1||b===-2||H.di(b)
if(b==null||b===-1||b.name==="j"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aS(a,b)}u=J.v(a).constructor
t=H.V(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.F(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.cG(a,b))throw H.d(H.J(a,H.ck(b)))
return a},
F:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="j"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="j"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.F(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="r")return!0
if('func' in c)return H.d6(a,b,c,d)
if('func' in a)return c.name==="cs"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.F("type" in a?a.type:null,b,s,d)
else if(H.F(a,b,s,d))return!0
else{if(!('$i'+"a9" in t.prototype))return!1
r=t.prototype["$a"+"a9"]
q=H.a1(r,u?a.slice(1):null)
return H.F(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.db(H.a1(m,u),b,p,d)},
d6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.F(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.F(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.F(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.F(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.es(h,b,g,d)},
es:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.F(c[r],d,a[r],b))return!1}return!0},
eO:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
eq:function(a){var u,t,s,r,q,p
u=H.u($.dh.$1(a))
t=$.cc[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ci[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.u($.da.$2(a,u))
if(u!=null){t=$.cc[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ci[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.cj(s)
$.cc[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ci[u]=s
return s}if(q==="-"){p=H.cj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dk(a,s)
if(q==="*")throw H.d(P.d2(u))
if(v.leafTags[u]===true){p=H.cj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dk(a,s)},
dk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cL(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
cj:function(a){return J.cL(a,!1,null,!!a.$icw)},
er:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.cj(u)
else return J.cL(u,c,null,null)},
em:function(){if(!0===$.cJ)return
$.cJ=!0
H.en()},
en:function(){var u,t,s,r,q,p,o,n
$.cc=Object.create(null)
$.ci=Object.create(null)
H.el()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.dm.$1(q)
if(p!=null){o=H.er(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
el:function(){var u,t,s,r,q,p,o
u=C.w()
u=H.a_(C.t,H.a_(C.y,H.a_(C.k,H.a_(C.k,H.a_(C.x,H.a_(C.u,H.a_(C.v(C.l),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.dh=new H.cf(q)
$.da=new H.cg(p)
$.dm=new H.ch(o)},
a_:function(a,b){return a(b)||b},
dM:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(new P.b7("Illegal RegExp pattern ("+String(r)+")",a,null))},
eu:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
dn:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
bp:function bp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
bE:function bE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bm:function bm(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a){this.a=a},
cm:function cm(a){this.a=a},
aQ:function aQ(a){this.a=a
this.b=null},
a4:function a4(){},
bC:function bC(){},
bw:function bw(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a){this.a=a},
bq:function bq(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
be:function be(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bf:function bf(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.an(b,a))},
e1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ee(a,b,c))
return b},
aF:function aF(){},
aD:function aD(){},
aE:function aE(){},
bl:function bl(){},
aj:function aj(){},
ak:function ak(){},
ef:function(a){return J.dL(a?Object.keys(a):[],null)}},J={
cL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.cJ==null){H.em()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.d2("Return interceptor for "+H.e(t(a,u))))}r=a.constructor
q=r==null?null:r[$.cM()]
if(q!=null)return q
q=H.eq(a)
if(q!=null)return q
if(typeof a=="function")return C.z
t=Object.getPrototypeOf(a)
if(t==null)return C.n
if(t===Object.prototype)return C.n
if(typeof r=="function"){Object.defineProperty(r,$.cM(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
dL:function(a,b){return J.ct(H.h(a,[b]))},
ct:function(a){H.cK(a)
a.fixed$length=Array
return a},
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ay.prototype
return J.ba.prototype}if(typeof a=="string")return J.aa.prototype
if(a==null)return J.bb.prototype
if(typeof a=="boolean")return J.b9.prototype
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
de:function(a){if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
eg:function(a){if(a==null)return a
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
eh:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
dC:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).C(a,b)},
dD:function(a,b,c,d){return J.eh(a).al(a,b,c,d)},
cn:function(a){return J.v(a).gn(a)},
cO:function(a){return J.eg(a).gE(a)},
co:function(a){return J.de(a).gl(a)},
aT:function(a){return J.v(a).h(a)},
A:function A(){},
b9:function b9(){},
bb:function bb(){},
aA:function aA(){},
bn:function bn(){},
aJ:function aJ(){},
S:function S(){},
H:function H(a){this.$ti=a},
cu:function cu(a){this.$ti=a},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
az:function az(){},
ay:function ay(){},
ba:function ba(){},
aa:function aa(){}},P={
dV:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.eb()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.aR(new P.bN(u),1)).observe(t,{childList:true})
return new P.bM(u,t,s)}else if(self.setImmediate!=null)return P.ec()
return P.ed()},
dW:function(a){self.scheduleImmediate(H.aR(new P.bO(H.f(a,{func:1,ret:-1})),0))},
dX:function(a){self.setImmediate(H.aR(new P.bP(H.f(a,{func:1,ret:-1})),0))},
dY:function(a){P.cz(C.j,H.f(a,{func:1,ret:-1}))},
cz:function(a,b){var u
H.f(b,{func:1,ret:-1})
u=C.d.J(a.a,1000)
return P.e_(u<0?0:u,b)},
e_:function(a,b){var u=new P.c5(!0)
u.ak(a,b)
return u},
dZ:function(a,b){var u,t,s
b.a=1
try{a.ac(new P.bU(b),new P.bV(b),null)}catch(s){u=H.as(s)
t=H.ao(s)
P.et(new P.bW(b,u,t))}},
d4:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.p(a.c,"$iE")
if(u>=4){t=b.P()
b.a=a.a
b.c=a.c
P.ai(b,t)}else{t=H.p(b.c,"$iK")
b.a=2
b.c=a
a.a8(t)}},
ai:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.p(t.c,"$ix")
t=t.b
p=q.a
o=q.b
t.toString
P.c9(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ai(u.a,b)}t=u.a
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
if(k){H.p(m,"$ix")
t=t.b
p=m.a
o=m.b
t.toString
P.c9(null,null,t,p,o)
return}j=$.o
if(j!=l)$.o=l
else j=null
t=b.c
if(t===8)new P.c_(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.bZ(s,b,m).$0()}else if((t&2)!==0)new P.bY(u,s,b).$0()
if(j!=null)$.o=j
t=s.b
if(!!J.v(t).$ia9){if(t.a>=4){i=H.p(o.c,"$iK")
o.c=null
b=o.I(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.d4(t,o)
return}}h=b.b
i=H.p(h.c,"$iK")
h.c=null
b=h.I(i)
t=s.a
p=s.b
if(!t){H.n(p,H.l(h,0))
h.a=4
h.c=p}else{H.p(p,"$ix")
h.a=8
h.c=p}u.a=h
t=h}},
e5:function(a,b){if(H.aS(a,{func:1,args:[P.j,P.B]}))return H.f(a,{func:1,ret:null,args:[P.j,P.B]})
if(H.aS(a,{func:1,args:[P.j]}))return H.f(a,{func:1,ret:null,args:[P.j]})
throw H.d(P.cQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
e4:function(){var u,t
for(;u=$.Z,u!=null;){$.am=null
t=u.b
$.Z=t
if(t==null)$.al=null
u.a.$0()}},
e8:function(){$.cC=!0
try{P.e4()}finally{$.am=null
$.cC=!1
if($.Z!=null)$.cN().$1(P.dc())}},
d9:function(a){var u=new P.aN(H.f(a,{func:1,ret:-1}))
if($.Z==null){$.al=u
$.Z=u
if(!$.cC)$.cN().$1(P.dc())}else{$.al.b=u
$.al=u}},
e7:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.Z
if(u==null){P.d9(a)
$.am=$.al
return}t=new P.aN(a)
s=$.am
if(s==null){t.b=u
$.am=t
$.Z=t}else{t.b=s.b
s.b=t
$.am=t
if(t.b==null)$.al=t}},
et:function(a){var u,t
u={func:1,ret:-1}
H.f(a,u)
t=$.o
if(C.c===t){P.cb(null,null,C.c,a)
return}t.toString
P.cb(null,null,t,H.f(t.U(a),u))},
dU:function(a,b){var u,t
u={func:1,ret:-1}
H.f(b,u)
t=$.o
if(t===C.c){t.toString
return P.cz(a,b)}return P.cz(a,H.f(t.U(b),u))},
c9:function(a,b,c,d,e){var u={}
u.a=d
P.e7(new P.ca(u,e))},
d7:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.o
if(t===c)return d.$0()
$.o=c
u=t
try{t=d.$0()
return t}finally{$.o=u}},
d8:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.n(e,g)
t=$.o
if(t===c)return d.$1(e)
$.o=c
u=t
try{t=d.$1(e)
return t}finally{$.o=u}},
e6:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.n(e,h)
H.n(f,i)
t=$.o
if(t===c)return d.$2(e,f)
$.o=c
u=t
try{t=d.$2(e,f)
return t}finally{$.o=u}},
cb:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.U(d):c.ax(d,-1)
P.d9(d)},
bN:function bN(a){this.a=a},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a){this.a=a},
bP:function bP(a){this.a=a},
c5:function c5(a){this.a=a
this.b=null
this.c=0},
c6:function c6(a,b){this.a=a
this.b=b},
K:function K(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
E:function E(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
bT:function bT(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a){this.a=a},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a
this.b=null},
bx:function bx(){},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
by:function by(){},
bz:function bz(){},
x:function x(a,b){this.a=a
this.b=b},
c8:function c8(){},
ca:function ca(a,b){this.a=a
this.b=b},
c1:function c1(){},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function(a,b,c){var u,t
if(P.cD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.h([],[P.k])
t=$.at()
C.a.i(t,a)
try{P.e3(a,u)}finally{if(0>=t.length)return H.q(t,-1)
t.pop()}t=P.d0(b,H.ep(u,"$iy"),", ")+c
return t.charCodeAt(0)==0?t:t},
cU:function(a,b,c){var u,t,s
if(P.cD(a))return b+"..."+c
u=new P.af(b)
t=$.at()
C.a.i(t,a)
try{s=u
s.a=P.d0(s.a,a,", ")}finally{if(0>=t.length)return H.q(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cD:function(a){var u,t
for(u=0;t=$.at(),u<t.length;++u)if(a===t[u])return!0
return!1},
e3:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.z(b,"$ii",[P.k],"$ai")
u=a.gE(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.p())return
r=H.e(u.gt())
C.a.i(b,r)
t+=r.length+2;++s}if(!u.p()){if(s<=5)return
if(0>=b.length)return H.q(b,-1)
q=b.pop()
if(0>=b.length)return H.q(b,-1)
p=b.pop()}else{o=u.gt();++s
if(!u.p()){if(s<=4){C.a.i(b,H.e(o))
return}q=H.e(o)
if(0>=b.length)return H.q(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gt();++s
for(;u.p();o=n,n=m){m=u.gt();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.q(b,-1)
t-=b.pop().length+2;--s}C.a.i(b,"...")
return}}p=H.e(o)
q=H.e(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.q(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.i(b,l)
C.a.i(b,p)
C.a.i(b,q)},
cV:function(a){var u,t
u={}
if(P.cD(a))return"{...}"
t=new P.af("")
try{C.a.i($.at(),a)
t.a+="{"
u.a=!0
a.aF(0,new P.bj(u,t))
t.a+="}"}finally{u=$.at()
if(0>=u.length)return H.q(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
bh:function bh(){},
M:function M(){},
bi:function bi(){},
bj:function bj(a,b){this.a=a
this.b=b},
bk:function bk(){},
aP:function aP(){},
a5:function a5(){},
aw:function aw(){},
b5:function b5(){},
bK:function bK(a){this.a=a},
bL:function bL(){},
c7:function c7(a){this.b=this.a=0
this.c=a},
dI:function(a){if(a instanceof H.a4)return a.h(0)
return"Instance of '"+H.ac(a)+"'"},
cy:function(a,b,c){var u,t
u=P.m
H.z(a,"$iy",[u],"$ay")
if(a.constructor===Array){H.z(a,"$iH",[u],"$aH")
t=a.length
c=P.d_(b,c,t,null,null,null)
return H.cZ(b>0||c<t?C.a.ad(a,b,c):a)}return P.dT(a,b,c)},
dT:function(a,b,c){var u,t,s
H.z(a,"$iy",[P.m],"$ay")
u=J.cO(a)
for(t=0;t<b;++t)if(!u.p())throw H.d(P.ad(b,0,t,null,null))
s=[]
for(;u.p();)s.push(u.gt())
return H.cZ(s)},
dR:function(a,b,c){return new H.bc(a,H.dM(a,!1,!0,!1))},
d0:function(a,b,c){var u=J.cO(b)
if(!u.p())return a
if(c.length===0){do a+=H.e(u.gt())
while(u.p())}else{a+=H.e(u.gt())
for(;u.p();)a=a+c+H.e(u.gt())}return a},
d5:function(a,b,c,d){var u,t,s,r,q,p
H.z(a,"$ii",[P.m],"$ai")
if(c===C.h){u=$.dB().b
u=u.test(b)}else u=!1
if(u)return b
t=C.p.aB(H.n(b,H.dg(c,"a5",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.q(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dO(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
cq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aT(a)
if(typeof a==="string")return JSON.stringify(a)
return P.dI(a)},
cQ:function(a,b,c){return new P.L(!0,a,b,c)},
bo:function(a,b,c){return new P.Y(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.Y(b,c,!0,a,d,"Invalid value")},
d_:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.ad(b,a,c,"end",f))
return b}return c},
dJ:function(a,b,c,d,e){var u=H.D(e==null?J.co(b):e)
return new P.b8(b,u,!0,a,c,"Index out of range")},
aM:function(a){return new P.bJ(a)},
d2:function(a){return new P.bH(a)},
aZ:function(a){return new P.aY(a)},
cr:function(a){return new P.bS(a)},
P:function P(){},
cd:function cd(){},
a8:function a8(a){this.a=a},
b2:function b2(){},
b3:function b3(){},
W:function W(){},
aG:function aG(){},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b8:function b8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bJ:function bJ(a){this.a=a},
bH:function bH(a){this.a=a},
aY:function aY(a){this.a=a},
aH:function aH(){},
b0:function b0(a){this.a=a},
bS:function bS(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
y:function y(){},
i:function i(){},
r:function r(){},
ap:function ap(){},
j:function j(){},
B:function B(){},
k:function k(){},
af:function af(a){this.a=a}},W={
cP:function(a){var u=document.createElement("a")
return u},
d3:function(a,b,c,d,e){var u,t
u=W.ea(new W.bR(c),W.a)
t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.a]})
if(t)J.dD(a,b,u,!1)}return new W.bQ(a,b,u,!1,[e])},
ea:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.o
if(u===C.c)return a
return u.ay(a,b)},
c:function c(){},
au:function au(){},
aV:function aV(){},
av:function av(){},
Q:function Q(){},
a6:function a6(){},
b_:function b_(){},
a7:function a7(){},
b1:function b1(){},
b:function b(){},
a:function a(){},
R:function R(){},
b6:function b6(){},
C:function C(){},
br:function br(){},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bQ:function bQ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bR:function bR(a){this.a=a},
aO:function aO(){}},V={
w:function(a){var u=new V.bs()
u.ai(a)
return u},
aU:function aU(){},
N:function N(){},
aC:function aC(){},
O:function O(){this.a=null},
bs:function bs(){this.a=null},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b){this.a=a
this.b=b
this.c=null},
bD:function bD(){this.c=this.b=this.a=null},
ah:function ah(a){this.b=a
this.a=this.c=null},
dS:function(a,b){var u=new V.bt()
u.aj(a,!1)
return u},
bt:function bt(){this.b=this.a=null},
bv:function bv(a){this.a=a},
bu:function bu(a){this.a=a}},F={
dj:function(){var u,t,s,r,q
u=V.dS("3Dart",!1)
t=document
s=t.createElement("div")
s.className="pageImage"
s.id="3Dart"
r=W.cP(null)
r.href="#3Dart"
q=t.createElement("img")
q.src="resources/ThreeDart.png"
C.o.m(r,q)
C.b.m(s,r)
C.b.m(u.a,s)
t=[P.k]
u.q(H.h(["Currently 3Dart is still in beta."],t))
u.q(H.h(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ","were you can download and play with 3Dart right now. Please feel free to help ","develop and contribute to the 3Dart code and community."],t))
u.T(2,"Examples")
u.q(H.h(["[3Dart Craft|./examples/craft/]"],t))
u.q(H.h(["[3Dart Chess|./examples/chess/]"],t))
u.q(H.h(["[Hypersphere|./examples/hypersphere/]"],t))
u.T(2,"Tutorials")
u.q(H.h(["[Getting Started|./tutorials/tutorial1/]"],t))
u.aa(6,"Tutorials still need to be written","")
u.q(H.h(["Material Lighting"],t))
u.q(H.h(["Advanced Movers"],t))
u.q(H.h(["Advanced Shapes"],t))
u.q(H.h(["Advanced Techniques"],t))
u.q(H.h(["Scene Compositing"],t))
u.T(2,"Tests")
u.q(H.h(["[Tests|./tests/]"],t))}}
var w=[C,H,J,P,W,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cv.prototype={}
J.A.prototype={
C:function(a,b){return a===b},
gn:function(a){return H.ab(a)},
h:function(a){return"Instance of '"+H.ac(a)+"'"}}
J.b9.prototype={
h:function(a){return String(a)},
gn:function(a){return a?519018:218159},
$iP:1}
J.bb.prototype={
C:function(a,b){return null==b},
h:function(a){return"null"},
gn:function(a){return 0},
$ir:1}
J.aA.prototype={
gn:function(a){return 0},
h:function(a){return String(a)}}
J.bn.prototype={}
J.aJ.prototype={}
J.S.prototype={
h:function(a){var u=a[$.dq()]
if(u==null)return this.ag(a)
return"JavaScript function for "+H.e(J.aT(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ics:1}
J.H.prototype={
i:function(a,b){H.n(b,H.l(a,0))
if(!!a.fixed$length)H.cl(P.aM("add"))
a.push(b)},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.D(u,t,H.e(a[t]))
return u.join(b)},
aJ:function(a){return this.k(a,"")},
ad:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ad(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.l(a,0)])
return H.h(a.slice(b,c),[H.l(a,0)])},
h:function(a){return P.cU(a,"[","]")},
gE:function(a){return new J.aW(a,a.length,0,[H.l(a,0)])},
gn:function(a){return H.ab(a)},
gl:function(a){return a.length},
D:function(a,b,c){H.n(c,H.l(a,0))
if(!!a.immutable$list)H.cl(P.aM("indexed set"))
if(b>=a.length||!1)throw H.d(H.an(a,b))
a[b]=c},
$iy:1,
$ii:1}
J.cu.prototype={}
J.aW.prototype={
gt:function(){return this.d},
p:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.aq(u))
s=this.c
if(s>=t){this.sa7(null)
return!1}this.sa7(u[s]);++this.c
return!0},
sa7:function(a){this.d=H.n(a,H.l(this,0))}}
J.az.prototype={
W:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gY(b)
if(this.gY(a)===u)return 0
if(this.gY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gY:function(a){return a===0?1/a<0:a<0},
aL:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.aM(""+a+".round()"))},
az:function(a,b,c){if(C.d.W(b,c)>0)throw H.d(H.a0(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
J:function(a,b){return(a|0)===a?a/b|0:this.au(a,b)},
au:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.aM("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
S:function(a,b){var u
if(a>0)u=this.as(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
as:function(a,b){return b>31?0:a>>>b},
$iap:1}
J.ay.prototype={$im:1}
J.ba.prototype={}
J.aa.prototype={
V:function(a,b){if(b<0)throw H.d(H.an(a,b))
if(b>=a.length)H.cl(H.an(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.d(H.an(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.cQ(b,null,null))
return a+b},
a_:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bo(b,null,null))
if(b>c)throw H.d(P.bo(b,null,null))
if(c>a.length)throw H.d(P.bo(c,null,null))
return a.substring(b,c)},
ae:function(a,b){return this.a_(a,b,null)},
h:function(a){return a},
gn:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$icX:1,
$ik:1}
H.t.prototype={
gl:function(a){return this.a.length},
A:function(a,b){return C.e.V(this.a,b)},
$aaL:function(){return[P.m]},
$aM:function(){return[P.m]},
$ay:function(){return[P.m]},
$ai:function(){return[P.m]}}
H.b4.prototype={}
H.aB.prototype={
gt:function(){return this.d},
p:function(){var u,t,s,r
u=this.a
t=J.de(u)
s=t.gl(u)
if(this.b!==s)throw H.d(P.aZ(u))
r=this.c
if(r>=s){this.sa1(null)
return!1}this.sa1(t.aD(u,r));++this.c
return!0},
sa1:function(a){this.d=H.n(a,H.l(this,0))}}
H.ax.prototype={}
H.aL.prototype={}
H.aK.prototype={}
H.bp.prototype={}
H.bE.prototype={
u:function(a){var u,t,s
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
H.bm.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bd.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.e(this.a)+")"}}
H.bI.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cm.prototype={
$1:function(a){if(!!J.v(a).$iW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.aQ.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iB:1}
H.a4.prototype={
h:function(a){return"Closure '"+H.ac(this).trim()+"'"},
$ics:1,
gaR:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bC.prototype={}
H.bw.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ar(u)+"'"}}
H.a2.prototype={
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.a2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gn:function(a){var u,t
u=this.c
if(u==null)t=H.ab(this.a)
else t=typeof u!=="object"?J.cn(u):H.ab(u)
return(t^H.ab(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.ac(u)+"'")}}
H.bG.prototype={
h:function(a){return this.a}}
H.bq.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.X.prototype={
gl:function(a){return this.a},
aA:function(a){var u
if((a&0x3ffffff)===a){u=this.c
if(u==null)return!1
return this.am(u,a)}else return this.aH(a)},
aH:function(a){var u=this.d
if(u==null)return!1
return this.X(this.M(u,C.d.gn(a)&0x3ffffff),a)>=0},
A:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.H(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.H(r,b)
s=t==null?null:t.b
return s}else return this.aI(b)},
aI:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.M(u,J.cn(a)&0x3ffffff)
s=this.X(t,a)
if(s<0)return
return t[s].b},
D:function(a,b,c){var u,t,s,r,q,p
H.n(b,H.l(this,0))
H.n(c,H.l(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.N()
this.b=u}this.a3(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.N()
this.c=t}this.a3(t,b,c)}else{s=this.d
if(s==null){s=this.N()
this.d=s}r=J.cn(b)&0x3ffffff
q=this.M(s,r)
if(q==null)this.R(s,r,[this.O(b,c)])
else{p=this.X(q,b)
if(p>=0)q[p].b=c
else q.push(this.O(b,c))}}},
aF:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.l(this,0),H.l(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aZ(this))
u=u.c}},
a3:function(a,b,c){var u
H.n(b,H.l(this,0))
H.n(c,H.l(this,1))
u=this.H(a,b)
if(u==null)this.R(a,b,this.O(b,c))
else u.b=c},
O:function(a,b){var u,t
u=new H.be(H.n(a,H.l(this,0)),H.n(b,H.l(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
X:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.dC(a[t].a,b))return t
return-1},
h:function(a){return P.cV(this)},
H:function(a,b){return a[b]},
M:function(a,b){return a[b]},
R:function(a,b,c){a[b]=c},
an:function(a,b){delete a[b]},
am:function(a,b){return this.H(a,b)!=null},
N:function(){var u=Object.create(null)
this.R(u,"<non-identifier-key>",u)
this.an(u,"<non-identifier-key>")
return u}}
H.be.prototype={}
H.bf.prototype={
gl:function(a){return this.a.a},
gE:function(a){var u,t
u=this.a
t=new H.bg(u,u.r,this.$ti)
t.c=u.e
return t}}
H.bg.prototype={
gt:function(){return this.d},
p:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aZ(u))
else{u=this.c
if(u==null){this.sa2(null)
return!1}else{this.sa2(u.a)
this.c=this.c.c
return!0}}},
sa2:function(a){this.d=H.n(a,H.l(this,0))}}
H.cf.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.cg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.ch.prototype={
$1:function(a){return this.a(H.u(a))},
$S:7}
H.bc.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
$icX:1}
H.aF.prototype={}
H.aD.prototype={
gl:function(a){return a.length},
$icw:1,
$acw:function(){}}
H.aE.prototype={
$aax:function(){return[P.m]},
$aM:function(){return[P.m]},
$iy:1,
$ay:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]}}
H.bl.prototype={
gl:function(a){return a.length},
A:function(a,b){H.e0(b,a,a.length)
return a[b]}}
H.aj.prototype={}
H.ak.prototype={}
P.bN.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:4}
P.bM.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.bO.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bP.prototype={
$0:function(){this.a.$0()},
$S:0}
P.c5.prototype={
ak:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aR(new P.c6(this,b),0),a)
else throw H.d(P.aM("`setTimeout()` not found."))}}
P.c6.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.K.prototype={
aK:function(a){if(this.c!==6)return!0
return this.b.b.Z(H.f(this.d,{func:1,ret:P.P,args:[P.j]}),a.a,P.P,P.j)},
aG:function(a){var u,t,s,r
u=this.e
t=P.j
s={futureOr:1,type:H.l(this,1)}
r=this.b.b
if(H.aS(u,{func:1,args:[P.j,P.B]}))return H.cI(r.aM(u,a.a,a.b,null,t,P.B),s)
else return H.cI(r.Z(H.f(u,{func:1,args:[P.j]}),a.a,null,t),s)}}
P.E.prototype={
ac:function(a,b,c){var u,t,s,r
u=H.l(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.o
if(t!==C.c){t.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.e5(b,t)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.E(0,$.o,[c])
r=b==null?1:3
this.a4(new P.K(s,r,a,b,[u,c]))
return s},
aP:function(a,b){return this.ac(a,null,b)},
a4:function(a){var u,t
u=this.a
if(u<=1){a.a=H.p(this.c,"$iK")
this.c=a}else{if(u===2){t=H.p(this.c,"$iE")
u=t.a
if(u<4){t.a4(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.cb(null,null,u,H.f(new P.bT(this,a),{func:1,ret:-1}))}},
a8:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.p(this.c,"$iK")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.p(this.c,"$iE")
t=p.a
if(t<4){p.a8(a)
return}this.a=t
this.c=p.c}u.a=this.I(a)
t=this.b
t.toString
P.cb(null,null,t,H.f(new P.bX(u,this),{func:1,ret:-1}))}},
P:function(){var u=H.p(this.c,"$iK")
this.c=null
return this.I(u)},
I:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
a5:function(a){var u,t,s
u=H.l(this,0)
H.cI(a,{futureOr:1,type:u})
t=this.$ti
if(H.cF(a,"$ia9",t,"$aa9"))if(H.cF(a,"$iE",t,null))P.d4(a,this)
else P.dZ(a,this)
else{s=this.P()
H.n(a,u)
this.a=4
this.c=a
P.ai(this,s)}},
a6:function(a,b){var u
H.p(b,"$iB")
u=this.P()
this.a=8
this.c=new P.x(a,b)
P.ai(this,u)},
$ia9:1}
P.bT.prototype={
$0:function(){P.ai(this.a,this.b)},
$S:0}
P.bX.prototype={
$0:function(){P.ai(this.b,this.a.a)},
$S:0}
P.bU.prototype={
$1:function(a){var u=this.a
u.a=0
u.a5(a)},
$S:4}
P.bV.prototype={
$2:function(a,b){H.p(b,"$iB")
this.a.a6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:9}
P.bW.prototype={
$0:function(){this.a.a6(this.b,this.c)},
$S:0}
P.c_.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ab(H.f(r.d,{func:1}),null)}catch(q){t=H.as(q)
s=H.ao(q)
if(this.d){r=H.p(this.a.a.c,"$ix").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.p(this.a.a.c,"$ix")
else p.b=new P.x(t,s)
p.a=!0
return}if(!!J.v(u).$ia9){if(u instanceof P.E&&u.a>=4){if(u.a===8){r=this.b
r.b=H.p(u.c,"$ix")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.aP(new P.c0(o),null)
r.a=!1}},
$S:1}
P.c0.prototype={
$1:function(a){return this.a},
$S:10}
P.bZ.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.l(s,0)
q=H.n(this.c,r)
p=H.l(s,1)
this.a.b=s.b.b.Z(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.as(o)
t=H.ao(o)
s=this.a
s.b=new P.x(u,t)
s.a=!0}},
$S:1}
P.bY.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.p(this.a.a.c,"$ix")
r=this.c
if(r.aK(u)&&r.e!=null){q=this.b
q.b=r.aG(u)
q.a=!1}}catch(p){t=H.as(p)
s=H.ao(p)
r=H.p(this.a.a.c,"$ix")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.x(t,s)
n.a=!0}},
$S:1}
P.aN.prototype={}
P.bx.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.E(0,$.o,[P.m])
u.a=0
s=H.l(this,0)
r=H.f(new P.bA(u,this),{func:1,ret:-1,args:[s]})
H.f(new P.bB(u,t),{func:1,ret:-1})
W.d3(this.a,this.b,r,!1,s)
return t}}
P.bA.prototype={
$1:function(a){H.n(a,H.l(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.r,args:[H.l(this.b,0)]}}}
P.bB.prototype={
$0:function(){this.b.a5(this.a.a)},
$S:0}
P.by.prototype={}
P.bz.prototype={}
P.x.prototype={
h:function(a){return H.e(this.a)},
$iW:1}
P.c8.prototype={$ieI:1}
P.ca.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.aG()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.h(0)
throw s},
$S:0}
P.c1.prototype={
aN:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
try{if(C.c===$.o){a.$0()
return}P.d7(null,null,this,a,-1)}catch(s){u=H.as(s)
t=H.ao(s)
P.c9(null,null,this,u,H.p(t,"$iB"))}},
aO:function(a,b,c){var u,t,s
H.f(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.c===$.o){a.$1(b)
return}P.d8(null,null,this,a,b,-1,c)}catch(s){u=H.as(s)
t=H.ao(s)
P.c9(null,null,this,u,H.p(t,"$iB"))}},
ax:function(a,b){return new P.c3(this,H.f(a,{func:1,ret:b}),b)},
U:function(a){return new P.c2(this,H.f(a,{func:1,ret:-1}))},
ay:function(a,b){return new P.c4(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ab:function(a,b){H.f(a,{func:1,ret:b})
if($.o===C.c)return a.$0()
return P.d7(null,null,this,a,b)},
Z:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.o===C.c)return a.$1(b)
return P.d8(null,null,this,a,b,c,d)},
aM:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.o===C.c)return a.$2(b,c)
return P.e6(null,null,this,a,b,c,d,e,f)}}
P.c3.prototype={
$0:function(){return this.a.ab(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.c2.prototype={
$0:function(){return this.a.aN(this.b)},
$S:1}
P.c4.prototype={
$1:function(a){var u=this.c
return this.a.aO(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.bh.prototype={$iy:1,$ii:1}
P.M.prototype={
gE:function(a){return new H.aB(a,this.gl(a),0,[H.ei(this,a,"M",0)])},
aD:function(a,b){return this.A(a,b)},
h:function(a){return P.cU(a,"[","]")}}
P.bi.prototype={}
P.bj.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.e(a)
u.a=t+": "
u.a+=H.e(b)},
$S:11}
P.bk.prototype={
gl:function(a){return this.a},
h:function(a){return P.cV(this)},
$iT:1}
P.aP.prototype={}
P.a5.prototype={}
P.aw.prototype={}
P.b5.prototype={
$aa5:function(){return[P.k,[P.i,P.m]]}}
P.bK.prototype={}
P.bL.prototype={
aC:function(a,b,c){var u,t,s
c=P.d_(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.c7(t)
if(s.ao(a,b,c)!==c)s.a9(C.e.V(a,c-1),0)
return new Uint8Array(t.subarray(0,H.e1(0,s.b,t.length)))},
aB:function(a){return this.aC(a,0,null)},
$aaw:function(){return[P.k,[P.i,P.m]]}}
P.c7.prototype={
a9:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.q(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.q(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.q(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.q(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.q(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.q(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.q(u,t)
u[t]=128|a&63
return!1}},
ao:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.e.V(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.e.G(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.a9(r,C.e.G(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.q(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.q(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.q(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.q(u,q)
u[q]=128|r&63}}return s}}
P.P.prototype={}
P.cd.prototype={}
P.a8.prototype={
C:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a},
gn:function(a){return C.d.gn(this.a)},
h:function(a){var u,t,s,r,q
u=new P.b3()
t=this.a
if(t<0)return"-"+new P.a8(0-t).h(0)
s=u.$1(C.d.J(t,6e7)%60)
r=u.$1(C.d.J(t,1e6)%60)
q=new P.b2().$1(t%1e6)
return""+C.d.J(t,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.b2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:5}
P.b3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:5}
P.W.prototype={}
P.aG.prototype={
h:function(a){return"Throw of null."}}
P.L.prototype={
gL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gK:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gL()+t+s
if(!this.a)return r
q=this.gK()
p=P.cq(this.b)
return r+q+": "+p}}
P.Y.prototype={
gL:function(){return"RangeError"},
gK:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.e(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.e(u)
else if(s>u)t=": Not in range "+H.e(u)+".."+H.e(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.e(u)}return t}}
P.b8.prototype={
gL:function(){return"RangeError"},
gK:function(){var u,t
u=H.D(this.b)
if(typeof u!=="number")return u.aS()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gl:function(a){return this.f}}
P.bJ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bH.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aY.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cq(u)+"."}}
P.aH.prototype={
h:function(a){return"Stack Overflow"},
$iW:1}
P.b0.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bS.prototype={
h:function(a){return"Exception: "+this.a}}
P.b7.prototype={
h:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.e.a_(s,0,75)+"...":s
return t+"\n"+r}}
P.m.prototype={}
P.y.prototype={
gl:function(a){var u,t
u=this.gE(this)
for(t=0;u.p();)++t
return t},
h:function(a){return P.dK(this,"(",")")}}
P.i.prototype={$iy:1}
P.r.prototype={
gn:function(a){return P.j.prototype.gn.call(this,this)},
h:function(a){return"null"}}
P.ap.prototype={}
P.j.prototype={constructor:P.j,$ij:1,
C:function(a,b){return this===b},
gn:function(a){return H.ab(this)},
h:function(a){return"Instance of '"+H.ac(this)+"'"},
toString:function(){return this.h(this)}}
P.B.prototype={}
P.k.prototype={$icX:1}
P.af.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.au.prototype={
h:function(a){return String(a)}}
W.aV.prototype={
h:function(a){return String(a)}}
W.av.prototype={}
W.Q.prototype={
gl:function(a){return a.length}}
W.a6.prototype={
gl:function(a){return a.length}}
W.b_.prototype={}
W.a7.prototype={$ia7:1}
W.b1.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.R.prototype={
al:function(a,b,c,d){return a.addEventListener(b,H.aR(H.f(c,{func:1,args:[W.a]}),1),!1)},
$iR:1}
W.b6.prototype={
gl:function(a){return a.length}}
W.C.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.af(a):u},
m:function(a,b){return a.appendChild(b)},
$iC:1}
W.br.prototype={
gl:function(a){return a.length}}
W.cA.prototype={}
W.bQ.prototype={}
W.bR.prototype={
$1:function(a){return this.a.$1(H.p(a,"$ia"))},
$S:12}
W.aO.prototype={}
V.aU.prototype={
B:function(a){return!0},
h:function(a){return"all"},
$iN:1}
V.N.prototype={}
V.aC.prototype={
B:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.aq)(u),++s)if(u[s].B(a))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.aq)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s},
sv:function(a){this.a=H.z(a,"$ii",[V.N],"$ai")},
$iN:1}
V.O.prototype={
B:function(a){return!this.ah(a)},
h:function(a){return"!["+this.a0(0)+"]"}}
V.bs.prototype={
ai:function(a){var u,t
if(a.a.length<=0)throw H.d(P.cr("May not create a SetMatcher with zero characters."))
u=new H.X([P.m,P.P])
for(t=new H.aB(a,a.gl(a),0,[H.dg(a,"M",0)]);t.p();)u.D(0,t.d,!0)
this.saq(u)},
B:function(a){return this.a.aA(a)},
h:function(a){var u=this.a
return P.cy(new H.bf(u,[H.l(u,0)]),0,null)},
saq:function(a){this.a=H.z(a,"$iT",[P.m,P.P],"$aT")},
$iN:1}
V.ae.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.ah(this.a.j(0,b))
r.sv(H.h([],[V.N]))
r.c=!1
C.a.i(this.c,r)
return r},
aE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.aq)(u),++s){r=u[s]
if(r.B(a))return r}return},
h:function(a){return this.b},
saw:function(a){this.c=H.z(a,"$ii",[V.ah],"$ai")}}
V.aI.prototype={
h:function(a){var u,t
u=H.dn(this.b,"\n","\\n")
t=H.dn(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ag.prototype={
h:function(a){return this.b},
sap:function(a){var u=P.k
this.c=H.z(a,"$iT",[u,u],"$aT")}}
V.bD.prototype={
j:function(a,b){var u=this.a.A(0,b)
if(u==null){u=new V.ae(this,b)
u.saw(H.h([],[V.ah]))
u.d=null
this.a.D(0,b,u)}return u},
F:function(a){var u,t
u=this.b.A(0,a)
if(u==null){u=new V.ag(this,a)
t=P.k
u.sap(new H.X([t,t]))
this.b.D(0,a,u)}return u},
aQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.h([],[V.aI])
t=this.c
s=[P.m]
r=H.h([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.i(u,p)
return u}n=C.e.G(a,o)
m=t.aE(n)
if(m==null){if(p==null){C.a.i(r,n)
l=P.cy(r,0,null)
throw H.d(P.cr("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.i(u,p)
o=p.c+1
r=H.h([],s)
t=this.c
p=null}else{if(!m.c)C.a.i(r,n)
t=m.b
if(t.d!=null){l=P.cy(r,0,null)
k=t.d
j=k.c.A(0,l)
p=new V.aI(j==null?k.b:j,l,o)}++o}}},
sat:function(a){this.a=H.z(a,"$iT",[P.k,V.ae],"$aT")},
sav:function(a){this.b=H.z(a,"$iT",[P.k,V.ag],"$aT")}}
V.ah.prototype={
h:function(a){return this.b.b+": "+this.a0(0)}}
V.bt.prototype={
aj:function(a,b){var u,t,s,r,q,p
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.i).m(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.i.m(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.b.m(r,q)
if(a.length!==0)u.title=a
p=u.createElement("div")
this.a=p
C.b.m(q,p)
this.b=null
p=W.a
W.d3(u,"scroll",H.f(new V.bv(s),{func:1,ret:-1,args:[p]}),!1,p)},
aa:function(a,b,c){var u,t,s,r
a=H.D(C.d.az(a,0,4))
if(c.length===0)c=P.d5(C.m,b,C.h,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.cP(null)
r.href="#"+c
r.textContent=b
C.b.m(u,r)
C.b.m(this.a,u)},
T:function(a,b){return this.aa(a,b,"")},
q:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.z(a,"$ii",[P.k],"$ai")
this.ar()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.aQ(C.a.aJ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.aq)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.b.m(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.b.m(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.b.m(t,o)
break
case"Link":n=p.b
if(H.eu(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.q(m,1)
l.href=H.u(m[1])
l.textContent=H.u(m[0])
C.b.m(t,l)}else{k=P.d5(C.m,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.b.m(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.b.m(t,o)
break}}C.b.m(this.a,t)},
ar:function(){var u,t,s,r
if(this.b!=null)return
u=new V.bD()
t=P.k
u.sat(new H.X([t,V.ae]))
u.sav(new H.X([t,V.ag]))
u.c=null
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.w(new H.t("*"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.O()
r=[V.N]
s.sv(H.h([],r))
C.a.i(t.a,s)
t=V.w(new H.t("*"))
C.a.i(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.w(new H.t("*"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.w(new H.t("_"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.O()
s.sv(H.h([],r))
C.a.i(t.a,s)
t=V.w(new H.t("_"))
C.a.i(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.w(new H.t("_"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.w(new H.t("`"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.O()
s.sv(H.h([],r))
C.a.i(t.a,s)
t=V.w(new H.t("`"))
C.a.i(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.w(new H.t("`"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.w(new H.t("["))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.w(new H.t("|"))
C.a.i(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.w(new H.t("]"))
C.a.i(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.O()
t.sv(H.h([],r))
C.a.i(s.a,t)
s=V.w(new H.t("|]"))
C.a.i(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.w(new H.t("]"))
C.a.i(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.O()
t.sv(H.h([],r))
C.a.i(s.a,t)
s=V.w(new H.t("|]"))
C.a.i(t.a,s)
C.a.i(u.j(0,"Start").k(0,"Other").a,new V.aU())
s=u.j(0,"Other").k(0,"Other")
t=new V.O()
t.sv(H.h([],r))
C.a.i(s.a,t)
s=V.w(new H.t("*_`["))
C.a.i(t.a,s)
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
V.bv.prototype={
$1:function(a){P.dU(C.j,new V.bu(this.a))},
$S:13}
V.bu.prototype={
$0:function(){var u,t,s
u=C.r.aL(document.documentElement.scrollTop)
t=this.a.style
s=H.e(-0.01*u)+"px"
t.top=s},
$S:0};(function aliases(){var u=J.A.prototype
u.af=u.h
u=J.aA.prototype
u.ag=u.h
u=V.aC.prototype
u.ah=u.B
u.a0=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"eb","dW",2)
u(P,"ec","dX",2)
u(P,"ed","dY",2)
t(P,"dc","e8",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.j,null)
s(P.j,[H.cv,J.A,J.aW,P.aP,P.y,H.aB,H.ax,H.aL,H.bp,H.bE,P.W,H.a4,H.aQ,P.bk,H.be,H.bg,H.bc,P.c5,P.K,P.E,P.aN,P.bx,P.by,P.bz,P.x,P.c8,P.M,P.a5,P.c7,P.P,P.ap,P.a8,P.aH,P.bS,P.b7,P.i,P.r,P.B,P.k,P.af,W.b_,V.aU,V.N,V.aC,V.bs,V.ae,V.aI,V.ag,V.bD,V.bt])
s(J.A,[J.b9,J.bb,J.aA,J.H,J.az,J.aa,H.aF,W.R,W.aO,W.b1,W.a])
s(J.aA,[J.bn,J.aJ,J.S])
t(J.cu,J.H)
s(J.az,[J.ay,J.ba])
t(P.bh,P.aP)
t(H.aK,P.bh)
t(H.t,H.aK)
t(H.b4,P.y)
s(P.W,[H.bm,H.bd,H.bI,H.bG,H.bq,P.aG,P.L,P.bJ,P.bH,P.aY,P.b0])
s(H.a4,[H.cm,H.bC,H.cf,H.cg,H.ch,P.bN,P.bM,P.bO,P.bP,P.c6,P.bT,P.bX,P.bU,P.bV,P.bW,P.c_,P.c0,P.bZ,P.bY,P.bA,P.bB,P.ca,P.c3,P.c2,P.c4,P.bj,P.b2,P.b3,W.bR,V.bv,V.bu])
s(H.bC,[H.bw,H.a2])
t(P.bi,P.bk)
t(H.X,P.bi)
t(H.bf,H.b4)
t(H.aD,H.aF)
t(H.aj,H.aD)
t(H.ak,H.aj)
t(H.aE,H.ak)
t(H.bl,H.aE)
t(P.c1,P.c8)
t(P.aw,P.bz)
t(P.b5,P.a5)
t(P.bK,P.b5)
t(P.bL,P.aw)
s(P.ap,[P.cd,P.m])
s(P.L,[P.Y,P.b8])
t(W.C,W.R)
s(W.C,[W.b,W.Q])
t(W.c,W.b)
s(W.c,[W.au,W.aV,W.av,W.a7,W.b6,W.br])
t(W.a6,W.aO)
t(W.cA,P.bx)
t(W.bQ,P.by)
s(V.aC,[V.O,V.ah])
u(H.aK,H.aL)
u(H.aj,P.M)
u(H.ak,H.ax)
u(P.aP,P.M)
u(W.aO,W.b_)})();(function constants(){var u=hunkHelpers.makeConstList
C.o=W.au.prototype
C.i=W.av.prototype
C.b=W.a7.prototype
C.q=J.A.prototype
C.a=J.H.prototype
C.d=J.ay.prototype
C.r=J.az.prototype
C.e=J.aa.prototype
C.z=J.S.prototype
C.n=J.bn.prototype
C.f=J.aJ.prototype
C.p=new P.bL()
C.c=new P.c1()
C.j=new P.a8(0)
C.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.u=function(hooks) {
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
C.k=function(hooks) { return hooks; }

C.v=function(getTagFallback) {
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
C.w=function() {
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
C.x=function(hooks) {
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
C.y=function(hooks) {
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
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=H.h(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.h=new P.bK(!1)})();(function staticFields(){$.G=0
$.a3=null
$.cR=null
$.cB=!1
$.dh=null
$.da=null
$.dm=null
$.cc=null
$.ci=null
$.cJ=null
$.Z=null
$.al=null
$.am=null
$.cC=!1
$.o=C.c})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ew","dq",function(){return H.df("_$dart_dartClosure")})
u($,"ex","cM",function(){return H.df("_$dart_js")})
u($,"ey","dr",function(){return H.I(H.bF({
toString:function(){return"$receiver$"}}))})
u($,"ez","ds",function(){return H.I(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"eA","dt",function(){return H.I(H.bF(null))})
u($,"eB","du",function(){return H.I(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eE","dx",function(){return H.I(H.bF(void 0))})
u($,"eF","dy",function(){return H.I(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eD","dw",function(){return H.I(H.d1(null))})
u($,"eC","dv",function(){return H.I(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"eH","dA",function(){return H.I(H.d1(void 0))})
u($,"eG","dz",function(){return H.I(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"eJ","cN",function(){return P.dV()})
u($,"eL","at",function(){return[]})
u($,"eK","dB",function(){return P.dR("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})})()
var v={mangledGlobalNames:{m:"int",cd:"double",ap:"num",k:"String",P:"bool",r:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.r},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.r,args:[,]},{func:1,ret:P.k,args:[P.m]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,ret:P.r,args:[{func:1,ret:-1}]},{func:1,ret:P.r,args:[,],opt:[P.B]},{func:1,ret:[P.E,,],args:[,]},{func:1,ret:P.r,args:[,,]},{func:1,args:[W.a]},{func:1,ret:P.r,args:[W.a]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.A,MediaError:J.A,Navigator:J.A,NavigatorConcurrentHardware:J.A,NavigatorUserMediaError:J.A,OverconstrainedError:J.A,PositionError:J.A,SQLError:J.A,ArrayBufferView:H.aF,Uint8Array:H.bl,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.au,HTMLAreaElement:W.aV,HTMLBodyElement:W.av,CDATASection:W.Q,CharacterData:W.Q,Comment:W.Q,ProcessingInstruction:W.Q,Text:W.Q,CSSStyleDeclaration:W.a6,MSStyleCSSProperties:W.a6,CSS2Properties:W.a6,HTMLDivElement:W.a7,DOMException:W.b1,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Window:W.R,DOMWindow:W.R,EventTarget:W.R,HTMLFormElement:W.b6,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,HTMLSelectElement:W.br})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true})
H.aD.$nativeSuperclassTag="ArrayBufferView"
H.aj.$nativeSuperclassTag="ArrayBufferView"
H.ak.$nativeSuperclassTag="ArrayBufferView"
H.aE.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dj,[])
else F.dj([])})})()
//# sourceMappingURL=main.dart.js.map
