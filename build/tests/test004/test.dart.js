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
a[c]=function(){a[c]=function(){H.mn(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jn(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={j7:function j7(){},
f3:function(){return new P.c7("No element")},
ld:function(){return new P.c7("Too many elements")},
o:function o(a){this.a=a},
eI:function eI(){},
bn:function bn(){},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fi:function fi(a,b,c){this.a=a
this.b=b
this.$ti=c},
fj:function fj(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fk:function fk(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(){},
dg:function dg(){},
df:function df(){},
bC:function(a){var u,t=H.mp(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m3:function(a){return v.types[H.ap(a)]},
ma:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iy},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.f(H.cs(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c3:function(a){return H.li(a)+H.jj(H.be(a),0,null)},
li:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibv){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bC(t.length>1&&C.b.aa(t,0)===36?C.b.aG(t,1):t)},
jY:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lq:function(a){var u,t,s,r=H.c([],[P.z])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.cs(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.av(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.cs(s))}return H.jY(r)},
jZ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.cs(s))
if(s<0)throw H.f(H.cs(s))
if(s>65535)return H.lq(a)}return H.jY(a)},
j9:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.av(u,10))>>>0,56320|u&1023)}throw H.f(P.aE(a,0,1114111,null,null))},
bp:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lp:function(a){var u=H.bp(a).getFullYear()+0
return u},
ln:function(a){var u=H.bp(a).getMonth()+1
return u},
lj:function(a){var u=H.bp(a).getDate()+0
return u},
lk:function(a){var u=H.bp(a).getHours()+0
return u},
lm:function(a){var u=H.bp(a).getMinutes()+0
return u},
lo:function(a){var u=H.bp(a).getSeconds()+0
return u},
ll:function(a){var u=H.bp(a).getMilliseconds()+0
return u},
bf:function(a){throw H.f(H.cs(a))},
j:function(a,b){if(a==null)J.bh(a)
throw H.f(H.ct(a,b))},
ct:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,s,null)
u=H.ap(J.bh(a))
if(!(b<0)){if(typeof u!=="number")return H.bf(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.d3(b,s)},
lZ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bq(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bq(a,c,!0,b,"end",u)
return new P.ar(!0,b,"end",null)},
cs:function(a){return new P.ar(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kE})
u.name=""}else u.toString=H.kE
return u},
kE:function(){return J.aq(this.dartException)},
a8:function(a){throw H.f(a)},
H:function(a){throw H.f(P.b1(a))},
aL:function(a){var u,t,s,r,q,p
a=H.kD(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jT:function(a,b){return new H.fC(a,b==null?null:b.method)},
j8:function(a,b){var u=b==null,t=u?null:b.method
return new H.f8(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.av(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j8(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jT(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kH()
q=$.kI()
p=$.kJ()
o=$.kK()
n=$.kN()
m=$.kO()
l=$.kM()
$.kL()
k=$.kQ()
j=$.kP()
i=r.T(u)
if(i!=null)return f.$1(H.j8(H.G(u),i))
else{i=q.T(u)
if(i!=null){i.method="call"
return f.$1(H.j8(H.G(u),i))}else{i=p.T(u)
if(i==null){i=o.T(u)
if(i==null){i=n.T(u)
if(i==null){i=m.T(u)
if(i==null){i=l.T(u)
if(i==null){i=o.T(u)
if(i==null){i=k.T(u)
if(i==null){i=j.T(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jT(H.G(u),i))}}return f.$1(new H.hH(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ar(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
bA:function(a){var u
if(a==null)return new H.dU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dU(a)},
m1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.H(0,a[u],a[t])}return b},
m9:function(a,b,c,d,e,f){H.n(a,"$ib5")
switch(H.ap(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.a1("Unsupported number of arguments for wrapped closure"))},
bz:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m9)
a.$identity=u
return u},
l6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h4().constructor.prototype):Object.create(new H.bK(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.as
if(typeof t!=="number")return t.O()
$.as=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jF(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l2(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jF(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l2:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jD:H.j2
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
l3:function(a,b,c,d){var u=H.j2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l3(t,!r,u,b)
if(t===0){r=$.as
if(typeof r!=="number")return r.O()
$.as=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
return new Function(r+H.h(q==null?$.bL=H.eq("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.as
if(typeof r!=="number")return r.O()
$.as=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
return new Function(r+H.h(q==null?$.bL=H.eq("self"):q)+"."+H.h(u)+"("+o+");}")()},
l4:function(a,b,c,d){var u=H.j2,t=H.jD
switch(b?-1:a){case 0:throw H.f(H.lu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l5:function(a,b){var u,t,s,r,q,p,o,n=$.bL
if(n==null)n=$.bL=H.eq("self")
u=$.jC
if(u==null)u=$.jC=H.eq("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l4(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.as
if(typeof u!=="number")return u.O()
$.as=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.as
if(typeof u!=="number")return u.O()
$.as=u+1
return new Function(n+u+"}")()},
jn:function(a,b,c,d,e,f,g){return H.l6(a,b,c,d,!!e,!!f,g)},
j2:function(a){return a.a},
jD:function(a){return a.c},
eq:function(a){var u,t,s,r=new H.bK("self","target","receiver","name"),q=J.j5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.lS("boolean expression must not be null")
return a},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aM(a,"String"))},
n3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aM(a,"double"))},
mf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aM(a,"num"))},
jk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aM(a,"bool"))},
ap:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aM(a,"int"))},
kB:function(a,b){throw H.f(H.aM(a,H.bC(H.G(b).substring(2))))},
mh:function(a,b){throw H.f(H.l1(a,H.bC(H.G(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.kB(a,b)},
eg:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mh(a,b)},
mb:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.kB(a,b)},
kv:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ap(u)]
else return a.$S()}return},
ef:function(a,b){var u
if(typeof a=="function")return!0
u=H.kv(J.Q(a))
if(u==null)return!1
return H.km(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jg)return a
$.jg=!0
try{if(H.ef(a,b))return a
u=H.iX(b)
t=H.aM(a,u)
throw H.f(t)}finally{$.jg=!1}},
jo:function(a,b){if(a!=null&&!H.jm(a,b))H.a8(H.aM(a,H.iX(b)))
return a},
aM:function(a,b){return new H.hr("TypeError: "+P.cL(a)+": type '"+H.h(H.kq(a))+"' is not a subtype of type '"+b+"'")},
l1:function(a,b){return new H.er("CastError: "+P.cL(a)+": type '"+H.h(H.kq(a))+"' is not a subtype of type '"+b+"'")},
kq:function(a){var u,t=J.Q(a)
if(!!t.$ibM){u=H.kv(t)
if(u!=null)return H.iX(u)
return"Closure"}return H.c3(a)},
lS:function(a){throw H.f(new H.i_(a))},
mn:function(a){throw H.f(new P.ey(a))},
lu:function(a){return new H.fR(a)},
kw:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
be:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.bB(a["$a"+H.h(c)],H.be(b))},
cu:function(a,b,c,d){var u=H.bB(a["$a"+H.h(c)],H.be(b))
return u==null?null:u[d]},
a7:function(a,b,c){var u=H.bB(a["$a"+H.h(b)],H.be(a))
return u==null?null:u[c]},
u:function(a,b){var u=H.be(a)
return u==null?null:u[b]},
iX:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bC(a[0].name)+H.jj(a,1,b)
if(typeof a=="function")return H.bC(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ap(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.h(b[t])}if('func' in a)return H.lL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.e])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.j(a0,m)
p=C.b.O(p,a0[m])
l=u[q]
if(l!=null&&l!==P.F)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.G(n[g])
i=i+h+H.bd(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jj:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bs("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
bB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jl:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.be(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.kt(H.bB(t[d],u),null,c,null)},
t:function(a,b,c,d){if(a==null)return a
if(H.jl(a,b,c,d))return a
throw H.f(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bC(b.substring(2))+H.jj(c,0,null),v.mangledGlobalNames)))},
kt:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aj(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aj(a[t],b,c[t],d))return!1
return!0},
n1:function(a,b,c){return a.apply(b,H.bB(J.Q(b)["$a"+H.h(c)],H.be(b)))},
ky:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="C"||a===-1||a===-2||H.ky(u)}return!1},
jm:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="C"||b===-1||b===-2||H.ky(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ef(a,b)}u=J.Q(a).constructor
t=H.be(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aj(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jm(a,b))throw H.f(H.aM(a,H.iX(b)))
return a},
aj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aj("type" in a?a.type:l,b,s,d)
else if(H.aj(a,b,s,d))return!0
else{if(!('$i'+"bT" in t.prototype))return!1
r=t.prototype["$a"+"bT"]
q=H.bB(r,u?a.slice(1):l)
return H.aj(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.km(a,b,c,d)
if('func' in a)return c.name==="b5"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kt(H.bB(m,u),b,p,d)},
km:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aj(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aj(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aj(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.me(h,b,g,d)},
me:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aj(c[s],d,a[s],b))return!1}return!0},
n2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mc:function(a){var u,t,s,r,q=H.G($.kx.$1(a)),p=$.iN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.G($.ks.$2(a,q))
if(q!=null){p=$.iN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iW(u)
$.iN[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iU[q]=u
return u}if(s==="-"){r=H.iW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kA(a,u)
if(s==="*")throw H.f(P.k9(q))
if(v.leafTags[q]===true){r=H.iW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kA(a,u)},
kA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iW:function(a){return J.jt(a,!1,null,!!a.$iy)},
md:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iW(u)
else return J.jt(u,c,null,null)},
m7:function(){if(!0===$.js)return
$.js=!0
H.m8()},
m8:function(){var u,t,s,r,q,p,o,n
$.iN=Object.create(null)
$.iU=Object.create(null)
H.m6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kC.$1(q)
if(p!=null){o=H.md(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m6:function(){var u,t,s,r,q,p,o=C.v()
o=H.by(C.w,H.by(C.x,H.by(C.o,H.by(C.o,H.by(C.y,H.by(C.z,H.by(C.A(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kx=new H.iR(r)
$.ks=new H.iS(q)
$.kC=new H.iT(p)},
by:function(a,b){return a(b)||b},
lf:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eW("Illegal RegExp pattern ("+String(p)+")",a))},
mk:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m_:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kD:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jv:function(a,b,c){var u=H.ml(a,b,c)
return u},
ml:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kD(b),'g'),H.m_(c))},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fC:function fC(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
j_:function j_(a){this.a=a},
dU:function dU(a){this.a=a
this.b=null},
bM:function bM(){},
he:function he(){},
h4:function h4(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
er:function er(a){this.a=a},
fR:function fR(a){this.a=a},
i_:function i_(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function cS(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jf:function(a){return a},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.ct(b,a))},
lK:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lZ(a,b,c))
return b},
c0:function c0(){},
cW:function cW(){},
c_:function c_(){},
cX:function cX(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
cY:function cY(){},
fy:function fy(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
m0:function(a){return J.jM(a?Object.keys(a):[],null)},
mp:function(a){return v.mangledGlobalNames[a]},
mg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.js==null){H.m7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.k9("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jx()]
if(r!=null)return r
r=H.mc(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jx(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
le:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aE(a,0,4294967295,"length",null))
return J.jM(new Array(a),b)},
jM:function(a,b){return J.j5(H.c(a,[b]))},
j5:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.f5.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.f6.prototype
if(typeof a=="boolean")return J.f4.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.iQ(a)},
jp:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.iQ(a)},
iP:function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.iQ(a)},
m2:function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bv.prototype
return a},
jq:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bv.prototype
return a},
jr:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.iQ(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
jz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m2(a).I(a,b)},
kW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ma(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jp(a).m(a,b)},
kX:function(a,b,c,d){return J.jr(a).ej(a,b,c,d)},
j0:function(a,b){return J.iP(a).q(a,b)},
kY:function(a,b){return J.iP(a).D(a,b)},
kZ:function(a){return J.jr(a).geo(a)},
cx:function(a){return J.Q(a).gB(a)},
bg:function(a){return J.iP(a).gF(a)},
bh:function(a){return J.jp(a).gk(a)},
jA:function(a){return J.iP(a).f0(a)},
l_:function(a,b,c){return J.jq(a).ar(a,b,c)},
l0:function(a){return J.jq(a).fa(a)},
aq:function(a){return J.Q(a).i(a)},
a:function a(){},
f4:function f4(){},
f6:function f6(){},
cQ:function cQ(){},
fG:function fG(){},
bv:function bv(){},
b7:function b7(){},
az:function az(a){this.$ti=a},
j6:function j6(a){this.$ti=a},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bW:function bW(){},
cP:function cP(){},
f5:function f5(){},
b6:function b6(){}},P={
lA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lT()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bz(new P.i1(s),1)).observe(u,{childList:true})
return new P.i0(s,u,t)}else if(self.setImmediate!=null)return P.lU()
return P.lV()},
lB:function(a){self.scheduleImmediate(H.bz(new P.i2(H.l(a,{func:1,ret:-1})),0))},
lC:function(a){self.setImmediate(H.bz(new P.i3(H.l(a,{func:1,ret:-1})),0))},
lD:function(a){P.jb(C.h,H.l(a,{func:1,ret:-1}))},
jb:function(a,b){var u=C.e.ad(a.a,1000)
return P.lI(u<0?0:u,b)},
k7:function(a,b){var u=C.e.ad(a.a,1000)
return P.lJ(u<0?0:u,b)},
lI:function(a,b){var u=new P.e_()
u.cN(a,b)
return u},
lJ:function(a,b){var u=new P.e_()
u.cO(a,b)
return u},
lE:function(a,b){var u,t,s
b.a=1
try{a.cf(new P.ic(b),new P.id(b),null)}catch(s){u=H.ac(s)
t=H.bA(s)
P.mi(new P.ie(b,u,t))}},
kh:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iai")
if(u>=4){t=b.aW()
b.a=a.a
b.c=a.c
P.ch(b,t)}else{t=H.n(b.c,"$iaO")
b.a=2
b.c=a
a.bE(t)}},
ch:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia_")
P.iI(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.ch(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.n(q,"$ia_")
P.iI(i,i,g.b,q.a,q.b)
return}l=$.O
if(l!==n)$.O=n
else l=i
g=b.c
if((g&15)===8)new P.ij(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.ii(u,b,q).$0()}else if((g&2)!==0)new P.ih(h,u,b).$0()
if(l!=null)$.O=l
g=u.b
if(!!J.Q(g).$ibT){if(g.a>=4){k=H.n(o.c,"$iaO")
o.c=null
b=o.au(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.kh(g,o)
return}}j=b.b
k=H.n(j.c,"$iaO")
j.c=null
b=j.au(k)
g=u.a
p=u.b
if(!g){H.D(p,H.u(j,0))
j.a=4
j.c=p}else{H.n(p,"$ia_")
j.a=8
j.c=p}h.a=j
g=j}},
lO:function(a,b){if(H.ef(a,{func:1,args:[P.F,P.a5]}))return H.l(a,{func:1,ret:null,args:[P.F,P.a5]})
if(H.ef(a,{func:1,args:[P.F]}))return H.l(a,{func:1,ret:null,args:[P.F]})
throw H.f(P.j1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lN:function(){var u,t
for(;u=$.bx,u!=null;){$.cr=null
t=u.b
$.bx=t
if(t==null)$.cq=null
u.a.$0()}},
lR:function(){$.jh=!0
try{P.lN()}finally{$.cr=null
$.jh=!1
if($.bx!=null)$.jy().$1(P.ku())}},
kp:function(a){var u=new P.dk(a)
if($.bx==null){$.bx=$.cq=u
if(!$.jh)$.jy().$1(P.ku())}else $.cq=$.cq.b=u},
lQ:function(a){var u,t,s=$.bx
if(s==null){P.kp(a)
$.cr=$.cq
return}u=new P.dk(a)
t=$.cr
if(t==null){u.b=s
$.bx=$.cr=u}else{u.b=t.b
$.cr=t.b=u
if(u.b==null)$.cq=u}},
mi:function(a){var u=null,t=$.O
if(C.d===t){P.iK(u,u,C.d,a)
return}P.iK(u,u,t,H.l(t.b_(a),{func:1,ret:-1}))},
k6:function(a,b){var u=$.O
if(u===C.d)return P.jb(a,H.l(b,{func:1,ret:-1}))
return P.jb(a,H.l(u.b_(b),{func:1,ret:-1}))},
ly:function(a,b){var u=$.O
if(u===C.d)return P.k7(a,H.l(b,{func:1,ret:-1,args:[P.aJ]}))
return P.k7(a,H.l(u.bN(b,P.aJ),{func:1,ret:-1,args:[P.aJ]}))},
iI:function(a,b,c,d,e){var u={}
u.a=d
P.lQ(new P.iJ(u,e))},
kn:function(a,b,c,d,e){var u,t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
ko:function(a,b,c,d,e,f,g){var u,t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
lP:function(a,b,c,d,e,f,g,h,i){var u,t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
iK:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.b_(d):c.ep(d,-1)
P.kp(d)},
i1:function i1(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
e_:function e_(){this.c=0},
iE:function iE(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aO:function aO(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ai:function ai(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ib:function ib(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a
this.b=null},
h7:function h7(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
c8:function c8(){},
h8:function h8(){},
aJ:function aJ(){},
a_:function a_(a,b){this.a=a
this.b=b},
iH:function iH(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iq:function iq(){},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b){this.a=a
this.b=b},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function(a,b){return new H.aA([a,b])},
lg:function(a){return H.m1(a,new H.aA([null,null]))},
cT:function(a){return new P.io([a])},
je:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lH:function(a,b,c){var u=new P.dB(a,b,[c])
u.c=a.e
return u},
lc:function(a,b,c){var u,t
if(P.ji(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.a6,a)
try{P.lM(a,u)}finally{if(0>=$.a6.length)return H.j($.a6,-1)
$.a6.pop()}t=P.k4(b,H.mb(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
j4:function(a,b,c){var u,t
if(P.ji(a))return b+"..."+c
u=new P.bs(b)
C.a.h($.a6,a)
try{t=u
t.a=P.k4(t.a,a,", ")}finally{if(0>=$.a6.length)return H.j($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ji:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
lM:function(a,b){var u,t,s,r,q,p,o,n=a.gF(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.h(n.gv(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.j(b,-1)
t=b.pop()
if(0>=b.length)return H.j(b,-1)
s=b.pop()}else{r=n.gv(n);++l
if(!n.p()){if(l<=4){C.a.h(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.j(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gv(n);++l
for(;n.p();r=q,q=p){p=n.gv(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.j(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.h(r)
t=H.h(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
jO:function(a,b){var u,t,s=P.cT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t)s.h(0,H.D(a[t],b))
return s},
jQ:function(a){var u,t={}
if(P.ji(a))return"{...}"
u=new P.bs("")
try{C.a.h($.a6,a)
u.a+="{"
t.a=!0
J.kY(a,new P.fh(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.j($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
io:function io(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bw:function bw(a){this.a=a
this.c=this.b=null},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fe:function fe(){},
r:function r(){},
fg:function fg(){},
fh:function fh(a,b){this.a=a
this.b=b},
W:function W(){},
iv:function iv(){},
dC:function dC(){},
bN:function bN(){},
bO:function bO(){},
eK:function eK(){},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f0:function f0(a){this.a=a},
hK:function hK(){},
hL:function hL(){},
iF:function iF(a){this.b=0
this.c=a},
la:function(a){if(a instanceof H.bM)return a.i(0)
return"Instance of '"+H.h(H.c3(a))+"'"},
lh:function(a,b,c){var u,t=J.le(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.H(t,u,b)
return H.t(t,"$ib",[c],"$ab")},
jP:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bg(a);u.p();)C.a.h(s,H.D(u.gv(u),c))
if(b)return s
return H.t(J.j5(s),"$ib",t,"$ab")},
ja:function(a){var u,t
if(a.constructor===Array){H.t(a,"$iaz",[P.z],"$aaz")
u=a.length
t=P.k0(0,null,u)
return H.jZ(t<u?C.a.cu(a,0,t):a)}return P.lw(a,0,null)},
lw:function(a,b,c){var u,t,s=J.bg(a)
for(u=0;u<b;++u)if(!s.p())throw H.f(P.aE(b,0,u,null,null))
t=[]
for(;s.p();)t.push(s.gv(s))
return H.jZ(t)},
lr:function(a){return new H.f7(a,H.lf(a,!1,!0,!1,!1,!1))},
k4:function(a,b,c){var u=J.bg(b)
if(!u.p())return a
if(c.length===0){do a+=H.h(u.gv(u))
while(u.p())}else{a+=H.h(u.gv(u))
for(;u.p();)a=a+c+H.h(u.gv(u))}return a},
kl:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kV().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.er(H.D(b,H.a7(c,"bN",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.j9(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l7:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cH:function(a){if(a>=10)return""+a
return"0"+a},
jI:function(a){return new P.b3(1000*a)},
cL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.la(a)},
j1:function(a,b,c){return new P.ar(!0,a,b,c)},
d3:function(a,b){return new P.bq(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.bq(b,c,!0,a,d,"Invalid value")},
k0:function(a,b,c){if(0>a||a>c)throw H.f(P.aE(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aE(b,a,c,"end",null))
return b}return c},
k_:function(a,b){if(typeof a!=="number")return a.bb()
if(a<0)throw H.f(P.aE(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=H.ap(e==null?J.bh(b):e)
return new P.f2(u,!0,a,c,"Index out of range")},
ag:function(a){return new P.hI(a)},
k9:function(a){return new P.hG(a)},
k3:function(a){return new P.c7(a)},
b1:function(a){return new P.et(a)},
a1:function(a){return new P.dt(a)},
ju:function(a){H.mg(a)},
K:function K(){},
b2:function b2(a,b){this.a=a
this.b=b},
x:function x(){},
b3:function b3(a){this.a=a},
eG:function eG(){},
eH:function eH(){},
b4:function b4(){},
ej:function ej(){},
d_:function d_(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f2:function f2(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hI:function hI(a){this.a=a},
hG:function hG(a){this.a=a},
c7:function c7(a){this.a=a},
et:function et(a){this.a=a},
fF:function fF(){},
d8:function d8(){},
ey:function ey(a){this.a=a},
dt:function dt(a){this.a=a},
eW:function eW(a,b){this.a=a
this.b=b},
b5:function b5(){},
z:function z(){},
i:function i(){},
ay:function ay(){},
b:function b(){},
E:function E(){},
C:function C(){},
Z:function Z(){},
F:function F(){},
a5:function a5(){},
e:function e(){},
bs:function bs(a){this.a=a},
aX:function(a){var u,t,s,r,q
if(a==null)return
u=P.jN(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=H.G(t[r])
u.H(0,q,a[q])}return u},
lX:function(a){var u={}
a.D(0,new P.iL(u))
return u},
iL:function iL(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
eT:function eT(){},
eU:function eU(){},
ip:function ip(){},
af:function af(){},
aS:function aS(){},
fa:function fa(){},
aU:function aU(){},
fD:function fD(){},
fJ:function fJ(){},
c4:function c4(){},
hb:function hb(){},
m:function m(){},
aV:function aV(){},
ho:function ho(){},
dz:function dz(){},
dA:function dA(){},
dK:function dK(){},
dL:function dL(){},
dW:function dW(){},
dX:function dX(){},
e2:function e2(){},
e3:function e3(){},
el:function el(){},
em:function em(){},
en:function en(a){this.a=a},
eo:function eo(){},
bi:function bi(){},
fE:function fE(){},
dl:function dl(){},
cB:function cB(){},
d2:function d2(){},
br:function br(){},
d6:function d6(){},
de:function de(){},
h3:function h3(){},
dS:function dS(){},
dT:function dT(){}},W={
jB:function(){var u=document.createElement("a")
return u},
jE:function(){var u=document.createElement("canvas")
return u},
l9:function(a,b,c){var u=document.body,t=(u&&C.m).S(u,a,b,c)
t.toString
u=W.w
u=new H.ce(new W.a2(t),H.l(new W.eJ(),{func:1,ret:P.K,args:[u]}),[u])
return H.n(u.ga7(u),"$iI")},
jL:function(a){H.n(a,"$id")
return"wheel"},
bR:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jr(a)
t=u.gcd(a)
if(typeof t==="string")r=u.gcd(a)}catch(s){H.ac(s)}return r},
im:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kj:function(a,b,c,d){var u=W.im(W.im(W.im(W.im(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d,e){var u=W.kr(new W.ia(c),W.k)
if(u!=null&&!0)J.kX(a,b,u,!1)
return new W.i9(a,b,u,!1,[e])},
ki:function(a){var u=W.jB(),t=window.location
u=new W.bb(new W.iu(u,t))
u.cJ(a)
return u},
lF:function(a,b,c,d){H.n(a,"$iI")
H.G(b)
H.G(c)
H.n(d,"$ibb")
return!0},
lG:function(a,b,c,d){var u,t,s
H.n(a,"$iI")
H.G(b)
H.G(c)
u=H.n(d,"$ibb").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kk:function(){var u=P.e,t=P.jO(C.i,u),s=H.u(C.i,0),r=H.l(new W.iC(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.iB(t,P.cT(u),P.cT(u),P.cT(u),null)
t.cM(null,new H.fk(C.i,r,[s,u]),q,null)
return t},
kr:function(a,b){var u=$.O
if(u===C.d)return a
return u.bN(a,b)},
p:function p(){},
eh:function eh(){},
cy:function cy(){},
ei:function ei(){},
bJ:function bJ(){},
cA:function cA(){},
aZ:function aZ(){},
bj:function bj(){},
b_:function b_(){},
bP:function bP(){},
eu:function eu(){},
J:function J(){},
bQ:function bQ(){},
ev:function ev(){},
at:function at(){},
au:function au(){},
ew:function ew(){},
ex:function ex(){},
eA:function eA(){},
ae:function ae(){},
eD:function eD(){},
cI:function cI(){},
cJ:function cJ(){},
eE:function eE(){},
eF:function eF(){},
i5:function i5(a,b){this.a=a
this.b=b},
I:function I(){},
eJ:function eJ(){},
k:function k(){},
d:function d(){},
aw:function aw(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(){},
ax:function ax(){},
f_:function f_(){},
bm:function bm(){},
aB:function aB(){},
cU:function cU(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(a){this.a=a},
fp:function fp(){},
fq:function fq(a){this.a=a},
aC:function aC(){},
fr:function fr(){},
X:function X(){},
a2:function a2(a){this.a=a},
w:function w(){},
c1:function c1(){},
aD:function aD(){},
fI:function fI(){},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
fS:function fS(){},
aF:function aF(){},
h1:function h1(){},
aG:function aG(){},
h2:function h2(){},
aH:function aH(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
al:function al(){},
bt:function bt(){},
d9:function d9(){},
hc:function hc(){},
hd:function hd(){},
c9:function c9(){},
aI:function aI(){},
am:function am(){},
hf:function hf(){},
hg:function hg(){},
hi:function hi(){},
aK:function aK(){},
an:function an(){},
hm:function hm(){},
hn:function hn(){},
ba:function ba(){},
hJ:function hJ(){},
hX:function hX(){},
aN:function aN(){},
cf:function cf(){},
cg:function cg(){},
i6:function i6(){},
dn:function dn(){},
il:function il(){},
dH:function dH(){},
iy:function iy(){},
iz:function iz(){},
i4:function i4(){},
i7:function i7(a){this.a=a},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i9:function i9(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ia:function ia(a){this.a=a},
bb:function bb(a){this.a=a},
v:function v(){},
cZ:function cZ(a){this.a=a},
fA:function fA(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(){},
iw:function iw(){},
ix:function ix(){},
iB:function iB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iC:function iC(){},
iA:function iA(){},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aa:function aa(){},
iu:function iu(a,b){this.a=a
this.b=b},
e4:function e4(a){this.a=a},
iG:function iG(a){this.a=a},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
cm:function cm(){},
cn:function cn(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
co:function co(){},
cp:function cp(){},
e0:function e0(){},
e1:function e1(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){}},O={
jG:function(a){var u=new O.U([a])
u.bg(a)
return u},
U:function U(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bY:function bY(){this.b=this.a=null},
eB:function eB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bu:function bu(){}},E={
aR:function(a,b){var u,t,s,r,q=new E.a0()
q.a=""
q.b=!0
q.scI(0,O.jG(E.a0))
q.y.aE(q.geN(),q.geQ())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
u=q.c
if(u!=b){q.d=q.c=b
q.e=null
if(u!=null)u.gt().G(0,q.gc2())
t=q.c
if(t!=null)t.gt().h(0,q.gc2())
s=new D.R("shape",u,q.c,[F.d7])
s.b=!0
q.a4(s)}if(!J.T(q.r,a)){r=q.r
if(r!=null)r.gt().G(0,q.gc0())
a.gt().h(0,q.gc0())
q.r=a
s=new D.R("mover",r,a,[U.a3])
s.b=!0
q.a4(s)}return q},
lt:function(a,b){var u=new E.fL(a)
u.cD(a,b)
return u},
lx:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibj)return E.k5(a,!0,!0,!0,!1)
u=W.jE()
t=u.style
t.width="100%"
t.height="100%"
s.gbO(a).h(0,u)
return E.k5(u,!0,!0,!0,!1)},
k5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.db(),j=H.n(C.D.cq(a,"webgl2",P.lg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibr")
if(j==null)H.a8(P.a1("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lt(j,a)
H.ap(j.getParameter(3379))
H.ap(j.getParameter(34076))
u=new X.dh(a)
t=new X.f9()
t.sdV(P.cT(P.z))
u.b=t
t=new X.fs(u)
t.f=0
t.r=V.d1()
t.x=V.d1()
t.ch=t.Q=1
u.c=t
t=new X.ff(u)
t.r=0
t.x=V.d1()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hl(u)
t.f=V.d1()
t.r=V.d1()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sd0(H.c([],[[P.c8,P.F]]))
t=u.z
s=document
r=W.X
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.Y(s,"contextmenu",H.l(u.gdl(),q),!1,r))
t=u.z
p=W.k
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.Y(a,"focus",H.l(u.gdt(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.Y(a,"blur",H.l(u.gdf(),o),!1,p))
t=u.z
n=W.aB
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.Y(s,"keyup",H.l(u.gdz(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.Y(s,"keydown",H.l(u.gdv(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.Y(a,"mousedown",H.l(u.gdC(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,"mouseup",H.l(u.gdG(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,l,H.l(u.gdE(),q),!1,r))
n=u.z
W.jL(a)
m=W.aN;(n&&C.a).h(n,W.Y(a,H.G(W.jL(a)),H.l(u.gdI(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.Y(s,l,H.l(u.gdn(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.Y(s,"mouseup",H.l(u.gdr(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.Y(s,"pointerlockchange",H.l(u.gdK(),o),!1,p))
p=u.z
o=W.an
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.Y(a,"touchstart",H.l(u.gdT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchend",H.l(u.gdP(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchmove",H.l(u.gdR(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.b2(Date.now(),!1)
k.cy=0
k.bF()
return k},
ep:function ep(){},
a0:function a0(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
db:function db(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hh:function hh(a){this.a=a}},Z={
lz:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.jf(c)),35044)
a.bindBuffer(b,null)
return new Z.dj(b,u)},
ah:function(a){return new Z.di(a)},
dj:function dj(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hY:function hY(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=null
this.c=b},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a){this.a=a}},D={
av:function(){var u=new D.bS()
u.sa1(null)
u.saj(null)
u.c=null
u.d=0
return u},
es:function es(){},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=null},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
A:function A(){this.b=null},
cN:function cN(a){this.b=null
this.$ti=a},
cO:function cO(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={cE:function cE(a,b){this.a=a
this.b=b},cR:function cR(a,b){this.a=a
this.b=b},f9:function f9(){this.d=this.b=this.a=null},ff:function ff(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},fs:function fs(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hl:function hl(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dh:function dh(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lb:function(a){var u=new X.eX(),t=V.lW(1)
u.a=new V.bk(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k1
if(t==null){t=V.ls(0,0,1,1)
$.k1=t}u.r=t
return u},
cF:function cF(){},
eX:function eX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){}},V={
lW:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jw:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cr(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.b.a5("null",c)
return C.b.a5(C.c.ci(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
iO:function(a,b,c){var u,t,s,r,q=H.c([],[P.e])
for(u=0,t=0;t<4;++t){s=V.L(a[t],b,c)
u=Math.max(u,s.length)
C.a.h(q,s)}for(r=q.length-1;r>=0;--r){if(r>=q.length)return H.j(q,r)
C.a.H(q,r,C.b.a5(q[r],u))}return q},
fl:function(){var u=$.jR
return u==null?$.jR=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d1:function(){var u=$.jW
return u==null?$.jW=new V.ab(0,0):u},
ls:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
hM:function(){var u=$.kf
return u==null?$.kf=new V.S(0,0,0):u},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eL:function eL(a){this.a=a},
b9:function b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.a1("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.aa(a,0)
t=C.b.aa(b,0)
s=new V.fK()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fT()
u.cE(a)
return u},
hk:function(){var u=new V.hj(),t=P.e
u.sed(new H.aA([t,V.c6]))
u.sef(new H.aA([t,V.ca]))
u.c=null
return u},
aP:function aP(){},
a9:function a9(){},
cV:function cV(){},
a4:function a4(){this.a=null},
fK:function fK(){this.b=this.a=null},
fT:function fT(){this.a=null},
c6:function c6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a){this.b=a
this.c=null},
hj:function hj(){this.c=this.b=this.a=null},
cb:function cb(a){this.b=a
this.a=this.c=null},
mj:function(a){P.ly(C.F,new V.iY(a))},
lv:function(a){var u=new V.fX()
u.cG(a,!0)
return u},
b0:function b0(){},
iY:function iY(a){this.a=a},
ez:function ez(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eY:function eY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eZ:function eZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(){this.b=this.a=null},
fZ:function fZ(a){this.a=a},
fY:function fY(a){this.a=a},
h_:function h_(a){this.a=a}},U={
jH:function(a){var u=new U.cG()
u.a=a
return u},
cG:function cG(){this.b=this.a=null},
bU:function bU(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cK:function cK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jc:function(a,b,c,d,e){var u=new A.hu(a,c,e)
u.f=d
u.seh(P.lh(d,0,P.z))
return u},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a},
eC:function eC(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c5:function c5(){},
dd:function dd(){},
hB:function hB(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mo:function(a,b){return F.lY(15,30,b,a,new F.iZ())},
lY:function(a,b,c,d,e){var u,t=F.mm(a,b,new F.iM(e,d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.b1()
t.a.b1()
u=t.e
if(u!=null)u.aq(0)
t.eM(new F.hS(),new F.fB())
return t},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.d7()
t=new F.hN(u)
t.b=!1
s=[F.ao]
t.sei(H.c([],s))
u.a=t
t=new F.fW()
t.saU(H.c([],[F.bo]))
u.b=t
t=new F.fV(u)
t.sd7(H.c([],[F.b8]))
u.c=t
t=new F.fU(u)
t.sd1(H.c([],[F.V]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bK(new V.bk(s,0,0,1),new V.ab(p,1))
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
o=k.bK(new V.bk(j,i,h,1),new V.ab(p,m))
c.$3(o,p,n)
C.a.h(r,o.bR(null))}}u.d.ek(a+1,b+1,r)
return u},
eO:function(a,b,c){var u=new F.V(),t=a.a
if(t==null)H.a8(P.a1("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a8(P.a1("May not create a face with vertices attached to different shapes."))
u.e5(a)
u.e6(b)
u.e7(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
kg:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.hV()
r.saU(H.c([],[F.bo]))
s.b=r
r=new F.hR()
u=[F.b8]
r.sd8(H.c([],u))
r.sd9(H.c([],u))
s.c=r
r=new F.hO()
u=[F.V]
r.sd2(H.c([],u))
r.sd3(H.c([],u))
r.sd4(H.c([],u))
s.d=r
h=$.kR()
s.e=0
r=$.aY()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bF().a)!==0?e:t
s.x=(u&$.bE().a)!==0?b:t
s.y=(u&$.bG().a)!==0?f:t
s.z=(u&$.bH().a)!==0?g:t
s.Q=(u&$.kS().a)!==0?c:t
s.ch=(u&$.bI().a)!==0?i:0
s.cx=(u&$.bD().a)!==0?a:t
return s},
iZ:function iZ(){},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eP:function eP(){},
h0:function h0(){},
b8:function b8(){},
fb:function fb(){},
hs:function hs(){},
bo:function bo(){},
d7:function d7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a){this.a=a
this.b=null},
fV:function fV(a){this.a=a
this.b=null},
fW:function fW(){this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){this.a=a},
hN:function hN(a){this.a=a
this.c=this.b=null},
hO:function hO(){this.d=this.c=this.b=null},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){this.c=this.b=null},
hT:function hT(){},
hS:function hS(){},
hU:function hU(){},
fB:function fB(){},
hV:function hV(){this.b=null}},R={
kz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=V.lv("Test 004"),a3=W.jE()
a3.className="pageLargeCanvas"
a3.id=a1
a2.a.appendChild(a3)
u=[P.e]
a2.bL(H.c(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],u))
a2.bL(H.c(["\xab[Back to Tests|../]"],u))
t=new U.d5()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.scn(0)
t.sc5(0,0)
t.scb(0)
t.sbU(0.1)
t.sbS(0.21)
t.sbT(0.32)
t.sbU(0.51)
t.sbS(0.71)
t.sbT(0.92)
s=new U.bU()
s.bg(U.a3)
s.aE(s.gdd(),s.gdN())
s.e=null
s.f=V.fl()
s.r=0
s.h(0,U.jH(V.aT(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
s.h(0,t)
r=F.mo(2,0.2)
q=E.aR(s,r)
p=E.aR(s,r)
p.y.h(0,q)
o=E.aR(s,r)
o.y.h(0,p)
n=E.aR(s,r)
n.y.h(0,o)
m=E.aR(s,r)
m.y.h(0,n)
l=E.aR(s,r)
l.y.h(0,m)
k=E.aR(s,r)
k.y.h(0,l)
j=E.aR(s,r)
j.y.h(0,k)
i=E.aR(s,r)
i.y.h(0,j)
h=new O.eB()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.P().a)){h.b=3
u=new D.R("start",1,3,[P.x])
u.b=!0
h.aT(u)}u=h.c
if(!(Math.abs(u-6)<$.P().a)){h.c=6
u=new D.R("stop",u,6,[P.x])
u.b=!0
h.aT(u)}if(!h.d){h.d=!0
h.a=null
u=new D.R("grey",!1,!0,[P.K])
u.b=!0
h.aT(u)}g=new M.cK()
g.a=!0
g.scU(0,O.jG(E.a0))
g.e.aE(g.gdh(),g.gdj())
g.y=g.x=g.r=g.f=null
f=X.lb(null)
e=new X.d0()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sbY(null)
u=e.c
if(!(Math.abs(u-1.0471975511965976)<$.P().a)){e.c=1.0471975511965976
u=new D.R("fov",u,1.0471975511965976,[P.x])
u.b=!0
e.a9(u)}u=e.d
if(!(Math.abs(u-0.1)<$.P().a)){e.d=0.1
u=new D.R("near",u,0.1,[P.x])
u.b=!0
e.a9(u)}u=e.e
if(!(Math.abs(u-2000)<$.P().a)){e.e=2000
u=new D.R("far",u,2000,[P.x])
u.b=!0
e.a9(u)}u=g.b
if(u!==e){if(u!=null)u.gt().G(0,g.gX())
d=g.b
g.b=e
e.gt().h(0,g.gX())
u=new D.R("camera",d,g.b,[X.cF])
u.b=!0
g.a_(u)}u=g.c
if(u!==f){if(u!=null)u.gt().G(0,g.gX())
d=g.c
g.c=f
f.gt().h(0,g.gX())
u=new D.R("target",d,g.c,[X.da])
u.b=!0
g.a_(u)}g.sce(null)
g.sce(h)
g.e.h(0,i)
g.b.sbY(U.jH(V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=document.getElementById(a1)
if(c==null)H.a8(P.a1("Failed to find an element with the identifier, testCanvas."))
b=E.lx(c,!0,!0,!0,!1)
u=b.d
if(u!==g){if(u!=null)u.gt().G(0,b.gbh())
b.d=g
g.gt().h(0,b.gbh())
b.bi()}u=b.z
if(u==null)u=b.z=D.av()
a={func:1,ret:-1,args:[D.A]}
a0=H.l(new R.iV(a2,h),a)
if(u.b==null)u.saj(H.c([],[a]))
u=u.b;(u&&C.a).h(u,a0)
V.mj(b)},
iV:function iV(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j7.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gB:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.h(H.c3(a))+"'"}}
J.f4.prototype={
i:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iK:1}
J.f6.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gB:function(a){return 0}}
J.cQ.prototype={
gB:function(a){return 0},
i:function(a){return String(a)}}
J.fG.prototype={}
J.bv.prototype={}
J.b7.prototype={
i:function(a){var u=a[$.kG()]
if(u==null)return this.cz(a)
return"JavaScript function for "+H.h(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib5:1}
J.az.prototype={
h:function(a,b){H.D(b,H.u(a,0))
if(!!a.fixed$length)H.a8(P.ag("add"))
a.push(b)},
c9:function(a,b){if(!!a.fixed$length)H.a8(P.ag("removeAt"))
if(b<0||b>=a.length)throw H.f(P.d3(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.a8(P.ag("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b1(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.H(t,u,H.h(a[u]))
return t.join(b)},
eI:function(a){return this.l(a,"")},
eC:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.f(P.b1(a))}throw H.f(H.f3())},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
cu:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aE(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aE(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
geB:function(a){if(a.length>0)return a[0]
throw H.f(H.f3())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.f3())},
bM:function(a,b){var u,t
H.l(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.b1(a))}return!1},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.j4(a,"[","]")},
gF:function(a){return new J.ad(a,a.length,[H.u(a,0)])},
gB:function(a){return H.c2(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a8(P.ag("set length"))
if(b<0)throw H.f(P.aE(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.D(c,H.u(a,0))
if(!!a.immutable$list)H.a8(P.ag("indexed set"))
if(b>=a.length||b<0)throw H.f(H.ct(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.j6.prototype={}
J.ad.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.H(s))
u=t.c
if(u>=r){t.sby(null)
return!1}t.sby(s[u]);++t.c
return!0},
sby:function(a){this.d=H.D(a,H.u(this,0))},
$iay:1}
J.bW.prototype={
bW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ag(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ag(""+a+".round()"))},
ci:function(a,b){var u,t
if(b>20)throw H.f(P.aE(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cr:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bG(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.bG(a,b)},
bG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ag("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
av:function(a,b){var u
if(a>0)u=this.ec(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ec:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iZ:1}
J.cP.prototype={$iz:1}
J.f5.prototype={}
J.b6.prototype={
b2:function(a,b){if(b<0)throw H.f(H.ct(a,b))
if(b>=a.length)H.a8(H.ct(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.f(H.ct(a,b))
return a.charCodeAt(b)},
O:function(a,b){if(typeof b!=="string")throw H.f(P.j1(b,null,null))
return a+b},
aF:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.d3(b,null))
if(b>c)throw H.f(P.d3(b,null))
if(c>a.length)throw H.f(P.d3(c,null))
return a.substring(b,c)},
aG:function(a,b){return this.ar(a,b,null)},
fa:function(a){return a.toLowerCase()},
I:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a5:function(a,b){var u=b-a.length
if(u<=0)return a
return this.I(" ",u)+a},
i:function(a){return a},
gB:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijU:1,
$ie:1}
H.o.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.b.b2(this.a,b)},
$adg:function(){return[P.z]},
$ar:function(){return[P.z]},
$ai:function(){return[P.z]},
$ab:function(){return[P.z]}}
H.eI.prototype={}
H.bn.prototype={
gF:function(a){var u=this
return new H.bX(u,u.gk(u),[H.a7(u,"bn",0)])},
aC:function(a,b){return this.cw(0,H.l(b,{func:1,ret:P.K,args:[H.a7(this,"bn",0)]}))}}
H.bX.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.jp(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.b1(s))
u=t.c
if(u>=q){t.sai(null)
return!1}t.sai(r.q(s,u));++t.c
return!0},
sai:function(a){this.d=H.D(a,H.u(this,0))},
$iay:1}
H.fi.prototype={
gF:function(a){return new H.fj(J.bg(this.a),this.b,this.$ti)},
gk:function(a){return J.bh(this.a)},
q:function(a,b){return this.b.$1(J.j0(this.a,b))},
$ai:function(a,b){return[b]}}
H.fj.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.sai(u.c.$1(t.gv(t)))
return!0}u.sai(null)
return!1},
gv:function(a){return this.a},
sai:function(a){this.a=H.D(a,H.u(this,1))},
$aay:function(a,b){return[b]}}
H.fk.prototype={
gk:function(a){return J.bh(this.a)},
q:function(a,b){return this.b.$1(J.j0(this.a,b))},
$abn:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.ce.prototype={
gF:function(a){return new H.hZ(J.bg(this.a),this.b,this.$ti)}}
H.hZ.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(H.B(t.$1(u.gv(u))))return!0
return!1},
gv:function(a){var u=this.a
return u.gv(u)}}
H.bl.prototype={}
H.dg.prototype={}
H.df.prototype={}
H.hp.prototype={
T:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fC.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f8.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j_.prototype={
$1:function(a){if(!!J.Q(a).$ib4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dU.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia5:1}
H.bM.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ib5:1,
gfd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.he.prototype={}
H.h4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bC(u)+"'"}}
H.bK.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bK))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gB:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.cx(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.c3(u))+"'")}}
H.hr.prototype={
i:function(a){return this.a}}
H.er.prototype={
i:function(a){return this.a}}
H.fR.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.i_.prototype={
i:function(a){return"Assertion failed: "+P.cL(this.a)}}
H.aA.prototype={
gk:function(a){return this.a},
gN:function(a){return new H.cS(this,[H.u(this,0)])},
bQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bv(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bv(t,b)}else return s.eF(b)},
eF:function(a){var u=this.d
if(u==null)return!1
return this.b3(this.aM(u,J.cx(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.at(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.at(r,b)
s=t==null?null:t.b
return s}else return q.eG(b)},
eG:function(a){var u,t,s=this.d
if(s==null)return
u=this.aM(s,J.cx(a)&0x3ffffff)
t=this.b3(u,a)
if(t<0)return
return u[t].b},
H:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.u(o,0))
H.D(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bn(u==null?o.b=o.aR():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bn(t==null?o.c=o.aR():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aR()
r=J.cx(b)&0x3ffffff
q=o.aM(s,r)
if(q==null)o.aX(s,r,[o.aS(b,c)])
else{p=o.b3(q,b)
if(p>=0)q[p].b=c
else q.push(o.aS(b,c))}}},
D:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.b1(s))
u=u.c}},
bn:function(a,b,c){var u,t=this
H.D(b,H.u(t,0))
H.D(c,H.u(t,1))
u=t.at(a,b)
if(u==null)t.aX(a,b,t.aS(b,c))
else u.b=c},
dc:function(){this.r=this.r+1&67108863},
aS:function(a,b){var u,t=this,s=new H.fc(H.D(a,H.u(t,0)),H.D(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dc()
return s},
b3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jQ(this)},
at:function(a,b){return a[b]},
aM:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
cZ:function(a,b){delete a[b]},
bv:function(a,b){return this.at(a,b)!=null},
aR:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aX(t,u,t)
this.cZ(t,u)
return t}}
H.fc.prototype={}
H.cS.prototype={
gk:function(a){return this.a.a},
gF:function(a){var u=this.a,t=new H.fd(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fd.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b1(t))
else{t=u.c
if(t==null){u.sbm(null)
return!1}else{u.sbm(t.a)
u.c=u.c.c
return!0}}},
sbm:function(a){this.d=H.D(a,H.u(this,0))},
$iay:1}
H.iR.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.iS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.iT.prototype={
$1:function(a){return this.a(H.G(a))},
$S:30}
H.f7.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ijU:1}
H.c0.prototype={}
H.cW.prototype={
gk:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.c_.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]},
$abl:function(){return[P.x]},
$ar:function(){return[P.x]},
$ii:1,
$ai:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.cX.prototype={
$abl:function(){return[P.z]},
$ar:function(){return[P.z]},
$ii:1,
$ai:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.ft.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fu.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fv.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fw.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fx.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.cY.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fy.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bc(b,a,a.length)
return a[b]},
$imK:1}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
P.i1.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.i0.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:28}
P.i2.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e_.prototype={
cN:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bz(new P.iE(this,b),0),a)
else throw H.f(P.ag("`setTimeout()` not found."))},
cO:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bz(new P.iD(this,a,Date.now(),b),0),a)
else throw H.f(P.ag("Periodic timer."))},
$iaJ:1}
P.iE.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.iD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.cC(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.aO.prototype={
eK:function(a){if((this.c&15)!==6)return!0
return this.b.b.ba(H.l(this.d,{func:1,ret:P.K,args:[P.F]}),a.a,P.K,P.F)},
eE:function(a){var u=this.e,t=P.F,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ef(u,{func:1,args:[P.F,P.a5]}))return H.jo(r.f4(u,a.a,a.b,null,t,P.a5),s)
else return H.jo(r.ba(H.l(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.ai.prototype={
cf:function(a,b,c){var u,t,s,r=H.u(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.O
if(u!==C.d){H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lO(b,u)}t=new P.ai($.O,[c])
s=b==null?1:3
this.bo(new P.aO(t,s,a,b,[r,c]))
return t},
f7:function(a,b){return this.cf(a,null,b)},
bo:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaO")
t.c=a}else{if(s===2){u=H.n(t.c,"$iai")
s=u.a
if(s<4){u.bo(a)
return}t.a=s
t.c=u.c}P.iK(null,null,t.b,H.l(new P.ib(t,a),{func:1,ret:-1}))}},
bE:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaO")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iai")
u=q.a
if(u<4){q.bE(a)
return}p.a=u
p.c=q.c}o.a=p.au(a)
P.iK(null,null,p.b,H.l(new P.ig(o,p),{func:1,ret:-1}))}},
aW:function(){var u=H.n(this.c,"$iaO")
this.c=null
return this.au(u)},
au:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bs:function(a){var u,t,s=this,r=H.u(s,0)
H.jo(a,{futureOr:1,type:r})
u=s.$ti
if(H.jl(a,"$ibT",u,"$abT"))if(H.jl(a,"$iai",u,null))P.kh(a,s)
else P.lE(a,s)
else{t=s.aW()
H.D(a,r)
s.a=4
s.c=a
P.ch(s,t)}},
bt:function(a,b){var u,t=this
H.n(b,"$ia5")
u=t.aW()
t.a=8
t.c=new P.a_(a,b)
P.ch(t,u)},
$ibT:1}
P.ib.prototype={
$0:function(){P.ch(this.a,this.b)},
$S:0}
P.ig.prototype={
$0:function(){P.ch(this.b,this.a.a)},
$S:0}
P.ic.prototype={
$1:function(a){var u=this.a
u.a=0
u.bs(a)},
$S:14}
P.id.prototype={
$2:function(a,b){H.n(b,"$ia5")
this.a.bt(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.ie.prototype={
$0:function(){this.a.bt(this.b,this.c)},
$S:0}
P.ij.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cc(H.l(s.d,{func:1}),null)}catch(r){u=H.ac(r)
t=H.bA(r)
if(o.d){s=H.n(o.a.a.c,"$ia_").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia_")
else q.b=new P.a_(u,t)
q.a=!0
return}if(!!J.Q(n).$ibT){if(n instanceof P.ai&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia_")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.f7(new P.ik(p),null)
s.a=!1}},
$S:1}
P.ik.prototype={
$1:function(a){return this.a},
$S:23}
P.ii.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.D(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.ba(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ac(o)
t=H.bA(o)
s=n.a
s.b=new P.a_(u,t)
s.a=!0}},
$S:1}
P.ih.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia_")
r=m.c
if(H.B(r.eK(u))&&r.e!=null){q=m.b
q.b=r.eE(u)
q.a=!1}}catch(p){t=H.ac(p)
s=H.bA(p)
r=H.n(m.a.a.c,"$ia_")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a_(t,s)
n.a=!0}},
$S:1}
P.dk.prototype={}
P.h7.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.ai($.O,[P.z])
r.a=0
u=H.u(s,0)
t=H.l(new P.h9(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.ha(r,q),{func:1,ret:-1})
W.Y(s.a,s.b,t,!1,u)
return q}}
P.h9.prototype={
$1:function(a){H.D(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.u(this.b,0)]}}}
P.ha.prototype={
$0:function(){this.b.bs(this.a.a)},
$S:0}
P.c8.prototype={}
P.h8.prototype={}
P.aJ.prototype={}
P.a_.prototype={
i:function(a){return H.h(this.a)},
$ib4:1}
P.iH.prototype={$imY:1}
P.iJ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d_():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:0}
P.iq.prototype={
f5:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.d===$.O){a.$0()
return}P.kn(r,r,this,a,-1)}catch(s){u=H.ac(s)
t=H.bA(s)
P.iI(r,r,this,u,H.n(t,"$ia5"))}},
f6:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.d===$.O){a.$1(b)
return}P.ko(r,r,this,a,b,-1,c)}catch(s){u=H.ac(s)
t=H.bA(s)
P.iI(r,r,this,u,H.n(t,"$ia5"))}},
ep:function(a,b){return new P.is(this,H.l(a,{func:1,ret:b}),b)},
b_:function(a){return new P.ir(this,H.l(a,{func:1,ret:-1}))},
bN:function(a,b){return new P.it(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
cc:function(a,b){H.l(a,{func:1,ret:b})
if($.O===C.d)return a.$0()
return P.kn(null,null,this,a,b)},
ba:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.O===C.d)return a.$1(b)
return P.ko(null,null,this,a,b,c,d)},
f4:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.O===C.d)return a.$2(b,c)
return P.lP(null,null,this,a,b,c,d,e,f)}}
P.is.prototype={
$0:function(){return this.a.cc(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ir.prototype={
$0:function(){return this.a.f5(this.b)},
$S:1}
P.it.prototype={
$1:function(a){var u=this.c
return this.a.f6(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.io.prototype={
gF:function(a){var u=this,t=new P.dB(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibw")!=null}else{t=this.cV(b)
return t}},
cV:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.bz(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.D(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bp(u==null?s.b=P.je():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bp(t==null?s.c=P.je():t,b)}else return s.cQ(0,b)},
cQ:function(a,b){var u,t,s,r=this
H.D(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.je()
t=r.bu(b)
s=u[t]
if(s==null)u[t]=[r.aI(b)]
else{if(r.aL(s,b)>=0)return!1
s.push(r.aI(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dX(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bz(r,b)
t=s.aL(u,b)
if(t<0)return!1
s.bH(u.splice(t,1)[0])
return!0},
bp:function(a,b){H.D(b,H.u(this,0))
if(H.n(a[b],"$ibw")!=null)return!1
a[b]=this.aI(b)
return!0},
dX:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibw")
if(u==null)return!1
this.bH(u)
delete a[b]
return!0},
br:function(){this.r=1073741823&this.r+1},
aI:function(a){var u,t=this,s=new P.bw(H.D(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.br()
return s},
bH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.br()},
bu:function(a){return J.cx(a)&1073741823},
bz:function(a,b){return a[this.bu(b)]},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.bw.prototype={}
P.dB.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.b1(t))
else{t=u.c
if(t==null){u.sbq(null)
return!1}else{u.sbq(H.D(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbq:function(a){this.d=H.D(a,H.u(this,0))},
$iay:1}
P.fe.prototype={$ii:1,$ib:1}
P.r.prototype={
gF:function(a){return new H.bX(a,this.gk(a),[H.cu(this,a,"r",0)])},
q:function(a,b){return this.m(a,b)},
f9:function(a,b){var u,t=this,s=H.c([],[H.cu(t,a,"r",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.H(s,u,t.m(a,u))
return s},
f8:function(a){return this.f9(a,!0)},
i:function(a){return P.j4(a,"[","]")}}
P.fg.prototype={}
P.fh.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:11}
P.W.prototype={
D:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.cu(s,a,"W",0),H.cu(s,a,"W",1)]})
for(u=J.bg(s.gN(a));u.p();){t=u.gv(u)
b.$2(t,s.m(a,t))}},
gk:function(a){return J.bh(this.gN(a))},
i:function(a){return P.jQ(a)},
$iE:1}
P.iv.prototype={
Y:function(a,b){var u
for(u=J.bg(H.t(b,"$ii",this.$ti,"$ai"));u.p();)this.h(0,u.gv(u))},
i:function(a){return P.j4(this,"{","}")},
q:function(a,b){var u,t,s,r=this
P.k_(b,"index")
for(u=P.lH(r,r.r,H.u(r,0)),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.M(b,r,"index",null,t))},
$ii:1,
$ik2:1}
P.dC.prototype={}
P.bN.prototype={}
P.bO.prototype={}
P.eK.prototype={
$abN:function(){return[P.e,[P.b,P.z]]}}
P.f1.prototype={
i:function(a){return this.a}}
P.f0.prototype={
cW:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.j(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bs("")
if(r>b)q.a+=C.b.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l_(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abO:function(){return[P.e,P.e]}}
P.hK.prototype={}
P.hL.prototype={
er:function(a){var u,t,s=P.k0(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iF(u)
if(t.d5(a,0,s)!==s)t.bI(C.b.b2(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lK(0,t.b,u.length)))},
$abO:function(){return[P.e,[P.b,P.z]]}}
P.iF.prototype={
bI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.j(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.j(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.j(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.j(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.j(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.j(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.j(s,r)
s[r]=128|a&63
return!1}},
d5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.b2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aa(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bI(r,C.b.aa(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.j(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.j(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.j(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.j(u,q)
u[q]=128|r&63}}return s}}
P.K.prototype={}
P.b2.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a&&!0},
gB:function(a){var u=this.a
return(u^C.e.av(u,30))&1073741823},
i:function(a){var u=this,t=P.l7(H.lp(u)),s=P.cH(H.ln(u)),r=P.cH(H.lj(u)),q=P.cH(H.lk(u)),p=P.cH(H.lm(u)),o=P.cH(H.lo(u)),n=P.l8(H.ll(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.x.prototype={}
P.b3.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gB:function(a){return C.e.gB(this.a)},
i:function(a){var u,t,s,r=new P.eH(),q=this.a
if(q<0)return"-"+new P.b3(0-q).i(0)
u=r.$1(C.e.ad(q,6e7)%60)
t=r.$1(C.e.ad(q,1e6)%60)
s=new P.eG().$1(q%1e6)
return""+C.e.ad(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.eG.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.eH.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b4.prototype={}
P.ej.prototype={
i:function(a){return"Assertion failed"}}
P.d_.prototype={
i:function(a){return"Throw of null."}}
P.ar.prototype={
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaK()+o+u
if(!q.a)return t
s=q.gaJ()
r=P.cL(q.b)
return t+s+": "+r}}
P.bq.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.f2.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t=H.ap(this.b)
if(typeof t!=="number")return t.bb()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gk:function(a){return this.f}}
P.hI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hG.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.et.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cL(u)+"."}}
P.fF.prototype={
i:function(a){return"Out of Memory"},
$ib4:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$ib4:1}
P.ey.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dt.prototype={
i:function(a){return"Exception: "+this.a}}
P.eW.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.b5.prototype={}
P.z.prototype={}
P.i.prototype={
aC:function(a,b){var u=H.a7(this,"i",0)
return new H.ce(this,H.l(b,{func:1,ret:P.K,args:[u]}),[u])},
gk:function(a){var u,t=this.gF(this)
for(u=0;t.p();)++u
return u},
ga7:function(a){var u,t=this.gF(this)
if(!t.p())throw H.f(H.f3())
u=t.gv(t)
if(t.p())throw H.f(H.ld())
return u},
q:function(a,b){var u,t,s
P.k_(b,"index")
for(u=this.gF(this),t=0;u.p();){s=u.gv(u)
if(b===t)return s;++t}throw H.f(P.M(b,this,"index",null,t))},
i:function(a){return P.lc(this,"(",")")}}
P.ay.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.C.prototype={
gB:function(a){return P.F.prototype.gB.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
n:function(a,b){return this===b},
gB:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.h(H.c3(this))+"'"},
toString:function(){return this.i(this)}}
P.a5.prototype={}
P.e.prototype={$ijU:1}
P.bs.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.eh.prototype={
gk:function(a){return a.length}}
W.cy.prototype={
i:function(a){return String(a)},
$icy:1}
W.ei.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.cA.prototype={}
W.aZ.prototype={$iaZ:1}
W.bj.prototype={
cq:function(a,b,c){var u=a.getContext(b,P.lX(c))
return u},
$ibj:1}
W.b_.prototype={
gk:function(a){return a.length}}
W.bP.prototype={$ibP:1}
W.eu.prototype={
gk:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.bQ.prototype={
gk:function(a){return a.length}}
W.ev.prototype={}
W.at.prototype={}
W.au.prototype={}
W.ew.prototype={
gk:function(a){return a.length}}
W.ex.prototype={
gk:function(a){return a.length}}
W.eA.prototype={
gk:function(a){return a.length}}
W.ae.prototype={$iae:1}
W.eD.prototype={
i:function(a){return String(a)}}
W.cI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[[P.af,P.Z]]},
$ar:function(){return[[P.af,P.Z]]},
$ii:1,
$ai:function(){return[[P.af,P.Z]]},
$ib:1,
$ab:function(){return[[P.af,P.Z]]},
$av:function(){return[[P.af,P.Z]]}}
W.cJ.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gah(a))+" x "+H.h(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iaf)return!1
return a.left===u.gbX(b)&&a.top===u.gck(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gB:function(a){return W.kj(C.c.gB(a.left),C.c.gB(a.top),C.c.gB(this.gah(a)),C.c.gB(this.gaf(a)))},
gaf:function(a){return a.height},
gbX:function(a){return a.left},
gck:function(a){return a.top},
gah:function(a){return a.width},
$iaf:1,
$aaf:function(){return[P.Z]}}
W.eE.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[P.e]},
$ar:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eF.prototype={
gk:function(a){return a.length}}
W.i5.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.n(u[b],"$iI")},
h:function(a,b){this.a.appendChild(b)
return b},
gF:function(a){var u=this.f8(this)
return new J.ad(u,u.length,[H.u(u,0)])},
$ar:function(){return[W.I]},
$ai:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
geo:function(a){return new W.i7(a)},
gbO:function(a){return new W.i5(a,a.children)},
i:function(a){return a.localName},
S:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jK
if(u==null){u=H.c([],[W.aa])
t=new W.cZ(u)
C.a.h(u,W.ki(null))
C.a.h(u,W.kk())
$.jK=t
d=t}else d=u
u=$.jJ
if(u==null){u=new W.e4(d)
$.jJ=u
c=u}else{u.a=d
c=u}}if($.aQ==null){u=document
t=u.implementation.createHTMLDocument("")
$.aQ=t
$.j3=t.createRange()
t=$.aQ.createElement("base")
H.n(t,"$ibJ")
t.href=u.baseURI
$.aQ.head.appendChild(t)}u=$.aQ
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$iaZ")}u=$.aQ
if(!!this.$iaZ)s=u.body
else{s=u.createElement(a.tagName)
$.aQ.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.K,a.tagName)){$.j3.selectNodeContents(s)
r=$.j3.createContextualFragment(b)}else{s.innerHTML=b
r=$.aQ.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aQ.body
if(s==null?u!=null:s!==u)J.jA(s)
c.bc(r)
document.adoptNode(r)
return r},
es:function(a,b,c){return this.S(a,b,c,null)},
ct:function(a,b){a.textContent=null
a.appendChild(this.S(a,b,null,null))},
$iI:1,
gcd:function(a){return a.tagName}}
W.eJ.prototype={
$1:function(a){return!!J.Q(H.n(a,"$iw")).$iI},
$S:13}
W.k.prototype={$ik:1}
W.d.prototype={
ej:function(a,b,c,d){H.l(c,{func:1,args:[W.k]})
if(c!=null)this.cR(a,b,c,!1)},
cR:function(a,b,c,d){return a.addEventListener(b,H.bz(H.l(c,{func:1,args:[W.k]}),1),!1)},
$id:1}
W.aw.prototype={$iaw:1}
W.eQ.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aw]},
$ar:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$ib:1,
$ab:function(){return[W.aw]},
$av:function(){return[W.aw]}}
W.eR.prototype={
gk:function(a){return a.length}}
W.eV.prototype={
gk:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.f_.prototype={
gk:function(a){return a.length}}
W.bm.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.w]},
$ar:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$ibm:1,
$av:function(){return[W.w]}}
W.aB.prototype={$iaB:1}
W.cU.prototype={
i:function(a){return String(a)},
$icU:1}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
m:function(a,b){return P.aX(a.get(H.G(b)))},
D:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aX(t.value[1]))}},
gN:function(a){var u=H.c([],[P.e])
this.D(a,new W.fo(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.fo.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fp.prototype={
m:function(a,b){return P.aX(a.get(H.G(b)))},
D:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aX(t.value[1]))}},
gN:function(a){var u=H.c([],[P.e])
this.D(a,new W.fq(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.fq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aC.prototype={$iaC:1}
W.fr.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aC]},
$ar:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$av:function(){return[W.aC]}}
W.X.prototype={$iX:1}
W.a2.prototype={
ga7:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.k3("No elements"))
if(t>1)throw H.f(P.k3("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s,r
H.t(b,"$ii",[W.w],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gF:function(a){var u=this.a.childNodes
return new W.cM(u,u.length,[H.cu(C.M,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$ar:function(){return[W.w]},
$ai:function(){return[W.w]},
$ab:function(){return[W.w]}}
W.w.prototype={
f0:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.cv(a):u},
em:function(a,b){return a.appendChild(b)},
$iw:1}
W.c1.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.w]},
$ar:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$av:function(){return[W.w]}}
W.aD.prototype={$iaD:1,
gk:function(a){return a.length}}
W.fI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aD]},
$ar:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.fP.prototype={
m:function(a,b){return P.aX(a.get(H.G(b)))},
D:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aX(t.value[1]))}},
gN:function(a){var u=H.c([],[P.e])
this.D(a,new W.fQ(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.fQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fS.prototype={
gk:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.h1.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aF]},
$ar:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$av:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.h2.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aG]},
$ar:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$av:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gk:function(a){return a.length}}
W.h5.prototype={
m:function(a,b){return a.getItem(H.G(b))},
D:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gN:function(a){var u=H.c([],[P.e])
this.D(a,new W.h6(u))
return u},
gk:function(a){return a.length},
$aW:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.al.prototype={$ial:1}
W.bt.prototype={}
W.d9.prototype={
S:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=W.l9("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).Y(0,new W.a2(u))
return t}}
W.hc.prototype={
S:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.S(u.createElement("table"),b,c,d)
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
W.hd.prototype={
S:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.S(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.ga7(u)
t.toString
s.toString
new W.a2(t).Y(0,new W.a2(s))
return t}}
W.c9.prototype={$ic9:1}
W.aI.prototype={$iaI:1}
W.am.prototype={$iam:1}
W.hf.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.am]},
$ar:function(){return[W.am]},
$ii:1,
$ai:function(){return[W.am]},
$ib:1,
$ab:function(){return[W.am]},
$av:function(){return[W.am]}}
W.hg.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aI]},
$ar:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$av:function(){return[W.aI]}}
W.hi.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.an.prototype={$ian:1}
W.hm.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$av:function(){return[W.aK]}}
W.hn.prototype={
gk:function(a){return a.length}}
W.ba.prototype={}
W.hJ.prototype={
i:function(a){return String(a)}}
W.hX.prototype={
gk:function(a){return a.length}}
W.aN.prototype={
gew:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ag("deltaY is not supported"))},
gev:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ag("deltaX is not supported"))},
$iaN:1}
W.cf.prototype={
e1:function(a,b){return a.requestAnimationFrame(H.bz(H.l(b,{func:1,ret:-1,args:[P.Z]}),1))},
d_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cg.prototype={$icg:1}
W.i6.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.J]},
$ar:function(){return[W.J]},
$ii:1,
$ai:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$av:function(){return[W.J]}}
W.dn.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iaf)return!1
return a.left===u.gbX(b)&&a.top===u.gck(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gB:function(a){return W.kj(C.c.gB(a.left),C.c.gB(a.top),C.c.gB(a.width),C.c.gB(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.il.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.ax]},
$ar:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.dH.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.w]},
$ar:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$av:function(){return[W.w]}}
W.iy.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.iz.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.al]},
$ar:function(){return[W.al]},
$ii:1,
$ai:function(){return[W.al]},
$ib:1,
$ab:function(){return[W.al]},
$av:function(){return[W.al]}}
W.i4.prototype={
D:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gN(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gN:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.j(r,t)
s=H.n(r[t],"$icg")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aW:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.i7.prototype={
m:function(a,b){return this.a.getAttribute(H.G(b))},
gk:function(a){return this.gN(this).length}}
W.i8.prototype={}
W.jd.prototype={}
W.i9.prototype={}
W.ia.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ik"))},
$S:24}
W.bb.prototype={
cJ:function(a){var u
if($.dw.a===0){for(u=0;u<262;++u)$.dw.H(0,C.J[u],W.m4())
for(u=0;u<12;++u)$.dw.H(0,C.j[u],W.m5())}},
ae:function(a){return $.kU().K(0,W.bR(a))},
Z:function(a,b,c){var u=$.dw.m(0,H.h(W.bR(a))+"::"+b)
if(u==null)u=$.dw.m(0,"*::"+b)
if(u==null)return!1
return H.jk(u.$4(a,b,c,this))},
$iaa:1}
W.v.prototype={
gF:function(a){return new W.cM(a,this.gk(a),[H.cu(this,a,"v",0)])}}
W.cZ.prototype={
ae:function(a){return C.a.bM(this.a,new W.fA(a))},
Z:function(a,b,c){return C.a.bM(this.a,new W.fz(a,b,c))},
$iaa:1}
W.fA.prototype={
$1:function(a){return H.n(a,"$iaa").ae(this.a)},
$S:16}
W.fz.prototype={
$1:function(a){return H.n(a,"$iaa").Z(this.a,this.b,this.c)},
$S:16}
W.dP.prototype={
cM:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.aC(0,new W.iw())
t=b.aC(0,new W.ix())
this.b.Y(0,u)
s=this.c
s.Y(0,C.L)
s.Y(0,t)},
ae:function(a){return this.a.K(0,W.bR(a))},
Z:function(a,b,c){var u=this,t=W.bR(a),s=u.c
if(s.K(0,H.h(t)+"::"+b))return u.d.el(c)
else if(s.K(0,"*::"+b))return u.d.el(c)
else{s=u.b
if(s.K(0,H.h(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.h(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$iaa:1}
W.iw.prototype={
$1:function(a){return!C.a.K(C.j,H.G(a))},
$S:17}
W.ix.prototype={
$1:function(a){return C.a.K(C.j,H.G(a))},
$S:17}
W.iB.prototype={
Z:function(a,b,c){if(this.cB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.iC.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.G(a))},
$S:25}
W.iA.prototype={
ae:function(a){var u=J.Q(a)
if(!!u.$ic4)return!1
u=!!u.$im
if(u&&W.bR(a)==="foreignObject")return!1
if(u)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.b.aF(b,"on"))return!1
return this.ae(a)},
$iaa:1}
W.cM.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sbA(J.kW(u.a,t))
u.c=t
return!0}u.sbA(null)
u.c=s
return!1},
gv:function(a){return this.d},
sbA:function(a){this.d=H.D(a,H.u(this,0))},
$iay:1}
W.aa.prototype={}
W.iu.prototype={$imL:1}
W.e4.prototype={
bc:function(a){new W.iG(this).$2(a,null)},
al:function(a,b){if(b==null)J.jA(a)
else b.removeChild(a)},
e3:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kZ(a)
n=o.a.getAttribute("is")
H.n(a,"$iI")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ac(r)}t="element unprintable"
try{t=J.aq(a)}catch(r){H.ac(r)}try{s=W.bR(a)
this.e2(H.n(a,"$iI"),b,p,t,s,H.n(o,"$iE"),H.G(n))}catch(r){if(H.ac(r) instanceof P.ar)throw r
else{this.al(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
e2:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ae(a)){o.al(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.Z(a,"is",g)){o.al(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gN(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gN(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.j(t,s)
r=t[s]
q=o.a
p=J.l0(r)
H.G(r)
if(!q.Z(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$ic9)o.bc(a.content)},
$imw:1}
W.iG.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.e3(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.al(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ac(s)
r=H.n(u,"$iw")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$iw")}},
$S:26}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.co.prototype={}
W.cp.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
P.iL.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.eS.prototype={
gaN:function(){var u=this.b,t=H.a7(u,"r",0),s=W.I
return new H.fi(new H.ce(u,H.l(new P.eT(),{func:1,ret:P.K,args:[t]}),[t]),H.l(new P.eU(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bh(this.gaN().a)},
m:function(a,b){var u=this.gaN()
return u.b.$1(J.j0(u.a,b))},
gF:function(a){var u=P.jP(this.gaN(),!1,W.I)
return new J.ad(u,u.length,[H.u(u,0)])},
$ar:function(){return[W.I]},
$ai:function(){return[W.I]},
$ab:function(){return[W.I]}}
P.eT.prototype={
$1:function(a){return!!J.Q(H.n(a,"$iw")).$iI},
$S:13}
P.eU.prototype={
$1:function(a){return H.eg(H.n(a,"$iw"),"$iI")},
$S:39}
P.ip.prototype={}
P.af.prototype={}
P.aS.prototype={$iaS:1}
P.fa.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.m(a,b)},
$ar:function(){return[P.aS]},
$ii:1,
$ai:function(){return[P.aS]},
$ib:1,
$ab:function(){return[P.aS]},
$av:function(){return[P.aS]}}
P.aU.prototype={$iaU:1}
P.fD.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.m(a,b)},
$ar:function(){return[P.aU]},
$ii:1,
$ai:function(){return[P.aU]},
$ib:1,
$ab:function(){return[P.aU]},
$av:function(){return[P.aU]}}
P.fJ.prototype={
gk:function(a){return a.length}}
P.c4.prototype={$ic4:1}
P.hb.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.m(a,b)},
$ar:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbO:function(a){return new P.eS(a,new W.a2(a))},
S:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aa])
C.a.h(p,W.ki(null))
C.a.h(p,W.kk())
C.a.h(p,new W.iA())
c=new W.e4(new W.cZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).es(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.ga7(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$im:1}
P.aV.prototype={$iaV:1}
P.ho.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.m(a,b)},
$ar:function(){return[P.aV]},
$ii:1,
$ai:function(){return[P.aV]},
$ib:1,
$ab:function(){return[P.aV]},
$av:function(){return[P.aV]}}
P.dz.prototype={}
P.dA.prototype={}
P.dK.prototype={}
P.dL.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.el.prototype={
gk:function(a){return a.length}}
P.em.prototype={
m:function(a,b){return P.aX(a.get(H.G(b)))},
D:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aX(t.value[1]))}},
gN:function(a){var u=H.c([],[P.e])
this.D(a,new P.en(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.en.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.eo.prototype={
gk:function(a){return a.length}}
P.bi.prototype={}
P.fE.prototype={
gk:function(a){return a.length}}
P.dl.prototype={}
P.cB.prototype={$icB:1}
P.d2.prototype={$id2:1}
P.br.prototype={
cl:function(a,b,c){return a.uniform1f(b,c)},
fc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibr:1}
P.d6.prototype={$id6:1}
P.de.prototype={$ide:1}
P.h3.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aX(a.item(b))},
q:function(a,b){return this.m(a,b)},
$ar:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$av:function(){return[[P.E,,,]]}}
P.dS.prototype={}
P.dT.prototype={}
O.U.prototype={
bg:function(a){var u=this
u.sda(H.c([],[a]))
u.sbC(null)
u.sbB(null)
u.sbD(null)},
aE:function(a,b){var u=this,t={func:1,ret:-1,args:[P.z,[P.i,H.a7(u,"U",0)]]}
H.l(a,t)
H.l(b,t)
u.sbC(null)
u.sbB(a)
u.sbD(b)},
dM:function(a){H.t(a,"$ii",[H.a7(this,"U",0)],"$ai")
return!0},
cH:function(a,b){var u
H.t(b,"$ii",[H.a7(this,"U",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.ad(u,u.length,[H.u(u,0)])},
q:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.a7(s,"U",0)
H.D(b,r)
r=[r]
if(H.B(s.dM(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cH(t,H.c([b],r))}},
sda:function(a){this.a=H.t(a,"$ib",[H.a7(this,"U",0)],"$ab")},
sbC:function(a){this.b=H.l(a,{func:1,ret:P.K,args:[[P.i,H.a7(this,"U",0)]]})},
sbB:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.z,[P.i,H.a7(this,"U",0)]]})},
sbD:function(a){H.l(a,{func:1,ret:-1,args:[P.z,[P.i,H.a7(this,"U",0)]]})},
$ii:1}
O.bY.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.av():u},
a8:function(){var u=this.b
if(u!=null)u.R(null)},
gan:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.fl()},
c7:function(a){var u=this.a
if(a==null)C.a.h(u,V.fl())
else C.a.h(u,a)
this.a8()},
b7:function(){var u=this.a
if(u.length>0){u.pop()
this.a8()}},
saP:function(a){this.a=H.t(a,"$ib",[V.b9],"$ab")}}
E.ep.prototype={}
E.a0.prototype={
cm:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.T(q,s.x)){u=s.x
s.x=q
t=new D.R("matrix",u,q,[V.b9])
t.b=!0
s.a4(t)}for(r=s.y.a,r=new J.ad(r,r.length,[H.u(r,0)]);r.p();)r.d.cm(0,b)},
ag:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)C.a.h(n.a,n.gan(n))
else C.a.h(n.a,m.I(0,n.gan(n)))
n.a8()
a.c8(o.f)
n=a.dy
u=(n&&C.a).gaz(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.m(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.eC(m,s)
t.cF(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bx(r,35633)
t.f=t.bx(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!H.B(H.jk(m.getProgramParameter(t.r,35714)))){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.a8(P.a1("Failed to link shader: "+H.h(p)))}t.e8()
t.ea()
t.z=t.x.m(0,"posAttr")
t.Q=H.eg(t.y.m(0,"width"),"$icc")
t.ch=H.eg(t.y.m(0,"stop"),"$icc")
t.cx=H.eg(t.y.m(0,"viewObjMat"),"$icd")
t.cy=H.eg(t.y.m(0,"projMat"),"$icd")
if(s.length===0)H.a8(P.a1("May not cache a shader with no name."))
if(a.fr.bQ(0,s))H.a8(P.a1('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.H(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.cD)?o.e=null:m)==null){n=o.d.eq(new Z.hY(a.a),$.aY())
m=n.ez($.aY())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.ey()
s=u.b
r=u.c
q=n.Q
C.k.cl(q.a,q.d,s-r)
r=u.c
s=n.ch
C.k.cl(s.a,s.d,r)
r=a.cy
r=r.gan(r)
s=n.cy
s.toString
s.bd(r.cg(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gan(s)
r=a.dx
r=a.cx=s.I(0,r.gan(r))
s=r}n=n.cx
n.toString
n.bd(s.cg(0,!0))
u.e
n=o.e
n.aZ(a)
n.ag(a)
n.fb(a)
n=u.a
n.toString
m.useProgram(null)
n.x.ex()}for(n=o.y.a,n=new J.ad(n,n.length,[H.u(n,0)]);n.p();)n.d.ag(a)
a.c6()
a.dx.b7()},
a4:function(a){var u=this.z
if(u!=null)u.R(a)},
V:function(){return this.a4(null)},
c3:function(a){H.n(a,"$iA")
this.e=null
this.a4(a)},
eT:function(){return this.c3(null)},
c1:function(a){this.a4(H.n(a,"$iA"))},
eS:function(){return this.c1(null)},
c_:function(a){this.a4(H.n(a,"$iA"))},
eP:function(){return this.c_(null)},
eO:function(a,b){var u,t,s,r,q,p,o
H.t(b,"$ii",[E.a0],"$ai")
for(u=b.length,t=this.gbZ(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bS()
o.sa1(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
eR:function(a,b){var u,t
H.t(b,"$ii",[E.a0],"$ai")
for(u=b.gF(b),t=this.gbZ();u.p();)u.gv(u).gt().G(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scI:function(a,b){this.y=H.t(b,"$iU",[E.a0],"$aU")},
$ijS:1}
E.fL.prototype={
cD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.b2(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bY()
t=[V.b9]
u.saP(H.c([],t))
u.b=null
u.gt().h(0,new E.fM(s))
s.cy=u
u=new O.bY()
u.saP(H.c([],t))
u.b=null
u.gt().h(0,new E.fN(s))
s.db=u
u=new O.bY()
u.saP(H.c([],t))
u.b=null
u.gt().h(0,new E.fO(s))
s.dx=u
s.see(H.c([],[O.bu]))
u=s.dy;(u&&C.a).h(u,null)
s.seb(new H.aA([P.e,A.c5]))},
c8:function(a){var u=this.dy,t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
c6:function(){var u=this.dy
if(u.length>1)u.pop()},
see:function(a){this.dy=H.t(a,"$ib",[O.bu],"$ab")},
seb:function(a){this.fr=H.t(a,"$iE",[P.e,A.c5],"$aE")}}
E.fM.prototype={
$1:function(a){H.n(a,"$iA")},
$S:6}
E.fN.prototype={
$1:function(a){H.n(a,"$iA")
this.a.cx=null},
$S:6}
E.fO.prototype={
$1:function(a){H.n(a,"$iA")
this.a.cx=null},
$S:6}
E.db.prototype={
bj:function(a){H.n(a,"$iA")
this.ca()},
bi:function(){return this.bj(null)},
geD:function(){var u,t=this,s=Date.now(),r=C.e.ad(P.jI(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.b2(s,!1)
return u/r},
bF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.I()
if(typeof r!=="number")return H.bf(r)
u=C.c.bW(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.I()
t=C.c.bW(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k6(C.h,s.gf3())}},
ca:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hh(this),{func:1,ret:-1,args:[P.Z]})
C.u.d_(u)
C.u.e1(u,W.kr(t,P.Z))}},
f2:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b2(r,!1)
s.y=P.jI(r-s.r.a).a*0.000001
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
o.ag(p.e)}s=p.z
if(s!=null)s.R(null)}catch(q){u=H.ac(q)
t=H.bA(q)
P.ju("Error: "+H.h(u))
P.ju("Stack: "+H.h(t))
throw H.f(u)}}}
E.hh.prototype={
$1:function(a){var u
H.mf(a)
u=this.a
if(u.ch){u.ch=!1
u.f2()}},
$S:31}
Z.dj.prototype={$imq:1}
Z.cC.prototype={
aZ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ac(s)
t=P.a1('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.hY.prototype={$imr:1}
Z.cD.prototype={
ez:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aZ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aZ(a)},
fb:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.j(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aq(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sd6:function(a){this.b=H.t(a,"$ib",[Z.bV],"$ab")},
$imz:1}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.c3(this.c))+"'")+"]"}}
Z.di.prototype={
gbe:function(a){var u=this.a,t=(u&$.aY().a)!==0?3:0
if((u&$.bF().a)!==0)t+=3
if((u&$.bE().a)!==0)t+=3
if((u&$.bG().a)!==0)t+=2
if((u&$.bH().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=4
if((u&$.bI().a)!==0)++t
return(u&$.bD().a)!==0?t+4:t},
en:function(a){var u,t=$.aY(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0)if(u===a)return t
return $.kT()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.di))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.aY().a)!==0)C.a.h(u,"Pos")
if((t&$.bF().a)!==0)C.a.h(u,"Norm")
if((t&$.bE().a)!==0)C.a.h(u,"Binm")
if((t&$.bG().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bH().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cv().a)!==0)C.a.h(u,"Clr3")
if((t&$.cw().a)!==0)C.a.h(u,"Clr4")
if((t&$.bI().a)!==0)C.a.h(u,"Weight")
if((t&$.bD().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.es.prototype={}
D.bS.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.l(b,u)
if(this.a==null)this.sa1(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.K(u,b)
if(u===!0){u=s.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.K(u,b)
if(u===!0){u=s.b
t=(u&&C.a).G(u,b)||t}return t},
R:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.A()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.jP(u,!0,{func:1,ret:-1,args:[D.A]}),new D.eM(q))
u=r.b
if(u!=null){r.saj(H.c([],[{func:1,ret:-1,args:[D.A]}]))
C.a.D(u,new D.eN(q))}return!0},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.R(u)}}},
sa1:function(a){this.a=H.t(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saj:function(a){this.b=H.t(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.eM.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eN.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.A.prototype={}
D.cN.prototype={}
D.cO.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cE.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.cR.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.f9.prototype={
eY:function(a){this.d.h(0,a.a)
return!1},
eU:function(a){this.d.G(0,a.a)
return!1},
sdV:function(a){this.d=H.t(a,"$ik2",[P.z],"$ak2")}}
X.ff.prototype={
b6:function(a,b){this.r=a.a
return!1},
ap:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cs()
if(typeof u!=="number")return u.co()
this.r=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
eZ:function(a){return!1},
dB:function(a,b,c){return}}
X.bZ.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bZ))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.fs.prototype={
b6:function(a,b){this.f=a.a
return!1},
ap:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cs()
if(typeof u!=="number")return u.co()
this.f=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
f_:function(a,b){return!1}}
X.hl.prototype={
eX:function(a){H.t(a,"$ib",[V.ab],"$ab")
return!1},
eV:function(a){H.t(a,"$ib",[V.ab],"$ab")
return!1},
eW:function(a){H.t(a,"$ib",[V.ab],"$ab")
return!1}}
X.dh.prototype={
bw:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.cR(u,new X.bZ(t,a.altKey,a.shiftKey))},
ac:function(a){if(!H.B(a.ctrlKey))H.B(a.metaKey)
a.shiftKey},
aY:function(a){if(!H.B(a.ctrlKey))H.B(a.metaKey)
a.shiftKey},
a2:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.U()
u=t.top
if(typeof r!=="number")return r.U()
return new V.ab(s-q,r-u)},
ak:function(a){return new V.aW(a.movementX,a.movementY)},
aV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
q=C.c.W(r.pageX)
C.c.W(r.pageY)
p=o.left
C.c.W(r.pageX)
C.a.h(n,new V.ab(q-p,C.c.W(r.pageY)-o.top))}return n},
a0:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.cE(u,new X.bZ(t,a.altKey,a.shiftKey))},
aQ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.U()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.U()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
du:function(a){this.f=!0},
dg:function(a){this.f=!1},
dm:function(a){H.n(a,"$iX")
if(H.B(this.f)&&this.aQ(a))a.preventDefault()},
dA:function(a){var u
H.n(a,"$iaB")
if(!H.B(this.f))return
u=this.bw(a)
this.b.eY(u)},
dw:function(a){var u
H.n(a,"$iaB")
if(!H.B(this.f))return
u=this.bw(a)
this.b.eU(u)},
dD:function(a){var u,t,s,r,q=this
H.n(a,"$iX")
u=q.a
u.focus()
q.f=!0
q.ac(a)
if(H.B(q.x)){t=q.a0(a)
s=q.ak(a)
if(q.d.b6(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a0(a)
r=q.a2(a)
if(q.c.b6(t,r))a.preventDefault()},
dH:function(a){var u,t,s,r=this
H.n(a,"$iX")
r.ac(a)
u=r.a0(a)
if(H.B(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()},
ds:function(a){var u,t,s,r=this
H.n(a,"$iX")
if(!r.aQ(a)){r.ac(a)
u=r.a0(a)
if(H.B(r.x)){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()}},
dF:function(a){var u,t,s,r=this
H.n(a,"$iX")
r.ac(a)
u=r.a0(a)
if(H.B(r.x)){t=r.ak(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.a2(a)
if(r.c.ao(u,s))a.preventDefault()},
dq:function(a){var u,t,s,r=this
H.n(a,"$iX")
if(!r.aQ(a)){r.ac(a)
u=r.a0(a)
if(H.B(r.x)){t=r.ak(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.a2(a)
if(r.c.ao(u,s))a.preventDefault()}},
dJ:function(a){var u,t,s=this
H.n(a,"$iaN")
s.ac(a)
u=new V.aW((a&&C.t).gev(a),C.t.gew(a)).J(0,180)
if(H.B(s.x)){if(s.d.eZ(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.a2(a)
if(s.c.f_(u,t))a.preventDefault()},
dL:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a0(s.y)
t=s.a2(s.y)
s.d.dB(u,t,r)}},
dU:function(a){var u,t=this
H.n(a,"$ian")
t.a.focus()
t.f=!0
t.aY(a)
u=t.aV(a)
if(t.e.eX(u))a.preventDefault()},
dQ:function(a){var u
H.n(a,"$ian")
this.aY(a)
u=this.aV(a)
if(this.e.eV(u))a.preventDefault()},
dS:function(a){var u
H.n(a,"$ian")
this.aY(a)
u=this.aV(a)
if(this.e.eW(u))a.preventDefault()},
sd0:function(a){this.z=H.t(a,"$ib",[[P.c8,P.F]],"$ab")}}
V.bk.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.eL.prototype={}
V.b9.prototype={
cg:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.x])
return t},
I:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aT(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b9))return!1
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
i:function(a){return this.E()},
w:function(a){var u,t,s,r,q,p=this,o=[P.x],n=V.iO(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iO(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iO(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iO(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.j(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.j(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.j(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.j(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.j(n,1)
q=q+n[1]+", "
if(1>=t)return H.j(m,1)
q=q+m[1]+", "
if(1>=s)return H.j(l,1)
q=q+l[1]+", "
if(1>=r)return H.j(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.j(n,2)
u=u+n[2]+", "
if(2>=t)return H.j(m,2)
u=u+m[2]+", "
if(2>=s)return H.j(l,2)
u=u+l[2]+", "
if(2>=r)return H.j(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.j(n,3)
q=q+n[3]+", "
if(3>=t)return H.j(m,3)
q=q+m[3]+", "
if(3>=s)return H.j(l,3)
q=q+l[3]+", "
if(3>=r)return H.j(k,3)
return u+(q+k[3]+"]")},
E:function(){return this.w("")}}
V.ab.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.ak.prototype={
U:function(a,b){return new V.ak(this.a-b.a,this.b-b.b,this.c-b.c)},
I:function(a,b){return new V.ak(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.d4.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.aW.prototype={
b4:function(a){var u,t=this.a
if(typeof t!=="number")return t.I()
u=this.b
if(typeof u!=="number")return u.I()
return Math.sqrt(t*t+u*u)},
J:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.ka
return u==null?$.ka=new V.aW(0,0):u}u=this.a
if(typeof u!=="number")return u.J()
t=this.b
if(typeof t!=="number")return t.J()
return new V.aW(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aW))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.U()
if(typeof t!=="number")return H.bf(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.U()
if(typeof t!=="number")return H.bf(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.S.prototype={
b4:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
O:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
aD:function(a){return new V.S(-this.a,-this.b,-this.c)},
I:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
J:function(a,b){if(Math.abs(b-0)<$.P().a)return V.hM()
return new V.S(this.a/b,this.b/b,this.c/b)},
eH:function(){var u=$.P().a
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.cG.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.av():u},
aB:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bU.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.av():u},
P:function(a){var u
H.n(a,"$iA")
u=this.e
if(u!=null)u.R(a)},
cK:function(){return this.P(null)},
de:function(a,b){var u,t,s,r,q,p,o,n=U.a3
H.t(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gbk(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.l(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cN([n])
n.b=!0
this.P(n)},
dO:function(a,b){var u,t,s=U.a3
H.t(b,"$ii",[s],"$ai")
for(u=b.gF(b),t=this.gbk();u.p();)u.gv(u).gt().G(0,t)
s=new D.cO([s])
s.b=!0
this.P(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.bb()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ad(r,r.length,[H.u(r,0)]),u=null;r.p();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.I(0,u)}}s.f=u==null?V.fl():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.j(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.j(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aU:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.d5.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.av():u},
P:function(a){var u=this.y
if(u!=null)u.R(a)},
scn:function(a){var u
a=V.jw(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.P().a)){this.a=a
u=new D.R("yaw",u,a,[P.x])
u.b=!0
this.P(u)}},
sc5:function(a,b){var u
b=V.jw(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.P().a)){this.b=b
u=new D.R("pitch",u,b,[P.x])
u.b=!0
this.P(u)}},
scb:function(a){var u
a=V.jw(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
u=new D.R("roll",u,a,[P.x])
u.b=!0
this.P(u)}},
sbU:function(a){var u=this.d
if(!(Math.abs(u-a)<$.P().a)){this.d=a
u=new D.R("deltaYaw",u,a,[P.x])
u.b=!0
this.P(u)}},
sbS:function(a){var u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
u=new D.R("deltaPitch",u,a,[P.x])
u.b=!0
this.P(u)}},
sbT:function(a){var u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.R("deltaRoll",u,a,[P.x])
u.b=!0
this.P(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.scn(s.a+s.d*b.y)
s.sc5(0,s.b+s.e*b.y)
s.scb(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
r=V.aT(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)
q=s.b
u=Math.cos(q)
t=Math.sin(q)
r=r.I(0,V.aT(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1))
q=s.a
u=Math.cos(q)
t=Math.sin(q)
s.x=r.I(0,V.aT(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1))
r=s.y
if(r!=null)r.aq(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d5))return!1
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
return"Rotater: ["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+"], ["+V.L(u.d,3,0)+", "+V.L(u.e,3,0)+", "+V.L(u.f,3,0)+"]"}}
M.cK.prototype={
a_:function(a){var u
H.n(a,"$iA")
u=this.y
if(u!=null)u.R(a)},
cL:function(){return this.a_(null)},
di:function(a,b){var u,t,s,r,q,p,o,n=E.a0
H.t(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bS()
o.sa1(null)
o.saj(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cN([n])
n.b=!0
this.a_(n)},
dk:function(a,b){var u,t,s=E.a0
H.t(b,"$ii",[s],"$ai")
for(u=b.gF(b),t=this.gX();u.p();)u.gv(u).gt().G(0,t)
s=new D.cO([s])
s.b=!0
this.a_(s)},
sce:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().G(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.gX())
s=new D.R("technique",u,t.d,[O.bu])
s.b=!0
t.a_(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.av():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.c8(a1.d)
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
if(typeof s!=="number")return H.bf(s)
o=C.c.W(p*s)
p=q.b
if(typeof r!=="number")return H.bf(r)
n=C.c.W(p*r)
p=C.c.W(q.c*s)
a2.c=p
q=C.c.W(q.d*r)
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
i=V.aT(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c7(i)
t=$.jV
if(t==null){t=$.jX
if(t==null)t=$.jX=new V.ak(0,0,0)
q=$.kd
if(q==null)q=$.kd=new V.S(0,1,0)
p=$.kb
if(p==null)p=$.kb=new V.S(0,0,-1)
h=p.J(0,Math.sqrt(p.L(p)))
q=q.am(h)
g=q.J(0,Math.sqrt(q.L(q)))
f=h.am(g)
e=new V.S(t.a,t.b,t.c)
d=g.aD(0).L(e)
c=f.aD(0).L(e)
b=h.aD(0).L(e)
t=V.aT(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jV=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.I(0,a)}a2.db.c7(a)
for(u=a1.e.a,u=new J.ad(u,u.length,[H.u(u,0)]);u.p();)u.d.cm(0,a2)
for(u=a1.e.a,u=new J.ad(u,u.length,[H.u(u,0)]);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.b7()
a2.db.b7()
a1.c.toString
a2.c6()},
scU:function(a,b){this.e=H.t(b,"$iU",[E.a0],"$aU")},
$imx:1}
A.cz.prototype={}
A.ek.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ey:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ex:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eC.prototype={}
A.c5.prototype={
cF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bx:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.jk(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.a1("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
e8:function(){var u,t,s,r=this,q=H.c([],[A.cz]),p=r.a,o=H.ap(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bf(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cz(p,t.name,s))}r.x=new A.ek(q)},
ea:function(){var u,t,s,r=this,q=H.c([],[A.dd]),p=r.a,o=H.ap(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bf(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.eu(t.type,t.size,t.name,s))}r.y=new A.hB(q)},
ab:function(a,b,c){var u=this.a
if(a===1)return new A.ht(u,b,c)
else return A.jc(u,this.r,b,a,c)},
cX:function(a,b,c){var u=this.a
if(a===1)return new A.hE(u,b,c)
else return A.jc(u,this.r,b,a,c)},
cY:function(a,b,c){var u=this.a
if(a===1)return new A.hF(u,b,c)
else return A.jc(u,this.r,b,a,c)},
aw:function(a,b){return new P.dt(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
eu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ab(b,c,d)
case 5121:return u.ab(b,c,d)
case 5122:return u.ab(b,c,d)
case 5123:return u.ab(b,c,d)
case 5124:return u.ab(b,c,d)
case 5125:return u.ab(b,c,d)
case 5126:return new A.cc(u.a,c,d)
case 35664:return new A.hv(u.a,c,d)
case 35665:return new A.hx(u.a,c,d)
case 35666:return new A.hz(u.a,c,d)
case 35667:return new A.hw(u.a,c,d)
case 35668:return new A.hy(u.a,c,d)
case 35669:return new A.hA(u.a,c,d)
case 35674:return new A.hC(u.a,c,d)
case 35675:return new A.hD(u.a,c,d)
case 35676:return new A.cd(u.a,c,d)
case 35678:return u.cX(b,c,d)
case 35680:return u.cY(b,c,d)
case 35670:throw H.f(u.aw("BOOL",c))
case 35671:throw H.f(u.aw("BOOL_VEC2",c))
case 35672:throw H.f(u.aw("BOOL_VEC3",c))
case 35673:throw H.f(u.aw("BOOL_VEC4",c))
default:throw H.f(P.a1("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dd.prototype={}
A.hB.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.E()},
E:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ht.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
seh:function(a){H.t(a,"$ib",[P.z],"$ab")}}
A.cc.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.hD.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.cd.prototype={
bd:function(a){var u=new Float32Array(H.jf(H.t(a,"$ib",[P.x],"$ab")))
C.k.fc(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hE.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.hF.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iZ.prototype={
$1:function(a){return new V.ak(Math.cos(a),Math.sin(a),0)},
$S:34}
F.iM.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jz(n.$1(o),m)
m=J.jz(n.$1(o+3.141592653589793/p.c),m).U(0,l)
m=new V.S(m.a,m.b,m.c)
u=m.J(0,Math.sqrt(m.L(m)))
n=$.kc
if(n==null){n=new V.S(1,0,0)
$.kc=n
t=n}else t=n
if(!J.T(u,t)){n=$.ke
if(n==null){n=new V.S(0,0,1)
$.ke=n
t=n}else t=n}n=u.am(t)
s=n.J(0,Math.sqrt(n.L(n)))
n=s.am(u)
t=n.J(0,Math.sqrt(n.L(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.I(0,n*m)
m=s.I(0,q*m)
m=new V.ak(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.T(a.f,m)){a.f=m
n=a.a
if(n!=null)n.V()}},
$S:35}
F.V.prototype={
ay:function(){var u=this
if(!u.gbV()){C.a.G(u.a.a.d.b,u)
u.a.a.V()}u.dY()
u.dZ()
u.e_()},
e5:function(a){this.a=a
C.a.h(a.d.b,this)},
e6:function(a){this.b=a
C.a.h(a.d.c,this)},
e7:function(a){this.c=a
C.a.h(a.d.d,this)},
dY:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
dZ:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
e_:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gbV:function(){return this.a==null||this.b==null||this.c==null},
cS:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hM()
if(q!=null)s=s.O(0,q)
if(u!=null)s=s.O(0,u)
if(t!=null)s=s.O(0,t)
if(s.eH())return
return s.J(0,Math.sqrt(s.L(s)))},
cT:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.U(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.J(0,Math.sqrt(r.L(r)))
r=t.U(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.am(r.J(0,Math.sqrt(r.L(r))))
return r.J(0,Math.sqrt(r.L(r)))},
b0:function(){var u,t=this
if(t.d!=null)return!0
u=t.cS()
if(u==null){u=t.cT()
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
i:function(a){return this.E()},
w:function(a){var u,t,s=this
if(s.gbV())return a+"disposed"
u=a+C.b.a5(J.aq(s.a.e),0)+", "+C.b.a5(J.aq(s.b.e),0)+", "+C.b.a5(J.aq(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
E:function(){return this.w("")}}
F.eP.prototype={}
F.h0.prototype={
b5:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.b8.prototype={}
F.fb.prototype={}
F.hs.prototype={}
F.bo.prototype={}
F.d7.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.av():u},
eM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.u(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.geB(u)
C.a.c9(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.j(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){C.a.h(s,q)
C.a.c9(u,r)}}if(s.length>1)b.eL(s)}}p.a.C()
p.c.b8()
p.d.b8()
p.b.f1()
p.c.b9(new F.hs())
p.d.b9(new F.h0())
o=p.e
if(o!=null)o.aq(0)},
eq:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aY()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bF().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.bD().a)!==0)++s
r=a3.gbe(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.x
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cC])
for(n=0,m=0;m<s;++m){l=a3.en(m)
k=l.gbe(l)
C.a.H(o,m,new Z.cC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.j(u,j)
i=u[j].eJ(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.H(p,h,i[g]);++h}}n+=k}H.t(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.jf(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cD(new Z.dj(a0,f),o)
e.sd6(H.c([],[Z.bV]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.j(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.j(c,m)
c=c[m].c
c.a.a.C()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.t(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bV(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.w("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.w("   "))}return C.a.l(t,"\n")},
V:function(){var u=this.e
if(u!=null)u.R(null)},
$imy:1}
F.fU.prototype={
ek:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.t(c,"$ib",[F.ao],"$ab")
u=H.c([],[F.V])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.j(c,r)
l=c[r];++r
if(r>=m)return H.j(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.j(c,j)
i=c[j]
if(s<0||s>=m)return H.j(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.eO(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eO(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eO(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.eO(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
b9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b5(0,p,n)){p.ay()
break}}}}},
b8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.j(t,u)
s=t[u]
t=s.gbP(s)
if(t)s.ay()}},
b1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].b0())s=!1
return s},
i:function(a){return this.E()},
w:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].w(a))
return C.a.l(r,"\n")},
E:function(){return this.w("")},
sd1:function(a){this.b=H.t(a,"$ib",[F.V],"$ab")}}
F.fV.prototype={
gk:function(a){return 0},
b9:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
b8:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
s=t[u]
t=s.gbP(s)
if(t)s.ay()}},
i:function(a){return this.E()},
w:function(a){var u,t,s=H.c([],[P.e])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.j(t,u)
C.a.h(s,t[u].w(a+(""+u+". ")))}return C.a.l(s,"\n")},
E:function(){return this.w("")},
sd7:function(a){this.b=H.t(a,"$ib",[F.b8],"$ab")}}
F.fW.prototype={
gk:function(a){return 0},
f1:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
t=t[u].gfg()
t=t.gff(t)
if(t.gk(t).fe(0,1)){t=this.b
return H.j(t,u)
t[u].ay()}}},
i:function(a){return this.E()},
w:function(a){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.j(u,t)
C.a.h(s,u[t].w(a))}return C.a.l(s,"\n")},
E:function(){return this.w("")},
saU:function(a){this.b=H.t(a,"$ib",[F.bo],"$ab")}}
F.ao.prototype={
bR:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kg(u.cx,r,o,t,s,q,p,a,n)},
eJ:function(a){var u,t,s=this
if(a.n(0,$.aY())){u=s.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bF())){u=s.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bE())){u=H.c([0,0,1],[P.x])
return u}else if(a.n(0,$.bG())){u=s.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bH())){u=H.c([0,0,0],[P.x])
return u}else if(a.n(0,$.cv())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cw())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bI()))return H.c([s.ch],[P.x])
else if(a.n(0,$.bD())){u=H.c([-1,-1,-1,-1],[P.x])
return u}else return H.c([],[P.x])},
b0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hM()
t.d.D(0,new F.hW(s))
s=s.a
t.r=s.J(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
w:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.b.a5(J.aq(s.e),0))
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
C.a.h(q,V.L(s.ch,3,0))
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
E:function(){return this.w("")}}
F.hW.prototype={
$1:function(a){var u,t
H.n(a,"$iV")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.O(0,u)}},
$S:9}
F.hN.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.j(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.a1("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.V()
return!0},
bK:function(a,b){var u=null,t=F.kg(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
b1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].b0()
return!0},
i:function(a){return this.E()},
w:function(a){var u,t,s,r
this.C()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
E:function(){return this.w("")},
sei:function(a){this.c=H.t(a,"$ib",[F.ao],"$ab")}}
F.hO.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.j(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.j(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.j(t,b)
return t[b]},
D:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.V]})
C.a.D(u.b,b)
C.a.D(u.c,new F.hP(u,b))
C.a.D(u.d,new F.hQ(u,b))},
i:function(a){return this.E()},
E:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
sd2:function(a){this.b=H.t(a,"$ib",[F.V],"$ab")},
sd3:function(a){this.c=H.t(a,"$ib",[F.V],"$ab")},
sd4:function(a){this.d=H.t(a,"$ib",[F.V],"$ab")}}
F.hP.prototype={
$1:function(a){H.n(a,"$iV")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:9}
F.hQ.prototype={
$1:function(a){var u
H.n(a,"$iV")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:9}
F.hR.prototype={
gk:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.j(u,t)
return u[t]}else{u=this.b
return H.j(u,b)
return u[b]}},
i:function(a){return this.E()},
E:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.j(u,t)
C.a.h(s,u[t].w(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.j(u,t)
C.a.h(s,u[t].w(""))}return C.a.l(s,"\n")},
sd8:function(a){this.b=H.t(a,"$ib",[F.b8],"$ab")},
sd9:function(a){this.c=H.t(a,"$ib",[F.b8],"$ab")}}
F.hT.prototype={}
F.hS.prototype={
b5:function(a,b,c){return J.T(b.f,c.f)}}
F.hU.prototype={}
F.fB.prototype={
eL:function(a){var u,t,s,r,q,p,o,n,m
H.t(a,"$ib",[F.ao],"$ab")
u=V.hM()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.S(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.J(0,Math.sqrt(u.L(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.H)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.J(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.R(null)}}}return}}
F.hV.prototype={
gk:function(a){return 0},
i:function(a){return this.E()},
E:function(){var u,t,s=H.c([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.j(u,t)
C.a.h(s,u[t].w(""))}return C.a.l(s,"\n")},
saU:function(a){this.b=H.t(a,"$ib",[F.bo],"$ab")}}
O.eB.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.av():u},
aT:function(a){var u=this.r
if(u!=null)u.R(a)}}
O.bu.prototype={}
V.aP.prototype={
a3:function(a,b){return!0},
i:function(a){return"all"},
$ia9:1}
V.a9.prototype={}
V.cV.prototype={
a3:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)if(u[s].a3(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sM:function(a){this.a=H.t(a,"$ib",[V.a9],"$ab")},
$ia9:1}
V.a4.prototype={
a3:function(a,b){return!this.cA(0,b)},
i:function(a){return"!["+this.bf(0)+"]"}}
V.fK.prototype={
a3:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.j9(this.a),t=H.j9(this.b)
return u+".."+t},
$ia9:1}
V.fT.prototype={
cE:function(a){var u,t
if(a.a.length<=0)throw H.f(P.a1("May not create a SetMatcher with zero characters."))
u=new H.aA([P.z,P.K])
for(t=new H.bX(a,a.gk(a),[H.a7(a,"r",0)]);t.p();)u.H(0,t.d,!0)
this.se4(u)},
a3:function(a,b){return this.a.bQ(0,b)},
i:function(a){var u=this.a
return P.ja(new H.cS(u,[H.u(u,0)]))},
se4:function(a){this.a=H.t(a,"$iE",[P.z,P.K],"$aE")},
$ia9:1}
V.c6.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cb(this.a.j(0,b))
r.sM(H.c([],[V.a9]))
r.c=!1
C.a.h(this.c,r)
return r},
eA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.a3(0,a))return r}return},
i:function(a){return this.b},
seg:function(a){this.c=H.t(a,"$ib",[V.cb],"$ab")}}
V.dc.prototype={
i:function(a){var u=H.jv(this.b,"\n","\\n"),t=H.jv(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ca.prototype={
a6:function(a,b,c){var u,t,s
H.t(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.H)(c),++t){s=c[t]
this.c.H(0,s,b)}},
i:function(a){return this.b},
se0:function(a){var u=P.e
this.c=H.t(a,"$iE",[u,u],"$aE")}}
V.hj.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c6(this,b)
u.seg(H.c([],[V.cb]))
u.d=null
this.a.H(0,b,u)}return u},
A:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.ca(a)
u=P.e
t.se0(new H.aA([u,u]))
this.b.H(0,a,t)}return t},
cj:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dc]),l=this.c,k=[P.z],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.b.aa(a,s)
q=l.eA(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.ja(j)
throw H.f(P.a1("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.ja(j)
o=l.d
n=o.c.m(0,p)
t=new V.dc(n==null?o.b:n,p,s)}++s}}},
sed:function(a){this.a=H.t(a,"$iE",[P.e,V.c6],"$aE")},
sef:function(a){this.b=H.t(a,"$iE",[P.e,V.ca],"$aE")}}
V.cb.prototype={
i:function(a){return this.b.b+": "+this.bf(0)}}
X.cF.prototype={$ijS:1}
X.eX.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.av():u}}
X.d0.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.av():u},
a9:function(a){var u
H.n(a,"$iA")
u=this.f
if(u!=null)u.R(a)},
cP:function(){return this.a9(null)},
sbY:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gt().G(0,s.gbl())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gbl())
u=new D.R("mover",t,s.b,[U.a3])
u.b=!0
s.a9(u)}},
$ijS:1,
$icF:1}
X.da.prototype={}
V.b0.prototype={
as:function(a){this.b=new P.f0(C.G)
this.c=null
this.saO(H.c([],[[P.b,W.ae]]))},
u:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ae]))
u=a.split("\n")
for(l=u.length,t=[W.ae],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.G(q)
o=m.b.cW(q,0,q.length)
n=o==null?q:o
C.E.ct(p,H.jv(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaz(m.d),p)}},
c4:function(a,b){var u,t,s,r,q=this
H.t(b,"$ib",[P.e],"$ab")
q.saO(H.c([],[[P.b,W.ae]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.ax():t).cj(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.aA(t[r])},
saO:function(a){this.d=H.t(a,"$ib",[[P.b,W.ae]],"$ab")}}
V.iY.prototype={
$1:function(a){var u
H.n(a,"$iaJ")
u=C.c.ci(this.a.geD(),2)
if(u!=="0.00")P.ju(u+" fps")},
$S:36}
V.ez.prototype={
aA:function(a){var u=this
switch(a.a){case"Class":u.u(a.b,"#551")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break
case"Type":u.u(a.b,"#B11")
break
case"Whitespace":u.u(a.b,"#111")
break}},
ax:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hk()
a1.c=a1.j(0,r)
u=a1.j(0,r).l(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).l(0,q)
u=V.q(new H.o("_"))
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
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=a1.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).l(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=a1.j(0,m).l(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,k)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=a1.j(0,k).l(0,j)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=a1.j(0,k).l(0,i)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).l(0,k)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).l(0,k).a,new V.aP())
t=a1.j(0,r).l(0,h)
u=V.q(new H.o("'"))
C.a.h(t.a,u)
u=a1.j(0,h).l(0,g)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
t=a1.j(0,h).l(0,f)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).l(0,h)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).l(0,h).a,new V.aP())
t=a1.j(0,r).l(0,e)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,d)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,d).l(0,c)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).l(0,d)
t=new V.a4()
s=[V.a9]
t.sM(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).l(0,b)
t=V.q(new H.o("*"))
C.a.h(u.a,t)
t=a1.j(0,b).l(0,a)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,b)
t=new V.a4()
t.sM(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).l(0,c)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,r).l(0,a0)
u=V.q(new H.o(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).l(0,a0)
t=V.q(new H.o(" \n\t"))
C.a.h(u.a,t)
t=a1.j(0,p)
t.d=t.a.A("Num")
t=a1.j(0,n)
t.d=t.a.A("Num")
t=a1.j(0,m)
t.d=t.a.A("Symbol")
t=a1.j(0,j)
t.d=t.a.A("String")
t=a1.j(0,g)
t.d=t.a.A("String")
t=a1.j(0,c)
t.d=t.a.A(d)
t=a1.j(0,a0)
t.d=t.a.A(a0)
t=a1.j(0,q)
t=t.d=t.a.A(q)
u=[P.e]
t.a6(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a6(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a6(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eY.prototype={
aA:function(a){var u=this
switch(a.a){case"Builtin":u.u(a.b,"#411")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Preprocess":u.u(a.b,"#737")
break
case"Reserved":u.u(a.b,"#119")
break
case"Symbol":u.u(a.b,"#611")
break
case"Type":u.u(a.b,"#171")
break
case"Whitespace":u.u(a.b,"#111")
break}},
ax:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hk()
e.c=e.j(0,r)
u=e.j(0,r).l(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).l(0,q)
u=V.q(new H.o("_"))
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
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=e.j(0,o).l(0,n)
u=V.N("0","9")
C.a.h(t.a,u)
u=e.j(0,n).l(0,n)
t=V.N("0","9")
C.a.h(u.a,t)
t=e.j(0,r).l(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=e.j(0,m).l(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=e.j(0,r).l(0,k)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=e.j(0,k).l(0,j)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).l(0,m).a,new V.aP())
t=e.j(0,j).l(0,i)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,j).l(0,j)
t=new V.a4()
s=[V.a9]
t.sM(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,h)
t=V.q(new H.o("#"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,h)
u=new V.a4()
u.sM(H.c([],s))
C.a.h(t.a,u)
t=V.q(new H.o("\n"))
C.a.h(u.a,t)
t=e.j(0,h).l(0,g)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).l(0,f)
t=V.q(new H.o(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).l(0,f)
u=V.q(new H.o(" \n\t"))
C.a.h(t.a,u)
u=e.j(0,p)
u.d=u.a.A("Num")
u=e.j(0,n)
u.d=u.a.A("Num")
u=e.j(0,m)
u.d=u.a.A("Symbol")
u=e.j(0,i)
u.d=u.a.A(j)
u=e.j(0,g)
u.d=u.a.A(h)
u=e.j(0,f)
u.d=u.a.A(f)
u=e.j(0,q)
u=u.d=u.a.A(q)
t=[P.e]
u.a6(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a6(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a6(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.eZ.prototype={
aA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.u(a.b,"#911")
u.u("=",t)
break
case"Id":u.u(a.b,t)
break
case"Other":u.u(a.b,t)
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break}},
ax:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hk()
l.c=l.j(0,s)
u=l.j(0,s).l(0,r)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.N("a","z")
C.a.h(u.a,t)
t=V.N("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).l(0,r)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.N("0","9")
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).l(0,q)
t=V.q(new H.o("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).l(0,p)
t=V.q(new H.o("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).l(0,p)
u=V.q(new H.o("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).l(0,o)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=l.j(0,o).l(0,n)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=l.j(0,o).l(0,"EscStr")
t=V.q(new H.o("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").l(0,o)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).l(0,o).a,new V.aP())
C.a.h(l.j(0,s).l(0,m).a,new V.aP())
u=l.j(0,m).l(0,m)
t=new V.a4()
t.sM(H.c([],[V.a9]))
C.a.h(u.a,t)
u=V.q(new H.o('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.N("a","z")
C.a.h(t.a,u)
u=V.N("A","Z")
C.a.h(t.a,u)
u=l.j(0,p)
u.d=u.a.A("Symbol")
u=l.j(0,n)
u.d=u.a.A("String")
u=l.j(0,r)
t=u.a.A(r)
u.d=t
t.a6(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.A(q)
t=l.j(0,m)
t.d=t.a.A(m)
return l}}
V.fH.prototype={
c4:function(a,b){H.t(b,"$ib",[P.e],"$ab")
this.saO(H.c([],[[P.b,W.ae]]))
this.u(C.a.l(b,"\n"),"#111")},
aA:function(a){},
ax:function(){return}}
V.fX.prototype={
cG:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.k
W.Y(q,"scroll",H.l(new V.fZ(o),{func:1,ret:-1,args:[r]}),!1,r)},
bL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.t(a,"$ib",[P.e],"$ab")
this.e9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cj(C.a.eI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
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
if(H.mk(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.j(m,1)
l.href=H.G(m[1])
l.textContent=H.G(m[0])
t.appendChild(l)}else{k=P.kl(C.p,n,C.f,!1)
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
cp:function(a){var u,t,s,r=new V.ez("dart")
r.as("dart")
u=new V.eY("glsl")
u.as("glsl")
t=new V.eZ("html")
t.as("html")
s=C.a.eC(H.c([r,u,t],[V.b0]),new V.h_(a))
if(s!=null)return s
r=new V.fH("plain")
r.as("plain")
return r},
bJ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.t(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.z])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.jq(r).aF(r,"+")){C.a.H(b0,s,C.b.aG(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aF(r,"-")){C.a.H(b0,s,C.b.aG(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cp(a8)
q.c4(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kl(C.p,a7,C.f,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jB()
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
if(s>=u.length)return H.j(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.H)(r),++a0)C.N.em(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.H)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gF(r);a3.p();)c.appendChild(a3.gv(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
e9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hk()
u.c=u.j(0,q)
t=u.j(0,q).l(0,p)
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).l(0,p)
s=new V.a4()
r=[V.a9]
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,p).l(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,o)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).l(0,o)
s=new V.a4()
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,o).l(0,n)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,m)
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).l(0,m)
s=new V.a4()
s.sM(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,m).l(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).l(0,l)
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).l(0,k)
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,l).l(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).l(0,l)
t=new V.a4()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,k).l(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).l(0,k)
t=new V.a4()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).l(0,i).a,new V.aP())
s=u.j(0,i).l(0,i)
t=new V.a4()
t.sM(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.A(p)
s=u.j(0,n)
s.d=s.a.A(o)
s=u.j(0,"CodeEnd")
s.d=s.a.A(m)
s=u.j(0,j)
s.d=s.a.A("Link")
s=u.j(0,i)
s.d=s.a.A(i)
this.b=u}}
V.fZ.prototype={
$1:function(a){P.k6(C.h,new V.fY(this.a))},
$S:37}
V.fY.prototype={
$0:function(){var u=C.c.W(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
V.h_.prototype={
$1:function(a){return H.n(a,"$ib0").a===this.a},
$S:38}
R.iV.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.bJ("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bJ("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.cv=u.i
u=J.cQ.prototype
u.cz=u.i
u=P.i.prototype
u.cw=u.aC
u=W.I.prototype
u.aH=u.S
u=W.dP.prototype
u.cB=u.Z
u=V.cV.prototype
u.cA=u.a3
u.bf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lT","lB",10)
u(P,"lU","lC",10)
u(P,"lV","lD",10)
t(P,"ku","lR",1)
s(W,"m4",4,null,["$4"],["lF"],19,0)
s(W,"m5",4,null,["$4"],["lG"],19,0)
var m
r(m=E.a0.prototype,"gc2",0,0,null,["$1","$0"],["c3","eT"],2,0)
r(m,"gc0",0,0,null,["$1","$0"],["c1","eS"],2,0)
r(m,"gbZ",0,0,null,["$1","$0"],["c_","eP"],2,0)
q(m,"geN","eO",5)
q(m,"geQ","eR",5)
r(m=E.db.prototype,"gbh",0,0,null,["$1","$0"],["bj","bi"],2,0)
p(m,"gf3","ca",1)
o(m=X.dh.prototype,"gdt","du",7)
o(m,"gdf","dg",7)
o(m,"gdl","dm",3)
o(m,"gdz","dA",20)
o(m,"gdv","dw",20)
o(m,"gdC","dD",3)
o(m,"gdG","dH",3)
o(m,"gdr","ds",3)
o(m,"gdE","dF",3)
o(m,"gdn","dq",3)
o(m,"gdI","dJ",33)
o(m,"gdK","dL",7)
o(m,"gdT","dU",8)
o(m,"gdP","dQ",8)
o(m,"gdR","dS",8)
n(V.aW.prototype,"gk","b4",21)
n(V.S.prototype,"gk","b4",21)
r(m=U.bU.prototype,"gbk",0,0,null,["$1","$0"],["P","cK"],2,0)
q(m,"gdd","de",22)
q(m,"gdN","dO",22)
r(m=M.cK.prototype,"gX",0,0,null,["$1","$0"],["a_","cL"],2,0)
q(m,"gdh","di",5)
q(m,"gdj","dk",5)
r(X.d0.prototype,"gbl",0,0,null,["$1","$0"],["a9","cP"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.j7,J.a,J.ad,P.dC,P.i,H.bX,P.ay,H.bl,H.dg,H.hp,P.b4,H.bM,H.dU,P.W,H.fc,H.fd,H.f7,P.e_,P.aO,P.ai,P.dk,P.h7,P.c8,P.h8,P.aJ,P.a_,P.iH,P.iv,P.bw,P.dB,P.r,P.bN,P.f1,P.iF,P.K,P.b2,P.Z,P.b3,P.fF,P.d8,P.dt,P.eW,P.b5,P.b,P.E,P.C,P.a5,P.e,P.bs,W.ev,W.bb,W.v,W.cZ,W.dP,W.iA,W.cM,W.aa,W.iu,W.e4,P.ip,O.U,O.bY,E.ep,E.a0,E.fL,E.db,Z.dj,Z.hY,Z.cD,Z.bV,Z.di,D.es,D.bS,D.A,X.cE,X.cR,X.f9,X.ff,X.bZ,X.fs,X.hl,X.dh,V.bk,V.eL,V.b9,V.ab,V.ak,V.d4,V.aW,V.S,M.cK,A.cz,A.ek,A.dd,A.hB,F.V,F.eP,F.b8,F.fb,F.bo,F.d7,F.fU,F.fV,F.fW,F.ao,F.hN,F.hO,F.hR,F.hT,F.hU,F.hV,O.bu,V.aP,V.a9,V.cV,V.fK,V.fT,V.c6,V.dc,V.ca,V.hj,X.cF,X.da,X.d0,V.b0,V.fX])
s(J.a,[J.f4,J.f6,J.cQ,J.az,J.bW,J.b6,H.c0,W.d,W.eh,W.cA,W.at,W.au,W.J,W.dm,W.eA,W.eD,W.dp,W.cJ,W.dr,W.eF,W.k,W.du,W.ax,W.f_,W.dx,W.cU,W.fm,W.dD,W.dE,W.aC,W.dF,W.dI,W.aD,W.dM,W.dO,W.aG,W.dQ,W.aH,W.dV,W.al,W.dY,W.hi,W.aK,W.e0,W.hn,W.hJ,W.e5,W.e7,W.e9,W.eb,W.ed,P.aS,P.dz,P.aU,P.dK,P.fJ,P.dW,P.aV,P.e2,P.el,P.dl,P.cB,P.d2,P.br,P.d6,P.de,P.dS])
s(J.cQ,[J.fG,J.bv,J.b7])
t(J.j6,J.az)
s(J.bW,[J.cP,J.f5])
t(P.fe,P.dC)
s(P.fe,[H.df,W.i5,W.a2,P.eS])
t(H.o,H.df)
s(P.i,[H.eI,H.fi,H.ce])
s(H.eI,[H.bn,H.cS])
s(P.ay,[H.fj,H.hZ])
t(H.fk,H.bn)
s(P.b4,[H.fC,H.f8,H.hH,H.hr,H.er,H.fR,P.ej,P.d_,P.ar,P.hI,P.hG,P.c7,P.et,P.ey])
s(H.bM,[H.j_,H.he,H.iR,H.iS,H.iT,P.i1,P.i0,P.i2,P.i3,P.iE,P.iD,P.ib,P.ig,P.ic,P.id,P.ie,P.ij,P.ik,P.ii,P.ih,P.h9,P.ha,P.iJ,P.is,P.ir,P.it,P.fh,P.eG,P.eH,W.eJ,W.fo,W.fq,W.fQ,W.h6,W.ia,W.fA,W.fz,W.iw,W.ix,W.iC,W.iG,P.iL,P.eT,P.eU,P.en,E.fM,E.fN,E.fO,E.hh,D.eM,D.eN,F.iZ,F.iM,F.hW,F.hP,F.hQ,V.iY,V.fZ,V.fY,V.h_,R.iV])
s(H.he,[H.h4,H.bK])
t(H.i_,P.ej)
t(P.fg,P.W)
s(P.fg,[H.aA,W.i4])
t(H.cW,H.c0)
s(H.cW,[H.ci,H.ck])
t(H.cj,H.ci)
t(H.c_,H.cj)
t(H.cl,H.ck)
t(H.cX,H.cl)
s(H.cX,[H.ft,H.fu,H.fv,H.fw,H.fx,H.cY,H.fy])
t(P.iq,P.iH)
t(P.io,P.iv)
t(P.bO,P.h8)
t(P.eK,P.bN)
s(P.bO,[P.f0,P.hL])
t(P.hK,P.eK)
s(P.Z,[P.x,P.z])
s(P.ar,[P.bq,P.f2])
s(W.d,[W.w,W.eR,W.aF,W.cm,W.aI,W.am,W.co,W.hX,W.cf,P.eo,P.bi])
s(W.w,[W.I,W.b_,W.cg])
s(W.I,[W.p,P.m])
s(W.p,[W.cy,W.ei,W.bJ,W.aZ,W.bj,W.ae,W.eV,W.fS,W.bt,W.d9,W.hc,W.hd,W.c9])
s(W.at,[W.bP,W.ew,W.ex])
t(W.eu,W.au)
t(W.bQ,W.dm)
t(W.dq,W.dp)
t(W.cI,W.dq)
t(W.ds,W.dr)
t(W.eE,W.ds)
t(W.aw,W.cA)
t(W.dv,W.du)
t(W.eQ,W.dv)
t(W.dy,W.dx)
t(W.bm,W.dy)
t(W.ba,W.k)
s(W.ba,[W.aB,W.X,W.an])
t(W.fn,W.dD)
t(W.fp,W.dE)
t(W.dG,W.dF)
t(W.fr,W.dG)
t(W.dJ,W.dI)
t(W.c1,W.dJ)
t(W.dN,W.dM)
t(W.fI,W.dN)
t(W.fP,W.dO)
t(W.cn,W.cm)
t(W.h1,W.cn)
t(W.dR,W.dQ)
t(W.h2,W.dR)
t(W.h5,W.dV)
t(W.dZ,W.dY)
t(W.hf,W.dZ)
t(W.cp,W.co)
t(W.hg,W.cp)
t(W.e1,W.e0)
t(W.hm,W.e1)
t(W.aN,W.X)
t(W.e6,W.e5)
t(W.i6,W.e6)
t(W.dn,W.cJ)
t(W.e8,W.e7)
t(W.il,W.e8)
t(W.ea,W.e9)
t(W.dH,W.ea)
t(W.ec,W.eb)
t(W.iy,W.ec)
t(W.ee,W.ed)
t(W.iz,W.ee)
t(W.i7,W.i4)
t(W.i8,P.h7)
t(W.jd,W.i8)
t(W.i9,P.c8)
t(W.iB,W.dP)
t(P.af,P.ip)
t(P.dA,P.dz)
t(P.fa,P.dA)
t(P.dL,P.dK)
t(P.fD,P.dL)
t(P.c4,P.m)
t(P.dX,P.dW)
t(P.hb,P.dX)
t(P.e3,P.e2)
t(P.ho,P.e3)
t(P.em,P.dl)
t(P.fE,P.bi)
t(P.dT,P.dS)
t(P.h3,P.dT)
s(E.ep,[Z.cC,A.c5])
s(D.A,[D.cN,D.cO,D.R])
t(U.a3,D.es)
s(U.a3,[U.cG,U.d5])
t(U.bU,O.U)
t(A.eC,A.c5)
s(A.dd,[A.ht,A.hw,A.hy,A.hA,A.hu,A.cc,A.hv,A.hx,A.hz,A.hC,A.hD,A.cd,A.hE,A.hF])
t(F.h0,F.eP)
t(F.hs,F.fb)
t(F.hS,F.hT)
t(F.fB,F.hU)
t(O.eB,O.bu)
s(V.cV,[V.a4,V.cb])
t(X.eX,X.da)
s(V.b0,[V.ez,V.eY,V.eZ,V.fH])
u(H.df,H.dg)
u(H.ci,P.r)
u(H.cj,H.bl)
u(H.ck,P.r)
u(H.cl,H.bl)
u(P.dC,P.r)
u(W.dm,W.ev)
u(W.dp,P.r)
u(W.dq,W.v)
u(W.dr,P.r)
u(W.ds,W.v)
u(W.du,P.r)
u(W.dv,W.v)
u(W.dx,P.r)
u(W.dy,W.v)
u(W.dD,P.W)
u(W.dE,P.W)
u(W.dF,P.r)
u(W.dG,W.v)
u(W.dI,P.r)
u(W.dJ,W.v)
u(W.dM,P.r)
u(W.dN,W.v)
u(W.dO,P.W)
u(W.cm,P.r)
u(W.cn,W.v)
u(W.dQ,P.r)
u(W.dR,W.v)
u(W.dV,P.W)
u(W.dY,P.r)
u(W.dZ,W.v)
u(W.co,P.r)
u(W.cp,W.v)
u(W.e0,P.r)
u(W.e1,W.v)
u(W.e5,P.r)
u(W.e6,W.v)
u(W.e7,P.r)
u(W.e8,W.v)
u(W.e9,P.r)
u(W.ea,W.v)
u(W.eb,P.r)
u(W.ec,W.v)
u(W.ed,P.r)
u(W.ee,W.v)
u(P.dz,P.r)
u(P.dA,W.v)
u(P.dK,P.r)
u(P.dL,W.v)
u(P.dW,P.r)
u(P.dX,W.v)
u(P.e2,P.r)
u(P.e3,W.v)
u(P.dl,P.W)
u(P.dS,P.r)
u(P.dT,W.v)})()
var v={mangledGlobalNames:{z:"int",x:"double",Z:"num",e:"String",K:"bool",C:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[W.X]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.z,[P.i,E.a0]]},{func:1,ret:P.C,args:[D.A]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.C,args:[F.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.e,args:[P.z]},{func:1,ret:P.K,args:[W.w]},{func:1,ret:P.C,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.aa]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.K,args:[W.I,P.e,P.e,W.bb]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.z,[P.i,U.a3]]},{func:1,ret:[P.ai,,],args:[,]},{func:1,args:[W.k]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.C,args:[P.Z]},{func:1,ret:P.C,args:[,],opt:[P.a5]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:V.ak,args:[P.x]},{func:1,ret:P.C,args:[F.ao,P.x,P.x]},{func:1,ret:P.C,args:[P.aJ]},{func:1,ret:P.C,args:[W.k]},{func:1,ret:P.K,args:[V.b0]},{func:1,ret:W.I,args:[W.w]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.aZ.prototype
C.D=W.bj.prototype
C.E=W.ae.prototype
C.H=J.a.prototype
C.a=J.az.prototype
C.e=J.cP.prototype
C.c=J.bW.prototype
C.b=J.b6.prototype
C.I=J.b7.prototype
C.M=W.c1.prototype
C.q=J.fG.prototype
C.k=P.br.prototype
C.N=W.bt.prototype
C.r=W.d9.prototype
C.l=J.bv.prototype
C.t=W.aN.prototype
C.u=W.cf.prototype
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

C.B=new P.fF()
C.f=new P.hK()
C.C=new P.hL()
C.d=new P.iq()
C.h=new P.b3(0)
C.F=new P.b3(5e6)
C.G=new P.f1("element",!1,!1,!1)
C.J=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.K=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.L=H.c(u([]),[P.e])
C.p=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.i=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.j=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})();(function staticFields(){$.as=0
$.bL=null
$.jC=null
$.jg=!1
$.kx=null
$.ks=null
$.kC=null
$.iN=null
$.iU=null
$.js=null
$.bx=null
$.cq=null
$.cr=null
$.jh=!1
$.O=C.d
$.a6=[]
$.aQ=null
$.j3=null
$.jK=null
$.jJ=null
$.dw=P.jN(P.e,P.b5)
$.jR=null
$.jW=null
$.jX=null
$.k1=null
$.ka=null
$.kf=null
$.kc=null
$.kd=null
$.ke=null
$.kb=null
$.jV=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mu","kG",function(){return H.kw("_$dart_dartClosure")})
u($,"mv","jx",function(){return H.kw("_$dart_js")})
u($,"mA","kH",function(){return H.aL(H.hq({
toString:function(){return"$receiver$"}}))})
u($,"mB","kI",function(){return H.aL(H.hq({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mC","kJ",function(){return H.aL(H.hq(null))})
u($,"mD","kK",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mG","kN",function(){return H.aL(H.hq(void 0))})
u($,"mH","kO",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mF","kM",function(){return H.aL(H.k8(null))})
u($,"mE","kL",function(){return H.aL(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mJ","kQ",function(){return H.aL(H.k8(void 0))})
u($,"mI","kP",function(){return H.aL(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mZ","jy",function(){return P.lA()})
u($,"n0","kV",function(){return P.lr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n_","kU",function(){return P.jO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mS","kT",function(){return Z.ah(0)})
u($,"mM","kR",function(){return Z.ah(511)})
u($,"mU","aY",function(){return Z.ah(1)})
u($,"mT","bF",function(){return Z.ah(2)})
u($,"mO","bE",function(){return Z.ah(4)})
u($,"mV","bG",function(){return Z.ah(8)})
u($,"mW","bH",function(){return Z.ah(16)})
u($,"mP","cv",function(){return Z.ah(32)})
u($,"mQ","cw",function(){return Z.ah(64)})
u($,"mR","kS",function(){return Z.ah(96)})
u($,"mX","bI",function(){return Z.ah(128)})
u($,"mN","bD",function(){return Z.ah(256)})
u($,"mt","kF",function(){return new V.eL(1e-9)})
u($,"ms","P",function(){return $.kF()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c0,ArrayBufferView:H.c0,Float32Array:H.c_,Float64Array:H.c_,Int16Array:H.ft,Int32Array:H.fu,Int8Array:H.fv,Uint16Array:H.fw,Uint32Array:H.fx,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.fy,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eh,HTMLAnchorElement:W.cy,HTMLAreaElement:W.ei,HTMLBaseElement:W.bJ,Blob:W.cA,HTMLBodyElement:W.aZ,HTMLCanvasElement:W.bj,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSNumericValue:W.bP,CSSUnitValue:W.bP,CSSPerspective:W.eu,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.bQ,MSStyleCSSProperties:W.bQ,CSS2Properties:W.bQ,CSSImageValue:W.at,CSSKeywordValue:W.at,CSSPositionValue:W.at,CSSResourceValue:W.at,CSSURLImageValue:W.at,CSSStyleValue:W.at,CSSMatrixComponent:W.au,CSSRotation:W.au,CSSScale:W.au,CSSSkew:W.au,CSSTranslation:W.au,CSSTransformComponent:W.au,CSSTransformValue:W.ew,CSSUnparsedValue:W.ex,DataTransferItemList:W.eA,HTMLDivElement:W.ae,DOMException:W.eD,ClientRectList:W.cI,DOMRectList:W.cI,DOMRectReadOnly:W.cJ,DOMStringList:W.eE,DOMTokenList:W.eF,Element:W.I,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aw,FileList:W.eQ,FileWriter:W.eR,HTMLFormElement:W.eV,Gamepad:W.ax,History:W.f_,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,KeyboardEvent:W.aB,Location:W.cU,MediaList:W.fm,MIDIInputMap:W.fn,MIDIOutputMap:W.fp,MimeType:W.aC,MimeTypeArray:W.fr,PointerEvent:W.X,MouseEvent:W.X,DragEvent:W.X,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.c1,RadioNodeList:W.c1,Plugin:W.aD,PluginArray:W.fI,RTCStatsReport:W.fP,HTMLSelectElement:W.fS,SourceBuffer:W.aF,SourceBufferList:W.h1,SpeechGrammar:W.aG,SpeechGrammarList:W.h2,SpeechRecognitionResult:W.aH,Storage:W.h5,CSSStyleSheet:W.al,StyleSheet:W.al,HTMLTableCellElement:W.bt,HTMLTableDataCellElement:W.bt,HTMLTableHeaderCellElement:W.bt,HTMLTableElement:W.d9,HTMLTableRowElement:W.hc,HTMLTableSectionElement:W.hd,HTMLTemplateElement:W.c9,TextTrack:W.aI,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.hf,TextTrackList:W.hg,TimeRanges:W.hi,Touch:W.aK,TouchEvent:W.an,TouchList:W.hm,TrackDefaultList:W.hn,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.hJ,VideoTrackList:W.hX,WheelEvent:W.aN,Window:W.cf,DOMWindow:W.cf,Attr:W.cg,CSSRuleList:W.i6,ClientRect:W.dn,DOMRect:W.dn,GamepadList:W.il,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,SpeechRecognitionResultList:W.iy,StyleSheetList:W.iz,SVGLength:P.aS,SVGLengthList:P.fa,SVGNumber:P.aU,SVGNumberList:P.fD,SVGPointList:P.fJ,SVGScriptElement:P.c4,SVGStringList:P.hb,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aV,SVGTransformList:P.ho,AudioBuffer:P.el,AudioParamMap:P.em,AudioTrackList:P.eo,AudioContext:P.bi,webkitAudioContext:P.bi,BaseAudioContext:P.bi,OfflineAudioContext:P.fE,WebGLBuffer:P.cB,WebGLProgram:P.d2,WebGL2RenderingContext:P.br,WebGLShader:P.d6,WebGLUniformLocation:P.de,SQLResultSetRowList:P.h3})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
W.cm.$nativeSuperclassTag="EventTarget"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.kz,[])
else R.kz([])})})()
//# sourceMappingURL=test.dart.js.map
