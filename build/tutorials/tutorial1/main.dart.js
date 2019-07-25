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
a[c]=function(){a[c]=function(){H.m3(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.je"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.je"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.je(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iW:function iW(){},
iT:function(){return new P.c3("No element")},
l0:function(){return new P.c3("Too many elements")},
o:function o(a){this.a=a},
eF:function eF(){},
bk:function bk(){},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
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
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
hM:function hM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bh:function bh(){},
dg:function dg(){},
df:function df(){},
bA:function(a){var u,t=H.z(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
lL:function(a){return v.types[H.Y(a)]},
lS:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.f(H.bw(a))
return u},
c_:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bn:function(a){return H.l5(a)+H.ja(H.b8(a),0,null)},
l5:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$icb){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bA(t.length>1&&C.b.a9(t,0)===36?C.b.aH(t,1):t)},
jK:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ld:function(a){var u,t,s,r=H.c([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bw(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aw(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bw(s))}return H.jK(r)},
jL:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bw(s))
if(s<0)throw H.f(H.bw(s))
if(s>65535)return H.ld(a)}return H.jK(a)},
iY:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aw(u,10))>>>0,56320|u&1023)}throw H.f(P.az(a,0,1114111,null,null))},
bm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lc:function(a){var u=H.bm(a).getFullYear()+0
return u},
la:function(a){var u=H.bm(a).getMonth()+1
return u},
l6:function(a){var u=H.bm(a).getDate()+0
return u},
l7:function(a){var u=H.bm(a).getHours()+0
return u},
l9:function(a){var u=H.bm(a).getMinutes()+0
return u},
lb:function(a){var u=H.bm(a).getSeconds()+0
return u},
l8:function(a){var u=H.bm(a).getMilliseconds()+0
return u},
b9:function(a){throw H.f(H.bw(a))},
l:function(a,b){if(a==null)J.bb(a)
throw H.f(H.cs(a,b))},
cs:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,s,null)
u=H.Y(J.bb(a))
if(!(b<0)){if(typeof u!=="number")return H.b9(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.fD(b,s)},
lH:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bo(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bo(a,c,!0,b,"end",u)
return new P.an(!0,b,"end",null)},
bw:function(a){return new P.an(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kq})
u.name=""}else u.toString=H.kq
return u},
kq:function(){return J.a7(this.dartException)},
a2:function(a){throw H.f(a)},
C:function(a){throw H.f(P.aW(a))},
aF:function(a){var u,t,s,r,q,p
a=H.kp(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hi(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jV:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jF:function(a,b){return new H.fv(a,b==null?null:b.method)},
iX:function(a,b){var u=b==null,t=u?null:b.method
return new H.f4(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aw(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iX(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jF(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kt()
q=$.ku()
p=$.kv()
o=$.kw()
n=$.kz()
m=$.kA()
l=$.ky()
$.kx()
k=$.kC()
j=$.kB()
i=r.T(u)
if(i!=null)return f.$1(H.iX(H.z(u),i))
else{i=q.T(u)
if(i!=null){i.method="call"
return f.$1(H.iX(H.z(u),i))}else{i=p.T(u)
if(i==null){i=o.T(u)
if(i==null){i=n.T(u)
if(i==null){i=m.T(u)
if(i==null){i=l.T(u)
if(i==null){i=o.T(u)
if(i==null){i=k.T(u)
if(i==null){i=j.T(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jF(H.z(u),i))}}return f.$1(new H.hy(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.an(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
bx:function(a){var u
if(a==null)return new H.dT(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dT(a)},
lK:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.F(0,a[u],a[t])}return b},
lR:function(a,b,c,d,e,f){H.n(a,"$iaZ")
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
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lR)
a.$identity=u
return u},
kS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.fY().constructor.prototype):Object.create(new H.bI(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ao
if(typeof t!=="number")return t.G()
$.ao=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jt(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.lL,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jr:H.iQ
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jt(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
kP:function(a,b,c,d){var u=H.iQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kR(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kP(t,!r,u,b)
if(t===0){r=$.ao
if(typeof r!=="number")return r.G()
$.ao=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bJ
return new Function(r+H.h(q==null?$.bJ=H.en("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ao
if(typeof r!=="number")return r.G()
$.ao=r+1
o+=r
r="return function("+o+"){return this."
q=$.bJ
return new Function(r+H.h(q==null?$.bJ=H.en("self"):q)+"."+H.h(u)+"("+o+");}")()},
kQ:function(a,b,c,d){var u=H.iQ,t=H.jr
switch(b?-1:a){case 0:throw H.f(H.lh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kR:function(a,b){var u,t,s,r,q,p,o,n=$.bJ
if(n==null)n=$.bJ=H.en("self")
u=$.jq
if(u==null)u=$.jq=H.en("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kQ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.ao
if(typeof u!=="number")return u.G()
$.ao=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.ao
if(typeof u!=="number")return u.G()
$.ao=u+1
return new Function(n+u+"}")()},
je:function(a,b,c,d,e,f,g){return H.kS(a,b,H.Y(c),d,!!e,!!f,g)},
iQ:function(a){return a.a},
jr:function(a){return a.c},
en:function(a){var u,t,s,r=new H.bI("self","target","receiver","name"),q=J.iU(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.lB("boolean expression must not be null")
return a},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.al(a,"String"))},
mH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.al(a,"double"))},
lX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.al(a,"num"))},
jb:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.al(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.al(a,"int"))},
kn:function(a,b){throw H.f(H.al(a,H.bA(H.z(b).substring(2))))},
lZ:function(a,b){throw H.f(H.kO(a,H.bA(H.z(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.kn(a,b)},
by:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.lZ(a,b)},
jj:function(a){if(a==null)return a
if(!!J.P(a).$ib)return a
throw H.f(H.al(a,"List<dynamic>"))},
lT:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ib)return a
if(u[b])return a
H.kn(a,b)},
kf:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Y(u)]
else return a.$S()}return},
ed:function(a,b){var u
if(typeof a=="function")return!0
u=H.kf(J.P(a))
if(u==null)return!1
return H.k6(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.j7)return a
$.j7=!0
try{if(H.ed(a,b))return a
u=H.iL(b)
t=H.al(a,u)
throw H.f(t)}finally{$.j7=!1}},
jf:function(a,b){if(a!=null&&!H.jd(a,b))H.a2(H.al(a,H.iL(b)))
return a},
al:function(a,b){return new H.hk("TypeError: "+P.cL(a)+": type '"+H.ka(a)+"' is not a subtype of type '"+b+"'")},
kO:function(a,b){return new H.eo("CastError: "+P.cL(a)+": type '"+H.ka(a)+"' is not a subtype of type '"+b+"'")},
ka:function(a){var u,t=J.P(a)
if(!!t.$ibK){u=H.kf(t)
if(u!=null)return H.iL(u)
return"Closure"}return H.bn(a)},
lB:function(a){throw H.f(new H.hN(a))},
m3:function(a){throw H.f(new P.ev(H.z(a)))},
lh:function(a){return new H.fL(a)},
kh:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b8:function(a){if(a==null)return
return a.$ti},
mI:function(a,b,c){return H.bz(a["$a"+H.h(c)],H.b8(b))},
cu:function(a,b,c,d){var u
H.z(c)
H.Y(d)
u=H.bz(a["$a"+H.h(c)],H.b8(b))
return u==null?null:u[d]},
ct:function(a,b,c){var u
H.z(b)
H.Y(c)
u=H.bz(a["$a"+H.h(b)],H.b8(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.Y(b)
u=H.b8(a)
return u==null?null:u[b]},
iL:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
H.r(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bA(a[0].name)+H.ja(a,1,b)
if(typeof a=="function")return H.bA(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.h(b[t])}if('func' in a)return H.lu(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lu:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.r(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.b.G(p,a0[n])
m=u[q]
if(m!=null&&m!==P.I)p+=" extends "+H.b7(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.b7(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.b7(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.lJ(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.z(b[h])
j=j+i+H.b7(e[d],a0)+(" "+H.h(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ja:function(a,b,c){var u,t,s,r,q,p
H.r(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
bz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jc:function(a,b,c,d){var u,t
H.z(b)
H.jj(c)
H.z(d)
if(a==null)return!1
u=H.b8(a)
t=J.P(a)
if(t[b]==null)return!1
return H.kd(H.bz(t[d],u),null,c,null)},
r:function(a,b,c,d){H.z(b)
H.jj(c)
H.z(d)
if(a==null)return a
if(H.jc(a,b,c,d))return a
throw H.f(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bA(b.substring(2))+H.ja(c,0,null),v.mangledGlobalNames)))},
kd:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ah(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ah(a[t],b,c[t],d))return!1
return!0},
mF:function(a,b,c){return a.apply(b,H.bz(J.P(b)["$a"+H.h(c)],H.b8(b)))},
kj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="H"||a===-1||a===-2||H.kj(u)}return!1},
jd:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="H"||b===-1||b===-2||H.kj(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ed(a,b)}u=J.P(a).constructor
t=H.b8(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ah(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jd(a,b))throw H.f(H.al(a,H.iL(b)))
return a},
ah:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.k6(a,b,c,d)
if('func' in a)return c.name==="aZ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ah("type" in a?a.type:l,b,s,d)
else if(H.ah(a,b,s,d))return!0
else{if(!('$i'+"bS" in t.prototype))return!1
r=t.prototype["$a"+"bS"]
q=H.bz(r,u?a.slice(1):l)
return H.ah(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kd(H.bz(m,u),b,p,d)},
k6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.lW(h,b,g,d)},
lW:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ah(c[s],d,a[s],b))return!1}return!0},
mG:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
lU:function(a){var u,t,s,r,q=H.z($.ki.$1(a)),p=$.iC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.z($.kc.$2(a,q))
if(q!=null){p=$.iC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iK(u)
$.iC[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iJ[q]=u
return u}if(s==="-"){r=H.iK(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kl(a,u)
if(s==="*")throw H.f(P.jW(q))
if(v.leafTags[q]===true){r=H.iK(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kl(a,u)},
kl:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jk(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iK:function(a){return J.jk(a,!1,null,!!a.$iA)},
lV:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iK(u)
else return J.jk(u,c,null,null)},
lP:function(){if(!0===$.ji)return
$.ji=!0
H.lQ()},
lQ:function(){var u,t,s,r,q,p,o,n
$.iC=Object.create(null)
$.iJ=Object.create(null)
H.lO()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ko.$1(q)
if(p!=null){o=H.lV(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lO:function(){var u,t,s,r,q,p,o=C.v()
o=H.bv(C.w,H.bv(C.x,H.bv(C.p,H.bv(C.p,H.bv(C.y,H.bv(C.z,H.bv(C.A(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ki=new H.iG(r)
$.kc=new H.iH(q)
$.ko=new H.iI(p)},
bv:function(a,b){return a(b)||b},
l2:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.eR("Illegal RegExp pattern ("+String(r)+")",a))},
m0:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lI:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kp:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jl:function(a,b,c){var u=H.m1(a,b,c)
return u},
m1:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kp(b),'g'),H.lI(c))},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fv:function fv(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a){this.a=a},
iM:function iM(a){this.a=a},
dT:function dT(a){this.a=a
this.b=null},
bK:function bK(){},
h7:function h7(){},
fY:function fY(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a){this.a=a},
eo:function eo(a){this.a=a},
fL:function fL(a){this.a=a},
hN:function hN(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function cS(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j6:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cs(b,a))},
lt:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lH(a,b,c))
return b},
bY:function bY(){},
cW:function cW(){},
bX:function bX(){},
cX:function cX(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
cY:function cY(){},
fs:function fs(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
lJ:function(a){return J.jx(a?Object.keys(a):[],null)},
lY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iF:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ji==null){H.lP()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jW("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jn()]
if(r!=null)return r
r=H.lU(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jn(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.az(a,0,4294967295,"length",null))
return J.jx(new Array(a),b)},
jx:function(a,b){return J.iU(H.c(a,[b]))},
iU:function(a){H.jj(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cO.prototype
return J.f1.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.f2.prototype
if(typeof a=="boolean")return J.f0.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iF(a)},
jg:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iF(a)},
iE:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iF(a)},
kg:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.cb.prototype
return a},
jh:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.I)return a
return J.iF(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).n(a,b)},
kI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jg(a).m(a,b)},
kJ:function(a,b,c,d){return J.jh(a).e0(a,b,c,d)},
iN:function(a,b){return J.iE(a).t(a,b)},
kK:function(a,b){return J.iE(a).D(a,b)},
kL:function(a){return J.jh(a).ge5(a)},
cx:function(a){return J.P(a).gC(a)},
ba:function(a){return J.iE(a).gE(a)},
bb:function(a){return J.jg(a).gl(a)},
jp:function(a){return J.iE(a).eJ(a)},
kM:function(a,b,c){return J.kg(a).aq(a,b,c)},
kN:function(a){return J.kg(a).eS(a)},
a7:function(a){return J.P(a).i(a)},
a:function a(){},
f0:function f0(){},
f2:function f2(){},
cQ:function cQ(){},
fz:function fz(){},
cb:function cb(){},
b0:function b0(){},
au:function au(a){this.$ti=a},
iV:function iV(a){this.$ti=a},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cP:function cP(){},
cO:function cO(){},
f1:function f1(){},
bj:function bj(){}},P={
ll:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lC()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cr(new P.hP(s),1)).observe(u,{childList:true})
return new P.hO(s,u,t)}else if(self.setImmediate!=null)return P.lD()
return P.lE()},
lm:function(a){self.scheduleImmediate(H.cr(new P.hQ(H.k(a,{func:1,ret:-1})),0))},
ln:function(a){self.setImmediate(H.cr(new P.hR(H.k(a,{func:1,ret:-1})),0))},
lo:function(a){P.j_(C.i,H.k(a,{func:1,ret:-1}))},
j_:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.e.ax(a.a,1000)
return P.ls(u<0?0:u,b)},
ls:function(a,b){var u=new P.ir()
u.cD(a,b)
return u},
lp:function(a,b){var u,t,s
b.a=1
try{a.c7(new P.i_(b),new P.i0(b),null)}catch(s){u=H.ab(s)
t=H.bx(s)
P.m_(new P.i1(b,u,t))}},
k1:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iag")
if(u>=4){t=b.aW()
b.a=a.a
b.c=a.c
P.cf(b,t)}else{t=H.n(b.c,"$iaI")
b.a=2
b.c=a
a.bF(t)}},
cf:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia0")
g=g.b
r=s.a
q=s.b
g.toString
P.iy(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cf(h.a,b)}g=h.a
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
P.iy(i,i,g,r,q)
return}l=$.R
if(l!=n)$.R=n
else l=i
g=b.c
if(g===8)new P.i5(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.i4(u,b,o).$0()}else if((g&2)!==0)new P.i3(h,u,b).$0()
if(l!=null)$.R=l
g=u.b
if(!!J.P(g).$ibS){if(g.a>=4){k=H.n(q.c,"$iaI")
q.c=null
b=q.av(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.k1(g,q)
return}}j=b.b
k=H.n(j.c,"$iaI")
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
lx:function(a,b){if(H.ed(a,{func:1,args:[P.I,P.a5]}))return H.k(a,{func:1,ret:null,args:[P.I,P.a5]})
if(H.ed(a,{func:1,args:[P.I]}))return H.k(a,{func:1,ret:null,args:[P.I]})
throw H.f(P.iP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lw:function(){var u,t
for(;u=$.bu,u!=null;){$.cq=null
t=u.b
$.bu=t
if(t==null)$.cp=null
u.a.$0()}},
lA:function(){$.j8=!0
try{P.lw()}finally{$.cq=null
$.j8=!1
if($.bu!=null)$.jo().$1(P.ke())}},
k9:function(a){var u=new P.dk(H.k(a,{func:1,ret:-1}))
if($.bu==null){$.bu=$.cp=u
if(!$.j8)$.jo().$1(P.ke())}else $.cp=$.cp.b=u},
lz:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bu
if(u==null){P.k9(a)
$.cq=$.cp
return}t=new P.dk(a)
s=$.cq
if(s==null){t.b=u
$.bu=$.cq=t}else{t.b=s.b
$.cq=s.b=t
if(t.b==null)$.cp=t}},
m_:function(a){var u,t=null,s={func:1,ret:-1}
H.k(a,s)
u=$.R
if(C.d===u){P.iA(t,t,C.d,a)
return}u.toString
P.iA(t,t,u,H.k(u.b_(a),s))},
jU:function(a,b){var u,t={func:1,ret:-1}
H.k(b,t)
u=$.R
if(u===C.d){u.toString
return P.j_(a,b)}return P.j_(a,H.k(u.b_(b),t))},
iy:function(a,b,c,d,e){var u={}
u.a=d
P.lz(new P.iz(u,e))},
k7:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
k8:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
ly:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
iA:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.b_(d):c.e6(d,-1)
P.k9(d)},
hP:function hP(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
ir:function ir(){},
is:function is(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ag:function ag(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a
this.b=null},
h0:function h0(){},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
c4:function c4(){},
h1:function h1(){},
a0:function a0(a,b){this.a=a
this.b=b},
iv:function iv(){},
iz:function iz(a,b){this.a=a
this.b=b},
ic:function ic(){},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function(a,b){return new H.av([a,b])},
l3:function(a){return H.lK(a,new H.av([null,null]))},
cT:function(a){return new P.i9([a])},
j4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k4:function(a,b,c){var u=new P.ia(a,b,[c])
u.c=a.e
return u},
l_:function(a,b,c){var u,t
if(P.j9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.a6,a)
try{P.lv(a,u)}finally{if(0>=$.a6.length)return H.l($.a6,-1)
$.a6.pop()}t=P.jS(b,H.lT(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
iS:function(a,b,c){var u,t
if(P.j9(a))return b+"..."+c
u=new P.bq(b)
C.a.h($.a6,a)
try{t=u
t.a=P.jS(t.a,a,", ")}finally{if(0>=$.a6.length)return H.l($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j9:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
lv:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.r(b,"$ib",[P.e],"$ab")
u=a.gE(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.p())return
r=H.h(u.gw(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.p()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gw(u);++s
if(!u.p()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gw(u);++s
for(;u.p();o=n,n=m){m=u.gw(u);++s
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
jz:function(a,b){var u,t,s=P.cT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t)s.h(0,H.B(a[t],b))
return s},
jB:function(a){var u,t={}
if(P.j9(a))return"{...}"
u=new P.bq("")
try{C.a.h($.a6,a)
u.a+="{"
t.a=!0
J.kK(a,new P.fc(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.l($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
i9:function i9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bt:function bt(a){this.a=a
this.c=this.b=null},
ia:function ia(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f9:function f9(){},
t:function t(){},
fb:function fb(){},
fc:function fc(a,b){this.a=a
this.b=b},
V:function V(){},
ii:function ii(){},
dB:function dB(){},
bL:function bL(){},
bM:function bM(){},
eH:function eH(){},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eW:function eW(a){this.a=a},
hB:function hB(){},
hC:function hC(){},
it:function it(a){this.b=0
this.c=a},
kY:function(a){if(a instanceof H.bK)return a.i(0)
return"Instance of '"+H.bn(a)+"'"},
l4:function(a,b,c){var u,t
H.B(b,c)
u=J.l1(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.F(u,t,b)
return H.r(u,"$ib",[c],"$ab")},
jA:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.ba(a);u.p();)C.a.h(s,H.B(u.gw(u),c))
if(b)return s
return H.r(J.iU(s),"$ib",t,"$ab")},
iZ:function(a){var u,t,s=P.y
H.r(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.r(a,"$iau",[s],"$aau")
u=a.length
t=P.jN(0,null,u)
return H.jL(t<u?C.a.cn(a,0,t):a)}return P.lj(a,0,null)},
lj:function(a,b,c){var u,t,s
H.r(a,"$ii",[P.y],"$ai")
u=J.ba(a)
for(t=0;t<b;++t)if(!u.p())throw H.f(P.az(b,0,t,null,null))
s=[]
for(;u.p();)s.push(u.gw(u))
return H.jL(s)},
le:function(a){return new H.f3(a,H.l2(a,!1,!0,!1))},
jS:function(a,b,c){var u=J.ba(b)
if(!u.p())return a
if(c.length===0){do a+=H.h(u.gw(u))
while(u.p())}else{a+=H.h(u.gw(u))
for(;u.p();)a=a+c+H.h(u.gw(u))}return a},
j5:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.r(a,"$ib",[P.y],"$ab")
if(c===C.h){u=$.kH().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.ea(H.B(b,H.ct(c,"bL",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iY(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kT:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cH:function(a){if(a>=10)return""+a
return"0"+a},
kV:function(a,b){return new P.bg(1e6*b+1000*a)},
cL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kY(a)},
iP:function(a,b,c){return new P.an(!0,a,b,c)},
fD:function(a,b){return new P.bo(null,null,!0,a,b,"Value not in range")},
az:function(a,b,c,d,e){return new P.bo(b,c,!0,a,d,"Invalid value")},
jN:function(a,b,c){if(0>a||a>c)throw H.f(P.az(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.az(b,a,c,"end",null))
return b}return c},
jM:function(a,b){if(typeof a!=="number")return a.cj()
if(a<0)throw H.f(P.az(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=H.Y(e==null?J.bb(b):e)
return new P.eY(u,!0,a,c,"Index out of range")},
aG:function(a){return new P.hz(a)},
jW:function(a){return new P.hx(a)},
jR:function(a){return new P.c3(a)},
aW:function(a){return new P.eq(a)},
T:function(a){return new P.dt(a)},
km:function(a){H.lY(a)},
L:function L(){},
bP:function bP(a,b){this.a=a
this.b=b},
x:function x(){},
bg:function bg(a){this.a=a},
eD:function eD(){},
eE:function eE(){},
aX:function aX(){},
eg:function eg(){},
d_:function d_(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eY:function eY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hz:function hz(a){this.a=a},
hx:function hx(a){this.a=a},
c3:function c3(a){this.a=a},
eq:function eq(a){this.a=a},
fy:function fy(){},
d8:function d8(){},
ev:function ev(a){this.a=a},
dt:function dt(a){this.a=a},
eR:function eR(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
y:function y(){},
i:function i(){},
at:function at(){},
b:function b(){},
G:function G(){},
H:function H(){},
Z:function Z(){},
I:function I(){},
a5:function a5(){},
e:function e(){},
bq:function bq(a){this.a=a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.jy(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.z(t[r])
u.F(0,q,a[q])}return u},
lG:function(a){var u={}
a.D(0,new P.iB(u))
return u},
iB:function iB(a){this.a=a},
eN:function eN(a,b){this.a=a
this.b=b},
eO:function eO(){},
eP:function eP(){},
ib:function ib(){},
ae:function ae(){},
aL:function aL(){},
f6:function f6(){},
aN:function aN(){},
fw:function fw(){},
fC:function fC(){},
c0:function c0(){},
h4:function h4(){},
m:function m(){},
aO:function aO(){},
hh:function hh(){},
dz:function dz(){},
dA:function dA(){},
dJ:function dJ(){},
dK:function dK(){},
dV:function dV(){},
dW:function dW(){},
e0:function e0(){},
e1:function e1(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(a){this.a=a},
el:function el(){},
bc:function bc(){},
fx:function fx(){},
dl:function dl(){},
cB:function cB(){},
d3:function d3(){},
bp:function bp(){},
d6:function d6(){},
de:function de(){},
fX:function fX(){},
dR:function dR(){},
dS:function dS(){}},W={
iO:function(){var u=document.createElement("a")
return u},
js:function(){var u=document.createElement("canvas")
return u},
kW:function(a,b,c){var u=document.body,t=(u&&C.n).R(u,a,b,c)
t.toString
u=W.w
u=new H.cc(new W.a1(t),H.k(new W.eG(),{func:1,ret:P.L,args:[u]}),[u])
return H.n(u.ga4(u),"$iJ")},
kX:function(a){H.n(a,"$id")
return"wheel"},
bQ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jh(a)
t=u.gc5(a)
if(typeof t==="string")r=u.gc5(a)}catch(s){H.ab(s)}return r},
i8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k3:function(a,b,c,d){var u=W.i8(W.i8(W.i8(W.i8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d,e){var u=W.kb(new W.hY(c),W.j)
if(u!=null&&!0)J.kJ(a,b,u,!1)
return new W.hX(a,b,u,!1,[e])},
k2:function(a){var u=W.iO(),t=window.location
u=new W.b5(new W.ih(u,t))
u.cz(a)
return u},
lq:function(a,b,c,d){H.n(a,"$iJ")
H.z(b)
H.z(c)
H.n(d,"$ib5")
return!0},
lr:function(a,b,c,d){var u,t,s
H.n(a,"$iJ")
H.z(b)
H.z(c)
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
k5:function(){var u=P.e,t=P.jz(C.k,u),s=H.u(C.k,0),r=H.k(new W.iq(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.ip(t,P.cT(u),P.cT(u),P.cT(u),null)
t.cC(null,new H.ff(C.k,r,[s,u]),q,null)
return t},
kb:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.d)return a
return u.e7(a,b)},
p:function p(){},
ee:function ee(){},
cy:function cy(){},
ef:function ef(){},
bH:function bH(){},
cA:function cA(){},
aS:function aS(){},
bd:function bd(){},
aT:function aT(){},
bN:function bN(){},
er:function er(){},
K:function K(){},
bO:function bO(){},
es:function es(){},
ap:function ap(){},
aq:function aq(){},
et:function et(){},
eu:function eu(){},
ex:function ex(){},
ad:function ad(){},
eA:function eA(){},
cI:function cI(){},
cJ:function cJ(){},
eB:function eB(){},
eC:function eC(){},
hT:function hT(a,b){this.a=a
this.b=b},
J:function J(){},
eG:function eG(){},
j:function j(){},
d:function d(){},
ar:function ar(){},
eL:function eL(){},
eM:function eM(){},
eQ:function eQ(){},
as:function as(){},
eV:function eV(){},
bi:function bi(){},
aw:function aw(){},
cU:function cU(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(a){this.a=a},
fj:function fj(){},
fk:function fk(a){this.a=a},
ax:function ax(){},
fl:function fl(){},
W:function W(){},
a1:function a1(a){this.a=a},
w:function w(){},
bZ:function bZ(){},
ay:function ay(){},
fB:function fB(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
fM:function fM(){},
aA:function aA(){},
fV:function fV(){},
aB:function aB(){},
fW:function fW(){},
aC:function aC(){},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
ai:function ai(){},
br:function br(){},
d9:function d9(){},
h5:function h5(){},
h6:function h6(){},
c5:function c5(){},
aD:function aD(){},
aj:function aj(){},
h8:function h8(){},
h9:function h9(){},
hb:function hb(){},
aE:function aE(){},
ak:function ak(){},
hf:function hf(){},
hg:function hg(){},
b4:function b4(){},
hA:function hA(){},
hK:function hK(){},
aH:function aH(){},
cd:function cd(){},
ce:function ce(){},
hU:function hU(){},
dn:function dn(){},
i7:function i7(){},
dG:function dG(){},
il:function il(){},
im:function im(){},
hS:function hS(){},
hV:function hV(a){this.a=a},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hX:function hX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hY:function hY(a){this.a=a},
b5:function b5(a){this.a=a},
v:function v(){},
cZ:function cZ(a){this.a=a},
fu:function fu(a){this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(){},
ij:function ij(){},
ik:function ik(){},
ip:function ip(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iq:function iq(){},
io:function io(){},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
a9:function a9(){},
ih:function ih(a,b){this.a=a
this.b=b},
e2:function e2(a){this.a=a},
iu:function iu(a){this.a=a},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dH:function dH(){},
dI:function dI(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
ck:function ck(){},
cl:function cl(){},
dP:function dP(){},
dQ:function dQ(){},
dU:function dU(){},
dX:function dX(){},
dY:function dY(){},
cm:function cm(){},
cn:function cn(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},O={
ju:function(a){var u=new O.aV([a])
u.sd_(H.c([],[a]))
u.sbD(null)
u.sbC(null)
u.sbE(null)
return u},
aV:function aV(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bU:function bU(){this.b=this.a=null},
ey:function ey(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bs:function bs(){}},E={
lg:function(a,b){var u=new E.fF(a)
u.ct(a,b)
return u},
lk:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibd)return E.jT(a,!0,!0,!0,!1)
u=W.js()
t=u.style
t.width="100%"
t.height="100%"
s.gbM(a).h(0,u)
return E.jT(u,!0,!0,!0,!1)},
jT:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.db(),j=H.n(C.D.ci(a,"webgl2",P.l3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibp")
if(j==null)H.a2(P.T("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lg(j,a)
H.Y(j.getParameter(3379))
H.Y(j.getParameter(34076))
u=new X.dh(a)
t=new X.f5()
t.sdH(P.cT(P.y))
u.b=t
t=new X.fm(u)
t.f=0
t.r=V.d1()
t.x=V.d1()
t.ch=t.Q=1
u.c=t
t=new X.fa(u)
t.r=0
t.x=V.d1()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.he(u)
t.f=V.d1()
t.r=V.d1()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.scQ(H.c([],[[P.c4,P.I]]))
t=u.z
s=document
r=W.W
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.X(s,"contextmenu",H.k(u.gd8(),q),!1,r))
t=u.z
p=W.j
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.X(a,"focus",H.k(u.gdf(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.X(a,"blur",H.k(u.gd2(),o),!1,p))
t=u.z
n=W.aw
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.X(s,"keyup",H.k(u.gdj(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.X(s,"keydown",H.k(u.gdh(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.X(a,"mousedown",H.k(u.gdm(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.X(a,"mouseup",H.k(u.gds(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.X(a,l,H.k(u.gdq(),q),!1,r))
n=u.z
m=W.aH;(n&&C.a).h(n,W.X(a,H.z(W.kX(a)),H.k(u.gdu(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.X(s,l,H.k(u.gda(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.X(s,"mouseup",H.k(u.gdd(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.X(s,"pointerlockchange",H.k(u.gdw(),o),!1,p))
p=u.z
o=W.ak
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.X(a,"touchstart",H.k(u.gdF(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.X(a,"touchend",H.k(u.gdB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.X(a,"touchmove",H.k(u.gdD(),s),!1,o))
k.Q=!0
k.ch=!1
Date.now()
k.cy=0
k.bG()
return k},
em:function em(){},
a3:function a3(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fG:function fG(a){this.a=a},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
db:function db(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
ha:function ha(a){this.a=a}},Z={
j2:function(a,b,c){var u
H.r(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.j6(c)),35044)
a.bindBuffer(b,null)
return new Z.dj(b,u)},
af:function(a){return new Z.di(a)},
dj:function dj(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hL:function hL(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=null
this.c=b},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a){this.a=a}},D={
aY:function(){var u=new D.bR()
u.sab(null)
u.sau(null)
u.c=null
u.d=0
return u},
ep:function ep(){},
bR:function bR(){var _=this
_.d=_.c=_.b=_.a=null},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
F:function F(){this.b=null},
eZ:function eZ(a){this.b=null
this.$ti=a},
f_:function f_(a){this.b=null
this.$ti=a},
Q:function Q(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={cE:function cE(a,b){this.a=a
this.b=b},cR:function cR(a,b){this.a=a
this.b=b},f5:function f5(){this.d=this.b=this.a=null},fa:function fa(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},fm:function fm(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},he:function he(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dh:function dh(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kZ:function(a){var u=new X.eS(),t=V.lF(1)
u.a=new V.bf(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jO
if(t==null){t=V.lf(0,0,1,1)
$.jO=t}u.r=t
return u},
cF:function cF(){},
eS:function eS(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){}},V={
lF:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jm:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.ck(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.b.V("null",c)
return C.b.V(C.c.eT(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
iD:function(a,b,c){var u,t,s,r,q
H.r(a,"$ib",[P.x],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.l(u,q)
C.a.F(u,q,C.b.V(u[q],t))}return u},
jD:function(){var u=$.jC
return u==null?$.jC=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d1:function(){var u=$.jI
return u==null?$.jI=new V.aa(0,0):u},
lf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
j1:function(){var u=$.k_
return u==null?$.k_=new V.S(0,0,0):u},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a){this.a=a},
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
aa:function aa(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
O:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.T("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.a9(a,0)
t=C.b.a9(b,0)
s=new V.fE()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fN()
u.cu(a)
return u},
hd:function(){var u=new V.hc(),t=P.e
u.sdU(new H.av([t,V.c2]))
u.sdX(new H.av([t,V.c6]))
u.c=null
return u},
aJ:function aJ(){},
a8:function a8(){},
cV:function cV(){},
a4:function a4(){this.a=null},
fE:function fE(){this.b=this.a=null},
fN:function fN(){this.a=null},
c2:function c2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.b=a
this.c=null},
hc:function hc(){this.c=this.b=this.a=null},
c7:function c7(a){this.b=a
this.a=this.c=null},
li:function(a){var u=new V.fR()
u.cw(a,!0)
return u},
aU:function aU(){},
ew:function ew(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eT:function eT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eU:function eU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fR:function fR(){this.b=this.a=null},
fT:function fT(a){this.a=a},
fS:function fS(a){this.a=a},
fU:function fU(a){this.a=a}},U={cG:function cG(){this.b=this.a=null},bW:function bW(){},d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cK:function cK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
j0:function(a,b,c,d,e){var u=new A.hm(a,c,e)
u.f=d
u.sdZ(P.l4(d,0,P.y))
return u},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
ez:function ez(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c1:function c1(){},
dd:function dd(){},
hs:function hs(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
ho:function ho(a,b,c){this.a=a
this.c=b
this.d=c},
hp:function hp(a,b,c){this.a=a
this.c=b
this.d=c},
hr:function hr(a,b,c){this.a=a
this.c=b
this.d=c},
hm:function hm(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
hq:function hq(a,b,c){this.a=a
this.c=b
this.d=c},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ix:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
co:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.S(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.S(u+a3,t+a1,s+a2)
q=new V.S(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.S(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ix(i)
l=F.ix(j.b)
k=F.m2(d,a0,new F.iw(j,F.ix(j.c),F.ix(j.d),l,m,c),b)
if(k!=null)a.es(k)},
m2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.am,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.jQ()
t=H.c([],[F.am])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.bK(new V.bf(p,0,0,1),new V.aa(r,1))
c.$3(o,r,0)
C.a.h(t,o.b4(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.bK(new V.bf(j,i,h,1),new V.aa(r,m))
c.$3(o,r,n)
C.a.h(t,o.b4(d))}}u.d.e1(a+1,b+1,t)
return u},
cM:function(a,b,c){var u=new F.U(),t=a.a
if(t==null)H.a2(P.T("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a2(P.T("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
jQ:function(){var u=new F.d7(),t=new F.hD(u)
t.b=!1
t.se_(H.c([],[F.am]))
u.a=t
t=new F.fQ(u)
t.saU(H.c([],[F.b3]))
u.b=t
t=new F.fP(u)
t.scX(H.c([],[F.aM]))
u.c=t
t=new F.fO(u)
t.scR(H.c([],[F.U]))
u.d=t
u.e=null
return u},
k0:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.am(),r=new F.hI()
r.saU(H.c([],[F.b3]))
s.b=r
r=new F.hH()
u=[F.aM]
r.scY(H.c([],u))
r.scZ(H.c([],u))
s.c=r
r=new F.hE()
u=[F.U]
r.scS(H.c([],u))
r.scT(H.c([],u))
r.scU(H.c([],u))
s.d=r
h=$.kD()
s.e=0
r=$.aR()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bD().a)!==0?e:t
s.x=(u&$.bC().a)!==0?b:t
s.y=(u&$.bE().a)!==0?f:t
s.z=(u&$.bF().a)!==0?g:t
s.Q=(u&$.kE().a)!==0?c:t
s.ch=(u&$.bG().a)!==0?i:0
s.cx=(u&$.bB().a)!==0?a:t
return s},
iw:function iw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
U:function U(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aM:function aM(){this.b=this.a=null},
b3:function b3(){this.a=null},
d7:function d7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a){this.a=a
this.b=null},
fP:function fP(a){this.a=a
this.b=null},
fQ:function fQ(a){this.a=a
this.b=null},
am:function am(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a},
hD:function hD(a){this.a=a
this.c=this.b=null},
hE:function hE(){this.d=this.c=this.b=null},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(){this.c=this.b=null},
hI:function hI(){this.b=null},
kk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="tutorial1",g=null,f=V.li("Tutorial 1"),e=[P.e]
f.M(H.c(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],e))
u=W.js()
u.className="pageCanvas"
u.id=h
f.a.appendChild(u)
f.al(0,"Getting Started")
f.M(H.c(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],e))
f.bJ("index.html","html",0,H.c(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],e))
f.bJ("main.dart","dart",0,H.c(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],e))
f.al(4,"ThreeDart")
f.M(H.c(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],e))
f.al(4,"Scene")
f.M(H.c(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],e))
f.M(H.c(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],e))
f.M(H.c(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],e))
f.al(4,"Entity")
f.M(H.c(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],e))
f.M(H.c(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],e))
f.M(H.c(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],e))
f.M(H.c(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],e))
f.al(4,"Summary")
f.M(H.c(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],e))
f.M(H.c(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],e))
t=new E.a3()
t.a=""
t.b=!0
e=E.a3
t.scJ(0,O.ju(e))
t.y.bd(t.geu(),t.gex())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbf(0,g)
t.sc6(g)
t.san(g)
s=F.jQ()
F.co(s,g,g,1,1,1,0,0,1)
F.co(s,g,g,1,1,0,1,0,3)
F.co(s,g,g,1,1,0,0,1,2)
F.co(s,g,g,1,1,-1,0,0,0)
F.co(s,g,g,1,1,0,-1,0,0)
F.co(s,g,g,1,1,0,0,-1,3)
f=s.e
if(f!=null)++f.d
s.d.b1()
s.a.b1()
f=s.e
if(f!=null)f.aD(0)
t.sbf(0,s)
f=new U.d5()
f.r=f.f=f.e=f.d=f.c=f.b=f.a=0
f.sce(0)
f.sbZ(0,0)
f.sc3(0)
r=f.d
if(!(Math.abs(r-0.1)<$.M().a)){f.d=0.1
r=new D.Q("deltaYaw",r,0.1,[P.x])
r.b=!0
f.ac(r)}r=f.e
if(!(Math.abs(r-0.21)<$.M().a)){f.e=0.21
r=new D.Q("deltaPitch",r,0.21,[P.x])
r.b=!0
f.ac(r)}r=f.f
if(!(Math.abs(r-0.32)<$.M().a)){f.f=0.32
r=new D.Q("deltaRoll",r,0.32,[P.x])
r.b=!0
f.ac(r)}t.san(f)
f=new O.ey()
f.d=1
f.e=10
q=new V.be(1,1,1)
f.b=q
r=[V.be]
p=new D.Q("objectColor",g,q,r)
p.b=!0
f.as(p)
q=new V.be(0,0,0)
if(!J.a_(f.c,q)){o=f.c
f.c=q
r=new D.Q("fogColor",o,q,r)
r.b=!0
f.as(r)}r=f.d
if(!(Math.abs(r-3)<$.M().a)){f.d=3
r=new D.Q("fogStart",r,3,[P.x])
r.b=!0
f.as(r)}r=f.e
if(!(Math.abs(r-6)<$.M().a)){f.e=6
r=new D.Q("fogStop",r,6,[P.x])
r.b=!0
f.as(r)}t.sc6(f)
n=new M.cK()
n.a=!0
n.scA(0,O.ju(e))
n.e.bd(n.gd4(),n.gd6())
n.y=n.x=n.r=n.f=null
m=X.kZ(g)
l=new X.d0()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.san(g)
f=l.c
if(!(Math.abs(f-1.0471975511965976)<$.M().a)){l.c=1.0471975511965976
f=new D.Q("fov",f,1.0471975511965976,[P.x])
f.b=!0
l.a8(f)}f=l.d
if(!(Math.abs(f-0.1)<$.M().a)){l.d=0.1
f=new D.Q("near",f,0.1,[P.x])
f.b=!0
l.a8(f)}f=l.e
if(!(Math.abs(f-2000)<$.M().a)){l.e=2000
f=new D.Q("far",f,2000,[P.x])
f.b=!0
l.a8(f)}f=n.b
if(f!==l){if(f!=null)f.gv().J(0,n.ga6())
o=n.b
n.b=l
l.gv().h(0,n.ga6())
f=new D.Q("camera",o,n.b,[X.cF])
f.b=!0
n.a7(f)}f=n.c
if(f!==m){if(f!=null)f.gv().J(0,n.ga6())
o=n.c
n.c=m
m.gv().h(0,n.ga6())
f=new D.Q("target",o,n.c,[X.da])
f.b=!0
n.a7(f)}f=n.e
e=H.u(f,0)
H.B(t,e)
e=[e]
if(H.D(f.dA(H.c([t],e)))){r=f.a
k=r.length
C.a.h(r,t)
f.d1(k,H.c([t],e))}f=n.b
j=V.b2(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
e=new U.cG()
e.a=j
f.san(e)
i=document.getElementById(h)
if(i==null)H.a2(P.T("Failed to find an element with the identifier, tutorial1."))
f=E.lk(i,!0,!0,!0,!1)
e=f.d
if(e!==n){if(e!=null)e.gv().J(0,f.gbi())
f.d=n
n.gv().h(0,f.gbi())
f.bj()}}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iW.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.c_(a)},
i:function(a){return"Instance of '"+H.bn(a)+"'"}}
J.f0.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iL:1}
J.f2.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0}}
J.cQ.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.fz.prototype={}
J.cb.prototype={}
J.b0.prototype={
i:function(a){var u=a[$.ks()]
if(u==null)return this.cq(a)
return"JavaScript function for "+H.h(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaZ:1}
J.au.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a2(P.aG("add"))
a.push(b)},
J:function(a,b){var u
if(!!a.fixed$length)H.a2(P.aG("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.aW(a))}},
k:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.F(t,u,H.h(a[u]))
return t.join(b)},
ep:function(a){return this.k(a,"")},
ek:function(a,b){var u,t,s
H.k(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.f(P.aW(a))}throw H.f(H.iT())},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
cn:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.az(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.az(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.iT())},
bL:function(a,b){var u,t
H.k(b,{func:1,ret:P.L,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.aW(a))}return!1},
I:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.iS(a,"[","]")},
gE:function(a){return new J.ac(a,a.length,[H.u(a,0)])},
gC:function(a){return H.c_(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.a2(P.aG("set length"))
if(b<0)throw H.f(P.az(b,0,null,"newLength",null))
a.length=b},
F:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a2(P.aG("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cs(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.iV.prototype={}
J.ac.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.C(s))
u=t.c
if(u>=r){t.sbm(null)
return!1}t.sbm(s[u]);++t.c
return!0},
sbm:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
J.cP.prototype={
b3:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.e.gaA(b)
if(this.gaA(a)===u)return 0
if(this.gaA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaA:function(a){return a===0?1/a<0:a<0},
bO:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.aG(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.aG(""+a+".round()"))},
e9:function(a,b,c){if(C.e.b3(b,c)>0)throw H.f(H.bw(b))
if(this.b3(a,b)<0)return b
if(this.b3(a,c)>0)return c
return a},
eT:function(a,b){var u
if(b>20)throw H.f(P.az(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaA(a))return"-"+u
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
ck:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ax:function(a,b){return(a|0)===a?a/b|0:this.dV(a,b)},
dV:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.aG("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aw:function(a,b){var u
if(a>0)u=this.dT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dT:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iZ:1}
J.cO.prototype={$iy:1}
J.f1.prototype={}
J.bj.prototype={
b2:function(a,b){if(b<0)throw H.f(H.cs(a,b))
if(b>=a.length)H.a2(H.cs(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(b>=a.length)throw H.f(H.cs(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.f(P.iP(b,null,null))
return a+b},
aG:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fD(b,null))
if(b>c)throw H.f(P.fD(b,null))
if(c>a.length)throw H.f(P.fD(c,null))
return a.substring(b,c)},
aH:function(a,b){return this.aq(a,b,null)},
eS:function(a){return a.toLowerCase()},
P:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
V:function(a,b){var u=b-a.length
if(u<=0)return a
return this.P(" ",u)+a},
i:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ijG:1,
$ie:1}
H.o.prototype={
gl:function(a){return this.a.length},
m:function(a,b){return C.b.b2(this.a,b)},
$adg:function(){return[P.y]},
$at:function(){return[P.y]},
$ai:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eF.prototype={}
H.bk.prototype={
gE:function(a){var u=this
return new H.bT(u,u.gl(u),[H.ct(u,"bk",0)])},
aE:function(a,b){return this.cp(0,H.k(b,{func:1,ret:P.L,args:[H.ct(this,"bk",0)]}))}}
H.bT.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.jg(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aW(s))
u=t.c
if(u>=q){t.sai(null)
return!1}t.sai(r.t(s,u));++t.c
return!0},
sai:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
H.fd.prototype={
gE:function(a){return new H.fe(J.ba(this.a),this.b,this.$ti)},
gl:function(a){return J.bb(this.a)},
t:function(a,b){return this.b.$1(J.iN(this.a,b))},
$ai:function(a,b){return[b]}}
H.fe.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.sai(u.c.$1(t.gw(t)))
return!0}u.sai(null)
return!1},
gw:function(a){return this.a},
sai:function(a){this.a=H.B(a,H.u(this,1))},
$aat:function(a,b){return[b]}}
H.ff.prototype={
gl:function(a){return J.bb(this.a)},
t:function(a,b){return this.b.$1(J.iN(this.a,b))},
$abk:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cc.prototype={
gE:function(a){return new H.hM(J.ba(this.a),this.b,this.$ti)}}
H.hM.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(H.D(t.$1(u.gw(u))))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.bh.prototype={}
H.dg.prototype={}
H.df.prototype={}
H.hi.prototype={
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
H.fv.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f4.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hy.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iM.prototype={
$1:function(a){if(!!J.P(a).$iaX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dT.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia5:1}
H.bK.prototype={
i:function(a){return"Closure '"+H.bn(this).trim()+"'"},
$iaZ:1,
geW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h7.prototype={}
H.fY.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bA(u)+"'"}}
H.bI.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gC:function(a){var u,t=this.c
if(t==null)u=H.c_(this.a)
else u=typeof t!=="object"?J.cx(t):H.c_(t)
return(u^H.c_(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bn(u)+"'")}}
H.hk.prototype={
i:function(a){return this.a}}
H.eo.prototype={
i:function(a){return this.a}}
H.fL.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.hN.prototype={
i:function(a){return"Assertion failed: "+P.cL(this.a)}}
H.av.prototype={
gl:function(a){return this.a},
gO:function(a){return new H.cS(this,[H.u(this,0)])},
bN:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bw(t,b)}else return s.em(b)},
em:function(a){var u=this.d
if(u==null)return!1
return this.b6(this.aN(u,J.cx(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.at(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.at(r,b)
s=t==null?null:t.b
return s}else return q.en(b)},
en:function(a){var u,t,s=this.d
if(s==null)return
u=this.aN(s,J.cx(a)&0x3ffffff)
t=this.b6(u,a)
if(t<0)return
return u[t].b},
F:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.u(o,0))
H.B(c,H.u(o,1))
if(typeof b==="string"){u=o.b
o.bn(u==null?o.b=o.aS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bn(t==null?o.c=o.aS():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aS()
r=J.cx(b)&0x3ffffff
q=o.aN(s,r)
if(q==null)o.aX(s,r,[o.aT(b,c)])
else{p=o.b6(q,b)
if(p>=0)q[p].b=c
else q.push(o.aT(b,c))}}},
D:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.aW(s))
u=u.c}},
bn:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.at(a,b)
if(u==null)t.aX(a,b,t.aT(b,c))
else u.b=c},
d0:function(){this.r=this.r+1&67108863},
aT:function(a,b){var u,t=this,s=new H.f7(H.B(a,H.u(t,0)),H.B(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.d0()
return s},
b6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.jB(this)},
at:function(a,b){return a[b]},
aN:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
cO:function(a,b){delete a[b]},
bw:function(a,b){return this.at(a,b)!=null},
aS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aX(t,u,t)
this.cO(t,u)
return t}}
H.f7.prototype={}
H.cS.prototype={
gl:function(a){return this.a.a},
gE:function(a){var u=this.a,t=new H.f8(u,u.r,this.$ti)
t.c=u.e
return t}}
H.f8.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aW(t))
else{t=u.c
if(t==null){u.sbz(null)
return!1}else{u.sbz(t.a)
u.c=u.c.c
return!0}}},
sbz:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
H.iG.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.iH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.iI.prototype={
$1:function(a){return this.a(H.z(a))},
$S:32}
H.f3.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijG:1}
H.bY.prototype={}
H.cW.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.bX.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]},
$abh:function(){return[P.x]},
$at:function(){return[P.x]},
$ii:1,
$ai:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.cX.prototype={
$abh:function(){return[P.y]},
$at:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fn.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fo.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fp.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fq.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fr.prototype={
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cY.prototype={
gl:function(a){return a.length},
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fs.prototype={
gl:function(a){return a.length},
m:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cg.prototype={}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
P.hP.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.hO.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.hQ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hR.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ir.prototype={
cD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cr(new P.is(this,b),0),a)
else throw H.f(P.aG("`setTimeout()` not found."))}}
P.is.prototype={
$0:function(){this.b.$0()},
$S:2}
P.aI.prototype={
er:function(a){if(this.c!==6)return!0
return this.b.b.bb(H.k(this.d,{func:1,ret:P.L,args:[P.I]}),a.a,P.L,P.I)},
el:function(a){var u=this.e,t=P.I,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ed(u,{func:1,args:[P.I,P.a5]}))return H.jf(r.eM(u,a.a,a.b,null,t,P.a5),s)
else return H.jf(r.bb(H.k(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.ag.prototype={
c7:function(a,b,c){var u,t,s,r=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.R
if(u!==C.d){u.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lx(b,u)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.ag($.R,[c])
s=b==null?1:3
this.bo(new P.aI(t,s,a,b,[r,c]))
return t},
eP:function(a,b){return this.c7(a,null,b)},
bo:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaI")
t.c=a}else{if(s===2){u=H.n(t.c,"$iag")
s=u.a
if(s<4){u.bo(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iA(null,null,s,H.k(new P.hZ(t,a),{func:1,ret:-1}))}},
bF:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaI")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iag")
u=q.a
if(u<4){q.bF(a)
return}p.a=u
p.c=q.c}o.a=p.av(a)
u=p.b
u.toString
P.iA(null,null,u,H.k(new P.i2(o,p),{func:1,ret:-1}))}},
aW:function(){var u=H.n(this.c,"$iaI")
this.c=null
return this.av(u)},
av:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bt:function(a){var u,t,s=this,r=H.u(s,0)
H.jf(a,{futureOr:1,type:r})
u=s.$ti
if(H.jc(a,"$ibS",u,"$abS"))if(H.jc(a,"$iag",u,null))P.k1(a,s)
else P.lp(a,s)
else{t=s.aW()
H.B(a,r)
s.a=4
s.c=a
P.cf(s,t)}},
bu:function(a,b){var u,t=this
H.n(b,"$ia5")
u=t.aW()
t.a=8
t.c=new P.a0(a,b)
P.cf(t,u)},
$ibS:1}
P.hZ.prototype={
$0:function(){P.cf(this.a,this.b)},
$S:0}
P.i2.prototype={
$0:function(){P.cf(this.b,this.a.a)},
$S:0}
P.i_.prototype={
$1:function(a){var u=this.a
u.a=0
u.bt(a)},
$S:12}
P.i0.prototype={
$2:function(a,b){H.n(b,"$ia5")
this.a.bu(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.i1.prototype={
$0:function(){this.a.bu(this.b,this.c)},
$S:0}
P.i5.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.c4(H.k(s.d,{func:1}),null)}catch(r){u=H.ab(r)
t=H.bx(r)
if(o.d){s=H.n(o.a.a.c,"$ia0").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia0")
else q.b=new P.a0(u,t)
q.a=!0
return}if(!!J.P(n).$ibS){if(n instanceof P.ag&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia0")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.eP(new P.i6(p),null)
s.a=!1}},
$S:2}
P.i6.prototype={
$1:function(a){return this.a},
$S:26}
P.i4.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.bb(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ab(o)
t=H.bx(o)
s=n.a
s.b=new P.a0(u,t)
s.a=!0}},
$S:2}
P.i3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia0")
r=m.c
if(H.D(r.er(u))&&r.e!=null){q=m.b
q.b=r.el(u)
q.a=!1}}catch(p){t=H.ab(p)
s=H.bx(p)
r=H.n(m.a.a.c,"$ia0")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a0(t,s)
n.a=!0}},
$S:2}
P.dk.prototype={}
P.h0.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.ag($.R,[P.y])
r.a=0
u=H.u(s,0)
t=H.k(new P.h2(r,s),{func:1,ret:-1,args:[u]})
H.k(new P.h3(r,q),{func:1,ret:-1})
W.X(s.a,s.b,t,!1,u)
return q}}
P.h2.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.u(this.b,0)]}}}
P.h3.prototype={
$0:function(){this.b.bt(this.a.a)},
$S:0}
P.c4.prototype={}
P.h1.prototype={}
P.a0.prototype={
i:function(a){return H.h(this.a)},
$iaX:1}
P.iv.prototype={$imB:1}
P.iz.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d_():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:0}
P.ic.prototype={
eN:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.d===$.R){a.$0()
return}P.k7(r,r,this,a,-1)}catch(s){u=H.ab(s)
t=H.bx(s)
P.iy(r,r,this,u,H.n(t,"$ia5"))}},
eO:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.d===$.R){a.$1(b)
return}P.k8(r,r,this,a,b,-1,c)}catch(s){u=H.ab(s)
t=H.bx(s)
P.iy(r,r,this,u,H.n(t,"$ia5"))}},
e6:function(a,b){return new P.ie(this,H.k(a,{func:1,ret:b}),b)},
b_:function(a){return new P.id(this,H.k(a,{func:1,ret:-1}))},
e7:function(a,b){return new P.ig(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
c4:function(a,b){H.k(a,{func:1,ret:b})
if($.R===C.d)return a.$0()
return P.k7(null,null,this,a,b)},
bb:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.R===C.d)return a.$1(b)
return P.k8(null,null,this,a,b,c,d)},
eM:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.R===C.d)return a.$2(b,c)
return P.ly(null,null,this,a,b,c,d,e,f)}}
P.ie.prototype={
$0:function(){return this.a.c4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.id.prototype={
$0:function(){return this.a.eN(this.b)},
$S:2}
P.ig.prototype={
$1:function(a){var u=this.c
return this.a.eO(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i9.prototype={
gE:function(a){return P.k4(this,this.r,H.u(this,0))},
gl:function(a){return this.a},
I:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibt")!=null}else{t=this.cK(b)
return t}},
cK:function(a){var u=this.d
if(u==null)return!1
return this.aM(this.bA(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bq(u==null?s.b=P.j4():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bq(t==null?s.c=P.j4():t,b)}else return s.cF(0,b)},
cF:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.j4()
t=r.bv(b)
s=u[t]
if(s==null)u[t]=[r.aJ(b)]
else{if(r.aM(s,b)>=0)return!1
s.push(r.aJ(b))}return!0},
J:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dJ(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bA(r,b)
t=s.aM(u,b)
if(t<0)return!1
s.bH(u.splice(t,1)[0])
return!0},
bq:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibt")!=null)return!1
a[b]=this.aJ(b)
return!0},
dJ:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibt")
if(u==null)return!1
this.bH(u)
delete a[b]
return!0},
bs:function(){this.r=1073741823&this.r+1},
aJ:function(a){var u,t=this,s=new P.bt(H.B(a,H.u(t,0)))
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
bv:function(a){return J.cx(a)&1073741823},
bA:function(a,b){return a[this.bv(b)]},
aM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.bt.prototype={}
P.ia.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aW(t))
else{t=u.c
if(t==null){u.sbr(null)
return!1}else{u.sbr(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sbr:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
P.f9.prototype={$ii:1,$ib:1}
P.t.prototype={
gE:function(a){return new H.bT(a,this.gl(a),[H.cu(this,a,"t",0)])},
t:function(a,b){return this.m(a,b)},
eR:function(a,b){var u,t=this,s=H.c([],[H.cu(t,a,"t",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.F(s,u,t.m(a,u))
return s},
eQ:function(a){return this.eR(a,!0)},
i:function(a){return P.iS(a,"[","]")}}
P.fb.prototype={}
P.fc.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:13}
P.V.prototype={
D:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.cu(s,a,"V",0),H.cu(s,a,"V",1)]})
for(u=J.ba(s.gO(a));u.p();){t=u.gw(u)
b.$2(t,s.m(a,t))}},
gl:function(a){return J.bb(this.gO(a))},
i:function(a){return P.jB(a)},
$iG:1}
P.ii.prototype={
Z:function(a,b){var u
for(u=J.ba(H.r(b,"$ii",this.$ti,"$ai"));u.p();)this.h(0,u.gw(u))},
i:function(a){return P.iS(this,"{","}")},
t:function(a,b){var u,t,s,r=this
P.jM(b,"index")
for(u=P.k4(r,r.r,H.u(r,0)),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.N(b,r,"index",null,t))},
$ii:1,
$ijP:1}
P.dB.prototype={}
P.bL.prototype={}
P.bM.prototype={}
P.eH.prototype={
$abL:function(){return[P.e,[P.b,P.y]]}}
P.eX.prototype={
i:function(a){return this.a}}
P.eW.prototype={
cL:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bq("")
if(r>b)q.a+=C.b.aq(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abM:function(){return[P.e,P.e]}}
P.hB.prototype={}
P.hC.prototype={
ea:function(a){var u,t,s=P.jN(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.it(u)
if(t.cV(a,0,s)!==s)t.bI(C.b.b2(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lt(0,t.b,u.length)))},
$abM:function(){return[P.e,[P.b,P.y]]}}
P.it.prototype={
bI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
cV:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.b2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.a9(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bI(r,C.b.a9(a,p)))s=p}else if(r<=2047){q=n.b
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
P.L.prototype={}
P.bP.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bP&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.e.aw(u,30))&1073741823},
i:function(a){var u=this,t=P.kT(H.lc(u)),s=P.cH(H.la(u)),r=P.cH(H.l6(u)),q=P.cH(H.l7(u)),p=P.cH(H.l9(u)),o=P.cH(H.lb(u)),n=P.kU(H.l8(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.x.prototype={}
P.bg.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bg&&this.a===b.a},
gC:function(a){return C.e.gC(this.a)},
i:function(a){var u,t,s,r=new P.eE(),q=this.a
if(q<0)return"-"+new P.bg(0-q).i(0)
u=r.$1(C.e.ax(q,6e7)%60)
t=r.$1(C.e.ax(q,1e6)%60)
s=new P.eD().$1(q%1e6)
return""+C.e.ax(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.eD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.eE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.aX.prototype={}
P.eg.prototype={
i:function(a){return"Assertion failed"}}
P.d_.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaL()+o+u
if(!q.a)return t
s=q.gaK()
r=P.cL(q.b)
return t+s+": "+r}}
P.bo.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.eY.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var u,t=H.Y(this.b)
if(typeof t!=="number")return t.cj()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gl:function(a){return this.f}}
P.hz.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hx.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eq.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cL(u)+"."}}
P.fy.prototype={
i:function(a){return"Out of Memory"},
$iaX:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$iaX:1}
P.ev.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dt.prototype={
i:function(a){return"Exception: "+this.a}}
P.eR.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aq(s,0,75)+"...":s
return t+"\n"+r}}
P.aZ.prototype={}
P.y.prototype={}
P.i.prototype={
aE:function(a,b){var u=H.ct(this,"i",0)
return new H.cc(this,H.k(b,{func:1,ret:P.L,args:[u]}),[u])},
gl:function(a){var u,t=this.gE(this)
for(u=0;t.p();)++u
return u},
ga4:function(a){var u,t=this.gE(this)
if(!t.p())throw H.f(H.iT())
u=t.gw(t)
if(t.p())throw H.f(H.l0())
return u},
t:function(a,b){var u,t,s
P.jM(b,"index")
for(u=this.gE(this),t=0;u.p();){s=u.gw(u)
if(b===t)return s;++t}throw H.f(P.N(b,this,"index",null,t))},
i:function(a){return P.l_(this,"(",")")}}
P.at.prototype={}
P.b.prototype={$ii:1}
P.G.prototype={}
P.H.prototype={
gC:function(a){return P.I.prototype.gC.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gC:function(a){return H.c_(this)},
i:function(a){return"Instance of '"+H.bn(this)+"'"},
toString:function(){return this.i(this)}}
P.a5.prototype={}
P.e.prototype={$ijG:1}
P.bq.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.ee.prototype={
gl:function(a){return a.length}}
W.cy.prototype={
i:function(a){return String(a)},
$icy:1}
W.ef.prototype={
i:function(a){return String(a)}}
W.bH.prototype={$ibH:1}
W.cA.prototype={}
W.aS.prototype={$iaS:1}
W.bd.prototype={
ci:function(a,b,c){var u=a.getContext(b,P.lG(c))
return u},
$ibd:1}
W.aT.prototype={
gl:function(a){return a.length}}
W.bN.prototype={$ibN:1}
W.er.prototype={
gl:function(a){return a.length}}
W.K.prototype={$iK:1}
W.bO.prototype={
gl:function(a){return a.length}}
W.es.prototype={}
W.ap.prototype={}
W.aq.prototype={}
W.et.prototype={
gl:function(a){return a.length}}
W.eu.prototype={
gl:function(a){return a.length}}
W.ex.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.eA.prototype={
i:function(a){return String(a)}}
W.cI.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ae,P.Z]]},
$at:function(){return[[P.ae,P.Z]]},
$ii:1,
$ai:function(){return[[P.ae,P.Z]]},
$ib:1,
$ab:function(){return[[P.ae,P.Z]]},
$av:function(){return[[P.ae,P.Z]]}}
W.cJ.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gah(a))+" x "+H.h(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iae)return!1
return a.left===u.gbP(b)&&a.top===u.gca(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gC:function(a){return W.k3(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(this.gah(a)),C.c.gC(this.gaf(a)))},
gaf:function(a){return a.height},
gbP:function(a){return a.left},
gca:function(a){return a.top},
gah:function(a){return a.width},
$iae:1,
$aae:function(){return[P.Z]}}
W.eB.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eC.prototype={
gl:function(a){return a.length}}
W.hT.prototype={
gl:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.n(u[b],"$iJ")},
h:function(a,b){this.a.appendChild(b)
return b},
gE:function(a){var u=this.eQ(this)
return new J.ac(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
ge5:function(a){return new W.hV(a)},
gbM:function(a){return new W.hT(a,a.children)},
i:function(a){return a.localName},
R:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jw
if(u==null){u=H.c([],[W.a9])
t=new W.cZ(u)
C.a.h(u,W.k2(null))
C.a.h(u,W.k5())
$.jw=t
d=t}else d=u
u=$.jv
if(u==null){u=new W.e2(d)
$.jv=u
c=u}else{u.a=d
c=u}}if($.aK==null){u=document
t=u.implementation.createHTMLDocument("")
$.aK=t
$.iR=t.createRange()
t=$.aK.createElement("base")
H.n(t,"$ibH")
t.href=u.baseURI
$.aK.head.appendChild(t)}u=$.aK
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$iaS")}u=$.aK
if(!!this.$iaS)s=u.body
else{s=u.createElement(a.tagName)
$.aK.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.I(C.J,a.tagName)){$.iR.selectNodeContents(s)
r=$.iR.createContextualFragment(b)}else{s.innerHTML=b
r=$.aK.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aK.body
if(s==null?u!=null:s!==u)J.jp(s)
c.bc(r)
document.adoptNode(r)
return r},
ec:function(a,b,c){return this.R(a,b,c,null)},
cm:function(a,b){a.textContent=null
a.appendChild(this.R(a,b,null,null))},
$iJ:1,
gc5:function(a){return a.tagName}}
W.eG.prototype={
$1:function(a){return!!J.P(H.n(a,"$iw")).$iJ},
$S:15}
W.j.prototype={$ij:1}
W.d.prototype={
e0:function(a,b,c,d){H.k(c,{func:1,args:[W.j]})
if(c!=null)this.cG(a,b,c,!1)},
cG:function(a,b,c,d){return a.addEventListener(b,H.cr(H.k(c,{func:1,args:[W.j]}),1),!1)},
$id:1}
W.ar.prototype={$iar:1}
W.eL.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ar]},
$at:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$ib:1,
$ab:function(){return[W.ar]},
$av:function(){return[W.ar]}}
W.eM.prototype={
gl:function(a){return a.length}}
W.eQ.prototype={
gl:function(a){return a.length}}
W.as.prototype={$ias:1}
W.eV.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.w]},
$at:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$ibi:1,
$av:function(){return[W.w]}}
W.aw.prototype={$iaw:1}
W.cU.prototype={
i:function(a){return String(a)},
$icU:1}
W.fg.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fi(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fj.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fk(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fk.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.ax.prototype={$iax:1}
W.fl.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.W.prototype={$iW:1}
W.a1.prototype={
ga4:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.jR("No elements"))
if(t>1)throw H.f(P.jR("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s,r
H.r(b,"$ii",[W.w],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gE:function(a){var u=this.a.childNodes
return new W.cN(u,u.length,[H.cu(C.L,u,"v",0)])},
gl:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$at:function(){return[W.w]},
$ai:function(){return[W.w]},
$ab:function(){return[W.w]}}
W.w.prototype={
eJ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.co(a):u},
e3:function(a,b){return a.appendChild(b)},
$iw:1}
W.bZ.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.w]},
$at:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$av:function(){return[W.w]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.fB.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$av:function(){return[W.ay]}}
W.fJ.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.fK(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fM.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fV.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.fW.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$av:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.fZ.prototype={
m:function(a,b){return a.getItem(H.z(b))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new W.h_(u))
return u},
gl:function(a){return a.length},
$aV:function(){return[P.e,P.e]},
$iG:1,
$aG:function(){return[P.e,P.e]}}
W.h_.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:25}
W.ai.prototype={$iai:1}
W.br.prototype={}
W.d9.prototype={
R:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
u=W.kW("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).Z(0,new W.a1(u))
return t}}
W.h5.prototype={
R:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.R(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga4(u)
s.toString
u=new W.a1(s)
r=u.ga4(u)
t.toString
r.toString
new W.a1(t).Z(0,new W.a1(r))
return t}}
W.h6.prototype={
R:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.r.R(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga4(u)
t.toString
s.toString
new W.a1(t).Z(0,new W.a1(s))
return t}}
W.c5.prototype={$ic5:1}
W.aD.prototype={$iaD:1}
W.aj.prototype={$iaj:1}
W.h8.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aj]},
$at:function(){return[W.aj]},
$ii:1,
$ai:function(){return[W.aj]},
$ib:1,
$ab:function(){return[W.aj]},
$av:function(){return[W.aj]}}
W.h9.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.hb.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.ak.prototype={$iak:1}
W.hf.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.hg.prototype={
gl:function(a){return a.length}}
W.b4.prototype={}
W.hA.prototype={
i:function(a){return String(a)}}
W.hK.prototype={
gl:function(a){return a.length}}
W.aH.prototype={
gef:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.aG("deltaY is not supported"))},
gee:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.aG("deltaX is not supported"))},
$iaH:1}
W.cd.prototype={
dL:function(a,b){return a.requestAnimationFrame(H.cr(H.k(b,{func:1,ret:-1,args:[P.Z]}),1))},
cP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ce.prototype={$ice:1}
W.hU.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.K]},
$at:function(){return[W.K]},
$ii:1,
$ai:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$av:function(){return[W.K]}}
W.dn.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iae)return!1
return a.left===u.gbP(b)&&a.top===u.gca(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gC:function(a){return W.k3(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.i7.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.as]},
$at:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]},
$ib:1,
$ab:function(){return[W.as]},
$av:function(){return[W.as]}}
W.dG.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.w]},
$at:function(){return[W.w]},
$ii:1,
$ai:function(){return[W.w]},
$ib:1,
$ab:function(){return[W.w]},
$av:function(){return[W.w]}}
W.il.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$av:function(){return[W.aC]}}
W.im.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ai]},
$at:function(){return[W.ai]},
$ii:1,
$ai:function(){return[W.ai]},
$ib:1,
$ab:function(){return[W.ai]},
$av:function(){return[W.ai]}}
W.hS.prototype={
D:function(a,b){var u,t,s,r,q
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gO(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.n(r[t],"$ice")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aV:function(){return[P.e,P.e]},
$aG:function(){return[P.e,P.e]}}
W.hV.prototype={
m:function(a,b){return this.a.getAttribute(H.z(b))},
gl:function(a){return this.gO(this).length}}
W.hW.prototype={}
W.j3.prototype={}
W.hX.prototype={}
W.hY.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ij"))},
$S:24}
W.b5.prototype={
cz:function(a){var u
if($.dw.a===0){for(u=0;u<262;++u)$.dw.F(0,C.I[u],W.lM())
for(u=0;u<12;++u)$.dw.F(0,C.l[u],W.lN())}},
ae:function(a){return $.kG().I(0,W.bQ(a))},
a_:function(a,b,c){var u=$.dw.m(0,H.h(W.bQ(a))+"::"+b)
if(u==null)u=$.dw.m(0,"*::"+b)
if(u==null)return!1
return H.jb(u.$4(a,b,c,this))},
$ia9:1}
W.v.prototype={
gE:function(a){return new W.cN(a,this.gl(a),[H.cu(this,a,"v",0)])}}
W.cZ.prototype={
ae:function(a){return C.a.bL(this.a,new W.fu(a))},
a_:function(a,b,c){return C.a.bL(this.a,new W.ft(a,b,c))},
$ia9:1}
W.fu.prototype={
$1:function(a){return H.n(a,"$ia9").ae(this.a)},
$S:18}
W.ft.prototype={
$1:function(a){return H.n(a,"$ia9").a_(this.a,this.b,this.c)},
$S:18}
W.dO.prototype={
cC:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.aE(0,new W.ij())
t=b.aE(0,new W.ik())
this.b.Z(0,u)
s=this.c
s.Z(0,C.K)
s.Z(0,t)},
ae:function(a){return this.a.I(0,W.bQ(a))},
a_:function(a,b,c){var u=this,t=W.bQ(a),s=u.c
if(s.I(0,H.h(t)+"::"+b))return u.d.e2(c)
else if(s.I(0,"*::"+b))return u.d.e2(c)
else{s=u.b
if(s.I(0,H.h(t)+"::"+b))return!0
else if(s.I(0,"*::"+b))return!0
else if(s.I(0,H.h(t)+"::*"))return!0
else if(s.I(0,"*::*"))return!0}return!1},
$ia9:1}
W.ij.prototype={
$1:function(a){return!C.a.I(C.l,H.z(a))},
$S:19}
W.ik.prototype={
$1:function(a){return C.a.I(C.l,H.z(a))},
$S:19}
W.ip.prototype={
a_:function(a,b,c){if(this.cs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.I(0,b)
return!1}}
W.iq.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.z(a))},
$S:22}
W.io.prototype={
ae:function(a){var u=J.P(a)
if(!!u.$ic0)return!1
u=!!u.$im
if(u&&W.bQ(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.b.aG(b,"on"))return!1
return this.ae(a)},
$ia9:1}
W.cN.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sbB(J.kI(u.a,t))
u.c=t
return!0}u.sbB(null)
u.c=s
return!1},
gw:function(a){return this.d},
sbB:function(a){this.d=H.B(a,H.u(this,0))},
$iat:1}
W.a9.prototype={}
W.ih.prototype={$imo:1}
W.e2.prototype={
bc:function(a){new W.iu(this).$2(a,null)},
ak:function(a,b){if(b==null)J.jp(a)
else b.removeChild(a)},
dN:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kL(a)
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
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ab(r)}t="element unprintable"
try{t=J.a7(a)}catch(r){H.ab(r)}try{s=W.bQ(a)
this.dM(H.n(a,"$iJ"),b,p,t,s,H.n(o,"$iG"),H.z(n))}catch(r){if(H.ab(r) instanceof P.an)throw r
else{this.ak(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
dM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ak(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ae(a)){o.ak(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a_(a,"is",g)){o.ak(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gO(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.kN(r)
H.z(r)
if(!q.a_(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ic5)o.bc(a.content)},
$ima:1}
W.iu.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dN(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ak(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=H.n(u,"$iw")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$iw")}},
$S:30}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.ck.prototype={}
W.cl.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dU.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
P.iB.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.eN.prototype={
gaO:function(){var u=this.b,t=H.ct(u,"t",0),s=W.J
return new H.fd(new H.cc(u,H.k(new P.eO(),{func:1,ret:P.L,args:[t]}),[t]),H.k(new P.eP(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bb(this.gaO().a)},
m:function(a,b){var u=this.gaO()
return u.b.$1(J.iN(u.a,b))},
gE:function(a){var u=P.jA(this.gaO(),!1,W.J)
return new J.ac(u,u.length,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.eO.prototype={
$1:function(a){return!!J.P(H.n(a,"$iw")).$iJ},
$S:15}
P.eP.prototype={
$1:function(a){return H.by(H.n(a,"$iw"),"$iJ")},
$S:36}
P.ib.prototype={}
P.ae.prototype={}
P.aL.prototype={$iaL:1}
P.f6.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aL]},
$ii:1,
$ai:function(){return[P.aL]},
$ib:1,
$ab:function(){return[P.aL]},
$av:function(){return[P.aL]}}
P.aN.prototype={$iaN:1}
P.fw.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aN]},
$ii:1,
$ai:function(){return[P.aN]},
$ib:1,
$ab:function(){return[P.aN]},
$av:function(){return[P.aN]}}
P.fC.prototype={
gl:function(a){return a.length}}
P.c0.prototype={$ic0:1}
P.h4.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbM:function(a){return new P.eN(a,new W.a1(a))},
R:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.a9])
C.a.h(p,W.k2(null))
C.a.h(p,W.k5())
C.a.h(p,new W.io())
c=new W.e2(new W.cZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).ec(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.ga4(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$im:1}
P.aO.prototype={$iaO:1}
P.hh.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.m(a,b)},
$at:function(){return[P.aO]},
$ii:1,
$ai:function(){return[P.aO]},
$ib:1,
$ab:function(){return[P.aO]},
$av:function(){return[P.aO]}}
P.dz.prototype={}
P.dA.prototype={}
P.dJ.prototype={}
P.dK.prototype={}
P.dV.prototype={}
P.dW.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.ei.prototype={
gl:function(a){return a.length}}
P.ej.prototype={
m:function(a,b){return P.aQ(a.get(H.z(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aQ(t.value[1]))}},
gO:function(a){var u=H.c([],[P.e])
this.D(a,new P.ek(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
P.ek.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.el.prototype={
gl:function(a){return a.length}}
P.bc.prototype={}
P.fx.prototype={
gl:function(a){return a.length}}
P.dl.prototype={}
P.cB.prototype={$icB:1}
P.d3.prototype={$id3:1}
P.bp.prototype={
cb:function(a,b,c){return a.uniform1f(b,c)},
cc:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibp:1}
P.d6.prototype={$id6:1}
P.de.prototype={$ide:1}
P.fX.prototype={
gl:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return P.aQ(a.item(b))},
t:function(a,b){return this.m(a,b)},
$at:function(){return[[P.G,,,]]},
$ii:1,
$ai:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$av:function(){return[[P.G,,,]]}}
P.dR.prototype={}
P.dS.prototype={}
O.aV.prototype={
bd:function(a,b){var u=this,t={func:1,ret:-1,args:[P.y,[P.i,H.u(u,0)]]}
H.k(a,t)
H.k(b,t)
u.sbD(null)
u.sbC(a)
u.sbE(b)},
dA:function(a){H.r(a,"$ii",this.$ti,"$ai")
return!0},
d1:function(a,b){var u
H.r(b,"$ii",this.$ti,"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gE:function(a){var u=this.a
return new J.ac(u,u.length,[H.u(u,0)])},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
sd_:function(a){this.a=H.r(a,"$ib",this.$ti,"$ab")},
sbD:function(a){this.b=H.k(a,{func:1,ret:P.L,args:[[P.i,H.u(this,0)]]})},
sbC:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
sbE:function(a){H.k(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
$ii:1}
O.bU.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.aY():u},
a5:function(){var u=this.b
if(u!=null)u.S(null)},
gam:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.jD()},
c0:function(a){var u=this.a
if(a==null)C.a.h(u,V.jD())
else C.a.h(u,a)
this.a5()},
ba:function(){var u=this.a
if(u.length>0){u.pop()
this.a5()}},
saQ:function(a){this.a=H.r(a,"$ib",[V.b1],"$ab")}}
E.em.prototype={}
E.a3.prototype={
bp:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ac(u,u.length,[H.u(u,0)]);u.p();){t=u.d
if(t.f==null)t.bp()}},
sbf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().J(0,s.gbU())
u=s.c
if(u!=null)u.gv().h(0,s.gbU())
t=new D.Q("shape",r,s.c,[F.d7])
t.b=!0
s.W(t)}},
sc6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().J(0,s.gbW())
u=s.f
s.f=a
if(a!=null)a.gv().h(0,s.gbW())
s.bp()
t=new D.Q("technique",u,s.f,[O.bs])
t.b=!0
s.W(t)}},
san:function(a){var u,t,s=this
if(!J.a_(s.r,a)){u=s.r
if(u!=null)u.gv().J(0,s.gbS())
if(a!=null)a.gv().h(0,s.gbS())
s.r=a
t=new D.Q("mover",u,a,[U.bW])
t.b=!0
s.W(t)}},
cd:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sce(m.a+m.d*b.y)
m.sbZ(0,m.b+m.e*b.y)
m.sc3(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b2(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.P(0,V.b2(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.P(0,V.b2(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aD(0)}q=m.x}else q=null
if(!J.a_(q,n.x)){p=n.x
n.x=q
o=new D.Q("matrix",p,q,[V.b1])
o.b=!0
n.W(o)}for(m=n.y.a,m=new J.ac(m,m.length,[H.u(m,0)]);m.p();)m.d.cd(0,b)},
ag:function(a){var u,t,s,r,q,p,o,n=this,m="Depth",l="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n",k=a.dx,j=n.x
k.toString
if(j==null)C.a.h(k.a,k.gam(k))
else C.a.h(k.a,j.P(0,k.gam(k)))
k.a5()
a.c1(n.f)
k=a.dy
u=(k&&C.a).gaB(k)
if(u!=null&&n.d!=null){k=u.a
if(k==null){t=a.fr.m(0,m)
if(t==null){k=a.a
t=new A.ez(k,m)
t.cv(k,m)
t.c=l
t.d="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
t.e=t.by(l,35633)
t.f=t.by(t.d,35632)
j=k.createProgram()
t.r=j
k.attachShader(j,t.e)
k.attachShader(t.r,t.f)
k.linkProgram(t.r)
if(!H.D(H.jb(k.getProgramParameter(t.r,35714)))){s=k.getProgramInfoLog(t.r)
k.deleteProgram(t.r)
H.a2(P.T("Failed to link shader: "+H.h(s)))}t.dP()
t.dR()
t.z=t.x.m(0,"posAttr")
t.Q=H.by(t.y.m(0,"objClr"),"$ic9")
t.ch=H.by(t.y.m(0,"fogClr"),"$ic9")
t.cx=H.by(t.y.m(0,"fogStart"),"$ic8")
t.cy=H.by(t.y.m(0,"fogStop"),"$ic8")
t.db=H.by(t.y.m(0,"viewObjMat"),"$ica")
t.dx=H.by(t.y.m(0,"projMat"),"$ica")
if(a.fr.bN(0,m))H.a2(P.T('Shader cache already contains a shader by the name "Depth".'))
a.fr.F(0,m,t)}u.a=t
k=t}j=n.e
if((!(j instanceof Z.cD)?n.e=null:j)==null){k=n.d.e8(new Z.hL(a.a),$.aR())
j=k.ei($.aR())
r=u.a
j.e=r.z.c
n.e=k
k=r}j=a.a
j.useProgram(k.r)
k.x.eh()
r=u.b
q=k.Q
q.toString
p=r.a
o=r.b
r=r.c
C.f.cc(q.a,q.d,p,o,r)
r=u.c
o=k.ch
o.toString
p=r.a
q=r.b
r=r.c
C.f.cc(o.a,o.d,p,q,r)
r=u.d
q=k.cx
C.f.cb(q.a,q.d,r)
r=u.e
q=k.cy
C.f.cb(q.a,q.d,r)
r=a.cy
r=r.gam(r)
q=k.dx
q.toString
q.be(r.c8(0,!0))
r=a.cx
if(r==null){r=a.db
r=r.gam(r)
q=a.dx
q=a.cx=r.P(0,q.gam(q))
r=q}k=k.db
k.toString
k.be(r.c8(0,!0))
r=n.e
r.aZ(a)
r.ag(a)
r.eU(a)
r=u.a
r.toString
j.useProgram(null)
r.x.eg()}for(k=n.y.a,k=new J.ac(k,k.length,[H.u(k,0)]);k.p();)k.d.ag(a)
a.c_()
a.dx.ba()},
W:function(a){var u=this.z
if(u!=null)u.S(a)},
U:function(){return this.W(null)},
bV:function(a){H.n(a,"$iF")
this.e=null
this.W(a)},
eA:function(){return this.bV(null)},
bX:function(a){this.W(H.n(a,"$iF"))},
eB:function(){return this.bX(null)},
bT:function(a){this.W(H.n(a,"$iF"))},
ez:function(){return this.bT(null)},
bR:function(a){this.W(H.n(a,"$iF"))},
ew:function(){return this.bR(null)},
ev:function(a,b){var u,t,s,r,q,p,o
H.r(b,"$ii",[E.a3],"$ai")
for(u=b.length,t=this.gbQ(),s={func:1,ret:-1,args:[D.F]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bR()
o.sab(null)
o.sau(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.U()},
ey:function(a,b){var u,t
H.r(b,"$ii",[E.a3],"$ai")
for(u=b.gE(b),t=this.gbQ();u.p();)u.gw(u).gv().J(0,t)
this.U()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scJ:function(a,b){this.y=H.r(b,"$iaV",[E.a3],"$aaV")},
$ijE:1}
E.fF.prototype={
ct:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bP(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bU()
t=[V.b1]
u.saQ(H.c([],t))
u.b=null
u.gv().h(0,new E.fG(s))
s.cy=u
u=new O.bU()
u.saQ(H.c([],t))
u.b=null
u.gv().h(0,new E.fH(s))
s.db=u
u=new O.bU()
u.saQ(H.c([],t))
u.b=null
u.gv().h(0,new E.fI(s))
s.dx=u
s.sdW(H.c([],[O.bs]))
u=s.dy;(u&&C.a).h(u,null)
s.sdS(new H.av([P.e,A.c1]))},
c1:function(a){var u=this.dy,t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
c_:function(){var u=this.dy
if(u.length>1)u.pop()},
sdW:function(a){this.dy=H.r(a,"$ib",[O.bs],"$ab")},
sdS:function(a){this.fr=H.r(a,"$iG",[P.e,A.c1],"$aG")}}
E.fG.prototype={
$1:function(a){H.n(a,"$iF")},
$S:9}
E.fH.prototype={
$1:function(a){H.n(a,"$iF")
this.a.cx=null},
$S:9}
E.fI.prototype={
$1:function(a){H.n(a,"$iF")
this.a.cx=null},
$S:9}
E.db.prototype={
bk:function(a){H.n(a,"$iF")
this.c2()},
bj:function(){return this.bk(null)},
bG:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.b9(r)
u=C.c.bO(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.P()
t=C.c.bO(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jU(C.i,s.geL())}},
c2:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.ha(this),{func:1,ret:-1,args:[P.Z]})
C.u.cP(u)
C.u.dL(u,W.kb(t,P.Z))}},
eK:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bG()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bP(r,!1)
s.y=P.kV(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.a5()
r=s.db
C.a.sl(r.a,0)
r.a5()
r=s.dx
C.a.sl(r.a,0)
r.a5()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ag(p.e)}}catch(q){u=H.ab(q)
t=H.bx(q)
P.km("Error: "+H.h(u))
P.km("Stack: "+H.h(t))
throw H.f(u)}}}
E.ha.prototype={
$1:function(a){var u
H.lX(a)
u=this.a
if(u.ch){u.ch=!1
u.eK()}},
$S:23}
Z.dj.prototype={$im4:1}
Z.cC.prototype={
aZ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.T('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.hL.prototype={$im5:1}
Z.cD.prototype={
ei:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aZ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aZ(a)},
eU:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")},
scW:function(a){this.b=H.r(a,"$ib",[Z.b_],"$ab")},
$imd:1}
Z.b_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bn(this.c)+"'")+"]"}}
Z.di.prototype={
gbg:function(a){var u=this.a,t=(u&$.aR().a)!==0?3:0
if((u&$.bD().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=3
if((u&$.bE().a)!==0)t+=2
if((u&$.bF().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.bB().a)!==0?t+4:t},
e4:function(a){var u,t=$.aR(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0)if(u===a)return t
return $.kF()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.di))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.aR().a)!==0)C.a.h(u,"Pos")
if((t&$.bD().a)!==0)C.a.h(u,"Norm")
if((t&$.bC().a)!==0)C.a.h(u,"Binm")
if((t&$.bE().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bF().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cv().a)!==0)C.a.h(u,"Clr3")
if((t&$.cw().a)!==0)C.a.h(u,"Clr4")
if((t&$.bG().a)!==0)C.a.h(u,"Weight")
if((t&$.bB().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ep.prototype={}
D.bR.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.F]}
H.k(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
J:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[D.F]})
u=s.a
u=u==null?null:C.a.I(u,b)
if(u===!0){u=s.a
t=(u&&C.a).J(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.I(u,b)
if(u===!0){u=s.b
t=(u&&C.a).J(u,b)||t}return t},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.F()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.jA(u,!0,{func:1,ret:-1,args:[D.F]}),new D.eJ(q))
u=r.b
if(u!=null){r.sau(H.c([],[{func:1,ret:-1,args:[D.F]}]))
C.a.D(u,new D.eK(q))}return!0},
aD:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}},
sab:function(a){this.a=H.r(a,"$ib",[{func:1,ret:-1,args:[D.F]}],"$ab")},
sau:function(a){this.b=H.r(a,"$ib",[{func:1,ret:-1,args:[D.F]}],"$ab")}}
D.eJ.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.F]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.eK.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.F]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.F.prototype={}
D.eZ.prototype={}
D.f_.prototype={}
D.Q.prototype={
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
X.f5.prototype={
eG:function(a){this.d.h(0,a.a)
return!1},
eC:function(a){this.d.J(0,a.a)
return!1},
sdH:function(a){this.d=H.r(a,"$ijP",[P.y],"$ajP")}}
X.fa.prototype={
b9:function(a,b){this.r=a.a
return!1},
ap:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cl()
if(typeof u!=="number")return u.cf()
this.r=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
eH:function(a){return!1},
dl:function(a,b,c){return}}
X.bV.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bV))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.fm.prototype={
b9:function(a,b){this.f=a.a
return!1},
ap:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cl()
if(typeof u!=="number")return u.cf()
this.f=(u&~t)>>>0
return!1},
ao:function(a,b){return!1},
eI:function(a,b){return!1}}
X.he.prototype={
eF:function(a){H.r(a,"$ib",[V.aa],"$ab")
return!1},
eD:function(a){H.r(a,"$ib",[V.aa],"$ab")
return!1},
eE:function(a){H.r(a,"$ib",[V.aa],"$ab")
return!1}}
X.dh.prototype={
bx:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cR(u,new X.bV(t,a.altKey,a.shiftKey))},
ad:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aY:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
a1:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.Y()
u=t.top
if(typeof r!=="number")return r.Y()
return new V.aa(s-q,r-u)},
aj:function(a){return new V.aP(a.movementX,a.movementY)},
aV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=C.c.X(r.pageX)
C.c.X(r.pageY)
p=o.left
C.c.X(r.pageX)
C.a.h(n,new V.aa(q-p,C.c.X(r.pageY)-o.top))}return n},
a0:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.cE(u,new X.bV(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.Y()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.Y()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dg:function(a){this.f=!0},
d3:function(a){this.f=!1},
d9:function(a){H.n(a,"$iW")
if(H.D(this.f)&&this.aR(a))a.preventDefault()},
dk:function(a){var u
H.n(a,"$iaw")
if(!H.D(this.f))return
u=this.bx(a)
this.b.eG(u)},
di:function(a){var u
H.n(a,"$iaw")
if(!H.D(this.f))return
u=this.bx(a)
this.b.eC(u)},
dn:function(a){var u,t,s,r,q=this
H.n(a,"$iW")
u=q.a
u.focus()
q.f=!0
q.ad(a)
if(H.D(q.x)){t=q.a0(a)
s=q.aj(a)
if(q.d.b9(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a0(a)
r=q.a1(a)
if(q.c.b9(t,r))a.preventDefault()},
dt:function(a){var u,t,s,r=this
H.n(a,"$iW")
r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ap(u,s))a.preventDefault()},
de:function(a){var u,t,s,r=this
H.n(a,"$iW")
if(!r.aR(a)){r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ap(u,s))a.preventDefault()}},
dr:function(a){var u,t,s,r=this
H.n(a,"$iW")
r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ao(u,s))a.preventDefault()},
dc:function(a){var u,t,s,r=this
H.n(a,"$iW")
if(!r.aR(a)){r.ad(a)
u=r.a0(a)
if(H.D(r.x)){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.a1(a)
if(r.c.ao(u,s))a.preventDefault()}},
dv:function(a){var u,t,s=this
H.n(a,"$iaH")
s.ad(a)
u=new V.aP((a&&C.t).gee(a),C.t.gef(a)).K(0,180)
if(H.D(s.x)){if(s.d.eH(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.a1(a)
if(s.c.eI(u,t))a.preventDefault()},
dz:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a0(s.y)
t=s.a1(s.y)
s.d.dl(u,t,r)}},
dG:function(a){var u,t=this
H.n(a,"$iak")
t.a.focus()
t.f=!0
t.aY(a)
u=t.aV(a)
if(t.e.eF(u))a.preventDefault()},
dC:function(a){var u
H.n(a,"$iak")
this.aY(a)
u=this.aV(a)
if(this.e.eD(u))a.preventDefault()},
dE:function(a){var u
H.n(a,"$iak")
this.aY(a)
u=this.aV(a)
if(this.e.eE(u))a.preventDefault()},
scQ:function(a){this.z=H.r(a,"$ib",[[P.c4,P.I]],"$ab")}}
V.be.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.be))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.bf.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eI.prototype={}
V.b1.prototype={
c8:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.x])
return t},
P:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b2(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.M().a
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
i:function(a){return this.A()},
q:function(a){var u,t,s,r,q,p=this,o=[P.x],n=V.iD(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iD(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iD(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iD(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
A:function(){return this.q("")}}
V.aa.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.bl.prototype={
Y:function(a,b){return new V.bl(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bl))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.d2.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d2))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.d4.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.aP.prototype={
b7:function(a){var u,t=this.a
if(typeof t!=="number")return t.P()
u=this.b
if(typeof u!=="number")return u.P()
return Math.sqrt(t*t+u*u)},
K:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.jX
return u==null?$.jX=new V.aP(0,0):u}u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return new V.aP(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.b9(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.b9(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.S.prototype={
b7:function(a){return Math.sqrt(this.N(this))},
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b8:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.S(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b5:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
aF:function(a){return new V.S(-this.a,-this.b,-this.c)},
K:function(a,b){if(Math.abs(b-0)<$.M().a)return V.j1()
return new V.S(this.a/b,this.b/b,this.c/b)},
eo:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.cG.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.aY():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.bW.prototype={}
U.d5.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.aY():u},
ac:function(a){var u=this.y
if(u!=null)u.S(a)},
sce:function(a){var u
a=V.jm(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.Q("yaw",u,a,[P.x])
u.b=!0
this.ac(u)}},
sbZ:function(a,b){var u
b=V.jm(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.Q("pitch",u,b,[P.x])
u.b=!0
this.ac(u)}},
sc3:function(a){var u
a=V.jm(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.Q("roll",u,a,[P.x])
u.b=!0
this.ac(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d5))return!1
u=r.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+"], ["+V.E(u.d,3,0)+", "+V.E(u.e,3,0)+", "+V.E(u.f,3,0)+"]"}}
M.cK.prototype={
a7:function(a){var u
H.n(a,"$iF")
u=this.y
if(u!=null)u.S(a)},
cB:function(){return this.a7(null)},
d5:function(a,b){var u,t,s,r,q,p,o,n=E.a3
H.r(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.F]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bR()
o.sab(null)
o.sau(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.eZ([n])
n.b=!0
this.a7(n)},
d7:function(a,b){var u,t,s=E.a3
H.r(b,"$ii",[s],"$ai")
for(u=b.gE(b),t=this.ga6();u.p();)u.gw(u).gv().J(0,t)
s=new D.f_([s])
s.b=!0
this.a7(s)},
gv:function(){var u=this.y
return u==null?this.y=D.aY():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.c1(a1.d)
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
if(typeof s!=="number")return H.b9(s)
o=C.c.X(p*s)
p=q.b
if(typeof r!=="number")return H.b9(r)
n=C.c.X(p*r)
p=C.c.X(q.c*s)
a2.c=p
q=C.c.X(q.d*r)
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
i=V.b2(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c0(i)
t=$.jH
if(t==null){t=$.jJ
if(t==null)t=$.jJ=new V.bl(0,0,0)
q=$.jZ
if(q==null)q=$.jZ=new V.S(0,1,0)
p=$.jY
if(p==null)p=$.jY=new V.S(0,0,-1)
h=p.K(0,Math.sqrt(p.N(p)))
q=q.b5(h)
g=q.K(0,Math.sqrt(q.N(q)))
f=h.b5(g)
e=new V.S(t.a,t.b,t.c)
d=g.aF(0).N(e)
c=f.aF(0).N(e)
b=h.aF(0).N(e)
t=V.b2(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jH=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.P(0,a)}a2.db.c0(a)
for(u=a1.e.a,u=new J.ac(u,u.length,[H.u(u,0)]);u.p();)u.d.cd(0,a2)
for(u=a1.e.a,u=new J.ac(u,u.length,[H.u(u,0)]);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.ba()
a2.db.ba()
a1.c.toString
a2.c_()},
scA:function(a,b){this.e=H.r(b,"$iaV",[E.a3],"$aaV")},
$imb:1}
A.cz.prototype={}
A.eh.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ez.prototype={}
A.c1.prototype={
cv:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
by:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.jb(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.T("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
dP:function(){var u,t,s,r=this,q=H.c([],[A.cz]),p=r.a,o=H.Y(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.b9(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cz(p,t.name,s))}r.x=new A.eh(q)},
dR:function(){var u,t,s,r=this,q=H.c([],[A.dd]),p=r.a,o=H.Y(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.b9(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ed(t.type,t.size,t.name,s))}r.y=new A.hs(q)},
aa:function(a,b,c){var u=this.a
if(a===1)return new A.hl(u,b,c)
else return A.j0(u,this.r,b,a,c)},
cM:function(a,b,c){var u=this.a
if(a===1)return new A.hv(u,b,c)
else return A.j0(u,this.r,b,a,c)},
cN:function(a,b,c){var u=this.a
if(a===1)return new A.hw(u,b,c)
else return A.j0(u,this.r,b,a,c)},
ay:function(a,b){return new P.dt(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
ed:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aa(b,c,d)
case 5121:return u.aa(b,c,d)
case 5122:return u.aa(b,c,d)
case 5123:return u.aa(b,c,d)
case 5124:return u.aa(b,c,d)
case 5125:return u.aa(b,c,d)
case 5126:return new A.c8(u.a,c,d)
case 35664:return new A.hn(u.a,c,d)
case 35665:return new A.c9(u.a,c,d)
case 35666:return new A.hq(u.a,c,d)
case 35667:return new A.ho(u.a,c,d)
case 35668:return new A.hp(u.a,c,d)
case 35669:return new A.hr(u.a,c,d)
case 35674:return new A.ht(u.a,c,d)
case 35675:return new A.hu(u.a,c,d)
case 35676:return new A.ca(u.a,c,d)
case 35678:return u.cM(b,c,d)
case 35680:return u.cN(b,c,d)
case 35670:throw H.f(u.ay("BOOL",c))
case 35671:throw H.f(u.ay("BOOL_VEC2",c))
case 35672:throw H.f(u.ay("BOOL_VEC3",c))
case 35673:throw H.f(u.ay("BOOL_VEC4",c))
default:throw H.f(P.T("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dd.prototype={}
A.hs.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.A()},
A:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.hl.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.ho.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hp.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hm.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
sdZ:function(a){H.r(a,"$ib",[P.y],"$ab")}}
A.c8.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hn.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.c9.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hq.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.hu.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ca.prototype={
be:function(a){var u=new Float32Array(H.j6(H.r(a,"$ib",[P.x],"$ab")))
C.f.eV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hv.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.hw.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iw.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.b8(s.b,b).b8(s.d.b8(s.c,b),c)
s=new V.bl(r.a,r.b,r.c)
if(!J.a_(a.f,s)){a.f=s
s=a.a
if(s!=null)s.U()}s=r.K(0,Math.sqrt(r.N(r)))
if(!J.a_(a.z,s)){a.z=s
s=a.a
if(s!=null)s.U()}s=1-b
u=1-c
u=new V.d2(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a_(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.U()}},
$S:31}
F.U.prototype={
cH:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.j1()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.eo())return
return s.K(0,Math.sqrt(s.N(s)))},
cI:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.Y(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.N(r)))
r=t.Y(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.b5(r.K(0,Math.sqrt(r.N(r))))
return r.K(0,Math.sqrt(r.N(r)))},
b0:function(){var u,t=this
if(t.d!=null)return!0
u=t.cH()
if(u==null){u=t.cI()
if(u==null)return!1}t.d=u
t.a.a.U()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.V(J.a7(s.e),0)+", "+C.b.V(J.a7(t.b.e),0)+", "+C.b.V(J.a7(t.c.e),0)+" {"
s=t.d
u=(s!=null?u+(s.i(0)+", "):u+"-, ")+"-}"
return u},
A:function(){return this.q("")}}
F.aM.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.V(J.a7(u.e),0)+", "+C.b.V(J.a7(this.b.e),0)},
A:function(){return this.q("")}}
F.b3.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.V(J.a7(u.e),0)},
A:function(){return this.q("")}}
F.d7.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.aY():u},
es:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.H()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){r=g[s]
h.a.h(0,r.eb())}h.a.H()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.b3()
if(n.a==null)H.a2(P.T("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.S(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.H()
p=p.e
if(typeof p!=="number")return p.G()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.aM()
o=l.a
if(o==null)H.a2(P.T("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.a2(P.T("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.S(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.H()
p=p.e
if(typeof p!=="number")return p.G()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.H()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cM(l,k,i)}g=h.e
if(g!=null)g.aD(0)},
e8:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aR()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bD().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.bF().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.bB().a)!==0)++s
r=a3.gbg(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.x
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cC])
for(n=0,m=0;m<s;++m){l=a3.e4(m)
k=l.gbg(l)
C.a.F(o,m,new Z.cC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.l(u,j)
i=u[j].eq(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.F(p,h,i[g]);++h}}n+=k}H.r(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.j6(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cD(new Z.dj(a0,f),o)
e.scW(H.c([],[Z.b_]))
if(a.b.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)}b=Z.j2(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.b_(0,d.length,b))}if(a.c.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)}b=Z.j2(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.b_(1,d.length,b))}if(a.d.b.length!==0){t=P.y
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].c
c.a.a.H()
C.a.h(d,c.e)}b=Z.j2(u,34963,H.r(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.b_(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.q(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.q(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.q(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.q(t))}return C.a.k(s,"\n")},
U:function(){var u=this.e
if(u!=null)u.S(null)},
$imc:1}
F.fO.prototype={
e1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
C.a.h(u,F.cM(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cM(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cM(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cM(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
b1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].b0())s=!1
return s},
i:function(a){return this.A()},
q:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(a))
return C.a.k(r,"\n")},
A:function(){return this.q("")},
scR:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")}}
F.fP.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var u,t,s=H.c([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].q(a+(""+u+". ")))}return C.a.k(s,"\n")},
A:function(){return this.q("")},
scX:function(a){this.b=H.r(a,"$ib",[F.aM],"$ab")}}
F.fQ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(a))
return C.a.k(r,"\n")},
A:function(){return this.q("")},
saU:function(a){this.b=H.r(a,"$ib",[F.b3],"$ab")}}
F.am.prototype={
b4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.k0(u.cx,r,o,t,s,q,p,a,n)},
eb:function(){return this.b4(null)},
eq:function(a){var u,t,s=this
if(a.n(0,$.aR())){u=s.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bD())){u=s.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bC())){u=H.c([0,0,1],[P.x])
return u}else if(a.n(0,$.bE())){u=s.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bF())){u=s.z
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cv())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cw())){u=s.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bG()))return H.c([s.ch],[P.x])
else if(a.n(0,$.bB())){u=s.cx
t=[P.x]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.x])},
b0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.j1()
t.d.D(0,new F.hJ(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.N(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.aD(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.b.V(J.a7(s.e),0))
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
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.E(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
A:function(){return this.q("")}}
F.hJ.prototype={
$1:function(a){var u,t
H.n(a,"$iU")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.G(0,u)}},
$S:7}
F.hD.prototype={
H:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.T("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.U()
return!0},
bK:function(a,b){var u=null,t=F.k0(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
b1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].b0()
return!0},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
this.H()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].q(a))
return C.a.k(u,"\n")},
A:function(){return this.q("")},
se_:function(a){this.c=H.r(a,"$ib",[F.am],"$ab")}}
F.hE.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var u=this
H.k(b,{func:1,ret:-1,args:[F.U]})
C.a.D(u.b,b)
C.a.D(u.c,new F.hF(u,b))
C.a.D(u.d,new F.hG(u,b))},
i:function(a){return this.A()},
A:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
return C.a.k(r,"\n")},
scS:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")},
scT:function(a){this.c=H.r(a,"$ib",[F.U],"$ab")},
scU:function(a){this.d=H.r(a,"$ib",[F.U],"$ab")}}
F.hF.prototype={
$1:function(a){H.n(a,"$iU")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:7}
F.hG.prototype={
$1:function(a){var u
H.n(a,"$iU")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:7}
F.hH.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.A()},
A:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
return C.a.k(r,"\n")},
scY:function(a){this.b=H.r(a,"$ib",[F.aM],"$ab")},
scZ:function(a){this.c=H.r(a,"$ib",[F.aM],"$ab")}}
F.hI.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].q(""))
return C.a.k(r,"\n")},
saU:function(a){this.b=H.r(a,"$ib",[F.b3],"$ab")}}
O.ey.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.aY():u},
as:function(a){var u=this.f
if(u!=null)u.S(a)}}
O.bs.prototype={}
V.aJ.prototype={
a2:function(a,b){return!0},
i:function(a){return"all"},
$ia8:1}
V.a8.prototype={}
V.cV.prototype={
a2:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].a2(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sL:function(a){this.a=H.r(a,"$ib",[V.a8],"$ab")},
$ia8:1}
V.a4.prototype={
a2:function(a,b){return!this.cr(0,b)},
i:function(a){return"!["+this.bh(0)+"]"}}
V.fE.prototype={
a2:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.iY(this.a),t=H.iY(this.b)
return u+".."+t},
$ia8:1}
V.fN.prototype={
cu:function(a){var u,t
if(a.a.length<=0)throw H.f(P.T("May not create a SetMatcher with zero characters."))
u=new H.av([P.y,P.L])
for(t=new H.bT(a,a.gl(a),[H.ct(a,"t",0)]);t.p();)u.F(0,t.d,!0)
this.sdO(u)},
a2:function(a,b){return this.a.bN(0,b)},
i:function(a){var u=this.a
return P.iZ(new H.cS(u,[H.u(u,0)]))},
sdO:function(a){this.a=H.r(a,"$iG",[P.y,P.L],"$aG")},
$ia8:1}
V.c2.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c7(this.a.j(0,b))
r.sL(H.c([],[V.a8]))
r.c=!1
C.a.h(this.c,r)
return r},
ej:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.a2(0,a))return r}return},
i:function(a){return this.b},
sdY:function(a){this.c=H.r(a,"$ib",[V.c7],"$ab")}}
V.dc.prototype={
i:function(a){var u=H.jl(this.b,"\n","\\n"),t=H.jl(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c6.prototype={
a3:function(a,b,c){var u,t,s
H.r(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.F(0,s,b)}},
i:function(a){return this.b},
sdK:function(a){var u=P.e
this.c=H.r(a,"$iG",[u,u],"$aG")}}
V.hc.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c2(this,b)
u.sdY(H.c([],[V.c7]))
u.d=null
this.a.F(0,b,u)}return u},
B:function(a){var u,t=this.b.m(0,a)
if(t==null){t=new V.c6(a)
u=P.e
t.sdK(new H.av([u,u]))
this.b.F(0,a,t)}return t},
c9:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dc]),l=this.c,k=[P.y],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.b.a9(a,s)
q=l.ej(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.iZ(j)
throw H.f(P.T("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.iZ(j)
o=l.d
n=o.c.m(0,p)
t=new V.dc(n==null?o.b:n,p,s)}++s}}},
sdU:function(a){this.a=H.r(a,"$iG",[P.e,V.c2],"$aG")},
sdX:function(a){this.b=H.r(a,"$iG",[P.e,V.c6],"$aG")}}
V.c7.prototype={
i:function(a){return this.b.b+": "+this.bh(0)}}
X.cF.prototype={$ijE:1}
X.eS.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.aY():u}}
X.d0.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.aY():u},
a8:function(a){var u
H.n(a,"$iF")
u=this.f
if(u!=null)u.S(a)},
cE:function(){return this.a8(null)},
san:function(a){var u,t,s=this
if(!J.a_(s.b,a)){u=s.b
if(u!=null)u.gv().J(0,s.gbl())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gbl())
u=new D.Q("mover",t,s.b,[U.bW])
u.b=!0
s.a8(u)}},
$ijE:1,
$icF:1}
X.da.prototype={}
V.aU.prototype={
ar:function(a){this.b=new P.eW(C.F)
this.c=null
this.saP(H.c([],[[P.b,W.ad]]))},
u:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ad]))
u=a.split("\n")
for(l=u.length,t=[W.ad],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.z(q)
o=m.b.cL(q,0,q.length)
n=o==null?q:o
C.E.cm(p,H.jl(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaB(m.d),p)}},
bY:function(a,b){var u,t,s,r,q=this
H.r(b,"$ib",[P.e],"$ab")
q.saP(H.c([],[[P.b,W.ad]]))
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.az():t).c9(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)q.aC(t[r])},
saP:function(a){this.d=H.r(a,"$ib",[[P.b,W.ad]],"$ab")}}
V.ew.prototype={
aC:function(a){var u=this
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
az:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hd()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.O("a","z")
C.a.h(u.a,t)
t=V.O("A","Z")
C.a.h(u.a,t)
t=a1.j(0,q).k(0,q)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.O("0","9")
C.a.h(t.a,u)
u=V.O("a","z")
C.a.h(t.a,u)
u=V.O("A","Z")
C.a.h(t.a,u)
u=a1.j(0,r).k(0,p)
t=V.O("0","9")
C.a.h(u.a,t)
t=a1.j(0,p).k(0,p)
u=V.O("0","9")
C.a.h(t.a,u)
u=a1.j(0,p).k(0,o)
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=a1.j(0,o).k(0,n)
u=V.O("0","9")
C.a.h(t.a,u)
u=a1.j(0,n).k(0,n)
t=V.O("0","9")
C.a.h(u.a,t)
t=a1.j(0,r).k(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=a1.j(0,m).k(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,k)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=a1.j(0,k).k(0,j)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=a1.j(0,k).k(0,i)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,i).k(0,k)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
C.a.h(a1.j(0,k).k(0,k).a,new V.aJ())
t=a1.j(0,r).k(0,h)
u=V.q(new H.o("'"))
C.a.h(t.a,u)
u=a1.j(0,h).k(0,g)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
t=a1.j(0,h).k(0,f)
u=V.q(new H.o("\\"))
C.a.h(t.a,u)
u=a1.j(0,f).k(0,h)
t=V.q(new H.o("'"))
C.a.h(u.a,t)
C.a.h(a1.j(0,h).k(0,h).a,new V.aJ())
t=a1.j(0,r).k(0,e)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,d)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,d).k(0,c)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,d).k(0,d)
t=new V.a4()
s=[V.a8]
t.sL(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=a1.j(0,e).k(0,b)
t=V.q(new H.o("*"))
C.a.h(u.a,t)
t=a1.j(0,b).k(0,a)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,b)
t=new V.a4()
t.sL(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("*"))
C.a.h(t.a,u)
u=a1.j(0,a).k(0,c)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
t=a1.j(0,r).k(0,a0)
u=V.q(new H.o(" \n\t"))
C.a.h(t.a,u)
u=a1.j(0,a0).k(0,a0)
t=V.q(new H.o(" \n\t"))
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
t.a3(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a3(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a3(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eT.prototype={
aC:function(a){var u=this
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
az:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hd()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.O("a","z")
C.a.h(u.a,t)
t=V.O("A","Z")
C.a.h(u.a,t)
t=e.j(0,q).k(0,q)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.O("0","9")
C.a.h(t.a,u)
u=V.O("a","z")
C.a.h(t.a,u)
u=V.O("A","Z")
C.a.h(t.a,u)
u=e.j(0,r).k(0,p)
t=V.O("0","9")
C.a.h(u.a,t)
t=e.j(0,p).k(0,p)
u=V.O("0","9")
C.a.h(t.a,u)
u=e.j(0,p).k(0,o)
t=V.q(new H.o("."))
C.a.h(u.a,t)
t=e.j(0,o).k(0,n)
u=V.O("0","9")
C.a.h(t.a,u)
u=e.j(0,n).k(0,n)
t=V.O("0","9")
C.a.h(u.a,t)
t=e.j(0,r).k(0,m)
u=V.q(new H.o(l))
C.a.h(t.a,u)
u=e.j(0,m).k(0,m)
t=V.q(new H.o(l))
C.a.h(u.a,t)
t=e.j(0,r).k(0,k)
u=V.q(new H.o("/"))
C.a.h(t.a,u)
u=e.j(0,k).k(0,j)
t=V.q(new H.o("/"))
C.a.h(u.a,t)
C.a.h(e.j(0,k).k(0,m).a,new V.aJ())
t=e.j(0,j).k(0,i)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,j).k(0,j)
t=new V.a4()
s=[V.a8]
t.sL(H.c([],s))
C.a.h(u.a,t)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,h)
t=V.q(new H.o("#"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,h)
u=new V.a4()
u.sL(H.c([],s))
C.a.h(t.a,u)
t=V.q(new H.o("\n"))
C.a.h(u.a,t)
t=e.j(0,h).k(0,g)
u=V.q(new H.o("\n"))
C.a.h(t.a,u)
u=e.j(0,r).k(0,f)
t=V.q(new H.o(" \n\t"))
C.a.h(u.a,t)
t=e.j(0,f).k(0,f)
u=V.q(new H.o(" \n\t"))
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
u.a3(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a3(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a3(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.eU.prototype={
aC:function(a){var u=this,t="#111"
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
az:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hd()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=V.q(new H.o("_"))
C.a.h(u.a,t)
t=V.O("a","z")
C.a.h(u.a,t)
t=V.O("A","Z")
C.a.h(u.a,t)
t=l.j(0,r).k(0,r)
u=V.q(new H.o("_"))
C.a.h(t.a,u)
u=V.O("0","9")
C.a.h(t.a,u)
u=V.O("a","z")
C.a.h(t.a,u)
u=V.O("A","Z")
C.a.h(t.a,u)
u=l.j(0,r).k(0,q)
t=V.q(new H.o("="))
C.a.h(u.a,t)
u.c=!0
u=l.j(0,s).k(0,p)
t=V.q(new H.o("</\\-!>="))
C.a.h(u.a,t)
t=l.j(0,p).k(0,p)
u=V.q(new H.o("</\\-!>="))
C.a.h(t.a,u)
u=l.j(0,s).k(0,o)
t=V.q(new H.o('"'))
C.a.h(u.a,t)
t=l.j(0,o).k(0,n)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
u=l.j(0,o).k(0,"EscStr")
t=V.q(new H.o("\\"))
C.a.h(u.a,t)
t=l.j(0,"EscStr").k(0,o)
u=V.q(new H.o('"'))
C.a.h(t.a,u)
C.a.h(l.j(0,o).k(0,o).a,new V.aJ())
C.a.h(l.j(0,s).k(0,m).a,new V.aJ())
u=l.j(0,m).k(0,m)
t=new V.a4()
t.sL(H.c([],[V.a8]))
C.a.h(u.a,t)
u=V.q(new H.o('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.O("a","z")
C.a.h(t.a,u)
u=V.O("A","Z")
C.a.h(t.a,u)
u=l.j(0,p)
u.d=u.a.B("Symbol")
u=l.j(0,n)
u.d=u.a.B("String")
u=l.j(0,r)
t=u.a.B(r)
u.d=t
t.a3(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.j(0,q)
t.d=t.a.B(q)
t=l.j(0,m)
t.d=t.a.B(m)
return l}}
V.fA.prototype={
bY:function(a,b){H.r(b,"$ib",[P.e],"$ab")
this.saP(H.c([],[[P.b,W.ad]]))
this.u(C.a.k(b,"\n"),"#111")},
aC:function(a){},
az:function(){return}}
V.fR.prototype={
cw:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.j
W.X(q,"scroll",H.k(new V.fT(o),{func:1,ret:-1,args:[r]}),!1,r)},
al:function(a,b){var u,t,s,r,q
a=H.Y(C.e.e9(a,0,4))
u=P.j5(C.j,b,C.h,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.iO()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
M:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.r(a,"$ib",[P.e],"$ab")
this.dQ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.c9(C.a.ep(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.m0(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
t.appendChild(l)}else{k=P.j5(C.j,n,C.h,!1)
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
cg:function(a){var u,t,s,r=new V.ew("dart")
r.ar("dart")
u=new V.eT("glsl")
u.ar("glsl")
t=new V.eU("html")
t.ar("html")
s=C.a.ek(H.c([r,u,t],[V.aU]),new V.fU(a))
if(s!=null)return s
r=new V.fA("plain")
r.ar("plain")
return r},
bJ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.r(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(C.b.aG(r,"+")){C.a.F(b0,s,C.b.aH(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aG(r,"-")){C.a.F(b0,s,C.b.aH(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cg(a8)
q.bY(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.j5(C.j,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iO()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.M.e3(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gE(r);a3.p();)c.appendChild(a3.gw(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
dQ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hd()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new V.a4()
r=[V.a8]
s.sL(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,p).k(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,o)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new V.a4()
s.sL(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,o).k(0,n)
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,m)
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new V.a4()
s.sL(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,m).k(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,q).k(0,l)
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,l).k(0,k)
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,l).k(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new V.a4()
t.sL(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,k).k(0,j)
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new V.a4()
t.sL(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,q).k(0,i).a,new V.aJ())
s=u.j(0,i).k(0,i)
t=new V.a4()
t.sL(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("*_`["))
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
V.fT.prototype={
$1:function(a){P.jU(C.i,new V.fS(this.a))},
$S:33}
V.fS.prototype={
$0:function(){var u=C.c.X(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
V.fU.prototype={
$1:function(a){return H.n(a,"$iaU").a===this.a},
$S:34};(function aliases(){var u=J.a.prototype
u.co=u.i
u=J.cQ.prototype
u.cq=u.i
u=P.i.prototype
u.cp=u.aE
u=W.J.prototype
u.aI=u.R
u=W.dO.prototype
u.cs=u.a_
u=V.cV.prototype
u.cr=u.a2
u.bh=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"lC","lm",6)
u(P,"lD","ln",6)
u(P,"lE","lo",6)
t(P,"ke","lA",2)
s(W,"lM",4,null,["$4"],["lq"],17,0)
s(W,"lN",4,null,["$4"],["lr"],17,0)
var m
r(m=E.a3.prototype,"gbU",0,0,null,["$1","$0"],["bV","eA"],1,0)
r(m,"gbW",0,0,null,["$1","$0"],["bX","eB"],1,0)
r(m,"gbS",0,0,null,["$1","$0"],["bT","ez"],1,0)
r(m,"gbQ",0,0,null,["$1","$0"],["bR","ew"],1,0)
q(m,"geu","ev",5)
q(m,"gex","ey",5)
r(m=E.db.prototype,"gbi",0,0,null,["$1","$0"],["bk","bj"],1,0)
p(m,"geL","c2",2)
o(m=X.dh.prototype,"gdf","dg",8)
o(m,"gd2","d3",8)
o(m,"gd8","d9",3)
o(m,"gdj","dk",11)
o(m,"gdh","di",11)
o(m,"gdm","dn",3)
o(m,"gds","dt",3)
o(m,"gdd","de",3)
o(m,"gdq","dr",3)
o(m,"gda","dc",3)
o(m,"gdu","dv",28)
o(m,"gdw","dz",8)
o(m,"gdF","dG",10)
o(m,"gdB","dC",10)
o(m,"gdD","dE",10)
n(V.aP.prototype,"gl","b7",21)
n(V.S.prototype,"gl","b7",21)
r(m=M.cK.prototype,"ga6",0,0,null,["$1","$0"],["a7","cB"],1,0)
q(m,"gd4","d5",5)
q(m,"gd6","d7",5)
r(X.d0.prototype,"gbl",0,0,null,["$1","$0"],["a8","cE"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.iW,J.a,J.ac,P.dB,P.i,H.bT,P.at,H.bh,H.dg,H.hi,P.aX,H.bK,H.dT,P.V,H.f7,H.f8,H.f3,P.ir,P.aI,P.ag,P.dk,P.h0,P.c4,P.h1,P.a0,P.iv,P.ii,P.bt,P.ia,P.t,P.bL,P.eX,P.it,P.L,P.bP,P.Z,P.bg,P.fy,P.d8,P.dt,P.eR,P.aZ,P.b,P.G,P.H,P.a5,P.e,P.bq,W.es,W.b5,W.v,W.cZ,W.dO,W.io,W.cN,W.a9,W.ih,W.e2,P.ib,O.aV,O.bU,E.em,E.a3,E.fF,E.db,Z.dj,Z.hL,Z.cD,Z.b_,Z.di,D.ep,D.bR,D.F,X.cE,X.cR,X.f5,X.fa,X.bV,X.fm,X.he,X.dh,V.be,V.bf,V.eI,V.b1,V.aa,V.bl,V.d2,V.d4,V.aP,V.S,M.cK,A.cz,A.eh,A.dd,A.hs,F.U,F.aM,F.b3,F.d7,F.fO,F.fP,F.fQ,F.am,F.hD,F.hE,F.hH,F.hI,O.bs,V.aJ,V.a8,V.cV,V.fE,V.fN,V.c2,V.dc,V.c6,V.hc,X.cF,X.da,X.d0,V.aU,V.fR])
s(J.a,[J.f0,J.f2,J.cQ,J.au,J.cP,J.bj,H.bY,W.d,W.ee,W.cA,W.ap,W.aq,W.K,W.dm,W.ex,W.eA,W.dp,W.cJ,W.dr,W.eC,W.j,W.du,W.as,W.eV,W.dx,W.cU,W.fg,W.dC,W.dD,W.ax,W.dE,W.dH,W.ay,W.dL,W.dN,W.aB,W.dP,W.aC,W.dU,W.ai,W.dX,W.hb,W.aE,W.dZ,W.hg,W.hA,W.e3,W.e5,W.e7,W.e9,W.eb,P.aL,P.dz,P.aN,P.dJ,P.fC,P.dV,P.aO,P.e0,P.ei,P.dl,P.cB,P.d3,P.bp,P.d6,P.de,P.dR])
s(J.cQ,[J.fz,J.cb,J.b0])
t(J.iV,J.au)
s(J.cP,[J.cO,J.f1])
t(P.f9,P.dB)
s(P.f9,[H.df,W.hT,W.a1,P.eN])
t(H.o,H.df)
s(P.i,[H.eF,H.fd,H.cc])
s(H.eF,[H.bk,H.cS])
s(P.at,[H.fe,H.hM])
t(H.ff,H.bk)
s(P.aX,[H.fv,H.f4,H.hy,H.hk,H.eo,H.fL,P.eg,P.d_,P.an,P.hz,P.hx,P.c3,P.eq,P.ev])
s(H.bK,[H.iM,H.h7,H.iG,H.iH,H.iI,P.hP,P.hO,P.hQ,P.hR,P.is,P.hZ,P.i2,P.i_,P.i0,P.i1,P.i5,P.i6,P.i4,P.i3,P.h2,P.h3,P.iz,P.ie,P.id,P.ig,P.fc,P.eD,P.eE,W.eG,W.fi,W.fk,W.fK,W.h_,W.hY,W.fu,W.ft,W.ij,W.ik,W.iq,W.iu,P.iB,P.eO,P.eP,P.ek,E.fG,E.fH,E.fI,E.ha,D.eJ,D.eK,F.iw,F.hJ,F.hF,F.hG,V.fT,V.fS,V.fU])
s(H.h7,[H.fY,H.bI])
t(H.hN,P.eg)
t(P.fb,P.V)
s(P.fb,[H.av,W.hS])
t(H.cW,H.bY)
s(H.cW,[H.cg,H.ci])
t(H.ch,H.cg)
t(H.bX,H.ch)
t(H.cj,H.ci)
t(H.cX,H.cj)
s(H.cX,[H.fn,H.fo,H.fp,H.fq,H.fr,H.cY,H.fs])
t(P.ic,P.iv)
t(P.i9,P.ii)
t(P.bM,P.h1)
t(P.eH,P.bL)
s(P.bM,[P.eW,P.hC])
t(P.hB,P.eH)
s(P.Z,[P.x,P.y])
s(P.an,[P.bo,P.eY])
s(W.d,[W.w,W.eM,W.aA,W.ck,W.aD,W.aj,W.cm,W.hK,W.cd,P.el,P.bc])
s(W.w,[W.J,W.aT,W.ce])
s(W.J,[W.p,P.m])
s(W.p,[W.cy,W.ef,W.bH,W.aS,W.bd,W.ad,W.eQ,W.fM,W.br,W.d9,W.h5,W.h6,W.c5])
s(W.ap,[W.bN,W.et,W.eu])
t(W.er,W.aq)
t(W.bO,W.dm)
t(W.dq,W.dp)
t(W.cI,W.dq)
t(W.ds,W.dr)
t(W.eB,W.ds)
t(W.ar,W.cA)
t(W.dv,W.du)
t(W.eL,W.dv)
t(W.dy,W.dx)
t(W.bi,W.dy)
t(W.b4,W.j)
s(W.b4,[W.aw,W.W,W.ak])
t(W.fh,W.dC)
t(W.fj,W.dD)
t(W.dF,W.dE)
t(W.fl,W.dF)
t(W.dI,W.dH)
t(W.bZ,W.dI)
t(W.dM,W.dL)
t(W.fB,W.dM)
t(W.fJ,W.dN)
t(W.cl,W.ck)
t(W.fV,W.cl)
t(W.dQ,W.dP)
t(W.fW,W.dQ)
t(W.fZ,W.dU)
t(W.dY,W.dX)
t(W.h8,W.dY)
t(W.cn,W.cm)
t(W.h9,W.cn)
t(W.e_,W.dZ)
t(W.hf,W.e_)
t(W.aH,W.W)
t(W.e4,W.e3)
t(W.hU,W.e4)
t(W.dn,W.cJ)
t(W.e6,W.e5)
t(W.i7,W.e6)
t(W.e8,W.e7)
t(W.dG,W.e8)
t(W.ea,W.e9)
t(W.il,W.ea)
t(W.ec,W.eb)
t(W.im,W.ec)
t(W.hV,W.hS)
t(W.hW,P.h0)
t(W.j3,W.hW)
t(W.hX,P.c4)
t(W.ip,W.dO)
t(P.ae,P.ib)
t(P.dA,P.dz)
t(P.f6,P.dA)
t(P.dK,P.dJ)
t(P.fw,P.dK)
t(P.c0,P.m)
t(P.dW,P.dV)
t(P.h4,P.dW)
t(P.e1,P.e0)
t(P.hh,P.e1)
t(P.ej,P.dl)
t(P.fx,P.bc)
t(P.dS,P.dR)
t(P.fX,P.dS)
s(E.em,[Z.cC,A.c1])
s(D.F,[D.eZ,D.f_,D.Q])
t(U.bW,D.ep)
s(U.bW,[U.cG,U.d5])
t(A.ez,A.c1)
s(A.dd,[A.hl,A.ho,A.hp,A.hr,A.hm,A.c8,A.hn,A.c9,A.hq,A.ht,A.hu,A.ca,A.hv,A.hw])
t(O.ey,O.bs)
s(V.cV,[V.a4,V.c7])
t(X.eS,X.da)
s(V.aU,[V.ew,V.eT,V.eU,V.fA])
u(H.df,H.dg)
u(H.cg,P.t)
u(H.ch,H.bh)
u(H.ci,P.t)
u(H.cj,H.bh)
u(P.dB,P.t)
u(W.dm,W.es)
u(W.dp,P.t)
u(W.dq,W.v)
u(W.dr,P.t)
u(W.ds,W.v)
u(W.du,P.t)
u(W.dv,W.v)
u(W.dx,P.t)
u(W.dy,W.v)
u(W.dC,P.V)
u(W.dD,P.V)
u(W.dE,P.t)
u(W.dF,W.v)
u(W.dH,P.t)
u(W.dI,W.v)
u(W.dL,P.t)
u(W.dM,W.v)
u(W.dN,P.V)
u(W.ck,P.t)
u(W.cl,W.v)
u(W.dP,P.t)
u(W.dQ,W.v)
u(W.dU,P.V)
u(W.dX,P.t)
u(W.dY,W.v)
u(W.cm,P.t)
u(W.cn,W.v)
u(W.dZ,P.t)
u(W.e_,W.v)
u(W.e3,P.t)
u(W.e4,W.v)
u(W.e5,P.t)
u(W.e6,W.v)
u(W.e7,P.t)
u(W.e8,W.v)
u(W.e9,P.t)
u(W.ea,W.v)
u(W.eb,P.t)
u(W.ec,W.v)
u(P.dz,P.t)
u(P.dA,W.v)
u(P.dJ,P.t)
u(P.dK,W.v)
u(P.dV,P.t)
u(P.dW,W.v)
u(P.e0,P.t)
u(P.e1,W.v)
u(P.dl,P.V)
u(P.dR,P.t)
u(P.dS,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.aS.prototype
C.D=W.bd.prototype
C.E=W.ad.prototype
C.G=J.a.prototype
C.a=J.au.prototype
C.e=J.cO.prototype
C.c=J.cP.prototype
C.b=J.bj.prototype
C.H=J.b0.prototype
C.L=W.bZ.prototype
C.q=J.fz.prototype
C.f=P.bp.prototype
C.M=W.br.prototype
C.r=W.d9.prototype
C.m=J.cb.prototype
C.t=W.aH.prototype
C.u=W.cd.prototype
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.B=new P.fy()
C.h=new P.hB()
C.C=new P.hC()
C.d=new P.ic()
C.i=new P.bg(0)
C.F=new P.eX("element",!0,!1,!1,!1)
C.I=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.J=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.K=H.c(u([]),[P.e])
C.j=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.k=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.l=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{y:"int",x:"double",Z:"num",e:"String",L:"bool",H:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.F]},{func:1,ret:-1},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.i,E.a3]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[F.U]},{func:1,ret:-1,args:[W.j]},{func:1,ret:P.H,args:[D.F]},{func:1,ret:-1,args:[W.ak]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.L,args:[W.w]},{func:1,args:[,]},{func:1,ret:P.L,args:[W.J,P.e,P.e,W.b5]},{func:1,ret:P.L,args:[W.a9]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.F]}]},{func:1,ret:P.x},{func:1,ret:P.e,args:[P.e]},{func:1,ret:P.H,args:[P.Z]},{func:1,args:[W.j]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.H,args:[,],opt:[P.a5]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.H,args:[F.am,P.x,P.x]},{func:1,args:[P.e]},{func:1,ret:P.H,args:[W.j]},{func:1,ret:P.L,args:[V.aU]},{func:1,args:[,P.e]},{func:1,ret:W.J,args:[W.w]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ao=0
$.bJ=null
$.jq=null
$.j7=!1
$.ki=null
$.kc=null
$.ko=null
$.iC=null
$.iJ=null
$.ji=null
$.bu=null
$.cp=null
$.cq=null
$.j8=!1
$.R=C.d
$.a6=[]
$.aK=null
$.iR=null
$.jw=null
$.jv=null
$.dw=P.jy(P.e,P.aZ)
$.jC=null
$.jI=null
$.jJ=null
$.jO=null
$.jX=null
$.k_=null
$.jZ=null
$.jY=null
$.jH=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"m8","ks",function(){return H.kh("_$dart_dartClosure")})
u($,"m9","jn",function(){return H.kh("_$dart_js")})
u($,"me","kt",function(){return H.aF(H.hj({
toString:function(){return"$receiver$"}}))})
u($,"mf","ku",function(){return H.aF(H.hj({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mg","kv",function(){return H.aF(H.hj(null))})
u($,"mh","kw",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mk","kz",function(){return H.aF(H.hj(void 0))})
u($,"ml","kA",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mj","ky",function(){return H.aF(H.jV(null))})
u($,"mi","kx",function(){return H.aF(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mn","kC",function(){return H.aF(H.jV(void 0))})
u($,"mm","kB",function(){return H.aF(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mC","jo",function(){return P.ll()})
u($,"mE","kH",function(){return P.le("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mD","kG",function(){return P.jz(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"mv","kF",function(){return Z.af(0)})
u($,"mp","kD",function(){return Z.af(511)})
u($,"mx","aR",function(){return Z.af(1)})
u($,"mw","bD",function(){return Z.af(2)})
u($,"mr","bC",function(){return Z.af(4)})
u($,"my","bE",function(){return Z.af(8)})
u($,"mz","bF",function(){return Z.af(16)})
u($,"ms","cv",function(){return Z.af(32)})
u($,"mt","cw",function(){return Z.af(64)})
u($,"mu","kE",function(){return Z.af(96)})
u($,"mA","bG",function(){return Z.af(128)})
u($,"mq","bB",function(){return Z.af(256)})
u($,"m7","kr",function(){return new V.eI(1e-9)})
u($,"m6","M",function(){return $.kr()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bY,ArrayBufferView:H.bY,Float32Array:H.bX,Float64Array:H.bX,Int16Array:H.fn,Int32Array:H.fo,Int8Array:H.fp,Uint16Array:H.fq,Uint32Array:H.fr,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.fs,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.ee,HTMLAnchorElement:W.cy,HTMLAreaElement:W.ef,HTMLBaseElement:W.bH,Blob:W.cA,HTMLBodyElement:W.aS,HTMLCanvasElement:W.bd,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CSSNumericValue:W.bN,CSSUnitValue:W.bN,CSSPerspective:W.er,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.bO,MSStyleCSSProperties:W.bO,CSS2Properties:W.bO,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.et,CSSUnparsedValue:W.eu,DataTransferItemList:W.ex,HTMLDivElement:W.ad,DOMException:W.eA,ClientRectList:W.cI,DOMRectList:W.cI,DOMRectReadOnly:W.cJ,DOMStringList:W.eB,DOMTokenList:W.eC,Element:W.J,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ar,FileList:W.eL,FileWriter:W.eM,HTMLFormElement:W.eQ,Gamepad:W.as,History:W.eV,HTMLCollection:W.bi,HTMLFormControlsCollection:W.bi,HTMLOptionsCollection:W.bi,KeyboardEvent:W.aw,Location:W.cU,MediaList:W.fg,MIDIInputMap:W.fh,MIDIOutputMap:W.fj,MimeType:W.ax,MimeTypeArray:W.fl,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.bZ,RadioNodeList:W.bZ,Plugin:W.ay,PluginArray:W.fB,RTCStatsReport:W.fJ,HTMLSelectElement:W.fM,SourceBuffer:W.aA,SourceBufferList:W.fV,SpeechGrammar:W.aB,SpeechGrammarList:W.fW,SpeechRecognitionResult:W.aC,Storage:W.fZ,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableCellElement:W.br,HTMLTableDataCellElement:W.br,HTMLTableHeaderCellElement:W.br,HTMLTableElement:W.d9,HTMLTableRowElement:W.h5,HTMLTableSectionElement:W.h6,HTMLTemplateElement:W.c5,TextTrack:W.aD,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.h8,TextTrackList:W.h9,TimeRanges:W.hb,Touch:W.aE,TouchEvent:W.ak,TouchList:W.hf,TrackDefaultList:W.hg,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.hA,VideoTrackList:W.hK,WheelEvent:W.aH,Window:W.cd,DOMWindow:W.cd,Attr:W.ce,CSSRuleList:W.hU,ClientRect:W.dn,DOMRect:W.dn,GamepadList:W.i7,NamedNodeMap:W.dG,MozNamedAttrMap:W.dG,SpeechRecognitionResultList:W.il,StyleSheetList:W.im,SVGLength:P.aL,SVGLengthList:P.f6,SVGNumber:P.aN,SVGNumberList:P.fw,SVGPointList:P.fC,SVGScriptElement:P.c0,SVGStringList:P.h4,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aO,SVGTransformList:P.hh,AudioBuffer:P.ei,AudioParamMap:P.ej,AudioTrackList:P.el,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.fx,WebGLBuffer:P.cB,WebGLProgram:P.d3,WebGL2RenderingContext:P.bp,WebGLShader:P.d6,WebGLUniformLocation:P.de,SQLResultSetRowList:P.fX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(F.kk,[])
else F.kk([])})})()
//# sourceMappingURL=main.dart.js.map
