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
a[c]=function(){a[c]=function(){H.m9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jm(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j3:function j3(a){this.a=a},
j1:function(){return new P.c3("No element")},
l9:function(){return new P.c3("Too many elements")},
o:function o(a){this.a=a},
eL:function eL(){},
bl:function bl(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fl:function fl(a,b,c){this.a=a
this.b=b
this.$ti=c},
fm:function fm(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
hV:function hV(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(){},
dm:function dm(){},
dl:function dl(){},
bB:function(a){var u,t
u=H.A(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lS:function(a){return v.types[H.Y(a)]},
lZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iz},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a6(a)
if(typeof u!=="string")throw H.f(H.bx(a))
return u},
ln:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.f7(u)
t=u[0]
s=u[1]
return new H.fN(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c_:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bo:function(a){return H.le(a)+H.jj(H.b8(a),0,null)},
le:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.G||!!u.$icb){p=C.v(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bB(r.length>1&&C.c.ac(r,0)===36?C.c.aM(r,1):r)},
jT:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lm:function(a){var u,t,s,r
u=H.c([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bx(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aA(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bx(r))}return H.jT(u)},
jU:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bx(s))
if(s<0)throw H.f(H.bx(s))
if(s>65535)return H.lm(a)}return H.jT(a)},
j5:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aA(u,10))>>>0,56320|u&1023)}throw H.f(P.ae(a,0,1114111,null,null))},
bn:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ll:function(a){var u=H.bn(a).getFullYear()+0
return u},
lj:function(a){var u=H.bn(a).getMonth()+1
return u},
lf:function(a){var u=H.bn(a).getDate()+0
return u},
lg:function(a){var u=H.bn(a).getHours()+0
return u},
li:function(a){var u=H.bn(a).getMinutes()+0
return u},
lk:function(a){var u=H.bn(a).getSeconds()+0
return u},
lh:function(a){var u=H.bn(a).getMilliseconds()+0
return u},
b9:function(a){throw H.f(H.bx(a))},
l:function(a,b){if(a==null)J.bb(a)
throw H.f(H.cs(a,b))},
cs:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
u=H.Y(J.bb(a))
if(!(b<0)){if(typeof u!=="number")return H.b9(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,"index",null,u)
return P.fL(b,"index",null)},
lP:function(a,b,c){if(a>c)return new P.bp(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bp(a,c,!0,b,"end","Invalid value")
return new P.an(!0,b,"end",null)},
bx:function(a){return new P.an(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kw})
u.name=""}else u.toString=H.kw
return u},
kw:function(){return J.a6(this.dartException)},
Z:function(a){throw H.f(a)},
C:function(a){throw H.f(P.aW(a))},
aE:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k2:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jO:function(a,b){return new H.fD(a,b==null?null:b.method)},
j4:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fc(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.iU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aA(s,16)&8191)===10)switch(r){case 438:return u.$1(H.j4(H.h(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jO(H.h(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kz()
p=$.kA()
o=$.kB()
n=$.kC()
m=$.kF()
l=$.kG()
k=$.kE()
$.kD()
j=$.kI()
i=$.kH()
h=q.V(t)
if(h!=null)return u.$1(H.j4(H.A(t),h))
else{h=p.V(t)
if(h!=null){h.method="call"
return u.$1(H.j4(H.A(t),h))}else{h=o.V(t)
if(h==null){h=n.V(t)
if(h==null){h=m.V(t)
if(h==null){h=l.V(t)
if(h==null){h=k.V(t)
if(h==null){h=n.V(t)
if(h==null){h=j.V(t)
if(h==null){h=i.V(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jO(H.A(t),h))}}return u.$1(new H.hH(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dd()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.an(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dd()
return a},
by:function(a){var u
if(a==null)return new H.dY(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dY(a)},
lR:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.G(0,a[t],a[s])}return b},
lY:function(a,b,c,d,e,f){H.n(a,"$iaZ")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.T("Unsupported number of arguments for wrapped closure"))},
cr:function(a,b){var u
H.Y(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lY)
a.$identity=u
return u},
kZ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ib){u.$reflectionInfo=d
s=H.ln(u).r}else s=d
r=e?Object.create(new H.h6().constructor.prototype):Object.create(new H.bJ(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.ao
if(typeof p!=="number")return p.H()
$.ao=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jC(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lS,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jA:H.iZ
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jC(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kW:function(a,b,c,d){var u=H.iZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jC:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kY(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kW(t,!r,u,b)
if(t===0){r=$.ao
if(typeof r!=="number")return r.H()
$.ao=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
if(q==null){q=H.et("self")
$.bK=q}return new Function(r+H.h(q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ao
if(typeof r!=="number")return r.H()
$.ao=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
if(q==null){q=H.et("self")
$.bK=q}return new Function(r+H.h(q)+"."+H.h(u)+"("+o+");}")()},
kX:function(a,b,c,d){var u,t
u=H.iZ
t=H.jA
switch(b?-1:a){case 0:throw H.f(H.lr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kY:function(a,b){var u,t,s,r,q,p,o,n
u=$.bK
if(u==null){u=H.et("self")
$.bK=u}t=$.jz
if(t==null){t=H.et("receiver")
$.jz=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kX(r,!p,s,b)
if(r===1){u="return function(){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+");"
t=$.ao
if(typeof t!=="number")return t.H()
$.ao=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+", "+n+");"
t=$.ao
if(typeof t!=="number")return t.H()
$.ao=t+1
return new Function(u+t+"}")()},
jm:function(a,b,c,d,e,f,g){return H.kZ(a,b,H.Y(c),d,!!e,!!f,g)},
iZ:function(a){return a.a},
jA:function(a){return a.c},
et:function(a){var u,t,s,r,q
u=new H.bJ("self","target","receiver","name")
t=J.f7(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.al(a,"String"))},
mP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.al(a,"double"))},
m3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.al(a,"num"))},
jk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.al(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.al(a,"int"))},
ku:function(a,b){throw H.f(H.al(a,H.bB(H.A(b).substring(2))))},
m5:function(a,b){throw H.f(H.kV(a,H.bB(H.A(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.ku(a,b)},
bz:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.m5(a,b)},
jq:function(a){if(a==null)return a
if(!!J.Q(a).$ib)return a
throw H.f(H.al(a,"List<dynamic>"))},
m_:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.ku(a,b)},
km:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Y(u)]
else return a.$S()}return},
ej:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.km(J.Q(a))
if(u==null)return!1
return H.kd(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jg)return a
$.jg=!0
try{if(H.ej(a,b))return a
u=H.iT(b)
t=H.al(a,u)
throw H.f(t)}finally{$.jg=!1}},
jn:function(a,b){if(a!=null&&!H.jl(a,b))H.Z(H.al(a,H.iT(b)))
return a},
al:function(a,b){return new H.ht("TypeError: "+P.eP(a)+": type '"+H.kh(a)+"' is not a subtype of type '"+b+"'")},
kV:function(a,b){return new H.eu("CastError: "+P.eP(a)+": type '"+H.kh(a)+"' is not a subtype of type '"+b+"'")},
kh:function(a){var u,t
u=J.Q(a)
if(!!u.$ibL){t=H.km(u)
if(t!=null)return H.iT(t)
return"Closure"}return H.bo(a)},
m9:function(a){throw H.f(new P.eB(H.A(a)))},
lr:function(a){return new H.fU(a)},
ko:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b8:function(a){if(a==null)return
return a.$ti},
mQ:function(a,b,c){return H.bA(a["$a"+H.h(c)],H.b8(b))},
cu:function(a,b,c,d){var u
H.A(c)
H.Y(d)
u=H.bA(a["$a"+H.h(c)],H.b8(b))
return u==null?null:u[d]},
ct:function(a,b,c){var u
H.A(b)
H.Y(c)
u=H.bA(a["$a"+H.h(b)],H.b8(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.Y(b)
u=H.b8(a)
return u==null?null:u[b]},
iT:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
H.r(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bB(a[0].name)+H.jj(a,1,b)
if(typeof a=="function")return H.bB(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.h(b[t])}if('func' in a)return H.lE(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.r(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.l(b,m)
o=C.c.H(o,b[m])
l=t[p]
if(l!=null&&l!==P.H)o+=" extends "+H.b7(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.b7(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.b7(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.b7(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lQ(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.A(u[g])
i=i+h+H.b7(d[c],b)+(" "+H.h(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jj:function(a,b,c){var u,t,s,r,q,p
H.r(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.br("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
bA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ei:function(a,b,c,d){var u,t
H.A(b)
H.jq(c)
H.A(d)
if(a==null)return!1
u=H.b8(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.kk(H.bA(t[d],u),null,c,null)},
r:function(a,b,c,d){H.A(b)
H.jq(c)
H.A(d)
if(a==null)return a
if(H.ei(a,b,c,d))return a
throw H.f(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bB(b.substring(2))+H.jj(c,0,null),v.mangledGlobalNames)))},
kk:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ah(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ah(a[t],b,c[t],d))return!1
return!0},
mN:function(a,b,c){return a.apply(b,H.bA(J.Q(b)["$a"+H.h(c)],H.b8(b)))},
kq:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="H"||a.name==="F"||a===-1||a===-2||H.kq(u)}return!1},
jl:function(a,b){var u,t
if(a==null)return b==null||b.name==="H"||b.name==="F"||b===-1||b===-2||H.kq(b)
if(b==null||b===-1||b.name==="H"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jl(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ej(a,b)}u=J.Q(a).constructor
t=H.b8(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ah(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jl(a,b))throw H.f(H.al(a,H.iT(b)))
return a},
ah:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="H"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="H"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.kd(a,b,c,d)
if('func' in a)return c.name==="aZ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ah("type" in a?a.type:null,b,s,d)
else if(H.ah(a,b,s,d))return!0
else{if(!('$i'+"bT" in t.prototype))return!1
r=t.prototype["$a"+"bT"]
q=H.bA(r,u?a.slice(1):null)
return H.ah(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kk(H.bA(m,u),b,p,d)},
kd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ah(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ah(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ah(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ah(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.m2(h,b,g,d)},
m2:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ah(c[r],d,a[r],b))return!1}return!0},
mO:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
m0:function(a){var u,t,s,r,q,p
u=H.A($.kp.$1(a))
t=$.iK[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.A($.kj.$2(a,u))
if(u!=null){t=$.iK[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iS(s)
$.iK[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.iR[u]=s
return s}if(q==="-"){p=H.iS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ks(a,s)
if(q==="*")throw H.f(P.k3(u))
if(v.leafTags[u]===true){p=H.iS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ks(a,s)},
ks:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jr(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iS:function(a){return J.jr(a,!1,null,!!a.$iz)},
m1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iS(u)
else return J.jr(u,c,null,null)},
lW:function(){if(!0===$.jp)return
$.jp=!0
H.lX()},
lX:function(){var u,t,s,r,q,p,o,n
$.iK=Object.create(null)
$.iR=Object.create(null)
H.lV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kv.$1(q)
if(p!=null){o=H.m1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lV:function(){var u,t,s,r,q,p,o
u=C.K()
u=H.bw(C.H,H.bw(C.M,H.bw(C.u,H.bw(C.u,H.bw(C.L,H.bw(C.I,H.bw(C.J(C.v),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kp=new H.iO(q)
$.kj=new H.iP(p)
$.kv=new H.iQ(o)},
bw:function(a,b){return a(b)||b},
lb:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.eY("Illegal RegExp pattern ("+String(r)+")",a,null))},
m7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
js:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fN:function fN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fD:function fD(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
iU:function iU(a){this.a=a},
dY:function dY(a){this.a=a
this.b=null},
bL:function bL(){},
hf:function hf(){},
h6:function h6(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a){this.a=a},
eu:function eu(a){this.a=a},
fU:function fU(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ff:function ff(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cW:function cW(a,b){this.a=a
this.$ti=b},
fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jf:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cs(b,a))},
lD:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lP(a,b,c))
return b},
bY:function bY(){},
d_:function d_(){},
bX:function bX(){},
d0:function d0(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
d1:function d1(){},
fA:function fA(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
lQ:function(a){return J.jG(a?Object.keys(a):[],null)},
m4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iN:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jp==null){H.lW()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.k3("Return interceptor for "+H.h(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ju()]
if(q!=null)return q
q=H.m0(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.ju(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
la:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ae(a,0,4294967295,"length",null))
return J.jG(new Array(a),b)},
jG:function(a,b){return J.f7(H.c(a,[b]))},
f7:function(a){H.jq(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cS.prototype
return J.f9.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.fa.prototype
if(typeof a=="boolean")return J.f8.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.H)return a
return J.iN(a)},
jo:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.H)return a
return J.iN(a)},
iM:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.H)return a
return J.iN(a)},
kn:function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.cb.prototype
return a},
aa:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.H)return a
return J.iN(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
kO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jo(a).m(a,b)},
ek:function(a,b){return J.aa(a).eb(a,b)},
kP:function(a,b,c,d){return J.aa(a).ev(a,b,c,d)},
jx:function(a,b){return J.aa(a).p(a,b)},
iV:function(a,b){return J.iM(a).u(a,b)},
kQ:function(a,b){return J.iM(a).E(a,b)},
kR:function(a){return J.aa(a).geB(a)},
cy:function(a){return J.Q(a).gD(a)},
ba:function(a){return J.iM(a).gF(a)},
bb:function(a){return J.jo(a).gl(a)},
kS:function(a){return J.aa(a).gfE(a)},
iW:function(a,b){return J.aa(a).al(a,b)},
jy:function(a){return J.iM(a).fv(a)},
kT:function(a,b,c){return J.kn(a).au(a,b,c)},
kU:function(a){return J.kn(a).fI(a)},
a6:function(a){return J.Q(a).i(a)},
a:function a(){},
f8:function f8(){},
fa:function fa(){},
cU:function cU(){},
fH:function fH(){},
cb:function cb(){},
b0:function b0(){},
au:function au(a){this.$ti=a},
j2:function j2(a){this.$ti=a},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cT:function cT(){},
cS:function cS(){},
f9:function f9(){},
bk:function bk(){}},P={
lv:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lL()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cr(new P.hX(u),1)).observe(t,{childList:true})
return new P.hW(u,t,s)}else if(self.setImmediate!=null)return P.lM()
return P.lN()},
lw:function(a){self.scheduleImmediate(H.cr(new P.hY(H.k(a,{func:1,ret:-1})),0))},
lx:function(a){self.setImmediate(H.cr(new P.hZ(H.k(a,{func:1,ret:-1})),0))},
ly:function(a){P.j7(C.m,H.k(a,{func:1,ret:-1}))},
j7:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.h.aB(a.a,1000)
return P.lC(u<0?0:u,b)},
lC:function(a,b){var u=new P.iz(!0)
u.d1(a,b)
return u},
lz:function(a,b){var u,t,s
b.a=1
try{a.cj(new P.i7(b),new P.i8(b),null)}catch(s){u=H.ab(s)
t=H.by(s)
P.m6(new P.i9(b,u,t))}},
k8:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iag")
if(u>=4){t=b.b0()
b.a=a.a
b.c=a.c
P.cf(b,t)}else{t=H.n(b.c,"$iaH")
b.a=2
b.c=a
a.bM(t)}},
cf:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.n(t.c,"$ia0")
t=t.b
p=q.a
o=q.b
t.toString
P.iG(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cf(u.a,b)}t=u.a
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
if(k){H.n(m,"$ia0")
t=t.b
p=m.a
o=m.b
t.toString
P.iG(null,null,t,p,o)
return}j=$.P
if(j!=l)$.P=l
else j=null
t=b.c
if(t===8)new P.id(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ic(s,b,m).$0()}else if((t&2)!==0)new P.ib(u,s,b).$0()
if(j!=null)$.P=j
t=s.b
if(!!J.Q(t).$ibT){if(t.a>=4){i=H.n(o.c,"$iaH")
o.c=null
b=o.az(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.k8(t,o)
return}}h=b.b
i=H.n(h.c,"$iaH")
h.c=null
b=h.az(i)
t=s.a
p=s.b
if(!t){H.B(p,H.u(h,0))
h.a=4
h.c=p}else{H.n(p,"$ia0")
h.a=8
h.c=p}u.a=h
t=h}},
lH:function(a,b){if(H.ej(a,{func:1,args:[P.H,P.a5]}))return H.k(a,{func:1,ret:null,args:[P.H,P.a5]})
if(H.ej(a,{func:1,args:[P.H]}))return H.k(a,{func:1,ret:null,args:[P.H]})
throw H.f(P.iY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lG:function(){var u,t
for(;u=$.bv,u!=null;){$.cq=null
t=u.b
$.bv=t
if(t==null)$.cp=null
u.a.$0()}},
lK:function(){$.jh=!0
try{P.lG()}finally{$.cq=null
$.jh=!1
if($.bv!=null)$.jv().$1(P.kl())}},
kg:function(a){var u=new P.dr(H.k(a,{func:1,ret:-1}))
if($.bv==null){$.cp=u
$.bv=u
if(!$.jh)$.jv().$1(P.kl())}else{$.cp.b=u
$.cp=u}},
lJ:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bv
if(u==null){P.kg(a)
$.cq=$.cp
return}t=new P.dr(a)
s=$.cq
if(s==null){t.b=u
$.cq=t
$.bv=t}else{t.b=s.b
s.b=t
$.cq=t
if(t.b==null)$.cp=t}},
m6:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.P
if(C.f===t){P.iI(null,null,C.f,a)
return}t.toString
P.iI(null,null,t,H.k(t.b4(a),u))},
k1:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.P
if(t===C.f){t.toString
return P.j7(a,b)}return P.j7(a,H.k(t.b4(b),u))},
iG:function(a,b,c,d,e){var u={}
u.a=d
P.lJ(new P.iH(u,e))},
ke:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.P
if(t===c)return d.$0()
$.P=c
u=t
try{t=d.$0()
return t}finally{$.P=u}},
kf:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.P
if(t===c)return d.$1(e)
$.P=c
u=t
try{t=d.$1(e)
return t}finally{$.P=u}},
lI:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.P
if(t===c)return d.$2(e,f)
$.P=c
u=t
try{t=d.$2(e,f)
return t}finally{$.P=u}},
iI:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b4(d):c.eC(d,-1)
P.kg(d)},
hX:function hX(a){this.a=a},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
iz:function iz(a){this.a=a
this.b=null
this.c=0},
iA:function iA(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ag:function ag(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i6:function i6(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a){this.a=a
this.b=null},
h9:function h9(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
c4:function c4(){},
ha:function ha(){},
a0:function a0(a,b){this.a=a
this.b=b},
iD:function iD(){},
iH:function iH(a,b){this.a=a
this.b=b},
il:function il(){},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function(a,b){return new H.av([a,b])},
lc:function(a){return H.lR(a,new H.av([null,null]))},
cX:function(a,b,c,d){return new P.ii([d])},
jd:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kb:function(a,b,c){var u=new P.ij(a,b,[c])
u.c=a.e
return u},
l8:function(a,b,c){var u,t
if(P.ji(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
t=$.cx()
C.a.h(t,a)
try{P.lF(a,u)}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}t=P.k_(b,H.m_(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
j0:function(a,b,c){var u,t,s
if(P.ji(a))return b+"..."+c
u=new P.br(b)
t=$.cx()
C.a.h(t,a)
try{s=u
s.a=P.k_(s.a,a,", ")}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ji:function(a){var u,t
for(u=0;t=$.cx(),u<t.length;++u)if(a===t[u])return!0
return!1},
lF:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.r(b,"$ib",[P.e],"$ab")
u=a.gF(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.h(u.gA(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gA(u);++s
if(!u.t()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gA(u);++s
for(;u.t();o=n,n=m){m=u.gA(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jI:function(a,b){var u,t,s
u=P.cX(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.B(a[s],b))
return u},
jK:function(a){var u,t
u={}
if(P.ji(a))return"{...}"
t=new P.br("")
try{C.a.h($.cx(),a)
t.a+="{"
u.a=!0
J.kQ(a,new P.fk(u,t))
t.a+="}"}finally{u=$.cx()
if(0>=u.length)return H.l(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ii:function ii(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bu:function bu(a){this.a=a
this.c=this.b=null},
ij:function ij(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fh:function fh(){},
t:function t(){},
fj:function fj(){},
fk:function fk(a,b){this.a=a
this.b=b},
V:function V(){},
ir:function ir(){},
dG:function dG(){},
bM:function bM(){},
bN:function bN(){},
eN:function eN(){},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f2:function f2(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(){},
iB:function iB(a){this.b=this.a=0
this.c=a},
l6:function(a){if(a instanceof H.bL)return a.i(0)
return"Instance of '"+H.bo(a)+"'"},
ld:function(a,b,c,d){var u,t
H.B(b,d)
u=J.la(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.G(u,t,b)
return H.r(u,"$ib",[d],"$ab")},
jJ:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.ba(a);s.t();)C.a.h(t,H.B(s.gA(s),c))
if(b)return t
return H.r(J.f7(t),"$ib",u,"$ab")},
j6:function(a,b,c){var u,t
u=P.y
H.r(a,"$ii",[u],"$ai")
if(a.constructor===Array){H.r(a,"$iau",[u],"$aau")
t=a.length
c=P.jV(b,c,t,null,null,null)
return H.jU(b>0||c<t?C.a.cN(a,b,c):a)}return P.lt(a,b,c)},
lt:function(a,b,c){var u,t,s
H.r(a,"$ii",[P.y],"$ai")
u=J.ba(a)
for(t=0;t<b;++t)if(!u.t())throw H.f(P.ae(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gA(u))
return H.jU(s)},
lo:function(a,b,c){return new H.fb(a,H.lb(a,!1,!0,!1))},
k_:function(a,b,c){var u=J.ba(b)
if(!u.t())return a
if(c.length===0){do a+=H.h(u.gA(u))
while(u.t())}else{a+=H.h(u.gA(u))
for(;u.t();)a=a+c+H.h(u.gA(u))}return a},
je:function(a,b,c,d){var u,t,s,r,q,p
H.r(a,"$ib",[P.y],"$ab")
if(c===C.l){u=$.kN().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.eL(H.B(b,H.ct(c,"bM",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.j5(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
l_:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cI:function(a){if(a>=10)return""+a
return"0"+a},
l3:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l6(a)},
iY:function(a,b,c){return new P.an(!0,a,b,c)},
fL:function(a,b,c){return new P.bp(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.bp(b,c,!0,a,d,"Invalid value")},
jV:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.ae(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.ae(b,a,c,"end",f))
return b}return c},
M:function(a,b,c,d,e){var u=H.Y(e==null?J.bb(b):e)
return new P.f4(b,u,!0,a,c,"Index out of range")},
aF:function(a){return new P.hI(a)},
k3:function(a){return new P.hG(a)},
jZ:function(a){return new P.c3(a)},
aW:function(a){return new P.ew(a)},
T:function(a){return new P.dz(a)},
kt:function(a){H.m4(a)},
K:function K(){},
bg:function bg(a,b){this.a=a
this.b=b},
w:function w(){},
bh:function bh(a){this.a=a},
eJ:function eJ(){},
eK:function eK(){},
aX:function aX(){},
d3:function d3(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f4:function f4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hI:function hI(a){this.a=a},
hG:function hG(a){this.a=a},
c3:function c3(a){this.a=a},
ew:function ew(a){this.a=a},
fG:function fG(){},
dd:function dd(){},
eB:function eB(a){this.a=a},
dz:function dz(a){this.a=a},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(){},
y:function y(){},
i:function i(){},
at:function at(){},
b:function b(){},
G:function G(){},
F:function F(){},
S:function S(){},
H:function H(){},
a5:function a5(){},
e:function e(){},
br:function br(a){this.a=a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.jH(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.A(t[r])
u.G(0,q,a[q])}return u},
lO:function(a,b){var u={}
a.E(0,new P.iJ(u))
return u},
iJ:function iJ(a){this.a=a},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(){},
eW:function eW(){},
ik:function ik(){},
a4:function a4(){},
aK:function aK(){},
fe:function fe(){},
aN:function aN(){},
fE:function fE(){},
fK:function fK(){},
c0:function c0(){},
hd:function hd(){},
m:function m(){},
aO:function aO(){},
hq:function hq(){},
dE:function dE(){},
dF:function dF(){},
dO:function dO(){},
dP:function dP(){},
e_:function e_(){},
e0:function e0(){},
e5:function e5(){},
e6:function e6(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(a){this.a=a},
er:function er(){},
bc:function bc(){},
fF:function fF(){},
ds:function ds(){},
cC:function cC(){},
cP:function cP(){},
d7:function d7(){},
bq:function bq(){},
db:function db(){},
dk:function dk(){},
h5:function h5(){},
dW:function dW(){},
dX:function dX(){}},W={
iX:function(a){var u=document.createElement("a")
return u},
jB:function(a,b){var u=document.createElement("canvas")
return u},
l4:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).T(u,a,b,c)
t.toString
u=W.x
u=new H.cc(new W.a1(t),H.k(new W.eM(),{func:1,ret:P.K,args:[u]}),[u])
return H.n(u.ga7(u),"$iJ")},
l5:function(a){H.n(a,"$id")
return"wheel"},
bR:function(a){var u,t,s
u="element tag unavailable"
try{t=J.kS(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ab(s)}return u},
ih:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ka:function(a,b,c,d){var u,t
u=W.ih(W.ih(W.ih(W.ih(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d,e){var u=W.ki(new W.i5(c),W.j)
if(u!=null&&!0)J.kP(a,b,u,!1)
return new W.i4(a,b,u,!1,[e])},
k9:function(a){var u,t
u=W.iX(null)
t=window.location
u=new W.b5(new W.iq(u,t))
u.cY(a)
return u},
lA:function(a,b,c,d){H.n(a,"$iJ")
H.A(b)
H.A(c)
H.n(d,"$ib5")
return!0},
lB:function(a,b,c,d){var u,t,s
H.n(a,"$iJ")
H.A(b)
H.A(c)
u=H.n(d,"$ib5").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kc:function(){var u,t,s,r,q
u=P.e
t=P.jI(C.o,u)
s=H.u(C.o,0)
r=H.k(new W.iy(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.ix(t,P.cX(null,null,null,u),P.cX(null,null,null,u),P.cX(null,null,null,u),null)
t.d0(null,new H.fn(C.o,r,[s,u]),q,null)
return t},
ki:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.P
if(u===C.f)return a
return u.eE(a,b)},
p:function p(){},
el:function el(){},
cz:function cz(){},
em:function em(){},
bI:function bI(){},
cB:function cB(){},
aS:function aS(){},
bd:function bd(){},
aT:function aT(){},
bO:function bO(){},
ex:function ex(){},
I:function I(){},
bP:function bP(){},
ey:function ey(){},
ap:function ap(){},
aq:function aq(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
ad:function ad(){},
bQ:function bQ(){},
eG:function eG(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
eH:function eH(){},
eI:function eI(){},
i0:function i0(a,b){this.a=a
this.b=b},
J:function J(){},
eM:function eM(){},
j:function j(){},
d:function d(){},
ar:function ar(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
as:function as(){},
cQ:function cQ(){},
f1:function f1(){},
bj:function bj(){},
cR:function cR(){},
aw:function aw(){},
cY:function cY(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
fr:function fr(){},
fs:function fs(a){this.a=a},
ax:function ax(){},
ft:function ft(){},
W:function W(){},
a1:function a1(a){this.a=a},
x:function x(){},
bZ:function bZ(){},
ay:function ay(){},
fJ:function fJ(){},
d8:function d8(){},
fS:function fS(){},
fT:function fT(a){this.a=a},
fV:function fV(){},
az:function az(){},
h3:function h3(){},
aA:function aA(){},
h4:function h4(){},
aB:function aB(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
ai:function ai(){},
bs:function bs(){},
de:function de(){},
df:function df(){},
he:function he(){},
c5:function c5(){},
aC:function aC(){},
aj:function aj(){},
hg:function hg(){},
hh:function hh(){},
hk:function hk(){},
aD:function aD(){},
ak:function ak(){},
ho:function ho(){},
hp:function hp(){},
b4:function b4(){},
hJ:function hJ(){},
hT:function hT(){},
aG:function aG(){},
cd:function cd(){},
ce:function ce(){},
i1:function i1(){},
du:function du(){},
ig:function ig(){},
dL:function dL(){},
iu:function iu(){},
iv:function iv(){},
i_:function i_(){},
i2:function i2(a){this.a=a},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i4:function i4(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i5:function i5(a){this.a=a},
b5:function b5(a){this.a=a},
v:function v(){},
d2:function d2(a){this.a=a},
fC:function fC(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
is:function is(){},
it:function it(){},
ix:function ix(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(){},
iw:function iw(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a8:function a8(){},
iq:function iq(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a},
iC:function iC(a){this.a=a},
dt:function dt(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
ck:function ck(){},
cl:function cl(){},
dU:function dU(){},
dV:function dV(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
cm:function cm(){},
cn:function cn(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){}},O={
jD:function(a){var u=new O.aV([a])
u.sdu(H.c([],[a]))
u.sbK(null)
u.sbJ(null)
u.sbL(null)
return u},
aV:function aV(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bV:function bV(){this.b=this.a=null},
eE:function eE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bt:function bt(){}},E={
lq:function(a,b){var u=new E.fO(a,b)
u.cT(a,b)
return u},
lu:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibd)return E.k0(a,!0,!0,!0,!1)
t=W.jB(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbU(a).h(0,t)
r=E.k0(t,!0,!0,!0,!1)
r.a=a
return r},
k0:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dh()
t=H.n(C.C.cz(a,"webgl2",P.lc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibq")
if(t==null)H.Z(P.T("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lq(t,a)
s=new T.hi(t)
s.b=H.Y((t&&C.b).bh(t,3379))
s.c=H.Y(C.b.bh(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dn(a)
r=new X.fd()
r.c=new X.aM(!1,!1,!1)
r.se8(P.cX(null,null,null,P.y))
s.b=r
r=new X.fu(s)
r.f=0
r.r=V.d5()
r.x=V.d5()
r.Q=1
r.ch=1
s.c=r
r=new X.fi(s)
r.r=0
r.x=V.d5()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hn(s)
r.e=0
r.f=V.d5()
r.r=V.d5()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sdf(H.c([],[[P.c4,P.H]]))
r=s.z
q=document
p=W.W
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.X(q,"contextmenu",H.k(s.gdF(),o),!1,p))
r=s.z
n=W.j
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.X(a,"focus",H.k(s.gdL(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.X(a,"blur",H.k(s.gdz(),m),!1,n))
r=s.z
l=W.aw
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.X(q,"keyup",H.k(s.gdP(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.X(q,"keydown",H.k(s.gdN(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.X(a,"mousedown",H.k(s.gdS(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.X(a,"mouseup",H.k(s.gdW(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.X(a,"mousemove",H.k(s.gdU(),o),!1,p))
l=s.z
k=W.aG;(l&&C.a).h(l,W.X(a,H.A(W.l5(a)),H.k(s.gdY(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.X(q,"mousemove",H.k(s.gdH(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.X(q,"mouseup",H.k(s.gdJ(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.X(q,"pointerlockchange",H.k(s.ge_(),m),!1,n))
n=s.z
m=W.ak
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.X(a,"touchstart",H.k(s.ge6(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.X(a,"touchend",H.k(s.ge2(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.X(a,"touchmove",H.k(s.ge4(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.bg(Date.now(),!1)
u.cy=0
u.bN()
return u},
es:function es(){},
a2:function a2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
dh:function dh(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a){this.a=a}},Z={
jb:function(a,b,c){var u
H.r(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
C.b.a1(a,b,u)
C.b.bT(a,b,new Int16Array(H.jf(c)),35044)
C.b.a1(a,b,null)
return new Z.dq(b,u)},
af:function(a){return new Z.dp(a)},
dq:function dq(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hU:function hU(a){this.a=a},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a){this.a=a}},D={
aY:function(){var u=new D.bS()
u.sae(null)
u.say(null)
u.c=null
u.d=0
return u},
ev:function ev(){},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=null},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
E:function E(a){this.a=a
this.b=null},
f5:function f5(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
f6:function f6(a,b,c,d){var _=this
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
_.$ti=e}},X={cF:function cF(a,b){this.a=a
this.b=b},cV:function cV(a,b){this.a=a
this.b=b},fd:function fd(){var _=this
_.d=_.c=_.b=_.a=null},fi:function fi(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},fu:function fu(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hn:function hn(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dn:function dn(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l7:function(a,b,c,d,e,f,g){var u,t
u=new X.eZ()
t=new V.bf(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jW
if(t==null){t=V.lp(0,0,1,1)
$.jW=t}u.r=t
return u},
cG:function cG(){},
eZ:function eZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){}},V={
jt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.cF(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.c.X("null",c)
return C.c.X(C.d.fJ(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
iL:function(a,b,c){var u,t,s,r,q
H.r(a,"$ib",[P.w],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.l(u,q)
C.a.G(u,q,C.c.X(u[q],t))}return u},
jM:function(){var u=$.jL
if(u==null){u=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jL=u}return u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d5:function(){var u=$.jR
if(u==null){u=new V.a9(0,0)
$.jR=u}return u},
lp:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d9(a,b,c,d)},
j9:function(){var u=$.k7
if(u==null){u=new V.R(0,0,0)
$.k7=u}return u},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a){this.a=a},
b1:function b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.T("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.ac(a,0)
t=C.c.ac(b,0)
s=new V.fM()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fW()
u.cU(a)
return u},
hm:function(){var u,t
u=new V.hl()
t=P.e
u.sen(new H.av([t,V.c2]))
u.seq(new H.av([t,V.c6]))
u.c=null
return u},
aI:function aI(){},
a7:function a7(){},
cZ:function cZ(){},
a3:function a3(){this.a=null},
fM:function fM(){this.b=this.a=null},
fW:function fW(){this.a=null},
c2:function c2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b
this.c=null},
hl:function hl(){this.c=this.b=this.a=null},
c7:function c7(a){this.b=a
this.a=this.c=null},
ls:function(a,b){var u=new V.h_()
u.cW(a,!0)
return u},
aU:function aU(){},
eC:function eC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f_:function f_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f0:function f0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h_:function h_(){this.b=this.a=null},
h1:function h1(a){this.a=a},
h0:function h0(a){this.a=a},
h2:function h2(a){this.a=a}},U={cH:function cH(){this.b=this.a=null},bW:function bW(){},da:function da(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cM:function cM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
j8:function(a,b,c,d,e){var u=new A.hv(a,b,c,e)
u.f=d
u.ses(P.ld(d,0,!1,P.y))
return u},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a},
eF:function eF(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c1:function c1(){},
dj:function dj(){},
hB:function hB(a){this.a=a},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
iF:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
co:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.R(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.R(o+a3,n+a1,m+a2)
u.b=l
k=new V.R(o-a3,n-a1,m-a2)
u.c=k
j=new V.R(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iF(t)
f=F.iF(u.b)
e=F.m8(d,a0,new F.iE(u,F.iF(u.c),F.iF(u.d),f,g,c),b)
if(e!=null)a.fd(e)},
m8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.am,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.jY()
t=H.c([],[F.am])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ja(null,null,new V.bf(p,0,0,1),null,null,new V.a9(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.b9(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ja(null,null,new V.bf(j,i,h,1),null,null,new V.a9(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.b9(d))}}u.d.ew(a+1,b+1,t)
return u},
cN:function(a,b,c){var u,t
u=new F.U()
t=a.a
if(t==null)H.Z(P.T("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.Z(P.T("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
jY:function(){var u,t
u=new F.dc()
t=new F.hM(u)
t.b=!1
t.seu(H.c([],[F.am]))
u.a=t
t=new F.fZ(u)
t.saZ(H.c([],[F.b3]))
u.b=t
t=new F.fY(u)
t.sdr(H.c([],[F.aL]))
u.c=t
t=new F.fX(u)
t.sdg(H.c([],[F.U]))
u.d=t
u.e=null
return u},
ja:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.am()
t=new F.hR(u)
t.saZ(H.c([],[F.b3]))
u.b=t
t=new F.hQ(u)
s=[F.aL]
t.sds(H.c([],s))
t.sdt(H.c([],s))
u.c=t
t=new F.hN(u)
s=[F.U]
t.sdh(H.c([],s))
t.sdi(H.c([],s))
t.sdj(H.c([],s))
u.d=t
h=$.kJ()
u.e=0
t=$.aR()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bE().a)!==0?e:null
u.x=(s&$.bD().a)!==0?b:null
u.y=(s&$.bF().a)!==0?f:null
u.z=(s&$.bG().a)!==0?g:null
u.Q=(s&$.kK().a)!==0?c:null
u.ch=(s&$.bH().a)!==0?i:0
u.cx=(s&$.bC().a)!==0?a:null
return u},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
U:function U(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aL:function aL(){this.b=this.a=null},
b3:function b3(){this.a=null},
dc:function dc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a
this.b=null},
fY:function fY(a){this.a=a
this.b=null},
fZ:function fZ(a){this.a=a
this.b=null},
am:function am(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a){this.a=a},
hM:function hM(a){this.a=a
this.c=this.b=null},
hN:function hN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a
this.c=this.b=null},
hR:function hR(a){this.a=a
this.b=null},
kr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=V.ls("Tutorial 1",!0)
t=[P.e]
u.N(H.c(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],t))
s=W.jB(null,null)
s.className="pageCanvas"
s.id="tutorial1"
C.e.p(u.a,s)
u.ap(0,"Getting Started")
u.N(H.c(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],t))
u.bQ("index.html","html",0,H.c(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],t))
u.bQ("main.dart","dart",0,H.c(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],t))
u.ap(4,"ThreeDart")
u.N(H.c(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],t))
u.ap(4,"Scene")
u.N(H.c(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],t))
u.N(H.c(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],t))
u.N(H.c(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],t))
u.ap(4,"Entity")
u.N(H.c(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],t))
u.N(H.c(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],t))
u.N(H.c(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],t))
u.N(H.c(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],t))
u.ap(4,"Summary")
u.N(H.c(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],t))
u.N(H.c(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],t))
r=new E.a2()
r.a=""
r.b=!0
t=E.a2
r.sd7(0,O.jD(t))
r.y.bj(r.gfe(),r.gfh())
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
r.sbl(0,null)
r.sci(null)
r.sar(null)
q=F.jY()
F.co(q,null,null,1,1,1,0,0,1)
F.co(q,null,null,1,1,0,1,0,3)
F.co(q,null,null,1,1,0,0,1,2)
F.co(q,null,null,1,1,-1,0,0,0)
F.co(q,null,null,1,1,0,-1,0,0)
F.co(q,null,null,1,1,0,0,-1,3)
u=q.e
if(u!=null)++u.d
q.d.b6()
q.a.b6()
u=q.e
if(u!=null)u.aH(0)
r.sbl(0,q)
u=new U.da()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.scr(0)
u.sca(0,0)
u.scf(0)
p=u.d
if(!(Math.abs(p-0.1)<$.L().a)){u.d=0.1
p=new D.O("deltaYaw",p,0.1,u,[P.w])
p.b=!0
u.af(p)}p=u.e
if(!(Math.abs(p-0.21)<$.L().a)){u.e=0.21
p=new D.O("deltaPitch",p,0.21,u,[P.w])
p.b=!0
u.af(p)}p=u.f
if(!(Math.abs(p-0.32)<$.L().a)){u.f=0.32
p=new D.O("deltaRoll",p,0.32,u,[P.w])
p.b=!0
u.af(p)}r.sar(u)
u=new O.eE()
u.d=1
u.e=10
o=new V.be(1,1,1)
u.b=o
p=[V.be]
n=new D.O("objectColor",null,o,u,p)
n.b=!0
u.aw(n)
o=new V.be(0,0,0)
if(!J.a_(u.c,o)){m=u.c
u.c=o
p=new D.O("fogColor",m,o,u,p)
p.b=!0
u.aw(p)}p=u.d
if(!(Math.abs(p-3)<$.L().a)){u.d=3
p=new D.O("fogStart",p,3,u,[P.w])
p.b=!0
u.aw(p)}p=u.e
if(!(Math.abs(p-6)<$.L().a)){u.e=6
p=new D.O("fogStop",p,6,u,[P.w])
p.b=!0
u.aw(p)}r.sci(u)
l=new M.cM()
l.scZ(0,O.jD(t))
l.d.bj(l.gdB(),l.gdD())
l.e=null
l.f=null
l.r=null
l.x=null
k=X.l7(!0,!0,!1,null,2000,null,0)
j=new X.d4()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.sar(null)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.L().a)){j.c=1.0471975511965976
u=new D.O("fov",u,1.0471975511965976,j,[P.w])
u.b=!0
j.ab(u)}u=j.d
if(!(Math.abs(u-0.1)<$.L().a)){j.d=0.1
u=new D.O("near",u,0.1,j,[P.w])
u.b=!0
j.ab(u)}u=j.e
if(!(Math.abs(u-2000)<$.L().a)){j.e=2000
u=new D.O("far",u,2000,j,[P.w])
u.b=!0
j.ab(u)}u=l.a
if(u!==j){if(u!=null)u.gw().K(0,l.ga9())
m=l.a
l.a=j
j.gw().h(0,l.ga9())
u=new D.O("camera",m,l.a,l,[X.cG])
u.b=!0
l.aa(u)}u=l.b
if(u!==k){if(u!=null)u.gw().K(0,l.ga9())
m=l.b
l.b=k
k.gw().h(0,l.ga9())
u=new D.O("target",m,l.b,l,[X.dg])
u.b=!0
l.aa(u)}u=l.d
t=H.u(u,0)
H.B(r,t)
t=[t]
if(u.e1(H.c([r],t))){p=u.a
i=p.length
C.a.h(p,r)
u.dw(i,H.c([r],t))}u=l.a
h=V.b2(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
t=new U.cH()
t.a=h
u.sar(t)
g=C.t.cA(document,"tutorial1")
if(g==null)H.Z(P.T("Failed to find an element with the identifier, tutorial1."))
u=E.lu(g,!0,!0,!0,!1)
t=u.d
if(t!==l){if(t!=null)t.gw().K(0,u.gbo())
u.d=l
l.gw().h(0,u.gbo())
u.bp()}}},T={hi:function hi(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j3.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.c_(a)},
i:function(a){return"Instance of '"+H.bo(a)+"'"}}
J.f8.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iK:1}
J.fa.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0},
$iF:1}
J.cU.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.fH.prototype={}
J.cb.prototype={}
J.b0.prototype={
i:function(a){var u=a[$.ky()]
if(u==null)return this.cQ(a)
return"JavaScript function for "+H.h(J.a6(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaZ:1}
J.au.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.Z(P.aF("add"))
a.push(b)},
K:function(a,b){var u
if(!!a.fixed$length)H.Z(P.aF("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.aW(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.G(u,t,H.h(a[t]))
return u.join(b)},
f9:function(a){return this.k(a,"")},
f3:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.aW(a))}throw H.f(H.j1())},
f2:function(a,b){return this.f3(a,b,null)},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
cN:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ae(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.j1())},
bR:function(a,b){var u,t
H.k(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.aW(a))}return!1},
J:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.j0(a,"[","]")},
gF:function(a){return new J.ac(a,a.length,0,[H.u(a,0)])},
gD:function(a){return H.c_(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.Z(P.aF("set length"))
if(b<0)throw H.f(P.ae(b,0,null,"newLength",null))
a.length=b},
G:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.Z(P.aF("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cs(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.j2.prototype={}
J.ac.prototype={
gA:function(a){return this.d},
t:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.C(u))
s=this.c
if(s>=t){this.sbs(null)
return!1}this.sbs(u[s]);++this.c
return!0},
sbs:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
J.cT.prototype={
b8:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.h.gaE(b)
if(this.gaE(a)===u)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
bZ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.aF(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.aF(""+a+".round()"))},
eG:function(a,b,c){if(C.h.b8(b,c)>0)throw H.f(H.bx(b))
if(this.b8(a,b)<0)return b
if(this.b8(a,c)>0)return c
return a},
fJ:function(a,b){var u
if(b>20)throw H.f(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
cF:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
aB:function(a,b){return(a|0)===a?a/b|0:this.eo(a,b)},
eo:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.aF("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aA:function(a,b){var u
if(a>0)u=this.em(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
em:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iS:1}
J.cS.prototype={$iy:1}
J.f9.prototype={}
J.bk.prototype={
b7:function(a,b){if(b<0)throw H.f(H.cs(a,b))
if(b>=a.length)H.Z(H.cs(a,b))
return a.charCodeAt(b)},
ac:function(a,b){if(b>=a.length)throw H.f(H.cs(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.f(P.iY(b,null,null))
return a+b},
cM:function(a,b,c){var u
if(c>a.length)throw H.f(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aL:function(a,b){return this.cM(a,b,0)},
au:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fL(b,null,null))
if(b>c)throw H.f(P.fL(b,null,null))
if(c>a.length)throw H.f(P.fL(c,null,null))
return a.substring(b,c)},
aM:function(a,b){return this.au(a,b,null)},
fI:function(a){return a.toLowerCase()},
R:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fm:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.R(c,u)+a},
X:function(a,b){return this.fm(a,b," ")},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ijP:1,
$ie:1}
H.o.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.c.b7(this.a,b)},
$adm:function(){return[P.y]},
$at:function(){return[P.y]},
$ai:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eL.prototype={}
H.bl.prototype={
gF:function(a){return new H.bU(this,this.gl(this),0,[H.ct(this,"bl",0)])},
aI:function(a,b){return this.cP(0,H.k(b,{func:1,ret:P.K,args:[H.ct(this,"bl",0)]}))}}
H.bU.prototype={
gA:function(a){return this.d},
t:function(){var u,t,s,r
u=this.a
t=J.jo(u)
s=t.gl(u)
if(this.b!==s)throw H.f(P.aW(u))
r=this.c
if(r>=s){this.sam(null)
return!1}this.sam(t.u(u,r));++this.c
return!0},
sam:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
H.fl.prototype={
gF:function(a){return new H.fm(J.ba(this.a),this.b,this.$ti)},
gl:function(a){return J.bb(this.a)},
u:function(a,b){return this.b.$1(J.iV(this.a,b))},
$ai:function(a,b){return[b]}}
H.fm.prototype={
t:function(){var u=this.b
if(u.t()){this.sam(this.c.$1(u.gA(u)))
return!0}this.sam(null)
return!1},
gA:function(a){return this.a},
sam:function(a){this.a=H.B(a,H.u(this,1))},
$aat:function(a,b){return[b]}}
H.fn.prototype={
gl:function(a){return J.bb(this.a)},
u:function(a,b){return this.b.$1(J.iV(this.a,b))},
$abl:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cc.prototype={
gF:function(a){return new H.hV(J.ba(this.a),this.b,this.$ti)}}
H.hV.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gA(u)))return!0
return!1},
gA:function(a){var u=this.a
return u.gA(u)}}
H.bi.prototype={}
H.dm.prototype={}
H.dl.prototype={}
H.fN.prototype={}
H.hr.prototype={
V:function(a){var u,t,s
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
H.fD.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fc.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.h(this.a)+")"}}
H.hH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iU.prototype={
$1:function(a){if(!!J.Q(a).$iaX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dY.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia5:1}
H.bL.prototype={
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
$iaZ:1,
gfO:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hf.prototype={}
H.h6.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bB(u)+"'"}}
H.bJ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gD:function(a){var u,t
u=this.c
if(u==null)t=H.c_(this.a)
else t=typeof u!=="object"?J.cy(u):H.c_(u)
return(t^H.c_(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bo(u)+"'")}}
H.ht.prototype={
i:function(a){return this.a}}
H.eu.prototype={
i:function(a){return this.a}}
H.fU.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.av.prototype={
gl:function(a){return this.a},
gP:function(a){return new H.cW(this,[H.u(this,0)])},
bV:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.bC(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.bC(t,b)}else return this.f6(b)},
f6:function(a){var u=this.d
if(u==null)return!1
return this.bb(this.aS(u,J.cy(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.ax(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.ax(r,b)
s=t==null?null:t.b
return s}else return this.f7(b)},
f7:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aS(u,J.cy(a)&0x3ffffff)
s=this.bb(t,a)
if(s<0)return
return t[s].b},
G:function(a,b,c){var u,t,s,r,q,p
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aX()
this.b=u}this.bt(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aX()
this.c=t}this.bt(t,b,c)}else{s=this.d
if(s==null){s=this.aX()
this.d=s}r=J.cy(b)&0x3ffffff
q=this.aS(s,r)
if(q==null)this.b1(s,r,[this.aY(b,c)])
else{p=this.bb(q,b)
if(p>=0)q[p].b=c
else q.push(this.aY(b,c))}}},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.aW(this))
u=u.c}},
bt:function(a,b,c){var u
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
u=this.ax(a,b)
if(u==null)this.b1(a,b,this.aY(b,c))
else u.b=c},
dv:function(){this.r=this.r+1&67108863},
aY:function(a,b){var u,t
u=new H.ff(H.B(a,H.u(this,0)),H.B(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.dv()
return u},
bb:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.jK(this)},
ax:function(a,b){return a[b]},
aS:function(a,b){return a[b]},
b1:function(a,b,c){a[b]=c},
dd:function(a,b){delete a[b]},
bC:function(a,b){return this.ax(a,b)!=null},
aX:function(){var u=Object.create(null)
this.b1(u,"<non-identifier-key>",u)
this.dd(u,"<non-identifier-key>")
return u}}
H.ff.prototype={}
H.cW.prototype={
gl:function(a){return this.a.a},
gF:function(a){var u,t
u=this.a
t=new H.fg(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fg.prototype={
gA:function(a){return this.d},
t:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.aW(u))
else{u=this.c
if(u==null){this.sbF(null)
return!1}else{this.sbF(u.a)
this.c=this.c.c
return!0}}},
sbF:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
H.iO.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.iP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.iQ.prototype={
$1:function(a){return this.a(H.A(a))},
$S:32}
H.fb.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijP:1}
H.bY.prototype={}
H.d_.prototype={
gl:function(a){return a.length},
$iz:1,
$az:function(){}}
H.bX.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]},
$abi:function(){return[P.w]},
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.d0.prototype={
$abi:function(){return[P.y]},
$at:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fv.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fw.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fx.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fy.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fz.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.d1.prototype={
gl:function(a){return a.length},
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fA.prototype={
gl:function(a){return a.length},
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cg.prototype={}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
P.hX.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.hW.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.hY.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hZ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iz.prototype={
d1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cr(new P.iA(this,b),0),a)
else throw H.f(P.aF("`setTimeout()` not found."))}}
P.iA.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.aH.prototype={
fc:function(a){if(this.c!==6)return!0
return this.b.b.bg(H.k(this.d,{func:1,ret:P.K,args:[P.H]}),a.a,P.K,P.H)},
f5:function(a){var u,t,s,r
u=this.e
t=P.H
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.ej(u,{func:1,args:[P.H,P.a5]}))return H.jn(r.fB(u,a.a,a.b,null,t,P.a5),s)
else return H.jn(r.bg(H.k(u,{func:1,args:[P.H]}),a.a,null,t),s)}}
P.ag.prototype={
cj:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.P
if(t!==C.f){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lH(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ag(0,$.P,[c])
r=b==null?1:3
this.bu(new P.aH(s,r,a,b,[u,c]))
return s},
fF:function(a,b){return this.cj(a,null,b)},
bu:function(a){var u,t
u=this.a
if(u<=1){a.a=H.n(this.c,"$iaH")
this.c=a}else{if(u===2){t=H.n(this.c,"$iag")
u=t.a
if(u<4){t.bu(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iI(null,null,u,H.k(new P.i6(this,a),{func:1,ret:-1}))}},
bM:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.n(this.c,"$iaH")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.n(this.c,"$iag")
t=p.a
if(t<4){p.bM(a)
return}this.a=t
this.c=p.c}u.a=this.az(a)
t=this.b
t.toString
P.iI(null,null,t,H.k(new P.ia(u,this),{func:1,ret:-1}))}},
b0:function(){var u=H.n(this.c,"$iaH")
this.c=null
return this.az(u)},
az:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bz:function(a){var u,t,s
u=H.u(this,0)
H.jn(a,{futureOr:1,type:u})
t=this.$ti
if(H.ei(a,"$ibT",t,"$abT"))if(H.ei(a,"$iag",t,null))P.k8(a,this)
else P.lz(a,this)
else{s=this.b0()
H.B(a,u)
this.a=4
this.c=a
P.cf(this,s)}},
bA:function(a,b){var u
H.n(b,"$ia5")
u=this.b0()
this.a=8
this.c=new P.a0(a,b)
P.cf(this,u)},
$ibT:1}
P.i6.prototype={
$0:function(){P.cf(this.a,this.b)},
$S:0}
P.ia.prototype={
$0:function(){P.cf(this.b,this.a.a)},
$S:0}
P.i7.prototype={
$1:function(a){var u=this.a
u.a=0
u.bz(a)},
$S:12}
P.i8.prototype={
$2:function(a,b){H.n(b,"$ia5")
this.a.bA(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.i9.prototype={
$0:function(){this.a.bA(this.b,this.c)},
$S:0}
P.id.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.cg(H.k(r.d,{func:1}),null)}catch(q){t=H.ab(q)
s=H.by(q)
if(this.d){r=H.n(this.a.a.c,"$ia0").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.n(this.a.a.c,"$ia0")
else p.b=new P.a0(t,s)
p.a=!0
return}if(!!J.Q(u).$ibT){if(u instanceof P.ag&&u.a>=4){if(u.a===8){r=this.b
r.b=H.n(u.c,"$ia0")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.fF(new P.ie(o),null)
r.a=!1}},
$S:2}
P.ie.prototype={
$1:function(a){return this.a},
$S:26}
P.ic.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.B(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.bg(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ab(o)
t=H.by(o)
s=this.a
s.b=new P.a0(u,t)
s.a=!0}},
$S:2}
P.ib.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.n(this.a.a.c,"$ia0")
r=this.c
if(r.fc(u)&&r.e!=null){q=this.b
q.b=r.f5(u)
q.a=!1}}catch(p){t=H.ab(p)
s=H.by(p)
r=H.n(this.a.a.c,"$ia0")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a0(t,s)
n.a=!0}},
$S:2}
P.dr.prototype={}
P.h9.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.ag(0,$.P,[P.y])
u.a=0
s=H.u(this,0)
r=H.k(new P.hb(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.hc(u,t),{func:1,ret:-1})
W.X(this.a,this.b,r,!1,s)
return t}}
P.hb.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.u(this.b,0)]}}}
P.hc.prototype={
$0:function(){this.b.bz(this.a.a)},
$S:0}
P.c4.prototype={}
P.ha.prototype={}
P.a0.prototype={
i:function(a){return H.h(this.a)},
$iaX:1}
P.iD.prototype={$imH:1}
P.iH.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d3()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:0}
P.il.prototype={
fC:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.f===$.P){a.$0()
return}P.ke(null,null,this,a,-1)}catch(s){u=H.ab(s)
t=H.by(s)
P.iG(null,null,this,u,H.n(t,"$ia5"))}},
fD:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.P){a.$1(b)
return}P.kf(null,null,this,a,b,-1,c)}catch(s){u=H.ab(s)
t=H.by(s)
P.iG(null,null,this,u,H.n(t,"$ia5"))}},
eC:function(a,b){return new P.io(this,H.k(a,{func:1,ret:b}),b)},
b4:function(a){return new P.im(this,H.k(a,{func:1,ret:-1}))},
eE:function(a,b){return new P.ip(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
cg:function(a,b){H.k(a,{func:1,ret:b})
if($.P===C.f)return a.$0()
return P.ke(null,null,this,a,b)},
bg:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.P===C.f)return a.$1(b)
return P.kf(null,null,this,a,b,c,d)},
fB:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.P===C.f)return a.$2(b,c)
return P.lI(null,null,this,a,b,c,d,e,f)}}
P.io.prototype={
$0:function(){return this.a.cg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.im.prototype={
$0:function(){return this.a.fC(this.b)},
$S:2}
P.ip.prototype={
$1:function(a){var u=this.c
return this.a.fD(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ii.prototype={
gF:function(a){return P.kb(this,this.r,H.u(this,0))},
gl:function(a){return this.a},
J:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibu")!=null}else{t=this.d8(b)
return t}},
d8:function(a){var u=this.d
if(u==null)return!1
return this.aR(this.bG(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jd()
this.b=u}return this.bw(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jd()
this.c=t}return this.bw(t,b)}else return this.d3(0,b)},
d3:function(a,b){var u,t,s
H.B(b,H.u(this,0))
u=this.d
if(u==null){u=P.jd()
this.d=u}t=this.bB(b)
s=u[t]
if(s==null)u[t]=[this.aO(b)]
else{if(this.aR(s,b)>=0)return!1
s.push(this.aO(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ec(this.c,b)
else return this.e9(0,b)},
e9:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.bG(u,b)
s=this.aR(t,b)
if(s<0)return!1
this.bO(t.splice(s,1)[0])
return!0},
bw:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibu")!=null)return!1
a[b]=this.aO(b)
return!0},
ec:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibu")
if(u==null)return!1
this.bO(u)
delete a[b]
return!0},
by:function(){this.r=1073741823&this.r+1},
aO:function(a){var u,t
u=new P.bu(H.B(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.by()
return u},
bO:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.by()},
bB:function(a){return J.cy(a)&1073741823},
bG:function(a,b){return a[this.bB(b)]},
aR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.bu.prototype={}
P.ij.prototype={
gA:function(a){return this.d},
t:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.aW(u))
else{u=this.c
if(u==null){this.sbx(null)
return!1}else{this.sbx(H.B(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sbx:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
P.fh.prototype={$ii:1,$ib:1}
P.t.prototype={
gF:function(a){return new H.bU(a,this.gl(a),0,[H.cu(this,a,"t",0)])},
u:function(a,b){return this.m(a,b)},
fH:function(a,b){var u,t
u=H.c([],[H.cu(this,a,"t",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.G(u,t,this.m(a,t))
return u},
fG:function(a){return this.fH(a,!0)},
i:function(a){return P.j0(a,"[","]")}}
P.fj.prototype={}
P.fk.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.h(a)
u.a=t+": "
u.a+=H.h(b)},
$S:13}
P.V.prototype={
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.cu(this,a,"V",0),H.cu(this,a,"V",1)]})
for(u=J.ba(this.gP(a));u.t();){t=u.gA(u)
b.$2(t,this.m(a,t))}},
gl:function(a){return J.bb(this.gP(a))},
i:function(a){return P.jK(a)},
$iG:1}
P.ir.prototype={
a_:function(a,b){var u
for(u=J.ba(H.r(b,"$ii",this.$ti,"$ai"));u.t();)this.h(0,u.gA(u))},
i:function(a){return P.j0(this,"{","}")},
u:function(a,b){var u,t,s
if(b<0)H.Z(P.ae(b,0,null,"index",null))
for(u=P.kb(this,this.r,H.u(this,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
$ii:1,
$ijX:1}
P.dG.prototype={}
P.bM.prototype={}
P.bN.prototype={}
P.eN.prototype={
$abM:function(){return[P.e,[P.b,P.y]]}}
P.f3.prototype={
i:function(a){return this.a}}
P.f2.prototype={
d9:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.l(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.br("")
if(r>b)q.a+=C.c.au(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kT(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abN:function(){return[P.e,P.e]}}
P.hK.prototype={}
P.hL.prototype={
eM:function(a,b,c){var u,t,s
c=P.jV(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iB(t)
if(s.dk(a,b,c)!==c)s.bP(C.c.b7(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lD(0,s.b,t.length)))},
eL:function(a){return this.eM(a,0,null)},
$abN:function(){return[P.e,[P.b,P.y]]}}
P.iB.prototype={
bP:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.l(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.l(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.l(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.l(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.l(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.l(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.l(u,t)
u[t]=128|a&63
return!1}},
dk:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.b7(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.ac(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bP(r,C.c.ac(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.l(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.l(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.l(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.l(u,q)
u[q]=128|r&63}}return s}}
P.K.prototype={}
P.bg.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bg&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.h.aA(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.l_(H.ll(this))
t=P.cI(H.lj(this))
s=P.cI(H.lf(this))
r=P.cI(H.lg(this))
q=P.cI(H.li(this))
p=P.cI(H.lk(this))
o=P.l0(H.lh(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.bh.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bh&&this.a===b.a},
gD:function(a){return C.h.gD(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eK()
t=this.a
if(t<0)return"-"+new P.bh(0-t).i(0)
s=u.$1(C.h.aB(t,6e7)%60)
r=u.$1(C.h.aB(t,1e6)%60)
q=new P.eJ().$1(t%1e6)
return""+C.h.aB(t,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.eJ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.eK.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.aX.prototype={}
P.d3.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaQ()+t+s
if(!this.a)return r
q=this.gaP()
p=P.eP(this.b)
return r+q+": "+p}}
P.bp.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.h(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.h(u)
else if(s>u)t=": Not in range "+H.h(u)+".."+H.h(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.h(u)}return t}}
P.f4.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var u,t
u=H.Y(this.b)
if(typeof u!=="number")return u.fP()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gl:function(a){return this.f}}
P.hI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hG.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ew.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eP(u)+"."}}
P.fG.prototype={
i:function(a){return"Out of Memory"},
$iaX:1}
P.dd.prototype={
i:function(a){return"Stack Overflow"},
$iaX:1}
P.eB.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dz.prototype={
i:function(a){return"Exception: "+this.a}}
P.eY.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.c.au(s,0,75)+"...":s
return t+"\n"+r}}
P.aZ.prototype={}
P.y.prototype={}
P.i.prototype={
aI:function(a,b){var u=H.ct(this,"i",0)
return new H.cc(this,H.k(b,{func:1,ret:P.K,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gF(this)
for(t=0;u.t();)++t
return t},
ga7:function(a){var u,t
u=this.gF(this)
if(!u.t())throw H.f(H.j1())
t=u.gA(u)
if(u.t())throw H.f(H.l9())
return t},
u:function(a,b){var u,t,s
if(b<0)H.Z(P.ae(b,0,null,"index",null))
for(u=this.gF(this),t=0;u.t();){s=u.gA(u)
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
i:function(a){return P.l8(this,"(",")")}}
P.at.prototype={}
P.b.prototype={$ii:1}
P.G.prototype={}
P.F.prototype={
gD:function(a){return P.H.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.S.prototype={}
P.H.prototype={constructor:P.H,$iH:1,
n:function(a,b){return this===b},
gD:function(a){return H.c_(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}}
P.a5.prototype={}
P.e.prototype={$ijP:1}
P.br.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.el.prototype={
gl:function(a){return a.length}}
W.cz.prototype={
i:function(a){return String(a)},
$icz:1}
W.em.prototype={
i:function(a){return String(a)}}
W.bI.prototype={$ibI:1}
W.cB.prototype={}
W.aS.prototype={$iaS:1}
W.bd.prototype={
cz:function(a,b,c){var u=this.dl(a,b,P.lO(c,null))
return u},
dl:function(a,b,c){return a.getContext(b,c)},
$ibd:1}
W.aT.prototype={
gl:function(a){return a.length}}
W.bO.prototype={$ibO:1}
W.ex.prototype={
gl:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bP.prototype={
gl:function(a){return a.length}}
W.ey.prototype={}
W.ap.prototype={}
W.aq.prototype={}
W.ez.prototype={
gl:function(a){return a.length}}
W.eA.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.bQ.prototype={
ey:function(a,b){return a.adoptNode(b)},
cA:function(a,b){return a.getElementById(b)}}
W.eG.prototype={
i:function(a){return String(a)}}
W.cJ.prototype={
eQ:function(a,b){return a.createHTMLDocument(b)}}
W.cK.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.a4,P.S]]},
$at:function(){return[[P.a4,P.S]]},
$ii:1,
$ai:function(){return[[P.a4,P.S]]},
$ib:1,
$ab:function(){return[[P.a4,P.S]]},
$av:function(){return[[P.a4,P.S]]}}
W.cL.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gak(a))+" x "+H.h(this.gai(a))},
n:function(a,b){var u
if(b==null)return!1
if(!H.ei(b,"$ia4",[P.S],"$aa4"))return!1
u=J.aa(b)
return a.left===u.gc0(b)&&a.top===u.gcm(b)&&this.gak(a)===u.gak(b)&&this.gai(a)===u.gai(b)},
gD:function(a){return W.ka(C.d.gD(a.left),C.d.gD(a.top),C.d.gD(this.gak(a)),C.d.gD(this.gai(a)))},
gai:function(a){return a.height},
gc0:function(a){return a.left},
gcm:function(a){return a.top},
gak:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.S]}}
W.eH.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eI.prototype={
gl:function(a){return a.length}}
W.i0.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.n(u[b],"$iJ")},
h:function(a,b){J.jx(this.a,b)
return b},
gF:function(a){var u=this.fG(this)
return new J.ac(u,u.length,0,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
geB:function(a){return new W.i2(a)},
gbU:function(a){return new W.i0(a,a.children)},
i:function(a){return a.localName},
T:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jF
if(u==null){u=H.c([],[W.a8])
t=new W.d2(u)
C.a.h(u,W.k9(null))
C.a.h(u,W.kc())
$.jF=t
d=t}else d=u
u=$.jE
if(u==null){u=new W.e7(d)
$.jE=u
c=u}else{u.a=d
c=u}}if($.aJ==null){u=document
t=u.implementation
t=(t&&C.D).eQ(t,"")
$.aJ=t
$.j_=t.createRange()
t=$.aJ
t.toString
t=t.createElement("base")
H.n(t,"$ibI")
t.href=u.baseURI
u=$.aJ.head;(u&&C.E).p(u,t)}u=$.aJ
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.n(t,"$iaS")}u=$.aJ
if(!!this.$iaS)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aJ.body;(u&&C.j).p(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.J(C.P,a.tagName)){u=$.j_;(u&&C.x).cH(u,s)
u=$.j_
r=(u&&C.x).eO(u,b)}else{s.innerHTML=b
r=$.aJ.createDocumentFragment()
for(u=J.aa(r);t=s.firstChild,t!=null;)u.p(r,t)}u=$.aJ.body
if(s==null?u!=null:s!==u)J.jy(s)
c.bi(r)
C.t.ey(document,r)
return r},
eP:function(a,b,c){return this.T(a,b,c,null)},
cK:function(a,b,c,d){a.textContent=null
this.p(a,this.T(a,b,c,d))},
cJ:function(a,b){return this.cK(a,b,null,null)},
al:function(a,b){return a.getAttribute(b)},
ea:function(a,b){return a.removeAttribute(b)},
$iJ:1,
gfE:function(a){return a.tagName}}
W.eM.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:15}
W.j.prototype={$ij:1}
W.d.prototype={
ev:function(a,b,c,d){H.k(c,{func:1,args:[W.j]})
if(c!=null)this.d4(a,b,c,!1)},
d4:function(a,b,c,d){return a.addEventListener(b,H.cr(H.k(c,{func:1,args:[W.j]}),1),!1)},
$id:1}
W.ar.prototype={$iar:1}
W.eS.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ar]},
$at:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$ib:1,
$ab:function(){return[W.ar]},
$av:function(){return[W.ar]}}
W.eT.prototype={
gl:function(a){return a.length}}
W.eX.prototype={
gl:function(a){return a.length}}
W.as.prototype={$ias:1}
W.cQ.prototype={}
W.f1.prototype={
gl:function(a){return a.length}}
W.bj.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibj:1,
$av:function(){return[W.x]}}
W.cR.prototype={}
W.aw.prototype={$iaw:1}
W.cY.prototype={
i:function(a){return String(a)},
$icY:1}
W.fo.prototype={
gl:function(a){return a.length}}
W.fp.prototype={
m:function(a,b){return P.aQ(a.get(H.A(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.E(a,new W.fq(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fr.prototype={
m:function(a,b){return P.aQ(a.get(H.A(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.E(a,new W.fs(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fs.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.ax.prototype={$iax:1}
W.ft.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.W.prototype={$iW:1}
W.a1.prototype={
ga7:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.jZ("No elements"))
if(t>1)throw H.f(P.jZ("More than one element"))
return u.firstChild},
a_:function(a,b){var u,t,s,r,q
H.r(b,"$ii",[W.x],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.aa(t),q=0;q<s;++q)r.p(t,u.firstChild)
return},
gF:function(a){var u=this.a.childNodes
return new W.cO(u,u.length,-1,[H.cu(C.R,u,"v",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$at:function(){return[W.x]},
$ai:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
fv:function(a){var u=a.parentNode
if(u!=null)J.ek(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.cO(a):u},
p:function(a,b){return a.appendChild(b)},
eb:function(a,b){return a.removeChild(b)},
$ix:1}
W.bZ.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.fJ.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$av:function(){return[W.ay]}}
W.d8.prototype={
eO:function(a,b){return a.createContextualFragment(b)},
cH:function(a,b){return a.selectNodeContents(b)}}
W.fS.prototype={
m:function(a,b){return P.aQ(a.get(H.A(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.E(a,new W.fT(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fV.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.h3.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.az]},
$at:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$av:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.h4.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gl:function(a){return a.length}}
W.h7.prototype={
m:function(a,b){return this.bH(a,H.A(b))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.dq(a,u)
if(t==null)return
b.$2(t,this.bH(a,t))}},
gP:function(a){var u=H.c([],[P.e])
this.E(a,new W.h8(u))
return u},
gl:function(a){return a.length},
bH:function(a,b){return a.getItem(b)},
dq:function(a,b){return a.key(b)},
$aV:function(){return[P.e,P.e]},
$iG:1,
$aG:function(){return[P.e,P.e]}}
W.h8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:25}
W.ai.prototype={$iai:1}
W.bs.prototype={}
W.de.prototype={
T:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
u=W.l4("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).a_(0,new W.a1(u))
return t}}
W.df.prototype={
T:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.T(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga7(u)
s.toString
u=new W.a1(s)
r=u.ga7(u)
t.toString
r.toString
new W.a1(t).a_(0,new W.a1(r))
return t}}
W.he.prototype={
T:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.T(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga7(u)
t.toString
s.toString
new W.a1(t).a_(0,new W.a1(s))
return t}}
W.c5.prototype={$ic5:1}
W.aC.prototype={$iaC:1}
W.aj.prototype={$iaj:1}
W.hg.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aj]},
$at:function(){return[W.aj]},
$ii:1,
$ai:function(){return[W.aj]},
$ib:1,
$ab:function(){return[W.aj]},
$av:function(){return[W.aj]}}
W.hh.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$av:function(){return[W.aC]}}
W.hk.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.ak.prototype={$iak:1}
W.ho.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.hp.prototype={
gl:function(a){return a.length}}
W.b4.prototype={}
W.hJ.prototype={
i:function(a){return String(a)}}
W.hT.prototype={
gl:function(a){return a.length}}
W.aG.prototype={
geW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.aF("deltaY is not supported"))},
geV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.aF("deltaX is not supported"))},
$iaG:1}
W.cd.prototype={
ee:function(a,b){return a.requestAnimationFrame(H.cr(H.k(b,{func:1,ret:-1,args:[P.S]}),1))},
de:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ce.prototype={$ice:1}
W.i1.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.I]},
$at:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$av:function(){return[W.I]}}
W.du.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.ei(b,"$ia4",[P.S],"$aa4"))return!1
u=J.aa(b)
return a.left===u.gc0(b)&&a.top===u.gcm(b)&&a.width===u.gak(b)&&a.height===u.gai(b)},
gD:function(a){return W.ka(C.d.gD(a.left),C.d.gD(a.top),C.d.gD(a.width),C.d.gD(a.height))},
gai:function(a){return a.height},
gak:function(a){return a.width}}
W.ig.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.as]},
$at:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]},
$ib:1,
$ab:function(){return[W.as]},
$av:function(){return[W.as]}}
W.dL.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.iu.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$av:function(){return[W.aB]}}
W.iv.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ai]},
$at:function(){return[W.ai]},
$ii:1,
$ai:function(){return[W.ai]},
$ib:1,
$ab:function(){return[W.ai]},
$av:function(){return[W.ai]}}
W.i_.prototype={
E:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gP(this),t=u.length,s=this.a,r=J.aa(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.al(s,p))}},
gP:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.l(u,r)
q=H.n(u[r],"$ice")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aV:function(){return[P.e,P.e]},
$aG:function(){return[P.e,P.e]}}
W.i2.prototype={
m:function(a,b){return J.iW(this.a,H.A(b))},
gl:function(a){return this.gP(this).length}}
W.i3.prototype={}
W.jc.prototype={}
W.i4.prototype={}
W.i5.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ij"))},
$S:24}
W.b5.prototype={
cY:function(a){var u,t
u=$.jw()
if(u.a===0){for(t=0;t<262;++t)u.G(0,C.O[t],W.lT())
for(t=0;t<12;++t)u.G(0,C.p[t],W.lU())}},
ah:function(a){return $.kM().J(0,W.bR(a))},
a0:function(a,b,c){var u,t,s
u=W.bR(a)
t=$.jw()
s=t.m(0,H.h(u)+"::"+b)
if(s==null)s=t.m(0,"*::"+b)
if(s==null)return!1
return H.jk(s.$4(a,b,c,this))},
$ia8:1}
W.v.prototype={
gF:function(a){return new W.cO(a,this.gl(a),-1,[H.cu(this,a,"v",0)])}}
W.d2.prototype={
ah:function(a){return C.a.bR(this.a,new W.fC(a))},
a0:function(a,b,c){return C.a.bR(this.a,new W.fB(a,b,c))},
$ia8:1}
W.fC.prototype={
$1:function(a){return H.n(a,"$ia8").ah(this.a)},
$S:18}
W.fB.prototype={
$1:function(a){return H.n(a,"$ia8").a0(this.a,this.b,this.c)},
$S:18}
W.dT.prototype={
d0:function(a,b,c,d){var u,t,s
this.a.a_(0,c)
u=b.aI(0,new W.is())
t=b.aI(0,new W.it())
this.b.a_(0,u)
s=this.c
s.a_(0,C.Q)
s.a_(0,t)},
ah:function(a){return this.a.J(0,W.bR(a))},
a0:function(a,b,c){var u,t
u=W.bR(a)
t=this.c
if(t.J(0,H.h(u)+"::"+b))return this.d.ez(c)
else if(t.J(0,"*::"+b))return this.d.ez(c)
else{t=this.b
if(t.J(0,H.h(u)+"::"+b))return!0
else if(t.J(0,"*::"+b))return!0
else if(t.J(0,H.h(u)+"::*"))return!0
else if(t.J(0,"*::*"))return!0}return!1},
$ia8:1}
W.is.prototype={
$1:function(a){return!C.a.J(C.p,H.A(a))},
$S:19}
W.it.prototype={
$1:function(a){return C.a.J(C.p,H.A(a))},
$S:19}
W.ix.prototype={
a0:function(a,b,c){if(this.cS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iW(a,"template")==="")return this.e.J(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.A(a))},
$S:22}
W.iw.prototype={
ah:function(a){var u=J.Q(a)
if(!!u.$ic0)return!1
u=!!u.$im
if(u&&W.bR(a)==="foreignObject")return!1
if(u)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.c.aL(b,"on"))return!1
return this.ah(a)},
$ia8:1}
W.cO.prototype={
t:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbI(J.kO(this.a,u))
this.c=u
return!0}this.sbI(null)
this.c=t
return!1},
gA:function(a){return this.d},
sbI:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
W.a8.prototype={}
W.iq.prototype={$imu:1}
W.e7.prototype={
bi:function(a){new W.iC(this).$2(a,null)},
ao:function(a,b){if(b==null)J.jy(a)
else J.ek(b,a)},
eg:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kR(a)
s=J.iW(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ab(o)}q="element unprintable"
try{q=J.a6(a)}catch(o){H.ab(o)}try{p=W.bR(a)
this.ef(H.n(a,"$iJ"),b,u,q,p,H.n(t,"$iG"),H.A(s))}catch(o){if(H.ab(o) instanceof P.an)throw o
else{this.ao(a,b)
window
n="Removing corrupted element "+H.h(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ef:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.ao(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ah(a)){this.ao(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.ao(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gP(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gP(f).length-1,u=f.a,r=J.aa(u);s>=0;--s){if(s>=t.length)return H.l(t,s)
q=t[s]
if(!this.a.a0(a,J.kU(q),r.al(u,q))){window
p="Removing disallowed attribute <"+H.h(e)+" "+q+'="'+H.h(r.al(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.al(u,q)
r.ea(u,q)}}if(!!J.Q(a).$ic5)this.bi(a.content)},
$img:1}
W.iC.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.eg(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ao(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ab(r)
q=H.n(u,"$ix")
if(s){p=q.parentNode
if(p!=null)J.ek(p,q)}else J.ek(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$ix")}},
$S:30}
W.dt.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.ck.prototype={}
W.cl.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.eU.prototype={
gaT:function(){var u,t,s
u=this.b
t=H.ct(u,"t",0)
s=W.J
return new H.fl(new H.cc(u,H.k(new P.eV(),{func:1,ret:P.K,args:[t]}),[t]),H.k(new P.eW(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jx(this.b.a,b)},
gl:function(a){return J.bb(this.gaT().a)},
m:function(a,b){var u=this.gaT()
return u.b.$1(J.iV(u.a,b))},
gF:function(a){var u=P.jJ(this.gaT(),!1,W.J)
return new J.ac(u,u.length,0,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.eV.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:15}
P.eW.prototype={
$1:function(a){return H.bz(H.n(a,"$ix"),"$iJ")},
$S:36}
P.ik.prototype={}
P.a4.prototype={}
P.aK.prototype={$iaK:1}
P.fe.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return this.a2(a,b)},
u:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.aK]},
$ii:1,
$ai:function(){return[P.aK]},
$ib:1,
$ab:function(){return[P.aK]},
$av:function(){return[P.aK]}}
P.aN.prototype={$iaN:1}
P.fE.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return this.a2(a,b)},
u:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.aN]},
$ii:1,
$ai:function(){return[P.aN]},
$ib:1,
$ab:function(){return[P.aN]},
$av:function(){return[P.aN]}}
P.fK.prototype={
gl:function(a){return a.length}}
P.c0.prototype={$ic0:1}
P.hd.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return this.a2(a,b)},
u:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbU:function(a){return new P.eU(a,new W.a1(a))},
T:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.a8])
C.a.h(u,W.k9(null))
C.a.h(u,W.kc())
C.a.h(u,new W.iw())
c=new W.e7(new W.d2(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).eP(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a1(r)
p=u.ga7(u)
for(u=J.aa(q);s=p.firstChild,s!=null;)u.p(q,s)
return q},
$im:1}
P.aO.prototype={$iaO:1}
P.hq.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return this.a2(a,b)},
u:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.aO]},
$ii:1,
$ai:function(){return[P.aO]},
$ib:1,
$ab:function(){return[P.aO]},
$av:function(){return[P.aO]}}
P.dE.prototype={}
P.dF.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.e5.prototype={}
P.e6.prototype={}
P.eo.prototype={
gl:function(a){return a.length}}
P.ep.prototype={
m:function(a,b){return P.aQ(a.get(H.A(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.E(a,new P.eq(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
P.eq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.er.prototype={
gl:function(a){return a.length}}
P.bc.prototype={}
P.fF.prototype={
gl:function(a){return a.length}}
P.ds.prototype={}
P.cC.prototype={$icC:1}
P.cP.prototype={$icP:1}
P.d7.prototype={$id7:1}
P.bq.prototype={
bS:function(a,b,c){return a.attachShader(b,c)},
a1:function(a,b,c){return a.bindBuffer(b,c)},
eD:function(a,b,c){return a.bindFramebuffer(b,c)},
bT:function(a,b,c,d){return a.bufferData(b,c,d)},
eH:function(a,b){return a.clear(b)},
eI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eJ:function(a,b){return a.clearDepth(b)},
eK:function(a,b){return a.compileShader(b)},
eR:function(a,b){return a.createShader(b)},
eT:function(a,b){return a.deleteProgram(b)},
eU:function(a,b){return a.deleteShader(b)},
eX:function(a,b){return a.depthFunc(b)},
bW:function(a,b){return a.disableVertexAttribArray(b)},
eZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
ct:function(a,b,c){return a.getActiveAttrib(b,c)},
cu:function(a,b,c){return a.getActiveUniform(b,c)},
cv:function(a,b,c){return a.getAttribLocation(b,c)},
bh:function(a,b){return a.getParameter(b)},
cB:function(a,b){return a.getProgramInfoLog(b)},
aJ:function(a,b,c){return a.getProgramParameter(b,c)},
cC:function(a,b){return a.getShaderInfoLog(b)},
cD:function(a,b,c){return a.getShaderParameter(b,c)},
cE:function(a,b,c){return a.getUniformLocation(b,c)},
fa:function(a,b){return a.linkProgram(b)},
cL:function(a,b,c){return a.shaderSource(b,c)},
cn:function(a,b,c){return a.uniform1f(b,c)},
co:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
fM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fN:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibq:1}
P.db.prototype={$idb:1}
P.dk.prototype={$idk:1}
P.h5.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aQ(this.dn(a,b))},
u:function(a,b){return this.m(a,b)},
dn:function(a,b){return a.item(b)},
$at:function(){return[[P.G,,,]]},
$ii:1,
$ai:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$av:function(){return[[P.G,,,]]}}
P.dW.prototype={}
P.dX.prototype={}
O.aV.prototype={
cI:function(a,b,c){var u={func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]}
H.k(a,u)
H.k(c,u)
this.sbK(b)
this.sbJ(a)
this.sbL(c)},
bj:function(a,b){return this.cI(a,null,b)},
e1:function(a){H.r(a,"$ii",this.$ti,"$ai")
return!0},
dw:function(a,b){var u
H.r(b,"$ii",this.$ti,"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.ac(u,u.length,0,[H.u(u,0)])},
u:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
sdu:function(a){this.a=H.r(a,"$ib",this.$ti,"$ab")},
sbK:function(a){this.b=H.k(a,{func:1,ret:P.K,args:[[P.i,H.u(this,0)]]})},
sbJ:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
sbL:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
$ii:1}
O.bV.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
if(u==null){u=D.aY()
this.b=u}return u},
cX:function(a){var u=this.b
if(u!=null)u.U(a)},
a8:function(){return this.cX(null)},
gaq:function(a){var u=this.a
if(u.length>0)return C.a.gaF(u)
else return V.jM()},
cc:function(a){var u=this.a
if(a==null)C.a.h(u,V.jM())
else C.a.h(u,a)
this.a8()},
bf:function(){var u=this.a
if(u.length>0){u.pop()
this.a8()}},
saV:function(a){this.a=H.r(a,"$ib",[V.b1],"$ab")}}
E.es.prototype={}
E.a2.prototype={
bv:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ac(u,u.length,0,[H.u(u,0)]);u.t();){t=u.d
if(t.f==null)t.bv()}},
sbl:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gw().K(0,this.gc5())
t=this.c
if(t!=null)t.gw().h(0,this.gc5())
s=new D.O("shape",u,this.c,this,[F.dc])
s.b=!0
this.S(s)}},
sci:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gw().K(0,this.gc7())
t=this.f
this.f=a
if(a!=null)a.gw().h(0,this.gc7())
this.bv()
s=new D.O("technique",t,this.f,this,[O.bt])
s.b=!0
this.S(s)}},
sar:function(a){var u,t
if(!J.a_(this.r,a)){u=this.r
if(u!=null)u.gw().K(0,this.gc3())
if(a!=null)a.gw().h(0,this.gc3())
this.r=a
t=new D.O("mover",u,a,this,[U.bW])
t.b=!0
this.S(t)}},
cp:function(a,b){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.scr(u.a+u.d*b.y)
u.sca(0,u.b+u.e*b.y)
u.scf(u.c+u.f*b.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.b2(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.R(0,V.b2(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.R(0,V.b2(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.aH(0)}p=u.x}else p=null
if(!J.a_(p,this.x)){o=this.x
this.x=p
n=new D.O("matrix",o,p,this,[V.b1])
n.b=!0
this.S(n)}for(u=this.y.a,u=new J.ac(u,u.length,0,[H.u(u,0)]);u.t();)u.d.cp(0,b)},
aj:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gaq(u))
else C.a.h(u.a,t.R(0,u.gaq(u)))
u.a8()
a.cd(this.f)
u=a.dy
s=(u&&C.a).gaF(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.m(0,"Depth")
if(r==null){u=a.a
r=new A.eF(u,"Depth")
r.cV(u,"Depth")
t=$.l2
q=$.l1
r.c=t
r.d=q
r.e=r.bE(t,35633)
r.f=r.bE(r.d,35632)
t=u.createProgram()
r.r=t
C.b.bS(u,t,r.e)
C.b.bS(u,r.r,r.f)
C.b.fa(u,r.r)
if(!H.jk(C.b.aJ(u,r.r,35714))){p=C.b.cB(u,r.r)
C.b.eT(u,r.r)
H.Z(P.T("Failed to link shader: "+H.h(p)))}r.ei()
r.ek()
r.z=r.x.m(0,"posAttr")
r.Q=H.bz(r.y.m(0,"objClr"),"$ic9")
r.ch=H.bz(r.y.m(0,"fogClr"),"$ic9")
r.cx=H.bz(r.y.m(0,"fogStart"),"$ic8")
r.cy=H.bz(r.y.m(0,"fogStop"),"$ic8")
r.db=H.bz(r.y.m(0,"viewObjMat"),"$ica")
r.dx=H.bz(r.y.m(0,"projMat"),"$ica")
if(a.fr.bV(0,"Depth"))H.Z(P.T('Shader cache already contains a shader by the name "Depth".'))
a.fr.G(0,"Depth",r)}s.a=r
u=r}t=this.e
if(!(t instanceof Z.cE)){this.e=null
t=null}if(t==null){u=this.d.eF(new Z.hU(a.a),$.aR())
t=u.f0($.aR())
q=s.a
t.e=q.z.c
this.e=u
u=q}t=a.a
C.b.cq(t,u.r)
u.x.f_()
q=s.b
o=u.Q
o.toString
n=q.a
m=q.b
q=q.c
C.b.co(o.a,o.d,n,m,q)
q=s.c
m=u.ch
m.toString
n=q.a
o=q.b
q=q.c
C.b.co(m.a,m.d,n,o,q)
q=s.d
o=u.cx
C.b.cn(o.a,o.d,q)
q=s.e
o=u.cy
C.b.cn(o.a,o.d,q)
q=a.cy
q=q.gaq(q)
o=u.dx
o.toString
o.bk(q.ck(0,!0))
q=a.cx
if(q==null){q=a.db
q=q.gaq(q)
o=a.dx
o=q.R(0,o.gaq(o))
a.cx=o
q=o}u=u.db
u.toString
u.bk(q.ck(0,!0))
q=this.e
q.b3(a)
q.aj(a)
q.fK(a)
q=s.a
q.toString
C.b.cq(t,null)
q.x.eY()}for(u=this.y.a,u=new J.ac(u,u.length,0,[H.u(u,0)]);u.t();)u.d.aj(a)
a.cb()
a.dx.bf()},
S:function(a){var u=this.z
if(u!=null)u.U(a)},
W:function(){return this.S(null)},
c6:function(a){H.n(a,"$iE")
this.e=null
this.S(a)},
fk:function(){return this.c6(null)},
c8:function(a){this.S(H.n(a,"$iE"))},
fl:function(){return this.c8(null)},
c4:function(a){this.S(H.n(a,"$iE"))},
fj:function(){return this.c4(null)},
c2:function(a){this.S(H.n(a,"$iE"))},
fg:function(){return this.c2(null)},
ff:function(a,b){var u,t,s,r,q,p,o
H.r(b,"$ii",[E.a2],"$ai")
for(u=b.length,t=this.gc1(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bS()
o.sae(null)
o.say(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sae(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
fi:function(a,b){var u,t
H.r(b,"$ii",[E.a2],"$ai")
for(u=b.gF(b),t=this.gc1();u.t();)u.gA(u).gw().K(0,t)
this.W()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sd7:function(a,b){this.y=H.r(b,"$iaV",[E.a2],"$aaV")},
$ijN:1}
E.fO.prototype={
cT:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.bg(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bV()
t=[V.b1]
u.saV(H.c([],t))
u.b=null
u.gw().h(0,new E.fP(this))
this.cy=u
u=new O.bV()
u.saV(H.c([],t))
u.b=null
u.gw().h(0,new E.fQ(this))
this.db=u
u=new O.bV()
u.saV(H.c([],t))
u.b=null
u.gw().h(0,new E.fR(this))
this.dx=u
this.sep(H.c([],[O.bt]))
u=this.dy;(u&&C.a).h(u,null)
this.sel(new H.av([P.e,A.c1]))},
cd:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaF(u):a;(u&&C.a).h(u,t)},
cb:function(){var u=this.dy
if(u.length>1)u.pop()},
sep:function(a){this.dy=H.r(a,"$ib",[O.bt],"$ab")},
sel:function(a){this.fr=H.r(a,"$iG",[P.e,A.c1],"$aG")}}
E.fP.prototype={
$1:function(a){var u
H.n(a,"$iE")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fQ.prototype={
$1:function(a){var u
H.n(a,"$iE")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fR.prototype={
$1:function(a){var u
H.n(a,"$iE")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dh.prototype={
bq:function(a){H.n(a,"$iE")
this.ce()},
bp:function(){return this.bq(null)},
bN:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.R()
if(typeof u!=="number")return H.b9(u)
s=C.d.bZ(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.R()
r=C.d.bZ(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.k1(C.m,this.gfz())}},
ce:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hj(this),{func:1,ret:-1,args:[P.S]})
C.z.de(u)
C.z.ee(u,W.ki(t,P.S))}},
fw:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bN()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bg(r,!1)
s.y=P.l3(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.a8()
r=s.db
C.a.sl(r.a,0)
r.a8()
r=s.dx
C.a.sl(r.a,0)
r.a8()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aj(this.e)}}catch(q){u=H.ab(q)
t=H.by(q)
P.kt("Error: "+H.h(u))
P.kt("Stack: "+H.h(t))
throw H.f(u)}}}
E.hj.prototype={
$1:function(a){var u
H.m3(a)
u=this.a
if(u.ch){u.ch=!1
u.fw()}},
$S:23}
Z.dq.prototype={$ima:1}
Z.cD.prototype={
b3:function(a){var u,t,s
try{t=a.a
C.b.bY(t,this.e)
C.b.fM(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ab(s)
t=P.T('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}}
Z.hU.prototype={$imb:1}
Z.cE.prototype={
f0:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b3:function(a){var u,t
u=this.a
C.b.a1(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b3(a)},
fK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.bW(s,u[t].e)
C.b.a1(s,this.a.a,null)},
aj:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.l(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a1(t,p,r.b)
C.b.eZ(t,q.a,q.b,5123,0)
C.b.a1(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.a6(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sdm:function(a){this.b=H.r(a,"$ib",[Z.b_],"$ab")},
$imj:1}
Z.b_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}}
Z.dp.prototype={
gbm:function(a){var u,t
u=this.a
t=(u&$.aR().a)!==0?3:0
if((u&$.bE().a)!==0)t+=3
if((u&$.bD().a)!==0)t+=3
if((u&$.bF().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=4
if((u&$.bH().a)!==0)++t
return(u&$.bC().a)!==0?t+4:t},
eA:function(a){var u,t,s
u=$.aR()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bE()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bD()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bF()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bH()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bC()
if((t&u.a)!==0)if(s===a)return u
return $.kL()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dp))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.e])
t=this.a
if((t&$.aR().a)!==0)C.a.h(u,"Pos")
if((t&$.bE().a)!==0)C.a.h(u,"Norm")
if((t&$.bD().a)!==0)C.a.h(u,"Binm")
if((t&$.bF().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cv().a)!==0)C.a.h(u,"Clr3")
if((t&$.cw().a)!==0)C.a.h(u,"Clr4")
if((t&$.bH().a)!==0)C.a.h(u,"Weight")
if((t&$.bC().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ev.prototype={}
D.bS.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.E]}
H.k(b,u)
if(this.a==null)this.sae(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.E]})
u=this.a
u=u==null?null:C.a.J(u,b)
if(u===!0){u=this.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.J(u,b)
if(u===!0){u=this.b
t=(u&&C.a).K(u,b)||t}return t},
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
if(a==null){a=new D.E(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.E(P.jJ(t,!0,{func:1,ret:-1,args:[D.E]}),new D.eQ(u))
t=this.b
if(t!=null){this.say(H.c([],[{func:1,ret:-1,args:[D.E]}]))
C.a.E(t,new D.eR(u))}return!0},
fA:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.U(t)}}},
aH:function(a){return this.fA(a,!0,!1)},
sae:function(a){this.a=H.r(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")},
say:function(a){this.b=H.r(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")}}
D.eQ.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.eR.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.E.prototype={}
D.f5.prototype={}
D.f6.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cF.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cF))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.cV.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fd.prototype={
fs:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fn:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
se8:function(a){this.d=H.r(a,"$ijX",[P.y],"$ajX")}}
X.fi.prototype={
be:function(a,b){this.r=a.a
return!1},
at:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cG()
if(typeof u!=="number")return u.cs()
this.r=(u&~t)>>>0
return!1},
as:function(a,b){return!1},
ft:function(a){return!1},
dR:function(a,b,c){return}}
X.aM.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aM))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fu.prototype={
be:function(a,b){this.f=a.a
return!1},
at:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cG()
if(typeof u!=="number")return u.cs()
this.f=(u&~t)>>>0
return!1},
as:function(a,b){return!1},
fu:function(a,b){return!1}}
X.hn.prototype={
fq:function(a){H.r(a,"$ib",[V.a9],"$ab")
return!1},
fo:function(a){H.r(a,"$ib",[V.a9],"$ab")
return!1},
fp:function(a){H.r(a,"$ib",[V.a9],"$ab")
return!1}}
X.dn.prototype={
bD:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cV(u,new X.aM(t,a.altKey,a.shiftKey))},
ag:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aM(t,a.altKey,a.shiftKey)},
b2:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aM(t,a.altKey,a.shiftKey)},
a4:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.Z()
q=u.top
if(typeof s!=="number")return s.Z()
return new V.a9(t-r,s-q)},
an:function(a){return new V.aP(a.movementX,a.movementY)},
b_:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a9])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.d.Y(p.pageX)
C.d.Y(p.pageY)
n=u.left
C.d.Y(p.pageX)
C.a.h(t,new V.a9(o-n,C.d.Y(p.pageY)-u.top))}return t},
a3:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cF(u,new X.aM(t,a.altKey,a.shiftKey))},
aW:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.Z()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.Z()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
dM:function(a){this.f=!0},
dA:function(a){this.f=!1},
dG:function(a){H.n(a,"$iW")
if(this.f&&this.aW(a))a.preventDefault()},
dQ:function(a){var u
H.n(a,"$iaw")
if(!this.f)return
u=this.bD(a)
this.b.fs(u)},
dO:function(a){var u
H.n(a,"$iaw")
if(!this.f)return
u=this.bD(a)
this.b.fn(u)},
dT:function(a){var u,t,s,r
H.n(a,"$iW")
u=this.a
u.focus()
this.f=!0
this.ag(a)
if(this.x){t=this.a3(a)
s=this.an(a)
if(this.d.be(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a3(a)
r=this.a4(a)
if(this.c.be(t,r))a.preventDefault()},
dX:function(a){var u,t,s
H.n(a,"$iW")
this.ag(a)
u=this.a3(a)
if(this.x){t=this.an(a)
if(this.d.at(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.at(u,s))a.preventDefault()},
dK:function(a){var u,t,s
H.n(a,"$iW")
if(!this.aW(a)){this.ag(a)
u=this.a3(a)
if(this.x){t=this.an(a)
if(this.d.at(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.at(u,s))a.preventDefault()}},
dV:function(a){var u,t,s
H.n(a,"$iW")
this.ag(a)
u=this.a3(a)
if(this.x){t=this.an(a)
if(this.d.as(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.as(u,s))a.preventDefault()},
dI:function(a){var u,t,s
H.n(a,"$iW")
if(!this.aW(a)){this.ag(a)
u=this.a3(a)
if(this.x){t=this.an(a)
if(this.d.as(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.as(u,s))a.preventDefault()}},
dZ:function(a){var u,t
H.n(a,"$iaG")
this.ag(a)
u=new V.aP((a&&C.y).geV(a),C.y.geW(a)).L(0,180)
if(this.x){if(this.d.ft(u))a.preventDefault()
return}if(this.r)return
t=this.a4(a)
if(this.c.fu(u,t))a.preventDefault()},
e0:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a3(this.y)
s=this.a4(this.y)
this.d.dR(t,s,u)}},
e7:function(a){var u
H.n(a,"$iak")
this.a.focus()
this.f=!0
this.b2(a)
u=this.b_(a)
if(this.e.fq(u))a.preventDefault()},
e3:function(a){var u
H.n(a,"$iak")
this.b2(a)
u=this.b_(a)
if(this.e.fo(u))a.preventDefault()},
e5:function(a){var u
H.n(a,"$iak")
this.b2(a)
u=this.b_(a)
if(this.e.fp(u))a.preventDefault()},
sdf:function(a){this.z=H.r(a,"$ib",[[P.c4,P.H]],"$ab")}}
V.be.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.be))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bf.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}}
V.eO.prototype={}
V.b1.prototype={
ck:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
R:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b2(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.L().a
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
i:function(a){return this.B()},
c_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.iL(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.iL(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.iL(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.iL(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.l(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.l(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.l(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.l(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.l(t,1)
l=l+t[1]+", "
if(1>=o)return H.l(s,1)
l=l+s[1]+", "
if(1>=n)return H.l(r,1)
l=l+r[1]+", "
if(1>=m)return H.l(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.l(t,2)
p=p+t[2]+", "
if(2>=o)return H.l(s,2)
p=p+s[2]+", "
if(2>=n)return H.l(r,2)
p=p+r[2]+", "
if(2>=m)return H.l(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.l(t,3)
l=l+t[3]+", "
if(3>=o)return H.l(s,3)
l=l+s[3]+", "
if(3>=n)return H.l(r,3)
l=l+r[3]+", "
if(3>=m)return H.l(q,3)
return p+(l+q[3]+"]")},
B:function(){return this.c_("",3,0)},
q:function(a){return this.c_(a,3,0)}}
V.a9.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.bm.prototype={
Z:function(a,b){return new V.bm(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bm))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.d6.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}}
V.d9.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}}
V.aP.prototype={
bc:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.R()
t=this.b
if(typeof t!=="number")return t.R()
return Math.sqrt(u*u+t*t)},
L:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.k4
if(u==null){u=new V.aP(0,0)
$.k4=u}return u}u=this.a
if(typeof u!=="number")return u.L()
t=this.b
if(typeof t!=="number")return t.L()
return new V.aP(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.Z()
if(typeof t!=="number")return H.b9(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.Z()
if(typeof t!=="number")return H.b9(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.R.prototype={
bc:function(a){return Math.sqrt(this.O(this))},
O:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ba:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
aK:function(a){return new V.R(-this.a,-this.b,-this.c)},
L:function(a,b){if(Math.abs(b-0)<$.L().a)return V.j9()
return new V.R(this.a/b,this.b/b,this.c/b)},
f8:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.cH.prototype={
gw:function(){var u=this.b
if(u==null){u=D.aY()
this.b=u}return u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.bW.prototype={}
U.da.prototype={
gw:function(){var u=this.y
if(u==null){u=D.aY()
this.y=u}return u},
af:function(a){var u=this.y
if(u!=null)u.U(a)},
scr:function(a){var u
a=V.jt(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.L().a)){this.a=a
u=new D.O("yaw",u,a,this,[P.w])
u.b=!0
this.af(u)}},
sca:function(a,b){var u
b=V.jt(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.L().a)){this.b=b
u=new D.O("pitch",u,b,this,[P.w])
u.b=!0
this.af(u)}},
scf:function(a){var u
a=V.jt(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
u=new D.O("roll",u,a,this,[P.w])
u.b=!0
this.af(u)}},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
u=this.a
t=b.a
s=$.L().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}}
M.cM.prototype={
aa:function(a){var u
H.n(a,"$iE")
u=this.x
if(u!=null)u.U(a)},
d_:function(){return this.aa(null)},
dC:function(a,b){var u,t,s,r,q,p,o,n
u=E.a2
H.r(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga9(),r={func:1,ret:-1,args:[D.E]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bS()
n.sae(null)
n.say(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.f5(a,b,this,[u])
u.b=!0
this.aa(u)},
dE:function(a,b){var u,t,s
u=E.a2
H.r(b,"$ii",[u],"$ai")
for(t=b.gF(b),s=this.ga9();t.t();)t.gA(t).gw().K(0,s)
u=new D.f6(a,b,this,[u])
u.b=!0
this.aa(u)},
gw:function(){var u=this.x
if(u==null){u=D.aY()
this.x=u}return u},
aj:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.cd(this.c)
u=this.b
u.toString
t=a1.a
C.b.eD(t,36160,null)
C.b.bX(t,2884)
C.b.bX(t,2929)
C.b.eX(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.b9(s)
o=C.d.Y(p*s)
p=q.b
if(typeof r!=="number")return H.b9(r)
n=C.d.Y(p*r)
p=C.d.Y(q.c*s)
a1.c=p
q=C.d.Y(q.d*r)
a1.d=q
C.b.fN(t,o,n,p,q)
C.b.eJ(t,u.c)
u=u.a
C.b.eI(t,u.a,u.b,u.c,u.d)
C.b.eH(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b2(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cc(i)
t=$.jQ
if(t==null){t=$.jS
if(t==null){t=new V.bm(0,0,0)
$.jS=t}q=$.k6
if(q==null){q=new V.R(0,1,0)
$.k6=q}p=$.k5
if(p==null){p=new V.R(0,0,-1)
$.k5=p}h=p.L(0,Math.sqrt(p.O(p)))
q=q.ba(h)
g=q.L(0,Math.sqrt(q.O(q)))
f=h.ba(g)
e=new V.R(t.a,t.b,t.c)
d=g.aK(0).O(e)
c=f.aK(0).O(e)
b=h.aK(0).O(e)
t=V.b2(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jQ=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.R(0,a)}a1.db.cc(a)
for(u=this.d.a,u=new J.ac(u,u.length,0,[H.u(u,0)]);u.t();)u.d.cp(0,a1)
for(u=this.d.a,u=new J.ac(u,u.length,0,[H.u(u,0)]);u.t();)u.d.aj(a1)
this.a.toString
a1.cy.bf()
a1.db.bf()
this.b.toString
a1.cb()},
scZ:function(a,b){this.d=H.r(b,"$iaV",[E.a2],"$aaV")},
$imh:1}
A.cA.prototype={}
A.en.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
f_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.bY(r.a,r.c)}},
eY:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.bW(r.a,r.c)}}}
A.eF.prototype={}
A.c1.prototype={
cV:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bE:function(a,b){var u,t,s
u=this.a
t=C.b.eR(u,b)
C.b.cL(u,t,a)
C.b.eK(u,t)
if(!H.jk(C.b.cD(u,t,35713))){s=C.b.cC(u,t)
C.b.eU(u,t)
throw H.f(P.T("Error compiling shader '"+H.h(t)+"': "+H.h(s)))}return t},
ei:function(){var u,t,s,r,q,p
u=H.c([],[A.cA])
t=this.a
s=H.Y(C.b.aJ(t,this.r,35721))
if(typeof s!=="number")return H.b9(s)
r=0
for(;r<s;++r){q=C.b.ct(t,this.r,r)
p=C.b.cv(t,this.r,q.name)
C.a.h(u,new A.cA(t,q.name,p))}this.x=new A.en(u)},
ek:function(){var u,t,s,r,q,p
u=H.c([],[A.dj])
t=this.a
s=H.Y(C.b.aJ(t,this.r,35718))
if(typeof s!=="number")return H.b9(s)
r=0
for(;r<s;++r){q=C.b.cu(t,this.r,r)
p=C.b.cE(t,this.r,q.name)
C.a.h(u,this.eS(q.type,q.size,q.name,p))}this.y=new A.hB(u)},
ad:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hu(u,t,b,c)
else return A.j8(u,t,b,a,c)},
da:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hE(u,t,b,c)
else return A.j8(u,t,b,a,c)},
dc:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hF(u,t,b,c)
else return A.j8(u,t,b,a,c)},
aC:function(a,b){return new P.dz(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
eS:function(a,b,c,d){switch(a){case 5120:return this.ad(b,c,d)
case 5121:return this.ad(b,c,d)
case 5122:return this.ad(b,c,d)
case 5123:return this.ad(b,c,d)
case 5124:return this.ad(b,c,d)
case 5125:return this.ad(b,c,d)
case 5126:return new A.c8(this.a,this.r,c,d)
case 35664:return new A.hw(this.a,this.r,c,d)
case 35665:return new A.c9(this.a,this.r,c,d)
case 35666:return new A.hz(this.a,this.r,c,d)
case 35667:return new A.hx(this.a,this.r,c,d)
case 35668:return new A.hy(this.a,this.r,c,d)
case 35669:return new A.hA(this.a,this.r,c,d)
case 35674:return new A.hC(this.a,this.r,c,d)
case 35675:return new A.hD(this.a,this.r,c,d)
case 35676:return new A.ca(this.a,this.r,c,d)
case 35678:return this.da(b,c,d)
case 35680:return this.dc(b,c,d)
case 35670:throw H.f(this.aC("BOOL",c))
case 35671:throw H.f(this.aC("BOOL_VEC2",c))
case 35672:throw H.f(this.aC("BOOL_VEC3",c))
case 35673:throw H.f(this.aC("BOOL_VEC4",c))
default:throw H.f(P.T("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dj.prototype={}
A.hB.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.B()},
f4:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
B:function(){return this.f4("\n")}}
A.hu.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
ses:function(a){this.e=H.r(a,"$ib",[P.y],"$ab")}}
A.c8.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.c9.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.hD.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ca.prototype={
bk:function(a){var u=new Float32Array(H.jf(H.r(a,"$ib",[P.w],"$ab")))
C.b.fL(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hE.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.hF.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iE.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.bd(u.b,b).bd(u.d.bd(u.c,b),c)
u=new V.bm(t.a,t.b,t.c)
if(!J.a_(a.f,u)){a.f=u
u=a.a
if(u!=null)u.W()}u=t.L(0,Math.sqrt(t.O(t)))
if(!J.a_(a.z,u)){a.z=u
u=a.a
if(u!=null)u.W()}u=1-b
s=1-c
s=new V.d6(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a_(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.W()}},
$S:31}
F.U.prototype={
d5:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.j9()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.f8())return
return q.L(0,Math.sqrt(q.O(q)))},
d6:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.Z(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.L(0,Math.sqrt(u.O(u)))
u=r.Z(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.ba(u.L(0,Math.sqrt(u.O(u))))
return u.L(0,Math.sqrt(u.O(u)))},
b5:function(){if(this.d!=null)return!0
var u=this.d5()
if(u==null){u=this.d6()
if(u==null)return!1}this.d=u
this.a.a.W()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.X(J.a6(u.e),0)+", "+C.c.X(J.a6(this.b.e),0)+", "+C.c.X(J.a6(this.c.e),0)+" {"
u=this.d
t=(u!=null?t+(u.i(0)+", "):t+"-, ")+"-}"
return t},
B:function(){return this.q("")}}
F.aL.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.X(J.a6(u.e),0)+", "+C.c.X(J.a6(this.b.e),0)},
B:function(){return this.q("")}}
F.b3.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.X(J.a6(u.e),0)},
B:function(){return this.q("")}}
F.dc.prototype={
gw:function(){var u=this.e
if(u==null){u=D.aY()
this.e=u}return u},
fd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.I()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.eN())}this.a.I()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.I()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.b3()
if(m.a==null)H.Z(P.T("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.U(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.I()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.I()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aL()
n=k.a
if(n==null)H.Z(P.T("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.Z(P.T("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.U(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.I()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.I()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.I()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cN(k,j,h)}u=this.e
if(u!=null)u.aH(0)},
eF:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aR()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bE().a)!==0)++r
if((s&$.bD().a)!==0)++r
if((s&$.bF().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.cv().a)!==0)++r
if((s&$.cw().a)!==0)++r
if((s&$.bH().a)!==0)++r
if((s&$.bC().a)!==0)++r
q=a1.gbm(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cD])
for(m=0,l=0;l<r;++l){k=a1.eA(l)
j=k.gbm(k)
C.a.G(n,l,new Z.cD(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.l(t,i)
h=t[i].fb(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.G(o,g,h[f]);++g}}m+=j}H.r(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a1(t,34962,e)
C.b.bT(t,34962,new Float32Array(H.jf(o)),35044)
C.b.a1(t,34962,null)
d=new Z.cE(new Z.dq(34962,e),n,a1)
d.sdm(H.c([],[Z.b_]))
if(this.b.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)}a=Z.jb(t,34963,H.r(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.b_(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)}a=Z.jb(t,34963,H.r(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.b_(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].c
b.a.a.I()
C.a.h(c,b.e)}a=Z.jb(t,34963,H.r(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.b_(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.q("   "))}return C.a.k(u,"\n")},
S:function(a){var u=this.e
if(u!=null)u.U(a)},
W:function(){return this.S(null)},
$imi:1}
F.fX.prototype={
ew:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.r(c,"$ib",[F.am],"$ab")
u=H.c([],[F.U])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.l(c,r)
l=c[r];++r
if(r>=m)return H.l(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.l(c,j)
i=c[j]
if(s<0||s>=m)return H.l(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cN(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cN(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cN(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cN(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
b6:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].b5())s=!1
return s},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
B:function(){return this.q("")},
sdg:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")}}
F.fY.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.l(r,s)
C.a.h(u,r[s].q(a+(""+s+". ")))}return C.a.k(u,"\n")},
B:function(){return this.q("")},
sdr:function(a){this.b=H.r(a,"$ib",[F.aL],"$ab")}}
F.fZ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
B:function(){return this.q("")},
saZ:function(a){this.b=H.r(a,"$ib",[F.b3],"$ab")}}
F.am.prototype={
b9:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ja(this.cx,s,p,u,t,r,q,a,o)},
eN:function(){return this.b9(null)},
fb:function(a){var u,t
if(a.n(0,$.aR())){u=this.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bE())){u=this.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bD())){u=H.c([0,0,1],[P.w])
return u}else if(a.n(0,$.bF())){u=this.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bG())){u=this.z
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cv())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cw())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bH()))return H.c([this.ch],[P.w])
else if(a.n(0,$.bC())){u=this.cx
t=[P.w]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.w])},
b5:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.j9()
this.d.E(0,new F.hS(u))
u=u.a
this.r=u.L(0,Math.sqrt(u.O(u)))
u=this.a
if(u!=null){u.W()
u=this.a.e
if(u!=null)u.aH(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var u,t,s
u=H.c([],[P.e])
C.a.h(u,C.c.X(J.a6(this.e),0))
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
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.D(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
B:function(){return this.q("")}}
F.hS.prototype={
$1:function(a){var u,t
H.n(a,"$iU")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:7}
F.hM.prototype={
I:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.T("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.W()
return!0},
gl:function(a){return this.c.length},
b6:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].b5()
return!0},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
this.I()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
B:function(){return this.q("")},
seu:function(a){this.c=H.r(a,"$ib",[F.am],"$ab")}}
F.hN.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){H.k(b,{func:1,ret:-1,args:[F.U]})
C.a.E(this.b,b)
C.a.E(this.c,new F.hO(this,b))
C.a.E(this.d,new F.hP(this,b))},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
B:function(){return this.q("")},
sdh:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")},
sdi:function(a){this.c=H.r(a,"$ib",[F.U],"$ab")},
sdj:function(a){this.d=H.r(a,"$ib",[F.U],"$ab")}}
F.hO.prototype={
$1:function(a){H.n(a,"$iU")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:7}
F.hP.prototype={
$1:function(a){var u
H.n(a,"$iU")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:7}
F.hQ.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
B:function(){return this.q("")},
sds:function(a){this.b=H.r(a,"$ib",[F.aL],"$ab")},
sdt:function(a){this.c=H.r(a,"$ib",[F.aL],"$ab")}}
F.hR.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
B:function(){return this.q("")},
saZ:function(a){this.b=H.r(a,"$ib",[F.b3],"$ab")}}
O.eE.prototype={
gw:function(){var u=this.f
if(u==null){u=D.aY()
this.f=u}return u},
aw:function(a){var u=this.f
if(u!=null)u.U(a)}}
O.bt.prototype={}
T.hi.prototype={}
V.aI.prototype={
a5:function(a,b){return!0},
i:function(a){return"all"},
$ia7:1}
V.a7.prototype={}
V.cZ.prototype={
a5:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].a5(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sM:function(a){this.a=H.r(a,"$ib",[V.a7],"$ab")},
$ia7:1}
V.a3.prototype={
a5:function(a,b){return!this.cR(0,b)},
i:function(a){return"!["+this.bn(0)+"]"}}
V.fM.prototype={
a5:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.j5(this.a)
t=H.j5(this.b)
return u+".."+t},
$ia7:1}
V.fW.prototype={
cU:function(a){var u,t
if(a.a.length<=0)throw H.f(P.T("May not create a SetMatcher with zero characters."))
u=new H.av([P.y,P.K])
for(t=new H.bU(a,a.gl(a),0,[H.ct(a,"t",0)]);t.t();)u.G(0,t.d,!0)
this.seh(u)},
a5:function(a,b){return this.a.bV(0,b)},
i:function(a){var u=this.a
return P.j6(new H.cW(u,[H.u(u,0)]),0,null)},
seh:function(a){this.a=H.r(a,"$iG",[P.y,P.K],"$aG")},
$ia7:1}
V.c2.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c7(this.a.j(0,b))
r.sM(H.c([],[V.a7]))
r.c=!1
C.a.h(this.c,r)
return r},
f1:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.a5(0,a))return r}return},
i:function(a){return this.b},
ser:function(a){this.c=H.r(a,"$ib",[V.c7],"$ab")}}
V.di.prototype={
i:function(a){var u,t
u=H.js(this.b,"\n","\\n")
t=H.js(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c6.prototype={
a6:function(a,b,c){var u,t,s
H.r(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.G(0,s,b)}},
i:function(a){return this.b},
sed:function(a){var u=P.e
this.c=H.r(a,"$iG",[u,u],"$aG")}}
V.hl.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c2(this,b)
u.ser(H.c([],[V.c7]))
u.d=null
this.a.G(0,b,u)}return u},
C:function(a){var u,t
u=this.b.m(0,a)
if(u==null){u=new V.c6(this,a)
t=P.e
u.sed(new H.av([t,t]))
this.b.G(0,a,u)}return u},
cl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.di])
t=this.c
s=[P.y]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.ac(a,o)
m=t.f1(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.j6(r,0,null)
throw H.f(P.T("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.j6(r,0,null)
k=t.d
j=k.c.m(0,l)
p=new V.di(j==null?k.b:j,l,o)}++o}}},
sen:function(a){this.a=H.r(a,"$iG",[P.e,V.c2],"$aG")},
seq:function(a){this.b=H.r(a,"$iG",[P.e,V.c6],"$aG")}}
V.c7.prototype={
i:function(a){return this.b.b+": "+this.bn(0)}}
X.cG.prototype={$ijN:1}
X.eZ.prototype={
gw:function(){var u=this.x
if(u==null){u=D.aY()
this.x=u}return u}}
X.d4.prototype={
gw:function(){var u=this.f
if(u==null){u=D.aY()
this.f=u}return u},
ab:function(a){var u
H.n(a,"$iE")
u=this.f
if(u!=null)u.U(a)},
d2:function(){return this.ab(null)},
sar:function(a){var u,t
if(!J.a_(this.b,a)){u=this.b
if(u!=null)u.gw().K(0,this.gbr())
t=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gbr())
u=new D.O("mover",t,this.b,this,[U.bW])
u.b=!0
this.ab(u)}},
$ijN:1,
$icG:1}
X.dg.prototype={}
V.aU.prototype={
av:function(a){this.b=new P.f2(C.F)
this.c=null
this.saU(H.c([],[[P.b,W.ad]]))},
v:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.ad]))
t=a.split("\n")
for(u=t.length,s=[W.ad],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.A(p)
n=this.b.d9(p,0,p.length)
m=n==null?p:n
C.e.cJ(o,H.js(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaF(this.d),o)}},
c9:function(a,b){var u,t,s,r
H.r(b,"$ib",[P.e],"$ab")
this.saU(H.c([],[[P.b,W.ad]]))
u=C.a.k(b,"\n")
t=this.c
if(t==null){t=this.aD()
this.c=t}for(t=t.cl(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.aG(t[r])},
saU:function(a){this.d=H.r(a,"$ib",[[P.b,W.ad]],"$ab")}}
V.eC.prototype={
aG:function(a){switch(a.a){case"Class":this.v(a.b,"#551")
break
case"Comment":this.v(a.b,"#777")
break
case"Id":this.v(a.b,"#111")
break
case"Num":this.v(a.b,"#191")
break
case"Reserved":this.v(a.b,"#119")
break
case"String":this.v(a.b,"#171")
break
case"Symbol":this.v(a.b,"#616")
break
case"Type":this.v(a.b,"#B11")
break
case"Whitespace":this.v(a.b,"#111")
break}},
aD:function(){var u,t,s,r
u=V.hm()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.N("a","z")
C.a.h(t.a,s)
s=V.N("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.N("0","9")
C.a.h(s.a,t)
t=V.N("a","z")
C.a.h(s.a,t)
t=V.N("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.N("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.N("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.q(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.N("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.N("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.q(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aI())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.q(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.q(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.q(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.q(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aI())
s=u.j(0,"Start").k(0,"Slash")
t=V.q(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a3()
r=[V.a7]
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.a3()
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.q(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.q(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.C("Num")
s=u.j(0,"Float")
s.d=s.a.C("Num")
s=u.j(0,"Sym")
s.d=s.a.C("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.C("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.C("String")
s=u.j(0,"EndComment")
s.d=s.a.C("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.C("Whitespace")
s=u.j(0,"Id")
t=s.a.C("Id")
s.d=t
s=[P.e]
t.a6(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.a6(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.a6(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f_.prototype={
aG:function(a){switch(a.a){case"Builtin":this.v(a.b,"#411")
break
case"Comment":this.v(a.b,"#777")
break
case"Id":this.v(a.b,"#111")
break
case"Num":this.v(a.b,"#191")
break
case"Preprocess":this.v(a.b,"#737")
break
case"Reserved":this.v(a.b,"#119")
break
case"Symbol":this.v(a.b,"#611")
break
case"Type":this.v(a.b,"#171")
break
case"Whitespace":this.v(a.b,"#111")
break}},
aD:function(){var u,t,s,r
u=V.hm()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.N("a","z")
C.a.h(t.a,s)
s=V.N("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.N("0","9")
C.a.h(s.a,t)
t=V.N("a","z")
C.a.h(s.a,t)
t=V.N("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.N("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.N("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.q(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.N("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.N("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.q(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aI())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a3()
r=[V.a7]
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.q(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.a3()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.q(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.q(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.C("Num")
t=u.j(0,"Float")
t.d=t.a.C("Num")
t=u.j(0,"Sym")
t.d=t.a.C("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.C("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.C("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.C("Whitespace")
t=u.j(0,"Id")
s=t.a.C("Id")
t.d=s
t=[P.e]
s.a6(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.a6(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.a6(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.f0.prototype={
aG:function(a){switch(a.a){case"Attr":this.v(a.b,"#911")
this.v("=","#111")
break
case"Id":this.v(a.b,"#111")
break
case"Other":this.v(a.b,"#111")
break
case"Reserved":this.v(a.b,"#119")
break
case"String":this.v(a.b,"#171")
break
case"Symbol":this.v(a.b,"#616")
break}},
aD:function(){var u,t,s
u=V.hm()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.N("a","z")
C.a.h(t.a,s)
s=V.N("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.N("0","9")
C.a.h(s.a,t)
t=V.N("a","z")
C.a.h(s.a,t)
t=V.N("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.q(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.q(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.q(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.q(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aI())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aI())
t=u.j(0,"Other").k(0,"Other")
s=new V.a3()
s.sM(H.c([],[V.a7]))
C.a.h(t.a,s)
t=V.q(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.N("a","z")
C.a.h(s.a,t)
t=V.N("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.C("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.C("String")
t=u.j(0,"Id")
s=t.a.C("Id")
t.d=s
s.a6(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.j(0,"Attr")
s.d=s.a.C("Attr")
s=u.j(0,"Other")
s.d=s.a.C("Other")
return u}}
V.fI.prototype={
c9:function(a,b){H.r(b,"$ib",[P.e],"$ab")
this.saU(H.c([],[[P.b,W.ad]]))
this.v(C.a.k(b,"\n"),"#111")},
aG:function(a){},
aD:function(){return}}
V.h_.prototype={
cW:function(a,b){var u,t,s,r,q,p,o
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
o=W.j
W.X(u,"scroll",H.k(new V.h1(s),{func:1,ret:-1,args:[o]}),!1,o)},
ex:function(a,b,c){var u,t,s,r
a=H.Y(C.h.eG(a,0,4))
if(c.length===0)c=P.je(C.n,b,C.l,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.iX(null)
r.href="#"+c
r.textContent=b
C.e.p(u,r)
C.e.p(this.a,u)},
ap:function(a,b){return this.ex(a,b,"")},
N:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.r(a,"$ib",[P.e],"$ab")
this.ej()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cl(C.a.f9(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.m7(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.A(m[1])
l.textContent=H.A(m[0])
C.e.p(t,l)}else{k=P.je(C.n,n,C.l,!1)
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
cw:function(a){var u,t,s,r
u=new V.eC("dart")
u.av("dart")
t=new V.f_("glsl")
t.av("glsl")
s=new V.f0("html")
s.av("html")
r=C.a.f2(H.c([u,t,s],[V.aU]),new V.h2(a))
if(r!=null)return r
u=new V.fI("plain")
u.av("plain")
return u},
bQ:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.r(a7,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(C.c.aL(r,"+")){C.a.G(a7,s,C.c.aM(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aL(r,"-")){C.a.G(a7,s,C.c.aM(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cw(a5)
q.c9(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.p(o,n)
C.e.p(this.a,o)
m=P.je(C.n,a4,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iX(null)
i.href="#"+m
i.textContent=a4
C.e.p(j,i)
C.q.p(k,j)
C.i.p(l,k)
C.k.p(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.l(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.q.p(a,r[a0])
C.i.p(e,d)
C.i.p(e,c)
C.i.p(e,a)
C.k.p(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gF(r);a3.t();)C.q.p(c,a3.gA(a3))
C.i.p(e,d)
C.i.p(e,c)
C.k.p(n,e)}},
ej:function(){var u,t,s,r
if(this.b!=null)return
u=V.hm()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.a3()
r=[V.a7]
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.a3()
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.a3()
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.a3()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.a3()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aI())
s=u.j(0,"Other").k(0,"Other")
t=new V.a3()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.C("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.C("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.C("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.C("Link")
s=u.j(0,"Other")
s.d=s.a.C("Other")
this.b=u}}
V.h1.prototype={
$1:function(a){P.k1(C.m,new V.h0(this.a))},
$S:33}
V.h0.prototype={
$0:function(){var u,t,s
u=C.d.Y(document.documentElement.scrollTop)
t=this.a.style
s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
V.h2.prototype={
$1:function(a){return H.n(a,"$iaU").a===this.a},
$S:34};(function aliases(){var u=J.a.prototype
u.cO=u.i
u=J.cU.prototype
u.cQ=u.i
u=P.i.prototype
u.cP=u.aI
u=W.J.prototype
u.aN=u.T
u=W.dT.prototype
u.cS=u.a0
u=V.cZ.prototype
u.cR=u.a5
u.bn=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lL","lw",6)
u(P,"lM","lx",6)
u(P,"lN","ly",6)
t(P,"kl","lK",2)
s(W,"lT",4,null,["$4"],["lA"],17,0)
s(W,"lU",4,null,["$4"],["lB"],17,0)
var m
r(m=E.a2.prototype,"gc5",0,0,null,["$1","$0"],["c6","fk"],1,0)
r(m,"gc7",0,0,null,["$1","$0"],["c8","fl"],1,0)
r(m,"gc3",0,0,null,["$1","$0"],["c4","fj"],1,0)
r(m,"gc1",0,0,null,["$1","$0"],["c2","fg"],1,0)
q(m,"gfe","ff",5)
q(m,"gfh","fi",5)
r(m=E.dh.prototype,"gbo",0,0,null,["$1","$0"],["bq","bp"],1,0)
p(m,"gfz","ce",2)
o(m=X.dn.prototype,"gdL","dM",8)
o(m,"gdz","dA",8)
o(m,"gdF","dG",3)
o(m,"gdP","dQ",11)
o(m,"gdN","dO",11)
o(m,"gdS","dT",3)
o(m,"gdW","dX",3)
o(m,"gdJ","dK",3)
o(m,"gdU","dV",3)
o(m,"gdH","dI",3)
o(m,"gdY","dZ",28)
o(m,"ge_","e0",8)
o(m,"ge6","e7",10)
o(m,"ge2","e3",10)
o(m,"ge4","e5",10)
n(V.aP.prototype,"gl","bc",21)
n(V.R.prototype,"gl","bc",21)
r(m=M.cM.prototype,"ga9",0,0,null,["$1","$0"],["aa","d_"],1,0)
q(m,"gdB","dC",5)
q(m,"gdD","dE",5)
r(X.d4.prototype,"gbr",0,0,null,["$1","$0"],["ab","d2"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.H,null)
s(P.H,[H.j3,J.a,J.ac,P.dG,P.i,H.bU,P.at,H.bi,H.dm,H.fN,H.hr,P.aX,H.bL,H.dY,P.V,H.ff,H.fg,H.fb,P.iz,P.aH,P.ag,P.dr,P.h9,P.c4,P.ha,P.a0,P.iD,P.ir,P.bu,P.ij,P.t,P.bM,P.f3,P.iB,P.K,P.bg,P.S,P.bh,P.fG,P.dd,P.dz,P.eY,P.aZ,P.b,P.G,P.F,P.a5,P.e,P.br,W.ey,W.b5,W.v,W.d2,W.dT,W.iw,W.cO,W.a8,W.iq,W.e7,P.ik,O.aV,O.bV,E.es,E.a2,E.fO,E.dh,Z.dq,Z.hU,Z.cE,Z.b_,Z.dp,D.ev,D.bS,D.E,X.cF,X.cV,X.fd,X.fi,X.aM,X.fu,X.hn,X.dn,V.be,V.bf,V.eO,V.b1,V.a9,V.bm,V.d6,V.d9,V.aP,V.R,M.cM,A.cA,A.en,A.dj,A.hB,F.U,F.aL,F.b3,F.dc,F.fX,F.fY,F.fZ,F.am,F.hM,F.hN,F.hQ,F.hR,O.bt,T.hi,V.aI,V.a7,V.cZ,V.fM,V.fW,V.c2,V.di,V.c6,V.hl,X.cG,X.dg,X.d4,V.aU,V.h_])
s(J.a,[J.f8,J.fa,J.cU,J.au,J.cT,J.bk,H.bY,W.d,W.el,W.cB,W.ap,W.aq,W.I,W.dt,W.eD,W.eG,W.cJ,W.dv,W.cL,W.dx,W.eI,W.j,W.dA,W.as,W.f1,W.dC,W.cY,W.fo,W.dH,W.dI,W.ax,W.dJ,W.dM,W.ay,W.dQ,W.d8,W.dS,W.aA,W.dU,W.aB,W.dZ,W.ai,W.e1,W.hk,W.aD,W.e3,W.hp,W.hJ,W.e8,W.ea,W.ec,W.ee,W.eg,P.aK,P.dE,P.aN,P.dO,P.fK,P.e_,P.aO,P.e5,P.eo,P.ds,P.cC,P.cP,P.d7,P.bq,P.db,P.dk,P.dW])
s(J.cU,[J.fH,J.cb,J.b0])
t(J.j2,J.au)
s(J.cT,[J.cS,J.f9])
t(P.fh,P.dG)
s(P.fh,[H.dl,W.i0,W.a1,P.eU])
t(H.o,H.dl)
s(P.i,[H.eL,H.fl,H.cc])
s(H.eL,[H.bl,H.cW])
s(P.at,[H.fm,H.hV])
t(H.fn,H.bl)
s(P.aX,[H.fD,H.fc,H.hH,H.ht,H.eu,H.fU,P.d3,P.an,P.hI,P.hG,P.c3,P.ew,P.eB])
s(H.bL,[H.iU,H.hf,H.iO,H.iP,H.iQ,P.hX,P.hW,P.hY,P.hZ,P.iA,P.i6,P.ia,P.i7,P.i8,P.i9,P.id,P.ie,P.ic,P.ib,P.hb,P.hc,P.iH,P.io,P.im,P.ip,P.fk,P.eJ,P.eK,W.eM,W.fq,W.fs,W.fT,W.h8,W.i5,W.fC,W.fB,W.is,W.it,W.iy,W.iC,P.iJ,P.eV,P.eW,P.eq,E.fP,E.fQ,E.fR,E.hj,D.eQ,D.eR,F.iE,F.hS,F.hO,F.hP,V.h1,V.h0,V.h2])
s(H.hf,[H.h6,H.bJ])
t(P.fj,P.V)
s(P.fj,[H.av,W.i_])
t(H.d_,H.bY)
s(H.d_,[H.cg,H.ci])
t(H.ch,H.cg)
t(H.bX,H.ch)
t(H.cj,H.ci)
t(H.d0,H.cj)
s(H.d0,[H.fv,H.fw,H.fx,H.fy,H.fz,H.d1,H.fA])
t(P.il,P.iD)
t(P.ii,P.ir)
t(P.bN,P.ha)
t(P.eN,P.bM)
s(P.bN,[P.f2,P.hL])
t(P.hK,P.eN)
s(P.S,[P.w,P.y])
s(P.an,[P.bp,P.f4])
s(W.d,[W.x,W.eT,W.az,W.ck,W.aC,W.aj,W.cm,W.hT,W.cd,P.er,P.bc])
s(W.x,[W.J,W.aT,W.bQ,W.ce])
s(W.J,[W.p,P.m])
s(W.p,[W.cz,W.em,W.bI,W.aS,W.bd,W.ad,W.eX,W.cQ,W.fV,W.bs,W.de,W.df,W.he,W.c5])
s(W.ap,[W.bO,W.ez,W.eA])
t(W.ex,W.aq)
t(W.bP,W.dt)
t(W.dw,W.dv)
t(W.cK,W.dw)
t(W.dy,W.dx)
t(W.eH,W.dy)
t(W.ar,W.cB)
t(W.dB,W.dA)
t(W.eS,W.dB)
t(W.dD,W.dC)
t(W.bj,W.dD)
t(W.cR,W.bQ)
t(W.b4,W.j)
s(W.b4,[W.aw,W.W,W.ak])
t(W.fp,W.dH)
t(W.fr,W.dI)
t(W.dK,W.dJ)
t(W.ft,W.dK)
t(W.dN,W.dM)
t(W.bZ,W.dN)
t(W.dR,W.dQ)
t(W.fJ,W.dR)
t(W.fS,W.dS)
t(W.cl,W.ck)
t(W.h3,W.cl)
t(W.dV,W.dU)
t(W.h4,W.dV)
t(W.h7,W.dZ)
t(W.e2,W.e1)
t(W.hg,W.e2)
t(W.cn,W.cm)
t(W.hh,W.cn)
t(W.e4,W.e3)
t(W.ho,W.e4)
t(W.aG,W.W)
t(W.e9,W.e8)
t(W.i1,W.e9)
t(W.du,W.cL)
t(W.eb,W.ea)
t(W.ig,W.eb)
t(W.ed,W.ec)
t(W.dL,W.ed)
t(W.ef,W.ee)
t(W.iu,W.ef)
t(W.eh,W.eg)
t(W.iv,W.eh)
t(W.i2,W.i_)
t(W.i3,P.h9)
t(W.jc,W.i3)
t(W.i4,P.c4)
t(W.ix,W.dT)
t(P.a4,P.ik)
t(P.dF,P.dE)
t(P.fe,P.dF)
t(P.dP,P.dO)
t(P.fE,P.dP)
t(P.c0,P.m)
t(P.e0,P.e_)
t(P.hd,P.e0)
t(P.e6,P.e5)
t(P.hq,P.e6)
t(P.ep,P.ds)
t(P.fF,P.bc)
t(P.dX,P.dW)
t(P.h5,P.dX)
s(E.es,[Z.cD,A.c1])
s(D.E,[D.f5,D.f6,D.O])
t(U.bW,D.ev)
s(U.bW,[U.cH,U.da])
t(A.eF,A.c1)
s(A.dj,[A.hu,A.hx,A.hy,A.hA,A.hv,A.c8,A.hw,A.c9,A.hz,A.hC,A.hD,A.ca,A.hE,A.hF])
t(O.eE,O.bt)
s(V.cZ,[V.a3,V.c7])
t(X.eZ,X.dg)
s(V.aU,[V.eC,V.f_,V.f0,V.fI])
u(H.dl,H.dm)
u(H.cg,P.t)
u(H.ch,H.bi)
u(H.ci,P.t)
u(H.cj,H.bi)
u(P.dG,P.t)
u(W.dt,W.ey)
u(W.dv,P.t)
u(W.dw,W.v)
u(W.dx,P.t)
u(W.dy,W.v)
u(W.dA,P.t)
u(W.dB,W.v)
u(W.dC,P.t)
u(W.dD,W.v)
u(W.dH,P.V)
u(W.dI,P.V)
u(W.dJ,P.t)
u(W.dK,W.v)
u(W.dM,P.t)
u(W.dN,W.v)
u(W.dQ,P.t)
u(W.dR,W.v)
u(W.dS,P.V)
u(W.ck,P.t)
u(W.cl,W.v)
u(W.dU,P.t)
u(W.dV,W.v)
u(W.dZ,P.V)
u(W.e1,P.t)
u(W.e2,W.v)
u(W.cm,P.t)
u(W.cn,W.v)
u(W.e3,P.t)
u(W.e4,W.v)
u(W.e8,P.t)
u(W.e9,W.v)
u(W.ea,P.t)
u(W.eb,W.v)
u(W.ec,P.t)
u(W.ed,W.v)
u(W.ee,P.t)
u(W.ef,W.v)
u(W.eg,P.t)
u(W.eh,W.v)
u(P.dE,P.t)
u(P.dF,W.v)
u(P.dO,P.t)
u(P.dP,W.v)
u(P.e_,P.t)
u(P.e0,W.v)
u(P.e5,P.t)
u(P.e6,W.v)
u(P.ds,P.V)
u(P.dW,P.t)
u(P.dX,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.aS.prototype
C.C=W.bd.prototype
C.e=W.ad.prototype
C.D=W.cJ.prototype
C.E=W.cQ.prototype
C.t=W.cR.prototype
C.G=J.a.prototype
C.a=J.au.prototype
C.h=J.cS.prototype
C.d=J.cT.prototype
C.c=J.bk.prototype
C.N=J.b0.prototype
C.R=W.bZ.prototype
C.w=J.fH.prototype
C.x=W.d8.prototype
C.b=P.bq.prototype
C.q=W.bs.prototype
C.k=W.de.prototype
C.i=W.df.prototype
C.r=J.cb.prototype
C.y=W.aG.prototype
C.z=W.cd.prototype
C.A=new P.fG()
C.B=new P.hL()
C.f=new P.il()
C.m=new P.bh(0)
C.F=new P.f3("element",!0,!1,!1,!1)
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.O=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.P=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.Q=H.c(u([]),[P.e])
C.n=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.l=new P.hK(!1)})();(function staticFields(){$.ao=0
$.bK=null
$.jz=null
$.jg=!1
$.kp=null
$.kj=null
$.kv=null
$.iK=null
$.iR=null
$.jp=null
$.bv=null
$.cp=null
$.cq=null
$.jh=!1
$.P=C.f
$.aJ=null
$.j_=null
$.jF=null
$.jE=null
$.jL=null
$.jR=null
$.jS=null
$.jW=null
$.k4=null
$.k7=null
$.k6=null
$.k5=null
$.l2="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.l1="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.jQ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"me","ky",function(){return H.ko("_$dart_dartClosure")})
u($,"mf","ju",function(){return H.ko("_$dart_js")})
u($,"mk","kz",function(){return H.aE(H.hs({
toString:function(){return"$receiver$"}}))})
u($,"ml","kA",function(){return H.aE(H.hs({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mm","kB",function(){return H.aE(H.hs(null))})
u($,"mn","kC",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mq","kF",function(){return H.aE(H.hs(void 0))})
u($,"mr","kG",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mp","kE",function(){return H.aE(H.k2(null))})
u($,"mo","kD",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mt","kI",function(){return H.aE(H.k2(void 0))})
u($,"ms","kH",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mI","jv",function(){return P.lv()})
u($,"mM","cx",function(){return[]})
u($,"mL","kN",function(){return P.lo("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mJ","kM",function(){return P.jI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mK","jw",function(){return P.jH(P.e,P.aZ)})
u($,"mB","kL",function(){return Z.af(0)})
u($,"mv","kJ",function(){return Z.af(511)})
u($,"mD","aR",function(){return Z.af(1)})
u($,"mC","bE",function(){return Z.af(2)})
u($,"mx","bD",function(){return Z.af(4)})
u($,"mE","bF",function(){return Z.af(8)})
u($,"mF","bG",function(){return Z.af(16)})
u($,"my","cv",function(){return Z.af(32)})
u($,"mz","cw",function(){return Z.af(64)})
u($,"mA","kK",function(){return Z.af(96)})
u($,"mG","bH",function(){return Z.af(128)})
u($,"mw","bC",function(){return Z.af(256)})
u($,"md","kx",function(){return new V.eO(1e-9)})
u($,"mc","L",function(){return $.kx()})})()
var v={mangledGlobalNames:{y:"int",w:"double",S:"num",e:"String",K:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.F},{func:1,ret:-1,opt:[D.E]},{func:1,ret:-1},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.i,E.a2]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[F.U]},{func:1,ret:-1,args:[W.j]},{func:1,ret:P.F,args:[D.E]},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.K,args:[W.x]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.J,P.e,P.e,W.b5]},{func:1,ret:P.K,args:[W.a8]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.E]}]},{func:1,ret:P.w},{func:1,ret:P.e,args:[P.e]},{func:1,ret:P.F,args:[P.S]},{func:1,args:[W.j]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[P.a5]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:P.F,args:[F.am,P.w,P.w]},{func:1,args:[P.e]},{func:1,ret:P.F,args:[W.j]},{func:1,ret:P.K,args:[V.aU]},{func:1,args:[,P.e]},{func:1,ret:W.J,args:[W.x]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bY,ArrayBufferView:H.bY,Float32Array:H.bX,Float64Array:H.bX,Int16Array:H.fv,Int32Array:H.fw,Int8Array:H.fx,Uint16Array:H.fy,Uint32Array:H.fz,Uint8ClampedArray:H.d1,CanvasPixelArray:H.d1,Uint8Array:H.fA,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.el,HTMLAnchorElement:W.cz,HTMLAreaElement:W.em,HTMLBaseElement:W.bI,Blob:W.cB,HTMLBodyElement:W.aS,HTMLCanvasElement:W.bd,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CSSNumericValue:W.bO,CSSUnitValue:W.bO,CSSPerspective:W.ex,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.ez,CSSUnparsedValue:W.eA,DataTransferItemList:W.eD,HTMLDivElement:W.ad,XMLDocument:W.bQ,Document:W.bQ,DOMException:W.eG,DOMImplementation:W.cJ,ClientRectList:W.cK,DOMRectList:W.cK,DOMRectReadOnly:W.cL,DOMStringList:W.eH,DOMTokenList:W.eI,Element:W.J,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ar,FileList:W.eS,FileWriter:W.eT,HTMLFormElement:W.eX,Gamepad:W.as,HTMLHeadElement:W.cQ,History:W.f1,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.cR,KeyboardEvent:W.aw,Location:W.cY,MediaList:W.fo,MIDIInputMap:W.fp,MIDIOutputMap:W.fr,MimeType:W.ax,MimeTypeArray:W.ft,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,DocumentFragment:W.x,ShadowRoot:W.x,DocumentType:W.x,Node:W.x,NodeList:W.bZ,RadioNodeList:W.bZ,Plugin:W.ay,PluginArray:W.fJ,Range:W.d8,RTCStatsReport:W.fS,HTMLSelectElement:W.fV,SourceBuffer:W.az,SourceBufferList:W.h3,SpeechGrammar:W.aA,SpeechGrammarList:W.h4,SpeechRecognitionResult:W.aB,Storage:W.h7,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableCellElement:W.bs,HTMLTableDataCellElement:W.bs,HTMLTableHeaderCellElement:W.bs,HTMLTableElement:W.de,HTMLTableRowElement:W.df,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.c5,TextTrack:W.aC,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.hg,TextTrackList:W.hh,TimeRanges:W.hk,Touch:W.aD,TouchEvent:W.ak,TouchList:W.ho,TrackDefaultList:W.hp,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.hJ,VideoTrackList:W.hT,WheelEvent:W.aG,Window:W.cd,DOMWindow:W.cd,Attr:W.ce,CSSRuleList:W.i1,ClientRect:W.du,DOMRect:W.du,GamepadList:W.ig,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,SpeechRecognitionResultList:W.iu,StyleSheetList:W.iv,SVGLength:P.aK,SVGLengthList:P.fe,SVGNumber:P.aN,SVGNumberList:P.fE,SVGPointList:P.fK,SVGScriptElement:P.c0,SVGStringList:P.hd,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aO,SVGTransformList:P.hq,AudioBuffer:P.eo,AudioParamMap:P.ep,AudioTrackList:P.er,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.fF,WebGLBuffer:P.cC,WebGLFramebuffer:P.cP,WebGLProgram:P.d7,WebGL2RenderingContext:P.bq,WebGLShader:P.db,WebGLUniformLocation:P.dk,SQLResultSetRowList:P.h5})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
W.ck.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"
W.cm.$nativeSuperclassTag="EventTarget"
W.cn.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.kr,[])
else F.kr([])})})()
//# sourceMappingURL=main.dart.js.map
