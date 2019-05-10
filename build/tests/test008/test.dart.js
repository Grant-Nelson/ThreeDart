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
a[c]=function(){a[c]=function(){H.oC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kW(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kC:function kC(a){this.a=a},
k5:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
kA:function(){return new P.cs("No element")},
n0:function(){return new P.cs("Too many elements")},
q:function q(a){this.a=a},
fx:function fx(){},
bI:function bI(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h7:function h7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
j_:function j_(a,b,c){this.a=a
this.b=b
this.$ti=c},
bD:function bD(){},
cy:function cy(){},
dV:function dV(){},
mS:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
c_:function(a){var u,t
u=H.D(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
oj:function(a){return v.types[H.a_(a)]},
or:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.K(a).$iG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.al(a)
if(typeof u!=="string")throw H.c(H.az(a))
return u},
nk:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fR(u)
t=u[0]
s=u[1]
return new H.hA(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
co:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nh:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.i(u,3)
t=H.D(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.C(r,p)|32)>s)return}return parseInt(a,b)},
bL:function(a){return H.n8(a)+H.kT(H.bw(a),0,null)},
n8:function(a){var u,t,s,r,q,p,o,n,m
u=J.K(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.U||!!u.$icx){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c_(r.length>1&&C.b.C(r,0)===36?C.b.ah(r,1):r)},
n9:function(){if(!!self.location)return self.location.href
return},
lu:function(a){var u,t,s,r,q
H.ka(a)
u=J.ar(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ni:function(a){var u,t,s,r
u=H.e([],[P.n])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.I)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.az(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.ax(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.az(r))}return H.lu(u)},
lv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.az(s))
if(s<0)throw H.c(H.az(s))
if(s>65535)return H.ni(a)}return H.lu(a)},
nj:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bM:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.ax(u,10))>>>0,56320|u&1023)}}throw H.c(P.a6(a,0,1114111,null,null))},
bK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ng:function(a){var u=H.bK(a).getFullYear()+0
return u},
ne:function(a){var u=H.bK(a).getMonth()+1
return u},
na:function(a){var u=H.bK(a).getDate()+0
return u},
nb:function(a){var u=H.bK(a).getHours()+0
return u},
nd:function(a){var u=H.bK(a).getMinutes()+0
return u},
nf:function(a){var u=H.bK(a).getSeconds()+0
return u},
nc:function(a){var u=H.bK(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.az(a))},
i:function(a,b){if(a==null)J.ar(a)
throw H.c(H.bW(a,b))},
bW:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aA(!0,b,"index",null)
u=H.a_(J.ar(a))
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,"index",null,u)
return P.hy(b,"index",null)},
of:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.aA(!0,b,"end",null)},
az:function(a){return new P.aA(!0,a,null,null)},
ob:function(a){if(typeof a!=="number")throw H.c(H.az(a))
return a},
c:function(a){var u
if(a==null)a=new P.dz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mg})
u.name=""}else u.toString=H.mg
return u},
mg:function(){return J.al(this.dartException)},
W:function(a){throw H.c(a)},
I:function(a){throw H.c(P.aN(a))},
aY:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.d])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
im:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lp:function(a,b){return new H.hn(a,b==null?null:b.method)},
kD:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fU(a,t,u?null:b.receiver)},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.ax(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kD(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lp(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mj()
p=$.mk()
o=$.ml()
n=$.mm()
m=$.mp()
l=$.mq()
k=$.mo()
$.mn()
j=$.ms()
i=$.mr()
h=q.a8(t)
if(h!=null)return u.$1(H.kD(H.D(t),h))
else{h=p.a8(t)
if(h!=null){h.method="call"
return u.$1(H.kD(H.D(t),h))}else{h=o.a8(t)
if(h==null){h=n.a8(t)
if(h==null){h=m.a8(t)
if(h==null){h=l.a8(t)
if(h==null){h=k.a8(t)
if(h==null){h=n.a8(t)
if(h==null){h=j.a8(t)
if(h==null){h=i.a8(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lp(H.D(t),h))}}return u.$1(new H.iD(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dH()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aA(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dH()
return a},
bX:function(a){var u
if(a==null)return new H.eA(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eA(a)},
oi:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
oq:function(a,b,c,d,e,f){H.f(a,"$ibl")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.ab("Unsupported number of arguments for wrapped closure"))},
bV:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oq)
a.$identity=u
return u},
mR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.K(d).$ib){u.$reflectionInfo=d
s=H.nk(u).r}else s=d
r=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aM
if(typeof p!=="number")return p.J()
$.aM=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.ld(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oj,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lb:H.kv
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.ld(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mO:function(a,b,c,d){var u=H.kv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ld:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mO(t,!r,u,b)
if(t===0){r=$.aM
if(typeof r!=="number")return r.J()
$.aM=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c5
if(q==null){q=H.fd("self")
$.c5=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aM
if(typeof r!=="number")return r.J()
$.aM=r+1
o+=r
r="return function("+o+"){return this."
q=$.c5
if(q==null){q=H.fd("self")
$.c5=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
mP:function(a,b,c,d){var u,t
u=H.kv
t=H.lb
switch(b?-1:a){case 0:throw H.c(H.no("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mQ:function(a,b){var u,t,s,r,q,p,o,n
u=$.c5
if(u==null){u=H.fd("self")
$.c5=u}t=$.la
if(t==null){t=H.fd("receiver")
$.la=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mP(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aM
if(typeof t!=="number")return t.J()
$.aM=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aM
if(typeof t!=="number")return t.J()
$.aM=t+1
return new Function(u+t+"}")()},
kW:function(a,b,c,d,e,f,g){return H.mR(a,b,H.a_(c),d,!!e,!!f,g)},
kv:function(a){return a.a},
lb:function(a){return a.c},
fd:function(a){var u,t,s,r,q
u=new H.c4("self","target","receiver","name")
t=J.fR(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aL(a,"String"))},
og:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aL(a,"double"))},
ov:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aL(a,"num"))},
kU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aL(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aL(a,"int"))},
me:function(a,b){throw H.c(H.aL(a,H.c_(H.D(b).substring(2))))},
ox:function(a,b){throw H.c(H.mN(a,H.c_(H.D(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.me(a,b)},
aq:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.ox(a,b)},
ka:function(a){if(a==null)return a
if(!!J.K(a).$ib)return a
throw H.c(H.aL(a,"List<dynamic>"))},
mb:function(a,b){var u
if(a==null)return a
u=J.K(a)
if(!!u.$ib)return a
if(u[b])return a
H.me(a,b)},
m7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
f_:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.m7(J.K(a))
if(u==null)return!1
return H.lY(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.kQ)return a
$.kQ=!0
try{if(H.f_(a,b))return a
u=H.ko(b)
t=H.aL(a,u)
throw H.c(t)}finally{$.kQ=!1}},
kX:function(a,b){if(a!=null&&!H.kV(a,b))H.W(H.aL(a,H.ko(b)))
return a},
aL:function(a,b){return new H.io("TypeError: "+P.fB(a)+": type '"+H.m2(a)+"' is not a subtype of type '"+b+"'")},
mN:function(a,b){return new H.ff("CastError: "+P.fB(a)+": type '"+H.m2(a)+"' is not a subtype of type '"+b+"'")},
m2:function(a){var u,t
u=J.K(a)
if(!!u.$ic6){t=H.m7(u)
if(t!=null)return H.ko(t)
return"Closure"}return H.bL(a)},
oC:function(a){throw H.c(new P.fp(H.D(a)))},
no:function(a){return new H.hH(a)},
m8:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bw:function(a){if(a==null)return
return a.$ti},
pn:function(a,b,c){return H.bZ(a["$a"+H.j(c)],H.bw(b))},
bv:function(a,b,c,d){var u
H.D(c)
H.a_(d)
u=H.bZ(a["$a"+H.j(c)],H.bw(b))
return u==null?null:u[d]},
ah:function(a,b,c){var u
H.D(b)
H.a_(c)
u=H.bZ(a["$a"+H.j(b)],H.bw(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a_(b)
u=H.bw(a)
return u==null?null:u[b]},
ko:function(a){return H.bu(a,null)},
bu:function(a,b){var u,t
H.o(b,"$ib",[P.d],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c_(a[0].name)+H.kT(a,1,b)
if(typeof a=="function")return H.c_(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.j(b[t])}if('func' in a)return H.o0(a,b)
if('futureOr' in a)return"FutureOr<"+H.bu("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.d]
H.o(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.e([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.b.J(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bu(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bu(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bu(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bu(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oh(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.D(u[g])
i=i+h+H.bu(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kT:function(a,b,c){var u,t,s,r,q,p
H.o(c,"$ib",[P.d],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bu(p,c)}return"<"+u.i(0)+">"},
bZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cQ:function(a,b,c,d){var u,t
H.D(b)
H.ka(c)
H.D(d)
if(a==null)return!1
u=H.bw(a)
t=J.K(a)
if(t[b]==null)return!1
return H.m5(H.bZ(t[d],u),null,c,null)},
o:function(a,b,c,d){H.D(b)
H.ka(c)
H.D(d)
if(a==null)return a
if(H.cQ(a,b,c,d))return a
throw H.c(H.aL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c_(b.substring(2))+H.kT(c,0,null),v.mangledGlobalNames)))},
m5:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ay(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ay(a[t],b,c[t],d))return!1
return!0},
pl:function(a,b,c){return a.apply(b,H.bZ(J.K(b)["$a"+H.j(c)],H.bw(b)))},
ma:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="F"||a===-1||a===-2||H.ma(u)}return!1},
kV:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="F"||b===-1||b===-2||H.ma(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kV(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f_(a,b)}u=J.K(a).constructor
t=H.bw(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ay(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.kV(a,b))throw H.c(H.aL(a,H.ko(b)))
return a},
ay:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.lY(a,b,c,d)
if('func' in a)return c.name==="bl"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,s,d)
else if(H.ay(a,b,s,d))return!0
else{if(!('$i'+"cd" in t.prototype))return!1
r=t.prototype["$a"+"cd"]
q=H.bZ(r,u?a.slice(1):null)
return H.ay(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.m5(H.bZ(m,u),b,p,d)},
lY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ay(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ay(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ay(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ou(h,b,g,d)},
ou:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ay(c[r],d,a[r],b))return!1}return!0},
pm:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
os:function(a){var u,t,s,r,q,p
u=H.D($.m9.$1(a))
t=$.k0[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.k9[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.D($.m4.$2(a,u))
if(u!=null){t=$.k0[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.k9[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kn(s)
$.k0[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.k9[u]=s
return s}if(q==="-"){p=H.kn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.md(a,s)
if(q==="*")throw H.c(P.iC(u))
if(v.leafTags[u]===true){p=H.kn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.md(a,s)},
md:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kn:function(a){return J.kZ(a,!1,null,!!a.$iG)},
ot:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kn(u)
else return J.kZ(u,c,null,null)},
oo:function(){if(!0===$.kY)return
$.kY=!0
H.op()},
op:function(){var u,t,s,r,q,p,o,n
$.k0=Object.create(null)
$.k9=Object.create(null)
H.on()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mf.$1(q)
if(p!=null){o=H.ot(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
on:function(){var u,t,s,r,q,p,o
u=C.a_()
u=H.bU(C.X,H.bU(C.a1,H.bU(C.A,H.bU(C.A,H.bU(C.a0,H.bU(C.Y,H.bU(C.Z(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.m9=new H.k6(q)
$.m4=new H.k7(p)
$.mf=new H.k8(o)},
bU:function(a,b){return a(b)||b},
n2:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.Y("Illegal RegExp pattern ("+String(r)+")",a,null))},
oA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
l0:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fj:function fj(){},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hA:function hA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b){this.a=a
this.b=b},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
kq:function kq(a){this.a=a},
eA:function eA(a){this.a=a
this.b=null},
c6:function c6(){},
i2:function i2(){},
hU:function hU(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a){this.a=a},
ff:function ff(a){this.a=a},
hH:function hH(a){this.a=a},
aC:function aC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fY:function fY(a,b){this.a=a
this.$ti=b},
fZ:function fZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
fT:function fT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jW:function(a){return a},
n7:function(a){return new Int8Array(a)},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bW(b,a))},
nZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.of(a,b,c))
return b},
ck:function ck(){},
bo:function bo(){},
dv:function dv(){},
cl:function cl(){},
dw:function dw(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
dx:function dx(){},
cm:function cm(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
oh:function(a){return J.lk(a?Object.keys(a):[],null)},
ow:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k2:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kY==null){H.oo()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.iC("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.l1()]
if(q!=null)return q
q=H.os(a)
if(q!=null)return q
if(typeof a=="function")return C.a2
t=Object.getPrototypeOf(a)
if(t==null)return C.I
if(t===Object.prototype)return C.I
if(typeof r=="function"){Object.defineProperty(r,$.l1(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
n1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ku(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.lk(new Array(a),b)},
lk:function(a,b){return J.fR(H.e(a,[b]))},
fR:function(a){H.ka(a)
a.fixed$length=Array
return a},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.fS.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.L)return a
return J.k2(a)},
cR:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.L)return a
return J.k2(a)},
f0:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.L)return a
return J.k2(a)},
cS:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cx.prototype
return a},
a3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.L)return a
return J.k2(a)},
a0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).t(a,b)},
l4:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.or(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cR(a).n(a,b)},
kr:function(a,b,c){return J.f0(a).m(a,b,c)},
mB:function(a,b){return J.cS(a).C(a,b)},
f1:function(a,b){return J.a3(a).fI(a,b)},
ks:function(a,b,c){return J.a3(a).fL(a,b,c)},
mC:function(a,b,c,d){return J.a3(a).hc(a,b,c,d)},
l5:function(a,b){return J.a3(a).u(a,b)},
mD:function(a,b){return J.cS(a).V(a,b)},
f2:function(a,b){return J.f0(a).G(a,b)},
mE:function(a,b,c,d){return J.a3(a).hI(a,b,c,d)},
l6:function(a,b){return J.f0(a).D(a,b)},
mF:function(a){return J.a3(a).ghh(a)},
c2:function(a){return J.a3(a).gbP(a)},
cX:function(a){return J.K(a).gF(a)},
be:function(a){return J.f0(a).gS(a)},
ar:function(a){return J.cR(a).gk(a)},
mG:function(a){return J.a3(a).git(a)},
kt:function(a,b){return J.a3(a).aH(a,b)},
l7:function(a){return J.f0(a).ij(a)},
mH:function(a,b){return J.a3(a).im(a,b)},
mI:function(a,b,c){return J.a3(a).dY(a,b,c)},
mJ:function(a,b,c){return J.cS(a).p(a,b,c)},
mK:function(a){return J.cS(a).iA(a)},
al:function(a){return J.K(a).i(a)},
a:function a(){},
fS:function fS(){},
dl:function dl(){},
dn:function dn(){},
hr:function hr(){},
cx:function cx(){},
bm:function bm(){},
aR:function aR(a){this.$ti=a},
kB:function kB(a){this.$ti=a},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dm:function dm(){},
dk:function dk(){},
dj:function dj(){},
bH:function bH(){}},P={
nB:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.o8()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bV(new P.j1(u),1)).observe(t,{childList:true})
return new P.j0(u,t,s)}else if(self.setImmediate!=null)return P.o9()
return P.oa()},
nC:function(a){self.scheduleImmediate(H.bV(new P.j2(H.k(a,{func:1,ret:-1})),0))},
nD:function(a){self.setImmediate(H.bV(new P.j3(H.k(a,{func:1,ret:-1})),0))},
nE:function(a){P.kH(C.u,H.k(a,{func:1,ret:-1}))},
kH:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.d.ay(a.a,1000)
return P.nK(u<0?0:u,b)},
lD:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aW]})
u=C.d.ay(a.a,1000)
return P.nL(u<0?0:u,b)},
nK:function(a,b){var u=new P.eH(!0)
u.ej(a,b)
return u},
nL:function(a,b){var u=new P.eH(!1)
u.ek(a,b)
return u},
nF:function(a,b){var u,t,s
b.a=1
try{a.dD(new P.jd(b),new P.je(b),null)}catch(s){u=H.aa(s)
t=H.bX(s)
P.oy(new P.jf(b,u,t))}},
lN:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iax")
if(u>=4){t=b.bG()
b.a=a.a
b.c=a.c
P.cD(b,t)}else{t=H.f(b.c,"$ib0")
b.a=2
b.c=a
a.cK(t)}},
cD:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iad")
t=t.b
p=q.a
o=q.b
t.toString
P.jX(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cD(u.a,b)}t=u.a
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
if(k){H.f(m,"$iad")
t=t.b
p=m.a
o=m.b
t.toString
P.jX(null,null,t,p,o)
return}j=$.U
if(j!=l)$.U=l
else j=null
t=b.c
if(t===8)new P.jj(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ji(s,b,m).$0()}else if((t&2)!==0)new P.jh(u,s,b).$0()
if(j!=null)$.U=j
t=s.b
if(!!J.K(t).$icd){if(t.a>=4){i=H.f(o.c,"$ib0")
o.c=null
b=o.b3(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lN(t,o)
return}}h=b.b
i=H.f(h.c,"$ib0")
h.c=null
b=h.b3(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.f(p,"$iad")
h.a=8
h.c=p}u.a=h
t=h}},
o3:function(a,b){if(H.f_(a,{func:1,args:[P.L,P.aj]}))return H.k(a,{func:1,ret:null,args:[P.L,P.aj]})
if(H.f_(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.c(P.ku(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o2:function(){var u,t
for(;u=$.bT,u!=null;){$.cP=null
t=u.b
$.bT=t
if(t==null)$.cO=null
u.a.$0()}},
o7:function(){$.kR=!0
try{P.o2()}finally{$.cP=null
$.kR=!1
if($.bT!=null)$.l2().$1(P.m6())}},
m1:function(a){var u=new P.e2(H.k(a,{func:1,ret:-1}))
if($.bT==null){$.cO=u
$.bT=u
if(!$.kR)$.l2().$1(P.m6())}else{$.cO.b=u
$.cO=u}},
o6:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bT
if(u==null){P.m1(a)
$.cP=$.cO
return}t=new P.e2(a)
s=$.cP
if(s==null){t.b=u
$.cP=t
$.bT=t}else{t.b=s.b
s.b=t
$.cP=t
if(t.b==null)$.cO=t}},
oy:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.U
if(C.h===t){P.jZ(null,null,C.h,a)
return}t.toString
P.jZ(null,null,t,H.k(t.bK(a),u))},
lC:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.U
if(t===C.h){t.toString
return P.kH(a,b)}return P.kH(a,H.k(t.bK(b),u))},
ns:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aW]}
H.k(b,u)
t=$.U
if(t===C.h){t.toString
return P.lD(a,b)}s=t.cY(b,P.aW)
$.U.toString
return P.lD(a,H.k(s,u))},
jX:function(a,b,c,d,e){var u={}
u.a=d
P.o6(new P.jY(u,e))},
lZ:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
m_:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
o4:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
jZ:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.h!==c
if(u)d=!(!u||!1)?c.bK(d):c.hi(d,-1)
P.m1(d)},
j1:function j1(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
eH:function eH(a){this.a=a
this.b=null
this.c=0},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jc:function jc(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
ct:function ct(){},
hY:function hY(){},
aW:function aW(){},
ad:function ad(a,b){this.a=a
this.b=b},
jR:function jR(){},
jY:function jY(a,b){this.a=a
this.b=b},
jq:function jq(){},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function(a,b,c,d,e){return new H.aC([d,e])},
kE:function(a,b){return new H.aC([a,b])},
n4:function(a){return H.oi(a,new H.aC([null,null]))},
dr:function(a,b,c,d){return new P.jo([d])},
kN:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nJ:function(a,b,c){var u=new P.eh(a,b,[c])
u.c=a.e
return u},
n_:function(a,b,c){var u,t
if(P.kS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.d])
t=$.cW()
C.a.h(t,a)
try{P.o1(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.lA(b,H.mb(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
kz:function(a,b,c){var u,t,s
if(P.kS(a))return b+"..."+c
u=new P.ak(b)
t=$.cW()
C.a.h(t,a)
try{s=u
s.a=P.lA(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kS:function(a){var u,t
for(u=0;t=$.cW(),u<t.length;++u)if(a===t[u])return!0
return!1},
o1:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.o(b,"$ib",[P.d],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.j(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.w();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ll:function(a,b,c){var u=P.n3(null,null,null,b,c)
a.D(0,new P.h_(u,b,c))
return u},
lm:function(a,b){var u,t,s
u=P.dr(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.I)(a),++s)u.h(0,H.x(a[s],b))
return u},
kG:function(a){var u,t
u={}
if(P.kS(a))return"{...}"
t=new P.ak("")
try{C.a.h($.cW(),a)
t.a+="{"
u.a=!0
J.l6(a,new P.h3(u,t))
t.a+="}"}finally{u=$.cW()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jo:function jo(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bR:function bR(a){this.a=a
this.c=this.b=null},
eh:function eh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(){},
u:function u(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
a8:function a8(){},
jI:function jI(){},
h4:function h4(){},
dW:function dW(a,b){this.a=a
this.$ti=b},
jv:function jv(){},
ei:function ei(){},
eN:function eN(){},
nw:function(a,b,c,d){H.o(b,"$ib",[P.n],"$ab")
if(b instanceof Uint8Array)return P.nx(!1,b,c,d)
return},
nx:function(a,b,c,d){var u,t,s
u=$.mt()
if(u==null)return
t=0===c
if(t&&!0)return P.kK(u,b)
s=b.length
d=P.br(c,d,s,null,null,null)
if(t&&d===s)return P.kK(u,b)
return P.kK(u,b.subarray(c,d))},
kK:function(a,b){if(P.nz(b))return
return P.nA(a,b)},
nA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aa(t)}return},
nz:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
ny:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aa(t)}return},
o5:function(a,b,c){var u,t,s
H.o(a,"$ib",[P.n],"$ab")
for(u=J.cR(a),t=b;t<c;++t){s=u.n(a,t)
if(typeof s!=="number")return s.bf()
if((s&127)!==s)return t-b}return c-b},
l9:function(a,b,c,d,e,f){if(C.d.b0(f,4)!==0)throw H.c(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.Y("Invalid base64 padding, more than two '=' characters",a,b))},
fa:function fa(a){this.a=a},
fb:function fb(a){this.a=a},
bB:function bB(){},
bi:function bi(){},
fz:function fz(){},
fP:function fP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fO:function fO(a){this.a=a},
iM:function iM(a){this.a=a},
iO:function iO(){},
jP:function jP(a){this.b=this.a=0
this.c=a},
iN:function iN(a){this.a=a},
jN:function jN(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function(a,b,c){var u
H.k(b,{func:1,ret:P.n,args:[P.d]})
u=H.nh(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.Y(a,null,null))},
mX:function(a){if(a instanceof H.c6)return a.i(0)
return"Instance of '"+H.bL(a)+"'"},
n5:function(a,b,c,d){var u,t
H.x(b,d)
u=J.n1(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.o(u,"$ib",[d],"$ab")},
kF:function(a,b,c){var u,t,s
u=[c]
t=H.e([],u)
for(s=J.be(a);s.w();)C.a.h(t,H.x(s.gH(s),c))
if(b)return t
return H.o(J.fR(t),"$ib",u,"$ab")},
dI:function(a,b,c){var u,t
u=P.n
H.o(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.o(a,"$iaR",[u],"$aaR")
t=a.length
c=P.br(b,c,t,null,null,null)
return H.lv(b>0||c<t?C.a.e2(a,b,c):a)}if(!!J.K(a).$icm)return H.nj(a,b,P.br(b,c,a.length,null,null,null))
return P.nq(a,b,c)},
nq:function(a,b,c){var u,t,s,r
H.o(a,"$il",[P.n],"$al")
if(b<0)throw H.c(P.a6(b,0,J.ar(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a6(c,b,J.ar(a),null,null))
t=J.be(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.a6(b,0,s,null,null))
r=[]
if(u)for(;t.w();)r.push(t.gH(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.a6(c,b,s,null,null))
r.push(t.gH(t))}return H.lv(r)},
nm:function(a,b,c){return new H.fT(a,H.n2(a,!1,!0,!1))},
lA:function(a,b,c){var u=J.be(b)
if(!u.w())return a
if(c.length===0){do a+=H.j(u.gH(u))
while(u.w())}else{a+=H.j(u.gH(u))
for(;u.w();)a=a+c+H.j(u.gH(u))}return a},
iH:function(){var u=H.n9()
if(u!=null)return P.nv(u,0,null)
throw H.c(P.E("'Uri.base' is not supported"))},
eO:function(a,b,c,d){var u,t,s,r,q,p
H.o(a,"$ib",[P.n],"$ab")
if(c===C.i){u=$.mz().b
if(typeof b!=="string")H.W(H.az(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.ah(c,"bB",0))
t=c.ghH().bQ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bM(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mT:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d7:function(a){if(a>=10)return""+a
return"0"+a},
lf:function(a,b,c,d,e,f){return new P.bj(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mX(a)},
cZ:function(a){return new P.aA(!1,null,null,a)},
ku:function(a,b,c){return new P.aA(!0,a,b,c)},
hy:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
br:function(a,b,c,d,e,f){if(typeof a!=="number")return H.v(a)
if(0>a||a>c)throw H.c(P.a6(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a6(b,a,c,"end",f))
return b}return c},
S:function(a,b,c,d,e){var u=H.a_(e==null?J.ar(b):e)
return new P.fQ(b,u,!0,a,c,"Index out of range")},
E:function(a){return new P.iE(a)},
iC:function(a){return new P.iB(a)},
lz:function(a){return new P.cs(a)},
aN:function(a){return new P.fi(a)},
ab:function(a){return new P.ea(a)},
Y:function(a,b,c){return new P.fK(a,b,c)},
n6:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.n]})
u=H.e([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
bY:function(a){H.ow(a)},
nv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.C(a,b+4)^58)*3|C.b.C(a,b)^100|C.b.C(a,b+1)^97|C.b.C(a,b+2)^116|C.b.C(a,b+3)^97)>>>0
if(t===0)return P.lF(b>0||c<c?C.b.p(a,b,c):a,5,null).gdI()
else if(t===32)return P.lF(C.b.p(a,u,c),0,null).gdI()}s=new Array(8)
s.fixed$length=Array
r=H.e(s,[P.n])
C.a.m(r,0,0)
s=b-1
C.a.m(r,1,s)
C.a.m(r,2,s)
C.a.m(r,7,s)
C.a.m(r,3,b)
C.a.m(r,4,b)
C.a.m(r,5,c)
C.a.m(r,6,c)
if(P.m0(a,b,c,0,r)>=14)C.a.m(r,7,c)
q=r[1]
if(typeof q!=="number")return q.iH()
if(q>=b)if(P.m0(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.J()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.U()
if(typeof m!=="number")return H.v(m)
if(l<m)m=l
if(typeof n!=="number")return n.U()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.U()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.U()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.a6(a,"..",n)))i=m>n+2&&C.b.a6(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.a6(a,"file",b)){if(p<=b){if(!C.b.a6(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.p(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aE(a,n,m,"/");++m;++l;++c}else{a=C.b.p(a,b,n)+"/"+C.b.p(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.a6(a,"http",b)){if(s&&o+3===n&&C.b.a6(a,"80",o+1))if(b===0&&!0){a=C.b.aE(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.p(a,b,o)+C.b.p(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.a6(a,"https",b)){if(s&&o+4===n&&C.b.a6(a,"443",o+1))if(b===0&&!0){a=C.b.aE(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.p(a,b,o)+C.b.p(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.p(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jy(a,q,p,o,n,m,l,j)}return P.nM(a,b,c,q,p,o,n,m,l,j)},
lH:function(a,b){var u=P.d
return C.a.hM(H.e(a.split("&"),[u]),P.kE(u,u),new P.iK(b),[P.A,P.d,P.d])},
nu:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.iG(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.V(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cT(C.b.p(a,q,r),null,null)
if(typeof n!=="number")return n.dV()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.i(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cT(C.b.p(a,q,c),null,null)
if(typeof n!=="number")return n.dV()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.i(t,p)
t[p]=n
return t},
lG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iI(a)
t=new P.iJ(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.n])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.V(a,r)
if(n===58){if(r===b){++r
if(C.b.V(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaf(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nu(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.i(j,g)
j[g]=0
d=g+1
if(d>=i)return H.i(j,d)
j[d]=0
g+=2}else{d=C.d.ax(f,8)
if(g<0||g>=i)return H.i(j,g)
j[g]=d
d=g+1
if(d>=i)return H.i(j,d)
j[d]=f&255
g+=2}}return j},
nM:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nT(a,b,d)
else{if(d===b)P.cM(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nU(a,u,e-1):""
s=P.nQ(a,e,f,!1)
if(typeof f!=="number")return f.J()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.nS(P.cT(C.b.p(a,r,g),new P.jJ(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nR(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.U()
o=h<i?P.kO(a,h+1,i,null):null
return new P.bS(j,t,s,q,p,o,i<c?P.nP(a,i+1,c):null)},
lR:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cM:function(a,b,c){throw H.c(P.Y(c,a,b))},
nS:function(a,b){if(a!=null&&a===P.lR(b))return
return a},
nQ:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.B()
u=c-1
if(C.b.V(a,u)!==93)P.cM(a,b,"Missing end `]` to match `[` in host")
P.lG(a,b+1,u)
return C.b.p(a,b,c).toLowerCase()}if(typeof c!=="number")return H.v(c)
t=b
for(;t<c;++t)if(C.b.V(a,t)===58){P.lG(a,b,c)
return"["+a+"]"}return P.nW(a,b,c)},
nW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.V(a,u)
if(q===37){p=P.lX(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.b.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.i(C.G,o)
o=(C.G[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.i(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.cM(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lS(q)
u+=l
t=u}}}}if(s==null)return C.b.p(a,b,c)
if(t<c){n=C.b.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nT:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lU(C.b.C(a,b)))P.cM(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.i(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cM(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.p(a,b,c)
return P.nN(t?a.toLowerCase():a)},
nN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nU:function(a,b,c){return P.cN(a,b,c,C.a5,!1)},
nR:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cN(a,b,c,C.H,!0):C.W.iI(d,new P.jK(),P.d).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.X(r,"/"))r="/"+r
return P.nV(r,e,f)},
nV:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.X(a,"/"))return P.nX(a,!u||c)
return P.nY(a)},
kO:function(a,b,c,d){var u,t
u={}
H.o(d,"$iA",[P.d,null],"$aA")
if(a!=null){if(d!=null)throw H.c(P.cZ("Both query and queryParameters specified"))
return P.cN(a,b,c,C.p,!0)}if(d==null)return
t=new P.ak("")
u.a=""
d.D(0,new P.jL(new P.jM(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nP:function(a,b,c){return P.cN(a,b,c,C.p,!0)},
lX:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.V(a,b+1)
s=C.b.V(a,u)
r=H.k5(t)
q=H.k5(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.d.ax(p,4)
if(u>=8)return H.i(C.r,u)
u=(C.r[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bM(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.p(a,b,b+3).toUpperCase()
return},
lS:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.n])
C.a.m(t,0,37)
C.a.m(t,1,C.b.C("0123456789ABCDEF",a>>>4))
C.a.m(t,2,C.b.C("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.n])
for(q=0;--r,r>=0;s=128){p=C.d.fW(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.b.C("0123456789ABCDEF",p>>>4))
C.a.m(t,q+2,C.b.C("0123456789ABCDEF",p&15))
q+=3}}return P.dI(t,0,null)},
cN:function(a,b,c,d,e){var u=P.lW(a,b,c,H.o(d,"$ib",[P.n],"$ab"),e)
return u==null?C.b.p(a,b,c):u},
lW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.o(d,"$ib",[P.n],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.U()
if(typeof c!=="number")return H.v(c)
if(!(t<c))break
c$0:{q=C.b.V(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.i(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lX(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.i(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cM(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.V(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lS(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.p(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.v(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.U()
if(s<c)r.a+=C.b.p(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lV:function(a){if(C.b.X(a,"."))return!0
return C.b.de(a,"/.")!==-1},
nY:function(a){var u,t,s,r,q,p,o
if(!P.lV(a))return a
u=H.e([],[P.d])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a0(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.i(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
nX:function(a,b){var u,t,s,r,q,p
if(!P.lV(a))return!b?P.lT(a):a
u=H.e([],[P.d])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaf(u)!==".."){if(0>=u.length)return H.i(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.i(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaf(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.i(u,0)
C.a.m(u,0,P.lT(u[0]))}return C.a.l(u,"/")},
lT:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.lU(J.mB(a,0)))for(t=1;t<u;++t){s=C.b.C(a,t)
if(s===58)return C.b.p(a,0,t)+"%3A"+C.b.ah(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.i(C.q,r)
r=(C.q[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nO:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cZ("Invalid URL encoding"))}}return u},
kP:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.C(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.i!==d)r=!1
else r=!0
if(r)return C.b.p(a,b,c)
else q=new H.q(C.b.p(a,b,c))}else{q=H.e([],[P.n])
for(r=a.length,t=b;t<c;++t){s=C.b.C(a,t)
if(s>127)throw H.c(P.cZ("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.cZ("Truncated URI"))
C.a.h(q,P.nO(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.o(q,"$ib",[P.n],"$ab")
return new P.iN(!1).bQ(q)},
lU:function(a){var u=a|32
return 97<=u&&u<=122},
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.e([b-1],[P.n])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.C(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.Y("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.Y("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.C(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaf(u)
if(q!==44||s!==o+7||!C.b.a6(a,"base64",o+1))throw H.c(P.Y("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.M.i_(0,a,n,t)
else{m=P.lW(a,n,t,C.p,!0)
if(m!=null)a=C.b.aE(a,n,t,m)}return new P.iF(a,u,c)},
o_:function(){var u,t,s,r,q
u=P.n6(22,new P.jT(),!0,P.J)
t=new P.jS(u)
s=new P.jU()
r=new P.jV()
q=H.f(t.$2(0,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iJ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iJ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iJ"),"]",5)
q=H.f(t.$2(9,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iJ"),"az",21)
q=H.f(t.$2(21,245),"$iJ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
m0:function(a,b,c,d,e){var u,t,s,r,q
H.o(e,"$ib",[P.n],"$ab")
u=$.mA()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.i(u,d)
s=u[d]
r=C.b.C(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.i(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
N:function N(){},
ae:function ae(a,b){this.a=a
this.b=b},
B:function B(){},
bj:function bj(a){this.a=a},
fv:function fv(){},
fw:function fw(){},
bk:function bk(){},
dz:function dz(){},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fQ:function fQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iE:function iE(a){this.a=a},
iB:function iB(a){this.a=a},
cs:function cs(a){this.a=a},
fi:function fi(a){this.a=a},
hq:function hq(){},
dH:function dH(){},
fp:function fp(a){this.a=a},
ea:function ea(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(){},
n:function n(){},
l:function l(){},
aQ:function aQ(){},
b:function b(){},
A:function A(){},
F:function F(){},
X:function X(){},
L:function L(){},
aj:function aj(){},
d:function d(){},
ak:function ak(a){this.a=a},
iK:function iK(a){this.a=a},
iG:function iG(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
jJ:function jJ(a,b){this.a=a
this.b=b},
jK:function jK(){},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(){},
jS:function jS(a){this.a=a},
jU:function jU(){},
jV:function jV(){},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j7:function j7(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
oe:function(a){var u,t
u=J.K(a)
if(!!u.$ib4){t=u.gd1(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
od:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
b8:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.d,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r){q=H.D(t[r])
u.m(0,q,a[q])}return u},
oc:function(a,b){var u={}
a.D(0,new P.k_(u))
return u},
jA:function jA(){},
jB:function jB(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
eE:function eE(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fI:function fI(){},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jp:function jp(){},
a2:function a2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
fW:function fW(){},
aU:function aU(){},
ho:function ho(){},
hv:function hv(){},
cp:function cp(){},
i0:function i0(){},
p:function p(){},
aX:function aX(){},
ik:function ik(){},
ef:function ef(){},
eg:function eg(){},
eq:function eq(){},
er:function er(){},
eC:function eC(){},
eD:function eD(){},
eK:function eK(){},
eL:function eL(){},
J:function J(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bx:function bx(){},
hp:function hp(){},
e3:function e3(){},
d0:function d0(){},
dd:function dd(){},
dC:function dC(){},
bO:function bO(){},
dF:function dF(){},
dM:function dM(){},
dT:function dT(){},
hT:function hT(){},
ey:function ey(){},
ez:function ez(){}},W={
l8:function(a){var u=document.createElement("a")
return u},
kw:function(a,b){var u=document.createElement("canvas")
return u},
mV:function(a,b,c){var u,t
u=document.body
t=(u&&C.l).a7(u,a,b,c)
t.toString
u=W.C
u=new H.cA(new W.ag(t),H.k(new W.fy(),{func:1,ret:P.N,args:[u]}),[u])
return H.f(u.gap(u),"$iH")},
mW:function(a){H.f(a,"$ih")
return"wheel"},
ca:function(a){var u,t,s
u="element tag unavailable"
try{t=J.mG(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aa(s)}return u},
lj:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
mZ:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icf")
try{u.type=a}catch(s){H.aa(s)}return u},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lP:function(a,b,c,d){var u,t
u=W.jm(W.jm(W.jm(W.jm(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a1:function(a,b,c,d,e){var u=W.m3(new W.jb(c),W.m)
if(u!=null&&!0)J.mC(a,b,u,!1)
return new W.ja(a,b,u,!1,[e])},
lO:function(a){var u,t
u=W.l8(null)
t=window.location
u=new W.bt(new W.ju(u,t))
u.eg(a)
return u},
nG:function(a,b,c,d){H.f(a,"$iH")
H.D(b)
H.D(c)
H.f(d,"$ibt")
return!0},
nH:function(a,b,c,d){var u,t,s
H.f(a,"$iH")
H.D(b)
H.D(c)
u=H.f(d,"$ibt").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lQ:function(){var u,t,s,r,q
u=P.d
t=P.lm(C.v,u)
s=H.r(C.v,0)
r=H.k(new W.jF(),{func:1,ret:u,args:[s]})
q=H.e(["TEMPLATE"],[u])
t=new W.jE(t,P.dr(null,null,null,u),P.dr(null,null,null,u),P.dr(null,null,null,u),null)
t.ei(null,new H.h7(C.v,r,[s,u]),q,null)
return t},
m3:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.U
if(u===C.h)return a
return u.cY(a,b)},
w:function w(){},
f3:function f3(){},
cY:function cY(){},
f4:function f4(){},
c3:function c3(){},
by:function by(){},
bf:function bf(){},
bz:function bz(){},
bA:function bA(){},
bg:function bg(){},
c7:function c7(){},
fl:function fl(){},
M:function M(){},
c8:function c8(){},
fm:function fm(){},
aO:function aO(){},
aP:function aP(){},
fn:function fn(){},
fo:function fo(){},
fr:function fr(){},
as:function as(){},
c9:function c9(){},
fs:function fs(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
ft:function ft(){},
fu:function fu(){},
j5:function j5(a,b){this.a=a
this.b=b},
H:function H(){},
fy:function fy(){},
m:function m(){},
h:function h(){},
at:function at(){},
cc:function cc(){},
fF:function fF(){},
fJ:function fJ(){},
aB:function aB(){},
de:function de(){},
df:function df(){},
bE:function bE(){},
dg:function dg(){},
b4:function b4(){},
bF:function bF(){},
cf:function cf(){},
aS:function aS(){},
dq:function dq(){},
ds:function ds(){},
ci:function ci(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
hc:function hc(){},
hd:function hd(a){this.a=a},
aD:function aD(){},
he:function he(){},
Z:function Z(){},
ag:function ag(a){this.a=a},
C:function C(){},
cn:function cn(){},
aE:function aE(){},
ht:function ht(){},
dD:function dD(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
aF:function aF(){},
hR:function hR(){},
aG:function aG(){},
hS:function hS(){},
aH:function aH(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
au:function au(){},
aV:function aV(){},
dJ:function dJ(){},
dK:function dK(){},
i1:function i1(){},
cu:function cu(){},
aI:function aI(){},
av:function av(){},
i3:function i3(){},
i4:function i4(){},
id:function id(){},
aJ:function aJ(){},
aK:function aK(){},
ii:function ii(){},
ij:function ij(){},
bs:function bs(){},
iL:function iL(){},
iX:function iX(){},
iY:function iY(){},
b_:function b_(){},
cB:function cB(){},
cC:function cC(){},
j6:function j6(){},
e5:function e5(){},
jl:function jl(){},
en:function en(){},
jz:function jz(){},
jC:function jC(){},
j4:function j4(){},
j8:function j8(a){this.a=a},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kM:function kM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ja:function ja(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jb:function jb(a){this.a=a},
bt:function bt(a){this.a=a},
z:function z(){},
dy:function dy(a){this.a=a},
hm:function hm(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(){},
jw:function jw(){},
jx:function jx(){},
jE:function jE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jF:function jF(){},
jD:function jD(){},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ap:function ap(){},
ju:function ju(a,b){this.a=a
this.b=b},
eP:function eP(a){this.a=a},
jQ:function jQ(a){this.a=a},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cI:function cI(){},
cJ:function cJ(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eF:function eF(){},
eG:function eG(){},
cK:function cK(){},
cL:function cL(){},
eI:function eI(){},
eJ:function eJ(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){}},O={
le:function(a){var u=new O.a4([a])
u.ce(a)
return u},
a4:function a4(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ch:function ch(){this.b=this.a=null},
bP:function bP(){}},E={
li:function(a,b,c,d,e,f){var u=new E.af()
u.a=d
u.b=!0
u.sef(0,O.le(E.af))
u.y.bj(u.gi0(),u.gi3())
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
u.scb(0,e)
u.sdC(f)
u.saV(c)
return u},
nn:function(a,b){var u=new E.hB(a,b)
u.e9(a,b)
return u},
nr:function(a,b,c,d,e){var u,t,s,r
u=J.K(a)
if(!!u.$ibz)return E.lB(a,!0,!0,!0,!1)
t=W.kw(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbP(a).h(0,t)
r=E.lB(t,!0,!0,!0,!1)
r.a=a
return r},
lB:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dO()
t=H.f(C.m.c8(a,"webgl2",P.n4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibO")
if(t==null)H.W(P.ab("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.nn(t,a)
s=new T.ia(t)
s.b=H.a_((t&&C.c).c9(t,3379))
s.c=H.a_(C.c.c9(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dX(a)
r=new X.fV()
r.c=new X.ao(!1,!1,!1)
r.sfE(P.dr(null,null,null,P.n))
s.b=r
r=new X.hf(s)
r.f=0
r.r=V.bp()
r.x=V.bp()
r.Q=1
r.ch=1
s.c=r
r=new X.h1(s)
r.r=0
r.x=V.bp()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ih(s)
r.e=0
r.f=V.bp()
r.r=V.bp()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.seA(H.e([],[[P.ct,P.L]]))
r=s.z
q=document
p=W.Z
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a1(q,"contextmenu",H.k(s.gf5(),o),!1,p))
r=s.z
n=W.m
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a1(a,"focus",H.k(s.gfb(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a1(a,"blur",H.k(s.gf_(),m),!1,n))
r=s.z
l=W.aS
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a1(q,"keyup",H.k(s.gff(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a1(q,"keydown",H.k(s.gfd(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a1(a,"mousedown",H.k(s.gfi(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a1(a,"mouseup",H.k(s.gfm(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a1(a,"mousemove",H.k(s.gfk(),o),!1,p))
l=s.z
k=W.b_;(l&&C.a).h(l,W.a1(a,H.D(W.mW(a)),H.k(s.gfo(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a1(q,"mousemove",H.k(s.gf7(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a1(q,"mouseup",H.k(s.gf9(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a1(q,"pointerlockchange",H.k(s.gfq(),m),!1,n))
n=s.z
m=W.aK
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a1(a,"touchstart",H.k(s.gfC(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a1(a,"touchend",H.k(s.gfw(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a1(a,"touchmove",H.k(s.gfA(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ae(Date.now(),!1)
u.cy=0
u.cM()
return u},
fc:function fc(){},
af:function af(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dO:function dO(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){this.a=a}},Z={
lM:function(a,b,c){var u
H.o(c,"$ib",[P.n],"$ab")
u=a.createBuffer()
C.c.ae(a,b,u)
C.c.d_(a,b,new Int16Array(H.jW(c)),35044)
C.c.ae(a,b,null)
return new Z.e1(b,u)},
aw:function(a){return new Z.cz(a)},
e1:function e1(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iZ:function iZ(a){this.a=a},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.a=a}},D={
R:function(){var u=new D.cb()
u.saj(null)
u.saM(null)
u.c=null
u.d=0
return u},
fg:function fg(){},
cb:function cb(){var _=this
_.d=_.c=_.b=_.a=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
dh:function dh(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
di:function di(a,b,c,d){var _=this
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
_.$ti=e}},X={d4:function d4(a,b){this.a=a
this.b=b},dp:function dp(a,b){this.a=a
this.b=b},fV:function fV(){var _=this
_.d=_.c=_.b=_.a=null},dt:function dt(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hf:function hf(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cj:function cj(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hu:function hu(){},dQ:function dQ(a,b,c,d,e,f,g,h,i){var _=this
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
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dX:function dX(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mY:function(a,b,c,d,e,f,g){var u,t
u=new X.fL()
t=new V.bC(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.lx
if(t==null){t=V.lw(0,0,1,1)
$.lx=t}u.r=t
return u},
d5:function d5(){},
fL:function fL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){}},V={
oD:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b0(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.e.dE(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
k1:function(a,b,c){var u,t,s,r,q
H.o(a,"$ib",[P.B],"$ab")
u=H.e([],[P.d])
for(t=0,s=0;s<4;++s){r=V.V(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.i(u,q)
C.a.m(u,q,C.b.a9(u[q],t))}return u},
l_:function(a,b){return C.e.ix(Math.pow(b,C.V.bT(Math.log(H.ob(a))/Math.log(b))))},
h8:function(){var u=$.ln
if(u==null){u=V.b6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ln=u}return u},
b6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bp:function(){var u=$.ls
if(u==null){u=new V.ac(0,0)
$.ls=u}return u},
lw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dE(a,b,c,d)},
e0:function(){var u=$.lL
if(u==null){u=new V.a7(0,0,0)
$.lL=u}return u},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA:function fA(a){this.a=a},
bn:function bn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
T:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.ab("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.hz()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.hJ()
u.ea(a)
return u},
ig:function(){var u,t
u=new V.ie()
t=P.d
u.sfX(new H.aC([t,V.cr]))
u.sh1(new H.aC([t,V.cv]))
u.c=null
return u},
b2:function b2(){},
an:function an(){},
du:function du(){},
ai:function ai(){this.a=null},
hz:function hz(){this.b=this.a=null},
hJ:function hJ(){this.a=null},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b){this.a=a
this.b=b
this.c=null},
ie:function ie(){this.c=this.b=this.a=null},
cw:function cw(a){this.b=a
this.a=this.c=null},
oz:function(a){P.ns(C.R,new V.kp(a))},
np:function(a,b){var u=new V.hN()
u.ec(a,!0)
return u},
bh:function bh(){},
kp:function kp(a){this.a=a},
fq:function fq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hs:function hs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hw:function hw(a,b){this.a=a
this.b=b
this.c=null},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(){this.b=this.a=null},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
hQ:function hQ(a){this.a=a},
i6:function i6(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(){}},U={
kx:function(){var u=new U.fh()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
fh:function fh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){this.b=this.a=null},
ce:function ce(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dY:function dY(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={db:function db(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kI:function(a,b,c,d,e){var u=new A.iq(a,b,c,e)
u.f=d
u.sh9(P.n5(d,0,!1,P.n))
return u},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
cq:function cq(){},
dR:function dR(){},
ix:function ix(a){this.a=a},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ok:function(a,b,c){var u={}
u.a=b
u.a=new F.k3()
return F.oB(c,a,new F.k4(u),null)},
oB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.aZ,P.B,P.B]})
if(a<1)return
if(b<1)return
u=new F.dG()
t=new F.iP(u)
t.b=!1
s=[F.aZ]
t.sha(H.e([],s))
u.a=t
t=new F.hM(u)
t.sbE(H.e([],[F.bJ]))
u.b=t
t=new F.hL(u)
t.seN(H.e([],[F.b5]))
u.c=t
t=new F.hK(u)
t.seB(H.e([],[F.a5]))
u.d=t
u.e=null
r=H.e([],s)
P.bY("FLAG A\n")
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.kL(null,null,new V.bC(s,0,0,1),null,null,new V.ac(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.bR(d))}P.bY("FLAG B\n")
for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.kL(null,null,new V.bC(j,i,h,1),null,null,new V.ac(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.bR(d))}}P.bY("FLAG C\n")
u.d.hd(a+1,b+1,r)
P.bY("FLAG D\n")
return u},
fE:function(a,b,c){var u,t
u=new F.a5()
t=a.a
if(t==null)H.W(P.ab("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.W(P.ab("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
kL:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aZ()
t=new F.iU(u)
t.sbE(H.e([],[F.bJ]))
u.b=t
t=new F.iT(u)
s=[F.b5]
t.seO(H.e([],s))
t.seP(H.e([],s))
u.c=t
t=new F.iQ(u)
s=[F.a5]
t.seC(H.e([],s))
t.seD(H.e([],s))
t.seE(H.e([],s))
u.d=t
h=$.mu()
u.e=0
t=$.bb()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.ba().a)!==0?e:null
u.x=(s&$.b9().a)!==0?b:null
u.y=(s&$.bc().a)!==0?f:null
u.z=(s&$.c1().a)!==0?g:null
u.Q=(s&$.mv().a)!==0?c:null
u.ch=(s&$.bd().a)!==0?i:0
u.cx=(s&$.c0().a)!==0?a:null
return u},
k3:function k3(){},
k4:function k4(a){this.a=a},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b5:function b5(){this.b=this.a=null},
bJ:function bJ(){},
dG:function dG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
aZ:function aZ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
iP:function iP(a){this.a=a
this.c=this.b=null},
iQ:function iQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a
this.c=this.b=null},
iU:function iU(a){this.a=a
this.b=null}},T={i5:function i5(){},dN:function dN(){},i9:function i9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ia:function ia(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ib:function ib(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u=V.np("Test 008",!0)
t=W.kw(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.f.u(u.a,t)
s=[P.d]
u.cV(H.e(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."],s))
u.hb(H.e(["bumpMaps","scalars"],s))
u.cV(H.e(["\xab[Back to Tests|../]"],s))
s=document
r=C.n.bg(s,"testCanvas")
if(r==null)H.W(P.ab("Failed to find an element with the identifier, testCanvas."))
q=E.nr(r,!0,!0,!0,!1)
p=F.ok(50,null,50)
o=p.e
if(o!=null)++o.d
p.d.bO()
p.a.bO()
o=p.e
if(o!=null)o.aZ(0)
o=p.e
if(o!=null)++o.d
p.d.bM()
p.a.bM()
o=p.e
if(o!=null)o.aZ(0)
p.d.ik()
for(n=p.a.c.length-1;n>=0;--n){o=p.a.c
if(n>=o.length)return H.i(o,n)
m=o[n]
if(m.ch!==0){m.ch=0
o=m.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}l=m.hp()
if(l.ch!==1){l.ch=1
o=l.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}p.a.h(0,l)
o=p.c.a
o.a.h(0,m)
o.a.h(0,l)
o=new F.b5()
k=m.a
if(k==null)H.W(P.ab("May not create a line with a start vertex which is not attached to a shape."))
if(k!=l.a)H.W(P.ab("May not create a line with vertices attached to different shapes."))
o.a=m
C.a.h(m.c.b,o)
o.b=l
C.a.h(l.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.I(null)}j=new T.d3()
j.c=1
j.sa4(0.5)
i=E.li(null,!0,null,"",null,null)
i.scb(0,p)
i.sdC(j)
h=E.li(null,!0,null,"",null,null)
h.y.h(0,i)
o=new U.ce()
o.ce(U.a9)
o.bj(o.geY(),o.gfu())
o.e=null
o.f=V.h8()
o.r=0
k=q.r
g=new U.dZ()
f=U.kx()
f.sc7(0,!0)
f.sbY(6.283185307179586)
f.sc_(0)
f.sa2(0,0)
f.sbZ(100)
f.sR(0)
f.sbS(0.5)
g.b=f
e=g.gav()
f.gv().h(0,e)
f=U.kx()
f.sc7(0,!0)
f.sbY(6.283185307179586)
f.sc_(0)
f.sa2(0,0)
f.sbZ(100)
f.sR(0)
f.sbS(0.5)
g.c=f
f.gv().h(0,e)
g.d=null
g.e=!1
g.f=!1
g.r=!1
g.x=2.5
g.y=2.5
g.z=2
g.Q=4
g.cx=!1
g.ch=!1
g.cy=0
g.db=0
g.dx=null
g.dy=0
g.fr=null
g.fx=null
d=new X.ao(!1,!1,!1)
c=g.d
g.d=d
f=[X.ao]
e=new D.O("modifiers",c,d,g,f)
e.b=!0
g.N(e)
e=g.f
if(e!==!1){g.f=!1
e=new D.O("invertX",e,!1,g,[P.N])
e.b=!0
g.N(e)}e=g.r
if(e!==!0){g.r=!0
e=new D.O("invertY",e,!0,g,[P.N])
e.b=!0
g.N(e)}g.aQ(k)
o.h(0,g)
k=q.r
g=new U.dY()
e=U.kx()
e.sc7(0,!0)
e.sbY(6.283185307179586)
e.sc_(0)
e.sa2(0,0)
e.sbZ(100)
e.sR(0)
e.sbS(0.2)
g.b=e
e.gv().h(0,g.gav())
g.c=null
g.d=!1
g.e=2.5
g.f=2
g.r=4
g.y=!1
g.x=!1
g.z=0
g.Q=null
g.ch=0
g.cx=null
g.cy=null
d=new X.ao(!0,!1,!1)
c=g.c
g.c=d
e=new D.O("modifiers",c,d,g,f)
e.b=!0
g.N(e)
g.aQ(k)
o.h(0,g)
k=q.r
g=new U.e_()
g.c=0.01
g.d=0
g.e=0
d=new X.ao(!1,!1,!1)
g.b=d
f=new D.O("modifiers",null,d,g,f)
f.b=!0
g.N(f)
g.aQ(k)
o.h(0,g)
h.saV(o)
o=new M.db()
o.ses(0,O.le(E.af))
o.d.bj(o.gf1(),o.gf3())
o.e=null
o.f=null
o.r=null
o.x=null
b=X.mY(!0,!0,!1,null,2000,null,0)
a=new X.dA()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.saV(null)
k=a.c
if(!(Math.abs(k-1.0471975511965976)<$.Q().a)){a.c=1.0471975511965976
k=new D.O("fov",k,1.0471975511965976,a,[P.B])
k.b=!0
a.at(k)}k=a.d
if(!(Math.abs(k-0.1)<$.Q().a)){a.d=0.1
k=new D.O("near",k,0.1,a,[P.B])
k.b=!0
a.at(k)}k=a.e
if(!(Math.abs(k-2000)<$.Q().a)){a.e=2000
k=new D.O("far",k,2000,a,[P.B])
k.b=!0
a.at(k)}k=o.a
if(k!==a){if(k!=null)k.gv().T(0,o.gar())
c=o.a
o.a=a
a.gv().h(0,o.gar())
k=new D.O("camera",c,o.a,o,[X.d5])
k.b=!0
o.as(k)}k=o.b
if(k!==b){if(k!=null)k.gv().T(0,o.gar())
c=o.b
o.b=b
b.gv().h(0,o.gar())
k=new D.O("target",c,o.b,o,[X.dL])
k.b=!0
o.as(k)}o.d.h(0,h)
k=o.a
a0=V.b6(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
g=new U.d6()
g.a=a0
k.saV(g)
k=q.d
if(k!==o){if(k!=null)k.gv().T(0,q.gcf())
q.d=o
o.gv().h(0,q.gcf())
q.cg()}o=new V.i6("bumpMaps",!0,new T.kb(j,q))
k=C.n.bg(s,"bumpMaps")
o.c=k
if(k==null)H.W("Failed to find bumpMaps for Texture2DGroup")
o.a0(0,"../resources/BumpMap1.png",!0)
o.h(0,"../resources/BumpMap2.png")
o.h(0,"../resources/BumpMap3.png")
o.h(0,"../resources/BumpMap4.png")
o.h(0,"../resources/BumpMap5.png")
o.h(0,"../resources/ScrewBumpMap.png")
o.h(0,"../resources/CtrlPnlBumpMap.png")
o=new V.hw("scalars",!0)
s=C.n.bg(s,"scalars")
o.c=s
if(s==null)H.W("Failed to find scalars for RadioGroup")
o.a0(0,"0.1",new T.kc(j))
o.a0(0,"0.2",new T.kd(j))
o.a0(0,"0.3",new T.kf(j))
o.a0(0,"0.4",new T.kg(j))
o.cT(0,"0.5",new T.kh(j),!0)
o.a0(0,"0.6",new T.ki(j))
o.a0(0,"0.7",new T.kj(j))
o.a0(0,"0.8",new T.kk(j))
o.a0(0,"0.9",new T.kl(j))
o.a0(0,"1.0",new T.km(j))
s=q.z
if(s==null){s=D.R()
q.z=s}o={func:1,ret:-1,args:[D.y]}
k=H.k(new T.ke(u,j),o)
if(s.b==null)s.saM(H.e([],[o]))
s=s.b;(s&&C.a).h(s,k)
V.oz(q)},
fe:function fe(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d3:function d3(){var _=this
_.d=_.c=_.b=_.a=null},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kC.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gF:function(a){return H.co(a)},
i:function(a){return"Instance of '"+H.bL(a)+"'"}}
J.fS.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iN:1}
J.dl.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$iF:1}
J.dn.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.hr.prototype={}
J.cx.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.mi()]
if(u==null)return this.e5(a)
return"JavaScript function for "+H.j(J.al(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibl:1}
J.aR.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.W(P.E("add"))
a.push(b)},
T:function(a,b){var u
if(!!a.fixed$length)H.W(P.E("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aN(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.m(u,t,H.j(a[t]))
return u.join(b)},
hU:function(a){return this.l(a,"")},
hM:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aN(a))}return t},
hL:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aN(a))}throw H.c(H.kA())},
hK:function(a,b){return this.hL(a,b,null)},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
e2:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a6(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a6(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.r(a,0)])
return H.e(a.slice(b,c),[H.r(a,0)])},
gaf:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kA())},
cW:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aN(a))}return!1},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.kz(a,"[","]")},
gS:function(a){return new J.am(a,a.length,0,[H.r(a,0)])},
gF:function(a){return H.co(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.W(P.E("set length"))
if(b<0)throw H.c(P.a6(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(b>=a.length||b<0)throw H.c(H.bW(a,b))
return a[b]},
m:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.W(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bW(a,b))
a[b]=c},
$il:1,
$ib:1}
J.kB.prototype={}
J.am.prototype={
gH:function(a){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.I(u))
s=this.c
if(s>=t){this.sck(null)
return!1}this.sck(u[s]);++this.c
return!0},
sck:function(a){this.d=H.x(a,H.r(this,0))},
$iaQ:1}
J.dm.prototype={
ix:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.E(""+a+".toInt()"))},
bT:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
dE:function(a,b){var u,t
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b_:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.W(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.i(t,1)
u=t[1]
if(3>=s)return H.i(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.q("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
b0:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
ay:function(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
ax:function(a,b){var u
if(a>0)u=this.cN(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fW:function(a,b){if(b<0)throw H.c(H.az(b))
return this.cN(a,b)},
cN:function(a,b){return b>31?0:a>>>b},
$iB:1,
$iX:1}
J.dk.prototype={$in:1}
J.dj.prototype={}
J.bH.prototype={
V:function(a,b){if(b<0)throw H.c(H.bW(a,b))
if(b>=a.length)H.W(H.bW(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.bW(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(typeof b!=="string")throw H.c(P.ku(b,null,null))
return a+b},
aE:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.W(H.az(b))
c=P.br(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.W(H.az(c))
if(typeof c!=="number")return c.U()
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
X:function(a,b){return this.a6(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.W(H.az(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.c(P.hy(b,null,null))
if(b>c)throw H.c(P.hy(b,null,null))
if(c>a.length)throw H.c(P.hy(c,null,null))
return a.substring(b,c)},
ah:function(a,b){return this.p(a,b,null)},
iA:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
i8:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
a9:function(a,b){return this.i8(a,b," ")},
df:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
de:function(a,b){return this.df(a,b,0)},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilq:1,
$id:1}
H.q.prototype={
gk:function(a){return this.a.length},
n:function(a,b){return C.b.V(this.a,b)},
$acy:function(){return[P.n]},
$au:function(){return[P.n]},
$al:function(){return[P.n]},
$ab:function(){return[P.n]}}
H.fx.prototype={}
H.bI.prototype={
gS:function(a){return new H.cg(this,this.gk(this),0,[H.ah(this,"bI",0)])},
be:function(a,b){return this.e4(0,H.k(b,{func:1,ret:P.N,args:[H.ah(this,"bI",0)]}))}}
H.cg.prototype={
gH:function(a){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.cR(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.aN(u))
r=this.c
if(r>=s){this.saJ(null)
return!1}this.saJ(t.G(u,r));++this.c
return!0},
saJ:function(a){this.d=H.x(a,H.r(this,0))},
$iaQ:1}
H.h5.prototype={
gS:function(a){return new H.h6(J.be(this.a),this.b,this.$ti)},
gk:function(a){return J.ar(this.a)},
G:function(a,b){return this.b.$1(J.f2(this.a,b))},
$al:function(a,b){return[b]}}
H.h6.prototype={
w:function(){var u=this.b
if(u.w()){this.saJ(this.c.$1(u.gH(u)))
return!0}this.saJ(null)
return!1},
gH:function(a){return this.a},
saJ:function(a){this.a=H.x(a,H.r(this,1))},
$aaQ:function(a,b){return[b]}}
H.h7.prototype={
gk:function(a){return J.ar(this.a)},
G:function(a,b){return this.b.$1(J.f2(this.a,b))},
$abI:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cA.prototype={
gS:function(a){return new H.j_(J.be(this.a),this.b,this.$ti)}}
H.j_.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bD.prototype={}
H.cy.prototype={
m:function(a,b,c){H.x(c,H.ah(this,"cy",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.dV.prototype={}
H.fj.prototype={
i:function(a){return P.kG(this)},
m:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.mS()},
$iA:1}
H.fk.prototype={
gk:function(a){return this.a},
b6:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.b6(0,b))return
return this.cA(b)},
cA:function(a){return this.b[H.D(a)]},
D:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.cA(q),u))}}}
H.hA.prototype={}
H.il.prototype={
a8:function(a){var u,t,s
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
H.hn.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fU.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.iD.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kq.prototype={
$1:function(a){if(!!J.K(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eA.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaj:1}
H.c6.prototype={
i:function(a){return"Closure '"+H.bL(this).trim()+"'"},
$ibl:1,
giG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i2.prototype={}
H.hU.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c_(u)+"'"}}
H.c4.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var u,t
u=this.c
if(u==null)t=H.co(this.a)
else t=typeof u!=="object"?J.cX(u):H.co(u)
return(t^H.co(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bL(u)+"'")}}
H.io.prototype={
i:function(a){return this.a}}
H.ff.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aC.prototype={
gk:function(a){return this.a},
ghT:function(a){return this.a===0},
gY:function(a){return new H.fY(this,[H.r(this,0)])},
b6:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cv(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cv(t,b)}else return this.hQ(b)},
hQ:function(a){var u=this.d
if(u==null)return!1
return this.bW(this.bs(u,this.bV(a)),a)>=0},
n:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b2(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b2(r,b)
s=t==null?null:t.b
return s}else return this.hR(b)},
hR:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bs(u,this.bV(a))
s=this.bW(t,a)
if(s<0)return
return t[s].b},
m:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bC()
this.b=u}this.cm(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bC()
this.c=t}this.cm(t,b,c)}else this.hS(b,c)},
hS:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.bC()
this.d=u}t=this.bV(a)
s=this.bs(u,t)
if(s==null)this.bH(u,t,[this.bD(a,b)])
else{r=this.bW(s,a)
if(r>=0)s[r].b=b
else s.push(this.bD(a,b))}},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aN(this))
u=u.c}},
cm:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.b2(a,b)
if(u==null)this.bH(a,b,this.bD(b,c))
else u.b=c},
eV:function(){this.r=this.r+1&67108863},
bD:function(a,b){var u,t
u=new H.fX(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.eV()
return u},
bV:function(a){return J.cX(a)&0x3ffffff},
bW:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1},
i:function(a){return P.kG(this)},
b2:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
ey:function(a,b){delete a[b]},
cv:function(a,b){return this.b2(a,b)!=null},
bC:function(){var u=Object.create(null)
this.bH(u,"<non-identifier-key>",u)
this.ey(u,"<non-identifier-key>")
return u}}
H.fX.prototype={}
H.fY.prototype={
gk:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.fZ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fZ.prototype={
gH:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aN(u))
else{u=this.c
if(u==null){this.scl(null)
return!1}else{this.scl(u.a)
this.c=this.c.c
return!0}}},
scl:function(a){this.d=H.x(a,H.r(this,0))},
$iaQ:1}
H.k6.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.k7.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.k8.prototype={
$1:function(a){return this.a(H.D(a))},
$S:30}
H.fT.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilq:1,
$inl:1}
H.ck.prototype={$ick:1}
H.bo.prototype={$ibo:1,$int:1}
H.dv.prototype={
gk:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cl.prototype={
n:function(a,b){H.b1(b,a,a.length)
return a[b]},
m:function(a,b,c){H.og(c)
H.b1(b,a,a.length)
a[b]=c},
$abD:function(){return[P.B]},
$au:function(){return[P.B]},
$il:1,
$al:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.dw.prototype={
m:function(a,b,c){H.a_(c)
H.b1(b,a,a.length)
a[b]=c},
$abD:function(){return[P.n]},
$au:function(){return[P.n]},
$il:1,
$al:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]}}
H.hg.prototype={
n:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.hh.prototype={
n:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.hi.prototype={
n:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.hj.prototype={
n:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.hk.prototype={
n:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.dx.prototype={
gk:function(a){return a.length},
n:function(a,b){H.b1(b,a,a.length)
return a[b]},
$ioZ:1}
H.cm.prototype={
gk:function(a){return a.length},
n:function(a,b){H.b1(b,a,a.length)
return a[b]},
$icm:1,
$iJ:1}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
H.cH.prototype={}
P.j1.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.j0.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.j2.prototype={
$0:function(){this.a.$0()},
$S:0}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eH.prototype={
ej:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bV(new P.jH(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
ek:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bV(new P.jG(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$iaW:1}
P.jH.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jG.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.e8(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b0.prototype={
hZ:function(a){if(this.c!==6)return!0
return this.b.b.c5(H.k(this.d,{func:1,ret:P.N,args:[P.L]}),a.a,P.N,P.L)},
hP:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.f_(u,{func:1,args:[P.L,P.aj]}))return H.kX(r.iq(u,a.a,a.b,null,t,P.aj),s)
else return H.kX(r.c5(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.ax.prototype={
dD:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.U
if(t!==C.h){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.o3(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ax(0,$.U,[c])
r=b==null?1:3
this.cn(new P.b0(s,r,a,b,[u,c]))
return s},
iw:function(a,b){return this.dD(a,null,b)},
cn:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ib0")
this.c=a}else{if(u===2){t=H.f(this.c,"$iax")
u=t.a
if(u<4){t.cn(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jZ(null,null,u,H.k(new P.jc(this,a),{func:1,ret:-1}))}},
cK:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ib0")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iax")
t=p.a
if(t<4){p.cK(a)
return}this.a=t
this.c=p.c}u.a=this.b3(a)
t=this.b
t.toString
P.jZ(null,null,t,H.k(new P.jg(u,this),{func:1,ret:-1}))}},
bG:function(){var u=H.f(this.c,"$ib0")
this.c=null
return this.b3(u)},
b3:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cs:function(a){var u,t,s
u=H.r(this,0)
H.kX(a,{futureOr:1,type:u})
t=this.$ti
if(H.cQ(a,"$icd",t,"$acd"))if(H.cQ(a,"$iax",t,null))P.lN(a,this)
else P.nF(a,this)
else{s=this.bG()
H.x(a,u)
this.a=4
this.c=a
P.cD(this,s)}},
ct:function(a,b){var u
H.f(b,"$iaj")
u=this.bG()
this.a=8
this.c=new P.ad(a,b)
P.cD(this,u)},
$icd:1}
P.jc.prototype={
$0:function(){P.cD(this.a,this.b)},
$S:0}
P.jg.prototype={
$0:function(){P.cD(this.b,this.a.a)},
$S:0}
P.jd.prototype={
$1:function(a){var u=this.a
u.a=0
u.cs(a)},
$S:24}
P.je.prototype={
$2:function(a,b){H.f(b,"$iaj")
this.a.ct(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.jf.prototype={
$0:function(){this.a.ct(this.b,this.c)},
$S:0}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dB(H.k(r.d,{func:1}),null)}catch(q){t=H.aa(q)
s=H.bX(q)
if(this.d){r=H.f(this.a.a.c,"$iad").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iad")
else p.b=new P.ad(t,s)
p.a=!0
return}if(!!J.K(u).$icd){if(u instanceof P.ax&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iad")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.iw(new P.jk(o),null)
r.a=!1}},
$S:3}
P.jk.prototype={
$1:function(a){return this.a},
$S:51}
P.ji.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.c5(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aa(o)
t=H.bX(o)
s=this.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.jh.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iad")
r=this.c
if(r.hZ(u)&&r.e!=null){q=this.b
q.b=r.hP(u)
q.a=!1}}catch(p){t=H.aa(p)
s=H.bX(p)
r=H.f(this.a.a.c,"$iad")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.e2.prototype={}
P.hX.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.ax(0,$.U,[P.n])
u.a=0
s=H.r(this,0)
r=H.k(new P.hZ(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.i_(u,t),{func:1,ret:-1})
W.a1(this.a,this.b,r,!1,s)
return t}}
P.hZ.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}}
P.i_.prototype={
$0:function(){this.b.cs(this.a.a)},
$S:0}
P.ct.prototype={}
P.hY.prototype={}
P.aW.prototype={}
P.ad.prototype={
i:function(a){return H.j(this.a)},
$ibk:1}
P.jR.prototype={$ipd:1}
P.jY.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dz()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jq.prototype={
ir:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.h===$.U){a.$0()
return}P.lZ(null,null,this,a,-1)}catch(s){u=H.aa(s)
t=H.bX(s)
P.jX(null,null,this,u,H.f(t,"$iaj"))}},
is:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.h===$.U){a.$1(b)
return}P.m_(null,null,this,a,b,-1,c)}catch(s){u=H.aa(s)
t=H.bX(s)
P.jX(null,null,this,u,H.f(t,"$iaj"))}},
hi:function(a,b){return new P.js(this,H.k(a,{func:1,ret:b}),b)},
bK:function(a){return new P.jr(this,H.k(a,{func:1,ret:-1}))},
cY:function(a,b){return new P.jt(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dB:function(a,b){H.k(a,{func:1,ret:b})
if($.U===C.h)return a.$0()
return P.lZ(null,null,this,a,b)},
c5:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.U===C.h)return a.$1(b)
return P.m_(null,null,this,a,b,c,d)},
iq:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.U===C.h)return a.$2(b,c)
return P.o4(null,null,this,a,b,c,d,e,f)}}
P.js.prototype={
$0:function(){return this.a.dB(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jr.prototype={
$0:function(){return this.a.ir(this.b)},
$S:3}
P.jt.prototype={
$1:function(a){var u=this.c
return this.a.is(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jo.prototype={
gS:function(a){var u=new P.eh(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ibR")!=null}else{t=this.eu(b)
return t}},
eu:function(a){var u=this.d
if(u==null)return!1
return this.bq(this.cB(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kN()
this.b=u}return this.cp(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kN()
this.c=t}return this.cp(t,b)}else return this.em(0,b)},
em:function(a,b){var u,t,s
H.x(b,H.r(this,0))
u=this.d
if(u==null){u=P.kN()
this.d=u}t=this.cu(b)
s=u[t]
if(s==null)u[t]=[this.bn(b)]
else{if(this.bq(s,b)>=0)return!1
s.push(this.bn(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fJ(this.c,b)
else return this.fG(0,b)},
fG:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.cB(u,b)
s=this.bq(t,b)
if(s<0)return!1
this.cQ(t.splice(s,1)[0])
return!0},
cp:function(a,b){H.x(b,H.r(this,0))
if(H.f(a[b],"$ibR")!=null)return!1
a[b]=this.bn(b)
return!0},
fJ:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ibR")
if(u==null)return!1
this.cQ(u)
delete a[b]
return!0},
cr:function(){this.r=1073741823&this.r+1},
bn:function(a){var u,t
u=new P.bR(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cr()
return u},
cQ:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cr()},
cu:function(a){return J.cX(a)&1073741823},
cB:function(a,b){return a[this.cu(b)]},
bq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1}}
P.bR.prototype={}
P.eh.prototype={
gH:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aN(u))
else{u=this.c
if(u==null){this.scq(null)
return!1}else{this.scq(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
scq:function(a){this.d=H.x(a,H.r(this,0))},
$iaQ:1}
P.h_.prototype={
$2:function(a,b){this.a.m(0,H.x(a,this.b),H.x(b,this.c))},
$S:5}
P.h0.prototype={$il:1,$ib:1}
P.u.prototype={
gS:function(a){return new H.cg(a,this.gk(a),0,[H.bv(this,a,"u",0)])},
G:function(a,b){return this.n(a,b)},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.bv(this,a,"u",0)]})
u=this.gk(a)
for(t=0;t<u;++t){b.$1(this.n(a,t))
if(u!==this.gk(a))throw H.c(P.aN(a))}},
iz:function(a,b){var u,t
u=H.e([],[H.bv(this,a,"u",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.m(u,t,this.n(a,t))
return u},
iy:function(a){return this.iz(a,!0)},
hI:function(a,b,c,d){var u
H.x(d,H.bv(this,a,"u",0))
P.br(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kz(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:5}
P.a8.prototype={
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.bv(this,a,"a8",0),H.bv(this,a,"a8",1)]})
for(u=J.be(this.gY(a));u.w();){t=u.gH(u)
b.$2(t,this.n(a,t))}},
gk:function(a){return J.ar(this.gY(a))},
i:function(a){return P.kG(a)},
$iA:1}
P.jI.prototype={
m:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.h4.prototype={
n:function(a,b){return J.l4(this.a,b)},
m:function(a,b,c){J.kr(this.a,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
D:function(a,b){J.l6(this.a,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gk:function(a){return J.ar(this.a)},
i:function(a){return J.al(this.a)},
$iA:1}
P.dW.prototype={}
P.jv.prototype={
ac:function(a,b){var u
for(u=J.be(H.o(b,"$il",this.$ti,"$al"));u.w();)this.h(0,u.gH(u))},
i:function(a){return P.kz(this,"{","}")},
G:function(a,b){var u,t,s
if(b<0)H.W(P.a6(b,0,null,"index",null))
for(u=P.nJ(this,this.r,H.r(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.S(b,this,"index",null,t))},
$il:1,
$ily:1}
P.ei.prototype={}
P.eN.prototype={}
P.fa.prototype={
i_:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.br(c,a0,b.length,null,null,null)
u=$.mx()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.k5(C.b.C(b,n))
j=H.k5(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.i(u,i)
h=u[i]
if(h>=0){i=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.p(b,s,t)
r.a=g+H.bM(m)
s=n
continue}}throw H.c(P.Y("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.p(b,s,a0)
f=g.length
if(q>=0)P.l9(b,p,a0,q,o,f)
else{e=C.d.b0(f-1,4)+1
if(e===1)throw H.c(P.Y("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aE(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.l9(b,p,a0,q,o,d)
else{e=C.d.b0(d,4)
if(e===1)throw H.c(P.Y("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.b.aE(b,a0,a0,e===2?"==":"=")}return b},
$abB:function(){return[[P.b,P.n],P.d]}}
P.fb.prototype={
$abi:function(){return[[P.b,P.n],P.d]}}
P.bB.prototype={}
P.bi.prototype={}
P.fz.prototype={
$abB:function(){return[P.d,[P.b,P.n]]}}
P.fP.prototype={
i:function(a){return this.a}}
P.fO.prototype={
ev:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.i(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.ak("")
if(r>b)q.a+=C.b.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mJ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abi:function(){return[P.d,P.d]}}
P.iM.prototype={
ghH:function(){return C.P}}
P.iO.prototype={
aR:function(a,b,c){var u,t,s
c=P.br(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jP(t)
if(s.eF(a,b,c)!==c)s.cR(J.mD(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nZ(0,s.b,t.length)))},
bQ:function(a){return this.aR(a,0,null)},
$abi:function(){return[P.d,[P.b,P.n]]}}
P.jP.prototype={
cR:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.i(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.i(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.i(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.i(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.i(u,t)
u[t]=128|a&63
return!1}},
eF:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cR(r,C.b.C(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.i(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.i(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.i(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.i(u,q)
u[q]=128|r&63}}return s}}
P.iN.prototype={
aR:function(a,b,c){var u,t,s,r
H.o(a,"$ib",[P.n],"$ab")
u=P.nw(!1,a,b,c)
if(u!=null)return u
c=P.br(b,c,J.ar(a),null,null,null)
t=new P.ak("")
s=new P.jN(!1,t)
s.aR(a,b,c)
if(s.e>0){H.W(P.Y("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bM(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
bQ:function(a){return this.aR(a,0,null)},
$abi:function(){return[[P.b,P.n],P.d]}}
P.jN.prototype={
aR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.o(a,"$ib",[P.n],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jO(this,b,c,a)
$label0$0:for(q=J.cR(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.n(a,o)
if(typeof n!=="number")return n.bf()
if((n&192)!==128){m=P.Y("Bad UTF-8 encoding 0x"+C.d.b_(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.i(C.D,m)
if(u<=C.D[m]){m=P.Y("Overlong encoding of 0x"+C.d.b_(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.Y("Character outside valid Unicode range: 0x"+C.d.b_(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bM(u)
this.c=!1}for(m=o<c;m;){l=P.o5(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.n(a,k)
if(typeof n!=="number")return n.U()
if(n<0){i=P.Y("Negative UTF-8 code unit: -0x"+C.d.b_(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.Y("Bad UTF-8 encoding 0x"+C.d.b_(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jO.prototype={
$2:function(a,b){this.a.b.a+=P.dI(this.d,a,b)},
$S:50}
P.N.prototype={}
P.ae.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ae&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.d.ax(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mT(H.ng(this))
t=P.d7(H.ne(this))
s=P.d7(H.na(this))
r=P.d7(H.nb(this))
q=P.d7(H.nd(this))
p=P.d7(H.nf(this))
o=P.mU(H.nc(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.B.prototype={}
P.bj.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fw()
t=this.a
if(t<0)return"-"+new P.bj(0-t).i(0)
s=u.$1(C.d.ay(t,6e7)%60)
r=u.$1(C.d.ay(t,1e6)%60)
q=new P.fv().$1(t%1e6)
return""+C.d.ay(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.fv.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.fw.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bk.prototype={}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.aA.prototype={
gbp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbo:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbp()+t+s
if(!this.a)return r
q=this.gbo()
p=P.fB(this.b)
return r+q+": "+p}}
P.bN.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fQ.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t
u=H.a_(this.b)
if(typeof u!=="number")return u.U()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gk:function(a){return this.f}}
P.iE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iB.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cs.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fi.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fB(u)+"."}}
P.hq.prototype={
i:function(a){return"Out of Memory"},
$ibk:1}
P.dH.prototype={
i:function(a){return"Stack Overflow"},
$ibk:1}
P.fp.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fK.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.p(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.C(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.V(r,m)
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
g=""}f=C.b.p(r,i,j)
return t+h+f+g+"\n"+C.b.q(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bl.prototype={}
P.n.prototype={}
P.l.prototype={
be:function(a,b){var u=H.ah(this,"l",0)
return new H.cA(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gS(this)
for(t=0;u.w();)++t
return t},
gap:function(a){var u,t
u=this.gS(this)
if(!u.w())throw H.c(H.kA())
t=u.gH(u)
if(u.w())throw H.c(H.n0())
return t},
G:function(a,b){var u,t,s
if(b<0)H.W(P.a6(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.w();){s=u.gH(u)
if(b===t)return s;++t}throw H.c(P.S(b,this,"index",null,t))},
i:function(a){return P.n_(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$il:1}
P.A.prototype={}
P.F.prototype={
gF:function(a){return P.L.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.X.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
t:function(a,b){return this===b},
gF:function(a){return H.co(this)},
i:function(a){return"Instance of '"+H.bL(this)+"'"},
toString:function(){return this.i(this)}}
P.aj.prototype={}
P.d.prototype={$ilq:1}
P.ak.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioN:1}
P.iK.prototype={
$2:function(a,b){var u,t,s,r
u=P.d
H.o(a,"$iA",[u,u],"$aA")
H.D(b)
t=J.cS(b).de(b,"=")
if(t===-1){if(b!=="")J.kr(a,P.kP(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.p(b,0,t)
r=C.b.ah(b,t+1)
u=this.a
J.kr(a,P.kP(s,0,s.length,u,!0),P.kP(r,0,r.length,u,!0))}return a},
$S:44}
P.iG.prototype={
$2:function(a,b){throw H.c(P.Y("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.iI.prototype={
$2:function(a,b){throw H.c(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:38}
P.iJ.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cT(C.b.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.U()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:39}
P.bS.prototype={
gdK:function(){return this.b},
gbU:function(a){var u=this.c
if(u==null)return""
if(C.b.X(u,"["))return C.b.p(u,1,u.length-1)
return u},
gb9:function(a){var u=this.d
if(u==null)return P.lR(this.a)
return u},
gc2:function(a){var u=this.f
return u==null?"":u},
gd8:function(){var u=this.r
return u==null?"":u},
c4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.o(h,"$iA",[P.d,null],"$aA")
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
if(s&&!C.b.X(d,"/"))d="/"+d
g=P.kO(g,0,0,h)
return new P.bS(i,j,c,f,d,g,this.r)},
c3:function(a,b){return this.c4(a,null,null,null,null,null,null,b,null,null)},
gaY:function(){var u,t
if(this.Q==null){u=this.f
t=P.d
this.sfF(new P.dW(P.lH(u==null?"":u,C.i),[t,t]))}return this.Q},
gd9:function(){return this.c!=null},
gdd:function(){return this.f!=null},
gda:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.j(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.j(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.j(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.K(b).$ikJ)if(this.a==b.gbi())if(this.c!=null===b.gd9())if(this.b==b.gdK())if(this.gbU(this)==b.gbU(b))if(this.gb9(this)==b.gb9(b))if(this.e===b.gdt(b)){u=this.f
t=u==null
if(!t===b.gdd()){if(t)u=""
if(u===b.gc2(b)){u=this.r
t=u==null
if(!t===b.gda()){if(t)u=""
u=u===b.gd8()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gF:function(a){var u=this.z
if(u==null){u=C.b.gF(this.i(0))
this.z=u}return u},
sfF:function(a){var u=P.d
this.Q=H.o(a,"$iA",[u,u],"$aA")},
$ikJ:1,
gbi:function(){return this.a},
gdt:function(a){return this.e}}
P.jJ.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.J()
throw H.c(P.Y("Invalid port",this.a,u+1))},
$S:16}
P.jK.prototype={
$1:function(a){return P.eO(C.a6,a,C.i,!1)},
$S:23}
P.jM.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.eO(C.r,a,C.i,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.eO(C.r,b,C.i,!0))}},
$S:18}
P.jL.prototype={
$2:function(a,b){var u,t
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(u=J.be(H.mb(b,"$il")),t=this.a;u.w();)t.$2(a,H.D(u.gH(u)))},
$S:36}
P.iF.prototype={
gdI:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.i(u,0)
t=this.a
u=u[0]+1
s=C.b.df(t,"?",u)
r=t.length
if(s>=0){q=P.cN(t,s+1,r,C.p,!1)
r=s}else q=null
u=new P.j7(this,"data",null,null,null,P.cN(t,u,r,C.H,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.i(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.jT.prototype={
$1:function(a){return new Uint8Array(96)},
$S:33}
P.jS.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.i(u,a)
u=u[a]
J.mE(u,0,96,b)
return u},
$S:28}
P.jU.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.C(b,t)^96
if(s>=a.length)return H.i(a,s)
a[s]=c}}}
P.jV.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.C(b,0),t=C.b.C(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.i(a,s)
a[s]=c}}}
P.jy.prototype={
gd9:function(){return this.c>0},
gdc:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.J()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdd:function(){var u=this.f
if(typeof u!=="number")return u.U()
return u<this.r},
gda:function(){return this.r<this.a.length},
gcF:function(){return this.b===4&&C.b.X(this.a,"http")},
gcG:function(){return this.b===5&&C.b.X(this.a,"https")},
gbi:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gcF()){this.x="http"
u="http"}else if(this.gcG()){this.x="https"
u="https"}else if(u===4&&C.b.X(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.X(this.a,"package")){this.x="package"
u="package"}else{u=C.b.p(this.a,0,u)
this.x=u}return u},
gdK:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.p(this.a,t,u-1):""},
gbU:function(a){var u=this.c
return u>0?C.b.p(this.a,u,this.d):""},
gb9:function(a){var u
if(this.gdc()){u=this.d
if(typeof u!=="number")return u.J()
return P.cT(C.b.p(this.a,u+1,this.e),null,null)}if(this.gcF())return 80
if(this.gcG())return 443
return 0},
gdt:function(a){return C.b.p(this.a,this.e,this.f)},
gc2:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.U()
return u<t?C.b.p(this.a,u+1,t):""},
gd8:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.ah(t,u+1):""},
gaY:function(){var u=this.f
if(typeof u!=="number")return u.U()
if(u>=this.r)return C.a7
u=P.d
return new P.dW(P.lH(this.gc2(this),C.i),[u,u])},
c4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.o(h,"$iA",[P.d,null],"$aA")
i=this.gbi()
u=i==="file"
t=this.c
j=t>0?C.b.p(this.a,this.b+3,t):""
f=this.gdc()?this.gb9(this):null
t=this.c
if(t>0)c=C.b.p(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.p(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.X(d,"/"))d="/"+d
g=P.kO(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.ah(t,s+1)
return new P.bS(i,j,c,f,d,g,b)},
c3:function(a,b){return this.c4(a,null,null,null,null,null,null,b,null,null)},
gF:function(a){var u=this.y
if(u==null){u=C.b.gF(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.K(b).$ikJ&&this.a===b.i(0)},
i:function(a){return this.a},
$ikJ:1}
P.j7.prototype={}
W.w.prototype={}
W.f3.prototype={
gk:function(a){return a.length}}
W.cY.prototype={
i:function(a){return String(a)},
$icY:1}
W.f4.prototype={
i:function(a){return String(a)}}
W.c3.prototype={$ic3:1}
W.by.prototype={$iby:1}
W.bf.prototype={$ibf:1}
W.bz.prototype={
c8:function(a,b,c){if(c!=null)return this.eG(a,b,P.oc(c,null))
return this.eH(a,b)},
dQ:function(a,b){return this.c8(a,b,null)},
eG:function(a,b,c){return a.getContext(b,c)},
eH:function(a,b){return a.getContext(b)},
$ibz:1,
$ilc:1}
W.bA.prototype={
eI:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
hE:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibA:1}
W.bg.prototype={
gk:function(a){return a.length}}
W.c7.prototype={$ic7:1}
W.fl.prototype={
gk:function(a){return a.length}}
W.M.prototype={$iM:1}
W.c8.prototype={
gk:function(a){return a.length}}
W.fm.prototype={}
W.aO.prototype={}
W.aP.prototype={}
W.fn.prototype={
gk:function(a){return a.length}}
W.fo.prototype={
gk:function(a){return a.length}}
W.fr.prototype={
gk:function(a){return a.length}}
W.as.prototype={$ias:1}
W.c9.prototype={
he:function(a,b){return a.adoptNode(b)},
bg:function(a,b){return a.getElementById(b)}}
W.fs.prototype={
i:function(a){return String(a)}}
W.d8.prototype={
ht:function(a,b){return a.createHTMLDocument(b)}}
W.d9.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.o(c,"$ia2",[P.X],"$aa2")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.a2,P.X]]},
$au:function(){return[[P.a2,P.X]]},
$il:1,
$al:function(){return[[P.a2,P.X]]},
$ib:1,
$ab:function(){return[[P.a2,P.X]]},
$az:function(){return[[P.a2,P.X]]}}
W.da.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gao(a))+" x "+H.j(this.gal(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.cQ(b,"$ia2",[P.X],"$aa2"))return!1
u=J.a3(b)
return a.left===u.gb8(b)&&a.top===u.gbc(b)&&this.gao(a)===u.gao(b)&&this.gal(a)===u.gal(b)},
gF:function(a){return W.lP(C.e.gF(a.left),C.e.gF(a.top),C.e.gF(this.gao(a)),C.e.gF(this.gal(a)))},
gcZ:function(a){return a.bottom},
gal:function(a){return a.height},
gb8:function(a){return a.left},
gdA:function(a){return a.right},
gbc:function(a){return a.top},
gao:function(a){return a.width},
$ia2:1,
$aa2:function(){return[P.X]}}
W.ft.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.d]},
$au:function(){return[P.d]},
$il:1,
$al:function(){return[P.d]},
$ib:1,
$ab:function(){return[P.d]},
$az:function(){return[P.d]}}
W.fu.prototype={
gk:function(a){return a.length}}
W.j5.prototype={
gk:function(a){return this.b.length},
n:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.f(u[b],"$iH")},
m:function(a,b,c){var u
H.f(c,"$iH")
u=this.b
if(b<0||b>=u.length)return H.i(u,b)
J.ks(this.a,c,u[b])},
h:function(a,b){J.l5(this.a,b)
return b},
gS:function(a){var u=this.iy(this)
return new J.am(u,u.length,0,[H.r(u,0)])},
$au:function(){return[W.H]},
$al:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
ghh:function(a){return new W.j8(a)},
gbP:function(a){return new W.j5(a,a.children)},
gd0:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.U()
if(s<0)s=-s*0
if(typeof r!=="number")return r.U()
if(r<0)r=-r*0
return new P.a2(u,t,s,r,[P.X])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lh
if(u==null){u=H.e([],[W.ap])
t=new W.dy(u)
C.a.h(u,W.lO(null))
C.a.h(u,W.lQ())
$.lh=t
d=t}else d=u
u=$.lg
if(u==null){u=new W.eP(d)
$.lg=u
c=u}else{u.a=d
c=u}}if($.b3==null){u=document
t=u.implementation
t=(t&&C.Q).ht(t,"")
$.b3=t
$.ky=t.createRange()
t=$.b3
t.toString
t=t.createElement("base")
H.f(t,"$ic3")
t.href=u.baseURI
u=$.b3.head;(u&&C.S).u(u,t)}u=$.b3
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$ibf")}u=$.b3
if(!!this.$ibf)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b3.body;(u&&C.l).u(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a4,a.tagName)){u=$.ky;(u&&C.J).dX(u,s)
u=$.ky
r=(u&&C.J).hr(u,b)}else{s.innerHTML=b
r=$.b3.createDocumentFragment()
for(u=J.a3(r);t=s.firstChild,t!=null;)u.u(r,t)}u=$.b3.body
if(s==null?u!=null:s!==u)J.l7(s)
c.ca(r)
C.n.he(document,r)
return r},
hs:function(a,b,c){return this.a7(a,b,c,null)},
e0:function(a,b,c,d){a.textContent=null
this.u(a,this.a7(a,b,c,d))},
e_:function(a,b){return this.e0(a,b,null,null)},
aH:function(a,b){return a.getAttribute(b)},
fH:function(a,b){return a.removeAttribute(b)},
dY:function(a,b,c){return a.setAttribute(b,c)},
$iH:1,
git:function(a){return a.tagName}}
W.fy.prototype={
$1:function(a){return!!J.K(H.f(a,"$iC")).$iH},
$S:20}
W.m.prototype={$im:1}
W.h.prototype={
hc:function(a,b,c,d){H.k(c,{func:1,args:[W.m]})
if(c!=null)this.en(a,b,c,!1)},
en:function(a,b,c,d){return a.addEventListener(b,H.bV(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ih:1}
W.at.prototype={$iat:1}
W.cc.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iat")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.at]},
$au:function(){return[W.at]},
$il:1,
$al:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$icc:1,
$az:function(){return[W.at]}}
W.fF.prototype={
gk:function(a){return a.length}}
W.fJ.prototype={
gk:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.de.prototype={}
W.df.prototype={
cL:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.bE.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iC")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$au:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibE:1,
$az:function(){return[W.C]}}
W.dg.prototype={}
W.b4.prototype={$ib4:1,
gd1:function(a){return a.data}}
W.bF.prototype={$ibF:1,$ilc:1}
W.cf.prototype={$icf:1}
W.aS.prototype={$iaS:1}
W.dq.prototype={}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.ci.prototype={}
W.h9.prototype={
gk:function(a){return a.length}}
W.ha.prototype={
n:function(a,b){return P.b8(a.get(H.D(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b8(t.value[1]))}},
gY:function(a){var u=H.e([],[P.d])
this.D(a,new W.hb(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.E("Not supported"))},
$aa8:function(){return[P.d,null]},
$iA:1,
$aA:function(){return[P.d,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hc.prototype={
n:function(a,b){return P.b8(a.get(H.D(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b8(t.value[1]))}},
gY:function(a){var u=H.e([],[P.d])
this.D(a,new W.hd(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.E("Not supported"))},
$aa8:function(){return[P.d,null]},
$iA:1,
$aA:function(){return[P.d,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aD.prototype={$iaD:1}
W.he.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaD")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aD]},
$au:function(){return[W.aD]},
$il:1,
$al:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$az:function(){return[W.aD]}}
W.Z.prototype={$iZ:1}
W.ag.prototype={
gap:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.lz("No elements"))
if(t>1)throw H.c(P.lz("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s,r,q
H.o(b,"$il",[W.C],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a3(t),q=0;q<s;++q)r.u(t,u.firstChild)
return},
m:function(a,b,c){var u,t
H.f(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.i(t,b)
J.ks(u,c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dc(u,u.length,-1,[H.bv(C.a8,u,"z",0)])},
gk:function(a){return this.a.childNodes.length},
n:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$au:function(){return[W.C]},
$al:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
ij:function(a){var u=a.parentNode
if(u!=null)J.f1(u,a)},
im:function(a,b){var u,t
try{u=a.parentNode
J.ks(u,b,a)}catch(t){H.aa(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e3(a):u},
u:function(a,b){return a.appendChild(H.f(b,"$iC"))},
fI:function(a,b){return a.removeChild(b)},
fL:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cn.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iC")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$au:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$az:function(){return[W.C]}}
W.aE.prototype={$iaE:1,
gk:function(a){return a.length}}
W.ht.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaE")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aE]},
$au:function(){return[W.aE]},
$il:1,
$al:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$az:function(){return[W.aE]}}
W.dD.prototype={
hr:function(a,b){return a.createContextualFragment(b)},
dX:function(a,b){return a.selectNodeContents(b)}}
W.hF.prototype={
n:function(a,b){return P.b8(a.get(H.D(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b8(t.value[1]))}},
gY:function(a){var u=H.e([],[P.d])
this.D(a,new W.hG(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.E("Not supported"))},
$aa8:function(){return[P.d,null]},
$iA:1,
$aA:function(){return[P.d,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hI.prototype={
gk:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.hR.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aF]},
$au:function(){return[W.aF]},
$il:1,
$al:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$az:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.hS.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aG]},
$au:function(){return[W.aG]},
$il:1,
$al:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$az:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gk:function(a){return a.length}}
W.hV.prototype={
n:function(a,b){return this.cC(a,H.D(b))},
m:function(a,b,c){this.fR(a,b,c)},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(u=0;!0;++u){t=this.eM(a,u)
if(t==null)return
b.$2(t,this.cC(a,t))}},
gY:function(a){var u=H.e([],[P.d])
this.D(a,new W.hW(u))
return u},
gk:function(a){return a.length},
cC:function(a,b){return a.getItem(b)},
eM:function(a,b){return a.key(b)},
fR:function(a,b,c){return a.setItem(b,c)},
$aa8:function(){return[P.d,P.d]},
$iA:1,
$aA:function(){return[P.d,P.d]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.au.prototype={$iau:1}
W.aV.prototype={$iaV:1}
W.dJ.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=W.mV("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ag(t).ac(0,new W.ag(u))
return t},
eK:function(a,b){return a.insertRow(b)}}
W.dK.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ag(u)
s=u.gap(u)
s.toString
u=new W.ag(s)
r=u.gap(u)
t.toString
r.toString
new W.ag(t).ac(0,new W.ag(r))
return t},
cE:function(a,b){return a.insertCell(b)}}
W.i1.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ag(u)
s=u.gap(u)
t.toString
s.toString
new W.ag(t).ac(0,new W.ag(s))
return t}}
W.cu.prototype={$icu:1}
W.aI.prototype={$iaI:1}
W.av.prototype={$iav:1}
W.i3.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iav")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.av]},
$au:function(){return[W.av]},
$il:1,
$al:function(){return[W.av]},
$ib:1,
$ab:function(){return[W.av]},
$az:function(){return[W.av]}}
W.i4.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aI]},
$au:function(){return[W.aI]},
$il:1,
$al:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$az:function(){return[W.aI]}}
W.id.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.aK.prototype={$iaK:1}
W.ii.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$il:1,
$al:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$az:function(){return[W.aJ]}}
W.ij.prototype={
gk:function(a){return a.length}}
W.bs.prototype={}
W.iL.prototype={
i:function(a){return String(a)}}
W.iX.prototype={$ilc:1}
W.iY.prototype={
gk:function(a){return a.length}}
W.b_.prototype={
ghz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
ghy:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ib_:1}
W.cB.prototype={
fM:function(a,b){return a.requestAnimationFrame(H.bV(H.k(b,{func:1,ret:-1,args:[P.X]}),1))},
ez:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cC.prototype={$icC:1}
W.j6.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iM")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.M]},
$au:function(){return[W.M]},
$il:1,
$al:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$az:function(){return[W.M]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cQ(b,"$ia2",[P.X],"$aa2"))return!1
u=J.a3(b)
return a.left===u.gb8(b)&&a.top===u.gbc(b)&&a.width===u.gao(b)&&a.height===u.gal(b)},
gF:function(a){return W.lP(C.e.gF(a.left),C.e.gF(a.top),C.e.gF(a.width),C.e.gF(a.height))},
gal:function(a){return a.height},
gao:function(a){return a.width}}
W.jl.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaB")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aB]},
$au:function(){return[W.aB]},
$il:1,
$al:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$az:function(){return[W.aB]}}
W.en.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iC")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$au:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$az:function(){return[W.C]}}
W.jz.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aH]},
$au:function(){return[W.aH]},
$il:1,
$al:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$az:function(){return[W.aH]}}
W.jC.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.f(c,"$iau")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.au]},
$au:function(){return[W.au]},
$il:1,
$al:function(){return[W.au]},
$ib:1,
$ab:function(){return[W.au]},
$az:function(){return[W.au]}}
W.j4.prototype={
D:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(u=this.gY(this),t=u.length,s=this.a,r=J.a3(s),q=0;q<u.length;u.length===t||(0,H.I)(u),++q){p=u[q]
b.$2(p,r.aH(s,p))}},
gY:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.e([],[P.d])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.i(u,r)
q=H.f(u[r],"$icC")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa8:function(){return[P.d,P.d]},
$aA:function(){return[P.d,P.d]}}
W.j8.prototype={
n:function(a,b){return J.kt(this.a,H.D(b))},
m:function(a,b,c){J.mI(this.a,b,c)},
gk:function(a){return this.gY(this).length}}
W.j9.prototype={}
W.kM.prototype={}
W.ja.prototype={}
W.jb.prototype={
$1:function(a){return this.a.$1(H.f(a,"$im"))},
$S:35}
W.bt.prototype={
eg:function(a){var u,t
u=$.l3()
if(u.ghT(u)){for(t=0;t<262;++t)u.m(0,C.a3[t],W.ol())
for(t=0;t<12;++t)u.m(0,C.w[t],W.om())}},
aA:function(a){return $.my().W(0,W.ca(a))},
ad:function(a,b,c){var u,t,s
u=W.ca(a)
t=$.l3()
s=t.n(0,H.j(u)+"::"+b)
if(s==null)s=t.n(0,"*::"+b)
if(s==null)return!1
return H.kU(s.$4(a,b,c,this))},
$iap:1}
W.z.prototype={
gS:function(a){return new W.dc(a,this.gk(a),-1,[H.bv(this,a,"z",0)])}}
W.dy.prototype={
aA:function(a){return C.a.cW(this.a,new W.hm(a))},
ad:function(a,b,c){return C.a.cW(this.a,new W.hl(a,b,c))},
$iap:1}
W.hm.prototype={
$1:function(a){return H.f(a,"$iap").aA(this.a)},
$S:14}
W.hl.prototype={
$1:function(a){return H.f(a,"$iap").ad(this.a,this.b,this.c)},
$S:14}
W.ev.prototype={
ei:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.be(0,new W.jw())
t=b.be(0,new W.jx())
this.b.ac(0,u)
s=this.c
s.ac(0,C.E)
s.ac(0,t)},
aA:function(a){return this.a.W(0,W.ca(a))},
ad:function(a,b,c){var u,t
u=W.ca(a)
t=this.c
if(t.W(0,H.j(u)+"::"+b))return this.d.hf(c)
else if(t.W(0,"*::"+b))return this.d.hf(c)
else{t=this.b
if(t.W(0,H.j(u)+"::"+b))return!0
else if(t.W(0,"*::"+b))return!0
else if(t.W(0,H.j(u)+"::*"))return!0
else if(t.W(0,"*::*"))return!0}return!1},
$iap:1}
W.jw.prototype={
$1:function(a){return!C.a.W(C.w,H.D(a))},
$S:19}
W.jx.prototype={
$1:function(a){return C.a.W(C.w,H.D(a))},
$S:19}
W.jE.prototype={
ad:function(a,b,c){if(this.e7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.kt(a,"template")==="")return this.e.W(0,b)
return!1}}
W.jF.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.D(a))},
$S:23}
W.jD.prototype={
aA:function(a){var u=J.K(a)
if(!!u.$icp)return!1
u=!!u.$ip
if(u&&W.ca(a)==="foreignObject")return!1
if(u)return!0
return!1},
ad:function(a,b,c){if(b==="is"||C.b.X(b,"on"))return!1
return this.aA(a)},
$iap:1}
W.dc.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scD(J.l4(this.a,u))
this.c=u
return!0}this.scD(null)
this.c=t
return!1},
gH:function(a){return this.d},
scD:function(a){this.d=H.x(a,H.r(this,0))},
$iaQ:1}
W.ap.prototype={}
W.ju.prototype={$ip_:1}
W.eP.prototype={
ca:function(a){new W.jQ(this).$2(a,null)},
aO:function(a,b){if(b==null)J.l7(a)
else J.f1(b,a)},
fP:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.mF(a)
s=J.kt(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aa(o)}q="element unprintable"
try{q=J.al(a)}catch(o){H.aa(o)}try{p=W.ca(a)
this.fO(H.f(a,"$iH"),b,u,q,p,H.f(t,"$iA"),H.D(s))}catch(o){if(H.aa(o) instanceof P.aA)throw o
else{this.aO(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
fO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aO(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aA(a)){this.aO(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ad(a,"is",g)){this.aO(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gY(f)
t=H.e(u.slice(0),[H.r(u,0)])
for(s=f.gY(f).length-1,u=f.a,r=J.a3(u);s>=0;--s){if(s>=t.length)return H.i(t,s)
q=t[s]
if(!this.a.ad(a,J.mK(q),r.aH(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.aH(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aH(u,q)
r.fH(u,q)}}if(!!J.K(a).$icu)this.ca(a.content)},
$ioK:1}
W.jQ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.fP(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aO(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aa(r)
q=H.f(u,"$iC")
if(s){p=q.parentNode
if(p!=null)J.f1(p,q)}else J.f1(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iC")}},
$S:40}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
P.jA.prototype={
d6:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
bd:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.K(a)
if(!!t.$iae)return new Date(a.a)
if(!!t.$inl)throw H.c(P.iC("structured clone of RegExp"))
if(!!t.$iat)return a
if(!!t.$iby)return a
if(!!t.$icc)return a
if(!!t.$ib4)return a
if(!!t.$ick||!!t.$ibo)return a
if(!!t.$iA){s=this.d6(a)
r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.m(r,s,q)
t.D(a,new P.jB(u,this))
return u.a}if(!!t.$ib){s=this.d6(a)
u=this.b
if(s>=u.length)return H.i(u,s)
q=u[s]
if(q!=null)return q
return this.hq(a,s)}throw H.c(P.iC("structured clone of other type"))},
hq:function(a,b){var u,t,s,r
u=J.cR(a)
t=u.gk(a)
s=new Array(t)
C.a.m(this.b,b,s)
for(r=0;r<t;++r)C.a.m(s,r,this.bd(u.n(a,r)))
return s}}
P.jB.prototype={
$2:function(a,b){this.a.a[a]=this.b.bd(b)},
$S:5}
P.eM.prototype={$ib4:1,
gd1:function(a){return this.a}}
P.k_.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.eE.prototype={}
P.fG.prototype={
gaL:function(){var u,t,s
u=this.b
t=H.ah(u,"u",0)
s=W.H
return new H.h5(new H.cA(u,H.k(new P.fH(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.fI(),{func:1,ret:s,args:[t]}),[t,s])},
D:function(a,b){H.k(b,{func:1,ret:-1,args:[W.H]})
C.a.D(P.kF(this.gaL(),!1,W.H),b)},
m:function(a,b,c){var u
H.f(c,"$iH")
u=this.gaL()
J.mH(u.b.$1(J.f2(u.a,b)),c)},
h:function(a,b){J.l5(this.b.a,b)},
gk:function(a){return J.ar(this.gaL().a)},
n:function(a,b){var u=this.gaL()
return u.b.$1(J.f2(u.a,b))},
gS:function(a){var u=P.kF(this.gaL(),!1,W.H)
return new J.am(u,u.length,0,[H.r(u,0)])},
$au:function(){return[W.H]},
$al:function(){return[W.H]},
$ab:function(){return[W.H]}}
P.fH.prototype={
$1:function(a){return!!J.K(H.f(a,"$iC")).$iH},
$S:20}
P.fI.prototype={
$1:function(a){return H.aq(H.f(a,"$iC"),"$iH")},
$S:41}
P.jp.prototype={
gdA:function(a){var u=this.a
if(typeof u!=="number")return u.J()
return H.x(u+this.c,H.r(this,0))},
gcZ:function(a){var u=this.b
if(typeof u!=="number")return u.J()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cQ(b,"$ia2",[P.X],"$aa2")){u=this.a
t=J.a3(b)
if(u==t.gb8(b)){s=this.b
if(s==t.gbc(b)){if(typeof u!=="number")return u.J()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gdA(b)){if(typeof s!=="number")return s.J()
u=H.x(s+this.d,r)===t.gcZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t,s,r,q
u=this.a
t=J.cX(u)
s=this.b
r=J.cX(s)
if(typeof u!=="number")return u.J()
q=H.r(this,0)
u=C.d.gF(H.x(u+this.c,q))
if(typeof s!=="number")return s.J()
q=C.d.gF(H.x(s+this.d,q))
return P.nI(P.jn(P.jn(P.jn(P.jn(0,t),r),u),q))}}
P.a2.prototype={
gb8:function(a){return this.a},
gbc:function(a){return this.b},
gao:function(a){return this.c},
gal:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.fW.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return this.ag(a,b)},
m:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.n(a,b)},
ag:function(a,b){return a.getItem(b)},
$au:function(){return[P.aT]},
$il:1,
$al:function(){return[P.aT]},
$ib:1,
$ab:function(){return[P.aT]},
$az:function(){return[P.aT]}}
P.aU.prototype={$iaU:1}
P.ho.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return this.ag(a,b)},
m:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.n(a,b)},
ag:function(a,b){return a.getItem(b)},
$au:function(){return[P.aU]},
$il:1,
$al:function(){return[P.aU]},
$ib:1,
$ab:function(){return[P.aU]},
$az:function(){return[P.aU]}}
P.hv.prototype={
gk:function(a){return a.length}}
P.cp.prototype={$icp:1}
P.i0.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return this.ag(a,b)},
m:function(a,b,c){H.D(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.n(a,b)},
ag:function(a,b){return a.getItem(b)},
$au:function(){return[P.d]},
$il:1,
$al:function(){return[P.d]},
$ib:1,
$ab:function(){return[P.d]},
$az:function(){return[P.d]}}
P.p.prototype={
gbP:function(a){return new P.fG(a,new W.ag(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p
u=H.e([],[W.ap])
C.a.h(u,W.lO(null))
C.a.h(u,W.lQ())
C.a.h(u,new W.jD())
c=new W.eP(new W.dy(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.l).hs(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ag(r)
p=u.gap(u)
for(u=J.a3(q);s=p.firstChild,s!=null;)u.u(q,s)
return q},
$ip:1}
P.aX.prototype={$iaX:1}
P.ik.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return this.ag(a,b)},
m:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.n(a,b)},
ag:function(a,b){return a.getItem(b)},
$au:function(){return[P.aX]},
$il:1,
$al:function(){return[P.aX]},
$ib:1,
$ab:function(){return[P.aX]},
$az:function(){return[P.aX]}}
P.ef.prototype={}
P.eg.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.J.prototype={$il:1,
$al:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$int:1}
P.f6.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
n:function(a,b){return P.b8(a.get(H.D(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b8(t.value[1]))}},
gY:function(a){var u=H.e([],[P.d])
this.D(a,new P.f8(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.E("Not supported"))},
$aa8:function(){return[P.d,null]},
$iA:1,
$aA:function(){return[P.d,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f9.prototype={
gk:function(a){return a.length}}
P.bx.prototype={}
P.hp.prototype={
gk:function(a){return a.length}}
P.e3.prototype={}
P.d0.prototype={$id0:1}
P.dd.prototype={$idd:1}
P.dC.prototype={$idC:1}
P.bO.prototype={
cS:function(a,b){return a.activeTexture(b)},
cX:function(a,b,c){return a.attachShader(b,c)},
ae:function(a,b,c){return a.bindBuffer(b,c)},
hj:function(a,b,c){return a.bindFramebuffer(b,c)},
aB:function(a,b,c){return a.bindTexture(b,c)},
d_:function(a,b,c,d){return a.bufferData(b,c,d)},
hl:function(a,b){return a.clear(b)},
hm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hn:function(a,b){return a.clearDepth(b)},
ho:function(a,b){return a.compileShader(b)},
hu:function(a,b){return a.createShader(b)},
hw:function(a,b){return a.deleteProgram(b)},
hx:function(a,b){return a.deleteShader(b)},
hA:function(a,b){return a.depthFunc(b)},
d2:function(a,b){return a.disableVertexAttribArray(b)},
hD:function(a,b,c,d,e){return a.drawElements(H.a_(b),H.a_(c),H.a_(d),H.a_(e))},
d4:function(a,b){return a.enable(b)},
d5:function(a,b){return a.enableVertexAttribArray(b)},
dL:function(a,b){return a.generateMipmap(b)},
dM:function(a,b,c){return a.getActiveAttrib(b,c)},
dN:function(a,b,c){return a.getActiveUniform(b,c)},
dO:function(a,b,c){return a.getAttribLocation(b,c)},
c9:function(a,b){return a.getParameter(b)},
dR:function(a,b){return a.getProgramInfoLog(b)},
bh:function(a,b,c){return a.getProgramParameter(b,c)},
dS:function(a,b){return a.getShaderInfoLog(b)},
dT:function(a,b,c){return a.getShaderParameter(b,c)},
dU:function(a,b,c){return a.getUniformLocation(b,c)},
hV:function(a,b){return a.linkProgram(b)},
ii:function(a,b,c){return a.pixelStorei(b,c)},
e1:function(a,b,c){return a.shaderSource(b,c)},
iv:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.K(g)
if(!!u.$ib4)t=!0
else t=!1
if(t){this.h_(a,b,c,d,e,f,P.od(g))
return}if(!!u.$ibF)u=!0
else u=!1
if(u){this.h0(a,b,c,d,e,f,g)
return}throw H.c(P.cZ("Incorrect number or type of arguments"))},
iu:function(a,b,c,d,e,f,g){return this.iv(a,b,c,d,e,f,g,null,null,null)},
h_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
h0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d){return a.texParameteri(b,c,d)},
iC:function(a,b,c){return a.uniform1f(b,c)},
dG:function(a,b,c){return a.uniform1i(b,c)},
iD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dJ:function(a,b){return a.useProgram(b)},
iE:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
iF:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibO:1}
P.dF.prototype={$idF:1}
P.dM.prototype={$idM:1}
P.dT.prototype={$idT:1}
P.hT.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.S(b,a,null,null,null))
return P.b8(this.eL(a,b))},
m:function(a,b,c){H.f(c,"$iA")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.n(a,b)},
eL:function(a,b){return a.item(b)},
$au:function(){return[[P.A,,,]]},
$il:1,
$al:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$az:function(){return[[P.A,,,]]}}
P.ey.prototype={}
P.ez.prototype={}
O.a4.prototype={
ce:function(a){this.seQ(H.e([],[a]))
this.scI(null)
this.scH(null)
this.scJ(null)},
dZ:function(a,b,c){var u={func:1,ret:-1,args:[P.n,[P.l,H.ah(this,"a4",0)]]}
H.k(a,u)
H.k(c,u)
this.scI(b)
this.scH(a)
this.scJ(c)},
bj:function(a,b){return this.dZ(a,null,b)},
ft:function(a){H.o(a,"$il",[H.ah(this,"a4",0)],"$al")
return!0},
ed:function(a,b){var u
H.o(b,"$il",[H.ah(this,"a4",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.am(u,u.length,0,[H.r(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ah(this,"a4",0)
H.x(b,u)
u=[u]
if(this.ft(H.e([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.ed(s,H.e([b],u))}},
seQ:function(a){this.a=H.o(a,"$ib",[H.ah(this,"a4",0)],"$ab")},
scI:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.l,H.ah(this,"a4",0)]]})},
scH:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.n,[P.l,H.ah(this,"a4",0)]]})},
scJ:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.n,[P.l,H.ah(this,"a4",0)]]})},
$il:1}
O.ch.prototype={
gk:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
ee:function(a){var u=this.b
if(u!=null)u.I(a)},
aq:function(){return this.ee(null)},
gaU:function(a){var u=this.a
if(u.length>0)return C.a.gaf(u)
else return V.h8()},
dv:function(a){var u=this.a
if(a==null)C.a.h(u,V.h8())
else C.a.h(u,a)
this.aq()},
c1:function(){var u=this.a
if(u.length>0){u.pop()
this.aq()}},
sbu:function(a){this.a=H.o(a,"$ib",[V.bn],"$ab")}}
E.fc.prototype={}
E.af.prototype={
co:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.am(u,u.length,0,[H.r(u,0)]);u.w();){t=u.d
if(t.f==null)t.co()}},
scb:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().T(0,this.gdm())
t=this.c
if(t!=null)t.gv().h(0,this.gdm())
s=new D.O("shape",u,this.c,this,[F.dG])
s.b=!0
this.a5(s)}},
sdC:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().T(0,this.gdq())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.gdq())
this.co()
s=new D.O("technique",t,this.f,this,[O.bP])
s.b=!0
this.a5(s)}},
saV:function(a){var u,t
if(!J.a0(this.r,a)){u=this.r
if(u!=null)u.gv().T(0,this.gdk())
if(a!=null)a.gv().h(0,this.gdk())
this.r=a
t=new D.O("mover",u,a,this,[U.a9])
t.b=!0
this.a5(t)}},
aF:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aG(0,b,this):null
if(!J.a0(t,this.x)){s=this.x
this.x=t
r=new D.O("matrix",s,t,this,[V.bn])
r.b=!0
this.a5(r)}for(u=this.y.a,u=new J.am(u,u.length,0,[H.r(u,0)]);u.w();)u.d.aF(0,b)},
aD:function(a){var u,t,s,r,q,p,o,n
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gaU(u))
else C.a.h(u.a,t.q(0,u.gaU(u)))
u.aq()
a.dw(this.f)
u=a.dy
s=(u&&C.a).gaf(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.n(0,"Bumpy Debugging Shader")
if(r==null){u=a.a
r=new T.fe(u,"Bumpy Debugging Shader")
r.eb(u,"Bumpy Debugging Shader")
t=$.mM
q=$.mL
r.c=t
r.d=q
r.e=r.cz(t,35633)
r.f=r.cz(r.d,35632)
t=u.createProgram()
r.r=t
C.c.cX(u,t,r.e)
C.c.cX(u,r.r,r.f)
C.c.hV(u,r.r)
if(!H.kU(C.c.bh(u,r.r,35714))){p=C.c.dR(u,r.r)
C.c.hw(u,r.r)
H.W(P.ab("Failed to link shader: "+H.j(p)))}r.fS()
r.fU()
r.z=r.x.n(0,"posAttr")
r.Q=r.x.n(0,"normAttr")
r.ch=r.x.n(0,"binmAttr")
r.cx=r.x.n(0,"txtAttr")
r.cy=r.x.n(0,"weightAttr")
r.db=H.aq(r.y.n(0,"bumpTxt"),"$idU")
r.dx=H.aq(r.y.n(0,"objMat"),"$ibQ")
r.dy=H.aq(r.y.n(0,"viewMat"),"$ibQ")
r.fr=H.aq(r.y.n(0,"projMat"),"$ibQ")
r.fx=H.aq(r.y.n(0,"offsetScalar"),"$idS")
if(a.fr.b6(0,"Bumpy Debugging Shader"))H.W(P.ab('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.m(0,"Bumpy Debugging Shader",r)}s.a=r
u=r}if(this.e==null){u=this.c
t=$.bb()
q=$.ba()
q=u.hk(new Z.iZ(a.a),new Z.cz(t.a|q.a|$.b9().a|$.bc().a|$.bd().a))
q.aT($.bb()).e=s.a.z.c
q.aT($.ba()).e=s.a.Q.c
q.aT($.b9()).e=s.a.ch.c
q.aT($.bc()).e=s.a.cx.c
t=q.aT($.bd())
u=s.a
t.e=u.cy.c
this.e=q}t=s.b
if(t!=null){t.a=0
t=a.a
C.c.dJ(t,u.r)
u.x.hG()
q=s.b
if(q!=null){o=u.db
o.toString
n=q.d
if(!n)C.c.dG(o.a,o.d,0)
else{q=q.a
C.c.dG(o.a,o.d,q)}}q=a.cy
q=q.gaU(q)
o=u.fr
o.toString
o.bk(q.c6(0,!0))
q=a.db
q=q.gaU(q)
o=u.dy
o.toString
o.bk(q.c6(0,!0))
q=a.dx
q=q.gaU(q)
o=u.dx
o.toString
o.bk(q.c6(0,!0))
q=s.c
u=u.fx
C.c.iC(u.a,u.d,q)
q=s.b
if(!q.c&&q.d){q.c=!0
C.c.cS(t,33984+q.a)
C.c.aB(t,3553,q.b)}u=this.e
if(u instanceof Z.d2){u.bJ(a)
u.aD(a)
u.iB(a)}else this.e=null
u=s.a
u.toString
C.c.dJ(t,null)
u.x.hB()
u=s.b
if(u.c){u.c=!1
C.c.cS(t,33984+u.a)
C.c.aB(t,3553,null)}}}for(u=this.y.a,u=new J.am(u,u.length,0,[H.r(u,0)]);u.w();)u.d.aD(a)
a.du()
a.dx.c1()},
gv:function(){var u=this.z
if(u==null){u=D.R()
this.z=u}return u},
a5:function(a){var u=this.z
if(u!=null)u.I(a)},
a1:function(){return this.a5(null)},
dn:function(a){H.f(a,"$iy")
this.e=null
this.a5(a)},
i6:function(){return this.dn(null)},
dr:function(a){this.a5(H.f(a,"$iy"))},
i7:function(){return this.dr(null)},
dl:function(a){this.a5(H.f(a,"$iy"))},
i5:function(){return this.dl(null)},
dj:function(a){this.a5(H.f(a,"$iy"))},
i2:function(){return this.dj(null)},
i1:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$il",[E.af],"$al")
for(u=b.length,t=this.gdi(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.I)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cb()
o.saj(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.saj(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
i4:function(a,b){var u,t
H.o(b,"$il",[E.af],"$al")
for(u=b.gS(b),t=this.gdi();u.w();)u.gH(u).gv().T(0,t)
this.a1()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sef:function(a,b){this.y=H.o(b,"$ia4",[E.af],"$aa4")},
$ilo:1}
E.hB.prototype={
e9:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ae(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ch()
t=[V.bn]
u.sbu(H.e([],t))
u.b=null
u.gv().h(0,new E.hC(this))
this.cy=u
u=new O.ch()
u.sbu(H.e([],t))
u.b=null
u.gv().h(0,new E.hD(this))
this.db=u
u=new O.ch()
u.sbu(H.e([],t))
u.b=null
u.gv().h(0,new E.hE(this))
this.dx=u
this.sfY(H.e([],[O.bP]))
u=this.dy;(u&&C.a).h(u,null)
this.sfV(new H.aC([P.d,A.cq]))},
gaI:function(){return this.a},
dw:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaf(u):a;(u&&C.a).h(u,t)},
du:function(){var u=this.dy
if(u.length>1)u.pop()},
sfY:function(a){this.dy=H.o(a,"$ib",[O.bP],"$ab")},
sfV:function(a){this.fr=H.o(a,"$iA",[P.d,A.cq],"$aA")}}
E.hC.prototype={
$1:function(a){var u
H.f(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.hD.prototype={
$1:function(a){var u
H.f(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.hE.prototype={
$1:function(a){var u
H.f(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dO.prototype={
ci:function(a){H.f(a,"$iy")
this.dz()},
cg:function(){return this.ci(null)},
ghO:function(){var u,t,s
u=Date.now()
t=C.d.ay(P.lf(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ae(u,!1)
return s/t},
cM:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.v(u)
s=C.e.bT(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.e.bT(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.lC(C.u,this.gio())}},
dz:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.ic(this),{func:1,ret:-1,args:[P.X]})
C.L.ez(u)
C.L.fM(u,W.m3(t,P.X))}},
il:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cM()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ae(r,!1)
s.y=P.lf(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aq()
r=s.db
C.a.sk(r.a,0)
r.aq()
r=s.dx
C.a.sk(r.a,0)
r.aq()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aD(this.e)}s=this.z
if(s!=null)s.I(null)}catch(q){u=H.aa(q)
t=H.bX(q)
P.bY("Error: "+H.j(u))
P.bY("Stack: "+H.j(t))
throw H.c(u)}}}
E.ic.prototype={
$1:function(a){var u
H.ov(a)
u=this.a
if(u.ch){u.ch=!1
u.il()}},
$S:32}
Z.e1.prototype={$ioE:1}
Z.d1.prototype={
bJ:function(a){var u,t,s
try{t=a.a
C.c.d5(t,this.e)
C.c.iE(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aa(s)
t=P.ab('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.iZ.prototype={$ioF:1}
Z.d2.prototype={
aT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bJ:function(a){var u,t
u=this.a
C.c.ae(a.gaI(),u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bJ(a)},
iB:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.d2(s,u[t].e)
C.c.ae(a.gaI(),this.a.a,null)},
aD:function(a){var u,t,s,r,q
u=this.b.length
for(t=0;t<u;++t){s=this.b
if(t>=s.length)return H.i(s,t)
r=s[t]
s=r.c
q=s.a
C.c.ae(a.gaI(),q,s.b)
C.c.hD(a.gaI(),r.a,r.b,5123,0)
C.c.ae(a.gaI(),q,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.d]
t=H.e([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q)C.a.h(t,s[q].i(0))
p=H.e([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.al(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
seJ:function(a){this.b=H.o(a,"$ib",[Z.bG],"$ab")},
$ioO:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bL(this.c)+"'")+"]"}}
Z.cz.prototype={
gcc:function(a){var u,t
u=this.a
t=(u&$.bb().a)!==0?3:0
if((u&$.ba().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=2
if((u&$.c1().a)!==0)t+=3
if((u&$.cU().a)!==0)t+=3
if((u&$.cV().a)!==0)t+=4
if((u&$.bd().a)!==0)++t
return(u&$.c0().a)!==0?t+4:t},
hg:function(a){var u,t,s
u=$.bb()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c0()
if((t&u.a)!==0)if(s===a)return u
return $.mw()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cz))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.e([],[P.d])
t=this.a
if((t&$.bb().a)!==0)C.a.h(u,"Pos")
if((t&$.ba().a)!==0)C.a.h(u,"Norm")
if((t&$.b9().a)!==0)C.a.h(u,"Binm")
if((t&$.bc().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c1().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cU().a)!==0)C.a.h(u,"Clr3")
if((t&$.cV().a)!==0)C.a.h(u,"Clr4")
if((t&$.bd().a)!==0)C.a.h(u,"Weight")
if((t&$.c0().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fg.prototype={}
D.cb.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.saj(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
T:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.a
t=(u&&C.a).T(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.b
t=(u&&C.a).T(u,b)||t}return t},
I:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.y(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.D(P.kF(t,!0,{func:1,ret:-1,args:[D.y]}),new D.fC(u))
t=this.b
if(t!=null){this.saM(H.e([],[{func:1,ret:-1,args:[D.y]}]))
C.a.D(t,new D.fD(u))}return!0},
hF:function(){return this.I(null)},
ip:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.I(t)}}},
aZ:function(a){return this.ip(a,!0,!1)},
saj:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saM:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fC.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.fD.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:21}
D.y.prototype={}
D.dh.prototype={}
D.di.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d4.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dp.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fV.prototype={
ie:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i9:function(a){this.c=a.b
this.d.T(0,a.a)
return!1},
sfE:function(a){this.d=H.o(a,"$ily",[P.n],"$aly")}}
X.dt.prototype={}
X.h1.prototype={
aK:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ae(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.ac(t.a+s*r,t.b+q*p)
p=this.a.gaC()
n=new X.b7(a,V.bp(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
c0:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.dW()
if(typeof u!=="number")return u.bf()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.aK(a,b))
return!0},
ig:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaC()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.cj(new V.P(q*p,o*n),t,s,new P.ae(r,!1),this)
r.b=!0
u.I(r)
return!0},
fh:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ae(Date.now(),!1)
t=this.f
s=new X.dt(c,a,this.a.gaC(),b,u,this)
s.b=!0
t.I(s)
this.y=u
this.x=V.bp()}}
X.ao.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ao))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.hf.prototype={
br:function(a,b,c){var u,t,s
u=new P.ae(Date.now(),!1)
t=this.a.gaC()
s=new X.b7(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
c0:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.br(a,b,!0))
return!0},
aX:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.dW()
if(typeof u!=="number")return u.bf()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.I(this.br(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.br(a,b,!1))
return!0},
ih:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaC()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.cj(new V.P(r*q,p*o),t,b,new P.ae(s,!1),this)
s.b=!0
u.I(s)
return!0},
gd3:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
gdH:function(){var u=this.c
if(u==null){u=D.R()
this.c=u}return u},
gdh:function(){var u=this.d
if(u==null){u=D.R()
this.d=u}return u}}
X.cj.prototype={}
X.hu.prototype={}
X.dQ.prototype={}
X.ih.prototype={
aK:function(a,b){var u,t,s,r
H.o(a,"$ib",[V.ac],"$ab")
u=new P.ae(Date.now(),!1)
t=a.length>0?a[0]:V.bp()
s=this.a.gaC()
r=new X.dQ(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
ic:function(a){var u
H.o(a,"$ib",[V.ac],"$ab")
u=this.b
if(u==null)return!1
u.I(this.aK(a,!0))
return!0},
ia:function(a){var u
H.o(a,"$ib",[V.ac],"$ab")
u=this.c
if(u==null)return!1
u.I(this.aK(a,!0))
return!0},
ib:function(a){var u
H.o(a,"$ib",[V.ac],"$ab")
u=this.d
if(u==null)return!1
u.I(this.aK(a,!1))
return!0}}
X.dX.prototype={
gaC:function(){var u=this.a
return V.lw(0,0,C.m.gd0(u).c,C.m.gd0(u).d)},
cw:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dp(u,new X.ao(t,a.altKey,a.shiftKey))},
aw:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ao(t,a.altKey,a.shiftKey)},
bI:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ao(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.B()
q=u.top
if(typeof s!=="number")return s.B()
return new V.ac(t-r,s-q)},
aN:function(a){return new V.P(a.movementX,a.movementY)},
bF:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.e([],[V.ac])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
o=C.e.aa(p.pageX)
C.e.aa(p.pageY)
n=u.left
C.e.aa(p.pageX)
C.a.h(t,new V.ac(o-n,C.e.aa(p.pageY)-u.top))}return t},
ai:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d4(u,new X.ao(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.B()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.B()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fc:function(a){this.f=!0},
f0:function(a){this.f=!1},
f6:function(a){H.f(a,"$iZ")
if(this.f&&this.bv(a))a.preventDefault()},
fg:function(a){var u
H.f(a,"$iaS")
if(!this.f)return
u=this.cw(a)
this.b.ie(u)},
fe:function(a){var u
H.f(a,"$iaS")
if(!this.f)return
u=this.cw(a)
this.b.i9(u)},
fj:function(a){var u,t,s,r
H.f(a,"$iZ")
u=this.a
u.focus()
this.f=!0
this.aw(a)
if(this.x){t=this.ai(a)
s=this.aN(a)
if(this.d.c0(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ai(a)
r=this.ak(a)
if(this.c.c0(t,r))a.preventDefault()},
fn:function(a){var u,t,s
H.f(a,"$iZ")
this.aw(a)
u=this.ai(a)
if(this.x){t=this.aN(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aX(u,s))a.preventDefault()},
fa:function(a){var u,t,s
H.f(a,"$iZ")
if(!this.bv(a)){this.aw(a)
u=this.ai(a)
if(this.x){t=this.aN(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aX(u,s))a.preventDefault()}},
fl:function(a){var u,t,s
H.f(a,"$iZ")
this.aw(a)
u=this.ai(a)
if(this.x){t=this.aN(a)
if(this.d.aW(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aW(u,s))a.preventDefault()},
f8:function(a){var u,t,s
H.f(a,"$iZ")
if(!this.bv(a)){this.aw(a)
u=this.ai(a)
if(this.x){t=this.aN(a)
if(this.d.aW(u,t))a.preventDefault()
return}if(this.r)return
s=this.ak(a)
if(this.c.aW(u,s))a.preventDefault()}},
fp:function(a){var u,t
H.f(a,"$ib_")
this.aw(a)
u=new V.P((a&&C.K).ghy(a),C.K.ghz(a)).E(0,180)
if(this.x){if(this.d.ig(u))a.preventDefault()
return}if(this.r)return
t=this.ak(a)
if(this.c.ih(u,t))a.preventDefault()},
fs:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ai(this.y)
s=this.ak(this.y)
this.d.fh(t,s,u)}},
fD:function(a){var u
H.f(a,"$iaK")
this.a.focus()
this.f=!0
this.bI(a)
u=this.bF(a)
if(this.e.ic(u))a.preventDefault()},
fz:function(a){var u
H.f(a,"$iaK")
this.bI(a)
u=this.bF(a)
if(this.e.ia(u))a.preventDefault()},
fB:function(a){var u
H.f(a,"$iaK")
this.bI(a)
u=this.bF(a)
if(this.e.ib(u))a.preventDefault()},
seA:function(a){this.z=H.o(a,"$ib",[[P.ct,P.L]],"$ab")}}
V.bC.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bC))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.fA.prototype={}
V.bn.prototype={
c6:function(a,b){var u=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.B])
return u},
q:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.v(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.v(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.v(g)
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
if(typeof a3!=="number")return a3.q()
a4=this.z
if(typeof a4!=="number")return a4.q()
a5=this.Q
if(typeof a5!=="number")return a5.q()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b6(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bn))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
r=this.y
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.P()},
d7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.B]
t=V.k1(H.e([this.a,this.e,this.y,this.cx],u),b,c)
s=V.k1(H.e([this.b,this.f,this.z,this.cy],u),b,c)
r=V.k1(H.e([this.c,this.r,this.Q,this.db],u),b,c)
q=V.k1(H.e([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.i(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.i(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.i(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.i(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.i(t,1)
l=l+t[1]+", "
if(1>=o)return H.i(s,1)
l=l+s[1]+", "
if(1>=n)return H.i(r,1)
l=l+r[1]+", "
if(1>=m)return H.i(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.i(t,2)
p=p+t[2]+", "
if(2>=o)return H.i(s,2)
p=p+s[2]+", "
if(2>=n)return H.i(r,2)
p=p+r[2]+", "
if(2>=m)return H.i(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.i(t,3)
l=l+t[3]+", "
if(3>=o)return H.i(s,3)
l=l+s[3]+", "
if(3>=n)return H.i(r,3)
l=l+r[3]+", "
if(3>=m)return H.i(q,3)
return p+(l+q[3]+"]")},
P:function(){return this.d7("",3,0)},
A:function(a){return this.d7(a,3,0)}}
V.ac.prototype={
B:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.bq.prototype={
B:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return new V.bq(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.dB.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dB))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.dE.prototype={
ga3:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.P.prototype={
bX:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.v(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.v(r)
return u*t+s*r},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.P(u*b,t*b)},
E:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.lI
if(u==null){u=new V.P(0,0)
$.lI=u}return u}u=this.a
if(typeof u!=="number")return u.E()
t=this.b
if(typeof t!=="number")return t.E()
return new V.P(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.a7.prototype={
bX:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.v(t)
return this.a*a.a+this.b*a.b+u*t},
aS:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.v(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.q()
q=a.a
p=this.a
return new V.a7(u*t-s*r,s*q-p*t,p*r-u*q)},
J:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.v(t)
return new V.a7(this.a+b.a,this.b+b.b,u+t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.a7(-this.a,-this.b,-u)},
E:function(a,b){var u
if(Math.abs(b-0)<$.Q().a)return V.e0()
u=this.c
if(typeof u!=="number")return u.E()
return new V.a7(this.a/b,this.b/b,u/b)},
dg:function(){var u,t,s
u=$.Q()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.v(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fh.prototype={
bm:function(a){var u=V.oD(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u},
N:function(a){var u=this.y
if(u!=null)u.I(a)},
sc7:function(a,b){},
sbY:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.Q().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bm(t)}u=new D.O("maximumLocation",u,this.b,this,[P.B])
u.b=!0
this.N(u)}},
sc_:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.Q().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bm(t)}u=new D.O("minimumLocation",u,this.c,this,[P.B])
u.b=!0
this.N(u)}},
sa2:function(a,b){var u
b=this.bm(b)
u=this.d
if(!(Math.abs(u-b)<$.Q().a)){this.d=b
u=new D.O("location",u,b,this,[P.B])
u.b=!0
this.N(u)}},
sbZ:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.Q().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.O("maximumVelocity",u,a,this,[P.B])
u.b=!0
this.N(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.Q().a)){this.f=a
u=new D.O("velocity",u,a,this,[P.B])
u.b=!0
this.N(u)}},
sbS:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.O("dampening",u,a,this,[P.B])
u.b=!0
this.N(u)}},
aF:function(a,b){var u,t,s,r,q
u=this.f
t=$.Q().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.Q().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.d6.prototype={
gv:function(){var u=this.b
if(u==null){u=D.R()
this.b=u}return u},
aG:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d6))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.ce.prototype={
gv:function(){var u=this.e
if(u==null){u=D.R()
this.e=u}return u},
N:function(a){var u
H.f(a,"$iy")
u=this.e
if(u!=null)u.I(a)},
a_:function(){return this.N(null)},
eZ:function(a,b){var u,t,s,r,q,p,o,n
u=U.a9
H.o(b,"$il",[u],"$al")
for(t=b.length,s=this.gav(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.k(s,r)
if(n.a==null)n.saj(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.dh(a,b,this,[u])
u.b=!0
this.N(u)},
fv:function(a,b){var u,t,s
u=U.a9
H.o(b,"$il",[u],"$al")
for(t=b.gS(b),s=this.gav();t.w();)t.gH(t).gv().T(0,s)
u=new D.di(a,b,this,[u])
u.b=!0
this.N(u)},
aG:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.U()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.am(u,u.length,0,[H.r(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.aG(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.h8():s
u=this.e
if(u!=null)u.aZ(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.a0(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.a9]},
$aa4:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dY.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.R()
this.cy=u}return u},
N:function(a){var u
H.f(a,"$iy")
u=this.cy
if(u!=null)u.I(a)},
a_:function(){return this.N(null)},
aQ:function(a){if(this.a!=null)return!1
this.a=a
a.c.gd3().h(0,this.gbw())
this.a.c.gdh().h(0,this.gby())
this.a.c.gdH().h(0,this.gbA())
return!0},
bx:function(a){H.f(a,"$iy")
if(!J.a0(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bz:function(a){var u,t,s,r,q,p,o
a=H.aq(H.f(a,"$iy"),"$ib7")
if(!this.y)return
if(this.x){u=a.d.B(0,a.y)
u=new V.P(u.a,u.b)
u=u.K(u)
t=this.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.B(0,a.y)
u=new V.P(t.a,t.b).q(0,2).E(0,u.ga3())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.v(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=new V.P(s.a,s.b).q(0,2).E(0,u.ga3())
s=this.b
q=r.a
if(typeof q!=="number")return q.O()
p=this.e
if(typeof p!=="number")return H.v(p)
o=this.z
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
this.b.sR(0)
t=t.B(0,a.z)
this.Q=new V.P(t.a,t.b).q(0,2).E(0,u.ga3())}this.a_()},
bB:function(a){var u,t,s
H.f(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.K(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.v(s)
u.sR(t*10*s)
this.a_()}},
aG:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.U()
if(u<t){this.ch=t
s=b.y
this.b.aF(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.b6(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia9:1}
U.dZ.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.R()
this.fx=u}return u},
N:function(a){var u
H.f(a,"$iy")
u=this.fx
if(u!=null)u.I(a)},
a_:function(){return this.N(null)},
aQ:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gd3().h(0,this.gbw())
this.a.c.gdh().h(0,this.gby())
this.a.c.gdH().h(0,this.gbA())
u=this.a.d
t=u.f
if(t==null){t=D.R()
u.f=t
u=t}else u=t
u.h(0,this.geR())
u=this.a.d
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.geT())
u=this.a.e
t=u.b
if(t==null){t=D.R()
u.b=t
u=t}else u=t
u.h(0,this.gh6())
u=this.a.e
t=u.d
if(t==null){t=D.R()
u.d=t
u=t}else u=t
u.h(0,this.gh4())
u=this.a.e
t=u.c
if(t==null){t=D.R()
u.c=t
u=t}else u=t
u.h(0,this.gh2())
return!0},
ab:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
bx:function(a){a=H.aq(H.f(a,"$iy"),"$ib7")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bz:function(a){var u,t,s,r,q,p,o
a=H.aq(H.f(a,"$iy"),"$ib7")
if(!this.cx)return
if(this.ch){u=a.d.B(0,a.y)
u=new V.P(u.a,u.b)
u=u.K(u)
t=this.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.B(0,a.y)
u=this.ab(new V.P(t.a,t.b).q(0,2).E(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=this.ab(new V.P(s.a,s.b).q(0,2).E(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.v(p)
o=this.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.v(q)
s=this.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.B(0,a.z)
this.dx=this.ab(new V.P(t.a,t.b).q(0,2).E(0,u.ga3()))}this.a_()},
bB:function(a){var u,t,s
H.f(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.K(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
this.a_()}},
eS:function(a){if(H.aq(H.f(a,"$iy"),"$idt").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
eU:function(a){var u,t,s,r,q,p,o
a=H.aq(H.f(a,"$iy"),"$ib7")
if(!J.a0(this.d,a.x.b))return
u=a.c
t=a.d
s=t.B(0,a.y)
r=this.ab(new V.P(s.a,s.b).q(0,2).E(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.v(p)
o=this.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.v(q)
s=this.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.B(0,a.z)
this.dx=this.ab(new V.P(t.a,t.b).q(0,2).E(0,u.ga3()))
this.a_()},
h7:function(a){H.f(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
h5:function(a){var u,t,s,r,q,p,o
a=H.aq(H.f(a,"$iy"),"$idQ")
if(!this.cx)return
if(this.ch){u=a.d.B(0,a.y)
u=new V.P(u.a,u.b)
u=u.K(u)
t=this.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.B(0,a.y)
u=this.ab(new V.P(t.a,t.b).q(0,2).E(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=this.ab(new V.P(s.a,s.b).q(0,2).E(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.v(p)
o=this.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.v(q)
s=this.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.B(0,a.z)
this.dx=this.ab(new V.P(t.a,t.b).q(0,2).E(0,u.ga3()))}this.a_()},
h3:function(a){var u,t,s
H.f(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.K(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
this.a_()}},
aG:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.U()
if(u<t){this.dy=t
s=b.y
this.c.aF(0,s)
this.b.aF(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.b6(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.q(0,V.b6(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia9:1}
U.e_.prototype={
gv:function(){var u=this.r
if(u==null){u=D.R()
this.r=u}return u},
N:function(a){var u=this.r
if(u!=null)u.I(a)},
aQ:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.R()
u.e=t
u=t}else u=t
t=this.geW()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.R()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
eX:function(a){var u,t,s,r
H.f(a,"$iy")
if(!J.a0(this.b,this.a.b.c))return
H.aq(a,"$icj")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.O("zoom",u,r,this,[P.B])
u.b=!0
this.N(u)}},
aG:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b6(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia9:1}
M.db.prototype={
as:function(a){var u
H.f(a,"$iy")
u=this.x
if(u!=null)u.I(a)},
eh:function(){return this.as(null)},
f2:function(a,b){var u,t,s,r,q,p,o,n
u=E.af
H.o(b,"$il",[u],"$al")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.cb()
n.saj(null)
n.saM(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.saj(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.dh(a,b,this,[u])
u.b=!0
this.as(u)},
f4:function(a,b){var u,t,s
u=E.af
H.o(b,"$il",[u],"$al")
for(t=b.gS(b),s=this.gar();t.w();)t.gH(t).gv().T(0,s)
u=new D.di(a,b,this,[u])
u.b=!0
this.as(u)},
gv:function(){var u=this.x
if(u==null){u=D.R()
this.x=u}return u},
aD:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.dw(this.c)
u=this.b
u.toString
t=a1.a
C.c.hj(t,36160,null)
C.c.d4(t,2884)
C.c.d4(t,2929)
C.c.hA(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.e.aa(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.e.aa(p*r)
p=C.e.aa(q.c*s)
a1.c=p
q=C.e.aa(q.d*r)
a1.d=q
C.c.iF(t,o,n,p,q)
C.c.hn(t,u.c)
u=u.a
C.c.hm(t,u.a,u.b,u.c,u.d)
C.c.hl(t,16640)
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
a1.cy.dv(i)
t=$.lr
if(t==null){t=$.lt
if(t==null){t=new V.bq(0,0,0)
$.lt=t}q=$.lK
if(q==null){q=new V.a7(0,1,0)
$.lK=q}p=$.lJ
if(p==null){p=new V.a7(0,0,-1)
$.lJ=p}h=p.E(0,Math.sqrt(p.K(p)))
q=q.aS(h)
g=q.E(0,Math.sqrt(q.K(q)))
f=h.aS(g)
e=new V.a7(t.a,t.b,t.c)
d=g.O(0).K(e)
c=f.O(0).K(e)
b=h.O(0).K(e)
t=V.b6(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lr=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a1.db.dv(a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.r(u,0)]);u.w();)u.d.aF(0,a1)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.r(u,0)]);u.w();)u.d.aD(a1)
this.a.toString
a1.cy.c1()
a1.db.c1()
this.b.toString
a1.du()},
ses:function(a,b){this.d=H.o(b,"$ia4",[E.af],"$aa4")},
$ioL:1}
A.d_.prototype={}
A.f5.prototype={
n:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.c.d5(r.a,r.c)}},
hB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.c.d2(r.a,r.c)}}}
A.cq.prototype={
eb:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cz:function(a,b){var u,t,s
u=this.a
t=C.c.hu(u,b)
C.c.e1(u,t,a)
C.c.ho(u,t)
if(!H.kU(C.c.dT(u,t,35713))){s=C.c.dS(u,t)
C.c.hx(u,t)
throw H.c(P.ab("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
fS:function(){var u,t,s,r,q,p
u=H.e([],[A.d_])
t=this.a
s=H.a_(C.c.bh(t,this.r,35721))
if(typeof s!=="number")return H.v(s)
r=0
for(;r<s;++r){q=C.c.dM(t,this.r,r)
p=C.c.dO(t,this.r,q.name)
C.a.h(u,new A.d_(t,q.name,p))}this.x=new A.f5(u)},
fU:function(){var u,t,s,r,q,p
u=H.e([],[A.dR])
t=this.a
s=H.a_(C.c.bh(t,this.r,35718))
if(typeof s!=="number")return H.v(s)
r=0
for(;r<s;++r){q=C.c.dN(t,this.r,r)
p=C.c.dU(t,this.r,q.name)
C.a.h(u,this.hv(q.type,q.size,q.name,p))}this.y=new A.ix(u)},
au:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ip(u,t,b,c)
else return A.kI(u,t,b,a,c)},
ew:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.dU(u,t,b,c)
else return A.kI(u,t,b,a,c)},
ex:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.iA(u,t,b,c)
else return A.kI(u,t,b,a,c)},
b5:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hv:function(a,b,c,d){switch(a){case 5120:return this.au(b,c,d)
case 5121:return this.au(b,c,d)
case 5122:return this.au(b,c,d)
case 5123:return this.au(b,c,d)
case 5124:return this.au(b,c,d)
case 5125:return this.au(b,c,d)
case 5126:return new A.dS(this.a,this.r,c,d)
case 35664:return new A.ir(this.a,this.r,c,d)
case 35665:return new A.it(this.a,this.r,c,d)
case 35666:return new A.iv(this.a,this.r,c,d)
case 35667:return new A.is(this.a,this.r,c,d)
case 35668:return new A.iu(this.a,this.r,c,d)
case 35669:return new A.iw(this.a,this.r,c,d)
case 35674:return new A.iy(this.a,this.r,c,d)
case 35675:return new A.iz(this.a,this.r,c,d)
case 35676:return new A.bQ(this.a,this.r,c,d)
case 35678:return this.ew(b,c,d)
case 35680:return this.ex(b,c,d)
case 35670:throw H.c(this.b5("BOOL",c))
case 35671:throw H.c(this.b5("BOOL_VEC2",c))
case 35672:throw H.c(this.b5("BOOL_VEC3",c))
case 35673:throw H.c(this.b5("BOOL_VEC4",c))
default:throw H.c(P.ab("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dR.prototype={}
A.ix.prototype={
n:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.P()},
hN:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.hN("\n")}}
A.ip.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.is.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sh9:function(a){this.e=H.o(a,"$ib",[P.n],"$ab")}}
A.dS.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.it.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.iz.prototype={
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.bQ.prototype={
bk:function(a){var u=new Float32Array(H.jW(H.o(a,"$ib",[P.B],"$ab")))
C.c.iD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.dU.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.iA.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.k3.prototype={
$2:function(a,b){return 0},
$S:42}
F.k4.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
s=new V.bq(u,t,this.a.a.$2(b,c))
if(!J.a0(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a1()}s=new V.a7(u,t,1)
s=s.E(0,Math.sqrt(s.K(s)))
if(!J.a0(a.z,s)){a.z=s
s=a.a
if(s!=null)s.a1()}s=1-b
r=1-c
r=new V.dB(b*c,2+s*c,4+b*r,6+s*r)
if(!J.a0(a.cx,r)){a.cx=r
s=a.a
if(s!=null)s.a1()}},
$S:43}
F.a5.prototype={
ghC:function(){return this.a==null||this.b==null||this.c==null},
ep:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.e0()
if(t!=null)q=q.J(0,t)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.dg())return
return q.E(0,Math.sqrt(q.K(q)))},
er:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.B(0,t)
u=new V.a7(u.a,u.b,u.c)
q=u.E(0,Math.sqrt(u.K(u)))
u=r.B(0,t)
u=new V.a7(u.a,u.b,u.c)
u=q.aS(u.E(0,Math.sqrt(u.K(u))))
return u.E(0,Math.sqrt(u.K(u)))},
bN:function(){if(this.d!=null)return!0
var u=this.ep()
if(u==null){u=this.er()
if(u==null)return!1}this.d=u
this.a.a.a1()
return!0},
eo:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.e0()
if(t!=null)q=q.J(0,t)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.dg())return
return q.E(0,Math.sqrt(q.K(q)))},
eq:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.Q().a){u=m.B(0,p)
u=new V.a7(u.a,u.b,u.c)
h=u.E(0,Math.sqrt(u.K(u)))
if(j.a-k.a<0)h=h.O(0)}else{g=(u-l.b)/i
u=m.B(0,p)
t=u.c
if(typeof t!=="number")return t.q()
r=p.a
q=p.b
o=p.c
if(typeof o!=="number")return H.v(o)
o=new V.bq(u.a*g+r,u.b*g+q,t*g+o).B(0,s)
o=new V.a7(o.a,o.b,o.c)
h=o.E(0,Math.sqrt(o.K(o)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.O(0)}u=this.d
if(u!=null){f=u.E(0,Math.sqrt(u.K(u)))
u=f.aS(h)
u=u.E(0,Math.sqrt(u.K(u))).aS(f)
h=u.E(0,Math.sqrt(u.K(u)))}return h},
bL:function(){if(this.e!=null)return!0
var u=this.eo()
if(u==null){u=this.eq()
if(u==null)return!1}this.e=u
this.a.a.a1()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
A:function(a){var u,t
if(this.ghC())return a+"disposed"
u=a+C.b.a9(J.al(this.a.e),0)+", "+C.b.a9(J.al(this.b.e),0)+", "+C.b.a9(J.al(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.A("")}}
F.b5.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a9(J.al(u.e),0)+", "+C.b.a9(J.al(this.b.e),0)},
P:function(){return this.A("")}}
F.bJ.prototype={}
F.dG.prototype={
gv:function(){var u=this.e
if(u==null){u=D.R()
this.e=u}return u},
hk:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
t=a1.a
s=(t&$.bb().a)!==0?1:0
if((t&$.ba().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.c1().a)!==0)++s
if((t&$.cU().a)!==0)++s
if((t&$.cV().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.c0().a)!==0)++s
r=a1.gcc(a1)
q=r*4
t=new Array(u*r)
t.fixed$length=Array
p=P.B
o=H.e(t,[p])
t=new Array(s)
t.fixed$length=Array
n=H.e(t,[Z.d1])
for(m=0,l=0;l<s;++l){k=a1.hg(l)
j=k.gcc(k)
C.a.m(n,l,new Z.d1(k,j,m*4,q,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].hW(k)
g=m+i*r
for(f=0;f<h.length;++f){C.a.m(o,g,h[f]);++g}}m+=j}H.o(o,"$ib",[p],"$ab")
t=a0.a
e=t.createBuffer()
C.c.ae(t,34962,e)
C.c.d_(t,34962,new Float32Array(H.jW(o)),35044)
C.c.ae(t,34962,null)
d=new Z.d2(new Z.e1(34962,e),n,a1)
d.seJ(H.e([],[Z.bG]))
this.b.b
if(this.c.b.length!==0){p=P.n
c=H.e([],[p])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.az()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.az()
C.a.h(c,b.e)}a=Z.lM(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bG(1,c.length,a))}if(this.d.b.length!==0){p=P.n
c=H.e([],[p])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.az()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.az()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.az()
C.a.h(c,b.e)}a=Z.lM(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bG(4,c.length,a))}return d},
i:function(a){var u=H.e([],[P.d])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.l(u,"\n")},
a5:function(a){var u=this.e
if(u!=null)u.I(a)},
a1:function(){return this.a5(null)},
$ioM:1}
F.hK.prototype={
hd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.aZ],"$ab")
u=H.e([],[F.a5])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.i(c,r)
l=c[r];++r
if(r>=m)return H.i(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.i(c,j)
i=c[j]
if(s<0||s>=m)return H.i(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.fE(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fE(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fE(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fE(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ik:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.a
if(!(t==null||s.b==null||s.c==null)){C.a.T(t.a.d.b,s)
t=s.a.a.e
if(t!=null)t.I(null)}t=s.a
if(t!=null){C.a.T(t.d.b,s)
s.a=null}t=s.b
if(t!=null){C.a.T(t.d.c,s)
s.b=null}t=s.c
if(t!=null){C.a.T(t.d.d,s)
s.c=null}}C.a.sk(this.b,0)},
bO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].bN())s=!1
return s},
bM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].bL())s=!1
return s},
i:function(a){return this.P()},
A:function(a){var u,t,s,r
u=H.e([],[P.d])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
P:function(){return this.A("")},
seB:function(a){this.b=H.o(a,"$ib",[F.a5],"$ab")}}
F.hL.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.P()},
A:function(a){var u,t,s,r
u=H.e([],[P.d])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.i(r,s)
C.a.h(u,r[s].A(a+(""+s+". ")))}return C.a.l(u,"\n")},
P:function(){return this.A("")},
seN:function(a){this.b=H.o(a,"$ib",[F.b5],"$ab")}}
F.hM.prototype={
gk:function(a){return 0},
i:function(a){return this.P()},
A:function(a){var u,t,s
u=H.e([],[P.d])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].A(a))}return C.a.l(u,"\n")},
P:function(){return this.A("")},
sbE:function(a){this.b=H.o(a,"$ib",[F.bJ],"$ab")}}
F.aZ.prototype={
bR:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.kL(this.cx,s,p,u,t,r,q,a,o)},
hp:function(){return this.bR(null)},
hW:function(a){var u,t
if(a.t(0,$.bb())){u=this.f
t=[P.B]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.ba())){u=this.r
t=[P.B]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.b9())){u=this.x
t=[P.B]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.bc())){u=this.y
t=[P.B]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.t(0,$.c1())){u=this.z
t=[P.B]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.cU())){u=this.Q
t=[P.B]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.cV())){u=this.Q
t=[P.B]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bd()))return H.e([this.ch],[P.B])
else if(a.t(0,$.c0())){u=this.cx
t=[P.B]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.B])},
bN:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.e0()
this.d.D(0,new F.iW(u))
u=u.a
this.r=u.E(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.aZ(0)}return!0},
bL:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.e0()
this.d.D(0,new F.iV(u))
u=u.a
this.x=u.E(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.aZ(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
A:function(a){var u,t,s
u=H.e([],[P.d])
C.a.h(u,C.b.a9(J.al(this.e),0))
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
C.a.h(u,V.V(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
P:function(){return this.A("")}}
F.iW.prototype={
$1:function(a){var u,t
H.f(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.J(0,u)}},
$S:9}
F.iV.prototype={
$1:function(a){var u,t
H.f(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.J(0,u)}},
$S:9}
F.iP.prototype={
az:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.ab("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a1()
return!0},
gk:function(a){return this.c.length},
bO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].bN()
return!0},
bM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].bL()
return!0},
i:function(a){return this.P()},
A:function(a){var u,t,s,r
this.az()
u=H.e([],[P.d])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
P:function(){return this.A("")},
sha:function(a){this.c=H.o(a,"$ib",[F.aZ],"$ab")}}
F.iQ.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a5]})
C.a.D(this.b,b)
C.a.D(this.c,new F.iR(this,b))
C.a.D(this.d,new F.iS(this,b))},
i:function(a){return this.P()},
A:function(a){var u,t,s,r
u=H.e([],[P.d])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
P:function(){return this.A("")},
seC:function(a){this.b=H.o(a,"$ib",[F.a5],"$ab")},
seD:function(a){this.c=H.o(a,"$ib",[F.a5],"$ab")},
seE:function(a){this.d=H.o(a,"$ib",[F.a5],"$ab")}}
F.iR.prototype={
$1:function(a){H.f(a,"$ia5")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:9}
F.iS.prototype={
$1:function(a){var u
H.f(a,"$ia5")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:9}
F.iT.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
A:function(a){var u,t,s,r
u=H.e([],[P.d])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
P:function(){return this.A("")},
seO:function(a){this.b=H.o(a,"$ib",[F.b5],"$ab")},
seP:function(a){this.c=H.o(a,"$ib",[F.b5],"$ab")}}
F.iU.prototype={
gk:function(a){return 0},
i:function(a){return this.P()},
A:function(a){var u,t,s
u=H.e([],[P.d])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].A(a))}return C.a.l(u,"\n")},
P:function(){return this.A("")},
sbE:function(a){this.b=H.o(a,"$ib",[F.bJ],"$ab")}}
O.bP.prototype={}
T.i5.prototype={}
T.dN.prototype={}
T.i9.prototype={
gv:function(){var u=this.y
if(u==null){u=D.R()
this.y=u}return u}}
T.ia.prototype={
hY:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.c.aB(u,3553,t)
C.c.bb(u,3553,10242,33071)
C.c.bb(u,3553,10243,33071)
C.c.bb(u,3553,10241,9729)
C.c.bb(u,3553,10240,9729)
C.c.aB(u,3553,null);++this.d
s=W.lj(null,a,null)
r=new T.i9()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.a1(s,"load",H.k(new T.ib(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
hX:function(a){return this.hY(a,!1,!1,!1,!1)},
fN:function(a,b,c){var u,t,s,r
b=V.l_(b,2)
u=V.l_(a.width,2)
t=V.l_(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kw(null,null)
s.width=u
s.height=t
r=H.f(C.m.dQ(s,"2d"),"$ibA")
r.imageSmoothingEnabled=!1;(r&&C.y).hE(r,a,0,0,s.width,s.height)
return P.oe(C.y.eI(r,0,0,s.width,s.height))}}}
T.ib.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.fN(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.c.aB(t,3553,this.e)
C.c.ii(t,37440,this.f?1:0)
C.c.iu(t,3553,0,6408,6408,5121,r)
if(this.r)C.c.dL(t,3553)
C.c.aB(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.hF()}++s.e},
$S:13}
V.b2.prototype={
am:function(a,b){return!0},
i:function(a){return"all"},
$ian:1}
V.an.prototype={}
V.du.prototype={
am:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)if(u[s].am(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sZ:function(a){this.a=H.o(a,"$ib",[V.an],"$ab")},
$ian:1}
V.ai.prototype={
am:function(a,b){return!this.e6(0,b)},
i:function(a){return"!["+this.cd(0)+"]"}}
V.hz.prototype={
am:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.bM(this.a)
t=H.bM(this.b)
return u+".."+t},
$ian:1}
V.hJ.prototype={
ea:function(a){var u,t
if(a.a.length<=0)throw H.c(P.ab("May not create a SetMatcher with zero characters."))
u=new H.aC([P.n,P.N])
for(t=new H.cg(a,a.gk(a),0,[H.ah(a,"u",0)]);t.w();)u.m(0,t.d,!0)
this.sfQ(u)},
am:function(a,b){return this.a.b6(0,b)},
i:function(a){var u=this.a
return P.dI(u.gY(u),0,null)},
sfQ:function(a){this.a=H.o(a,"$iA",[P.n,P.N],"$aA")},
$ian:1}
V.cr.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cw(this.a.j(0,b))
r.sZ(H.e([],[V.an]))
r.c=!1
C.a.h(this.c,r)
return r},
hJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
if(r.am(0,a))return r}return},
i:function(a){return this.b},
sh8:function(a){this.c=H.o(a,"$ib",[V.cw],"$ab")}}
V.dP.prototype={
i:function(a){var u,t
u=H.l0(this.b,"\n","\\n")
t=H.l0(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cv.prototype={
an:function(a,b,c){var u,t,s
H.o(c,"$ib",[P.d],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.I)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b},
sfK:function(a){var u=P.d
this.c=H.o(a,"$iA",[u,u],"$aA")}}
V.ie.prototype={
j:function(a,b){var u=this.a.n(0,b)
if(u==null){u=new V.cr(this,b)
u.sh8(H.e([],[V.cw]))
u.d=null
this.a.m(0,b,u)}return u},
M:function(a){var u,t
u=this.b.n(0,a)
if(u==null){u=new V.cv(this,a)
t=P.d
u.sfK(new H.aC([t,t]))
this.b.m(0,a,u)}return u},
dF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.e([],[V.dP])
t=this.c
s=[P.n]
r=H.e([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.C(a,o)
m=t.hJ(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dI(r,0,null)
throw H.c(P.ab("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.e([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dI(r,0,null)
k=t.d
j=k.c.n(0,l)
p=new V.dP(j==null?k.b:j,l,o)}++o}}},
sfX:function(a){this.a=H.o(a,"$iA",[P.d,V.cr],"$aA")},
sh1:function(a){this.b=H.o(a,"$iA",[P.d,V.cv],"$aA")}}
V.cw.prototype={
i:function(a){return this.b.b+": "+this.cd(0)}}
X.d5.prototype={$ilo:1}
X.fL.prototype={
gv:function(){var u=this.x
if(u==null){u=D.R()
this.x=u}return u}}
X.dA.prototype={
gv:function(){var u=this.f
if(u==null){u=D.R()
this.f=u}return u},
at:function(a){var u
H.f(a,"$iy")
u=this.f
if(u!=null)u.I(a)},
el:function(){return this.at(null)},
saV:function(a){var u,t
if(!J.a0(this.b,a)){u=this.b
if(u!=null)u.gv().T(0,this.gcj())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gcj())
u=new D.O("mover",t,this.b,this,[U.a9])
u.b=!0
this.at(u)}},
$ilo:1,
$id5:1}
X.dL.prototype={}
V.bh.prototype={
b1:function(a){this.b=new P.fO(C.T)
this.c=null
this.sbt(H.e([],[[P.b,W.as]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.e([],[W.as]))
t=a.split("\n")
for(u=t.length,s=[W.as],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.e([],s))
o=document.createElement("div")
o.className="codePart"
H.D(p)
n=this.b.ev(p,0,p.length)
m=n==null?p:n
C.f.e_(o,H.l0(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaf(this.d),o)}},
ds:function(a,b){var u,t,s,r
H.o(b,"$ib",[P.d],"$ab")
this.sbt(H.e([],[[P.b,W.as]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.b7()
this.c=t}for(t=t.dF(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)this.ba(t[r])},
sbt:function(a){this.d=H.o(a,"$ib",[[P.b,W.as]],"$ab")}}
V.kp.prototype={
$1:function(a){H.f(a,"$iaW")
P.bY(C.e.dE(this.a.ghO(),2)+" fps")},
$S:46}
V.fq.prototype={
ba:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break
case"Type":this.L(a.b,"#B11")
break
case"Whitespace":this.L(a.b,"#111")
break}},
b7:function(){var u,t,s,r
u=V.ig()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.t(new H.q("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.t(new H.q('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.t(new H.q('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.t(new H.q("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.t(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b2())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.t(new H.q("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.t(new H.q("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.t(new H.q("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.t(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b2())
s=u.j(0,"Start").l(0,"Slash")
t=V.t(new H.q("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.t(new H.q("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ai()
r=[V.an]
s.sZ(H.e([],r))
C.a.h(t.a,s)
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ai()
s.sZ(H.e([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.t(new H.q("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.t(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.t(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.M("Num")
s=u.j(0,"Float")
s.d=s.a.M("Num")
s=u.j(0,"Sym")
s.d=s.a.M("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.M("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.M("String")
s=u.j(0,"EndComment")
s.d=s.a.M("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.M("Whitespace")
s=u.j(0,"Id")
t=s.a.M("Id")
s.d=t
s=[P.d]
t.an(0,"Class",H.e(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.an(0,"Type",H.e(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.an(0,"Reserved",H.e(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fM.prototype={
ba:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Preprocess":this.L(a.b,"#737")
break
case"Reserved":this.L(a.b,"#119")
break
case"Symbol":this.L(a.b,"#611")
break
case"Type":this.L(a.b,"#171")
break
case"Whitespace":this.L(a.b,"#111")
break}},
b7:function(){var u,t,s,r
u=V.ig()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.t(new H.q("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.T("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.T("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.t(new H.q("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.t(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.b2())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ai()
r=[V.an]
s.sZ(H.e([],r))
C.a.h(t.a,s)
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.t(new H.q("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ai()
t.sZ(H.e([],r))
C.a.h(s.a,t)
s=V.t(new H.q("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.t(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.t(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.M("Num")
t=u.j(0,"Float")
t.d=t.a.M("Num")
t=u.j(0,"Sym")
t.d=t.a.M("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.M("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.M("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.M("Whitespace")
t=u.j(0,"Id")
s=t.a.M("Id")
t.d=s
t=[P.d]
s.an(0,"Type",H.e(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.an(0,"Reserved",H.e(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.an(0,"Builtin",H.e(["gl_FragColor","gl_Position"],t))
return u}}
V.fN.prototype={
ba:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
this.L("=","#111")
break
case"Id":this.L(a.b,"#111")
break
case"Other":this.L(a.b,"#111")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break}},
b7:function(){var u,t,s
u=V.ig()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
s=V.T("a","z")
C.a.h(t.a,s)
s=V.T("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=V.T("0","9")
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.t(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.t(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.t(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.t(new H.q('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.t(new H.q('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.t(new H.q("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.t(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.b2())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b2())
t=u.j(0,"Other").l(0,"Other")
s=new V.ai()
s.sZ(H.e([],[V.an]))
C.a.h(t.a,s)
t=V.t(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.T("a","z")
C.a.h(s.a,t)
t=V.T("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.M("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.M("String")
t=u.j(0,"Id")
s=t.a.M("Id")
t.d=s
s.an(0,"Reserved",H.e(["DOCTYPE","html","head","meta","link","title","body","script"],[P.d]))
s=u.j(0,"Attr")
s.d=s.a.M("Attr")
s=u.j(0,"Other")
s.d=s.a.M("Other")
return u}}
V.hs.prototype={
ds:function(a,b){H.o(b,"$ib",[P.d],"$ab")
this.sbt(H.e([],[[P.b,W.as]]))
this.L(C.a.l(b,"\n"),"#111")},
ba:function(a){},
b7:function(){return}}
V.hw.prototype={
cT:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.iH().gaY().n(0,H.j(u))
if(t==null)if(d){c.$0()
this.aP(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.c2(this.c).h(0,q)
o=W.mZ("radio")
o.checked=s
o.name=u
u=W.m
W.a1(o,"change",H.k(new V.hx(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.C.u(q,o)
n=r.createElement("span")
n.textContent=b
C.C.u(q,n)
J.c2(this.c).h(0,r.createElement("br"))},
a0:function(a,b,c){return this.cT(a,b,c,!1)},
aP:function(a){var u,t,s,r,q
u=P.iH()
t=P.d
s=P.ll(u.gaY(),t,t)
s.m(0,this.a,a)
r=u.c3(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).cL(t,new P.eE([],[]).bd(""),"",q)}}
V.hx.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aP(this.d)}},
$S:13}
V.hN.prototype={
ec:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.l).u(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.l.u(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.f.u(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.f.u(q,p)}o=u.createElement("div")
this.a=o
C.f.u(q,o)
this.b=null
o=W.m
W.a1(u,"scroll",H.k(new V.hP(s),{func:1,ret:-1,args:[o]}),!1,o)},
cV:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.d],"$ab")
this.fT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dF(C.a.hU(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.f.u(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.f.u(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.f.u(t,o)
break
case"Link":n=p.b
if(H.oA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.D(m[1])
l.textContent=H.D(m[0])
C.f.u(t,l)}else{k=P.eO(C.F,n,C.i,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.f.u(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.f.u(t,o)
break}}C.f.u(this.a,t)},
dP:function(a){var u,t,s,r
u=new V.fq("dart")
u.b1("dart")
t=new V.fM("glsl")
t.b1("glsl")
s=new V.fN("html")
s.b1("html")
r=C.a.hK(H.e([u,t,s],[V.bh]),new V.hQ(a))
if(r!=null)return r
u=new V.hs("plain")
u.b1("plain")
return u},
cU:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.o(a7,"$ib",[P.d],"$ab")
u=H.e([],[P.n])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cS(r).X(r,"+")){C.a.m(a7,s,C.b.ah(r,1))
C.a.h(u,1)
t=!0}else if(C.b.X(r,"-")){C.a.m(a7,s,C.b.ah(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dP(a5)
q.ds(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.f.u(o,n)
C.f.u(this.a,o)
m=P.eO(C.F,a4,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.l8(null)
i.href="#"+H.j(m)
i.textContent=a4
C.f.u(j,i)
C.t.u(k,j)
C.j.u(l,k)
C.k.u(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.i(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.I)(r),++a0)C.t.u(a,r[a0])
C.j.u(e,d)
C.j.u(e,c)
C.j.u(e,a)
C.k.u(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.I)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.w();)C.t.u(c,a3.gH(a3))
C.j.u(e,d)
C.j.u(e,c)
C.k.u(n,e)}},
hb:function(a){var u,t,s,r,q,p,o
H.o(a,"$ib",[P.d],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.f.u(this.a,t)
r=C.k.eK(t,-1)
s=H.f((r&&C.j).cE(r,-1),"$iaV").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<2;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(C.j.cE(r,-1),"$iaV")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.t).u(o,p)}},
fT:function(){var u,t,s,r
if(this.b!=null)return
u=V.ig()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ai()
r=[V.an]
s.sZ(H.e([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ai()
s.sZ(H.e([],r))
C.a.h(t.a,s)
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ai()
s.sZ(H.e([],r))
C.a.h(t.a,s)
t=V.t(new H.q("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.t(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.t(new H.q("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ai()
t.sZ(H.e([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ai()
t.sZ(H.e([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b2())
s=u.j(0,"Other").l(0,"Other")
t=new V.ai()
t.sZ(H.e([],r))
C.a.h(s.a,t)
s=V.t(new H.q("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.M("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.M("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.M("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.M("Link")
s=u.j(0,"Other")
s.d=s.a.M("Other")
this.b=u}}
V.hP.prototype={
$1:function(a){P.lC(C.u,new V.hO(this.a))},
$S:13}
V.hO.prototype={
$0:function(){var u,t,s
u=C.e.aa(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.hQ.prototype={
$1:function(a){return H.f(a,"$ibh").a===this.a},
$S:47}
V.i6.prototype={
a0:function(a,b,c){var u,t,s,r,q
u=W.lj(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.c2(this.c)
s=t.gk(t)
t=W.Z
W.a1(u,"click",H.k(new V.i8(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.c2(this.c).h(0,u)
J.c2(this.c).h(0,document.createElement("br"))
r=P.iH().gaY().n(0,H.j(this.a))
if(r==null){this.aP(s)
q=c}else q=P.cT(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.a0(a,b,!1)},
aP:function(a){var u,t,s,r,q
u=P.iH()
t=P.d
s=P.ll(u.gaY(),t,t)
s.m(0,this.a,""+a)
r=u.c3(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).cL(t,new P.eE([],[]).bd(""),"",q)}}
V.i8.prototype={
$1:function(a){var u,t
H.f(a,"$iZ")
u=this.a
t=J.c2(u.c)
t.D(t,new V.i7())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.aP(this.d)},
$S:48}
V.i7.prototype={
$1:function(a){var u
H.f(a,"$iH")
if(!!J.K(a).$ibF){u=a.style
u.border="solid 2px white"}},
$S:49}
T.fe.prototype={}
T.d3.prototype={
gv:function(){var u=this.d
if(u==null){u=D.R()
this.d=u}return u},
b4:function(a){var u
H.f(a,"$iy")
u=this.d
if(u!=null)u.I(a)},
fZ:function(){return this.b4(null)},
sa4:function(a){var u=this.c
if(!(Math.abs(u-a)<$.Q().a)){this.c=a
u=new D.O("offsetScalar",u,a,this,[P.B])
u.b=!0
this.b4(u)}}}
T.kb.prototype={
$1:function(a){var u,t,s,r
u=this.a
t=this.b.f.hX(a)
s=u.b
if(s!==t){if(s!=null)s.gv().T(0,u.gcP())
r=u.b
u.b=t
t.gv().h(0,u.gcP())
t=new D.O("bumpyTexture",r,u.b,u,[T.dN])
t.b=!0
u.b4(t)}},
$S:16}
T.kc.prototype={
$0:function(){this.a.sa4(0.1)},
$S:0}
T.kd.prototype={
$0:function(){this.a.sa4(0.2)},
$S:0}
T.kf.prototype={
$0:function(){this.a.sa4(0.3)},
$S:0}
T.kg.prototype={
$0:function(){this.a.sa4(0.4)},
$S:0}
T.kh.prototype={
$0:function(){this.a.sa4(0.5)},
$S:0}
T.ki.prototype={
$0:function(){this.a.sa4(0.6)},
$S:0}
T.kj.prototype={
$0:function(){this.a.sa4(0.7)},
$S:0}
T.kk.prototype={
$0:function(){this.a.sa4(0.8)},
$S:0}
T.kl.prototype={
$0:function(){this.a.sa4(0.9)},
$S:0}
T.km.prototype={
$0:function(){this.a.sa4(1)},
$S:0}
T.ke.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.d]
u.cU("Vertex Shader","glsl",0,H.e((s==null?null:s.c).split("\n"),r))
t=t.a
u.cU("Fragment Shader","glsl",0,H.e((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.e3=u.i
u=J.dn.prototype
u.e5=u.i
u=P.l.prototype
u.e4=u.be
u=W.H.prototype
u.bl=u.a7
u=W.ev.prototype
u.e7=u.ad
u=V.du.prototype
u.e6=u.am
u.cd=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"o8","nC",10)
u(P,"o9","nD",10)
u(P,"oa","nE",10)
t(P,"m6","o7",3)
s(W,"ol",4,null,["$4"],["nG"],22,0)
s(W,"om",4,null,["$4"],["nH"],22,0)
var m
r(m=E.af.prototype,"gdm",0,0,null,["$1","$0"],["dn","i6"],2,0)
r(m,"gdq",0,0,null,["$1","$0"],["dr","i7"],2,0)
r(m,"gdk",0,0,null,["$1","$0"],["dl","i5"],2,0)
r(m,"gdi",0,0,null,["$1","$0"],["dj","i2"],2,0)
q(m,"gi0","i1",7)
q(m,"gi3","i4",7)
r(m=E.dO.prototype,"gcf",0,0,null,["$1","$0"],["ci","cg"],2,0)
p(m,"gio","dz",3)
o(m=X.dX.prototype,"gfb","fc",11)
o(m,"gf_","f0",11)
o(m,"gf5","f6",4)
o(m,"gff","fg",25)
o(m,"gfd","fe",25)
o(m,"gfi","fj",4)
o(m,"gfm","fn",4)
o(m,"gf9","fa",4)
o(m,"gfk","fl",4)
o(m,"gf7","f8",4)
o(m,"gfo","fp",37)
o(m,"gfq","fs",11)
o(m,"gfC","fD",12)
o(m,"gfw","fz",12)
o(m,"gfA","fB",12)
n(V.P.prototype,"gk","bX",26)
n(V.a7.prototype,"gk","bX",26)
r(m=U.ce.prototype,"gav",0,0,null,["$1","$0"],["N","a_"],2,0)
q(m,"geY","eZ",27)
q(m,"gfu","fv",27)
r(m=U.dY.prototype,"gav",0,0,null,["$1","$0"],["N","a_"],2,0)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
r(m=U.dZ.prototype,"gav",0,0,null,["$1","$0"],["N","a_"],2,0)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
o(m,"geR","eS",1)
o(m,"geT","eU",1)
o(m,"gh6","h7",1)
o(m,"gh4","h5",1)
o(m,"gh2","h3",1)
o(U.e_.prototype,"geW","eX",1)
r(m=M.db.prototype,"gar",0,0,null,["$1","$0"],["as","eh"],2,0)
q(m,"gf1","f2",7)
q(m,"gf3","f4",7)
r(X.dA.prototype,"gcj",0,0,null,["$1","$0"],["at","el"],2,0)
r(T.d3.prototype,"gcP",0,0,null,["$1","$0"],["b4","fZ"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.kC,J.a,J.am,P.ei,P.l,H.cg,P.aQ,H.bD,H.cy,H.fj,H.hA,H.il,P.bk,H.c6,H.eA,P.a8,H.fX,H.fZ,H.fT,P.eH,P.b0,P.ax,P.e2,P.hX,P.ct,P.hY,P.aW,P.ad,P.jR,P.jv,P.bR,P.eh,P.u,P.jI,P.h4,P.bB,P.fP,P.jP,P.jN,P.N,P.ae,P.X,P.bj,P.hq,P.dH,P.ea,P.fK,P.bl,P.b,P.A,P.F,P.aj,P.d,P.ak,P.bS,P.iF,P.jy,W.fm,W.bt,W.z,W.dy,W.ev,W.jD,W.dc,W.ap,W.ju,W.eP,P.jA,P.eM,P.jp,P.J,O.a4,O.ch,E.fc,E.af,E.hB,E.dO,Z.e1,Z.iZ,Z.d2,Z.bG,Z.cz,D.fg,D.cb,D.y,X.d4,X.dp,X.fV,X.h1,X.ao,X.hf,X.ih,X.dX,V.bC,V.fA,V.bn,V.ac,V.bq,V.dB,V.dE,V.P,V.a7,U.dY,U.dZ,U.e_,M.db,A.d_,A.f5,A.dR,A.ix,F.a5,F.b5,F.bJ,F.dG,F.hK,F.hL,F.hM,F.aZ,F.iP,F.iQ,F.iT,F.iU,O.bP,T.ia,V.b2,V.an,V.du,V.hz,V.hJ,V.cr,V.dP,V.cv,V.ie,X.d5,X.dL,X.dA,V.bh,V.hw,V.hN,V.i6])
s(J.a,[J.fS,J.dl,J.dn,J.aR,J.dm,J.bH,H.ck,H.bo,W.h,W.f3,W.by,W.bA,W.aO,W.aP,W.M,W.e4,W.fr,W.fs,W.d8,W.e6,W.da,W.e8,W.fu,W.m,W.eb,W.aB,W.df,W.ed,W.b4,W.ds,W.h9,W.ej,W.ek,W.aD,W.el,W.eo,W.aE,W.es,W.dD,W.eu,W.aG,W.ew,W.aH,W.eB,W.au,W.eF,W.id,W.aJ,W.eI,W.ij,W.iL,W.eQ,W.eS,W.eU,W.eW,W.eY,P.aT,P.ef,P.aU,P.eq,P.hv,P.eC,P.aX,P.eK,P.f6,P.e3,P.d0,P.dd,P.dC,P.bO,P.dF,P.dM,P.dT,P.ey])
s(J.dn,[J.hr,J.cx,J.bm])
t(J.kB,J.aR)
s(J.dm,[J.dk,J.dj])
t(P.h0,P.ei)
s(P.h0,[H.dV,W.j5,W.ag,P.fG])
t(H.q,H.dV)
s(P.l,[H.fx,H.h5,H.cA])
s(H.fx,[H.bI,H.fY])
s(P.aQ,[H.h6,H.j_])
t(H.h7,H.bI)
t(H.fk,H.fj)
s(P.bk,[H.hn,H.fU,H.iD,H.io,H.ff,H.hH,P.dz,P.aA,P.iE,P.iB,P.cs,P.fi,P.fp])
s(H.c6,[H.kq,H.i2,H.k6,H.k7,H.k8,P.j1,P.j0,P.j2,P.j3,P.jH,P.jG,P.jc,P.jg,P.jd,P.je,P.jf,P.jj,P.jk,P.ji,P.jh,P.hZ,P.i_,P.jY,P.js,P.jr,P.jt,P.h_,P.h3,P.jO,P.fv,P.fw,P.iK,P.iG,P.iI,P.iJ,P.jJ,P.jK,P.jM,P.jL,P.jT,P.jS,P.jU,P.jV,W.fy,W.hb,W.hd,W.hG,W.hW,W.jb,W.hm,W.hl,W.jw,W.jx,W.jF,W.jQ,P.jB,P.k_,P.fH,P.fI,P.f8,E.hC,E.hD,E.hE,E.ic,D.fC,D.fD,F.k3,F.k4,F.iW,F.iV,F.iR,F.iS,T.ib,V.kp,V.hx,V.hP,V.hO,V.hQ,V.i8,V.i7,T.kb,T.kc,T.kd,T.kf,T.kg,T.kh,T.ki,T.kj,T.kk,T.kl,T.km,T.ke])
s(H.i2,[H.hU,H.c4])
t(P.h2,P.a8)
s(P.h2,[H.aC,W.j4])
t(H.dv,H.bo)
s(H.dv,[H.cE,H.cG])
t(H.cF,H.cE)
t(H.cl,H.cF)
t(H.cH,H.cG)
t(H.dw,H.cH)
s(H.dw,[H.hg,H.hh,H.hi,H.hj,H.hk,H.dx,H.cm])
t(P.jq,P.jR)
t(P.jo,P.jv)
t(P.eN,P.h4)
t(P.dW,P.eN)
s(P.bB,[P.fa,P.fz])
t(P.bi,P.hY)
s(P.bi,[P.fb,P.fO,P.iO,P.iN])
t(P.iM,P.fz)
s(P.X,[P.B,P.n])
s(P.aA,[P.bN,P.fQ])
t(P.j7,P.bS)
s(W.h,[W.C,W.fF,W.aF,W.cI,W.aI,W.av,W.cK,W.iY,W.cB,P.f9,P.bx])
s(W.C,[W.H,W.bg,W.c9,W.cC])
s(W.H,[W.w,P.p])
s(W.w,[W.cY,W.f4,W.c3,W.bf,W.bz,W.as,W.fJ,W.de,W.bF,W.cf,W.dq,W.ci,W.hI,W.aV,W.dJ,W.dK,W.i1,W.cu])
s(W.aO,[W.c7,W.fn,W.fo])
t(W.fl,W.aP)
t(W.c8,W.e4)
t(W.e7,W.e6)
t(W.d9,W.e7)
t(W.e9,W.e8)
t(W.ft,W.e9)
t(W.at,W.by)
t(W.ec,W.eb)
t(W.cc,W.ec)
t(W.ee,W.ed)
t(W.bE,W.ee)
t(W.dg,W.c9)
t(W.bs,W.m)
s(W.bs,[W.aS,W.Z,W.aK])
t(W.ha,W.ej)
t(W.hc,W.ek)
t(W.em,W.el)
t(W.he,W.em)
t(W.ep,W.eo)
t(W.cn,W.ep)
t(W.et,W.es)
t(W.ht,W.et)
t(W.hF,W.eu)
t(W.cJ,W.cI)
t(W.hR,W.cJ)
t(W.ex,W.ew)
t(W.hS,W.ex)
t(W.hV,W.eB)
t(W.eG,W.eF)
t(W.i3,W.eG)
t(W.cL,W.cK)
t(W.i4,W.cL)
t(W.eJ,W.eI)
t(W.ii,W.eJ)
t(W.iX,W.ci)
t(W.b_,W.Z)
t(W.eR,W.eQ)
t(W.j6,W.eR)
t(W.e5,W.da)
t(W.eT,W.eS)
t(W.jl,W.eT)
t(W.eV,W.eU)
t(W.en,W.eV)
t(W.eX,W.eW)
t(W.jz,W.eX)
t(W.eZ,W.eY)
t(W.jC,W.eZ)
t(W.j8,W.j4)
t(W.j9,P.hX)
t(W.kM,W.j9)
t(W.ja,P.ct)
t(W.jE,W.ev)
t(P.eE,P.jA)
t(P.a2,P.jp)
t(P.eg,P.ef)
t(P.fW,P.eg)
t(P.er,P.eq)
t(P.ho,P.er)
t(P.cp,P.p)
t(P.eD,P.eC)
t(P.i0,P.eD)
t(P.eL,P.eK)
t(P.ik,P.eL)
t(P.f7,P.e3)
t(P.hp,P.bx)
t(P.ez,P.ey)
t(P.hT,P.ez)
s(E.fc,[Z.d1,A.cq,T.i5])
s(D.y,[D.dh,D.di,D.O,X.hu])
s(X.hu,[X.dt,X.b7,X.cj,X.dQ])
s(D.fg,[U.fh,U.a9])
t(U.d6,U.a9)
t(U.ce,O.a4)
s(A.dR,[A.ip,A.is,A.iu,A.iw,A.iq,A.dS,A.ir,A.it,A.iv,A.iy,A.iz,A.bQ,A.dU,A.iA])
t(T.dN,T.i5)
t(T.i9,T.dN)
s(V.du,[V.ai,V.cw])
t(X.fL,X.dL)
s(V.bh,[V.fq,V.fM,V.fN,V.hs])
t(T.fe,A.cq)
t(T.d3,O.bP)
u(H.dV,H.cy)
u(H.cE,P.u)
u(H.cF,H.bD)
u(H.cG,P.u)
u(H.cH,H.bD)
u(P.ei,P.u)
u(P.eN,P.jI)
u(W.e4,W.fm)
u(W.e6,P.u)
u(W.e7,W.z)
u(W.e8,P.u)
u(W.e9,W.z)
u(W.eb,P.u)
u(W.ec,W.z)
u(W.ed,P.u)
u(W.ee,W.z)
u(W.ej,P.a8)
u(W.ek,P.a8)
u(W.el,P.u)
u(W.em,W.z)
u(W.eo,P.u)
u(W.ep,W.z)
u(W.es,P.u)
u(W.et,W.z)
u(W.eu,P.a8)
u(W.cI,P.u)
u(W.cJ,W.z)
u(W.ew,P.u)
u(W.ex,W.z)
u(W.eB,P.a8)
u(W.eF,P.u)
u(W.eG,W.z)
u(W.cK,P.u)
u(W.cL,W.z)
u(W.eI,P.u)
u(W.eJ,W.z)
u(W.eQ,P.u)
u(W.eR,W.z)
u(W.eS,P.u)
u(W.eT,W.z)
u(W.eU,P.u)
u(W.eV,W.z)
u(W.eW,P.u)
u(W.eX,W.z)
u(W.eY,P.u)
u(W.eZ,W.z)
u(P.ef,P.u)
u(P.eg,W.z)
u(P.eq,P.u)
u(P.er,W.z)
u(P.eC,P.u)
u(P.eD,W.z)
u(P.eK,P.u)
u(P.eL,W.z)
u(P.e3,P.a8)
u(P.ey,P.u)
u(P.ez,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bf.prototype
C.m=W.bz.prototype
C.y=W.bA.prototype
C.f=W.as.prototype
C.Q=W.d8.prototype
C.S=W.de.prototype
C.z=W.df.prototype
C.n=W.dg.prototype
C.U=J.a.prototype
C.a=J.aR.prototype
C.V=J.dj.prototype
C.d=J.dk.prototype
C.W=J.dl.prototype
C.e=J.dm.prototype
C.b=J.bH.prototype
C.a2=J.bm.prototype
C.C=W.dq.prototype
C.a8=W.cn.prototype
C.I=J.hr.prototype
C.J=W.dD.prototype
C.c=P.bO.prototype
C.t=W.aV.prototype
C.k=W.dJ.prototype
C.j=W.dK.prototype
C.x=J.cx.prototype
C.K=W.b_.prototype
C.L=W.cB.prototype
C.N=new P.fb(!1)
C.M=new P.fa(C.N)
C.O=new P.hq()
C.P=new P.iO()
C.h=new P.jq()
C.u=new P.bj(0)
C.R=new P.bj(5e6)
C.T=new P.fP("element",!0,!1,!1,!1)
C.X=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Y=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.Z=function(getTagFallback) {
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
C.a_=function() {
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
C.a0=function(hooks) {
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
C.a1=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=H.e(u([127,2047,65535,1114111]),[P.n])
C.o=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.n])
C.a3=H.e(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.p=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.q=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a4=H.e(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.E=H.e(u([]),[P.d])
C.a5=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.F=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.r=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.G=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a6=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.H=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.v=H.e(u(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.e(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a7=new H.fk(0,{},C.E,[P.d,P.d])
C.i=new P.iM(!1)})();(function staticFields(){$.aM=0
$.c5=null
$.la=null
$.kQ=!1
$.m9=null
$.m4=null
$.mf=null
$.k0=null
$.k9=null
$.kY=null
$.bT=null
$.cO=null
$.cP=null
$.kR=!1
$.U=C.h
$.b3=null
$.ky=null
$.lh=null
$.lg=null
$.ln=null
$.ls=null
$.lt=null
$.lx=null
$.lI=null
$.lL=null
$.lK=null
$.lJ=null
$.lr=null
$.mM="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n"
$.mL="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oI","mi",function(){return H.m8("_$dart_dartClosure")})
u($,"oJ","l1",function(){return H.m8("_$dart_js")})
u($,"oP","mj",function(){return H.aY(H.im({
toString:function(){return"$receiver$"}}))})
u($,"oQ","mk",function(){return H.aY(H.im({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oR","ml",function(){return H.aY(H.im(null))})
u($,"oS","mm",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","mp",function(){return H.aY(H.im(void 0))})
u($,"oW","mq",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oU","mo",function(){return H.aY(H.lE(null))})
u($,"oT","mn",function(){return H.aY(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oY","ms",function(){return H.aY(H.lE(void 0))})
u($,"oX","mr",function(){return H.aY(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pe","l2",function(){return P.nB()})
u($,"pk","cW",function(){return[]})
u($,"p0","mt",function(){return P.ny()})
u($,"pf","mx",function(){return H.n7(H.jW(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))})
u($,"pi","mz",function(){return P.nm("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"pj","mA",function(){return P.o_()})
u($,"pg","my",function(){return P.lm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)})
u($,"ph","l3",function(){return P.kE(P.d,P.bl)})
u($,"p7","mw",function(){return Z.aw(0)})
u($,"p1","mu",function(){return Z.aw(511)})
u($,"p9","bb",function(){return Z.aw(1)})
u($,"p8","ba",function(){return Z.aw(2)})
u($,"p3","b9",function(){return Z.aw(4)})
u($,"pa","bc",function(){return Z.aw(8)})
u($,"pb","c1",function(){return Z.aw(16)})
u($,"p4","cU",function(){return Z.aw(32)})
u($,"p5","cV",function(){return Z.aw(64)})
u($,"p6","mv",function(){return Z.aw(96)})
u($,"pc","bd",function(){return Z.aw(128)})
u($,"p2","c0",function(){return Z.aw(256)})
u($,"oH","mh",function(){return new V.fA(1e-9)})
u($,"oG","Q",function(){return $.mh()})})()
var v={mangledGlobalNames:{n:"int",B:"double",X:"num",d:"String",N:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.F},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.Z]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[P.n,[P.l,E.af]]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:P.F,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:P.F,args:[W.m]},{func:1,ret:P.N,args:[W.ap]},{func:1,ret:P.d,args:[P.n]},{func:1,ret:P.F,args:[P.d]},{func:1,args:[,]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.N,args:[P.d]},{func:1,ret:P.N,args:[W.C]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.H,P.d,P.d,W.bt]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.n,[P.l,U.a9]]},{func:1,ret:P.J,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[,],opt:[P.aj]},{func:1,ret:P.F,args:[P.X]},{func:1,ret:P.J,args:[P.n]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[W.m]},{func:1,ret:P.F,args:[P.d,,]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[P.d],opt:[,]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.H,args:[W.C]},{func:1,ret:P.B,args:[P.B,P.B]},{func:1,ret:P.F,args:[F.aZ,P.B,P.B]},{func:1,ret:[P.A,P.d,P.d],args:[[P.A,P.d,P.d],P.d]},{func:1,ret:-1,args:[P.d,P.n]},{func:1,ret:P.F,args:[P.aW]},{func:1,ret:P.N,args:[V.bh]},{func:1,ret:P.F,args:[W.Z]},{func:1,ret:P.F,args:[W.H]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.ax,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ck,DataView:H.bo,ArrayBufferView:H.bo,Float32Array:H.cl,Float64Array:H.cl,Int16Array:H.hg,Int32Array:H.hh,Int8Array:H.hi,Uint16Array:H.hj,Uint32Array:H.hk,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.cm,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.f3,HTMLAnchorElement:W.cY,HTMLAreaElement:W.f4,HTMLBaseElement:W.c3,Blob:W.by,HTMLBodyElement:W.bf,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.bA,CDATASection:W.bg,CharacterData:W.bg,Comment:W.bg,ProcessingInstruction:W.bg,Text:W.bg,CSSNumericValue:W.c7,CSSUnitValue:W.c7,CSSPerspective:W.fl,CSSCharsetRule:W.M,CSSConditionRule:W.M,CSSFontFaceRule:W.M,CSSGroupingRule:W.M,CSSImportRule:W.M,CSSKeyframeRule:W.M,MozCSSKeyframeRule:W.M,WebKitCSSKeyframeRule:W.M,CSSKeyframesRule:W.M,MozCSSKeyframesRule:W.M,WebKitCSSKeyframesRule:W.M,CSSMediaRule:W.M,CSSNamespaceRule:W.M,CSSPageRule:W.M,CSSRule:W.M,CSSStyleRule:W.M,CSSSupportsRule:W.M,CSSViewportRule:W.M,CSSStyleDeclaration:W.c8,MSStyleCSSProperties:W.c8,CSS2Properties:W.c8,CSSImageValue:W.aO,CSSKeywordValue:W.aO,CSSPositionValue:W.aO,CSSResourceValue:W.aO,CSSURLImageValue:W.aO,CSSStyleValue:W.aO,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.fn,CSSUnparsedValue:W.fo,DataTransferItemList:W.fr,HTMLDivElement:W.as,XMLDocument:W.c9,Document:W.c9,DOMException:W.fs,DOMImplementation:W.d8,ClientRectList:W.d9,DOMRectList:W.d9,DOMRectReadOnly:W.da,DOMStringList:W.ft,DOMTokenList:W.fu,Element:W.H,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,XMLHttpRequest:W.h,XMLHttpRequestEventTarget:W.h,XMLHttpRequestUpload:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.at,FileList:W.cc,FileWriter:W.fF,HTMLFormElement:W.fJ,Gamepad:W.aB,HTMLHeadElement:W.de,History:W.df,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,HTMLDocument:W.dg,ImageData:W.b4,HTMLImageElement:W.bF,HTMLInputElement:W.cf,KeyboardEvent:W.aS,HTMLLabelElement:W.dq,Location:W.ds,HTMLAudioElement:W.ci,HTMLMediaElement:W.ci,MediaList:W.h9,MIDIInputMap:W.ha,MIDIOutputMap:W.hc,MimeType:W.aD,MimeTypeArray:W.he,PointerEvent:W.Z,MouseEvent:W.Z,DragEvent:W.Z,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cn,RadioNodeList:W.cn,Plugin:W.aE,PluginArray:W.ht,Range:W.dD,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.aF,SourceBufferList:W.hR,SpeechGrammar:W.aG,SpeechGrammarList:W.hS,SpeechRecognitionResult:W.aH,Storage:W.hV,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableCellElement:W.aV,HTMLTableDataCellElement:W.aV,HTMLTableHeaderCellElement:W.aV,HTMLTableElement:W.dJ,HTMLTableRowElement:W.dK,HTMLTableSectionElement:W.i1,HTMLTemplateElement:W.cu,TextTrack:W.aI,TextTrackCue:W.av,VTTCue:W.av,TextTrackCueList:W.i3,TextTrackList:W.i4,TimeRanges:W.id,Touch:W.aJ,TouchEvent:W.aK,TouchList:W.ii,TrackDefaultList:W.ij,CompositionEvent:W.bs,FocusEvent:W.bs,TextEvent:W.bs,UIEvent:W.bs,URL:W.iL,HTMLVideoElement:W.iX,VideoTrackList:W.iY,WheelEvent:W.b_,Window:W.cB,DOMWindow:W.cB,Attr:W.cC,CSSRuleList:W.j6,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.jl,NamedNodeMap:W.en,MozNamedAttrMap:W.en,SpeechRecognitionResultList:W.jz,StyleSheetList:W.jC,SVGLength:P.aT,SVGLengthList:P.fW,SVGNumber:P.aU,SVGNumberList:P.ho,SVGPointList:P.hv,SVGScriptElement:P.cp,SVGStringList:P.i0,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.aX,SVGTransformList:P.ik,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bx,webkitAudioContext:P.bx,BaseAudioContext:P.bx,OfflineAudioContext:P.hp,WebGLBuffer:P.d0,WebGLFramebuffer:P.dd,WebGLProgram:P.dC,WebGL2RenderingContext:P.bO,WebGLShader:P.dF,WebGLTexture:P.dM,WebGLUniformLocation:P.dT,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cK.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.mc,[])
else T.mc([])})})()
//# sourceMappingURL=test.dart.js.map
