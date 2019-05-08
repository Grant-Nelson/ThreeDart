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
a[c]=function(){a[c]=function(){H.ko(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hz(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hg:function hg(a){this.a=a},
he:function(){return new P.bI("No element")},
jm:function(){return new P.bI("Too many elements")},
l:function l(a){this.a=a},
dz:function dz(){},
b0:function b0(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
e5:function e5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
fd:function fd(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(){},
cV:function cV(){},
cU:function cU(){},
bh:function(a){var u,t
u=H.z(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
k6:function(a){return v.types[H.Q(a)]},
kd:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.J(a).$iac},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.Z(a)
if(typeof u!=="string")throw H.d(H.bd(a))
return u},
jC:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.dS(u)
t=u[0]
s=u[1]
return new H.ek(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bE:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
b4:function(a){return H.jt(a)+H.hw(H.aO(a),0,null)},
jt:function(a){var u,t,s,r,q,p,o,n,m
u=J.J(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.G||!!u.$ibQ){p=C.w(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bh(r.length>1&&C.c.ab(r,0)===36?C.c.aI(r,1):r)},
i4:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jB:function(a){var u,t,s,r
u=H.a([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.bd(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aw(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.bd(r))}return H.i4(u)},
i5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.bd(s))
if(s<0)throw H.d(H.bd(s))
if(s>65535)return H.jB(a)}return H.i4(a)},
hi:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aw(u,10))>>>0,56320|u&1023)}throw H.d(P.a8(a,0,1114111,null,null))},
b3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jA:function(a){var u=H.b3(a).getFullYear()+0
return u},
jy:function(a){var u=H.b3(a).getMonth()+1
return u},
ju:function(a){var u=H.b3(a).getDate()+0
return u},
jv:function(a){var u=H.b3(a).getHours()+0
return u},
jx:function(a){var u=H.b3(a).getMinutes()+0
return u},
jz:function(a){var u=H.b3(a).getSeconds()+0
return u},
jw:function(a){var u=H.b3(a).getMilliseconds()+0
return u},
aP:function(a){throw H.d(H.bd(a))},
k:function(a,b){if(a==null)J.aQ(a)
throw H.d(H.c2(a,b))},
c2:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,"index",null)
u=H.Q(J.aQ(a))
if(!(b<0)){if(typeof u!=="number")return H.aP(u)
t=b>=u}else t=!0
if(t)return P.aZ(b,a,"index",null,u)
return P.ei(b,"index",null)},
k3:function(a,b,c){if(a>c)return new P.b5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.b5(a,c,!0,b,"end","Invalid value")
return new P.ag(!0,b,"end",null)},
bd:function(a){return new P.ag(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.cB()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.iK})
u.name=""}else u.toString=H.iK
return u},
iK:function(){return J.Z(this.dartException)},
R:function(a){throw H.d(a)},
w:function(a){throw H.d(P.aB(a))},
an:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.a([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.eM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
eN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ie:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
i_:function(a,b){return new H.ee(a,b==null?null:b.method)},
hh:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.dX(a,t,u?null:b.receiver)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.h6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aw(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hh(H.c(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.i_(H.c(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.iN()
p=$.iO()
o=$.iP()
n=$.iQ()
m=$.iT()
l=$.iU()
k=$.iS()
$.iR()
j=$.iW()
i=$.iV()
h=q.U(t)
if(h!=null)return u.$1(H.hh(H.z(t),h))
else{h=p.U(t)
if(h!=null){h.method="call"
return u.$1(H.hh(H.z(t),h))}else{h=o.U(t)
if(h==null){h=n.U(t)
if(h==null){h=m.U(t)
if(h==null){h=l.U(t)
if(h==null){h=k.U(t)
if(h==null){h=n.U(t)
if(h==null){h=j.U(t)
if(h==null){h=i.U(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.i_(H.z(t),h))}}return u.$1(new H.f1(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cM()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ag(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cM()
return a},
be:function(a){var u
if(a==null)return new H.d9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.d9(a)},
k5:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.F(0,a[t],a[s])}return b},
kc:function(a,b,c,d,e,f){H.j(a,"$iaE")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.M("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var u
H.Q(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kc)
a.$identity=u
return u},
jb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.J(d).$ib){u.$reflectionInfo=d
s=H.jC(u).r}else s=d
r=e?Object.create(new H.ez().constructor.prototype):Object.create(new H.bq(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.ah
if(typeof p!=="number")return p.E()
$.ah=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.hP(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.k6,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.hN:H.hb
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.hP(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
j8:function(a,b,c,d){var u=H.hb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
hP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ja(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.j8(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.E()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
if(q==null){q=H.dm("self")
$.br=q}return new Function(r+H.c(q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.E()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
if(q==null){q=H.dm("self")
$.br=q}return new Function(r+H.c(q)+"."+H.c(u)+"("+o+");}")()},
j9:function(a,b,c,d){var u,t
u=H.hb
t=H.hN
switch(b?-1:a){case 0:throw H.d(H.jG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ja:function(a,b){var u,t,s,r,q,p,o,n
u=$.br
if(u==null){u=H.dm("self")
$.br=u}t=$.hM
if(t==null){t=H.dm("receiver")
$.hM=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.j9(r,!p,s,b)
if(r===1){u="return function(){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+");"
t=$.ah
if(typeof t!=="number")return t.E()
$.ah=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+", "+n+");"
t=$.ah
if(typeof t!=="number")return t.E()
$.ah=t+1
return new Function(u+t+"}")()},
hz:function(a,b,c,d,e,f,g){return H.jb(a,b,H.Q(c),d,!!e,!!f,g)},
hb:function(a){return a.a},
hN:function(a){return a.c},
dm:function(a){var u,t,s,r,q
u=new H.bq("self","target","receiver","name")
t=J.dS(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ae(a,"String"))},
l3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ae(a,"double"))},
ki:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ae(a,"num"))},
hx:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ae(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ae(a,"int"))},
iI:function(a,b){throw H.d(H.ae(a,H.bh(H.z(b).substring(2))))},
kk:function(a,b){throw H.d(H.j7(a,H.bh(H.z(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.iI(a,b)},
bf:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else u=!0
if(u)return a
H.kk(a,b)},
h3:function(a){if(a==null)return a
if(!!J.J(a).$ib)return a
throw H.d(H.ae(a,"List<dynamic>"))},
ke:function(a,b){var u
if(a==null)return a
u=J.J(a)
if(!!u.$ib)return a
if(u[b])return a
H.iI(a,b)},
iA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Q(u)]
else return a.$S()}return},
dh:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.iA(J.J(a))
if(u==null)return!1
return H.ir(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.ht)return a
$.ht=!0
try{if(H.dh(a,b))return a
u=H.h5(b)
t=H.ae(a,u)
throw H.d(t)}finally{$.ht=!1}},
hA:function(a,b){if(a!=null&&!H.hy(a,b))H.R(H.ae(a,H.h5(b)))
return a},
ae:function(a,b){return new H.eO("TypeError: "+P.dD(a)+": type '"+H.iv(a)+"' is not a subtype of type '"+b+"'")},
j7:function(a,b){return new H.dn("CastError: "+P.dD(a)+": type '"+H.iv(a)+"' is not a subtype of type '"+b+"'")},
iv:function(a){var u,t
u=J.J(a)
if(!!u.$ibs){t=H.iA(u)
if(t!=null)return H.h5(t)
return"Closure"}return H.b4(a)},
ko:function(a){throw H.d(new P.ds(H.z(a)))},
jG:function(a){return new H.ep(a)},
iC:function(a){return v.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
aO:function(a){if(a==null)return
return a.$ti},
l4:function(a,b,c){return H.bg(a["$a"+H.c(c)],H.aO(b))},
fZ:function(a,b,c,d){var u
H.z(c)
H.Q(d)
u=H.bg(a["$a"+H.c(c)],H.aO(b))
return u==null?null:u[d]},
aN:function(a,b,c){var u
H.z(b)
H.Q(c)
u=H.bg(a["$a"+H.c(b)],H.aO(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.Q(b)
u=H.aO(a)
return u==null?null:u[b]},
h5:function(a){return H.aM(a,null)},
aM:function(a,b){var u,t
H.m(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bh(a[0].name)+H.hw(a,1,b)
if(typeof a=="function")return H.bh(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.c(b[t])}if('func' in a)return H.jT(a,b)
if('futureOr' in a)return"FutureOr<"+H.aM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.i]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.a([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.c.E(o,b[m])
l=t[p]
if(l!=null&&l!==P.A)o+=" extends "+H.aM(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aM(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aM(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.k4(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.z(u[g])
i=i+h+H.aM(d[c],b)+(" "+H.c(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hw:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.b7("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aM(p,c)}return"<"+u.i(0)+">"},
bg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dg:function(a,b,c,d){var u,t
H.z(b)
H.h3(c)
H.z(d)
if(a==null)return!1
u=H.aO(a)
t=J.J(a)
if(t[b]==null)return!1
return H.iy(H.bg(t[d],u),null,c,null)},
m:function(a,b,c,d){H.z(b)
H.h3(c)
H.z(d)
if(a==null)return a
if(H.dg(a,b,c,d))return a
throw H.d(H.ae(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bh(b.substring(2))+H.hw(c,0,null),v.mangledGlobalNames)))},
iy:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ab(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ab(a[t],b,c[t],d))return!1
return!0},
l1:function(a,b,c){return a.apply(b,H.bg(J.J(b)["$a"+H.c(c)],H.aO(b)))},
iE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="A"||a.name==="y"||a===-1||a===-2||H.iE(u)}return!1},
hy:function(a,b){var u,t
if(a==null)return b==null||b.name==="A"||b.name==="y"||b===-1||b===-2||H.iE(b)
if(b==null||b===-1||b.name==="A"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hy(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dh(a,b)}u=J.J(a).constructor
t=H.aO(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ab(u,null,b,null)},
v:function(a,b){if(a!=null&&!H.hy(a,b))throw H.d(H.ae(a,H.h5(b)))
return a},
ab:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="A"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="A"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ab(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="y")return!0
if('func' in c)return H.ir(a,b,c,d)
if('func' in a)return c.name==="aE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ab("type" in a?a.type:null,b,s,d)
else if(H.ab(a,b,s,d))return!0
else{if(!('$i'+"bz" in t.prototype))return!1
r=t.prototype["$a"+"bz"]
q=H.bg(r,u?a.slice(1):null)
return H.ab(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iy(H.bg(m,u),b,p,d)},
ir:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ab(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ab(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ab(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ab(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.kh(h,b,g,d)},
kh:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ab(c[r],d,a[r],b))return!1}return!0},
l2:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
kf:function(a){var u,t,s,r,q,p
u=H.z($.iD.$1(a))
t=$.fW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.h2[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.z($.ix.$2(a,u))
if(u!=null){t=$.fW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.h2[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.h4(s)
$.fW[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.h2[u]=s
return s}if(q==="-"){p=H.h4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iG(a,s)
if(q==="*")throw H.d(P.ig(u))
if(v.leafTags[u]===true){p=H.h4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iG(a,s)},
iG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
h4:function(a){return J.hE(a,!1,null,!!a.$iac)},
kg:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.h4(u)
else return J.hE(u,c,null,null)},
ka:function(){if(!0===$.hD)return
$.hD=!0
H.kb()},
kb:function(){var u,t,s,r,q,p,o,n
$.fW=Object.create(null)
$.h2=Object.create(null)
H.k9()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iJ.$1(q)
if(p!=null){o=H.kg(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
k9:function(){var u,t,s,r,q,p,o
u=C.K()
u=H.bc(C.H,H.bc(C.M,H.bc(C.v,H.bc(C.v,H.bc(C.L,H.bc(C.I,H.bc(C.J(C.w),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iD=new H.h_(q)
$.ix=new H.h0(p)
$.iJ=new H.h1(o)},
bc:function(a,b){return a(b)||b},
jo:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(new P.dJ("Illegal RegExp pattern ("+String(r)+")",a,null))},
km:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
hF:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ek:function ek(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
eM:function eM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ee:function ee(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a){this.a=a},
h6:function h6(a){this.a=a},
d9:function d9(a){this.a=a
this.b=null},
bs:function bs(){},
eF:function eF(){},
ez:function ez(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a){this.a=a},
dn:function dn(a){this.a=a},
ep:function ep(a){this.a=a},
ak:function ak(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cs:function cs(a,b){this.a=a
this.$ti=b},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
dW:function dW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hs:function(a){return a},
df:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.c2(b,a))},
jS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.k3(a,b,c))
return b},
cz:function cz(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
k4:function(a){return J.hT(a?Object.keys(a):[],null)},
kj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fY:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hD==null){H.ka()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.ig("Return interceptor for "+H.c(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hH()]
if(q!=null)return q
q=H.kf(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.hH(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
jn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.ha(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a8(a,0,4294967295,"length",null))
return J.hT(new Array(a),b)},
hT:function(a,b){return J.dS(H.a(a,[b]))},
dS:function(a){H.h3(a)
a.fixed$length=Array
return a},
J:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.co.prototype
return J.dU.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.dV.prototype
if(typeof a=="boolean")return J.dT.prototype
if(a.constructor==Array)return J.aj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.A)return a
return J.fY(a)},
hB:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.A)return a
return J.fY(a)},
hC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.A)return a
return J.fY(a)},
iB:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.bQ.prototype
return a},
a3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.A)return a
return J.fY(a)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).m(a,b)},
j1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hB(a).t(a,b)},
j2:function(a,b,c,d){return J.a3(a).d2(a,b,c,d)},
di:function(a,b){return J.a3(a).e7(a,b)},
hK:function(a,b){return J.a3(a).n(a,b)},
h7:function(a,b){return J.hC(a).N(a,b)},
j3:function(a){return J.a3(a).gew(a)},
c6:function(a){return J.J(a).gC(a)},
bo:function(a){return J.hC(a).gD(a)},
aQ:function(a){return J.hB(a).gl(a)},
j4:function(a){return J.a3(a).gfz(a)},
h8:function(a,b){return J.a3(a).ai(a,b)},
hL:function(a){return J.hC(a).fp(a)},
j5:function(a,b,c){return J.iB(a).ar(a,b,c)},
j6:function(a){return J.iB(a).fD(a)},
Z:function(a){return J.J(a).i(a)},
L:function L(){},
dT:function dT(){},
dV:function dV(){},
cq:function cq(){},
eg:function eg(){},
bQ:function bQ(){},
aG:function aG(){},
aj:function aj(a){this.$ti=a},
hf:function hf(a){this.$ti=a},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cp:function cp(){},
co:function co(){},
dU:function dU(){},
b_:function b_(){}},P={
jK:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.k_()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c1(new P.ff(u),1)).observe(t,{childList:true})
return new P.fe(u,t,s)}else if(self.setImmediate!=null)return P.k0()
return P.k1()},
jL:function(a){self.scheduleImmediate(H.c1(new P.fg(H.f(a,{func:1,ret:-1})),0))},
jM:function(a){self.setImmediate(H.c1(new P.fh(H.f(a,{func:1,ret:-1})),0))},
jN:function(a){P.hk(C.m,H.f(a,{func:1,ret:-1}))},
hk:function(a,b){var u
H.f(b,{func:1,ret:-1})
u=C.h.ax(a.a,1000)
return P.jR(u<0?0:u,b)},
jR:function(a,b){var u=new P.fL(!0)
u.d_(a,b)
return u},
jO:function(a,b){var u,t,s
b.a=1
try{a.ci(new P.fp(b),new P.fq(b),null)}catch(s){u=H.a4(s)
t=H.be(s)
P.kl(new P.fr(b,u,t))}},
il:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaa")
if(u>=4){t=b.aY()
b.a=a.a
b.c=a.c
P.bU(b,t)}else{t=H.j(b.c,"$iaq")
b.a=2
b.c=a
a.bL(t)}},
bU:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.j(t.c,"$iT")
t=t.b
p=q.a
o=q.b
t.toString
P.fS(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bU(u.a,b)}t=u.a
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
if(k){H.j(m,"$iT")
t=t.b
p=m.a
o=m.b
t.toString
P.fS(null,null,t,p,o)
return}j=$.I
if(j!=l)$.I=l
else j=null
t=b.c
if(t===8)new P.fv(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fu(s,b,m).$0()}else if((t&2)!==0)new P.ft(u,s,b).$0()
if(j!=null)$.I=j
t=s.b
if(!!J.J(t).$ibz){if(t.a>=4){i=H.j(o.c,"$iaq")
o.c=null
b=o.av(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.il(t,o)
return}}h=b.b
i=H.j(h.c,"$iaq")
h.c=null
b=h.av(i)
t=s.a
p=s.b
if(!t){H.v(p,H.q(h,0))
h.a=4
h.c=p}else{H.j(p,"$iT")
h.a=8
h.c=p}u.a=h
t=h}},
jW:function(a,b){if(H.dh(a,{func:1,args:[P.A,P.X]}))return H.f(a,{func:1,ret:null,args:[P.A,P.X]})
if(H.dh(a,{func:1,args:[P.A]}))return H.f(a,{func:1,ret:null,args:[P.A]})
throw H.d(P.ha(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jV:function(){var u,t
for(;u=$.bb,u!=null;){$.c0=null
t=u.b
$.bb=t
if(t==null)$.c_=null
u.a.$0()}},
jZ:function(){$.hu=!0
try{P.jV()}finally{$.c0=null
$.hu=!1
if($.bb!=null)$.hI().$1(P.iz())}},
iu:function(a){var u=new P.cZ(H.f(a,{func:1,ret:-1}))
if($.bb==null){$.c_=u
$.bb=u
if(!$.hu)$.hI().$1(P.iz())}else{$.c_.b=u
$.c_=u}},
jY:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.bb
if(u==null){P.iu(a)
$.c0=$.c_
return}t=new P.cZ(a)
s=$.c0
if(s==null){t.b=u
$.c0=t
$.bb=t}else{t.b=s.b
s.b=t
$.c0=t
if(t.b==null)$.c_=t}},
kl:function(a){var u,t
u={func:1,ret:-1}
H.f(a,u)
t=$.I
if(C.f===t){P.fU(null,null,C.f,a)
return}t.toString
P.fU(null,null,t,H.f(t.b1(a),u))},
id:function(a,b){var u,t
u={func:1,ret:-1}
H.f(b,u)
t=$.I
if(t===C.f){t.toString
return P.hk(a,b)}return P.hk(a,H.f(t.b1(b),u))},
fS:function(a,b,c,d,e){var u={}
u.a=d
P.jY(new P.fT(u,e))},
is:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.I
if(t===c)return d.$0()
$.I=c
u=t
try{t=d.$0()
return t}finally{$.I=u}},
it:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.v(e,g)
t=$.I
if(t===c)return d.$1(e)
$.I=c
u=t
try{t=d.$1(e)
return t}finally{$.I=u}},
jX:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
t=$.I
if(t===c)return d.$2(e,f)
$.I=c
u=t
try{t=d.$2(e,f)
return t}finally{$.I=u}},
fU:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b1(d):c.ex(d,-1)
P.iu(d)},
ff:function ff(a){this.a=a},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
fL:function fL(a){this.a=a
this.b=null
this.c=0},
fM:function fM(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aa:function aa(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fo:function fo(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a){this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.a=a
this.b=null},
eA:function eA(){},
eC:function eC(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
bJ:function bJ(){},
eB:function eB(){},
T:function T(a,b){this.a=a
this.b=b},
fP:function fP(){},
fT:function fT(a,b){this.a=a
this.b=b},
fA:function fA(){},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function(a,b,c){H.h3(a)
return H.m(H.k5(a,new H.ak([b,c])),"$ihU",[b,c],"$ahU")},
jp:function(a,b){return new H.ak([a,b])},
ct:function(a,b,c,d){return new P.fy([d])},
hq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ip:function(a,b,c){var u=new P.fz(a,b,[c])
u.c=a.e
return u},
jl:function(a,b,c){var u,t
if(P.hv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a([],[P.i])
t=$.c5()
C.a.h(t,a)
try{P.jU(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.ib(b,H.ke(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
hd:function(a,b,c){var u,t,s
if(P.hv(a))return b+"..."+c
u=new P.b7(b)
t=$.c5()
C.a.h(t,a)
try{s=u
s.a=P.ib(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hv:function(a){var u,t
for(u=0;t=$.c5(),u<t.length;++u)if(a===t[u])return!0
return!1},
jU:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.i],"$ab")
u=a.gD(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.q())return
r=H.c(u.gw())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.q()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gw();++s
if(!u.q()){if(s<=4){C.a.h(b,H.c(o))
return}q=H.c(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gw();++s
for(;u.q();o=n,n=m){m=u.gw();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.c(o)
q=H.c(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
hV:function(a,b){var u,t,s
u=P.ct(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s)u.h(0,H.v(a[s],b))
return u},
hW:function(a){var u,t
u={}
if(P.hv(a))return"{...}"
t=new P.b7("")
try{C.a.h($.c5(),a)
t.a+="{"
u.a=!0
a.P(0,new P.e3(u,t))
t.a+="}"}finally{u=$.c5()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fy:function fy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ba:function ba(a){this.a=a
this.c=this.b=null},
fz:function fz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e0:function e0(){},
G:function G(){},
e2:function e2(){},
e3:function e3(a,b){this.a=a
this.b=b},
b1:function b1(){},
fF:function fF(){},
d4:function d4(){},
bt:function bt(){},
bu:function bu(){},
dB:function dB(){},
dO:function dO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dN:function dN(a){this.a=a},
f3:function f3(a){this.a=a},
f4:function f4(){},
fN:function fN(a){this.b=this.a=0
this.c=a},
jj:function(a){if(a instanceof H.bs)return a.i(0)
return"Instance of '"+H.b4(a)+"'"},
jr:function(a,b,c,d){var u,t
H.v(b,d)
u=J.jn(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.F(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
js:function(a,b,c){var u,t,s
u=[c]
t=H.a([],u)
for(s=a.gD(a);s.q();)C.a.h(t,H.v(s.gw(),c))
if(b)return t
return H.m(J.dS(t),"$ib",u,"$ab")},
hj:function(a,b,c){var u,t
u=P.u
H.m(a,"$ip",[u],"$ap")
if(a.constructor===Array){H.m(a,"$iaj",[u],"$aaj")
t=a.length
c=P.i6(b,c,t,null,null,null)
return H.i5(b>0||c<t?C.a.cL(a,b,c):a)}return P.jI(a,b,c)},
jI:function(a,b,c){var u,t,s
H.m(a,"$ip",[P.u],"$ap")
u=J.bo(a)
for(t=0;t<b;++t)if(!u.q())throw H.d(P.a8(b,0,t,null,null))
s=[]
for(;u.q();)s.push(u.gw())
return H.i5(s)},
jD:function(a,b,c){return new H.dW(a,H.jo(a,!1,!0,!1))},
ib:function(a,b,c){var u=J.bo(b)
if(!u.q())return a
if(c.length===0){do a+=H.c(u.gw())
while(u.q())}else{a+=H.c(u.gw())
for(;u.q();)a=a+c+H.c(u.gw())}return a},
hr:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.u],"$ab")
if(c===C.l){u=$.j0().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.eG(H.v(b,H.aN(c,"bt",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.hi(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jc:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jd:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
jg:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
dD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Z(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jj(a)},
ha:function(a,b,c){return new P.ag(!0,a,b,c)},
ei:function(a,b,c){return new P.b5(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.b5(b,c,!0,a,d,"Invalid value")},
i6:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a8(b,a,c,"end",f))
return b}return c},
aZ:function(a,b,c,d,e){var u=H.Q(e==null?J.aQ(b):e)
return new P.dP(b,u,!0,a,c,"Index out of range")},
ao:function(a){return new P.f2(a)},
ig:function(a){return new P.f0(a)},
ia:function(a){return new P.bI(a)},
aB:function(a){return new P.dq(a)},
M:function(a){return new P.d1(a)},
iH:function(a){H.kj(a)},
D:function D(){},
aU:function aU(a,b){this.a=a
this.b=b},
r:function r(){},
aV:function aV(a){this.a=a},
dx:function dx(){},
dy:function dy(){},
aC:function aC(){},
cB:function cB(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dP:function dP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f2:function f2(a){this.a=a},
f0:function f0(a){this.a=a},
bI:function bI(a){this.a=a},
dq:function dq(a){this.a=a},
ef:function ef(){},
cM:function cM(){},
ds:function ds(a){this.a=a},
d1:function d1(a){this.a=a},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(){},
u:function u(){},
p:function p(){},
ai:function ai(){},
b:function b(){},
y:function y(){},
Y:function Y(){},
A:function A(){},
X:function X(){},
i:function i(){},
b7:function b7(a){this.a=a},
k2:function(a,b){var u={}
a.P(0,new P.fV(u))
return u},
fV:function fV(a){this.a=a},
dF:function dF(a,b){this.a=a
this.b=b},
dG:function dG(){},
dH:function dH(){},
bF:function bF(){},
h:function h(){},
c9:function c9(){},
cl:function cl(){},
cF:function cF(){},
b6:function b6(){},
cK:function cK(){},
cT:function cT(){}},W={
h9:function(a){var u=document.createElement("a")
return u},
hO:function(a,b){var u=document.createElement("canvas")
return u},
jh:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).S(u,a,b,c)
t.toString
u=W.t
u=new H.bR(new W.U(t),H.f(new W.dA(),{func:1,ret:P.D,args:[u]}),[u])
return H.j(u.ga6(u),"$iC")},
ji:function(a){H.j(a,"$iaW")
return"wheel"},
bx:function(a){var u,t,s
u="element tag unavailable"
try{t=J.j4(a)
if(typeof t==="string")u=a.tagName}catch(s){H.a4(s)}return u},
fx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
io:function(a,b,c,d){var u,t
u=W.fx(W.fx(W.fx(W.fx(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d,e){var u,t
u=W.iw(new W.fn(c),W.e)
t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.e]})
if(t)J.j2(a,b,u,!1)}return new W.fm(a,b,u,!1,[e])},
im:function(a){var u,t
u=W.h9(null)
t=window.location
u=new W.aL(new W.fE(u,t))
u.cW(a)
return u},
jP:function(a,b,c,d){H.j(a,"$iC")
H.z(b)
H.z(c)
H.j(d,"$iaL")
return!0},
jQ:function(a,b,c,d){var u,t,s
H.j(a,"$iC")
H.z(b)
H.z(c)
u=H.j(d,"$iaL").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
iq:function(){var u,t,s,r,q
u=P.i
t=P.hV(C.o,u)
s=H.q(C.o,0)
r=H.f(new W.fK(),{func:1,ret:u,args:[s]})
q=H.a(["TEMPLATE"],[u])
t=new W.fJ(t,P.ct(null,null,null,u),P.ct(null,null,null,u),P.ct(null,null,null,u),null)
t.cZ(null,new H.e6(C.o,r,[s,u]),q,null)
return t},
iw:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.I
if(u===C.f)return a
return u.ez(a,b)},
n:function n(){},
c7:function c7(){},
dj:function dj(){},
bp:function bp(){},
ax:function ax(){},
aR:function aR(){},
ay:function ay(){},
bv:function bv(){},
dr:function dr(){},
a6:function a6(){},
bw:function bw(){},
dw:function dw(){},
cg:function cg(){},
ch:function ch(){},
fj:function fj(a,b){this.a=a
this.b=b},
C:function C(){},
dA:function dA(){},
e:function e(){},
aW:function aW(){},
dI:function dI(){},
cm:function cm(){},
aY:function aY(){},
cn:function cn(){},
al:function al(){},
cu:function cu(){},
O:function O(){},
U:function U(a){this.a=a},
t:function t(){},
bD:function bD(){},
cG:function cG(){},
eq:function eq(){},
b8:function b8(){},
cN:function cN(){},
cO:function cO(){},
eE:function eE(){},
bK:function bK(){},
am:function am(){},
ad:function ad(){},
eL:function eL(){},
aK:function aK(){},
ap:function ap(){},
bS:function bS(){},
bT:function bT(){},
d0:function d0(){},
d5:function d5(){},
fi:function fi(){},
fk:function fk(a){this.a=a},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fm:function fm(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fn:function fn(a){this.a=a},
aL:function aL(a){this.a=a},
a_:function a_(){},
cA:function cA(a){this.a=a},
ed:function ed(a){this.a=a},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(){},
fG:function fG(){},
fH:function fH(){},
fJ:function fJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fK:function fK(){},
fI:function fI(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a1:function a1(){},
fE:function fE(a,b){this.a=a
this.b=b},
dc:function dc(a){this.a=a},
fO:function fO(a){this.a=a},
d_:function d_(){},
d2:function d2(){},
d3:function d3(){},
d6:function d6(){},
d7:function d7(){},
da:function da(){},
db:function db(){},
dd:function dd(){},
de:function de(){}},O={
hQ:function(a){var u=new O.aA([a])
u.sdq(H.a([],[a]))
u.sbJ(null)
u.sbI(null)
u.sbK(null)
return u},
aA:function aA(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bB:function bB(){this.b=this.a=null},
du:function du(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
b9:function b9(){}},E={
jF:function(a,b){var u=new E.el(a,b)
u.cR(a,b)
return u},
jJ:function(a,b,c,d,e){var u,t,s,r
u=J.J(a)
if(!!u.$iaR)return E.ic(a,!0,!0,!0,!1)
t=W.hO(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbT(a).h(0,t)
r=E.ic(t,!0,!0,!0,!1)
r.a=a
return r},
ic:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.cQ()
t=P.jq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
s=C.t.bg(a,"webgl",t)
s=H.j(s==null?C.t.bg(a,"experimental-webgl",t):s,"$ib6")
if(s==null)H.R(P.M("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.jF(s,a)
r=new T.eG(s)
r.b=H.Q((s&&C.b).bh(s,3379))
r.c=H.Q(C.b.bh(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.cW(a)
q=new X.dY()
q.c=new X.au(!1,!1,!1)
q.se4(P.ct(null,null,null,P.u))
r.b=q
q=new X.e7(r)
q.f=0
q.r=V.cD()
q.x=V.cD()
q.Q=1
q.ch=1
r.c=q
q=new X.e1(r)
q.r=0
q.x=V.cD()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.eK(r)
q.e=0
q.f=V.cD()
q.r=V.cD()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sdd(H.a([],[[P.bJ,P.A]]))
q=r.z
p=document
o=W.O
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.P(p,"contextmenu",H.f(r.gdB(),n),!1,o))
q=r.z
m=W.e
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.P(a,"focus",H.f(r.gdH(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.P(a,"blur",H.f(r.gdt(),l),!1,m))
q=r.z
k=W.al
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.P(p,"keyup",H.f(r.gdL(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.P(p,"keydown",H.f(r.gdJ(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.P(a,"mousedown",H.f(r.gdO(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.P(a,"mouseup",H.f(r.gdS(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.P(a,"mousemove",H.f(r.gdQ(),n),!1,o))
k=r.z
j=W.ap;(k&&C.a).h(k,W.P(a,H.z(W.ji(a)),H.f(r.gdU(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.P(p,"mousemove",H.f(r.gdD(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.P(p,"mouseup",H.f(r.gdF(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.P(p,"pointerlockchange",H.f(r.gdW(),l),!1,m))
m=r.z
l=W.ad
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.P(a,"touchstart",H.f(r.ge2(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.P(a,"touchend",H.f(r.gdZ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.P(a,"touchmove",H.f(r.ge0(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aU(Date.now(),!1)
u.cy=0
u.bM()
return u},
dl:function dl(){},
V:function V(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
el:function el(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
em:function em(a){this.a=a},
en:function en(a){this.a=a},
eo:function eo(a){this.a=a},
cQ:function cQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eH:function eH(a){this.a=a}},Z={
ho:function(a,b,c){var u
H.m(c,"$ib",[P.u],"$ab")
u=a.createBuffer()
C.b.a0(a,b,u)
C.b.bS(a,b,new Int16Array(H.hs(c)),35044)
C.b.a0(a,b,null)
return new Z.cY(b,u)},
a9:function(a){return new Z.cX(a)},
cY:function cY(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fc:function fc(a){this.a=a},
cb:function cb(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a}},D={
aD:function(){var u=new D.by()
u.sad(null)
u.saV(null)
u.c=null
u.d=0
return u},
dp:function dp(){},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
dE:function dE(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
dQ:function dQ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
dR:function dR(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
H:function H(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cc:function cc(a,b){this.a=a
this.b=b},cr:function cr(a,b){this.a=a
this.b=b},dY:function dY(){var _=this
_.d=_.c=_.b=_.a=null},e1:function e1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},e7:function e7(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eK:function eK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cW:function cW(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jk:function(a,b,c,d,e,f,g){var u,t
u=new X.dK()
t=new V.aT(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.i7
if(t==null){t=V.jE(0,0,1,1)
$.i7=t}u.r=t
return u},
cd:function cd(){},
dK:function dK(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cC:function cC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cP:function cP(){}},V={
hG:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.cD(a-b,u)
return(a<0?a+u:a)+b},
x:function(a,b,c){if(a==null)return C.c.W("null",c)
return C.c.W(C.d.fE(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
fX:function(a,b,c){var u,t,s,r,q
H.m(a,"$ib",[P.r],"$ab")
u=H.a([],[P.i])
for(t=0,s=0;s<4;++s){r=V.x(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.k(u,q)
C.a.F(u,q,C.c.W(u[q],t))}return u},
hY:function(){var u=$.hX
if(u==null){u=V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hX=u}return u},
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cD:function(){var u=$.i2
if(u==null){u=new V.a2(0,0)
$.i2=u}return u},
jE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cI(a,b,c,d)},
hm:function(){var u=$.ik
if(u==null){u=new V.K(0,0,0)
$.ik=u}return u},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(a){this.a=a},
aH:function aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
F:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.M("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.ab(a,0)
t=C.c.ab(b,0)
s=new V.ej()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
o:function(a){var u=new V.er()
u.cS(a)
return u},
eJ:function(){var u,t
u=new V.eI()
t=P.i
u.sej(new H.ak([t,V.bH]))
u.sem(new H.ak([t,V.bL]))
u.c=null
return u},
ar:function ar(){},
a0:function a0(){},
cv:function cv(){},
W:function W(){this.a=null},
ej:function ej(){this.b=this.a=null},
er:function er(){this.a=null},
bH:function bH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b){this.a=a
this.b=b
this.c=null},
eI:function eI(){this.c=this.b=this.a=null},
bM:function bM(a){this.b=a
this.a=this.c=null},
jH:function(a,b){var u=new V.ev()
u.cU(a,!0)
return u},
az:function az(){},
dt:function dt(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dL:function dL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dM:function dM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eh:function eh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ev:function ev(){this.b=this.a=null},
ex:function ex(a){this.a=a},
ew:function ew(a){this.a=a},
ey:function ey(a){this.a=a}},U={ce:function ce(){this.b=this.a=null},bC:function bC(){},cJ:function cJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ci:function ci(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
hl:function(a,b,c,d,e){var u=new A.eQ(a,b,c,e)
u.f=d
u.seo(P.jr(d,0,!1,P.u))
return u},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a},
dv:function dv(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
bG:function bG(){},
cS:function cS(){},
eW:function eW(a){this.a=a},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
fR:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
bZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.K(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.K(o+a3,n+a1,m+a2)
u.b=l
k=new V.K(o-a3,n-a1,m-a2)
u.c=k
j=new V.K(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.fR(t)
f=F.fR(u.b)
e=F.kn(d,a0,new F.fQ(u,F.fR(u.c),F.fR(u.d),f,g,c),b)
if(e!=null)a.f8(e)},
kn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,{func:1,ret:-1,args:[F.af,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.i9()
t=H.a([],[F.af])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hn(null,null,new V.aT(p,0,0,1),null,null,new V.a2(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.b6(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hn(null,null,new V.aT(j,i,h,1),null,null,new V.a2(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.b6(d))}}u.d.eq(a+1,b+1,t)
return u},
cj:function(a,b,c){var u,t
u=new F.N()
t=a.a
if(t==null)H.R(P.M("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.R(P.M("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
i9:function(){var u,t
u=new F.cL()
t=new F.f5(u)
t.b=!1
t.sep(H.a([],[F.af]))
u.a=t
t=new F.eu(u)
t.saW(H.a([],[F.aJ]))
u.b=t
t=new F.et(u)
t.sdl(H.a([],[F.at]))
u.c=t
t=new F.es(u)
t.sde(H.a([],[F.N]))
u.d=t
u.e=null
return u},
hn:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.af()
t=new F.fa(u)
t.saW(H.a([],[F.aJ]))
u.b=t
t=new F.f9(u)
s=[F.at]
t.sdm(H.a([],s))
t.sdn(H.a([],s))
u.c=t
t=new F.f6(u)
s=[F.N]
t.sdf(H.a([],s))
t.sdg(H.a([],s))
t.sdh(H.a([],s))
u.d=t
h=$.iX()
u.e=0
t=$.aw()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bk().a)!==0?e:null
u.x=(s&$.bj().a)!==0?b:null
u.y=(s&$.bl().a)!==0?f:null
u.z=(s&$.bm().a)!==0?g:null
u.Q=(s&$.iY().a)!==0?c:null
u.ch=(s&$.bn().a)!==0?i:0
u.cx=(s&$.bi().a)!==0?a:null
return u},
fQ:function fQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
N:function N(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
at:function at(){this.b=this.a=null},
aJ:function aJ(){this.a=null},
cL:function cL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
es:function es(a){this.a=a
this.b=null},
et:function et(a){this.a=a
this.b=null},
eu:function eu(a){this.a=a
this.b=null},
af:function af(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(a){this.a=a},
f5:function f5(a){this.a=a
this.c=this.b=null},
f6:function f6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
f9:function f9(a){this.a=a
this.c=this.b=null},
fa:function fa(a){this.a=a
this.b=null},
iF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=V.jH("Tutorial 1",!0)
t=[P.i]
u.L(H.a(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],t))
s=W.hO(null,null)
s.className="pageCanvas"
s.id="tutorial1"
C.e.n(u.a,s)
u.am(0,"Getting Started")
u.L(H.a(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],t))
u.bP("index.html","html",0,H.a(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],t))
u.bP("main.dart","dart",0,H.a(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],t))
u.am(4,"ThreeDart")
u.L(H.a(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],t))
u.am(4,"Scene")
u.L(H.a(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],t))
u.L(H.a(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],t))
u.L(H.a(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],t))
u.am(4,"Entity")
u.L(H.a(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],t))
u.L(H.a(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],t))
u.L(H.a(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],t))
u.L(H.a(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],t))
u.am(4,"Summary")
u.L(H.a(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],t))
u.L(H.a(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],t))
r=new E.V()
r.a=""
r.b=!0
t=E.V
r.sd5(0,O.hQ(t))
r.y.bj(r.gf9(),r.gfc())
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
r.scg(null)
r.sao(null)
q=F.i9()
F.bZ(q,null,null,1,1,1,0,0,1)
F.bZ(q,null,null,1,1,0,1,0,3)
F.bZ(q,null,null,1,1,0,0,1,2)
F.bZ(q,null,null,1,1,-1,0,0,0)
F.bZ(q,null,null,1,1,0,-1,0,0)
F.bZ(q,null,null,1,1,0,0,-1,3)
u=q.e
if(u!=null)++u.d
q.d.b3()
q.a.b3()
u=q.e
if(u!=null)u.aD()
r.sbl(0,q)
u=new U.cJ()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.scq(0)
u.sc9(0)
u.sce(0)
p=u.d
if(!(Math.abs(p-0.1)<$.E().a)){u.d=0.1
p=new D.H("deltaYaw",p,0.1,u,[P.r])
p.b=!0
u.ae(p)}p=u.e
if(!(Math.abs(p-0.21)<$.E().a)){u.e=0.21
p=new D.H("deltaPitch",p,0.21,u,[P.r])
p.b=!0
u.ae(p)}p=u.f
if(!(Math.abs(p-0.32)<$.E().a)){u.f=0.32
p=new D.H("deltaRoll",p,0.32,u,[P.r])
p.b=!0
u.ae(p)}r.sao(u)
u=new O.du()
u.d=1
u.e=10
o=new V.aS(1,1,1)
u.b=o
p=[V.aS]
n=new D.H("objectColor",null,o,u,p)
n.b=!0
u.at(n)
o=new V.aS(0,0,0)
if(!J.S(u.c,o)){m=u.c
u.c=o
p=new D.H("fogColor",m,o,u,p)
p.b=!0
u.at(p)}p=u.d
if(!(Math.abs(p-3)<$.E().a)){u.d=3
p=new D.H("fogStart",p,3,u,[P.r])
p.b=!0
u.at(p)}p=u.e
if(!(Math.abs(p-6)<$.E().a)){u.e=6
p=new D.H("fogStop",p,6,u,[P.r])
p.b=!0
u.at(p)}r.scg(u)
l=new M.ci()
l.scX(0,O.hQ(t))
l.d.bj(l.gdv(),l.gdz())
l.e=null
l.f=null
l.r=null
l.x=null
k=X.jk(!0,!0,!1,null,2000,null,0)
j=new X.cC()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.sao(null)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.E().a)){j.c=1.0471975511965976
u=new D.H("fov",u,1.0471975511965976,j,[P.r])
u.b=!0
j.aa(u)}u=j.d
if(!(Math.abs(u-0.1)<$.E().a)){j.d=0.1
u=new D.H("near",u,0.1,j,[P.r])
u.b=!0
j.aa(u)}u=j.e
if(!(Math.abs(u-2000)<$.E().a)){j.e=2000
u=new D.H("far",u,2000,j,[P.r])
u.b=!0
j.aa(u)}u=l.a
if(u!==j){if(u!=null)u.gv().I(0,l.ga8())
m=l.a
l.a=j
j.gv().h(0,l.ga8())
u=new D.H("camera",m,l.a,l,[X.cd])
u.b=!0
l.a9(u)}u=l.b
if(u!==k){if(u!=null)u.gv().I(0,l.ga8())
m=l.b
l.b=k
k.gv().h(0,l.ga8())
u=new D.H("target",m,l.b,l,[X.cP])
u.b=!0
l.a9(u)}u=l.d
t=H.q(u,0)
H.v(r,t)
t=[t]
if(u.dY(H.a([r],t))){p=u.a
i=p.length
C.a.h(p,r)
u.ds(i,H.a([r],t))}u=l.a
h=V.aI(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
t=new U.ce()
t.a=h
u.sao(t)
g=C.u.cw(document,"tutorial1")
if(g==null)H.R(P.M("Failed to find an element with the identifier, tutorial1."))
u=E.jJ(g,!0,!0,!0,!1)
t=u.d
if(t!==l){if(t!=null)t.gv().I(0,u.gbo())
u.d=l
l.gv().h(0,u.gbo())
u.bp()}}},T={eG:function eG(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hg.prototype={}
J.L.prototype={
m:function(a,b){return a===b},
gC:function(a){return H.bE(a)},
i:function(a){return"Instance of '"+H.b4(a)+"'"}}
J.dT.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iD:1}
J.dV.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0},
$iy:1}
J.cq.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.eg.prototype={}
J.bQ.prototype={}
J.aG.prototype={
i:function(a){var u=a[$.iM()]
if(u==null)return this.cO(a)
return"JavaScript function for "+H.c(J.Z(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaE:1}
J.aj.prototype={
h:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.R(P.ao("add"))
a.push(b)},
I:function(a,b){var u
if(!!a.fixed$length)H.R(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
P:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.aB(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.F(u,t,H.c(a[t]))
return u.join(b)},
f4:function(a){return this.k(a,"")},
eZ:function(a,b,c){var u,t,s
H.f(b,{func:1,ret:P.D,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.d(P.aB(a))}throw H.d(H.he())},
eY:function(a,b){return this.eZ(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
cL:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a8(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.q(a,0)])
return H.a(a.slice(b,c),[H.q(a,0)])},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.he())},
bQ:function(a,b){var u,t
H.f(b,{func:1,ret:P.D,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.d(P.aB(a))}return!1},
H:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.hd(a,"[","]")},
gD:function(a){return new J.a5(a,a.length,0,[H.q(a,0)])},
gC:function(a){return H.bE(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.R(P.ao("set length"))
if(b<0)throw H.d(P.a8(b,0,null,"newLength",null))
a.length=b},
F:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.R(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.d(H.c2(a,b))
a[b]=c},
$ip:1,
$ib:1}
J.hf.prototype={}
J.a5.prototype={
gw:function(){return this.d},
q:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.w(u))
s=this.c
if(s>=t){this.sbs(null)
return!1}this.sbs(u[s]);++this.c
return!0},
sbs:function(a){this.d=H.v(a,H.q(this,0))},
$iai:1}
J.cp.prototype={
b5:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.h.gaA(b)
if(this.gaA(a)===u)return 0
if(this.gaA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaA:function(a){return a===0?1/a<0:a<0},
bY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.ao(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ao(""+a+".round()"))},
eB:function(a,b,c){if(C.h.b5(b,c)>0)throw H.d(H.bd(b))
if(this.b5(a,b)<0)return b
if(this.b5(a,c)>0)return c
return a},
fE:function(a,b){var u
if(b>20)throw H.d(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaA(a))return"-"+u
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
cD:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ax:function(a,b){return(a|0)===a?a/b|0:this.ek(a,b)},
ek:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.ao("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
aw:function(a,b){var u
if(a>0)u=this.ei(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ei:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iY:1}
J.co.prototype={$iu:1}
J.dU.prototype={}
J.b_.prototype={
b4:function(a,b){if(b<0)throw H.d(H.c2(a,b))
if(b>=a.length)H.R(H.c2(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.d(H.c2(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.d(P.ha(b,null,null))
return a+b},
cK:function(a,b,c){var u
if(c>a.length)throw H.d(P.a8(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aH:function(a,b){return this.cK(a,b,0)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.ei(b,null,null))
if(b>c)throw H.d(P.ei(b,null,null))
if(c>a.length)throw H.d(P.ei(c,null,null))
return a.substring(b,c)},
aI:function(a,b){return this.ar(a,b,null)},
fD:function(a){return a.toLowerCase()},
O:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fh:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.O(c,u)+a},
W:function(a,b){return this.fh(a,b," ")},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ii0:1,
$ii:1}
H.l.prototype={
gl:function(a){return this.a.length},
t:function(a,b){return C.c.b4(this.a,b)},
$acV:function(){return[P.u]},
$aG:function(){return[P.u]},
$ap:function(){return[P.u]},
$ab:function(){return[P.u]}}
H.dz.prototype={}
H.b0.prototype={
gD:function(a){return new H.bA(this,this.gl(this),0,[H.aN(this,"b0",0)])},
aE:function(a,b){return this.cN(0,H.f(b,{func:1,ret:P.D,args:[H.aN(this,"b0",0)]}))}}
H.bA.prototype={
gw:function(){return this.d},
q:function(){var u,t,s,r
u=this.a
t=J.hB(u)
s=t.gl(u)
if(this.b!==s)throw H.d(P.aB(u))
r=this.c
if(r>=s){this.saj(null)
return!1}this.saj(t.N(u,r));++this.c
return!0},
saj:function(a){this.d=H.v(a,H.q(this,0))},
$iai:1}
H.e4.prototype={
gD:function(a){return new H.e5(J.bo(this.a),this.b,this.$ti)},
gl:function(a){return J.aQ(this.a)},
N:function(a,b){return this.b.$1(J.h7(this.a,b))},
$ap:function(a,b){return[b]}}
H.e5.prototype={
q:function(){var u=this.b
if(u.q()){this.saj(this.c.$1(u.gw()))
return!0}this.saj(null)
return!1},
gw:function(){return this.a},
saj:function(a){this.a=H.v(a,H.q(this,1))},
$aai:function(a,b){return[b]}}
H.e6.prototype={
gl:function(a){return J.aQ(this.a)},
N:function(a,b){return this.b.$1(J.h7(this.a,b))},
$ab0:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.bR.prototype={
gD:function(a){return new H.fd(J.bo(this.a),this.b,this.$ti)}}
H.fd.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gw()))return!0
return!1},
gw:function(){return this.a.gw()}}
H.aX.prototype={}
H.cV.prototype={}
H.cU.prototype={}
H.ek.prototype={}
H.eM.prototype={
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
H.ee.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.dX.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.c(this.a)+")"}}
H.f1.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.h6.prototype={
$1:function(a){if(!!J.J(a).$iaC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.d9.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iX:1}
H.bs.prototype={
i:function(a){return"Closure '"+H.b4(this).trim()+"'"},
$iaE:1,
gfJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eF.prototype={}
H.ez.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bh(u)+"'"}}
H.bq.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var u,t
u=this.c
if(u==null)t=H.bE(this.a)
else t=typeof u!=="object"?J.c6(u):H.bE(u)
return(t^H.bE(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.b4(u)+"'")}}
H.eO.prototype={
i:function(a){return this.a}}
H.dn.prototype={
i:function(a){return this.a}}
H.ep.prototype={
i:function(a){return"RuntimeError: "+H.c(this.a)}}
H.ak.prototype={
gl:function(a){return this.a},
ga3:function(){return new H.cs(this,[H.q(this,0)])},
bU:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bD(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.bD(t,a)}else return this.f1(a)},
f1:function(a){var u=this.d
if(u==null)return!1
return this.b9(this.aO(u,J.c6(a)&0x3ffffff),a)>=0},
t:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.au(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.au(r,b)
s=t==null?null:t.b
return s}else return this.f2(b)},
f2:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aO(u,J.c6(a)&0x3ffffff)
s=this.b9(t,a)
if(s<0)return
return t[s].b},
F:function(a,b,c){var u,t,s,r,q,p
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aT()
this.b=u}this.bu(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aT()
this.c=t}this.bu(t,b,c)}else{s=this.d
if(s==null){s=this.aT()
this.d=s}r=J.c6(b)&0x3ffffff
q=this.aO(s,r)
if(q==null)this.aZ(s,r,[this.aU(b,c)])
else{p=this.b9(q,b)
if(p>=0)q[p].b=c
else q.push(this.aU(b,c))}}},
P:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aB(this))
u=u.c}},
bu:function(a,b,c){var u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
u=this.au(a,b)
if(u==null)this.aZ(a,b,this.aU(b,c))
else u.b=c},
dr:function(){this.r=this.r+1&67108863},
aU:function(a,b){var u,t
u=new H.dZ(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.dr()
return u},
b9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.hW(this)},
au:function(a,b){return a[b]},
aO:function(a,b){return a[b]},
aZ:function(a,b,c){a[b]=c},
da:function(a,b){delete a[b]},
bD:function(a,b){return this.au(a,b)!=null},
aT:function(){var u=Object.create(null)
this.aZ(u,"<non-identifier-key>",u)
this.da(u,"<non-identifier-key>")
return u},
$ihU:1}
H.dZ.prototype={}
H.cs.prototype={
gl:function(a){return this.a.a},
gD:function(a){var u,t
u=this.a
t=new H.e_(u,u.r,this.$ti)
t.c=u.e
return t}}
H.e_.prototype={
gw:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aB(u))
else{u=this.c
if(u==null){this.sbt(null)
return!1}else{this.sbt(u.a)
this.c=this.c.c
return!0}}},
sbt:function(a){this.d=H.v(a,H.q(this,0))},
$iai:1}
H.h_.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.h0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.h1.prototype={
$1:function(a){return this.a(H.z(a))},
$S:28}
H.dW.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ii0:1}
H.cz.prototype={}
H.cw.prototype={
gl:function(a){return a.length},
$iac:1,
$aac:function(){}}
H.cx.prototype={
t:function(a,b){H.df(b,a,a.length)
return a[b]},
$aaX:function(){return[P.r]},
$aG:function(){return[P.r]},
$ip:1,
$ap:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.cy.prototype={
$aaX:function(){return[P.u]},
$aG:function(){return[P.u]},
$ip:1,
$ap:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.e8.prototype={
t:function(a,b){H.df(b,a,a.length)
return a[b]}}
H.e9.prototype={
t:function(a,b){H.df(b,a,a.length)
return a[b]}}
H.ea.prototype={
t:function(a,b){H.df(b,a,a.length)
return a[b]}}
H.eb.prototype={
gl:function(a){return a.length},
t:function(a,b){H.df(b,a,a.length)
return a[b]}}
H.bV.prototype={}
H.bW.prototype={}
H.bX.prototype={}
H.bY.prototype={}
P.ff.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:10}
P.fe.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:23}
P.fg.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fh.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fL.prototype={
d_:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c1(new P.fM(this,b),0),a)
else throw H.d(P.ao("`setTimeout()` not found."))}}
P.fM.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.aq.prototype={
f7:function(a){if(this.c!==6)return!0
return this.b.b.be(H.f(this.d,{func:1,ret:P.D,args:[P.A]}),a.a,P.D,P.A)},
f0:function(a){var u,t,s,r
u=this.e
t=P.A
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dh(u,{func:1,args:[P.A,P.X]}))return H.hA(r.fu(u,a.a,a.b,null,t,P.X),s)
else return H.hA(r.be(H.f(u,{func:1,args:[P.A]}),a.a,null,t),s)}}
P.aa.prototype={
ci:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.I
if(t!==C.f){t.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.jW(b,t)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aa(0,$.I,[c])
r=b==null?1:3
this.bv(new P.aq(s,r,a,b,[u,c]))
return s},
fA:function(a,b){return this.ci(a,null,b)},
bv:function(a){var u,t
u=this.a
if(u<=1){a.a=H.j(this.c,"$iaq")
this.c=a}else{if(u===2){t=H.j(this.c,"$iaa")
u=t.a
if(u<4){t.bv(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.fU(null,null,u,H.f(new P.fo(this,a),{func:1,ret:-1}))}},
bL:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.j(this.c,"$iaq")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.j(this.c,"$iaa")
t=p.a
if(t<4){p.bL(a)
return}this.a=t
this.c=p.c}u.a=this.av(a)
t=this.b
t.toString
P.fU(null,null,t,H.f(new P.fs(u,this),{func:1,ret:-1}))}},
aY:function(){var u=H.j(this.c,"$iaq")
this.c=null
return this.av(u)},
av:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bA:function(a){var u,t,s
u=H.q(this,0)
H.hA(a,{futureOr:1,type:u})
t=this.$ti
if(H.dg(a,"$ibz",t,"$abz"))if(H.dg(a,"$iaa",t,null))P.il(a,this)
else P.jO(a,this)
else{s=this.aY()
H.v(a,u)
this.a=4
this.c=a
P.bU(this,s)}},
bB:function(a,b){var u
H.j(b,"$iX")
u=this.aY()
this.a=8
this.c=new P.T(a,b)
P.bU(this,u)},
$ibz:1}
P.fo.prototype={
$0:function(){P.bU(this.a,this.b)},
$S:0}
P.fs.prototype={
$0:function(){P.bU(this.b,this.a.a)},
$S:0}
P.fp.prototype={
$1:function(a){var u=this.a
u.a=0
u.bA(a)},
$S:10}
P.fq.prototype={
$2:function(a,b){H.j(b,"$iX")
this.a.bB(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.fr.prototype={
$0:function(){this.a.bB(this.b,this.c)},
$S:0}
P.fv.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.cf(H.f(r.d,{func:1}),null)}catch(q){t=H.a4(q)
s=H.be(q)
if(this.d){r=H.j(this.a.a.c,"$iT").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.j(this.a.a.c,"$iT")
else p.b=new P.T(t,s)
p.a=!0
return}if(!!J.J(u).$ibz){if(u instanceof P.aa&&u.a>=4){if(u.a===8){r=this.b
r.b=H.j(u.c,"$iT")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.fA(new P.fw(o),null)
r.a=!1}},
$S:1}
P.fw.prototype={
$1:function(a){return this.a},
$S:22}
P.fu.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.v(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.be(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a4(o)
t=H.be(o)
s=this.a
s.b=new P.T(u,t)
s.a=!0}},
$S:1}
P.ft.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.j(this.a.a.c,"$iT")
r=this.c
if(r.f7(u)&&r.e!=null){q=this.b
q.b=r.f0(u)
q.a=!1}}catch(p){t=H.a4(p)
s=H.be(p)
r=H.j(this.a.a.c,"$iT")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.T(t,s)
n.a=!0}},
$S:1}
P.cZ.prototype={}
P.eA.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aa(0,$.I,[P.u])
u.a=0
s=H.q(this,0)
r=H.f(new P.eC(u,this),{func:1,ret:-1,args:[s]})
H.f(new P.eD(u,t),{func:1,ret:-1})
W.P(this.a,this.b,r,!1,s)
return t}}
P.eC.prototype={
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.q(this.b,0)]}}}
P.eD.prototype={
$0:function(){this.b.bA(this.a.a)},
$S:0}
P.bJ.prototype={}
P.eB.prototype={}
P.T.prototype={
i:function(a){return H.c(this.a)},
$iaC:1}
P.fP.prototype={$ikW:1}
P.fT.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cB()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.fA.prototype={
fv:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
try{if(C.f===$.I){a.$0()
return}P.is(null,null,this,a,-1)}catch(s){u=H.a4(s)
t=H.be(s)
P.fS(null,null,this,u,H.j(t,"$iX"))}},
fw:function(a,b,c){var u,t,s
H.f(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.f===$.I){a.$1(b)
return}P.it(null,null,this,a,b,-1,c)}catch(s){u=H.a4(s)
t=H.be(s)
P.fS(null,null,this,u,H.j(t,"$iX"))}},
ex:function(a,b){return new P.fC(this,H.f(a,{func:1,ret:b}),b)},
b1:function(a){return new P.fB(this,H.f(a,{func:1,ret:-1}))},
ez:function(a,b){return new P.fD(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
cf:function(a,b){H.f(a,{func:1,ret:b})
if($.I===C.f)return a.$0()
return P.is(null,null,this,a,b)},
be:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.I===C.f)return a.$1(b)
return P.it(null,null,this,a,b,c,d)},
fu:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.I===C.f)return a.$2(b,c)
return P.jX(null,null,this,a,b,c,d,e,f)}}
P.fC.prototype={
$0:function(){return this.a.cf(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fB.prototype={
$0:function(){return this.a.fv(this.b)},
$S:1}
P.fD.prototype={
$1:function(a){var u=this.c
return this.a.fw(this.b,H.v(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fy.prototype={
gD:function(a){return P.ip(this,this.r,H.q(this,0))},
gl:function(a){return this.a},
H:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$iba")!=null}else{t=this.d6(b)
return t}},
d6:function(a){var u=this.d
if(u==null)return!1
return this.aN(this.bH(u,a),a)>=0},
h:function(a,b){var u,t
H.v(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.hq()
this.b=u}return this.bx(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.hq()
this.c=t}return this.bx(t,b)}else return this.d1(b)},
d1:function(a){var u,t,s
H.v(a,H.q(this,0))
u=this.d
if(u==null){u=P.hq()
this.d=u}t=this.bC(a)
s=u[t]
if(s==null)u[t]=[this.aK(a)]
else{if(this.aN(s,a)>=0)return!1
s.push(this.aK(a))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.e8(this.c,b)
else return this.e5(b)},
e5:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.bH(u,a)
s=this.aN(t,a)
if(s<0)return!1
this.bN(t.splice(s,1)[0])
return!0},
bx:function(a,b){H.v(b,H.q(this,0))
if(H.j(a[b],"$iba")!=null)return!1
a[b]=this.aK(b)
return!0},
e8:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$iba")
if(u==null)return!1
this.bN(u)
delete a[b]
return!0},
bz:function(){this.r=1073741823&this.r+1},
aK:function(a){var u,t
u=new P.ba(H.v(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bz()
return u},
bN:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bz()},
bC:function(a){return J.c6(a)&1073741823},
bH:function(a,b){return a[this.bC(b)]},
aN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.ba.prototype={}
P.fz.prototype={
gw:function(){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aB(u))
else{u=this.c
if(u==null){this.sby(null)
return!1}else{this.sby(H.v(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sby:function(a){this.d=H.v(a,H.q(this,0))},
$iai:1}
P.e0.prototype={$ip:1,$ib:1}
P.G.prototype={
gD:function(a){return new H.bA(a,this.gl(a),0,[H.fZ(this,a,"G",0)])},
N:function(a,b){return this.t(a,b)},
fC:function(a,b){var u,t
u=H.a([],[H.fZ(this,a,"G",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.F(u,t,this.t(a,t))
return u},
fB:function(a){return this.fC(a,!0)},
i:function(a){return P.hd(a,"[","]")}}
P.e2.prototype={}
P.e3.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.c(a)
u.a=t+": "
u.a+=H.c(b)},
$S:11}
P.b1.prototype={
P:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.aN(this,"b1",0),H.aN(this,"b1",1)]})
for(u=J.bo(this.ga3());u.q();){t=u.gw()
b.$2(t,this.t(0,t))}},
gl:function(a){return J.aQ(this.ga3())},
i:function(a){return P.hW(this)},
$ia7:1}
P.fF.prototype={
Z:function(a,b){var u
for(u=J.bo(H.m(b,"$ip",this.$ti,"$ap"));u.q();)this.h(0,u.gw())},
i:function(a){return P.hd(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.R(P.a8(b,0,null,"index",null))
for(u=P.ip(this,this.r,H.q(this,0)),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.d(P.aZ(b,this,"index",null,t))},
$ip:1,
$ii8:1}
P.d4.prototype={}
P.bt.prototype={}
P.bu.prototype={}
P.dB.prototype={
$abt:function(){return[P.i,[P.b,P.u]]}}
P.dO.prototype={
i:function(a){return this.a}}
P.dN.prototype={
d7:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.k(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.b7("")
if(r>b)q.a+=C.c.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.j5(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abu:function(){return[P.i,P.i]}}
P.f3.prototype={}
P.f4.prototype={
eH:function(a,b,c){var u,t,s
c=P.i6(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.fN(t)
if(s.di(a,b,c)!==c)s.bO(C.c.b4(a,c-1),0)
return new Uint8Array(t.subarray(0,H.jS(0,s.b,t.length)))},
eG:function(a){return this.eH(a,0,null)},
$abu:function(){return[P.i,[P.b,P.u]]}}
P.fN.prototype={
bO:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.k(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.k(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.k(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.k(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.k(u,t)
u[t]=128|a&63
return!1}},
di:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.b4(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.ab(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bO(r,C.c.ab(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.k(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.k(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.k(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.k(u,q)
u[q]=128|r&63}}return s}}
P.D.prototype={}
P.aU.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.h.aw(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jc(H.jA(this))
t=P.cf(H.jy(this))
s=P.cf(H.ju(this))
r=P.cf(H.jv(this))
q=P.cf(H.jx(this))
p=P.cf(H.jz(this))
o=P.jd(H.jw(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.aV.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gC:function(a){return C.h.gC(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dy()
t=this.a
if(t<0)return"-"+new P.aV(0-t).i(0)
s=u.$1(C.h.ax(t,6e7)%60)
r=u.$1(C.h.ax(t,1e6)%60)
q=new P.dx().$1(t%1e6)
return""+C.h.ax(t,36e8)+":"+H.c(s)+":"+H.c(r)+"."+H.c(q)}}
P.dx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.dy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.aC.prototype={}
P.cB.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gaM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaM()+t+s
if(!this.a)return r
q=this.gaL()
p=P.dD(this.b)
return r+q+": "+p}}
P.b5.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.c(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.c(u)
else if(s>u)t=": Not in range "+H.c(u)+".."+H.c(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.c(u)}return t}}
P.dP.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var u,t
u=H.Q(this.b)
if(typeof u!=="number")return u.fK()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.c(t)},
gl:function(a){return this.f}}
P.f2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f0.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bI.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dq.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dD(u)+"."}}
P.ef.prototype={
i:function(a){return"Out of Memory"},
$iaC:1}
P.cM.prototype={
i:function(a){return"Stack Overflow"},
$iaC:1}
P.ds.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d1.prototype={
i:function(a){return"Exception: "+this.a}}
P.dJ.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.c.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.aE.prototype={}
P.u.prototype={}
P.p.prototype={
aE:function(a,b){var u=H.aN(this,"p",0)
return new H.bR(this,H.f(b,{func:1,ret:P.D,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gD(this)
for(t=0;u.q();)++t
return t},
ga6:function(a){var u,t
u=this.gD(this)
if(!u.q())throw H.d(H.he())
t=u.gw()
if(u.q())throw H.d(H.jm())
return t},
N:function(a,b){var u,t,s
if(b<0)H.R(P.a8(b,0,null,"index",null))
for(u=this.gD(this),t=0;u.q();){s=u.gw()
if(b===t)return s;++t}throw H.d(P.aZ(b,this,"index",null,t))},
i:function(a){return P.jl(this,"(",")")}}
P.ai.prototype={}
P.b.prototype={$ip:1}
P.y.prototype={
gC:function(a){return P.A.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Y.prototype={}
P.A.prototype={constructor:P.A,$iA:1,
m:function(a,b){return this===b},
gC:function(a){return H.bE(this)},
i:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.i(this)}}
P.X.prototype={}
P.i.prototype={$ii0:1}
P.b7.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.c7.prototype={
i:function(a){return String(a)},
$ic7:1}
W.dj.prototype={
i:function(a){return String(a)}}
W.bp.prototype={$ibp:1}
W.ax.prototype={$iax:1}
W.aR.prototype={
bg:function(a,b,c){var u=this.dj(a,b,P.k2(c,null))
return u},
dj:function(a,b,c){return a.getContext(b,c)},
$iaR:1}
W.ay.prototype={
gl:function(a){return a.length}}
W.bv.prototype={
gl:function(a){return a.length}}
W.dr.prototype={}
W.a6.prototype={$ia6:1}
W.bw.prototype={
es:function(a,b){return a.adoptNode(b)},
cw:function(a,b){return a.getElementById(b)}}
W.dw.prototype={
i:function(a){return String(a)}}
W.cg.prototype={
eL:function(a,b){return a.createHTMLDocument(b)}}
W.ch.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
m:function(a,b){var u
if(b==null)return!1
if(!H.dg(b,"$icH",[P.Y],"$acH"))return!1
u=J.a3(b)
return a.left===u.gc_(b)&&a.top===u.gcl(b)&&a.width===u.gbf(b)&&a.height===u.gb8(b)},
gC:function(a){return W.io(C.d.gC(a.left),C.d.gC(a.top),C.d.gC(a.width),C.d.gC(a.height))},
gb8:function(a){return a.height},
gc_:function(a){return a.left},
gcl:function(a){return a.top},
gbf:function(a){return a.width},
$icH:1,
$acH:function(){return[P.Y]}}
W.fj.prototype={
gl:function(a){return this.b.length},
t:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.j(u[b],"$iC")},
h:function(a,b){J.hK(this.a,b)
return b},
gD:function(a){var u=this.fB(this)
return new J.a5(u,u.length,0,[H.q(u,0)])},
$aG:function(){return[W.C]},
$ap:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
gew:function(a){return new W.fk(a)},
gbT:function(a){return new W.fj(a,a.children)},
i:function(a){return a.localName},
S:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.hS
if(u==null){u=H.a([],[W.a1])
t=new W.cA(u)
C.a.h(u,W.im(null))
C.a.h(u,W.iq())
$.hS=t
d=t}else d=u
u=$.hR
if(u==null){u=new W.dc(d)
$.hR=u
c=u}else{u.a=d
c=u}}if($.as==null){u=document
t=u.implementation
t=(t&&C.D).eL(t,"")
$.as=t
$.hc=t.createRange()
t=$.as
t.toString
t=t.createElement("base")
H.j(t,"$ibp")
t.href=u.baseURI
u=$.as.head;(u&&C.E).n(u,t)}u=$.as
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.j(t,"$iax")}u=$.as
if(!!this.$iax)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.as.body;(u&&C.j).n(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.H(C.P,a.tagName)){u=$.hc;(u&&C.y).cF(u,s)
u=$.hc
r=(u&&C.y).eJ(u,b)}else{s.innerHTML=b
r=$.as.createDocumentFragment()
for(u=J.a3(r);t=s.firstChild,t!=null;)u.n(r,t)}u=$.as.body
if(s==null?u!=null:s!==u)J.hL(s)
c.bi(r)
C.u.es(document,r)
return r},
eK:function(a,b,c){return this.S(a,b,c,null)},
cI:function(a,b,c,d){a.textContent=null
this.n(a,this.S(a,b,c,d))},
cH:function(a,b){return this.cI(a,b,null,null)},
ai:function(a,b){return a.getAttribute(b)},
e6:function(a,b){return a.removeAttribute(b)},
$iC:1,
gfz:function(a){return a.tagName}}
W.dA.prototype={
$1:function(a){return!!J.J(H.j(a,"$it")).$iC},
$S:13}
W.e.prototype={$ie:1}
W.aW.prototype={
d2:function(a,b,c,d){return a.addEventListener(b,H.c1(H.f(c,{func:1,args:[W.e]}),1),!1)},
$iaW:1}
W.dI.prototype={
gl:function(a){return a.length}}
W.cm.prototype={}
W.aY.prototype={
gl:function(a){return a.length},
t:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aZ(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iac:1,
$aac:function(){return[W.t]},
$aG:function(){return[W.t]},
$ip:1,
$ap:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$iaY:1,
$aa_:function(){return[W.t]}}
W.cn.prototype={}
W.al.prototype={$ial:1}
W.cu.prototype={
i:function(a){return String(a)},
$icu:1}
W.O.prototype={$iO:1}
W.U.prototype={
ga6:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.d(P.ia("No elements"))
if(t>1)throw H.d(P.ia("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s,r,q
H.m(b,"$ip",[W.t],"$ap")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a3(t),q=0;q<s;++q)r.n(t,u.firstChild)
return},
gD:function(a){var u=this.a.childNodes
return new W.ck(u,u.length,-1,[H.fZ(C.R,u,"a_",0)])},
gl:function(a){return this.a.childNodes.length},
t:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$aG:function(){return[W.t]},
$ap:function(){return[W.t]},
$ab:function(){return[W.t]}}
W.t.prototype={
fp:function(a){var u=a.parentNode
if(u!=null)J.di(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.cM(a):u},
n:function(a,b){return a.appendChild(b)},
e7:function(a,b){return a.removeChild(b)},
$it:1}
W.bD.prototype={
gl:function(a){return a.length},
t:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aZ(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iac:1,
$aac:function(){return[W.t]},
$aG:function(){return[W.t]},
$ip:1,
$ap:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$aa_:function(){return[W.t]}}
W.cG.prototype={
eJ:function(a,b){return a.createContextualFragment(b)},
cF:function(a,b){return a.selectNodeContents(b)}}
W.eq.prototype={
gl:function(a){return a.length}}
W.b8.prototype={}
W.cN.prototype={
S:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
u=W.jh("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.U(t).Z(0,new W.U(u))
return t}}
W.cO.prototype={
S:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.S(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.ga6(u)
s.toString
u=new W.U(s)
r=u.ga6(u)
t.toString
r.toString
new W.U(t).Z(0,new W.U(r))
return t}}
W.eE.prototype={
S:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.S(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.ga6(u)
t.toString
s.toString
new W.U(t).Z(0,new W.U(s))
return t}}
W.bK.prototype={$ibK:1}
W.am.prototype={$iam:1}
W.ad.prototype={$iad:1}
W.eL.prototype={
gl:function(a){return a.length},
t:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aZ(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iac:1,
$aac:function(){return[W.am]},
$aG:function(){return[W.am]},
$ip:1,
$ap:function(){return[W.am]},
$ib:1,
$ab:function(){return[W.am]},
$aa_:function(){return[W.am]}}
W.aK.prototype={}
W.ap.prototype={
geR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ao("deltaY is not supported"))},
geQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ao("deltaX is not supported"))},
$iap:1}
W.bS.prototype={
ea:function(a,b){return a.requestAnimationFrame(H.c1(H.f(b,{func:1,ret:-1,args:[P.Y]}),1))},
dc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bT.prototype={$ibT:1}
W.d0.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
m:function(a,b){var u
if(b==null)return!1
if(!H.dg(b,"$icH",[P.Y],"$acH"))return!1
u=J.a3(b)
return a.left===u.gc_(b)&&a.top===u.gcl(b)&&a.width===u.gbf(b)&&a.height===u.gb8(b)},
gC:function(a){return W.io(C.d.gC(a.left),C.d.gC(a.top),C.d.gC(a.width),C.d.gC(a.height))},
gb8:function(a){return a.height},
gbf:function(a){return a.width}}
W.d5.prototype={
gl:function(a){return a.length},
t:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aZ(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iac:1,
$aac:function(){return[W.t]},
$aG:function(){return[W.t]},
$ip:1,
$ap:function(){return[W.t]},
$ib:1,
$ab:function(){return[W.t]},
$aa_:function(){return[W.t]}}
W.fi.prototype={
P:function(a,b){var u,t,s,r,q,p
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=this.ga3(),t=u.length,s=this.a,r=J.a3(s),q=0;q<u.length;u.length===t||(0,H.w)(u),++q){p=u[q]
b.$2(p,r.ai(s,p))}},
ga3:function(){var u,t,s,r,q
u=this.a.attributes
t=H.a([],[P.i])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.j(u[r],"$ibT")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$ab1:function(){return[P.i,P.i]},
$aa7:function(){return[P.i,P.i]}}
W.fk.prototype={
t:function(a,b){return J.h8(this.a,H.z(b))},
gl:function(a){return this.ga3().length}}
W.fl.prototype={}
W.hp.prototype={}
W.fm.prototype={}
W.fn.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ie"))},
$S:20}
W.aL.prototype={
cW:function(a){var u,t
u=$.hJ()
if(u.a===0){for(t=0;t<262;++t)u.F(0,C.O[t],W.k7())
for(t=0;t<12;++t)u.F(0,C.p[t],W.k8())}},
ag:function(a){return $.j_().H(0,W.bx(a))},
a_:function(a,b,c){var u,t,s
u=W.bx(a)
t=$.hJ()
s=t.t(0,H.c(u)+"::"+b)
if(s==null)s=t.t(0,"*::"+b)
if(s==null)return!1
return H.hx(s.$4(a,b,c,this))},
$ia1:1}
W.a_.prototype={
gD:function(a){return new W.ck(a,this.gl(a),-1,[H.fZ(this,a,"a_",0)])}}
W.cA.prototype={
ag:function(a){return C.a.bQ(this.a,new W.ed(a))},
a_:function(a,b,c){return C.a.bQ(this.a,new W.ec(a,b,c))},
$ia1:1}
W.ed.prototype={
$1:function(a){return H.j(a,"$ia1").ag(this.a)},
$S:15}
W.ec.prototype={
$1:function(a){return H.j(a,"$ia1").a_(this.a,this.b,this.c)},
$S:15}
W.d8.prototype={
cZ:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.aE(0,new W.fG())
t=b.aE(0,new W.fH())
this.b.Z(0,u)
s=this.c
s.Z(0,C.Q)
s.Z(0,t)},
ag:function(a){return this.a.H(0,W.bx(a))},
a_:function(a,b,c){var u,t
u=W.bx(a)
t=this.c
if(t.H(0,H.c(u)+"::"+b))return this.d.eu(c)
else if(t.H(0,"*::"+b))return this.d.eu(c)
else{t=this.b
if(t.H(0,H.c(u)+"::"+b))return!0
else if(t.H(0,"*::"+b))return!0
else if(t.H(0,H.c(u)+"::*"))return!0
else if(t.H(0,"*::*"))return!0}return!1},
$ia1:1}
W.fG.prototype={
$1:function(a){return!C.a.H(C.p,H.z(a))},
$S:16}
W.fH.prototype={
$1:function(a){return C.a.H(C.p,H.z(a))},
$S:16}
W.fJ.prototype={
a_:function(a,b,c){if(this.cQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.h8(a,"template")==="")return this.e.H(0,b)
return!1}}
W.fK.prototype={
$1:function(a){return"TEMPLATE::"+H.c(H.z(a))},
$S:24}
W.fI.prototype={
ag:function(a){var u=J.J(a)
if(!!u.$ibF)return!1
u=!!u.$ih
if(u&&W.bx(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.c.aH(b,"on"))return!1
return this.ag(a)},
$ia1:1}
W.ck.prototype={
q:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbG(J.j1(this.a,u))
this.c=u
return!0}this.sbG(null)
this.c=t
return!1},
gw:function(){return this.d},
sbG:function(a){this.d=H.v(a,H.q(this,0))},
$iai:1}
W.a1.prototype={}
W.fE.prototype={$ikJ:1}
W.dc.prototype={
bi:function(a){new W.fO(this).$2(a,null)},
al:function(a,b){if(b==null)J.hL(a)
else J.di(b,a)},
ec:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.j3(a)
s=J.h8(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.a4(o)}q="element unprintable"
try{q=J.Z(a)}catch(o){H.a4(o)}try{p=W.bx(a)
this.eb(H.j(a,"$iC"),b,u,q,p,H.j(t,"$ia7"),H.z(s))}catch(o){if(H.a4(o) instanceof P.ag)throw o
else{this.al(a,b)
window
n="Removing corrupted element "+H.c(q)
if(typeof console!="undefined")window.console.warn(n)}}},
eb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
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
return}u=f.ga3()
t=H.a(u.slice(0),[H.q(u,0)])
for(s=f.ga3().length-1,u=f.a,r=J.a3(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.a_(a,J.j6(q),r.ai(u,q))){window
p="Removing disallowed attribute <"+H.c(e)+" "+q+'="'+H.c(r.ai(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ai(u,q)
r.e6(u,q)}}if(!!J.J(a).$ibK)this.bi(a.content)},
$ikv:1}
W.fO.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.ec(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.al(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.a4(r)
q=H.j(u,"$it")
if(s){p=q.parentNode
if(p!=null)J.di(p,q)}else J.di(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$it")}},
$S:25}
W.d_.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dd.prototype={}
W.de.prototype={}
P.fV.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.dF.prototype={
gaP:function(){var u,t,s
u=this.b
t=H.aN(u,"G",0)
s=W.C
return new H.e4(new H.bR(u,H.f(new P.dG(),{func:1,ret:P.D,args:[t]}),[t]),H.f(new P.dH(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hK(this.b.a,b)},
gl:function(a){return J.aQ(this.gaP().a)},
t:function(a,b){var u=this.gaP()
return u.b.$1(J.h7(u.a,b))},
gD:function(a){var u=P.js(this.gaP(),!1,W.C)
return new J.a5(u,u.length,0,[H.q(u,0)])},
$aG:function(){return[W.C]},
$ap:function(){return[W.C]},
$ab:function(){return[W.C]}}
P.dG.prototype={
$1:function(a){return!!J.J(H.j(a,"$it")).$iC},
$S:13}
P.dH.prototype={
$1:function(a){return H.bf(H.j(a,"$it"),"$iC")},
$S:27}
P.bF.prototype={$ibF:1}
P.h.prototype={
gbT:function(a){return new P.dF(a,new W.U(a))},
S:function(a,b,c,d){var u,t,s,r,q,p
u=H.a([],[W.a1])
C.a.h(u,W.im(null))
C.a.h(u,W.iq())
C.a.h(u,new W.fI())
c=new W.dc(new W.cA(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).eK(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.U(r)
p=u.ga6(u)
for(u=J.a3(q);s=p.firstChild,s!=null;)u.n(q,s)
return q},
$ih:1}
P.c9.prototype={$ic9:1}
P.cl.prototype={$icl:1}
P.cF.prototype={$icF:1}
P.b6.prototype={
bR:function(a,b,c){return a.attachShader(b,c)},
a0:function(a,b,c){return a.bindBuffer(b,c)},
ey:function(a,b,c){return a.bindFramebuffer(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
eC:function(a,b){return a.clear(b)},
eD:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eE:function(a,b){return a.clearDepth(b)},
eF:function(a,b){return a.compileShader(b)},
eM:function(a,b){return a.createShader(b)},
eO:function(a,b){return a.deleteProgram(b)},
eP:function(a,b){return a.deleteShader(b)},
eS:function(a,b){return a.depthFunc(b)},
bV:function(a,b){return a.disableVertexAttribArray(b)},
eU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bW:function(a,b){return a.enable(b)},
bX:function(a,b){return a.enableVertexAttribArray(b)},
cs:function(a,b,c){return a.getActiveAttrib(b,c)},
ct:function(a,b,c){return a.getActiveUniform(b,c)},
cu:function(a,b,c){return a.getAttribLocation(b,c)},
bh:function(a,b){return a.getParameter(b)},
cz:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
cA:function(a,b){return a.getShaderInfoLog(b)},
cB:function(a,b,c){return a.getShaderParameter(b,c)},
cC:function(a,b,c){return a.getUniformLocation(b,c)},
f5:function(a,b){return a.linkProgram(b)},
cJ:function(a,b,c){return a.shaderSource(b,c)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
fH:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fI:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ib6:1}
P.cK.prototype={$icK:1}
P.cT.prototype={$icT:1}
O.aA.prototype={
cG:function(a,b,c){var u={func:1,ret:-1,args:[P.u,[P.p,H.q(this,0)]]}
H.f(a,u)
H.f(c,u)
this.sbJ(b)
this.sbI(a)
this.sbK(c)},
bj:function(a,b){return this.cG(a,null,b)},
dY:function(a){H.m(a,"$ip",this.$ti,"$ap")
return!0},
ds:function(a,b){var u
H.m(b,"$ip",this.$ti,"$ap")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gD:function(a){var u=this.a
return new J.a5(u,u.length,0,[H.q(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
sdq:function(a){this.a=H.m(a,"$ib",this.$ti,"$ab")},
sbJ:function(a){this.b=H.f(a,{func:1,ret:P.D,args:[[P.p,H.q(this,0)]]})},
sbI:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.u,[P.p,H.q(this,0)]]})},
sbK:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.u,[P.p,H.q(this,0)]]})},
$ip:1}
O.bB.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.aD()
this.b=u}return u},
cV:function(a){var u=this.b
if(u!=null)u.T(a)},
a7:function(){return this.cV(null)},
gan:function(){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.hY()},
cb:function(a){var u=this.a
if(a==null)C.a.h(u,V.hY())
else C.a.h(u,a)
this.a7()},
bd:function(){var u=this.a
if(u.length>0){u.pop()
this.a7()}},
saR:function(a){this.a=H.m(a,"$ib",[V.aH],"$ab")}}
E.dl.prototype={}
E.V.prototype={
bw:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a5(u,u.length,0,[H.q(u,0)]);u.q();){t=u.d
if(t.f==null)t.bw()}},
sbl:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().I(0,this.gc4())
t=this.c
if(t!=null)t.gv().h(0,this.gc4())
s=new D.H("shape",u,this.c,this,[F.cL])
s.b=!0
this.R(s)}},
scg:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().I(0,this.gc6())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.gc6())
this.bw()
s=new D.H("technique",t,this.f,this,[O.b9])
s.b=!0
this.R(s)}},
sao:function(a){var u,t
if(!J.S(this.r,a)){u=this.r
if(u!=null)u.gv().I(0,this.gc2())
if(a!=null)a.gv().h(0,this.gc2())
this.r=a
t=new D.H("mover",u,a,this,[U.bC])
t.b=!0
this.R(t)}},
co:function(a){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=a.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.scq(u.a+u.d*a.y)
u.sc9(u.b+u.e*a.y)
u.sce(u.c+u.f*a.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.aI(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.O(0,V.aI(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.O(0,V.aI(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.aD()}p=u.x}else p=null
if(!J.S(p,this.x)){o=this.x
this.x=p
n=new D.H("matrix",o,p,this,[V.aH])
n.b=!0
this.R(n)}for(u=this.y.a,u=new J.a5(u,u.length,0,[H.q(u,0)]);u.q();)u.d.co(a)},
ah:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gan())
else C.a.h(u.a,t.O(0,u.gan()))
u.a7()
a.cc(this.f)
u=a.dy
s=(u&&C.a).gaB(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.t(0,"Depth")
if(r==null){u=a.a
r=new A.dv(u,"Depth")
r.cT(u,"Depth")
t=$.jf
q=$.je
r.c=t
r.d=q
r.e=r.bF(t,35633)
r.f=r.bF(r.d,35632)
t=u.createProgram()
r.r=t
C.b.bR(u,t,r.e)
C.b.bR(u,r.r,r.f)
C.b.f5(u,r.r)
if(!H.hx(C.b.aF(u,r.r,35714))){p=C.b.cz(u,r.r)
C.b.eO(u,r.r)
H.R(P.M("Failed to link shader: "+H.c(p)))}r.ee()
r.eg()
r.z=r.x.t(0,"posAttr")
r.Q=H.bf(r.y.t(0,"objClr"),"$ibO")
r.ch=H.bf(r.y.t(0,"fogClr"),"$ibO")
r.cx=H.bf(r.y.t(0,"fogStart"),"$ibN")
r.cy=H.bf(r.y.t(0,"fogStop"),"$ibN")
r.db=H.bf(r.y.t(0,"viewObjMat"),"$ibP")
r.dx=H.bf(r.y.t(0,"projMat"),"$ibP")
if(a.fr.bU("Depth"))H.R(P.M('Shader cache already contains a shader by the name "Depth".'))
a.fr.F(0,"Depth",r)}s.a=r
u=r}t=this.e
if(!(t instanceof Z.cb)){this.e=null
t=null}if(t==null){u=this.d.eA(new Z.fc(a.a),$.aw())
t=u.eW($.aw())
q=s.a
t.e=q.z.c
this.e=u
u=q}t=a.a
C.b.cp(t,u.r)
u.x.eV()
q=s.b
o=u.Q
o.toString
n=q.a
m=q.b
q=q.c
C.b.cn(o.a,o.d,n,m,q)
q=s.c
m=u.ch
m.toString
n=q.a
o=q.b
q=q.c
C.b.cn(m.a,m.d,n,o,q)
q=s.d
o=u.cx
C.b.cm(o.a,o.d,q)
q=s.e
o=u.cy
C.b.cm(o.a,o.d,q)
q=a.cy.gan()
o=u.dx
o.toString
o.bk(q.cj(0,!0))
q=a.cx
if(q==null){q=a.db.gan().O(0,a.dx.gan())
a.cx=q}u=u.db
u.toString
u.bk(q.cj(0,!0))
q=this.e
q.b0(a)
q.ah(a)
q.fF(a)
q=s.a
q.toString
C.b.cp(t,null)
q.x.eT()}for(u=this.y.a,u=new J.a5(u,u.length,0,[H.q(u,0)]);u.q();)u.d.ah(a)
a.ca()
a.dx.bd()},
R:function(a){var u=this.z
if(u!=null)u.T(a)},
V:function(){return this.R(null)},
c5:function(a){H.j(a,"$iB")
this.e=null
this.R(a)},
ff:function(){return this.c5(null)},
c7:function(a){this.R(H.j(a,"$iB"))},
fg:function(){return this.c7(null)},
c3:function(a){this.R(H.j(a,"$iB"))},
fe:function(){return this.c3(null)},
c1:function(a){this.R(H.j(a,"$iB"))},
fb:function(){return this.c1(null)},
fa:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ip",[E.V],"$ap")
for(u=b.length,t=this.gc0(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sad(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.f(t,s)
if(o.a==null)o.sad(H.a([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
fd:function(a,b){var u,t
H.m(b,"$ip",[E.V],"$ap")
for(u=b.gD(b),t=this.gc0();u.q();)u.gw().gv().I(0,t)
this.V()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sd5:function(a,b){this.y=H.m(b,"$iaA",[E.V],"$aaA")},
$ihZ:1}
E.el.prototype={
cR:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aU(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bB()
t=[V.aH]
u.saR(H.a([],t))
u.b=null
u.gv().h(0,new E.em(this))
this.cy=u
u=new O.bB()
u.saR(H.a([],t))
u.b=null
u.gv().h(0,new E.en(this))
this.db=u
u=new O.bB()
u.saR(H.a([],t))
u.b=null
u.gv().h(0,new E.eo(this))
this.dx=u
this.sel(H.a([],[O.b9]))
u=this.dy;(u&&C.a).h(u,null)
this.seh(new H.ak([P.i,A.bG]))},
cc:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
ca:function(){var u=this.dy
if(u.length>1)u.pop()},
sel:function(a){this.dy=H.m(a,"$ib",[O.b9],"$ab")},
seh:function(a){this.fr=H.m(a,"$ia7",[P.i,A.bG],"$aa7")}}
E.em.prototype={
$1:function(a){var u
H.j(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.en.prototype={
$1:function(a){var u
H.j(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.eo.prototype={
$1:function(a){var u
H.j(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.cQ.prototype={
bq:function(a){H.j(a,"$iB")
this.cd()},
bp:function(){return this.bq(null)},
bM:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.O()
if(typeof u!=="number")return H.aP(u)
s=C.d.bY(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.O()
r=C.d.bY(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.id(C.m,this.gfs())}},
cd:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.f(new E.eH(this),{func:1,ret:-1,args:[P.Y]})
C.A.dc(u)
C.A.ea(u,W.iw(t,P.Y))}},
fq:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bM()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aU(r,!1)
s.y=P.jg(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.a7()
r=s.db
C.a.sl(r.a,0)
r.a7()
r=s.dx
C.a.sl(r.a,0)
r.a7()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ah(this.e)}}catch(q){u=H.a4(q)
t=H.be(q)
P.iH("Error: "+H.c(u))
P.iH("Stack: "+H.c(t))
throw H.d(u)}}}
E.eH.prototype={
$1:function(a){var u
H.ki(a)
u=this.a
if(u.ch){u.ch=!1
u.fq()}},
$S:21}
Z.cY.prototype={$ikp:1}
Z.ca.prototype={
b0:function(a){var u,t,s
try{t=a.a
C.b.bX(t,this.e)
C.b.fH(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.a4(s)
t=P.M('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.c(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.c(this.e)+"]"}}
Z.fc.prototype={$ikq:1}
Z.cb.prototype={
eW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b0:function(a){var u,t
u=this.a
C.b.a0(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b0(a)},
fF:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.bV(s,u[t].e)
C.b.a0(s,this.a.a,null)},
ah:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a0(t,p,r.b)
C.b.eU(t,q.a,q.b,5123,0)
C.b.a0(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.i]
t=H.a([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q)C.a.h(t,s[q].i(0))
p=H.a([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.Z(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sdk:function(a){this.b=H.m(a,"$ib",[Z.aF],"$ab")},
$iky:1}
Z.aF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b4(this.c)+"'")+"]"}}
Z.cX.prototype={
gbm:function(a){var u,t
u=this.a
t=(u&$.aw().a)!==0?3:0
if((u&$.bk().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.c3().a)!==0)t+=3
if((u&$.c4().a)!==0)t+=4
if((u&$.bn().a)!==0)++t
return(u&$.bi().a)!==0?t+4:t},
ev:function(a){var u,t,s
u=$.aw()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0)if(s===a)return u
return $.iZ()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cX))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.a([],[P.i])
t=this.a
if((t&$.aw().a)!==0)C.a.h(u,"Pos")
if((t&$.bk().a)!==0)C.a.h(u,"Norm")
if((t&$.bj().a)!==0)C.a.h(u,"Binm")
if((t&$.bl().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bm().a)!==0)C.a.h(u,"TxtCube")
if((t&$.c3().a)!==0)C.a.h(u,"Clr3")
if((t&$.c4().a)!==0)C.a.h(u,"Clr4")
if((t&$.bn().a)!==0)C.a.h(u,"Weight")
if((t&$.bi().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.dp.prototype={}
D.by.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.f(b,u)
if(this.a==null)this.sad(H.a([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.H(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
return t},
T:function(a){var u,t,s,r
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
return!0}if(!s)C.a.P(t,new D.dE(u))
return!0},
ft:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.T(t)}}},
aD:function(){return this.ft(!0,!1)},
sad:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saV:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.dE.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:34}
D.B.prototype={}
D.dQ.prototype={}
D.dR.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.c(this.d)+" => "+H.c(this.e)}}
X.cc.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cc))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.cr.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cr))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.dY.prototype={
fm:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fi:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
se4:function(a){this.d=H.m(a,"$ii8",[P.u],"$ai8")}}
X.e1.prototype={
bc:function(a,b){this.r=a.a
return!1},
aq:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cE()
if(typeof u!=="number")return u.cr()
this.r=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
fn:function(a){return!1},
dN:function(a,b,c){return}}
X.au.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.e7.prototype={
bc:function(a,b){this.f=a.a
return!1},
aq:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cE()
if(typeof u!=="number")return u.cr()
this.f=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
fo:function(a,b){return!1}}
X.eK.prototype={
fl:function(a){H.m(a,"$ib",[V.a2],"$ab")
return!1},
fj:function(a){H.m(a,"$ib",[V.a2],"$ab")
return!1},
fk:function(a){H.m(a,"$ib",[V.a2],"$ab")
return!1}}
X.cW.prototype={
bE:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cr(u,new X.au(t,a.altKey,a.shiftKey))},
af:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
b_:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
a2:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.Y()
q=u.top
if(typeof s!=="number")return s.Y()
return new V.a2(t-r,s-q)},
ak:function(a){return new V.av(a.movementX,a.movementY)},
aX:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.a([],[V.a2])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
o=C.d.X(p.pageX)
C.d.X(p.pageY)
n=u.left
C.d.X(p.pageX)
C.a.h(t,new V.a2(o-n,C.d.X(p.pageY)-u.top))}return t},
a1:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cc(u,new X.au(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.Y()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.Y()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
dI:function(a){this.f=!0},
du:function(a){this.f=!1},
dC:function(a){H.j(a,"$iO")
if(this.f&&this.aS(a))a.preventDefault()},
dM:function(a){var u
H.j(a,"$ial")
if(!this.f)return
u=this.bE(a)
this.b.fm(u)},
dK:function(a){var u
H.j(a,"$ial")
if(!this.f)return
u=this.bE(a)
this.b.fi(u)},
dP:function(a){var u,t,s,r
H.j(a,"$iO")
u=this.a
u.focus()
this.f=!0
this.af(a)
if(this.x){t=this.a1(a)
s=this.ak(a)
if(this.d.bc(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a1(a)
r=this.a2(a)
if(this.c.bc(t,r))a.preventDefault()},
dT:function(a){var u,t,s
H.j(a,"$iO")
this.af(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.aq(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.aq(u,s))a.preventDefault()},
dG:function(a){var u,t,s
H.j(a,"$iO")
if(!this.aS(a)){this.af(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.aq(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.aq(u,s))a.preventDefault()}},
dR:function(a){var u,t,s
H.j(a,"$iO")
this.af(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.ap(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.ap(u,s))a.preventDefault()},
dE:function(a){var u,t,s
H.j(a,"$iO")
if(!this.aS(a)){this.af(a)
u=this.a1(a)
if(this.x){t=this.ak(a)
if(this.d.ap(u,t))a.preventDefault()
return}if(this.r)return
s=this.a2(a)
if(this.c.ap(u,s))a.preventDefault()}},
dV:function(a){var u,t
H.j(a,"$iap")
this.af(a)
u=new V.av((a&&C.z).geQ(a),C.z.geR(a)).J(0,180)
if(this.x){if(this.d.fn(u))a.preventDefault()
return}if(this.r)return
t=this.a2(a)
if(this.c.fo(u,t))a.preventDefault()},
dX:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a1(this.y)
s=this.a2(this.y)
this.d.dN(t,s,u)}},
e3:function(a){var u
H.j(a,"$iad")
this.a.focus()
this.f=!0
this.b_(a)
u=this.aX(a)
if(this.e.fl(u))a.preventDefault()},
e_:function(a){var u
H.j(a,"$iad")
this.b_(a)
u=this.aX(a)
if(this.e.fj(u))a.preventDefault()},
e1:function(a){var u
H.j(a,"$iad")
this.b_(a)
u=this.aX(a)
if(this.e.fk(u))a.preventDefault()},
sdd:function(a){this.z=H.m(a,"$ib",[[P.bJ,P.A]],"$ab")}}
V.aS.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aS))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.aT.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+", "+V.x(this.d,3,0)+"]"}}
V.dC.prototype={}
V.aH.prototype={
cj:function(a,b){var u=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
O:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aI(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.E().a
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
i:function(a){return this.A()},
bZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.fX(H.a([this.a,this.e,this.y,this.cx],u),b,c)
s=V.fX(H.a([this.b,this.f,this.z,this.cy],u),b,c)
r=V.fX(H.a([this.c,this.r,this.Q,this.db],u),b,c)
q=V.fX(H.a([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.k(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.k(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.k(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.k(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.k(t,1)
l=l+t[1]+", "
if(1>=o)return H.k(s,1)
l=l+s[1]+", "
if(1>=n)return H.k(r,1)
l=l+r[1]+", "
if(1>=m)return H.k(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.k(t,2)
p=p+t[2]+", "
if(2>=o)return H.k(s,2)
p=p+s[2]+", "
if(2>=n)return H.k(r,2)
p=p+r[2]+", "
if(2>=m)return H.k(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.k(t,3)
l=l+t[3]+", "
if(3>=o)return H.k(s,3)
l=l+s[3]+", "
if(3>=n)return H.k(r,3)
l=l+r[3]+", "
if(3>=m)return H.k(q,3)
return p+(l+q[3]+"]")},
A:function(){return this.bZ("",3,0)},
p:function(a){return this.bZ(a,3,0)}}
V.a2.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.b2.prototype={
Y:function(a,b){return new V.b2(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b2))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.cE.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cE))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+", "+V.x(this.d,3,0)+"]"}}
V.cI.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cI))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+", "+V.x(this.d,3,0)+"]"}}
V.av.prototype={
ba:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.O()
t=this.b
if(typeof t!=="number")return t.O()
return Math.sqrt(u*u+t*t)},
J:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.ih
if(u==null){u=new V.av(0,0)
$.ih=u}return u}u=this.a
if(typeof u!=="number")return u.J()
t=this.b
if(typeof t!=="number")return t.J()
return new V.av(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=this.a
s=$.E()
s.toString
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.aP(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.aP(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.K.prototype={
ba:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bb:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b7:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
aG:function(a){return new V.K(-this.a,-this.b,-this.c)},
J:function(a,b){if(Math.abs(b-0)<$.E().a)return V.hm()
return new V.K(this.a/b,this.b/b,this.c/b)},
f3:function(){var u=$.E().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
U.ce.prototype={
gv:function(){var u=this.b
if(u==null){u=D.aD()
this.b=u}return u},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.p("          ")}}
U.bC.prototype={}
U.cJ.prototype={
gv:function(){var u=this.y
if(u==null){u=D.aD()
this.y=u}return u},
ae:function(a){var u=this.y
if(u!=null)u.T(a)},
scq:function(a){var u
a=V.hG(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.E().a)){this.a=a
u=new D.H("yaw",u,a,this,[P.r])
u.b=!0
this.ae(u)}},
sc9:function(a){var u
a=V.hG(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.E().a)){this.b=a
u=new D.H("pitch",u,a,this,[P.r])
u.b=!0
this.ae(u)}},
sce:function(a){var u
a=V.hG(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.E().a)){this.c=a
u=new D.H("roll",u,a,this,[P.r])
u.b=!0
this.ae(u)}},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
u=this.a
t=b.a
s=$.E().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"], ["+V.x(this.d,3,0)+", "+V.x(this.e,3,0)+", "+V.x(this.f,3,0)+"]"}}
M.ci.prototype={
a9:function(a){var u
H.j(a,"$iB")
u=this.x
if(u!=null)u.T(a)},
cY:function(){return this.a9(null)},
dw:function(a,b){var u,t,s,r,q,p,o,n
u=E.V
H.m(b,"$ip",[u],"$ap")
for(t=b.length,s=this.ga8(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.w)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.by()
n.sad(null)
n.saV(null)
n.c=null
n.d=0
o.z=n}H.f(s,r)
if(n.a==null)n.sad(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.dQ(a,b,this,[u])
u.b=!0
this.a9(u)},
dA:function(a,b){var u,t,s
u=E.V
H.m(b,"$ip",[u],"$ap")
for(t=b.gD(b),s=this.ga8();t.q();)t.gw().gv().I(0,s)
u=new D.dR(a,b,this,[u])
u.b=!0
this.a9(u)},
gv:function(){var u=this.x
if(u==null){u=D.aD()
this.x=u}return u},
ah:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.cc(this.c)
u=this.b
u.toString
t=a1.a
C.b.ey(t,36160,null)
C.b.bW(t,2884)
C.b.bW(t,2929)
C.b.eS(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.aP(s)
o=C.d.X(p*s)
p=q.b
if(typeof r!=="number")return H.aP(r)
n=C.d.X(p*r)
p=C.d.X(q.c*s)
a1.c=p
q=C.d.X(q.d*r)
a1.d=q
C.b.fI(t,o,n,p,q)
C.b.eE(t,u.c)
u=u.a
C.b.eD(t,u.a,u.b,u.c,u.d)
C.b.eC(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aI(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cb(i)
t=$.i1
if(t==null){t=$.i3
if(t==null){t=new V.b2(0,0,0)
$.i3=t}q=$.ij
if(q==null){q=new V.K(0,1,0)
$.ij=q}p=$.ii
if(p==null){p=new V.K(0,0,-1)
$.ii=p}h=p.J(0,Math.sqrt(p.M(p)))
q=q.b7(h)
g=q.J(0,Math.sqrt(q.M(q)))
f=h.b7(g)
e=new V.K(t.a,t.b,t.c)
d=g.aG(0).M(e)
c=f.aG(0).M(e)
b=h.aG(0).M(e)
t=V.aI(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.i1=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.O(0,a)}a1.db.cb(a)
for(u=this.d.a,u=new J.a5(u,u.length,0,[H.q(u,0)]);u.q();)u.d.co(a1)
for(u=this.d.a,u=new J.a5(u,u.length,0,[H.q(u,0)]);u.q();)u.d.ah(a1)
this.a.toString
a1.cy.bd()
a1.db.bd()
this.b.toString
a1.ca()},
scX:function(a,b){this.d=H.m(b,"$iaA",[E.V],"$aaA")},
$ikw:1}
A.c8.prototype={}
A.dk.prototype={
t:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
C.b.bX(r.a,r.c)}},
eT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
C.b.bV(r.a,r.c)}}}
A.dv.prototype={}
A.bG.prototype={
cT:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bF:function(a,b){var u,t,s
u=this.a
t=C.b.eM(u,b)
C.b.cJ(u,t,a)
C.b.eF(u,t)
if(!H.hx(C.b.cB(u,t,35713))){s=C.b.cA(u,t)
C.b.eP(u,t)
throw H.d(P.M("Error compiling shader '"+H.c(t)+"': "+H.c(s)))}return t},
ee:function(){var u,t,s,r,q,p
u=H.a([],[A.c8])
t=this.a
s=H.Q(C.b.aF(t,this.r,35721))
if(typeof s!=="number")return H.aP(s)
r=0
for(;r<s;++r){q=C.b.cs(t,this.r,r)
p=C.b.cu(t,this.r,q.name)
C.a.h(u,new A.c8(t,q.name,p))}this.x=new A.dk(u)},
eg:function(){var u,t,s,r,q,p
u=H.a([],[A.cS])
t=this.a
s=H.Q(C.b.aF(t,this.r,35718))
if(typeof s!=="number")return H.aP(s)
r=0
for(;r<s;++r){q=C.b.ct(t,this.r,r)
p=C.b.cC(t,this.r,q.name)
C.a.h(u,this.eN(q.type,q.size,q.name,p))}this.y=new A.eW(u)},
ac:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.eP(u,t,b,c)
else return A.hl(u,t,b,a,c)},
d8:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.eZ(u,t,b,c)
else return A.hl(u,t,b,a,c)},
d9:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.f_(u,t,b,c)
else return A.hl(u,t,b,a,c)},
ay:function(a,b){return new P.d1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.c(b)+"."))},
eN:function(a,b,c,d){switch(a){case 5120:return this.ac(b,c,d)
case 5121:return this.ac(b,c,d)
case 5122:return this.ac(b,c,d)
case 5123:return this.ac(b,c,d)
case 5124:return this.ac(b,c,d)
case 5125:return this.ac(b,c,d)
case 5126:return new A.bN(this.a,this.r,c,d)
case 35664:return new A.eR(this.a,this.r,c,d)
case 35665:return new A.bO(this.a,this.r,c,d)
case 35666:return new A.eU(this.a,this.r,c,d)
case 35667:return new A.eS(this.a,this.r,c,d)
case 35668:return new A.eT(this.a,this.r,c,d)
case 35669:return new A.eV(this.a,this.r,c,d)
case 35674:return new A.eX(this.a,this.r,c,d)
case 35675:return new A.eY(this.a,this.r,c,d)
case 35676:return new A.bP(this.a,this.r,c,d)
case 35678:return this.d8(b,c,d)
case 35680:return this.d9(b,c,d)
case 35670:throw H.d(this.ay("BOOL",c))
case 35671:throw H.d(this.ay("BOOL_VEC2",c))
case 35672:throw H.d(this.ay("BOOL_VEC3",c))
case 35673:throw H.d(this.ay("BOOL_VEC4",c))
default:throw H.d(P.M("Unknown uniform variable type "+H.c(a)+" for "+H.c(c)+"."))}}}
A.cS.prototype={}
A.eW.prototype={
t:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.A()},
f_:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+a
return s},
A:function(){return this.f_("\n")}}
A.eP.prototype={
i:function(a){return"Uniform1i: "+H.c(this.c)}}
A.eS.prototype={
i:function(a){return"Uniform2i: "+H.c(this.c)}}
A.eT.prototype={
i:function(a){return"Uniform3i: "+H.c(this.c)}}
A.eV.prototype={
i:function(a){return"Uniform4i: "+H.c(this.c)}}
A.eQ.prototype={
i:function(a){return"Uniform1iv: "+H.c(this.c)},
seo:function(a){this.e=H.m(a,"$ib",[P.u],"$ab")}}
A.bN.prototype={
i:function(a){return"Uniform1f: "+H.c(this.c)}}
A.eR.prototype={
i:function(a){return"Uniform2f: "+H.c(this.c)}}
A.bO.prototype={
i:function(a){return"Uniform3f: "+H.c(this.c)}}
A.eU.prototype={
i:function(a){return"Uniform4f: "+H.c(this.c)}}
A.eX.prototype={
i:function(a){return"Uniform1Mat2 "+H.c(this.c)}}
A.eY.prototype={
i:function(a){return"UniformMat3: "+H.c(this.c)}}
A.bP.prototype={
bk:function(a){var u=new Float32Array(H.hs(H.m(a,"$ib",[P.r],"$ab")))
C.b.fG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.c(this.c)}}
A.eZ.prototype={
i:function(a){return"UniformSampler2D: "+H.c(this.c)}}
A.f_.prototype={
i:function(a){return"UniformSamplerCube: "+H.c(this.c)}}
F.fQ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.bb(u.b,b).bb(u.d.bb(u.c,b),c)
u=new V.b2(t.a,t.b,t.c)
if(!J.S(a.f,u)){a.f=u
u=a.a
if(u!=null)u.V()}u=t.J(0,Math.sqrt(t.M(t)))
if(!J.S(a.z,u)){a.z=u
u=a.a
if(u!=null)u.V()}u=1-b
s=1-c
s=new V.cE(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.S(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.V()}},
$S:29}
F.N.prototype={
d3:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.hm()
if(t!=null)q=q.E(0,t)
if(s!=null)q=q.E(0,s)
if(r!=null)q=q.E(0,r)
if(q.f3())return
return q.J(0,Math.sqrt(q.M(q)))},
d4:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.Y(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.J(0,Math.sqrt(u.M(u)))
u=r.Y(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.b7(u.J(0,Math.sqrt(u.M(u))))
return u.J(0,Math.sqrt(u.M(u)))},
b2:function(){if(this.d!=null)return!0
var u=this.d3()
if(u==null){u=this.d4()
if(u==null)return!1}this.d=u
this.a.a.V()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
p:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.W(J.Z(u.e),0)+", "+C.c.W(J.Z(this.b.e),0)+", "+C.c.W(J.Z(this.c.e),0)+" {"
u=this.d
t=(u!=null?t+(u.i(0)+", "):t+"-, ")+"-}"
return t},
A:function(){return this.p("")}}
F.at.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
p:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.W(J.Z(u.e),0)+", "+C.c.W(J.Z(this.b.e),0)},
A:function(){return this.p("")}}
F.aJ.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
p:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.W(J.Z(u.e),0)},
A:function(){return this.p("")}}
F.cL.prototype={
gv:function(){var u=this.e
if(u==null){u=D.aD()
this.e=u}return u},
f8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.G()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){q=u[r]
this.a.h(0,q.eI())}this.a.G()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.G()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.aJ()
if(m.a==null)H.R(P.M("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.T(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.G()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.G()
o=o.e
if(typeof o!=="number")return o.E()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.at()
n=k.a
if(n==null)H.R(P.M("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.R(P.M("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.T(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.G()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.G()
o=o.e
if(typeof o!=="number")return o.E()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.G()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cj(k,j,h)}u=this.e
if(u!=null)u.aD()},
eA:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aw()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bk().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.c3().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.bi().a)!==0)++r
q=a1.gbm(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.a(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.a(t,[Z.ca])
for(m=0,l=0;l<r;++l){k=a1.ev(l)
j=k.gbm(k)
C.a.F(n,l,new Z.ca(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].f6(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.F(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a0(t,34962,e)
C.b.bS(t,34962,new Float32Array(H.hs(o)),35044)
C.b.a0(t,34962,null)
d=new Z.cb(new Z.cY(34962,e),n,a1)
d.sdk(H.a([],[Z.aF]))
if(this.b.b.length!==0){s=P.u
c=H.a([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.G()
C.a.h(c,b.e)}a=Z.ho(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.aF(0,c.length,a))}if(this.c.b.length!==0){s=P.u
c=H.a([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.G()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.G()
C.a.h(c,b.e)}a=Z.ho(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.aF(1,c.length,a))}if(this.d.b.length!==0){s=P.u
c=H.a([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.G()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.G()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.G()
C.a.h(c,b.e)}a=Z.ho(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.aF(4,c.length,a))}return d},
i:function(a){var u=H.a([],[P.i])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.p("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.p("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.p("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.p("   "))}return C.a.k(u,"\n")},
R:function(a){var u=this.e
if(u!=null)u.T(a)},
V:function(){return this.R(null)},
$ikx:1}
F.es.prototype={
eq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.af],"$ab")
u=H.a([],[F.N])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.k(c,r)
l=c[r];++r
if(r>=m)return H.k(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.k(c,j)
i=c[j]
if(s<0||s>=m)return H.k(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cj(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cj(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cj(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cj(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
b3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].b2())s=!1
return s},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
u=H.a([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
A:function(){return this.p("")},
sde:function(a){this.b=H.m(a,"$ib",[F.N],"$ab")}}
F.et.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
u=H.a([],[P.i])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].p(a+(""+s+". ")))}return C.a.k(u,"\n")},
A:function(){return this.p("")},
sdl:function(a){this.b=H.m(a,"$ib",[F.at],"$ab")}}
F.eu.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
u=H.a([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
A:function(){return this.p("")},
saW:function(a){this.b=H.m(a,"$ib",[F.aJ],"$ab")}}
F.af.prototype={
b6:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hn(this.cx,s,p,u,t,r,q,a,o)},
eI:function(){return this.b6(null)},
f6:function(a){var u,t
if(a.m(0,$.aw())){u=this.f
t=[P.r]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.bk())){u=this.r
t=[P.r]
if(u==null)return H.a([0,1,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.bj())){u=H.a([0,0,1],[P.r])
return u}else if(a.m(0,$.bl())){u=this.y
t=[P.r]
if(u==null)return H.a([0,0],t)
else return H.a([u.a,u.b],t)}else if(a.m(0,$.bm())){u=this.z
t=[P.r]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.c3())){u=this.Q
t=[P.r]
if(u==null)return H.a([1,1,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.c4())){u=this.Q
t=[P.r]
if(u==null)return H.a([1,1,1,1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.bn()))return H.a([this.ch],[P.r])
else if(a.m(0,$.bi())){u=this.cx
t=[P.r]
if(u==null)return H.a([-1,-1,-1,-1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else return H.a([],[P.r])},
b2:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.hm()
this.d.P(0,new F.fb(u))
u=u.a
this.r=u.J(0,Math.sqrt(u.M(u)))
u=this.a
if(u!=null){u.V()
u=this.a.e
if(u!=null)u.aD()}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
p:function(a){var u,t,s
u=H.a([],[P.i])
C.a.h(u,C.c.W(J.Z(this.e),0))
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
C.a.h(u,V.x(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
A:function(){return this.p("")}}
F.fb.prototype={
$1:function(a){var u,t
H.j(a,"$iN")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:9}
F.f5.prototype={
G:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.M("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.V()
return!0},
gl:function(a){return this.c.length},
b3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].b2()
return!0},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
this.G()
u=H.a([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
A:function(){return this.p("")},
sep:function(a){this.c=H.m(a,"$ib",[F.af],"$ab")}}
F.f6.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){H.f(b,{func:1,ret:-1,args:[F.N]})
C.a.P(this.b,b)
C.a.P(this.c,new F.f7(this,b))
C.a.P(this.d,new F.f8(this,b))},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
u=H.a([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
A:function(){return this.p("")},
sdf:function(a){this.b=H.m(a,"$ib",[F.N],"$ab")},
sdg:function(a){this.c=H.m(a,"$ib",[F.N],"$ab")},
sdh:function(a){this.d=H.m(a,"$ib",[F.N],"$ab")}}
F.f7.prototype={
$1:function(a){H.j(a,"$iN")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:9}
F.f8.prototype={
$1:function(a){var u
H.j(a,"$iN")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:9}
F.f9.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
u=H.a([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
A:function(){return this.p("")},
sdm:function(a){this.b=H.m(a,"$ib",[F.at],"$ab")},
sdn:function(a){this.c=H.m(a,"$ib",[F.at],"$ab")}}
F.fa.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
p:function(a){var u,t,s,r
u=H.a([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
A:function(){return this.p("")},
saW:function(a){this.b=H.m(a,"$ib",[F.aJ],"$ab")}}
O.du.prototype={
gv:function(){var u=this.f
if(u==null){u=D.aD()
this.f=u}return u},
at:function(a){var u=this.f
if(u!=null)u.T(a)}}
O.b9.prototype={}
T.eG.prototype={}
V.ar.prototype={
a4:function(a){return!0},
i:function(a){return"all"},
$ia0:1}
V.a0.prototype={}
V.cv.prototype={
a4:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].a4(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sK:function(a){this.a=H.m(a,"$ib",[V.a0],"$ab")},
$ia0:1}
V.W.prototype={
a4:function(a){return!this.cP(a)},
i:function(a){return"!["+this.bn(0)+"]"}}
V.ej.prototype={
a4:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.hi(this.a)
t=H.hi(this.b)
return u+".."+t},
$ia0:1}
V.er.prototype={
cS:function(a){var u,t
if(a.a.length<=0)throw H.d(P.M("May not create a SetMatcher with zero characters."))
u=new H.ak([P.u,P.D])
for(t=new H.bA(a,a.gl(a),0,[H.aN(a,"G",0)]);t.q();)u.F(0,t.d,!0)
this.sed(u)},
a4:function(a){return this.a.bU(a)},
i:function(a){var u=this.a
return P.hj(new H.cs(u,[H.q(u,0)]),0,null)},
sed:function(a){this.a=H.m(a,"$ia7",[P.u,P.D],"$aa7")},
$ia0:1}
V.bH.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.bM(this.a.j(0,b))
r.sK(H.a([],[V.a0]))
r.c=!1
C.a.h(this.c,r)
return r},
eX:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.a4(a))return r}return},
i:function(a){return this.b},
sen:function(a){this.c=H.m(a,"$ib",[V.bM],"$ab")}}
V.cR.prototype={
i:function(a){var u,t
u=H.hF(this.b,"\n","\\n")
t=H.hF(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.bL.prototype={
a5:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.i],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.w)(c),++t){s=c[t]
this.c.F(0,s,b)}},
i:function(a){return this.b},
se9:function(a){var u=P.i
this.c=H.m(a,"$ia7",[u,u],"$aa7")}}
V.eI.prototype={
j:function(a,b){var u=this.a.t(0,b)
if(u==null){u=new V.bH(this,b)
u.sen(H.a([],[V.bM]))
u.d=null
this.a.F(0,b,u)}return u},
B:function(a){var u,t
u=this.b.t(0,a)
if(u==null){u=new V.bL(this,a)
t=P.i
u.se9(new H.ak([t,t]))
this.b.F(0,a,u)}return u},
ck:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.a([],[V.cR])
t=this.c
s=[P.u]
r=H.a([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.ab(a,o)
m=t.eX(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hj(r,0,null)
throw H.d(P.M("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.a([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hj(r,0,null)
k=t.d
j=k.c.t(0,l)
p=new V.cR(j==null?k.b:j,l,o)}++o}}},
sej:function(a){this.a=H.m(a,"$ia7",[P.i,V.bH],"$aa7")},
sem:function(a){this.b=H.m(a,"$ia7",[P.i,V.bL],"$aa7")}}
V.bM.prototype={
i:function(a){return this.b.b+": "+this.bn(0)}}
X.cd.prototype={$ihZ:1}
X.dK.prototype={
gv:function(){var u=this.x
if(u==null){u=D.aD()
this.x=u}return u}}
X.cC.prototype={
gv:function(){var u=this.f
if(u==null){u=D.aD()
this.f=u}return u},
aa:function(a){var u
H.j(a,"$iB")
u=this.f
if(u!=null)u.T(a)},
d0:function(){return this.aa(null)},
sao:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gv().I(0,this.gbr())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gbr())
u=new D.H("mover",t,this.b,this,[U.bC])
u.b=!0
this.aa(u)}},
$ihZ:1,
$icd:1}
X.cP.prototype={}
V.az.prototype={
as:function(a){this.b=new P.dN(C.F)
this.c=null
this.saQ(H.a([],[[P.b,W.a6]]))},
u:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.a([],[W.a6]))
t=a.split("\n")
for(u=t.length,s=[W.a6],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.a([],s))
o=document.createElement("div")
o.className="codePart"
H.z(p)
n=this.b.d7(p,0,p.length)
m=n==null?p:n
C.e.cH(o,H.hF(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaB(this.d),o)}},
c8:function(a){var u,t,s,r
H.m(a,"$ib",[P.i],"$ab")
this.saQ(H.a([],[[P.b,W.a6]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.az()
this.c=t}for(t=t.ck(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)this.aC(t[r])},
saQ:function(a){this.d=H.m(a,"$ib",[[P.b,W.a6]],"$ab")}}
V.dt.prototype={
aC:function(a){switch(a.a){case"Class":this.u(a.b,"#551")
break
case"Comment":this.u(a.b,"#777")
break
case"Id":this.u(a.b,"#111")
break
case"Num":this.u(a.b,"#191")
break
case"Reserved":this.u(a.b,"#119")
break
case"String":this.u(a.b,"#171")
break
case"Symbol":this.u(a.b,"#616")
break
case"Type":this.u(a.b,"#B11")
break
case"Whitespace":this.u(a.b,"#111")
break}},
az:function(){var u,t,s,r
u=V.eJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.o(new H.l("_"))
C.a.h(t.a,s)
s=V.F("a","z")
C.a.h(t.a,s)
s=V.F("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.o(new H.l("_"))
C.a.h(s.a,t)
t=V.F("0","9")
C.a.h(s.a,t)
t=V.F("a","z")
C.a.h(s.a,t)
t=V.F("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.F("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.F("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.o(new H.l("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.F("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.F("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.o(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.o(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.o(new H.l('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.o(new H.l('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.o(new H.l("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.o(new H.l('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.ar())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.o(new H.l("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.o(new H.l("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.o(new H.l("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.o(new H.l("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.ar())
s=u.j(0,"Start").k(0,"Slash")
t=V.o(new H.l("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.o(new H.l("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.o(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.W()
r=[V.a0]
s.sK(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.o(new H.l("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.o(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.W()
s.sK(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.o(new H.l("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.o(new H.l(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.o(new H.l(" \n\t"))
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
s=[P.i]
t.a5(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.a5(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.a5(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.dL.prototype={
aC:function(a){switch(a.a){case"Builtin":this.u(a.b,"#411")
break
case"Comment":this.u(a.b,"#777")
break
case"Id":this.u(a.b,"#111")
break
case"Num":this.u(a.b,"#191")
break
case"Preprocess":this.u(a.b,"#737")
break
case"Reserved":this.u(a.b,"#119")
break
case"Symbol":this.u(a.b,"#611")
break
case"Type":this.u(a.b,"#171")
break
case"Whitespace":this.u(a.b,"#111")
break}},
az:function(){var u,t,s,r
u=V.eJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.o(new H.l("_"))
C.a.h(t.a,s)
s=V.F("a","z")
C.a.h(t.a,s)
s=V.F("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.o(new H.l("_"))
C.a.h(s.a,t)
t=V.F("0","9")
C.a.h(s.a,t)
t=V.F("a","z")
C.a.h(s.a,t)
t=V.F("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.F("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.F("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.o(new H.l("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.F("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.F("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.o(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.o(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.o(new H.l("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.o(new H.l("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.ar())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.o(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.W()
r=[V.a0]
s.sK(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.o(new H.l("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.W()
t.sK(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.l("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.o(new H.l("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.o(new H.l(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.o(new H.l(" \n\t"))
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
t=[P.i]
s.a5(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.a5(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.a5(0,"Builtin",H.a(["gl_FragColor","gl_Position"],t))
return u}}
V.dM.prototype={
aC:function(a){switch(a.a){case"Attr":this.u(a.b,"#911")
this.u("=","#111")
break
case"Id":this.u(a.b,"#111")
break
case"Other":this.u(a.b,"#111")
break
case"Reserved":this.u(a.b,"#119")
break
case"String":this.u(a.b,"#171")
break
case"Symbol":this.u(a.b,"#616")
break}},
az:function(){var u,t,s
u=V.eJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.o(new H.l("_"))
C.a.h(t.a,s)
s=V.F("a","z")
C.a.h(t.a,s)
s=V.F("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.o(new H.l("_"))
C.a.h(s.a,t)
t=V.F("0","9")
C.a.h(s.a,t)
t=V.F("a","z")
C.a.h(s.a,t)
t=V.F("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.o(new H.l("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.o(new H.l("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.o(new H.l("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.o(new H.l('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.o(new H.l('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.o(new H.l("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.o(new H.l('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.ar())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.ar())
t=u.j(0,"Other").k(0,"Other")
s=new V.W()
s.sK(H.a([],[V.a0]))
C.a.h(t.a,s)
t=V.o(new H.l('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.F("a","z")
C.a.h(s.a,t)
t=V.F("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.B("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.B("String")
t=u.j(0,"Id")
s=t.a.B("Id")
t.d=s
s.a5(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
s=u.j(0,"Attr")
s.d=s.a.B("Attr")
s=u.j(0,"Other")
s.d=s.a.B("Other")
return u}}
V.eh.prototype={
c8:function(a){H.m(a,"$ib",[P.i],"$ab")
this.saQ(H.a([],[[P.b,W.a6]]))
this.u(C.a.k(a,"\n"),"#111")},
aC:function(a){},
az:function(){return}}
V.ev.prototype={
cU:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).n(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.n(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.n(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.n(q,p)}o=u.createElement("div")
this.a=o
C.e.n(q,o)
this.b=null
o=W.e
W.P(u,"scroll",H.f(new V.ex(s),{func:1,ret:-1,args:[o]}),!1,o)},
er:function(a,b,c){var u,t,s,r
a=H.Q(C.h.eB(a,0,4))
if(c.length===0)c=P.hr(C.n,b,C.l,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.h9(null)
r.href="#"+c
r.textContent=b
C.e.n(u,r)
C.e.n(this.a,u)},
am:function(a,b){return this.er(a,b,"")},
L:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.i],"$ab")
this.ef()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ck(C.a.f4(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.n(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.n(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.n(t,o)
break
case"Link":n=p.b
if(H.km(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
C.e.n(t,l)}else{k=P.hr(C.n,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.n(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.n(t,o)
break}}C.e.n(this.a,t)},
cv:function(a){var u,t,s,r
u=new V.dt("dart")
u.as("dart")
t=new V.dL("glsl")
t.as("glsl")
s=new V.dM("html")
s.as("html")
r=C.a.eY(H.a([u,t,s],[V.az]),new V.ey(a))
if(r!=null)return r
u=new V.eh("plain")
u.as("plain")
return u},
bP:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.i],"$ab")
u=H.a([],[P.u])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(C.c.aH(r,"+")){C.a.F(a7,s,C.c.aI(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aH(r,"-")){C.a.F(a7,s,C.c.aI(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cv(a5)
q.c8(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.n(o,n)
C.e.n(this.a,o)
m=P.hr(C.n,a4,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.h9(null)
i.href="#"+m
i.textContent=a4
C.e.n(j,i)
C.q.n(k,j)
C.i.n(l,k)
C.k.n(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.k(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.w)(r),++a0)C.q.n(a,r[a0])
C.i.n(e,d)
C.i.n(e,c)
C.i.n(e,a)
C.k.n(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.w)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gD(r);a3.q();)C.q.n(c,a3.gw())
C.i.n(e,d)
C.i.n(e,c)
C.k.n(n,e)}},
ef:function(){var u,t,s,r
if(this.b!=null)return
u=V.eJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.o(new H.l("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.W()
r=[V.a0]
s.sK(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.l("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.o(new H.l("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.o(new H.l("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.W()
s.sK(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.l("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.o(new H.l("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.o(new H.l("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.W()
s.sK(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.l("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.o(new H.l("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.o(new H.l("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.o(new H.l("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.o(new H.l("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.W()
t.sK(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.l("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.o(new H.l("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.W()
t.sK(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.l("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.ar())
s=u.j(0,"Other").k(0,"Other")
t=new V.W()
t.sK(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.l("*_`["))
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
V.ex.prototype={
$1:function(a){P.id(C.m,new V.ew(this.a))},
$S:31}
V.ew.prototype={
$0:function(){var u,t,s
u=C.d.X(document.documentElement.scrollTop)
t=this.a.style
s=H.c(-0.01*u)+"px"
t.top=s},
$S:0}
V.ey.prototype={
$1:function(a){return H.j(a,"$iaz").a===this.a},
$S:32};(function aliases(){var u=J.L.prototype
u.cM=u.i
u=J.cq.prototype
u.cO=u.i
u=P.p.prototype
u.cN=u.aE
u=W.C.prototype
u.aJ=u.S
u=W.d8.prototype
u.cQ=u.a_
u=V.cv.prototype
u.cP=u.a4
u.bn=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"k_","jL",5)
u(P,"k0","jM",5)
u(P,"k1","jN",5)
t(P,"iz","jZ",1)
s(W,"k7",4,null,["$4"],["jP"],17,0)
s(W,"k8",4,null,["$4"],["jQ"],17,0)
var m
r(m=E.V.prototype,"gc4",0,0,null,["$1","$0"],["c5","ff"],2,0)
r(m,"gc6",0,0,null,["$1","$0"],["c7","fg"],2,0)
r(m,"gc2",0,0,null,["$1","$0"],["c3","fe"],2,0)
r(m,"gc0",0,0,null,["$1","$0"],["c1","fb"],2,0)
q(m,"gf9","fa",4)
q(m,"gfc","fd",4)
r(m=E.cQ.prototype,"gbo",0,0,null,["$1","$0"],["bq","bp"],2,0)
p(m,"gfs","cd",1)
o(m=X.cW.prototype,"gdH","dI",7)
o(m,"gdt","du",7)
o(m,"gdB","dC",3)
o(m,"gdL","dM",18)
o(m,"gdJ","dK",18)
o(m,"gdO","dP",3)
o(m,"gdS","dT",3)
o(m,"gdF","dG",3)
o(m,"gdQ","dR",3)
o(m,"gdD","dE",3)
o(m,"gdU","dV",26)
o(m,"gdW","dX",7)
o(m,"ge2","e3",8)
o(m,"gdZ","e_",8)
o(m,"ge0","e1",8)
n(V.av.prototype,"gl","ba",19)
n(V.K.prototype,"gl","ba",19)
r(m=M.ci.prototype,"ga8",0,0,null,["$1","$0"],["a9","cY"],2,0)
q(m,"gdv","dw",4)
q(m,"gdz","dA",4)
r(X.cC.prototype,"gbr",0,0,null,["$1","$0"],["aa","d0"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.A,null)
s(P.A,[H.hg,J.L,J.a5,P.d4,P.p,H.bA,P.ai,H.aX,H.cV,H.ek,H.eM,P.aC,H.bs,H.d9,P.b1,H.dZ,H.e_,H.dW,P.fL,P.aq,P.aa,P.cZ,P.eA,P.bJ,P.eB,P.T,P.fP,P.fF,P.ba,P.fz,P.G,P.bt,P.dO,P.fN,P.D,P.aU,P.Y,P.aV,P.ef,P.cM,P.d1,P.dJ,P.aE,P.b,P.y,P.X,P.i,P.b7,W.dr,W.aL,W.a_,W.cA,W.d8,W.fI,W.ck,W.a1,W.fE,W.dc,O.aA,O.bB,E.dl,E.V,E.el,E.cQ,Z.cY,Z.fc,Z.cb,Z.aF,Z.cX,D.dp,D.by,D.B,X.cc,X.cr,X.dY,X.e1,X.au,X.e7,X.eK,X.cW,V.aS,V.aT,V.dC,V.aH,V.a2,V.b2,V.cE,V.cI,V.av,V.K,M.ci,A.c8,A.dk,A.cS,A.eW,F.N,F.at,F.aJ,F.cL,F.es,F.et,F.eu,F.af,F.f5,F.f6,F.f9,F.fa,O.b9,T.eG,V.ar,V.a0,V.cv,V.ej,V.er,V.bH,V.cR,V.bL,V.eI,X.cd,X.cP,X.cC,V.az,V.ev])
s(J.L,[J.dT,J.dV,J.cq,J.aj,J.cp,J.b_,H.cz,W.aW,W.d_,W.dw,W.cg,W.ch,W.e,W.d2,W.cu,W.d6,W.cG,W.am,W.da,W.dd,P.c9,P.cl,P.cF,P.b6,P.cK,P.cT])
s(J.cq,[J.eg,J.bQ,J.aG])
t(J.hf,J.aj)
s(J.cp,[J.co,J.dU])
t(P.e0,P.d4)
s(P.e0,[H.cU,W.fj,W.U,P.dF])
t(H.l,H.cU)
s(P.p,[H.dz,H.e4,H.bR])
s(H.dz,[H.b0,H.cs])
s(P.ai,[H.e5,H.fd])
t(H.e6,H.b0)
s(P.aC,[H.ee,H.dX,H.f1,H.eO,H.dn,H.ep,P.cB,P.ag,P.f2,P.f0,P.bI,P.dq,P.ds])
s(H.bs,[H.h6,H.eF,H.h_,H.h0,H.h1,P.ff,P.fe,P.fg,P.fh,P.fM,P.fo,P.fs,P.fp,P.fq,P.fr,P.fv,P.fw,P.fu,P.ft,P.eC,P.eD,P.fT,P.fC,P.fB,P.fD,P.e3,P.dx,P.dy,W.dA,W.fn,W.ed,W.ec,W.fG,W.fH,W.fK,W.fO,P.fV,P.dG,P.dH,E.em,E.en,E.eo,E.eH,D.dE,F.fQ,F.fb,F.f7,F.f8,V.ex,V.ew,V.ey])
s(H.eF,[H.ez,H.bq])
t(P.e2,P.b1)
s(P.e2,[H.ak,W.fi])
t(H.cw,H.cz)
s(H.cw,[H.bV,H.bX])
t(H.bW,H.bV)
t(H.cx,H.bW)
t(H.bY,H.bX)
t(H.cy,H.bY)
s(H.cy,[H.e8,H.e9,H.ea,H.eb])
t(P.fA,P.fP)
t(P.fy,P.fF)
t(P.bu,P.eB)
t(P.dB,P.bt)
s(P.bu,[P.dN,P.f4])
t(P.f3,P.dB)
s(P.Y,[P.r,P.u])
s(P.ag,[P.b5,P.dP])
s(W.aW,[W.t,W.bS])
s(W.t,[W.C,W.ay,W.bw,W.bT])
s(W.C,[W.n,P.h])
s(W.n,[W.c7,W.dj,W.bp,W.ax,W.aR,W.a6,W.dI,W.cm,W.eq,W.b8,W.cN,W.cO,W.eE,W.bK])
t(W.bv,W.d_)
t(W.d3,W.d2)
t(W.aY,W.d3)
t(W.cn,W.bw)
t(W.aK,W.e)
s(W.aK,[W.al,W.O,W.ad])
t(W.d7,W.d6)
t(W.bD,W.d7)
t(W.db,W.da)
t(W.eL,W.db)
t(W.ap,W.O)
t(W.d0,W.ch)
t(W.de,W.dd)
t(W.d5,W.de)
t(W.fk,W.fi)
t(W.fl,P.eA)
t(W.hp,W.fl)
t(W.fm,P.bJ)
t(W.fJ,W.d8)
t(P.bF,P.h)
s(E.dl,[Z.ca,A.bG])
s(D.B,[D.dQ,D.dR,D.H])
t(U.bC,D.dp)
s(U.bC,[U.ce,U.cJ])
t(A.dv,A.bG)
s(A.cS,[A.eP,A.eS,A.eT,A.eV,A.eQ,A.bN,A.eR,A.bO,A.eU,A.eX,A.eY,A.bP,A.eZ,A.f_])
t(O.du,O.b9)
s(V.cv,[V.W,V.bM])
t(X.dK,X.cP)
s(V.az,[V.dt,V.dL,V.dM,V.eh])
u(H.cU,H.cV)
u(H.bV,P.G)
u(H.bW,H.aX)
u(H.bX,P.G)
u(H.bY,H.aX)
u(P.d4,P.G)
u(W.d_,W.dr)
u(W.d2,P.G)
u(W.d3,W.a_)
u(W.d6,P.G)
u(W.d7,W.a_)
u(W.da,P.G)
u(W.db,W.a_)
u(W.dd,P.G)
u(W.de,W.a_)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.ax.prototype
C.t=W.aR.prototype
C.e=W.a6.prototype
C.D=W.cg.prototype
C.E=W.cm.prototype
C.u=W.cn.prototype
C.G=J.L.prototype
C.a=J.aj.prototype
C.h=J.co.prototype
C.d=J.cp.prototype
C.c=J.b_.prototype
C.N=J.aG.prototype
C.R=W.bD.prototype
C.x=J.eg.prototype
C.y=W.cG.prototype
C.b=P.b6.prototype
C.q=W.b8.prototype
C.k=W.cN.prototype
C.i=W.cO.prototype
C.r=J.bQ.prototype
C.z=W.ap.prototype
C.A=W.bS.prototype
C.B=new P.ef()
C.C=new P.f4()
C.f=new P.fA()
C.m=new P.aV(0)
C.F=new P.dO("element",!0,!1,!1,!1)
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
C.v=function(hooks) { return hooks; }

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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=H.a(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.P=H.a(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.Q=H.a(u([]),[P.i])
C.n=H.a(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.o=H.a(u(["bind","if","ref","repeat","syntax"]),[P.i])
C.p=H.a(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.l=new P.f3(!1)})();(function staticFields(){$.ah=0
$.br=null
$.hM=null
$.ht=!1
$.iD=null
$.ix=null
$.iJ=null
$.fW=null
$.h2=null
$.hD=null
$.bb=null
$.c_=null
$.c0=null
$.hu=!1
$.I=C.f
$.as=null
$.hc=null
$.hS=null
$.hR=null
$.hX=null
$.i2=null
$.i3=null
$.i7=null
$.ih=null
$.ik=null
$.ij=null
$.ii=null
$.jf="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.je="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.i1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kt","iM",function(){return H.iC("_$dart_dartClosure")})
u($,"ku","hH",function(){return H.iC("_$dart_js")})
u($,"kz","iN",function(){return H.an(H.eN({
toString:function(){return"$receiver$"}}))})
u($,"kA","iO",function(){return H.an(H.eN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kB","iP",function(){return H.an(H.eN(null))})
u($,"kC","iQ",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kF","iT",function(){return H.an(H.eN(void 0))})
u($,"kG","iU",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kE","iS",function(){return H.an(H.ie(null))})
u($,"kD","iR",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"kI","iW",function(){return H.an(H.ie(void 0))})
u($,"kH","iV",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"kX","hI",function(){return P.jK()})
u($,"l0","c5",function(){return[]})
u($,"l_","j0",function(){return P.jD("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"kY","j_",function(){return P.hV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)})
u($,"kZ","hJ",function(){return P.jp(P.i,P.aE)})
u($,"kQ","iZ",function(){return Z.a9(0)})
u($,"kK","iX",function(){return Z.a9(511)})
u($,"kS","aw",function(){return Z.a9(1)})
u($,"kR","bk",function(){return Z.a9(2)})
u($,"kM","bj",function(){return Z.a9(4)})
u($,"kT","bl",function(){return Z.a9(8)})
u($,"kU","bm",function(){return Z.a9(16)})
u($,"kN","c3",function(){return Z.a9(32)})
u($,"kO","c4",function(){return Z.a9(64)})
u($,"kP","iY",function(){return Z.a9(96)})
u($,"kV","bn",function(){return Z.a9(128)})
u($,"kL","bi",function(){return Z.a9(256)})
u($,"ks","iL",function(){return new V.dC(1e-9)})
u($,"kr","E",function(){return $.iL()})})()
var v={mangledGlobalNames:{u:"int",r:"double",Y:"num",i:"String",D:"bool",y:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.y},{func:1,ret:-1},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[W.O]},{func:1,ret:-1,args:[P.u,[P.p,E.V]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[D.B]},{func:1,ret:-1,args:[W.e]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.y,args:[F.N]},{func:1,ret:P.y,args:[,]},{func:1,ret:P.y,args:[,,]},{func:1,ret:P.i,args:[P.u]},{func:1,ret:P.D,args:[W.t]},{func:1,args:[,]},{func:1,ret:P.D,args:[W.a1]},{func:1,ret:P.D,args:[P.i]},{func:1,ret:P.D,args:[W.C,P.i,P.i,W.aL]},{func:1,ret:-1,args:[W.al]},{func:1,ret:P.r},{func:1,args:[W.e]},{func:1,ret:P.y,args:[P.Y]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:W.C,args:[W.t]},{func:1,args:[P.i]},{func:1,ret:P.y,args:[F.af,P.r,P.r]},{func:1,args:[,P.i]},{func:1,ret:P.y,args:[W.e]},{func:1,ret:P.D,args:[V.az]},{func:1,ret:P.y,args:[,],opt:[P.X]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.B]}]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.L,DOMError:J.L,MediaError:J.L,Navigator:J.L,NavigatorConcurrentHardware:J.L,NavigatorUserMediaError:J.L,OverconstrainedError:J.L,PositionError:J.L,WebGLActiveInfo:J.L,WebGLRenderbuffer:J.L,WebGL2RenderingContext:J.L,WebGLTexture:J.L,SQLError:J.L,ArrayBufferView:H.cz,Float32Array:H.cx,Int16Array:H.e8,Int32Array:H.e9,Uint32Array:H.ea,Uint8Array:H.eb,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.c7,HTMLAreaElement:W.dj,HTMLBaseElement:W.bp,HTMLBodyElement:W.ax,HTMLCanvasElement:W.aR,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSStyleDeclaration:W.bv,MSStyleCSSProperties:W.bv,CSS2Properties:W.bv,HTMLDivElement:W.a6,XMLDocument:W.bw,Document:W.bw,DOMException:W.dw,DOMImplementation:W.cg,DOMRectReadOnly:W.ch,Element:W.C,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,EventTarget:W.aW,HTMLFormElement:W.dI,HTMLHeadElement:W.cm,HTMLCollection:W.aY,HTMLFormControlsCollection:W.aY,HTMLOptionsCollection:W.aY,HTMLDocument:W.cn,KeyboardEvent:W.al,Location:W.cu,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,DocumentFragment:W.t,ShadowRoot:W.t,DocumentType:W.t,Node:W.t,NodeList:W.bD,RadioNodeList:W.bD,Range:W.cG,HTMLSelectElement:W.eq,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.cN,HTMLTableRowElement:W.cO,HTMLTableSectionElement:W.eE,HTMLTemplateElement:W.bK,Touch:W.am,TouchEvent:W.ad,TouchList:W.eL,CompositionEvent:W.aK,FocusEvent:W.aK,TextEvent:W.aK,UIEvent:W.aK,WheelEvent:W.ap,Window:W.bS,DOMWindow:W.bS,Attr:W.bT,ClientRect:W.d0,DOMRect:W.d0,NamedNodeMap:W.d5,MozNamedAttrMap:W.d5,SVGScriptElement:P.bF,SVGAElement:P.h,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGCircleElement:P.h,SVGClipPathElement:P.h,SVGDefsElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGEllipseElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGForeignObjectElement:P.h,SVGGElement:P.h,SVGGeometryElement:P.h,SVGGraphicsElement:P.h,SVGImageElement:P.h,SVGLineElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPathElement:P.h,SVGPatternElement:P.h,SVGPolygonElement:P.h,SVGPolylineElement:P.h,SVGRadialGradientElement:P.h,SVGRectElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGSVGElement:P.h,SVGSwitchElement:P.h,SVGSymbolElement:P.h,SVGTSpanElement:P.h,SVGTextContentElement:P.h,SVGTextElement:P.h,SVGTextPathElement:P.h,SVGTextPositioningElement:P.h,SVGTitleElement:P.h,SVGUseElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,SVGElement:P.h,WebGLBuffer:P.c9,WebGLFramebuffer:P.cl,WebGLProgram:P.cF,WebGLRenderingContext:P.b6,WebGLShader:P.cK,WebGLUniformLocation:P.cT})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.iF,[])
else F.iF([])})})()
//# sourceMappingURL=main.dart.js.map
