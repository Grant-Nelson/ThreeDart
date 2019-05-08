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
a[c]=function(){a[c]=function(){H.nw(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jy(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jf:function jf(a){this.a=a},
iM:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
eX:function(){return new P.bO("No element")},
lR:function(){return new P.bO("Too many elements")},
lQ:function(){return new P.bO("Too few elements")},
t:function t(a){this.a=a},
eE:function eE(){},
bG:function bG(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fd:function fd(a,b,c){this.a=a
this.b=b
this.$ti=c},
fe:function fe(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ff:function ff(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
cv:function cv(){},
dP:function dP(){},
lH:function(){throw H.c(P.Z("Cannot modify unmodifiable Map"))},
c_:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nd:function(a){return v.types[H.ab(a)]},
nk:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iaF},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.am(a)
if(typeof u!=="string")throw H.c(H.aq(a))
return u},
me:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eY(u)
t=u[0]
s=u[1]
return new H.fC(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cg:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mb:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.E(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.H(r,p)|32)>s)return}return parseInt(a,b)},
bK:function(a){return H.m2(a)+H.jv(H.bu(a),0,null)},
m2:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibq){p=C.E(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c_(r.length>1&&C.b.H(r,0)===36?C.b.ap(r,1):r)},
m3:function(){if(!!self.location)return self.location.href
return},
kc:function(a){var u,t,s,r,q
H.ei(a)
u=J.aB(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mc:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aq(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aP(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aq(r))}return H.kc(u)},
kd:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aq(s))
if(s<0)throw H.c(H.aq(s))
if(s>65535)return H.mc(a)}return H.kc(a)},
md:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bL:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aP(u,10))>>>0,56320|u&1023)}}throw H.c(P.a6(a,0,1114111,null,null))},
bJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ma:function(a){var u=H.bJ(a).getFullYear()+0
return u},
m8:function(a){var u=H.bJ(a).getMonth()+1
return u},
m4:function(a){var u=H.bJ(a).getDate()+0
return u},
m5:function(a){var u=H.bJ(a).getHours()+0
return u},
m7:function(a){var u=H.bJ(a).getMinutes()+0
return u},
m9:function(a){var u=H.bJ(a).getSeconds()+0
return u},
m6:function(a){var u=H.bJ(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.aq(a))},
d:function(a,b){if(a==null)J.aB(a)
throw H.c(H.bV(a,b))},
bV:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.ab(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bD(b,a,"index",null,u)
return P.dx(b,"index",null)},
n6:function(a,b,c){if(a>c)return new P.bM(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bM(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
aq:function(a){return new P.aC(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.ds()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l3})
u.name=""}else u.toString=H.l3
return u},
l3:function(){return J.am(this.dartException)},
q:function(a){throw H.c(a)},
y:function(a){throw H.c(P.aY(a))},
aT:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.h4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
km:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k7:function(a,b){return new H.fu(a,b==null?null:b.method)},
jg:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.f1(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aP(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jg(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.k7(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.l7()
p=$.l8()
o=$.l9()
n=$.la()
m=$.ld()
l=$.le()
k=$.lc()
$.lb()
j=$.lg()
i=$.lf()
h=q.ag(t)
if(h!=null)return u.$1(H.jg(H.E(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.jg(H.E(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.k7(H.E(t),h))}}return u.$1(new H.hi(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dB()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dB()
return a},
bY:function(a){var u
if(a==null)return new H.e6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e6(a)},
n9:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nj:function(a,b,c,d,e,f){H.e(a,"$ibg")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var u
H.ab(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nj)
a.$identity=u
return u},
lG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ia){u.$reflectionInfo=d
s=H.me(u).r}else s=d
r=e?Object.create(new H.fS().constructor.prototype):Object.create(new H.c2(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.n()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jU(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nd,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jS:H.j8
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jU(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lD:function(a,b,c,d){var u=H.j8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lF(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lD(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c3
if(q==null){q=H.er("self")
$.c3=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.n()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.c3
if(q==null){q=H.er("self")
$.c3=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
lE:function(a,b,c,d){var u,t
u=H.j8
t=H.jS
switch(b?-1:a){case 0:throw H.c(H.mi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lF:function(a,b){var u,t,s,r,q,p,o,n
u=$.c3
if(u==null){u=H.er("self")
$.c3=u}t=$.jR
if(t==null){t=H.er("receiver")
$.jR=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lE(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.n()
$.aL=t+1
return new Function(u+t+"}")()},
jy:function(a,b,c,d,e,f,g){return H.lG(a,b,H.ab(c),d,!!e,!!f,g)},
j8:function(a){return a.a},
jS:function(a){return a.c},
er:function(a){var u,t,s,r,q
u=new H.c2("self","target","receiver","name")
t=J.eY(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aK(a,"String"))},
n7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"double"))},
np:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aK(a,"num"))},
jw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aK(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aK(a,"int"))},
l1:function(a,b){throw H.c(H.aK(a,H.c_(H.E(b).substring(2))))},
nr:function(a,b){throw H.c(H.lC(a,H.c_(H.E(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.l1(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.nr(a,b)},
ei:function(a){if(a==null)return a
if(!!J.Q(a).$ia)return a
throw H.c(H.aK(a,"List<dynamic>"))},
kZ:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ia)return a
if(u[b])return a
H.l1(a,b)},
kV:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
ef:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kV(J.Q(a))
if(u==null)return!1
return H.kJ(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.js)return a
$.js=!0
try{if(H.ef(a,b))return a
u=H.j_(b)
t=H.aK(a,u)
throw H.c(t)}finally{$.js=!1}},
jB:function(a,b){if(a!=null&&!H.jx(a,b))H.q(H.aK(a,H.j_(b)))
return a},
aK:function(a,b){return new H.h6("TypeError: "+P.eI(a)+": type '"+H.kO(a)+"' is not a subtype of type '"+b+"'")},
lC:function(a,b){return new H.es("CastError: "+P.eI(a)+": type '"+H.kO(a)+"' is not a subtype of type '"+b+"'")},
kO:function(a){var u,t
u=J.Q(a)
if(!!u.$ic4){t=H.kV(u)
if(t!=null)return H.j_(t)
return"Closure"}return H.bK(a)},
nw:function(a){throw H.c(new P.ez(H.E(a)))},
mi:function(a){return new H.fH(a)},
kW:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bu:function(a){if(a==null)return
return a.$ti},
og:function(a,b,c){return H.bZ(a["$a"+H.i(c)],H.bu(b))},
cM:function(a,b,c,d){var u
H.E(c)
H.ab(d)
u=H.bZ(a["$a"+H.i(c)],H.bu(b))
return u==null?null:u[d]},
aa:function(a,b,c){var u
H.E(b)
H.ab(c)
u=H.bZ(a["$a"+H.i(b)],H.bu(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ab(b)
u=H.bu(a)
return u==null?null:u[b]},
j_:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c_(a[0].name)+H.jv(a,1,b)
if(typeof a=="function")return H.c_(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.mU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mU:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.d(b,m)
o=C.b.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.J)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.n8(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jv:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
bZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cK:function(a,b,c,d){var u,t
H.E(b)
H.ei(c)
H.E(d)
if(a==null)return!1
u=H.bu(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.kR(H.bZ(t[d],u),null,c,null)},
h:function(a,b,c,d){H.E(b)
H.ei(c)
H.E(d)
if(a==null)return a
if(H.cK(a,b,c,d))return a
throw H.c(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c_(b.substring(2))+H.jv(c,0,null),v.mangledGlobalNames)))},
kR:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
oe:function(a,b,c){return a.apply(b,H.bZ(J.Q(b)["$a"+H.i(c)],H.bu(b)))},
kY:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="J"||a.name==="D"||a===-1||a===-2||H.kY(u)}return!1},
jx:function(a,b){var u,t
if(a==null)return b==null||b.name==="J"||b.name==="D"||b===-1||b===-2||H.kY(b)
if(b==null||b===-1||b.name==="J"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ef(a,b)}u=J.Q(a).constructor
t=H.bu(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.jx(a,b))throw H.c(H.aK(a,H.j_(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="J"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="J"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.kJ(a,b,c,d)
if('func' in a)return c.name==="bg"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"c9" in t.prototype))return!1
r=t.prototype["$a"+"c9"]
q=H.bZ(r,u?a.slice(1):null)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kR(H.bZ(m,u),b,p,d)},
kJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.no(h,b,g,d)},
no:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aA(c[r],d,a[r],b))return!1}return!0},
of:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
nm:function(a){var u,t,s,r,q,p
u=H.E($.kX.$1(a))
t=$.iL[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iQ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.kQ.$2(a,u))
if(u!=null){t=$.iL[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iQ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iZ(s)
$.iL[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.iQ[u]=s
return s}if(q==="-"){p=H.iZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l0(a,s)
if(q==="*")throw H.c(P.hh(u))
if(v.leafTags[u]===true){p=H.iZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l0(a,s)},
l0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iZ:function(a){return J.jE(a,!1,null,!!a.$iaF)},
nn:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iZ(u)
else return J.jE(u,c,null,null)},
nh:function(){if(!0===$.jD)return
$.jD=!0
H.ni()},
ni:function(){var u,t,s,r,q,p,o,n
$.iL=Object.create(null)
$.iQ=Object.create(null)
H.ng()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l2.$1(q)
if(p!=null){o=H.nn(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ng:function(){var u,t,s,r,q,p,o
u=C.a1()
u=H.bT(C.Z,H.bT(C.a3,H.bT(C.D,H.bT(C.D,H.bT(C.a2,H.bT(C.a_,H.bT(C.a0(C.E),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kX=new H.iN(q)
$.kQ=new H.iO(p)
$.l2=new H.iP(o)},
bT:function(a,b){return a(b)||b},
lT:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a0("Illegal RegExp pattern ("+String(r)+")",a,null))},
nv:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jG:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ew:function ew(){},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fC:function fC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fu:function fu(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a){this.a=a},
j4:function j4(a){this.a=a},
e6:function e6(a){this.a=a
this.b=null},
c4:function c4(){},
fY:function fY(){},
fS:function fS(){},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a){this.a=a},
es:function es(a){this.a=a},
fH:function fH(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f4:function f4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f5:function f5(a,b){this.a=a
this.$ti=b},
f6:function f6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bR:function(a){return a},
m1:function(a){return new Int8Array(a)},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bV(b,a))},
mS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.n6(a,b,c))
return b},
bI:function bI(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
ce:function ce(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
n8:function(a){return J.jZ(a?Object.keys(a):[],null)},
nq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eg:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jD==null){H.nh()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hh("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jI()]
if(q!=null)return q
q=H.nm(a)
if(q!=null)return q
if(typeof a=="function")return C.a4
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.jI(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
lS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.j7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.jZ(new Array(a),b)},
jZ:function(a,b){return J.eY(H.b(a,[b]))},
eY:function(a){H.ei(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.f_.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.da.prototype
if(typeof a=="boolean")return J.eZ.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.J)return a
return J.eg(a)},
na:function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.J)return a
return J.eg(a)},
bX:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.J)return a
return J.eg(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.J)return a
return J.eg(a)},
nb:function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bq.prototype
return a},
nc:function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bq.prototype
return a},
cL:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bq.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.J)return a
return J.eg(a)},
lp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.na(a).n(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).v(a,b)},
jL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nc(a).F(a,b)},
lq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nb(a).t(a,b)},
lr:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bX(a).k(a,b)},
ls:function(a,b,c,d){return J.a5(a).fP(a,b,c,d)},
lt:function(a,b){return J.cL(a).H(a,b)},
ej:function(a,b){return J.a5(a).io(a,b)},
j5:function(a,b,c){return J.a5(a).is(a,b,c)},
jM:function(a,b){return J.a5(a).D(a,b)},
lu:function(a,b){return J.cL(a).Z(a,b)},
ek:function(a,b){return J.jC(a).a7(a,b)},
lv:function(a,b,c,d){return J.a5(a).jX(a,b,c,d)},
lw:function(a){return J.a5(a).gjt(a)},
jN:function(a){return J.a5(a).gco(a)},
cQ:function(a){return J.Q(a).gJ(a)},
bv:function(a){return J.jC(a).gS(a)},
aB:function(a){return J.bX(a).gm(a)},
lx:function(a){return J.a5(a).gkL(a)},
j6:function(a,b){return J.a5(a).aX(a,b)},
jO:function(a){return J.jC(a).kA(a)},
ly:function(a,b){return J.a5(a).kF(a,b)},
lz:function(a,b,c){return J.a5(a).f9(a,b,c)},
lA:function(a,b,c){return J.cL(a).u(a,b,c)},
lB:function(a){return J.cL(a).kP(a)},
am:function(a){return J.Q(a).i(a)},
a3:function a3(){},
eZ:function eZ(){},
da:function da(){},
db:function db(){},
fw:function fw(){},
bq:function bq(){},
b0:function b0(){},
aE:function aE(a){this.$ti=a},
je:function je(a){this.$ti=a},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bi:function bi(){},
d9:function d9(){},
f_:function f_(){},
b_:function b_(){}},P={
mu:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n1()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bU(new P.hH(u),1)).observe(t,{childList:true})
return new P.hG(u,t,s)}else if(self.setImmediate!=null)return P.n2()
return P.n3()},
mv:function(a){self.scheduleImmediate(H.bU(new P.hI(H.k(a,{func:1,ret:-1})),0))},
mw:function(a){self.setImmediate(H.bU(new P.hJ(H.k(a,{func:1,ret:-1})),0))},
mx:function(a){P.jj(C.y,H.k(a,{func:1,ret:-1}))},
jj:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a5(a.a,1000)
return P.mD(u<0?0:u,b)},
kl:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aS]})
u=C.f.a5(a.a,1000)
return P.mE(u<0?0:u,b)},
mD:function(a,b){var u=new P.e7(!0)
u.fK(a,b)
return u},
mE:function(a,b){var u=new P.e7(!1)
u.fL(a,b)
return u},
my:function(a,b){var u,t,s
b.a=1
try{a.eP(new P.hS(b),new P.hT(b),null)}catch(s){u=H.ac(s)
t=H.bY(s)
P.ns(new P.hU(b,u,t))}},
ky:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaz")
if(u>=4){t=b.c9()
b.a=a.a
b.c=a.c
P.cA(b,t)}else{t=H.e(b.c,"$iaW")
b.a=2
b.c=a
a.dw(t)}},
cA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iag")
t=t.b
p=q.a
o=q.b
t.toString
P.iC(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cA(u.a,b)}t=u.a
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
if(k){H.e(m,"$iag")
t=t.b
p=m.a
o=m.b
t.toString
P.iC(null,null,t,p,o)
return}j=$.T
if(j!=l)$.T=l
else j=null
t=b.c
if(t===8)new P.hY(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hX(s,b,m).$0()}else if((t&2)!==0)new P.hW(u,s,b).$0()
if(j!=null)$.T=j
t=s.b
if(!!J.Q(t).$ic9){if(t.a>=4){i=H.e(o.c,"$iaW")
o.c=null
b=o.bm(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ky(t,o)
return}}h=b.b
i=H.e(h.c,"$iaW")
h.c=null
b=h.bm(i)
t=s.a
p=s.b
if(!t){H.x(p,H.r(h,0))
h.a=4
h.c=p}else{H.e(p,"$iag")
h.a=8
h.c=p}u.a=h
t=h}},
mX:function(a,b){if(H.ef(a,{func:1,args:[P.J,P.ap]}))return H.k(a,{func:1,ret:null,args:[P.J,P.ap]})
if(H.ef(a,{func:1,args:[P.J]}))return H.k(a,{func:1,ret:null,args:[P.J]})
throw H.c(P.j7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mW:function(){var u,t
for(;u=$.bS,u!=null;){$.cJ=null
t=u.b
$.bS=t
if(t==null)$.cI=null
u.a.$0()}},
n0:function(){$.jt=!0
try{P.mW()}finally{$.cJ=null
$.jt=!1
if($.bS!=null)$.jJ().$1(P.kS())}},
kN:function(a){var u=new P.dV(H.k(a,{func:1,ret:-1}))
if($.bS==null){$.cI=u
$.bS=u
if(!$.jt)$.jJ().$1(P.kS())}else{$.cI.b=u
$.cI=u}},
n_:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bS
if(u==null){P.kN(a)
$.cJ=$.cI
return}t=new P.dV(a)
s=$.cJ
if(s==null){t.b=u
$.cJ=t
$.bS=t}else{t.b=s.b
s.b=t
$.cJ=t
if(t.b==null)$.cI=t}},
ns:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.T
if(C.l===t){P.iE(null,null,C.l,a)
return}t.toString
P.iE(null,null,t,H.k(t.cj(a),u))},
kk:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.T
if(t===C.l){t.toString
return P.jj(a,b)}return P.jj(a,H.k(t.cj(b),u))},
mm:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aS]}
H.k(b,u)
t=$.T
if(t===C.l){t.toString
return P.kl(a,b)}s=t.dQ(b,P.aS)
$.T.toString
return P.kl(a,H.k(s,u))},
iC:function(a,b,c,d,e){var u={}
u.a=d
P.n_(new P.iD(u,e))},
kK:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
kL:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
mY:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
iE:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cj(d):c.ju(d,-1)
P.kN(d)},
hH:function hH(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
e7:function e7(a){this.a=a
this.b=null
this.c=0},
ik:function ik(a,b){this.a=a
this.b=b},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hR:function hR(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a
this.b=null},
fT:function fT(){},
fV:function fV(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
ck:function ck(){},
fU:function fU(){},
aS:function aS(){},
ag:function ag(a,b){this.a=a
this.b=b},
iv:function iv(){},
iD:function iD(a,b){this.a=a
this.b=b},
i3:function i3(){},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function(a,b,c,d,e){return new H.aG([d,e])},
lW:function(a,b,c){H.ei(a)
return H.h(H.n9(a,new H.aG([b,c])),"$ik_",[b,c],"$ak_")},
k0:function(a,b){return new H.aG([a,b])},
df:function(a,b,c,d){return new P.i1([d])},
jp:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mC:function(a,b,c){var u=new P.e0(a,b,[c])
u.c=a.e
return u},
lP:function(a,b,c){var u,t
if(P.ju(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.cP()
C.a.h(t,a)
try{P.mV(a,u)}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}t=P.ki(b,H.kZ(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
jd:function(a,b,c){var u,t,s
if(P.ju(a))return b+"..."+c
u=new P.ae(b)
t=$.cP()
C.a.h(t,a)
try{s=u
s.a=P.ki(s.a,a,", ")}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ju:function(a){var u,t
for(u=0;t=$.cP(),u<t.length;++u)if(a===t[u])return!0
return!1},
mV:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.i(u.gK())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gK();++s
if(!u.C()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK();++s
for(;u.C();o=n,n=m){m=u.gK();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lX:function(a,b,c){var u=P.lV(null,null,null,b,c)
a.X(0,new P.f7(u,b,c))
return u},
k1:function(a,b){var u,t,s
u=P.df(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)u.h(0,H.x(a[s],b))
return u},
jh:function(a){var u,t
u={}
if(P.ju(a))return"{...}"
t=new P.ae("")
try{C.a.h($.cP(),a)
t.a+="{"
u.a=!0
a.X(0,new P.fb(u,t))
t.a+="}"}finally{u=$.cP()
if(0>=u.length)return H.d(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
i1:function i1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bP:function bP(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(){},
R:function R(){},
fa:function fa(){},
fb:function fb(a,b){this.a=a
this.b=b},
bH:function bH(){},
il:function il(){},
fc:function fc(){},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
i8:function i8(){},
e1:function e1(){},
ea:function ea(){},
mp:function(a,b,c,d){H.h(b,"$ia",[P.l],"$aa")
if(b instanceof Uint8Array)return P.mq(!1,b,c,d)
return},
mq:function(a,b,c,d){var u,t,s
u=$.lh()
if(u==null)return
t=0===c
if(t&&!0)return P.jm(u,b)
s=b.length
d=P.b4(c,d,s,null,null,null)
if(t&&d===s)return P.jm(u,b)
return P.jm(u,b.subarray(c,d))},
jm:function(a,b){if(P.ms(b))return
return P.mt(a,b)},
mt:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ac(t)}return},
ms:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mr:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ac(t)}return},
mZ:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.l],"$aa")
for(u=J.bX(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bP()
if((s&127)!==s)return t-b}return c-b},
jQ:function(a,b,c,d,e,f){if(C.f.bf(f,4)!==0)throw H.c(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
eo:function eo(a){this.a=a},
ep:function ep(a){this.a=a},
bx:function bx(){},
be:function be(){},
eG:function eG(){},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eU:function eU(a){this.a=a},
hp:function hp(a){this.a=a},
hr:function hr(){},
it:function it(a){this.b=this.a=0
this.c=a},
hq:function hq(a){this.a=a},
ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function(a,b,c){var u
H.k(b,{func:1,ret:P.l,args:[P.f]})
u=H.mb(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a0(a,null,null))},
lM:function(a){if(a instanceof H.c4)return a.i(0)
return"Instance of '"+H.bK(a)+"'"},
lY:function(a,b,c,d){var u,t
H.x(b,d)
u=J.lS(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
lZ:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gS(a);s.C();)C.a.h(t,H.x(s.gK(),c))
if(b)return t
return H.h(J.eY(t),"$ia",u,"$aa")},
dC:function(a,b,c){var u,t
u=P.l
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaE",[u],"$aaE")
t=a.length
c=P.b4(b,c,t,null,null,null)
return H.kd(b>0||c<t?C.a.fe(a,b,c):a)}if(!!J.Q(a).$ice)return H.md(a,b,P.b4(b,c,a.length,null,null,null))
return P.mk(a,b,c)},
mk:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.l],"$an")
if(b<0)throw H.c(P.a6(b,0,J.aB(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a6(c,b,J.aB(a),null,null))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.a6(b,0,s,null,null))
r=[]
if(u)for(;t.C();)r.push(t.gK())
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.a6(c,b,s,null,null))
r.push(t.gK())}return H.kd(r)},
mg:function(a,b,c){return new H.f0(a,H.lT(a,!1,!0,!1))},
ki:function(a,b,c){var u=J.bv(b)
if(!u.C())return a
if(c.length===0){do a+=H.i(u.gK())
while(u.C())}else{a+=H.i(u.gK())
for(;u.C();)a=a+c+H.i(u.gK())}return a},
ko:function(){var u=H.m3()
if(u!=null)return P.mo(u,0,null)
throw H.c(P.Z("'Uri.base' is not supported"))},
eb:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.l],"$aa")
if(c===C.m){u=$.ln().b
if(typeof b!=="string")H.q(H.aq(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.aa(c,"bx",0))
t=c.gjW().cp(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bL(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lI:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
jW:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lM(a)},
em:function(a){return new P.aC(!1,null,null,a)},
j7:function(a,b,c){return new P.aC(!0,a,b,c)},
dx:function(a,b,c){return new P.bM(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.bM(b,c,!0,a,d,"Invalid value")},
b4:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.c(P.a6(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a6(b,a,c,"end",f))
return b}return c},
bD:function(a,b,c,d,e){var u=H.ab(e==null?J.aB(b):e)
return new P.eW(b,u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hj(a)},
hh:function(a){return new P.hg(a)},
kh:function(a){return new P.bO(a)},
aY:function(a){return new P.ev(a)},
u:function(a){return new P.dY(a)},
a0:function(a,b,c){return new P.eQ(a,b,c)},
m_:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.l]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jF:function(a){H.nq(a)},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(t===0)return P.kn(b>0||c<c?C.b.u(a,b,c):a,5,null).geV()
else if(t===32)return P.kn(C.b.u(a,u,c),0,null).geV()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.l])
C.a.q(r,0,0)
s=b-1
C.a.q(r,1,s)
C.a.q(r,2,s)
C.a.q(r,7,s)
C.a.q(r,3,b)
C.a.q(r,4,b)
C.a.q(r,5,c)
C.a.q(r,6,c)
if(P.kM(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kY()
if(q>=b)if(P.kM(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Y()
if(typeof m!=="number")return H.B(m)
if(l<m)m=l
if(typeof n!=="number")return n.Y()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Y()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Y()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.ab(a,"..",n)))i=m>n+2&&C.b.ab(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.ab(a,"file",b)){if(p<=b){if(!C.b.ab(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aU(a,n,m,"/");++m;++l;++c}else{a=C.b.u(a,b,n)+"/"+C.b.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.ab(a,"http",b)){if(s&&o+3===n&&C.b.ab(a,"80",o+1))if(b===0&&!0){a=C.b.aU(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.u(a,b,o)+C.b.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.ab(a,"https",b)){if(s&&o+4===n&&C.b.ab(a,"443",o+1))if(b===0&&!0){a=C.b.aU(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.u(a,b,o)+C.b.u(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.ib(a,q,p,o,n,m,l,j)}return P.mF(a,b,c,q,p,o,n,m,l,j)},
kq:function(a,b){var u=P.f
return C.a.k5(H.b(a.split("&"),[u]),P.k0(u,u),new P.ho(b),[P.F,P.f,P.f])},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hl(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.Z(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eh(C.b.u(a,q,r),null,null)
if(typeof n!=="number")return n.f6()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.d(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eh(C.b.u(a,q,c),null,null)
if(typeof n!=="number")return n.f6()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.d(t,p)
t[p]=n
return t},
kp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hm(a)
t=new P.hn(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Z(a,r)
if(n===58){if(r===b){++r
if(C.b.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mn(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.f.aP(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
mF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mM(a,b,d)
else{if(d===b)P.cF(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mN(a,u,e-1):""
s=P.mJ(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.mL(P.eh(C.b.u(a,r,g),new P.im(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mK(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.jq(a,h+1,i,null):null
return new P.bQ(j,t,s,q,p,o,i<c?P.mI(a,i+1,c):null)},
kC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cF:function(a,b,c){throw H.c(P.a0(c,a,b))},
mL:function(a,b){if(a!=null&&a===P.kC(b))return
return a},
mJ:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.Z(a,u)!==93)P.cF(a,b,"Missing end `]` to match `[` in host")
P.kp(a,b+1,u)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
t=b
for(;t<c;++t)if(C.b.Z(a,t)===58){P.kp(a,b,c)
return"["+a+"]"}return P.mP(a,b,c)},
mP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Z(a,u)
if(q===37){p=P.kI(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ae("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ae("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cF(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kD(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mM:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kF(C.b.H(a,b)))P.cF(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cF(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.mG(t?a.toLowerCase():a)},
mG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mN:function(a,b,c){return P.cG(a,b,c,C.a7,!1)},
mK:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cG(a,b,c,C.K,!0):C.r.kZ(d,new P.io(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a4(r,"/"))r="/"+r
return P.mO(r,e,f)},
mO:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.mQ(a,!u||c)
return P.mR(a)},
jq:function(a,b,c,d){var u,t
u={}
H.h(d,"$iF",[P.f,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.em("Both query and queryParameters specified"))
return P.cG(a,b,c,C.u,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.X(0,new P.ip(new P.iq(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mI:function(a,b,c){return P.cG(a,b,c,C.u,!0)},
kI:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.Z(a,b+1)
s=C.b.Z(a,u)
r=H.iM(t)
q=H.iM(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aP(p,4)
if(u>=8)return H.d(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bL(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
kD:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.l])
C.a.q(t,0,37)
C.a.q(t,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.f.iG(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.b.H("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.b.H("0123456789ABCDEF",p&15))
q+=3}}return P.dC(t,0,null)},
cG:function(a,b,c,d,e){var u=P.kH(a,b,c,H.h(d,"$ia",[P.l],"$aa"),e)
return u==null?C.b.u(a,b,c):u},
kH:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.l],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.B(c)
if(!(t<c))break
c$0:{q=C.b.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kI(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cF(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kD(q)}}if(r==null)r=new P.ae("")
r.a+=C.b.u(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.B(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.b.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kG:function(a){if(C.b.a4(a,"."))return!0
return C.b.ep(a,"/.")!==-1},
mR:function(a){var u,t,s,r,q,p,o
if(!P.kG(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
mQ:function(a,b){var u,t,s,r,q,p
if(!P.kG(a))return!b?P.kE(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.q(u,0,P.kE(u[0]))}return C.a.l(u,"/")},
kE:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kF(J.lt(a,0)))for(t=1;t<u;++t){s=C.b.H(a,t)
if(s===58)return C.b.u(a,0,t)+"%3A"+C.b.ap(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.d(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mH:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.em("Invalid URL encoding"))}}return u},
jr:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.b.u(a,b,c)
else q=new H.t(C.b.u(a,b,c))}else{q=H.b([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.b.H(a,t)
if(s>127)throw H.c(P.em("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.em("Truncated URI"))
C.a.h(q,P.mH(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.l],"$aa")
return new P.hq(!1).cp(q)},
kF:function(a){var u=a|32
return 97<=u&&u<=122},
kn:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a0("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a0("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.b.ab(a,"base64",o+1))throw H.c(P.a0("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.ki(a,n,t)
else{m=P.kH(a,n,t,C.u,!0)
if(m!=null)a=C.b.aU(a,n,t,m)}return new P.hk(a,u,c)},
mT:function(){var u,t,s,r,q
u=P.m_(22,new P.iz(),!0,P.L)
t=new P.iy(u)
s=new P.iA()
r=new P.iB()
q=H.e(t.$2(0,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iL")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iL")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iL"),"]",5)
q=H.e(t.$2(9,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iL"),"az",21)
q=H.e(t.$2(21,245),"$iL")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kM:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.l],"$aa")
u=$.lo()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
M:function M(){},
ar:function ar(a,b){this.a=a
this.b=b},
p:function p(){},
aM:function aM(a){this.a=a},
eC:function eC(){},
eD:function eD(){},
bf:function bf(){},
ds:function ds(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eW:function eW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hj:function hj(a){this.a=a},
hg:function hg(a){this.a=a},
bO:function bO(a){this.a=a},
ev:function ev(a){this.a=a},
fv:function fv(){},
dB:function dB(){},
ez:function ez(a){this.a=a},
dY:function dY(a){this.a=a},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(){},
l:function l(){},
n:function n(){},
aN:function aN(){},
a:function a(){},
F:function F(){},
D:function D(){},
af:function af(){},
J:function J(){},
ap:function ap(){},
f:function f(){},
ae:function ae(a){this.a=a},
ho:function ho(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
hn:function hn(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
im:function im(a,b){this.a=a
this.b=b},
io:function io(){},
iq:function iq(a,b){this.a=a
this.b=b},
ip:function ip(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(){},
iy:function iy(a){this.a=a},
iA:function iA(){},
iB:function iB(){},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hM:function hM(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
n4:function(a,b){var u={}
a.X(0,new P.iF(u))
return u},
ic:function ic(){},
ie:function ie(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
id:function id(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
eN:function eN(){},
eO:function eO(){},
i0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i2:function i2(){},
ax:function ax(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ch:function ch(){},
o:function o(){},
L:function L(){},
cT:function cT(){},
d5:function d5(){},
dv:function dv(){},
bN:function bN(){},
dz:function dz(){},
dO:function dO(){}},W={
jP:function(a){var u=document.createElement("a")
return u},
jT:function(a,b){var u=document.createElement("canvas")
return u},
lK:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).af(u,a,b,c)
t.toString
u=W.A
u=new H.cx(new W.al(t),H.k(new W.eF(),{func:1,ret:P.M,args:[u]}),[u])
return H.e(u.gaJ(u),"$iN")},
lL:function(a){H.e(a,"$ibA")
return"wheel"},
c7:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lx(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ac(s)}return u},
lO:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$icb")
try{u.type=a}catch(s){H.ac(s)}return u},
i_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kA:function(a,b,c,d){var u,t
u=W.i_(W.i_(W.i_(W.i_(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u,t
u=W.kP(new W.hQ(c),W.m)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.m]})
if(t)J.ls(a,b,u,!1)}return new W.hP(a,b,u,!1,[e])},
kz:function(a){var u,t
u=W.jP(null)
t=window.location
u=new W.br(new W.i7(u,t))
u.fu(a)
return u},
mz:function(a,b,c,d){H.e(a,"$iN")
H.E(b)
H.E(c)
H.e(d,"$ibr")
return!0},
mA:function(a,b,c,d){var u,t,s
H.e(a,"$iN")
H.E(b)
H.E(c)
u=H.e(d,"$ibr").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kB:function(){var u,t,s,r,q
u=P.f
t=P.k1(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.ii(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.ih(t,P.df(null,null,null,u),P.df(null,null,null,u),P.df(null,null,null,u),null)
t.fH(null,new H.ff(C.A,r,[s,u]),q,null)
return t},
kP:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.l)return a
return u.dQ(a,b)},
w:function w(){},
cR:function cR(){},
el:function el(){},
c1:function c1(){},
bb:function bb(){},
bw:function bw(){},
bc:function bc(){},
c5:function c5(){},
ey:function ey(){},
aw:function aw(){},
c6:function c6(){},
eB:function eB(){},
d1:function d1(){},
d2:function d2(){},
hL:function hL(a,b){this.a=a
this.b=b},
N:function N(){},
eF:function eF(){},
m:function m(){},
bA:function bA(){},
eP:function eP(){},
d6:function d6(){},
d7:function d7(){},
bC:function bC(){},
d8:function d8(){},
cb:function cb(){},
aO:function aO(){},
dd:function dd(){},
dg:function dg(){},
a8:function a8(){},
al:function al(a){this.a=a},
A:function A(){},
cf:function cf(){},
dw:function dw(){},
fI:function fI(){},
aR:function aR(){},
dD:function dD(){},
dE:function dE(){},
fX:function fX(){},
cl:function cl(){},
aI:function aI(){},
aJ:function aJ(){},
h3:function h3(){},
bp:function bp(){},
aV:function aV(){},
cy:function cy(){},
cz:function cz(){},
dX:function dX(){},
e2:function e2(){},
hK:function hK(){},
hN:function hN(a){this.a=a},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hP:function hP(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hQ:function hQ(a){this.a=a},
br:function br(a){this.a=a},
as:function as(){},
dr:function dr(a){this.a=a},
fs:function fs(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(){},
i9:function i9(){},
ia:function ia(){},
ih:function ih(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ii:function ii(){},
ig:function ig(){},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(){},
i7:function i7(a,b){this.a=a
this.b=b},
ec:function ec(a){this.a=a},
iu:function iu(a){this.a=a},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
ee:function ee(){}},O={
j9:function(a){var u=new O.a_([a])
u.bV(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cd:function cd(){this.b=this.a=null},
k2:function(){var u,t,s
u=new O.dj()
u.sfT(O.j9(V.ai))
u.e.bg(u.ghu(),u.ghw())
t=new O.aP(u,"emission")
t.c=C.d
t.f=new V.V(0,0,0)
u.f=t
t=new O.aP(u,"ambient")
t.c=C.d
t.f=new V.V(0,0,0)
u.r=t
t=new O.aP(u,"diffuse")
t.c=C.d
t.f=new V.V(0,0,0)
u.x=t
t=new O.aP(u,"invDiffuse")
t.c=C.d
t.f=new V.V(0,0,0)
u.y=t
t=new O.fl(u,"specular")
t.c=C.d
t.f=new V.V(0,0,0)
t.ch=100
u.z=t
t=new O.fi(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aP(u,"reflect")
t.c=C.d
t.f=new V.V(0,0,0)
u.cx=t
t=new O.fk(u,"refract")
t.c=C.d
t.f=new V.V(0,0,0)
t.ch=1
u.cy=t
t=new O.fh(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.de()
t.bV(D.a1)
t.sfw(H.b([],[D.d0]))
t.sfz(H.b([],[D.du]))
t.sfA(H.b([],[D.bn]))
t.sfB(H.b([],[D.dH]))
t.sfC(H.b([],[D.dI]))
t.sfD(H.b([],[D.dJ]))
t.Q=null
t.ch=null
t.cX(t.ghs(),t.gi4(),t.gi8())
u.dx=t
s=t.Q
if(s==null){s=D.U()
t.Q=s
t=s}else t=s
t.h(0,u.giv())
t=u.dx
s=t.ch
if(s==null){s=D.U()
t.ch=s
t=s}else t=s
t.h(0,u.gfI())
u.dy=null
return u},
dj:function dj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fh:function fh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dk:function dk(){},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fk:function fk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bo:function bo(){}},E={
jb:function(a,b,c,d,e,f){var u=new E.ah()
u.a=d
u.b=!0
u.sft(0,O.j9(E.ah))
u.y.bg(u.gkj(),u.gkm())
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
u.saa(0,e)
u.sbc(f)
u.saS(c)
return u},
mh:function(a,b){var u=new E.fD(a,b)
u.fn(a,b)
return u},
ml:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibw)return E.kj(a,!0,!0,!0,!1)
t=W.jT(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gco(a).h(0,t)
r=E.kj(t,!0,!0,!0,!1)
r.a=a
return r},
kj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dK()
t=P.lW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.cT(a,"webgl",t)
s=H.e(s==null?C.q.cT(a,"experimental-webgl",t):s,"$ibN")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mh(s,a)
r=new T.fZ(s)
r.b=H.ab((s&&C.c).cV(s,3379))
r.c=H.ab(C.c.cV(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dR(a)
q=new X.f2()
q.c=new X.aH(!1,!1,!1)
q.sij(P.df(null,null,null,P.l))
r.b=q
q=new X.fm(r)
q.f=0
q.r=V.bl()
q.x=V.bl()
q.Q=1
q.ch=1
r.c=q
q=new X.f9(r)
q.r=0
q.x=V.bl()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.h2(r)
q.e=0
q.f=V.bl()
q.r=V.bl()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sh4(H.b([],[[P.ck,P.J]]))
q=r.z
p=document
o=W.a8
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a7(p,"contextmenu",H.k(r.ghG(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a7(a,"focus",H.k(r.ghM(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a7(a,"blur",H.k(r.ghy(),l),!1,m))
q=r.z
k=W.aO
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a7(p,"keyup",H.k(r.ghQ(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a7(p,"keydown",H.k(r.ghO(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a7(a,"mousedown",H.k(r.ghU(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a7(a,"mouseup",H.k(r.ghY(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a7(a,"mousemove",H.k(r.ghW(),n),!1,o))
k=r.z
j=W.aV;(k&&C.a).h(k,W.a7(a,H.E(W.lL(a)),H.k(r.gi_(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a7(p,"mousemove",H.k(r.ghI(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a7(p,"mouseup",H.k(r.ghK(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a7(p,"pointerlockchange",H.k(r.gi1(),l),!1,m))
m=r.z
l=W.aJ
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a7(a,"touchstart",H.k(r.gig(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a7(a,"touchend",H.k(r.gia(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a7(a,"touchmove",H.k(r.gic(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ar(Date.now(),!1)
u.cy=0
u.dA()
return u},
eq:function eq(){},
ah:function ah(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
dK:function dK(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a}},Z={
jn:function(a,b,c){var u
H.h(c,"$ia",[P.l],"$aa")
u=a.createBuffer()
C.c.av(a,b,u)
C.c.dS(a,b,new Int16Array(H.bR(c)),35044)
C.c.av(a,b,null)
return new Z.dU(b,u)},
ay:function(a){return new Z.aU(a)},
dU:function dU(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(a){this.a=a},
cV:function cV(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a){this.a=a}},D={
U:function(){var u=new D.bz()
u.saj(null)
u.sb_(null)
u.c=null
u.d=0
return u},
et:function et(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bE:function bE(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bF:function bF(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
K:function K(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
d0:function d0(){},
a1:function a1(){},
de:function de(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
du:function du(){},
bn:function bn(){var _=this
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){}},X={cW:function cW(a,b){this.a=a
this.b=b},dc:function dc(a,b){this.a=a
this.b=b},f2:function f2(){var _=this
_.d=_.c=_.b=_.a=null},dh:function dh(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},f9:function f9(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},bj:function bj(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fm:function fm(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fy:function fy(){},dM:function dM(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h2:function h2(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dR:function dR(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lN:function(a,b,c,d,e,f,g){var u,t
u=new X.eR()
t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kf
if(t==null){t=V.ke(0,0,1,1)
$.kf=t}u.r=t
return u},
cX:function cX(){},
eR:function eR(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){}},V={
nx:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bf(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.e.eQ(Math.abs(a-0)<$.H().a?0:a,b),c+b+1)},
bW:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.p],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.q(u,p,C.b.ah(u[p],s))}return u},
dm:function(){var u=$.k6
if(u==null){u=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.k6=u}return u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k5:function(a,b,c){return V.b2(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
k4:function(a,b,c,d){return V.b2(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
k3:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b2(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bl:function(){var u=$.ka
if(u==null){u=new V.a4(0,0)
$.ka=u}return u},
kb:function(){var u=$.bm
if(u==null){u=new V.W(0,0,0)
$.bm=u}return u},
ke:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dy(a,b,c,d)},
cw:function(){var u=$.kw
if(u==null){u=new V.C(0,0,0)
$.kw=u}return u},
kx:function(){var u=$.hs
if(u==null){u=new V.C(0,0,1)
$.hs=u}return u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
dl:function dl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
S:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.H(a,0)
t=C.b.H(b,0)
s=new V.fB()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.fJ()
u.fo(a)
return u},
h1:function(){var u,t
u=new V.h0()
t=P.f
u.siI(new H.aG([t,V.cj]))
u.siK(new H.aG([t,V.cm]))
u.c=null
return u},
aX:function aX(){},
at:function at(){},
di:function di(){},
ao:function ao(){this.a=null},
fB:function fB(){this.b=this.a=null},
fJ:function fJ(){this.a=null},
cj:function cj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b){this.a=a
this.b=b
this.c=null},
h0:function h0(){this.c=this.b=this.a=null},
cn:function cn(a){this.b=a
this.a=this.c=null},
nt:function(a){P.mm(C.U,new V.j0(a))},
mj:function(a,b){var u=new V.fN()
u.fq(a,!0)
return u},
bd:function bd(){},
j0:function j0(a){this.a=a},
eA:function eA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eS:function eS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eT:function eT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a,b){this.a=a
this.b=b
this.c=null},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(){this.b=this.a=null},
fP:function fP(a){this.a=a},
fO:function fO(a){this.a=a},
fQ:function fQ(a){this.a=a}},U={
jV:function(){var u=new U.eu()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
cZ:function(a){var u=new U.cY()
u.a=a
return u},
jc:function(a){var u=new U.ca()
u.bV(U.ad)
u.bg(u.gfE(),u.gi6())
u.e=null
u.f=V.dm()
u.r=0
return u},
kr:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.dS()
t=U.jV()
t.seY(0,!0)
t.seu(6.283185307179586)
t.sew(0)
t.sa3(0,0)
t.sev(100)
t.sa1(0)
t.sdU(0.5)
u.b=t
s=u.gbj()
t.gE().h(0,s)
t=U.jV()
t.seY(0,!0)
t.seu(6.283185307179586)
t.sew(0)
t.sa3(0,0)
t.sev(100)
t.sa1(0)
t.sdU(0.5)
u.c=t
t.gE().h(0,s)
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
r=new X.aH(b,!1,!1)
q=u.d
u.d=r
t=new D.K("modifiers",q,r,u,[X.aH])
t.b=!0
u.a_(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.K("invertX",t,!1,u,[P.M])
t.b=!0
u.a_(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.K("invertY",t,!1,u,[P.M])
t.b=!0
u.a_(t)}u.js(c)
return u},
eu:function eu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){this.b=this.a=null},
ca:function ca(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
dS:function dS(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d3:function d3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m0:function(a,b){var u,t
u=a.al
t=new A.fg(b,u)
t.fp(b,u)
t.fm(a,b)
return t},
jk:function(a,b,c,d,e){var u=new A.h8(a,b,c,e)
u.f=d
u.siV(P.lY(d,0,!1,P.l))
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a},
fg:function fg(a,b){var _=this
_.bt=_.dX=_.bs=_.al=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ec=_.ct=_.eb=_.bG=_.ea=_.e9=_.bF=_.bE=_.e8=_.e7=_.bD=_.bC=_.bB=_.e6=_.e5=_.bA=_.e4=_.e3=_.bz=_.e2=_.e1=_.by=_.bx=_.e0=_.e_=_.bw=_.bv=_.dZ=_.dY=_.bu=null
_.cA=_.eg=_.cz=_.ef=_.cw=_.ee=_.cv=_.ed=_.cu=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fj:function fj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ax=b3
_.al=b4
_.bs=b5},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cq:function cq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
cr:function cr(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ci:function ci(){},
by:function by(a,b){this.a=a
this.b=b},
dN:function dN(){},
he:function he(a){this.a=a},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jz:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a9,P.p,P.p]})
u=F.ji()
F.cH(u,b,c,d,a,1,0,0,1)
F.cH(u,b,c,d,a,0,1,0,3)
F.cH(u,b,c,d,a,0,0,1,2)
F.cH(u,b,c,d,a,-1,0,0,0)
F.cH(u,b,c,d,a,0,-1,0,0)
F.cH(u,b,c,d,a,0,0,-1,3)
u.aw()
return u},
ix:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cH:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a9,P.p,P.p]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.C(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.C(o+a3,n+a1,m+a2)
u.b=l
k=new V.C(o-a3,n-a1,m-a2)
u.c=k
j=new V.C(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.ix(t)
f=F.ix(u.b)
e=F.jH(d,a0,new F.iw(u,F.ix(u.c),F.ix(u.d),f,g,c),b)
if(e!=null)a.b9(e)},
kU:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.p,args:[P.p]})
if(a0<3)return
u=F.ji()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a9])
q=u.a
p=new V.C(0,0,t)
p=p.B(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jl(new V.aQ(a,-1,-1,-1),new V.aD(1,1,1,1),new V.W(0,0,d),new V.C(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.B(k)
j=new V.C(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dT(new V.aQ(a,-1,-1,-1),null,new V.aD(i,g,h,1),new V.W(m*k,l*k,d),new V.C(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jj(r)
return u},
jA:function(a,b,c,d,e,f){return F.n5(b,c,d,new F.iG(a,f),e)},
n5:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.jH(c,e,new F.iI(d),null)
if(u==null)return
u.aw()
u.ci()
if(b)u.b9(F.kU(3,!1,!1,1,new F.iJ(d),e))
if(a)u.b9(F.kU(1,!0,!1,-1,new F.iK(d),e))
return u},
nu:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.j1()
t=F.jz(a,null,new F.j2(u,c),d)
t.ci()
return t},
l4:function(a,b,c,d){return F.kT(c,a,d,b,new F.j3())},
nl:function(a,b,c,d,e,f){return F.kT(d,a,e,b,new F.iR(f,c))},
kT:function(a,b,c,d,e){var u=F.jH(a,b,new F.iH(H.k(e,{func:1,ret:V.W,args:[P.p]}),d,b,c),null)
if(u==null)return
u.aw()
u.ci()
return u},
jH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a9,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.ji()
t=H.b([],[F.a9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dT(null,null,new V.aD(p,0,0,1),null,null,new V.a4(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cq(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dT(null,null,new V.aD(j,i,h,1),null,null,new V.a4(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cq(d))}}u.d.jk(a+1,b+1,t)
return u},
c8:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
u.iB(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
lU:function(a,b){var u,t
u=new F.b1()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
ji:function(){var u,t
u=new F.dA()
t=new F.ht(u)
t.b=!1
t.siW(H.b([],[F.a9]))
u.a=t
t=new F.fM(u)
t.sc7(H.b([],[F.bk]))
u.b=t
t=new F.fL(u)
t.shd(H.b([],[F.b1]))
u.c=t
t=new F.fK(u)
t.sh5(H.b([],[F.a2]))
u.d=t
u.e=null
return u},
dT:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a9()
t=new F.hB(u)
t.sc7(H.b([],[F.bk]))
u.b=t
t=new F.hx(u)
s=[F.b1]
t.she(H.b([],s))
t.shf(H.b([],s))
u.c=t
t=new F.hu(u)
s=[F.a2]
t.sh6(H.b([],s))
t.sh7(H.b([],s))
t.sh8(H.b([],s))
u.d=t
h=$.li()
u.e=0
t=$.b8()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b7().a)!==0?e:null
u.x=(s&$.b6().a)!==0?b:null
u.y=(s&$.b9().a)!==0?f:null
u.z=(s&$.ba().a)!==0?g:null
u.Q=(s&$.lj().a)!==0?c:null
u.ch=(s&$.c0().a)!==0?i:0
u.cx=(s&$.b5().a)!==0?a:null
return u},
iw:function iw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iG:function iG(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
j1:function j1(){},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(){},
iR:function iR(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eL:function eL(){},
fR:function fR(){},
b1:function b1(){this.b=this.a=null},
f3:function f3(){},
h7:function h7(){},
bk:function bk(){this.a=null},
dA:function dA(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(a){this.a=a
this.b=null},
fL:function fL(a){this.a=a
this.b=null},
fM:function fM(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){this.a=a},
hC:function hC(a){this.a=a},
ht:function ht(a){this.a=a
this.c=this.b=null},
hu:function hu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a
this.c=this.b=null},
hz:function hz(){},
hy:function hy(){},
hA:function hA(){},
ft:function ft(){},
hB:function hB(a){this.a=a
this.b=null}},T={dG:function dG(){},fZ:function fZ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},N={
l_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.mj("Test 024",!0)
t=W.jT(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.D(u.a,t)
s=[P.f]
u.dJ(H.b(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],s))
u.ji(H.b(["shapes"],s))
u.dJ(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.cU(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.ml(r,!0,!0,!0,!1)
p=U.jc(null)
p.h(0,U.cZ(V.k5(0,0,-2.5)))
p.h(0,U.kr(!1,!0,q.r,!1,!1,!1,null,!1))
o=new V.V(1,1,1)
n=new D.bn()
n.d=new V.V(1,1,1)
n.e=3.141592653589793
n.f=3.141592653589793
n.r=1
n.x=0
n.y=0
n.a=V.kb()
n.b=V.kx()
m=n.c
n.c=p
p.gE().h(0,n.ghA())
l=new D.K("mover",m,n.c,n,[U.ad])
l.b=!0
n.a8(l)
if(!n.d.v(0,o)){m=n.d
n.d=o
l=new D.K("color",m,o,n,[V.V])
l.b=!0
n.a8(l)}l=n.e
if(!(Math.abs(l-0.6)<$.H().a)){n.e=0.6
l=new D.K("cutoff",l,0.6,n,[P.p])
l.b=!0
n.a8(l)}l=n.f
if(!(Math.abs(l-0.5)<$.H().a)){n.f=0.5
l=new D.K("coneAngle",l,0.5,n,[P.p])
l.b=!0
n.a8(l)}l=n.r
if(!(Math.abs(l-0.5)<$.H().a)){n.r=0.5
l=new D.K("attenuation0",l,0.5,n,[P.p])
l.b=!0
n.a8(l)}l=n.x
if(!(Math.abs(l-0.05)<$.H().a)){n.x=0.05
l=new D.K("attenuation1",l,0.05,n,[P.p])
l.b=!0
n.a8(l)}k=O.k2()
k.dx.h(0,n)
k.f.sae(0,new V.V(0,0,0))
l=k.r
l.sae(0,new V.V(0,0,0))
l=k.x
l.sae(0,new V.V(0.7,0.7,0.7))
l=k.z
l.sae(0,new V.V(0.3,0.3,0.3))
l=k.z
if(l.c===C.d){l.c=C.j
l.bU()
l.cc(100)
j=l.a
j.a=null
j.ac(null)}l.cc(100)
i=E.jb(null,!0,null,"",null,null)
i.saa(0,F.l4(30,1,15,0.5))
h=E.jb(null,!0,null,"",null,null)
h.saS(U.cZ(V.k4(3,3,3,1)))
l=F.jz(1,null,null,1)
l.cB()
h.saa(0,l)
g=U.jc(null)
g.h(0,U.kr(!1,!1,q.r,!1,!1,!1,null,!1))
g.h(0,U.cZ(V.k3(3.141592653589793)))
g.h(0,U.cZ(V.k5(0,0,5)))
f=E.jb(null,!0,null,"",null,null)
l=U.jc(null)
l.h(0,U.cZ(V.k4(0.1,0.1,0.1,1)))
l.h(0,p)
f.saS(l)
f.saa(0,F.jA(0,!1,!0,1,40,1))
l=O.k2()
l.f.sae(0,new V.V(1,1,1))
f.sbc(l)
l=new M.d3()
l.sfW(0,O.j9(E.ah))
l.d.bg(l.ghC(),l.ghE())
l.e=null
l.f=null
l.r=null
l.x=null
e=X.lN(!0,!0,!1,null,2000,null,0)
d=new X.dt()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saS(null)
j=d.c
if(!(Math.abs(j-1.0471975511965976)<$.H().a)){d.c=1.0471975511965976
j=new D.K("fov",j,1.0471975511965976,d,[P.p])
j.b=!0
d.aL(j)}j=d.d
if(!(Math.abs(j-0.1)<$.H().a)){d.d=0.1
j=new D.K("near",j,0.1,d,[P.p])
j.b=!0
d.aL(j)}j=d.e
if(!(Math.abs(j-2000)<$.H().a)){d.e=2000
j=new D.K("far",j,2000,d,[P.p])
j.b=!0
d.aL(j)}j=l.a
if(j!==d){if(j!=null)j.gE().L(0,l.gar())
m=l.a
l.a=d
d.gE().h(0,l.gar())
j=new D.K("camera",m,l.a,l,[X.cX])
j.b=!0
l.aC(j)}j=l.b
if(j!==e){if(j!=null)j.gE().L(0,l.gar())
m=l.b
l.b=e
e.gE().h(0,l.gar())
j=new D.K("target",m,l.b,l,[X.dF])
j.b=!0
l.aC(j)}l.sbc(null)
l.sbc(k)
l.d.h(0,i)
l.d.h(0,h)
l.d.h(0,f)
l.a.saS(g)
j=q.d
if(j!==l){if(j!=null)j.gE().L(0,q.gd_())
q.d=l
l.gE().h(0,q.gd_())
q.d0()}l=new V.fz("shapes",!0)
s=C.z.cU(s,"shapes")
l.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
l.b2(0,"Cube",new N.iS(i))
l.b2(0,"Cylinder",new N.iT(i))
l.b2(0,"Cone",new N.iU(i))
l.b2(0,"Sphere",new N.iV(i))
l.dH(0,"Toroid",new N.iW(i),!0)
l.b2(0,"Knot",new N.iX(i))
s=q.z
if(s==null){s=D.U()
q.z=s}l={func:1,ret:-1,args:[D.z]}
j=H.k(new N.iY(u,k),l)
if(s.b==null)s.sb_(H.b([],[l]))
s=s.b;(s&&C.a).h(s,j)
V.nt(q)},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jf.prototype={}
J.a3.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cg(a)},
i:function(a){return"Instance of '"+H.bK(a)+"'"}}
J.eZ.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iM:1}
J.da.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iD:1}
J.db.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.fw.prototype={}
J.bq.prototype={}
J.b0.prototype={
i:function(a){var u=a[$.l6()]
if(u==null)return this.fh(a)
return"JavaScript function for "+H.i(J.am(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibg:1}
J.aE.prototype={
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.Z("add"))
a.push(b)},
kB:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dx(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.aY(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.i(a[t]))
return u.join(b)},
kd:function(a){return this.l(a,"")},
k5:function(a,b,c,d){var u,t,s
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.aY(a))}return t},
k0:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.M,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.aY(a))}throw H.c(H.eX())},
k_:function(a,b){return this.k0(a,b,null)},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
fe:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a6(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a6(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gjZ:function(a){if(a.length>0)return a[0]
throw H.c(H.eX())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.eX())},
fc:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.q(P.Z("setRange"))
P.b4(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bX(d)
if(e+t>u.gm(d))throw H.c(H.lQ())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bh:function(a,b,c,d){return this.fc(a,b,c,d,0)},
dK:function(a,b){var u,t
H.k(b,{func:1,ret:P.M,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.aY(a))}return!1},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.jd(a,"[","]")},
gS:function(a){return new J.an(a,a.length,0,[H.r(a,0)])},
gJ:function(a){return H.cg(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.Z("set length"))
if(b<0)throw H.c(P.a6(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bV(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bV(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bh(u,0,a.length,a)
this.bh(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.je.prototype={}
J.an.prototype={
gK:function(){return this.d},
C:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.y(u))
s=this.c
if(s>=t){this.sdh(null)
return!1}this.sdh(u[s]);++this.c
return!0},
sdh:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
J.bi.prototype={
ei:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Z(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Z(""+a+".round()"))},
eQ:function(a,b){var u,t
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
be:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.Z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.F("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.aq(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aq(b))
return a-b},
F:function(a,b){if(typeof b!=="number")throw H.c(H.aq(b))
return a*b},
bf:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fl:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Z("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var u
if(a>0)u=this.dC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iG:function(a,b){if(b<0)throw H.c(H.aq(b))
return this.dC(a,b)},
dC:function(a,b){return b>31?0:a>>>b},
$ip:1,
$iaf:1}
J.d9.prototype={$il:1}
J.f_.prototype={}
J.b_.prototype={
Z:function(a,b){if(b<0)throw H.c(H.bV(a,b))
if(b>=a.length)H.q(H.bV(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bV(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.j7(b,null,null))
return a+b},
aU:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aq(b))
c=P.b4(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.aq(c))
if(typeof c!=="number")return c.Y()
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.ab(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aq(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.dx(b,null,null))
if(b>c)throw H.c(P.dx(b,null,null))
if(c>a.length)throw H.c(P.dx(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.u(a,b,null)},
kP:function(a){return a.toLowerCase()},
F:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kr:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.F(c,u)+a},
ah:function(a,b){return this.kr(a,b," ")},
eq:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ep:function(a,b){return this.eq(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ik8:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.b.Z(this.a,b)},
$acv:function(){return[P.l]},
$aR:function(){return[P.l]},
$an:function(){return[P.l]},
$aa:function(){return[P.l]}}
H.eE.prototype={}
H.bG.prototype={
gS:function(a){return new H.cc(this,this.gm(this),0,[H.aa(this,"bG",0)])},
bN:function(a,b){return this.fg(0,H.k(b,{func:1,ret:P.M,args:[H.aa(this,"bG",0)]}))}}
H.cc.prototype={
gK:function(){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.bX(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.aY(u))
r=this.c
if(r>=s){this.saY(null)
return!1}this.saY(t.a7(u,r));++this.c
return!0},
saY:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.fd.prototype={
gS:function(a){return new H.fe(J.bv(this.a),this.b,this.$ti)},
gm:function(a){return J.aB(this.a)},
a7:function(a,b){return this.b.$1(J.ek(this.a,b))},
$an:function(a,b){return[b]}}
H.fe.prototype={
C:function(){var u=this.b
if(u.C()){this.saY(this.c.$1(u.gK()))
return!0}this.saY(null)
return!1},
gK:function(){return this.a},
saY:function(a){this.a=H.x(a,H.r(this,1))},
$aaN:function(a,b){return[b]}}
H.ff.prototype={
gm:function(a){return J.aB(this.a)},
a7:function(a,b){return this.b.$1(J.ek(this.a,b))},
$abG:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cx.prototype={
gS:function(a){return new H.hF(J.bv(this.a),this.b,this.$ti)}}
H.hF.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gK()))return!0
return!1},
gK:function(){return this.a.gK()}}
H.bB.prototype={}
H.cv.prototype={
q:function(a,b,c){H.x(c,H.aa(this,"cv",0))
throw H.c(P.Z("Cannot modify an unmodifiable list"))}}
H.dP.prototype={}
H.ew.prototype={
i:function(a){return P.jh(this)},
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
return H.lH()},
$iF:1}
H.ex.prototype={
gm:function(a){return this.a},
bq:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bq(b))return
return this.di(b)},
di:function(a){return this.b[H.E(a)]},
X:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.di(q),u))}}}
H.fC.prototype={}
H.h4.prototype={
ag:function(a){var u,t,s
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
H.fu.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f1.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.hi.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j4.prototype={
$1:function(a){if(!!J.Q(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.e6.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iap:1}
H.c4.prototype={
i:function(a){return"Closure '"+H.bK(this).trim()+"'"},
$ibg:1,
gkX:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fY.prototype={}
H.fS.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c_(u)+"'"}}
H.c2.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cg(this.a)
else t=typeof u!=="object"?J.cQ(u):H.cg(u)
return(t^H.cg(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bK(u)+"'")}}
H.h6.prototype={
i:function(a){return this.a}}
H.es.prototype={
i:function(a){return this.a}}
H.fH.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aG.prototype={
gm:function(a){return this.a},
gkc:function(a){return this.a===0},
gay:function(){return new H.f5(this,[H.r(this,0)])},
bq:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.de(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.de(t,a)}else return this.k9(a)},
k9:function(a){var u=this.d
if(u==null)return!1
return this.cE(this.c1(u,this.cD(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bk(r,b)
s=t==null?null:t.b
return s}else return this.ka(b)},
ka:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c1(u,this.cD(a))
s=this.cE(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c5()
this.b=u}this.d3(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c5()
this.c=t}this.d3(t,b,c)}else this.kb(b,c)},
kb:function(a,b){var u,t,s,r
H.x(a,H.r(this,0))
H.x(b,H.r(this,1))
u=this.d
if(u==null){u=this.c5()
this.d=u}t=this.cD(a)
s=this.c1(u,t)
if(s==null)this.cd(u,t,[this.bW(a,b)])
else{r=this.cE(s,a)
if(r>=0)s[r].b=b
else s.push(this.bW(a,b))}},
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.aY(this))
u=u.c}},
d3:function(a,b,c){var u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
u=this.bk(a,b)
if(u==null)this.cd(a,b,this.bW(b,c))
else u.b=c},
fN:function(){this.r=this.r+1&67108863},
bW:function(a,b){var u,t
u=new H.f4(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fN()
return u},
cD:function(a){return J.cQ(a)&0x3ffffff},
cE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.jh(this)},
bk:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
h0:function(a,b){delete a[b]},
de:function(a,b){return this.bk(a,b)!=null},
c5:function(){var u=Object.create(null)
this.cd(u,"<non-identifier-key>",u)
this.h0(u,"<non-identifier-key>")
return u},
$ik_:1}
H.f4.prototype={}
H.f5.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.f6(u,u.r,this.$ti)
t.c=u.e
return t}}
H.f6.prototype={
gK:function(){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aY(u))
else{u=this.c
if(u==null){this.sd4(null)
return!1}else{this.sd4(u.a)
this.c=this.c.c
return!0}}},
sd4:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
H.iN.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.iO.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.iP.prototype={
$1:function(a){return this.a(H.E(a))},
$S:50}
H.f0.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik8:1,
$imf:1}
H.bI.prototype={$ibI:1}
H.dn.prototype={
gm:function(a){return a.length},
$iaF:1,
$aaF:function(){}}
H.dp.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]},
q:function(a,b,c){H.n7(c)
H.bs(b,a,a.length)
a[b]=c},
$abB:function(){return[P.p]},
$aR:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]},
$ia:1,
$aa:function(){return[P.p]}}
H.dq.prototype={
q:function(a,b,c){H.ab(c)
H.bs(b,a,a.length)
a[b]=c},
$abB:function(){return[P.l]},
$aR:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
H.fn.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fo.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fp.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fq.prototype={
k:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.ce.prototype={
gm:function(a){return a.length},
k:function(a,b){H.bs(b,a,a.length)
return a[b]},
$ice:1,
$iL:1}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
P.hH.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:28}
P.hG.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.hI.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hJ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e7.prototype={
fK:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bU(new P.ik(this,b),0),a)
else throw H.c(P.Z("`setTimeout()` not found."))},
fL:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bU(new P.ij(this,a,Date.now(),b),0),a)
else throw H.c(P.Z("Periodic timer."))},
$iaS:1}
P.ik.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.ij.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fl(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aW.prototype={
kg:function(a){if(this.c!==6)return!0
return this.b.b.cQ(H.k(this.d,{func:1,ret:P.M,args:[P.J]}),a.a,P.M,P.J)},
k8:function(a){var u,t,s,r
u=this.e
t=P.J
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.ef(u,{func:1,args:[P.J,P.ap]}))return H.jB(r.kI(u,a.a,a.b,null,t,P.ap),s)
else return H.jB(r.cQ(H.k(u,{func:1,args:[P.J]}),a.a,null,t),s)}}
P.az.prototype={
eP:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.T
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mX(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.az(0,$.T,[c])
r=b==null?1:3
this.d6(new P.aW(s,r,a,b,[u,c]))
return s},
kM:function(a,b){return this.eP(a,null,b)},
d6:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaW")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaz")
u=t.a
if(u<4){t.d6(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iE(null,null,u,H.k(new P.hR(this,a),{func:1,ret:-1}))}},
dw:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaW")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaz")
t=p.a
if(t<4){p.dw(a)
return}this.a=t
this.c=p.c}u.a=this.bm(a)
t=this.b
t.toString
P.iE(null,null,t,H.k(new P.hV(u,this),{func:1,ret:-1}))}},
c9:function(){var u=H.e(this.c,"$iaW")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d9:function(a){var u,t,s
u=H.r(this,0)
H.jB(a,{futureOr:1,type:u})
t=this.$ti
if(H.cK(a,"$ic9",t,"$ac9"))if(H.cK(a,"$iaz",t,null))P.ky(a,this)
else P.my(a,this)
else{s=this.c9()
H.x(a,u)
this.a=4
this.c=a
P.cA(this,s)}},
da:function(a,b){var u
H.e(b,"$iap")
u=this.c9()
this.a=8
this.c=new P.ag(a,b)
P.cA(this,u)},
$ic9:1}
P.hR.prototype={
$0:function(){P.cA(this.a,this.b)},
$S:0}
P.hV.prototype={
$0:function(){P.cA(this.b,this.a.a)},
$S:0}
P.hS.prototype={
$1:function(a){var u=this.a
u.a=0
u.d9(a)},
$S:28}
P.hT.prototype={
$2:function(a,b){H.e(b,"$iap")
this.a.da(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.hU.prototype={
$0:function(){this.a.da(this.b,this.c)},
$S:0}
P.hY.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eN(H.k(r.d,{func:1}),null)}catch(q){t=H.ac(q)
s=H.bY(q)
if(this.d){r=H.e(this.a.a.c,"$iag").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iag")
else p.b=new P.ag(t,s)
p.a=!0
return}if(!!J.Q(u).$ic9){if(u instanceof P.az&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iag")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kM(new P.hZ(o),null)
r.a=!1}},
$S:3}
P.hZ.prototype={
$1:function(a){return this.a},
$S:46}
P.hX.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.x(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cQ(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ac(o)
t=H.bY(o)
s=this.a
s.b=new P.ag(u,t)
s.a=!0}},
$S:3}
P.hW.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iag")
r=this.c
if(r.kg(u)&&r.e!=null){q=this.b
q.b=r.k8(u)
q.a=!1}}catch(p){t=H.ac(p)
s=H.bY(p)
r=H.e(this.a.a.c,"$iag")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ag(t,s)
n.a=!0}},
$S:3}
P.dV.prototype={}
P.fT.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.az(0,$.T,[P.l])
u.a=0
s=H.r(this,0)
r=H.k(new P.fV(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.fW(u,t),{func:1,ret:-1})
W.a7(this.a,this.b,r,!1,s)
return t}}
P.fV.prototype={
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.r(this.b,0)]}}}
P.fW.prototype={
$0:function(){this.b.d9(this.a.a)},
$S:0}
P.ck.prototype={}
P.fU.prototype={}
P.aS.prototype={}
P.ag.prototype={
i:function(a){return H.i(this.a)},
$ibf:1}
P.iv.prototype={$io6:1}
P.iD.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.ds()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.i3.prototype={
kJ:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.T){a.$0()
return}P.kK(null,null,this,a,-1)}catch(s){u=H.ac(s)
t=H.bY(s)
P.iC(null,null,this,u,H.e(t,"$iap"))}},
kK:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.T){a.$1(b)
return}P.kL(null,null,this,a,b,-1,c)}catch(s){u=H.ac(s)
t=H.bY(s)
P.iC(null,null,this,u,H.e(t,"$iap"))}},
ju:function(a,b){return new P.i5(this,H.k(a,{func:1,ret:b}),b)},
cj:function(a){return new P.i4(this,H.k(a,{func:1,ret:-1}))},
dQ:function(a,b){return new P.i6(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eN:function(a,b){H.k(a,{func:1,ret:b})
if($.T===C.l)return a.$0()
return P.kK(null,null,this,a,b)},
cQ:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.T===C.l)return a.$1(b)
return P.kL(null,null,this,a,b,c,d)},
kI:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.T===C.l)return a.$2(b,c)
return P.mY(null,null,this,a,b,c,d,e,f)}}
P.i5.prototype={
$0:function(){return this.a.eN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.i4.prototype={
$0:function(){return this.a.kJ(this.b)},
$S:3}
P.i6.prototype={
$1:function(a){var u=this.c
return this.a.kK(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i1.prototype={
gS:function(a){var u=new P.e0(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ibP")!=null}else{t=this.fX(b)
return t}},
fX:function(a){var u=this.d
if(u==null)return!1
return this.c_(this.dj(u,a),a)>=0},
h:function(a,b){var u,t
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jp()
this.b=u}return this.d5(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jp()
this.c=t}return this.d5(t,b)}else return this.fO(b)},
fO:function(a){var u,t,s
H.x(a,H.r(this,0))
u=this.d
if(u==null){u=P.jp()
this.d=u}t=this.dc(a)
s=u[t]
if(s==null)u[t]=[this.c6(a)]
else{if(this.c_(s,a)>=0)return!1
s.push(this.c6(a))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ip(this.c,b)
else return this.il(b)},
il:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dj(u,a)
s=this.c_(t,a)
if(s<0)return!1
this.dE(t.splice(s,1)[0])
return!0},
d5:function(a,b){H.x(b,H.r(this,0))
if(H.e(a[b],"$ibP")!=null)return!1
a[b]=this.c6(b)
return!0},
ip:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ibP")
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
dq:function(){this.r=1073741823&this.r+1},
c6:function(a){var u,t
u=new P.bP(H.x(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dq()
return u},
dE:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dq()},
dc:function(a){return J.cQ(a)&1073741823},
dj:function(a,b){return a[this.dc(b)]},
c_:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.bP.prototype={}
P.e0.prototype={
gK:function(){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.aY(u))
else{u=this.c
if(u==null){this.sd8(null)
return!1}else{this.sd8(H.x(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sd8:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
P.f7.prototype={
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))},
$S:7}
P.f8.prototype={$in:1,$ia:1}
P.R.prototype={
gS:function(a){return new H.cc(a,this.gm(a),0,[H.cM(this,a,"R",0)])},
a7:function(a,b){return this.k(a,b)},
kO:function(a,b){var u,t
u=H.b([],[H.cM(this,a,"R",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
kN:function(a){return this.kO(a,!0)},
n:function(a,b){var u,t
u=[H.cM(this,a,"R",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bh(t,0,this.gm(a),a)
C.a.bh(t,this.gm(a),t.length,b)
return t},
jX:function(a,b,c,d){var u
H.x(d,H.cM(this,a,"R",0))
P.b4(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jd(a,"[","]")}}
P.fa.prototype={}
P.fb.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:7}
P.bH.prototype={
X:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.aa(this,"bH",0),H.aa(this,"bH",1)]})
for(u=J.bv(this.gay());u.C();){t=u.gK()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aB(this.gay())},
i:function(a){return P.jh(this)},
$iF:1}
P.il.prototype={
q:function(a,b,c){H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
throw H.c(P.Z("Cannot modify unmodifiable map"))}}
P.fc.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.r(this,0)),H.x(c,H.r(this,1)))},
X:function(a,b){this.a.X(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.am(this.a)},
$iF:1}
P.dQ.prototype={}
P.i8.prototype={
at:function(a,b){var u
for(u=J.bv(H.h(b,"$in",this.$ti,"$an"));u.C();)this.h(0,u.gK())},
i:function(a){return P.jd(this,"{","}")},
a7:function(a,b){var u,t,s
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(u=P.mC(this,this.r,H.r(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
$in:1,
$ikg:1}
P.e1.prototype={}
P.ea.prototype={}
P.eo.prototype={
ki:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b4(b,c,a.length,null,null,null)
u=$.ll()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.b.H(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iM(C.b.H(a,n))
j=H.iM(C.b.H(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ae("")
g=r.a+=C.b.u(a,s,t)
r.a=g+H.bL(m)
s=n
continue}}throw H.c(P.a0("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.b.u(a,s,c)
f=g.length
if(q>=0)P.jQ(a,p,c,q,o,f)
else{e=C.f.bf(f-1,4)+1
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aU(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jQ(a,p,c,q,o,d)
else{e=C.f.bf(d,4)
if(e===1)throw H.c(P.a0("Invalid base64 encoding length ",a,c))
if(e>1)a=C.b.aU(a,c,c,e===2?"==":"=")}return a},
$abx:function(){return[[P.a,P.l],P.f]}}
P.ep.prototype={
$abe:function(){return[[P.a,P.l],P.f]}}
P.bx.prototype={}
P.be.prototype={}
P.eG.prototype={
$abx:function(){return[P.f,[P.a,P.l]]}}
P.eV.prototype={
i:function(a){return this.a}}
P.eU.prototype={
fY:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.ae("")
if(r>b)q.a+=C.b.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lA(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abe:function(){return[P.f,P.f]}}
P.hp.prototype={
gjW:function(){return C.S}}
P.hr.prototype={
b3:function(a,b,c){var u,t,s
c=P.b4(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.it(t)
if(s.h9(a,b,c)!==c)s.dG(J.lu(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mS(0,s.b,t.length)))},
cp:function(a){return this.b3(a,0,null)},
$abe:function(){return[P.f,[P.a,P.l]]}}
P.it.prototype={
dG:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.d(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.d(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.d(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.d(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.d(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.d(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.d(u,t)
u[t]=128|a&63
return!1}},
h9:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dG(r,C.b.H(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.hq.prototype={
b3:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
u=P.mp(!1,a,b,c)
if(u!=null)return u
c=P.b4(b,c,J.aB(a),null,null,null)
t=new P.ae("")
s=new P.ir(!1,t)
s.b3(a,b,c)
if(s.e>0){H.q(P.a0("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bL(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cp:function(a){return this.b3(a,0,null)},
$abe:function(){return[[P.a,P.l],P.f]}}
P.ir.prototype={
b3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.l],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.is(this,b,c,a)
$label0$0:for(q=J.bX(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bP()
if((n&192)!==128){m=P.a0("Bad UTF-8 encoding 0x"+C.f.be(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.d(C.G,m)
if(u<=C.G[m]){m=P.a0("Overlong encoding of 0x"+C.f.be(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a0("Character outside valid Unicode range: 0x"+C.f.be(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bL(u)
this.c=!1}for(m=o<c;m;){l=P.mZ(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Y()
if(n<0){i=P.a0("Negative UTF-8 code unit: -0x"+C.f.be(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a0("Bad UTF-8 encoding 0x"+C.f.be(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.is.prototype={
$2:function(a,b){this.a.b.a+=P.dC(this.d,a,b)},
$S:45}
P.M.prototype={}
P.ar.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ar&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aP(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lI(H.ma(this))
t=P.d_(H.m8(this))
s=P.d_(H.m4(this))
r=P.d_(H.m5(this))
q=P.d_(H.m7(this))
p=P.d_(H.m9(this))
o=P.lJ(H.m6(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.p.prototype={}
P.aM.prototype={
n:function(a,b){return new P.aM(C.f.n(this.a,b.gh2()))},
t:function(a,b){return new P.aM(C.f.t(this.a,b.gh2()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eD()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.f.a5(t,6e7)%60)
r=u.$1(C.f.a5(t,1e6)%60)
q=new P.eC().$1(t%1e6)
return""+C.f.a5(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.eC.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:27}
P.eD.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:27}
P.bf.prototype={}
P.ds.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbZ()+t+s
if(!this.a)return r
q=this.gbY()
p=P.eI(this.b)
return r+q+": "+p}}
P.bM.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.eW.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var u,t
u=H.ab(this.b)
if(typeof u!=="number")return u.Y()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gm:function(a){return this.f}}
P.hj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hg.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ev.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eI(u)+"."}}
P.fv.prototype={
i:function(a){return"Out of Memory"},
$ibf:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibf:1}
P.ez.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dY.prototype={
i:function(a){return"Exception: "+this.a}}
P.eQ.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.Z(r,m)
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
g=""}f=C.b.u(r,i,j)
return t+h+f+g+"\n"+C.b.F(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.bg.prototype={}
P.l.prototype={}
P.n.prototype={
bN:function(a,b){var u=H.aa(this,"n",0)
return new H.cx(this,H.k(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gS(this)
for(t=0;u.C();)++t
return t},
gaJ:function(a){var u,t
u=this.gS(this)
if(!u.C())throw H.c(H.eX())
t=u.gK()
if(u.C())throw H.c(H.lR())
return t},
a7:function(a,b){var u,t,s
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.C();){s=u.gK()
if(b===t)return s;++t}throw H.c(P.bD(b,this,"index",null,t))},
i:function(a){return P.lP(this,"(",")")}}
P.aN.prototype={}
P.a.prototype={$in:1}
P.F.prototype={}
P.D.prototype={
gJ:function(a){return P.J.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.af.prototype={}
P.J.prototype={constructor:P.J,$iJ:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cg(this)},
i:function(a){return"Instance of '"+H.bK(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.f.prototype={$ik8:1}
P.ae.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inH:1}
P.ho.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iF",[u,u],"$aF")
H.E(b)
t=J.cL(b).ep(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jr(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.u(b,0,t)
r=C.b.ap(b,t+1)
u=this.a
a.q(0,P.jr(s,0,s.length,u,!0),P.jr(r,0,r.length,u,!0))}return a},
$S:43}
P.hl.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.hm.prototype={
$2:function(a,b){throw H.c(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hn.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eh(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.bQ.prototype={
geX:function(){return this.b},
gcC:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbJ:function(a){var u=this.d
if(u==null)return P.kC(this.a)
return u},
gcK:function(){var u=this.f
return u==null?"":u},
gek:function(){var u=this.r
return u==null?"":u},
cP:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iF",[P.f,null],"$aF")
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
if(s&&!C.b.a4(d,"/"))d="/"+d
g=P.jq(g,0,0,h)
return new P.bQ(i,j,c,f,d,g,this.r)},
eL:function(a,b){return this.cP(a,null,null,null,null,null,null,b,null,null)},
gcL:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.sik(new P.dQ(P.kq(u==null?"":u,C.m),[t,t]))}return this.Q},
gel:function(){return this.c!=null},
geo:function(){return this.f!=null},
gem:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.i(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.i(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.i(t)}else u=t
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
if(!!J.Q(b).$ijl)if(this.a==b.gbS())if(this.c!=null===b.gel())if(this.b==b.geX())if(this.gcC(this)==b.gcC(b))if(this.gbJ(this)==b.gbJ(b))if(this.e===b.geH(b)){u=this.f
t=u==null
if(!t===b.geo()){if(t)u=""
if(u===b.gcK()){u=this.r
t=u==null
if(!t===b.gem()){if(t)u=""
u=u===b.gek()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
if(u==null){u=C.b.gJ(this.i(0))
this.z=u}return u},
sik:function(a){var u=P.f
this.Q=H.h(a,"$iF",[u,u],"$aF")},
$ijl:1,
gbS:function(){return this.a},
geH:function(a){return this.e}}
P.im.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a0("Invalid port",this.a,u+1))},
$S:39}
P.io.prototype={
$1:function(a){return P.eb(C.a8,a,C.m,!1)},
$S:13}
P.iq.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.eb(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.eb(C.w,b,C.m,!0))}},
$S:37}
P.ip.prototype={
$2:function(a,b){var u,t
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(u=J.bv(H.kZ(b,"$in")),t=this.a;u.C();)t.$2(a,H.E(u.gK()))},
$S:35}
P.hk.prototype={
geV:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
u=u[0]+1
s=C.b.eq(t,"?",u)
r=t.length
if(s>=0){q=P.cG(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.hM(this,"data",null,null,null,P.cG(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.d(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iz.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.iy.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lv(u,0,96,b)
return u},
$S:33}
P.iA.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.H(b,t)^96
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.iB.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.H(b,0),t=C.b.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.d(a,s)
a[s]=c}}}
P.ib.prototype={
gel:function(){return this.c>0},
gen:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
geo:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
gem:function(){return this.r<this.a.length},
gdm:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdn:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbS:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdm()){this.x="http"
u="http"}else if(this.gdn()){this.x="https"
u="https"}else if(u===4&&C.b.a4(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a4(this.a,"package")){this.x="package"
u="package"}else{u=C.b.u(this.a,0,u)
this.x=u}return u},
geX:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcC:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbJ:function(a){var u
if(this.gen()){u=this.d
if(typeof u!=="number")return u.n()
return P.eh(C.b.u(this.a,u+1,this.e),null,null)}if(this.gdm())return 80
if(this.gdn())return 443
return 0},
geH:function(a){return C.b.u(this.a,this.e,this.f)},
gcK:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.b.u(this.a,u+1,t):""},
gek:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.ap(t,u+1):""},
gcL:function(){var u=this.f
if(typeof u!=="number")return u.Y()
if(u>=this.r)return C.a9
u=P.f
return new P.dQ(P.kq(this.gcK(),C.m),[u,u])},
cP:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iF",[P.f,null],"$aF")
i=this.gbS()
u=i==="file"
t=this.c
j=t>0?C.b.u(this.a,this.b+3,t):""
f=this.gen()?this.gbJ(this):null
t=this.c
if(t>0)c=C.b.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a4(d,"/"))d="/"+d
g=P.jq(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.ap(t,s+1)
return new P.bQ(i,j,c,f,d,g,b)},
eL:function(a,b){return this.cP(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.b.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ijl&&this.a===b.i(0)},
i:function(a){return this.a},
$ijl:1}
P.hM.prototype={}
W.w.prototype={}
W.cR.prototype={
i:function(a){return String(a)},
$icR:1}
W.el.prototype={
i:function(a){return String(a)}}
W.c1.prototype={$ic1:1}
W.bb.prototype={$ibb:1}
W.bw.prototype={
cT:function(a,b,c){var u=this.ha(a,b,P.n4(c,null))
return u},
ha:function(a,b,c){return a.getContext(b,c)},
$ibw:1}
W.bc.prototype={
gm:function(a){return a.length}}
W.c5.prototype={
gm:function(a){return a.length}}
W.ey.prototype={}
W.aw.prototype={$iaw:1}
W.c6.prototype={
jo:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)}}
W.eB.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
jI:function(a,b){return a.createHTMLDocument(b)}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cK(b,"$iax",[P.af],"$aax"))return!1
u=J.a5(b)
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&a.width===u.gbO(b)&&a.height===u.gbH(b)},
gJ:function(a){return W.kA(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gdR:function(a){return a.bottom},
gbH:function(a){return a.height},
gbI:function(a){return a.left},
gbL:function(a){return a.right},
gbM:function(a){return a.top},
gbO:function(a){return a.width},
$iax:1,
$aax:function(){return[P.af]}}
W.hL.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.e(u[b],"$iN")},
q:function(a,b,c){var u
H.e(c,"$iN")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
J.j5(this.a,c,u[b])},
h:function(a,b){J.jM(this.a,b)
return b},
gS:function(a){var u=this.kN(this)
return new J.an(u,u.length,0,[H.r(u,0)])},
$aR:function(){return[W.N]},
$an:function(){return[W.N]},
$aa:function(){return[W.N]}}
W.N.prototype={
gjt:function(a){return new W.hN(a)},
gco:function(a){return new W.hL(a,a.children)},
gdT:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.ax(u,t,s,r,[P.af])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jY
if(u==null){u=H.b([],[W.au])
t=new W.dr(u)
C.a.h(u,W.kz(null))
C.a.h(u,W.kB())
$.jY=t
d=t}else d=u
u=$.jX
if(u==null){u=new W.ec(d)
$.jX=u
c=u}else{u.a=d
c=u}}if($.aZ==null){u=document
t=u.implementation
t=(t&&C.T).jI(t,"")
$.aZ=t
$.ja=t.createRange()
t=$.aZ
t.toString
t=t.createElement("base")
H.e(t,"$ic1")
t.href=u.baseURI
u=$.aZ.head;(u&&C.V).D(u,t)}u=$.aZ
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibb")}u=$.aZ
if(!!this.$ibb)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aZ.body;(u&&C.p).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a6,a.tagName)){u=$.ja;(u&&C.M).f8(u,s)
u=$.ja
r=(u&&C.M).jG(u,b)}else{s.innerHTML=b
r=$.aZ.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.aZ.body
if(s==null?u!=null:s!==u)J.jO(s)
c.cW(r)
C.z.jo(document,r)
return r},
jH:function(a,b,c){return this.af(a,b,c,null)},
fb:function(a,b,c,d){a.textContent=null
this.D(a,this.af(a,b,c,d))},
fa:function(a,b){return this.fb(a,b,null,null)},
aX:function(a,b){return a.getAttribute(b)},
im:function(a,b){return a.removeAttribute(b)},
f9:function(a,b,c){return a.setAttribute(b,c)},
$iN:1,
gkL:function(a){return a.tagName}}
W.eF.prototype={
$1:function(a){return!!J.Q(H.e(a,"$iA")).$iN},
$S:22}
W.m.prototype={$im:1}
W.bA.prototype={
fP:function(a,b,c,d){return a.addEventListener(b,H.bU(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ibA:1}
W.eP.prototype={
gm:function(a){return a.length}}
W.d6.prototype={}
W.d7.prototype={
it:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bC.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aR:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$ibC:1,
$aas:function(){return[W.A]}}
W.d8.prototype={}
W.cb.prototype={$icb:1}
W.aO.prototype={$iaO:1}
W.dd.prototype={}
W.dg.prototype={
i:function(a){return String(a)},
$idg:1}
W.a8.prototype={$ia8:1}
W.al.prototype={
gaJ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kh("No elements"))
if(t>1)throw H.c(P.kh("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.A],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.D(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.e(c,"$iA")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
J.j5(u,c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d4(u,u.length,-1,[H.cM(C.aa,u,"as",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aR:function(){return[W.A]},
$an:function(){return[W.A]},
$aa:function(){return[W.A]}}
W.A.prototype={
kA:function(a){var u=a.parentNode
if(u!=null)J.ej(u,a)},
kF:function(a,b){var u,t
try{u=a.parentNode
J.j5(u,b,a)}catch(t){H.ac(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ff(a):u},
D:function(a,b){return a.appendChild(H.e(b,"$iA"))},
io:function(a,b){return a.removeChild(b)},
is:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.cf.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aR:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$aas:function(){return[W.A]}}
W.dw.prototype={
jG:function(a,b){return a.createContextualFragment(b)},
f8:function(a,b){return a.selectNodeContents(b)}}
W.fI.prototype={
gm:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.dD.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=W.lK("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.al(t).at(0,new W.al(u))
return t},
hc:function(a,b){return a.insertRow(b)}}
W.dE.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaJ(u)
s.toString
u=new W.al(s)
r=u.gaJ(u)
t.toString
r.toString
new W.al(t).at(0,new W.al(r))
return t},
dl:function(a,b){return a.insertCell(b)}}
W.fX.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaJ(u)
t.toString
s.toString
new W.al(t).at(0,new W.al(s))
return t}}
W.cl.prototype={$icl:1}
W.aI.prototype={$iaI:1}
W.aJ.prototype={$iaJ:1}
W.h3.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.aI]},
$aR:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]},
$ia:1,
$aa:function(){return[W.aI]},
$aas:function(){return[W.aI]}}
W.bp.prototype={}
W.aV.prototype={
gjO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Z("deltaY is not supported"))},
gjN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Z("deltaX is not supported"))},
$iaV:1}
W.cy.prototype={
iu:function(a,b){return a.requestAnimationFrame(H.bU(H.k(b,{func:1,ret:-1,args:[P.af]}),1))},
h3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cz.prototype={$icz:1}
W.dX.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cK(b,"$iax",[P.af],"$aax"))return!1
u=J.a5(b)
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&a.width===u.gbO(b)&&a.height===u.gbH(b)},
gJ:function(a){return W.kA(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gbH:function(a){return a.height},
gbO:function(a){return a.width}}
W.e2.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bD(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iA")
throw H.c(P.Z("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iaF:1,
$aaF:function(){return[W.A]},
$aR:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$ia:1,
$aa:function(){return[W.A]},
$aas:function(){return[W.A]}}
W.hK.prototype={
X:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gay(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.y)(u),++q){p=u[q]
b.$2(p,r.aX(s,p))}},
gay:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.d(u,r)
q=H.e(u[r],"$icz")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abH:function(){return[P.f,P.f]},
$aF:function(){return[P.f,P.f]}}
W.hN.prototype={
k:function(a,b){return J.j6(this.a,H.E(b))},
q:function(a,b,c){J.lz(this.a,b,c)},
gm:function(a){return this.gay().length}}
W.hO.prototype={}
W.jo.prototype={}
W.hP.prototype={}
W.hQ.prototype={
$1:function(a){return this.a.$1(H.e(a,"$im"))},
$S:32}
W.br.prototype={
fu:function(a){var u,t
u=$.jK()
if(u.gkc(u)){for(t=0;t<262;++t)u.q(0,C.a5[t],W.ne())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nf())}},
aQ:function(a){return $.lm().W(0,W.c7(a))},
au:function(a,b,c){var u,t,s
u=W.c7(a)
t=$.jK()
s=t.k(0,H.i(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.jw(s.$4(a,b,c,this))},
$iau:1}
W.as.prototype={
gS:function(a){return new W.d4(a,this.gm(a),-1,[H.cM(this,a,"as",0)])}}
W.dr.prototype={
aQ:function(a){return C.a.dK(this.a,new W.fs(a))},
au:function(a,b,c){return C.a.dK(this.a,new W.fr(a,b,c))},
$iau:1}
W.fs.prototype={
$1:function(a){return H.e(a,"$iau").aQ(this.a)},
$S:24}
W.fr.prototype={
$1:function(a){return H.e(a,"$iau").au(this.a,this.b,this.c)},
$S:24}
W.e5.prototype={
fH:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bN(0,new W.i9())
t=b.bN(0,new W.ia())
this.b.at(0,u)
s=this.c
s.at(0,C.H)
s.at(0,t)},
aQ:function(a){return this.a.W(0,W.c7(a))},
au:function(a,b,c){var u,t
u=W.c7(a)
t=this.c
if(t.W(0,H.i(u)+"::"+b))return this.d.jp(c)
else if(t.W(0,"*::"+b))return this.d.jp(c)
else{t=this.b
if(t.W(0,H.i(u)+"::"+b))return!0
else if(t.W(0,"*::"+b))return!0
else if(t.W(0,H.i(u)+"::*"))return!0
else if(t.W(0,"*::*"))return!0}return!1},
$iau:1}
W.i9.prototype={
$1:function(a){return!C.a.W(C.B,H.E(a))},
$S:25}
W.ia.prototype={
$1:function(a){return C.a.W(C.B,H.E(a))},
$S:25}
W.ih.prototype={
au:function(a,b,c){if(this.fk(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j6(a,"template")==="")return this.e.W(0,b)
return!1}}
W.ii.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.E(a))},
$S:13}
W.ig.prototype={
aQ:function(a){var u=J.Q(a)
if(!!u.$ich)return!1
u=!!u.$io
if(u&&W.c7(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aQ(a)},
$iau:1}
W.d4.prototype={
C:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdk(J.lr(this.a,u))
this.c=u
return!0}this.sdk(null)
this.c=t
return!1},
gK:function(){return this.d},
sdk:function(a){this.d=H.x(a,H.r(this,0))},
$iaN:1}
W.au.prototype={}
W.i7.prototype={$inT:1}
W.ec.prototype={
cW:function(a){new W.iu(this).$2(a,null)},
b1:function(a,b){if(b==null)J.jO(a)
else J.ej(b,a)},
iy:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lw(a)
s=J.j6(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ac(o)}q="element unprintable"
try{q=J.am(a)}catch(o){H.ac(o)}try{p=W.c7(a)
this.ix(H.e(a,"$iN"),b,u,q,p,H.e(t,"$iF"),H.E(s))}catch(o){if(H.ac(o) instanceof P.aC)throw o
else{this.b1(a,b)
window
n="Removing corrupted element "+H.i(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ix:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b1(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aQ(a)){this.b1(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.b1(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gay()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gay().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.d(t,s)
q=t[s]
if(!this.a.au(a,J.lB(q),r.aX(u,q))){window
p="Removing disallowed attribute <"+H.i(e)+" "+q+'="'+H.i(r.aX(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aX(u,q)
r.im(u,q)}}if(!!J.Q(a).$icl)this.cW(a.content)},
$inE:1}
W.iu.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iy(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b1(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ac(r)
q=H.e(u,"$iA")
if(s){p=q.parentNode
if(p!=null)J.ej(p,q)}else J.ej(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iA")}},
$S:44}
W.dW.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.ee.prototype={}
P.ic.prototype={
eh:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cS:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Q(a)
if(!!t.$iar)return new Date(a.a)
if(!!t.$imf)throw H.c(P.hh("structured clone of RegExp"))
if(!!t.$ibI)return a
if(!!t.$iF){s=this.eh(a)
t=this.b
if(s>=t.length)return H.d(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.X(0,new P.ie(u,this))
return u.a}if(!!t.$ia){s=this.eh(a)
u=this.b
if(s>=u.length)return H.d(u,s)
r=u[s]
if(r!=null)return r
return this.jF(a,s)}throw H.c(P.hh("structured clone of other type"))},
jF:function(a,b){var u,t,s,r
u=J.bX(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.cS(u.k(a,r)))
return s}}
P.ie.prototype={
$2:function(a,b){this.a.a[a]=this.b.cS(b)},
$S:7}
P.iF.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.id.prototype={}
P.eM.prototype={
gbl:function(){var u,t,s
u=this.b
t=H.aa(u,"R",0)
s=W.N
return new H.fd(new H.cx(u,H.k(new P.eN(),{func:1,ret:P.M,args:[t]}),[t]),H.k(new P.eO(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.e(c,"$iN")
u=this.gbl()
J.ly(u.b.$1(J.ek(u.a,b)),c)},
h:function(a,b){J.jM(this.b.a,b)},
gm:function(a){return J.aB(this.gbl().a)},
k:function(a,b){var u=this.gbl()
return u.b.$1(J.ek(u.a,b))},
gS:function(a){var u=P.lZ(this.gbl(),!1,W.N)
return new J.an(u,u.length,0,[H.r(u,0)])},
$aR:function(){return[W.N]},
$an:function(){return[W.N]},
$aa:function(){return[W.N]}}
P.eN.prototype={
$1:function(a){return!!J.Q(H.e(a,"$iA")).$iN},
$S:22}
P.eO.prototype={
$1:function(a){return H.j(H.e(a,"$iA"),"$iN")},
$S:53}
P.i2.prototype={
gbL:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.x(u+this.c,H.r(this,0))},
gdR:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.x(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cK(b,"$iax",[P.af],"$aax")){u=this.a
t=J.a5(b)
if(u==t.gbI(b)){s=this.b
if(s==t.gbM(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.x(u+this.c,r)===t.gbL(b)){if(typeof s!=="number")return s.n()
u=H.x(s+this.d,r)===t.gdR(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.cQ(u)
s=this.b
r=J.cQ(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gJ(H.x(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gJ(H.x(s+this.d,q))
return P.mB(P.i0(P.i0(P.i0(P.i0(0,t),r),u),q))}}
P.ax.prototype={
gbI:function(a){return this.a},
gbM:function(a){return this.b},
gbO:function(a){return this.c},
gbH:function(a){return this.d}}
P.ch.prototype={$ich:1}
P.o.prototype={
gco:function(a){return new P.eM(a,new W.al(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.au])
C.a.h(u,W.kz(null))
C.a.h(u,W.kB())
C.a.h(u,new W.ig())
c=new W.ec(new W.dr(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jH(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.al(r)
p=u.gaJ(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$io:1}
P.L.prototype={$in:1,
$an:function(){return[P.l]},
$ia:1,
$aa:function(){return[P.l]}}
P.cT.prototype={$icT:1}
P.d5.prototype={$id5:1}
P.dv.prototype={$idv:1}
P.bN.prototype={
dL:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jv:function(a,b,c){return a.bindFramebuffer(b,c)},
jw:function(a,b,c){return a.blendFunc(b,c)},
dS:function(a,b,c,d){return a.bufferData(b,c,d)},
jz:function(a,b){return a.clear(b)},
jA:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jB:function(a,b){return a.clearDepth(b)},
jD:function(a,b){return a.compileShader(b)},
jJ:function(a,b){return a.createShader(b)},
jL:function(a,b){return a.deleteProgram(b)},
jM:function(a,b){return a.deleteShader(b)},
jP:function(a,b){return a.depthFunc(b)},
jQ:function(a,b){return a.disable(b)},
dV:function(a,b){return a.disableVertexAttribArray(b)},
jS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cs:function(a,b){return a.enable(b)},
dW:function(a,b){return a.enableVertexAttribArray(b)},
eZ:function(a,b,c){return a.getActiveAttrib(b,c)},
f_:function(a,b,c){return a.getActiveUniform(b,c)},
f0:function(a,b,c){return a.getAttribLocation(b,c)},
cV:function(a,b){return a.getParameter(b)},
f2:function(a,b){return a.getProgramInfoLog(b)},
bQ:function(a,b,c){return a.getProgramParameter(b,c)},
f3:function(a,b){return a.getShaderInfoLog(b)},
f4:function(a,b,c){return a.getShaderParameter(b,c)},
f5:function(a,b,c){return a.getUniformLocation(b,c)},
ke:function(a,b){return a.linkProgram(b)},
fd:function(a,b,c){return a.shaderSource(b,c)},
R:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eW:function(a,b){return a.useProgram(b)},
kR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kS:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibN:1}
P.dz.prototype={$idz:1}
P.dO.prototype={$idO:1}
O.a_.prototype={
bV:function(a){this.shg(H.b([],[a]))
this.sdu(null)
this.sdr(null)
this.sdv(null)},
cX:function(a,b,c){var u=H.aa(this,"a_",0)
H.k(b,{func:1,ret:P.M,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.l,[P.n,u]]}
H.k(a,u)
H.k(c,u)
this.sdu(b)
this.sdr(a)
this.sdv(c)},
bg:function(a,b){return this.cX(a,null,b)},
i3:function(a){var u
H.h(a,"$in",[H.aa(this,"a_",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hr:function(a,b){var u
H.h(b,"$in",[H.aa(this,"a_",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.an(u,u.length,0,[H.r(u,0)])},
a7:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aa(this,"a_",0)
H.x(b,u)
u=[u]
if(this.i3(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hr(s,H.b([b],u))}},
shg:function(a){this.a=H.h(a,"$ia",[H.aa(this,"a_",0)],"$aa")},
sdu:function(a){this.b=H.k(a,{func:1,ret:P.M,args:[[P.n,H.aa(this,"a_",0)]]})},
sdr:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.aa(this,"a_",0)]]})},
sdv:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.l,[P.n,H.aa(this,"a_",0)]]})},
$in:1}
O.cd.prototype={
gm:function(a){return this.a.length},
gE:function(){var u=this.b
if(u==null){u=D.U()
this.b=u}return u},
fs:function(a){var u=this.b
if(u!=null)u.M(a)},
aK:function(){return this.fs(null)},
ga0:function(){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dm()},
eJ:function(a){var u=this.a
if(a==null)C.a.h(u,V.dm())
else C.a.h(u,a)
this.aK()},
cI:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sc3:function(a){this.a=H.h(a,"$ia",[V.ai],"$aa")}}
E.eq.prototype={}
E.ah.prototype={
d7:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.an(u,u.length,0,[H.r(u,0)]);u.C();){t=u.d
if(t.f==null)t.d7()}},
saa:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gE().L(0,this.geC())
t=this.c
if(t!=null)t.gE().h(0,this.geC())
s=new D.K("shape",u,this.c,this,[F.dA])
s.b=!0
this.a9(s)}},
sbc:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gE().L(0,this.geE())
t=this.f
this.f=a
if(a!=null)a.gE().h(0,this.geE())
this.d7()
s=new D.K("technique",t,this.f,this,[O.bo])
s.b=!0
this.a9(s)}},
saS:function(a){var u,t
if(!J.O(this.r,a)){u=this.r
if(u!=null)u.gE().L(0,this.geA())
if(a!=null)a.gE().h(0,this.geA())
this.r=a
t=new D.K("mover",u,a,this,[U.ad])
t.b=!0
this.a9(t)}},
aB:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aW(a,this):null
if(!J.O(t,this.x)){s=this.x
this.x=t
r=new D.K("matrix",s,t,this,[V.ai])
r.b=!0
this.a9(r)}u=this.f
if(u!=null)u.aB(a)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.r(u,0)]);u.C();)u.d.aB(a)},
aT:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga0())
else C.a.h(u.a,t.F(0,u.ga0()))
u.aK()
a.eK(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kE(a,this)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.r(u,0)]);u.C();)u.d.aT(a)
a.eI()
a.dx.cI()},
gE:function(){var u=this.z
if(u==null){u=D.U()
this.z=u}return u},
a9:function(a){var u=this.z
if(u!=null)u.M(a)},
a2:function(){return this.a9(null)},
eD:function(a){H.e(a,"$iz")
this.e=null
this.a9(a)},
kp:function(){return this.eD(null)},
eF:function(a){this.a9(H.e(a,"$iz"))},
kq:function(){return this.eF(null)},
eB:function(a){this.a9(H.e(a,"$iz"))},
ko:function(){return this.eB(null)},
ez:function(a){this.a9(H.e(a,"$iz"))},
kl:function(){return this.ez(null)},
kk:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ah],"$an")
for(u=b.length,t=this.gey(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.saj(null)
o.sb_(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.saj(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
kn:function(a,b){var u,t
H.h(b,"$in",[E.ah],"$an")
for(u=b.gS(b),t=this.gey();u.C();)u.gK().gE().L(0,t)
this.a2()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sft:function(a,b){this.y=H.h(b,"$ia_",[E.ah],"$aa_")},
$ib3:1}
E.fD.prototype={
fn:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ar(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cd()
t=[V.ai]
u.sc3(H.b([],t))
u.b=null
u.gE().h(0,new E.fE(this))
this.cy=u
u=new O.cd()
u.sc3(H.b([],t))
u.b=null
u.gE().h(0,new E.fF(this))
this.db=u
u=new O.cd()
u.sc3(H.b([],t))
u.b=null
u.gE().h(0,new E.fG(this))
this.dx=u
this.siJ(H.b([],[O.bo]))
u=this.dy;(u&&C.a).h(u,null)
this.siF(new H.aG([P.f,A.ci]))},
gkz:function(){var u=this.z
if(u==null){u=this.cy.ga0().F(0,this.db.ga0())
this.z=u}return u},
eK:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eI:function(){var u=this.dy
if(u.length>1)u.pop()},
siJ:function(a){this.dy=H.h(a,"$ia",[O.bo],"$aa")},
siF:function(a){this.fr=H.h(a,"$iF",[P.f,A.ci],"$aF")}}
E.fE.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fF.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fG.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dK.prototype={
d1:function(a){H.e(a,"$iz")
this.eM()},
d0:function(){return this.d1(null)},
gk7:function(){var u,t,s
u=Date.now()
t=C.f.a5(P.jW(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ar(u,!1)
return s/t},
dA:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.F()
if(typeof u!=="number")return H.B(u)
s=C.e.ei(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.F()
r=C.e.ei(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kk(C.y,this.gkG())}},
eM:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.h_(this),{func:1,ret:-1,args:[P.af]})
C.O.h3(u)
C.O.iu(u,W.kP(t,P.af))}},
kD:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dA()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ar(r,!1)
s.y=P.jW(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aK()
r=s.db
C.a.sm(r.a,0)
r.aK()
r=s.dx
C.a.sm(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aT(this.e)}s=this.z
if(s!=null)s.M(null)}catch(q){u=H.ac(q)
t=H.bY(q)
P.jF("Error: "+H.i(u))
P.jF("Stack: "+H.i(t))
throw H.c(u)}}}
E.h_.prototype={
$1:function(a){var u
H.np(a)
u=this.a
if(u.ch){u.ch=!1
u.kD()}},
$S:31}
Z.dU.prototype={$iny:1}
Z.cU.prototype={
bo:function(a){var u,t,s
try{t=a.a
C.c.dW(t,this.e)
C.c.kR(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ac(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.hE.prototype={$inz:1}
Z.cV.prototype={
aR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bo:function(a){var u,t
u=this.a
C.c.av(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bo(a)},
eS:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.dV(s,u[t].e)
C.c.av(s,this.a.a,null)},
aT:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
p=r.a
C.c.av(t,p,r.b)
C.c.jS(t,q.a,q.b,5123,0)
C.c.av(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.am(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shb:function(a){this.b=H.h(a,"$ia",[Z.bh],"$aa")},
$inI:1}
Z.bh.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bK(this.c)+"'")+"]"}}
Z.aU.prototype={
gcY:function(a){var u,t
u=this.a
t=(u&$.b8().a)!==0?3:0
if((u&$.b7().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=2
if((u&$.ba().a)!==0)t+=3
if((u&$.cN().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=4
if((u&$.c0().a)!==0)++t
return(u&$.b5().a)!==0?t+4:t},
jr:function(a){var u,t,s
u=$.b8()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cN()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b5()
if((t&u.a)!==0)if(s===a)return u
return $.lk()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aU))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.b8().a)!==0)C.a.h(u,"Pos")
if((t&$.b7().a)!==0)C.a.h(u,"Norm")
if((t&$.b6().a)!==0)C.a.h(u,"Binm")
if((t&$.b9().a)!==0)C.a.h(u,"Txt2D")
if((t&$.ba().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cN().a)!==0)C.a.h(u,"Clr3")
if((t&$.cO().a)!==0)C.a.h(u,"Clr4")
if((t&$.c0().a)!==0)C.a.h(u,"Weight")
if((t&$.b5().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.et.prototype={}
D.bz.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.k(b,u)
if(this.a==null)this.saj(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=this.b
t=(u&&C.a).L(u,b)||t}return t},
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
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.X(t,new D.eJ(u))
t=this.b
if(t!=null)C.a.X(t,new D.eK(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kH:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.M(t)}}},
am:function(){return this.kH(!0,!1)},
saj:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.z]}],"$aa")},
sb_:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.z]}],"$aa")}}
D.eJ.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.eK.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.z.prototype={}
D.bE.prototype={}
D.bF.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cW.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dc.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.f2.prototype={
kw:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ks:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
sij:function(a){this.d=H.h(a,"$ikg",[P.l],"$akg")}}
X.dh.prototype={}
X.f9.prototype={
aZ:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ar(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.F()
q=b.b
p=this.ch
if(typeof q!=="number")return q.F()
o=new V.a4(t.a+s*r,t.b+q*p)
p=this.a.gbp()
n=new X.bj(a,V.bl(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cH:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f7()
if(typeof u!=="number")return u.bP()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.aZ(a,b))
return!0},
kx:function(a){return!1},
hT:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ar(Date.now(),!1)
t=this.f
s=new X.dh(c,a,this.a.gbp(),b,u,this)
s.b=!0
t.M(s)
this.y=u
this.x=V.bl()}}
X.aH.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bj.prototype={}
X.fm.prototype={
c0:function(a,b,c){var u,t,s
u=new P.ar(Date.now(),!1)
t=this.a.gbp()
s=new X.bj(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cH:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.M(this.c0(a,b,!0))
return!0},
bb:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f7()
if(typeof u!=="number")return u.bP()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.M(this.c0(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.c0(a,b,!1))
return!0},
ky:function(a,b){return!1}}
X.fy.prototype={}
X.dM.prototype={}
X.h2.prototype={
aZ:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a4],"$aa")
u=new P.ar(Date.now(),!1)
t=a.length>0?a[0]:V.bl()
s=this.a.gbp()
r=new X.dM(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kv:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.b
if(u==null)return!1
u.M(this.aZ(a,!0))
return!0},
kt:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.c
if(u==null)return!1
u.M(this.aZ(a,!0))
return!0},
ku:function(a){var u
H.h(a,"$ia",[V.a4],"$aa")
u=this.d
if(u==null)return!1
u.M(this.aZ(a,!1))
return!0}}
X.dR.prototype={
gbp:function(){var u=this.a
return V.ke(0,0,C.q.gdT(u).c,C.q.gdT(u).d)},
df:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dc(u,new X.aH(t,a.altKey,a.shiftKey))},
aO:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aH(t,a.altKey,a.shiftKey)},
ce:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aH(t,a.altKey,a.shiftKey)},
aF:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a4(t-r,s-q)},
b0:function(a){return new V.Y(a.movementX,a.movementY)},
c8:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a4])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.e.an(p.pageX)
C.e.an(p.pageY)
n=u.left
C.e.an(p.pageX)
C.a.h(t,new V.a4(o-n,C.e.an(p.pageY)-u.top))}return t},
aD:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.aH(t,a.altKey,a.shiftKey))},
c4:function(a){var u,t,s,r,q,p
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
hN:function(a){this.f=!0},
hz:function(a){this.f=!1},
hH:function(a){H.e(a,"$ia8")
if(this.f&&this.c4(a))a.preventDefault()},
hR:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.df(a)
this.b.kw(u)},
hP:function(a){var u
H.e(a,"$iaO")
if(!this.f)return
u=this.df(a)
this.b.ks(u)},
hV:function(a){var u,t,s,r
H.e(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aO(a)
if(this.x){t=this.aD(a)
s=this.b0(a)
if(this.d.cH(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aD(a)
r=this.aF(a)
if(this.c.cH(t,r))a.preventDefault()},
hZ:function(a){var u,t,s
H.e(a,"$ia8")
this.aO(a)
u=this.aD(a)
if(this.x){t=this.b0(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.bb(u,s))a.preventDefault()},
hL:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.c4(a)){this.aO(a)
u=this.aD(a)
if(this.x){t=this.b0(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.bb(u,s))a.preventDefault()}},
hX:function(a){var u,t,s
H.e(a,"$ia8")
this.aO(a)
u=this.aD(a)
if(this.x){t=this.b0(a)
if(this.d.ba(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.ba(u,s))a.preventDefault()},
hJ:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.c4(a)){this.aO(a)
u=this.aD(a)
if(this.x){t=this.b0(a)
if(this.d.ba(u,t))a.preventDefault()
return}if(this.r)return
s=this.aF(a)
if(this.c.ba(u,s))a.preventDefault()}},
i0:function(a){var u,t
H.e(a,"$iaV")
this.aO(a)
u=new V.Y((a&&C.N).gjN(a),C.N.gjO(a)).B(0,180)
if(this.x){if(this.d.kx(u))a.preventDefault()
return}if(this.r)return
t=this.aF(a)
if(this.c.ky(u,t))a.preventDefault()},
i2:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aD(this.y)
s=this.aF(this.y)
this.d.hT(t,s,u)}},
ih:function(a){var u
H.e(a,"$iaJ")
this.a.focus()
this.f=!0
this.ce(a)
u=this.c8(a)
if(this.e.kv(u))a.preventDefault()},
ib:function(a){var u
H.e(a,"$iaJ")
this.ce(a)
u=this.c8(a)
if(this.e.kt(u))a.preventDefault()},
ie:function(a){var u
H.e(a,"$iaJ")
this.ce(a)
u=this.c8(a)
if(this.e.ku(u))a.preventDefault()},
sh4:function(a){this.z=H.h(a,"$ia",[[P.ck,P.J]],"$aa")}}
D.d0.prototype={$ia1:1,$ib3:1}
D.a1.prototype={$ib3:1}
D.de.prototype={
gE:function(){var u=this.Q
if(u==null){u=D.U()
this.Q=u}return u},
a8:function(a){var u=this.Q
if(u!=null)u.M(a)},
dt:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.M(a)},
hS:function(){return this.dt(null)},
i5:function(a){var u,t,s
H.h(a,"$in",[D.a1],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.fv(s))return!1}return!0},
ht:function(a,b){var u,t,s,r,q,p,o,n
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gds(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.e(b[p],"$ia1")
if(o instanceof D.bn)C.a.h(this.r,o)
n=o.z
if(n==null){n=new D.bz()
n.saj(null)
n.sb_(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bE(a,b,this,[u])
u.b=!0
this.a8(u)},
i9:function(a,b){var u,t,s,r
u=D.a1
H.h(b,"$in",[u],"$an")
for(t=b.gS(b),s=this.gds();t.C();){r=t.gK()
C.a.L(this.e,r)
r.gE().L(0,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.a8(u)},
fv:function(a){var u=C.a.W(this.r,a)
return u},
sfw:function(a){this.e=H.h(a,"$ia",[D.d0],"$aa")},
sfz:function(a){this.f=H.h(a,"$ia",[D.du],"$aa")},
sfA:function(a){this.r=H.h(a,"$ia",[D.bn],"$aa")},
sfB:function(a){this.x=H.h(a,"$ia",[D.dH],"$aa")},
sfC:function(a){this.y=H.h(a,"$ia",[D.dI],"$aa")},
sfD:function(a){this.z=H.h(a,"$ia",[D.dJ],"$aa")},
$an:function(){return[D.a1]},
$aa_:function(){return[D.a1]}}
D.du.prototype={$ia1:1,$ib3:1}
D.bn.prototype={
gE:function(){var u=this.z
if(u==null){u=D.U()
this.z=u}return u},
a8:function(a){var u
H.e(a,"$iz")
u=this.z
if(u!=null)u.M(a)},
hB:function(){return this.a8(null)},
$ia1:1,
$ib3:1}
D.dH.prototype={$ia1:1,$ib3:1}
D.dI.prototype={$ia1:1,$ib3:1}
D.dJ.prototype={$ia1:1,$ib3:1}
V.V.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gcM())
t=C.e.n(this.b,b.gbR())
s=C.e.n(this.c,b.gck())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcM())
t=C.e.t(this.b,b.gbR())
s=C.e.t(this.c,b.gck())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aD.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gcM())
t=C.e.n(this.b,b.gbR())
s=C.e.n(this.c,b.gck())
r=C.e.n(this.d,b.gjq(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aD(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcM())
t=C.e.t(this.b,b.gbR())
s=C.e.t(this.c,b.gck())
r=C.e.t(this.d,b.gjq(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aD(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.eH.prototype={}
V.dl.prototype={
ai:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dl))return!1
u=b.a
t=$.H().a
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
u=[P.p]
t=V.bW(H.b([this.a,this.d,this.r],u),3,0)
s=V.bW(H.b([this.b,this.e,this.x],u),3,0)
r=V.bW(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.d(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.d(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.d(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.d(t,1)
n=" "+t[1]+", "
if(1>=p)return H.d(s,1)
n=n+s[1]+", "
if(1>=o)return H.d(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.d(t,2)
u=" "+t[2]+", "
if(2>=p)return H.d(s,2)
u=u+s[2]+", "
if(2>=o)return H.d(r,2)
return n+(u+r[2]+"]")}}
V.ai.prototype={
ai:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return u},
er:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.H().a)return V.dm()
a8=1/a7
a9=-r
b0=-d
return V.b2((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.b2(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cR:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.C(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aV:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.W(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.H().a
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
i:function(a){return this.O()},
ej:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.p]
t=V.bW(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bW(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bW(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bW(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.d(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.d(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.d(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.d(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.d(t,1)
l=l+t[1]+", "
if(1>=o)return H.d(s,1)
l=l+s[1]+", "
if(1>=n)return H.d(r,1)
l=l+r[1]+", "
if(1>=m)return H.d(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.d(t,2)
p=p+t[2]+", "
if(2>=o)return H.d(s,2)
p=p+s[2]+", "
if(2>=n)return H.d(r,2)
p=p+r[2]+", "
if(2>=m)return H.d(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.d(t,3)
l=l+t[3]+", "
if(3>=o)return H.d(s,3)
l=l+s[3]+", "
if(3>=n)return H.d(r,3)
l=l+r[3]+", "
if(3>=m)return H.d(q,3)
return p+(l+q[3]+"]")},
O:function(){return this.ej("",3,0)},
G:function(a){return this.ej(a,3,0)}}
V.a4.prototype={
n:function(a,b){return new V.a4(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.W.prototype={
n:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
F:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aQ.prototype={
n:function(a,b){return new V.aQ(C.e.n(this.a,b.gkU(b)),C.e.n(this.b,b.gkV(b)),C.e.n(this.c,b.gkW(b)),C.e.n(this.d,b.gkT()))},
t:function(a,b){return new V.aQ(C.e.t(this.a,b.gkU(b)),C.e.t(this.b,b.gkV(b)),C.e.t(this.c,b.gkW(b)),C.e.t(this.d,b.gkT()))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.dy.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.Y.prototype={
cF:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.F()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gjT(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gjU(b)
if(typeof u!=="number")return u.n()
return new V.Y(t,C.e.n(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gjT(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gjU(b)
if(typeof u!=="number")return u.t()
return new V.Y(t,C.e.t(u,s))},
F:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.F()
t=this.b
if(typeof t!=="number")return t.F()
return new V.Y(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.H().a){u=$.ks
if(u==null){u=new V.Y(0,0)
$.ks=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.Y(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.C.prototype={
cF:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cG:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aG:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.C(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.C(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.H().a)return V.cw()
return new V.C(this.a/b,this.b/b,this.c/b)},
es:function(){var u=$.H().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.eu.prototype={
bX:function(a){var u=V.nx(a,this.c,this.b)
return u},
gE:function(){var u=this.y
if(u==null){u=D.U()
this.y=u}return u},
a_:function(a){var u=this.y
if(u!=null)u.M(a)},
seY:function(a,b){},
seu:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.H().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bX(t)}u=new D.K("maximumLocation",u,this.b,this,[P.p])
u.b=!0
this.a_(u)}},
sew:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.H().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bX(t)}u=new D.K("minimumLocation",u,this.c,this,[P.p])
u.b=!0
this.a_(u)}},
sa3:function(a,b){var u
b=this.bX(b)
u=this.d
if(!(Math.abs(u-b)<$.H().a)){this.d=b
u=new D.K("location",u,b,this,[P.p])
u.b=!0
this.a_(u)}},
sev:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.H().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.K("maximumVelocity",u,a,this,[P.p])
u.b=!0
this.a_(u)}},
sa1:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.H().a)){this.f=a
u=new D.K("velocity",u,a,this,[P.p])
u.b=!0
this.a_(u)}},
sdU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.H().a)){this.x=a
u=new D.K("dampening",u,a,this,[P.p])
u.b=!0
this.a_(u)}},
aB:function(a){var u,t,s,r,q
u=this.f
t=$.H().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.H().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa1(s)}}}
U.cY.prototype={
gE:function(){var u=this.b
if(u==null){u=D.U()
this.b=u}return u},
aW:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cY))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.ca.prototype={
gE:function(){var u=this.e
if(u==null){u=D.U()
this.e=u}return u},
a_:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.M(a)},
aq:function(){return this.a_(null)},
fF:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gbj(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gE()
n.toString
H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.a_(u)},
i7:function(a,b){var u,t,s
u=U.ad
H.h(b,"$in",[u],"$an")
for(t=b.gS(b),s=this.gbj();t.C();)t.gK().gE().L(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.a_(u)},
aW:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.an(u,u.length,0,[H.r(u,0)]),s=null;u.C();){t=u.d
if(t!=null){r=t.aW(a,b)
if(r!=null)s=s==null?r:r.F(0,s)}}this.f=s==null?V.dm():s
u=this.e
if(u!=null)u.am()}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ca))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.ad]},
$aa_:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.dS.prototype={
gE:function(){var u=this.fx
if(u==null){u=D.U()
this.fx=u}return u},
a_:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.M(a)},
aq:function(){return this.a_(null)},
js:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.U()
u.b=t
u=t}else u=t
u.h(0,this.ghl())
u=this.a.c
t=u.d
if(t==null){t=D.U()
u.d=t
u=t}else u=t
u.h(0,this.ghn())
u=this.a.c
t=u.c
if(t==null){t=D.U()
u.c=t
u=t}else u=t
u.h(0,this.ghp())
u=this.a.d
t=u.f
if(t==null){t=D.U()
u.f=t
u=t}else u=t
u.h(0,this.ghh())
u=this.a.d
t=u.d
if(t==null){t=D.U()
u.d=t
u=t}else u=t
u.h(0,this.ghj())
u=this.a.e
t=u.b
if(t==null){t=D.U()
u.b=t
u=t}else u=t
u.h(0,this.giP())
u=this.a.e
t=u.d
if(t==null){t=D.U()
u.d=t
u=t}else u=t
u.h(0,this.giN())
u=this.a.e
t=u.c
if(t==null){t=D.U()
u.c=t
u=t}else u=t
u.h(0,this.giL())
return!0},
as:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.Y(u,t)},
hm:function(a){a=H.j(H.e(a,"$iz"),"$ibj")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ho:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibj")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.Y(t.a,t.b).F(0,2).B(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sa1(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.Y(s.a,s.b).F(0,2).B(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa3(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.t(0,a.z)
this.dx=this.as(new V.Y(t.a,t.b).F(0,2).B(0,u.gaA()))}this.aq()},
hq:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sa1(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sa1(-t*10*u)
this.aq()}},
hi:function(a){if(H.j(H.e(a,"$iz"),"$idh").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hk:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibj")
if(!J.O(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.Y(s.a,s.b).F(0,2).B(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa3(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.t(0,a.z)
this.dx=this.as(new V.Y(t.a,t.b).F(0,2).B(0,u.gaA()))
this.aq()},
iQ:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iO:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$idM")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.as(new V.Y(t.a,t.b).F(0,2).B(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.T()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sa1(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.T()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.as(new V.Y(s.a,s.b).F(0,2).B(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.T()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.T()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa3(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.t(0,a.z)
this.dx=this.as(new V.Y(t.a,t.b).F(0,2).B(0,u.gaA()))}this.aq()},
iM:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.T()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sa1(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.T()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sa1(-t*10*u)
this.aq()}},
aW:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.Y()
if(u<t){this.dy=t
s=a.y
this.c.aB(s)
this.b.aB(s)
u=V.k3(this.b.d)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.F(0,V.b2(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iad:1}
M.d3.prototype={
aC:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.M(a)},
fG:function(){return this.aC(null)},
hD:function(a,b){var u,t,s,r,q,p,o,n
u=E.ah
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.saj(null)
n.sb_(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.saj(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bE(a,b,this,[u])
u.b=!0
this.aC(u)},
hF:function(a,b){var u,t,s
u=E.ah
H.h(b,"$in",[u],"$an")
for(t=b.gS(b),s=this.gar();t.C();)t.gK().gE().L(0,s)
u=new D.bF(a,b,this,[u])
u.b=!0
this.aC(u)},
sbc:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gE().L(0,this.gar())
t=this.c
this.c=a
if(a!=null)a.gE().h(0,this.gar())
u=new D.K("technique",t,this.c,this,[O.bo])
u.b=!0
this.aC(u)}},
gE:function(){var u=this.x
if(u==null){u=D.U()
this.x=u}return u},
aT:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eK(this.c)
u=this.b
u.toString
t=a1.a
C.c.jv(t,36160,null)
C.c.cs(t,2884)
C.c.cs(t,2929)
C.c.jP(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.B(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.B(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a1.c=p
q=C.e.an(q.d*r)
a1.d=q
C.c.kS(t,o,n,p,q)
C.c.jB(t,u.c)
u=u.a
C.c.jA(t,u.a,u.b,u.c,u.d)
C.c.jz(t,16640)
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
a1.cy.eJ(i)
t=$.k9
if(t==null){t=V.kb()
q=$.kv
if(q==null){q=new V.C(0,1,0)
$.kv=q}p=$.kt
if(p==null){p=new V.C(0,0,-1)
$.kt=p}h=p.B(0,Math.sqrt(p.I(p)))
q=q.aG(h)
g=q.B(0,Math.sqrt(q.I(q)))
f=h.aG(g)
e=new V.C(t.a,t.b,t.c)
d=g.T(0).I(e)
c=f.T(0).I(e)
b=h.T(0).I(e)
t=V.b2(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.k9=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aW(a1,u)
if(a0!=null)a=a0.F(0,a)}a1.db.eJ(a)
u=this.c
if(u!=null)u.aB(a1)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.r(u,0)]);u.C();)u.d.aB(a1)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.r(u,0)]);u.C();)u.d.aT(a1)
this.a.toString
a1.cy.cI()
a1.db.cI()
this.b.toString
a1.eI()},
sfW:function(a,b){this.d=H.h(b,"$ia_",[E.ah],"$aa_")},
$inF:1}
A.cS.prototype={}
A.en.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.c.dW(r.a,r.c)}},
jR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.c.dV(r.a,r.c)}}}
A.fg.prototype={
fm:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.ae("")
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
a7.iY(u)
a7.j4(u)
a7.iZ(u)
a7.jc(u)
a7.jd(u)
a7.j6(u)
a7.jh(u)
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
u=new P.ae("")
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
s.j1(u)
s.iX(u)
s.j_(u)
s.j2(u)
s.ja(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.j8(u)
s.j9(u)}s.j5(u)
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
k=H.b([],[P.f])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.j0(u)
s.j7(u)
s.jb(u)
s.je(u)
s.jf(u)
s.jg(u)
s.j3(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.f])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dg(n,35633)
this.f=this.dg(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.c.dL(s,q,this.e)
C.c.dL(s,this.r,this.f)
C.c.ke(s,this.r)
if(!H.jw(C.c.bQ(s,this.r,35714))){h=C.c.f2(s,this.r)
C.c.jL(s,this.r)
H.q(P.u("Failed to link shader: "+H.i(h)))}this.iC()
this.iE()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$iav")
if(t)this.dy=H.j(this.y.p(0,"objMat"),"$iav")
if(r)this.fr=H.j(this.y.p(0,"viewObjMat"),"$iav")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$iav")
if(a7.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$icp")
if(a7.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$iav")
if(a7.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$iav")
this.sfS(H.b([],[A.av]))
t=a7.ax
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iI")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(f,"$iav"))}}t=a7.a
if(t!==C.d){this.r2=H.j(this.y.p(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.j(this.y.p(0,"emissionTxt"),"$iaj")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iI")
break
case C.i:this.ry=H.j(this.y.p(0,"emissionTxt"),"$iak")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iI")
break}}t=a7.b
if(t!==C.d){this.x2=H.j(this.y.p(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.j(this.y.p(0,"ambientTxt"),"$iaj")
this.ax=H.j(this.y.p(0,"nullAmbientTxt"),"$iI")
break
case C.i:this.y2=H.j(this.y.p(0,"ambientTxt"),"$iak")
this.ax=H.j(this.y.p(0,"nullAmbientTxt"),"$iI")
break}}t=a7.c
if(t!==C.d){this.al=H.j(this.y.p(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.bs=H.j(this.y.p(0,"diffuseTxt"),"$iaj")
this.bt=H.j(this.y.p(0,"nullDiffuseTxt"),"$iI")
break
case C.i:this.dX=H.j(this.y.p(0,"diffuseTxt"),"$iak")
this.bt=H.j(this.y.p(0,"nullDiffuseTxt"),"$iI")
break}}t=a7.d
if(t!==C.d){this.bu=H.j(this.y.p(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.dY=H.j(this.y.p(0,"invDiffuseTxt"),"$iaj")
this.bv=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iI")
break
case C.i:this.dZ=H.j(this.y.p(0,"invDiffuseTxt"),"$iak")
this.bv=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iI")
break}}t=a7.e
if(t!==C.d){this.by=H.j(this.y.p(0,"shininess"),"$iX")
this.bw=H.j(this.y.p(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e_=H.j(this.y.p(0,"specularTxt"),"$iaj")
this.bx=H.j(this.y.p(0,"nullSpecularTxt"),"$iI")
break
case C.i:this.e0=H.j(this.y.p(0,"specularTxt"),"$iak")
this.bx=H.j(this.y.p(0,"nullSpecularTxt"),"$iI")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e1=H.j(this.y.p(0,"bumpTxt"),"$iaj")
this.bz=H.j(this.y.p(0,"nullBumpTxt"),"$iI")
break
case C.i:this.e2=H.j(this.y.p(0,"bumpTxt"),"$iak")
this.bz=H.j(this.y.p(0,"nullBumpTxt"),"$iI")
break}if(a7.dy){this.e3=H.j(this.y.p(0,"envSampler"),"$iak")
this.e4=H.j(this.y.p(0,"nullEnvTxt"),"$iI")
t=a7.r
if(t!==C.d){this.bA=H.j(this.y.p(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e5=H.j(this.y.p(0,"reflectTxt"),"$iaj")
this.bB=H.j(this.y.p(0,"nullReflectTxt"),"$iI")
break
case C.i:this.e6=H.j(this.y.p(0,"reflectTxt"),"$iak")
this.bB=H.j(this.y.p(0,"nullReflectTxt"),"$iI")
break}}t=a7.x
if(t!==C.d){this.bC=H.j(this.y.p(0,"refraction"),"$iX")
this.bD=H.j(this.y.p(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.e7=H.j(this.y.p(0,"refractTxt"),"$iaj")
this.bE=H.j(this.y.p(0,"nullRefractTxt"),"$iI")
break
case C.i:this.e8=H.j(this.y.p(0,"refractTxt"),"$iak")
this.bE=H.j(this.y.p(0,"nullRefractTxt"),"$iI")
break}}}t=a7.y
if(t!==C.d){this.bF=H.j(this.y.p(0,"alpha"),"$iX")
switch(t){case C.d:break
case C.j:break
case C.h:this.e9=H.j(this.y.p(0,"alphaTxt"),"$iaj")
this.bG=H.j(this.y.p(0,"nullAlphaTxt"),"$iI")
break
case C.i:this.ea=H.j(this.y.p(0,"alphaTxt"),"$iak")
this.bG=H.j(this.y.p(0,"nullAlphaTxt"),"$iI")
break}}this.sh1(H.b([],[A.co]))
this.sii(H.b([],[A.cq]))
this.siH(H.b([],[A.cr]))
this.siS(H.b([],[A.cs]))
this.siT(H.b([],[A.ct]))
this.siU(H.b([],[A.cu]))
if(a7.k2){t=a7.z
if(t>0){this.eb=H.e(this.y.p(0,"dirLightCount"),"$iI")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.ct;(s&&C.a).h(s,new A.co(g,f,e))}}t=a7.Q
if(t>0){this.ec=H.e(this.y.p(0,"pntLightCount"),"$iI")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iX")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.cu;(s&&C.a).h(s,new A.cq(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ed=H.e(this.y.p(0,"spotLightCount"),"$iI")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iX")
s=this.cv;(s&&C.a).h(s,new A.cr(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ee=H.e(this.y.p(0,"txtDirLightCount"),"$iI")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iG")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iI")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iaj")
s=this.cw;(s&&C.a).h(s,new A.cs(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ef=H.e(this.y.p(0,"txtPntLightCount"),"$iI")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$icp")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iI")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iak")
s=this.cz;(s&&C.a).h(s,new A.ct(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eg=H.e(this.y.p(0,"txtSpotLightCount"),"$iI")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iG")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iI")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iG")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iX")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iX")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iX")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iX")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a6,"$iaj")
s=this.cA;(s&&C.a).h(s,new A.cu(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){C.c.U(b.a,b.d,1)},
ad:function(a,b,c){C.c.U(b.a,b.d,1)},
sfS:function(a){this.r1=H.h(a,"$ia",[A.av],"$aa")},
sh1:function(a){this.ct=H.h(a,"$ia",[A.co],"$aa")},
sii:function(a){this.cu=H.h(a,"$ia",[A.cq],"$aa")},
siH:function(a){this.cv=H.h(a,"$ia",[A.cr],"$aa")},
siS:function(a){this.cw=H.h(a,"$ia",[A.cs],"$aa")},
siT:function(a){this.cz=H.h(a,"$ia",[A.ct],"$aa")},
siU:function(a){this.cA=H.h(a,"$ia",[A.cu],"$aa")}}
A.fj.prototype={
iY:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
j4:function(a){var u
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
iZ:function(a){var u
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
jc:function(a){var u,t
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
jd:function(a){var u,t
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
j6:function(a){var u
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
jh:function(a){var u
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
if(0>=c.length)return H.d(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j1:function(a){var u,t
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
iX:function(a){var u,t
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
j_:function(a){var u,t
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
j2:function(a){var u,t
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
ja:function(a){var u,t
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
j5:function(a){var u,t
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
j8:function(a){var u,t
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
j9:function(a){var u,t
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
j0:function(a){var u,t
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
j7:function(a){var u,t
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
jb:function(a){var u,t
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
je:function(a){var u,t,s
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
jf:function(a){var u,t,s
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
jg:function(a){var u,t,s
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
j3:function(a){var u
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
i:function(a){return this.al}}
A.co.prototype={}
A.cs.prototype={}
A.cq.prototype={}
A.ct.prototype={}
A.cr.prototype={}
A.cu.prototype={}
A.ci.prototype={
fp:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dg:function(a,b){var u,t,s
u=this.a
t=C.c.jJ(u,b)
C.c.fd(u,t,a)
C.c.jD(u,t)
if(!H.jw(C.c.f4(u,t,35713))){s=C.c.f3(u,t)
C.c.jM(u,t)
throw H.c(P.u("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
iC:function(){var u,t,s,r,q,p
u=H.b([],[A.cS])
t=this.a
s=H.ab(C.c.bQ(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.c.eZ(t,this.r,r)
p=C.c.f0(t,this.r,q.name)
C.a.h(u,new A.cS(t,q.name,p))}this.x=new A.en(u)},
iE:function(){var u,t,s,r,q,p
u=H.b([],[A.dN])
t=this.a
s=H.ab(C.c.bQ(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.c.f_(t,this.r,r)
p=C.c.f5(t,this.r,q.name)
C.a.h(u,this.jK(q.type,q.size,q.name,p))}this.y=new A.he(u)},
aM:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.I(u,t,b,c)
else return A.jk(u,t,b,a,c)},
fZ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aj(u,t,b,c)
else return A.jk(u,t,b,a,c)},
h_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.jk(u,t,b,a,c)},
bn:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jK:function(a,b,c,d){switch(a){case 5120:return this.aM(b,c,d)
case 5121:return this.aM(b,c,d)
case 5122:return this.aM(b,c,d)
case 5123:return this.aM(b,c,d)
case 5124:return this.aM(b,c,d)
case 5125:return this.aM(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.h9(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.hc(this.a,this.r,c,d)
case 35667:return new A.ha(this.a,this.r,c,d)
case 35668:return new A.hb(this.a,this.r,c,d)
case 35669:return new A.hd(this.a,this.r,c,d)
case 35674:return new A.hf(this.a,this.r,c,d)
case 35675:return new A.cp(this.a,this.r,c,d)
case 35676:return new A.av(this.a,this.r,c,d)
case 35678:return this.fZ(b,c,d)
case 35680:return this.h_(b,c,d)
case 35670:throw H.c(this.bn("BOOL",c))
case 35671:throw H.c(this.bn("BOOL_VEC2",c))
case 35672:throw H.c(this.bn("BOOL_VEC3",c))
case 35673:throw H.c(this.bn("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.by.prototype={
i:function(a){return this.b}}
A.dN.prototype={}
A.he.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
k6:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.k6("\n")}}
A.I.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.ha.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hb.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hd.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.h8.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
siV:function(a){this.e=H.h(a,"$ia",[P.l],"$aa")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.h9.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.hc.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hf.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cp.prototype={
ao:function(a){var u=new Float32Array(H.bR(H.h(a,"$ia",[P.p],"$aa")))
C.c.eT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.av.prototype={
ao:function(a){var u=new Float32Array(H.bR(H.h(a,"$ia",[P.p],"$aa")))
C.c.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.aj.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.iw.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cG(u.b,b).cG(u.d.cG(u.c,b),c)
a.sa3(0,new V.W(t.a,t.b,t.c))
a.seO(t.B(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdP(new V.aQ(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.iG.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:30}
F.iI.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.B(q)
t=-t*q
p=s*q
a.sa3(0,new V.W(t,p,r))
p=new V.C(t,p,r)
a.seO(p.B(0,Math.sqrt(p.I(p))))
a.sdP(new V.aQ(1-c,2+c,-1,-1))},
$S:8}
F.iJ.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:21}
F.iK.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:21}
F.j1.prototype={
$2:function(a,b){return 0},
$S:30}
F.j2.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.B(u)
t=a.f
s=new V.C(t.a,t.b,t.c)
u=s.B(0,Math.sqrt(s.I(s))).F(0,this.b+u)
a.sa3(0,new V.W(u.a,u.b,u.c))},
$S:8}
F.j3.prototype={
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)},
$S:18}
F.iR.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.W(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.iH.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jL(t.$1(u),s)
s=J.lq(J.jL(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.C(s.a,s.b,s.c)
q=s.B(0,Math.sqrt(s.I(s)))
t=$.ku
if(t==null){t=new V.C(1,0,0)
$.ku=t
p=t}else p=t
t=q.aG(!J.O(q,p)?V.kx():p)
o=t.B(0,Math.sqrt(t.I(t)))
t=o.aG(q)
p=t.B(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.F(0,t*s)
s=o.F(0,m*s)
a.sa3(0,J.lp(r,new V.W(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a2.prototype={
b4:function(){if(!this.gb5()){C.a.L(this.a.a.d.b,this)
this.a.a.a2()}this.ca()
this.cb()
this.iq()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
iB:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
iq:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
fR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cw()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.es())return
return q.B(0,Math.sqrt(q.I(q)))},
fV:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.C(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.C(u.a,u.b,u.c)
u=q.aG(u.B(0,Math.sqrt(u.I(u))))
return u.B(0,Math.sqrt(u.I(u)))},
cn:function(){if(this.d!=null)return!0
var u=this.fR()
if(u==null){u=this.fV()
if(u==null)return!1}this.d=u
this.a.a.a2()
return!0},
fQ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cw()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.es())return
return q.B(0,Math.sqrt(q.I(q)))},
fU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.H().a){u=m.t(0,p)
u=new V.C(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.T(0)}else{g=(u-l.b)/i
u=m.t(0,p).F(0,g).n(0,p).t(0,s)
u=new V.C(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.T(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.I(u)))
u=f.aG(h)
u=u.B(0,Math.sqrt(u.I(u))).aG(f)
h=u.B(0,Math.sqrt(u.I(u)))}return h},
cl:function(){if(this.e!=null)return!0
var u=this.fQ()
if(u==null){u=this.fU()
if(u==null)return!1}this.e=u
this.a.a.a2()
return!0},
gjC:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t
if(this.gb5())return a+"disposed"
u=a+C.b.ah(J.am(this.a.e),0)+", "+C.b.ah(J.am(this.b.e),0)+", "+C.b.ah(J.am(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.eL.prototype={}
F.fR.prototype={
b8:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b1.prototype={
b4:function(){if(!this.gb5()){C.a.L(this.a.a.c.b,this)
this.a.a.a2()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ah(J.am(this.a.e),0)+", "+C.b.ah(J.am(this.b.e),0)},
O:function(){return this.G("")}}
F.f3.prototype={}
F.h7.prototype={
b8:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
return u==t.e}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
return u==t.e}else return!1}}}
F.bk.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ah(J.am(u.e),0)},
O:function(){return this.G("")}}
F.dA.prototype={
gE:function(){var u=this.e
if(u==null){u=D.U()
this.e=u}return u},
b9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){q=u[r]
this.a.h(0,q.jE())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bk()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.M(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lU(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c8(k,j,h)}u=this.e
if(u!=null)u.am()},
aw:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aw()||!1
if(!this.a.aw())t=!1
u=this.e
if(u!=null)u.am()
return t},
kh:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.a9];t.length!==0;){s=C.a.gjZ(t)
C.a.kB(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.y)(t),++p){o=t[p]
if(o!=null&&a.b8(0,s,o)){C.a.h(r,o)
C.a.L(t,o)}}if(r.length>1)b.b9(r)}}this.a.A()
this.c.cN()
this.d.cN()
this.b.kC()
this.c.cO(new F.h7())
this.d.cO(new F.fR())
u=this.e
if(u!=null)u.am()},
jn:function(a){this.kh(new F.hy(),new F.ft())},
ci:function(){return this.jn(null)},
cB:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cB()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.d(u,t)
s=u[t]
u=s.r
if(u!=null)s.sex(new V.C(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.C(r,q,u).B(0,Math.sqrt(r*r+q*q+u*u))
if(!J.O(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.M(null)}}}}u=this.e
if(u!=null)u.am()},
jx:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b8()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b7().a)!==0)++r
if((s&$.b6().a)!==0)++r
if((s&$.b9().a)!==0)++r
if((s&$.ba().a)!==0)++r
if((s&$.cN().a)!==0)++r
if((s&$.cO().a)!==0)++r
if((s&$.c0().a)!==0)++r
if((s&$.b5().a)!==0)++r
q=a1.gcY(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.p
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cU])
for(m=0,l=0;l<r;++l){k=a1.jr(l)
j=k.gcY(k)
C.a.q(n,l,new Z.cU(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.d(t,i)
h=t[i].kf(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.c.av(t,34962,e)
C.c.dS(t,34962,new Float32Array(H.bR(o)),35044)
C.c.av(t,34962,null)
d=new Z.cV(new Z.dU(34962,e),n,a1)
d.shb(H.b([],[Z.bh]))
if(this.b.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.jn(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bh(0,c.length,a))}if(this.c.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.jn(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bh(1,c.length,a))}if(this.d.b.length!==0){s=P.l
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.d(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.jn(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bh(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
a9:function(a){var u=this.e
if(u!=null)u.M(a)},
a2:function(){return this.a9(null)},
$inG:1}
F.fK.prototype={
jj:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a9],"$aa")
u=H.b([],[F.a2])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.c8(s,p,o))}}return u},
jk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a9],"$aa")
u=H.b([],[F.a2])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.c8(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c8(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c8(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c8(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
cO:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cN:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gjC(s)
if(t)s.b4()}},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cn())s=!1
return s},
cm:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cl())s=!1
return s},
cB:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.C(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.C(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.M(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sh5:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")}}
F.fL.prototype={
gm:function(a){return this.b.length},
cO:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cN:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.d(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
O:function(){return this.G("")},
shd:function(a){this.b=H.h(a,"$ia",[F.b1],"$aa")}}
F.fM.prototype={
gm:function(a){return this.b.length},
kC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.M(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sc7:function(a){this.b=H.h(a,"$ia",[F.bk],"$aa")}}
F.a9.prototype={
cq:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.dT(this.cx,s,p,u,t,r,q,a,o)},
jE:function(){return this.cq(null)},
sa3:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sex:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.I(a)))
if(!J.O(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a2()}},
seO:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdP:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
kf:function(a){var u,t
if(a.v(0,$.b8())){u=this.f
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b7())){u=this.r
t=[P.p]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b6())){u=this.x
t=[P.p]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b9())){u=this.y
t=[P.p]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.ba())){u=this.z
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cN())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cO())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c0()))return H.b([this.ch],[P.p])
else if(a.v(0,$.b5())){u=this.cx
t=[P.p]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.p])},
cn:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cw()
this.d.X(0,new F.hD(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.am()}return!0},
cl:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cw()
this.d.X(0,new F.hC(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.am()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.b.ah(J.am(this.e),0))
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
C.a.h(u,V.P(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
O:function(){return this.G("")}}
F.hD.prototype={
$1:function(a){var u,t
H.e(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.hC.prototype={
$1:function(a){var u,t
H.e(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.ht.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a2()
return!0},
jm:function(a,b,c,d,e,f,g,h,i){var u=F.dT(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jl:function(a,b,c,d,e,f){return this.jm(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cn()
return!0},
cm:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cl()
return!0},
jy:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.M(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.A()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
siW:function(a){this.c=H.h(a,"$ia",[F.a9],"$aa")}}
F.hu.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.d(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.d(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
X:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.X(this.b,b)
C.a.X(this.c,new F.hv(this,b))
C.a.X(this.d,new F.hw(this,b))},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sh6:function(a){this.b=H.h(a,"$ia",[F.a2],"$aa")},
sh7:function(a){this.c=H.h(a,"$ia",[F.a2],"$aa")},
sh8:function(a){this.d=H.h(a,"$ia",[F.a2],"$aa")}}
F.hv.prototype={
$1:function(a){H.e(a,"$ia2")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:6}
F.hw.prototype={
$1:function(a){var u
H.e(a,"$ia2")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:6}
F.hx.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.d(u,s)
return u[s]}else{if(b<0)return H.d(u,b)
return u[b]}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
she:function(a){this.b=H.h(a,"$ia",[F.b1],"$aa")},
shf:function(a){this.c=H.h(a,"$ia",[F.b1],"$aa")}}
F.hz.prototype={}
F.hy.prototype={
b8:function(a,b,c){return J.O(b.f,c.f)}}
F.hA.prototype={}
F.ft.prototype={
b9:function(a){var u,t,s,r
H.h(a,"$ia",[F.a9],"$aa")
u=V.cw()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.C(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)a[s].sex(u)
return}}
F.hB.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
O:function(){return this.G("")},
sc7:function(a){this.b=H.h(a,"$ia",[F.bk],"$aa")}}
O.dj.prototype={
gE:function(){var u=this.dy
if(u==null){u=D.U()
this.dy=u}return u},
ac:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.M(a)},
fJ:function(){return this.ac(null)},
dz:function(a){H.e(a,"$iz")
this.a=null
this.ac(a)},
iw:function(){return this.dz(null)},
hv:function(a,b){var u=V.ai
u=new D.bE(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.ac(u)},
hx:function(a,b){var u=V.ai
u=new D.bF(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.ac(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a5(u.e.length+3,4)*4
s=C.f.a5(u.f.length+3,4)*4
r=C.f.a5(u.r.length+3,4)*4
q=C.f.a5(u.x.length+3,4)*4
p=C.f.a5(u.y.length+3,4)*4
o=C.f.a5(u.z.length+3,4)*4
n=C.f.a5(this.e.a.length+3,4)*4
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
a7=$.b8()
if(a0){b=$.b7()
a7=new Z.aU(a7.a|b.a)}if(a1){b=$.b6()
a7=new Z.aU(a7.a|b.a)}if(a2){b=$.b9()
a7=new Z.aU(a7.a|b.a)}if(a3){b=$.ba()
a7=new Z.aU(a7.a|b.a)}if(a5){b=$.b5()
a7=new Z.aU(a7.a|b.a)}return new A.fj(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.h(a,"$ia",[T.dG],"$aa")},
aB:function(a){var u,t,s,r
for(u=this.dx.a,u=new J.an(u,u.length,0,[H.r(u,0)]);u.C();){t=u.d
t.toString
s=$.bm
if(s==null){s=new V.W(0,0,0)
$.bm=s}t.a=s
s=$.hs
if(s==null){s=new V.C(0,0,1)
$.hs=s}t.b=s
s=t.c
if(s!=null){r=s.aW(a,t)
if(r!=null){t.a=r.aV(t.a)
t.b=r.cR(t.b)}}}},
kE:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dd()
t=a4.fr.k(0,u.al)
if(t==null){t=A.m0(u,a4.a)
s=t.b
if(s.length===0)H.q(P.u("May not cache a shader with no name."))
if(a4.fr.bq(s))H.q(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bs
u=a5.e
if(!(u instanceof Z.cV)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.aw()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cm()
o.a.cm()
o=o.e
if(o!=null)o.am()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jy()
n=n.e
if(n!=null)n.am()}l=a5.d.jx(new Z.hE(a4.a),q)
l.aR($.b8()).e=this.a.Q.c
if(u)l.aR($.b7()).e=this.a.cx.c
if(p)l.aR($.b6()).e=this.a.ch.c
if(r.rx)l.aR($.b9()).e=this.a.cy.c
if(o)l.aR($.ba()).e=this.a.db.c
if(r.x1)l.aR($.b5()).e=this.a.dx.c
a5.e=l}u=T.dG
k=H.b([],[u])
p=this.a
o=a4.a
C.c.eW(o,p.r)
p.x.jV()
if(r.fx){p=this.a
n=a4.dx.ga0()
p=p.dy
p.toString
p.ao(n.ai(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga0().F(0,a4.dx.ga0())
a4.cx=n}p=p.fr
p.toString
p.ao(n.ai(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkz().F(0,a4.dx.ga0())
a4.ch=n}p=p.fy
p.toString
p.ao(n.ai(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ao(C.r.ai(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ao(C.r.ai(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ao(C.r.ai(n,!0))}if(r.ax>0){j=this.e.a.length
p=this.a.k4
C.c.U(p.a,p.d,j)
for(p=[P.p],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.d(m,i)
m=m[i]
n.toString
H.e(m,"$iai")
n=n.r1
if(i>=n.length)return H.d(n,i)
n=n[i]
h=new Float32Array(H.bR(H.h(m.ai(0,!0),"$ia",p,"$aa")))
C.c.eU(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.V(k,this.f.d)
p=this.a
n=this.f.d
p.ak(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.V(k,this.f.e)
p=this.a
n=this.f.e
p.ad(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.V(k,this.r.d)
p=this.a
n=this.r.d
p.ak(p.y1,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.V(k,this.r.e)
p=this.a
n=this.r.e
p.ad(p.y2,p.ax,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.al
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.V(k,this.x.d)
p=this.a
n=this.x.d
p.ak(p.bs,p.bt,n)
n=this.a
p=this.x.f
n=n.al
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.V(k,this.x.e)
p=this.a
n=this.x.e
p.ad(p.dX,p.bt,n)
n=this.a
p=this.x.f
n=n.al
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bu
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
break
case C.h:this.V(k,this.y.d)
p=this.a
n=this.y.d
p.ak(p.dY,p.bv,n)
n=this.a
p=this.y.f
n=n.bu
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break
case C.i:this.V(k,this.y.e)
p=this.a
n=this.y.e
p.ad(p.dZ,p.bv,n)
n=this.a
p=this.y.f
n=n.bu
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bw
p.toString
m=n.a
g=n.b
n=n.c
C.c.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.by
C.c.R(n.a,n.d,g)
break
case C.h:this.V(k,this.z.d)
p=this.a
n=this.z.d
p.ak(p.e_,p.bx,n)
n=this.a
p=this.z.f
n=n.bw
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.by
C.c.R(p.a,p.d,g)
break
case C.i:this.V(k,this.z.e)
p=this.a
n=this.z.e
p.ad(p.e0,p.bx,n)
n=this.a
p=this.z.f
n=n.bw
n.toString
m=p.a
g=p.b
p=p.c
C.c.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.by
C.c.R(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eb
C.c.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.ct
if(e>=m.length)return H.d(m,e)
b=m[e]
m=f.cR(c.gcr(c))
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.c.w(a.a,a.d,g,m,a0)
a0=c.gae(c)
m=b.c
C.c.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ec
C.c.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cu
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gcJ(c)
g=b.b
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=f.aV(c.gcJ(c))
g=b.c
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gae(c)
g=b.d
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdM()
g=b.e
C.c.R(g.a,g.d,m)
m=c.gdN()
g=b.f
C.c.R(g.a,g.d,m)
m=c.gdO()
g=b.r
C.c.R(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ed
C.c.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cv
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.a
g=b.b
a=m.a
a0=m.b
m=m.c
C.c.w(g.a,g.d,a,a0,m)
m=c.b
a0=m.a
a=m.b
g=m.c
g=m.B(0,Math.sqrt(a0*a0+a*a+g*g))
a=b.c
a0=g.a
m=g.b
g=g.c
C.c.w(a.a,a.d,a0,m,g)
g=f.aV(c.a)
m=b.d
C.c.w(m.a,m.d,g.a,g.b,g.c)
g=c.d
m=b.e
C.c.w(m.a,m.d,g.a,g.b,g.c)
g=c.e
m=b.f
C.c.R(m.a,m.d,g)
g=c.f
m=b.r
C.c.R(m.a,m.d,g)
g=c.r
m=b.x
C.c.R(m.a,m.d,g)
g=c.x
m=b.y
C.c.R(m.a,m.d,g)
g=c.y
m=b.z
C.c.R(m.a,m.d,g);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ee
C.c.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
g=this.a.cw
if(e>=g.length)return H.d(g,e)
b=g[e]
g=c.gbd()
H.h(k,"$ia",m,"$aa")
if(!C.a.W(k,g)){g.sb6(0,k.length)
C.a.h(k,g)}g=c.gcr(c)
a=b.d
C.c.w(a.a,a.d,g.a,g.b,g.c)
g=c.gkQ()
a=b.b
C.c.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbL(c)
a=b.c
C.c.w(a.a,a.d,g.a,g.b,g.c)
g=f.cR(c.gcr(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.c.w(a0.a,a0.d,a,g,a1)
a1=c.gae(c)
g=b.f
C.c.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbd()
g=a1.gb7(a1)
if(!g){g=b.x
C.c.U(g.a,g.d,1)}else{g=b.r
a=a1.gb7(a1)
a0=g.a
g=g.d
if(!a)C.c.U(a0,g,0)
else C.c.U(a0,g,a1.gb6(a1))
g=b.x
C.c.U(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ef
C.c.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.y,n=p.length,m=[P.p],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
a=this.a.cz
if(e>=a.length)return H.d(a,e)
b=a[e]
a=c.gbd()
H.h(k,"$ia",g,"$aa")
if(!C.a.W(k,a)){a.sb6(0,k.length)
C.a.h(k,a)}a2=f.F(0,c.ga0())
a=c.ga0()
a0=$.bm
if(a0==null){a0=new V.W(0,0,0)
$.bm=a0}a0=a.aV(a0)
a=b.b
C.c.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bm
if(a==null){a=new V.W(0,0,0)
$.bm=a}a=a2.aV(a)
a0=b.c
C.c.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.er()
a0=b.d
h=new Float32Array(H.bR(H.h(new V.dl(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ai(0,!0),"$ia",m,"$aa")))
C.c.eT(a0.a,a0.d,!1,h)
a0=c.gae(c)
a=b.e
C.c.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbd()
a=a0.gb7(a0)
if(!a){a=b.r
C.c.U(a.a,a.d,1)}else{a=b.f
a1=a0.gb7(a0)
a3=a.a
a=a.d
if(!a1)C.c.U(a3,a,0)
else C.c.U(a3,a,a0.gb6(a0))
a=b.r
C.c.U(a.a,a.d,0)}a=c.gdM()
a0=b.x
C.c.R(a0.a,a0.d,a)
a=c.gdN()
a0=b.y
C.c.R(a0.a,a0.d,a)
a=c.gdO()
a0=b.z
C.c.R(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eg
C.c.U(p.a,p.d,j)
f=a4.db.ga0()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cA
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gbd()
H.h(k,"$ia",u,"$aa")
if(!C.a.W(k,m)){m.sb6(0,k.length)
C.a.h(k,m)}m=c.gcJ(c)
g=b.b
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcr(c)
g=b.c
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gkQ()
g=b.d
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbL(c)
g=b.e
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=f.aV(c.gcJ(c))
g=b.f
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbd()
g=m.gb7(m)
if(!g){m=b.x
C.c.U(m.a,m.d,1)}else{g=b.r
a=m.gb7(m)
a0=g.a
g=g.d
if(!a)C.c.U(a0,g,0)
else C.c.U(a0,g,m.gb6(m))
m=b.x
C.c.U(m.a,m.d,0)}m=c.gae(c)
g=b.y
C.c.w(g.a,g.d,m.a,m.b,m.c)
m=c.gl_()
g=b.z
C.c.R(g.a,g.d,m)
m=c.gl0()
g=b.Q
C.c.R(g.a,g.d,m)
m=c.gdM()
g=b.ch
C.c.R(g.a,g.d,m)
m=c.gdN()
g=b.cx
C.c.R(g.a,g.d,m)
m=c.gdO()
g=b.cy
C.c.R(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.V(k,this.Q.d)
u=this.a
p=this.Q.d
u.ak(u.e1,u.bz,p)
break
case C.i:this.V(k,this.Q.e)
u=this.a
p=this.Q.e
u.ad(u.e2,u.bz,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga0().er()
a4.Q=p}u=u.id
u.toString
u.ao(p.ai(0,!0))}if(r.dy){this.V(k,this.ch)
u=this.a
p=this.ch
u.ad(u.e3,u.e4,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bA
u.toString
n=p.a
m=p.b
p=p.c
C.c.w(u.a,u.d,n,m,p)
break
case C.h:this.V(k,this.cx.d)
u=this.a
p=this.cx.d
u.ak(u.e5,u.bB,p)
p=this.a
u=this.cx.f
p=p.bA
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
break
case C.i:this.V(k,this.cx.e)
u=this.a
p=this.cx.e
u.ad(u.e6,u.bB,p)
p=this.a
u=this.cx.f
p=p.bA
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bD
u.toString
n=p.a
m=p.b
p=p.c
C.c.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bC
C.c.R(p.a,p.d,m)
break
case C.h:this.V(k,this.cy.d)
u=this.a
p=this.cy.d
u.ak(u.e7,u.bE,p)
p=this.a
u=this.cy.f
p=p.bD
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bC
C.c.R(u.a,u.d,m)
break
case C.i:this.V(k,this.cy.e)
u=this.a
p=this.cy.e
u.ad(u.e8,u.bE,p)
p=this.a
u=this.cy.f
p=p.bD
p.toString
n=u.a
m=u.b
u=u.c
C.c.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bC
C.c.R(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bF
C.c.R(u.a,u.d,n)
break
case C.h:this.V(k,this.db.d)
u=this.a
n=this.db.d
u.ak(u.e9,u.bG,n)
n=this.a
u=this.db.f
n=n.bF
C.c.R(n.a,n.d,u)
break
case C.i:this.V(k,this.db.e)
u=this.a
n=this.db.e
u.ad(u.ea,u.bG,n)
n=this.a
u=this.db.f
n=n.bF
C.c.R(n.a,n.d,u)
break}C.c.cs(o,3042)
C.c.jw(o,770,771)}for(i=0;i<k.length;++i)k[i].bo(a4)
u=a5.e
u.bo(a4)
u.aT(a4)
u.eS(a4)
if(p)C.c.jQ(o,3042)
for(i=0;i<k.length;++i)k[i].eS(a4)
u=this.a
u.toString
C.c.eW(o,null)
u.x.jR()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().al},
sfT:function(a){this.e=H.h(a,"$ia_",[V.ai],"$aa_")}}
O.fh.prototype={}
O.dk.prototype={
aN:function(){}}
O.fi.prototype={}
O.aP.prototype={
dB:function(a){var u,t
if(!J.O(this.f,a)){u=this.f
this.f=a
t=new D.K(this.b+".color",u,a,this,[V.V])
t.b=!0
this.a.ac(t)}},
aN:function(){this.fj()
this.dB(new V.V(1,1,1))},
sae:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aN()
u=this.a
u.a=null
u.ac(null)}this.dB(b)}}
O.fk.prototype={
iA:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.H().a)){this.ch=a
u=new D.K(this.b+".refraction",u,a,this,[P.p])
u.b=!0
this.a.ac(u)}},
aN:function(){this.bU()
this.iA(1)}}
O.fl.prototype={
cc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.H().a)){this.ch=a
u=new D.K(this.b+".shininess",u,a,this,[P.p])
u.b=!0
this.a.ac(u)}},
aN:function(){this.bU()
this.cc(100)}}
O.bo.prototype={}
T.dG.prototype={}
T.fZ.prototype={}
V.aX.prototype={
aH:function(a){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.di.prototype={
aH:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aH(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.h(a,"$ia",[V.at],"$aa")},
$iat:1}
V.ao.prototype={
aH:function(a){return!this.fi(a)},
i:function(a){return"!["+this.cZ(0)+"]"}}
V.fB.prototype={
aH:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bL(this.a)
t=H.bL(this.b)
return u+".."+t},
$iat:1}
V.fJ.prototype={
fo:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aG([P.l,P.M])
for(t=new H.cc(a,a.gm(a),0,[H.aa(a,"R",0)]);t.C();)u.q(0,t.d,!0)
this.siz(u)},
aH:function(a){return this.a.bq(a)},
i:function(a){return P.dC(this.a.gay(),0,null)},
siz:function(a){this.a=H.h(a,"$iF",[P.l,P.M],"$aF")},
$iat:1}
V.cj.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cn(this.a.j(0,b))
r.sa6(H.b([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
jY:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aH(a))return r}return},
i:function(a){return this.b},
siR:function(a){this.c=H.h(a,"$ia",[V.cn],"$aa")}}
V.dL.prototype={
i:function(a){var u,t
u=H.jG(this.b,"\n","\\n")
t=H.jG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cm.prototype={
aI:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.y)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
sir:function(a){var u=P.f
this.c=H.h(a,"$iF",[u,u],"$aF")}}
V.h0.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cj(this,b)
u.siR(H.b([],[V.cn]))
u.d=null
this.a.q(0,b,u)}return u},
P:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cm(this,a)
t=P.f
u.sir(new H.aG([t,t]))
this.b.q(0,a,u)}return u},
eR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dL])
t=this.c
s=[P.l]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.H(a,o)
m=t.jY(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dC(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dC(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dL(j==null?k.b:j,l,o)}++o}}},
siI:function(a){this.a=H.h(a,"$iF",[P.f,V.cj],"$aF")},
siK:function(a){this.b=H.h(a,"$iF",[P.f,V.cm],"$aF")}}
V.cn.prototype={
i:function(a){return this.b.b+": "+this.cZ(0)}}
X.cX.prototype={$ib3:1}
X.eR.prototype={
gE:function(){var u=this.x
if(u==null){u=D.U()
this.x=u}return u}}
X.dt.prototype={
gE:function(){var u=this.f
if(u==null){u=D.U()
this.f=u}return u},
aL:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.M(a)},
fM:function(){return this.aL(null)},
saS:function(a){var u,t
if(!J.O(this.b,a)){u=this.b
if(u!=null)u.gE().L(0,this.gd2())
t=this.b
this.b=a
if(a!=null)a.gE().h(0,this.gd2())
u=new D.K("mover",t,this.b,this,[U.ad])
u.b=!0
this.aL(u)}},
$ib3:1,
$icX:1}
X.dF.prototype={}
V.bd.prototype={
bi:function(a){this.b=new P.eU(C.X)
this.c=null
this.sc2(H.b([],[[P.a,W.aw]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aw]))
t=a.split("\n")
for(u=t.length,s=[W.aw],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.fY(p,0,p.length)
m=n==null?p:n
C.k.fa(o,H.jG(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eG:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.sc2(H.b([],[[P.a,W.aw]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.br()
this.c=t}for(t=t.eR(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)this.bK(t[r])},
sc2:function(a){this.d=H.h(a,"$ia",[[P.a,W.aw]],"$aa")}}
V.j0.prototype={
$1:function(a){H.e(a,"$iaS")
P.jF(C.e.eQ(this.a.gk7(),2)+" fps")},
$S:49}
V.eA.prototype={
bK:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
br:function(){var u,t,s,r
u=V.h1()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.S("a","z")
C.a.h(t.a,s)
s=V.S("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.S("0","9")
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aX())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.v(new H.t("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aX())
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ao()
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.P("Num")
s=u.j(0,"Float")
s.d=s.a.P("Num")
s=u.j(0,"Sym")
s.d=s.a.P("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.P("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.P("String")
s=u.j(0,"EndComment")
s.d=s.a.P("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.P("Whitespace")
s=u.j(0,"Id")
t=s.a.P("Id")
s.d=t
s=[P.f]
t.aI(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aI(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aI(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eS.prototype={
bK:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
br:function(){var u,t,s,r
u=V.h1()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.S("a","z")
C.a.h(t.a,s)
s=V.S("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.S("0","9")
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.S("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.S("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aX())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ao()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.P("Num")
t=u.j(0,"Float")
t.d=t.a.P("Num")
t=u.j(0,"Sym")
t.d=t.a.P("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.P("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.P("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.P("Whitespace")
t=u.j(0,"Id")
s=t.a.P("Id")
t.d=s
t=[P.f]
s.aI(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aI(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aI(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eT.prototype={
bK:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
br:function(){var u,t,s
u=V.h1()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.S("a","z")
C.a.h(t.a,s)
s=V.S("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.S("0","9")
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.v(new H.t("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.v(new H.t("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.v(new H.t("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.v(new H.t("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aX())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aX())
t=u.j(0,"Other").l(0,"Other")
s=new V.ao()
s.sa6(H.b([],[V.at]))
C.a.h(t.a,s)
t=V.v(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.S("a","z")
C.a.h(s.a,t)
t=V.S("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.P("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.P("String")
t=u.j(0,"Id")
s=t.a.P("Id")
t.d=s
s.aI(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.P("Attr")
s=u.j(0,"Other")
s.d=s.a.P("Other")
return u}}
V.fx.prototype={
eG:function(a){H.h(a,"$ia",[P.f],"$aa")
this.sc2(H.b([],[[P.a,W.aw]]))
this.N(C.a.l(a,"\n"),"#111")},
bK:function(a){},
br:function(){return}}
V.fz.prototype={
dH:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.ko().gcL().k(0,H.i(u))
if(t==null)if(d){c.$0()
this.dF(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.jN(this.c).h(0,q)
o=W.lO("radio")
o.checked=s
o.name=u
u=W.m
W.a7(o,"change",H.k(new V.fA(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.F.D(q,o)
n=r.createElement("span")
n.textContent=b
C.F.D(q,n)
J.jN(this.c).h(0,r.createElement("br"))},
b2:function(a,b,c){return this.dH(a,b,c,!1)},
dF:function(a){var u,t,s,r,q
u=P.ko()
t=P.f
s=P.lX(u.gcL(),t,t)
s.q(0,this.a,a)
r=u.eL(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).it(t,new P.id([],[]).cS(""),"",q)}}
V.fA.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dF(this.d)}},
$S:20}
V.fN.prototype={
fq:function(a,b){var u,t,s,r,q,p,o
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
o=W.m
W.a7(u,"scroll",H.k(new V.fP(s),{func:1,ret:-1,args:[o]}),!1,o)},
dJ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.iD()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eR(C.a.kd(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.nv(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.D(t,l)}else{k=P.eb(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.k.D(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.D(t,o)
break}}C.k.D(this.a,t)},
f1:function(a){var u,t,s,r
u=new V.eA("dart")
u.bi("dart")
t=new V.eS("glsl")
t.bi("glsl")
s=new V.eT("html")
s.bi("html")
r=C.a.k_(H.b([u,t,s],[V.bd]),new V.fQ(a))
if(r!=null)return r
u=new V.fx("plain")
u.bi("plain")
return u},
dI:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.l])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cL(r).a4(r,"+")){C.a.q(a7,s,C.b.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a4(r,"-")){C.a.q(a7,s,C.b.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f1(a5)
q.eG(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.eb(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jP(null)
i.href="#"+H.i(m)
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.y)(r),++a0)C.x.D(a,r[a0])
C.n.D(e,d)
C.n.D(e,c)
C.n.D(e,a)
C.o.D(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.y)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.C();)C.x.D(c,a3.gK())
C.n.D(e,d)
C.n.D(e,c)
C.o.D(n,e)}},
ji:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.D(this.a,t)
r=C.o.hc(t,-1)
s=H.e((r&&C.n).dl(r,-1),"$iaR").style
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
o=H.e(C.n.dl(r,-1),"$iaR")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).D(o,p)}},
iD:function(){var u,t,s,r
if(this.b!=null)return
u=V.h1()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ao()
r=[V.at]
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ao()
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ao()
s.sa6(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aX())
s=u.j(0,"Other").l(0,"Other")
t=new V.ao()
t.sa6(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.P("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.P("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.P("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.P("Link")
s=u.j(0,"Other")
s.d=s.a.P("Other")
this.b=u}}
V.fP.prototype={
$1:function(a){P.kk(C.y,new V.fO(this.a))},
$S:20}
V.fO.prototype={
$0:function(){var u,t,s
u=C.e.an(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.fQ.prototype={
$1:function(a){return H.e(a,"$ibd").a===this.a},
$S:51}
N.iS.prototype={
$0:function(){this.a.saa(0,F.jz(1,null,null,1))},
$S:0}
N.iT.prototype={
$0:function(){this.a.saa(0,F.jA(1,!0,!0,1,40,1))},
$S:0}
N.iU.prototype={
$0:function(){this.a.saa(0,F.jA(1,!0,!1,1,40,0))},
$S:0}
N.iV.prototype={
$0:function(){this.a.saa(0,F.nu(6,null,1,6))},
$S:0}
N.iW.prototype={
$0:function(){this.a.saa(0,F.l4(30,1,15,0.5))},
$S:0}
N.iX.prototype={
$0:function(){this.a.saa(0,F.nl(120,1,2,12,0.3,3))},
$S:0}
N.iY.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dI("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dI("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a3.prototype
u.ff=u.i
u=J.db.prototype
u.fh=u.i
u=P.n.prototype
u.fg=u.bN
u=W.N.prototype
u.bT=u.af
u=W.e5.prototype
u.fk=u.au
u=O.dk.prototype
u.fj=u.aN
u=O.aP.prototype
u.bU=u.aN
u=V.di.prototype
u.fi=u.aH
u.cZ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n1","mv",10)
u(P,"n2","mw",10)
u(P,"n3","mx",10)
t(P,"kS","n0",3)
s(W,"ne",4,null,["$4"],["mz"],19,0)
s(W,"nf",4,null,["$4"],["mA"],19,0)
var m
r(m=E.ah.prototype,"geC",0,0,null,["$1","$0"],["eD","kp"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","kq"],1,0)
r(m,"geA",0,0,null,["$1","$0"],["eB","ko"],1,0)
r(m,"gey",0,0,null,["$1","$0"],["ez","kl"],1,0)
q(m,"gkj","kk",5)
q(m,"gkm","kn",5)
r(m=E.dK.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
p(m,"gkG","eM",3)
o(m=X.dR.prototype,"ghM","hN",12)
o(m,"ghy","hz",12)
o(m,"ghG","hH",4)
o(m,"ghQ","hR",26)
o(m,"ghO","hP",26)
o(m,"ghU","hV",4)
o(m,"ghY","hZ",4)
o(m,"ghK","hL",4)
o(m,"ghW","hX",4)
o(m,"ghI","hJ",4)
o(m,"gi_","i0",36)
o(m,"gi1","i2",12)
o(m,"gig","ih",11)
o(m,"gia","ib",11)
o(m,"gic","ie",11)
r(m=D.de.prototype,"gds",0,0,null,["$1","$0"],["dt","hS"],1,0)
o(m,"gi4","i5",38)
q(m,"ghs","ht",16)
q(m,"gi8","i9",16)
r(D.bn.prototype,"ghA",0,0,null,["$1","$0"],["a8","hB"],1,0)
n(V.Y.prototype,"gm","cF",15)
n(V.C.prototype,"gm","cF",15)
r(m=U.ca.prototype,"gbj",0,0,null,["$1","$0"],["a_","aq"],1,0)
q(m,"gfE","fF",14)
q(m,"gi6","i7",14)
r(m=U.dS.prototype,"gbj",0,0,null,["$1","$0"],["a_","aq"],1,0)
o(m,"ghl","hm",2)
o(m,"ghn","ho",2)
o(m,"ghp","hq",2)
o(m,"ghh","hi",2)
o(m,"ghj","hk",2)
o(m,"giP","iQ",2)
o(m,"giN","iO",2)
o(m,"giL","iM",2)
r(m=M.d3.prototype,"gar",0,0,null,["$1","$0"],["aC","fG"],1,0)
q(m,"ghC","hD",5)
q(m,"ghE","hF",5)
r(m=O.dj.prototype,"gfI",0,0,null,["$1","$0"],["ac","fJ"],1,0)
r(m,"giv",0,0,null,["$1","$0"],["dz","iw"],1,0)
q(m,"ghu","hv",29)
q(m,"ghw","hx",29)
r(X.dt.prototype,"gd2",0,0,null,["$1","$0"],["aL","fM"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.J,null)
s(P.J,[H.jf,J.a3,J.an,P.e1,P.n,H.cc,P.aN,H.bB,H.cv,H.ew,H.fC,H.h4,P.bf,H.c4,H.e6,P.bH,H.f4,H.f6,H.f0,P.e7,P.aW,P.az,P.dV,P.fT,P.ck,P.fU,P.aS,P.ag,P.iv,P.i8,P.bP,P.e0,P.R,P.il,P.fc,P.bx,P.eV,P.it,P.ir,P.M,P.ar,P.af,P.aM,P.fv,P.dB,P.dY,P.eQ,P.bg,P.a,P.F,P.D,P.ap,P.f,P.ae,P.bQ,P.hk,P.ib,W.ey,W.br,W.as,W.dr,W.e5,W.ig,W.d4,W.au,W.i7,W.ec,P.ic,P.i2,P.L,O.a_,O.cd,E.eq,E.ah,E.fD,E.dK,Z.dU,Z.hE,Z.cV,Z.bh,Z.aU,D.et,D.bz,D.z,X.cW,X.dc,X.f2,X.f9,X.aH,X.fm,X.h2,X.dR,D.d0,D.a1,D.du,D.bn,D.dH,D.dI,D.dJ,V.V,V.aD,V.eH,V.dl,V.ai,V.a4,V.W,V.aQ,V.dy,V.Y,V.C,U.dS,M.d3,A.cS,A.en,A.fj,A.co,A.cs,A.cq,A.ct,A.cr,A.cu,A.by,A.dN,A.he,F.a2,F.eL,F.b1,F.f3,F.bk,F.dA,F.fK,F.fL,F.fM,F.a9,F.ht,F.hu,F.hx,F.hz,F.hA,F.hB,O.bo,O.dk,T.fZ,V.aX,V.at,V.di,V.fB,V.fJ,V.cj,V.dL,V.cm,V.h0,X.cX,X.dF,X.dt,V.bd,V.fz,V.fN])
s(J.a3,[J.eZ,J.da,J.db,J.aE,J.bi,J.b_,H.bI,W.bA,W.dW,W.eB,W.d1,W.d2,W.m,W.d7,W.dZ,W.dg,W.e3,W.dw,W.aI,W.e8,W.ed,P.cT,P.d5,P.dv,P.bN,P.dz,P.dO])
s(J.db,[J.fw,J.bq,J.b0])
t(J.je,J.aE)
s(J.bi,[J.d9,J.f_])
t(P.f8,P.e1)
s(P.f8,[H.dP,W.hL,W.al,P.eM])
t(H.t,H.dP)
s(P.n,[H.eE,H.fd,H.cx])
s(H.eE,[H.bG,H.f5])
s(P.aN,[H.fe,H.hF])
t(H.ff,H.bG)
t(H.ex,H.ew)
s(P.bf,[H.fu,H.f1,H.hi,H.h6,H.es,H.fH,P.ds,P.aC,P.hj,P.hg,P.bO,P.ev,P.ez])
s(H.c4,[H.j4,H.fY,H.iN,H.iO,H.iP,P.hH,P.hG,P.hI,P.hJ,P.ik,P.ij,P.hR,P.hV,P.hS,P.hT,P.hU,P.hY,P.hZ,P.hX,P.hW,P.fV,P.fW,P.iD,P.i5,P.i4,P.i6,P.f7,P.fb,P.is,P.eC,P.eD,P.ho,P.hl,P.hm,P.hn,P.im,P.io,P.iq,P.ip,P.iz,P.iy,P.iA,P.iB,W.eF,W.hQ,W.fs,W.fr,W.i9,W.ia,W.ii,W.iu,P.ie,P.iF,P.eN,P.eO,E.fE,E.fF,E.fG,E.h_,D.eJ,D.eK,F.iw,F.iG,F.iI,F.iJ,F.iK,F.j1,F.j2,F.j3,F.iR,F.iH,F.hD,F.hC,F.hv,F.hw,V.j0,V.fA,V.fP,V.fO,V.fQ,N.iS,N.iT,N.iU,N.iV,N.iW,N.iX,N.iY])
s(H.fY,[H.fS,H.c2])
t(P.fa,P.bH)
s(P.fa,[H.aG,W.hK])
t(H.dn,H.bI)
s(H.dn,[H.cB,H.cD])
t(H.cC,H.cB)
t(H.dp,H.cC)
t(H.cE,H.cD)
t(H.dq,H.cE)
s(H.dq,[H.fn,H.fo,H.fp,H.fq,H.ce])
t(P.i3,P.iv)
t(P.i1,P.i8)
t(P.ea,P.fc)
t(P.dQ,P.ea)
s(P.bx,[P.eo,P.eG])
t(P.be,P.fU)
s(P.be,[P.ep,P.eU,P.hr,P.hq])
t(P.hp,P.eG)
s(P.af,[P.p,P.l])
s(P.aC,[P.bM,P.eW])
t(P.hM,P.bQ)
s(W.bA,[W.A,W.cy])
s(W.A,[W.N,W.bc,W.c6,W.cz])
s(W.N,[W.w,P.o])
s(W.w,[W.cR,W.el,W.c1,W.bb,W.bw,W.aw,W.eP,W.d6,W.cb,W.dd,W.fI,W.aR,W.dD,W.dE,W.fX,W.cl])
t(W.c5,W.dW)
t(W.e_,W.dZ)
t(W.bC,W.e_)
t(W.d8,W.c6)
t(W.bp,W.m)
s(W.bp,[W.aO,W.a8,W.aJ])
t(W.e4,W.e3)
t(W.cf,W.e4)
t(W.e9,W.e8)
t(W.h3,W.e9)
t(W.aV,W.a8)
t(W.dX,W.d2)
t(W.ee,W.ed)
t(W.e2,W.ee)
t(W.hN,W.hK)
t(W.hO,P.fT)
t(W.jo,W.hO)
t(W.hP,P.ck)
t(W.ih,W.e5)
t(P.id,P.ic)
t(P.ax,P.i2)
t(P.ch,P.o)
s(E.eq,[Z.cU,A.ci,T.dG])
s(D.z,[D.bE,D.bF,D.K,X.fy])
s(X.fy,[X.dh,X.bj,X.dM])
s(O.a_,[D.de,U.ca])
s(D.et,[U.eu,U.ad])
t(U.cY,U.ad)
t(A.fg,A.ci)
s(A.dN,[A.I,A.ha,A.hb,A.hd,A.h8,A.X,A.h9,A.G,A.hc,A.hf,A.cp,A.av,A.aj,A.ak])
t(F.fR,F.eL)
t(F.h7,F.f3)
t(F.hy,F.hz)
t(F.ft,F.hA)
t(O.dj,O.bo)
s(O.dk,[O.fh,O.fi,O.aP])
s(O.aP,[O.fk,O.fl])
s(V.di,[V.ao,V.cn])
t(X.eR,X.dF)
s(V.bd,[V.eA,V.eS,V.eT,V.fx])
u(H.dP,H.cv)
u(H.cB,P.R)
u(H.cC,H.bB)
u(H.cD,P.R)
u(H.cE,H.bB)
u(P.e1,P.R)
u(P.ea,P.il)
u(W.dW,W.ey)
u(W.dZ,P.R)
u(W.e_,W.as)
u(W.e3,P.R)
u(W.e4,W.as)
u(W.e8,P.R)
u(W.e9,W.as)
u(W.ed,P.R)
u(W.ee,W.as)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bb.prototype
C.q=W.bw.prototype
C.k=W.aw.prototype
C.T=W.d1.prototype
C.V=W.d6.prototype
C.W=W.d7.prototype
C.z=W.d8.prototype
C.Y=J.a3.prototype
C.a=J.aE.prototype
C.f=J.d9.prototype
C.r=J.da.prototype
C.e=J.bi.prototype
C.b=J.b_.prototype
C.a4=J.b0.prototype
C.F=W.dd.prototype
C.aa=W.cf.prototype
C.L=J.fw.prototype
C.M=W.dw.prototype
C.c=P.bN.prototype
C.x=W.aR.prototype
C.o=W.dD.prototype
C.n=W.dE.prototype
C.C=J.bq.prototype
C.N=W.aV.prototype
C.O=W.cy.prototype
C.Q=new P.ep(!1)
C.P=new P.eo(C.Q)
C.R=new P.fv()
C.S=new P.hr()
C.l=new P.i3()
C.d=new A.by(0,"ColorSourceType.None")
C.j=new A.by(1,"ColorSourceType.Solid")
C.h=new A.by(2,"ColorSourceType.Texture2D")
C.i=new A.by(3,"ColorSourceType.TextureCube")
C.y=new P.aM(0)
C.U=new P.aM(5e6)
C.X=new P.eV("element",!0,!1,!1,!1)
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
C.G=H.b(u([127,2047,65535,1114111]),[P.l])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a5=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a6=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.H=H.b(u([]),[P.f])
C.a7=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.J=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.a8=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.K=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a9=new H.ex(0,{},C.H,[P.f,P.f])
C.m=new P.hp(!1)})();(function staticFields(){$.aL=0
$.c3=null
$.jR=null
$.js=!1
$.kX=null
$.kQ=null
$.l2=null
$.iL=null
$.iQ=null
$.jD=null
$.bS=null
$.cI=null
$.cJ=null
$.jt=!1
$.T=C.l
$.aZ=null
$.ja=null
$.jY=null
$.jX=null
$.k6=null
$.ka=null
$.bm=null
$.kf=null
$.ks=null
$.kw=null
$.ku=null
$.kv=null
$.hs=null
$.kt=null
$.k9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nC","l6",function(){return H.kW("_$dart_dartClosure")})
u($,"nD","jI",function(){return H.kW("_$dart_js")})
u($,"nJ","l7",function(){return H.aT(H.h5({
toString:function(){return"$receiver$"}}))})
u($,"nK","l8",function(){return H.aT(H.h5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nL","l9",function(){return H.aT(H.h5(null))})
u($,"nM","la",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nP","ld",function(){return H.aT(H.h5(void 0))})
u($,"nQ","le",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nO","lc",function(){return H.aT(H.km(null))})
u($,"nN","lb",function(){return H.aT(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nS","lg",function(){return H.aT(H.km(void 0))})
u($,"nR","lf",function(){return H.aT(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o7","jJ",function(){return P.mu()})
u($,"od","cP",function(){return[]})
u($,"nU","lh",function(){return P.mr()})
u($,"o8","ll",function(){return H.m1(H.bR(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"ob","ln",function(){return P.mg("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oc","lo",function(){return P.mT()})
u($,"o9","lm",function(){return P.k1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oa","jK",function(){return P.k0(P.f,P.bg)})
u($,"o0","lk",function(){return Z.ay(0)})
u($,"nV","li",function(){return Z.ay(511)})
u($,"o2","b8",function(){return Z.ay(1)})
u($,"o1","b7",function(){return Z.ay(2)})
u($,"nX","b6",function(){return Z.ay(4)})
u($,"o3","b9",function(){return Z.ay(8)})
u($,"o4","ba",function(){return Z.ay(16)})
u($,"nY","cN",function(){return Z.ay(32)})
u($,"nZ","cO",function(){return Z.ay(64)})
u($,"o_","lj",function(){return Z.ay(96)})
u($,"o5","c0",function(){return Z.ay(128)})
u($,"nW","b5",function(){return Z.ay(256)})
u($,"nB","l5",function(){return new V.eH(1e-9)})
u($,"nA","H",function(){return $.l5()})})()
var v={mangledGlobalNames:{l:"int",p:"double",af:"num",f:"String",M:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.l,[P.n,E.ah]]},{func:1,ret:P.D,args:[F.a2]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.D,args:[F.a9,P.p,P.p]},{func:1,ret:P.D,args:[D.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.l,[P.n,U.ad]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.l,[P.n,D.a1]]},{func:1,args:[,]},{func:1,ret:V.W,args:[P.p]},{func:1,ret:P.M,args:[W.N,P.f,P.f,W.br]},{func:1,ret:P.D,args:[W.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.M,args:[W.A]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.M,args:[W.au]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.l,[P.n,V.ai]]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.D,args:[P.af]},{func:1,args:[W.m]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[P.l]},{func:1,ret:P.D,args:[P.f,,]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.M,args:[[P.n,D.a1]]},{func:1,ret:P.D,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.F,P.f,P.f],args:[[P.F,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[P.ap]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.aS]},{func:1,args:[P.f]},{func:1,ret:P.M,args:[V.bd]},{func:1,args:[,P.f]},{func:1,ret:W.N,args:[W.A]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a3,DOMError:J.a3,MediaError:J.a3,Navigator:J.a3,NavigatorConcurrentHardware:J.a3,NavigatorUserMediaError:J.a3,OverconstrainedError:J.a3,PositionError:J.a3,WebGLActiveInfo:J.a3,WebGLRenderbuffer:J.a3,WebGL2RenderingContext:J.a3,WebGLTexture:J.a3,SQLError:J.a3,ArrayBufferView:H.bI,Float32Array:H.dp,Int16Array:H.fn,Int32Array:H.fo,Int8Array:H.fp,Uint32Array:H.fq,Uint8Array:H.ce,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLImageElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.cR,HTMLAreaElement:W.el,HTMLBaseElement:W.c1,HTMLBodyElement:W.bb,HTMLCanvasElement:W.bw,CDATASection:W.bc,CharacterData:W.bc,Comment:W.bc,ProcessingInstruction:W.bc,Text:W.bc,CSSStyleDeclaration:W.c5,MSStyleCSSProperties:W.c5,CSS2Properties:W.c5,HTMLDivElement:W.aw,XMLDocument:W.c6,Document:W.c6,DOMException:W.eB,DOMImplementation:W.d1,DOMRectReadOnly:W.d2,Element:W.N,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.bA,HTMLFormElement:W.eP,HTMLHeadElement:W.d6,History:W.d7,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.d8,HTMLInputElement:W.cb,KeyboardEvent:W.aO,HTMLLabelElement:W.dd,Location:W.dg,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.A,ShadowRoot:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cf,RadioNodeList:W.cf,Range:W.dw,HTMLSelectElement:W.fI,HTMLTableCellElement:W.aR,HTMLTableDataCellElement:W.aR,HTMLTableHeaderCellElement:W.aR,HTMLTableElement:W.dD,HTMLTableRowElement:W.dE,HTMLTableSectionElement:W.fX,HTMLTemplateElement:W.cl,Touch:W.aI,TouchEvent:W.aJ,TouchList:W.h3,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,WheelEvent:W.aV,Window:W.cy,DOMWindow:W.cy,Attr:W.cz,ClientRect:W.dX,DOMRect:W.dX,NamedNodeMap:W.e2,MozNamedAttrMap:W.e2,SVGScriptElement:P.ch,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.cT,WebGLFramebuffer:P.d5,WebGLProgram:P.dv,WebGLRenderingContext:P.bN,WebGLShader:P.dz,WebGLUniformLocation:P.dO})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.l_,[])
else N.l_([])})})()
//# sourceMappingURL=test.dart.js.map
