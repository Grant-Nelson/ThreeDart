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
a[c]=function(){a[c]=function(){H.mq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jp(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j9:function j9(){},
f6:function(){return new P.cb("No element")},
lg:function(){return new P.cb("Too many elements")},
o:function o(a){this.a=a},
eL:function eL(){},
bs:function bs(){},
c1:function c1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
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
cj:function cj(a,b,c){this.a=a
this.b=b
this.$ti=c},
i0:function i0(a,b,c){this.a=a
this.b=b
this.$ti=c},
bp:function bp(){},
dk:function dk(){},
dj:function dj(){},
bI:function(a){var u,t=H.z(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
m6:function(a){return v.types[H.a_(a)]},
md:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iA},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.f(H.bh(a))
return u},
c7:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bv:function(a){return H.ll(a)+H.jl(H.bj(a),0,null)},
ll:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibd){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bI(t.length>1&&C.c.aa(t,0)===36?C.c.aH(t,1):t)},
k_:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lt:function(a){var u,t,s,r=H.c([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.I)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bh(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aw(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bh(s))}return H.k_(r)},
k0:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bh(s))
if(s<0)throw H.f(H.bh(s))
if(s>65535)return H.lt(a)}return H.k_(a)},
jb:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aw(u,10))>>>0,56320|u&1023)}throw H.f(P.aF(a,0,1114111,null,null))},
bu:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ls:function(a){var u=H.bu(a).getFullYear()+0
return u},
lq:function(a){var u=H.bu(a).getMonth()+1
return u},
lm:function(a){var u=H.bu(a).getDate()+0
return u},
ln:function(a){var u=H.bu(a).getHours()+0
return u},
lp:function(a){var u=H.bu(a).getMinutes()+0
return u},
lr:function(a){var u=H.bu(a).getSeconds()+0
return u},
lo:function(a){var u=H.bu(a).getMilliseconds()+0
return u},
bk:function(a){throw H.f(H.bh(a))},
k:function(a,b){if(a==null)J.bm(a)
throw H.f(H.cx(a,b))},
cx:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,s,null)
u=H.a_(J.bm(a))
if(!(b<0)){if(typeof u!=="number")return H.bk(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.d7(b,s)},
m0:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bw(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bw(a,c,!0,b,"end",u)
return new P.at(!0,b,"end",null)},
bh:function(a){return new P.at(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kG})
u.name=""}else u.toString=H.kG
return u},
kG:function(){return J.as(this.dartException)},
ac:function(a){throw H.f(a)},
I:function(a){throw H.f(P.b4(a))},
aM:function(a){var u,t,s,r,q,p
a=H.kF(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hs(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ht:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ka:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jV:function(a,b){return new H.fF(a,b==null?null:b.method)},
ja:function(a,b){var u=b==null,t=u?null:b.method
return new H.fb(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aw(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ja(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jV(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kJ()
q=$.kK()
p=$.kL()
o=$.kM()
n=$.kP()
m=$.kQ()
l=$.kO()
$.kN()
k=$.kS()
j=$.kR()
i=r.U(u)
if(i!=null)return f.$1(H.ja(H.z(u),i))
else{i=q.U(u)
if(i!=null){i.method="call"
return f.$1(H.ja(H.z(u),i))}else{i=p.U(u)
if(i==null){i=o.U(u)
if(i==null){i=n.U(u)
if(i==null){i=m.U(u)
if(i==null){i=l.U(u)
if(i==null){i=o.U(u)
if(i==null){i=k.U(u)
if(i==null){i=j.U(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jV(H.z(u),i))}}return f.$1(new H.hJ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dc()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.at(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dc()
return a},
bF:function(a){var u
if(a==null)return new H.dY(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dY(a)},
m3:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.I(0,a[u],a[t])}return b},
mc:function(a,b,c,d,e,f){H.n(a,"$ib7")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.a3("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mc)
a.$identity=u
return u},
l8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.h7().constructor.prototype):Object.create(new H.bQ(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.P()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jI(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.m6,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jG:H.j4
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jI(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
l5:function(a,b,c,d){var u=H.j4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jI:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l7(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l5(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.P()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bR
return new Function(r+H.i(q==null?$.bR=H.et("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.P()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bR
return new Function(r+H.i(q==null?$.bR=H.et("self"):q)+"."+H.i(u)+"("+o+");}")()},
l6:function(a,b,c,d){var u=H.j4,t=H.jG
switch(b?-1:a){case 0:throw H.f(H.lx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l7:function(a,b){var u,t,s,r,q,p,o,n=$.bR
if(n==null)n=$.bR=H.et("self")
u=$.jF
if(u==null)u=$.jF=H.et("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l6(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.au
if(typeof u!=="number")return u.P()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.P()
$.au=u+1
return new Function(n+u+"}")()},
jp:function(a,b,c,d,e,f,g){return H.l8(a,b,H.a_(c),d,!!e,!!f,g)},
j4:function(a){return a.a},
jG:function(a){return a.c},
et:function(a){var u,t,s,r=new H.bQ("self","target","receiver","name"),q=J.j7(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.lV("boolean expression must not be null")
return a},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ar(a,"String"))},
n4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ar(a,"double"))},
mi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ar(a,"num"))},
jm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ar(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ar(a,"int"))},
kD:function(a,b){throw H.f(H.ar(a,H.bI(H.z(b).substring(2))))},
mk:function(a,b){throw H.f(H.l4(a,H.bI(H.z(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.kD(a,b)},
bG:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mk(a,b)},
jv:function(a){if(a==null)return a
if(!!J.Q(a).$ib)return a
throw H.f(H.ar(a,"List<dynamic>"))},
me:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.kD(a,b)},
kx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
ej:function(a,b){var u
if(typeof a=="function")return!0
u=H.kx(J.Q(a))
if(u==null)return!1
return H.ko(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.ji)return a
$.ji=!0
try{if(H.ej(a,b))return a
u=H.iZ(b)
t=H.ar(a,u)
throw H.f(t)}finally{$.ji=!1}},
jq:function(a,b){if(a!=null&&!H.jo(a,b))H.ac(H.ar(a,H.iZ(b)))
return a},
ar:function(a,b){return new H.hu("TypeError: "+P.cP(a)+": type '"+H.ks(a)+"' is not a subtype of type '"+b+"'")},
l4:function(a,b){return new H.eu("CastError: "+P.cP(a)+": type '"+H.ks(a)+"' is not a subtype of type '"+b+"'")},
ks:function(a){var u,t=J.Q(a)
if(!!t.$ibS){u=H.kx(t)
if(u!=null)return H.iZ(u)
return"Closure"}return H.bv(a)},
lV:function(a){throw H.f(new H.i1(a))},
mq:function(a){throw H.f(new P.eB(H.z(a)))},
lx:function(a){return new H.fU(a)},
ky:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bj:function(a){if(a==null)return
return a.$ti},
n5:function(a,b,c){return H.bH(a["$a"+H.i(c)],H.bj(b))},
cy:function(a,b,c,d){var u
H.z(c)
H.a_(d)
u=H.bH(a["$a"+H.i(c)],H.bj(b))
return u==null?null:u[d]},
a9:function(a,b,c){var u
H.z(b)
H.a_(c)
u=H.bH(a["$a"+H.i(b)],H.bj(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a_(b)
u=H.bj(a)
return u==null?null:u[b]},
iZ:function(a){return H.bg(a,null)},
bg:function(a,b){var u,t
H.q(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bI(a[0].name)+H.jl(a,1,b)
if(typeof a=="function")return H.bI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.i(b[t])}if('func' in a)return H.lO(a,b)
if('futureOr' in a)return"FutureOr<"+H.bg("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lO:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.q(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.k(a0,n)
p=C.c.P(p,a0[n])
m=u[q]
if(m!=null&&m!==P.F)p+=" extends "+H.bg(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bg(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bg(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bg(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.m2(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.z(b[h])
j=j+i+H.bg(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jl:function(a,b,c){var u,t,s,r,q,p
H.q(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.by("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bg(p,c)}return"<"+u.i(0)+">"},
bH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jn:function(a,b,c,d){var u,t
H.z(b)
H.jv(c)
H.z(d)
if(a==null)return!1
u=H.bj(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.kv(H.bH(t[d],u),null,c,null)},
q:function(a,b,c,d){H.z(b)
H.jv(c)
H.z(d)
if(a==null)return a
if(H.jn(a,b,c,d))return a
throw H.f(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bI(b.substring(2))+H.jl(c,0,null),v.mangledGlobalNames)))},
kv:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.am(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.am(a[t],b,c[t],d))return!1
return!0},
n2:function(a,b,c){return a.apply(b,H.bH(J.Q(b)["$a"+H.i(c)],H.bj(b)))},
kA:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="E"||a===-1||a===-2||H.kA(u)}return!1},
jo:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="E"||b===-1||b===-2||H.kA(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jo(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ej(a,b)}u=J.Q(a).constructor
t=H.bj(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.am(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jo(a,b))throw H.f(H.ar(a,H.iZ(b)))
return a},
am:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.ko(a,b,c,d)
if('func' in a)return c.name==="b7"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.am("type" in a?a.type:l,b,s,d)
else if(H.am(a,b,s,d))return!0
else{if(!('$i'+"bZ" in t.prototype))return!1
r=t.prototype["$a"+"bZ"]
q=H.bH(r,u?a.slice(1):l)
return H.am(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kv(H.bH(m,u),b,p,d)},
ko:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.am(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.am(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.am(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mh(h,b,g,d)},
mh:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.am(c[s],d,a[s],b))return!1}return!0},
n3:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
mf:function(a){var u,t,s,r,q=H.z($.kz.$1(a)),p=$.iP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.z($.ku.$2(a,q))
if(q!=null){p=$.iP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iY(u)
$.iP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iW[q]=u
return u}if(s==="-"){r=H.iY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kC(a,u)
if(s==="*")throw H.f(P.kb(q))
if(v.leafTags[q]===true){r=H.iY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kC(a,u)},
kC:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iY:function(a){return J.jw(a,!1,null,!!a.$iA)},
mg:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iY(u)
else return J.jw(u,c,null,null)},
ma:function(){if(!0===$.ju)return
$.ju=!0
H.mb()},
mb:function(){var u,t,s,r,q,p,o,n
$.iP=Object.create(null)
$.iW=Object.create(null)
H.m9()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kE.$1(q)
if(p!=null){o=H.mg(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m9:function(){var u,t,s,r,q,p,o=C.v()
o=H.bD(C.w,H.bD(C.x,H.bD(C.o,H.bD(C.o,H.bD(C.y,H.bD(C.z,H.bD(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kz=new H.iT(r)
$.ku=new H.iU(q)
$.kE=new H.iV(p)},
bD:function(a,b){return a(b)||b},
li:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.eZ("Illegal RegExp pattern ("+String(r)+")",a))},
mn:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m1:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kF:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jy:function(a,b,c){var u=H.mo(a,b,c)
return u},
mo:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kF(b),'g'),H.m1(c))},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fF:function fF(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a){this.a=a},
j1:function j1(a){this.a=a},
dY:function dY(a){this.a=a
this.b=null},
bS:function bS(){},
hh:function hh(){},
h7:function h7(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a){this.a=a},
eu:function eu(a){this.a=a},
fU:function fU(a){this.a=a},
i1:function i1(a){this.a=a},
aB:function aB(a){var _=this
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
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jh:function(a){return a},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cx(b,a))},
lN:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m0(a,b,c))
return b},
c5:function c5(){},
d_:function d_(){},
c4:function c4(){},
d0:function d0(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
d1:function d1(){},
fB:function fB(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
m2:function(a){return J.jO(a?Object.keys(a):[],null)},
mj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iS:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ju==null){H.ma()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kb("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jA()]
if(r!=null)return r
r=H.mf(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jA(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lh:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j3(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aF(a,0,4294967295,"length",null))
return J.jO(new Array(a),b)},
jO:function(a,b){return J.j7(H.c(a,[b]))},
j7:function(a){H.jv(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cT.prototype
return J.f8.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.f9.prototype
if(typeof a=="boolean")return J.f7.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.F)return a
return J.iS(a)},
jr:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.F)return a
return J.iS(a)},
iR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.F)return a
return J.iS(a)},
m4:function(a){if(typeof a=="number")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bd.prototype
return a},
m5:function(a){if(typeof a=="number")return J.br.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bd.prototype
return a},
js:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bd.prototype
return a},
jt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.F)return a
return J.iS(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
jC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m5(a).J(a,b)},
kY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.m4(a).q(a,b)},
kZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.md(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jr(a).m(a,b)},
l_:function(a,b,c,d){return J.jt(a).el(a,b,c,d)},
j2:function(a,b){return J.iR(a).u(a,b)},
l0:function(a,b){return J.iR(a).E(a,b)},
l1:function(a){return J.jt(a).geq(a)},
cB:function(a){return J.Q(a).gC(a)},
bl:function(a){return J.iR(a).gG(a)},
bm:function(a){return J.jr(a).gk(a)},
jD:function(a){return J.iR(a).f4(a)},
l2:function(a,b,c){return J.js(a).ar(a,b,c)},
l3:function(a){return J.js(a).fe(a)},
as:function(a){return J.Q(a).i(a)},
a:function a(){},
f7:function f7(){},
f9:function f9(){},
cU:function cU(){},
fJ:function fJ(){},
bd:function bd(){},
b9:function b9(){},
aA:function aA(a){this.$ti=a},
j8:function j8(a){this.$ti=a},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
br:function br(){},
cT:function cT(){},
f8:function f8(){},
b8:function b8(){}},P={
lD:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lW()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bE(new P.i3(s),1)).observe(u,{childList:true})
return new P.i2(s,u,t)}else if(self.setImmediate!=null)return P.lX()
return P.lY()},
lE:function(a){self.scheduleImmediate(H.bE(new P.i4(H.j(a,{func:1,ret:-1})),0))},
lF:function(a){self.setImmediate(H.bE(new P.i5(H.j(a,{func:1,ret:-1})),0))},
lG:function(a){P.jd(C.i,H.j(a,{func:1,ret:-1}))},
jd:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.e.ad(a.a,1000)
return P.lL(u<0?0:u,b)},
k9:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aK]})
u=C.e.ad(a.a,1000)
return P.lM(u<0?0:u,b)},
lL:function(a,b){var u=new P.e3()
u.cP(a,b)
return u},
lM:function(a,b){var u=new P.e3()
u.cQ(a,b)
return u},
lH:function(a,b){var u,t,s
b.a=1
try{a.cf(new P.ie(b),new P.ig(b),null)}catch(s){u=H.ad(s)
t=H.bF(s)
P.ml(new P.ih(b,u,t))}},
kj:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$ial")
if(u>=4){t=b.aW()
b.a=a.a
b.c=a.c
P.cm(b,t)}else{t=H.n(b.c,"$iaP")
b.a=2
b.c=a
a.bE(t)}},
cm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia0")
g=g.b
r=s.a
q=s.b
g.toString
P.iK(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cm(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.n(o,"$ia0")
g=g.b
r=o.a
q=o.b
g.toString
P.iK(i,i,g,r,q)
return}l=$.O
if(l!=n)$.O=n
else l=i
g=b.c
if(g===8)new P.il(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ik(u,b,o).$0()}else if((g&2)!==0)new P.ij(h,u,b).$0()
if(l!=null)$.O=l
g=u.b
if(!!J.Q(g).$ibZ){if(g.a>=4){k=H.n(q.c,"$iaP")
q.c=null
b=q.av(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kj(g,q)
return}}j=b.b
k=H.n(j.c,"$iaP")
j.c=null
b=j.av(k)
g=u.a
r=u.b
if(!g){H.B(r,H.u(j,0))
j.a=4
j.c=r}else{H.n(r,"$ia0")
j.a=8
j.c=r}h.a=j
g=j}},
lR:function(a,b){if(H.ej(a,{func:1,args:[P.F,P.a7]}))return H.j(a,{func:1,ret:null,args:[P.F,P.a7]})
if(H.ej(a,{func:1,args:[P.F]}))return H.j(a,{func:1,ret:null,args:[P.F]})
throw H.f(P.j3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lQ:function(){var u,t
for(;u=$.bC,u!=null;){$.cw=null
t=u.b
$.bC=t
if(t==null)$.cv=null
u.a.$0()}},
lU:function(){$.jj=!0
try{P.lQ()}finally{$.cw=null
$.jj=!1
if($.bC!=null)$.jB().$1(P.kw())}},
kr:function(a){var u=new P.dp(H.j(a,{func:1,ret:-1}))
if($.bC==null){$.bC=$.cv=u
if(!$.jj)$.jB().$1(P.kw())}else $.cv=$.cv.b=u},
lT:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bC
if(u==null){P.kr(a)
$.cw=$.cv
return}t=new P.dp(a)
s=$.cw
if(s==null){t.b=u
$.bC=$.cw=t}else{t.b=s.b
$.cw=s.b=t
if(t.b==null)$.cv=t}},
ml:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.O
if(C.d===u){P.iM(t,t,C.d,a)
return}u.toString
P.iM(t,t,u,H.j(u.b_(a),s))},
k8:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.O
if(u===C.d){u.toString
return P.jd(a,b)}return P.jd(a,H.j(u.b_(b),t))},
lB:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aK]}
H.j(b,s)
u=$.O
if(u===C.d){u.toString
return P.k9(a,b)}t=u.bN(b,P.aK)
$.O.toString
return P.k9(a,H.j(t,s))},
iK:function(a,b,c,d,e){var u={}
u.a=d
P.lT(new P.iL(u,e))},
kp:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
kq:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
lS:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
iM:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.b_(d):c.er(d,-1)
P.kr(d)},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
e3:function e3(){this.c=0},
iG:function iG(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
al:function al(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
id:function id(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a){this.a=a
this.b=null},
ha:function ha(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
cc:function cc(){},
hb:function hb(){},
aK:function aK(){},
a0:function a0(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iL:function iL(a,b){this.a=a
this.b=b},
is:function is(){},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function(a,b){return new H.aB([a,b])},
lj:function(a){return H.m3(a,new H.aB([null,null]))},
cX:function(a){return new P.iq([a])},
jg:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lK:function(a,b,c){var u=new P.dF(a,b,[c])
u.c=a.e
return u},
lf:function(a,b,c){var u,t
if(P.jk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.a8,a)
try{P.lP(a,u)}finally{if(0>=$.a8.length)return H.k($.a8,-1)
$.a8.pop()}t=P.k6(b,H.me(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
j6:function(a,b,c){var u,t
if(P.jk(a))return b+"..."+c
u=new P.by(b)
C.a.h($.a8,a)
try{t=u
t.a=P.k6(t.a,a,", ")}finally{if(0>=$.a8.length)return H.k($.a8,-1)
$.a8.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jk:function(a){var u,t
for(u=$.a8.length,t=0;t<u;++t)if(a===$.a8[t])return!0
return!1},
lP:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.q(b,"$ib",[P.e],"$ab")
u=a.gG(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.p())return
r=H.i(u.gw(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.p()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gw(u);++s
if(!u.p()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gw(u);++s
for(;u.p();o=n,n=m){m=u.gw(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jQ:function(a,b){var u,t,s=P.cX(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.I)(a),++t)s.h(0,H.B(a[t],b))
return s},
jS:function(a){var u,t={}
if(P.jk(a))return"{...}"
u=new P.by("")
try{C.a.h($.a8,a)
u.a+="{"
t.a=!0
J.l0(a,new P.fk(t,u))
u.a+="}"}finally{if(0>=$.a8.length)return H.k($.a8,-1)
$.a8.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function iq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bB:function bB(a){this.a=a
this.c=this.b=null},
dF:function dF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fh:function fh(){},
t:function t(){},
fj:function fj(){},
fk:function fk(a,b){this.a=a
this.b=b},
W:function W(){},
ix:function ix(){},
dG:function dG(){},
bT:function bT(){},
bU:function bU(){},
eN:function eN(){},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f3:function f3(a){this.a=a},
hM:function hM(){},
hN:function hN(){},
iH:function iH(a){this.b=0
this.c=a},
ld:function(a){if(a instanceof H.bS)return a.i(0)
return"Instance of '"+H.bv(a)+"'"},
lk:function(a,b,c){var u,t
H.B(b,c)
u=J.lh(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.I(u,t,b)
return H.q(u,"$ib",[c],"$ab")},
jR:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bl(a);u.p();)C.a.h(s,H.B(u.gw(u),c))
if(b)return s
return H.q(J.j7(s),"$ib",t,"$ab")},
jc:function(a){var u,t,s=P.y
H.q(a,"$ih",[s],"$ah")
if(a.constructor===Array){H.q(a,"$iaA",[s],"$aaA")
u=a.length
t=P.k2(0,null,u)
return H.k0(t<u?C.a.cw(a,0,t):a)}return P.lz(a,0,null)},
lz:function(a,b,c){var u,t,s
H.q(a,"$ih",[P.y],"$ah")
u=J.bl(a)
for(t=0;t<b;++t)if(!u.p())throw H.f(P.aF(b,0,t,null,null))
s=[]
for(;u.p();)s.push(u.gw(u))
return H.k0(s)},
lu:function(a){return new H.fa(a,H.li(a,!1,!0,!1))},
k6:function(a,b,c){var u=J.bl(b)
if(!u.p())return a
if(c.length===0){do a+=H.i(u.gw(u))
while(u.p())}else{a+=H.i(u.gw(u))
for(;u.p();)a=a+c+H.i(u.gw(u))}return a},
kn:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.q(a,"$ib",[P.y],"$ab")
if(c===C.h){u=$.kX().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.ev(H.B(b,H.a9(c,"bT",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jb(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l9:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
la:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cL:function(a){if(a>=10)return""+a
return"0"+a},
jL:function(a,b){return new P.aR(1e6*b+1000*a)},
cP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ld(a)},
j3:function(a,b,c){return new P.at(!0,a,b,c)},
d7:function(a,b){return new P.bw(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
k2:function(a,b,c){if(0>a||a>c)throw H.f(P.aF(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aF(b,a,c,"end",null))
return b}return c},
k1:function(a,b){if(typeof a!=="number")return a.bb()
if(a<0)throw H.f(P.aF(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=H.a_(e==null?J.bm(b):e)
return new P.f5(u,!0,a,c,"Index out of range")},
ai:function(a){return new P.hK(a)},
kb:function(a){return new P.hI(a)},
k5:function(a){return new P.cb(a)},
b4:function(a){return new P.ew(a)},
a3:function(a){return new P.dx(a)},
jx:function(a){H.mj(a)},
L:function L(){},
b5:function b5(a,b){this.a=a
this.b=b},
w:function w(){},
aR:function aR(a){this.a=a},
eJ:function eJ(){},
eK:function eK(){},
b6:function b6(){},
em:function em(){},
d3:function d3(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f5:function f5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hK:function hK(a){this.a=a},
hI:function hI(a){this.a=a},
cb:function cb(a){this.a=a},
ew:function ew(a){this.a=a},
fI:function fI(){},
dc:function dc(){},
eB:function eB(a){this.a=a},
dx:function dx(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
b7:function b7(){},
y:function y(){},
h:function h(){},
az:function az(){},
b:function b(){},
G:function G(){},
E:function E(){},
Z:function Z(){},
F:function F(){},
a7:function a7(){},
e:function e(){},
by:function by(a){this.a=a},
aY:function(a){var u,t,s,r,q
if(a==null)return
u=P.jP(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r){q=H.z(t[r])
u.I(0,q,a[q])}return u},
lZ:function(a){var u={}
a.E(0,new P.iN(u))
return u},
iN:function iN(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=b},
eW:function eW(){},
eX:function eX(){},
ir:function ir(){},
ah:function ah(){},
aU:function aU(){},
fd:function fd(){},
aW:function aW(){},
fG:function fG(){},
fM:function fM(){},
c8:function c8(){},
he:function he(){},
m:function m(){},
aX:function aX(){},
hr:function hr(){},
dD:function dD(){},
dE:function dE(){},
dO:function dO(){},
dP:function dP(){},
e_:function e_(){},
e0:function e0(){},
e6:function e6(){},
e7:function e7(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(a){this.a=a},
er:function er(){},
bn:function bn(){},
fH:function fH(){},
dq:function dq(){},
cF:function cF(){},
d6:function d6(){},
bx:function bx(){},
da:function da(){},
di:function di(){},
h6:function h6(){},
dW:function dW(){},
dX:function dX(){}},W={
jE:function(){var u=document.createElement("a")
return u},
jH:function(){var u=document.createElement("canvas")
return u},
lb:function(a,b,c){var u=document.body,t=(u&&C.m).T(u,a,b,c)
t.toString
u=W.x
u=new H.cj(new W.a2(t),H.j(new W.eM(),{func:1,ret:P.L,args:[u]}),[u])
return H.n(u.ga7(u),"$iJ")},
lc:function(a){H.n(a,"$id")
return"wheel"},
bX:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jt(a)
t=u.gcd(a)
if(typeof t==="string")r=u.gcd(a)}catch(s){H.ad(s)}return r},
ip:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kl:function(a,b,c,d){var u=W.ip(W.ip(W.ip(W.ip(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d,e){var u=W.kt(new W.ic(c),W.l)
if(u!=null&&!0)J.l_(a,b,u,!1)
return new W.ib(a,b,u,!1,[e])},
kk:function(a){var u=W.jE(),t=window.location
u=new W.be(new W.iw(u,t))
u.cL(a)
return u},
lI:function(a,b,c,d){H.n(a,"$iJ")
H.z(b)
H.z(c)
H.n(d,"$ibe")
return!0},
lJ:function(a,b,c,d){var u,t,s
H.n(a,"$iJ")
H.z(b)
H.z(c)
u=H.n(d,"$ibe").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
km:function(){var u=P.e,t=P.jQ(C.j,u),s=H.u(C.j,0),r=H.j(new W.iE(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.iD(t,P.cX(u),P.cX(u),P.cX(u),null)
t.cO(null,new H.fn(C.j,r,[s,u]),q,null)
return t},
kt:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.O
if(u===C.d)return a
return u.bN(a,b)},
p:function p(){},
ek:function ek(){},
cC:function cC(){},
el:function el(){},
bP:function bP(){},
cE:function cE(){},
b_:function b_(){},
bo:function bo(){},
b0:function b0(){},
bV:function bV(){},
ex:function ex(){},
K:function K(){},
bW:function bW(){},
ey:function ey(){},
av:function av(){},
aw:function aw(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
af:function af(){},
eG:function eG(){},
cM:function cM(){},
cN:function cN(){},
eH:function eH(){},
eI:function eI(){},
i7:function i7(a,b){this.a=a
this.b=b},
J:function J(){},
eM:function eM(){},
l:function l(){},
d:function d(){},
ax:function ax(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
ay:function ay(){},
f2:function f2(){},
bq:function bq(){},
aC:function aC(){},
cY:function cY(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(a){this.a=a},
fs:function fs(){},
ft:function ft(a){this.a=a},
aD:function aD(){},
fu:function fu(){},
X:function X(){},
a2:function a2(a){this.a=a},
x:function x(){},
c6:function c6(){},
aE:function aE(){},
fL:function fL(){},
fS:function fS(){},
fT:function fT(a){this.a=a},
fV:function fV(){},
aG:function aG(){},
h4:function h4(){},
aH:function aH(){},
h5:function h5(){},
aI:function aI(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ao:function ao(){},
bz:function bz(){},
dd:function dd(){},
hf:function hf(){},
hg:function hg(){},
cd:function cd(){},
aJ:function aJ(){},
ap:function ap(){},
hi:function hi(){},
hj:function hj(){},
hl:function hl(){},
aL:function aL(){},
aq:function aq(){},
hp:function hp(){},
hq:function hq(){},
bc:function bc(){},
hL:function hL(){},
hZ:function hZ(){},
aO:function aO(){},
ck:function ck(){},
cl:function cl(){},
i8:function i8(){},
ds:function ds(){},
io:function io(){},
dL:function dL(){},
iA:function iA(){},
iB:function iB(){},
i6:function i6(){},
i9:function i9(a){this.a=a},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ib:function ib(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ic:function ic(a){this.a=a},
be:function be(a){this.a=a},
v:function v(){},
d2:function d2(a){this.a=a},
fD:function fD(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
iy:function iy(){},
iz:function iz(){},
iD:function iD(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iE:function iE(){},
iC:function iC(){},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ab:function ab(){},
iw:function iw(a,b){this.a=a
this.b=b},
e8:function e8(a){this.a=a},
iI:function iI(a){this.a=a},
dr:function dr(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dy:function dy(){},
dz:function dz(){},
dB:function dB(){},
dC:function dC(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
cr:function cr(){},
cs:function cs(){},
dU:function dU(){},
dV:function dV(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
ct:function ct(){},
cu:function cu(){},
e4:function e4(){},
e5:function e5(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},O={
jJ:function(a){var u=new O.U([a])
u.bg(a)
return u},
U:function U(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c2:function c2(){this.b=this.a=null},
eE:function eE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(){}},E={
aT:function(a,b){var u,t,s,r,q=new E.a1()
q.a=""
q.b=!0
q.scK(0,O.jJ(E.a1))
q.y.aF(q.geQ(),q.geT())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
u=q.c
if(u!=b){q.d=q.c=b
q.e=null
if(u!=null)u.gt().H(0,q.gc2())
t=q.c
if(t!=null)t.gt().h(0,q.gc2())
s=new D.R("shape",u,q.c,[F.db])
s.b=!0
q.a4(s)}if(!J.T(q.r,a)){r=q.r
if(r!=null)r.gt().H(0,q.gc0())
a.gt().h(0,q.gc0())
q.r=a
s=new D.R("mover",r,a,[U.a4])
s.b=!0
q.a4(s)}return q},
lw:function(a,b){var u=new E.fO(a)
u.cF(a,b)
return u},
lA:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibo)return E.k7(a,!0,!0,!0,!1)
u=W.jH()
t=u.style
t.width="100%"
t.height="100%"
s.gbO(a).h(0,u)
return E.k7(u,!0,!0,!0,!1)},
k7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.df(),j=H.n(C.D.cr(a,"webgl2",P.lj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibx")
if(j==null)H.ac(P.a3("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lw(j,a)
H.a_(j.getParameter(3379))
H.a_(j.getParameter(34076))
u=new X.dl(a)
t=new X.fc()
t.sdX(P.cX(P.y))
u.b=t
t=new X.fv(u)
t.f=0
t.r=V.d5()
t.x=V.d5()
t.ch=t.Q=1
u.c=t
t=new X.fi(u)
t.r=0
t.x=V.d5()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ho(u)
t.f=V.d5()
t.r=V.d5()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sd2(H.c([],[[P.cc,P.F]]))
t=u.z
s=document
r=W.X
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.Y(s,"contextmenu",H.j(u.gdn(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.Y(a,"focus",H.j(u.gdv(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.Y(a,"blur",H.j(u.gdh(),o),!1,p))
t=u.z
n=W.aC
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.Y(s,"keyup",H.j(u.gdB(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.Y(s,"keydown",H.j(u.gdz(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.Y(a,"mousedown",H.j(u.gdE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,"mouseup",H.j(u.gdI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,l,H.j(u.gdG(),q),!1,r))
n=u.z
m=W.aO;(n&&C.a).h(n,W.Y(a,H.z(W.lc(a)),H.j(u.gdK(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.Y(s,l,H.j(u.gdr(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.Y(s,"mouseup",H.j(u.gdt(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.Y(s,"pointerlockchange",H.j(u.gdM(),o),!1,p))
p=u.z
o=W.aq
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.Y(a,"touchstart",H.j(u.gdV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchend",H.j(u.gdR(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchmove",H.j(u.gdT(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.b5(Date.now(),!1)
k.cy=0
k.bF()
return k},
es:function es(){},
a1:function a1(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
df:function df(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hk:function hk(a){this.a=a}},Z={
lC:function(a,b,c){var u
H.q(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.jh(c)),35044)
a.bindBuffer(b,null)
return new Z.dn(b,u)},
ak:function(a){return new Z.dm(a)},
dn:function dn(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i_:function i_(a){this.a=a},
cH:function cH(a,b){this.a=a
this.b=null
this.c=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(a){this.a=a}},D={
an:function(){var u=new D.bY()
u.sa1(null)
u.saj(null)
u.c=null
u.d=0
return u},
ev:function ev(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
C:function C(){this.b=null},
cR:function cR(a){this.b=null
this.$ti=a},
cS:function cS(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={cI:function cI(a,b){this.a=a
this.b=b},cV:function cV(a,b){this.a=a
this.b=b},fc:function fc(){this.d=this.b=this.a=null},fi:function fi(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},fv:function fv(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ho:function ho(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
le:function(a){var u=new X.f_(),t=V.bi(1)
u.a=new V.b3(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k3
if(t==null){t=V.lv(0,0,1,1)
$.k3=t}u.r=t
return u},
cJ:function cJ(){},
f_:function f_(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){}},V={
bi:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jz:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.ct(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.c.a5("null",c)
return C.c.a5(C.b.ci(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
iQ:function(a,b,c){var u,t,s,r,q
H.q(a,"$ib",[P.w],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.k(u,q)
C.a.I(u,q,C.c.a5(u[q],t))}return u},
fo:function(){var u=$.jT
return u==null?$.jT=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d5:function(){var u=$.jY
return u==null?$.jY=new V.a6(0,0):u},
lv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d8(a,b,c,d)},
hO:function(){var u=$.kh
return u==null?$.kh=new V.S(0,0,0):u},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a){this.a=a},
bb:function bb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.a3("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aa(a,0)
t=C.c.aa(b,0)
s=new V.fN()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fW()
u.cG(a)
return u},
hn:function(){var u=new V.hm(),t=P.e
u.sef(new H.aB([t,V.ca]))
u.seh(new H.aB([t,V.ce]))
u.c=null
return u},
aQ:function aQ(){},
aa:function aa(){},
cZ:function cZ(){},
a5:function a5(){this.a=null},
fN:function fN(){this.b=this.a=null},
fW:function fW(){this.a=null},
ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a){this.b=a
this.c=null},
hm:function hm(){this.c=this.b=this.a=null},
cf:function cf(a){this.b=a
this.a=this.c=null},
mm:function(a){P.lB(C.F,new V.j_(a))},
ly:function(a){var u=new V.h_()
u.cI(a,!0)
return u},
b1:function b1(){},
j_:function j_(a){this.a=a},
eC:function eC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f0:function f0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f1:function f1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fK:function fK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h_:function h_(){this.b=this.a=null},
h1:function h1(a){this.a=a},
h0:function h0(a){this.a=a},
h2:function h2(a){this.a=a}},U={
jK:function(a){var u=new U.cK()
u.a=a
return u},
cK:function cK(){this.b=this.a=null},
c_:function c_(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
d9:function d9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cO:function cO(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
je:function(a,b,c,d,e){var u=new A.hx(a,c,e)
u.f=d
u.sej(P.lk(d,0,P.y))
return u},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a},
eF:function eF(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c9:function c9(){},
dh:function dh(){},
hD:function hD(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mr:function(a,b){return F.m_(15,30,b,a,new F.j0())},
m_:function(a,b,c,d,e){var u,t=F.mp(a,b,new F.iO(H.j(e,{func:1,ret:V.ag,args:[P.w]}),d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.b1()
t.a.b1()
u=t.e
if(u!=null)u.aq(0)
t.eP(new F.hU(),new F.fE())
return t},
mp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.aj,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.db()
t=new F.hP(u)
t.b=!1
s=[F.aj]
t.sek(H.c([],s))
u.a=t
t=new F.fZ()
t.saU(H.c([],[F.bt]))
u.b=t
t=new F.fY(u)
t.sd9(H.c([],[F.ba]))
u.c=t
t=new F.fX(u)
t.sd3(H.c([],[F.V]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bK(new V.b3(s,0,0,1),new V.a6(p,1))
c.$3(o,p,0)
C.a.h(r,o.bR(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bK(new V.b3(j,i,h,1),new V.a6(p,m))
c.$3(o,p,n)
C.a.h(r,o.bR(null))}}u.d.em(a+1,b+1,r)
return u},
eR:function(a,b,c){var u=new F.V(),t=a.a
if(t==null)H.ac(P.a3("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.ac(P.a3("May not create a face with vertices attached to different shapes."))
u.e7(a)
u.e8(b)
u.e9(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
ki:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.hX()
r.saU(H.c([],[F.bt]))
s.b=r
r=new F.hT()
u=[F.ba]
r.sda(H.c([],u))
r.sdc(H.c([],u))
s.c=r
r=new F.hQ()
u=[F.V]
r.sd4(H.c([],u))
r.sd5(H.c([],u))
r.sd6(H.c([],u))
s.d=r
h=$.kT()
s.e=0
r=$.aZ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bL().a)!==0?e:t
s.x=(u&$.bK().a)!==0?b:t
s.y=(u&$.bM().a)!==0?f:t
s.z=(u&$.bN().a)!==0?g:t
s.Q=(u&$.kU().a)!==0?c:t
s.ch=(u&$.bO().a)!==0?i:0
s.cx=(u&$.bJ().a)!==0?a:t
return s},
j0:function j0(){},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eS:function eS(){},
h3:function h3(){},
ba:function ba(){},
fe:function fe(){},
hv:function hv(){},
bt:function bt(){},
db:function db(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a
this.b=null},
fY:function fY(a){this.a=a
this.b=null},
fZ:function fZ(){this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a},
hP:function hP(a){this.a=a
this.c=this.b=null},
hQ:function hQ(){this.d=this.c=this.b=null},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){this.c=this.b=null},
hV:function hV(){},
hU:function hU(){},
hW:function hW(){},
fE:function fE(){},
hX:function hX(){this.b=null}},R={
kB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=V.ly("Test 004"),a5=W.jH()
a5.className="pageLargeCanvas"
a5.id=a2
a4.a.appendChild(a5)
u=[P.e]
a4.bL(H.c(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],u))
a4.bL(H.c(["\xab[Back to Tests|../]"],u))
t=new U.d9()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sco(0)
t.sc5(0,0)
t.scb(0)
t.sbU(0.1)
t.sbS(0.21)
t.sbT(0.32)
t.sbU(0.51)
t.sbS(0.71)
t.sbT(0.92)
s=new U.c_()
s.bg(U.a4)
s.aF(s.gdf(),s.gdP())
s.e=null
s.f=V.fo()
s.r=0
s.h(0,U.jK(V.aV(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
s.h(0,t)
r=F.mr(2,0.2)
q=E.aT(s,r)
p=E.aT(s,r)
p.y.h(0,q)
o=E.aT(s,r)
o.y.h(0,p)
n=E.aT(s,r)
n.y.h(0,o)
m=E.aT(s,r)
m.y.h(0,n)
l=E.aT(s,r)
l.y.h(0,m)
k=E.aT(s,r)
k.y.h(0,l)
j=E.aT(s,r)
j.y.h(0,k)
i=E.aT(s,r)
i.y.h(0,j)
h=new O.eE()
h.d=1
h.e=10
g=new V.b2(1,1,1)
h.b=g
u=[V.b2]
f=new D.R("objectColor",a3,g,u)
f.b=!0
h.au(f)
g=new V.b2(0,0,0)
if(!J.T(h.c,g)){e=h.c
h.c=g
u=new D.R("fogColor",e,g,u)
u.b=!0
h.au(u)}u=h.d
if(!(Math.abs(u-3)<$.P().a)){h.d=3
u=new D.R("fogStart",u,3,[P.w])
u.b=!0
h.au(u)}u=h.e
if(!(Math.abs(u-6)<$.P().a)){h.e=6
u=new D.R("fogStop",u,6,[P.w])
u.b=!0
h.au(u)}d=new M.cO()
d.scW(0,O.jJ(E.a1))
d.d.aF(d.gdj(),d.gdl())
d.x=d.r=d.f=d.e=null
c=X.le(a3)
b=new X.d4()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.sbY(a3)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.P().a)){b.c=1.0471975511965976
u=new D.R("fov",u,1.0471975511965976,[P.w])
u.b=!0
b.a9(u)}u=b.d
if(!(Math.abs(u-0.1)<$.P().a)){b.d=0.1
u=new D.R("near",u,0.1,[P.w])
u.b=!0
b.a9(u)}u=b.e
if(!(Math.abs(u-2000)<$.P().a)){b.e=2000
u=new D.R("far",u,2000,[P.w])
u.b=!0
b.a9(u)}u=d.a
if(u!==b){if(u!=null)u.gt().H(0,d.gX())
e=d.a
d.a=b
b.gt().h(0,d.gX())
u=new D.R("camera",e,d.a,[X.cJ])
u.b=!0
d.a_(u)}u=d.b
if(u!==c){if(u!=null)u.gt().H(0,d.gX())
e=d.b
d.b=c
c.gt().h(0,d.gX())
u=new D.R("target",e,d.b,[X.de])
u.b=!0
d.a_(u)}d.sce(a3)
d.sce(h)
d.d.h(0,i)
d.a.sbY(U.jK(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=document.getElementById(a2)
if(a==null)H.ac(P.a3("Failed to find an element with the identifier, testCanvas."))
a0=E.lA(a,!0,!0,!0,!1)
u=a0.d
if(u!==d){if(u!=null)u.gt().H(0,a0.gbh())
a0.d=d
d.gt().h(0,a0.gbh())
a0.bi()}u=a0.z
if(u==null)u=a0.z=D.an()
f={func:1,ret:-1,args:[D.C]}
a1=H.j(new R.iX(a4,h),f)
if(u.b==null)u.saj(H.c([],[f]))
u=u.b;(u&&C.a).h(u,a1)
V.mm(a0)},
iX:function iX(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j9.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.c7(a)},
i:function(a){return"Instance of '"+H.bv(a)+"'"}}
J.f7.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iL:1}
J.f9.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0}}
J.cU.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.fJ.prototype={}
J.bd.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.kI()]
if(u==null)return this.cB(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib7:1}
J.aA.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.ac(P.ai("add"))
a.push(b)},
c9:function(a,b){if(!!a.fixed$length)H.ac(P.ai("removeAt"))
if(b<0||b>=a.length)throw H.f(P.d7(b,null))
return a.splice(b,1)[0]},
H:function(a,b){var u
if(!!a.fixed$length)H.ac(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b4(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.I(t,u,H.i(a[u]))
return t.join(b)},
eL:function(a){return this.l(a,"")},
eF:function(a,b){var u,t,s
H.j(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.f(P.b4(a))}throw H.f(H.f6())},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
cw:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aF(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aF(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
geE:function(a){if(a.length>0)return a[0]
throw H.f(H.f6())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.f6())},
bM:function(a,b){var u,t
H.j(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.b4(a))}return!1},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.j6(a,"[","]")},
gG:function(a){return new J.ae(a,a.length,[H.u(a,0)])},
gC:function(a){return H.c7(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.ac(P.ai("set length"))
if(b<0)throw H.f(P.aF(b,0,null,"newLength",null))
a.length=b},
I:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.ac(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cx(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.j8.prototype={}
J.ae.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.I(s))
u=t.c
if(u>=r){t.sbm(null)
return!1}t.sbm(s[u]);++t.c
return!0},
sbm:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
J.br.prototype={
bW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ai(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ai(""+a+".round()"))},
ci:function(a,b){var u,t
if(b>20)throw H.f(P.aF(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a-b},
J:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a*b},
ct:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bG(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.bG(a,b)},
bG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ai("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aw:function(a,b){var u
if(a>0)u=this.ee(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ee:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iZ:1}
J.cT.prototype={$iy:1}
J.f8.prototype={}
J.b8.prototype={
b2:function(a,b){if(b<0)throw H.f(H.cx(a,b))
if(b>=a.length)H.ac(H.cx(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.f(H.cx(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.f(P.j3(b,null,null))
return a+b},
aG:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.d7(b,null))
if(b>c)throw H.f(P.d7(b,null))
if(c>a.length)throw H.f(P.d7(c,null))
return a.substring(b,c)},
aH:function(a,b){return this.ar(a,b,null)},
fe:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a5:function(a,b){var u=b-a.length
if(u<=0)return a
return this.J(" ",u)+a},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijW:1,
$ie:1}
H.o.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.c.b2(this.a,b)},
$adk:function(){return[P.y]},
$at:function(){return[P.y]},
$ah:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eL.prototype={}
H.bs.prototype={
gG:function(a){var u=this
return new H.c1(u,u.gk(u),[H.a9(u,"bs",0)])},
aD:function(a,b){return this.cA(0,H.j(b,{func:1,ret:P.L,args:[H.a9(this,"bs",0)]}))}}
H.c1.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.jr(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.b4(s))
u=t.c
if(u>=q){t.sai(null)
return!1}t.sai(r.u(s,u));++t.c
return!0},
sai:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
H.fl.prototype={
gG:function(a){return new H.fm(J.bl(this.a),this.b,this.$ti)},
gk:function(a){return J.bm(this.a)},
u:function(a,b){return this.b.$1(J.j2(this.a,b))},
$ah:function(a,b){return[b]}}
H.fm.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.sai(u.c.$1(t.gw(t)))
return!0}u.sai(null)
return!1},
gw:function(a){return this.a},
sai:function(a){this.a=H.B(a,H.u(this,1))},
$aaz:function(a,b){return[b]}}
H.fn.prototype={
gk:function(a){return J.bm(this.a)},
u:function(a,b){return this.b.$1(J.j2(this.a,b))},
$abs:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cj.prototype={
gG:function(a){return new H.i0(J.bl(this.a),this.b,this.$ti)}}
H.i0.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(H.D(t.$1(u.gw(u))))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.bp.prototype={}
H.dk.prototype={}
H.dj.prototype={}
H.hs.prototype={
U:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.fF.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fb.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.hJ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j1.prototype={
$1:function(a){if(!!J.Q(a).$ib6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dY.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia7:1}
H.bS.prototype={
i:function(a){return"Closure '"+H.bv(this).trim()+"'"},
$ib7:1,
gfh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hh.prototype={}
H.h7.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bI(u)+"'"}}
H.bQ.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bQ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gC:function(a){var u,t=this.c
if(t==null)u=H.c7(this.a)
else u=typeof t!=="object"?J.cB(t):H.c7(t)
return(u^H.c7(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bv(u)+"'")}}
H.hu.prototype={
i:function(a){return this.a}}
H.eu.prototype={
i:function(a){return this.a}}
H.fU.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.i1.prototype={
i:function(a){return"Assertion failed: "+P.cP(this.a)}}
H.aB.prototype={
gk:function(a){return this.a},
gO:function(a){return new H.cW(this,[H.u(this,0)])},
bQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bw(t,b)}else return s.eI(b)},
eI:function(a){var u=this.d
if(u==null)return!1
return this.b3(this.aN(u,J.cB(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.at(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.at(r,b)
s=t==null?null:t.b
return s}else return q.eJ(b)},
eJ:function(a){var u,t,s=this.d
if(s==null)return
u=this.aN(s,J.cB(a)&0x3ffffff)
t=this.b3(u,a)
if(t<0)return
return u[t].b},
I:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bo(u==null?o.b=o.aS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bo(t==null?o.c=o.aS():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aS()
r=J.cB(b)&0x3ffffff
q=o.aN(s,r)
if(q==null)o.aX(s,r,[o.aT(b,c)])
else{p=o.b3(q,b)
if(p>=0)q[p].b=c
else q.push(o.aT(b,c))}}},
E:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.b4(s))
u=u.c}},
bo:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.at(a,b)
if(u==null)t.aX(a,b,t.aT(b,c))
else u.b=c},
de:function(){this.r=this.r+1&67108863},
aT:function(a,b){var u,t=this,s=new H.ff(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.de()
return s},
b3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jS(this)},
at:function(a,b){return a[b]},
aN:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
d0:function(a,b){delete a[b]},
bw:function(a,b){return this.at(a,b)!=null},
aS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aX(t,u,t)
this.d0(t,u)
return t}}
H.ff.prototype={}
H.cW.prototype={
gk:function(a){return this.a.a},
gG:function(a){var u=this.a,t=new H.fg(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fg.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b4(t))
else{t=u.c
if(t==null){u.sbn(null)
return!1}else{u.sbn(t.a)
u.c=u.c.c
return!0}}},
sbn:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
H.iT.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.iU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.iV.prototype={
$1:function(a){return this.a(H.z(a))},
$S:30}
H.fa.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijW:1}
H.c5.prototype={}
H.d_.prototype={
gk:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c4.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]},
$abp:function(){return[P.w]},
$at:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.d0.prototype={
$abp:function(){return[P.y]},
$at:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fw.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fx.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fy.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fz.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fA.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.d1.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fB.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
P.i3.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.i2.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:28}
P.i4.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i5.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e3.prototype={
cP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bE(new P.iG(this,b),0),a)
else throw H.f(P.ai("`setTimeout()` not found."))},
cQ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bE(new P.iF(this,a,Date.now(),b),0),a)
else throw H.f(P.ai("Periodic timer."))},
$iaK:1}
P.iG.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.iF.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.cE(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.aP.prototype={
eN:function(a){if(this.c!==6)return!0
return this.b.b.ba(H.j(this.d,{func:1,ret:P.L,args:[P.F]}),a.a,P.L,P.F)},
eH:function(a){var u=this.e,t=P.F,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ej(u,{func:1,args:[P.F,P.a7]}))return H.jq(r.f8(u,a.a,a.b,null,t,P.a7),s)
else return H.jq(r.ba(H.j(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.al.prototype={
cf:function(a,b,c){var u,t,s,r=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.O
if(u!==C.d){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lR(b,u)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.al($.O,[c])
s=b==null?1:3
this.bp(new P.aP(t,s,a,b,[r,c]))
return t},
fb:function(a,b){return this.cf(a,null,b)},
bp:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaP")
t.c=a}else{if(s===2){u=H.n(t.c,"$ial")
s=u.a
if(s<4){u.bp(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iM(null,null,s,H.j(new P.id(t,a),{func:1,ret:-1}))}},
bE:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaP")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$ial")
u=q.a
if(u<4){q.bE(a)
return}p.a=u
p.c=q.c}o.a=p.av(a)
u=p.b
u.toString
P.iM(null,null,u,H.j(new P.ii(o,p),{func:1,ret:-1}))}},
aW:function(){var u=H.n(this.c,"$iaP")
this.c=null
return this.av(u)},
av:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bt:function(a){var u,t,s=this,r=H.u(s,0)
H.jq(a,{futureOr:1,type:r})
u=s.$ti
if(H.jn(a,"$ibZ",u,"$abZ"))if(H.jn(a,"$ial",u,null))P.kj(a,s)
else P.lH(a,s)
else{t=s.aW()
H.B(a,r)
s.a=4
s.c=a
P.cm(s,t)}},
bu:function(a,b){var u,t=this
H.n(b,"$ia7")
u=t.aW()
t.a=8
t.c=new P.a0(a,b)
P.cm(t,u)},
$ibZ:1}
P.id.prototype={
$0:function(){P.cm(this.a,this.b)},
$S:0}
P.ii.prototype={
$0:function(){P.cm(this.b,this.a.a)},
$S:0}
P.ie.prototype={
$1:function(a){var u=this.a
u.a=0
u.bt(a)},
$S:14}
P.ig.prototype={
$2:function(a,b){H.n(b,"$ia7")
this.a.bu(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.ih.prototype={
$0:function(){this.a.bu(this.b,this.c)},
$S:0}
P.il.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cc(H.j(s.d,{func:1}),null)}catch(r){u=H.ad(r)
t=H.bF(r)
if(o.d){s=H.n(o.a.a.c,"$ia0").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia0")
else q.b=new P.a0(u,t)
q.a=!0
return}if(!!J.Q(n).$ibZ){if(n instanceof P.al&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia0")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.fb(new P.im(p),null)
s.a=!1}},
$S:1}
P.im.prototype={
$1:function(a){return this.a},
$S:23}
P.ik.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.ba(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bF(o)
s=n.a
s.b=new P.a0(u,t)
s.a=!0}},
$S:1}
P.ij.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia0")
r=m.c
if(H.D(r.eN(u))&&r.e!=null){q=m.b
q.b=r.eH(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bF(p)
r=H.n(m.a.a.c,"$ia0")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a0(t,s)
n.a=!0}},
$S:1}
P.dp.prototype={}
P.ha.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.al($.O,[P.y])
r.a=0
u=H.u(s,0)
t=H.j(new P.hc(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.hd(r,q),{func:1,ret:-1})
W.Y(s.a,s.b,t,!1,u)
return q}}
P.hc.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.u(this.b,0)]}}}
P.hd.prototype={
$0:function(){this.b.bt(this.a.a)},
$S:0}
P.cc.prototype={}
P.hb.prototype={}
P.aK.prototype={}
P.a0.prototype={
i:function(a){return H.i(this.a)},
$ib6:1}
P.iJ.prototype={$imZ:1}
P.iL.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d3():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:0}
P.is.prototype={
f9:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.d===$.O){a.$0()
return}P.kp(r,r,this,a,-1)}catch(s){u=H.ad(s)
t=H.bF(s)
P.iK(r,r,this,u,H.n(t,"$ia7"))}},
fa:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.d===$.O){a.$1(b)
return}P.kq(r,r,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bF(s)
P.iK(r,r,this,u,H.n(t,"$ia7"))}},
er:function(a,b){return new P.iu(this,H.j(a,{func:1,ret:b}),b)},
b_:function(a){return new P.it(this,H.j(a,{func:1,ret:-1}))},
bN:function(a,b){return new P.iv(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
cc:function(a,b){H.j(a,{func:1,ret:b})
if($.O===C.d)return a.$0()
return P.kp(null,null,this,a,b)},
ba:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.O===C.d)return a.$1(b)
return P.kq(null,null,this,a,b,c,d)},
f8:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.O===C.d)return a.$2(b,c)
return P.lS(null,null,this,a,b,c,d,e,f)}}
P.iu.prototype={
$0:function(){return this.a.cc(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.it.prototype={
$0:function(){return this.a.f9(this.b)},
$S:1}
P.iv.prototype={
$1:function(a){var u=this.c
return this.a.fa(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iq.prototype={
gG:function(a){var u=this,t=new P.dF(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibB")!=null}else{t=this.cX(b)
return t}},
cX:function(a){var u=this.d
if(u==null)return!1
return this.aM(this.bz(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bq(u==null?s.b=P.jg():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bq(t==null?s.c=P.jg():t,b)}else return s.cS(0,b)},
cS:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.jg()
t=r.bv(b)
s=u[t]
if(s==null)u[t]=[r.aJ(b)]
else{if(r.aM(s,b)>=0)return!1
s.push(r.aJ(b))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dZ(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bz(r,b)
t=s.aM(u,b)
if(t<0)return!1
s.bH(u.splice(t,1)[0])
return!0},
bq:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibB")!=null)return!1
a[b]=this.aJ(b)
return!0},
dZ:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibB")
if(u==null)return!1
this.bH(u)
delete a[b]
return!0},
bs:function(){this.r=1073741823&this.r+1},
aJ:function(a){var u,t=this,s=new P.bB(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bs()
return s},
bH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bs()},
bv:function(a){return J.cB(a)&1073741823},
bz:function(a,b){return a[this.bv(b)]},
aM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.bB.prototype={}
P.dF.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b4(t))
else{t=u.c
if(t==null){u.sbr(null)
return!1}else{u.sbr(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbr:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
P.fh.prototype={$ih:1,$ib:1}
P.t.prototype={
gG:function(a){return new H.c1(a,this.gk(a),[H.cy(this,a,"t",0)])},
u:function(a,b){return this.m(a,b)},
fd:function(a,b){var u,t=this,s=H.c([],[H.cy(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.I(s,u,t.m(a,u))
return s},
fc:function(a){return this.fd(a,!0)},
i:function(a){return P.j6(a,"[","]")}}
P.fj.prototype={}
P.fk.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:11}
P.W.prototype={
E:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.cy(s,a,"W",0),H.cy(s,a,"W",1)]})
for(u=J.bl(s.gO(a));u.p();){t=u.gw(u)
b.$2(t,s.m(a,t))}},
gk:function(a){return J.bm(this.gO(a))},
i:function(a){return P.jS(a)},
$iG:1}
P.ix.prototype={
Y:function(a,b){var u
for(u=J.bl(H.q(b,"$ih",this.$ti,"$ah"));u.p();)this.h(0,u.gw(u))},
i:function(a){return P.j6(this,"{","}")},
u:function(a,b){var u,t,s,r=this
P.k1(b,"index")
for(u=P.lK(r,r.r,H.u(r,0)),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.M(b,r,"index",null,t))},
$ih:1,
$ik4:1}
P.dG.prototype={}
P.bT.prototype={}
P.bU.prototype={}
P.eN.prototype={
$abT:function(){return[P.e,[P.b,P.y]]}}
P.f4.prototype={
i:function(a){return this.a}}
P.f3.prototype={
cY:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.k(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.by("")
if(r>b)q.a+=C.c.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l2(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abU:function(){return[P.e,P.e]}}
P.hM.prototype={}
P.hN.prototype={
ev:function(a){var u,t,s=P.k2(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iH(u)
if(t.d7(a,0,s)!==s)t.bI(C.c.b2(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lN(0,t.b,u.length)))},
$abU:function(){return[P.e,[P.b,P.y]]}}
P.iH.prototype={
bI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.k(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.k(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.k(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.k(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.k(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.k(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.k(s,r)
s[r]=128|a&63
return!1}},
d7:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.b2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aa(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bI(r,C.c.aa(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.k(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.k(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.k(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.k(u,q)
u[q]=128|r&63}}return s}}
P.L.prototype={}
P.b5.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.e.aw(u,30))&1073741823},
i:function(a){var u=this,t=P.l9(H.ls(u)),s=P.cL(H.lq(u)),r=P.cL(H.lm(u)),q=P.cL(H.ln(u)),p=P.cL(H.lp(u)),o=P.cL(H.lr(u)),n=P.la(H.lo(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.w.prototype={}
P.aR.prototype={
q:function(a,b){return new P.aR(C.e.q(this.a,b.gfj()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gC:function(a){return C.e.gC(this.a)},
i:function(a){var u,t,s,r=new P.eK(),q=this.a
if(q<0)return"-"+new P.aR(0-q).i(0)
u=r.$1(C.e.ad(q,6e7)%60)
t=r.$1(C.e.ad(q,1e6)%60)
s=new P.eJ().$1(q%1e6)
return""+C.e.ad(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.eJ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.eK.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b6.prototype={}
P.em.prototype={
i:function(a){return"Assertion failed"}}
P.d3.prototype={
i:function(a){return"Throw of null."}}
P.at.prototype={
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaL()+o+u
if(!q.a)return t
s=q.gaK()
r=P.cP(q.b)
return t+s+": "+r}}
P.bw.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.f5.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var u,t=H.a_(this.b)
if(typeof t!=="number")return t.bb()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.hK.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ew.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cP(u)+"."}}
P.fI.prototype={
i:function(a){return"Out of Memory"},
$ib6:1}
P.dc.prototype={
i:function(a){return"Stack Overflow"},
$ib6:1}
P.eB.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dx.prototype={
i:function(a){return"Exception: "+this.a}}
P.eZ.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.b7.prototype={}
P.y.prototype={}
P.h.prototype={
aD:function(a,b){var u=H.a9(this,"h",0)
return new H.cj(this,H.j(b,{func:1,ret:P.L,args:[u]}),[u])},
gk:function(a){var u,t=this.gG(this)
for(u=0;t.p();)++u
return u},
ga7:function(a){var u,t=this.gG(this)
if(!t.p())throw H.f(H.f6())
u=t.gw(t)
if(t.p())throw H.f(H.lg())
return u},
u:function(a,b){var u,t,s
P.k1(b,"index")
for(u=this.gG(this),t=0;u.p();){s=u.gw(u)
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
i:function(a){return P.lf(this,"(",")")}}
P.az.prototype={}
P.b.prototype={$ih:1}
P.G.prototype={}
P.E.prototype={
gC:function(a){return P.F.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
n:function(a,b){return this===b},
gC:function(a){return H.c7(this)},
i:function(a){return"Instance of '"+H.bv(this)+"'"},
toString:function(){return this.i(this)}}
P.a7.prototype={}
P.e.prototype={$ijW:1}
P.by.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.ek.prototype={
gk:function(a){return a.length}}
W.cC.prototype={
i:function(a){return String(a)},
$icC:1}
W.el.prototype={
i:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.cE.prototype={}
W.b_.prototype={$ib_:1}
W.bo.prototype={
cr:function(a,b,c){var u=a.getContext(b,P.lZ(c))
return u},
$ibo:1}
W.b0.prototype={
gk:function(a){return a.length}}
W.bV.prototype={$ibV:1}
W.ex.prototype={
gk:function(a){return a.length}}
W.K.prototype={$iK:1}
W.bW.prototype={
gk:function(a){return a.length}}
W.ey.prototype={}
W.av.prototype={}
W.aw.prototype={}
W.ez.prototype={
gk:function(a){return a.length}}
W.eA.prototype={
gk:function(a){return a.length}}
W.eD.prototype={
gk:function(a){return a.length}}
W.af.prototype={$iaf:1}
W.eG.prototype={
i:function(a){return String(a)}}
W.cM.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ah,P.Z]]},
$at:function(){return[[P.ah,P.Z]]},
$ih:1,
$ah:function(){return[[P.ah,P.Z]]},
$ib:1,
$ab:function(){return[[P.ah,P.Z]]},
$av:function(){return[[P.ah,P.Z]]}}
W.cN.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gah(a))+" x "+H.i(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iah)return!1
return a.left===u.gbX(b)&&a.top===u.gck(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gC:function(a){return W.kl(C.b.gC(a.left),C.b.gC(a.top),C.b.gC(this.gah(a)),C.b.gC(this.gaf(a)))},
gaf:function(a){return a.height},
gbX:function(a){return a.left},
gck:function(a){return a.top},
gah:function(a){return a.width},
$iah:1,
$aah:function(){return[P.Z]}}
W.eH.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.e]},
$at:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eI.prototype={
gk:function(a){return a.length}}
W.i7.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.n(u[b],"$iJ")},
h:function(a,b){this.a.appendChild(b)
return b},
gG:function(a){var u=this.fc(this)
return new J.ae(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ah:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
geq:function(a){return new W.i9(a)},
gbO:function(a){return new W.i7(a,a.children)},
i:function(a){return a.localName},
T:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jN
if(u==null){u=H.c([],[W.ab])
t=new W.d2(u)
C.a.h(u,W.kk(null))
C.a.h(u,W.km())
$.jN=t
d=t}else d=u
u=$.jM
if(u==null){u=new W.e8(d)
$.jM=u
c=u}else{u.a=d
c=u}}if($.aS==null){u=document
t=u.implementation.createHTMLDocument("")
$.aS=t
$.j5=t.createRange()
t=$.aS.createElement("base")
H.n(t,"$ibP")
t.href=u.baseURI
$.aS.head.appendChild(t)}u=$.aS
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$ib_")}u=$.aS
if(!!this.$ib_)s=u.body
else{s=u.createElement(a.tagName)
$.aS.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.L(C.K,a.tagName)){$.j5.selectNodeContents(s)
r=$.j5.createContextualFragment(b)}else{s.innerHTML=b
r=$.aS.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aS.body
if(s==null?u!=null:s!==u)J.jD(s)
c.bc(r)
document.adoptNode(r)
return r},
ew:function(a,b,c){return this.T(a,b,c,null)},
cv:function(a,b){a.textContent=null
a.appendChild(this.T(a,b,null,null))},
$iJ:1,
gcd:function(a){return a.tagName}}
W.eM.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:13}
W.l.prototype={$il:1}
W.d.prototype={
el:function(a,b,c,d){H.j(c,{func:1,args:[W.l]})
if(c!=null)this.cT(a,b,c,!1)},
cT:function(a,b,c,d){return a.addEventListener(b,H.bE(H.j(c,{func:1,args:[W.l]}),1),!1)},
$id:1}
W.ax.prototype={$iax:1}
W.eT.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.eU.prototype={
gk:function(a){return a.length}}
W.eY.prototype={
gk:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.f2.prototype={
gk:function(a){return a.length}}
W.bq.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibq:1,
$av:function(){return[W.x]}}
W.aC.prototype={$iaC:1}
W.cY.prototype={
i:function(a){return String(a)},
$icY:1}
W.fp.prototype={
gk:function(a){return a.length}}
W.fq.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fr(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fs.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.ft(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.ft.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aD.prototype={$iaD:1}
W.fu.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.X.prototype={$iX:1}
W.a2.prototype={
ga7:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.k5("No elements"))
if(t>1)throw H.f(P.k5("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s,r
H.q(b,"$ih",[W.x],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gG:function(a){var u=this.a.childNodes
return new W.cQ(u,u.length,[H.cy(C.M,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$at:function(){return[W.x]},
$ah:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
f4:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.cz(a):u},
eo:function(a,b){return a.appendChild(b)},
$ix:1}
W.c6.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.aE.prototype={$iaE:1,
gk:function(a){return a.length}}
W.fL.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.fS.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.fT(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fV.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.h4.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$av:function(){return[W.aG]}}
W.aH.prototype={$iaH:1}
W.h5.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.h8.prototype={
m:function(a,b){return a.getItem(H.z(b))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new W.h9(u))
return u},
gk:function(a){return a.length},
$aW:function(){return[P.e,P.e]},
$iG:1,
$aG:function(){return[P.e,P.e]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.ao.prototype={$iao:1}
W.bz.prototype={}
W.dd.prototype={
T:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
u=W.lb("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).Y(0,new W.a2(u))
return t}}
W.hf.prototype={
T:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.T(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.ga7(u)
s.toString
u=new W.a2(s)
r=u.ga7(u)
t.toString
r.toString
new W.a2(t).Y(0,new W.a2(r))
return t}}
W.hg.prototype={
T:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.T(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.ga7(u)
t.toString
s.toString
new W.a2(t).Y(0,new W.a2(s))
return t}}
W.cd.prototype={$icd:1}
W.aJ.prototype={$iaJ:1}
W.ap.prototype={$iap:1}
W.hi.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ap]},
$at:function(){return[W.ap]},
$ih:1,
$ah:function(){return[W.ap]},
$ib:1,
$ab:function(){return[W.ap]},
$av:function(){return[W.ap]}}
W.hj.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$av:function(){return[W.aJ]}}
W.hl.prototype={
gk:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.aq.prototype={$iaq:1}
W.hp.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aL]},
$at:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$av:function(){return[W.aL]}}
W.hq.prototype={
gk:function(a){return a.length}}
W.bc.prototype={}
W.hL.prototype={
i:function(a){return String(a)}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.aO.prototype={
gez:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ai("deltaY is not supported"))},
gey:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ai("deltaX is not supported"))},
$iaO:1}
W.ck.prototype={
e3:function(a,b){return a.requestAnimationFrame(H.bE(H.j(b,{func:1,ret:-1,args:[P.Z]}),1))},
d1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cl.prototype={$icl:1}
W.i8.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.K]},
$at:function(){return[W.K]},
$ih:1,
$ah:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$av:function(){return[W.K]}}
W.ds.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iah)return!1
return a.left===u.gbX(b)&&a.top===u.gck(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gC:function(a){return W.kl(C.b.gC(a.left),C.b.gC(a.top),C.b.gC(a.width),C.b.gC(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.io.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$av:function(){return[W.ay]}}
W.dL.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.iA.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$av:function(){return[W.aI]}}
W.iB.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ao]},
$at:function(){return[W.ao]},
$ih:1,
$ah:function(){return[W.ao]},
$ib:1,
$ab:function(){return[W.ao]},
$av:function(){return[W.ao]}}
W.i6.prototype={
E:function(a,b){var u,t,s,r,q
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gO(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.I)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.k(r,t)
s=H.n(r[t],"$icl")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aW:function(){return[P.e,P.e]},
$aG:function(){return[P.e,P.e]}}
W.i9.prototype={
m:function(a,b){return this.a.getAttribute(H.z(b))},
gk:function(a){return this.gO(this).length}}
W.ia.prototype={}
W.jf.prototype={}
W.ib.prototype={}
W.ic.prototype={
$1:function(a){return this.a.$1(H.n(a,"$il"))},
$S:24}
W.be.prototype={
cL:function(a){var u
if($.dA.a===0){for(u=0;u<262;++u)$.dA.I(0,C.J[u],W.m7())
for(u=0;u<12;++u)$.dA.I(0,C.k[u],W.m8())}},
ae:function(a){return $.kW().L(0,W.bX(a))},
Z:function(a,b,c){var u=$.dA.m(0,H.i(W.bX(a))+"::"+b)
if(u==null)u=$.dA.m(0,"*::"+b)
if(u==null)return!1
return H.jm(u.$4(a,b,c,this))},
$iab:1}
W.v.prototype={
gG:function(a){return new W.cQ(a,this.gk(a),[H.cy(this,a,"v",0)])}}
W.d2.prototype={
ae:function(a){return C.a.bM(this.a,new W.fD(a))},
Z:function(a,b,c){return C.a.bM(this.a,new W.fC(a,b,c))},
$iab:1}
W.fD.prototype={
$1:function(a){return H.n(a,"$iab").ae(this.a)},
$S:16}
W.fC.prototype={
$1:function(a){return H.n(a,"$iab").Z(this.a,this.b,this.c)},
$S:16}
W.dT.prototype={
cO:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.aD(0,new W.iy())
t=b.aD(0,new W.iz())
this.b.Y(0,u)
s=this.c
s.Y(0,C.L)
s.Y(0,t)},
ae:function(a){return this.a.L(0,W.bX(a))},
Z:function(a,b,c){var u=this,t=W.bX(a),s=u.c
if(s.L(0,H.i(t)+"::"+b))return u.d.en(c)
else if(s.L(0,"*::"+b))return u.d.en(c)
else{s=u.b
if(s.L(0,H.i(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.i(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$iab:1}
W.iy.prototype={
$1:function(a){return!C.a.L(C.k,H.z(a))},
$S:17}
W.iz.prototype={
$1:function(a){return C.a.L(C.k,H.z(a))},
$S:17}
W.iD.prototype={
Z:function(a,b,c){if(this.cD(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.iE.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.z(a))},
$S:25}
W.iC.prototype={
ae:function(a){var u=J.Q(a)
if(!!u.$ic8)return!1
u=!!u.$im
if(u&&W.bX(a)==="foreignObject")return!1
if(u)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.c.aG(b,"on"))return!1
return this.ae(a)},
$iab:1}
W.cQ.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sbA(J.kZ(u.a,t))
u.c=t
return!0}u.sbA(null)
u.c=s
return!1},
gw:function(a){return this.d},
sbA:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
W.ab.prototype={}
W.iw.prototype={$imM:1}
W.e8.prototype={
bc:function(a){new W.iI(this).$2(a,null)},
al:function(a,b){if(b==null)J.jD(a)
else b.removeChild(a)},
e5:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l1(a)
n=o.a.getAttribute("is")
H.n(a,"$iJ")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ad(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ad(r)}try{s=W.bX(a)
this.e4(H.n(a,"$iJ"),b,p,t,s,H.n(o,"$iG"),H.z(n))}catch(r){if(H.ad(r) instanceof P.at)throw r
else{this.al(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
e4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ae(a)){o.al(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.Z(a,"is",g)){o.al(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gO(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.k(t,s)
r=t[s]
q=o.a
p=J.l3(r)
H.z(r)
if(!q.Z(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$icd)o.bc(a.content)},
$imy:1}
W.iI.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.e5(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.al(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
r=H.n(u,"$ix")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$ix")}},
$S:26}
W.dr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.cr.prototype={}
W.cs.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
P.iN.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.eV.prototype={
gaO:function(){var u=this.b,t=H.a9(u,"t",0),s=W.J
return new H.fl(new H.cj(u,H.j(new P.eW(),{func:1,ret:P.L,args:[t]}),[t]),H.j(new P.eX(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bm(this.gaO().a)},
m:function(a,b){var u=this.gaO()
return u.b.$1(J.j2(u.a,b))},
gG:function(a){var u=P.jR(this.gaO(),!1,W.J)
return new J.ae(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ah:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.eW.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:13}
P.eX.prototype={
$1:function(a){return H.bG(H.n(a,"$ix"),"$iJ")},
$S:39}
P.ir.prototype={}
P.ah.prototype={}
P.aU.prototype={$iaU:1}
P.fd.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$at:function(){return[P.aU]},
$ih:1,
$ah:function(){return[P.aU]},
$ib:1,
$ab:function(){return[P.aU]},
$av:function(){return[P.aU]}}
P.aW.prototype={$iaW:1}
P.fG.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$at:function(){return[P.aW]},
$ih:1,
$ah:function(){return[P.aW]},
$ib:1,
$ab:function(){return[P.aW]},
$av:function(){return[P.aW]}}
P.fM.prototype={
gk:function(a){return a.length}}
P.c8.prototype={$ic8:1}
P.he.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$at:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbO:function(a){return new P.eV(a,new W.a2(a))},
T:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.ab])
C.a.h(p,W.kk(null))
C.a.h(p,W.km())
C.a.h(p,new W.iC())
c=new W.e8(new W.d2(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).ew(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.ga7(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$im:1}
P.aX.prototype={$iaX:1}
P.hr.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$at:function(){return[P.aX]},
$ih:1,
$ah:function(){return[P.aX]},
$ib:1,
$ab:function(){return[P.aX]},
$av:function(){return[P.aX]}}
P.dD.prototype={}
P.dE.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.eo.prototype={
gk:function(a){return a.length}}
P.ep.prototype={
m:function(a,b){return P.aY(a.get(H.z(b)))},
E:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.E(a,new P.eq(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
P.eq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.er.prototype={
gk:function(a){return a.length}}
P.bn.prototype={}
P.fH.prototype={
gk:function(a){return a.length}}
P.dq.prototype={}
P.cF.prototype={$icF:1}
P.d6.prototype={$id6:1}
P.bx.prototype={
cl:function(a,b,c){return a.uniform1f(b,c)},
cm:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibx:1}
P.da.prototype={$ida:1}
P.di.prototype={$idi:1}
P.h6.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aY(a.item(b))},
u:function(a,b){return this.m(a,b)},
$at:function(){return[[P.G,,,]]},
$ih:1,
$ah:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$av:function(){return[[P.G,,,]]}}
P.dW.prototype={}
P.dX.prototype={}
O.U.prototype={
bg:function(a){var u=this
u.sdd(H.c([],[a]))
u.sbC(null)
u.sbB(null)
u.sbD(null)},
aF:function(a,b){var u=this,t={func:1,ret:-1,args:[P.y,[P.h,H.a9(u,"U",0)]]}
H.j(a,t)
H.j(b,t)
u.sbC(null)
u.sbB(a)
u.sbD(b)},
dO:function(a){H.q(a,"$ih",[H.a9(this,"U",0)],"$ah")
return!0},
cJ:function(a,b){var u
H.q(b,"$ih",[H.a9(this,"U",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gG:function(a){var u=this.a
return new J.ae(u,u.length,[H.u(u,0)])},
u:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.a9(s,"U",0)
H.B(b,r)
r=[r]
if(H.D(s.dO(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cJ(t,H.c([b],r))}},
sdd:function(a){this.a=H.q(a,"$ib",[H.a9(this,"U",0)],"$ab")},
sbC:function(a){this.b=H.j(a,{func:1,ret:P.L,args:[[P.h,H.a9(this,"U",0)]]})},
sbB:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]})},
sbD:function(a){H.j(a,{func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]})},
$ih:1}
O.c2.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.an():u},
a8:function(){var u=this.b
if(u!=null)u.S(null)},
gan:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.fo()},
c7:function(a){var u=this.a
if(a==null)C.a.h(u,V.fo())
else C.a.h(u,a)
this.a8()},
b7:function(){var u=this.a
if(u.length>0){u.pop()
this.a8()}},
saQ:function(a){this.a=H.q(a,"$ib",[V.bb],"$ab")}}
E.es.prototype={}
E.a1.prototype={
cn:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aC(0,b,s):null
if(!J.T(q,s.x)){u=s.x
s.x=q
t=new D.R("matrix",u,q,[V.bb])
t.b=!0
s.a4(t)}for(r=s.y.a,r=new J.ae(r,r.length,[H.u(r,0)]);r.p();)r.d.cn(0,b)},
ag:function(a){var u,t,s,r,q,p,o,n=this,m="Depth",l="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n",k=a.dx,j=n.x
k.toString
if(j==null)C.a.h(k.a,k.gan(k))
else C.a.h(k.a,j.J(0,k.gan(k)))
k.a8()
a.c8(n.f)
k=a.dy
u=(k&&C.a).gaA(k)
if(u!=null&&n.d!=null){k=u.a
if(k==null){t=a.fr.m(0,m)
if(t==null){k=a.a
t=new A.eF(k,m)
t.cH(k,m)
t.c=l
t.d="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
t.e=t.by(l,35633)
t.f=t.by(t.d,35632)
j=k.createProgram()
t.r=j
k.attachShader(j,t.e)
k.attachShader(t.r,t.f)
k.linkProgram(t.r)
if(!H.D(H.jm(k.getProgramParameter(t.r,35714)))){s=k.getProgramInfoLog(t.r)
k.deleteProgram(t.r)
H.ac(P.a3("Failed to link shader: "+H.i(s)))}t.ea()
t.ec()
t.z=t.x.m(0,"posAttr")
t.Q=H.bG(t.y.m(0,"objClr"),"$ich")
t.ch=H.bG(t.y.m(0,"fogClr"),"$ich")
t.cx=H.bG(t.y.m(0,"fogStart"),"$icg")
t.cy=H.bG(t.y.m(0,"fogStop"),"$icg")
t.db=H.bG(t.y.m(0,"viewObjMat"),"$ici")
t.dx=H.bG(t.y.m(0,"projMat"),"$ici")
if(a.fr.bQ(0,m))H.ac(P.a3('Shader cache already contains a shader by the name "Depth".'))
a.fr.I(0,m,t)}u.a=t
k=t}j=n.e
if((!(j instanceof Z.cH)?n.e=null:j)==null){k=n.d.eu(new Z.i_(a.a),$.aZ())
j=k.eC($.aZ())
r=u.a
j.e=r.z.c
n.e=k
k=r}j=a.a
j.useProgram(k.r)
k.x.eB()
r=u.b
q=k.Q
q.toString
p=r.a
o=r.b
r=r.c
C.f.cm(q.a,q.d,p,o,r)
r=u.c
o=k.ch
o.toString
p=r.a
q=r.b
r=r.c
C.f.cm(o.a,o.d,p,q,r)
r=u.d
q=k.cx
C.f.cl(q.a,q.d,r)
r=u.e
q=k.cy
C.f.cl(q.a,q.d,r)
r=a.cy
r=r.gan(r)
q=k.dx
q.toString
q.bd(r.cg(0,!0))
r=a.cx
if(r==null){r=a.db
r=r.gan(r)
q=a.dx
q=a.cx=r.J(0,q.gan(q))
r=q}k=k.db
k.toString
k.bd(r.cg(0,!0))
r=n.e
r.aZ(a)
r.ag(a)
r.ff(a)
r=u.a
r.toString
j.useProgram(null)
r.x.eA()}for(k=n.y.a,k=new J.ae(k,k.length,[H.u(k,0)]);k.p();)k.d.ag(a)
a.c6()
a.dx.b7()},
gt:function(){var u=this.z
return u==null?this.z=D.an():u},
a4:function(a){var u=this.z
if(u!=null)u.S(a)},
V:function(){return this.a4(null)},
c3:function(a){H.n(a,"$iC")
this.e=null
this.a4(a)},
eW:function(){return this.c3(null)},
c1:function(a){this.a4(H.n(a,"$iC"))},
eV:function(){return this.c1(null)},
c_:function(a){this.a4(H.n(a,"$iC"))},
eS:function(){return this.c_(null)},
eR:function(a,b){var u,t,s,r,q,p,o
H.q(b,"$ih",[E.a1],"$ah")
for(u=b.length,t=this.gbZ(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.I)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sa1(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
eU:function(a,b){var u,t
H.q(b,"$ih",[E.a1],"$ah")
for(u=b.gG(b),t=this.gbZ();u.p();)u.gw(u).gt().H(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scK:function(a,b){this.y=H.q(b,"$iU",[E.a1],"$aU")},
$ijU:1}
E.fO.prototype={
cF:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.b5(Date.now(),!1)
s.y=0
s.cx=null
u=new O.c2()
t=[V.bb]
u.saQ(H.c([],t))
u.b=null
u.gt().h(0,new E.fP(s))
s.cy=u
u=new O.c2()
u.saQ(H.c([],t))
u.b=null
u.gt().h(0,new E.fQ(s))
s.db=u
u=new O.c2()
u.saQ(H.c([],t))
u.b=null
u.gt().h(0,new E.fR(s))
s.dx=u
s.seg(H.c([],[O.bA]))
u=s.dy;(u&&C.a).h(u,null)
s.sed(new H.aB([P.e,A.c9]))},
c8:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
c6:function(){var u=this.dy
if(u.length>1)u.pop()},
seg:function(a){this.dy=H.q(a,"$ib",[O.bA],"$ab")},
sed:function(a){this.fr=H.q(a,"$iG",[P.e,A.c9],"$aG")}}
E.fP.prototype={
$1:function(a){H.n(a,"$iC")},
$S:6}
E.fQ.prototype={
$1:function(a){H.n(a,"$iC")
this.a.cx=null},
$S:6}
E.fR.prototype={
$1:function(a){H.n(a,"$iC")
this.a.cx=null},
$S:6}
E.df.prototype={
bj:function(a){H.n(a,"$iC")
this.ca()},
bi:function(){return this.bj(null)},
geG:function(){var u,t=this,s=Date.now(),r=C.e.ad(P.jL(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.b5(s,!1)
return u/r},
bF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.bk(r)
u=C.b.bW(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.b.bW(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k8(C.i,s.gf7())}},
ca:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hk(this),{func:1,ret:-1,args:[P.Z]})
C.u.d1(u)
C.u.e3(u,W.kt(t,P.Z))}},
f6:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.bF()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b5(r,!1)
s.y=P.jL(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a8()
r=s.db
C.a.sk(r.a,0)
r.a8()
r=s.dx
C.a.sk(r.a,0)
r.a8()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.ag(p.e)}s=p.z
if(s!=null)s.S(null)}catch(q){u=H.ad(q)
t=H.bF(q)
P.jx("Error: "+H.i(u))
P.jx("Stack: "+H.i(t))
throw H.f(u)}}}
E.hk.prototype={
$1:function(a){var u
H.mi(a)
u=this.a
if(u.ch){u.ch=!1
u.f6()}},
$S:31}
Z.dn.prototype={$ims:1}
Z.cG.prototype={
aZ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.a3('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.i_.prototype={$imt:1}
Z.cH.prototype={
eC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aZ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aZ(a)},
ff:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.k(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sd8:function(a){this.b=H.q(a,"$ib",[Z.c0],"$ab")},
$imB:1}
Z.c0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bv(this.c)+"'")+"]"}}
Z.dm.prototype={
gbe:function(a){var u=this.a,t=(u&$.aZ().a)!==0?3:0
if((u&$.bL().a)!==0)t+=3
if((u&$.bK().a)!==0)t+=3
if((u&$.bM().a)!==0)t+=2
if((u&$.bN().a)!==0)t+=3
if((u&$.cz().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=4
if((u&$.bO().a)!==0)++t
return(u&$.bJ().a)!==0?t+4:t},
ep:function(a){var u,t=$.aZ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0)if(u===a)return t
return $.kV()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dm))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.aZ().a)!==0)C.a.h(u,"Pos")
if((t&$.bL().a)!==0)C.a.h(u,"Norm")
if((t&$.bK().a)!==0)C.a.h(u,"Binm")
if((t&$.bM().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bN().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cz().a)!==0)C.a.h(u,"Clr3")
if((t&$.cA().a)!==0)C.a.h(u,"Clr4")
if((t&$.bO().a)!==0)C.a.h(u,"Weight")
if((t&$.bJ().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.ev.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.j(b,u)
if(this.a==null)this.sa1(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
H:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.a
t=(u&&C.a).H(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.b
t=(u&&C.a).H(u,b)||t}return t},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.jR(u,!0,{func:1,ret:-1,args:[D.C]}),new D.eP(q))
u=r.b
if(u!=null){r.saj(H.c([],[{func:1,ret:-1,args:[D.C]}]))
C.a.E(u,new D.eQ(q))}return!0},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}},
sa1:function(a){this.a=H.q(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saj:function(a){this.b=H.q(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.eP.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eQ.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.C.prototype={}
D.cR.prototype={}
D.cS.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cI.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.cV.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fc.prototype={
f0:function(a){this.d.h(0,a.a)
return!1},
eX:function(a){this.d.H(0,a.a)
return!1},
sdX:function(a){this.d=H.q(a,"$ik4",[P.y],"$ak4")}}
X.fi.prototype={
b6:function(a,b){this.r=a.a
return!1},
ap:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cu()
if(typeof u!=="number")return u.cp()
this.r=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
f1:function(a){return!1},
dD:function(a,b,c){return}}
X.c3.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.c3))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.fv.prototype={
b6:function(a,b){this.f=a.a
return!1},
ap:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cu()
if(typeof u!=="number")return u.cp()
this.f=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
f2:function(a,b){return!1}}
X.ho.prototype={
f_:function(a){H.q(a,"$ib",[V.a6],"$ab")
return!1},
eY:function(a){H.q(a,"$ib",[V.a6],"$ab")
return!1},
eZ:function(a){H.q(a,"$ib",[V.a6],"$ab")
return!1}}
X.dl.prototype={
bx:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cV(u,new X.c3(t,a.altKey,a.shiftKey))},
ac:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aY:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
a2:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a6(s-q,r-u)},
ak:function(a){return new V.aN(a.movementX,a.movementY)},
aV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
q=C.b.W(r.pageX)
C.b.W(r.pageY)
p=o.left
C.b.W(r.pageX)
C.a.h(n,new V.a6(q-p,C.b.W(r.pageY)-o.top))}return n},
a0:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cI(u,new X.c3(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dw:function(a){this.f=!0},
di:function(a){this.f=!1},
dq:function(a){H.n(a,"$iX")
if(H.D(this.f)&&this.aR(a))a.preventDefault()},
dC:function(a){var u
H.n(a,"$iaC")
if(!H.D(this.f))return
u=this.bx(a)
this.b.f0(u)},
dA:function(a){var u
H.n(a,"$iaC")
if(!H.D(this.f))return
u=this.bx(a)
this.b.eX(u)},
dF:function(a){var u,t,s,r,q=this
H.n(a,"$iX")
u=q.a
u.focus()
q.f=!0
q.ac(a)
if(H.D(q.x)){t=q.a0(a)
s=q.ak(a)
if(q.d.b6(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a0(a)
r=q.a2(a)
if(q.c.b6(t,r))a.preventDefault()},
dJ:function(a){var u,t,s,r=this
H.n(a,"$iX")
r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()},
du:function(a){var u,t,s,r=this
H.n(a,"$iX")
if(!r.aR(a)){r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()}},
dH:function(a){var u,t,s,r=this
H.n(a,"$iX")
r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ao(u,s))a.preventDefault()},
ds:function(a){var u,t,s,r=this
H.n(a,"$iX")
if(!r.aR(a)){r.ac(a)
u=r.a0(a)
if(H.D(r.x)){t=r.ak(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a2(a)
if(r.c.ao(u,s))a.preventDefault()}},
dL:function(a){var u,t,s=this
H.n(a,"$iaO")
s.ac(a)
u=new V.aN((a&&C.t).gey(a),C.t.gez(a)).K(0,180)
if(H.D(s.x)){if(s.d.f1(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.a2(a)
if(s.c.f2(u,t))a.preventDefault()},
dN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a0(s.y)
t=s.a2(s.y)
s.d.dD(u,t,r)}},
dW:function(a){var u,t=this
H.n(a,"$iaq")
t.a.focus()
t.f=!0
t.aY(a)
u=t.aV(a)
if(t.e.f_(u))a.preventDefault()},
dS:function(a){var u
H.n(a,"$iaq")
this.aY(a)
u=this.aV(a)
if(this.e.eY(u))a.preventDefault()},
dU:function(a){var u
H.n(a,"$iaq")
this.aY(a)
u=this.aV(a)
if(this.e.eZ(u))a.preventDefault()},
sd2:function(a){this.z=H.q(a,"$ib",[[P.cc,P.F]],"$ab")}}
V.b2.prototype={
q:function(a,b){var u=C.b.q(this.a,b.gf3()),t=C.b.q(this.b,b.gcs()),s=C.b.q(this.c,b.ges())
return new V.b2(V.bi(u),V.bi(t),V.bi(s))},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b2))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.b3.prototype={
q:function(a,b){var u=this,t=C.b.q(u.a,b.gf3()),s=C.b.q(u.b,b.gcs()),r=C.b.q(u.c,b.ges()),q=C.b.q(u.d,b.gfk(b))
return new V.b3(V.bi(t),V.bi(s),V.bi(r),V.bi(q))},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.eO.prototype={}
V.bb.prototype={
cg:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.w])
return t},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aV(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bb))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.F()},
A:function(a){var u,t,s,r,q,p=this,o=[P.w],n=V.iQ(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iQ(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iQ(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iQ(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.k(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.k(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.k(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.k(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.k(n,1)
q=q+n[1]+", "
if(1>=t)return H.k(m,1)
q=q+m[1]+", "
if(1>=s)return H.k(l,1)
q=q+l[1]+", "
if(1>=r)return H.k(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.k(n,2)
u=u+n[2]+", "
if(2>=t)return H.k(m,2)
u=u+m[2]+", "
if(2>=s)return H.k(l,2)
u=u+l[2]+", "
if(2>=r)return H.k(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.k(n,3)
q=q+n[3]+", "
if(3>=t)return H.k(m,3)
q=q+m[3]+", "
if(3>=s)return H.k(l,3)
q=q+l[3]+", "
if(3>=r)return H.k(k,3)
return u+(q+k[3]+"]")},
F:function(){return this.A("")}}
V.a6.prototype={
q:function(a,b){return new V.a6(C.b.q(this.a,b.gfp(b)),C.b.q(this.b,b.gfq(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.ag.prototype={
q:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.ag(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.d8.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d8))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.aN.prototype={
b4:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
q:function(a,b){var u,t=this.a,s=b.gfl(b)
if(typeof t!=="number")return t.q()
s=C.b.q(t,s)
t=this.b
u=b.gfm(b)
if(typeof t!=="number")return t.q()
return new V.aN(s,C.b.q(t,u))},
K:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.kc
return u==null?$.kc=new V.aN(0,0):u}u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return new V.aN(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.bk(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.bk(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.S.prototype={
b4:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
P:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
aE:function(a){return new V.S(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
K:function(a,b){if(Math.abs(b-0)<$.P().a)return V.hO()
return new V.S(this.a/b,this.b/b,this.c/b)},
eK:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.cK.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.an():u},
aC:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cK))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.c_.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.an():u},
R:function(a){var u
H.n(a,"$iC")
u=this.e
if(u!=null)u.S(a)},
cM:function(){return this.R(null)},
dg:function(a,b){var u,t,s,r,q,p,o,n=U.a4
H.q(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gbk(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.I)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.j(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cR([n])
n.b=!0
this.R(n)},
dQ:function(a,b){var u,t,s=U.a4
H.q(b,"$ih",[s],"$ah")
for(u=b.gG(b),t=this.gbk();u.p();)u.gw(u).gt().H(0,t)
s=new D.cS([s])
s.b=!0
this.R(s)},
aC:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.bb()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ae(r,r.length,[H.u(r,0)]),u=null;r.p();){q=r.d
if(q!=null){t=q.aC(0,b,c)
if(t!=null)u=u==null?t:t.J(0,u)}}s.f=u==null?V.fo():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c_))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a4]},
$aU:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.d9.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.an():u},
R:function(a){var u=this.y
if(u!=null)u.S(a)},
sco:function(a){var u
a=V.jz(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.P().a)){this.a=a
u=new D.R("yaw",u,a,[P.w])
u.b=!0
this.R(u)}},
sc5:function(a,b){var u
b=V.jz(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.P().a)){this.b=b
u=new D.R("pitch",u,b,[P.w])
u.b=!0
this.R(u)}},
scb:function(a){var u
a=V.jz(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
u=new D.R("roll",u,a,[P.w])
u.b=!0
this.R(u)}},
sbU:function(a){var u=this.d
if(!(Math.abs(u-a)<$.P().a)){this.d=a
u=new D.R("deltaYaw",u,a,[P.w])
u.b=!0
this.R(u)}},
sbS:function(a){var u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
u=new D.R("deltaPitch",u,a,[P.w])
u.b=!0
this.R(u)}},
sbT:function(a){var u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.R("deltaRoll",u,a,[P.w])
u.b=!0
this.R(u)}},
aC:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sco(s.a+s.d*b.y)
s.sc5(0,s.b+s.e*b.y)
s.scb(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
r=V.aV(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)
q=s.b
u=Math.cos(q)
t=Math.sin(q)
r=r.J(0,V.aV(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1))
q=s.a
u=Math.cos(q)
t=Math.sin(q)
s.x=r.J(0,V.aV(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1))
r=s.y
if(r!=null)r.aq(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d9))return!1
u=r.a
t=b.a
s=$.P().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+"], ["+V.H(u.d,3,0)+", "+V.H(u.e,3,0)+", "+V.H(u.f,3,0)+"]"}}
M.cO.prototype={
a_:function(a){var u
H.n(a,"$iC")
u=this.x
if(u!=null)u.S(a)},
cN:function(){return this.a_(null)},
dk:function(a,b){var u,t,s,r,q,p,o,n=E.a1
H.q(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.I)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sa1(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cR([n])
n.b=!0
this.a_(n)},
dm:function(a,b){var u,t,s=E.a1
H.q(b,"$ih",[s],"$ah")
for(u=b.gG(b),t=this.gX();u.p();)u.gw(u).gt().H(0,t)
s=new D.cS([s])
s.b=!0
this.a_(s)},
sce:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gt().H(0,t.gX())
u=t.c
t.c=a
if(a!=null)a.gt().h(0,t.gX())
s=new D.R("technique",u,t.c,[O.bA])
s.b=!0
t.a_(s)}},
gt:function(){var u=this.x
return u==null?this.x=D.an():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.c8(a1.c)
u=a1.b
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.bk(s)
o=C.b.W(p*s)
p=q.b
if(typeof r!=="number")return H.bk(r)
n=C.b.W(p*r)
p=C.b.W(q.c*s)
a2.c=p
q=C.b.W(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.a
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aV(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c7(i)
t=$.jX
if(t==null){t=$.jZ
if(t==null)t=$.jZ=new V.ag(0,0,0)
q=$.kf
if(q==null)q=$.kf=new V.S(0,1,0)
p=$.kd
if(p==null)p=$.kd=new V.S(0,0,-1)
h=p.K(0,Math.sqrt(p.M(p)))
q=q.am(h)
g=q.K(0,Math.sqrt(q.M(q)))
f=h.am(g)
e=new V.S(t.a,t.b,t.c)
d=g.aE(0).M(e)
c=f.aE(0).M(e)
b=h.aE(0).M(e)
t=V.aV(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jX=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.J(0,a)}a2.db.c7(a)
for(u=a1.d.a,u=new J.ae(u,u.length,[H.u(u,0)]);u.p();)u.d.cn(0,a2)
for(u=a1.d.a,u=new J.ae(u,u.length,[H.u(u,0)]);u.p();)u.d.ag(a2)
a1.a.toString
a2.cy.b7()
a2.db.b7()
a1.b.toString
a2.c6()},
scW:function(a,b){this.d=H.q(b,"$iU",[E.a1],"$aU")},
$imz:1}
A.cD.prototype={}
A.en.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eF.prototype={}
A.c9.prototype={
cH:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
by:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.jm(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.a3("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
ea:function(){var u,t,s,r=this,q=H.c([],[A.cD]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bk(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cD(p,t.name,s))}r.x=new A.en(q)},
ec:function(){var u,t,s,r=this,q=H.c([],[A.dh]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bk(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ex(t.type,t.size,t.name,s))}r.y=new A.hD(q)},
ab:function(a,b,c){var u=this.a
if(a===1)return new A.hw(u,b,c)
else return A.je(u,this.r,b,a,c)},
cZ:function(a,b,c){var u=this.a
if(a===1)return new A.hG(u,b,c)
else return A.je(u,this.r,b,a,c)},
d_:function(a,b,c){var u=this.a
if(a===1)return new A.hH(u,b,c)
else return A.je(u,this.r,b,a,c)},
ax:function(a,b){return new P.dx(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ex:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ab(b,c,d)
case 5121:return u.ab(b,c,d)
case 5122:return u.ab(b,c,d)
case 5123:return u.ab(b,c,d)
case 5124:return u.ab(b,c,d)
case 5125:return u.ab(b,c,d)
case 5126:return new A.cg(u.a,c,d)
case 35664:return new A.hy(u.a,c,d)
case 35665:return new A.ch(u.a,c,d)
case 35666:return new A.hB(u.a,c,d)
case 35667:return new A.hz(u.a,c,d)
case 35668:return new A.hA(u.a,c,d)
case 35669:return new A.hC(u.a,c,d)
case 35674:return new A.hE(u.a,c,d)
case 35675:return new A.hF(u.a,c,d)
case 35676:return new A.ci(u.a,c,d)
case 35678:return u.cZ(b,c,d)
case 35680:return u.d_(b,c,d)
case 35670:throw H.f(u.ax("BOOL",c))
case 35671:throw H.f(u.ax("BOOL_VEC2",c))
case 35672:throw H.f(u.ax("BOOL_VEC3",c))
case 35673:throw H.f(u.ax("BOOL_VEC4",c))
default:throw H.f(P.a3("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dh.prototype={}
A.hD.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.F()},
F:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.hw.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sej:function(a){H.q(a,"$ib",[P.y],"$ab")}}
A.cg.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.ch.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.hF.prototype={
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ci.prototype={
bd:function(a){var u=new Float32Array(H.jh(H.q(a,"$ib",[P.w],"$ab")))
C.f.fg(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.hG.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.hH.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.j0.prototype={
$1:function(a){return new V.ag(Math.cos(a),Math.sin(a),0)},
$S:34}
F.iO.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jC(n.$1(o),m)
m=J.kY(J.jC(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.S(m.a,m.b,m.c)
u=m.K(0,Math.sqrt(m.M(m)))
n=$.ke
if(n==null){n=new V.S(1,0,0)
$.ke=n
t=n}else t=n
if(!J.T(u,t)){n=$.kg
if(n==null){n=new V.S(0,0,1)
$.kg=n
t=n}else t=n}n=u.am(t)
s=n.K(0,Math.sqrt(n.M(n)))
n=s.am(u)
t=n.K(0,Math.sqrt(n.M(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.J(0,n*m)
m=s.J(0,q*m)
m=new V.ag(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.T(a.f,m)){a.f=m
n=a.a
if(n!=null)n.V()}},
$S:35}
F.V.prototype={
az:function(){var u=this
if(!u.gbV()){C.a.H(u.a.a.d.b,u)
u.a.a.V()}u.e_()
u.e0()
u.e1()},
e7:function(a){this.a=a
C.a.h(a.d.b,this)},
e8:function(a){this.b=a
C.a.h(a.d.c,this)},
e9:function(a){this.c=a
C.a.h(a.d.d,this)},
e_:function(){var u=this.a
if(u!=null){C.a.H(u.d.b,this)
this.a=null}},
e0:function(){var u=this.b
if(u!=null){C.a.H(u.d.c,this)
this.b=null}},
e1:function(){var u=this.c
if(u!=null){C.a.H(u.d.d,this)
this.c=null}},
gbV:function(){return this.a==null||this.b==null||this.c==null},
cU:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hO()
if(q!=null)s=s.P(0,q)
if(u!=null)s=s.P(0,u)
if(t!=null)s=s.P(0,t)
if(s.eK())return
return s.K(0,Math.sqrt(s.M(s)))},
cV:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.M(r)))
r=t.q(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.am(r.K(0,Math.sqrt(r.M(r))))
return r.K(0,Math.sqrt(r.M(r)))},
b0:function(){var u,t=this
if(t.d!=null)return!0
u=t.cU()
if(u==null){u=t.cV()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
gbP:function(a){var u=this
if(J.T(u.a,u.b))return!0
if(J.T(u.b,u.c))return!0
if(J.T(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var u,t,s=this
if(s.gbV())return a+"disposed"
u=a+C.c.a5(J.as(s.a.e),0)+", "+C.c.a5(J.as(s.b.e),0)+", "+C.c.a5(J.as(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
F:function(){return this.A("")}}
F.eS.prototype={}
F.h3.prototype={
b5:function(a,b,c){var u,t=b.a
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.ba.prototype={}
F.fe.prototype={}
F.hv.prototype={}
F.bt.prototype={}
F.db.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.an():u},
eP:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.u(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.geE(u)
C.a.c9(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.k(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){C.a.h(s,q)
C.a.c9(u,r)}}if(s.length>1)b.eO(s)}}p.a.D()
p.c.b8()
p.d.b8()
p.b.f5()
p.c.b9(new F.hv())
p.d.b9(new F.h3())
o=p.e
if(o!=null)o.aq(0)},
eu:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aZ()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bL().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.cz().a)!==0)++s
if((t&$.cA().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.bJ().a)!==0)++s
r=a3.gbe(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.w
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cG])
for(n=0,m=0;m<s;++m){l=a3.ep(m)
k=l.gbe(l)
C.a.I(o,m,new Z.cG(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.k(u,j)
i=u[j].eM(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.I(p,h,i[g]);++h}}n+=k}H.q(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.jh(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cH(new Z.dn(a0,f),o)
e.sd8(H.c([],[Z.c0]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.k(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.k(c,m)
c=c[m].c
c.a.a.D()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.q(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c0(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.A("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.A("   "))}return C.a.l(t,"\n")},
V:function(){var u=this.e
if(u!=null)u.S(null)},
$imA:1}
F.fX.prototype={
em:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.q(c,"$ib",[F.aj],"$ab")
u=H.c([],[F.V])
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
C.a.h(u,F.eR(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eR(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eR(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.eR(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
b9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b5(0,p,n)){p.az()
break}}}}},
b8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.k(t,u)
s=t[u]
t=s.gbP(s)
if(t)s.az()}},
b1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].b0())s=!1
return s},
i:function(a){return this.F()},
A:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
F:function(){return this.A("")},
sd3:function(a){this.b=H.q(a,"$ib",[F.V],"$ab")}}
F.fY.prototype={
gk:function(a){return 0},
b9:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
b8:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
s=t[u]
t=s.gbP(s)
if(t)s.az()}},
i:function(a){return this.F()},
A:function(a){var u,t,s=H.c([],[P.e])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.k(t,u)
C.a.h(s,t[u].A(a+(""+u+". ")))}return C.a.l(s,"\n")},
F:function(){return this.A("")},
sd9:function(a){this.b=H.q(a,"$ib",[F.ba],"$ab")}}
F.fZ.prototype={
gk:function(a){return 0},
f5:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
t=t[u].gfo()
t=t.gfn(t)
if(t.gk(t).fi(0,1)){t=this.b
return H.k(t,u)
t[u].az()}}},
i:function(a){return this.F()},
A:function(a){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(a))}return C.a.l(s,"\n")},
F:function(){return this.A("")},
saU:function(a){this.b=H.q(a,"$ib",[F.bt],"$ab")}}
F.aj.prototype={
bR:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ki(u.cx,r,o,t,s,q,p,a,n)},
eM:function(a){var u,t,s=this
if(a.n(0,$.aZ())){u=s.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bL())){u=s.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bK())){u=H.c([0,0,1],[P.w])
return u}else if(a.n(0,$.bM())){u=s.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bN())){u=H.c([0,0,0],[P.w])
return u}else if(a.n(0,$.cz())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cA())){u=s.Q
t=[P.w]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bO()))return H.c([s.ch],[P.w])
else if(a.n(0,$.bJ())){u=H.c([-1,-1,-1,-1],[P.w])
return u}else return H.c([],[P.w])},
b0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hO()
t.d.E(0,new F.hY(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.c.a5(J.as(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.H(s.ch,3,0))
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
F:function(){return this.A("")}}
F.hY.prototype={
$1:function(a){var u,t
H.n(a,"$iV")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.P(0,u)}},
$S:9}
F.hP.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.k(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.a3("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.V()
return!0},
bK:function(a,b){var u=null,t=F.ki(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
b1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].b0()
return!0},
i:function(a){return this.F()},
A:function(a){var u,t,s,r
this.D()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
F:function(){return this.A("")},
sek:function(a){this.c=H.q(a,"$ib",[F.aj],"$ab")}}
F.hQ.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.k(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.k(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.k(t,b)
return t[b]},
E:function(a,b){var u=this
H.j(b,{func:1,ret:-1,args:[F.V]})
C.a.E(u.b,b)
C.a.E(u.c,new F.hR(u,b))
C.a.E(u.d,new F.hS(u,b))},
i:function(a){return this.F()},
F:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
sd4:function(a){this.b=H.q(a,"$ib",[F.V],"$ab")},
sd5:function(a){this.c=H.q(a,"$ib",[F.V],"$ab")},
sd6:function(a){this.d=H.q(a,"$ib",[F.V],"$ab")}}
F.hR.prototype={
$1:function(a){H.n(a,"$iV")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:9}
F.hS.prototype={
$1:function(a){var u
H.n(a,"$iV")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:9}
F.hT.prototype={
gk:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.k(u,t)
return u[t]}else{u=this.b
return H.k(u,b)
return u[b]}},
i:function(a){return this.F()},
F:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(""))}return C.a.l(s,"\n")},
sda:function(a){this.b=H.q(a,"$ib",[F.ba],"$ab")},
sdc:function(a){this.c=H.q(a,"$ib",[F.ba],"$ab")}}
F.hV.prototype={}
F.hU.prototype={
b5:function(a,b,c){return J.T(b.f,c.f)}}
F.hW.prototype={}
F.fE.prototype={
eO:function(a){var u,t,s,r,q,p,o,n,m
H.q(a,"$ib",[F.aj],"$ab")
u=V.hO()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.S(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.K(0,Math.sqrt(u.M(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.I)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.K(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.S(null)}}}return}}
F.hX.prototype={
gk:function(a){return 0},
i:function(a){return this.F()},
F:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.k(u,t)
C.a.h(s,u[t].A(""))}return C.a.l(s,"\n")},
saU:function(a){this.b=H.q(a,"$ib",[F.bt],"$ab")}}
O.eE.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.an():u},
au:function(a){var u=this.f
if(u!=null)u.S(a)}}
O.bA.prototype={}
V.aQ.prototype={
a3:function(a,b){return!0},
i:function(a){return"all"},
$iaa:1}
V.aa.prototype={}
V.cZ.prototype={
a3:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)if(u[s].a3(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sN:function(a){this.a=H.q(a,"$ib",[V.aa],"$ab")},
$iaa:1}
V.a5.prototype={
a3:function(a,b){return!this.cC(0,b)},
i:function(a){return"!["+this.bf(0)+"]"}}
V.fN.prototype={
a3:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jb(this.a),t=H.jb(this.b)
return u+".."+t},
$iaa:1}
V.fW.prototype={
cG:function(a){var u,t
if(a.a.length<=0)throw H.f(P.a3("May not create a SetMatcher with zero characters."))
u=new H.aB([P.y,P.L])
for(t=new H.c1(a,a.gk(a),[H.a9(a,"t",0)]);t.p();)u.I(0,t.d,!0)
this.se6(u)},
a3:function(a,b){return this.a.bQ(0,b)},
i:function(a){var u=this.a
return P.jc(new H.cW(u,[H.u(u,0)]))},
se6:function(a){this.a=H.q(a,"$iG",[P.y,P.L],"$aG")},
$iaa:1}
V.ca.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cf(this.a.j(0,b))
r.sN(H.c([],[V.aa]))
r.c=!1
C.a.h(this.c,r)
return r},
eD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
if(r.a3(0,a))return r}return},
i:function(a){return this.b},
sei:function(a){this.c=H.q(a,"$ib",[V.cf],"$ab")}}
V.dg.prototype={
i:function(a){var u=H.jy(this.b,"\n","\\n"),t=H.jy(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ce.prototype={
a6:function(a,b,c){var u,t,s
H.q(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.I)(c),++t){s=c[t]
this.c.I(0,s,b)}},
i:function(a){return this.b},
se2:function(a){var u=P.e
this.c=H.q(a,"$iG",[u,u],"$aG")}}
V.hm.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.ca(this,b)
u.sei(H.c([],[V.cf]))
u.d=null
this.a.I(0,b,u)}return u},
B:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.ce(a)
u=P.e
t.se2(new H.aB([u,u]))
this.b.I(0,a,t)}return t},
cj:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dg]),l=this.c,k=[P.y],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aa(a,s)
q=l.eD(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jc(j)
throw H.f(P.a3("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jc(j)
o=l.d
n=o.c.m(0,p)
t=new V.dg(n==null?o.b:n,p,s)}++s}}},
sef:function(a){this.a=H.q(a,"$iG",[P.e,V.ca],"$aG")},
seh:function(a){this.b=H.q(a,"$iG",[P.e,V.ce],"$aG")}}
V.cf.prototype={
i:function(a){return this.b.b+": "+this.bf(0)}}
X.cJ.prototype={$ijU:1}
X.f_.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.an():u}}
X.d4.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.an():u},
a9:function(a){var u
H.n(a,"$iC")
u=this.f
if(u!=null)u.S(a)},
cR:function(){return this.a9(null)},
sbY:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gt().H(0,s.gbl())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gbl())
u=new D.R("mover",t,s.b,[U.a4])
u.b=!0
s.a9(u)}},
$ijU:1,
$icJ:1}
X.de.prototype={}
V.b1.prototype={
as:function(a){this.b=new P.f3(C.G)
this.c=null
this.saP(H.c([],[[P.b,W.af]]))},
v:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.af]))
u=a.split("\n")
for(l=u.length,t=[W.af],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.z(q)
o=m.b.cY(q,0,q.length)
n=o==null?q:o
C.E.cv(p,H.jy(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaA(m.d),p)}},
c4:function(a,b){var u,t,s,r,q=this
H.q(b,"$ib",[P.e],"$ab")
q.saP(H.c([],[[P.b,W.af]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.ay():t).cj(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)q.aB(t[r])},
saP:function(a){this.d=H.q(a,"$ib",[[P.b,W.af]],"$ab")}}
V.j_.prototype={
$1:function(a){H.n(a,"$iaK")
P.jx(C.b.ci(this.a.geG(),2)+" fps")},
$S:36}
V.eC.prototype={
aB:function(a){var u=this
switch(a.a){case"Class":u.v(a.b,"#551")
break
case"Comment":u.v(a.b,"#777")
break
case"Id":u.v(a.b,"#111")
break
case"Num":u.v(a.b,"#191")
break
case"Reserved":u.v(a.b,"#119")
break
case"String":u.v(a.b,"#171")
break
case"Symbol":u.v(a.b,"#616")
break
case"Type":u.v(a.b,"#B11")
break
case"Whitespace":u.v(a.b,"#111")
break}},
ay:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hn()
a1.c=a1.j(0,r)
u=a1.j(0,r).l(0,q)
t=V.r(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).l(0,q)
u=V.r(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=a1.j(0,r).l(0,p)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,p).l(0,p)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,p).l(0,o)
t=V.r(new H.o("."))
C.a.h(u.a,t)
t=a1.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).l(0,m)
u=V.r(new H.o(l))
C.a.h(t.a,u)
u=a1.j(0,m).l(0,m)
t=V.r(new H.o(l))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,k)
u=V.r(new H.o('"'))
C.a.h(t.a,u)
u=a1.j(0,k).l(0,j)
t=V.r(new H.o('"'))
C.a.h(u.a,t)
t=a1.j(0,k).l(0,i)
u=V.r(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).l(0,k)
t=V.r(new H.o('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).l(0,k).a,new V.aQ())
t=a1.j(0,r).l(0,h)
u=V.r(new H.o("'"))
C.a.h(t.a,u)
u=a1.j(0,h).l(0,g)
t=V.r(new H.o("'"))
C.a.h(u.a,t)
t=a1.j(0,h).l(0,f)
u=V.r(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).l(0,h)
t=V.r(new H.o("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).l(0,h).a,new V.aQ())
t=a1.j(0,r).l(0,e)
u=V.r(new H.o("/"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,d)
t=V.r(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,d).l(0,c)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).l(0,d)
t=new V.a5()
s=[V.aa]
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,b)
t=V.r(new H.o("*"))
C.a.h(u.a,t)
t=a1.j(0,b).l(0,a)
u=V.r(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,b)
t=new V.a5()
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,c)
t=V.r(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,a0)
u=V.r(new H.o(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).l(0,a0)
t=V.r(new H.o(" \n\t"))
C.a.h(u.a,t)
t=a1.j(0,p)
t.d=t.a.B("Num")
t=a1.j(0,n)
t.d=t.a.B("Num")
t=a1.j(0,m)
t.d=t.a.B("Symbol")
t=a1.j(0,j)
t.d=t.a.B("String")
t=a1.j(0,g)
t.d=t.a.B("String")
t=a1.j(0,c)
t.d=t.a.B(d)
t=a1.j(0,a0)
t.d=t.a.B(a0)
t=a1.j(0,q)
t=t.d=t.a.B(q)
u=[P.e]
t.a6(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a6(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a6(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f0.prototype={
aB:function(a){var u=this
switch(a.a){case"Builtin":u.v(a.b,"#411")
break
case"Comment":u.v(a.b,"#777")
break
case"Id":u.v(a.b,"#111")
break
case"Num":u.v(a.b,"#191")
break
case"Preprocess":u.v(a.b,"#737")
break
case"Reserved":u.v(a.b,"#119")
break
case"Symbol":u.v(a.b,"#611")
break
case"Type":u.v(a.b,"#171")
break
case"Whitespace":u.v(a.b,"#111")
break}},
ay:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hn()
e.c=e.j(0,r)
u=e.j(0,r).l(0,q)
t=V.r(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).l(0,q)
u=V.r(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=e.j(0,r).l(0,p)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,p).l(0,p)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,p).l(0,o)
t=V.r(new H.o("."))
C.a.h(u.a,t)
t=e.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,r).l(0,m)
u=V.r(new H.o(l))
C.a.h(t.a,u)
u=e.j(0,m).l(0,m)
t=V.r(new H.o(l))
C.a.h(u.a,t)
t=e.j(0,r).l(0,k)
u=V.r(new H.o("/"))
C.a.h(t.a,u)
u=e.j(0,k).l(0,j)
t=V.r(new H.o("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).l(0,m).a,new V.aQ())
t=e.j(0,j).l(0,i)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,j).l(0,j)
t=new V.a5()
s=[V.aa]
t.sN(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,h)
t=V.r(new H.o("#"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,h)
u=new V.a5()
u.sN(H.c([],s))
C.a.h(t.a,u)
t=V.r(new H.o("\n"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,g)
u=V.r(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,f)
t=V.r(new H.o(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).l(0,f)
u=V.r(new H.o(" \n\t"))
C.a.h(t.a,u)
u=e.j(0,p)
u.d=u.a.B("Num")
u=e.j(0,n)
u.d=u.a.B("Num")
u=e.j(0,m)
u.d=u.a.B("Symbol")
u=e.j(0,i)
u.d=u.a.B(j)
u=e.j(0,g)
u.d=u.a.B(h)
u=e.j(0,f)
u.d=u.a.B(f)
u=e.j(0,q)
u=u.d=u.a.B(q)
t=[P.e]
u.a6(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a6(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a6(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.f1.prototype={
aB:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.v(a.b,"#911")
u.v("=",t)
break
case"Id":u.v(a.b,t)
break
case"Other":u.v(a.b,t)
break
case"Reserved":u.v(a.b,"#119")
break
case"String":u.v(a.b,"#171")
break
case"Symbol":u.v(a.b,"#616")
break}},
ay:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hn()
l.c=l.j(0,s)
u=l.j(0,s).l(0,r)
t=V.r(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).l(0,r)
u=V.r(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).l(0,q)
t=V.r(new H.o("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).l(0,p)
t=V.r(new H.o("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).l(0,p)
u=V.r(new H.o("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).l(0,o)
t=V.r(new H.o('"'))
C.a.h(u.a,t)
t=l.j(0,o).l(0,n)
u=V.r(new H.o('"'))
C.a.h(t.a,u)
u=l.j(0,o).l(0,"EscStr")
t=V.r(new H.o("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").l(0,o)
u=V.r(new H.o('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).l(0,o).a,new V.aQ())
C.a.h(l.j(0,s).l(0,m).a,new V.aQ())
u=l.j(0,m).l(0,m)
t=new V.a5()
t.sN(H.c([],[V.aa]))
C.a.h(u.a,t)
u=V.r(new H.o('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,p)
u.d=u.a.B("Symbol")
u=l.j(0,n)
u.d=u.a.B("String")
u=l.j(0,r)
t=u.a.B(r)
u.d=t
t.a6(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.B(q)
t=l.j(0,m)
t.d=t.a.B(m)
return l}}
V.fK.prototype={
c4:function(a,b){H.q(b,"$ib",[P.e],"$ab")
this.saP(H.c([],[[P.b,W.af]]))
this.v(C.a.l(b,"\n"),"#111")},
aB:function(a){},
ay:function(){return}}
V.h_.prototype={
cI:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
r=W.l
W.Y(q,"scroll",H.j(new V.h1(o),{func:1,ret:-1,args:[r]}),!1,r)},
bL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.q(a,"$ib",[P.e],"$ab")
this.eb()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cj(C.a.eL(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.mn(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
t.appendChild(l)}else{k=P.kn(C.p,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
cq:function(a){var u,t,s,r=new V.eC("dart")
r.as("dart")
u=new V.f0("glsl")
u.as("glsl")
t=new V.f1("html")
t.as("html")
s=C.a.eF(H.c([r,u,t],[V.b1]),new V.h2(a))
if(s!=null)return s
r=new V.fK("plain")
r.as("plain")
return r},
bJ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.q(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.js(r).aG(r,"+")){C.a.I(b0,s,C.c.aH(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aG(r,"-")){C.a.I(b0,s,C.c.aH(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cq(a8)
q.c4(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kn(C.p,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jE()
i.href="#"+m
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
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
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.I)(r),++a0)C.N.eo(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.I)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gG(r);a3.p();)c.appendChild(a3.gw(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
eb:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hn()
u.c=u.j(0,q)
t=u.j(0,q).l(0,p)
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).l(0,p)
s=new V.a5()
r=[V.aa]
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,p).l(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,o)
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).l(0,o)
s=new V.a5()
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,o).l(0,n)
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,m)
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).l(0,m)
s=new V.a5()
s.sN(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,m).l(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,l)
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).l(0,k)
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,l).l(0,j)
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).l(0,l)
t=new V.a5()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,k).l(0,j)
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).l(0,k)
t=new V.a5()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).l(0,i).a,new V.aQ())
s=u.j(0,i).l(0,i)
t=new V.a5()
t.sN(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.B(p)
s=u.j(0,n)
s.d=s.a.B(o)
s=u.j(0,"CodeEnd")
s.d=s.a.B(m)
s=u.j(0,j)
s.d=s.a.B("Link")
s=u.j(0,i)
s.d=s.a.B(i)
this.b=u}}
V.h1.prototype={
$1:function(a){P.k8(C.i,new V.h0(this.a))},
$S:37}
V.h0.prototype={
$0:function(){var u=C.b.W(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.h2.prototype={
$1:function(a){return H.n(a,"$ib1").a===this.a},
$S:38}
R.iX.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.bJ("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bJ("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.cz=u.i
u=J.cU.prototype
u.cB=u.i
u=P.h.prototype
u.cA=u.aD
u=W.J.prototype
u.aI=u.T
u=W.dT.prototype
u.cD=u.Z
u=V.cZ.prototype
u.cC=u.a3
u.bf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lW","lE",10)
u(P,"lX","lF",10)
u(P,"lY","lG",10)
t(P,"kw","lU",1)
s(W,"m7",4,null,["$4"],["lI"],19,0)
s(W,"m8",4,null,["$4"],["lJ"],19,0)
var m
r(m=E.a1.prototype,"gc2",0,0,null,["$1","$0"],["c3","eW"],2,0)
r(m,"gc0",0,0,null,["$1","$0"],["c1","eV"],2,0)
r(m,"gbZ",0,0,null,["$1","$0"],["c_","eS"],2,0)
q(m,"geQ","eR",5)
q(m,"geT","eU",5)
r(m=E.df.prototype,"gbh",0,0,null,["$1","$0"],["bj","bi"],2,0)
p(m,"gf7","ca",1)
o(m=X.dl.prototype,"gdv","dw",7)
o(m,"gdh","di",7)
o(m,"gdn","dq",3)
o(m,"gdB","dC",20)
o(m,"gdz","dA",20)
o(m,"gdE","dF",3)
o(m,"gdI","dJ",3)
o(m,"gdt","du",3)
o(m,"gdG","dH",3)
o(m,"gdr","ds",3)
o(m,"gdK","dL",33)
o(m,"gdM","dN",7)
o(m,"gdV","dW",8)
o(m,"gdR","dS",8)
o(m,"gdT","dU",8)
n(V.aN.prototype,"gk","b4",21)
n(V.S.prototype,"gk","b4",21)
r(m=U.c_.prototype,"gbk",0,0,null,["$1","$0"],["R","cM"],2,0)
q(m,"gdf","dg",22)
q(m,"gdP","dQ",22)
r(m=M.cO.prototype,"gX",0,0,null,["$1","$0"],["a_","cN"],2,0)
q(m,"gdj","dk",5)
q(m,"gdl","dm",5)
r(X.d4.prototype,"gbl",0,0,null,["$1","$0"],["a9","cR"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.j9,J.a,J.ae,P.dG,P.h,H.c1,P.az,H.bp,H.dk,H.hs,P.b6,H.bS,H.dY,P.W,H.ff,H.fg,H.fa,P.e3,P.aP,P.al,P.dp,P.ha,P.cc,P.hb,P.aK,P.a0,P.iJ,P.ix,P.bB,P.dF,P.t,P.bT,P.f4,P.iH,P.L,P.b5,P.Z,P.aR,P.fI,P.dc,P.dx,P.eZ,P.b7,P.b,P.G,P.E,P.a7,P.e,P.by,W.ey,W.be,W.v,W.d2,W.dT,W.iC,W.cQ,W.ab,W.iw,W.e8,P.ir,O.U,O.c2,E.es,E.a1,E.fO,E.df,Z.dn,Z.i_,Z.cH,Z.c0,Z.dm,D.ev,D.bY,D.C,X.cI,X.cV,X.fc,X.fi,X.c3,X.fv,X.ho,X.dl,V.b2,V.b3,V.eO,V.bb,V.a6,V.ag,V.d8,V.aN,V.S,M.cO,A.cD,A.en,A.dh,A.hD,F.V,F.eS,F.ba,F.fe,F.bt,F.db,F.fX,F.fY,F.fZ,F.aj,F.hP,F.hQ,F.hT,F.hV,F.hW,F.hX,O.bA,V.aQ,V.aa,V.cZ,V.fN,V.fW,V.ca,V.dg,V.ce,V.hm,X.cJ,X.de,X.d4,V.b1,V.h_])
s(J.a,[J.f7,J.f9,J.cU,J.aA,J.br,J.b8,H.c5,W.d,W.ek,W.cE,W.av,W.aw,W.K,W.dr,W.eD,W.eG,W.dt,W.cN,W.dv,W.eI,W.l,W.dy,W.ay,W.f2,W.dB,W.cY,W.fp,W.dH,W.dI,W.aD,W.dJ,W.dM,W.aE,W.dQ,W.dS,W.aH,W.dU,W.aI,W.dZ,W.ao,W.e1,W.hl,W.aL,W.e4,W.hq,W.hL,W.e9,W.eb,W.ed,W.ef,W.eh,P.aU,P.dD,P.aW,P.dO,P.fM,P.e_,P.aX,P.e6,P.eo,P.dq,P.cF,P.d6,P.bx,P.da,P.di,P.dW])
s(J.cU,[J.fJ,J.bd,J.b9])
t(J.j8,J.aA)
s(J.br,[J.cT,J.f8])
t(P.fh,P.dG)
s(P.fh,[H.dj,W.i7,W.a2,P.eV])
t(H.o,H.dj)
s(P.h,[H.eL,H.fl,H.cj])
s(H.eL,[H.bs,H.cW])
s(P.az,[H.fm,H.i0])
t(H.fn,H.bs)
s(P.b6,[H.fF,H.fb,H.hJ,H.hu,H.eu,H.fU,P.em,P.d3,P.at,P.hK,P.hI,P.cb,P.ew,P.eB])
s(H.bS,[H.j1,H.hh,H.iT,H.iU,H.iV,P.i3,P.i2,P.i4,P.i5,P.iG,P.iF,P.id,P.ii,P.ie,P.ig,P.ih,P.il,P.im,P.ik,P.ij,P.hc,P.hd,P.iL,P.iu,P.it,P.iv,P.fk,P.eJ,P.eK,W.eM,W.fr,W.ft,W.fT,W.h9,W.ic,W.fD,W.fC,W.iy,W.iz,W.iE,W.iI,P.iN,P.eW,P.eX,P.eq,E.fP,E.fQ,E.fR,E.hk,D.eP,D.eQ,F.j0,F.iO,F.hY,F.hR,F.hS,V.j_,V.h1,V.h0,V.h2,R.iX])
s(H.hh,[H.h7,H.bQ])
t(H.i1,P.em)
t(P.fj,P.W)
s(P.fj,[H.aB,W.i6])
t(H.d_,H.c5)
s(H.d_,[H.cn,H.cp])
t(H.co,H.cn)
t(H.c4,H.co)
t(H.cq,H.cp)
t(H.d0,H.cq)
s(H.d0,[H.fw,H.fx,H.fy,H.fz,H.fA,H.d1,H.fB])
t(P.is,P.iJ)
t(P.iq,P.ix)
t(P.bU,P.hb)
t(P.eN,P.bT)
s(P.bU,[P.f3,P.hN])
t(P.hM,P.eN)
s(P.Z,[P.w,P.y])
s(P.at,[P.bw,P.f5])
s(W.d,[W.x,W.eU,W.aG,W.cr,W.aJ,W.ap,W.ct,W.hZ,W.ck,P.er,P.bn])
s(W.x,[W.J,W.b0,W.cl])
s(W.J,[W.p,P.m])
s(W.p,[W.cC,W.el,W.bP,W.b_,W.bo,W.af,W.eY,W.fV,W.bz,W.dd,W.hf,W.hg,W.cd])
s(W.av,[W.bV,W.ez,W.eA])
t(W.ex,W.aw)
t(W.bW,W.dr)
t(W.du,W.dt)
t(W.cM,W.du)
t(W.dw,W.dv)
t(W.eH,W.dw)
t(W.ax,W.cE)
t(W.dz,W.dy)
t(W.eT,W.dz)
t(W.dC,W.dB)
t(W.bq,W.dC)
t(W.bc,W.l)
s(W.bc,[W.aC,W.X,W.aq])
t(W.fq,W.dH)
t(W.fs,W.dI)
t(W.dK,W.dJ)
t(W.fu,W.dK)
t(W.dN,W.dM)
t(W.c6,W.dN)
t(W.dR,W.dQ)
t(W.fL,W.dR)
t(W.fS,W.dS)
t(W.cs,W.cr)
t(W.h4,W.cs)
t(W.dV,W.dU)
t(W.h5,W.dV)
t(W.h8,W.dZ)
t(W.e2,W.e1)
t(W.hi,W.e2)
t(W.cu,W.ct)
t(W.hj,W.cu)
t(W.e5,W.e4)
t(W.hp,W.e5)
t(W.aO,W.X)
t(W.ea,W.e9)
t(W.i8,W.ea)
t(W.ds,W.cN)
t(W.ec,W.eb)
t(W.io,W.ec)
t(W.ee,W.ed)
t(W.dL,W.ee)
t(W.eg,W.ef)
t(W.iA,W.eg)
t(W.ei,W.eh)
t(W.iB,W.ei)
t(W.i9,W.i6)
t(W.ia,P.ha)
t(W.jf,W.ia)
t(W.ib,P.cc)
t(W.iD,W.dT)
t(P.ah,P.ir)
t(P.dE,P.dD)
t(P.fd,P.dE)
t(P.dP,P.dO)
t(P.fG,P.dP)
t(P.c8,P.m)
t(P.e0,P.e_)
t(P.he,P.e0)
t(P.e7,P.e6)
t(P.hr,P.e7)
t(P.ep,P.dq)
t(P.fH,P.bn)
t(P.dX,P.dW)
t(P.h6,P.dX)
s(E.es,[Z.cG,A.c9])
s(D.C,[D.cR,D.cS,D.R])
t(U.a4,D.ev)
s(U.a4,[U.cK,U.d9])
t(U.c_,O.U)
t(A.eF,A.c9)
s(A.dh,[A.hw,A.hz,A.hA,A.hC,A.hx,A.cg,A.hy,A.ch,A.hB,A.hE,A.hF,A.ci,A.hG,A.hH])
t(F.h3,F.eS)
t(F.hv,F.fe)
t(F.hU,F.hV)
t(F.fE,F.hW)
t(O.eE,O.bA)
s(V.cZ,[V.a5,V.cf])
t(X.f_,X.de)
s(V.b1,[V.eC,V.f0,V.f1,V.fK])
u(H.dj,H.dk)
u(H.cn,P.t)
u(H.co,H.bp)
u(H.cp,P.t)
u(H.cq,H.bp)
u(P.dG,P.t)
u(W.dr,W.ey)
u(W.dt,P.t)
u(W.du,W.v)
u(W.dv,P.t)
u(W.dw,W.v)
u(W.dy,P.t)
u(W.dz,W.v)
u(W.dB,P.t)
u(W.dC,W.v)
u(W.dH,P.W)
u(W.dI,P.W)
u(W.dJ,P.t)
u(W.dK,W.v)
u(W.dM,P.t)
u(W.dN,W.v)
u(W.dQ,P.t)
u(W.dR,W.v)
u(W.dS,P.W)
u(W.cr,P.t)
u(W.cs,W.v)
u(W.dU,P.t)
u(W.dV,W.v)
u(W.dZ,P.W)
u(W.e1,P.t)
u(W.e2,W.v)
u(W.ct,P.t)
u(W.cu,W.v)
u(W.e4,P.t)
u(W.e5,W.v)
u(W.e9,P.t)
u(W.ea,W.v)
u(W.eb,P.t)
u(W.ec,W.v)
u(W.ed,P.t)
u(W.ee,W.v)
u(W.ef,P.t)
u(W.eg,W.v)
u(W.eh,P.t)
u(W.ei,W.v)
u(P.dD,P.t)
u(P.dE,W.v)
u(P.dO,P.t)
u(P.dP,W.v)
u(P.e_,P.t)
u(P.e0,W.v)
u(P.e6,P.t)
u(P.e7,W.v)
u(P.dq,P.W)
u(P.dW,P.t)
u(P.dX,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b_.prototype
C.D=W.bo.prototype
C.E=W.af.prototype
C.H=J.a.prototype
C.a=J.aA.prototype
C.e=J.cT.prototype
C.b=J.br.prototype
C.c=J.b8.prototype
C.I=J.b9.prototype
C.M=W.c6.prototype
C.q=J.fJ.prototype
C.f=P.bx.prototype
C.N=W.bz.prototype
C.r=W.dd.prototype
C.l=J.bd.prototype
C.t=W.aO.prototype
C.u=W.ck.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.B=new P.fI()
C.h=new P.hM()
C.C=new P.hN()
C.d=new P.is()
C.i=new P.aR(0)
C.F=new P.aR(5e6)
C.G=new P.f4("element",!0,!1,!1,!1)
C.J=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.K=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.L=H.c(u([]),[P.e])
C.p=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.j=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.k=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{y:"int",w:"double",Z:"num",e:"String",L:"bool",E:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[W.X]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.h,E.a1]]},{func:1,ret:P.E,args:[D.C]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aq]},{func:1,ret:P.E,args:[F.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.L,args:[W.x]},{func:1,ret:P.E,args:[,]},{func:1,args:[,]},{func:1,ret:P.L,args:[W.ab]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.L,args:[W.J,P.e,P.e,W.be]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.h,U.a4]]},{func:1,ret:[P.al,,],args:[,]},{func:1,args:[W.l]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.E,args:[P.Z]},{func:1,ret:P.E,args:[,],opt:[P.a7]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:V.ag,args:[P.w]},{func:1,ret:P.E,args:[F.aj,P.w,P.w]},{func:1,ret:P.E,args:[P.aK]},{func:1,ret:P.E,args:[W.l]},{func:1,ret:P.L,args:[V.b1]},{func:1,ret:W.J,args:[W.x]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.au=0
$.bR=null
$.jF=null
$.ji=!1
$.kz=null
$.ku=null
$.kE=null
$.iP=null
$.iW=null
$.ju=null
$.bC=null
$.cv=null
$.cw=null
$.jj=!1
$.O=C.d
$.a8=[]
$.aS=null
$.j5=null
$.jN=null
$.jM=null
$.dA=P.jP(P.e,P.b7)
$.jT=null
$.jY=null
$.jZ=null
$.k3=null
$.kc=null
$.kh=null
$.ke=null
$.kf=null
$.kg=null
$.kd=null
$.jX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mw","kI",function(){return H.ky("_$dart_dartClosure")})
u($,"mx","jA",function(){return H.ky("_$dart_js")})
u($,"mC","kJ",function(){return H.aM(H.ht({
toString:function(){return"$receiver$"}}))})
u($,"mD","kK",function(){return H.aM(H.ht({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mE","kL",function(){return H.aM(H.ht(null))})
u($,"mF","kM",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mI","kP",function(){return H.aM(H.ht(void 0))})
u($,"mJ","kQ",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mH","kO",function(){return H.aM(H.ka(null))})
u($,"mG","kN",function(){return H.aM(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mL","kS",function(){return H.aM(H.ka(void 0))})
u($,"mK","kR",function(){return H.aM(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n_","jB",function(){return P.lD()})
u($,"n1","kX",function(){return P.lu("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n0","kW",function(){return P.jQ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mT","kV",function(){return Z.ak(0)})
u($,"mN","kT",function(){return Z.ak(511)})
u($,"mV","aZ",function(){return Z.ak(1)})
u($,"mU","bL",function(){return Z.ak(2)})
u($,"mP","bK",function(){return Z.ak(4)})
u($,"mW","bM",function(){return Z.ak(8)})
u($,"mX","bN",function(){return Z.ak(16)})
u($,"mQ","cz",function(){return Z.ak(32)})
u($,"mR","cA",function(){return Z.ak(64)})
u($,"mS","kU",function(){return Z.ak(96)})
u($,"mY","bO",function(){return Z.ak(128)})
u($,"mO","bJ",function(){return Z.ak(256)})
u($,"mv","kH",function(){return new V.eO(1e-9)})
u($,"mu","P",function(){return $.kH()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c5,ArrayBufferView:H.c5,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.fw,Int32Array:H.fx,Int8Array:H.fy,Uint16Array:H.fz,Uint32Array:H.fA,Uint8ClampedArray:H.d1,CanvasPixelArray:H.d1,Uint8Array:H.fB,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.ek,HTMLAnchorElement:W.cC,HTMLAreaElement:W.el,HTMLBaseElement:W.bP,Blob:W.cE,HTMLBodyElement:W.b_,HTMLCanvasElement:W.bo,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSNumericValue:W.bV,CSSUnitValue:W.bV,CSSPerspective:W.ex,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.bW,MSStyleCSSProperties:W.bW,CSS2Properties:W.bW,CSSImageValue:W.av,CSSKeywordValue:W.av,CSSPositionValue:W.av,CSSResourceValue:W.av,CSSURLImageValue:W.av,CSSStyleValue:W.av,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.ez,CSSUnparsedValue:W.eA,DataTransferItemList:W.eD,HTMLDivElement:W.af,DOMException:W.eG,ClientRectList:W.cM,DOMRectList:W.cM,DOMRectReadOnly:W.cN,DOMStringList:W.eH,DOMTokenList:W.eI,Element:W.J,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ax,FileList:W.eT,FileWriter:W.eU,HTMLFormElement:W.eY,Gamepad:W.ay,History:W.f2,HTMLCollection:W.bq,HTMLFormControlsCollection:W.bq,HTMLOptionsCollection:W.bq,KeyboardEvent:W.aC,Location:W.cY,MediaList:W.fp,MIDIInputMap:W.fq,MIDIOutputMap:W.fs,MimeType:W.aD,MimeTypeArray:W.fu,PointerEvent:W.X,MouseEvent:W.X,DragEvent:W.X,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c6,RadioNodeList:W.c6,Plugin:W.aE,PluginArray:W.fL,RTCStatsReport:W.fS,HTMLSelectElement:W.fV,SourceBuffer:W.aG,SourceBufferList:W.h4,SpeechGrammar:W.aH,SpeechGrammarList:W.h5,SpeechRecognitionResult:W.aI,Storage:W.h8,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableCellElement:W.bz,HTMLTableDataCellElement:W.bz,HTMLTableHeaderCellElement:W.bz,HTMLTableElement:W.dd,HTMLTableRowElement:W.hf,HTMLTableSectionElement:W.hg,HTMLTemplateElement:W.cd,TextTrack:W.aJ,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hi,TextTrackList:W.hj,TimeRanges:W.hl,Touch:W.aL,TouchEvent:W.aq,TouchList:W.hp,TrackDefaultList:W.hq,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.hL,VideoTrackList:W.hZ,WheelEvent:W.aO,Window:W.ck,DOMWindow:W.ck,Attr:W.cl,CSSRuleList:W.i8,ClientRect:W.ds,DOMRect:W.ds,GamepadList:W.io,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,SpeechRecognitionResultList:W.iA,StyleSheetList:W.iB,SVGLength:P.aU,SVGLengthList:P.fd,SVGNumber:P.aW,SVGNumberList:P.fG,SVGPointList:P.fM,SVGScriptElement:P.c8,SVGStringList:P.he,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aX,SVGTransformList:P.hr,AudioBuffer:P.eo,AudioParamMap:P.ep,AudioTrackList:P.er,AudioContext:P.bn,webkitAudioContext:P.bn,BaseAudioContext:P.bn,OfflineAudioContext:P.fH,WebGLBuffer:P.cF,WebGLProgram:P.d6,WebGL2RenderingContext:P.bx,WebGLShader:P.da,WebGLUniformLocation:P.di,SQLResultSetRowList:P.h6})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.kB,[])
else R.kB([])})})()
//# sourceMappingURL=test.dart.js.map
