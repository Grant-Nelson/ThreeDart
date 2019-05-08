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
a[c]=function(){a[c]=function(){H.lJ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ix"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ix"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ix(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ij:function ij(a){this.a=a},
iR:function(){return new P.ci("No element")},
ku:function(){return new P.ci("Too many elements")},
V:function V(a){this.a=a},
e4:function e4(){},
bs:function bs(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eu:function eu(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(){},
dr:function dr(){},
dq:function dq(){},
cE:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ls:function(a){return v.types[H.ac(a)]},
lz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iaC},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b_(a)
if(typeof u!=="string")throw H.h(H.cA(a))
return u},
kN:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ih(u)
t=u[0]
s=u[1]
return new H.eF(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ce:function(a){return H.kD(a)+H.iv(H.bi(a),0,null)},
kD:function(a){var u,t,s,r,q,p,o,n,m
u=J.P(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$icn){p=C.q(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cE(r.length>1&&C.d.a8(r,0)===36?C.d.ci(r,1):r)},
j7:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kM:function(a){var u,t,s,r
u=H.d([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.ae)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.cA(r))
if(r<=65535)C.a.i(u,r)
else if(r<=1114111){C.a.i(u,55296+(C.e.aD(r-65536,10)&1023))
C.a.i(u,56320+(r&1023))}else throw H.h(H.cA(r))}return H.j7(u)},
j8:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.cA(s))
if(s<0)throw H.h(H.cA(s))
if(s>65535)return H.kM(a)}return H.j7(a)},
kL:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aD(u,10))>>>0,56320|u&1023)}throw H.h(P.av(a,0,1114111,null,null))},
bD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kK:function(a){var u=H.bD(a).getFullYear()+0
return u},
kI:function(a){var u=H.bD(a).getMonth()+1
return u},
kE:function(a){var u=H.bD(a).getDate()+0
return u},
kF:function(a){var u=H.bD(a).getHours()+0
return u},
kH:function(a){var u=H.bD(a).getMinutes()+0
return u},
kJ:function(a){var u=H.bD(a).getSeconds()+0
return u},
kG:function(a){var u=H.bD(a).getMilliseconds()+0
return u},
aQ:function(a){throw H.h(H.cA(a))},
e:function(a,b){if(a==null)J.cJ(a)
throw H.h(H.cC(a,b))},
cC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
u=H.ac(J.cJ(a))
if(!(b<0)){if(typeof u!=="number")return H.aQ(u)
t=b>=u}else t=!0
if(t)return P.c5(b,a,"index",null,u)
return P.eE(b,"index",null)},
lo:function(a,b,c){if(a>c)return new P.bE(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bE(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
cA:function(a){return new P.aI(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.da()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jK})
u.name=""}else u.toString=H.jK
return u},
jK:function(){return J.b_(this.dartException)},
bk:function(a){throw H.h(a)},
ae:function(a){throw H.h(P.bm(a))},
aN:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jg:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j1:function(a,b){return new H.eB(a,b==null?null:b.method)},
ik:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.em(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.i7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aD(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ik(H.b(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.j1(H.b(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jS()
p=$.jT()
o=$.jU()
n=$.jV()
m=$.jY()
l=$.jZ()
k=$.jX()
$.jW()
j=$.k0()
i=$.k_()
h=q.N(t)
if(h!=null)return u.$1(H.ik(H.E(t),h))
else{h=p.N(t)
if(h!=null){h.method="call"
return u.$1(H.ik(H.E(t),h))}else{h=o.N(t)
if(h==null){h=n.N(t)
if(h==null){h=m.N(t)
if(h==null){h=l.N(t)
if(h==null){h=k.N(t)
if(h==null){h=n.N(t)
if(h==null){h=j.N(t)
if(h==null){h=i.N(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.j1(H.E(t),h))}}return u.$1(new H.ff(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.di()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aI(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.di()
return a},
bj:function(a){var u
if(a==null)return new H.dE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dE(a)},
lq:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.H(0,a[t],a[s])}return b},
ly:function(a,b,c,d,e,f){H.l(a,"$ib5")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.cT("Unsupported number of arguments for wrapped closure"))},
cB:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ly)
a.$identity=u
return u},
kj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.P(d).$ia){u.$reflectionInfo=d
s=H.kN(u).r}else s=d
r=e?Object.create(new H.eT().constructor.prototype):Object.create(new H.bT(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aJ
if(typeof p!=="number")return p.K()
$.aJ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iL(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ls,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iK:H.ib
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iL(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kg:function(a,b,c,d){var u=H.ib
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ki(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kg(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.K()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bU
if(q==null){q=H.dU("self")
$.bU=q}return new Function(r+H.b(q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.K()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.bU
if(q==null){q=H.dU("self")
$.bU=q}return new Function(r+H.b(q)+"."+H.b(u)+"("+o+");}")()},
kh:function(a,b,c,d){var u,t
u=H.ib
t=H.iK
switch(b?-1:a){case 0:throw H.h(H.kQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ki:function(a,b){var u,t,s,r,q,p,o,n
u=$.bU
if(u==null){u=H.dU("self")
$.bU=u}t=$.iJ
if(t==null){t=H.dU("receiver")
$.iJ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kh(r,!p,s,b)
if(r===1){u="return function(){return this."+H.b(u)+"."+H.b(s)+"(this."+H.b(t)+");"
t=$.aJ
if(typeof t!=="number")return t.K()
$.aJ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.b(u)+"."+H.b(s)+"(this."+H.b(t)+", "+n+");"
t=$.aJ
if(typeof t!=="number")return t.K()
$.aJ=t+1
return new Function(u+t+"}")()},
ix:function(a,b,c,d,e,f,g){return H.kj(a,b,H.ac(c),d,!!e,!!f,g)},
ib:function(a){return a.a},
iK:function(a){return a.c},
dU:function(a){var u,t,s,r,q
u=new H.bT("self","target","receiver","name")
t=J.ih(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aF(a,"String"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"double"))},
lE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"num"))},
lm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aF(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aF(a,"int"))},
jI:function(a,b){throw H.h(H.aF(a,H.cE(H.E(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.jI(a,b)},
i4:function(a){if(a==null)return a
if(!!J.P(a).$ia)return a
throw H.h(H.aF(a,"List<dynamic>"))},
lA:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ia)return a
if(u[b])return a
H.jI(a,b)},
jA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
dN:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jA(J.P(a))
if(u==null)return!1
return H.jr(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.ir)return a
$.ir=!0
try{if(H.dN(a,b))return a
u=H.cD(b)
t=H.aF(a,u)
throw H.h(t)}finally{$.ir=!1}},
iy:function(a,b){if(a!=null&&!H.iw(a,b))H.bk(H.aF(a,H.cD(b)))
return a},
aF:function(a,b){return new H.dp("TypeError: "+P.ie(a)+": type '"+H.l8(a)+"' is not a subtype of type '"+b+"'")},
l8:function(a){var u,t
u=J.P(a)
if(!!u.$ibW){t=H.jA(u)
if(t!=null)return H.cD(t)
return"Closure"}return H.ce(a)},
lJ:function(a){throw H.h(new P.e_(H.E(a)))},
kQ:function(a){return new H.eK(a)},
jC:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bi:function(a){if(a==null)return
return a.$ti},
mB:function(a,b,c){return H.bN(a["$a"+H.b(c)],H.bi(b))},
iB:function(a,b,c,d){var u
H.E(c)
H.ac(d)
u=H.bN(a["$a"+H.b(c)],H.bi(b))
return u==null?null:u[d]},
bM:function(a,b,c){var u
H.E(b)
H.ac(c)
u=H.bN(a["$a"+H.b(b)],H.bi(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.ac(b)
u=H.bi(a)
return u==null?null:u[b]},
cD:function(a){return H.be(a,null)},
be:function(a,b){var u,t
H.n(b,"$ia",[P.k],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cE(a[0].name)+H.iv(a,1,b)
if(typeof a=="function")return H.cE(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.b(b[t])}if('func' in a)return H.l2(a,b)
if('futureOr' in a)return"FutureOr<"+H.be("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.n(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.i(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.d.K(o,b[m])
l=t[p]
if(l!=null&&l!==P.G)o+=" extends "+H.be(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.be(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.be(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.be(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lp(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.be(d[c],b)+(" "+H.b(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iv:function(a,b,c){var u,t,s,r,q,p
H.n(c,"$ia",[P.k],"$aa")
if(a==null)return""
u=new P.ba("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.be(p,c)}return"<"+u.h(0)+">"},
bN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dM:function(a,b,c,d){var u,t
H.E(b)
H.i4(c)
H.E(d)
if(a==null)return!1
u=H.bi(a)
t=J.P(a)
if(t[b]==null)return!1
return H.jy(H.bN(t[d],u),null,c,null)},
n:function(a,b,c,d){H.E(b)
H.i4(c)
H.E(d)
if(a==null)return a
if(H.dM(a,b,c,d))return a
throw H.h(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cE(b.substring(2))+H.iv(c,0,null),v.mangledGlobalNames)))},
li:function(a,b,c,d,e){H.E(c)
H.E(d)
H.E(e)
if(!H.an(a,null,b,null))H.lK("TypeError: "+H.b(c)+H.cD(a)+H.b(d)+H.cD(b)+H.b(e))},
lK:function(a){throw H.h(new H.dp(H.E(a)))},
jy:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.an(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.an(a[t],b,c[t],d))return!1
return!0},
my:function(a,b,c){return a.apply(b,H.bN(J.P(b)["$a"+H.b(c)],H.bi(b)))},
jE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="G"||a.name==="H"||a===-1||a===-2||H.jE(u)}return!1},
iw:function(a,b){var u,t
if(a==null)return b==null||b.name==="G"||b.name==="H"||b===-1||b===-2||H.jE(b)
if(b==null||b===-1||b.name==="G"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dN(a,b)}u=J.P(a).constructor
t=H.bi(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.an(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.iw(a,b))throw H.h(H.aF(a,H.cD(b)))
return a},
an:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="G"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="G"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.jr(a,b,c,d)
if('func' in a)return c.name==="b5"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,s,d)
else if(H.an(a,b,s,d))return!0
else{if(!('$i'+"c3" in t.prototype))return!1
r=t.prototype["$a"+"c3"]
q=H.bN(r,u?a.slice(1):null)
return H.an(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jy(H.bN(m,u),b,p,d)},
jr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.an(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.an(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.an(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lD(h,b,g,d)},
lD:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.an(c[r],d,a[r],b))return!1}return!0},
mz:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
lB:function(a){var u,t,s,r,q,p
u=H.E($.jD.$1(a))
t=$.i_[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i3[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.jx.$2(a,u))
if(u!=null){t=$.i_[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i3[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.i5(s)
$.i_[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.i3[u]=s
return s}if(q==="-"){p=H.i5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jG(a,s)
if(q==="*")throw H.h(P.jh(u))
if(v.leafTags[u]===true){p=H.i5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jG(a,s)},
jG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
i5:function(a){return J.iD(a,!1,null,!!a.$iaC)},
lC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.i5(u)
else return J.iD(u,c,null,null)},
lw:function(){if(!0===$.iC)return
$.iC=!0
H.lx()},
lx:function(){var u,t,s,r,q,p,o,n
$.i_=Object.create(null)
$.i3=Object.create(null)
H.lv()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jJ.$1(q)
if(p!=null){o=H.lC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lv:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bL(C.F,H.bL(C.K,H.bL(C.p,H.bL(C.p,H.bL(C.J,H.bL(C.G,H.bL(C.H(C.q),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jD=new H.i0(q)
$.jx=new H.i1(p)
$.jJ=new H.i2(o)},
bL:function(a,b){return a(b)||b},
kw:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.eb("Illegal RegExp pattern ("+String(r)+")",a,null))},
lH:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
i6:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eF:function eF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fc:function fc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eB:function eB(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a){this.a=a},
i7:function i7(a){this.a=a},
dE:function dE(a){this.a=a
this.b=null},
bW:function bW(){},
f0:function f0(){},
eT:function eT(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a){this.a=a},
eK:function eK(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eo:function eo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d1:function d1(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
el:function el(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cC(b,a))},
l1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.lo(a,b,c))
return b},
d8:function d8(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
lp:function(a){return J.iS(a?Object.keys(a):[],null)},
lF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dO:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iC==null){H.lw()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.jh("Return interceptor for "+H.b(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iE()]
if(q!=null)return q
q=H.lB(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.r
if(t===Object.prototype)return C.r
if(typeof r=="function"){Object.defineProperty(r,$.iE(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
kv:function(a,b){if(a<0||a>4294967295)throw H.h(P.av(a,0,4294967295,"length",null))
return J.iS(new Array(a),b)},
iS:function(a,b){return J.ih(H.d(a,[b]))},
ih:function(a){H.i4(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.ek.prototype
if(typeof a=="boolean")return J.ej.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dO(a)},
lr:function(a){if(typeof a=="number")return J.c7.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dO(a)},
iz:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dO(a)},
iA:function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dO(a)},
jB:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.cn.prototype
return a},
ay:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dO(a)},
k5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lr(a).K(a,b)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).m(a,b)},
k6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iz(a).E(a,b)},
k7:function(a,b,c,d){return J.ay(a).cC(a,b,c,d)},
dP:function(a,b){return J.ay(a).dL(a,b)},
k8:function(a,b){return J.iA(a).P(a,b)},
k9:function(a){return J.ay(a).geb(a)},
dQ:function(a){return J.P(a).gB(a)},
cI:function(a){return J.iA(a).gF(a)},
cJ:function(a){return J.iz(a).gp(a)},
ka:function(a){return J.ay(a).gf0(a)},
ia:function(a,b){return J.ay(a).ah(a,b)},
kb:function(a,b,c){return J.jB(a).eC(a,b,c)},
iH:function(a){return J.iA(a).eU(a)},
kc:function(a){return J.jB(a).f1(a)},
b_:function(a){return J.P(a).h(a)},
Z:function Z(){},
ej:function ej(){},
ek:function ek(){},
d_:function d_(){},
eD:function eD(){},
cn:function cn(){},
aU:function aU(){},
aB:function aB(a){this.$ti=a},
ii:function ii(a){this.$ti=a},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
c7:function c7(){},
cZ:function cZ(){},
cY:function cY(){},
b6:function b6(){}},P={
kT:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lj()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cB(new P.fq(u),1)).observe(t,{childList:true})
return new P.fp(u,t,s)}else if(self.setImmediate!=null)return P.lk()
return P.ll()},
kU:function(a){self.scheduleImmediate(H.cB(new P.fr(H.f(a,{func:1,ret:-1})),0))},
kV:function(a){self.setImmediate(H.cB(new P.fs(H.f(a,{func:1,ret:-1})),0))},
kW:function(a){P.im(C.i,H.f(a,{func:1,ret:-1}))},
im:function(a,b){var u
H.f(b,{func:1,ret:-1})
u=C.e.U(a.a,1000)
return P.l_(u<0?0:u,b)},
l_:function(a,b){var u=new P.fW(!0)
u.cA(a,b)
return u},
kq:function(a,b){var u
H.f(a,{func:1,ret:{futureOr:1,type:b}})
u=new P.ab(0,$.M,[b])
P.dm(C.i,new P.ed(u,a))
return u},
kX:function(a,b){var u,t,s
b.a=1
try{a.c4(new P.fA(b),new P.fB(b),null)}catch(s){u=H.af(s)
t=H.bj(s)
P.lG(new P.fC(b,u,t))}},
jn:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iab")
if(u>=4){t=b.b1()
b.a=a.a
b.c=a.c
P.cr(b,t)}else{t=H.l(b.c,"$iaG")
b.a=2
b.c=a
a.bF(t)}},
cr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.l(t.c,"$ia6")
t=t.b
p=q.a
o=q.b
t.toString
P.h1(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cr(u.a,b)}t=u.a
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
if(k){H.l(m,"$ia6")
t=t.b
p=m.a
o=m.b
t.toString
P.h1(null,null,t,p,o)
return}j=$.M
if(j!=l)$.M=l
else j=null
t=b.c
if(t===8)new P.fG(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fF(s,b,m).$0()}else if((t&2)!==0)new P.fE(u,s,b).$0()
if(j!=null)$.M=j
t=s.b
if(!!J.P(t).$ic3){if(t.a>=4){i=H.l(o.c,"$iaG")
o.c=null
b=o.aC(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jn(t,o)
return}}h=b.b
i=H.l(h.c,"$iaG")
h.c=null
b=h.aC(i)
t=s.a
p=s.b
if(!t){H.x(p,H.t(h,0))
h.a=4
h.c=p}else{H.l(p,"$ia6")
h.a=8
h.c=p}u.a=h
t=h}},
js:function(a,b){if(H.dN(a,{func:1,args:[P.G,P.a9]})){b.toString
return H.f(a,{func:1,ret:null,args:[P.G,P.a9]})}if(H.dN(a,{func:1,args:[P.G]})){b.toString
return H.f(a,{func:1,ret:null,args:[P.G]})}throw H.h(P.iI(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l4:function(){var u,t
for(;u=$.bK,u!=null;){$.cz=null
t=u.b
$.bK=t
if(t==null)$.cy=null
u.a.$0()}},
l7:function(){$.it=!0
try{P.l4()}finally{$.cz=null
$.it=!1
if($.bK!=null)$.iF().$1(P.jz())}},
jv:function(a){var u=new P.du(H.f(a,{func:1,ret:-1}))
if($.bK==null){$.cy=u
$.bK=u
if(!$.it)$.iF().$1(P.jz())}else{$.cy.b=u
$.cy=u}},
l6:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.bK
if(u==null){P.jv(a)
$.cz=$.cy
return}t=new P.du(a)
s=$.cz
if(s==null){t.b=u
$.cz=t
$.bK=t}else{t.b=s.b
s.b=t
$.cz=t
if(t.b==null)$.cy=t}},
lG:function(a){var u,t
u={func:1,ret:-1}
H.f(a,u)
t=$.M
if(C.f===t){P.h3(null,null,C.f,a)
return}t.toString
P.h3(null,null,t,H.f(t.b4(a),u))},
dm:function(a,b){var u,t
u={func:1,ret:-1}
H.f(b,u)
t=$.M
if(t===C.f){t.toString
return P.im(a,b)}return P.im(a,H.f(t.b4(b),u))},
h1:function(a,b,c,d,e){var u={}
u.a=d
P.l6(new P.h2(u,e))},
jt:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.M
if(t===c)return d.$0()
$.M=c
u=t
try{t=d.$0()
return t}finally{$.M=u}},
ju:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.M
if(t===c)return d.$1(e)
$.M=c
u=t
try{t=d.$1(e)
return t}finally{$.M=u}},
l5:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.M
if(t===c)return d.$2(e,f)
$.M=c
u=t
try{t=d.$2(e,f)
return t}finally{$.M=u}},
h3:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b4(d):c.ed(d,-1)
P.jv(d)},
fq:function fq(a){this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
fW:function fW(a){this.a=a
this.b=null
this.c=0},
fX:function fX(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ab:function ab(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fz:function fz(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a
this.b=null},
eU:function eU(){},
eW:function eW(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
cj:function cj(){},
eV:function eV(){},
a6:function a6(a,b){this.a=a
this.b=b},
h_:function h_(){},
h2:function h2(a,b){this.a=a
this.b=b},
fL:function fL(){},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function(a,b,c){H.i4(a)
return H.n(H.lq(a,new H.aK([b,c])),"$iiT",[b,c],"$aiT")},
kx:function(a,b){return new H.aK([a,b])},
d2:function(a,b,c,d){return new P.fJ([d])},
iq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kt:function(a,b,c){var u,t
if(P.iu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.k])
t=$.cH()
C.a.i(t,a)
try{P.l3(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.jf(b,H.lA(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
ig:function(a,b,c){var u,t,s
if(P.iu(a))return b+"..."+c
u=new P.ba(b)
t=$.cH()
C.a.i(t,a)
try{s=u
s.a=P.jf(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iu:function(a){var u,t
for(u=0;t=$.cH(),u<t.length;++u)if(a===t[u])return!0
return!1},
l3:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.n(b,"$ia",[P.k],"$aa")
u=a.gF(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.b(u.gD())
C.a.i(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gD();++s
if(!u.t()){if(s<=4){C.a.i(b,H.b(o))
return}q=H.b(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gD();++s
for(;u.t();o=n,n=m){m=u.gD();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.i(b,"...")
return}}p=H.b(o)
q=H.b(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.i(b,l)
C.a.i(b,p)
C.a.i(b,q)},
iU:function(a,b){var u,t,s
u=P.d2(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.ae)(a),++s)u.i(0,H.x(a[s],b))
return u},
iV:function(a){var u,t
u={}
if(P.iu(a))return"{...}"
t=new P.ba("")
try{C.a.i($.cH(),a)
t.a+="{"
u.a=!0
a.ae(0,new P.et(u,t))
t.a+="}"}finally{u=$.cH()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fJ:function fJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bJ:function bJ(a){this.a=a
this.c=this.b=null},
fK:function fK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eq:function eq(){},
T:function T(){},
es:function es(){},
et:function et(a,b){this.a=a
this.b=b},
bt:function bt(){},
fQ:function fQ(){},
dz:function dz(){},
bX:function bX(){},
bY:function bY(){},
e6:function e6(){},
ef:function ef(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ee:function ee(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(){},
fY:function fY(a){this.b=this.a=0
this.c=a},
ko:function(a){if(a instanceof H.bW)return a.h(0)
return"Instance of '"+H.ce(a)+"'"},
kz:function(a,b,c,d){var u,t
H.x(b,d)
u=J.kv(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.H(u,t,b)
return H.n(u,"$ia",[d],"$aa")},
il:function(a,b,c){var u,t
u=P.B
H.n(a,"$ip",[u],"$ap")
if(a.constructor===Array){H.n(a,"$iaB",[u],"$aaB")
t=a.length
c=P.j9(b,c,t,null,null,null)
return H.j8(b>0||c<t?C.a.cg(a,b,c):a)}return P.kS(a,b,c)},
kS:function(a,b,c){var u,t,s
H.n(a,"$ip",[P.B],"$ap")
u=J.cI(a)
for(t=0;t<b;++t)if(!u.t())throw H.h(P.av(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gD())
return H.j8(s)},
kO:function(a,b,c){return new H.el(a,H.kw(a,!1,!0,!1))},
jf:function(a,b,c){var u=J.cI(b)
if(!u.t())return a
if(c.length===0){do a+=H.b(u.gD())
while(u.t())}else{a+=H.b(u.gD())
for(;u.t();)a=a+c+H.b(u.gD())}return a},
l0:function(a,b,c,d){var u,t,s,r,q,p
H.n(a,"$ia",[P.B],"$aa")
if(c===C.v){u=$.k4().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.em(H.x(b,H.bM(c,"bX",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kL(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kk:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cP:function(a){if(a>=10)return""+a
return"0"+a},
ic:function(a,b,c,d,e,f){return new P.bn(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ie:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ko(a)},
iI:function(a,b,c){return new P.aI(!0,a,b,c)},
eE:function(a,b,c){return new P.bE(null,null,!0,a,b,"Value not in range")},
av:function(a,b,c,d,e){return new P.bE(b,c,!0,a,d,"Invalid value")},
j9:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.av(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.av(b,a,c,"end",f))
return b}return c},
c5:function(a,b,c,d,e){var u=H.ac(e==null?J.cJ(b):e)
return new P.eg(b,u,!0,a,c,"Index out of range")},
aO:function(a){return new P.fg(a)},
jh:function(a){return new P.fe(a)},
je:function(a){return new P.ci(a)},
bm:function(a){return new P.dY(a)},
cT:function(a){return new P.fy(a)},
jH:function(a){H.lF(a)},
N:function N(){},
as:function as(a,b){this.a=a
this.b=b},
O:function O(){},
bn:function bn(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
b3:function b3(){},
da:function da(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bE:function bE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eg:function eg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fg:function fg(a){this.a=a},
fe:function fe(a){this.a=a},
ci:function ci(a){this.a=a},
dY:function dY(a){this.a=a},
eC:function eC(){},
di:function di(){},
e_:function e_(a){this.a=a},
fy:function fy(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(){},
B:function B(){},
p:function p(){},
aT:function aT(){},
a:function a(){},
H:function H(){},
ad:function ad(){},
G:function G(){},
a9:function a9(){},
k:function k(){},
ba:function ba(a){this.a=a},
ln:function(a,b){var u={}
a.ae(0,new P.hZ(u))
return u},
hZ:function hZ(a){this.a=a},
cg:function cg(){},
i:function i(){},
cV:function cV(){},
bF:function bF(){}},W={
kd:function(a){var u=document.createElement("a")
return u},
km:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).L(u,a,b,c)
t.toString
u=W.u
u=new H.dt(new W.aa(t),H.f(new W.e5(),{func:1,ret:P.N,args:[u]}),[u])
return H.l(u.ga6(u),"$ia2")},
kn:function(a){H.l(a,"$ibp")
return"wheel"},
c1:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ka(a)
if(typeof t==="string")u=a.tagName}catch(s){H.af(s)}return u},
ks:function(a){var u,t,s
t=document.createElement("input")
u=H.l(t,"$ic6")
try{u.type=a}catch(s){H.af(s)}return u},
fI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jp:function(a,b,c,d){var u,t
u=W.fI(W.fI(W.fI(W.fI(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d,e){var u,t
u=W.jw(new W.fx(c),W.c)
t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.c]})
if(t)J.k7(a,b,u,!1)}return new W.fw(a,b,u,!1,[e])},
jo:function(a){var u,t
u=W.kd(null)
t=window.location
u=new W.bd(new W.fP(u,t))
u.cu(a)
return u},
kY:function(a,b,c,d){H.l(a,"$ia2")
H.E(b)
H.E(c)
H.l(d,"$ibd")
return!0},
kZ:function(a,b,c,d){var u,t,s
H.l(a,"$ia2")
H.E(b)
H.E(c)
u=H.l(d,"$ibd").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jq:function(){var u,t,s,r,q
u=P.k
t=P.iU(C.k,u)
s=H.t(C.k,0)
r=H.f(new W.fV(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.fU(t,P.d2(null,null,null,u),P.d2(null,null,null,u),P.d2(null,null,null,u),null)
t.cz(null,new H.eu(C.k,r,[s,u]),q,null)
return t},
jw:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.M
if(u===C.f)return a
return u.ef(a,b)},
m:function m(){},
cK:function cK(){},
dS:function dS(){},
bS:function bS(){},
b0:function b0(){},
bV:function bV(){},
b1:function b1(){},
bZ:function bZ(){},
dZ:function dZ(){},
c_:function c_(){},
c0:function c0(){},
e1:function e1(){},
cQ:function cQ(){},
cR:function cR(){},
ip:function ip(a,b){this.a=a
this.$ti=b},
a2:function a2(){},
e5:function e5(){},
c:function c(){},
bp:function bp(){},
ea:function ea(){},
cW:function cW(){},
c4:function c4(){},
cX:function cX(){},
c6:function c6(){},
aL:function aL(){},
d3:function d3(){},
a_:function a_(){},
aa:function aa(a){this.a=a},
u:function u(){},
cb:function cb(){},
dd:function dd(){},
eL:function eL(){},
dj:function dj(){},
eZ:function eZ(){},
f_:function f_(){},
ck:function ck(){},
aM:function aM(){},
aE:function aE(){},
fb:function fb(){},
bb:function bb(){},
aP:function aP(){},
cp:function cp(){},
cq:function cq(){},
dw:function dw(){},
dA:function dA(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fw:function fw(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fx:function fx(a){this.a=a},
bd:function bd(a){this.a=a},
ak:function ak(){},
d9:function d9(a){this.a=a},
eA:function eA(a){this.a=a},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(){},
fR:function fR(){},
fS:function fS(){},
fU:function fU(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fV:function fV(){},
fT:function fT(){},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
al:function al(){},
fP:function fP(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
fZ:function fZ(a){this.a=a},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dB:function dB(){},
dC:function dC(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){}},O={
iM:function(a){var u=new O.b2([a])
u.sd_(H.d([],[a]))
u.sbD(null)
u.sbA(null)
u.sbE(null)
return u},
b2:function b2(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c9:function c9(){this.b=this.a=null},
e0:function e0(a){this.a=a
this.c=this.b=null},
bG:function bG(){}},E={
iQ:function(a,b,c,d,e,f){var u=new E.W()
u.a=d
u.b=!0
u.scF(0,O.iM(E.W))
u.y.bi(u.geF(),u.geI())
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
u.sbj(0,e)
u.sar(c)
return u},
kP:function(a,b){var u=new E.eG(a,b)
u.cp(a,b)
return u},
dT:function dT(){},
W:function W(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eG:function eG(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eH:function eH(a){this.a=a},
eI:function eI(a){this.a=a},
eJ:function eJ(a){this.a=a},
dl:function dl(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f8:function f8(a){this.a=a}},Z={
ax:function(a){return new Z.aw(a)},
aw:function aw(a){this.a=a}},D={
bo:function(){var u=new D.c2()
u.sa9(null)
u.saZ(null)
u.c=null
u.d=0
return u},
dV:function dV(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
e8:function e8(a){this.a=a},
K:function K(a){this.a=a
this.b=null},
eh:function eh(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
ei:function ei(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
am:function am(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cL:function cL(a,b){this.a=a
this.b=b},d0:function d0(a,b){this.a=a
this.b=b},en:function en(){var _=this
_.d=_.c=_.b=_.a=null},er:function er(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},ev:function ev(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fa:function fa(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ds:function ds(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kp:function(a,b,c,d,e,f,g){var u,t
u=new X.ec()
t=new V.cN(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ja
if(t==null){t=V.df(0,0,1,1)
$.ja=t}u.r=t
return u},
cM:function cM(){},
ec:function ec(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){}},V={
aj:function(a){return new V.a3(a)},
A:function(a,b,c){if(a==null)return C.d.aE("null",c)
return C.d.aE(C.b.aG(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
aY:function(a,b,c){var u,t,s,r,q,p
H.n(a,"$ia",[P.O],"$aa")
u=H.d([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.ae)(a),++r){q=V.A(a[r],b,c)
s=Math.max(s,q.length)
C.a.i(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.H(u,p,C.d.aE(u[p],s))}return u},
bv:function(){var u=$.iW
if(u==null){u=new V.Q(1,0,0,1)
$.iW=u}return u},
bu:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.Q(u,-t,t,u)},
kA:function(a,b){var u,t,s,r
H.n(a,"$ia",[P.O],"$aa")
u=a[0]
t=a[1]
s=a[2]
r=a[3]
return new V.Q(u,t,s,r)},
bz:function(){var u=$.iX
if(u==null){u=new V.L(1,0,0,0,1,0,0,0,1)
$.iX=u}return u},
bw:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.L(1,0,0,0,u,-t,0,t,u)},
bx:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.L(u,0,-t,0,1,0,t,0,u)},
by:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.L(u,-t,0,t,u,0,0,0,1)},
kB:function(a,b){var u,t,s,r,q,p,o,n,m
H.n(a,"$ia",[P.O],"$aa")
u=a[0]
t=a[1]
s=a[2]
r=a[3]
q=a[4]
p=a[5]
o=a[6]
n=a[7]
m=a[8]
return new V.L(u,t,s,r,q,p,o,n,m)},
aD:function(){var u=$.j_
if(u==null){u=V.J(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.j_=u}return u},
J:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iZ:function(a,b,c){return V.J(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
iY:function(a,b,c,d){return V.J(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bA:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.J(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bB:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.J(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
bC:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.J(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
kC:function(a,b){var u
H.n(a,"$ia",[P.O],"$aa")
u=V.J(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])
return u},
dc:function(){var u=$.j4
if(u==null){u=new V.S(0,0)
$.j4=u}return u},
j6:function(){var u=$.j5
if(u==null){u=new V.q(0,0,0)
$.j5=u}return u},
df:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cf(a,b,c,d)},
D:function(a,b,c,d,e,f){if(d<0){a+=d
d=-d}if(e<0){b+=e
e=-e}if(f<0){c+=f
f=-f}return new V.b9(a,b,c,d,e,f)},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e7:function e7(a){this.a=a},
a3:function a3(a){this.a=a},
at:function at(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b7:function b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a0:function a0(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function(a){var u=new V.eM()
u.cq(a)
return u},
dR:function dR(){},
aV:function aV(){},
d4:function d4(){},
aX:function aX(){this.a=null},
eM:function eM(){this.a=null},
ch:function ch(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a,b){this.a=a
this.b=b
this.c=null},
f9:function f9(){this.c=this.b=this.a=null},
cm:function cm(a){this.b=a
this.a=this.c=null},
kR:function(a,b){var u=new V.eQ()
u.cr(a,!1)
return u},
eQ:function eQ(){this.b=this.a=null},
eS:function eS(a){this.a=a},
eR:function eR(a){this.a=a}},U={
iN:function(a){var u=new U.cO()
if(a==null)a=V.aD()
if(null!=a)u.a=a
return u},
cO:function cO(){this.b=this.a=null},
ca:function ca(){}},M={cS:function cS(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
l9:function(a){a.n(0,"Uint8List bench timing",new M.h9())
a.n(0,"List int bench timing",new M.ha())},
la:function(a){a.n(0,"Test of craft example world getBlock",new M.hb())
a.n(0,"Test of craft example world collide with floor",new M.hc())},
j:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
u=b.a5(c,d,e)
t=u.d
s=t===f
if(!s||u.e!==g||u.a!==h||u.b!==i||u.c!==j){a.j("Testing getBlock("+H.b(c)+", "+H.b(d)+", "+H.b(e)+"): Failed\n","error_log")
a.k()
a.j("  Expected: "+f+", "+g+", "+h+", "+i+", "+j+"\n","notice_log")
r=u.e
q=u.a
p=u.b
o=u.c
a.j("  Gotten:   "+t+", "+r+", "+q+", "+p+", "+o+"\n","notice_log")
if(!s){a.j("  Chunk X value "+t+" should be "+f+".\n","error_log")
a.k()}if(r!==g){a.j("  Chunk Z value "+r+" should be "+g+".\n","error_log")
a.k()}if(q!==h){a.j("  Block X value "+q+" should be "+h+".\n","error_log")
a.k()}if(p!==i){a.j("  Block Y value "+p+" should be "+i+".\n","error_log")
a.k()}if(o!==j){a.j("  Block Z value "+o+" should be "+j+".\n","error_log")
a.k()}a.j("\n","info_log")}else a.j("Testing getBlock("+H.b(c)+", "+H.b(d)+", "+H.b(e)+"): Passed\n","info_log")},
R:function(a,b,c,d,e,f,g,h,i,j,k,l){var u,t,s,r,q
u=new B.dX(b)
u.e=$.aZ()
u.scE(H.d([],[V.b9]))
u.scD(H.d([],[V.a3]))
u.scW(H.d([],[P.N]))
t=V.D(-0.25,-1.5,-0.25,0.5,2,0.5)
s=new V.q(c,d,e)
r=new V.v(f,g,h)
q=new V.q(i,j,k)
u.ej(t,s,r)
if(!J.y(u.b,q)||!J.y(u.e,l)){a.j("Testing collide: Failed\n","error_log")
a.k()
a.j("  Region:   "+t.h(0)+"\n","error_log")
a.k()
a.j("  Start:    "+s.h(0)+"\n","error_log")
a.k()
a.j("  Vector:   "+r.h(0)+"\n","error_log")
a.k()
a.j("  Expected: Collider("+q.h(0)+", "+H.b(l)+")\n","error_log")
a.k()
a.j("  Gotten:   "+u.h(0)+"\n","error_log")
a.k()
a.j("\n","info_log")}else{a.j("Testing collide: Passed\n","info_log")
a.j("  Region:   "+t.h(0)+"\n","info_log")
a.j("  Start:    "+s.h(0)+"\n","info_log")
a.j("  Vector:   "+r.h(0)+"\n","info_log")
a.j("  Gotten:   "+u.h(0)+"\n","info_log")
a.j("\n","info_log")}},
lb:function(a){a.n(0,"Matrix2 Point Transposition Test",new M.hd())
a.n(0,"Matrix2 Vector Transposition Test",new M.he())
a.n(0,"Matrix2 Identity Test",new M.hf())
a.n(0,"Matrix2 Scalar Test",new M.hg())
a.n(0,"Matrix2 Basic Rotate Test",new M.hh())
a.n(0,"Matrix2 Rotate Test",new M.hi())
a.n(0,"Matrix2 Miscellaneous Test",new M.hj())
a.n(0,"Matrix2 Inverse Test",new M.hk())
a.n(0,"Matrix2 Multiplication Test",new M.hl())},
I:function(a,b,c,d){if(b!==c){a.j("Unexpected result from "+d+": "+("\n   Expected: "+c)+("\n   Gotten:   "+H.b(b)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("Checked "+d+" is "+H.b(b)+"\n\n","info_log")},
Y:function(a,b,c,d){var u,t
u=c+"\n             "+d
t=b.l("             ")
if(t!==u){a.j("Unexpected result from Matrix2: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.l("          ")+"\n\n","info_log")},
is:function(a,b,c,d){var u,t,s,r
u=b.J()
M.Y(a,u,c,d)
t=u.J()
if(!J.y(t,b)){a.j("Unexpected result from Matrix2.inverse().inverse(): \n   Expected: "+b.l("             ")+"\n   Gotten:   "+t.l("             ")+"\n","error_log")
a.k()
a.k()}s=b.v(0,u)
if(!s.m(0,V.bv())){a.j("Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+u.l("             ")+"\n   Expected: "+V.bv().l("             ")+"\n   Gotten:   "+s.l("             ")+"\n","error_log")
a.k()
a.k()}r=b.v(0,u)
if(!r.m(0,V.bv())){a.j("Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+u.l("             ")+"\n   Expected: "+V.bv().l("             ")+"\n   Gotten:   "+r.l("             ")+"\n","error_log")
a.k()
a.k()}},
F:function(a,b,c,d,e,f){var u,t
u=new V.S(e,f)
t=new V.S(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transPnt2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.S(c,d).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix2.transPnt2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
h6:function(a,b,c,d,e,f){var u,t
u=new V.a0(e,f)
t=new V.a0(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transVec2: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.a0(c,d).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix2.transVec2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
lc:function(a){a.n(0,"Matrix3 Point Transposition Test",new M.hm())
a.n(0,"Matrix3 Vector Transposition Test",new M.hn())
a.n(0,"Matrix3 Identity Test",new M.ho())
a.n(0,"Matrix3 Scalar Test",new M.ht())
a.n(0,"Matrix3 Basic Rotate X Test",new M.hu())
a.n(0,"Matrix3 Rotate X Test",new M.hv())
a.n(0,"Matrix3 Basic Rotate Y Test",new M.hw())
a.n(0,"Matrix3 Rotate Y Test",new M.hx())
a.n(0,"Matrix3 Basic Rotate Z Test",new M.hy())
a.n(0,"Matrix3 Rotate Z Test",new M.hz())
a.n(0,"Matrix3 Miscellaneous Test",new M.hA())
a.n(0,"Matrix3 Inverse Test",new M.hp())
a.n(0,"Matrix3 Multiplication Test",new M.hq())
a.n(0,"Matrix3 Point2 Transposition Test",new M.hr())
a.n(0,"Matrix3 Vector2 Transposition Test",new M.hs())},
z:function(a,b,c,d,e){var u,t
u=c+"\n             "+d+"\n             "+e
t=b.l("             ")
if(t!==u){a.j("Unexpected result from Matrix3: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.l("          ")+"\n\n","info_log")},
dK:function(a,b,c,d,e){var u,t,s,r
u=b.J()
M.z(a,u,c,d,e)
t=u.J()
if(!J.y(t,b)){a.j("Unexpected result from Matrix3.inverse().inverse(): \n   Expected: "+b.l("             ")+"\n   Gotten:   "+t.l("             ")+"\n","error_log")
a.k()
a.k()}s=b.v(0,u)
if(!s.m(0,V.bz())){a.j("Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+u.l("             ")+"\n   Expected: "+V.bz().l("             ")+"\n   Gotten:   "+s.l("             ")+"\n","error_log")
a.k()
a.k()}r=b.v(0,u)
if(!r.m(0,V.bz())){a.j("Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+u.l("             ")+"\n   Expected: "+V.bz().l("             ")+"\n   Gotten:   "+r.l("             ")+"\n","error_log")
a.k()
a.k()}},
r:function(a,b,c,d,e,f,g,h){var u,t
u=new V.q(f,g,h)
t=new V.q(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transPnt3: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.q(c,d,e).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix3.transPnt3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
bg:function(a,b,c,d,e,f,g,h){var u,t
u=new V.v(f,g,h)
t=new V.v(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transVec3: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.v(c,d,e).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix3.transVec3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
h4:function(a,b,c,d,e,f){var u,t
u=new V.S(e,f)
t=new V.S(b.a*c+b.b*d+b.c,b.d*c+b.e*d+b.f)
a.j("Checking Matrix3.transPnt2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.S(c,d).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix3.transPnt2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
h7:function(a,b,c,d,e,f){var u,t
u=new V.a0(e,f)
t=new V.a0(b.a*c+b.b*d,b.d*c+b.e*d)
a.j("Checking Matrix3.transVec2: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.a0(c,d).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix3.transVec2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
ld:function(a){a.n(0,"Matrix4 Point Transposition Test",new M.hB())
a.n(0,"Matrix4 Vector Transposition Test",new M.hC())
a.n(0,"Matrix4 Identity Test",new M.hD())
a.n(0,"Matrix4 Scalar Test",new M.hK())
a.n(0,"Matrix4 Basic Rotate X Test",new M.hL())
a.n(0,"Matrix4 Rotate X Test",new M.hM())
a.n(0,"Matrix4 Basic Rotate Y Test",new M.hN())
a.n(0,"Matrix4 Rotate Y Test",new M.hO())
a.n(0,"Matrix4 Basic Rotate Z Test",new M.hP())
a.n(0,"Matrix4 Rotate Z Test",new M.hQ())
a.n(0,"Matrix4 Miscellaneous Test",new M.hR())
a.n(0,"Matrix4 Inverse Test",new M.hE())
a.n(0,"Matrix4 Multiplication Test",new M.hF())
a.n(0,"Matrix4 Point3 Transposition Test",new M.hG())
a.n(0,"Matrix4 Vector3 Transposition Test",new M.hH())
a.n(0,"Matrix4 Point2 Transposition Test",new M.hI())
a.n(0,"Matrix4 Vector2 Transposition Test",new M.hJ())},
w:function(a,b,c,d,e,f){var u,t
u=c+"\n             "+d+"\n             "+e+"\n             "+f
t=b.l("             ")
if(t!==u){a.j("Unexpected result from Matrix4: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.l("          ")+"\n\n","info_log")},
dL:function(a,b,c,d,e,f){var u,t,s,r
u=b.J()
M.w(a,u,c,d,e,f)
t=u.J()
if(!J.y(t,b)){a.j("Unexpected result from Matrix4.inverse().inverse(): \n   Expected: "+b.l("             ")+"\n   Gotten:   "+t.l("             ")+"\n","error_log")
a.k()
a.k()}s=b.v(0,u)
if(!s.m(0,V.aD())){a.j("Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+u.l("             ")+"\n   Expected: "+V.aD().l("             ")+"\n   Gotten:   "+s.l("             ")+"\n","error_log")
a.k()
a.k()}r=b.v(0,u)
if(!r.m(0,V.aD())){a.j("Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+u.l("             ")+"\n   Expected: "+V.aD().l("             ")+"\n   Gotten:   "+r.l("             ")+"\n","error_log")
a.k()
a.k()}},
o:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
u=new V.b8(c,d,e,f)
t=new V.b8(g,h,i,j)
s=b.aH(u)
a.j("Checking Matrix4.transPnt4: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+u.h(0)+"\n"),"info_log")
if(!s.m(0,t)){a.j("Unexpected result from Matrix4.transPnt4: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n","info_log")},
a5:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=new V.bc(g,h,i,j)
t=new V.bc(b.a*c+b.b*d+b.c*e+b.d*f,b.e*c+b.f*d+b.r*e+b.x*f,b.y*c+b.z*d+b.Q*e+b.ch*f,b.cx*c+b.cy*d+b.db*e+b.dx*f)
a.j("Checking Matrix4.transVec4: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.bc(c,d,e,f).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix4.transVec4: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
bf:function(a,b,c,d,e,f,g,h){var u,t
u=new V.q(f,g,h)
t=new V.q(b.a*c+b.b*d+b.c*e+b.d,b.e*c+b.f*d+b.r*e+b.x,b.y*c+b.z*d+b.Q*e+b.ch)
a.j("Checking Matrix4.transPnt3: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.q(c,d,e).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix4.transPnt3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
bh:function(a,b,c,d,e,f,g,h){var u,t
u=new V.v(f,g,h)
t=new V.v(b.a*c+b.b*d+b.c*e,b.e*c+b.f*d+b.r*e,b.y*c+b.z*d+b.Q*e)
a.j("Checking Matrix4.transVec3: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.v(c,d,e).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix4.transVec3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
h5:function(a,b,c,d,e,f){var u,t
u=new V.S(e,f)
t=new V.S(b.a*c+b.b*d+b.d,b.e*c+b.f*d+b.x)
a.j("Checking Matrix4.transPnt2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.S(c,d).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix4.transPnt2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
h8:function(a,b,c,d,e,f){var u,t
u=new V.a0(e,f)
t=new V.a0(b.a*c+b.b*d,b.e*c+b.f*d)
a.j("Checking Matrix4.transVec2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.a0(c,d).h(0)+"\n"),"info_log")
if(!t.m(0,u)){a.j("Unexpected result from Matrix4.transVec2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
le:function(a){a.n(0,"Region2 Point Expand Test",new M.hS())},
cw:function(a,b,c,d,e,f,g,h){var u,t,s,r,q,p,o
u=new V.S(c,d)
t=b.c
s=b.a
if(c<s){t+=s-c
s=c}else if(c>s+t)t=c-s
r=b.d
q=b.b
if(d<q){r+=q-d
q=d}else if(d>q+r)r=d-q
p=new V.cf(s,q,t,r)
o=V.df(e,f,g,h)
if(!p.m(0,o)){a.j("Unexpected result from expand:\n"+("   Original: "+H.b(b)+"\n")+("   Point:    "+u.h(0)+"\n")+("   Expected: "+o.h(0)+"\n")+("   Result:   "+p.h(0)+"\n"),"error_log")
a.k()}else a.j(H.b(b)+" + "+u.h(0)+" => "+p.h(0)+"\n","info_log")
return p},
lf:function(a){a.n(0,"Region3 Point Expand Test",new M.hT())
a.n(0,"Region3 Collision Test",new M.hU())},
cx:function(a,b,c,d,e,f,g,h,i,j,k){var u,t,s,r,q,p,o,n,m
u=new V.q(c,d,e)
t=b.d
s=b.a
if(c<s){t+=s-c
s=c}else if(c>s+t)t=c-s
r=b.e
q=b.b
if(d<q){r+=q-d
q=d}else if(d>q+r)r=d-q
p=b.f
o=b.c
if(e<o){p+=o-e
o=e}else if(e>o+p)p=e-o
n=new V.b9(s,q,o,t,r,p)
m=V.D(f,g,h,i,j,k)
if(!n.m(0,m)){a.j("Unexpected result from expand:\n"+("   Original: "+H.b(b)+"\n")+("   Point:    "+u.h(0)+"\n")+("   Expected: "+m.h(0)+"\n")+("   Result:   "+n.h(0)+"\n"),"error_log")
a.k()}else a.j("["+H.b(b)+"] + ["+u.h(0)+"] => ["+n.h(0)+"]\n","info_log")
return n},
ao:function(a,b,c,d,e){var u=b.ek(c,d)
if(e==null){if(u==null){a.j("Results from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+"   Result:   null\n","info_log")
return}a.j("Unexpected result from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+"   Expected: null\n"+("   Result:   "+u.h(0)+"\n"),"error_log")
a.k()}else if(u==null){a.j("Unexpected result from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Expected: "+e.h(0)+"\n")+"   Result:   null\n","error_log")
a.k()}else if(!(Math.abs(u.a-e.a)<$.C().a)||!J.y(u.b,e.b)){a.j("Unexpected result from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Expected: "+e.h(0)+"\n")+("   Result:   "+u.h(0)+"\n"),"error_log")
a.k()}else a.j("Results from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Result:   "+u.h(0)+"\n"),"info_log")},
lg:function(a){a.n(0,"Matrix4 Point Transposition Test",new M.hV())},
lI:function(a6,a7,a8,a9){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.n(a9,"$ia",[M.U],"$aa")
u=new F.dh()
t=new F.fj(u)
t.b=!1
t.se5(H.d([],[F.co]))
u.a=t
t=new F.eP(u)
s=[F.cc]
t.sb_(H.d([],s))
u.b=t
t=new F.eO(u)
r=[F.br]
t.scX(H.d([],r))
u.c=t
t=new F.eN(u)
q=[F.b4]
t.scO(H.d([],q))
u.d=t
u.e=null
for(p=0;p<15;++p){t=u.a
o=a9[p].a
t.toString
n=new F.co()
m=new F.fm(n)
m.sb_(H.d([],s))
n.b=m
m=new F.fl(n)
m.scY(H.d([],r))
m.scZ(H.d([],r))
n.c=m
m=new F.fk(n)
m.scP(H.d([],q))
m.scQ(H.d([],q))
m.scR(H.d([],q))
n.d=m
l=$.k1()
n.e=0
m=$.ai()
n.f=(l.a&m.a)!==0?o:null
$.ah().a
n.r=null
$.ag().a
n.x=null
$.a8().a
n.y=null
$.aA().a
n.z=null
$.k2().a
n.Q=null
$.aq().a
n.ch=0
$.ap().a
n.cx=null
t.i(0,n)}k=E.iQ(null,!0,null,"",null,null)
k.sbj(0,u)
k.sar(U.iN(a7))
j=new P.ba("")
i=new O.e0(j)
i.sdP(H.d([],[V.q]))
i.c=null
h=new M.cS()
h.scv(0,O.iM(E.W))
h.d.bi(h.gd5(),h.gd7())
h.e=null
h.f=null
h.r=null
h.x=null
g=X.kp(!0,!0,!1,null,2000,null,0)
f=new X.db()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sar(null)
t=f.c
if(!(Math.abs(t-1.0471975511965976)<$.C().a)){f.c=1.0471975511965976
t=new D.am("fov",t,1.0471975511965976,f,[P.O])
t.b=!0
f.aa(t)}t=f.d
if(!(Math.abs(t-0.1)<$.C().a)){f.d=0.1
t=new D.am("near",t,0.1,f,[P.O])
t.b=!0
f.aa(t)}t=f.e
if(!(Math.abs(t-2000)<$.C().a)){f.e=2000
t=new D.am("far",t,2000,f,[P.O])
t.b=!0
f.aa(t)}t=h.a
if(t!==f){if(t!=null)t.gw().I(0,h.gT())
e=h.a
h.a=f
f.gw().i(0,h.gT())
t=new D.am("camera",e,h.a,h,[X.cM])
t.b=!0
h.Z(t)}t=h.b
if(t!==g){if(t!=null)t.gw().I(0,h.gT())
e=h.b
h.b=g
g.gw().i(0,h.gT())
t=new D.am("target",e,h.b,h,[X.dk])
t.b=!0
h.Z(t)}h.sc3(null)
h.sc3(i)
h.d.i(0,k)
h.a.sar(U.iN(a8))
t=document
d=t.createElement("canvas")
c=new E.dl()
b=P.ky(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
a=C.n.bf(d,"webgl",b)
a=H.l(a==null?C.n.bf(d,"experimental-webgl",b):a,"$ibF")
if(a==null)H.bk(P.cT("Failed to get the rendering context for WebGL."))
c.b=d
c.a=d
c.c=a
c.e=E.kP(a,d)
s=new T.f7(a)
s.b=H.ac((a&&C.h).bg(a,3379))
s.c=H.ac(C.h.bg(a,34076))
s.d=0
s.e=0
c.f=s
s=new X.ds(d)
r=new X.en()
r.c=new X.aW(!1,!1,!1)
r.sdH(P.d2(null,null,null,P.B))
s.b=r
r=new X.ev(s)
r.f=0
r.r=V.dc()
r.x=V.dc()
r.Q=1
r.ch=1
s.c=r
r=new X.er(s)
r.r=0
r.x=V.dc()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.fa(s)
r.e=0
r.f=V.dc()
r.r=V.dc()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.scN(H.d([],[[P.cj,P.G]]))
r=s.z
q=W.a_
o={func:1,ret:-1,args:[q]};(r&&C.a).i(r,W.X(t,"contextmenu",H.f(s.gd9(),o),!1,q))
r=s.z
m=W.c
a0={func:1,ret:-1,args:[m]};(r&&C.a).i(r,W.X(d,"focus",H.f(s.gdg(),a0),!1,m))
r=s.z;(r&&C.a).i(r,W.X(d,"blur",H.f(s.gd2(),a0),!1,m))
r=s.z
a1=W.aL
a2={func:1,ret:-1,args:[a1]};(r&&C.a).i(r,W.X(t,"keyup",H.f(s.gdk(),a2),!1,a1))
r=s.z;(r&&C.a).i(r,W.X(t,"keydown",H.f(s.gdi(),a2),!1,a1))
a1=s.z;(a1&&C.a).i(a1,W.X(d,"mousedown",H.f(s.gdn(),o),!1,q))
a1=s.z;(a1&&C.a).i(a1,W.X(d,"mouseup",H.f(s.gdt(),o),!1,q))
a1=s.z;(a1&&C.a).i(a1,W.X(d,"mousemove",H.f(s.gdr(),o),!1,q))
a1=s.z
a2=W.aP;(a1&&C.a).i(a1,W.X(d,H.E(W.kn(d)),H.f(s.gdv(),{func:1,ret:-1,args:[a2]}),!1,a2))
a2=s.z;(a2&&C.a).i(a2,W.X(t,"mousemove",H.f(s.gdc(),o),!1,q))
a2=s.z;(a2&&C.a).i(a2,W.X(t,"mouseup",H.f(s.gde(),o),!1,q))
q=s.z;(q&&C.a).i(q,W.X(t,"pointerlockchange",H.f(s.gdz(),a0),!1,m))
m=s.z
a0=W.aE
t={func:1,ret:-1,args:[a0]};(m&&C.a).i(m,W.X(d,"touchstart",H.f(s.gdF(),t),!1,a0))
m=s.z;(m&&C.a).i(m,W.X(d,"touchend",H.f(s.gdB(),t),!1,a0))
m=s.z;(m&&C.a).i(m,W.X(d,"touchmove",H.f(s.gdD(),t),!1,a0))
c.r=s
c.Q=!0
c.ch=!1
c.cx=new P.as(Date.now(),!1)
c.cy=0
c.bG()
if(!c.Q){c.Q=!1
c.aL()}t=c.d
if(t!==h){if(t!=null)t.gw().I(0,c.gbm())
c.d=h
h.gw().i(0,c.gbm())
c.aL()}c.c_()
t=j.a
a6.j(t.charCodeAt(0)==0?t:t,"info_log")
if(i.b.length!==15){for(a3="",p=0;t=i.b,p<t.length;++p)a3+="\n   "+t[p].M(1,3)
for(a4="",p=0;p<15;++p)a4+="\n   "+a9[p].b.M(1,3)
a6.j("Unexpected number of results from debugging technique: "+("\n   Expected: "+a4)+("\n   Gotten:   "+a3+"\n\n"),"error_log")
a6.k()
a6.k()}else for(p=0;t=i.b,s=t.length,p<s;++p){if(p>=15)return H.e(a9,p)
a5=a9[p].b
if(p>=s)return H.e(t,p)
a3=t[p]
if(!a5.m(0,a3)){a6.j("Unexpected result from debugging technique at "+p+": "+("\n   Expected: "+a5.h(0))+("\n   Gotten:   "+H.b(a3.a)+", "+H.b(a3.b)+", "+H.b(a3.c)+"\n\n"),"error_log")
if(!a6.z){a6.z=!0
a6.b.className="test_body body_shown"
a6.O()}}}},
jF:function(){var u,t,s,r,q,p,o
u=document
t=u.createElement("div")
s=new M.f5(t)
s.c=new P.ee(C.C)
r=u.createElement("div")
s.b=r
C.c.u(t,r)
q=u.createElement("div")
q.className="log_checkboxes"
s.aA(q,"Information","info_log")
s.aA(q,"Notice","notice_log")
s.aA(q,"Warning","warning_log")
s.aA(q,"Error","error_log")
C.c.u(t,q)
s.d=new P.as(Date.now(),!1)
s.se_(H.d([],[M.bI]))
s.f=0
s.r=0
s.x=""
M.l9(s)
M.lh(s)
M.lb(s)
M.lc(s)
M.ld(s)
M.le(s)
M.lf(s)
M.lg(s)
M.la(s)
r=V.kR("Unit-tests",!1)
p=u.createElement("div")
C.c.u(p,t)
o=u.createElement("div")
u=o.style
u.display="block"
u.clear="both"
C.c.u(p,o)
C.c.u(r.a,p)
r.e7(H.d(["\xab[Back to Tests|../]"],[P.k]))},
lh:function(a){a.n(0,"VertexTypes and Groups",new M.hW())
a.n(0,"VertexTypes from Type Groups 1",new M.hX())
a.n(0,"VertexType from Type Groups 2",new M.hY())},
a7:function(a,b,c,d,e,f){var u,t,s,r
u=J.P(b)
a.j("Checking vertex type "+u.h(b)+":\n","info_log")
t=u.h(b)
if(t!==c){a.j("Error: Got the wrong name for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+t+"\n","error_log")
a.k()
a.j("   Expected: "+c+"\n","error_log")
a.k()}s=b.a
if(s!==d){a.j("Error: Got the wrong value for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+s+"\n","error_log")
a.k()
a.j("   Expected: "+d+"\n","error_log")
a.k()}r=(s&$.ai().a)!==0?1:0
if((s&$.ah().a)!==0)++r
if((s&$.ag().a)!==0)++r
if((s&$.a8().a)!==0)++r
if((s&$.aA().a)!==0)++r
if((s&$.az().a)!==0)++r
if((s&$.aH().a)!==0)++r
if((s&$.aq().a)!==0)++r
if((s&$.ap().a)!==0)++r
if(r!==e){a.j("Error: Got the wrong count for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+r+"\n","error_log")
a.k()
a.j("   Expected: "+e+"\n","error_log")
a.k()}r=(s&$.ai().a)!==0?3:0
if((s&$.ah().a)!==0)r+=3
if((s&$.ag().a)!==0)r+=3
if((s&$.a8().a)!==0)r+=2
if((s&$.aA().a)!==0)r+=3
if((s&$.az().a)!==0)r+=3
if((s&$.aH().a)!==0)r+=4
if((s&$.aq().a)!==0)++r
if((s&$.ap().a)!==0)r+=4
if(r!==f){a.j("Error: Got the wrong size for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+r+"\n","error_log")
a.k()
a.j("   Expected: "+f+"\n","error_log")
a.k()}},
a1:function(a,b,c,d,e,f){var u,t,s,r,q,p
a.j("Checking vertex type "+J.b_(c)+" in "+b.h(0)+":\n","info_log")
u=(b.a&c.a)!==0
if(u!==d){a.j("Error: Got the wrong result from has for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+u+"\n","error_log")
a.k()
a.j("   Expected: "+d+"\n","error_log")
a.k()}t=b.ex(0,c)
if(t!==e){a.j("Error: Got the wrong index for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+t+"\n","error_log")
a.k()
a.j("   Expected: "+e+"\n","error_log")
a.k()}s=d?c:$.i9()
r=b.ea(e)
q=J.P(r)
if(!q.m(r,s)){a.j("Error: Got the wrong index for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+q.h(r)+"\n","error_log")
a.k()
a.j("   Expected: "+J.b_(s)+"\n","error_log")
a.k()}p=b.eE(0,c)
if(p!==f){a.j("Error: Got the wrong offset for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+p+"\n","error_log")
a.k()
a.j("   Expected: "+f+"\n","error_log")
a.k()}},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
U:function U(){this.b=this.a=null},
bH:function bH(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.r=c
_.x=d
_.Q=_.z=_.y=null},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
f4:function f4(a){this.a=a},
f5:function f5(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
f6:function f6(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){}},A={dg:function dg(){}},F={b4:function b4(){},br:function br(){},cc:function cc(){},dh:function dh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},eN:function eN(a){this.a=a
this.b=null},eO:function eO(a){this.a=a
this.b=null},eP:function eP(a){this.a=a
this.b=null},co:function co(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},fj:function fj(a){this.a=a
this.c=this.b=null},fk:function fk(a){var _=this
_.a=a
_.d=_.c=_.b=null},fl:function fl(a){this.a=a
this.c=this.b=null},fm:function fm(a){this.a=a
this.b=null}},T={f7:function f7(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},B={
ke:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
kf:function(a){var u=new B.bl(a)
u.co(a)
return u},
jm:function(a,b){var u=new B.fo(a,b)
u.cs(a,b)
return u},
ar:function ar(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dW:function dW(){this.b=this.a=null},
bl:function bl(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
dX:function dX(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
e9:function e9(){this.b=this.a=null},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ij.prototype={}
J.Z.prototype={
m:function(a,b){return a===b},
gB:function(a){return H.cd(a)},
h:function(a){return"Instance of '"+H.ce(a)+"'"}}
J.ej.prototype={
h:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iN:1}
J.ek.prototype={
m:function(a,b){return null==b},
h:function(a){return"null"},
gB:function(a){return 0},
$iH:1}
J.d_.prototype={
gB:function(a){return 0},
h:function(a){return String(a)}}
J.eD.prototype={}
J.cn.prototype={}
J.aU.prototype={
h:function(a){var u=a[$.jM()]
if(u==null)return this.cl(a)
return"JavaScript function for "+H.b(J.b_(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib5:1}
J.aB.prototype={
i:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.bk(P.aO("add"))
a.push(b)},
I:function(a,b){var u
if(!!a.fixed$length)H.bk(P.aO("remove"))
for(u=0;u<a.length;++u)if(J.y(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bm(a))}},
q:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.H(u,t,H.b(a[t]))
return u.join(b)},
eB:function(a){return this.q(a,"")},
P:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cg:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.av(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.av(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gb8:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.iR())},
bJ:function(a,b){var u,t
H.f(b,{func:1,ret:P.N,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.bm(a))}return!1},
G:function(a,b){var u
for(u=0;u<a.length;++u)if(J.y(a[u],b))return!0
return!1},
h:function(a){return P.ig(a,"[","]")},
gF:function(a){return new J.aR(a,a.length,0,[H.t(a,0)])},
gB:function(a){return H.cd(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.bk(P.aO("set length"))
if(b<0)throw H.h(P.av(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.bk(P.aO("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cC(a,b))
a[b]=c},
$ip:1,
$ia:1}
J.ii.prototype={}
J.aR.prototype={
gD:function(){return this.d},
t:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.ae(u))
s=this.c
if(s>=t){this.sbo(null)
return!1}this.sbo(u[s]);++this.c
return!0},
sbo:function(a){this.d=H.x(a,H.t(this,0))},
$iaT:1}
J.c7.prototype={
an:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.aO(""+a+".floor()"))},
R:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aO(""+a+".round()"))},
aG:function(a,b){var u,t
if(b>20)throw H.h(P.av(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
c9:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
U:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.aO("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
aD:function(a,b){var u
if(a>0)u=this.dV(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dV:function(a,b){return b>31?0:a>>>b},
$iO:1,
$iad:1}
J.cZ.prototype={$iB:1}
J.cY.prototype={}
J.b6.prototype={
b5:function(a,b){if(b<0)throw H.h(H.cC(a,b))
if(b>=a.length)H.bk(H.cC(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(b>=a.length)throw H.h(H.cC(a,b))
return a.charCodeAt(b)},
eC:function(a,b,c){var u,t
if(c>b.length)throw H.h(P.av(c,0,b.length,null,null))
u=a.length
if(c+u>b.length)return
for(t=0;t<u;++t)if(this.a8(b,c+t)!==this.a8(a,t))return
return new H.eY(c,b,a)},
K:function(a,b){if(typeof b!=="string")throw H.h(P.iI(b,null,null))
return a+b},
cf:function(a,b,c){var u
if(c>a.length)throw H.h(P.av(c,0,a.length,null,null))
if(typeof b==="string"){u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)}return J.kb(b,a,c)!=null},
bk:function(a,b){return this.cf(a,b,0)},
az:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.eE(b,null,null))
if(b>c)throw H.h(P.eE(b,null,null))
if(c>a.length)throw H.h(P.eE(c,null,null))
return a.substring(b,c)},
ci:function(a,b){return this.az(a,b,null)},
f1:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
eM:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aE:function(a,b){return this.eM(a,b," ")},
h:function(a){return a},
gB:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gp:function(a){return a.length},
$ij2:1,
$ik:1}
H.V.prototype={
gp:function(a){return this.a.length},
E:function(a,b){return C.d.b5(this.a,b)},
$adr:function(){return[P.B]},
$aT:function(){return[P.B]},
$ap:function(){return[P.B]},
$aa:function(){return[P.B]}}
H.e4.prototype={}
H.bs.prototype={
gF:function(a){return new H.c8(this,this.gp(this),0,[H.bM(this,"bs",0)])},
aI:function(a,b){return this.ck(0,H.f(b,{func:1,ret:P.N,args:[H.bM(this,"bs",0)]}))}}
H.c8.prototype={
gD:function(){return this.d},
t:function(){var u,t,s,r
u=this.a
t=J.iz(u)
s=t.gp(u)
if(this.b!==s)throw H.h(P.bm(u))
r=this.c
if(r>=s){this.sbp(null)
return!1}this.sbp(t.P(u,r));++this.c
return!0},
sbp:function(a){this.d=H.x(a,H.t(this,0))},
$iaT:1}
H.eu.prototype={
gp:function(a){return J.cJ(this.a)},
P:function(a,b){return this.b.$1(J.k8(this.a,b))},
$abs:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.dt.prototype={
gF:function(a){return new H.fn(J.cI(this.a),this.b,this.$ti)}}
H.fn.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gD()))return!0
return!1},
gD:function(){return this.a.gD()}}
H.bq.prototype={}
H.dr.prototype={}
H.dq.prototype={}
H.eF.prototype={}
H.fc.prototype={
N:function(a){var u,t,s
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
H.eB.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.em.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.b(this.a)+")"}}
H.ff.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.i7.prototype={
$1:function(a){if(!!J.P(a).$ib3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:13}
H.dE.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia9:1}
H.bW.prototype={
h:function(a){return"Closure '"+H.ce(this).trim()+"'"},
$ib5:1,
gf4:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f0.prototype={}
H.eT.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cE(u)+"'"}}
H.bT.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var u,t
u=this.c
if(u==null)t=H.cd(this.a)
else t=typeof u!=="object"?J.dQ(u):H.cd(u)
return(t^H.cd(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.ce(u)+"'")}}
H.dp.prototype={
h:function(a){return this.a}}
H.eK.prototype={
h:function(a){return"RuntimeError: "+H.b(this.a)}}
H.aK.prototype={
gp:function(a){return this.a},
ga3:function(){return new H.d1(this,[H.t(this,0)])},
el:function(a){var u
if((a&0x3ffffff)===a){u=this.c
if(u==null)return!1
return this.cJ(u,a)}else return this.ey(a)},
ey:function(a){var u=this.d
if(u==null)return!1
return this.b7(this.aU(u,C.e.gB(a)&0x3ffffff),a)>=0},
E:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aB(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aB(r,b)
s=t==null?null:t.b
return s}else return this.ez(b)},
ez:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aU(u,J.dQ(a)&0x3ffffff)
s=this.b7(t,a)
if(s<0)return
return t[s].b},
H:function(a,b,c){var u,t,s,r,q,p
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aX()
this.b=u}this.br(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aX()
this.c=t}this.br(t,b,c)}else{s=this.d
if(s==null){s=this.aX()
this.d=s}r=J.dQ(b)&0x3ffffff
q=this.aU(s,r)
if(q==null)this.b2(s,r,[this.aY(b,c)])
else{p=this.b7(q,b)
if(p>=0)q[p].b=c
else q.push(this.aY(b,c))}}},
ae:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.bm(this))
u=u.c}},
br:function(a,b,c){var u
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
u=this.aB(a,b)
if(u==null)this.b2(a,b,this.aY(b,c))
else u.b=c},
d0:function(){this.r=this.r+1&67108863},
aY:function(a,b){var u,t
u=new H.eo(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.d0()
return u},
b7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.y(a[t].a,b))return t
return-1},
h:function(a){return P.iV(this)},
aB:function(a,b){return a[b]},
aU:function(a,b){return a[b]},
b2:function(a,b,c){a[b]=c},
cL:function(a,b){delete a[b]},
cJ:function(a,b){return this.aB(a,b)!=null},
aX:function(){var u=Object.create(null)
this.b2(u,"<non-identifier-key>",u)
this.cL(u,"<non-identifier-key>")
return u},
$iiT:1}
H.eo.prototype={}
H.d1.prototype={
gp:function(a){return this.a.a},
gF:function(a){var u,t
u=this.a
t=new H.ep(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ep.prototype={
gD:function(){return this.d},
t:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bm(u))
else{u=this.c
if(u==null){this.sbq(null)
return!1}else{this.sbq(u.a)
this.c=this.c.c
return!0}}},
sbq:function(a){this.d=H.x(a,H.t(this,0))},
$iaT:1}
H.i0.prototype={
$1:function(a){return this.a(a)},
$S:13}
H.i1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:20}
H.i2.prototype={
$1:function(a){return this.a(H.E(a))},
$S:21}
H.el.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
$ij2:1}
H.eY.prototype={}
H.d8.prototype={}
H.d5.prototype={
gp:function(a){return a.length},
$iaC:1,
$aaC:function(){}}
H.d6.prototype={
E:function(a,b){H.h0(b,a,a.length)
return a[b]},
$abq:function(){return[P.O]},
$aT:function(){return[P.O]},
$ip:1,
$ap:function(){return[P.O]},
$ia:1,
$aa:function(){return[P.O]}}
H.d7.prototype={
$abq:function(){return[P.B]},
$aT:function(){return[P.B]},
$ip:1,
$ap:function(){return[P.B]},
$ia:1,
$aa:function(){return[P.B]}}
H.ew.prototype={
E:function(a,b){H.h0(b,a,a.length)
return a[b]}}
H.ex.prototype={
E:function(a,b){H.h0(b,a,a.length)
return a[b]}}
H.ey.prototype={
gp:function(a){return a.length},
E:function(a,b){H.h0(b,a,a.length)
return a[b]},
$ime:1}
H.cs.prototype={}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
P.fq.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:5}
P.fp.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:22}
P.fr.prototype={
$0:function(){this.a.$0()},
$S:1}
P.fs.prototype={
$0:function(){this.a.$0()},
$S:1}
P.fW.prototype={
cA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cB(new P.fX(this,b),0),a)
else throw H.h(P.aO("`setTimeout()` not found."))}}
P.fX.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.ed.prototype={
$0:function(){var u,t,s
try{this.a.aO(this.b.$0())}catch(s){u=H.af(s)
t=H.bj(s)
$.M.toString
this.a.aP(u,t)}},
$S:1}
P.aG.prototype={
eD:function(a){if(this.c!==6)return!0
return this.b.b.bb(H.f(this.d,{func:1,ret:P.N,args:[P.G]}),a.a,P.N,P.G)},
ew:function(a){var u,t,s,r
u=this.e
t=P.G
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.dN(u,{func:1,args:[P.G,P.a9]}))return H.iy(r.eY(u,a.a,a.b,null,t,P.a9),s)
else return H.iy(r.bb(H.f(u,{func:1,args:[P.G]}),a.a,null,t),s)}}
P.ab.prototype={
c4:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.M
if(t!==C.f){t.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.js(b,t)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ab(0,$.M,[c])
r=b==null?1:3
this.aM(new P.aG(s,r,a,b,[u,c]))
return s},
bc:function(a,b){return this.c4(a,null,b)},
aM:function(a){var u,t
u=this.a
if(u<=1){a.a=H.l(this.c,"$iaG")
this.c=a}else{if(u===2){t=H.l(this.c,"$iab")
u=t.a
if(u<4){t.aM(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.h3(null,null,u,H.f(new P.fz(this,a),{func:1,ret:-1}))}},
bF:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.l(this.c,"$iaG")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.l(this.c,"$iab")
t=p.a
if(t<4){p.bF(a)
return}this.a=t
this.c=p.c}u.a=this.aC(a)
t=this.b
t.toString
P.h3(null,null,t,H.f(new P.fD(u,this),{func:1,ret:-1}))}},
b1:function(){var u=H.l(this.c,"$iaG")
this.c=null
return this.aC(u)},
aC:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aO:function(a){var u,t,s
u=H.t(this,0)
H.iy(a,{futureOr:1,type:u})
t=this.$ti
if(H.dM(a,"$ic3",t,"$ac3"))if(H.dM(a,"$iab",t,null))P.jn(a,this)
else P.kX(a,this)
else{s=this.b1()
H.x(a,u)
this.a=4
this.c=a
P.cr(this,s)}},
aP:function(a,b){var u
H.l(b,"$ia9")
u=this.b1()
this.a=8
this.c=new P.a6(a,b)
P.cr(this,u)},
$ic3:1}
P.fz.prototype={
$0:function(){P.cr(this.a,this.b)},
$S:1}
P.fD.prototype={
$0:function(){P.cr(this.b,this.a.a)},
$S:1}
P.fA.prototype={
$1:function(a){var u=this.a
u.a=0
u.aO(a)},
$S:5}
P.fB.prototype={
$2:function(a,b){H.l(b,"$ia9")
this.a.aP(a,b)},
$1:function(a){return this.$2(a,null)},
$S:23}
P.fC.prototype={
$0:function(){this.a.aP(this.b,this.c)},
$S:1}
P.fG.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.c2(H.f(r.d,{func:1}),null)}catch(q){t=H.af(q)
s=H.bj(q)
if(this.d){r=H.l(this.a.a.c,"$ia6").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.l(this.a.a.c,"$ia6")
else p.b=new P.a6(t,s)
p.a=!0
return}if(!!J.P(u).$ic3){if(u instanceof P.ab&&u.a>=4){if(u.a===8){r=this.b
r.b=H.l(u.c,"$ia6")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.bc(new P.fH(o),null)
r.a=!1}},
$S:2}
P.fH.prototype={
$1:function(a){return this.a},
$S:24}
P.fF.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.x(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.bb(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.af(o)
t=H.bj(o)
s=this.a
s.b=new P.a6(u,t)
s.a=!0}},
$S:2}
P.fE.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.l(this.a.a.c,"$ia6")
r=this.c
if(r.eD(u)&&r.e!=null){q=this.b
q.b=r.ew(u)
q.a=!1}}catch(p){t=H.af(p)
s=H.bj(p)
r=H.l(this.a.a.c,"$ia6")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a6(t,s)
n.a=!0}},
$S:2}
P.du.prototype={}
P.eU.prototype={
gp:function(a){var u,t,s,r
u={}
t=new P.ab(0,$.M,[P.B])
u.a=0
s=H.t(this,0)
r=H.f(new P.eW(u,this),{func:1,ret:-1,args:[s]})
H.f(new P.eX(u,t),{func:1,ret:-1})
W.X(this.a,this.b,r,!1,s)
return t}}
P.eW.prototype={
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.t(this.b,0)]}}}
P.eX.prototype={
$0:function(){this.b.aO(this.a.a)},
$S:1}
P.cj.prototype={}
P.eV.prototype={}
P.a6.prototype={
h:function(a){return H.b(this.a)},
$ib3:1}
P.h_.prototype={$ims:1}
P.h2.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.da()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.h(0)
throw s},
$S:1}
P.fL.prototype={
eZ:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
try{if(C.f===$.M){a.$0()
return}P.jt(null,null,this,a,-1)}catch(s){u=H.af(s)
t=H.bj(s)
P.h1(null,null,this,u,H.l(t,"$ia9"))}},
f_:function(a,b,c){var u,t,s
H.f(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.f===$.M){a.$1(b)
return}P.ju(null,null,this,a,b,-1,c)}catch(s){u=H.af(s)
t=H.bj(s)
P.h1(null,null,this,u,H.l(t,"$ia9"))}},
ed:function(a,b){return new P.fN(this,H.f(a,{func:1,ret:b}),b)},
b4:function(a){return new P.fM(this,H.f(a,{func:1,ret:-1}))},
ef:function(a,b){return new P.fO(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
c2:function(a,b){H.f(a,{func:1,ret:b})
if($.M===C.f)return a.$0()
return P.jt(null,null,this,a,b)},
bb:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.M===C.f)return a.$1(b)
return P.ju(null,null,this,a,b,c,d)},
eY:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.M===C.f)return a.$2(b,c)
return P.l5(null,null,this,a,b,c,d,e,f)}}
P.fN.prototype={
$0:function(){return this.a.c2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fM.prototype={
$0:function(){return this.a.eZ(this.b)},
$S:2}
P.fO.prototype={
$1:function(a){var u=this.c
return this.a.f_(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fJ.prototype={
gF:function(a){var u=new P.fK(this,this.r,this.$ti)
u.c=this.e
return u},
gp:function(a){return this.a},
G:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.l(u[b],"$ibJ")!=null}else{t=this.cI(b)
return t}},
cI:function(a){var u=this.d
if(u==null)return!1
return this.aT(this.bz(u,a),a)>=0},
i:function(a,b){var u,t
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iq()
this.b=u}return this.bs(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iq()
this.c=t}return this.bs(t,b)}else return this.cB(b)},
cB:function(a){var u,t,s
H.x(a,H.t(this,0))
u=this.d
if(u==null){u=P.iq()
this.d=u}t=this.bv(a)
s=u[t]
if(s==null)u[t]=[this.aN(a)]
else{if(this.aT(s,a)>=0)return!1
s.push(this.aN(a))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dM(this.c,b)
else return this.dJ(b)},
dJ:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.bz(u,a)
s=this.aT(t,a)
if(s<0)return!1
this.bH(t.splice(s,1)[0])
return!0},
bs:function(a,b){H.x(b,H.t(this,0))
if(H.l(a[b],"$ibJ")!=null)return!1
a[b]=this.aN(b)
return!0},
dM:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$ibJ")
if(u==null)return!1
this.bH(u)
delete a[b]
return!0},
bu:function(){this.r=1073741823&this.r+1},
aN:function(a){var u,t
u=new P.bJ(H.x(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bu()
return u},
bH:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bu()},
bv:function(a){return J.dQ(a)&1073741823},
bz:function(a,b){return a[this.bv(b)]},
aT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.y(a[t].a,b))return t
return-1}}
P.bJ.prototype={}
P.fK.prototype={
gD:function(){return this.d},
t:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bm(u))
else{u=this.c
if(u==null){this.sbt(null)
return!1}else{this.sbt(H.x(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sbt:function(a){this.d=H.x(a,H.t(this,0))},
$iaT:1}
P.eq.prototype={$ip:1,$ia:1}
P.T.prototype={
gF:function(a){return new H.c8(a,this.gp(a),0,[H.iB(this,a,"T",0)])},
P:function(a,b){return this.E(a,b)},
h:function(a){return P.ig(a,"[","]")}}
P.es.prototype={}
P.et.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.b(a)
u.a=t+": "
u.a+=H.b(b)},
$S:7}
P.bt.prototype={
ae:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.bM(this,"bt",0),H.bM(this,"bt",1)]})
for(u=J.cI(this.ga3());u.t();){t=u.gD()
b.$2(t,this.E(0,t))}},
gp:function(a){return J.cJ(this.ga3())},
h:function(a){return P.iV(this)},
$iau:1}
P.fQ.prototype={
V:function(a,b){var u
for(u=J.cI(H.n(b,"$ip",this.$ti,"$ap"));u.t();)this.i(0,u.gD())},
h:function(a){return P.ig(this,"{","}")},
$ip:1,
$ijd:1}
P.dz.prototype={}
P.bX.prototype={}
P.bY.prototype={}
P.e6.prototype={
$abX:function(){return[P.k,[P.a,P.B]]}}
P.ef.prototype={
h:function(a){return this.a}}
P.ee.prototype={
cK:function(a,b,c){var u,t,s,r,q,p,o
for(u=a.length,t=this.a,s=t.e,r=t.d,t=t.c,q=b,p=null;q<c;++q){if(q>=u)return H.e(a,q)
switch(a[q]){case"&":o="&amp;"
break
case'"':o=t?"&quot;":null
break
case"'":o=r?"&#39;":null
break
case"<":o="&lt;"
break
case">":o="&gt;"
break
case"/":o=s?"&#47;":null
break
default:o=null}if(o!=null){if(p==null)p=new P.ba("")
if(q>b)p.a+=C.d.az(a,b,q)
p.a+=o
b=q+1}}if(p==null)return
if(c>b)p.a+=C.d.az(a,b,c)
u=p.a
return u.charCodeAt(0)==0?u:u},
$abY:function(){return[P.k,P.k]}}
P.fh.prototype={}
P.fi.prototype={
en:function(a,b,c){var u,t,s
c=P.j9(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.fY(t)
if(s.cS(a,b,c)!==c)s.bI(C.d.b5(a,c-1),0)
return new Uint8Array(t.subarray(0,H.l1(0,s.b,t.length)))},
em:function(a){return this.en(a,0,null)},
$abY:function(){return[P.k,[P.a,P.B]]}}
P.fY.prototype={
bI:function(a,b){var u,t,s,r,q
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
cS:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.d.b5(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.d.a8(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bI(r,C.d.a8(a,p)))s=p}else if(r<=2047){q=this.b
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
P.N.prototype={}
P.as.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gB:function(a){var u=this.a
return(u^C.e.aD(u,30))&1073741823},
h:function(a){var u,t,s,r,q,p,o,n
u=P.kk(H.kK(this))
t=P.cP(H.kI(this))
s=P.cP(H.kE(this))
r=P.cP(H.kF(this))
q=P.cP(H.kH(this))
p=P.cP(H.kJ(this))
o=P.kl(H.kG(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.O.prototype={}
P.bn.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bn&&this.a===b.a},
gB:function(a){return C.e.gB(this.a)},
h:function(a){var u,t,s,r,q
u=new P.e3()
t=this.a
if(t<0)return"-"+new P.bn(0-t).h(0)
s=u.$1(C.e.U(t,6e7)%60)
r=u.$1(C.e.U(t,1e6)%60)
q=new P.e2().$1(t%1e6)
return""+C.e.U(t,36e8)+":"+H.b(s)+":"+H.b(r)+"."+H.b(q)}}
P.e2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.e3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.b3.prototype={}
P.da.prototype={
h:function(a){return"Throw of null."}}
P.aI.prototype={
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaS()+t+s
if(!this.a)return r
q=this.gaR()
p=P.ie(this.b)
return r+q+": "+p}}
P.bE.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.b(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.b(u)
else if(s>u)t=": Not in range "+H.b(u)+".."+H.b(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.b(u)}return t}}
P.eg.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.ay()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.b(t)},
gp:function(a){return this.f}}
P.fg.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.fe.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ci.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dY.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ie(u)+"."}}
P.eC.prototype={
h:function(a){return"Out of Memory"},
$ib3:1}
P.di.prototype={
h:function(a){return"Stack Overflow"},
$ib3:1}
P.e_.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.fy.prototype={
h:function(a){return"Exception: "+this.a}}
P.eb.prototype={
h:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.d.az(s,0,75)+"...":s
return t+"\n"+r}}
P.b5.prototype={}
P.B.prototype={}
P.p.prototype={
aI:function(a,b){var u=H.bM(this,"p",0)
return new H.dt(this,H.f(b,{func:1,ret:P.N,args:[u]}),[u])},
gp:function(a){var u,t
u=this.gF(this)
for(t=0;u.t();)++t
return t},
ga6:function(a){var u,t
u=this.gF(this)
if(!u.t())throw H.h(H.iR())
t=u.gD()
if(u.t())throw H.h(H.ku())
return t},
P:function(a,b){var u,t,s
if(b<0)H.bk(P.av(b,0,null,"index",null))
for(u=this.gF(this),t=0;u.t();){s=u.gD()
if(b===t)return s;++t}throw H.h(P.c5(b,this,"index",null,t))},
h:function(a){return P.kt(this,"(",")")}}
P.aT.prototype={}
P.a.prototype={$ip:1}
P.H.prototype={
gB:function(a){return P.G.prototype.gB.call(this,this)},
h:function(a){return"null"}}
P.ad.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
m:function(a,b){return this===b},
gB:function(a){return H.cd(this)},
h:function(a){return"Instance of '"+H.ce(this)+"'"},
toString:function(){return this.h(this)}}
P.a9.prototype={}
P.k.prototype={$ij2:1}
P.ba.prototype={
gp:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.m.prototype={}
W.cK.prototype={
h:function(a){return String(a)},
$icK:1}
W.dS.prototype={
h:function(a){return String(a)}}
W.bS.prototype={$ibS:1}
W.b0.prototype={$ib0:1}
W.bV.prototype={
bf:function(a,b,c){var u=this.cT(a,b,P.ln(c,null))
return u},
cT:function(a,b,c){return a.getContext(b,c)},
$ibV:1}
W.b1.prototype={
gp:function(a){return a.length}}
W.bZ.prototype={
gp:function(a){return a.length}}
W.dZ.prototype={}
W.c_.prototype={$ic_:1}
W.c0.prototype={
e8:function(a,b){return a.adoptNode(b)},
dI:function(a,b){return a.querySelectorAll(b)}}
W.e1.prototype={
h:function(a){return String(a)}}
W.cQ.prototype={
eq:function(a,b){return a.createHTMLDocument(b)}}
W.cR.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
m:function(a,b){var u
if(b==null)return!1
if(!H.dM(b,"$ide",[P.ad],"$ade"))return!1
u=J.ay(b)
return a.left===u.gaf(b)&&a.top===u.gc5(b)&&a.width===u.gbe(b)&&a.height===u.gb6(b)},
gB:function(a){return W.jp(C.b.gB(a.left),C.b.gB(a.top),C.b.gB(a.width),C.b.gB(a.height))},
gb6:function(a){return a.height},
gaf:function(a){return a.left},
gc5:function(a){return a.top},
gbe:function(a){return a.width},
$ide:1,
$ade:function(){return[P.ad]}}
W.ip.prototype={
gp:function(a){return this.a.length},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return H.x(u[b],H.t(this,0))}}
W.a2.prototype={
geb:function(a){return new W.fu(a)},
h:function(a){return a.localName},
L:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iP
if(u==null){u=H.d([],[W.al])
t=new W.d9(u)
C.a.i(u,W.jo(null))
C.a.i(u,W.jq())
$.iP=t
d=t}else d=u
u=$.iO
if(u==null){u=new W.dH(d)
$.iO=u
c=u}else{u.a=d
c=u}}if($.aS==null){u=document
t=u.implementation
t=(t&&C.A).eq(t,"")
$.aS=t
$.id=t.createRange()
t=$.aS
t.toString
t=t.createElement("base")
H.l(t,"$ibS")
t.href=u.baseURI
u=$.aS.head;(u&&C.B).u(u,t)}u=$.aS
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.l(t,"$ib0")}u=$.aS
if(!!this.$ib0)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aS.body;(u&&C.j).u(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.G(C.N,a.tagName)){u=$.id;(u&&C.t).cb(u,s)
u=$.id
r=(u&&C.t).eo(u,b)}else{s.innerHTML=b
r=$.aS.createDocumentFragment()
for(u=J.ay(r);t=s.firstChild,t!=null;)u.u(r,t)}u=$.aS.body
if(s==null?u!=null:s!==u)J.iH(s)
c.bh(r)
C.o.e8(document,r)
return r},
ep:function(a,b,c){return this.L(a,b,c,null)},
ce:function(a,b,c,d){a.textContent=null
this.u(a,this.L(a,b,c,d))},
cd:function(a,b){return this.ce(a,b,null,null)},
ah:function(a,b){return a.getAttribute(b)},
dK:function(a,b){return a.removeAttribute(b)},
$ia2:1,
gf0:function(a){return a.tagName}}
W.e5.prototype={
$1:function(a){return!!J.P(H.l(a,"$iu")).$ia2},
$S:25}
W.c.prototype={$ic:1}
W.bp.prototype={
cC:function(a,b,c,d){return a.addEventListener(b,H.cB(H.f(c,{func:1,args:[W.c]}),1),!1)},
$ibp:1}
W.ea.prototype={
gp:function(a){return a.length}}
W.cW.prototype={}
W.c4.prototype={
gp:function(a){return a.length},
E:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c5(b,a,null,null,null))
return a[b]},
P:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaC:1,
$aaC:function(){return[W.u]},
$aT:function(){return[W.u]},
$ip:1,
$ap:function(){return[W.u]},
$ia:1,
$aa:function(){return[W.u]},
$aak:function(){return[W.u]}}
W.cX.prototype={}
W.c6.prototype={$ic6:1}
W.aL.prototype={$iaL:1}
W.d3.prototype={
h:function(a){return String(a)},
$id3:1}
W.a_.prototype={$ia_:1}
W.aa.prototype={
ga6:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.je("No elements"))
if(t>1)throw H.h(P.je("More than one element"))
return u.firstChild},
V:function(a,b){var u,t,s,r,q
H.n(b,"$ip",[W.u],"$ap")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ay(t),q=0;q<s;++q)r.u(t,u.firstChild)
return},
gF:function(a){var u=this.a.childNodes
return new W.cU(u,u.length,-1,[H.iB(C.Q,u,"ak",0)])},
gp:function(a){return this.a.childNodes.length},
E:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aT:function(){return[W.u]},
$ap:function(){return[W.u]},
$aa:function(){return[W.u]}}
W.u.prototype={
eU:function(a){var u=a.parentNode
if(u!=null)J.dP(u,a)},
h:function(a){var u=a.nodeValue
return u==null?this.cj(a):u},
u:function(a,b){return a.appendChild(b)},
dL:function(a,b){return a.removeChild(b)},
$iu:1}
W.cb.prototype={
gp:function(a){return a.length},
E:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c5(b,a,null,null,null))
return a[b]},
P:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaC:1,
$aaC:function(){return[W.u]},
$aT:function(){return[W.u]},
$ip:1,
$ap:function(){return[W.u]},
$ia:1,
$aa:function(){return[W.u]},
$aak:function(){return[W.u]}}
W.dd.prototype={
eo:function(a,b){return a.createContextualFragment(b)},
cb:function(a,b){return a.selectNodeContents(b)}}
W.eL.prototype={
gp:function(a){return a.length}}
W.dj.prototype={
L:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
u=W.km("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aa(t).V(0,new W.aa(u))
return t}}
W.eZ.prototype={
L:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.L(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.ga6(u)
s.toString
u=new W.aa(s)
r=u.ga6(u)
t.toString
r.toString
new W.aa(t).V(0,new W.aa(r))
return t}}
W.f_.prototype={
L:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.L(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.ga6(u)
t.toString
s.toString
new W.aa(t).V(0,new W.aa(s))
return t}}
W.ck.prototype={$ick:1}
W.aM.prototype={$iaM:1}
W.aE.prototype={$iaE:1}
W.fb.prototype={
gp:function(a){return a.length},
E:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c5(b,a,null,null,null))
return a[b]},
P:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaC:1,
$aaC:function(){return[W.aM]},
$aT:function(){return[W.aM]},
$ip:1,
$ap:function(){return[W.aM]},
$ia:1,
$aa:function(){return[W.aM]},
$aak:function(){return[W.aM]}}
W.bb.prototype={}
W.aP.prototype={
ges:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aO("deltaY is not supported"))},
ger:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aO("deltaX is not supported"))},
$iaP:1}
W.cp.prototype={
dO:function(a,b){return a.requestAnimationFrame(H.cB(H.f(b,{func:1,ret:-1,args:[P.ad]}),1))},
cM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cq.prototype={$icq:1}
W.dw.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
m:function(a,b){var u
if(b==null)return!1
if(!H.dM(b,"$ide",[P.ad],"$ade"))return!1
u=J.ay(b)
return a.left===u.gaf(b)&&a.top===u.gc5(b)&&a.width===u.gbe(b)&&a.height===u.gb6(b)},
gB:function(a){return W.jp(C.b.gB(a.left),C.b.gB(a.top),C.b.gB(a.width),C.b.gB(a.height))},
gb6:function(a){return a.height},
gbe:function(a){return a.width}}
W.dA.prototype={
gp:function(a){return a.length},
E:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.c5(b,a,null,null,null))
return a[b]},
P:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaC:1,
$aaC:function(){return[W.u]},
$aT:function(){return[W.u]},
$ip:1,
$ap:function(){return[W.u]},
$ia:1,
$aa:function(){return[W.u]},
$aak:function(){return[W.u]}}
W.ft.prototype={
ae:function(a,b){var u,t,s,r,q,p
H.f(b,{func:1,ret:-1,args:[P.k,P.k]})
for(u=this.ga3(),t=u.length,s=this.a,r=J.ay(s),q=0;q<u.length;u.length===t||(0,H.ae)(u),++q){p=u[q]
b.$2(p,r.ah(s,p))}},
ga3:function(){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.k])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.l(u[r],"$icq")
if(q.namespaceURI==null)C.a.i(t,q.name)}return t},
$abt:function(){return[P.k,P.k]},
$aau:function(){return[P.k,P.k]}}
W.fu.prototype={
E:function(a,b){return J.ia(this.a,H.E(b))},
gp:function(a){return this.ga3().length}}
W.fv.prototype={}
W.io.prototype={}
W.fw.prototype={}
W.fx.prototype={
$1:function(a){return this.a.$1(H.l(a,"$ic"))},
$S:26}
W.bd.prototype={
cu:function(a){var u,t
u=$.iG()
if(u.a===0){for(t=0;t<262;++t)u.H(0,C.M[t],W.lt())
for(t=0;t<12;++t)u.H(0,C.l[t],W.lu())}},
ac:function(a){return $.k3().G(0,W.c1(a))},
W:function(a,b,c){var u,t,s
u=W.c1(a)
t=$.iG()
s=t.E(0,H.b(u)+"::"+b)
if(s==null)s=t.E(0,"*::"+b)
if(s==null)return!1
return H.lm(s.$4(a,b,c,this))},
$ial:1}
W.ak.prototype={
gF:function(a){return new W.cU(a,this.gp(a),-1,[H.iB(this,a,"ak",0)])}}
W.d9.prototype={
ac:function(a){return C.a.bJ(this.a,new W.eA(a))},
W:function(a,b,c){return C.a.bJ(this.a,new W.ez(a,b,c))},
$ial:1}
W.eA.prototype={
$1:function(a){return H.l(a,"$ial").ac(this.a)},
$S:15}
W.ez.prototype={
$1:function(a){return H.l(a,"$ial").W(this.a,this.b,this.c)},
$S:15}
W.dD.prototype={
cz:function(a,b,c,d){var u,t,s
this.a.V(0,c)
u=b.aI(0,new W.fR())
t=b.aI(0,new W.fS())
this.b.V(0,u)
s=this.c
s.V(0,C.O)
s.V(0,t)},
ac:function(a){return this.a.G(0,W.c1(a))},
W:function(a,b,c){var u,t
u=W.c1(a)
t=this.c
if(t.G(0,H.b(u)+"::"+b))return this.d.e9(c)
else if(t.G(0,"*::"+b))return this.d.e9(c)
else{t=this.b
if(t.G(0,H.b(u)+"::"+b))return!0
else if(t.G(0,"*::"+b))return!0
else if(t.G(0,H.b(u)+"::*"))return!0
else if(t.G(0,"*::*"))return!0}return!1},
$ial:1}
W.fR.prototype={
$1:function(a){return!C.a.G(C.l,H.E(a))},
$S:16}
W.fS.prototype={
$1:function(a){return C.a.G(C.l,H.E(a))},
$S:16}
W.fU.prototype={
W:function(a,b,c){if(this.cn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ia(a,"template")==="")return this.e.G(0,b)
return!1}}
W.fV.prototype={
$1:function(a){return"TEMPLATE::"+H.b(H.E(a))},
$S:27}
W.fT.prototype={
ac:function(a){var u=J.P(a)
if(!!u.$icg)return!1
u=!!u.$ii
if(u&&W.c1(a)==="foreignObject")return!1
if(u)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.d.bk(b,"on"))return!1
return this.ac(a)},
$ial:1}
W.cU.prototype={
t:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbx(J.k6(this.a,u))
this.c=u
return!0}this.sbx(null)
this.c=t
return!1},
gD:function(){return this.d},
sbx:function(a){this.d=H.x(a,H.t(this,0))},
$iaT:1}
W.al.prototype={}
W.fP.prototype={$imf:1}
W.dH.prototype={
bh:function(a){new W.fZ(this).$2(a,null)},
al:function(a,b){if(b==null)J.iH(a)
else J.dP(b,a)},
dR:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.k9(a)
s=J.ia(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.af(o)}q="element unprintable"
try{q=J.b_(a)}catch(o){H.af(o)}try{p=W.c1(a)
this.dQ(H.l(a,"$ia2"),b,u,q,p,H.l(t,"$iau"),H.E(s))}catch(o){if(H.af(o) instanceof P.aI)throw o
else{this.al(a,b)
window
n="Removing corrupted element "+H.b(q)
if(typeof console!="undefined")window.console.warn(n)}}},
dQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ac(a)){this.al(a,b)
window
u="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.al(a,b)
window
u="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3()
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.ga3().length-1,u=f.a,r=J.ay(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.W(a,J.kc(q),r.ah(u,q))){window
p="Removing disallowed attribute <"+H.b(e)+" "+q+'="'+H.b(r.ah(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ah(u,q)
r.dK(u,q)}}if(!!J.P(a).$ick)this.bh(a.content)},
$im1:1}
W.fZ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.dR(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.al(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.af(r)
q=H.l(u,"$iu")
if(s){p=q.parentNode
if(p!=null)J.dP(p,q)}else J.dP(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.l(t,"$iu")}},
$S:28}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
P.hZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.cg.prototype={$icg:1}
P.i.prototype={
L:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.al])
C.a.i(u,W.jo(null))
C.a.i(u,W.jq())
C.a.i(u,new W.fT())
c=new W.dH(new W.d9(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).ep(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.aa(r)
p=u.ga6(u)
for(u=J.ay(q);s=p.firstChild,s!=null;)u.u(q,s)
return q},
$ii:1}
P.cV.prototype={$icV:1}
P.bF.prototype={
ee:function(a,b,c){return a.bindFramebuffer(b,c)},
eg:function(a,b){return a.clear(b)},
eh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ei:function(a,b){return a.clearDepth(b)},
eu:function(a,b){return a.depthFunc(b)},
bM:function(a,b){return a.enable(b)},
bg:function(a,b){return a.getParameter(b)},
f3:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibF:1}
O.b2.prototype={
cc:function(a,b,c){var u={func:1,ret:-1,args:[P.B,[P.p,H.t(this,0)]]}
H.f(a,u)
H.f(c,u)
this.sbD(b)
this.sbA(a)
this.sbE(c)},
bi:function(a,b){return this.cc(a,null,b)},
bC:function(a){H.n(a,"$ip",this.$ti,"$ap")
return!0},
d1:function(a,b){var u
H.n(b,"$ip",this.$ti,"$ap")
u=this.c
if(u!=null)u.$2(a,b)},
gp:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.aR(u,u.length,0,[H.t(u,0)])},
i:function(a,b){var u,t,s
H.x(b,H.t(this,0))
u=this.$ti
if(this.bC(H.d([b],u))){t=this.a
s=t.length
C.a.i(t,b)
this.d1(s,H.d([b],u))}},
sd_:function(a){this.a=H.n(a,"$ia",this.$ti,"$aa")},
sbD:function(a){this.b=H.f(a,{func:1,ret:P.N,args:[[P.p,H.t(this,0)]]})},
sbA:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.B,[P.p,H.t(this,0)]]})},
sbE:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.B,[P.p,H.t(this,0)]]})},
$ip:1}
O.c9.prototype={
gp:function(a){return this.a.length},
gw:function(){var u=this.b
if(u==null){u=D.bo()
this.b=u}return u},
ct:function(a){var u=this.b
if(u!=null)u.am(a)},
a7:function(){return this.ct(null)},
gaq:function(){var u=this.a
if(u.length>0)return C.a.gb8(u)
else return V.aD()},
bY:function(a){var u=this.a
if(a==null)C.a.i(u,V.aD())
else C.a.i(u,a)
this.a7()},
ba:function(){var u=this.a
if(u.length>0){u.pop()
this.a7()}},
saV:function(a){this.a=H.n(a,"$ia",[V.b7],"$aa")}}
E.dT.prototype={}
E.W.prototype={
sbj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gw().I(0,this.gbU())
t=this.c
if(t!=null)t.gw().i(0,this.gbU())
s=new D.am("shape",u,this.c,this,[F.dh])
s.b=!0
this.a4(s)}},
sar:function(a){var u,t
if(!J.y(this.r,a)){u=this.r
if(u!=null)u.gw().I(0,this.gbS())
if(a!=null)a.gw().i(0,this.gbS())
this.r=a
t=new D.am("mover",u,a,this,[U.ca])
t.b=!0
this.a4(t)}},
c6:function(a){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.y(t,this.x)){s=this.x
this.x=t
r=new D.am("matrix",s,t,this,[V.b7])
r.b=!0
this.a4(r)}for(u=this.y.a,u=new J.aR(u,u.length,0,[H.t(u,0)]);u.t();)u.d.c6(a)},
aF:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.i(u.a,u.gaq())
else C.a.i(u.a,t.v(0,u.gaq()))
u.a7()
a.bZ(this.f)
u=a.dy
s=(u&&C.a).gb8(u)
if(s!=null&&this.d!=null)s.eV(a,this)
for(u=this.y.a,u=new J.aR(u,u.length,0,[H.t(u,0)]);u.t();)u.d.aF(a)
a.bW()
a.dx.ba()},
a4:function(a){var u=this.z
if(u!=null)u.am(a)},
bP:function(){return this.a4(null)},
bV:function(a){H.l(a,"$iK")
this.e=null
this.a4(a)},
eL:function(){return this.bV(null)},
bT:function(a){this.a4(H.l(a,"$iK"))},
eK:function(){return this.bT(null)},
bR:function(a){this.a4(H.l(a,"$iK"))},
eH:function(){return this.bR(null)},
eG:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ip",[E.W],"$ap")
for(u=b.length,t=this.gbQ(),s={func:1,ret:-1,args:[D.K]},r=[s],q=0;q<b.length;b.length===u||(0,H.ae)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sa9(null)
o.saZ(null)
o.c=null
o.d=0
p.z=o}H.f(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).i(o,t)}}this.bP()},
eJ:function(a,b){var u,t
H.n(b,"$ip",[E.W],"$ap")
for(u=b.gF(b),t=this.gbQ();u.t();)u.gD().gw().I(0,t)
this.bP()},
h:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
scF:function(a,b){this.y=H.n(b,"$ib2",[E.W],"$ab2")},
$ij0:1}
E.eG.prototype={
cp:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.as(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c9()
t=[V.b7]
u.saV(H.d([],t))
u.b=null
u.gw().i(0,new E.eH(this))
this.cy=u
u=new O.c9()
u.saV(H.d([],t))
u.b=null
u.gw().i(0,new E.eI(this))
this.db=u
u=new O.c9()
u.saV(H.d([],t))
u.b=null
u.gw().i(0,new E.eJ(this))
this.dx=u
this.sdZ(H.d([],[O.bG]))
u=this.dy;(u&&C.a).i(u,null)
this.sdU(new H.aK([P.k,A.dg]))},
bZ:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gb8(u):a;(u&&C.a).i(u,t)},
bW:function(){var u=this.dy
if(u.length>1)u.pop()},
sdZ:function(a){this.dy=H.n(a,"$ia",[O.bG],"$aa")},
sdU:function(a){this.fr=H.n(a,"$iau",[P.k,A.dg],"$aau")}}
E.eH.prototype={
$1:function(a){var u
H.l(a,"$iK")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.eI.prototype={
$1:function(a){var u
H.l(a,"$iK")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.eJ.prototype={
$1:function(a){var u
H.l(a,"$iK")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dl.prototype={
bn:function(a){H.l(a,"$iK")
if(this.Q)this.c0()},
aL:function(){return this.bn(null)},
bG:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.aQ(u)
s=C.b.an(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.b.an(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.dm(C.i,this.geW())}},
c0:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.f(new E.f8(this),{func:1,ret:-1,args:[P.ad]})
C.x.cM(u)
C.x.dO(u,W.jw(t,P.ad))}},
c_:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bG()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.ic(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sp(r.a,0)
r.a7()
r=s.db
C.a.sp(r.a,0)
r.a7()
r=s.dx
C.a.sp(r.a,0)
r.a7()
r=s.dy;(r&&C.a).sp(r,0)
s=s.dy;(s&&C.a).i(s,null)
this.d.aF(this.e)}}catch(q){u=H.af(q)
t=H.bj(q)
P.jH("Error: "+H.b(u))
P.jH("Stack: "+H.b(t))
throw H.h(u)}}}
E.f8.prototype={
$1:function(a){var u
H.lE(a)
u=this.a
if(u.ch){u.ch=!1
u.c_()}},
$S:29}
Z.aw.prototype={
ea:function(a){var u,t,s
u=$.ai()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.ah()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ag()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.a8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.az()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aH()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ap()
if((t&u.a)!==0)if(s===a)return u
return $.i9()},
ex:function(a,b){var u,t,s
u=$.ai()
t=this.a
if((t&u.a)!==0){if(J.y(b,u))return 0
s=1}else s=0
u=$.ah()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.ag()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.a8()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.aA()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.az()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.aH()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.aq()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.ap()
if((t&u.a)!==0)if(J.y(b,u))return s
return-1},
eE:function(a,b){var u,t,s
u=$.ai()
t=this.a
if((t&u.a)!==0){if(J.y(b,u))return 0
s=3}else s=0
u=$.ah()
if((t&u.a)!==0){if(J.y(b,u))return s
s+=3}u=$.ag()
if((t&u.a)!==0){if(J.y(b,u))return s
s+=3}u=$.a8()
if((t&u.a)!==0){if(J.y(b,u))return s
s+=2}u=$.aA()
if((t&u.a)!==0){if(J.y(b,u))return s
s+=3}u=$.az()
if((t&u.a)!==0){if(J.y(b,u))return s
s+=3}u=$.aH()
if((t&u.a)!==0){if(J.y(b,u))return s
s+=4}u=$.aq()
if((t&u.a)!==0){if(J.y(b,u))return s;++s}u=$.ap()
if((t&u.a)!==0)if(J.y(b,u))return s
return-1},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aw))return!1
return this.a===b.a},
h:function(a){var u,t
u=H.d([],[P.k])
t=this.a
if((t&$.ai().a)!==0)C.a.i(u,"Pos")
if((t&$.ah().a)!==0)C.a.i(u,"Norm")
if((t&$.ag().a)!==0)C.a.i(u,"Binm")
if((t&$.a8().a)!==0)C.a.i(u,"Txt2D")
if((t&$.aA().a)!==0)C.a.i(u,"TxtCube")
if((t&$.az().a)!==0)C.a.i(u,"Clr3")
if((t&$.aH().a)!==0)C.a.i(u,"Clr4")
if((t&$.aq().a)!==0)C.a.i(u,"Weight")
if((t&$.ap().a)!==0)C.a.i(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.dV.prototype={}
D.c2.prototype={
i:function(a,b){var u={func:1,ret:-1,args:[D.K]}
H.f(b,u)
if(this.a==null)this.sa9(H.d([],[u]))
u=this.a;(u&&C.a).i(u,b)},
I:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[D.K]})
u=this.a
u=u==null?null:C.a.G(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
return t},
am:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.K(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.ae(t,new D.e8(u))
return!0},
sa9:function(a){this.a=H.n(a,"$ia",[{func:1,ret:-1,args:[D.K]}],"$aa")},
saZ:function(a){this.b=H.n(a,"$ia",[{func:1,ret:-1,args:[D.K]}],"$aa")}}
D.e8.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.K]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.K.prototype={}
D.eh.prototype={}
D.ei.prototype={}
D.am.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.b(this.d)+" => "+H.b(this.e)}}
X.cL.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.b(this.a)}}
X.d0.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d0))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.b(this.a)}}
X.en.prototype={
eR:function(a){this.c=a.b
this.d.i(0,a.a)
return!1},
eN:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
sdH:function(a){this.d=H.n(a,"$ijd",[P.B],"$ajd")}}
X.er.prototype={
b9:function(a,b){this.r=a.a
return!1},
at:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ca()
if(typeof u!=="number")return u.c7()
this.r=(u&~t)>>>0
return!1},
as:function(a,b){return!1},
eS:function(a){return!1},
dm:function(a,b,c){return}}
X.aW.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aW))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ev.prototype={
b9:function(a,b){this.f=a.a
return!1},
at:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ca()
if(typeof u!=="number")return u.c7()
this.f=(u&~t)>>>0
return!1},
as:function(a,b){return!1},
eT:function(a,b){return!1}}
X.fa.prototype={
eQ:function(a){H.n(a,"$ia",[V.S],"$aa")
return!1},
eO:function(a){H.n(a,"$ia",[V.S],"$aa")
return!1},
eP:function(a){H.n(a,"$ia",[V.S],"$aa")
return!1}}
X.ds.prototype={
bw:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d0(u,new X.aW(t,a.altKey,a.shiftKey))},
ab:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aW(t,a.altKey,a.shiftKey)},
b3:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aW(t,a.altKey,a.shiftKey)},
a1:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.aj()
q=u.top
if(typeof s!=="number")return s.aj()
return new V.S(t-r,s-q)},
ak:function(a){return new V.a0(a.movementX,a.movementY)},
b0:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.S])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.ae)(s),++q){p=s[q]
o=C.b.R(p.pageX)
C.b.R(p.pageY)
n=u.left
C.b.R(p.pageX)
C.a.i(t,new V.S(o-n,C.b.R(p.pageY)-u.top))}return t},
a_:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cL(u,new X.aW(t,a.altKey,a.shiftKey))},
aW:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.aj()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.aj()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
dh:function(a){this.f=!0},
d3:function(a){this.f=!1},
da:function(a){H.l(a,"$ia_")
if(this.f&&this.aW(a))a.preventDefault()},
dl:function(a){var u
H.l(a,"$iaL")
if(!this.f)return
u=this.bw(a)
this.b.eR(u)},
dj:function(a){var u
H.l(a,"$iaL")
if(!this.f)return
u=this.bw(a)
this.b.eN(u)},
dq:function(a){var u,t,s,r
H.l(a,"$ia_")
u=this.a
u.focus()
this.f=!0
this.ab(a)
if(this.x){t=this.a_(a)
s=this.ak(a)
if(this.d.b9(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a_(a)
r=this.a1(a)
if(this.c.b9(t,r))a.preventDefault()},
du:function(a){var u,t,s
H.l(a,"$ia_")
this.ab(a)
u=this.a_(a)
if(this.x){t=this.ak(a)
if(this.d.at(u,t))a.preventDefault()
return}if(this.r)return
s=this.a1(a)
if(this.c.at(u,s))a.preventDefault()},
df:function(a){var u,t,s
H.l(a,"$ia_")
if(!this.aW(a)){this.ab(a)
u=this.a_(a)
if(this.x){t=this.ak(a)
if(this.d.at(u,t))a.preventDefault()
return}if(this.r)return
s=this.a1(a)
if(this.c.at(u,s))a.preventDefault()}},
ds:function(a){var u,t,s
H.l(a,"$ia_")
this.ab(a)
u=this.a_(a)
if(this.x){t=this.ak(a)
if(this.d.as(u,t))a.preventDefault()
return}if(this.r)return
s=this.a1(a)
if(this.c.as(u,s))a.preventDefault()},
dd:function(a){var u,t,s
H.l(a,"$ia_")
if(!this.aW(a)){this.ab(a)
u=this.a_(a)
if(this.x){t=this.ak(a)
if(this.d.as(u,t))a.preventDefault()
return}if(this.r)return
s=this.a1(a)
if(this.c.as(u,s))a.preventDefault()}},
dw:function(a){var u,t
H.l(a,"$iaP")
this.ab(a)
u=new V.a0((a&&C.w).ger(a),C.w.ges(a)).S(0,180)
if(this.x){if(this.d.eS(u))a.preventDefault()
return}if(this.r)return
t=this.a1(a)
if(this.c.eT(u,t))a.preventDefault()},
dA:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a_(this.y)
s=this.a1(this.y)
this.d.dm(t,s,u)}},
dG:function(a){var u
H.l(a,"$iaE")
this.a.focus()
this.f=!0
this.b3(a)
u=this.b0(a)
if(this.e.eQ(u))a.preventDefault()},
dC:function(a){var u
H.l(a,"$iaE")
this.b3(a)
u=this.b0(a)
if(this.e.eO(u))a.preventDefault()},
dE:function(a){var u
H.l(a,"$iaE")
this.b3(a)
u=this.b0(a)
if(this.e.eP(u))a.preventDefault()},
scN:function(a){this.z=H.n(a,"$ia",[[P.cj,P.G]],"$aa")}}
V.cN.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cN))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.e7.prototype={}
V.a3.prototype={
m:function(a,b){if(b==null)return!1
if(!(b instanceof V.a3))return!1
return this.a===b.a},
h:function(a){var u,t,s
$.i8()
$.jO()
u=H.d([],[P.k])
t=this.a
s=$.bP().a
if((t&s)===s)C.a.i(u,"XPos")
s=$.jP().a
if((t&s)===s)C.a.i(u,"XCenter")
s=$.bO().a
if((t&s)===s)C.a.i(u,"XNeg")
s=$.bQ().a
if((t&s)===s)C.a.i(u,"YPos")
s=$.jQ().a
if((t&s)===s)C.a.i(u,"YCenter")
s=$.cF().a
if((t&s)===s)C.a.i(u,"YNeg")
s=$.cG().a
if((t&s)===s)C.a.i(u,"ZPos")
s=$.jR().a
if((t&s)===s)C.a.i(u,"ZCenter")
s=$.bR().a
if((t&s)===s)C.a.i(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
V.at.prototype={
h:function(a){return H.b(this.a)+" "+H.b(this.b)}}
V.Q.prototype={
aw:function(a,b){var u=H.d([this.a,this.b,this.c,this.d],[P.O])
return u},
av:function(a){return this.aw(a,!1)},
J:function(){var u,t,s,r,q,p
u=this.a
t=this.d
s=this.b
r=this.c
q=u*t-s*r
if(Math.abs(q-0)<$.C().a)return V.bv()
p=1/q
return new V.Q(t*p,-s*p,-r*p,u*p)},
v:function(a,b){var u,t,s,r,q,p,o,n
u=this.a
t=b.a
s=this.b
r=b.c
q=b.b
p=b.d
o=this.c
n=this.d
return new V.Q(u*t+s*r,u*q+s*p,o*t+n*r,o*q+n*p)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return this.A()},
X:function(a,b,c){var u,t,s,r,q
u=[P.O]
t=V.aY(H.d([this.a,this.c],u),b,c)
s=V.aY(H.d([this.b,this.d],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
r="["+t[0]+", "
q=s.length
if(0>=q)return H.e(s,0)
r=r+s[0]+",\n"+a+" "
if(1>=u)return H.e(t,1)
r=r+t[1]+", "
if(1>=q)return H.e(s,1)
return r+s[1]+"]"},
A:function(){return this.X("",3,0)},
l:function(a){return this.X(a,3,0)}}
V.L.prototype={
aw:function(a,b){var u=H.d([this.a,this.b,this.c,this.d,this.e,this.f,this.r,this.x,this.y],[P.O])
return u},
av:function(a){return this.aw(a,!1)},
J:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=this.e
s=this.y
r=t*s
q=this.f
p=this.x
o=this.d
n=this.b
m=n*s
l=this.c
k=p*l
j=this.r
i=n*q-t*l
h=u*(r-q*p)-o*(m-k)+j*i
if(Math.abs(h-0)<$.C().a)return V.bz()
g=1/h
return new V.L((r-p*q)*g,(k-m)*g,i*g,(j*q-o*s)*g,(u*s-j*l)*g,(o*l-u*q)*g,(o*p-j*t)*g,(j*n-u*p)*g,(u*t-o*n)*g)},
v:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.a
t=b.a
s=this.b
r=b.d
q=this.c
p=b.r
o=b.b
n=b.e
m=b.x
l=b.c
k=b.f
j=b.y
i=this.d
h=this.e
g=this.f
f=this.r
e=this.x
d=this.y
return new V.L(u*t+s*r+q*p,u*o+s*n+q*m,u*l+s*k+q*j,i*t+h*r+g*p,i*o+h*n+g*m,i*l+h*k+g*j,f*t+e*r+d*p,f*o+e*n+d*m,f*l+e*k+d*j)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.C().a
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
h:function(a){return this.A()},
X:function(a,b,c){var u,t,s,r,q,p,o,n
u=[P.O]
t=V.aY(H.d([this.a,this.d,this.r],u),b,c)
s=V.aY(H.d([this.b,this.e,this.x],u),b,c)
r=V.aY(H.d([this.c,this.f,this.y],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.e(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.e(r,0)
q=q+r[0]+",\n"
n=a+" "
if(1>=u)return H.e(t,1)
n=n+t[1]+", "
if(1>=p)return H.e(s,1)
n=n+s[1]+", "
if(1>=o)return H.e(r,1)
n=q+(n+r[1]+",\n")
q=a+" "
if(2>=u)return H.e(t,2)
q=q+t[2]+", "
if(2>=p)return H.e(s,2)
q=q+s[2]+", "
if(2>=o)return H.e(r,2)
return n+(q+r[2]+"]")},
A:function(){return this.X("",3,0)},
l:function(a){return this.X(a,3,0)}}
V.b7.prototype={
aw:function(a,b){var u=H.d([this.a,this.b,this.c,this.d,this.e,this.f,this.r,this.x,this.y,this.z,this.Q,this.ch,this.cx,this.cy,this.db,this.dx],[P.O])
return u},
av:function(a){return this.aw(a,!1)},
J:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.C().a)return V.aD()
a8=1/a7
a9=-r
b0=-d
return V.J((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
v:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.J(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
aH:function(a){var u,t,s,r
u=a.a
t=a.b
s=a.c
r=a.d
return new V.b8(this.a*u+this.b*t+this.c*s+this.d*r,this.e*u+this.f*t+this.r*s+this.x*r,this.y*u+this.z*t+this.Q*s+this.ch*r,this.cx*u+this.cy*t+this.db*s+this.dx*r)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.C().a
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
h:function(a){return this.A()},
X:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.O]
t=V.aY(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.aY(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.aY(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.aY(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
A:function(){return this.X("",3,0)},
l:function(a){return this.X(a,3,0)}}
V.S.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.q.prototype={
S:function(a,b){if(Math.abs(b-0)<$.C().a)return V.j6()
return new V.q(this.a/b,this.b/b,this.c/b)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.q))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
h:function(a){return this.A()},
M:function(a,b){return"["+V.A(this.a,a,b)+", "+V.A(this.b,a,b)+", "+V.A(this.c,a,b)+"]"},
A:function(){return this.M(3,0)}}
V.b8.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return this.A()},
M:function(a,b){return"["+V.A(this.a,a,b)+", "+V.A(this.b,a,b)+", "+V.A(this.c,a,b)+", "+V.A(this.d,a,b)+"]"},
A:function(){return this.M(3,0)}}
V.cf.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cf))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
V.b9.prototype={
bK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(c==null)c=$.i8()
u=$.aZ()
t=b.a
if(t!==0){if(t>0){s=$.bO()
r=c.a
q=s.a
if((r&q)===q){r=a.a-(this.a+this.d)
p=Math.abs(r)<$.C().a?0:r/t
o=!0}else{p=null
s=null
o=!1}}else{s=$.bP()
r=c.a
q=s.a
if((r&q)===q){r=a.a+a.d-this.a
p=Math.abs(r)<$.C().a?0:r/t
o=!0}else{p=null
s=null
o=!1}}if(o){if(typeof p!=="number")return p.ay()
r=p<100&&p>=0&&p<=1}else r=!1
if(r){r=b.b
if(typeof p!=="number")return H.aQ(p)
n=this.b+r*p
r=a.b
q=$.C().a
if(n-q<r+a.e&&r-q<n+this.e){m=this.c+b.c*p
r=a.c
if(m-q<r+a.f&&r-q<m+this.f){l=s
k=p}else{l=u
k=100}}else{l=u
k=100}}else{l=u
k=100}}else{l=u
k=100
p=null
s=null}r=b.b
if(r!==0){if(r>0){j=$.cF()
q=c.a
i=j.a
if((q&i)===i){q=a.b-(this.b+this.e)
p=Math.abs(q)<$.C().a?0:q/r
s=j
o=!0}else o=!1}else{j=$.bQ()
q=c.a
i=j.a
if((q&i)===i){q=a.b+a.e-this.b
p=Math.abs(q)<$.C().a?0:q/r
s=j
o=!0}else o=!1}if(o){if(typeof p!=="number")return p.ay()
q=p<k&&p>=0&&p<=1}else q=!1
if(q){if(typeof p!=="number")return H.aQ(p)
h=this.a+t*p
q=a.a
i=$.C().a
if(h-i<q+a.d&&q-i<h+this.d){m=this.c+b.c*p
q=a.c
if(m-i<q+a.f&&q-i<m+this.f){l=s
k=p}}}}q=b.c
if(q!==0){if(q>0){j=$.bR()
i=c.a
g=j.a
if((i&g)===g){i=a.c-(this.c+this.f)
p=Math.abs(i)<$.C().a?0:i/q
s=j
o=!0}else o=!1}else{j=$.cG()
i=c.a
g=j.a
if((i&g)===g){i=a.c+a.f-this.c
p=Math.abs(i)<$.C().a?0:i/q
s=j
o=!0}else o=!1}if(o){if(typeof p!=="number")return p.ay()
q=p<k&&p>=0&&p<=1}else q=!1
if(q){if(typeof p!=="number")return H.aQ(p)
h=this.a+t*p
t=a.a
q=$.C().a
if(h-q<t+a.d&&t-q<h+this.d){n=this.b+r*p
t=a.b
if(n-q<t+a.e&&t-q<n+this.e){l=s
k=p}}}}if(J.y(l,u))return
return new V.at(k,l)},
ek:function(a,b){return this.bK(a,b,null)},
bd:function(a,b){return V.D(this.a+b.a,this.b+b.b,this.c+b.c,this.d,this.e,this.f)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}
V.a0.prototype={
ap:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return Math.sqrt(u*u+t*t)},
S:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.ji
if(u==null){u=new V.a0(0,0)
$.ji=u}return u}u=this.a
if(typeof u!=="number")return u.S()
t=this.b
if(typeof t!=="number")return t.S()
return new V.a0(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.aj()
if(typeof t!=="number")return H.aQ(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.aj()
if(typeof t!=="number")return H.aQ(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.v.prototype={
ap:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bL:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.v(u*t-s*r,s*q-p*t,p*r-u*q)},
aJ:function(a){return new V.v(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.v(this.a*b,this.b*b,this.c*b)},
S:function(a,b){var u
if(Math.abs(b-0)<$.C().a){u=$.jl
if(u==null){u=new V.v(0,0,0)
$.jl=u}return u}return new V.v(this.a/b,this.b/b,this.c/b)},
eA:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bc.prototype={
ap:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}
U.cO.prototype={
gw:function(){var u=this.b
if(u==null){u=D.bo()
this.b=u}return u},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cO))return!1
return J.y(this.a,b.a)},
h:function(a){return"Constant: "+this.a.l("          ")}}
U.ca.prototype={}
M.cS.prototype={
Z:function(a){var u
H.l(a,"$iK")
u=this.x
if(u!=null)u.am(a)},
cw:function(){return this.Z(null)},
d6:function(a,b){var u,t,s,r,q,p,o,n
u=E.W
H.n(b,"$ip",[u],"$ap")
for(t=b.length,s=this.gT(),r={func:1,ret:-1,args:[D.K]},q=[r],p=0;p<b.length;b.length===t||(0,H.ae)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c2()
n.sa9(null)
n.saZ(null)
n.c=null
n.d=0
o.z=n}H.f(s,r)
if(n.a==null)n.sa9(H.d([],q))
n=n.a;(n&&C.a).i(n,s)}}u=new D.eh(a,b,this,[u])
u.b=!0
this.Z(u)},
d8:function(a,b){var u,t,s
u=E.W
H.n(b,"$ip",[u],"$ap")
for(t=b.gF(b),s=this.gT();t.t();)t.gD().gw().I(0,s)
u=new D.ei(a,b,this,[u])
u.b=!0
this.Z(u)},
sc3:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gw().I(0,this.gT())
t=this.c
this.c=a
if(a!=null)a.gw().i(0,this.gT())
u=new D.am("technique",t,this.c,this,[O.bG])
u.b=!0
this.Z(u)}},
gw:function(){var u=this.x
if(u==null){u=D.bo()
this.x=u}return u},
aF:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.bZ(this.c)
u=this.b
u.toString
t=a1.a
C.h.ee(t,36160,null)
C.h.bM(t,2884)
C.h.bM(t,2929)
C.h.eu(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.aQ(s)
o=C.b.R(p*s)
p=q.b
if(typeof r!=="number")return H.aQ(r)
n=C.b.R(p*r)
p=C.b.R(q.c*s)
a1.c=p
q=C.b.R(q.d*r)
a1.d=q
C.h.f3(t,o,n,p,q)
C.h.ei(t,u.c)
u=u.a
C.h.eh(t,u.a,u.b,u.c,u.d)
C.h.eg(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.J(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.bY(i)
t=$.j3
if(t==null){t=V.j6()
q=$.jk
if(q==null){q=new V.v(0,1,0)
$.jk=q}p=$.jj
if(p==null){p=new V.v(0,0,-1)
$.jj=p}h=p.S(0,Math.sqrt(p.ad(p)))
q=q.bL(h)
g=q.S(0,Math.sqrt(q.ad(q)))
f=h.bL(g)
e=new V.v(t.a,t.b,t.c)
d=g.aJ(0).ad(e)
c=f.aJ(0).ad(e)
b=h.aJ(0).ad(e)
t=V.J(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.j3=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.v(0,a)}a1.db.bY(a)
for(u=this.d.a,u=new J.aR(u,u.length,0,[H.t(u,0)]);u.t();)u.d.c6(a1)
for(u=this.d.a,u=new J.aR(u,u.length,0,[H.t(u,0)]);u.t();)u.d.aF(a1)
this.a.toString
a1.cy.ba()
a1.db.ba()
this.b.toString
a1.bW()},
scv:function(a,b){this.d=H.n(b,"$ib2",[E.W],"$ab2")},
$im2:1}
A.dg.prototype={}
F.b4.prototype={}
F.br.prototype={}
F.cc.prototype={}
F.dh.prototype={
gw:function(){var u=this.e
if(u==null){u=D.bo()
this.e=u}return u},
h:function(a){var u=H.d([],[P.k])
if(this.a.c.length!==0){C.a.i(u,"Vertices:")
C.a.i(u,this.a.l("   "))}this.b.b
this.c.b
this.d.b
return C.a.q(u,"\n")},
$im3:1}
F.eN.prototype={
gp:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}return C.a.q(u,"\n")},
A:function(){return this.l("")},
scO:function(a){this.b=H.n(a,"$ia",[F.b4],"$aa")}}
F.eO.prototype={
gp:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.e(s,t)
C.a.i(u,s[t].l(a+(""+t+". ")))}return C.a.q(u,"\n")},
A:function(){return this.l("")},
scX:function(a){this.b=H.n(a,"$ia",[F.br],"$aa")}}
F.eP.prototype={
gp:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}return C.a.q(u,"\n")},
A:function(){return this.l("")},
sb_:function(a){this.b=H.n(a,"$ia",[F.cc],"$aa")}}
F.co.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
C.a.i(u,C.d.aE(J.b_(this.e),0))
t=this.f
if(t!=null)C.a.i(u,t.h(0))
else C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,V.A(this.ch,3,0))
C.a.i(u,"-")
s=C.a.q(u,", ")
return a+"{"+s+"}"},
A:function(){return this.l("")}}
F.fj.prototype={
e4:function(){},
i:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.cT("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.i(u,b)
t=t.e
if(t!=null)t.am(null)
return!0},
gp:function(a){return this.c.length},
h:function(a){return this.A()},
l:function(a){var u,t,s,r
this.e4()
u=H.d([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.ae)(t),++r)C.a.i(u,t[r].l(a))
return C.a.q(u,"\n")},
A:function(){return this.l("")},
se5:function(a){this.c=H.n(a,"$ia",[F.co],"$aa")}}
F.fk.prototype={
gp:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}for(t=this.d,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}return C.a.q(u,"\n")},
A:function(){return this.l("")},
scP:function(a){this.b=H.n(a,"$ia",[F.b4],"$aa")},
scQ:function(a){this.c=H.n(a,"$ia",[F.b4],"$aa")},
scR:function(a){this.d=H.n(a,"$ia",[F.b4],"$aa")}}
F.fl.prototype={
gp:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}return C.a.q(u,"\n")},
A:function(){return this.l("")},
scY:function(a){this.b=H.n(a,"$ia",[F.br],"$aa")},
scZ:function(a){this.c=H.n(a,"$ia",[F.br],"$aa")}}
F.fm.prototype={
gp:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var u,t,s
u=H.d([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.i(u,t[s].l(a))}return C.a.q(u,"\n")},
A:function(){return this.l("")},
sb_:function(a){this.b=H.n(a,"$ia",[F.cc],"$aa")}}
O.e0.prototype={
gw:function(){var u=this.c
if(u==null){u=D.bo()
this.c=u}return u},
eV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=a.cy.gaq()
t=a.db.gaq()
s=a.dx.gaq()
r=this.a
r.a+="Object:     "+s.l("            ")+"\n\n"
r.a+="View:       "+t.l("            ")+"\n\n"
r.a+="Projection: "+u.l("            ")+"\n\n"
C.a.sp(this.b,0)
q=b.c
if(q!=null){p=q.a
o=p.c.length
for(n=0;n<o;++n){q=p.c
if(n>=q.length)return H.e(q,n)
m=q[n].f
l=new V.b8(m.a,m.b,m.c,1)
k=s.aH(l)
j=t.aH(k)
i=u.aH(j)
h=new V.q(i.a,i.b,i.c).S(0,i.d)
r.a+=l.M(3,2)+" => "+k.M(3,2)+" => "+j.M(3,2)+" => "+i.M(3,2)+" => "+h.M(3,2)+"\n"
C.a.i(this.b,h)}}},
sdP:function(a){this.b=H.n(a,"$ia",[V.q],"$aa")}}
O.bG.prototype={}
T.f7.prototype={}
V.dR.prototype={
ag:function(a){return!0},
h:function(a){return"all"},
$iaV:1}
V.aV.prototype={}
V.d4.prototype={
ag:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.ae)(u),++s)if(u[s].ag(a))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.ae)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s},
sa0:function(a){this.a=H.n(a,"$ia",[V.aV],"$aa")},
$iaV:1}
V.aX.prototype={
ag:function(a){return!this.cm(a)},
h:function(a){return"!["+this.bl(0)+"]"}}
V.eM.prototype={
cq:function(a){var u,t
if(a.a.length<=0)throw H.h(P.cT("May not create a SetMatcher with zero characters."))
u=new H.aK([P.B,P.N])
for(t=new H.c8(a,a.gp(a),0,[H.bM(a,"T",0)]);t.t();)u.H(0,t.d,!0)
this.sdS(u)},
ag:function(a){return this.a.el(a)},
h:function(a){var u=this.a
return P.il(new H.d1(u,[H.t(u,0)]),0,null)},
sdS:function(a){this.a=H.n(a,"$iau",[P.B,P.N],"$aau")},
$iaV:1}
V.ch.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cm(this.a.C(0,b))
r.sa0(H.d([],[V.aV]))
r.c=!1
C.a.i(this.c,r)
return r},
ev:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.ae)(u),++s){r=u[s]
if(r.ag(a))return r}return},
h:function(a){return this.b},
se3:function(a){this.c=H.n(a,"$ia",[V.cm],"$aa")}}
V.dn.prototype={
h:function(a){var u,t
u=H.i6(this.b,"\n","\\n")
t=H.i6(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cl.prototype={
h:function(a){return this.b},
sdN:function(a){var u=P.k
this.c=H.n(a,"$iau",[u,u],"$aau")}}
V.f9.prototype={
C:function(a,b){var u=this.a.E(0,b)
if(u==null){u=new V.ch(this,b)
u.se3(H.d([],[V.cm]))
u.d=null
this.a.H(0,b,u)}return u},
ax:function(a){var u,t
u=this.b.E(0,a)
if(u==null){u=new V.cl(this,a)
t=P.k
u.sdN(new H.aK([t,t]))
this.b.H(0,a,u)}return u},
f2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.dn])
t=this.c
s=[P.B]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.i(u,p)
return u}n=C.d.a8(a,o)
m=t.ev(n)
if(m==null){if(p==null){C.a.i(r,n)
l=P.il(r,0,null)
throw H.h(P.cT("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.i(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.i(r,n)
t=m.b
if(t.d!=null){l=P.il(r,0,null)
k=t.d
j=k.c.E(0,l)
p=new V.dn(j==null?k.b:j,l,o)}++o}}},
sdX:function(a){this.a=H.n(a,"$iau",[P.k,V.ch],"$aau")},
se2:function(a){this.b=H.n(a,"$iau",[P.k,V.cl],"$aau")}}
V.cm.prototype={
h:function(a){return this.b.b+": "+this.bl(0)}}
X.cM.prototype={$ij0:1}
X.ec.prototype={
gw:function(){var u=this.x
if(u==null){u=D.bo()
this.x=u}return u}}
X.db.prototype={
gw:function(){var u=this.f
if(u==null){u=D.bo()
this.f=u}return u},
aa:function(a){var u
H.l(a,"$iK")
u=this.f
if(u!=null)u.am(a)},
d4:function(){return this.aa(null)},
sar:function(a){var u,t
if(!J.y(this.b,a)){u=this.b
if(u!=null)u.gw().I(0,this.gbB())
t=this.b
this.b=a
if(a!=null)a.gw().i(0,this.gbB())
u=new D.am("mover",t,this.b,this,[U.ca])
u.b=!0
this.aa(u)}},
$ij0:1,
$icM:1}
X.dk.prototype={}
V.eQ.prototype={
cr:function(a,b){var u,t,s,r,q,p
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).u(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.u(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.c.u(r,q)
if(a.length!==0)u.title=a
p=u.createElement("div")
this.a=p
C.c.u(q,p)
this.b=null
p=W.c
W.X(u,"scroll",H.f(new V.eS(s),{func:1,ret:-1,args:[p]}),!1,p)},
e7:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ia",[P.k],"$aa")
this.dT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f2(C.a.eB(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.ae)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.c.u(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.c.u(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.c.u(t,o)
break
case"Link":n=p.b
if(H.lH(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.c.u(t,l)}else{k=P.l0(C.P,n,C.v,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.c.u(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.c.u(t,o)
break}}C.c.u(this.a,t)},
dT:function(){var u,t,s,r
if(this.b!=null)return
u=new V.f9()
t=P.k
u.sdX(new H.aK([t,V.ch]))
u.se2(new H.aK([t,V.cl]))
u.c=null
u.c=u.C(0,"Start")
t=u.C(0,"Start").q(0,"Bold")
s=V.a4(new H.V("*"))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"Bold").q(0,"Bold")
s=new V.aX()
r=[V.aV]
s.sa0(H.d([],r))
C.a.i(t.a,s)
t=V.a4(new H.V("*"))
C.a.i(s.a,t)
t=u.C(0,"Bold").q(0,"BoldEnd")
s=V.a4(new H.V("*"))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"Start").q(0,"Italic")
s=V.a4(new H.V("_"))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"Italic").q(0,"Italic")
s=new V.aX()
s.sa0(H.d([],r))
C.a.i(t.a,s)
t=V.a4(new H.V("_"))
C.a.i(s.a,t)
t=u.C(0,"Italic").q(0,"ItalicEnd")
s=V.a4(new H.V("_"))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"Start").q(0,"Code")
s=V.a4(new H.V("`"))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"Code").q(0,"Code")
s=new V.aX()
s.sa0(H.d([],r))
C.a.i(t.a,s)
t=V.a4(new H.V("`"))
C.a.i(s.a,t)
t=u.C(0,"Code").q(0,"CodeEnd")
s=V.a4(new H.V("`"))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"Start").q(0,"LinkHead")
s=V.a4(new H.V("["))
C.a.i(t.a,s)
t.c=!0
t=u.C(0,"LinkHead").q(0,"LinkTail")
s=V.a4(new H.V("|"))
C.a.i(t.a,s)
s=u.C(0,"LinkHead").q(0,"LinkEnd")
t=V.a4(new H.V("]"))
C.a.i(s.a,t)
s.c=!0
s=u.C(0,"LinkHead").q(0,"LinkHead")
t=new V.aX()
t.sa0(H.d([],r))
C.a.i(s.a,t)
s=V.a4(new H.V("|]"))
C.a.i(t.a,s)
s=u.C(0,"LinkTail").q(0,"LinkEnd")
t=V.a4(new H.V("]"))
C.a.i(s.a,t)
s.c=!0
s=u.C(0,"LinkTail").q(0,"LinkTail")
t=new V.aX()
t.sa0(H.d([],r))
C.a.i(s.a,t)
s=V.a4(new H.V("|]"))
C.a.i(t.a,s)
C.a.i(u.C(0,"Start").q(0,"Other").a,new V.dR())
s=u.C(0,"Other").q(0,"Other")
t=new V.aX()
t.sa0(H.d([],r))
C.a.i(s.a,t)
s=V.a4(new H.V("*_`["))
C.a.i(t.a,s)
s=u.C(0,"BoldEnd")
s.d=s.a.ax("Bold")
s=u.C(0,"ItalicEnd")
s.d=s.a.ax("Italic")
s=u.C(0,"CodeEnd")
s.d=s.a.ax("Code")
s=u.C(0,"LinkEnd")
s.d=s.a.ax("Link")
s=u.C(0,"Other")
s.d=s.a.ax("Other")
this.b=u}}
V.eS.prototype={
$1:function(a){P.dm(C.i,new V.eR(this.a))},
$S:18}
V.eR.prototype={
$0:function(){var u,t,s
u=C.b.R(document.documentElement.scrollTop)
t=this.a.style
s=H.b(-0.01*u)+"px"
t.top=s},
$S:1}
B.ar.prototype={
gau:function(a){var u,t,s
u=this.a+1
t=this.d
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gau(s)
u=0}return new B.ar(u,this.b,this.c,t,this.e,s)},
gaf:function(a){var u,t,s
u=this.a-1
t=this.d
s=this.f
if(u<0){t-=16
s=s==null?null:s.gaf(s)
u=15}return new B.ar(u,this.b,this.c,t,this.e,s)},
gao:function(){var u,t,s
u=this.c+1
t=this.e
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gao()
u=0}return new B.ar(this.a,this.b,u,this.d,t,s)},
h:function(a){return H.b(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.ke(this.gY(this))+")"},
gY:function(a){var u=this.f
u=u==null?null:u.a5(this.a,this.b,this.c)
if(u==null)u=this.b<0?100:0
return u}}
B.dW.prototype={
bN:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.ai(u,s,t,this.cU(u,s,t))
a.bO()},
cU:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.e.c9(a+b+c,2)===0?113:111},
$ikr:1}
B.bl.prototype={
co:function(a){var u,t,s,r,q,p,o,n,m,l
this.d=new Uint8Array(12288)
this.saQ(H.d([],[E.W]))
for(u=this.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.ae)(u),++s){r=u[s]
q=E.iQ(null,!0,null,"",null,null)
p=r.y
o=H.t(p,0)
H.x(q,o)
n=[o]
if(p.bC(H.d([q],n))){m=p.a
l=m.length
C.a.i(m,q)
o=H.n(H.d([q],n),"$ip",[o],"$ap")
p=p.c
if(p!=null)p.$2(l,o)}p=this.e;(p&&C.a).i(p,q)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
h:function(a){return"chunk("+this.a+", "+this.b+")"},
bO:function(){this.x=!1
this.f=!0
this.sby(!1)
var u=this.gaf(this)
if(u!=null)u.f=!0
u=this.gau(this)
if(u!=null)u.f=!0
u=this.gao()
if(u!=null)u.f=!0
u=this.gec()
if(u!=null)u.f=!0},
a5:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
ai:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
u[t]=d
return!0},
gaf:function(a){return this.c.a2(this.a-16,this.b)},
gao:function(){return this.c.a2(this.a,this.b+16)},
gau:function(a){return this.c.a2(this.a+16,this.b)},
gec:function(){return this.c.a2(this.a,this.b-16)},
sby:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=!1},
saQ:function(a){this.e=H.n(a,"$ia",[E.W],"$aa")}}
B.dX.prototype={
ej:function(a,b,c){var u,t,s,r
this.b=b
this.c=a
this.d=c
this.e=$.aZ()
this.cH()
for(;this.dW(););u=this.b
t=this.d
s=t.a
r=t.b
t=t.c
this.b=new V.q(u.a+s,u.b+r,u.c+t)
return!0},
cH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.c
t=this.b
s=u.bd(0,new V.v(t.a,t.b,t.c))
t=s.bd(0,this.d)
u=s.a
r=t.a
q=Math.min(u,r)
p=Math.max(u+s.d,r+t.d)
r=s.b
u=t.b
o=Math.min(r,u)
n=Math.max(r+s.e,u+t.e)
u=s.c
r=t.c
m=Math.min(u,r)
l=Math.max(u+s.f,r+t.f)
t=this.a
k=t.a5(q,o,m)
j=t.a5(q+(p-q),o+(n-o),m+(l-m))
i=j.a+j.d
h=j.c+j.e
C.a.sp(this.f,0)
C.a.sp(this.r,0)
C.a.sp(this.x,0)
u=j.b
g=k
while(!0){if(!(g.a+g.d<=i))break
f=g
while(!0){if(!(f.b<=u))break
e=f
while(!0){if(!(e.c+e.e<=h))break
t=e.gY(e)
if(t>=100&&t<=117){d=$.aZ()
t=e.a
c=t-1
b=e.d
a=e.f
if(c<0){a0=b-16
a1=a==null?null:a.c.a2(a.a-16,a.b)
c=15}else{a1=a
a0=b}r=e.b
a2=e.c
a3=e.e
a4=new B.ar(c,r,a2,a0,a3,a1)
a5=a4.gY(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.bO()
d=new V.a3(d.a|a5.a)}a4=e.gau(e)
a5=a4.gY(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.bP()
d=new V.a3(d.a|a5.a)}a4=new B.ar(t,r-1,a2,b,a3,a)
a5=a4.gY(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.cF()
d=new V.a3(d.a|a5.a)}a4=new B.ar(t,r+1,a2,b,a3,a)
a5=a4.gY(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.bQ()
d=new V.a3(d.a|a5.a)}a6=a2-1
if(a6<0){a7=a3-16
a=a==null?null:a.c.a2(a.a,a.b-16)
a6=15}else a7=a3
a4=new B.ar(t,r,a6,b,a7,a)
a5=a4.gY(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.bR()
d=new V.a3(d.a|a5.a)}a4=e.gao()
a5=a4.gY(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.cG()
d=new V.a3(d.a|a5.a)}a5=$.jN()
if(!J.y(d,a5)){C.a.i(this.f,V.D(t+b,r,a2+a3,1,1,1))
t=this.r
d.toString
r=$.i8().a
a2=d.a
C.a.i(t,new V.a3(a5.a&r&~a2))
C.a.i(this.x,!1)}}e=e.gao()}f=new B.ar(f.a,f.b+1,f.c,f.d,f.e,f.f)}g=g.gau(g)}},
dW:function(){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.d.eA())return!1
u=this.c
t=this.b
s=u.bd(0,new V.v(t.a,t.b,t.c))
r=$.aZ()
for(q=0,p=-1,o=0;u=this.f,o<u.length;++o){t=this.x
if(o>=t.length)return H.e(t,o)
if(!t[o]){n=u[o]
u=this.r
if(o>=u.length)return H.e(u,o)
m=u[o]
l=s.bK(n,this.d,m)
if(l!=null)if(J.y(r,$.aZ())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.P(r)
if(u.m(r,$.aZ()))return!1
C.a.H(this.x,p,!0)
k=this.d.v(0,q)
j=this.d.v(0,1-q)
if(u.m(r,$.bP())||u.m(r,$.bO())){u=this.b
this.b=new V.q(u.a+k.a,u.b+k.b,u.c+k.c)
this.d=new V.v(0,j.b,j.c)}else if(u.m(r,$.bQ())||u.m(r,$.cF())){u=this.b
t=u.b
this.b=new V.q(u.a+k.a,t+k.b,u.c+k.c)
this.d=new V.v(j.a,0,j.c)}else if(u.m(r,$.cG())||u.m(r,$.bR())){u=this.b
t=u.c
this.b=new V.q(u.a+k.a,u.b+k.b,t+k.c)
this.d=new V.v(j.a,j.b,0)}this.e=new V.a3(this.e.a|r.a)
return!0},
h:function(a){return"Collider("+H.b(this.b)+", "+H.b(this.e)+")"},
scE:function(a){this.f=H.n(a,"$ia",[V.b9],"$aa")},
scD:function(a){this.r=H.n(a,"$ia",[V.a3],"$aa")},
scW:function(a){this.x=H.n(a,"$ia",[P.N],"$aa")}}
B.e9.prototype={
bN:function(a){var u,t,s,r,q
u=Math.max(this.a,this.b)
for(t=0;t<16;++t)for(s=0;s<16;++s){for(r=0;q=this.a,r<q;++r)a.ai(t,r,s,103)
for(r=q;r<this.b;++r)a.ai(t,r,s,101)
a.ai(t,u,s,102)}a.bO()},
$ikr:1}
B.fo.prototype={
cs:function(a,b){var u,t,s,r
u=[B.bl]
this.scV(H.d([],u))
this.scG(H.d([],u))
this.saQ(H.d([],[E.W]))
this.r=null
for(t=0;t<140;++t){u=this.c;(u&&C.a).i(u,B.kf(this))}for(u=this.b,s=-32;s<32;s+=16)for(r=-32;r<32;r+=16)u.bN(this.bX(s,r))},
a2:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
a5:function(a,b,c){var u,t,s,r,q,p,o,n
u=C.b.an(a)
t=C.b.an(b)
s=C.b.an(c)
r=u<0?u-16+1:u
q=s<0?s-16+1:s
r=C.e.U(r,16)*16
q=C.e.U(q,16)*16
p=this.a2(r,q)
o=u-r
n=s-q
if(o<0)o+=16
return new B.ar(o,t,n<0?n+16:n,r,q,p)},
bX:function(a,b){var u,t
u=this.c
if(0>=u.length)return H.e(u,-1)
t=u.pop()
t.a=a
t.b=b
t.f=!0
t.x=!0
t.sby(!1)
C.a.i(this.d,t)
return t},
scV:function(a){this.c=H.n(a,"$ia",[B.bl],"$aa")},
scG:function(a){this.d=H.n(a,"$ia",[B.bl],"$aa")},
saQ:function(a){this.e=H.n(a,"$ia",[E.W],"$aa")}}
M.h9.prototype={
$1:function(a){var u,t,s,r,q
u=new Uint8Array(1000)
for(t=u.length,s=0;s<100;++s){for(r=0;r<1000;++r){if(r>=t)return H.e(u,r)
u[r]=0}for(q=0;q<100;++q)for(r=0;r<1000;++r){if(r>=t)return H.e(u,r)
u[r]=u[r]+1}}a.j(H.b(u),"info_log")},
$S:0}
M.ha.prototype={
$1:function(a){var u,t,s,r
u=P.kz(1000,0,!1,P.B)
for(t=0;t<100;++t){for(s=0;s<1000;++s)C.a.H(u,s,0)
for(r=0;r<100;++r)for(s=0;s<1000;++s){if(s>=u.length)return H.e(u,s)
C.a.H(u,s,u[s]+1)}}a.j(H.b(u),"info_log")},
$S:0}
M.hb.prototype={
$1:function(a){var u,t
u=new B.dW()
u.a=!0
u.b=10
t=B.jm(null,u)
M.j(a,t,0,0,0,0,0,0,0,0)
M.j(a,t,0.001,0,0,0,0,0,0,0)
M.j(a,t,0,0.001,0,0,0,0,0,0)
M.j(a,t,0,0,0.001,0,0,0,0,0)
M.j(a,t,0.999,0,0,0,0,0,0,0)
M.j(a,t,0,0.999,0,0,0,0,0,0)
M.j(a,t,0,0,0.999,0,0,0,0,0)
M.j(a,t,0.999,0.999,0.999,0,0,0,0,0)
M.j(a,t,-0.001,0,0,-16,0,15,0,0)
M.j(a,t,-0.999,0,0,-16,0,15,0,0)
M.j(a,t,-0.001,0,0,-16,0,15,0,0)
M.j(a,t,-0.001,0,0.001,-16,0,15,0,0)
M.j(a,t,-0.999,0,0.999,-16,0,15,0,0)
M.j(a,t,0,0,-0.001,0,-16,0,0,15)
M.j(a,t,0.001,0,-0.001,0,-16,0,0,15)
M.j(a,t,0,0,-0.999,0,-16,0,0,15)
M.j(a,t,0.999,0,-0.999,0,-16,0,0,15)
M.j(a,t,-0.001,0,-0.001,-16,-16,15,0,15)
M.j(a,t,-0.999,0,-0.999,-16,-16,15,0,15)
M.j(a,t,-0.999,0,-0.001,-16,-16,15,0,15)
M.j(a,t,-0.001,0,-0.999,-16,-16,15,0,15)
M.j(a,t,1,0,0,0,0,1,0,0)
M.j(a,t,0,1,0,0,0,0,1,0)
M.j(a,t,0,0,1,0,0,0,0,1)
M.j(a,t,1.001,0,0,0,0,1,0,0)
M.j(a,t,0,0,1.001,0,0,0,0,1)
M.j(a,t,-1,0,0,-16,0,15,0,0)
M.j(a,t,0,-1,0,0,0,0,-1,0)
M.j(a,t,0,0,-1,0,-16,0,0,15)
M.j(a,t,-1.001,0,0,-16,0,14,0,0)
M.j(a,t,0,0,-1.001,0,-16,0,0,14)
M.j(a,t,0,0,-14.157,0,-16,0,0,1)
M.j(a,t,0,0,-15.157,0,-16,0,0,0)
M.j(a,t,0,0,-16.157,0,-32,0,0,15)
M.j(a,t,0,0,18,0,16,0,0,2)
M.j(a,t,0,0,17,0,16,0,0,1)
M.j(a,t,0,0,16,0,16,0,0,0)
M.j(a,t,0,0,15,0,0,0,0,15)
M.j(a,t,0,0,14,0,0,0,0,14)
M.j(a,t,0,0,13,0,0,0,0,13)
M.j(a,t,0,0,12,0,0,0,0,12)
M.j(a,t,0,0,11,0,0,0,0,11)
M.j(a,t,0,0,10,0,0,0,0,10)
M.j(a,t,0,0,9,0,0,0,0,9)
M.j(a,t,0,0,8,0,0,0,0,8)
M.j(a,t,0,0,7,0,0,0,0,7)
M.j(a,t,0,0,6,0,0,0,0,6)
M.j(a,t,0,0,5,0,0,0,0,5)
M.j(a,t,0,0,4,0,0,0,0,4)
M.j(a,t,0,0,3,0,0,0,0,3)
M.j(a,t,0,0,2,0,0,0,0,2)
M.j(a,t,0,0,1,0,0,0,0,1)
M.j(a,t,0,0,0,0,0,0,0,0)
M.j(a,t,0,0,-1,0,-16,0,0,15)
M.j(a,t,0,0,-2,0,-16,0,0,14)
M.j(a,t,0,0,-3,0,-16,0,0,13)
M.j(a,t,0,0,-4,0,-16,0,0,12)
M.j(a,t,0,0,-5,0,-16,0,0,11)
M.j(a,t,0,0,-6,0,-16,0,0,10)
M.j(a,t,0,0,-7,0,-16,0,0,9)
M.j(a,t,0,0,-8,0,-16,0,0,8)
M.j(a,t,0,0,-9,0,-16,0,0,7)
M.j(a,t,0,0,-10,0,-16,0,0,6)
M.j(a,t,0,0,-11,0,-16,0,0,5)
M.j(a,t,0,0,-12,0,-16,0,0,4)
M.j(a,t,0,0,-13,0,-16,0,0,3)
M.j(a,t,0,0,-14,0,-16,0,0,2)
M.j(a,t,0,0,-15,0,-16,0,0,1)
M.j(a,t,0,0,-16,0,-16,0,0,0)
M.j(a,t,0,0,-17,0,-32,0,0,15)
M.j(a,t,0,0,-18,0,-32,0,0,14)
M.j(a,t,0,0,-19,0,-32,0,0,13)},
$S:0}
M.hc.prototype={
$1:function(a){var u,t,s,r
u=new B.e9()
u.a=8
u.b=9
t=B.jm(null,u)
t.bX(0,0)
u=$.bQ()
M.R(a,t,0.5,12,0.5,0,-5,0,0.5,11.5,0.5,u)
M.R(a,t,0.5,14,0.5,0,-5,0,0.5,11.5,0.5,u)
M.R(a,t,0.5,14,0.5,0,-1,0,0.5,13,0.5,$.aZ())
M.R(a,t,0.5,11.5,0.5,0,-5,0,0.5,11.5,0.5,u)
M.R(a,t,0.5,12,0.5,1,-5,1,1.5,11.5,1.5,u)
M.R(a,t,0.5,11.5,0.5,1,-5,1,1.5,11.5,1.5,u)
M.R(a,t,0.5,12,0.5,1,-5,-1,1.5,11.5,-0.5,u)
M.R(a,t,0.5,11.5,0.5,1,-5,-1,1.5,11.5,-0.5,u)
M.R(a,t,0.5,12,0.5,-1,-5,1,-0.5,11.5,1.5,u)
M.R(a,t,0.5,11.5,0.5,-1,-5,1,-0.5,11.5,1.5,u)
M.R(a,t,0.5,12,0.5,-1,-5,-1,-0.5,11.5,-0.5,u)
M.R(a,t,0.5,11.5,0.5,-1,-5,-1,-0.5,11.5,-0.5,u)
s=t.a5(0,10,0)
r=s.f
if(r!=null)r.ai(s.a,s.b,s.c,102)
M.R(a,t,0.5,14,0.5,0,-5,0,0.5,12.5,0.5,u)
M.R(a,t,0.5,14,1.5,0,-5,0,0.5,11.5,1.5,u)
M.R(a,t,0.5,14,-0.5,0,-5,0,0.5,11.5,-0.5,u)
M.R(a,t,1.5,14,0.5,0,-5,0,1.5,11.5,0.5,u)
M.R(a,t,-0.5,14,0.5,0,-5,0,-0.5,11.5,0.5,u)
s=$.bP()
M.R(a,t,2.5,11.5,0.5,-5,0,0,1.25,11.5,0.5,s)
M.R(a,t,2.5,11.5,0.5,-5,-5,0,1.25,11.5,0.5,new V.a3(s.a|u.a))
M.R(a,t,-1.5,11.5,0.5,5,0,0,-0.25,11.5,0.5,$.bO())
M.R(a,t,0.5,11.5,2.5,0,0,-5,0.5,11.5,1.25,$.cG())
M.R(a,t,0.5,11.5,-1.5,0,0,5,0.5,11.5,-0.25,$.bR())},
$S:0}
M.hd.prototype={
$1:function(a){var u=new V.Q(2,3,4,5)
M.Y(a,u,"[2.000, 3.000,"," 4.000, 5.000]")
M.F(a,u,0,0,0,0)
M.F(a,u,1,0,2,4)
M.F(a,u,0,1,3,5)
M.F(a,u,1,1,5,9)},
$S:0}
M.he.prototype={
$1:function(a){var u=new V.Q(2,3,4,5)
M.Y(a,u,"[2.000, 3.000,"," 4.000, 5.000]")
M.h6(a,u,0,0,0,0)
M.h6(a,u,1,0,2,4)
M.h6(a,u,0,1,3,5)
M.h6(a,u,1,1,5,9)},
$S:0}
M.hf.prototype={
$1:function(a){var u=V.bv()
M.Y(a,u,"[1.000, 0.000,"," 0.000, 1.000]")
M.F(a,u,0,0,0,0)
M.F(a,u,1,0,1,0)
M.F(a,u,-1,0,-1,0)
M.F(a,u,1,1,1,1)
M.F(a,u,-1,-1,-1,-1)
M.F(a,u,0,1,0,1)
M.F(a,u,0,-1,0,-1)
M.F(a,u,2.3,-4.2,2.3,-4.2)
M.F(a,u,-1.5,7.3,-1.5,7.3)},
$S:0}
M.hg.prototype={
$1:function(a){var u=new V.Q(2,0,0,3)
M.Y(a,u,"[2.000, 0.000,"," 0.000, 3.000]")
M.F(a,u,0,0,0,0)
M.F(a,u,1,0,2,0)
M.F(a,u,-1,0,-2,0)
M.F(a,u,1,1,2,3)
M.F(a,u,-1,-1,-2,-3)
M.F(a,u,0,1,0,3)
M.F(a,u,0,-1,0,-3)
M.F(a,u,2.3,-4.2,4.6,-12.6)
M.F(a,u,-1.5,7.3,-3,21.9)},
$S:0}
M.hh.prototype={
$1:function(a){var u=V.bu(0.7853981633974483)
M.Y(a,u,"[0.707, -0.707,"," 0.707,  0.707]")
M.F(a,u,0,0,0,0)
M.F(a,u,1,0,0.70710678118,0.70710678118)
M.F(a,u,0.70710678118,0.70710678118,0,1)
M.F(a,u,0,1,-0.70710678118,0.70710678118)
M.F(a,u,-0.70710678118,0.70710678118,-1,0)
M.F(a,u,-1,0,-0.70710678118,-0.70710678118)
M.F(a,u,-0.70710678118,-0.70710678118,0,-1)
M.F(a,u,0,-1,0.70710678118,-0.70710678118)
M.F(a,u,0.70710678118,-0.70710678118,1,0)},
$S:0}
M.hi.prototype={
$1:function(a){M.Y(a,V.bu(-0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.Y(a,V.bu(1.5707963267948966),"[0.000, -1.000,"," 1.000,  0.000]")
M.Y(a,V.bu(-3.141592653589793),"[-1.000,  0.000,","  0.000, -1.000]")
M.Y(a,V.bu(3.141592653589793),"[-1.000,  0.000,","  0.000, -1.000]")
M.Y(a,V.bu(1.1780972450961724),"[0.383, -0.924,"," 0.924,  0.383]")},
$S:0}
M.hj.prototype={
$1:function(a){var u,t
u=new V.Q(1,2,3,4)
M.Y(a,u,"[1.000, 2.000,"," 3.000, 4.000]")
M.Y(a,V.kA(u.av(0),!1),"[1.000, 2.000,"," 3.000, 4.000]")
M.Y(a,new V.Q(1,3,2,4),"[1.000, 3.000,"," 2.000, 4.000]")
M.I(a,1,1,"m11")
M.I(a,2,2,"m21")
M.I(a,3,3,"m12")
M.I(a,4,4,"m22")
M.Y(a,new V.Q(1,2,4,5),"[1.000, 2.000,"," 4.000, 5.000]")
t=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.Y(a,new V.Q(t.a,t.b,t.e,t.f),"[1.000, 2.000,"," 5.000, 6.000]")},
$S:0}
M.hk.prototype={
$1:function(a){M.is(a,V.bv(),"[1.000, 0.000,"," 0.000, 1.000]")
M.is(a,new V.Q(2,0,0,3),"[0.500, 0.000,"," 0.000, 0.333]")
M.is(a,V.bu(0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.Y(a,new V.Q(0,0,0,0).J(),"[1.000, 0.000,"," 0.000, 1.000]")},
$S:0}
M.hl.prototype={
$1:function(a){M.Y(a,new V.Q(1,2,3,4).v(0,new V.Q(5,6,7,8)),"[19.000, 22.000,"," 43.000, 50.000]")
M.Y(a,new V.Q(5,6,7,8).v(0,new V.Q(1,2,3,4)),"[23.000, 34.000,"," 31.000, 46.000]")},
$S:0}
M.hm.prototype={
$1:function(a){var u=new V.L(1,2,3,4,5,6,7,8,9)
M.z(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.r(a,u,0,0,0,0,0,0)
M.r(a,u,1,0,0,1,4,7)
M.r(a,u,0,1,0,2,5,8)
M.r(a,u,0,0,1,3,6,9)
M.r(a,u,1,1,0,3,9,15)
M.r(a,u,1,0,1,4,10,16)
M.r(a,u,0,1,1,5,11,17)
M.r(a,u,1,1,1,6,15,24)},
$S:0}
M.hn.prototype={
$1:function(a){var u=new V.L(1,2,3,4,5,6,7,8,9)
M.z(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.bg(a,u,0,0,0,0,0,0)
M.bg(a,u,1,0,0,1,4,7)
M.bg(a,u,0,1,0,2,5,8)
M.bg(a,u,0,0,1,3,6,9)
M.bg(a,u,1,1,0,3,9,15)
M.bg(a,u,1,0,1,4,10,16)
M.bg(a,u,0,1,1,5,11,17)
M.bg(a,u,1,1,1,6,15,24)},
$S:0}
M.ho.prototype={
$1:function(a){var u=V.bz()
M.z(a,u,"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.r(a,u,0,0,0,0,0,0)
M.r(a,u,1,0,0,1,0,0)
M.r(a,u,0,1,0,0,1,0)
M.r(a,u,0,0,1,0,0,1)
M.r(a,u,1,0,1,1,0,1)
M.r(a,u,-1,0,1,-1,0,1)
M.r(a,u,1,1,1,1,1,1)
M.r(a,u,-1,-1,-1,-1,-1,-1)
M.r(a,u,0,1,1,0,1,1)
M.r(a,u,0,-1,-1,0,-1,-1)
M.r(a,u,2.3,-4.2,-0.2,2.3,-4.2,-0.2)
M.r(a,u,-1.5,7.3,4.8,-1.5,7.3,4.8)},
$S:0}
M.ht.prototype={
$1:function(a){var u=new V.L(2,0,0,0,3,0,0,0,4)
M.z(a,u,"[2.000, 0.000, 0.000,"," 0.000, 3.000, 0.000,"," 0.000, 0.000, 4.000]")
M.r(a,u,0,0,0,0,0,0)
M.r(a,u,1,1,1,2,3,4)
M.r(a,u,-1,-1,-1,-2,-3,-4)
M.r(a,u,2.3,-4.2,-0.2,4.6,-12.6,-0.8)
M.r(a,u,-1.5,7.3,4.8,-3,21.9,19.2)},
$S:0}
M.hu.prototype={
$1:function(a){var u=V.bw(0.7853981633974483)
M.z(a,u,"[1.000, 0.000,  0.000,"," 0.000, 0.707, -0.707,"," 0.000, 0.707,  0.707]")
M.r(a,u,1,0,0,1,0,0)
M.r(a,u,2,1,0,2,0.70710678118,0.70710678118)
M.r(a,u,3,0.70710678118,0.70710678118,3,0,1)
M.r(a,u,4,0,1,4,-0.70710678118,0.70710678118)
M.r(a,u,5,-0.70710678118,0.70710678118,5,-1,0)
M.r(a,u,6,-1,0,6,-0.70710678118,-0.70710678118)
M.r(a,u,7,-0.70710678118,-0.70710678118,7,0,-1)
M.r(a,u,8,0,-1,8,0.70710678118,-0.70710678118)
M.r(a,u,9,0.70710678118,-0.70710678118,9,1,0)},
$S:0}
M.hv.prototype={
$1:function(a){M.z(a,V.bw(-0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.z(a,V.bw(1.5707963267948966),"[1.000, 0.000,  0.000,"," 0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000]")
M.z(a,V.bw(-3.141592653589793),"[1.000,  0.000,  0.000,"," 0.000, -1.000,  0.000,"," 0.000,  0.000, -1.000]")
M.z(a,V.bw(3.141592653589793),"[1.000,  0.000,  0.000,"," 0.000, -1.000,  0.000,"," 0.000,  0.000, -1.000]")
M.z(a,V.bw(1.1780972450961724),"[1.000, 0.000,  0.000,"," 0.000, 0.383, -0.924,"," 0.000, 0.924,  0.383]")},
$S:0}
M.hw.prototype={
$1:function(a){var u=V.bx(0.7853981633974483)
M.z(a,u,"[0.707, 0.000, -0.707,"," 0.000, 1.000,  0.000,"," 0.707, 0.000,  0.707]")
M.r(a,u,0,1,0,0,1,0)
M.r(a,u,1,2,0,0.70710678118,2,0.70710678118)
M.r(a,u,0.70710678118,3,0.70710678118,0,3,1)
M.r(a,u,0,4,1,-0.70710678118,4,0.70710678118)
M.r(a,u,-0.70710678118,5,0.70710678118,-1,5,0)
M.r(a,u,-1,6,0,-0.70710678118,6,-0.70710678118)
M.r(a,u,-0.70710678118,7,-0.70710678118,0,7,-1)
M.r(a,u,0,8,-1,0.70710678118,8,-0.70710678118)
M.r(a,u,0.70710678118,9,-0.70710678118,1,9,0)},
$S:0}
M.hx.prototype={
$1:function(a){M.z(a,V.bx(-0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.z(a,V.bx(1.5707963267948966),"[0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000,"," 1.000, 0.000,  0.000]")
M.z(a,V.bx(-3.141592653589793),"[-1.000, 0.000,  0.000,","  0.000, 1.000,  0.000,","  0.000, 0.000, -1.000]")
M.z(a,V.bx(3.141592653589793),"[-1.000, 0.000,  0.000,","  0.000, 1.000,  0.000,","  0.000, 0.000, -1.000]")
M.z(a,V.bx(1.1780972450961724),"[0.383, 0.000, -0.924,"," 0.000, 1.000,  0.000,"," 0.924, 0.000,  0.383]")},
$S:0}
M.hy.prototype={
$1:function(a){var u=V.by(0.7853981633974483)
M.z(a,u,"[0.707, -0.707, 0.000,"," 0.707,  0.707, 0.000,"," 0.000,  0.000, 1.000]")
M.r(a,u,0,0,1,0,0,1)
M.r(a,u,1,0,2,0.70710678118,0.70710678118,2)
M.r(a,u,0.70710678118,0.70710678118,3,0,1,3)
M.r(a,u,0,1,4,-0.70710678118,0.70710678118,4)
M.r(a,u,-0.70710678118,0.70710678118,5,-1,0,5)
M.r(a,u,-1,0,6,-0.70710678118,-0.70710678118,6)
M.r(a,u,-0.70710678118,-0.70710678118,7,0,-1,7)
M.r(a,u,0,-1,8,0.70710678118,-0.70710678118,8)
M.r(a,u,0.70710678118,-0.70710678118,9,1,0,9)},
$S:0}
M.hz.prototype={
$1:function(a){M.z(a,V.by(-0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.z(a,V.by(1.5707963267948966),"[0.000, -1.000, 0.000,"," 1.000,  0.000, 0.000,"," 0.000,  0.000, 1.000]")
M.z(a,V.by(-3.141592653589793),"[-1.000,  0.000, 0.000,","  0.000, -1.000, 0.000,","  0.000,  0.000, 1.000]")
M.z(a,V.by(3.141592653589793),"[-1.000,  0.000, 0.000,","  0.000, -1.000, 0.000,","  0.000,  0.000, 1.000]")
M.z(a,V.by(1.1780972450961724),"[0.383, -0.924, 0.000,"," 0.924,  0.383, 0.000,"," 0.000,  0.000, 1.000]")},
$S:0}
M.hA.prototype={
$1:function(a){var u,t
u=new V.L(1,2,3,4,5,6,7,8,9)
M.z(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.z(a,V.kB(u.av(0),!1),"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.z(a,new V.L(1,4,7,2,5,8,3,6,9),"[1.000, 4.000, 7.000,"," 2.000, 5.000, 8.000,"," 3.000, 6.000, 9.000]")
M.I(a,1,1,"m11")
M.I(a,2,2,"m21")
M.I(a,3,3,"m31")
M.I(a,4,4,"m12")
M.I(a,5,5,"m22")
M.I(a,6,6,"m32")
M.I(a,7,7,"m13")
M.I(a,8,8,"m23")
M.I(a,9,9,"m33")
M.z(a,new V.L(1,0,1.2,0,1,3.4,0,0,1),"[1.000, 0.000, 1.200,"," 0.000, 1.000, 3.400,"," 0.000, 0.000, 1.000]")
M.z(a,new V.L(1,2,0,3,4,0,0,0,1),"[1.000, 2.000, 0.000,"," 3.000, 4.000, 0.000,"," 0.000, 0.000, 1.000]")
t=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.z(a,new V.L(t.a,t.b,t.c,t.e,t.f,t.r,t.y,t.z,t.Q),"[1.000,  2.000,  3.000,"," 5.000,  6.000,  7.000,"," 9.000, 10.000, 11.000]")},
$S:0}
M.hp.prototype={
$1:function(a){M.dK(a,V.bz(),"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.dK(a,new V.L(2,0,0,0,3,0,0,0,4),"[0.500, 0.000, 0.000,"," 0.000, 0.333, 0.000,"," 0.000, 0.000, 0.250]")
M.dK(a,V.bw(0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.dK(a,V.bx(0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.dK(a,V.by(0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.z(a,new V.L(0,0,0,0,0,0,0,0,0).J(),"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")},
$S:0}
M.hq.prototype={
$1:function(a){M.z(a,new V.L(1,2,3,4,5,6,7,8,9).v(0,new V.L(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9)),"[ 3.000,  3.600,  4.200,","  6.600,  8.100,  9.600,"," 10.200, 12.600, 15.000]")
M.z(a,new V.L(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9).v(0,new V.L(1,2,3,4,5,6,7,8,9)),"[ 3.000,  3.600,  4.200,","  6.600,  8.100,  9.600,"," 10.200, 12.600, 15.000]")},
$S:0}
M.hr.prototype={
$1:function(a){var u=new V.L(1,2,3,4,5,6,7,8,9)
M.z(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.h4(a,u,0,0,3,6)
M.h4(a,u,1,0,4,10)
M.h4(a,u,0,1,5,11)
M.h4(a,u,1,1,6,15)},
$S:0}
M.hs.prototype={
$1:function(a){var u=new V.L(1,2,3,4,5,6,7,8,9)
M.z(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.h7(a,u,0,0,0,0)
M.h7(a,u,1,0,1,4)
M.h7(a,u,0,1,2,5)
M.h7(a,u,1,1,3,9)},
$S:0}
M.hB.prototype={
$1:function(a){var u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.o(a,u,0,0,0,0,0,0,0,0)
M.o(a,u,1,0,0,0,1,5,9,13)
M.o(a,u,0,1,0,0,2,6,10,14)
M.o(a,u,1,1,0,0,3,11,19,27)
M.o(a,u,0,0,1,0,3,7,11,15)
M.o(a,u,1,0,1,0,4,12,20,28)
M.o(a,u,0,1,1,0,5,13,21,29)
M.o(a,u,1,1,1,0,6,18,30,42)
M.o(a,u,0,0,0,1,4,8,12,16)
M.o(a,u,1,0,0,1,5,13,21,29)
M.o(a,u,0,1,0,1,6,14,22,30)
M.o(a,u,1,1,0,1,7,19,31,43)
M.o(a,u,0,0,1,1,7,15,23,31)
M.o(a,u,1,0,1,1,8,20,32,44)
M.o(a,u,0,1,1,1,9,21,33,45)
M.o(a,u,1,1,1,1,10,26,42,58)},
$S:0}
M.hC.prototype={
$1:function(a){var u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.a5(a,u,0,0,0,0,0,0,0,0)
M.a5(a,u,1,0,0,0,1,5,9,13)
M.a5(a,u,0,1,0,0,2,6,10,14)
M.a5(a,u,1,1,0,0,3,11,19,27)
M.a5(a,u,0,0,1,0,3,7,11,15)
M.a5(a,u,1,0,1,0,4,12,20,28)
M.a5(a,u,0,1,1,0,5,13,21,29)
M.a5(a,u,1,1,1,0,6,18,30,42)
M.a5(a,u,0,0,0,1,4,8,12,16)
M.a5(a,u,1,0,0,1,5,13,21,29)
M.a5(a,u,0,1,0,1,6,14,22,30)
M.a5(a,u,1,1,0,1,7,19,31,43)
M.a5(a,u,0,0,1,1,7,15,23,31)
M.a5(a,u,1,0,1,1,8,20,32,44)
M.a5(a,u,0,1,1,1,9,21,33,45)
M.a5(a,u,1,1,1,1,10,26,42,58)},
$S:0}
M.hD.prototype={
$1:function(a){var u=V.aD()
M.w(a,u,"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.o(a,u,0,0,0,0,0,0,0,0)
M.o(a,u,1,0,0,0,1,0,0,0)
M.o(a,u,0,1,0,0,0,1,0,0)
M.o(a,u,0,0,1,0,0,0,1,0)
M.o(a,u,1,0,1,0,1,0,1,0)
M.o(a,u,0,1,0,1,0,1,0,1)
M.o(a,u,1,1,1,1,1,1,1,1)
M.o(a,u,-1,0,1,0,-1,0,1,0)
M.o(a,u,1,1,1,0,1,1,1,0)
M.o(a,u,-1,-1,-1,-1,-1,-1,-1,-1)
M.o(a,u,2.3,-4.2,-0.2,3.3,2.3,-4.2,-0.2,3.3)
M.o(a,u,-1.5,7.3,4.8,-9.1,-1.5,7.3,4.8,-9.1)},
$S:0}
M.hK.prototype={
$1:function(a){var u=V.iY(2,3,4,5)
M.w(a,u,"[2.000, 0.000, 0.000, 0.000,"," 0.000, 3.000, 0.000, 0.000,"," 0.000, 0.000, 4.000, 0.000,"," 0.000, 0.000, 0.000, 5.000]")
M.o(a,u,0,0,0,0,0,0,0,0)
M.o(a,u,1,1,1,1,2,3,4,5)
M.o(a,u,-1,-1,-1,-1,-2,-3,-4,-5)
M.o(a,u,2.3,-4.2,-0.2,3.3,4.6,-12.6,-0.8,16.5)
M.o(a,u,-1.5,7.3,4.8,-9.1,-3,21.9,19.2,-45.5)},
$S:0}
M.hL.prototype={
$1:function(a){var u=V.bA(0.7853981633974483)
M.w(a,u,"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.707, -0.707, 0.000,"," 0.000, 0.707,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.o(a,u,1,0,0,9,1,0,0,9)
M.o(a,u,2,1,0,8,2,0.70710678118,0.70710678118,8)
M.o(a,u,3,0.70710678118,0.70710678118,7,3,0,1,7)
M.o(a,u,4,0,1,6,4,-0.70710678118,0.70710678118,6)
M.o(a,u,5,-0.70710678118,0.70710678118,5,5,-1,0,5)
M.o(a,u,6,-1,0,4,6,-0.70710678118,-0.70710678118,4)
M.o(a,u,7,-0.70710678118,-0.70710678118,3,7,0,-1,3)
M.o(a,u,8,0,-1,2,8,0.70710678118,-0.70710678118,2)
M.o(a,u,9,0.70710678118,-0.70710678118,1,9,1,0,1)},
$S:0}
M.hM.prototype={
$1:function(a){M.w(a,V.bA(-0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.w(a,V.bA(1.5707963267948966),"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.w(a,V.bA(-3.141592653589793),"[1.000,  0.000,  0.000, 0.000,"," 0.000, -1.000,  0.000, 0.000,"," 0.000,  0.000, -1.000, 0.000,"," 0.000,  0.000,  0.000, 1.000]")
M.w(a,V.bA(3.141592653589793),"[1.000,  0.000,  0.000, 0.000,"," 0.000, -1.000,  0.000, 0.000,"," 0.000,  0.000, -1.000, 0.000,"," 0.000,  0.000,  0.000, 1.000]")
M.w(a,V.bA(1.1780972450961724),"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.383, -0.924, 0.000,"," 0.000, 0.924,  0.383, 0.000,"," 0.000, 0.000,  0.000, 1.000]")},
$S:0}
M.hN.prototype={
$1:function(a){var u=V.bB(0.7853981633974483)
M.w(a,u,"[0.707, 0.000, -0.707, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.707, 0.000,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.o(a,u,0,1,0,9,0,1,0,9)
M.o(a,u,1,2,0,8,0.70710678118,2,0.70710678118,8)
M.o(a,u,0.70710678118,3,0.70710678118,7,0,3,1,7)
M.o(a,u,0,4,1,6,-0.70710678118,4,0.70710678118,6)
M.o(a,u,-0.70710678118,5,0.70710678118,5,-1,5,0,5)
M.o(a,u,-1,6,0,4,-0.70710678118,6,-0.70710678118,4)
M.o(a,u,-0.70710678118,7,-0.70710678118,3,0,7,-1,3)
M.o(a,u,0,8,-1,2,0.70710678118,8,-0.70710678118,2)
M.o(a,u,0.70710678118,9,-0.70710678118,1,1,9,0,1)},
$S:0}
M.hO.prototype={
$1:function(a){M.w(a,V.bB(-0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.w(a,V.bB(1.5707963267948966),"[0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 1.000, 0.000,  0.000, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.w(a,V.bB(-3.141592653589793),"[-1.000, 0.000,  0.000, 0.000,","  0.000, 1.000,  0.000, 0.000,","  0.000, 0.000, -1.000, 0.000,","  0.000, 0.000,  0.000, 1.000]")
M.w(a,V.bB(3.141592653589793),"[-1.000, 0.000,  0.000, 0.000,","  0.000, 1.000,  0.000, 0.000,","  0.000, 0.000, -1.000, 0.000,","  0.000, 0.000,  0.000, 1.000]")
M.w(a,V.bB(1.1780972450961724),"[0.383, 0.000, -0.924, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.924, 0.000,  0.383, 0.000,"," 0.000, 0.000,  0.000, 1.000]")},
$S:0}
M.hP.prototype={
$1:function(a){var u=V.bC(0.7853981633974483)
M.w(a,u,"[0.707, -0.707, 0.000, 0.000,"," 0.707,  0.707, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.o(a,u,0,0,1,9,0,0,1,9)
M.o(a,u,1,0,2,8,0.70710678118,0.70710678118,2,8)
M.o(a,u,0.70710678118,0.70710678118,3,7,0,1,3,7)
M.o(a,u,0,1,4,6,-0.70710678118,0.70710678118,4,6)
M.o(a,u,-0.70710678118,0.70710678118,5,5,-1,0,5,5)
M.o(a,u,-1,0,6,4,-0.70710678118,-0.70710678118,6,4)
M.o(a,u,-0.70710678118,-0.70710678118,7,3,0,-1,7,3)
M.o(a,u,0,-1,8,2,0.70710678118,-0.70710678118,8,2)
M.o(a,u,0.70710678118,-0.70710678118,9,1,1,0,9,1)},
$S:0}
M.hQ.prototype={
$1:function(a){M.w(a,V.bC(-0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.w(a,V.bC(1.5707963267948966),"[0.000, -1.000, 0.000, 0.000,"," 1.000,  0.000, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.w(a,V.bC(-3.141592653589793),"[-1.000,  0.000, 0.000, 0.000,","  0.000, -1.000, 0.000, 0.000,","  0.000,  0.000, 1.000, 0.000,","  0.000,  0.000, 0.000, 1.000]")
M.w(a,V.bC(3.141592653589793),"[-1.000,  0.000, 0.000, 0.000,","  0.000, -1.000, 0.000, 0.000,","  0.000,  0.000, 1.000, 0.000,","  0.000,  0.000, 0.000, 1.000]")
M.w(a,V.bC(1.1780972450961724),"[0.383, -0.924, 0.000, 0.000,"," 0.924,  0.383, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")},
$S:0}
M.hR.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.w(a,V.kC(u.av(0),!1),"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
t=u.a
s=u.e
r=u.y
q=u.cx
p=u.b
o=u.f
n=u.z
m=u.cy
l=u.c
k=u.r
j=u.Q
i=u.db
h=u.d
g=u.x
f=u.ch
e=u.dx
M.w(a,V.J(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e),"[1.000, 5.000,  9.000, 13.000,"," 2.000, 6.000, 10.000, 14.000,"," 3.000, 7.000, 11.000, 15.000,"," 4.000, 8.000, 12.000, 16.000]")
M.I(a,t,1,"m11")
M.I(a,p,2,"m21")
M.I(a,l,3,"m31")
M.I(a,h,4,"m41")
M.I(a,s,5,"m12")
M.I(a,o,6,"m22")
M.I(a,k,7,"m32")
M.I(a,g,8,"m42")
M.I(a,r,9,"m13")
M.I(a,n,10,"m23")
M.I(a,j,11,"m33")
M.I(a,f,12,"m43")
M.I(a,q,13,"m14")
M.I(a,m,14,"m24")
M.I(a,i,15,"m34")
M.I(a,e,16,"m44")
M.w(a,V.iZ(1.2,3.4,5.6),"[1.000, 0.000, 0.000, 1.200,"," 0.000, 1.000, 0.000, 3.400,"," 0.000, 0.000, 1.000, 5.600,"," 0.000, 0.000, 0.000, 1.000]")
M.w(a,V.J(1,2,0,0,3,4,0,0,0,0,1,0,0,0,0,1),"[1.000, 2.000, 0.000, 0.000,"," 3.000, 4.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.w(a,V.J(1,2,3,0,4,5,6,0,7,8,9,0,0,0,0,1),"[1.000, 2.000, 3.000, 0.000,"," 4.000, 5.000, 6.000, 0.000,"," 7.000, 8.000, 9.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")},
$S:0}
M.hE.prototype={
$1:function(a){M.dL(a,V.aD(),"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.dL(a,V.iY(2,3,4,1),"[0.500, 0.000, 0.000, 0.000,"," 0.000, 0.333, 0.000, 0.000,"," 0.000, 0.000, 0.250, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.dL(a,V.bA(0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.dL(a,V.bB(0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.dL(a,V.bC(0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.w(a,V.J(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0).J(),"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")},
$S:0}
M.hF.prototype={
$1:function(a){M.w(a,V.J(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6).v(0,V.J(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6)),"[ 1.900,  2.000,  2.100,  2.200,","  4.620,  4.880,  5.140,  5.400,","  7.340,  7.760,  8.180,  8.600,"," 10.060, 10.640, 11.220, 11.800]")
M.w(a,V.J(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6).v(0,V.J(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6)),"[3.700, 4.200, 4.700,  5.200,"," 4.820, 5.480, 6.140,  6.800,"," 5.940, 6.760, 7.580,  8.400,"," 7.060, 8.040, 9.020, 10.000]")},
$S:0}
M.hG.prototype={
$1:function(a){var u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bf(a,u,0,0,0,4,8,12)
M.bf(a,u,1,0,0,5,13,21)
M.bf(a,u,0,1,0,6,14,22)
M.bf(a,u,1,1,0,7,19,31)
M.bf(a,u,0,0,1,7,15,23)
M.bf(a,u,1,0,1,8,20,32)
M.bf(a,u,0,1,1,9,21,33)
M.bf(a,u,1,1,1,10,26,42)},
$S:0}
M.hH.prototype={
$1:function(a){var u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bh(a,u,0,0,0,0,0,0)
M.bh(a,u,1,0,0,1,5,9)
M.bh(a,u,0,1,0,2,6,10)
M.bh(a,u,1,1,0,3,11,19)
M.bh(a,u,0,0,1,3,7,11)
M.bh(a,u,1,0,1,4,12,20)
M.bh(a,u,0,1,1,5,13,21)
M.bh(a,u,1,1,1,6,18,30)},
$S:0}
M.hI.prototype={
$1:function(a){var u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.h5(a,u,0,0,4,8)
M.h5(a,u,1,0,5,13)
M.h5(a,u,0,1,6,14)
M.h5(a,u,1,1,7,19)},
$S:0}
M.hJ.prototype={
$1:function(a){var u=V.J(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.w(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.h8(a,u,0,0,0,0)
M.h8(a,u,1,0,1,5)
M.h8(a,u,0,1,2,6)
M.h8(a,u,1,1,3,11)},
$S:0}
M.hS.prototype={
$1:function(a){var u,t
u=$.jb
if(u==null){u=V.df(0,0,0,0)
$.jb=u}M.cw(a,u,0,0,0,0,0,0)
M.cw(a,u,1,2,0,0,1,2)
M.cw(a,u,-1,-2,-1,-2,1,2)
M.cw(a,V.df(0,0,1,2),-1,-2,-1,-2,2,4)
t=V.df(-1,-2,2,4)
M.cw(a,t,1,1,-1,-2,2,4)
M.cw(a,t,4,4,-1,-2,5,6)},
$S:0}
M.hT.prototype={
$1:function(a){var u,t
u=$.jc
if(u==null){u=V.D(0,0,0,0,0,0)
$.jc=u}M.cx(a,u,0,0,0,0,0,0,0,0,0)
M.cx(a,u,1,2,3,0,0,0,1,2,3)
M.cx(a,u,-1,-2,-3,-1,-2,-3,1,2,3)
M.cx(a,V.D(0,0,0,1,2,3),-1,-2,-3,-1,-2,-3,2,4,6)
t=V.D(-1,-2,-3,2,4,6)
M.cx(a,t,1,1,1,-1,-2,-3,2,4,6)
M.cx(a,t,4,4,4,-1,-2,-3,5,6,7)},
$S:0}
M.hU.prototype={
$1:function(a){var u,t,s
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,2,2,1,1,1),new V.v(0,0,0),null)
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,0,0,1,1,1),new V.v(0.5,0,0),null)
u=V.D(0,0,0,1,1,1)
t=V.D(2,0,0,1,1,1)
s=$.bO()
M.ao(a,u,t,new V.v(1,0,0),new V.at(1,s))
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,0,0,1,1,1),new V.v(4,0,0),new V.at(0.25,s))
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,0,0,1,1,1),new V.v(-4,0,0),null)
M.ao(a,V.D(2,0,0,1,1,1),V.D(0,0,0,1,1,1),new V.v(4,0,0),null)
M.ao(a,V.D(2,0,0,1,1,1),V.D(0,0,0,1,1,1),new V.v(-4,0,0),new V.at(0.25,$.bP()))
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,2,2,1,1,1),new V.v(4,0,0),null)
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,2,2,1,1,1),new V.v(2,2.4,2.8),new V.at(0.5,s))
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,2,2,1,1,1),new V.v(2.8,2,2.4),new V.at(0.5,$.cF()))
M.ao(a,V.D(0,0,0,1,1,1),V.D(2,2,2,1,1,1),new V.v(2.4,2.8,2),new V.at(0.5,$.bR()))
s=V.D(0,11.13,0,0,1.5,0)
t=V.D(0,8,0,0,1,0)
u=$.bQ()
M.ao(a,s,t,new V.v(0,-2.45,0),new V.at(0.869387755102041,u))
M.ao(a,V.D(0.25,10,0.1,0.25,2,0.25),V.D(0,9,0,1,1,1),new V.v(0,-1,-0.3),new V.at(0,u))},
$S:0}
M.hV.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=V.aD()
t=V.iZ(0,0,-5)
s=new M.U()
s.a=new V.q(0,0,0)
s.b=new V.q(0,0,1.020051002550127)
r=new M.U()
r.a=new V.q(1,0,0)
r.b=new V.q(-0.3464101615137755,0,1.020051002550127)
q=new M.U()
q.a=new V.q(-1,0,0)
q.b=new V.q(0.3464101615137755,0,1.020051002550127)
p=new M.U()
p.a=new V.q(0,1,0)
p.b=new V.q(0,-0.3464101615137755,1.020051002550127)
o=new M.U()
o.a=new V.q(0,-1,0)
o.b=new V.q(0,0.3464101615137755,1.020051002550127)
n=new M.U()
n.a=new V.q(0,0,1)
n.b=new V.q(0,0,1.016717502541794)
m=new M.U()
m.a=new V.q(0,0,-1)
m.b=new V.q(0,0,1.025051252562628)
l=new M.U()
l.a=new V.q(1,1,1)
l.b=new V.q(-0.2886751345948129,-0.2886751345948129,1.016717502541794)
k=new M.U()
k.a=new V.q(1,-1,1)
k.b=new V.q(-0.2886751345948129,0.2886751345948129,1.016717502541794)
j=new M.U()
j.a=new V.q(1,1,-1)
j.b=new V.q(-0.4330127018922194,-0.4330127018922194,1.025051252562628)
i=new M.U()
i.a=new V.q(1,-1,-1)
i.b=new V.q(-0.4330127018922194,0.4330127018922194,1.025051252562628)
h=new M.U()
h.a=new V.q(-1,1,1)
h.b=new V.q(0.2886751345948129,-0.2886751345948129,1.016717502541794)
g=new M.U()
g.a=new V.q(-1,-1,1)
g.b=new V.q(0.2886751345948129,0.2886751345948129,1.016717502541794)
f=new M.U()
f.a=new V.q(-1,1,-1)
f.b=new V.q(0.4330127018922194,-0.4330127018922194,1.025051252562628)
e=new M.U()
e.a=new V.q(-1,-1,-1)
e.b=new V.q(0.4330127018922194,0.4330127018922194,1.025051252562628)
M.lI(a,u,t,H.d([s,r,q,p,o,n,m,l,k,j,i,h,g,f,e],[M.U]))},
$S:0}
M.U.prototype={}
M.bH.prototype={}
M.bI.prototype={
e1:function(a){var u=this.b
if(u.className!=="test_body body_hidden")u.className="test_body body_hidden"
else u.className="test_body body_shown"},
O:function(){var u,t,s,r,q
if(this.d!=null){u=this.e
if(u==null)u=new P.as(Date.now(),!1)
t="("+C.b.aG(C.e.U(P.ic(0,0,0,u.a-this.d.a,0,0).a,1000)*0.001,2)+"s)"}else t=""
if(!this.y){s=this.c
s.className="test_header queued"
s.textContent="Queued: "+this.r+" "+t}else if(this.z){s=this.c
s.className="test_header failed"
s.textContent="Failed: "+this.r+" "+t}else{s=this.Q
r=this.c
q=this.r
if(s){r.className="test_header passed"
r.textContent="Passed: "+q+" "+t}else{r.className="test_header running"
r.textContent="Running: "+q+" "+t}}this.a.O()},
eX:function(){var u,t,s,r,q
u=P.kq(new M.f1(this),null).bc(new M.f2(this),null)
t=new M.f3(this)
s=H.t(u,0)
r=$.M
q=new P.ab(0,r,[s])
if(r!==C.f)t=P.js(t,r)
u.aM(new P.aG(q,2,null,t,[s,s]))
q.bc(new M.f4(this),null)},
j:function(a,b){var u,t,s,r
u=this.a.c.cK(a,0,a.length)
t=u==null?a:u
t=H.i6(t," ","&nbsp;")
s='</dir><br class="'+b+'"><dir class="'+b+'">'
r=H.i6(t,"\n",s)
t=this.b
C.c.cd(t,J.k5(t.innerHTML,'<dir class="'+b+'">'+r+"</dir>"))},
k:function(){if(!this.z){this.z=!0
this.b.className="test_body body_shown"
this.O()}}}
M.f1.prototype={
$0:function(){var u=this.a
u.y=!0
u.O()},
$S:1}
M.f2.prototype={
$1:function(a){var u=this.a
u.d=new P.as(Date.now(),!1)
u.f.$1(u)
u.e=new P.as(Date.now(),!1)},
$S:5}
M.f3.prototype={
$2:function(a,b){var u=this.a
u.e=new P.as(Date.now(),!1)
u.j("\nException: "+H.b(a),"error_log")
u.k()
u.j("\nStack: "+H.b(b),"warning_log")},
$S:7}
M.f4.prototype={
$1:function(a){var u,t,s,r
u=this.a
u.Q=!0
t=u.a
s=t.f
if(typeof s!=="number")return s.K()
t.f=s+1
if(u.z){s=t.r
if(typeof s!=="number")return s.K()
t.r=s+1}t.O()
s=t.f
t=t.e
r=t.length
if(typeof s!=="number")return s.ay()
if(s<r){if(s<0||s>=t.length)return H.e(t,s)
P.dm(C.i,t[s].gc1())}u.O()},
$S:5}
M.f5.prototype={
aA:function(a,b,c){var u,t,s
u=W.ks("checkbox")
u.className="log_checkbox"
u.checked=!0
t=W.c
W.X(u,"change",H.f(new M.f6(c,u),{func:1,ret:-1,args:[t]}),!1,t)
C.c.u(a,u)
s=document.createElement("span")
s.textContent=b
C.c.u(a,s)},
O:function(){var u,t,s,r,q
u=C.b.aG(C.e.U(P.ic(0,0,0,Date.now()-this.d.a,0,0).a,1000)*0.001,2)
t=this.e.length
s=this.f
if(typeof s!=="number")return H.aQ(s)
if(t<=s){s=this.r
if(typeof s!=="number")return s.c8()
r=this.b
if(s>0){r.className="top_header failed"
if(s===1)r.textContent="Failed 1 Test ("+u+"s)"
else r.textContent="Failed "+s+" Tests ("+u+"s)"}else{r.textContent="Tests Passed ("+u+"s)"
r.className="top_header passed"}}else{q=C.E.aG(s/t*100,2)
this.b.textContent="Running Tests: "+H.b(this.f)+"/"+t+" ("+q+"%)"
s=this.r
if(typeof s!=="number")return s.c8()
r=this.b
if(s>0){r.textContent=H.b(r.textContent)+" - "+H.b(this.r)+" failed)"
r.className="topHeader failed"}else r.className="topHeader running"}},
e6:function(a,b,c,d){var u,t,s,r
H.f(c,{func:1,ret:-1,args:[M.bH]})
if(b.length<=0)b=H.b(c)
if(!C.d.bk(b,this.x))return
u=this.e
t=new M.bI(this,c,b,!1)
s=document
r=s.createElement("div")
r.className="test_body body_hidden"
t.b=r
s=s.createElement("div")
s.className="running top_header"
r=W.a_
W.X(s,"click",H.f(t.ge0(),{func:1,ret:-1,args:[r]}),!1,r)
t.c=s
r=this.a
C.c.u(r,s)
C.c.u(r,t.b)
t.d=null
t.e=null
t.y=!1
t.z=!1
t.Q=!1
t.O();(u&&C.a).i(u,t)
this.O()
u=this.f
if(typeof u!=="number")return u.K()
t=this.e
s=t.length
if(u+1===s){if(u>=s)return H.e(t,u)
P.dm(C.i,t[u].gc1())}},
n:function(a,b,c){return this.e6(a,b,c,!1)},
se_:function(a){this.e=H.n(a,"$ia",[M.bI],"$aa")}}
M.f6.prototype={
$1:function(a){var u,t,s,r,q
u=document
t="."+this.a
s=W.a2
H.li(s,s,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
t=C.o.dI(u,t)
r=this.b.checked?"block":"none"
for(q=0;q<t.length;++q){u=H.l(t[q],"$ia2").style
u.display=r}},
$S:18}
M.hW.prototype={
$1:function(a){var u,t
M.a7(a,$.i9(),"None",0,0,0)
M.a7(a,$.ai(),"Pos",1,1,3)
M.a7(a,$.ah(),"Norm",2,1,3)
M.a7(a,$.ag(),"Binm",4,1,3)
M.a7(a,$.a8(),"Txt2D",8,1,2)
M.a7(a,$.aA(),"TxtCube",16,1,3)
M.a7(a,$.az(),"Clr3",32,1,3)
M.a7(a,$.aH(),"Clr4",64,1,4)
M.a7(a,$.aq(),"Weight",128,1,1)
M.a7(a,$.ap(),"Bending",256,1,4)
u=$.ai()
t=$.ah()
M.a7(a,new Z.aw(u.a|t.a),"Pos|Norm",3,2,6)
t=$.ai()
u=$.a8()
M.a7(a,new Z.aw(t.a|u.a),"Pos|Txt2D",9,2,5)
u=$.ai()
t=$.ah()
M.a7(a,new Z.aw(u.a|t.a|$.ag().a|$.a8().a|$.az().a),"Pos|Norm|Binm|Txt2D|Clr3",47,5,14)
t=$.a8()
u=$.aq()
M.a7(a,new Z.aw(t.a|u.a),"Txt2D|Weight",136,2,3)
u=$.aA()
t=$.ap()
M.a7(a,new Z.aw(u.a|t.a),"TxtCube|Bending",272,2,7)},
$S:0}
M.hX.prototype={
$1:function(a){var u,t,s
u=$.ai()
t=$.ah()
s=new Z.aw(u.a|t.a|$.ag().a|$.a8().a|$.aA().a|$.az().a)
M.a1(a,s,u,!0,0,0)
M.a1(a,s,$.ah(),!0,1,3)
M.a1(a,s,$.ag(),!0,2,6)
M.a1(a,s,$.a8(),!0,3,9)
M.a1(a,s,$.aA(),!0,4,11)
M.a1(a,s,$.az(),!0,5,14)
M.a1(a,s,$.aH(),!1,-1,-1)
M.a1(a,s,$.aq(),!1,-1,-1)
M.a1(a,s,$.ap(),!1,-1,-1)},
$S:0}
M.hY.prototype={
$1:function(a){var u,t,s
u=$.ai()
t=$.ag()
s=new Z.aw(u.a|t.a|$.aH().a|$.aq().a|$.ap().a)
M.a1(a,s,u,!0,0,0)
M.a1(a,s,$.ah(),!1,-1,-1)
M.a1(a,s,$.ag(),!0,1,3)
M.a1(a,s,$.a8(),!1,-1,-1)
M.a1(a,s,$.az(),!1,-1,-1)
M.a1(a,s,$.aH(),!0,2,6)
M.a1(a,s,$.aq(),!0,3,10)
M.a1(a,s,$.ap(),!0,4,11)},
$S:0};(function aliases(){var u=J.Z.prototype
u.cj=u.h
u=J.d_.prototype
u.cl=u.h
u=P.p.prototype
u.ck=u.aI
u=W.a2.prototype
u.aK=u.L
u=W.dD.prototype
u.cn=u.W
u=V.d4.prototype
u.cm=u.ag
u.bl=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lj","kU",12)
u(P,"lk","kV",12)
u(P,"ll","kW",12)
t(P,"jz","l7",2)
s(W,"lt",4,null,["$4"],["kY"],19,0)
s(W,"lu",4,null,["$4"],["kZ"],19,0)
var m
r(m=E.W.prototype,"gbU",0,0,null,["$1","$0"],["bV","eL"],3,0)
r(m,"gbS",0,0,null,["$1","$0"],["bT","eK"],3,0)
r(m,"gbQ",0,0,null,["$1","$0"],["bR","eH"],3,0)
q(m,"geF","eG",6)
q(m,"geI","eJ",6)
r(m=E.dl.prototype,"gbm",0,0,null,["$1","$0"],["bn","aL"],3,0)
p(m,"geW","c0",2)
o(m=X.ds.prototype,"gdg","dh",9)
o(m,"gd2","d3",9)
o(m,"gd9","da",4)
o(m,"gdk","dl",17)
o(m,"gdi","dj",17)
o(m,"gdn","dq",4)
o(m,"gdt","du",4)
o(m,"gde","df",4)
o(m,"gdr","ds",4)
o(m,"gdc","dd",4)
o(m,"gdv","dw",31)
o(m,"gdz","dA",9)
o(m,"gdF","dG",10)
o(m,"gdB","dC",10)
o(m,"gdD","dE",10)
n(V.a0.prototype,"gp","ap",11)
n(V.v.prototype,"gp","ap",11)
n(V.bc.prototype,"gp","ap",11)
r(m=M.cS.prototype,"gT",0,0,null,["$1","$0"],["Z","cw"],3,0)
q(m,"gd5","d6",6)
q(m,"gd7","d8",6)
r(X.db.prototype,"gbB",0,0,null,["$1","$0"],["aa","d4"],3,0)
o(m=M.bI.prototype,"ge0","e1",32)
p(m,"gc1","eX",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.G,null)
s(P.G,[H.ij,J.Z,J.aR,P.dz,P.p,H.c8,P.aT,H.bq,H.dr,H.eF,H.fc,P.b3,H.bW,H.dE,P.bt,H.eo,H.ep,H.el,H.eY,P.fW,P.aG,P.ab,P.du,P.eU,P.cj,P.eV,P.a6,P.h_,P.fQ,P.bJ,P.fK,P.T,P.bX,P.ef,P.fY,P.N,P.as,P.ad,P.bn,P.eC,P.di,P.fy,P.eb,P.b5,P.a,P.H,P.a9,P.k,P.ba,W.dZ,W.bd,W.ak,W.d9,W.dD,W.fT,W.cU,W.al,W.fP,W.dH,O.b2,O.c9,E.dT,E.W,E.eG,E.dl,Z.aw,D.dV,D.c2,D.K,X.cL,X.d0,X.en,X.er,X.aW,X.ev,X.fa,X.ds,V.cN,V.e7,V.a3,V.at,V.Q,V.L,V.b7,V.S,V.q,V.b8,V.cf,V.b9,V.a0,V.v,V.bc,M.cS,F.b4,F.br,F.cc,F.dh,F.eN,F.eO,F.eP,F.co,F.fj,F.fk,F.fl,F.fm,O.bG,T.f7,V.dR,V.aV,V.d4,V.eM,V.ch,V.dn,V.cl,V.f9,X.cM,X.dk,X.db,V.eQ,B.ar,B.dW,B.bl,B.dX,B.e9,B.fo,M.U,M.bH,M.f5])
s(J.Z,[J.ej,J.ek,J.d_,J.aB,J.c7,J.b6,H.d8,W.bp,W.dv,W.e1,W.cQ,W.cR,W.c,W.dx,W.d3,W.dB,W.dd,W.aM,W.dF,W.dI,P.cV,P.bF])
s(J.d_,[J.eD,J.cn,J.aU])
t(J.ii,J.aB)
s(J.c7,[J.cZ,J.cY])
t(P.eq,P.dz)
s(P.eq,[H.dq,W.ip,W.aa])
t(H.V,H.dq)
s(P.p,[H.e4,H.dt])
s(H.e4,[H.bs,H.d1])
t(H.eu,H.bs)
t(H.fn,P.aT)
s(P.b3,[H.eB,H.em,H.ff,H.dp,H.eK,P.da,P.aI,P.fg,P.fe,P.ci,P.dY,P.e_])
s(H.bW,[H.i7,H.f0,H.i0,H.i1,H.i2,P.fq,P.fp,P.fr,P.fs,P.fX,P.ed,P.fz,P.fD,P.fA,P.fB,P.fC,P.fG,P.fH,P.fF,P.fE,P.eW,P.eX,P.h2,P.fN,P.fM,P.fO,P.et,P.e2,P.e3,W.e5,W.fx,W.eA,W.ez,W.fR,W.fS,W.fV,W.fZ,P.hZ,E.eH,E.eI,E.eJ,E.f8,D.e8,V.eS,V.eR,M.h9,M.ha,M.hb,M.hc,M.hd,M.he,M.hf,M.hg,M.hh,M.hi,M.hj,M.hk,M.hl,M.hm,M.hn,M.ho,M.ht,M.hu,M.hv,M.hw,M.hx,M.hy,M.hz,M.hA,M.hp,M.hq,M.hr,M.hs,M.hB,M.hC,M.hD,M.hK,M.hL,M.hM,M.hN,M.hO,M.hP,M.hQ,M.hR,M.hE,M.hF,M.hG,M.hH,M.hI,M.hJ,M.hS,M.hT,M.hU,M.hV,M.f1,M.f2,M.f3,M.f4,M.f6,M.hW,M.hX,M.hY])
s(H.f0,[H.eT,H.bT])
t(P.es,P.bt)
s(P.es,[H.aK,W.ft])
t(H.d5,H.d8)
s(H.d5,[H.cs,H.cu])
t(H.ct,H.cs)
t(H.d6,H.ct)
t(H.cv,H.cu)
t(H.d7,H.cv)
s(H.d7,[H.ew,H.ex,H.ey])
t(P.fL,P.h_)
t(P.fJ,P.fQ)
t(P.bY,P.eV)
t(P.e6,P.bX)
s(P.bY,[P.ee,P.fi])
t(P.fh,P.e6)
s(P.ad,[P.O,P.B])
s(P.aI,[P.bE,P.eg])
s(W.bp,[W.u,W.cp])
s(W.u,[W.a2,W.b1,W.c0,W.cq])
s(W.a2,[W.m,P.i])
s(W.m,[W.cK,W.dS,W.bS,W.b0,W.bV,W.c_,W.ea,W.cW,W.c6,W.eL,W.dj,W.eZ,W.f_,W.ck])
t(W.bZ,W.dv)
t(W.dy,W.dx)
t(W.c4,W.dy)
t(W.cX,W.c0)
t(W.bb,W.c)
s(W.bb,[W.aL,W.a_,W.aE])
t(W.dC,W.dB)
t(W.cb,W.dC)
t(W.dG,W.dF)
t(W.fb,W.dG)
t(W.aP,W.a_)
t(W.dw,W.cR)
t(W.dJ,W.dI)
t(W.dA,W.dJ)
t(W.fu,W.ft)
t(W.fv,P.eU)
t(W.io,W.fv)
t(W.fw,P.cj)
t(W.fU,W.dD)
t(P.cg,P.i)
s(D.K,[D.eh,D.ei,D.am])
t(U.ca,D.dV)
t(U.cO,U.ca)
t(A.dg,E.dT)
t(O.e0,O.bG)
s(V.d4,[V.aX,V.cm])
t(X.ec,X.dk)
t(M.bI,M.bH)
u(H.dq,H.dr)
u(H.cs,P.T)
u(H.ct,H.bq)
u(H.cu,P.T)
u(H.cv,H.bq)
u(P.dz,P.T)
u(W.dv,W.dZ)
u(W.dx,P.T)
u(W.dy,W.ak)
u(W.dB,P.T)
u(W.dC,W.ak)
u(W.dF,P.T)
u(W.dG,W.ak)
u(W.dI,P.T)
u(W.dJ,W.ak)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.b0.prototype
C.n=W.bV.prototype
C.c=W.c_.prototype
C.A=W.cQ.prototype
C.B=W.cW.prototype
C.o=W.cX.prototype
C.D=J.Z.prototype
C.a=J.aB.prototype
C.E=J.cY.prototype
C.e=J.cZ.prototype
C.b=J.c7.prototype
C.d=J.b6.prototype
C.L=J.aU.prototype
C.Q=W.cb.prototype
C.r=J.eD.prototype
C.t=W.dd.prototype
C.h=P.bF.prototype
C.u=W.dj.prototype
C.m=J.cn.prototype
C.w=W.aP.prototype
C.x=W.cp.prototype
C.y=new P.eC()
C.z=new P.fi()
C.f=new P.fL()
C.i=new P.bn(0)
C.C=new P.ef("element",!0,!1,!1,!1)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.N=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.O=H.d(u([]),[P.k])
C.P=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.k=H.d(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.l=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.v=new P.fh(!1)})();(function staticFields(){$.aJ=0
$.bU=null
$.iJ=null
$.ir=!1
$.jD=null
$.jx=null
$.jJ=null
$.i_=null
$.i3=null
$.iC=null
$.bK=null
$.cy=null
$.cz=null
$.it=!1
$.M=C.f
$.aS=null
$.id=null
$.iP=null
$.iO=null
$.iW=null
$.iX=null
$.j_=null
$.j4=null
$.j5=null
$.jb=null
$.ja=null
$.jc=null
$.ji=null
$.jl=null
$.jk=null
$.jj=null
$.j3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lN","jM",function(){return H.jC("_$dart_dartClosure")})
u($,"m0","iE",function(){return H.jC("_$dart_js")})
u($,"m4","jS",function(){return H.aN(H.fd({
toString:function(){return"$receiver$"}}))})
u($,"m5","jT",function(){return H.aN(H.fd({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m6","jU",function(){return H.aN(H.fd(null))})
u($,"m7","jV",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ma","jY",function(){return H.aN(H.fd(void 0))})
u($,"mb","jZ",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m9","jX",function(){return H.aN(H.jg(null))})
u($,"m8","jW",function(){return H.aN(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"md","k0",function(){return H.aN(H.jg(void 0))})
u($,"mc","k_",function(){return H.aN(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mt","iF",function(){return P.kT()})
u($,"mx","cH",function(){return[]})
u($,"mw","k4",function(){return P.kO("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mu","k3",function(){return P.iU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"mv","iG",function(){return P.kx(P.k,P.b5)})
u($,"mm","i9",function(){return Z.ax(0)})
u($,"mg","k1",function(){return Z.ax(511)})
u($,"mo","ai",function(){return Z.ax(1)})
u($,"mn","ah",function(){return Z.ax(2)})
u($,"mi","ag",function(){return Z.ax(4)})
u($,"mp","a8",function(){return Z.ax(8)})
u($,"mq","aA",function(){return Z.ax(16)})
u($,"mj","az",function(){return Z.ax(32)})
u($,"mk","aH",function(){return Z.ax(64)})
u($,"ml","k2",function(){return Z.ax(96)})
u($,"mr","aq",function(){return Z.ax(128)})
u($,"mh","ap",function(){return Z.ax(256)})
u($,"lM","jL",function(){return new V.e7(1e-9)})
u($,"lL","C",function(){return $.jL()})
u($,"lR","aZ",function(){return V.aj(0)})
u($,"lO","i8",function(){return V.aj(511)})
u($,"lU","bP",function(){return V.aj(1)})
u($,"lS","jP",function(){return V.aj(2)})
u($,"lT","bO",function(){return V.aj(4)})
u($,"lX","bQ",function(){return V.aj(8)})
u($,"lV","jQ",function(){return V.aj(16)})
u($,"lW","cF",function(){return V.aj(32)})
u($,"m_","cG",function(){return V.aj(64)})
u($,"lY","jR",function(){return V.aj(128)})
u($,"lZ","bR",function(){return V.aj(256)})
u($,"lQ","jO",function(){return V.aj(146)})
u($,"lP","jN",function(){return V.aj(365)})})()
var v={mangledGlobalNames:{B:"int",O:"double",ad:"num",k:"String",N:"bool",H:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.H,args:[M.bH]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,opt:[D.K]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[P.B,[P.p,E.W]]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.H,args:[D.K]},{func:1,ret:-1,args:[W.c]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.O},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.k,args:[P.B]},{func:1,ret:P.N,args:[W.al]},{func:1,ret:P.N,args:[P.k]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:P.H,args:[W.c]},{func:1,ret:P.N,args:[W.a2,P.k,P.k,W.bd]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,],opt:[P.a9]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.N,args:[W.u]},{func:1,args:[W.c]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.H,args:[P.ad]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.K]}]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:-1,args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.Z,DOMError:J.Z,MediaError:J.Z,Navigator:J.Z,NavigatorConcurrentHardware:J.Z,NavigatorUserMediaError:J.Z,OverconstrainedError:J.Z,PositionError:J.Z,WebGLRenderbuffer:J.Z,WebGL2RenderingContext:J.Z,WebGLTexture:J.Z,SQLError:J.Z,ArrayBufferView:H.d8,Float32Array:H.d6,Int32Array:H.ew,Uint32Array:H.ex,Uint8Array:H.ey,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.cK,HTMLAreaElement:W.dS,HTMLBaseElement:W.bS,HTMLBodyElement:W.b0,HTMLCanvasElement:W.bV,CDATASection:W.b1,CharacterData:W.b1,Comment:W.b1,ProcessingInstruction:W.b1,Text:W.b1,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,HTMLDivElement:W.c_,XMLDocument:W.c0,Document:W.c0,DOMException:W.e1,DOMImplementation:W.cQ,DOMRectReadOnly:W.cR,Element:W.a2,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,EventTarget:W.bp,HTMLFormElement:W.ea,HTMLHeadElement:W.cW,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,HTMLDocument:W.cX,HTMLInputElement:W.c6,KeyboardEvent:W.aL,Location:W.d3,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,DocumentFragment:W.u,ShadowRoot:W.u,DocumentType:W.u,Node:W.u,NodeList:W.cb,RadioNodeList:W.cb,Range:W.dd,HTMLSelectElement:W.eL,HTMLTableElement:W.dj,HTMLTableRowElement:W.eZ,HTMLTableSectionElement:W.f_,HTMLTemplateElement:W.ck,Touch:W.aM,TouchEvent:W.aE,TouchList:W.fb,CompositionEvent:W.bb,FocusEvent:W.bb,TextEvent:W.bb,UIEvent:W.bb,WheelEvent:W.aP,Window:W.cp,DOMWindow:W.cp,Attr:W.cq,ClientRect:W.dw,DOMRect:W.dw,NamedNodeMap:W.dA,MozNamedAttrMap:W.dA,SVGScriptElement:P.cg,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,WebGLFramebuffer:P.cV,WebGLRenderingContext:P.bF})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLFramebuffer:true,WebGLRenderingContext:true})
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.jF,[])
else M.jF([])})})()
//# sourceMappingURL=test.dart.js.map
