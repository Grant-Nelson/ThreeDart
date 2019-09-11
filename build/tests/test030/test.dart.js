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
a[c]=function(){a[c]=function(){H.mE(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jo:function jo(){},
jl:function(){return new P.ch("No element")},
lv:function(){return new P.ch("Too many elements")},
p:function p(a){this.a=a},
f1:function f1(){},
by:function by(){},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
fy:function fy(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fz:function fz(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
ic:function ic(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(){},
dz:function dz(){},
dy:function dy(){},
bP:function(a){var u,t=H.E(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mk:function(a){return v.types[H.a5(a)]},
mr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iF},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.af(a)
if(typeof u!=="string")throw H.f(H.bK(a))
return u},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bA:function(a){return H.lA(a)+H.jB(H.bp(a),0,null)},
lA:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$icn){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bP(t.length>1&&C.b.al(t,0)===36?C.b.aY(t,1):t)},
kf:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lI:function(a){var u,t,s,r=H.c([],[P.C])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bK(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aL(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bK(s))}return H.kf(r)},
kg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bK(s))
if(s<0)throw H.f(H.bK(s))
if(s>65535)return H.lI(a)}return H.kf(a)},
jq:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aL(u,10))>>>0,56320|u&1023)}throw H.f(P.aJ(a,0,1114111,null,null))},
bz:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lH:function(a){var u=H.bz(a).getFullYear()+0
return u},
lF:function(a){var u=H.bz(a).getMonth()+1
return u},
lB:function(a){var u=H.bz(a).getDate()+0
return u},
lC:function(a){var u=H.bz(a).getHours()+0
return u},
lE:function(a){var u=H.bz(a).getMinutes()+0
return u},
lG:function(a){var u=H.bz(a).getSeconds()+0
return u},
lD:function(a){var u=H.bz(a).getMilliseconds()+0
return u},
A:function(a){throw H.f(H.bK(a))},
l:function(a,b){if(a==null)J.bs(a)
throw H.f(H.cD(a,b))},
cD:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,s,null)
u=H.a5(J.bs(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.R(b,a,s,null,u)
return P.h_(b,s)},
mg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bB(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bB(a,c,!0,b,"end",u)
return new P.as(!0,b,"end",null)},
bK:function(a){return new P.as(!0,a,null,null)},
mc:function(a){if(typeof a!=="number")throw H.f(H.bK(a))
return a},
f:function(a){var u
if(a==null)a=new P.df()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kW})
u.name=""}else u.toString=H.kW
return u},
kW:function(){return J.af(this.dartException)},
a6:function(a){throw H.f(a)},
D:function(a){throw H.f(P.b9(a))},
aQ:function(a){var u,t,s,r,q,p
a=H.kV(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ka:function(a,b){return new H.fR(a,b==null?null:b.method)},
jp:function(a,b){var u=b==null,t=u?null:b.method
return new H.fo(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aL(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jp(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ka(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kZ()
q=$.l_()
p=$.l0()
o=$.l1()
n=$.l4()
m=$.l5()
l=$.l3()
$.l2()
k=$.l7()
j=$.l6()
i=r.a_(u)
if(i!=null)return f.$1(H.jp(H.E(u),i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.jp(H.E(u),i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ka(H.E(u),i))}}return f.$1(new H.hY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dm()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.as(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dm()
return a},
bN:function(a){var u
if(a==null)return new H.ee(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ee(a)},
mj:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.O(0,a[u],a[t])}return b},
mq:function(a,b,c,d,e,f){H.k(a,"$ibc")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.X("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var u
H.a5(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mq)
a.$identity=u
return u},
lo:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hk().constructor.prototype):Object.create(new H.bU(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ay
if(typeof t!=="number")return t.B()
$.ay=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jW(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mk,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jV:H.jg
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jW(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
ll:function(a,b,c,d){var u=H.jg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ln(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ll(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.B()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.h(q==null?$.bV=H.eL("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.B()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.h(q==null?$.bV=H.eL("self"):q)+"."+H.h(u)+"("+o+");}")()},
lm:function(a,b,c,d){var u=H.jg,t=H.jV
switch(b?-1:a){case 0:throw H.f(H.lL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ln:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.eL("self")
u=$.jU
if(u==null)u=$.jU=H.eL("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lm(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.ay
if(typeof u!=="number")return u.B()
$.ay=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.ay
if(typeof u!=="number")return u.B()
$.ay=u+1
return new Function(n+u+"}")()},
jF:function(a,b,c,d,e,f,g){return H.lo(a,b,H.a5(c),d,!!e,!!f,g)},
jg:function(a){return a.a},
jV:function(a){return a.c},
eL:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.jm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
w:function(a){if(a==null)H.m8("boolean expression must not be null")
return a},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aw(a,"String"))},
nk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"double"))},
mw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"num"))},
jC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aw(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aw(a,"int"))},
kT:function(a,b){throw H.f(H.aw(a,H.bP(H.E(b).substring(2))))},
my:function(a,b){throw H.f(H.lk(a,H.bP(H.E(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.kT(a,b)},
ar:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.my(a,b)},
jL:function(a){if(a==null)return a
if(!!J.O(a).$ib)return a
throw H.f(H.aw(a,"List<dynamic>"))},
ms:function(a,b){var u
if(a==null)return a
u=J.O(a)
if(!!u.$ib)return a
if(u[b])return a
H.kT(a,b)},
kN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
eB:function(a,b){var u
if(typeof a=="function")return!0
u=H.kN(J.O(a))
if(u==null)return!1
return H.kE(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jy)return a
$.jy=!0
try{if(H.eB(a,b))return a
u=H.jb(b)
t=H.aw(a,u)
throw H.f(t)}finally{$.jy=!1}},
jG:function(a,b){if(a!=null&&!H.jE(a,b))H.a6(H.aw(a,H.jb(b)))
return a},
aw:function(a,b){return new H.hJ("TypeError: "+P.cU(a)+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
lk:function(a,b){return new H.eM("CastError: "+P.cU(a)+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
kI:function(a){var u,t=J.O(a)
if(!!t.$ibX){u=H.kN(t)
if(u!=null)return H.jb(u)
return"Closure"}return H.bA(a)},
m8:function(a){throw H.f(new H.id(a))},
mE:function(a){throw H.f(new P.eU(H.E(a)))},
lL:function(a){return new H.h7(a)},
kO:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bp:function(a){if(a==null)return
return a.$ti},
nl:function(a,b,c){return H.bO(a["$a"+H.h(c)],H.bp(b))},
cE:function(a,b,c,d){var u
H.E(c)
H.a5(d)
u=H.bO(a["$a"+H.h(c)],H.bp(b))
return u==null?null:u[d]},
ae:function(a,b,c){var u
H.E(b)
H.a5(c)
u=H.bO(a["$a"+H.h(b)],H.bp(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a5(b)
u=H.bp(a)
return u==null?null:u[b]},
jb:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
H.o(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bP(a[0].name)+H.jB(a,1,b)
if(typeof a=="function")return H.bP(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.h(b[t])}if('func' in a)return H.m1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.o(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.b.B(p,a0[n])
m=u[q]
if(m!=null&&m!==P.I)p+=" extends "+H.bo(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bo(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bo(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bo(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mi(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.E(b[h])
j=j+i+H.bo(e[d],a0)+(" "+H.h(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jB:function(a,b,c){var u,t,s,r,q,p
H.o(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bD("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.i(0)+">"},
bO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jD:function(a,b,c,d){var u,t
H.E(b)
H.jL(c)
H.E(d)
if(a==null)return!1
u=H.bp(a)
t=J.O(a)
if(t[b]==null)return!1
return H.kL(H.bO(t[d],u),null,c,null)},
o:function(a,b,c,d){H.E(b)
H.jL(c)
H.E(d)
if(a==null)return a
if(H.jD(a,b,c,d))return a
throw H.f(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bP(b.substring(2))+H.jB(c,0,null),v.mangledGlobalNames)))},
kL:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aq(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aq(a[t],b,c[t],d))return!1
return!0},
ni:function(a,b,c){return a.apply(b,H.bO(J.O(b)["$a"+H.h(c)],H.bp(b)))},
kQ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="G"||a===-1||a===-2||H.kQ(u)}return!1},
jE:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="G"||b===-1||b===-2||H.kQ(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eB(a,b)}u=J.O(a).constructor
t=H.bp(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aq(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jE(a,b))throw H.f(H.aw(a,H.jb(b)))
return a},
aq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.kE(a,b,c,d)
if('func' in a)return c.name==="bc"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aq("type" in a?a.type:l,b,s,d)
else if(H.aq(a,b,s,d))return!0
else{if(!('$i'+"c4" in t.prototype))return!1
r=t.prototype["$a"+"c4"]
q=H.bO(r,u?a.slice(1):l)
return H.aq(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kL(H.bO(m,u),b,p,d)},
kE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aq(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aq(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aq(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mv(h,b,g,d)},
mv:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aq(c[s],d,a[s],b))return!1}return!0},
nj:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
mt:function(a){var u,t,s,r,q=H.E($.kP.$1(a)),p=$.j2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.E($.kK.$2(a,q))
if(q!=null){p=$.j2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ja(u)
$.j2[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j8[q]=u
return u}if(s==="-"){r=H.ja(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kS(a,u)
if(s==="*")throw H.f(P.kt(q))
if(v.leafTags[q]===true){r=H.ja(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kS(a,u)},
kS:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jM(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ja:function(a){return J.jM(a,!1,null,!!a.$iF)},
mu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ja(u)
else return J.jM(u,c,null,null)},
mo:function(){if(!0===$.jK)return
$.jK=!0
H.mp()},
mp:function(){var u,t,s,r,q,p,o,n
$.j2=Object.create(null)
$.j8=Object.create(null)
H.mn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kU.$1(q)
if(p!=null){o=H.mu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mn:function(){var u,t,s,r,q,p,o=C.w()
o=H.bJ(C.x,H.bJ(C.y,H.bJ(C.o,H.bJ(C.o,H.bJ(C.z,H.bJ(C.A,H.bJ(C.B(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kP=new H.j5(r)
$.kK=new H.j6(q)
$.kU=new H.j7(p)},
bJ:function(a,b){return a(b)||b},
lx:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fd("Illegal RegExp pattern ("+String(r)+")",a))},
mB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jP:function(a,b,c){var u=H.mC(a,b,c)
return u},
mC:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kV(b),'g'),H.mh(c))},
hH:function hH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fR:function fR(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
jd:function jd(a){this.a=a},
ee:function ee(a){this.a=a
this.b=null},
bX:function bX(){},
hu:function hu(){},
hk:function hk(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(a){this.a=a},
eM:function eM(a){this.a=a},
h7:function h7(a){this.a=a},
id:function id(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function d3(a,b){this.a=a
this.$ti=b},
fs:function fs(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jx:function(a){return a},
bn:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cD(b,a))},
m0:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mg(a,b,c))
return b},
cb:function cb(){},
da:function da(){},
ca:function ca(){},
db:function db(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
dc:function dc(){},
fM:function fM(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
mi:function(a){return J.k1(a?Object.keys(a):[],null)},
mx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j4:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jK==null){H.mo()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kt("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jQ()]
if(r!=null)return r
r=H.mt(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jQ(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aJ(a,0,4294967295,"length",null))
return J.k1(new Array(a),b)},
k1:function(a,b){return J.jm(H.c(a,[b]))},
jm:function(a){H.jL(a)
a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d_.prototype
return J.cZ.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.fm.prototype
if(typeof a=="boolean")return J.fl.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.I)return a
return J.j4(a)},
jH:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.I)return a
return J.j4(a)},
j3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.I)return a
return J.j4(a)},
jI:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.cn.prototype
return a},
jJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.I)return a
return J.j4(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).n(a,b)},
ld:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jH(a).m(a,b)},
le:function(a,b,c,d){return J.jJ(a).eW(a,b,c,d)},
je:function(a,b){return J.j3(a).w(a,b)},
lf:function(a,b){return J.j3(a).K(a,b)},
lg:function(a){return J.jJ(a).gf0(a)},
bq:function(a){return J.O(a).gD(a)},
br:function(a){return J.j3(a).gN(a)},
bs:function(a){return J.jH(a).gl(a)},
jS:function(a){return J.j3(a).fE(a)},
lh:function(a,b,c){return J.jI(a).aH(a,b,c)},
li:function(a){return J.jI(a).fR(a)},
af:function(a){return J.O(a).i(a)},
a:function a(){},
fl:function fl(){},
fm:function fm(){},
d1:function d1(){},
fV:function fV(){},
cn:function cn(){},
bf:function bf(){},
aE:function aE(a){this.$ti=a},
jn:function jn(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d0:function d0(){},
d_:function d_(){},
cZ:function cZ(){},
bx:function bx(){}},P={
lQ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m9()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bL(new P.ig(s),1)).observe(u,{childList:true})
return new P.ie(s,u,t)}else if(self.setImmediate!=null)return P.ma()
return P.mb()},
lR:function(a){self.scheduleImmediate(H.bL(new P.ih(H.j(a,{func:1,ret:-1})),0))},
lS:function(a){self.setImmediate(H.bL(new P.ii(H.j(a,{func:1,ret:-1})),0))},
lT:function(a){P.js(C.i,H.j(a,{func:1,ret:-1}))},
js:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.d.aq(a.a,1000)
return P.lZ(u<0?0:u,b)},
kr:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aO]})
u=C.d.aq(a.a,1000)
return P.m_(u<0?0:u,b)},
lZ:function(a,b){var u=new P.ek()
u.de(a,b)
return u},
m_:function(a,b){var u=new P.ek()
u.df(a,b)
return u},
lU:function(a,b){var u,t,s
b.a=1
try{a.cO(new P.is(b),new P.it(b),null)}catch(s){u=H.aj(s)
t=H.bN(s)
P.mz(new P.iu(b,u,t))}},
kz:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iap")
if(u>=4){t=b.bl()
b.a=a.a
b.c=a.c
P.cr(b,t)}else{t=H.k(b.c,"$iaS")
b.a=2
b.c=a
a.cb(t)}},
cr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$ia7")
g=g.b
r=s.a
q=s.b
g.toString
P.iZ(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cr(h.a,b)}g=h.a
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
if(m){H.k(o,"$ia7")
g=g.b
r=o.a
q=o.b
g.toString
P.iZ(i,i,g,r,q)
return}l=$.T
if(l!=n)$.T=n
else l=i
g=b.c
if(g===8)new P.iy(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ix(u,b,o).$0()}else if((g&2)!==0)new P.iw(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.O(g).$ic4){if(g.a>=4){k=H.k(q.c,"$iaS")
q.c=null
b=q.aK(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kz(g,q)
return}}j=b.b
k=H.k(j.c,"$iaS")
j.c=null
b=j.aK(k)
g=u.a
r=u.b
if(!g){H.B(r,H.u(j,0))
j.a=4
j.c=r}else{H.k(r,"$ia7")
j.a=8
j.c=r}h.a=j
g=j}},
m4:function(a,b){if(H.eB(a,{func:1,args:[P.I,P.ac]}))return H.j(a,{func:1,ret:null,args:[P.I,P.ac]})
if(H.eB(a,{func:1,args:[P.I]}))return H.j(a,{func:1,ret:null,args:[P.I]})
throw H.f(P.jf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m3:function(){var u,t
for(;u=$.bI,u!=null;){$.cC=null
t=u.b
$.bI=t
if(t==null)$.cB=null
u.a.$0()}},
m7:function(){$.jz=!0
try{P.m3()}finally{$.cC=null
$.jz=!1
if($.bI!=null)$.jR().$1(P.kM())}},
kH:function(a){var u=new P.dG(H.j(a,{func:1,ret:-1}))
if($.bI==null){$.bI=$.cB=u
if(!$.jz)$.jR().$1(P.kM())}else $.cB=$.cB.b=u},
m6:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bI
if(u==null){P.kH(a)
$.cC=$.cB
return}t=new P.dG(a)
s=$.cC
if(s==null){t.b=u
$.bI=$.cC=t}else{t.b=s.b
$.cC=s.b=t
if(t.b==null)$.cB=t}},
mz:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.T
if(C.e===u){P.j0(t,t,C.e,a)
return}u.toString
P.j0(t,t,u,H.j(u.bp(a),s))},
kq:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.T
if(u===C.e){u.toString
return P.js(a,b)}return P.js(a,H.j(u.bp(b),t))},
lP:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aO]}
H.j(b,s)
u=$.T
if(u===C.e){u.toString
return P.kr(a,b)}t=u.cn(b,P.aO)
$.T.toString
return P.kr(a,H.j(t,s))},
iZ:function(a,b,c,d,e){var u={}
u.a=d
P.m6(new P.j_(u,e))},
kF:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
kG:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
m5:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
j0:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.bp(d):c.f1(d,-1)
P.kH(d)},
ig:function ig(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ek:function ek(){this.c=0},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d){var _=this
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
ap:function ap(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ir:function ir(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a){this.a=a
this.b=null},
hn:function hn(){},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
ci:function ci(){},
ho:function ho(){},
aO:function aO(){},
a7:function a7(a,b){this.a=a
this.b=b},
iW:function iW(){},
j_:function j_(a,b){this.a=a
this.b=b},
iF:function iF(){},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function(a,b){return new H.aF([a,b])},
ly:function(a){return H.mj(a,new H.aF([null,null]))},
d4:function(a){return new P.iD([a])},
jw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lY:function(a,b,c){var u=new P.dW(a,b,[c])
u.c=a.e
return u},
lu:function(a,b,c){var u,t
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.ad,a)
try{P.m2(a,u)}finally{if(0>=$.ad.length)return H.l($.ad,-1)
$.ad.pop()}t=P.ko(b,H.ms(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jk:function(a,b,c){var u,t
if(P.jA(a))return b+"..."+c
u=new P.bD(b)
C.a.h($.ad,a)
try{t=u
t.a=P.ko(t.a,a,", ")}finally{if(0>=$.ad.length)return H.l($.ad,-1)
$.ad.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function(a){var u,t
for(u=$.ad.length,t=0;t<u;++t)if(a===$.ad[t])return!0
return!1},
m2:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.o(b,"$ib",[P.e],"$ab")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.h(u.gG(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gG(u);++s
if(!u.t()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG(u);++s
for(;u.t();o=n,n=m){m=u.gG(u);++s
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
k3:function(a,b){var u,t,s=P.d4(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t)s.h(0,H.B(a[t],b))
return s},
k5:function(a){var u,t={}
if(P.jA(a))return"{...}"
u=new P.bD("")
try{C.a.h($.ad,a)
u.a+="{"
t.a=!0
J.lf(a,new P.fw(t,u))
u.a+="}"}finally{if(0>=$.ad.length)return H.l($.ad,-1)
$.ad.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iD:function iD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bH:function bH(a){this.a=a
this.c=this.b=null},
dW:function dW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ft:function ft(){},
t:function t(){},
fv:function fv(){},
fw:function fw(a,b){this.a=a
this.b=b},
a1:function a1(){},
iK:function iK(){},
dX:function dX(){},
bY:function bY(){},
c_:function c_(){},
f3:function f3(){},
fj:function fj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fi:function fi(a){this.a=a},
i0:function i0(){},
i1:function i1(){},
iU:function iU(a){this.b=0
this.c=a},
lt:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.bA(a)+"'"},
lz:function(a,b,c){var u,t
H.B(b,c)
u=J.lw(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.O(u,t,b)
return H.o(u,"$ib",[c],"$ab")},
k4:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.br(a);u.t();)C.a.h(s,H.B(u.gG(u),c))
if(b)return s
return H.o(J.jm(s),"$ib",t,"$ab")},
jr:function(a){var u,t,s=P.C
H.o(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.o(a,"$iaE",[s],"$aaE")
u=a.length
t=P.ki(0,null,u)
return H.kg(t<u?C.a.cY(a,0,t):a)}return P.lN(a,0,null)},
lN:function(a,b,c){var u,t,s
H.o(a,"$ii",[P.C],"$ai")
u=J.br(a)
for(t=0;t<b;++t)if(!u.t())throw H.f(P.aJ(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gG(u))
return H.kg(s)},
lJ:function(a){return new H.fn(a,H.lx(a,!1,!0,!1))},
ko:function(a,b,c){var u=J.br(b)
if(!u.t())return a
if(c.length===0){do a+=H.h(u.gG(u))
while(u.t())}else{a+=H.h(u.gG(u))
for(;u.t();)a=a+c+H.h(u.gG(u))}return a},
kD:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.o(a,"$ib",[P.C],"$ab")
if(c===C.h){u=$.lc().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.f4(H.B(b,H.ae(c,"bY",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jq(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lp:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cQ:function(a){if(a>=10)return""+a
return"0"+a},
jY:function(a,b){return new P.ba(1e6*b+1000*a)},
cU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lt(a)},
lj:function(a){return new P.as(!1,null,null,a)},
jf:function(a,b,c){return new P.as(!0,a,b,c)},
h_:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c){if(0>a||a>c)throw H.f(P.aJ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aJ(b,a,c,"end",null))
return b}return c},
kh:function(a,b){if(typeof a!=="number")return a.ah()
if(a<0)throw H.f(P.aJ(a,0,null,b,null))},
R:function(a,b,c,d,e){var u=H.a5(e==null?J.bs(b):e)
return new P.fk(u,!0,a,c,"Index out of range")},
an:function(a){return new P.hZ(a)},
kt:function(a){return new P.hX(a)},
kn:function(a){return new P.ch(a)},
b9:function(a){return new P.eP(a)},
X:function(a){return new P.dO(a)},
jO:function(a){H.mx(a)},
K:function K(){},
al:function al(a,b){this.a=a
this.b=b},
z:function z(){},
ba:function ba(a){this.a=a},
f_:function f_(){},
f0:function f0(){},
bb:function bb(){},
eE:function eE(){},
df:function df(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fk:function fk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hZ:function hZ(a){this.a=a},
hX:function hX(a){this.a=a},
ch:function ch(a){this.a=a},
eP:function eP(a){this.a=a},
fU:function fU(){},
dm:function dm(){},
eU:function eU(a){this.a=a},
dO:function dO(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
bc:function bc(){},
C:function C(){},
i:function i(){},
aD:function aD(){},
b:function b(){},
H:function H(){},
G:function G(){},
a0:function a0(){},
I:function I(){},
ac:function ac(){},
e:function e(){},
bD:function bD(a){this.a=a},
mf:function(a){var u,t=J.O(a)
if(!!t.$ibd){u=t.gcs(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ep(a.data,a.height,a.width)},
me:function(a){if(a instanceof P.ep)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.k2(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.E(t[r])
u.O(0,q,a[q])}return u},
md:function(a){var u={}
a.K(0,new P.j1(u))
return u},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(){},
fb:function fb(){},
iC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iE:function iE(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
fq:function fq(){},
b_:function b_(){},
fS:function fS(){},
fZ:function fZ(){},
ce:function ce(){},
hr:function hr(){},
n:function n(){},
b0:function b0(){},
hG:function hG(){},
dU:function dU(){},
dV:function dV(){},
e4:function e4(){},
e5:function e5(){},
eg:function eg(){},
eh:function eh(){},
en:function en(){},
eo:function eo(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(a){this.a=a},
eJ:function eJ(){},
bt:function bt(){},
fT:function fT(){},
dH:function dH(){},
cK:function cK(){},
di:function di(){},
bC:function bC(){},
dk:function dk(){},
dq:function dq(){},
dw:function dw(){},
hj:function hj(){},
ec:function ec(){},
ed:function ed(){}},W={
jT:function(){var u=document.createElement("a")
return u},
jh:function(){var u=document.createElement("canvas")
return u},
lr:function(a,b,c){var u=document.body,t=(u&&C.m).Z(u,a,b,c)
t.toString
u=W.y
u=new H.co(new W.a8(t),H.j(new W.f2(),{func:1,ret:P.K,args:[u]}),[u])
return H.k(u.gai(u),"$iJ")},
ls:function(a){H.k(a,"$id")
return"wheel"},
c2:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jJ(a)
t=u.gcL(a)
if(typeof t==="string")r=u.gcL(a)}catch(s){H.aj(s)}return r},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kB:function(a,b,c,d){var u=W.iB(W.iB(W.iB(W.iB(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a_:function(a,b,c,d,e){var u=W.kJ(new W.iq(c),W.m)
if(u!=null&&!0)J.le(a,b,u,!1)
return new W.ip(a,b,u,!1,[e])},
kA:function(a){var u=W.jT(),t=window.location
u=new W.bm(new W.iJ(u,t))
u.d9(a)
return u},
lV:function(a,b,c,d){H.k(a,"$iJ")
H.E(b)
H.E(c)
H.k(d,"$ibm")
return!0},
lW:function(a,b,c,d){var u,t,s
H.k(a,"$iJ")
H.E(b)
H.E(c)
u=H.k(d,"$ibm").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kC:function(){var u=P.e,t=P.k3(C.j,u),s=H.u(C.j,0),r=H.j(new W.iR(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.iQ(t,P.d4(u),P.d4(u),P.d4(u),null)
t.dd(null,new H.fz(C.j,r,[s,u]),q,null)
return t},
kJ:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.e)return a
return u.cn(a,b)},
q:function q(){},
eC:function eC(){},
cH:function cH(){},
eD:function eD(){},
bT:function bT(){},
cJ:function cJ(){},
b6:function b6(){},
bu:function bu(){},
bW:function bW(){},
b7:function b7(){},
c0:function c0(){},
eQ:function eQ(){},
L:function L(){},
c1:function c1(){},
eR:function eR(){},
az:function az(){},
aA:function aA(){},
eS:function eS(){},
eT:function eT(){},
eW:function eW(){},
am:function am(){},
eX:function eX(){},
cR:function cR(){},
cS:function cS(){},
eY:function eY(){},
eZ:function eZ(){},
ik:function ik(a,b){this.a=a
this.b=b},
J:function J(){},
f2:function f2(){},
m:function m(){},
d:function d(){},
aB:function aB(){},
f7:function f7(){},
f8:function f8(){},
fc:function fc(){},
aC:function aC(){},
fh:function fh(){},
bw:function bw(){},
bd:function bd(){},
c6:function c6(){},
aG:function aG(){},
d5:function d5(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(a){this.a=a},
aH:function aH(){},
fF:function fF(){},
a2:function a2(){},
a8:function a8(a){this.a=a},
y:function y(){},
cc:function cc(){},
aI:function aI(){},
fX:function fX(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
h8:function h8(){},
aK:function aK(){},
hh:function hh(){},
aL:function aL(){},
hi:function hi(){},
aM:function aM(){},
hl:function hl(){},
hm:function hm(a){this.a=a},
at:function at(){},
bE:function bE(){},
dn:function dn(){},
hs:function hs(){},
ht:function ht(){},
cj:function cj(){},
aN:function aN(){},
au:function au(){},
hv:function hv(){},
hw:function hw(){},
hA:function hA(){},
aP:function aP(){},
av:function av(){},
hE:function hE(){},
hF:function hF(){},
bk:function bk(){},
i_:function i_(){},
ia:function ia(){},
aR:function aR(){},
cp:function cp(){},
cq:function cq(){},
il:function il(){},
dJ:function dJ(){},
iA:function iA(){},
e1:function e1(){},
iN:function iN(){},
iO:function iO(){},
ij:function ij(){},
im:function im(a){this.a=a},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iq:function iq(a){this.a=a},
bm:function bm(a){this.a=a},
x:function x(){},
dd:function dd(a){this.a=a},
fO:function fO(a){this.a=a},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(){},
iL:function iL(){},
iM:function iM(){},
iQ:function iQ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(){},
iP:function iP(){},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ai:function ai(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
eq:function eq(a){this.a=a},
iV:function iV(a){this.a=a},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
cw:function cw(){},
cx:function cx(){},
ea:function ea(){},
eb:function eb(){},
ef:function ef(){},
ei:function ei(){},
ej:function ej(){},
cy:function cy(){},
cz:function cz(){},
el:function el(){},
em:function em(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){}},O={
jX:function(a){var u=new O.Y([a])
u.bN(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c8:function c8(){this.b=this.a=null},
de:function de(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bF:function bF(){}},E={
lK:function(a,b){var u=new E.h1(a)
u.d4(a,b)
return u},
lO:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibu)return E.kp(a,!0,!0,!0,!1)
u=W.jh()
t=u.style
t.width="100%"
t.height="100%"
s.gcp(a).h(0,u)
return E.kp(u,!0,!0,!0,!1)},
kp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ds(),j=H.k(C.f.bI(a,"webgl2",P.ly(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibC")
if(j==null)H.a6(P.X("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lK(j,a)
u=new T.hx(j)
H.a5(j.getParameter(3379))
u.c=H.a5(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dA(a)
t=new X.fp()
t.c=new X.ah(!1,!1,!1)
t.sev(P.d4(P.C))
u.b=t
t=new X.fG(u)
t.f=0
t.r=V.bi()
t.x=V.bi()
t.ch=t.Q=1
u.c=t
t=new X.fu(u)
t.r=0
t.x=V.bi()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hD(u)
t.f=V.bi()
t.r=V.bi()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sdA(H.c([],[[P.ci,P.I]]))
t=u.z
s=document
r=W.a2
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a_(s,"contextmenu",H.j(u.gdZ(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a_(a,"focus",H.j(u.ge4(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a_(a,"blur",H.j(u.gdT(),o),!1,p))
t=u.z
n=W.aG
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a_(s,"keyup",H.j(u.ge8(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a_(s,"keydown",H.j(u.ge6(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a_(a,"mousedown",H.j(u.geb(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a_(a,"mouseup",H.j(u.gef(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a_(a,l,H.j(u.ged(),q),!1,r))
n=u.z
m=W.aR;(n&&C.a).h(n,W.a_(a,H.E(W.ls(a)),H.j(u.geh(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a_(s,l,H.j(u.ge0(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a_(s,"mouseup",H.j(u.ge2(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a_(s,"pointerlockchange",H.j(u.gej(),o),!1,p))
p=u.z
o=W.av
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a_(a,"touchstart",H.j(u.ges(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a_(a,"touchend",H.j(u.geo(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a_(a,"touchmove",H.j(u.geq(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.al(Date.now(),!1)
k.cy=0
k.cc()
return k},
eK:function eK(){},
a9:function a9(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
ds:function ds(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hz:function hz(a){this.a=a}},Z={
ju:function(a,b,c){var u
H.o(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.jx(c)),35044)
a.bindBuffer(b,null)
return new Z.dF(b,u)},
ao:function(a){return new Z.bl(a)},
dF:function dF(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ib:function ib(a){this.a=a},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
Q:function(){var u=new D.c3()
u.sa8(null)
u.saz(null)
u.c=null
u.d=0
return u},
eN:function eN(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
v:function v(){this.b=null},
cX:function cX(a){this.b=null
this.$ti=a},
cY:function cY(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="modifiers",a3=34067,a4=V.lM("Test 030"),a5=W.jh()
a5.className="pageLargeCanvas"
a5.id=a0
a4.a.appendChild(a5)
u=[P.e]
a4.cl(H.c(["A test of the Normal shader for dynamically rendering normal maps."],u))
a4.cl(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a0)
if(t==null)H.a6(P.X("Failed to find an element with the identifier, testCanvas."))
s=E.lO(t,!0,!0,!0,!1)
r=new E.a9()
r.a=""
r.b=!0
u=E.a9
r.sdr(0,O.jX(u))
r.y.aV(r.gfn(),r.gfq())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbK(0,a1)
r.saE(a1)
q=F.km()
F.cA(q,a1,a1,1,1,1,0,0,1)
F.cA(q,a1,a1,1,1,0,1,0,3)
F.cA(q,a1,a1,1,1,0,0,1,2)
F.cA(q,a1,a1,1,1,-1,0,0,0)
F.cA(q,a1,a1,1,1,0,-1,0,0)
F.cA(q,a1,a1,1,1,0,0,-1,3)
q.as()
r.sbK(0,q)
p=new U.c5()
p.bN(U.a3)
p.aV(p.gdR(),p.gem())
p.e=null
p.f=V.d9()
p.r=0
o=s.r
n=new U.dC()
m=U.ji()
m.sbH(0,!0)
m.sbA(6.283185307179586)
m.sbC(0)
m.sX(0,0)
m.sbB(100)
m.sM(0)
m.sbv(0.5)
n.b=m
l=n.gao()
m.gp().h(0,l)
m=U.ji()
m.sbH(0,!0)
m.sbA(6.283185307179586)
m.sbC(0)
m.sX(0,0)
m.sbB(100)
m.sM(0)
m.sbv(0.5)
n.c=m
m.gp().h(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.ah(!1,!1,!1)
j=n.d
n.d=k
m=[X.ah]
l=new D.M(a2,j,k,m)
l.b=!0
n.J(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.M("invertX",l,!1,[P.K])
l.b=!0
n.J(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.M("invertY",l,!1,[P.K])
l.b=!0
n.J(l)}n.aC(o)
p.h(0,n)
o=s.r
n=new U.dB()
l=U.ji()
l.sbH(0,!0)
l.sbA(6.283185307179586)
l.sbC(0)
l.sX(0,0)
l.sbB(100)
l.sM(0)
l.sbv(0.2)
n.b=l
l.gp().h(0,n.gao())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ah(!0,!1,!1)
j=n.c
n.c=k
l=new D.M(a2,j,k,m)
l.b=!0
n.J(l)
n.aC(o)
p.h(0,n)
o=s.r
n=new U.dD()
n.c=0.01
n.e=n.d=0
k=new X.ah(!1,!1,!1)
n.b=k
m=new D.M(a2,a1,k,m)
m.b=!0
n.J(m)
n.aC(o)
p.h(0,n)
r.saE(p)
i=new O.de()
p=$.k6
i.b=p==null?$.k6=new V.d8(1,0,0,0,1,0,0,0,1):p
i.c=V.d9()
i.d=new A.bZ(!1,!1,!1)
i.cd(a1)
i.ce(a1)
i.bS()
i.r=null
p=s.f
o=p.a
h=o.createTexture()
o.bindTexture(a3,h)
o.texParameteri(a3,10242,10497)
o.texParameteri(a3,10243,10497)
o.texParameteri(a3,10241,9729)
o.texParameteri(a3,10240,9729)
o.bindTexture(a3,a1)
g=new T.dr()
g.a=0
g.b=h
g.c=!1
g.d=0
p.an(g,h,"../resources/diceBumpMap/posx.png",34069,!1,!1)
p.an(g,h,"../resources/diceBumpMap/negx.png",34070,!1,!1)
p.an(g,h,"../resources/diceBumpMap/posy.png",34071,!1,!1)
p.an(g,h,"../resources/diceBumpMap/negy.png",34072,!1,!1)
p.an(g,h,"../resources/diceBumpMap/posz.png",34073,!1,!1)
p.an(g,h,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(!i.d.c){i.d=new A.bZ(!1,!1,!0)
i.cd(a1)
i.a=null}i.ce(g)
f=X.k0(a1)
e=new V.aU(0.5,0.5,1,1)
if(!f.a.n(0,e)){j=f.a
f.a=e
p=new D.M("color",j,e,[V.aU])
p.b=!0
o=f.x
if(o!=null)o.A(p)}d=new M.cT()
d.a=!0
d.sda(0,O.jX(u))
d.e.aV(d.gdV(),d.gdX())
d.y=d.x=d.r=d.f=null
c=X.k0(a1)
b=new X.dg()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saE(a1)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.P().a)){b.c=1.0471975511965976
u=new D.M("fov",u,1.0471975511965976,[P.z])
u.b=!0
b.ak(u)}u=b.d
if(!(Math.abs(u-0.1)<$.P().a)){b.d=0.1
u=new D.M("near",u,0.1,[P.z])
u.b=!0
b.ak(u)}u=b.e
if(!(Math.abs(u-2000)<$.P().a)){b.e=2000
u=new D.M("far",u,2000,[P.z])
u.b=!0
b.ak(u)}u=d.b
if(u!==b){if(u!=null)u.gp().R(0,d.ga2())
j=d.b
d.b=b
b.gp().h(0,d.ga2())
u=new D.M("camera",j,d.b,[X.cO])
u.b=!0
d.a6(u)}d.scM(0,c)
d.scN(a1)
d.scN(i)
d.scM(0,f)
d.e.h(0,r)
u=d.b
a=V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=new U.cP()
p.a=a
u.saE(p)
u=s.d
if(u!==d){if(u!=null)u.gp().R(0,s.gbO())
s.d=d
d.gp().h(0,s.gbO())
s.bP()}u=s.z
if(u==null)u=s.z=D.Q()
p={func:1,ret:-1,args:[D.v]}
o=H.j(new D.j9(a4,i),p)
if(u.b==null)u.saz(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.mA(s)},
j9:function j9(a,b){this.a=a
this.b=b}},X={cN:function cN(a,b){this.a=a
this.b=b},d2:function d2(a,b){this.a=a
this.b=b},fp:function fp(){var _=this
_.d=_.c=_.b=_.a=null},d6:function d6(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fu:function fu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},aZ:function aZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fG:function fG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c9:function c9(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fY:function fY(){},du:function du(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hD:function hD(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dA:function dA(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k0:function(a){var u=new X.fe(),t=new V.aU(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kk
if(t==null){t=V.kj(0,0,1,1)
$.kk=t}u.r=t
return u},
cO:function cO(){},
fe:function fe(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){}},V={
mF:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cV(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.b.a0("null",c)
return C.b.a0(C.c.cP(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
bM:function(a,b,c){var u,t,s,r,q,p
H.o(a,"$ib",[P.z],"$ab")
u=H.c([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.O(u,p,C.b.a0(u[p],s))}return u},
jN:function(a){return C.c.fO(Math.pow(2,C.I.bw(Math.log(H.mc(a))/Math.log(2))))},
d9:function(){var u=$.k7
return u==null?$.k7=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bi:function(){var u=$.kd
return u==null?$.kd=new V.a4(0,0):u},
kj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dj(a,b,c,d)},
dE:function(){var u=$.kx
return u==null?$.kx=new V.V(0,0,0):u},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
d8:function d8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bg:function bg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
S:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.X("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.al(a,0)
t=C.b.al(b,0)
s=new V.h0()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.h9()
u.d5(a)
return u},
hC:function(){var u=new V.hB(),t=P.e
u.seJ(new H.aF([t,V.cg]))
u.seM(new H.aF([t,V.cl]))
u.c=null
return u},
aT:function aT(){},
ag:function ag(){},
d7:function d7(){},
aa:function aa(){this.a=null},
h0:function h0(){this.b=this.a=null},
h9:function h9(){this.a=null},
cg:function cg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.b=a
this.c=null},
hB:function hB(){this.c=this.b=this.a=null},
cm:function cm(a){this.b=a
this.a=this.c=null},
mA:function(a){P.lP(C.F,new V.jc(a))},
lM:function(a){var u=new V.hd()
u.d7(a,!0)
return u},
b8:function b8(){},
jc:function jc(a){this.a=a},
eV:function eV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ff:function ff(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fg:function fg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(){this.b=this.a=null},
hf:function hf(a){this.a=a},
he:function he(a){this.a=a},
hg:function hg(a){this.a=a}},U={
ji:function(){var u=new U.eO()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eO:function eO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cP:function cP(){this.b=this.a=null},
c5:function c5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dB:function dB(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
k9:function(a){var u,t=a.c,s=a.c,r="Normal_"+a.gfU(a),q=$.b4(),p=$.b3()
p=q.a|p.a
u=new Z.bl(p)
if(t)u=new Z.bl(p|$.b2().a)
return new A.fQ(a,t,!1,s,r,s?new Z.bl(u.a|$.b5().a):u)},
jt:function(a,b,c,d,e){var u=new A.hM(a,c,e)
u.f=d
u.seU(P.lz(d,0,P.C))
return u},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fQ:function fQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cf:function cf(){},
dv:function dv(){},
hT:function hT(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iY:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cA:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.V(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.V(u+a3,t+a1,s+a2)
q=new V.V(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.V(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iY(i)
l=F.iY(j.b)
k=F.mD(d,a0,new F.iX(j,F.iY(j.c),F.iY(j.d),l,m,c),b)
if(k!=null)a.fm(k)},
mD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.ax,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.km()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.ck(new V.aU(p,0,0,1),new V.a4(r,1))
c.$3(o,r,0)
C.a.h(t,o.bu(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.ck(new V.aU(j,i,h,1),new V.a4(r,m))
c.$3(o,r,n)
C.a.h(t,o.bu(d))}}u.d.eX(a+1,b+1,t)
return u},
cV:function(a,b,c){var u=new F.Z(),t=a.a
if(t==null)H.a6(P.X("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a6(P.X("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
km:function(){var u=new F.dl(),t=new F.i2(u)
t.b=!1
t.seV(H.c([],[F.ax]))
u.a=t
t=new F.hc(u)
t.sbj(H.c([],[F.bh]))
u.b=t
t=new F.hb(u)
t.sdH(H.c([],[F.aX]))
u.c=t
t=new F.ha(u)
t.sdB(H.c([],[F.Z]))
u.d=t
u.e=null
return u},
ky:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ax(),r=new F.i7()
r.sbj(H.c([],[F.bh]))
s.b=r
r=new F.i6()
u=[F.aX]
r.sdI(H.c([],u))
r.sdJ(H.c([],u))
s.c=r
r=new F.i3()
u=[F.Z]
r.sdC(H.c([],u))
r.sdD(H.c([],u))
r.sdE(H.c([],u))
s.d=r
h=$.l8()
s.e=0
r=$.b4()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b3().a)!==0?e:t
s.x=(u&$.b2().a)!==0?b:t
s.y=(u&$.bR().a)!==0?f:t
s.z=(u&$.b5().a)!==0?g:t
s.Q=(u&$.l9().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.bQ().a)!==0?a:t
return s},
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Z:function Z(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aX:function aX(){this.b=this.a=null},
bh:function bh(){this.a=null},
dl:function dl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a
this.b=null},
hb:function hb(a){this.a=a
this.b=null},
hc:function hc(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
i8:function i8(a){this.a=a},
i2:function i2(a){this.a=a
this.c=this.b=null},
i3:function i3(){this.d=this.c=this.b=null},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(){this.c=this.b=null},
i7:function i7(){this.b=null}},T={ck:function ck(){},dr:function dr(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hx:function hx(a){var _=this
_.a=a
_.e=_.d=_.c=null},hy:function hy(a,b,c,d,e,f,g){var _=this
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
H.jo.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.bA(a)+"'"}}
J.fl.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iK:1}
J.fm.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0}}
J.d1.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.fV.prototype={}
J.cn.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.kY()]
if(u==null)return this.d0(a)
return"JavaScript function for "+H.h(J.af(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibc:1}
J.aE.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a6(P.an("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.a6(P.an("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b9(a))}},
k:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.O(t,u,H.h(a[u]))
return t.join(b)},
fj:function(a){return this.k(a,"")},
fe:function(a,b){var u,t,s
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.w(b.$1(s)))return s
if(a.length!==u)throw H.f(P.b9(a))}throw H.f(H.jl())},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
cY:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aJ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aJ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jl())},
cm:function(a,b){var u,t
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.w(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.b9(a))}return!1},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.jk(a,"[","]")},
gN:function(a){return new J.ak(a,a.length,[H.u(a,0)])},
gD:function(a){return H.cd(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.a6(P.an("set length"))
if(b<0)throw H.f(P.aJ(b,0,null,"newLength",null))
a.length=b},
O:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a6(P.an("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cD(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.jn.prototype={}
J.ak.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.D(s))
u=t.c
if(u>=r){t.sc4(null)
return!1}t.sc4(s[u]);++t.c
return!0},
sc4:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
J.d0.prototype={
fO:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.an(""+a+".toInt()"))},
bw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.an(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.an(""+a+".round()"))},
cP:function(a,b){var u,t
if(b>20)throw H.f(P.aJ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cV:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cf(a,b)},
aq:function(a,b){return(a|0)===a?a/b|0:this.cf(a,b)},
cf:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.an("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aL:function(a,b){var u
if(a>0)u=this.eI(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eI:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia0:1}
J.d_.prototype={$iC:1}
J.cZ.prototype={}
J.bx.prototype={
bt:function(a,b){if(b<0)throw H.f(H.cD(a,b))
if(b>=a.length)H.a6(H.cD(a,b))
return a.charCodeAt(b)},
al:function(a,b){if(b>=a.length)throw H.f(H.cD(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.f(P.jf(b,null,null))
return a+b},
aX:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aH:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.h_(b,null))
if(b>c)throw H.f(P.h_(b,null))
if(c>a.length)throw H.f(P.h_(c,null))
return a.substring(b,c)},
aY:function(a,b){return this.aH(a,b,null)},
fR:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a0:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikb:1,
$ie:1}
H.p.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.b.bt(this.a,b)},
$adz:function(){return[P.C]},
$at:function(){return[P.C]},
$ai:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.f1.prototype={}
H.by.prototype={
gN:function(a){var u=this
return new H.c7(u,u.gl(u),[H.ae(u,"by",0)])},
aU:function(a,b){return this.d_(0,H.j(b,{func:1,ret:P.K,args:[H.ae(this,"by",0)]}))}}
H.c7.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.jH(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.b9(s))
u=t.c
if(u>=q){t.sax(null)
return!1}t.sax(r.w(s,u));++t.c
return!0},
sax:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
H.fx.prototype={
gN:function(a){return new H.fy(J.br(this.a),this.b,this.$ti)},
gl:function(a){return J.bs(this.a)},
w:function(a,b){return this.b.$1(J.je(this.a,b))},
$ai:function(a,b){return[b]}}
H.fy.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.sax(u.c.$1(t.gG(t)))
return!0}u.sax(null)
return!1},
gG:function(a){return this.a},
sax:function(a){this.a=H.B(a,H.u(this,1))},
$aaD:function(a,b){return[b]}}
H.fz.prototype={
gl:function(a){return J.bs(this.a)},
w:function(a,b){return this.b.$1(J.je(this.a,b))},
$aby:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.co.prototype={
gN:function(a){return new H.ic(J.br(this.a),this.b,this.$ti)}}
H.ic.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.w(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.bv.prototype={}
H.dz.prototype={}
H.dy.prototype={}
H.hH.prototype={
a_:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fo.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jd.prototype={
$1:function(a){if(!!J.O(a).$ibb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.ee.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iac:1}
H.bX.prototype={
i:function(a){return"Closure '"+H.bA(this).trim()+"'"},
$ibc:1,
gfV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hu.prototype={}
H.hk.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bP(u)+"'"}}
H.bU.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gD:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.bq(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bA(u)+"'")}}
H.hJ.prototype={
i:function(a){return this.a}}
H.eM.prototype={
i:function(a){return this.a}}
H.h7.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.id.prototype={
i:function(a){return"Assertion failed: "+P.cU(this.a)}}
H.aF.prototype={
gl:function(a){return this.a},
gV:function(a){return new H.d3(this,[H.u(this,0)])},
cr:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.c1(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.c1(t,b)}else return s.fh(b)},
fh:function(a){var u=this.d
if(u==null)return!1
return this.bx(this.b6(u,J.bq(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aJ(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aJ(r,b)
s=t==null?null:t.b
return s}else return q.fi(b)},
fi:function(a){var u,t,s=this.d
if(s==null)return
u=this.b6(s,J.bq(a)&0x3ffffff)
t=this.bx(u,a)
if(t<0)return
return u[t].b},
O:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bV(u==null?o.b=o.bh():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bV(t==null?o.c=o.bh():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bh()
r=J.bq(b)&0x3ffffff
q=o.b6(s,r)
if(q==null)o.bm(s,r,[o.bi(b,c)])
else{p=o.bx(q,b)
if(p>=0)q[p].b=c
else q.push(o.bi(b,c))}}},
K:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.b9(s))
u=u.c}},
bV:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.aJ(a,b)
if(u==null)t.bm(a,b,t.bi(b,c))
else u.b=c},
dh:function(){this.r=this.r+1&67108863},
bi:function(a,b){var u,t=this,s=new H.fr(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dh()
return s},
bx:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.k5(this)},
aJ:function(a,b){return a[b]},
b6:function(a,b){return a[b]},
bm:function(a,b,c){a[b]=c},
dw:function(a,b){delete a[b]},
c1:function(a,b){return this.aJ(a,b)!=null},
bh:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bm(t,u,t)
this.dw(t,u)
return t}}
H.fr.prototype={}
H.d3.prototype={
gl:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fs(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fs.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b9(t))
else{t=u.c
if(t==null){u.sbU(null)
return!1}else{u.sbU(t.a)
u.c=u.c.c
return!0}}},
sbU:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
H.j5.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.j6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.j7.prototype={
$1:function(a){return this.a(H.E(a))},
$S:31}
H.fn.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikb:1}
H.cb.prototype={$in_:1}
H.da.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.ca.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]},
$abv:function(){return[P.z]},
$at:function(){return[P.z]},
$ii:1,
$ai:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.db.prototype={
$abv:function(){return[P.C]},
$at:function(){return[P.C]},
$ii:1,
$ai:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.fH.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fI.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fJ.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fK.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fL.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.dc.prototype={
gl:function(a){return a.length},
m:function(a,b){H.bn(b,a,a.length)
return a[b]},
$in0:1}
H.fM.prototype={
gl:function(a){return a.length},
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.cs.prototype={}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
P.ig.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ie.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.ih.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ii.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ek.prototype={
de:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bL(new P.iT(this,b),0),a)
else throw H.f(P.an("`setTimeout()` not found."))},
df:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bL(new P.iS(this,a,Date.now(),b),0),a)
else throw H.f(P.an("Periodic timer."))},
$iaO:1}
P.iT.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iS.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.d3(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.aS.prototype={
fl:function(a){if(this.c!==6)return!0
return this.b.b.bF(H.j(this.d,{func:1,ret:P.K,args:[P.I]}),a.a,P.K,P.I)},
fg:function(a){var u=this.e,t=P.I,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.eB(u,{func:1,args:[P.I,P.ac]}))return H.jG(r.fI(u,a.a,a.b,null,t,P.ac),s)
else return H.jG(r.bF(H.j(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.ap.prototype={
cO:function(a,b,c){var u,t,s,r=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.T
if(u!==C.e){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.m4(b,u)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.ap($.T,[c])
s=b==null?1:3
this.bW(new P.aS(t,s,a,b,[r,c]))
return t},
fN:function(a,b){return this.cO(a,null,b)},
bW:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iaS")
t.c=a}else{if(s===2){u=H.k(t.c,"$iap")
s=u.a
if(s<4){u.bW(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.j0(null,null,s,H.j(new P.ir(t,a),{func:1,ret:-1}))}},
cb:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iaS")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iap")
u=q.a
if(u<4){q.cb(a)
return}p.a=u
p.c=q.c}o.a=p.aK(a)
u=p.b
u.toString
P.j0(null,null,u,H.j(new P.iv(o,p),{func:1,ret:-1}))}},
bl:function(){var u=H.k(this.c,"$iaS")
this.c=null
return this.aK(u)},
aK:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bZ:function(a){var u,t,s=this,r=H.u(s,0)
H.jG(a,{futureOr:1,type:r})
u=s.$ti
if(H.jD(a,"$ic4",u,"$ac4"))if(H.jD(a,"$iap",u,null))P.kz(a,s)
else P.lU(a,s)
else{t=s.bl()
H.B(a,r)
s.a=4
s.c=a
P.cr(s,t)}},
c_:function(a,b){var u,t=this
H.k(b,"$iac")
u=t.bl()
t.a=8
t.c=new P.a7(a,b)
P.cr(t,u)},
$ic4:1}
P.ir.prototype={
$0:function(){P.cr(this.a,this.b)},
$S:2}
P.iv.prototype={
$0:function(){P.cr(this.b,this.a.a)},
$S:2}
P.is.prototype={
$1:function(a){var u=this.a
u.a=0
u.bZ(a)},
$S:14}
P.it.prototype={
$2:function(a,b){H.k(b,"$iac")
this.a.c_(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.iu.prototype={
$0:function(){this.a.c_(this.b,this.c)},
$S:2}
P.iy.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cK(H.j(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.bN(r)
if(o.d){s=H.k(o.a.a.c,"$ia7").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$ia7")
else q.b=new P.a7(u,t)
q.a=!0
return}if(!!J.O(n).$ic4){if(n instanceof P.ap&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$ia7")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.fN(new P.iz(p),null)
s.a=!1}},
$S:3}
P.iz.prototype={
$1:function(a){return this.a},
$S:35}
P.ix.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.bF(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.bN(o)
s=n.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:3}
P.iw.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$ia7")
r=m.c
if(H.w(r.fl(u))&&r.e!=null){q=m.b
q.b=r.fg(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.bN(p)
r=H.k(m.a.a.c,"$ia7")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:3}
P.dG.prototype={}
P.hn.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.ap($.T,[P.C])
r.a=0
u=H.u(s,0)
t=H.j(new P.hp(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.hq(r,q),{func:1,ret:-1})
W.a_(s.a,s.b,t,!1,u)
return q}}
P.hp.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.u(this.b,0)]}}}
P.hq.prototype={
$0:function(){this.b.bZ(this.a.a)},
$S:2}
P.ci.prototype={}
P.ho.prototype={}
P.aO.prototype={}
P.a7.prototype={
i:function(a){return H.h(this.a)},
$ibb:1}
P.iW.prototype={$ine:1}
P.j_.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.df():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iF.prototype={
fJ:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.e===$.T){a.$0()
return}P.kF(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.bN(s)
P.iZ(r,r,this,u,H.k(t,"$iac"))}},
fK:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.e===$.T){a.$1(b)
return}P.kG(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.bN(s)
P.iZ(r,r,this,u,H.k(t,"$iac"))}},
f1:function(a,b){return new P.iH(this,H.j(a,{func:1,ret:b}),b)},
bp:function(a){return new P.iG(this,H.j(a,{func:1,ret:-1}))},
cn:function(a,b){return new P.iI(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
cK:function(a,b){H.j(a,{func:1,ret:b})
if($.T===C.e)return a.$0()
return P.kF(null,null,this,a,b)},
bF:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.T===C.e)return a.$1(b)
return P.kG(null,null,this,a,b,c,d)},
fI:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.T===C.e)return a.$2(b,c)
return P.m5(null,null,this,a,b,c,d,e,f)}}
P.iH.prototype={
$0:function(){return this.a.cK(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iG.prototype={
$0:function(){return this.a.fJ(this.b)},
$S:3}
P.iI.prototype={
$1:function(a){var u=this.c
return this.a.fK(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iD.prototype={
gN:function(a){var u=this,t=new P.dW(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibH")!=null}else{t=this.ds(b)
return t}},
ds:function(a){var u=this.d
if(u==null)return!1
return this.b4(this.c5(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bX(u==null?s.b=P.jw():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bX(t==null?s.c=P.jw():t,b)}else return s.di(0,b)},
di:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.jw()
t=r.c0(b)
s=u[t]
if(s==null)u[t]=[r.b1(b)]
else{if(r.b4(s,b)>=0)return!1
s.push(r.b1(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ex(this.c,b)
else return this.ew(0,b)},
ew:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c5(r,b)
t=s.b4(u,b)
if(t<0)return!1
s.cg(u.splice(t,1)[0])
return!0},
bX:function(a,b){H.B(b,H.u(this,0))
if(H.k(a[b],"$ibH")!=null)return!1
a[b]=this.b1(b)
return!0},
ex:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibH")
if(u==null)return!1
this.cg(u)
delete a[b]
return!0},
c7:function(){this.r=1073741823&this.r+1},
b1:function(a){var u,t=this,s=new P.bH(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c7()
return s},
cg:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c7()},
c0:function(a){return J.bq(a)&1073741823},
c5:function(a,b){return a[this.c0(b)]},
b4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.bH.prototype={}
P.dW.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b9(t))
else{t=u.c
if(t==null){u.sbY(null)
return!1}else{u.sbY(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbY:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
P.ft.prototype={$ii:1,$ib:1}
P.t.prototype={
gN:function(a){return new H.c7(a,this.gl(a),[H.cE(this,a,"t",0)])},
w:function(a,b){return this.m(a,b)},
fQ:function(a,b){var u,t=this,s=H.c([],[H.cE(t,a,"t",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.O(s,u,t.m(a,u))
return s},
fP:function(a){return this.fQ(a,!0)},
i:function(a){return P.jk(a,"[","]")}}
P.fv.prototype={}
P.fw.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:23}
P.a1.prototype={
K:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.cE(s,a,"a1",0),H.cE(s,a,"a1",1)]})
for(u=J.br(s.gV(a));u.t();){t=u.gG(u)
b.$2(t,s.m(a,t))}},
gl:function(a){return J.bs(this.gV(a))},
i:function(a){return P.k5(a)},
$iH:1}
P.iK.prototype={
a4:function(a,b){var u
for(u=J.br(H.o(b,"$ii",this.$ti,"$ai"));u.t();)this.h(0,u.gG(u))},
i:function(a){return P.jk(this,"{","}")},
w:function(a,b){var u,t,s,r=this
P.kh(b,"index")
for(u=P.lY(r,r.r,H.u(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.f(P.R(b,r,"index",null,t))},
$ii:1,
$ikl:1}
P.dX.prototype={}
P.bY.prototype={}
P.c_.prototype={}
P.f3.prototype={
$abY:function(){return[P.e,[P.b,P.C]]}}
P.fj.prototype={
i:function(a){return this.a}}
P.fi.prototype={
dt:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.l(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bD("")
if(r>b)q.a+=C.b.aH(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lh(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac_:function(){return[P.e,P.e]}}
P.i0.prototype={}
P.i1.prototype={
f4:function(a){var u,t,s=P.ki(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iU(u)
if(t.dF(a,0,s)!==s)t.ci(C.b.bt(a,s-1),0)
return new Uint8Array(u.subarray(0,H.m0(0,t.b,u.length)))},
$ac_:function(){return[P.e,[P.b,P.C]]}}
P.iU.prototype={
ci:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.l(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.l(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.l(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.l(s,r)
s[r]=128|a&63
return!1}},
dF:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bt(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.al(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ci(r,C.b.al(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.l(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.l(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.l(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.l(u,q)
u[q]=128|r&63}}return s}}
P.K.prototype={}
P.al.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.al&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.d.aL(u,30))&1073741823},
i:function(a){var u=this,t=P.lp(H.lH(u)),s=P.cQ(H.lF(u)),r=P.cQ(H.lB(u)),q=P.cQ(H.lC(u)),p=P.cQ(H.lE(u)),o=P.cQ(H.lG(u)),n=P.lq(H.lD(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.ba.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gD:function(a){return C.d.gD(this.a)},
i:function(a){var u,t,s,r=new P.f0(),q=this.a
if(q<0)return"-"+new P.ba(0-q).i(0)
u=r.$1(C.d.aq(q,6e7)%60)
t=r.$1(C.d.aq(q,1e6)%60)
s=new P.f_().$1(q%1e6)
return""+C.d.aq(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.f_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.f0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.bb.prototype={}
P.eE.prototype={
i:function(a){return"Assertion failed"}}
P.df.prototype={
i:function(a){return"Throw of null."}}
P.as.prototype={
gb3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb2:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb3()+o+u
if(!q.a)return t
s=q.gb2()
r=P.cU(q.b)
return t+s+": "+r}}
P.bB.prototype={
gb3:function(){return"RangeError"},
gb2:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.fk.prototype={
gb3:function(){return"RangeError"},
gb2:function(){var u,t=H.a5(this.b)
if(typeof t!=="number")return t.ah()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gl:function(a){return this.f}}
P.hZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ch.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eP.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cU(u)+"."}}
P.fU.prototype={
i:function(a){return"Out of Memory"},
$ibb:1}
P.dm.prototype={
i:function(a){return"Stack Overflow"},
$ibb:1}
P.eU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dO.prototype={
i:function(a){return"Exception: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aH(s,0,75)+"...":s
return t+"\n"+r}}
P.bc.prototype={}
P.C.prototype={}
P.i.prototype={
aU:function(a,b){var u=H.ae(this,"i",0)
return new H.co(this,H.j(b,{func:1,ret:P.K,args:[u]}),[u])},
gl:function(a){var u,t=this.gN(this)
for(u=0;t.t();)++u
return u},
gai:function(a){var u,t=this.gN(this)
if(!t.t())throw H.f(H.jl())
u=t.gG(t)
if(t.t())throw H.f(H.lv())
return u},
w:function(a,b){var u,t,s
P.kh(b,"index")
for(u=this.gN(this),t=0;u.t();){s=u.gG(u)
if(b===t)return s;++t}throw H.f(P.R(b,this,"index",null,t))},
i:function(a){return P.lu(this,"(",")")}}
P.aD.prototype={}
P.b.prototype={$ii:1}
P.H.prototype={}
P.G.prototype={
gD:function(a){return P.I.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gD:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.bA(this)+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.e.prototype={$ikb:1}
P.bD.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eC.prototype={
gl:function(a){return a.length}}
W.cH.prototype={
i:function(a){return String(a)},
$icH:1}
W.eD.prototype={
i:function(a){return String(a)}}
W.bT.prototype={$ibT:1}
W.cJ.prototype={}
W.b6.prototype={$ib6:1}
W.bu.prototype={
bI:function(a,b,c){if(c!=null)return a.getContext(b,P.md(c))
return a.getContext(b)},
cU:function(a,b){return this.bI(a,b,null)},
$ibu:1}
W.bW.prototype={$ibW:1}
W.b7.prototype={
gl:function(a){return a.length}}
W.c0.prototype={$ic0:1}
W.eQ.prototype={
gl:function(a){return a.length}}
W.L.prototype={$iL:1}
W.c1.prototype={
gl:function(a){return a.length}}
W.eR.prototype={}
W.az.prototype={}
W.aA.prototype={}
W.eS.prototype={
gl:function(a){return a.length}}
W.eT.prototype={
gl:function(a){return a.length}}
W.eW.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1}
W.eX.prototype={
i:function(a){return String(a)}}
W.cR.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ab,P.a0]]},
$at:function(){return[[P.ab,P.a0]]},
$ii:1,
$ai:function(){return[[P.ab,P.a0]]},
$ib:1,
$ab:function(){return[[P.ab,P.a0]]},
$ax:function(){return[[P.ab,P.a0]]}}
W.cS.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gag(a))+" x "+H.h(this.gaa(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iab)return!1
return a.left===u.gaQ(b)&&a.top===u.gaT(b)&&this.gag(a)===u.gag(b)&&this.gaa(a)===u.gaa(b)},
gD:function(a){return W.kB(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(this.gag(a)),C.c.gD(this.gaa(a)))},
gco:function(a){return a.bottom},
gaa:function(a){return a.height},
gaQ:function(a){return a.left},
gcJ:function(a){return a.right},
gaT:function(a){return a.top},
gag:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a0]}}
W.eY.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ax:function(){return[P.e]}}
W.eZ.prototype={
gl:function(a){return a.length}}
W.ik.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.k(u[b],"$iJ")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.fP(this)
return new J.ak(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
gf0:function(a){return new W.im(a)},
gcp:function(a){return new W.ik(a,a.children)},
gcq:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ah()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ah()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a0])},
i:function(a){return a.localName},
Z:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.k_
if(u==null){u=H.c([],[W.ai])
t=new W.dd(u)
C.a.h(u,W.kA(null))
C.a.h(u,W.kC())
$.k_=t
d=t}else d=u
u=$.jZ
if(u==null){u=new W.eq(d)
$.jZ=u
c=u}else{u.a=d
c=u}}if($.aV==null){u=document
t=u.implementation.createHTMLDocument("")
$.aV=t
$.jj=t.createRange()
t=$.aV.createElement("base")
H.k(t,"$ibT")
t.href=u.baseURI
$.aV.head.appendChild(t)}u=$.aV
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ib6")}u=$.aV
if(!!this.$ib6)s=u.body
else{s=u.createElement(a.tagName)
$.aV.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.L,a.tagName)){$.jj.selectNodeContents(s)
r=$.jj.createContextualFragment(b)}else{s.innerHTML=b
r=$.aV.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aV.body
if(s==null?u!=null:s!==u)J.jS(s)
c.bJ(r)
document.adoptNode(r)
return r},
f6:function(a,b,c){return this.Z(a,b,c,null)},
cX:function(a,b){a.textContent=null
a.appendChild(this.Z(a,b,null,null))},
$iJ:1,
gcL:function(a){return a.tagName}}
W.f2.prototype={
$1:function(a){return!!J.O(H.k(a,"$iy")).$iJ},
$S:13}
W.m.prototype={$im:1}
W.d.prototype={
eW:function(a,b,c,d){H.j(c,{func:1,args:[W.m]})
if(c!=null)this.dj(a,b,c,!1)},
dj:function(a,b,c,d){return a.addEventListener(b,H.bL(H.j(c,{func:1,args:[W.m]}),1),!1)},
$id:1}
W.aB.prototype={$iaB:1}
W.f7.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$ax:function(){return[W.aB]}}
W.f8.prototype={
gl:function(a){return a.length}}
W.fc.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fh.prototype={
gl:function(a){return a.length}}
W.bw.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.y]},
$at:function(){return[W.y]},
$ii:1,
$ai:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$ibw:1,
$ax:function(){return[W.y]}}
W.bd.prototype={$ibd:1,
gcs:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.aG.prototype={$iaG:1}
W.d5.prototype={
i:function(a){return String(a)},
$id5:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.fB.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.fC(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.fC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fD.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.fE(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aH.prototype={$iaH:1}
W.fF.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$ax:function(){return[W.aH]}}
W.a2.prototype={$ia2:1}
W.a8.prototype={
gai:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kn("No elements"))
if(t>1)throw H.f(P.kn("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s,r
H.o(b,"$ii",[W.y],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gN:function(a){var u=this.a.childNodes
return new W.cW(u,u.length,[H.cE(C.N,u,"x",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$at:function(){return[W.y]},
$ai:function(){return[W.y]},
$ab:function(){return[W.y]}}
W.y.prototype={
fE:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.cZ(a):u},
eZ:function(a,b){return a.appendChild(b)},
$iy:1}
W.cc.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.y]},
$at:function(){return[W.y]},
$ii:1,
$ai:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$ax:function(){return[W.y]}}
W.aI.prototype={$iaI:1,
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$ax:function(){return[W.aI]}}
W.h5.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.h6(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h8.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hh.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aK]},
$at:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$ax:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hi.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aL]},
$at:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$ax:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hl.prototype={
m:function(a,b){return a.getItem(H.E(b))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new W.hm(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.e,P.e]},
$iH:1,
$aH:function(){return[P.e,P.e]}}
W.hm.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.at.prototype={$iat:1}
W.bE.prototype={}
W.dn.prototype={
Z:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
u=W.lr("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a8(t).a4(0,new W.a8(u))
return t}}
W.hs.prototype={
Z:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.a8(u)
s=u.gai(u)
s.toString
u=new W.a8(s)
r=u.gai(u)
t.toString
r.toString
new W.a8(t).a4(0,new W.a8(r))
return t}}
W.ht.prototype={
Z:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.a8(u)
s=u.gai(u)
t.toString
s.toString
new W.a8(t).a4(0,new W.a8(s))
return t}}
W.cj.prototype={$icj:1}
W.aN.prototype={$iaN:1}
W.au.prototype={$iau:1}
W.hv.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.au]},
$at:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$ib:1,
$ab:function(){return[W.au]},
$ax:function(){return[W.au]}}
W.hw.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$ax:function(){return[W.aN]}}
W.hA.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.av.prototype={$iav:1}
W.hE.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$at:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$ax:function(){return[W.aP]}}
W.hF.prototype={
gl:function(a){return a.length}}
W.bk.prototype={}
W.i_.prototype={
i:function(a){return String(a)}}
W.ia.prototype={
gl:function(a){return a.length}}
W.aR.prototype={
gf9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.an("deltaY is not supported"))},
gf8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.an("deltaX is not supported"))},
$iaR:1}
W.cp.prototype={
ez:function(a,b){return a.requestAnimationFrame(H.bL(H.j(b,{func:1,ret:-1,args:[P.a0]}),1))},
dz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cq.prototype={$icq:1}
W.il.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.L]},
$at:function(){return[W.L]},
$ii:1,
$ai:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ax:function(){return[W.L]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iab)return!1
return a.left===u.gaQ(b)&&a.top===u.gaT(b)&&a.width===u.gag(b)&&a.height===u.gaa(b)},
gD:function(a){return W.kB(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(a.width),C.c.gD(a.height))},
gaa:function(a){return a.height},
gag:function(a){return a.width}}
W.iA.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$ax:function(){return[W.aC]}}
W.e1.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.y]},
$at:function(){return[W.y]},
$ii:1,
$ai:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$ax:function(){return[W.y]}}
W.iN.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aM]},
$at:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$ax:function(){return[W.aM]}}
W.iO.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.at]},
$at:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$ax:function(){return[W.at]}}
W.ij.prototype={
K:function(a,b){var u,t,s,r,q
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gV(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gV:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.k(r[t],"$icq")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa1:function(){return[P.e,P.e]},
$aH:function(){return[P.e,P.e]}}
W.im.prototype={
m:function(a,b){return this.a.getAttribute(H.E(b))},
gl:function(a){return this.gV(this).length}}
W.io.prototype={}
W.jv.prototype={}
W.ip.prototype={}
W.iq.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:25}
W.bm.prototype={
d9:function(a){var u
if($.dR.a===0){for(u=0;u<262;++u)$.dR.O(0,C.K[u],W.ml())
for(u=0;u<12;++u)$.dR.O(0,C.k[u],W.mm())}},
ar:function(a){return $.lb().P(0,W.c2(a))},
a5:function(a,b,c){var u=$.dR.m(0,H.h(W.c2(a))+"::"+b)
if(u==null)u=$.dR.m(0,"*::"+b)
if(u==null)return!1
return H.jC(u.$4(a,b,c,this))},
$iai:1}
W.x.prototype={
gN:function(a){return new W.cW(a,this.gl(a),[H.cE(this,a,"x",0)])}}
W.dd.prototype={
ar:function(a){return C.a.cm(this.a,new W.fO(a))},
a5:function(a,b,c){return C.a.cm(this.a,new W.fN(a,b,c))},
$iai:1}
W.fO.prototype={
$1:function(a){return H.k(a,"$iai").ar(this.a)},
$S:16}
W.fN.prototype={
$1:function(a){return H.k(a,"$iai").a5(this.a,this.b,this.c)},
$S:16}
W.e9.prototype={
dd:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.aU(0,new W.iL())
t=b.aU(0,new W.iM())
this.b.a4(0,u)
s=this.c
s.a4(0,C.M)
s.a4(0,t)},
ar:function(a){return this.a.P(0,W.c2(a))},
a5:function(a,b,c){var u=this,t=W.c2(a),s=u.c
if(s.P(0,H.h(t)+"::"+b))return u.d.eY(c)
else if(s.P(0,"*::"+b))return u.d.eY(c)
else{s=u.b
if(s.P(0,H.h(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.h(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iai:1}
W.iL.prototype={
$1:function(a){return!C.a.P(C.k,H.E(a))},
$S:17}
W.iM.prototype={
$1:function(a){return C.a.P(C.k,H.E(a))},
$S:17}
W.iQ.prototype={
a5:function(a,b,c){if(this.d2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.iR.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.E(a))},
$S:26}
W.iP.prototype={
ar:function(a){var u=J.O(a)
if(!!u.$ice)return!1
u=!!u.$in
if(u&&W.c2(a)==="foreignObject")return!1
if(u)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.b.aX(b,"on"))return!1
return this.ar(a)},
$iai:1}
W.cW.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sc6(J.ld(u.a,t))
u.c=t
return!0}u.sc6(null)
u.c=s
return!1},
gG:function(a){return this.d},
sc6:function(a){this.d=H.B(a,H.u(this,0))},
$iaD:1}
W.ai.prototype={}
W.iJ.prototype={$in1:1}
W.eq.prototype={
bJ:function(a){new W.iV(this).$2(a,null)},
aB:function(a,b){if(b==null)J.jS(a)
else b.removeChild(a)},
eC:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lg(a)
n=o.a.getAttribute("is")
H.k(a,"$iJ")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.w(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.af(a)}catch(r){H.aj(r)}try{s=W.c2(a)
this.eB(H.k(a,"$iJ"),b,p,t,s,H.k(o,"$iH"),H.E(n))}catch(r){if(H.aj(r) instanceof P.as)throw r
else{this.aB(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eB:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aB(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ar(a)){o.aB(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a5(a,"is",g)){o.aB(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gV(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gV(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.li(r)
H.E(r)
if(!q.a5(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$icj)o.bJ(a.content)},
$imM:1}
W.iV.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.eC(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aB(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.k(u,"$iy")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iy")}},
$S:27}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ef.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.el.prototype={}
W.em.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
P.ep.prototype={$ibd:1,
gcs:function(a){return this.a}}
P.j1.prototype={
$2:function(a,b){this.a[a]=b},
$S:23}
P.f9.prototype={
gb7:function(){var u=this.b,t=H.ae(u,"t",0),s=W.J
return new H.fx(new H.co(u,H.j(new P.fa(),{func:1,ret:P.K,args:[t]}),[t]),H.j(new P.fb(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bs(this.gb7().a)},
m:function(a,b){var u=this.gb7()
return u.b.$1(J.je(u.a,b))},
gN:function(a){var u=P.k4(this.gb7(),!1,W.J)
return new J.ak(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.fa.prototype={
$1:function(a){return!!J.O(H.k(a,"$iy")).$iJ},
$S:13}
P.fb.prototype={
$1:function(a){return H.ar(H.k(a,"$iy"),"$iJ")},
$S:39}
P.iE.prototype={
gcJ:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.A(t)
return H.B(u+t,H.u(this,0))},
gco:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.A(t)
return H.B(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.h(u.a)+", "+H.h(u.b)+") "+H.h(u.c)+" x "+H.h(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.O(b)
if(!!u.$iab){t=p.a
if(t==u.gaQ(b)){s=p.b
if(s==u.gaT(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.A(r)
q=H.u(p,0)
if(H.B(t+r,q)===u.gcJ(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.A(t)
u=H.B(s+t,q)===u.gco(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gD:function(a){var u,t=this,s=t.a,r=J.bq(s),q=t.b,p=J.bq(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.A(o)
u=H.u(t,0)
o=C.d.gD(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.A(s)
u=C.d.gD(H.B(q+s,u))
return P.lX(P.iC(P.iC(P.iC(P.iC(0,r),p),o),u))}}
P.ab.prototype={
gaQ:function(a){return this.a},
gaT:function(a){return this.b},
gag:function(a){return this.c},
gaa:function(a){return this.d}}
P.aW.prototype={$iaW:1}
P.fq.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.aW]},
$ii:1,
$ai:function(){return[P.aW]},
$ib:1,
$ab:function(){return[P.aW]},
$ax:function(){return[P.aW]}}
P.b_.prototype={$ib_:1}
P.fS.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.b_]},
$ii:1,
$ai:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$ax:function(){return[P.b_]}}
P.fZ.prototype={
gl:function(a){return a.length}}
P.ce.prototype={$ice:1}
P.hr.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ax:function(){return[P.e]}}
P.n.prototype={
gcp:function(a){return new P.f9(a,new W.a8(a))},
Z:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.ai])
C.a.h(p,W.kA(null))
C.a.h(p,W.kC())
C.a.h(p,new W.iP())
c=new W.eq(new W.dd(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).f6(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a8(s)
q=p.gai(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$in:1}
P.b0.prototype={$ib0:1}
P.hG.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$at:function(){return[P.b0]},
$ii:1,
$ai:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$ax:function(){return[P.b0]}}
P.dU.prototype={}
P.dV.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.eg.prototype={}
P.eh.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.eG.prototype={
gl:function(a){return a.length}}
P.eH.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gV:function(a){var u=H.c([],[P.e])
this.K(a,new P.eI(u))
return u},
gl:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
P.eI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eJ.prototype={
gl:function(a){return a.length}}
P.bt.prototype={}
P.fT.prototype={
gl:function(a){return a.length}}
P.dH.prototype={}
P.cK.prototype={$icK:1}
P.di.prototype={$idi:1}
P.bC.prototype={
fL:function(a,b,c,d,e,f,g){var u,t=J.O(g)
if(!!t.$ibd)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.me(g))
return}if(!!t.$ic6)t=!0
else t=!1
if(t){this.eL(a,b,c,d,e,f,g)
return}throw H.f(P.lj("Incorrect number or type of arguments"))},
eL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibC:1}
P.dk.prototype={$idk:1}
P.dq.prototype={$idq:1}
P.dw.prototype={$idw:1}
P.hj.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.R(b,a,null,null,null))
return P.b1(a.item(b))},
w:function(a,b){return this.m(a,b)},
$at:function(){return[[P.H,,,]]},
$ii:1,
$ai:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$ax:function(){return[[P.H,,,]]}}
P.ec.prototype={}
P.ed.prototype={}
O.Y.prototype={
bN:function(a){var u=this
u.sdK(H.c([],[a]))
u.sc9(null)
u.sc8(null)
u.sca(null)},
aV:function(a,b){var u=this,t={func:1,ret:-1,args:[P.C,[P.i,H.ae(u,"Y",0)]]}
H.j(a,t)
H.j(b,t)
u.sc9(null)
u.sc8(a)
u.sca(b)},
el:function(a){H.o(a,"$ii",[H.ae(this,"Y",0)],"$ai")
return!0},
d8:function(a,b){var u
H.o(b,"$ii",[H.ae(this,"Y",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.ak(u,u.length,[H.u(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ae(s,"Y",0)
H.B(b,r)
r=[r]
if(H.w(s.el(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d8(t,H.c([b],r))}},
sdK:function(a){this.a=H.o(a,"$ib",[H.ae(this,"Y",0)],"$ab")},
sc9:function(a){this.b=H.j(a,{func:1,ret:P.K,args:[[P.i,H.ae(this,"Y",0)]]})},
sc8:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.C,[P.i,H.ae(this,"Y",0)]]})},
sca:function(a){H.j(a,{func:1,ret:-1,args:[P.C,[P.i,H.ae(this,"Y",0)]]})},
$ii:1}
O.c8.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
aj:function(){var u=this.b
if(u!=null)u.A(null)},
gac:function(a){var u=this.a
if(u.length>0)return C.a.gaP(u)
else return V.d9()},
cG:function(a){var u=this.a
if(a==null)C.a.h(u,V.d9())
else C.a.h(u,a)
this.aj()},
bE:function(){var u=this.a
if(u.length>0){u.pop()
this.aj()}},
sb9:function(a){this.a=H.o(a,"$ib",[V.bg],"$ab")}}
E.eK.prototype={}
E.a9.prototype={
sbK:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().R(0,s.gcC())
u=s.c
if(u!=null)u.gp().h(0,s.gcC())
t=new D.M("shape",r,s.c,[F.dl])
t.b=!0
s.ad(t)}},
saE:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gp().R(0,s.gcA())
if(a!=null)a.gp().h(0,s.gcA())
s.r=a
t=new D.M("mover",u,a,[U.a3])
t.b=!0
s.ad(t)}},
av:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aw(0,b,s):null
if(!J.W(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.bg])
t.b=!0
s.ad(t)}for(r=s.y.a,r=new J.ak(r,r.length,[H.u(r,0)]);r.t();)r.d.av(0,b)},
au:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gac(s))
else C.a.h(s.a,r.q(0,s.gac(s)))
s.aj()
a.cH(t.f)
s=a.dy
u=(s&&C.a).gaP(s)
if(u!=null&&t.d!=null)u.fG(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.u(s,0)]);s.t();)s.d.au(a)
a.cF()
a.dx.bE()},
gp:function(){var u=this.z
return u==null?this.z=D.Q():u},
ad:function(a){var u=this.z
if(u!=null)u.A(a)},
W:function(){return this.ad(null)},
cD:function(a){H.k(a,"$iv")
this.e=null
this.ad(a)},
fu:function(){return this.cD(null)},
cB:function(a){this.ad(H.k(a,"$iv"))},
ft:function(){return this.cB(null)},
cz:function(a){this.ad(H.k(a,"$iv"))},
fp:function(){return this.cz(null)},
fo:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ii",[E.a9],"$ai")
for(u=b.length,t=this.gcw(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sa8(null)
o.saz(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
fs:function(a,b){var u,t
H.o(b,"$ii",[E.a9],"$ai")
for(u=b.gN(b),t=this.gcw();u.t();)u.gG(u).gp().R(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdr:function(a,b){this.y=H.o(b,"$iY",[E.a9],"$aY")},
$ik8:1}
E.h1.prototype={
d4:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.al(Date.now(),!1)
s.y=0
s.cx=s.ch=s.z=null
u=new O.c8()
t=[V.bg]
u.sb9(H.c([],t))
u.b=null
u.gp().h(0,new E.h2(s))
s.cy=u
u=new O.c8()
u.sb9(H.c([],t))
u.b=null
u.gp().h(0,new E.h3(s))
s.db=u
u=new O.c8()
u.sb9(H.c([],t))
u.b=null
u.gp().h(0,new E.h4(s))
s.dx=u
s.seK(H.c([],[O.bF]))
u=s.dy;(u&&C.a).h(u,null)
s.seH(new H.aF([P.e,A.cf]))},
cH:function(a){var u=this.dy,t=a==null?(u&&C.a).gaP(u):a;(u&&C.a).h(u,t)},
cF:function(){var u=this.dy
if(u.length>1)u.pop()},
seK:function(a){this.dy=H.o(a,"$ib",[O.bF],"$ab")},
seH:function(a){this.fr=H.o(a,"$iH",[P.e,A.cf],"$aH")}}
E.h2.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:8}
E.h3.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=u.z=null},
$S:8}
E.h4.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:8}
E.ds.prototype={
bQ:function(a){H.k(a,"$iv")
this.cI()},
bP:function(){return this.bQ(null)},
gff:function(){var u,t=this,s=Date.now(),r=C.d.aq(P.jY(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.al(s,!1)
return u/r},
cc:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.A(r)
u=C.c.bw(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.bw(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kq(C.i,s.gfH())}},
cI:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hz(this),{func:1,ret:-1,args:[P.a0]})
C.v.dz(u)
C.v.ez(u,W.kJ(t,P.a0))}},
fF:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cc()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.al(r,!1)
s.y=P.jY(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aj()
r=s.db
C.a.sl(r.a,0)
r.aj()
r=s.dx
C.a.sl(r.a,0)
r.aj()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.au(p.e)}s=p.z
if(s!=null)s.A(null)}catch(q){u=H.aj(q)
t=H.bN(q)
P.jO("Error: "+H.h(u))
P.jO("Stack: "+H.h(t))
throw H.f(u)}}}
E.hz.prototype={
$1:function(a){var u
H.mw(a)
u=this.a
if(u.ch){u.ch=!1
u.fF()}},
$S:32}
Z.dF.prototype={$imG:1}
Z.cL.prototype={
bo:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.X('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.ib.prototype={$imH:1}
Z.cM.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bo:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bo(a)},
fS:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
au:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.af(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")},
sdG:function(a){this.b=H.o(a,"$ib",[Z.be],"$ab")},
$imP:1}
Z.be.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bA(this.c)+"'")+"]"}}
Z.bl.prototype={
gbL:function(a){var u=this.a,t=(u&$.b4().a)!==0?3:0
if((u&$.b3().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=3
if((u&$.bR().a)!==0)t+=2
if((u&$.b5().a)!==0)t+=3
if((u&$.cF().a)!==0)t+=3
if((u&$.cG().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.bQ().a)!==0?t+4:t},
f_:function(a){var u,t=$.b4(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0)if(u===a)return t
return $.la()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.b4().a)!==0)C.a.h(u,"Pos")
if((t&$.b3().a)!==0)C.a.h(u,"Norm")
if((t&$.b2().a)!==0)C.a.h(u,"Binm")
if((t&$.bR().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b5().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cF().a)!==0)C.a.h(u,"Clr3")
if((t&$.cG().a)!==0)C.a.h(u,"Clr4")
if((t&$.bS().a)!==0)C.a.h(u,"Weight")
if((t&$.bQ().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eN.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.j(b,u)
if(this.a==null)this.sa8(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.K(P.k4(u,!0,{func:1,ret:-1,args:[D.v]}),new D.f5(q))
u=r.b
if(u!=null){r.saz(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.K(u,new D.f6(q))}return!0},
fb:function(){return this.A(null)},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
sa8:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saz:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.f5.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.f6.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.v.prototype={}
D.cX.prototype={}
D.cY.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cN.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cN))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.d2.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d2))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fp.prototype={
fB:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fv:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
sev:function(a){this.d=H.o(a,"$ikl",[P.C],"$akl")}}
X.d6.prototype={}
X.fu.prototype={
ay:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gat()
r=new X.aZ(a,V.bi(),q.x,t,s)
r.b=!0
q.z=new P.al(p,!1)
q.x=s
return r},
bD:function(a,b){this.r=a.a
return!1},
aG:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cW()
if(typeof u!=="number")return u.cS()
this.r=(u&~t)>>>0
return!1},
aF:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.ay(a,b))
return!0},
fC:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gat()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.c9(new V.N(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
ea:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d6(c,r.a.gat(),b)
s.b=!0
t.A(s)
r.y=new P.al(u,!1)
r.x=V.bi()}}
X.ah.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ah))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.w(this.b)?"Alt+":""
return u+(H.w(this.c)?"Shift+":"")}}
X.aZ.prototype={}
X.fG.prototype={
b5:function(a,b,c){var u=this,t=new P.al(Date.now(),!1),s=u.a.gat(),r=new X.aZ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.b5(a,b,!0))
return!0},
aG:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.cW()
if(typeof t!=="number")return t.cS()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.b5(a,b,!0))
return!0},
aF:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.b5(a,b,!1))
return!0},
fD:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gat()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.c9(new V.N(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gct:function(){var u=this.b
return u==null?this.b=D.Q():u},
gcR:function(){var u=this.c
return u==null?this.c=D.Q():u},
gcv:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.c9.prototype={}
X.fY.prototype={}
X.du.prototype={}
X.hD.prototype={
ay:function(a,b){var u,t,s,r,q=this
H.o(a,"$ib",[V.a4],"$ab")
u=new P.al(Date.now(),!1)
t=a.length>0?a[0]:V.bi()
s=q.a.gat()
r=new X.du(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
fA:function(a){var u
H.o(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.A(this.ay(a,!0))
return!0},
fw:function(a){var u
H.o(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.A(this.ay(a,!0))
return!0},
fz:function(a){var u
H.o(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.A(this.ay(a,!1))
return!0}}
X.dA.prototype={
gat:function(){var u=this.a,t=C.f.gcq(u).c
t.toString
u=C.f.gcq(u).d
u.toString
return V.kj(0,0,t,u)},
c2:function(a){var u=a.keyCode,t=H.w(a.ctrlKey)||H.w(a.metaKey)
return new X.d2(u,new X.ah(t,a.altKey,a.shiftKey))},
ap:function(a){var u=this.b,t=H.w(a.ctrlKey)||H.w(a.metaKey)
u.c=new X.ah(t,a.altKey,a.shiftKey)},
bn:function(a){var u=this.b,t=H.w(a.ctrlKey)||H.w(a.metaKey)
u.c=new X.ah(t,a.altKey,a.shiftKey)},
a9:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.a4(s-q,r-u)},
aA:function(a){return new V.N(a.movementX,a.movementY)},
bk:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.c.a1(r.pageX)
C.c.a1(r.pageY)
p=o.left
C.c.a1(r.pageX)
C.a.h(n,new V.a4(q-p,C.c.a1(r.pageY)-o.top))}return n},
a7:function(a){var u=a.buttons,t=H.w(a.ctrlKey)||H.w(a.metaKey)
return new X.cN(u,new X.ah(t,a.altKey,a.shiftKey))},
ba:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
e5:function(a){this.f=!0},
dU:function(a){this.f=!1},
e_:function(a){H.k(a,"$ia2")
if(H.w(this.f)&&this.ba(a))a.preventDefault()},
e9:function(a){var u
H.k(a,"$iaG")
if(!H.w(this.f))return
u=this.c2(a)
this.b.fB(u)},
e7:function(a){var u
H.k(a,"$iaG")
if(!H.w(this.f))return
u=this.c2(a)
this.b.fv(u)},
ec:function(a){var u,t,s,r,q=this
H.k(a,"$ia2")
u=q.a
u.focus()
q.f=!0
q.ap(a)
if(H.w(q.x)){t=q.a7(a)
s=q.aA(a)
if(q.d.bD(t,s))a.preventDefault()
return}if(H.w(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a7(a)
r=q.a9(a)
if(q.c.bD(t,r))a.preventDefault()},
eg:function(a){var u,t,s,r=this
H.k(a,"$ia2")
r.ap(a)
u=r.a7(a)
if(H.w(r.x)){t=r.aA(a)
if(r.d.aG(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.a9(a)
if(r.c.aG(u,s))a.preventDefault()},
e3:function(a){var u,t,s,r=this
H.k(a,"$ia2")
if(!r.ba(a)){r.ap(a)
u=r.a7(a)
if(H.w(r.x)){t=r.aA(a)
if(r.d.aG(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.a9(a)
if(r.c.aG(u,s))a.preventDefault()}},
ee:function(a){var u,t,s,r=this
H.k(a,"$ia2")
r.ap(a)
u=r.a7(a)
if(H.w(r.x)){t=r.aA(a)
if(r.d.aF(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.a9(a)
if(r.c.aF(u,s))a.preventDefault()},
e1:function(a){var u,t,s,r=this
H.k(a,"$ia2")
if(!r.ba(a)){r.ap(a)
u=r.a7(a)
if(H.w(r.x)){t=r.aA(a)
if(r.d.aF(u,t))a.preventDefault()
return}if(H.w(r.r))return
s=r.a9(a)
if(r.c.aF(u,s))a.preventDefault()}},
ei:function(a){var u,t,s=this
H.k(a,"$iaR")
s.ap(a)
u=new V.N((a&&C.u).gf8(a),C.u.gf9(a)).v(0,180)
if(H.w(s.x)){if(s.d.fC(u))a.preventDefault()
return}if(H.w(s.r))return
t=s.a9(a)
if(s.c.fD(u,t))a.preventDefault()},
ek:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a7(s.y)
t=s.a9(s.y)
s.d.ea(u,t,r)}},
eu:function(a){var u,t=this
H.k(a,"$iav")
t.a.focus()
t.f=!0
t.bn(a)
u=t.bk(a)
if(t.e.fA(u))a.preventDefault()},
ep:function(a){var u
H.k(a,"$iav")
this.bn(a)
u=this.bk(a)
if(this.e.fw(u))a.preventDefault()},
er:function(a){var u
H.k(a,"$iav")
this.bn(a)
u=this.bk(a)
if(this.e.fz(u))a.preventDefault()},
sdA:function(a){this.z=H.o(a,"$ib",[[P.ci,P.I]],"$ab")}}
V.aU.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.f4.prototype={}
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
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.bM(H.c([q.a,q.d,q.r],p),3,0),n=V.bM(H.c([q.b,q.e,q.x],p),3,0),m=V.bM(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.l(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.l(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.l(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.l(o,1)
r=" "+o[1]+", "
if(1>=t)return H.l(n,1)
r=r+n[1]+", "
if(1>=s)return H.l(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.l(o,2)
p=" "+o[2]+", "
if(2>=t)return H.l(n,2)
p=p+n[2]+", "
if(2>=s)return H.l(m,2)
return r+(p+m[2]+"]")}}
V.bg.prototype={
bG:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aY(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bg))return!1
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
i:function(a){return this.H()},
u:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.bM(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bM(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bM(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bM(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.l(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.l(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.l(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.l(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.l(n,1)
q=q+n[1]+", "
if(1>=t)return H.l(m,1)
q=q+m[1]+", "
if(1>=s)return H.l(l,1)
q=q+l[1]+", "
if(1>=r)return H.l(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.l(n,2)
u=u+n[2]+", "
if(2>=t)return H.l(m,2)
u=u+m[2]+", "
if(2>=s)return H.l(l,2)
u=u+l[2]+", "
if(2>=r)return H.l(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.l(n,3)
q=q+n[3]+", "
if(3>=t)return H.l(m,3)
q=q+m[3]+", "
if(3>=s)return H.l(l,3)
q=q+l[3]+", "
if(3>=r)return H.l(k,3)
return u+(q+k[3]+"]")},
H:function(){return this.u("")}}
V.a4.prototype={
E:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.bj.prototype={
E:function(a,b){return new V.bj(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bj))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.dh.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dj.prototype={
gY:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dj))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.N.prototype={
by:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.A(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.A(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.N(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.ku
return u==null?$.ku=new V.N(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.N(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.V.prototype={
by:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.V(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aD:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.V(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.V(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.P().a)return V.dE()
return new V.V(this.a/b,this.b/b,this.c/b)},
cu:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.eO.prototype={
b0:function(a){var u=V.mF(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
J:function(a){var u=this.y
if(u!=null)u.A(a)},
sbH:function(a,b){},
sbA:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.b0(u)}s=new D.M("maximumLocation",s,t.b,[P.z])
s.b=!0
t.J(s)}},
sbC:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.b0(u)}s=new D.M("minimumLocation",s,t.c,[P.z])
s.b=!0
t.J(s)}},
sX:function(a,b){var u,t=this
b=t.b0(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.M("location",u,b,[P.z])
u.b=!0
t.J(u)}},
sbB:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.z])
r.b=!0
s.J(r)}},
sM:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.M("velocity",t,a,[P.z])
t.b=!0
u.J(t)}},
sbv:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.M("dampening",u,a,[P.z])
u.b=!0
this.J(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sX(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sM(u)}}}
U.cP.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
aw:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cP))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.c5.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
J:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
dS:function(a,b){var u,t,s,r,q,p,o,n=U.a3
H.o(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gao(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.j(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cX([n])
n.b=!0
this.J(n)},
en:function(a,b){var u,t,s=U.a3
H.o(b,"$ii",[s],"$ai")
for(u=b.gN(b),t=this.gao();u.t();)u.gG(u).gp().R(0,t)
s=new D.cY([s])
s.b=!0
this.J(s)},
aw:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ah()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.u(r,0)]),u=null;r.t();){q=r.d
if(q!=null){t=q.aw(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.d9():u
r=s.e
if(r!=null)r.af(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aY:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dB.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
J:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
aC:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gct().h(0,u.gbb())
u.a.c.gcv().h(0,u.gbd())
u.a.c.gcR().h(0,u.gbf())
return!0},
bc:function(a){var u=this
H.k(a,"$iv")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
be:function(a){var u,t,s,r,q,p,o,n=this
a=H.ar(H.k(a,"$iv"),"$iaZ")
if(!H.w(n.y))return
if(H.w(n.x)){u=a.d.E(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.x=!1}if(H.w(n.d)){u=a.c
t=a.d.E(0,a.y)
u=new V.N(t.a,t.b).q(0,2).v(0,u.gY())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.A(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.N(s.a,s.b).q(0,2).v(0,u.gY())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.A(p)
o=n.z
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
n.b.sM(0)
t=t.E(0,a.z)
n.Q=new V.N(t.a,t.b).q(0,2).v(0,u.gY())}n.U()},
bg:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.w(r.y))return
r.y=!1
if(H.w(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.A(s)
u.sM(t*10*s)
r.U()}},
aw:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ah()
if(q<p){r.ch=p
u=b.y
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aY(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia3:1}
U.dC.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
J:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
aC:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gct().h(0,s.gbb())
s.a.c.gcv().h(0,s.gbd())
s.a.c.gcR().h(0,s.gbf())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gdL())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gdN())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.geR())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.geP())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.geN())
return!0},
a3:function(a){var u=a.a,t=a.b
if(H.w(this.f)){if(typeof u!=="number")return u.L()
u=-u}if(H.w(this.r)){if(typeof t!=="number")return t.L()
t=-t}return new V.N(u,t)},
bc:function(a){var u=this
a=H.ar(H.k(a,"$iv"),"$iaZ")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
be:function(a){var u,t,s,r,q,p,o,n=this
a=H.ar(H.k(a,"$iv"),"$iaZ")
if(!H.w(n.cx))return
if(H.w(n.ch)){u=a.d.E(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.ch=!1}if(H.w(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.A(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.A(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.a3(new V.N(s.a,s.b).q(0,2).v(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sX(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))}n.U()},
bg:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.w(r.cx))return
r.cx=!1
if(H.w(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.A(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.A(u)
s.sM(-t*10*u)
r.U()}},
dM:function(a){var u=this
if(H.ar(H.k(a,"$iv"),"$id6").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dO:function(a){var u,t,s,r,q,p,o,n=this
a=H.ar(H.k(a,"$iv"),"$iaZ")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.a3(new V.N(s.a,s.b).q(0,2).v(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sX(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))
n.U()},
eS:function(a){var u=this
H.k(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.ar(H.k(a,"$iv"),"$idu")
if(!H.w(n.cx))return
if(H.w(n.ch)){u=a.d.E(0,a.y)
u=new V.N(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
n.ch=!1}if(H.w(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.A(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.A(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.a3(new V.N(s.a,s.b).q(0,2).v(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.A(p)
o=n.cy
if(typeof o!=="number")return H.A(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.A(q)
s=n.db
if(typeof s!=="number")return H.A(s)
o.sX(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.a3(new V.N(t.a,t.b).q(0,2).v(0,u.gY()))}n.U()},
eO:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.w(r.cx))return
r.cx=!1
if(H.w(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.A(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.A(u)
s.sM(-t*10*u)
r.U()}},
aw:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ah()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aY(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.aY(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia3:1}
U.dD.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
J:function(a){var u=this.r
if(u!=null)u.A(a)},
aC:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gdP()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
dQ:function(a){var u,t,s,r,q=this
H.k(a,"$iv")
if(!J.W(q.b,q.a.b.c))return
H.ar(a,"$ic9")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.z])
u.b=!0
q.J(u)}},
aw:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aY(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia3:1}
M.cT.prototype={
a6:function(a){var u
H.k(a,"$iv")
u=this.y
if(u!=null)u.A(a)},
dc:function(){return this.a6(null)},
dW:function(a,b){var u,t,s,r,q,p,o,n=E.a9
H.o(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga2(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sa8(null)
o.saz(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cX([n])
n.b=!0
this.a6(n)},
dY:function(a,b){var u,t,s=E.a9
H.o(b,"$ii",[s],"$ai")
for(u=b.gN(b),t=this.ga2();u.t();)u.gG(u).gp().R(0,t)
s=new D.cY([s])
s.b=!0
this.a6(s)},
scM:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().R(0,t.ga2())
u=t.c
t.c=b
b.gp().h(0,t.ga2())
s=new D.M("target",u,t.c,[X.dp])
s.b=!0
t.a6(s)}},
scN:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.ga2())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.ga2())
s=new D.M("technique",u,t.d,[O.bF])
s.b=!0
t.a6(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
au:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.cH(a1.d)
u=a1.c
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
if(typeof s!=="number")return H.A(s)
o=C.c.a1(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.c.a1(p*r)
p=C.c.a1(q.c*s)
a2.c=p
q=C.c.a1(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aY(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.cG(i)
t=$.kc
if(t==null){t=$.ke
if(t==null)t=$.ke=new V.bj(0,0,0)
q=$.kw
if(q==null)q=$.kw=new V.V(0,1,0)
p=$.kv
if(p==null)p=$.kv=new V.V(0,0,-1)
h=p.v(0,Math.sqrt(p.C(p)))
q=q.aD(h)
g=q.v(0,Math.sqrt(q.C(q)))
f=h.aD(g)
e=new V.V(t.a,t.b,t.c)
d=g.L(0).C(e)
c=f.L(0).C(e)
b=h.L(0).C(e)
t=V.aY(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kc=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a2.db.cG(a)
for(u=a1.e.a,u=new J.ak(u,u.length,[H.u(u,0)]);u.t();)u.d.av(0,a2)
for(u=a1.e.a,u=new J.ak(u,u.length,[H.u(u,0)]);u.t();)u.d.au(a2)
a1.b.toString
a2.cy.bE()
a2.db.bE()
a1.c.toString
a2.cF()},
sda:function(a,b){this.e=H.o(b,"$iY",[E.a9],"$aY")},
$imN:1}
A.cI.prototype={}
A.eF.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fa:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.bZ.prototype={
gfU:function(a){return 0|(this.c?4:0)},
i:function(a){return""+(0|(this.c?4:0))},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.bZ))return!1
u=this.c===b.c
return u}}
A.fP.prototype={}
A.fQ.prototype={
i:function(a){return this.e}}
A.cf.prototype={
d6:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c3:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.w(H.jC(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.X("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
eE:function(){var u,t,s,r=this,q=H.c([],[A.cI]),p=r.a,o=H.a5(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.A(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cI(p,t.name,s))}r.x=new A.eF(q)},
eG:function(){var u,t,s,r=this,q=H.c([],[A.dv]),p=r.a,o=H.a5(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.A(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.f7(t.type,t.size,t.name,s))}r.y=new A.hT(q)},
am:function(a,b,c){var u=this.a
if(a===1)return new A.hL(u,b,c)
else return A.jt(u,this.r,b,a,c)},
du:function(a,b,c){var u=this.a
if(a===1)return new A.hW(u,b,c)
else return A.jt(u,this.r,b,a,c)},
dv:function(a,b,c){var u=this.a
if(a===1)return new A.dx(u,b,c)
else return A.jt(u,this.r,b,a,c)},
aM:function(a,b){return new P.dO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
f7:function(a,b,c,d){var u=this
switch(a){case 5120:return u.am(b,c,d)
case 5121:return u.am(b,c,d)
case 5122:return u.am(b,c,d)
case 5123:return u.am(b,c,d)
case 5124:return u.am(b,c,d)
case 5125:return u.am(b,c,d)
case 5126:return new A.hK(u.a,c,d)
case 35664:return new A.hN(u.a,c,d)
case 35665:return new A.hP(u.a,c,d)
case 35666:return new A.hR(u.a,c,d)
case 35667:return new A.hO(u.a,c,d)
case 35668:return new A.hQ(u.a,c,d)
case 35669:return new A.hS(u.a,c,d)
case 35674:return new A.hU(u.a,c,d)
case 35675:return new A.hV(u.a,c,d)
case 35676:return new A.bG(u.a,c,d)
case 35678:return u.du(b,c,d)
case 35680:return u.dv(b,c,d)
case 35670:throw H.f(u.aM("BOOL",c))
case 35671:throw H.f(u.aM("BOOL_VEC2",c))
case 35672:throw H.f(u.aM("BOOL_VEC3",c))
case 35673:throw H.f(u.aM("BOOL_VEC4",c))
default:throw H.f(P.X("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dv.prototype={}
A.hT.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
aS:function(a,b){var u=this.m(0,b)
if(u==null)throw H.f(P.X("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.hL.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hO.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hM.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
seU:function(a){H.o(a,"$ib",[P.C],"$ab")}}
A.hK.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hN.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.hV.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.bG.prototype={
aW:function(a){var u=new Float32Array(H.jx(H.o(a,"$ib",[P.z],"$ab")))
C.r.fT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hW.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.dx.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iX.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bz(s.b,b).bz(s.d.bz(s.c,b),c)
s=new V.bj(r.a,r.b,r.c)
if(!J.W(a.f,s)){a.f=s
s=a.a
if(s!=null)s.W()}a.sfM(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.dh(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.W(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}},
$S:36}
F.Z.prototype={
dm:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dE()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cu())return
return s.v(0,Math.sqrt(s.C(s)))},
dq:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.V(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.E(0,q)
r=new V.V(r.a,r.b,r.c)
r=s.aD(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
bs:function(){var u,t=this
if(t.d!=null)return!0
u=t.dm()
if(u==null){u=t.dq()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
dl:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dE()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cu())return
return s.v(0,Math.sqrt(s.C(s)))},
dn:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.E(0,g)
l=new V.V(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.bj(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.V(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.aD(q)
l=l.v(0,Math.sqrt(l.C(l))).aD(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
bq:function(){var u,t=this
if(t.e!=null)return!0
u=t.dl()
if(u==null){u=t.dn()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a0(J.af(s.e),0)+", "+C.b.a0(J.af(t.b.e),0)+", "+C.b.a0(J.af(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
H:function(){return this.u("")}}
F.aX.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a0(J.af(u.e),0)+", "+C.b.a0(J.af(this.b.e),0)},
H:function(){return this.u("")}}
F.bh.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a0(J.af(u.e),0)},
H:function(){return this.u("")}}
F.dl.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
fm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.S()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){r=g[s]
h.a.h(0,r.f5())}h.a.S()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bh()
if(n.a==null)H.a6(P.X("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.aX()
o=l.a
if(o==null)H.a6(P.X("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.a6(P.X("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.A(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cV(l,k,i)}g=h.e
if(g!=null)g.af(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
f2:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=34962,a=c.a.c.length,a0=a3.a,a1=(a0&$.b4().a)!==0?1:0
if((a0&$.b3().a)!==0)++a1
if((a0&$.b2().a)!==0)++a1
if((a0&$.bR().a)!==0)++a1
if((a0&$.b5().a)!==0)++a1
if((a0&$.cF().a)!==0)++a1
if((a0&$.cG().a)!==0)++a1
if((a0&$.bS().a)!==0)++a1
if((a0&$.bQ().a)!==0)++a1
u=a3.gbL(a3)
t=u*4
a0=new Array(a*u)
a0.fixed$length=Array
s=P.z
r=H.c(a0,[s])
a0=new Array(a1)
a0.fixed$length=Array
q=H.c(a0,[Z.cL])
for(p=0,o=0;o<a1;++o){n=a3.f_(o)
m=n.gbL(n)
C.a.O(q,o,new Z.cL(n,m,p*4,t))
for(l=0;l<a;++l){a0=c.a.c
if(l>=a0.length)return H.l(a0,l)
k=a0[l].fk(n)
j=p+l*u
for(i=0;i<k.length;++i){C.a.O(r,j,k[i]);++j}}p+=m}H.o(r,"$ib",[s],"$ab")
a0=a2.a
h=a0.createBuffer()
a0.bindBuffer(b,h)
a0.bufferData(b,new Float32Array(H.jx(r)),35044)
a0.bindBuffer(b,null)
g=new Z.cM(new Z.dF(b,h),q,a3)
g.sdG(H.c([],[Z.be]))
if(c.b.b.length!==0){s=P.C
f=H.c([],[s])
for(o=0;e=c.b.b,o<e.length;++o){e=e[o].a
e.a.a.S()
C.a.h(f,e.e)}d=Z.ju(a0,34963,H.o(f,"$ib",[s],"$ab"))
C.a.h(g.b,new Z.be(0,f.length,d))}if(c.c.b.length!==0){s=P.C
f=H.c([],[s])
for(o=0;e=c.c.b,o<e.length;++o){e=e[o].a
e.a.a.S()
C.a.h(f,e.e)
e=c.c.b
if(o>=e.length)return H.l(e,o)
e=e[o].b
e.a.a.S()
C.a.h(f,e.e)}d=Z.ju(a0,34963,H.o(f,"$ib",[s],"$ab"))
C.a.h(g.b,new Z.be(1,f.length,d))}if(c.d.b.length!==0){s=P.C
f=H.c([],[s])
for(o=0;e=c.d.b,o<e.length;++o){e=e[o].a
e.a.a.S()
C.a.h(f,e.e)
e=c.d.b
if(o>=e.length)return H.l(e,o)
e=e[o].b
e.a.a.S()
C.a.h(f,e.e)
e=c.d.b
if(o>=e.length)return H.l(e,o)
e=e[o].c
e.a.a.S()
C.a.h(f,e.e)}d=Z.ju(a0,34963,H.o(f,"$ib",[s],"$ab"))
C.a.h(g.b,new Z.be(4,f.length,d))}return g},
i:function(a){var u=this,t="   ",s=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.u(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.u(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.u(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.u(t))}return C.a.k(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.A(null)},
$imO:1}
F.ha.prototype={
eX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.Z])
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
C.a.h(u,F.cV(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cV(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cV(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cV(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].bs())s=!1
return s},
br:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].bq())s=!1
return s},
i:function(a){return this.H()},
u:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(a))
return C.a.k(r,"\n")},
H:function(){return this.u("")},
sdB:function(a){this.b=H.o(a,"$ib",[F.Z],"$ab")}}
F.hb.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s=H.c([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].u(a+(""+u+". ")))}return C.a.k(s,"\n")},
H:function(){return this.u("")},
sdH:function(a){this.b=H.o(a,"$ib",[F.aX],"$ab")}}
F.hc.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(a))
return C.a.k(r,"\n")},
H:function(){return this.u("")},
sbj:function(a){this.b=H.o(a,"$ib",[F.bh],"$ab")}}
F.ax.prototype={
bu:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ky(u.cx,r,o,t,s,q,p,a,n)},
f5:function(){return this.bu(null)},
sfM:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
fk:function(a){var u,t,s=this
if(a.n(0,$.b4())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b3())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b2())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bR())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.b5())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cF())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cG())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bS()))return H.c([s.ch],[P.z])
else if(a.n(0,$.bQ())){u=s.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
bs:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dE()
t.d.K(0,new F.i9(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.af(0)}return!0},
bq:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dE()
t.d.K(0,new F.i8(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.af(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.b.a0(J.af(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
H:function(){return this.u("")}}
F.i9.prototype={
$1:function(a){var u,t
H.k(a,"$iZ")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.i8.prototype={
$1:function(a){var u,t
H.k(a,"$iZ")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.i2.prototype={
S:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.X("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.W()
return!0},
ck:function(a,b){var u=null,t=F.ky(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].bs()
return!0},
br:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].bq()
return!0},
f3:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
this.S()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
H:function(){return this.u("")},
seV:function(a){this.c=H.o(a,"$ib",[F.ax],"$ab")}}
F.i3.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var u=this
H.j(b,{func:1,ret:-1,args:[F.Z]})
C.a.K(u.b,b)
C.a.K(u.c,new F.i4(u,b))
C.a.K(u.d,new F.i5(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
return C.a.k(r,"\n")},
sdC:function(a){this.b=H.o(a,"$ib",[F.Z],"$ab")},
sdD:function(a){this.c=H.o(a,"$ib",[F.Z],"$ab")},
sdE:function(a){this.d=H.o(a,"$ib",[F.Z],"$ab")}}
F.i4.prototype={
$1:function(a){H.k(a,"$iZ")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:5}
F.i5.prototype={
$1:function(a){var u
H.k(a,"$iZ")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:5}
F.i6.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
return C.a.k(r,"\n")},
sdI:function(a){this.b=H.o(a,"$ib",[F.aX],"$ab")},
sdJ:function(a){this.c=H.o(a,"$ib",[F.aX],"$ab")}}
F.i7.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].u(""))
return C.a.k(r,"\n")},
sbj:function(a){this.b=H.o(a,"$ib",[F.bh],"$ab")}}
O.de.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
b_:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
bS:function(){return this.b_(null)},
cd:function(a){},
ce:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gp().R(0,t.gbR())
u=t.f
t.f=a
if(a!=null)a.gp().h(0,t.gbR())
s=new D.M("bumpyTextureCube",u,t.f,[T.dr])
s.b=!0
t.b_(s)}},
dk:function(a,b){H.o(a,"$ib",[T.ck],"$ab")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
fG:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g="varying vec3 txtCube;\n",f=h.a
if(f==null){f=A.k9(h.d)
u=f.e
t=a.fr.m(0,u)
if(t==null){s=a.a
t=new A.fP(s,u)
t.d6(s,u)
t.z=f
r=f.d
q=(r?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
p=f.b
if(p)q+="attribute vec3 binmAttr;\n"
q=(r?q+"attribute vec3 txtCubeAttr;\n":q)+"\nvarying vec3 normalVec;\n"
if(p)q+="varying vec3 binormalVec;\n"
q=(r?q+g:q)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(p)q+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
q=(r?q+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":q)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=q.charCodeAt(0)==0?q:q
q=p?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
q=(r?q+g:q)+"\n"
if(f.a.c)q+="uniform samplerCube bumpTxt;\n"
q+="\nvec3 normal()\n{\n"
f=f.a
p=f.c
if(!p||!1)q+="   return normalize(normalVec);\n"
else q+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
q+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.c=o
t.d=q.charCodeAt(0)==0?q:q
t.e=t.c3(o,35633)
t.f=t.c3(t.d,35632)
q=s.createProgram()
t.r=q
s.attachShader(q,t.e)
s.attachShader(t.r,t.f)
s.linkProgram(t.r)
if(!H.w(H.jC(s.getProgramParameter(t.r,35714)))){n=s.getProgramInfoLog(t.r)
s.deleteProgram(t.r)
H.a6(P.X("Failed to link shader: "+H.h(n)))}t.eE()
t.eG()
t.Q=t.x.m(0,"posAttr")
t.cx=t.x.m(0,"normAttr")
t.ch=t.x.m(0,"binmAttr")
t.cy=t.x.m(0,"txt2DAttr")
t.db=t.x.m(0,"txtCubeAttr")
t.dx=H.ar(t.y.aS(0,"viewObjMat"),"$ibG")
t.dy=H.ar(t.y.aS(0,"projViewObjMat"),"$ibG")
if(r)t.fx=H.ar(t.y.aS(0,"txtCubeMat"),"$ibG")
if(f.c)t.go=H.ar(t.y.aS(0,"bumpTxt"),"$idx")
if(u.length===0)H.a6(P.X("May not cache a shader with no name."))
if(a.fr.cr(0,u))H.a6(P.X('Shader cache already contains a shader by the name "'+u+'".'))
a.fr.O(0,u,t)}f=h.a=t
b.e=null}m=f.z
l=m.f
f=b.e
if(!(f instanceof Z.cM))f=b.e=null
if(f==null||!f.d.n(0,l)){b.d.as()
f=m.b
if(f){u=b.d
s=u.e
if(s!=null)++s.d
u.d.br()
u.a.br()
u=u.e
if(u!=null)u.af(0)}u=m.d
if(u){s=b.d
r=s.e
if(r!=null)++r.d
s.a.f3()
s=s.e
if(s!=null)s.af(0)}k=b.d.f2(new Z.ib(a.a),l)
k.aO($.b4()).e=h.a.Q.c
k.aO($.b3()).e=h.a.cx.c
if(f)k.aO($.b2()).e=h.a.ch.c
if(u)k.aO($.b5()).e=h.a.db.c
b.e=k}j=H.c([],[T.ck])
f=h.a
u=a.a
u.useProgram(f.r)
f.x.fc()
f=h.a
s=a.cx
if(s==null){s=a.db
s=s.gac(s)
r=a.dx
r=a.cx=s.q(0,r.gac(r))
s=r}f=f.dx
f.toString
f.aW(s.bG(0,!0))
s=h.a
f=a.ch
if(f==null){f=a.z
if(f==null){f=a.cy
f=f.gac(f)
r=a.db
r=a.z=f.q(0,r.gac(r))
f=r}r=a.dx
r=a.ch=f.q(0,r.gac(r))
f=r}s=s.dy
s.toString
s.aW(f.bG(0,!0))
if(m.d){f=h.a
s=h.c
f=f.fx
f.toString
f.aW(s.bG(0,!0))}if(m.a.c){h.dk(j,h.f)
f=h.a
s=h.f
f=f.go
r=s!=null
if(r&&s.d>=6){f.toString
if(!r||s.d<6)f.a.uniform1i(f.d,0)
else{s=s.a
f.a.uniform1i(f.d,s)}}}for(i=0;i<j.length;++i){f=j[i]
if(!f.c&&f.d>=6){f.c=!0
u.activeTexture(33984+f.a)
u.bindTexture(34067,f.b)}}f=b.e
f.bo(a)
f.au(a)
f.fS(a)
for(i=0;i<j.length;++i){f=j[i]
if(f.c){f.c=!1
u.activeTexture(33984+f.a)
u.bindTexture(34067,null)}}f=h.a
f.toString
u.useProgram(null)
f.x.fa()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.k9(this.d).e}}
O.bF.prototype={}
T.ck.prototype={}
T.dr.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u}}
T.hx.prototype={
an:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a_(t,"load",H.j(new T.hy(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
eA:function(a,b,c){var u,t,s,r
b=V.jN(b)
u=V.jN(a.width)
t=V.jN(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jh()
s.width=u
s.height=t
r=H.k(C.f.cU(s,"2d"),"$ibW")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mf(r.getImageData(0,0,s.width,s.height))}}}
T.hy.prototype={
$1:function(a){var u=this,t=u.a,s=t.eA(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.r.fL(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fb()}++t.e},
$S:24}
V.aT.prototype={
ab:function(a,b){return!0},
i:function(a){return"all"},
$iag:1}
V.ag.prototype={}
V.d7.prototype={
ab:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].ab(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sT:function(a){this.a=H.o(a,"$ib",[V.ag],"$ab")},
$iag:1}
V.aa.prototype={
ab:function(a,b){return!this.d1(0,b)},
i:function(a){return"!["+this.bM(0)+"]"}}
V.h0.prototype={
ab:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jq(this.a),t=H.jq(this.b)
return u+".."+t},
$iag:1}
V.h9.prototype={
d5:function(a){var u,t
if(a.a.length<=0)throw H.f(P.X("May not create a SetMatcher with zero characters."))
u=new H.aF([P.C,P.K])
for(t=new H.c7(a,a.gl(a),[H.ae(a,"t",0)]);t.t();)u.O(0,t.d,!0)
this.seD(u)},
ab:function(a,b){return this.a.cr(0,b)},
i:function(a){var u=this.a
return P.jr(new H.d3(u,[H.u(u,0)]))},
seD:function(a){this.a=H.o(a,"$iH",[P.C,P.K],"$aH")},
$iag:1}
V.cg.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cm(this.a.j(0,b))
r.sT(H.c([],[V.ag]))
r.c=!1
C.a.h(this.c,r)
return r},
fd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.ab(0,a))return r}return},
i:function(a){return this.b},
seT:function(a){this.c=H.o(a,"$ib",[V.cm],"$ab")}}
V.dt.prototype={
i:function(a){var u=H.jP(this.b,"\n","\\n"),t=H.jP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cl.prototype={
ae:function(a,b,c){var u,t,s
H.o(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.O(0,s,b)}},
i:function(a){return this.b},
sey:function(a){var u=P.e
this.c=H.o(a,"$iH",[u,u],"$aH")}}
V.hB.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.cg(this,b)
u.seT(H.c([],[V.cm]))
u.d=null
this.a.O(0,b,u)}return u},
I:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.cl(a)
u=P.e
t.sey(new H.aF([u,u]))
this.b.O(0,a,t)}return t},
cQ:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dt]),l=this.c,k=[P.C],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.b.al(a,s)
q=l.fd(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jr(j)
throw H.f(P.X("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jr(j)
o=l.d
n=o.c.m(0,p)
t=new V.dt(n==null?o.b:n,p,s)}++s}}},
seJ:function(a){this.a=H.o(a,"$iH",[P.e,V.cg],"$aH")},
seM:function(a){this.b=H.o(a,"$iH",[P.e,V.cl],"$aH")}}
V.cm.prototype={
i:function(a){return this.b.b+": "+this.bM(0)}}
X.cO.prototype={$ik8:1}
X.fe.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.Q():u}}
X.dg.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.Q():u},
ak:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
dg:function(){return this.ak(null)},
saE:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gp().R(0,s.gbT())
t=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gbT())
u=new D.M("mover",t,s.b,[U.a3])
u.b=!0
s.ak(u)}},
$ik8:1,
$icO:1}
X.dp.prototype={}
V.b8.prototype={
aI:function(a){this.b=new P.fi(C.G)
this.c=null
this.sb8(H.c([],[[P.b,W.am]]))},
F:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.am]))
u=a.split("\n")
for(l=u.length,t=[W.am],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.E(q)
o=m.b.dt(q,0,q.length)
n=o==null?q:o
C.E.cX(p,H.jP(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaP(m.d),p)}},
cE:function(a,b){var u,t,s,r,q=this
H.o(b,"$ib",[P.e],"$ab")
q.sb8(H.c([],[[P.b,W.am]]))
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aN():t).cQ(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)q.aR(t[r])},
sb8:function(a){this.d=H.o(a,"$ib",[[P.b,W.am]],"$ab")}}
V.jc.prototype={
$1:function(a){var u
H.k(a,"$iaO")
u=C.c.cP(this.a.gff(),2)
if(u!=="0.00")P.jO(u+" fps")},
$S:37}
V.eV.prototype={
aR:function(a){var u=this
switch(a.a){case"Class":u.F(a.b,"#551")
break
case"Comment":u.F(a.b,"#777")
break
case"Id":u.F(a.b,"#111")
break
case"Num":u.F(a.b,"#191")
break
case"Reserved":u.F(a.b,"#119")
break
case"String":u.F(a.b,"#171")
break
case"Symbol":u.F(a.b,"#616")
break
case"Type":u.F(a.b,"#B11")
break
case"Whitespace":u.F(a.b,"#111")
break}},
aN:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hC()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).k(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=a1.j(0,r).k(0,p)
t=V.S("0","9")
C.a.h(u.a,t)
t=a1.j(0,p).k(0,p)
u=V.S("0","9")
C.a.h(t.a,u)
u=a1.j(0,p).k(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=a1.j(0,o).k(0,n)
u=V.S("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).k(0,n)
t=V.S("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).k(0,m)
u=V.r(new H.p(l))
C.a.h(t.a,u)
u=a1.j(0,m).k(0,m)
t=V.r(new H.p(l))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,k)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
u=a1.j(0,k).k(0,j)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
t=a1.j(0,k).k(0,i)
u=V.r(new H.p("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).k(0,k)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).k(0,k).a,new V.aT())
t=a1.j(0,r).k(0,h)
u=V.r(new H.p("'"))
C.a.h(t.a,u)
u=a1.j(0,h).k(0,g)
t=V.r(new H.p("'"))
C.a.h(u.a,t)
t=a1.j(0,h).k(0,f)
u=V.r(new H.p("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).k(0,h)
t=V.r(new H.p("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).k(0,h).a,new V.aT())
t=a1.j(0,r).k(0,e)
u=V.r(new H.p("/"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,d)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
t=a1.j(0,d).k(0,c)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).k(0,d)
t=new V.aa()
s=[V.ag]
t.sT(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,b)
t=V.r(new H.p("*"))
C.a.h(u.a,t)
t=a1.j(0,b).k(0,a)
u=V.r(new H.p("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,b)
t=new V.aa()
t.sT(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,c)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,a0)
u=V.r(new H.p(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).k(0,a0)
t=V.r(new H.p(" \n\t"))
C.a.h(u.a,t)
t=a1.j(0,p)
t.d=t.a.I("Num")
t=a1.j(0,n)
t.d=t.a.I("Num")
t=a1.j(0,m)
t.d=t.a.I("Symbol")
t=a1.j(0,j)
t.d=t.a.I("String")
t=a1.j(0,g)
t.d=t.a.I("String")
t=a1.j(0,c)
t.d=t.a.I(d)
t=a1.j(0,a0)
t.d=t.a.I(a0)
t=a1.j(0,q)
t=t.d=t.a.I(q)
u=[P.e]
t.ae(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ae(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ae(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ff.prototype={
aR:function(a){var u=this
switch(a.a){case"Builtin":u.F(a.b,"#411")
break
case"Comment":u.F(a.b,"#777")
break
case"Id":u.F(a.b,"#111")
break
case"Num":u.F(a.b,"#191")
break
case"Preprocess":u.F(a.b,"#737")
break
case"Reserved":u.F(a.b,"#119")
break
case"Symbol":u.F(a.b,"#611")
break
case"Type":u.F(a.b,"#171")
break
case"Whitespace":u.F(a.b,"#111")
break}},
aN:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hC()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).k(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=e.j(0,r).k(0,p)
t=V.S("0","9")
C.a.h(u.a,t)
t=e.j(0,p).k(0,p)
u=V.S("0","9")
C.a.h(t.a,u)
u=e.j(0,p).k(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=e.j(0,o).k(0,n)
u=V.S("0","9")
C.a.h(t.a,u)
u=e.j(0,n).k(0,n)
t=V.S("0","9")
C.a.h(u.a,t)
t=e.j(0,r).k(0,m)
u=V.r(new H.p(l))
C.a.h(t.a,u)
u=e.j(0,m).k(0,m)
t=V.r(new H.p(l))
C.a.h(u.a,t)
t=e.j(0,r).k(0,k)
u=V.r(new H.p("/"))
C.a.h(t.a,u)
u=e.j(0,k).k(0,j)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).k(0,m).a,new V.aT())
t=e.j(0,j).k(0,i)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.j(0,j).k(0,j)
t=new V.aa()
s=[V.ag]
t.sT(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,h)
t=V.r(new H.p("#"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,h)
u=new V.aa()
u.sT(H.c([],s))
C.a.h(t.a,u)
t=V.r(new H.p("\n"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,g)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,f)
t=V.r(new H.p(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).k(0,f)
u=V.r(new H.p(" \n\t"))
C.a.h(t.a,u)
u=e.j(0,p)
u.d=u.a.I("Num")
u=e.j(0,n)
u.d=u.a.I("Num")
u=e.j(0,m)
u.d=u.a.I("Symbol")
u=e.j(0,i)
u.d=u.a.I(j)
u=e.j(0,g)
u.d=u.a.I(h)
u=e.j(0,f)
u.d=u.a.I(f)
u=e.j(0,q)
u=u.d=u.a.I(q)
t=[P.e]
u.ae(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ae(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ae(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fg.prototype={
aR:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.F(a.b,"#911")
u.F("=",t)
break
case"Id":u.F(a.b,t)
break
case"Other":u.F(a.b,t)
break
case"Reserved":u.F(a.b,"#119")
break
case"String":u.F(a.b,"#171")
break
case"Symbol":u.F(a.b,"#616")
break}},
aN:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hC()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).k(0,r)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).k(0,q)
t=V.r(new H.p("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).k(0,p)
t=V.r(new H.p("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).k(0,p)
u=V.r(new H.p("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).k(0,o)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
t=l.j(0,o).k(0,n)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
u=l.j(0,o).k(0,"EscStr")
t=V.r(new H.p("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").k(0,o)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).k(0,o).a,new V.aT())
C.a.h(l.j(0,s).k(0,m).a,new V.aT())
u=l.j(0,m).k(0,m)
t=new V.aa()
t.sT(H.c([],[V.ag]))
C.a.h(u.a,t)
u=V.r(new H.p('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=l.j(0,p)
u.d=u.a.I("Symbol")
u=l.j(0,n)
u.d=u.a.I("String")
u=l.j(0,r)
t=u.a.I(r)
u.d=t
t.ae(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.I(q)
t=l.j(0,m)
t.d=t.a.I(m)
return l}}
V.fW.prototype={
cE:function(a,b){H.o(b,"$ib",[P.e],"$ab")
this.sb8(H.c([],[[P.b,W.am]]))
this.F(C.a.k(b,"\n"),"#111")},
aR:function(a){},
aN:function(){return}}
V.hd.prototype={
d7:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.m
W.a_(q,"scroll",H.j(new V.hf(o),{func:1,ret:-1,args:[r]}),!1,r)},
cl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.e],"$ab")
this.eF()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cQ(C.a.fj(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.mB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
t.appendChild(l)}else{k=P.kD(C.p,n,C.h,!1)
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
cT:function(a){var u,t,s,r=new V.eV("dart")
r.aI("dart")
u=new V.ff("glsl")
u.aI("glsl")
t=new V.fg("html")
t.aI("html")
s=C.a.fe(H.c([r,u,t],[V.b8]),new V.hg(a))
if(s!=null)return s
r=new V.fW("plain")
r.aI("plain")
return r},
cj:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.o(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.jI(r).aX(r,"+")){C.a.O(b0,s,C.b.aY(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aX(r,"-")){C.a.O(b0,s,C.b.aY(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cT(a8)
q.cE(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kD(C.p,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jT()
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
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.O.eZ(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gN(r);a3.t();)c.appendChild(a3.gG(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
eF:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hC()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new V.aa()
r=[V.ag]
s.sT(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("*"))
C.a.h(s.a,t)
t=u.j(0,p).k(0,"BoldEnd")
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,o)
s=V.r(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new V.aa()
s.sT(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("_"))
C.a.h(s.a,t)
t=u.j(0,o).k(0,n)
s=V.r(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,m)
s=V.r(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new V.aa()
s.sT(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("`"))
C.a.h(s.a,t)
t=u.j(0,m).k(0,"CodeEnd")
s=V.r(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,l)
s=V.r(new H.p("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).k(0,k)
s=V.r(new H.p("|"))
C.a.h(t.a,s)
s=u.j(0,l).k(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new V.aa()
t.sT(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
s=u.j(0,k).k(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new V.aa()
t.sT(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).k(0,i).a,new V.aT())
s=u.j(0,i).k(0,i)
t=new V.aa()
t.sT(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.I(p)
s=u.j(0,n)
s.d=s.a.I(o)
s=u.j(0,"CodeEnd")
s.d=s.a.I(m)
s=u.j(0,j)
s.d=s.a.I("Link")
s=u.j(0,i)
s.d=s.a.I(i)
this.b=u}}
V.hf.prototype={
$1:function(a){P.kq(C.i,new V.he(this.a))},
$S:24}
V.he.prototype={
$0:function(){var u=C.c.a1(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:2}
V.hg.prototype={
$1:function(a){return H.k(a,"$ib8").a===this.a},
$S:38}
D.j9.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iv")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.cj("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cj("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.cZ=u.i
u=J.d1.prototype
u.d0=u.i
u=P.i.prototype
u.d_=u.aU
u=W.J.prototype
u.aZ=u.Z
u=W.e9.prototype
u.d2=u.a5
u=V.d7.prototype
u.d1=u.ab
u.bM=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m9","lR",11)
u(P,"ma","lS",11)
u(P,"mb","lT",11)
t(P,"kM","m7",3)
s(W,"ml",4,null,["$4"],["lV"],19,0)
s(W,"mm",4,null,["$4"],["lW"],19,0)
var m
r(m=E.a9.prototype,"gcC",0,0,null,["$1","$0"],["cD","fu"],1,0)
r(m,"gcA",0,0,null,["$1","$0"],["cB","ft"],1,0)
r(m,"gcw",0,0,null,["$1","$0"],["cz","fp"],1,0)
q(m,"gfn","fo",7)
q(m,"gfq","fs",7)
r(m=E.ds.prototype,"gbO",0,0,null,["$1","$0"],["bQ","bP"],1,0)
p(m,"gfH","cI",3)
o(m=X.dA.prototype,"ge4","e5",9)
o(m,"gdT","dU",9)
o(m,"gdZ","e_",4)
o(m,"ge8","e9",20)
o(m,"ge6","e7",20)
o(m,"geb","ec",4)
o(m,"gef","eg",4)
o(m,"ge2","e3",4)
o(m,"ged","ee",4)
o(m,"ge0","e1",4)
o(m,"geh","ei",34)
o(m,"gej","ek",9)
o(m,"ges","eu",10)
o(m,"geo","ep",10)
o(m,"geq","er",10)
n(V.N.prototype,"gl","by",21)
n(V.V.prototype,"gl","by",21)
r(m=U.c5.prototype,"gao",0,0,null,["$1","$0"],["J","U"],1,0)
q(m,"gdR","dS",22)
q(m,"gem","en",22)
r(m=U.dB.prototype,"gao",0,0,null,["$1","$0"],["J","U"],1,0)
o(m,"gbb","bc",0)
o(m,"gbd","be",0)
o(m,"gbf","bg",0)
r(m=U.dC.prototype,"gao",0,0,null,["$1","$0"],["J","U"],1,0)
o(m,"gbb","bc",0)
o(m,"gbd","be",0)
o(m,"gbf","bg",0)
o(m,"gdL","dM",0)
o(m,"gdN","dO",0)
o(m,"geR","eS",0)
o(m,"geP","eQ",0)
o(m,"geN","eO",0)
o(U.dD.prototype,"gdP","dQ",0)
r(m=M.cT.prototype,"ga2",0,0,null,["$1","$0"],["a6","dc"],1,0)
q(m,"gdV","dW",7)
q(m,"gdX","dY",7)
r(O.de.prototype,"gbR",0,0,null,["$1","$0"],["b_","bS"],1,0)
r(X.dg.prototype,"gbT",0,0,null,["$1","$0"],["ak","dg"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.jo,J.a,J.ak,P.dX,P.i,H.c7,P.aD,H.bv,H.dz,H.hH,P.bb,H.bX,H.ee,P.a1,H.fr,H.fs,H.fn,P.ek,P.aS,P.ap,P.dG,P.hn,P.ci,P.ho,P.aO,P.a7,P.iW,P.iK,P.bH,P.dW,P.t,P.bY,P.fj,P.iU,P.K,P.al,P.a0,P.ba,P.fU,P.dm,P.dO,P.fd,P.bc,P.b,P.H,P.G,P.ac,P.e,P.bD,W.eR,W.bm,W.x,W.dd,W.e9,W.iP,W.cW,W.ai,W.iJ,W.eq,P.ep,P.iE,O.Y,O.c8,E.eK,E.a9,E.h1,E.ds,Z.dF,Z.ib,Z.cM,Z.be,Z.bl,D.eN,D.c3,D.v,X.cN,X.d2,X.fp,X.fu,X.ah,X.fG,X.hD,X.dA,V.aU,V.f4,V.d8,V.bg,V.a4,V.bj,V.dh,V.dj,V.N,V.V,U.dB,U.dC,U.dD,M.cT,A.cI,A.eF,A.bZ,A.fQ,A.dv,A.hT,F.Z,F.aX,F.bh,F.dl,F.ha,F.hb,F.hc,F.ax,F.i2,F.i3,F.i6,F.i7,O.bF,T.hx,V.aT,V.ag,V.d7,V.h0,V.h9,V.cg,V.dt,V.cl,V.hB,X.cO,X.dp,X.dg,V.b8,V.hd])
s(J.a,[J.fl,J.fm,J.d1,J.aE,J.d0,J.bx,H.cb,W.d,W.eC,W.cJ,W.bW,W.az,W.aA,W.L,W.dI,W.eW,W.eX,W.dK,W.cS,W.dM,W.eZ,W.m,W.dP,W.aC,W.fh,W.dS,W.bd,W.d5,W.fA,W.dY,W.dZ,W.aH,W.e_,W.e2,W.aI,W.e6,W.e8,W.aL,W.ea,W.aM,W.ef,W.at,W.ei,W.hA,W.aP,W.el,W.hF,W.i_,W.er,W.et,W.ev,W.ex,W.ez,P.aW,P.dU,P.b_,P.e4,P.fZ,P.eg,P.b0,P.en,P.eG,P.dH,P.cK,P.di,P.bC,P.dk,P.dq,P.dw,P.ec])
s(J.d1,[J.fV,J.cn,J.bf])
t(J.jn,J.aE)
s(J.d0,[J.d_,J.cZ])
t(P.ft,P.dX)
s(P.ft,[H.dy,W.ik,W.a8,P.f9])
t(H.p,H.dy)
s(P.i,[H.f1,H.fx,H.co])
s(H.f1,[H.by,H.d3])
s(P.aD,[H.fy,H.ic])
t(H.fz,H.by)
s(P.bb,[H.fR,H.fo,H.hY,H.hJ,H.eM,H.h7,P.eE,P.df,P.as,P.hZ,P.hX,P.ch,P.eP,P.eU])
s(H.bX,[H.jd,H.hu,H.j5,H.j6,H.j7,P.ig,P.ie,P.ih,P.ii,P.iT,P.iS,P.ir,P.iv,P.is,P.it,P.iu,P.iy,P.iz,P.ix,P.iw,P.hp,P.hq,P.j_,P.iH,P.iG,P.iI,P.fw,P.f_,P.f0,W.f2,W.fC,W.fE,W.h6,W.hm,W.iq,W.fO,W.fN,W.iL,W.iM,W.iR,W.iV,P.j1,P.fa,P.fb,P.eI,E.h2,E.h3,E.h4,E.hz,D.f5,D.f6,F.iX,F.i9,F.i8,F.i4,F.i5,T.hy,V.jc,V.hf,V.he,V.hg,D.j9])
s(H.hu,[H.hk,H.bU])
t(H.id,P.eE)
t(P.fv,P.a1)
s(P.fv,[H.aF,W.ij])
t(H.da,H.cb)
s(H.da,[H.cs,H.cu])
t(H.ct,H.cs)
t(H.ca,H.ct)
t(H.cv,H.cu)
t(H.db,H.cv)
s(H.db,[H.fH,H.fI,H.fJ,H.fK,H.fL,H.dc,H.fM])
t(P.iF,P.iW)
t(P.iD,P.iK)
t(P.c_,P.ho)
t(P.f3,P.bY)
s(P.c_,[P.fi,P.i1])
t(P.i0,P.f3)
s(P.a0,[P.z,P.C])
s(P.as,[P.bB,P.fk])
s(W.d,[W.y,W.f8,W.aK,W.cw,W.aN,W.au,W.cy,W.ia,W.cp,P.eJ,P.bt])
s(W.y,[W.J,W.b7,W.cq])
s(W.J,[W.q,P.n])
s(W.q,[W.cH,W.eD,W.bT,W.b6,W.bu,W.am,W.fc,W.c6,W.h8,W.bE,W.dn,W.hs,W.ht,W.cj])
s(W.az,[W.c0,W.eS,W.eT])
t(W.eQ,W.aA)
t(W.c1,W.dI)
t(W.dL,W.dK)
t(W.cR,W.dL)
t(W.dN,W.dM)
t(W.eY,W.dN)
t(W.aB,W.cJ)
t(W.dQ,W.dP)
t(W.f7,W.dQ)
t(W.dT,W.dS)
t(W.bw,W.dT)
t(W.bk,W.m)
s(W.bk,[W.aG,W.a2,W.av])
t(W.fB,W.dY)
t(W.fD,W.dZ)
t(W.e0,W.e_)
t(W.fF,W.e0)
t(W.e3,W.e2)
t(W.cc,W.e3)
t(W.e7,W.e6)
t(W.fX,W.e7)
t(W.h5,W.e8)
t(W.cx,W.cw)
t(W.hh,W.cx)
t(W.eb,W.ea)
t(W.hi,W.eb)
t(W.hl,W.ef)
t(W.ej,W.ei)
t(W.hv,W.ej)
t(W.cz,W.cy)
t(W.hw,W.cz)
t(W.em,W.el)
t(W.hE,W.em)
t(W.aR,W.a2)
t(W.es,W.er)
t(W.il,W.es)
t(W.dJ,W.cS)
t(W.eu,W.et)
t(W.iA,W.eu)
t(W.ew,W.ev)
t(W.e1,W.ew)
t(W.ey,W.ex)
t(W.iN,W.ey)
t(W.eA,W.ez)
t(W.iO,W.eA)
t(W.im,W.ij)
t(W.io,P.hn)
t(W.jv,W.io)
t(W.ip,P.ci)
t(W.iQ,W.e9)
t(P.ab,P.iE)
t(P.dV,P.dU)
t(P.fq,P.dV)
t(P.e5,P.e4)
t(P.fS,P.e5)
t(P.ce,P.n)
t(P.eh,P.eg)
t(P.hr,P.eh)
t(P.eo,P.en)
t(P.hG,P.eo)
t(P.eH,P.dH)
t(P.fT,P.bt)
t(P.ed,P.ec)
t(P.hj,P.ed)
s(E.eK,[Z.cL,A.cf,T.ck])
s(D.v,[D.cX,D.cY,D.M,X.fY])
s(X.fY,[X.d6,X.aZ,X.c9,X.du])
s(D.eN,[U.eO,U.a3])
t(U.cP,U.a3)
t(U.c5,O.Y)
t(A.fP,A.cf)
s(A.dv,[A.hL,A.hO,A.hQ,A.hS,A.hM,A.hK,A.hN,A.hP,A.hR,A.hU,A.hV,A.bG,A.hW,A.dx])
t(O.de,O.bF)
t(T.dr,T.ck)
s(V.d7,[V.aa,V.cm])
t(X.fe,X.dp)
s(V.b8,[V.eV,V.ff,V.fg,V.fW])
u(H.dy,H.dz)
u(H.cs,P.t)
u(H.ct,H.bv)
u(H.cu,P.t)
u(H.cv,H.bv)
u(P.dX,P.t)
u(W.dI,W.eR)
u(W.dK,P.t)
u(W.dL,W.x)
u(W.dM,P.t)
u(W.dN,W.x)
u(W.dP,P.t)
u(W.dQ,W.x)
u(W.dS,P.t)
u(W.dT,W.x)
u(W.dY,P.a1)
u(W.dZ,P.a1)
u(W.e_,P.t)
u(W.e0,W.x)
u(W.e2,P.t)
u(W.e3,W.x)
u(W.e6,P.t)
u(W.e7,W.x)
u(W.e8,P.a1)
u(W.cw,P.t)
u(W.cx,W.x)
u(W.ea,P.t)
u(W.eb,W.x)
u(W.ef,P.a1)
u(W.ei,P.t)
u(W.ej,W.x)
u(W.cy,P.t)
u(W.cz,W.x)
u(W.el,P.t)
u(W.em,W.x)
u(W.er,P.t)
u(W.es,W.x)
u(W.et,P.t)
u(W.eu,W.x)
u(W.ev,P.t)
u(W.ew,W.x)
u(W.ex,P.t)
u(W.ey,W.x)
u(W.ez,P.t)
u(W.eA,W.x)
u(P.dU,P.t)
u(P.dV,W.x)
u(P.e4,P.t)
u(P.e5,W.x)
u(P.eg,P.t)
u(P.eh,W.x)
u(P.en,P.t)
u(P.eo,W.x)
u(P.dH,P.a1)
u(P.ec,P.t)
u(P.ed,W.x)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.b6.prototype
C.f=W.bu.prototype
C.E=W.am.prototype
C.H=J.a.prototype
C.a=J.aE.prototype
C.I=J.cZ.prototype
C.d=J.d_.prototype
C.c=J.d0.prototype
C.b=J.bx.prototype
C.J=J.bf.prototype
C.N=W.cc.prototype
C.q=J.fV.prototype
C.r=P.bC.prototype
C.O=W.bE.prototype
C.t=W.dn.prototype
C.l=J.cn.prototype
C.u=W.aR.prototype
C.v=W.cp.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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

C.C=new P.fU()
C.h=new P.i0()
C.D=new P.i1()
C.e=new P.iF()
C.i=new P.ba(0)
C.F=new P.ba(5e6)
C.G=new P.fj("element",!0,!1,!1,!1)
C.K=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.L=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.M=H.c(u([]),[P.e])
C.p=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.j=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.k=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{C:"int",z:"double",a0:"num",e:"String",K:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.v]},{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.G,args:[F.Z]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.C,[P.i,E.a9]]},{func:1,ret:P.G,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.e,args:[P.C]},{func:1,ret:P.K,args:[W.y]},{func:1,ret:P.G,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.ai]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.K,args:[W.J,P.e,P.e,W.bm]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.C,[P.i,U.a3]]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.G,args:[W.m]},{func:1,args:[W.m]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[P.a0]},{func:1,ret:P.G,args:[,],opt:[P.ac]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:[P.ap,,],args:[,]},{func:1,ret:P.G,args:[F.ax,P.z,P.z]},{func:1,ret:P.G,args:[P.aO]},{func:1,ret:P.K,args:[V.b8]},{func:1,ret:W.J,args:[W.y]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ay=0
$.bV=null
$.jU=null
$.jy=!1
$.kP=null
$.kK=null
$.kU=null
$.j2=null
$.j8=null
$.jK=null
$.bI=null
$.cB=null
$.cC=null
$.jz=!1
$.T=C.e
$.ad=[]
$.aV=null
$.jj=null
$.k_=null
$.jZ=null
$.dR=P.k2(P.e,P.bc)
$.k6=null
$.k7=null
$.kd=null
$.ke=null
$.kk=null
$.ku=null
$.kx=null
$.kw=null
$.kv=null
$.kc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mK","kY",function(){return H.kO("_$dart_dartClosure")})
u($,"mL","jQ",function(){return H.kO("_$dart_js")})
u($,"mQ","kZ",function(){return H.aQ(H.hI({
toString:function(){return"$receiver$"}}))})
u($,"mR","l_",function(){return H.aQ(H.hI({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mS","l0",function(){return H.aQ(H.hI(null))})
u($,"mT","l1",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mW","l4",function(){return H.aQ(H.hI(void 0))})
u($,"mX","l5",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mV","l3",function(){return H.aQ(H.ks(null))})
u($,"mU","l2",function(){return H.aQ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mZ","l7",function(){return H.aQ(H.ks(void 0))})
u($,"mY","l6",function(){return H.aQ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nf","jR",function(){return P.lQ()})
u($,"nh","lc",function(){return P.lJ("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ng","lb",function(){return P.k3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"n8","la",function(){return Z.ao(0)})
u($,"n2","l8",function(){return Z.ao(511)})
u($,"na","b4",function(){return Z.ao(1)})
u($,"n9","b3",function(){return Z.ao(2)})
u($,"n4","b2",function(){return Z.ao(4)})
u($,"nb","bR",function(){return Z.ao(8)})
u($,"nc","b5",function(){return Z.ao(16)})
u($,"n5","cF",function(){return Z.ao(32)})
u($,"n6","cG",function(){return Z.ao(64)})
u($,"n7","l9",function(){return Z.ao(96)})
u($,"nd","bS",function(){return Z.ao(128)})
u($,"n3","bQ",function(){return Z.ao(256)})
u($,"mJ","kX",function(){return new V.f4(1e-9)})
u($,"mI","P",function(){return $.kX()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cb,ArrayBufferView:H.cb,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.fH,Int32Array:H.fI,Int8Array:H.fJ,Uint16Array:H.fK,Uint32Array:H.fL,Uint8ClampedArray:H.dc,CanvasPixelArray:H.dc,Uint8Array:H.fM,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eC,HTMLAnchorElement:W.cH,HTMLAreaElement:W.eD,HTMLBaseElement:W.bT,Blob:W.cJ,HTMLBodyElement:W.b6,HTMLCanvasElement:W.bu,CanvasRenderingContext2D:W.bW,CDATASection:W.b7,CharacterData:W.b7,Comment:W.b7,ProcessingInstruction:W.b7,Text:W.b7,CSSNumericValue:W.c0,CSSUnitValue:W.c0,CSSPerspective:W.eQ,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.c1,MSStyleCSSProperties:W.c1,CSS2Properties:W.c1,CSSImageValue:W.az,CSSKeywordValue:W.az,CSSPositionValue:W.az,CSSResourceValue:W.az,CSSURLImageValue:W.az,CSSStyleValue:W.az,CSSMatrixComponent:W.aA,CSSRotation:W.aA,CSSScale:W.aA,CSSSkew:W.aA,CSSTranslation:W.aA,CSSTransformComponent:W.aA,CSSTransformValue:W.eS,CSSUnparsedValue:W.eT,DataTransferItemList:W.eW,HTMLDivElement:W.am,DOMException:W.eX,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.eY,DOMTokenList:W.eZ,Element:W.J,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aB,FileList:W.f7,FileWriter:W.f8,HTMLFormElement:W.fc,Gamepad:W.aC,History:W.fh,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,ImageData:W.bd,HTMLImageElement:W.c6,KeyboardEvent:W.aG,Location:W.d5,MediaList:W.fA,MIDIInputMap:W.fB,MIDIOutputMap:W.fD,MimeType:W.aH,MimeTypeArray:W.fF,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cc,RadioNodeList:W.cc,Plugin:W.aI,PluginArray:W.fX,RTCStatsReport:W.h5,HTMLSelectElement:W.h8,SourceBuffer:W.aK,SourceBufferList:W.hh,SpeechGrammar:W.aL,SpeechGrammarList:W.hi,SpeechRecognitionResult:W.aM,Storage:W.hl,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableCellElement:W.bE,HTMLTableDataCellElement:W.bE,HTMLTableHeaderCellElement:W.bE,HTMLTableElement:W.dn,HTMLTableRowElement:W.hs,HTMLTableSectionElement:W.ht,HTMLTemplateElement:W.cj,TextTrack:W.aN,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.hv,TextTrackList:W.hw,TimeRanges:W.hA,Touch:W.aP,TouchEvent:W.av,TouchList:W.hE,TrackDefaultList:W.hF,CompositionEvent:W.bk,FocusEvent:W.bk,TextEvent:W.bk,UIEvent:W.bk,URL:W.i_,VideoTrackList:W.ia,WheelEvent:W.aR,Window:W.cp,DOMWindow:W.cp,Attr:W.cq,CSSRuleList:W.il,ClientRect:W.dJ,DOMRect:W.dJ,GamepadList:W.iA,NamedNodeMap:W.e1,MozNamedAttrMap:W.e1,SpeechRecognitionResultList:W.iN,StyleSheetList:W.iO,SVGLength:P.aW,SVGLengthList:P.fq,SVGNumber:P.b_,SVGNumberList:P.fS,SVGPointList:P.fZ,SVGScriptElement:P.ce,SVGStringList:P.hr,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,SVGTransform:P.b0,SVGTransformList:P.hG,AudioBuffer:P.eG,AudioParamMap:P.eH,AudioTrackList:P.eJ,AudioContext:P.bt,webkitAudioContext:P.bt,BaseAudioContext:P.bt,OfflineAudioContext:P.fT,WebGLBuffer:P.cK,WebGLProgram:P.di,WebGL2RenderingContext:P.bC,WebGLShader:P.dk,WebGLTexture:P.dq,WebGLUniformLocation:P.dw,SQLResultSetRowList:P.hj})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
W.cw.$nativeSuperclassTag="EventTarget"
W.cx.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.kR,[])
else D.kR([])})})()
//# sourceMappingURL=test.dart.js.map
