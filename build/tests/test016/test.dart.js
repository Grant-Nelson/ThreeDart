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
a[c]=function(){a[c]=function(){H.lD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iC(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={il:function il(a){this.a=a},
ij:function(){return new P.ch("No element")},
kp:function(){return new P.ch("Too many elements")},
o:function o(a){this.a=a},
eu:function eu(){},
bz:function bz(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eY:function eY(a,b,c){this.a=a
this.b=b
this.$ti=c},
eZ:function eZ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
f_:function f_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hc:function hc(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(){},
dN:function dN(){},
dM:function dM(){},
bQ:function(a){var u,t
u=H.I(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lk:function(a){return v.types[H.a0(a)]},
lr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iaB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.h(H.bL(a))
return u},
kH:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eN(u)
t=u[0]
s=u[1]
return new H.fj(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bD:function(a){return H.ky(a)+H.iz(H.bm(a),0,null)},
ky:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icv){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bQ(r.length>1&&C.i.aJ(r,0)===36?C.i.bc(r,1):r)},
jc:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kG:function(a){var u,t,s,r
u=H.b([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bL(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bi(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bL(r))}return H.jc(u)},
jd:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bL(s))
if(s<0)throw H.h(H.bL(s))
if(s>65535)return H.kG(a)}return H.jc(a)},
io:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bi(u,10))>>>0,56320|u&1023)}throw H.h(P.au(a,0,1114111,null,null))},
bC:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kF:function(a){var u=H.bC(a).getFullYear()+0
return u},
kD:function(a){var u=H.bC(a).getMonth()+1
return u},
kz:function(a){var u=H.bC(a).getDate()+0
return u},
kA:function(a){var u=H.bC(a).getHours()+0
return u},
kC:function(a){var u=H.bC(a).getMinutes()+0
return u},
kE:function(a){var u=H.bC(a).getSeconds()+0
return u},
kB:function(a){var u=H.bC(a).getMilliseconds()+0
return u},
B:function(a){throw H.h(H.bL(a))},
l:function(a,b){if(a==null)J.bo(a)
throw H.h(H.cK(a,b))},
cK:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
u=H.a0(J.bo(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bx(b,a,"index",null,u)
return P.fh(b,"index",null)},
lh:function(a,b,c){if(a>c)return new P.bE(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bE(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
bL:function(a){return new P.az(!0,a,null,null)},
ld:function(a){if(typeof a!=="number")throw H.h(H.bL(a))
return a},
h:function(a){var u
if(a==null)a=new P.dp()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jQ})
u.name=""}else u.toString=H.jQ
return u},
jQ:function(){return J.aj(this.dartException)},
q:function(a){throw H.h(a)},
x:function(a){throw H.h(P.b7(a))},
aP:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j6:function(a,b){return new H.fc(a,b==null?null:b.method)},
im:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eQ(a,t,u?null:b.receiver)},
ar:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.i7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bi(s,16)&8191)===10)switch(r){case 438:return u.$1(H.im(H.e(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.j6(H.e(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jT()
p=$.jU()
o=$.jV()
n=$.jW()
m=$.jZ()
l=$.k_()
k=$.jY()
$.jX()
j=$.k1()
i=$.k0()
h=q.af(t)
if(h!=null)return u.$1(H.im(H.I(t),h))
else{h=p.af(t)
if(h!=null){h.method="call"
return u.$1(H.im(H.I(t),h))}else{h=o.af(t)
if(h==null){h=n.af(t)
if(h==null){h=m.af(t)
if(h==null){h=l.af(t)
if(h==null){h=k.af(t)
if(h==null){h=n.af(t)
if(h==null){h=j.af(t)
if(h==null){h=i.af(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.j6(H.I(t),h))}}return u.$1(new H.fY(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dA()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.az(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dA()
return a},
bO:function(a){var u
if(a==null)return new H.e6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e6(a)},
lj:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
lq:function(a,b,c,d,e,f){H.d(a,"$ibb")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.p("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lq)
a.$identity=u
return u},
ki:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ia){u.$reflectionInfo=d
s=H.kH(u).r}else s=d
r=e?Object.create(new H.fy().constructor.prototype):Object.create(new H.bU(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aF
if(typeof p!=="number")return p.F()
$.aF=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iV(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lk,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iT:H.ib
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iV(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kf:function(a,b,c,d){var u=H.ib
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iV:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kf(t,!r,u,b)
if(t===0){r=$.aF
if(typeof r!=="number")return r.F()
$.aF=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
if(q==null){q=H.ej("self")
$.bV=q}return new Function(r+H.e(q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aF
if(typeof r!=="number")return r.F()
$.aF=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
if(q==null){q=H.ej("self")
$.bV=q}return new Function(r+H.e(q)+"."+H.e(u)+"("+o+");}")()},
kg:function(a,b,c,d){var u,t
u=H.ib
t=H.iT
switch(b?-1:a){case 0:throw H.h(H.kK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kh:function(a,b){var u,t,s,r,q,p,o,n
u=$.bV
if(u==null){u=H.ej("self")
$.bV=u}t=$.iS
if(t==null){t=H.ej("receiver")
$.iS=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kg(r,!p,s,b)
if(r===1){u="return function(){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+");"
t=$.aF
if(typeof t!=="number")return t.F()
$.aF=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+", "+n+");"
t=$.aF
if(typeof t!=="number")return t.F()
$.aF=t+1
return new Function(u+t+"}")()},
iC:function(a,b,c,d,e,f,g){return H.ki(a,b,H.a0(c),d,!!e,!!f,g)},
ib:function(a){return a.a},
iT:function(a){return a.c},
ej:function(a){var u,t,s,r,q
u=new H.bU("self","target","receiver","name")
t=J.eN(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aD(a,"String"))},
mk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aD(a,"double"))},
lw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aD(a,"num"))},
iA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aD(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aD(a,"int"))},
jO:function(a,b){throw H.h(H.aD(a,H.bQ(H.I(b).substring(2))))},
ly:function(a,b){throw H.h(H.ke(a,H.bQ(H.I(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.jO(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.ly(a,b)},
i2:function(a){if(a==null)return a
if(!!J.S(a).$ia)return a
throw H.h(H.aD(a,"List<dynamic>"))},
ls:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ia)return a
if(u[b])return a
H.jO(a,b)},
jI:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
ee:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jI(J.S(a))
if(u==null)return!1
return H.jz(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.iw)return a
$.iw=!0
try{if(H.ee(a,b))return a
u=H.i5(b)
t=H.aD(a,u)
throw H.h(t)}finally{$.iw=!1}},
iD:function(a,b){if(a!=null&&!H.iB(a,b))H.q(H.aD(a,H.i5(b)))
return a},
aD:function(a,b){return new H.fO("TypeError: "+P.ey(a)+": type '"+H.jD(a)+"' is not a subtype of type '"+b+"'")},
ke:function(a,b){return new H.ek("CastError: "+P.ey(a)+": type '"+H.jD(a)+"' is not a subtype of type '"+b+"'")},
jD:function(a){var u,t
u=J.S(a)
if(!!u.$ibX){t=H.jI(u)
if(t!=null)return H.i5(t)
return"Closure"}return H.bD(a)},
lD:function(a){throw H.h(new P.ep(H.I(a)))},
kK:function(a){return new H.fo(a)},
jJ:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bm:function(a){if(a==null)return
return a.$ti},
ml:function(a,b,c){return H.bP(a["$a"+H.e(c)],H.bm(b))},
hY:function(a,b,c,d){var u
H.I(c)
H.a0(d)
u=H.bP(a["$a"+H.e(c)],H.bm(b))
return u==null?null:u[d]},
a4:function(a,b,c){var u
H.I(b)
H.a0(c)
u=H.bP(a["$a"+H.e(b)],H.bm(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.a0(b)
u=H.bm(a)
return u==null?null:u[b]},
i5:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
H.f(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bQ(a[0].name)+H.iz(a,1,b)
if(typeof a=="function")return H.bQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.e(b[t])}if('func' in a)return H.l3(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.m]
H.f(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.l(b,m)
o=C.i.F(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bl(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bl(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bl(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bl(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.li(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.I(u[g])
i=i+h+H.bl(d[c],b)+(" "+H.e(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iz:function(a,b,c){var u,t,s,r,q,p
H.f(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.aZ("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.i(0)+">"},
bP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cJ:function(a,b,c,d){var u,t
H.I(b)
H.i2(c)
H.I(d)
if(a==null)return!1
u=H.bm(a)
t=J.S(a)
if(t[b]==null)return!1
return H.jG(H.bP(t[d],u),null,c,null)},
f:function(a,b,c,d){H.I(b)
H.i2(c)
H.I(d)
if(a==null)return a
if(H.cJ(a,b,c,d))return a
throw H.h(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bQ(b.substring(2))+H.iz(c,0,null),v.mangledGlobalNames)))},
jG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ay(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ay(a[t],b,c[t],d))return!1
return!0},
mi:function(a,b,c){return a.apply(b,H.bP(J.S(b)["$a"+H.e(c)],H.bm(b)))},
jL:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="F"||a===-1||a===-2||H.jL(u)}return!1},
iB:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="F"||b===-1||b===-2||H.jL(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iB(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ee(a,b)}u=J.S(a).constructor
t=H.bm(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ay(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.iB(a,b))throw H.h(H.aD(a,H.i5(b)))
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
if('func' in c)return H.jz(a,b,c,d)
if('func' in a)return c.name==="bb"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,s,d)
else if(H.ay(a,b,s,d))return!0
else{if(!('$i'+"c3" in t.prototype))return!1
r=t.prototype["$a"+"c3"]
q=H.bP(r,u?a.slice(1):null)
return H.ay(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jG(H.bP(m,u),b,p,d)},
jz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.lv(h,b,g,d)},
lv:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ay(c[r],d,a[r],b))return!1}return!0},
mj:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
lt:function(a){var u,t,s,r,q,p
u=H.I($.jK.$1(a))
t=$.hW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i1[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.I($.jF.$2(a,u))
if(u!=null){t=$.hW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i1[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.i4(s)
$.hW[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.i1[u]=s
return s}if(q==="-"){p=H.i4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jN(a,s)
if(q==="*")throw H.h(P.jo(u))
if(v.leafTags[u]===true){p=H.i4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jN(a,s)},
jN:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
i4:function(a){return J.iI(a,!1,null,!!a.$iaB)},
lu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.i4(u)
else return J.iI(u,c,null,null)},
lo:function(){if(!0===$.iH)return
$.iH=!0
H.lp()},
lp:function(){var u,t,s,r,q,p,o,n
$.hW=Object.create(null)
$.i1=Object.create(null)
H.ln()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jP.$1(q)
if(p!=null){o=H.lu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ln:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bK(C.P,H.bK(C.U,H.bK(C.A,H.bK(C.A,H.bK(C.T,H.bK(C.Q,H.bK(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jK=new H.hZ(q)
$.jF=new H.i_(p)
$.jP=new H.i0(o)},
bK:function(a,b){return a(b)||b},
kr:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.eF("Illegal RegExp pattern ("+String(r)+")",a,null))},
lB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iL:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fj:function fj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fM:function fM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fc:function fc(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a){this.a=a},
i7:function i7(a){this.a=a},
e6:function e6(a){this.a=a
this.b=null},
bX:function bX(){},
fE:function fE(){},
fy:function fy(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a){this.a=a},
ek:function ek(a){this.a=a},
fo:function fo(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
da:function da(a,b){this.a=a
this.$ti=b},
eT:function eT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
eP:function eP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function(a){return a},
cF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cK(b,a))},
l2:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.lh(a,b,c))
return b},
dl:function dl(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
dm:function dm(){},
f9:function f9(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
li:function(a){return J.j0(a?Object.keys(a):[],null)},
lx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hX:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iH==null){H.lo()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.jo("Return interceptor for "+H.e(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iM()]
if(q!=null)return q
q=H.lt(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.iM(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
kq:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.ia(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.au(a,0,4294967295,"length",null))
return J.j0(new Array(a),b)},
j0:function(a,b){return J.eN(H.b(a,[b]))},
eN:function(a){H.i2(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d4.prototype
return J.d3.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.d5.prototype
if(typeof a=="boolean")return J.eO.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.hX(a)},
iE:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.hX(a)},
iF:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.hX(a)},
iG:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cv.prototype
return a},
ai:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.hX(a)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).t(a,b)},
k7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iE(a).l(a,b)},
k8:function(a,b,c,d){return J.ai(a).fi(a,b,c,d)},
ef:function(a,b){return J.ai(a).hP(a,b)},
iP:function(a,b){return J.ai(a).B(a,b)},
i8:function(a,b){return J.iF(a).a7(a,b)},
k9:function(a){return J.ai(a).giU(a)},
bn:function(a){return J.S(a).gG(a)},
bS:function(a){return J.iF(a).gO(a)},
bo:function(a){return J.iE(a).gp(a)},
ka:function(a){return J.ai(a).gjW(a)},
i9:function(a,b){return J.ai(a).aT(a,b)},
iQ:function(a){return J.iF(a).jP(a)},
kb:function(a,b,c){return J.iG(a).bd(a,b,c)},
kc:function(a){return J.iG(a).k6(a)},
aj:function(a){return J.S(a).i(a)},
a1:function a1(){},
eO:function eO(){},
d5:function d5(){},
d7:function d7(){},
fe:function fe(){},
cv:function cv(){},
bg:function bg(){},
aH:function aH(a){this.$ti=a},
ik:function ik(a){this.$ti=a},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d6:function d6(){},
d4:function d4(){},
d3:function d3(){},
by:function by(){}},P={
kS:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.la()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bM(new P.he(u),1)).observe(t,{childList:true})
return new P.hd(u,t,s)}else if(self.setImmediate!=null)return P.lb()
return P.lc()},
kT:function(a){self.scheduleImmediate(H.bM(new P.hf(H.j(a,{func:1,ret:-1})),0))},
kU:function(a){self.setImmediate(H.bM(new P.hg(H.j(a,{func:1,ret:-1})),0))},
kV:function(a){P.ir(C.q,H.j(a,{func:1,ret:-1}))},
ir:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.a1(a.a,1000)
return P.l0(u<0?0:u,b)},
jm:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aN]})
u=C.h.a1(a.a,1000)
return P.l1(u<0?0:u,b)},
l0:function(a,b){var u=new P.e7(!0)
u.fc(a,b)
return u},
l1:function(a,b){var u=new P.e7(!1)
u.fd(a,b)
return u},
kW:function(a,b){var u,t,s
b.a=1
try{a.er(new P.ho(b),new P.hp(b),null)}catch(s){u=H.ar(s)
t=H.bO(s)
P.lz(new P.hq(b,u,t))}},
ju:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iax")
if(u>=4){t=b.cd()
b.a=a.a
b.c=a.c
P.cz(b,t)}else{t=H.d(b.c,"$iaS")
b.a=2
b.c=a
a.dt(t)}},
cz:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$ia7")
t=t.b
p=q.a
o=q.b
t.toString
P.hS(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cz(u.a,b)}t=u.a
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
if(k){H.d(m,"$ia7")
t=t.b
p=m.a
o=m.b
t.toString
P.hS(null,null,t,p,o)
return}j=$.R
if(j!=l)$.R=l
else j=null
t=b.c
if(t===8)new P.hu(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ht(s,b,m).$0()}else if((t&2)!==0)new P.hs(u,s,b).$0()
if(j!=null)$.R=j
t=s.b
if(!!J.S(t).$ic3){if(t.a>=4){i=H.d(o.c,"$iaS")
o.c=null
b=o.bh(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ju(t,o)
return}}h=b.b
i=H.d(h.c,"$iaS")
h.c=null
b=h.bh(i)
t=s.a
p=s.b
if(!t){H.A(p,H.v(h,0))
h.a=4
h.c=p}else{H.d(p,"$ia7")
h.a=8
h.c=p}u.a=h
t=h}},
l6:function(a,b){if(H.ee(a,{func:1,args:[P.L,P.ag]}))return H.j(a,{func:1,ret:null,args:[P.L,P.ag]})
if(H.ee(a,{func:1,args:[P.L]}))return H.j(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.ia(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l5:function(){var u,t
for(;u=$.bJ,u!=null;){$.cI=null
t=u.b
$.bJ=t
if(t==null)$.cH=null
u.a.$0()}},
l9:function(){$.ix=!0
try{P.l5()}finally{$.cI=null
$.ix=!1
if($.bJ!=null)$.iN().$1(P.jH())}},
jC:function(a){var u=new P.dV(H.j(a,{func:1,ret:-1}))
if($.bJ==null){$.cH=u
$.bJ=u
if(!$.ix)$.iN().$1(P.jH())}else{$.cH.b=u
$.cH=u}},
l8:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bJ
if(u==null){P.jC(a)
$.cI=$.cH
return}t=new P.dV(a)
s=$.cI
if(s==null){t.b=u
$.cI=t
$.bJ=t}else{t.b=s.b
s.b=t
$.cI=t
if(t.b==null)$.cH=t}},
lz:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.R
if(C.l===t){P.hU(null,null,C.l,a)
return}t.toString
P.hU(null,null,t,H.j(t.cm(a),u))},
jl:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.R
if(t===C.l){t.toString
return P.ir(a,b)}return P.ir(a,H.j(t.cm(b),u))},
kQ:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aN]}
H.j(b,u)
t=$.R
if(t===C.l){t.toString
return P.jm(a,b)}s=t.dH(b,P.aN)
$.R.toString
return P.jm(a,H.j(s,u))},
hS:function(a,b,c,d,e){var u={}
u.a=d
P.l8(new P.hT(u,e))},
jA:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
jB:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
l7:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
hU:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cm(d):c.iV(d,-1)
P.jC(d)},
he:function he(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
e7:function e7(a){this.a=a
this.b=null
this.c=0},
hM:function hM(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e){var _=this
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
hn:function hn(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a
this.b=null},
fz:function fz(){},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
ci:function ci(){},
fA:function fA(){},
aN:function aN(){},
a7:function a7(a,b){this.a=a
this.b=b},
hP:function hP(){},
hT:function hT(a,b){this.a=a
this.b=b},
hA:function hA(){},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function(a,b,c){H.i2(a)
return H.f(H.lj(a,new H.aI([b,c])),"$ij1",[b,c],"$aj1")},
kt:function(a,b){return new H.aI([a,b])},
db:function(a,b,c,d){return new P.hy([d])},
iv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l_:function(a,b,c){var u=new P.e0(a,b,[c])
u.c=a.e
return u},
ko:function(a,b,c){var u,t
if(P.iy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.cN()
C.a.h(t,a)
try{P.l4(a,u)}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}t=P.jj(b,H.ls(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
ii:function(a,b,c){var u,t,s
if(P.iy(a))return b+"..."+c
u=new P.aZ(b)
t=$.cN()
C.a.h(t,a)
try{s=u
s.a=P.jj(s.a,a,", ")}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iy:function(a){var u,t
for(u=0;t=$.cN(),u<t.length;++u)if(a===t[u])return!0
return!1},
l4:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.f(b,"$ia",[P.m],"$aa")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.e(u.gE())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gE();++s
if(!u.u()){if(s<=4){C.a.h(b,H.e(o))
return}q=H.e(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE();++s
for(;u.u();o=n,n=m){m=u.gE();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.e(o)
q=H.e(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
j2:function(a,b){var u,t,s
u=P.db(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s)u.h(0,H.A(a[s],b))
return u},
j3:function(a){var u,t
u={}
if(P.iy(a))return"{...}"
t=new P.aZ("")
try{C.a.h($.cN(),a)
t.a+="{"
u.a=!0
a.a2(0,new P.eX(u,t))
t.a+="}"}finally{u=$.cN()
if(0>=u.length)return H.l(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hy:function hy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bI:function bI(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eU:function eU(){},
T:function T(){},
eW:function eW(){},
eX:function eX(a,b){this.a=a
this.b=b},
bA:function bA(){},
hF:function hF(){},
e1:function e1(){},
bY:function bY(){},
bZ:function bZ(){},
ew:function ew(){},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eJ:function eJ(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(){},
hN:function hN(a){this.b=this.a=0
this.c=a},
kn:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.bD(a)+"'"},
kv:function(a,b,c,d){var u,t
H.A(b,d)
u=J.kq(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.f(u,"$ia",[d],"$aa")},
kw:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gO(a);s.u();)C.a.h(t,H.A(s.gE(),c))
if(b)return t
return H.f(J.eN(t),"$ia",u,"$aa")},
iq:function(a,b,c){var u,t
u=P.y
H.f(a,"$ii",[u],"$ai")
if(a.constructor===Array){H.f(a,"$iaH",[u],"$aaH")
t=a.length
c=P.je(b,c,t,null,null,null)
return H.jd(b>0||c<t?C.a.eP(a,b,c):a)}return P.kO(a,b,c)},
kO:function(a,b,c){var u,t,s
H.f(a,"$ii",[P.y],"$ai")
u=J.bS(a)
for(t=0;t<b;++t)if(!u.u())throw H.h(P.au(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gE())
return H.jd(s)},
kI:function(a,b,c){return new H.eP(a,H.kr(a,!1,!0,!1))},
jj:function(a,b,c){var u=J.bS(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gE())
while(u.u())}else{a+=H.e(u.gE())
for(;u.u();)a=a+c+H.e(u.gE())}return a},
jy:function(a,b,c,d){var u,t,s,r,q,p
H.f(a,"$ia",[P.y],"$aa")
if(c===C.x){u=$.k6().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.j2(H.A(b,H.a4(c,"bY",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.io(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kj:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cW:function(a){if(a>=10)return""+a
return"0"+a},
iX:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ey:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kn(a)},
kd:function(a){return new P.az(!1,null,null,a)},
ia:function(a,b,c){return new P.az(!0,a,b,c)},
fh:function(a,b,c){return new P.bE(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bE(b,c,!0,a,d,"Invalid value")},
je:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.au(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.au(b,a,c,"end",f))
return b}return c},
bx:function(a,b,c,d,e){var u=H.a0(e==null?J.bo(b):e)
return new P.eM(b,u,!0,a,c,"Index out of range")},
ap:function(a){return new P.fZ(a)},
jo:function(a){return new P.fX(a)},
ji:function(a){return new P.ch(a)},
b7:function(a){return new P.en(a)},
p:function(a){return new P.dY(a)},
iK:function(a){H.lx(a)},
H:function H(){},
ad:function ad(a,b){this.a=a
this.b=b},
w:function w(){},
b9:function b9(a){this.a=a},
es:function es(){},
et:function et(){},
ba:function ba(){},
dp:function dp(){},
az:function az(a,b,c,d){var _=this
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
eM:function eM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fZ:function fZ(a){this.a=a},
fX:function fX(a){this.a=a},
ch:function ch(a){this.a=a},
en:function en(a){this.a=a},
fd:function fd(){},
dA:function dA(){},
ep:function ep(a){this.a=a},
dY:function dY(a){this.a=a},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(){},
y:function y(){},
i:function i(){},
aG:function aG(){},
a:function a(){},
F:function F(){},
a6:function a6(){},
L:function L(){},
ag:function ag(){},
m:function m(){},
aZ:function aZ(a){this.a=a},
lg:function(a){var u,t
u=J.S(a)
if(!!u.$ibc){t=u.gdP(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ea(a.data,a.height,a.width)},
lf:function(a){if(a instanceof P.ea)return{data:a.a,height:a.b,width:a.c}
return a},
le:function(a,b){var u={}
a.a2(0,new P.hV(u))
return u},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
eC:function eC(){},
eD:function eD(){},
hx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hz:function hz(){},
av:function av(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ce:function ce(){},
n:function n(){},
cQ:function cQ(){},
d0:function d0(){},
ds:function ds(){},
bF:function bF(){},
dv:function dv(){},
dD:function dD(){},
dL:function dL(){}},W={
iR:function(a){var u=document.createElement("a")
return u},
ic:function(a,b){var u=document.createElement("canvas")
return u},
kl:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).ae(u,a,b,c)
t.toString
u=W.z
u=new H.cw(new W.ab(t),H.j(new W.ev(),{func:1,ret:P.H,args:[u]}),[u])
return H.d(u.gaG(u),"$iM")},
km:function(a){H.d(a,"$ibu")
return"wheel"},
c1:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ka(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ar(s)}return u},
hw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jw:function(a,b,c,d){var u,t
u=W.hw(W.hw(W.hw(W.hw(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a_:function(a,b,c,d,e){var u,t
u=W.jE(new W.hm(c),W.k)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.k]})
if(t)J.k8(a,b,u,!1)}return new W.hl(a,b,u,!1,[e])},
jv:function(a){var u,t
u=W.iR(null)
t=window.location
u=new W.bk(new W.hE(u,t))
u.f1(a)
return u},
kX:function(a,b,c,d){H.d(a,"$iM")
H.I(b)
H.I(c)
H.d(d,"$ibk")
return!0},
kY:function(a,b,c,d){var u,t,s
H.d(a,"$iM")
H.I(b)
H.I(c)
u=H.d(d,"$ibk").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jx:function(){var u,t,s,r,q
u=P.m
t=P.j2(C.t,u)
s=H.v(C.t,0)
r=H.j(new W.hK(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hJ(t,P.db(null,null,null,u),P.db(null,null,null,u),P.db(null,null,null,u),null)
t.fb(null,new H.f_(C.t,r,[s,u]),q,null)
return t},
jE:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.l)return a
return u.dH(a,b)},
t:function t(){},
cO:function cO(){},
eg:function eg(){},
bT:function bT(){},
b4:function b4(){},
bq:function bq(){},
br:function br(){},
b5:function b5(){},
c_:function c_(){},
eo:function eo(){},
as:function as(){},
c0:function c0(){},
er:function er(){},
cX:function cX(){},
cY:function cY(){},
hi:function hi(a,b){this.a=a
this.b=b},
M:function M(){},
ev:function ev(){},
k:function k(){},
bu:function bu(){},
eE:function eE(){},
d1:function d1(){},
bw:function bw(){},
d2:function d2(){},
bc:function bc(){},
c5:function c5(){},
aJ:function aJ(){},
dc:function dc(){},
c9:function c9(){},
a2:function a2(){},
ab:function ab(a){this.a=a},
z:function z(){},
cb:function cb(){},
dt:function dt(){},
fp:function fp(){},
bG:function bG(){},
dB:function dB(){},
dC:function dC(){},
fD:function fD(){},
ck:function ck(){},
aO:function aO(){},
aC:function aC(){},
fL:function fL(){},
bj:function bj(){},
hb:function hb(){},
aR:function aR(){},
cx:function cx(){},
cy:function cy(){},
dX:function dX(){},
e2:function e2(){},
hh:function hh(){},
hj:function hj(a){this.a=a},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hl:function hl(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hm:function hm(a){this.a=a},
bk:function bk(a){this.a=a},
ak:function ak(){},
dn:function dn(a){this.a=a},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(){},
hG:function hG(){},
hH:function hH(){},
hJ:function hJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hK:function hK(){},
hI:function hI(){},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
an:function an(){},
hE:function hE(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
hO:function hO(a){this.a=a},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){}},O={
id:function(a){var u=new O.U([a])
u.bf(a)
return u},
U:function U(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c8:function c8(){this.b=this.a=null},
df:function df(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f0:function f0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c7:function c7(){},
f1:function f1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aK:function aK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f3:function f3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f4:function f4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bi:function bi(){}},E={
j_:function(a,b,c,d,e,f){var u=new E.a8()
u.a=d
u.b=!0
u.sf0(0,O.id(E.a8))
u.y.aV(u.gjz(),u.gjC())
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
u.sbP(0,e)
return u},
kJ:function(a,b){var u=new E.fk(a,b)
u.eX(a,b)
return u},
kP:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibq)return E.jk(a,!0,!0,!0,!1)
t=W.ic(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdL(a).h(0,t)
r=E.jk(t,!0,!0,!0,!1)
r.a=a
return r},
jk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dH()
t=P.ku(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.o.bN(a,"webgl",t)
s=H.d(s==null?C.o.bN(a,"experimental-webgl",t):s,"$ibF")
if(s==null)H.q(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kJ(s,a)
r=new T.fF(s)
r.b=H.a0((s&&C.b).cT(s,3379))
r.c=H.a0(C.b.cT(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dO(a)
q=new X.eR()
q.c=new X.am(!1,!1,!1)
q.shM(P.db(null,null,null,P.y))
r.b=q
q=new X.f5(r)
q.f=0
q.r=V.aX()
q.x=V.aX()
q.Q=1
q.ch=1
r.c=q
q=new X.eV(r)
q.r=0
q.x=V.aX()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fK(r)
q.e=0
q.f=V.aX()
q.r=V.aX()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfA(H.b([],[[P.ci,P.L]]))
q=r.z
p=document
o=W.a2
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a_(p,"contextmenu",H.j(r.gh7(),n),!1,o))
q=r.z
m=W.k
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a_(a,"focus",H.j(r.ghd(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a_(a,"blur",H.j(r.gh1(),l),!1,m))
q=r.z
k=W.aJ
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a_(p,"keyup",H.j(r.ghh(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a_(p,"keydown",H.j(r.ghf(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a_(a,"mousedown",H.j(r.ghl(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a_(a,"mouseup",H.j(r.ghp(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a_(a,"mousemove",H.j(r.ghn(),n),!1,o))
k=r.z
j=W.aR;(k&&C.a).h(k,W.a_(a,H.I(W.km(a)),H.j(r.ghr(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a_(p,"mousemove",H.j(r.gh9(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a_(p,"mouseup",H.j(r.ghb(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a_(p,"pointerlockchange",H.j(r.ght(),l),!1,m))
m=r.z
l=W.aC
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a_(a,"touchstart",H.j(r.ghJ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a_(a,"touchend",H.j(r.ghF(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a_(a,"touchmove",H.j(r.ghH(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ad(Date.now(),!1)
u.cy=0
u.dv()
return u},
ei:function ei(){},
a8:function a8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
dH:function dH(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a){this.a=a}},Z={
it:function(a,b,c){var u
H.f(c,"$ia",[P.y],"$aa")
u=a.createBuffer()
C.b.ar(a,b,u)
C.b.dJ(a,b,new Int16Array(H.cG(c)),35044)
C.b.ar(a,b,null)
return new Z.dT(b,u)},
aw:function(a){return new Z.aQ(a)},
dT:function dT(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dU:function dU(a){this.a=a},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a){this.a=a}},D={
E:function(){var u=new D.bt()
u.sac(null)
u.sb_(null)
u.c=null
u.d=0
return u},
el:function el(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
ez:function ez(a){this.a=a},
eA:function eA(a){this.a=a},
u:function u(a){this.a=a
this.b=null},
be:function be(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bf:function bf(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
C:function C(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b8:function b8(){var _=this
_.d=_.c=_.b=_.a=null},
W:function W(){},
d9:function d9(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dr:function dr(){},
dz:function dz(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){}},X={cS:function cS(a,b){this.a=a
this.b=b},d8:function d8(a,b){this.a=a
this.b=b},eR:function eR(){var _=this
_.d=_.c=_.b=_.a=null},dd:function dd(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eV:function eV(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},aW:function aW(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},f5:function f5(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ca:function ca(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fg:function fg(){},dJ:function dJ(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fK:function fK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dO:function dO(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ih:function(a,b,c,d,e,f,g){var u,t
u=new X.eG()
t=new V.aA(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jg
if(t==null){t=V.jf(0,0,1,1)
$.jg=t}u.r=t
return u},
j8:function(a,b,c,d,e){var u,t,s
u=new X.dq()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gn().h(0,u.gfe())
s=new D.C("mover",t,u.b,u,[U.a3])
s.b=!0
u.an(s)}s=u.c
if(!(Math.abs(s-b)<$.J().a)){u.c=b
s=new D.C("fov",s,b,u,[P.w])
s.b=!0
u.an(s)}s=u.d
if(!(Math.abs(s-d)<$.J().a)){u.d=d
s=new D.C("near",s,d,u,[P.w])
s.b=!0
u.an(s)}s=u.e
if(!(Math.abs(s-a)<$.J().a)){u.e=a
s=new D.C("far",s,a,u,[P.w])
s.b=!0
u.an(s)}return u},
bp:function bp(){},
eG:function eG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eL:function eL(){this.b=this.a=null},
dq:function dq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cj:function cj(){},
jM:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.kL("Test 016",!0)
t=W.ic(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.m]
u.dD(H.b(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],s))
u.dD(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.eD(document,"testCanvas")
if(r==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.kP(r,!0,!0,!0,!1)
p=X.ih(!0,!0,!1,null,2000,null,0)
p.sdM(0,!1)
o=E.j_(null,!0,null,"",null,null)
n=F.ip()
F.cE(n,null,null,1,1,1,0,0,1)
F.cE(n,null,null,1,1,0,1,0,3)
F.cE(n,null,null,1,1,0,0,1,2)
F.cE(n,null,null,1,1,-1,0,0,0)
F.cE(n,null,null,1,1,0,-1,0,0)
F.cE(n,null,null,1,1,0,0,-1,3)
n.ay()
o.sbP(0,n)
m=q.f.jw("../resources/maskonaive",".jpg")
l=q.f.cI("../resources/diceColor")
k=new O.df()
k.sfm(O.id(V.ae))
k.e.aV(k.gfY(),k.gh_())
s=new O.aK(k,"emission")
s.c=C.c
s.f=new V.V(0,0,0)
k.f=s
s=new O.aK(k,"ambient")
s.c=C.c
s.f=new V.V(0,0,0)
k.r=s
s=new O.aK(k,"diffuse")
s.c=C.c
s.f=new V.V(0,0,0)
k.x=s
s=new O.aK(k,"invDiffuse")
s.c=C.c
s.f=new V.V(0,0,0)
k.y=s
s=new O.f4(k,"specular")
s.c=C.c
s.f=new V.V(0,0,0)
s.ch=100
k.z=s
s=new O.f1(k,"bump")
s.c=C.c
k.Q=s
k.ch=null
s=new O.aK(k,"reflect")
s.c=C.c
s.f=new V.V(0,0,0)
k.cx=s
s=new O.f3(k,"refract")
s.c=C.c
s.f=new V.V(0,0,0)
s.ch=1
k.cy=s
s=new O.f0(k,"alpha")
s.c=C.c
s.f=1
k.db=s
s=new D.d9()
s.bf(D.W)
s.sfw(H.b([],[D.b8]))
s.shL(H.b([],[D.dr]))
s.si7(H.b([],[D.dz]))
s.sim(H.b([],[D.dE]))
s.sio(H.b([],[D.dF]))
s.sip(H.b([],[D.dG]))
s.Q=null
s.ch=null
s.cV(s.gfW(),s.ghv(),s.ghz())
k.dx=s
j=s.Q
if(j==null){j=D.E()
s.Q=j
s=j}else s=j
s.h(0,k.ghT())
s=k.dx
j=s.ch
if(j==null){j=D.E()
s.ch=j
s=j}else s=j
j=k.gaM()
s.h(0,j)
k.dy=null
s=k.dx
i=V.jt()
h=U.iW(V.j4(V.jb(),i,new V.K(1,-1,-3)))
g=new V.V(1,1,1)
f=new D.b8()
f.c=new V.V(1,1,1)
f.a=V.kR()
e=f.b
f.b=h
h.gn().h(0,f.gf3())
h=new D.C("mover",e,f.b,f,[U.a3])
h.b=!0
f.at(h)
if(!f.c.t(0,g)){e=f.c
f.c=g
h=new D.C("color",e,g,f,[V.V])
h.b=!0
f.at(h)}s.h(0,f)
s=k.r
s.saj(0,new V.V(0.2,0.2,0.2))
s=k.x
s.saj(0,new V.V(0.7,0.7,0.7))
s=k.z
s.saj(0,new V.V(0.7,0.7,0.7))
k.r.saR(l)
k.x.saR(l)
k.z.saR(q.f.cI("../resources/diceSpecular"))
s=k.z
if(s.c===C.c){s.c=C.f
s.bS()
s.ce(100)
h=s.a
h.a=null
h.R(null)}s.ce(10)
k.Q.saR(q.f.cI("../resources/diceBumpMap"))
s=k.ch
if(s!==m){if(s!=null)s.gn().S(0,j)
e=k.ch
k.ch=m
m.gn().h(0,j)
s=new D.C("environment",e,k.ch,k,[T.bH])
s.b=!0
k.R(s)}s=k.cx
s.saj(0,new V.V(0.3,0.3,0.3))
d=new U.c4()
d.bf(U.a3)
d.aV(d.gfU(),d.ghx())
d.e=null
d.f=V.bB()
d.r=0
s=q.r
j=new U.dQ()
h=U.ie()
h.scS(0,!0)
h.scJ(6.283185307179586)
h.scL(0)
h.sa8(0,0)
h.scK(100)
h.sT(0)
h.scs(0.5)
j.b=h
f=j.gaI()
h.gn().h(0,f)
h=U.ie()
h.scS(0,!0)
h.scJ(6.283185307179586)
h.scL(0)
h.sa8(0,0)
h.scK(100)
h.sT(0)
h.scs(0.5)
j.c=h
h.gn().h(0,f)
j.d=null
j.e=!1
j.f=!1
j.r=!1
j.x=2.5
j.y=2.5
j.z=2
j.Q=4
j.cx=!1
j.ch=!1
j.cy=0
j.db=0
j.dx=null
j.dy=0
j.fr=null
j.fx=null
c=new X.am(!1,!1,!1)
e=j.d
j.d=c
h=[X.am]
f=new D.C("modifiers",e,c,j,h)
f.b=!0
j.M(f)
f=j.f
if(f!==!1){j.f=!1
f=new D.C("invertX",f,!1,j,[P.H])
f.b=!0
j.M(f)}f=j.r
if(f!==!1){j.r=!1
f=new D.C("invertY",f,!1,j,[P.H])
f.b=!0
j.M(f)}j.b2(s)
d.h(0,j)
s=q.r
j=new U.dP()
f=U.ie()
f.scS(0,!0)
f.scJ(6.283185307179586)
f.scL(0)
f.sa8(0,0)
f.scK(100)
f.sT(0)
f.scs(0.2)
j.b=f
f.gn().h(0,j.gaI())
j.c=null
j.d=!1
j.e=2.5
j.f=2
j.r=4
j.y=!1
j.x=!1
j.z=0
j.Q=null
j.ch=0
j.cx=null
j.cy=null
c=new X.am(!0,!1,!1)
e=j.c
j.c=c
f=new D.C("modifiers",e,c,j,h)
f.b=!0
j.M(f)
j.b2(s)
d.h(0,j)
s=q.r
j=new U.dR()
j.c=0.01
j.d=0
j.e=0
c=new X.am(!1,!1,!1)
j.b=c
h=new D.C("modifiers",null,c,j,h)
h.b=!0
j.M(h)
j.b2(s)
d.h(0,j)
d.h(0,U.iW(V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
b=X.j8(2000,1.0471975511965976,d,0.1,null)
a=new M.cV()
a.sb3(null)
a.sb8(0,null)
a.sb9(null)
s=E.j_(null,!0,null,"",null,null)
n=F.ip()
j=n.a
h=new V.K(-1,-1,1)
h=h.v(0,Math.sqrt(h.D(h)))
a0=j.bk(new V.aY(1,2,4,6),new V.aA(1,0,0,1),new V.a9(-1,-1,0),new V.Y(0,1),h,null)
j=n.a
h=new V.K(1,-1,1)
h=h.v(0,Math.sqrt(h.D(h)))
a1=j.bk(new V.aY(0,3,4,6),new V.aA(0,0,1,1),new V.a9(1,-1,0),new V.Y(1,1),h,null)
j=n.a
h=new V.K(1,1,1)
h=h.v(0,Math.sqrt(h.D(h)))
a2=j.bk(new V.aY(0,2,5,6),new V.aA(0,1,0,1),new V.a9(1,1,0),new V.Y(1,0),h,null)
j=n.a
h=V.aX()
f=new V.K(-1,1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a3=j.bk(new V.aY(0,2,4,7),new V.aA(1,1,0,1),new V.a9(-1,1,0),h,f,null)
n.d.iO(H.b([a0,a1,a2,a3],[F.aq]))
n.ay()
s.sbP(0,n)
a.d=s
a.e=null
s=new O.dx()
s.b=1.0471975511965976
s.d=new V.V(1,1,1)
e=s.c
s.c=m
m.gn().h(0,s.gaM())
j=new D.C("boxTexture",e,s.c,s,[T.bH])
j.b=!0
s.R(j)
a.sb9(s)
a.sb8(0,p)
a.sb3(b)
a4=new M.cZ()
a4.sfp(0,O.id(E.a8))
a4.d.aV(a4.gh3(),a4.gh5())
a4.e=null
a4.f=null
a4.r=null
a4.x=null
a5=X.ih(!0,!0,!1,null,2000,null,0)
a4.sb3(null)
a4.sb8(0,a5)
a4.sb9(null)
a4.sb3(b)
a4.sb9(k)
a4.sb8(0,p)
a4.d.h(0,o)
a4.b.sdM(0,!1)
s=M.ao
j=H.b([a,a4],[s])
h=new M.cT()
h.bf(s)
h.e=!1
h.f=null
h.aV(h.ghB(),h.ghD())
h.a6(0,j)
s=q.d
if(s!==h){if(s!=null)s.gn().S(0,q.gd1())
q.d=h
h.gn().h(0,q.gd1())
q.d2()}s=q.z
if(s==null){s=D.E()
q.z=s}j={func:1,ret:-1,args:[D.u]}
h=H.j(new X.i3(u,k),j)
if(s.b==null)s.sb_(H.b([],[j]))
s=s.b;(s&&C.a).h(s,h)
V.lA(q)},
i3:function i3(a,b){this.a=a
this.b=b}},V={
lE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.eI(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.j.es(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bN:function(a,b,c){var u,t,s,r,q,p
H.f(a,"$ia",[P.w],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.Y(u,p,C.i.ag(u[p],s))}return u},
iJ:function(a,b){return C.j.k_(Math.pow(b,C.O.cD(Math.log(H.ld(a))/Math.log(b))))},
bB:function(){var u=$.j5
if(u==null){u=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.j5=u}return u},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
j4:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.v(0,Math.sqrt(c.D(c)))
t=b.b4(u)
s=t.v(0,Math.sqrt(t.D(t)))
r=u.b4(s)
q=new V.K(a.a,a.b,a.c)
p=s.P(0).D(q)
o=r.P(0).D(q)
n=u.P(0).D(q)
return V.aL(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aX:function(){var u=$.ja
if(u==null){u=new V.Y(0,0)
$.ja=u}return u},
jb:function(){var u=$.cc
if(u==null){u=new V.a9(0,0,0)
$.cc=u}return u},
jf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.du(a,b,c,d)},
dS:function(){var u=$.js
if(u==null){u=new V.K(0,0,0)
$.js=u}return u},
jt:function(){var u=$.jr
if(u==null){u=new V.K(0,1,0)
$.jr=u}return u},
kR:function(){var u=$.h1
if(u==null){u=new V.K(0,0,1)
$.h1=u}return u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a){this.a=a},
dh:function dh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
P:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aJ(a,0)
t=C.i.aJ(b,0)
s=new V.fi()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fq()
u.eY(a)
return u},
fJ:function(){var u,t
u=new V.fI()
t=P.m
u.si8(new H.aI([t,V.cg]))
u.sic(new H.aI([t,V.cm]))
u.c=null
return u},
aT:function aT(){},
al:function al(){},
de:function de(){},
af:function af(){this.a=null},
fi:function fi(){this.b=this.a=null},
fq:function fq(){this.a=null},
cg:function cg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b){this.a=a
this.b=b
this.c=null},
fI:function fI(){this.c=this.b=this.a=null},
cn:function cn(a){this.b=a
this.a=this.c=null},
lA:function(a){P.kQ(C.K,new V.i6(a))},
kL:function(a,b){var u=new V.fu()
u.eZ(a,!0)
return u},
b6:function b6(){},
i6:function i6(a){this.a=a},
eq:function eq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eH:function eH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ff:function ff(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(){this.b=this.a=null},
fw:function fw(a){this.a=a},
fv:function fv(a){this.a=a},
fx:function fx(a){this.a=a}},U={
ie:function(){var u=new U.em()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
iW:function(a){var u=new U.cU()
u.a=a
return u},
em:function em(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){this.b=this.a=null},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dP:function dP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cT:function cT(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},cV:function cV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cZ:function cZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ao:function ao(){}},A={
kx:function(a,b){var u,t
u=a.ak
t=new A.dg(b,u)
t.d_(b,u)
t.eW(a,b)
return t},
is:function(a,b,c,d,e){var u=new A.fP(a,b,c,e)
u.f=d
u.siq(P.kv(d,0,!1,P.y))
return u},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
dg:function dg(a,b){var _=this
_.bn=_.dU=_.bm=_.ak=_.as=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e9=_.cv=_.e8=_.bA=_.e7=_.e6=_.bz=_.by=_.e5=_.e4=_.bx=_.bw=_.bv=_.e3=_.e2=_.bu=_.e1=_.e0=_.bt=_.e_=_.dZ=_.bs=_.br=_.dY=_.dX=_.bq=_.bp=_.dW=_.dV=_.bo=null
_.cC=_.ed=_.cB=_.ec=_.cA=_.eb=_.cz=_.ea=_.cw=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f2:function f2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.as=b3
_.ak=b4
_.bm=b5},
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
cf:function cf(){},
bs:function bs(a,b){this.a=a
this.b=b},
dy:function dy(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dK:function dK(){},
fV:function fV(a){this.a=a},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hR:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cE:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u.d=t}g=F.hR(t)
f=F.hR(u.b)
e=F.lC(d,a0,new F.hQ(u,F.hR(u.c),F.hR(u.d),f,g,c),b)
if(e!=null)a.jy(e)},
lC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.aq,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.ip()
t=H.b([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.h2(null,null,new V.aA(p,0,0,1),null,null,new V.Y(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cr(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.h2(null,null,new V.aA(j,i,h,1),null,null,new V.Y(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.iP(a+1,b+1,t)
return u},
c2:function(a,b,c){var u,t
u=new F.X()
t=a.a
if(t==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.p("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
ks:function(a,b){var u,t
u=new F.aV()
t=a.a
if(t==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.p("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
ip:function(){var u,t
u=new F.dw()
t=new F.h3(u)
t.b=!1
t.sir(H.b([],[F.aq]))
u.a=t
t=new F.ft(u)
t.scb(H.b([],[F.bh]))
u.b=t
t=new F.fs(u)
t.sfK(H.b([],[F.aV]))
u.c=t
t=new F.fr(u)
t.sfB(H.b([],[F.X]))
u.d=t
u.e=null
return u},
h2:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aq()
t=new F.h8(u)
t.scb(H.b([],[F.bh]))
u.b=t
t=new F.h7(u)
s=[F.aV]
t.sfL(H.b([],s))
t.sfM(H.b([],s))
u.c=t
t=new F.h4(u)
s=[F.X]
t.sfC(H.b([],s))
t.sfD(H.b([],s))
t.sfE(H.b([],s))
u.d=t
h=$.k2()
u.e=0
t=$.aE()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b1().a)!==0?e:null
u.x=(s&$.b0().a)!==0?b:null
u.y=(s&$.b2().a)!==0?f:null
u.z=(s&$.b3().a)!==0?g:null
u.Q=(s&$.k3().a)!==0?c:null
u.ch=(s&$.bR().a)!==0?i:0
u.cx=(s&$.b_().a)!==0?a:null
return u},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
X:function X(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aV:function aV(){this.b=this.a=null},
bh:function bh(){this.a=null},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(a){this.a=a
this.b=null},
fs:function fs(a){this.a=a
this.b=null},
ft:function ft(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
h9:function h9(a){this.a=a},
h3:function h3(a){this.a=a
this.c=this.b=null},
h4:function h4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a
this.c=this.b=null},
h8:function h8(a){this.a=a
this.b=null}},T={cl:function cl(){},bH:function bH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},fF:function fF(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fG:function fG(a,b,c,d,e,f,g){var _=this
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
H.il.prototype={}
J.a1.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.bD(a)+"'"}}
J.eO.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iH:1}
J.d5.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iF:1}
J.d7.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.fe.prototype={}
J.cv.prototype={}
J.bg.prototype={
i:function(a){var u=a[$.jS()]
if(u==null)return this.eS(a)
return"JavaScript function for "+H.e(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibb:1}
J.aH.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.q(P.ap("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.q(P.ap("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
H.f(b,"$ii",[H.v(a,0)],"$ai")
if(!!a.fixed$length)H.q(P.ap("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
a2:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.b7(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.e(a[t]))
return u.join(b)},
jt:function(a){return this.k(a,"")},
jm:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.H,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.h(P.b7(a))}throw H.h(H.ij())},
jl:function(a,b){return this.jm(a,b,null)},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eP:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.au(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.au(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.v(a,0)])
return H.b(a.slice(b,c),[H.v(a,0)])},
gbC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.ij())},
dF:function(a,b){var u,t
H.j(b,{func:1,ret:P.H,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.b7(a))}return!1},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
i:function(a){return P.ii(a,"[","]")},
gO:function(a){return new J.ac(a,a.length,0,[H.v(a,0)])},
gG:function(a){return H.cd(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.q(P.ap("set length"))
if(b<0)throw H.h(P.au(b,0,null,"newLength",null))
a.length=b},
Y:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.q(P.ap("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cK(a,b))
a[b]=c},
$ii:1,
$ia:1}
J.ik.prototype={}
J.ac.prototype={
gE:function(){return this.d},
u:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.x(u))
s=this.c
if(s>=t){this.sdh(null)
return!1}this.sdh(u[s]);++this.c
return!0},
sdh:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
J.d6.prototype={
k_:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ap(""+a+".toInt()"))},
cD:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ap(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ap(""+a+".round()"))},
es:function(a,b){var u,t
if(b>20)throw H.h(P.au(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
eI:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ap("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
bi:function(a,b){var u
if(a>0)u=this.i6(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i6:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia6:1}
J.d4.prototype={$iy:1}
J.d3.prototype={}
J.by.prototype={
cq:function(a,b){if(b<0)throw H.h(H.cK(a,b))
if(b>=a.length)H.q(H.cK(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.h(H.cK(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.h(P.ia(b,null,null))
return a+b},
eO:function(a,b,c){var u
if(c>a.length)throw H.h(P.au(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bQ:function(a,b){return this.eO(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.fh(b,null,null))
if(b>c)throw H.h(P.fh(b,null,null))
if(c>a.length)throw H.h(P.fh(c,null,null))
return a.substring(b,c)},
bc:function(a,b){return this.bd(a,b,null)},
k6:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jF:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
ag:function(a,b){return this.jF(a,b," ")},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gp:function(a){return a.length},
$ij7:1,
$im:1}
H.o.prototype={
gp:function(a){return this.a.length},
l:function(a,b){return C.i.cq(this.a,b)},
$adN:function(){return[P.y]},
$aT:function(){return[P.y]},
$ai:function(){return[P.y]},
$aa:function(){return[P.y]}}
H.eu.prototype={}
H.bz.prototype={
gO:function(a){return new H.c6(this,this.gp(this),0,[H.a4(this,"bz",0)])},
bL:function(a,b){return this.eR(0,H.j(b,{func:1,ret:P.H,args:[H.a4(this,"bz",0)]}))}}
H.c6.prototype={
gE:function(){return this.d},
u:function(){var u,t,s,r
u=this.a
t=J.iE(u)
s=t.gp(u)
if(this.b!==s)throw H.h(P.b7(u))
r=this.c
if(r>=s){this.saX(null)
return!1}this.saX(t.a7(u,r));++this.c
return!0},
saX:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
H.eY.prototype={
gO:function(a){return new H.eZ(J.bS(this.a),this.b,this.$ti)},
gp:function(a){return J.bo(this.a)},
a7:function(a,b){return this.b.$1(J.i8(this.a,b))},
$ai:function(a,b){return[b]}}
H.eZ.prototype={
u:function(){var u=this.b
if(u.u()){this.saX(this.c.$1(u.gE()))
return!0}this.saX(null)
return!1},
gE:function(){return this.a},
saX:function(a){this.a=H.A(a,H.v(this,1))},
$aaG:function(a,b){return[b]}}
H.f_.prototype={
gp:function(a){return J.bo(this.a)},
a7:function(a,b){return this.b.$1(J.i8(this.a,b))},
$abz:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cw.prototype={
gO:function(a){return new H.hc(J.bS(this.a),this.b,this.$ti)}}
H.hc.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gE()))return!0
return!1},
gE:function(){return this.a.gE()}}
H.bv.prototype={}
H.dN.prototype={}
H.dM.prototype={}
H.fj.prototype={}
H.fM.prototype={
af:function(a){var u,t,s
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
H.fc.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eQ.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.e(this.a)+")"}}
H.fY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.i7.prototype={
$1:function(a){if(!!J.S(a).$iba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.e6.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iag:1}
H.bX.prototype={
i:function(a){return"Closure '"+H.bD(this).trim()+"'"},
$ibb:1,
gk9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fE.prototype={}
H.fy.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bQ(u)+"'"}}
H.bU.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.cd(this.a)
else t=typeof u!=="object"?J.bn(u):H.cd(u)
return(t^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bD(u)+"'")}}
H.fO.prototype={
i:function(a){return this.a}}
H.ek.prototype={
i:function(a){return this.a}}
H.fo.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.aI.prototype={
gp:function(a){return this.a},
gaA:function(){return new H.da(this,[H.v(this,0)])},
dO:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.de(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.de(t,a)}else return this.jr(a)},
jr:function(a){var u=this.d
if(u==null)return!1
return this.cE(this.bZ(u,J.bn(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bg(r,b)
s=t==null?null:t.b
return s}else return this.js(b)},
js:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bZ(u,J.bn(a)&0x3ffffff)
s=this.cE(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c9()
this.b=u}this.d4(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c9()
this.c=t}this.d4(t,b,c)}else{s=this.d
if(s==null){s=this.c9()
this.d=s}r=J.bn(b)&0x3ffffff
q=this.bZ(s,r)
if(q==null)this.cf(s,r,[this.bT(b,c)])
else{p=this.cE(q,b)
if(p>=0)q[p].b=c
else q.push(this.bT(b,c))}}},
a2:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.b7(this))
u=u.c}},
d4:function(a,b,c){var u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
u=this.bg(a,b)
if(u==null)this.cf(a,b,this.bT(b,c))
else u.b=c},
fg:function(){this.r=this.r+1&67108863},
bT:function(a,b){var u,t
u=new H.eS(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fg()
return u},
cE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
i:function(a){return P.j3(this)},
bg:function(a,b){return a[b]},
bZ:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
fv:function(a,b){delete a[b]},
de:function(a,b){return this.bg(a,b)!=null},
c9:function(){var u=Object.create(null)
this.cf(u,"<non-identifier-key>",u)
this.fv(u,"<non-identifier-key>")
return u},
$ij1:1}
H.eS.prototype={}
H.da.prototype={
gp:function(a){return this.a.a},
gO:function(a){var u,t
u=this.a
t=new H.eT(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eT.prototype={
gE:function(){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.b7(u))
else{u=this.c
if(u==null){this.sd5(null)
return!1}else{this.sd5(u.a)
this.c=this.c.c
return!0}}},
sd5:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
H.hZ.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.i_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.i0.prototype={
$1:function(a){return this.a(H.I(a))},
$S:34}
H.eP.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ij7:1}
H.dl.prototype={$ilY:1}
H.di.prototype={
gp:function(a){return a.length},
$iaB:1,
$aaB:function(){}}
H.dj.prototype={
l:function(a,b){H.cF(b,a,a.length)
return a[b]},
$abv:function(){return[P.w]},
$aT:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$ia:1,
$aa:function(){return[P.w]}}
H.dk.prototype={
$abv:function(){return[P.y]},
$aT:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.f6.prototype={
l:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.f7.prototype={
l:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.f8.prototype={
l:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.dm.prototype={
gp:function(a){return a.length},
l:function(a,b){H.cF(b,a,a.length)
return a[b]},
$ilZ:1}
H.f9.prototype={
gp:function(a){return a.length},
l:function(a,b){H.cF(b,a,a.length)
return a[b]}}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
P.he.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:23}
P.hd.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.hf.prototype={
$0:function(){this.a.$0()},
$S:2}
P.hg.prototype={
$0:function(){this.a.$0()},
$S:2}
P.e7.prototype={
fc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bM(new P.hM(this,b),0),a)
else throw H.h(P.ap("`setTimeout()` not found."))},
fd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bM(new P.hL(this,a,Date.now(),b),0),a)
else throw H.h(P.ap("Periodic timer."))},
$iaN:1}
P.hM.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hL.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eV(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aS.prototype={
jx:function(a){if(this.c!==6)return!0
return this.b.b.cP(H.j(this.d,{func:1,ret:P.H,args:[P.L]}),a.a,P.H,P.L)},
jp:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.ee(u,{func:1,args:[P.L,P.ag]}))return H.iD(r.jT(u,a.a,a.b,null,t,P.ag),s)
else return H.iD(r.cP(H.j(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.ax.prototype={
er:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.R
if(t!==C.l){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.l6(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ax(0,$.R,[c])
r=b==null?1:3
this.d7(new P.aS(s,r,a,b,[u,c]))
return s},
jZ:function(a,b){return this.er(a,null,b)},
d7:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaS")
this.c=a}else{if(u===2){t=H.d(this.c,"$iax")
u=t.a
if(u<4){t.d7(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hU(null,null,u,H.j(new P.hn(this,a),{func:1,ret:-1}))}},
dt:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaS")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iax")
t=p.a
if(t<4){p.dt(a)
return}this.a=t
this.c=p.c}u.a=this.bh(a)
t=this.b
t.toString
P.hU(null,null,t,H.j(new P.hr(u,this),{func:1,ret:-1}))}},
cd:function(){var u=H.d(this.c,"$iaS")
this.c=null
return this.bh(u)},
bh:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d9:function(a){var u,t,s
u=H.v(this,0)
H.iD(a,{futureOr:1,type:u})
t=this.$ti
if(H.cJ(a,"$ic3",t,"$ac3"))if(H.cJ(a,"$iax",t,null))P.ju(a,this)
else P.kW(a,this)
else{s=this.cd()
H.A(a,u)
this.a=4
this.c=a
P.cz(this,s)}},
da:function(a,b){var u
H.d(b,"$iag")
u=this.cd()
this.a=8
this.c=new P.a7(a,b)
P.cz(this,u)},
$ic3:1}
P.hn.prototype={
$0:function(){P.cz(this.a,this.b)},
$S:2}
P.hr.prototype={
$0:function(){P.cz(this.b,this.a.a)},
$S:2}
P.ho.prototype={
$1:function(a){var u=this.a
u.a=0
u.d9(a)},
$S:23}
P.hp.prototype={
$2:function(a,b){H.d(b,"$iag")
this.a.da(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hq.prototype={
$0:function(){this.a.da(this.b,this.c)},
$S:2}
P.hu.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eq(H.j(r.d,{func:1}),null)}catch(q){t=H.ar(q)
s=H.bO(q)
if(this.d){r=H.d(this.a.a.c,"$ia7").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$ia7")
else p.b=new P.a7(t,s)
p.a=!0
return}if(!!J.S(u).$ic3){if(u instanceof P.ax&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$ia7")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jZ(new P.hv(o),null)
r.a=!1}},
$S:3}
P.hv.prototype={
$1:function(a){return this.a},
$S:38}
P.ht.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.A(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cP(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ar(o)
t=H.bO(o)
s=this.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:3}
P.hs.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$ia7")
r=this.c
if(r.jx(u)&&r.e!=null){q=this.b
q.b=r.jp(u)
q.a=!1}}catch(p){t=H.ar(p)
s=H.bO(p)
r=H.d(this.a.a.c,"$ia7")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:3}
P.dV.prototype={}
P.fz.prototype={
gp:function(a){var u,t,s,r
u={}
t=new P.ax(0,$.R,[P.y])
u.a=0
s=H.v(this,0)
r=H.j(new P.fB(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.fC(u,t),{func:1,ret:-1})
W.a_(this.a,this.b,r,!1,s)
return t}}
P.fB.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.v(this.b,0)]}}}
P.fC.prototype={
$0:function(){this.b.d9(this.a.a)},
$S:2}
P.ci.prototype={}
P.fA.prototype={}
P.aN.prototype={}
P.a7.prototype={
i:function(a){return H.e(this.a)},
$iba:1}
P.hP.prototype={$imc:1}
P.hT.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dp()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.hA.prototype={
jU:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.l===$.R){a.$0()
return}P.jA(null,null,this,a,-1)}catch(s){u=H.ar(s)
t=H.bO(s)
P.hS(null,null,this,u,H.d(t,"$iag"))}},
jV:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.R){a.$1(b)
return}P.jB(null,null,this,a,b,-1,c)}catch(s){u=H.ar(s)
t=H.bO(s)
P.hS(null,null,this,u,H.d(t,"$iag"))}},
iV:function(a,b){return new P.hC(this,H.j(a,{func:1,ret:b}),b)},
cm:function(a){return new P.hB(this,H.j(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.hD(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
eq:function(a,b){H.j(a,{func:1,ret:b})
if($.R===C.l)return a.$0()
return P.jA(null,null,this,a,b)},
cP:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.R===C.l)return a.$1(b)
return P.jB(null,null,this,a,b,c,d)},
jT:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.R===C.l)return a.$2(b,c)
return P.l7(null,null,this,a,b,c,d,e,f)}}
P.hC.prototype={
$0:function(){return this.a.eq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hB.prototype={
$0:function(){return this.a.jU(this.b)},
$S:3}
P.hD.prototype={
$1:function(a){var u=this.c
return this.a.jV(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hy.prototype={
gO:function(a){var u=new P.e0(this,this.r,this.$ti)
u.c=this.e
return u},
gp:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibI")!=null}else{t=this.fq(b)
return t}},
fq:function(a){var u=this.d
if(u==null)return!1
return this.bX(this.di(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iv()
this.b=u}return this.d6(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iv()
this.c=t}return this.d6(t,b)}else return this.fh(b)},
fh:function(a){var u,t,s
H.A(a,H.v(this,0))
u=this.d
if(u==null){u=P.iv()
this.d=u}t=this.dc(a)
s=u[t]
if(s==null)u[t]=[this.ca(a)]
else{if(this.bX(s,a)>=0)return!1
s.push(this.ca(a))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hQ(this.c,b)
else return this.hN(b)},
hN:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.di(u,a)
s=this.bX(t,a)
if(s<0)return!1
this.dA(t.splice(s,1)[0])
return!0},
d6:function(a,b){H.A(b,H.v(this,0))
if(H.d(a[b],"$ibI")!=null)return!1
a[b]=this.ca(b)
return!0},
hQ:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibI")
if(u==null)return!1
this.dA(u)
delete a[b]
return!0},
dk:function(){this.r=1073741823&this.r+1},
ca:function(a){var u,t
u=new P.bI(H.A(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dk()
return u},
dA:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dk()},
dc:function(a){return J.bn(a)&1073741823},
di:function(a,b){return a[this.dc(b)]},
bX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1}}
P.bI.prototype={}
P.e0.prototype={
gE:function(){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.b7(u))
else{u=this.c
if(u==null){this.sd8(null)
return!1}else{this.sd8(H.A(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sd8:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
P.eU.prototype={$ii:1,$ia:1}
P.T.prototype={
gO:function(a){return new H.c6(a,this.gp(a),0,[H.hY(this,a,"T",0)])},
a7:function(a,b){return this.l(a,b)},
k5:function(a,b){var u,t
u=H.b([],[H.hY(this,a,"T",0)])
C.a.sp(u,this.gp(a))
for(t=0;t<this.gp(a);++t)C.a.Y(u,t,this.l(a,t))
return u},
k0:function(a){return this.k5(a,!0)},
i:function(a){return P.ii(a,"[","]")}}
P.eW.prototype={}
P.eX.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.e(a)
u.a=t+": "
u.a+=H.e(b)},
$S:11}
P.bA.prototype={
a2:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.a4(this,"bA",0),H.a4(this,"bA",1)]})
for(u=J.bS(this.gaA());u.u();){t=u.gE()
b.$2(t,this.l(0,t))}},
gp:function(a){return J.bo(this.gaA())},
i:function(a){return P.j3(this)},
$iat:1}
P.hF.prototype={
a6:function(a,b){var u
for(u=J.bS(H.f(b,"$ii",this.$ti,"$ai"));u.u();)this.h(0,u.gE())},
i:function(a){return P.ii(this,"{","}")},
a7:function(a,b){var u,t,s
if(b<0)H.q(P.au(b,0,null,"index",null))
for(u=P.l_(this,this.r,H.v(this,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.h(P.bx(b,this,"index",null,t))},
$ii:1,
$ijh:1}
P.e1.prototype={}
P.bY.prototype={}
P.bZ.prototype={}
P.ew.prototype={
$abY:function(){return[P.m,[P.a,P.y]]}}
P.eK.prototype={
i:function(a){return this.a}}
P.eJ.prototype={
fs:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.aZ("")
if(r>b)q.a+=C.i.bd(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kb(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abZ:function(){return[P.m,P.m]}}
P.h_.prototype={}
P.h0.prototype={
j3:function(a,b,c){var u,t,s
c=P.je(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hN(t)
if(s.fF(a,b,c)!==c)s.dB(C.i.cq(a,c-1),0)
return new Uint8Array(t.subarray(0,H.l2(0,s.b,t.length)))},
j2:function(a){return this.j3(a,0,null)},
$abZ:function(){return[P.m,[P.a,P.y]]}}
P.hN.prototype={
dB:function(a,b){var u,t,s,r,q
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
fF:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.cq(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.aJ(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dB(r,C.i.aJ(a,p)))s=p}else if(r<=2047){q=this.b
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
P.H.prototype={}
P.ad.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.bi(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kj(H.kF(this))
t=P.cW(H.kD(this))
s=P.cW(H.kz(this))
r=P.cW(H.kA(this))
q=P.cW(H.kC(this))
p=P.cW(H.kE(this))
o=P.kk(H.kB(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.b9.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.et()
t=this.a
if(t<0)return"-"+new P.b9(0-t).i(0)
s=u.$1(C.h.a1(t,6e7)%60)
r=u.$1(C.h.a1(t,1e6)%60)
q=new P.es().$1(t%1e6)
return""+C.h.a1(t,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.es.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.et.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.ba.prototype={}
P.dp.prototype={
i:function(a){return"Throw of null."}}
P.az.prototype={
gbW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbV:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbW()+t+s
if(!this.a)return r
q=this.gbV()
p=P.ey(this.b)
return r+q+": "+p}}
P.bE.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.e(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.e(u)
else if(s>u)t=": Not in range "+H.e(u)+".."+H.e(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.e(u)}return t}}
P.eM.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t
u=H.a0(this.b)
if(typeof u!=="number")return u.aU()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gp:function(a){return this.f}}
P.fZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ch.prototype={
i:function(a){return"Bad state: "+this.a}}
P.en.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ey(u)+"."}}
P.fd.prototype={
i:function(a){return"Out of Memory"},
$iba:1}
P.dA.prototype={
i:function(a){return"Stack Overflow"},
$iba:1}
P.ep.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dY.prototype={
i:function(a){return"Exception: "+this.a}}
P.eF.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.bd(s,0,75)+"...":s
return t+"\n"+r}}
P.bb.prototype={}
P.y.prototype={}
P.i.prototype={
bL:function(a,b){var u=H.a4(this,"i",0)
return new H.cw(this,H.j(b,{func:1,ret:P.H,args:[u]}),[u])},
gp:function(a){var u,t
u=this.gO(this)
for(t=0;u.u();)++t
return t},
gaG:function(a){var u,t
u=this.gO(this)
if(!u.u())throw H.h(H.ij())
t=u.gE()
if(u.u())throw H.h(H.kp())
return t},
a7:function(a,b){var u,t,s
if(b<0)H.q(P.au(b,0,null,"index",null))
for(u=this.gO(this),t=0;u.u();){s=u.gE()
if(b===t)return s;++t}throw H.h(P.bx(b,this,"index",null,t))},
i:function(a){return P.ko(this,"(",")")}}
P.aG.prototype={}
P.a.prototype={$ii:1}
P.F.prototype={
gG:function(a){return P.L.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
t:function(a,b){return this===b},
gG:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.bD(this)+"'"},
toString:function(){return this.i(this)}}
P.ag.prototype={}
P.m.prototype={$ij7:1}
P.aZ.prototype={
gp:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.cO.prototype={
i:function(a){return String(a)},
$icO:1}
W.eg.prototype={
i:function(a){return String(a)}}
W.bT.prototype={$ibT:1}
W.b4.prototype={$ib4:1}
W.bq.prototype={
bN:function(a,b,c){if(c!=null)return this.fG(a,b,P.le(c,null))
return this.fH(a,b)},
eC:function(a,b){return this.bN(a,b,null)},
fG:function(a,b,c){return a.getContext(b,c)},
fH:function(a,b){return a.getContext(b)},
$ibq:1,
$iiU:1}
W.br.prototype={
fI:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jh:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibr:1}
W.b5.prototype={
gp:function(a){return a.length}}
W.c_.prototype={
gp:function(a){return a.length}}
W.eo.prototype={}
W.as.prototype={$ias:1}
W.c0.prototype={
iR:function(a,b){return a.adoptNode(b)},
eD:function(a,b){return a.getElementById(b)}}
W.er.prototype={
i:function(a){return String(a)}}
W.cX.prototype={
j7:function(a,b){return a.createHTMLDocument(b)}}
W.cY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cJ(b,"$iav",[P.a6],"$aav"))return!1
u=J.ai(b)
return a.left===u.gbD(b)&&a.top===u.gbJ(b)&&a.width===u.gbM(b)&&a.height===u.gbB(b)},
gG:function(a){return W.jw(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gdI:function(a){return a.bottom},
gbB:function(a){return a.height},
gbD:function(a){return a.left},
gbH:function(a){return a.right},
gbJ:function(a){return a.top},
gbM:function(a){return a.width},
$iav:1,
$aav:function(){return[P.a6]}}
W.hi.prototype={
gp:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.d(u[b],"$iM")},
h:function(a,b){J.iP(this.a,b)
return b},
gO:function(a){var u=this.k0(this)
return new J.ac(u,u.length,0,[H.v(u,0)])},
$aT:function(){return[W.M]},
$ai:function(){return[W.M]},
$aa:function(){return[W.M]}}
W.M.prototype={
giU:function(a){return new W.hj(a)},
gdL:function(a){return new W.hi(a,a.children)},
gdN:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aU()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aU()
if(r<0)r=-r*0
return new P.av(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iZ
if(u==null){u=H.b([],[W.an])
t=new W.dn(u)
C.a.h(u,W.jv(null))
C.a.h(u,W.jx())
$.iZ=t
d=t}else d=u
u=$.iY
if(u==null){u=new W.eb(d)
$.iY=u
c=u}else{u.a=d
c=u}}if($.aU==null){u=document
t=u.implementation
t=(t&&C.J).j7(t,"")
$.aU=t
$.ig=t.createRange()
t=$.aU
t.toString
t=t.createElement("base")
H.d(t,"$ibT")
t.href=u.baseURI
u=$.aU.head;(u&&C.L).B(u,t)}u=$.aU
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ib4")}u=$.aU
if(!!this.$ib4)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aU.body;(u&&C.n).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.X,a.tagName)){u=$.ig;(u&&C.E).eK(u,s)
u=$.ig
r=(u&&C.E).j5(u,b)}else{s.innerHTML=b
r=$.aU.createDocumentFragment()
for(u=J.ai(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.aU.body
if(s==null?u!=null:s!==u)J.iQ(s)
c.cU(r)
C.z.iR(document,r)
return r},
j6:function(a,b,c){return this.ae(a,b,c,null)},
eM:function(a,b,c,d){a.textContent=null
this.B(a,this.ae(a,b,c,d))},
eL:function(a,b){return this.eM(a,b,null,null)},
aT:function(a,b){return a.getAttribute(b)},
hO:function(a,b){return a.removeAttribute(b)},
$iM:1,
gjW:function(a){return a.tagName}}
W.ev.prototype={
$1:function(a){return!!J.S(H.d(a,"$iz")).$iM},
$S:13}
W.k.prototype={$ik:1}
W.bu.prototype={
fi:function(a,b,c,d){return a.addEventListener(b,H.bM(H.j(c,{func:1,args:[W.k]}),1),!1)},
$ibu:1}
W.eE.prototype={
gp:function(a){return a.length}}
W.d1.prototype={}
W.bw.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aT:function(){return[W.z]},
$ii:1,
$ai:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$ibw:1,
$aak:function(){return[W.z]}}
W.d2.prototype={}
W.bc.prototype={$ibc:1,
gdP:function(a){return a.data}}
W.c5.prototype={$ic5:1,$iiU:1}
W.aJ.prototype={$iaJ:1}
W.dc.prototype={
i:function(a){return String(a)},
$idc:1}
W.c9.prototype={}
W.a2.prototype={$ia2:1}
W.ab.prototype={
gaG:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.ji("No elements"))
if(t>1)throw H.h(P.ji("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r,q
H.f(b,"$ii",[W.z],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ai(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.d_(u,u.length,-1,[H.hY(C.Z,u,"ak",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$aT:function(){return[W.z]},
$ai:function(){return[W.z]},
$aa:function(){return[W.z]}}
W.z.prototype={
jP:function(a){var u=a.parentNode
if(u!=null)J.ef(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eQ(a):u},
B:function(a,b){return a.appendChild(b)},
hP:function(a,b){return a.removeChild(b)},
$iz:1}
W.cb.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aT:function(){return[W.z]},
$ii:1,
$ai:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aak:function(){return[W.z]}}
W.dt.prototype={
j5:function(a,b){return a.createContextualFragment(b)},
eK:function(a,b){return a.selectNodeContents(b)}}
W.fp.prototype={
gp:function(a){return a.length}}
W.bG.prototype={}
W.dB.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bR(a,b,c,d)
u=W.kl("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ab(t).a6(0,new W.ab(u))
return t}}
W.dC.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bR(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ab(u)
s=u.gaG(u)
s.toString
u=new W.ab(s)
r=u.gaG(u)
t.toString
r.toString
new W.ab(t).a6(0,new W.ab(r))
return t}}
W.fD.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bR(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ab(u)
s=u.gaG(u)
t.toString
s.toString
new W.ab(t).a6(0,new W.ab(s))
return t}}
W.ck.prototype={$ick:1}
W.aO.prototype={$iaO:1}
W.aC.prototype={$iaC:1}
W.fL.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.aO]},
$aT:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ia:1,
$aa:function(){return[W.aO]},
$aak:function(){return[W.aO]}}
W.bj.prototype={}
W.hb.prototype={$iiU:1}
W.aR.prototype={
gjd:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ap("deltaY is not supported"))},
gjc:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ap("deltaX is not supported"))},
$iaR:1}
W.cx.prototype={
hS:function(a,b){return a.requestAnimationFrame(H.bM(H.j(b,{func:1,ret:-1,args:[P.a6]}),1))},
fz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cy.prototype={$icy:1}
W.dX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cJ(b,"$iav",[P.a6],"$aav"))return!1
u=J.ai(b)
return a.left===u.gbD(b)&&a.top===u.gbJ(b)&&a.width===u.gbM(b)&&a.height===u.gbB(b)},
gG:function(a){return W.jw(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gbB:function(a){return a.height},
gbM:function(a){return a.width}}
W.e2.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aT:function(){return[W.z]},
$ii:1,
$ai:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aak:function(){return[W.z]}}
W.hh.prototype={
a2:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=this.gaA(),t=u.length,s=this.a,r=J.ai(s),q=0;q<u.length;u.length===t||(0,H.x)(u),++q){p=u[q]
b.$2(p,r.aT(s,p))}},
gaA:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.m])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.l(u,r)
q=H.d(u[r],"$icy")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abA:function(){return[P.m,P.m]},
$aat:function(){return[P.m,P.m]}}
W.hj.prototype={
l:function(a,b){return J.i9(this.a,H.I(b))},
gp:function(a){return this.gaA().length}}
W.hk.prototype={}
W.iu.prototype={}
W.hl.prototype={}
W.hm.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ik"))},
$S:27}
W.bk.prototype={
f1:function(a){var u,t
u=$.iO()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.ll())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.lm())}},
aO:function(a){return $.k5().U(0,W.c1(a))},
aq:function(a,b,c){var u,t,s
u=W.c1(a)
t=$.iO()
s=t.l(0,H.e(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.iA(s.$4(a,b,c,this))},
$ian:1}
W.ak.prototype={
gO:function(a){return new W.d_(a,this.gp(a),-1,[H.hY(this,a,"ak",0)])}}
W.dn.prototype={
aO:function(a){return C.a.dF(this.a,new W.fb(a))},
aq:function(a,b,c){return C.a.dF(this.a,new W.fa(a,b,c))},
$ian:1}
W.fb.prototype={
$1:function(a){return H.d(a,"$ian").aO(this.a)},
$S:16}
W.fa.prototype={
$1:function(a){return H.d(a,"$ian").aq(this.a,this.b,this.c)},
$S:16}
W.e5.prototype={
fb:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bL(0,new W.hG())
t=b.bL(0,new W.hH())
this.b.a6(0,u)
s=this.c
s.a6(0,C.Y)
s.a6(0,t)},
aO:function(a){return this.a.U(0,W.c1(a))},
aq:function(a,b,c){var u,t
u=W.c1(a)
t=this.c
if(t.U(0,H.e(u)+"::"+b))return this.d.iS(c)
else if(t.U(0,"*::"+b))return this.d.iS(c)
else{t=this.b
if(t.U(0,H.e(u)+"::"+b))return!0
else if(t.U(0,"*::"+b))return!0
else if(t.U(0,H.e(u)+"::*"))return!0
else if(t.U(0,"*::*"))return!0}return!1},
$ian:1}
W.hG.prototype={
$1:function(a){return!C.a.U(C.u,H.I(a))},
$S:15}
W.hH.prototype={
$1:function(a){return C.a.U(C.u,H.I(a))},
$S:15}
W.hJ.prototype={
aq:function(a,b,c){if(this.eU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.i9(a,"template")==="")return this.e.U(0,b)
return!1}}
W.hK.prototype={
$1:function(a){return"TEMPLATE::"+H.e(H.I(a))},
$S:28}
W.hI.prototype={
aO:function(a){var u=J.S(a)
if(!!u.$ice)return!1
u=!!u.$in
if(u&&W.c1(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.i.bQ(b,"on"))return!1
return this.aO(a)},
$ian:1}
W.d_.prototype={
u:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdj(J.k7(this.a,u))
this.c=u
return!0}this.sdj(null)
this.c=t
return!1},
gE:function(){return this.d},
sdj:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
W.an.prototype={}
W.hE.prototype={$im_:1}
W.eb.prototype={
cU:function(a){new W.hO(this).$2(a,null)},
b1:function(a,b){if(b==null)J.iQ(a)
else J.ef(b,a)},
hX:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.k9(a)
s=J.i9(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ar(o)}q="element unprintable"
try{q=J.aj(a)}catch(o){H.ar(o)}try{p=W.c1(a)
this.hW(H.d(a,"$iM"),b,u,q,p,H.d(t,"$iat"),H.I(s))}catch(o){if(H.ar(o) instanceof P.az)throw o
else{this.b1(a,b)
window
n="Removing corrupted element "+H.e(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b1(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aO(a)){this.b1(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aq(a,"is",g)){this.b1(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaA()
t=H.b(u.slice(0),[H.v(u,0)])
for(s=f.gaA().length-1,u=f.a,r=J.ai(u);s>=0;--s){if(s>=t.length)return H.l(t,s)
q=t[s]
if(!this.a.aq(a,J.kc(q),r.aT(u,q))){window
p="Removing disallowed attribute <"+H.e(e)+" "+q+'="'+H.e(r.aT(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aT(u,q)
r.hO(u,q)}}if(!!J.S(a).$ick)this.cU(a.content)},
$ilL:1}
W.hO.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hX(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b1(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ar(r)
q=H.d(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.ef(p,q)}else J.ef(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iz")}},
$S:29}
W.dW.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
P.ea.prototype={$ibc:1,
gdP:function(a){return this.a}}
P.hV.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.eB.prototype={
gc_:function(){var u,t,s
u=this.b
t=H.a4(u,"T",0)
s=W.M
return new H.eY(new H.cw(u,H.j(new P.eC(),{func:1,ret:P.H,args:[t]}),[t]),H.j(new P.eD(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.iP(this.b.a,b)},
gp:function(a){return J.bo(this.gc_().a)},
l:function(a,b){var u=this.gc_()
return u.b.$1(J.i8(u.a,b))},
gO:function(a){var u=P.kw(this.gc_(),!1,W.M)
return new J.ac(u,u.length,0,[H.v(u,0)])},
$aT:function(){return[W.M]},
$ai:function(){return[W.M]},
$aa:function(){return[W.M]}}
P.eC.prototype={
$1:function(a){return!!J.S(H.d(a,"$iz")).$iM},
$S:13}
P.eD.prototype={
$1:function(a){return H.c(H.d(a,"$iz"),"$iM")},
$S:30}
P.hz.prototype={
gbH:function(a){var u=this.a
if(typeof u!=="number")return u.F()
return H.A(u+this.c,H.v(this,0))},
gdI:function(a){var u=this.b
if(typeof u!=="number")return u.F()
return H.A(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cJ(b,"$iav",[P.a6],"$aav")){u=this.a
t=J.ai(b)
if(u==t.gbD(b)){s=this.b
if(s==t.gbJ(b)){if(typeof u!=="number")return u.F()
r=H.v(this,0)
if(H.A(u+this.c,r)===t.gbH(b)){if(typeof s!=="number")return s.F()
u=H.A(s+this.d,r)===t.gdI(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.bn(u)
s=this.b
r=J.bn(s)
if(typeof u!=="number")return u.F()
q=H.v(this,0)
u=C.h.gG(H.A(u+this.c,q))
if(typeof s!=="number")return s.F()
q=C.h.gG(H.A(s+this.d,q))
return P.kZ(P.hx(P.hx(P.hx(P.hx(0,t),r),u),q))}}
P.av.prototype={
gbD:function(a){return this.a},
gbJ:function(a){return this.b},
gbM:function(a){return this.c},
gbB:function(a){return this.d}}
P.ce.prototype={$ice:1}
P.n.prototype={
gdL:function(a){return new P.eB(a,new W.ab(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.an])
C.a.h(u,W.jv(null))
C.a.h(u,W.jx())
C.a.h(u,new W.hI())
c=new W.eb(new W.dn(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).j6(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ab(r)
p=u.gaG(u)
for(u=J.ai(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$in:1}
P.cQ.prototype={$icQ:1}
P.d0.prototype={$id0:1}
P.ds.prototype={$ids:1}
P.bF.prototype={
ci:function(a,b){return a.activeTexture(b)},
dG:function(a,b,c){return a.attachShader(b,c)},
ar:function(a,b,c){return a.bindBuffer(b,c)},
iW:function(a,b,c){return a.bindFramebuffer(b,c)},
ax:function(a,b,c){return a.bindTexture(b,c)},
iX:function(a,b,c){return a.blendFunc(b,c)},
dJ:function(a,b,c,d){return a.bufferData(b,c,d)},
iZ:function(a,b){return a.clear(b)},
j_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j0:function(a,b){return a.clearDepth(b)},
j1:function(a,b){return a.compileShader(b)},
j8:function(a,b){return a.createShader(b)},
ja:function(a,b){return a.deleteProgram(b)},
jb:function(a,b){return a.deleteShader(b)},
je:function(a,b){return a.depthFunc(b)},
jf:function(a,b){return a.disable(b)},
dR:function(a,b){return a.disableVertexAttribArray(b)},
jg:function(a,b,c,d,e){return a.drawElements(b,c,H.a0(d),H.a0(e))},
cu:function(a,b){return a.enable(b)},
dT:function(a,b){return a.enableVertexAttribArray(b)},
ey:function(a,b,c){return a.getActiveAttrib(b,c)},
ez:function(a,b,c){return a.getActiveUniform(b,c)},
eA:function(a,b,c){return a.getAttribLocation(b,c)},
cT:function(a,b){return a.getParameter(b)},
eE:function(a,b){return a.getProgramInfoLog(b)},
bO:function(a,b,c){return a.getProgramParameter(b,c)},
eF:function(a,b){return a.getShaderInfoLog(b)},
eG:function(a,b,c){return a.getShaderParameter(b,c)},
eH:function(a,b,c){return a.getUniformLocation(b,c)},
ju:function(a,b){return a.linkProgram(b)},
jN:function(a,b,c){return a.pixelStorei(b,c)},
eN:function(a,b,c){return a.shaderSource(b,c)},
jY:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.S(g)
if(!!u.$ibc)t=!0
else t=!1
if(t){this.ia(a,b,c,d,e,f,P.lf(g))
return}if(!!u.$ic5)u=!0
else u=!1
if(u){this.ib(a,b,c,d,e,f,g)
return}throw H.h(P.kd("Incorrect number or type of arguments"))},
jX:function(a,b,c,d,e,f,g){return this.jY(a,b,c,d,e,f,g,null,null,null)},
ia:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ib:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bI:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ev:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ew:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cR:function(a,b){return a.useProgram(b)},
k7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
k8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibF:1}
P.dv.prototype={$idv:1}
P.dD.prototype={$idD:1}
P.dL.prototype={$idL:1}
O.U.prototype={
bf:function(a){this.sfN(H.b([],[a]))
this.sdr(null)
this.sdl(null)
this.sds(null)},
cV:function(a,b,c){var u=H.a4(this,"U",0)
H.j(b,{func:1,ret:P.H,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.y,[P.i,u]]}
H.j(a,u)
H.j(c,u)
this.sdr(b)
this.sdl(a)
this.sds(c)},
aV:function(a,b){return this.cV(a,null,b)},
dq:function(a){var u
H.f(a,"$ii",[H.a4(this,"U",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d0:function(a,b){var u
H.f(b,"$ii",[H.a4(this,"U",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gp:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ac(u,u.length,0,[H.v(u,0)])},
a7:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a4(this,"U",0)
H.A(b,u)
u=[u]
if(this.dq(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d0(s,H.b([b],u))}},
a6:function(a,b){var u,t
H.f(b,"$ii",[H.a4(this,"U",0)],"$ai")
if(this.dq(b)){u=this.a
t=u.length
C.a.a6(u,b)
this.d0(t,b)}},
sfN:function(a){this.a=H.f(a,"$ia",[H.a4(this,"U",0)],"$aa")},
sdr:function(a){this.b=H.j(a,{func:1,ret:P.H,args:[[P.i,H.a4(this,"U",0)]]})},
sdl:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.a4(this,"U",0)]]})},
sds:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.a4(this,"U",0)]]})},
$ii:1}
O.c8.prototype={
gp:function(a){return this.a.length},
gn:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
f_:function(a){var u=this.b
if(u!=null)u.C(a)},
aH:function(){return this.f_(null)},
ga_:function(){var u=this.a
if(u.length>0)return C.a.gbC(u)
else return V.bB()},
bG:function(a){var u=this.a
if(a==null)C.a.h(u,V.bB())
else C.a.h(u,a)
this.aH()},
aC:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sc1:function(a){this.a=H.f(a,"$ia",[V.ae],"$aa")}}
E.ei.prototype={}
E.a8.prototype={
sbP:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gn().S(0,this.gel())
t=this.c
if(t!=null)t.gn().h(0,this.gel())
s=new D.C("shape",u,this.c,this,[F.dw])
s.b=!0
this.aQ(s)}},
am:function(a){var u
for(u=this.y.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.am(a)},
aa:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga_())
u.aH()
a.cO(this.f)
u=a.dy
t=(u&&C.a).gbC(u)
if(t!=null&&this.d!=null)t.eo(a,this)
for(u=this.y.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.aa(a)
a.cN()
a.dx.aC()},
gn:function(){var u=this.z
if(u==null){u=D.E()
this.z=u}return u},
aQ:function(a){var u=this.z
if(u!=null)u.C(a)},
a3:function(){return this.aQ(null)},
em:function(a){H.d(a,"$iu")
this.e=null
this.aQ(a)},
jE:function(){return this.em(null)},
ek:function(a){this.aQ(H.d(a,"$iu"))},
jB:function(){return this.ek(null)},
jA:function(a,b){var u,t,s,r,q,p,o
H.f(b,"$ii",[E.a8],"$ai")
for(u=b.length,t=this.gej(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.sac(null)
o.sb_(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sac(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
jD:function(a,b){var u,t
H.f(b,"$ii",[E.a8],"$ai")
for(u=b.gO(b),t=this.gej();u.u();)u.gE().gn().S(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf0:function(a,b){this.y=H.f(b,"$iU",[E.a8],"$aU")},
$iaM:1}
E.fk.prototype={
eX:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ad(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c8()
t=[V.ae]
u.sc1(H.b([],t))
u.b=null
u.gn().h(0,new E.fl(this))
this.cy=u
u=new O.c8()
u.sc1(H.b([],t))
u.b=null
u.gn().h(0,new E.fm(this))
this.db=u
u=new O.c8()
u.sc1(H.b([],t))
u.b=null
u.gn().h(0,new E.fn(this))
this.dx=u
this.si9(H.b([],[O.bi]))
u=this.dy;(u&&C.a).h(u,null)
this.si5(new H.aI([P.m,A.cf]))},
gjO:function(){var u=this.z
if(u==null){u=this.cy.ga_().A(0,this.db.ga_())
this.z=u}return u},
cO:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbC(u):a;(u&&C.a).h(u,t)},
cN:function(){var u=this.dy
if(u.length>1)u.pop()},
dE:function(a){var u=a.b
if(u.length===0)throw H.h(P.p("May not cache a shader with no name."))
if(this.fr.dO(u))throw H.h(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Y(0,u,a)},
si9:function(a){this.dy=H.f(a,"$ia",[O.bi],"$aa")},
si5:function(a){this.fr=H.f(a,"$iat",[P.m,A.cf],"$aat")}}
E.fl.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fm.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fn.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dH.prototype={
d3:function(a){H.d(a,"$iu")
this.ep()},
d2:function(){return this.d3(null)},
gjo:function(){var u,t,s
u=Date.now()
t=C.h.a1(P.iX(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ad(u,!1)
return s/t},
dv:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.B(u)
s=C.j.cD(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.j.cD(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jl(C.q,this.gjR())}},
ep:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.fH(this),{func:1,ret:-1,args:[P.a6]})
C.G.fz(u)
C.G.hS(u,W.jE(t,P.a6))}},
jQ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dv()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.iX(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sp(r.a,0)
r.aH()
r=s.db
C.a.sp(r.a,0)
r.aH()
r=s.dx
C.a.sp(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sp(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aa(this.e)}s=this.z
if(s!=null)s.C(null)}catch(q){u=H.ar(q)
t=H.bO(q)
P.iK("Error: "+H.e(u))
P.iK("Stack: "+H.e(t))
throw H.h(u)}}}
E.fH.prototype={
$1:function(a){var u
H.lw(a)
u=this.a
if(u.ch){u.ch=!1
u.jQ()}},
$S:33}
Z.dT.prototype={$ilF:1}
Z.cR.prototype={
Z:function(a){var u,t,s
try{t=a.a
C.b.dT(t,this.e)
C.b.k7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ar(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}}
Z.dU.prototype={$ilG:1}
Z.bW.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t
u=this.a
C.b.ar(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].Z(a)},
aF:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dR(s,u[t].e)
C.b.ar(s,this.a.a,null)},
aa:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.l(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ar(t,p,r.b)
C.b.jg(t,q.a,q.b,5123,0)
C.b.ar(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aj(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sfJ:function(a){this.b=H.f(a,"$ia",[Z.bd],"$aa")},
$ilN:1}
Z.bd.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bD(this.c)+"'")+"]"}}
Z.aQ.prototype={
gcX:function(a){var u,t
u=this.a
t=(u&$.aE().a)!==0?3:0
if((u&$.b1().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=2
if((u&$.b3().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bR().a)!==0)++t
return(u&$.b_().a)!==0?t+4:t},
iT:function(a){var u,t,s
u=$.aE()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bR()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b_()
if((t&u.a)!==0)if(s===a)return u
return $.k4()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.aE().a)!==0)C.a.h(u,"Pos")
if((t&$.b1().a)!==0)C.a.h(u,"Norm")
if((t&$.b0().a)!==0)C.a.h(u,"Binm")
if((t&$.b2().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b3().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cL().a)!==0)C.a.h(u,"Clr3")
if((t&$.cM().a)!==0)C.a.h(u,"Clr4")
if((t&$.bR().a)!==0)C.a.h(u,"Weight")
if((t&$.b_().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.el.prototype={}
D.bt.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.u]}
H.j(b,u)
if(this.a==null)this.sac(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.u]})
u=this.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=this.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=this.b
t=(u&&C.a).S(u,b)||t}return t},
C:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.u(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a2(t,new D.ez(u))
t=this.b
if(t!=null)C.a.a2(t,new D.eA(u))
u=this.b
if(u!=null)C.a.sp(u,0)
return!0},
ji:function(){return this.C(null)},
jS:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
aE:function(){return this.jS(!0,!1)},
sac:function(a){this.a=H.f(a,"$ia",[{func:1,ret:-1,args:[D.u]}],"$aa")},
sb_:function(a){this.b=H.f(a,"$ia",[{func:1,ret:-1,args:[D.u]}],"$aa")}}
D.ez.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.eA.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.u.prototype={}
D.be.prototype={}
D.bf.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cS.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cS))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.eR.prototype={
jK:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jG:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
shM:function(a){this.d=H.f(a,"$ijh",[P.y],"$ajh")}}
X.dd.prototype={}
X.eV.prototype={
aY:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ad(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.Y(t.a+s*r,t.b+q*p)
p=this.a.gaP()
n=new X.aW(a,V.aX(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cM:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eJ()
if(typeof u!=="number")return u.ex()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aY(a,b))
return!0},
jL:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaP()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.ca(new V.N(q*p,o*n),t,s,new P.ad(r,!1),this)
r.b=!0
u.C(r)
return!0},
hk:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ad(Date.now(),!1)
t=this.f
s=new X.dd(c,a,this.a.gaP(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.aX()}}
X.am.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aW.prototype={}
X.f5.prototype={
bY:function(a,b,c){var u,t,s
u=new P.ad(Date.now(),!1)
t=this.a.gaP()
s=new X.aW(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bY(a,b,!0))
return!0},
b6:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eJ()
if(typeof u!=="number")return u.ex()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bY(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bY(a,b,!1))
return!0},
jM:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaP()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.ca(new V.N(r*q,p*o),t,b,new P.ad(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdS:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
gbK:function(){var u=this.c
if(u==null){u=D.E()
this.c=u}return u},
gei:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u}}
X.ca.prototype={}
X.fg.prototype={}
X.dJ.prototype={}
X.fK.prototype={
aY:function(a,b){var u,t,s,r
H.f(a,"$ia",[V.Y],"$aa")
u=new P.ad(Date.now(),!1)
t=a.length>0?a[0]:V.aX()
s=this.a.gaP()
r=new X.dJ(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jJ:function(a){var u
H.f(a,"$ia",[V.Y],"$aa")
u=this.b
if(u==null)return!1
u.C(this.aY(a,!0))
return!0},
jH:function(a){var u
H.f(a,"$ia",[V.Y],"$aa")
u=this.c
if(u==null)return!1
u.C(this.aY(a,!0))
return!0},
jI:function(a){var u
H.f(a,"$ia",[V.Y],"$aa")
u=this.d
if(u==null)return!1
u.C(this.aY(a,!1))
return!0}}
X.dO.prototype={
gaP:function(){var u=this.a
return V.jf(0,0,C.o.gdN(u).c,C.o.gdN(u).d)},
df:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.am(t,a.altKey,a.shiftKey))},
aN:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
cg:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.I()
q=u.top
if(typeof s!=="number")return s.I()
return new V.Y(t-r,s-q)},
b0:function(a){return new V.N(a.movementX,a.movementY)},
cc:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.Y])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
o=C.j.al(p.pageX)
C.j.al(p.pageY)
n=u.left
C.j.al(p.pageX)
C.a.h(t,new V.Y(o-n,C.j.al(p.pageY)-u.top))}return t},
au:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cS(u,new X.am(t,a.altKey,a.shiftKey))},
c2:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.I()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.I()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
he:function(a){this.f=!0},
h2:function(a){this.f=!1},
h8:function(a){H.d(a,"$ia2")
if(this.f&&this.c2(a))a.preventDefault()},
hi:function(a){var u
H.d(a,"$iaJ")
if(!this.f)return
u=this.df(a)
this.b.jK(u)},
hg:function(a){var u
H.d(a,"$iaJ")
if(!this.f)return
u=this.df(a)
this.b.jG(u)},
hm:function(a){var u,t,s,r
H.d(a,"$ia2")
u=this.a
u.focus()
this.f=!0
this.aN(a)
if(this.x){t=this.au(a)
s=this.b0(a)
if(this.d.cM(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.au(a)
r=this.aw(a)
if(this.c.cM(t,r))a.preventDefault()},
hq:function(a){var u,t,s
H.d(a,"$ia2")
this.aN(a)
u=this.au(a)
if(this.x){t=this.b0(a)
if(this.d.b6(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b6(u,s))a.preventDefault()},
hc:function(a){var u,t,s
H.d(a,"$ia2")
if(!this.c2(a)){this.aN(a)
u=this.au(a)
if(this.x){t=this.b0(a)
if(this.d.b6(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b6(u,s))a.preventDefault()}},
ho:function(a){var u,t,s
H.d(a,"$ia2")
this.aN(a)
u=this.au(a)
if(this.x){t=this.b0(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b5(u,s))a.preventDefault()},
ha:function(a){var u,t,s
H.d(a,"$ia2")
if(!this.c2(a)){this.aN(a)
u=this.au(a)
if(this.x){t=this.b0(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b5(u,s))a.preventDefault()}},
hs:function(a){var u,t
H.d(a,"$iaR")
this.aN(a)
u=new V.N((a&&C.F).gjc(a),C.F.gjd(a)).v(0,180)
if(this.x){if(this.d.jL(u))a.preventDefault()
return}if(this.r)return
t=this.aw(a)
if(this.c.jM(u,t))a.preventDefault()},
hu:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.au(this.y)
s=this.aw(this.y)
this.d.hk(t,s,u)}},
hK:function(a){var u
H.d(a,"$iaC")
this.a.focus()
this.f=!0
this.cg(a)
u=this.cc(a)
if(this.e.jJ(u))a.preventDefault()},
hG:function(a){var u
H.d(a,"$iaC")
this.cg(a)
u=this.cc(a)
if(this.e.jH(u))a.preventDefault()},
hI:function(a){var u
H.d(a,"$iaC")
this.cg(a)
u=this.cc(a)
if(this.e.jI(u))a.preventDefault()},
sfA:function(a){this.z=H.f(a,"$ia",[[P.ci,P.L]],"$aa")}}
D.b8.prototype={
gn:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u},
at:function(a){var u
H.d(a,"$iu")
u=this.d
if(u!=null)u.C(a)},
f4:function(){return this.at(null)},
$iW:1,
$iaM:1}
D.W.prototype={$iaM:1}
D.d9.prototype={
gn:function(){var u=this.Q
if(u==null){u=D.E()
this.Q=u}return u},
at:function(a){var u=this.Q
if(u!=null)u.C(a)},
dn:function(a){var u
H.d(a,"$iu")
u=this.ch
if(u!=null)u.C(a)},
hj:function(){return this.dn(null)},
hw:function(a){var u,t,s
H.f(a,"$ii",[D.W],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.f2(s))return!1}return!0},
fX:function(a,b){var u,t,s,r,q,p,o,n
u=D.W
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdm(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=H.d(b[p],"$iW")
if(o instanceof D.b8)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bt()
n.sac(null)
n.sb_(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.be(a,b,this,[u])
u.b=!0
this.at(u)},
hA:function(a,b){var u,t,s,r
u=D.W
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gdm();t.u();){r=t.gE()
C.a.S(this.e,r)
r.gn().S(0,s)}u=new D.bf(a,b,this,[u])
u.b=!0
this.at(u)},
f2:function(a){var u=C.a.U(this.e,a)
return u},
sfw:function(a){this.e=H.f(a,"$ia",[D.b8],"$aa")},
shL:function(a){this.f=H.f(a,"$ia",[D.dr],"$aa")},
si7:function(a){this.r=H.f(a,"$ia",[D.dz],"$aa")},
sim:function(a){this.x=H.f(a,"$ia",[D.dE],"$aa")},
sio:function(a){this.y=H.f(a,"$ia",[D.dF],"$aa")},
sip:function(a){this.z=H.f(a,"$ia",[D.dG],"$aa")},
$ai:function(){return[D.W]},
$aU:function(){return[D.W]}}
D.dr.prototype={$iW:1,$iaM:1}
D.dz.prototype={$iW:1,$iaM:1}
D.dE.prototype={$iW:1,$iaM:1}
D.dF.prototype={$iW:1,$iaM:1}
D.dG.prototype={$iW:1,$iaM:1}
V.V.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aA.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.ex.prototype={}
V.dh.prototype={
ab:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dh))return!1
u=b.a
t=$.J().a
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
u=[P.w]
t=V.bN(H.b([this.a,this.d,this.r],u),3,0)
s=V.bN(H.b([this.b,this.e,this.x],u),3,0)
r=V.bN(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.l(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.l(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.l(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.l(t,1)
n=" "+t[1]+", "
if(1>=p)return H.l(s,1)
n=n+s[1]+", "
if(1>=o)return H.l(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.l(t,2)
u=" "+t[2]+", "
if(2>=p)return H.l(s,2)
u=u+s[2]+", "
if(2>=o)return H.l(r,2)
return n+(u+r[2]+"]")}}
V.ae.prototype={
ab:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
cF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.J().a)return V.bB()
a8=1/a7
a9=-r
b0=-d
return V.aL((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
A:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aL(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cQ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bb:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a9(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.J().a
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
i:function(a){return this.K()},
ee:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bN(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bN(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bN(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bN(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
K:function(){return this.ee("",3,0)},
w:function(a){return this.ee(a,3,0)}}
V.Y.prototype={
I:function(a,b){return new V.Y(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a9.prototype={
I:function(a,b){return new V.a9(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aY.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aY))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.du.prototype={
ga9:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.du))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.N.prototype={
cG:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.N(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.jp
if(u==null){u=new V.N(0,0)
$.jp=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.N(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.K.prototype={
cG:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cH:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b4:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.J().a)return V.dS()
return new V.K(this.a/b,this.b/b,this.c/b)},
eg:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.em.prototype={
bU:function(a){var u=V.lE(a,this.c,this.b)
return u},
gn:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scS:function(a,b){},
scJ:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.J().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bU(t)}u=new D.C("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.M(u)}},
scL:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bU(t)}u=new D.C("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.M(u)}},
sa8:function(a,b){var u
b=this.bU(b)
u=this.d
if(!(Math.abs(u-b)<$.J().a)){this.d=b
u=new D.C("location",u,b,this,[P.w])
u.b=!0
this.M(u)}},
scK:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.J().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.C("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.M(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.C("velocity",u,a,this,[P.w])
u.b=!0
this.M(u)}},
scs:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.C("dampening",u,a,this,[P.w])
u.b=!0
this.M(u)}},
am:function(a){var u,t,s,r,q
u=this.f
t=$.J().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa8(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.J().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.cU.prototype={
gn:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
aS:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cU))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.c4.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
M:function(a){var u
H.d(a,"$iu")
u=this.e
if(u!=null)u.C(a)},
a4:function(){return this.M(null)},
fV:function(a,b){var u,t,s,r,q,p,o,n
u=U.a3
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaI(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.j(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.be(a,b,this,[u])
u.b=!0
this.M(u)},
hy:function(a,b){var u,t,s
u=U.a3
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gaI();t.u();)t.gE().gn().S(0,s)
u=new D.bf(a,b,this,[u])
u.b=!0
this.M(u)},
aS:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aU()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ac(u,u.length,0,[H.v(u,0)]),s=null;u.u();){t=u.d
if(t!=null){r=t.aS(a,b)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.bB():s
u=this.e
if(u!=null)u.aE()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.Z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aU:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dP.prototype={
gn:function(){var u=this.cy
if(u==null){u=D.E()
this.cy=u}return u},
M:function(a){var u
H.d(a,"$iu")
u=this.cy
if(u!=null)u.C(a)},
a4:function(){return this.M(null)},
b2:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdS().h(0,this.gc3())
this.a.c.gei().h(0,this.gc5())
this.a.c.gbK().h(0,this.gc7())
return!0},
c4:function(a){H.d(a,"$iu")
if(!J.Z(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c6:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaW")
if(!this.y)return
if(this.x){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.I(0,a.y)
u=new V.N(t.a,t.b).A(0,2).v(0,u.ga9())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.N(s.a,s.b).A(0,2).v(0,u.ga9())
s=this.b
q=r.a
if(typeof q!=="number")return q.P()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
this.b.sT(0)
t=t.I(0,a.z)
this.Q=new V.N(t.a,t.b).A(0,2).v(0,u.ga9())}this.a4()},
c8:function(a){var u,t,s
H.d(a,"$iu")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sT(t*10*s)
this.a4()}},
aS:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aU()
if(u<t){this.ch=t
s=a.y
this.b.am(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aL(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia3:1}
U.dQ.prototype={
gn:function(){var u=this.fx
if(u==null){u=D.E()
this.fx=u}return u},
M:function(a){var u
H.d(a,"$iu")
u=this.fx
if(u!=null)u.C(a)},
a4:function(){return this.M(null)},
b2:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdS().h(0,this.gc3())
this.a.c.gei().h(0,this.gc5())
this.a.c.gbK().h(0,this.gc7())
u=this.a.d
t=u.f
if(t==null){t=D.E()
u.f=t
u=t}else u=t
u.h(0,this.gfO())
u=this.a.d
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gfQ())
u=this.a.e
t=u.b
if(t==null){t=D.E()
u.b=t
u=t}else u=t
u.h(0,this.gij())
u=this.a.e
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gih())
u=this.a.e
t=u.c
if(t==null){t=D.E()
u.c=t
u=t}else u=t
u.h(0,this.gie())
return!0},
ao:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.N(u,t)},
c4:function(a){a=H.c(H.d(a,"$iu"),"$iaW")
if(!J.Z(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c6:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaW")
if(!this.cx)return
if(this.ch){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.I(0,a.y)
u=this.ao(new V.N(t.a,t.b).A(0,2).v(0,u.ga9()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=this.ao(new V.N(s.a,s.b).A(0,2).v(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa8(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.I(0,a.z)
this.dx=this.ao(new V.N(t.a,t.b).A(0,2).v(0,u.ga9()))}this.a4()},
c8:function(a){var u,t,s
H.d(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sT(-t*10*u)
this.a4()}},
fP:function(a){if(H.c(H.d(a,"$iu"),"$idd").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fR:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaW")
if(!J.Z(this.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=this.ao(new V.N(s.a,s.b).A(0,2).v(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa8(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.I(0,a.z)
this.dx=this.ao(new V.N(t.a,t.b).A(0,2).v(0,u.ga9()))
this.a4()},
ik:function(a){H.d(a,"$iu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ii:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$idJ")
if(!this.cx)return
if(this.ch){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.I(0,a.y)
u=this.ao(new V.N(t.a,t.b).A(0,2).v(0,u.ga9()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=this.ao(new V.N(s.a,s.b).A(0,2).v(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa8(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.I(0,a.z)
this.dx=this.ao(new V.N(t.a,t.b).A(0,2).v(0,u.ga9()))}this.a4()},
ig:function(a){var u,t,s
H.d(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sT(-t*10*u)
this.a4()}},
aS:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aU()
if(u<t){this.dy=t
s=a.y
this.c.am(s)
this.b.am(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aL(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.aL(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia3:1}
U.dR.prototype={
gn:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
b2:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.E()
u.e=t
u=t}else u=t
t=this.gfS()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.E()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fT:function(a){var u,t,s,r
H.d(a,"$iu")
if(!J.Z(this.b,this.a.b.c))return
H.c(a,"$ica")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.C("zoom",u,r,this,[P.w])
u.b=!0
this.M(u)}},
aS:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aL(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia3:1}
M.cT.prototype={
gn:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
X:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
aW:function(){return this.X(null)},
hC:function(a,b){var u,t,s,r,q,p,o,n
u=M.ao
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.j(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.be(a,b,this,[u])
u.b=!0
this.X(u)},
hE:function(a,b){var u,t,s
u=M.ao
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gW();t.u();)t.gE().gn().S(0,s)
u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
aa:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();){t=u.d
if(t!=null)t.aa(a)}this.e=!1},
$ai:function(){return[M.ao]},
$aU:function(){return[M.ao]},
$iao:1}
M.cV.prototype={
gn:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
X:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
aW:function(){return this.X(null)},
sb3:function(a){var u,t
if(a==null)a=new X.eL()
u=this.a
if(u!==a){if(u!=null)u.gn().S(0,this.gW())
t=this.a
this.a=a
a.gn().h(0,this.gW())
u=new D.C("camera",t,this.a,this,[X.bp])
u.b=!0
this.X(u)}},
sb8:function(a,b){var u,t
if(b==null)b=X.ih(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gn().S(0,this.gW())
t=this.b
this.b=b
b.gn().h(0,this.gW())
u=new D.C("target",t,this.b,this,[X.cj])
u.b=!0
this.X(u)}},
sb9:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().S(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gW())
u=new D.C("technique",t,this.c,this,[O.bi])
u.b=!0
this.X(u)}},
aa:function(a){a.cO(this.c)
this.b.Z(a)
this.a.Z(a)
this.d.am(a)
this.d.aa(a)
this.a.aF(a)
this.b.toString
a.cN()},
$iao:1}
M.cZ.prototype={
X:function(a){var u
H.d(a,"$iu")
u=this.x
if(u!=null)u.C(a)},
aW:function(){return this.X(null)},
h4:function(a,b){var u,t,s,r,q,p,o,n
u=E.a8
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bt()
n.sac(null)
n.sb_(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.be(a,b,this,[u])
u.b=!0
this.X(u)},
h6:function(a,b){var u,t,s
u=E.a8
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gW();t.u();)t.gE().gn().S(0,s)
u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
sb3:function(a){var u,t
if(a==null)a=X.j8(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gn().S(0,this.gW())
t=this.a
this.a=a
a.gn().h(0,this.gW())
u=new D.C("camera",t,this.a,this,[X.bp])
u.b=!0
this.X(u)}},
sb8:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gn().S(0,this.gW())
t=this.b
this.b=b
b.gn().h(0,this.gW())
u=new D.C("target",t,this.b,this,[X.cj])
u.b=!0
this.X(u)}},
sb9:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().S(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gW())
u=new D.C("technique",t,this.c,this,[O.bi])
u.b=!0
this.X(u)}},
gn:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
aa:function(a){var u
a.cO(this.c)
this.b.Z(a)
this.a.Z(a)
u=this.c
if(u!=null)u.am(a)
for(u=this.d.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.am(a)
for(u=this.d.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.aa(a)
this.a.toString
a.cy.aC()
a.db.aC()
this.b.toString
a.cN()},
sfp:function(a,b){this.d=H.f(b,"$iU",[E.a8],"$aU")},
$iao:1}
M.ao.prototype={}
A.cP.prototype={}
A.eh.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.dT(r.a,r.c)}},
dQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.dR(r.a,r.c)}}}
A.dg.prototype={
eW:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aZ("")
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
a6.it(u)
a6.iA(u)
a6.iu(u)
a6.iI(u)
a6.iJ(u)
a6.iC(u)
a6.iN(u)
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
u=new P.aZ("")
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
q.ix(u)
q.is(u)
q.iv(u)
q.iy(u)
q.iG(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iE(u)
q.iF(u)}q.iB(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.f:m+="   return alpha;\n"
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
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.m])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.k(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iw(u)
q.iD(u)
q.iH(u)
q.iK(u)
q.iL(u)
q.iM(u)
q.iz(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.m])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.c)u.a+="   setDiffuseColor();\n"
if(q.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.c)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.c)C.a.h(j,"emission()")
if(q.r!==C.c)C.a.h(j,"reflect(refl)")
if(q.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.k(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.ef(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$iah")
if(t)this.dy=H.c(this.y.m(0,"objMat"),"$iah")
if(r)this.fr=H.c(this.y.m(0,"viewObjMat"),"$iah")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$iah")
if(a6.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$icp")
if(a6.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$iah")
if(a6.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$iah")
this.sfl(H.b([],[A.ah]))
t=a6.as
if(t>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$iG")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.l(0,q)
if(g==null)H.q(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iah"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.m(0,"emissionClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.c(this.y.m(0,"emissionTxt"),"$iaa")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iG")
break
case C.d:this.ry=H.c(this.y.m(0,"emissionTxt"),"$ia5")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iG")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.m(0,"ambientClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.c(this.y.m(0,"ambientTxt"),"$iaa")
this.as=H.c(this.y.m(0,"nullAmbientTxt"),"$iG")
break
case C.d:this.y2=H.c(this.y.m(0,"ambientTxt"),"$ia5")
this.as=H.c(this.y.m(0,"nullAmbientTxt"),"$iG")
break}}t=a6.c
if(t!==C.c){this.ak=H.c(this.y.m(0,"diffuseClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.bm=H.c(this.y.m(0,"diffuseTxt"),"$iaa")
this.bn=H.c(this.y.m(0,"nullDiffuseTxt"),"$iG")
break
case C.d:this.dU=H.c(this.y.m(0,"diffuseTxt"),"$ia5")
this.bn=H.c(this.y.m(0,"nullDiffuseTxt"),"$iG")
break}}t=a6.d
if(t!==C.c){this.bo=H.c(this.y.m(0,"invDiffuseClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.dV=H.c(this.y.m(0,"invDiffuseTxt"),"$iaa")
this.bp=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iG")
break
case C.d:this.dW=H.c(this.y.m(0,"invDiffuseTxt"),"$ia5")
this.bp=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iG")
break}}t=a6.e
if(t!==C.c){this.bs=H.c(this.y.m(0,"shininess"),"$iQ")
this.bq=H.c(this.y.m(0,"specularClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.dX=H.c(this.y.m(0,"specularTxt"),"$iaa")
this.br=H.c(this.y.m(0,"nullSpecularTxt"),"$iG")
break
case C.d:this.dY=H.c(this.y.m(0,"specularTxt"),"$ia5")
this.br=H.c(this.y.m(0,"nullSpecularTxt"),"$iG")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.e:this.dZ=H.c(this.y.m(0,"bumpTxt"),"$iaa")
this.bt=H.c(this.y.m(0,"nullBumpTxt"),"$iG")
break
case C.d:this.e_=H.c(this.y.m(0,"bumpTxt"),"$ia5")
this.bt=H.c(this.y.m(0,"nullBumpTxt"),"$iG")
break}if(a6.dy){this.e0=H.c(this.y.m(0,"envSampler"),"$ia5")
this.e1=H.c(this.y.m(0,"nullEnvTxt"),"$iG")
t=a6.r
if(t!==C.c){this.bu=H.c(this.y.m(0,"reflectClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.e2=H.c(this.y.m(0,"reflectTxt"),"$iaa")
this.bv=H.c(this.y.m(0,"nullReflectTxt"),"$iG")
break
case C.d:this.e3=H.c(this.y.m(0,"reflectTxt"),"$ia5")
this.bv=H.c(this.y.m(0,"nullReflectTxt"),"$iG")
break}}t=a6.x
if(t!==C.c){this.bw=H.c(this.y.m(0,"refraction"),"$iQ")
this.bx=H.c(this.y.m(0,"refractClr"),"$iD")
switch(t){case C.c:break
case C.f:break
case C.e:this.e4=H.c(this.y.m(0,"refractTxt"),"$iaa")
this.by=H.c(this.y.m(0,"nullRefractTxt"),"$iG")
break
case C.d:this.e5=H.c(this.y.m(0,"refractTxt"),"$ia5")
this.by=H.c(this.y.m(0,"nullRefractTxt"),"$iG")
break}}}t=a6.y
if(t!==C.c){this.bz=H.c(this.y.m(0,"alpha"),"$iQ")
switch(t){case C.c:break
case C.f:break
case C.e:this.e6=H.c(this.y.m(0,"alphaTxt"),"$iaa")
this.bA=H.c(this.y.m(0,"nullAlphaTxt"),"$iG")
break
case C.d:this.e7=H.c(this.y.m(0,"alphaTxt"),"$ia5")
this.bA=H.c(this.y.m(0,"nullAlphaTxt"),"$iG")
break}}this.sf5(H.b([],[A.co]))
this.sf6(H.b([],[A.cq]))
this.sf7(H.b([],[A.cr]))
this.sf8(H.b([],[A.cs]))
this.sf9(H.b([],[A.ct]))
this.sfa(H.b([],[A.cu]))
if(a6.k2){t=a6.z
if(t>0){this.e8=H.d(this.y.m(0,"dirLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="dirLights["+h+"].color"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.cv;(s&&C.a).h(s,new A.co(h,g,f))}}t=a6.Q
if(t>0){this.e9=H.d(this.y.m(0,"pntLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="pntLights["+h+"].color"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="pntLights["+h+"].att0"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iQ")
s=this.y
r="pntLights["+h+"].att1"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="pntLights["+h+"].att2"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.cw;(s&&C.a).h(s,new A.cq(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ea=H.d(this.y.m(0,"spotLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="spotLights["+h+"].objDir"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="spotLights["+h+"].color"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="spotLights["+h+"].att0"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="spotLights["+h+"].att1"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="spotLights["+h+"].att2"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.cz;(s&&C.a).h(s,new A.cr(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eb=H.d(this.y.m(0,"txtDirLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="txtDirLights["+h+"].color"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iD")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iG")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iaa")
s=this.cA;(s&&C.a).h(s,new A.cs(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ec=H.d(this.y.m(0,"txtPntLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$icp")
s=this.y
r="txtPntLights["+h+"].color"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iG")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$ia5")
s=this.cB;(s&&C.a).h(s,new A.ct(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ed=H.d(this.y.m(0,"txtSpotLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iD")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iD")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iD")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iD")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iD")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iG")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iD")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.l(0,r)
if(a3==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.l(0,r)
if(a4==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iQ")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.l(0,r)
if(a5==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iaa")
s=this.cC;(s&&C.a).h(s,new A.cu(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ai:function(a,b,c){C.b.N(b.a,b.d,1)},
ad:function(a,b,c){if(c==null||c.d<6)C.b.N(b.a,b.d,1)
else{a.cW(c)
C.b.N(b.a,b.d,0)}},
sfl:function(a){this.r1=H.f(a,"$ia",[A.ah],"$aa")},
sf5:function(a){this.cv=H.f(a,"$ia",[A.co],"$aa")},
sf6:function(a){this.cw=H.f(a,"$ia",[A.cq],"$aa")},
sf7:function(a){this.cz=H.f(a,"$ia",[A.cr],"$aa")},
sf8:function(a){this.cA=H.f(a,"$ia",[A.cs],"$aa")},
sf9:function(a){this.cB=H.f(a,"$ia",[A.ct],"$aa")},
sfa:function(a){this.cC=H.f(a,"$ia",[A.cu],"$aa")}}
A.f2.prototype={
it:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
iA:function(a){var u
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
iu:function(a){var u
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
iI:function(a){var u,t
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
iJ:function(a){var u,t
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
iC:function(a){var u
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
iN:function(a){var u
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
av:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.bc(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ix:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.av(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
is:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.av(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iv:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.av(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iy:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.av(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iG:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.av(a,u,"specular")
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
case C.f:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
iB:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
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
case C.f:u+="   return normalize(normalVec);\n"
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
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
iE:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.av(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iF:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.av(a,u,"refract")
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
case C.f:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iw:function(a){var u,t
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
iD:function(a){var u,t
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
iH:function(a){var u,t
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
iK:function(a){var u,t,s
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
iL:function(a){var u,t,s
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
iM:function(a){var u,t,s
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
iz:function(a){var u
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
A.co.prototype={}
A.cs.prototype={}
A.cq.prototype={}
A.ct.prototype={}
A.cr.prototype={}
A.cu.prototype={}
A.cf.prototype={
d_:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ef:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dg(a,35633)
this.f=this.dg(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dG(u,t,this.e)
C.b.dG(u,this.r,this.f)
C.b.ju(u,this.r)
if(!H.iA(C.b.bO(u,this.r,35714))){s=C.b.eE(u,this.r)
C.b.ja(u,this.r)
H.q(P.p("Failed to link shader: "+H.e(s)))}this.i2()
this.i4()},
Z:function(a){C.b.cR(a.a,this.r)
this.x.jj()},
dg:function(a,b){var u,t,s
u=this.a
t=C.b.j8(u,b)
C.b.eN(u,t,a)
C.b.j1(u,t)
if(!H.iA(C.b.eG(u,t,35713))){s=C.b.eF(u,t)
C.b.jb(u,t)
throw H.h(P.p("Error compiling shader '"+H.e(t)+"': "+H.e(s)))}return t},
i2:function(){var u,t,s,r,q,p
u=H.b([],[A.cP])
t=this.a
s=H.a0(C.b.bO(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ey(t,this.r,r)
p=C.b.eA(t,this.r,q.name)
C.a.h(u,new A.cP(t,q.name,p))}this.x=new A.eh(u)},
i4:function(){var u,t,s,r,q,p
u=H.b([],[A.dK])
t=this.a
s=H.a0(C.b.bO(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ez(t,this.r,r)
p=C.b.eH(t,this.r,q.name)
C.a.h(u,this.j9(q.type,q.size,q.name,p))}this.y=new A.fV(u)},
aK:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.G(u,t,b,c)
else return A.is(u,t,b,a,c)},
ft:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aa(u,t,b,c)
else return A.is(u,t,b,a,c)},
fu:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a5(u,t,b,c)
else return A.is(u,t,b,a,c)},
bj:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
j9:function(a,b,c,d){switch(a){case 5120:return this.aK(b,c,d)
case 5121:return this.aK(b,c,d)
case 5122:return this.aK(b,c,d)
case 5123:return this.aK(b,c,d)
case 5124:return this.aK(b,c,d)
case 5125:return this.aK(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.fQ(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.fT(this.a,this.r,c,d)
case 35667:return new A.fR(this.a,this.r,c,d)
case 35668:return new A.fS(this.a,this.r,c,d)
case 35669:return new A.fU(this.a,this.r,c,d)
case 35674:return new A.fW(this.a,this.r,c,d)
case 35675:return new A.cp(this.a,this.r,c,d)
case 35676:return new A.ah(this.a,this.r,c,d)
case 35678:return this.ft(b,c,d)
case 35680:return this.fu(b,c,d)
case 35670:throw H.h(this.bj("BOOL",c))
case 35671:throw H.h(this.bj("BOOL_VEC2",c))
case 35672:throw H.h(this.bj("BOOL_VEC3",c))
case 35673:throw H.h(this.bj("BOOL_VEC4",c))
default:throw H.h(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bs.prototype={
i:function(a){return this.b}}
A.dy.prototype={}
A.dK.prototype={}
A.fV.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.l(0,b)
if(u==null)throw H.h(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
jn:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+a
return s},
K:function(){return this.jn("\n")}}
A.G.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.fR.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.fS.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.fU.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.fP.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)},
siq:function(a){this.e=H.f(a,"$ia",[P.y],"$aa")}}
A.Q.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.fQ.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.fT.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.fW.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cp.prototype={
ah:function(a){var u=new Float32Array(H.cG(H.f(a,"$ia",[P.w],"$aa")))
C.b.ev(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ah.prototype={
ah:function(a){var u=new Float32Array(H.cG(H.f(a,"$ia",[P.w],"$aa")))
C.b.ew(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.aa.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a5.prototype={
cW:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.hQ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cH(u.b,b).cH(u.d.cH(u.c,b),c)
u=new V.a9(t.a,t.b,t.c)
if(!J.Z(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a3()}a.saR(t.v(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
s=new V.aY(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.Z(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a3()}},
$S:37}
F.X.prototype={
fk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dS()
if(t!=null)q=q.F(0,t)
if(s!=null)q=q.F(0,s)
if(r!=null)q=q.F(0,r)
if(q.eg())return
return q.v(0,Math.sqrt(q.D(q)))},
fo:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.I(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.D(u)))
u=r.I(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.b4(u.v(0,Math.sqrt(u.D(u))))
return u.v(0,Math.sqrt(u.D(u)))},
cp:function(){if(this.d!=null)return!0
var u=this.fk()
if(u==null){u=this.fo()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dS()
if(t!=null)q=q.F(0,t)
if(s!=null)q=q.F(0,s)
if(r!=null)q=q.F(0,r)
if(q.eg())return
return q.v(0,Math.sqrt(q.D(q)))},
fn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.J().a){u=m.I(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.P(0)}else{g=(u-l.b)/i
u=m.I(0,p)
u=new V.a9(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).I(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.P(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.D(u)))
u=f.b4(h)
u=u.v(0,Math.sqrt(u.D(u))).b4(f)
h=u.v(0,Math.sqrt(u.D(u)))}return h},
cn:function(){if(this.e!=null)return!0
var u=this.fj()
if(u==null){u=this.fn()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.i.ag(J.aj(u.e),0)+", "+C.i.ag(J.aj(this.b.e),0)+", "+C.i.ag(J.aj(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
K:function(){return this.w("")}}
F.aV.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.ag(J.aj(u.e),0)+", "+C.i.ag(J.aj(this.b.e),0)},
K:function(){return this.w("")}}
F.bh.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.ag(J.aj(u.e),0)},
K:function(){return this.w("")}}
F.dw.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
jy:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a0()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){q=u[r]
this.a.h(0,q.j4())}this.a.a0()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bh()
if(m.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.C(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.F()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.ks(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a0()
o=o.e
if(typeof o!=="number")return o.F()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a0()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c2(k,j,h)}u=this.e
if(u!=null)u.aE()},
ay:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ay()||!1
if(!this.a.ay())t=!1
u=this.e
if(u!=null)u.aE()
return t},
dK:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aE()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b1().a)!==0)++r
if((s&$.b0().a)!==0)++r
if((s&$.b2().a)!==0)++r
if((s&$.b3().a)!==0)++r
if((s&$.cL().a)!==0)++r
if((s&$.cM().a)!==0)++r
if((s&$.bR().a)!==0)++r
if((s&$.b_().a)!==0)++r
q=a1.gcX(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cR])
for(m=0,l=0;l<r;++l){k=a1.iT(l)
j=k.gcX(k)
C.a.Y(n,l,new Z.cR(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.l(t,i)
h=t[i].jv(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.f(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ar(t,34962,e)
C.b.dJ(t,34962,new Float32Array(H.cG(o)),35044)
C.b.ar(t,34962,null)
d=new Z.bW(new Z.dT(34962,e),n,a1)
d.sfJ(H.b([],[Z.bd]))
if(this.b.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a0()
C.a.h(c,b.e)}a=Z.it(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bd(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a0()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.a0()
C.a.h(c,b.e)}a=Z.it(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bd(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a0()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.a0()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].c
b.a.a.a0()
C.a.h(c,b.e)}a=Z.it(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bd(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.w("   "))}return C.a.k(u,"\n")},
aQ:function(a){var u=this.e
if(u!=null)u.C(a)},
a3:function(){return this.aQ(null)},
$ilM:1}
F.fr.prototype={
iO:function(a){var u,t,s,r,q,p
H.f(a,"$ia",[F.aq],"$aa")
u=H.b([],[F.X])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c2(t,q,p))}return u},
iP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,"$ia",[F.aq],"$aa")
u=H.b([],[F.X])
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
C.a.h(u,F.c2(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c2(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c2(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c2(k,h,l))}o=!o}q=!q}return u},
gp:function(a){return this.b.length},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cp())s=!1
return s},
co:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cn())s=!1
return s},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")},
sfB:function(a){this.b=H.f(a,"$ia",[F.X],"$aa")}}
F.fs.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.l(r,s)
C.a.h(u,r[s].w(a+(""+s+". ")))}return C.a.k(u,"\n")},
K:function(){return this.w("")},
sfK:function(a){this.b=H.f(a,"$ia",[F.aV],"$aa")}}
F.ft.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")},
scb:function(a){this.b=H.f(a,"$ia",[F.bh],"$aa")}}
F.aq.prototype={
cr:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.h2(this.cx,s,p,u,t,r,q,a,o)},
j4:function(){return this.cr(null)},
saR:function(a){var u
if(!J.Z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
jv:function(a){var u,t
if(a.t(0,$.aE())){u=this.f
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b1())){u=this.r
t=[P.w]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b0())){u=this.x
t=[P.w]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b2())){u=this.y
t=[P.w]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.b3())){u=this.z
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cL())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cM())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bR()))return H.b([this.ch],[P.w])
else if(a.t(0,$.b_())){u=this.cx
t=[P.w]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.w])},
cp:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dS()
this.d.a2(0,new F.ha(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aE()}return!0},
cn:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dS()
this.d.a2(0,new F.h9(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aE()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.i.ag(J.aj(this.e),0))
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
C.a.h(u,V.O(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
K:function(){return this.w("")}}
F.ha.prototype={
$1:function(a){var u,t
H.d(a,"$iX")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.h9.prototype={
$1:function(a){var u,t
H.d(a,"$iX")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.h3.prototype={
a0:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
iQ:function(a,b,c,d,e,f,g,h,i){var u=F.h2(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bk:function(a,b,c,d,e,f){return this.iQ(a,null,b,c,null,d,e,f,0)},
gp:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cp()
return!0},
co:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cn()
return!0},
iY:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
this.a0()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")},
sir:function(a){this.c=H.f(a,"$ia",[F.aq],"$aa")}}
F.h4.prototype={
gp:function(a){return this.b.length+this.c.length+this.d.length},
a2:function(a,b){H.j(b,{func:1,ret:-1,args:[F.X]})
C.a.a2(this.b,b)
C.a.a2(this.c,new F.h5(this,b))
C.a.a2(this.d,new F.h6(this,b))},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")},
sfC:function(a){this.b=H.f(a,"$ia",[F.X],"$aa")},
sfD:function(a){this.c=H.f(a,"$ia",[F.X],"$aa")},
sfE:function(a){this.d=H.f(a,"$ia",[F.X],"$aa")}}
F.h5.prototype={
$1:function(a){H.d(a,"$iX")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:5}
F.h6.prototype={
$1:function(a){var u
H.d(a,"$iX")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:5}
F.h7.prototype={
gp:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")},
sfL:function(a){this.b=H.f(a,"$ia",[F.aV],"$aa")},
sfM:function(a){this.c=H.f(a,"$ia",[F.aV],"$aa")}}
F.h8.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
K:function(){return this.w("")},
scb:function(a){this.b=H.f(a,"$ia",[F.bh],"$aa")}}
O.df.prototype={
gn:function(){var u=this.dy
if(u==null){u=D.E()
this.dy=u}return u},
R:function(a){var u
H.d(a,"$iu")
u=this.dy
if(u!=null)u.C(a)},
aZ:function(){return this.R(null)},
du:function(a){H.d(a,"$iu")
this.a=null
this.R(a)},
hU:function(){return this.du(null)},
fZ:function(a,b){var u=V.ae
u=new D.be(a,H.f(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.R(u)},
h0:function(a,b){var u=V.ae
u=new D.bf(a,H.f(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.R(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a1(u.e.length+3,4)*4
s=C.h.a1(u.f.length+3,4)*4
r=C.h.a1(u.r.length+3,4)*4
q=C.h.a1(u.x.length+3,4)*4
p=C.h.a1(u.y.length+3,4)*4
o=C.h.a1(u.z.length+3,4)*4
n=C.h.a1(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.h.i(u.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+C.h.i(h.a)+C.h.i(g.a)+C.h.i(f.a)
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
a3=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aE()
if(a0){b=$.b1()
a7=new Z.aQ(a7.a|b.a)}if(a1){b=$.b0()
a7=new Z.aQ(a7.a|b.a)}if(a2){b=$.b2()
a7=new Z.aQ(a7.a|b.a)}if(a3){b=$.b3()
a7=new Z.aQ(a7.a|b.a)}if(a5){b=$.b_()
a7=new Z.aQ(a7.a|b.a)}return new A.f2(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.f(a,"$ia",[T.cl],"$aa")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();){t=u.d
t.toString
s=$.h1
if(s==null){s=new V.K(0,0,1)
$.h1=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cQ(s)}}},
eo:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dd()
t=H.d(a2.fr.l(0,u.ak),"$idg")
if(t==null){t=A.kx(u,a2.a)
a2.dE(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bm
u=a3.e
if(!(u instanceof Z.bW)){a3.e=null
u=null}if(u==null||!u.d.t(0,r)){u=s.r1
if(u)a3.d.ay()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.co()
p.a.co()
p=p.e
if(p!=null)p.aE()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.iY()
o=o.e
if(o!=null)o.aE()}m=a3.d.dK(new Z.dU(a2.a),r)
m.az($.aE()).e=this.a.Q.c
if(u)m.az($.b1()).e=this.a.cx.c
if(q)m.az($.b0()).e=this.a.ch.c
if(s.rx)m.az($.b2()).e=this.a.cy.c
if(p)m.az($.b3()).e=this.a.db.c
if(s.x1)m.az($.b_()).e=this.a.dx.c
a3.e=m}u=T.cl
l=H.b([],[u])
this.a.Z(a2)
if(s.fx){q=this.a
p=a2.dx.ga_()
q=q.dy
q.toString
q.ah(p.ab(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.ga_().A(0,a2.dx.ga_())
a2.cx=p}q=q.fr
q.toString
q.ah(p.ab(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjO().A(0,a2.dx.ga_())
a2.ch=p}q=q.fy
q.toString
q.ah(p.ab(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ah(C.r.ab(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ah(C.r.ab(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ah(C.r.ab(p,!0))}if(s.as>0){k=this.e.a.length
q=this.a.k4
C.b.N(q.a,q.d,k)
for(q=[P.w],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.l(o,j)
o=o[j]
p.toString
H.d(o,"$iae")
p=p.r1
if(j>=p.length)return H.l(p,j)
p=p[j]
i=new Float32Array(H.cG(H.f(o.ab(0,!0),"$ia",q,"$aa")))
C.b.ew(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.f.d)
q=this.a
p=this.f.d
q.ai(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.f.e)
q=this.a
p=this.f.e
q.ad(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.r.d)
q=this.a
p=this.r.d
q.ai(q.y1,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.r.e)
q=this.a
p=this.r.e
q.ad(q.y2,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.ak
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.x.d)
q=this.a
p=this.x.d
q.ai(q.bm,q.bn,p)
p=this.a
q=this.x.f
p=p.ak
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.x.e)
q=this.a
p=this.x.e
q.ad(q.dU,q.bn,p)
p=this.a
q=this.x.f
p=p.ak
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bo
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.y.d)
q=this.a
p=this.y.d
q.ai(q.dV,q.bp,p)
p=this.a
q=this.y.f
p=p.bo
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.y.e)
q=this.a
p=this.y.e
q.ad(q.dW,q.bp,p)
p=this.a
q=this.y.f
p=p.bo
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bq
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bs
C.b.H(p.a,p.d,n)
break
case C.e:this.V(l,this.z.d)
q=this.a
p=this.z.d
q.ai(q.dX,q.br,p)
p=this.a
q=this.z.f
p=p.bq
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bs
C.b.H(q.a,q.d,n)
break
case C.d:this.V(l,this.z.e)
q=this.a
p=this.z.e
q.ad(q.dY,q.br,p)
p=this.a
q=this.z.f
p=p.bq
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bs
C.b.H(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.e8
C.b.N(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cv
if(g>=o.length)return H.l(o,g)
d=o[g]
o=h.cQ(e.a)
n=o.a
c=o.b
b=o.c
b=o.v(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.q(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.q(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.e9
C.b.N(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cw
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gb7(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.bb(e.gb7(e))
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gaj(e)
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gcj()
n=d.e
C.b.H(n.a,n.d,o)
o=e.gck()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gcl()
n=d.r
C.b.H(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ea
C.b.N(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cz
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gb7(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gct(e).kc()
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.bb(e.gb7(e))
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gaj(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gkb()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gka()
n=d.r
C.b.H(n.a,n.d,o)
o=e.gcj()
n=d.x
C.b.H(n.a,n.d,o)
o=e.gck()
n=d.y
C.b.H(n.a,n.d,o)
o=e.gcl()
n=d.z
C.b.H(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eb
C.b.N(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
n=this.a.cA
if(g>=n.length)return H.l(n,g)
d=n[g]
n=e.gba()
H.f(l,"$ia",o,"$aa")
if(!C.a.U(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gct(e)
c=d.d
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbK()
c=d.b
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbH(e)
c=d.c
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=h.cQ(e.gct(e))
c=n.a
b=n.b
a=n.c
a=n.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.q(b.a,b.d,c,n,a)
a=e.gaj(e)
n=d.f
C.b.q(n.a,n.d,a.a,a.b,a.c)
a=e.gba()
n=a.gbE(a)
if(!n){n=d.x
C.b.N(n.a,n.d,1)}else{n=d.r
c=a.gbE(a)
b=n.a
n=n.d
if(!c)C.b.N(b,n,0)
else C.b.N(b,n,a.gjq(a))
n=d.x
C.b.N(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ec
C.b.N(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.y,p=q.length,o=[P.w],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
c=this.a.cB
if(g>=c.length)return H.l(c,g)
d=c[g]
c=e.gba()
H.f(l,"$ia",n,"$aa")
if(!C.a.U(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.A(0,e.ga_())
c=e.ga_()
b=$.cc
if(b==null){b=new V.a9(0,0,0)
$.cc=b}b=c.bb(b)
c=d.b
C.b.q(c.a,c.d,b.a,b.b,b.c)
c=$.cc
if(c==null){c=new V.a9(0,0,0)
$.cc=c}c=a0.bb(c)
b=d.c
C.b.q(b.a,b.d,c.a,c.b,c.c)
c=a0.cF()
b=d.d
i=new Float32Array(H.cG(H.f(new V.dh(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ab(0,!0),"$ia",o,"$aa")))
C.b.ev(b.a,b.d,!1,i)
b=e.gaj(e)
c=d.e
C.b.q(c.a,c.d,b.a,b.b,b.c)
b=e.gba()
c=b.gbE(b)
if(!c){c=d.r
C.b.N(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.N(a1,c,0)
else C.b.N(a1,c,b.a)
c=d.r
C.b.N(c.a,c.d,0)}c=e.gcj()
b=d.x
C.b.H(b.a,b.d,c)
c=e.gck()
b=d.y
C.b.H(b.a,b.d,c)
c=e.gcl()
b=d.z
C.b.H(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ed
C.b.N(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gba()
H.f(l,"$ia",u,"$aa")
if(!C.a.U(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gb7(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gct(e)
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbK()
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbH(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.bb(e.gb7(e))
n=d.f
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gba()
n=o.gbE(o)
if(!n){o=d.x
C.b.N(o.a,o.d,1)}else{n=d.r
c=o.gbE(o)
b=n.a
n=n.d
if(!c)C.b.N(b,n,0)
else C.b.N(b,n,o.gjq(o))
o=d.x
C.b.N(o.a,o.d,0)}o=e.gaj(e)
n=d.y
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gkd()
n=d.z
C.b.H(n.a,n.d,o)
o=e.gke()
n=d.Q
C.b.H(n.a,n.d,o)
o=e.gcj()
n=d.ch
C.b.H(n.a,n.d,o)
o=e.gck()
n=d.cx
C.b.H(n.a,n.d,o)
o=e.gcl()
n=d.cy
C.b.H(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.e:this.V(l,this.Q.d)
u=this.a
q=this.Q.d
u.ai(u.dZ,u.bt,q)
break
case C.d:this.V(l,this.Q.e)
u=this.a
q=this.Q.e
u.ad(u.e_,u.bt,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga_().cF()
a2.Q=q}u=u.id
u.toString
u.ah(q.ab(0,!0))}if(s.dy){this.V(l,this.ch)
u=this.a
q=this.ch
u.ad(u.e0,u.e1,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bu
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
break
case C.e:this.V(l,this.cx.d)
u=this.a
q=this.cx.d
u.ai(u.e2,u.bv,q)
q=this.a
u=this.cx.f
q=q.bu
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break
case C.d:this.V(l,this.cx.e)
u=this.a
q=this.cx.e
u.ad(u.e3,u.bv,q)
q=this.a
u=this.cx.f
q=q.bu
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bx
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bw
C.b.H(q.a,q.d,o)
break
case C.e:this.V(l,this.cy.d)
u=this.a
q=this.cy.d
u.ai(u.e4,u.by,q)
q=this.a
u=this.cy.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bw
C.b.H(u.a,u.d,o)
break
case C.d:this.V(l,this.cy.e)
u=this.a
q=this.cy.e
u.ad(u.e5,u.by,q)
q=this.a
u=this.cy.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bw
C.b.H(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bz
C.b.H(u.a,u.d,p)
break
case C.e:this.V(l,this.db.d)
u=this.a
p=this.db.d
u.ai(u.e6,u.bA,p)
p=this.a
u=this.db.f
p=p.bz
C.b.H(p.a,p.d,u)
break
case C.d:this.V(l,this.db.e)
u=this.a
p=this.db.e
u.ad(u.e7,u.bA,p)
p=this.a
u=this.db.f
p=p.bz
C.b.H(p.a,p.d,u)
break}u=a2.a
C.b.cu(u,3042)
C.b.iX(u,770,771)}for(j=0;j<l.length;++j)l[j].Z(a2)
u=a3.e
u.Z(a2)
u.aa(a2)
u.aF(a2)
if(q)C.b.jf(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.ci(u,33984+q.a)
C.b.ax(u,34067,null)}}q=this.a
q.toString
C.b.cR(u,null)
q.x.dQ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().ak},
sfm:function(a){this.e=H.f(a,"$iU",[V.ae],"$aU")}}
O.f0.prototype={
hZ:function(a){var u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.C(this.b,u,a,this,[P.w])
u.b=!0
this.a.R(u)}},
ap:function(){this.cZ()
this.hZ(1)}}
O.c7.prototype={
R:function(a){this.a.R(H.d(a,"$iu"))},
aZ:function(){return this.R(null)},
ap:function(){},
i0:function(a){},
i1:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gn().S(0,this.gaM())
t=this.e
this.e=a
if(a!=null)a.gn().h(0,this.gaM())
u=new D.C(this.b+".textureCube",t,this.e,this,[T.bH])
u.b=!0
this.a.R(u)}},
saR:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.ap()
this.c=C.d
this.i0(null)
u=this.a
u.a=null
u.R(null)}this.i1(a)}}
O.f1.prototype={}
O.aK.prototype={
dw:function(a){var u,t
if(!J.Z(this.f,a)){u=this.f
this.f=a
t=new D.C(this.b+".color",u,a,this,[V.V])
t.b=!0
this.a.R(t)}},
ap:function(){this.cZ()
this.dw(new V.V(1,1,1))},
saj:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.ap()
u=this.a
u.a=null
u.R(null)}this.dw(b)}}
O.f3.prototype={
i_:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.C(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.R(u)}},
ap:function(){this.bS()
this.i_(1)}}
O.f4.prototype={
ce:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.C(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.R(u)}},
ap:function(){this.bS()
this.ce(100)}}
O.dx.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
R:function(a){var u
H.d(a,"$iu")
u=this.e
if(u!=null)u.C(a)},
aZ:function(){return this.R(null)},
eo:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.l(0,"Skybox"),"$idy")
if(u==null){t=a.a
u=new A.dy(t,"Skybox")
u.d_(t,"Skybox")
u.ef($.kN,$.kM)
u.z=u.x.l(0,"posAttr")
u.Q=H.c(u.y.l(0,"fov"),"$iQ")
u.ch=H.c(u.y.l(0,"ratio"),"$iQ")
u.cx=H.c(u.y.l(0,"boxClr"),"$iD")
u.cy=H.c(u.y.l(0,"boxTxt"),"$ia5")
u.db=H.c(u.y.l(0,"viewMat"),"$iah")
a.dE(u)}this.a=u}if(b.e==null){t=b.d.dK(new Z.dU(a.a),$.aE())
t.az($.aE()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.Z(a)}t=a.d
s=a.c
r=this.a
r.Z(a)
q=this.b
p=r.Q
C.b.H(p.a,p.d,q)
q=r.ch
C.b.H(q.a,q.d,t/s)
s=this.c
r.cy.cW(s)
s=this.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db.ga_().cF()
r=r.db
r.toString
r.ah(s.ab(0,!0))
t=b.e
if(t instanceof Z.bW){t.Z(a)
t.aa(a)
t.aF(a)}else b.e=null
t=this.a
t.toString
C.b.cR(a.a,null)
t.x.dQ()
t=this.c
if(t!=null)t.aF(a)}}
O.bi.prototype={}
T.cl.prototype={}
T.bH.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
Z:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.ci(u,33984+this.a)
C.b.ax(u,34067,this.b)}},
aF:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.ci(u,33984+this.a)
C.b.ax(u,34067,null)}}}
T.fF.prototype={
eh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.ax(o,34067,n)
C.b.bI(o,34067,10242,10497)
C.b.bI(o,34067,10243,10497)
C.b.bI(o,34067,10241,9729)
C.b.bI(o,34067,10240,9729)
C.b.ax(o,34067,null)
m=new T.bH()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aL(m,n,u,34069,!1,!1)
this.aL(m,n,r,34070,!1,!1)
this.aL(m,n,t,34071,!1,!1)
this.aL(m,n,q,34072,!1,!1)
this.aL(m,n,s,34073,!1,!1)
this.aL(m,n,p,34074,!1,!1)
return m},
jw:function(a,b){return this.eh(a,b,!1,"")},
cI:function(a){return this.eh(a,".png",!1,"")},
aL:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.k
W.a_(u,"load",H.j(new T.fG(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
hV:function(a,b,c){var u,t,s,r
b=V.iJ(b,2)
u=V.iJ(a.width,2)
t=V.iJ(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ic(null,null)
s.width=u
s.height=t
r=H.d(C.o.eC(s,"2d"),"$ibr")
r.imageSmoothingEnabled=!1;(r&&C.y).jh(r,a,0,0,s.width,s.height)
return P.lg(C.y.fI(r,0,0,s.width,s.height))}}}
T.fG.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.hV(this.b,u.c,this.c)
s=u.a
C.b.ax(s,34067,this.d)
C.b.jN(s,37440,this.e?1:0)
C.b.jX(s,this.f,0,6408,6408,5121,t)
C.b.ax(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.ji()}++u.e},
$S:26}
V.aT.prototype={
aB:function(a){return!0},
i:function(a){return"all"},
$ial:1}
V.al.prototype={}
V.de.prototype={
aB:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aB(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.f(a,"$ia",[V.al],"$aa")},
$ial:1}
V.af.prototype={
aB:function(a){return!this.eT(a)},
i:function(a){return"!["+this.cY(0)+"]"}}
V.fi.prototype={
aB:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.io(this.a)
t=H.io(this.b)
return u+".."+t},
$ial:1}
V.fq.prototype={
eY:function(a){var u,t
if(a.a.length<=0)throw H.h(P.p("May not create a SetMatcher with zero characters."))
u=new H.aI([P.y,P.H])
for(t=new H.c6(a,a.gp(a),0,[H.a4(a,"T",0)]);t.u();)u.Y(0,t.d,!0)
this.shY(u)},
aB:function(a){return this.a.dO(a)},
i:function(a){var u=this.a
return P.iq(new H.da(u,[H.v(u,0)]),0,null)},
shY:function(a){this.a=H.f(a,"$iat",[P.y,P.H],"$aat")},
$ial:1}
V.cg.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cn(this.a.j(0,b))
r.sa5(H.b([],[V.al]))
r.c=!1
C.a.h(this.c,r)
return r},
jk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aB(a))return r}return},
i:function(a){return this.b},
sil:function(a){this.c=H.f(a,"$ia",[V.cn],"$aa")}}
V.dI.prototype={
i:function(a){var u,t
u=H.iL(this.b,"\n","\\n")
t=H.iL(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cm.prototype={
aD:function(a,b,c){var u,t,s
H.f(c,"$ia",[P.m],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
shR:function(a){var u=P.m
this.c=H.f(a,"$iat",[u,u],"$aat")}}
V.fI.prototype={
j:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.cg(this,b)
u.sil(H.b([],[V.cn]))
u.d=null
this.a.Y(0,b,u)}return u},
L:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.cm(this,a)
t=P.m
u.shR(new H.aI([t,t]))
this.b.Y(0,a,u)}return u},
eu:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dI])
t=this.c
s=[P.y]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.aJ(a,o)
m=t.jk(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.iq(r,0,null)
throw H.h(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.iq(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.dI(j==null?k.b:j,l,o)}++o}}},
si8:function(a){this.a=H.f(a,"$iat",[P.m,V.cg],"$aat")},
sic:function(a){this.b=H.f(a,"$iat",[P.m,V.cm],"$aat")}}
V.cn.prototype={
i:function(a){return this.b.b+": "+this.cY(0)}}
X.bp.prototype={$iaM:1}
X.eG.prototype={
gn:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
an:function(a){var u=this.x
if(u!=null)u.C(a)},
sdM:function(a,b){var u
if(this.b){this.b=!1
u=new D.C("clearColor",!0,!1,this,[P.H])
u.b=!0
this.an(u)}},
Z:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.iW(u,36160,null)
C.b.cu(u,2884)
C.b.cu(u,2929)
C.b.je(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.B(t)
p=C.j.al(q*t)
q=r.b
if(typeof s!=="number")return H.B(s)
o=C.j.al(q*s)
q=C.j.al(r.c*t)
a.c=q
r=C.j.al(r.d*s)
a.d=r
C.b.k8(u,p,o,q,r)
C.b.j0(u,this.c)
if(this.b){r=this.a
C.b.j_(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.iZ(u,n)}}
X.eL.prototype={
gn:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
Z:function(a){var u
a.cy.bG(V.bB())
u=V.bB()
a.db.bG(u)},
aF:function(a){a.cy.aC()
a.db.aC()},
$iaM:1,
$ibp:1}
X.dq.prototype={
gn:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
an:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
ff:function(){return this.an(null)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aL(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bG(n)
u=$.j9
if(u==null){u=V.jb()
t=V.jt()
s=$.jq
if(s==null){s=new V.K(0,0,-1)
$.jq=s}s=V.j4(u,t,s)
$.j9=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aS(a,this)
if(l!=null)m=l.A(0,m)}a.db.bG(m)},
aF:function(a){a.cy.aC()
a.db.aC()},
$iaM:1,
$ibp:1}
X.cj.prototype={}
V.b6.prototype={
be:function(a){this.b=new P.eJ(C.M)
this.c=null
this.sc0(H.b([],[[P.a,W.as]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.as]))
t=a.split("\n")
for(u=t.length,s=[W.as],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.I(p)
n=this.b.fs(p,0,p.length)
m=n==null?p:n
C.k.eL(o,H.iL(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbC(this.d),o)}},
en:function(a){var u,t,s,r
H.f(a,"$ia",[P.m],"$aa")
this.sc0(H.b([],[[P.a,W.as]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.bl()
this.c=t}for(t=t.eu(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)this.bF(t[r])},
sc0:function(a){this.d=H.f(a,"$ia",[[P.a,W.as]],"$aa")}}
V.i6.prototype={
$1:function(a){H.d(a,"$iaN")
P.iK(C.j.es(this.a.gjo(),2)+" fps")},
$S:39}
V.eq.prototype={
bF:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break
case"Type":this.J(a.b,"#B11")
break
case"Whitespace":this.J(a.b,"#111")
break}},
bl:function(){var u,t,s,r
u=V.fJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aT())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.r(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aT())
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.af()
r=[V.al]
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.af()
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.L("Num")
s=u.j(0,"Float")
s.d=s.a.L("Num")
s=u.j(0,"Sym")
s.d=s.a.L("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.L("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.L("String")
s=u.j(0,"EndComment")
s.d=s.a.L("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.L("Whitespace")
s=u.j(0,"Id")
t=s.a.L("Id")
s.d=t
s=[P.m]
t.aD(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aD(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aD(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eH.prototype={
bF:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Preprocess":this.J(a.b,"#737")
break
case"Reserved":this.J(a.b,"#119")
break
case"Symbol":this.J(a.b,"#611")
break
case"Type":this.J(a.b,"#171")
break
case"Whitespace":this.J(a.b,"#111")
break}},
bl:function(){var u,t,s,r
u=V.fJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aT())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.af()
r=[V.al]
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.r(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.L("Num")
t=u.j(0,"Float")
t.d=t.a.L("Num")
t=u.j(0,"Sym")
t.d=t.a.L("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.L("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.L("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.L("Whitespace")
t=u.j(0,"Id")
s=t.a.L("Id")
t.d=s
t=[P.m]
s.aD(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aD(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aD(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eI.prototype={
bF:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
this.J("=","#111")
break
case"Id":this.J(a.b,"#111")
break
case"Other":this.J(a.b,"#111")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break}},
bl:function(){var u,t,s
u=V.fJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.r(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.r(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.r(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.r(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aT())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aT())
t=u.j(0,"Other").k(0,"Other")
s=new V.af()
s.sa5(H.b([],[V.al]))
C.a.h(t.a,s)
t=V.r(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.L("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.L("String")
t=u.j(0,"Id")
s=t.a.L("Id")
t.d=s
s.aD(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
s=u.j(0,"Attr")
s.d=s.a.L("Attr")
s=u.j(0,"Other")
s.d=s.a.L("Other")
return u}}
V.ff.prototype={
en:function(a){H.f(a,"$ia",[P.m],"$aa")
this.sc0(H.b([],[[P.a,W.as]]))
this.J(C.a.k(a,"\n"),"#111")},
bF:function(a){},
bl:function(){return}}
V.fu.prototype={
eZ:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).B(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.B(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.B(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.B(q,p)}o=u.createElement("div")
this.a=o
C.k.B(q,o)
this.b=null
o=W.k
W.a_(u,"scroll",H.j(new V.fw(s),{func:1,ret:-1,args:[o]}),!1,o)},
dD:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.f(a,"$ia",[P.m],"$aa")
this.i3()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eu(C.a.jt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.B(t,o)
break
case"Link":n=p.b
if(H.lB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
C.k.B(t,l)}else{k=P.jy(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
eB:function(a){var u,t,s,r
u=new V.eq("dart")
u.be("dart")
t=new V.eH("glsl")
t.be("glsl")
s=new V.eI("html")
s.be("html")
r=C.a.jl(H.b([u,t,s],[V.b6]),new V.fx(a))
if(r!=null)return r
u=new V.ff("plain")
u.be("plain")
return u},
dC:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a7,"$ia",[P.m],"$aa")
u=H.b([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.iG(r).bQ(r,"+")){C.a.Y(a7,s,C.i.bc(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bQ(r,"-")){C.a.Y(a7,s,C.i.bc(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eB(a5)
q.en(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.jy(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iR(null)
i.href="#"+m
i.textContent=a4
C.k.B(j,i)
C.v.B(k,j)
C.m.B(l,k)
C.p.B(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.v.B(a,r[a0])
C.m.B(e,d)
C.m.B(e,c)
C.m.B(e,a)
C.p.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gO(r);a3.u();)C.v.B(c,a3.gE())
C.m.B(e,d)
C.m.B(e,c)
C.p.B(n,e)}},
i3:function(){var u,t,s,r
if(this.b!=null)return
u=V.fJ()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.af()
r=[V.al]
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.af()
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.af()
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aT())
s=u.j(0,"Other").k(0,"Other")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.L("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.L("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.L("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.L("Link")
s=u.j(0,"Other")
s.d=s.a.L("Other")
this.b=u}}
V.fw.prototype={
$1:function(a){P.jl(C.q,new V.fv(this.a))},
$S:26}
V.fv.prototype={
$0:function(){var u,t,s
u=C.j.al(document.documentElement.scrollTop)
t=this.a.style
s=H.e(-0.01*u)+"px"
t.top=s},
$S:2}
V.fx.prototype={
$1:function(a){return H.d(a,"$ib6").a===this.a},
$S:40}
X.i3.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iu")
u=this.a
t=this.b
s=t.a
r=[P.m]
u.dC("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dC("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a1.prototype
u.eQ=u.i
u=J.d7.prototype
u.eS=u.i
u=P.i.prototype
u.eR=u.bL
u=W.M.prototype
u.bR=u.ae
u=W.e5.prototype
u.eU=u.aq
u=O.c7.prototype
u.cZ=u.ap
u=O.aK.prototype
u.bS=u.ap
u=V.de.prototype
u.eT=u.aB
u.cY=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"la","kT",10)
u(P,"lb","kU",10)
u(P,"lc","kV",10)
t(P,"jH","l9",3)
s(W,"ll",4,null,["$4"],["kX"],19,0)
s(W,"lm",4,null,["$4"],["kY"],19,0)
var m
r(m=E.a8.prototype,"gel",0,0,null,["$1","$0"],["em","jE"],0,0)
r(m,"gej",0,0,null,["$1","$0"],["ek","jB"],0,0)
q(m,"gjz","jA",7)
q(m,"gjC","jD",7)
r(m=E.dH.prototype,"gd1",0,0,null,["$1","$0"],["d3","d2"],0,0)
p(m,"gjR","ep",3)
o(m=X.dO.prototype,"ghd","he",9)
o(m,"gh1","h2",9)
o(m,"gh7","h8",4)
o(m,"ghh","hi",18)
o(m,"ghf","hg",18)
o(m,"ghl","hm",4)
o(m,"ghp","hq",4)
o(m,"ghb","hc",4)
o(m,"ghn","ho",4)
o(m,"gh9","ha",4)
o(m,"ghr","hs",35)
o(m,"ght","hu",9)
o(m,"ghJ","hK",8)
o(m,"ghF","hG",8)
o(m,"ghH","hI",8)
r(D.b8.prototype,"gf3",0,0,null,["$1","$0"],["at","f4"],0,0)
r(m=D.d9.prototype,"gdm",0,0,null,["$1","$0"],["dn","hj"],0,0)
o(m,"ghv","hw",36)
q(m,"gfW","fX",20)
q(m,"ghz","hA",20)
n(V.N.prototype,"gp","cG",21)
n(V.K.prototype,"gp","cG",21)
r(m=U.c4.prototype,"gaI",0,0,null,["$1","$0"],["M","a4"],0,0)
q(m,"gfU","fV",22)
q(m,"ghx","hy",22)
r(m=U.dP.prototype,"gaI",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gc7","c8",1)
r(m=U.dQ.prototype,"gaI",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gc7","c8",1)
o(m,"gfO","fP",1)
o(m,"gfQ","fR",1)
o(m,"gij","ik",1)
o(m,"gih","ii",1)
o(m,"gie","ig",1)
o(U.dR.prototype,"gfS","fT",1)
r(m=M.cT.prototype,"gW",0,0,null,["$1","$0"],["X","aW"],0,0)
q(m,"ghB","hC",24)
q(m,"ghD","hE",24)
r(M.cV.prototype,"gW",0,0,null,["$1","$0"],["X","aW"],0,0)
r(m=M.cZ.prototype,"gW",0,0,null,["$1","$0"],["X","aW"],0,0)
q(m,"gh3","h4",7)
q(m,"gh5","h6",7)
r(m=O.df.prototype,"gaM",0,0,null,["$1","$0"],["R","aZ"],0,0)
r(m,"ghT",0,0,null,["$1","$0"],["du","hU"],0,0)
q(m,"gfY","fZ",25)
q(m,"gh_","h0",25)
r(O.c7.prototype,"gaM",0,0,null,["$1","$0"],["R","aZ"],0,0)
r(O.dx.prototype,"gaM",0,0,null,["$1","$0"],["R","aZ"],0,0)
r(X.dq.prototype,"gfe",0,0,null,["$1","$0"],["an","ff"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.il,J.a1,J.ac,P.e1,P.i,H.c6,P.aG,H.bv,H.dN,H.fj,H.fM,P.ba,H.bX,H.e6,P.bA,H.eS,H.eT,H.eP,P.e7,P.aS,P.ax,P.dV,P.fz,P.ci,P.fA,P.aN,P.a7,P.hP,P.hF,P.bI,P.e0,P.T,P.bY,P.eK,P.hN,P.H,P.ad,P.a6,P.b9,P.fd,P.dA,P.dY,P.eF,P.bb,P.a,P.F,P.ag,P.m,P.aZ,W.eo,W.bk,W.ak,W.dn,W.e5,W.hI,W.d_,W.an,W.hE,W.eb,P.ea,P.hz,O.U,O.c8,E.ei,E.a8,E.fk,E.dH,Z.dT,Z.dU,Z.bW,Z.bd,Z.aQ,D.el,D.bt,D.u,X.cS,X.d8,X.eR,X.eV,X.am,X.f5,X.fK,X.dO,D.b8,D.W,D.dr,D.dz,D.dE,D.dF,D.dG,V.V,V.aA,V.ex,V.dh,V.ae,V.Y,V.a9,V.aY,V.du,V.N,V.K,U.dP,U.dQ,U.dR,M.cV,M.cZ,M.ao,A.cP,A.eh,A.f2,A.co,A.cs,A.cq,A.ct,A.cr,A.cu,A.bs,A.dK,A.fV,F.X,F.aV,F.bh,F.dw,F.fr,F.fs,F.ft,F.aq,F.h3,F.h4,F.h7,F.h8,O.bi,O.c7,T.fF,V.aT,V.al,V.de,V.fi,V.fq,V.cg,V.dI,V.cm,V.fI,X.bp,X.cj,X.eL,X.dq,V.b6,V.fu])
s(J.a1,[J.eO,J.d5,J.d7,J.aH,J.d6,J.by,H.dl,W.bu,W.br,W.dW,W.er,W.cX,W.cY,W.k,W.dZ,W.bc,W.dc,W.e3,W.dt,W.aO,W.e8,W.ec,P.cQ,P.d0,P.ds,P.bF,P.dv,P.dD,P.dL])
s(J.d7,[J.fe,J.cv,J.bg])
t(J.ik,J.aH)
s(J.d6,[J.d4,J.d3])
t(P.eU,P.e1)
s(P.eU,[H.dM,W.hi,W.ab,P.eB])
t(H.o,H.dM)
s(P.i,[H.eu,H.eY,H.cw])
s(H.eu,[H.bz,H.da])
s(P.aG,[H.eZ,H.hc])
t(H.f_,H.bz)
s(P.ba,[H.fc,H.eQ,H.fY,H.fO,H.ek,H.fo,P.dp,P.az,P.fZ,P.fX,P.ch,P.en,P.ep])
s(H.bX,[H.i7,H.fE,H.hZ,H.i_,H.i0,P.he,P.hd,P.hf,P.hg,P.hM,P.hL,P.hn,P.hr,P.ho,P.hp,P.hq,P.hu,P.hv,P.ht,P.hs,P.fB,P.fC,P.hT,P.hC,P.hB,P.hD,P.eX,P.es,P.et,W.ev,W.hm,W.fb,W.fa,W.hG,W.hH,W.hK,W.hO,P.hV,P.eC,P.eD,E.fl,E.fm,E.fn,E.fH,D.ez,D.eA,F.hQ,F.ha,F.h9,F.h5,F.h6,T.fG,V.i6,V.fw,V.fv,V.fx,X.i3])
s(H.fE,[H.fy,H.bU])
t(P.eW,P.bA)
s(P.eW,[H.aI,W.hh])
t(H.di,H.dl)
s(H.di,[H.cA,H.cC])
t(H.cB,H.cA)
t(H.dj,H.cB)
t(H.cD,H.cC)
t(H.dk,H.cD)
s(H.dk,[H.f6,H.f7,H.f8,H.dm,H.f9])
t(P.hA,P.hP)
t(P.hy,P.hF)
t(P.bZ,P.fA)
t(P.ew,P.bY)
s(P.bZ,[P.eJ,P.h0])
t(P.h_,P.ew)
s(P.a6,[P.w,P.y])
s(P.az,[P.bE,P.eM])
s(W.bu,[W.z,W.cx])
s(W.z,[W.M,W.b5,W.c0,W.cy])
s(W.M,[W.t,P.n])
s(W.t,[W.cO,W.eg,W.bT,W.b4,W.bq,W.as,W.eE,W.d1,W.c5,W.c9,W.fp,W.bG,W.dB,W.dC,W.fD,W.ck])
t(W.c_,W.dW)
t(W.e_,W.dZ)
t(W.bw,W.e_)
t(W.d2,W.c0)
t(W.bj,W.k)
s(W.bj,[W.aJ,W.a2,W.aC])
t(W.e4,W.e3)
t(W.cb,W.e4)
t(W.e9,W.e8)
t(W.fL,W.e9)
t(W.hb,W.c9)
t(W.aR,W.a2)
t(W.dX,W.cY)
t(W.ed,W.ec)
t(W.e2,W.ed)
t(W.hj,W.hh)
t(W.hk,P.fz)
t(W.iu,W.hk)
t(W.hl,P.ci)
t(W.hJ,W.e5)
t(P.av,P.hz)
t(P.ce,P.n)
s(E.ei,[Z.cR,A.cf,T.cl])
s(D.u,[D.be,D.bf,D.C,X.fg])
s(X.fg,[X.dd,X.aW,X.ca,X.dJ])
s(O.U,[D.d9,U.c4,M.cT])
s(D.el,[U.em,U.a3])
t(U.cU,U.a3)
s(A.cf,[A.dg,A.dy])
s(A.dK,[A.G,A.fR,A.fS,A.fU,A.fP,A.Q,A.fQ,A.D,A.fT,A.fW,A.cp,A.ah,A.aa,A.a5])
s(O.bi,[O.df,O.dx])
s(O.c7,[O.f0,O.f1,O.aK])
s(O.aK,[O.f3,O.f4])
t(T.bH,T.cl)
s(V.de,[V.af,V.cn])
t(X.eG,X.cj)
s(V.b6,[V.eq,V.eH,V.eI,V.ff])
u(H.dM,H.dN)
u(H.cA,P.T)
u(H.cB,H.bv)
u(H.cC,P.T)
u(H.cD,H.bv)
u(P.e1,P.T)
u(W.dW,W.eo)
u(W.dZ,P.T)
u(W.e_,W.ak)
u(W.e3,P.T)
u(W.e4,W.ak)
u(W.e8,P.T)
u(W.e9,W.ak)
u(W.ec,P.T)
u(W.ed,W.ak)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b4.prototype
C.o=W.bq.prototype
C.y=W.br.prototype
C.k=W.as.prototype
C.J=W.cX.prototype
C.L=W.d1.prototype
C.z=W.d2.prototype
C.N=J.a1.prototype
C.a=J.aH.prototype
C.O=J.d3.prototype
C.h=J.d4.prototype
C.r=J.d5.prototype
C.j=J.d6.prototype
C.i=J.by.prototype
C.V=J.bg.prototype
C.Z=W.cb.prototype
C.D=J.fe.prototype
C.E=W.dt.prototype
C.b=P.bF.prototype
C.v=W.bG.prototype
C.p=W.dB.prototype
C.m=W.dC.prototype
C.w=J.cv.prototype
C.F=W.aR.prototype
C.G=W.cx.prototype
C.H=new P.fd()
C.I=new P.h0()
C.l=new P.hA()
C.c=new A.bs(0,"ColorSourceType.None")
C.f=new A.bs(1,"ColorSourceType.Solid")
C.e=new A.bs(2,"ColorSourceType.Texture2D")
C.d=new A.bs(3,"ColorSourceType.TextureCube")
C.q=new P.b9(0)
C.K=new P.b9(5e6)
C.M=new P.eK("element",!0,!1,!1,!1)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.W=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.X=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.Y=H.b(u([]),[P.m])
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.h_(!1)})();(function staticFields(){$.aF=0
$.bV=null
$.iS=null
$.iw=!1
$.jK=null
$.jF=null
$.jP=null
$.hW=null
$.i1=null
$.iH=null
$.bJ=null
$.cH=null
$.cI=null
$.ix=!1
$.R=C.l
$.aU=null
$.ig=null
$.iZ=null
$.iY=null
$.j5=null
$.ja=null
$.cc=null
$.jg=null
$.jp=null
$.js=null
$.jr=null
$.h1=null
$.jq=null
$.kN="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kM="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.j9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lJ","jS",function(){return H.jJ("_$dart_dartClosure")})
u($,"lK","iM",function(){return H.jJ("_$dart_js")})
u($,"lO","jT",function(){return H.aP(H.fN({
toString:function(){return"$receiver$"}}))})
u($,"lP","jU",function(){return H.aP(H.fN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lQ","jV",function(){return H.aP(H.fN(null))})
u($,"lR","jW",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lU","jZ",function(){return H.aP(H.fN(void 0))})
u($,"lV","k_",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lT","jY",function(){return H.aP(H.jn(null))})
u($,"lS","jX",function(){return H.aP(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lX","k1",function(){return H.aP(H.jn(void 0))})
u($,"lW","k0",function(){return H.aP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"md","iN",function(){return P.kS()})
u($,"mh","cN",function(){return[]})
u($,"mg","k6",function(){return P.kI("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"me","k5",function(){return P.j2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"mf","iO",function(){return P.kt(P.m,P.bb)})
u($,"m6","k4",function(){return Z.aw(0)})
u($,"m0","k2",function(){return Z.aw(511)})
u($,"m8","aE",function(){return Z.aw(1)})
u($,"m7","b1",function(){return Z.aw(2)})
u($,"m2","b0",function(){return Z.aw(4)})
u($,"m9","b2",function(){return Z.aw(8)})
u($,"ma","b3",function(){return Z.aw(16)})
u($,"m3","cL",function(){return Z.aw(32)})
u($,"m4","cM",function(){return Z.aw(64)})
u($,"m5","k3",function(){return Z.aw(96)})
u($,"mb","bR",function(){return Z.aw(128)})
u($,"m1","b_",function(){return Z.aw(256)})
u($,"lI","jR",function(){return new V.ex(1e-9)})
u($,"lH","J",function(){return $.jR()})})()
var v={mangledGlobalNames:{y:"int",w:"double",a6:"num",m:"String",H:"bool",F:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.F,args:[F.X]},{func:1,ret:P.F,args:[D.u]},{func:1,ret:-1,args:[P.y,[P.i,E.a8]]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.m,args:[P.y]},{func:1,ret:P.H,args:[W.z]},{func:1,args:[,]},{func:1,ret:P.H,args:[P.m]},{func:1,ret:P.H,args:[W.an]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.H,args:[W.M,P.m,P.m,W.bk]},{func:1,ret:-1,args:[P.y,[P.i,D.W]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.i,U.a3]]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.y,[P.i,M.ao]]},{func:1,ret:-1,args:[P.y,[P.i,V.ae]]},{func:1,ret:P.F,args:[W.k]},{func:1,args:[W.k]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:W.M,args:[W.z]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[,P.m]},{func:1,ret:P.F,args:[P.a6]},{func:1,args:[P.m]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.H,args:[[P.i,D.W]]},{func:1,ret:P.F,args:[F.aq,P.w,P.w]},{func:1,ret:[P.ax,,],args:[,]},{func:1,ret:P.F,args:[P.aN]},{func:1,ret:P.H,args:[V.b6]},{func:1,ret:P.F,args:[,],opt:[P.ag]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a1,MediaError:J.a1,Navigator:J.a1,NavigatorConcurrentHardware:J.a1,NavigatorUserMediaError:J.a1,OverconstrainedError:J.a1,PositionError:J.a1,WebGLActiveInfo:J.a1,WebGLRenderbuffer:J.a1,WebGL2RenderingContext:J.a1,SQLError:J.a1,ArrayBufferView:H.dl,Float32Array:H.dj,Int16Array:H.f6,Int32Array:H.f7,Uint32Array:H.f8,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.f9,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.cO,HTMLAreaElement:W.eg,HTMLBaseElement:W.bT,HTMLBodyElement:W.b4,HTMLCanvasElement:W.bq,CanvasRenderingContext2D:W.br,CDATASection:W.b5,CharacterData:W.b5,Comment:W.b5,ProcessingInstruction:W.b5,Text:W.b5,CSSStyleDeclaration:W.c_,MSStyleCSSProperties:W.c_,CSS2Properties:W.c_,HTMLDivElement:W.as,XMLDocument:W.c0,Document:W.c0,DOMException:W.er,DOMImplementation:W.cX,DOMRectReadOnly:W.cY,Element:W.M,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,EventTarget:W.bu,HTMLFormElement:W.eE,HTMLHeadElement:W.d1,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,HTMLDocument:W.d2,ImageData:W.bc,HTMLImageElement:W.c5,KeyboardEvent:W.aJ,Location:W.dc,HTMLAudioElement:W.c9,HTMLMediaElement:W.c9,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cb,RadioNodeList:W.cb,Range:W.dt,HTMLSelectElement:W.fp,HTMLTableCellElement:W.bG,HTMLTableDataCellElement:W.bG,HTMLTableHeaderCellElement:W.bG,HTMLTableElement:W.dB,HTMLTableRowElement:W.dC,HTMLTableSectionElement:W.fD,HTMLTemplateElement:W.ck,Touch:W.aO,TouchEvent:W.aC,TouchList:W.fL,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,HTMLVideoElement:W.hb,WheelEvent:W.aR,Window:W.cx,DOMWindow:W.cx,Attr:W.cy,ClientRect:W.dX,DOMRect:W.dX,NamedNodeMap:W.e2,MozNamedAttrMap:W.e2,SVGScriptElement:P.ce,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,WebGLBuffer:P.cQ,WebGLFramebuffer:P.d0,WebGLProgram:P.ds,WebGLRenderingContext:P.bF,WebGLShader:P.dv,WebGLTexture:P.dD,WebGLUniformLocation:P.dL})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.jM,[])
else X.jM([])})})()
//# sourceMappingURL=test.dart.js.map
